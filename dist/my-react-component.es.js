import Pe from "react";
function dr(b) {
  return b && b.__esModule && Object.prototype.hasOwnProperty.call(b, "default") ? b.default : b;
}
var Z = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function vr() {
  if (Oe) return W;
  Oe = 1;
  var b = Pe, O = Symbol.for("react.element"), g = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, R = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(v, d, C) {
    var h, S = {}, w = null, Y = null;
    C !== void 0 && (w = "" + C), d.key !== void 0 && (w = "" + d.key), d.ref !== void 0 && (Y = d.ref);
    for (h in d) E.call(d, h) && !u.hasOwnProperty(h) && (S[h] = d[h]);
    if (v && v.defaultProps) for (h in d = v.defaultProps, d) S[h] === void 0 && (S[h] = d[h]);
    return { $$typeof: O, type: v, key: w, ref: Y, props: S, _owner: R.current };
  }
  return W.Fragment = g, W.jsx = l, W.jsxs = l, W;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function pr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var b = Pe, O = Symbol.for("react.element"), g = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), v = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), Q = Symbol.iterator, Ce = "@@iterator";
    function xe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Q && e[Q] || e[Ce];
      return typeof r == "function" ? r : null;
    }
    var x = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Ae = !1, Fe = !1, De = !1, Ie = !1, We = !1, ee;
    ee = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === u || We || e === R || e === C || e === h || Ie || e === Y || Ae || Fe || De || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === S || e.$$typeof === l || e.$$typeof === v || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case g:
          return "Portal";
        case u:
          return "Profiler";
        case R:
          return "StrictMode";
        case C:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return re(r) + ".Consumer";
          case l:
            var t = e;
            return re(t._context) + ".Provider";
          case d:
            return Ye(e, e.render, "ForwardRef");
          case S:
            var n = e.displayName || null;
            return n !== null ? n : T(e.type) || "Memo";
          case w: {
            var i = e, s = i._payload, o = i._init;
            try {
              return T(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, F = 0, te, ne, ae, oe, ie, ue, se;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function Ne() {
      {
        if (F === 0) {
          te = console.log, ne = console.info, ae = console.warn, oe = console.error, ie = console.group, ue = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Ve() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: te
            }),
            info: P({}, e, {
              value: ne
            }),
            warn: P({}, e, {
              value: ae
            }),
            error: P({}, e, {
              value: oe
            }),
            group: P({}, e, {
              value: ie
            }),
            groupCollapsed: P({}, e, {
              value: ue
            }),
            groupEnd: P({}, e, {
              value: se
            })
          });
        }
        F < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var L = x.ReactCurrentDispatcher, B;
    function N(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var J = !1, V;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Me();
    }
    function fe(e, r) {
      if (!e || J)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      J = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = L.current, L.current = null, Ne();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (m) {
              n = m;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (m) {
              n = m;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (m) {
            n = m;
          }
          e();
        }
      } catch (m) {
        if (m && n && typeof m.stack == "string") {
          for (var a = m.stack.split(`
`), y = n.stack.split(`
`), f = a.length - 1, c = y.length - 1; f >= 1 && c >= 0 && a[f] !== y[c]; )
            c--;
          for (; f >= 1 && c >= 0; f--, c--)
            if (a[f] !== y[c]) {
              if (f !== 1 || c !== 1)
                do
                  if (f--, c--, c < 0 || a[f] !== y[c]) {
                    var _ = `
` + a[f].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, _), _;
                  }
                while (f >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        J = !1, L.current = s, Ve(), Error.prepareStackTrace = i;
      }
      var A = e ? e.displayName || e.name : "", j = A ? N(A) : "";
      return typeof e == "function" && V.set(e, j), j;
    }
    function Ue(e, r, t) {
      return fe(e, !1);
    }
    function Le(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Le(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case C:
          return N("Suspense");
        case h:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ue(e.render);
          case S:
            return M(e.type, r, t);
          case w: {
            var n = e, i = n._payload, s = n._init;
            try {
              return M(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var D = Object.prototype.hasOwnProperty, ce = {}, de = x.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var s = Function.call.bind(D);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var y = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              a = f;
            }
            a && !(a instanceof Error) && (U(i), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), U(null)), a instanceof Error && !(a.message in ce) && (ce[a.message] = !0, U(i), p("Failed %s type: %s", t, a.message), U(null));
          }
      }
    }
    var Je = Array.isArray;
    function q(e) {
      return Je(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function pe(e) {
      if (Ke(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), ve(e);
    }
    var I = x.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, be, K;
    K = {};
    function Xe(e) {
      if (D.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if (D.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = T(I.current.type);
        K[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(I.current.type), e.ref), K[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          ye || (ye = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          be || (be = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: O,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, i) {
      {
        var s, o = {}, a = null, y = null;
        t !== void 0 && (pe(t), a = "" + t), ze(r) && (pe(r.key), a = "" + r.key), Xe(r) && (y = r.ref, He(r, i));
        for (s in r)
          D.call(r, s) && !Ge.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (s in f)
            o[s] === void 0 && (o[s] = f[s]);
        }
        if (a || y) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, c), y && Qe(o, c);
        }
        return er(e, a, y, i, n, I.current, o);
      }
    }
    var G = x.ReactCurrentOwner, me = x.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === O;
    }
    function he() {
      {
        if (G.current) {
          var e = T(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var ge = {};
    function nr(e) {
      {
        var r = he();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (ge[t])
          return;
        ge[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + T(e._owner.type) + "."), k(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            z(n) && Ee(n, r);
          }
        else if (z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = xe(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              z(o.value) && Ee(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === S))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = T(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = T(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    var Re = {};
    function Te(e, r, t, n, i, s) {
      {
        var o = $e(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = tr();
          y ? a += y : a += he();
          var f;
          e === null ? f = "null" : q(e) ? f = "array" : e !== void 0 && e.$$typeof === O ? (f = "<" + (T(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, a);
        }
        var c = rr(e, r, t, i, s);
        if (c == null)
          return c;
        if (o) {
          var _ = r.children;
          if (_ !== void 0)
            if (n)
              if (q(_)) {
                for (var A = 0; A < _.length; A++)
                  _e(_[A], e);
                Object.freeze && Object.freeze(_);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(_, e);
        }
        if (D.call(r, "key")) {
          var j = T(e), m = Object.keys(r).filter(function(cr) {
            return cr !== "key";
          }), H = m.length > 0 ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Re[j + H]) {
            var fr = m.length > 0 ? "{" + m.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, H, j, fr, j), Re[j + H] = !0;
          }
        }
        return e === E ? or(c) : ar(c), c;
      }
    }
    function ir(e, r, t) {
      return Te(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Te(e, r, t, !1);
    }
    var sr = ur, lr = ir;
    $.Fragment = E, $.jsx = sr, $.jsxs = lr;
  }()), $;
}
process.env.NODE_ENV === "production" ? Z.exports = vr() : Z.exports = pr();
var we = Z.exports, je = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(b) {
  (function() {
    var O = {}.hasOwnProperty;
    function g() {
      for (var u = "", l = 0; l < arguments.length; l++) {
        var v = arguments[l];
        v && (u = R(u, E(v)));
      }
      return u;
    }
    function E(u) {
      if (typeof u == "string" || typeof u == "number")
        return u;
      if (typeof u != "object")
        return "";
      if (Array.isArray(u))
        return g.apply(null, u);
      if (u.toString !== Object.prototype.toString && !u.toString.toString().includes("[native code]"))
        return u.toString();
      var l = "";
      for (var v in u)
        O.call(u, v) && u[v] && (l = R(l, v));
      return l;
    }
    function R(u, l) {
      return l ? u ? u + " " + l : u + l : u;
    }
    b.exports ? (g.default = g, b.exports = g) : window.classNames = g;
  })();
})(je);
var yr = je.exports;
const br = /* @__PURE__ */ dr(yr), hr = ({
  text: b,
  onClick: O,
  variant: g = "primary",
  size: E = "medium",
  isDisabled: R = !1,
  icon: u = null,
  isLoading: l = !1,
  style: v
}) => {
  const d = br("btn", {
    "btn-primary": g === "primary",
    "btn-secondary": g === "secondary",
    "btn-small": E === "small",
    "btn-medium": E === "medium",
    "btn-large": E === "large",
    "btn-disabled": R || l,
    "btn-loading": l,
    "btn-icon": u !== null
  });
  return /* @__PURE__ */ we.jsxs(
    "button",
    {
      onClick: O,
      className: d,
      style: v,
      disabled: R || l,
      "aria-disabled": R || l,
      children: [
        u,
        b,
        l && /* @__PURE__ */ we.jsx("div", { className: "loader", children: "Loading" })
      ]
    }
  );
};
export {
  hr as GButton
};
