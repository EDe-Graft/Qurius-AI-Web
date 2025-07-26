import * as Dt from "react";
import Jf, { forwardRef as Wy, createElement as _f, useState as Xt, useEffect as Jr, useRef as dg, createContext as n1, useContext as r1 } from "react";
import i1 from "react-dom";
function Wf(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function a1(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var r = n.default;
  if (typeof r == "function") {
    var i = function l() {
      var o = !1;
      try {
        o = this instanceof l;
      } catch {
      }
      return o ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    i.prototype = r.prototype;
  } else i = {};
  return Object.defineProperty(i, "__esModule", { value: !0 }), Object.keys(n).forEach(function(l) {
    var o = Object.getOwnPropertyDescriptor(n, l);
    Object.defineProperty(i, l, o.get ? o : {
      enumerable: !0,
      get: function() {
        return n[l];
      }
    });
  }), i;
}
var Fc = { exports: {} }, dl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pg;
function l1() {
  if (pg) return dl;
  pg = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(l, o, u) {
    var c = null;
    if (u !== void 0 && (c = "" + u), o.key !== void 0 && (c = "" + o.key), "key" in o) {
      u = {};
      for (var h in o)
        h !== "key" && (u[h] = o[h]);
    } else u = o;
    return o = u.ref, {
      $$typeof: n,
      type: l,
      key: c,
      ref: o !== void 0 ? o : null,
      props: u
    };
  }
  return dl.Fragment = r, dl.jsx = i, dl.jsxs = i, dl;
}
var mg;
function s1() {
  return mg || (mg = 1, Fc.exports = l1()), Fc.exports;
}
var X = s1(), Qc = { exports: {} }, pl = {}, Kc = { exports: {} }, Xc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gg;
function o1() {
  return gg || (gg = 1, function(n) {
    function r(B, F) {
      var G = B.length;
      B.push(F);
      e: for (; 0 < G; ) {
        var xe = G - 1 >>> 1, E = B[xe];
        if (0 < o(E, F))
          B[xe] = F, B[G] = E, G = xe;
        else break e;
      }
    }
    function i(B) {
      return B.length === 0 ? null : B[0];
    }
    function l(B) {
      if (B.length === 0) return null;
      var F = B[0], G = B.pop();
      if (G !== F) {
        B[0] = G;
        e: for (var xe = 0, E = B.length, je = E >>> 1; xe < je; ) {
          var Ee = 2 * (xe + 1) - 1, x = B[Ee], me = Ee + 1, Fe = B[me];
          if (0 > o(x, G))
            me < E && 0 > o(Fe, x) ? (B[xe] = Fe, B[me] = G, xe = me) : (B[xe] = x, B[Ee] = G, xe = Ee);
          else if (me < E && 0 > o(Fe, G))
            B[xe] = Fe, B[me] = G, xe = me;
          else break e;
        }
      }
      return F;
    }
    function o(B, F) {
      var G = B.sortIndex - F.sortIndex;
      return G !== 0 ? G : B.id - F.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      n.unstable_now = function() {
        return u.now();
      };
    } else {
      var c = Date, h = c.now();
      n.unstable_now = function() {
        return c.now() - h;
      };
    }
    var m = [], p = [], g = 1, y = null, S = 3, v = !1, k = !1, A = !1, O = !1, j = typeof setTimeout == "function" ? setTimeout : null, Y = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
    function I(B) {
      for (var F = i(p); F !== null; ) {
        if (F.callback === null) l(p);
        else if (F.startTime <= B)
          l(p), F.sortIndex = F.expirationTime, r(m, F);
        else break;
        F = i(p);
      }
    }
    function J(B) {
      if (A = !1, I(B), !k)
        if (i(m) !== null)
          k = !0, M || (M = !0, $());
        else {
          var F = i(p);
          F !== null && ne(J, F.startTime - B);
        }
    }
    var M = !1, W = -1, Z = 5, oe = -1;
    function Se() {
      return O ? !0 : !(n.unstable_now() - oe < Z);
    }
    function te() {
      if (O = !1, M) {
        var B = n.unstable_now();
        oe = B;
        var F = !0;
        try {
          e: {
            k = !1, A && (A = !1, Y(W), W = -1), v = !0;
            var G = S;
            try {
              t: {
                for (I(B), y = i(m); y !== null && !(y.expirationTime > B && Se()); ) {
                  var xe = y.callback;
                  if (typeof xe == "function") {
                    y.callback = null, S = y.priorityLevel;
                    var E = xe(
                      y.expirationTime <= B
                    );
                    if (B = n.unstable_now(), typeof E == "function") {
                      y.callback = E, I(B), F = !0;
                      break t;
                    }
                    y === i(m) && l(m), I(B);
                  } else l(m);
                  y = i(m);
                }
                if (y !== null) F = !0;
                else {
                  var je = i(p);
                  je !== null && ne(
                    J,
                    je.startTime - B
                  ), F = !1;
                }
              }
              break e;
            } finally {
              y = null, S = G, v = !1;
            }
            F = void 0;
          }
        } finally {
          F ? $() : M = !1;
        }
      }
    }
    var $;
    if (typeof D == "function")
      $ = function() {
        D(te);
      };
    else if (typeof MessageChannel < "u") {
      var re = new MessageChannel(), ee = re.port2;
      re.port1.onmessage = te, $ = function() {
        ee.postMessage(null);
      };
    } else
      $ = function() {
        j(te, 0);
      };
    function ne(B, F) {
      W = j(function() {
        B(n.unstable_now());
      }, F);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, n.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Z = 0 < B ? Math.floor(1e3 / B) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return S;
    }, n.unstable_next = function(B) {
      switch (S) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = S;
      }
      var G = S;
      S = F;
      try {
        return B();
      } finally {
        S = G;
      }
    }, n.unstable_requestPaint = function() {
      O = !0;
    }, n.unstable_runWithPriority = function(B, F) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var G = S;
      S = B;
      try {
        return F();
      } finally {
        S = G;
      }
    }, n.unstable_scheduleCallback = function(B, F, G) {
      var xe = n.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? xe + G : xe) : G = xe, B) {
        case 1:
          var E = -1;
          break;
        case 2:
          E = 250;
          break;
        case 5:
          E = 1073741823;
          break;
        case 4:
          E = 1e4;
          break;
        default:
          E = 5e3;
      }
      return E = G + E, B = {
        id: g++,
        callback: F,
        priorityLevel: B,
        startTime: G,
        expirationTime: E,
        sortIndex: -1
      }, G > xe ? (B.sortIndex = G, r(p, B), i(m) === null && B === i(p) && (A ? (Y(W), W = -1) : A = !0, ne(J, G - xe))) : (B.sortIndex = E, r(m, B), k || v || (k = !0, M || (M = !0, $()))), B;
    }, n.unstable_shouldYield = Se, n.unstable_wrapCallback = function(B) {
      var F = S;
      return function() {
        var G = S;
        S = F;
        try {
          return B.apply(this, arguments);
        } finally {
          S = G;
        }
      };
    };
  }(Xc)), Xc;
}
var yg;
function u1() {
  return yg || (yg = 1, Kc.exports = o1()), Kc.exports;
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
var bg;
function c1() {
  if (bg) return pl;
  bg = 1;
  var n = u1(), r = Jf, i = i1;
  function l(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function u(e) {
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
  function c(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (u(e) !== e)
      throw Error(l(188));
  }
  function m(e) {
    var t = e.alternate;
    if (!t) {
      if (t = u(e), t === null) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var a = e, s = t; ; ) {
      var f = a.return;
      if (f === null) break;
      var d = f.alternate;
      if (d === null) {
        if (s = f.return, s !== null) {
          a = s;
          continue;
        }
        break;
      }
      if (f.child === d.child) {
        for (d = f.child; d; ) {
          if (d === a) return h(f), e;
          if (d === s) return h(f), t;
          d = d.sibling;
        }
        throw Error(l(188));
      }
      if (a.return !== s.return) a = f, s = d;
      else {
        for (var b = !1, w = f.child; w; ) {
          if (w === a) {
            b = !0, a = f, s = d;
            break;
          }
          if (w === s) {
            b = !0, s = f, a = d;
            break;
          }
          w = w.sibling;
        }
        if (!b) {
          for (w = d.child; w; ) {
            if (w === a) {
              b = !0, a = d, s = f;
              break;
            }
            if (w === s) {
              b = !0, s = d, a = f;
              break;
            }
            w = w.sibling;
          }
          if (!b) throw Error(l(189));
        }
      }
      if (a.alternate !== s) throw Error(l(190));
    }
    if (a.tag !== 3) throw Error(l(188));
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
  var g = Object.assign, y = Symbol.for("react.element"), S = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), Y = Symbol.for("react.consumer"), D = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), oe = Symbol.for("react.activity"), Se = Symbol.for("react.memo_cache_sentinel"), te = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != "object" ? null : (e = te && e[te] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var re = Symbol.for("react.client.reference");
  function ee(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === re ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case k:
        return "Fragment";
      case O:
        return "Profiler";
      case A:
        return "StrictMode";
      case J:
        return "Suspense";
      case M:
        return "SuspenseList";
      case oe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case v:
          return "Portal";
        case D:
          return (e.displayName || "Context") + ".Provider";
        case Y:
          return (e._context.displayName || "Context") + ".Consumer";
        case I:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case W:
          return t = e.displayName || null, t !== null ? t : ee(e.type) || "Memo";
        case Z:
          t = e._payload, e = e._init;
          try {
            return ee(e(t));
          } catch {
          }
      }
    return null;
  }
  var ne = Array.isArray, B = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, xe = [], E = -1;
  function je(e) {
    return { current: e };
  }
  function Ee(e) {
    0 > E || (e.current = xe[E], xe[E] = null, E--);
  }
  function x(e, t) {
    E++, xe[E] = e.current, e.current = t;
  }
  var me = je(null), Fe = je(null), De = je(null), Ne = je(null);
  function yt(e, t) {
    switch (x(De, t), x(Fe, e), x(me, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Pm(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Pm(t), e = Vm(t, e);
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
    Ee(me), x(me, e);
  }
  function lt() {
    Ee(me), Ee(Fe), Ee(De);
  }
  function _t(e) {
    e.memoizedState !== null && x(Ne, e);
    var t = me.current, a = Vm(t, e.type);
    t !== a && (x(Fe, e), x(me, a));
  }
  function Lt(e) {
    Fe.current === e && (Ee(me), Ee(Fe)), Ne.current === e && (Ee(Ne), ol._currentValue = G);
  }
  var yn = Object.prototype.hasOwnProperty, pa = n.unstable_scheduleCallback, ma = n.unstable_cancelCallback, Ll = n.unstable_shouldYield, ql = n.unstable_requestPaint, qt = n.unstable_now, jo = n.unstable_getCurrentPriorityLevel, ga = n.unstable_ImmediatePriority, ya = n.unstable_UserBlockingPriority, ri = n.unstable_NormalPriority, Do = n.unstable_LowPriority, Hl = n.unstable_IdlePriority, No = n.log, Mo = n.unstable_setDisableYieldValue, q = null, Q = null;
  function ue(e) {
    if (typeof No == "function" && Mo(e), Q && typeof Q.setStrictMode == "function")
      try {
        Q.setStrictMode(q, e);
      } catch {
      }
  }
  var he = Math.clz32 ? Math.clz32 : Rn, Me = Math.log, Ht = Math.LN2;
  function Rn(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Me(e) / Ht | 0) | 0;
  }
  var kt = 256, bn = 4194304;
  function Pt(e) {
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
  function st(e, t, a) {
    var s = e.pendingLanes;
    if (s === 0) return 0;
    var f = 0, d = e.suspendedLanes, b = e.pingedLanes;
    e = e.warmLanes;
    var w = s & 134217727;
    return w !== 0 ? (s = w & ~d, s !== 0 ? f = Pt(s) : (b &= w, b !== 0 ? f = Pt(b) : a || (a = w & ~e, a !== 0 && (f = Pt(a))))) : (w = s & ~d, w !== 0 ? f = Pt(w) : b !== 0 ? f = Pt(b) : a || (a = s & ~e, a !== 0 && (f = Pt(a)))), f === 0 ? 0 : t !== 0 && t !== f && (t & d) === 0 && (d = f & -f, a = t & -t, d >= a || d === 32 && (a & 4194048) !== 0) ? t : f;
  }
  function Jt(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function cn(e, t) {
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
  function Eh() {
    var e = kt;
    return kt <<= 1, (kt & 4194048) === 0 && (kt = 256), e;
  }
  function kh() {
    var e = bn;
    return bn <<= 1, (bn & 62914560) === 0 && (bn = 4194304), e;
  }
  function Uo(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function ba(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function G0(e, t, a, s, f, d) {
    var b = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var w = e.entanglements, _ = e.expirationTimes, z = e.hiddenUpdates;
    for (a = b & ~a; 0 < a; ) {
      var H = 31 - he(a), V = 1 << H;
      w[H] = 0, _[H] = -1;
      var N = z[H];
      if (N !== null)
        for (z[H] = null, H = 0; H < N.length; H++) {
          var U = N[H];
          U !== null && (U.lane &= -536870913);
        }
      a &= ~V;
    }
    s !== 0 && Th(e, s, 0), d !== 0 && f === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(b & ~t));
  }
  function Th(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var s = 31 - he(t);
    e.entangledLanes |= t, e.entanglements[s] = e.entanglements[s] | 1073741824 | a & 4194090;
  }
  function Ah(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var s = 31 - he(a), f = 1 << s;
      f & t | e[s] & t && (e[s] |= t), a &= ~f;
    }
  }
  function Bo(e) {
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
  function Lo(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Oh() {
    var e = F.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : sg(e.type));
  }
  function $0(e, t) {
    var a = F.p;
    try {
      return F.p = e, t();
    } finally {
      F.p = a;
    }
  }
  var Xn = Math.random().toString(36).slice(2), bt = "__reactFiber$" + Xn, Tt = "__reactProps$" + Xn, ii = "__reactContainer$" + Xn, qo = "__reactEvents$" + Xn, Y0 = "__reactListeners$" + Xn, F0 = "__reactHandles$" + Xn, Ch = "__reactResources$" + Xn, va = "__reactMarker$" + Xn;
  function Ho(e) {
    delete e[bt], delete e[Tt], delete e[qo], delete e[Y0], delete e[F0];
  }
  function ai(e) {
    var t = e[bt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[ii] || a[bt]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = Ym(e); e !== null; ) {
            if (a = e[bt]) return a;
            e = Ym(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function li(e) {
    if (e = e[bt] || e[ii]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function wa(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(l(33));
  }
  function si(e) {
    var t = e[Ch];
    return t || (t = e[Ch] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ot(e) {
    e[va] = !0;
  }
  var Rh = /* @__PURE__ */ new Set(), zh = {};
  function Or(e, t) {
    oi(e, t), oi(e + "Capture", t);
  }
  function oi(e, t) {
    for (zh[e] = t, e = 0; e < t.length; e++)
      Rh.add(t[e]);
  }
  var Q0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), jh = {}, Dh = {};
  function K0(e) {
    return yn.call(Dh, e) ? !0 : yn.call(jh, e) ? !1 : Q0.test(e) ? Dh[e] = !0 : (jh[e] = !0, !1);
  }
  function Pl(e, t, a) {
    if (K0(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var s = t.toLowerCase().slice(0, 5);
            if (s !== "data-" && s !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function Vl(e, t, a) {
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
  function zn(e, t, a, s) {
    if (s === null) e.removeAttribute(a);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + s);
    }
  }
  var Po, Nh;
  function ui(e) {
    if (Po === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Po = t && t[1] || "", Nh = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Po + e + Nh;
  }
  var Vo = !1;
  function Io(e, t) {
    if (!e || Vo) return "";
    Vo = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var s = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var V = function() {
                throw Error();
              };
              if (Object.defineProperty(V.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(V, []);
                } catch (U) {
                  var N = U;
                }
                Reflect.construct(e, [], V);
              } else {
                try {
                  V.call();
                } catch (U) {
                  N = U;
                }
                e.call(V.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                N = U;
              }
              (V = e()) && typeof V.catch == "function" && V.catch(function() {
              });
            }
          } catch (U) {
            if (U && N && typeof U.stack == "string")
              return [U.stack, N.stack];
          }
          return [null, null];
        }
      };
      s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var f = Object.getOwnPropertyDescriptor(
        s.DetermineComponentFrameRoot,
        "name"
      );
      f && f.configurable && Object.defineProperty(
        s.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var d = s.DetermineComponentFrameRoot(), b = d[0], w = d[1];
      if (b && w) {
        var _ = b.split(`
`), z = w.split(`
`);
        for (f = s = 0; s < _.length && !_[s].includes("DetermineComponentFrameRoot"); )
          s++;
        for (; f < z.length && !z[f].includes(
          "DetermineComponentFrameRoot"
        ); )
          f++;
        if (s === _.length || f === z.length)
          for (s = _.length - 1, f = z.length - 1; 1 <= s && 0 <= f && _[s] !== z[f]; )
            f--;
        for (; 1 <= s && 0 <= f; s--, f--)
          if (_[s] !== z[f]) {
            if (s !== 1 || f !== 1)
              do
                if (s--, f--, 0 > f || _[s] !== z[f]) {
                  var H = `
` + _[s].replace(" at new ", " at ");
                  return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), H;
                }
              while (1 <= s && 0 <= f);
            break;
          }
      }
    } finally {
      Vo = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? ui(a) : "";
  }
  function X0(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ui(e.type);
      case 16:
        return ui("Lazy");
      case 13:
        return ui("Suspense");
      case 19:
        return ui("SuspenseList");
      case 0:
      case 15:
        return Io(e.type, !1);
      case 11:
        return Io(e.type.render, !1);
      case 1:
        return Io(e.type, !0);
      case 31:
        return ui("Activity");
      default:
        return "";
    }
  }
  function Mh(e) {
    try {
      var t = "";
      do
        t += X0(e), e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function Wt(e) {
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
  function Uh(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Z0(e) {
    var t = Uh(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), s = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var f = a.get, d = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return f.call(this);
        },
        set: function(b) {
          s = "" + b, d.call(this, b);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return s;
        },
        setValue: function(b) {
          s = "" + b;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Il(e) {
    e._valueTracker || (e._valueTracker = Z0(e));
  }
  function Bh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), s = "";
    return e && (s = Uh(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== a ? (t.setValue(e), !0) : !1;
  }
  function Gl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var J0 = /[\n"\\]/g;
  function en(e) {
    return e.replace(
      J0,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Go(e, t, a, s, f, d, b, w) {
    e.name = "", b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.type = b : e.removeAttribute("type"), t != null ? b === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Wt(t)) : e.value !== "" + Wt(t) && (e.value = "" + Wt(t)) : b !== "submit" && b !== "reset" || e.removeAttribute("value"), t != null ? $o(e, b, Wt(t)) : a != null ? $o(e, b, Wt(a)) : s != null && e.removeAttribute("value"), f == null && d != null && (e.defaultChecked = !!d), f != null && (e.checked = f && typeof f != "function" && typeof f != "symbol"), w != null && typeof w != "function" && typeof w != "symbol" && typeof w != "boolean" ? e.name = "" + Wt(w) : e.removeAttribute("name");
  }
  function Lh(e, t, a, s, f, d, b, w) {
    if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.type = d), t != null || a != null) {
      if (!(d !== "submit" && d !== "reset" || t != null))
        return;
      a = a != null ? "" + Wt(a) : "", t = t != null ? "" + Wt(t) : a, w || t === e.value || (e.value = t), e.defaultValue = t;
    }
    s = s ?? f, s = typeof s != "function" && typeof s != "symbol" && !!s, e.checked = w ? e.checked : !!s, e.defaultChecked = !!s, b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (e.name = b);
  }
  function $o(e, t, a) {
    t === "number" && Gl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function ci(e, t, a, s) {
    if (e = e.options, t) {
      t = {};
      for (var f = 0; f < a.length; f++)
        t["$" + a[f]] = !0;
      for (a = 0; a < e.length; a++)
        f = t.hasOwnProperty("$" + e[a].value), e[a].selected !== f && (e[a].selected = f), f && s && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Wt(a), t = null, f = 0; f < e.length; f++) {
        if (e[f].value === a) {
          e[f].selected = !0, s && (e[f].defaultSelected = !0);
          return;
        }
        t !== null || e[f].disabled || (t = e[f]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function qh(e, t, a) {
    if (t != null && (t = "" + Wt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Wt(a) : "";
  }
  function Hh(e, t, a, s) {
    if (t == null) {
      if (s != null) {
        if (a != null) throw Error(l(92));
        if (ne(s)) {
          if (1 < s.length) throw Error(l(93));
          s = s[0];
        }
        a = s;
      }
      a == null && (a = ""), t = a;
    }
    a = Wt(t), e.defaultValue = a, s = e.textContent, s === a && s !== "" && s !== null && (e.value = s);
  }
  function fi(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var W0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ph(e, t, a) {
    var s = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? s ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : s ? e.setProperty(t, a) : typeof a != "number" || a === 0 || W0.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function Vh(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(l(62));
    if (e = e.style, a != null) {
      for (var s in a)
        !a.hasOwnProperty(s) || t != null && t.hasOwnProperty(s) || (s.indexOf("--") === 0 ? e.setProperty(s, "") : s === "float" ? e.cssFloat = "" : e[s] = "");
      for (var f in t)
        s = t[f], t.hasOwnProperty(f) && a[f] !== s && Ph(e, f, s);
    } else
      for (var d in t)
        t.hasOwnProperty(d) && Ph(e, d, t[d]);
  }
  function Yo(e) {
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
  var ev = /* @__PURE__ */ new Map([
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
  ]), tv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $l(e) {
    return tv.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Fo = null;
  function Qo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var hi = null, di = null;
  function Ih(e) {
    var t = li(e);
    if (t && (e = t.stateNode)) {
      var a = e[Tt] || null;
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
              'input[name="' + en(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var s = a[t];
              if (s !== e && s.form === e.form) {
                var f = s[Tt] || null;
                if (!f) throw Error(l(90));
                Go(
                  s,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              s = a[t], s.form === e.form && Bh(s);
          }
          break e;
        case "textarea":
          qh(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && ci(e, !!a.multiple, t, !1);
      }
    }
  }
  var Ko = !1;
  function Gh(e, t, a) {
    if (Ko) return e(t, a);
    Ko = !0;
    try {
      var s = e(t);
      return s;
    } finally {
      if (Ko = !1, (hi !== null || di !== null) && (Rs(), hi && (t = hi, e = di, di = hi = null, Ih(t), e)))
        for (t = 0; t < e.length; t++) Ih(e[t]);
    }
  }
  function Sa(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var s = a[Tt] || null;
    if (s === null) return null;
    a = s[t];
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
        (s = !s.disabled) || (e = e.type, s = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !s;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function")
      throw Error(
        l(231, t, typeof a)
      );
    return a;
  }
  var jn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xo = !1;
  if (jn)
    try {
      var xa = {};
      Object.defineProperty(xa, "passive", {
        get: function() {
          Xo = !0;
        }
      }), window.addEventListener("test", xa, xa), window.removeEventListener("test", xa, xa);
    } catch {
      Xo = !1;
    }
  var Zn = null, Zo = null, Yl = null;
  function $h() {
    if (Yl) return Yl;
    var e, t = Zo, a = t.length, s, f = "value" in Zn ? Zn.value : Zn.textContent, d = f.length;
    for (e = 0; e < a && t[e] === f[e]; e++) ;
    var b = a - e;
    for (s = 1; s <= b && t[a - s] === f[d - s]; s++) ;
    return Yl = f.slice(e, 1 < s ? 1 - s : void 0);
  }
  function Fl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ql() {
    return !0;
  }
  function Yh() {
    return !1;
  }
  function At(e) {
    function t(a, s, f, d, b) {
      this._reactName = a, this._targetInst = f, this.type = s, this.nativeEvent = d, this.target = b, this.currentTarget = null;
      for (var w in e)
        e.hasOwnProperty(w) && (a = e[w], this[w] = a ? a(d) : d[w]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Ql : Yh, this.isPropagationStopped = Yh, this;
    }
    return g(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ql);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ql);
      },
      persist: function() {
      },
      isPersistent: Ql
    }), t;
  }
  var Cr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Kl = At(Cr), _a = g({}, Cr, { view: 0, detail: 0 }), nv = At(_a), Jo, Wo, Ea, Xl = g({}, _a, {
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
    getModifierState: tu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Ea && (Ea && e.type === "mousemove" ? (Jo = e.screenX - Ea.screenX, Wo = e.screenY - Ea.screenY) : Wo = Jo = 0, Ea = e), Jo);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Wo;
    }
  }), Fh = At(Xl), rv = g({}, Xl, { dataTransfer: 0 }), iv = At(rv), av = g({}, _a, { relatedTarget: 0 }), eu = At(av), lv = g({}, Cr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), sv = At(lv), ov = g({}, Cr, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), uv = At(ov), cv = g({}, Cr, { data: 0 }), Qh = At(cv), fv = {
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
  }, hv = {
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
  }, dv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function pv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = dv[e]) ? !!t[e] : !1;
  }
  function tu() {
    return pv;
  }
  var mv = g({}, _a, {
    key: function(e) {
      if (e.key) {
        var t = fv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Fl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? hv[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: tu,
    charCode: function(e) {
      return e.type === "keypress" ? Fl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), gv = At(mv), yv = g({}, Xl, {
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
  }), Kh = At(yv), bv = g({}, _a, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: tu
  }), vv = At(bv), wv = g({}, Cr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Sv = At(wv), xv = g({}, Xl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), _v = At(xv), Ev = g({}, Cr, {
    newState: 0,
    oldState: 0
  }), kv = At(Ev), Tv = [9, 13, 27, 32], nu = jn && "CompositionEvent" in window, ka = null;
  jn && "documentMode" in document && (ka = document.documentMode);
  var Av = jn && "TextEvent" in window && !ka, Xh = jn && (!nu || ka && 8 < ka && 11 >= ka), Zh = " ", Jh = !1;
  function Wh(e, t) {
    switch (e) {
      case "keyup":
        return Tv.indexOf(t.keyCode) !== -1;
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
  function ed(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var pi = !1;
  function Ov(e, t) {
    switch (e) {
      case "compositionend":
        return ed(t);
      case "keypress":
        return t.which !== 32 ? null : (Jh = !0, Zh);
      case "textInput":
        return e = t.data, e === Zh && Jh ? null : e;
      default:
        return null;
    }
  }
  function Cv(e, t) {
    if (pi)
      return e === "compositionend" || !nu && Wh(e, t) ? (e = $h(), Yl = Zo = Zn = null, pi = !1, e) : null;
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
        return Xh && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Rv = {
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
  function td(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Rv[e.type] : t === "textarea";
  }
  function nd(e, t, a, s) {
    hi ? di ? di.push(s) : di = [s] : hi = s, t = Us(t, "onChange"), 0 < t.length && (a = new Kl(
      "onChange",
      "change",
      null,
      a,
      s
    ), e.push({ event: a, listeners: t }));
  }
  var Ta = null, Aa = null;
  function zv(e) {
    Um(e, 0);
  }
  function Zl(e) {
    var t = wa(e);
    if (Bh(t)) return e;
  }
  function rd(e, t) {
    if (e === "change") return t;
  }
  var id = !1;
  if (jn) {
    var ru;
    if (jn) {
      var iu = "oninput" in document;
      if (!iu) {
        var ad = document.createElement("div");
        ad.setAttribute("oninput", "return;"), iu = typeof ad.oninput == "function";
      }
      ru = iu;
    } else ru = !1;
    id = ru && (!document.documentMode || 9 < document.documentMode);
  }
  function ld() {
    Ta && (Ta.detachEvent("onpropertychange", sd), Aa = Ta = null);
  }
  function sd(e) {
    if (e.propertyName === "value" && Zl(Aa)) {
      var t = [];
      nd(
        t,
        Aa,
        e,
        Qo(e)
      ), Gh(zv, t);
    }
  }
  function jv(e, t, a) {
    e === "focusin" ? (ld(), Ta = t, Aa = a, Ta.attachEvent("onpropertychange", sd)) : e === "focusout" && ld();
  }
  function Dv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Zl(Aa);
  }
  function Nv(e, t) {
    if (e === "click") return Zl(t);
  }
  function Mv(e, t) {
    if (e === "input" || e === "change")
      return Zl(t);
  }
  function Uv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Vt = typeof Object.is == "function" ? Object.is : Uv;
  function Oa(e, t) {
    if (Vt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), s = Object.keys(t);
    if (a.length !== s.length) return !1;
    for (s = 0; s < a.length; s++) {
      var f = a[s];
      if (!yn.call(t, f) || !Vt(e[f], t[f]))
        return !1;
    }
    return !0;
  }
  function od(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ud(e, t) {
    var a = od(e);
    e = 0;
    for (var s; a; ) {
      if (a.nodeType === 3) {
        if (s = e + a.textContent.length, e <= t && s >= t)
          return { node: a, offset: t - e };
        e = s;
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
      a = od(a);
    }
  }
  function cd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? cd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function fd(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Gl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Gl(e.document);
    }
    return t;
  }
  function au(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Bv = jn && "documentMode" in document && 11 >= document.documentMode, mi = null, lu = null, Ca = null, su = !1;
  function hd(e, t, a) {
    var s = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    su || mi == null || mi !== Gl(s) || (s = mi, "selectionStart" in s && au(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
      anchorNode: s.anchorNode,
      anchorOffset: s.anchorOffset,
      focusNode: s.focusNode,
      focusOffset: s.focusOffset
    }), Ca && Oa(Ca, s) || (Ca = s, s = Us(lu, "onSelect"), 0 < s.length && (t = new Kl(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: s }), t.target = mi)));
  }
  function Rr(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var gi = {
    animationend: Rr("Animation", "AnimationEnd"),
    animationiteration: Rr("Animation", "AnimationIteration"),
    animationstart: Rr("Animation", "AnimationStart"),
    transitionrun: Rr("Transition", "TransitionRun"),
    transitionstart: Rr("Transition", "TransitionStart"),
    transitioncancel: Rr("Transition", "TransitionCancel"),
    transitionend: Rr("Transition", "TransitionEnd")
  }, ou = {}, dd = {};
  jn && (dd = document.createElement("div").style, "AnimationEvent" in window || (delete gi.animationend.animation, delete gi.animationiteration.animation, delete gi.animationstart.animation), "TransitionEvent" in window || delete gi.transitionend.transition);
  function zr(e) {
    if (ou[e]) return ou[e];
    if (!gi[e]) return e;
    var t = gi[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in dd)
        return ou[e] = t[a];
    return e;
  }
  var pd = zr("animationend"), md = zr("animationiteration"), gd = zr("animationstart"), Lv = zr("transitionrun"), qv = zr("transitionstart"), Hv = zr("transitioncancel"), yd = zr("transitionend"), bd = /* @__PURE__ */ new Map(), uu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  uu.push("scrollEnd");
  function fn(e, t) {
    bd.set(e, t), Or(t, [e]);
  }
  var vd = /* @__PURE__ */ new WeakMap();
  function tn(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = vd.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: Mh(t)
      }, vd.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Mh(t)
    };
  }
  var nn = [], yi = 0, cu = 0;
  function Jl() {
    for (var e = yi, t = cu = yi = 0; t < e; ) {
      var a = nn[t];
      nn[t++] = null;
      var s = nn[t];
      nn[t++] = null;
      var f = nn[t];
      nn[t++] = null;
      var d = nn[t];
      if (nn[t++] = null, s !== null && f !== null) {
        var b = s.pending;
        b === null ? f.next = f : (f.next = b.next, b.next = f), s.pending = f;
      }
      d !== 0 && wd(a, f, d);
    }
  }
  function Wl(e, t, a, s) {
    nn[yi++] = e, nn[yi++] = t, nn[yi++] = a, nn[yi++] = s, cu |= s, e.lanes |= s, e = e.alternate, e !== null && (e.lanes |= s);
  }
  function fu(e, t, a, s) {
    return Wl(e, t, a, s), es(e);
  }
  function bi(e, t) {
    return Wl(e, null, null, t), es(e);
  }
  function wd(e, t, a) {
    e.lanes |= a;
    var s = e.alternate;
    s !== null && (s.lanes |= a);
    for (var f = !1, d = e.return; d !== null; )
      d.childLanes |= a, s = d.alternate, s !== null && (s.childLanes |= a), d.tag === 22 && (e = d.stateNode, e === null || e._visibility & 1 || (f = !0)), e = d, d = d.return;
    return e.tag === 3 ? (d = e.stateNode, f && t !== null && (f = 31 - he(a), e = d.hiddenUpdates, s = e[f], s === null ? e[f] = [t] : s.push(t), t.lane = a | 536870912), d) : null;
  }
  function es(e) {
    if (50 < el)
      throw el = 0, yc = null, Error(l(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var vi = {};
  function Pv(e, t, a, s) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function It(e, t, a, s) {
    return new Pv(e, t, a, s);
  }
  function hu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Dn(e, t) {
    var a = e.alternate;
    return a === null ? (a = It(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function Sd(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function ts(e, t, a, s, f, d) {
    var b = 0;
    if (s = e, typeof e == "function") hu(e) && (b = 1);
    else if (typeof e == "string")
      b = Iw(
        e,
        a,
        me.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case oe:
          return e = It(31, a, t, f), e.elementType = oe, e.lanes = d, e;
        case k:
          return jr(a.children, f, d, t);
        case A:
          b = 8, f |= 24;
          break;
        case O:
          return e = It(12, a, t, f | 2), e.elementType = O, e.lanes = d, e;
        case J:
          return e = It(13, a, t, f), e.elementType = J, e.lanes = d, e;
        case M:
          return e = It(19, a, t, f), e.elementType = M, e.lanes = d, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case j:
              case D:
                b = 10;
                break e;
              case Y:
                b = 9;
                break e;
              case I:
                b = 11;
                break e;
              case W:
                b = 14;
                break e;
              case Z:
                b = 16, s = null;
                break e;
            }
          b = 29, a = Error(
            l(130, e === null ? "null" : typeof e, "")
          ), s = null;
      }
    return t = It(b, a, t, f), t.elementType = e, t.type = s, t.lanes = d, t;
  }
  function jr(e, t, a, s) {
    return e = It(7, e, s, t), e.lanes = a, e;
  }
  function du(e, t, a) {
    return e = It(6, e, null, t), e.lanes = a, e;
  }
  function pu(e, t, a) {
    return t = It(
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
  var wi = [], Si = 0, ns = null, rs = 0, rn = [], an = 0, Dr = null, Nn = 1, Mn = "";
  function Nr(e, t) {
    wi[Si++] = rs, wi[Si++] = ns, ns = e, rs = t;
  }
  function xd(e, t, a) {
    rn[an++] = Nn, rn[an++] = Mn, rn[an++] = Dr, Dr = e;
    var s = Nn;
    e = Mn;
    var f = 32 - he(s) - 1;
    s &= ~(1 << f), a += 1;
    var d = 32 - he(t) + f;
    if (30 < d) {
      var b = f - f % 5;
      d = (s & (1 << b) - 1).toString(32), s >>= b, f -= b, Nn = 1 << 32 - he(t) + f | a << f | s, Mn = d + e;
    } else
      Nn = 1 << d | a << f | s, Mn = e;
  }
  function mu(e) {
    e.return !== null && (Nr(e, 1), xd(e, 1, 0));
  }
  function gu(e) {
    for (; e === ns; )
      ns = wi[--Si], wi[Si] = null, rs = wi[--Si], wi[Si] = null;
    for (; e === Dr; )
      Dr = rn[--an], rn[an] = null, Mn = rn[--an], rn[an] = null, Nn = rn[--an], rn[an] = null;
  }
  var Et = null, Ke = null, Re = !1, Mr = null, vn = !1, yu = Error(l(519));
  function Ur(e) {
    var t = Error(l(418, ""));
    throw ja(tn(t, e)), yu;
  }
  function _d(e) {
    var t = e.stateNode, a = e.type, s = e.memoizedProps;
    switch (t[bt] = e, t[Tt] = s, a) {
      case "dialog":
        Te("cancel", t), Te("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Te("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < nl.length; a++)
          Te(nl[a], t);
        break;
      case "source":
        Te("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Te("error", t), Te("load", t);
        break;
      case "details":
        Te("toggle", t);
        break;
      case "input":
        Te("invalid", t), Lh(
          t,
          s.value,
          s.defaultValue,
          s.checked,
          s.defaultChecked,
          s.type,
          s.name,
          !0
        ), Il(t);
        break;
      case "select":
        Te("invalid", t);
        break;
      case "textarea":
        Te("invalid", t), Hh(t, s.value, s.defaultValue, s.children), Il(t);
    }
    a = s.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || s.suppressHydrationWarning === !0 || Hm(t.textContent, a) ? (s.popover != null && (Te("beforetoggle", t), Te("toggle", t)), s.onScroll != null && Te("scroll", t), s.onScrollEnd != null && Te("scrollend", t), s.onClick != null && (t.onclick = Bs), t = !0) : t = !1, t || Ur(e);
  }
  function Ed(e) {
    for (Et = e.return; Et; )
      switch (Et.tag) {
        case 5:
        case 13:
          vn = !1;
          return;
        case 27:
        case 3:
          vn = !0;
          return;
        default:
          Et = Et.return;
      }
  }
  function Ra(e) {
    if (e !== Et) return !1;
    if (!Re) return Ed(e), Re = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Dc(e.type, e.memoizedProps)), a = !a), a && Ke && Ur(e), Ed(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (t === 0) {
                Ke = dn(e.nextSibling);
                break e;
              }
              t--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || t++;
          e = e.nextSibling;
        }
        Ke = null;
      }
    } else
      t === 27 ? (t = Ke, dr(e.type) ? (e = Bc, Bc = null, Ke = e) : Ke = t) : Ke = Et ? dn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function za() {
    Ke = Et = null, Re = !1;
  }
  function kd() {
    var e = Mr;
    return e !== null && (Rt === null ? Rt = e : Rt.push.apply(
      Rt,
      e
    ), Mr = null), e;
  }
  function ja(e) {
    Mr === null ? Mr = [e] : Mr.push(e);
  }
  var bu = je(null), Br = null, Un = null;
  function Jn(e, t, a) {
    x(bu, t._currentValue), t._currentValue = a;
  }
  function Bn(e) {
    e._currentValue = bu.current, Ee(bu);
  }
  function vu(e, t, a) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function wu(e, t, a, s) {
    var f = e.child;
    for (f !== null && (f.return = e); f !== null; ) {
      var d = f.dependencies;
      if (d !== null) {
        var b = f.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var w = d;
          d = f;
          for (var _ = 0; _ < t.length; _++)
            if (w.context === t[_]) {
              d.lanes |= a, w = d.alternate, w !== null && (w.lanes |= a), vu(
                d.return,
                a,
                e
              ), s || (b = null);
              break e;
            }
          d = w.next;
        }
      } else if (f.tag === 18) {
        if (b = f.return, b === null) throw Error(l(341));
        b.lanes |= a, d = b.alternate, d !== null && (d.lanes |= a), vu(b, a, e), b = null;
      } else b = f.child;
      if (b !== null) b.return = f;
      else
        for (b = f; b !== null; ) {
          if (b === e) {
            b = null;
            break;
          }
          if (f = b.sibling, f !== null) {
            f.return = b.return, b = f;
            break;
          }
          b = b.return;
        }
      f = b;
    }
  }
  function Da(e, t, a, s) {
    e = null;
    for (var f = t, d = !1; f !== null; ) {
      if (!d) {
        if ((f.flags & 524288) !== 0) d = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var b = f.alternate;
        if (b === null) throw Error(l(387));
        if (b = b.memoizedProps, b !== null) {
          var w = f.type;
          Vt(f.pendingProps.value, b.value) || (e !== null ? e.push(w) : e = [w]);
        }
      } else if (f === Ne.current) {
        if (b = f.alternate, b === null) throw Error(l(387));
        b.memoizedState.memoizedState !== f.memoizedState.memoizedState && (e !== null ? e.push(ol) : e = [ol]);
      }
      f = f.return;
    }
    e !== null && wu(
      t,
      e,
      a,
      s
    ), t.flags |= 262144;
  }
  function is(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Vt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Lr(e) {
    Br = e, Un = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function vt(e) {
    return Td(Br, e);
  }
  function as(e, t) {
    return Br === null && Lr(e), Td(e, t);
  }
  function Td(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Un === null) {
      if (e === null) throw Error(l(308));
      Un = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Un = Un.next = t;
    return a;
  }
  var Vv = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, s) {
        e.push(s);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, Iv = n.unstable_scheduleCallback, Gv = n.unstable_NormalPriority, rt = {
    $$typeof: D,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Su() {
    return {
      controller: new Vv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Na(e) {
    e.refCount--, e.refCount === 0 && Iv(Gv, function() {
      e.controller.abort();
    });
  }
  var Ma = null, xu = 0, xi = 0, _i = null;
  function $v(e, t) {
    if (Ma === null) {
      var a = Ma = [];
      xu = 0, xi = Ec(), _i = {
        status: "pending",
        value: void 0,
        then: function(s) {
          a.push(s);
        }
      };
    }
    return xu++, t.then(Ad, Ad), t;
  }
  function Ad() {
    if (--xu === 0 && Ma !== null) {
      _i !== null && (_i.status = "fulfilled");
      var e = Ma;
      Ma = null, xi = 0, _i = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Yv(e, t) {
    var a = [], s = {
      status: "pending",
      value: null,
      reason: null,
      then: function(f) {
        a.push(f);
      }
    };
    return e.then(
      function() {
        s.status = "fulfilled", s.value = t;
        for (var f = 0; f < a.length; f++) (0, a[f])(t);
      },
      function(f) {
        for (s.status = "rejected", s.reason = f, f = 0; f < a.length; f++)
          (0, a[f])(void 0);
      }
    ), s;
  }
  var Od = B.S;
  B.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && $v(e, t), Od !== null && Od(e, t);
  };
  var qr = je(null);
  function _u() {
    var e = qr.current;
    return e !== null ? e : Ve.pooledCache;
  }
  function ls(e, t) {
    t === null ? x(qr, qr.current) : x(qr, t.pool);
  }
  function Cd() {
    var e = _u();
    return e === null ? null : { parent: rt._currentValue, pool: e };
  }
  var Ua = Error(l(460)), Rd = Error(l(474)), ss = Error(l(542)), Eu = { then: function() {
  } };
  function zd(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function os() {
  }
  function jd(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(os, os), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Nd(e), e;
      default:
        if (typeof t.status == "string") t.then(os, os);
        else {
          if (e = Ve, e !== null && 100 < e.shellSuspendCounter)
            throw Error(l(482));
          e = t, e.status = "pending", e.then(
            function(s) {
              if (t.status === "pending") {
                var f = t;
                f.status = "fulfilled", f.value = s;
              }
            },
            function(s) {
              if (t.status === "pending") {
                var f = t;
                f.status = "rejected", f.reason = s;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Nd(e), e;
        }
        throw Ba = t, Ua;
    }
  }
  var Ba = null;
  function Dd() {
    if (Ba === null) throw Error(l(459));
    var e = Ba;
    return Ba = null, e;
  }
  function Nd(e) {
    if (e === Ua || e === ss)
      throw Error(l(483));
  }
  var Wn = !1;
  function ku(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Tu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function er(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function tr(e, t, a) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (Ue & 2) !== 0) {
      var f = s.pending;
      return f === null ? t.next = t : (t.next = f.next, f.next = t), s.pending = t, t = es(e), wd(e, null, a), t;
    }
    return Wl(e, s, t, a), es(e);
  }
  function La(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, a |= s, t.lanes = a, Ah(e, a);
    }
  }
  function Au(e, t) {
    var a = e.updateQueue, s = e.alternate;
    if (s !== null && (s = s.updateQueue, a === s)) {
      var f = null, d = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var b = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          d === null ? f = d = b : d = d.next = b, a = a.next;
        } while (a !== null);
        d === null ? f = d = t : d = d.next = t;
      } else f = d = t;
      a = {
        baseState: s.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: d,
        shared: s.shared,
        callbacks: s.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var Ou = !1;
  function qa() {
    if (Ou) {
      var e = _i;
      if (e !== null) throw e;
    }
  }
  function Ha(e, t, a, s) {
    Ou = !1;
    var f = e.updateQueue;
    Wn = !1;
    var d = f.firstBaseUpdate, b = f.lastBaseUpdate, w = f.shared.pending;
    if (w !== null) {
      f.shared.pending = null;
      var _ = w, z = _.next;
      _.next = null, b === null ? d = z : b.next = z, b = _;
      var H = e.alternate;
      H !== null && (H = H.updateQueue, w = H.lastBaseUpdate, w !== b && (w === null ? H.firstBaseUpdate = z : w.next = z, H.lastBaseUpdate = _));
    }
    if (d !== null) {
      var V = f.baseState;
      b = 0, H = z = _ = null, w = d;
      do {
        var N = w.lane & -536870913, U = N !== w.lane;
        if (U ? (Oe & N) === N : (s & N) === N) {
          N !== 0 && N === xi && (Ou = !0), H !== null && (H = H.next = {
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: null,
            next: null
          });
          e: {
            var de = e, ce = w;
            N = t;
            var He = a;
            switch (ce.tag) {
              case 1:
                if (de = ce.payload, typeof de == "function") {
                  V = de.call(He, V, N);
                  break e;
                }
                V = de;
                break e;
              case 3:
                de.flags = de.flags & -65537 | 128;
              case 0:
                if (de = ce.payload, N = typeof de == "function" ? de.call(He, V, N) : de, N == null) break e;
                V = g({}, V, N);
                break e;
              case 2:
                Wn = !0;
            }
          }
          N = w.callback, N !== null && (e.flags |= 64, U && (e.flags |= 8192), U = f.callbacks, U === null ? f.callbacks = [N] : U.push(N));
        } else
          U = {
            lane: N,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          }, H === null ? (z = H = U, _ = V) : H = H.next = U, b |= N;
        if (w = w.next, w === null) {
          if (w = f.shared.pending, w === null)
            break;
          U = w, w = U.next, U.next = null, f.lastBaseUpdate = U, f.shared.pending = null;
        }
      } while (!0);
      H === null && (_ = V), f.baseState = _, f.firstBaseUpdate = z, f.lastBaseUpdate = H, d === null && (f.shared.lanes = 0), ur |= b, e.lanes = b, e.memoizedState = V;
    }
  }
  function Md(e, t) {
    if (typeof e != "function")
      throw Error(l(191, e));
    e.call(t);
  }
  function Ud(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        Md(a[e], t);
  }
  var Ei = je(null), us = je(0);
  function Bd(e, t) {
    e = Gn, x(us, e), x(Ei, t), Gn = e | t.baseLanes;
  }
  function Cu() {
    x(us, Gn), x(Ei, Ei.current);
  }
  function Ru() {
    Gn = us.current, Ee(Ei), Ee(us);
  }
  var nr = 0, ve = null, Le = null, et = null, cs = !1, ki = !1, Hr = !1, fs = 0, Pa = 0, Ti = null, Fv = 0;
  function Je() {
    throw Error(l(321));
  }
  function zu(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Vt(e[a], t[a])) return !1;
    return !0;
  }
  function ju(e, t, a, s, f, d) {
    return nr = d, ve = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, B.H = e === null || e.memoizedState === null ? wp : Sp, Hr = !1, d = a(s, f), Hr = !1, ki && (d = qd(
      t,
      a,
      s,
      f
    )), Ld(e), d;
  }
  function Ld(e) {
    B.H = ys;
    var t = Le !== null && Le.next !== null;
    if (nr = 0, et = Le = ve = null, cs = !1, Pa = 0, Ti = null, t) throw Error(l(300));
    e === null || ut || (e = e.dependencies, e !== null && is(e) && (ut = !0));
  }
  function qd(e, t, a, s) {
    ve = e;
    var f = 0;
    do {
      if (ki && (Ti = null), Pa = 0, ki = !1, 25 <= f) throw Error(l(301));
      if (f += 1, et = Le = null, e.updateQueue != null) {
        var d = e.updateQueue;
        d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
      }
      B.H = ew, d = t(a, s);
    } while (ki);
    return d;
  }
  function Qv() {
    var e = B.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Va(t) : t, e = e.useState()[0], (Le !== null ? Le.memoizedState : null) !== e && (ve.flags |= 1024), t;
  }
  function Du() {
    var e = fs !== 0;
    return fs = 0, e;
  }
  function Nu(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Mu(e) {
    if (cs) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      cs = !1;
    }
    nr = 0, et = Le = ve = null, ki = !1, Pa = fs = 0, Ti = null;
  }
  function Ot() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return et === null ? ve.memoizedState = et = e : et = et.next = e, et;
  }
  function tt() {
    if (Le === null) {
      var e = ve.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = et === null ? ve.memoizedState : et.next;
    if (t !== null)
      et = t, Le = e;
    else {
      if (e === null)
        throw ve.alternate === null ? Error(l(467)) : Error(l(310));
      Le = e, e = {
        memoizedState: Le.memoizedState,
        baseState: Le.baseState,
        baseQueue: Le.baseQueue,
        queue: Le.queue,
        next: null
      }, et === null ? ve.memoizedState = et = e : et = et.next = e;
    }
    return et;
  }
  function Uu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Va(e) {
    var t = Pa;
    return Pa += 1, Ti === null && (Ti = []), e = jd(Ti, e, t), t = ve, (et === null ? t.memoizedState : et.next) === null && (t = t.alternate, B.H = t === null || t.memoizedState === null ? wp : Sp), e;
  }
  function hs(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Va(e);
      if (e.$$typeof === D) return vt(e);
    }
    throw Error(l(438, String(e)));
  }
  function Bu(e) {
    var t = null, a = ve.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var s = ve.alternate;
      s !== null && (s = s.updateQueue, s !== null && (s = s.memoCache, s != null && (t = {
        data: s.data.map(function(f) {
          return f.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Uu(), ve.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), s = 0; s < e; s++)
        a[s] = Se;
    return t.index++, a;
  }
  function Ln(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ds(e) {
    var t = tt();
    return Lu(t, Le, e);
  }
  function Lu(e, t, a) {
    var s = e.queue;
    if (s === null) throw Error(l(311));
    s.lastRenderedReducer = a;
    var f = e.baseQueue, d = s.pending;
    if (d !== null) {
      if (f !== null) {
        var b = f.next;
        f.next = d.next, d.next = b;
      }
      t.baseQueue = f = d, s.pending = null;
    }
    if (d = e.baseState, f === null) e.memoizedState = d;
    else {
      t = f.next;
      var w = b = null, _ = null, z = t, H = !1;
      do {
        var V = z.lane & -536870913;
        if (V !== z.lane ? (Oe & V) === V : (nr & V) === V) {
          var N = z.revertLane;
          if (N === 0)
            _ !== null && (_ = _.next = {
              lane: 0,
              revertLane: 0,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null
            }), V === xi && (H = !0);
          else if ((nr & N) === N) {
            z = z.next, N === xi && (H = !0);
            continue;
          } else
            V = {
              lane: 0,
              revertLane: z.revertLane,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null
            }, _ === null ? (w = _ = V, b = d) : _ = _.next = V, ve.lanes |= N, ur |= N;
          V = z.action, Hr && a(d, V), d = z.hasEagerState ? z.eagerState : a(d, V);
        } else
          N = {
            lane: V,
            revertLane: z.revertLane,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          }, _ === null ? (w = _ = N, b = d) : _ = _.next = N, ve.lanes |= V, ur |= V;
        z = z.next;
      } while (z !== null && z !== t);
      if (_ === null ? b = d : _.next = w, !Vt(d, e.memoizedState) && (ut = !0, H && (a = _i, a !== null)))
        throw a;
      e.memoizedState = d, e.baseState = b, e.baseQueue = _, s.lastRenderedState = d;
    }
    return f === null && (s.lanes = 0), [e.memoizedState, s.dispatch];
  }
  function qu(e) {
    var t = tt(), a = t.queue;
    if (a === null) throw Error(l(311));
    a.lastRenderedReducer = e;
    var s = a.dispatch, f = a.pending, d = t.memoizedState;
    if (f !== null) {
      a.pending = null;
      var b = f = f.next;
      do
        d = e(d, b.action), b = b.next;
      while (b !== f);
      Vt(d, t.memoizedState) || (ut = !0), t.memoizedState = d, t.baseQueue === null && (t.baseState = d), a.lastRenderedState = d;
    }
    return [d, s];
  }
  function Hd(e, t, a) {
    var s = ve, f = tt(), d = Re;
    if (d) {
      if (a === void 0) throw Error(l(407));
      a = a();
    } else a = t();
    var b = !Vt(
      (Le || f).memoizedState,
      a
    );
    b && (f.memoizedState = a, ut = !0), f = f.queue;
    var w = Id.bind(null, s, f, e);
    if (Ia(2048, 8, w, [e]), f.getSnapshot !== t || b || et !== null && et.memoizedState.tag & 1) {
      if (s.flags |= 2048, Ai(
        9,
        ps(),
        Vd.bind(
          null,
          s,
          f,
          a,
          t
        ),
        null
      ), Ve === null) throw Error(l(349));
      d || (nr & 124) !== 0 || Pd(s, t, a);
    }
    return a;
  }
  function Pd(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = ve.updateQueue, t === null ? (t = Uu(), ve.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function Vd(e, t, a, s) {
    t.value = a, t.getSnapshot = s, Gd(t) && $d(e);
  }
  function Id(e, t, a) {
    return a(function() {
      Gd(t) && $d(e);
    });
  }
  function Gd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Vt(e, a);
    } catch {
      return !0;
    }
  }
  function $d(e) {
    var t = bi(e, 2);
    t !== null && Qt(t, e, 2);
  }
  function Hu(e) {
    var t = Ot();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), Hr) {
        ue(!0);
        try {
          a();
        } finally {
          ue(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ln,
      lastRenderedState: e
    }, t;
  }
  function Yd(e, t, a, s) {
    return e.baseState = a, Lu(
      e,
      Le,
      typeof s == "function" ? s : Ln
    );
  }
  function Kv(e, t, a, s, f) {
    if (gs(e)) throw Error(l(485));
    if (e = t.action, e !== null) {
      var d = {
        payload: f,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(b) {
          d.listeners.push(b);
        }
      };
      B.T !== null ? a(!0) : d.isTransition = !1, s(d), a = t.pending, a === null ? (d.next = t.pending = d, Fd(t, d)) : (d.next = a.next, t.pending = a.next = d);
    }
  }
  function Fd(e, t) {
    var a = t.action, s = t.payload, f = e.state;
    if (t.isTransition) {
      var d = B.T, b = {};
      B.T = b;
      try {
        var w = a(f, s), _ = B.S;
        _ !== null && _(b, w), Qd(e, t, w);
      } catch (z) {
        Pu(e, t, z);
      } finally {
        B.T = d;
      }
    } else
      try {
        d = a(f, s), Qd(e, t, d);
      } catch (z) {
        Pu(e, t, z);
      }
  }
  function Qd(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(s) {
        Kd(e, t, s);
      },
      function(s) {
        return Pu(e, t, s);
      }
    ) : Kd(e, t, a);
  }
  function Kd(e, t, a) {
    t.status = "fulfilled", t.value = a, Xd(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Fd(e, a)));
  }
  function Pu(e, t, a) {
    var s = e.pending;
    if (e.pending = null, s !== null) {
      s = s.next;
      do
        t.status = "rejected", t.reason = a, Xd(t), t = t.next;
      while (t !== s);
    }
    e.action = null;
  }
  function Xd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Zd(e, t) {
    return t;
  }
  function Jd(e, t) {
    if (Re) {
      var a = Ve.formState;
      if (a !== null) {
        e: {
          var s = ve;
          if (Re) {
            if (Ke) {
              t: {
                for (var f = Ke, d = vn; f.nodeType !== 8; ) {
                  if (!d) {
                    f = null;
                    break t;
                  }
                  if (f = dn(
                    f.nextSibling
                  ), f === null) {
                    f = null;
                    break t;
                  }
                }
                d = f.data, f = d === "F!" || d === "F" ? f : null;
              }
              if (f) {
                Ke = dn(
                  f.nextSibling
                ), s = f.data === "F!";
                break e;
              }
            }
            Ur(s);
          }
          s = !1;
        }
        s && (t = a[0]);
      }
    }
    return a = Ot(), a.memoizedState = a.baseState = t, s = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zd,
      lastRenderedState: t
    }, a.queue = s, a = yp.bind(
      null,
      ve,
      s
    ), s.dispatch = a, s = Hu(!1), d = Yu.bind(
      null,
      ve,
      !1,
      s.queue
    ), s = Ot(), f = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, s.queue = f, a = Kv.bind(
      null,
      ve,
      f,
      d,
      a
    ), f.dispatch = a, s.memoizedState = e, [t, a, !1];
  }
  function Wd(e) {
    var t = tt();
    return ep(t, Le, e);
  }
  function ep(e, t, a) {
    if (t = Lu(
      e,
      t,
      Zd
    )[0], e = ds(Ln)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var s = Va(t);
      } catch (b) {
        throw b === Ua ? ss : b;
      }
    else s = t;
    t = tt();
    var f = t.queue, d = f.dispatch;
    return a !== t.memoizedState && (ve.flags |= 2048, Ai(
      9,
      ps(),
      Xv.bind(null, f, a),
      null
    )), [s, d, e];
  }
  function Xv(e, t) {
    e.action = t;
  }
  function tp(e) {
    var t = tt(), a = Le;
    if (a !== null)
      return ep(t, a, e);
    tt(), t = t.memoizedState, a = tt();
    var s = a.queue.dispatch;
    return a.memoizedState = e, [t, s, !1];
  }
  function Ai(e, t, a, s) {
    return e = { tag: e, create: a, deps: s, inst: t, next: null }, t = ve.updateQueue, t === null && (t = Uu(), ve.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (s = a.next, a.next = e, e.next = s, t.lastEffect = e), e;
  }
  function ps() {
    return { destroy: void 0, resource: void 0 };
  }
  function np() {
    return tt().memoizedState;
  }
  function ms(e, t, a, s) {
    var f = Ot();
    s = s === void 0 ? null : s, ve.flags |= e, f.memoizedState = Ai(
      1 | t,
      ps(),
      a,
      s
    );
  }
  function Ia(e, t, a, s) {
    var f = tt();
    s = s === void 0 ? null : s;
    var d = f.memoizedState.inst;
    Le !== null && s !== null && zu(s, Le.memoizedState.deps) ? f.memoizedState = Ai(t, d, a, s) : (ve.flags |= e, f.memoizedState = Ai(
      1 | t,
      d,
      a,
      s
    ));
  }
  function rp(e, t) {
    ms(8390656, 8, e, t);
  }
  function ip(e, t) {
    Ia(2048, 8, e, t);
  }
  function ap(e, t) {
    return Ia(4, 2, e, t);
  }
  function lp(e, t) {
    return Ia(4, 4, e, t);
  }
  function sp(e, t) {
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
  function op(e, t, a) {
    a = a != null ? a.concat([e]) : null, Ia(4, 4, sp.bind(null, t, e), a);
  }
  function Vu() {
  }
  function up(e, t) {
    var a = tt();
    t = t === void 0 ? null : t;
    var s = a.memoizedState;
    return t !== null && zu(t, s[1]) ? s[0] : (a.memoizedState = [e, t], e);
  }
  function cp(e, t) {
    var a = tt();
    t = t === void 0 ? null : t;
    var s = a.memoizedState;
    if (t !== null && zu(t, s[1]))
      return s[0];
    if (s = e(), Hr) {
      ue(!0);
      try {
        e();
      } finally {
        ue(!1);
      }
    }
    return a.memoizedState = [s, t], s;
  }
  function Iu(e, t, a) {
    return a === void 0 || (nr & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = dm(), ve.lanes |= e, ur |= e, a);
  }
  function fp(e, t, a, s) {
    return Vt(a, t) ? a : Ei.current !== null ? (e = Iu(e, a, s), Vt(e, t) || (ut = !0), e) : (nr & 42) === 0 ? (ut = !0, e.memoizedState = a) : (e = dm(), ve.lanes |= e, ur |= e, t);
  }
  function hp(e, t, a, s, f) {
    var d = F.p;
    F.p = d !== 0 && 8 > d ? d : 8;
    var b = B.T, w = {};
    B.T = w, Yu(e, !1, t, a);
    try {
      var _ = f(), z = B.S;
      if (z !== null && z(w, _), _ !== null && typeof _ == "object" && typeof _.then == "function") {
        var H = Yv(
          _,
          s
        );
        Ga(
          e,
          t,
          H,
          Ft(e)
        );
      } else
        Ga(
          e,
          t,
          s,
          Ft(e)
        );
    } catch (V) {
      Ga(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: V },
        Ft()
      );
    } finally {
      F.p = d, B.T = b;
    }
  }
  function Zv() {
  }
  function Gu(e, t, a, s) {
    if (e.tag !== 5) throw Error(l(476));
    var f = dp(e).queue;
    hp(
      e,
      f,
      t,
      G,
      a === null ? Zv : function() {
        return pp(e), a(s);
      }
    );
  }
  function dp(e) {
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
        lastRenderedReducer: Ln,
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
        lastRenderedReducer: Ln,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function pp(e) {
    var t = dp(e).next.queue;
    Ga(e, t, {}, Ft());
  }
  function $u() {
    return vt(ol);
  }
  function mp() {
    return tt().memoizedState;
  }
  function gp() {
    return tt().memoizedState;
  }
  function Jv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Ft();
          e = er(a);
          var s = tr(t, e, a);
          s !== null && (Qt(s, t, a), La(s, t, a)), t = { cache: Su() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Wv(e, t, a) {
    var s = Ft();
    a = {
      lane: s,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, gs(e) ? bp(t, a) : (a = fu(e, t, a, s), a !== null && (Qt(a, e, s), vp(a, t, s)));
  }
  function yp(e, t, a) {
    var s = Ft();
    Ga(e, t, a, s);
  }
  function Ga(e, t, a, s) {
    var f = {
      lane: s,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (gs(e)) bp(t, f);
    else {
      var d = e.alternate;
      if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = t.lastRenderedReducer, d !== null))
        try {
          var b = t.lastRenderedState, w = d(b, a);
          if (f.hasEagerState = !0, f.eagerState = w, Vt(w, b))
            return Wl(e, t, f, 0), Ve === null && Jl(), !1;
        } catch {
        } finally {
        }
      if (a = fu(e, t, f, s), a !== null)
        return Qt(a, e, s), vp(a, t, s), !0;
    }
    return !1;
  }
  function Yu(e, t, a, s) {
    if (s = {
      lane: 2,
      revertLane: Ec(),
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, gs(e)) {
      if (t) throw Error(l(479));
    } else
      t = fu(
        e,
        a,
        s,
        2
      ), t !== null && Qt(t, e, 2);
  }
  function gs(e) {
    var t = e.alternate;
    return e === ve || t !== null && t === ve;
  }
  function bp(e, t) {
    ki = cs = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function vp(e, t, a) {
    if ((a & 4194048) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, a |= s, t.lanes = a, Ah(e, a);
    }
  }
  var ys = {
    readContext: vt,
    use: hs,
    useCallback: Je,
    useContext: Je,
    useEffect: Je,
    useImperativeHandle: Je,
    useLayoutEffect: Je,
    useInsertionEffect: Je,
    useMemo: Je,
    useReducer: Je,
    useRef: Je,
    useState: Je,
    useDebugValue: Je,
    useDeferredValue: Je,
    useTransition: Je,
    useSyncExternalStore: Je,
    useId: Je,
    useHostTransitionStatus: Je,
    useFormState: Je,
    useActionState: Je,
    useOptimistic: Je,
    useMemoCache: Je,
    useCacheRefresh: Je
  }, wp = {
    readContext: vt,
    use: hs,
    useCallback: function(e, t) {
      return Ot().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: vt,
    useEffect: rp,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, ms(
        4194308,
        4,
        sp.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return ms(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      ms(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = Ot();
      t = t === void 0 ? null : t;
      var s = e();
      if (Hr) {
        ue(!0);
        try {
          e();
        } finally {
          ue(!1);
        }
      }
      return a.memoizedState = [s, t], s;
    },
    useReducer: function(e, t, a) {
      var s = Ot();
      if (a !== void 0) {
        var f = a(t);
        if (Hr) {
          ue(!0);
          try {
            a(t);
          } finally {
            ue(!1);
          }
        }
      } else f = t;
      return s.memoizedState = s.baseState = f, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: f
      }, s.queue = e, e = e.dispatch = Wv.bind(
        null,
        ve,
        e
      ), [s.memoizedState, e];
    },
    useRef: function(e) {
      var t = Ot();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Hu(e);
      var t = e.queue, a = yp.bind(null, ve, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Vu,
    useDeferredValue: function(e, t) {
      var a = Ot();
      return Iu(a, e, t);
    },
    useTransition: function() {
      var e = Hu(!1);
      return e = hp.bind(
        null,
        ve,
        e.queue,
        !0,
        !1
      ), Ot().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var s = ve, f = Ot();
      if (Re) {
        if (a === void 0)
          throw Error(l(407));
        a = a();
      } else {
        if (a = t(), Ve === null)
          throw Error(l(349));
        (Oe & 124) !== 0 || Pd(s, t, a);
      }
      f.memoizedState = a;
      var d = { value: a, getSnapshot: t };
      return f.queue = d, rp(Id.bind(null, s, d, e), [
        e
      ]), s.flags |= 2048, Ai(
        9,
        ps(),
        Vd.bind(
          null,
          s,
          d,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = Ot(), t = Ve.identifierPrefix;
      if (Re) {
        var a = Mn, s = Nn;
        a = (s & ~(1 << 32 - he(s) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = fs++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = Fv++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: $u,
    useFormState: Jd,
    useActionState: Jd,
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
      return t.queue = a, t = Yu.bind(
        null,
        ve,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Bu,
    useCacheRefresh: function() {
      return Ot().memoizedState = Jv.bind(
        null,
        ve
      );
    }
  }, Sp = {
    readContext: vt,
    use: hs,
    useCallback: up,
    useContext: vt,
    useEffect: ip,
    useImperativeHandle: op,
    useInsertionEffect: ap,
    useLayoutEffect: lp,
    useMemo: cp,
    useReducer: ds,
    useRef: np,
    useState: function() {
      return ds(Ln);
    },
    useDebugValue: Vu,
    useDeferredValue: function(e, t) {
      var a = tt();
      return fp(
        a,
        Le.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = ds(Ln)[0], t = tt().memoizedState;
      return [
        typeof e == "boolean" ? e : Va(e),
        t
      ];
    },
    useSyncExternalStore: Hd,
    useId: mp,
    useHostTransitionStatus: $u,
    useFormState: Wd,
    useActionState: Wd,
    useOptimistic: function(e, t) {
      var a = tt();
      return Yd(a, Le, e, t);
    },
    useMemoCache: Bu,
    useCacheRefresh: gp
  }, ew = {
    readContext: vt,
    use: hs,
    useCallback: up,
    useContext: vt,
    useEffect: ip,
    useImperativeHandle: op,
    useInsertionEffect: ap,
    useLayoutEffect: lp,
    useMemo: cp,
    useReducer: qu,
    useRef: np,
    useState: function() {
      return qu(Ln);
    },
    useDebugValue: Vu,
    useDeferredValue: function(e, t) {
      var a = tt();
      return Le === null ? Iu(a, e, t) : fp(
        a,
        Le.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = qu(Ln)[0], t = tt().memoizedState;
      return [
        typeof e == "boolean" ? e : Va(e),
        t
      ];
    },
    useSyncExternalStore: Hd,
    useId: mp,
    useHostTransitionStatus: $u,
    useFormState: tp,
    useActionState: tp,
    useOptimistic: function(e, t) {
      var a = tt();
      return Le !== null ? Yd(a, Le, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Bu,
    useCacheRefresh: gp
  }, Oi = null, $a = 0;
  function bs(e) {
    var t = $a;
    return $a += 1, Oi === null && (Oi = []), jd(Oi, e, t);
  }
  function Ya(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function vs(e, t) {
    throw t.$$typeof === y ? Error(l(525)) : (e = Object.prototype.toString.call(t), Error(
      l(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function xp(e) {
    var t = e._init;
    return t(e._payload);
  }
  function _p(e) {
    function t(C, T) {
      if (e) {
        var R = C.deletions;
        R === null ? (C.deletions = [T], C.flags |= 16) : R.push(T);
      }
    }
    function a(C, T) {
      if (!e) return null;
      for (; T !== null; )
        t(C, T), T = T.sibling;
      return null;
    }
    function s(C) {
      for (var T = /* @__PURE__ */ new Map(); C !== null; )
        C.key !== null ? T.set(C.key, C) : T.set(C.index, C), C = C.sibling;
      return T;
    }
    function f(C, T) {
      return C = Dn(C, T), C.index = 0, C.sibling = null, C;
    }
    function d(C, T, R) {
      return C.index = R, e ? (R = C.alternate, R !== null ? (R = R.index, R < T ? (C.flags |= 67108866, T) : R) : (C.flags |= 67108866, T)) : (C.flags |= 1048576, T);
    }
    function b(C) {
      return e && C.alternate === null && (C.flags |= 67108866), C;
    }
    function w(C, T, R, P) {
      return T === null || T.tag !== 6 ? (T = du(R, C.mode, P), T.return = C, T) : (T = f(T, R), T.return = C, T);
    }
    function _(C, T, R, P) {
      var ie = R.type;
      return ie === k ? H(
        C,
        T,
        R.props.children,
        P,
        R.key
      ) : T !== null && (T.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === Z && xp(ie) === T.type) ? (T = f(T, R.props), Ya(T, R), T.return = C, T) : (T = ts(
        R.type,
        R.key,
        R.props,
        null,
        C.mode,
        P
      ), Ya(T, R), T.return = C, T);
    }
    function z(C, T, R, P) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== R.containerInfo || T.stateNode.implementation !== R.implementation ? (T = pu(R, C.mode, P), T.return = C, T) : (T = f(T, R.children || []), T.return = C, T);
    }
    function H(C, T, R, P, ie) {
      return T === null || T.tag !== 7 ? (T = jr(
        R,
        C.mode,
        P,
        ie
      ), T.return = C, T) : (T = f(T, R), T.return = C, T);
    }
    function V(C, T, R) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return T = du(
          "" + T,
          C.mode,
          R
        ), T.return = C, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case S:
            return R = ts(
              T.type,
              T.key,
              T.props,
              null,
              C.mode,
              R
            ), Ya(R, T), R.return = C, R;
          case v:
            return T = pu(
              T,
              C.mode,
              R
            ), T.return = C, T;
          case Z:
            var P = T._init;
            return T = P(T._payload), V(C, T, R);
        }
        if (ne(T) || $(T))
          return T = jr(
            T,
            C.mode,
            R,
            null
          ), T.return = C, T;
        if (typeof T.then == "function")
          return V(C, bs(T), R);
        if (T.$$typeof === D)
          return V(
            C,
            as(C, T),
            R
          );
        vs(C, T);
      }
      return null;
    }
    function N(C, T, R, P) {
      var ie = T !== null ? T.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return ie !== null ? null : w(C, T, "" + R, P);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case S:
            return R.key === ie ? _(C, T, R, P) : null;
          case v:
            return R.key === ie ? z(C, T, R, P) : null;
          case Z:
            return ie = R._init, R = ie(R._payload), N(C, T, R, P);
        }
        if (ne(R) || $(R))
          return ie !== null ? null : H(C, T, R, P, null);
        if (typeof R.then == "function")
          return N(
            C,
            T,
            bs(R),
            P
          );
        if (R.$$typeof === D)
          return N(
            C,
            T,
            as(C, R),
            P
          );
        vs(C, R);
      }
      return null;
    }
    function U(C, T, R, P, ie) {
      if (typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint")
        return C = C.get(R) || null, w(T, C, "" + P, ie);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case S:
            return C = C.get(
              P.key === null ? R : P.key
            ) || null, _(T, C, P, ie);
          case v:
            return C = C.get(
              P.key === null ? R : P.key
            ) || null, z(T, C, P, ie);
          case Z:
            var _e = P._init;
            return P = _e(P._payload), U(
              C,
              T,
              R,
              P,
              ie
            );
        }
        if (ne(P) || $(P))
          return C = C.get(R) || null, H(T, C, P, ie, null);
        if (typeof P.then == "function")
          return U(
            C,
            T,
            R,
            bs(P),
            ie
          );
        if (P.$$typeof === D)
          return U(
            C,
            T,
            R,
            as(T, P),
            ie
          );
        vs(T, P);
      }
      return null;
    }
    function de(C, T, R, P) {
      for (var ie = null, _e = null, se = T, fe = T = 0, ft = null; se !== null && fe < R.length; fe++) {
        se.index > fe ? (ft = se, se = null) : ft = se.sibling;
        var Ce = N(
          C,
          se,
          R[fe],
          P
        );
        if (Ce === null) {
          se === null && (se = ft);
          break;
        }
        e && se && Ce.alternate === null && t(C, se), T = d(Ce, T, fe), _e === null ? ie = Ce : _e.sibling = Ce, _e = Ce, se = ft;
      }
      if (fe === R.length)
        return a(C, se), Re && Nr(C, fe), ie;
      if (se === null) {
        for (; fe < R.length; fe++)
          se = V(C, R[fe], P), se !== null && (T = d(
            se,
            T,
            fe
          ), _e === null ? ie = se : _e.sibling = se, _e = se);
        return Re && Nr(C, fe), ie;
      }
      for (se = s(se); fe < R.length; fe++)
        ft = U(
          se,
          C,
          fe,
          R[fe],
          P
        ), ft !== null && (e && ft.alternate !== null && se.delete(
          ft.key === null ? fe : ft.key
        ), T = d(
          ft,
          T,
          fe
        ), _e === null ? ie = ft : _e.sibling = ft, _e = ft);
      return e && se.forEach(function(br) {
        return t(C, br);
      }), Re && Nr(C, fe), ie;
    }
    function ce(C, T, R, P) {
      if (R == null) throw Error(l(151));
      for (var ie = null, _e = null, se = T, fe = T = 0, ft = null, Ce = R.next(); se !== null && !Ce.done; fe++, Ce = R.next()) {
        se.index > fe ? (ft = se, se = null) : ft = se.sibling;
        var br = N(C, se, Ce.value, P);
        if (br === null) {
          se === null && (se = ft);
          break;
        }
        e && se && br.alternate === null && t(C, se), T = d(br, T, fe), _e === null ? ie = br : _e.sibling = br, _e = br, se = ft;
      }
      if (Ce.done)
        return a(C, se), Re && Nr(C, fe), ie;
      if (se === null) {
        for (; !Ce.done; fe++, Ce = R.next())
          Ce = V(C, Ce.value, P), Ce !== null && (T = d(Ce, T, fe), _e === null ? ie = Ce : _e.sibling = Ce, _e = Ce);
        return Re && Nr(C, fe), ie;
      }
      for (se = s(se); !Ce.done; fe++, Ce = R.next())
        Ce = U(se, C, fe, Ce.value, P), Ce !== null && (e && Ce.alternate !== null && se.delete(Ce.key === null ? fe : Ce.key), T = d(Ce, T, fe), _e === null ? ie = Ce : _e.sibling = Ce, _e = Ce);
      return e && se.forEach(function(t1) {
        return t(C, t1);
      }), Re && Nr(C, fe), ie;
    }
    function He(C, T, R, P) {
      if (typeof R == "object" && R !== null && R.type === k && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case S:
            e: {
              for (var ie = R.key; T !== null; ) {
                if (T.key === ie) {
                  if (ie = R.type, ie === k) {
                    if (T.tag === 7) {
                      a(
                        C,
                        T.sibling
                      ), P = f(
                        T,
                        R.props.children
                      ), P.return = C, C = P;
                      break e;
                    }
                  } else if (T.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === Z && xp(ie) === T.type) {
                    a(
                      C,
                      T.sibling
                    ), P = f(T, R.props), Ya(P, R), P.return = C, C = P;
                    break e;
                  }
                  a(C, T);
                  break;
                } else t(C, T);
                T = T.sibling;
              }
              R.type === k ? (P = jr(
                R.props.children,
                C.mode,
                P,
                R.key
              ), P.return = C, C = P) : (P = ts(
                R.type,
                R.key,
                R.props,
                null,
                C.mode,
                P
              ), Ya(P, R), P.return = C, C = P);
            }
            return b(C);
          case v:
            e: {
              for (ie = R.key; T !== null; ) {
                if (T.key === ie)
                  if (T.tag === 4 && T.stateNode.containerInfo === R.containerInfo && T.stateNode.implementation === R.implementation) {
                    a(
                      C,
                      T.sibling
                    ), P = f(T, R.children || []), P.return = C, C = P;
                    break e;
                  } else {
                    a(C, T);
                    break;
                  }
                else t(C, T);
                T = T.sibling;
              }
              P = pu(R, C.mode, P), P.return = C, C = P;
            }
            return b(C);
          case Z:
            return ie = R._init, R = ie(R._payload), He(
              C,
              T,
              R,
              P
            );
        }
        if (ne(R))
          return de(
            C,
            T,
            R,
            P
          );
        if ($(R)) {
          if (ie = $(R), typeof ie != "function") throw Error(l(150));
          return R = ie.call(R), ce(
            C,
            T,
            R,
            P
          );
        }
        if (typeof R.then == "function")
          return He(
            C,
            T,
            bs(R),
            P
          );
        if (R.$$typeof === D)
          return He(
            C,
            T,
            as(C, R),
            P
          );
        vs(C, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R, T !== null && T.tag === 6 ? (a(C, T.sibling), P = f(T, R), P.return = C, C = P) : (a(C, T), P = du(R, C.mode, P), P.return = C, C = P), b(C)) : a(C, T);
    }
    return function(C, T, R, P) {
      try {
        $a = 0;
        var ie = He(
          C,
          T,
          R,
          P
        );
        return Oi = null, ie;
      } catch (se) {
        if (se === Ua || se === ss) throw se;
        var _e = It(29, se, null, C.mode);
        return _e.lanes = P, _e.return = C, _e;
      } finally {
      }
    };
  }
  var Ci = _p(!0), Ep = _p(!1), ln = je(null), wn = null;
  function rr(e) {
    var t = e.alternate;
    x(it, it.current & 1), x(ln, e), wn === null && (t === null || Ei.current !== null || t.memoizedState !== null) && (wn = e);
  }
  function kp(e) {
    if (e.tag === 22) {
      if (x(it, it.current), x(ln, e), wn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (wn = e);
      }
    } else ir();
  }
  function ir() {
    x(it, it.current), x(ln, ln.current);
  }
  function qn(e) {
    Ee(ln), wn === e && (wn = null), Ee(it);
  }
  var it = je(0);
  function ws(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Uc(a)))
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
  function Fu(e, t, a, s) {
    t = e.memoizedState, a = a(s, t), a = a == null ? t : g({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Qu = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var s = Ft(), f = er(s);
      f.payload = t, a != null && (f.callback = a), t = tr(e, f, s), t !== null && (Qt(t, e, s), La(t, e, s));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var s = Ft(), f = er(s);
      f.tag = 1, f.payload = t, a != null && (f.callback = a), t = tr(e, f, s), t !== null && (Qt(t, e, s), La(t, e, s));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Ft(), s = er(a);
      s.tag = 2, t != null && (s.callback = t), t = tr(e, s, a), t !== null && (Qt(t, e, a), La(t, e, a));
    }
  };
  function Tp(e, t, a, s, f, d, b) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, d, b) : t.prototype && t.prototype.isPureReactComponent ? !Oa(a, s) || !Oa(f, d) : !0;
  }
  function Ap(e, t, a, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, s), t.state !== e && Qu.enqueueReplaceState(t, t.state, null);
  }
  function Pr(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var s in t)
        s !== "ref" && (a[s] = t[s]);
    }
    if (e = e.defaultProps) {
      a === t && (a = g({}, a));
      for (var f in e)
        a[f] === void 0 && (a[f] = e[f]);
    }
    return a;
  }
  var Ss = typeof reportError == "function" ? reportError : function(e) {
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
  function Op(e) {
    Ss(e);
  }
  function Cp(e) {
    console.error(e);
  }
  function Rp(e) {
    Ss(e);
  }
  function xs(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function zp(e, t, a) {
    try {
      var s = e.onCaughtError;
      s(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (f) {
      setTimeout(function() {
        throw f;
      });
    }
  }
  function Ku(e, t, a) {
    return a = er(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      xs(e, t);
    }, a;
  }
  function jp(e) {
    return e = er(e), e.tag = 3, e;
  }
  function Dp(e, t, a, s) {
    var f = a.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var d = s.value;
      e.payload = function() {
        return f(d);
      }, e.callback = function() {
        zp(t, a, s);
      };
    }
    var b = a.stateNode;
    b !== null && typeof b.componentDidCatch == "function" && (e.callback = function() {
      zp(t, a, s), typeof f != "function" && (cr === null ? cr = /* @__PURE__ */ new Set([this]) : cr.add(this));
      var w = s.stack;
      this.componentDidCatch(s.value, {
        componentStack: w !== null ? w : ""
      });
    });
  }
  function tw(e, t, a, s, f) {
    if (a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
      if (t = a.alternate, t !== null && Da(
        t,
        a,
        f,
        !0
      ), a = ln.current, a !== null) {
        switch (a.tag) {
          case 13:
            return wn === null ? vc() : a.alternate === null && Xe === 0 && (Xe = 3), a.flags &= -257, a.flags |= 65536, a.lanes = f, s === Eu ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([s]) : t.add(s), Sc(e, s, f)), !1;
          case 22:
            return a.flags |= 65536, s === Eu ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([s])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([s]) : a.add(s)), Sc(e, s, f)), !1;
        }
        throw Error(l(435, a.tag));
      }
      return Sc(e, s, f), vc(), !1;
    }
    if (Re)
      return t = ln.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = f, s !== yu && (e = Error(l(422), { cause: s }), ja(tn(e, a)))) : (s !== yu && (t = Error(l(423), {
        cause: s
      }), ja(
        tn(t, a)
      )), e = e.current.alternate, e.flags |= 65536, f &= -f, e.lanes |= f, s = tn(s, a), f = Ku(
        e.stateNode,
        s,
        f
      ), Au(e, f), Xe !== 4 && (Xe = 2)), !1;
    var d = Error(l(520), { cause: s });
    if (d = tn(d, a), Wa === null ? Wa = [d] : Wa.push(d), Xe !== 4 && (Xe = 2), t === null) return !0;
    s = tn(s, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = f & -f, a.lanes |= e, e = Ku(a.stateNode, s, e), Au(a, e), !1;
        case 1:
          if (t = a.type, d = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (cr === null || !cr.has(d))))
            return a.flags |= 65536, f &= -f, a.lanes |= f, f = jp(f), Dp(
              f,
              e,
              a,
              s
            ), Au(a, f), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Np = Error(l(461)), ut = !1;
  function pt(e, t, a, s) {
    t.child = e === null ? Ep(t, null, a, s) : Ci(
      t,
      e.child,
      a,
      s
    );
  }
  function Mp(e, t, a, s, f) {
    a = a.render;
    var d = t.ref;
    if ("ref" in s) {
      var b = {};
      for (var w in s)
        w !== "ref" && (b[w] = s[w]);
    } else b = s;
    return Lr(t), s = ju(
      e,
      t,
      a,
      b,
      d,
      f
    ), w = Du(), e !== null && !ut ? (Nu(e, t, f), Hn(e, t, f)) : (Re && w && mu(t), t.flags |= 1, pt(e, t, s, f), t.child);
  }
  function Up(e, t, a, s, f) {
    if (e === null) {
      var d = a.type;
      return typeof d == "function" && !hu(d) && d.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = d, Bp(
        e,
        t,
        d,
        s,
        f
      )) : (e = ts(
        a.type,
        null,
        s,
        t,
        t.mode,
        f
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (d = e.child, !rc(e, f)) {
      var b = d.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Oa, a(b, s) && e.ref === t.ref)
        return Hn(e, t, f);
    }
    return t.flags |= 1, e = Dn(d, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Bp(e, t, a, s, f) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (Oa(d, s) && e.ref === t.ref)
        if (ut = !1, t.pendingProps = s = d, rc(e, f))
          (e.flags & 131072) !== 0 && (ut = !0);
        else
          return t.lanes = e.lanes, Hn(e, t, f);
    }
    return Xu(
      e,
      t,
      a,
      s,
      f
    );
  }
  function Lp(e, t, a) {
    var s = t.pendingProps, f = s.children, d = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (s = d !== null ? d.baseLanes | a : a, e !== null) {
          for (f = t.child = e.child, d = 0; f !== null; )
            d = d | f.lanes | f.childLanes, f = f.sibling;
          t.childLanes = d & ~s;
        } else t.childLanes = 0, t.child = null;
        return qp(
          e,
          t,
          s,
          a
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ls(
          t,
          d !== null ? d.cachePool : null
        ), d !== null ? Bd(t, d) : Cu(), kp(t);
      else
        return t.lanes = t.childLanes = 536870912, qp(
          e,
          t,
          d !== null ? d.baseLanes | a : a,
          a
        );
    } else
      d !== null ? (ls(t, d.cachePool), Bd(t, d), ir(), t.memoizedState = null) : (e !== null && ls(t, null), Cu(), ir());
    return pt(e, t, f, a), t.child;
  }
  function qp(e, t, a, s) {
    var f = _u();
    return f = f === null ? null : { parent: rt._currentValue, pool: f }, t.memoizedState = {
      baseLanes: a,
      cachePool: f
    }, e !== null && ls(t, null), Cu(), kp(t), e !== null && Da(e, t, s, !0), null;
  }
  function _s(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(l(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Xu(e, t, a, s, f) {
    return Lr(t), a = ju(
      e,
      t,
      a,
      s,
      void 0,
      f
    ), s = Du(), e !== null && !ut ? (Nu(e, t, f), Hn(e, t, f)) : (Re && s && mu(t), t.flags |= 1, pt(e, t, a, f), t.child);
  }
  function Hp(e, t, a, s, f, d) {
    return Lr(t), t.updateQueue = null, a = qd(
      t,
      s,
      a,
      f
    ), Ld(e), s = Du(), e !== null && !ut ? (Nu(e, t, d), Hn(e, t, d)) : (Re && s && mu(t), t.flags |= 1, pt(e, t, a, d), t.child);
  }
  function Pp(e, t, a, s, f) {
    if (Lr(t), t.stateNode === null) {
      var d = vi, b = a.contextType;
      typeof b == "object" && b !== null && (d = vt(b)), d = new a(s, d), t.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = Qu, t.stateNode = d, d._reactInternals = t, d = t.stateNode, d.props = s, d.state = t.memoizedState, d.refs = {}, ku(t), b = a.contextType, d.context = typeof b == "object" && b !== null ? vt(b) : vi, d.state = t.memoizedState, b = a.getDerivedStateFromProps, typeof b == "function" && (Fu(
        t,
        a,
        b,
        s
      ), d.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (b = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), b !== d.state && Qu.enqueueReplaceState(d, d.state, null), Ha(t, s, d, f), qa(), d.state = t.memoizedState), typeof d.componentDidMount == "function" && (t.flags |= 4194308), s = !0;
    } else if (e === null) {
      d = t.stateNode;
      var w = t.memoizedProps, _ = Pr(a, w);
      d.props = _;
      var z = d.context, H = a.contextType;
      b = vi, typeof H == "object" && H !== null && (b = vt(H));
      var V = a.getDerivedStateFromProps;
      H = typeof V == "function" || typeof d.getSnapshotBeforeUpdate == "function", w = t.pendingProps !== w, H || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (w || z !== b) && Ap(
        t,
        d,
        s,
        b
      ), Wn = !1;
      var N = t.memoizedState;
      d.state = N, Ha(t, s, d, f), qa(), z = t.memoizedState, w || N !== z || Wn ? (typeof V == "function" && (Fu(
        t,
        a,
        V,
        s
      ), z = t.memoizedState), (_ = Wn || Tp(
        t,
        a,
        _,
        s,
        N,
        z,
        b
      )) ? (H || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = z), d.props = s, d.state = z, d.context = b, s = _) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      d = t.stateNode, Tu(e, t), b = t.memoizedProps, H = Pr(a, b), d.props = H, V = t.pendingProps, N = d.context, z = a.contextType, _ = vi, typeof z == "object" && z !== null && (_ = vt(z)), w = a.getDerivedStateFromProps, (z = typeof w == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (b !== V || N !== _) && Ap(
        t,
        d,
        s,
        _
      ), Wn = !1, N = t.memoizedState, d.state = N, Ha(t, s, d, f), qa();
      var U = t.memoizedState;
      b !== V || N !== U || Wn || e !== null && e.dependencies !== null && is(e.dependencies) ? (typeof w == "function" && (Fu(
        t,
        a,
        w,
        s
      ), U = t.memoizedState), (H = Wn || Tp(
        t,
        a,
        H,
        s,
        N,
        U,
        _
      ) || e !== null && e.dependencies !== null && is(e.dependencies)) ? (z || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(s, U, _), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(
        s,
        U,
        _
      )), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || b === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || b === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = U), d.props = s, d.state = U, d.context = _, s = H) : (typeof d.componentDidUpdate != "function" || b === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || b === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return d = s, _s(e, t), s = (t.flags & 128) !== 0, d || s ? (d = t.stateNode, a = s && typeof a.getDerivedStateFromError != "function" ? null : d.render(), t.flags |= 1, e !== null && s ? (t.child = Ci(
      t,
      e.child,
      null,
      f
    ), t.child = Ci(
      t,
      null,
      a,
      f
    )) : pt(e, t, a, f), t.memoizedState = d.state, e = t.child) : e = Hn(
      e,
      t,
      f
    ), e;
  }
  function Vp(e, t, a, s) {
    return za(), t.flags |= 256, pt(e, t, a, s), t.child;
  }
  var Zu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ju(e) {
    return { baseLanes: e, cachePool: Cd() };
  }
  function Wu(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= sn), e;
  }
  function Ip(e, t, a) {
    var s = t.pendingProps, f = !1, d = (t.flags & 128) !== 0, b;
    if ((b = d) || (b = e !== null && e.memoizedState === null ? !1 : (it.current & 2) !== 0), b && (f = !0, t.flags &= -129), b = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Re) {
        if (f ? rr(t) : ir(), Re) {
          var w = Ke, _;
          if (_ = w) {
            e: {
              for (_ = w, w = vn; _.nodeType !== 8; ) {
                if (!w) {
                  w = null;
                  break e;
                }
                if (_ = dn(
                  _.nextSibling
                ), _ === null) {
                  w = null;
                  break e;
                }
              }
              w = _;
            }
            w !== null ? (t.memoizedState = {
              dehydrated: w,
              treeContext: Dr !== null ? { id: Nn, overflow: Mn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, _ = It(
              18,
              null,
              null,
              0
            ), _.stateNode = w, _.return = t, t.child = _, Et = t, Ke = null, _ = !0) : _ = !1;
          }
          _ || Ur(t);
        }
        if (w = t.memoizedState, w !== null && (w = w.dehydrated, w !== null))
          return Uc(w) ? t.lanes = 32 : t.lanes = 536870912, null;
        qn(t);
      }
      return w = s.children, s = s.fallback, f ? (ir(), f = t.mode, w = Es(
        { mode: "hidden", children: w },
        f
      ), s = jr(
        s,
        f,
        a,
        null
      ), w.return = t, s.return = t, w.sibling = s, t.child = w, f = t.child, f.memoizedState = Ju(a), f.childLanes = Wu(
        e,
        b,
        a
      ), t.memoizedState = Zu, s) : (rr(t), ec(t, w));
    }
    if (_ = e.memoizedState, _ !== null && (w = _.dehydrated, w !== null)) {
      if (d)
        t.flags & 256 ? (rr(t), t.flags &= -257, t = tc(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (ir(), t.child = e.child, t.flags |= 128, t = null) : (ir(), f = s.fallback, w = t.mode, s = Es(
          { mode: "visible", children: s.children },
          w
        ), f = jr(
          f,
          w,
          a,
          null
        ), f.flags |= 2, s.return = t, f.return = t, s.sibling = f, t.child = s, Ci(
          t,
          e.child,
          null,
          a
        ), s = t.child, s.memoizedState = Ju(a), s.childLanes = Wu(
          e,
          b,
          a
        ), t.memoizedState = Zu, t = f);
      else if (rr(t), Uc(w)) {
        if (b = w.nextSibling && w.nextSibling.dataset, b) var z = b.dgst;
        b = z, s = Error(l(419)), s.stack = "", s.digest = b, ja({ value: s, source: null, stack: null }), t = tc(
          e,
          t,
          a
        );
      } else if (ut || Da(e, t, a, !1), b = (a & e.childLanes) !== 0, ut || b) {
        if (b = Ve, b !== null && (s = a & -a, s = (s & 42) !== 0 ? 1 : Bo(s), s = (s & (b.suspendedLanes | a)) !== 0 ? 0 : s, s !== 0 && s !== _.retryLane))
          throw _.retryLane = s, bi(e, s), Qt(b, e, s), Np;
        w.data === "$?" || vc(), t = tc(
          e,
          t,
          a
        );
      } else
        w.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = _.treeContext, Ke = dn(
          w.nextSibling
        ), Et = t, Re = !0, Mr = null, vn = !1, e !== null && (rn[an++] = Nn, rn[an++] = Mn, rn[an++] = Dr, Nn = e.id, Mn = e.overflow, Dr = t), t = ec(
          t,
          s.children
        ), t.flags |= 4096);
      return t;
    }
    return f ? (ir(), f = s.fallback, w = t.mode, _ = e.child, z = _.sibling, s = Dn(_, {
      mode: "hidden",
      children: s.children
    }), s.subtreeFlags = _.subtreeFlags & 65011712, z !== null ? f = Dn(z, f) : (f = jr(
      f,
      w,
      a,
      null
    ), f.flags |= 2), f.return = t, s.return = t, s.sibling = f, t.child = s, s = f, f = t.child, w = e.child.memoizedState, w === null ? w = Ju(a) : (_ = w.cachePool, _ !== null ? (z = rt._currentValue, _ = _.parent !== z ? { parent: z, pool: z } : _) : _ = Cd(), w = {
      baseLanes: w.baseLanes | a,
      cachePool: _
    }), f.memoizedState = w, f.childLanes = Wu(
      e,
      b,
      a
    ), t.memoizedState = Zu, s) : (rr(t), a = e.child, e = a.sibling, a = Dn(a, {
      mode: "visible",
      children: s.children
    }), a.return = t, a.sibling = null, e !== null && (b = t.deletions, b === null ? (t.deletions = [e], t.flags |= 16) : b.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function ec(e, t) {
    return t = Es(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Es(e, t) {
    return e = It(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function tc(e, t, a) {
    return Ci(t, e.child, null, a), e = ec(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Gp(e, t, a) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), vu(e.return, t, a);
  }
  function nc(e, t, a, s, f) {
    var d = e.memoizedState;
    d === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: s,
      tail: a,
      tailMode: f
    } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = s, d.tail = a, d.tailMode = f);
  }
  function $p(e, t, a) {
    var s = t.pendingProps, f = s.revealOrder, d = s.tail;
    if (pt(e, t, s.children, a), s = it.current, (s & 2) !== 0)
      s = s & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Gp(e, a, t);
          else if (e.tag === 19)
            Gp(e, a, t);
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
      s &= 1;
    }
    switch (x(it, s), f) {
      case "forwards":
        for (a = t.child, f = null; a !== null; )
          e = a.alternate, e !== null && ws(e) === null && (f = a), a = a.sibling;
        a = f, a === null ? (f = t.child, t.child = null) : (f = a.sibling, a.sibling = null), nc(
          t,
          !1,
          f,
          a,
          d
        );
        break;
      case "backwards":
        for (a = null, f = t.child, t.child = null; f !== null; ) {
          if (e = f.alternate, e !== null && ws(e) === null) {
            t.child = f;
            break;
          }
          e = f.sibling, f.sibling = a, a = f, f = e;
        }
        nc(
          t,
          !0,
          a,
          null,
          d
        );
        break;
      case "together":
        nc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Hn(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), ur |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (Da(
          e,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, a = Dn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = Dn(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function rc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && is(e)));
  }
  function nw(e, t, a) {
    switch (t.tag) {
      case 3:
        yt(t, t.stateNode.containerInfo), Jn(t, rt, e.memoizedState.cache), za();
        break;
      case 27:
      case 5:
        _t(t);
        break;
      case 4:
        yt(t, t.stateNode.containerInfo);
        break;
      case 10:
        Jn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var s = t.memoizedState;
        if (s !== null)
          return s.dehydrated !== null ? (rr(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Ip(e, t, a) : (rr(t), e = Hn(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        rr(t);
        break;
      case 19:
        var f = (e.flags & 128) !== 0;
        if (s = (a & t.childLanes) !== 0, s || (Da(
          e,
          t,
          a,
          !1
        ), s = (a & t.childLanes) !== 0), f) {
          if (s)
            return $p(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (f = t.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), x(it, it.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Lp(e, t, a);
      case 24:
        Jn(t, rt, e.memoizedState.cache);
    }
    return Hn(e, t, a);
  }
  function Yp(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ut = !0;
      else {
        if (!rc(e, a) && (t.flags & 128) === 0)
          return ut = !1, nw(
            e,
            t,
            a
          );
        ut = (e.flags & 131072) !== 0;
      }
    else
      ut = !1, Re && (t.flags & 1048576) !== 0 && xd(t, rs, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var s = t.elementType, f = s._init;
          if (s = f(s._payload), t.type = s, typeof s == "function")
            hu(s) ? (e = Pr(s, e), t.tag = 1, t = Pp(
              null,
              t,
              s,
              e,
              a
            )) : (t.tag = 0, t = Xu(
              null,
              t,
              s,
              e,
              a
            ));
          else {
            if (s != null) {
              if (f = s.$$typeof, f === I) {
                t.tag = 11, t = Mp(
                  null,
                  t,
                  s,
                  e,
                  a
                );
                break e;
              } else if (f === W) {
                t.tag = 14, t = Up(
                  null,
                  t,
                  s,
                  e,
                  a
                );
                break e;
              }
            }
            throw t = ee(s) || s, Error(l(306, t, ""));
          }
        }
        return t;
      case 0:
        return Xu(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return s = t.type, f = Pr(
          s,
          t.pendingProps
        ), Pp(
          e,
          t,
          s,
          f,
          a
        );
      case 3:
        e: {
          if (yt(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(l(387));
          s = t.pendingProps;
          var d = t.memoizedState;
          f = d.element, Tu(e, t), Ha(t, s, null, a);
          var b = t.memoizedState;
          if (s = b.cache, Jn(t, rt, s), s !== d.cache && wu(
            t,
            [rt],
            a,
            !0
          ), qa(), s = b.element, d.isDehydrated)
            if (d = {
              element: s,
              isDehydrated: !1,
              cache: b.cache
            }, t.updateQueue.baseState = d, t.memoizedState = d, t.flags & 256) {
              t = Vp(
                e,
                t,
                s,
                a
              );
              break e;
            } else if (s !== f) {
              f = tn(
                Error(l(424)),
                t
              ), ja(f), t = Vp(
                e,
                t,
                s,
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
              for (Ke = dn(e.firstChild), Et = t, Re = !0, Mr = null, vn = !0, a = Ep(
                t,
                null,
                s,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (za(), s === f) {
              t = Hn(
                e,
                t,
                a
              );
              break e;
            }
            pt(
              e,
              t,
              s,
              a
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return _s(e, t), e === null ? (a = Xm(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : Re || (a = t.type, e = t.pendingProps, s = Ls(
          De.current
        ).createElement(a), s[bt] = t, s[Tt] = e, gt(s, a, e), ot(s), t.stateNode = s) : t.memoizedState = Xm(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return _t(t), e === null && Re && (s = t.stateNode = Fm(
          t.type,
          t.pendingProps,
          De.current
        ), Et = t, vn = !0, f = Ke, dr(t.type) ? (Bc = f, Ke = dn(
          s.firstChild
        )) : Ke = f), pt(
          e,
          t,
          t.pendingProps.children,
          a
        ), _s(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Re && ((f = s = Ke) && (s = Rw(
          s,
          t.type,
          t.pendingProps,
          vn
        ), s !== null ? (t.stateNode = s, Et = t, Ke = dn(
          s.firstChild
        ), vn = !1, f = !0) : f = !1), f || Ur(t)), _t(t), f = t.type, d = t.pendingProps, b = e !== null ? e.memoizedProps : null, s = d.children, Dc(f, d) ? s = null : b !== null && Dc(f, b) && (t.flags |= 32), t.memoizedState !== null && (f = ju(
          e,
          t,
          Qv,
          null,
          null,
          a
        ), ol._currentValue = f), _s(e, t), pt(e, t, s, a), t.child;
      case 6:
        return e === null && Re && ((e = a = Ke) && (a = zw(
          a,
          t.pendingProps,
          vn
        ), a !== null ? (t.stateNode = a, Et = t, Ke = null, e = !0) : e = !1), e || Ur(t)), null;
      case 13:
        return Ip(e, t, a);
      case 4:
        return yt(
          t,
          t.stateNode.containerInfo
        ), s = t.pendingProps, e === null ? t.child = Ci(
          t,
          null,
          s,
          a
        ) : pt(
          e,
          t,
          s,
          a
        ), t.child;
      case 11:
        return Mp(
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
        return s = t.pendingProps, Jn(t, t.type, s.value), pt(
          e,
          t,
          s.children,
          a
        ), t.child;
      case 9:
        return f = t.type._context, s = t.pendingProps.children, Lr(t), f = vt(f), s = s(f), t.flags |= 1, pt(e, t, s, a), t.child;
      case 14:
        return Up(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Bp(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return $p(e, t, a);
      case 31:
        return s = t.pendingProps, a = t.mode, s = {
          mode: s.mode,
          children: s.children
        }, e === null ? (a = Es(
          s,
          a
        ), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = Dn(e.child, s), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
      case 22:
        return Lp(e, t, a);
      case 24:
        return Lr(t), s = vt(rt), e === null ? (f = _u(), f === null && (f = Ve, d = Su(), f.pooledCache = d, d.refCount++, d !== null && (f.pooledCacheLanes |= a), f = d), t.memoizedState = {
          parent: s,
          cache: f
        }, ku(t), Jn(t, rt, f)) : ((e.lanes & a) !== 0 && (Tu(e, t), Ha(t, null, null, a), qa()), f = e.memoizedState, d = t.memoizedState, f.parent !== s ? (f = { parent: s, cache: s }, t.memoizedState = f, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = f), Jn(t, rt, s)) : (s = d.cache, Jn(t, rt, s), s !== f.cache && wu(
          t,
          [rt],
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
    throw Error(l(156, t.tag));
  }
  function Pn(e) {
    e.flags |= 4;
  }
  function Fp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !tg(t)) {
      if (t = ln.current, t !== null && ((Oe & 4194048) === Oe ? wn !== null : (Oe & 62914560) !== Oe && (Oe & 536870912) === 0 || t !== wn))
        throw Ba = Eu, Rd;
      e.flags |= 8192;
    }
  }
  function ks(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? kh() : 536870912, e.lanes |= t, Di |= t);
  }
  function Fa(e, t) {
    if (!Re)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var s = null; a !== null; )
            a.alternate !== null && (s = a), a = a.sibling;
          s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null;
      }
  }
  function Qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, s = 0;
    if (t)
      for (var f = e.child; f !== null; )
        a |= f.lanes | f.childLanes, s |= f.subtreeFlags & 65011712, s |= f.flags & 65011712, f.return = e, f = f.sibling;
    else
      for (f = e.child; f !== null; )
        a |= f.lanes | f.childLanes, s |= f.subtreeFlags, s |= f.flags, f.return = e, f = f.sibling;
    return e.subtreeFlags |= s, e.childLanes = a, t;
  }
  function rw(e, t, a) {
    var s = t.pendingProps;
    switch (gu(t), t.tag) {
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
        return Qe(t), null;
      case 1:
        return Qe(t), null;
      case 3:
        return a = t.stateNode, s = null, e !== null && (s = e.memoizedState.cache), t.memoizedState.cache !== s && (t.flags |= 2048), Bn(rt), lt(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ra(t) ? Pn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, kd())), Qe(t), null;
      case 26:
        return a = t.memoizedState, e === null ? (Pn(t), a !== null ? (Qe(t), Fp(t, a)) : (Qe(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Pn(t), Qe(t), Fp(t, a)) : (Qe(t), t.flags &= -16777217) : (e.memoizedProps !== s && Pn(t), Qe(t), t.flags &= -16777217), null;
      case 27:
        Lt(t), a = De.current;
        var f = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== s && Pn(t);
        else {
          if (!s) {
            if (t.stateNode === null)
              throw Error(l(166));
            return Qe(t), null;
          }
          e = me.current, Ra(t) ? _d(t) : (e = Fm(f, s, a), t.stateNode = e, Pn(t));
        }
        return Qe(t), null;
      case 5:
        if (Lt(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== s && Pn(t);
        else {
          if (!s) {
            if (t.stateNode === null)
              throw Error(l(166));
            return Qe(t), null;
          }
          if (e = me.current, Ra(t))
            _d(t);
          else {
            switch (f = Ls(
              De.current
            ), e) {
              case 1:
                e = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                e = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    e = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    e = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof s.is == "string" ? f.createElement("select", { is: s.is }) : f.createElement("select"), s.multiple ? e.multiple = !0 : s.size && (e.size = s.size);
                    break;
                  default:
                    e = typeof s.is == "string" ? f.createElement(a, { is: s.is }) : f.createElement(a);
                }
            }
            e[bt] = t, e[Tt] = s;
            e: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                e.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t)
                  break e;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = e;
            e: switch (gt(e, a, s), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!s.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Pn(t);
          }
        }
        return Qe(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== s && Pn(t);
        else {
          if (typeof s != "string" && t.stateNode === null)
            throw Error(l(166));
          if (e = De.current, Ra(t)) {
            if (e = t.stateNode, a = t.memoizedProps, s = null, f = Et, f !== null)
              switch (f.tag) {
                case 27:
                case 5:
                  s = f.memoizedProps;
              }
            e[bt] = t, e = !!(e.nodeValue === a || s !== null && s.suppressHydrationWarning === !0 || Hm(e.nodeValue, a)), e || Ur(t);
          } else
            e = Ls(e).createTextNode(
              s
            ), e[bt] = t, t.stateNode = e;
        }
        return Qe(t), null;
      case 13:
        if (s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (f = Ra(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!f) throw Error(l(318));
              if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f) throw Error(l(317));
              f[bt] = t;
            } else
              za(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Qe(t), f = !1;
          } else
            f = kd(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = f), f = !0;
          if (!f)
            return t.flags & 256 ? (qn(t), t) : (qn(t), null);
        }
        if (qn(t), (t.flags & 128) !== 0)
          return t.lanes = a, t;
        if (a = s !== null, e = e !== null && e.memoizedState !== null, a) {
          s = t.child, f = null, s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (f = s.alternate.memoizedState.cachePool.pool);
          var d = null;
          s.memoizedState !== null && s.memoizedState.cachePool !== null && (d = s.memoizedState.cachePool.pool), d !== f && (s.flags |= 2048);
        }
        return a !== e && a && (t.child.flags |= 8192), ks(t, t.updateQueue), Qe(t), null;
      case 4:
        return lt(), e === null && Oc(t.stateNode.containerInfo), Qe(t), null;
      case 10:
        return Bn(t.type), Qe(t), null;
      case 19:
        if (Ee(it), f = t.memoizedState, f === null) return Qe(t), null;
        if (s = (t.flags & 128) !== 0, d = f.rendering, d === null)
          if (s) Fa(f, !1);
          else {
            if (Xe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (d = ws(e), d !== null) {
                  for (t.flags |= 128, Fa(f, !1), e = d.updateQueue, t.updateQueue = e, ks(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    Sd(a, e), a = a.sibling;
                  return x(
                    it,
                    it.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            f.tail !== null && qt() > Os && (t.flags |= 128, s = !0, Fa(f, !1), t.lanes = 4194304);
          }
        else {
          if (!s)
            if (e = ws(d), e !== null) {
              if (t.flags |= 128, s = !0, e = e.updateQueue, t.updateQueue = e, ks(t, e), Fa(f, !0), f.tail === null && f.tailMode === "hidden" && !d.alternate && !Re)
                return Qe(t), null;
            } else
              2 * qt() - f.renderingStartTime > Os && a !== 536870912 && (t.flags |= 128, s = !0, Fa(f, !1), t.lanes = 4194304);
          f.isBackwards ? (d.sibling = t.child, t.child = d) : (e = f.last, e !== null ? e.sibling = d : t.child = d, f.last = d);
        }
        return f.tail !== null ? (t = f.tail, f.rendering = t, f.tail = t.sibling, f.renderingStartTime = qt(), t.sibling = null, e = it.current, x(it, s ? e & 1 | 2 : e & 1), t) : (Qe(t), null);
      case 22:
      case 23:
        return qn(t), Ru(), s = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== s && (t.flags |= 8192) : s && (t.flags |= 8192), s ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t), a = t.updateQueue, a !== null && ks(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), s = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool), s !== a && (t.flags |= 2048), e !== null && Ee(qr), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Bn(rt), Qe(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function iw(e, t) {
    switch (gu(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Bn(rt), lt(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Lt(t), null;
      case 13:
        if (qn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(l(340));
          za();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ee(it), null;
      case 4:
        return lt(), null;
      case 10:
        return Bn(t.type), null;
      case 22:
      case 23:
        return qn(t), Ru(), e !== null && Ee(qr), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Bn(rt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Qp(e, t) {
    switch (gu(t), t.tag) {
      case 3:
        Bn(rt), lt();
        break;
      case 26:
      case 27:
      case 5:
        Lt(t);
        break;
      case 4:
        lt();
        break;
      case 13:
        qn(t);
        break;
      case 19:
        Ee(it);
        break;
      case 10:
        Bn(t.type);
        break;
      case 22:
      case 23:
        qn(t), Ru(), e !== null && Ee(qr);
        break;
      case 24:
        Bn(rt);
    }
  }
  function Qa(e, t) {
    try {
      var a = t.updateQueue, s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var f = s.next;
        a = f;
        do {
          if ((a.tag & e) === e) {
            s = void 0;
            var d = a.create, b = a.inst;
            s = d(), b.destroy = s;
          }
          a = a.next;
        } while (a !== f);
      }
    } catch (w) {
      Pe(t, t.return, w);
    }
  }
  function ar(e, t, a) {
    try {
      var s = t.updateQueue, f = s !== null ? s.lastEffect : null;
      if (f !== null) {
        var d = f.next;
        s = d;
        do {
          if ((s.tag & e) === e) {
            var b = s.inst, w = b.destroy;
            if (w !== void 0) {
              b.destroy = void 0, f = t;
              var _ = a, z = w;
              try {
                z();
              } catch (H) {
                Pe(
                  f,
                  _,
                  H
                );
              }
            }
          }
          s = s.next;
        } while (s !== d);
      }
    } catch (H) {
      Pe(t, t.return, H);
    }
  }
  function Kp(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Ud(t, a);
      } catch (s) {
        Pe(e, e.return, s);
      }
    }
  }
  function Xp(e, t, a) {
    a.props = Pr(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (s) {
      Pe(e, t, s);
    }
  }
  function Ka(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var s = e.stateNode;
            break;
          case 30:
            s = e.stateNode;
            break;
          default:
            s = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(s) : a.current = s;
      }
    } catch (f) {
      Pe(e, t, f);
    }
  }
  function Sn(e, t) {
    var a = e.ref, s = e.refCleanup;
    if (a !== null)
      if (typeof s == "function")
        try {
          s();
        } catch (f) {
          Pe(e, t, f);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (f) {
          Pe(e, t, f);
        }
      else a.current = null;
  }
  function Zp(e) {
    var t = e.type, a = e.memoizedProps, s = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && s.focus();
          break e;
        case "img":
          a.src ? s.src = a.src : a.srcSet && (s.srcset = a.srcSet);
      }
    } catch (f) {
      Pe(e, e.return, f);
    }
  }
  function ic(e, t, a) {
    try {
      var s = e.stateNode;
      kw(s, e.type, a, t), s[Tt] = t;
    } catch (f) {
      Pe(e, e.return, f);
    }
  }
  function Jp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && dr(e.type) || e.tag === 4;
  }
  function ac(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Jp(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && dr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function lc(e, t, a) {
    var s = e.tag;
    if (s === 5 || s === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Bs));
    else if (s !== 4 && (s === 27 && dr(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (lc(e, t, a), e = e.sibling; e !== null; )
        lc(e, t, a), e = e.sibling;
  }
  function Ts(e, t, a) {
    var s = e.tag;
    if (s === 5 || s === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (s !== 4 && (s === 27 && dr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Ts(e, t, a), e = e.sibling; e !== null; )
        Ts(e, t, a), e = e.sibling;
  }
  function Wp(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var s = e.type, f = t.attributes; f.length; )
        t.removeAttributeNode(f[0]);
      gt(t, s, a), t[bt] = e, t[Tt] = a;
    } catch (d) {
      Pe(e, e.return, d);
    }
  }
  var Vn = !1, We = !1, sc = !1, em = typeof WeakSet == "function" ? WeakSet : Set, ct = null;
  function aw(e, t) {
    if (e = e.containerInfo, zc = Gs, e = fd(e), au(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var s = a.getSelection && a.getSelection();
          if (s && s.rangeCount !== 0) {
            a = s.anchorNode;
            var f = s.anchorOffset, d = s.focusNode;
            s = s.focusOffset;
            try {
              a.nodeType, d.nodeType;
            } catch {
              a = null;
              break e;
            }
            var b = 0, w = -1, _ = -1, z = 0, H = 0, V = e, N = null;
            t: for (; ; ) {
              for (var U; V !== a || f !== 0 && V.nodeType !== 3 || (w = b + f), V !== d || s !== 0 && V.nodeType !== 3 || (_ = b + s), V.nodeType === 3 && (b += V.nodeValue.length), (U = V.firstChild) !== null; )
                N = V, V = U;
              for (; ; ) {
                if (V === e) break t;
                if (N === a && ++z === f && (w = b), N === d && ++H === s && (_ = b), (U = V.nextSibling) !== null) break;
                V = N, N = V.parentNode;
              }
              V = U;
            }
            a = w === -1 || _ === -1 ? null : { start: w, end: _ };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (jc = { focusedElem: e, selectionRange: a }, Gs = !1, ct = t; ct !== null; )
      if (t = ct, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, ct = e;
      else
        for (; ct !== null; ) {
          switch (t = ct, d = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && d !== null) {
                e = void 0, a = t, f = d.memoizedProps, d = d.memoizedState, s = a.stateNode;
                try {
                  var de = Pr(
                    a.type,
                    f,
                    a.elementType === a.type
                  );
                  e = s.getSnapshotBeforeUpdate(
                    de,
                    d
                  ), s.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ce) {
                  Pe(
                    a,
                    a.return,
                    ce
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  Mc(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Mc(e);
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
              if ((e & 1024) !== 0) throw Error(l(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, ct = e;
            break;
          }
          ct = t.return;
        }
  }
  function tm(e, t, a) {
    var s = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        lr(e, a), s & 4 && Qa(5, a);
        break;
      case 1:
        if (lr(e, a), s & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (b) {
              Pe(a, a.return, b);
            }
          else {
            var f = Pr(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                f,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (b) {
              Pe(
                a,
                a.return,
                b
              );
            }
          }
        s & 64 && Kp(a), s & 512 && Ka(a, a.return);
        break;
      case 3:
        if (lr(e, a), s & 64 && (e = a.updateQueue, e !== null)) {
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
            Ud(e, t);
          } catch (b) {
            Pe(a, a.return, b);
          }
        }
        break;
      case 27:
        t === null && s & 4 && Wp(a);
      case 26:
      case 5:
        lr(e, a), t === null && s & 4 && Zp(a), s & 512 && Ka(a, a.return);
        break;
      case 12:
        lr(e, a);
        break;
      case 13:
        lr(e, a), s & 4 && im(e, a), s & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = pw.bind(
          null,
          a
        ), jw(e, a))));
        break;
      case 22:
        if (s = a.memoizedState !== null || Vn, !s) {
          t = t !== null && t.memoizedState !== null || We, f = Vn;
          var d = We;
          Vn = s, (We = t) && !d ? sr(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : lr(e, a), Vn = f, We = d;
        }
        break;
      case 30:
        break;
      default:
        lr(e, a);
    }
  }
  function nm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, nm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ho(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ye = null, Ct = !1;
  function In(e, t, a) {
    for (a = a.child; a !== null; )
      rm(e, t, a), a = a.sibling;
  }
  function rm(e, t, a) {
    if (Q && typeof Q.onCommitFiberUnmount == "function")
      try {
        Q.onCommitFiberUnmount(q, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        We || Sn(a, t), In(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        We || Sn(a, t);
        var s = Ye, f = Ct;
        dr(a.type) && (Ye = a.stateNode, Ct = !1), In(
          e,
          t,
          a
        ), il(a.stateNode), Ye = s, Ct = f;
        break;
      case 5:
        We || Sn(a, t);
      case 6:
        if (s = Ye, f = Ct, Ye = null, In(
          e,
          t,
          a
        ), Ye = s, Ct = f, Ye !== null)
          if (Ct)
            try {
              (Ye.nodeType === 9 ? Ye.body : Ye.nodeName === "HTML" ? Ye.ownerDocument.body : Ye).removeChild(a.stateNode);
            } catch (d) {
              Pe(
                a,
                t,
                d
              );
            }
          else
            try {
              Ye.removeChild(a.stateNode);
            } catch (d) {
              Pe(
                a,
                t,
                d
              );
            }
        break;
      case 18:
        Ye !== null && (Ct ? (e = Ye, $m(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), hl(e)) : $m(Ye, a.stateNode));
        break;
      case 4:
        s = Ye, f = Ct, Ye = a.stateNode.containerInfo, Ct = !0, In(
          e,
          t,
          a
        ), Ye = s, Ct = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        We || ar(2, a, t), We || ar(4, a, t), In(
          e,
          t,
          a
        );
        break;
      case 1:
        We || (Sn(a, t), s = a.stateNode, typeof s.componentWillUnmount == "function" && Xp(
          a,
          t,
          s
        )), In(
          e,
          t,
          a
        );
        break;
      case 21:
        In(
          e,
          t,
          a
        );
        break;
      case 22:
        We = (s = We) || a.memoizedState !== null, In(
          e,
          t,
          a
        ), We = s;
        break;
      default:
        In(
          e,
          t,
          a
        );
    }
  }
  function im(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        hl(e);
      } catch (a) {
        Pe(t, t.return, a);
      }
  }
  function lw(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new em()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new em()), t;
      default:
        throw Error(l(435, e.tag));
    }
  }
  function oc(e, t) {
    var a = lw(e);
    t.forEach(function(s) {
      var f = mw.bind(null, e, s);
      a.has(s) || (a.add(s), s.then(f, f));
    });
  }
  function Gt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var s = 0; s < a.length; s++) {
        var f = a[s], d = e, b = t, w = b;
        e: for (; w !== null; ) {
          switch (w.tag) {
            case 27:
              if (dr(w.type)) {
                Ye = w.stateNode, Ct = !1;
                break e;
              }
              break;
            case 5:
              Ye = w.stateNode, Ct = !1;
              break e;
            case 3:
            case 4:
              Ye = w.stateNode.containerInfo, Ct = !0;
              break e;
          }
          w = w.return;
        }
        if (Ye === null) throw Error(l(160));
        rm(d, b, f), Ye = null, Ct = !1, d = f.alternate, d !== null && (d.return = null), f.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        am(t, e), t = t.sibling;
  }
  var hn = null;
  function am(e, t) {
    var a = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Gt(t, e), $t(e), s & 4 && (ar(3, e, e.return), Qa(3, e), ar(5, e, e.return));
        break;
      case 1:
        Gt(t, e), $t(e), s & 512 && (We || a === null || Sn(a, a.return)), s & 64 && Vn && (e = e.updateQueue, e !== null && (s = e.callbacks, s !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? s : a.concat(s))));
        break;
      case 26:
        var f = hn;
        if (Gt(t, e), $t(e), s & 512 && (We || a === null || Sn(a, a.return)), s & 4) {
          var d = a !== null ? a.memoizedState : null;
          if (s = e.memoizedState, a === null)
            if (s === null)
              if (e.stateNode === null) {
                e: {
                  s = e.type, a = e.memoizedProps, f = f.ownerDocument || f;
                  t: switch (s) {
                    case "title":
                      d = f.getElementsByTagName("title")[0], (!d || d[va] || d[bt] || d.namespaceURI === "http://www.w3.org/2000/svg" || d.hasAttribute("itemprop")) && (d = f.createElement(s), f.head.insertBefore(
                        d,
                        f.querySelector("head > title")
                      )), gt(d, s, a), d[bt] = e, ot(d), s = d;
                      break e;
                    case "link":
                      var b = Wm(
                        "link",
                        "href",
                        f
                      ).get(s + (a.href || ""));
                      if (b) {
                        for (var w = 0; w < b.length; w++)
                          if (d = b[w], d.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && d.getAttribute("rel") === (a.rel == null ? null : a.rel) && d.getAttribute("title") === (a.title == null ? null : a.title) && d.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            b.splice(w, 1);
                            break t;
                          }
                      }
                      d = f.createElement(s), gt(d, s, a), f.head.appendChild(d);
                      break;
                    case "meta":
                      if (b = Wm(
                        "meta",
                        "content",
                        f
                      ).get(s + (a.content || ""))) {
                        for (w = 0; w < b.length; w++)
                          if (d = b[w], d.getAttribute("content") === (a.content == null ? null : "" + a.content) && d.getAttribute("name") === (a.name == null ? null : a.name) && d.getAttribute("property") === (a.property == null ? null : a.property) && d.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && d.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            b.splice(w, 1);
                            break t;
                          }
                      }
                      d = f.createElement(s), gt(d, s, a), f.head.appendChild(d);
                      break;
                    default:
                      throw Error(l(468, s));
                  }
                  d[bt] = e, ot(d), s = d;
                }
                e.stateNode = s;
              } else
                eg(
                  f,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Jm(
                f,
                s,
                e.memoizedProps
              );
          else
            d !== s ? (d === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : d.count--, s === null ? eg(
              f,
              e.type,
              e.stateNode
            ) : Jm(
              f,
              s,
              e.memoizedProps
            )) : s === null && e.stateNode !== null && ic(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Gt(t, e), $t(e), s & 512 && (We || a === null || Sn(a, a.return)), a !== null && s & 4 && ic(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Gt(t, e), $t(e), s & 512 && (We || a === null || Sn(a, a.return)), e.flags & 32) {
          f = e.stateNode;
          try {
            fi(f, "");
          } catch (U) {
            Pe(e, e.return, U);
          }
        }
        s & 4 && e.stateNode != null && (f = e.memoizedProps, ic(
          e,
          f,
          a !== null ? a.memoizedProps : f
        )), s & 1024 && (sc = !0);
        break;
      case 6:
        if (Gt(t, e), $t(e), s & 4) {
          if (e.stateNode === null)
            throw Error(l(162));
          s = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = s;
          } catch (U) {
            Pe(e, e.return, U);
          }
        }
        break;
      case 3:
        if (Ps = null, f = hn, hn = qs(t.containerInfo), Gt(t, e), hn = f, $t(e), s & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            hl(t.containerInfo);
          } catch (U) {
            Pe(e, e.return, U);
          }
        sc && (sc = !1, lm(e));
        break;
      case 4:
        s = hn, hn = qs(
          e.stateNode.containerInfo
        ), Gt(t, e), $t(e), hn = s;
        break;
      case 12:
        Gt(t, e), $t(e);
        break;
      case 13:
        Gt(t, e), $t(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (pc = qt()), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, oc(e, s)));
        break;
      case 22:
        f = e.memoizedState !== null;
        var _ = a !== null && a.memoizedState !== null, z = Vn, H = We;
        if (Vn = z || f, We = H || _, Gt(t, e), We = H, Vn = z, $t(e), s & 8192)
          e: for (t = e.stateNode, t._visibility = f ? t._visibility & -2 : t._visibility | 1, f && (a === null || _ || Vn || We || Vr(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                _ = a = t;
                try {
                  if (d = _.stateNode, f)
                    b = d.style, typeof b.setProperty == "function" ? b.setProperty("display", "none", "important") : b.display = "none";
                  else {
                    w = _.stateNode;
                    var V = _.memoizedProps.style, N = V != null && V.hasOwnProperty("display") ? V.display : null;
                    w.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (U) {
                  Pe(_, _.return, U);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                _ = t;
                try {
                  _.stateNode.nodeValue = f ? "" : _.memoizedProps;
                } catch (U) {
                  Pe(_, _.return, U);
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
        s & 4 && (s = e.updateQueue, s !== null && (a = s.retryQueue, a !== null && (s.retryQueue = null, oc(e, a))));
        break;
      case 19:
        Gt(t, e), $t(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, oc(e, s)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Gt(t, e), $t(e);
    }
  }
  function $t(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, s = e.return; s !== null; ) {
          if (Jp(s)) {
            a = s;
            break;
          }
          s = s.return;
        }
        if (a == null) throw Error(l(160));
        switch (a.tag) {
          case 27:
            var f = a.stateNode, d = ac(e);
            Ts(e, d, f);
            break;
          case 5:
            var b = a.stateNode;
            a.flags & 32 && (fi(b, ""), a.flags &= -33);
            var w = ac(e);
            Ts(e, w, b);
            break;
          case 3:
          case 4:
            var _ = a.stateNode.containerInfo, z = ac(e);
            lc(
              e,
              z,
              _
            );
            break;
          default:
            throw Error(l(161));
        }
      } catch (H) {
        Pe(e, e.return, H);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function lm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        lm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function lr(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        tm(e, t.alternate, t), t = t.sibling;
  }
  function Vr(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ar(4, t, t.return), Vr(t);
          break;
        case 1:
          Sn(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Xp(
            t,
            t.return,
            a
          ), Vr(t);
          break;
        case 27:
          il(t.stateNode);
        case 26:
        case 5:
          Sn(t, t.return), Vr(t);
          break;
        case 22:
          t.memoizedState === null && Vr(t);
          break;
        case 30:
          Vr(t);
          break;
        default:
          Vr(t);
      }
      e = e.sibling;
    }
  }
  function sr(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var s = t.alternate, f = e, d = t, b = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          sr(
            f,
            d,
            a
          ), Qa(4, d);
          break;
        case 1:
          if (sr(
            f,
            d,
            a
          ), s = d, f = s.stateNode, typeof f.componentDidMount == "function")
            try {
              f.componentDidMount();
            } catch (z) {
              Pe(s, s.return, z);
            }
          if (s = d, f = s.updateQueue, f !== null) {
            var w = s.stateNode;
            try {
              var _ = f.shared.hiddenCallbacks;
              if (_ !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < _.length; f++)
                  Md(_[f], w);
            } catch (z) {
              Pe(s, s.return, z);
            }
          }
          a && b & 64 && Kp(d), Ka(d, d.return);
          break;
        case 27:
          Wp(d);
        case 26:
        case 5:
          sr(
            f,
            d,
            a
          ), a && s === null && b & 4 && Zp(d), Ka(d, d.return);
          break;
        case 12:
          sr(
            f,
            d,
            a
          );
          break;
        case 13:
          sr(
            f,
            d,
            a
          ), a && b & 4 && im(f, d);
          break;
        case 22:
          d.memoizedState === null && sr(
            f,
            d,
            a
          ), Ka(d, d.return);
          break;
        case 30:
          break;
        default:
          sr(
            f,
            d,
            a
          );
      }
      t = t.sibling;
    }
  }
  function uc(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Na(a));
  }
  function cc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Na(e));
  }
  function xn(e, t, a, s) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        sm(
          e,
          t,
          a,
          s
        ), t = t.sibling;
  }
  function sm(e, t, a, s) {
    var f = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        xn(
          e,
          t,
          a,
          s
        ), f & 2048 && Qa(9, t);
        break;
      case 1:
        xn(
          e,
          t,
          a,
          s
        );
        break;
      case 3:
        xn(
          e,
          t,
          a,
          s
        ), f & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Na(e)));
        break;
      case 12:
        if (f & 2048) {
          xn(
            e,
            t,
            a,
            s
          ), e = t.stateNode;
          try {
            var d = t.memoizedProps, b = d.id, w = d.onPostCommit;
            typeof w == "function" && w(
              b,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (_) {
            Pe(t, t.return, _);
          }
        } else
          xn(
            e,
            t,
            a,
            s
          );
        break;
      case 13:
        xn(
          e,
          t,
          a,
          s
        );
        break;
      case 23:
        break;
      case 22:
        d = t.stateNode, b = t.alternate, t.memoizedState !== null ? d._visibility & 2 ? xn(
          e,
          t,
          a,
          s
        ) : Xa(e, t) : d._visibility & 2 ? xn(
          e,
          t,
          a,
          s
        ) : (d._visibility |= 2, Ri(
          e,
          t,
          a,
          s,
          (t.subtreeFlags & 10256) !== 0
        )), f & 2048 && uc(b, t);
        break;
      case 24:
        xn(
          e,
          t,
          a,
          s
        ), f & 2048 && cc(t.alternate, t);
        break;
      default:
        xn(
          e,
          t,
          a,
          s
        );
    }
  }
  function Ri(e, t, a, s, f) {
    for (f = f && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var d = e, b = t, w = a, _ = s, z = b.flags;
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          Ri(
            d,
            b,
            w,
            _,
            f
          ), Qa(8, b);
          break;
        case 23:
          break;
        case 22:
          var H = b.stateNode;
          b.memoizedState !== null ? H._visibility & 2 ? Ri(
            d,
            b,
            w,
            _,
            f
          ) : Xa(
            d,
            b
          ) : (H._visibility |= 2, Ri(
            d,
            b,
            w,
            _,
            f
          )), f && z & 2048 && uc(
            b.alternate,
            b
          );
          break;
        case 24:
          Ri(
            d,
            b,
            w,
            _,
            f
          ), f && z & 2048 && cc(b.alternate, b);
          break;
        default:
          Ri(
            d,
            b,
            w,
            _,
            f
          );
      }
      t = t.sibling;
    }
  }
  function Xa(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, s = t, f = s.flags;
        switch (s.tag) {
          case 22:
            Xa(a, s), f & 2048 && uc(
              s.alternate,
              s
            );
            break;
          case 24:
            Xa(a, s), f & 2048 && cc(s.alternate, s);
            break;
          default:
            Xa(a, s);
        }
        t = t.sibling;
      }
  }
  var Za = 8192;
  function zi(e) {
    if (e.subtreeFlags & Za)
      for (e = e.child; e !== null; )
        om(e), e = e.sibling;
  }
  function om(e) {
    switch (e.tag) {
      case 26:
        zi(e), e.flags & Za && e.memoizedState !== null && $w(
          hn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        zi(e);
        break;
      case 3:
      case 4:
        var t = hn;
        hn = qs(e.stateNode.containerInfo), zi(e), hn = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Za, Za = 16777216, zi(e), Za = t) : zi(e));
        break;
      default:
        zi(e);
    }
  }
  function um(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Ja(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var s = t[a];
          ct = s, fm(
            s,
            e
          );
        }
      um(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        cm(e), e = e.sibling;
  }
  function cm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ja(e), e.flags & 2048 && ar(9, e, e.return);
        break;
      case 3:
        Ja(e);
        break;
      case 12:
        Ja(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, As(e)) : Ja(e);
        break;
      default:
        Ja(e);
    }
  }
  function As(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var s = t[a];
          ct = s, fm(
            s,
            e
          );
        }
      um(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          ar(8, t, t.return), As(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, As(t));
          break;
        default:
          As(t);
      }
      e = e.sibling;
    }
  }
  function fm(e, t) {
    for (; ct !== null; ) {
      var a = ct;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ar(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var s = a.memoizedState.cachePool.pool;
            s != null && s.refCount++;
          }
          break;
        case 24:
          Na(a.memoizedState.cache);
      }
      if (s = a.child, s !== null) s.return = a, ct = s;
      else
        e: for (a = e; ct !== null; ) {
          s = ct;
          var f = s.sibling, d = s.return;
          if (nm(s), s === a) {
            ct = null;
            break e;
          }
          if (f !== null) {
            f.return = d, ct = f;
            break e;
          }
          ct = d;
        }
    }
  }
  var sw = {
    getCacheForType: function(e) {
      var t = vt(rt), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    }
  }, ow = typeof WeakMap == "function" ? WeakMap : Map, Ue = 0, Ve = null, ke = null, Oe = 0, Be = 0, Yt = null, or = !1, ji = !1, fc = !1, Gn = 0, Xe = 0, ur = 0, Ir = 0, hc = 0, sn = 0, Di = 0, Wa = null, Rt = null, dc = !1, pc = 0, Os = 1 / 0, Cs = null, cr = null, mt = 0, fr = null, Ni = null, Mi = 0, mc = 0, gc = null, hm = null, el = 0, yc = null;
  function Ft() {
    if ((Ue & 2) !== 0 && Oe !== 0)
      return Oe & -Oe;
    if (B.T !== null) {
      var e = xi;
      return e !== 0 ? e : Ec();
    }
    return Oh();
  }
  function dm() {
    sn === 0 && (sn = (Oe & 536870912) === 0 || Re ? Eh() : 536870912);
    var e = ln.current;
    return e !== null && (e.flags |= 32), sn;
  }
  function Qt(e, t, a) {
    (e === Ve && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null) && (Ui(e, 0), hr(
      e,
      Oe,
      sn,
      !1
    )), ba(e, a), ((Ue & 2) === 0 || e !== Ve) && (e === Ve && ((Ue & 2) === 0 && (Ir |= a), Xe === 4 && hr(
      e,
      Oe,
      sn,
      !1
    )), _n(e));
  }
  function pm(e, t, a) {
    if ((Ue & 6) !== 0) throw Error(l(327));
    var s = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Jt(e, t), f = s ? fw(e, t) : wc(e, t, !0), d = s;
    do {
      if (f === 0) {
        ji && !s && hr(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, d && !uw(a)) {
          f = wc(e, t, !1), d = !1;
          continue;
        }
        if (f === 2) {
          if (d = t, e.errorRecoveryDisabledLanes & d)
            var b = 0;
          else
            b = e.pendingLanes & -536870913, b = b !== 0 ? b : b & 536870912 ? 536870912 : 0;
          if (b !== 0) {
            t = b;
            e: {
              var w = e;
              f = Wa;
              var _ = w.current.memoizedState.isDehydrated;
              if (_ && (Ui(w, b).flags |= 256), b = wc(
                w,
                b,
                !1
              ), b !== 2) {
                if (fc && !_) {
                  w.errorRecoveryDisabledLanes |= d, Ir |= d, f = 4;
                  break e;
                }
                d = Rt, Rt = f, d !== null && (Rt === null ? Rt = d : Rt.push.apply(
                  Rt,
                  d
                ));
              }
              f = b;
            }
            if (d = !1, f !== 2) continue;
          }
        }
        if (f === 1) {
          Ui(e, 0), hr(e, t, 0, !0);
          break;
        }
        e: {
          switch (s = e, d = f, d) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              hr(
                s,
                t,
                sn,
                !or
              );
              break e;
            case 2:
              Rt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if ((t & 62914560) === t && (f = pc + 300 - qt(), 10 < f)) {
            if (hr(
              s,
              t,
              sn,
              !or
            ), st(s, 0, !0) !== 0) break e;
            s.timeoutHandle = Im(
              mm.bind(
                null,
                s,
                a,
                Rt,
                Cs,
                dc,
                t,
                sn,
                Ir,
                Di,
                or,
                d,
                2,
                -0,
                0
              ),
              f
            );
            break e;
          }
          mm(
            s,
            a,
            Rt,
            Cs,
            dc,
            t,
            sn,
            Ir,
            Di,
            or,
            d,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    _n(e);
  }
  function mm(e, t, a, s, f, d, b, w, _, z, H, V, N, U) {
    if (e.timeoutHandle = -1, V = t.subtreeFlags, (V & 8192 || (V & 16785408) === 16785408) && (sl = { stylesheets: null, count: 0, unsuspend: Gw }, om(t), V = Yw(), V !== null)) {
      e.cancelPendingCommit = V(
        xm.bind(
          null,
          e,
          t,
          d,
          a,
          s,
          f,
          b,
          w,
          _,
          H,
          1,
          N,
          U
        )
      ), hr(e, d, b, !z);
      return;
    }
    xm(
      e,
      t,
      d,
      a,
      s,
      f,
      b,
      w,
      _
    );
  }
  function uw(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var s = 0; s < a.length; s++) {
          var f = a[s], d = f.getSnapshot;
          f = f.value;
          try {
            if (!Vt(d(), f)) return !1;
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
  function hr(e, t, a, s) {
    t &= ~hc, t &= ~Ir, e.suspendedLanes |= t, e.pingedLanes &= ~t, s && (e.warmLanes |= t), s = e.expirationTimes;
    for (var f = t; 0 < f; ) {
      var d = 31 - he(f), b = 1 << d;
      s[d] = -1, f &= ~b;
    }
    a !== 0 && Th(e, a, t);
  }
  function Rs() {
    return (Ue & 6) === 0 ? (tl(0), !1) : !0;
  }
  function bc() {
    if (ke !== null) {
      if (Be === 0)
        var e = ke.return;
      else
        e = ke, Un = Br = null, Mu(e), Oi = null, $a = 0, e = ke;
      for (; e !== null; )
        Qp(e.alternate, e), e = e.return;
      ke = null;
    }
  }
  function Ui(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, Aw(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), bc(), Ve = e, ke = a = Dn(e.current, null), Oe = t, Be = 0, Yt = null, or = !1, ji = Jt(e, t), fc = !1, Di = sn = hc = Ir = ur = Xe = 0, Rt = Wa = null, dc = !1, (t & 8) !== 0 && (t |= t & 32);
    var s = e.entangledLanes;
    if (s !== 0)
      for (e = e.entanglements, s &= t; 0 < s; ) {
        var f = 31 - he(s), d = 1 << f;
        t |= e[f], s &= ~d;
      }
    return Gn = t, Jl(), a;
  }
  function gm(e, t) {
    ve = null, B.H = ys, t === Ua || t === ss ? (t = Dd(), Be = 3) : t === Rd ? (t = Dd(), Be = 4) : Be = t === Np ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Yt = t, ke === null && (Xe = 1, xs(
      e,
      tn(t, e.current)
    ));
  }
  function ym() {
    var e = B.H;
    return B.H = ys, e === null ? ys : e;
  }
  function bm() {
    var e = B.A;
    return B.A = sw, e;
  }
  function vc() {
    Xe = 4, or || (Oe & 4194048) !== Oe && ln.current !== null || (ji = !0), (ur & 134217727) === 0 && (Ir & 134217727) === 0 || Ve === null || hr(
      Ve,
      Oe,
      sn,
      !1
    );
  }
  function wc(e, t, a) {
    var s = Ue;
    Ue |= 2;
    var f = ym(), d = bm();
    (Ve !== e || Oe !== t) && (Cs = null, Ui(e, t)), t = !1;
    var b = Xe;
    e: do
      try {
        if (Be !== 0 && ke !== null) {
          var w = ke, _ = Yt;
          switch (Be) {
            case 8:
              bc(), b = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ln.current === null && (t = !0);
              var z = Be;
              if (Be = 0, Yt = null, Bi(e, w, _, z), a && ji) {
                b = 0;
                break e;
              }
              break;
            default:
              z = Be, Be = 0, Yt = null, Bi(e, w, _, z);
          }
        }
        cw(), b = Xe;
        break;
      } catch (H) {
        gm(e, H);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Un = Br = null, Ue = s, B.H = f, B.A = d, ke === null && (Ve = null, Oe = 0, Jl()), b;
  }
  function cw() {
    for (; ke !== null; ) vm(ke);
  }
  function fw(e, t) {
    var a = Ue;
    Ue |= 2;
    var s = ym(), f = bm();
    Ve !== e || Oe !== t ? (Cs = null, Os = qt() + 500, Ui(e, t)) : ji = Jt(
      e,
      t
    );
    e: do
      try {
        if (Be !== 0 && ke !== null) {
          t = ke;
          var d = Yt;
          t: switch (Be) {
            case 1:
              Be = 0, Yt = null, Bi(e, t, d, 1);
              break;
            case 2:
            case 9:
              if (zd(d)) {
                Be = 0, Yt = null, wm(t);
                break;
              }
              t = function() {
                Be !== 2 && Be !== 9 || Ve !== e || (Be = 7), _n(e);
              }, d.then(t, t);
              break e;
            case 3:
              Be = 7;
              break e;
            case 4:
              Be = 5;
              break e;
            case 7:
              zd(d) ? (Be = 0, Yt = null, wm(t)) : (Be = 0, Yt = null, Bi(e, t, d, 7));
              break;
            case 5:
              var b = null;
              switch (ke.tag) {
                case 26:
                  b = ke.memoizedState;
                case 5:
                case 27:
                  var w = ke;
                  if (!b || tg(b)) {
                    Be = 0, Yt = null;
                    var _ = w.sibling;
                    if (_ !== null) ke = _;
                    else {
                      var z = w.return;
                      z !== null ? (ke = z, zs(z)) : ke = null;
                    }
                    break t;
                  }
              }
              Be = 0, Yt = null, Bi(e, t, d, 5);
              break;
            case 6:
              Be = 0, Yt = null, Bi(e, t, d, 6);
              break;
            case 8:
              bc(), Xe = 6;
              break e;
            default:
              throw Error(l(462));
          }
        }
        hw();
        break;
      } catch (H) {
        gm(e, H);
      }
    while (!0);
    return Un = Br = null, B.H = s, B.A = f, Ue = a, ke !== null ? 0 : (Ve = null, Oe = 0, Jl(), Xe);
  }
  function hw() {
    for (; ke !== null && !Ll(); )
      vm(ke);
  }
  function vm(e) {
    var t = Yp(e.alternate, e, Gn);
    e.memoizedProps = e.pendingProps, t === null ? zs(e) : ke = t;
  }
  function wm(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Hp(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Oe
        );
        break;
      case 11:
        t = Hp(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Oe
        );
        break;
      case 5:
        Mu(t);
      default:
        Qp(a, t), t = ke = Sd(t, Gn), t = Yp(a, t, Gn);
    }
    e.memoizedProps = e.pendingProps, t === null ? zs(e) : ke = t;
  }
  function Bi(e, t, a, s) {
    Un = Br = null, Mu(t), Oi = null, $a = 0;
    var f = t.return;
    try {
      if (tw(
        e,
        f,
        t,
        a,
        Oe
      )) {
        Xe = 1, xs(
          e,
          tn(a, e.current)
        ), ke = null;
        return;
      }
    } catch (d) {
      if (f !== null) throw ke = f, d;
      Xe = 1, xs(
        e,
        tn(a, e.current)
      ), ke = null;
      return;
    }
    t.flags & 32768 ? (Re || s === 1 ? e = !0 : ji || (Oe & 536870912) !== 0 ? e = !1 : (or = e = !0, (s === 2 || s === 9 || s === 3 || s === 6) && (s = ln.current, s !== null && s.tag === 13 && (s.flags |= 16384))), Sm(t, e)) : zs(t);
  }
  function zs(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Sm(
          t,
          or
        );
        return;
      }
      e = t.return;
      var a = rw(
        t.alternate,
        t,
        Gn
      );
      if (a !== null) {
        ke = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        ke = t;
        return;
      }
      ke = t = e;
    } while (t !== null);
    Xe === 0 && (Xe = 5);
  }
  function Sm(e, t) {
    do {
      var a = iw(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, ke = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        ke = e;
        return;
      }
      ke = e = a;
    } while (e !== null);
    Xe = 6, ke = null;
  }
  function xm(e, t, a, s, f, d, b, w, _) {
    e.cancelPendingCommit = null;
    do
      js();
    while (mt !== 0);
    if ((Ue & 6) !== 0) throw Error(l(327));
    if (t !== null) {
      if (t === e.current) throw Error(l(177));
      if (d = t.lanes | t.childLanes, d |= cu, G0(
        e,
        a,
        d,
        b,
        w,
        _
      ), e === Ve && (ke = Ve = null, Oe = 0), Ni = t, fr = e, Mi = a, mc = d, gc = f, hm = s, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, gw(ri, function() {
        return Am(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), s = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || s) {
        s = B.T, B.T = null, f = F.p, F.p = 2, b = Ue, Ue |= 4;
        try {
          aw(e, t, a);
        } finally {
          Ue = b, F.p = f, B.T = s;
        }
      }
      mt = 1, _m(), Em(), km();
    }
  }
  function _m() {
    if (mt === 1) {
      mt = 0;
      var e = fr, t = Ni, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = B.T, B.T = null;
        var s = F.p;
        F.p = 2;
        var f = Ue;
        Ue |= 4;
        try {
          am(t, e);
          var d = jc, b = fd(e.containerInfo), w = d.focusedElem, _ = d.selectionRange;
          if (b !== w && w && w.ownerDocument && cd(
            w.ownerDocument.documentElement,
            w
          )) {
            if (_ !== null && au(w)) {
              var z = _.start, H = _.end;
              if (H === void 0 && (H = z), "selectionStart" in w)
                w.selectionStart = z, w.selectionEnd = Math.min(
                  H,
                  w.value.length
                );
              else {
                var V = w.ownerDocument || document, N = V && V.defaultView || window;
                if (N.getSelection) {
                  var U = N.getSelection(), de = w.textContent.length, ce = Math.min(_.start, de), He = _.end === void 0 ? ce : Math.min(_.end, de);
                  !U.extend && ce > He && (b = He, He = ce, ce = b);
                  var C = ud(
                    w,
                    ce
                  ), T = ud(
                    w,
                    He
                  );
                  if (C && T && (U.rangeCount !== 1 || U.anchorNode !== C.node || U.anchorOffset !== C.offset || U.focusNode !== T.node || U.focusOffset !== T.offset)) {
                    var R = V.createRange();
                    R.setStart(C.node, C.offset), U.removeAllRanges(), ce > He ? (U.addRange(R), U.extend(T.node, T.offset)) : (R.setEnd(T.node, T.offset), U.addRange(R));
                  }
                }
              }
            }
            for (V = [], U = w; U = U.parentNode; )
              U.nodeType === 1 && V.push({
                element: U,
                left: U.scrollLeft,
                top: U.scrollTop
              });
            for (typeof w.focus == "function" && w.focus(), w = 0; w < V.length; w++) {
              var P = V[w];
              P.element.scrollLeft = P.left, P.element.scrollTop = P.top;
            }
          }
          Gs = !!zc, jc = zc = null;
        } finally {
          Ue = f, F.p = s, B.T = a;
        }
      }
      e.current = t, mt = 2;
    }
  }
  function Em() {
    if (mt === 2) {
      mt = 0;
      var e = fr, t = Ni, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = B.T, B.T = null;
        var s = F.p;
        F.p = 2;
        var f = Ue;
        Ue |= 4;
        try {
          tm(e, t.alternate, t);
        } finally {
          Ue = f, F.p = s, B.T = a;
        }
      }
      mt = 3;
    }
  }
  function km() {
    if (mt === 4 || mt === 3) {
      mt = 0, ql();
      var e = fr, t = Ni, a = Mi, s = hm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? mt = 5 : (mt = 0, Ni = fr = null, Tm(e, e.pendingLanes));
      var f = e.pendingLanes;
      if (f === 0 && (cr = null), Lo(a), t = t.stateNode, Q && typeof Q.onCommitFiberRoot == "function")
        try {
          Q.onCommitFiberRoot(
            q,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (s !== null) {
        t = B.T, f = F.p, F.p = 2, B.T = null;
        try {
          for (var d = e.onRecoverableError, b = 0; b < s.length; b++) {
            var w = s[b];
            d(w.value, {
              componentStack: w.stack
            });
          }
        } finally {
          B.T = t, F.p = f;
        }
      }
      (Mi & 3) !== 0 && js(), _n(e), f = e.pendingLanes, (a & 4194090) !== 0 && (f & 42) !== 0 ? e === yc ? el++ : (el = 0, yc = e) : el = 0, tl(0);
    }
  }
  function Tm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Na(t)));
  }
  function js(e) {
    return _m(), Em(), km(), Am();
  }
  function Am() {
    if (mt !== 5) return !1;
    var e = fr, t = mc;
    mc = 0;
    var a = Lo(Mi), s = B.T, f = F.p;
    try {
      F.p = 32 > a ? 32 : a, B.T = null, a = gc, gc = null;
      var d = fr, b = Mi;
      if (mt = 0, Ni = fr = null, Mi = 0, (Ue & 6) !== 0) throw Error(l(331));
      var w = Ue;
      if (Ue |= 4, cm(d.current), sm(
        d,
        d.current,
        b,
        a
      ), Ue = w, tl(0, !1), Q && typeof Q.onPostCommitFiberRoot == "function")
        try {
          Q.onPostCommitFiberRoot(q, d);
        } catch {
        }
      return !0;
    } finally {
      F.p = f, B.T = s, Tm(e, t);
    }
  }
  function Om(e, t, a) {
    t = tn(a, t), t = Ku(e.stateNode, t, 2), e = tr(e, t, 2), e !== null && (ba(e, 2), _n(e));
  }
  function Pe(e, t, a) {
    if (e.tag === 3)
      Om(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Om(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var s = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (cr === null || !cr.has(s))) {
            e = tn(a, e), a = jp(2), s = tr(t, a, 2), s !== null && (Dp(
              a,
              s,
              t,
              e
            ), ba(s, 2), _n(s));
            break;
          }
        }
        t = t.return;
      }
  }
  function Sc(e, t, a) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new ow();
      var f = /* @__PURE__ */ new Set();
      s.set(t, f);
    } else
      f = s.get(t), f === void 0 && (f = /* @__PURE__ */ new Set(), s.set(t, f));
    f.has(a) || (fc = !0, f.add(a), e = dw.bind(null, e, t, a), t.then(e, e));
  }
  function dw(e, t, a) {
    var s = e.pingCache;
    s !== null && s.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Ve === e && (Oe & a) === a && (Xe === 4 || Xe === 3 && (Oe & 62914560) === Oe && 300 > qt() - pc ? (Ue & 2) === 0 && Ui(e, 0) : hc |= a, Di === Oe && (Di = 0)), _n(e);
  }
  function Cm(e, t) {
    t === 0 && (t = kh()), e = bi(e, t), e !== null && (ba(e, t), _n(e));
  }
  function pw(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Cm(e, a);
  }
  function mw(e, t) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode, f = e.memoizedState;
        f !== null && (a = f.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      case 22:
        s = e.stateNode._retryCache;
        break;
      default:
        throw Error(l(314));
    }
    s !== null && s.delete(t), Cm(e, a);
  }
  function gw(e, t) {
    return pa(e, t);
  }
  var Ds = null, Li = null, xc = !1, Ns = !1, _c = !1, Gr = 0;
  function _n(e) {
    e !== Li && e.next === null && (Li === null ? Ds = Li = e : Li = Li.next = e), Ns = !0, xc || (xc = !0, bw());
  }
  function tl(e, t) {
    if (!_c && Ns) {
      _c = !0;
      do
        for (var a = !1, s = Ds; s !== null; ) {
          if (e !== 0) {
            var f = s.pendingLanes;
            if (f === 0) var d = 0;
            else {
              var b = s.suspendedLanes, w = s.pingedLanes;
              d = (1 << 31 - he(42 | e) + 1) - 1, d &= f & ~(b & ~w), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
            }
            d !== 0 && (a = !0, Dm(s, d));
          } else
            d = Oe, d = st(
              s,
              s === Ve ? d : 0,
              s.cancelPendingCommit !== null || s.timeoutHandle !== -1
            ), (d & 3) === 0 || Jt(s, d) || (a = !0, Dm(s, d));
          s = s.next;
        }
      while (a);
      _c = !1;
    }
  }
  function yw() {
    Rm();
  }
  function Rm() {
    Ns = xc = !1;
    var e = 0;
    Gr !== 0 && (Tw() && (e = Gr), Gr = 0);
    for (var t = qt(), a = null, s = Ds; s !== null; ) {
      var f = s.next, d = zm(s, t);
      d === 0 ? (s.next = null, a === null ? Ds = f : a.next = f, f === null && (Li = a)) : (a = s, (e !== 0 || (d & 3) !== 0) && (Ns = !0)), s = f;
    }
    tl(e);
  }
  function zm(e, t) {
    for (var a = e.suspendedLanes, s = e.pingedLanes, f = e.expirationTimes, d = e.pendingLanes & -62914561; 0 < d; ) {
      var b = 31 - he(d), w = 1 << b, _ = f[b];
      _ === -1 ? ((w & a) === 0 || (w & s) !== 0) && (f[b] = cn(w, t)) : _ <= t && (e.expiredLanes |= w), d &= ~w;
    }
    if (t = Ve, a = Oe, a = st(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), s = e.callbackNode, a === 0 || e === t && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null)
      return s !== null && s !== null && ma(s), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Jt(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (s !== null && ma(s), Lo(a)) {
        case 2:
        case 8:
          a = ya;
          break;
        case 32:
          a = ri;
          break;
        case 268435456:
          a = Hl;
          break;
        default:
          a = ri;
      }
      return s = jm.bind(null, e), a = pa(a, s), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return s !== null && s !== null && ma(s), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function jm(e, t) {
    if (mt !== 0 && mt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (js() && e.callbackNode !== a)
      return null;
    var s = Oe;
    return s = st(
      e,
      e === Ve ? s : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), s === 0 ? null : (pm(e, s, t), zm(e, qt()), e.callbackNode != null && e.callbackNode === a ? jm.bind(null, e) : null);
  }
  function Dm(e, t) {
    if (js()) return null;
    pm(e, t, !0);
  }
  function bw() {
    Ow(function() {
      (Ue & 6) !== 0 ? pa(
        ga,
        yw
      ) : Rm();
    });
  }
  function Ec() {
    return Gr === 0 && (Gr = Eh()), Gr;
  }
  function Nm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : $l("" + e);
  }
  function Mm(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function vw(e, t, a, s, f) {
    if (t === "submit" && a && a.stateNode === f) {
      var d = Nm(
        (f[Tt] || null).action
      ), b = s.submitter;
      b && (t = (t = b[Tt] || null) ? Nm(t.formAction) : b.getAttribute("formAction"), t !== null && (d = t, b = null));
      var w = new Kl(
        "action",
        "action",
        null,
        s,
        f
      );
      e.push({
        event: w,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (s.defaultPrevented) {
                if (Gr !== 0) {
                  var _ = b ? Mm(f, b) : new FormData(f);
                  Gu(
                    a,
                    {
                      pending: !0,
                      data: _,
                      method: f.method,
                      action: d
                    },
                    null,
                    _
                  );
                }
              } else
                typeof d == "function" && (w.preventDefault(), _ = b ? Mm(f, b) : new FormData(f), Gu(
                  a,
                  {
                    pending: !0,
                    data: _,
                    method: f.method,
                    action: d
                  },
                  d,
                  _
                ));
            },
            currentTarget: f
          }
        ]
      });
    }
  }
  for (var kc = 0; kc < uu.length; kc++) {
    var Tc = uu[kc], ww = Tc.toLowerCase(), Sw = Tc[0].toUpperCase() + Tc.slice(1);
    fn(
      ww,
      "on" + Sw
    );
  }
  fn(pd, "onAnimationEnd"), fn(md, "onAnimationIteration"), fn(gd, "onAnimationStart"), fn("dblclick", "onDoubleClick"), fn("focusin", "onFocus"), fn("focusout", "onBlur"), fn(Lv, "onTransitionRun"), fn(qv, "onTransitionStart"), fn(Hv, "onTransitionCancel"), fn(yd, "onTransitionEnd"), oi("onMouseEnter", ["mouseout", "mouseover"]), oi("onMouseLeave", ["mouseout", "mouseover"]), oi("onPointerEnter", ["pointerout", "pointerover"]), oi("onPointerLeave", ["pointerout", "pointerover"]), Or(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Or(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Or("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Or(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Or(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Or(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var nl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), xw = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nl)
  );
  function Um(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var s = e[a], f = s.event;
      s = s.listeners;
      e: {
        var d = void 0;
        if (t)
          for (var b = s.length - 1; 0 <= b; b--) {
            var w = s[b], _ = w.instance, z = w.currentTarget;
            if (w = w.listener, _ !== d && f.isPropagationStopped())
              break e;
            d = w, f.currentTarget = z;
            try {
              d(f);
            } catch (H) {
              Ss(H);
            }
            f.currentTarget = null, d = _;
          }
        else
          for (b = 0; b < s.length; b++) {
            if (w = s[b], _ = w.instance, z = w.currentTarget, w = w.listener, _ !== d && f.isPropagationStopped())
              break e;
            d = w, f.currentTarget = z;
            try {
              d(f);
            } catch (H) {
              Ss(H);
            }
            f.currentTarget = null, d = _;
          }
      }
    }
  }
  function Te(e, t) {
    var a = t[qo];
    a === void 0 && (a = t[qo] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    a.has(s) || (Bm(t, e, 2, !1), a.add(s));
  }
  function Ac(e, t, a) {
    var s = 0;
    t && (s |= 4), Bm(
      a,
      e,
      s,
      t
    );
  }
  var Ms = "_reactListening" + Math.random().toString(36).slice(2);
  function Oc(e) {
    if (!e[Ms]) {
      e[Ms] = !0, Rh.forEach(function(a) {
        a !== "selectionchange" && (xw.has(a) || Ac(a, !1, e), Ac(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ms] || (t[Ms] = !0, Ac("selectionchange", !1, t));
    }
  }
  function Bm(e, t, a, s) {
    switch (sg(t)) {
      case 2:
        var f = Kw;
        break;
      case 8:
        f = Xw;
        break;
      default:
        f = Vc;
    }
    a = f.bind(
      null,
      t,
      a,
      e
    ), f = void 0, !Xo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (f = !0), s ? f !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: f
    }) : e.addEventListener(t, a, !0) : f !== void 0 ? e.addEventListener(t, a, {
      passive: f
    }) : e.addEventListener(t, a, !1);
  }
  function Cc(e, t, a, s, f) {
    var d = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null)
      e: for (; ; ) {
        if (s === null) return;
        var b = s.tag;
        if (b === 3 || b === 4) {
          var w = s.stateNode.containerInfo;
          if (w === f) break;
          if (b === 4)
            for (b = s.return; b !== null; ) {
              var _ = b.tag;
              if ((_ === 3 || _ === 4) && b.stateNode.containerInfo === f)
                return;
              b = b.return;
            }
          for (; w !== null; ) {
            if (b = ai(w), b === null) return;
            if (_ = b.tag, _ === 5 || _ === 6 || _ === 26 || _ === 27) {
              s = d = b;
              continue e;
            }
            w = w.parentNode;
          }
        }
        s = s.return;
      }
    Gh(function() {
      var z = d, H = Qo(a), V = [];
      e: {
        var N = bd.get(e);
        if (N !== void 0) {
          var U = Kl, de = e;
          switch (e) {
            case "keypress":
              if (Fl(a) === 0) break e;
            case "keydown":
            case "keyup":
              U = gv;
              break;
            case "focusin":
              de = "focus", U = eu;
              break;
            case "focusout":
              de = "blur", U = eu;
              break;
            case "beforeblur":
            case "afterblur":
              U = eu;
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
              U = Fh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = iv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = vv;
              break;
            case pd:
            case md:
            case gd:
              U = sv;
              break;
            case yd:
              U = Sv;
              break;
            case "scroll":
            case "scrollend":
              U = nv;
              break;
            case "wheel":
              U = _v;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = uv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = Kh;
              break;
            case "toggle":
            case "beforetoggle":
              U = kv;
          }
          var ce = (t & 4) !== 0, He = !ce && (e === "scroll" || e === "scrollend"), C = ce ? N !== null ? N + "Capture" : null : N;
          ce = [];
          for (var T = z, R; T !== null; ) {
            var P = T;
            if (R = P.stateNode, P = P.tag, P !== 5 && P !== 26 && P !== 27 || R === null || C === null || (P = Sa(T, C), P != null && ce.push(
              rl(T, P, R)
            )), He) break;
            T = T.return;
          }
          0 < ce.length && (N = new U(
            N,
            de,
            null,
            a,
            H
          ), V.push({ event: N, listeners: ce }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (N = e === "mouseover" || e === "pointerover", U = e === "mouseout" || e === "pointerout", N && a !== Fo && (de = a.relatedTarget || a.fromElement) && (ai(de) || de[ii]))
            break e;
          if ((U || N) && (N = H.window === H ? H : (N = H.ownerDocument) ? N.defaultView || N.parentWindow : window, U ? (de = a.relatedTarget || a.toElement, U = z, de = de ? ai(de) : null, de !== null && (He = u(de), ce = de.tag, de !== He || ce !== 5 && ce !== 27 && ce !== 6) && (de = null)) : (U = null, de = z), U !== de)) {
            if (ce = Fh, P = "onMouseLeave", C = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (ce = Kh, P = "onPointerLeave", C = "onPointerEnter", T = "pointer"), He = U == null ? N : wa(U), R = de == null ? N : wa(de), N = new ce(
              P,
              T + "leave",
              U,
              a,
              H
            ), N.target = He, N.relatedTarget = R, P = null, ai(H) === z && (ce = new ce(
              C,
              T + "enter",
              de,
              a,
              H
            ), ce.target = R, ce.relatedTarget = He, P = ce), He = P, U && de)
              t: {
                for (ce = U, C = de, T = 0, R = ce; R; R = qi(R))
                  T++;
                for (R = 0, P = C; P; P = qi(P))
                  R++;
                for (; 0 < T - R; )
                  ce = qi(ce), T--;
                for (; 0 < R - T; )
                  C = qi(C), R--;
                for (; T--; ) {
                  if (ce === C || C !== null && ce === C.alternate)
                    break t;
                  ce = qi(ce), C = qi(C);
                }
                ce = null;
              }
            else ce = null;
            U !== null && Lm(
              V,
              N,
              U,
              ce,
              !1
            ), de !== null && He !== null && Lm(
              V,
              He,
              de,
              ce,
              !0
            );
          }
        }
        e: {
          if (N = z ? wa(z) : window, U = N.nodeName && N.nodeName.toLowerCase(), U === "select" || U === "input" && N.type === "file")
            var ie = rd;
          else if (td(N))
            if (id)
              ie = Mv;
            else {
              ie = Dv;
              var _e = jv;
            }
          else
            U = N.nodeName, !U || U.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? z && Yo(z.elementType) && (ie = rd) : ie = Nv;
          if (ie && (ie = ie(e, z))) {
            nd(
              V,
              ie,
              a,
              H
            );
            break e;
          }
          _e && _e(e, N, z), e === "focusout" && z && N.type === "number" && z.memoizedProps.value != null && $o(N, "number", N.value);
        }
        switch (_e = z ? wa(z) : window, e) {
          case "focusin":
            (td(_e) || _e.contentEditable === "true") && (mi = _e, lu = z, Ca = null);
            break;
          case "focusout":
            Ca = lu = mi = null;
            break;
          case "mousedown":
            su = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            su = !1, hd(V, a, H);
            break;
          case "selectionchange":
            if (Bv) break;
          case "keydown":
          case "keyup":
            hd(V, a, H);
        }
        var se;
        if (nu)
          e: {
            switch (e) {
              case "compositionstart":
                var fe = "onCompositionStart";
                break e;
              case "compositionend":
                fe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                fe = "onCompositionUpdate";
                break e;
            }
            fe = void 0;
          }
        else
          pi ? Wh(e, a) && (fe = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (fe = "onCompositionStart");
        fe && (Xh && a.locale !== "ko" && (pi || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && pi && (se = $h()) : (Zn = H, Zo = "value" in Zn ? Zn.value : Zn.textContent, pi = !0)), _e = Us(z, fe), 0 < _e.length && (fe = new Qh(
          fe,
          e,
          null,
          a,
          H
        ), V.push({ event: fe, listeners: _e }), se ? fe.data = se : (se = ed(a), se !== null && (fe.data = se)))), (se = Av ? Ov(e, a) : Cv(e, a)) && (fe = Us(z, "onBeforeInput"), 0 < fe.length && (_e = new Qh(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          H
        ), V.push({
          event: _e,
          listeners: fe
        }), _e.data = se)), vw(
          V,
          e,
          z,
          a,
          H
        );
      }
      Um(V, t);
    });
  }
  function rl(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Us(e, t) {
    for (var a = t + "Capture", s = []; e !== null; ) {
      var f = e, d = f.stateNode;
      if (f = f.tag, f !== 5 && f !== 26 && f !== 27 || d === null || (f = Sa(e, a), f != null && s.unshift(
        rl(e, f, d)
      ), f = Sa(e, t), f != null && s.push(
        rl(e, f, d)
      )), e.tag === 3) return s;
      e = e.return;
    }
    return [];
  }
  function qi(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Lm(e, t, a, s, f) {
    for (var d = t._reactName, b = []; a !== null && a !== s; ) {
      var w = a, _ = w.alternate, z = w.stateNode;
      if (w = w.tag, _ !== null && _ === s) break;
      w !== 5 && w !== 26 && w !== 27 || z === null || (_ = z, f ? (z = Sa(a, d), z != null && b.unshift(
        rl(a, z, _)
      )) : f || (z = Sa(a, d), z != null && b.push(
        rl(a, z, _)
      ))), a = a.return;
    }
    b.length !== 0 && e.push({ event: t, listeners: b });
  }
  var _w = /\r\n?/g, Ew = /\u0000|\uFFFD/g;
  function qm(e) {
    return (typeof e == "string" ? e : "" + e).replace(_w, `
`).replace(Ew, "");
  }
  function Hm(e, t) {
    return t = qm(t), qm(e) === t;
  }
  function Bs() {
  }
  function qe(e, t, a, s, f, d) {
    switch (a) {
      case "children":
        typeof s == "string" ? t === "body" || t === "textarea" && s === "" || fi(e, s) : (typeof s == "number" || typeof s == "bigint") && t !== "body" && fi(e, "" + s);
        break;
      case "className":
        Vl(e, "class", s);
        break;
      case "tabIndex":
        Vl(e, "tabindex", s);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Vl(e, a, s);
        break;
      case "style":
        Vh(e, s, d);
        break;
      case "data":
        if (t !== "object") {
          Vl(e, "data", s);
          break;
        }
      case "src":
      case "href":
        if (s === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (s == null || typeof s == "function" || typeof s == "symbol" || typeof s == "boolean") {
          e.removeAttribute(a);
          break;
        }
        s = $l("" + s), e.setAttribute(a, s);
        break;
      case "action":
      case "formAction":
        if (typeof s == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof d == "function" && (a === "formAction" ? (t !== "input" && qe(e, t, "name", f.name, f, null), qe(
            e,
            t,
            "formEncType",
            f.formEncType,
            f,
            null
          ), qe(
            e,
            t,
            "formMethod",
            f.formMethod,
            f,
            null
          ), qe(
            e,
            t,
            "formTarget",
            f.formTarget,
            f,
            null
          )) : (qe(e, t, "encType", f.encType, f, null), qe(e, t, "method", f.method, f, null), qe(e, t, "target", f.target, f, null)));
        if (s == null || typeof s == "symbol" || typeof s == "boolean") {
          e.removeAttribute(a);
          break;
        }
        s = $l("" + s), e.setAttribute(a, s);
        break;
      case "onClick":
        s != null && (e.onclick = Bs);
        break;
      case "onScroll":
        s != null && Te("scroll", e);
        break;
      case "onScrollEnd":
        s != null && Te("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s))
            throw Error(l(61));
          if (a = s.__html, a != null) {
            if (f.children != null) throw Error(l(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "muted":
        e.muted = s && typeof s != "function" && typeof s != "symbol";
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
        if (s == null || typeof s == "function" || typeof s == "boolean" || typeof s == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = $l("" + s), e.setAttributeNS(
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
        s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, "" + s) : e.removeAttribute(a);
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
        s && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        s === !0 ? e.setAttribute(a, "") : s !== !1 && s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, s) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        s != null && typeof s != "function" && typeof s != "symbol" && !isNaN(s) && 1 <= s ? e.setAttribute(a, s) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s) ? e.removeAttribute(a) : e.setAttribute(a, s);
        break;
      case "popover":
        Te("beforetoggle", e), Te("toggle", e), Pl(e, "popover", s);
        break;
      case "xlinkActuate":
        zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          s
        );
        break;
      case "xlinkArcrole":
        zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          s
        );
        break;
      case "xlinkRole":
        zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          s
        );
        break;
      case "xlinkShow":
        zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          s
        );
        break;
      case "xlinkTitle":
        zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          s
        );
        break;
      case "xlinkType":
        zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          s
        );
        break;
      case "xmlBase":
        zn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          s
        );
        break;
      case "xmlLang":
        zn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          s
        );
        break;
      case "xmlSpace":
        zn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          s
        );
        break;
      case "is":
        Pl(e, "is", s);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = ev.get(a) || a, Pl(e, a, s));
    }
  }
  function Rc(e, t, a, s, f, d) {
    switch (a) {
      case "style":
        Vh(e, s, d);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s))
            throw Error(l(61));
          if (a = s.__html, a != null) {
            if (f.children != null) throw Error(l(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof s == "string" ? fi(e, s) : (typeof s == "number" || typeof s == "bigint") && fi(e, "" + s);
        break;
      case "onScroll":
        s != null && Te("scroll", e);
        break;
      case "onScrollEnd":
        s != null && Te("scrollend", e);
        break;
      case "onClick":
        s != null && (e.onclick = Bs);
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
        if (!zh.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (f = a.endsWith("Capture"), t = a.slice(2, f ? a.length - 7 : void 0), d = e[Tt] || null, d = d != null ? d[a] : null, typeof d == "function" && e.removeEventListener(t, d, f), typeof s == "function")) {
              typeof d != "function" && d !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, s, f);
              break e;
            }
            a in e ? e[a] = s : s === !0 ? e.setAttribute(a, "") : Pl(e, a, s);
          }
    }
  }
  function gt(e, t, a) {
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
        Te("error", e), Te("load", e);
        var s = !1, f = !1, d;
        for (d in a)
          if (a.hasOwnProperty(d)) {
            var b = a[d];
            if (b != null)
              switch (d) {
                case "src":
                  s = !0;
                  break;
                case "srcSet":
                  f = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l(137, t));
                default:
                  qe(e, t, d, b, a, null);
              }
          }
        f && qe(e, t, "srcSet", a.srcSet, a, null), s && qe(e, t, "src", a.src, a, null);
        return;
      case "input":
        Te("invalid", e);
        var w = d = b = f = null, _ = null, z = null;
        for (s in a)
          if (a.hasOwnProperty(s)) {
            var H = a[s];
            if (H != null)
              switch (s) {
                case "name":
                  f = H;
                  break;
                case "type":
                  b = H;
                  break;
                case "checked":
                  _ = H;
                  break;
                case "defaultChecked":
                  z = H;
                  break;
                case "value":
                  d = H;
                  break;
                case "defaultValue":
                  w = H;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (H != null)
                    throw Error(l(137, t));
                  break;
                default:
                  qe(e, t, s, H, a, null);
              }
          }
        Lh(
          e,
          d,
          w,
          _,
          z,
          b,
          f,
          !1
        ), Il(e);
        return;
      case "select":
        Te("invalid", e), s = b = d = null;
        for (f in a)
          if (a.hasOwnProperty(f) && (w = a[f], w != null))
            switch (f) {
              case "value":
                d = w;
                break;
              case "defaultValue":
                b = w;
                break;
              case "multiple":
                s = w;
              default:
                qe(e, t, f, w, a, null);
            }
        t = d, a = b, e.multiple = !!s, t != null ? ci(e, !!s, t, !1) : a != null && ci(e, !!s, a, !0);
        return;
      case "textarea":
        Te("invalid", e), d = f = s = null;
        for (b in a)
          if (a.hasOwnProperty(b) && (w = a[b], w != null))
            switch (b) {
              case "value":
                s = w;
                break;
              case "defaultValue":
                f = w;
                break;
              case "children":
                d = w;
                break;
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(l(91));
                break;
              default:
                qe(e, t, b, w, a, null);
            }
        Hh(e, s, f, d), Il(e);
        return;
      case "option":
        for (_ in a)
          if (a.hasOwnProperty(_) && (s = a[_], s != null))
            switch (_) {
              case "selected":
                e.selected = s && typeof s != "function" && typeof s != "symbol";
                break;
              default:
                qe(e, t, _, s, a, null);
            }
        return;
      case "dialog":
        Te("beforetoggle", e), Te("toggle", e), Te("cancel", e), Te("close", e);
        break;
      case "iframe":
      case "object":
        Te("load", e);
        break;
      case "video":
      case "audio":
        for (s = 0; s < nl.length; s++)
          Te(nl[s], e);
        break;
      case "image":
        Te("error", e), Te("load", e);
        break;
      case "details":
        Te("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Te("error", e), Te("load", e);
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
        for (z in a)
          if (a.hasOwnProperty(z) && (s = a[z], s != null))
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(l(137, t));
              default:
                qe(e, t, z, s, a, null);
            }
        return;
      default:
        if (Yo(t)) {
          for (H in a)
            a.hasOwnProperty(H) && (s = a[H], s !== void 0 && Rc(
              e,
              t,
              H,
              s,
              a,
              void 0
            ));
          return;
        }
    }
    for (w in a)
      a.hasOwnProperty(w) && (s = a[w], s != null && qe(e, t, w, s, a, null));
  }
  function kw(e, t, a, s) {
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
        var f = null, d = null, b = null, w = null, _ = null, z = null, H = null;
        for (U in a) {
          var V = a[U];
          if (a.hasOwnProperty(U) && V != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                _ = V;
              default:
                s.hasOwnProperty(U) || qe(e, t, U, null, s, V);
            }
        }
        for (var N in s) {
          var U = s[N];
          if (V = a[N], s.hasOwnProperty(N) && (U != null || V != null))
            switch (N) {
              case "type":
                d = U;
                break;
              case "name":
                f = U;
                break;
              case "checked":
                z = U;
                break;
              case "defaultChecked":
                H = U;
                break;
              case "value":
                b = U;
                break;
              case "defaultValue":
                w = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(l(137, t));
                break;
              default:
                U !== V && qe(
                  e,
                  t,
                  N,
                  U,
                  s,
                  V
                );
            }
        }
        Go(
          e,
          b,
          w,
          _,
          z,
          H,
          d,
          f
        );
        return;
      case "select":
        U = b = w = N = null;
        for (d in a)
          if (_ = a[d], a.hasOwnProperty(d) && _ != null)
            switch (d) {
              case "value":
                break;
              case "multiple":
                U = _;
              default:
                s.hasOwnProperty(d) || qe(
                  e,
                  t,
                  d,
                  null,
                  s,
                  _
                );
            }
        for (f in s)
          if (d = s[f], _ = a[f], s.hasOwnProperty(f) && (d != null || _ != null))
            switch (f) {
              case "value":
                N = d;
                break;
              case "defaultValue":
                w = d;
                break;
              case "multiple":
                b = d;
              default:
                d !== _ && qe(
                  e,
                  t,
                  f,
                  d,
                  s,
                  _
                );
            }
        t = w, a = b, s = U, N != null ? ci(e, !!a, N, !1) : !!s != !!a && (t != null ? ci(e, !!a, t, !0) : ci(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        U = N = null;
        for (w in a)
          if (f = a[w], a.hasOwnProperty(w) && f != null && !s.hasOwnProperty(w))
            switch (w) {
              case "value":
                break;
              case "children":
                break;
              default:
                qe(e, t, w, null, s, f);
            }
        for (b in s)
          if (f = s[b], d = a[b], s.hasOwnProperty(b) && (f != null || d != null))
            switch (b) {
              case "value":
                N = f;
                break;
              case "defaultValue":
                U = f;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(l(91));
                break;
              default:
                f !== d && qe(e, t, b, f, s, d);
            }
        qh(e, N, U);
        return;
      case "option":
        for (var de in a)
          if (N = a[de], a.hasOwnProperty(de) && N != null && !s.hasOwnProperty(de))
            switch (de) {
              case "selected":
                e.selected = !1;
                break;
              default:
                qe(
                  e,
                  t,
                  de,
                  null,
                  s,
                  N
                );
            }
        for (_ in s)
          if (N = s[_], U = a[_], s.hasOwnProperty(_) && N !== U && (N != null || U != null))
            switch (_) {
              case "selected":
                e.selected = N && typeof N != "function" && typeof N != "symbol";
                break;
              default:
                qe(
                  e,
                  t,
                  _,
                  N,
                  s,
                  U
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
        for (var ce in a)
          N = a[ce], a.hasOwnProperty(ce) && N != null && !s.hasOwnProperty(ce) && qe(e, t, ce, null, s, N);
        for (z in s)
          if (N = s[z], U = a[z], s.hasOwnProperty(z) && N !== U && (N != null || U != null))
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(l(137, t));
                break;
              default:
                qe(
                  e,
                  t,
                  z,
                  N,
                  s,
                  U
                );
            }
        return;
      default:
        if (Yo(t)) {
          for (var He in a)
            N = a[He], a.hasOwnProperty(He) && N !== void 0 && !s.hasOwnProperty(He) && Rc(
              e,
              t,
              He,
              void 0,
              s,
              N
            );
          for (H in s)
            N = s[H], U = a[H], !s.hasOwnProperty(H) || N === U || N === void 0 && U === void 0 || Rc(
              e,
              t,
              H,
              N,
              s,
              U
            );
          return;
        }
    }
    for (var C in a)
      N = a[C], a.hasOwnProperty(C) && N != null && !s.hasOwnProperty(C) && qe(e, t, C, null, s, N);
    for (V in s)
      N = s[V], U = a[V], !s.hasOwnProperty(V) || N === U || N == null && U == null || qe(e, t, V, N, s, U);
  }
  var zc = null, jc = null;
  function Ls(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Pm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Vm(e, t) {
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
  function Dc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Nc = null;
  function Tw() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Nc ? !1 : (Nc = e, !0) : (Nc = null, !1);
  }
  var Im = typeof setTimeout == "function" ? setTimeout : void 0, Aw = typeof clearTimeout == "function" ? clearTimeout : void 0, Gm = typeof Promise == "function" ? Promise : void 0, Ow = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gm < "u" ? function(e) {
    return Gm.resolve(null).then(e).catch(Cw);
  } : Im;
  function Cw(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function dr(e) {
    return e === "head";
  }
  function $m(e, t) {
    var a = t, s = 0, f = 0;
    do {
      var d = a.nextSibling;
      if (e.removeChild(a), d && d.nodeType === 8)
        if (a = d.data, a === "/$") {
          if (0 < s && 8 > s) {
            a = s;
            var b = e.ownerDocument;
            if (a & 1 && il(b.documentElement), a & 2 && il(b.body), a & 4)
              for (a = b.head, il(a), b = a.firstChild; b; ) {
                var w = b.nextSibling, _ = b.nodeName;
                b[va] || _ === "SCRIPT" || _ === "STYLE" || _ === "LINK" && b.rel.toLowerCase() === "stylesheet" || a.removeChild(b), b = w;
              }
          }
          if (f === 0) {
            e.removeChild(d), hl(t);
            return;
          }
          f--;
        } else
          a === "$" || a === "$?" || a === "$!" ? f++ : s = a.charCodeAt(0) - 48;
      else s = 0;
      a = d;
    } while (a);
    hl(t);
  }
  function Mc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Mc(a), Ho(a);
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
  function Rw(e, t, a, s) {
    for (; e.nodeType === 1; ) {
      var f = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!s && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (s) {
        if (!e[va])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (d = e.getAttribute("rel"), d === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (d !== f.rel || e.getAttribute("href") !== (f.href == null || f.href === "" ? null : f.href) || e.getAttribute("crossorigin") !== (f.crossOrigin == null ? null : f.crossOrigin) || e.getAttribute("title") !== (f.title == null ? null : f.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (d = e.getAttribute("src"), (d !== (f.src == null ? null : f.src) || e.getAttribute("type") !== (f.type == null ? null : f.type) || e.getAttribute("crossorigin") !== (f.crossOrigin == null ? null : f.crossOrigin)) && d && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var d = f.name == null ? null : "" + f.name;
        if (f.type === "hidden" && e.getAttribute("name") === d)
          return e;
      } else return e;
      if (e = dn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function zw(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = dn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Uc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function jw(e, t) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete")
      t();
    else {
      var s = function() {
        t(), a.removeEventListener("DOMContentLoaded", s);
      };
      a.addEventListener("DOMContentLoaded", s), e._reactRetry = s;
    }
  }
  function dn(e) {
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
  var Bc = null;
  function Ym(e) {
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
  function Fm(e, t, a) {
    switch (t = Ls(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(l(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(l(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(l(454));
        return e;
      default:
        throw Error(l(451));
    }
  }
  function il(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Ho(e);
  }
  var on = /* @__PURE__ */ new Map(), Qm = /* @__PURE__ */ new Set();
  function qs(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var $n = F.d;
  F.d = {
    f: Dw,
    r: Nw,
    D: Mw,
    C: Uw,
    L: Bw,
    m: Lw,
    X: Hw,
    S: qw,
    M: Pw
  };
  function Dw() {
    var e = $n.f(), t = Rs();
    return e || t;
  }
  function Nw(e) {
    var t = li(e);
    t !== null && t.tag === 5 && t.type === "form" ? pp(t) : $n.r(e);
  }
  var Hi = typeof document > "u" ? null : document;
  function Km(e, t, a) {
    var s = Hi;
    if (s && typeof t == "string" && t) {
      var f = en(t);
      f = 'link[rel="' + e + '"][href="' + f + '"]', typeof a == "string" && (f += '[crossorigin="' + a + '"]'), Qm.has(f) || (Qm.add(f), e = { rel: e, crossOrigin: a, href: t }, s.querySelector(f) === null && (t = s.createElement("link"), gt(t, "link", e), ot(t), s.head.appendChild(t)));
    }
  }
  function Mw(e) {
    $n.D(e), Km("dns-prefetch", e, null);
  }
  function Uw(e, t) {
    $n.C(e, t), Km("preconnect", e, t);
  }
  function Bw(e, t, a) {
    $n.L(e, t, a);
    var s = Hi;
    if (s && e && t) {
      var f = 'link[rel="preload"][as="' + en(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (f += '[imagesrcset="' + en(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (f += '[imagesizes="' + en(
        a.imageSizes
      ) + '"]')) : f += '[href="' + en(e) + '"]';
      var d = f;
      switch (t) {
        case "style":
          d = Pi(e);
          break;
        case "script":
          d = Vi(e);
      }
      on.has(d) || (e = g(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), on.set(d, e), s.querySelector(f) !== null || t === "style" && s.querySelector(al(d)) || t === "script" && s.querySelector(ll(d)) || (t = s.createElement("link"), gt(t, "link", e), ot(t), s.head.appendChild(t)));
    }
  }
  function Lw(e, t) {
    $n.m(e, t);
    var a = Hi;
    if (a && e) {
      var s = t && typeof t.as == "string" ? t.as : "script", f = 'link[rel="modulepreload"][as="' + en(s) + '"][href="' + en(e) + '"]', d = f;
      switch (s) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = Vi(e);
      }
      if (!on.has(d) && (e = g({ rel: "modulepreload", href: e }, t), on.set(d, e), a.querySelector(f) === null)) {
        switch (s) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ll(d)))
              return;
        }
        s = a.createElement("link"), gt(s, "link", e), ot(s), a.head.appendChild(s);
      }
    }
  }
  function qw(e, t, a) {
    $n.S(e, t, a);
    var s = Hi;
    if (s && e) {
      var f = si(s).hoistableStyles, d = Pi(e);
      t = t || "default";
      var b = f.get(d);
      if (!b) {
        var w = { loading: 0, preload: null };
        if (b = s.querySelector(
          al(d)
        ))
          w.loading = 5;
        else {
          e = g(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = on.get(d)) && Lc(e, a);
          var _ = b = s.createElement("link");
          ot(_), gt(_, "link", e), _._p = new Promise(function(z, H) {
            _.onload = z, _.onerror = H;
          }), _.addEventListener("load", function() {
            w.loading |= 1;
          }), _.addEventListener("error", function() {
            w.loading |= 2;
          }), w.loading |= 4, Hs(b, t, s);
        }
        b = {
          type: "stylesheet",
          instance: b,
          count: 1,
          state: w
        }, f.set(d, b);
      }
    }
  }
  function Hw(e, t) {
    $n.X(e, t);
    var a = Hi;
    if (a && e) {
      var s = si(a).hoistableScripts, f = Vi(e), d = s.get(f);
      d || (d = a.querySelector(ll(f)), d || (e = g({ src: e, async: !0 }, t), (t = on.get(f)) && qc(e, t), d = a.createElement("script"), ot(d), gt(d, "link", e), a.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, s.set(f, d));
    }
  }
  function Pw(e, t) {
    $n.M(e, t);
    var a = Hi;
    if (a && e) {
      var s = si(a).hoistableScripts, f = Vi(e), d = s.get(f);
      d || (d = a.querySelector(ll(f)), d || (e = g({ src: e, async: !0, type: "module" }, t), (t = on.get(f)) && qc(e, t), d = a.createElement("script"), ot(d), gt(d, "link", e), a.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, s.set(f, d));
    }
  }
  function Xm(e, t, a, s) {
    var f = (f = De.current) ? qs(f) : null;
    if (!f) throw Error(l(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Pi(a.href), a = si(
          f
        ).hoistableStyles, s = a.get(t), s || (s = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, s)), s) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Pi(a.href);
          var d = si(
            f
          ).hoistableStyles, b = d.get(e);
          if (b || (f = f.ownerDocument || f, b = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, d.set(e, b), (d = f.querySelector(
            al(e)
          )) && !d._p && (b.instance = d, b.state.loading = 5), on.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, on.set(e, a), d || Vw(
            f,
            e,
            a,
            b.state
          ))), t && s === null)
            throw Error(l(528, ""));
          return b;
        }
        if (t && s !== null)
          throw Error(l(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Vi(a), a = si(
          f
        ).hoistableScripts, s = a.get(t), s || (s = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, s)), s) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(l(444, e));
    }
  }
  function Pi(e) {
    return 'href="' + en(e) + '"';
  }
  function al(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Zm(e) {
    return g({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Vw(e, t, a, s) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? s.loading = 1 : (t = e.createElement("link"), s.preload = t, t.addEventListener("load", function() {
      return s.loading |= 1;
    }), t.addEventListener("error", function() {
      return s.loading |= 2;
    }), gt(t, "link", a), ot(t), e.head.appendChild(t));
  }
  function Vi(e) {
    return '[src="' + en(e) + '"]';
  }
  function ll(e) {
    return "script[async]" + e;
  }
  function Jm(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var s = e.querySelector(
            'style[data-href~="' + en(a.href) + '"]'
          );
          if (s)
            return t.instance = s, ot(s), s;
          var f = g({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return s = (e.ownerDocument || e).createElement(
            "style"
          ), ot(s), gt(s, "style", f), Hs(s, a.precedence, e), t.instance = s;
        case "stylesheet":
          f = Pi(a.href);
          var d = e.querySelector(
            al(f)
          );
          if (d)
            return t.state.loading |= 4, t.instance = d, ot(d), d;
          s = Zm(a), (f = on.get(f)) && Lc(s, f), d = (e.ownerDocument || e).createElement("link"), ot(d);
          var b = d;
          return b._p = new Promise(function(w, _) {
            b.onload = w, b.onerror = _;
          }), gt(d, "link", s), t.state.loading |= 4, Hs(d, a.precedence, e), t.instance = d;
        case "script":
          return d = Vi(a.src), (f = e.querySelector(
            ll(d)
          )) ? (t.instance = f, ot(f), f) : (s = a, (f = on.get(d)) && (s = g({}, a), qc(s, f)), e = e.ownerDocument || e, f = e.createElement("script"), ot(f), gt(f, "link", s), e.head.appendChild(f), t.instance = f);
        case "void":
          return null;
        default:
          throw Error(l(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (s = t.instance, t.state.loading |= 4, Hs(s, a.precedence, e));
    return t.instance;
  }
  function Hs(e, t, a) {
    for (var s = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), f = s.length ? s[s.length - 1] : null, d = f, b = 0; b < s.length; b++) {
      var w = s[b];
      if (w.dataset.precedence === t) d = w;
      else if (d !== f) break;
    }
    d ? d.parentNode.insertBefore(e, d.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Lc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function qc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Ps = null;
  function Wm(e, t, a) {
    if (Ps === null) {
      var s = /* @__PURE__ */ new Map(), f = Ps = /* @__PURE__ */ new Map();
      f.set(a, s);
    } else
      f = Ps, s = f.get(a), s || (s = /* @__PURE__ */ new Map(), f.set(a, s));
    if (s.has(e)) return s;
    for (s.set(e, null), a = a.getElementsByTagName(e), f = 0; f < a.length; f++) {
      var d = a[f];
      if (!(d[va] || d[bt] || e === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
        var b = d.getAttribute(t) || "";
        b = e + b;
        var w = s.get(b);
        w ? w.push(d) : s.set(b, [d]);
      }
    }
    return s;
  }
  function eg(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Iw(e, t, a) {
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
  function tg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var sl = null;
  function Gw() {
  }
  function $w(e, t, a) {
    if (sl === null) throw Error(l(475));
    var s = sl;
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var f = Pi(a.href), d = e.querySelector(
          al(f)
        );
        if (d) {
          e = d._p, e !== null && typeof e == "object" && typeof e.then == "function" && (s.count++, s = Vs.bind(s), e.then(s, s)), t.state.loading |= 4, t.instance = d, ot(d);
          return;
        }
        d = e.ownerDocument || e, a = Zm(a), (f = on.get(f)) && Lc(a, f), d = d.createElement("link"), ot(d);
        var b = d;
        b._p = new Promise(function(w, _) {
          b.onload = w, b.onerror = _;
        }), gt(d, "link", a), t.instance = d;
      }
      s.stylesheets === null && (s.stylesheets = /* @__PURE__ */ new Map()), s.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (s.count++, t = Vs.bind(s), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function Yw() {
    if (sl === null) throw Error(l(475));
    var e = sl;
    return e.stylesheets && e.count === 0 && Hc(e, e.stylesheets), 0 < e.count ? function(t) {
      var a = setTimeout(function() {
        if (e.stylesheets && Hc(e, e.stylesheets), e.unsuspend) {
          var s = e.unsuspend;
          e.unsuspend = null, s();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function Vs() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Hc(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Is = null;
  function Hc(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Is = /* @__PURE__ */ new Map(), t.forEach(Fw, e), Is = null, Vs.call(e));
  }
  function Fw(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Is.get(e);
      if (a) var s = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Is.set(e, a);
        for (var f = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), d = 0; d < f.length; d++) {
          var b = f[d];
          (b.nodeName === "LINK" || b.getAttribute("media") !== "not all") && (a.set(b.dataset.precedence, b), s = b);
        }
        s && a.set(null, s);
      }
      f = t.instance, b = f.getAttribute("data-precedence"), d = a.get(b) || s, d === s && a.set(null, f), a.set(b, f), this.count++, s = Vs.bind(this), f.addEventListener("load", s), f.addEventListener("error", s), d ? d.parentNode.insertBefore(f, d.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(f, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ol = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0
  };
  function Qw(e, t, a, s, f, d, b, w) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Uo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Uo(0), this.hiddenUpdates = Uo(null), this.identifierPrefix = s, this.onUncaughtError = f, this.onCaughtError = d, this.onRecoverableError = b, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = w, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ng(e, t, a, s, f, d, b, w, _, z, H, V) {
    return e = new Qw(
      e,
      t,
      a,
      b,
      w,
      _,
      z,
      V
    ), t = 1, d === !0 && (t |= 24), d = It(3, null, null, t), e.current = d, d.stateNode = e, t = Su(), t.refCount++, e.pooledCache = t, t.refCount++, d.memoizedState = {
      element: s,
      isDehydrated: a,
      cache: t
    }, ku(d), e;
  }
  function rg(e) {
    return e ? (e = vi, e) : vi;
  }
  function ig(e, t, a, s, f, d) {
    f = rg(f), s.context === null ? s.context = f : s.pendingContext = f, s = er(t), s.payload = { element: a }, d = d === void 0 ? null : d, d !== null && (s.callback = d), a = tr(e, s, t), a !== null && (Qt(a, e, t), La(a, e, t));
  }
  function ag(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Pc(e, t) {
    ag(e, t), (e = e.alternate) && ag(e, t);
  }
  function lg(e) {
    if (e.tag === 13) {
      var t = bi(e, 67108864);
      t !== null && Qt(t, e, 67108864), Pc(e, 67108864);
    }
  }
  var Gs = !0;
  function Kw(e, t, a, s) {
    var f = B.T;
    B.T = null;
    var d = F.p;
    try {
      F.p = 2, Vc(e, t, a, s);
    } finally {
      F.p = d, B.T = f;
    }
  }
  function Xw(e, t, a, s) {
    var f = B.T;
    B.T = null;
    var d = F.p;
    try {
      F.p = 8, Vc(e, t, a, s);
    } finally {
      F.p = d, B.T = f;
    }
  }
  function Vc(e, t, a, s) {
    if (Gs) {
      var f = Ic(s);
      if (f === null)
        Cc(
          e,
          t,
          s,
          $s,
          a
        ), og(e, s);
      else if (Jw(
        f,
        e,
        t,
        a,
        s
      ))
        s.stopPropagation();
      else if (og(e, s), t & 4 && -1 < Zw.indexOf(e)) {
        for (; f !== null; ) {
          var d = li(f);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (d = d.stateNode, d.current.memoizedState.isDehydrated) {
                  var b = Pt(d.pendingLanes);
                  if (b !== 0) {
                    var w = d;
                    for (w.pendingLanes |= 2, w.entangledLanes |= 2; b; ) {
                      var _ = 1 << 31 - he(b);
                      w.entanglements[1] |= _, b &= ~_;
                    }
                    _n(d), (Ue & 6) === 0 && (Os = qt() + 500, tl(0));
                  }
                }
                break;
              case 13:
                w = bi(d, 2), w !== null && Qt(w, d, 2), Rs(), Pc(d, 2);
            }
          if (d = Ic(s), d === null && Cc(
            e,
            t,
            s,
            $s,
            a
          ), d === f) break;
          f = d;
        }
        f !== null && s.stopPropagation();
      } else
        Cc(
          e,
          t,
          s,
          null,
          a
        );
    }
  }
  function Ic(e) {
    return e = Qo(e), Gc(e);
  }
  var $s = null;
  function Gc(e) {
    if ($s = null, e = ai(e), e !== null) {
      var t = u(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = c(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return $s = e, null;
  }
  function sg(e) {
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
        switch (jo()) {
          case ga:
            return 2;
          case ya:
            return 8;
          case ri:
          case Do:
            return 32;
          case Hl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var $c = !1, pr = null, mr = null, gr = null, ul = /* @__PURE__ */ new Map(), cl = /* @__PURE__ */ new Map(), yr = [], Zw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function og(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        pr = null;
        break;
      case "dragenter":
      case "dragleave":
        mr = null;
        break;
      case "mouseover":
      case "mouseout":
        gr = null;
        break;
      case "pointerover":
      case "pointerout":
        ul.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        cl.delete(t.pointerId);
    }
  }
  function fl(e, t, a, s, f, d) {
    return e === null || e.nativeEvent !== d ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: s,
      nativeEvent: d,
      targetContainers: [f]
    }, t !== null && (t = li(t), t !== null && lg(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, f !== null && t.indexOf(f) === -1 && t.push(f), e);
  }
  function Jw(e, t, a, s, f) {
    switch (t) {
      case "focusin":
        return pr = fl(
          pr,
          e,
          t,
          a,
          s,
          f
        ), !0;
      case "dragenter":
        return mr = fl(
          mr,
          e,
          t,
          a,
          s,
          f
        ), !0;
      case "mouseover":
        return gr = fl(
          gr,
          e,
          t,
          a,
          s,
          f
        ), !0;
      case "pointerover":
        var d = f.pointerId;
        return ul.set(
          d,
          fl(
            ul.get(d) || null,
            e,
            t,
            a,
            s,
            f
          )
        ), !0;
      case "gotpointercapture":
        return d = f.pointerId, cl.set(
          d,
          fl(
            cl.get(d) || null,
            e,
            t,
            a,
            s,
            f
          )
        ), !0;
    }
    return !1;
  }
  function ug(e) {
    var t = ai(e.target);
    if (t !== null) {
      var a = u(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = c(a), t !== null) {
            e.blockedOn = t, $0(e.priority, function() {
              if (a.tag === 13) {
                var s = Ft();
                s = Bo(s);
                var f = bi(a, s);
                f !== null && Qt(f, a, s), Pc(a, s);
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
  function Ys(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Ic(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var s = new a.constructor(
          a.type,
          a
        );
        Fo = s, a.target.dispatchEvent(s), Fo = null;
      } else
        return t = li(a), t !== null && lg(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function cg(e, t, a) {
    Ys(e) && a.delete(t);
  }
  function Ww() {
    $c = !1, pr !== null && Ys(pr) && (pr = null), mr !== null && Ys(mr) && (mr = null), gr !== null && Ys(gr) && (gr = null), ul.forEach(cg), cl.forEach(cg);
  }
  function Fs(e, t) {
    e.blockedOn === t && (e.blockedOn = null, $c || ($c = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      Ww
    )));
  }
  var Qs = null;
  function fg(e) {
    Qs !== e && (Qs = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        Qs === e && (Qs = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], s = e[t + 1], f = e[t + 2];
          if (typeof s != "function") {
            if (Gc(s || a) === null)
              continue;
            break;
          }
          var d = li(a);
          d !== null && (e.splice(t, 3), t -= 3, Gu(
            d,
            {
              pending: !0,
              data: f,
              method: a.method,
              action: s
            },
            s,
            f
          ));
        }
      }
    ));
  }
  function hl(e) {
    function t(_) {
      return Fs(_, e);
    }
    pr !== null && Fs(pr, e), mr !== null && Fs(mr, e), gr !== null && Fs(gr, e), ul.forEach(t), cl.forEach(t);
    for (var a = 0; a < yr.length; a++) {
      var s = yr[a];
      s.blockedOn === e && (s.blockedOn = null);
    }
    for (; 0 < yr.length && (a = yr[0], a.blockedOn === null); )
      ug(a), a.blockedOn === null && yr.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (s = 0; s < a.length; s += 3) {
        var f = a[s], d = a[s + 1], b = f[Tt] || null;
        if (typeof d == "function")
          b || fg(a);
        else if (b) {
          var w = null;
          if (d && d.hasAttribute("formAction")) {
            if (f = d, b = d[Tt] || null)
              w = b.formAction;
            else if (Gc(f) !== null) continue;
          } else w = b.action;
          typeof w == "function" ? a[s + 1] = w : (a.splice(s, 3), s -= 3), fg(a);
        }
      }
  }
  function Yc(e) {
    this._internalRoot = e;
  }
  Ks.prototype.render = Yc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    var a = t.current, s = Ft();
    ig(a, s, e, t, null, null);
  }, Ks.prototype.unmount = Yc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ig(e.current, 2, null, e, null, null), Rs(), t[ii] = null;
    }
  };
  function Ks(e) {
    this._internalRoot = e;
  }
  Ks.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Oh();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < yr.length && t !== 0 && t < yr[a].priority; a++) ;
      yr.splice(a, 0, e), a === 0 && ug(e);
    }
  };
  var hg = r.version;
  if (hg !== "19.1.0")
    throw Error(
      l(
        527,
        hg,
        "19.1.0"
      )
    );
  F.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = m(t), e = e !== null ? p(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var e1 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: B,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xs.isDisabled && Xs.supportsFiber)
      try {
        q = Xs.inject(
          e1
        ), Q = Xs;
      } catch {
      }
  }
  return pl.createRoot = function(e, t) {
    if (!o(e)) throw Error(l(299));
    var a = !1, s = "", f = Op, d = Cp, b = Rp, w = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onUncaughtError !== void 0 && (f = t.onUncaughtError), t.onCaughtError !== void 0 && (d = t.onCaughtError), t.onRecoverableError !== void 0 && (b = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (w = t.unstable_transitionCallbacks)), t = ng(
      e,
      1,
      !1,
      null,
      null,
      a,
      s,
      f,
      d,
      b,
      w,
      null
    ), e[ii] = t.current, Oc(e), new Yc(t);
  }, pl.hydrateRoot = function(e, t, a) {
    if (!o(e)) throw Error(l(299));
    var s = !1, f = "", d = Op, b = Cp, w = Rp, _ = null, z = null;
    return a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (f = a.identifierPrefix), a.onUncaughtError !== void 0 && (d = a.onUncaughtError), a.onCaughtError !== void 0 && (b = a.onCaughtError), a.onRecoverableError !== void 0 && (w = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (_ = a.unstable_transitionCallbacks), a.formState !== void 0 && (z = a.formState)), t = ng(
      e,
      1,
      !0,
      t,
      a ?? null,
      s,
      f,
      d,
      b,
      w,
      _,
      z
    ), t.context = rg(null), a = t.current, s = Ft(), s = Bo(s), f = er(s), f.callback = null, tr(a, f, s), a = s, t.current.lanes = a, ba(t, a), _n(t), e[ii] = t.current, Oc(e), new Ks(t);
  }, pl.version = "19.1.0", pl;
}
var vg;
function f1() {
  if (vg) return Qc.exports;
  vg = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Qc.exports = c1(), Qc.exports;
}
var h1 = f1();
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d1 = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), p1 = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, i, l) => l ? l.toUpperCase() : i.toLowerCase()
), wg = (n) => {
  const r = p1(n);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, eb = (...n) => n.filter((r, i, l) => !!r && r.trim() !== "" && l.indexOf(r) === i).join(" ").trim(), m1 = (n) => {
  for (const r in n)
    if (r.startsWith("aria-") || r === "role" || r === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var g1 = {
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
const y1 = Wy(
  ({
    color: n = "currentColor",
    size: r = 24,
    strokeWidth: i = 2,
    absoluteStrokeWidth: l,
    className: o = "",
    children: u,
    iconNode: c,
    ...h
  }, m) => _f(
    "svg",
    {
      ref: m,
      ...g1,
      width: r,
      height: r,
      stroke: n,
      strokeWidth: l ? Number(i) * 24 / Number(r) : i,
      className: eb("lucide", o),
      ...!u && !m1(h) && { "aria-hidden": "true" },
      ...h
    },
    [
      ...c.map(([p, g]) => _f(p, g)),
      ...Array.isArray(u) ? u : [u]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kn = (n, r) => {
  const i = Wy(
    ({ className: l, ...o }, u) => _f(y1, {
      ref: u,
      iconNode: r,
      className: eb(
        `lucide-${d1(wg(n))}`,
        `lucide-${n}`,
        l
      ),
      ...o
    })
  );
  return i.displayName = wg(n), i;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b1 = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], tb = Kn("bot", b1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v1 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], w1 = Kn("chevron-down", v1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S1 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], eh = Kn("loader-circle", S1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x1 = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
], Sg = Kn("message-circle", x1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _1 = [
  ["path", { d: "m14 10 7-7", key: "oa77jy" }],
  ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M4 14h6v6", key: "rmj7iw" }]
], E1 = Kn("minimize-2", _1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k1 = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], T1 = Kn("moon", k1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A1 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], O1 = Kn("send", A1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C1 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], R1 = Kn("sun", C1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z1 = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], j1 = Kn("user", z1);
function nb(n) {
  var r, i, l = "";
  if (typeof n == "string" || typeof n == "number") l += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var o = n.length;
    for (r = 0; r < o; r++) n[r] && (i = nb(n[r])) && (l && (l += " "), l += i);
  } else for (i in n) n[i] && (l && (l += " "), l += i);
  return l;
}
function rb() {
  for (var n, r, i = 0, l = "", o = arguments.length; i < o; i++) (n = arguments[i]) && (r = nb(n)) && (l && (l += " "), l += r);
  return l;
}
const th = "-", D1 = (n) => {
  const r = M1(n), {
    conflictingClassGroups: i,
    conflictingClassGroupModifiers: l
  } = n;
  return {
    getClassGroupId: (c) => {
      const h = c.split(th);
      return h[0] === "" && h.length !== 1 && h.shift(), ib(h, r) || N1(c);
    },
    getConflictingClassGroupIds: (c, h) => {
      const m = i[c] || [];
      return h && l[c] ? [...m, ...l[c]] : m;
    }
  };
}, ib = (n, r) => {
  if (n.length === 0)
    return r.classGroupId;
  const i = n[0], l = r.nextPart.get(i), o = l ? ib(n.slice(1), l) : void 0;
  if (o)
    return o;
  if (r.validators.length === 0)
    return;
  const u = n.join(th);
  return r.validators.find(({
    validator: c
  }) => c(u))?.classGroupId;
}, xg = /^\[(.+)\]$/, N1 = (n) => {
  if (xg.test(n)) {
    const r = xg.exec(n)[1], i = r?.substring(0, r.indexOf(":"));
    if (i)
      return "arbitrary.." + i;
  }
}, M1 = (n) => {
  const {
    theme: r,
    classGroups: i
  } = n, l = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in i)
    Ef(i[o], l, o, r);
  return l;
}, Ef = (n, r, i, l) => {
  n.forEach((o) => {
    if (typeof o == "string") {
      const u = o === "" ? r : _g(r, o);
      u.classGroupId = i;
      return;
    }
    if (typeof o == "function") {
      if (U1(o)) {
        Ef(o(l), r, i, l);
        return;
      }
      r.validators.push({
        validator: o,
        classGroupId: i
      });
      return;
    }
    Object.entries(o).forEach(([u, c]) => {
      Ef(c, _g(r, u), i, l);
    });
  });
}, _g = (n, r) => {
  let i = n;
  return r.split(th).forEach((l) => {
    i.nextPart.has(l) || i.nextPart.set(l, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), i = i.nextPart.get(l);
  }), i;
}, U1 = (n) => n.isThemeGetter, B1 = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  const o = (u, c) => {
    i.set(u, c), r++, r > n && (r = 0, l = i, i = /* @__PURE__ */ new Map());
  };
  return {
    get(u) {
      let c = i.get(u);
      if (c !== void 0)
        return c;
      if ((c = l.get(u)) !== void 0)
        return o(u, c), c;
    },
    set(u, c) {
      i.has(u) ? i.set(u, c) : o(u, c);
    }
  };
}, kf = "!", Tf = ":", L1 = Tf.length, q1 = (n) => {
  const {
    prefix: r,
    experimentalParseClassName: i
  } = n;
  let l = (o) => {
    const u = [];
    let c = 0, h = 0, m = 0, p;
    for (let k = 0; k < o.length; k++) {
      let A = o[k];
      if (c === 0 && h === 0) {
        if (A === Tf) {
          u.push(o.slice(m, k)), m = k + L1;
          continue;
        }
        if (A === "/") {
          p = k;
          continue;
        }
      }
      A === "[" ? c++ : A === "]" ? c-- : A === "(" ? h++ : A === ")" && h--;
    }
    const g = u.length === 0 ? o : o.substring(m), y = H1(g), S = y !== g, v = p && p > m ? p - m : void 0;
    return {
      modifiers: u,
      hasImportantModifier: S,
      baseClassName: y,
      maybePostfixModifierPosition: v
    };
  };
  if (r) {
    const o = r + Tf, u = l;
    l = (c) => c.startsWith(o) ? u(c.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: c,
      maybePostfixModifierPosition: void 0
    };
  }
  if (i) {
    const o = l;
    l = (u) => i({
      className: u,
      parseClassName: o
    });
  }
  return l;
}, H1 = (n) => n.endsWith(kf) ? n.substring(0, n.length - 1) : n.startsWith(kf) ? n.substring(1) : n, P1 = (n) => {
  const r = Object.fromEntries(n.orderSensitiveModifiers.map((l) => [l, !0]));
  return (l) => {
    if (l.length <= 1)
      return l;
    const o = [];
    let u = [];
    return l.forEach((c) => {
      c[0] === "[" || r[c] ? (o.push(...u.sort(), c), u = []) : u.push(c);
    }), o.push(...u.sort()), o;
  };
}, V1 = (n) => ({
  cache: B1(n.cacheSize),
  parseClassName: q1(n),
  sortModifiers: P1(n),
  ...D1(n)
}), I1 = /\s+/, G1 = (n, r) => {
  const {
    parseClassName: i,
    getClassGroupId: l,
    getConflictingClassGroupIds: o,
    sortModifiers: u
  } = r, c = [], h = n.trim().split(I1);
  let m = "";
  for (let p = h.length - 1; p >= 0; p -= 1) {
    const g = h[p], {
      isExternal: y,
      modifiers: S,
      hasImportantModifier: v,
      baseClassName: k,
      maybePostfixModifierPosition: A
    } = i(g);
    if (y) {
      m = g + (m.length > 0 ? " " + m : m);
      continue;
    }
    let O = !!A, j = l(O ? k.substring(0, A) : k);
    if (!j) {
      if (!O) {
        m = g + (m.length > 0 ? " " + m : m);
        continue;
      }
      if (j = l(k), !j) {
        m = g + (m.length > 0 ? " " + m : m);
        continue;
      }
      O = !1;
    }
    const Y = u(S).join(":"), D = v ? Y + kf : Y, I = D + j;
    if (c.includes(I))
      continue;
    c.push(I);
    const J = o(j, O);
    for (let M = 0; M < J.length; ++M) {
      const W = J[M];
      c.push(D + W);
    }
    m = g + (m.length > 0 ? " " + m : m);
  }
  return m;
};
function $1() {
  let n = 0, r, i, l = "";
  for (; n < arguments.length; )
    (r = arguments[n++]) && (i = ab(r)) && (l && (l += " "), l += i);
  return l;
}
const ab = (n) => {
  if (typeof n == "string")
    return n;
  let r, i = "";
  for (let l = 0; l < n.length; l++)
    n[l] && (r = ab(n[l])) && (i && (i += " "), i += r);
  return i;
};
function Y1(n, ...r) {
  let i, l, o, u = c;
  function c(m) {
    const p = r.reduce((g, y) => y(g), n());
    return i = V1(p), l = i.cache.get, o = i.cache.set, u = h, h(m);
  }
  function h(m) {
    const p = l(m);
    if (p)
      return p;
    const g = G1(m, i);
    return o(m, g), g;
  }
  return function() {
    return u($1.apply(null, arguments));
  };
}
const at = (n) => {
  const r = (i) => i[n] || [];
  return r.isThemeGetter = !0, r;
}, lb = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, sb = /^\((?:(\w[\w-]*):)?(.+)\)$/i, F1 = /^\d+\/\d+$/, Q1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, K1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, X1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Z1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, J1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ii = (n) => F1.test(n), we = (n) => !!n && !Number.isNaN(Number(n)), vr = (n) => !!n && Number.isInteger(Number(n)), Zc = (n) => n.endsWith("%") && we(n.slice(0, -1)), Yn = (n) => Q1.test(n), W1 = () => !0, eS = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  K1.test(n) && !X1.test(n)
), ob = () => !1, tS = (n) => Z1.test(n), nS = (n) => J1.test(n), rS = (n) => !ae(n) && !le(n), iS = (n) => sa(n, fb, ob), ae = (n) => lb.test(n), $r = (n) => sa(n, hb, eS), Jc = (n) => sa(n, uS, we), Eg = (n) => sa(n, ub, ob), aS = (n) => sa(n, cb, nS), Zs = (n) => sa(n, db, tS), le = (n) => sb.test(n), ml = (n) => oa(n, hb), lS = (n) => oa(n, cS), kg = (n) => oa(n, ub), sS = (n) => oa(n, fb), oS = (n) => oa(n, cb), Js = (n) => oa(n, db, !0), sa = (n, r, i) => {
  const l = lb.exec(n);
  return l ? l[1] ? r(l[1]) : i(l[2]) : !1;
}, oa = (n, r, i = !1) => {
  const l = sb.exec(n);
  return l ? l[1] ? r(l[1]) : i : !1;
}, ub = (n) => n === "position" || n === "percentage", cb = (n) => n === "image" || n === "url", fb = (n) => n === "length" || n === "size" || n === "bg-size", hb = (n) => n === "length", uS = (n) => n === "number", cS = (n) => n === "family-name", db = (n) => n === "shadow", fS = () => {
  const n = at("color"), r = at("font"), i = at("text"), l = at("font-weight"), o = at("tracking"), u = at("leading"), c = at("breakpoint"), h = at("container"), m = at("spacing"), p = at("radius"), g = at("shadow"), y = at("inset-shadow"), S = at("text-shadow"), v = at("drop-shadow"), k = at("blur"), A = at("perspective"), O = at("aspect"), j = at("ease"), Y = at("animate"), D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], I = () => [
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
  ], J = () => [...I(), le, ae], M = () => ["auto", "hidden", "clip", "visible", "scroll"], W = () => ["auto", "contain", "none"], Z = () => [le, ae, m], oe = () => [Ii, "full", "auto", ...Z()], Se = () => [vr, "none", "subgrid", le, ae], te = () => ["auto", {
    span: ["full", vr, le, ae]
  }, vr, le, ae], $ = () => [vr, "auto", le, ae], re = () => ["auto", "min", "max", "fr", le, ae], ee = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ne = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], B = () => ["auto", ...Z()], F = () => [Ii, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...Z()], G = () => [n, le, ae], xe = () => [...I(), kg, Eg, {
    position: [le, ae]
  }], E = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], je = () => ["auto", "cover", "contain", sS, iS, {
    size: [le, ae]
  }], Ee = () => [Zc, ml, $r], x = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    le,
    ae
  ], me = () => ["", we, ml, $r], Fe = () => ["solid", "dashed", "dotted", "double"], De = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Ne = () => [we, Zc, kg, Eg], yt = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    k,
    le,
    ae
  ], lt = () => ["none", we, le, ae], _t = () => ["none", we, le, ae], Lt = () => [we, le, ae], yn = () => [Ii, "full", ...Z()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Yn],
      breakpoint: [Yn],
      color: [W1],
      container: [Yn],
      "drop-shadow": [Yn],
      ease: ["in", "out", "in-out"],
      font: [rS],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Yn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Yn],
      shadow: [Yn],
      spacing: ["px", we],
      text: [Yn],
      "text-shadow": [Yn],
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
        aspect: ["auto", "square", Ii, ae, le, O]
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
        columns: [we, ae, le, h]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": D()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": D()
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
        overflow: M()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": M()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": M()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: W()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": W()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": W()
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
        inset: oe()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": oe()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": oe()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: oe()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: oe()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: oe()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: oe()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: oe()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: oe()
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
        z: [vr, "auto", le, ae]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ii, "full", "auto", h, ...Z()]
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
        flex: [we, Ii, "auto", "initial", "none", ae]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", we, le, ae]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", we, le, ae]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [vr, "first", "last", "none", le, ae]
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
        col: te()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": $()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": $()
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
        row: te()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": $()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": $()
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
        justify: [...ee(), "normal"]
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
        content: ["normal", ...ee()]
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
        "place-content": ee()
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
        m: B()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: B()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: B()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: B()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: B()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: B()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: B()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: B()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: B()
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
        w: [h, "screen", ...F()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          h,
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
          h,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [c]
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
        text: ["base", i, ml, $r]
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
        font: [l, le, Jc]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Zc, ae]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [lS, ae, r]
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
        tracking: [o, le, ae]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [we, "none", le, Jc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          u,
          ...Z()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", le, ae]
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
        list: ["disc", "decimal", "none", le, ae]
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
        decoration: [...Fe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [we, "from-font", "auto", le, $r]
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
        "underline-offset": [we, "auto", le, ae]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", le, ae]
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
        content: ["none", le, ae]
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
        bg: xe()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: E()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: je()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, vr, le, ae],
          radial: ["", le, ae],
          conic: [vr, le, ae]
        }, oS, aS]
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
        from: Ee()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Ee()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Ee()
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
        border: me()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": me()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": me()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": me()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": me()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": me()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": me()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": me()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": me()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": me()
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
        "divide-y": me()
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
        border: [...Fe(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Fe(), "hidden", "none"]
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
        outline: [...Fe(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [we, le, ae]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", we, ml, $r]
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
          g,
          Js,
          Zs
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
        "inset-shadow": ["none", y, Js, Zs]
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
        ring: me()
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
        "ring-offset": [we, $r]
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
        "inset-ring": me()
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
        "text-shadow": ["none", S, Js, Zs]
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
        opacity: [we, le, ae]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...De(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": De()
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
        "mask-linear": [we]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": Ne()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Ne()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": G()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": G()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Ne()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Ne()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": G()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": G()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Ne()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Ne()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": G()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": G()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Ne()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Ne()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": G()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": G()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Ne()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Ne()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": G()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": G()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Ne()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Ne()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": G()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": G()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Ne()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Ne()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": G()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": G()
      }],
      "mask-image-radial": [{
        "mask-radial": [le, ae]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": Ne()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": Ne()
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
        "mask-radial-at": I()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [we]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": Ne()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Ne()
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
        mask: xe()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: E()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: je()
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
        mask: ["none", le, ae]
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
          le,
          ae
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: yt()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [we, le, ae]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [we, le, ae]
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
          v,
          Js,
          Zs
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
        grayscale: ["", we, le, ae]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [we, le, ae]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", we, le, ae]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [we, le, ae]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", we, le, ae]
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
          le,
          ae
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": yt()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [we, le, ae]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [we, le, ae]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", we, le, ae]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [we, le, ae]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", we, le, ae]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [we, le, ae]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [we, le, ae]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", we, le, ae]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", le, ae]
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
        duration: [we, "initial", le, ae]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", j, le, ae]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [we, le, ae]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", Y, le, ae]
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
        perspective: [A, le, ae]
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
        rotate: lt()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": lt()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": lt()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": lt()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: _t()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": _t()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": _t()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": _t()
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
        skew: Lt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Lt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Lt()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [le, ae, "", "none", "gpu", "cpu"]
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
        translate: yn()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": yn()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": yn()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": yn()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", le, ae]
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
        "will-change": ["auto", "scroll", "contents", "transform", le, ae]
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
        stroke: [we, ml, $r, Jc]
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
}, hS = /* @__PURE__ */ Y1(fS);
function An(...n) {
  return hS(rb(n));
}
function pb(n, r = 20) {
  const i = n.replace("#", ""), l = parseInt(i.substr(0, 2), 16), o = parseInt(i.substr(2, 2), 16), u = parseInt(i.substr(4, 2), 16), c = r / 100, h = Math.max(0, Math.floor(l * (1 - c))), m = Math.max(0, Math.floor(o * (1 - c))), p = Math.max(0, Math.floor(u * (1 - c))), g = (y) => y.toString(16).padStart(2, "0");
  return `#${g(h)}${g(m)}${g(p)}`;
}
function dS(n, r) {
  const i = {};
  return (n[n.length - 1] === "" ? [...n, ""] : n).join(
    (i.padRight ? " " : "") + "," + (i.padLeft === !1 ? "" : " ")
  ).trim();
}
const pS = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, mS = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, gS = {};
function Tg(n, r) {
  return (gS.jsx ? mS : pS).test(n);
}
const yS = /[ \t\n\f\r]/g;
function bS(n) {
  return typeof n == "object" ? n.type === "text" ? Ag(n.value) : !1 : Ag(n);
}
function Ag(n) {
  return n.replace(yS, "") === "";
}
class Dl {
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
  constructor(r, i, l) {
    this.normal = i, this.property = r, l && (this.space = l);
  }
}
Dl.prototype.normal = {};
Dl.prototype.property = {};
Dl.prototype.space = void 0;
function mb(n, r) {
  const i = {}, l = {};
  for (const o of n)
    Object.assign(i, o.property), Object.assign(l, o.normal);
  return new Dl(i, l, r);
}
function Af(n) {
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
  constructor(r, i) {
    this.attribute = i, this.property = r;
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
let vS = 0;
const be = ti(), nt = ti(), Of = ti(), K = ti(), Ge = ti(), ia = ti(), Kt = ti();
function ti() {
  return 2 ** ++vS;
}
const Cf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: be,
  booleanish: nt,
  commaOrSpaceSeparated: Kt,
  commaSeparated: ia,
  number: K,
  overloadedBoolean: Of,
  spaceSeparated: Ge
}, Symbol.toStringTag, { value: "Module" })), Wc = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Cf)
);
class nh extends Bt {
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
  constructor(r, i, l, o) {
    let u = -1;
    if (super(r, i), Og(this, "space", o), typeof l == "number")
      for (; ++u < Wc.length; ) {
        const c = Wc[u];
        Og(this, Wc[u], (l & Cf[c]) === Cf[c]);
      }
  }
}
nh.prototype.defined = !0;
function Og(n, r, i) {
  i && (n[r] = i);
}
function ua(n) {
  const r = {}, i = {};
  for (const [l, o] of Object.entries(n.properties)) {
    const u = new nh(
      l,
      n.transform(n.attributes || {}, l),
      o,
      n.space
    );
    n.mustUseProperty && n.mustUseProperty.includes(l) && (u.mustUseProperty = !0), r[l] = u, i[Af(l)] = l, i[Af(u.attribute)] = l;
  }
  return new Dl(r, i, n.space);
}
const gb = ua({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: nt,
    ariaAutoComplete: null,
    ariaBusy: nt,
    ariaChecked: nt,
    ariaColCount: K,
    ariaColIndex: K,
    ariaColSpan: K,
    ariaControls: Ge,
    ariaCurrent: null,
    ariaDescribedBy: Ge,
    ariaDetails: null,
    ariaDisabled: nt,
    ariaDropEffect: Ge,
    ariaErrorMessage: null,
    ariaExpanded: nt,
    ariaFlowTo: Ge,
    ariaGrabbed: nt,
    ariaHasPopup: null,
    ariaHidden: nt,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Ge,
    ariaLevel: K,
    ariaLive: null,
    ariaModal: nt,
    ariaMultiLine: nt,
    ariaMultiSelectable: nt,
    ariaOrientation: null,
    ariaOwns: Ge,
    ariaPlaceholder: null,
    ariaPosInSet: K,
    ariaPressed: nt,
    ariaReadOnly: nt,
    ariaRelevant: null,
    ariaRequired: nt,
    ariaRoleDescription: Ge,
    ariaRowCount: K,
    ariaRowIndex: K,
    ariaRowSpan: K,
    ariaSelected: nt,
    ariaSetSize: K,
    ariaSort: null,
    ariaValueMax: K,
    ariaValueMin: K,
    ariaValueNow: K,
    ariaValueText: null,
    role: null
  },
  transform(n, r) {
    return r === "role" ? r : "aria-" + r.slice(4).toLowerCase();
  }
});
function yb(n, r) {
  return r in n ? n[r] : r;
}
function bb(n, r) {
  return yb(n, r.toLowerCase());
}
const wS = ua({
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
    accept: ia,
    acceptCharset: Ge,
    accessKey: Ge,
    action: null,
    allow: null,
    allowFullScreen: be,
    allowPaymentRequest: be,
    allowUserMedia: be,
    alt: null,
    as: null,
    async: be,
    autoCapitalize: null,
    autoComplete: Ge,
    autoFocus: be,
    autoPlay: be,
    blocking: Ge,
    capture: null,
    charSet: null,
    checked: be,
    cite: null,
    className: Ge,
    cols: K,
    colSpan: null,
    content: null,
    contentEditable: nt,
    controls: be,
    controlsList: Ge,
    coords: K | ia,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: be,
    defer: be,
    dir: null,
    dirName: null,
    disabled: be,
    download: Of,
    draggable: nt,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: be,
    formTarget: null,
    headers: Ge,
    height: K,
    hidden: Of,
    high: K,
    href: null,
    hrefLang: null,
    htmlFor: Ge,
    httpEquiv: Ge,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: be,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: be,
    itemId: null,
    itemProp: Ge,
    itemRef: Ge,
    itemScope: be,
    itemType: Ge,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: be,
    low: K,
    manifest: null,
    max: null,
    maxLength: K,
    media: null,
    method: null,
    min: null,
    minLength: K,
    multiple: be,
    muted: be,
    name: null,
    nonce: null,
    noModule: be,
    noValidate: be,
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
    open: be,
    optimum: K,
    pattern: null,
    ping: Ge,
    placeholder: null,
    playsInline: be,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: be,
    referrerPolicy: null,
    rel: Ge,
    required: be,
    reversed: be,
    rows: K,
    rowSpan: K,
    sandbox: Ge,
    scope: null,
    scoped: be,
    seamless: be,
    selected: be,
    shadowRootClonable: be,
    shadowRootDelegatesFocus: be,
    shadowRootMode: null,
    shape: null,
    size: K,
    sizes: null,
    slot: null,
    span: K,
    spellCheck: nt,
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
    typeMustMatch: be,
    useMap: null,
    value: nt,
    width: K,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: Ge,
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
    compact: be,
    // Lists. Use CSS to reduce space between items instead
    declare: be,
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
    noResize: be,
    // `<frame>`
    noHref: be,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: be,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: be,
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
    scrolling: nt,
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
    disablePictureInPicture: be,
    disableRemotePlayback: be,
    prefix: null,
    property: null,
    results: K,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: bb
}), SS = ua({
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
    about: Kt,
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
    className: Ge,
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
    download: be,
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
    g1: ia,
    g2: ia,
    glyphName: ia,
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
    kernelMatrix: Kt,
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
    ping: Ge,
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
    property: Kt,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Kt,
    rev: Kt,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Kt,
    requiredFeatures: Kt,
    requiredFonts: Kt,
    requiredFormats: Kt,
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
    strokeDashArray: Kt,
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
    systemLanguage: Kt,
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
    typeOf: Kt,
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
  transform: yb
}), vb = ua({
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
  transform(n, r) {
    return "xlink:" + r.slice(5).toLowerCase();
  }
}), wb = ua({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: bb
}), Sb = ua({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(n, r) {
    return "xml:" + r.slice(3).toLowerCase();
  }
}), xS = {
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
}, _S = /[A-Z]/g, Cg = /-[a-z]/g, ES = /^data[-\w.:]+$/i;
function kS(n, r) {
  const i = Af(r);
  let l = r, o = Bt;
  if (i in n.normal)
    return n.property[n.normal[i]];
  if (i.length > 4 && i.slice(0, 4) === "data" && ES.test(r)) {
    if (r.charAt(4) === "-") {
      const u = r.slice(5).replace(Cg, AS);
      l = "data" + u.charAt(0).toUpperCase() + u.slice(1);
    } else {
      const u = r.slice(4);
      if (!Cg.test(u)) {
        let c = u.replace(_S, TS);
        c.charAt(0) !== "-" && (c = "-" + c), r = "data" + c;
      }
    }
    o = nh;
  }
  return new o(l, r);
}
function TS(n) {
  return "-" + n.toLowerCase();
}
function AS(n) {
  return n.charAt(1).toUpperCase();
}
const OS = mb([gb, wS, vb, wb, Sb], "html"), rh = mb([gb, SS, vb, wb, Sb], "svg");
function CS(n) {
  return n.join(" ").trim();
}
var Gi = {}, ef, Rg;
function RS() {
  if (Rg) return ef;
  Rg = 1;
  var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, i = /^\s*/, l = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, o = /^:\s*/, u = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, c = /^[;\s]*/, h = /^\s+|\s+$/g, m = `
`, p = "/", g = "*", y = "", S = "comment", v = "declaration";
  ef = function(A, O) {
    if (typeof A != "string")
      throw new TypeError("First argument must be a string");
    if (!A) return [];
    O = O || {};
    var j = 1, Y = 1;
    function D(re) {
      var ee = re.match(r);
      ee && (j += ee.length);
      var ne = re.lastIndexOf(m);
      Y = ~ne ? re.length - ne : Y + re.length;
    }
    function I() {
      var re = { line: j, column: Y };
      return function(ee) {
        return ee.position = new J(re), Z(), ee;
      };
    }
    function J(re) {
      this.start = re, this.end = { line: j, column: Y }, this.source = O.source;
    }
    J.prototype.content = A;
    function M(re) {
      var ee = new Error(
        O.source + ":" + j + ":" + Y + ": " + re
      );
      if (ee.reason = re, ee.filename = O.source, ee.line = j, ee.column = Y, ee.source = A, !O.silent) throw ee;
    }
    function W(re) {
      var ee = re.exec(A);
      if (ee) {
        var ne = ee[0];
        return D(ne), A = A.slice(ne.length), ee;
      }
    }
    function Z() {
      W(i);
    }
    function oe(re) {
      var ee;
      for (re = re || []; ee = Se(); )
        ee !== !1 && re.push(ee);
      return re;
    }
    function Se() {
      var re = I();
      if (!(p != A.charAt(0) || g != A.charAt(1))) {
        for (var ee = 2; y != A.charAt(ee) && (g != A.charAt(ee) || p != A.charAt(ee + 1)); )
          ++ee;
        if (ee += 2, y === A.charAt(ee - 1))
          return M("End of comment missing");
        var ne = A.slice(2, ee - 2);
        return Y += 2, D(ne), A = A.slice(ee), Y += 2, re({
          type: S,
          comment: ne
        });
      }
    }
    function te() {
      var re = I(), ee = W(l);
      if (ee) {
        if (Se(), !W(o)) return M("property missing ':'");
        var ne = W(u), B = re({
          type: v,
          property: k(ee[0].replace(n, y)),
          value: ne ? k(ne[0].replace(n, y)) : y
        });
        return W(c), B;
      }
    }
    function $() {
      var re = [];
      oe(re);
      for (var ee; ee = te(); )
        ee !== !1 && (re.push(ee), oe(re));
      return re;
    }
    return Z(), $();
  };
  function k(A) {
    return A ? A.replace(h, y) : y;
  }
  return ef;
}
var zg;
function zS() {
  if (zg) return Gi;
  zg = 1;
  var n = Gi && Gi.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(Gi, "__esModule", { value: !0 }), Gi.default = i;
  var r = n(RS());
  function i(l, o) {
    var u = null;
    if (!l || typeof l != "string")
      return u;
    var c = (0, r.default)(l), h = typeof o == "function";
    return c.forEach(function(m) {
      if (m.type === "declaration") {
        var p = m.property, g = m.value;
        h ? o(p, g, m) : g && (u = u || {}, u[p] = g);
      }
    }), u;
  }
  return Gi;
}
var gl = {}, jg;
function jS() {
  if (jg) return gl;
  jg = 1, Object.defineProperty(gl, "__esModule", { value: !0 }), gl.camelCase = void 0;
  var n = /^--[a-zA-Z0-9_-]+$/, r = /-([a-z])/g, i = /^[^-]+$/, l = /^-(webkit|moz|ms|o|khtml)-/, o = /^-(ms)-/, u = function(p) {
    return !p || i.test(p) || n.test(p);
  }, c = function(p, g) {
    return g.toUpperCase();
  }, h = function(p, g) {
    return "".concat(g, "-");
  }, m = function(p, g) {
    return g === void 0 && (g = {}), u(p) ? p : (p = p.toLowerCase(), g.reactCompat ? p = p.replace(o, h) : p = p.replace(l, h), p.replace(r, c));
  };
  return gl.camelCase = m, gl;
}
var yl, Dg;
function DS() {
  if (Dg) return yl;
  Dg = 1;
  var n = yl && yl.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  }, r = n(zS()), i = jS();
  function l(o, u) {
    var c = {};
    return !o || typeof o != "string" || (0, r.default)(o, function(h, m) {
      h && m && (c[(0, i.camelCase)(h, u)] = m);
    }), c;
  }
  return l.default = l, yl = l, yl;
}
var NS = DS();
const MS = /* @__PURE__ */ Wf(NS), xb = _b("end"), ih = _b("start");
function _b(n) {
  return r;
  function r(i) {
    const l = i && i.position && i.position[n] || {};
    if (typeof l.line == "number" && l.line > 0 && typeof l.column == "number" && l.column > 0)
      return {
        line: l.line,
        column: l.column,
        offset: typeof l.offset == "number" && l.offset > -1 ? l.offset : void 0
      };
  }
}
function US(n) {
  const r = ih(n), i = xb(n);
  if (r && i)
    return { start: r, end: i };
}
function El(n) {
  return !n || typeof n != "object" ? "" : "position" in n || "type" in n ? Ng(n.position) : "start" in n || "end" in n ? Ng(n) : "line" in n || "column" in n ? Rf(n) : "";
}
function Rf(n) {
  return Mg(n && n.line) + ":" + Mg(n && n.column);
}
function Ng(n) {
  return Rf(n && n.start) + "-" + Rf(n && n.end);
}
function Mg(n) {
  return n && typeof n == "number" ? n : 1;
}
class xt extends Error {
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
  constructor(r, i, l) {
    super(), typeof i == "string" && (l = i, i = void 0);
    let o = "", u = {}, c = !1;
    if (i && ("line" in i && "column" in i ? u = { place: i } : "start" in i && "end" in i ? u = { place: i } : "type" in i ? u = {
      ancestors: [i],
      place: i.position
    } : u = { ...i }), typeof r == "string" ? o = r : !u.cause && r && (c = !0, o = r.message, u.cause = r), !u.ruleId && !u.source && typeof l == "string") {
      const m = l.indexOf(":");
      m === -1 ? u.ruleId = l : (u.source = l.slice(0, m), u.ruleId = l.slice(m + 1));
    }
    if (!u.place && u.ancestors && u.ancestors) {
      const m = u.ancestors[u.ancestors.length - 1];
      m && (u.place = m.position);
    }
    const h = u.place && "start" in u.place ? u.place.start : u.place;
    this.ancestors = u.ancestors || void 0, this.cause = u.cause || void 0, this.column = h ? h.column : void 0, this.fatal = void 0, this.file, this.message = o, this.line = h ? h.line : void 0, this.name = El(u.place) || "1:1", this.place = u.place || void 0, this.reason = this.message, this.ruleId = u.ruleId || void 0, this.source = u.source || void 0, this.stack = c && u.cause && typeof u.cause.stack == "string" ? u.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
xt.prototype.file = "";
xt.prototype.name = "";
xt.prototype.reason = "";
xt.prototype.message = "";
xt.prototype.stack = "";
xt.prototype.column = void 0;
xt.prototype.line = void 0;
xt.prototype.ancestors = void 0;
xt.prototype.cause = void 0;
xt.prototype.fatal = void 0;
xt.prototype.place = void 0;
xt.prototype.ruleId = void 0;
xt.prototype.source = void 0;
const ah = {}.hasOwnProperty, BS = /* @__PURE__ */ new Map(), LS = /[A-Z]/g, qS = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), HS = /* @__PURE__ */ new Set(["td", "th"]), Eb = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function PS(n, r) {
  if (!r || r.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const i = r.filePath || void 0;
  let l;
  if (r.development) {
    if (typeof r.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    l = KS(i, r.jsxDEV);
  } else {
    if (typeof r.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof r.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    l = QS(i, r.jsx, r.jsxs);
  }
  const o = {
    Fragment: r.Fragment,
    ancestors: [],
    components: r.components || {},
    create: l,
    elementAttributeNameCase: r.elementAttributeNameCase || "react",
    evaluater: r.createEvaluater ? r.createEvaluater() : void 0,
    filePath: i,
    ignoreInvalidStyle: r.ignoreInvalidStyle || !1,
    passKeys: r.passKeys !== !1,
    passNode: r.passNode || !1,
    schema: r.space === "svg" ? rh : OS,
    stylePropertyNameCase: r.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: r.tableCellAlignToStyle !== !1
  }, u = kb(o, n, void 0);
  return u && typeof u != "string" ? u : o.create(
    n,
    o.Fragment,
    { children: u || void 0 },
    void 0
  );
}
function kb(n, r, i) {
  if (r.type === "element")
    return VS(n, r, i);
  if (r.type === "mdxFlowExpression" || r.type === "mdxTextExpression")
    return IS(n, r);
  if (r.type === "mdxJsxFlowElement" || r.type === "mdxJsxTextElement")
    return $S(n, r, i);
  if (r.type === "mdxjsEsm")
    return GS(n, r);
  if (r.type === "root")
    return YS(n, r, i);
  if (r.type === "text")
    return FS(n, r);
}
function VS(n, r, i) {
  const l = n.schema;
  let o = l;
  r.tagName.toLowerCase() === "svg" && l.space === "html" && (o = rh, n.schema = o), n.ancestors.push(r);
  const u = Ab(n, r.tagName, !1), c = XS(n, r);
  let h = sh(n, r);
  return qS.has(r.tagName) && (h = h.filter(function(m) {
    return typeof m == "string" ? !bS(m) : !0;
  })), Tb(n, c, u, r), lh(c, h), n.ancestors.pop(), n.schema = l, n.create(r, u, c, i);
}
function IS(n, r) {
  if (r.data && r.data.estree && n.evaluater) {
    const l = r.data.estree.body[0];
    return l.type, /** @type {Child | undefined} */
    n.evaluater.evaluateExpression(l.expression);
  }
  Rl(n, r.position);
}
function GS(n, r) {
  if (r.data && r.data.estree && n.evaluater)
    return (
      /** @type {Child | undefined} */
      n.evaluater.evaluateProgram(r.data.estree)
    );
  Rl(n, r.position);
}
function $S(n, r, i) {
  const l = n.schema;
  let o = l;
  r.name === "svg" && l.space === "html" && (o = rh, n.schema = o), n.ancestors.push(r);
  const u = r.name === null ? n.Fragment : Ab(n, r.name, !0), c = ZS(n, r), h = sh(n, r);
  return Tb(n, c, u, r), lh(c, h), n.ancestors.pop(), n.schema = l, n.create(r, u, c, i);
}
function YS(n, r, i) {
  const l = {};
  return lh(l, sh(n, r)), n.create(r, n.Fragment, l, i);
}
function FS(n, r) {
  return r.value;
}
function Tb(n, r, i, l) {
  typeof i != "string" && i !== n.Fragment && n.passNode && (r.node = l);
}
function lh(n, r) {
  if (r.length > 0) {
    const i = r.length > 1 ? r : r[0];
    i && (n.children = i);
  }
}
function QS(n, r, i) {
  return l;
  function l(o, u, c, h) {
    const p = Array.isArray(c.children) ? i : r;
    return h ? p(u, c, h) : p(u, c);
  }
}
function KS(n, r) {
  return i;
  function i(l, o, u, c) {
    const h = Array.isArray(u.children), m = ih(l);
    return r(
      o,
      u,
      c,
      h,
      {
        columnNumber: m ? m.column - 1 : void 0,
        fileName: n,
        lineNumber: m ? m.line : void 0
      },
      void 0
    );
  }
}
function XS(n, r) {
  const i = {};
  let l, o;
  for (o in r.properties)
    if (o !== "children" && ah.call(r.properties, o)) {
      const u = JS(n, o, r.properties[o]);
      if (u) {
        const [c, h] = u;
        n.tableCellAlignToStyle && c === "align" && typeof h == "string" && HS.has(r.tagName) ? l = h : i[c] = h;
      }
    }
  if (l) {
    const u = (
      /** @type {Style} */
      i.style || (i.style = {})
    );
    u[n.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = l;
  }
  return i;
}
function ZS(n, r) {
  const i = {};
  for (const l of r.attributes)
    if (l.type === "mdxJsxExpressionAttribute")
      if (l.data && l.data.estree && n.evaluater) {
        const u = l.data.estree.body[0];
        u.type;
        const c = u.expression;
        c.type;
        const h = c.properties[0];
        h.type, Object.assign(
          i,
          n.evaluater.evaluateExpression(h.argument)
        );
      } else
        Rl(n, r.position);
    else {
      const o = l.name;
      let u;
      if (l.value && typeof l.value == "object")
        if (l.value.data && l.value.data.estree && n.evaluater) {
          const h = l.value.data.estree.body[0];
          h.type, u = n.evaluater.evaluateExpression(h.expression);
        } else
          Rl(n, r.position);
      else
        u = l.value === null ? !0 : l.value;
      i[o] = /** @type {Props[keyof Props]} */
      u;
    }
  return i;
}
function sh(n, r) {
  const i = [];
  let l = -1;
  const o = n.passKeys ? /* @__PURE__ */ new Map() : BS;
  for (; ++l < r.children.length; ) {
    const u = r.children[l];
    let c;
    if (n.passKeys) {
      const m = u.type === "element" ? u.tagName : u.type === "mdxJsxFlowElement" || u.type === "mdxJsxTextElement" ? u.name : void 0;
      if (m) {
        const p = o.get(m) || 0;
        c = m + "-" + p, o.set(m, p + 1);
      }
    }
    const h = kb(n, u, c);
    h !== void 0 && i.push(h);
  }
  return i;
}
function JS(n, r, i) {
  const l = kS(n.schema, r);
  if (!(i == null || typeof i == "number" && Number.isNaN(i))) {
    if (Array.isArray(i) && (i = l.commaSeparated ? dS(i) : CS(i)), l.property === "style") {
      let o = typeof i == "object" ? i : WS(n, String(i));
      return n.stylePropertyNameCase === "css" && (o = ex(o)), ["style", o];
    }
    return [
      n.elementAttributeNameCase === "react" && l.space ? xS[l.property] || l.property : l.attribute,
      i
    ];
  }
}
function WS(n, r) {
  try {
    return MS(r, { reactCompat: !0 });
  } catch (i) {
    if (n.ignoreInvalidStyle)
      return {};
    const l = (
      /** @type {Error} */
      i
    ), o = new xt("Cannot parse `style` attribute", {
      ancestors: n.ancestors,
      cause: l,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw o.file = n.filePath || void 0, o.url = Eb + "#cannot-parse-style-attribute", o;
  }
}
function Ab(n, r, i) {
  let l;
  if (!i)
    l = { type: "Literal", value: r };
  else if (r.includes(".")) {
    const o = r.split(".");
    let u = -1, c;
    for (; ++u < o.length; ) {
      const h = Tg(o[u]) ? { type: "Identifier", name: o[u] } : { type: "Literal", value: o[u] };
      c = c ? {
        type: "MemberExpression",
        object: c,
        property: h,
        computed: !!(u && h.type === "Literal"),
        optional: !1
      } : h;
    }
    l = c;
  } else
    l = Tg(r) && !/^[a-z]/.test(r) ? { type: "Identifier", name: r } : { type: "Literal", value: r };
  if (l.type === "Literal") {
    const o = (
      /** @type {string | number} */
      l.value
    );
    return ah.call(n.components, o) ? n.components[o] : o;
  }
  if (n.evaluater)
    return n.evaluater.evaluateExpression(l);
  Rl(n);
}
function Rl(n, r) {
  const i = new xt(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: n.ancestors,
      place: r,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw i.file = n.filePath || void 0, i.url = Eb + "#cannot-handle-mdx-estrees-without-createevaluater", i;
}
function ex(n) {
  const r = {};
  let i;
  for (i in n)
    ah.call(n, i) && (r[tx(i)] = n[i]);
  return r;
}
function tx(n) {
  let r = n.replace(LS, nx);
  return r.slice(0, 3) === "ms-" && (r = "-" + r), r;
}
function nx(n) {
  return "-" + n.toLowerCase();
}
const tf = {
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
}, rx = {};
function ix(n, r) {
  const i = rx, l = typeof i.includeImageAlt == "boolean" ? i.includeImageAlt : !0, o = typeof i.includeHtml == "boolean" ? i.includeHtml : !0;
  return Ob(n, l, o);
}
function Ob(n, r, i) {
  if (ax(n)) {
    if ("value" in n)
      return n.type === "html" && !i ? "" : n.value;
    if (r && "alt" in n && n.alt)
      return n.alt;
    if ("children" in n)
      return Ug(n.children, r, i);
  }
  return Array.isArray(n) ? Ug(n, r, i) : "";
}
function Ug(n, r, i) {
  const l = [];
  let o = -1;
  for (; ++o < n.length; )
    l[o] = Ob(n[o], r, i);
  return l.join("");
}
function ax(n) {
  return !!(n && typeof n == "object");
}
const Bg = document.createElement("i");
function oh(n) {
  const r = "&" + n + ";";
  Bg.innerHTML = r;
  const i = Bg.textContent;
  return (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    i.charCodeAt(i.length - 1) === 59 && n !== "semi" || i === r ? !1 : i
  );
}
function Cn(n, r, i, l) {
  const o = n.length;
  let u = 0, c;
  if (r < 0 ? r = -r > o ? 0 : o + r : r = r > o ? o : r, i = i > 0 ? i : 0, l.length < 1e4)
    c = Array.from(l), c.unshift(r, i), n.splice(...c);
  else
    for (i && n.splice(r, i); u < l.length; )
      c = l.slice(u, u + 1e4), c.unshift(r, 0), n.splice(...c), u += 1e4, r += 1e4;
}
function un(n, r) {
  return n.length > 0 ? (Cn(n, n.length, 0, r), n) : r;
}
const Lg = {}.hasOwnProperty;
function lx(n) {
  const r = {};
  let i = -1;
  for (; ++i < n.length; )
    sx(r, n[i]);
  return r;
}
function sx(n, r) {
  let i;
  for (i in r) {
    const o = (Lg.call(n, i) ? n[i] : void 0) || (n[i] = {}), u = r[i];
    let c;
    if (u)
      for (c in u) {
        Lg.call(o, c) || (o[c] = []);
        const h = u[c];
        ox(
          // @ts-expect-error Looks like a list.
          o[c],
          Array.isArray(h) ? h : h ? [h] : []
        );
      }
  }
}
function ox(n, r) {
  let i = -1;
  const l = [];
  for (; ++i < r.length; )
    (r[i].add === "after" ? n : l).push(r[i]);
  Cn(n, 0, 0, l);
}
function Cb(n, r) {
  const i = Number.parseInt(n, r);
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
function aa(n) {
  return n.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const On = Tr(/[A-Za-z]/), Zt = Tr(/[\dA-Za-z]/), ux = Tr(/[#-'*+\--9=?A-Z^-~]/);
function zf(n) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    n !== null && (n < 32 || n === 127)
  );
}
const jf = Tr(/\d/), cx = Tr(/[\dA-Fa-f]/), fx = Tr(/[!-/:-@[-`{-~]/);
function pe(n) {
  return n !== null && n < -2;
}
function Nt(n) {
  return n !== null && (n < 0 || n === 32);
}
function ze(n) {
  return n === -2 || n === -1 || n === 32;
}
const hx = Tr(new RegExp("\\p{P}|\\p{S}", "u")), dx = Tr(/\s/);
function Tr(n) {
  return r;
  function r(i) {
    return i !== null && i > -1 && n.test(String.fromCharCode(i));
  }
}
function ca(n) {
  const r = [];
  let i = -1, l = 0, o = 0;
  for (; ++i < n.length; ) {
    const u = n.charCodeAt(i);
    let c = "";
    if (u === 37 && Zt(n.charCodeAt(i + 1)) && Zt(n.charCodeAt(i + 2)))
      o = 2;
    else if (u < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(u)) || (c = String.fromCharCode(u));
    else if (u > 55295 && u < 57344) {
      const h = n.charCodeAt(i + 1);
      u < 56320 && h > 56319 && h < 57344 ? (c = String.fromCharCode(u, h), o = 1) : c = "�";
    } else
      c = String.fromCharCode(u);
    c && (r.push(n.slice(l, i), encodeURIComponent(c)), l = i + o + 1, c = ""), o && (i += o, o = 0);
  }
  return r.join("") + n.slice(l);
}
function $e(n, r, i, l) {
  const o = l ? l - 1 : Number.POSITIVE_INFINITY;
  let u = 0;
  return c;
  function c(m) {
    return ze(m) ? (n.enter(i), h(m)) : r(m);
  }
  function h(m) {
    return ze(m) && u++ < o ? (n.consume(m), h) : (n.exit(i), r(m));
  }
}
const px = {
  tokenize: mx
};
function mx(n) {
  const r = n.attempt(this.parser.constructs.contentInitial, l, o);
  let i;
  return r;
  function l(h) {
    if (h === null) {
      n.consume(h);
      return;
    }
    return n.enter("lineEnding"), n.consume(h), n.exit("lineEnding"), $e(n, r, "linePrefix");
  }
  function o(h) {
    return n.enter("paragraph"), u(h);
  }
  function u(h) {
    const m = n.enter("chunkText", {
      contentType: "text",
      previous: i
    });
    return i && (i.next = m), i = m, c(h);
  }
  function c(h) {
    if (h === null) {
      n.exit("chunkText"), n.exit("paragraph"), n.consume(h);
      return;
    }
    return pe(h) ? (n.consume(h), n.exit("chunkText"), u) : (n.consume(h), c);
  }
}
const gx = {
  tokenize: yx
}, qg = {
  tokenize: bx
};
function yx(n) {
  const r = this, i = [];
  let l = 0, o, u, c;
  return h;
  function h(D) {
    if (l < i.length) {
      const I = i[l];
      return r.containerState = I[1], n.attempt(I[0].continuation, m, p)(D);
    }
    return p(D);
  }
  function m(D) {
    if (l++, r.containerState._closeFlow) {
      r.containerState._closeFlow = void 0, o && Y();
      const I = r.events.length;
      let J = I, M;
      for (; J--; )
        if (r.events[J][0] === "exit" && r.events[J][1].type === "chunkFlow") {
          M = r.events[J][1].end;
          break;
        }
      j(l);
      let W = I;
      for (; W < r.events.length; )
        r.events[W][1].end = {
          ...M
        }, W++;
      return Cn(r.events, J + 1, 0, r.events.slice(I)), r.events.length = W, p(D);
    }
    return h(D);
  }
  function p(D) {
    if (l === i.length) {
      if (!o)
        return S(D);
      if (o.currentConstruct && o.currentConstruct.concrete)
        return k(D);
      r.interrupt = !!(o.currentConstruct && !o._gfmTableDynamicInterruptHack);
    }
    return r.containerState = {}, n.check(qg, g, y)(D);
  }
  function g(D) {
    return o && Y(), j(l), S(D);
  }
  function y(D) {
    return r.parser.lazy[r.now().line] = l !== i.length, c = r.now().offset, k(D);
  }
  function S(D) {
    return r.containerState = {}, n.attempt(qg, v, k)(D);
  }
  function v(D) {
    return l++, i.push([r.currentConstruct, r.containerState]), S(D);
  }
  function k(D) {
    if (D === null) {
      o && Y(), j(0), n.consume(D);
      return;
    }
    return o = o || r.parser.flow(r.now()), n.enter("chunkFlow", {
      _tokenizer: o,
      contentType: "flow",
      previous: u
    }), A(D);
  }
  function A(D) {
    if (D === null) {
      O(n.exit("chunkFlow"), !0), j(0), n.consume(D);
      return;
    }
    return pe(D) ? (n.consume(D), O(n.exit("chunkFlow")), l = 0, r.interrupt = void 0, h) : (n.consume(D), A);
  }
  function O(D, I) {
    const J = r.sliceStream(D);
    if (I && J.push(null), D.previous = u, u && (u.next = D), u = D, o.defineSkip(D.start), o.write(J), r.parser.lazy[D.start.line]) {
      let M = o.events.length;
      for (; M--; )
        if (
          // The token starts before the line ending…
          o.events[M][1].start.offset < c && // …and either is not ended yet…
          (!o.events[M][1].end || // …or ends after it.
          o.events[M][1].end.offset > c)
        )
          return;
      const W = r.events.length;
      let Z = W, oe, Se;
      for (; Z--; )
        if (r.events[Z][0] === "exit" && r.events[Z][1].type === "chunkFlow") {
          if (oe) {
            Se = r.events[Z][1].end;
            break;
          }
          oe = !0;
        }
      for (j(l), M = W; M < r.events.length; )
        r.events[M][1].end = {
          ...Se
        }, M++;
      Cn(r.events, Z + 1, 0, r.events.slice(W)), r.events.length = M;
    }
  }
  function j(D) {
    let I = i.length;
    for (; I-- > D; ) {
      const J = i[I];
      r.containerState = J[1], J[0].exit.call(r, n);
    }
    i.length = D;
  }
  function Y() {
    o.write([null]), u = void 0, o = void 0, r.containerState._closeFlow = void 0;
  }
}
function bx(n, r, i) {
  return $e(n, n.attempt(this.parser.constructs.document, r, i), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Hg(n) {
  if (n === null || Nt(n) || dx(n))
    return 1;
  if (hx(n))
    return 2;
}
function uh(n, r, i) {
  const l = [];
  let o = -1;
  for (; ++o < n.length; ) {
    const u = n[o].resolveAll;
    u && !l.includes(u) && (r = u(r, i), l.push(u));
  }
  return r;
}
const Df = {
  name: "attention",
  resolveAll: vx,
  tokenize: wx
};
function vx(n, r) {
  let i = -1, l, o, u, c, h, m, p, g;
  for (; ++i < n.length; )
    if (n[i][0] === "enter" && n[i][1].type === "attentionSequence" && n[i][1]._close) {
      for (l = i; l--; )
        if (n[l][0] === "exit" && n[l][1].type === "attentionSequence" && n[l][1]._open && // If the markers are the same:
        r.sliceSerialize(n[l][1]).charCodeAt(0) === r.sliceSerialize(n[i][1]).charCodeAt(0)) {
          if ((n[l][1]._close || n[i][1]._open) && (n[i][1].end.offset - n[i][1].start.offset) % 3 && !((n[l][1].end.offset - n[l][1].start.offset + n[i][1].end.offset - n[i][1].start.offset) % 3))
            continue;
          m = n[l][1].end.offset - n[l][1].start.offset > 1 && n[i][1].end.offset - n[i][1].start.offset > 1 ? 2 : 1;
          const y = {
            ...n[l][1].end
          }, S = {
            ...n[i][1].start
          };
          Pg(y, -m), Pg(S, m), c = {
            type: m > 1 ? "strongSequence" : "emphasisSequence",
            start: y,
            end: {
              ...n[l][1].end
            }
          }, h = {
            type: m > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...n[i][1].start
            },
            end: S
          }, u = {
            type: m > 1 ? "strongText" : "emphasisText",
            start: {
              ...n[l][1].end
            },
            end: {
              ...n[i][1].start
            }
          }, o = {
            type: m > 1 ? "strong" : "emphasis",
            start: {
              ...c.start
            },
            end: {
              ...h.end
            }
          }, n[l][1].end = {
            ...c.start
          }, n[i][1].start = {
            ...h.end
          }, p = [], n[l][1].end.offset - n[l][1].start.offset && (p = un(p, [["enter", n[l][1], r], ["exit", n[l][1], r]])), p = un(p, [["enter", o, r], ["enter", c, r], ["exit", c, r], ["enter", u, r]]), p = un(p, uh(r.parser.constructs.insideSpan.null, n.slice(l + 1, i), r)), p = un(p, [["exit", u, r], ["enter", h, r], ["exit", h, r], ["exit", o, r]]), n[i][1].end.offset - n[i][1].start.offset ? (g = 2, p = un(p, [["enter", n[i][1], r], ["exit", n[i][1], r]])) : g = 0, Cn(n, l - 1, i - l + 3, p), i = l + p.length - g - 2;
          break;
        }
    }
  for (i = -1; ++i < n.length; )
    n[i][1].type === "attentionSequence" && (n[i][1].type = "data");
  return n;
}
function wx(n, r) {
  const i = this.parser.constructs.attentionMarkers.null, l = this.previous, o = Hg(l);
  let u;
  return c;
  function c(m) {
    return u = m, n.enter("attentionSequence"), h(m);
  }
  function h(m) {
    if (m === u)
      return n.consume(m), h;
    const p = n.exit("attentionSequence"), g = Hg(m), y = !g || g === 2 && o || i.includes(m), S = !o || o === 2 && g || i.includes(l);
    return p._open = !!(u === 42 ? y : y && (o || !S)), p._close = !!(u === 42 ? S : S && (g || !y)), r(m);
  }
}
function Pg(n, r) {
  n.column += r, n.offset += r, n._bufferIndex += r;
}
const Sx = {
  name: "autolink",
  tokenize: xx
};
function xx(n, r, i) {
  let l = 0;
  return o;
  function o(v) {
    return n.enter("autolink"), n.enter("autolinkMarker"), n.consume(v), n.exit("autolinkMarker"), n.enter("autolinkProtocol"), u;
  }
  function u(v) {
    return On(v) ? (n.consume(v), c) : v === 64 ? i(v) : p(v);
  }
  function c(v) {
    return v === 43 || v === 45 || v === 46 || Zt(v) ? (l = 1, h(v)) : p(v);
  }
  function h(v) {
    return v === 58 ? (n.consume(v), l = 0, m) : (v === 43 || v === 45 || v === 46 || Zt(v)) && l++ < 32 ? (n.consume(v), h) : (l = 0, p(v));
  }
  function m(v) {
    return v === 62 ? (n.exit("autolinkProtocol"), n.enter("autolinkMarker"), n.consume(v), n.exit("autolinkMarker"), n.exit("autolink"), r) : v === null || v === 32 || v === 60 || zf(v) ? i(v) : (n.consume(v), m);
  }
  function p(v) {
    return v === 64 ? (n.consume(v), g) : ux(v) ? (n.consume(v), p) : i(v);
  }
  function g(v) {
    return Zt(v) ? y(v) : i(v);
  }
  function y(v) {
    return v === 46 ? (n.consume(v), l = 0, g) : v === 62 ? (n.exit("autolinkProtocol").type = "autolinkEmail", n.enter("autolinkMarker"), n.consume(v), n.exit("autolinkMarker"), n.exit("autolink"), r) : S(v);
  }
  function S(v) {
    if ((v === 45 || Zt(v)) && l++ < 63) {
      const k = v === 45 ? S : y;
      return n.consume(v), k;
    }
    return i(v);
  }
}
const So = {
  partial: !0,
  tokenize: _x
};
function _x(n, r, i) {
  return l;
  function l(u) {
    return ze(u) ? $e(n, o, "linePrefix")(u) : o(u);
  }
  function o(u) {
    return u === null || pe(u) ? r(u) : i(u);
  }
}
const Rb = {
  continuation: {
    tokenize: kx
  },
  exit: Tx,
  name: "blockQuote",
  tokenize: Ex
};
function Ex(n, r, i) {
  const l = this;
  return o;
  function o(c) {
    if (c === 62) {
      const h = l.containerState;
      return h.open || (n.enter("blockQuote", {
        _container: !0
      }), h.open = !0), n.enter("blockQuotePrefix"), n.enter("blockQuoteMarker"), n.consume(c), n.exit("blockQuoteMarker"), u;
    }
    return i(c);
  }
  function u(c) {
    return ze(c) ? (n.enter("blockQuotePrefixWhitespace"), n.consume(c), n.exit("blockQuotePrefixWhitespace"), n.exit("blockQuotePrefix"), r) : (n.exit("blockQuotePrefix"), r(c));
  }
}
function kx(n, r, i) {
  const l = this;
  return o;
  function o(c) {
    return ze(c) ? $e(n, u, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(c) : u(c);
  }
  function u(c) {
    return n.attempt(Rb, r, i)(c);
  }
}
function Tx(n) {
  n.exit("blockQuote");
}
const zb = {
  name: "characterEscape",
  tokenize: Ax
};
function Ax(n, r, i) {
  return l;
  function l(u) {
    return n.enter("characterEscape"), n.enter("escapeMarker"), n.consume(u), n.exit("escapeMarker"), o;
  }
  function o(u) {
    return fx(u) ? (n.enter("characterEscapeValue"), n.consume(u), n.exit("characterEscapeValue"), n.exit("characterEscape"), r) : i(u);
  }
}
const jb = {
  name: "characterReference",
  tokenize: Ox
};
function Ox(n, r, i) {
  const l = this;
  let o = 0, u, c;
  return h;
  function h(y) {
    return n.enter("characterReference"), n.enter("characterReferenceMarker"), n.consume(y), n.exit("characterReferenceMarker"), m;
  }
  function m(y) {
    return y === 35 ? (n.enter("characterReferenceMarkerNumeric"), n.consume(y), n.exit("characterReferenceMarkerNumeric"), p) : (n.enter("characterReferenceValue"), u = 31, c = Zt, g(y));
  }
  function p(y) {
    return y === 88 || y === 120 ? (n.enter("characterReferenceMarkerHexadecimal"), n.consume(y), n.exit("characterReferenceMarkerHexadecimal"), n.enter("characterReferenceValue"), u = 6, c = cx, g) : (n.enter("characterReferenceValue"), u = 7, c = jf, g(y));
  }
  function g(y) {
    if (y === 59 && o) {
      const S = n.exit("characterReferenceValue");
      return c === Zt && !oh(l.sliceSerialize(S)) ? i(y) : (n.enter("characterReferenceMarker"), n.consume(y), n.exit("characterReferenceMarker"), n.exit("characterReference"), r);
    }
    return c(y) && o++ < u ? (n.consume(y), g) : i(y);
  }
}
const Vg = {
  partial: !0,
  tokenize: Rx
}, Ig = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Cx
};
function Cx(n, r, i) {
  const l = this, o = {
    partial: !0,
    tokenize: J
  };
  let u = 0, c = 0, h;
  return m;
  function m(M) {
    return p(M);
  }
  function p(M) {
    const W = l.events[l.events.length - 1];
    return u = W && W[1].type === "linePrefix" ? W[2].sliceSerialize(W[1], !0).length : 0, h = M, n.enter("codeFenced"), n.enter("codeFencedFence"), n.enter("codeFencedFenceSequence"), g(M);
  }
  function g(M) {
    return M === h ? (c++, n.consume(M), g) : c < 3 ? i(M) : (n.exit("codeFencedFenceSequence"), ze(M) ? $e(n, y, "whitespace")(M) : y(M));
  }
  function y(M) {
    return M === null || pe(M) ? (n.exit("codeFencedFence"), l.interrupt ? r(M) : n.check(Vg, A, I)(M)) : (n.enter("codeFencedFenceInfo"), n.enter("chunkString", {
      contentType: "string"
    }), S(M));
  }
  function S(M) {
    return M === null || pe(M) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), y(M)) : ze(M) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), $e(n, v, "whitespace")(M)) : M === 96 && M === h ? i(M) : (n.consume(M), S);
  }
  function v(M) {
    return M === null || pe(M) ? y(M) : (n.enter("codeFencedFenceMeta"), n.enter("chunkString", {
      contentType: "string"
    }), k(M));
  }
  function k(M) {
    return M === null || pe(M) ? (n.exit("chunkString"), n.exit("codeFencedFenceMeta"), y(M)) : M === 96 && M === h ? i(M) : (n.consume(M), k);
  }
  function A(M) {
    return n.attempt(o, I, O)(M);
  }
  function O(M) {
    return n.enter("lineEnding"), n.consume(M), n.exit("lineEnding"), j;
  }
  function j(M) {
    return u > 0 && ze(M) ? $e(n, Y, "linePrefix", u + 1)(M) : Y(M);
  }
  function Y(M) {
    return M === null || pe(M) ? n.check(Vg, A, I)(M) : (n.enter("codeFlowValue"), D(M));
  }
  function D(M) {
    return M === null || pe(M) ? (n.exit("codeFlowValue"), Y(M)) : (n.consume(M), D);
  }
  function I(M) {
    return n.exit("codeFenced"), r(M);
  }
  function J(M, W, Z) {
    let oe = 0;
    return Se;
    function Se(ne) {
      return M.enter("lineEnding"), M.consume(ne), M.exit("lineEnding"), te;
    }
    function te(ne) {
      return M.enter("codeFencedFence"), ze(ne) ? $e(M, $, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(ne) : $(ne);
    }
    function $(ne) {
      return ne === h ? (M.enter("codeFencedFenceSequence"), re(ne)) : Z(ne);
    }
    function re(ne) {
      return ne === h ? (oe++, M.consume(ne), re) : oe >= c ? (M.exit("codeFencedFenceSequence"), ze(ne) ? $e(M, ee, "whitespace")(ne) : ee(ne)) : Z(ne);
    }
    function ee(ne) {
      return ne === null || pe(ne) ? (M.exit("codeFencedFence"), W(ne)) : Z(ne);
    }
  }
}
function Rx(n, r, i) {
  const l = this;
  return o;
  function o(c) {
    return c === null ? i(c) : (n.enter("lineEnding"), n.consume(c), n.exit("lineEnding"), u);
  }
  function u(c) {
    return l.parser.lazy[l.now().line] ? i(c) : r(c);
  }
}
const nf = {
  name: "codeIndented",
  tokenize: jx
}, zx = {
  partial: !0,
  tokenize: Dx
};
function jx(n, r, i) {
  const l = this;
  return o;
  function o(p) {
    return n.enter("codeIndented"), $e(n, u, "linePrefix", 5)(p);
  }
  function u(p) {
    const g = l.events[l.events.length - 1];
    return g && g[1].type === "linePrefix" && g[2].sliceSerialize(g[1], !0).length >= 4 ? c(p) : i(p);
  }
  function c(p) {
    return p === null ? m(p) : pe(p) ? n.attempt(zx, c, m)(p) : (n.enter("codeFlowValue"), h(p));
  }
  function h(p) {
    return p === null || pe(p) ? (n.exit("codeFlowValue"), c(p)) : (n.consume(p), h);
  }
  function m(p) {
    return n.exit("codeIndented"), r(p);
  }
}
function Dx(n, r, i) {
  const l = this;
  return o;
  function o(c) {
    return l.parser.lazy[l.now().line] ? i(c) : pe(c) ? (n.enter("lineEnding"), n.consume(c), n.exit("lineEnding"), o) : $e(n, u, "linePrefix", 5)(c);
  }
  function u(c) {
    const h = l.events[l.events.length - 1];
    return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], !0).length >= 4 ? r(c) : pe(c) ? o(c) : i(c);
  }
}
const Nx = {
  name: "codeText",
  previous: Ux,
  resolve: Mx,
  tokenize: Bx
};
function Mx(n) {
  let r = n.length - 4, i = 3, l, o;
  if ((n[i][1].type === "lineEnding" || n[i][1].type === "space") && (n[r][1].type === "lineEnding" || n[r][1].type === "space")) {
    for (l = i; ++l < r; )
      if (n[l][1].type === "codeTextData") {
        n[i][1].type = "codeTextPadding", n[r][1].type = "codeTextPadding", i += 2, r -= 2;
        break;
      }
  }
  for (l = i - 1, r++; ++l <= r; )
    o === void 0 ? l !== r && n[l][1].type !== "lineEnding" && (o = l) : (l === r || n[l][1].type === "lineEnding") && (n[o][1].type = "codeTextData", l !== o + 2 && (n[o][1].end = n[l - 1][1].end, n.splice(o + 2, l - o - 2), r -= l - o - 2, l = o + 2), o = void 0);
  return n;
}
function Ux(n) {
  return n !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Bx(n, r, i) {
  let l = 0, o, u;
  return c;
  function c(y) {
    return n.enter("codeText"), n.enter("codeTextSequence"), h(y);
  }
  function h(y) {
    return y === 96 ? (n.consume(y), l++, h) : (n.exit("codeTextSequence"), m(y));
  }
  function m(y) {
    return y === null ? i(y) : y === 32 ? (n.enter("space"), n.consume(y), n.exit("space"), m) : y === 96 ? (u = n.enter("codeTextSequence"), o = 0, g(y)) : pe(y) ? (n.enter("lineEnding"), n.consume(y), n.exit("lineEnding"), m) : (n.enter("codeTextData"), p(y));
  }
  function p(y) {
    return y === null || y === 32 || y === 96 || pe(y) ? (n.exit("codeTextData"), m(y)) : (n.consume(y), p);
  }
  function g(y) {
    return y === 96 ? (n.consume(y), o++, g) : o === l ? (n.exit("codeTextSequence"), n.exit("codeText"), r(y)) : (u.type = "codeTextData", p(y));
  }
}
class Lx {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(r) {
    this.left = r ? [...r] : [], this.right = [];
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
  get(r) {
    if (r < 0 || r >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + r + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return r < this.left.length ? this.left[r] : this.right[this.right.length - r + this.left.length - 1];
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
  slice(r, i) {
    const l = i ?? Number.POSITIVE_INFINITY;
    return l < this.left.length ? this.left.slice(r, l) : r > this.left.length ? this.right.slice(this.right.length - l + this.left.length, this.right.length - r + this.left.length).reverse() : this.left.slice(r).concat(this.right.slice(this.right.length - l + this.left.length).reverse());
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
  splice(r, i, l) {
    const o = i || 0;
    this.setCursor(Math.trunc(r));
    const u = this.right.splice(this.right.length - o, Number.POSITIVE_INFINITY);
    return l && bl(this.left, l), u.reverse();
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
  push(r) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(r);
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
  pushMany(r) {
    this.setCursor(Number.POSITIVE_INFINITY), bl(this.left, r);
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
  unshift(r) {
    this.setCursor(0), this.right.push(r);
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
  unshiftMany(r) {
    this.setCursor(0), bl(this.right, r.reverse());
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
  setCursor(r) {
    if (!(r === this.left.length || r > this.left.length && this.right.length === 0 || r < 0 && this.left.length === 0))
      if (r < this.left.length) {
        const i = this.left.splice(r, Number.POSITIVE_INFINITY);
        bl(this.right, i.reverse());
      } else {
        const i = this.right.splice(this.left.length + this.right.length - r, Number.POSITIVE_INFINITY);
        bl(this.left, i.reverse());
      }
  }
}
function bl(n, r) {
  let i = 0;
  if (r.length < 1e4)
    n.push(...r);
  else
    for (; i < r.length; )
      n.push(...r.slice(i, i + 1e4)), i += 1e4;
}
function Db(n) {
  const r = {};
  let i = -1, l, o, u, c, h, m, p;
  const g = new Lx(n);
  for (; ++i < g.length; ) {
    for (; i in r; )
      i = r[i];
    if (l = g.get(i), i && l[1].type === "chunkFlow" && g.get(i - 1)[1].type === "listItemPrefix" && (m = l[1]._tokenizer.events, u = 0, u < m.length && m[u][1].type === "lineEndingBlank" && (u += 2), u < m.length && m[u][1].type === "content"))
      for (; ++u < m.length && m[u][1].type !== "content"; )
        m[u][1].type === "chunkText" && (m[u][1]._isInFirstContentOfListItem = !0, u++);
    if (l[0] === "enter")
      l[1].contentType && (Object.assign(r, qx(g, i)), i = r[i], p = !0);
    else if (l[1]._container) {
      for (u = i, o = void 0; u--; )
        if (c = g.get(u), c[1].type === "lineEnding" || c[1].type === "lineEndingBlank")
          c[0] === "enter" && (o && (g.get(o)[1].type = "lineEndingBlank"), c[1].type = "lineEnding", o = u);
        else if (!(c[1].type === "linePrefix" || c[1].type === "listItemIndent")) break;
      o && (l[1].end = {
        ...g.get(o)[1].start
      }, h = g.slice(o, i), h.unshift(l), g.splice(o, i - o + 1, h));
    }
  }
  return Cn(n, 0, Number.POSITIVE_INFINITY, g.slice(0)), !p;
}
function qx(n, r) {
  const i = n.get(r)[1], l = n.get(r)[2];
  let o = r - 1;
  const u = [];
  let c = i._tokenizer;
  c || (c = l.parser[i.contentType](i.start), i._contentTypeTextTrailing && (c._contentTypeTextTrailing = !0));
  const h = c.events, m = [], p = {};
  let g, y, S = -1, v = i, k = 0, A = 0;
  const O = [A];
  for (; v; ) {
    for (; n.get(++o)[1] !== v; )
      ;
    u.push(o), v._tokenizer || (g = l.sliceStream(v), v.next || g.push(null), y && c.defineSkip(v.start), v._isInFirstContentOfListItem && (c._gfmTasklistFirstContentOfListItem = !0), c.write(g), v._isInFirstContentOfListItem && (c._gfmTasklistFirstContentOfListItem = void 0)), y = v, v = v.next;
  }
  for (v = i; ++S < h.length; )
    // Find a void token that includes a break.
    h[S][0] === "exit" && h[S - 1][0] === "enter" && h[S][1].type === h[S - 1][1].type && h[S][1].start.line !== h[S][1].end.line && (A = S + 1, O.push(A), v._tokenizer = void 0, v.previous = void 0, v = v.next);
  for (c.events = [], v ? (v._tokenizer = void 0, v.previous = void 0) : O.pop(), S = O.length; S--; ) {
    const j = h.slice(O[S], O[S + 1]), Y = u.pop();
    m.push([Y, Y + j.length - 1]), n.splice(Y, 2, j);
  }
  for (m.reverse(), S = -1; ++S < m.length; )
    p[k + m[S][0]] = k + m[S][1], k += m[S][1] - m[S][0] - 1;
  return p;
}
const Hx = {
  resolve: Vx,
  tokenize: Ix
}, Px = {
  partial: !0,
  tokenize: Gx
};
function Vx(n) {
  return Db(n), n;
}
function Ix(n, r) {
  let i;
  return l;
  function l(h) {
    return n.enter("content"), i = n.enter("chunkContent", {
      contentType: "content"
    }), o(h);
  }
  function o(h) {
    return h === null ? u(h) : pe(h) ? n.check(Px, c, u)(h) : (n.consume(h), o);
  }
  function u(h) {
    return n.exit("chunkContent"), n.exit("content"), r(h);
  }
  function c(h) {
    return n.consume(h), n.exit("chunkContent"), i.next = n.enter("chunkContent", {
      contentType: "content",
      previous: i
    }), i = i.next, o;
  }
}
function Gx(n, r, i) {
  const l = this;
  return o;
  function o(c) {
    return n.exit("chunkContent"), n.enter("lineEnding"), n.consume(c), n.exit("lineEnding"), $e(n, u, "linePrefix");
  }
  function u(c) {
    if (c === null || pe(c))
      return i(c);
    const h = l.events[l.events.length - 1];
    return !l.parser.constructs.disable.null.includes("codeIndented") && h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], !0).length >= 4 ? r(c) : n.interrupt(l.parser.constructs.flow, i, r)(c);
  }
}
function Nb(n, r, i, l, o, u, c, h, m) {
  const p = m || Number.POSITIVE_INFINITY;
  let g = 0;
  return y;
  function y(j) {
    return j === 60 ? (n.enter(l), n.enter(o), n.enter(u), n.consume(j), n.exit(u), S) : j === null || j === 32 || j === 41 || zf(j) ? i(j) : (n.enter(l), n.enter(c), n.enter(h), n.enter("chunkString", {
      contentType: "string"
    }), A(j));
  }
  function S(j) {
    return j === 62 ? (n.enter(u), n.consume(j), n.exit(u), n.exit(o), n.exit(l), r) : (n.enter(h), n.enter("chunkString", {
      contentType: "string"
    }), v(j));
  }
  function v(j) {
    return j === 62 ? (n.exit("chunkString"), n.exit(h), S(j)) : j === null || j === 60 || pe(j) ? i(j) : (n.consume(j), j === 92 ? k : v);
  }
  function k(j) {
    return j === 60 || j === 62 || j === 92 ? (n.consume(j), v) : v(j);
  }
  function A(j) {
    return !g && (j === null || j === 41 || Nt(j)) ? (n.exit("chunkString"), n.exit(h), n.exit(c), n.exit(l), r(j)) : g < p && j === 40 ? (n.consume(j), g++, A) : j === 41 ? (n.consume(j), g--, A) : j === null || j === 32 || j === 40 || zf(j) ? i(j) : (n.consume(j), j === 92 ? O : A);
  }
  function O(j) {
    return j === 40 || j === 41 || j === 92 ? (n.consume(j), A) : A(j);
  }
}
function Mb(n, r, i, l, o, u) {
  const c = this;
  let h = 0, m;
  return p;
  function p(v) {
    return n.enter(l), n.enter(o), n.consume(v), n.exit(o), n.enter(u), g;
  }
  function g(v) {
    return h > 999 || v === null || v === 91 || v === 93 && !m || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    v === 94 && !h && "_hiddenFootnoteSupport" in c.parser.constructs ? i(v) : v === 93 ? (n.exit(u), n.enter(o), n.consume(v), n.exit(o), n.exit(l), r) : pe(v) ? (n.enter("lineEnding"), n.consume(v), n.exit("lineEnding"), g) : (n.enter("chunkString", {
      contentType: "string"
    }), y(v));
  }
  function y(v) {
    return v === null || v === 91 || v === 93 || pe(v) || h++ > 999 ? (n.exit("chunkString"), g(v)) : (n.consume(v), m || (m = !ze(v)), v === 92 ? S : y);
  }
  function S(v) {
    return v === 91 || v === 92 || v === 93 ? (n.consume(v), h++, y) : y(v);
  }
}
function Ub(n, r, i, l, o, u) {
  let c;
  return h;
  function h(S) {
    return S === 34 || S === 39 || S === 40 ? (n.enter(l), n.enter(o), n.consume(S), n.exit(o), c = S === 40 ? 41 : S, m) : i(S);
  }
  function m(S) {
    return S === c ? (n.enter(o), n.consume(S), n.exit(o), n.exit(l), r) : (n.enter(u), p(S));
  }
  function p(S) {
    return S === c ? (n.exit(u), m(c)) : S === null ? i(S) : pe(S) ? (n.enter("lineEnding"), n.consume(S), n.exit("lineEnding"), $e(n, p, "linePrefix")) : (n.enter("chunkString", {
      contentType: "string"
    }), g(S));
  }
  function g(S) {
    return S === c || S === null || pe(S) ? (n.exit("chunkString"), p(S)) : (n.consume(S), S === 92 ? y : g);
  }
  function y(S) {
    return S === c || S === 92 ? (n.consume(S), g) : g(S);
  }
}
function kl(n, r) {
  let i;
  return l;
  function l(o) {
    return pe(o) ? (n.enter("lineEnding"), n.consume(o), n.exit("lineEnding"), i = !0, l) : ze(o) ? $e(n, l, i ? "linePrefix" : "lineSuffix")(o) : r(o);
  }
}
const $x = {
  name: "definition",
  tokenize: Fx
}, Yx = {
  partial: !0,
  tokenize: Qx
};
function Fx(n, r, i) {
  const l = this;
  let o;
  return u;
  function u(v) {
    return n.enter("definition"), c(v);
  }
  function c(v) {
    return Mb.call(
      l,
      n,
      h,
      // Note: we don’t need to reset the way `markdown-rs` does.
      i,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(v);
  }
  function h(v) {
    return o = aa(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1)), v === 58 ? (n.enter("definitionMarker"), n.consume(v), n.exit("definitionMarker"), m) : i(v);
  }
  function m(v) {
    return Nt(v) ? kl(n, p)(v) : p(v);
  }
  function p(v) {
    return Nb(
      n,
      g,
      // Note: we don’t need to reset the way `markdown-rs` does.
      i,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(v);
  }
  function g(v) {
    return n.attempt(Yx, y, y)(v);
  }
  function y(v) {
    return ze(v) ? $e(n, S, "whitespace")(v) : S(v);
  }
  function S(v) {
    return v === null || pe(v) ? (n.exit("definition"), l.parser.defined.push(o), r(v)) : i(v);
  }
}
function Qx(n, r, i) {
  return l;
  function l(h) {
    return Nt(h) ? kl(n, o)(h) : i(h);
  }
  function o(h) {
    return Ub(n, u, i, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(h);
  }
  function u(h) {
    return ze(h) ? $e(n, c, "whitespace")(h) : c(h);
  }
  function c(h) {
    return h === null || pe(h) ? r(h) : i(h);
  }
}
const Kx = {
  name: "hardBreakEscape",
  tokenize: Xx
};
function Xx(n, r, i) {
  return l;
  function l(u) {
    return n.enter("hardBreakEscape"), n.consume(u), o;
  }
  function o(u) {
    return pe(u) ? (n.exit("hardBreakEscape"), r(u)) : i(u);
  }
}
const Zx = {
  name: "headingAtx",
  resolve: Jx,
  tokenize: Wx
};
function Jx(n, r) {
  let i = n.length - 2, l = 3, o, u;
  return n[l][1].type === "whitespace" && (l += 2), i - 2 > l && n[i][1].type === "whitespace" && (i -= 2), n[i][1].type === "atxHeadingSequence" && (l === i - 1 || i - 4 > l && n[i - 2][1].type === "whitespace") && (i -= l + 1 === i ? 2 : 4), i > l && (o = {
    type: "atxHeadingText",
    start: n[l][1].start,
    end: n[i][1].end
  }, u = {
    type: "chunkText",
    start: n[l][1].start,
    end: n[i][1].end,
    contentType: "text"
  }, Cn(n, l, i - l + 1, [["enter", o, r], ["enter", u, r], ["exit", u, r], ["exit", o, r]])), n;
}
function Wx(n, r, i) {
  let l = 0;
  return o;
  function o(g) {
    return n.enter("atxHeading"), u(g);
  }
  function u(g) {
    return n.enter("atxHeadingSequence"), c(g);
  }
  function c(g) {
    return g === 35 && l++ < 6 ? (n.consume(g), c) : g === null || Nt(g) ? (n.exit("atxHeadingSequence"), h(g)) : i(g);
  }
  function h(g) {
    return g === 35 ? (n.enter("atxHeadingSequence"), m(g)) : g === null || pe(g) ? (n.exit("atxHeading"), r(g)) : ze(g) ? $e(n, h, "whitespace")(g) : (n.enter("atxHeadingText"), p(g));
  }
  function m(g) {
    return g === 35 ? (n.consume(g), m) : (n.exit("atxHeadingSequence"), h(g));
  }
  function p(g) {
    return g === null || g === 35 || Nt(g) ? (n.exit("atxHeadingText"), h(g)) : (n.consume(g), p);
  }
}
const e_ = [
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
], Gg = ["pre", "script", "style", "textarea"], t_ = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: i_,
  tokenize: a_
}, n_ = {
  partial: !0,
  tokenize: s_
}, r_ = {
  partial: !0,
  tokenize: l_
};
function i_(n) {
  let r = n.length;
  for (; r-- && !(n[r][0] === "enter" && n[r][1].type === "htmlFlow"); )
    ;
  return r > 1 && n[r - 2][1].type === "linePrefix" && (n[r][1].start = n[r - 2][1].start, n[r + 1][1].start = n[r - 2][1].start, n.splice(r - 2, 2)), n;
}
function a_(n, r, i) {
  const l = this;
  let o, u, c, h, m;
  return p;
  function p(x) {
    return g(x);
  }
  function g(x) {
    return n.enter("htmlFlow"), n.enter("htmlFlowData"), n.consume(x), y;
  }
  function y(x) {
    return x === 33 ? (n.consume(x), S) : x === 47 ? (n.consume(x), u = !0, A) : x === 63 ? (n.consume(x), o = 3, l.interrupt ? r : E) : On(x) ? (n.consume(x), c = String.fromCharCode(x), O) : i(x);
  }
  function S(x) {
    return x === 45 ? (n.consume(x), o = 2, v) : x === 91 ? (n.consume(x), o = 5, h = 0, k) : On(x) ? (n.consume(x), o = 4, l.interrupt ? r : E) : i(x);
  }
  function v(x) {
    return x === 45 ? (n.consume(x), l.interrupt ? r : E) : i(x);
  }
  function k(x) {
    const me = "CDATA[";
    return x === me.charCodeAt(h++) ? (n.consume(x), h === me.length ? l.interrupt ? r : $ : k) : i(x);
  }
  function A(x) {
    return On(x) ? (n.consume(x), c = String.fromCharCode(x), O) : i(x);
  }
  function O(x) {
    if (x === null || x === 47 || x === 62 || Nt(x)) {
      const me = x === 47, Fe = c.toLowerCase();
      return !me && !u && Gg.includes(Fe) ? (o = 1, l.interrupt ? r(x) : $(x)) : e_.includes(c.toLowerCase()) ? (o = 6, me ? (n.consume(x), j) : l.interrupt ? r(x) : $(x)) : (o = 7, l.interrupt && !l.parser.lazy[l.now().line] ? i(x) : u ? Y(x) : D(x));
    }
    return x === 45 || Zt(x) ? (n.consume(x), c += String.fromCharCode(x), O) : i(x);
  }
  function j(x) {
    return x === 62 ? (n.consume(x), l.interrupt ? r : $) : i(x);
  }
  function Y(x) {
    return ze(x) ? (n.consume(x), Y) : Se(x);
  }
  function D(x) {
    return x === 47 ? (n.consume(x), Se) : x === 58 || x === 95 || On(x) ? (n.consume(x), I) : ze(x) ? (n.consume(x), D) : Se(x);
  }
  function I(x) {
    return x === 45 || x === 46 || x === 58 || x === 95 || Zt(x) ? (n.consume(x), I) : J(x);
  }
  function J(x) {
    return x === 61 ? (n.consume(x), M) : ze(x) ? (n.consume(x), J) : D(x);
  }
  function M(x) {
    return x === null || x === 60 || x === 61 || x === 62 || x === 96 ? i(x) : x === 34 || x === 39 ? (n.consume(x), m = x, W) : ze(x) ? (n.consume(x), M) : Z(x);
  }
  function W(x) {
    return x === m ? (n.consume(x), m = null, oe) : x === null || pe(x) ? i(x) : (n.consume(x), W);
  }
  function Z(x) {
    return x === null || x === 34 || x === 39 || x === 47 || x === 60 || x === 61 || x === 62 || x === 96 || Nt(x) ? J(x) : (n.consume(x), Z);
  }
  function oe(x) {
    return x === 47 || x === 62 || ze(x) ? D(x) : i(x);
  }
  function Se(x) {
    return x === 62 ? (n.consume(x), te) : i(x);
  }
  function te(x) {
    return x === null || pe(x) ? $(x) : ze(x) ? (n.consume(x), te) : i(x);
  }
  function $(x) {
    return x === 45 && o === 2 ? (n.consume(x), B) : x === 60 && o === 1 ? (n.consume(x), F) : x === 62 && o === 4 ? (n.consume(x), je) : x === 63 && o === 3 ? (n.consume(x), E) : x === 93 && o === 5 ? (n.consume(x), xe) : pe(x) && (o === 6 || o === 7) ? (n.exit("htmlFlowData"), n.check(n_, Ee, re)(x)) : x === null || pe(x) ? (n.exit("htmlFlowData"), re(x)) : (n.consume(x), $);
  }
  function re(x) {
    return n.check(r_, ee, Ee)(x);
  }
  function ee(x) {
    return n.enter("lineEnding"), n.consume(x), n.exit("lineEnding"), ne;
  }
  function ne(x) {
    return x === null || pe(x) ? re(x) : (n.enter("htmlFlowData"), $(x));
  }
  function B(x) {
    return x === 45 ? (n.consume(x), E) : $(x);
  }
  function F(x) {
    return x === 47 ? (n.consume(x), c = "", G) : $(x);
  }
  function G(x) {
    if (x === 62) {
      const me = c.toLowerCase();
      return Gg.includes(me) ? (n.consume(x), je) : $(x);
    }
    return On(x) && c.length < 8 ? (n.consume(x), c += String.fromCharCode(x), G) : $(x);
  }
  function xe(x) {
    return x === 93 ? (n.consume(x), E) : $(x);
  }
  function E(x) {
    return x === 62 ? (n.consume(x), je) : x === 45 && o === 2 ? (n.consume(x), E) : $(x);
  }
  function je(x) {
    return x === null || pe(x) ? (n.exit("htmlFlowData"), Ee(x)) : (n.consume(x), je);
  }
  function Ee(x) {
    return n.exit("htmlFlow"), r(x);
  }
}
function l_(n, r, i) {
  const l = this;
  return o;
  function o(c) {
    return pe(c) ? (n.enter("lineEnding"), n.consume(c), n.exit("lineEnding"), u) : i(c);
  }
  function u(c) {
    return l.parser.lazy[l.now().line] ? i(c) : r(c);
  }
}
function s_(n, r, i) {
  return l;
  function l(o) {
    return n.enter("lineEnding"), n.consume(o), n.exit("lineEnding"), n.attempt(So, r, i);
  }
}
const o_ = {
  name: "htmlText",
  tokenize: u_
};
function u_(n, r, i) {
  const l = this;
  let o, u, c;
  return h;
  function h(E) {
    return n.enter("htmlText"), n.enter("htmlTextData"), n.consume(E), m;
  }
  function m(E) {
    return E === 33 ? (n.consume(E), p) : E === 47 ? (n.consume(E), J) : E === 63 ? (n.consume(E), D) : On(E) ? (n.consume(E), Z) : i(E);
  }
  function p(E) {
    return E === 45 ? (n.consume(E), g) : E === 91 ? (n.consume(E), u = 0, k) : On(E) ? (n.consume(E), Y) : i(E);
  }
  function g(E) {
    return E === 45 ? (n.consume(E), v) : i(E);
  }
  function y(E) {
    return E === null ? i(E) : E === 45 ? (n.consume(E), S) : pe(E) ? (c = y, F(E)) : (n.consume(E), y);
  }
  function S(E) {
    return E === 45 ? (n.consume(E), v) : y(E);
  }
  function v(E) {
    return E === 62 ? B(E) : E === 45 ? S(E) : y(E);
  }
  function k(E) {
    const je = "CDATA[";
    return E === je.charCodeAt(u++) ? (n.consume(E), u === je.length ? A : k) : i(E);
  }
  function A(E) {
    return E === null ? i(E) : E === 93 ? (n.consume(E), O) : pe(E) ? (c = A, F(E)) : (n.consume(E), A);
  }
  function O(E) {
    return E === 93 ? (n.consume(E), j) : A(E);
  }
  function j(E) {
    return E === 62 ? B(E) : E === 93 ? (n.consume(E), j) : A(E);
  }
  function Y(E) {
    return E === null || E === 62 ? B(E) : pe(E) ? (c = Y, F(E)) : (n.consume(E), Y);
  }
  function D(E) {
    return E === null ? i(E) : E === 63 ? (n.consume(E), I) : pe(E) ? (c = D, F(E)) : (n.consume(E), D);
  }
  function I(E) {
    return E === 62 ? B(E) : D(E);
  }
  function J(E) {
    return On(E) ? (n.consume(E), M) : i(E);
  }
  function M(E) {
    return E === 45 || Zt(E) ? (n.consume(E), M) : W(E);
  }
  function W(E) {
    return pe(E) ? (c = W, F(E)) : ze(E) ? (n.consume(E), W) : B(E);
  }
  function Z(E) {
    return E === 45 || Zt(E) ? (n.consume(E), Z) : E === 47 || E === 62 || Nt(E) ? oe(E) : i(E);
  }
  function oe(E) {
    return E === 47 ? (n.consume(E), B) : E === 58 || E === 95 || On(E) ? (n.consume(E), Se) : pe(E) ? (c = oe, F(E)) : ze(E) ? (n.consume(E), oe) : B(E);
  }
  function Se(E) {
    return E === 45 || E === 46 || E === 58 || E === 95 || Zt(E) ? (n.consume(E), Se) : te(E);
  }
  function te(E) {
    return E === 61 ? (n.consume(E), $) : pe(E) ? (c = te, F(E)) : ze(E) ? (n.consume(E), te) : oe(E);
  }
  function $(E) {
    return E === null || E === 60 || E === 61 || E === 62 || E === 96 ? i(E) : E === 34 || E === 39 ? (n.consume(E), o = E, re) : pe(E) ? (c = $, F(E)) : ze(E) ? (n.consume(E), $) : (n.consume(E), ee);
  }
  function re(E) {
    return E === o ? (n.consume(E), o = void 0, ne) : E === null ? i(E) : pe(E) ? (c = re, F(E)) : (n.consume(E), re);
  }
  function ee(E) {
    return E === null || E === 34 || E === 39 || E === 60 || E === 61 || E === 96 ? i(E) : E === 47 || E === 62 || Nt(E) ? oe(E) : (n.consume(E), ee);
  }
  function ne(E) {
    return E === 47 || E === 62 || Nt(E) ? oe(E) : i(E);
  }
  function B(E) {
    return E === 62 ? (n.consume(E), n.exit("htmlTextData"), n.exit("htmlText"), r) : i(E);
  }
  function F(E) {
    return n.exit("htmlTextData"), n.enter("lineEnding"), n.consume(E), n.exit("lineEnding"), G;
  }
  function G(E) {
    return ze(E) ? $e(n, xe, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(E) : xe(E);
  }
  function xe(E) {
    return n.enter("htmlTextData"), c(E);
  }
}
const ch = {
  name: "labelEnd",
  resolveAll: d_,
  resolveTo: p_,
  tokenize: m_
}, c_ = {
  tokenize: g_
}, f_ = {
  tokenize: y_
}, h_ = {
  tokenize: b_
};
function d_(n) {
  let r = -1;
  const i = [];
  for (; ++r < n.length; ) {
    const l = n[r][1];
    if (i.push(n[r]), l.type === "labelImage" || l.type === "labelLink" || l.type === "labelEnd") {
      const o = l.type === "labelImage" ? 4 : 2;
      l.type = "data", r += o;
    }
  }
  return n.length !== i.length && Cn(n, 0, n.length, i), n;
}
function p_(n, r) {
  let i = n.length, l = 0, o, u, c, h;
  for (; i--; )
    if (o = n[i][1], u) {
      if (o.type === "link" || o.type === "labelLink" && o._inactive)
        break;
      n[i][0] === "enter" && o.type === "labelLink" && (o._inactive = !0);
    } else if (c) {
      if (n[i][0] === "enter" && (o.type === "labelImage" || o.type === "labelLink") && !o._balanced && (u = i, o.type !== "labelLink")) {
        l = 2;
        break;
      }
    } else o.type === "labelEnd" && (c = i);
  const m = {
    type: n[u][1].type === "labelLink" ? "link" : "image",
    start: {
      ...n[u][1].start
    },
    end: {
      ...n[n.length - 1][1].end
    }
  }, p = {
    type: "label",
    start: {
      ...n[u][1].start
    },
    end: {
      ...n[c][1].end
    }
  }, g = {
    type: "labelText",
    start: {
      ...n[u + l + 2][1].end
    },
    end: {
      ...n[c - 2][1].start
    }
  };
  return h = [["enter", m, r], ["enter", p, r]], h = un(h, n.slice(u + 1, u + l + 3)), h = un(h, [["enter", g, r]]), h = un(h, uh(r.parser.constructs.insideSpan.null, n.slice(u + l + 4, c - 3), r)), h = un(h, [["exit", g, r], n[c - 2], n[c - 1], ["exit", p, r]]), h = un(h, n.slice(c + 1)), h = un(h, [["exit", m, r]]), Cn(n, u, n.length, h), n;
}
function m_(n, r, i) {
  const l = this;
  let o = l.events.length, u, c;
  for (; o--; )
    if ((l.events[o][1].type === "labelImage" || l.events[o][1].type === "labelLink") && !l.events[o][1]._balanced) {
      u = l.events[o][1];
      break;
    }
  return h;
  function h(S) {
    return u ? u._inactive ? y(S) : (c = l.parser.defined.includes(aa(l.sliceSerialize({
      start: u.end,
      end: l.now()
    }))), n.enter("labelEnd"), n.enter("labelMarker"), n.consume(S), n.exit("labelMarker"), n.exit("labelEnd"), m) : i(S);
  }
  function m(S) {
    return S === 40 ? n.attempt(c_, g, c ? g : y)(S) : S === 91 ? n.attempt(f_, g, c ? p : y)(S) : c ? g(S) : y(S);
  }
  function p(S) {
    return n.attempt(h_, g, y)(S);
  }
  function g(S) {
    return r(S);
  }
  function y(S) {
    return u._balanced = !0, i(S);
  }
}
function g_(n, r, i) {
  return l;
  function l(y) {
    return n.enter("resource"), n.enter("resourceMarker"), n.consume(y), n.exit("resourceMarker"), o;
  }
  function o(y) {
    return Nt(y) ? kl(n, u)(y) : u(y);
  }
  function u(y) {
    return y === 41 ? g(y) : Nb(n, c, h, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(y);
  }
  function c(y) {
    return Nt(y) ? kl(n, m)(y) : g(y);
  }
  function h(y) {
    return i(y);
  }
  function m(y) {
    return y === 34 || y === 39 || y === 40 ? Ub(n, p, i, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(y) : g(y);
  }
  function p(y) {
    return Nt(y) ? kl(n, g)(y) : g(y);
  }
  function g(y) {
    return y === 41 ? (n.enter("resourceMarker"), n.consume(y), n.exit("resourceMarker"), n.exit("resource"), r) : i(y);
  }
}
function y_(n, r, i) {
  const l = this;
  return o;
  function o(h) {
    return Mb.call(l, n, u, c, "reference", "referenceMarker", "referenceString")(h);
  }
  function u(h) {
    return l.parser.defined.includes(aa(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1))) ? r(h) : i(h);
  }
  function c(h) {
    return i(h);
  }
}
function b_(n, r, i) {
  return l;
  function l(u) {
    return n.enter("reference"), n.enter("referenceMarker"), n.consume(u), n.exit("referenceMarker"), o;
  }
  function o(u) {
    return u === 93 ? (n.enter("referenceMarker"), n.consume(u), n.exit("referenceMarker"), n.exit("reference"), r) : i(u);
  }
}
const v_ = {
  name: "labelStartImage",
  resolveAll: ch.resolveAll,
  tokenize: w_
};
function w_(n, r, i) {
  const l = this;
  return o;
  function o(h) {
    return n.enter("labelImage"), n.enter("labelImageMarker"), n.consume(h), n.exit("labelImageMarker"), u;
  }
  function u(h) {
    return h === 91 ? (n.enter("labelMarker"), n.consume(h), n.exit("labelMarker"), n.exit("labelImage"), c) : i(h);
  }
  function c(h) {
    return h === 94 && "_hiddenFootnoteSupport" in l.parser.constructs ? i(h) : r(h);
  }
}
const S_ = {
  name: "labelStartLink",
  resolveAll: ch.resolveAll,
  tokenize: x_
};
function x_(n, r, i) {
  const l = this;
  return o;
  function o(c) {
    return n.enter("labelLink"), n.enter("labelMarker"), n.consume(c), n.exit("labelMarker"), n.exit("labelLink"), u;
  }
  function u(c) {
    return c === 94 && "_hiddenFootnoteSupport" in l.parser.constructs ? i(c) : r(c);
  }
}
const rf = {
  name: "lineEnding",
  tokenize: __
};
function __(n, r) {
  return i;
  function i(l) {
    return n.enter("lineEnding"), n.consume(l), n.exit("lineEnding"), $e(n, r, "linePrefix");
  }
}
const oo = {
  name: "thematicBreak",
  tokenize: E_
};
function E_(n, r, i) {
  let l = 0, o;
  return u;
  function u(p) {
    return n.enter("thematicBreak"), c(p);
  }
  function c(p) {
    return o = p, h(p);
  }
  function h(p) {
    return p === o ? (n.enter("thematicBreakSequence"), m(p)) : l >= 3 && (p === null || pe(p)) ? (n.exit("thematicBreak"), r(p)) : i(p);
  }
  function m(p) {
    return p === o ? (n.consume(p), l++, m) : (n.exit("thematicBreakSequence"), ze(p) ? $e(n, h, "whitespace")(p) : h(p));
  }
}
const jt = {
  continuation: {
    tokenize: O_
  },
  exit: R_,
  name: "list",
  tokenize: A_
}, k_ = {
  partial: !0,
  tokenize: z_
}, T_ = {
  partial: !0,
  tokenize: C_
};
function A_(n, r, i) {
  const l = this, o = l.events[l.events.length - 1];
  let u = o && o[1].type === "linePrefix" ? o[2].sliceSerialize(o[1], !0).length : 0, c = 0;
  return h;
  function h(v) {
    const k = l.containerState.type || (v === 42 || v === 43 || v === 45 ? "listUnordered" : "listOrdered");
    if (k === "listUnordered" ? !l.containerState.marker || v === l.containerState.marker : jf(v)) {
      if (l.containerState.type || (l.containerState.type = k, n.enter(k, {
        _container: !0
      })), k === "listUnordered")
        return n.enter("listItemPrefix"), v === 42 || v === 45 ? n.check(oo, i, p)(v) : p(v);
      if (!l.interrupt || v === 49)
        return n.enter("listItemPrefix"), n.enter("listItemValue"), m(v);
    }
    return i(v);
  }
  function m(v) {
    return jf(v) && ++c < 10 ? (n.consume(v), m) : (!l.interrupt || c < 2) && (l.containerState.marker ? v === l.containerState.marker : v === 41 || v === 46) ? (n.exit("listItemValue"), p(v)) : i(v);
  }
  function p(v) {
    return n.enter("listItemMarker"), n.consume(v), n.exit("listItemMarker"), l.containerState.marker = l.containerState.marker || v, n.check(
      So,
      // Can’t be empty when interrupting.
      l.interrupt ? i : g,
      n.attempt(k_, S, y)
    );
  }
  function g(v) {
    return l.containerState.initialBlankLine = !0, u++, S(v);
  }
  function y(v) {
    return ze(v) ? (n.enter("listItemPrefixWhitespace"), n.consume(v), n.exit("listItemPrefixWhitespace"), S) : i(v);
  }
  function S(v) {
    return l.containerState.size = u + l.sliceSerialize(n.exit("listItemPrefix"), !0).length, r(v);
  }
}
function O_(n, r, i) {
  const l = this;
  return l.containerState._closeFlow = void 0, n.check(So, o, u);
  function o(h) {
    return l.containerState.furtherBlankLines = l.containerState.furtherBlankLines || l.containerState.initialBlankLine, $e(n, r, "listItemIndent", l.containerState.size + 1)(h);
  }
  function u(h) {
    return l.containerState.furtherBlankLines || !ze(h) ? (l.containerState.furtherBlankLines = void 0, l.containerState.initialBlankLine = void 0, c(h)) : (l.containerState.furtherBlankLines = void 0, l.containerState.initialBlankLine = void 0, n.attempt(T_, r, c)(h));
  }
  function c(h) {
    return l.containerState._closeFlow = !0, l.interrupt = void 0, $e(n, n.attempt(jt, r, i), "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(h);
  }
}
function C_(n, r, i) {
  const l = this;
  return $e(n, o, "listItemIndent", l.containerState.size + 1);
  function o(u) {
    const c = l.events[l.events.length - 1];
    return c && c[1].type === "listItemIndent" && c[2].sliceSerialize(c[1], !0).length === l.containerState.size ? r(u) : i(u);
  }
}
function R_(n) {
  n.exit(this.containerState.type);
}
function z_(n, r, i) {
  const l = this;
  return $e(n, o, "listItemPrefixWhitespace", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function o(u) {
    const c = l.events[l.events.length - 1];
    return !ze(u) && c && c[1].type === "listItemPrefixWhitespace" ? r(u) : i(u);
  }
}
const $g = {
  name: "setextUnderline",
  resolveTo: j_,
  tokenize: D_
};
function j_(n, r) {
  let i = n.length, l, o, u;
  for (; i--; )
    if (n[i][0] === "enter") {
      if (n[i][1].type === "content") {
        l = i;
        break;
      }
      n[i][1].type === "paragraph" && (o = i);
    } else
      n[i][1].type === "content" && n.splice(i, 1), !u && n[i][1].type === "definition" && (u = i);
  const c = {
    type: "setextHeading",
    start: {
      ...n[l][1].start
    },
    end: {
      ...n[n.length - 1][1].end
    }
  };
  return n[o][1].type = "setextHeadingText", u ? (n.splice(o, 0, ["enter", c, r]), n.splice(u + 1, 0, ["exit", n[l][1], r]), n[l][1].end = {
    ...n[u][1].end
  }) : n[l][1] = c, n.push(["exit", c, r]), n;
}
function D_(n, r, i) {
  const l = this;
  let o;
  return u;
  function u(p) {
    let g = l.events.length, y;
    for (; g--; )
      if (l.events[g][1].type !== "lineEnding" && l.events[g][1].type !== "linePrefix" && l.events[g][1].type !== "content") {
        y = l.events[g][1].type === "paragraph";
        break;
      }
    return !l.parser.lazy[l.now().line] && (l.interrupt || y) ? (n.enter("setextHeadingLine"), o = p, c(p)) : i(p);
  }
  function c(p) {
    return n.enter("setextHeadingLineSequence"), h(p);
  }
  function h(p) {
    return p === o ? (n.consume(p), h) : (n.exit("setextHeadingLineSequence"), ze(p) ? $e(n, m, "lineSuffix")(p) : m(p));
  }
  function m(p) {
    return p === null || pe(p) ? (n.exit("setextHeadingLine"), r(p)) : i(p);
  }
}
const N_ = {
  tokenize: M_
};
function M_(n) {
  const r = this, i = n.attempt(
    // Try to parse a blank line.
    So,
    l,
    // Try to parse initial flow (essentially, only code).
    n.attempt(this.parser.constructs.flowInitial, o, $e(n, n.attempt(this.parser.constructs.flow, o, n.attempt(Hx, o)), "linePrefix"))
  );
  return i;
  function l(u) {
    if (u === null) {
      n.consume(u);
      return;
    }
    return n.enter("lineEndingBlank"), n.consume(u), n.exit("lineEndingBlank"), r.currentConstruct = void 0, i;
  }
  function o(u) {
    if (u === null) {
      n.consume(u);
      return;
    }
    return n.enter("lineEnding"), n.consume(u), n.exit("lineEnding"), r.currentConstruct = void 0, i;
  }
}
const U_ = {
  resolveAll: Lb()
}, B_ = Bb("string"), L_ = Bb("text");
function Bb(n) {
  return {
    resolveAll: Lb(n === "text" ? q_ : void 0),
    tokenize: r
  };
  function r(i) {
    const l = this, o = this.parser.constructs[n], u = i.attempt(o, c, h);
    return c;
    function c(g) {
      return p(g) ? u(g) : h(g);
    }
    function h(g) {
      if (g === null) {
        i.consume(g);
        return;
      }
      return i.enter("data"), i.consume(g), m;
    }
    function m(g) {
      return p(g) ? (i.exit("data"), u(g)) : (i.consume(g), m);
    }
    function p(g) {
      if (g === null)
        return !0;
      const y = o[g];
      let S = -1;
      if (y)
        for (; ++S < y.length; ) {
          const v = y[S];
          if (!v.previous || v.previous.call(l, l.previous))
            return !0;
        }
      return !1;
    }
  }
}
function Lb(n) {
  return r;
  function r(i, l) {
    let o = -1, u;
    for (; ++o <= i.length; )
      u === void 0 ? i[o] && i[o][1].type === "data" && (u = o, o++) : (!i[o] || i[o][1].type !== "data") && (o !== u + 2 && (i[u][1].end = i[o - 1][1].end, i.splice(u + 2, o - u - 2), o = u + 2), u = void 0);
    return n ? n(i, l) : i;
  }
}
function q_(n, r) {
  let i = 0;
  for (; ++i <= n.length; )
    if ((i === n.length || n[i][1].type === "lineEnding") && n[i - 1][1].type === "data") {
      const l = n[i - 1][1], o = r.sliceStream(l);
      let u = o.length, c = -1, h = 0, m;
      for (; u--; ) {
        const p = o[u];
        if (typeof p == "string") {
          for (c = p.length; p.charCodeAt(c - 1) === 32; )
            h++, c--;
          if (c) break;
          c = -1;
        } else if (p === -2)
          m = !0, h++;
        else if (p !== -1) {
          u++;
          break;
        }
      }
      if (r._contentTypeTextTrailing && i === n.length && (h = 0), h) {
        const p = {
          type: i === n.length || m || h < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: u ? c : l.start._bufferIndex + c,
            _index: l.start._index + u,
            line: l.end.line,
            column: l.end.column - h,
            offset: l.end.offset - h
          },
          end: {
            ...l.end
          }
        };
        l.end = {
          ...p.start
        }, l.start.offset === l.end.offset ? Object.assign(l, p) : (n.splice(i, 0, ["enter", p, r], ["exit", p, r]), i += 2);
      }
      i++;
    }
  return n;
}
const H_ = {
  42: jt,
  43: jt,
  45: jt,
  48: jt,
  49: jt,
  50: jt,
  51: jt,
  52: jt,
  53: jt,
  54: jt,
  55: jt,
  56: jt,
  57: jt,
  62: Rb
}, P_ = {
  91: $x
}, V_ = {
  [-2]: nf,
  [-1]: nf,
  32: nf
}, I_ = {
  35: Zx,
  42: oo,
  45: [$g, oo],
  60: t_,
  61: $g,
  95: oo,
  96: Ig,
  126: Ig
}, G_ = {
  38: jb,
  92: zb
}, $_ = {
  [-5]: rf,
  [-4]: rf,
  [-3]: rf,
  33: v_,
  38: jb,
  42: Df,
  60: [Sx, o_],
  91: S_,
  92: [Kx, zb],
  93: ch,
  95: Df,
  96: Nx
}, Y_ = {
  null: [Df, U_]
}, F_ = {
  null: [42, 95]
}, Q_ = {
  null: []
}, K_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: F_,
  contentInitial: P_,
  disable: Q_,
  document: H_,
  flow: I_,
  flowInitial: V_,
  insideSpan: Y_,
  string: G_,
  text: $_
}, Symbol.toStringTag, { value: "Module" }));
function X_(n, r, i) {
  let l = {
    _bufferIndex: -1,
    _index: 0,
    line: i && i.line || 1,
    column: i && i.column || 1,
    offset: i && i.offset || 0
  };
  const o = {}, u = [];
  let c = [], h = [];
  const m = {
    attempt: W(J),
    check: W(M),
    consume: Y,
    enter: D,
    exit: I,
    interrupt: W(M, {
      interrupt: !0
    })
  }, p = {
    code: null,
    containerState: {},
    defineSkip: A,
    events: [],
    now: k,
    parser: n,
    previous: null,
    sliceSerialize: S,
    sliceStream: v,
    write: y
  };
  let g = r.tokenize.call(p, m);
  return r.resolveAll && u.push(r), p;
  function y(te) {
    return c = un(c, te), O(), c[c.length - 1] !== null ? [] : (Z(r, 0), p.events = uh(u, p.events, p), p.events);
  }
  function S(te, $) {
    return J_(v(te), $);
  }
  function v(te) {
    return Z_(c, te);
  }
  function k() {
    const {
      _bufferIndex: te,
      _index: $,
      line: re,
      column: ee,
      offset: ne
    } = l;
    return {
      _bufferIndex: te,
      _index: $,
      line: re,
      column: ee,
      offset: ne
    };
  }
  function A(te) {
    o[te.line] = te.column, Se();
  }
  function O() {
    let te;
    for (; l._index < c.length; ) {
      const $ = c[l._index];
      if (typeof $ == "string")
        for (te = l._index, l._bufferIndex < 0 && (l._bufferIndex = 0); l._index === te && l._bufferIndex < $.length; )
          j($.charCodeAt(l._bufferIndex));
      else
        j($);
    }
  }
  function j(te) {
    g = g(te);
  }
  function Y(te) {
    pe(te) ? (l.line++, l.column = 1, l.offset += te === -3 ? 2 : 1, Se()) : te !== -1 && (l.column++, l.offset++), l._bufferIndex < 0 ? l._index++ : (l._bufferIndex++, l._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    c[l._index].length && (l._bufferIndex = -1, l._index++)), p.previous = te;
  }
  function D(te, $) {
    const re = $ || {};
    return re.type = te, re.start = k(), p.events.push(["enter", re, p]), h.push(re), re;
  }
  function I(te) {
    const $ = h.pop();
    return $.end = k(), p.events.push(["exit", $, p]), $;
  }
  function J(te, $) {
    Z(te, $.from);
  }
  function M(te, $) {
    $.restore();
  }
  function W(te, $) {
    return re;
    function re(ee, ne, B) {
      let F, G, xe, E;
      return Array.isArray(ee) ? (
        /* c8 ignore next 1 */
        Ee(ee)
      ) : "tokenize" in ee ? (
        // Looks like a construct.
        Ee([
          /** @type {Construct} */
          ee
        ])
      ) : je(ee);
      function je(De) {
        return Ne;
        function Ne(yt) {
          const lt = yt !== null && De[yt], _t = yt !== null && De.null, Lt = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(lt) ? lt : lt ? [lt] : [],
            ...Array.isArray(_t) ? _t : _t ? [_t] : []
          ];
          return Ee(Lt)(yt);
        }
      }
      function Ee(De) {
        return F = De, G = 0, De.length === 0 ? B : x(De[G]);
      }
      function x(De) {
        return Ne;
        function Ne(yt) {
          return E = oe(), xe = De, De.partial || (p.currentConstruct = De), De.name && p.parser.constructs.disable.null.includes(De.name) ? Fe() : De.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            $ ? Object.assign(Object.create(p), $) : p,
            m,
            me,
            Fe
          )(yt);
        }
      }
      function me(De) {
        return te(xe, E), ne;
      }
      function Fe(De) {
        return E.restore(), ++G < F.length ? x(F[G]) : B;
      }
    }
  }
  function Z(te, $) {
    te.resolveAll && !u.includes(te) && u.push(te), te.resolve && Cn(p.events, $, p.events.length - $, te.resolve(p.events.slice($), p)), te.resolveTo && (p.events = te.resolveTo(p.events, p));
  }
  function oe() {
    const te = k(), $ = p.previous, re = p.currentConstruct, ee = p.events.length, ne = Array.from(h);
    return {
      from: ee,
      restore: B
    };
    function B() {
      l = te, p.previous = $, p.currentConstruct = re, p.events.length = ee, h = ne, Se();
    }
  }
  function Se() {
    l.line in o && l.column < 2 && (l.column = o[l.line], l.offset += o[l.line] - 1);
  }
}
function Z_(n, r) {
  const i = r.start._index, l = r.start._bufferIndex, o = r.end._index, u = r.end._bufferIndex;
  let c;
  if (i === o)
    c = [n[i].slice(l, u)];
  else {
    if (c = n.slice(i, o), l > -1) {
      const h = c[0];
      typeof h == "string" ? c[0] = h.slice(l) : c.shift();
    }
    u > 0 && c.push(n[o].slice(0, u));
  }
  return c;
}
function J_(n, r) {
  let i = -1;
  const l = [];
  let o;
  for (; ++i < n.length; ) {
    const u = n[i];
    let c;
    if (typeof u == "string")
      c = u;
    else switch (u) {
      case -5: {
        c = "\r";
        break;
      }
      case -4: {
        c = `
`;
        break;
      }
      case -3: {
        c = `\r
`;
        break;
      }
      case -2: {
        c = r ? " " : "	";
        break;
      }
      case -1: {
        if (!r && o) continue;
        c = " ";
        break;
      }
      default:
        c = String.fromCharCode(u);
    }
    o = u === -2, l.push(c);
  }
  return l.join("");
}
function W_(n) {
  const l = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      lx([K_, ...(n || {}).extensions || []])
    ),
    content: o(px),
    defined: [],
    document: o(gx),
    flow: o(N_),
    lazy: {},
    string: o(B_),
    text: o(L_)
  };
  return l;
  function o(u) {
    return c;
    function c(h) {
      return X_(l, u, h);
    }
  }
}
function eE(n) {
  for (; !Db(n); )
    ;
  return n;
}
const Yg = /[\0\t\n\r]/g;
function tE() {
  let n = 1, r = "", i = !0, l;
  return o;
  function o(u, c, h) {
    const m = [];
    let p, g, y, S, v;
    for (u = r + (typeof u == "string" ? u.toString() : new TextDecoder(c || void 0).decode(u)), y = 0, r = "", i && (u.charCodeAt(0) === 65279 && y++, i = void 0); y < u.length; ) {
      if (Yg.lastIndex = y, p = Yg.exec(u), S = p && p.index !== void 0 ? p.index : u.length, v = u.charCodeAt(S), !p) {
        r = u.slice(y);
        break;
      }
      if (v === 10 && y === S && l)
        m.push(-3), l = void 0;
      else
        switch (l && (m.push(-5), l = void 0), y < S && (m.push(u.slice(y, S)), n += S - y), v) {
          case 0: {
            m.push(65533), n++;
            break;
          }
          case 9: {
            for (g = Math.ceil(n / 4) * 4, m.push(-2); n++ < g; ) m.push(-1);
            break;
          }
          case 10: {
            m.push(-4), n = 1;
            break;
          }
          default:
            l = !0, n = 1;
        }
      y = S + 1;
    }
    return h && (l && m.push(-5), r && m.push(r), m.push(null)), m;
  }
}
const nE = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function rE(n) {
  return n.replace(nE, iE);
}
function iE(n, r, i) {
  if (r)
    return r;
  if (i.charCodeAt(0) === 35) {
    const o = i.charCodeAt(1), u = o === 120 || o === 88;
    return Cb(i.slice(u ? 2 : 1), u ? 16 : 10);
  }
  return oh(i) || n;
}
const qb = {}.hasOwnProperty;
function aE(n, r, i) {
  return typeof r != "string" && (i = r, r = void 0), lE(i)(eE(W_(i).document().write(tE()(n, r, !0))));
}
function lE(n) {
  const r = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: u(ga),
      autolinkProtocol: oe,
      autolinkEmail: oe,
      atxHeading: u(Ll),
      blockQuote: u(_t),
      characterEscape: oe,
      characterReference: oe,
      codeFenced: u(Lt),
      codeFencedFenceInfo: c,
      codeFencedFenceMeta: c,
      codeIndented: u(Lt, c),
      codeText: u(yn, c),
      codeTextData: oe,
      data: oe,
      codeFlowValue: oe,
      definition: u(pa),
      definitionDestinationString: c,
      definitionLabelString: c,
      definitionTitleString: c,
      emphasis: u(ma),
      hardBreakEscape: u(ql),
      hardBreakTrailing: u(ql),
      htmlFlow: u(qt, c),
      htmlFlowData: oe,
      htmlText: u(qt, c),
      htmlTextData: oe,
      image: u(jo),
      label: c,
      link: u(ga),
      listItem: u(ri),
      listItemValue: S,
      listOrdered: u(ya, y),
      listUnordered: u(ya),
      paragraph: u(Do),
      reference: x,
      referenceString: c,
      resourceDestinationString: c,
      resourceTitleString: c,
      setextHeading: u(Ll),
      strong: u(Hl),
      thematicBreak: u(Mo)
    },
    exit: {
      atxHeading: m(),
      atxHeadingSequence: J,
      autolink: m(),
      autolinkEmail: lt,
      autolinkProtocol: yt,
      blockQuote: m(),
      characterEscapeValue: Se,
      characterReferenceMarkerHexadecimal: Fe,
      characterReferenceMarkerNumeric: Fe,
      characterReferenceValue: De,
      characterReference: Ne,
      codeFenced: m(O),
      codeFencedFence: A,
      codeFencedFenceInfo: v,
      codeFencedFenceMeta: k,
      codeFlowValue: Se,
      codeIndented: m(j),
      codeText: m(ne),
      codeTextData: Se,
      data: Se,
      definition: m(),
      definitionDestinationString: I,
      definitionLabelString: Y,
      definitionTitleString: D,
      emphasis: m(),
      hardBreakEscape: m($),
      hardBreakTrailing: m($),
      htmlFlow: m(re),
      htmlFlowData: Se,
      htmlText: m(ee),
      htmlTextData: Se,
      image: m(F),
      label: xe,
      labelText: G,
      lineEnding: te,
      link: m(B),
      listItem: m(),
      listOrdered: m(),
      listUnordered: m(),
      paragraph: m(),
      referenceString: me,
      resourceDestinationString: E,
      resourceTitleString: je,
      resource: Ee,
      setextHeading: m(Z),
      setextHeadingLineSequence: W,
      setextHeadingText: M,
      strong: m(),
      thematicBreak: m()
    }
  };
  Hb(r, (n || {}).mdastExtensions || []);
  const i = {};
  return l;
  function l(q) {
    let Q = {
      type: "root",
      children: []
    };
    const ue = {
      stack: [Q],
      tokenStack: [],
      config: r,
      enter: h,
      exit: p,
      buffer: c,
      resume: g,
      data: i
    }, he = [];
    let Me = -1;
    for (; ++Me < q.length; )
      if (q[Me][1].type === "listOrdered" || q[Me][1].type === "listUnordered")
        if (q[Me][0] === "enter")
          he.push(Me);
        else {
          const Ht = he.pop();
          Me = o(q, Ht, Me);
        }
    for (Me = -1; ++Me < q.length; ) {
      const Ht = r[q[Me][0]];
      qb.call(Ht, q[Me][1].type) && Ht[q[Me][1].type].call(Object.assign({
        sliceSerialize: q[Me][2].sliceSerialize
      }, ue), q[Me][1]);
    }
    if (ue.tokenStack.length > 0) {
      const Ht = ue.tokenStack[ue.tokenStack.length - 1];
      (Ht[1] || Fg).call(ue, void 0, Ht[0]);
    }
    for (Q.position = {
      start: wr(q.length > 0 ? q[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: wr(q.length > 0 ? q[q.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, Me = -1; ++Me < r.transforms.length; )
      Q = r.transforms[Me](Q) || Q;
    return Q;
  }
  function o(q, Q, ue) {
    let he = Q - 1, Me = -1, Ht = !1, Rn, kt, bn, Pt;
    for (; ++he <= ue; ) {
      const st = q[he];
      switch (st[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          st[0] === "enter" ? Me++ : Me--, Pt = void 0;
          break;
        }
        case "lineEndingBlank": {
          st[0] === "enter" && (Rn && !Pt && !Me && !bn && (bn = he), Pt = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Pt = void 0;
      }
      if (!Me && st[0] === "enter" && st[1].type === "listItemPrefix" || Me === -1 && st[0] === "exit" && (st[1].type === "listUnordered" || st[1].type === "listOrdered")) {
        if (Rn) {
          let Jt = he;
          for (kt = void 0; Jt--; ) {
            const cn = q[Jt];
            if (cn[1].type === "lineEnding" || cn[1].type === "lineEndingBlank") {
              if (cn[0] === "exit") continue;
              kt && (q[kt][1].type = "lineEndingBlank", Ht = !0), cn[1].type = "lineEnding", kt = Jt;
            } else if (!(cn[1].type === "linePrefix" || cn[1].type === "blockQuotePrefix" || cn[1].type === "blockQuotePrefixWhitespace" || cn[1].type === "blockQuoteMarker" || cn[1].type === "listItemIndent")) break;
          }
          bn && (!kt || bn < kt) && (Rn._spread = !0), Rn.end = Object.assign({}, kt ? q[kt][1].start : st[1].end), q.splice(kt || he, 0, ["exit", Rn, st[2]]), he++, ue++;
        }
        if (st[1].type === "listItemPrefix") {
          const Jt = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, st[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Rn = Jt, q.splice(he, 0, ["enter", Jt, st[2]]), he++, ue++, bn = void 0, Pt = !0;
        }
      }
    }
    return q[Q][1]._spread = Ht, ue;
  }
  function u(q, Q) {
    return ue;
    function ue(he) {
      h.call(this, q(he), he), Q && Q.call(this, he);
    }
  }
  function c() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function h(q, Q, ue) {
    this.stack[this.stack.length - 1].children.push(q), this.stack.push(q), this.tokenStack.push([Q, ue || void 0]), q.position = {
      start: wr(Q.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function m(q) {
    return Q;
    function Q(ue) {
      q && q.call(this, ue), p.call(this, ue);
    }
  }
  function p(q, Q) {
    const ue = this.stack.pop(), he = this.tokenStack.pop();
    if (he)
      he[0].type !== q.type && (Q ? Q.call(this, q, he[0]) : (he[1] || Fg).call(this, q, he[0]));
    else throw new Error("Cannot close `" + q.type + "` (" + El({
      start: q.start,
      end: q.end
    }) + "): it’s not open");
    ue.position.end = wr(q.end);
  }
  function g() {
    return ix(this.stack.pop());
  }
  function y() {
    this.data.expectingFirstListItemValue = !0;
  }
  function S(q) {
    if (this.data.expectingFirstListItemValue) {
      const Q = this.stack[this.stack.length - 2];
      Q.start = Number.parseInt(this.sliceSerialize(q), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function v() {
    const q = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.lang = q;
  }
  function k() {
    const q = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.meta = q;
  }
  function A() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function O() {
    const q = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.value = q.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function j() {
    const q = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.value = q.replace(/(\r?\n|\r)$/g, "");
  }
  function Y(q) {
    const Q = this.resume(), ue = this.stack[this.stack.length - 1];
    ue.label = Q, ue.identifier = aa(this.sliceSerialize(q)).toLowerCase();
  }
  function D() {
    const q = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.title = q;
  }
  function I() {
    const q = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.url = q;
  }
  function J(q) {
    const Q = this.stack[this.stack.length - 1];
    if (!Q.depth) {
      const ue = this.sliceSerialize(q).length;
      Q.depth = ue;
    }
  }
  function M() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function W(q) {
    const Q = this.stack[this.stack.length - 1];
    Q.depth = this.sliceSerialize(q).codePointAt(0) === 61 ? 1 : 2;
  }
  function Z() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function oe(q) {
    const ue = this.stack[this.stack.length - 1].children;
    let he = ue[ue.length - 1];
    (!he || he.type !== "text") && (he = No(), he.position = {
      start: wr(q.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, ue.push(he)), this.stack.push(he);
  }
  function Se(q) {
    const Q = this.stack.pop();
    Q.value += this.sliceSerialize(q), Q.position.end = wr(q.end);
  }
  function te(q) {
    const Q = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const ue = Q.children[Q.children.length - 1];
      ue.position.end = wr(q.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && r.canContainEols.includes(Q.type) && (oe.call(this, q), Se.call(this, q));
  }
  function $() {
    this.data.atHardBreak = !0;
  }
  function re() {
    const q = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.value = q;
  }
  function ee() {
    const q = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.value = q;
  }
  function ne() {
    const q = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.value = q;
  }
  function B() {
    const q = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const Q = this.data.referenceType || "shortcut";
      q.type += "Reference", q.referenceType = Q, delete q.url, delete q.title;
    } else
      delete q.identifier, delete q.label;
    this.data.referenceType = void 0;
  }
  function F() {
    const q = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const Q = this.data.referenceType || "shortcut";
      q.type += "Reference", q.referenceType = Q, delete q.url, delete q.title;
    } else
      delete q.identifier, delete q.label;
    this.data.referenceType = void 0;
  }
  function G(q) {
    const Q = this.sliceSerialize(q), ue = this.stack[this.stack.length - 2];
    ue.label = rE(Q), ue.identifier = aa(Q).toLowerCase();
  }
  function xe() {
    const q = this.stack[this.stack.length - 1], Q = this.resume(), ue = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, ue.type === "link") {
      const he = q.children;
      ue.children = he;
    } else
      ue.alt = Q;
  }
  function E() {
    const q = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.url = q;
  }
  function je() {
    const q = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.title = q;
  }
  function Ee() {
    this.data.inReference = void 0;
  }
  function x() {
    this.data.referenceType = "collapsed";
  }
  function me(q) {
    const Q = this.resume(), ue = this.stack[this.stack.length - 1];
    ue.label = Q, ue.identifier = aa(this.sliceSerialize(q)).toLowerCase(), this.data.referenceType = "full";
  }
  function Fe(q) {
    this.data.characterReferenceType = q.type;
  }
  function De(q) {
    const Q = this.sliceSerialize(q), ue = this.data.characterReferenceType;
    let he;
    ue ? (he = Cb(Q, ue === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : he = oh(Q);
    const Me = this.stack[this.stack.length - 1];
    Me.value += he;
  }
  function Ne(q) {
    const Q = this.stack.pop();
    Q.position.end = wr(q.end);
  }
  function yt(q) {
    Se.call(this, q);
    const Q = this.stack[this.stack.length - 1];
    Q.url = this.sliceSerialize(q);
  }
  function lt(q) {
    Se.call(this, q);
    const Q = this.stack[this.stack.length - 1];
    Q.url = "mailto:" + this.sliceSerialize(q);
  }
  function _t() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Lt() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function yn() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function pa() {
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
  function Ll() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function ql() {
    return {
      type: "break"
    };
  }
  function qt() {
    return {
      type: "html",
      value: ""
    };
  }
  function jo() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function ga() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function ya(q) {
    return {
      type: "list",
      ordered: q.type === "listOrdered",
      start: null,
      spread: q._spread,
      children: []
    };
  }
  function ri(q) {
    return {
      type: "listItem",
      spread: q._spread,
      checked: null,
      children: []
    };
  }
  function Do() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Hl() {
    return {
      type: "strong",
      children: []
    };
  }
  function No() {
    return {
      type: "text",
      value: ""
    };
  }
  function Mo() {
    return {
      type: "thematicBreak"
    };
  }
}
function wr(n) {
  return {
    line: n.line,
    column: n.column,
    offset: n.offset
  };
}
function Hb(n, r) {
  let i = -1;
  for (; ++i < r.length; ) {
    const l = r[i];
    Array.isArray(l) ? Hb(n, l) : sE(n, l);
  }
}
function sE(n, r) {
  let i;
  for (i in r)
    if (qb.call(r, i))
      switch (i) {
        case "canContainEols": {
          const l = r[i];
          l && n[i].push(...l);
          break;
        }
        case "transforms": {
          const l = r[i];
          l && n[i].push(...l);
          break;
        }
        case "enter":
        case "exit": {
          const l = r[i];
          l && Object.assign(n[i], l);
          break;
        }
      }
}
function Fg(n, r) {
  throw n ? new Error("Cannot close `" + n.type + "` (" + El({
    start: n.start,
    end: n.end
  }) + "): a different token (`" + r.type + "`, " + El({
    start: r.start,
    end: r.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + r.type + "`, " + El({
    start: r.start,
    end: r.end
  }) + ") is still open");
}
function oE(n) {
  const r = this;
  r.parser = i;
  function i(l) {
    return aE(l, {
      ...r.data("settings"),
      ...n,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: r.data("micromarkExtensions") || [],
      mdastExtensions: r.data("fromMarkdownExtensions") || []
    });
  }
}
function uE(n, r) {
  const i = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: n.wrap(n.all(r), !0)
  };
  return n.patch(r, i), n.applyData(r, i);
}
function cE(n, r) {
  const i = { type: "element", tagName: "br", properties: {}, children: [] };
  return n.patch(r, i), [n.applyData(r, i), { type: "text", value: `
` }];
}
function fE(n, r) {
  const i = r.value ? r.value + `
` : "", l = {};
  r.lang && (l.className = ["language-" + r.lang]);
  let o = {
    type: "element",
    tagName: "code",
    properties: l,
    children: [{ type: "text", value: i }]
  };
  return r.meta && (o.data = { meta: r.meta }), n.patch(r, o), o = n.applyData(r, o), o = { type: "element", tagName: "pre", properties: {}, children: [o] }, n.patch(r, o), o;
}
function hE(n, r) {
  const i = {
    type: "element",
    tagName: "del",
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, i), n.applyData(r, i);
}
function dE(n, r) {
  const i = {
    type: "element",
    tagName: "em",
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, i), n.applyData(r, i);
}
function pE(n, r) {
  const i = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", l = String(r.identifier).toUpperCase(), o = ca(l.toLowerCase()), u = n.footnoteOrder.indexOf(l);
  let c, h = n.footnoteCounts.get(l);
  h === void 0 ? (h = 0, n.footnoteOrder.push(l), c = n.footnoteOrder.length) : c = u + 1, h += 1, n.footnoteCounts.set(l, h);
  const m = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + i + "fn-" + o,
      id: i + "fnref-" + o + (h > 1 ? "-" + h : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(c) }]
  };
  n.patch(r, m);
  const p = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [m]
  };
  return n.patch(r, p), n.applyData(r, p);
}
function mE(n, r) {
  const i = {
    type: "element",
    tagName: "h" + r.depth,
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, i), n.applyData(r, i);
}
function gE(n, r) {
  if (n.options.allowDangerousHtml) {
    const i = { type: "raw", value: r.value };
    return n.patch(r, i), n.applyData(r, i);
  }
}
function Pb(n, r) {
  const i = r.referenceType;
  let l = "]";
  if (i === "collapsed" ? l += "[]" : i === "full" && (l += "[" + (r.label || r.identifier) + "]"), r.type === "imageReference")
    return [{ type: "text", value: "![" + r.alt + l }];
  const o = n.all(r), u = o[0];
  u && u.type === "text" ? u.value = "[" + u.value : o.unshift({ type: "text", value: "[" });
  const c = o[o.length - 1];
  return c && c.type === "text" ? c.value += l : o.push({ type: "text", value: l }), o;
}
function yE(n, r) {
  const i = String(r.identifier).toUpperCase(), l = n.definitionById.get(i);
  if (!l)
    return Pb(n, r);
  const o = { src: ca(l.url || ""), alt: r.alt };
  l.title !== null && l.title !== void 0 && (o.title = l.title);
  const u = { type: "element", tagName: "img", properties: o, children: [] };
  return n.patch(r, u), n.applyData(r, u);
}
function bE(n, r) {
  const i = { src: ca(r.url) };
  r.alt !== null && r.alt !== void 0 && (i.alt = r.alt), r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = { type: "element", tagName: "img", properties: i, children: [] };
  return n.patch(r, l), n.applyData(r, l);
}
function vE(n, r) {
  const i = { type: "text", value: r.value.replace(/\r?\n|\r/g, " ") };
  n.patch(r, i);
  const l = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [i]
  };
  return n.patch(r, l), n.applyData(r, l);
}
function wE(n, r) {
  const i = String(r.identifier).toUpperCase(), l = n.definitionById.get(i);
  if (!l)
    return Pb(n, r);
  const o = { href: ca(l.url || "") };
  l.title !== null && l.title !== void 0 && (o.title = l.title);
  const u = {
    type: "element",
    tagName: "a",
    properties: o,
    children: n.all(r)
  };
  return n.patch(r, u), n.applyData(r, u);
}
function SE(n, r) {
  const i = { href: ca(r.url) };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = {
    type: "element",
    tagName: "a",
    properties: i,
    children: n.all(r)
  };
  return n.patch(r, l), n.applyData(r, l);
}
function xE(n, r, i) {
  const l = n.all(r), o = i ? _E(i) : Vb(r), u = {}, c = [];
  if (typeof r.checked == "boolean") {
    const g = l[0];
    let y;
    g && g.type === "element" && g.tagName === "p" ? y = g : (y = { type: "element", tagName: "p", properties: {}, children: [] }, l.unshift(y)), y.children.length > 0 && y.children.unshift({ type: "text", value: " " }), y.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: r.checked, disabled: !0 },
      children: []
    }), u.className = ["task-list-item"];
  }
  let h = -1;
  for (; ++h < l.length; ) {
    const g = l[h];
    (o || h !== 0 || g.type !== "element" || g.tagName !== "p") && c.push({ type: "text", value: `
` }), g.type === "element" && g.tagName === "p" && !o ? c.push(...g.children) : c.push(g);
  }
  const m = l[l.length - 1];
  m && (o || m.type !== "element" || m.tagName !== "p") && c.push({ type: "text", value: `
` });
  const p = { type: "element", tagName: "li", properties: u, children: c };
  return n.patch(r, p), n.applyData(r, p);
}
function _E(n) {
  let r = !1;
  if (n.type === "list") {
    r = n.spread || !1;
    const i = n.children;
    let l = -1;
    for (; !r && ++l < i.length; )
      r = Vb(i[l]);
  }
  return r;
}
function Vb(n) {
  const r = n.spread;
  return r ?? n.children.length > 1;
}
function EE(n, r) {
  const i = {}, l = n.all(r);
  let o = -1;
  for (typeof r.start == "number" && r.start !== 1 && (i.start = r.start); ++o < l.length; ) {
    const c = l[o];
    if (c.type === "element" && c.tagName === "li" && c.properties && Array.isArray(c.properties.className) && c.properties.className.includes("task-list-item")) {
      i.className = ["contains-task-list"];
      break;
    }
  }
  const u = {
    type: "element",
    tagName: r.ordered ? "ol" : "ul",
    properties: i,
    children: n.wrap(l, !0)
  };
  return n.patch(r, u), n.applyData(r, u);
}
function kE(n, r) {
  const i = {
    type: "element",
    tagName: "p",
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, i), n.applyData(r, i);
}
function TE(n, r) {
  const i = { type: "root", children: n.wrap(n.all(r)) };
  return n.patch(r, i), n.applyData(r, i);
}
function AE(n, r) {
  const i = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, i), n.applyData(r, i);
}
function OE(n, r) {
  const i = n.all(r), l = i.shift(), o = [];
  if (l) {
    const c = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: n.wrap([l], !0)
    };
    n.patch(r.children[0], c), o.push(c);
  }
  if (i.length > 0) {
    const c = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: n.wrap(i, !0)
    }, h = ih(r.children[1]), m = xb(r.children[r.children.length - 1]);
    h && m && (c.position = { start: h, end: m }), o.push(c);
  }
  const u = {
    type: "element",
    tagName: "table",
    properties: {},
    children: n.wrap(o, !0)
  };
  return n.patch(r, u), n.applyData(r, u);
}
function CE(n, r, i) {
  const l = i ? i.children : void 0, u = (l ? l.indexOf(r) : 1) === 0 ? "th" : "td", c = i && i.type === "table" ? i.align : void 0, h = c ? c.length : r.children.length;
  let m = -1;
  const p = [];
  for (; ++m < h; ) {
    const y = r.children[m], S = {}, v = c ? c[m] : void 0;
    v && (S.align = v);
    let k = { type: "element", tagName: u, properties: S, children: [] };
    y && (k.children = n.all(y), n.patch(y, k), k = n.applyData(y, k)), p.push(k);
  }
  const g = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: n.wrap(p, !0)
  };
  return n.patch(r, g), n.applyData(r, g);
}
function RE(n, r) {
  const i = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, i), n.applyData(r, i);
}
const Qg = 9, Kg = 32;
function zE(n) {
  const r = String(n), i = /\r?\n|\r/g;
  let l = i.exec(r), o = 0;
  const u = [];
  for (; l; )
    u.push(
      Xg(r.slice(o, l.index), o > 0, !0),
      l[0]
    ), o = l.index + l[0].length, l = i.exec(r);
  return u.push(Xg(r.slice(o), o > 0, !1)), u.join("");
}
function Xg(n, r, i) {
  let l = 0, o = n.length;
  if (r) {
    let u = n.codePointAt(l);
    for (; u === Qg || u === Kg; )
      l++, u = n.codePointAt(l);
  }
  if (i) {
    let u = n.codePointAt(o - 1);
    for (; u === Qg || u === Kg; )
      o--, u = n.codePointAt(o - 1);
  }
  return o > l ? n.slice(l, o) : "";
}
function jE(n, r) {
  const i = { type: "text", value: zE(String(r.value)) };
  return n.patch(r, i), n.applyData(r, i);
}
function DE(n, r) {
  const i = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return n.patch(r, i), n.applyData(r, i);
}
const NE = {
  blockquote: uE,
  break: cE,
  code: fE,
  delete: hE,
  emphasis: dE,
  footnoteReference: pE,
  heading: mE,
  html: gE,
  imageReference: yE,
  image: bE,
  inlineCode: vE,
  linkReference: wE,
  link: SE,
  listItem: xE,
  list: EE,
  paragraph: kE,
  // @ts-expect-error: root is different, but hard to type.
  root: TE,
  strong: AE,
  table: OE,
  tableCell: RE,
  tableRow: CE,
  text: jE,
  thematicBreak: DE,
  toml: Ws,
  yaml: Ws,
  definition: Ws,
  footnoteDefinition: Ws
};
function Ws() {
}
const Ib = -1, xo = 0, Tl = 1, ho = 2, fh = 3, hh = 4, dh = 5, ph = 6, Gb = 7, $b = 8, Zg = typeof self == "object" ? self : globalThis, ME = (n, r) => {
  const i = (o, u) => (n.set(u, o), o), l = (o) => {
    if (n.has(o))
      return n.get(o);
    const [u, c] = r[o];
    switch (u) {
      case xo:
      case Ib:
        return i(c, o);
      case Tl: {
        const h = i([], o);
        for (const m of c)
          h.push(l(m));
        return h;
      }
      case ho: {
        const h = i({}, o);
        for (const [m, p] of c)
          h[l(m)] = l(p);
        return h;
      }
      case fh:
        return i(new Date(c), o);
      case hh: {
        const { source: h, flags: m } = c;
        return i(new RegExp(h, m), o);
      }
      case dh: {
        const h = i(/* @__PURE__ */ new Map(), o);
        for (const [m, p] of c)
          h.set(l(m), l(p));
        return h;
      }
      case ph: {
        const h = i(/* @__PURE__ */ new Set(), o);
        for (const m of c)
          h.add(l(m));
        return h;
      }
      case Gb: {
        const { name: h, message: m } = c;
        return i(new Zg[h](m), o);
      }
      case $b:
        return i(BigInt(c), o);
      case "BigInt":
        return i(Object(BigInt(c)), o);
      case "ArrayBuffer":
        return i(new Uint8Array(c).buffer, c);
      case "DataView": {
        const { buffer: h } = new Uint8Array(c);
        return i(new DataView(h), c);
      }
    }
    return i(new Zg[u](c), o);
  };
  return l;
}, Jg = (n) => ME(/* @__PURE__ */ new Map(), n)(0), $i = "", { toString: UE } = {}, { keys: BE } = Object, vl = (n) => {
  const r = typeof n;
  if (r !== "object" || !n)
    return [xo, r];
  const i = UE.call(n).slice(8, -1);
  switch (i) {
    case "Array":
      return [Tl, $i];
    case "Object":
      return [ho, $i];
    case "Date":
      return [fh, $i];
    case "RegExp":
      return [hh, $i];
    case "Map":
      return [dh, $i];
    case "Set":
      return [ph, $i];
    case "DataView":
      return [Tl, i];
  }
  return i.includes("Array") ? [Tl, i] : i.includes("Error") ? [Gb, i] : [ho, i];
}, eo = ([n, r]) => n === xo && (r === "function" || r === "symbol"), LE = (n, r, i, l) => {
  const o = (c, h) => {
    const m = l.push(c) - 1;
    return i.set(h, m), m;
  }, u = (c) => {
    if (i.has(c))
      return i.get(c);
    let [h, m] = vl(c);
    switch (h) {
      case xo: {
        let g = c;
        switch (m) {
          case "bigint":
            h = $b, g = c.toString();
            break;
          case "function":
          case "symbol":
            if (n)
              throw new TypeError("unable to serialize " + m);
            g = null;
            break;
          case "undefined":
            return o([Ib], c);
        }
        return o([h, g], c);
      }
      case Tl: {
        if (m) {
          let S = c;
          return m === "DataView" ? S = new Uint8Array(c.buffer) : m === "ArrayBuffer" && (S = new Uint8Array(c)), o([m, [...S]], c);
        }
        const g = [], y = o([h, g], c);
        for (const S of c)
          g.push(u(S));
        return y;
      }
      case ho: {
        if (m)
          switch (m) {
            case "BigInt":
              return o([m, c.toString()], c);
            case "Boolean":
            case "Number":
            case "String":
              return o([m, c.valueOf()], c);
          }
        if (r && "toJSON" in c)
          return u(c.toJSON());
        const g = [], y = o([h, g], c);
        for (const S of BE(c))
          (n || !eo(vl(c[S]))) && g.push([u(S), u(c[S])]);
        return y;
      }
      case fh:
        return o([h, c.toISOString()], c);
      case hh: {
        const { source: g, flags: y } = c;
        return o([h, { source: g, flags: y }], c);
      }
      case dh: {
        const g = [], y = o([h, g], c);
        for (const [S, v] of c)
          (n || !(eo(vl(S)) || eo(vl(v)))) && g.push([u(S), u(v)]);
        return y;
      }
      case ph: {
        const g = [], y = o([h, g], c);
        for (const S of c)
          (n || !eo(vl(S))) && g.push(u(S));
        return y;
      }
    }
    const { message: p } = c;
    return o([h, { name: m, message: p }], c);
  };
  return u;
}, Wg = (n, { json: r, lossy: i } = {}) => {
  const l = [];
  return LE(!(r || i), !!r, /* @__PURE__ */ new Map(), l)(n), l;
}, po = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (n, r) => r && ("json" in r || "lossy" in r) ? Jg(Wg(n, r)) : structuredClone(n)
) : (n, r) => Jg(Wg(n, r));
function qE(n, r) {
  const i = [{ type: "text", value: "↩" }];
  return r > 1 && i.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(r) }]
  }), i;
}
function HE(n, r) {
  return "Back to reference " + (n + 1) + (r > 1 ? "-" + r : "");
}
function PE(n) {
  const r = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", i = n.options.footnoteBackContent || qE, l = n.options.footnoteBackLabel || HE, o = n.options.footnoteLabel || "Footnotes", u = n.options.footnoteLabelTagName || "h2", c = n.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, h = [];
  let m = -1;
  for (; ++m < n.footnoteOrder.length; ) {
    const p = n.footnoteById.get(
      n.footnoteOrder[m]
    );
    if (!p)
      continue;
    const g = n.all(p), y = String(p.identifier).toUpperCase(), S = ca(y.toLowerCase());
    let v = 0;
    const k = [], A = n.footnoteCounts.get(y);
    for (; A !== void 0 && ++v <= A; ) {
      k.length > 0 && k.push({ type: "text", value: " " });
      let Y = typeof i == "string" ? i : i(m, v);
      typeof Y == "string" && (Y = { type: "text", value: Y }), k.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + r + "fnref-" + S + (v > 1 ? "-" + v : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof l == "string" ? l : l(m, v),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(Y) ? Y : [Y]
      });
    }
    const O = g[g.length - 1];
    if (O && O.type === "element" && O.tagName === "p") {
      const Y = O.children[O.children.length - 1];
      Y && Y.type === "text" ? Y.value += " " : O.children.push({ type: "text", value: " " }), O.children.push(...k);
    } else
      g.push(...k);
    const j = {
      type: "element",
      tagName: "li",
      properties: { id: r + "fn-" + S },
      children: n.wrap(g, !0)
    };
    n.patch(p, j), h.push(j);
  }
  if (h.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: u,
          properties: {
            ...po(c),
            id: "footnote-label"
          },
          children: [{ type: "text", value: o }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: n.wrap(h, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const Yb = (
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
      return $E;
    if (typeof n == "function")
      return _o(n);
    if (typeof n == "object")
      return Array.isArray(n) ? VE(n) : IE(n);
    if (typeof n == "string")
      return GE(n);
    throw new Error("Expected function, string, or object as test");
  }
);
function VE(n) {
  const r = [];
  let i = -1;
  for (; ++i < n.length; )
    r[i] = Yb(n[i]);
  return _o(l);
  function l(...o) {
    let u = -1;
    for (; ++u < r.length; )
      if (r[u].apply(this, o)) return !0;
    return !1;
  }
}
function IE(n) {
  const r = (
    /** @type {Record<string, unknown>} */
    n
  );
  return _o(i);
  function i(l) {
    const o = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      l
    );
    let u;
    for (u in n)
      if (o[u] !== r[u]) return !1;
    return !0;
  }
}
function GE(n) {
  return _o(r);
  function r(i) {
    return i && i.type === n;
  }
}
function _o(n) {
  return r;
  function r(i, l, o) {
    return !!(YE(i) && n.call(
      this,
      i,
      typeof l == "number" ? l : void 0,
      o || void 0
    ));
  }
}
function $E() {
  return !0;
}
function YE(n) {
  return n !== null && typeof n == "object" && "type" in n;
}
const Fb = [], FE = !0, ey = !1, QE = "skip";
function KE(n, r, i, l) {
  let o;
  typeof r == "function" && typeof i != "function" ? (l = i, i = r) : o = r;
  const u = Yb(o), c = l ? -1 : 1;
  h(n, void 0, [])();
  function h(m, p, g) {
    const y = (
      /** @type {Record<string, unknown>} */
      m && typeof m == "object" ? m : {}
    );
    if (typeof y.type == "string") {
      const v = (
        // `hast`
        typeof y.tagName == "string" ? y.tagName : (
          // `xast`
          typeof y.name == "string" ? y.name : void 0
        )
      );
      Object.defineProperty(S, "name", {
        value: "node (" + (m.type + (v ? "<" + v + ">" : "")) + ")"
      });
    }
    return S;
    function S() {
      let v = Fb, k, A, O;
      if ((!r || u(m, p, g[g.length - 1] || void 0)) && (v = XE(i(m, g)), v[0] === ey))
        return v;
      if ("children" in m && m.children) {
        const j = (
          /** @type {UnistParent} */
          m
        );
        if (j.children && v[0] !== QE)
          for (A = (l ? j.children.length : -1) + c, O = g.concat(j); A > -1 && A < j.children.length; ) {
            const Y = j.children[A];
            if (k = h(Y, A, O)(), k[0] === ey)
              return k;
            A = typeof k[1] == "number" ? k[1] : A + c;
          }
      }
      return v;
    }
  }
}
function XE(n) {
  return Array.isArray(n) ? n : typeof n == "number" ? [FE, n] : n == null ? Fb : [n];
}
function Qb(n, r, i, l) {
  let o, u, c;
  typeof r == "function" && typeof i != "function" ? (u = void 0, c = r, o = i) : (u = r, c = i, o = l), KE(n, u, h, o);
  function h(m, p) {
    const g = p[p.length - 1], y = g ? g.children.indexOf(m) : void 0;
    return c(m, y, g);
  }
}
const Nf = {}.hasOwnProperty, ZE = {};
function JE(n, r) {
  const i = r || ZE, l = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = { ...NE, ...i.handlers }, h = {
    all: p,
    applyData: ek,
    definitionById: l,
    footnoteById: o,
    footnoteCounts: u,
    footnoteOrder: [],
    handlers: c,
    one: m,
    options: i,
    patch: WE,
    wrap: nk
  };
  return Qb(n, function(g) {
    if (g.type === "definition" || g.type === "footnoteDefinition") {
      const y = g.type === "definition" ? l : o, S = String(g.identifier).toUpperCase();
      y.has(S) || y.set(S, g);
    }
  }), h;
  function m(g, y) {
    const S = g.type, v = h.handlers[S];
    if (Nf.call(h.handlers, S) && v)
      return v(h, g, y);
    if (h.options.passThrough && h.options.passThrough.includes(S)) {
      if ("children" in g) {
        const { children: A, ...O } = g, j = po(O);
        return j.children = h.all(g), j;
      }
      return po(g);
    }
    return (h.options.unknownHandler || tk)(h, g, y);
  }
  function p(g) {
    const y = [];
    if ("children" in g) {
      const S = g.children;
      let v = -1;
      for (; ++v < S.length; ) {
        const k = h.one(S[v], g);
        if (k) {
          if (v && S[v - 1].type === "break" && (!Array.isArray(k) && k.type === "text" && (k.value = ty(k.value)), !Array.isArray(k) && k.type === "element")) {
            const A = k.children[0];
            A && A.type === "text" && (A.value = ty(A.value));
          }
          Array.isArray(k) ? y.push(...k) : y.push(k);
        }
      }
    }
    return y;
  }
}
function WE(n, r) {
  n.position && (r.position = US(n));
}
function ek(n, r) {
  let i = r;
  if (n && n.data) {
    const l = n.data.hName, o = n.data.hChildren, u = n.data.hProperties;
    if (typeof l == "string")
      if (i.type === "element")
        i.tagName = l;
      else {
        const c = "children" in i ? i.children : [i];
        i = { type: "element", tagName: l, properties: {}, children: c };
      }
    i.type === "element" && u && Object.assign(i.properties, po(u)), "children" in i && i.children && o !== null && o !== void 0 && (i.children = o);
  }
  return i;
}
function tk(n, r) {
  const i = r.data || {}, l = "value" in r && !(Nf.call(i, "hProperties") || Nf.call(i, "hChildren")) ? { type: "text", value: r.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: n.all(r)
  };
  return n.patch(r, l), n.applyData(r, l);
}
function nk(n, r) {
  const i = [];
  let l = -1;
  for (r && i.push({ type: "text", value: `
` }); ++l < n.length; )
    l && i.push({ type: "text", value: `
` }), i.push(n[l]);
  return r && n.length > 0 && i.push({ type: "text", value: `
` }), i;
}
function ty(n) {
  let r = 0, i = n.charCodeAt(r);
  for (; i === 9 || i === 32; )
    r++, i = n.charCodeAt(r);
  return n.slice(r);
}
function ny(n, r) {
  const i = JE(n, r), l = i.one(n, void 0), o = PE(i), u = Array.isArray(l) ? { type: "root", children: l } : l || { type: "root", children: [] };
  return o && u.children.push({ type: "text", value: `
` }, o), u;
}
function rk(n, r) {
  return n && "run" in n ? async function(i, l) {
    const o = (
      /** @type {HastRoot} */
      ny(i, { file: l, ...r })
    );
    await n.run(o, l);
  } : function(i, l) {
    return (
      /** @type {HastRoot} */
      ny(i, { file: l, ...n || r })
    );
  };
}
function ry(n) {
  if (n)
    throw n;
}
var af, iy;
function ik() {
  if (iy) return af;
  iy = 1;
  var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, l = Object.getOwnPropertyDescriptor, o = function(p) {
    return typeof Array.isArray == "function" ? Array.isArray(p) : r.call(p) === "[object Array]";
  }, u = function(p) {
    if (!p || r.call(p) !== "[object Object]")
      return !1;
    var g = n.call(p, "constructor"), y = p.constructor && p.constructor.prototype && n.call(p.constructor.prototype, "isPrototypeOf");
    if (p.constructor && !g && !y)
      return !1;
    var S;
    for (S in p)
      ;
    return typeof S > "u" || n.call(p, S);
  }, c = function(p, g) {
    i && g.name === "__proto__" ? i(p, g.name, {
      enumerable: !0,
      configurable: !0,
      value: g.newValue,
      writable: !0
    }) : p[g.name] = g.newValue;
  }, h = function(p, g) {
    if (g === "__proto__")
      if (n.call(p, g)) {
        if (l)
          return l(p, g).value;
      } else return;
    return p[g];
  };
  return af = function m() {
    var p, g, y, S, v, k, A = arguments[0], O = 1, j = arguments.length, Y = !1;
    for (typeof A == "boolean" && (Y = A, A = arguments[1] || {}, O = 2), (A == null || typeof A != "object" && typeof A != "function") && (A = {}); O < j; ++O)
      if (p = arguments[O], p != null)
        for (g in p)
          y = h(A, g), S = h(p, g), A !== S && (Y && S && (u(S) || (v = o(S))) ? (v ? (v = !1, k = y && o(y) ? y : []) : k = y && u(y) ? y : {}, c(A, { name: g, newValue: m(Y, k, S) })) : typeof S < "u" && c(A, { name: g, newValue: S }));
    return A;
  }, af;
}
var ak = ik();
const lf = /* @__PURE__ */ Wf(ak);
function Mf(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const r = Object.getPrototypeOf(n);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}
function lk() {
  const n = [], r = { run: i, use: l };
  return r;
  function i(...o) {
    let u = -1;
    const c = o.pop();
    if (typeof c != "function")
      throw new TypeError("Expected function as last argument, not " + c);
    h(null, ...o);
    function h(m, ...p) {
      const g = n[++u];
      let y = -1;
      if (m) {
        c(m);
        return;
      }
      for (; ++y < o.length; )
        (p[y] === null || p[y] === void 0) && (p[y] = o[y]);
      o = p, g ? sk(g, h)(...p) : c(null, ...p);
    }
  }
  function l(o) {
    if (typeof o != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + o
      );
    return n.push(o), r;
  }
}
function sk(n, r) {
  let i;
  return l;
  function l(...c) {
    const h = n.length > c.length;
    let m;
    h && c.push(o);
    try {
      m = n.apply(this, c);
    } catch (p) {
      const g = (
        /** @type {Error} */
        p
      );
      if (h && i)
        throw g;
      return o(g);
    }
    h || (m && m.then && typeof m.then == "function" ? m.then(u, o) : m instanceof Error ? o(m) : u(m));
  }
  function o(c, ...h) {
    i || (i = !0, r(c, ...h));
  }
  function u(c) {
    o(null, c);
  }
}
const Tn = { basename: ok, dirname: uk, extname: ck, join: fk, sep: "/" };
function ok(n, r) {
  if (r !== void 0 && typeof r != "string")
    throw new TypeError('"ext" argument must be a string');
  Nl(n);
  let i = 0, l = -1, o = n.length, u;
  if (r === void 0 || r.length === 0 || r.length > n.length) {
    for (; o--; )
      if (n.codePointAt(o) === 47) {
        if (u) {
          i = o + 1;
          break;
        }
      } else l < 0 && (u = !0, l = o + 1);
    return l < 0 ? "" : n.slice(i, l);
  }
  if (r === n)
    return "";
  let c = -1, h = r.length - 1;
  for (; o--; )
    if (n.codePointAt(o) === 47) {
      if (u) {
        i = o + 1;
        break;
      }
    } else
      c < 0 && (u = !0, c = o + 1), h > -1 && (n.codePointAt(o) === r.codePointAt(h--) ? h < 0 && (l = o) : (h = -1, l = c));
  return i === l ? l = c : l < 0 && (l = n.length), n.slice(i, l);
}
function uk(n) {
  if (Nl(n), n.length === 0)
    return ".";
  let r = -1, i = n.length, l;
  for (; --i; )
    if (n.codePointAt(i) === 47) {
      if (l) {
        r = i;
        break;
      }
    } else l || (l = !0);
  return r < 0 ? n.codePointAt(0) === 47 ? "/" : "." : r === 1 && n.codePointAt(0) === 47 ? "//" : n.slice(0, r);
}
function ck(n) {
  Nl(n);
  let r = n.length, i = -1, l = 0, o = -1, u = 0, c;
  for (; r--; ) {
    const h = n.codePointAt(r);
    if (h === 47) {
      if (c) {
        l = r + 1;
        break;
      }
      continue;
    }
    i < 0 && (c = !0, i = r + 1), h === 46 ? o < 0 ? o = r : u !== 1 && (u = 1) : o > -1 && (u = -1);
  }
  return o < 0 || i < 0 || // We saw a non-dot character immediately before the dot.
  u === 0 || // The (right-most) trimmed path component is exactly `..`.
  u === 1 && o === i - 1 && o === l + 1 ? "" : n.slice(o, i);
}
function fk(...n) {
  let r = -1, i;
  for (; ++r < n.length; )
    Nl(n[r]), n[r] && (i = i === void 0 ? n[r] : i + "/" + n[r]);
  return i === void 0 ? "." : hk(i);
}
function hk(n) {
  Nl(n);
  const r = n.codePointAt(0) === 47;
  let i = dk(n, !r);
  return i.length === 0 && !r && (i = "."), i.length > 0 && n.codePointAt(n.length - 1) === 47 && (i += "/"), r ? "/" + i : i;
}
function dk(n, r) {
  let i = "", l = 0, o = -1, u = 0, c = -1, h, m;
  for (; ++c <= n.length; ) {
    if (c < n.length)
      h = n.codePointAt(c);
    else {
      if (h === 47)
        break;
      h = 47;
    }
    if (h === 47) {
      if (!(o === c - 1 || u === 1)) if (o !== c - 1 && u === 2) {
        if (i.length < 2 || l !== 2 || i.codePointAt(i.length - 1) !== 46 || i.codePointAt(i.length - 2) !== 46) {
          if (i.length > 2) {
            if (m = i.lastIndexOf("/"), m !== i.length - 1) {
              m < 0 ? (i = "", l = 0) : (i = i.slice(0, m), l = i.length - 1 - i.lastIndexOf("/")), o = c, u = 0;
              continue;
            }
          } else if (i.length > 0) {
            i = "", l = 0, o = c, u = 0;
            continue;
          }
        }
        r && (i = i.length > 0 ? i + "/.." : "..", l = 2);
      } else
        i.length > 0 ? i += "/" + n.slice(o + 1, c) : i = n.slice(o + 1, c), l = c - o - 1;
      o = c, u = 0;
    } else h === 46 && u > -1 ? u++ : u = -1;
  }
  return i;
}
function Nl(n) {
  if (typeof n != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(n)
    );
}
const pk = { cwd: mk };
function mk() {
  return "/";
}
function Uf(n) {
  return !!(n !== null && typeof n == "object" && "href" in n && n.href && "protocol" in n && n.protocol && // @ts-expect-error: indexing is fine.
  n.auth === void 0);
}
function gk(n) {
  if (typeof n == "string")
    n = new URL(n);
  else if (!Uf(n)) {
    const r = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + n + "`"
    );
    throw r.code = "ERR_INVALID_ARG_TYPE", r;
  }
  if (n.protocol !== "file:") {
    const r = new TypeError("The URL must be of scheme file");
    throw r.code = "ERR_INVALID_URL_SCHEME", r;
  }
  return yk(n);
}
function yk(n) {
  if (n.hostname !== "") {
    const l = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw l.code = "ERR_INVALID_FILE_URL_HOST", l;
  }
  const r = n.pathname;
  let i = -1;
  for (; ++i < r.length; )
    if (r.codePointAt(i) === 37 && r.codePointAt(i + 1) === 50) {
      const l = r.codePointAt(i + 2);
      if (l === 70 || l === 102) {
        const o = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw o.code = "ERR_INVALID_FILE_URL_PATH", o;
      }
    }
  return decodeURIComponent(r);
}
const sf = (
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
class Kb {
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
  constructor(r) {
    let i;
    r ? Uf(r) ? i = { path: r } : typeof r == "string" || bk(r) ? i = { value: r } : i = r : i = {}, this.cwd = "cwd" in i ? "" : pk.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let l = -1;
    for (; ++l < sf.length; ) {
      const u = sf[l];
      u in i && i[u] !== void 0 && i[u] !== null && (this[u] = u === "history" ? [...i[u]] : i[u]);
    }
    let o;
    for (o in i)
      sf.includes(o) || (this[o] = i[o]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Tn.basename(this.path) : void 0;
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
  set basename(r) {
    uf(r, "basename"), of(r, "basename"), this.path = Tn.join(this.dirname || "", r);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Tn.dirname(this.path) : void 0;
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
  set dirname(r) {
    ay(this.basename, "dirname"), this.path = Tn.join(r || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Tn.extname(this.path) : void 0;
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
  set extname(r) {
    if (of(r, "extname"), ay(this.dirname, "extname"), r) {
      if (r.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (r.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Tn.join(this.dirname, this.stem + (r || ""));
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
  set path(r) {
    Uf(r) && (r = gk(r)), uf(r, "path"), this.path !== r && this.history.push(r);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Tn.basename(this.path, this.extname) : void 0;
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
  set stem(r) {
    uf(r, "stem"), of(r, "stem"), this.path = Tn.join(this.dirname || "", r + (this.extname || ""));
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
  fail(r, i, l) {
    const o = this.message(r, i, l);
    throw o.fatal = !0, o;
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
  info(r, i, l) {
    const o = this.message(r, i, l);
    return o.fatal = void 0, o;
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
  message(r, i, l) {
    const o = new xt(
      // @ts-expect-error: the overloads are fine.
      r,
      i,
      l
    );
    return this.path && (o.name = this.path + ":" + o.name, o.file = this.path), o.fatal = !1, this.messages.push(o), o;
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
  toString(r) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(r || void 0).decode(this.value);
  }
}
function of(n, r) {
  if (n && n.includes(Tn.sep))
    throw new Error(
      "`" + r + "` cannot be a path: did not expect `" + Tn.sep + "`"
    );
}
function uf(n, r) {
  if (!n)
    throw new Error("`" + r + "` cannot be empty");
}
function ay(n, r) {
  if (!n)
    throw new Error("Setting `" + r + "` requires `path` to be set too");
}
function bk(n) {
  return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
}
const vk = (
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
    const l = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), o = l[n], u = function() {
      return o.apply(u, arguments);
    };
    return Object.setPrototypeOf(u, l), u;
  }
), wk = {}.hasOwnProperty;
class mh extends vk {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = lk();
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
    const r = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new mh()
    );
    let i = -1;
    for (; ++i < this.attachers.length; ) {
      const l = this.attachers[i];
      r.use(...l);
    }
    return r.data(lf(!0, {}, this.namespace)), r;
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
  data(r, i) {
    return typeof r == "string" ? arguments.length === 2 ? (hf("data", this.frozen), this.namespace[r] = i, this) : wk.call(this.namespace, r) && this.namespace[r] || void 0 : r ? (hf("data", this.frozen), this.namespace = r, this) : this.namespace;
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
    const r = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [i, ...l] = this.attachers[this.freezeIndex];
      if (l[0] === !1)
        continue;
      l[0] === !0 && (l[0] = void 0);
      const o = i.call(r, ...l);
      typeof o == "function" && this.transformers.use(o);
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
  parse(r) {
    this.freeze();
    const i = to(r), l = this.parser || this.Parser;
    return cf("parse", l), l(String(i), i);
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
  process(r, i) {
    const l = this;
    return this.freeze(), cf("process", this.parser || this.Parser), ff("process", this.compiler || this.Compiler), i ? o(void 0, i) : new Promise(o);
    function o(u, c) {
      const h = to(r), m = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        l.parse(h)
      );
      l.run(m, h, function(g, y, S) {
        if (g || !y || !S)
          return p(g);
        const v = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          y
        ), k = l.stringify(v, S);
        _k(k) ? S.value = k : S.result = k, p(
          g,
          /** @type {VFileWithOutput<CompileResult>} */
          S
        );
      });
      function p(g, y) {
        g || !y ? c(g) : u ? u(y) : i(void 0, y);
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
  processSync(r) {
    let i = !1, l;
    return this.freeze(), cf("processSync", this.parser || this.Parser), ff("processSync", this.compiler || this.Compiler), this.process(r, o), sy("processSync", "process", i), l;
    function o(u, c) {
      i = !0, ry(u), l = c;
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
  run(r, i, l) {
    ly(r), this.freeze();
    const o = this.transformers;
    return !l && typeof i == "function" && (l = i, i = void 0), l ? u(void 0, l) : new Promise(u);
    function u(c, h) {
      const m = to(i);
      o.run(r, m, p);
      function p(g, y, S) {
        const v = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          y || r
        );
        g ? h(g) : c ? c(v) : l(void 0, v, S);
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
  runSync(r, i) {
    let l = !1, o;
    return this.run(r, i, u), sy("runSync", "run", l), o;
    function u(c, h) {
      ry(c), o = h, l = !0;
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
  stringify(r, i) {
    this.freeze();
    const l = to(i), o = this.compiler || this.Compiler;
    return ff("stringify", o), ly(r), o(r, l);
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
  use(r, ...i) {
    const l = this.attachers, o = this.namespace;
    if (hf("use", this.frozen), r != null) if (typeof r == "function")
      m(r, i);
    else if (typeof r == "object")
      Array.isArray(r) ? h(r) : c(r);
    else
      throw new TypeError("Expected usable value, not `" + r + "`");
    return this;
    function u(p) {
      if (typeof p == "function")
        m(p, []);
      else if (typeof p == "object")
        if (Array.isArray(p)) {
          const [g, ...y] = (
            /** @type {PluginTuple<Array<unknown>>} */
            p
          );
          m(g, y);
        } else
          c(p);
      else
        throw new TypeError("Expected usable value, not `" + p + "`");
    }
    function c(p) {
      if (!("plugins" in p) && !("settings" in p))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      h(p.plugins), p.settings && (o.settings = lf(!0, o.settings, p.settings));
    }
    function h(p) {
      let g = -1;
      if (p != null) if (Array.isArray(p))
        for (; ++g < p.length; ) {
          const y = p[g];
          u(y);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + p + "`");
    }
    function m(p, g) {
      let y = -1, S = -1;
      for (; ++y < l.length; )
        if (l[y][0] === p) {
          S = y;
          break;
        }
      if (S === -1)
        l.push([p, ...g]);
      else if (g.length > 0) {
        let [v, ...k] = g;
        const A = l[S][1];
        Mf(A) && Mf(v) && (v = lf(!0, A, v)), l[S] = [p, v, ...k];
      }
    }
  }
}
const Sk = new mh().freeze();
function cf(n, r) {
  if (typeof r != "function")
    throw new TypeError("Cannot `" + n + "` without `parser`");
}
function ff(n, r) {
  if (typeof r != "function")
    throw new TypeError("Cannot `" + n + "` without `compiler`");
}
function hf(n, r) {
  if (r)
    throw new Error(
      "Cannot call `" + n + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function ly(n) {
  if (!Mf(n) || typeof n.type != "string")
    throw new TypeError("Expected node, got `" + n + "`");
}
function sy(n, r, i) {
  if (!i)
    throw new Error(
      "`" + n + "` finished async. Use `" + r + "` instead"
    );
}
function to(n) {
  return xk(n) ? n : new Kb(n);
}
function xk(n) {
  return !!(n && typeof n == "object" && "message" in n && "messages" in n);
}
function _k(n) {
  return typeof n == "string" || Ek(n);
}
function Ek(n) {
  return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
}
const kk = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", oy = [], uy = { allowDangerousHtml: !0 }, Tk = /^(https?|ircs?|mailto|xmpp)$/i, Ak = [
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
function Ok(n) {
  const r = Ck(n), i = Rk(n);
  return zk(r.runSync(r.parse(i), i), n);
}
function Ck(n) {
  const r = n.rehypePlugins || oy, i = n.remarkPlugins || oy, l = n.remarkRehypeOptions ? { ...n.remarkRehypeOptions, ...uy } : uy;
  return Sk().use(oE).use(i).use(rk, l).use(r);
}
function Rk(n) {
  const r = n.children || "", i = new Kb();
  return typeof r == "string" && (i.value = r), i;
}
function zk(n, r) {
  const i = r.allowedElements, l = r.allowElement, o = r.components, u = r.disallowedElements, c = r.skipHtml, h = r.unwrapDisallowed, m = r.urlTransform || jk;
  for (const g of Ak)
    Object.hasOwn(r, g.from) && ("" + g.from + (g.to ? "use `" + g.to + "` instead" : "remove it") + kk + g.id, void 0);
  return Qb(n, p), PS(n, {
    Fragment: X.Fragment,
    components: o,
    ignoreInvalidStyle: !0,
    jsx: X.jsx,
    jsxs: X.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function p(g, y, S) {
    if (g.type === "raw" && S && typeof y == "number")
      return c ? S.children.splice(y, 1) : S.children[y] = { type: "text", value: g.value }, y;
    if (g.type === "element") {
      let v;
      for (v in tf)
        if (Object.hasOwn(tf, v) && Object.hasOwn(g.properties, v)) {
          const k = g.properties[v], A = tf[v];
          (A === null || A.includes(g.tagName)) && (g.properties[v] = m(String(k || ""), v, g));
        }
    }
    if (g.type === "element") {
      let v = i ? !i.includes(g.tagName) : u ? u.includes(g.tagName) : !1;
      if (!v && l && typeof y == "number" && (v = !l(g, y, S)), v && S && typeof y == "number")
        return h && g.children ? S.children.splice(y, 1, ...g.children) : S.children.splice(y, 1), y;
    }
  }
}
function jk(n) {
  const r = n.indexOf(":"), i = n.indexOf("?"), l = n.indexOf("#"), o = n.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    r === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    o !== -1 && r > o || i !== -1 && r > i || l !== -1 && r > l || // It is a protocol, it should be allowed.
    Tk.test(n.slice(0, r)) ? n : ""
  );
}
function Dk({ content: n, className: r = "" }) {
  return /* @__PURE__ */ X.jsx("div", { className: `prose prose-sm max-w-none dark:prose-invert ${r}`, children: /* @__PURE__ */ X.jsx(
    Ok,
    {
      components: {
        // Custom styling for markdown elements
        p: ({ children: i }) => /* @__PURE__ */ X.jsx("p", { className: "mb-2 last:mb-0", children: i }),
        ul: ({ children: i }) => /* @__PURE__ */ X.jsx("ul", { className: "list-disc list-inside mb-2 space-y-1", children: i }),
        ol: ({ children: i }) => /* @__PURE__ */ X.jsx("ol", { className: "list-decimal list-inside mb-2 space-y-1", children: i }),
        li: ({ children: i }) => /* @__PURE__ */ X.jsx("li", { className: "text-sm", children: i }),
        strong: ({ children: i }) => /* @__PURE__ */ X.jsx("strong", { className: "font-semibold", children: i }),
        em: ({ children: i }) => /* @__PURE__ */ X.jsx("em", { className: "italic", children: i }),
        code: ({ children: i }) => /* @__PURE__ */ X.jsx("code", { className: "bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-xs font-mono", children: i }),
        pre: ({ children: i }) => /* @__PURE__ */ X.jsx("pre", { className: "bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-x-auto", children: i }),
        h1: ({ children: i }) => /* @__PURE__ */ X.jsx("h1", { className: "text-lg font-bold mb-2", children: i }),
        h2: ({ children: i }) => /* @__PURE__ */ X.jsx("h2", { className: "text-base font-bold mb-2", children: i }),
        h3: ({ children: i }) => /* @__PURE__ */ X.jsx("h3", { className: "text-sm font-bold mb-1", children: i }),
        a: ({ children: i, href: l }) => /* @__PURE__ */ X.jsx(
          "a",
          {
            href: l,
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
function Nk({ message: n, isUser: r, timestamp: i, onStreamingChange: l, skipStreaming: o, companyTheme: u }) {
  const [c, h] = Xt(""), [m, p] = Xt(!1), [g, y] = Xt(!1), S = async (v) => {
    const k = v.split(" ");
    let A = "";
    p(!0), l?.(!0), h("");
    for (let O = 0; O < k.length; O++)
      A += k[O] + " ", h(A.trim()), O === k.length - 1 && (p(!1), l?.(!1)), await new Promise((j) => setTimeout(j, 100));
  };
  return Jr(() => {
    const v = setTimeout(() => {
      y(!0);
    }, 500);
    return () => clearTimeout(v);
  }, []), Jr(() => {
    !r && !o && g ? setTimeout(() => {
      S(n);
    }, 1e3) : !r && !o && !g ? (p(!0), l?.(!0), h("")) : (p(!1), l?.(!1), h(""));
  }, [n, r, o, g]), /* @__PURE__ */ X.jsxs("div", { className: An("flex gap-3 max-w-[98%] mx-auto px-4 py-6", r ? "flex-row-reverse" : "flex-row"), children: [
    /* @__PURE__ */ X.jsx(
      "div",
      {
        className: An(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
          r ? "text-white" : "text-gray-600 dark:text-gray-400"
        ),
        style: { backgroundColor: r ? u?.primaryColor : u?.backgroundColor },
        children: r ? /* @__PURE__ */ X.jsx(j1, { className: "w-4 h-4" }) : /* @__PURE__ */ X.jsx(tb, { className: "w-4 h-4" })
      }
    ),
    /* @__PURE__ */ X.jsxs("div", { className: An("flex-1 space-y-2", r ? "text-right" : "text-left"), children: [
      /* @__PURE__ */ X.jsx(
        "div",
        {
          className: An(
            "inline-block max-w-[98%] px-4 py-3 rounded-2xl text-sm leading-relaxed",
            r ? "text-white rounded-br-md" : "text-gray-900 dark:text-gray-100 rounded-bl-md"
          ),
          style: { backgroundColor: r ? u?.primaryColor : u?.backgroundColor },
          children: /* @__PURE__ */ X.jsx(
            Dk,
            {
              content: !r && m && !o ? c : n
            }
          )
        }
      ),
      i && /* @__PURE__ */ X.jsx(
        "div",
        {
          className: An("text-xs text-gray-500 dark:text-gray-400 px-2", r ? "text-right" : "text-left"),
          children: i
        }
      )
    ] })
  ] });
}
function cy(n, r) {
  if (typeof n == "function")
    return n(r);
  n != null && (n.current = r);
}
function Mk(...n) {
  return (r) => {
    let i = !1;
    const l = n.map((o) => {
      const u = cy(o, r);
      return !i && typeof u == "function" && (i = !0), u;
    });
    if (i)
      return () => {
        for (let o = 0; o < l.length; o++) {
          const u = l[o];
          typeof u == "function" ? u() : cy(n[o], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function Uk(n) {
  const r = /* @__PURE__ */ Lk(n), i = Dt.forwardRef((l, o) => {
    const { children: u, ...c } = l, h = Dt.Children.toArray(u), m = h.find(Hk);
    if (m) {
      const p = m.props.children, g = h.map((y) => y === m ? Dt.Children.count(p) > 1 ? Dt.Children.only(null) : Dt.isValidElement(p) ? p.props.children : null : y);
      return /* @__PURE__ */ X.jsx(r, { ...c, ref: o, children: Dt.isValidElement(p) ? Dt.cloneElement(p, void 0, g) : null });
    }
    return /* @__PURE__ */ X.jsx(r, { ...c, ref: o, children: u });
  });
  return i.displayName = `${n}.Slot`, i;
}
var Bk = /* @__PURE__ */ Uk("Slot");
// @__NO_SIDE_EFFECTS__
function Lk(n) {
  const r = Dt.forwardRef((i, l) => {
    const { children: o, ...u } = i;
    if (Dt.isValidElement(o)) {
      const c = Vk(o), h = Pk(u, o.props);
      return o.type !== Dt.Fragment && (h.ref = l ? Mk(l, c) : c), Dt.cloneElement(o, h);
    }
    return Dt.Children.count(o) > 1 ? Dt.Children.only(null) : null;
  });
  return r.displayName = `${n}.SlotClone`, r;
}
var qk = Symbol("radix.slottable");
function Hk(n) {
  return Dt.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === qk;
}
function Pk(n, r) {
  const i = { ...r };
  for (const l in r) {
    const o = n[l], u = r[l];
    /^on[A-Z]/.test(l) ? o && u ? i[l] = (...h) => {
      const m = u(...h);
      return o(...h), m;
    } : o && (i[l] = o) : l === "style" ? i[l] = { ...o, ...u } : l === "className" && (i[l] = [o, u].filter(Boolean).join(" "));
  }
  return { ...n, ...i };
}
function Vk(n) {
  let r = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, i = r && "isReactWarning" in r && r.isReactWarning;
  return i ? n.ref : (r = Object.getOwnPropertyDescriptor(n, "ref")?.get, i = r && "isReactWarning" in r && r.isReactWarning, i ? n.props.ref : n.props.ref || n.ref);
}
const fy = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n, hy = rb, Ik = (n, r) => (i) => {
  var l;
  if (r?.variants == null) return hy(n, i?.class, i?.className);
  const { variants: o, defaultVariants: u } = r, c = Object.keys(o).map((p) => {
    const g = i?.[p], y = u?.[p];
    if (g === null) return null;
    const S = fy(g) || fy(y);
    return o[p][S];
  }), h = i && Object.entries(i).reduce((p, g) => {
    let [y, S] = g;
    return S === void 0 || (p[y] = S), p;
  }, {}), m = r == null || (l = r.compoundVariants) === null || l === void 0 ? void 0 : l.reduce((p, g) => {
    let { class: y, className: S, ...v } = g;
    return Object.entries(v).every((k) => {
      let [A, O] = k;
      return Array.isArray(O) ? O.includes({
        ...u,
        ...h
      }[A]) : {
        ...u,
        ...h
      }[A] === O;
    }) ? [
      ...p,
      y,
      S
    ] : p;
  }, []);
  return hy(n, c, m, i?.class, i?.className);
}, Gk = Ik(
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
function Al({
  className: n,
  variant: r,
  size: i,
  asChild: l = !1,
  ...o
}) {
  const u = l ? Bk : "button";
  return /* @__PURE__ */ X.jsx(
    u,
    {
      "data-slot": "button",
      className: An(Gk({ variant: r, size: i, className: n })),
      ...o
    }
  );
}
function $k({ className: n, ...r }) {
  return /* @__PURE__ */ X.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: An(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        n
      ),
      ...r
    }
  );
}
function Yk({ onSendMessage: n, isLoading: r = !1, placeholder: i = "Type your message...", companyTheme: l }) {
  const [o, u] = Xt(""), c = (p) => {
    p.preventDefault(), o.trim() && !r && (n(o.trim()), u(""));
  }, h = (p) => {
    p.key === "Enter" && !p.shiftKey && (p.preventDefault(), c(p));
  }, m = l?.primaryColor ? pb(l.primaryColor, 20) : void 0;
  return /* @__PURE__ */ X.jsx("div", { className: "border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900", children: /* @__PURE__ */ X.jsxs("div", { className: "max-w-4xl mx-auto p-4", children: [
    /* @__PURE__ */ X.jsxs("form", { onSubmit: c, className: "relative", children: [
      /* @__PURE__ */ X.jsx(
        $k,
        {
          value: o,
          onChange: (p) => u(p.target.value),
          onKeyDown: h,
          placeholder: i,
          disabled: r,
          className: An(
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
      /* @__PURE__ */ X.jsxs(
        Al,
        {
          type: "submit",
          size: "sm",
          disabled: !o.trim() || r,
          className: An(
            "absolute right-1 bottom-2 h-8 w-8 p-0",
            "disabled:bg-gray-300 dark:disabled:bg-gray-600",
            "transition-all duration-200 ease-in-out",
            "hover:scale-105 focus:scale-105",
            "focus:outline-none focus:ring-2 focus:ring-offset-2"
          ),
          style: {
            backgroundColor: l?.primaryColor,
            "--hover-bg-color": m
          },
          onMouseEnter: (p) => {
            m && (p.currentTarget.style.backgroundColor = m);
          },
          onMouseLeave: (p) => {
            l?.primaryColor && (p.currentTarget.style.backgroundColor = l.primaryColor);
          },
          onFocus: (p) => {
            m && (p.currentTarget.style.backgroundColor = m);
          },
          onBlur: (p) => {
            l?.primaryColor && (p.currentTarget.style.backgroundColor = l.primaryColor);
          },
          children: [
            r ? /* @__PURE__ */ X.jsx(eh, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ X.jsx(O1, { className: "h-4 w-4 text-white" }),
            /* @__PURE__ */ X.jsx("span", { className: "sr-only", children: "Send message" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ X.jsx("div", { className: "mt-2 text-xs text-gray-500 dark:text-gray-400 text-center", children: "Press Enter to send, Shift + Enter for new line" })
  ] }) });
}
function Fk() {
  return /* @__PURE__ */ X.jsxs("div", { className: "flex gap-3 max-w-4xl mx-auto px-4 py-6", children: [
    /* @__PURE__ */ X.jsx("div", { className: "flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center", children: /* @__PURE__ */ X.jsx(tb, { className: "w-4 h-4" }) }),
    /* @__PURE__ */ X.jsx("div", { className: "flex-1", children: /* @__PURE__ */ X.jsx("div", { className: "inline-block bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-md", children: /* @__PURE__ */ X.jsxs("div", { className: "flex space-x-1", children: [
      /* @__PURE__ */ X.jsx("div", { className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce" }),
      /* @__PURE__ */ X.jsx(
        "div",
        {
          className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce",
          style: { animationDelay: "0.1s" }
        }
      ),
      /* @__PURE__ */ X.jsx(
        "div",
        {
          className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce",
          style: { animationDelay: "0.2s" }
        }
      )
    ] }) }) })
  ] });
}
function Qk({ theme: n, toggleTheme: r, isThemeChanging: i }) {
  return /* @__PURE__ */ X.jsxs(
    Al,
    {
      variant: "ghost",
      size: "sm",
      onClick: r,
      disabled: i,
      className: "h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
      children: [
        i ? /* @__PURE__ */ X.jsx(eh, { className: "h-4 w-4 text-gray-600 dark:text-gray-400 animate-spin" }) : n === "light" ? /* @__PURE__ */ X.jsx(T1, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" }) : /* @__PURE__ */ X.jsx(R1, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" }),
        /* @__PURE__ */ X.jsx("span", { className: "sr-only", children: i ? "Changing theme..." : "Toggle theme" })
      ]
    }
  );
}
const Kk = (n) => {
  let r;
  return n ? r = n : typeof fetch > "u" ? r = (...i) => Promise.resolve().then(() => fa).then(({ default: l }) => l(...i)) : r = fetch, (...i) => r(...i);
};
class gh extends Error {
  constructor(r, i = "FunctionsError", l) {
    super(r), this.name = i, this.context = l;
  }
}
class Xk extends gh {
  constructor(r) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", r);
  }
}
class dy extends gh {
  constructor(r) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", r);
  }
}
class py extends gh {
  constructor(r) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", r);
  }
}
var Bf;
(function(n) {
  n.Any = "any", n.ApNortheast1 = "ap-northeast-1", n.ApNortheast2 = "ap-northeast-2", n.ApSouth1 = "ap-south-1", n.ApSoutheast1 = "ap-southeast-1", n.ApSoutheast2 = "ap-southeast-2", n.CaCentral1 = "ca-central-1", n.EuCentral1 = "eu-central-1", n.EuWest1 = "eu-west-1", n.EuWest2 = "eu-west-2", n.EuWest3 = "eu-west-3", n.SaEast1 = "sa-east-1", n.UsEast1 = "us-east-1", n.UsWest1 = "us-west-1", n.UsWest2 = "us-west-2";
})(Bf || (Bf = {}));
var Zk = function(n, r, i, l) {
  function o(u) {
    return u instanceof i ? u : new i(function(c) {
      c(u);
    });
  }
  return new (i || (i = Promise))(function(u, c) {
    function h(g) {
      try {
        p(l.next(g));
      } catch (y) {
        c(y);
      }
    }
    function m(g) {
      try {
        p(l.throw(g));
      } catch (y) {
        c(y);
      }
    }
    function p(g) {
      g.done ? u(g.value) : o(g.value).then(h, m);
    }
    p((l = l.apply(n, r || [])).next());
  });
};
class Jk {
  constructor(r, { headers: i = {}, customFetch: l, region: o = Bf.Any } = {}) {
    this.url = r, this.headers = i, this.region = o, this.fetch = Kk(l);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   */
  setAuth(r) {
    this.headers.Authorization = `Bearer ${r}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   */
  invoke(r, i = {}) {
    var l;
    return Zk(this, void 0, void 0, function* () {
      try {
        const { headers: o, method: u, body: c } = i;
        let h = {}, { region: m } = i;
        m || (m = this.region);
        const p = new URL(`${this.url}/${r}`);
        m && m !== "any" && (h["x-region"] = m, p.searchParams.set("forceFunctionRegion", m));
        let g;
        c && (o && !Object.prototype.hasOwnProperty.call(o, "Content-Type") || !o) && (typeof Blob < "u" && c instanceof Blob || c instanceof ArrayBuffer ? (h["Content-Type"] = "application/octet-stream", g = c) : typeof c == "string" ? (h["Content-Type"] = "text/plain", g = c) : typeof FormData < "u" && c instanceof FormData ? g = c : (h["Content-Type"] = "application/json", g = JSON.stringify(c)));
        const y = yield this.fetch(p.toString(), {
          method: u || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, h), this.headers), o),
          body: g
        }).catch((A) => {
          throw new Xk(A);
        }), S = y.headers.get("x-relay-error");
        if (S && S === "true")
          throw new dy(y);
        if (!y.ok)
          throw new py(y);
        let v = ((l = y.headers.get("Content-Type")) !== null && l !== void 0 ? l : "text/plain").split(";")[0].trim(), k;
        return v === "application/json" ? k = yield y.json() : v === "application/octet-stream" ? k = yield y.blob() : v === "text/event-stream" ? k = y : v === "multipart/form-data" ? k = yield y.formData() : k = yield y.text(), { data: k, error: null, response: y };
      } catch (o) {
        return {
          data: null,
          error: o,
          response: o instanceof py || o instanceof dy ? o.context : void 0
        };
      }
    });
  }
}
var ht = {}, Yi = {}, Fi = {}, Qi = {}, Ki = {}, Xi = {}, Wk = function() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}, la = Wk();
const eT = la.fetch, Xb = la.fetch.bind(la), Zb = la.Headers, tT = la.Request, nT = la.Response, fa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Headers: Zb,
  Request: tT,
  Response: nT,
  default: Xb,
  fetch: eT
}, Symbol.toStringTag, { value: "Module" })), rT = /* @__PURE__ */ a1(fa);
var no = {}, my;
function Jb() {
  if (my) return no;
  my = 1, Object.defineProperty(no, "__esModule", { value: !0 });
  class n extends Error {
    constructor(i) {
      super(i.message), this.name = "PostgrestError", this.details = i.details, this.hint = i.hint, this.code = i.code;
    }
  }
  return no.default = n, no;
}
var gy;
function Wb() {
  if (gy) return Xi;
  gy = 1;
  var n = Xi && Xi.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(Xi, "__esModule", { value: !0 });
  const r = n(rT), i = n(Jb());
  class l {
    constructor(u) {
      this.shouldThrowOnError = !1, this.method = u.method, this.url = u.url, this.headers = u.headers, this.schema = u.schema, this.body = u.body, this.shouldThrowOnError = u.shouldThrowOnError, this.signal = u.signal, this.isMaybeSingle = u.isMaybeSingle, u.fetch ? this.fetch = u.fetch : typeof fetch > "u" ? this.fetch = r.default : this.fetch = fetch;
    }
    /**
     * If there's an error with the query, throwOnError will reject the promise by
     * throwing the error instead of returning it as part of a successful response.
     *
     * {@link https://github.com/supabase/supabase-js/issues/92}
     */
    throwOnError() {
      return this.shouldThrowOnError = !0, this;
    }
    /**
     * Set an HTTP header for the request.
     */
    setHeader(u, c) {
      return this.headers = Object.assign({}, this.headers), this.headers[u] = c, this;
    }
    then(u, c) {
      this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema), this.method !== "GET" && this.method !== "HEAD" && (this.headers["Content-Type"] = "application/json");
      const h = this.fetch;
      let m = h(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal
      }).then(async (p) => {
        var g, y, S;
        let v = null, k = null, A = null, O = p.status, j = p.statusText;
        if (p.ok) {
          if (this.method !== "HEAD") {
            const J = await p.text();
            J === "" || (this.headers.Accept === "text/csv" || this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? k = J : k = JSON.parse(J));
          }
          const D = (g = this.headers.Prefer) === null || g === void 0 ? void 0 : g.match(/count=(exact|planned|estimated)/), I = (y = p.headers.get("content-range")) === null || y === void 0 ? void 0 : y.split("/");
          D && I && I.length > 1 && (A = parseInt(I[1])), this.isMaybeSingle && this.method === "GET" && Array.isArray(k) && (k.length > 1 ? (v = {
            // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
            code: "PGRST116",
            details: `Results contain ${k.length} rows, application/vnd.pgrst.object+json requires 1 row`,
            hint: null,
            message: "JSON object requested, multiple (or no) rows returned"
          }, k = null, A = null, O = 406, j = "Not Acceptable") : k.length === 1 ? k = k[0] : k = null);
        } else {
          const D = await p.text();
          try {
            v = JSON.parse(D), Array.isArray(v) && p.status === 404 && (k = [], v = null, O = 200, j = "OK");
          } catch {
            p.status === 404 && D === "" ? (O = 204, j = "No Content") : v = {
              message: D
            };
          }
          if (v && this.isMaybeSingle && (!((S = v?.details) === null || S === void 0) && S.includes("0 rows")) && (v = null, O = 200, j = "OK"), v && this.shouldThrowOnError)
            throw new i.default(v);
        }
        return {
          error: v,
          data: k,
          count: A,
          status: O,
          statusText: j
        };
      });
      return this.shouldThrowOnError || (m = m.catch((p) => {
        var g, y, S;
        return {
          error: {
            message: `${(g = p?.name) !== null && g !== void 0 ? g : "FetchError"}: ${p?.message}`,
            details: `${(y = p?.stack) !== null && y !== void 0 ? y : ""}`,
            hint: "",
            code: `${(S = p?.code) !== null && S !== void 0 ? S : ""}`
          },
          data: null,
          count: null,
          status: 0,
          statusText: ""
        };
      })), m.then(u, c);
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */
    returns() {
      return this;
    }
    /**
     * Override the type of the returned `data` field in the response.
     *
     * @typeParam NewResult - The new type to cast the response data to
     * @typeParam Options - Optional type configuration (defaults to { merge: true })
     * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
     * @example
     * ```typescript
     * // Merge with existing types (default behavior)
     * const query = supabase
     *   .from('users')
     *   .select()
     *   .overrideTypes<{ custom_field: string }>()
     *
     * // Replace existing types completely
     * const replaceQuery = supabase
     *   .from('users')
     *   .select()
     *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
     * ```
     * @returns A PostgrestBuilder instance with the new type
     */
    overrideTypes() {
      return this;
    }
  }
  return Xi.default = l, Xi;
}
var yy;
function e0() {
  if (yy) return Ki;
  yy = 1;
  var n = Ki && Ki.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(Ki, "__esModule", { value: !0 });
  const r = n(Wb());
  class i extends r.default {
    /**
     * Perform a SELECT on the query result.
     *
     * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
     * return modified rows. By calling this method, modified rows are returned in
     * `data`.
     *
     * @param columns - The columns to retrieve, separated by commas
     */
    select(o) {
      let u = !1;
      const c = (o ?? "*").split("").map((h) => /\s/.test(h) && !u ? "" : (h === '"' && (u = !u), h)).join("");
      return this.url.searchParams.set("select", c), this.headers.Prefer && (this.headers.Prefer += ","), this.headers.Prefer += "return=representation", this;
    }
    /**
     * Order the query result by `column`.
     *
     * You can call this method multiple times to order by multiple columns.
     *
     * You can order referenced tables, but it only affects the ordering of the
     * parent table if you use `!inner` in the query.
     *
     * @param column - The column to order by
     * @param options - Named parameters
     * @param options.ascending - If `true`, the result will be in ascending order
     * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
     * `null`s appear last.
     * @param options.referencedTable - Set this to order a referenced table by
     * its columns
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */
    order(o, { ascending: u = !0, nullsFirst: c, foreignTable: h, referencedTable: m = h } = {}) {
      const p = m ? `${m}.order` : "order", g = this.url.searchParams.get(p);
      return this.url.searchParams.set(p, `${g ? `${g},` : ""}${o}.${u ? "asc" : "desc"}${c === void 0 ? "" : c ? ".nullsfirst" : ".nullslast"}`), this;
    }
    /**
     * Limit the query result by `count`.
     *
     * @param count - The maximum number of rows to return
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */
    limit(o, { foreignTable: u, referencedTable: c = u } = {}) {
      const h = typeof c > "u" ? "limit" : `${c}.limit`;
      return this.url.searchParams.set(h, `${o}`), this;
    }
    /**
     * Limit the query result by starting at an offset `from` and ending at the offset `to`.
     * Only records within this range are returned.
     * This respects the query order and if there is no order clause the range could behave unexpectedly.
     * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
     * and fourth rows of the query.
     *
     * @param from - The starting index from which to limit the result
     * @param to - The last index to which to limit the result
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */
    range(o, u, { foreignTable: c, referencedTable: h = c } = {}) {
      const m = typeof h > "u" ? "offset" : `${h}.offset`, p = typeof h > "u" ? "limit" : `${h}.limit`;
      return this.url.searchParams.set(m, `${o}`), this.url.searchParams.set(p, `${u - o + 1}`), this;
    }
    /**
     * Set the AbortSignal for the fetch request.
     *
     * @param signal - The AbortSignal to use for the fetch request
     */
    abortSignal(o) {
      return this.signal = o, this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be one row (e.g. using `.limit(1)`), otherwise this
     * returns an error.
     */
    single() {
      return this.headers.Accept = "application/vnd.pgrst.object+json", this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
     * this returns an error.
     */
    maybeSingle() {
      return this.method === "GET" ? this.headers.Accept = "application/json" : this.headers.Accept = "application/vnd.pgrst.object+json", this.isMaybeSingle = !0, this;
    }
    /**
     * Return `data` as a string in CSV format.
     */
    csv() {
      return this.headers.Accept = "text/csv", this;
    }
    /**
     * Return `data` as an object in [GeoJSON](https://geojson.org) format.
     */
    geojson() {
      return this.headers.Accept = "application/geo+json", this;
    }
    /**
     * Return `data` as the EXPLAIN plan for the query.
     *
     * You need to enable the
     * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
     * setting before using this method.
     *
     * @param options - Named parameters
     *
     * @param options.analyze - If `true`, the query will be executed and the
     * actual run time will be returned
     *
     * @param options.verbose - If `true`, the query identifier will be returned
     * and `data` will include the output columns of the query
     *
     * @param options.settings - If `true`, include information on configuration
     * parameters that affect query planning
     *
     * @param options.buffers - If `true`, include information on buffer usage
     *
     * @param options.wal - If `true`, include information on WAL record generation
     *
     * @param options.format - The format of the output, can be `"text"` (default)
     * or `"json"`
     */
    explain({ analyze: o = !1, verbose: u = !1, settings: c = !1, buffers: h = !1, wal: m = !1, format: p = "text" } = {}) {
      var g;
      const y = [
        o ? "analyze" : null,
        u ? "verbose" : null,
        c ? "settings" : null,
        h ? "buffers" : null,
        m ? "wal" : null
      ].filter(Boolean).join("|"), S = (g = this.headers.Accept) !== null && g !== void 0 ? g : "application/json";
      return this.headers.Accept = `application/vnd.pgrst.plan+${p}; for="${S}"; options=${y};`, p === "json" ? this : this;
    }
    /**
     * Rollback the query.
     *
     * `data` will still be returned, but the query is not committed.
     */
    rollback() {
      var o;
      return ((o = this.headers.Prefer) !== null && o !== void 0 ? o : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback", this;
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */
    returns() {
      return this;
    }
  }
  return Ki.default = i, Ki;
}
var by;
function yh() {
  if (by) return Qi;
  by = 1;
  var n = Qi && Qi.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(Qi, "__esModule", { value: !0 });
  const r = n(e0());
  class i extends r.default {
    /**
     * Match only rows where `column` is equal to `value`.
     *
     * To check if the value of `column` is NULL, you should use `.is()` instead.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    eq(o, u) {
      return this.url.searchParams.append(o, `eq.${u}`), this;
    }
    /**
     * Match only rows where `column` is not equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    neq(o, u) {
      return this.url.searchParams.append(o, `neq.${u}`), this;
    }
    /**
     * Match only rows where `column` is greater than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    gt(o, u) {
      return this.url.searchParams.append(o, `gt.${u}`), this;
    }
    /**
     * Match only rows where `column` is greater than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    gte(o, u) {
      return this.url.searchParams.append(o, `gte.${u}`), this;
    }
    /**
     * Match only rows where `column` is less than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    lt(o, u) {
      return this.url.searchParams.append(o, `lt.${u}`), this;
    }
    /**
     * Match only rows where `column` is less than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    lte(o, u) {
      return this.url.searchParams.append(o, `lte.${u}`), this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-sensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */
    like(o, u) {
      return this.url.searchParams.append(o, `like.${u}`), this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    likeAllOf(o, u) {
      return this.url.searchParams.append(o, `like(all).{${u.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    likeAnyOf(o, u) {
      return this.url.searchParams.append(o, `like(any).{${u.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-insensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */
    ilike(o, u) {
      return this.url.searchParams.append(o, `ilike.${u}`), this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    ilikeAllOf(o, u) {
      return this.url.searchParams.append(o, `ilike(all).{${u.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    ilikeAnyOf(o, u) {
      return this.url.searchParams.append(o, `ilike(any).{${u.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` IS `value`.
     *
     * For non-boolean columns, this is only relevant for checking if the value of
     * `column` is NULL by setting `value` to `null`.
     *
     * For boolean columns, you can also set `value` to `true` or `false` and it
     * will behave the same way as `.eq()`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    is(o, u) {
      return this.url.searchParams.append(o, `is.${u}`), this;
    }
    /**
     * Match only rows where `column` is included in the `values` array.
     *
     * @param column - The column to filter on
     * @param values - The values array to filter with
     */
    in(o, u) {
      const c = Array.from(new Set(u)).map((h) => typeof h == "string" && new RegExp("[,()]").test(h) ? `"${h}"` : `${h}`).join(",");
      return this.url.searchParams.append(o, `in.(${c})`), this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * `column` contains every element appearing in `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */
    contains(o, u) {
      return typeof u == "string" ? this.url.searchParams.append(o, `cs.${u}`) : Array.isArray(u) ? this.url.searchParams.append(o, `cs.{${u.join(",")}}`) : this.url.searchParams.append(o, `cs.${JSON.stringify(u)}`), this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * every element appearing in `column` is contained by `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */
    containedBy(o, u) {
      return typeof u == "string" ? this.url.searchParams.append(o, `cd.${u}`) : Array.isArray(u) ? this.url.searchParams.append(o, `cd.{${u.join(",")}}`) : this.url.searchParams.append(o, `cd.${JSON.stringify(u)}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is greater than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeGt(o, u) {
      return this.url.searchParams.append(o, `sr.${u}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or greater than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeGte(o, u) {
      return this.url.searchParams.append(o, `nxl.${u}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is less than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeLt(o, u) {
      return this.url.searchParams.append(o, `sl.${u}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or less than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeLte(o, u) {
      return this.url.searchParams.append(o, `nxr.${u}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where `column` is
     * mutually exclusive to `range` and there can be no element between the two
     * ranges.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeAdjacent(o, u) {
      return this.url.searchParams.append(o, `adj.${u}`), this;
    }
    /**
     * Only relevant for array and range columns. Match only rows where
     * `column` and `value` have an element in common.
     *
     * @param column - The array or range column to filter on
     * @param value - The array or range value to filter with
     */
    overlaps(o, u) {
      return typeof u == "string" ? this.url.searchParams.append(o, `ov.${u}`) : this.url.searchParams.append(o, `ov.{${u.join(",")}}`), this;
    }
    /**
     * Only relevant for text and tsvector columns. Match only rows where
     * `column` matches the query string in `query`.
     *
     * @param column - The text or tsvector column to filter on
     * @param query - The query text to match with
     * @param options - Named parameters
     * @param options.config - The text search configuration to use
     * @param options.type - Change how the `query` text is interpreted
     */
    textSearch(o, u, { config: c, type: h } = {}) {
      let m = "";
      h === "plain" ? m = "pl" : h === "phrase" ? m = "ph" : h === "websearch" && (m = "w");
      const p = c === void 0 ? "" : `(${c})`;
      return this.url.searchParams.append(o, `${m}fts${p}.${u}`), this;
    }
    /**
     * Match only rows where each column in `query` keys is equal to its
     * associated value. Shorthand for multiple `.eq()`s.
     *
     * @param query - The object to filter with, with column names as keys mapped
     * to their filter values
     */
    match(o) {
      return Object.entries(o).forEach(([u, c]) => {
        this.url.searchParams.append(u, `eq.${c}`);
      }), this;
    }
    /**
     * Match only rows which doesn't satisfy the filter.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to be negated to filter with, following
     * PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */
    not(o, u, c) {
      return this.url.searchParams.append(o, `not.${u}.${c}`), this;
    }
    /**
     * Match only rows which satisfy at least one of the filters.
     *
     * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure it's properly sanitized.
     *
     * It's currently not possible to do an `.or()` filter across multiple tables.
     *
     * @param filters - The filters to use, following PostgREST syntax
     * @param options - Named parameters
     * @param options.referencedTable - Set this to filter on referenced tables
     * instead of the parent table
     * @param options.foreignTable - Deprecated, use `referencedTable` instead
     */
    or(o, { foreignTable: u, referencedTable: c = u } = {}) {
      const h = c ? `${c}.or` : "or";
      return this.url.searchParams.append(h, `(${o})`), this;
    }
    /**
     * Match only rows which satisfy the filter. This is an escape hatch - you
     * should use the specific filter methods wherever possible.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to filter with, following PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */
    filter(o, u, c) {
      return this.url.searchParams.append(o, `${u}.${c}`), this;
    }
  }
  return Qi.default = i, Qi;
}
var vy;
function t0() {
  if (vy) return Fi;
  vy = 1;
  var n = Fi && Fi.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(Fi, "__esModule", { value: !0 });
  const r = n(yh());
  class i {
    constructor(o, { headers: u = {}, schema: c, fetch: h }) {
      this.url = o, this.headers = u, this.schema = c, this.fetch = h;
    }
    /**
     * Perform a SELECT query on the table or view.
     *
     * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
     *
     * @param options - Named parameters
     *
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     *
     * @param options.count - Count algorithm to use to count rows in the table or view.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    select(o, { head: u = !1, count: c } = {}) {
      const h = u ? "HEAD" : "GET";
      let m = !1;
      const p = (o ?? "*").split("").map((g) => /\s/.test(g) && !m ? "" : (g === '"' && (m = !m), g)).join("");
      return this.url.searchParams.set("select", p), c && (this.headers.Prefer = `count=${c}`), new r.default({
        method: h,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch,
        allowEmpty: !1
      });
    }
    /**
     * Perform an INSERT into the table or view.
     *
     * By default, inserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to insert. Pass an object to insert a single row
     * or an array to insert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count inserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. Only applies for bulk
     * inserts.
     */
    insert(o, { count: u, defaultToNull: c = !0 } = {}) {
      const h = "POST", m = [];
      if (this.headers.Prefer && m.push(this.headers.Prefer), u && m.push(`count=${u}`), c || m.push("missing=default"), this.headers.Prefer = m.join(","), Array.isArray(o)) {
        const p = o.reduce((g, y) => g.concat(Object.keys(y)), []);
        if (p.length > 0) {
          const g = [...new Set(p)].map((y) => `"${y}"`);
          this.url.searchParams.set("columns", g.join(","));
        }
      }
      return new r.default({
        method: h,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: o,
        fetch: this.fetch,
        allowEmpty: !1
      });
    }
    /**
     * Perform an UPSERT on the table or view. Depending on the column(s) passed
     * to `onConflict`, `.upsert()` allows you to perform the equivalent of
     * `.insert()` if a row with the corresponding `onConflict` columns doesn't
     * exist, or if it does exist, perform an alternative action depending on
     * `ignoreDuplicates`.
     *
     * By default, upserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to upsert with. Pass an object to upsert a
     * single row or an array to upsert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
     * duplicate rows are determined. Two rows are duplicates if all the
     * `onConflict` columns are equal.
     *
     * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
     * `false`, duplicate rows are merged with existing rows.
     *
     * @param options.count - Count algorithm to use to count upserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. This only applies when
     * inserting new rows, not when merging with existing rows under
     * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
     */
    upsert(o, { onConflict: u, ignoreDuplicates: c = !1, count: h, defaultToNull: m = !0 } = {}) {
      const p = "POST", g = [`resolution=${c ? "ignore" : "merge"}-duplicates`];
      if (u !== void 0 && this.url.searchParams.set("on_conflict", u), this.headers.Prefer && g.push(this.headers.Prefer), h && g.push(`count=${h}`), m || g.push("missing=default"), this.headers.Prefer = g.join(","), Array.isArray(o)) {
        const y = o.reduce((S, v) => S.concat(Object.keys(v)), []);
        if (y.length > 0) {
          const S = [...new Set(y)].map((v) => `"${v}"`);
          this.url.searchParams.set("columns", S.join(","));
        }
      }
      return new r.default({
        method: p,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: o,
        fetch: this.fetch,
        allowEmpty: !1
      });
    }
    /**
     * Perform an UPDATE on the table or view.
     *
     * By default, updated rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param values - The values to update with
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count updated rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    update(o, { count: u } = {}) {
      const c = "PATCH", h = [];
      return this.headers.Prefer && h.push(this.headers.Prefer), u && h.push(`count=${u}`), this.headers.Prefer = h.join(","), new r.default({
        method: c,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: o,
        fetch: this.fetch,
        allowEmpty: !1
      });
    }
    /**
     * Perform a DELETE on the table or view.
     *
     * By default, deleted rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count deleted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    delete({ count: o } = {}) {
      const u = "DELETE", c = [];
      return o && c.push(`count=${o}`), this.headers.Prefer && c.unshift(this.headers.Prefer), this.headers.Prefer = c.join(","), new r.default({
        method: u,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch,
        allowEmpty: !1
      });
    }
  }
  return Fi.default = i, Fi;
}
var wl = {}, Sl = {}, wy;
function iT() {
  return wy || (wy = 1, Object.defineProperty(Sl, "__esModule", { value: !0 }), Sl.version = void 0, Sl.version = "0.0.0-automated"), Sl;
}
var Sy;
function aT() {
  if (Sy) return wl;
  Sy = 1, Object.defineProperty(wl, "__esModule", { value: !0 }), wl.DEFAULT_HEADERS = void 0;
  const n = iT();
  return wl.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${n.version}` }, wl;
}
var xy;
function lT() {
  if (xy) return Yi;
  xy = 1;
  var n = Yi && Yi.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(Yi, "__esModule", { value: !0 });
  const r = n(t0()), i = n(yh()), l = aT();
  class o {
    // TODO: Add back shouldThrowOnError once we figure out the typings
    /**
     * Creates a PostgREST client.
     *
     * @param url - URL of the PostgREST endpoint
     * @param options - Named parameters
     * @param options.headers - Custom headers
     * @param options.schema - Postgres schema to switch to
     * @param options.fetch - Custom fetch
     */
    constructor(c, { headers: h = {}, schema: m, fetch: p } = {}) {
      this.url = c, this.headers = Object.assign(Object.assign({}, l.DEFAULT_HEADERS), h), this.schemaName = m, this.fetch = p;
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */
    from(c) {
      const h = new URL(`${this.url}/${c}`);
      return new r.default(h, {
        headers: Object.assign({}, this.headers),
        schema: this.schemaName,
        fetch: this.fetch
      });
    }
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */
    schema(c) {
      return new o(this.url, {
        headers: this.headers,
        schema: c,
        fetch: this.fetch
      });
    }
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.get - When set to `true`, the function will be called with
     * read-only access mode.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    rpc(c, h = {}, { head: m = !1, get: p = !1, count: g } = {}) {
      let y;
      const S = new URL(`${this.url}/rpc/${c}`);
      let v;
      m || p ? (y = m ? "HEAD" : "GET", Object.entries(h).filter(([A, O]) => O !== void 0).map(([A, O]) => [A, Array.isArray(O) ? `{${O.join(",")}}` : `${O}`]).forEach(([A, O]) => {
        S.searchParams.append(A, O);
      })) : (y = "POST", v = h);
      const k = Object.assign({}, this.headers);
      return g && (k.Prefer = `count=${g}`), new i.default({
        method: y,
        url: S,
        headers: k,
        schema: this.schemaName,
        body: v,
        fetch: this.fetch,
        allowEmpty: !1
      });
    }
  }
  return Yi.default = o, Yi;
}
var _y;
function sT() {
  if (_y) return ht;
  _y = 1;
  var n = ht && ht.__importDefault || function(h) {
    return h && h.__esModule ? h : { default: h };
  };
  Object.defineProperty(ht, "__esModule", { value: !0 }), ht.PostgrestError = ht.PostgrestBuilder = ht.PostgrestTransformBuilder = ht.PostgrestFilterBuilder = ht.PostgrestQueryBuilder = ht.PostgrestClient = void 0;
  const r = n(lT());
  ht.PostgrestClient = r.default;
  const i = n(t0());
  ht.PostgrestQueryBuilder = i.default;
  const l = n(yh());
  ht.PostgrestFilterBuilder = l.default;
  const o = n(e0());
  ht.PostgrestTransformBuilder = o.default;
  const u = n(Wb());
  ht.PostgrestBuilder = u.default;
  const c = n(Jb());
  return ht.PostgrestError = c.default, ht.default = {
    PostgrestClient: r.default,
    PostgrestQueryBuilder: i.default,
    PostgrestFilterBuilder: l.default,
    PostgrestTransformBuilder: o.default,
    PostgrestBuilder: u.default,
    PostgrestError: c.default
  }, ht;
}
var oT = sT();
const uT = /* @__PURE__ */ Wf(oT), {
  PostgrestClient: cT,
  PostgrestQueryBuilder: B2,
  PostgrestFilterBuilder: L2,
  PostgrestTransformBuilder: q2,
  PostgrestBuilder: H2,
  PostgrestError: P2
} = uT;
function fT() {
  if (typeof WebSocket < "u")
    return WebSocket;
  if (typeof global.WebSocket < "u")
    return global.WebSocket;
  if (typeof window.WebSocket < "u")
    return window.WebSocket;
  if (typeof self.WebSocket < "u")
    return self.WebSocket;
  throw new Error("`WebSocket` is not supported in this environment");
}
const hT = fT(), dT = "2.11.15", pT = `realtime-js/${dT}`, mT = "1.0.0", n0 = 1e4, gT = 1e3;
var Ol;
(function(n) {
  n[n.connecting = 0] = "connecting", n[n.open = 1] = "open", n[n.closing = 2] = "closing", n[n.closed = 3] = "closed";
})(Ol || (Ol = {}));
var wt;
(function(n) {
  n.closed = "closed", n.errored = "errored", n.joined = "joined", n.joining = "joining", n.leaving = "leaving";
})(wt || (wt = {}));
var mn;
(function(n) {
  n.close = "phx_close", n.error = "phx_error", n.join = "phx_join", n.reply = "phx_reply", n.leave = "phx_leave", n.access_token = "access_token";
})(mn || (mn = {}));
var Lf;
(function(n) {
  n.websocket = "websocket";
})(Lf || (Lf = {}));
var Xr;
(function(n) {
  n.Connecting = "connecting", n.Open = "open", n.Closing = "closing", n.Closed = "closed";
})(Xr || (Xr = {}));
class yT {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(r, i) {
    return r.constructor === ArrayBuffer ? i(this._binaryDecode(r)) : i(typeof r == "string" ? JSON.parse(r) : {});
  }
  _binaryDecode(r) {
    const i = new DataView(r), l = new TextDecoder();
    return this._decodeBroadcast(r, i, l);
  }
  _decodeBroadcast(r, i, l) {
    const o = i.getUint8(1), u = i.getUint8(2);
    let c = this.HEADER_LENGTH + 2;
    const h = l.decode(r.slice(c, c + o));
    c = c + o;
    const m = l.decode(r.slice(c, c + u));
    c = c + u;
    const p = JSON.parse(l.decode(r.slice(c, r.byteLength)));
    return { ref: null, topic: h, event: m, payload: p };
  }
}
class r0 {
  constructor(r, i) {
    this.callback = r, this.timerCalc = i, this.timer = void 0, this.tries = 0, this.callback = r, this.timerCalc = i;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer);
  }
  // Cancels any previous scheduleTimeout and schedules callback
  scheduleTimeout() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      this.tries = this.tries + 1, this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}
var Ie;
(function(n) {
  n.abstime = "abstime", n.bool = "bool", n.date = "date", n.daterange = "daterange", n.float4 = "float4", n.float8 = "float8", n.int2 = "int2", n.int4 = "int4", n.int4range = "int4range", n.int8 = "int8", n.int8range = "int8range", n.json = "json", n.jsonb = "jsonb", n.money = "money", n.numeric = "numeric", n.oid = "oid", n.reltime = "reltime", n.text = "text", n.time = "time", n.timestamp = "timestamp", n.timestamptz = "timestamptz", n.timetz = "timetz", n.tsrange = "tsrange", n.tstzrange = "tstzrange";
})(Ie || (Ie = {}));
const Ey = (n, r, i = {}) => {
  var l;
  const o = (l = i.skipTypes) !== null && l !== void 0 ? l : [];
  return Object.keys(r).reduce((u, c) => (u[c] = bT(c, n, r, o), u), {});
}, bT = (n, r, i, l) => {
  const o = r.find((h) => h.name === n), u = o?.type, c = i[n];
  return u && !l.includes(u) ? i0(u, c) : qf(c);
}, i0 = (n, r) => {
  if (n.charAt(0) === "_") {
    const i = n.slice(1, n.length);
    return xT(r, i);
  }
  switch (n) {
    case Ie.bool:
      return vT(r);
    case Ie.float4:
    case Ie.float8:
    case Ie.int2:
    case Ie.int4:
    case Ie.int8:
    case Ie.numeric:
    case Ie.oid:
      return wT(r);
    case Ie.json:
    case Ie.jsonb:
      return ST(r);
    case Ie.timestamp:
      return _T(r);
    // Format to be consistent with PostgREST
    case Ie.abstime:
    // To allow users to cast it based on Timezone
    case Ie.date:
    // To allow users to cast it based on Timezone
    case Ie.daterange:
    case Ie.int4range:
    case Ie.int8range:
    case Ie.money:
    case Ie.reltime:
    // To allow users to cast it based on Timezone
    case Ie.text:
    case Ie.time:
    // To allow users to cast it based on Timezone
    case Ie.timestamptz:
    // To allow users to cast it based on Timezone
    case Ie.timetz:
    // To allow users to cast it based on Timezone
    case Ie.tsrange:
    case Ie.tstzrange:
      return qf(r);
    default:
      return qf(r);
  }
}, qf = (n) => n, vT = (n) => {
  switch (n) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return n;
  }
}, wT = (n) => {
  if (typeof n == "string") {
    const r = parseFloat(n);
    if (!Number.isNaN(r))
      return r;
  }
  return n;
}, ST = (n) => {
  if (typeof n == "string")
    try {
      return JSON.parse(n);
    } catch (r) {
      return console.log(`JSON parse error: ${r}`), n;
    }
  return n;
}, xT = (n, r) => {
  if (typeof n != "string")
    return n;
  const i = n.length - 1, l = n[i];
  if (n[0] === "{" && l === "}") {
    let u;
    const c = n.slice(1, i);
    try {
      u = JSON.parse("[" + c + "]");
    } catch {
      u = c ? c.split(",") : [];
    }
    return u.map((h) => i0(r, h));
  }
  return n;
}, _T = (n) => typeof n == "string" ? n.replace(" ", "T") : n, a0 = (n) => {
  let r = n;
  return r = r.replace(/^ws/i, "http"), r = r.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""), r.replace(/\/+$/, "");
};
class df {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(r, i, l = {}, o = n0) {
    this.channel = r, this.event = i, this.payload = l, this.timeout = o, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null;
  }
  resend(r) {
    this.timeout = r, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send();
  }
  send() {
    this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload,
      ref: this.ref,
      join_ref: this.channel._joinRef()
    }));
  }
  updatePayload(r) {
    this.payload = Object.assign(Object.assign({}, this.payload), r);
  }
  receive(r, i) {
    var l;
    return this._hasReceived(r) && i((l = this.receivedResp) === null || l === void 0 ? void 0 : l.response), this.recHooks.push({ status: r, callback: i }), this;
  }
  startTimeout() {
    if (this.timeoutTimer)
      return;
    this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
    const r = (i) => {
      this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = i, this._matchReceive(i);
    };
    this.channel._on(this.refEvent, {}, r), this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  trigger(r, i) {
    this.refEvent && this.channel._trigger(this.refEvent, { status: r, response: i });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
  }
  _matchReceive({ status: r, response: i }) {
    this.recHooks.filter((l) => l.status === r).forEach((l) => l.callback(i));
  }
  _hasReceived(r) {
    return this.receivedResp && this.receivedResp.status === r;
  }
}
var ky;
(function(n) {
  n.SYNC = "sync", n.JOIN = "join", n.LEAVE = "leave";
})(ky || (ky = {}));
class Cl {
  /**
   * Initializes the Presence.
   *
   * @param channel - The RealtimeChannel
   * @param opts - The options,
   *        for example `{events: {state: 'state', diff: 'diff'}}`
   */
  constructor(r, i) {
    this.channel = r, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.caller = {
      onJoin: () => {
      },
      onLeave: () => {
      },
      onSync: () => {
      }
    };
    const l = i?.events || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.channel._on(l.state, {}, (o) => {
      const { onJoin: u, onLeave: c, onSync: h } = this.caller;
      this.joinRef = this.channel._joinRef(), this.state = Cl.syncState(this.state, o, u, c), this.pendingDiffs.forEach((m) => {
        this.state = Cl.syncDiff(this.state, m, u, c);
      }), this.pendingDiffs = [], h();
    }), this.channel._on(l.diff, {}, (o) => {
      const { onJoin: u, onLeave: c, onSync: h } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(o) : (this.state = Cl.syncDiff(this.state, o, u, c), h());
    }), this.onJoin((o, u, c) => {
      this.channel._trigger("presence", {
        event: "join",
        key: o,
        currentPresences: u,
        newPresences: c
      });
    }), this.onLeave((o, u, c) => {
      this.channel._trigger("presence", {
        event: "leave",
        key: o,
        currentPresences: u,
        leftPresences: c
      });
    }), this.onSync(() => {
      this.channel._trigger("presence", { event: "sync" });
    });
  }
  /**
   * Used to sync the list of presences on the server with the
   * client's state.
   *
   * An optional `onJoin` and `onLeave` callback can be provided to
   * react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @internal
   */
  static syncState(r, i, l, o) {
    const u = this.cloneDeep(r), c = this.transformState(i), h = {}, m = {};
    return this.map(u, (p, g) => {
      c[p] || (m[p] = g);
    }), this.map(c, (p, g) => {
      const y = u[p];
      if (y) {
        const S = g.map((O) => O.presence_ref), v = y.map((O) => O.presence_ref), k = g.filter((O) => v.indexOf(O.presence_ref) < 0), A = y.filter((O) => S.indexOf(O.presence_ref) < 0);
        k.length > 0 && (h[p] = k), A.length > 0 && (m[p] = A);
      } else
        h[p] = g;
    }), this.syncDiff(u, { joins: h, leaves: m }, l, o);
  }
  /**
   * Used to sync a diff of presence join and leave events from the
   * server, as they happen.
   *
   * Like `syncState`, `syncDiff` accepts optional `onJoin` and
   * `onLeave` callbacks to react to a user joining or leaving from a
   * device.
   *
   * @internal
   */
  static syncDiff(r, i, l, o) {
    const { joins: u, leaves: c } = {
      joins: this.transformState(i.joins),
      leaves: this.transformState(i.leaves)
    };
    return l || (l = () => {
    }), o || (o = () => {
    }), this.map(u, (h, m) => {
      var p;
      const g = (p = r[h]) !== null && p !== void 0 ? p : [];
      if (r[h] = this.cloneDeep(m), g.length > 0) {
        const y = r[h].map((v) => v.presence_ref), S = g.filter((v) => y.indexOf(v.presence_ref) < 0);
        r[h].unshift(...S);
      }
      l(h, g, m);
    }), this.map(c, (h, m) => {
      let p = r[h];
      if (!p)
        return;
      const g = m.map((y) => y.presence_ref);
      p = p.filter((y) => g.indexOf(y.presence_ref) < 0), r[h] = p, o(h, p, m), p.length === 0 && delete r[h];
    }), r;
  }
  /** @internal */
  static map(r, i) {
    return Object.getOwnPropertyNames(r).map((l) => i(l, r[l]));
  }
  /**
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   * @internal
   */
  static transformState(r) {
    return r = this.cloneDeep(r), Object.getOwnPropertyNames(r).reduce((i, l) => {
      const o = r[l];
      return "metas" in o ? i[l] = o.metas.map((u) => (u.presence_ref = u.phx_ref, delete u.phx_ref, delete u.phx_ref_prev, u)) : i[l] = o, i;
    }, {});
  }
  /** @internal */
  static cloneDeep(r) {
    return JSON.parse(JSON.stringify(r));
  }
  /** @internal */
  onJoin(r) {
    this.caller.onJoin = r;
  }
  /** @internal */
  onLeave(r) {
    this.caller.onLeave = r;
  }
  /** @internal */
  onSync(r) {
    this.caller.onSync = r;
  }
  /** @internal */
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var Ty;
(function(n) {
  n.ALL = "*", n.INSERT = "INSERT", n.UPDATE = "UPDATE", n.DELETE = "DELETE";
})(Ty || (Ty = {}));
var Ay;
(function(n) {
  n.BROADCAST = "broadcast", n.PRESENCE = "presence", n.POSTGRES_CHANGES = "postgres_changes", n.SYSTEM = "system";
})(Ay || (Ay = {}));
var Qn;
(function(n) {
  n.SUBSCRIBED = "SUBSCRIBED", n.TIMED_OUT = "TIMED_OUT", n.CLOSED = "CLOSED", n.CHANNEL_ERROR = "CHANNEL_ERROR";
})(Qn || (Qn = {}));
class bh {
  constructor(r, i = { config: {} }, l) {
    this.topic = r, this.params = i, this.socket = l, this.bindings = {}, this.state = wt.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = r.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "" },
      private: !1
    }, i.config), this.timeout = this.socket.timeout, this.joinPush = new df(this, mn.join, this.params, this.timeout), this.rejoinTimer = new r0(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = wt.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((o) => o.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = wt.closed, this.socket._remove(this);
    }), this._onError((o) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, o), this.state = wt.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = wt.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on(mn.reply, {}, (o, u) => {
      this._trigger(this._replyEventName(u), o);
    }), this.presence = new Cl(this), this.broadcastEndpointURL = a0(this.socket.endPoint) + "/api/broadcast", this.private = this.params.config.private || !1;
  }
  /** Subscribe registers your client with the server */
  subscribe(r, i = this.timeout) {
    var l, o;
    if (this.socket.isConnected() || this.socket.connect(), this.state == wt.closed) {
      const { config: { broadcast: u, presence: c, private: h } } = this.params;
      this._onError((g) => r?.(Qn.CHANNEL_ERROR, g)), this._onClose(() => r?.(Qn.CLOSED));
      const m = {}, p = {
        broadcast: u,
        presence: c,
        postgres_changes: (o = (l = this.bindings.postgres_changes) === null || l === void 0 ? void 0 : l.map((g) => g.filter)) !== null && o !== void 0 ? o : [],
        private: h
      };
      this.socket.accessTokenValue && (m.access_token = this.socket.accessTokenValue), this.updateJoinPayload(Object.assign({ config: p }, m)), this.joinedOnce = !0, this._rejoin(i), this.joinPush.receive("ok", async ({ postgres_changes: g }) => {
        var y;
        if (this.socket.setAuth(), g === void 0) {
          r?.(Qn.SUBSCRIBED);
          return;
        } else {
          const S = this.bindings.postgres_changes, v = (y = S?.length) !== null && y !== void 0 ? y : 0, k = [];
          for (let A = 0; A < v; A++) {
            const O = S[A], { filter: { event: j, schema: Y, table: D, filter: I } } = O, J = g && g[A];
            if (J && J.event === j && J.schema === Y && J.table === D && J.filter === I)
              k.push(Object.assign(Object.assign({}, O), { id: J.id }));
            else {
              this.unsubscribe(), this.state = wt.errored, r?.(Qn.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = k, r && r(Qn.SUBSCRIBED);
          return;
        }
      }).receive("error", (g) => {
        this.state = wt.errored, r?.(Qn.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(g).join(", ") || "error")));
      }).receive("timeout", () => {
        r?.(Qn.TIMED_OUT);
      });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(r, i = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: r
    }, i.timeout || this.timeout);
  }
  async untrack(r = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, r);
  }
  on(r, i, l) {
    return this._on(r, i, l);
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   */
  async send(r, i = {}) {
    var l, o;
    if (!this._canPush() && r.type === "broadcast") {
      const { event: u, payload: c } = r, m = {
        method: "POST",
        headers: {
          Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: u,
              payload: c,
              private: this.private
            }
          ]
        })
      };
      try {
        const p = await this._fetchWithTimeout(this.broadcastEndpointURL, m, (l = i.timeout) !== null && l !== void 0 ? l : this.timeout);
        return await ((o = p.body) === null || o === void 0 ? void 0 : o.cancel()), p.ok ? "ok" : "error";
      } catch (p) {
        return p.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((u) => {
        var c, h, m;
        const p = this._push(r.type, r, i.timeout || this.timeout);
        r.type === "broadcast" && !(!((m = (h = (c = this.params) === null || c === void 0 ? void 0 : c.config) === null || h === void 0 ? void 0 : h.broadcast) === null || m === void 0) && m.ack) && u("ok"), p.receive("ok", () => u("ok")), p.receive("error", () => u("error")), p.receive("timeout", () => u("timed out"));
      });
  }
  updateJoinPayload(r) {
    this.joinPush.updatePayload(r);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   */
  unsubscribe(r = this.timeout) {
    this.state = wt.leaving;
    const i = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger(mn.close, "leave", this._joinRef());
    };
    this.joinPush.destroy();
    let l = null;
    return new Promise((o) => {
      l = new df(this, mn.leave, {}, r), l.receive("ok", () => {
        i(), o("ok");
      }).receive("timeout", () => {
        i(), o("timed out");
      }).receive("error", () => {
        o("error");
      }), l.send(), this._canPush() || l.trigger("ok", {});
    }).finally(() => {
      l?.destroy();
    });
  }
  /**
   * Teardown the channel.
   *
   * Destroys and stops related timers.
   */
  teardown() {
    this.pushBuffer.forEach((r) => r.destroy()), this.rejoinTimer && clearTimeout(this.rejoinTimer.timer), this.joinPush.destroy();
  }
  /** @internal */
  async _fetchWithTimeout(r, i, l) {
    const o = new AbortController(), u = setTimeout(() => o.abort(), l), c = await this.socket.fetch(r, Object.assign(Object.assign({}, i), { signal: o.signal }));
    return clearTimeout(u), c;
  }
  /** @internal */
  _push(r, i, l = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${r}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let o = new df(this, r, i, l);
    return this._canPush() ? o.send() : (o.startTimeout(), this.pushBuffer.push(o)), o;
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling before dispatching to the channel callbacks.
   * Must return the payload, modified or unmodified.
   *
   * @internal
   */
  _onMessage(r, i, l) {
    return i;
  }
  /** @internal */
  _isMember(r) {
    return this.topic === r;
  }
  /** @internal */
  _joinRef() {
    return this.joinPush.ref;
  }
  /** @internal */
  _trigger(r, i, l) {
    var o, u;
    const c = r.toLocaleLowerCase(), { close: h, error: m, leave: p, join: g } = mn;
    if (l && [h, m, p, g].indexOf(c) >= 0 && l !== this._joinRef())
      return;
    let S = this._onMessage(c, i, l);
    if (i && !S)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(c) ? (o = this.bindings.postgres_changes) === null || o === void 0 || o.filter((v) => {
      var k, A, O;
      return ((k = v.filter) === null || k === void 0 ? void 0 : k.event) === "*" || ((O = (A = v.filter) === null || A === void 0 ? void 0 : A.event) === null || O === void 0 ? void 0 : O.toLocaleLowerCase()) === c;
    }).map((v) => v.callback(S, l)) : (u = this.bindings[c]) === null || u === void 0 || u.filter((v) => {
      var k, A, O, j, Y, D;
      if (["broadcast", "presence", "postgres_changes"].includes(c))
        if ("id" in v) {
          const I = v.id, J = (k = v.filter) === null || k === void 0 ? void 0 : k.event;
          return I && ((A = i.ids) === null || A === void 0 ? void 0 : A.includes(I)) && (J === "*" || J?.toLocaleLowerCase() === ((O = i.data) === null || O === void 0 ? void 0 : O.type.toLocaleLowerCase()));
        } else {
          const I = (Y = (j = v?.filter) === null || j === void 0 ? void 0 : j.event) === null || Y === void 0 ? void 0 : Y.toLocaleLowerCase();
          return I === "*" || I === ((D = i?.event) === null || D === void 0 ? void 0 : D.toLocaleLowerCase());
        }
      else
        return v.type.toLocaleLowerCase() === c;
    }).map((v) => {
      if (typeof S == "object" && "ids" in S) {
        const k = S.data, { schema: A, table: O, commit_timestamp: j, type: Y, errors: D } = k;
        S = Object.assign(Object.assign({}, {
          schema: A,
          table: O,
          commit_timestamp: j,
          eventType: Y,
          new: {},
          old: {},
          errors: D
        }), this._getPayloadRecords(k));
      }
      v.callback(S, l);
    });
  }
  /** @internal */
  _isClosed() {
    return this.state === wt.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === wt.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === wt.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === wt.leaving;
  }
  /** @internal */
  _replyEventName(r) {
    return `chan_reply_${r}`;
  }
  /** @internal */
  _on(r, i, l) {
    const o = r.toLocaleLowerCase(), u = {
      type: o,
      filter: i,
      callback: l
    };
    return this.bindings[o] ? this.bindings[o].push(u) : this.bindings[o] = [u], this;
  }
  /** @internal */
  _off(r, i) {
    const l = r.toLocaleLowerCase();
    return this.bindings[l] = this.bindings[l].filter((o) => {
      var u;
      return !(((u = o.type) === null || u === void 0 ? void 0 : u.toLocaleLowerCase()) === l && bh.isEqual(o.filter, i));
    }), this;
  }
  /** @internal */
  static isEqual(r, i) {
    if (Object.keys(r).length !== Object.keys(i).length)
      return !1;
    for (const l in r)
      if (r[l] !== i[l])
        return !1;
    return !0;
  }
  /** @internal */
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(r) {
    this._on(mn.close, {}, r);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(r) {
    this._on(mn.error, {}, (i) => r(i));
  }
  /**
   * Returns `true` if the socket is connected and the channel has been joined.
   *
   * @internal
   */
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  /** @internal */
  _rejoin(r = this.timeout) {
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = wt.joining, this.joinPush.resend(r));
  }
  /** @internal */
  _getPayloadRecords(r) {
    const i = {
      new: {},
      old: {}
    };
    return (r.type === "INSERT" || r.type === "UPDATE") && (i.new = Ey(r.columns, r.record)), (r.type === "UPDATE" || r.type === "DELETE") && (i.old = Ey(r.columns, r.old_record)), i;
  }
}
const Oy = () => {
}, ET = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class kT {
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket. This can be a custom implementation
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers Deprecated: headers cannot be set on websocket connections and this option will be removed in the future.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.logLevel Sets the log level for Realtime
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   * @param options.worker Use Web Worker to set a side flow. Defaults to false.
   * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
   */
  constructor(r, i) {
    var l;
    this.accessTokenValue = null, this.apiKey = null, this.channels = new Array(), this.endPoint = "", this.httpEndpoint = "", this.headers = {}, this.params = {}, this.timeout = n0, this.heartbeatIntervalMs = 25e3, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.heartbeatCallback = Oy, this.ref = 0, this.logger = Oy, this.conn = null, this.sendBuffer = [], this.serializer = new yT(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this.accessToken = null, this._resolveFetch = (u) => {
      let c;
      return u ? c = u : typeof fetch > "u" ? c = (...h) => Promise.resolve().then(() => fa).then(({ default: m }) => m(...h)) : c = fetch, (...h) => c(...h);
    }, this.endPoint = `${r}/${Lf.websocket}`, this.httpEndpoint = a0(r), i?.transport ? this.transport = i.transport : this.transport = null, i?.params && (this.params = i.params), i?.timeout && (this.timeout = i.timeout), i?.logger && (this.logger = i.logger), (i?.logLevel || i?.log_level) && (this.logLevel = i.logLevel || i.log_level, this.params = Object.assign(Object.assign({}, this.params), { log_level: this.logLevel })), i?.heartbeatIntervalMs && (this.heartbeatIntervalMs = i.heartbeatIntervalMs);
    const o = (l = i?.params) === null || l === void 0 ? void 0 : l.apikey;
    if (o && (this.accessTokenValue = o, this.apiKey = o), this.reconnectAfterMs = i?.reconnectAfterMs ? i.reconnectAfterMs : (u) => [1e3, 2e3, 5e3, 1e4][u - 1] || 1e4, this.encode = i?.encode ? i.encode : (u, c) => c(JSON.stringify(u)), this.decode = i?.decode ? i.decode : this.serializer.decode.bind(this.serializer), this.reconnectTimer = new r0(async () => {
      this.disconnect(), this.connect();
    }, this.reconnectAfterMs), this.fetch = this._resolveFetch(i?.fetch), i?.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.worker = i?.worker || !1, this.workerUrl = i?.workerUrl;
    }
    this.accessToken = i?.accessToken || null;
  }
  /**
   * Connects the socket, unless already connected.
   */
  connect() {
    if (!this.conn) {
      if (this.transport || (this.transport = hT), !this.transport)
        throw new Error("No transport provided");
      this.conn = new this.transport(this.endpointURL()), this.setupConnection();
    }
  }
  /**
   * Returns the URL of the websocket.
   * @returns string The URL of the websocket.
   */
  endpointURL() {
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: mT }));
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   */
  disconnect(r, i) {
    this.conn && (this.conn.onclose = function() {
    }, r ? this.conn.close(r, i ?? "") : this.conn.close(), this.conn = null, this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.reset(), this.channels.forEach((l) => l.teardown()));
  }
  /**
   * Returns all created channels
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes and removes a single channel
   * @param channel A RealtimeChannel instance
   */
  async removeChannel(r) {
    const i = await r.unsubscribe();
    return this.channels.length === 0 && this.disconnect(), i;
  }
  /**
   * Unsubscribes and removes all channels
   */
  async removeAllChannels() {
    const r = await Promise.all(this.channels.map((i) => i.unsubscribe()));
    return this.channels = [], this.disconnect(), r;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden.
   */
  log(r, i, l) {
    this.logger(r, i, l);
  }
  /**
   * Returns the current state of the socket.
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case Ol.connecting:
        return Xr.Connecting;
      case Ol.open:
        return Xr.Open;
      case Ol.closing:
        return Xr.Closing;
      default:
        return Xr.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === Xr.Open;
  }
  channel(r, i = { config: {} }) {
    const l = `realtime:${r}`, o = this.getChannels().find((u) => u.topic === l);
    if (o)
      return o;
    {
      const u = new bh(`realtime:${r}`, i, this);
      return this.channels.push(u), u;
    }
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */
  push(r) {
    const { topic: i, event: l, payload: o, ref: u } = r, c = () => {
      this.encode(r, (h) => {
        var m;
        (m = this.conn) === null || m === void 0 || m.send(h);
      });
    };
    this.log("push", `${i} ${l} (${u})`, o), this.isConnected() ? c() : this.sendBuffer.push(c);
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * If param is null it will use the `accessToken` callback function or the token set on the client.
   *
   * On callback used, it will set the value of the token internal to the client.
   *
   * @param token A JWT string to override the token set on the client.
   */
  async setAuth(r = null) {
    let i = r || this.accessToken && await this.accessToken() || this.accessTokenValue;
    this.accessTokenValue != i && (this.accessTokenValue = i, this.channels.forEach((l) => {
      const o = {
        access_token: i,
        version: pT
      };
      i && l.updateJoinPayload(o), l.joinedOnce && l._isJoined() && l._push(mn.access_token, {
        access_token: i
      });
    }));
  }
  /**
   * Sends a heartbeat message if the socket is connected.
   */
  async sendHeartbeat() {
    var r;
    if (!this.isConnected()) {
      this.heartbeatCallback("disconnected");
      return;
    }
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), this.heartbeatCallback("timeout"), (r = this.conn) === null || r === void 0 || r.close(gT, "hearbeat timeout");
      return;
    }
    this.pendingHeartbeatRef = this._makeRef(), this.push({
      topic: "phoenix",
      event: "heartbeat",
      payload: {},
      ref: this.pendingHeartbeatRef
    }), this.heartbeatCallback("sent"), await this.setAuth();
  }
  onHeartbeat(r) {
    this.heartbeatCallback = r;
  }
  /**
   * Flushes send buffer
   */
  flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((r) => r()), this.sendBuffer = []);
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    let r = this.ref + 1;
    return r === this.ref ? this.ref = 0 : this.ref = r, this.ref.toString();
  }
  /**
   * Unsubscribe from channels with the specified topic.
   *
   * @internal
   */
  _leaveOpenTopic(r) {
    let i = this.channels.find((l) => l.topic === r && (l._isJoined() || l._isJoining()));
    i && (this.log("transport", `leaving duplicate topic "${r}"`), i.unsubscribe());
  }
  /**
   * Removes a subscription from the socket.
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(r) {
    this.channels = this.channels.filter((i) => i.topic !== r.topic);
  }
  /**
   * Sets up connection handlers.
   *
   * @internal
   */
  setupConnection() {
    this.conn && (this.conn.binaryType = "arraybuffer", this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (r) => this._onConnError(r), this.conn.onmessage = (r) => this._onConnMessage(r), this.conn.onclose = (r) => this._onConnClose(r));
  }
  /** @internal */
  _onConnMessage(r) {
    this.decode(r.data, (i) => {
      let { topic: l, event: o, payload: u, ref: c } = i;
      l === "phoenix" && o === "phx_reply" && this.heartbeatCallback(i.payload.status == "ok" ? "ok" : "error"), c && c === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null), this.log("receive", `${u.status || ""} ${l} ${o} ${c && "(" + c + ")" || ""}`, u), Array.from(this.channels).filter((h) => h._isMember(l)).forEach((h) => h._trigger(o, u, c)), this.stateChangeCallbacks.message.forEach((h) => h(i));
    });
  }
  /** @internal */
  _onConnOpen() {
    this.log("transport", `connected to ${this.endpointURL()}`), this.flushSendBuffer(), this.reconnectTimer.reset(), this.worker ? this.workerRef || this._startWorkerHeartbeat() : this._startHeartbeat(), this.stateChangeCallbacks.open.forEach((r) => r());
  }
  /** @internal */
  _startHeartbeat() {
    this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
  }
  /** @internal */
  _startWorkerHeartbeat() {
    this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
    const r = this._workerObjectUrl(this.workerUrl);
    this.workerRef = new Worker(r), this.workerRef.onerror = (i) => {
      this.log("worker", "worker error", i.message), this.workerRef.terminate();
    }, this.workerRef.onmessage = (i) => {
      i.data.event === "keepAlive" && this.sendHeartbeat();
    }, this.workerRef.postMessage({
      event: "start",
      interval: this.heartbeatIntervalMs
    });
  }
  /** @internal */
  _onConnClose(r) {
    this.log("transport", "close", r), this._triggerChanError(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach((i) => i(r));
  }
  /** @internal */
  _onConnError(r) {
    this.log("transport", `${r}`), this._triggerChanError(), this.stateChangeCallbacks.error.forEach((i) => i(r));
  }
  /** @internal */
  _triggerChanError() {
    this.channels.forEach((r) => r._trigger(mn.error));
  }
  /** @internal */
  _appendParams(r, i) {
    if (Object.keys(i).length === 0)
      return r;
    const l = r.match(/\?/) ? "&" : "?", o = new URLSearchParams(i);
    return `${r}${l}${o}`;
  }
  _workerObjectUrl(r) {
    let i;
    if (r)
      i = r;
    else {
      const l = new Blob([ET], { type: "application/javascript" });
      i = URL.createObjectURL(l);
    }
    return i;
  }
}
class vh extends Error {
  constructor(r) {
    super(r), this.__isStorageError = !0, this.name = "StorageError";
  }
}
function dt(n) {
  return typeof n == "object" && n !== null && "__isStorageError" in n;
}
class TT extends vh {
  constructor(r, i) {
    super(r), this.name = "StorageApiError", this.status = i;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status
    };
  }
}
class Hf extends vh {
  constructor(r, i) {
    super(r), this.name = "StorageUnknownError", this.originalError = i;
  }
}
var AT = function(n, r, i, l) {
  function o(u) {
    return u instanceof i ? u : new i(function(c) {
      c(u);
    });
  }
  return new (i || (i = Promise))(function(u, c) {
    function h(g) {
      try {
        p(l.next(g));
      } catch (y) {
        c(y);
      }
    }
    function m(g) {
      try {
        p(l.throw(g));
      } catch (y) {
        c(y);
      }
    }
    function p(g) {
      g.done ? u(g.value) : o(g.value).then(h, m);
    }
    p((l = l.apply(n, r || [])).next());
  });
};
const l0 = (n) => {
  let r;
  return n ? r = n : typeof fetch > "u" ? r = (...i) => Promise.resolve().then(() => fa).then(({ default: l }) => l(...i)) : r = fetch, (...i) => r(...i);
}, OT = () => AT(void 0, void 0, void 0, function* () {
  return typeof Response > "u" ? (yield Promise.resolve().then(() => fa)).Response : Response;
}), Pf = (n) => {
  if (Array.isArray(n))
    return n.map((i) => Pf(i));
  if (typeof n == "function" || n !== Object(n))
    return n;
  const r = {};
  return Object.entries(n).forEach(([i, l]) => {
    const o = i.replace(/([-_][a-z])/gi, (u) => u.toUpperCase().replace(/[-_]/g, ""));
    r[o] = Pf(l);
  }), r;
};
var ni = function(n, r, i, l) {
  function o(u) {
    return u instanceof i ? u : new i(function(c) {
      c(u);
    });
  }
  return new (i || (i = Promise))(function(u, c) {
    function h(g) {
      try {
        p(l.next(g));
      } catch (y) {
        c(y);
      }
    }
    function m(g) {
      try {
        p(l.throw(g));
      } catch (y) {
        c(y);
      }
    }
    function p(g) {
      g.done ? u(g.value) : o(g.value).then(h, m);
    }
    p((l = l.apply(n, r || [])).next());
  });
};
const pf = (n) => n.msg || n.message || n.error_description || n.error || JSON.stringify(n), CT = (n, r, i) => ni(void 0, void 0, void 0, function* () {
  const l = yield OT();
  n instanceof l && !i?.noResolveJson ? n.json().then((o) => {
    r(new TT(pf(o), n.status || 500));
  }).catch((o) => {
    r(new Hf(pf(o), o));
  }) : r(new Hf(pf(n), n));
}), RT = (n, r, i, l) => {
  const o = { method: n, headers: r?.headers || {} };
  return n === "GET" ? o : (o.headers = Object.assign({ "Content-Type": "application/json" }, r?.headers), l && (o.body = JSON.stringify(l)), Object.assign(Object.assign({}, o), i));
};
function Ml(n, r, i, l, o, u) {
  return ni(this, void 0, void 0, function* () {
    return new Promise((c, h) => {
      n(i, RT(r, l, o, u)).then((m) => {
        if (!m.ok)
          throw m;
        return l?.noResolveJson ? m : m.json();
      }).then((m) => c(m)).catch((m) => CT(m, h, l));
    });
  });
}
function mo(n, r, i, l) {
  return ni(this, void 0, void 0, function* () {
    return Ml(n, "GET", r, i, l);
  });
}
function _r(n, r, i, l, o) {
  return ni(this, void 0, void 0, function* () {
    return Ml(n, "POST", r, l, o, i);
  });
}
function zT(n, r, i, l, o) {
  return ni(this, void 0, void 0, function* () {
    return Ml(n, "PUT", r, l, o, i);
  });
}
function jT(n, r, i, l) {
  return ni(this, void 0, void 0, function* () {
    return Ml(n, "HEAD", r, Object.assign(Object.assign({}, i), { noResolveJson: !0 }), l);
  });
}
function s0(n, r, i, l, o) {
  return ni(this, void 0, void 0, function* () {
    return Ml(n, "DELETE", r, l, o, i);
  });
}
var zt = function(n, r, i, l) {
  function o(u) {
    return u instanceof i ? u : new i(function(c) {
      c(u);
    });
  }
  return new (i || (i = Promise))(function(u, c) {
    function h(g) {
      try {
        p(l.next(g));
      } catch (y) {
        c(y);
      }
    }
    function m(g) {
      try {
        p(l.throw(g));
      } catch (y) {
        c(y);
      }
    }
    function p(g) {
      g.done ? u(g.value) : o(g.value).then(h, m);
    }
    p((l = l.apply(n, r || [])).next());
  });
};
const DT = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, Cy = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
class NT {
  constructor(r, i = {}, l, o) {
    this.url = r, this.headers = i, this.bucketId = l, this.fetch = l0(o);
  }
  /**
   * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
   *
   * @param method HTTP method.
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadOrUpdate(r, i, l, o) {
    return zt(this, void 0, void 0, function* () {
      try {
        let u;
        const c = Object.assign(Object.assign({}, Cy), o);
        let h = Object.assign(Object.assign({}, this.headers), r === "POST" && { "x-upsert": String(c.upsert) });
        const m = c.metadata;
        typeof Blob < "u" && l instanceof Blob ? (u = new FormData(), u.append("cacheControl", c.cacheControl), m && u.append("metadata", this.encodeMetadata(m)), u.append("", l)) : typeof FormData < "u" && l instanceof FormData ? (u = l, u.append("cacheControl", c.cacheControl), m && u.append("metadata", this.encodeMetadata(m))) : (u = l, h["cache-control"] = `max-age=${c.cacheControl}`, h["content-type"] = c.contentType, m && (h["x-metadata"] = this.toBase64(this.encodeMetadata(m)))), o?.headers && (h = Object.assign(Object.assign({}, h), o.headers));
        const p = this._removeEmptyFolders(i), g = this._getFinalPath(p), y = yield this.fetch(`${this.url}/object/${g}`, Object.assign({ method: r, body: u, headers: h }, c?.duplex ? { duplex: c.duplex } : {})), S = yield y.json();
        return y.ok ? {
          data: { path: p, id: S.Id, fullPath: S.Key },
          error: null
        } : { data: null, error: S };
      } catch (u) {
        if (dt(u))
          return { data: null, error: u };
        throw u;
      }
    });
  }
  /**
   * Uploads a file to an existing bucket.
   *
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  upload(r, i, l) {
    return zt(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", r, i, l);
    });
  }
  /**
   * Upload a file with a token generated from `createSignedUploadUrl`.
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param token The token generated from `createSignedUploadUrl`
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadToSignedUrl(r, i, l, o) {
    return zt(this, void 0, void 0, function* () {
      const u = this._removeEmptyFolders(r), c = this._getFinalPath(u), h = new URL(this.url + `/object/upload/sign/${c}`);
      h.searchParams.set("token", i);
      try {
        let m;
        const p = Object.assign({ upsert: Cy.upsert }, o), g = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(p.upsert) });
        typeof Blob < "u" && l instanceof Blob ? (m = new FormData(), m.append("cacheControl", p.cacheControl), m.append("", l)) : typeof FormData < "u" && l instanceof FormData ? (m = l, m.append("cacheControl", p.cacheControl)) : (m = l, g["cache-control"] = `max-age=${p.cacheControl}`, g["content-type"] = p.contentType);
        const y = yield this.fetch(h.toString(), {
          method: "PUT",
          body: m,
          headers: g
        }), S = yield y.json();
        return y.ok ? {
          data: { path: u, fullPath: S.Key },
          error: null
        } : { data: null, error: S };
      } catch (m) {
        if (dt(m))
          return { data: null, error: m };
        throw m;
      }
    });
  }
  /**
   * Creates a signed upload URL.
   * Signed upload URLs can be used to upload files to the bucket without further authentication.
   * They are valid for 2 hours.
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
   */
  createSignedUploadUrl(r, i) {
    return zt(this, void 0, void 0, function* () {
      try {
        let l = this._getFinalPath(r);
        const o = Object.assign({}, this.headers);
        i?.upsert && (o["x-upsert"] = "true");
        const u = yield _r(this.fetch, `${this.url}/object/upload/sign/${l}`, {}, { headers: o }), c = new URL(this.url + u.url), h = c.searchParams.get("token");
        if (!h)
          throw new vh("No token returned by API");
        return { data: { signedUrl: c.toString(), path: r, token: h }, error: null };
      } catch (l) {
        if (dt(l))
          return { data: null, error: l };
        throw l;
      }
    });
  }
  /**
   * Replaces an existing file at the specified path with a new one.
   *
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  update(r, i, l) {
    return zt(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", r, i, l);
    });
  }
  /**
   * Moves an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
   * @param options The destination options.
   */
  move(r, i, l) {
    return zt(this, void 0, void 0, function* () {
      try {
        return { data: yield _r(this.fetch, `${this.url}/object/move`, {
          bucketId: this.bucketId,
          sourceKey: r,
          destinationKey: i,
          destinationBucket: l?.destinationBucket
        }, { headers: this.headers }), error: null };
      } catch (o) {
        if (dt(o))
          return { data: null, error: o };
        throw o;
      }
    });
  }
  /**
   * Copies an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
   * @param options The destination options.
   */
  copy(r, i, l) {
    return zt(this, void 0, void 0, function* () {
      try {
        return { data: { path: (yield _r(this.fetch, `${this.url}/object/copy`, {
          bucketId: this.bucketId,
          sourceKey: r,
          destinationKey: i,
          destinationBucket: l?.destinationBucket
        }, { headers: this.headers })).Key }, error: null };
      } catch (o) {
        if (dt(o))
          return { data: null, error: o };
        throw o;
      }
    });
  }
  /**
   * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  createSignedUrl(r, i, l) {
    return zt(this, void 0, void 0, function* () {
      try {
        let o = this._getFinalPath(r), u = yield _r(this.fetch, `${this.url}/object/sign/${o}`, Object.assign({ expiresIn: i }, l?.transform ? { transform: l.transform } : {}), { headers: this.headers });
        const c = l?.download ? `&download=${l.download === !0 ? "" : l.download}` : "";
        return u = { signedUrl: encodeURI(`${this.url}${u.signedURL}${c}`) }, { data: u, error: null };
      } catch (o) {
        if (dt(o))
          return { data: null, error: o };
        throw o;
      }
    });
  }
  /**
   * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
   * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   */
  createSignedUrls(r, i, l) {
    return zt(this, void 0, void 0, function* () {
      try {
        const o = yield _r(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn: i, paths: r }, { headers: this.headers }), u = l?.download ? `&download=${l.download === !0 ? "" : l.download}` : "";
        return {
          data: o.map((c) => Object.assign(Object.assign({}, c), { signedUrl: c.signedURL ? encodeURI(`${this.url}${c.signedURL}${u}`) : null })),
          error: null
        };
      } catch (o) {
        if (dt(o))
          return { data: null, error: o };
        throw o;
      }
    });
  }
  /**
   * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
   *
   * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
   * @param options.transform Transform the asset before serving it to the client.
   */
  download(r, i) {
    return zt(this, void 0, void 0, function* () {
      const o = typeof i?.transform < "u" ? "render/image/authenticated" : "object", u = this.transformOptsToQueryString(i?.transform || {}), c = u ? `?${u}` : "";
      try {
        const h = this._getFinalPath(r);
        return { data: yield (yield mo(this.fetch, `${this.url}/${o}/${h}${c}`, {
          headers: this.headers,
          noResolveJson: !0
        })).blob(), error: null };
      } catch (h) {
        if (dt(h))
          return { data: null, error: h };
        throw h;
      }
    });
  }
  /**
   * Retrieves the details of an existing file.
   * @param path
   */
  info(r) {
    return zt(this, void 0, void 0, function* () {
      const i = this._getFinalPath(r);
      try {
        const l = yield mo(this.fetch, `${this.url}/object/info/${i}`, {
          headers: this.headers
        });
        return { data: Pf(l), error: null };
      } catch (l) {
        if (dt(l))
          return { data: null, error: l };
        throw l;
      }
    });
  }
  /**
   * Checks the existence of a file.
   * @param path
   */
  exists(r) {
    return zt(this, void 0, void 0, function* () {
      const i = this._getFinalPath(r);
      try {
        return yield jT(this.fetch, `${this.url}/object/${i}`, {
          headers: this.headers
        }), { data: !0, error: null };
      } catch (l) {
        if (dt(l) && l instanceof Hf) {
          const o = l.originalError;
          if ([400, 404].includes(o?.status))
            return { data: !1, error: l };
        }
        throw l;
      }
    });
  }
  /**
   * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
   * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
   *
   * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
   * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  getPublicUrl(r, i) {
    const l = this._getFinalPath(r), o = [], u = i?.download ? `download=${i.download === !0 ? "" : i.download}` : "";
    u !== "" && o.push(u);
    const h = typeof i?.transform < "u" ? "render/image" : "object", m = this.transformOptsToQueryString(i?.transform || {});
    m !== "" && o.push(m);
    let p = o.join("&");
    return p !== "" && (p = `?${p}`), {
      data: { publicUrl: encodeURI(`${this.url}/${h}/public/${l}${p}`) }
    };
  }
  /**
   * Deletes files within the same bucket
   *
   * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
   */
  remove(r) {
    return zt(this, void 0, void 0, function* () {
      try {
        return { data: yield s0(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: r }, { headers: this.headers }), error: null };
      } catch (i) {
        if (dt(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Get file metadata
   * @param id the file id to retrieve metadata
   */
  // async getMetadata(
  //   id: string
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Update file metadata
   * @param id the file id to update metadata
   * @param meta the new file metadata
   */
  // async updateMetadata(
  //   id: string,
  //   meta: Metadata
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await post(
  //       this.fetch,
  //       `${this.url}/metadata/${id}`,
  //       { ...meta },
  //       { headers: this.headers }
  //     )
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Lists all the files within a bucket.
   * @param path The folder path.
   */
  list(r, i, l) {
    return zt(this, void 0, void 0, function* () {
      try {
        const o = Object.assign(Object.assign(Object.assign({}, DT), i), { prefix: r || "" });
        return { data: yield _r(this.fetch, `${this.url}/object/list/${this.bucketId}`, o, { headers: this.headers }, l), error: null };
      } catch (o) {
        if (dt(o))
          return { data: null, error: o };
        throw o;
      }
    });
  }
  encodeMetadata(r) {
    return JSON.stringify(r);
  }
  toBase64(r) {
    return typeof Buffer < "u" ? Buffer.from(r).toString("base64") : btoa(r);
  }
  _getFinalPath(r) {
    return `${this.bucketId}/${r}`;
  }
  _removeEmptyFolders(r) {
    return r.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(r) {
    const i = [];
    return r.width && i.push(`width=${r.width}`), r.height && i.push(`height=${r.height}`), r.resize && i.push(`resize=${r.resize}`), r.format && i.push(`format=${r.format}`), r.quality && i.push(`quality=${r.quality}`), i.join("&");
  }
}
const MT = "2.7.1", UT = { "X-Client-Info": `storage-js/${MT}` };
var Zi = function(n, r, i, l) {
  function o(u) {
    return u instanceof i ? u : new i(function(c) {
      c(u);
    });
  }
  return new (i || (i = Promise))(function(u, c) {
    function h(g) {
      try {
        p(l.next(g));
      } catch (y) {
        c(y);
      }
    }
    function m(g) {
      try {
        p(l.throw(g));
      } catch (y) {
        c(y);
      }
    }
    function p(g) {
      g.done ? u(g.value) : o(g.value).then(h, m);
    }
    p((l = l.apply(n, r || [])).next());
  });
};
class BT {
  constructor(r, i = {}, l) {
    this.url = r, this.headers = Object.assign(Object.assign({}, UT), i), this.fetch = l0(l);
  }
  /**
   * Retrieves the details of all Storage buckets within an existing project.
   */
  listBuckets() {
    return Zi(this, void 0, void 0, function* () {
      try {
        return { data: yield mo(this.fetch, `${this.url}/bucket`, { headers: this.headers }), error: null };
      } catch (r) {
        if (dt(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Retrieves the details of an existing Storage bucket.
   *
   * @param id The unique identifier of the bucket you would like to retrieve.
   */
  getBucket(r) {
    return Zi(this, void 0, void 0, function* () {
      try {
        return { data: yield mo(this.fetch, `${this.url}/bucket/${r}`, { headers: this.headers }), error: null };
      } catch (i) {
        if (dt(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Creates a new Storage bucket
   *
   * @param id A unique identifier for the bucket you are creating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   * @returns newly created bucket id
   */
  createBucket(r, i = {
    public: !1
  }) {
    return Zi(this, void 0, void 0, function* () {
      try {
        return { data: yield _r(this.fetch, `${this.url}/bucket`, {
          id: r,
          name: r,
          public: i.public,
          file_size_limit: i.fileSizeLimit,
          allowed_mime_types: i.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (l) {
        if (dt(l))
          return { data: null, error: l };
        throw l;
      }
    });
  }
  /**
   * Updates a Storage bucket
   *
   * @param id A unique identifier for the bucket you are updating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   */
  updateBucket(r, i) {
    return Zi(this, void 0, void 0, function* () {
      try {
        return { data: yield zT(this.fetch, `${this.url}/bucket/${r}`, {
          id: r,
          name: r,
          public: i.public,
          file_size_limit: i.fileSizeLimit,
          allowed_mime_types: i.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (l) {
        if (dt(l))
          return { data: null, error: l };
        throw l;
      }
    });
  }
  /**
   * Removes all objects inside a single bucket.
   *
   * @param id The unique identifier of the bucket you would like to empty.
   */
  emptyBucket(r) {
    return Zi(this, void 0, void 0, function* () {
      try {
        return { data: yield _r(this.fetch, `${this.url}/bucket/${r}/empty`, {}, { headers: this.headers }), error: null };
      } catch (i) {
        if (dt(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
   * You must first `empty()` the bucket.
   *
   * @param id The unique identifier of the bucket you would like to delete.
   */
  deleteBucket(r) {
    return Zi(this, void 0, void 0, function* () {
      try {
        return { data: yield s0(this.fetch, `${this.url}/bucket/${r}`, {}, { headers: this.headers }), error: null };
      } catch (i) {
        if (dt(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
}
class LT extends BT {
  constructor(r, i = {}, l) {
    super(r, i, l);
  }
  /**
   * Perform file operation in a bucket.
   *
   * @param id The bucket id to operate on.
   */
  from(r) {
    return new NT(this.url, this.headers, r, this.fetch);
  }
}
const qT = "2.52.0";
let _l = "";
typeof Deno < "u" ? _l = "deno" : typeof document < "u" ? _l = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? _l = "react-native" : _l = "node";
const HT = { "X-Client-Info": `supabase-js-${_l}/${qT}` }, PT = {
  headers: HT
}, VT = {
  schema: "public"
}, IT = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, GT = {};
var $T = function(n, r, i, l) {
  function o(u) {
    return u instanceof i ? u : new i(function(c) {
      c(u);
    });
  }
  return new (i || (i = Promise))(function(u, c) {
    function h(g) {
      try {
        p(l.next(g));
      } catch (y) {
        c(y);
      }
    }
    function m(g) {
      try {
        p(l.throw(g));
      } catch (y) {
        c(y);
      }
    }
    function p(g) {
      g.done ? u(g.value) : o(g.value).then(h, m);
    }
    p((l = l.apply(n, r || [])).next());
  });
};
const YT = (n) => {
  let r;
  return n ? r = n : typeof fetch > "u" ? r = Xb : r = fetch, (...i) => r(...i);
}, FT = () => typeof Headers > "u" ? Zb : Headers, QT = (n, r, i) => {
  const l = YT(i), o = FT();
  return (u, c) => $T(void 0, void 0, void 0, function* () {
    var h;
    const m = (h = yield r()) !== null && h !== void 0 ? h : n;
    let p = new o(c?.headers);
    return p.has("apikey") || p.set("apikey", n), p.has("Authorization") || p.set("Authorization", `Bearer ${m}`), l(u, Object.assign(Object.assign({}, c), { headers: p }));
  });
};
var KT = function(n, r, i, l) {
  function o(u) {
    return u instanceof i ? u : new i(function(c) {
      c(u);
    });
  }
  return new (i || (i = Promise))(function(u, c) {
    function h(g) {
      try {
        p(l.next(g));
      } catch (y) {
        c(y);
      }
    }
    function m(g) {
      try {
        p(l.throw(g));
      } catch (y) {
        c(y);
      }
    }
    function p(g) {
      g.done ? u(g.value) : o(g.value).then(h, m);
    }
    p((l = l.apply(n, r || [])).next());
  });
};
function XT(n) {
  return n.endsWith("/") ? n : n + "/";
}
function ZT(n, r) {
  var i, l;
  const { db: o, auth: u, realtime: c, global: h } = n, { db: m, auth: p, realtime: g, global: y } = r, S = {
    db: Object.assign(Object.assign({}, m), o),
    auth: Object.assign(Object.assign({}, p), u),
    realtime: Object.assign(Object.assign({}, g), c),
    global: Object.assign(Object.assign(Object.assign({}, y), h), { headers: Object.assign(Object.assign({}, (i = y?.headers) !== null && i !== void 0 ? i : {}), (l = h?.headers) !== null && l !== void 0 ? l : {}) }),
    accessToken: () => KT(this, void 0, void 0, function* () {
      return "";
    })
  };
  return n.accessToken ? S.accessToken = n.accessToken : delete S.accessToken, S;
}
const o0 = "2.71.1", na = 30 * 1e3, Vf = 3, mf = Vf * na, JT = "http://localhost:9999", WT = "supabase.auth.token", eA = { "X-Client-Info": `gotrue-js/${o0}` }, If = "X-Supabase-Api-Version", u0 = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, tA = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, nA = 600 * 1e3;
class wh extends Error {
  constructor(r, i, l) {
    super(r), this.__isAuthError = !0, this.name = "AuthError", this.status = i, this.code = l;
  }
}
function ge(n) {
  return typeof n == "object" && n !== null && "__isAuthError" in n;
}
class rA extends wh {
  constructor(r, i, l) {
    super(r, i, l), this.name = "AuthApiError", this.status = i, this.code = l;
  }
}
function iA(n) {
  return ge(n) && n.name === "AuthApiError";
}
class c0 extends wh {
  constructor(r, i) {
    super(r), this.name = "AuthUnknownError", this.originalError = i;
  }
}
class Ar extends wh {
  constructor(r, i, l, o) {
    super(r, l, o), this.name = i, this.status = l;
  }
}
class xr extends Ar {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function aA(n) {
  return ge(n) && n.name === "AuthSessionMissingError";
}
class ro extends Ar {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class io extends Ar {
  constructor(r) {
    super(r, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class ao extends Ar {
  constructor(r, i = null) {
    super(r, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = i;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
function lA(n) {
  return ge(n) && n.name === "AuthImplicitGrantRedirectError";
}
class Ry extends Ar {
  constructor(r, i = null) {
    super(r, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = i;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
class Gf extends Ar {
  constructor(r, i) {
    super(r, "AuthRetryableFetchError", i, void 0);
  }
}
function gf(n) {
  return ge(n) && n.name === "AuthRetryableFetchError";
}
class zy extends Ar {
  constructor(r, i, l) {
    super(r, "AuthWeakPasswordError", i, "weak_password"), this.reasons = l;
  }
}
class $f extends Ar {
  constructor(r) {
    super(r, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const go = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), jy = ` 	
\r=`.split(""), sA = (() => {
  const n = new Array(128);
  for (let r = 0; r < n.length; r += 1)
    n[r] = -1;
  for (let r = 0; r < jy.length; r += 1)
    n[jy[r].charCodeAt(0)] = -2;
  for (let r = 0; r < go.length; r += 1)
    n[go[r].charCodeAt(0)] = r;
  return n;
})();
function Dy(n, r, i) {
  if (n !== null)
    for (r.queue = r.queue << 8 | n, r.queuedBits += 8; r.queuedBits >= 6; ) {
      const l = r.queue >> r.queuedBits - 6 & 63;
      i(go[l]), r.queuedBits -= 6;
    }
  else if (r.queuedBits > 0)
    for (r.queue = r.queue << 6 - r.queuedBits, r.queuedBits = 6; r.queuedBits >= 6; ) {
      const l = r.queue >> r.queuedBits - 6 & 63;
      i(go[l]), r.queuedBits -= 6;
    }
}
function f0(n, r, i) {
  const l = sA[n];
  if (l > -1)
    for (r.queue = r.queue << 6 | l, r.queuedBits += 6; r.queuedBits >= 8; )
      i(r.queue >> r.queuedBits - 8 & 255), r.queuedBits -= 8;
  else {
    if (l === -2)
      return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(n)}"`);
  }
}
function Ny(n) {
  const r = [], i = (c) => {
    r.push(String.fromCodePoint(c));
  }, l = {
    utf8seq: 0,
    codepoint: 0
  }, o = { queue: 0, queuedBits: 0 }, u = (c) => {
    cA(c, l, i);
  };
  for (let c = 0; c < n.length; c += 1)
    f0(n.charCodeAt(c), o, u);
  return r.join("");
}
function oA(n, r) {
  if (n <= 127) {
    r(n);
    return;
  } else if (n <= 2047) {
    r(192 | n >> 6), r(128 | n & 63);
    return;
  } else if (n <= 65535) {
    r(224 | n >> 12), r(128 | n >> 6 & 63), r(128 | n & 63);
    return;
  } else if (n <= 1114111) {
    r(240 | n >> 18), r(128 | n >> 12 & 63), r(128 | n >> 6 & 63), r(128 | n & 63);
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${n.toString(16)}`);
}
function uA(n, r) {
  for (let i = 0; i < n.length; i += 1) {
    let l = n.charCodeAt(i);
    if (l > 55295 && l <= 56319) {
      const o = (l - 55296) * 1024 & 65535;
      l = (n.charCodeAt(i + 1) - 56320 & 65535 | o) + 65536, i += 1;
    }
    oA(l, r);
  }
}
function cA(n, r, i) {
  if (r.utf8seq === 0) {
    if (n <= 127) {
      i(n);
      return;
    }
    for (let l = 1; l < 6; l += 1)
      if ((n >> 7 - l & 1) === 0) {
        r.utf8seq = l;
        break;
      }
    if (r.utf8seq === 2)
      r.codepoint = n & 31;
    else if (r.utf8seq === 3)
      r.codepoint = n & 15;
    else if (r.utf8seq === 4)
      r.codepoint = n & 7;
    else
      throw new Error("Invalid UTF-8 sequence");
    r.utf8seq -= 1;
  } else if (r.utf8seq > 0) {
    if (n <= 127)
      throw new Error("Invalid UTF-8 sequence");
    r.codepoint = r.codepoint << 6 | n & 63, r.utf8seq -= 1, r.utf8seq === 0 && i(r.codepoint);
  }
}
function fA(n) {
  const r = [], i = { queue: 0, queuedBits: 0 }, l = (o) => {
    r.push(o);
  };
  for (let o = 0; o < n.length; o += 1)
    f0(n.charCodeAt(o), i, l);
  return new Uint8Array(r);
}
function hA(n) {
  const r = [];
  return uA(n, (i) => r.push(i)), new Uint8Array(r);
}
function dA(n) {
  const r = [], i = { queue: 0, queuedBits: 0 }, l = (o) => {
    r.push(o);
  };
  return n.forEach((o) => Dy(o, i, l)), Dy(null, i, l), r.join("");
}
function pA(n) {
  return Math.round(Date.now() / 1e3) + n;
}
function mA() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
    const r = Math.random() * 16 | 0;
    return (n == "x" ? r : r & 3 | 8).toString(16);
  });
}
const pn = () => typeof window < "u" && typeof document < "u", Yr = {
  tested: !1,
  writable: !1
}, h0 = () => {
  if (!pn())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (Yr.tested)
    return Yr.writable;
  const n = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(n, n), globalThis.localStorage.removeItem(n), Yr.tested = !0, Yr.writable = !0;
  } catch {
    Yr.tested = !0, Yr.writable = !1;
  }
  return Yr.writable;
};
function gA(n) {
  const r = {}, i = new URL(n);
  if (i.hash && i.hash[0] === "#")
    try {
      new URLSearchParams(i.hash.substring(1)).forEach((o, u) => {
        r[u] = o;
      });
    } catch {
    }
  return i.searchParams.forEach((l, o) => {
    r[o] = l;
  }), r;
}
const d0 = (n) => {
  let r;
  return n ? r = n : typeof fetch > "u" ? r = (...i) => Promise.resolve().then(() => fa).then(({ default: l }) => l(...i)) : r = fetch, (...i) => r(...i);
}, yA = (n) => typeof n == "object" && n !== null && "status" in n && "ok" in n && "json" in n && typeof n.json == "function", ra = async (n, r, i) => {
  await n.setItem(r, JSON.stringify(i));
}, Fr = async (n, r) => {
  const i = await n.getItem(r);
  if (!i)
    return null;
  try {
    return JSON.parse(i);
  } catch {
    return i;
  }
}, Sr = async (n, r) => {
  await n.removeItem(r);
};
class Eo {
  constructor() {
    this.promise = new Eo.promiseConstructor((r, i) => {
      this.resolve = r, this.reject = i;
    });
  }
}
Eo.promiseConstructor = Promise;
function yf(n) {
  const r = n.split(".");
  if (r.length !== 3)
    throw new $f("Invalid JWT structure");
  for (let l = 0; l < r.length; l++)
    if (!tA.test(r[l]))
      throw new $f("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse(Ny(r[0])),
    payload: JSON.parse(Ny(r[1])),
    signature: fA(r[2]),
    raw: {
      header: r[0],
      payload: r[1]
    }
  };
}
async function bA(n) {
  return await new Promise((r) => {
    setTimeout(() => r(null), n);
  });
}
function vA(n, r) {
  return new Promise((l, o) => {
    (async () => {
      for (let u = 0; u < 1 / 0; u++)
        try {
          const c = await n(u);
          if (!r(u, null, c)) {
            l(c);
            return;
          }
        } catch (c) {
          if (!r(u, c)) {
            o(c);
            return;
          }
        }
    })();
  });
}
function wA(n) {
  return ("0" + n.toString(16)).substr(-2);
}
function SA() {
  const r = new Uint32Array(56);
  if (typeof crypto > "u") {
    const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", l = i.length;
    let o = "";
    for (let u = 0; u < 56; u++)
      o += i.charAt(Math.floor(Math.random() * l));
    return o;
  }
  return crypto.getRandomValues(r), Array.from(r, wA).join("");
}
async function xA(n) {
  const i = new TextEncoder().encode(n), l = await crypto.subtle.digest("SHA-256", i), o = new Uint8Array(l);
  return Array.from(o).map((u) => String.fromCharCode(u)).join("");
}
async function _A(n) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), n;
  const i = await xA(n);
  return btoa(i).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Ji(n, r, i = !1) {
  const l = SA();
  let o = l;
  i && (o += "/PASSWORD_RECOVERY"), await ra(n, `${r}-code-verifier`, o);
  const u = await _A(l);
  return [u, l === u ? "plain" : "s256"];
}
const EA = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function kA(n) {
  const r = n.headers.get(If);
  if (!r || !r.match(EA))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${r}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function TA(n) {
  if (!n)
    throw new Error("Missing exp claim");
  const r = Math.floor(Date.now() / 1e3);
  if (n <= r)
    throw new Error("JWT has expired");
}
function AA(n) {
  switch (n) {
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: { name: "SHA-256" }
      };
    case "ES256":
      return {
        name: "ECDSA",
        namedCurve: "P-256",
        hash: { name: "SHA-256" }
      };
    default:
      throw new Error("Invalid alg claim");
  }
}
const OA = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Wi(n) {
  if (!OA.test(n))
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function bf() {
  const n = {};
  return new Proxy(n, {
    get: (r, i) => {
      if (i === "__isUserNotAvailableProxy")
        return !0;
      if (typeof i == "symbol") {
        const l = i.toString();
        if (l === "Symbol(Symbol.toPrimitive)" || l === "Symbol(Symbol.toStringTag)" || l === "Symbol(util.inspect.custom)")
          return;
      }
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${i}" property of the session object is not supported. Please use getUser() instead.`);
    },
    set: (r, i) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${i}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    },
    deleteProperty: (r, i) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${i}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    }
  });
}
function My(n) {
  return JSON.parse(JSON.stringify(n));
}
var CA = function(n, r) {
  var i = {};
  for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && r.indexOf(l) < 0 && (i[l] = n[l]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, l = Object.getOwnPropertySymbols(n); o < l.length; o++)
      r.indexOf(l[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, l[o]) && (i[l[o]] = n[l[o]]);
  return i;
};
const Qr = (n) => n.msg || n.message || n.error_description || n.error || JSON.stringify(n), RA = [502, 503, 504];
async function Uy(n) {
  var r;
  if (!yA(n))
    throw new Gf(Qr(n), 0);
  if (RA.includes(n.status))
    throw new Gf(Qr(n), n.status);
  let i;
  try {
    i = await n.json();
  } catch (u) {
    throw new c0(Qr(u), u);
  }
  let l;
  const o = kA(n);
  if (o && o.getTime() >= u0["2024-01-01"].timestamp && typeof i == "object" && i && typeof i.code == "string" ? l = i.code : typeof i == "object" && i && typeof i.error_code == "string" && (l = i.error_code), l) {
    if (l === "weak_password")
      throw new zy(Qr(i), n.status, ((r = i.weak_password) === null || r === void 0 ? void 0 : r.reasons) || []);
    if (l === "session_not_found")
      throw new xr();
  } else if (typeof i == "object" && i && typeof i.weak_password == "object" && i.weak_password && Array.isArray(i.weak_password.reasons) && i.weak_password.reasons.length && i.weak_password.reasons.reduce((u, c) => u && typeof c == "string", !0))
    throw new zy(Qr(i), n.status, i.weak_password.reasons);
  throw new rA(Qr(i), n.status || 500, l);
}
const zA = (n, r, i, l) => {
  const o = { method: n, headers: r?.headers || {} };
  return n === "GET" ? o : (o.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, r?.headers), o.body = JSON.stringify(l), Object.assign(Object.assign({}, o), i));
};
async function Ae(n, r, i, l) {
  var o;
  const u = Object.assign({}, l?.headers);
  u[If] || (u[If] = u0["2024-01-01"].name), l?.jwt && (u.Authorization = `Bearer ${l.jwt}`);
  const c = (o = l?.query) !== null && o !== void 0 ? o : {};
  l?.redirectTo && (c.redirect_to = l.redirectTo);
  const h = Object.keys(c).length ? "?" + new URLSearchParams(c).toString() : "", m = await jA(n, r, i + h, {
    headers: u,
    noResolveJson: l?.noResolveJson
  }, {}, l?.body);
  return l?.xform ? l?.xform(m) : { data: Object.assign({}, m), error: null };
}
async function jA(n, r, i, l, o, u) {
  const c = zA(r, l, o, u);
  let h;
  try {
    h = await n(i, Object.assign({}, c));
  } catch (m) {
    throw console.error(m), new Gf(Qr(m), 0);
  }
  if (h.ok || await Uy(h), l?.noResolveJson)
    return h;
  try {
    return await h.json();
  } catch (m) {
    await Uy(m);
  }
}
function Fn(n) {
  var r;
  let i = null;
  UA(n) && (i = Object.assign({}, n), n.expires_at || (i.expires_at = pA(n.expires_in)));
  const l = (r = n.user) !== null && r !== void 0 ? r : n;
  return { data: { session: i, user: l }, error: null };
}
function By(n) {
  const r = Fn(n);
  return !r.error && n.weak_password && typeof n.weak_password == "object" && Array.isArray(n.weak_password.reasons) && n.weak_password.reasons.length && n.weak_password.message && typeof n.weak_password.message == "string" && n.weak_password.reasons.reduce((i, l) => i && typeof l == "string", !0) && (r.data.weak_password = n.weak_password), r;
}
function Er(n) {
  var r;
  return { data: { user: (r = n.user) !== null && r !== void 0 ? r : n }, error: null };
}
function DA(n) {
  return { data: n, error: null };
}
function NA(n) {
  const { action_link: r, email_otp: i, hashed_token: l, redirect_to: o, verification_type: u } = n, c = CA(n, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), h = {
    action_link: r,
    email_otp: i,
    hashed_token: l,
    redirect_to: o,
    verification_type: u
  }, m = Object.assign({}, c);
  return {
    data: {
      properties: h,
      user: m
    },
    error: null
  };
}
function MA(n) {
  return n;
}
function UA(n) {
  return n.access_token && n.refresh_token && n.expires_in;
}
const vf = ["global", "local", "others"];
var BA = function(n, r) {
  var i = {};
  for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && r.indexOf(l) < 0 && (i[l] = n[l]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, l = Object.getOwnPropertySymbols(n); o < l.length; o++)
      r.indexOf(l[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, l[o]) && (i[l[o]] = n[l[o]]);
  return i;
};
class LA {
  constructor({ url: r = "", headers: i = {}, fetch: l }) {
    this.url = r, this.headers = i, this.fetch = d0(l), this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   */
  async signOut(r, i = vf[0]) {
    if (vf.indexOf(i) < 0)
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${vf.join(", ")}`);
    try {
      return await Ae(this.fetch, "POST", `${this.url}/logout?scope=${i}`, {
        headers: this.headers,
        jwt: r,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (l) {
      if (ge(l))
        return { data: null, error: l };
      throw l;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   */
  async inviteUserByEmail(r, i = {}) {
    try {
      return await Ae(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: r, data: i.data },
        headers: this.headers,
        redirectTo: i.redirectTo,
        xform: Er
      });
    } catch (l) {
      if (ge(l))
        return { data: { user: null }, error: l };
      throw l;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   */
  async generateLink(r) {
    try {
      const { options: i } = r, l = BA(r, ["options"]), o = Object.assign(Object.assign({}, l), i);
      return "newEmail" in l && (o.new_email = l?.newEmail, delete o.newEmail), await Ae(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: o,
        headers: this.headers,
        xform: NA,
        redirectTo: i?.redirectTo
      });
    } catch (i) {
      if (ge(i))
        return {
          data: {
            properties: null,
            user: null
          },
          error: i
        };
      throw i;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async createUser(r) {
    try {
      return await Ae(this.fetch, "POST", `${this.url}/admin/users`, {
        body: r,
        headers: this.headers,
        xform: Er
      });
    } catch (i) {
      if (ge(i))
        return { data: { user: null }, error: i };
      throw i;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   */
  async listUsers(r) {
    var i, l, o, u, c, h, m;
    try {
      const p = { nextPage: null, lastPage: 0, total: 0 }, g = await Ae(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (l = (i = r?.page) === null || i === void 0 ? void 0 : i.toString()) !== null && l !== void 0 ? l : "",
          per_page: (u = (o = r?.perPage) === null || o === void 0 ? void 0 : o.toString()) !== null && u !== void 0 ? u : ""
        },
        xform: MA
      });
      if (g.error)
        throw g.error;
      const y = await g.json(), S = (c = g.headers.get("x-total-count")) !== null && c !== void 0 ? c : 0, v = (m = (h = g.headers.get("link")) === null || h === void 0 ? void 0 : h.split(",")) !== null && m !== void 0 ? m : [];
      return v.length > 0 && (v.forEach((k) => {
        const A = parseInt(k.split(";")[0].split("=")[1].substring(0, 1)), O = JSON.parse(k.split(";")[1].split("=")[1]);
        p[`${O}Page`] = A;
      }), p.total = parseInt(S)), { data: Object.assign(Object.assign({}, y), p), error: null };
    } catch (p) {
      if (ge(p))
        return { data: { users: [] }, error: p };
      throw p;
    }
  }
  /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async getUserById(r) {
    Wi(r);
    try {
      return await Ae(this.fetch, "GET", `${this.url}/admin/users/${r}`, {
        headers: this.headers,
        xform: Er
      });
    } catch (i) {
      if (ge(i))
        return { data: { user: null }, error: i };
      throw i;
    }
  }
  /**
   * Updates the user data.
   *
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async updateUserById(r, i) {
    Wi(r);
    try {
      return await Ae(this.fetch, "PUT", `${this.url}/admin/users/${r}`, {
        body: i,
        headers: this.headers,
        xform: Er
      });
    } catch (l) {
      if (ge(l))
        return { data: { user: null }, error: l };
      throw l;
    }
  }
  /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted from the auth schema. Soft deletion allows user identification from the hashed user ID but is not reversible.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async deleteUser(r, i = !1) {
    Wi(r);
    try {
      return await Ae(this.fetch, "DELETE", `${this.url}/admin/users/${r}`, {
        headers: this.headers,
        body: {
          should_soft_delete: i
        },
        xform: Er
      });
    } catch (l) {
      if (ge(l))
        return { data: { user: null }, error: l };
      throw l;
    }
  }
  async _listFactors(r) {
    Wi(r.userId);
    try {
      const { data: i, error: l } = await Ae(this.fetch, "GET", `${this.url}/admin/users/${r.userId}/factors`, {
        headers: this.headers,
        xform: (o) => ({ data: { factors: o }, error: null })
      });
      return { data: i, error: l };
    } catch (i) {
      if (ge(i))
        return { data: null, error: i };
      throw i;
    }
  }
  async _deleteFactor(r) {
    Wi(r.userId), Wi(r.id);
    try {
      return { data: await Ae(this.fetch, "DELETE", `${this.url}/admin/users/${r.userId}/factors/${r.id}`, {
        headers: this.headers
      }), error: null };
    } catch (i) {
      if (ge(i))
        return { data: null, error: i };
      throw i;
    }
  }
}
function Ly(n = {}) {
  return {
    getItem: (r) => n[r] || null,
    setItem: (r, i) => {
      n[r] = i;
    },
    removeItem: (r) => {
      delete n[r];
    }
  };
}
function qA() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: !0
      }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
const ea = {
  /**
   * @experimental
   */
  debug: !!(globalThis && h0() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class p0 extends Error {
  constructor(r) {
    super(r), this.isAcquireTimeout = !0;
  }
}
class HA extends p0 {
}
async function PA(n, r, i) {
  ea.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", n, r);
  const l = new globalThis.AbortController();
  return r > 0 && setTimeout(() => {
    l.abort(), ea.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", n);
  }, r), await Promise.resolve().then(() => globalThis.navigator.locks.request(n, r === 0 ? {
    mode: "exclusive",
    ifAvailable: !0
  } : {
    mode: "exclusive",
    signal: l.signal
  }, async (o) => {
    if (o) {
      ea.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", n, o.name);
      try {
        return await i();
      } finally {
        ea.debug && console.log("@supabase/gotrue-js: navigatorLock: released", n, o.name);
      }
    } else {
      if (r === 0)
        throw ea.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", n), new HA(`Acquiring an exclusive Navigator LockManager lock "${n}" immediately failed`);
      if (ea.debug)
        try {
          const u = await globalThis.navigator.locks.query();
          console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(u, null, "  "));
        } catch (u) {
          console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", u);
        }
      return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await i();
    }
  }));
}
qA();
const VA = {
  url: JT,
  storageKey: WT,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: eA,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1
};
async function qy(n, r, i) {
  return await i();
}
const ta = {};
class zl {
  /**
   * Create a new client for use in the browser.
   */
  constructor(r) {
    var i, l;
    this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log, this.instanceID = zl.nextInstanceID, zl.nextInstanceID += 1, this.instanceID > 0 && pn() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
    const o = Object.assign(Object.assign({}, VA), r);
    if (this.logDebugMessages = !!o.debug, typeof o.debug == "function" && (this.logger = o.debug), this.persistSession = o.persistSession, this.storageKey = o.storageKey, this.autoRefreshToken = o.autoRefreshToken, this.admin = new LA({
      url: o.url,
      headers: o.headers,
      fetch: o.fetch
    }), this.url = o.url, this.headers = o.headers, this.fetch = d0(o.fetch), this.lock = o.lock || qy, this.detectSessionInUrl = o.detectSessionInUrl, this.flowType = o.flowType, this.hasCustomAuthorizationHeader = o.hasCustomAuthorizationHeader, o.lock ? this.lock = o.lock : pn() && (!((i = globalThis?.navigator) === null || i === void 0) && i.locks) ? this.lock = PA : this.lock = qy, this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
    }, this.persistSession ? (o.storage ? this.storage = o.storage : h0() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = Ly(this.memoryStorage)), o.userStorage && (this.userStorage = o.userStorage)) : (this.memoryStorage = {}, this.storage = Ly(this.memoryStorage)), pn() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (u) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", u);
      }
      (l = this.broadcastChannel) === null || l === void 0 || l.addEventListener("message", async (u) => {
        this._debug("received broadcast notification from other tab or client", u), await this._notifyAllSubscribers(u.data.event, u.data.session, !1);
      });
    }
    this.initialize();
  }
  /**
   * The JWKS used for verifying asymmetric JWTs
   */
  get jwks() {
    var r, i;
    return (i = (r = ta[this.storageKey]) === null || r === void 0 ? void 0 : r.jwks) !== null && i !== void 0 ? i : { keys: [] };
  }
  set jwks(r) {
    ta[this.storageKey] = Object.assign(Object.assign({}, ta[this.storageKey]), { jwks: r });
  }
  get jwks_cached_at() {
    var r, i;
    return (i = (r = ta[this.storageKey]) === null || r === void 0 ? void 0 : r.cachedAt) !== null && i !== void 0 ? i : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(r) {
    ta[this.storageKey] = Object.assign(Object.assign({}, ta[this.storageKey]), { cachedAt: r });
  }
  _debug(...r) {
    return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${o0}) ${(/* @__PURE__ */ new Date()).toISOString()}`, ...r), this;
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   */
  async initialize() {
    return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(), await this.initializePromise);
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    var r;
    try {
      const i = gA(window.location.href);
      let l = "none";
      if (this._isImplicitGrantCallback(i) ? l = "implicit" : await this._isPKCECallback(i) && (l = "pkce"), pn() && this.detectSessionInUrl && l !== "none") {
        const { data: o, error: u } = await this._getSessionFromURL(i, l);
        if (u) {
          if (this._debug("#_initialize()", "error detecting session from URL", u), lA(u)) {
            const m = (r = u.details) === null || r === void 0 ? void 0 : r.code;
            if (m === "identity_already_exists" || m === "identity_not_found" || m === "single_identity_not_deletable")
              return { error: u };
          }
          return await this._removeSession(), { error: u };
        }
        const { session: c, redirectType: h } = o;
        return this._debug("#_initialize()", "detected session in URL", c, "redirect type", h), await this._saveSession(c), setTimeout(async () => {
          h === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", c) : await this._notifyAllSubscribers("SIGNED_IN", c);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (i) {
      return ge(i) ? { error: i } : {
        error: new c0("Unexpected error during initialization", i)
      };
    } finally {
      await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   */
  async signInAnonymously(r) {
    var i, l, o;
    try {
      const u = await Ae(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (l = (i = r?.options) === null || i === void 0 ? void 0 : i.data) !== null && l !== void 0 ? l : {},
          gotrue_meta_security: { captcha_token: (o = r?.options) === null || o === void 0 ? void 0 : o.captchaToken }
        },
        xform: Fn
      }), { data: c, error: h } = u;
      if (h || !c)
        return { data: { user: null, session: null }, error: h };
      const m = c.session, p = c.user;
      return c.session && (await this._saveSession(c.session), await this._notifyAllSubscribers("SIGNED_IN", m)), { data: { user: p, session: m }, error: null };
    } catch (u) {
      if (ge(u))
        return { data: { user: null, session: null }, error: u };
      throw u;
    }
  }
  /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   */
  async signUp(r) {
    var i, l, o;
    try {
      let u;
      if ("email" in r) {
        const { email: g, password: y, options: S } = r;
        let v = null, k = null;
        this.flowType === "pkce" && ([v, k] = await Ji(this.storage, this.storageKey)), u = await Ae(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: S?.emailRedirectTo,
          body: {
            email: g,
            password: y,
            data: (i = S?.data) !== null && i !== void 0 ? i : {},
            gotrue_meta_security: { captcha_token: S?.captchaToken },
            code_challenge: v,
            code_challenge_method: k
          },
          xform: Fn
        });
      } else if ("phone" in r) {
        const { phone: g, password: y, options: S } = r;
        u = await Ae(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: g,
            password: y,
            data: (l = S?.data) !== null && l !== void 0 ? l : {},
            channel: (o = S?.channel) !== null && o !== void 0 ? o : "sms",
            gotrue_meta_security: { captcha_token: S?.captchaToken }
          },
          xform: Fn
        });
      } else
        throw new io("You must provide either an email or phone number and a password");
      const { data: c, error: h } = u;
      if (h || !c)
        return { data: { user: null, session: null }, error: h };
      const m = c.session, p = c.user;
      return c.session && (await this._saveSession(c.session), await this._notifyAllSubscribers("SIGNED_IN", m)), { data: { user: p, session: m }, error: null };
    } catch (u) {
      if (ge(u))
        return { data: { user: null, session: null }, error: u };
      throw u;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   */
  async signInWithPassword(r) {
    try {
      let i;
      if ("email" in r) {
        const { email: u, password: c, options: h } = r;
        i = await Ae(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: u,
            password: c,
            gotrue_meta_security: { captcha_token: h?.captchaToken }
          },
          xform: By
        });
      } else if ("phone" in r) {
        const { phone: u, password: c, options: h } = r;
        i = await Ae(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: u,
            password: c,
            gotrue_meta_security: { captcha_token: h?.captchaToken }
          },
          xform: By
        });
      } else
        throw new io("You must provide either an email or phone number and a password");
      const { data: l, error: o } = i;
      return o ? { data: { user: null, session: null }, error: o } : !l || !l.session || !l.user ? { data: { user: null, session: null }, error: new ro() } : (l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), {
        data: Object.assign({ user: l.user, session: l.session }, l.weak_password ? { weakPassword: l.weak_password } : null),
        error: o
      });
    } catch (i) {
      if (ge(i))
        return { data: { user: null, session: null }, error: i };
      throw i;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   */
  async signInWithOAuth(r) {
    var i, l, o, u;
    return await this._handleProviderSignIn(r.provider, {
      redirectTo: (i = r.options) === null || i === void 0 ? void 0 : i.redirectTo,
      scopes: (l = r.options) === null || l === void 0 ? void 0 : l.scopes,
      queryParams: (o = r.options) === null || o === void 0 ? void 0 : o.queryParams,
      skipBrowserRedirect: (u = r.options) === null || u === void 0 ? void 0 : u.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   */
  async exchangeCodeForSession(r) {
    return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(r));
  }
  /**
   * Signs in a user by verifying a message signed by the user's private key.
   * Only Solana supported at this time, using the Sign in with Solana standard.
   */
  async signInWithWeb3(r) {
    const { chain: i } = r;
    if (i === "solana")
      return await this.signInWithSolana(r);
    throw new Error(`@supabase/auth-js: Unsupported chain "${i}"`);
  }
  async signInWithSolana(r) {
    var i, l, o, u, c, h, m, p, g, y, S, v;
    let k, A;
    if ("message" in r)
      k = r.message, A = r.signature;
    else {
      const { chain: O, wallet: j, statement: Y, options: D } = r;
      let I;
      if (pn())
        if (typeof j == "object")
          I = j;
        else {
          const M = window;
          if ("solana" in M && typeof M.solana == "object" && ("signIn" in M.solana && typeof M.solana.signIn == "function" || "signMessage" in M.solana && typeof M.solana.signMessage == "function"))
            I = M.solana;
          else
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof j != "object" || !D?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        I = j;
      }
      const J = new URL((i = D?.url) !== null && i !== void 0 ? i : window.location.href);
      if ("signIn" in I && I.signIn) {
        const M = await I.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, D?.signInWithSolana), {
          // non-overridable properties
          version: "1",
          domain: J.host,
          uri: J.href
        }), Y ? { statement: Y } : null));
        let W;
        if (Array.isArray(M) && M[0] && typeof M[0] == "object")
          W = M[0];
        else if (M && typeof M == "object" && "signedMessage" in M && "signature" in M)
          W = M;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        if ("signedMessage" in W && "signature" in W && (typeof W.signedMessage == "string" || W.signedMessage instanceof Uint8Array) && W.signature instanceof Uint8Array)
          k = typeof W.signedMessage == "string" ? W.signedMessage : new TextDecoder().decode(W.signedMessage), A = W.signature;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
      } else {
        if (!("signMessage" in I) || typeof I.signMessage != "function" || !("publicKey" in I) || typeof I != "object" || !I.publicKey || !("toBase58" in I.publicKey) || typeof I.publicKey.toBase58 != "function")
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        k = [
          `${J.host} wants you to sign in with your Solana account:`,
          I.publicKey.toBase58(),
          ...Y ? ["", Y, ""] : [""],
          "Version: 1",
          `URI: ${J.href}`,
          `Issued At: ${(o = (l = D?.signInWithSolana) === null || l === void 0 ? void 0 : l.issuedAt) !== null && o !== void 0 ? o : (/* @__PURE__ */ new Date()).toISOString()}`,
          ...!((u = D?.signInWithSolana) === null || u === void 0) && u.notBefore ? [`Not Before: ${D.signInWithSolana.notBefore}`] : [],
          ...!((c = D?.signInWithSolana) === null || c === void 0) && c.expirationTime ? [`Expiration Time: ${D.signInWithSolana.expirationTime}`] : [],
          ...!((h = D?.signInWithSolana) === null || h === void 0) && h.chainId ? [`Chain ID: ${D.signInWithSolana.chainId}`] : [],
          ...!((m = D?.signInWithSolana) === null || m === void 0) && m.nonce ? [`Nonce: ${D.signInWithSolana.nonce}`] : [],
          ...!((p = D?.signInWithSolana) === null || p === void 0) && p.requestId ? [`Request ID: ${D.signInWithSolana.requestId}`] : [],
          ...!((y = (g = D?.signInWithSolana) === null || g === void 0 ? void 0 : g.resources) === null || y === void 0) && y.length ? [
            "Resources",
            ...D.signInWithSolana.resources.map((W) => `- ${W}`)
          ] : []
        ].join(`
`);
        const M = await I.signMessage(new TextEncoder().encode(k), "utf8");
        if (!M || !(M instanceof Uint8Array))
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        A = M;
      }
    }
    try {
      const { data: O, error: j } = await Ae(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({ chain: "solana", message: k, signature: dA(A) }, !((S = r.options) === null || S === void 0) && S.captchaToken ? { gotrue_meta_security: { captcha_token: (v = r.options) === null || v === void 0 ? void 0 : v.captchaToken } } : null),
        xform: Fn
      });
      if (j)
        throw j;
      return !O || !O.session || !O.user ? {
        data: { user: null, session: null },
        error: new ro()
      } : (O.session && (await this._saveSession(O.session), await this._notifyAllSubscribers("SIGNED_IN", O.session)), { data: Object.assign({}, O), error: j });
    } catch (O) {
      if (ge(O))
        return { data: { user: null, session: null }, error: O };
      throw O;
    }
  }
  async _exchangeCodeForSession(r) {
    const i = await Fr(this.storage, `${this.storageKey}-code-verifier`), [l, o] = (i ?? "").split("/");
    try {
      const { data: u, error: c } = await Ae(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: r,
          code_verifier: l
        },
        xform: Fn
      });
      if (await Sr(this.storage, `${this.storageKey}-code-verifier`), c)
        throw c;
      return !u || !u.session || !u.user ? {
        data: { user: null, session: null, redirectType: null },
        error: new ro()
      } : (u.session && (await this._saveSession(u.session), await this._notifyAllSubscribers("SIGNED_IN", u.session)), { data: Object.assign(Object.assign({}, u), { redirectType: o ?? null }), error: c });
    } catch (u) {
      if (ge(u))
        return { data: { user: null, session: null, redirectType: null }, error: u };
      throw u;
    }
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   */
  async signInWithIdToken(r) {
    try {
      const { options: i, provider: l, token: o, access_token: u, nonce: c } = r, h = await Ae(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: l,
          id_token: o,
          access_token: u,
          nonce: c,
          gotrue_meta_security: { captcha_token: i?.captchaToken }
        },
        xform: Fn
      }), { data: m, error: p } = h;
      return p ? { data: { user: null, session: null }, error: p } : !m || !m.session || !m.user ? {
        data: { user: null, session: null },
        error: new ro()
      } : (m.session && (await this._saveSession(m.session), await this._notifyAllSubscribers("SIGNED_IN", m.session)), { data: m, error: p });
    } catch (i) {
      if (ge(i))
        return { data: { user: null, session: null }, error: i };
      throw i;
    }
  }
  /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   */
  async signInWithOtp(r) {
    var i, l, o, u, c;
    try {
      if ("email" in r) {
        const { email: h, options: m } = r;
        let p = null, g = null;
        this.flowType === "pkce" && ([p, g] = await Ji(this.storage, this.storageKey));
        const { error: y } = await Ae(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: h,
            data: (i = m?.data) !== null && i !== void 0 ? i : {},
            create_user: (l = m?.shouldCreateUser) !== null && l !== void 0 ? l : !0,
            gotrue_meta_security: { captcha_token: m?.captchaToken },
            code_challenge: p,
            code_challenge_method: g
          },
          redirectTo: m?.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: y };
      }
      if ("phone" in r) {
        const { phone: h, options: m } = r, { data: p, error: g } = await Ae(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: h,
            data: (o = m?.data) !== null && o !== void 0 ? o : {},
            create_user: (u = m?.shouldCreateUser) !== null && u !== void 0 ? u : !0,
            gotrue_meta_security: { captcha_token: m?.captchaToken },
            channel: (c = m?.channel) !== null && c !== void 0 ? c : "sms"
          }
        });
        return { data: { user: null, session: null, messageId: p?.message_id }, error: g };
      }
      throw new io("You must provide either an email or phone number.");
    } catch (h) {
      if (ge(h))
        return { data: { user: null, session: null }, error: h };
      throw h;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   */
  async verifyOtp(r) {
    var i, l;
    try {
      let o, u;
      "options" in r && (o = (i = r.options) === null || i === void 0 ? void 0 : i.redirectTo, u = (l = r.options) === null || l === void 0 ? void 0 : l.captchaToken);
      const { data: c, error: h } = await Ae(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, r), { gotrue_meta_security: { captcha_token: u } }),
        redirectTo: o,
        xform: Fn
      });
      if (h)
        throw h;
      if (!c)
        throw new Error("An error occurred on token verification.");
      const m = c.session, p = c.user;
      return m?.access_token && (await this._saveSession(m), await this._notifyAllSubscribers(r.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", m)), { data: { user: p, session: m }, error: null };
    } catch (o) {
      if (ge(o))
        return { data: { user: null, session: null }, error: o };
      throw o;
    }
  }
  /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   */
  async signInWithSSO(r) {
    var i, l, o;
    try {
      let u = null, c = null;
      return this.flowType === "pkce" && ([u, c] = await Ji(this.storage, this.storageKey)), await Ae(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in r ? { provider_id: r.providerId } : null), "domain" in r ? { domain: r.domain } : null), { redirect_to: (l = (i = r.options) === null || i === void 0 ? void 0 : i.redirectTo) !== null && l !== void 0 ? l : void 0 }), !((o = r?.options) === null || o === void 0) && o.captchaToken ? { gotrue_meta_security: { captcha_token: r.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: u, code_challenge_method: c }),
        headers: this.headers,
        xform: DA
      });
    } catch (u) {
      if (ge(u))
        return { data: null, error: u };
      throw u;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   */
  async reauthenticate() {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (r) => {
        const { data: { session: i }, error: l } = r;
        if (l)
          throw l;
        if (!i)
          throw new xr();
        const { error: o } = await Ae(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: i.access_token
        });
        return { data: { user: null, session: null }, error: o };
      });
    } catch (r) {
      if (ge(r))
        return { data: { user: null, session: null }, error: r };
      throw r;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   */
  async resend(r) {
    try {
      const i = `${this.url}/resend`;
      if ("email" in r) {
        const { email: l, type: o, options: u } = r, { error: c } = await Ae(this.fetch, "POST", i, {
          headers: this.headers,
          body: {
            email: l,
            type: o,
            gotrue_meta_security: { captcha_token: u?.captchaToken }
          },
          redirectTo: u?.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: c };
      } else if ("phone" in r) {
        const { phone: l, type: o, options: u } = r, { data: c, error: h } = await Ae(this.fetch, "POST", i, {
          headers: this.headers,
          body: {
            phone: l,
            type: o,
            gotrue_meta_security: { captcha_token: u?.captchaToken }
          }
        });
        return { data: { user: null, session: null, messageId: c?.message_id }, error: h };
      }
      throw new io("You must provide either an email or phone number and a type");
    } catch (i) {
      if (ge(i))
        return { data: { user: null, session: null }, error: i };
      throw i;
    }
  }
  /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   */
  async getSession() {
    return await this.initializePromise, await this._acquireLock(-1, async () => this._useSession(async (i) => i));
  }
  /**
   * Acquires a global lock based on the storage key.
   */
  async _acquireLock(r, i) {
    this._debug("#_acquireLock", "begin", r);
    try {
      if (this.lockAcquired) {
        const l = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), o = (async () => (await l, await i()))();
        return this.pendingInLock.push((async () => {
          try {
            await o;
          } catch {
          }
        })()), o;
      }
      return await this.lock(`lock:${this.storageKey}`, r, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const l = i();
          for (this.pendingInLock.push((async () => {
            try {
              await l;
            } catch {
            }
          })()), await l; this.pendingInLock.length; ) {
            const o = [...this.pendingInLock];
            await Promise.all(o), this.pendingInLock.splice(0, o.length);
          }
          return await l;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  /**
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */
  async _useSession(r) {
    this._debug("#_useSession", "begin");
    try {
      const i = await this.__loadSession();
      return await r(i);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    try {
      let r = null;
      const i = await Fr(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", i), i !== null && (this._isValidSession(i) ? r = i : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !r)
        return { data: { session: null }, error: null };
      const l = r.expires_at ? r.expires_at * 1e3 - Date.now() < mf : !1;
      if (this._debug("#__loadSession()", `session has${l ? "" : " not"} expired`, "expires_at", r.expires_at), !l) {
        if (this.userStorage) {
          const c = await Fr(this.userStorage, this.storageKey + "-user");
          c?.user ? r.user = c.user : r.user = bf();
        }
        if (this.storage.isServer && r.user) {
          let c = this.suppressGetSessionWarning;
          r = new Proxy(r, {
            get: (m, p, g) => (!c && p === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), c = !0, this.suppressGetSessionWarning = !0), Reflect.get(m, p, g))
          });
        }
        return { data: { session: r }, error: null };
      }
      const { session: o, error: u } = await this._callRefreshToken(r.refresh_token);
      return u ? { data: { session: null }, error: u } : { data: { session: o }, error: null };
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   */
  async getUser(r) {
    return r ? await this._getUser(r) : (await this.initializePromise, await this._acquireLock(-1, async () => await this._getUser()));
  }
  async _getUser(r) {
    try {
      return r ? await Ae(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: r,
        xform: Er
      }) : await this._useSession(async (i) => {
        var l, o, u;
        const { data: c, error: h } = i;
        if (h)
          throw h;
        return !(!((l = c.session) === null || l === void 0) && l.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new xr() } : await Ae(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (u = (o = c.session) === null || o === void 0 ? void 0 : o.access_token) !== null && u !== void 0 ? u : void 0,
          xform: Er
        });
      });
    } catch (i) {
      if (ge(i))
        return aA(i) && (await this._removeSession(), await Sr(this.storage, `${this.storageKey}-code-verifier`)), { data: { user: null }, error: i };
      throw i;
    }
  }
  /**
   * Updates user data for a logged in user.
   */
  async updateUser(r, i = {}) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(r, i));
  }
  async _updateUser(r, i = {}) {
    try {
      return await this._useSession(async (l) => {
        const { data: o, error: u } = l;
        if (u)
          throw u;
        if (!o.session)
          throw new xr();
        const c = o.session;
        let h = null, m = null;
        this.flowType === "pkce" && r.email != null && ([h, m] = await Ji(this.storage, this.storageKey));
        const { data: p, error: g } = await Ae(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: i?.emailRedirectTo,
          body: Object.assign(Object.assign({}, r), { code_challenge: h, code_challenge_method: m }),
          jwt: c.access_token,
          xform: Er
        });
        if (g)
          throw g;
        return c.user = p.user, await this._saveSession(c), await this._notifyAllSubscribers("USER_UPDATED", c), { data: { user: c.user }, error: null };
      });
    } catch (l) {
      if (ge(l))
        return { data: { user: null }, error: l };
      throw l;
    }
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   */
  async setSession(r) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(r));
  }
  async _setSession(r) {
    try {
      if (!r.access_token || !r.refresh_token)
        throw new xr();
      const i = Date.now() / 1e3;
      let l = i, o = !0, u = null;
      const { payload: c } = yf(r.access_token);
      if (c.exp && (l = c.exp, o = l <= i), o) {
        const { session: h, error: m } = await this._callRefreshToken(r.refresh_token);
        if (m)
          return { data: { user: null, session: null }, error: m };
        if (!h)
          return { data: { user: null, session: null }, error: null };
        u = h;
      } else {
        const { data: h, error: m } = await this._getUser(r.access_token);
        if (m)
          throw m;
        u = {
          access_token: r.access_token,
          refresh_token: r.refresh_token,
          user: h.user,
          token_type: "bearer",
          expires_in: l - i,
          expires_at: l
        }, await this._saveSession(u), await this._notifyAllSubscribers("SIGNED_IN", u);
      }
      return { data: { user: u.user, session: u }, error: null };
    } catch (i) {
      if (ge(i))
        return { data: { session: null, user: null }, error: i };
      throw i;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   */
  async refreshSession(r) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(r));
  }
  async _refreshSession(r) {
    try {
      return await this._useSession(async (i) => {
        var l;
        if (!r) {
          const { data: c, error: h } = i;
          if (h)
            throw h;
          r = (l = c.session) !== null && l !== void 0 ? l : void 0;
        }
        if (!r?.refresh_token)
          throw new xr();
        const { session: o, error: u } = await this._callRefreshToken(r.refresh_token);
        return u ? { data: { user: null, session: null }, error: u } : o ? { data: { user: o.user, session: o }, error: null } : { data: { user: null, session: null }, error: null };
      });
    } catch (i) {
      if (ge(i))
        return { data: { user: null, session: null }, error: i };
      throw i;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(r, i) {
    try {
      if (!pn())
        throw new ao("No browser detected.");
      if (r.error || r.error_description || r.error_code)
        throw new ao(r.error_description || "Error in URL with unspecified error_description", {
          error: r.error || "unspecified_error",
          code: r.error_code || "unspecified_code"
        });
      switch (i) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new Ry("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new ao("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (i === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !r.code)
          throw new Ry("No code detected.");
        const { data: Y, error: D } = await this._exchangeCodeForSession(r.code);
        if (D)
          throw D;
        const I = new URL(window.location.href);
        return I.searchParams.delete("code"), window.history.replaceState(window.history.state, "", I.toString()), { data: { session: Y.session, redirectType: null }, error: null };
      }
      const { provider_token: l, provider_refresh_token: o, access_token: u, refresh_token: c, expires_in: h, expires_at: m, token_type: p } = r;
      if (!u || !h || !c || !p)
        throw new ao("No session defined in URL");
      const g = Math.round(Date.now() / 1e3), y = parseInt(h);
      let S = g + y;
      m && (S = parseInt(m));
      const v = S - g;
      v * 1e3 <= na && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${v}s, should have been closer to ${y}s`);
      const k = S - y;
      g - k >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", k, S, g) : g - k < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", k, S, g);
      const { data: A, error: O } = await this._getUser(u);
      if (O)
        throw O;
      const j = {
        provider_token: l,
        provider_refresh_token: o,
        access_token: u,
        expires_in: y,
        expires_at: S,
        refresh_token: c,
        token_type: p,
        user: A.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), { data: { session: j, redirectType: r.type }, error: null };
    } catch (l) {
      if (ge(l))
        return { data: { session: null, redirectType: null }, error: l };
      throw l;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   */
  _isImplicitGrantCallback(r) {
    return !!(r.access_token || r.error_description);
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCECallback(r) {
    const i = await Fr(this.storage, `${this.storageKey}-code-verifier`);
    return !!(r.code && i);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   */
  async signOut(r = { scope: "global" }) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(r));
  }
  async _signOut({ scope: r } = { scope: "global" }) {
    return await this._useSession(async (i) => {
      var l;
      const { data: o, error: u } = i;
      if (u)
        return { error: u };
      const c = (l = o.session) === null || l === void 0 ? void 0 : l.access_token;
      if (c) {
        const { error: h } = await this.admin.signOut(c, r);
        if (h && !(iA(h) && (h.status === 404 || h.status === 401 || h.status === 403)))
          return { error: h };
      }
      return r !== "others" && (await this._removeSession(), await Sr(this.storage, `${this.storageKey}-code-verifier`)), { error: null };
    });
  }
  /**
   * Receive a notification every time an auth event happens.
   * @param callback A callback function to be invoked when an auth event happens.
   */
  onAuthStateChange(r) {
    const i = mA(), l = {
      id: i,
      callback: r,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", i), this.stateChangeEmitters.delete(i);
      }
    };
    return this._debug("#onAuthStateChange()", "registered callback with id", i), this.stateChangeEmitters.set(i, l), (async () => (await this.initializePromise, await this._acquireLock(-1, async () => {
      this._emitInitialSession(i);
    })))(), { data: { subscription: l } };
  }
  async _emitInitialSession(r) {
    return await this._useSession(async (i) => {
      var l, o;
      try {
        const { data: { session: u }, error: c } = i;
        if (c)
          throw c;
        await ((l = this.stateChangeEmitters.get(r)) === null || l === void 0 ? void 0 : l.callback("INITIAL_SESSION", u)), this._debug("INITIAL_SESSION", "callback id", r, "session", u);
      } catch (u) {
        await ((o = this.stateChangeEmitters.get(r)) === null || o === void 0 ? void 0 : o.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", r, "error", u), console.error(u);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   */
  async resetPasswordForEmail(r, i = {}) {
    let l = null, o = null;
    this.flowType === "pkce" && ([l, o] = await Ji(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await Ae(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: r,
          code_challenge: l,
          code_challenge_method: o,
          gotrue_meta_security: { captcha_token: i.captchaToken }
        },
        headers: this.headers,
        redirectTo: i.redirectTo
      });
    } catch (u) {
      if (ge(u))
        return { data: null, error: u };
      throw u;
    }
  }
  /**
   * Gets all the identities linked to a user.
   */
  async getUserIdentities() {
    var r;
    try {
      const { data: i, error: l } = await this.getUser();
      if (l)
        throw l;
      return { data: { identities: (r = i.user.identities) !== null && r !== void 0 ? r : [] }, error: null };
    } catch (i) {
      if (ge(i))
        return { data: null, error: i };
      throw i;
    }
  }
  /**
   * Links an oauth identity to an existing user.
   * This method supports the PKCE flow.
   */
  async linkIdentity(r) {
    var i;
    try {
      const { data: l, error: o } = await this._useSession(async (u) => {
        var c, h, m, p, g;
        const { data: y, error: S } = u;
        if (S)
          throw S;
        const v = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, r.provider, {
          redirectTo: (c = r.options) === null || c === void 0 ? void 0 : c.redirectTo,
          scopes: (h = r.options) === null || h === void 0 ? void 0 : h.scopes,
          queryParams: (m = r.options) === null || m === void 0 ? void 0 : m.queryParams,
          skipBrowserRedirect: !0
        });
        return await Ae(this.fetch, "GET", v, {
          headers: this.headers,
          jwt: (g = (p = y.session) === null || p === void 0 ? void 0 : p.access_token) !== null && g !== void 0 ? g : void 0
        });
      });
      if (o)
        throw o;
      return pn() && !(!((i = r.options) === null || i === void 0) && i.skipBrowserRedirect) && window.location.assign(l?.url), { data: { provider: r.provider, url: l?.url }, error: null };
    } catch (l) {
      if (ge(l))
        return { data: { provider: r.provider, url: null }, error: l };
      throw l;
    }
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   */
  async unlinkIdentity(r) {
    try {
      return await this._useSession(async (i) => {
        var l, o;
        const { data: u, error: c } = i;
        if (c)
          throw c;
        return await Ae(this.fetch, "DELETE", `${this.url}/user/identities/${r.identity_id}`, {
          headers: this.headers,
          jwt: (o = (l = u.session) === null || l === void 0 ? void 0 : l.access_token) !== null && o !== void 0 ? o : void 0
        });
      });
    } catch (i) {
      if (ge(i))
        return { data: null, error: i };
      throw i;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(r) {
    const i = `#_refreshAccessToken(${r.substring(0, 5)}...)`;
    this._debug(i, "begin");
    try {
      const l = Date.now();
      return await vA(async (o) => (o > 0 && await bA(200 * Math.pow(2, o - 1)), this._debug(i, "refreshing attempt", o), await Ae(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: r },
        headers: this.headers,
        xform: Fn
      })), (o, u) => {
        const c = 200 * Math.pow(2, o);
        return u && gf(u) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + c - l < na;
      });
    } catch (l) {
      if (this._debug(i, "error", l), ge(l))
        return { data: { session: null, user: null }, error: l };
      throw l;
    } finally {
      this._debug(i, "end");
    }
  }
  _isValidSession(r) {
    return typeof r == "object" && r !== null && "access_token" in r && "refresh_token" in r && "expires_at" in r;
  }
  async _handleProviderSignIn(r, i) {
    const l = await this._getUrlForProvider(`${this.url}/authorize`, r, {
      redirectTo: i.redirectTo,
      scopes: i.scopes,
      queryParams: i.queryParams
    });
    return this._debug("#_handleProviderSignIn()", "provider", r, "options", i, "url", l), pn() && !i.skipBrowserRedirect && window.location.assign(l), { data: { provider: r, url: l }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes the token
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var r, i;
    const l = "#_recoverAndRefresh()";
    this._debug(l, "begin");
    try {
      const o = await Fr(this.storage, this.storageKey);
      if (o && this.userStorage) {
        let c = await Fr(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer && Object.is(this.storage, this.userStorage) && !c && (c = { user: o.user }, await ra(this.userStorage, this.storageKey + "-user", c)), o.user = (r = c?.user) !== null && r !== void 0 ? r : bf();
      } else if (o && !o.user && !o.user) {
        const c = await Fr(this.storage, this.storageKey + "-user");
        c && c?.user ? (o.user = c.user, await Sr(this.storage, this.storageKey + "-user"), await ra(this.storage, this.storageKey, o)) : o.user = bf();
      }
      if (this._debug(l, "session from storage", o), !this._isValidSession(o)) {
        this._debug(l, "session is not valid"), o !== null && await this._removeSession();
        return;
      }
      const u = ((i = o.expires_at) !== null && i !== void 0 ? i : 1 / 0) * 1e3 - Date.now() < mf;
      if (this._debug(l, `session has${u ? "" : " not"} expired with margin of ${mf}s`), u) {
        if (this.autoRefreshToken && o.refresh_token) {
          const { error: c } = await this._callRefreshToken(o.refresh_token);
          c && (console.error(c), gf(c) || (this._debug(l, "refresh failed with a non-retryable error, removing the session", c), await this._removeSession()));
        }
      } else if (o.user && o.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: c, error: h } = await this._getUser(o.access_token);
          !h && c?.user ? (o.user = c.user, await this._saveSession(o), await this._notifyAllSubscribers("SIGNED_IN", o)) : this._debug(l, "could not get user data, skipping SIGNED_IN notification");
        } catch (c) {
          console.error("Error getting user data:", c), this._debug(l, "error getting user data, skipping SIGNED_IN notification", c);
        }
      else
        await this._notifyAllSubscribers("SIGNED_IN", o);
    } catch (o) {
      this._debug(l, "error", o), console.error(o);
      return;
    } finally {
      this._debug(l, "end");
    }
  }
  async _callRefreshToken(r) {
    var i, l;
    if (!r)
      throw new xr();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const o = `#_callRefreshToken(${r.substring(0, 5)}...)`;
    this._debug(o, "begin");
    try {
      this.refreshingDeferred = new Eo();
      const { data: u, error: c } = await this._refreshAccessToken(r);
      if (c)
        throw c;
      if (!u.session)
        throw new xr();
      await this._saveSession(u.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", u.session);
      const h = { session: u.session, error: null };
      return this.refreshingDeferred.resolve(h), h;
    } catch (u) {
      if (this._debug(o, "error", u), ge(u)) {
        const c = { session: null, error: u };
        return gf(u) || await this._removeSession(), (i = this.refreshingDeferred) === null || i === void 0 || i.resolve(c), c;
      }
      throw (l = this.refreshingDeferred) === null || l === void 0 || l.reject(u), u;
    } finally {
      this.refreshingDeferred = null, this._debug(o, "end");
    }
  }
  async _notifyAllSubscribers(r, i, l = !0) {
    const o = `#_notifyAllSubscribers(${r})`;
    this._debug(o, "begin", i, `broadcast = ${l}`);
    try {
      this.broadcastChannel && l && this.broadcastChannel.postMessage({ event: r, session: i });
      const u = [], c = Array.from(this.stateChangeEmitters.values()).map(async (h) => {
        try {
          await h.callback(r, i);
        } catch (m) {
          u.push(m);
        }
      });
      if (await Promise.all(c), u.length > 0) {
        for (let h = 0; h < u.length; h += 1)
          console.error(u[h]);
        throw u[0];
      }
    } finally {
      this._debug(o, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(r) {
    this._debug("#_saveSession()", r), this.suppressGetSessionWarning = !0;
    const i = Object.assign({}, r), l = i.user && i.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !l && i.user && await ra(this.userStorage, this.storageKey + "-user", {
        user: i.user
      });
      const o = Object.assign({}, i);
      delete o.user;
      const u = My(o);
      await ra(this.storage, this.storageKey, u);
    } else {
      const o = My(i);
      await ra(this.storage, this.storageKey, o);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"), await Sr(this.storage, this.storageKey), await Sr(this.storage, this.storageKey + "-code-verifier"), await Sr(this.storage, this.storageKey + "-user"), this.userStorage && await Sr(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const r = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      r && pn() && window?.removeEventListener && window.removeEventListener("visibilitychange", r);
    } catch (i) {
      console.error("removing visibilitychange callback failed", i);
    }
  }
  /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const r = setInterval(() => this._autoRefreshTokenTick(), na);
    this.autoRefreshTicker = r, r && typeof r == "object" && typeof r.unref == "function" ? r.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(r), setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
  }
  /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const r = this.autoRefreshTicker;
    this.autoRefreshTicker = null, r && clearInterval(r);
  }
  /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@see #stopAutoRefresh}
   */
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link #startAutoRefresh} for more details.
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const r = Date.now();
          try {
            return await this._useSession(async (i) => {
              const { data: { session: l } } = i;
              if (!l || !l.refresh_token || !l.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const o = Math.floor((l.expires_at * 1e3 - r) / na);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${o} ticks, a tick lasts ${na}ms, refresh threshold is ${Vf} ticks`), o <= Vf && await this._callRefreshToken(l.refresh_token);
            });
          } catch (i) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", i);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (r) {
      if (r.isAcquireTimeout || r instanceof p0)
        this._debug("auto refresh token tick lock not available");
      else
        throw r;
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    if (this._debug("#_handleVisibilityChange()"), !pn() || !window?.addEventListener)
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1), window?.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
    } catch (r) {
      console.error("_handleVisibilityChange", r);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(r) {
    const i = `#_onVisibilityChanged(${r})`;
    this._debug(i, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), r || (await this.initializePromise, await this._acquireLock(-1, async () => {
      if (document.visibilityState !== "visible") {
        this._debug(i, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
        return;
      }
      await this._recoverAndRefresh();
    }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(r, i, l) {
    const o = [`provider=${encodeURIComponent(i)}`];
    if (l?.redirectTo && o.push(`redirect_to=${encodeURIComponent(l.redirectTo)}`), l?.scopes && o.push(`scopes=${encodeURIComponent(l.scopes)}`), this.flowType === "pkce") {
      const [u, c] = await Ji(this.storage, this.storageKey), h = new URLSearchParams({
        code_challenge: `${encodeURIComponent(u)}`,
        code_challenge_method: `${encodeURIComponent(c)}`
      });
      o.push(h.toString());
    }
    if (l?.queryParams) {
      const u = new URLSearchParams(l.queryParams);
      o.push(u.toString());
    }
    return l?.skipBrowserRedirect && o.push(`skip_http_redirect=${l.skipBrowserRedirect}`), `${r}?${o.join("&")}`;
  }
  async _unenroll(r) {
    try {
      return await this._useSession(async (i) => {
        var l;
        const { data: o, error: u } = i;
        return u ? { data: null, error: u } : await Ae(this.fetch, "DELETE", `${this.url}/factors/${r.factorId}`, {
          headers: this.headers,
          jwt: (l = o?.session) === null || l === void 0 ? void 0 : l.access_token
        });
      });
    } catch (i) {
      if (ge(i))
        return { data: null, error: i };
      throw i;
    }
  }
  async _enroll(r) {
    try {
      return await this._useSession(async (i) => {
        var l, o;
        const { data: u, error: c } = i;
        if (c)
          return { data: null, error: c };
        const h = Object.assign({ friendly_name: r.friendlyName, factor_type: r.factorType }, r.factorType === "phone" ? { phone: r.phone } : { issuer: r.issuer }), { data: m, error: p } = await Ae(this.fetch, "POST", `${this.url}/factors`, {
          body: h,
          headers: this.headers,
          jwt: (l = u?.session) === null || l === void 0 ? void 0 : l.access_token
        });
        return p ? { data: null, error: p } : (r.factorType === "totp" && (!((o = m?.totp) === null || o === void 0) && o.qr_code) && (m.totp.qr_code = `data:image/svg+xml;utf-8,${m.totp.qr_code}`), { data: m, error: null });
      });
    } catch (i) {
      if (ge(i))
        return { data: null, error: i };
      throw i;
    }
  }
  /**
   * {@see GoTrueMFAApi#verify}
   */
  async _verify(r) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (i) => {
          var l;
          const { data: o, error: u } = i;
          if (u)
            return { data: null, error: u };
          const { data: c, error: h } = await Ae(this.fetch, "POST", `${this.url}/factors/${r.factorId}/verify`, {
            body: { code: r.code, challenge_id: r.challengeId },
            headers: this.headers,
            jwt: (l = o?.session) === null || l === void 0 ? void 0 : l.access_token
          });
          return h ? { data: null, error: h } : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + c.expires_in }, c)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", c), { data: c, error: h });
        });
      } catch (i) {
        if (ge(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challenge}
   */
  async _challenge(r) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (i) => {
          var l;
          const { data: o, error: u } = i;
          return u ? { data: null, error: u } : await Ae(this.fetch, "POST", `${this.url}/factors/${r.factorId}/challenge`, {
            body: { channel: r.channel },
            headers: this.headers,
            jwt: (l = o?.session) === null || l === void 0 ? void 0 : l.access_token
          });
        });
      } catch (i) {
        if (ge(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(r) {
    const { data: i, error: l } = await this._challenge({
      factorId: r.factorId
    });
    return l ? { data: null, error: l } : await this._verify({
      factorId: r.factorId,
      challengeId: i.id,
      code: r.code
    });
  }
  /**
   * {@see GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    const { data: { user: r }, error: i } = await this.getUser();
    if (i)
      return { data: null, error: i };
    const l = r?.factors || [], o = l.filter((c) => c.factor_type === "totp" && c.status === "verified"), u = l.filter((c) => c.factor_type === "phone" && c.status === "verified");
    return {
      data: {
        all: l,
        totp: o,
        phone: u
      },
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel() {
    return this._acquireLock(-1, async () => await this._useSession(async (r) => {
      var i, l;
      const { data: { session: o }, error: u } = r;
      if (u)
        return { data: null, error: u };
      if (!o)
        return {
          data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
          error: null
        };
      const { payload: c } = yf(o.access_token);
      let h = null;
      c.aal && (h = c.aal);
      let m = h;
      ((l = (i = o.user.factors) === null || i === void 0 ? void 0 : i.filter((y) => y.status === "verified")) !== null && l !== void 0 ? l : []).length > 0 && (m = "aal2");
      const g = c.amr || [];
      return { data: { currentLevel: h, nextLevel: m, currentAuthenticationMethods: g }, error: null };
    }));
  }
  async fetchJwk(r, i = { keys: [] }) {
    let l = i.keys.find((h) => h.kid === r);
    if (l)
      return l;
    const o = Date.now();
    if (l = this.jwks.keys.find((h) => h.kid === r), l && this.jwks_cached_at + nA > o)
      return l;
    const { data: u, error: c } = await Ae(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (c)
      throw c;
    return !u.keys || u.keys.length === 0 || (this.jwks = u, this.jwks_cached_at = o, l = u.keys.find((h) => h.kid === r), !l) ? null : l;
  }
  /**
   * Extracts the JWT claims present in the access token by first verifying the
   * JWT against the server's JSON Web Key Set endpoint
   * `/.well-known/jwks.json` which is often cached, resulting in significantly
   * faster responses. Prefer this method over {@link #getUser} which always
   * sends a request to the Auth server for each JWT.
   *
   * If the project is not using an asymmetric JWT signing key (like ECC or
   * RSA) it always sends a request to the Auth server (similar to {@link
   * #getUser}) to verify the JWT.
   *
   * @param jwt An optional specific JWT you wish to verify, not the one you
   *            can obtain from {@link #getSession}.
   * @param options Various additional options that allow you to customize the
   *                behavior of this method.
   */
  async getClaims(r, i = {}) {
    try {
      let l = r;
      if (!l) {
        const { data: v, error: k } = await this.getSession();
        if (k || !v.session)
          return { data: null, error: k };
        l = v.session.access_token;
      }
      const { header: o, payload: u, signature: c, raw: { header: h, payload: m } } = yf(l);
      i?.allowExpired || TA(u.exp);
      const p = !o.alg || o.alg.startsWith("HS") || !o.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(o.kid, i?.keys ? { keys: i.keys } : i?.jwks);
      if (!p) {
        const { error: v } = await this.getUser(l);
        if (v)
          throw v;
        return {
          data: {
            claims: u,
            header: o,
            signature: c
          },
          error: null
        };
      }
      const g = AA(o.alg), y = await crypto.subtle.importKey("jwk", p, g, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(g, y, c, hA(`${h}.${m}`)))
        throw new $f("Invalid JWT signature");
      return {
        data: {
          claims: u,
          header: o,
          signature: c
        },
        error: null
      };
    } catch (l) {
      if (ge(l))
        return { data: null, error: l };
      throw l;
    }
  }
}
zl.nextInstanceID = 0;
const IA = zl;
class GA extends IA {
  constructor(r) {
    super(r);
  }
}
var $A = function(n, r, i, l) {
  function o(u) {
    return u instanceof i ? u : new i(function(c) {
      c(u);
    });
  }
  return new (i || (i = Promise))(function(u, c) {
    function h(g) {
      try {
        p(l.next(g));
      } catch (y) {
        c(y);
      }
    }
    function m(g) {
      try {
        p(l.throw(g));
      } catch (y) {
        c(y);
      }
    }
    function p(g) {
      g.done ? u(g.value) : o(g.value).then(h, m);
    }
    p((l = l.apply(n, r || [])).next());
  });
};
class YA {
  /**
   * Create a new client for use in the browser.
   * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
   * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
   * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
   * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
   * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
   * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
   * @param options.realtime Options passed along to realtime-js constructor.
   * @param options.global.fetch A custom fetch implementation.
   * @param options.global.headers Any additional headers to send with each network request.
   */
  constructor(r, i, l) {
    var o, u, c;
    if (this.supabaseUrl = r, this.supabaseKey = i, !r)
      throw new Error("supabaseUrl is required.");
    if (!i)
      throw new Error("supabaseKey is required.");
    const h = XT(r), m = new URL(h);
    this.realtimeUrl = new URL("realtime/v1", m), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", m), this.storageUrl = new URL("storage/v1", m), this.functionsUrl = new URL("functions/v1", m);
    const p = `sb-${m.hostname.split(".")[0]}-auth-token`, g = {
      db: VT,
      realtime: GT,
      auth: Object.assign(Object.assign({}, IT), { storageKey: p }),
      global: PT
    }, y = ZT(l ?? {}, g);
    this.storageKey = (o = y.auth.storageKey) !== null && o !== void 0 ? o : "", this.headers = (u = y.global.headers) !== null && u !== void 0 ? u : {}, y.accessToken ? (this.accessToken = y.accessToken, this.auth = new Proxy({}, {
      get: (S, v) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(v)} is not possible`);
      }
    })) : this.auth = this._initSupabaseAuthClient((c = y.auth) !== null && c !== void 0 ? c : {}, this.headers, y.global.fetch), this.fetch = QT(i, this._getAccessToken.bind(this), y.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers, accessToken: this._getAccessToken.bind(this) }, y.realtime)), this.rest = new cT(new URL("rest/v1", m).href, {
      headers: this.headers,
      schema: y.db.schema,
      fetch: this.fetch
    }), y.accessToken || this._listenForAuthEvents();
  }
  /**
   * Supabase Functions allows you to deploy and invoke edge functions.
   */
  get functions() {
    return new Jk(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  /**
   * Supabase Storage allows you to manage user-generated content, such as photos or videos.
   */
  get storage() {
    return new LT(this.storageUrl.href, this.headers, this.fetch);
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(r) {
    return this.rest.from(r);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.schema
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(r) {
    return this.rest.schema(r);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.rpc
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(r, i = {}, l = {}) {
    return this.rest.rpc(r, i, l);
  }
  /**
   * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
   *
   * @param {string} name - The name of the Realtime channel.
   * @param {Object} opts - The options to pass to the Realtime channel.
   *
   */
  channel(r, i = { config: {} }) {
    return this.realtime.channel(r, i);
  }
  /**
   * Returns all Realtime channels.
   */
  getChannels() {
    return this.realtime.getChannels();
  }
  /**
   * Unsubscribes and removes Realtime channel from Realtime client.
   *
   * @param {RealtimeChannel} channel - The name of the Realtime channel.
   *
   */
  removeChannel(r) {
    return this.realtime.removeChannel(r);
  }
  /**
   * Unsubscribes and removes all Realtime channels from Realtime client.
   */
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  _getAccessToken() {
    var r, i;
    return $A(this, void 0, void 0, function* () {
      if (this.accessToken)
        return yield this.accessToken();
      const { data: l } = yield this.auth.getSession();
      return (i = (r = l.session) === null || r === void 0 ? void 0 : r.access_token) !== null && i !== void 0 ? i : null;
    });
  }
  _initSupabaseAuthClient({ autoRefreshToken: r, persistSession: i, detectSessionInUrl: l, storage: o, storageKey: u, flowType: c, lock: h, debug: m }, p, g) {
    const y = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new GA({
      url: this.authUrl.href,
      headers: Object.assign(Object.assign({}, y), p),
      storageKey: u,
      autoRefreshToken: r,
      persistSession: i,
      detectSessionInUrl: l,
      storage: o,
      flowType: c,
      lock: h,
      debug: m,
      fetch: g,
      // auth checks if there is a custom authorizaiton header using this flag
      // so it knows whether to return an error when getUser is called with no session
      hasCustomAuthorizationHeader: "Authorization" in this.headers
    });
  }
  _initRealtimeClient(r) {
    return new kT(this.realtimeUrl.href, Object.assign(Object.assign({}, r), { params: Object.assign({ apikey: this.supabaseKey }, r?.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((i, l) => {
      this._handleTokenChanged(i, "CLIENT", l?.access_token);
    });
  }
  _handleTokenChanged(r, i, l) {
    (r === "TOKEN_REFRESHED" || r === "SIGNED_IN") && this.changedAccessToken !== l ? this.changedAccessToken = l : r === "SIGNED_OUT" && (this.realtime.setAuth(), i == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
  }
}
const FA = (n, r, i) => new YA(n, r, i), QA = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_BACKEND_URL: void 0, VITE_FRONTEND_URL: "https://qurius-ai.vercel.app", VITE_JINA_API_KEY: void 0, VITE_OPEN_ROUTER_API_KEY: void 0, VITE_SUPABASE_ANON_KEY: void 0, VITE_SUPABASE_PROJECT_URL: void 0, VITE_SUPABASE_SERVICE_ROLE_KEY: void 0 };
function kr(n, r = "") {
  const i = typeof process < "u" ? process.env?.[n] : void 0;
  return (typeof import.meta < "u" ? QA?.[n] : void 0) ?? i ?? r;
}
const yo = {
  projectUrl: kr("VITE_SUPABASE_PROJECT_URL"),
  anonKey: kr("VITE_SUPABASE_ANON_KEY"),
  serviceRoleKey: kr("VITE_SUPABASE_SERVICE_ROLE_KEY")
};
kr("VITE_OPEN_ROUTER_URL", "https://openrouter.ai/api/v1"), kr("VITE_OPEN_ROUTER_API_KEY"), kr("VITE_SOURCE_URL", "http://localhost:8081");
kr("VITE_JINA_API_URL", "https://api.jina.ai/v1/embeddings"), kr("VITE_JINA_API_KEY");
typeof window < "u" && (yo.projectUrl || console.error("Missing VITE_SUPABASE_PROJECT_URL"), yo.anonKey || console.error("Missing VITE_SUPABASE_ANON_KEY"));
const m0 = yo.projectUrl, g0 = yo.anonKey;
if (!m0)
  throw new Error("Missing Supabase URL");
if (!g0)
  throw new Error("Missing Supabase anon key");
const kn = FA(m0, g0);
function y0(n, r) {
  return function() {
    return n.apply(r, arguments);
  };
}
const { toString: KA } = Object.prototype, { getPrototypeOf: Sh } = Object, { iterator: ko, toStringTag: b0 } = Symbol, To = /* @__PURE__ */ ((n) => (r) => {
  const i = KA.call(r);
  return n[i] || (n[i] = i.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), gn = (n) => (n = n.toLowerCase(), (r) => To(r) === n), Ao = (n) => (r) => typeof r === n, { isArray: ha } = Array, jl = Ao("undefined");
function XA(n) {
  return n !== null && !jl(n) && n.constructor !== null && !jl(n.constructor) && Mt(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const v0 = gn("ArrayBuffer");
function ZA(n) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(n) : r = n && n.buffer && v0(n.buffer), r;
}
const JA = Ao("string"), Mt = Ao("function"), w0 = Ao("number"), Oo = (n) => n !== null && typeof n == "object", WA = (n) => n === !0 || n === !1, uo = (n) => {
  if (To(n) !== "object")
    return !1;
  const r = Sh(n);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(b0 in n) && !(ko in n);
}, eO = gn("Date"), tO = gn("File"), nO = gn("Blob"), rO = gn("FileList"), iO = (n) => Oo(n) && Mt(n.pipe), aO = (n) => {
  let r;
  return n && (typeof FormData == "function" && n instanceof FormData || Mt(n.append) && ((r = To(n)) === "formdata" || // detect form-data instance
  r === "object" && Mt(n.toString) && n.toString() === "[object FormData]"));
}, lO = gn("URLSearchParams"), [sO, oO, uO, cO] = ["ReadableStream", "Request", "Response", "Headers"].map(gn), fO = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ul(n, r, { allOwnKeys: i = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let l, o;
  if (typeof n != "object" && (n = [n]), ha(n))
    for (l = 0, o = n.length; l < o; l++)
      r.call(null, n[l], l, n);
  else {
    const u = i ? Object.getOwnPropertyNames(n) : Object.keys(n), c = u.length;
    let h;
    for (l = 0; l < c; l++)
      h = u[l], r.call(null, n[h], h, n);
  }
}
function S0(n, r) {
  r = r.toLowerCase();
  const i = Object.keys(n);
  let l = i.length, o;
  for (; l-- > 0; )
    if (o = i[l], r === o.toLowerCase())
      return o;
  return null;
}
const Zr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, x0 = (n) => !jl(n) && n !== Zr;
function Yf() {
  const { caseless: n } = x0(this) && this || {}, r = {}, i = (l, o) => {
    const u = n && S0(r, o) || o;
    uo(r[u]) && uo(l) ? r[u] = Yf(r[u], l) : uo(l) ? r[u] = Yf({}, l) : ha(l) ? r[u] = l.slice() : r[u] = l;
  };
  for (let l = 0, o = arguments.length; l < o; l++)
    arguments[l] && Ul(arguments[l], i);
  return r;
}
const hO = (n, r, i, { allOwnKeys: l } = {}) => (Ul(r, (o, u) => {
  i && Mt(o) ? n[u] = y0(o, i) : n[u] = o;
}, { allOwnKeys: l }), n), dO = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), pO = (n, r, i, l) => {
  n.prototype = Object.create(r.prototype, l), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: r.prototype
  }), i && Object.assign(n.prototype, i);
}, mO = (n, r, i, l) => {
  let o, u, c;
  const h = {};
  if (r = r || {}, n == null) return r;
  do {
    for (o = Object.getOwnPropertyNames(n), u = o.length; u-- > 0; )
      c = o[u], (!l || l(c, n, r)) && !h[c] && (r[c] = n[c], h[c] = !0);
    n = i !== !1 && Sh(n);
  } while (n && (!i || i(n, r)) && n !== Object.prototype);
  return r;
}, gO = (n, r, i) => {
  n = String(n), (i === void 0 || i > n.length) && (i = n.length), i -= r.length;
  const l = n.indexOf(r, i);
  return l !== -1 && l === i;
}, yO = (n) => {
  if (!n) return null;
  if (ha(n)) return n;
  let r = n.length;
  if (!w0(r)) return null;
  const i = new Array(r);
  for (; r-- > 0; )
    i[r] = n[r];
  return i;
}, bO = /* @__PURE__ */ ((n) => (r) => n && r instanceof n)(typeof Uint8Array < "u" && Sh(Uint8Array)), vO = (n, r) => {
  const l = (n && n[ko]).call(n);
  let o;
  for (; (o = l.next()) && !o.done; ) {
    const u = o.value;
    r.call(n, u[0], u[1]);
  }
}, wO = (n, r) => {
  let i;
  const l = [];
  for (; (i = n.exec(r)) !== null; )
    l.push(i);
  return l;
}, SO = gn("HTMLFormElement"), xO = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(i, l, o) {
    return l.toUpperCase() + o;
  }
), Hy = (({ hasOwnProperty: n }) => (r, i) => n.call(r, i))(Object.prototype), _O = gn("RegExp"), _0 = (n, r) => {
  const i = Object.getOwnPropertyDescriptors(n), l = {};
  Ul(i, (o, u) => {
    let c;
    (c = r(o, u, n)) !== !1 && (l[u] = c || o);
  }), Object.defineProperties(n, l);
}, EO = (n) => {
  _0(n, (r, i) => {
    if (Mt(n) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
      return !1;
    const l = n[i];
    if (Mt(l)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + i + "'");
      });
    }
  });
}, kO = (n, r) => {
  const i = {}, l = (o) => {
    o.forEach((u) => {
      i[u] = !0;
    });
  };
  return ha(n) ? l(n) : l(String(n).split(r)), i;
}, TO = () => {
}, AO = (n, r) => n != null && Number.isFinite(n = +n) ? n : r;
function OO(n) {
  return !!(n && Mt(n.append) && n[b0] === "FormData" && n[ko]);
}
const CO = (n) => {
  const r = new Array(10), i = (l, o) => {
    if (Oo(l)) {
      if (r.indexOf(l) >= 0)
        return;
      if (!("toJSON" in l)) {
        r[o] = l;
        const u = ha(l) ? [] : {};
        return Ul(l, (c, h) => {
          const m = i(c, o + 1);
          !jl(m) && (u[h] = m);
        }), r[o] = void 0, u;
      }
    }
    return l;
  };
  return i(n, 0);
}, RO = gn("AsyncFunction"), zO = (n) => n && (Oo(n) || Mt(n)) && Mt(n.then) && Mt(n.catch), E0 = ((n, r) => n ? setImmediate : r ? ((i, l) => (Zr.addEventListener("message", ({ source: o, data: u }) => {
  o === Zr && u === i && l.length && l.shift()();
}, !1), (o) => {
  l.push(o), Zr.postMessage(i, "*");
}))(`axios@${Math.random()}`, []) : (i) => setTimeout(i))(
  typeof setImmediate == "function",
  Mt(Zr.postMessage)
), jO = typeof queueMicrotask < "u" ? queueMicrotask.bind(Zr) : typeof process < "u" && process.nextTick || E0, DO = (n) => n != null && Mt(n[ko]), L = {
  isArray: ha,
  isArrayBuffer: v0,
  isBuffer: XA,
  isFormData: aO,
  isArrayBufferView: ZA,
  isString: JA,
  isNumber: w0,
  isBoolean: WA,
  isObject: Oo,
  isPlainObject: uo,
  isReadableStream: sO,
  isRequest: oO,
  isResponse: uO,
  isHeaders: cO,
  isUndefined: jl,
  isDate: eO,
  isFile: tO,
  isBlob: nO,
  isRegExp: _O,
  isFunction: Mt,
  isStream: iO,
  isURLSearchParams: lO,
  isTypedArray: bO,
  isFileList: rO,
  forEach: Ul,
  merge: Yf,
  extend: hO,
  trim: fO,
  stripBOM: dO,
  inherits: pO,
  toFlatObject: mO,
  kindOf: To,
  kindOfTest: gn,
  endsWith: gO,
  toArray: yO,
  forEachEntry: vO,
  matchAll: wO,
  isHTMLForm: SO,
  hasOwnProperty: Hy,
  hasOwnProp: Hy,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: _0,
  freezeMethods: EO,
  toObjectSet: kO,
  toCamelCase: xO,
  noop: TO,
  toFiniteNumber: AO,
  findKey: S0,
  global: Zr,
  isContextDefined: x0,
  isSpecCompliantForm: OO,
  toJSONObject: CO,
  isAsyncFn: RO,
  isThenable: zO,
  setImmediate: E0,
  asap: jO,
  isIterable: DO
};
function ye(n, r, i, l, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", r && (this.code = r), i && (this.config = i), l && (this.request = l), o && (this.response = o, this.status = o.status ? o.status : null);
}
L.inherits(ye, Error, {
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
const k0 = ye.prototype, T0 = {};
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
  T0[n] = { value: n };
});
Object.defineProperties(ye, T0);
Object.defineProperty(k0, "isAxiosError", { value: !0 });
ye.from = (n, r, i, l, o, u) => {
  const c = Object.create(k0);
  return L.toFlatObject(n, c, function(m) {
    return m !== Error.prototype;
  }, (h) => h !== "isAxiosError"), ye.call(c, n.message, r, i, l, o), c.cause = n, c.name = n.name, u && Object.assign(c, u), c;
};
const NO = null;
function Ff(n) {
  return L.isPlainObject(n) || L.isArray(n);
}
function A0(n) {
  return L.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Py(n, r, i) {
  return n ? n.concat(r).map(function(o, u) {
    return o = A0(o), !i && u ? "[" + o + "]" : o;
  }).join(i ? "." : "") : r;
}
function MO(n) {
  return L.isArray(n) && !n.some(Ff);
}
const UO = L.toFlatObject(L, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function Co(n, r, i) {
  if (!L.isObject(n))
    throw new TypeError("target must be an object");
  r = r || new FormData(), i = L.toFlatObject(i, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(A, O) {
    return !L.isUndefined(O[A]);
  });
  const l = i.metaTokens, o = i.visitor || g, u = i.dots, c = i.indexes, m = (i.Blob || typeof Blob < "u" && Blob) && L.isSpecCompliantForm(r);
  if (!L.isFunction(o))
    throw new TypeError("visitor must be a function");
  function p(k) {
    if (k === null) return "";
    if (L.isDate(k))
      return k.toISOString();
    if (L.isBoolean(k))
      return k.toString();
    if (!m && L.isBlob(k))
      throw new ye("Blob is not supported. Use a Buffer instead.");
    return L.isArrayBuffer(k) || L.isTypedArray(k) ? m && typeof Blob == "function" ? new Blob([k]) : Buffer.from(k) : k;
  }
  function g(k, A, O) {
    let j = k;
    if (k && !O && typeof k == "object") {
      if (L.endsWith(A, "{}"))
        A = l ? A : A.slice(0, -2), k = JSON.stringify(k);
      else if (L.isArray(k) && MO(k) || (L.isFileList(k) || L.endsWith(A, "[]")) && (j = L.toArray(k)))
        return A = A0(A), j.forEach(function(D, I) {
          !(L.isUndefined(D) || D === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            c === !0 ? Py([A], I, u) : c === null ? A : A + "[]",
            p(D)
          );
        }), !1;
    }
    return Ff(k) ? !0 : (r.append(Py(O, A, u), p(k)), !1);
  }
  const y = [], S = Object.assign(UO, {
    defaultVisitor: g,
    convertValue: p,
    isVisitable: Ff
  });
  function v(k, A) {
    if (!L.isUndefined(k)) {
      if (y.indexOf(k) !== -1)
        throw Error("Circular reference detected in " + A.join("."));
      y.push(k), L.forEach(k, function(j, Y) {
        (!(L.isUndefined(j) || j === null) && o.call(
          r,
          j,
          L.isString(Y) ? Y.trim() : Y,
          A,
          S
        )) === !0 && v(j, A ? A.concat(Y) : [Y]);
      }), y.pop();
    }
  }
  if (!L.isObject(n))
    throw new TypeError("data must be an object");
  return v(n), r;
}
function Vy(n) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(l) {
    return r[l];
  });
}
function xh(n, r) {
  this._pairs = [], n && Co(n, this, r);
}
const O0 = xh.prototype;
O0.append = function(r, i) {
  this._pairs.push([r, i]);
};
O0.toString = function(r) {
  const i = r ? function(l) {
    return r.call(this, l, Vy);
  } : Vy;
  return this._pairs.map(function(o) {
    return i(o[0]) + "=" + i(o[1]);
  }, "").join("&");
};
function BO(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function C0(n, r, i) {
  if (!r)
    return n;
  const l = i && i.encode || BO;
  L.isFunction(i) && (i = {
    serialize: i
  });
  const o = i && i.serialize;
  let u;
  if (o ? u = o(r, i) : u = L.isURLSearchParams(r) ? r.toString() : new xh(r, i).toString(l), u) {
    const c = n.indexOf("#");
    c !== -1 && (n = n.slice(0, c)), n += (n.indexOf("?") === -1 ? "?" : "&") + u;
  }
  return n;
}
class Iy {
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
  use(r, i, l) {
    return this.handlers.push({
      fulfilled: r,
      rejected: i,
      synchronous: l ? l.synchronous : !1,
      runWhen: l ? l.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
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
  forEach(r) {
    L.forEach(this.handlers, function(l) {
      l !== null && r(l);
    });
  }
}
const R0 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, LO = typeof URLSearchParams < "u" ? URLSearchParams : xh, qO = typeof FormData < "u" ? FormData : null, HO = typeof Blob < "u" ? Blob : null, PO = {
  isBrowser: !0,
  classes: {
    URLSearchParams: LO,
    FormData: qO,
    Blob: HO
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, _h = typeof window < "u" && typeof document < "u", Qf = typeof navigator == "object" && navigator || void 0, VO = _h && (!Qf || ["ReactNative", "NativeScript", "NS"].indexOf(Qf.product) < 0), IO = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", GO = _h && window.location.href || "http://localhost", $O = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: _h,
  hasStandardBrowserEnv: VO,
  hasStandardBrowserWebWorkerEnv: IO,
  navigator: Qf,
  origin: GO
}, Symbol.toStringTag, { value: "Module" })), St = {
  ...$O,
  ...PO
};
function YO(n, r) {
  return Co(n, new St.classes.URLSearchParams(), Object.assign({
    visitor: function(i, l, o, u) {
      return St.isNode && L.isBuffer(i) ? (this.append(l, i.toString("base64")), !1) : u.defaultVisitor.apply(this, arguments);
    }
  }, r));
}
function FO(n) {
  return L.matchAll(/\w+|\[(\w*)]/g, n).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function QO(n) {
  const r = {}, i = Object.keys(n);
  let l;
  const o = i.length;
  let u;
  for (l = 0; l < o; l++)
    u = i[l], r[u] = n[u];
  return r;
}
function z0(n) {
  function r(i, l, o, u) {
    let c = i[u++];
    if (c === "__proto__") return !0;
    const h = Number.isFinite(+c), m = u >= i.length;
    return c = !c && L.isArray(o) ? o.length : c, m ? (L.hasOwnProp(o, c) ? o[c] = [o[c], l] : o[c] = l, !h) : ((!o[c] || !L.isObject(o[c])) && (o[c] = []), r(i, l, o[c], u) && L.isArray(o[c]) && (o[c] = QO(o[c])), !h);
  }
  if (L.isFormData(n) && L.isFunction(n.entries)) {
    const i = {};
    return L.forEachEntry(n, (l, o) => {
      r(FO(l), o, i, 0);
    }), i;
  }
  return null;
}
function KO(n, r, i) {
  if (L.isString(n))
    try {
      return (r || JSON.parse)(n), L.trim(n);
    } catch (l) {
      if (l.name !== "SyntaxError")
        throw l;
    }
  return (i || JSON.stringify)(n);
}
const Bl = {
  transitional: R0,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, i) {
    const l = i.getContentType() || "", o = l.indexOf("application/json") > -1, u = L.isObject(r);
    if (u && L.isHTMLForm(r) && (r = new FormData(r)), L.isFormData(r))
      return o ? JSON.stringify(z0(r)) : r;
    if (L.isArrayBuffer(r) || L.isBuffer(r) || L.isStream(r) || L.isFile(r) || L.isBlob(r) || L.isReadableStream(r))
      return r;
    if (L.isArrayBufferView(r))
      return r.buffer;
    if (L.isURLSearchParams(r))
      return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let h;
    if (u) {
      if (l.indexOf("application/x-www-form-urlencoded") > -1)
        return YO(r, this.formSerializer).toString();
      if ((h = L.isFileList(r)) || l.indexOf("multipart/form-data") > -1) {
        const m = this.env && this.env.FormData;
        return Co(
          h ? { "files[]": r } : r,
          m && new m(),
          this.formSerializer
        );
      }
    }
    return u || o ? (i.setContentType("application/json", !1), KO(r)) : r;
  }],
  transformResponse: [function(r) {
    const i = this.transitional || Bl.transitional, l = i && i.forcedJSONParsing, o = this.responseType === "json";
    if (L.isResponse(r) || L.isReadableStream(r))
      return r;
    if (r && L.isString(r) && (l && !this.responseType || o)) {
      const c = !(i && i.silentJSONParsing) && o;
      try {
        return JSON.parse(r);
      } catch (h) {
        if (c)
          throw h.name === "SyntaxError" ? ye.from(h, ye.ERR_BAD_RESPONSE, this, null, this.response) : h;
      }
    }
    return r;
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
    FormData: St.classes.FormData,
    Blob: St.classes.Blob
  },
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
L.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  Bl.headers[n] = {};
});
const XO = L.toObjectSet([
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
]), ZO = (n) => {
  const r = {};
  let i, l, o;
  return n && n.split(`
`).forEach(function(c) {
    o = c.indexOf(":"), i = c.substring(0, o).trim().toLowerCase(), l = c.substring(o + 1).trim(), !(!i || r[i] && XO[i]) && (i === "set-cookie" ? r[i] ? r[i].push(l) : r[i] = [l] : r[i] = r[i] ? r[i] + ", " + l : l);
  }), r;
}, Gy = Symbol("internals");
function xl(n) {
  return n && String(n).trim().toLowerCase();
}
function co(n) {
  return n === !1 || n == null ? n : L.isArray(n) ? n.map(co) : String(n);
}
function JO(n) {
  const r = /* @__PURE__ */ Object.create(null), i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let l;
  for (; l = i.exec(n); )
    r[l[1]] = l[2];
  return r;
}
const WO = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function wf(n, r, i, l, o) {
  if (L.isFunction(l))
    return l.call(this, r, i);
  if (o && (r = i), !!L.isString(r)) {
    if (L.isString(l))
      return r.indexOf(l) !== -1;
    if (L.isRegExp(l))
      return l.test(r);
  }
}
function e2(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, i, l) => i.toUpperCase() + l);
}
function t2(n, r) {
  const i = L.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((l) => {
    Object.defineProperty(n, l + i, {
      value: function(o, u, c) {
        return this[l].call(this, r, o, u, c);
      },
      configurable: !0
    });
  });
}
let Ut = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, i, l) {
    const o = this;
    function u(h, m, p) {
      const g = xl(m);
      if (!g)
        throw new Error("header name must be a non-empty string");
      const y = L.findKey(o, g);
      (!y || o[y] === void 0 || p === !0 || p === void 0 && o[y] !== !1) && (o[y || m] = co(h));
    }
    const c = (h, m) => L.forEach(h, (p, g) => u(p, g, m));
    if (L.isPlainObject(r) || r instanceof this.constructor)
      c(r, i);
    else if (L.isString(r) && (r = r.trim()) && !WO(r))
      c(ZO(r), i);
    else if (L.isObject(r) && L.isIterable(r)) {
      let h = {}, m, p;
      for (const g of r) {
        if (!L.isArray(g))
          throw TypeError("Object iterator must return a key-value pair");
        h[p = g[0]] = (m = h[p]) ? L.isArray(m) ? [...m, g[1]] : [m, g[1]] : g[1];
      }
      c(h, i);
    } else
      r != null && u(i, r, l);
    return this;
  }
  get(r, i) {
    if (r = xl(r), r) {
      const l = L.findKey(this, r);
      if (l) {
        const o = this[l];
        if (!i)
          return o;
        if (i === !0)
          return JO(o);
        if (L.isFunction(i))
          return i.call(this, o, l);
        if (L.isRegExp(i))
          return i.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, i) {
    if (r = xl(r), r) {
      const l = L.findKey(this, r);
      return !!(l && this[l] !== void 0 && (!i || wf(this, this[l], l, i)));
    }
    return !1;
  }
  delete(r, i) {
    const l = this;
    let o = !1;
    function u(c) {
      if (c = xl(c), c) {
        const h = L.findKey(l, c);
        h && (!i || wf(l, l[h], h, i)) && (delete l[h], o = !0);
      }
    }
    return L.isArray(r) ? r.forEach(u) : u(r), o;
  }
  clear(r) {
    const i = Object.keys(this);
    let l = i.length, o = !1;
    for (; l--; ) {
      const u = i[l];
      (!r || wf(this, this[u], u, r, !0)) && (delete this[u], o = !0);
    }
    return o;
  }
  normalize(r) {
    const i = this, l = {};
    return L.forEach(this, (o, u) => {
      const c = L.findKey(l, u);
      if (c) {
        i[c] = co(o), delete i[u];
        return;
      }
      const h = r ? e2(u) : String(u).trim();
      h !== u && delete i[u], i[h] = co(o), l[h] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const i = /* @__PURE__ */ Object.create(null);
    return L.forEach(this, (l, o) => {
      l != null && l !== !1 && (i[o] = r && L.isArray(l) ? l.join(", ") : l);
    }), i;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, i]) => r + ": " + i).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...i) {
    const l = new this(r);
    return i.forEach((o) => l.set(o)), l;
  }
  static accessor(r) {
    const l = (this[Gy] = this[Gy] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function u(c) {
      const h = xl(c);
      l[h] || (t2(o, c), l[h] = !0);
    }
    return L.isArray(r) ? r.forEach(u) : u(r), this;
  }
};
Ut.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
L.reduceDescriptors(Ut.prototype, ({ value: n }, r) => {
  let i = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => n,
    set(l) {
      this[i] = l;
    }
  };
});
L.freezeMethods(Ut);
function Sf(n, r) {
  const i = this || Bl, l = r || i, o = Ut.from(l.headers);
  let u = l.data;
  return L.forEach(n, function(h) {
    u = h.call(i, u, o.normalize(), r ? r.status : void 0);
  }), o.normalize(), u;
}
function j0(n) {
  return !!(n && n.__CANCEL__);
}
function da(n, r, i) {
  ye.call(this, n ?? "canceled", ye.ERR_CANCELED, r, i), this.name = "CanceledError";
}
L.inherits(da, ye, {
  __CANCEL__: !0
});
function D0(n, r, i) {
  const l = i.config.validateStatus;
  !i.status || !l || l(i.status) ? n(i) : r(new ye(
    "Request failed with status code " + i.status,
    [ye.ERR_BAD_REQUEST, ye.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4],
    i.config,
    i.request,
    i
  ));
}
function n2(n) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return r && r[1] || "";
}
function r2(n, r) {
  n = n || 10;
  const i = new Array(n), l = new Array(n);
  let o = 0, u = 0, c;
  return r = r !== void 0 ? r : 1e3, function(m) {
    const p = Date.now(), g = l[u];
    c || (c = p), i[o] = m, l[o] = p;
    let y = u, S = 0;
    for (; y !== o; )
      S += i[y++], y = y % n;
    if (o = (o + 1) % n, o === u && (u = (u + 1) % n), p - c < r)
      return;
    const v = g && p - g;
    return v ? Math.round(S * 1e3 / v) : void 0;
  };
}
function i2(n, r) {
  let i = 0, l = 1e3 / r, o, u;
  const c = (p, g = Date.now()) => {
    i = g, o = null, u && (clearTimeout(u), u = null), n.apply(null, p);
  };
  return [(...p) => {
    const g = Date.now(), y = g - i;
    y >= l ? c(p, g) : (o = p, u || (u = setTimeout(() => {
      u = null, c(o);
    }, l - y)));
  }, () => o && c(o)];
}
const bo = (n, r, i = 3) => {
  let l = 0;
  const o = r2(50, 250);
  return i2((u) => {
    const c = u.loaded, h = u.lengthComputable ? u.total : void 0, m = c - l, p = o(m), g = c <= h;
    l = c;
    const y = {
      loaded: c,
      total: h,
      progress: h ? c / h : void 0,
      bytes: m,
      rate: p || void 0,
      estimated: p && h && g ? (h - c) / p : void 0,
      event: u,
      lengthComputable: h != null,
      [r ? "download" : "upload"]: !0
    };
    n(y);
  }, i);
}, $y = (n, r) => {
  const i = n != null;
  return [(l) => r[0]({
    lengthComputable: i,
    total: n,
    loaded: l
  }), r[1]];
}, Yy = (n) => (...r) => L.asap(() => n(...r)), a2 = St.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, r) => (i) => (i = new URL(i, St.origin), n.protocol === i.protocol && n.host === i.host && (r || n.port === i.port)))(
  new URL(St.origin),
  St.navigator && /(msie|trident)/i.test(St.navigator.userAgent)
) : () => !0, l2 = St.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, r, i, l, o, u) {
      const c = [n + "=" + encodeURIComponent(r)];
      L.isNumber(i) && c.push("expires=" + new Date(i).toGMTString()), L.isString(l) && c.push("path=" + l), L.isString(o) && c.push("domain=" + o), u === !0 && c.push("secure"), document.cookie = c.join("; ");
    },
    read(n) {
      const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
      return r ? decodeURIComponent(r[3]) : null;
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
function s2(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function o2(n, r) {
  return r ? n.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : n;
}
function N0(n, r, i) {
  let l = !s2(r);
  return n && (l || i == !1) ? o2(n, r) : r;
}
const Fy = (n) => n instanceof Ut ? { ...n } : n;
function ei(n, r) {
  r = r || {};
  const i = {};
  function l(p, g, y, S) {
    return L.isPlainObject(p) && L.isPlainObject(g) ? L.merge.call({ caseless: S }, p, g) : L.isPlainObject(g) ? L.merge({}, g) : L.isArray(g) ? g.slice() : g;
  }
  function o(p, g, y, S) {
    if (L.isUndefined(g)) {
      if (!L.isUndefined(p))
        return l(void 0, p, y, S);
    } else return l(p, g, y, S);
  }
  function u(p, g) {
    if (!L.isUndefined(g))
      return l(void 0, g);
  }
  function c(p, g) {
    if (L.isUndefined(g)) {
      if (!L.isUndefined(p))
        return l(void 0, p);
    } else return l(void 0, g);
  }
  function h(p, g, y) {
    if (y in r)
      return l(p, g);
    if (y in n)
      return l(void 0, p);
  }
  const m = {
    url: u,
    method: u,
    data: u,
    baseURL: c,
    transformRequest: c,
    transformResponse: c,
    paramsSerializer: c,
    timeout: c,
    timeoutMessage: c,
    withCredentials: c,
    withXSRFToken: c,
    adapter: c,
    responseType: c,
    xsrfCookieName: c,
    xsrfHeaderName: c,
    onUploadProgress: c,
    onDownloadProgress: c,
    decompress: c,
    maxContentLength: c,
    maxBodyLength: c,
    beforeRedirect: c,
    transport: c,
    httpAgent: c,
    httpsAgent: c,
    cancelToken: c,
    socketPath: c,
    responseEncoding: c,
    validateStatus: h,
    headers: (p, g, y) => o(Fy(p), Fy(g), y, !0)
  };
  return L.forEach(Object.keys(Object.assign({}, n, r)), function(g) {
    const y = m[g] || o, S = y(n[g], r[g], g);
    L.isUndefined(S) && y !== h || (i[g] = S);
  }), i;
}
const M0 = (n) => {
  const r = ei({}, n);
  let { data: i, withXSRFToken: l, xsrfHeaderName: o, xsrfCookieName: u, headers: c, auth: h } = r;
  r.headers = c = Ut.from(c), r.url = C0(N0(r.baseURL, r.url, r.allowAbsoluteUrls), n.params, n.paramsSerializer), h && c.set(
    "Authorization",
    "Basic " + btoa((h.username || "") + ":" + (h.password ? unescape(encodeURIComponent(h.password)) : ""))
  );
  let m;
  if (L.isFormData(i)) {
    if (St.hasStandardBrowserEnv || St.hasStandardBrowserWebWorkerEnv)
      c.setContentType(void 0);
    else if ((m = c.getContentType()) !== !1) {
      const [p, ...g] = m ? m.split(";").map((y) => y.trim()).filter(Boolean) : [];
      c.setContentType([p || "multipart/form-data", ...g].join("; "));
    }
  }
  if (St.hasStandardBrowserEnv && (l && L.isFunction(l) && (l = l(r)), l || l !== !1 && a2(r.url))) {
    const p = o && u && l2.read(u);
    p && c.set(o, p);
  }
  return r;
}, u2 = typeof XMLHttpRequest < "u", c2 = u2 && function(n) {
  return new Promise(function(i, l) {
    const o = M0(n);
    let u = o.data;
    const c = Ut.from(o.headers).normalize();
    let { responseType: h, onUploadProgress: m, onDownloadProgress: p } = o, g, y, S, v, k;
    function A() {
      v && v(), k && k(), o.cancelToken && o.cancelToken.unsubscribe(g), o.signal && o.signal.removeEventListener("abort", g);
    }
    let O = new XMLHttpRequest();
    O.open(o.method.toUpperCase(), o.url, !0), O.timeout = o.timeout;
    function j() {
      if (!O)
        return;
      const D = Ut.from(
        "getAllResponseHeaders" in O && O.getAllResponseHeaders()
      ), J = {
        data: !h || h === "text" || h === "json" ? O.responseText : O.response,
        status: O.status,
        statusText: O.statusText,
        headers: D,
        config: n,
        request: O
      };
      D0(function(W) {
        i(W), A();
      }, function(W) {
        l(W), A();
      }, J), O = null;
    }
    "onloadend" in O ? O.onloadend = j : O.onreadystatechange = function() {
      !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(j);
    }, O.onabort = function() {
      O && (l(new ye("Request aborted", ye.ECONNABORTED, n, O)), O = null);
    }, O.onerror = function() {
      l(new ye("Network Error", ye.ERR_NETWORK, n, O)), O = null;
    }, O.ontimeout = function() {
      let I = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const J = o.transitional || R0;
      o.timeoutErrorMessage && (I = o.timeoutErrorMessage), l(new ye(
        I,
        J.clarifyTimeoutError ? ye.ETIMEDOUT : ye.ECONNABORTED,
        n,
        O
      )), O = null;
    }, u === void 0 && c.setContentType(null), "setRequestHeader" in O && L.forEach(c.toJSON(), function(I, J) {
      O.setRequestHeader(J, I);
    }), L.isUndefined(o.withCredentials) || (O.withCredentials = !!o.withCredentials), h && h !== "json" && (O.responseType = o.responseType), p && ([S, k] = bo(p, !0), O.addEventListener("progress", S)), m && O.upload && ([y, v] = bo(m), O.upload.addEventListener("progress", y), O.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (g = (D) => {
      O && (l(!D || D.type ? new da(null, n, O) : D), O.abort(), O = null);
    }, o.cancelToken && o.cancelToken.subscribe(g), o.signal && (o.signal.aborted ? g() : o.signal.addEventListener("abort", g)));
    const Y = n2(o.url);
    if (Y && St.protocols.indexOf(Y) === -1) {
      l(new ye("Unsupported protocol " + Y + ":", ye.ERR_BAD_REQUEST, n));
      return;
    }
    O.send(u || null);
  });
}, f2 = (n, r) => {
  const { length: i } = n = n ? n.filter(Boolean) : [];
  if (r || i) {
    let l = new AbortController(), o;
    const u = function(p) {
      if (!o) {
        o = !0, h();
        const g = p instanceof Error ? p : this.reason;
        l.abort(g instanceof ye ? g : new da(g instanceof Error ? g.message : g));
      }
    };
    let c = r && setTimeout(() => {
      c = null, u(new ye(`timeout ${r} of ms exceeded`, ye.ETIMEDOUT));
    }, r);
    const h = () => {
      n && (c && clearTimeout(c), c = null, n.forEach((p) => {
        p.unsubscribe ? p.unsubscribe(u) : p.removeEventListener("abort", u);
      }), n = null);
    };
    n.forEach((p) => p.addEventListener("abort", u));
    const { signal: m } = l;
    return m.unsubscribe = () => L.asap(h), m;
  }
}, h2 = function* (n, r) {
  let i = n.byteLength;
  if (i < r) {
    yield n;
    return;
  }
  let l = 0, o;
  for (; l < i; )
    o = l + r, yield n.slice(l, o), l = o;
}, d2 = async function* (n, r) {
  for await (const i of p2(n))
    yield* h2(i, r);
}, p2 = async function* (n) {
  if (n[Symbol.asyncIterator]) {
    yield* n;
    return;
  }
  const r = n.getReader();
  try {
    for (; ; ) {
      const { done: i, value: l } = await r.read();
      if (i)
        break;
      yield l;
    }
  } finally {
    await r.cancel();
  }
}, Qy = (n, r, i, l) => {
  const o = d2(n, r);
  let u = 0, c, h = (m) => {
    c || (c = !0, l && l(m));
  };
  return new ReadableStream({
    async pull(m) {
      try {
        const { done: p, value: g } = await o.next();
        if (p) {
          h(), m.close();
          return;
        }
        let y = g.byteLength;
        if (i) {
          let S = u += y;
          i(S);
        }
        m.enqueue(new Uint8Array(g));
      } catch (p) {
        throw h(p), p;
      }
    },
    cancel(m) {
      return h(m), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ro = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", U0 = Ro && typeof ReadableStream == "function", m2 = Ro && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (r) => n.encode(r))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), B0 = (n, ...r) => {
  try {
    return !!n(...r);
  } catch {
    return !1;
  }
}, g2 = U0 && B0(() => {
  let n = !1;
  const r = new Request(St.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !r;
}), Ky = 64 * 1024, Kf = U0 && B0(() => L.isReadableStream(new Response("").body)), vo = {
  stream: Kf && ((n) => n.body)
};
Ro && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((r) => {
    !vo[r] && (vo[r] = L.isFunction(n[r]) ? (i) => i[r]() : (i, l) => {
      throw new ye(`Response type '${r}' is not supported`, ye.ERR_NOT_SUPPORT, l);
    });
  });
})(new Response());
const y2 = async (n) => {
  if (n == null)
    return 0;
  if (L.isBlob(n))
    return n.size;
  if (L.isSpecCompliantForm(n))
    return (await new Request(St.origin, {
      method: "POST",
      body: n
    }).arrayBuffer()).byteLength;
  if (L.isArrayBufferView(n) || L.isArrayBuffer(n))
    return n.byteLength;
  if (L.isURLSearchParams(n) && (n = n + ""), L.isString(n))
    return (await m2(n)).byteLength;
}, b2 = async (n, r) => {
  const i = L.toFiniteNumber(n.getContentLength());
  return i ?? y2(r);
}, v2 = Ro && (async (n) => {
  let {
    url: r,
    method: i,
    data: l,
    signal: o,
    cancelToken: u,
    timeout: c,
    onDownloadProgress: h,
    onUploadProgress: m,
    responseType: p,
    headers: g,
    withCredentials: y = "same-origin",
    fetchOptions: S
  } = M0(n);
  p = p ? (p + "").toLowerCase() : "text";
  let v = f2([o, u && u.toAbortSignal()], c), k;
  const A = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let O;
  try {
    if (m && g2 && i !== "get" && i !== "head" && (O = await b2(g, l)) !== 0) {
      let J = new Request(r, {
        method: "POST",
        body: l,
        duplex: "half"
      }), M;
      if (L.isFormData(l) && (M = J.headers.get("content-type")) && g.setContentType(M), J.body) {
        const [W, Z] = $y(
          O,
          bo(Yy(m))
        );
        l = Qy(J.body, Ky, W, Z);
      }
    }
    L.isString(y) || (y = y ? "include" : "omit");
    const j = "credentials" in Request.prototype;
    k = new Request(r, {
      ...S,
      signal: v,
      method: i.toUpperCase(),
      headers: g.normalize().toJSON(),
      body: l,
      duplex: "half",
      credentials: j ? y : void 0
    });
    let Y = await fetch(k, S);
    const D = Kf && (p === "stream" || p === "response");
    if (Kf && (h || D && A)) {
      const J = {};
      ["status", "statusText", "headers"].forEach((oe) => {
        J[oe] = Y[oe];
      });
      const M = L.toFiniteNumber(Y.headers.get("content-length")), [W, Z] = h && $y(
        M,
        bo(Yy(h), !0)
      ) || [];
      Y = new Response(
        Qy(Y.body, Ky, W, () => {
          Z && Z(), A && A();
        }),
        J
      );
    }
    p = p || "text";
    let I = await vo[L.findKey(vo, p) || "text"](Y, n);
    return !D && A && A(), await new Promise((J, M) => {
      D0(J, M, {
        data: I,
        headers: Ut.from(Y.headers),
        status: Y.status,
        statusText: Y.statusText,
        config: n,
        request: k
      });
    });
  } catch (j) {
    throw A && A(), j && j.name === "TypeError" && /Load failed|fetch/i.test(j.message) ? Object.assign(
      new ye("Network Error", ye.ERR_NETWORK, n, k),
      {
        cause: j.cause || j
      }
    ) : ye.from(j, j && j.code, n, k);
  }
}), Xf = {
  http: NO,
  xhr: c2,
  fetch: v2
};
L.forEach(Xf, (n, r) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: r });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: r });
  }
});
const Xy = (n) => `- ${n}`, w2 = (n) => L.isFunction(n) || n === null || n === !1, L0 = {
  getAdapter: (n) => {
    n = L.isArray(n) ? n : [n];
    const { length: r } = n;
    let i, l;
    const o = {};
    for (let u = 0; u < r; u++) {
      i = n[u];
      let c;
      if (l = i, !w2(i) && (l = Xf[(c = String(i)).toLowerCase()], l === void 0))
        throw new ye(`Unknown adapter '${c}'`);
      if (l)
        break;
      o[c || "#" + u] = l;
    }
    if (!l) {
      const u = Object.entries(o).map(
        ([h, m]) => `adapter ${h} ` + (m === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let c = r ? u.length > 1 ? `since :
` + u.map(Xy).join(`
`) : " " + Xy(u[0]) : "as no adapter specified";
      throw new ye(
        "There is no suitable adapter to dispatch the request " + c,
        "ERR_NOT_SUPPORT"
      );
    }
    return l;
  },
  adapters: Xf
};
function xf(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new da(null, n);
}
function Zy(n) {
  return xf(n), n.headers = Ut.from(n.headers), n.data = Sf.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), L0.getAdapter(n.adapter || Bl.adapter)(n).then(function(l) {
    return xf(n), l.data = Sf.call(
      n,
      n.transformResponse,
      l
    ), l.headers = Ut.from(l.headers), l;
  }, function(l) {
    return j0(l) || (xf(n), l && l.response && (l.response.data = Sf.call(
      n,
      n.transformResponse,
      l.response
    ), l.response.headers = Ut.from(l.response.headers))), Promise.reject(l);
  });
}
const q0 = "1.10.0", zo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, r) => {
  zo[n] = function(l) {
    return typeof l === n || "a" + (r < 1 ? "n " : " ") + n;
  };
});
const Jy = {};
zo.transitional = function(r, i, l) {
  function o(u, c) {
    return "[Axios v" + q0 + "] Transitional option '" + u + "'" + c + (l ? ". " + l : "");
  }
  return (u, c, h) => {
    if (r === !1)
      throw new ye(
        o(c, " has been removed" + (i ? " in " + i : "")),
        ye.ERR_DEPRECATED
      );
    return i && !Jy[c] && (Jy[c] = !0, console.warn(
      o(
        c,
        " has been deprecated since v" + i + " and will be removed in the near future"
      )
    )), r ? r(u, c, h) : !0;
  };
};
zo.spelling = function(r) {
  return (i, l) => (console.warn(`${l} is likely a misspelling of ${r}`), !0);
};
function S2(n, r, i) {
  if (typeof n != "object")
    throw new ye("options must be an object", ye.ERR_BAD_OPTION_VALUE);
  const l = Object.keys(n);
  let o = l.length;
  for (; o-- > 0; ) {
    const u = l[o], c = r[u];
    if (c) {
      const h = n[u], m = h === void 0 || c(h, u, n);
      if (m !== !0)
        throw new ye("option " + u + " must be " + m, ye.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (i !== !0)
      throw new ye("Unknown option " + u, ye.ERR_BAD_OPTION);
  }
}
const fo = {
  assertOptions: S2,
  validators: zo
}, En = fo.validators;
let Wr = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new Iy(),
      response: new Iy()
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
  async request(r, i) {
    try {
      return await this._request(r, i);
    } catch (l) {
      if (l instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const u = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          l.stack ? u && !String(l.stack).endsWith(u.replace(/^.+\n.+\n/, "")) && (l.stack += `
` + u) : l.stack = u;
        } catch {
        }
      }
      throw l;
    }
  }
  _request(r, i) {
    typeof r == "string" ? (i = i || {}, i.url = r) : i = r || {}, i = ei(this.defaults, i);
    const { transitional: l, paramsSerializer: o, headers: u } = i;
    l !== void 0 && fo.assertOptions(l, {
      silentJSONParsing: En.transitional(En.boolean),
      forcedJSONParsing: En.transitional(En.boolean),
      clarifyTimeoutError: En.transitional(En.boolean)
    }, !1), o != null && (L.isFunction(o) ? i.paramsSerializer = {
      serialize: o
    } : fo.assertOptions(o, {
      encode: En.function,
      serialize: En.function
    }, !0)), i.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? i.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : i.allowAbsoluteUrls = !0), fo.assertOptions(i, {
      baseUrl: En.spelling("baseURL"),
      withXsrfToken: En.spelling("withXSRFToken")
    }, !0), i.method = (i.method || this.defaults.method || "get").toLowerCase();
    let c = u && L.merge(
      u.common,
      u[i.method]
    );
    u && L.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (k) => {
        delete u[k];
      }
    ), i.headers = Ut.concat(c, u);
    const h = [];
    let m = !0;
    this.interceptors.request.forEach(function(A) {
      typeof A.runWhen == "function" && A.runWhen(i) === !1 || (m = m && A.synchronous, h.unshift(A.fulfilled, A.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(A) {
      p.push(A.fulfilled, A.rejected);
    });
    let g, y = 0, S;
    if (!m) {
      const k = [Zy.bind(this), void 0];
      for (k.unshift.apply(k, h), k.push.apply(k, p), S = k.length, g = Promise.resolve(i); y < S; )
        g = g.then(k[y++], k[y++]);
      return g;
    }
    S = h.length;
    let v = i;
    for (y = 0; y < S; ) {
      const k = h[y++], A = h[y++];
      try {
        v = k(v);
      } catch (O) {
        A.call(this, O);
        break;
      }
    }
    try {
      g = Zy.call(this, v);
    } catch (k) {
      return Promise.reject(k);
    }
    for (y = 0, S = p.length; y < S; )
      g = g.then(p[y++], p[y++]);
    return g;
  }
  getUri(r) {
    r = ei(this.defaults, r);
    const i = N0(r.baseURL, r.url, r.allowAbsoluteUrls);
    return C0(i, r.params, r.paramsSerializer);
  }
};
L.forEach(["delete", "get", "head", "options"], function(r) {
  Wr.prototype[r] = function(i, l) {
    return this.request(ei(l || {}, {
      method: r,
      url: i,
      data: (l || {}).data
    }));
  };
});
L.forEach(["post", "put", "patch"], function(r) {
  function i(l) {
    return function(u, c, h) {
      return this.request(ei(h || {}, {
        method: r,
        headers: l ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: c
      }));
    };
  }
  Wr.prototype[r] = i(), Wr.prototype[r + "Form"] = i(!0);
});
let x2 = class H0 {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let i;
    this.promise = new Promise(function(u) {
      i = u;
    });
    const l = this;
    this.promise.then((o) => {
      if (!l._listeners) return;
      let u = l._listeners.length;
      for (; u-- > 0; )
        l._listeners[u](o);
      l._listeners = null;
    }), this.promise.then = (o) => {
      let u;
      const c = new Promise((h) => {
        l.subscribe(h), u = h;
      }).then(o);
      return c.cancel = function() {
        l.unsubscribe(u);
      }, c;
    }, r(function(u, c, h) {
      l.reason || (l.reason = new da(u, c, h), i(l.reason));
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
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : this._listeners = [r];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(r) {
    if (!this._listeners)
      return;
    const i = this._listeners.indexOf(r);
    i !== -1 && this._listeners.splice(i, 1);
  }
  toAbortSignal() {
    const r = new AbortController(), i = (l) => {
      r.abort(l);
    };
    return this.subscribe(i), r.signal.unsubscribe = () => this.unsubscribe(i), r.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let r;
    return {
      token: new H0(function(o) {
        r = o;
      }),
      cancel: r
    };
  }
};
function _2(n) {
  return function(i) {
    return n.apply(null, i);
  };
}
function E2(n) {
  return L.isObject(n) && n.isAxiosError === !0;
}
const Zf = {
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
Object.entries(Zf).forEach(([n, r]) => {
  Zf[r] = n;
});
function P0(n) {
  const r = new Wr(n), i = y0(Wr.prototype.request, r);
  return L.extend(i, Wr.prototype, r, { allOwnKeys: !0 }), L.extend(i, r, null, { allOwnKeys: !0 }), i.create = function(o) {
    return P0(ei(n, o));
  }, i;
}
const Ze = P0(Bl);
Ze.Axios = Wr;
Ze.CanceledError = da;
Ze.CancelToken = x2;
Ze.isCancel = j0;
Ze.VERSION = q0;
Ze.toFormData = Co;
Ze.AxiosError = ye;
Ze.Cancel = Ze.CanceledError;
Ze.all = function(r) {
  return Promise.all(r);
};
Ze.spread = _2;
Ze.isAxiosError = E2;
Ze.mergeConfig = ei;
Ze.AxiosHeaders = Ut;
Ze.formToJSON = (n) => z0(L.isHTMLForm(n) ? new FormData(n) : n);
Ze.getAdapter = L0.getAdapter;
Ze.HttpStatusCode = Zf;
Ze.default = Ze;
const {
  Axios: G2,
  AxiosError: $2,
  CanceledError: Y2,
  isCancel: F2,
  CancelToken: Q2,
  VERSION: K2,
  all: X2,
  Cancel: Z2,
  isAxiosError: J2,
  spread: W2,
  toFormData: eC,
  AxiosHeaders: tC,
  HttpStatusCode: nC,
  formToJSON: rC,
  getAdapter: iC,
  mergeConfig: aC
} = Ze, wo = "http://localhost:3000", V0 = {
  headers: {
    "Content-Type": "application/json",
    withCredentials: !0
  }
};
async function lo(n, r) {
  try {
    console.log("Calling backend at:", `${wo}/api/embeddings`);
    const i = await Ze.post(`${wo}/api/embeddings`, {
      question: n,
      answer: r
    }, V0);
    return {
      questionEmbedding: i.data.questionEmbedding,
      answerEmbedding: i.data.answerEmbedding
    };
  } catch (i) {
    throw console.error("Error getting embeddings:", i), new Error("Failed to get embeddings");
  }
}
async function k2(n, r) {
  try {
    return console.log("Calling backend at:", `${wo}/api/chat`), (await Ze.post(`${wo}/api/chat`, {
      messages: n,
      companyName: r
    }, V0)).data.answer;
  } catch (i) {
    throw console.error("Error getting AI response:", i), new Error("Failed to get AI response");
  }
}
class T2 {
  /**
   * Get or create a company by name. Returns the company_id.
   * @param companyName The name of the company
   * @param theme Optional theme color for the company (only used when creating new company)
   */
  static async getOrCreateCompanyId(r, i) {
    const { data: l, error: o } = await kn.from("companies").select("id").eq("name", r).limit(1);
    if (o) throw new Error(`Failed to fetch company: ${o.message}`);
    if (l && l.length > 0)
      return l[0].id;
    console.log("Company not found, creating...");
    const u = { name: r };
    i && (u.theme = i);
    const { data: c, error: h } = await kn.from("companies").insert(u).select("id").single();
    if (h) throw new Error(`Failed to create company: ${h.message}`);
    return c.id;
  }
  static async getCompanyIdByName(r) {
    const { data: i, error: l } = await kn.from("companies").select("id").eq("name", r).limit(1);
    if (l) throw new Error(`Failed to fetch company: ${l.message}`);
    if (!i || i.length === 0)
      throw new Error(`Company '${r}' not found`);
    return i[0].id;
  }
  /**
   * Add a new FAQ to the database (with embeddings and company_id)
   */
  static async addFAQ(r) {
    if (!r.question || !r.answer || !r.company)
      throw new Error("FAQ must have question, answer, and company");
    const i = await this.getOrCreateCompanyId(r.company, r.theme), { questionEmbedding: l, answerEmbedding: o } = await lo(r.question, r.answer), { data: u, error: c } = await kn.from("faqs").insert({
      question: r.question,
      answer: r.answer,
      company_id: i,
      question_embedding: l,
      answer_embedding: o,
      tags: r.tags ?? null,
      relevance_score: r.relevance_score,
      created_at: r.created_at,
      updated_at: r.updated_at,
      id: r.id
    }).select().single();
    if (c)
      throw new Error(`Failed to add FAQ: ${c.message}`);
    return u;
  }
  /**
   * Search for FAQs using semantic similarity (embedding-based)
   */
  static async searchFAQs(r, i) {
    try {
      const l = await this.getOrCreateCompanyId(i), { questionEmbedding: o } = await lo(r, ""), { data: u, error: c } = await kn.rpc("find_relevant_faqs", {
        p_company_id: l,
        p_query: r,
        p_query_embedding: o,
        p_top_k: 5
      });
      if (c)
        throw new Error(`Supabase function error: ${c.message}`);
      return u || [];
    } catch (l) {
      return console.error("Error searching FAQs (semantic):", l), [];
    }
  }
  /**
   * Get answer for user question - tries FAQ first, falls back to AI
   */
  static async getAnswer(r, i, l = 0.3) {
    try {
      const o = await this.searchFAQs(r, i);
      if (o.length > 0) {
        const h = o[0];
        if (h.similarity >= l)
          return {
            source: "faq",
            answer: h.answer,
            question: h.question,
            confidence: h.similarity,
            // Use the vector similarity score
            faqId: h.faq_id
          };
      }
      return console.log("No relevant FAQ found, falling back to AI..."), {
        source: "ai",
        answer: await k2([
          {
            role: "system",
            content: "You are a helpful assistant. Provide accurate and helpful answers to user questions. If you don't know something, say so clearly."
          },
          {
            role: "user",
            content: r
          }
        ], i),
        confidence: 0
      };
    } catch (o) {
      throw console.error("Error in getAnswer:", o), new Error("Failed to get answer for your question. Please try again.");
    }
  }
  /**
   * Get all FAQs with optional filtering
   */
  static async getAllFAQs(r) {
    let i = kn.from("faqs").select("*").order("created_at", { ascending: !1 });
    r && (i = i.limit(r));
    const { data: l, error: o } = await i;
    if (o)
      throw new Error(`Failed to fetch FAQs: ${o.message}`);
    return l || [];
  }
  /**
   * Update an existing FAQ (with embeddings if question/answer change)
   */
  static async updateFAQ(r, i) {
    let l, o;
    if (i.question) {
      const { questionEmbedding: h } = await lo(i.question, i.answer ?? "");
      l = h;
    }
    if (i.answer) {
      const { answerEmbedding: h } = await lo(i.question ?? "", i.answer);
      o = h;
    }
    const { data: u, error: c } = await kn.from("faqs").update({
      ...i,
      ...l && { question_embedding: l },
      ...o && { answer_embedding: o }
    }).eq("id", r).select().single();
    if (c)
      throw new Error(`Failed to update FAQ: ${c.message}`);
    return u;
  }
  /**
   * Delete an FAQ
   */
  static async deleteFAQ(r) {
    const { error: i } = await kn.from("faqs").delete().eq("id", r);
    if (i)
      throw new Error(`Failed to delete FAQ: ${i.message}`);
    return !0;
  }
  /**
   * Bulk import FAQs
   */
  static async bulkImportFAQs(r) {
    const { data: i, error: l } = await kn.from("faqs").insert(r).select();
    if (l)
      throw new Error(`Failed to bulk import FAQs: ${l.message}`);
    return i || [];
  }
}
class A2 {
  static generateThemeFromPrimary(r, i, l) {
    return {
      primaryColor: r,
      logoUrl: l,
      backgroundColor: i ? "#1F2937" : "#F3F4F6",
      textColor: i ? "#F9FAFB" : "#1F2937",
      borderColor: i ? "#374151" : "#E5E7EB",
      accentColor: "#10B981"
      // Keep accent consistent
    };
  }
  static async getCompanyTheme(r, i) {
    const { data: l } = await kn.from("companies").select("theme, logo_url").eq("name", r).single(), o = l?.theme || "#3B82F6", u = l?.logo_url || "";
    return this.generateThemeFromPrimary(o, i, u);
  }
}
function O2({
  defaultTheme: n,
  toggleTheme: r,
  isMinimized: i = !1,
  onToggleMinimize: l,
  companyName: o = "Assistant",
  isThemeChanging: u = !1
}) {
  const [c, h] = Xt([
    {
      content: `Hello! I'm your ${o} assistant. How can I help you today?`,
      isUser: !1,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
  ]), [m, p] = Xt(!1), [g, y] = Xt(!1), [S, v] = Xt(!1), [k, A] = Xt(!0), [O, j] = Xt(!1), Y = dg(null), D = dg(null), [I, J] = Xt(null), M = n === "dark";
  Jr(() => {
    o && A2.getCompanyTheme(o, M).then(J);
  }, [o, M]);
  const W = () => {
    Y.current?.scrollIntoView({ behavior: "smooth" });
  }, Z = () => {
    if (D.current) {
      const { scrollTop: $, scrollHeight: re, clientHeight: ee } = D.current, ne = re - $ - ee < 10;
      A(ne), S && !ne && y(!0), ne && y(!1);
    }
  }, oe = ($) => {
    v($), $ && y(!1);
  };
  Jr(() => {
    if (S && !g) {
      const $ = setInterval(() => {
        W();
      }, 100);
      return () => clearInterval($);
    }
  }, [S, g]), Jr(() => {
    i ? j(!0) : W();
  }, [i]);
  const Se = async ($) => {
    const re = {
      content: $,
      isUser: !0,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    p(!0), h((ee) => [...ee, re]);
    try {
      const ne = {
        content: (await T2.getAnswer($, o)).answer,
        isUser: !1,
        timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      h((B) => [...B, ne]), j(!1);
    } catch (ee) {
      console.error("Error getting response:", ee), h((ne) => [
        ...ne,
        {
          content: "Sorry, something went wrong. Please try again.",
          isUser: !1,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    } finally {
      p(!1);
    }
  }, te = I?.primaryColor ? pb(I.primaryColor, 20) : void 0;
  return i ? /* @__PURE__ */ X.jsx(
    "div",
    {
      className: "fixed bottom-4 right-4 z-50",
      style: {
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        zIndex: 50
      },
      children: /* @__PURE__ */ X.jsxs(
        Al,
        {
          onClick: l,
          className: "h-14 w-14 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2",
          style: {
            backgroundColor: I?.primaryColor,
            "--hover-bg-color": te
          },
          onMouseEnter: ($) => {
            te && ($.currentTarget.style.backgroundColor = te);
          },
          onMouseLeave: ($) => {
            I?.primaryColor && ($.currentTarget.style.backgroundColor = I.primaryColor);
          },
          onFocus: ($) => {
            te && ($.currentTarget.style.backgroundColor = te);
          },
          onBlur: ($) => {
            I?.primaryColor && ($.currentTarget.style.backgroundColor = I.primaryColor);
          },
          children: [
            /* @__PURE__ */ X.jsx(Sg, { className: "h-6 w-6" }),
            /* @__PURE__ */ X.jsx("span", { className: "sr-only", children: "Open chat" })
          ]
        }
      )
    }
  ) : /* @__PURE__ */ X.jsxs(
    "div",
    {
      className: An(
        "fixed bottom-4 right-4 z-50 w-96 h-[600px] max-h-[80vh]",
        "border border-gray-200 dark:border-gray-700",
        "rounded-lg shadow-2xl flex flex-col overflow-hidden",
        "transition-all duration-300 ease-in-out",
        "relative"
        // Add relative positioning for spinner overlay
      ),
      style: {
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        zIndex: 50
      },
      children: [
        u && /* @__PURE__ */ X.jsx(
          "div",
          {
            className: "absolute inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg",
            style: { backgroundColor: I?.backgroundColor + "CC" },
            children: /* @__PURE__ */ X.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
              /* @__PURE__ */ X.jsx(
                eh,
                {
                  className: "w-12 h-12 animate-spin",
                  style: { color: I?.primaryColor }
                }
              ),
              /* @__PURE__ */ X.jsx(
                "p",
                {
                  className: "text-sm font-medium",
                  style: { color: I?.textColor },
                  children: "Updating theme..."
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ X.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800", children: [
          /* @__PURE__ */ X.jsxs("div", { className: "flex items-center gap-3", children: [
            I?.logoUrl ? /* @__PURE__ */ X.jsx("div", { className: "w-8 h-8 rounded-full flex items-center justify-center", children: /* @__PURE__ */ X.jsx("img", { src: I?.logoUrl, alt: "Company Logo", className: "w-7 h-7" }) }) : (
              // Default logo
              /* @__PURE__ */ X.jsx("div", { className: "w-8 h-8 rounded-full flex items-center justify-center", style: { backgroundColor: I?.primaryColor }, children: /* @__PURE__ */ X.jsx(Sg, { className: "w-4 h-4 text-white" }) })
            ),
            /* @__PURE__ */ X.jsxs("div", { children: [
              /* @__PURE__ */ X.jsxs("h3", { className: "font-semibold text-gray-900 dark:text-gray-100 text-sm", children: [
                o,
                " Assistant"
              ] }),
              /* @__PURE__ */ X.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Online now" })
            ] })
          ] }),
          /* @__PURE__ */ X.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ X.jsx(Qk, { theme: n, toggleTheme: r, isThemeChanging: u }),
            l && /* @__PURE__ */ X.jsxs(
              Al,
              {
                variant: "ghost",
                size: "sm",
                onClick: l,
                className: "h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-gray-700",
                children: [
                  /* @__PURE__ */ X.jsx(E1, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" }),
                  /* @__PURE__ */ X.jsx("span", { className: "sr-only", children: "Minimize chat" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ X.jsxs(
          "div",
          {
            ref: D,
            className: "flex-1 overflow-y-auto bg-white dark:bg-gray-900",
            onScroll: Z,
            children: [
              /* @__PURE__ */ X.jsxs("div", { className: "py-4", children: [
                c.map(($, re) => /* @__PURE__ */ X.jsx(
                  Nk,
                  {
                    message: $.content,
                    isUser: $.isUser,
                    timestamp: $.timestamp,
                    onStreamingChange: $.isUser ? void 0 : oe,
                    skipStreaming: O && !$.isUser,
                    companyTheme: I || void 0
                  },
                  re
                )),
                m && /* @__PURE__ */ X.jsx(Fk, {})
              ] }),
              /* @__PURE__ */ X.jsx("div", { ref: Y })
            ]
          }
        ),
        !k && !S && /* @__PURE__ */ X.jsx("div", { className: "absolute bottom-27 right-4 z-10", children: /* @__PURE__ */ X.jsxs(
          Al,
          {
            onClick: W,
            size: "sm",
            className: "h-10 w-10 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-200 p-0 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2",
            style: {
              backgroundColor: I?.primaryColor,
              "--hover-bg-color": te
            },
            onMouseEnter: ($) => {
              te && ($.currentTarget.style.backgroundColor = te);
            },
            onMouseLeave: ($) => {
              I?.primaryColor && ($.currentTarget.style.backgroundColor = I.primaryColor);
            },
            onFocus: ($) => {
              te && ($.currentTarget.style.backgroundColor = te);
            },
            onBlur: ($) => {
              I?.primaryColor && ($.currentTarget.style.backgroundColor = I.primaryColor);
            },
            children: [
              /* @__PURE__ */ X.jsx(w1, { className: "h-4 w-4" }),
              /* @__PURE__ */ X.jsx("span", { className: "sr-only", children: "Scroll to bottom" })
            ]
          }
        ) }),
        /* @__PURE__ */ X.jsx(
          Yk,
          {
            onSendMessage: Se,
            isLoading: m,
            placeholder: `Ask ${o} anything...`,
            defaultTheme: n,
            companyTheme: I || void 0
          }
        )
      ]
    }
  );
}
const C2 = 400, R2 = 1300, Kr = {
  light: {
    background: "#ffffff",
    text: "#000000",
    primary: "#8B5CF6",
    secondary: "#8B5CF6",
    card: "#f5f5f5",
    border: "#e0e0e0",
    gray: "#888888"
  },
  dark: {
    background: "#000000",
    text: "#ffffff",
    primary: "#8B5CF6",
    secondary: "#8B5CF6",
    card: "#1e1e1e",
    border: "#333333",
    gray: "#888888"
  }
}, I0 = n1({
  colors: Kr.light,
  defaultTheme: "light",
  isDark: !1,
  setColorScheme: () => {
  },
  toggleTheme: () => {
  },
  isThemeChanging: !1
}), z2 = ({ children: n }) => {
  const r = () => {
    if (typeof window < "u") {
      const p = localStorage.getItem("theme");
      return p === "light" || p === "dark" ? p : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  }, [i, l] = Xt(r() === "dark"), [o, u] = Xt(!1), c = (p) => {
    l(p === "dark"), typeof window < "u" && localStorage.setItem("theme", p);
  }, h = () => {
    const p = i ? "light" : "dark";
    u(!0), setTimeout(() => {
      c(p), setTimeout(() => {
        u(!1);
      }, R2);
    }, C2);
  };
  Jr(() => {
    const p = window.matchMedia("(prefers-color-scheme: dark)"), g = (y) => {
      localStorage.getItem("theme") || c(y.matches ? "dark" : "light");
    };
    return p.addEventListener("change", g), () => p.removeEventListener("change", g);
  }, []), Jr(() => {
    typeof window < "u" && (document.body.style.backgroundColor = i ? Kr.dark.background : Kr.light.background, document.body.style.color = i ? Kr.dark.text : Kr.light.text);
  }, [i]);
  const m = i ? Kr.dark : Kr.light;
  return /* @__PURE__ */ X.jsx(I0.Provider, { value: {
    colors: m,
    defaultTheme: i ? "dark" : "light",
    isDark: i,
    setColorScheme: c,
    toggleTheme: h,
    isThemeChanging: o
  }, children: n });
}, j2 = () => {
  const n = r1(I0);
  if (!n)
    throw new Error("useTheme must be used within a ThemeProvider");
  return n;
};
let so = null;
function D2(n, r) {
  so && so.unmount(), so = h1.createRoot(n), so.render(
    /* @__PURE__ */ X.jsx(Jf.StrictMode, { children: /* @__PURE__ */ X.jsx(z2, { children: /* @__PURE__ */ X.jsx(N2, { config: r }) }) })
  );
}
function N2({ config: n }) {
  const { defaultTheme: r, toggleTheme: i, isThemeChanging: l } = j2(), [o, u] = Jf.useState(!1);
  return /* @__PURE__ */ X.jsx(
    O2,
    {
      defaultTheme: r,
      toggleTheme: i,
      isMinimized: o,
      onToggleMinimize: () => u(!o),
      companyName: n.companyName,
      isThemeChanging: l
    }
  );
}
typeof window < "u" && (window.QuriusChatWidget = {
  init: D2
});
export {
  D2 as initWidget
};
