function Hc(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Is = { exports: {} }, zr = {};
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
function t1() {
  if (Ip) return zr;
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
  return zr.Fragment = a, zr.jsx = i, zr.jsxs = i, zr;
}
var Jp;
function n1() {
  return Jp || (Jp = 1, Is.exports = t1()), Is.exports;
}
var Z = n1(), Js = { exports: {} }, Te = {};
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
function l1() {
  if (Pp) return Te;
  Pp = 1;
  var n = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), x = Symbol.iterator;
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
  }, C = Object.assign, R = {};
  function B(b, j, W) {
    this.props = b, this.context = j, this.refs = R, this.updater = W || S;
  }
  B.prototype.isReactComponent = {}, B.prototype.setState = function(b, j) {
    if (typeof b != "object" && typeof b != "function" && b != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, b, j, "setState");
  }, B.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function U() {
  }
  U.prototype = B.prototype;
  function J(b, j, W) {
    this.props = b, this.context = j, this.refs = R, this.updater = W || S;
  }
  var K = J.prototype = new U();
  K.constructor = J, C(K, B.prototype), K.isPureReactComponent = !0;
  var ce = Array.isArray, $ = { H: null, A: null, T: null, S: null, V: null }, L = Object.prototype.hasOwnProperty;
  function ie(b, j, W, E, ne, Se) {
    return W = Se.ref, {
      $$typeof: n,
      type: b,
      key: j,
      ref: W !== void 0 ? W : null,
      props: Se
    };
  }
  function P(b, j) {
    return ie(
      b.type,
      j,
      void 0,
      void 0,
      void 0,
      b.props
    );
  }
  function fe(b) {
    return typeof b == "object" && b !== null && b.$$typeof === n;
  }
  function Ee(b) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(W) {
      return j[W];
    });
  }
  var le = /\/+/g;
  function ee(b, j) {
    return typeof b == "object" && b !== null && b.key != null ? Ee("" + b.key) : j.toString(36);
  }
  function ae() {
  }
  function te(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (typeof b.status == "string" ? b.then(ae, ae) : (b.status = "pending", b.then(
          function(j) {
            b.status === "pending" && (b.status = "fulfilled", b.value = j);
          },
          function(j) {
            b.status === "pending" && (b.status = "rejected", b.reason = j);
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
  function X(b, j, W, E, ne) {
    var Se = typeof b;
    (Se === "undefined" || Se === "boolean") && (b = null);
    var re = !1;
    if (b === null) re = !0;
    else
      switch (Se) {
        case "bigint":
        case "string":
        case "number":
          re = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case n:
            case a:
              re = !0;
              break;
            case m:
              return re = b._init, X(
                re(b._payload),
                j,
                W,
                E,
                ne
              );
          }
      }
    if (re)
      return ne = ne(b), re = E === "" ? "." + ee(b, 0) : E, ce(ne) ? (W = "", re != null && (W = re.replace(le, "$&/") + "/"), X(ne, j, W, "", function(et) {
        return et;
      })) : ne != null && (fe(ne) && (ne = P(
        ne,
        W + (ne.key == null || b && b.key === ne.key ? "" : ("" + ne.key).replace(
          le,
          "$&/"
        ) + "/") + re
      )), j.push(ne)), 1;
    re = 0;
    var _e = E === "" ? "." : E + ":";
    if (ce(b))
      for (var Ne = 0; Ne < b.length; Ne++)
        E = b[Ne], Se = _e + ee(E, Ne), re += X(
          E,
          j,
          W,
          Se,
          ne
        );
    else if (Ne = w(b), typeof Ne == "function")
      for (b = Ne.call(b), Ne = 0; !(E = b.next()).done; )
        E = E.value, Se = _e + ee(E, Ne++), re += X(
          E,
          j,
          W,
          Se,
          ne
        );
    else if (Se === "object") {
      if (typeof b.then == "function")
        return X(
          te(b),
          j,
          W,
          E,
          ne
        );
      throw j = String(b), Error(
        "Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return re;
  }
  function O(b, j, W) {
    if (b == null) return b;
    var E = [], ne = 0;
    return X(b, E, "", "", function(Se) {
      return j.call(W, Se, ne++);
    }), E;
  }
  function Y(b) {
    if (b._status === -1) {
      var j = b._result;
      j = j(), j.then(
        function(W) {
          (b._status === 0 || b._status === -1) && (b._status = 1, b._result = W);
        },
        function(W) {
          (b._status === 0 || b._status === -1) && (b._status = 2, b._result = W);
        }
      ), b._status === -1 && (b._status = 0, b._result = j);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var V = typeof reportError == "function" ? reportError : function(b) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var j = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof b == "object" && b !== null && typeof b.message == "string" ? String(b.message) : String(b),
        error: b
      });
      if (!window.dispatchEvent(j)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", b);
      return;
    }
    console.error(b);
  };
  function pe() {
  }
  return Te.Children = {
    map: O,
    forEach: function(b, j, W) {
      O(
        b,
        function() {
          j.apply(this, arguments);
        },
        W
      );
    },
    count: function(b) {
      var j = 0;
      return O(b, function() {
        j++;
      }), j;
    },
    toArray: function(b) {
      return O(b, function(j) {
        return j;
      }) || [];
    },
    only: function(b) {
      if (!fe(b))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return b;
    }
  }, Te.Component = B, Te.Fragment = i, Te.Profiler = s, Te.PureComponent = J, Te.StrictMode = u, Te.Suspense = g, Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, Te.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(b) {
      return $.H.useMemoCache(b);
    }
  }, Te.cache = function(b) {
    return function() {
      return b.apply(null, arguments);
    };
  }, Te.cloneElement = function(b, j, W) {
    if (b == null)
      throw Error(
        "The argument must be a React element, but you passed " + b + "."
      );
    var E = C({}, b.props), ne = b.key, Se = void 0;
    if (j != null)
      for (re in j.ref !== void 0 && (Se = void 0), j.key !== void 0 && (ne = "" + j.key), j)
        !L.call(j, re) || re === "key" || re === "__self" || re === "__source" || re === "ref" && j.ref === void 0 || (E[re] = j[re]);
    var re = arguments.length - 2;
    if (re === 1) E.children = W;
    else if (1 < re) {
      for (var _e = Array(re), Ne = 0; Ne < re; Ne++)
        _e[Ne] = arguments[Ne + 2];
      E.children = _e;
    }
    return ie(b.type, ne, void 0, void 0, Se, E);
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
  }, Te.createElement = function(b, j, W) {
    var E, ne = {}, Se = null;
    if (j != null)
      for (E in j.key !== void 0 && (Se = "" + j.key), j)
        L.call(j, E) && E !== "key" && E !== "__self" && E !== "__source" && (ne[E] = j[E]);
    var re = arguments.length - 2;
    if (re === 1) ne.children = W;
    else if (1 < re) {
      for (var _e = Array(re), Ne = 0; Ne < re; Ne++)
        _e[Ne] = arguments[Ne + 2];
      ne.children = _e;
    }
    if (b && b.defaultProps)
      for (E in re = b.defaultProps, re)
        ne[E] === void 0 && (ne[E] = re[E]);
    return ie(b, Se, void 0, void 0, null, ne);
  }, Te.createRef = function() {
    return { current: null };
  }, Te.forwardRef = function(b) {
    return { $$typeof: p, render: b };
  }, Te.isValidElement = fe, Te.lazy = function(b) {
    return {
      $$typeof: m,
      _payload: { _status: -1, _result: b },
      _init: Y
    };
  }, Te.memo = function(b, j) {
    return {
      $$typeof: h,
      type: b,
      compare: j === void 0 ? null : j
    };
  }, Te.startTransition = function(b) {
    var j = $.T, W = {};
    $.T = W;
    try {
      var E = b(), ne = $.S;
      ne !== null && ne(W, E), typeof E == "object" && E !== null && typeof E.then == "function" && E.then(pe, V);
    } catch (Se) {
      V(Se);
    } finally {
      $.T = j;
    }
  }, Te.unstable_useCacheRefresh = function() {
    return $.H.useCacheRefresh();
  }, Te.use = function(b) {
    return $.H.use(b);
  }, Te.useActionState = function(b, j, W) {
    return $.H.useActionState(b, j, W);
  }, Te.useCallback = function(b, j) {
    return $.H.useCallback(b, j);
  }, Te.useContext = function(b) {
    return $.H.useContext(b);
  }, Te.useDebugValue = function() {
  }, Te.useDeferredValue = function(b, j) {
    return $.H.useDeferredValue(b, j);
  }, Te.useEffect = function(b, j, W) {
    var E = $.H;
    if (typeof W == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return E.useEffect(b, j);
  }, Te.useId = function() {
    return $.H.useId();
  }, Te.useImperativeHandle = function(b, j, W) {
    return $.H.useImperativeHandle(b, j, W);
  }, Te.useInsertionEffect = function(b, j) {
    return $.H.useInsertionEffect(b, j);
  }, Te.useLayoutEffect = function(b, j) {
    return $.H.useLayoutEffect(b, j);
  }, Te.useMemo = function(b, j) {
    return $.H.useMemo(b, j);
  }, Te.useOptimistic = function(b, j) {
    return $.H.useOptimistic(b, j);
  }, Te.useReducer = function(b, j, W) {
    return $.H.useReducer(b, j, W);
  }, Te.useRef = function(b) {
    return $.H.useRef(b);
  }, Te.useState = function(b) {
    return $.H.useState(b);
  }, Te.useSyncExternalStore = function(b, j, W) {
    return $.H.useSyncExternalStore(
      b,
      j,
      W
    );
  }, Te.useTransition = function() {
    return $.H.useTransition();
  }, Te.version = "19.1.0", Te;
}
var $p;
function qc() {
  return $p || ($p = 1, Js.exports = l1()), Js.exports;
}
var ge = qc();
const mg = /* @__PURE__ */ Hc(ge);
var Ps = { exports: {} }, Nr = {}, $s = { exports: {} }, Ws = {};
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
function a1() {
  return Wp || (Wp = 1, function(n) {
    function a(O, Y) {
      var V = O.length;
      O.push(Y);
      e: for (; 0 < V; ) {
        var pe = V - 1 >>> 1, b = O[pe];
        if (0 < s(b, Y))
          O[pe] = Y, O[V] = b, V = pe;
        else break e;
      }
    }
    function i(O) {
      return O.length === 0 ? null : O[0];
    }
    function u(O) {
      if (O.length === 0) return null;
      var Y = O[0], V = O.pop();
      if (V !== Y) {
        O[0] = V;
        e: for (var pe = 0, b = O.length, j = b >>> 1; pe < j; ) {
          var W = 2 * (pe + 1) - 1, E = O[W], ne = W + 1, Se = O[ne];
          if (0 > s(E, V))
            ne < b && 0 > s(Se, E) ? (O[pe] = Se, O[ne] = V, pe = ne) : (O[pe] = E, O[W] = V, pe = W);
          else if (ne < b && 0 > s(Se, V))
            O[pe] = Se, O[ne] = V, pe = ne;
          else break e;
        }
      }
      return Y;
    }
    function s(O, Y) {
      var V = O.sortIndex - Y.sortIndex;
      return V !== 0 ? V : O.id - Y.id;
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
    var g = [], h = [], m = 1, x = null, w = 3, S = !1, C = !1, R = !1, B = !1, U = typeof setTimeout == "function" ? setTimeout : null, J = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
    function ce(O) {
      for (var Y = i(h); Y !== null; ) {
        if (Y.callback === null) u(h);
        else if (Y.startTime <= O)
          u(h), Y.sortIndex = Y.expirationTime, a(g, Y);
        else break;
        Y = i(h);
      }
    }
    function $(O) {
      if (R = !1, ce(O), !C)
        if (i(g) !== null)
          C = !0, L || (L = !0, ee());
        else {
          var Y = i(h);
          Y !== null && X($, Y.startTime - O);
        }
    }
    var L = !1, ie = -1, P = 5, fe = -1;
    function Ee() {
      return B ? !0 : !(n.unstable_now() - fe < P);
    }
    function le() {
      if (B = !1, L) {
        var O = n.unstable_now();
        fe = O;
        var Y = !0;
        try {
          e: {
            C = !1, R && (R = !1, J(ie), ie = -1), S = !0;
            var V = w;
            try {
              t: {
                for (ce(O), x = i(g); x !== null && !(x.expirationTime > O && Ee()); ) {
                  var pe = x.callback;
                  if (typeof pe == "function") {
                    x.callback = null, w = x.priorityLevel;
                    var b = pe(
                      x.expirationTime <= O
                    );
                    if (O = n.unstable_now(), typeof b == "function") {
                      x.callback = b, ce(O), Y = !0;
                      break t;
                    }
                    x === i(g) && u(g), ce(O);
                  } else u(g);
                  x = i(g);
                }
                if (x !== null) Y = !0;
                else {
                  var j = i(h);
                  j !== null && X(
                    $,
                    j.startTime - O
                  ), Y = !1;
                }
              }
              break e;
            } finally {
              x = null, w = V, S = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? ee() : L = !1;
        }
      }
    }
    var ee;
    if (typeof K == "function")
      ee = function() {
        K(le);
      };
    else if (typeof MessageChannel < "u") {
      var ae = new MessageChannel(), te = ae.port2;
      ae.port1.onmessage = le, ee = function() {
        te.postMessage(null);
      };
    } else
      ee = function() {
        U(le, 0);
      };
    function X(O, Y) {
      ie = U(function() {
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
      return w;
    }, n.unstable_next = function(O) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = w;
      }
      var V = w;
      w = Y;
      try {
        return O();
      } finally {
        w = V;
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
      var V = w;
      w = O;
      try {
        return Y();
      } finally {
        w = V;
      }
    }, n.unstable_scheduleCallback = function(O, Y, V) {
      var pe = n.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? pe + V : pe) : V = pe, O) {
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
      return b = V + b, O = {
        id: m++,
        callback: Y,
        priorityLevel: O,
        startTime: V,
        expirationTime: b,
        sortIndex: -1
      }, V > pe ? (O.sortIndex = V, a(h, O), i(g) === null && O === i(h) && (R ? (J(ie), ie = -1) : R = !0, X($, V - pe))) : (O.sortIndex = b, a(g, O), C || S || (C = !0, L || (L = !0, ee()))), O;
    }, n.unstable_shouldYield = Ee, n.unstable_wrapCallback = function(O) {
      var Y = w;
      return function() {
        var V = w;
        w = Y;
        try {
          return O.apply(this, arguments);
        } finally {
          w = V;
        }
      };
    };
  }(Ws)), Ws;
}
var em;
function r1() {
  return em || (em = 1, $s.exports = a1()), $s.exports;
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
function i1() {
  if (tm) return yt;
  tm = 1;
  var n = qc();
  function a(g) {
    var h = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var m = 2; m < arguments.length; m++)
        h += "&args[]=" + encodeURIComponent(arguments[m]);
    }
    return "Minified React error #" + g + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function f(g, h, m) {
    var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: x == null ? null : "" + x,
      children: g,
      containerInfo: h,
      implementation: m
    };
  }
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(g, h) {
    if (g === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, yt.createPortal = function(g, h) {
    var m = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(a(299));
    return f(g, h, null, m);
  }, yt.flushSync = function(g) {
    var h = d.T, m = u.p;
    try {
      if (d.T = null, u.p = 2, g) return g();
    } finally {
      d.T = h, u.p = m, u.d.f();
    }
  }, yt.preconnect = function(g, h) {
    typeof g == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, u.d.C(g, h));
  }, yt.prefetchDNS = function(g) {
    typeof g == "string" && u.d.D(g);
  }, yt.preinit = function(g, h) {
    if (typeof g == "string" && h && typeof h.as == "string") {
      var m = h.as, x = p(m, h.crossOrigin), w = typeof h.integrity == "string" ? h.integrity : void 0, S = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      m === "style" ? u.d.S(
        g,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: x,
          integrity: w,
          fetchPriority: S
        }
      ) : m === "script" && u.d.X(g, {
        crossOrigin: x,
        integrity: w,
        fetchPriority: S,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, yt.preinitModule = function(g, h) {
    if (typeof g == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var m = p(
            h.as,
            h.crossOrigin
          );
          u.d.M(g, {
            crossOrigin: m,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && u.d.M(g);
  }, yt.preload = function(g, h) {
    if (typeof g == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var m = h.as, x = p(m, h.crossOrigin);
      u.d.L(g, m, {
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
  }, yt.preloadModule = function(g, h) {
    if (typeof g == "string")
      if (h) {
        var m = p(h.as, h.crossOrigin);
        u.d.m(g, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: m,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else u.d.m(g);
  }, yt.requestFormReset = function(g) {
    u.d.r(g);
  }, yt.unstable_batchedUpdates = function(g, h) {
    return g(h);
  }, yt.useFormState = function(g, h, m) {
    return d.H.useFormState(g, h, m);
  }, yt.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, yt.version = "19.1.0", yt;
}
var nm;
function u1() {
  if (nm) return ec.exports;
  nm = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), ec.exports = i1(), ec.exports;
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
function o1() {
  if (lm) return Nr;
  lm = 1;
  var n = r1(), a = qc(), i = u1();
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
  function g(e) {
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
        for (var y = !1, v = o.child; v; ) {
          if (v === l) {
            y = !0, l = o, r = c;
            break;
          }
          if (v === r) {
            y = !0, r = o, l = c;
            break;
          }
          v = v.sibling;
        }
        if (!y) {
          for (v = c.child; v; ) {
            if (v === l) {
              y = !0, l = c, r = o;
              break;
            }
            if (v === r) {
              y = !0, r = c, l = o;
              break;
            }
            v = v.sibling;
          }
          if (!y) throw Error(u(189));
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
  var m = Object.assign, x = Symbol.for("react.element"), w = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), J = Symbol.for("react.consumer"), K = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), fe = Symbol.for("react.activity"), Ee = Symbol.for("react.memo_cache_sentinel"), le = Symbol.iterator;
  function ee(e) {
    return e === null || typeof e != "object" ? null : (e = le && e[le] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ae = Symbol.for("react.client.reference");
  function te(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ae ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case C:
        return "Fragment";
      case B:
        return "Profiler";
      case R:
        return "StrictMode";
      case $:
        return "Suspense";
      case L:
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
        case J:
          return (e._context.displayName || "Context") + ".Consumer";
        case ce:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ie:
          return t = e.displayName || null, t !== null ? t : te(e.type) || "Memo";
        case P:
          t = e._payload, e = e._init;
          try {
            return te(e(t));
          } catch {
          }
      }
    return null;
  }
  var X = Array.isArray, O = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, pe = [], b = -1;
  function j(e) {
    return { current: e };
  }
  function W(e) {
    0 > b || (e.current = pe[b], pe[b] = null, b--);
  }
  function E(e, t) {
    b++, pe[b] = e.current, e.current = t;
  }
  var ne = j(null), Se = j(null), re = j(null), _e = j(null);
  function Ne(e, t) {
    switch (E(re, t), E(Se, e), E(ne, null), t.nodeType) {
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
    W(ne), E(ne, e);
  }
  function et() {
    W(ne), W(Se), W(re);
  }
  function xt(e) {
    e.memoizedState !== null && E(_e, e);
    var t = ne.current, l = Tp(t, e.type);
    t !== l && (E(Se, e), E(ne, l));
  }
  function Mt(e) {
    Se.current === e && (W(ne), W(Se)), _e.current === e && (W(_e), kr._currentValue = V);
  }
  var sn = Object.prototype.hasOwnProperty, Na = n.unstable_scheduleCallback, Ma = n.unstable_cancelCallback, Ir = n.unstable_shouldYield, Jr = n.unstable_requestPaint, Dt = n.unstable_now, Mu = n.unstable_getCurrentPriorityLevel, Da = n.unstable_ImmediatePriority, Ua = n.unstable_UserBlockingPriority, Ul = n.unstable_NormalPriority, Du = n.unstable_LowPriority, Pr = n.unstable_IdlePriority, Uu = n.log, Bu = n.unstable_setDisableYieldValue, H = null, F = null;
  function he(e) {
    if (typeof Uu == "function" && Bu(e), F && typeof F.setStrictMode == "function")
      try {
        F.setStrictMode(H, e);
      } catch {
      }
  }
  var be = Math.clz32 ? Math.clz32 : En, je = Math.log, Ut = Math.LN2;
  function En(e) {
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
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var o = 0, c = e.suspendedLanes, y = e.pingedLanes;
    e = e.warmLanes;
    var v = r & 134217727;
    return v !== 0 ? (r = v & ~c, r !== 0 ? o = Bt(r) : (y &= v, y !== 0 ? o = Bt(y) : l || (l = v & ~e, l !== 0 && (o = Bt(l))))) : (v = r & ~c, v !== 0 ? o = Bt(v) : y !== 0 ? o = Bt(y) : l || (l = r & ~e, l !== 0 && (o = Bt(l)))), o === 0 ? 0 : t !== 0 && t !== o && (t & c) === 0 && (c = o & -o, l = t & -t, c >= l || c === 32 && (l & 4194048) !== 0) ? t : o;
  }
  function Kt(e, t) {
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
  function Ba(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Gy(e, t, l, r, o, c) {
    var y = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var v = e.entanglements, T = e.expirationTimes, z = e.hiddenUpdates;
    for (l = y & ~l; 0 < l; ) {
      var q = 31 - be(l), Q = 1 << q;
      v[q] = 0, T[q] = -1;
      var N = z[q];
      if (N !== null)
        for (z[q] = null, q = 0; q < N.length; q++) {
          var M = N[q];
          M !== null && (M.lane &= -536870913);
        }
      l &= ~Q;
    }
    r !== 0 && of(e, r, 0), c !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(y & ~t));
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
  function Hu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function cf() {
    var e = Y.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Gp(e.type));
  }
  function Qy(e, t) {
    var l = Y.p;
    try {
      return Y.p = e, t();
    } finally {
      Y.p = l;
    }
  }
  var qn = Math.random().toString(36).slice(2), mt = "__reactFiber$" + qn, wt = "__reactProps$" + qn, Bl = "__reactContainer$" + qn, qu = "__reactEvents$" + qn, Xy = "__reactListeners$" + qn, Ky = "__reactHandles$" + qn, ff = "__reactResources$" + qn, La = "__reactMarker$" + qn;
  function Vu(e) {
    delete e[mt], delete e[wt], delete e[qu], delete e[Xy], delete e[Ky];
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
  function ja(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Hl(e) {
    var t = e[ff];
    return t || (t = e[ff] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ot(e) {
    e[La] = !0;
  }
  var df = /* @__PURE__ */ new Set(), hf = {};
  function dl(e, t) {
    ql(e, t), ql(e + "Capture", t);
  }
  function ql(e, t) {
    for (hf[e] = t, e = 0; e < t.length; e++)
      df.add(t[e]);
  }
  var Zy = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), pf = {}, mf = {};
  function Fy(e) {
    return sn.call(mf, e) ? !0 : sn.call(pf, e) ? !1 : Zy.test(e) ? mf[e] = !0 : (pf[e] = !0, !1);
  }
  function $r(e, t, l) {
    if (Fy(t))
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
  function Qu(e, t) {
    if (!e || Gu) return "";
    Gu = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
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
      var c = r.DetermineComponentFrameRoot(), y = c[0], v = c[1];
      if (y && v) {
        var T = y.split(`
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
      Gu = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? Vl(l) : "";
  }
  function Iy(e) {
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
        return Qu(e.type, !1);
      case 11:
        return Qu(e.type.render, !1);
      case 1:
        return Qu(e.type, !0);
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
        t += Iy(e), e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
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
  function bf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Jy(e) {
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
        set: function(y) {
          r = "" + y, c.call(this, y);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
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
  function ei(e) {
    e._valueTracker || (e._valueTracker = Jy(e));
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
  var Py = /[\n"\\]/g;
  function Ft(e) {
    return e.replace(
      Py,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Xu(e, t, l, r, o, c, y, v) {
    e.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.type = y : e.removeAttribute("type"), t != null ? y === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Zt(t)) : e.value !== "" + Zt(t) && (e.value = "" + Zt(t)) : y !== "submit" && y !== "reset" || e.removeAttribute("value"), t != null ? Ku(e, y, Zt(t)) : l != null ? Ku(e, y, Zt(l)) : r != null && e.removeAttribute("value"), o == null && c != null && (e.defaultChecked = !!c), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.name = "" + Zt(v) : e.removeAttribute("name");
  }
  function xf(e, t, l, r, o, c, y, v) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || l != null) {
      if (!(c !== "submit" && c !== "reset" || t != null))
        return;
      l = l != null ? "" + Zt(l) : "", t = t != null ? "" + Zt(t) : l, v || t === e.value || (e.value = t), e.defaultValue = t;
    }
    r = r ?? o, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = v ? e.checked : !!r, e.defaultChecked = !!r, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.name = y);
  }
  function Ku(e, t, l) {
    t === "number" && ti(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function Yl(e, t, l, r) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < l.length; o++)
        t["$" + l[o]] = !0;
      for (l = 0; l < e.length; l++)
        o = t.hasOwnProperty("$" + e[l].value), e[l].selected !== o && (e[l].selected = o), o && r && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + Zt(l), t = null, o = 0; o < e.length; o++) {
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
    if (t != null && (t = "" + Zt(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Zt(l) : "";
  }
  function Ef(e, t, l, r) {
    if (t == null) {
      if (r != null) {
        if (l != null) throw Error(u(92));
        if (X(r)) {
          if (1 < r.length) throw Error(u(93));
          r = r[0];
        }
        l = r;
      }
      l == null && (l = ""), t = l;
    }
    l = Zt(t), e.defaultValue = l, r = e.textContent, r === l && r !== "" && r !== null && (e.value = r);
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
  var $y = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function wf(e, t, l) {
    var r = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, l) : typeof l != "number" || l === 0 || $y.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
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
  function Zu(e) {
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
  var Wy = /* @__PURE__ */ new Map([
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
  ]), eb = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ni(e) {
    return eb.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Fu = null;
  function Iu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ql = null, Xl = null;
  function Af(e) {
    var t = jl(e);
    if (t && (e = t.stateNode)) {
      var l = e[wt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Xu(
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
              var r = l[t];
              if (r !== e && r.form === e.form) {
                var o = r[wt] || null;
                if (!o) throw Error(u(90));
                Xu(
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
          t = l.value, t != null && Yl(e, !!l.multiple, t, !1);
      }
    }
  }
  var Ju = !1;
  function kf(e, t, l) {
    if (Ju) return e(t, l);
    Ju = !0;
    try {
      var r = e(t);
      return r;
    } finally {
      if (Ju = !1, (Ql !== null || Xl !== null) && (Vi(), Ql && (t = Ql, e = Xl, Xl = Ql = null, Af(t), e)))
        for (t = 0; t < e.length; t++) Af(e[t]);
    }
  }
  function Ha(e, t) {
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
  var Tn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Pu = !1;
  if (Tn)
    try {
      var qa = {};
      Object.defineProperty(qa, "passive", {
        get: function() {
          Pu = !0;
        }
      }), window.addEventListener("test", qa, qa), window.removeEventListener("test", qa, qa);
    } catch {
      Pu = !1;
    }
  var Vn = null, $u = null, li = null;
  function Cf() {
    if (li) return li;
    var e, t = $u, l = t.length, r, o = "value" in Vn ? Vn.value : Vn.textContent, c = o.length;
    for (e = 0; e < l && t[e] === o[e]; e++) ;
    var y = l - e;
    for (r = 1; r <= y && t[l - r] === o[c - r]; r++) ;
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
    function t(l, r, o, c, y) {
      this._reactName = l, this._targetInst = o, this.type = r, this.nativeEvent = c, this.target = y, this.currentTarget = null;
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
  var hl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ii = Tt(hl), Va = m({}, hl, { view: 0, detail: 0 }), tb = Tt(Va), Wu, eo, Ya, ui = m({}, Va, {
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
      return "movementX" in e ? e.movementX : (e !== Ya && (Ya && e.type === "mousemove" ? (Wu = e.screenX - Ya.screenX, eo = e.screenY - Ya.screenY) : eo = Wu = 0, Ya = e), Wu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : eo;
    }
  }), Rf = Tt(ui), nb = m({}, ui, { dataTransfer: 0 }), lb = Tt(nb), ab = m({}, Va, { relatedTarget: 0 }), to = Tt(ab), rb = m({}, hl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ib = Tt(rb), ub = m({}, hl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), ob = Tt(ub), sb = m({}, hl, { data: 0 }), Of = Tt(sb), cb = {
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
  }, fb = {
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
  }, db = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function hb(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = db[e]) ? !!t[e] : !1;
  }
  function no() {
    return hb;
  }
  var pb = m({}, Va, {
    key: function(e) {
      if (e.key) {
        var t = cb[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = ai(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? fb[e.keyCode] || "Unidentified" : "";
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
      return e.type === "keypress" ? ai(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? ai(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), mb = Tt(pb), gb = m({}, ui, {
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
  }), zf = Tt(gb), yb = m({}, Va, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: no
  }), bb = Tt(yb), vb = m({}, hl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), xb = Tt(vb), Sb = m({}, ui, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Eb = Tt(Sb), wb = m({}, hl, {
    newState: 0,
    oldState: 0
  }), Tb = Tt(wb), Ab = [9, 13, 27, 32], lo = Tn && "CompositionEvent" in window, Ga = null;
  Tn && "documentMode" in document && (Ga = document.documentMode);
  var kb = Tn && "TextEvent" in window && !Ga, Nf = Tn && (!lo || Ga && 8 < Ga && 11 >= Ga), Mf = " ", Df = !1;
  function Uf(e, t) {
    switch (e) {
      case "keyup":
        return Ab.indexOf(t.keyCode) !== -1;
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
  var Kl = !1;
  function Cb(e, t) {
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
  function _b(e, t) {
    if (Kl)
      return e === "compositionend" || !lo && Uf(e, t) ? (e = Cf(), li = $u = Vn = null, Kl = !1, e) : null;
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
  var Rb = {
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
    return t === "input" ? !!Rb[e.type] : t === "textarea";
  }
  function jf(e, t, l, r) {
    Ql ? Xl ? Xl.push(r) : Xl = [r] : Ql = r, t = Zi(t, "onChange"), 0 < t.length && (l = new ii(
      "onChange",
      "change",
      null,
      l,
      r
    ), e.push({ event: l, listeners: t }));
  }
  var Qa = null, Xa = null;
  function Ob(e) {
    bp(e, 0);
  }
  function oi(e) {
    var t = ja(e);
    if (vf(t)) return e;
  }
  function Hf(e, t) {
    if (e === "change") return t;
  }
  var qf = !1;
  if (Tn) {
    var ao;
    if (Tn) {
      var ro = "oninput" in document;
      if (!ro) {
        var Vf = document.createElement("div");
        Vf.setAttribute("oninput", "return;"), ro = typeof Vf.oninput == "function";
      }
      ao = ro;
    } else ao = !1;
    qf = ao && (!document.documentMode || 9 < document.documentMode);
  }
  function Yf() {
    Qa && (Qa.detachEvent("onpropertychange", Gf), Xa = Qa = null);
  }
  function Gf(e) {
    if (e.propertyName === "value" && oi(Xa)) {
      var t = [];
      jf(
        t,
        Xa,
        e,
        Iu(e)
      ), kf(Ob, t);
    }
  }
  function zb(e, t, l) {
    e === "focusin" ? (Yf(), Qa = t, Xa = l, Qa.attachEvent("onpropertychange", Gf)) : e === "focusout" && Yf();
  }
  function Nb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return oi(Xa);
  }
  function Mb(e, t) {
    if (e === "click") return oi(t);
  }
  function Db(e, t) {
    if (e === "input" || e === "change")
      return oi(t);
  }
  function Ub(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Lt = typeof Object.is == "function" ? Object.is : Ub;
  function Ka(e, t) {
    if (Lt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), r = Object.keys(t);
    if (l.length !== r.length) return !1;
    for (r = 0; r < l.length; r++) {
      var o = l[r];
      if (!sn.call(t, o) || !Lt(e[o], t[o]))
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
  function io(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Bb = Tn && "documentMode" in document && 11 >= document.documentMode, Zl = null, uo = null, Za = null, oo = !1;
  function Ff(e, t, l) {
    var r = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    oo || Zl == null || Zl !== ti(r) || (r = Zl, "selectionStart" in r && io(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), Za && Ka(Za, r) || (Za = r, r = Zi(uo, "onSelect"), 0 < r.length && (t = new ii(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: r }), t.target = Zl)));
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
  }, so = {}, If = {};
  Tn && (If = document.createElement("div").style, "AnimationEvent" in window || (delete Fl.animationend.animation, delete Fl.animationiteration.animation, delete Fl.animationstart.animation), "TransitionEvent" in window || delete Fl.transitionend.transition);
  function ml(e) {
    if (so[e]) return so[e];
    if (!Fl[e]) return e;
    var t = Fl[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in If)
        return so[e] = t[l];
    return e;
  }
  var Jf = ml("animationend"), Pf = ml("animationiteration"), $f = ml("animationstart"), Lb = ml("transitionrun"), jb = ml("transitionstart"), Hb = ml("transitioncancel"), Wf = ml("transitionend"), ed = /* @__PURE__ */ new Map(), co = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  co.push("scrollEnd");
  function an(e, t) {
    ed.set(e, t), dl(t, [e]);
  }
  var td = /* @__PURE__ */ new WeakMap();
  function It(e, t) {
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
  var Jt = [], Il = 0, fo = 0;
  function si() {
    for (var e = Il, t = fo = Il = 0; t < e; ) {
      var l = Jt[t];
      Jt[t++] = null;
      var r = Jt[t];
      Jt[t++] = null;
      var o = Jt[t];
      Jt[t++] = null;
      var c = Jt[t];
      if (Jt[t++] = null, r !== null && o !== null) {
        var y = r.pending;
        y === null ? o.next = o : (o.next = y.next, y.next = o), r.pending = o;
      }
      c !== 0 && nd(l, o, c);
    }
  }
  function ci(e, t, l, r) {
    Jt[Il++] = e, Jt[Il++] = t, Jt[Il++] = l, Jt[Il++] = r, fo |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
  }
  function ho(e, t, l, r) {
    return ci(e, t, l, r), fi(e);
  }
  function Jl(e, t) {
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
    if (50 < br)
      throw br = 0, vs = null, Error(u(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Pl = {};
  function qb(e, t, l, r) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function jt(e, t, l, r) {
    return new qb(e, t, l, r);
  }
  function po(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function An(e, t) {
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
  function di(e, t, l, r, o, c) {
    var y = 0;
    if (r = e, typeof e == "function") po(e) && (y = 1);
    else if (typeof e == "string")
      y = Y0(
        e,
        l,
        ne.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case fe:
          return e = jt(31, l, t, o), e.elementType = fe, e.lanes = c, e;
        case C:
          return gl(l.children, o, c, t);
        case R:
          y = 8, o |= 24;
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
              case K:
                y = 10;
                break e;
              case J:
                y = 9;
                break e;
              case ce:
                y = 11;
                break e;
              case ie:
                y = 14;
                break e;
              case P:
                y = 16, r = null;
                break e;
            }
          y = 29, l = Error(
            u(130, e === null ? "null" : typeof e, "")
          ), r = null;
      }
    return t = jt(y, l, t, o), t.elementType = e, t.type = r, t.lanes = c, t;
  }
  function gl(e, t, l, r) {
    return e = jt(7, e, r, t), e.lanes = l, e;
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
  var $l = [], Wl = 0, hi = null, pi = 0, Pt = [], $t = 0, yl = null, kn = 1, Cn = "";
  function bl(e, t) {
    $l[Wl++] = pi, $l[Wl++] = hi, hi = e, pi = t;
  }
  function ad(e, t, l) {
    Pt[$t++] = kn, Pt[$t++] = Cn, Pt[$t++] = yl, yl = e;
    var r = kn;
    e = Cn;
    var o = 32 - be(r) - 1;
    r &= ~(1 << o), l += 1;
    var c = 32 - be(t) + o;
    if (30 < c) {
      var y = o - o % 5;
      c = (r & (1 << y) - 1).toString(32), r >>= y, o -= y, kn = 1 << 32 - be(t) + o | l << o | r, Cn = c + e;
    } else
      kn = 1 << c | l << o | r, Cn = e;
  }
  function yo(e) {
    e.return !== null && (bl(e, 1), ad(e, 1, 0));
  }
  function bo(e) {
    for (; e === hi; )
      hi = $l[--Wl], $l[Wl] = null, pi = $l[--Wl], $l[Wl] = null;
    for (; e === yl; )
      yl = Pt[--$t], Pt[$t] = null, Cn = Pt[--$t], Pt[$t] = null, kn = Pt[--$t], Pt[$t] = null;
  }
  var St = null, Je = null, Ue = !1, vl = null, fn = !1, vo = Error(u(519));
  function xl(e) {
    var t = Error(u(418, ""));
    throw Ja(It(t, e)), vo;
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
        for (l = 0; l < xr.length; l++)
          ze(xr[l], t);
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
    l = r.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || r.suppressHydrationWarning === !0 || Ep(t.textContent, l) ? (r.popover != null && (ze("beforetoggle", t), ze("toggle", t)), r.onScroll != null && ze("scroll", t), r.onScrollEnd != null && ze("scrollend", t), r.onClick != null && (t.onclick = Fi), t = !0) : t = !1, t || xl(e);
  }
  function id(e) {
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
  function Fa(e) {
    if (e !== St) return !1;
    if (!Ue) return id(e), Ue = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Us(e.type, e.memoizedProps)), l = !l), l && Je && xl(e), id(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (l = e.data, l === "/$") {
              if (t === 0) {
                Je = un(e.nextSibling);
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
      t === 27 ? (t = Je, ll(e.type) ? (e = Hs, Hs = null, Je = e) : Je = t) : Je = St ? un(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ia() {
    Je = St = null, Ue = !1;
  }
  function ud() {
    var e = vl;
    return e !== null && (Ct === null ? Ct = e : Ct.push.apply(
      Ct,
      e
    ), vl = null), e;
  }
  function Ja(e) {
    vl === null ? vl = [e] : vl.push(e);
  }
  var xo = j(null), Sl = null, _n = null;
  function Yn(e, t, l) {
    E(xo, t._currentValue), t._currentValue = l;
  }
  function Rn(e) {
    e._currentValue = xo.current, W(xo);
  }
  function So(e, t, l) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function Eo(e, t, l, r) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var c = o.dependencies;
      if (c !== null) {
        var y = o.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var v = c;
          c = o;
          for (var T = 0; T < t.length; T++)
            if (v.context === t[T]) {
              c.lanes |= l, v = c.alternate, v !== null && (v.lanes |= l), So(
                c.return,
                l,
                e
              ), r || (y = null);
              break e;
            }
          c = v.next;
        }
      } else if (o.tag === 18) {
        if (y = o.return, y === null) throw Error(u(341));
        y.lanes |= l, c = y.alternate, c !== null && (c.lanes |= l), So(y, l, e), y = null;
      } else y = o.child;
      if (y !== null) y.return = o;
      else
        for (y = o; y !== null; ) {
          if (y === e) {
            y = null;
            break;
          }
          if (o = y.sibling, o !== null) {
            o.return = y.return, y = o;
            break;
          }
          y = y.return;
        }
      o = y;
    }
  }
  function Pa(e, t, l, r) {
    e = null;
    for (var o = t, c = !1; o !== null; ) {
      if (!c) {
        if ((o.flags & 524288) !== 0) c = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var y = o.alternate;
        if (y === null) throw Error(u(387));
        if (y = y.memoizedProps, y !== null) {
          var v = o.type;
          Lt(o.pendingProps.value, y.value) || (e !== null ? e.push(v) : e = [v]);
        }
      } else if (o === _e.current) {
        if (y = o.alternate, y === null) throw Error(u(387));
        y.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(kr) : e = [kr]);
      }
      o = o.return;
    }
    e !== null && Eo(
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
  function El(e) {
    Sl = e, _n = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function gt(e) {
    return od(Sl, e);
  }
  function gi(e, t) {
    return Sl === null && El(e), od(e, t);
  }
  function od(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, _n === null) {
      if (e === null) throw Error(u(308));
      _n = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else _n = _n.next = t;
    return l;
  }
  var Vb = typeof AbortController < "u" ? AbortController : function() {
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
  }, Yb = n.unstable_scheduleCallback, Gb = n.unstable_NormalPriority, at = {
    $$typeof: K,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function wo() {
    return {
      controller: new Vb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function $a(e) {
    e.refCount--, e.refCount === 0 && Yb(Gb, function() {
      e.controller.abort();
    });
  }
  var Wa = null, To = 0, ea = 0, ta = null;
  function Qb(e, t) {
    if (Wa === null) {
      var l = Wa = [];
      To = 0, ea = ks(), ta = {
        status: "pending",
        value: void 0,
        then: function(r) {
          l.push(r);
        }
      };
    }
    return To++, t.then(sd, sd), t;
  }
  function sd() {
    if (--To === 0 && Wa !== null) {
      ta !== null && (ta.status = "fulfilled");
      var e = Wa;
      Wa = null, ea = 0, ta = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Xb(e, t) {
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
  var cd = O.S;
  O.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && Qb(e, t), cd !== null && cd(e, t);
  };
  var wl = j(null);
  function Ao() {
    var e = wl.current;
    return e !== null ? e : Xe.pooledCache;
  }
  function yi(e, t) {
    t === null ? E(wl, wl.current) : E(wl, t.pool);
  }
  function fd() {
    var e = Ao();
    return e === null ? null : { parent: at._currentValue, pool: e };
  }
  var er = Error(u(460)), dd = Error(u(474)), bi = Error(u(542)), ko = { then: function() {
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
        throw tr = t, er;
    }
  }
  var tr = null;
  function md() {
    if (tr === null) throw Error(u(459));
    var e = tr;
    return tr = null, e;
  }
  function gd(e) {
    if (e === er || e === bi)
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
  function Qn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Xn(e, t, l) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (He & 2) !== 0) {
      var o = r.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, t = fi(e), nd(e, null, l), t;
    }
    return ci(e, r, t, l), fi(e);
  }
  function nr(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, l |= r, t.lanes = l, sf(e, l);
    }
  }
  function Ro(e, t) {
    var l = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, l === r)) {
      var o = null, c = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var y = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          c === null ? o = c = y : c = c.next = y, l = l.next;
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
  var Oo = !1;
  function lr() {
    if (Oo) {
      var e = ta;
      if (e !== null) throw e;
    }
  }
  function ar(e, t, l, r) {
    Oo = !1;
    var o = e.updateQueue;
    Gn = !1;
    var c = o.firstBaseUpdate, y = o.lastBaseUpdate, v = o.shared.pending;
    if (v !== null) {
      o.shared.pending = null;
      var T = v, z = T.next;
      T.next = null, y === null ? c = z : y.next = z, y = T;
      var q = e.alternate;
      q !== null && (q = q.updateQueue, v = q.lastBaseUpdate, v !== y && (v === null ? q.firstBaseUpdate = z : v.next = z, q.lastBaseUpdate = T));
    }
    if (c !== null) {
      var Q = o.baseState;
      y = 0, q = z = T = null, v = c;
      do {
        var N = v.lane & -536870913, M = N !== v.lane;
        if (M ? (Me & N) === N : (r & N) === N) {
          N !== 0 && N === ea && (Oo = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          e: {
            var ve = e, me = v;
            N = t;
            var Ge = l;
            switch (me.tag) {
              case 1:
                if (ve = me.payload, typeof ve == "function") {
                  Q = ve.call(Ge, Q, N);
                  break e;
                }
                Q = ve;
                break e;
              case 3:
                ve.flags = ve.flags & -65537 | 128;
              case 0:
                if (ve = me.payload, N = typeof ve == "function" ? ve.call(Ge, Q, N) : ve, N == null) break e;
                Q = m({}, Q, N);
                break e;
              case 2:
                Gn = !0;
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
          }, q === null ? (z = q = M, T = Q) : q = q.next = M, y |= N;
        if (v = v.next, v === null) {
          if (v = o.shared.pending, v === null)
            break;
          M = v, v = M.next, M.next = null, o.lastBaseUpdate = M, o.shared.pending = null;
        }
      } while (!0);
      q === null && (T = Q), o.baseState = T, o.firstBaseUpdate = z, o.lastBaseUpdate = q, c === null && (o.shared.lanes = 0), Wn |= y, e.lanes = y, e.memoizedState = Q;
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
  var na = j(null), xi = j(0);
  function vd(e, t) {
    e = Bn, E(xi, e), E(na, t), Bn = e | t.baseLanes;
  }
  function zo() {
    E(xi, Bn), E(na, na.current);
  }
  function No() {
    Bn = xi.current, W(na), W(xi);
  }
  var Kn = 0, ke = null, Ve = null, tt = null, Si = !1, la = !1, Tl = !1, Ei = 0, rr = 0, aa = null, Kb = 0;
  function $e() {
    throw Error(u(321));
  }
  function Mo(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Lt(e[l], t[l])) return !1;
    return !0;
  }
  function Do(e, t, l, r, o, c) {
    return Kn = c, ke = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, O.H = e === null || e.memoizedState === null ? nh : lh, Tl = !1, c = l(r, o), Tl = !1, la && (c = Sd(
      t,
      l,
      r,
      o
    )), xd(e), c;
  }
  function xd(e) {
    O.H = _i;
    var t = Ve !== null && Ve.next !== null;
    if (Kn = 0, tt = Ve = ke = null, Si = !1, rr = 0, aa = null, t) throw Error(u(300));
    e === null || st || (e = e.dependencies, e !== null && mi(e) && (st = !0));
  }
  function Sd(e, t, l, r) {
    ke = e;
    var o = 0;
    do {
      if (la && (aa = null), rr = 0, la = !1, 25 <= o) throw Error(u(301));
      if (o += 1, tt = Ve = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      O.H = Wb, c = t(l, r);
    } while (la);
    return c;
  }
  function Zb() {
    var e = O.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? ir(t) : t, e = e.useState()[0], (Ve !== null ? Ve.memoizedState : null) !== e && (ke.flags |= 1024), t;
  }
  function Uo() {
    var e = Ei !== 0;
    return Ei = 0, e;
  }
  function Bo(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Lo(e) {
    if (Si) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Si = !1;
    }
    Kn = 0, tt = Ve = ke = null, la = !1, rr = Ei = 0, aa = null;
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
  function ir(e) {
    var t = rr;
    return rr += 1, aa === null && (aa = []), e = pd(aa, e, t), t = ke, (tt === null ? t.memoizedState : tt.next) === null && (t = t.alternate, O.H = t === null || t.memoizedState === null ? nh : lh), e;
  }
  function wi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ir(e);
      if (e.$$typeof === K) return gt(e);
    }
    throw Error(u(438, String(e)));
  }
  function Ho(e) {
    var t = null, l = ke.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var r = ke.alternate;
      r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
        data: r.data.map(function(o) {
          return o.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = jo(), ke.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), r = 0; r < e; r++)
        l[r] = Ee;
    return t.index++, l;
  }
  function On(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ti(e) {
    var t = nt();
    return qo(t, Ve, e);
  }
  function qo(e, t, l) {
    var r = e.queue;
    if (r === null) throw Error(u(311));
    r.lastRenderedReducer = l;
    var o = e.baseQueue, c = r.pending;
    if (c !== null) {
      if (o !== null) {
        var y = o.next;
        o.next = c.next, c.next = y;
      }
      t.baseQueue = o = c, r.pending = null;
    }
    if (c = e.baseState, o === null) e.memoizedState = c;
    else {
      t = o.next;
      var v = y = null, T = null, z = t, q = !1;
      do {
        var Q = z.lane & -536870913;
        if (Q !== z.lane ? (Me & Q) === Q : (Kn & Q) === Q) {
          var N = z.revertLane;
          if (N === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null
            }), Q === ea && (q = !0);
          else if ((Kn & N) === N) {
            z = z.next, N === ea && (q = !0);
            continue;
          } else
            Q = {
              lane: 0,
              revertLane: z.revertLane,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null
            }, T === null ? (v = T = Q, y = c) : T = T.next = Q, ke.lanes |= N, Wn |= N;
          Q = z.action, Tl && l(c, Q), c = z.hasEagerState ? z.eagerState : l(c, Q);
        } else
          N = {
            lane: Q,
            revertLane: z.revertLane,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          }, T === null ? (v = T = N, y = c) : T = T.next = N, ke.lanes |= Q, Wn |= Q;
        z = z.next;
      } while (z !== null && z !== t);
      if (T === null ? y = c : T.next = v, !Lt(c, e.memoizedState) && (st = !0, q && (l = ta, l !== null)))
        throw l;
      e.memoizedState = c, e.baseState = y, e.baseQueue = T, r.lastRenderedState = c;
    }
    return o === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
  }
  function Vo(e) {
    var t = nt(), l = t.queue;
    if (l === null) throw Error(u(311));
    l.lastRenderedReducer = e;
    var r = l.dispatch, o = l.pending, c = t.memoizedState;
    if (o !== null) {
      l.pending = null;
      var y = o = o.next;
      do
        c = e(c, y.action), y = y.next;
      while (y !== o);
      Lt(c, t.memoizedState) || (st = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), l.lastRenderedState = c;
    }
    return [c, r];
  }
  function Ed(e, t, l) {
    var r = ke, o = nt(), c = Ue;
    if (c) {
      if (l === void 0) throw Error(u(407));
      l = l();
    } else l = t();
    var y = !Lt(
      (Ve || o).memoizedState,
      l
    );
    y && (o.memoizedState = l, st = !0), o = o.queue;
    var v = Ad.bind(null, r, o, e);
    if (ur(2048, 8, v, [e]), o.getSnapshot !== t || y || tt !== null && tt.memoizedState.tag & 1) {
      if (r.flags |= 2048, ra(
        9,
        Ai(),
        Td.bind(
          null,
          r,
          o,
          l,
          t
        ),
        null
      ), Xe === null) throw Error(u(349));
      c || (Kn & 124) !== 0 || wd(r, t, l);
    }
    return l;
  }
  function wd(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ke.updateQueue, t === null ? (t = jo(), ke.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function Td(e, t, l, r) {
    t.value = l, t.getSnapshot = r, kd(t) && Cd(e);
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
    var t = Jl(e, 2);
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
      lastRenderedReducer: On,
      lastRenderedState: e
    }, t;
  }
  function _d(e, t, l, r) {
    return e.baseState = l, qo(
      e,
      Ve,
      typeof r == "function" ? r : On
    );
  }
  function Fb(e, t, l, r, o) {
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
        then: function(y) {
          c.listeners.push(y);
        }
      };
      O.T !== null ? l(!0) : c.isTransition = !1, r(c), l = t.pending, l === null ? (c.next = t.pending = c, Rd(t, c)) : (c.next = l.next, t.pending = l.next = c);
    }
  }
  function Rd(e, t) {
    var l = t.action, r = t.payload, o = e.state;
    if (t.isTransition) {
      var c = O.T, y = {};
      O.T = y;
      try {
        var v = l(o, r), T = O.S;
        T !== null && T(y, v), Od(e, t, v);
      } catch (z) {
        Go(e, t, z);
      } finally {
        O.T = c;
      }
    } else
      try {
        c = l(o, r), Od(e, t, c);
      } catch (z) {
        Go(e, t, z);
      }
  }
  function Od(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(r) {
        zd(e, t, r);
      },
      function(r) {
        return Go(e, t, r);
      }
    ) : zd(e, t, l);
  }
  function zd(e, t, l) {
    t.status = "fulfilled", t.value = l, Nd(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Rd(e, l)));
  }
  function Go(e, t, l) {
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
    if (Ue) {
      var l = Xe.formState;
      if (l !== null) {
        e: {
          var r = ke;
          if (Ue) {
            if (Je) {
              t: {
                for (var o = Je, c = fn; o.nodeType !== 8; ) {
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
                Je = un(
                  o.nextSibling
                ), r = o.data === "F!";
                break e;
              }
            }
            xl(r);
          }
          r = !1;
        }
        r && (t = l[0]);
      }
    }
    return l = At(), l.memoizedState = l.baseState = t, r = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Md,
      lastRenderedState: t
    }, l.queue = r, l = Wd.bind(
      null,
      ke,
      r
    ), r.dispatch = l, r = Yo(!1), c = Fo.bind(
      null,
      ke,
      !1,
      r.queue
    ), r = At(), o = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, r.queue = o, l = Fb.bind(
      null,
      ke,
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
    if (t = qo(
      e,
      t,
      Md
    )[0], e = Ti(On)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var r = ir(t);
      } catch (y) {
        throw y === er ? bi : y;
      }
    else r = t;
    t = nt();
    var o = t.queue, c = o.dispatch;
    return l !== t.memoizedState && (ke.flags |= 2048, ra(
      9,
      Ai(),
      Ib.bind(null, o, l),
      null
    )), [r, c, e];
  }
  function Ib(e, t) {
    e.action = t;
  }
  function Ld(e) {
    var t = nt(), l = Ve;
    if (l !== null)
      return Bd(t, l, e);
    nt(), t = t.memoizedState, l = nt();
    var r = l.queue.dispatch;
    return l.memoizedState = e, [t, r, !1];
  }
  function ra(e, t, l, r) {
    return e = { tag: e, create: l, deps: r, inst: t, next: null }, t = ke.updateQueue, t === null && (t = jo(), ke.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (r = l.next, l.next = e, e.next = r, t.lastEffect = e), e;
  }
  function Ai() {
    return { destroy: void 0, resource: void 0 };
  }
  function jd() {
    return nt().memoizedState;
  }
  function ki(e, t, l, r) {
    var o = At();
    r = r === void 0 ? null : r, ke.flags |= e, o.memoizedState = ra(
      1 | t,
      Ai(),
      l,
      r
    );
  }
  function ur(e, t, l, r) {
    var o = nt();
    r = r === void 0 ? null : r;
    var c = o.memoizedState.inst;
    Ve !== null && r !== null && Mo(r, Ve.memoizedState.deps) ? o.memoizedState = ra(t, c, l, r) : (ke.flags |= e, o.memoizedState = ra(
      1 | t,
      c,
      l,
      r
    ));
  }
  function Hd(e, t) {
    ki(8390656, 8, e, t);
  }
  function qd(e, t) {
    ur(2048, 8, e, t);
  }
  function Vd(e, t) {
    return ur(4, 2, e, t);
  }
  function Yd(e, t) {
    return ur(4, 4, e, t);
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
    l = l != null ? l.concat([e]) : null, ur(4, 4, Gd.bind(null, t, e), l);
  }
  function Qo() {
  }
  function Xd(e, t) {
    var l = nt();
    t = t === void 0 ? null : t;
    var r = l.memoizedState;
    return t !== null && Mo(t, r[1]) ? r[0] : (l.memoizedState = [e, t], e);
  }
  function Kd(e, t) {
    var l = nt();
    t = t === void 0 ? null : t;
    var r = l.memoizedState;
    if (t !== null && Mo(t, r[1]))
      return r[0];
    if (r = e(), Tl) {
      he(!0);
      try {
        e();
      } finally {
        he(!1);
      }
    }
    return l.memoizedState = [r, t], r;
  }
  function Xo(e, t, l) {
    return l === void 0 || (Kn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l, e = Ih(), ke.lanes |= e, Wn |= e, l);
  }
  function Zd(e, t, l, r) {
    return Lt(l, t) ? l : na.current !== null ? (e = Xo(e, l, r), Lt(e, t) || (st = !0), e) : (Kn & 42) === 0 ? (st = !0, e.memoizedState = l) : (e = Ih(), ke.lanes |= e, Wn |= e, t);
  }
  function Fd(e, t, l, r, o) {
    var c = Y.p;
    Y.p = c !== 0 && 8 > c ? c : 8;
    var y = O.T, v = {};
    O.T = v, Fo(e, !1, t, l);
    try {
      var T = o(), z = O.S;
      if (z !== null && z(v, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var q = Xb(
          T,
          r
        );
        or(
          e,
          t,
          q,
          Yt(e)
        );
      } else
        or(
          e,
          t,
          r,
          Yt(e)
        );
    } catch (Q) {
      or(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: Q },
        Yt()
      );
    } finally {
      Y.p = c, O.T = y;
    }
  }
  function Jb() {
  }
  function Ko(e, t, l, r) {
    if (e.tag !== 5) throw Error(u(476));
    var o = Id(e).queue;
    Fd(
      e,
      o,
      t,
      V,
      l === null ? Jb : function() {
        return Jd(e), l(r);
      }
    );
  }
  function Id(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: V,
      baseState: V,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: On,
        lastRenderedState: V
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
    or(e, t, {}, Yt());
  }
  function Zo() {
    return gt(kr);
  }
  function Pd() {
    return nt().memoizedState;
  }
  function $d() {
    return nt().memoizedState;
  }
  function Pb(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Yt();
          e = Qn(l);
          var r = Xn(t, e, l);
          r !== null && (Gt(r, t, l), nr(r, t, l)), t = { cache: wo() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function $b(e, t, l) {
    var r = Yt();
    l = {
      lane: r,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ci(e) ? eh(t, l) : (l = ho(e, t, l, r), l !== null && (Gt(l, e, r), th(l, t, r)));
  }
  function Wd(e, t, l) {
    var r = Yt();
    or(e, t, l, r);
  }
  function or(e, t, l, r) {
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
          var y = t.lastRenderedState, v = c(y, l);
          if (o.hasEagerState = !0, o.eagerState = v, Lt(v, y))
            return ci(e, t, o, 0), Xe === null && si(), !1;
        } catch {
        } finally {
        }
      if (l = ho(e, t, o, r), l !== null)
        return Gt(l, e, r), th(l, t, r), !0;
    }
    return !1;
  }
  function Fo(e, t, l, r) {
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
      t = ho(
        e,
        l,
        r,
        2
      ), t !== null && Gt(t, e, 2);
  }
  function Ci(e) {
    var t = e.alternate;
    return e === ke || t !== null && t === ke;
  }
  function eh(e, t) {
    la = Si = !0;
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
      return At().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: gt,
    useEffect: Hd,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, ki(
        4194308,
        4,
        Gd.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return ki(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      ki(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = At();
      t = t === void 0 ? null : t;
      var r = e();
      if (Tl) {
        he(!0);
        try {
          e();
        } finally {
          he(!1);
        }
      }
      return l.memoizedState = [r, t], r;
    },
    useReducer: function(e, t, l) {
      var r = At();
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
      return r.memoizedState = r.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, r.queue = e, e = e.dispatch = $b.bind(
        null,
        ke,
        e
      ), [r.memoizedState, e];
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
    useDebugValue: Qo,
    useDeferredValue: function(e, t) {
      var l = At();
      return Xo(l, e, t);
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
      var r = ke, o = At();
      if (Ue) {
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
      return o.queue = c, Hd(Ad.bind(null, r, c, e), [
        e
      ]), r.flags |= 2048, ra(
        9,
        Ai(),
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
      var e = At(), t = Xe.identifierPrefix;
      if (Ue) {
        var l = Cn, r = kn;
        l = (r & ~(1 << 32 - be(r) - 1)).toString(32) + l, t = "«" + t + "R" + l, l = Ei++, 0 < l && (t += "H" + l.toString(32)), t += "»";
      } else
        l = Kb++, t = "«" + t + "r" + l.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Zo,
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
      return At().memoizedState = Pb.bind(
        null,
        ke
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
    useRef: jd,
    useState: function() {
      return Ti(On);
    },
    useDebugValue: Qo,
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
        typeof e == "boolean" ? e : ir(e),
        t
      ];
    },
    useSyncExternalStore: Ed,
    useId: Pd,
    useHostTransitionStatus: Zo,
    useFormState: Ud,
    useActionState: Ud,
    useOptimistic: function(e, t) {
      var l = nt();
      return _d(l, Ve, e, t);
    },
    useMemoCache: Ho,
    useCacheRefresh: $d
  }, Wb = {
    readContext: gt,
    use: wi,
    useCallback: Xd,
    useContext: gt,
    useEffect: qd,
    useImperativeHandle: Qd,
    useInsertionEffect: Vd,
    useLayoutEffect: Yd,
    useMemo: Kd,
    useReducer: Vo,
    useRef: jd,
    useState: function() {
      return Vo(On);
    },
    useDebugValue: Qo,
    useDeferredValue: function(e, t) {
      var l = nt();
      return Ve === null ? Xo(l, e, t) : Zd(
        l,
        Ve.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Vo(On)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : ir(e),
        t
      ];
    },
    useSyncExternalStore: Ed,
    useId: Pd,
    useHostTransitionStatus: Zo,
    useFormState: Ld,
    useActionState: Ld,
    useOptimistic: function(e, t) {
      var l = nt();
      return Ve !== null ? _d(l, Ve, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Ho,
    useCacheRefresh: $d
  }, ia = null, sr = 0;
  function Ri(e) {
    var t = sr;
    return sr += 1, ia === null && (ia = []), pd(ia, e, t);
  }
  function cr(e, t) {
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
    function r(k) {
      for (var A = /* @__PURE__ */ new Map(); k !== null; )
        k.key !== null ? A.set(k.key, k) : A.set(k.index, k), k = k.sibling;
      return A;
    }
    function o(k, A) {
      return k = An(k, A), k.index = 0, k.sibling = null, k;
    }
    function c(k, A, _) {
      return k.index = _, e ? (_ = k.alternate, _ !== null ? (_ = _.index, _ < A ? (k.flags |= 67108866, A) : _) : (k.flags |= 67108866, A)) : (k.flags |= 1048576, A);
    }
    function y(k) {
      return e && k.alternate === null && (k.flags |= 67108866), k;
    }
    function v(k, A, _, G) {
      return A === null || A.tag !== 6 ? (A = mo(_, k.mode, G), A.return = k, A) : (A = o(A, _), A.return = k, A);
    }
    function T(k, A, _, G) {
      var ue = _.type;
      return ue === C ? q(
        k,
        A,
        _.props.children,
        G,
        _.key
      ) : A !== null && (A.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === P && ah(ue) === A.type) ? (A = o(A, _.props), cr(A, _), A.return = k, A) : (A = di(
        _.type,
        _.key,
        _.props,
        null,
        k.mode,
        G
      ), cr(A, _), A.return = k, A);
    }
    function z(k, A, _, G) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== _.containerInfo || A.stateNode.implementation !== _.implementation ? (A = go(_, k.mode, G), A.return = k, A) : (A = o(A, _.children || []), A.return = k, A);
    }
    function q(k, A, _, G, ue) {
      return A === null || A.tag !== 7 ? (A = gl(
        _,
        k.mode,
        G,
        ue
      ), A.return = k, A) : (A = o(A, _), A.return = k, A);
    }
    function Q(k, A, _) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return A = mo(
          "" + A,
          k.mode,
          _
        ), A.return = k, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case w:
            return _ = di(
              A.type,
              A.key,
              A.props,
              null,
              k.mode,
              _
            ), cr(_, A), _.return = k, _;
          case S:
            return A = go(
              A,
              k.mode,
              _
            ), A.return = k, A;
          case P:
            var G = A._init;
            return A = G(A._payload), Q(k, A, _);
        }
        if (X(A) || ee(A))
          return A = gl(
            A,
            k.mode,
            _,
            null
          ), A.return = k, A;
        if (typeof A.then == "function")
          return Q(k, Ri(A), _);
        if (A.$$typeof === K)
          return Q(
            k,
            gi(k, A),
            _
          );
        Oi(k, A);
      }
      return null;
    }
    function N(k, A, _, G) {
      var ue = A !== null ? A.key : null;
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return ue !== null ? null : v(k, A, "" + _, G);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case w:
            return _.key === ue ? T(k, A, _, G) : null;
          case S:
            return _.key === ue ? z(k, A, _, G) : null;
          case P:
            return ue = _._init, _ = ue(_._payload), N(k, A, _, G);
        }
        if (X(_) || ee(_))
          return ue !== null ? null : q(k, A, _, G, null);
        if (typeof _.then == "function")
          return N(
            k,
            A,
            Ri(_),
            G
          );
        if (_.$$typeof === K)
          return N(
            k,
            A,
            gi(k, _),
            G
          );
        Oi(k, _);
      }
      return null;
    }
    function M(k, A, _, G, ue) {
      if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
        return k = k.get(_) || null, v(A, k, "" + G, ue);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case w:
            return k = k.get(
              G.key === null ? _ : G.key
            ) || null, T(A, k, G, ue);
          case S:
            return k = k.get(
              G.key === null ? _ : G.key
            ) || null, z(A, k, G, ue);
          case P:
            var Re = G._init;
            return G = Re(G._payload), M(
              k,
              A,
              _,
              G,
              ue
            );
        }
        if (X(G) || ee(G))
          return k = k.get(_) || null, q(A, k, G, ue, null);
        if (typeof G.then == "function")
          return M(
            k,
            A,
            _,
            Ri(G),
            ue
          );
        if (G.$$typeof === K)
          return M(
            k,
            A,
            _,
            gi(A, G),
            ue
          );
        Oi(A, G);
      }
      return null;
    }
    function ve(k, A, _, G) {
      for (var ue = null, Re = null, de = A, ye = A = 0, ft = null; de !== null && ye < _.length; ye++) {
        de.index > ye ? (ft = de, de = null) : ft = de.sibling;
        var De = N(
          k,
          de,
          _[ye],
          G
        );
        if (De === null) {
          de === null && (de = ft);
          break;
        }
        e && de && De.alternate === null && t(k, de), A = c(De, A, ye), Re === null ? ue = De : Re.sibling = De, Re = De, de = ft;
      }
      if (ye === _.length)
        return l(k, de), Ue && bl(k, ye), ue;
      if (de === null) {
        for (; ye < _.length; ye++)
          de = Q(k, _[ye], G), de !== null && (A = c(
            de,
            A,
            ye
          ), Re === null ? ue = de : Re.sibling = de, Re = de);
        return Ue && bl(k, ye), ue;
      }
      for (de = r(de); ye < _.length; ye++)
        ft = M(
          de,
          k,
          ye,
          _[ye],
          G
        ), ft !== null && (e && ft.alternate !== null && de.delete(
          ft.key === null ? ye : ft.key
        ), A = c(
          ft,
          A,
          ye
        ), Re === null ? ue = ft : Re.sibling = ft, Re = ft);
      return e && de.forEach(function(ol) {
        return t(k, ol);
      }), Ue && bl(k, ye), ue;
    }
    function me(k, A, _, G) {
      if (_ == null) throw Error(u(151));
      for (var ue = null, Re = null, de = A, ye = A = 0, ft = null, De = _.next(); de !== null && !De.done; ye++, De = _.next()) {
        de.index > ye ? (ft = de, de = null) : ft = de.sibling;
        var ol = N(k, de, De.value, G);
        if (ol === null) {
          de === null && (de = ft);
          break;
        }
        e && de && ol.alternate === null && t(k, de), A = c(ol, A, ye), Re === null ? ue = ol : Re.sibling = ol, Re = ol, de = ft;
      }
      if (De.done)
        return l(k, de), Ue && bl(k, ye), ue;
      if (de === null) {
        for (; !De.done; ye++, De = _.next())
          De = Q(k, De.value, G), De !== null && (A = c(De, A, ye), Re === null ? ue = De : Re.sibling = De, Re = De);
        return Ue && bl(k, ye), ue;
      }
      for (de = r(de); !De.done; ye++, De = _.next())
        De = M(de, k, ye, De.value, G), De !== null && (e && De.alternate !== null && de.delete(De.key === null ? ye : De.key), A = c(De, A, ye), Re === null ? ue = De : Re.sibling = De, Re = De);
      return e && de.forEach(function(e1) {
        return t(k, e1);
      }), Ue && bl(k, ye), ue;
    }
    function Ge(k, A, _, G) {
      if (typeof _ == "object" && _ !== null && _.type === C && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case w:
            e: {
              for (var ue = _.key; A !== null; ) {
                if (A.key === ue) {
                  if (ue = _.type, ue === C) {
                    if (A.tag === 7) {
                      l(
                        k,
                        A.sibling
                      ), G = o(
                        A,
                        _.props.children
                      ), G.return = k, k = G;
                      break e;
                    }
                  } else if (A.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === P && ah(ue) === A.type) {
                    l(
                      k,
                      A.sibling
                    ), G = o(A, _.props), cr(G, _), G.return = k, k = G;
                    break e;
                  }
                  l(k, A);
                  break;
                } else t(k, A);
                A = A.sibling;
              }
              _.type === C ? (G = gl(
                _.props.children,
                k.mode,
                G,
                _.key
              ), G.return = k, k = G) : (G = di(
                _.type,
                _.key,
                _.props,
                null,
                k.mode,
                G
              ), cr(G, _), G.return = k, k = G);
            }
            return y(k);
          case S:
            e: {
              for (ue = _.key; A !== null; ) {
                if (A.key === ue)
                  if (A.tag === 4 && A.stateNode.containerInfo === _.containerInfo && A.stateNode.implementation === _.implementation) {
                    l(
                      k,
                      A.sibling
                    ), G = o(A, _.children || []), G.return = k, k = G;
                    break e;
                  } else {
                    l(k, A);
                    break;
                  }
                else t(k, A);
                A = A.sibling;
              }
              G = go(_, k.mode, G), G.return = k, k = G;
            }
            return y(k);
          case P:
            return ue = _._init, _ = ue(_._payload), Ge(
              k,
              A,
              _,
              G
            );
        }
        if (X(_))
          return ve(
            k,
            A,
            _,
            G
          );
        if (ee(_)) {
          if (ue = ee(_), typeof ue != "function") throw Error(u(150));
          return _ = ue.call(_), me(
            k,
            A,
            _,
            G
          );
        }
        if (typeof _.then == "function")
          return Ge(
            k,
            A,
            Ri(_),
            G
          );
        if (_.$$typeof === K)
          return Ge(
            k,
            A,
            gi(k, _),
            G
          );
        Oi(k, _);
      }
      return typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint" ? (_ = "" + _, A !== null && A.tag === 6 ? (l(k, A.sibling), G = o(A, _), G.return = k, k = G) : (l(k, A), G = mo(_, k.mode, G), G.return = k, k = G), y(k)) : l(k, A);
    }
    return function(k, A, _, G) {
      try {
        sr = 0;
        var ue = Ge(
          k,
          A,
          _,
          G
        );
        return ia = null, ue;
      } catch (de) {
        if (de === er || de === bi) throw de;
        var Re = jt(29, de, null, k.mode);
        return Re.lanes = G, Re.return = k, Re;
      } finally {
      }
    };
  }
  var ua = rh(!0), ih = rh(!1), Wt = j(null), dn = null;
  function Zn(e) {
    var t = e.alternate;
    E(rt, rt.current & 1), E(Wt, e), dn === null && (t === null || na.current !== null || t.memoizedState !== null) && (dn = e);
  }
  function uh(e) {
    if (e.tag === 22) {
      if (E(rt, rt.current), E(Wt, e), dn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (dn = e);
      }
    } else Fn();
  }
  function Fn() {
    E(rt, rt.current), E(Wt, Wt.current);
  }
  function zn(e) {
    W(Wt), dn === e && (dn = null), W(rt);
  }
  var rt = j(0);
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
  function Io(e, t, l, r) {
    t = e.memoizedState, l = l(r, t), l = l == null ? t : m({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Jo = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var r = Yt(), o = Qn(r);
      o.payload = t, l != null && (o.callback = l), t = Xn(e, o, r), t !== null && (Gt(t, e, r), nr(t, e, r));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var r = Yt(), o = Qn(r);
      o.tag = 1, o.payload = t, l != null && (o.callback = l), t = Xn(e, o, r), t !== null && (Gt(t, e, r), nr(t, e, r));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Yt(), r = Qn(l);
      r.tag = 2, t != null && (r.callback = t), t = Xn(e, r, l), t !== null && (Gt(t, e, l), nr(t, e, l));
    }
  };
  function oh(e, t, l, r, o, c, y) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, c, y) : t.prototype && t.prototype.isPureReactComponent ? !Ka(l, r) || !Ka(o, c) : !0;
  }
  function sh(e, t, l, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, r), t.state !== e && Jo.enqueueReplaceState(t, t.state, null);
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
  function Po(e, t, l) {
    return l = Qn(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Mi(e, t);
    }, l;
  }
  function ph(e) {
    return e = Qn(e), e.tag = 3, e;
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
    var y = l.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (e.callback = function() {
      hh(t, l, r), typeof o != "function" && (el === null ? el = /* @__PURE__ */ new Set([this]) : el.add(this));
      var v = r.stack;
      this.componentDidCatch(r.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function e0(e, t, l, r, o) {
    if (l.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
      if (t = l.alternate, t !== null && Pa(
        t,
        l,
        o,
        !0
      ), l = Wt.current, l !== null) {
        switch (l.tag) {
          case 13:
            return dn === null ? Ss() : l.alternate === null && Pe === 0 && (Pe = 3), l.flags &= -257, l.flags |= 65536, l.lanes = o, r === ko ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), ws(e, r, o)), !1;
          case 22:
            return l.flags |= 65536, r === ko ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([r])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : l.add(r)), ws(e, r, o)), !1;
        }
        throw Error(u(435, l.tag));
      }
      return ws(e, r, o), Ss(), !1;
    }
    if (Ue)
      return t = Wt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, r !== vo && (e = Error(u(422), { cause: r }), Ja(It(e, l)))) : (r !== vo && (t = Error(u(423), {
        cause: r
      }), Ja(
        It(t, l)
      )), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, r = It(r, l), o = Po(
        e.stateNode,
        r,
        o
      ), Ro(e, o), Pe !== 4 && (Pe = 2)), !1;
    var c = Error(u(520), { cause: r });
    if (c = It(c, l), yr === null ? yr = [c] : yr.push(c), Pe !== 4 && (Pe = 2), t === null) return !0;
    r = It(r, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = o & -o, l.lanes |= e, e = Po(l.stateNode, r, e), Ro(l, e), !1;
        case 1:
          if (t = l.type, c = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (el === null || !el.has(c))))
            return l.flags |= 65536, o &= -o, l.lanes |= o, o = ph(o), mh(
              o,
              e,
              l,
              r
            ), Ro(l, o), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var gh = Error(u(461)), st = !1;
  function dt(e, t, l, r) {
    t.child = e === null ? ih(t, null, l, r) : ua(
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
      var y = {};
      for (var v in r)
        v !== "ref" && (y[v] = r[v]);
    } else y = r;
    return El(t), r = Do(
      e,
      t,
      l,
      y,
      c,
      o
    ), v = Uo(), e !== null && !st ? (Bo(e, t, o), Nn(e, t, o)) : (Ue && v && yo(t), t.flags |= 1, dt(e, t, r, o), t.child);
  }
  function bh(e, t, l, r, o) {
    if (e === null) {
      var c = l.type;
      return typeof c == "function" && !po(c) && c.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = c, vh(
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
    if (c = e.child, !rs(e, o)) {
      var y = c.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Ka, l(y, r) && e.ref === t.ref)
        return Nn(e, t, o);
    }
    return t.flags |= 1, e = An(c, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function vh(e, t, l, r, o) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Ka(c, r) && e.ref === t.ref)
        if (st = !1, t.pendingProps = r = c, rs(e, o))
          (e.flags & 131072) !== 0 && (st = !0);
        else
          return t.lanes = e.lanes, Nn(e, t, o);
    }
    return $o(
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
        ), c !== null ? vd(t, c) : zo(), uh(t);
      else
        return t.lanes = t.childLanes = 536870912, Sh(
          e,
          t,
          c !== null ? c.baseLanes | l : l,
          l
        );
    } else
      c !== null ? (yi(t, c.cachePool), vd(t, c), Fn(), t.memoizedState = null) : (e !== null && yi(t, null), zo(), Fn());
    return dt(e, t, o, l), t.child;
  }
  function Sh(e, t, l, r) {
    var o = Ao();
    return o = o === null ? null : { parent: at._currentValue, pool: o }, t.memoizedState = {
      baseLanes: l,
      cachePool: o
    }, e !== null && yi(t, null), zo(), uh(t), e !== null && Pa(e, t, r, !0), null;
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
  function $o(e, t, l, r, o) {
    return El(t), l = Do(
      e,
      t,
      l,
      r,
      void 0,
      o
    ), r = Uo(), e !== null && !st ? (Bo(e, t, o), Nn(e, t, o)) : (Ue && r && yo(t), t.flags |= 1, dt(e, t, l, o), t.child);
  }
  function Eh(e, t, l, r, o, c) {
    return El(t), t.updateQueue = null, l = Sd(
      t,
      r,
      l,
      o
    ), xd(e), r = Uo(), e !== null && !st ? (Bo(e, t, c), Nn(e, t, c)) : (Ue && r && yo(t), t.flags |= 1, dt(e, t, l, c), t.child);
  }
  function wh(e, t, l, r, o) {
    if (El(t), t.stateNode === null) {
      var c = Pl, y = l.contextType;
      typeof y == "object" && y !== null && (c = gt(y)), c = new l(r, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Jo, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = r, c.state = t.memoizedState, c.refs = {}, Co(t), y = l.contextType, c.context = typeof y == "object" && y !== null ? gt(y) : Pl, c.state = t.memoizedState, y = l.getDerivedStateFromProps, typeof y == "function" && (Io(
        t,
        l,
        y,
        r
      ), c.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (y = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), y !== c.state && Jo.enqueueReplaceState(c, c.state, null), ar(t, r, c, o), lr(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
    } else if (e === null) {
      c = t.stateNode;
      var v = t.memoizedProps, T = Al(l, v);
      c.props = T;
      var z = c.context, q = l.contextType;
      y = Pl, typeof q == "object" && q !== null && (y = gt(q));
      var Q = l.getDerivedStateFromProps;
      q = typeof Q == "function" || typeof c.getSnapshotBeforeUpdate == "function", v = t.pendingProps !== v, q || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (v || z !== y) && sh(
        t,
        c,
        r,
        y
      ), Gn = !1;
      var N = t.memoizedState;
      c.state = N, ar(t, r, c, o), lr(), z = t.memoizedState, v || N !== z || Gn ? (typeof Q == "function" && (Io(
        t,
        l,
        Q,
        r
      ), z = t.memoizedState), (T = Gn || oh(
        t,
        l,
        T,
        r,
        N,
        z,
        y
      )) ? (q || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = z), c.props = r, c.state = z, c.context = y, r = T) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      c = t.stateNode, _o(e, t), y = t.memoizedProps, q = Al(l, y), c.props = q, Q = t.pendingProps, N = c.context, z = l.contextType, T = Pl, typeof z == "object" && z !== null && (T = gt(z)), v = l.getDerivedStateFromProps, (z = typeof v == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (y !== Q || N !== T) && sh(
        t,
        c,
        r,
        T
      ), Gn = !1, N = t.memoizedState, c.state = N, ar(t, r, c, o), lr();
      var M = t.memoizedState;
      y !== Q || N !== M || Gn || e !== null && e.dependencies !== null && mi(e.dependencies) ? (typeof v == "function" && (Io(
        t,
        l,
        v,
        r
      ), M = t.memoizedState), (q = Gn || oh(
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
      )), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || y === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = M), c.props = r, c.state = M, c.context = T, r = q) : (typeof c.componentDidUpdate != "function" || y === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return c = r, Di(e, t), r = (t.flags & 128) !== 0, c || r ? (c = t.stateNode, l = r && typeof l.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && r ? (t.child = ua(
      t,
      e.child,
      null,
      o
    ), t.child = ua(
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
    return Ia(), t.flags |= 256, dt(e, t, l, r), t.child;
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
    var r = t.pendingProps, o = !1, c = (t.flags & 128) !== 0, y;
    if ((y = c) || (y = e !== null && e.memoizedState === null ? !1 : (rt.current & 2) !== 0), y && (o = !0, t.flags &= -129), y = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ue) {
        if (o ? Zn(t) : Fn(), Ue) {
          var v = Je, T;
          if (T = v) {
            e: {
              for (T = v, v = fn; T.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break e;
                }
                if (T = un(
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
              treeContext: yl !== null ? { id: kn, overflow: Cn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, T = jt(
              18,
              null,
              null,
              0
            ), T.stateNode = v, T.return = t, t.child = T, St = t, Je = null, T = !0) : T = !1;
          }
          T || xl(t);
        }
        if (v = t.memoizedState, v !== null && (v = v.dehydrated, v !== null))
          return js(v) ? t.lanes = 32 : t.lanes = 536870912, null;
        zn(t);
      }
      return v = r.children, r = r.fallback, o ? (Fn(), o = t.mode, v = Ui(
        { mode: "hidden", children: v },
        o
      ), r = gl(
        r,
        o,
        l,
        null
      ), v.return = t, r.return = t, v.sibling = r, t.child = v, o = t.child, o.memoizedState = es(l), o.childLanes = ts(
        e,
        y,
        l
      ), t.memoizedState = Wo, r) : (Zn(t), ns(t, v));
    }
    if (T = e.memoizedState, T !== null && (v = T.dehydrated, v !== null)) {
      if (c)
        t.flags & 256 ? (Zn(t), t.flags &= -257, t = ls(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Fn(), t.child = e.child, t.flags |= 128, t = null) : (Fn(), o = r.fallback, v = t.mode, r = Ui(
          { mode: "visible", children: r.children },
          v
        ), o = gl(
          o,
          v,
          l,
          null
        ), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, ua(
          t,
          e.child,
          null,
          l
        ), r = t.child, r.memoizedState = es(l), r.childLanes = ts(
          e,
          y,
          l
        ), t.memoizedState = Wo, t = o);
      else if (Zn(t), js(v)) {
        if (y = v.nextSibling && v.nextSibling.dataset, y) var z = y.dgst;
        y = z, r = Error(u(419)), r.stack = "", r.digest = y, Ja({ value: r, source: null, stack: null }), t = ls(
          e,
          t,
          l
        );
      } else if (st || Pa(e, t, l, !1), y = (l & e.childLanes) !== 0, st || y) {
        if (y = Xe, y !== null && (r = l & -l, r = (r & 42) !== 0 ? 1 : ju(r), r = (r & (y.suspendedLanes | l)) !== 0 ? 0 : r, r !== 0 && r !== T.retryLane))
          throw T.retryLane = r, Jl(e, r), Gt(y, e, r), gh;
        v.data === "$?" || Ss(), t = ls(
          e,
          t,
          l
        );
      } else
        v.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = T.treeContext, Je = un(
          v.nextSibling
        ), St = t, Ue = !0, vl = null, fn = !1, e !== null && (Pt[$t++] = kn, Pt[$t++] = Cn, Pt[$t++] = yl, kn = e.id, Cn = e.overflow, yl = t), t = ns(
          t,
          r.children
        ), t.flags |= 4096);
      return t;
    }
    return o ? (Fn(), o = r.fallback, v = t.mode, T = e.child, z = T.sibling, r = An(T, {
      mode: "hidden",
      children: r.children
    }), r.subtreeFlags = T.subtreeFlags & 65011712, z !== null ? o = An(z, o) : (o = gl(
      o,
      v,
      l,
      null
    ), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, v = e.child.memoizedState, v === null ? v = es(l) : (T = v.cachePool, T !== null ? (z = at._currentValue, T = T.parent !== z ? { parent: z, pool: z } : T) : T = fd(), v = {
      baseLanes: v.baseLanes | l,
      cachePool: T
    }), o.memoizedState = v, o.childLanes = ts(
      e,
      y,
      l
    ), t.memoizedState = Wo, r) : (Zn(t), l = e.child, e = l.sibling, l = An(l, {
      mode: "visible",
      children: r.children
    }), l.return = t, l.sibling = null, e !== null && (y = t.deletions, y === null ? (t.deletions = [e], t.flags |= 16) : y.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function ns(e, t) {
    return t = Ui(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Ui(e, t) {
    return e = jt(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function ls(e, t, l) {
    return ua(t, e.child, null, l), e = ns(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function kh(e, t, l) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), So(e.return, t, l);
  }
  function as(e, t, l, r, o) {
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
      r &= 1;
    }
    switch (E(rt, r), o) {
      case "forwards":
        for (l = t.child, o = null; l !== null; )
          e = l.alternate, e !== null && zi(e) === null && (o = l), l = l.sibling;
        l = o, l === null ? (o = t.child, t.child = null) : (o = l.sibling, l.sibling = null), as(
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
        as(
          t,
          !0,
          l,
          null,
          c
        );
        break;
      case "together":
        as(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Nn(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Wn |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (Pa(
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
      for (e = t.child, l = An(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = An(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function rs(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && mi(e)));
  }
  function t0(e, t, l) {
    switch (t.tag) {
      case 3:
        Ne(t, t.stateNode.containerInfo), Yn(t, at, e.memoizedState.cache), Ia();
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
        var r = t.memoizedState;
        if (r !== null)
          return r.dehydrated !== null ? (Zn(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? Ah(e, t, l) : (Zn(t), e = Nn(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        Zn(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (r = (l & t.childLanes) !== 0, r || (Pa(
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
        Yn(t, at, e.memoizedState.cache);
    }
    return Nn(e, t, l);
  }
  function _h(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        st = !0;
      else {
        if (!rs(e, l) && (t.flags & 128) === 0)
          return st = !1, t0(
            e,
            t,
            l
          );
        st = (e.flags & 131072) !== 0;
      }
    else
      st = !1, Ue && (t.flags & 1048576) !== 0 && ad(t, pi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var r = t.elementType, o = r._init;
          if (r = o(r._payload), t.type = r, typeof r == "function")
            po(r) ? (e = Al(r, e), t.tag = 1, t = wh(
              null,
              t,
              r,
              e,
              l
            )) : (t.tag = 0, t = $o(
              null,
              t,
              r,
              e,
              l
            ));
          else {
            if (r != null) {
              if (o = r.$$typeof, o === ce) {
                t.tag = 11, t = yh(
                  null,
                  t,
                  r,
                  e,
                  l
                );
                break e;
              } else if (o === ie) {
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
            throw t = te(r) || r, Error(u(306, t, ""));
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
          o = c.element, _o(e, t), ar(t, r, null, l);
          var y = t.memoizedState;
          if (r = y.cache, Yn(t, at, r), r !== c.cache && Eo(
            t,
            [at],
            l,
            !0
          ), lr(), r = y.element, c.isDehydrated)
            if (c = {
              element: r,
              isDehydrated: !1,
              cache: y.cache
            }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
              t = Th(
                e,
                t,
                r,
                l
              );
              break e;
            } else if (r !== o) {
              o = It(
                Error(u(424)),
                t
              ), Ja(o), t = Th(
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
              for (Je = un(e.firstChild), St = t, Ue = !0, vl = null, fn = !0, l = ih(
                t,
                null,
                r,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if (Ia(), r === o) {
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
        )) ? t.memoizedState = l : Ue || (l = t.type, e = t.pendingProps, r = Ii(
          re.current
        ).createElement(l), r[mt] = t, r[wt] = e, pt(r, l, e), ot(r), t.stateNode = r) : t.memoizedState = Np(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return xt(t), e === null && Ue && (r = t.stateNode = Rp(
          t.type,
          t.pendingProps,
          re.current
        ), St = t, fn = !0, o = Je, ll(t.type) ? (Hs = o, Je = un(
          r.firstChild
        )) : Je = o), dt(
          e,
          t,
          t.pendingProps.children,
          l
        ), Di(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ue && ((o = r = Je) && (r = R0(
          r,
          t.type,
          t.pendingProps,
          fn
        ), r !== null ? (t.stateNode = r, St = t, Je = un(
          r.firstChild
        ), fn = !1, o = !0) : o = !1), o || xl(t)), xt(t), o = t.type, c = t.pendingProps, y = e !== null ? e.memoizedProps : null, r = c.children, Us(o, c) ? r = null : y !== null && Us(o, y) && (t.flags |= 32), t.memoizedState !== null && (o = Do(
          e,
          t,
          Zb,
          null,
          null,
          l
        ), kr._currentValue = o), Di(e, t), dt(e, t, r, l), t.child;
      case 6:
        return e === null && Ue && ((e = l = Je) && (l = O0(
          l,
          t.pendingProps,
          fn
        ), l !== null ? (t.stateNode = l, St = t, Je = null, e = !0) : e = !1), e || xl(t)), null;
      case 13:
        return Ah(e, t, l);
      case 4:
        return Ne(
          t,
          t.stateNode.containerInfo
        ), r = t.pendingProps, e === null ? t.child = ua(
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
        return r = t.pendingProps, Yn(t, t.type, r.value), dt(
          e,
          t,
          r.children,
          l
        ), t.child;
      case 9:
        return o = t.type._context, r = t.pendingProps.children, El(t), o = gt(o), r = r(o), t.flags |= 1, dt(e, t, r, l), t.child;
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
        ), l.ref = t.ref, t.child = l, l.return = t, t = l) : (l = An(e.child, r), l.ref = t.ref, t.child = l, l.return = t, t = l), t;
      case 22:
        return xh(e, t, l);
      case 24:
        return El(t), r = gt(at), e === null ? (o = Ao(), o === null && (o = Xe, c = wo(), o.pooledCache = c, c.refCount++, c !== null && (o.pooledCacheLanes |= l), o = c), t.memoizedState = {
          parent: r,
          cache: o
        }, Co(t), Yn(t, at, o)) : ((e.lanes & l) !== 0 && (_o(e, t), ar(t, null, null, l), lr()), o = e.memoizedState, c = t.memoizedState, o.parent !== r ? (o = { parent: r, cache: r }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Yn(t, at, r)) : (r = c.cache, Yn(t, at, r), r !== o.cache && Eo(
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
    else if (e.flags |= 16777216, !Lp(t)) {
      if (t = Wt.current, t !== null && ((Me & 4194048) === Me ? dn !== null : (Me & 62914560) !== Me && (Me & 536870912) === 0 || t !== dn))
        throw tr = ko, dd;
      e.flags |= 8192;
    }
  }
  function Bi(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? uf() : 536870912, e.lanes |= t, fa |= t);
  }
  function fr(e, t) {
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
  function n0(e, t, l) {
    var r = t.pendingProps;
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
        return Ie(t), null;
      case 1:
        return Ie(t), null;
      case 3:
        return l = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), Rn(at), et(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Fa(t) ? Mn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ud())), Ie(t), null;
      case 26:
        return l = t.memoizedState, e === null ? (Mn(t), l !== null ? (Ie(t), Rh(t, l)) : (Ie(t), t.flags &= -16777217)) : l ? l !== e.memoizedState ? (Mn(t), Ie(t), Rh(t, l)) : (Ie(t), t.flags &= -16777217) : (e.memoizedProps !== r && Mn(t), Ie(t), t.flags &= -16777217), null;
      case 27:
        Mt(t), l = re.current;
        var o = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== r && Mn(t);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(u(166));
            return Ie(t), null;
          }
          e = ne.current, Fa(t) ? rd(t) : (e = Rp(o, r, l), t.stateNode = e, Mn(t));
        }
        return Ie(t), null;
      case 5:
        if (Mt(t), l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== r && Mn(t);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(u(166));
            return Ie(t), null;
          }
          if (e = ne.current, Fa(t))
            rd(t);
          else {
            switch (o = Ii(
              re.current
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
          if (e = re.current, Fa(t)) {
            if (e = t.stateNode, l = t.memoizedProps, r = null, o = St, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  r = o.memoizedProps;
              }
            e[mt] = t, e = !!(e.nodeValue === l || r !== null && r.suppressHydrationWarning === !0 || Ep(e.nodeValue, l)), e || xl(t);
          } else
            e = Ii(e).createTextNode(
              r
            ), e[mt] = t, t.stateNode = e;
        }
        return Ie(t), null;
      case 13:
        if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (o = Fa(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[mt] = t;
            } else
              Ia(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
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
        return et(), e === null && Os(t.stateNode.containerInfo), Ie(t), null;
      case 10:
        return Rn(t.type), Ie(t), null;
      case 19:
        if (W(rt), o = t.memoizedState, o === null) return Ie(t), null;
        if (r = (t.flags & 128) !== 0, c = o.rendering, c === null)
          if (r) fr(o, !1);
          else {
            if (Pe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (c = zi(e), c !== null) {
                  for (t.flags |= 128, fr(o, !1), e = c.updateQueue, t.updateQueue = e, Bi(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    ld(l, e), l = l.sibling;
                  return E(
                    rt,
                    rt.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null && Dt() > Hi && (t.flags |= 128, r = !0, fr(o, !1), t.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = zi(c), e !== null) {
              if (t.flags |= 128, r = !0, e = e.updateQueue, t.updateQueue = e, Bi(t, e), fr(o, !0), o.tail === null && o.tailMode === "hidden" && !c.alternate && !Ue)
                return Ie(t), null;
            } else
              2 * Dt() - o.renderingStartTime > Hi && l !== 536870912 && (t.flags |= 128, r = !0, fr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (c.sibling = t.child, t.child = c) : (e = o.last, e !== null ? e.sibling = c : t.child = c, o.last = c);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Dt(), t.sibling = null, e = rt.current, E(rt, r ? e & 1 | 2 : e & 1), t) : (Ie(t), null);
      case 22:
      case 23:
        return zn(t), No(), r = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t), l = t.updateQueue, l !== null && Bi(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== l && (t.flags |= 2048), e !== null && W(wl), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Rn(at), Ie(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function l0(e, t) {
    switch (bo(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Rn(at), et(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Mt(t), null;
      case 13:
        if (zn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(u(340));
          Ia();
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
        return zn(t), No(), e !== null && W(wl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Rn(at), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Oh(e, t) {
    switch (bo(t), t.tag) {
      case 3:
        Rn(at), et();
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
        zn(t), No(), e !== null && W(wl);
        break;
      case 24:
        Rn(at);
    }
  }
  function dr(e, t) {
    try {
      var l = t.updateQueue, r = l !== null ? l.lastEffect : null;
      if (r !== null) {
        var o = r.next;
        l = o;
        do {
          if ((l.tag & e) === e) {
            r = void 0;
            var c = l.create, y = l.inst;
            r = c(), y.destroy = r;
          }
          l = l.next;
        } while (l !== o);
      }
    } catch (v) {
      Qe(t, t.return, v);
    }
  }
  function In(e, t, l) {
    try {
      var r = t.updateQueue, o = r !== null ? r.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        r = c;
        do {
          if ((r.tag & e) === e) {
            var y = r.inst, v = y.destroy;
            if (v !== void 0) {
              y.destroy = void 0, o = t;
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
  function hr(e, t) {
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
  function hn(e, t) {
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
  function is(e, t, l) {
    try {
      var r = e.stateNode;
      T0(r, e.type, l, t), r[wt] = t;
    } catch (o) {
      Qe(e, e.return, o);
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
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Fi));
    else if (r !== 4 && (r === 27 && ll(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (os(e, t, l), e = e.sibling; e !== null; )
        os(e, t, l), e = e.sibling;
  }
  function Li(e, t, l) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (r !== 4 && (r === 27 && ll(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Li(e, t, l), e = e.sibling; e !== null; )
        Li(e, t, l), e = e.sibling;
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
  var Dn = !1, We = !1, ss = !1, Bh = typeof WeakSet == "function" ? WeakSet : Set, ct = null;
  function a0(e, t) {
    if (e = e.containerInfo, Ms = tu, e = Zf(e), io(e)) {
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
            var y = 0, v = -1, T = -1, z = 0, q = 0, Q = e, N = null;
            t: for (; ; ) {
              for (var M; Q !== l || o !== 0 && Q.nodeType !== 3 || (v = y + o), Q !== c || r !== 0 && Q.nodeType !== 3 || (T = y + r), Q.nodeType === 3 && (y += Q.nodeValue.length), (M = Q.firstChild) !== null; )
                N = Q, Q = M;
              for (; ; ) {
                if (Q === e) break t;
                if (N === l && ++z === o && (v = y), N === c && ++q === r && (T = y), (M = Q.nextSibling) !== null) break;
                Q = N, N = Q.parentNode;
              }
              Q = M;
            }
            l = v === -1 || T === -1 ? null : { start: v, end: T };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Ds = { focusedElem: e, selectionRange: l }, tu = !1, ct = t; ct !== null; )
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
                } catch (me) {
                  Qe(
                    l,
                    l.return,
                    me
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
    var r = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Jn(e, l), r & 4 && dr(5, l);
        break;
      case 1:
        if (Jn(e, l), r & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (y) {
              Qe(l, l.return, y);
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
            } catch (y) {
              Qe(
                l,
                l.return,
                y
              );
            }
          }
        r & 64 && zh(l), r & 512 && hr(l, l.return);
        break;
      case 3:
        if (Jn(e, l), r & 64 && (e = l.updateQueue, e !== null)) {
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
          } catch (y) {
            Qe(l, l.return, y);
          }
        }
        break;
      case 27:
        t === null && r & 4 && Uh(l);
      case 26:
      case 5:
        Jn(e, l), t === null && r & 4 && Mh(l), r & 512 && hr(l, l.return);
        break;
      case 12:
        Jn(e, l);
        break;
      case 13:
        Jn(e, l), r & 4 && qh(e, l), r & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = h0.bind(
          null,
          l
        ), z0(e, l))));
        break;
      case 22:
        if (r = l.memoizedState !== null || Dn, !r) {
          t = t !== null && t.memoizedState !== null || We, o = Dn;
          var c = We;
          Dn = r, (We = t) && !c ? Pn(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : Jn(e, l), Dn = o, We = c;
        }
        break;
      case 30:
        break;
      default:
        Jn(e, l);
    }
  }
  function jh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, jh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Vu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Fe = null, kt = !1;
  function Un(e, t, l) {
    for (l = l.child; l !== null; )
      Hh(e, t, l), l = l.sibling;
  }
  function Hh(e, t, l) {
    if (F && typeof F.onCommitFiberUnmount == "function")
      try {
        F.onCommitFiberUnmount(H, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        We || hn(l, t), Un(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        We || hn(l, t);
        var r = Fe, o = kt;
        ll(l.type) && (Fe = l.stateNode, kt = !1), Un(
          e,
          t,
          l
        ), Er(l.stateNode), Fe = r, kt = o;
        break;
      case 5:
        We || hn(l, t);
      case 6:
        if (r = Fe, o = kt, Fe = null, Un(
          e,
          t,
          l
        ), Fe = r, kt = o, Fe !== null)
          if (kt)
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
        Fe !== null && (kt ? (e = Fe, Cp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Or(e)) : Cp(Fe, l.stateNode));
        break;
      case 4:
        r = Fe, o = kt, Fe = l.stateNode.containerInfo, kt = !0, Un(
          e,
          t,
          l
        ), Fe = r, kt = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        We || In(2, l, t), We || In(4, l, t), Un(
          e,
          t,
          l
        );
        break;
      case 1:
        We || (hn(l, t), r = l.stateNode, typeof r.componentWillUnmount == "function" && Nh(
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
        Or(e);
      } catch (l) {
        Qe(t, t.return, l);
      }
  }
  function r0(e) {
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
    var l = r0(e);
    t.forEach(function(r) {
      var o = p0.bind(null, e, r);
      l.has(r) || (l.add(r), r.then(o, o));
    });
  }
  function Ht(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var r = 0; r < l.length; r++) {
        var o = l[r], c = e, y = t, v = y;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (ll(v.type)) {
                Fe = v.stateNode, kt = !1;
                break e;
              }
              break;
            case 5:
              Fe = v.stateNode, kt = !1;
              break e;
            case 3:
            case 4:
              Fe = v.stateNode.containerInfo, kt = !0;
              break e;
          }
          v = v.return;
        }
        if (Fe === null) throw Error(u(160));
        Hh(c, y, o), Fe = null, kt = !1, c = o.alternate, c !== null && (c.return = null), o.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Vh(t, e), t = t.sibling;
  }
  var rn = null;
  function Vh(e, t) {
    var l = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ht(t, e), qt(e), r & 4 && (In(3, e, e.return), dr(3, e), In(5, e, e.return));
        break;
      case 1:
        Ht(t, e), qt(e), r & 512 && (We || l === null || hn(l, l.return)), r & 64 && Dn && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? r : l.concat(r))));
        break;
      case 26:
        var o = rn;
        if (Ht(t, e), qt(e), r & 512 && (We || l === null || hn(l, l.return)), r & 4) {
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
                      var y = Up(
                        "link",
                        "href",
                        o
                      ).get(r + (l.href || ""));
                      if (y) {
                        for (var v = 0; v < y.length; v++)
                          if (c = y[v], c.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && c.getAttribute("rel") === (l.rel == null ? null : l.rel) && c.getAttribute("title") === (l.title == null ? null : l.title) && c.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            y.splice(v, 1);
                            break t;
                          }
                      }
                      c = o.createElement(r), pt(c, r, l), o.head.appendChild(c);
                      break;
                    case "meta":
                      if (y = Up(
                        "meta",
                        "content",
                        o
                      ).get(r + (l.content || ""))) {
                        for (v = 0; v < y.length; v++)
                          if (c = y[v], c.getAttribute("content") === (l.content == null ? null : "" + l.content) && c.getAttribute("name") === (l.name == null ? null : l.name) && c.getAttribute("property") === (l.property == null ? null : l.property) && c.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && c.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            y.splice(v, 1);
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
            )) : r === null && e.stateNode !== null && is(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        Ht(t, e), qt(e), r & 512 && (We || l === null || hn(l, l.return)), l !== null && r & 4 && is(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (Ht(t, e), qt(e), r & 512 && (We || l === null || hn(l, l.return)), e.flags & 32) {
          o = e.stateNode;
          try {
            Gl(o, "");
          } catch (M) {
            Qe(e, e.return, M);
          }
        }
        r & 4 && e.stateNode != null && (o = e.memoizedProps, is(
          e,
          o,
          l !== null ? l.memoizedProps : o
        )), r & 1024 && (ss = !0);
        break;
      case 6:
        if (Ht(t, e), qt(e), r & 4) {
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
        if ($i = null, o = rn, rn = Ji(t.containerInfo), Ht(t, e), rn = o, qt(e), r & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Or(t.containerInfo);
          } catch (M) {
            Qe(e, e.return, M);
          }
        ss && (ss = !1, Yh(e));
        break;
      case 4:
        r = rn, rn = Ji(
          e.stateNode.containerInfo
        ), Ht(t, e), qt(e), rn = r;
        break;
      case 12:
        Ht(t, e), qt(e);
        break;
      case 13:
        Ht(t, e), qt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (gs = Dt()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, cs(e, r)));
        break;
      case 22:
        o = e.memoizedState !== null;
        var T = l !== null && l.memoizedState !== null, z = Dn, q = We;
        if (Dn = z || o, We = q || T, Ht(t, e), We = q, Dn = z, qt(e), r & 8192)
          e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (l === null || T || Dn || We || kl(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                T = l = t;
                try {
                  if (c = T.stateNode, o)
                    y = c.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    v = T.stateNode;
                    var Q = T.memoizedProps.style, N = Q != null && Q.hasOwnProperty("display") ? Q.display : null;
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
        r & 4 && (r = e.updateQueue, r !== null && (l = r.retryQueue, l !== null && (r.retryQueue = null, cs(e, l))));
        break;
      case 19:
        Ht(t, e), qt(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, cs(e, r)));
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
            var o = l.stateNode, c = us(e);
            Li(e, c, o);
            break;
          case 5:
            var y = l.stateNode;
            l.flags & 32 && (Gl(y, ""), l.flags &= -33);
            var v = us(e);
            Li(e, v, y);
            break;
          case 3:
          case 4:
            var T = l.stateNode.containerInfo, z = us(e);
            os(
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
  function Jn(e, t) {
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
          In(4, t, t.return), kl(t);
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
          Er(t.stateNode);
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
      var r = t.alternate, o = e, c = t, y = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Pn(
            o,
            c,
            l
          ), dr(4, c);
          break;
        case 1:
          if (Pn(
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
          l && y & 64 && zh(c), hr(c, c.return);
          break;
        case 27:
          Uh(c);
        case 26:
        case 5:
          Pn(
            o,
            c,
            l
          ), l && r === null && y & 4 && Mh(c), hr(c, c.return);
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
          ), l && y & 4 && qh(o, c);
          break;
        case 22:
          c.memoizedState === null && Pn(
            o,
            c,
            l
          ), hr(c, c.return);
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
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && $a(l));
  }
  function ds(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && $a(e));
  }
  function pn(e, t, l, r) {
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
        pn(
          e,
          t,
          l,
          r
        ), o & 2048 && dr(9, t);
        break;
      case 1:
        pn(
          e,
          t,
          l,
          r
        );
        break;
      case 3:
        pn(
          e,
          t,
          l,
          r
        ), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && $a(e)));
        break;
      case 12:
        if (o & 2048) {
          pn(
            e,
            t,
            l,
            r
          ), e = t.stateNode;
          try {
            var c = t.memoizedProps, y = c.id, v = c.onPostCommit;
            typeof v == "function" && v(
              y,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (T) {
            Qe(t, t.return, T);
          }
        } else
          pn(
            e,
            t,
            l,
            r
          );
        break;
      case 13:
        pn(
          e,
          t,
          l,
          r
        );
        break;
      case 23:
        break;
      case 22:
        c = t.stateNode, y = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? pn(
          e,
          t,
          l,
          r
        ) : pr(e, t) : c._visibility & 2 ? pn(
          e,
          t,
          l,
          r
        ) : (c._visibility |= 2, oa(
          e,
          t,
          l,
          r,
          (t.subtreeFlags & 10256) !== 0
        )), o & 2048 && fs(y, t);
        break;
      case 24:
        pn(
          e,
          t,
          l,
          r
        ), o & 2048 && ds(t.alternate, t);
        break;
      default:
        pn(
          e,
          t,
          l,
          r
        );
    }
  }
  function oa(e, t, l, r, o) {
    for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var c = e, y = t, v = l, T = r, z = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          oa(
            c,
            y,
            v,
            T,
            o
          ), dr(8, y);
          break;
        case 23:
          break;
        case 22:
          var q = y.stateNode;
          y.memoizedState !== null ? q._visibility & 2 ? oa(
            c,
            y,
            v,
            T,
            o
          ) : pr(
            c,
            y
          ) : (q._visibility |= 2, oa(
            c,
            y,
            v,
            T,
            o
          )), o && z & 2048 && fs(
            y.alternate,
            y
          );
          break;
        case 24:
          oa(
            c,
            y,
            v,
            T,
            o
          ), o && z & 2048 && ds(y.alternate, y);
          break;
        default:
          oa(
            c,
            y,
            v,
            T,
            o
          );
      }
      t = t.sibling;
    }
  }
  function pr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, r = t, o = r.flags;
        switch (r.tag) {
          case 22:
            pr(l, r), o & 2048 && fs(
              r.alternate,
              r
            );
            break;
          case 24:
            pr(l, r), o & 2048 && ds(r.alternate, r);
            break;
          default:
            pr(l, r);
        }
        t = t.sibling;
      }
  }
  var mr = 8192;
  function sa(e) {
    if (e.subtreeFlags & mr)
      for (e = e.child; e !== null; )
        Qh(e), e = e.sibling;
  }
  function Qh(e) {
    switch (e.tag) {
      case 26:
        sa(e), e.flags & mr && e.memoizedState !== null && Q0(
          rn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        sa(e);
        break;
      case 3:
      case 4:
        var t = rn;
        rn = Ji(e.stateNode.containerInfo), sa(e), rn = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = mr, mr = 16777216, sa(e), mr = t) : sa(e));
        break;
      default:
        sa(e);
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
  function gr(e) {
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
        gr(e), e.flags & 2048 && In(9, e, e.return);
        break;
      case 3:
        gr(e);
        break;
      case 12:
        gr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, ji(e)) : gr(e);
        break;
      default:
        gr(e);
    }
  }
  function ji(e) {
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
          In(8, t, t.return), ji(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, ji(t));
          break;
        default:
          ji(t);
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
          In(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var r = l.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          $a(l.memoizedState.cache);
      }
      if (r = l.child, r !== null) r.return = l, ct = r;
      else
        e: for (l = e; ct !== null; ) {
          r = ct;
          var o = r.sibling, c = r.return;
          if (jh(r), r === l) {
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
  var i0 = {
    getCacheForType: function(e) {
      var t = gt(at), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    }
  }, u0 = typeof WeakMap == "function" ? WeakMap : Map, He = 0, Xe = null, Oe = null, Me = 0, qe = 0, Vt = null, $n = !1, ca = !1, hs = !1, Bn = 0, Pe = 0, Wn = 0, Cl = 0, ps = 0, en = 0, fa = 0, yr = null, Ct = null, ms = !1, gs = 0, Hi = 1 / 0, qi = null, el = null, ht = 0, tl = null, da = null, ha = 0, ys = 0, bs = null, Fh = null, br = 0, vs = null;
  function Yt() {
    if ((He & 2) !== 0 && Me !== 0)
      return Me & -Me;
    if (O.T !== null) {
      var e = ea;
      return e !== 0 ? e : ks();
    }
    return cf();
  }
  function Ih() {
    en === 0 && (en = (Me & 536870912) === 0 || Ue ? rf() : 536870912);
    var e = Wt.current;
    return e !== null && (e.flags |= 32), en;
  }
  function Gt(e, t, l) {
    (e === Xe && (qe === 2 || qe === 9) || e.cancelPendingCommit !== null) && (pa(e, 0), nl(
      e,
      Me,
      en,
      !1
    )), Ba(e, l), ((He & 2) === 0 || e !== Xe) && (e === Xe && ((He & 2) === 0 && (Cl |= l), Pe === 4 && nl(
      e,
      Me,
      en,
      !1
    )), mn(e));
  }
  function Jh(e, t, l) {
    if ((He & 6) !== 0) throw Error(u(327));
    var r = !l && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Kt(e, t), o = r ? c0(e, t) : Es(e, t, !0), c = r;
    do {
      if (o === 0) {
        ca && !r && nl(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, c && !o0(l)) {
          o = Es(e, t, !1), c = !1;
          continue;
        }
        if (o === 2) {
          if (c = t, e.errorRecoveryDisabledLanes & c)
            var y = 0;
          else
            y = e.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            t = y;
            e: {
              var v = e;
              o = yr;
              var T = v.current.memoizedState.isDehydrated;
              if (T && (pa(v, y).flags |= 256), y = Es(
                v,
                y,
                !1
              ), y !== 2) {
                if (hs && !T) {
                  v.errorRecoveryDisabledLanes |= c, Cl |= c, o = 4;
                  break e;
                }
                c = Ct, Ct = o, c !== null && (Ct === null ? Ct = c : Ct.push.apply(
                  Ct,
                  c
                ));
              }
              o = y;
            }
            if (c = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          pa(e, 0), nl(e, t, 0, !0);
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
              nl(
                r,
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
              r,
              t,
              en,
              !$n
            ), ut(r, 0, !0) !== 0) break e;
            r.timeoutHandle = Ap(
              Ph.bind(
                null,
                r,
                l,
                Ct,
                qi,
                ms,
                t,
                en,
                Cl,
                fa,
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
            r,
            l,
            Ct,
            qi,
            ms,
            t,
            en,
            Cl,
            fa,
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
  function Ph(e, t, l, r, o, c, y, v, T, z, q, Q, N, M) {
    if (e.timeoutHandle = -1, Q = t.subtreeFlags, (Q & 8192 || (Q & 16785408) === 16785408) && (Ar = { stylesheets: null, count: 0, unsuspend: G0 }, Qh(t), Q = X0(), Q !== null)) {
      e.cancelPendingCommit = Q(
        ap.bind(
          null,
          e,
          t,
          c,
          l,
          r,
          o,
          y,
          v,
          T,
          q,
          1,
          N,
          M
        )
      ), nl(e, c, y, !z);
      return;
    }
    ap(
      e,
      t,
      c,
      l,
      r,
      o,
      y,
      v,
      T
    );
  }
  function o0(e) {
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
  function nl(e, t, l, r) {
    t &= ~ps, t &= ~Cl, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
    for (var o = t; 0 < o; ) {
      var c = 31 - be(o), y = 1 << c;
      r[c] = -1, o &= ~y;
    }
    l !== 0 && of(e, l, t);
  }
  function Vi() {
    return (He & 6) === 0 ? (vr(0), !1) : !0;
  }
  function xs() {
    if (Oe !== null) {
      if (qe === 0)
        var e = Oe.return;
      else
        e = Oe, _n = Sl = null, Lo(e), ia = null, sr = 0, e = Oe;
      for (; e !== null; )
        Oh(e.alternate, e), e = e.return;
      Oe = null;
    }
  }
  function pa(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, k0(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), xs(), Xe = e, Oe = l = An(e.current, null), Me = t, qe = 0, Vt = null, $n = !1, ca = Kt(e, t), hs = !1, fa = en = ps = Cl = Wn = Pe = 0, Ct = yr = null, ms = !1, (t & 8) !== 0 && (t |= t & 32);
    var r = e.entangledLanes;
    if (r !== 0)
      for (e = e.entanglements, r &= t; 0 < r; ) {
        var o = 31 - be(r), c = 1 << o;
        t |= e[o], r &= ~c;
      }
    return Bn = t, si(), l;
  }
  function $h(e, t) {
    ke = null, O.H = _i, t === er || t === bi ? (t = md(), qe = 3) : t === dd ? (t = md(), qe = 4) : qe = t === gh ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Vt = t, Oe === null && (Pe = 1, Mi(
      e,
      It(t, e.current)
    ));
  }
  function Wh() {
    var e = O.H;
    return O.H = _i, e === null ? _i : e;
  }
  function ep() {
    var e = O.A;
    return O.A = i0, e;
  }
  function Ss() {
    Pe = 4, $n || (Me & 4194048) !== Me && Wt.current !== null || (ca = !0), (Wn & 134217727) === 0 && (Cl & 134217727) === 0 || Xe === null || nl(
      Xe,
      Me,
      en,
      !1
    );
  }
  function Es(e, t, l) {
    var r = He;
    He |= 2;
    var o = Wh(), c = ep();
    (Xe !== e || Me !== t) && (qi = null, pa(e, t)), t = !1;
    var y = Pe;
    e: do
      try {
        if (qe !== 0 && Oe !== null) {
          var v = Oe, T = Vt;
          switch (qe) {
            case 8:
              xs(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Wt.current === null && (t = !0);
              var z = qe;
              if (qe = 0, Vt = null, ma(e, v, T, z), l && ca) {
                y = 0;
                break e;
              }
              break;
            default:
              z = qe, qe = 0, Vt = null, ma(e, v, T, z);
          }
        }
        s0(), y = Pe;
        break;
      } catch (q) {
        $h(e, q);
      }
    while (!0);
    return t && e.shellSuspendCounter++, _n = Sl = null, He = r, O.H = o, O.A = c, Oe === null && (Xe = null, Me = 0, si()), y;
  }
  function s0() {
    for (; Oe !== null; ) tp(Oe);
  }
  function c0(e, t) {
    var l = He;
    He |= 2;
    var r = Wh(), o = ep();
    Xe !== e || Me !== t ? (qi = null, Hi = Dt() + 500, pa(e, t)) : ca = Kt(
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
              qe = 0, Vt = null, ma(e, t, c, 1);
              break;
            case 2:
            case 9:
              if (hd(c)) {
                qe = 0, Vt = null, np(t);
                break;
              }
              t = function() {
                qe !== 2 && qe !== 9 || Xe !== e || (qe = 7), mn(e);
              }, c.then(t, t);
              break e;
            case 3:
              qe = 7;
              break e;
            case 4:
              qe = 5;
              break e;
            case 7:
              hd(c) ? (qe = 0, Vt = null, np(t)) : (qe = 0, Vt = null, ma(e, t, c, 7));
              break;
            case 5:
              var y = null;
              switch (Oe.tag) {
                case 26:
                  y = Oe.memoizedState;
                case 5:
                case 27:
                  var v = Oe;
                  if (!y || Lp(y)) {
                    qe = 0, Vt = null;
                    var T = v.sibling;
                    if (T !== null) Oe = T;
                    else {
                      var z = v.return;
                      z !== null ? (Oe = z, Yi(z)) : Oe = null;
                    }
                    break t;
                  }
              }
              qe = 0, Vt = null, ma(e, t, c, 5);
              break;
            case 6:
              qe = 0, Vt = null, ma(e, t, c, 6);
              break;
            case 8:
              xs(), Pe = 6;
              break e;
            default:
              throw Error(u(462));
          }
        }
        f0();
        break;
      } catch (q) {
        $h(e, q);
      }
    while (!0);
    return _n = Sl = null, O.H = r, O.A = o, He = l, Oe !== null ? 0 : (Xe = null, Me = 0, si(), Pe);
  }
  function f0() {
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
        Lo(t);
      default:
        Oh(l, t), t = Oe = ld(t, Bn), t = _h(l, t, Bn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Yi(e) : Oe = t;
  }
  function ma(e, t, l, r) {
    _n = Sl = null, Lo(t), ia = null, sr = 0;
    var o = t.return;
    try {
      if (e0(
        e,
        o,
        t,
        l,
        Me
      )) {
        Pe = 1, Mi(
          e,
          It(l, e.current)
        ), Oe = null;
        return;
      }
    } catch (c) {
      if (o !== null) throw Oe = o, c;
      Pe = 1, Mi(
        e,
        It(l, e.current)
      ), Oe = null;
      return;
    }
    t.flags & 32768 ? (Ue || r === 1 ? e = !0 : ca || (Me & 536870912) !== 0 ? e = !1 : ($n = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Wt.current, r !== null && r.tag === 13 && (r.flags |= 16384))), lp(t, e)) : Yi(t);
  }
  function Yi(e) {
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
      var l = n0(
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
      var l = l0(e.alternate, e);
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
  function ap(e, t, l, r, o, c, y, v, T) {
    e.cancelPendingCommit = null;
    do
      Gi();
    while (ht !== 0);
    if ((He & 6) !== 0) throw Error(u(327));
    if (t !== null) {
      if (t === e.current) throw Error(u(177));
      if (c = t.lanes | t.childLanes, c |= fo, Gy(
        e,
        l,
        c,
        y,
        v,
        T
      ), e === Xe && (Oe = Xe = null, Me = 0), da = t, tl = e, ha = l, ys = c, bs = o, Fh = r, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, m0(Ul, function() {
        return sp(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), r = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || r) {
        r = O.T, O.T = null, o = Y.p, Y.p = 2, y = He, He |= 4;
        try {
          a0(e, t, l);
        } finally {
          He = y, Y.p = o, O.T = r;
        }
      }
      ht = 1, rp(), ip(), up();
    }
  }
  function rp() {
    if (ht === 1) {
      ht = 0;
      var e = tl, t = da, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = O.T, O.T = null;
        var r = Y.p;
        Y.p = 2;
        var o = He;
        He |= 4;
        try {
          Vh(t, e);
          var c = Ds, y = Zf(e.containerInfo), v = c.focusedElem, T = c.selectionRange;
          if (y !== v && v && v.ownerDocument && Kf(
            v.ownerDocument.documentElement,
            v
          )) {
            if (T !== null && io(v)) {
              var z = T.start, q = T.end;
              if (q === void 0 && (q = z), "selectionStart" in v)
                v.selectionStart = z, v.selectionEnd = Math.min(
                  q,
                  v.value.length
                );
              else {
                var Q = v.ownerDocument || document, N = Q && Q.defaultView || window;
                if (N.getSelection) {
                  var M = N.getSelection(), ve = v.textContent.length, me = Math.min(T.start, ve), Ge = T.end === void 0 ? me : Math.min(T.end, ve);
                  !M.extend && me > Ge && (y = Ge, Ge = me, me = y);
                  var k = Xf(
                    v,
                    me
                  ), A = Xf(
                    v,
                    Ge
                  );
                  if (k && A && (M.rangeCount !== 1 || M.anchorNode !== k.node || M.anchorOffset !== k.offset || M.focusNode !== A.node || M.focusOffset !== A.offset)) {
                    var _ = Q.createRange();
                    _.setStart(k.node, k.offset), M.removeAllRanges(), me > Ge ? (M.addRange(_), M.extend(A.node, A.offset)) : (_.setEnd(A.node, A.offset), M.addRange(_));
                  }
                }
              }
            }
            for (Q = [], M = v; M = M.parentNode; )
              M.nodeType === 1 && Q.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < Q.length; v++) {
              var G = Q[v];
              G.element.scrollLeft = G.left, G.element.scrollTop = G.top;
            }
          }
          tu = !!Ms, Ds = Ms = null;
        } finally {
          He = o, Y.p = r, O.T = l;
        }
      }
      e.current = t, ht = 2;
    }
  }
  function ip() {
    if (ht === 2) {
      ht = 0;
      var e = tl, t = da, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = O.T, O.T = null;
        var r = Y.p;
        Y.p = 2;
        var o = He;
        He |= 4;
        try {
          Lh(e, t.alternate, t);
        } finally {
          He = o, Y.p = r, O.T = l;
        }
      }
      ht = 3;
    }
  }
  function up() {
    if (ht === 4 || ht === 3) {
      ht = 0, Jr();
      var e = tl, t = da, l = ha, r = Fh;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ht = 5 : (ht = 0, da = tl = null, op(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (o === 0 && (el = null), Hu(l), t = t.stateNode, F && typeof F.onCommitFiberRoot == "function")
        try {
          F.onCommitFiberRoot(
            H,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (r !== null) {
        t = O.T, o = Y.p, Y.p = 2, O.T = null;
        try {
          for (var c = e.onRecoverableError, y = 0; y < r.length; y++) {
            var v = r[y];
            c(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          O.T = t, Y.p = o;
        }
      }
      (ha & 3) !== 0 && Gi(), mn(e), o = e.pendingLanes, (l & 4194090) !== 0 && (o & 42) !== 0 ? e === vs ? br++ : (br = 0, vs = e) : br = 0, vr(0);
    }
  }
  function op(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, $a(t)));
  }
  function Gi(e) {
    return rp(), ip(), up(), sp();
  }
  function sp() {
    if (ht !== 5) return !1;
    var e = tl, t = ys;
    ys = 0;
    var l = Hu(ha), r = O.T, o = Y.p;
    try {
      Y.p = 32 > l ? 32 : l, O.T = null, l = bs, bs = null;
      var c = tl, y = ha;
      if (ht = 0, da = tl = null, ha = 0, (He & 6) !== 0) throw Error(u(331));
      var v = He;
      if (He |= 4, Kh(c.current), Gh(
        c,
        c.current,
        y,
        l
      ), He = v, vr(0, !1), F && typeof F.onPostCommitFiberRoot == "function")
        try {
          F.onPostCommitFiberRoot(H, c);
        } catch {
        }
      return !0;
    } finally {
      Y.p = o, O.T = r, op(e, t);
    }
  }
  function cp(e, t, l) {
    t = It(l, t), t = Po(e.stateNode, t, 2), e = Xn(e, t, 2), e !== null && (Ba(e, 2), mn(e));
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
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (el === null || !el.has(r))) {
            e = It(l, e), l = ph(2), r = Xn(t, l, 2), r !== null && (mh(
              l,
              r,
              t,
              e
            ), Ba(r, 2), mn(r));
            break;
          }
        }
        t = t.return;
      }
  }
  function ws(e, t, l) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new u0();
      var o = /* @__PURE__ */ new Set();
      r.set(t, o);
    } else
      o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
    o.has(l) || (hs = !0, o.add(l), e = d0.bind(null, e, t, l), t.then(e, e));
  }
  function d0(e, t, l) {
    var r = e.pingCache;
    r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Xe === e && (Me & l) === l && (Pe === 4 || Pe === 3 && (Me & 62914560) === Me && 300 > Dt() - gs ? (He & 2) === 0 && pa(e, 0) : ps |= l, fa === Me && (fa = 0)), mn(e);
  }
  function fp(e, t) {
    t === 0 && (t = uf()), e = Jl(e, t), e !== null && (Ba(e, t), mn(e));
  }
  function h0(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), fp(e, l);
  }
  function p0(e, t) {
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
  function m0(e, t) {
    return Na(e, t);
  }
  var Qi = null, ga = null, Ts = !1, Xi = !1, As = !1, _l = 0;
  function mn(e) {
    e !== ga && e.next === null && (ga === null ? Qi = ga = e : ga = ga.next = e), Xi = !0, Ts || (Ts = !0, y0());
  }
  function vr(e, t) {
    if (!As && Xi) {
      As = !0;
      do
        for (var l = !1, r = Qi; r !== null; ) {
          if (e !== 0) {
            var o = r.pendingLanes;
            if (o === 0) var c = 0;
            else {
              var y = r.suspendedLanes, v = r.pingedLanes;
              c = (1 << 31 - be(42 | e) + 1) - 1, c &= o & ~(y & ~v), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (l = !0, mp(r, c));
          } else
            c = Me, c = ut(
              r,
              r === Xe ? c : 0,
              r.cancelPendingCommit !== null || r.timeoutHandle !== -1
            ), (c & 3) === 0 || Kt(r, c) || (l = !0, mp(r, c));
          r = r.next;
        }
      while (l);
      As = !1;
    }
  }
  function g0() {
    dp();
  }
  function dp() {
    Xi = Ts = !1;
    var e = 0;
    _l !== 0 && (A0() && (e = _l), _l = 0);
    for (var t = Dt(), l = null, r = Qi; r !== null; ) {
      var o = r.next, c = hp(r, t);
      c === 0 ? (r.next = null, l === null ? Qi = o : l.next = o, o === null && (ga = l)) : (l = r, (e !== 0 || (c & 3) !== 0) && (Xi = !0)), r = o;
    }
    vr(e);
  }
  function hp(e, t) {
    for (var l = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var y = 31 - be(c), v = 1 << y, T = o[y];
      T === -1 ? ((v & l) === 0 || (v & r) !== 0) && (o[y] = ln(v, t)) : T <= t && (e.expiredLanes |= v), c &= ~v;
    }
    if (t = Xe, l = Me, l = ut(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), r = e.callbackNode, l === 0 || e === t && (qe === 2 || qe === 9) || e.cancelPendingCommit !== null)
      return r !== null && r !== null && Ma(r), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || Kt(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (r !== null && Ma(r), Hu(l)) {
        case 2:
        case 8:
          l = Ua;
          break;
        case 32:
          l = Ul;
          break;
        case 268435456:
          l = Pr;
          break;
        default:
          l = Ul;
      }
      return r = pp.bind(null, e), l = Na(l, r), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return r !== null && r !== null && Ma(r), e.callbackPriority = 2, e.callbackNode = null, 2;
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
    ), r === 0 ? null : (Jh(e, r, t), hp(e, Dt()), e.callbackNode != null && e.callbackNode === l ? pp.bind(null, e) : null);
  }
  function mp(e, t) {
    if (Gi()) return null;
    Jh(e, t, !0);
  }
  function y0() {
    C0(function() {
      (He & 6) !== 0 ? Na(
        Da,
        g0
      ) : dp();
    });
  }
  function ks() {
    return _l === 0 && (_l = rf()), _l;
  }
  function gp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ni("" + e);
  }
  function yp(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function b0(e, t, l, r, o) {
    if (t === "submit" && l && l.stateNode === o) {
      var c = gp(
        (o[wt] || null).action
      ), y = r.submitter;
      y && (t = (t = y[wt] || null) ? gp(t.formAction) : y.getAttribute("formAction"), t !== null && (c = t, y = null));
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
                if (_l !== 0) {
                  var T = y ? yp(o, y) : new FormData(o);
                  Ko(
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
                typeof c == "function" && (v.preventDefault(), T = y ? yp(o, y) : new FormData(o), Ko(
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
    var _s = co[Cs], v0 = _s.toLowerCase(), x0 = _s[0].toUpperCase() + _s.slice(1);
    an(
      v0,
      "on" + x0
    );
  }
  an(Jf, "onAnimationEnd"), an(Pf, "onAnimationIteration"), an($f, "onAnimationStart"), an("dblclick", "onDoubleClick"), an("focusin", "onFocus"), an("focusout", "onBlur"), an(Lb, "onTransitionRun"), an(jb, "onTransitionStart"), an(Hb, "onTransitionCancel"), an(Wf, "onTransitionEnd"), ql("onMouseEnter", ["mouseout", "mouseover"]), ql("onMouseLeave", ["mouseout", "mouseover"]), ql("onPointerEnter", ["pointerout", "pointerover"]), ql("onPointerLeave", ["pointerout", "pointerover"]), dl(
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
  var xr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), S0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xr)
  );
  function bp(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var r = e[l], o = r.event;
      r = r.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var y = r.length - 1; 0 <= y; y--) {
            var v = r[y], T = v.instance, z = v.currentTarget;
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
          for (y = 0; y < r.length; y++) {
            if (v = r[y], T = v.instance, z = v.currentTarget, v = v.listener, T !== c && o.isPropagationStopped())
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
    var l = t[qu];
    l === void 0 && (l = t[qu] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    l.has(r) || (vp(t, e, 2, !1), l.add(r));
  }
  function Rs(e, t, l) {
    var r = 0;
    t && (r |= 4), vp(
      l,
      e,
      r,
      t
    );
  }
  var Ki = "_reactListening" + Math.random().toString(36).slice(2);
  function Os(e) {
    if (!e[Ki]) {
      e[Ki] = !0, df.forEach(function(l) {
        l !== "selectionchange" && (S0.has(l) || Rs(l, !1, e), Rs(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ki] || (t[Ki] = !0, Rs("selectionchange", !1, t));
    }
  }
  function vp(e, t, l, r) {
    switch (Gp(t)) {
      case 2:
        var o = F0;
        break;
      case 8:
        o = I0;
        break;
      default:
        o = Qs;
    }
    l = o.bind(
      null,
      t,
      l,
      e
    ), o = void 0, !Pu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: o
    }) : e.addEventListener(t, l, !0) : o !== void 0 ? e.addEventListener(t, l, {
      passive: o
    }) : e.addEventListener(t, l, !1);
  }
  function zs(e, t, l, r, o) {
    var c = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (; ; ) {
        if (r === null) return;
        var y = r.tag;
        if (y === 3 || y === 4) {
          var v = r.stateNode.containerInfo;
          if (v === o) break;
          if (y === 4)
            for (y = r.return; y !== null; ) {
              var T = y.tag;
              if ((T === 3 || T === 4) && y.stateNode.containerInfo === o)
                return;
              y = y.return;
            }
          for (; v !== null; ) {
            if (y = Ll(v), y === null) return;
            if (T = y.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              r = c = y;
              continue e;
            }
            v = v.parentNode;
          }
        }
        r = r.return;
      }
    kf(function() {
      var z = c, q = Iu(l), Q = [];
      e: {
        var N = ed.get(e);
        if (N !== void 0) {
          var M = ii, ve = e;
          switch (e) {
            case "keypress":
              if (ai(l) === 0) break e;
            case "keydown":
            case "keyup":
              M = mb;
              break;
            case "focusin":
              ve = "focus", M = to;
              break;
            case "focusout":
              ve = "blur", M = to;
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
              M = lb;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = bb;
              break;
            case Jf:
            case Pf:
            case $f:
              M = ib;
              break;
            case Wf:
              M = xb;
              break;
            case "scroll":
            case "scrollend":
              M = tb;
              break;
            case "wheel":
              M = Eb;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = ob;
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
              M = Tb;
          }
          var me = (t & 4) !== 0, Ge = !me && (e === "scroll" || e === "scrollend"), k = me ? N !== null ? N + "Capture" : null : N;
          me = [];
          for (var A = z, _; A !== null; ) {
            var G = A;
            if (_ = G.stateNode, G = G.tag, G !== 5 && G !== 26 && G !== 27 || _ === null || k === null || (G = Ha(A, k), G != null && me.push(
              Sr(A, G, _)
            )), Ge) break;
            A = A.return;
          }
          0 < me.length && (N = new M(
            N,
            ve,
            null,
            l,
            q
          ), Q.push({ event: N, listeners: me }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (N = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", N && l !== Fu && (ve = l.relatedTarget || l.fromElement) && (Ll(ve) || ve[Bl]))
            break e;
          if ((M || N) && (N = q.window === q ? q : (N = q.ownerDocument) ? N.defaultView || N.parentWindow : window, M ? (ve = l.relatedTarget || l.toElement, M = z, ve = ve ? Ll(ve) : null, ve !== null && (Ge = f(ve), me = ve.tag, ve !== Ge || me !== 5 && me !== 27 && me !== 6) && (ve = null)) : (M = null, ve = z), M !== ve)) {
            if (me = Rf, G = "onMouseLeave", k = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (me = zf, G = "onPointerLeave", k = "onPointerEnter", A = "pointer"), Ge = M == null ? N : ja(M), _ = ve == null ? N : ja(ve), N = new me(
              G,
              A + "leave",
              M,
              l,
              q
            ), N.target = Ge, N.relatedTarget = _, G = null, Ll(q) === z && (me = new me(
              k,
              A + "enter",
              ve,
              l,
              q
            ), me.target = _, me.relatedTarget = Ge, G = me), Ge = G, M && ve)
              t: {
                for (me = M, k = ve, A = 0, _ = me; _; _ = ya(_))
                  A++;
                for (_ = 0, G = k; G; G = ya(G))
                  _++;
                for (; 0 < A - _; )
                  me = ya(me), A--;
                for (; 0 < _ - A; )
                  k = ya(k), _--;
                for (; A--; ) {
                  if (me === k || k !== null && me === k.alternate)
                    break t;
                  me = ya(me), k = ya(k);
                }
                me = null;
              }
            else me = null;
            M !== null && xp(
              Q,
              N,
              M,
              me,
              !1
            ), ve !== null && Ge !== null && xp(
              Q,
              Ge,
              ve,
              me,
              !0
            );
          }
        }
        e: {
          if (N = z ? ja(z) : window, M = N.nodeName && N.nodeName.toLowerCase(), M === "select" || M === "input" && N.type === "file")
            var ue = Hf;
          else if (Lf(N))
            if (qf)
              ue = Db;
            else {
              ue = Nb;
              var Re = zb;
            }
          else
            M = N.nodeName, !M || M.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? z && Zu(z.elementType) && (ue = Hf) : ue = Mb;
          if (ue && (ue = ue(e, z))) {
            jf(
              Q,
              ue,
              l,
              q
            );
            break e;
          }
          Re && Re(e, N, z), e === "focusout" && z && N.type === "number" && z.memoizedProps.value != null && Ku(N, "number", N.value);
        }
        switch (Re = z ? ja(z) : window, e) {
          case "focusin":
            (Lf(Re) || Re.contentEditable === "true") && (Zl = Re, uo = z, Za = null);
            break;
          case "focusout":
            Za = uo = Zl = null;
            break;
          case "mousedown":
            oo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            oo = !1, Ff(Q, l, q);
            break;
          case "selectionchange":
            if (Bb) break;
          case "keydown":
          case "keyup":
            Ff(Q, l, q);
        }
        var de;
        if (lo)
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
          Kl ? Uf(e, l) && (ye = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ye = "onCompositionStart");
        ye && (Nf && l.locale !== "ko" && (Kl || ye !== "onCompositionStart" ? ye === "onCompositionEnd" && Kl && (de = Cf()) : (Vn = q, $u = "value" in Vn ? Vn.value : Vn.textContent, Kl = !0)), Re = Zi(z, ye), 0 < Re.length && (ye = new Of(
          ye,
          e,
          null,
          l,
          q
        ), Q.push({ event: ye, listeners: Re }), de ? ye.data = de : (de = Bf(l), de !== null && (ye.data = de)))), (de = kb ? Cb(e, l) : _b(e, l)) && (ye = Zi(z, "onBeforeInput"), 0 < ye.length && (Re = new Of(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          q
        ), Q.push({
          event: Re,
          listeners: ye
        }), Re.data = de)), b0(
          Q,
          e,
          z,
          l,
          q
        );
      }
      bp(Q, t);
    });
  }
  function Sr(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function Zi(e, t) {
    for (var l = t + "Capture", r = []; e !== null; ) {
      var o = e, c = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || c === null || (o = Ha(e, l), o != null && r.unshift(
        Sr(e, o, c)
      ), o = Ha(e, t), o != null && r.push(
        Sr(e, o, c)
      )), e.tag === 3) return r;
      e = e.return;
    }
    return [];
  }
  function ya(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function xp(e, t, l, r, o) {
    for (var c = t._reactName, y = []; l !== null && l !== r; ) {
      var v = l, T = v.alternate, z = v.stateNode;
      if (v = v.tag, T !== null && T === r) break;
      v !== 5 && v !== 26 && v !== 27 || z === null || (T = z, o ? (z = Ha(l, c), z != null && y.unshift(
        Sr(l, z, T)
      )) : o || (z = Ha(l, c), z != null && y.push(
        Sr(l, z, T)
      ))), l = l.return;
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var E0 = /\r\n?/g, w0 = /\u0000|\uFFFD/g;
  function Sp(e) {
    return (typeof e == "string" ? e : "" + e).replace(E0, `
`).replace(w0, "");
  }
  function Ep(e, t) {
    return t = Sp(t), Sp(e) === t;
  }
  function Fi() {
  }
  function Ye(e, t, l, r, o, c) {
    switch (l) {
      case "children":
        typeof r == "string" ? t === "body" || t === "textarea" && r === "" || Gl(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && Gl(e, "" + r);
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
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Wy.get(l) || l, $r(e, l, r));
    }
  }
  function Ns(e, t, l, r, o, c) {
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
        typeof r == "string" ? Gl(e, r) : (typeof r == "number" || typeof r == "bigint") && Gl(e, "" + r);
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
            var y = l[c];
            if (y != null)
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
                  Ye(e, t, c, y, l, null);
              }
          }
        o && Ye(e, t, "srcSet", l.srcSet, l, null), r && Ye(e, t, "src", l.src, l, null);
        return;
      case "input":
        ze("invalid", e);
        var v = c = y = o = null, T = null, z = null;
        for (r in l)
          if (l.hasOwnProperty(r)) {
            var q = l[r];
            if (q != null)
              switch (r) {
                case "name":
                  o = q;
                  break;
                case "type":
                  y = q;
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
          y,
          o,
          !1
        ), ei(e);
        return;
      case "select":
        ze("invalid", e), r = y = c = null;
        for (o in l)
          if (l.hasOwnProperty(o) && (v = l[o], v != null))
            switch (o) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                y = v;
                break;
              case "multiple":
                r = v;
              default:
                Ye(e, t, o, v, l, null);
            }
        t = c, l = y, e.multiple = !!r, t != null ? Yl(e, !!r, t, !1) : l != null && Yl(e, !!r, l, !0);
        return;
      case "textarea":
        ze("invalid", e), c = o = r = null;
        for (y in l)
          if (l.hasOwnProperty(y) && (v = l[y], v != null))
            switch (y) {
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
                Ye(e, t, y, v, l, null);
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
        for (r = 0; r < xr.length; r++)
          ze(xr[r], e);
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
        if (Zu(t)) {
          for (q in l)
            l.hasOwnProperty(q) && (r = l[q], r !== void 0 && Ns(
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
  function T0(e, t, l, r) {
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
        var o = null, c = null, y = null, v = null, T = null, z = null, q = null;
        for (M in l) {
          var Q = l[M];
          if (l.hasOwnProperty(M) && Q != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = Q;
              default:
                r.hasOwnProperty(M) || Ye(e, t, M, null, r, Q);
            }
        }
        for (var N in r) {
          var M = r[N];
          if (Q = l[N], r.hasOwnProperty(N) && (M != null || Q != null))
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
                y = M;
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
                M !== Q && Ye(
                  e,
                  t,
                  N,
                  M,
                  r,
                  Q
                );
            }
        }
        Xu(
          e,
          y,
          v,
          T,
          z,
          q,
          c,
          o
        );
        return;
      case "select":
        M = y = v = N = null;
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
                y = c;
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
        t = v, l = y, r = M, N != null ? Yl(e, !!l, N, !1) : !!r != !!l && (t != null ? Yl(e, !!l, t, !0) : Yl(e, !!l, l ? [] : "", !1));
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
        for (y in r)
          if (o = r[y], c = l[y], r.hasOwnProperty(y) && (o != null || c != null))
            switch (y) {
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
                o !== c && Ye(e, t, y, o, r, c);
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
        for (var me in l)
          N = l[me], l.hasOwnProperty(me) && N != null && !r.hasOwnProperty(me) && Ye(e, t, me, null, r, N);
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
        if (Zu(t)) {
          for (var Ge in l)
            N = l[Ge], l.hasOwnProperty(Ge) && N !== void 0 && !r.hasOwnProperty(Ge) && Ns(
              e,
              t,
              Ge,
              void 0,
              r,
              N
            );
          for (q in r)
            N = r[q], M = l[q], !r.hasOwnProperty(q) || N === M || N === void 0 && M === void 0 || Ns(
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
    for (var k in l)
      N = l[k], l.hasOwnProperty(k) && N != null && !r.hasOwnProperty(k) && Ye(e, t, k, null, r, N);
    for (Q in r)
      N = r[Q], M = l[Q], !r.hasOwnProperty(Q) || N === M || N == null && M == null || Ye(e, t, Q, N, r, M);
  }
  var Ms = null, Ds = null;
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
  function Us(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Bs = null;
  function A0() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Bs ? !1 : (Bs = e, !0) : (Bs = null, !1);
  }
  var Ap = typeof setTimeout == "function" ? setTimeout : void 0, k0 = typeof clearTimeout == "function" ? clearTimeout : void 0, kp = typeof Promise == "function" ? Promise : void 0, C0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof kp < "u" ? function(e) {
    return kp.resolve(null).then(e).catch(_0);
  } : Ap;
  function _0(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ll(e) {
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
            var y = e.ownerDocument;
            if (l & 1 && Er(y.documentElement), l & 2 && Er(y.body), l & 4)
              for (l = y.head, Er(l), y = l.firstChild; y; ) {
                var v = y.nextSibling, T = y.nodeName;
                y[La] || T === "SCRIPT" || T === "STYLE" || T === "LINK" && y.rel.toLowerCase() === "stylesheet" || l.removeChild(y), y = v;
              }
          }
          if (o === 0) {
            e.removeChild(c), Or(t);
            return;
          }
          o--;
        } else
          l === "$" || l === "$?" || l === "$!" ? o++ : r = l.charCodeAt(0) - 48;
      else r = 0;
      l = c;
    } while (l);
    Or(t);
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
  function R0(e, t, l, r) {
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
      if (e = un(e.nextSibling), e === null) break;
    }
    return null;
  }
  function O0(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = un(e.nextSibling), e === null)) return null;
    return e;
  }
  function js(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function z0(e, t) {
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
  function Er(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Vu(e);
  }
  var tn = /* @__PURE__ */ new Map(), Op = /* @__PURE__ */ new Set();
  function Ji(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Ln = Y.d;
  Y.d = {
    f: N0,
    r: M0,
    D: D0,
    C: U0,
    L: B0,
    m: L0,
    X: H0,
    S: j0,
    M: q0
  };
  function N0() {
    var e = Ln.f(), t = Vi();
    return e || t;
  }
  function M0(e) {
    var t = jl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Jd(t) : Ln.r(e);
  }
  var ba = typeof document > "u" ? null : document;
  function zp(e, t, l) {
    var r = ba;
    if (r && typeof t == "string" && t) {
      var o = Ft(t);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof l == "string" && (o += '[crossorigin="' + l + '"]'), Op.has(o) || (Op.add(o), e = { rel: e, crossOrigin: l, href: t }, r.querySelector(o) === null && (t = r.createElement("link"), pt(t, "link", e), ot(t), r.head.appendChild(t)));
    }
  }
  function D0(e) {
    Ln.D(e), zp("dns-prefetch", e, null);
  }
  function U0(e, t) {
    Ln.C(e, t), zp("preconnect", e, t);
  }
  function B0(e, t, l) {
    Ln.L(e, t, l);
    var r = ba;
    if (r && e && t) {
      var o = 'link[rel="preload"][as="' + Ft(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (o += '[imagesrcset="' + Ft(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (o += '[imagesizes="' + Ft(
        l.imageSizes
      ) + '"]')) : o += '[href="' + Ft(e) + '"]';
      var c = o;
      switch (t) {
        case "style":
          c = va(e);
          break;
        case "script":
          c = xa(e);
      }
      tn.has(c) || (e = m(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), tn.set(c, e), r.querySelector(o) !== null || t === "style" && r.querySelector(wr(c)) || t === "script" && r.querySelector(Tr(c)) || (t = r.createElement("link"), pt(t, "link", e), ot(t), r.head.appendChild(t)));
    }
  }
  function L0(e, t) {
    Ln.m(e, t);
    var l = ba;
    if (l && e) {
      var r = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Ft(r) + '"][href="' + Ft(e) + '"]', c = o;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = xa(e);
      }
      if (!tn.has(c) && (e = m({ rel: "modulepreload", href: e }, t), tn.set(c, e), l.querySelector(o) === null)) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Tr(c)))
              return;
        }
        r = l.createElement("link"), pt(r, "link", e), ot(r), l.head.appendChild(r);
      }
    }
  }
  function j0(e, t, l) {
    Ln.S(e, t, l);
    var r = ba;
    if (r && e) {
      var o = Hl(r).hoistableStyles, c = va(e);
      t = t || "default";
      var y = o.get(c);
      if (!y) {
        var v = { loading: 0, preload: null };
        if (y = r.querySelector(
          wr(c)
        ))
          v.loading = 5;
        else {
          e = m(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = tn.get(c)) && qs(e, l);
          var T = y = r.createElement("link");
          ot(T), pt(T, "link", e), T._p = new Promise(function(z, q) {
            T.onload = z, T.onerror = q;
          }), T.addEventListener("load", function() {
            v.loading |= 1;
          }), T.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, Pi(y, t, r);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: v
        }, o.set(c, y);
      }
    }
  }
  function H0(e, t) {
    Ln.X(e, t);
    var l = ba;
    if (l && e) {
      var r = Hl(l).hoistableScripts, o = xa(e), c = r.get(o);
      c || (c = l.querySelector(Tr(o)), c || (e = m({ src: e, async: !0 }, t), (t = tn.get(o)) && Vs(e, t), c = l.createElement("script"), ot(c), pt(c, "link", e), l.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, r.set(o, c));
    }
  }
  function q0(e, t) {
    Ln.M(e, t);
    var l = ba;
    if (l && e) {
      var r = Hl(l).hoistableScripts, o = xa(e), c = r.get(o);
      c || (c = l.querySelector(Tr(o)), c || (e = m({ src: e, async: !0, type: "module" }, t), (t = tn.get(o)) && Vs(e, t), c = l.createElement("script"), ot(c), pt(c, "link", e), l.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, r.set(o, c));
    }
  }
  function Np(e, t, l, r) {
    var o = (o = re.current) ? Ji(o) : null;
    if (!o) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = va(l.href), l = Hl(
          o
        ).hoistableStyles, r = l.get(t), r || (r = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, r)), r) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = va(l.href);
          var c = Hl(
            o
          ).hoistableStyles, y = c.get(e);
          if (y || (o = o.ownerDocument || o, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(e, y), (c = o.querySelector(
            wr(e)
          )) && !c._p && (y.instance = c, y.state.loading = 5), tn.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, tn.set(e, l), c || V0(
            o,
            e,
            l,
            y.state
          ))), t && r === null)
            throw Error(u(528, ""));
          return y;
        }
        if (t && r !== null)
          throw Error(u(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = xa(l), l = Hl(
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
  function va(e) {
    return 'href="' + Ft(e) + '"';
  }
  function wr(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Mp(e) {
    return m({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function V0(e, t, l, r) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? r.loading = 1 : (t = e.createElement("link"), r.preload = t, t.addEventListener("load", function() {
      return r.loading |= 1;
    }), t.addEventListener("error", function() {
      return r.loading |= 2;
    }), pt(t, "link", l), ot(t), e.head.appendChild(t));
  }
  function xa(e) {
    return '[src="' + Ft(e) + '"]';
  }
  function Tr(e) {
    return "script[async]" + e;
  }
  function Dp(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var r = e.querySelector(
            'style[data-href~="' + Ft(l.href) + '"]'
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
          o = va(l.href);
          var c = e.querySelector(
            wr(o)
          );
          if (c)
            return t.state.loading |= 4, t.instance = c, ot(c), c;
          r = Mp(l), (o = tn.get(o)) && qs(r, o), c = (e.ownerDocument || e).createElement("link"), ot(c);
          var y = c;
          return y._p = new Promise(function(v, T) {
            y.onload = v, y.onerror = T;
          }), pt(c, "link", r), t.state.loading |= 4, Pi(c, l.precedence, e), t.instance = c;
        case "script":
          return c = xa(l.src), (o = e.querySelector(
            Tr(c)
          )) ? (t.instance = o, ot(o), o) : (r = l, (o = tn.get(c)) && (r = m({}, l), Vs(r, o)), e = e.ownerDocument || e, o = e.createElement("script"), ot(o), pt(o, "link", r), e.head.appendChild(o), t.instance = o);
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
    ), o = r.length ? r[r.length - 1] : null, c = o, y = 0; y < r.length; y++) {
      var v = r[y];
      if (v.dataset.precedence === t) c = v;
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
        var y = c.getAttribute(t) || "";
        y = e + y;
        var v = r.get(y);
        v ? v.push(c) : r.set(y, [c]);
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
  function Y0(e, t, l) {
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
  var Ar = null;
  function G0() {
  }
  function Q0(e, t, l) {
    if (Ar === null) throw Error(u(475));
    var r = Ar;
    if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var o = va(l.href), c = e.querySelector(
          wr(o)
        );
        if (c) {
          e = c._p, e !== null && typeof e == "object" && typeof e.then == "function" && (r.count++, r = Wi.bind(r), e.then(r, r)), t.state.loading |= 4, t.instance = c, ot(c);
          return;
        }
        c = e.ownerDocument || e, l = Mp(l), (o = tn.get(o)) && qs(l, o), c = c.createElement("link"), ot(c);
        var y = c;
        y._p = new Promise(function(v, T) {
          y.onload = v, y.onerror = T;
        }), pt(c, "link", l), t.instance = c;
      }
      r.stylesheets === null && (r.stylesheets = /* @__PURE__ */ new Map()), r.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (r.count++, t = Wi.bind(r), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function X0() {
    if (Ar === null) throw Error(u(475));
    var e = Ar;
    return e.stylesheets && e.count === 0 && Ys(e, e.stylesheets), 0 < e.count ? function(t) {
      var l = setTimeout(function() {
        if (e.stylesheets && Ys(e, e.stylesheets), e.unsuspend) {
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
      if (this.stylesheets) Ys(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var eu = null;
  function Ys(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, eu = /* @__PURE__ */ new Map(), t.forEach(K0, e), eu = null, Wi.call(e));
  }
  function K0(e, t) {
    if (!(t.state.loading & 4)) {
      var l = eu.get(e);
      if (l) var r = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), eu.set(e, l);
        for (var o = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < o.length; c++) {
          var y = o[c];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (l.set(y.dataset.precedence, y), r = y);
        }
        r && l.set(null, r);
      }
      o = t.instance, y = o.getAttribute("data-precedence"), c = l.get(y) || r, c === r && l.set(null, o), l.set(y, o), this.count++, r = Wi.bind(this), o.addEventListener("load", r), o.addEventListener("error", r), c ? c.parentNode.insertBefore(o, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
    }
  }
  var kr = {
    $$typeof: K,
    Provider: null,
    Consumer: null,
    _currentValue: V,
    _currentValue2: V,
    _threadCount: 0
  };
  function Z0(e, t, l, r, o, c, y, v) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Lu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Lu(0), this.hiddenUpdates = Lu(null), this.identifierPrefix = r, this.onUncaughtError = o, this.onCaughtError = c, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function jp(e, t, l, r, o, c, y, v, T, z, q, Q) {
    return e = new Z0(
      e,
      t,
      l,
      y,
      v,
      T,
      z,
      Q
    ), t = 1, c === !0 && (t |= 24), c = jt(3, null, null, t), e.current = c, c.stateNode = e, t = wo(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
      element: r,
      isDehydrated: l,
      cache: t
    }, Co(c), e;
  }
  function Hp(e) {
    return e ? (e = Pl, e) : Pl;
  }
  function qp(e, t, l, r, o, c) {
    o = Hp(o), r.context === null ? r.context = o : r.pendingContext = o, r = Qn(t), r.payload = { element: l }, c = c === void 0 ? null : c, c !== null && (r.callback = c), l = Xn(e, r, t), l !== null && (Gt(l, e, t), nr(l, e, t));
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
      var t = Jl(e, 67108864);
      t !== null && Gt(t, e, 67108864), Gs(e, 67108864);
    }
  }
  var tu = !0;
  function F0(e, t, l, r) {
    var o = O.T;
    O.T = null;
    var c = Y.p;
    try {
      Y.p = 2, Qs(e, t, l, r);
    } finally {
      Y.p = c, O.T = o;
    }
  }
  function I0(e, t, l, r) {
    var o = O.T;
    O.T = null;
    var c = Y.p;
    try {
      Y.p = 8, Qs(e, t, l, r);
    } finally {
      Y.p = c, O.T = o;
    }
  }
  function Qs(e, t, l, r) {
    if (tu) {
      var o = Xs(r);
      if (o === null)
        zs(
          e,
          t,
          r,
          nu,
          l
        ), Qp(e, r);
      else if (P0(
        o,
        e,
        t,
        l,
        r
      ))
        r.stopPropagation();
      else if (Qp(e, r), t & 4 && -1 < J0.indexOf(e)) {
        for (; o !== null; ) {
          var c = jl(o);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var y = Bt(c.pendingLanes);
                  if (y !== 0) {
                    var v = c;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; y; ) {
                      var T = 1 << 31 - be(y);
                      v.entanglements[1] |= T, y &= ~T;
                    }
                    mn(c), (He & 6) === 0 && (Hi = Dt() + 500, vr(0));
                  }
                }
                break;
              case 13:
                v = Jl(c, 2), v !== null && Gt(v, c, 2), Vi(), Gs(c, 2);
            }
          if (c = Xs(r), c === null && zs(
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
        zs(
          e,
          t,
          r,
          null,
          l
        );
    }
  }
  function Xs(e) {
    return e = Iu(e), Ks(e);
  }
  var nu = null;
  function Ks(e) {
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
        switch (Mu()) {
          case Da:
            return 2;
          case Ua:
            return 8;
          case Ul:
          case Du:
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
  var Zs = !1, al = null, rl = null, il = null, Cr = /* @__PURE__ */ new Map(), _r = /* @__PURE__ */ new Map(), ul = [], J0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Qp(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        al = null;
        break;
      case "dragenter":
      case "dragleave":
        rl = null;
        break;
      case "mouseover":
      case "mouseout":
        il = null;
        break;
      case "pointerover":
      case "pointerout":
        Cr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _r.delete(t.pointerId);
    }
  }
  function Rr(e, t, l, r, o, c) {
    return e === null || e.nativeEvent !== c ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: r,
      nativeEvent: c,
      targetContainers: [o]
    }, t !== null && (t = jl(t), t !== null && Yp(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function P0(e, t, l, r, o) {
    switch (t) {
      case "focusin":
        return al = Rr(
          al,
          e,
          t,
          l,
          r,
          o
        ), !0;
      case "dragenter":
        return rl = Rr(
          rl,
          e,
          t,
          l,
          r,
          o
        ), !0;
      case "mouseover":
        return il = Rr(
          il,
          e,
          t,
          l,
          r,
          o
        ), !0;
      case "pointerover":
        var c = o.pointerId;
        return Cr.set(
          c,
          Rr(
            Cr.get(c) || null,
            e,
            t,
            l,
            r,
            o
          )
        ), !0;
      case "gotpointercapture":
        return c = o.pointerId, _r.set(
          c,
          Rr(
            _r.get(c) || null,
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
            e.blockedOn = t, Qy(e.priority, function() {
              if (l.tag === 13) {
                var r = Yt();
                r = ju(r);
                var o = Jl(l, r);
                o !== null && Gt(o, l, r), Gs(l, r);
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
      var l = Xs(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var r = new l.constructor(
          l.type,
          l
        );
        Fu = r, l.target.dispatchEvent(r), Fu = null;
      } else
        return t = jl(l), t !== null && Yp(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function Kp(e, t, l) {
    lu(e) && l.delete(t);
  }
  function $0() {
    Zs = !1, al !== null && lu(al) && (al = null), rl !== null && lu(rl) && (rl = null), il !== null && lu(il) && (il = null), Cr.forEach(Kp), _r.forEach(Kp);
  }
  function au(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Zs || (Zs = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      $0
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
            if (Ks(r || l) === null)
              continue;
            break;
          }
          var c = jl(l);
          c !== null && (e.splice(t, 3), t -= 3, Ko(
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
  function Or(e) {
    function t(T) {
      return au(T, e);
    }
    al !== null && au(al, e), rl !== null && au(rl, e), il !== null && au(il, e), Cr.forEach(t), _r.forEach(t);
    for (var l = 0; l < ul.length; l++) {
      var r = ul[l];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < ul.length && (l = ul[0], l.blockedOn === null); )
      Xp(l), l.blockedOn === null && ul.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (r = 0; r < l.length; r += 3) {
        var o = l[r], c = l[r + 1], y = o[wt] || null;
        if (typeof c == "function")
          y || Zp(l);
        else if (y) {
          var v = null;
          if (c && c.hasAttribute("formAction")) {
            if (o = c, y = c[wt] || null)
              v = y.formAction;
            else if (Ks(o) !== null) continue;
          } else v = y.action;
          typeof v == "function" ? l[r + 1] = v : (l.splice(r, 3), r -= 3), Zp(l);
        }
      }
  }
  function Fs(e) {
    this._internalRoot = e;
  }
  iu.prototype.render = Fs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    var l = t.current, r = Yt();
    qp(l, r, e, t, null, null);
  }, iu.prototype.unmount = Fs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      qp(e.current, 2, null, e, null, null), Vi(), t[Bl] = null;
    }
  };
  function iu(e) {
    this._internalRoot = e;
  }
  iu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = cf();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < ul.length && t !== 0 && t < ul[l].priority; l++) ;
      ul.splice(l, 0, e), l === 0 && Xp(e);
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
  Y.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = g(t), e = e !== null ? h(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var W0 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var uu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!uu.isDisabled && uu.supportsFiber)
      try {
        H = uu.inject(
          W0
        ), F = uu;
      } catch {
      }
  }
  return Nr.createRoot = function(e, t) {
    if (!s(e)) throw Error(u(299));
    var l = !1, r = "", o = ch, c = fh, y = dh, v = null;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (y = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (v = t.unstable_transitionCallbacks)), t = jp(
      e,
      1,
      !1,
      null,
      null,
      l,
      r,
      o,
      c,
      y,
      v,
      null
    ), e[Bl] = t.current, Os(e), new Fs(t);
  }, Nr.hydrateRoot = function(e, t, l) {
    if (!s(e)) throw Error(u(299));
    var r = !1, o = "", c = ch, y = fh, v = dh, T = null, z = null;
    return l != null && (l.unstable_strictMode === !0 && (r = !0), l.identifierPrefix !== void 0 && (o = l.identifierPrefix), l.onUncaughtError !== void 0 && (c = l.onUncaughtError), l.onCaughtError !== void 0 && (y = l.onCaughtError), l.onRecoverableError !== void 0 && (v = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (T = l.unstable_transitionCallbacks), l.formState !== void 0 && (z = l.formState)), t = jp(
      e,
      1,
      !0,
      t,
      l ?? null,
      r,
      o,
      c,
      y,
      v,
      T,
      z
    ), t.context = Hp(null), l = t.current, r = Yt(), r = ju(r), o = Qn(r), o.callback = null, Xn(l, o, r), l = r, t.current.lanes = l, Ba(t, l), mn(t), e[Bl] = t.current, Os(e), new iu(t);
  }, Nr.version = "19.1.0", Nr;
}
var am;
function s1() {
  if (am) return Ps.exports;
  am = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), Ps.exports = o1(), Ps.exports;
}
var c1 = s1();
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f1 = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), d1 = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, i, u) => u ? u.toUpperCase() : i.toLowerCase()
), rm = (n) => {
  const a = d1(n);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, gg = (...n) => n.filter((a, i, u) => !!a && a.trim() !== "" && u.indexOf(a) === i).join(" ").trim(), h1 = (n) => {
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
var p1 = {
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
const m1 = ge.forwardRef(
  ({
    color: n = "currentColor",
    size: a = 24,
    strokeWidth: i = 2,
    absoluteStrokeWidth: u,
    className: s = "",
    children: f,
    iconNode: d,
    ...p
  }, g) => ge.createElement(
    "svg",
    {
      ref: g,
      ...p1,
      width: a,
      height: a,
      stroke: n,
      strokeWidth: u ? Number(i) * 24 / Number(a) : i,
      className: gg("lucide", s),
      ...!f && !h1(p) && { "aria-hidden": "true" },
      ...p
    },
    [
      ...d.map(([h, m]) => ge.createElement(h, m)),
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
const Sn = (n, a) => {
  const i = ge.forwardRef(
    ({ className: u, ...s }, f) => ge.createElement(m1, {
      ref: f,
      iconNode: a,
      className: gg(
        `lucide-${f1(rm(n))}`,
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
const g1 = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], yg = Sn("bot", g1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y1 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], bg = Sn("chevron-down", y1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], v1 = Sn("globe", b1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x1 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], vg = Sn("loader-circle", x1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S1 = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
], im = Sn("message-circle", S1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E1 = [
  ["path", { d: "m14 10 7-7", key: "oa77jy" }],
  ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M4 14h6v6", key: "rmj7iw" }]
], w1 = Sn("minimize-2", E1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T1 = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], A1 = Sn("moon", T1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k1 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], C1 = Sn("send", k1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _1 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], R1 = Sn("sun", _1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O1 = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], z1 = Sn("user", O1);
function xg(n) {
  var a, i, u = "";
  if (typeof n == "string" || typeof n == "number") u += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var s = n.length;
    for (a = 0; a < s; a++) n[a] && (i = xg(n[a])) && (u && (u += " "), u += i);
  } else for (i in n) n[i] && (u && (u += " "), u += i);
  return u;
}
function Sg() {
  for (var n, a, i = 0, u = "", s = arguments.length; i < s; i++) (n = arguments[i]) && (a = xg(n)) && (u && (u += " "), u += a);
  return u;
}
const Vc = "-", N1 = (n) => {
  const a = D1(n), {
    conflictingClassGroups: i,
    conflictingClassGroupModifiers: u
  } = n;
  return {
    getClassGroupId: (d) => {
      const p = d.split(Vc);
      return p[0] === "" && p.length !== 1 && p.shift(), Eg(p, a) || M1(d);
    },
    getConflictingClassGroupIds: (d, p) => {
      const g = i[d] || [];
      return p && u[d] ? [...g, ...u[d]] : g;
    }
  };
}, Eg = (n, a) => {
  if (n.length === 0)
    return a.classGroupId;
  const i = n[0], u = a.nextPart.get(i), s = u ? Eg(n.slice(1), u) : void 0;
  if (s)
    return s;
  if (a.validators.length === 0)
    return;
  const f = n.join(Vc);
  return a.validators.find(({
    validator: d
  }) => d(f))?.classGroupId;
}, um = /^\[(.+)\]$/, M1 = (n) => {
  if (um.test(n)) {
    const a = um.exec(n)[1], i = a?.substring(0, a.indexOf(":"));
    if (i)
      return "arbitrary.." + i;
  }
}, D1 = (n) => {
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
      if (U1(s)) {
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
}, U1 = (n) => n.isThemeGetter, B1 = (n) => {
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
}, Sc = "!", Ec = ":", L1 = Ec.length, j1 = (n) => {
  const {
    prefix: a,
    experimentalParseClassName: i
  } = n;
  let u = (s) => {
    const f = [];
    let d = 0, p = 0, g = 0, h;
    for (let C = 0; C < s.length; C++) {
      let R = s[C];
      if (d === 0 && p === 0) {
        if (R === Ec) {
          f.push(s.slice(g, C)), g = C + L1;
          continue;
        }
        if (R === "/") {
          h = C;
          continue;
        }
      }
      R === "[" ? d++ : R === "]" ? d-- : R === "(" ? p++ : R === ")" && p--;
    }
    const m = f.length === 0 ? s : s.substring(g), x = H1(m), w = x !== m, S = h && h > g ? h - g : void 0;
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
}, H1 = (n) => n.endsWith(Sc) ? n.substring(0, n.length - 1) : n.startsWith(Sc) ? n.substring(1) : n, q1 = (n) => {
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
}, V1 = (n) => ({
  cache: B1(n.cacheSize),
  parseClassName: j1(n),
  sortModifiers: q1(n),
  ...N1(n)
}), Y1 = /\s+/, G1 = (n, a) => {
  const {
    parseClassName: i,
    getClassGroupId: u,
    getConflictingClassGroupIds: s,
    sortModifiers: f
  } = a, d = [], p = n.trim().split(Y1);
  let g = "";
  for (let h = p.length - 1; h >= 0; h -= 1) {
    const m = p[h], {
      isExternal: x,
      modifiers: w,
      hasImportantModifier: S,
      baseClassName: C,
      maybePostfixModifierPosition: R
    } = i(m);
    if (x) {
      g = m + (g.length > 0 ? " " + g : g);
      continue;
    }
    let B = !!R, U = u(B ? C.substring(0, R) : C);
    if (!U) {
      if (!B) {
        g = m + (g.length > 0 ? " " + g : g);
        continue;
      }
      if (U = u(C), !U) {
        g = m + (g.length > 0 ? " " + g : g);
        continue;
      }
      B = !1;
    }
    const J = f(w).join(":"), K = S ? J + Sc : J, ce = K + U;
    if (d.includes(ce))
      continue;
    d.push(ce);
    const $ = s(U, B);
    for (let L = 0; L < $.length; ++L) {
      const ie = $[L];
      d.push(K + ie);
    }
    g = m + (g.length > 0 ? " " + g : g);
  }
  return g;
};
function Q1() {
  let n = 0, a, i, u = "";
  for (; n < arguments.length; )
    (a = arguments[n++]) && (i = wg(a)) && (u && (u += " "), u += i);
  return u;
}
const wg = (n) => {
  if (typeof n == "string")
    return n;
  let a, i = "";
  for (let u = 0; u < n.length; u++)
    n[u] && (a = wg(n[u])) && (i && (i += " "), i += a);
  return i;
};
function X1(n, ...a) {
  let i, u, s, f = d;
  function d(g) {
    const h = a.reduce((m, x) => x(m), n());
    return i = V1(h), u = i.cache.get, s = i.cache.set, f = p, p(g);
  }
  function p(g) {
    const h = u(g);
    if (h)
      return h;
    const m = G1(g, i);
    return s(g, m), m;
  }
  return function() {
    return f(Q1.apply(null, arguments));
  };
}
const it = (n) => {
  const a = (i) => i[n] || [];
  return a.isThemeGetter = !0, a;
}, Tg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ag = /^\((?:(\w[\w-]*):)?(.+)\)$/i, K1 = /^\d+\/\d+$/, Z1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, F1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, I1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, J1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, P1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Sa = (n) => K1.test(n), Ce = (n) => !!n && !Number.isNaN(Number(n)), sl = (n) => !!n && Number.isInteger(Number(n)), tc = (n) => n.endsWith("%") && Ce(n.slice(0, -1)), jn = (n) => Z1.test(n), $1 = () => !0, W1 = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  F1.test(n) && !I1.test(n)
), kg = () => !1, ev = (n) => J1.test(n), tv = (n) => P1.test(n), nv = (n) => !oe(n) && !se(n), lv = (n) => ka(n, Rg, kg), oe = (n) => Tg.test(n), Rl = (n) => ka(n, Og, W1), nc = (n) => ka(n, ov, Ce), sm = (n) => ka(n, Cg, kg), av = (n) => ka(n, _g, tv), ou = (n) => ka(n, zg, ev), se = (n) => Ag.test(n), Mr = (n) => Ca(n, Og), rv = (n) => Ca(n, sv), cm = (n) => Ca(n, Cg), iv = (n) => Ca(n, Rg), uv = (n) => Ca(n, _g), su = (n) => Ca(n, zg, !0), ka = (n, a, i) => {
  const u = Tg.exec(n);
  return u ? u[1] ? a(u[1]) : i(u[2]) : !1;
}, Ca = (n, a, i = !1) => {
  const u = Ag.exec(n);
  return u ? u[1] ? a(u[1]) : i : !1;
}, Cg = (n) => n === "position" || n === "percentage", _g = (n) => n === "image" || n === "url", Rg = (n) => n === "length" || n === "size" || n === "bg-size", Og = (n) => n === "length", ov = (n) => n === "number", sv = (n) => n === "family-name", zg = (n) => n === "shadow", cv = () => {
  const n = it("color"), a = it("font"), i = it("text"), u = it("font-weight"), s = it("tracking"), f = it("leading"), d = it("breakpoint"), p = it("container"), g = it("spacing"), h = it("radius"), m = it("shadow"), x = it("inset-shadow"), w = it("text-shadow"), S = it("drop-shadow"), C = it("blur"), R = it("perspective"), B = it("aspect"), U = it("ease"), J = it("animate"), K = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ce = () => [
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
  ], $ = () => [...ce(), se, oe], L = () => ["auto", "hidden", "clip", "visible", "scroll"], ie = () => ["auto", "contain", "none"], P = () => [se, oe, g], fe = () => [Sa, "full", "auto", ...P()], Ee = () => [sl, "none", "subgrid", se, oe], le = () => ["auto", {
    span: ["full", sl, se, oe]
  }, sl, se, oe], ee = () => [sl, "auto", se, oe], ae = () => ["auto", "min", "max", "fr", se, oe], te = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], X = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], O = () => ["auto", ...P()], Y = () => [Sa, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...P()], V = () => [n, se, oe], pe = () => [...ce(), cm, sm, {
    position: [se, oe]
  }], b = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], j = () => ["auto", "cover", "contain", iv, lv, {
    size: [se, oe]
  }], W = () => [tc, Mr, Rl], E = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    se,
    oe
  ], ne = () => ["", Ce, Mr, Rl], Se = () => ["solid", "dashed", "dotted", "double"], re = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], _e = () => [Ce, tc, cm, sm], Ne = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    C,
    se,
    oe
  ], et = () => ["none", Ce, se, oe], xt = () => ["none", Ce, se, oe], Mt = () => [Ce, se, oe], sn = () => [Sa, "full", ...P()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [jn],
      breakpoint: [jn],
      color: [$1],
      container: [jn],
      "drop-shadow": [jn],
      ease: ["in", "out", "in-out"],
      font: [nv],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [jn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [jn],
      shadow: [jn],
      spacing: ["px", Ce],
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
        aspect: ["auto", "square", Sa, oe, se, B]
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
        columns: [Ce, oe, se, p]
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
        overscroll: ie()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ie()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ie()
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
        z: [sl, "auto", se, oe]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Sa, "full", "auto", p, ...P()]
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
        flex: [Ce, Sa, "auto", "initial", "none", oe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Ce, se, oe]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Ce, se, oe]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [sl, "first", "last", "none", se, oe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Ee()
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
        "col-start": ee()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ee()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": Ee()
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
        "row-start": ee()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ee()
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
        justify: [...te(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...X(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...X()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...te()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...X(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...X(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": te()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...X(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...X()]
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
        text: ["base", i, Mr, Rl]
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
        font: [u, se, nc]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", tc, oe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [rv, oe, a]
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
        tracking: [s, se, oe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Ce, "none", se, nc]
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
        "list-image": ["none", se, oe]
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
        list: ["disc", "decimal", "none", se, oe]
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
        placeholder: V()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: V()
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
        decoration: [Ce, "from-font", "auto", se, Rl]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: V()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Ce, "auto", se, oe]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", se, oe]
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
        content: ["none", se, oe]
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
        bg: pe()
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
          }, sl, se, oe],
          radial: ["", se, oe],
          conic: [sl, se, oe]
        }, uv, av]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: V()
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
        from: V()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: V()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: V()
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
        border: V()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": V()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": V()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": V()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": V()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": V()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": V()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": V()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": V()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: V()
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
        "outline-offset": [Ce, se, oe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Ce, Mr, Rl]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: V()
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
        shadow: V()
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
        "inset-shadow": V()
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
        ring: V()
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
        "ring-offset": V()
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
        "inset-ring": V()
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
        "text-shadow": V()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Ce, se, oe]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...re(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": re()
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
        "mask-linear-from": V()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": V()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": _e()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": _e()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": V()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": V()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": _e()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": _e()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": V()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": V()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": _e()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": _e()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": V()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": V()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": _e()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": _e()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": V()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": V()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": _e()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": _e()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": V()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": V()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": _e()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": _e()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": V()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": V()
      }],
      "mask-image-radial": [{
        "mask-radial": [se, oe]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": _e()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": _e()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": V()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": V()
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
        "mask-conic": [Ce]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": _e()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": _e()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": V()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": V()
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
        mask: pe()
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
        mask: ["none", se, oe]
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
          oe
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
        brightness: [Ce, se, oe]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Ce, se, oe]
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
        "drop-shadow": V()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Ce, se, oe]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Ce, se, oe]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Ce, se, oe]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Ce, se, oe]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Ce, se, oe]
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
          oe
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
        "backdrop-brightness": [Ce, se, oe]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Ce, se, oe]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Ce, se, oe]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Ce, se, oe]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Ce, se, oe]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Ce, se, oe]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Ce, se, oe]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Ce, se, oe]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", se, oe]
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
        duration: [Ce, "initial", se, oe]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", U, se, oe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Ce, se, oe]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", J, se, oe]
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
        perspective: [R, se, oe]
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
        transform: [se, oe, "", "none", "gpu", "cpu"]
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
        accent: V()
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
        caret: V()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", se, oe]
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
        "will-change": ["auto", "scroll", "contents", "transform", se, oe]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...V()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ce, Mr, Rl, nc]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...V()]
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
}, fv = /* @__PURE__ */ X1(cv);
function bn(...n) {
  return fv(Sg(n));
}
function Ng(n, a) {
  const i = n.replace("#", ""), u = parseInt(i.substr(0, 2), 16), s = parseInt(i.substr(2, 2), 16), f = parseInt(i.substr(4, 2), 16), d = (100 - a) / 100, p = Math.round(u * d), g = Math.round(s * d), h = Math.round(f * d);
  return "#" + (p < 16 ? "0" : "") + p.toString(16) + (g < 16 ? "0" : "") + g.toString(16) + (h < 16 ? "0" : "") + h.toString(16);
}
function dv(n, a) {
  const i = {};
  return (n[n.length - 1] === "" ? [...n, ""] : n).join(
    (i.padRight ? " " : "") + "," + (i.padLeft === !1 ? "" : " ")
  ).trim();
}
const hv = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, pv = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, mv = {};
function fm(n, a) {
  return (mv.jsx ? pv : hv).test(n);
}
const gv = /[ \t\n\f\r]/g;
function yv(n) {
  return typeof n == "object" ? n.type === "text" ? dm(n.value) : !1 : dm(n);
}
function dm(n) {
  return n.replace(gv, "") === "";
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
function Mg(n, a) {
  const i = {}, u = {};
  for (const s of n)
    Object.assign(i, s.property), Object.assign(u, s.normal);
  return new Xr(i, u, a);
}
function wc(n) {
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
  constructor(a, i) {
    this.attribute = i, this.property = a;
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
let bv = 0;
const Ae = Dl(), lt = Dl(), Tc = Dl(), I = Dl(), Ke = Dl(), Ta = Dl(), Qt = Dl();
function Dl() {
  return 2 ** ++bv;
}
const Ac = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: Ae,
  booleanish: lt,
  commaOrSpaceSeparated: Qt,
  commaSeparated: Ta,
  number: I,
  overloadedBoolean: Tc,
  spaceSeparated: Ke
}, Symbol.toStringTag, { value: "Module" })), lc = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Ac)
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
  constructor(a, i, u, s) {
    let f = -1;
    if (super(a, i), hm(this, "space", s), typeof u == "number")
      for (; ++f < lc.length; ) {
        const d = lc[f];
        hm(this, lc[f], (u & Ac[d]) === Ac[d]);
      }
  }
}
Yc.prototype.defined = !0;
function hm(n, a, i) {
  i && (n[a] = i);
}
function _a(n) {
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
const Dg = _a({
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
function Ug(n, a) {
  return a in n ? n[a] : a;
}
function Bg(n, a) {
  return Ug(n, a.toLowerCase());
}
const vv = _a({
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
    accept: Ta,
    acceptCharset: Ke,
    accessKey: Ke,
    action: null,
    allow: null,
    allowFullScreen: Ae,
    allowPaymentRequest: Ae,
    allowUserMedia: Ae,
    alt: null,
    as: null,
    async: Ae,
    autoCapitalize: null,
    autoComplete: Ke,
    autoFocus: Ae,
    autoPlay: Ae,
    blocking: Ke,
    capture: null,
    charSet: null,
    checked: Ae,
    cite: null,
    className: Ke,
    cols: I,
    colSpan: null,
    content: null,
    contentEditable: lt,
    controls: Ae,
    controlsList: Ke,
    coords: I | Ta,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: Ae,
    defer: Ae,
    dir: null,
    dirName: null,
    disabled: Ae,
    download: Tc,
    draggable: lt,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: Ae,
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
    inert: Ae,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: Ae,
    itemId: null,
    itemProp: Ke,
    itemRef: Ke,
    itemScope: Ae,
    itemType: Ke,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: Ae,
    low: I,
    manifest: null,
    max: null,
    maxLength: I,
    media: null,
    method: null,
    min: null,
    minLength: I,
    multiple: Ae,
    muted: Ae,
    name: null,
    nonce: null,
    noModule: Ae,
    noValidate: Ae,
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
    open: Ae,
    optimum: I,
    pattern: null,
    ping: Ke,
    placeholder: null,
    playsInline: Ae,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: Ae,
    referrerPolicy: null,
    rel: Ke,
    required: Ae,
    reversed: Ae,
    rows: I,
    rowSpan: I,
    sandbox: Ke,
    scope: null,
    scoped: Ae,
    seamless: Ae,
    selected: Ae,
    shadowRootClonable: Ae,
    shadowRootDelegatesFocus: Ae,
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
    typeMustMatch: Ae,
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
    compact: Ae,
    // Lists. Use CSS to reduce space between items instead
    declare: Ae,
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
    noResize: Ae,
    // `<frame>`
    noHref: Ae,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: Ae,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: Ae,
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
    disablePictureInPicture: Ae,
    disableRemotePlayback: Ae,
    prefix: null,
    property: null,
    results: I,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Bg
}), xv = _a({
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
    about: Qt,
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
    download: Ae,
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
    g1: Ta,
    g2: Ta,
    glyphName: Ta,
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
    kernelMatrix: Qt,
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
    property: Qt,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Qt,
    rev: Qt,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Qt,
    requiredFeatures: Qt,
    requiredFonts: Qt,
    requiredFormats: Qt,
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
    strokeDashArray: Qt,
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
    systemLanguage: Qt,
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
    typeOf: Qt,
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
  transform: Ug
}), Lg = _a({
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
}), jg = _a({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Bg
}), Hg = _a({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(n, a) {
    return "xml:" + a.slice(3).toLowerCase();
  }
}), Sv = {
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
}, Ev = /[A-Z]/g, pm = /-[a-z]/g, wv = /^data[-\w.:]+$/i;
function Tv(n, a) {
  const i = wc(a);
  let u = a, s = Nt;
  if (i in n.normal)
    return n.property[n.normal[i]];
  if (i.length > 4 && i.slice(0, 4) === "data" && wv.test(a)) {
    if (a.charAt(4) === "-") {
      const f = a.slice(5).replace(pm, kv);
      u = "data" + f.charAt(0).toUpperCase() + f.slice(1);
    } else {
      const f = a.slice(4);
      if (!pm.test(f)) {
        let d = f.replace(Ev, Av);
        d.charAt(0) !== "-" && (d = "-" + d), a = "data" + d;
      }
    }
    s = Yc;
  }
  return new s(u, a);
}
function Av(n) {
  return "-" + n.toLowerCase();
}
function kv(n) {
  return n.charAt(1).toUpperCase();
}
const Cv = Mg([Dg, vv, Lg, jg, Hg], "html"), Gc = Mg([Dg, xv, Lg, jg, Hg], "svg");
function _v(n) {
  return n.join(" ").trim();
}
var Ea = {}, ac, mm;
function Rv() {
  if (mm) return ac;
  mm = 1;
  var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, a = /\n/g, i = /^\s*/, u = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, s = /^:\s*/, f = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, d = /^[;\s]*/, p = /^\s+|\s+$/g, g = `
`, h = "/", m = "*", x = "", w = "comment", S = "declaration";
  ac = function(R, B) {
    if (typeof R != "string")
      throw new TypeError("First argument must be a string");
    if (!R) return [];
    B = B || {};
    var U = 1, J = 1;
    function K(ae) {
      var te = ae.match(a);
      te && (U += te.length);
      var X = ae.lastIndexOf(g);
      J = ~X ? ae.length - X : J + ae.length;
    }
    function ce() {
      var ae = { line: U, column: J };
      return function(te) {
        return te.position = new $(ae), P(), te;
      };
    }
    function $(ae) {
      this.start = ae, this.end = { line: U, column: J }, this.source = B.source;
    }
    $.prototype.content = R;
    function L(ae) {
      var te = new Error(
        B.source + ":" + U + ":" + J + ": " + ae
      );
      if (te.reason = ae, te.filename = B.source, te.line = U, te.column = J, te.source = R, !B.silent) throw te;
    }
    function ie(ae) {
      var te = ae.exec(R);
      if (te) {
        var X = te[0];
        return K(X), R = R.slice(X.length), te;
      }
    }
    function P() {
      ie(i);
    }
    function fe(ae) {
      var te;
      for (ae = ae || []; te = Ee(); )
        te !== !1 && ae.push(te);
      return ae;
    }
    function Ee() {
      var ae = ce();
      if (!(h != R.charAt(0) || m != R.charAt(1))) {
        for (var te = 2; x != R.charAt(te) && (m != R.charAt(te) || h != R.charAt(te + 1)); )
          ++te;
        if (te += 2, x === R.charAt(te - 1))
          return L("End of comment missing");
        var X = R.slice(2, te - 2);
        return J += 2, K(X), R = R.slice(te), J += 2, ae({
          type: w,
          comment: X
        });
      }
    }
    function le() {
      var ae = ce(), te = ie(u);
      if (te) {
        if (Ee(), !ie(s)) return L("property missing ':'");
        var X = ie(f), O = ae({
          type: S,
          property: C(te[0].replace(n, x)),
          value: X ? C(X[0].replace(n, x)) : x
        });
        return ie(d), O;
      }
    }
    function ee() {
      var ae = [];
      fe(ae);
      for (var te; te = le(); )
        te !== !1 && (ae.push(te), fe(ae));
      return ae;
    }
    return P(), ee();
  };
  function C(R) {
    return R ? R.replace(p, x) : x;
  }
  return ac;
}
var gm;
function Ov() {
  if (gm) return Ea;
  gm = 1;
  var n = Ea && Ea.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(Ea, "__esModule", { value: !0 }), Ea.default = i;
  var a = n(Rv());
  function i(u, s) {
    var f = null;
    if (!u || typeof u != "string")
      return f;
    var d = (0, a.default)(u), p = typeof s == "function";
    return d.forEach(function(g) {
      if (g.type === "declaration") {
        var h = g.property, m = g.value;
        p ? s(h, m, g) : m && (f = f || {}, f[h] = m);
      }
    }), f;
  }
  return Ea;
}
var Dr = {}, ym;
function zv() {
  if (ym) return Dr;
  ym = 1, Object.defineProperty(Dr, "__esModule", { value: !0 }), Dr.camelCase = void 0;
  var n = /^--[a-zA-Z0-9_-]+$/, a = /-([a-z])/g, i = /^[^-]+$/, u = /^-(webkit|moz|ms|o|khtml)-/, s = /^-(ms)-/, f = function(h) {
    return !h || i.test(h) || n.test(h);
  }, d = function(h, m) {
    return m.toUpperCase();
  }, p = function(h, m) {
    return "".concat(m, "-");
  }, g = function(h, m) {
    return m === void 0 && (m = {}), f(h) ? h : (h = h.toLowerCase(), m.reactCompat ? h = h.replace(s, p) : h = h.replace(u, p), h.replace(a, d));
  };
  return Dr.camelCase = g, Dr;
}
var Ur, bm;
function Nv() {
  if (bm) return Ur;
  bm = 1;
  var n = Ur && Ur.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  }, a = n(Ov()), i = zv();
  function u(s, f) {
    var d = {};
    return !s || typeof s != "string" || (0, a.default)(s, function(p, g) {
      p && g && (d[(0, i.camelCase)(p, f)] = g);
    }), d;
  }
  return u.default = u, Ur = u, Ur;
}
var Mv = Nv();
const Dv = /* @__PURE__ */ Hc(Mv), qg = Vg("end"), Qc = Vg("start");
function Vg(n) {
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
function Uv(n) {
  const a = Qc(n), i = qg(n);
  if (a && i)
    return { start: a, end: i };
}
function qr(n) {
  return !n || typeof n != "object" ? "" : "position" in n || "type" in n ? vm(n.position) : "start" in n || "end" in n ? vm(n) : "line" in n || "column" in n ? kc(n) : "";
}
function kc(n) {
  return xm(n && n.line) + ":" + xm(n && n.column);
}
function vm(n) {
  return kc(n && n.start) + "-" + kc(n && n.end);
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
      const g = u.indexOf(":");
      g === -1 ? f.ruleId = u : (f.source = u.slice(0, g), f.ruleId = u.slice(g + 1));
    }
    if (!f.place && f.ancestors && f.ancestors) {
      const g = f.ancestors[f.ancestors.length - 1];
      g && (f.place = g.position);
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
const Xc = {}.hasOwnProperty, Bv = /* @__PURE__ */ new Map(), Lv = /[A-Z]/g, jv = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Hv = /* @__PURE__ */ new Set(["td", "th"]), Yg = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function qv(n, a) {
  if (!a || a.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const i = a.filePath || void 0;
  let u;
  if (a.development) {
    if (typeof a.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    u = Fv(i, a.jsxDEV);
  } else {
    if (typeof a.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof a.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    u = Zv(i, a.jsx, a.jsxs);
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
    schema: a.space === "svg" ? Gc : Cv,
    stylePropertyNameCase: a.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: a.tableCellAlignToStyle !== !1
  }, f = Gg(s, n, void 0);
  return f && typeof f != "string" ? f : s.create(
    n,
    s.Fragment,
    { children: f || void 0 },
    void 0
  );
}
function Gg(n, a, i) {
  if (a.type === "element")
    return Vv(n, a, i);
  if (a.type === "mdxFlowExpression" || a.type === "mdxTextExpression")
    return Yv(n, a);
  if (a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement")
    return Qv(n, a, i);
  if (a.type === "mdxjsEsm")
    return Gv(n, a);
  if (a.type === "root")
    return Xv(n, a, i);
  if (a.type === "text")
    return Kv(n, a);
}
function Vv(n, a, i) {
  const u = n.schema;
  let s = u;
  a.tagName.toLowerCase() === "svg" && u.space === "html" && (s = Gc, n.schema = s), n.ancestors.push(a);
  const f = Xg(n, a.tagName, !1), d = Iv(n, a);
  let p = Zc(n, a);
  return jv.has(a.tagName) && (p = p.filter(function(g) {
    return typeof g == "string" ? !yv(g) : !0;
  })), Qg(n, d, f, a), Kc(d, p), n.ancestors.pop(), n.schema = u, n.create(a, f, d, i);
}
function Yv(n, a) {
  if (a.data && a.data.estree && n.evaluater) {
    const u = a.data.estree.body[0];
    return u.type, /** @type {Child | undefined} */
    n.evaluater.evaluateExpression(u.expression);
  }
  Gr(n, a.position);
}
function Gv(n, a) {
  if (a.data && a.data.estree && n.evaluater)
    return (
      /** @type {Child | undefined} */
      n.evaluater.evaluateProgram(a.data.estree)
    );
  Gr(n, a.position);
}
function Qv(n, a, i) {
  const u = n.schema;
  let s = u;
  a.name === "svg" && u.space === "html" && (s = Gc, n.schema = s), n.ancestors.push(a);
  const f = a.name === null ? n.Fragment : Xg(n, a.name, !0), d = Jv(n, a), p = Zc(n, a);
  return Qg(n, d, f, a), Kc(d, p), n.ancestors.pop(), n.schema = u, n.create(a, f, d, i);
}
function Xv(n, a, i) {
  const u = {};
  return Kc(u, Zc(n, a)), n.create(a, n.Fragment, u, i);
}
function Kv(n, a) {
  return a.value;
}
function Qg(n, a, i, u) {
  typeof i != "string" && i !== n.Fragment && n.passNode && (a.node = u);
}
function Kc(n, a) {
  if (a.length > 0) {
    const i = a.length > 1 ? a : a[0];
    i && (n.children = i);
  }
}
function Zv(n, a, i) {
  return u;
  function u(s, f, d, p) {
    const h = Array.isArray(d.children) ? i : a;
    return p ? h(f, d, p) : h(f, d);
  }
}
function Fv(n, a) {
  return i;
  function i(u, s, f, d) {
    const p = Array.isArray(f.children), g = Qc(u);
    return a(
      s,
      f,
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
function Iv(n, a) {
  const i = {};
  let u, s;
  for (s in a.properties)
    if (s !== "children" && Xc.call(a.properties, s)) {
      const f = Pv(n, s, a.properties[s]);
      if (f) {
        const [d, p] = f;
        n.tableCellAlignToStyle && d === "align" && typeof p == "string" && Hv.has(a.tagName) ? u = p : i[d] = p;
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
function Jv(n, a) {
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
  const s = n.passKeys ? /* @__PURE__ */ new Map() : Bv;
  for (; ++u < a.children.length; ) {
    const f = a.children[u];
    let d;
    if (n.passKeys) {
      const g = f.type === "element" ? f.tagName : f.type === "mdxJsxFlowElement" || f.type === "mdxJsxTextElement" ? f.name : void 0;
      if (g) {
        const h = s.get(g) || 0;
        d = g + "-" + h, s.set(g, h + 1);
      }
    }
    const p = Gg(n, f, d);
    p !== void 0 && i.push(p);
  }
  return i;
}
function Pv(n, a, i) {
  const u = Tv(n.schema, a);
  if (!(i == null || typeof i == "number" && Number.isNaN(i))) {
    if (Array.isArray(i) && (i = u.commaSeparated ? dv(i) : _v(i)), u.property === "style") {
      let s = typeof i == "object" ? i : $v(n, String(i));
      return n.stylePropertyNameCase === "css" && (s = Wv(s)), ["style", s];
    }
    return [
      n.elementAttributeNameCase === "react" && u.space ? Sv[u.property] || u.property : u.attribute,
      i
    ];
  }
}
function $v(n, a) {
  try {
    return Dv(a, { reactCompat: !0 });
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
    throw s.file = n.filePath || void 0, s.url = Yg + "#cannot-parse-style-attribute", s;
  }
}
function Xg(n, a, i) {
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
  throw i.file = n.filePath || void 0, i.url = Yg + "#cannot-handle-mdx-estrees-without-createevaluater", i;
}
function Wv(n) {
  const a = {};
  let i;
  for (i in n)
    Xc.call(n, i) && (a[ex(i)] = n[i]);
  return a;
}
function ex(n) {
  let a = n.replace(Lv, tx);
  return a.slice(0, 3) === "ms-" && (a = "-" + a), a;
}
function tx(n) {
  return "-" + n.toLowerCase();
}
const rc = {
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
}, nx = {};
function lx(n, a) {
  const i = nx, u = typeof i.includeImageAlt == "boolean" ? i.includeImageAlt : !0, s = typeof i.includeHtml == "boolean" ? i.includeHtml : !0;
  return Kg(n, u, s);
}
function Kg(n, a, i) {
  if (ax(n)) {
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
    u[s] = Kg(n[s], a, i);
  return u.join("");
}
function ax(n) {
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
function xn(n, a, i, u) {
  const s = n.length;
  let f = 0, d;
  if (a < 0 ? a = -a > s ? 0 : s + a : a = a > s ? s : a, i = i > 0 ? i : 0, u.length < 1e4)
    d = Array.from(u), d.unshift(a, i), n.splice(...d);
  else
    for (i && n.splice(a, i); f < u.length; )
      d = u.slice(f, f + 1e4), d.unshift(a, 0), n.splice(...d), f += 1e4, a += 1e4;
}
function nn(n, a) {
  return n.length > 0 ? (xn(n, n.length, 0, a), n) : a;
}
const wm = {}.hasOwnProperty;
function rx(n) {
  const a = {};
  let i = -1;
  for (; ++i < n.length; )
    ix(a, n[i]);
  return a;
}
function ix(n, a) {
  let i;
  for (i in a) {
    const s = (wm.call(n, i) ? n[i] : void 0) || (n[i] = {}), f = a[i];
    let d;
    if (f)
      for (d in f) {
        wm.call(s, d) || (s[d] = []);
        const p = f[d];
        ux(
          // @ts-expect-error Looks like a list.
          s[d],
          Array.isArray(p) ? p : p ? [p] : []
        );
      }
  }
}
function ux(n, a) {
  let i = -1;
  const u = [];
  for (; ++i < a.length; )
    (a[i].add === "after" ? n : u).push(a[i]);
  xn(n, 0, 0, u);
}
function Zg(n, a) {
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
const vn = fl(/[A-Za-z]/), Xt = fl(/[\dA-Za-z]/), ox = fl(/[#-'*+\--9=?A-Z^-~]/);
function Cc(n) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    n !== null && (n < 32 || n === 127)
  );
}
const _c = fl(/\d/), sx = fl(/[\dA-Fa-f]/), cx = fl(/[!-/:-@[-`{-~]/);
function xe(n) {
  return n !== null && n < -2;
}
function Rt(n) {
  return n !== null && (n < 0 || n === 32);
}
function Be(n) {
  return n === -2 || n === -1 || n === 32;
}
const fx = fl(new RegExp("\\p{P}|\\p{S}", "u")), dx = fl(/\s/);
function fl(n) {
  return a;
  function a(i) {
    return i !== null && i > -1 && n.test(String.fromCharCode(i));
  }
}
function Ra(n) {
  const a = [];
  let i = -1, u = 0, s = 0;
  for (; ++i < n.length; ) {
    const f = n.charCodeAt(i);
    let d = "";
    if (f === 37 && Xt(n.charCodeAt(i + 1)) && Xt(n.charCodeAt(i + 2)))
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
  function d(g) {
    return Be(g) ? (n.enter(i), p(g)) : a(g);
  }
  function p(g) {
    return Be(g) && f++ < s ? (n.consume(g), p) : (n.exit(i), a(g));
  }
}
const hx = {
  tokenize: px
};
function px(n) {
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
    const g = n.enter("chunkText", {
      contentType: "text",
      previous: i
    });
    return i && (i.next = g), i = g, d(p);
  }
  function d(p) {
    if (p === null) {
      n.exit("chunkText"), n.exit("paragraph"), n.consume(p);
      return;
    }
    return xe(p) ? (n.consume(p), n.exit("chunkText"), f) : (n.consume(p), d);
  }
}
const mx = {
  tokenize: gx
}, Tm = {
  tokenize: yx
};
function gx(n) {
  const a = this, i = [];
  let u = 0, s, f, d;
  return p;
  function p(K) {
    if (u < i.length) {
      const ce = i[u];
      return a.containerState = ce[1], n.attempt(ce[0].continuation, g, h)(K);
    }
    return h(K);
  }
  function g(K) {
    if (u++, a.containerState._closeFlow) {
      a.containerState._closeFlow = void 0, s && J();
      const ce = a.events.length;
      let $ = ce, L;
      for (; $--; )
        if (a.events[$][0] === "exit" && a.events[$][1].type === "chunkFlow") {
          L = a.events[$][1].end;
          break;
        }
      U(u);
      let ie = ce;
      for (; ie < a.events.length; )
        a.events[ie][1].end = {
          ...L
        }, ie++;
      return xn(a.events, $ + 1, 0, a.events.slice(ce)), a.events.length = ie, h(K);
    }
    return p(K);
  }
  function h(K) {
    if (u === i.length) {
      if (!s)
        return w(K);
      if (s.currentConstruct && s.currentConstruct.concrete)
        return C(K);
      a.interrupt = !!(s.currentConstruct && !s._gfmTableDynamicInterruptHack);
    }
    return a.containerState = {}, n.check(Tm, m, x)(K);
  }
  function m(K) {
    return s && J(), U(u), w(K);
  }
  function x(K) {
    return a.parser.lazy[a.now().line] = u !== i.length, d = a.now().offset, C(K);
  }
  function w(K) {
    return a.containerState = {}, n.attempt(Tm, S, C)(K);
  }
  function S(K) {
    return u++, i.push([a.currentConstruct, a.containerState]), w(K);
  }
  function C(K) {
    if (K === null) {
      s && J(), U(0), n.consume(K);
      return;
    }
    return s = s || a.parser.flow(a.now()), n.enter("chunkFlow", {
      _tokenizer: s,
      contentType: "flow",
      previous: f
    }), R(K);
  }
  function R(K) {
    if (K === null) {
      B(n.exit("chunkFlow"), !0), U(0), n.consume(K);
      return;
    }
    return xe(K) ? (n.consume(K), B(n.exit("chunkFlow")), u = 0, a.interrupt = void 0, p) : (n.consume(K), R);
  }
  function B(K, ce) {
    const $ = a.sliceStream(K);
    if (ce && $.push(null), K.previous = f, f && (f.next = K), f = K, s.defineSkip(K.start), s.write($), a.parser.lazy[K.start.line]) {
      let L = s.events.length;
      for (; L--; )
        if (
          // The token starts before the line ending…
          s.events[L][1].start.offset < d && // …and either is not ended yet…
          (!s.events[L][1].end || // …or ends after it.
          s.events[L][1].end.offset > d)
        )
          return;
      const ie = a.events.length;
      let P = ie, fe, Ee;
      for (; P--; )
        if (a.events[P][0] === "exit" && a.events[P][1].type === "chunkFlow") {
          if (fe) {
            Ee = a.events[P][1].end;
            break;
          }
          fe = !0;
        }
      for (U(u), L = ie; L < a.events.length; )
        a.events[L][1].end = {
          ...Ee
        }, L++;
      xn(a.events, P + 1, 0, a.events.slice(ie)), a.events.length = L;
    }
  }
  function U(K) {
    let ce = i.length;
    for (; ce-- > K; ) {
      const $ = i[ce];
      a.containerState = $[1], $[0].exit.call(a, n);
    }
    i.length = K;
  }
  function J() {
    s.write([null]), f = void 0, s = void 0, a.containerState._closeFlow = void 0;
  }
}
function yx(n, a, i) {
  return Ze(n, n.attempt(this.parser.constructs.document, a, i), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Am(n) {
  if (n === null || Rt(n) || dx(n))
    return 1;
  if (fx(n))
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
  resolveAll: bx,
  tokenize: vx
};
function bx(n, a) {
  let i = -1, u, s, f, d, p, g, h, m;
  for (; ++i < n.length; )
    if (n[i][0] === "enter" && n[i][1].type === "attentionSequence" && n[i][1]._close) {
      for (u = i; u--; )
        if (n[u][0] === "exit" && n[u][1].type === "attentionSequence" && n[u][1]._open && // If the markers are the same:
        a.sliceSerialize(n[u][1]).charCodeAt(0) === a.sliceSerialize(n[i][1]).charCodeAt(0)) {
          if ((n[u][1]._close || n[i][1]._open) && (n[i][1].end.offset - n[i][1].start.offset) % 3 && !((n[u][1].end.offset - n[u][1].start.offset + n[i][1].end.offset - n[i][1].start.offset) % 3))
            continue;
          g = n[u][1].end.offset - n[u][1].start.offset > 1 && n[i][1].end.offset - n[i][1].start.offset > 1 ? 2 : 1;
          const x = {
            ...n[u][1].end
          }, w = {
            ...n[i][1].start
          };
          km(x, -g), km(w, g), d = {
            type: g > 1 ? "strongSequence" : "emphasisSequence",
            start: x,
            end: {
              ...n[u][1].end
            }
          }, p = {
            type: g > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...n[i][1].start
            },
            end: w
          }, f = {
            type: g > 1 ? "strongText" : "emphasisText",
            start: {
              ...n[u][1].end
            },
            end: {
              ...n[i][1].start
            }
          }, s = {
            type: g > 1 ? "strong" : "emphasis",
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
          }, h = [], n[u][1].end.offset - n[u][1].start.offset && (h = nn(h, [["enter", n[u][1], a], ["exit", n[u][1], a]])), h = nn(h, [["enter", s, a], ["enter", d, a], ["exit", d, a], ["enter", f, a]]), h = nn(h, Ic(a.parser.constructs.insideSpan.null, n.slice(u + 1, i), a)), h = nn(h, [["exit", f, a], ["enter", p, a], ["exit", p, a], ["exit", s, a]]), n[i][1].end.offset - n[i][1].start.offset ? (m = 2, h = nn(h, [["enter", n[i][1], a], ["exit", n[i][1], a]])) : m = 0, xn(n, u - 1, i - u + 3, h), i = u + h.length - m - 2;
          break;
        }
    }
  for (i = -1; ++i < n.length; )
    n[i][1].type === "attentionSequence" && (n[i][1].type = "data");
  return n;
}
function vx(n, a) {
  const i = this.parser.constructs.attentionMarkers.null, u = this.previous, s = Am(u);
  let f;
  return d;
  function d(g) {
    return f = g, n.enter("attentionSequence"), p(g);
  }
  function p(g) {
    if (g === f)
      return n.consume(g), p;
    const h = n.exit("attentionSequence"), m = Am(g), x = !m || m === 2 && s || i.includes(g), w = !s || s === 2 && m || i.includes(u);
    return h._open = !!(f === 42 ? x : x && (s || !w)), h._close = !!(f === 42 ? w : w && (m || !x)), a(g);
  }
}
function km(n, a) {
  n.column += a, n.offset += a, n._bufferIndex += a;
}
const xx = {
  name: "autolink",
  tokenize: Sx
};
function Sx(n, a, i) {
  let u = 0;
  return s;
  function s(S) {
    return n.enter("autolink"), n.enter("autolinkMarker"), n.consume(S), n.exit("autolinkMarker"), n.enter("autolinkProtocol"), f;
  }
  function f(S) {
    return vn(S) ? (n.consume(S), d) : S === 64 ? i(S) : h(S);
  }
  function d(S) {
    return S === 43 || S === 45 || S === 46 || Xt(S) ? (u = 1, p(S)) : h(S);
  }
  function p(S) {
    return S === 58 ? (n.consume(S), u = 0, g) : (S === 43 || S === 45 || S === 46 || Xt(S)) && u++ < 32 ? (n.consume(S), p) : (u = 0, h(S));
  }
  function g(S) {
    return S === 62 ? (n.exit("autolinkProtocol"), n.enter("autolinkMarker"), n.consume(S), n.exit("autolinkMarker"), n.exit("autolink"), a) : S === null || S === 32 || S === 60 || Cc(S) ? i(S) : (n.consume(S), g);
  }
  function h(S) {
    return S === 64 ? (n.consume(S), m) : ox(S) ? (n.consume(S), h) : i(S);
  }
  function m(S) {
    return Xt(S) ? x(S) : i(S);
  }
  function x(S) {
    return S === 46 ? (n.consume(S), u = 0, m) : S === 62 ? (n.exit("autolinkProtocol").type = "autolinkEmail", n.enter("autolinkMarker"), n.consume(S), n.exit("autolinkMarker"), n.exit("autolink"), a) : w(S);
  }
  function w(S) {
    if ((S === 45 || Xt(S)) && u++ < 63) {
      const C = S === 45 ? w : x;
      return n.consume(S), C;
    }
    return i(S);
  }
}
const wu = {
  partial: !0,
  tokenize: Ex
};
function Ex(n, a, i) {
  return u;
  function u(f) {
    return Be(f) ? Ze(n, s, "linePrefix")(f) : s(f);
  }
  function s(f) {
    return f === null || xe(f) ? a(f) : i(f);
  }
}
const Fg = {
  continuation: {
    tokenize: Tx
  },
  exit: Ax,
  name: "blockQuote",
  tokenize: wx
};
function wx(n, a, i) {
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
    return Be(d) ? (n.enter("blockQuotePrefixWhitespace"), n.consume(d), n.exit("blockQuotePrefixWhitespace"), n.exit("blockQuotePrefix"), a) : (n.exit("blockQuotePrefix"), a(d));
  }
}
function Tx(n, a, i) {
  const u = this;
  return s;
  function s(d) {
    return Be(d) ? Ze(n, f, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(d) : f(d);
  }
  function f(d) {
    return n.attempt(Fg, a, i)(d);
  }
}
function Ax(n) {
  n.exit("blockQuote");
}
const Ig = {
  name: "characterEscape",
  tokenize: kx
};
function kx(n, a, i) {
  return u;
  function u(f) {
    return n.enter("characterEscape"), n.enter("escapeMarker"), n.consume(f), n.exit("escapeMarker"), s;
  }
  function s(f) {
    return cx(f) ? (n.enter("characterEscapeValue"), n.consume(f), n.exit("characterEscapeValue"), n.exit("characterEscape"), a) : i(f);
  }
}
const Jg = {
  name: "characterReference",
  tokenize: Cx
};
function Cx(n, a, i) {
  const u = this;
  let s = 0, f, d;
  return p;
  function p(x) {
    return n.enter("characterReference"), n.enter("characterReferenceMarker"), n.consume(x), n.exit("characterReferenceMarker"), g;
  }
  function g(x) {
    return x === 35 ? (n.enter("characterReferenceMarkerNumeric"), n.consume(x), n.exit("characterReferenceMarkerNumeric"), h) : (n.enter("characterReferenceValue"), f = 31, d = Xt, m(x));
  }
  function h(x) {
    return x === 88 || x === 120 ? (n.enter("characterReferenceMarkerHexadecimal"), n.consume(x), n.exit("characterReferenceMarkerHexadecimal"), n.enter("characterReferenceValue"), f = 6, d = sx, m) : (n.enter("characterReferenceValue"), f = 7, d = _c, m(x));
  }
  function m(x) {
    if (x === 59 && s) {
      const w = n.exit("characterReferenceValue");
      return d === Xt && !Fc(u.sliceSerialize(w)) ? i(x) : (n.enter("characterReferenceMarker"), n.consume(x), n.exit("characterReferenceMarker"), n.exit("characterReference"), a);
    }
    return d(x) && s++ < f ? (n.consume(x), m) : i(x);
  }
}
const Cm = {
  partial: !0,
  tokenize: Rx
}, _m = {
  concrete: !0,
  name: "codeFenced",
  tokenize: _x
};
function _x(n, a, i) {
  const u = this, s = {
    partial: !0,
    tokenize: $
  };
  let f = 0, d = 0, p;
  return g;
  function g(L) {
    return h(L);
  }
  function h(L) {
    const ie = u.events[u.events.length - 1];
    return f = ie && ie[1].type === "linePrefix" ? ie[2].sliceSerialize(ie[1], !0).length : 0, p = L, n.enter("codeFenced"), n.enter("codeFencedFence"), n.enter("codeFencedFenceSequence"), m(L);
  }
  function m(L) {
    return L === p ? (d++, n.consume(L), m) : d < 3 ? i(L) : (n.exit("codeFencedFenceSequence"), Be(L) ? Ze(n, x, "whitespace")(L) : x(L));
  }
  function x(L) {
    return L === null || xe(L) ? (n.exit("codeFencedFence"), u.interrupt ? a(L) : n.check(Cm, R, ce)(L)) : (n.enter("codeFencedFenceInfo"), n.enter("chunkString", {
      contentType: "string"
    }), w(L));
  }
  function w(L) {
    return L === null || xe(L) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), x(L)) : Be(L) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), Ze(n, S, "whitespace")(L)) : L === 96 && L === p ? i(L) : (n.consume(L), w);
  }
  function S(L) {
    return L === null || xe(L) ? x(L) : (n.enter("codeFencedFenceMeta"), n.enter("chunkString", {
      contentType: "string"
    }), C(L));
  }
  function C(L) {
    return L === null || xe(L) ? (n.exit("chunkString"), n.exit("codeFencedFenceMeta"), x(L)) : L === 96 && L === p ? i(L) : (n.consume(L), C);
  }
  function R(L) {
    return n.attempt(s, ce, B)(L);
  }
  function B(L) {
    return n.enter("lineEnding"), n.consume(L), n.exit("lineEnding"), U;
  }
  function U(L) {
    return f > 0 && Be(L) ? Ze(n, J, "linePrefix", f + 1)(L) : J(L);
  }
  function J(L) {
    return L === null || xe(L) ? n.check(Cm, R, ce)(L) : (n.enter("codeFlowValue"), K(L));
  }
  function K(L) {
    return L === null || xe(L) ? (n.exit("codeFlowValue"), J(L)) : (n.consume(L), K);
  }
  function ce(L) {
    return n.exit("codeFenced"), a(L);
  }
  function $(L, ie, P) {
    let fe = 0;
    return Ee;
    function Ee(X) {
      return L.enter("lineEnding"), L.consume(X), L.exit("lineEnding"), le;
    }
    function le(X) {
      return L.enter("codeFencedFence"), Be(X) ? Ze(L, ee, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(X) : ee(X);
    }
    function ee(X) {
      return X === p ? (L.enter("codeFencedFenceSequence"), ae(X)) : P(X);
    }
    function ae(X) {
      return X === p ? (fe++, L.consume(X), ae) : fe >= d ? (L.exit("codeFencedFenceSequence"), Be(X) ? Ze(L, te, "whitespace")(X) : te(X)) : P(X);
    }
    function te(X) {
      return X === null || xe(X) ? (L.exit("codeFencedFence"), ie(X)) : P(X);
    }
  }
}
function Rx(n, a, i) {
  const u = this;
  return s;
  function s(d) {
    return d === null ? i(d) : (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), f);
  }
  function f(d) {
    return u.parser.lazy[u.now().line] ? i(d) : a(d);
  }
}
const ic = {
  name: "codeIndented",
  tokenize: zx
}, Ox = {
  partial: !0,
  tokenize: Nx
};
function zx(n, a, i) {
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
    return h === null ? g(h) : xe(h) ? n.attempt(Ox, d, g)(h) : (n.enter("codeFlowValue"), p(h));
  }
  function p(h) {
    return h === null || xe(h) ? (n.exit("codeFlowValue"), d(h)) : (n.consume(h), p);
  }
  function g(h) {
    return n.exit("codeIndented"), a(h);
  }
}
function Nx(n, a, i) {
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
const Mx = {
  name: "codeText",
  previous: Ux,
  resolve: Dx,
  tokenize: Bx
};
function Dx(n) {
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
function Ux(n) {
  return n !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Bx(n, a, i) {
  let u = 0, s, f;
  return d;
  function d(x) {
    return n.enter("codeText"), n.enter("codeTextSequence"), p(x);
  }
  function p(x) {
    return x === 96 ? (n.consume(x), u++, p) : (n.exit("codeTextSequence"), g(x));
  }
  function g(x) {
    return x === null ? i(x) : x === 32 ? (n.enter("space"), n.consume(x), n.exit("space"), g) : x === 96 ? (f = n.enter("codeTextSequence"), s = 0, m(x)) : xe(x) ? (n.enter("lineEnding"), n.consume(x), n.exit("lineEnding"), g) : (n.enter("codeTextData"), h(x));
  }
  function h(x) {
    return x === null || x === 32 || x === 96 || xe(x) ? (n.exit("codeTextData"), g(x)) : (n.consume(x), h);
  }
  function m(x) {
    return x === 96 ? (n.consume(x), s++, m) : s === u ? (n.exit("codeTextSequence"), n.exit("codeText"), a(x)) : (f.type = "codeTextData", h(x));
  }
}
class Lx {
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
    return u && Br(this.left, u), f.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), Br(this.left, a);
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
    this.setCursor(0), Br(this.right, a.reverse());
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
        Br(this.right, i.reverse());
      } else {
        const i = this.right.splice(this.left.length + this.right.length - a, Number.POSITIVE_INFINITY);
        Br(this.left, i.reverse());
      }
  }
}
function Br(n, a) {
  let i = 0;
  if (a.length < 1e4)
    n.push(...a);
  else
    for (; i < a.length; )
      n.push(...a.slice(i, i + 1e4)), i += 1e4;
}
function Pg(n) {
  const a = {};
  let i = -1, u, s, f, d, p, g, h;
  const m = new Lx(n);
  for (; ++i < m.length; ) {
    for (; i in a; )
      i = a[i];
    if (u = m.get(i), i && u[1].type === "chunkFlow" && m.get(i - 1)[1].type === "listItemPrefix" && (g = u[1]._tokenizer.events, f = 0, f < g.length && g[f][1].type === "lineEndingBlank" && (f += 2), f < g.length && g[f][1].type === "content"))
      for (; ++f < g.length && g[f][1].type !== "content"; )
        g[f][1].type === "chunkText" && (g[f][1]._isInFirstContentOfListItem = !0, f++);
    if (u[0] === "enter")
      u[1].contentType && (Object.assign(a, jx(m, i)), i = a[i], h = !0);
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
  return xn(n, 0, Number.POSITIVE_INFINITY, m.slice(0)), !h;
}
function jx(n, a) {
  const i = n.get(a)[1], u = n.get(a)[2];
  let s = a - 1;
  const f = [];
  let d = i._tokenizer;
  d || (d = u.parser[i.contentType](i.start), i._contentTypeTextTrailing && (d._contentTypeTextTrailing = !0));
  const p = d.events, g = [], h = {};
  let m, x, w = -1, S = i, C = 0, R = 0;
  const B = [R];
  for (; S; ) {
    for (; n.get(++s)[1] !== S; )
      ;
    f.push(s), S._tokenizer || (m = u.sliceStream(S), S.next || m.push(null), x && d.defineSkip(S.start), S._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = !0), d.write(m), S._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = void 0)), x = S, S = S.next;
  }
  for (S = i; ++w < p.length; )
    // Find a void token that includes a break.
    p[w][0] === "exit" && p[w - 1][0] === "enter" && p[w][1].type === p[w - 1][1].type && p[w][1].start.line !== p[w][1].end.line && (R = w + 1, B.push(R), S._tokenizer = void 0, S.previous = void 0, S = S.next);
  for (d.events = [], S ? (S._tokenizer = void 0, S.previous = void 0) : B.pop(), w = B.length; w--; ) {
    const U = p.slice(B[w], B[w + 1]), J = f.pop();
    g.push([J, J + U.length - 1]), n.splice(J, 2, U);
  }
  for (g.reverse(), w = -1; ++w < g.length; )
    h[C + g[w][0]] = C + g[w][1], C += g[w][1] - g[w][0] - 1;
  return h;
}
const Hx = {
  resolve: Vx,
  tokenize: Yx
}, qx = {
  partial: !0,
  tokenize: Gx
};
function Vx(n) {
  return Pg(n), n;
}
function Yx(n, a) {
  let i;
  return u;
  function u(p) {
    return n.enter("content"), i = n.enter("chunkContent", {
      contentType: "content"
    }), s(p);
  }
  function s(p) {
    return p === null ? f(p) : xe(p) ? n.check(qx, d, f)(p) : (n.consume(p), s);
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
function Gx(n, a, i) {
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
function $g(n, a, i, u, s, f, d, p, g) {
  const h = g || Number.POSITIVE_INFINITY;
  let m = 0;
  return x;
  function x(U) {
    return U === 60 ? (n.enter(u), n.enter(s), n.enter(f), n.consume(U), n.exit(f), w) : U === null || U === 32 || U === 41 || Cc(U) ? i(U) : (n.enter(u), n.enter(d), n.enter(p), n.enter("chunkString", {
      contentType: "string"
    }), R(U));
  }
  function w(U) {
    return U === 62 ? (n.enter(f), n.consume(U), n.exit(f), n.exit(s), n.exit(u), a) : (n.enter(p), n.enter("chunkString", {
      contentType: "string"
    }), S(U));
  }
  function S(U) {
    return U === 62 ? (n.exit("chunkString"), n.exit(p), w(U)) : U === null || U === 60 || xe(U) ? i(U) : (n.consume(U), U === 92 ? C : S);
  }
  function C(U) {
    return U === 60 || U === 62 || U === 92 ? (n.consume(U), S) : S(U);
  }
  function R(U) {
    return !m && (U === null || U === 41 || Rt(U)) ? (n.exit("chunkString"), n.exit(p), n.exit(d), n.exit(u), a(U)) : m < h && U === 40 ? (n.consume(U), m++, R) : U === 41 ? (n.consume(U), m--, R) : U === null || U === 32 || U === 40 || Cc(U) ? i(U) : (n.consume(U), U === 92 ? B : R);
  }
  function B(U) {
    return U === 40 || U === 41 || U === 92 ? (n.consume(U), R) : R(U);
  }
}
function Wg(n, a, i, u, s, f) {
  const d = this;
  let p = 0, g;
  return h;
  function h(S) {
    return n.enter(u), n.enter(s), n.consume(S), n.exit(s), n.enter(f), m;
  }
  function m(S) {
    return p > 999 || S === null || S === 91 || S === 93 && !g || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    S === 94 && !p && "_hiddenFootnoteSupport" in d.parser.constructs ? i(S) : S === 93 ? (n.exit(f), n.enter(s), n.consume(S), n.exit(s), n.exit(u), a) : xe(S) ? (n.enter("lineEnding"), n.consume(S), n.exit("lineEnding"), m) : (n.enter("chunkString", {
      contentType: "string"
    }), x(S));
  }
  function x(S) {
    return S === null || S === 91 || S === 93 || xe(S) || p++ > 999 ? (n.exit("chunkString"), m(S)) : (n.consume(S), g || (g = !Be(S)), S === 92 ? w : x);
  }
  function w(S) {
    return S === 91 || S === 92 || S === 93 ? (n.consume(S), p++, x) : x(S);
  }
}
function ey(n, a, i, u, s, f) {
  let d;
  return p;
  function p(w) {
    return w === 34 || w === 39 || w === 40 ? (n.enter(u), n.enter(s), n.consume(w), n.exit(s), d = w === 40 ? 41 : w, g) : i(w);
  }
  function g(w) {
    return w === d ? (n.enter(s), n.consume(w), n.exit(s), n.exit(u), a) : (n.enter(f), h(w));
  }
  function h(w) {
    return w === d ? (n.exit(f), g(d)) : w === null ? i(w) : xe(w) ? (n.enter("lineEnding"), n.consume(w), n.exit("lineEnding"), Ze(n, h, "linePrefix")) : (n.enter("chunkString", {
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
    return xe(s) ? (n.enter("lineEnding"), n.consume(s), n.exit("lineEnding"), i = !0, u) : Be(s) ? Ze(n, u, i ? "linePrefix" : "lineSuffix")(s) : a(s);
  }
}
const Qx = {
  name: "definition",
  tokenize: Kx
}, Xx = {
  partial: !0,
  tokenize: Zx
};
function Kx(n, a, i) {
  const u = this;
  let s;
  return f;
  function f(S) {
    return n.enter("definition"), d(S);
  }
  function d(S) {
    return Wg.call(
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
    return s = Aa(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1)), S === 58 ? (n.enter("definitionMarker"), n.consume(S), n.exit("definitionMarker"), g) : i(S);
  }
  function g(S) {
    return Rt(S) ? Vr(n, h)(S) : h(S);
  }
  function h(S) {
    return $g(
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
    return n.attempt(Xx, x, x)(S);
  }
  function x(S) {
    return Be(S) ? Ze(n, w, "whitespace")(S) : w(S);
  }
  function w(S) {
    return S === null || xe(S) ? (n.exit("definition"), u.parser.defined.push(s), a(S)) : i(S);
  }
}
function Zx(n, a, i) {
  return u;
  function u(p) {
    return Rt(p) ? Vr(n, s)(p) : i(p);
  }
  function s(p) {
    return ey(n, f, i, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(p);
  }
  function f(p) {
    return Be(p) ? Ze(n, d, "whitespace")(p) : d(p);
  }
  function d(p) {
    return p === null || xe(p) ? a(p) : i(p);
  }
}
const Fx = {
  name: "hardBreakEscape",
  tokenize: Ix
};
function Ix(n, a, i) {
  return u;
  function u(f) {
    return n.enter("hardBreakEscape"), n.consume(f), s;
  }
  function s(f) {
    return xe(f) ? (n.exit("hardBreakEscape"), a(f)) : i(f);
  }
}
const Jx = {
  name: "headingAtx",
  resolve: Px,
  tokenize: $x
};
function Px(n, a) {
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
  }, xn(n, u, i - u + 1, [["enter", s, a], ["enter", f, a], ["exit", f, a], ["exit", s, a]])), n;
}
function $x(n, a, i) {
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
    return m === 35 ? (n.enter("atxHeadingSequence"), g(m)) : m === null || xe(m) ? (n.exit("atxHeading"), a(m)) : Be(m) ? Ze(n, p, "whitespace")(m) : (n.enter("atxHeadingText"), h(m));
  }
  function g(m) {
    return m === 35 ? (n.consume(m), g) : (n.exit("atxHeadingSequence"), p(m));
  }
  function h(m) {
    return m === null || m === 35 || Rt(m) ? (n.exit("atxHeadingText"), p(m)) : (n.consume(m), h);
  }
}
const Wx = [
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
], Rm = ["pre", "script", "style", "textarea"], eS = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: lS,
  tokenize: aS
}, tS = {
  partial: !0,
  tokenize: iS
}, nS = {
  partial: !0,
  tokenize: rS
};
function lS(n) {
  let a = n.length;
  for (; a-- && !(n[a][0] === "enter" && n[a][1].type === "htmlFlow"); )
    ;
  return a > 1 && n[a - 2][1].type === "linePrefix" && (n[a][1].start = n[a - 2][1].start, n[a + 1][1].start = n[a - 2][1].start, n.splice(a - 2, 2)), n;
}
function aS(n, a, i) {
  const u = this;
  let s, f, d, p, g;
  return h;
  function h(E) {
    return m(E);
  }
  function m(E) {
    return n.enter("htmlFlow"), n.enter("htmlFlowData"), n.consume(E), x;
  }
  function x(E) {
    return E === 33 ? (n.consume(E), w) : E === 47 ? (n.consume(E), f = !0, R) : E === 63 ? (n.consume(E), s = 3, u.interrupt ? a : b) : vn(E) ? (n.consume(E), d = String.fromCharCode(E), B) : i(E);
  }
  function w(E) {
    return E === 45 ? (n.consume(E), s = 2, S) : E === 91 ? (n.consume(E), s = 5, p = 0, C) : vn(E) ? (n.consume(E), s = 4, u.interrupt ? a : b) : i(E);
  }
  function S(E) {
    return E === 45 ? (n.consume(E), u.interrupt ? a : b) : i(E);
  }
  function C(E) {
    const ne = "CDATA[";
    return E === ne.charCodeAt(p++) ? (n.consume(E), p === ne.length ? u.interrupt ? a : ee : C) : i(E);
  }
  function R(E) {
    return vn(E) ? (n.consume(E), d = String.fromCharCode(E), B) : i(E);
  }
  function B(E) {
    if (E === null || E === 47 || E === 62 || Rt(E)) {
      const ne = E === 47, Se = d.toLowerCase();
      return !ne && !f && Rm.includes(Se) ? (s = 1, u.interrupt ? a(E) : ee(E)) : Wx.includes(d.toLowerCase()) ? (s = 6, ne ? (n.consume(E), U) : u.interrupt ? a(E) : ee(E)) : (s = 7, u.interrupt && !u.parser.lazy[u.now().line] ? i(E) : f ? J(E) : K(E));
    }
    return E === 45 || Xt(E) ? (n.consume(E), d += String.fromCharCode(E), B) : i(E);
  }
  function U(E) {
    return E === 62 ? (n.consume(E), u.interrupt ? a : ee) : i(E);
  }
  function J(E) {
    return Be(E) ? (n.consume(E), J) : Ee(E);
  }
  function K(E) {
    return E === 47 ? (n.consume(E), Ee) : E === 58 || E === 95 || vn(E) ? (n.consume(E), ce) : Be(E) ? (n.consume(E), K) : Ee(E);
  }
  function ce(E) {
    return E === 45 || E === 46 || E === 58 || E === 95 || Xt(E) ? (n.consume(E), ce) : $(E);
  }
  function $(E) {
    return E === 61 ? (n.consume(E), L) : Be(E) ? (n.consume(E), $) : K(E);
  }
  function L(E) {
    return E === null || E === 60 || E === 61 || E === 62 || E === 96 ? i(E) : E === 34 || E === 39 ? (n.consume(E), g = E, ie) : Be(E) ? (n.consume(E), L) : P(E);
  }
  function ie(E) {
    return E === g ? (n.consume(E), g = null, fe) : E === null || xe(E) ? i(E) : (n.consume(E), ie);
  }
  function P(E) {
    return E === null || E === 34 || E === 39 || E === 47 || E === 60 || E === 61 || E === 62 || E === 96 || Rt(E) ? $(E) : (n.consume(E), P);
  }
  function fe(E) {
    return E === 47 || E === 62 || Be(E) ? K(E) : i(E);
  }
  function Ee(E) {
    return E === 62 ? (n.consume(E), le) : i(E);
  }
  function le(E) {
    return E === null || xe(E) ? ee(E) : Be(E) ? (n.consume(E), le) : i(E);
  }
  function ee(E) {
    return E === 45 && s === 2 ? (n.consume(E), O) : E === 60 && s === 1 ? (n.consume(E), Y) : E === 62 && s === 4 ? (n.consume(E), j) : E === 63 && s === 3 ? (n.consume(E), b) : E === 93 && s === 5 ? (n.consume(E), pe) : xe(E) && (s === 6 || s === 7) ? (n.exit("htmlFlowData"), n.check(tS, W, ae)(E)) : E === null || xe(E) ? (n.exit("htmlFlowData"), ae(E)) : (n.consume(E), ee);
  }
  function ae(E) {
    return n.check(nS, te, W)(E);
  }
  function te(E) {
    return n.enter("lineEnding"), n.consume(E), n.exit("lineEnding"), X;
  }
  function X(E) {
    return E === null || xe(E) ? ae(E) : (n.enter("htmlFlowData"), ee(E));
  }
  function O(E) {
    return E === 45 ? (n.consume(E), b) : ee(E);
  }
  function Y(E) {
    return E === 47 ? (n.consume(E), d = "", V) : ee(E);
  }
  function V(E) {
    if (E === 62) {
      const ne = d.toLowerCase();
      return Rm.includes(ne) ? (n.consume(E), j) : ee(E);
    }
    return vn(E) && d.length < 8 ? (n.consume(E), d += String.fromCharCode(E), V) : ee(E);
  }
  function pe(E) {
    return E === 93 ? (n.consume(E), b) : ee(E);
  }
  function b(E) {
    return E === 62 ? (n.consume(E), j) : E === 45 && s === 2 ? (n.consume(E), b) : ee(E);
  }
  function j(E) {
    return E === null || xe(E) ? (n.exit("htmlFlowData"), W(E)) : (n.consume(E), j);
  }
  function W(E) {
    return n.exit("htmlFlow"), a(E);
  }
}
function rS(n, a, i) {
  const u = this;
  return s;
  function s(d) {
    return xe(d) ? (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), f) : i(d);
  }
  function f(d) {
    return u.parser.lazy[u.now().line] ? i(d) : a(d);
  }
}
function iS(n, a, i) {
  return u;
  function u(s) {
    return n.enter("lineEnding"), n.consume(s), n.exit("lineEnding"), n.attempt(wu, a, i);
  }
}
const uS = {
  name: "htmlText",
  tokenize: oS
};
function oS(n, a, i) {
  const u = this;
  let s, f, d;
  return p;
  function p(b) {
    return n.enter("htmlText"), n.enter("htmlTextData"), n.consume(b), g;
  }
  function g(b) {
    return b === 33 ? (n.consume(b), h) : b === 47 ? (n.consume(b), $) : b === 63 ? (n.consume(b), K) : vn(b) ? (n.consume(b), P) : i(b);
  }
  function h(b) {
    return b === 45 ? (n.consume(b), m) : b === 91 ? (n.consume(b), f = 0, C) : vn(b) ? (n.consume(b), J) : i(b);
  }
  function m(b) {
    return b === 45 ? (n.consume(b), S) : i(b);
  }
  function x(b) {
    return b === null ? i(b) : b === 45 ? (n.consume(b), w) : xe(b) ? (d = x, Y(b)) : (n.consume(b), x);
  }
  function w(b) {
    return b === 45 ? (n.consume(b), S) : x(b);
  }
  function S(b) {
    return b === 62 ? O(b) : b === 45 ? w(b) : x(b);
  }
  function C(b) {
    const j = "CDATA[";
    return b === j.charCodeAt(f++) ? (n.consume(b), f === j.length ? R : C) : i(b);
  }
  function R(b) {
    return b === null ? i(b) : b === 93 ? (n.consume(b), B) : xe(b) ? (d = R, Y(b)) : (n.consume(b), R);
  }
  function B(b) {
    return b === 93 ? (n.consume(b), U) : R(b);
  }
  function U(b) {
    return b === 62 ? O(b) : b === 93 ? (n.consume(b), U) : R(b);
  }
  function J(b) {
    return b === null || b === 62 ? O(b) : xe(b) ? (d = J, Y(b)) : (n.consume(b), J);
  }
  function K(b) {
    return b === null ? i(b) : b === 63 ? (n.consume(b), ce) : xe(b) ? (d = K, Y(b)) : (n.consume(b), K);
  }
  function ce(b) {
    return b === 62 ? O(b) : K(b);
  }
  function $(b) {
    return vn(b) ? (n.consume(b), L) : i(b);
  }
  function L(b) {
    return b === 45 || Xt(b) ? (n.consume(b), L) : ie(b);
  }
  function ie(b) {
    return xe(b) ? (d = ie, Y(b)) : Be(b) ? (n.consume(b), ie) : O(b);
  }
  function P(b) {
    return b === 45 || Xt(b) ? (n.consume(b), P) : b === 47 || b === 62 || Rt(b) ? fe(b) : i(b);
  }
  function fe(b) {
    return b === 47 ? (n.consume(b), O) : b === 58 || b === 95 || vn(b) ? (n.consume(b), Ee) : xe(b) ? (d = fe, Y(b)) : Be(b) ? (n.consume(b), fe) : O(b);
  }
  function Ee(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || Xt(b) ? (n.consume(b), Ee) : le(b);
  }
  function le(b) {
    return b === 61 ? (n.consume(b), ee) : xe(b) ? (d = le, Y(b)) : Be(b) ? (n.consume(b), le) : fe(b);
  }
  function ee(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? i(b) : b === 34 || b === 39 ? (n.consume(b), s = b, ae) : xe(b) ? (d = ee, Y(b)) : Be(b) ? (n.consume(b), ee) : (n.consume(b), te);
  }
  function ae(b) {
    return b === s ? (n.consume(b), s = void 0, X) : b === null ? i(b) : xe(b) ? (d = ae, Y(b)) : (n.consume(b), ae);
  }
  function te(b) {
    return b === null || b === 34 || b === 39 || b === 60 || b === 61 || b === 96 ? i(b) : b === 47 || b === 62 || Rt(b) ? fe(b) : (n.consume(b), te);
  }
  function X(b) {
    return b === 47 || b === 62 || Rt(b) ? fe(b) : i(b);
  }
  function O(b) {
    return b === 62 ? (n.consume(b), n.exit("htmlTextData"), n.exit("htmlText"), a) : i(b);
  }
  function Y(b) {
    return n.exit("htmlTextData"), n.enter("lineEnding"), n.consume(b), n.exit("lineEnding"), V;
  }
  function V(b) {
    return Be(b) ? Ze(n, pe, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(b) : pe(b);
  }
  function pe(b) {
    return n.enter("htmlTextData"), d(b);
  }
}
const Jc = {
  name: "labelEnd",
  resolveAll: dS,
  resolveTo: hS,
  tokenize: pS
}, sS = {
  tokenize: mS
}, cS = {
  tokenize: gS
}, fS = {
  tokenize: yS
};
function dS(n) {
  let a = -1;
  const i = [];
  for (; ++a < n.length; ) {
    const u = n[a][1];
    if (i.push(n[a]), u.type === "labelImage" || u.type === "labelLink" || u.type === "labelEnd") {
      const s = u.type === "labelImage" ? 4 : 2;
      u.type = "data", a += s;
    }
  }
  return n.length !== i.length && xn(n, 0, n.length, i), n;
}
function hS(n, a) {
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
  const g = {
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
  return p = [["enter", g, a], ["enter", h, a]], p = nn(p, n.slice(f + 1, f + u + 3)), p = nn(p, [["enter", m, a]]), p = nn(p, Ic(a.parser.constructs.insideSpan.null, n.slice(f + u + 4, d - 3), a)), p = nn(p, [["exit", m, a], n[d - 2], n[d - 1], ["exit", h, a]]), p = nn(p, n.slice(d + 1)), p = nn(p, [["exit", g, a]]), xn(n, f, n.length, p), n;
}
function pS(n, a, i) {
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
    }))), n.enter("labelEnd"), n.enter("labelMarker"), n.consume(w), n.exit("labelMarker"), n.exit("labelEnd"), g) : i(w);
  }
  function g(w) {
    return w === 40 ? n.attempt(sS, m, d ? m : x)(w) : w === 91 ? n.attempt(cS, m, d ? h : x)(w) : d ? m(w) : x(w);
  }
  function h(w) {
    return n.attempt(fS, m, x)(w);
  }
  function m(w) {
    return a(w);
  }
  function x(w) {
    return f._balanced = !0, i(w);
  }
}
function mS(n, a, i) {
  return u;
  function u(x) {
    return n.enter("resource"), n.enter("resourceMarker"), n.consume(x), n.exit("resourceMarker"), s;
  }
  function s(x) {
    return Rt(x) ? Vr(n, f)(x) : f(x);
  }
  function f(x) {
    return x === 41 ? m(x) : $g(n, d, p, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(x);
  }
  function d(x) {
    return Rt(x) ? Vr(n, g)(x) : m(x);
  }
  function p(x) {
    return i(x);
  }
  function g(x) {
    return x === 34 || x === 39 || x === 40 ? ey(n, h, i, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(x) : m(x);
  }
  function h(x) {
    return Rt(x) ? Vr(n, m)(x) : m(x);
  }
  function m(x) {
    return x === 41 ? (n.enter("resourceMarker"), n.consume(x), n.exit("resourceMarker"), n.exit("resource"), a) : i(x);
  }
}
function gS(n, a, i) {
  const u = this;
  return s;
  function s(p) {
    return Wg.call(u, n, f, d, "reference", "referenceMarker", "referenceString")(p);
  }
  function f(p) {
    return u.parser.defined.includes(Aa(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1))) ? a(p) : i(p);
  }
  function d(p) {
    return i(p);
  }
}
function yS(n, a, i) {
  return u;
  function u(f) {
    return n.enter("reference"), n.enter("referenceMarker"), n.consume(f), n.exit("referenceMarker"), s;
  }
  function s(f) {
    return f === 93 ? (n.enter("referenceMarker"), n.consume(f), n.exit("referenceMarker"), n.exit("reference"), a) : i(f);
  }
}
const bS = {
  name: "labelStartImage",
  resolveAll: Jc.resolveAll,
  tokenize: vS
};
function vS(n, a, i) {
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
const xS = {
  name: "labelStartLink",
  resolveAll: Jc.resolveAll,
  tokenize: SS
};
function SS(n, a, i) {
  const u = this;
  return s;
  function s(d) {
    return n.enter("labelLink"), n.enter("labelMarker"), n.consume(d), n.exit("labelMarker"), n.exit("labelLink"), f;
  }
  function f(d) {
    return d === 94 && "_hiddenFootnoteSupport" in u.parser.constructs ? i(d) : a(d);
  }
}
const uc = {
  name: "lineEnding",
  tokenize: ES
};
function ES(n, a) {
  return i;
  function i(u) {
    return n.enter("lineEnding"), n.consume(u), n.exit("lineEnding"), Ze(n, a, "linePrefix");
  }
}
const mu = {
  name: "thematicBreak",
  tokenize: wS
};
function wS(n, a, i) {
  let u = 0, s;
  return f;
  function f(h) {
    return n.enter("thematicBreak"), d(h);
  }
  function d(h) {
    return s = h, p(h);
  }
  function p(h) {
    return h === s ? (n.enter("thematicBreakSequence"), g(h)) : u >= 3 && (h === null || xe(h)) ? (n.exit("thematicBreak"), a(h)) : i(h);
  }
  function g(h) {
    return h === s ? (n.consume(h), u++, g) : (n.exit("thematicBreakSequence"), Be(h) ? Ze(n, p, "whitespace")(h) : p(h));
  }
}
const _t = {
  continuation: {
    tokenize: CS
  },
  exit: RS,
  name: "list",
  tokenize: kS
}, TS = {
  partial: !0,
  tokenize: OS
}, AS = {
  partial: !0,
  tokenize: _S
};
function kS(n, a, i) {
  const u = this, s = u.events[u.events.length - 1];
  let f = s && s[1].type === "linePrefix" ? s[2].sliceSerialize(s[1], !0).length : 0, d = 0;
  return p;
  function p(S) {
    const C = u.containerState.type || (S === 42 || S === 43 || S === 45 ? "listUnordered" : "listOrdered");
    if (C === "listUnordered" ? !u.containerState.marker || S === u.containerState.marker : _c(S)) {
      if (u.containerState.type || (u.containerState.type = C, n.enter(C, {
        _container: !0
      })), C === "listUnordered")
        return n.enter("listItemPrefix"), S === 42 || S === 45 ? n.check(mu, i, h)(S) : h(S);
      if (!u.interrupt || S === 49)
        return n.enter("listItemPrefix"), n.enter("listItemValue"), g(S);
    }
    return i(S);
  }
  function g(S) {
    return _c(S) && ++d < 10 ? (n.consume(S), g) : (!u.interrupt || d < 2) && (u.containerState.marker ? S === u.containerState.marker : S === 41 || S === 46) ? (n.exit("listItemValue"), h(S)) : i(S);
  }
  function h(S) {
    return n.enter("listItemMarker"), n.consume(S), n.exit("listItemMarker"), u.containerState.marker = u.containerState.marker || S, n.check(
      wu,
      // Can’t be empty when interrupting.
      u.interrupt ? i : m,
      n.attempt(TS, w, x)
    );
  }
  function m(S) {
    return u.containerState.initialBlankLine = !0, f++, w(S);
  }
  function x(S) {
    return Be(S) ? (n.enter("listItemPrefixWhitespace"), n.consume(S), n.exit("listItemPrefixWhitespace"), w) : i(S);
  }
  function w(S) {
    return u.containerState.size = f + u.sliceSerialize(n.exit("listItemPrefix"), !0).length, a(S);
  }
}
function CS(n, a, i) {
  const u = this;
  return u.containerState._closeFlow = void 0, n.check(wu, s, f);
  function s(p) {
    return u.containerState.furtherBlankLines = u.containerState.furtherBlankLines || u.containerState.initialBlankLine, Ze(n, a, "listItemIndent", u.containerState.size + 1)(p);
  }
  function f(p) {
    return u.containerState.furtherBlankLines || !Be(p) ? (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, d(p)) : (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, n.attempt(AS, a, d)(p));
  }
  function d(p) {
    return u.containerState._closeFlow = !0, u.interrupt = void 0, Ze(n, n.attempt(_t, a, i), "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(p);
  }
}
function _S(n, a, i) {
  const u = this;
  return Ze(n, s, "listItemIndent", u.containerState.size + 1);
  function s(f) {
    const d = u.events[u.events.length - 1];
    return d && d[1].type === "listItemIndent" && d[2].sliceSerialize(d[1], !0).length === u.containerState.size ? a(f) : i(f);
  }
}
function RS(n) {
  n.exit(this.containerState.type);
}
function OS(n, a, i) {
  const u = this;
  return Ze(n, s, "listItemPrefixWhitespace", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function s(f) {
    const d = u.events[u.events.length - 1];
    return !Be(f) && d && d[1].type === "listItemPrefixWhitespace" ? a(f) : i(f);
  }
}
const Om = {
  name: "setextUnderline",
  resolveTo: zS,
  tokenize: NS
};
function zS(n, a) {
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
function NS(n, a, i) {
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
    return h === s ? (n.consume(h), p) : (n.exit("setextHeadingLineSequence"), Be(h) ? Ze(n, g, "lineSuffix")(h) : g(h));
  }
  function g(h) {
    return h === null || xe(h) ? (n.exit("setextHeadingLine"), a(h)) : i(h);
  }
}
const MS = {
  tokenize: DS
};
function DS(n) {
  const a = this, i = n.attempt(
    // Try to parse a blank line.
    wu,
    u,
    // Try to parse initial flow (essentially, only code).
    n.attempt(this.parser.constructs.flowInitial, s, Ze(n, n.attempt(this.parser.constructs.flow, s, n.attempt(Hx, s)), "linePrefix"))
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
const US = {
  resolveAll: ny()
}, BS = ty("string"), LS = ty("text");
function ty(n) {
  return {
    resolveAll: ny(n === "text" ? jS : void 0),
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
      return i.enter("data"), i.consume(m), g;
    }
    function g(m) {
      return h(m) ? (i.exit("data"), f(m)) : (i.consume(m), g);
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
function ny(n) {
  return a;
  function a(i, u) {
    let s = -1, f;
    for (; ++s <= i.length; )
      f === void 0 ? i[s] && i[s][1].type === "data" && (f = s, s++) : (!i[s] || i[s][1].type !== "data") && (s !== f + 2 && (i[f][1].end = i[s - 1][1].end, i.splice(f + 2, s - f - 2), s = f + 2), f = void 0);
    return n ? n(i, u) : i;
  }
}
function jS(n, a) {
  let i = 0;
  for (; ++i <= n.length; )
    if ((i === n.length || n[i][1].type === "lineEnding") && n[i - 1][1].type === "data") {
      const u = n[i - 1][1], s = a.sliceStream(u);
      let f = s.length, d = -1, p = 0, g;
      for (; f--; ) {
        const h = s[f];
        if (typeof h == "string") {
          for (d = h.length; h.charCodeAt(d - 1) === 32; )
            p++, d--;
          if (d) break;
          d = -1;
        } else if (h === -2)
          g = !0, p++;
        else if (h !== -1) {
          f++;
          break;
        }
      }
      if (a._contentTypeTextTrailing && i === n.length && (p = 0), p) {
        const h = {
          type: i === n.length || g || p < 2 ? "lineSuffix" : "hardBreakTrailing",
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
const HS = {
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
  62: Fg
}, qS = {
  91: Qx
}, VS = {
  [-2]: ic,
  [-1]: ic,
  32: ic
}, YS = {
  35: Jx,
  42: mu,
  45: [Om, mu],
  60: eS,
  61: Om,
  95: mu,
  96: _m,
  126: _m
}, GS = {
  38: Jg,
  92: Ig
}, QS = {
  [-5]: uc,
  [-4]: uc,
  [-3]: uc,
  33: bS,
  38: Jg,
  42: Rc,
  60: [xx, uS],
  91: xS,
  92: [Fx, Ig],
  93: Jc,
  95: Rc,
  96: Mx
}, XS = {
  null: [Rc, US]
}, KS = {
  null: [42, 95]
}, ZS = {
  null: []
}, FS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: KS,
  contentInitial: qS,
  disable: ZS,
  document: HS,
  flow: YS,
  flowInitial: VS,
  insideSpan: XS,
  string: GS,
  text: QS
}, Symbol.toStringTag, { value: "Module" }));
function IS(n, a, i) {
  let u = {
    _bufferIndex: -1,
    _index: 0,
    line: i && i.line || 1,
    column: i && i.column || 1,
    offset: i && i.offset || 0
  };
  const s = {}, f = [];
  let d = [], p = [];
  const g = {
    attempt: ie($),
    check: ie(L),
    consume: J,
    enter: K,
    exit: ce,
    interrupt: ie(L, {
      interrupt: !0
    })
  }, h = {
    code: null,
    containerState: {},
    defineSkip: R,
    events: [],
    now: C,
    parser: n,
    previous: null,
    sliceSerialize: w,
    sliceStream: S,
    write: x
  };
  let m = a.tokenize.call(h, g);
  return a.resolveAll && f.push(a), h;
  function x(le) {
    return d = nn(d, le), B(), d[d.length - 1] !== null ? [] : (P(a, 0), h.events = Ic(f, h.events, h), h.events);
  }
  function w(le, ee) {
    return PS(S(le), ee);
  }
  function S(le) {
    return JS(d, le);
  }
  function C() {
    const {
      _bufferIndex: le,
      _index: ee,
      line: ae,
      column: te,
      offset: X
    } = u;
    return {
      _bufferIndex: le,
      _index: ee,
      line: ae,
      column: te,
      offset: X
    };
  }
  function R(le) {
    s[le.line] = le.column, Ee();
  }
  function B() {
    let le;
    for (; u._index < d.length; ) {
      const ee = d[u._index];
      if (typeof ee == "string")
        for (le = u._index, u._bufferIndex < 0 && (u._bufferIndex = 0); u._index === le && u._bufferIndex < ee.length; )
          U(ee.charCodeAt(u._bufferIndex));
      else
        U(ee);
    }
  }
  function U(le) {
    m = m(le);
  }
  function J(le) {
    xe(le) ? (u.line++, u.column = 1, u.offset += le === -3 ? 2 : 1, Ee()) : le !== -1 && (u.column++, u.offset++), u._bufferIndex < 0 ? u._index++ : (u._bufferIndex++, u._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    d[u._index].length && (u._bufferIndex = -1, u._index++)), h.previous = le;
  }
  function K(le, ee) {
    const ae = ee || {};
    return ae.type = le, ae.start = C(), h.events.push(["enter", ae, h]), p.push(ae), ae;
  }
  function ce(le) {
    const ee = p.pop();
    return ee.end = C(), h.events.push(["exit", ee, h]), ee;
  }
  function $(le, ee) {
    P(le, ee.from);
  }
  function L(le, ee) {
    ee.restore();
  }
  function ie(le, ee) {
    return ae;
    function ae(te, X, O) {
      let Y, V, pe, b;
      return Array.isArray(te) ? (
        /* c8 ignore next 1 */
        W(te)
      ) : "tokenize" in te ? (
        // Looks like a construct.
        W([
          /** @type {Construct} */
          te
        ])
      ) : j(te);
      function j(re) {
        return _e;
        function _e(Ne) {
          const et = Ne !== null && re[Ne], xt = Ne !== null && re.null, Mt = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(et) ? et : et ? [et] : [],
            ...Array.isArray(xt) ? xt : xt ? [xt] : []
          ];
          return W(Mt)(Ne);
        }
      }
      function W(re) {
        return Y = re, V = 0, re.length === 0 ? O : E(re[V]);
      }
      function E(re) {
        return _e;
        function _e(Ne) {
          return b = fe(), pe = re, re.partial || (h.currentConstruct = re), re.name && h.parser.constructs.disable.null.includes(re.name) ? Se() : re.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            ee ? Object.assign(Object.create(h), ee) : h,
            g,
            ne,
            Se
          )(Ne);
        }
      }
      function ne(re) {
        return le(pe, b), X;
      }
      function Se(re) {
        return b.restore(), ++V < Y.length ? E(Y[V]) : O;
      }
    }
  }
  function P(le, ee) {
    le.resolveAll && !f.includes(le) && f.push(le), le.resolve && xn(h.events, ee, h.events.length - ee, le.resolve(h.events.slice(ee), h)), le.resolveTo && (h.events = le.resolveTo(h.events, h));
  }
  function fe() {
    const le = C(), ee = h.previous, ae = h.currentConstruct, te = h.events.length, X = Array.from(p);
    return {
      from: te,
      restore: O
    };
    function O() {
      u = le, h.previous = ee, h.currentConstruct = ae, h.events.length = te, p = X, Ee();
    }
  }
  function Ee() {
    u.line in s && u.column < 2 && (u.column = s[u.line], u.offset += s[u.line] - 1);
  }
}
function JS(n, a) {
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
function PS(n, a) {
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
function $S(n) {
  const u = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      rx([FS, ...(n || {}).extensions || []])
    ),
    content: s(hx),
    defined: [],
    document: s(mx),
    flow: s(MS),
    lazy: {},
    string: s(BS),
    text: s(LS)
  };
  return u;
  function s(f) {
    return d;
    function d(p) {
      return IS(u, f, p);
    }
  }
}
function WS(n) {
  for (; !Pg(n); )
    ;
  return n;
}
const zm = /[\0\t\n\r]/g;
function eE() {
  let n = 1, a = "", i = !0, u;
  return s;
  function s(f, d, p) {
    const g = [];
    let h, m, x, w, S;
    for (f = a + (typeof f == "string" ? f.toString() : new TextDecoder(d || void 0).decode(f)), x = 0, a = "", i && (f.charCodeAt(0) === 65279 && x++, i = void 0); x < f.length; ) {
      if (zm.lastIndex = x, h = zm.exec(f), w = h && h.index !== void 0 ? h.index : f.length, S = f.charCodeAt(w), !h) {
        a = f.slice(x);
        break;
      }
      if (S === 10 && x === w && u)
        g.push(-3), u = void 0;
      else
        switch (u && (g.push(-5), u = void 0), x < w && (g.push(f.slice(x, w)), n += w - x), S) {
          case 0: {
            g.push(65533), n++;
            break;
          }
          case 9: {
            for (m = Math.ceil(n / 4) * 4, g.push(-2); n++ < m; ) g.push(-1);
            break;
          }
          case 10: {
            g.push(-4), n = 1;
            break;
          }
          default:
            u = !0, n = 1;
        }
      x = w + 1;
    }
    return p && (u && g.push(-5), a && g.push(a), g.push(null)), g;
  }
}
const tE = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function nE(n) {
  return n.replace(tE, lE);
}
function lE(n, a, i) {
  if (a)
    return a;
  if (i.charCodeAt(0) === 35) {
    const s = i.charCodeAt(1), f = s === 120 || s === 88;
    return Zg(i.slice(f ? 2 : 1), f ? 16 : 10);
  }
  return Fc(i) || n;
}
const ly = {}.hasOwnProperty;
function aE(n, a, i) {
  return typeof a != "string" && (i = a, a = void 0), rE(i)(WS($S(i).document().write(eE()(n, a, !0))));
}
function rE(n) {
  const a = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: f(Da),
      autolinkProtocol: fe,
      autolinkEmail: fe,
      atxHeading: f(Ir),
      blockQuote: f(xt),
      characterEscape: fe,
      characterReference: fe,
      codeFenced: f(Mt),
      codeFencedFenceInfo: d,
      codeFencedFenceMeta: d,
      codeIndented: f(Mt, d),
      codeText: f(sn, d),
      codeTextData: fe,
      data: fe,
      codeFlowValue: fe,
      definition: f(Na),
      definitionDestinationString: d,
      definitionLabelString: d,
      definitionTitleString: d,
      emphasis: f(Ma),
      hardBreakEscape: f(Jr),
      hardBreakTrailing: f(Jr),
      htmlFlow: f(Dt, d),
      htmlFlowData: fe,
      htmlText: f(Dt, d),
      htmlTextData: fe,
      image: f(Mu),
      label: d,
      link: f(Da),
      listItem: f(Ul),
      listItemValue: w,
      listOrdered: f(Ua, x),
      listUnordered: f(Ua),
      paragraph: f(Du),
      reference: E,
      referenceString: d,
      resourceDestinationString: d,
      resourceTitleString: d,
      setextHeading: f(Ir),
      strong: f(Pr),
      thematicBreak: f(Bu)
    },
    exit: {
      atxHeading: g(),
      atxHeadingSequence: $,
      autolink: g(),
      autolinkEmail: et,
      autolinkProtocol: Ne,
      blockQuote: g(),
      characterEscapeValue: Ee,
      characterReferenceMarkerHexadecimal: Se,
      characterReferenceMarkerNumeric: Se,
      characterReferenceValue: re,
      characterReference: _e,
      codeFenced: g(B),
      codeFencedFence: R,
      codeFencedFenceInfo: S,
      codeFencedFenceMeta: C,
      codeFlowValue: Ee,
      codeIndented: g(U),
      codeText: g(X),
      codeTextData: Ee,
      data: Ee,
      definition: g(),
      definitionDestinationString: ce,
      definitionLabelString: J,
      definitionTitleString: K,
      emphasis: g(),
      hardBreakEscape: g(ee),
      hardBreakTrailing: g(ee),
      htmlFlow: g(ae),
      htmlFlowData: Ee,
      htmlText: g(te),
      htmlTextData: Ee,
      image: g(Y),
      label: pe,
      labelText: V,
      lineEnding: le,
      link: g(O),
      listItem: g(),
      listOrdered: g(),
      listUnordered: g(),
      paragraph: g(),
      referenceString: ne,
      resourceDestinationString: b,
      resourceTitleString: j,
      resource: W,
      setextHeading: g(P),
      setextHeadingLineSequence: ie,
      setextHeadingText: L,
      strong: g(),
      thematicBreak: g()
    }
  };
  ay(a, (n || {}).mdastExtensions || []);
  const i = {};
  return u;
  function u(H) {
    let F = {
      type: "root",
      children: []
    };
    const he = {
      stack: [F],
      tokenStack: [],
      config: a,
      enter: p,
      exit: h,
      buffer: d,
      resume: m,
      data: i
    }, be = [];
    let je = -1;
    for (; ++je < H.length; )
      if (H[je][1].type === "listOrdered" || H[je][1].type === "listUnordered")
        if (H[je][0] === "enter")
          be.push(je);
        else {
          const Ut = be.pop();
          je = s(H, Ut, je);
        }
    for (je = -1; ++je < H.length; ) {
      const Ut = a[H[je][0]];
      ly.call(Ut, H[je][1].type) && Ut[H[je][1].type].call(Object.assign({
        sliceSerialize: H[je][2].sliceSerialize
      }, he), H[je][1]);
    }
    if (he.tokenStack.length > 0) {
      const Ut = he.tokenStack[he.tokenStack.length - 1];
      (Ut[1] || Nm).call(he, void 0, Ut[0]);
    }
    for (F.position = {
      start: cl(H.length > 0 ? H[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: cl(H.length > 0 ? H[H.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, je = -1; ++je < a.transforms.length; )
      F = a.transforms[je](F) || F;
    return F;
  }
  function s(H, F, he) {
    let be = F - 1, je = -1, Ut = !1, En, Et, cn, Bt;
    for (; ++be <= he; ) {
      const ut = H[be];
      switch (ut[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          ut[0] === "enter" ? je++ : je--, Bt = void 0;
          break;
        }
        case "lineEndingBlank": {
          ut[0] === "enter" && (En && !Bt && !je && !cn && (cn = be), Bt = void 0);
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
        if (En) {
          let Kt = be;
          for (Et = void 0; Kt--; ) {
            const ln = H[Kt];
            if (ln[1].type === "lineEnding" || ln[1].type === "lineEndingBlank") {
              if (ln[0] === "exit") continue;
              Et && (H[Et][1].type = "lineEndingBlank", Ut = !0), ln[1].type = "lineEnding", Et = Kt;
            } else if (!(ln[1].type === "linePrefix" || ln[1].type === "blockQuotePrefix" || ln[1].type === "blockQuotePrefixWhitespace" || ln[1].type === "blockQuoteMarker" || ln[1].type === "listItemIndent")) break;
          }
          cn && (!Et || cn < Et) && (En._spread = !0), En.end = Object.assign({}, Et ? H[Et][1].start : ut[1].end), H.splice(Et || be, 0, ["exit", En, ut[2]]), be++, he++;
        }
        if (ut[1].type === "listItemPrefix") {
          const Kt = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, ut[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          En = Kt, H.splice(be, 0, ["enter", Kt, ut[2]]), be++, he++, cn = void 0, Bt = !0;
        }
      }
    }
    return H[F][1]._spread = Ut, he;
  }
  function f(H, F) {
    return he;
    function he(be) {
      p.call(this, H(be), be), F && F.call(this, be);
    }
  }
  function d() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function p(H, F, he) {
    this.stack[this.stack.length - 1].children.push(H), this.stack.push(H), this.tokenStack.push([F, he || void 0]), H.position = {
      start: cl(F.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function g(H) {
    return F;
    function F(he) {
      H && H.call(this, he), h.call(this, he);
    }
  }
  function h(H, F) {
    const he = this.stack.pop(), be = this.tokenStack.pop();
    if (be)
      be[0].type !== H.type && (F ? F.call(this, H, be[0]) : (be[1] || Nm).call(this, H, be[0]));
    else throw new Error("Cannot close `" + H.type + "` (" + qr({
      start: H.start,
      end: H.end
    }) + "): it’s not open");
    he.position.end = cl(H.end);
  }
  function m() {
    return lx(this.stack.pop());
  }
  function x() {
    this.data.expectingFirstListItemValue = !0;
  }
  function w(H) {
    if (this.data.expectingFirstListItemValue) {
      const F = this.stack[this.stack.length - 2];
      F.start = Number.parseInt(this.sliceSerialize(H), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function S() {
    const H = this.resume(), F = this.stack[this.stack.length - 1];
    F.lang = H;
  }
  function C() {
    const H = this.resume(), F = this.stack[this.stack.length - 1];
    F.meta = H;
  }
  function R() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function B() {
    const H = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = H.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function U() {
    const H = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = H.replace(/(\r?\n|\r)$/g, "");
  }
  function J(H) {
    const F = this.resume(), he = this.stack[this.stack.length - 1];
    he.label = F, he.identifier = Aa(this.sliceSerialize(H)).toLowerCase();
  }
  function K() {
    const H = this.resume(), F = this.stack[this.stack.length - 1];
    F.title = H;
  }
  function ce() {
    const H = this.resume(), F = this.stack[this.stack.length - 1];
    F.url = H;
  }
  function $(H) {
    const F = this.stack[this.stack.length - 1];
    if (!F.depth) {
      const he = this.sliceSerialize(H).length;
      F.depth = he;
    }
  }
  function L() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function ie(H) {
    const F = this.stack[this.stack.length - 1];
    F.depth = this.sliceSerialize(H).codePointAt(0) === 61 ? 1 : 2;
  }
  function P() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function fe(H) {
    const he = this.stack[this.stack.length - 1].children;
    let be = he[he.length - 1];
    (!be || be.type !== "text") && (be = Uu(), be.position = {
      start: cl(H.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, he.push(be)), this.stack.push(be);
  }
  function Ee(H) {
    const F = this.stack.pop();
    F.value += this.sliceSerialize(H), F.position.end = cl(H.end);
  }
  function le(H) {
    const F = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const he = F.children[F.children.length - 1];
      he.position.end = cl(H.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && a.canContainEols.includes(F.type) && (fe.call(this, H), Ee.call(this, H));
  }
  function ee() {
    this.data.atHardBreak = !0;
  }
  function ae() {
    const H = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = H;
  }
  function te() {
    const H = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = H;
  }
  function X() {
    const H = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = H;
  }
  function O() {
    const H = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const F = this.data.referenceType || "shortcut";
      H.type += "Reference", H.referenceType = F, delete H.url, delete H.title;
    } else
      delete H.identifier, delete H.label;
    this.data.referenceType = void 0;
  }
  function Y() {
    const H = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const F = this.data.referenceType || "shortcut";
      H.type += "Reference", H.referenceType = F, delete H.url, delete H.title;
    } else
      delete H.identifier, delete H.label;
    this.data.referenceType = void 0;
  }
  function V(H) {
    const F = this.sliceSerialize(H), he = this.stack[this.stack.length - 2];
    he.label = nE(F), he.identifier = Aa(F).toLowerCase();
  }
  function pe() {
    const H = this.stack[this.stack.length - 1], F = this.resume(), he = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, he.type === "link") {
      const be = H.children;
      he.children = be;
    } else
      he.alt = F;
  }
  function b() {
    const H = this.resume(), F = this.stack[this.stack.length - 1];
    F.url = H;
  }
  function j() {
    const H = this.resume(), F = this.stack[this.stack.length - 1];
    F.title = H;
  }
  function W() {
    this.data.inReference = void 0;
  }
  function E() {
    this.data.referenceType = "collapsed";
  }
  function ne(H) {
    const F = this.resume(), he = this.stack[this.stack.length - 1];
    he.label = F, he.identifier = Aa(this.sliceSerialize(H)).toLowerCase(), this.data.referenceType = "full";
  }
  function Se(H) {
    this.data.characterReferenceType = H.type;
  }
  function re(H) {
    const F = this.sliceSerialize(H), he = this.data.characterReferenceType;
    let be;
    he ? (be = Zg(F, he === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : be = Fc(F);
    const je = this.stack[this.stack.length - 1];
    je.value += be;
  }
  function _e(H) {
    const F = this.stack.pop();
    F.position.end = cl(H.end);
  }
  function Ne(H) {
    Ee.call(this, H);
    const F = this.stack[this.stack.length - 1];
    F.url = this.sliceSerialize(H);
  }
  function et(H) {
    Ee.call(this, H);
    const F = this.stack[this.stack.length - 1];
    F.url = "mailto:" + this.sliceSerialize(H);
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
  function Na() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Ma() {
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
  function Da() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Ua(H) {
    return {
      type: "list",
      ordered: H.type === "listOrdered",
      start: null,
      spread: H._spread,
      children: []
    };
  }
  function Ul(H) {
    return {
      type: "listItem",
      spread: H._spread,
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
  function Pr() {
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
function ay(n, a) {
  let i = -1;
  for (; ++i < a.length; ) {
    const u = a[i];
    Array.isArray(u) ? ay(n, u) : iE(n, u);
  }
}
function iE(n, a) {
  let i;
  for (i in a)
    if (ly.call(a, i))
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
function uE(n) {
  const a = this;
  a.parser = i;
  function i(u) {
    return aE(u, {
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
function oE(n, a) {
  const i = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: n.wrap(n.all(a), !0)
  };
  return n.patch(a, i), n.applyData(a, i);
}
function sE(n, a) {
  const i = { type: "element", tagName: "br", properties: {}, children: [] };
  return n.patch(a, i), [n.applyData(a, i), { type: "text", value: `
` }];
}
function cE(n, a) {
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
function fE(n, a) {
  const i = {
    type: "element",
    tagName: "del",
    properties: {},
    children: n.all(a)
  };
  return n.patch(a, i), n.applyData(a, i);
}
function dE(n, a) {
  const i = {
    type: "element",
    tagName: "em",
    properties: {},
    children: n.all(a)
  };
  return n.patch(a, i), n.applyData(a, i);
}
function hE(n, a) {
  const i = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", u = String(a.identifier).toUpperCase(), s = Ra(u.toLowerCase()), f = n.footnoteOrder.indexOf(u);
  let d, p = n.footnoteCounts.get(u);
  p === void 0 ? (p = 0, n.footnoteOrder.push(u), d = n.footnoteOrder.length) : d = f + 1, p += 1, n.footnoteCounts.set(u, p);
  const g = {
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
  n.patch(a, g);
  const h = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [g]
  };
  return n.patch(a, h), n.applyData(a, h);
}
function pE(n, a) {
  const i = {
    type: "element",
    tagName: "h" + a.depth,
    properties: {},
    children: n.all(a)
  };
  return n.patch(a, i), n.applyData(a, i);
}
function mE(n, a) {
  if (n.options.allowDangerousHtml) {
    const i = { type: "raw", value: a.value };
    return n.patch(a, i), n.applyData(a, i);
  }
}
function ry(n, a) {
  const i = a.referenceType;
  let u = "]";
  if (i === "collapsed" ? u += "[]" : i === "full" && (u += "[" + (a.label || a.identifier) + "]"), a.type === "imageReference")
    return [{ type: "text", value: "![" + a.alt + u }];
  const s = n.all(a), f = s[0];
  f && f.type === "text" ? f.value = "[" + f.value : s.unshift({ type: "text", value: "[" });
  const d = s[s.length - 1];
  return d && d.type === "text" ? d.value += u : s.push({ type: "text", value: u }), s;
}
function gE(n, a) {
  const i = String(a.identifier).toUpperCase(), u = n.definitionById.get(i);
  if (!u)
    return ry(n, a);
  const s = { src: Ra(u.url || ""), alt: a.alt };
  u.title !== null && u.title !== void 0 && (s.title = u.title);
  const f = { type: "element", tagName: "img", properties: s, children: [] };
  return n.patch(a, f), n.applyData(a, f);
}
function yE(n, a) {
  const i = { src: Ra(a.url) };
  a.alt !== null && a.alt !== void 0 && (i.alt = a.alt), a.title !== null && a.title !== void 0 && (i.title = a.title);
  const u = { type: "element", tagName: "img", properties: i, children: [] };
  return n.patch(a, u), n.applyData(a, u);
}
function bE(n, a) {
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
function vE(n, a) {
  const i = String(a.identifier).toUpperCase(), u = n.definitionById.get(i);
  if (!u)
    return ry(n, a);
  const s = { href: Ra(u.url || "") };
  u.title !== null && u.title !== void 0 && (s.title = u.title);
  const f = {
    type: "element",
    tagName: "a",
    properties: s,
    children: n.all(a)
  };
  return n.patch(a, f), n.applyData(a, f);
}
function xE(n, a) {
  const i = { href: Ra(a.url) };
  a.title !== null && a.title !== void 0 && (i.title = a.title);
  const u = {
    type: "element",
    tagName: "a",
    properties: i,
    children: n.all(a)
  };
  return n.patch(a, u), n.applyData(a, u);
}
function SE(n, a, i) {
  const u = n.all(a), s = i ? EE(i) : iy(a), f = {}, d = [];
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
  const g = u[u.length - 1];
  g && (s || g.type !== "element" || g.tagName !== "p") && d.push({ type: "text", value: `
` });
  const h = { type: "element", tagName: "li", properties: f, children: d };
  return n.patch(a, h), n.applyData(a, h);
}
function EE(n) {
  let a = !1;
  if (n.type === "list") {
    a = n.spread || !1;
    const i = n.children;
    let u = -1;
    for (; !a && ++u < i.length; )
      a = iy(i[u]);
  }
  return a;
}
function iy(n) {
  const a = n.spread;
  return a ?? n.children.length > 1;
}
function wE(n, a) {
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
function TE(n, a) {
  const i = {
    type: "element",
    tagName: "p",
    properties: {},
    children: n.all(a)
  };
  return n.patch(a, i), n.applyData(a, i);
}
function AE(n, a) {
  const i = { type: "root", children: n.wrap(n.all(a)) };
  return n.patch(a, i), n.applyData(a, i);
}
function kE(n, a) {
  const i = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: n.all(a)
  };
  return n.patch(a, i), n.applyData(a, i);
}
function CE(n, a) {
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
    }, p = Qc(a.children[1]), g = qg(a.children[a.children.length - 1]);
    p && g && (d.position = { start: p, end: g }), s.push(d);
  }
  const f = {
    type: "element",
    tagName: "table",
    properties: {},
    children: n.wrap(s, !0)
  };
  return n.patch(a, f), n.applyData(a, f);
}
function _E(n, a, i) {
  const u = i ? i.children : void 0, f = (u ? u.indexOf(a) : 1) === 0 ? "th" : "td", d = i && i.type === "table" ? i.align : void 0, p = d ? d.length : a.children.length;
  let g = -1;
  const h = [];
  for (; ++g < p; ) {
    const x = a.children[g], w = {}, S = d ? d[g] : void 0;
    S && (w.align = S);
    let C = { type: "element", tagName: f, properties: w, children: [] };
    x && (C.children = n.all(x), n.patch(x, C), C = n.applyData(x, C)), h.push(C);
  }
  const m = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: n.wrap(h, !0)
  };
  return n.patch(a, m), n.applyData(a, m);
}
function RE(n, a) {
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
function OE(n) {
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
function zE(n, a) {
  const i = { type: "text", value: OE(String(a.value)) };
  return n.patch(a, i), n.applyData(a, i);
}
function NE(n, a) {
  const i = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return n.patch(a, i), n.applyData(a, i);
}
const ME = {
  blockquote: oE,
  break: sE,
  code: cE,
  delete: fE,
  emphasis: dE,
  footnoteReference: hE,
  heading: pE,
  html: mE,
  imageReference: gE,
  image: yE,
  inlineCode: bE,
  linkReference: vE,
  link: xE,
  listItem: SE,
  list: wE,
  paragraph: TE,
  // @ts-expect-error: root is different, but hard to type.
  root: AE,
  strong: kE,
  table: CE,
  tableCell: RE,
  tableRow: _E,
  text: zE,
  thematicBreak: NE,
  toml: cu,
  yaml: cu,
  definition: cu,
  footnoteDefinition: cu
};
function cu() {
}
const uy = -1, Tu = 0, Yr = 1, vu = 2, Pc = 3, $c = 4, Wc = 5, ef = 6, oy = 7, sy = 8, Bm = typeof self == "object" ? self : globalThis, DE = (n, a) => {
  const i = (s, f) => (n.set(f, s), s), u = (s) => {
    if (n.has(s))
      return n.get(s);
    const [f, d] = a[s];
    switch (f) {
      case Tu:
      case uy:
        return i(d, s);
      case Yr: {
        const p = i([], s);
        for (const g of d)
          p.push(u(g));
        return p;
      }
      case vu: {
        const p = i({}, s);
        for (const [g, h] of d)
          p[u(g)] = u(h);
        return p;
      }
      case Pc:
        return i(new Date(d), s);
      case $c: {
        const { source: p, flags: g } = d;
        return i(new RegExp(p, g), s);
      }
      case Wc: {
        const p = i(/* @__PURE__ */ new Map(), s);
        for (const [g, h] of d)
          p.set(u(g), u(h));
        return p;
      }
      case ef: {
        const p = i(/* @__PURE__ */ new Set(), s);
        for (const g of d)
          p.add(u(g));
        return p;
      }
      case oy: {
        const { name: p, message: g } = d;
        return i(new Bm[p](g), s);
      }
      case sy:
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
}, Lm = (n) => DE(/* @__PURE__ */ new Map(), n)(0), wa = "", { toString: UE } = {}, { keys: BE } = Object, Lr = (n) => {
  const a = typeof n;
  if (a !== "object" || !n)
    return [Tu, a];
  const i = UE.call(n).slice(8, -1);
  switch (i) {
    case "Array":
      return [Yr, wa];
    case "Object":
      return [vu, wa];
    case "Date":
      return [Pc, wa];
    case "RegExp":
      return [$c, wa];
    case "Map":
      return [Wc, wa];
    case "Set":
      return [ef, wa];
    case "DataView":
      return [Yr, i];
  }
  return i.includes("Array") ? [Yr, i] : i.includes("Error") ? [oy, i] : [vu, i];
}, fu = ([n, a]) => n === Tu && (a === "function" || a === "symbol"), LE = (n, a, i, u) => {
  const s = (d, p) => {
    const g = u.push(d) - 1;
    return i.set(p, g), g;
  }, f = (d) => {
    if (i.has(d))
      return i.get(d);
    let [p, g] = Lr(d);
    switch (p) {
      case Tu: {
        let m = d;
        switch (g) {
          case "bigint":
            p = sy, m = d.toString();
            break;
          case "function":
          case "symbol":
            if (n)
              throw new TypeError("unable to serialize " + g);
            m = null;
            break;
          case "undefined":
            return s([uy], d);
        }
        return s([p, m], d);
      }
      case Yr: {
        if (g) {
          let w = d;
          return g === "DataView" ? w = new Uint8Array(d.buffer) : g === "ArrayBuffer" && (w = new Uint8Array(d)), s([g, [...w]], d);
        }
        const m = [], x = s([p, m], d);
        for (const w of d)
          m.push(f(w));
        return x;
      }
      case vu: {
        if (g)
          switch (g) {
            case "BigInt":
              return s([g, d.toString()], d);
            case "Boolean":
            case "Number":
            case "String":
              return s([g, d.valueOf()], d);
          }
        if (a && "toJSON" in d)
          return f(d.toJSON());
        const m = [], x = s([p, m], d);
        for (const w of BE(d))
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
    return s([p, { name: g, message: h }], d);
  };
  return f;
}, jm = (n, { json: a, lossy: i } = {}) => {
  const u = [];
  return LE(!(a || i), !!a, /* @__PURE__ */ new Map(), u)(n), u;
}, xu = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (n, a) => a && ("json" in a || "lossy" in a) ? Lm(jm(n, a)) : structuredClone(n)
) : (n, a) => Lm(jm(n, a));
function jE(n, a) {
  const i = [{ type: "text", value: "↩" }];
  return a > 1 && i.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(a) }]
  }), i;
}
function HE(n, a) {
  return "Back to reference " + (n + 1) + (a > 1 ? "-" + a : "");
}
function qE(n) {
  const a = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", i = n.options.footnoteBackContent || jE, u = n.options.footnoteBackLabel || HE, s = n.options.footnoteLabel || "Footnotes", f = n.options.footnoteLabelTagName || "h2", d = n.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, p = [];
  let g = -1;
  for (; ++g < n.footnoteOrder.length; ) {
    const h = n.footnoteById.get(
      n.footnoteOrder[g]
    );
    if (!h)
      continue;
    const m = n.all(h), x = String(h.identifier).toUpperCase(), w = Ra(x.toLowerCase());
    let S = 0;
    const C = [], R = n.footnoteCounts.get(x);
    for (; R !== void 0 && ++S <= R; ) {
      C.length > 0 && C.push({ type: "text", value: " " });
      let J = typeof i == "string" ? i : i(g, S);
      typeof J == "string" && (J = { type: "text", value: J }), C.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + a + "fnref-" + w + (S > 1 ? "-" + S : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof u == "string" ? u : u(g, S),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(J) ? J : [J]
      });
    }
    const B = m[m.length - 1];
    if (B && B.type === "element" && B.tagName === "p") {
      const J = B.children[B.children.length - 1];
      J && J.type === "text" ? J.value += " " : B.children.push({ type: "text", value: " " }), B.children.push(...C);
    } else
      m.push(...C);
    const U = {
      type: "element",
      tagName: "li",
      properties: { id: a + "fn-" + w },
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
const cy = (
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
      return QE;
    if (typeof n == "function")
      return Au(n);
    if (typeof n == "object")
      return Array.isArray(n) ? VE(n) : YE(n);
    if (typeof n == "string")
      return GE(n);
    throw new Error("Expected function, string, or object as test");
  }
);
function VE(n) {
  const a = [];
  let i = -1;
  for (; ++i < n.length; )
    a[i] = cy(n[i]);
  return Au(u);
  function u(...s) {
    let f = -1;
    for (; ++f < a.length; )
      if (a[f].apply(this, s)) return !0;
    return !1;
  }
}
function YE(n) {
  const a = (
    /** @type {Record<string, unknown>} */
    n
  );
  return Au(i);
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
function GE(n) {
  return Au(a);
  function a(i) {
    return i && i.type === n;
  }
}
function Au(n) {
  return a;
  function a(i, u, s) {
    return !!(XE(i) && n.call(
      this,
      i,
      typeof u == "number" ? u : void 0,
      s || void 0
    ));
  }
}
function QE() {
  return !0;
}
function XE(n) {
  return n !== null && typeof n == "object" && "type" in n;
}
const fy = [], KE = !0, Hm = !1, ZE = "skip";
function FE(n, a, i, u) {
  let s;
  typeof a == "function" && typeof i != "function" ? (u = i, i = a) : s = a;
  const f = cy(s), d = u ? -1 : 1;
  p(n, void 0, [])();
  function p(g, h, m) {
    const x = (
      /** @type {Record<string, unknown>} */
      g && typeof g == "object" ? g : {}
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
        value: "node (" + (g.type + (S ? "<" + S + ">" : "")) + ")"
      });
    }
    return w;
    function w() {
      let S = fy, C, R, B;
      if ((!a || f(g, h, m[m.length - 1] || void 0)) && (S = IE(i(g, m)), S[0] === Hm))
        return S;
      if ("children" in g && g.children) {
        const U = (
          /** @type {UnistParent} */
          g
        );
        if (U.children && S[0] !== ZE)
          for (R = (u ? U.children.length : -1) + d, B = m.concat(U); R > -1 && R < U.children.length; ) {
            const J = U.children[R];
            if (C = p(J, R, B)(), C[0] === Hm)
              return C;
            R = typeof C[1] == "number" ? C[1] : R + d;
          }
      }
      return S;
    }
  }
}
function IE(n) {
  return Array.isArray(n) ? n : typeof n == "number" ? [KE, n] : n == null ? fy : [n];
}
function dy(n, a, i, u) {
  let s, f, d;
  typeof a == "function" && typeof i != "function" ? (f = void 0, d = a, s = i) : (f = a, d = i, s = u), FE(n, f, p, s);
  function p(g, h) {
    const m = h[h.length - 1], x = m ? m.children.indexOf(g) : void 0;
    return d(g, x, m);
  }
}
const Oc = {}.hasOwnProperty, JE = {};
function PE(n, a) {
  const i = a || JE, u = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), d = { ...ME, ...i.handlers }, p = {
    all: h,
    applyData: WE,
    definitionById: u,
    footnoteById: s,
    footnoteCounts: f,
    footnoteOrder: [],
    handlers: d,
    one: g,
    options: i,
    patch: $E,
    wrap: tw
  };
  return dy(n, function(m) {
    if (m.type === "definition" || m.type === "footnoteDefinition") {
      const x = m.type === "definition" ? u : s, w = String(m.identifier).toUpperCase();
      x.has(w) || x.set(w, m);
    }
  }), p;
  function g(m, x) {
    const w = m.type, S = p.handlers[w];
    if (Oc.call(p.handlers, w) && S)
      return S(p, m, x);
    if (p.options.passThrough && p.options.passThrough.includes(w)) {
      if ("children" in m) {
        const { children: R, ...B } = m, U = xu(B);
        return U.children = p.all(m), U;
      }
      return xu(m);
    }
    return (p.options.unknownHandler || ew)(p, m, x);
  }
  function h(m) {
    const x = [];
    if ("children" in m) {
      const w = m.children;
      let S = -1;
      for (; ++S < w.length; ) {
        const C = p.one(w[S], m);
        if (C) {
          if (S && w[S - 1].type === "break" && (!Array.isArray(C) && C.type === "text" && (C.value = qm(C.value)), !Array.isArray(C) && C.type === "element")) {
            const R = C.children[0];
            R && R.type === "text" && (R.value = qm(R.value));
          }
          Array.isArray(C) ? x.push(...C) : x.push(C);
        }
      }
    }
    return x;
  }
}
function $E(n, a) {
  n.position && (a.position = Uv(n));
}
function WE(n, a) {
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
    i.type === "element" && f && Object.assign(i.properties, xu(f)), "children" in i && i.children && s !== null && s !== void 0 && (i.children = s);
  }
  return i;
}
function ew(n, a) {
  const i = a.data || {}, u = "value" in a && !(Oc.call(i, "hProperties") || Oc.call(i, "hChildren")) ? { type: "text", value: a.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: n.all(a)
  };
  return n.patch(a, u), n.applyData(a, u);
}
function tw(n, a) {
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
  const i = PE(n, a), u = i.one(n, void 0), s = qE(i), f = Array.isArray(u) ? { type: "root", children: u } : u || { type: "root", children: [] };
  return s && f.children.push({ type: "text", value: `
` }, s), f;
}
function nw(n, a) {
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
var oc, Gm;
function lw() {
  if (Gm) return oc;
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
  return oc = function g() {
    var h, m, x, w, S, C, R = arguments[0], B = 1, U = arguments.length, J = !1;
    for (typeof R == "boolean" && (J = R, R = arguments[1] || {}, B = 2), (R == null || typeof R != "object" && typeof R != "function") && (R = {}); B < U; ++B)
      if (h = arguments[B], h != null)
        for (m in h)
          x = p(R, m), w = p(h, m), R !== w && (J && w && (f(w) || (S = s(w))) ? (S ? (S = !1, C = x && s(x) ? x : []) : C = x && f(x) ? x : {}, d(R, { name: m, newValue: g(J, C, w) })) : typeof w < "u" && d(R, { name: m, newValue: w }));
    return R;
  }, oc;
}
var aw = lw();
const sc = /* @__PURE__ */ Hc(aw);
function zc(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const a = Object.getPrototypeOf(n);
  return (a === null || a === Object.prototype || Object.getPrototypeOf(a) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}
function rw() {
  const n = [], a = { run: i, use: u };
  return a;
  function i(...s) {
    let f = -1;
    const d = s.pop();
    if (typeof d != "function")
      throw new TypeError("Expected function as last argument, not " + d);
    p(null, ...s);
    function p(g, ...h) {
      const m = n[++f];
      let x = -1;
      if (g) {
        d(g);
        return;
      }
      for (; ++x < s.length; )
        (h[x] === null || h[x] === void 0) && (h[x] = s[x]);
      s = h, m ? iw(m, p)(...h) : d(null, ...h);
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
function iw(n, a) {
  let i;
  return u;
  function u(...d) {
    const p = n.length > d.length;
    let g;
    p && d.push(s);
    try {
      g = n.apply(this, d);
    } catch (h) {
      const m = (
        /** @type {Error} */
        h
      );
      if (p && i)
        throw m;
      return s(m);
    }
    p || (g && g.then && typeof g.then == "function" ? g.then(f, s) : g instanceof Error ? s(g) : f(g));
  }
  function s(d, ...p) {
    i || (i = !0, a(d, ...p));
  }
  function f(d) {
    s(null, d);
  }
}
const yn = { basename: uw, dirname: ow, extname: sw, join: cw, sep: "/" };
function uw(n, a) {
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
function ow(n) {
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
function sw(n) {
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
function cw(...n) {
  let a = -1, i;
  for (; ++a < n.length; )
    Kr(n[a]), n[a] && (i = i === void 0 ? n[a] : i + "/" + n[a]);
  return i === void 0 ? "." : fw(i);
}
function fw(n) {
  Kr(n);
  const a = n.codePointAt(0) === 47;
  let i = dw(n, !a);
  return i.length === 0 && !a && (i = "."), i.length > 0 && n.codePointAt(n.length - 1) === 47 && (i += "/"), a ? "/" + i : i;
}
function dw(n, a) {
  let i = "", u = 0, s = -1, f = 0, d = -1, p, g;
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
            if (g = i.lastIndexOf("/"), g !== i.length - 1) {
              g < 0 ? (i = "", u = 0) : (i = i.slice(0, g), u = i.length - 1 - i.lastIndexOf("/")), s = d, f = 0;
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
const hw = { cwd: pw };
function pw() {
  return "/";
}
function Nc(n) {
  return !!(n !== null && typeof n == "object" && "href" in n && n.href && "protocol" in n && n.protocol && // @ts-expect-error: indexing is fine.
  n.auth === void 0);
}
function mw(n) {
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
  return gw(n);
}
function gw(n) {
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
class hy {
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
    a ? Nc(a) ? i = { path: a } : typeof a == "string" || yw(a) ? i = { value: a } : i = a : i = {}, this.cwd = "cwd" in i ? "" : hw.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let u = -1;
    for (; ++u < cc.length; ) {
      const f = cc[u];
      f in i && i[f] !== void 0 && i[f] !== null && (this[f] = f === "history" ? [...i[f]] : i[f]);
    }
    let s;
    for (s in i)
      cc.includes(s) || (this[s] = i[s]);
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
  set basename(a) {
    dc(a, "basename"), fc(a, "basename"), this.path = yn.join(this.dirname || "", a);
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
  set dirname(a) {
    Qm(this.basename, "dirname"), this.path = yn.join(a || "", this.basename);
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
  set extname(a) {
    if (fc(a, "extname"), Qm(this.dirname, "extname"), a) {
      if (a.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (a.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = yn.join(this.dirname, this.stem + (a || ""));
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
    Nc(a) && (a = mw(a)), dc(a, "path"), this.path !== a && this.history.push(a);
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
  set stem(a) {
    dc(a, "stem"), fc(a, "stem"), this.path = yn.join(this.dirname || "", a + (this.extname || ""));
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
function fc(n, a) {
  if (n && n.includes(yn.sep))
    throw new Error(
      "`" + a + "` cannot be a path: did not expect `" + yn.sep + "`"
    );
}
function dc(n, a) {
  if (!n)
    throw new Error("`" + a + "` cannot be empty");
}
function Qm(n, a) {
  if (!n)
    throw new Error("Setting `" + a + "` requires `path` to be set too");
}
function yw(n) {
  return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
}
const bw = (
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
), vw = {}.hasOwnProperty;
class tf extends bw {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = rw();
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
    return a.data(sc(!0, {}, this.namespace)), a;
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
    return typeof a == "string" ? arguments.length === 2 ? (mc("data", this.frozen), this.namespace[a] = i, this) : vw.call(this.namespace, a) && this.namespace[a] || void 0 : a ? (mc("data", this.frozen), this.namespace = a, this) : this.namespace;
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
    return hc("parse", u), u(String(i), i);
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
    return this.freeze(), hc("process", this.parser || this.Parser), pc("process", this.compiler || this.Compiler), i ? s(void 0, i) : new Promise(s);
    function s(f, d) {
      const p = du(a), g = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        u.parse(p)
      );
      u.run(g, p, function(m, x, w) {
        if (m || !x || !w)
          return h(m);
        const S = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          x
        ), C = u.stringify(S, w);
        Ew(C) ? w.value = C : w.result = C, h(
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
    return this.freeze(), hc("processSync", this.parser || this.Parser), pc("processSync", this.compiler || this.Compiler), this.process(a, s), Km("processSync", "process", i), u;
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
      const g = du(i);
      s.run(a, g, h);
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
    return pc("stringify", s), Xm(a), s(a, u);
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
    if (mc("use", this.frozen), a != null) if (typeof a == "function")
      g(a, i);
    else if (typeof a == "object")
      Array.isArray(a) ? p(a) : d(a);
    else
      throw new TypeError("Expected usable value, not `" + a + "`");
    return this;
    function f(h) {
      if (typeof h == "function")
        g(h, []);
      else if (typeof h == "object")
        if (Array.isArray(h)) {
          const [m, ...x] = (
            /** @type {PluginTuple<Array<unknown>>} */
            h
          );
          g(m, x);
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
          const x = h[m];
          f(x);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + h + "`");
    }
    function g(h, m) {
      let x = -1, w = -1;
      for (; ++x < u.length; )
        if (u[x][0] === h) {
          w = x;
          break;
        }
      if (w === -1)
        u.push([h, ...m]);
      else if (m.length > 0) {
        let [S, ...C] = m;
        const R = u[w][1];
        zc(R) && zc(S) && (S = sc(!0, R, S)), u[w] = [h, S, ...C];
      }
    }
  }
}
const xw = new tf().freeze();
function hc(n, a) {
  if (typeof a != "function")
    throw new TypeError("Cannot `" + n + "` without `parser`");
}
function pc(n, a) {
  if (typeof a != "function")
    throw new TypeError("Cannot `" + n + "` without `compiler`");
}
function mc(n, a) {
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
  return Sw(n) ? n : new hy(n);
}
function Sw(n) {
  return !!(n && typeof n == "object" && "message" in n && "messages" in n);
}
function Ew(n) {
  return typeof n == "string" || ww(n);
}
function ww(n) {
  return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
}
const Tw = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Zm = [], Fm = { allowDangerousHtml: !0 }, Aw = /^(https?|ircs?|mailto|xmpp)$/i, kw = [
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
function Cw(n) {
  const a = _w(n), i = Rw(n);
  return Ow(a.runSync(a.parse(i), i), n);
}
function _w(n) {
  const a = n.rehypePlugins || Zm, i = n.remarkPlugins || Zm, u = n.remarkRehypeOptions ? { ...n.remarkRehypeOptions, ...Fm } : Fm;
  return xw().use(uE).use(i).use(nw, u).use(a);
}
function Rw(n) {
  const a = n.children || "", i = new hy();
  return typeof a == "string" && (i.value = a), i;
}
function Ow(n, a) {
  const i = a.allowedElements, u = a.allowElement, s = a.components, f = a.disallowedElements, d = a.skipHtml, p = a.unwrapDisallowed, g = a.urlTransform || zw;
  for (const m of kw)
    Object.hasOwn(a, m.from) && ("" + m.from + (m.to ? "use `" + m.to + "` instead" : "remove it") + Tw + m.id, void 0);
  return dy(n, h), qv(n, {
    Fragment: Z.Fragment,
    components: s,
    ignoreInvalidStyle: !0,
    jsx: Z.jsx,
    jsxs: Z.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function h(m, x, w) {
    if (m.type === "raw" && w && typeof x == "number")
      return d ? w.children.splice(x, 1) : w.children[x] = { type: "text", value: m.value }, x;
    if (m.type === "element") {
      let S;
      for (S in rc)
        if (Object.hasOwn(rc, S) && Object.hasOwn(m.properties, S)) {
          const C = m.properties[S], R = rc[S];
          (R === null || R.includes(m.tagName)) && (m.properties[S] = g(String(C || ""), S, m));
        }
    }
    if (m.type === "element") {
      let S = i ? !i.includes(m.tagName) : f ? f.includes(m.tagName) : !1;
      if (!S && u && typeof x == "number" && (S = !u(m, x, w)), S && w && typeof x == "number")
        return p && m.children ? w.children.splice(x, 1, ...m.children) : w.children.splice(x, 1), x;
    }
  }
}
function zw(n) {
  const a = n.indexOf(":"), i = n.indexOf("?"), u = n.indexOf("#"), s = n.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    a === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    s !== -1 && a > s || i !== -1 && a > i || u !== -1 && a > u || // It is a protocol, it should be allowed.
    Aw.test(n.slice(0, a)) ? n : ""
  );
}
function Nw({ content: n, className: a = "" }) {
  return /* @__PURE__ */ Z.jsx("div", { className: `prose prose-sm max-w-none dark:prose-invert ${a}`, children: /* @__PURE__ */ Z.jsx(
    Cw,
    {
      components: {
        // Custom styling for markdown elements
        p: ({ children: i }) => /* @__PURE__ */ Z.jsx("p", { className: "mb-2 last:mb-0", children: i }),
        ul: ({ children: i }) => /* @__PURE__ */ Z.jsx("ul", { className: "list-disc list-inside mb-2 space-y-1", children: i }),
        ol: ({ children: i }) => /* @__PURE__ */ Z.jsx("ol", { className: "list-decimal list-inside mb-2 space-y-1", children: i }),
        li: ({ children: i }) => /* @__PURE__ */ Z.jsx("li", { className: "text-sm", children: i }),
        strong: ({ children: i }) => /* @__PURE__ */ Z.jsx("strong", { className: "font-semibold", children: i }),
        em: ({ children: i }) => /* @__PURE__ */ Z.jsx("em", { className: "italic", children: i }),
        code: ({ children: i }) => /* @__PURE__ */ Z.jsx("code", { className: "bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-xs font-mono", children: i }),
        pre: ({ children: i }) => /* @__PURE__ */ Z.jsx("pre", { className: "bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-x-auto", children: i }),
        h1: ({ children: i }) => /* @__PURE__ */ Z.jsx("h1", { className: "text-lg font-bold mb-2", children: i }),
        h2: ({ children: i }) => /* @__PURE__ */ Z.jsx("h2", { className: "text-base font-bold mb-2", children: i }),
        h3: ({ children: i }) => /* @__PURE__ */ Z.jsx("h3", { className: "text-sm font-bold mb-1", children: i }),
        a: ({ children: i, href: u }) => /* @__PURE__ */ Z.jsx(
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
function Mw({ message: n, isUser: a, timestamp: i, onStreamingChange: u, skipStreaming: s, companyTheme: f, isLastAiMessage: d }) {
  const [p, g] = ge.useState(""), [h, m] = ge.useState(!1), [x, w] = ge.useState(!1), S = async (C) => {
    const R = C.split(" ");
    let B = "";
    m(!0), u?.(!0), g("");
    for (let U = 0; U < R.length; U++)
      B += R[U] + " ", g(B.trim()), U === R.length - 1 && (m(!1), u?.(!1)), await new Promise((J) => setTimeout(J, 100));
  };
  return ge.useEffect(() => {
    const C = setTimeout(() => {
      w(!0);
    }, 500);
    return () => clearTimeout(C);
  }, []), ge.useEffect(() => {
    !a && !s && x && d ? setTimeout(() => {
      S(n);
    }, 1e3) : !a && !s && !x && d ? (m(!0), u?.(!0), g("")) : (m(!1), u?.(!1), g(""));
  }, [n, a, s, x, d]), /* @__PURE__ */ Z.jsxs("div", { className: bn("flex gap-3 max-w-[98%] mx-auto px-4 py-6", a ? "flex-row-reverse" : "flex-row"), children: [
    /* @__PURE__ */ Z.jsx(
      "div",
      {
        className: bn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
          a ? "text-white" : "text-gray-600 dark:text-gray-400"
        ),
        style: { backgroundColor: a ? f?.primaryColor : f?.backgroundColor },
        children: a ? /* @__PURE__ */ Z.jsx(z1, { className: "w-4 h-4" }) : /* @__PURE__ */ Z.jsx(yg, { className: "w-4 h-4" })
      }
    ),
    /* @__PURE__ */ Z.jsxs("div", { className: bn("flex-1 space-y-2", a ? "text-right" : "text-left"), children: [
      /* @__PURE__ */ Z.jsx(
        "div",
        {
          className: bn(
            "inline-block max-w-[98%] px-4 py-3 rounded-2xl text-sm leading-relaxed",
            a ? "text-white rounded-br-md" : "text-gray-900 dark:text-gray-100 rounded-bl-md"
          ),
          style: { backgroundColor: a ? f?.primaryColor : f?.backgroundColor },
          children: /* @__PURE__ */ Z.jsx(
            Nw,
            {
              content: !a && h && !s && d ? p : n
            }
          )
        }
      ),
      i && /* @__PURE__ */ Z.jsx(
        "div",
        {
          className: bn("text-xs text-gray-500 dark:text-gray-400 px-2", a ? "text-right" : "text-left"),
          children: i
        }
      )
    ] })
  ] });
}
function Dw({ companyTheme: n }) {
  return /* @__PURE__ */ Z.jsxs("div", { className: "flex gap-3 max-w-4xl mx-auto px-4 py-6", children: [
    /* @__PURE__ */ Z.jsx(
      "div",
      {
        className: "flex-shrink-0 w-8 h-8 rounded-full text-gray-600 dark:text-gray-400 flex items-center justify-center",
        style: { backgroundColor: n?.backgroundColor || "#f3f4f6" },
        children: /* @__PURE__ */ Z.jsx(yg, { className: "w-4 h-4" })
      }
    ),
    /* @__PURE__ */ Z.jsx("div", { className: "flex-1", children: /* @__PURE__ */ Z.jsx("div", { className: "inline-block bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-md", children: /* @__PURE__ */ Z.jsxs("div", { className: "flex space-x-1", children: [
      /* @__PURE__ */ Z.jsx("div", { className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce" }),
      /* @__PURE__ */ Z.jsx(
        "div",
        {
          className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce",
          style: { animationDelay: "0.1s" }
        }
      ),
      /* @__PURE__ */ Z.jsx(
        "div",
        {
          className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce",
          style: { animationDelay: "0.2s" }
        }
      )
    ] }) }) })
  ] });
}
function Im(n, a) {
  if (typeof n == "function")
    return n(a);
  n != null && (n.current = a);
}
function Uw(...n) {
  return (a) => {
    let i = !1;
    const u = n.map((s) => {
      const f = Im(s, a);
      return !i && typeof f == "function" && (i = !0), f;
    });
    if (i)
      return () => {
        for (let s = 0; s < u.length; s++) {
          const f = u[s];
          typeof f == "function" ? f() : Im(n[s], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function Bw(n) {
  const a = /* @__PURE__ */ jw(n), i = ge.forwardRef((u, s) => {
    const { children: f, ...d } = u, p = ge.Children.toArray(f), g = p.find(qw);
    if (g) {
      const h = g.props.children, m = p.map((x) => x === g ? ge.Children.count(h) > 1 ? ge.Children.only(null) : ge.isValidElement(h) ? h.props.children : null : x);
      return /* @__PURE__ */ Z.jsx(a, { ...d, ref: s, children: ge.isValidElement(h) ? ge.cloneElement(h, void 0, m) : null });
    }
    return /* @__PURE__ */ Z.jsx(a, { ...d, ref: s, children: f });
  });
  return i.displayName = `${n}.Slot`, i;
}
var Lw = /* @__PURE__ */ Bw("Slot");
// @__NO_SIDE_EFFECTS__
function jw(n) {
  const a = ge.forwardRef((i, u) => {
    const { children: s, ...f } = i;
    if (ge.isValidElement(s)) {
      const d = Yw(s), p = Vw(f, s.props);
      return s.type !== ge.Fragment && (p.ref = u ? Uw(u, d) : d), ge.cloneElement(s, p);
    }
    return ge.Children.count(s) > 1 ? ge.Children.only(null) : null;
  });
  return a.displayName = `${n}.SlotClone`, a;
}
var Hw = Symbol("radix.slottable");
function qw(n) {
  return ge.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === Hw;
}
function Vw(n, a) {
  const i = { ...a };
  for (const u in a) {
    const s = n[u], f = a[u];
    /^on[A-Z]/.test(u) ? s && f ? i[u] = (...p) => {
      const g = f(...p);
      return s(...p), g;
    } : s && (i[u] = s) : u === "style" ? i[u] = { ...s, ...f } : u === "className" && (i[u] = [s, f].filter(Boolean).join(" "));
  }
  return { ...n, ...i };
}
function Yw(n) {
  let a = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, i = a && "isReactWarning" in a && a.isReactWarning;
  return i ? n.ref : (a = Object.getOwnPropertyDescriptor(n, "ref")?.get, i = a && "isReactWarning" in a && a.isReactWarning, i ? n.props.ref : n.props.ref || n.ref);
}
const Jm = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n, Pm = Sg, Gw = (n, a) => (i) => {
  var u;
  if (a?.variants == null) return Pm(n, i?.class, i?.className);
  const { variants: s, defaultVariants: f } = a, d = Object.keys(s).map((h) => {
    const m = i?.[h], x = f?.[h];
    if (m === null) return null;
    const w = Jm(m) || Jm(x);
    return s[h][w];
  }), p = i && Object.entries(i).reduce((h, m) => {
    let [x, w] = m;
    return w === void 0 || (h[x] = w), h;
  }, {}), g = a == null || (u = a.compoundVariants) === null || u === void 0 ? void 0 : u.reduce((h, m) => {
    let { class: x, className: w, ...S } = m;
    return Object.entries(S).every((C) => {
      let [R, B] = C;
      return Array.isArray(B) ? B.includes({
        ...f,
        ...p
      }[R]) : {
        ...f,
        ...p
      }[R] === B;
    }) ? [
      ...h,
      x,
      w
    ] : h;
  }, []);
  return Pm(n, d, g, i?.class, i?.className);
}, Qw = Gw(
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
function py({
  className: n,
  variant: a,
  size: i,
  asChild: u = !1,
  ...s
}) {
  const f = u ? Lw : "button";
  return /* @__PURE__ */ Z.jsx(
    f,
    {
      "data-slot": "button",
      className: bn(Qw({ variant: a, size: i, className: n })),
      ...s
    }
  );
}
function Xw({ className: n, ...a }) {
  return /* @__PURE__ */ Z.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: bn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        n
      ),
      ...a
    }
  );
}
function Kw({ onSendMessage: n, isLoading: a = !1, placeholder: i = "Type your message...", companyTheme: u }) {
  const [s, f] = ge.useState(""), d = (h) => {
    h.preventDefault(), s.trim() && !a && (n(s.trim()), f(""));
  }, p = (h) => {
    h.key === "Enter" && !h.shiftKey && (h.preventDefault(), d(h));
  }, g = u?.primaryColor ? Ng(u.primaryColor, 20) : void 0;
  return /* @__PURE__ */ Z.jsx("div", { className: "border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900", children: /* @__PURE__ */ Z.jsxs("div", { className: "max-w-4xl mx-auto p-4", children: [
    /* @__PURE__ */ Z.jsxs("form", { onSubmit: d, className: "relative", children: [
      /* @__PURE__ */ Z.jsx(
        Xw,
        {
          value: s,
          onChange: (h) => f(h.target.value),
          onKeyDown: p,
          placeholder: i,
          disabled: a,
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
      /* @__PURE__ */ Z.jsxs(
        py,
        {
          type: "submit",
          size: "sm",
          disabled: !s.trim() || a,
          className: bn(
            "absolute right-1 bottom-2 h-8 w-8 p-0",
            "disabled:bg-gray-300 dark:disabled:bg-gray-600",
            "transition-all duration-200 ease-in-out",
            "hover:scale-105 focus:scale-105",
            "focus:outline-none focus:ring-2 focus:ring-offset-2"
          ),
          style: {
            backgroundColor: u?.primaryColor,
            "--hover-bg-color": g
          },
          onMouseEnter: (h) => {
            g && (h.currentTarget.style.backgroundColor = g);
          },
          onMouseLeave: (h) => {
            u?.primaryColor && (h.currentTarget.style.backgroundColor = u.primaryColor);
          },
          onFocus: (h) => {
            g && (h.currentTarget.style.backgroundColor = g);
          },
          onBlur: (h) => {
            u?.primaryColor && (h.currentTarget.style.backgroundColor = u.primaryColor);
          },
          children: [
            a ? /* @__PURE__ */ Z.jsx(vg, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ Z.jsx(C1, { className: "h-4 w-4 text-white" }),
            /* @__PURE__ */ Z.jsx("span", { className: "sr-only", children: "Send message" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ Z.jsx("div", { className: "mt-2 text-xs text-gray-500 dark:text-gray-400 text-center", children: "Press Enter to send, Shift + Enter for new line" })
  ] }) });
}
function Zw(n, a) {
  return n.replace(/\{(\w+)\}/g, (i, u) => a[u] ?? "");
}
const Fw = ge.createContext(void 0), $m = {
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
}, gc = {
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
function my() {
  const n = ge.useContext(Fw);
  if (n === void 0)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return n;
}
function Iw({ className: n = "", variant: a = "dropdown" }) {
  const { currentLanguage: i, setLanguage: u, isLanguageChanging: s } = my(), [f, d] = ge.useState(!1), p = (g) => {
    u(g), d(!1);
  };
  return a === "buttons" ? /* @__PURE__ */ Z.jsx("div", { className: `flex flex-wrap gap-1 ${n}`, children: Object.entries($m).map(([g, h]) => /* @__PURE__ */ Z.jsxs(
    "button",
    {
      onClick: () => p(g),
      disabled: s,
      className: `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${i === g ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"} ${s ? "opacity-50 cursor-not-allowed" : ""}`,
      children: [
        /* @__PURE__ */ Z.jsx("span", { className: "mr-2", children: gc[g] }),
        h
      ]
    },
    g
  )) }) : /* @__PURE__ */ Z.jsxs("div", { className: `relative ${n}`, children: [
    /* @__PURE__ */ Z.jsxs(
      "button",
      {
        onClick: () => d(!f),
        disabled: s,
        className: "flex items-center px-1 py-1 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
        children: [
          /* @__PURE__ */ Z.jsx(v1, { className: "h-4 w-4 mr-1" }),
          /* @__PURE__ */ Z.jsx("span", { className: "mr-1", children: gc[i] }),
          /* @__PURE__ */ Z.jsx(bg, { className: `h-4 w-4 ml-1 transition-transform ${f ? "rotate-180" : ""}` })
        ]
      }
    ),
    f && /* @__PURE__ */ Z.jsx("div", { className: "absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50", children: /* @__PURE__ */ Z.jsx("div", { className: "py-1", children: Object.entries($m).map(([g, h]) => /* @__PURE__ */ Z.jsxs(
      "button",
      {
        onClick: () => p(g),
        className: `w-full flex items-center px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${i === g ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : "text-gray-700 dark:text-gray-300"}`,
        children: [
          /* @__PURE__ */ Z.jsx("span", { className: "mr-3", children: gc[g] }),
          h
        ]
      },
      g
    )) }) }),
    f && /* @__PURE__ */ Z.jsx(
      "div",
      {
        className: "fixed inset-0 z-40",
        onClick: () => d(!1)
      }
    )
  ] });
}
function gy(n, a) {
  return function() {
    return n.apply(a, arguments);
  };
}
const { toString: Jw } = Object.prototype, { getPrototypeOf: nf } = Object, { iterator: ku, toStringTag: yy } = Symbol, Cu = /* @__PURE__ */ ((n) => (a) => {
  const i = Jw.call(a);
  return n[i] || (n[i] = i.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), on = (n) => (n = n.toLowerCase(), (a) => Cu(a) === n), _u = (n) => (a) => typeof a === n, { isArray: Oa } = Array, Qr = _u("undefined");
function Pw(n) {
  return n !== null && !Qr(n) && n.constructor !== null && !Qr(n.constructor) && Ot(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const by = on("ArrayBuffer");
function $w(n) {
  let a;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? a = ArrayBuffer.isView(n) : a = n && n.buffer && by(n.buffer), a;
}
const Ww = _u("string"), Ot = _u("function"), vy = _u("number"), Ru = (n) => n !== null && typeof n == "object", e2 = (n) => n === !0 || n === !1, gu = (n) => {
  if (Cu(n) !== "object")
    return !1;
  const a = nf(n);
  return (a === null || a === Object.prototype || Object.getPrototypeOf(a) === null) && !(yy in n) && !(ku in n);
}, t2 = on("Date"), n2 = on("File"), l2 = on("Blob"), a2 = on("FileList"), r2 = (n) => Ru(n) && Ot(n.pipe), i2 = (n) => {
  let a;
  return n && (typeof FormData == "function" && n instanceof FormData || Ot(n.append) && ((a = Cu(n)) === "formdata" || // detect form-data instance
  a === "object" && Ot(n.toString) && n.toString() === "[object FormData]"));
}, u2 = on("URLSearchParams"), [o2, s2, c2, f2] = ["ReadableStream", "Request", "Response", "Headers"].map(on), d2 = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Zr(n, a, { allOwnKeys: i = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let u, s;
  if (typeof n != "object" && (n = [n]), Oa(n))
    for (u = 0, s = n.length; u < s; u++)
      a.call(null, n[u], u, n);
  else {
    const f = i ? Object.getOwnPropertyNames(n) : Object.keys(n), d = f.length;
    let p;
    for (u = 0; u < d; u++)
      p = f[u], a.call(null, n[p], p, n);
  }
}
function xy(n, a) {
  a = a.toLowerCase();
  const i = Object.keys(n);
  let u = i.length, s;
  for (; u-- > 0; )
    if (s = i[u], a === s.toLowerCase())
      return s;
  return null;
}
const zl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Sy = (n) => !Qr(n) && n !== zl;
function Mc() {
  const { caseless: n } = Sy(this) && this || {}, a = {}, i = (u, s) => {
    const f = n && xy(a, s) || s;
    gu(a[f]) && gu(u) ? a[f] = Mc(a[f], u) : gu(u) ? a[f] = Mc({}, u) : Oa(u) ? a[f] = u.slice() : a[f] = u;
  };
  for (let u = 0, s = arguments.length; u < s; u++)
    arguments[u] && Zr(arguments[u], i);
  return a;
}
const h2 = (n, a, i, { allOwnKeys: u } = {}) => (Zr(a, (s, f) => {
  i && Ot(s) ? n[f] = gy(s, i) : n[f] = s;
}, { allOwnKeys: u }), n), p2 = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), m2 = (n, a, i, u) => {
  n.prototype = Object.create(a.prototype, u), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: a.prototype
  }), i && Object.assign(n.prototype, i);
}, g2 = (n, a, i, u) => {
  let s, f, d;
  const p = {};
  if (a = a || {}, n == null) return a;
  do {
    for (s = Object.getOwnPropertyNames(n), f = s.length; f-- > 0; )
      d = s[f], (!u || u(d, n, a)) && !p[d] && (a[d] = n[d], p[d] = !0);
    n = i !== !1 && nf(n);
  } while (n && (!i || i(n, a)) && n !== Object.prototype);
  return a;
}, y2 = (n, a, i) => {
  n = String(n), (i === void 0 || i > n.length) && (i = n.length), i -= a.length;
  const u = n.indexOf(a, i);
  return u !== -1 && u === i;
}, b2 = (n) => {
  if (!n) return null;
  if (Oa(n)) return n;
  let a = n.length;
  if (!vy(a)) return null;
  const i = new Array(a);
  for (; a-- > 0; )
    i[a] = n[a];
  return i;
}, v2 = /* @__PURE__ */ ((n) => (a) => n && a instanceof n)(typeof Uint8Array < "u" && nf(Uint8Array)), x2 = (n, a) => {
  const u = (n && n[ku]).call(n);
  let s;
  for (; (s = u.next()) && !s.done; ) {
    const f = s.value;
    a.call(n, f[0], f[1]);
  }
}, S2 = (n, a) => {
  let i;
  const u = [];
  for (; (i = n.exec(a)) !== null; )
    u.push(i);
  return u;
}, E2 = on("HTMLFormElement"), w2 = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(i, u, s) {
    return u.toUpperCase() + s;
  }
), Wm = (({ hasOwnProperty: n }) => (a, i) => n.call(a, i))(Object.prototype), T2 = on("RegExp"), Ey = (n, a) => {
  const i = Object.getOwnPropertyDescriptors(n), u = {};
  Zr(i, (s, f) => {
    let d;
    (d = a(s, f, n)) !== !1 && (u[f] = d || s);
  }), Object.defineProperties(n, u);
}, A2 = (n) => {
  Ey(n, (a, i) => {
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
}, k2 = (n, a) => {
  const i = {}, u = (s) => {
    s.forEach((f) => {
      i[f] = !0;
    });
  };
  return Oa(n) ? u(n) : u(String(n).split(a)), i;
}, C2 = () => {
}, _2 = (n, a) => n != null && Number.isFinite(n = +n) ? n : a;
function R2(n) {
  return !!(n && Ot(n.append) && n[yy] === "FormData" && n[ku]);
}
const O2 = (n) => {
  const a = new Array(10), i = (u, s) => {
    if (Ru(u)) {
      if (a.indexOf(u) >= 0)
        return;
      if (!("toJSON" in u)) {
        a[s] = u;
        const f = Oa(u) ? [] : {};
        return Zr(u, (d, p) => {
          const g = i(d, s + 1);
          !Qr(g) && (f[p] = g);
        }), a[s] = void 0, f;
      }
    }
    return u;
  };
  return i(n, 0);
}, z2 = on("AsyncFunction"), N2 = (n) => n && (Ru(n) || Ot(n)) && Ot(n.then) && Ot(n.catch), wy = ((n, a) => n ? setImmediate : a ? ((i, u) => (zl.addEventListener("message", ({ source: s, data: f }) => {
  s === zl && f === i && u.length && u.shift()();
}, !1), (s) => {
  u.push(s), zl.postMessage(i, "*");
}))(`axios@${Math.random()}`, []) : (i) => setTimeout(i))(
  typeof setImmediate == "function",
  Ot(zl.postMessage)
), M2 = typeof queueMicrotask < "u" ? queueMicrotask.bind(zl) : typeof process < "u" && process.nextTick || wy, D2 = (n) => n != null && Ot(n[ku]), D = {
  isArray: Oa,
  isArrayBuffer: by,
  isBuffer: Pw,
  isFormData: i2,
  isArrayBufferView: $w,
  isString: Ww,
  isNumber: vy,
  isBoolean: e2,
  isObject: Ru,
  isPlainObject: gu,
  isReadableStream: o2,
  isRequest: s2,
  isResponse: c2,
  isHeaders: f2,
  isUndefined: Qr,
  isDate: t2,
  isFile: n2,
  isBlob: l2,
  isRegExp: T2,
  isFunction: Ot,
  isStream: r2,
  isURLSearchParams: u2,
  isTypedArray: v2,
  isFileList: a2,
  forEach: Zr,
  merge: Mc,
  extend: h2,
  trim: d2,
  stripBOM: p2,
  inherits: m2,
  toFlatObject: g2,
  kindOf: Cu,
  kindOfTest: on,
  endsWith: y2,
  toArray: b2,
  forEachEntry: x2,
  matchAll: S2,
  isHTMLForm: E2,
  hasOwnProperty: Wm,
  hasOwnProp: Wm,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ey,
  freezeMethods: A2,
  toObjectSet: k2,
  toCamelCase: w2,
  noop: C2,
  toFiniteNumber: _2,
  findKey: xy,
  global: zl,
  isContextDefined: Sy,
  isSpecCompliantForm: R2,
  toJSONObject: O2,
  isAsyncFn: z2,
  isThenable: N2,
  setImmediate: wy,
  asap: M2,
  isIterable: D2
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
const Ty = we.prototype, Ay = {};
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
  Ay[n] = { value: n };
});
Object.defineProperties(we, Ay);
Object.defineProperty(Ty, "isAxiosError", { value: !0 });
we.from = (n, a, i, u, s, f) => {
  const d = Object.create(Ty);
  return D.toFlatObject(n, d, function(g) {
    return g !== Error.prototype;
  }, (p) => p !== "isAxiosError"), we.call(d, n.message, a, i, u, s), d.cause = n, d.name = n.name, f && Object.assign(d, f), d;
};
const U2 = null;
function Dc(n) {
  return D.isPlainObject(n) || D.isArray(n);
}
function ky(n) {
  return D.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function eg(n, a, i) {
  return n ? n.concat(a).map(function(s, f) {
    return s = ky(s), !i && f ? "[" + s + "]" : s;
  }).join(i ? "." : "") : a;
}
function B2(n) {
  return D.isArray(n) && !n.some(Dc);
}
const L2 = D.toFlatObject(D, {}, null, function(a) {
  return /^is[A-Z]/.test(a);
});
function Ou(n, a, i) {
  if (!D.isObject(n))
    throw new TypeError("target must be an object");
  a = a || new FormData(), i = D.toFlatObject(i, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(R, B) {
    return !D.isUndefined(B[R]);
  });
  const u = i.metaTokens, s = i.visitor || m, f = i.dots, d = i.indexes, g = (i.Blob || typeof Blob < "u" && Blob) && D.isSpecCompliantForm(a);
  if (!D.isFunction(s))
    throw new TypeError("visitor must be a function");
  function h(C) {
    if (C === null) return "";
    if (D.isDate(C))
      return C.toISOString();
    if (D.isBoolean(C))
      return C.toString();
    if (!g && D.isBlob(C))
      throw new we("Blob is not supported. Use a Buffer instead.");
    return D.isArrayBuffer(C) || D.isTypedArray(C) ? g && typeof Blob == "function" ? new Blob([C]) : Buffer.from(C) : C;
  }
  function m(C, R, B) {
    let U = C;
    if (C && !B && typeof C == "object") {
      if (D.endsWith(R, "{}"))
        R = u ? R : R.slice(0, -2), C = JSON.stringify(C);
      else if (D.isArray(C) && B2(C) || (D.isFileList(C) || D.endsWith(R, "[]")) && (U = D.toArray(C)))
        return R = ky(R), U.forEach(function(K, ce) {
          !(D.isUndefined(K) || K === null) && a.append(
            // eslint-disable-next-line no-nested-ternary
            d === !0 ? eg([R], ce, f) : d === null ? R : R + "[]",
            h(K)
          );
        }), !1;
    }
    return Dc(C) ? !0 : (a.append(eg(B, R, f), h(C)), !1);
  }
  const x = [], w = Object.assign(L2, {
    defaultVisitor: m,
    convertValue: h,
    isVisitable: Dc
  });
  function S(C, R) {
    if (!D.isUndefined(C)) {
      if (x.indexOf(C) !== -1)
        throw Error("Circular reference detected in " + R.join("."));
      x.push(C), D.forEach(C, function(U, J) {
        (!(D.isUndefined(U) || U === null) && s.call(
          a,
          U,
          D.isString(J) ? J.trim() : J,
          R,
          w
        )) === !0 && S(U, R ? R.concat(J) : [J]);
      }), x.pop();
    }
  }
  if (!D.isObject(n))
    throw new TypeError("data must be an object");
  return S(n), a;
}
function tg(n) {
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
  this._pairs = [], n && Ou(n, this, a);
}
const Cy = lf.prototype;
Cy.append = function(a, i) {
  this._pairs.push([a, i]);
};
Cy.toString = function(a) {
  const i = a ? function(u) {
    return a.call(this, u, tg);
  } : tg;
  return this._pairs.map(function(s) {
    return i(s[0]) + "=" + i(s[1]);
  }, "").join("&");
};
function j2(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function _y(n, a, i) {
  if (!a)
    return n;
  const u = i && i.encode || j2;
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
class ng {
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
const Ry = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, H2 = typeof URLSearchParams < "u" ? URLSearchParams : lf, q2 = typeof FormData < "u" ? FormData : null, V2 = typeof Blob < "u" ? Blob : null, Y2 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: H2,
    FormData: q2,
    Blob: V2
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, af = typeof window < "u" && typeof document < "u", Uc = typeof navigator == "object" && navigator || void 0, G2 = af && (!Uc || ["ReactNative", "NativeScript", "NS"].indexOf(Uc.product) < 0), Q2 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", X2 = af && window.location.href || "http://localhost", K2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: af,
  hasStandardBrowserEnv: G2,
  hasStandardBrowserWebWorkerEnv: Q2,
  navigator: Uc,
  origin: X2
}, Symbol.toStringTag, { value: "Module" })), bt = {
  ...K2,
  ...Y2
};
function Z2(n, a) {
  return Ou(n, new bt.classes.URLSearchParams(), Object.assign({
    visitor: function(i, u, s, f) {
      return bt.isNode && D.isBuffer(i) ? (this.append(u, i.toString("base64")), !1) : f.defaultVisitor.apply(this, arguments);
    }
  }, a));
}
function F2(n) {
  return D.matchAll(/\w+|\[(\w*)]/g, n).map((a) => a[0] === "[]" ? "" : a[1] || a[0]);
}
function I2(n) {
  const a = {}, i = Object.keys(n);
  let u;
  const s = i.length;
  let f;
  for (u = 0; u < s; u++)
    f = i[u], a[f] = n[f];
  return a;
}
function Oy(n) {
  function a(i, u, s, f) {
    let d = i[f++];
    if (d === "__proto__") return !0;
    const p = Number.isFinite(+d), g = f >= i.length;
    return d = !d && D.isArray(s) ? s.length : d, g ? (D.hasOwnProp(s, d) ? s[d] = [s[d], u] : s[d] = u, !p) : ((!s[d] || !D.isObject(s[d])) && (s[d] = []), a(i, u, s[d], f) && D.isArray(s[d]) && (s[d] = I2(s[d])), !p);
  }
  if (D.isFormData(n) && D.isFunction(n.entries)) {
    const i = {};
    return D.forEachEntry(n, (u, s) => {
      a(F2(u), s, i, 0);
    }), i;
  }
  return null;
}
function J2(n, a, i) {
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
  transitional: Ry,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(a, i) {
    const u = i.getContentType() || "", s = u.indexOf("application/json") > -1, f = D.isObject(a);
    if (f && D.isHTMLForm(a) && (a = new FormData(a)), D.isFormData(a))
      return s ? JSON.stringify(Oy(a)) : a;
    if (D.isArrayBuffer(a) || D.isBuffer(a) || D.isStream(a) || D.isFile(a) || D.isBlob(a) || D.isReadableStream(a))
      return a;
    if (D.isArrayBufferView(a))
      return a.buffer;
    if (D.isURLSearchParams(a))
      return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), a.toString();
    let p;
    if (f) {
      if (u.indexOf("application/x-www-form-urlencoded") > -1)
        return Z2(a, this.formSerializer).toString();
      if ((p = D.isFileList(a)) || u.indexOf("multipart/form-data") > -1) {
        const g = this.env && this.env.FormData;
        return Ou(
          p ? { "files[]": a } : a,
          g && new g(),
          this.formSerializer
        );
      }
    }
    return f || s ? (i.setContentType("application/json", !1), J2(a)) : a;
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
const P2 = D.toObjectSet([
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
]), $2 = (n) => {
  const a = {};
  let i, u, s;
  return n && n.split(`
`).forEach(function(d) {
    s = d.indexOf(":"), i = d.substring(0, s).trim().toLowerCase(), u = d.substring(s + 1).trim(), !(!i || a[i] && P2[i]) && (i === "set-cookie" ? a[i] ? a[i].push(u) : a[i] = [u] : a[i] = a[i] ? a[i] + ", " + u : u);
  }), a;
}, lg = Symbol("internals");
function jr(n) {
  return n && String(n).trim().toLowerCase();
}
function yu(n) {
  return n === !1 || n == null ? n : D.isArray(n) ? n.map(yu) : String(n);
}
function W2(n) {
  const a = /* @__PURE__ */ Object.create(null), i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let u;
  for (; u = i.exec(n); )
    a[u[1]] = u[2];
  return a;
}
const eT = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function yc(n, a, i, u, s) {
  if (D.isFunction(u))
    return u.call(this, a, i);
  if (s && (a = i), !!D.isString(a)) {
    if (D.isString(u))
      return a.indexOf(u) !== -1;
    if (D.isRegExp(u))
      return u.test(a);
  }
}
function tT(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (a, i, u) => i.toUpperCase() + u);
}
function nT(n, a) {
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
    function f(p, g, h) {
      const m = jr(g);
      if (!m)
        throw new Error("header name must be a non-empty string");
      const x = D.findKey(s, m);
      (!x || s[x] === void 0 || h === !0 || h === void 0 && s[x] !== !1) && (s[x || g] = yu(p));
    }
    const d = (p, g) => D.forEach(p, (h, m) => f(h, m, g));
    if (D.isPlainObject(a) || a instanceof this.constructor)
      d(a, i);
    else if (D.isString(a) && (a = a.trim()) && !eT(a))
      d($2(a), i);
    else if (D.isObject(a) && D.isIterable(a)) {
      let p = {}, g, h;
      for (const m of a) {
        if (!D.isArray(m))
          throw TypeError("Object iterator must return a key-value pair");
        p[h = m[0]] = (g = p[h]) ? D.isArray(g) ? [...g, m[1]] : [g, m[1]] : m[1];
      }
      d(p, i);
    } else
      a != null && f(i, a, u);
    return this;
  }
  get(a, i) {
    if (a = jr(a), a) {
      const u = D.findKey(this, a);
      if (u) {
        const s = this[u];
        if (!i)
          return s;
        if (i === !0)
          return W2(s);
        if (D.isFunction(i))
          return i.call(this, s, u);
        if (D.isRegExp(i))
          return i.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(a, i) {
    if (a = jr(a), a) {
      const u = D.findKey(this, a);
      return !!(u && this[u] !== void 0 && (!i || yc(this, this[u], u, i)));
    }
    return !1;
  }
  delete(a, i) {
    const u = this;
    let s = !1;
    function f(d) {
      if (d = jr(d), d) {
        const p = D.findKey(u, d);
        p && (!i || yc(u, u[p], p, i)) && (delete u[p], s = !0);
      }
    }
    return D.isArray(a) ? a.forEach(f) : f(a), s;
  }
  clear(a) {
    const i = Object.keys(this);
    let u = i.length, s = !1;
    for (; u--; ) {
      const f = i[u];
      (!a || yc(this, this[f], f, a, !0)) && (delete this[f], s = !0);
    }
    return s;
  }
  normalize(a) {
    const i = this, u = {};
    return D.forEach(this, (s, f) => {
      const d = D.findKey(u, f);
      if (d) {
        i[d] = yu(s), delete i[f];
        return;
      }
      const p = a ? tT(f) : String(f).trim();
      p !== f && delete i[f], i[p] = yu(s), u[p] = !0;
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
    const u = (this[lg] = this[lg] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function f(d) {
      const p = jr(d);
      u[p] || (nT(s, d), u[p] = !0);
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
function bc(n, a) {
  const i = this || Fr, u = a || i, s = zt.from(u.headers);
  let f = u.data;
  return D.forEach(n, function(p) {
    f = p.call(i, f, s.normalize(), a ? a.status : void 0);
  }), s.normalize(), f;
}
function zy(n) {
  return !!(n && n.__CANCEL__);
}
function za(n, a, i) {
  we.call(this, n ?? "canceled", we.ERR_CANCELED, a, i), this.name = "CanceledError";
}
D.inherits(za, we, {
  __CANCEL__: !0
});
function Ny(n, a, i) {
  const u = i.config.validateStatus;
  !i.status || !u || u(i.status) ? n(i) : a(new we(
    "Request failed with status code " + i.status,
    [we.ERR_BAD_REQUEST, we.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4],
    i.config,
    i.request,
    i
  ));
}
function lT(n) {
  const a = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return a && a[1] || "";
}
function aT(n, a) {
  n = n || 10;
  const i = new Array(n), u = new Array(n);
  let s = 0, f = 0, d;
  return a = a !== void 0 ? a : 1e3, function(g) {
    const h = Date.now(), m = u[f];
    d || (d = h), i[s] = g, u[s] = h;
    let x = f, w = 0;
    for (; x !== s; )
      w += i[x++], x = x % n;
    if (s = (s + 1) % n, s === f && (f = (f + 1) % n), h - d < a)
      return;
    const S = m && h - m;
    return S ? Math.round(w * 1e3 / S) : void 0;
  };
}
function rT(n, a) {
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
const Su = (n, a, i = 3) => {
  let u = 0;
  const s = aT(50, 250);
  return rT((f) => {
    const d = f.loaded, p = f.lengthComputable ? f.total : void 0, g = d - u, h = s(g), m = d <= p;
    u = d;
    const x = {
      loaded: d,
      total: p,
      progress: p ? d / p : void 0,
      bytes: g,
      rate: h || void 0,
      estimated: h && p && m ? (p - d) / h : void 0,
      event: f,
      lengthComputable: p != null,
      [a ? "download" : "upload"]: !0
    };
    n(x);
  }, i);
}, ag = (n, a) => {
  const i = n != null;
  return [(u) => a[0]({
    lengthComputable: i,
    total: n,
    loaded: u
  }), a[1]];
}, rg = (n) => (...a) => D.asap(() => n(...a)), iT = bt.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, a) => (i) => (i = new URL(i, bt.origin), n.protocol === i.protocol && n.host === i.host && (a || n.port === i.port)))(
  new URL(bt.origin),
  bt.navigator && /(msie|trident)/i.test(bt.navigator.userAgent)
) : () => !0, uT = bt.hasStandardBrowserEnv ? (
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
function oT(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function sT(n, a) {
  return a ? n.replace(/\/?\/$/, "") + "/" + a.replace(/^\/+/, "") : n;
}
function My(n, a, i) {
  let u = !oT(a);
  return n && (u || i == !1) ? sT(n, a) : a;
}
const ig = (n) => n instanceof zt ? { ...n } : n;
function Ml(n, a) {
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
    validateStatus: p,
    headers: (h, m, x) => s(ig(h), ig(m), x, !0)
  };
  return D.forEach(Object.keys(Object.assign({}, n, a)), function(m) {
    const x = g[m] || s, w = x(n[m], a[m], m);
    D.isUndefined(w) && x !== p || (i[m] = w);
  }), i;
}
const Dy = (n) => {
  const a = Ml({}, n);
  let { data: i, withXSRFToken: u, xsrfHeaderName: s, xsrfCookieName: f, headers: d, auth: p } = a;
  a.headers = d = zt.from(d), a.url = _y(My(a.baseURL, a.url, a.allowAbsoluteUrls), n.params, n.paramsSerializer), p && d.set(
    "Authorization",
    "Basic " + btoa((p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : ""))
  );
  let g;
  if (D.isFormData(i)) {
    if (bt.hasStandardBrowserEnv || bt.hasStandardBrowserWebWorkerEnv)
      d.setContentType(void 0);
    else if ((g = d.getContentType()) !== !1) {
      const [h, ...m] = g ? g.split(";").map((x) => x.trim()).filter(Boolean) : [];
      d.setContentType([h || "multipart/form-data", ...m].join("; "));
    }
  }
  if (bt.hasStandardBrowserEnv && (u && D.isFunction(u) && (u = u(a)), u || u !== !1 && iT(a.url))) {
    const h = s && f && uT.read(f);
    h && d.set(s, h);
  }
  return a;
}, cT = typeof XMLHttpRequest < "u", fT = cT && function(n) {
  return new Promise(function(i, u) {
    const s = Dy(n);
    let f = s.data;
    const d = zt.from(s.headers).normalize();
    let { responseType: p, onUploadProgress: g, onDownloadProgress: h } = s, m, x, w, S, C;
    function R() {
      S && S(), C && C(), s.cancelToken && s.cancelToken.unsubscribe(m), s.signal && s.signal.removeEventListener("abort", m);
    }
    let B = new XMLHttpRequest();
    B.open(s.method.toUpperCase(), s.url, !0), B.timeout = s.timeout;
    function U() {
      if (!B)
        return;
      const K = zt.from(
        "getAllResponseHeaders" in B && B.getAllResponseHeaders()
      ), $ = {
        data: !p || p === "text" || p === "json" ? B.responseText : B.response,
        status: B.status,
        statusText: B.statusText,
        headers: K,
        config: n,
        request: B
      };
      Ny(function(ie) {
        i(ie), R();
      }, function(ie) {
        u(ie), R();
      }, $), B = null;
    }
    "onloadend" in B ? B.onloadend = U : B.onreadystatechange = function() {
      !B || B.readyState !== 4 || B.status === 0 && !(B.responseURL && B.responseURL.indexOf("file:") === 0) || setTimeout(U);
    }, B.onabort = function() {
      B && (u(new we("Request aborted", we.ECONNABORTED, n, B)), B = null);
    }, B.onerror = function() {
      u(new we("Network Error", we.ERR_NETWORK, n, B)), B = null;
    }, B.ontimeout = function() {
      let ce = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const $ = s.transitional || Ry;
      s.timeoutErrorMessage && (ce = s.timeoutErrorMessage), u(new we(
        ce,
        $.clarifyTimeoutError ? we.ETIMEDOUT : we.ECONNABORTED,
        n,
        B
      )), B = null;
    }, f === void 0 && d.setContentType(null), "setRequestHeader" in B && D.forEach(d.toJSON(), function(ce, $) {
      B.setRequestHeader($, ce);
    }), D.isUndefined(s.withCredentials) || (B.withCredentials = !!s.withCredentials), p && p !== "json" && (B.responseType = s.responseType), h && ([w, C] = Su(h, !0), B.addEventListener("progress", w)), g && B.upload && ([x, S] = Su(g), B.upload.addEventListener("progress", x), B.upload.addEventListener("loadend", S)), (s.cancelToken || s.signal) && (m = (K) => {
      B && (u(!K || K.type ? new za(null, n, B) : K), B.abort(), B = null);
    }, s.cancelToken && s.cancelToken.subscribe(m), s.signal && (s.signal.aborted ? m() : s.signal.addEventListener("abort", m)));
    const J = lT(s.url);
    if (J && bt.protocols.indexOf(J) === -1) {
      u(new we("Unsupported protocol " + J + ":", we.ERR_BAD_REQUEST, n));
      return;
    }
    B.send(f || null);
  });
}, dT = (n, a) => {
  const { length: i } = n = n ? n.filter(Boolean) : [];
  if (a || i) {
    let u = new AbortController(), s;
    const f = function(h) {
      if (!s) {
        s = !0, p();
        const m = h instanceof Error ? h : this.reason;
        u.abort(m instanceof we ? m : new za(m instanceof Error ? m.message : m));
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
    const { signal: g } = u;
    return g.unsubscribe = () => D.asap(p), g;
  }
}, hT = function* (n, a) {
  let i = n.byteLength;
  if (i < a) {
    yield n;
    return;
  }
  let u = 0, s;
  for (; u < i; )
    s = u + a, yield n.slice(u, s), u = s;
}, pT = async function* (n, a) {
  for await (const i of mT(n))
    yield* hT(i, a);
}, mT = async function* (n) {
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
}, ug = (n, a, i, u) => {
  const s = pT(n, a);
  let f = 0, d, p = (g) => {
    d || (d = !0, u && u(g));
  };
  return new ReadableStream({
    async pull(g) {
      try {
        const { done: h, value: m } = await s.next();
        if (h) {
          p(), g.close();
          return;
        }
        let x = m.byteLength;
        if (i) {
          let w = f += x;
          i(w);
        }
        g.enqueue(new Uint8Array(m));
      } catch (h) {
        throw p(h), h;
      }
    },
    cancel(g) {
      return p(g), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, zu = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Uy = zu && typeof ReadableStream == "function", gT = zu && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (a) => n.encode(a))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), By = (n, ...a) => {
  try {
    return !!n(...a);
  } catch {
    return !1;
  }
}, yT = Uy && By(() => {
  let n = !1;
  const a = new Request(bt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !a;
}), og = 64 * 1024, Bc = Uy && By(() => D.isReadableStream(new Response("").body)), Eu = {
  stream: Bc && ((n) => n.body)
};
zu && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((a) => {
    !Eu[a] && (Eu[a] = D.isFunction(n[a]) ? (i) => i[a]() : (i, u) => {
      throw new we(`Response type '${a}' is not supported`, we.ERR_NOT_SUPPORT, u);
    });
  });
})(new Response());
const bT = async (n) => {
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
    return (await gT(n)).byteLength;
}, vT = async (n, a) => {
  const i = D.toFiniteNumber(n.getContentLength());
  return i ?? bT(a);
}, xT = zu && (async (n) => {
  let {
    url: a,
    method: i,
    data: u,
    signal: s,
    cancelToken: f,
    timeout: d,
    onDownloadProgress: p,
    onUploadProgress: g,
    responseType: h,
    headers: m,
    withCredentials: x = "same-origin",
    fetchOptions: w
  } = Dy(n);
  h = h ? (h + "").toLowerCase() : "text";
  let S = dT([s, f && f.toAbortSignal()], d), C;
  const R = S && S.unsubscribe && (() => {
    S.unsubscribe();
  });
  let B;
  try {
    if (g && yT && i !== "get" && i !== "head" && (B = await vT(m, u)) !== 0) {
      let $ = new Request(a, {
        method: "POST",
        body: u,
        duplex: "half"
      }), L;
      if (D.isFormData(u) && (L = $.headers.get("content-type")) && m.setContentType(L), $.body) {
        const [ie, P] = ag(
          B,
          Su(rg(g))
        );
        u = ug($.body, og, ie, P);
      }
    }
    D.isString(x) || (x = x ? "include" : "omit");
    const U = "credentials" in Request.prototype;
    C = new Request(a, {
      ...w,
      signal: S,
      method: i.toUpperCase(),
      headers: m.normalize().toJSON(),
      body: u,
      duplex: "half",
      credentials: U ? x : void 0
    });
    let J = await fetch(C, w);
    const K = Bc && (h === "stream" || h === "response");
    if (Bc && (p || K && R)) {
      const $ = {};
      ["status", "statusText", "headers"].forEach((fe) => {
        $[fe] = J[fe];
      });
      const L = D.toFiniteNumber(J.headers.get("content-length")), [ie, P] = p && ag(
        L,
        Su(rg(p), !0)
      ) || [];
      J = new Response(
        ug(J.body, og, ie, () => {
          P && P(), R && R();
        }),
        $
      );
    }
    h = h || "text";
    let ce = await Eu[D.findKey(Eu, h) || "text"](J, n);
    return !K && R && R(), await new Promise(($, L) => {
      Ny($, L, {
        data: ce,
        headers: zt.from(J.headers),
        status: J.status,
        statusText: J.statusText,
        config: n,
        request: C
      });
    });
  } catch (U) {
    throw R && R(), U && U.name === "TypeError" && /Load failed|fetch/i.test(U.message) ? Object.assign(
      new we("Network Error", we.ERR_NETWORK, n, C),
      {
        cause: U.cause || U
      }
    ) : we.from(U, U && U.code, n, C);
  }
}), Lc = {
  http: U2,
  xhr: fT,
  fetch: xT
};
D.forEach(Lc, (n, a) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: a });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: a });
  }
});
const sg = (n) => `- ${n}`, ST = (n) => D.isFunction(n) || n === null || n === !1, Ly = {
  getAdapter: (n) => {
    n = D.isArray(n) ? n : [n];
    const { length: a } = n;
    let i, u;
    const s = {};
    for (let f = 0; f < a; f++) {
      i = n[f];
      let d;
      if (u = i, !ST(i) && (u = Lc[(d = String(i)).toLowerCase()], u === void 0))
        throw new we(`Unknown adapter '${d}'`);
      if (u)
        break;
      s[d || "#" + f] = u;
    }
    if (!u) {
      const f = Object.entries(s).map(
        ([p, g]) => `adapter ${p} ` + (g === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let d = a ? f.length > 1 ? `since :
` + f.map(sg).join(`
`) : " " + sg(f[0]) : "as no adapter specified";
      throw new we(
        "There is no suitable adapter to dispatch the request " + d,
        "ERR_NOT_SUPPORT"
      );
    }
    return u;
  },
  adapters: Lc
};
function vc(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new za(null, n);
}
function cg(n) {
  return vc(n), n.headers = zt.from(n.headers), n.data = bc.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Ly.getAdapter(n.adapter || Fr.adapter)(n).then(function(u) {
    return vc(n), u.data = bc.call(
      n,
      n.transformResponse,
      u
    ), u.headers = zt.from(u.headers), u;
  }, function(u) {
    return zy(u) || (vc(n), u && u.response && (u.response.data = bc.call(
      n,
      n.transformResponse,
      u.response
    ), u.response.headers = zt.from(u.response.headers))), Promise.reject(u);
  });
}
const jy = "1.10.0", Nu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, a) => {
  Nu[n] = function(u) {
    return typeof u === n || "a" + (a < 1 ? "n " : " ") + n;
  };
});
const fg = {};
Nu.transitional = function(a, i, u) {
  function s(f, d) {
    return "[Axios v" + jy + "] Transitional option '" + f + "'" + d + (u ? ". " + u : "");
  }
  return (f, d, p) => {
    if (a === !1)
      throw new we(
        s(d, " has been removed" + (i ? " in " + i : "")),
        we.ERR_DEPRECATED
      );
    return i && !fg[d] && (fg[d] = !0, console.warn(
      s(
        d,
        " has been deprecated since v" + i + " and will be removed in the near future"
      )
    )), a ? a(f, d, p) : !0;
  };
};
Nu.spelling = function(a) {
  return (i, u) => (console.warn(`${u} is likely a misspelling of ${a}`), !0);
};
function ET(n, a, i) {
  if (typeof n != "object")
    throw new we("options must be an object", we.ERR_BAD_OPTION_VALUE);
  const u = Object.keys(n);
  let s = u.length;
  for (; s-- > 0; ) {
    const f = u[s], d = a[f];
    if (d) {
      const p = n[f], g = p === void 0 || d(p, f, n);
      if (g !== !0)
        throw new we("option " + f + " must be " + g, we.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (i !== !0)
      throw new we("Unknown option " + f, we.ERR_BAD_OPTION);
  }
}
const bu = {
  assertOptions: ET,
  validators: Nu
}, gn = bu.validators;
let Nl = class {
  constructor(a) {
    this.defaults = a || {}, this.interceptors = {
      request: new ng(),
      response: new ng()
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
    typeof a == "string" ? (i = i || {}, i.url = a) : i = a || {}, i = Ml(this.defaults, i);
    const { transitional: u, paramsSerializer: s, headers: f } = i;
    u !== void 0 && bu.assertOptions(u, {
      silentJSONParsing: gn.transitional(gn.boolean),
      forcedJSONParsing: gn.transitional(gn.boolean),
      clarifyTimeoutError: gn.transitional(gn.boolean)
    }, !1), s != null && (D.isFunction(s) ? i.paramsSerializer = {
      serialize: s
    } : bu.assertOptions(s, {
      encode: gn.function,
      serialize: gn.function
    }, !0)), i.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? i.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : i.allowAbsoluteUrls = !0), bu.assertOptions(i, {
      baseUrl: gn.spelling("baseURL"),
      withXsrfToken: gn.spelling("withXSRFToken")
    }, !0), i.method = (i.method || this.defaults.method || "get").toLowerCase();
    let d = f && D.merge(
      f.common,
      f[i.method]
    );
    f && D.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (C) => {
        delete f[C];
      }
    ), i.headers = zt.concat(d, f);
    const p = [];
    let g = !0;
    this.interceptors.request.forEach(function(R) {
      typeof R.runWhen == "function" && R.runWhen(i) === !1 || (g = g && R.synchronous, p.unshift(R.fulfilled, R.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(R) {
      h.push(R.fulfilled, R.rejected);
    });
    let m, x = 0, w;
    if (!g) {
      const C = [cg.bind(this), void 0];
      for (C.unshift.apply(C, p), C.push.apply(C, h), w = C.length, m = Promise.resolve(i); x < w; )
        m = m.then(C[x++], C[x++]);
      return m;
    }
    w = p.length;
    let S = i;
    for (x = 0; x < w; ) {
      const C = p[x++], R = p[x++];
      try {
        S = C(S);
      } catch (B) {
        R.call(this, B);
        break;
      }
    }
    try {
      m = cg.call(this, S);
    } catch (C) {
      return Promise.reject(C);
    }
    for (x = 0, w = h.length; x < w; )
      m = m.then(h[x++], h[x++]);
    return m;
  }
  getUri(a) {
    a = Ml(this.defaults, a);
    const i = My(a.baseURL, a.url, a.allowAbsoluteUrls);
    return _y(i, a.params, a.paramsSerializer);
  }
};
D.forEach(["delete", "get", "head", "options"], function(a) {
  Nl.prototype[a] = function(i, u) {
    return this.request(Ml(u || {}, {
      method: a,
      url: i,
      data: (u || {}).data
    }));
  };
});
D.forEach(["post", "put", "patch"], function(a) {
  function i(u) {
    return function(f, d, p) {
      return this.request(Ml(p || {}, {
        method: a,
        headers: u ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: f,
        data: d
      }));
    };
  }
  Nl.prototype[a] = i(), Nl.prototype[a + "Form"] = i(!0);
});
let wT = class Hy {
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
      u.reason || (u.reason = new za(f, d, p), i(u.reason));
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
      token: new Hy(function(s) {
        a = s;
      }),
      cancel: a
    };
  }
};
function TT(n) {
  return function(i) {
    return n.apply(null, i);
  };
}
function AT(n) {
  return D.isObject(n) && n.isAxiosError === !0;
}
const jc = {
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
Object.entries(jc).forEach(([n, a]) => {
  jc[a] = n;
});
function qy(n) {
  const a = new Nl(n), i = gy(Nl.prototype.request, a);
  return D.extend(i, Nl.prototype, a, { allOwnKeys: !0 }), D.extend(i, a, null, { allOwnKeys: !0 }), i.create = function(s) {
    return qy(Ml(n, s));
  }, i;
}
const Le = qy(Fr);
Le.Axios = Nl;
Le.CanceledError = za;
Le.CancelToken = wT;
Le.isCancel = zy;
Le.VERSION = jy;
Le.toFormData = Ou;
Le.AxiosError = we;
Le.Cancel = Le.CanceledError;
Le.all = function(a) {
  return Promise.all(a);
};
Le.spread = TT;
Le.isAxiosError = AT;
Le.mergeConfig = Ml;
Le.AxiosHeaders = zt;
Le.formToJSON = (n) => Oy(D.isHTMLForm(n) ? new FormData(n) : n);
Le.getAdapter = Ly.getAdapter;
Le.HttpStatusCode = jc;
Le.default = Le;
const {
  Axios: GT,
  AxiosError: QT,
  CanceledError: XT,
  isCancel: KT,
  CancelToken: ZT,
  VERSION: FT,
  all: IT,
  Cancel: JT,
  isAxiosError: PT,
  spread: $T,
  toFormData: WT,
  AxiosHeaders: eA,
  HttpStatusCode: tA,
  formToJSON: nA,
  getAdapter: lA,
  mergeConfig: aA
} = Le;
class Hr {
  static BACKEND_URL = "https://qurius-ai.onrender.com";
  // Track widget view
  static async trackWidgetView(a, i) {
    try {
      const u = this.getSessionId(), s = navigator.userAgent;
      await Le.post(`${this.BACKEND_URL}/api/analytics/widget-view`, {
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
  // Track widget interaction
  static async trackWidgetInteraction(a, i, u, s) {
    try {
      const f = this.getSessionId();
      await Le.post(`${this.BACKEND_URL}/api/analytics/widget-interaction`, {
        companyName: a,
        eventType: i,
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
  static async getCompanyAnalytics(a, i = "7d") {
    try {
      const u = await Le.get(`${this.BACKEND_URL}/api/analytics/company/${a}?period=${i}`);
      return console.log("Analytics data for company:", a, u.data), u.data;
    } catch (u) {
      throw console.error("Failed to fetch analytics:", u), new Error("Failed to fetch analytics");
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
  // Track message received
  static async trackMessageReceived(a, i) {
    await this.trackWidgetInteraction(a, "message_received", void 0, i);
  }
}
class kT {
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
      const s = (await Le.get(`${this.BACKEND_URL}/api/companies/${encodeURIComponent(a)}/theme`, {
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
const CT = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_BACKEND_URL: "https://qurius-ai.onrender.com", VITE_FRONTEND_URL: "https://qurius-ai.vercel.app", VITE_JINA_API_KEY: "demo-jina-key", VITE_OPEN_ROUTER_API_KEY: "demo-openrouter-key", VITE_SUPABASE_ANON_KEY: "demo-key", VITE_SUPABASE_PROJECT_URL: "https://demo.supabase.co", VITE_SUPABASE_SERVICE_ROLE_KEY: "demo-service-key" };
function Hn(n, a = "") {
  const i = typeof process < "u" ? process.env?.[n] : void 0;
  return (typeof import.meta < "u" ? CT?.[n] : void 0) ?? i ?? a;
}
const _T = {
  projectUrl: Hn("VITE_SUPABASE_PROJECT_URL"),
  anonKey: Hn("VITE_SUPABASE_ANON_KEY"),
  serviceRoleKey: Hn("VITE_SUPABASE_SERVICE_ROLE_KEY")
}, RT = {
  apiUrl: Hn("VITE_OPEN_ROUTER_URL", "https://openrouter.ai/api/v1"),
  apiKey: Hn("VITE_OPEN_ROUTER_API_KEY"),
  sourceUrl: Hn("VITE_SOURCE_URL", "http://localhost:8081")
}, OT = {
  apiUrl: Hn("VITE_JINA_API_URL", "https://api.jina.ai/v1/embeddings"),
  apiKey: Hn("VITE_JINA_API_KEY")
}, Vy = {
  backendUrl: Hn("VITE_BACKEND_URL", "http://localhost:3001"),
  ..._T,
  ...RT,
  ...OT
}, zT = {
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
class hu {
  static apiKey = null;
  static apiKeyPromise = null;
  /**
   * Fetch API key from backend
   */
  static async fetchApiKey() {
    return this.apiKeyPromise ? this.apiKeyPromise : (this.apiKeyPromise = (async () => {
      try {
        console.log("🔑 Fetching API key from backend...");
        const i = (await Le.get(`${Vy.backendUrl}/api/translate/api-key`)).data.apiKey;
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
          target: zT[i],
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
class NT {
  BACKEND_URL = Vy.backendUrl;
  // Get FAQ answer using semantic search
  async getFAQAnswer(a, i) {
    try {
      const u = await Le.post(`${this.BACKEND_URL}/api/faqs/search`, {
        companyName: a,
        question: i
      });
      return console.log("FAQ search results:", u.data), Array.isArray(u.data) && u.data.length > 0 ? u.data[0].answer || null : u.data && u.data.answer ? u.data.answer : null;
    } catch (u) {
      return console.error("Error searching FAQs:", u), null;
    }
  }
  async getFAQs(a) {
    try {
      return (await Le.get(`${this.BACKEND_URL}/api/companies/${a}/faqs`)).data;
    } catch (i) {
      throw console.error("Error fetching FAQs:", i), i;
    }
  }
  async importFAQs(a, i) {
    try {
      return (await Le.post(`${this.BACKEND_URL}/api/companies/${a}/faqs`, { faqs: i })).data;
    } catch (u) {
      throw console.error("Error importing FAQs:", u), u;
    }
  }
  async addFAQ(a, i, u) {
    try {
      return (await Le.post(`${this.BACKEND_URL}/api/companies/${a}/faqs`, {
        faqs: [{ question: i, answer: u }]
      })).data;
    } catch (s) {
      throw console.error("Error adding FAQ:", s), s;
    }
  }
  async updateFAQ(a, i, u) {
    try {
      return (await Le.put(`${this.BACKEND_URL}/api/faqs/${a}`, {
        question: i,
        answer: u
      })).data;
    } catch (s) {
      throw console.error("Error updating FAQ:", s), s;
    }
  }
  async deleteFAQ(a) {
    try {
      await Le.delete(`${this.BACKEND_URL}/api/faqs/${a}`);
    } catch (i) {
      throw console.error("Error deleting FAQ:", i), i;
    }
  }
}
const pg = new NT();
function MT({
  defaultTheme: n,
  toggleTheme: a,
  isMinimized: i,
  onToggleMinimize: u,
  companyName: s,
  isThemeChanging: f
}) {
  const d = ge.useRef(null), p = ge.useRef(null), { t: g, currentLanguage: h } = my(), [m, x] = ge.useState(null), w = n === "dark", S = () => Zw(g("chat.welcomeWithCompany"), { companyName: s || "AI" }), [C, R] = ge.useState([
    {
      content: S(),
      isUser: !1,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
  ]);
  ge.useEffect(() => {
    C.length === 1 && !C[0].isUser && R([
      {
        content: S(),
        isUser: !1,
        timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      }
    ]);
  }, [g, s]);
  const [B, U] = ge.useState(!1), [J, K] = ge.useState(!1), [ce, $] = ge.useState(!1), [L, ie] = ge.useState(!0), [P, fe] = ge.useState(!1);
  ge.useEffect(() => {
    (async () => {
      try {
        console.log("🧪 Testing translation service...");
        const O = await hu.translateToEnglish("Hello world");
        console.log("✅ Translation service test result:", O), console.log("🧪 Testing FAQ service...");
        const Y = await pg.getFAQAnswer("test-company", "test question");
        console.log("✅ FAQ service test result:", Y);
      } catch (O) {
        console.error("❌ Service test failed:", O);
      }
    })();
  }, []), ge.useEffect(() => {
    s && kT.getCompanyTheme(s, w).then(x);
  }, [s, w]), ge.useEffect(() => {
    s && Hr.trackWidgetView(s);
  }, [s]), ge.useEffect(() => {
    s && (i ? Hr.trackWidgetClose(s) : Hr.trackWidgetOpen(s));
  }, [i, s]);
  const Ee = () => {
    d.current?.scrollIntoView({ behavior: "smooth" });
  }, le = () => {
    if (p.current) {
      const { scrollTop: X, scrollHeight: O, clientHeight: Y } = p.current, V = O - X - Y < 10;
      ie(V), ce && !V && K(!0), V && K(!1);
    }
  }, ee = (X) => {
    $(X), X && K(!1);
  };
  ge.useEffect(() => {
    if (ce && !J) {
      const X = setInterval(() => {
        Ee();
      }, 100);
      return () => clearInterval(X);
    }
  }, [ce, J]), ge.useEffect(() => {
    i ? fe(!0) : Ee();
  }, [i]);
  const ae = async (X) => {
    console.log("🚀 Starting message processing:", X);
    const O = {
      content: X,
      isUser: !0,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    U(!0), R((Y) => [...Y, O]), s && Hr.trackMessageSent(s, X);
    try {
      console.log("🔄 Translating user input to English...");
      let Y = X;
      try {
        Y = await hu.translateToEnglish(X), console.log("✅ Translated input:", Y);
      } catch (pe) {
        console.warn("⚠️ Translation failed, using original input:", pe), Y = X;
      }
      console.log("🤖 Getting FAQ answer...");
      const V = await pg.getFAQAnswer(s || "", Y);
      if (console.log("✅ FAQ result:", V), V) {
        console.log("🔄 Translating AI response to user language...");
        let pe = V;
        try {
          pe = await hu.translateToUserLanguage(V, h), console.log("✅ Translated response:", pe);
        } catch (j) {
          console.warn("⚠️ Response translation failed, using original:", j), pe = V;
        }
        const b = {
          content: pe,
          isUser: !1,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        };
        R((j) => [...j, b]), fe(!1), s && Hr.trackMessageReceived(s, pe);
      } else {
        console.log("⚠️ No FAQ answer found, using fallback...");
        const pe = "I apologize, but I don't have specific information about that. Please contact our support team for assistance.";
        let b = pe;
        try {
          b = await hu.translateToUserLanguage(pe, h);
        } catch (j) {
          console.warn("⚠️ Fallback translation failed:", j);
        }
        R((j) => [
          ...j,
          {
            content: b,
            isUser: !1,
            timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          }
        ]);
      }
    } catch (Y) {
      console.error("❌ Error in handleSendMessage:", Y), console.error("❌ Error details:", {
        message: Y instanceof Error ? Y.message : String(Y),
        stack: Y instanceof Error ? Y.stack : void 0,
        name: Y instanceof Error ? Y.name : "Unknown"
      }), R((V) => [
        ...V,
        {
          content: "Sorry, something went wrong. Please try again.",
          isUser: !1,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    } finally {
      console.log("🏁 Finishing message processing"), U(!1);
    }
  }, te = m?.primaryColor ? Ng(m.primaryColor, 20) : void 0;
  return i ? /* @__PURE__ */ Z.jsx(
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
      children: /* @__PURE__ */ Z.jsx(
        "button",
        {
          onClick: u,
          className: "text-white p-4 rounded-full shadow-lg transition-colors",
          style: {
            backgroundColor: m?.primaryColor || "#007bff"
          },
          onMouseEnter: (X) => {
            te && (X.currentTarget.style.backgroundColor = te);
          },
          onMouseLeave: (X) => {
            X.currentTarget.style.backgroundColor = m?.primaryColor || "#007bff";
          },
          children: /* @__PURE__ */ Z.jsx(im, { className: "h-6 w-6" })
        }
      )
    }
  ) : /* @__PURE__ */ Z.jsxs(
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
        f && /* @__PURE__ */ Z.jsx(
          "div",
          {
            className: "absolute inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg",
            style: { backgroundColor: m?.backgroundColor + "CC" },
            children: /* @__PURE__ */ Z.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
              /* @__PURE__ */ Z.jsx(
                vg,
                {
                  className: "w-12 h-12 animate-spin",
                  style: { color: m?.primaryColor }
                }
              ),
              /* @__PURE__ */ Z.jsx(
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
        /* @__PURE__ */ Z.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800", children: [
          /* @__PURE__ */ Z.jsxs("div", { className: "flex items-center gap-3", children: [
            m?.logoUrl ? /* @__PURE__ */ Z.jsx("div", { className: "w-8 h-8 rounded-full flex items-center justify-center", children: /* @__PURE__ */ Z.jsx("img", { src: m?.logoUrl, alt: "Company Logo", className: "w-7 h-7" }) }) : (
              // Default logo
              /* @__PURE__ */ Z.jsx("div", { className: "w-8 h-8 rounded-full flex items-center justify-center", style: { backgroundColor: m?.primaryColor }, children: /* @__PURE__ */ Z.jsx(im, { className: "w-4 h-4 text-white" }) })
            ),
            /* @__PURE__ */ Z.jsxs("div", { children: [
              /* @__PURE__ */ Z.jsxs("h3", { className: "font-semibold text-gray-900 dark:text-gray-100 text-sm", children: [
                s,
                " Assistant"
              ] }),
              /* @__PURE__ */ Z.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Online now" })
            ] })
          ] }),
          /* @__PURE__ */ Z.jsxs("div", { className: "flex justify-end gap-1", children: [
            /* @__PURE__ */ Z.jsx(Iw, { variant: "dropdown", className: "scale-65" }),
            /* @__PURE__ */ Z.jsx(
              "button",
              {
                onClick: a,
                disabled: f,
                className: "p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50",
                children: n === "dark" ? /* @__PURE__ */ Z.jsx(R1, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" }) : /* @__PURE__ */ Z.jsx(A1, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" })
              }
            ),
            /* @__PURE__ */ Z.jsx(
              "button",
              {
                onClick: u,
                className: "p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",
                children: /* @__PURE__ */ Z.jsx(w1, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ Z.jsxs(
          "div",
          {
            ref: p,
            className: "flex-1 overflow-y-auto bg-white dark:bg-gray-900",
            onScroll: le,
            children: [
              /* @__PURE__ */ Z.jsxs("div", { className: "py-4", children: [
                C.map((X, O) => {
                  const Y = !X.isUser && O === C.length - 1;
                  return /* @__PURE__ */ Z.jsx(
                    Mw,
                    {
                      message: X.content,
                      isUser: X.isUser,
                      timestamp: X.timestamp,
                      onStreamingChange: X.isUser ? void 0 : ee,
                      skipStreaming: P && !X.isUser,
                      isLastAiMessage: Y,
                      companyTheme: m || void 0
                    },
                    `${O}-${X.content.substring(0, 20)}`
                  );
                }),
                B && /* @__PURE__ */ Z.jsx(Dw, { companyTheme: m })
              ] }),
              /* @__PURE__ */ Z.jsx("div", { ref: d })
            ]
          }
        ),
        !L && !ce && /* @__PURE__ */ Z.jsx("div", { className: "absolute bottom-27 right-4 z-10", children: /* @__PURE__ */ Z.jsxs(
          py,
          {
            onClick: Ee,
            size: "sm",
            className: "h-10 w-10 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-200 p-0 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2",
            style: {
              backgroundColor: m?.primaryColor,
              "--hover-bg-color": te
            },
            onMouseEnter: (X) => {
              te && (X.currentTarget.style.backgroundColor = te);
            },
            onMouseLeave: (X) => {
              m?.primaryColor && (X.currentTarget.style.backgroundColor = m.primaryColor);
            },
            onFocus: (X) => {
              te && (X.currentTarget.style.backgroundColor = te);
            },
            onBlur: (X) => {
              m?.primaryColor && (X.currentTarget.style.backgroundColor = m.primaryColor);
            },
            children: [
              /* @__PURE__ */ Z.jsx(bg, { className: "h-4 w-4" }),
              /* @__PURE__ */ Z.jsx("span", { className: "sr-only", children: "Scroll to bottom" })
            ]
          }
        ) }),
        /* @__PURE__ */ Z.jsx(
          Kw,
          {
            onSendMessage: ae,
            isLoading: B,
            placeholder: `Ask ${s} anything...`,
            defaultTheme: n,
            companyTheme: m || void 0
          }
        )
      ]
    }
  );
}
const DT = 400, UT = 1300, Ol = {
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
}, Yy = ge.createContext({
  colors: Ol.light,
  defaultTheme: "light",
  isDark: !1,
  setColorScheme: () => {
  },
  toggleTheme: () => {
  },
  isThemeChanging: !1
}), BT = ({ children: n }) => {
  const a = () => {
    if (typeof window < "u") {
      const h = localStorage.getItem("theme");
      return h === "light" || h === "dark" ? h : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  }, [i, u] = ge.useState(a() === "dark"), [s, f] = ge.useState(!1), d = (h) => {
    u(h === "dark"), typeof window < "u" && localStorage.setItem("theme", h);
  }, p = () => {
    const h = i ? "light" : "dark";
    f(!0), setTimeout(() => {
      d(h), setTimeout(() => {
        f(!1);
      }, UT);
    }, DT);
  };
  ge.useEffect(() => {
    const h = window.matchMedia("(prefers-color-scheme: dark)"), m = (x) => {
      localStorage.getItem("theme") || d(x.matches ? "dark" : "light");
    };
    return h.addEventListener("change", m), () => h.removeEventListener("change", m);
  }, []), ge.useEffect(() => {
    typeof window < "u" && (i ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"), document.body.style.backgroundColor = i ? Ol.dark.containerBackground : Ol.light.containerBackground, document.body.style.color = i ? Ol.dark.text : Ol.light.text);
  }, [i]);
  const g = i ? Ol.dark : Ol.light;
  return /* @__PURE__ */ Z.jsx(Yy.Provider, { value: {
    colors: g,
    defaultTheme: i ? "dark" : "light",
    isDark: i,
    setColorScheme: d,
    toggleTheme: p,
    isThemeChanging: s
  }, children: n });
}, LT = () => {
  const n = ge.useContext(Yy);
  if (!n)
    throw new Error("useTheme must be used within a ThemeProvider");
  return n;
};
let pu = null;
function jT(n, a) {
  pu && pu.unmount(), pu = c1.createRoot(n), pu.render(
    /* @__PURE__ */ Z.jsx(mg.StrictMode, { children: /* @__PURE__ */ Z.jsx(BT, { children: /* @__PURE__ */ Z.jsx(HT, { config: a }) }) })
  );
}
function HT({ config: n }) {
  const { defaultTheme: a, toggleTheme: i, isThemeChanging: u } = LT(), [s, f] = mg.useState(!0), d = () => {
    const p = !s;
    f(p), console.log(p ? "Widget minimized, chat button should be visible" : "Widget expanded, chat button should be hidden");
  };
  return /* @__PURE__ */ Z.jsx(
    MT,
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
const qT = {
  init: jT
};
typeof window < "u" && (window.QuriusChatWidget = qT);
export {
  qT as default
};
