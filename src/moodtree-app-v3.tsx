(function () {
  const u = document.createElement("link").relList;
  if (u && u.supports && u.supports("modulepreload")) return;
  for (const m of document.querySelectorAll('link[rel="modulepreload"]')) c(m);
  new MutationObserver((m) => {
    for (const d of m) if (d.type === "childList") for (const h of d.addedNodes) h.tagName === "LINK" && h.rel === "modulepreload" && c(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(m) {
    const d = {};
    return (
      m.integrity && (d.integrity = m.integrity),
      m.referrerPolicy && (d.referrerPolicy = m.referrerPolicy),
      m.crossOrigin === "use-credentials" ? (d.credentials = "include") : m.crossOrigin === "anonymous" ? (d.credentials = "omit") : (d.credentials = "same-origin"),
      d
    );
  }
  function c(m) {
    if (m.ep) return;
    m.ep = !0;
    const d = o(m);
    fetch(m.href, d);
  }
})();
function kx(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Fo = { exports: {} },
  Ts = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var um;
function Mx() {
  if (um) return Ts;
  um = 1;
  var r = Symbol.for("react.transitional.element"),
    u = Symbol.for("react.fragment");
  function o(c, m, d) {
    var h = null;
    if ((d !== void 0 && (h = "" + d), m.key !== void 0 && (h = "" + m.key), "key" in m)) {
      d = {};
      for (var v in m) v !== "key" && (d[v] = m[v]);
    } else d = m;
    return ((m = d.ref), { $$typeof: r, type: c, key: h, ref: m !== void 0 ? m : null, props: d });
  }
  return ((Ts.Fragment = u), (Ts.jsx = o), (Ts.jsxs = o), Ts);
}
var dm;
function zx() {
  return (dm || ((dm = 1), (Fo.exports = Mx())), Fo.exports);
}
var n = zx(),
  Po = { exports: {} },
  Ie = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fm;
function Ex() {
  if (fm) return Ie;
  fm = 1;
  var r = Symbol.for("react.transitional.element"),
    u = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    m = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    v = Symbol.for("react.forward_ref"),
    j = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    C = Symbol.for("react.lazy"),
    S = Symbol.for("react.activity"),
    T = Symbol.iterator;
  function H(w) {
    return w === null || typeof w != "object" ? null : ((w = (T && w[T]) || w["@@iterator"]), typeof w == "function" ? w : null);
  }
  var k = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    X = Object.assign,
    J = {};
  function D(w, x, N) {
    ((this.props = w), (this.context = x), (this.refs = J), (this.updater = N || k));
  }
  ((D.prototype.isReactComponent = {}),
    (D.prototype.setState = function (w, x) {
      if (typeof w != "object" && typeof w != "function" && w != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, w, x, "setState");
    }),
    (D.prototype.forceUpdate = function (w) {
      this.updater.enqueueForceUpdate(this, w, "forceUpdate");
    }));
  function I() {}
  I.prototype = D.prototype;
  function V(w, x, N) {
    ((this.props = w), (this.context = x), (this.refs = J), (this.updater = N || k));
  }
  var de = (V.prototype = new I());
  ((de.constructor = V), X(de, D.prototype), (de.isPureReactComponent = !0));
  var P = Array.isArray;
  function Y() {}
  var K = { H: null, A: null, T: null, S: null },
    F = Object.prototype.hasOwnProperty;
  function Z(w, x, N) {
    var _ = N.ref;
    return { $$typeof: r, type: w, key: x, ref: _ !== void 0 ? _ : null, props: N };
  }
  function ye(w, x) {
    return Z(w.type, x, w.props);
  }
  function Ce(w) {
    return typeof w == "object" && w !== null && w.$$typeof === r;
  }
  function Se(w) {
    var x = { "=": "=0", ":": "=2" };
    return (
      "$" +
      w.replace(/[=:]/g, function (N) {
        return x[N];
      })
    );
  }
  var ke = /\/+/g;
  function Oe(w, x) {
    return typeof w == "object" && w !== null && w.key != null ? Se("" + w.key) : x.toString(36);
  }
  function ue(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (
          (typeof w.status == "string"
            ? w.then(Y, Y)
            : ((w.status = "pending"),
              w.then(
                function (x) {
                  w.status === "pending" && ((w.status = "fulfilled"), (w.value = x));
                },
                function (x) {
                  w.status === "pending" && ((w.status = "rejected"), (w.reason = x));
                },
              )),
          w.status)
        ) {
          case "fulfilled":
            return w.value;
          case "rejected":
            throw w.reason;
        }
    }
    throw w;
  }
  function R(w, x, N, _, ee) {
    var he = typeof w;
    (he === "undefined" || he === "boolean") && (w = null);
    var je = !1;
    if (w === null) je = !0;
    else
      switch (he) {
        case "bigint":
        case "string":
        case "number":
          je = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case r:
            case u:
              je = !0;
              break;
            case C:
              return ((je = w._init), R(je(w._payload), x, N, _, ee));
          }
      }
    if (je)
      return (
        (ee = ee(w)),
        (je = _ === "" ? "." + Oe(w, 0) : _),
        P(ee)
          ? ((N = ""),
            je != null && (N = je.replace(ke, "$&/") + "/"),
            R(ee, x, N, "", function (Pe) {
              return Pe;
            }))
          : ee != null && (Ce(ee) && (ee = ye(ee, N + (ee.key == null || (w && w.key === ee.key) ? "" : ("" + ee.key).replace(ke, "$&/") + "/") + je)), x.push(ee)),
        1
      );
    je = 0;
    var ze = _ === "" ? "." : _ + ":";
    if (P(w)) for (var Ee = 0; Ee < w.length; Ee++) ((_ = w[Ee]), (he = ze + Oe(_, Ee)), (je += R(_, x, N, he, ee)));
    else if (((Ee = H(w)), typeof Ee == "function")) for (w = Ee.call(w), Ee = 0; !(_ = w.next()).done;) ((_ = _.value), (he = ze + Oe(_, Ee++)), (je += R(_, x, N, he, ee)));
    else if (he === "object") {
      if (typeof w.then == "function") return R(ue(w), x, N, _, ee);
      throw (
        (x = String(w)),
        Error("Objects are not valid as a React child (found: " + (x === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : x) + "). If you meant to render a collection of children, use an array instead.")
      );
    }
    return je;
  }
  function $(w, x, N) {
    if (w == null) return w;
    var _ = [],
      ee = 0;
    return (
      R(w, _, "", "", function (he) {
        return x.call(N, he, ee++);
      }),
      _
    );
  }
  function le(w) {
    if (w._status === -1) {
      var x = w._result;
      ((x = x()),
        x.then(
          function (N) {
            (w._status === 0 || w._status === -1) && ((w._status = 1), (w._result = N));
          },
          function (N) {
            (w._status === 0 || w._status === -1) && ((w._status = 2), (w._result = N));
          },
        ),
        w._status === -1 && ((w._status = 0), (w._result = x)));
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var fe =
      typeof reportError == "function"
        ? reportError
        : function (w) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var x = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w), error: w });
              if (!window.dispatchEvent(x)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", w);
              return;
            }
            console.error(w);
          },
    be = {
      map: $,
      forEach: function (w, x, N) {
        $(
          w,
          function () {
            x.apply(this, arguments);
          },
          N,
        );
      },
      count: function (w) {
        var x = 0;
        return (
          $(w, function () {
            x++;
          }),
          x
        );
      },
      toArray: function (w) {
        return (
          $(w, function (x) {
            return x;
          }) || []
        );
      },
      only: function (w) {
        if (!Ce(w)) throw Error("React.Children.only expected to receive a single React element child.");
        return w;
      },
    };
  return (
    (Ie.Activity = S),
    (Ie.Children = be),
    (Ie.Component = D),
    (Ie.Fragment = o),
    (Ie.Profiler = m),
    (Ie.PureComponent = V),
    (Ie.StrictMode = c),
    (Ie.Suspense = j),
    (Ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K),
    (Ie.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (w) {
        return K.H.useMemoCache(w);
      },
    }),
    (Ie.cache = function (w) {
      return function () {
        return w.apply(null, arguments);
      };
    }),
    (Ie.cacheSignal = function () {
      return null;
    }),
    (Ie.cloneElement = function (w, x, N) {
      if (w == null) throw Error("The argument must be a React element, but you passed " + w + ".");
      var _ = X({}, w.props),
        ee = w.key;
      if (x != null) for (he in (x.key !== void 0 && (ee = "" + x.key), x)) !F.call(x, he) || he === "key" || he === "__self" || he === "__source" || (he === "ref" && x.ref === void 0) || (_[he] = x[he]);
      var he = arguments.length - 2;
      if (he === 1) _.children = N;
      else if (1 < he) {
        for (var je = Array(he), ze = 0; ze < he; ze++) je[ze] = arguments[ze + 2];
        _.children = je;
      }
      return Z(w.type, ee, _);
    }),
    (Ie.createContext = function (w) {
      return ((w = { $$typeof: h, _currentValue: w, _currentValue2: w, _threadCount: 0, Provider: null, Consumer: null }), (w.Provider = w), (w.Consumer = { $$typeof: d, _context: w }), w);
    }),
    (Ie.createElement = function (w, x, N) {
      var _,
        ee = {},
        he = null;
      if (x != null) for (_ in (x.key !== void 0 && (he = "" + x.key), x)) F.call(x, _) && _ !== "key" && _ !== "__self" && _ !== "__source" && (ee[_] = x[_]);
      var je = arguments.length - 2;
      if (je === 1) ee.children = N;
      else if (1 < je) {
        for (var ze = Array(je), Ee = 0; Ee < je; Ee++) ze[Ee] = arguments[Ee + 2];
        ee.children = ze;
      }
      if (w && w.defaultProps) for (_ in ((je = w.defaultProps), je)) ee[_] === void 0 && (ee[_] = je[_]);
      return Z(w, he, ee);
    }),
    (Ie.createRef = function () {
      return { current: null };
    }),
    (Ie.forwardRef = function (w) {
      return { $$typeof: v, render: w };
    }),
    (Ie.isValidElement = Ce),
    (Ie.lazy = function (w) {
      return { $$typeof: C, _payload: { _status: -1, _result: w }, _init: le };
    }),
    (Ie.memo = function (w, x) {
      return { $$typeof: y, type: w, compare: x === void 0 ? null : x };
    }),
    (Ie.startTransition = function (w) {
      var x = K.T,
        N = {};
      K.T = N;
      try {
        var _ = w(),
          ee = K.S;
        (ee !== null && ee(N, _), typeof _ == "object" && _ !== null && typeof _.then == "function" && _.then(Y, fe));
      } catch (he) {
        fe(he);
      } finally {
        (x !== null && N.types !== null && (x.types = N.types), (K.T = x));
      }
    }),
    (Ie.unstable_useCacheRefresh = function () {
      return K.H.useCacheRefresh();
    }),
    (Ie.use = function (w) {
      return K.H.use(w);
    }),
    (Ie.useActionState = function (w, x, N) {
      return K.H.useActionState(w, x, N);
    }),
    (Ie.useCallback = function (w, x) {
      return K.H.useCallback(w, x);
    }),
    (Ie.useContext = function (w) {
      return K.H.useContext(w);
    }),
    (Ie.useDebugValue = function () {}),
    (Ie.useDeferredValue = function (w, x) {
      return K.H.useDeferredValue(w, x);
    }),
    (Ie.useEffect = function (w, x) {
      return K.H.useEffect(w, x);
    }),
    (Ie.useEffectEvent = function (w) {
      return K.H.useEffectEvent(w);
    }),
    (Ie.useId = function () {
      return K.H.useId();
    }),
    (Ie.useImperativeHandle = function (w, x, N) {
      return K.H.useImperativeHandle(w, x, N);
    }),
    (Ie.useInsertionEffect = function (w, x) {
      return K.H.useInsertionEffect(w, x);
    }),
    (Ie.useLayoutEffect = function (w, x) {
      return K.H.useLayoutEffect(w, x);
    }),
    (Ie.useMemo = function (w, x) {
      return K.H.useMemo(w, x);
    }),
    (Ie.useOptimistic = function (w, x) {
      return K.H.useOptimistic(w, x);
    }),
    (Ie.useReducer = function (w, x, N) {
      return K.H.useReducer(w, x, N);
    }),
    (Ie.useRef = function (w) {
      return K.H.useRef(w);
    }),
    (Ie.useState = function (w) {
      return K.H.useState(w);
    }),
    (Ie.useSyncExternalStore = function (w, x, N) {
      return K.H.useSyncExternalStore(w, x, N);
    }),
    (Ie.useTransition = function () {
      return K.H.useTransition();
    }),
    (Ie.version = "19.2.8"),
    Ie
  );
}
var hm;
function Su() {
  return (hm || ((hm = 1), (Po.exports = Ex())), Po.exports);
}
var p = Su();
const Dx = kx(p);
var eu = { exports: {} },
  ks = {},
  tu = { exports: {} },
  au = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mm;
function Ax() {
  return (
    mm ||
      ((mm = 1),
      (function (r) {
        function u(R, $) {
          var le = R.length;
          R.push($);
          e: for (; 0 < le;) {
            var fe = (le - 1) >>> 1,
              be = R[fe];
            if (0 < m(be, $)) ((R[fe] = $), (R[le] = be), (le = fe));
            else break e;
          }
        }
        function o(R) {
          return R.length === 0 ? null : R[0];
        }
        function c(R) {
          if (R.length === 0) return null;
          var $ = R[0],
            le = R.pop();
          if (le !== $) {
            R[0] = le;
            e: for (var fe = 0, be = R.length, w = be >>> 1; fe < w;) {
              var x = 2 * (fe + 1) - 1,
                N = R[x],
                _ = x + 1,
                ee = R[_];
              if (0 > m(N, le)) _ < be && 0 > m(ee, N) ? ((R[fe] = ee), (R[_] = le), (fe = _)) : ((R[fe] = N), (R[x] = le), (fe = x));
              else if (_ < be && 0 > m(ee, le)) ((R[fe] = ee), (R[_] = le), (fe = _));
              else break e;
            }
          }
          return $;
        }
        function m(R, $) {
          var le = R.sortIndex - $.sortIndex;
          return le !== 0 ? le : R.id - $.id;
        }
        if (((r.unstable_now = void 0), typeof performance == "object" && typeof performance.now == "function")) {
          var d = performance;
          r.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            v = h.now();
          r.unstable_now = function () {
            return h.now() - v;
          };
        }
        var j = [],
          y = [],
          C = 1,
          S = null,
          T = 3,
          H = !1,
          k = !1,
          X = !1,
          J = !1,
          D = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          V = typeof setImmediate < "u" ? setImmediate : null;
        function de(R) {
          for (var $ = o(y); $ !== null;) {
            if ($.callback === null) c(y);
            else if ($.startTime <= R) (c(y), ($.sortIndex = $.expirationTime), u(j, $));
            else break;
            $ = o(y);
          }
        }
        function P(R) {
          if (((X = !1), de(R), !k))
            if (o(j) !== null) ((k = !0), Y || ((Y = !0), Se()));
            else {
              var $ = o(y);
              $ !== null && ue(P, $.startTime - R);
            }
        }
        var Y = !1,
          K = -1,
          F = 5,
          Z = -1;
        function ye() {
          return J ? !0 : !(r.unstable_now() - Z < F);
        }
        function Ce() {
          if (((J = !1), Y)) {
            var R = r.unstable_now();
            Z = R;
            var $ = !0;
            try {
              e: {
                ((k = !1), X && ((X = !1), I(K), (K = -1)), (H = !0));
                var le = T;
                try {
                  t: {
                    for (de(R), S = o(j); S !== null && !(S.expirationTime > R && ye());) {
                      var fe = S.callback;
                      if (typeof fe == "function") {
                        ((S.callback = null), (T = S.priorityLevel));
                        var be = fe(S.expirationTime <= R);
                        if (((R = r.unstable_now()), typeof be == "function")) {
                          ((S.callback = be), de(R), ($ = !0));
                          break t;
                        }
                        (S === o(j) && c(j), de(R));
                      } else c(j);
                      S = o(j);
                    }
                    if (S !== null) $ = !0;
                    else {
                      var w = o(y);
                      (w !== null && ue(P, w.startTime - R), ($ = !1));
                    }
                  }
                  break e;
                } finally {
                  ((S = null), (T = le), (H = !1));
                }
                $ = void 0;
              }
            } finally {
              $ ? Se() : (Y = !1);
            }
          }
        }
        var Se;
        if (typeof V == "function")
          Se = function () {
            V(Ce);
          };
        else if (typeof MessageChannel < "u") {
          var ke = new MessageChannel(),
            Oe = ke.port2;
          ((ke.port1.onmessage = Ce),
            (Se = function () {
              Oe.postMessage(null);
            }));
        } else
          Se = function () {
            D(Ce, 0);
          };
        function ue(R, $) {
          K = D(function () {
            R(r.unstable_now());
          }, $);
        }
        ((r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (r.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : (F = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (r.unstable_next = function (R) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var $ = 3;
                break;
              default:
                $ = T;
            }
            var le = T;
            T = $;
            try {
              return R();
            } finally {
              T = le;
            }
          }),
          (r.unstable_requestPaint = function () {
            J = !0;
          }),
          (r.unstable_runWithPriority = function (R, $) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var le = T;
            T = R;
            try {
              return $();
            } finally {
              T = le;
            }
          }),
          (r.unstable_scheduleCallback = function (R, $, le) {
            var fe = r.unstable_now();
            switch ((typeof le == "object" && le !== null ? ((le = le.delay), (le = typeof le == "number" && 0 < le ? fe + le : fe)) : (le = fe), R)) {
              case 1:
                var be = -1;
                break;
              case 2:
                be = 250;
                break;
              case 5:
                be = 1073741823;
                break;
              case 4:
                be = 1e4;
                break;
              default:
                be = 5e3;
            }
            return (
              (be = le + be),
              (R = { id: C++, callback: $, priorityLevel: R, startTime: le, expirationTime: be, sortIndex: -1 }),
              le > fe ? ((R.sortIndex = le), u(y, R), o(j) === null && R === o(y) && (X ? (I(K), (K = -1)) : (X = !0), ue(P, le - fe))) : ((R.sortIndex = be), u(j, R), k || H || ((k = !0), Y || ((Y = !0), Se()))),
              R
            );
          }),
          (r.unstable_shouldYield = ye),
          (r.unstable_wrapCallback = function (R) {
            var $ = T;
            return function () {
              var le = T;
              T = $;
              try {
                return R.apply(this, arguments);
              } finally {
                T = le;
              }
            };
          }));
      })(au)),
    au
  );
}
var pm;
function Rx() {
  return (pm || ((pm = 1), (tu.exports = Ax())), tu.exports);
}
var nu = { exports: {} },
  ka = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gm;
function Ox() {
  if (gm) return ka;
  gm = 1;
  var r = Su();
  function u(j) {
    var y = "https://react.dev/errors/" + j;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var C = 2; C < arguments.length; C++) y += "&args[]=" + encodeURIComponent(arguments[C]);
    }
    return "Minified React error #" + j + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {}
  var c = {
      d: {
        f: o,
        r: function () {
          throw Error(u(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    m = Symbol.for("react.portal");
  function d(j, y, C) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: m, key: S == null ? null : "" + S, children: j, containerInfo: y, implementation: C };
  }
  var h = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function v(j, y) {
    if (j === "font") return "";
    if (typeof y == "string") return y === "use-credentials" ? y : "";
  }
  return (
    (ka.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c),
    (ka.createPortal = function (j, y) {
      var C = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)) throw Error(u(299));
      return d(j, y, null, C);
    }),
    (ka.flushSync = function (j) {
      var y = h.T,
        C = c.p;
      try {
        if (((h.T = null), (c.p = 2), j)) return j();
      } finally {
        ((h.T = y), (c.p = C), c.d.f());
      }
    }),
    (ka.preconnect = function (j, y) {
      typeof j == "string" && (y ? ((y = y.crossOrigin), (y = typeof y == "string" ? (y === "use-credentials" ? y : "") : void 0)) : (y = null), c.d.C(j, y));
    }),
    (ka.prefetchDNS = function (j) {
      typeof j == "string" && c.d.D(j);
    }),
    (ka.preinit = function (j, y) {
      if (typeof j == "string" && y && typeof y.as == "string") {
        var C = y.as,
          S = v(C, y.crossOrigin),
          T = typeof y.integrity == "string" ? y.integrity : void 0,
          H = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        C === "style"
          ? c.d.S(j, typeof y.precedence == "string" ? y.precedence : void 0, { crossOrigin: S, integrity: T, fetchPriority: H })
          : C === "script" && c.d.X(j, { crossOrigin: S, integrity: T, fetchPriority: H, nonce: typeof y.nonce == "string" ? y.nonce : void 0 });
      }
    }),
    (ka.preinitModule = function (j, y) {
      if (typeof j == "string")
        if (typeof y == "object" && y !== null) {
          if (y.as == null || y.as === "script") {
            var C = v(y.as, y.crossOrigin);
            c.d.M(j, { crossOrigin: C, integrity: typeof y.integrity == "string" ? y.integrity : void 0, nonce: typeof y.nonce == "string" ? y.nonce : void 0 });
          }
        } else y == null && c.d.M(j);
    }),
    (ka.preload = function (j, y) {
      if (typeof j == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
        var C = y.as,
          S = v(C, y.crossOrigin);
        c.d.L(j, C, {
          crossOrigin: S,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0,
        });
      }
    }),
    (ka.preloadModule = function (j, y) {
      if (typeof j == "string")
        if (y) {
          var C = v(y.as, y.crossOrigin);
          c.d.m(j, { as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0, crossOrigin: C, integrity: typeof y.integrity == "string" ? y.integrity : void 0 });
        } else c.d.m(j);
    }),
    (ka.requestFormReset = function (j) {
      c.d.r(j);
    }),
    (ka.unstable_batchedUpdates = function (j, y) {
      return j(y);
    }),
    (ka.useFormState = function (j, y, C) {
      return h.H.useFormState(j, y, C);
    }),
    (ka.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (ka.version = "19.2.8"),
    ka
  );
}
var xm;
function _x() {
  if (xm) return nu.exports;
  xm = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (u) {
        console.error(u);
      }
  }
  return (r(), (nu.exports = Ox()), nu.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vm;
function Ux() {
  if (vm) return ks;
  vm = 1;
  var r = Rx(),
    u = Su(),
    o = _x();
  function c(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function m(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function d(e) {
    var t = e,
      a = e;
    if (e.alternate) for (; t.return;) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (a = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function h(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
  }
  function j(e) {
    if (d(e) !== e) throw Error(c(188));
  }
  function y(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = d(e)), t === null)) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var a = e, i = t; ;) {
      var l = a.return;
      if (l === null) break;
      var s = l.alternate;
      if (s === null) {
        if (((i = l.return), i !== null)) {
          a = i;
          continue;
        }
        break;
      }
      if (l.child === s.child) {
        for (s = l.child; s;) {
          if (s === a) return (j(l), e);
          if (s === i) return (j(l), t);
          s = s.sibling;
        }
        throw Error(c(188));
      }
      if (a.return !== i.return) ((a = l), (i = s));
      else {
        for (var f = !1, b = l.child; b;) {
          if (b === a) {
            ((f = !0), (a = l), (i = s));
            break;
          }
          if (b === i) {
            ((f = !0), (i = l), (a = s));
            break;
          }
          b = b.sibling;
        }
        if (!f) {
          for (b = s.child; b;) {
            if (b === a) {
              ((f = !0), (a = s), (i = l));
              break;
            }
            if (b === i) {
              ((f = !0), (i = s), (a = l));
              break;
            }
            b = b.sibling;
          }
          if (!f) throw Error(c(189));
        }
      }
      if (a.alternate !== i) throw Error(c(190));
    }
    if (a.tag !== 3) throw Error(c(188));
    return a.stateNode.current === a ? e : t;
  }
  function C(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null;) {
      if (((t = C(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var S = Object.assign,
    T = Symbol.for("react.element"),
    H = Symbol.for("react.transitional.element"),
    k = Symbol.for("react.portal"),
    X = Symbol.for("react.fragment"),
    J = Symbol.for("react.strict_mode"),
    D = Symbol.for("react.profiler"),
    I = Symbol.for("react.consumer"),
    V = Symbol.for("react.context"),
    de = Symbol.for("react.forward_ref"),
    P = Symbol.for("react.suspense"),
    Y = Symbol.for("react.suspense_list"),
    K = Symbol.for("react.memo"),
    F = Symbol.for("react.lazy"),
    Z = Symbol.for("react.activity"),
    ye = Symbol.for("react.memo_cache_sentinel"),
    Ce = Symbol.iterator;
  function Se(e) {
    return e === null || typeof e != "object" ? null : ((e = (Ce && e[Ce]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var ke = Symbol.for("react.client.reference");
  function Oe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === ke ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case X:
        return "Fragment";
      case D:
        return "Profiler";
      case J:
        return "StrictMode";
      case P:
        return "Suspense";
      case Y:
        return "SuspenseList";
      case Z:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case k:
          return "Portal";
        case V:
          return e.displayName || "Context";
        case I:
          return (e._context.displayName || "Context") + ".Consumer";
        case de:
          var t = e.render;
          return ((e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e);
        case K:
          return ((t = e.displayName || null), t !== null ? t : Oe(e.type) || "Memo");
        case F:
          ((t = e._payload), (e = e._init));
          try {
            return Oe(e(t));
          } catch {}
      }
    return null;
  }
  var ue = Array.isArray,
    R = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    $ = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    le = { pending: !1, data: null, method: null, action: null },
    fe = [],
    be = -1;
  function w(e) {
    return { current: e };
  }
  function x(e) {
    0 > be || ((e.current = fe[be]), (fe[be] = null), be--);
  }
  function N(e, t) {
    (be++, (fe[be] = e.current), (e.current = t));
  }
  var _ = w(null),
    ee = w(null),
    he = w(null),
    je = w(null);
  function ze(e, t) {
    switch ((N(he, t), N(ee, e), N(_, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Rh(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) ((t = Rh(t)), (e = Oh(t, e)));
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
    (x(_), N(_, e));
  }
  function Ee() {
    (x(_), x(ee), x(he));
  }
  function Pe(e) {
    e.memoizedState !== null && N(je, e);
    var t = _.current,
      a = Oh(t, e.type);
    t !== a && (N(ee, e), N(_, a));
  }
  function Ve(e) {
    (ee.current === e && (x(_), x(ee)), je.current === e && (x(je), (Ss._currentValue = le)));
  }
  var pt, ot;
  function gt(e) {
    if (pt === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((pt = (t && t[1]) || ""),
          (ot =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      pt +
      e +
      ot
    );
  }
  var yt = !1;
  function fa(e, t) {
    if (!e || yt) return "";
    yt = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var re = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(re.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(re, []);
                } catch (W) {
                  var G = W;
                }
                Reflect.construct(e, [], re);
              } else {
                try {
                  re.call();
                } catch (W) {
                  G = W;
                }
                e.call(re.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (W) {
                G = W;
              }
              (re = e()) && typeof re.catch == "function" && re.catch(function () {});
            }
          } catch (W) {
            if (W && G && typeof W.stack == "string") return [W.stack, G.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var l = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
      l && l.configurable && Object.defineProperty(i.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var s = i.DetermineComponentFrameRoot(),
        f = s[0],
        b = s[1];
      if (f && b) {
        var E = f.split(`
`),
          q = b.split(`
`);
        for (l = i = 0; i < E.length && !E[i].includes("DetermineComponentFrameRoot");) i++;
        for (; l < q.length && !q[l].includes("DetermineComponentFrameRoot");) l++;
        if (i === E.length || l === q.length) for (i = E.length - 1, l = q.length - 1; 1 <= i && 0 <= l && E[i] !== q[l];) l--;
        for (; 1 <= i && 0 <= l; i--, l--)
          if (E[i] !== q[l]) {
            if (i !== 1 || l !== 1)
              do
                if ((i--, l--, 0 > l || E[i] !== q[l])) {
                  var ae =
                    `
` + E[i].replace(" at new ", " at ");
                  return (e.displayName && ae.includes("<anonymous>") && (ae = ae.replace("<anonymous>", e.displayName)), ae);
                }
              while (1 <= i && 0 <= l);
            break;
          }
      }
    } finally {
      ((yt = !1), (Error.prepareStackTrace = a));
    }
    return (a = e ? e.displayName || e.name : "") ? gt(a) : "";
  }
  function we(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return gt(e.type);
      case 16:
        return gt("Lazy");
      case 13:
        return e.child !== t && t !== null ? gt("Suspense Fallback") : gt("Suspense");
      case 19:
        return gt("SuspenseList");
      case 0:
      case 15:
        return fa(e.type, !1);
      case 11:
        return fa(e.type.render, !1);
      case 1:
        return fa(e.type, !0);
      case 31:
        return gt("Activity");
      default:
        return "";
    }
  }
  function st(e) {
    try {
      var t = "",
        a = null;
      do ((t += we(e, a)), (a = e), (e = e.return));
      while (e);
      return t;
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      );
    }
  }
  var Mt = Object.prototype.hasOwnProperty,
    zt = r.unstable_scheduleCallback,
    $e = r.unstable_cancelCallback,
    jt = r.unstable_shouldYield,
    xa = r.unstable_requestPaint,
    We = r.unstable_now,
    It = r.unstable_getCurrentPriorityLevel,
    Xt = r.unstable_ImmediatePriority,
    Rt = r.unstable_UserBlockingPriority,
    Gt = r.unstable_NormalPriority,
    Zt = r.unstable_LowPriority,
    Dt = r.unstable_IdlePriority,
    Ya = r.log,
    Vt = r.unstable_setDisableYieldValue,
    St = null,
    U = null;
  function xe(e) {
    if ((typeof Ya == "function" && Vt(e), U && typeof U.setStrictMode == "function"))
      try {
        U.setStrictMode(St, e);
      } catch {}
  }
  var ve = Math.clz32 ? Math.clz32 : Ze,
    Qe = Math.log,
    Ge = Math.LN2;
  function Ze(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Qe(e) / Ge) | 0)) | 0);
  }
  var Fe = 256,
    me = 262144,
    $t = 4194304;
  function xt(e) {
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
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
  function Kt(e, t, a) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var l = 0,
      s = e.suspendedLanes,
      f = e.pingedLanes;
    e = e.warmLanes;
    var b = i & 134217727;
    return (
      b !== 0 ? ((i = b & ~s), i !== 0 ? (l = xt(i)) : ((f &= b), f !== 0 ? (l = xt(f)) : a || ((a = b & ~e), a !== 0 && (l = xt(a))))) : ((b = i & ~s), b !== 0 ? (l = xt(b)) : f !== 0 ? (l = xt(f)) : a || ((a = i & ~e), a !== 0 && (l = xt(a)))),
      l === 0 ? 0 : t !== 0 && t !== l && (t & s) === 0 && ((s = l & -l), (a = t & -t), s >= a || (s === 32 && (a & 4194048) !== 0)) ? t : l
    );
  }
  function Jt(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function ca(e, t) {
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
  function ha() {
    var e = $t;
    return (($t <<= 1), ($t & 62914560) === 0 && ($t = 4194304), e);
  }
  function va(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function O(e, t) {
    ((e.pendingLanes |= t), t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function M(e, t, a, i, l, s) {
    var f = e.pendingLanes;
    ((e.pendingLanes = a), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0), (e.expiredLanes &= a), (e.entangledLanes &= a), (e.errorRecoveryDisabledLanes &= a), (e.shellSuspendCounter = 0));
    var b = e.entanglements,
      E = e.expirationTimes,
      q = e.hiddenUpdates;
    for (a = f & ~a; 0 < a;) {
      var ae = 31 - ve(a),
        re = 1 << ae;
      ((b[ae] = 0), (E[ae] = -1));
      var G = q[ae];
      if (G !== null)
        for (q[ae] = null, ae = 0; ae < G.length; ae++) {
          var W = G[ae];
          W !== null && (W.lane &= -536870913);
        }
      a &= ~re;
    }
    (i !== 0 && Q(e, i, 0), s !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(f & ~t)));
  }
  function Q(e, t, a) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var i = 31 - ve(t);
    ((e.entangledLanes |= t), (e.entanglements[i] = e.entanglements[i] | 1073741824 | (a & 261930)));
  }
  function oe(e, t) {
    var a = (e.entangledLanes |= t);
    for (e = e.entanglements; a;) {
      var i = 31 - ve(a),
        l = 1 << i;
      ((l & t) | (e[i] & t) && (e[i] |= t), (a &= ~l));
    }
  }
  function Ne(e, t) {
    var a = t & -t;
    return ((a = (a & 42) !== 0 ? 1 : De(a)), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a);
  }
  function De(e) {
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
  function Ue(e) {
    return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function _e() {
    var e = $.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : nm(e.type));
  }
  function Le(e, t) {
    var a = $.p;
    try {
      return (($.p = e), t());
    } finally {
      $.p = a;
    }
  }
  var rt = Math.random().toString(36).slice(2),
    ht = "__reactFiber$" + rt,
    Nt = "__reactProps$" + rt,
    ba = "__reactContainer$" + rt,
    se = "__reactEvents$" + rt,
    ge = "__reactListeners$" + rt,
    Ae = "__reactHandles$" + rt,
    ct = "__reactResources$" + rt,
    Wt = "__reactMarker$" + rt;
  function xn(e) {
    (delete e[ht], delete e[Nt], delete e[se], delete e[ge], delete e[Ae]);
  }
  function Wa(e) {
    var t = e[ht];
    if (t) return t;
    for (var a = e.parentNode; a;) {
      if ((t = a[ba] || a[ht])) {
        if (((a = t.alternate), t.child !== null || (a !== null && a.child !== null)))
          for (e = qh(e); e !== null;) {
            if ((a = e[ht])) return a;
            e = qh(e);
          }
        return t;
      }
      ((e = a), (a = e.parentNode));
    }
    return null;
  }
  function qa(e) {
    if ((e = e[ht] || e[ba])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function Dn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function vn(e) {
    var t = e[ct];
    return (t || (t = e[ct] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function Qt(e) {
    e[Wt] = !0;
  }
  var Pi = new Set(),
    el = {};
  function Xa(e, t) {
    (on(e, t), on(e + "Capture", t));
  }
  function on(e, t) {
    for (el[e] = t, e = 0; e < t.length; e++) Pi.add(t[e]);
  }
  var Hl = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    wi = {},
    Ci = {};
  function oa(e) {
    return Mt.call(Ci, e) ? !0 : Mt.call(wi, e) ? !1 : Hl.test(e) ? (Ci[e] = !0) : ((wi[e] = !0), !1);
  }
  function bn(e, t, a) {
    if (oa(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var i = t.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function An(e, t, a) {
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
  function Ma(e, t, a, i) {
    if (i === null) e.removeAttribute(a);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + i);
    }
  }
  function ma(e) {
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
  function Ti(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ll(e, t, a) {
    var i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var l = i.get,
        s = i.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (f) {
            ((a = "" + f), s.call(this, f));
          },
        }),
        Object.defineProperty(e, t, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (f) {
            a = "" + f;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Jn(e) {
    if (!e._valueTracker) {
      var t = Ti(e) ? "checked" : "value";
      e._valueTracker = Ll(e, t, "" + e[t]);
    }
  }
  function ki(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      i = "";
    return (e && (i = Ti(e) ? (e.checked ? "true" : "false") : e.value), (e = i), e !== a ? (t.setValue(e), !0) : !1);
  }
  function un(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var tl = /[\n"\\]/g;
  function ua(e) {
    return e.replace(tl, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ot(e, t, a, i, l, s, f, b) {
    ((e.name = ""),
      f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? (e.type = f) : e.removeAttribute("type"),
      t != null ? (f === "number" ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + ma(t)) : e.value !== "" + ma(t) && (e.value = "" + ma(t))) : (f !== "submit" && f !== "reset") || e.removeAttribute("value"),
      t != null ? jn(e, f, ma(t)) : a != null ? jn(e, f, ma(a)) : i != null && e.removeAttribute("value"),
      l == null && s != null && (e.defaultChecked = !!s),
      l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"),
      b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? (e.name = "" + ma(b)) : e.removeAttribute("name"));
  }
  function yn(e, t, a, i, l, s, f, b) {
    if ((s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.type = s), t != null || a != null)) {
      if (!((s !== "submit" && s !== "reset") || t != null)) {
        Jn(e);
        return;
      }
      ((a = a != null ? "" + ma(a) : ""), (t = t != null ? "" + ma(t) : a), b || t === e.value || (e.value = t), (e.defaultValue = t));
    }
    ((i = i ?? l), (i = typeof i != "function" && typeof i != "symbol" && !!i), (e.checked = b ? e.checked : !!i), (e.defaultChecked = !!i), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), Jn(e));
  }
  function jn(e, t, a) {
    (t === "number" && un(e.ownerDocument) === e) || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Da(e, t, a, i) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < a.length; l++) t["$" + a[l]] = !0;
      for (a = 0; a < e.length; a++) ((l = t.hasOwnProperty("$" + e[a].value)), e[a].selected !== l && (e[a].selected = l), l && i && (e[a].defaultSelected = !0));
    } else {
      for (a = "" + ma(a), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === a) {
          ((e[l].selected = !0), i && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Mi(e, t, a) {
    if (t != null && ((t = "" + ma(t)), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + ma(a) : "";
  }
  function wt(e, t, a, i) {
    if (t == null) {
      if (i != null) {
        if (a != null) throw Error(c(92));
        if (ue(i)) {
          if (1 < i.length) throw Error(c(93));
          i = i[0];
        }
        a = i;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = ma(t)), (e.defaultValue = a), (i = e.textContent), i === a && i !== "" && i !== null && (e.value = i), Jn(e));
  }
  function dn(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Fa = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function zi(e, t, a) {
    var i = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? i
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : i
        ? e.setProperty(t, a)
        : typeof a != "number" || a === 0 || Fa.has(t)
          ? t === "float"
            ? (e.cssFloat = a)
            : (e[t] = ("" + a).trim())
          : (e[t] = a + "px");
  }
  function Aa(e, t, a) {
    if (t != null && typeof t != "object") throw Error(c(62));
    if (((e = e.style), a != null)) {
      for (var i in a) !a.hasOwnProperty(i) || (t != null && t.hasOwnProperty(i)) || (i.indexOf("--") === 0 ? e.setProperty(i, "") : i === "float" ? (e.cssFloat = "") : (e[i] = ""));
      for (var l in t) ((i = t[l]), t.hasOwnProperty(l) && a[l] !== i && zi(e, l, i));
    } else for (var s in t) t.hasOwnProperty(s) && zi(e, s, t[s]);
  }
  function Sn(e) {
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
  var Wn = new Map([
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
      ["xHeight", "x-height"],
    ]),
    Fn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function z(e) {
    return Fn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function te() {}
  var ce = null;
  function Xe(e) {
    return ((e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e);
  }
  var ut = null,
    aa = null;
  function wa(e) {
    var t = qa(e);
    if (t && (e = t.stateNode)) {
      var a = e[Nt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if ((Ot(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), (t = a.name), a.type === "radio" && t != null)) {
            for (a = e; a.parentNode;) a = a.parentNode;
            for (a = a.querySelectorAll('input[name="' + ua("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
              var i = a[t];
              if (i !== e && i.form === e.form) {
                var l = i[Nt] || null;
                if (!l) throw Error(c(90));
                Ot(i, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name);
              }
            }
            for (t = 0; t < a.length; t++) ((i = a[t]), i.form === e.form && ki(i));
          }
          break e;
        case "textarea":
          Mi(e, a.value, a.defaultValue);
          break e;
        case "select":
          ((t = a.value), t != null && Da(e, !!a.multiple, t, !1));
      }
    }
  }
  var Nn = !1;
  function Rn(e, t, a) {
    if (Nn) return e(t, a);
    Nn = !0;
    try {
      var i = e(t);
      return i;
    } finally {
      if (((Nn = !1), (ut !== null || aa !== null) && (yr(), ut && ((t = ut), (e = aa), (aa = ut = null), wa(t), e)))) for (t = 0; t < e.length; t++) wa(e[t]);
    }
  }
  function g(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var i = a[Nt] || null;
    if (i === null) return null;
    a = i[t];
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
        ((i = !i.disabled) || ((e = e.type), (i = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !i));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(c(231, t, typeof a));
    return a;
  }
  var ne = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Be = !1;
  if (ne)
    try {
      var Ca = {};
      (Object.defineProperty(Ca, "passive", {
        get: function () {
          Be = !0;
        },
      }),
        window.addEventListener("test", Ca, Ca),
        window.removeEventListener("test", Ca, Ca));
    } catch {
      Be = !1;
    }
  var Ga = null,
    Yl = null,
    al = null;
  function Bs() {
    if (al) return al;
    var e,
      t = Yl,
      a = t.length,
      i,
      l = "value" in Ga ? Ga.value : Ga.textContent,
      s = l.length;
    for (e = 0; e < a && t[e] === l[e]; e++);
    var f = a - e;
    for (i = 1; i <= f && t[a - i] === l[s - i]; i++);
    return (al = l.slice(e, 1 < i ? 1 - i : void 0));
  }
  function Ei(e) {
    var t = e.keyCode;
    return ("charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0);
  }
  function Di() {
    return !0;
  }
  function At() {
    return !1;
  }
  function Ta(e) {
    function t(a, i, l, s, f) {
      ((this._reactName = a), (this._targetInst = l), (this.type = i), (this.nativeEvent = s), (this.target = f), (this.currentTarget = null));
      for (var b in e) e.hasOwnProperty(b) && ((a = e[b]), (this[b] = a ? a(s) : s[b]));
      return ((this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Di : At), (this.isPropagationStopped = At), this);
    }
    return (
      S(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), (this.isDefaultPrevented = Di));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), (this.isPropagationStopped = Di));
        },
        persist: function () {},
        isPersistent: Di,
      }),
      t
    );
  }
  var wn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ai = Ta(wn),
    ql = S({}, wn, { view: 0, detail: 0 }),
    Cp = Ta(ql),
    Pr,
    ec,
    Xl,
    Hs = S({}, ql, {
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
      getModifierState: ac,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e ? e.movementX : (e !== Xl && (Xl && e.type === "mousemove" ? ((Pr = e.screenX - Xl.screenX), (ec = e.screenY - Xl.screenY)) : (ec = Pr = 0), (Xl = e)), Pr);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ec;
      },
    }),
    _u = Ta(Hs),
    Tp = S({}, Hs, { dataTransfer: 0 }),
    kp = Ta(Tp),
    Mp = S({}, ql, { relatedTarget: 0 }),
    tc = Ta(Mp),
    zp = S({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ep = Ta(zp),
    Dp = S({}, wn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Ap = Ta(Dp),
    Rp = S({}, wn, { data: 0 }),
    Uu = Ta(Rp),
    Op = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
    _p = {
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
      224: "Meta",
    },
    Up = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Bp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Up[e]) ? !!t[e] : !1;
  }
  function ac() {
    return Bp;
  }
  var Hp = S({}, ql, {
      key: function (e) {
        if (e.key) {
          var t = Op[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? ((e = Ei(e)), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _p[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ac,
      charCode: function (e) {
        return e.type === "keypress" ? Ei(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress" ? Ei(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
    }),
    Lp = Ta(Hp),
    Yp = S({}, Hs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
    Bu = Ta(Yp),
    qp = S({}, ql, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ac }),
    Xp = Ta(qp),
    Gp = S({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Vp = Ta(Gp),
    $p = S({}, Hs, {
      deltaX: function (e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Qp = Ta($p),
    Ip = S({}, wn, { newState: 0, oldState: 0 }),
    Zp = Ta(Ip),
    Kp = [9, 13, 27, 32],
    nc = ne && "CompositionEvent" in window,
    Gl = null;
  ne && "documentMode" in document && (Gl = document.documentMode);
  var Jp = ne && "TextEvent" in window && !Gl,
    Hu = ne && (!nc || (Gl && 8 < Gl && 11 >= Gl)),
    Lu = " ",
    Yu = !1;
  function qu(e, t) {
    switch (e) {
      case "keyup":
        return Kp.indexOf(t.keyCode) !== -1;
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
  function Xu(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var nl = !1;
  function Wp(e, t) {
    switch (e) {
      case "compositionend":
        return Xu(t);
      case "keypress":
        return t.which !== 32 ? null : ((Yu = !0), Lu);
      case "textInput":
        return ((e = t.data), e === Lu && Yu ? null : e);
      default:
        return null;
    }
  }
  function Fp(e, t) {
    if (nl) return e === "compositionend" || (!nc && qu(e, t)) ? ((e = Bs()), (al = Yl = Ga = null), (nl = !1), e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Hu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Pp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Gu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Pp[e.type] : t === "textarea";
  }
  function Vu(e, t, a, i) {
    (ut ? (aa ? aa.push(i) : (aa = [i])) : (ut = i), (t = kr(t, "onChange")), 0 < t.length && ((a = new Ai("onChange", "change", null, a, i)), e.push({ event: a, listeners: t })));
  }
  var Vl = null,
    $l = null;
  function eg(e) {
    kh(e, 0);
  }
  function Ls(e) {
    var t = Dn(e);
    if (ki(t)) return e;
  }
  function $u(e, t) {
    if (e === "change") return t;
  }
  var Qu = !1;
  if (ne) {
    var ic;
    if (ne) {
      var lc = "oninput" in document;
      if (!lc) {
        var Iu = document.createElement("div");
        (Iu.setAttribute("oninput", "return;"), (lc = typeof Iu.oninput == "function"));
      }
      ic = lc;
    } else ic = !1;
    Qu = ic && (!document.documentMode || 9 < document.documentMode);
  }
  function Zu() {
    Vl && (Vl.detachEvent("onpropertychange", Ku), ($l = Vl = null));
  }
  function Ku(e) {
    if (e.propertyName === "value" && Ls($l)) {
      var t = [];
      (Vu(t, $l, e, Xe(e)), Rn(eg, t));
    }
  }
  function tg(e, t, a) {
    e === "focusin" ? (Zu(), (Vl = t), ($l = a), Vl.attachEvent("onpropertychange", Ku)) : e === "focusout" && Zu();
  }
  function ag(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ls($l);
  }
  function ng(e, t) {
    if (e === "click") return Ls(t);
  }
  function ig(e, t) {
    if (e === "input" || e === "change") return Ls(t);
  }
  function lg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Va = typeof Object.is == "function" ? Object.is : lg;
  function Ql(e, t) {
    if (Va(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var a = Object.keys(e),
      i = Object.keys(t);
    if (a.length !== i.length) return !1;
    for (i = 0; i < a.length; i++) {
      var l = a[i];
      if (!Mt.call(t, l) || !Va(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ju(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Wu(e, t) {
    var a = Ju(e);
    e = 0;
    for (var i; a;) {
      if (a.nodeType === 3) {
        if (((i = e + a.textContent.length), e <= t && i >= t)) return { node: a, offset: t - e };
        e = i;
      }
      e: {
        for (; a;) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Ju(a);
    }
  }
  function Fu(e, t) {
    return e && t ? (e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Fu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1) : !1;
  }
  function Pu(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = un(e.document); t instanceof e.HTMLIFrameElement;) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = un(e.document);
    }
    return t;
  }
  function sc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) || t === "textarea" || e.contentEditable === "true");
  }
  var sg = ne && "documentMode" in document && 11 >= document.documentMode,
    il = null,
    rc = null,
    Il = null,
    cc = !1;
  function ed(e, t, a) {
    var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    cc ||
      il == null ||
      il !== un(i) ||
      ((i = il),
      "selectionStart" in i && sc(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = ((i.ownerDocument && i.ownerDocument.defaultView) || window).getSelection()), (i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset })),
      (Il && Ql(Il, i)) || ((Il = i), (i = kr(rc, "onSelect")), 0 < i.length && ((t = new Ai("onSelect", "select", null, t, a)), e.push({ event: t, listeners: i }), (t.target = il))));
  }
  function Ri(e, t) {
    var a = {};
    return ((a[e.toLowerCase()] = t.toLowerCase()), (a["Webkit" + e] = "webkit" + t), (a["Moz" + e] = "moz" + t), a);
  }
  var ll = {
      animationend: Ri("Animation", "AnimationEnd"),
      animationiteration: Ri("Animation", "AnimationIteration"),
      animationstart: Ri("Animation", "AnimationStart"),
      transitionrun: Ri("Transition", "TransitionRun"),
      transitionstart: Ri("Transition", "TransitionStart"),
      transitioncancel: Ri("Transition", "TransitionCancel"),
      transitionend: Ri("Transition", "TransitionEnd"),
    },
    oc = {},
    td = {};
  ne &&
    ((td = document.createElement("div").style),
    "AnimationEvent" in window || (delete ll.animationend.animation, delete ll.animationiteration.animation, delete ll.animationstart.animation),
    "TransitionEvent" in window || delete ll.transitionend.transition);
  function Oi(e) {
    if (oc[e]) return oc[e];
    if (!ll[e]) return e;
    var t = ll[e],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in td) return (oc[e] = t[a]);
    return e;
  }
  var ad = Oi("animationend"),
    nd = Oi("animationiteration"),
    id = Oi("animationstart"),
    rg = Oi("transitionrun"),
    cg = Oi("transitionstart"),
    og = Oi("transitioncancel"),
    ld = Oi("transitionend"),
    sd = new Map(),
    uc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  uc.push("scrollEnd");
  function fn(e, t) {
    (sd.set(e, t), Xa(t, [e]));
  }
  var Ys =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var t = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
              if (!window.dispatchEvent(t)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Pa = [],
    sl = 0,
    dc = 0;
  function qs() {
    for (var e = sl, t = (dc = sl = 0); t < e;) {
      var a = Pa[t];
      Pa[t++] = null;
      var i = Pa[t];
      Pa[t++] = null;
      var l = Pa[t];
      Pa[t++] = null;
      var s = Pa[t];
      if (((Pa[t++] = null), i !== null && l !== null)) {
        var f = i.pending;
        (f === null ? (l.next = l) : ((l.next = f.next), (f.next = l)), (i.pending = l));
      }
      s !== 0 && rd(a, l, s);
    }
  }
  function Xs(e, t, a, i) {
    ((Pa[sl++] = e), (Pa[sl++] = t), (Pa[sl++] = a), (Pa[sl++] = i), (dc |= i), (e.lanes |= i), (e = e.alternate), e !== null && (e.lanes |= i));
  }
  function fc(e, t, a, i) {
    return (Xs(e, t, a, i), Gs(e));
  }
  function _i(e, t) {
    return (Xs(e, null, null, t), Gs(e));
  }
  function rd(e, t, a) {
    e.lanes |= a;
    var i = e.alternate;
    i !== null && (i.lanes |= a);
    for (var l = !1, s = e.return; s !== null;) ((s.childLanes |= a), (i = s.alternate), i !== null && (i.childLanes |= a), s.tag === 22 && ((e = s.stateNode), e === null || e._visibility & 1 || (l = !0)), (e = s), (s = s.return));
    return e.tag === 3 ? ((s = e.stateNode), l && t !== null && ((l = 31 - ve(a)), (e = s.hiddenUpdates), (i = e[l]), i === null ? (e[l] = [t]) : i.push(t), (t.lane = a | 536870912)), s) : null;
  }
  function Gs(e) {
    if (50 < ps) throw ((ps = 0), (So = null), Error(c(185)));
    for (var t = e.return; t !== null;) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var rl = {};
  function ug(e, t, a, i) {
    ((this.tag = e),
      (this.key = a),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function $a(e, t, a, i) {
    return new ug(e, t, a, i);
  }
  function hc(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function On(e, t) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = $a(e.tag, t, e.key, e.mode)), (a.elementType = e.elementType), (a.type = e.type), (a.stateNode = e.stateNode), (a.alternate = e), (e.alternate = a))
        : ((a.pendingProps = t), (a.type = e.type), (a.flags = 0), (a.subtreeFlags = 0), (a.deletions = null)),
      (a.flags = e.flags & 65011712),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function cd(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0), (e.lanes = t), (e.child = null), (e.subtreeFlags = 0), (e.memoizedProps = null), (e.memoizedState = null), (e.updateQueue = null), (e.dependencies = null), (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (t = a.dependencies),
          (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Vs(e, t, a, i, l, s) {
    var f = 0;
    if (((i = e), typeof e == "function")) hc(e) && (f = 1);
    else if (typeof e == "string") f = px(e, a, _.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Z:
          return ((e = $a(31, a, t, l)), (e.elementType = Z), (e.lanes = s), e);
        case X:
          return Ui(a.children, l, s, t);
        case J:
          ((f = 8), (l |= 24));
          break;
        case D:
          return ((e = $a(12, a, t, l | 2)), (e.elementType = D), (e.lanes = s), e);
        case P:
          return ((e = $a(13, a, t, l)), (e.elementType = P), (e.lanes = s), e);
        case Y:
          return ((e = $a(19, a, t, l)), (e.elementType = Y), (e.lanes = s), e);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case V:
                f = 10;
                break e;
              case I:
                f = 9;
                break e;
              case de:
                f = 11;
                break e;
              case K:
                f = 14;
                break e;
              case F:
                ((f = 16), (i = null));
                break e;
            }
          ((f = 29), (a = Error(c(130, e === null ? "null" : typeof e, ""))), (i = null));
      }
    return ((t = $a(f, a, t, l)), (t.elementType = e), (t.type = i), (t.lanes = s), t);
  }
  function Ui(e, t, a, i) {
    return ((e = $a(7, e, i, t)), (e.lanes = a), e);
  }
  function mc(e, t, a) {
    return ((e = $a(6, e, null, t)), (e.lanes = a), e);
  }
  function od(e) {
    var t = $a(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function pc(e, t, a) {
    return ((t = $a(4, e.children !== null ? e.children : [], e.key, t)), (t.lanes = a), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t);
  }
  var ud = new WeakMap();
  function en(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = ud.get(e);
      return a !== void 0 ? a : ((t = { value: e, source: t, stack: st(t) }), ud.set(e, t), t);
    }
    return { value: e, source: t, stack: st(t) };
  }
  var cl = [],
    ol = 0,
    $s = null,
    Zl = 0,
    tn = [],
    an = 0,
    Pn = null,
    Cn = 1,
    Tn = "";
  function _n(e, t) {
    ((cl[ol++] = Zl), (cl[ol++] = $s), ($s = e), (Zl = t));
  }
  function dd(e, t, a) {
    ((tn[an++] = Cn), (tn[an++] = Tn), (tn[an++] = Pn), (Pn = e));
    var i = Cn;
    e = Tn;
    var l = 32 - ve(i) - 1;
    ((i &= ~(1 << l)), (a += 1));
    var s = 32 - ve(t) + l;
    if (30 < s) {
      var f = l - (l % 5);
      ((s = (i & ((1 << f) - 1)).toString(32)), (i >>= f), (l -= f), (Cn = (1 << (32 - ve(t) + l)) | (a << l) | i), (Tn = s + e));
    } else ((Cn = (1 << s) | (a << l) | i), (Tn = e));
  }
  function gc(e) {
    e.return !== null && (_n(e, 1), dd(e, 1, 0));
  }
  function xc(e) {
    for (; e === $s;) (($s = cl[--ol]), (cl[ol] = null), (Zl = cl[--ol]), (cl[ol] = null));
    for (; e === Pn;) ((Pn = tn[--an]), (tn[an] = null), (Tn = tn[--an]), (tn[an] = null), (Cn = tn[--an]), (tn[an] = null));
  }
  function fd(e, t) {
    ((tn[an++] = Cn), (tn[an++] = Tn), (tn[an++] = Pn), (Cn = t.id), (Tn = t.overflow), (Pn = e));
  }
  var ya = null,
    _t = null,
    lt = !1,
    ei = null,
    nn = !1,
    vc = Error(c(519));
  function ti(e) {
    var t = Error(c(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw (Kl(en(t, e)), vc);
  }
  function hd(e) {
    var t = e.stateNode,
      a = e.type,
      i = e.memoizedProps;
    switch (((t[ht] = e), (t[Nt] = i), a)) {
      case "dialog":
        (tt("cancel", t), tt("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        tt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < xs.length; a++) tt(xs[a], t);
        break;
      case "source":
        tt("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (tt("error", t), tt("load", t));
        break;
      case "details":
        tt("toggle", t);
        break;
      case "input":
        (tt("invalid", t), yn(t, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, !0));
        break;
      case "select":
        tt("invalid", t);
        break;
      case "textarea":
        (tt("invalid", t), wt(t, i.value, i.defaultValue, i.children));
    }
    ((a = i.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") || t.textContent === "" + a || i.suppressHydrationWarning === !0 || Dh(t.textContent, a)
        ? (i.popover != null && (tt("beforetoggle", t), tt("toggle", t)), i.onScroll != null && tt("scroll", t), i.onScrollEnd != null && tt("scrollend", t), i.onClick != null && (t.onclick = te), (t = !0))
        : (t = !1),
      t || ti(e, !0));
  }
  function md(e) {
    for (ya = e.return; ya;)
      switch (ya.tag) {
        case 5:
        case 31:
        case 13:
          nn = !1;
          return;
        case 27:
        case 3:
          nn = !0;
          return;
        default:
          ya = ya.return;
      }
  }
  function ul(e) {
    if (e !== ya) return !1;
    if (!lt) return (md(e), (lt = !0), !1);
    var t = e.tag,
      a;
    if (((a = t !== 3 && t !== 27) && ((a = t === 5) && ((a = e.type), (a = !(a !== "form" && a !== "button") || Bo(e.type, e.memoizedProps))), (a = !a)), a && _t && ti(e), md(e), t === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(c(317));
      _t = Yh(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(c(317));
      _t = Yh(e);
    } else t === 27 ? ((t = _t), pi(e.type) ? ((e = Xo), (Xo = null), (_t = e)) : (_t = t)) : (_t = ya ? sn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Bi() {
    ((_t = ya = null), (lt = !1));
  }
  function bc() {
    var e = ei;
    return (e !== null && (Ua === null ? (Ua = e) : Ua.push.apply(Ua, e), (ei = null)), e);
  }
  function Kl(e) {
    ei === null ? (ei = [e]) : ei.push(e);
  }
  var yc = w(null),
    Hi = null,
    Un = null;
  function ai(e, t, a) {
    (N(yc, t._currentValue), (t._currentValue = a));
  }
  function Bn(e) {
    ((e._currentValue = yc.current), x(yc));
  }
  function jc(e, t, a) {
    for (; e !== null;) {
      var i = e.alternate;
      if (((e.childLanes & t) !== t ? ((e.childLanes |= t), i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a)) break;
      e = e.return;
    }
  }
  function Sc(e, t, a, i) {
    var l = e.child;
    for (l !== null && (l.return = e); l !== null;) {
      var s = l.dependencies;
      if (s !== null) {
        var f = l.child;
        s = s.firstContext;
        e: for (; s !== null;) {
          var b = s;
          s = l;
          for (var E = 0; E < t.length; E++)
            if (b.context === t[E]) {
              ((s.lanes |= a), (b = s.alternate), b !== null && (b.lanes |= a), jc(s.return, a, e), i || (f = null));
              break e;
            }
          s = b.next;
        }
      } else if (l.tag === 18) {
        if (((f = l.return), f === null)) throw Error(c(341));
        ((f.lanes |= a), (s = f.alternate), s !== null && (s.lanes |= a), jc(f, a, e), (f = null));
      } else f = l.child;
      if (f !== null) f.return = l;
      else
        for (f = l; f !== null;) {
          if (f === e) {
            f = null;
            break;
          }
          if (((l = f.sibling), l !== null)) {
            ((l.return = f.return), (f = l));
            break;
          }
          f = f.return;
        }
      l = f;
    }
  }
  function dl(e, t, a, i) {
    e = null;
    for (var l = t, s = !1; l !== null;) {
      if (!s) {
        if ((l.flags & 524288) !== 0) s = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var f = l.alternate;
        if (f === null) throw Error(c(387));
        if (((f = f.memoizedProps), f !== null)) {
          var b = l.type;
          Va(l.pendingProps.value, f.value) || (e !== null ? e.push(b) : (e = [b]));
        }
      } else if (l === je.current) {
        if (((f = l.alternate), f === null)) throw Error(c(387));
        f.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(Ss) : (e = [Ss]));
      }
      l = l.return;
    }
    (e !== null && Sc(t, e, a, i), (t.flags |= 262144));
  }
  function Qs(e) {
    for (e = e.firstContext; e !== null;) {
      if (!Va(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Li(e) {
    ((Hi = e), (Un = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function ja(e) {
    return pd(Hi, e);
  }
  function Is(e, t) {
    return (Hi === null && Li(e), pd(e, t));
  }
  function pd(e, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Un === null)) {
      if (e === null) throw Error(c(308));
      ((Un = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else Un = Un.next = t;
    return a;
  }
  var dg =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, i) {
                  e.push(i);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (a) {
                  return a();
                }));
            };
          },
    fg = r.unstable_scheduleCallback,
    hg = r.unstable_NormalPriority,
    na = { $$typeof: V, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Nc() {
    return { controller: new dg(), data: new Map(), refCount: 0 };
  }
  function Jl(e) {
    (e.refCount--,
      e.refCount === 0 &&
        fg(hg, function () {
          e.controller.abort();
        }));
  }
  var Wl = null,
    wc = 0,
    fl = 0,
    hl = null;
  function mg(e, t) {
    if (Wl === null) {
      var a = (Wl = []);
      ((wc = 0),
        (fl = Mo()),
        (hl = {
          status: "pending",
          value: void 0,
          then: function (i) {
            a.push(i);
          },
        }));
    }
    return (wc++, t.then(gd, gd), t);
  }
  function gd() {
    if (--wc === 0 && Wl !== null) {
      hl !== null && (hl.status = "fulfilled");
      var e = Wl;
      ((Wl = null), (fl = 0), (hl = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function pg(e, t) {
    var a = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (l) {
          a.push(l);
        },
      };
    return (
      e.then(
        function () {
          ((i.status = "fulfilled"), (i.value = t));
          for (var l = 0; l < a.length; l++) (0, a[l])(t);
        },
        function (l) {
          for (i.status = "rejected", i.reason = l, l = 0; l < a.length; l++) (0, a[l])(void 0);
        },
      ),
      i
    );
  }
  var xd = R.S;
  R.S = function (e, t) {
    ((th = We()), typeof t == "object" && t !== null && typeof t.then == "function" && mg(e, t), xd !== null && xd(e, t));
  };
  var Yi = w(null);
  function Cc() {
    var e = Yi.current;
    return e !== null ? e : Et.pooledCache;
  }
  function Zs(e, t) {
    t === null ? N(Yi, Yi.current) : N(Yi, t.pool);
  }
  function vd() {
    var e = Cc();
    return e === null ? null : { parent: na._currentValue, pool: e };
  }
  var ml = Error(c(460)),
    Tc = Error(c(474)),
    Ks = Error(c(542)),
    Js = { then: function () {} };
  function bd(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function yd(e, t, a) {
    switch (((a = e[a]), a === void 0 ? e.push(t) : a !== t && (t.then(te, te), (t = a)), t.status)) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Sd(e), e);
      default:
        if (typeof t.status == "string") t.then(te, te);
        else {
          if (((e = Et), e !== null && 100 < e.shellSuspendCounter)) throw Error(c(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (i) {
                if (t.status === "pending") {
                  var l = t;
                  ((l.status = "fulfilled"), (l.value = i));
                }
              },
              function (i) {
                if (t.status === "pending") {
                  var l = t;
                  ((l.status = "rejected"), (l.reason = i));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Sd(e), e);
        }
        throw ((Xi = t), ml);
    }
  }
  function qi(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? ((Xi = a), ml) : a;
    }
  }
  var Xi = null;
  function jd() {
    if (Xi === null) throw Error(c(459));
    var e = Xi;
    return ((Xi = null), e);
  }
  function Sd(e) {
    if (e === ml || e === Ks) throw Error(c(483));
  }
  var pl = null,
    Fl = 0;
  function Ws(e) {
    var t = Fl;
    return ((Fl += 1), pl === null && (pl = []), yd(pl, e, t));
  }
  function Pl(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Fs(e, t) {
    throw t.$$typeof === T ? Error(c(525)) : ((e = Object.prototype.toString.call(t)), Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
  }
  function Nd(e) {
    function t(B, A) {
      if (e) {
        var L = B.deletions;
        L === null ? ((B.deletions = [A]), (B.flags |= 16)) : L.push(A);
      }
    }
    function a(B, A) {
      if (!e) return null;
      for (; A !== null;) (t(B, A), (A = A.sibling));
      return null;
    }
    function i(B) {
      for (var A = new Map(); B !== null;) (B.key !== null ? A.set(B.key, B) : A.set(B.index, B), (B = B.sibling));
      return A;
    }
    function l(B, A) {
      return ((B = On(B, A)), (B.index = 0), (B.sibling = null), B);
    }
    function s(B, A, L) {
      return ((B.index = L), e ? ((L = B.alternate), L !== null ? ((L = L.index), L < A ? ((B.flags |= 67108866), A) : L) : ((B.flags |= 67108866), A)) : ((B.flags |= 1048576), A));
    }
    function f(B) {
      return (e && B.alternate === null && (B.flags |= 67108866), B);
    }
    function b(B, A, L, ie) {
      return A === null || A.tag !== 6 ? ((A = mc(L, B.mode, ie)), (A.return = B), A) : ((A = l(A, L)), (A.return = B), A);
    }
    function E(B, A, L, ie) {
      var He = L.type;
      return He === X
        ? ae(B, A, L.props.children, ie, L.key)
        : A !== null && (A.elementType === He || (typeof He == "object" && He !== null && He.$$typeof === F && qi(He) === A.type))
          ? ((A = l(A, L.props)), Pl(A, L), (A.return = B), A)
          : ((A = Vs(L.type, L.key, L.props, null, B.mode, ie)), Pl(A, L), (A.return = B), A);
    }
    function q(B, A, L, ie) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== L.containerInfo || A.stateNode.implementation !== L.implementation ? ((A = pc(L, B.mode, ie)), (A.return = B), A) : ((A = l(A, L.children || [])), (A.return = B), A);
    }
    function ae(B, A, L, ie, He) {
      return A === null || A.tag !== 7 ? ((A = Ui(L, B.mode, ie, He)), (A.return = B), A) : ((A = l(A, L)), (A.return = B), A);
    }
    function re(B, A, L) {
      if ((typeof A == "string" && A !== "") || typeof A == "number" || typeof A == "bigint") return ((A = mc("" + A, B.mode, L)), (A.return = B), A);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case H:
            return ((L = Vs(A.type, A.key, A.props, null, B.mode, L)), Pl(L, A), (L.return = B), L);
          case k:
            return ((A = pc(A, B.mode, L)), (A.return = B), A);
          case F:
            return ((A = qi(A)), re(B, A, L));
        }
        if (ue(A) || Se(A)) return ((A = Ui(A, B.mode, L, null)), (A.return = B), A);
        if (typeof A.then == "function") return re(B, Ws(A), L);
        if (A.$$typeof === V) return re(B, Is(B, A), L);
        Fs(B, A);
      }
      return null;
    }
    function G(B, A, L, ie) {
      var He = A !== null ? A.key : null;
      if ((typeof L == "string" && L !== "") || typeof L == "number" || typeof L == "bigint") return He !== null ? null : b(B, A, "" + L, ie);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case H:
            return L.key === He ? E(B, A, L, ie) : null;
          case k:
            return L.key === He ? q(B, A, L, ie) : null;
          case F:
            return ((L = qi(L)), G(B, A, L, ie));
        }
        if (ue(L) || Se(L)) return He !== null ? null : ae(B, A, L, ie, null);
        if (typeof L.then == "function") return G(B, A, Ws(L), ie);
        if (L.$$typeof === V) return G(B, A, Is(B, L), ie);
        Fs(B, L);
      }
      return null;
    }
    function W(B, A, L, ie, He) {
      if ((typeof ie == "string" && ie !== "") || typeof ie == "number" || typeof ie == "bigint") return ((B = B.get(L) || null), b(A, B, "" + ie, He));
      if (typeof ie == "object" && ie !== null) {
        switch (ie.$$typeof) {
          case H:
            return ((B = B.get(ie.key === null ? L : ie.key) || null), E(A, B, ie, He));
          case k:
            return ((B = B.get(ie.key === null ? L : ie.key) || null), q(A, B, ie, He));
          case F:
            return ((ie = qi(ie)), W(B, A, L, ie, He));
        }
        if (ue(ie) || Se(ie)) return ((B = B.get(L) || null), ae(A, B, ie, He, null));
        if (typeof ie.then == "function") return W(B, A, L, Ws(ie), He);
        if (ie.$$typeof === V) return W(B, A, L, Is(A, ie), He);
        Fs(A, ie);
      }
      return null;
    }
    function Me(B, A, L, ie) {
      for (var He = null, dt = null, Re = A, Je = (A = 0), nt = null; Re !== null && Je < L.length; Je++) {
        Re.index > Je ? ((nt = Re), (Re = null)) : (nt = Re.sibling);
        var ft = G(B, Re, L[Je], ie);
        if (ft === null) {
          Re === null && (Re = nt);
          break;
        }
        (e && Re && ft.alternate === null && t(B, Re), (A = s(ft, A, Je)), dt === null ? (He = ft) : (dt.sibling = ft), (dt = ft), (Re = nt));
      }
      if (Je === L.length) return (a(B, Re), lt && _n(B, Je), He);
      if (Re === null) {
        for (; Je < L.length; Je++) ((Re = re(B, L[Je], ie)), Re !== null && ((A = s(Re, A, Je)), dt === null ? (He = Re) : (dt.sibling = Re), (dt = Re)));
        return (lt && _n(B, Je), He);
      }
      for (Re = i(Re); Je < L.length; Je++) ((nt = W(Re, B, Je, L[Je], ie)), nt !== null && (e && nt.alternate !== null && Re.delete(nt.key === null ? Je : nt.key), (A = s(nt, A, Je)), dt === null ? (He = nt) : (dt.sibling = nt), (dt = nt)));
      return (
        e &&
          Re.forEach(function (yi) {
            return t(B, yi);
          }),
        lt && _n(B, Je),
        He
      );
    }
    function Ye(B, A, L, ie) {
      if (L == null) throw Error(c(151));
      for (var He = null, dt = null, Re = A, Je = (A = 0), nt = null, ft = L.next(); Re !== null && !ft.done; Je++, ft = L.next()) {
        Re.index > Je ? ((nt = Re), (Re = null)) : (nt = Re.sibling);
        var yi = G(B, Re, ft.value, ie);
        if (yi === null) {
          Re === null && (Re = nt);
          break;
        }
        (e && Re && yi.alternate === null && t(B, Re), (A = s(yi, A, Je)), dt === null ? (He = yi) : (dt.sibling = yi), (dt = yi), (Re = nt));
      }
      if (ft.done) return (a(B, Re), lt && _n(B, Je), He);
      if (Re === null) {
        for (; !ft.done; Je++, ft = L.next()) ((ft = re(B, ft.value, ie)), ft !== null && ((A = s(ft, A, Je)), dt === null ? (He = ft) : (dt.sibling = ft), (dt = ft)));
        return (lt && _n(B, Je), He);
      }
      for (Re = i(Re); !ft.done; Je++, ft = L.next())
        ((ft = W(Re, B, Je, ft.value, ie)), ft !== null && (e && ft.alternate !== null && Re.delete(ft.key === null ? Je : ft.key), (A = s(ft, A, Je)), dt === null ? (He = ft) : (dt.sibling = ft), (dt = ft)));
      return (
        e &&
          Re.forEach(function (Tx) {
            return t(B, Tx);
          }),
        lt && _n(B, Je),
        He
      );
    }
    function kt(B, A, L, ie) {
      if ((typeof L == "object" && L !== null && L.type === X && L.key === null && (L = L.props.children), typeof L == "object" && L !== null)) {
        switch (L.$$typeof) {
          case H:
            e: {
              for (var He = L.key; A !== null;) {
                if (A.key === He) {
                  if (((He = L.type), He === X)) {
                    if (A.tag === 7) {
                      (a(B, A.sibling), (ie = l(A, L.props.children)), (ie.return = B), (B = ie));
                      break e;
                    }
                  } else if (A.elementType === He || (typeof He == "object" && He !== null && He.$$typeof === F && qi(He) === A.type)) {
                    (a(B, A.sibling), (ie = l(A, L.props)), Pl(ie, L), (ie.return = B), (B = ie));
                    break e;
                  }
                  a(B, A);
                  break;
                } else t(B, A);
                A = A.sibling;
              }
              L.type === X ? ((ie = Ui(L.props.children, B.mode, ie, L.key)), (ie.return = B), (B = ie)) : ((ie = Vs(L.type, L.key, L.props, null, B.mode, ie)), Pl(ie, L), (ie.return = B), (B = ie));
            }
            return f(B);
          case k:
            e: {
              for (He = L.key; A !== null;) {
                if (A.key === He)
                  if (A.tag === 4 && A.stateNode.containerInfo === L.containerInfo && A.stateNode.implementation === L.implementation) {
                    (a(B, A.sibling), (ie = l(A, L.children || [])), (ie.return = B), (B = ie));
                    break e;
                  } else {
                    a(B, A);
                    break;
                  }
                else t(B, A);
                A = A.sibling;
              }
              ((ie = pc(L, B.mode, ie)), (ie.return = B), (B = ie));
            }
            return f(B);
          case F:
            return ((L = qi(L)), kt(B, A, L, ie));
        }
        if (ue(L)) return Me(B, A, L, ie);
        if (Se(L)) {
          if (((He = Se(L)), typeof He != "function")) throw Error(c(150));
          return ((L = He.call(L)), Ye(B, A, L, ie));
        }
        if (typeof L.then == "function") return kt(B, A, Ws(L), ie);
        if (L.$$typeof === V) return kt(B, A, Is(B, L), ie);
        Fs(B, L);
      }
      return (typeof L == "string" && L !== "") || typeof L == "number" || typeof L == "bigint"
        ? ((L = "" + L), A !== null && A.tag === 6 ? (a(B, A.sibling), (ie = l(A, L)), (ie.return = B), (B = ie)) : (a(B, A), (ie = mc(L, B.mode, ie)), (ie.return = B), (B = ie)), f(B))
        : a(B, A);
    }
    return function (B, A, L, ie) {
      try {
        Fl = 0;
        var He = kt(B, A, L, ie);
        return ((pl = null), He);
      } catch (Re) {
        if (Re === ml || Re === Ks) throw Re;
        var dt = $a(29, Re, null, B.mode);
        return ((dt.lanes = ie), (dt.return = B), dt);
      } finally {
      }
    };
  }
  var Gi = Nd(!0),
    wd = Nd(!1),
    ni = !1;
  function kc(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function Mc(e, t) {
    ((e = e.updateQueue), t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null }));
  }
  function ii(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function li(e, t, a) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (mt & 2) !== 0)) {
      var l = i.pending;
      return (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (i.pending = t), (t = Gs(e)), rd(e, null, a), t);
    }
    return (Xs(e, i, t, a), Gs(e));
  }
  function es(e, t, a) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))) {
      var i = t.lanes;
      ((i &= e.pendingLanes), (a |= i), (t.lanes = a), oe(e, a));
    }
  }
  function zc(e, t) {
    var a = e.updateQueue,
      i = e.alternate;
    if (i !== null && ((i = i.updateQueue), a === i)) {
      var l = null,
        s = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var f = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null };
          (s === null ? (l = s = f) : (s = s.next = f), (a = a.next));
        } while (a !== null);
        s === null ? (l = s = t) : (s = s.next = t);
      } else l = s = t;
      ((a = { baseState: i.baseState, firstBaseUpdate: l, lastBaseUpdate: s, shared: i.shared, callbacks: i.callbacks }), (e.updateQueue = a));
      return;
    }
    ((e = a.lastBaseUpdate), e === null ? (a.firstBaseUpdate = t) : (e.next = t), (a.lastBaseUpdate = t));
  }
  var Ec = !1;
  function ts() {
    if (Ec) {
      var e = hl;
      if (e !== null) throw e;
    }
  }
  function as(e, t, a, i) {
    Ec = !1;
    var l = e.updateQueue;
    ni = !1;
    var s = l.firstBaseUpdate,
      f = l.lastBaseUpdate,
      b = l.shared.pending;
    if (b !== null) {
      l.shared.pending = null;
      var E = b,
        q = E.next;
      ((E.next = null), f === null ? (s = q) : (f.next = q), (f = E));
      var ae = e.alternate;
      ae !== null && ((ae = ae.updateQueue), (b = ae.lastBaseUpdate), b !== f && (b === null ? (ae.firstBaseUpdate = q) : (b.next = q), (ae.lastBaseUpdate = E)));
    }
    if (s !== null) {
      var re = l.baseState;
      ((f = 0), (ae = q = E = null), (b = s));
      do {
        var G = b.lane & -536870913,
          W = G !== b.lane;
        if (W ? (at & G) === G : (i & G) === G) {
          (G !== 0 && G === fl && (Ec = !0), ae !== null && (ae = ae.next = { lane: 0, tag: b.tag, payload: b.payload, callback: null, next: null }));
          e: {
            var Me = e,
              Ye = b;
            G = t;
            var kt = a;
            switch (Ye.tag) {
              case 1:
                if (((Me = Ye.payload), typeof Me == "function")) {
                  re = Me.call(kt, re, G);
                  break e;
                }
                re = Me;
                break e;
              case 3:
                Me.flags = (Me.flags & -65537) | 128;
              case 0:
                if (((Me = Ye.payload), (G = typeof Me == "function" ? Me.call(kt, re, G) : Me), G == null)) break e;
                re = S({}, re, G);
                break e;
              case 2:
                ni = !0;
            }
          }
          ((G = b.callback), G !== null && ((e.flags |= 64), W && (e.flags |= 8192), (W = l.callbacks), W === null ? (l.callbacks = [G]) : W.push(G)));
        } else ((W = { lane: G, tag: b.tag, payload: b.payload, callback: b.callback, next: null }), ae === null ? ((q = ae = W), (E = re)) : (ae = ae.next = W), (f |= G));
        if (((b = b.next), b === null)) {
          if (((b = l.shared.pending), b === null)) break;
          ((W = b), (b = W.next), (W.next = null), (l.lastBaseUpdate = W), (l.shared.pending = null));
        }
      } while (!0);
      (ae === null && (E = re), (l.baseState = E), (l.firstBaseUpdate = q), (l.lastBaseUpdate = ae), s === null && (l.shared.lanes = 0), (ui |= f), (e.lanes = f), (e.memoizedState = re));
    }
  }
  function Cd(e, t) {
    if (typeof e != "function") throw Error(c(191, e));
    e.call(t);
  }
  function Td(e, t) {
    var a = e.callbacks;
    if (a !== null) for (e.callbacks = null, e = 0; e < a.length; e++) Cd(a[e], t);
  }
  var gl = w(null),
    Ps = w(0);
  function kd(e, t) {
    ((e = Qn), N(Ps, e), N(gl, t), (Qn = e | t.baseLanes));
  }
  function Dc() {
    (N(Ps, Qn), N(gl, gl.current));
  }
  function Ac() {
    ((Qn = Ps.current), x(gl), x(Ps));
  }
  var Qa = w(null),
    ln = null;
  function si(e) {
    var t = e.alternate;
    (N(ea, ea.current & 1), N(Qa, e), ln === null && (t === null || gl.current !== null || t.memoizedState !== null) && (ln = e));
  }
  function Rc(e) {
    (N(ea, ea.current), N(Qa, e), ln === null && (ln = e));
  }
  function Md(e) {
    e.tag === 22 ? (N(ea, ea.current), N(Qa, e), ln === null && (ln = e)) : ri();
  }
  function ri() {
    (N(ea, ea.current), N(Qa, Qa.current));
  }
  function Ia(e) {
    (x(Qa), ln === e && (ln = null), x(ea));
  }
  var ea = w(0);
  function er(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || Yo(a) || qo(a))) return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Hn = 0,
    Ke = null,
    Ct = null,
    ia = null,
    tr = !1,
    xl = !1,
    Vi = !1,
    ar = 0,
    ns = 0,
    vl = null,
    gg = 0;
  function Ft() {
    throw Error(c(321));
  }
  function Oc(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++) if (!Va(e[a], t[a])) return !1;
    return !0;
  }
  function _c(e, t, a, i, l, s) {
    return ((Hn = s), (Ke = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (R.H = e === null || e.memoizedState === null ? ff : Jc), (Vi = !1), (s = a(i, l)), (Vi = !1), xl && (s = Ed(t, a, i, l)), zd(e), s);
  }
  function zd(e) {
    R.H = ss;
    var t = Ct !== null && Ct.next !== null;
    if (((Hn = 0), (ia = Ct = Ke = null), (tr = !1), (ns = 0), (vl = null), t)) throw Error(c(300));
    e === null || la || ((e = e.dependencies), e !== null && Qs(e) && (la = !0));
  }
  function Ed(e, t, a, i) {
    Ke = e;
    var l = 0;
    do {
      if ((xl && (vl = null), (ns = 0), (xl = !1), 25 <= l)) throw Error(c(301));
      if (((l += 1), (ia = Ct = null), e.updateQueue != null)) {
        var s = e.updateQueue;
        ((s.lastEffect = null), (s.events = null), (s.stores = null), s.memoCache != null && (s.memoCache.index = 0));
      }
      ((R.H = hf), (s = t(a, i)));
    } while (xl);
    return s;
  }
  function xg() {
    var e = R.H,
      t = e.useState()[0];
    return ((t = typeof t.then == "function" ? is(t) : t), (e = e.useState()[0]), (Ct !== null ? Ct.memoizedState : null) !== e && (Ke.flags |= 1024), t);
  }
  function Uc() {
    var e = ar !== 0;
    return ((ar = 0), e);
  }
  function Bc(e, t, a) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a));
  }
  function Hc(e) {
    if (tr) {
      for (e = e.memoizedState; e !== null;) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      tr = !1;
    }
    ((Hn = 0), (ia = Ct = Ke = null), (xl = !1), (ns = ar = 0), (vl = null));
  }
  function za() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (ia === null ? (Ke.memoizedState = ia = e) : (ia = ia.next = e), ia);
  }
  function ta() {
    if (Ct === null) {
      var e = Ke.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ct.next;
    var t = ia === null ? Ke.memoizedState : ia.next;
    if (t !== null) ((ia = t), (Ct = e));
    else {
      if (e === null) throw Ke.alternate === null ? Error(c(467)) : Error(c(310));
      ((Ct = e), (e = { memoizedState: Ct.memoizedState, baseState: Ct.baseState, baseQueue: Ct.baseQueue, queue: Ct.queue, next: null }), ia === null ? (Ke.memoizedState = ia = e) : (ia = ia.next = e));
    }
    return ia;
  }
  function nr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function is(e) {
    var t = ns;
    return ((ns += 1), vl === null && (vl = []), (e = yd(vl, e, t)), (t = Ke), (ia === null ? t.memoizedState : ia.next) === null && ((t = t.alternate), (R.H = t === null || t.memoizedState === null ? ff : Jc)), e);
  }
  function ir(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return is(e);
      if (e.$$typeof === V) return ja(e);
    }
    throw Error(c(438, String(e)));
  }
  function Lc(e) {
    var t = null,
      a = Ke.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var i = Ke.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (t = {
              data: i.data.map(function (l) {
                return l.slice();
              }),
              index: 0,
            })));
    }
    if ((t == null && (t = { data: [], index: 0 }), a === null && ((a = nr()), (Ke.updateQueue = a)), (a.memoCache = t), (a = t.data[t.index]), a === void 0)) for (a = t.data[t.index] = Array(e), i = 0; i < e; i++) a[i] = ye;
    return (t.index++, a);
  }
  function Ln(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function lr(e) {
    var t = ta();
    return Yc(t, Ct, e);
  }
  function Yc(e, t, a) {
    var i = e.queue;
    if (i === null) throw Error(c(311));
    i.lastRenderedReducer = a;
    var l = e.baseQueue,
      s = i.pending;
    if (s !== null) {
      if (l !== null) {
        var f = l.next;
        ((l.next = s.next), (s.next = f));
      }
      ((t.baseQueue = l = s), (i.pending = null));
    }
    if (((s = e.baseState), l === null)) e.memoizedState = s;
    else {
      t = l.next;
      var b = (f = null),
        E = null,
        q = t,
        ae = !1;
      do {
        var re = q.lane & -536870913;
        if (re !== q.lane ? (at & re) === re : (Hn & re) === re) {
          var G = q.revertLane;
          if (G === 0) (E !== null && (E = E.next = { lane: 0, revertLane: 0, gesture: null, action: q.action, hasEagerState: q.hasEagerState, eagerState: q.eagerState, next: null }), re === fl && (ae = !0));
          else if ((Hn & G) === G) {
            ((q = q.next), G === fl && (ae = !0));
            continue;
          } else
            ((re = { lane: 0, revertLane: q.revertLane, gesture: null, action: q.action, hasEagerState: q.hasEagerState, eagerState: q.eagerState, next: null }), E === null ? ((b = E = re), (f = s)) : (E = E.next = re), (Ke.lanes |= G), (ui |= G));
          ((re = q.action), Vi && a(s, re), (s = q.hasEagerState ? q.eagerState : a(s, re)));
        } else
          ((G = { lane: re, revertLane: q.revertLane, gesture: q.gesture, action: q.action, hasEagerState: q.hasEagerState, eagerState: q.eagerState, next: null }),
            E === null ? ((b = E = G), (f = s)) : (E = E.next = G),
            (Ke.lanes |= re),
            (ui |= re));
        q = q.next;
      } while (q !== null && q !== t);
      if ((E === null ? (f = s) : (E.next = b), !Va(s, e.memoizedState) && ((la = !0), ae && ((a = hl), a !== null)))) throw a;
      ((e.memoizedState = s), (e.baseState = f), (e.baseQueue = E), (i.lastRenderedState = s));
    }
    return (l === null && (i.lanes = 0), [e.memoizedState, i.dispatch]);
  }
  function qc(e) {
    var t = ta(),
      a = t.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = e;
    var i = a.dispatch,
      l = a.pending,
      s = t.memoizedState;
    if (l !== null) {
      a.pending = null;
      var f = (l = l.next);
      do ((s = e(s, f.action)), (f = f.next));
      while (f !== l);
      (Va(s, t.memoizedState) || (la = !0), (t.memoizedState = s), t.baseQueue === null && (t.baseState = s), (a.lastRenderedState = s));
    }
    return [s, i];
  }
  function Dd(e, t, a) {
    var i = Ke,
      l = ta(),
      s = lt;
    if (s) {
      if (a === void 0) throw Error(c(407));
      a = a();
    } else a = t();
    var f = !Va((Ct || l).memoizedState, a);
    if ((f && ((l.memoizedState = a), (la = !0)), (l = l.queue), Vc(Od.bind(null, i, l, e), [e]), l.getSnapshot !== t || f || (ia !== null && ia.memoizedState.tag & 1))) {
      if (((i.flags |= 2048), bl(9, { destroy: void 0 }, Rd.bind(null, i, l, a, t), null), Et === null)) throw Error(c(349));
      s || (Hn & 127) !== 0 || Ad(i, t, a);
    }
    return a;
  }
  function Ad(e, t, a) {
    ((e.flags |= 16384), (e = { getSnapshot: t, value: a }), (t = Ke.updateQueue), t === null ? ((t = nr()), (Ke.updateQueue = t), (t.stores = [e])) : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e)));
  }
  function Rd(e, t, a, i) {
    ((t.value = a), (t.getSnapshot = i), _d(t) && Ud(e));
  }
  function Od(e, t, a) {
    return a(function () {
      _d(t) && Ud(e);
    });
  }
  function _d(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Va(e, a);
    } catch {
      return !0;
    }
  }
  function Ud(e) {
    var t = _i(e, 2);
    t !== null && Ba(t, e, 2);
  }
  function Xc(e) {
    var t = za();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), Vi)) {
        xe(!0);
        try {
          a();
        } finally {
          xe(!1);
        }
      }
    }
    return ((t.memoizedState = t.baseState = e), (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ln, lastRenderedState: e }), t);
  }
  function Bd(e, t, a, i) {
    return ((e.baseState = a), Yc(e, Ct, typeof i == "function" ? i : Ln));
  }
  function vg(e, t, a, i, l) {
    if (cr(e)) throw Error(c(485));
    if (((e = t.action), e !== null)) {
      var s = {
        payload: l,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          s.listeners.push(f);
        },
      };
      (R.T !== null ? a(!0) : (s.isTransition = !1), i(s), (a = t.pending), a === null ? ((s.next = t.pending = s), Hd(t, s)) : ((s.next = a.next), (t.pending = a.next = s)));
    }
  }
  function Hd(e, t) {
    var a = t.action,
      i = t.payload,
      l = e.state;
    if (t.isTransition) {
      var s = R.T,
        f = {};
      R.T = f;
      try {
        var b = a(l, i),
          E = R.S;
        (E !== null && E(f, b), Ld(e, t, b));
      } catch (q) {
        Gc(e, t, q);
      } finally {
        (s !== null && f.types !== null && (s.types = f.types), (R.T = s));
      }
    } else
      try {
        ((s = a(l, i)), Ld(e, t, s));
      } catch (q) {
        Gc(e, t, q);
      }
  }
  function Ld(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (i) {
            Yd(e, t, i);
          },
          function (i) {
            return Gc(e, t, i);
          },
        )
      : Yd(e, t, a);
  }
  function Yd(e, t, a) {
    ((t.status = "fulfilled"), (t.value = a), qd(t), (e.state = a), (t = e.pending), t !== null && ((a = t.next), a === t ? (e.pending = null) : ((a = a.next), (t.next = a), Hd(e, a))));
  }
  function Gc(e, t, a) {
    var i = e.pending;
    if (((e.pending = null), i !== null)) {
      i = i.next;
      do ((t.status = "rejected"), (t.reason = a), qd(t), (t = t.next));
      while (t !== i);
    }
    e.action = null;
  }
  function qd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Xd(e, t) {
    return t;
  }
  function Gd(e, t) {
    if (lt) {
      var a = Et.formState;
      if (a !== null) {
        e: {
          var i = Ke;
          if (lt) {
            if (_t) {
              t: {
                for (var l = _t, s = nn; l.nodeType !== 8;) {
                  if (!s) {
                    l = null;
                    break t;
                  }
                  if (((l = sn(l.nextSibling)), l === null)) {
                    l = null;
                    break t;
                  }
                }
                ((s = l.data), (l = s === "F!" || s === "F" ? l : null));
              }
              if (l) {
                ((_t = sn(l.nextSibling)), (i = l.data === "F!"));
                break e;
              }
            }
            ti(i);
          }
          i = !1;
        }
        i && (t = a[0]);
      }
    }
    return (
      (a = za()),
      (a.memoizedState = a.baseState = t),
      (i = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Xd, lastRenderedState: t }),
      (a.queue = i),
      (a = of.bind(null, Ke, i)),
      (i.dispatch = a),
      (i = Xc(!1)),
      (s = Kc.bind(null, Ke, !1, i.queue)),
      (i = za()),
      (l = { state: t, dispatch: null, action: e, pending: null }),
      (i.queue = l),
      (a = vg.bind(null, Ke, l, s, a)),
      (l.dispatch = a),
      (i.memoizedState = e),
      [t, a, !1]
    );
  }
  function Vd(e) {
    var t = ta();
    return $d(t, Ct, e);
  }
  function $d(e, t, a) {
    if (((t = Yc(e, t, Xd)[0]), (e = lr(Ln)[0]), typeof t == "object" && t !== null && typeof t.then == "function"))
      try {
        var i = is(t);
      } catch (f) {
        throw f === ml ? Ks : f;
      }
    else i = t;
    t = ta();
    var l = t.queue,
      s = l.dispatch;
    return (a !== t.memoizedState && ((Ke.flags |= 2048), bl(9, { destroy: void 0 }, bg.bind(null, l, a), null)), [i, s, e]);
  }
  function bg(e, t) {
    e.action = t;
  }
  function Qd(e) {
    var t = ta(),
      a = Ct;
    if (a !== null) return $d(t, a, e);
    (ta(), (t = t.memoizedState), (a = ta()));
    var i = a.queue.dispatch;
    return ((a.memoizedState = e), [t, i, !1]);
  }
  function bl(e, t, a, i) {
    return (
      (e = { tag: e, create: a, deps: i, inst: t, next: null }),
      (t = Ke.updateQueue),
      t === null && ((t = nr()), (Ke.updateQueue = t)),
      (a = t.lastEffect),
      a === null ? (t.lastEffect = e.next = e) : ((i = a.next), (a.next = e), (e.next = i), (t.lastEffect = e)),
      e
    );
  }
  function Id() {
    return ta().memoizedState;
  }
  function sr(e, t, a, i) {
    var l = za();
    ((Ke.flags |= e), (l.memoizedState = bl(1 | t, { destroy: void 0 }, a, i === void 0 ? null : i)));
  }
  function rr(e, t, a, i) {
    var l = ta();
    i = i === void 0 ? null : i;
    var s = l.memoizedState.inst;
    Ct !== null && i !== null && Oc(i, Ct.memoizedState.deps) ? (l.memoizedState = bl(t, s, a, i)) : ((Ke.flags |= e), (l.memoizedState = bl(1 | t, s, a, i)));
  }
  function Zd(e, t) {
    sr(8390656, 8, e, t);
  }
  function Vc(e, t) {
    rr(2048, 8, e, t);
  }
  function yg(e) {
    Ke.flags |= 4;
    var t = Ke.updateQueue;
    if (t === null) ((t = nr()), (Ke.updateQueue = t), (t.events = [e]));
    else {
      var a = t.events;
      a === null ? (t.events = [e]) : a.push(e);
    }
  }
  function Kd(e) {
    var t = ta().memoizedState;
    return (
      yg({ ref: t, nextImpl: e }),
      function () {
        if ((mt & 2) !== 0) throw Error(c(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Jd(e, t) {
    return rr(4, 2, e, t);
  }
  function Wd(e, t) {
    return rr(4, 4, e, t);
  }
  function Fd(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Pd(e, t, a) {
    ((a = a != null ? a.concat([e]) : null), rr(4, 4, Fd.bind(null, t, e), a));
  }
  function $c() {}
  function ef(e, t) {
    var a = ta();
    t = t === void 0 ? null : t;
    var i = a.memoizedState;
    return t !== null && Oc(t, i[1]) ? i[0] : ((a.memoizedState = [e, t]), e);
  }
  function tf(e, t) {
    var a = ta();
    t = t === void 0 ? null : t;
    var i = a.memoizedState;
    if (t !== null && Oc(t, i[1])) return i[0];
    if (((i = e()), Vi)) {
      xe(!0);
      try {
        e();
      } finally {
        xe(!1);
      }
    }
    return ((a.memoizedState = [i, t]), i);
  }
  function Qc(e, t, a) {
    return a === void 0 || ((Hn & 1073741824) !== 0 && (at & 261930) === 0) ? (e.memoizedState = t) : ((e.memoizedState = a), (e = nh()), (Ke.lanes |= e), (ui |= e), a);
  }
  function af(e, t, a, i) {
    return Va(a, t) ? a : gl.current !== null ? ((e = Qc(e, a, i)), Va(e, t) || (la = !0), e) : (Hn & 42) === 0 || ((Hn & 1073741824) !== 0 && (at & 261930) === 0) ? ((la = !0), (e.memoizedState = a)) : ((e = nh()), (Ke.lanes |= e), (ui |= e), t);
  }
  function nf(e, t, a, i, l) {
    var s = $.p;
    $.p = s !== 0 && 8 > s ? s : 8;
    var f = R.T,
      b = {};
    ((R.T = b), Kc(e, !1, t, a));
    try {
      var E = l(),
        q = R.S;
      if ((q !== null && q(b, E), E !== null && typeof E == "object" && typeof E.then == "function")) {
        var ae = pg(E, i);
        ls(e, t, ae, Ja(e));
      } else ls(e, t, i, Ja(e));
    } catch (re) {
      ls(e, t, { then: function () {}, status: "rejected", reason: re }, Ja());
    } finally {
      (($.p = s), f !== null && b.types !== null && (f.types = b.types), (R.T = f));
    }
  }
  function jg() {}
  function Ic(e, t, a, i) {
    if (e.tag !== 5) throw Error(c(476));
    var l = lf(e).queue;
    nf(
      e,
      l,
      t,
      le,
      a === null
        ? jg
        : function () {
            return (sf(e), a(i));
          },
    );
  }
  function lf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = { memoizedState: le, baseState: le, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ln, lastRenderedState: le }, next: null };
    var a = {};
    return (
      (t.next = { memoizedState: a, baseState: a, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ln, lastRenderedState: a }, next: null }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function sf(e) {
    var t = lf(e);
    (t.next === null && (t = e.alternate.memoizedState), ls(e, t.next.queue, {}, Ja()));
  }
  function Zc() {
    return ja(Ss);
  }
  function rf() {
    return ta().memoizedState;
  }
  function cf() {
    return ta().memoizedState;
  }
  function Sg(e) {
    for (var t = e.return; t !== null;) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Ja();
          e = ii(a);
          var i = li(t, e, a);
          (i !== null && (Ba(i, t, a), es(i, t, a)), (t = { cache: Nc() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Ng(e, t, a) {
    var i = Ja();
    ((a = { lane: i, revertLane: 0, gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null }), cr(e) ? uf(t, a) : ((a = fc(e, t, a, i)), a !== null && (Ba(a, e, i), df(a, t, i))));
  }
  function of(e, t, a) {
    var i = Ja();
    ls(e, t, a, i);
  }
  function ls(e, t, a, i) {
    var l = { lane: i, revertLane: 0, gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null };
    if (cr(e)) uf(t, l);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && ((s = t.lastRenderedReducer), s !== null))
        try {
          var f = t.lastRenderedState,
            b = s(f, a);
          if (((l.hasEagerState = !0), (l.eagerState = b), Va(b, f))) return (Xs(e, t, l, 0), Et === null && qs(), !1);
        } catch {
        } finally {
        }
      if (((a = fc(e, t, l, i)), a !== null)) return (Ba(a, e, i), df(a, t, i), !0);
    }
    return !1;
  }
  function Kc(e, t, a, i) {
    if (((i = { lane: 2, revertLane: Mo(), gesture: null, action: i, hasEagerState: !1, eagerState: null, next: null }), cr(e))) {
      if (t) throw Error(c(479));
    } else ((t = fc(e, a, i, 2)), t !== null && Ba(t, e, 2));
  }
  function cr(e) {
    var t = e.alternate;
    return e === Ke || (t !== null && t === Ke);
  }
  function uf(e, t) {
    xl = tr = !0;
    var a = e.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)), (e.pending = t));
  }
  function df(e, t, a) {
    if ((a & 4194048) !== 0) {
      var i = t.lanes;
      ((i &= e.pendingLanes), (a |= i), (t.lanes = a), oe(e, a));
    }
  }
  var ss = {
    readContext: ja,
    use: ir,
    useCallback: Ft,
    useContext: Ft,
    useEffect: Ft,
    useImperativeHandle: Ft,
    useLayoutEffect: Ft,
    useInsertionEffect: Ft,
    useMemo: Ft,
    useReducer: Ft,
    useRef: Ft,
    useState: Ft,
    useDebugValue: Ft,
    useDeferredValue: Ft,
    useTransition: Ft,
    useSyncExternalStore: Ft,
    useId: Ft,
    useHostTransitionStatus: Ft,
    useFormState: Ft,
    useActionState: Ft,
    useOptimistic: Ft,
    useMemoCache: Ft,
    useCacheRefresh: Ft,
  };
  ss.useEffectEvent = Ft;
  var ff = {
      readContext: ja,
      use: ir,
      useCallback: function (e, t) {
        return ((za().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: ja,
      useEffect: Zd,
      useImperativeHandle: function (e, t, a) {
        ((a = a != null ? a.concat([e]) : null), sr(4194308, 4, Fd.bind(null, t, e), a));
      },
      useLayoutEffect: function (e, t) {
        return sr(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        sr(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var a = za();
        t = t === void 0 ? null : t;
        var i = e();
        if (Vi) {
          xe(!0);
          try {
            e();
          } finally {
            xe(!1);
          }
        }
        return ((a.memoizedState = [i, t]), i);
      },
      useReducer: function (e, t, a) {
        var i = za();
        if (a !== void 0) {
          var l = a(t);
          if (Vi) {
            xe(!0);
            try {
              a(t);
            } finally {
              xe(!1);
            }
          }
        } else l = t;
        return ((i.memoizedState = i.baseState = l), (e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: l }), (i.queue = e), (e = e.dispatch = Ng.bind(null, Ke, e)), [i.memoizedState, e]);
      },
      useRef: function (e) {
        var t = za();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = Xc(e);
        var t = e.queue,
          a = of.bind(null, Ke, t);
        return ((t.dispatch = a), [e.memoizedState, a]);
      },
      useDebugValue: $c,
      useDeferredValue: function (e, t) {
        var a = za();
        return Qc(a, e, t);
      },
      useTransition: function () {
        var e = Xc(!1);
        return ((e = nf.bind(null, Ke, e.queue, !0, !1)), (za().memoizedState = e), [!1, e]);
      },
      useSyncExternalStore: function (e, t, a) {
        var i = Ke,
          l = za();
        if (lt) {
          if (a === void 0) throw Error(c(407));
          a = a();
        } else {
          if (((a = t()), Et === null)) throw Error(c(349));
          (at & 127) !== 0 || Ad(i, t, a);
        }
        l.memoizedState = a;
        var s = { value: a, getSnapshot: t };
        return ((l.queue = s), Zd(Od.bind(null, i, s, e), [e]), (i.flags |= 2048), bl(9, { destroy: void 0 }, Rd.bind(null, i, s, a, t), null), a);
      },
      useId: function () {
        var e = za(),
          t = Et.identifierPrefix;
        if (lt) {
          var a = Tn,
            i = Cn;
          ((a = (i & ~(1 << (32 - ve(i) - 1))).toString(32) + a), (t = "_" + t + "R_" + a), (a = ar++), 0 < a && (t += "H" + a.toString(32)), (t += "_"));
        } else ((a = gg++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Zc,
      useFormState: Gd,
      useActionState: Gd,
      useOptimistic: function (e) {
        var t = za();
        t.memoizedState = t.baseState = e;
        var a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
        return ((t.queue = a), (t = Kc.bind(null, Ke, !0, a)), (a.dispatch = t), [e, t]);
      },
      useMemoCache: Lc,
      useCacheRefresh: function () {
        return (za().memoizedState = Sg.bind(null, Ke));
      },
      useEffectEvent: function (e) {
        var t = za(),
          a = { impl: e };
        return (
          (t.memoizedState = a),
          function () {
            if ((mt & 2) !== 0) throw Error(c(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Jc = {
      readContext: ja,
      use: ir,
      useCallback: ef,
      useContext: ja,
      useEffect: Vc,
      useImperativeHandle: Pd,
      useInsertionEffect: Jd,
      useLayoutEffect: Wd,
      useMemo: tf,
      useReducer: lr,
      useRef: Id,
      useState: function () {
        return lr(Ln);
      },
      useDebugValue: $c,
      useDeferredValue: function (e, t) {
        var a = ta();
        return af(a, Ct.memoizedState, e, t);
      },
      useTransition: function () {
        var e = lr(Ln)[0],
          t = ta().memoizedState;
        return [typeof e == "boolean" ? e : is(e), t];
      },
      useSyncExternalStore: Dd,
      useId: rf,
      useHostTransitionStatus: Zc,
      useFormState: Vd,
      useActionState: Vd,
      useOptimistic: function (e, t) {
        var a = ta();
        return Bd(a, Ct, e, t);
      },
      useMemoCache: Lc,
      useCacheRefresh: cf,
    };
  Jc.useEffectEvent = Kd;
  var hf = {
    readContext: ja,
    use: ir,
    useCallback: ef,
    useContext: ja,
    useEffect: Vc,
    useImperativeHandle: Pd,
    useInsertionEffect: Jd,
    useLayoutEffect: Wd,
    useMemo: tf,
    useReducer: qc,
    useRef: Id,
    useState: function () {
      return qc(Ln);
    },
    useDebugValue: $c,
    useDeferredValue: function (e, t) {
      var a = ta();
      return Ct === null ? Qc(a, e, t) : af(a, Ct.memoizedState, e, t);
    },
    useTransition: function () {
      var e = qc(Ln)[0],
        t = ta().memoizedState;
      return [typeof e == "boolean" ? e : is(e), t];
    },
    useSyncExternalStore: Dd,
    useId: rf,
    useHostTransitionStatus: Zc,
    useFormState: Qd,
    useActionState: Qd,
    useOptimistic: function (e, t) {
      var a = ta();
      return Ct !== null ? Bd(a, Ct, e, t) : ((a.baseState = e), [e, a.queue.dispatch]);
    },
    useMemoCache: Lc,
    useCacheRefresh: cf,
  };
  hf.useEffectEvent = Kd;
  function Wc(e, t, a, i) {
    ((t = e.memoizedState), (a = a(i, t)), (a = a == null ? t : S({}, t, a)), (e.memoizedState = a), e.lanes === 0 && (e.updateQueue.baseState = a));
  }
  var Fc = {
    enqueueSetState: function (e, t, a) {
      e = e._reactInternals;
      var i = Ja(),
        l = ii(i);
      ((l.payload = t), a != null && (l.callback = a), (t = li(e, l, i)), t !== null && (Ba(t, e, i), es(t, e, i)));
    },
    enqueueReplaceState: function (e, t, a) {
      e = e._reactInternals;
      var i = Ja(),
        l = ii(i);
      ((l.tag = 1), (l.payload = t), a != null && (l.callback = a), (t = li(e, l, i)), t !== null && (Ba(t, e, i), es(t, e, i)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var a = Ja(),
        i = ii(a);
      ((i.tag = 2), t != null && (i.callback = t), (t = li(e, i, a)), t !== null && (Ba(t, e, a), es(t, e, a)));
    },
  };
  function mf(e, t, a, i, l, s, f) {
    return ((e = e.stateNode), typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, s, f) : t.prototype && t.prototype.isPureReactComponent ? !Ql(a, i) || !Ql(l, s) : !0);
  }
  function pf(e, t, a, i) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i),
      typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i),
      t.state !== e && Fc.enqueueReplaceState(t, t.state, null));
  }
  function $i(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var i in t) i !== "ref" && (a[i] = t[i]);
    }
    if ((e = e.defaultProps)) {
      a === t && (a = S({}, a));
      for (var l in e) a[l] === void 0 && (a[l] = e[l]);
    }
    return a;
  }
  function gf(e) {
    Ys(e);
  }
  function xf(e) {
    console.error(e);
  }
  function vf(e) {
    Ys(e);
  }
  function or(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function bf(e, t, a) {
    try {
      var i = e.onCaughtError;
      i(a.value, { componentStack: a.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Pc(e, t, a) {
    return (
      (a = ii(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        or(e, t);
      }),
      a
    );
  }
  function yf(e) {
    return ((e = ii(e)), (e.tag = 3), e);
  }
  function jf(e, t, a, i) {
    var l = a.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var s = i.value;
      ((e.payload = function () {
        return l(s);
      }),
        (e.callback = function () {
          bf(t, a, i);
        }));
    }
    var f = a.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (e.callback = function () {
        (bf(t, a, i), typeof l != "function" && (di === null ? (di = new Set([this])) : di.add(this)));
        var b = i.stack;
        this.componentDidCatch(i.value, { componentStack: b !== null ? b : "" });
      });
  }
  function wg(e, t, a, i, l) {
    if (((a.flags |= 32768), i !== null && typeof i == "object" && typeof i.then == "function")) {
      if (((t = a.alternate), t !== null && dl(t, a, l, !0), (a = Qa.current), a !== null)) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              ln === null ? jr() : a.alternate === null && Pt === 0 && (Pt = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = l),
              i === Js ? (a.flags |= 16384) : ((t = a.updateQueue), t === null ? (a.updateQueue = new Set([i])) : t.add(i), Co(e, i, l)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              i === Js
                ? (a.flags |= 16384)
                : ((t = a.updateQueue), t === null ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([i]) }), (a.updateQueue = t)) : ((a = t.retryQueue), a === null ? (t.retryQueue = new Set([i])) : a.add(i)), Co(e, i, l)),
              !1
            );
        }
        throw Error(c(435, a.tag));
      }
      return (Co(e, i, l), jr(), !1);
    }
    if (lt)
      return (
        (t = Qa.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256), (t.flags |= 65536), (t.lanes = l), i !== vc && ((e = Error(c(422), { cause: i })), Kl(en(e, a))))
          : (i !== vc && ((t = Error(c(423), { cause: i })), Kl(en(t, a))), (e = e.current.alternate), (e.flags |= 65536), (l &= -l), (e.lanes |= l), (i = en(i, a)), (l = Pc(e.stateNode, i, l)), zc(e, l), Pt !== 4 && (Pt = 2)),
        !1
      );
    var s = Error(c(520), { cause: i });
    if (((s = en(s, a)), ms === null ? (ms = [s]) : ms.push(s), Pt !== 4 && (Pt = 2), t === null)) return !0;
    ((i = en(i, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return ((a.flags |= 65536), (e = l & -l), (a.lanes |= e), (e = Pc(a.stateNode, i, e)), zc(a, e), !1);
        case 1:
          if (((t = a.type), (s = a.stateNode), (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || (s !== null && typeof s.componentDidCatch == "function" && (di === null || !di.has(s))))))
            return ((a.flags |= 65536), (l &= -l), (a.lanes |= l), (l = yf(l)), jf(l, e, a, i), zc(a, l), !1);
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var eo = Error(c(461)),
    la = !1;
  function Sa(e, t, a, i) {
    t.child = e === null ? wd(t, null, a, i) : Gi(t, e.child, a, i);
  }
  function Sf(e, t, a, i, l) {
    a = a.render;
    var s = t.ref;
    if ("ref" in i) {
      var f = {};
      for (var b in i) b !== "ref" && (f[b] = i[b]);
    } else f = i;
    return (Li(t), (i = _c(e, t, a, f, s, l)), (b = Uc()), e !== null && !la ? (Bc(e, t, l), Yn(e, t, l)) : (lt && b && gc(t), (t.flags |= 1), Sa(e, t, i, l), t.child));
  }
  function Nf(e, t, a, i, l) {
    if (e === null) {
      var s = a.type;
      return typeof s == "function" && !hc(s) && s.defaultProps === void 0 && a.compare === null ? ((t.tag = 15), (t.type = s), wf(e, t, s, i, l)) : ((e = Vs(a.type, null, i, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((s = e.child), !co(e, l))) {
      var f = s.memoizedProps;
      if (((a = a.compare), (a = a !== null ? a : Ql), a(f, i) && e.ref === t.ref)) return Yn(e, t, l);
    }
    return ((t.flags |= 1), (e = On(s, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function wf(e, t, a, i, l) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (Ql(s, i) && e.ref === t.ref)
        if (((la = !1), (t.pendingProps = i = s), co(e, l))) (e.flags & 131072) !== 0 && (la = !0);
        else return ((t.lanes = e.lanes), Yn(e, t, l));
    }
    return to(e, t, a, i, l);
  }
  function Cf(e, t, a, i) {
    var l = i.children,
      s = e !== null ? e.memoizedState : null;
    if ((e === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), i.mode === "hidden")) {
      if ((t.flags & 128) !== 0) {
        if (((s = s !== null ? s.baseLanes | a : a), e !== null)) {
          for (i = t.child = e.child, l = 0; i !== null;) ((l = l | i.lanes | i.childLanes), (i = i.sibling));
          i = l & ~s;
        } else ((i = 0), (t.child = null));
        return Tf(e, t, s, a, i);
      }
      if ((a & 536870912) !== 0) ((t.memoizedState = { baseLanes: 0, cachePool: null }), e !== null && Zs(t, s !== null ? s.cachePool : null), s !== null ? kd(t, s) : Dc(), Md(t));
      else return ((i = t.lanes = 536870912), Tf(e, t, s !== null ? s.baseLanes | a : a, a, i));
    } else s !== null ? (Zs(t, s.cachePool), kd(t, s), ri(), (t.memoizedState = null)) : (e !== null && Zs(t, null), Dc(), ri());
    return (Sa(e, t, l, a), t.child);
  }
  function rs(e, t) {
    return ((e !== null && e.tag === 22) || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling);
  }
  function Tf(e, t, a, i, l) {
    var s = Cc();
    return ((s = s === null ? null : { parent: na._currentValue, pool: s }), (t.memoizedState = { baseLanes: a, cachePool: s }), e !== null && Zs(t, null), Dc(), Md(t), e !== null && dl(e, t, i, !0), (t.childLanes = l), null);
  }
  function ur(e, t) {
    return ((t = fr({ mode: t.mode, children: t.children }, e.mode)), (t.ref = e.ref), (e.child = t), (t.return = e), t);
  }
  function kf(e, t, a) {
    return (Gi(t, e.child, null, a), (e = ur(t, t.pendingProps)), (e.flags |= 2), Ia(t), (t.memoizedState = null), e);
  }
  function Cg(e, t, a) {
    var i = t.pendingProps,
      l = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (lt) {
        if (i.mode === "hidden") return ((e = ur(t, i)), (t.lanes = 536870912), rs(null, e));
        if (
          (Rc(t),
          (e = _t)
            ? ((e = Lh(e, nn)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null && ((t.memoizedState = { dehydrated: e, treeContext: Pn !== null ? { id: Cn, overflow: Tn } : null, retryLane: 536870912, hydrationErrors: null }), (a = od(e)), (a.return = t), (t.child = a), (ya = t), (_t = null)))
            : (e = null),
          e === null)
        )
          throw ti(t);
        return ((t.lanes = 536870912), null);
      }
      return ur(t, i);
    }
    var s = e.memoizedState;
    if (s !== null) {
      var f = s.dehydrated;
      if ((Rc(t), l))
        if (t.flags & 256) ((t.flags &= -257), (t = kf(e, t, a)));
        else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(c(558));
      else if ((la || dl(e, t, a, !1), (l = (a & e.childLanes) !== 0), la || l)) {
        if (((i = Et), i !== null && ((f = Ne(i, a)), f !== 0 && f !== s.retryLane))) throw ((s.retryLane = f), _i(e, f), Ba(i, e, f), eo);
        (jr(), (t = kf(e, t, a)));
      } else ((e = s.treeContext), (_t = sn(f.nextSibling)), (ya = t), (lt = !0), (ei = null), (nn = !1), e !== null && fd(t, e), (t = ur(t, i)), (t.flags |= 4096));
      return t;
    }
    return ((e = On(e.child, { mode: i.mode, children: i.children })), (e.ref = t.ref), (t.child = e), (e.return = t), e);
  }
  function dr(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(c(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function to(e, t, a, i, l) {
    return (Li(t), (a = _c(e, t, a, i, void 0, l)), (i = Uc()), e !== null && !la ? (Bc(e, t, l), Yn(e, t, l)) : (lt && i && gc(t), (t.flags |= 1), Sa(e, t, a, l), t.child));
  }
  function Mf(e, t, a, i, l, s) {
    return (Li(t), (t.updateQueue = null), (a = Ed(t, i, a, l)), zd(e), (i = Uc()), e !== null && !la ? (Bc(e, t, s), Yn(e, t, s)) : (lt && i && gc(t), (t.flags |= 1), Sa(e, t, a, s), t.child));
  }
  function zf(e, t, a, i, l) {
    if ((Li(t), t.stateNode === null)) {
      var s = rl,
        f = a.contextType;
      (typeof f == "object" && f !== null && (s = ja(f)),
        (s = new a(i, s)),
        (t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null),
        (s.updater = Fc),
        (t.stateNode = s),
        (s._reactInternals = t),
        (s = t.stateNode),
        (s.props = i),
        (s.state = t.memoizedState),
        (s.refs = {}),
        kc(t),
        (f = a.contextType),
        (s.context = typeof f == "object" && f !== null ? ja(f) : rl),
        (s.state = t.memoizedState),
        (f = a.getDerivedStateFromProps),
        typeof f == "function" && (Wc(t, a, f, i), (s.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function" ||
          (typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function") ||
          ((f = s.state),
          typeof s.componentWillMount == "function" && s.componentWillMount(),
          typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
          f !== s.state && Fc.enqueueReplaceState(s, s.state, null),
          as(t, i, s, l),
          ts(),
          (s.state = t.memoizedState)),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        (i = !0));
    } else if (e === null) {
      s = t.stateNode;
      var b = t.memoizedProps,
        E = $i(a, b);
      s.props = E;
      var q = s.context,
        ae = a.contextType;
      ((f = rl), typeof ae == "object" && ae !== null && (f = ja(ae)));
      var re = a.getDerivedStateFromProps;
      ((ae = typeof re == "function" || typeof s.getSnapshotBeforeUpdate == "function"),
        (b = t.pendingProps !== b),
        ae || (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") || ((b || q !== f) && pf(t, s, i, f)),
        (ni = !1));
      var G = t.memoizedState;
      ((s.state = G),
        as(t, i, s, l),
        ts(),
        (q = t.memoizedState),
        b || G !== q || ni
          ? (typeof re == "function" && (Wc(t, a, re, i), (q = t.memoizedState)),
            (E = ni || mf(t, a, E, i, G, q, f))
              ? (ae ||
                  (typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function") ||
                  (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = i), (t.memoizedState = q)),
            (s.props = i),
            (s.state = q),
            (s.context = f),
            (i = E))
          : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (i = !1)));
    } else {
      ((s = t.stateNode),
        Mc(e, t),
        (f = t.memoizedProps),
        (ae = $i(a, f)),
        (s.props = ae),
        (re = t.pendingProps),
        (G = s.context),
        (q = a.contextType),
        (E = rl),
        typeof q == "object" && q !== null && (E = ja(q)),
        (b = a.getDerivedStateFromProps),
        (q = typeof b == "function" || typeof s.getSnapshotBeforeUpdate == "function") || (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") || ((f !== re || G !== E) && pf(t, s, i, E)),
        (ni = !1),
        (G = t.memoizedState),
        (s.state = G),
        as(t, i, s, l),
        ts());
      var W = t.memoizedState;
      f !== re || G !== W || ni || (e !== null && e.dependencies !== null && Qs(e.dependencies))
        ? (typeof b == "function" && (Wc(t, a, b, i), (W = t.memoizedState)),
          (ae = ni || mf(t, a, ae, i, G, W, E) || (e !== null && e.dependencies !== null && Qs(e.dependencies)))
            ? (q ||
                (typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function") ||
                (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, W, E), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, W, E)),
              typeof s.componentDidUpdate == "function" && (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof s.componentDidUpdate != "function" || (f === e.memoizedProps && G === e.memoizedState) || (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" || (f === e.memoizedProps && G === e.memoizedState) || (t.flags |= 1024),
              (t.memoizedProps = i),
              (t.memoizedState = W)),
          (s.props = i),
          (s.state = W),
          (s.context = E),
          (i = ae))
        : (typeof s.componentDidUpdate != "function" || (f === e.memoizedProps && G === e.memoizedState) || (t.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != "function" || (f === e.memoizedProps && G === e.memoizedState) || (t.flags |= 1024),
          (i = !1));
    }
    return (
      (s = i),
      dr(e, t),
      (i = (t.flags & 128) !== 0),
      s || i
        ? ((s = t.stateNode),
          (a = i && typeof a.getDerivedStateFromError != "function" ? null : s.render()),
          (t.flags |= 1),
          e !== null && i ? ((t.child = Gi(t, e.child, null, l)), (t.child = Gi(t, null, a, l))) : Sa(e, t, a, l),
          (t.memoizedState = s.state),
          (e = t.child))
        : (e = Yn(e, t, l)),
      e
    );
  }
  function Ef(e, t, a, i) {
    return (Bi(), (t.flags |= 256), Sa(e, t, a, i), t.child);
  }
  var ao = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function no(e) {
    return { baseLanes: e, cachePool: vd() };
  }
  function io(e, t, a) {
    return ((e = e !== null ? e.childLanes & ~a : 0), t && (e |= Ka), e);
  }
  function Df(e, t, a) {
    var i = t.pendingProps,
      l = !1,
      s = (t.flags & 128) !== 0,
      f;
    if (((f = s) || (f = e !== null && e.memoizedState === null ? !1 : (ea.current & 2) !== 0), f && ((l = !0), (t.flags &= -129)), (f = (t.flags & 32) !== 0), (t.flags &= -33), e === null)) {
      if (lt) {
        if (
          (l ? si(t) : ri(),
          (e = _t)
            ? ((e = Lh(e, nn)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null && ((t.memoizedState = { dehydrated: e, treeContext: Pn !== null ? { id: Cn, overflow: Tn } : null, retryLane: 536870912, hydrationErrors: null }), (a = od(e)), (a.return = t), (t.child = a), (ya = t), (_t = null)))
            : (e = null),
          e === null)
        )
          throw ti(t);
        return (qo(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var b = i.children;
      return (
        (i = i.fallback),
        l
          ? (ri(),
            (l = t.mode),
            (b = fr({ mode: "hidden", children: b }, l)),
            (i = Ui(i, l, a, null)),
            (b.return = t),
            (i.return = t),
            (b.sibling = i),
            (t.child = b),
            (i = t.child),
            (i.memoizedState = no(a)),
            (i.childLanes = io(e, f, a)),
            (t.memoizedState = ao),
            rs(null, i))
          : (si(t), lo(t, b))
      );
    }
    var E = e.memoizedState;
    if (E !== null && ((b = E.dehydrated), b !== null)) {
      if (s)
        t.flags & 256
          ? (si(t), (t.flags &= -257), (t = so(e, t, a)))
          : t.memoizedState !== null
            ? (ri(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (ri(),
              (b = i.fallback),
              (l = t.mode),
              (i = fr({ mode: "visible", children: i.children }, l)),
              (b = Ui(b, l, a, null)),
              (b.flags |= 2),
              (i.return = t),
              (b.return = t),
              (i.sibling = b),
              (t.child = i),
              Gi(t, e.child, null, a),
              (i = t.child),
              (i.memoizedState = no(a)),
              (i.childLanes = io(e, f, a)),
              (t.memoizedState = ao),
              (t = rs(null, i)));
      else if ((si(t), qo(b))) {
        if (((f = b.nextSibling && b.nextSibling.dataset), f)) var q = f.dgst;
        ((f = q), (i = Error(c(419))), (i.stack = ""), (i.digest = f), Kl({ value: i, source: null, stack: null }), (t = so(e, t, a)));
      } else if ((la || dl(e, t, a, !1), (f = (a & e.childLanes) !== 0), la || f)) {
        if (((f = Et), f !== null && ((i = Ne(f, a)), i !== 0 && i !== E.retryLane))) throw ((E.retryLane = i), _i(e, i), Ba(f, e, i), eo);
        (Yo(b) || jr(), (t = so(e, t, a)));
      } else Yo(b) ? ((t.flags |= 192), (t.child = e.child), (t = null)) : ((e = E.treeContext), (_t = sn(b.nextSibling)), (ya = t), (lt = !0), (ei = null), (nn = !1), e !== null && fd(t, e), (t = lo(t, i.children)), (t.flags |= 4096));
      return t;
    }
    return l
      ? (ri(),
        (b = i.fallback),
        (l = t.mode),
        (E = e.child),
        (q = E.sibling),
        (i = On(E, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = E.subtreeFlags & 65011712),
        q !== null ? (b = On(q, b)) : ((b = Ui(b, l, a, null)), (b.flags |= 2)),
        (b.return = t),
        (i.return = t),
        (i.sibling = b),
        (t.child = i),
        rs(null, i),
        (i = t.child),
        (b = e.child.memoizedState),
        b === null ? (b = no(a)) : ((l = b.cachePool), l !== null ? ((E = na._currentValue), (l = l.parent !== E ? { parent: E, pool: E } : l)) : (l = vd()), (b = { baseLanes: b.baseLanes | a, cachePool: l })),
        (i.memoizedState = b),
        (i.childLanes = io(e, f, a)),
        (t.memoizedState = ao),
        rs(e.child, i))
      : (si(t),
        (a = e.child),
        (e = a.sibling),
        (a = On(a, { mode: "visible", children: i.children })),
        (a.return = t),
        (a.sibling = null),
        e !== null && ((f = t.deletions), f === null ? ((t.deletions = [e]), (t.flags |= 16)) : f.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function lo(e, t) {
    return ((t = fr({ mode: "visible", children: t }, e.mode)), (t.return = e), (e.child = t));
  }
  function fr(e, t) {
    return ((e = $a(22, e, null, t)), (e.lanes = 0), e);
  }
  function so(e, t, a) {
    return (Gi(t, e.child, null, a), (e = lo(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e);
  }
  function Af(e, t, a) {
    e.lanes |= t;
    var i = e.alternate;
    (i !== null && (i.lanes |= t), jc(e.return, t, a));
  }
  function ro(e, t, a, i, l, s) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: a, tailMode: l, treeForkCount: s })
      : ((f.isBackwards = t), (f.rendering = null), (f.renderingStartTime = 0), (f.last = i), (f.tail = a), (f.tailMode = l), (f.treeForkCount = s));
  }
  function Rf(e, t, a) {
    var i = t.pendingProps,
      l = i.revealOrder,
      s = i.tail;
    i = i.children;
    var f = ea.current,
      b = (f & 2) !== 0;
    if ((b ? ((f = (f & 1) | 2), (t.flags |= 128)) : (f &= 1), N(ea, f), Sa(e, t, i, a), (i = lt ? Zl : 0), !b && e !== null && (e.flags & 128) !== 0))
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && Af(e, a, t);
        else if (e.tag === 19) Af(e, a, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (l) {
      case "forwards":
        for (a = t.child, l = null; a !== null;) ((e = a.alternate), e !== null && er(e) === null && (l = a), (a = a.sibling));
        ((a = l), a === null ? ((l = t.child), (t.child = null)) : ((l = a.sibling), (a.sibling = null)), ro(t, !1, l, a, s, i));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, l = t.child, t.child = null; l !== null;) {
          if (((e = l.alternate), e !== null && er(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = a), (a = l), (l = e));
        }
        ro(t, !0, a, null, s, i);
        break;
      case "together":
        ro(t, !1, null, null, void 0, i);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Yn(e, t, a) {
    if ((e !== null && (t.dependencies = e.dependencies), (ui |= t.lanes), (a & t.childLanes) === 0))
      if (e !== null) {
        if ((dl(e, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (e = t.child, a = On(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null;) ((e = e.sibling), (a = a.sibling = On(e, e.pendingProps)), (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function co(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Qs(e)));
  }
  function Tg(e, t, a) {
    switch (t.tag) {
      case 3:
        (ze(t, t.stateNode.containerInfo), ai(t, na, e.memoizedState.cache), Bi());
        break;
      case 27:
      case 5:
        Pe(t);
        break;
      case 4:
        ze(t, t.stateNode.containerInfo);
        break;
      case 10:
        ai(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Rc(t), null);
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null) return i.dehydrated !== null ? (si(t), (t.flags |= 128), null) : (a & t.child.childLanes) !== 0 ? Df(e, t, a) : (si(t), (e = Yn(e, t, a)), e !== null ? e.sibling : null);
        si(t);
        break;
      case 19:
        var l = (e.flags & 128) !== 0;
        if (((i = (a & t.childLanes) !== 0), i || (dl(e, t, a, !1), (i = (a & t.childLanes) !== 0)), l)) {
          if (i) return Rf(e, t, a);
          t.flags |= 128;
        }
        if (((l = t.memoizedState), l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)), N(ea, ea.current), i)) break;
        return null;
      case 22:
        return ((t.lanes = 0), Cf(e, t, a, t.pendingProps));
      case 24:
        ai(t, na, e.memoizedState.cache);
    }
    return Yn(e, t, a);
  }
  function Of(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) la = !0;
      else {
        if (!co(e, a) && (t.flags & 128) === 0) return ((la = !1), Tg(e, t, a));
        la = (e.flags & 131072) !== 0;
      }
    else ((la = !1), lt && (t.flags & 1048576) !== 0 && dd(t, Zl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var i = t.pendingProps;
          if (((e = qi(t.elementType)), (t.type = e), typeof e == "function")) hc(e) ? ((i = $i(e, i)), (t.tag = 1), (t = zf(null, t, e, i, a))) : ((t.tag = 0), (t = to(null, t, e, i, a)));
          else {
            if (e != null) {
              var l = e.$$typeof;
              if (l === de) {
                ((t.tag = 11), (t = Sf(null, t, e, i, a)));
                break e;
              } else if (l === K) {
                ((t.tag = 14), (t = Nf(null, t, e, i, a)));
                break e;
              }
            }
            throw ((t = Oe(e) || e), Error(c(306, t, "")));
          }
        }
        return t;
      case 0:
        return to(e, t, t.type, t.pendingProps, a);
      case 1:
        return ((i = t.type), (l = $i(i, t.pendingProps)), zf(e, t, i, l, a));
      case 3:
        e: {
          if ((ze(t, t.stateNode.containerInfo), e === null)) throw Error(c(387));
          i = t.pendingProps;
          var s = t.memoizedState;
          ((l = s.element), Mc(e, t), as(t, i, null, a));
          var f = t.memoizedState;
          if (((i = f.cache), ai(t, na, i), i !== s.cache && Sc(t, [na], a, !0), ts(), (i = f.element), s.isDehydrated))
            if (((s = { element: i, isDehydrated: !1, cache: f.cache }), (t.updateQueue.baseState = s), (t.memoizedState = s), t.flags & 256)) {
              t = Ef(e, t, i, a);
              break e;
            } else if (i !== l) {
              ((l = en(Error(c(424)), t)), Kl(l), (t = Ef(e, t, i, a)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (_t = sn(e.firstChild), ya = t, lt = !0, ei = null, nn = !0, a = wd(t, null, i, a), t.child = a; a;) ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((Bi(), i === l)) {
              t = Yn(e, t, a);
              break e;
            }
            Sa(e, t, i, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          dr(e, t),
          e === null
            ? (a = $h(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : lt || ((a = t.type), (e = t.pendingProps), (i = Mr(he.current).createElement(a)), (i[ht] = t), (i[Nt] = e), Na(i, a, e), Qt(i), (t.stateNode = i))
            : (t.memoizedState = $h(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          Pe(t),
          e === null && lt && ((i = t.stateNode = Xh(t.type, t.pendingProps, he.current)), (ya = t), (nn = !0), (l = _t), pi(t.type) ? ((Xo = l), (_t = sn(i.firstChild))) : (_t = l)),
          Sa(e, t, t.pendingProps.children, a),
          dr(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null && lt && ((l = i = _t) && ((i = ax(i, t.type, t.pendingProps, nn)), i !== null ? ((t.stateNode = i), (ya = t), (_t = sn(i.firstChild)), (nn = !1), (l = !0)) : (l = !1)), l || ti(t)),
          Pe(t),
          (l = t.type),
          (s = t.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (i = s.children),
          Bo(l, s) ? (i = null) : f !== null && Bo(l, f) && (t.flags |= 32),
          t.memoizedState !== null && ((l = _c(e, t, xg, null, null, a)), (Ss._currentValue = l)),
          dr(e, t),
          Sa(e, t, i, a),
          t.child
        );
      case 6:
        return (e === null && lt && ((e = a = _t) && ((a = nx(a, t.pendingProps, nn)), a !== null ? ((t.stateNode = a), (ya = t), (_t = null), (e = !0)) : (e = !1)), e || ti(t)), null);
      case 13:
        return Df(e, t, a);
      case 4:
        return (ze(t, t.stateNode.containerInfo), (i = t.pendingProps), e === null ? (t.child = Gi(t, null, i, a)) : Sa(e, t, i, a), t.child);
      case 11:
        return Sf(e, t, t.type, t.pendingProps, a);
      case 7:
        return (Sa(e, t, t.pendingProps, a), t.child);
      case 8:
        return (Sa(e, t, t.pendingProps.children, a), t.child);
      case 12:
        return (Sa(e, t, t.pendingProps.children, a), t.child);
      case 10:
        return ((i = t.pendingProps), ai(t, t.type, i.value), Sa(e, t, i.children, a), t.child);
      case 9:
        return ((l = t.type._context), (i = t.pendingProps.children), Li(t), (l = ja(l)), (i = i(l)), (t.flags |= 1), Sa(e, t, i, a), t.child);
      case 14:
        return Nf(e, t, t.type, t.pendingProps, a);
      case 15:
        return wf(e, t, t.type, t.pendingProps, a);
      case 19:
        return Rf(e, t, a);
      case 31:
        return Cg(e, t, a);
      case 22:
        return Cf(e, t, a, t.pendingProps);
      case 24:
        return (
          Li(t),
          (i = ja(na)),
          e === null
            ? ((l = Cc()), l === null && ((l = Et), (s = Nc()), (l.pooledCache = s), s.refCount++, s !== null && (l.pooledCacheLanes |= a), (l = s)), (t.memoizedState = { parent: i, cache: l }), kc(t), ai(t, na, l))
            : ((e.lanes & a) !== 0 && (Mc(e, t), as(t, null, null, a), ts()),
              (l = e.memoizedState),
              (s = t.memoizedState),
              l.parent !== i ? ((l = { parent: i, cache: i }), (t.memoizedState = l), t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), ai(t, na, i)) : ((i = s.cache), ai(t, na, i), i !== l.cache && Sc(t, [na], a, !0))),
          Sa(e, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function qn(e) {
    e.flags |= 4;
  }
  function oo(e, t, a, i, l) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (l & 335544128) === l))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (rh()) e.flags |= 8192;
        else throw ((Xi = Js), Tc);
    } else e.flags &= -16777217;
  }
  function _f(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Jh(t)))
      if (rh()) e.flags |= 8192;
      else throw ((Xi = Js), Tc);
  }
  function hr(e, t) {
    (t !== null && (e.flags |= 4), e.flags & 16384 && ((t = e.tag !== 22 ? ha() : 536870912), (e.lanes |= t), (Nl |= t)));
  }
  function cs(e, t) {
    if (!lt)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null;) (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var i = null; a !== null;) (a.alternate !== null && (i = a), (a = a.sibling));
          i === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (i.sibling = null);
      }
  }
  function Ut(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      i = 0;
    if (t) for (var l = e.child; l !== null;) ((a |= l.lanes | l.childLanes), (i |= l.subtreeFlags & 65011712), (i |= l.flags & 65011712), (l.return = e), (l = l.sibling));
    else for (l = e.child; l !== null;) ((a |= l.lanes | l.childLanes), (i |= l.subtreeFlags), (i |= l.flags), (l.return = e), (l = l.sibling));
    return ((e.subtreeFlags |= i), (e.childLanes = a), t);
  }
  function kg(e, t, a) {
    var i = t.pendingProps;
    switch ((xc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ut(t), null);
      case 1:
        return (Ut(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (i = null),
          e !== null && (i = e.memoizedState.cache),
          t.memoizedState.cache !== i && (t.flags |= 2048),
          Bn(na),
          Ee(),
          a.pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) && (ul(t) ? qn(t) : e === null || (e.memoizedState.isDehydrated && (t.flags & 256) === 0) || ((t.flags |= 1024), bc())),
          Ut(t),
          null
        );
      case 26:
        var l = t.type,
          s = t.memoizedState;
        return (
          e === null
            ? (qn(t), s !== null ? (Ut(t), _f(t, s)) : (Ut(t), oo(t, l, null, i, a)))
            : s
              ? s !== e.memoizedState
                ? (qn(t), Ut(t), _f(t, s))
                : (Ut(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps), e !== i && qn(t), Ut(t), oo(t, l, e, i, a)),
          null
        );
      case 27:
        if ((Ve(t), (a = he.current), (l = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== i && qn(t);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(c(166));
            return (Ut(t), null);
          }
          ((e = _.current), ul(t) ? hd(t) : ((e = Xh(l, i, a)), (t.stateNode = e), qn(t)));
        }
        return (Ut(t), null);
      case 5:
        if ((Ve(t), (l = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== i && qn(t);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(c(166));
            return (Ut(t), null);
          }
          if (((s = _.current), ul(t))) hd(t);
          else {
            var f = Mr(he.current);
            switch (s) {
              case 1:
                s = f.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                s = f.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    s = f.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    s = f.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                    break;
                  case "script":
                    ((s = f.createElement("div")), (s.innerHTML = "<script><\/script>"), (s = s.removeChild(s.firstChild)));
                    break;
                  case "select":
                    ((s = typeof i.is == "string" ? f.createElement("select", { is: i.is }) : f.createElement("select")), i.multiple ? (s.multiple = !0) : i.size && (s.size = i.size));
                    break;
                  default:
                    s = typeof i.is == "string" ? f.createElement(l, { is: i.is }) : f.createElement(l);
                }
            }
            ((s[ht] = t), (s[Nt] = i));
            e: for (f = t.child; f !== null;) {
              if (f.tag === 5 || f.tag === 6) s.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                ((f.child.return = f), (f = f.child));
                continue;
              }
              if (f === t) break e;
              for (; f.sibling === null;) {
                if (f.return === null || f.return === t) break e;
                f = f.return;
              }
              ((f.sibling.return = f.return), (f = f.sibling));
            }
            t.stateNode = s;
            e: switch ((Na(s, l, i), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
            i && qn(t);
          }
        }
        return (Ut(t), oo(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== i && qn(t);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(c(166));
          if (((e = he.current), ul(t))) {
            if (((e = t.stateNode), (a = t.memoizedProps), (i = null), (l = ya), l !== null))
              switch (l.tag) {
                case 27:
                case 5:
                  i = l.memoizedProps;
              }
            ((e[ht] = t), (e = !!(e.nodeValue === a || (i !== null && i.suppressHydrationWarning === !0) || Dh(e.nodeValue, a))), e || ti(t, !0));
          } else ((e = Mr(e).createTextNode(i)), (e[ht] = t), (t.stateNode = e));
        }
        return (Ut(t), null);
      case 31:
        if (((a = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((i = ul(t)), a !== null)) {
            if (e === null) {
              if (!i) throw Error(c(318));
              if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(c(557));
              e[ht] = t;
            } else (Bi(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ut(t), (e = !1));
          } else ((a = bc()), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), (e = !0));
          if (!e) return t.flags & 256 ? (Ia(t), t) : (Ia(t), null);
          if ((t.flags & 128) !== 0) throw Error(c(558));
        }
        return (Ut(t), null);
      case 13:
        if (((i = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
          if (((l = ul(t)), i !== null && i.dehydrated !== null)) {
            if (e === null) {
              if (!l) throw Error(c(318));
              if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(c(317));
              l[ht] = t;
            } else (Bi(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ut(t), (l = !1));
          } else ((l = bc()), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), (l = !0));
          if (!l) return t.flags & 256 ? (Ia(t), t) : (Ia(t), null);
        }
        return (
          Ia(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = i !== null),
              (e = e !== null && e.memoizedState !== null),
              a &&
                ((i = t.child),
                (l = null),
                i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (l = i.alternate.memoizedState.cachePool.pool),
                (s = null),
                i.memoizedState !== null && i.memoizedState.cachePool !== null && (s = i.memoizedState.cachePool.pool),
                s !== l && (i.flags |= 2048)),
              a !== e && a && (t.child.flags |= 8192),
              hr(t, t.updateQueue),
              Ut(t),
              null)
        );
      case 4:
        return (Ee(), e === null && Ao(t.stateNode.containerInfo), Ut(t), null);
      case 10:
        return (Bn(t.type), Ut(t), null);
      case 19:
        if ((x(ea), (i = t.memoizedState), i === null)) return (Ut(t), null);
        if (((l = (t.flags & 128) !== 0), (s = i.rendering), s === null))
          if (l) cs(i, !1);
          else {
            if (Pt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((s = er(e)), s !== null)) {
                  for (t.flags |= 128, cs(i, !1), e = s.updateQueue, t.updateQueue = e, hr(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null;) (cd(a, e), (a = a.sibling));
                  return (N(ea, (ea.current & 1) | 2), lt && _n(t, i.treeForkCount), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null && We() > vr && ((t.flags |= 128), (l = !0), cs(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = er(s)), e !== null)) {
              if (((t.flags |= 128), (l = !0), (e = e.updateQueue), (t.updateQueue = e), hr(t, e), cs(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !lt)) return (Ut(t), null);
            } else 2 * We() - i.renderingStartTime > vr && a !== 536870912 && ((t.flags |= 128), (l = !0), cs(i, !1), (t.lanes = 4194304));
          i.isBackwards ? ((s.sibling = t.child), (t.child = s)) : ((e = i.last), e !== null ? (e.sibling = s) : (t.child = s), (i.last = s));
        }
        return i.tail !== null ? ((e = i.tail), (i.rendering = e), (i.tail = e.sibling), (i.renderingStartTime = We()), (e.sibling = null), (a = ea.current), N(ea, l ? (a & 1) | 2 : a & 1), lt && _n(t, i.treeForkCount), e) : (Ut(t), null);
      case 22:
      case 23:
        return (
          Ia(t),
          Ac(),
          (i = t.memoizedState !== null),
          e !== null ? (e.memoizedState !== null) !== i && (t.flags |= 8192) : i && (t.flags |= 8192),
          i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ut(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ut(t),
          (a = t.updateQueue),
          a !== null && hr(t, a.retryQueue),
          (a = null),
          e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
          (i = null),
          t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool),
          i !== a && (t.flags |= 2048),
          e !== null && x(Yi),
          null
        );
      case 24:
        return ((a = null), e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Bn(na), Ut(t), null);
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Mg(e, t) {
    switch ((xc(t), t.tag)) {
      case 1:
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 3:
        return (Bn(na), Ee(), (e = t.flags), (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 26:
      case 27:
      case 5:
        return (Ve(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Ia(t), t.alternate === null)) throw Error(c(340));
          Bi();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 13:
        if ((Ia(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(c(340));
          Bi();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (x(ea), null);
      case 4:
        return (Ee(), null);
      case 10:
        return (Bn(t.type), null);
      case 22:
      case 23:
        return (Ia(t), Ac(), e !== null && x(Yi), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 24:
        return (Bn(na), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Uf(e, t) {
    switch ((xc(t), t.tag)) {
      case 3:
        (Bn(na), Ee());
        break;
      case 26:
      case 27:
      case 5:
        Ve(t);
        break;
      case 4:
        Ee();
        break;
      case 31:
        t.memoizedState !== null && Ia(t);
        break;
      case 13:
        Ia(t);
        break;
      case 19:
        x(ea);
        break;
      case 10:
        Bn(t.type);
        break;
      case 22:
      case 23:
        (Ia(t), Ac(), e !== null && x(Yi));
        break;
      case 24:
        Bn(na);
    }
  }
  function os(e, t) {
    try {
      var a = t.updateQueue,
        i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next;
        a = l;
        do {
          if ((a.tag & e) === e) {
            i = void 0;
            var s = a.create,
              f = a.inst;
            ((i = s()), (f.destroy = i));
          }
          a = a.next;
        } while (a !== l);
      }
    } catch (b) {
      bt(t, t.return, b);
    }
  }
  function ci(e, t, a) {
    try {
      var i = t.updateQueue,
        l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next;
        i = s;
        do {
          if ((i.tag & e) === e) {
            var f = i.inst,
              b = f.destroy;
            if (b !== void 0) {
              ((f.destroy = void 0), (l = t));
              var E = a,
                q = b;
              try {
                q();
              } catch (ae) {
                bt(l, E, ae);
              }
            }
          }
          i = i.next;
        } while (i !== s);
      }
    } catch (ae) {
      bt(t, t.return, ae);
    }
  }
  function Bf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Td(t, a);
      } catch (i) {
        bt(e, e.return, i);
      }
    }
  }
  function Hf(e, t, a) {
    ((a.props = $i(e.type, e.memoizedProps)), (a.state = e.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (i) {
      bt(e, t, i);
    }
  }
  function us(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var i = e.stateNode;
            break;
          case 30:
            i = e.stateNode;
            break;
          default:
            i = e.stateNode;
        }
        typeof a == "function" ? (e.refCleanup = a(i)) : (a.current = i);
      }
    } catch (l) {
      bt(e, t, l);
    }
  }
  function kn(e, t) {
    var a = e.ref,
      i = e.refCleanup;
    if (a !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (l) {
          bt(e, t, l);
        } finally {
          ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (l) {
          bt(e, t, l);
        }
      else a.current = null;
  }
  function Lf(e) {
    var t = e.type,
      a = e.memoizedProps,
      i = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && i.focus();
          break e;
        case "img":
          a.src ? (i.src = a.src) : a.srcSet && (i.srcset = a.srcSet);
      }
    } catch (l) {
      bt(e, e.return, l);
    }
  }
  function uo(e, t, a) {
    try {
      var i = e.stateNode;
      (Jg(i, e.type, a, t), (i[Nt] = t));
    } catch (l) {
      bt(e, e.return, l);
    }
  }
  function Yf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && pi(e.type)) || e.tag === 4;
  }
  function fo(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || Yf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
        if ((e.tag === 27 && pi(e.type)) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ho(e, t, a) {
    var i = e.tag;
    if (i === 5 || i === 6)
      ((e = e.stateNode),
        t
          ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t)
          : ((t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a), t.appendChild(e), (a = a._reactRootContainer), a != null || t.onclick !== null || (t.onclick = te)));
    else if (i !== 4 && (i === 27 && pi(e.type) && ((a = e.stateNode), (t = null)), (e = e.child), e !== null)) for (ho(e, t, a), e = e.sibling; e !== null;) (ho(e, t, a), (e = e.sibling));
  }
  function mr(e, t, a) {
    var i = e.tag;
    if (i === 5 || i === 6) ((e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e));
    else if (i !== 4 && (i === 27 && pi(e.type) && (a = e.stateNode), (e = e.child), e !== null)) for (mr(e, t, a), e = e.sibling; e !== null;) (mr(e, t, a), (e = e.sibling));
  }
  function qf(e) {
    var t = e.stateNode,
      a = e.memoizedProps;
    try {
      for (var i = e.type, l = t.attributes; l.length;) t.removeAttributeNode(l[0]);
      (Na(t, i, a), (t[ht] = e), (t[Nt] = a));
    } catch (s) {
      bt(e, e.return, s);
    }
  }
  var Xn = !1,
    sa = !1,
    mo = !1,
    Xf = typeof WeakSet == "function" ? WeakSet : Set,
    pa = null;
  function zg(e, t) {
    if (((e = e.containerInfo), (_o = _r), (e = Pu(e)), sc(e))) {
      if ("selectionStart" in e) var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var i = a.getSelection && a.getSelection();
          if (i && i.rangeCount !== 0) {
            a = i.anchorNode;
            var l = i.anchorOffset,
              s = i.focusNode;
            i = i.focusOffset;
            try {
              (a.nodeType, s.nodeType);
            } catch {
              a = null;
              break e;
            }
            var f = 0,
              b = -1,
              E = -1,
              q = 0,
              ae = 0,
              re = e,
              G = null;
            t: for (;;) {
              for (var W; re !== a || (l !== 0 && re.nodeType !== 3) || (b = f + l), re !== s || (i !== 0 && re.nodeType !== 3) || (E = f + i), re.nodeType === 3 && (f += re.nodeValue.length), (W = re.firstChild) !== null;) ((G = re), (re = W));
              for (;;) {
                if (re === e) break t;
                if ((G === a && ++q === l && (b = f), G === s && ++ae === i && (E = f), (W = re.nextSibling) !== null)) break;
                ((re = G), (G = re.parentNode));
              }
              re = W;
            }
            a = b === -1 || E === -1 ? null : { start: b, end: E };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Uo = { focusedElem: e, selectionRange: a }, _r = !1, pa = t; pa !== null;)
      if (((t = pa), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) ((e.return = t), (pa = e));
      else
        for (; pa !== null;) {
          switch (((t = pa), (s = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if ((e & 4) !== 0 && ((e = t.updateQueue), (e = e !== null ? e.events : null), e !== null)) for (a = 0; a < e.length; a++) ((l = e[a]), (l.ref.impl = l.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && s !== null) {
                ((e = void 0), (a = t), (l = s.memoizedProps), (s = s.memoizedState), (i = a.stateNode));
                try {
                  var Me = $i(a.type, l);
                  ((e = i.getSnapshotBeforeUpdate(Me, s)), (i.__reactInternalSnapshotBeforeUpdate = e));
                } catch (Ye) {
                  bt(a, a.return, Ye);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)) Lo(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Lo(e);
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
              if ((e & 1024) !== 0) throw Error(c(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (pa = e));
            break;
          }
          pa = t.return;
        }
  }
  function Gf(e, t, a) {
    var i = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Vn(e, a), i & 4 && os(5, a));
        break;
      case 1:
        if ((Vn(e, a), i & 4))
          if (((e = a.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (f) {
              bt(a, a.return, f);
            }
          else {
            var l = $i(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              bt(a, a.return, f);
            }
          }
        (i & 64 && Bf(a), i & 512 && us(a, a.return));
        break;
      case 3:
        if ((Vn(e, a), i & 64 && ((e = a.updateQueue), e !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Td(e, t);
          } catch (f) {
            bt(a, a.return, f);
          }
        }
        break;
      case 27:
        t === null && i & 4 && qf(a);
      case 26:
      case 5:
        (Vn(e, a), t === null && i & 4 && Lf(a), i & 512 && us(a, a.return));
        break;
      case 12:
        Vn(e, a);
        break;
      case 31:
        (Vn(e, a), i & 4 && Qf(e, a));
        break;
      case 13:
        (Vn(e, a), i & 4 && If(e, a), i & 64 && ((e = a.memoizedState), e !== null && ((e = e.dehydrated), e !== null && ((a = Hg.bind(null, a)), ix(e, a)))));
        break;
      case 22:
        if (((i = a.memoizedState !== null || Xn), !i)) {
          ((t = (t !== null && t.memoizedState !== null) || sa), (l = Xn));
          var s = sa;
          ((Xn = i), (sa = t) && !s ? $n(e, a, (a.subtreeFlags & 8772) !== 0) : Vn(e, a), (Xn = l), (sa = s));
        }
        break;
      case 30:
        break;
      default:
        Vn(e, a);
    }
  }
  function Vf(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Vf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && xn(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Bt = null,
    Ra = !1;
  function Gn(e, t, a) {
    for (a = a.child; a !== null;) ($f(e, t, a), (a = a.sibling));
  }
  function $f(e, t, a) {
    if (U && typeof U.onCommitFiberUnmount == "function")
      try {
        U.onCommitFiberUnmount(St, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (sa || kn(a, t), Gn(e, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        sa || kn(a, t);
        var i = Bt,
          l = Ra;
        (pi(a.type) && ((Bt = a.stateNode), (Ra = !1)), Gn(e, t, a), bs(a.stateNode), (Bt = i), (Ra = l));
        break;
      case 5:
        sa || kn(a, t);
      case 6:
        if (((i = Bt), (l = Ra), (Bt = null), Gn(e, t, a), (Bt = i), (Ra = l), Bt !== null))
          if (Ra)
            try {
              (Bt.nodeType === 9 ? Bt.body : Bt.nodeName === "HTML" ? Bt.ownerDocument.body : Bt).removeChild(a.stateNode);
            } catch (s) {
              bt(a, t, s);
            }
          else
            try {
              Bt.removeChild(a.stateNode);
            } catch (s) {
              bt(a, t, s);
            }
        break;
      case 18:
        Bt !== null && (Ra ? ((e = Bt), Bh(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode), Dl(e)) : Bh(Bt, a.stateNode));
        break;
      case 4:
        ((i = Bt), (l = Ra), (Bt = a.stateNode.containerInfo), (Ra = !0), Gn(e, t, a), (Bt = i), (Ra = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (ci(2, a, t), sa || ci(4, a, t), Gn(e, t, a));
        break;
      case 1:
        (sa || (kn(a, t), (i = a.stateNode), typeof i.componentWillUnmount == "function" && Hf(a, t, i)), Gn(e, t, a));
        break;
      case 21:
        Gn(e, t, a);
        break;
      case 22:
        ((sa = (i = sa) || a.memoizedState !== null), Gn(e, t, a), (sa = i));
        break;
      default:
        Gn(e, t, a);
    }
  }
  function Qf(e, t) {
    if (t.memoizedState === null && ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))) {
      e = e.dehydrated;
      try {
        Dl(e);
      } catch (a) {
        bt(t, t.return, a);
      }
    }
  }
  function If(e, t) {
    if (t.memoizedState === null && ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null))))
      try {
        Dl(e);
      } catch (a) {
        bt(t, t.return, a);
      }
  }
  function Eg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Xf()), t);
      case 22:
        return ((e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new Xf()), t);
      default:
        throw Error(c(435, e.tag));
    }
  }
  function pr(e, t) {
    var a = Eg(e);
    t.forEach(function (i) {
      if (!a.has(i)) {
        a.add(i);
        var l = Lg.bind(null, e, i);
        i.then(l, l);
      }
    });
  }
  function Oa(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var i = 0; i < a.length; i++) {
        var l = a[i],
          s = e,
          f = t,
          b = f;
        e: for (; b !== null;) {
          switch (b.tag) {
            case 27:
              if (pi(b.type)) {
                ((Bt = b.stateNode), (Ra = !1));
                break e;
              }
              break;
            case 5:
              ((Bt = b.stateNode), (Ra = !1));
              break e;
            case 3:
            case 4:
              ((Bt = b.stateNode.containerInfo), (Ra = !0));
              break e;
          }
          b = b.return;
        }
        if (Bt === null) throw Error(c(160));
        ($f(s, f, l), (Bt = null), (Ra = !1), (s = l.alternate), s !== null && (s.return = null), (l.return = null));
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) (Zf(t, e), (t = t.sibling));
  }
  var hn = null;
  function Zf(e, t) {
    var a = e.alternate,
      i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Oa(t, e), _a(e), i & 4 && (ci(3, e, e.return), os(3, e), ci(5, e, e.return)));
        break;
      case 1:
        (Oa(t, e),
          _a(e),
          i & 512 && (sa || a === null || kn(a, a.return)),
          i & 64 && Xn && ((e = e.updateQueue), e !== null && ((i = e.callbacks), i !== null && ((a = e.shared.hiddenCallbacks), (e.shared.hiddenCallbacks = a === null ? i : a.concat(i))))));
        break;
      case 26:
        var l = hn;
        if ((Oa(t, e), _a(e), i & 512 && (sa || a === null || kn(a, a.return)), i & 4)) {
          var s = a !== null ? a.memoizedState : null;
          if (((i = e.memoizedState), a === null))
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  ((i = e.type), (a = e.memoizedProps), (l = l.ownerDocument || l));
                  t: switch (i) {
                    case "title":
                      ((s = l.getElementsByTagName("title")[0]),
                        (!s || s[Wt] || s[ht] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && ((s = l.createElement(i)), l.head.insertBefore(s, l.querySelector("head > title"))),
                        Na(s, i, a),
                        (s[ht] = e),
                        Qt(s),
                        (i = s));
                      break e;
                    case "link":
                      var f = Zh("link", "href", l).get(i + (a.href || ""));
                      if (f) {
                        for (var b = 0; b < f.length; b++)
                          if (
                            ((s = f[b]),
                            s.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) &&
                              s.getAttribute("rel") === (a.rel == null ? null : a.rel) &&
                              s.getAttribute("title") === (a.title == null ? null : a.title) &&
                              s.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            f.splice(b, 1);
                            break t;
                          }
                      }
                      ((s = l.createElement(i)), Na(s, i, a), l.head.appendChild(s));
                      break;
                    case "meta":
                      if ((f = Zh("meta", "content", l).get(i + (a.content || "")))) {
                        for (b = 0; b < f.length; b++)
                          if (
                            ((s = f[b]),
                            s.getAttribute("content") === (a.content == null ? null : "" + a.content) &&
                              s.getAttribute("name") === (a.name == null ? null : a.name) &&
                              s.getAttribute("property") === (a.property == null ? null : a.property) &&
                              s.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) &&
                              s.getAttribute("charset") === (a.charSet == null ? null : a.charSet))
                          ) {
                            f.splice(b, 1);
                            break t;
                          }
                      }
                      ((s = l.createElement(i)), Na(s, i, a), l.head.appendChild(s));
                      break;
                    default:
                      throw Error(c(468, i));
                  }
                  ((s[ht] = e), Qt(s), (i = s));
                }
                e.stateNode = i;
              } else Kh(l, e.type, e.stateNode);
            else e.stateNode = Ih(l, i, e.memoizedProps);
          else
            s !== i
              ? (s === null ? a.stateNode !== null && ((a = a.stateNode), a.parentNode.removeChild(a)) : s.count--, i === null ? Kh(l, e.type, e.stateNode) : Ih(l, i, e.memoizedProps))
              : i === null && e.stateNode !== null && uo(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (Oa(t, e), _a(e), i & 512 && (sa || a === null || kn(a, a.return)), a !== null && i & 4 && uo(e, e.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if ((Oa(t, e), _a(e), i & 512 && (sa || a === null || kn(a, a.return)), e.flags & 32)) {
          l = e.stateNode;
          try {
            dn(l, "");
          } catch (Me) {
            bt(e, e.return, Me);
          }
        }
        (i & 4 && e.stateNode != null && ((l = e.memoizedProps), uo(e, l, a !== null ? a.memoizedProps : l)), i & 1024 && (mo = !0));
        break;
      case 6:
        if ((Oa(t, e), _a(e), i & 4)) {
          if (e.stateNode === null) throw Error(c(162));
          ((i = e.memoizedProps), (a = e.stateNode));
          try {
            a.nodeValue = i;
          } catch (Me) {
            bt(e, e.return, Me);
          }
        }
        break;
      case 3:
        if (((Dr = null), (l = hn), (hn = zr(t.containerInfo)), Oa(t, e), (hn = l), _a(e), i & 4 && a !== null && a.memoizedState.isDehydrated))
          try {
            Dl(t.containerInfo);
          } catch (Me) {
            bt(e, e.return, Me);
          }
        mo && ((mo = !1), Kf(e));
        break;
      case 4:
        ((i = hn), (hn = zr(e.stateNode.containerInfo)), Oa(t, e), _a(e), (hn = i));
        break;
      case 12:
        (Oa(t, e), _a(e));
        break;
      case 31:
        (Oa(t, e), _a(e), i & 4 && ((i = e.updateQueue), i !== null && ((e.updateQueue = null), pr(e, i))));
        break;
      case 13:
        (Oa(t, e), _a(e), e.child.flags & 8192 && (e.memoizedState !== null) != (a !== null && a.memoizedState !== null) && (xr = We()), i & 4 && ((i = e.updateQueue), i !== null && ((e.updateQueue = null), pr(e, i))));
        break;
      case 22:
        l = e.memoizedState !== null;
        var E = a !== null && a.memoizedState !== null,
          q = Xn,
          ae = sa;
        if (((Xn = q || l), (sa = ae || E), Oa(t, e), (sa = ae), (Xn = q), _a(e), i & 8192))
          e: for (t = e.stateNode, t._visibility = l ? t._visibility & -2 : t._visibility | 1, l && (a === null || E || Xn || sa || Qi(e)), a = null, t = e; ;) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                E = a = t;
                try {
                  if (((s = E.stateNode), l)) ((f = s.style), typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : (f.display = "none"));
                  else {
                    b = E.stateNode;
                    var re = E.memoizedProps.style,
                      G = re != null && re.hasOwnProperty("display") ? re.display : null;
                    b.style.display = G == null || typeof G == "boolean" ? "" : ("" + G).trim();
                  }
                } catch (Me) {
                  bt(E, E.return, Me);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                E = t;
                try {
                  E.stateNode.nodeValue = l ? "" : E.memoizedProps;
                } catch (Me) {
                  bt(E, E.return, Me);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                E = t;
                try {
                  var W = E.stateNode;
                  l ? Hh(W, !0) : Hh(E.stateNode, !1);
                } catch (Me) {
                  bt(E, E.return, Me);
                }
              }
            } else if (((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) && t.child !== null) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null;) {
              if (t.return === null || t.return === e) break e;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null), (t.sibling.return = t.return), (t = t.sibling));
          }
        i & 4 && ((i = e.updateQueue), i !== null && ((a = i.retryQueue), a !== null && ((i.retryQueue = null), pr(e, a))));
        break;
      case 19:
        (Oa(t, e), _a(e), i & 4 && ((i = e.updateQueue), i !== null && ((e.updateQueue = null), pr(e, i))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Oa(t, e), _a(e));
    }
  }
  function _a(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, i = e.return; i !== null;) {
          if (Yf(i)) {
            a = i;
            break;
          }
          i = i.return;
        }
        if (a == null) throw Error(c(160));
        switch (a.tag) {
          case 27:
            var l = a.stateNode,
              s = fo(e);
            mr(e, s, l);
            break;
          case 5:
            var f = a.stateNode;
            a.flags & 32 && (dn(f, ""), (a.flags &= -33));
            var b = fo(e);
            mr(e, b, f);
            break;
          case 3:
          case 4:
            var E = a.stateNode.containerInfo,
              q = fo(e);
            ho(e, q, E);
            break;
          default:
            throw Error(c(161));
        }
      } catch (ae) {
        bt(e, e.return, ae);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Kf(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null;) {
        var t = e;
        (Kf(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
      }
  }
  function Vn(e, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) (Gf(e, t.alternate, t), (t = t.sibling));
  }
  function Qi(e) {
    for (e = e.child; e !== null;) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (ci(4, t, t.return), Qi(t));
          break;
        case 1:
          kn(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && Hf(t, t.return, a), Qi(t));
          break;
        case 27:
          bs(t.stateNode);
        case 26:
        case 5:
          (kn(t, t.return), Qi(t));
          break;
        case 22:
          t.memoizedState === null && Qi(t);
          break;
        case 30:
          Qi(t);
          break;
        default:
          Qi(t);
      }
      e = e.sibling;
    }
  }
  function $n(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
      var i = t.alternate,
        l = e,
        s = t,
        f = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          ($n(l, s, a), os(4, s));
          break;
        case 1:
          if (($n(l, s, a), (i = s), (l = i.stateNode), typeof l.componentDidMount == "function"))
            try {
              l.componentDidMount();
            } catch (q) {
              bt(i, i.return, q);
            }
          if (((i = s), (l = i.updateQueue), l !== null)) {
            var b = i.stateNode;
            try {
              var E = l.shared.hiddenCallbacks;
              if (E !== null) for (l.shared.hiddenCallbacks = null, l = 0; l < E.length; l++) Cd(E[l], b);
            } catch (q) {
              bt(i, i.return, q);
            }
          }
          (a && f & 64 && Bf(s), us(s, s.return));
          break;
        case 27:
          qf(s);
        case 26:
        case 5:
          ($n(l, s, a), a && i === null && f & 4 && Lf(s), us(s, s.return));
          break;
        case 12:
          $n(l, s, a);
          break;
        case 31:
          ($n(l, s, a), a && f & 4 && Qf(l, s));
          break;
        case 13:
          ($n(l, s, a), a && f & 4 && If(l, s));
          break;
        case 22:
          (s.memoizedState === null && $n(l, s, a), us(s, s.return));
          break;
        case 30:
          break;
        default:
          $n(l, s, a);
      }
      t = t.sibling;
    }
  }
  function po(e, t) {
    var a = null;
    (e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && Jl(a)));
  }
  function go(e, t) {
    ((e = null), t.alternate !== null && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache), t !== e && (t.refCount++, e != null && Jl(e)));
  }
  function mn(e, t, a, i) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) (Jf(e, t, a, i), (t = t.sibling));
  }
  function Jf(e, t, a, i) {
    var l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (mn(e, t, a, i), l & 2048 && os(9, t));
        break;
      case 1:
        mn(e, t, a, i);
        break;
      case 3:
        (mn(e, t, a, i), l & 2048 && ((e = null), t.alternate !== null && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache), t !== e && (t.refCount++, e != null && Jl(e))));
        break;
      case 12:
        if (l & 2048) {
          (mn(e, t, a, i), (e = t.stateNode));
          try {
            var s = t.memoizedProps,
              f = s.id,
              b = s.onPostCommit;
            typeof b == "function" && b(f, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
          } catch (E) {
            bt(t, t.return, E);
          }
        } else mn(e, t, a, i);
        break;
      case 31:
        mn(e, t, a, i);
        break;
      case 13:
        mn(e, t, a, i);
        break;
      case 23:
        break;
      case 22:
        ((s = t.stateNode),
          (f = t.alternate),
          t.memoizedState !== null ? (s._visibility & 2 ? mn(e, t, a, i) : ds(e, t)) : s._visibility & 2 ? mn(e, t, a, i) : ((s._visibility |= 2), yl(e, t, a, i, (t.subtreeFlags & 10256) !== 0 || !1)),
          l & 2048 && po(f, t));
        break;
      case 24:
        (mn(e, t, a, i), l & 2048 && go(t.alternate, t));
        break;
      default:
        mn(e, t, a, i);
    }
  }
  function yl(e, t, a, i, l) {
    for (l = l && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null;) {
      var s = e,
        f = t,
        b = a,
        E = i,
        q = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          (yl(s, f, b, E, l), os(8, f));
          break;
        case 23:
          break;
        case 22:
          var ae = f.stateNode;
          (f.memoizedState !== null ? (ae._visibility & 2 ? yl(s, f, b, E, l) : ds(s, f)) : ((ae._visibility |= 2), yl(s, f, b, E, l)), l && q & 2048 && po(f.alternate, f));
          break;
        case 24:
          (yl(s, f, b, E, l), l && q & 2048 && go(f.alternate, f));
          break;
        default:
          yl(s, f, b, E, l);
      }
      t = t.sibling;
    }
  }
  function ds(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) {
        var a = e,
          i = t,
          l = i.flags;
        switch (i.tag) {
          case 22:
            (ds(a, i), l & 2048 && po(i.alternate, i));
            break;
          case 24:
            (ds(a, i), l & 2048 && go(i.alternate, i));
            break;
          default:
            ds(a, i);
        }
        t = t.sibling;
      }
  }
  var fs = 8192;
  function jl(e, t, a) {
    if (e.subtreeFlags & fs) for (e = e.child; e !== null;) (Wf(e, t, a), (e = e.sibling));
  }
  function Wf(e, t, a) {
    switch (e.tag) {
      case 26:
        (jl(e, t, a), e.flags & fs && e.memoizedState !== null && gx(a, hn, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        jl(e, t, a);
        break;
      case 3:
      case 4:
        var i = hn;
        ((hn = zr(e.stateNode.containerInfo)), jl(e, t, a), (hn = i));
        break;
      case 22:
        e.memoizedState === null && ((i = e.alternate), i !== null && i.memoizedState !== null ? ((i = fs), (fs = 16777216), jl(e, t, a), (fs = i)) : jl(e, t, a));
        break;
      default:
        jl(e, t, a);
    }
  }
  function Ff(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function hs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var i = t[a];
          ((pa = i), eh(i, e));
        }
      Ff(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) (Pf(e), (e = e.sibling));
  }
  function Pf(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (hs(e), e.flags & 2048 && ci(9, e, e.return));
        break;
      case 3:
        hs(e);
        break;
      case 12:
        hs(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? ((t._visibility &= -3), gr(e)) : hs(e);
        break;
      default:
        hs(e);
    }
  }
  function gr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var i = t[a];
          ((pa = i), eh(i, e));
        }
      Ff(e);
    }
    for (e = e.child; e !== null;) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (ci(8, t, t.return), gr(t));
          break;
        case 22:
          ((a = t.stateNode), a._visibility & 2 && ((a._visibility &= -3), gr(t)));
          break;
        default:
          gr(t);
      }
      e = e.sibling;
    }
  }
  function eh(e, t) {
    for (; pa !== null;) {
      var a = pa;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ci(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var i = a.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Jl(a.memoizedState.cache);
      }
      if (((i = a.child), i !== null)) ((i.return = a), (pa = i));
      else
        e: for (a = e; pa !== null;) {
          i = pa;
          var l = i.sibling,
            s = i.return;
          if ((Vf(i), i === a)) {
            pa = null;
            break e;
          }
          if (l !== null) {
            ((l.return = s), (pa = l));
            break e;
          }
          pa = s;
        }
    }
  }
  var Dg = {
      getCacheForType: function (e) {
        var t = ja(na),
          a = t.data.get(e);
        return (a === void 0 && ((a = e()), t.data.set(e, a)), a);
      },
      cacheSignal: function () {
        return ja(na).controller.signal;
      },
    },
    Ag = typeof WeakMap == "function" ? WeakMap : Map,
    mt = 0,
    Et = null,
    et = null,
    at = 0,
    vt = 0,
    Za = null,
    oi = !1,
    Sl = !1,
    xo = !1,
    Qn = 0,
    Pt = 0,
    ui = 0,
    Ii = 0,
    vo = 0,
    Ka = 0,
    Nl = 0,
    ms = null,
    Ua = null,
    bo = !1,
    xr = 0,
    th = 0,
    vr = 1 / 0,
    br = null,
    di = null,
    da = 0,
    fi = null,
    wl = null,
    In = 0,
    yo = 0,
    jo = null,
    ah = null,
    ps = 0,
    So = null;
  function Ja() {
    return (mt & 2) !== 0 && at !== 0 ? at & -at : R.T !== null ? Mo() : _e();
  }
  function nh() {
    if (Ka === 0)
      if ((at & 536870912) === 0 || lt) {
        var e = me;
        ((me <<= 1), (me & 3932160) === 0 && (me = 262144), (Ka = e));
      } else Ka = 536870912;
    return ((e = Qa.current), e !== null && (e.flags |= 32), Ka);
  }
  function Ba(e, t, a) {
    (((e === Et && (vt === 2 || vt === 9)) || e.cancelPendingCommit !== null) && (Cl(e, 0), hi(e, at, Ka, !1)), O(e, a), ((mt & 2) === 0 || e !== Et) && (e === Et && ((mt & 2) === 0 && (Ii |= a), Pt === 4 && hi(e, at, Ka, !1)), Mn(e)));
  }
  function ih(e, t, a) {
    if ((mt & 6) !== 0) throw Error(c(327));
    var i = (!a && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Jt(e, t),
      l = i ? _g(e, t) : wo(e, t, !0),
      s = i;
    do {
      if (l === 0) {
        Sl && !i && hi(e, t, 0, !1);
        break;
      } else {
        if (((a = e.current.alternate), s && !Rg(a))) {
          ((l = wo(e, t, !1)), (s = !1));
          continue;
        }
        if (l === 2) {
          if (((s = t), e.errorRecoveryDisabledLanes & s)) var f = 0;
          else ((f = e.pendingLanes & -536870913), (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0));
          if (f !== 0) {
            t = f;
            e: {
              var b = e;
              l = ms;
              var E = b.current.memoizedState.isDehydrated;
              if ((E && (Cl(b, f).flags |= 256), (f = wo(b, f, !1)), f !== 2)) {
                if (xo && !E) {
                  ((b.errorRecoveryDisabledLanes |= s), (Ii |= s), (l = 4));
                  break e;
                }
                ((s = Ua), (Ua = l), s !== null && (Ua === null ? (Ua = s) : Ua.push.apply(Ua, s)));
              }
              l = f;
            }
            if (((s = !1), l !== 2)) continue;
          }
        }
        if (l === 1) {
          (Cl(e, 0), hi(e, t, 0, !0));
          break;
        }
        e: {
          switch (((i = e), (s = l), s)) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              hi(i, t, Ka, !oi);
              break e;
            case 2:
              Ua = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && ((l = xr + 300 - We()), 10 < l)) {
            if ((hi(i, t, Ka, !oi), Kt(i, 0, !0) !== 0)) break e;
            ((In = t), (i.timeoutHandle = _h(lh.bind(null, i, a, Ua, br, bo, t, Ka, Ii, Nl, oi, s, "Throttled", -0, 0), l)));
            break e;
          }
          lh(i, a, Ua, br, bo, t, Ka, Ii, Nl, oi, s, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Mn(e);
  }
  function lh(e, t, a, i, l, s, f, b, E, q, ae, re, G, W) {
    if (((e.timeoutHandle = -1), (re = t.subtreeFlags), re & 8192 || (re & 16785408) === 16785408)) {
      ((re = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: !0, waitingForViewTransition: !1, unsuspend: te }), Wf(t, s, re));
      var Me = (s & 62914560) === s ? xr - We() : (s & 4194048) === s ? th - We() : 0;
      if (((Me = xx(re, Me)), Me !== null)) {
        ((In = s), (e.cancelPendingCommit = Me(hh.bind(null, e, t, s, a, i, l, f, b, E, ae, re, null, G, W))), hi(e, s, f, !q));
        return;
      }
    }
    hh(e, t, s, a, i, l, f, b, E);
  }
  function Rg(e) {
    for (var t = e; ;) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null)))
        for (var i = 0; i < a.length; i++) {
          var l = a[i],
            s = l.getSnapshot;
          l = l.value;
          try {
            if (!Va(s(), l)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null)) ((a.return = t), (t = a));
      else {
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function hi(e, t, a, i) {
    ((t &= ~vo), (t &= ~Ii), (e.suspendedLanes |= t), (e.pingedLanes &= ~t), i && (e.warmLanes |= t), (i = e.expirationTimes));
    for (var l = t; 0 < l;) {
      var s = 31 - ve(l),
        f = 1 << s;
      ((i[s] = -1), (l &= ~f));
    }
    a !== 0 && Q(e, a, t);
  }
  function yr() {
    return (mt & 6) === 0 ? (gs(0), !1) : !0;
  }
  function No() {
    if (et !== null) {
      if (vt === 0) var e = et.return;
      else ((e = et), (Un = Hi = null), Hc(e), (pl = null), (Fl = 0), (e = et));
      for (; e !== null;) (Uf(e.alternate, e), (e = e.return));
      et = null;
    }
  }
  function Cl(e, t) {
    var a = e.timeoutHandle;
    (a !== -1 && ((e.timeoutHandle = -1), Pg(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      (In = 0),
      No(),
      (Et = e),
      (et = a = On(e.current, null)),
      (at = t),
      (vt = 0),
      (Za = null),
      (oi = !1),
      (Sl = Jt(e, t)),
      (xo = !1),
      (Nl = Ka = vo = Ii = ui = Pt = 0),
      (Ua = ms = null),
      (bo = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i;) {
        var l = 31 - ve(i),
          s = 1 << l;
        ((t |= e[l]), (i &= ~s));
      }
    return ((Qn = t), qs(), a);
  }
  function sh(e, t) {
    ((Ke = null),
      (R.H = ss),
      t === ml || t === Ks ? ((t = jd()), (vt = 3)) : t === Tc ? ((t = jd()), (vt = 4)) : (vt = t === eo ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1),
      (Za = t),
      et === null && ((Pt = 1), or(e, en(t, e.current))));
  }
  function rh() {
    var e = Qa.current;
    return e === null ? !0 : (at & 4194048) === at ? ln === null : (at & 62914560) === at || (at & 536870912) !== 0 ? e === ln : !1;
  }
  function ch() {
    var e = R.H;
    return ((R.H = ss), e === null ? ss : e);
  }
  function oh() {
    var e = R.A;
    return ((R.A = Dg), e);
  }
  function jr() {
    ((Pt = 4), oi || ((at & 4194048) !== at && Qa.current !== null) || (Sl = !0), ((ui & 134217727) === 0 && (Ii & 134217727) === 0) || Et === null || hi(Et, at, Ka, !1));
  }
  function wo(e, t, a) {
    var i = mt;
    mt |= 2;
    var l = ch(),
      s = oh();
    ((Et !== e || at !== t) && ((br = null), Cl(e, t)), (t = !1));
    var f = Pt;
    e: do
      try {
        if (vt !== 0 && et !== null) {
          var b = et,
            E = Za;
          switch (vt) {
            case 8:
              (No(), (f = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Qa.current === null && (t = !0);
              var q = vt;
              if (((vt = 0), (Za = null), Tl(e, b, E, q), a && Sl)) {
                f = 0;
                break e;
              }
              break;
            default:
              ((q = vt), (vt = 0), (Za = null), Tl(e, b, E, q));
          }
        }
        (Og(), (f = Pt));
        break;
      } catch (ae) {
        sh(e, ae);
      }
    while (!0);
    return (t && e.shellSuspendCounter++, (Un = Hi = null), (mt = i), (R.H = l), (R.A = s), et === null && ((Et = null), (at = 0), qs()), f);
  }
  function Og() {
    for (; et !== null;) uh(et);
  }
  function _g(e, t) {
    var a = mt;
    mt |= 2;
    var i = ch(),
      l = oh();
    Et !== e || at !== t ? ((br = null), (vr = We() + 500), Cl(e, t)) : (Sl = Jt(e, t));
    e: do
      try {
        if (vt !== 0 && et !== null) {
          t = et;
          var s = Za;
          t: switch (vt) {
            case 1:
              ((vt = 0), (Za = null), Tl(e, t, s, 1));
              break;
            case 2:
            case 9:
              if (bd(s)) {
                ((vt = 0), (Za = null), dh(t));
                break;
              }
              ((t = function () {
                ((vt !== 2 && vt !== 9) || Et !== e || (vt = 7), Mn(e));
              }),
                s.then(t, t));
              break e;
            case 3:
              vt = 7;
              break e;
            case 4:
              vt = 5;
              break e;
            case 7:
              bd(s) ? ((vt = 0), (Za = null), dh(t)) : ((vt = 0), (Za = null), Tl(e, t, s, 7));
              break;
            case 5:
              var f = null;
              switch (et.tag) {
                case 26:
                  f = et.memoizedState;
                case 5:
                case 27:
                  var b = et;
                  if (f ? Jh(f) : b.stateNode.complete) {
                    ((vt = 0), (Za = null));
                    var E = b.sibling;
                    if (E !== null) et = E;
                    else {
                      var q = b.return;
                      q !== null ? ((et = q), Sr(q)) : (et = null);
                    }
                    break t;
                  }
              }
              ((vt = 0), (Za = null), Tl(e, t, s, 5));
              break;
            case 6:
              ((vt = 0), (Za = null), Tl(e, t, s, 6));
              break;
            case 8:
              (No(), (Pt = 6));
              break e;
            default:
              throw Error(c(462));
          }
        }
        Ug();
        break;
      } catch (ae) {
        sh(e, ae);
      }
    while (!0);
    return ((Un = Hi = null), (R.H = i), (R.A = l), (mt = a), et !== null ? 0 : ((Et = null), (at = 0), qs(), Pt));
  }
  function Ug() {
    for (; et !== null && !jt();) uh(et);
  }
  function uh(e) {
    var t = Of(e.alternate, e, Qn);
    ((e.memoizedProps = e.pendingProps), t === null ? Sr(e) : (et = t));
  }
  function dh(e) {
    var t = e,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Mf(a, t, t.pendingProps, t.type, void 0, at);
        break;
      case 11:
        t = Mf(a, t, t.pendingProps, t.type.render, t.ref, at);
        break;
      case 5:
        Hc(t);
      default:
        (Uf(a, t), (t = et = cd(t, Qn)), (t = Of(a, t, Qn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Sr(e) : (et = t));
  }
  function Tl(e, t, a, i) {
    ((Un = Hi = null), Hc(t), (pl = null), (Fl = 0));
    var l = t.return;
    try {
      if (wg(e, l, t, a, at)) {
        ((Pt = 1), or(e, en(a, e.current)), (et = null));
        return;
      }
    } catch (s) {
      if (l !== null) throw ((et = l), s);
      ((Pt = 1), or(e, en(a, e.current)), (et = null));
      return;
    }
    t.flags & 32768 ? (lt || i === 1 ? (e = !0) : Sl || (at & 536870912) !== 0 ? (e = !1) : ((oi = e = !0), (i === 2 || i === 9 || i === 3 || i === 6) && ((i = Qa.current), i !== null && i.tag === 13 && (i.flags |= 16384))), fh(t, e)) : Sr(t);
  }
  function Sr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        fh(t, oi);
        return;
      }
      e = t.return;
      var a = kg(t.alternate, t, Qn);
      if (a !== null) {
        et = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        et = t;
        return;
      }
      et = t = e;
    } while (t !== null);
    Pt === 0 && (Pt = 5);
  }
  function fh(e, t) {
    do {
      var a = Mg(e.alternate, e);
      if (a !== null) {
        ((a.flags &= 32767), (et = a));
        return;
      }
      if (((a = e.return), a !== null && ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)), !t && ((e = e.sibling), e !== null))) {
        et = e;
        return;
      }
      et = e = a;
    } while (e !== null);
    ((Pt = 6), (et = null));
  }
  function hh(e, t, a, i, l, s, f, b, E) {
    e.cancelPendingCommit = null;
    do Nr();
    while (da !== 0);
    if ((mt & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (
        ((s = t.lanes | t.childLanes),
        (s |= dc),
        M(e, a, s, f, b, E),
        e === Et && ((et = Et = null), (at = 0)),
        (wl = t),
        (fi = e),
        (In = a),
        (yo = s),
        (jo = l),
        (ah = i),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Yg(Gt, function () {
              return (vh(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (i = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || i)
      ) {
        ((i = R.T), (R.T = null), (l = $.p), ($.p = 2), (f = mt), (mt |= 4));
        try {
          zg(e, t, a);
        } finally {
          ((mt = f), ($.p = l), (R.T = i));
        }
      }
      ((da = 1), mh(), ph(), gh());
    }
  }
  function mh() {
    if (da === 1) {
      da = 0;
      var e = fi,
        t = wl,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = R.T), (R.T = null));
        var i = $.p;
        $.p = 2;
        var l = mt;
        mt |= 4;
        try {
          Zf(t, e);
          var s = Uo,
            f = Pu(e.containerInfo),
            b = s.focusedElem,
            E = s.selectionRange;
          if (f !== b && b && b.ownerDocument && Fu(b.ownerDocument.documentElement, b)) {
            if (E !== null && sc(b)) {
              var q = E.start,
                ae = E.end;
              if ((ae === void 0 && (ae = q), "selectionStart" in b)) ((b.selectionStart = q), (b.selectionEnd = Math.min(ae, b.value.length)));
              else {
                var re = b.ownerDocument || document,
                  G = (re && re.defaultView) || window;
                if (G.getSelection) {
                  var W = G.getSelection(),
                    Me = b.textContent.length,
                    Ye = Math.min(E.start, Me),
                    kt = E.end === void 0 ? Ye : Math.min(E.end, Me);
                  !W.extend && Ye > kt && ((f = kt), (kt = Ye), (Ye = f));
                  var B = Wu(b, Ye),
                    A = Wu(b, kt);
                  if (B && A && (W.rangeCount !== 1 || W.anchorNode !== B.node || W.anchorOffset !== B.offset || W.focusNode !== A.node || W.focusOffset !== A.offset)) {
                    var L = re.createRange();
                    (L.setStart(B.node, B.offset), W.removeAllRanges(), Ye > kt ? (W.addRange(L), W.extend(A.node, A.offset)) : (L.setEnd(A.node, A.offset), W.addRange(L)));
                  }
                }
              }
            }
            for (re = [], W = b; (W = W.parentNode);) W.nodeType === 1 && re.push({ element: W, left: W.scrollLeft, top: W.scrollTop });
            for (typeof b.focus == "function" && b.focus(), b = 0; b < re.length; b++) {
              var ie = re[b];
              ((ie.element.scrollLeft = ie.left), (ie.element.scrollTop = ie.top));
            }
          }
          ((_r = !!_o), (Uo = _o = null));
        } finally {
          ((mt = l), ($.p = i), (R.T = a));
        }
      }
      ((e.current = t), (da = 2));
    }
  }
  function ph() {
    if (da === 2) {
      da = 0;
      var e = fi,
        t = wl,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = R.T), (R.T = null));
        var i = $.p;
        $.p = 2;
        var l = mt;
        mt |= 4;
        try {
          Gf(e, t.alternate, t);
        } finally {
          ((mt = l), ($.p = i), (R.T = a));
        }
      }
      da = 3;
    }
  }
  function gh() {
    if (da === 4 || da === 3) {
      ((da = 0), xa());
      var e = fi,
        t = wl,
        a = In,
        i = ah;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (da = 5) : ((da = 0), (wl = fi = null), xh(e, e.pendingLanes));
      var l = e.pendingLanes;
      if ((l === 0 && (di = null), Ue(a), (t = t.stateNode), U && typeof U.onCommitFiberRoot == "function"))
        try {
          U.onCommitFiberRoot(St, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        ((t = R.T), (l = $.p), ($.p = 2), (R.T = null));
        try {
          for (var s = e.onRecoverableError, f = 0; f < i.length; f++) {
            var b = i[f];
            s(b.value, { componentStack: b.stack });
          }
        } finally {
          ((R.T = t), ($.p = l));
        }
      }
      ((In & 3) !== 0 && Nr(), Mn(e), (l = e.pendingLanes), (a & 261930) !== 0 && (l & 42) !== 0 ? (e === So ? ps++ : ((ps = 0), (So = e))) : (ps = 0), gs(0));
    }
  }
  function xh(e, t) {
    (e.pooledCacheLanes &= t) === 0 && ((t = e.pooledCache), t != null && ((e.pooledCache = null), Jl(t)));
  }
  function Nr() {
    return (mh(), ph(), gh(), vh());
  }
  function vh() {
    if (da !== 5) return !1;
    var e = fi,
      t = yo;
    yo = 0;
    var a = Ue(In),
      i = R.T,
      l = $.p;
    try {
      (($.p = 32 > a ? 32 : a), (R.T = null), (a = jo), (jo = null));
      var s = fi,
        f = In;
      if (((da = 0), (wl = fi = null), (In = 0), (mt & 6) !== 0)) throw Error(c(331));
      var b = mt;
      if (((mt |= 4), Pf(s.current), Jf(s, s.current, f, a), (mt = b), gs(0, !1), U && typeof U.onPostCommitFiberRoot == "function"))
        try {
          U.onPostCommitFiberRoot(St, s);
        } catch {}
      return !0;
    } finally {
      (($.p = l), (R.T = i), xh(e, t));
    }
  }
  function bh(e, t, a) {
    ((t = en(a, t)), (t = Pc(e.stateNode, t, 2)), (e = li(e, t, 2)), e !== null && (O(e, 2), Mn(e)));
  }
  function bt(e, t, a) {
    if (e.tag === 3) bh(e, e, a);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          bh(t, e, a);
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || (typeof i.componentDidCatch == "function" && (di === null || !di.has(i)))) {
            ((e = en(a, e)), (a = yf(2)), (i = li(t, a, 2)), i !== null && (jf(a, i, t, e), O(i, 2), Mn(i)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Co(e, t, a) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Ag();
      var l = new Set();
      i.set(t, l);
    } else ((l = i.get(t)), l === void 0 && ((l = new Set()), i.set(t, l)));
    l.has(a) || ((xo = !0), l.add(a), (e = Bg.bind(null, e, t, a)), t.then(e, e));
  }
  function Bg(e, t, a) {
    var i = e.pingCache;
    (i !== null && i.delete(t),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      Et === e && (at & a) === a && (Pt === 4 || (Pt === 3 && (at & 62914560) === at && 300 > We() - xr) ? (mt & 2) === 0 && Cl(e, 0) : (vo |= a), Nl === at && (Nl = 0)),
      Mn(e));
  }
  function yh(e, t) {
    (t === 0 && (t = ha()), (e = _i(e, t)), e !== null && (O(e, t), Mn(e)));
  }
  function Hg(e) {
    var t = e.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), yh(e, a));
  }
  function Lg(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var i = e.stateNode,
          l = e.memoizedState;
        l !== null && (a = l.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      case 22:
        i = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    (i !== null && i.delete(t), yh(e, a));
  }
  function Yg(e, t) {
    return zt(e, t);
  }
  var wr = null,
    kl = null,
    To = !1,
    Cr = !1,
    ko = !1,
    mi = 0;
  function Mn(e) {
    (e !== kl && e.next === null && (kl === null ? (wr = kl = e) : (kl = kl.next = e)), (Cr = !0), To || ((To = !0), Xg()));
  }
  function gs(e, t) {
    if (!ko && Cr) {
      ko = !0;
      do
        for (var a = !1, i = wr; i !== null;) {
          if (e !== 0) {
            var l = i.pendingLanes;
            if (l === 0) var s = 0;
            else {
              var f = i.suspendedLanes,
                b = i.pingedLanes;
              ((s = (1 << (31 - ve(42 | e) + 1)) - 1), (s &= l & ~(f & ~b)), (s = s & 201326741 ? (s & 201326741) | 1 : s ? s | 2 : 0));
            }
            s !== 0 && ((a = !0), wh(i, s));
          } else ((s = at), (s = Kt(i, i === Et ? s : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1)), (s & 3) === 0 || Jt(i, s) || ((a = !0), wh(i, s)));
          i = i.next;
        }
      while (a);
      ko = !1;
    }
  }
  function qg() {
    jh();
  }
  function jh() {
    Cr = To = !1;
    var e = 0;
    mi !== 0 && Fg() && (e = mi);
    for (var t = We(), a = null, i = wr; i !== null;) {
      var l = i.next,
        s = Sh(i, t);
      (s === 0 ? ((i.next = null), a === null ? (wr = l) : (a.next = l), l === null && (kl = a)) : ((a = i), (e !== 0 || (s & 3) !== 0) && (Cr = !0)), (i = l));
    }
    ((da !== 0 && da !== 5) || gs(e), mi !== 0 && (mi = 0));
  }
  function Sh(e, t) {
    for (var a = e.suspendedLanes, i = e.pingedLanes, l = e.expirationTimes, s = e.pendingLanes & -62914561; 0 < s;) {
      var f = 31 - ve(s),
        b = 1 << f,
        E = l[f];
      (E === -1 ? ((b & a) === 0 || (b & i) !== 0) && (l[f] = ca(b, t)) : E <= t && (e.expiredLanes |= b), (s &= ~b));
    }
    if (((t = Et), (a = at), (a = Kt(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)), (i = e.callbackNode), a === 0 || (e === t && (vt === 2 || vt === 9)) || e.cancelPendingCommit !== null))
      return (i !== null && i !== null && $e(i), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((a & 3) === 0 || Jt(e, a)) {
      if (((t = a & -a), t === e.callbackPriority)) return t;
      switch ((i !== null && $e(i), Ue(a))) {
        case 2:
        case 8:
          a = Rt;
          break;
        case 32:
          a = Gt;
          break;
        case 268435456:
          a = Dt;
          break;
        default:
          a = Gt;
      }
      return ((i = Nh.bind(null, e)), (a = zt(a, i)), (e.callbackPriority = t), (e.callbackNode = a), t);
    }
    return (i !== null && i !== null && $e(i), (e.callbackPriority = 2), (e.callbackNode = null), 2);
  }
  function Nh(e, t) {
    if (da !== 0 && da !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var a = e.callbackNode;
    if (Nr() && e.callbackNode !== a) return null;
    var i = at;
    return ((i = Kt(e, e === Et ? i : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)), i === 0 ? null : (ih(e, i, t), Sh(e, We()), e.callbackNode != null && e.callbackNode === a ? Nh.bind(null, e) : null));
  }
  function wh(e, t) {
    if (Nr()) return null;
    ih(e, t, !0);
  }
  function Xg() {
    ex(function () {
      (mt & 6) !== 0 ? zt(Xt, qg) : jh();
    });
  }
  function Mo() {
    if (mi === 0) {
      var e = fl;
      (e === 0 && ((e = Fe), (Fe <<= 1), (Fe & 261888) === 0 && (Fe = 256)), (mi = e));
    }
    return mi;
  }
  function Ch(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : z("" + e);
  }
  function Th(e, t) {
    var a = t.ownerDocument.createElement("input");
    return ((a.name = t.name), (a.value = t.value), e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), (e = new FormData(e)), a.parentNode.removeChild(a), e);
  }
  function Gg(e, t, a, i, l) {
    if (t === "submit" && a && a.stateNode === l) {
      var s = Ch((l[Nt] || null).action),
        f = i.submitter;
      f && ((t = (t = f[Nt] || null) ? Ch(t.formAction) : f.getAttribute("formAction")), t !== null && ((s = t), (f = null)));
      var b = new Ai("action", "action", null, i, l);
      e.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (mi !== 0) {
                  var E = f ? Th(l, f) : new FormData(l);
                  Ic(a, { pending: !0, data: E, method: l.method, action: s }, null, E);
                }
              } else typeof s == "function" && (b.preventDefault(), (E = f ? Th(l, f) : new FormData(l)), Ic(a, { pending: !0, data: E, method: l.method, action: s }, s, E));
            },
            currentTarget: l,
          },
        ],
      });
    }
  }
  for (var zo = 0; zo < uc.length; zo++) {
    var Eo = uc[zo],
      Vg = Eo.toLowerCase(),
      $g = Eo[0].toUpperCase() + Eo.slice(1);
    fn(Vg, "on" + $g);
  }
  (fn(ad, "onAnimationEnd"),
    fn(nd, "onAnimationIteration"),
    fn(id, "onAnimationStart"),
    fn("dblclick", "onDoubleClick"),
    fn("focusin", "onFocus"),
    fn("focusout", "onBlur"),
    fn(rg, "onTransitionRun"),
    fn(cg, "onTransitionStart"),
    fn(og, "onTransitionCancel"),
    fn(ld, "onTransitionEnd"),
    on("onMouseEnter", ["mouseout", "mouseover"]),
    on("onMouseLeave", ["mouseout", "mouseover"]),
    on("onPointerEnter", ["pointerout", "pointerover"]),
    on("onPointerLeave", ["pointerout", "pointerover"]),
    Xa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Xa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Xa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Xa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Xa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Xa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")));
  var xs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Qg = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xs));
  function kh(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var i = e[a],
        l = i.event;
      i = i.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var f = i.length - 1; 0 <= f; f--) {
            var b = i[f],
              E = b.instance,
              q = b.currentTarget;
            if (((b = b.listener), E !== s && l.isPropagationStopped())) break e;
            ((s = b), (l.currentTarget = q));
            try {
              s(l);
            } catch (ae) {
              Ys(ae);
            }
            ((l.currentTarget = null), (s = E));
          }
        else
          for (f = 0; f < i.length; f++) {
            if (((b = i[f]), (E = b.instance), (q = b.currentTarget), (b = b.listener), E !== s && l.isPropagationStopped())) break e;
            ((s = b), (l.currentTarget = q));
            try {
              s(l);
            } catch (ae) {
              Ys(ae);
            }
            ((l.currentTarget = null), (s = E));
          }
      }
    }
  }
  function tt(e, t) {
    var a = t[se];
    a === void 0 && (a = t[se] = new Set());
    var i = e + "__bubble";
    a.has(i) || (Mh(t, e, 2, !1), a.add(i));
  }
  function Do(e, t, a) {
    var i = 0;
    (t && (i |= 4), Mh(a, e, i, t));
  }
  var Tr = "_reactListening" + Math.random().toString(36).slice(2);
  function Ao(e) {
    if (!e[Tr]) {
      ((e[Tr] = !0),
        Pi.forEach(function (a) {
          a !== "selectionchange" && (Qg.has(a) || Do(a, !1, e), Do(a, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Tr] || ((t[Tr] = !0), Do("selectionchange", !1, t));
    }
  }
  function Mh(e, t, a, i) {
    switch (nm(t)) {
      case 2:
        var l = yx;
        break;
      case 8:
        l = jx;
        break;
      default:
        l = Io;
    }
    ((a = l.bind(null, t, a, e)),
      (l = void 0),
      !Be || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0),
      i ? (l !== void 0 ? e.addEventListener(t, a, { capture: !0, passive: l }) : e.addEventListener(t, a, !0)) : l !== void 0 ? e.addEventListener(t, a, { passive: l }) : e.addEventListener(t, a, !1));
  }
  function Ro(e, t, a, i, l) {
    var s = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (;;) {
        if (i === null) return;
        var f = i.tag;
        if (f === 3 || f === 4) {
          var b = i.stateNode.containerInfo;
          if (b === l) break;
          if (f === 4)
            for (f = i.return; f !== null;) {
              var E = f.tag;
              if ((E === 3 || E === 4) && f.stateNode.containerInfo === l) return;
              f = f.return;
            }
          for (; b !== null;) {
            if (((f = Wa(b)), f === null)) return;
            if (((E = f.tag), E === 5 || E === 6 || E === 26 || E === 27)) {
              i = s = f;
              continue e;
            }
            b = b.parentNode;
          }
        }
        i = i.return;
      }
    Rn(function () {
      var q = s,
        ae = Xe(a),
        re = [];
      e: {
        var G = sd.get(e);
        if (G !== void 0) {
          var W = Ai,
            Me = e;
          switch (e) {
            case "keypress":
              if (Ei(a) === 0) break e;
            case "keydown":
            case "keyup":
              W = Lp;
              break;
            case "focusin":
              ((Me = "focus"), (W = tc));
              break;
            case "focusout":
              ((Me = "blur"), (W = tc));
              break;
            case "beforeblur":
            case "afterblur":
              W = tc;
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
              W = _u;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              W = kp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              W = Xp;
              break;
            case ad:
            case nd:
            case id:
              W = Ep;
              break;
            case ld:
              W = Vp;
              break;
            case "scroll":
            case "scrollend":
              W = Cp;
              break;
            case "wheel":
              W = Qp;
              break;
            case "copy":
            case "cut":
            case "paste":
              W = Ap;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              W = Bu;
              break;
            case "toggle":
            case "beforetoggle":
              W = Zp;
          }
          var Ye = (t & 4) !== 0,
            kt = !Ye && (e === "scroll" || e === "scrollend"),
            B = Ye ? (G !== null ? G + "Capture" : null) : G;
          Ye = [];
          for (var A = q, L; A !== null;) {
            var ie = A;
            if (((L = ie.stateNode), (ie = ie.tag), (ie !== 5 && ie !== 26 && ie !== 27) || L === null || B === null || ((ie = g(A, B)), ie != null && Ye.push(vs(A, ie, L))), kt)) break;
            A = A.return;
          }
          0 < Ye.length && ((G = new W(G, Me, null, a, ae)), re.push({ event: G, listeners: Ye }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (((G = e === "mouseover" || e === "pointerover"), (W = e === "mouseout" || e === "pointerout"), G && a !== ce && (Me = a.relatedTarget || a.fromElement) && (Wa(Me) || Me[ba]))) break e;
          if (
            (W || G) &&
            ((G = ae.window === ae ? ae : (G = ae.ownerDocument) ? G.defaultView || G.parentWindow : window),
            W ? ((Me = a.relatedTarget || a.toElement), (W = q), (Me = Me ? Wa(Me) : null), Me !== null && ((kt = d(Me)), (Ye = Me.tag), Me !== kt || (Ye !== 5 && Ye !== 27 && Ye !== 6)) && (Me = null)) : ((W = null), (Me = q)),
            W !== Me)
          ) {
            if (
              ((Ye = _u),
              (ie = "onMouseLeave"),
              (B = "onMouseEnter"),
              (A = "mouse"),
              (e === "pointerout" || e === "pointerover") && ((Ye = Bu), (ie = "onPointerLeave"), (B = "onPointerEnter"), (A = "pointer")),
              (kt = W == null ? G : Dn(W)),
              (L = Me == null ? G : Dn(Me)),
              (G = new Ye(ie, A + "leave", W, a, ae)),
              (G.target = kt),
              (G.relatedTarget = L),
              (ie = null),
              Wa(ae) === q && ((Ye = new Ye(B, A + "enter", Me, a, ae)), (Ye.target = L), (Ye.relatedTarget = kt), (ie = Ye)),
              (kt = ie),
              W && Me)
            )
              t: {
                for (Ye = Ig, B = W, A = Me, L = 0, ie = B; ie; ie = Ye(ie)) L++;
                ie = 0;
                for (var He = A; He; He = Ye(He)) ie++;
                for (; 0 < L - ie;) ((B = Ye(B)), L--);
                for (; 0 < ie - L;) ((A = Ye(A)), ie--);
                for (; L--;) {
                  if (B === A || (A !== null && B === A.alternate)) {
                    Ye = B;
                    break t;
                  }
                  ((B = Ye(B)), (A = Ye(A)));
                }
                Ye = null;
              }
            else Ye = null;
            (W !== null && zh(re, G, W, Ye, !1), Me !== null && kt !== null && zh(re, kt, Me, Ye, !0));
          }
        }
        e: {
          if (((G = q ? Dn(q) : window), (W = G.nodeName && G.nodeName.toLowerCase()), W === "select" || (W === "input" && G.type === "file"))) var dt = $u;
          else if (Gu(G))
            if (Qu) dt = ig;
            else {
              dt = ag;
              var Re = tg;
            }
          else ((W = G.nodeName), !W || W.toLowerCase() !== "input" || (G.type !== "checkbox" && G.type !== "radio") ? q && Sn(q.elementType) && (dt = $u) : (dt = ng));
          if (dt && (dt = dt(e, q))) {
            Vu(re, dt, a, ae);
            break e;
          }
          (Re && Re(e, G, q), e === "focusout" && q && G.type === "number" && q.memoizedProps.value != null && jn(G, "number", G.value));
        }
        switch (((Re = q ? Dn(q) : window), e)) {
          case "focusin":
            (Gu(Re) || Re.contentEditable === "true") && ((il = Re), (rc = q), (Il = null));
            break;
          case "focusout":
            Il = rc = il = null;
            break;
          case "mousedown":
            cc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((cc = !1), ed(re, a, ae));
            break;
          case "selectionchange":
            if (sg) break;
          case "keydown":
          case "keyup":
            ed(re, a, ae);
        }
        var Je;
        if (nc)
          e: {
            switch (e) {
              case "compositionstart":
                var nt = "onCompositionStart";
                break e;
              case "compositionend":
                nt = "onCompositionEnd";
                break e;
              case "compositionupdate":
                nt = "onCompositionUpdate";
                break e;
            }
            nt = void 0;
          }
        else nl ? qu(e, a) && (nt = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (nt = "onCompositionStart");
        (nt &&
          (Hu && a.locale !== "ko" && (nl || nt !== "onCompositionStart" ? nt === "onCompositionEnd" && nl && (Je = Bs()) : ((Ga = ae), (Yl = "value" in Ga ? Ga.value : Ga.textContent), (nl = !0))),
          (Re = kr(q, nt)),
          0 < Re.length && ((nt = new Uu(nt, e, null, a, ae)), re.push({ event: nt, listeners: Re }), Je ? (nt.data = Je) : ((Je = Xu(a)), Je !== null && (nt.data = Je)))),
          (Je = Jp ? Wp(e, a) : Fp(e, a)) && ((nt = kr(q, "onBeforeInput")), 0 < nt.length && ((Re = new Uu("onBeforeInput", "beforeinput", null, a, ae)), re.push({ event: Re, listeners: nt }), (Re.data = Je))),
          Gg(re, e, q, a, ae));
      }
      kh(re, t);
    });
  }
  function vs(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function kr(e, t) {
    for (var a = t + "Capture", i = []; e !== null;) {
      var l = e,
        s = l.stateNode;
      if (((l = l.tag), (l !== 5 && l !== 26 && l !== 27) || s === null || ((l = g(e, a)), l != null && i.unshift(vs(e, l, s)), (l = g(e, t)), l != null && i.push(vs(e, l, s))), e.tag === 3)) return i;
      e = e.return;
    }
    return [];
  }
  function Ig(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function zh(e, t, a, i, l) {
    for (var s = t._reactName, f = []; a !== null && a !== i;) {
      var b = a,
        E = b.alternate,
        q = b.stateNode;
      if (((b = b.tag), E !== null && E === i)) break;
      ((b !== 5 && b !== 26 && b !== 27) || q === null || ((E = q), l ? ((q = g(a, s)), q != null && f.unshift(vs(a, q, E))) : l || ((q = g(a, s)), q != null && f.push(vs(a, q, E)))), (a = a.return));
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var Zg = /\r\n?/g,
    Kg = /\u0000|\uFFFD/g;
  function Eh(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Zg,
        `
`,
      )
      .replace(Kg, "");
  }
  function Dh(e, t) {
    return ((t = Eh(t)), Eh(e) === t);
  }
  function Tt(e, t, a, i, l, s) {
    switch (a) {
      case "children":
        typeof i == "string" ? t === "body" || (t === "textarea" && i === "") || dn(e, i) : (typeof i == "number" || typeof i == "bigint") && t !== "body" && dn(e, "" + i);
        break;
      case "className":
        An(e, "class", i);
        break;
      case "tabIndex":
        An(e, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        An(e, a, i);
        break;
      case "style":
        Aa(e, i, s);
        break;
      case "data":
        if (t !== "object") {
          An(e, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(a);
          break;
        }
        ((i = z("" + i)), e.setAttribute(a, i));
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof s == "function" &&
            (a === "formAction"
              ? (t !== "input" && Tt(e, t, "name", l.name, l, null), Tt(e, t, "formEncType", l.formEncType, l, null), Tt(e, t, "formMethod", l.formMethod, l, null), Tt(e, t, "formTarget", l.formTarget, l, null))
              : (Tt(e, t, "encType", l.encType, l, null), Tt(e, t, "method", l.method, l, null), Tt(e, t, "target", l.target, l, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(a);
          break;
        }
        ((i = z("" + i)), e.setAttribute(a, i));
        break;
      case "onClick":
        i != null && (e.onclick = te);
        break;
      case "onScroll":
        i != null && tt("scroll", e);
        break;
      case "onScrollEnd":
        i != null && tt("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(c(61));
          if (((a = i.__html), a != null)) {
            if (l.children != null) throw Error(c(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        e.muted = i && typeof i != "function" && typeof i != "symbol";
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
        if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        ((a = z("" + i)), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "" + i) : e.removeAttribute(a);
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
        i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, i) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? e.setAttribute(a, i) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : e.setAttribute(a, i);
        break;
      case "popover":
        (tt("beforetoggle", e), tt("toggle", e), bn(e, "popover", i));
        break;
      case "xlinkActuate":
        Ma(e, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        Ma(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        Ma(e, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        Ma(e, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        Ma(e, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        Ma(e, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        Ma(e, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        Ma(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        Ma(e, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        bn(e, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || (a[0] !== "o" && a[0] !== "O") || (a[1] !== "n" && a[1] !== "N")) && ((a = Wn.get(a) || a), bn(e, a, i));
    }
  }
  function Oo(e, t, a, i, l, s) {
    switch (a) {
      case "style":
        Aa(e, i, s);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(c(61));
          if (((a = i.__html), a != null)) {
            if (l.children != null) throw Error(c(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof i == "string" ? dn(e, i) : (typeof i == "number" || typeof i == "bigint") && dn(e, "" + i);
        break;
      case "onScroll":
        i != null && tt("scroll", e);
        break;
      case "onScrollEnd":
        i != null && tt("scrollend", e);
        break;
      case "onClick":
        i != null && (e.onclick = te);
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
        if (!el.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((l = a.endsWith("Capture")), (t = a.slice(2, l ? a.length - 7 : void 0)), (s = e[Nt] || null), (s = s != null ? s[a] : null), typeof s == "function" && e.removeEventListener(t, s, l), typeof i == "function")
            ) {
              (typeof s != "function" && s !== null && (a in e ? (e[a] = null) : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, l));
              break e;
            }
            a in e ? (e[a] = i) : i === !0 ? e.setAttribute(a, "") : bn(e, a, i);
          }
    }
  }
  function Na(e, t, a) {
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
        (tt("error", e), tt("load", e));
        var i = !1,
          l = !1,
          s;
        for (s in a)
          if (a.hasOwnProperty(s)) {
            var f = a[s];
            if (f != null)
              switch (s) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  l = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, t));
                default:
                  Tt(e, t, s, f, a, null);
              }
          }
        (l && Tt(e, t, "srcSet", a.srcSet, a, null), i && Tt(e, t, "src", a.src, a, null));
        return;
      case "input":
        tt("invalid", e);
        var b = (s = f = l = null),
          E = null,
          q = null;
        for (i in a)
          if (a.hasOwnProperty(i)) {
            var ae = a[i];
            if (ae != null)
              switch (i) {
                case "name":
                  l = ae;
                  break;
                case "type":
                  f = ae;
                  break;
                case "checked":
                  E = ae;
                  break;
                case "defaultChecked":
                  q = ae;
                  break;
                case "value":
                  s = ae;
                  break;
                case "defaultValue":
                  b = ae;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (ae != null) throw Error(c(137, t));
                  break;
                default:
                  Tt(e, t, i, ae, a, null);
              }
          }
        yn(e, s, b, E, q, f, l, !1);
        return;
      case "select":
        (tt("invalid", e), (i = f = s = null));
        for (l in a)
          if (a.hasOwnProperty(l) && ((b = a[l]), b != null))
            switch (l) {
              case "value":
                s = b;
                break;
              case "defaultValue":
                f = b;
                break;
              case "multiple":
                i = b;
              default:
                Tt(e, t, l, b, a, null);
            }
        ((t = s), (a = f), (e.multiple = !!i), t != null ? Da(e, !!i, t, !1) : a != null && Da(e, !!i, a, !0));
        return;
      case "textarea":
        (tt("invalid", e), (s = l = i = null));
        for (f in a)
          if (a.hasOwnProperty(f) && ((b = a[f]), b != null))
            switch (f) {
              case "value":
                i = b;
                break;
              case "defaultValue":
                l = b;
                break;
              case "children":
                s = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(c(91));
                break;
              default:
                Tt(e, t, f, b, a, null);
            }
        wt(e, i, l, s);
        return;
      case "option":
        for (E in a)
          if (a.hasOwnProperty(E) && ((i = a[E]), i != null))
            switch (E) {
              case "selected":
                e.selected = i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                Tt(e, t, E, i, a, null);
            }
        return;
      case "dialog":
        (tt("beforetoggle", e), tt("toggle", e), tt("cancel", e), tt("close", e));
        break;
      case "iframe":
      case "object":
        tt("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < xs.length; i++) tt(xs[i], e);
        break;
      case "image":
        (tt("error", e), tt("load", e));
        break;
      case "details":
        tt("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (tt("error", e), tt("load", e));
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
        for (q in a)
          if (a.hasOwnProperty(q) && ((i = a[q]), i != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                Tt(e, t, q, i, a, null);
            }
        return;
      default:
        if (Sn(t)) {
          for (ae in a) a.hasOwnProperty(ae) && ((i = a[ae]), i !== void 0 && Oo(e, t, ae, i, a, void 0));
          return;
        }
    }
    for (b in a) a.hasOwnProperty(b) && ((i = a[b]), i != null && Tt(e, t, b, i, a, null));
  }
  function Jg(e, t, a, i) {
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
        var l = null,
          s = null,
          f = null,
          b = null,
          E = null,
          q = null,
          ae = null;
        for (W in a) {
          var re = a[W];
          if (a.hasOwnProperty(W) && re != null)
            switch (W) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = re;
              default:
                i.hasOwnProperty(W) || Tt(e, t, W, null, i, re);
            }
        }
        for (var G in i) {
          var W = i[G];
          if (((re = a[G]), i.hasOwnProperty(G) && (W != null || re != null)))
            switch (G) {
              case "type":
                s = W;
                break;
              case "name":
                l = W;
                break;
              case "checked":
                q = W;
                break;
              case "defaultChecked":
                ae = W;
                break;
              case "value":
                f = W;
                break;
              case "defaultValue":
                b = W;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (W != null) throw Error(c(137, t));
                break;
              default:
                W !== re && Tt(e, t, G, W, i, re);
            }
        }
        Ot(e, f, b, E, q, ae, s, l);
        return;
      case "select":
        W = f = b = G = null;
        for (s in a)
          if (((E = a[s]), a.hasOwnProperty(s) && E != null))
            switch (s) {
              case "value":
                break;
              case "multiple":
                W = E;
              default:
                i.hasOwnProperty(s) || Tt(e, t, s, null, i, E);
            }
        for (l in i)
          if (((s = i[l]), (E = a[l]), i.hasOwnProperty(l) && (s != null || E != null)))
            switch (l) {
              case "value":
                G = s;
                break;
              case "defaultValue":
                b = s;
                break;
              case "multiple":
                f = s;
              default:
                s !== E && Tt(e, t, l, s, i, E);
            }
        ((t = b), (a = f), (i = W), G != null ? Da(e, !!a, G, !1) : !!i != !!a && (t != null ? Da(e, !!a, t, !0) : Da(e, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        W = G = null;
        for (b in a)
          if (((l = a[b]), a.hasOwnProperty(b) && l != null && !i.hasOwnProperty(b)))
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                Tt(e, t, b, null, i, l);
            }
        for (f in i)
          if (((l = i[f]), (s = a[f]), i.hasOwnProperty(f) && (l != null || s != null)))
            switch (f) {
              case "value":
                G = l;
                break;
              case "defaultValue":
                W = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(c(91));
                break;
              default:
                l !== s && Tt(e, t, f, l, i, s);
            }
        Mi(e, G, W);
        return;
      case "option":
        for (var Me in a)
          if (((G = a[Me]), a.hasOwnProperty(Me) && G != null && !i.hasOwnProperty(Me)))
            switch (Me) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Tt(e, t, Me, null, i, G);
            }
        for (E in i)
          if (((G = i[E]), (W = a[E]), i.hasOwnProperty(E) && G !== W && (G != null || W != null)))
            switch (E) {
              case "selected":
                e.selected = G && typeof G != "function" && typeof G != "symbol";
                break;
              default:
                Tt(e, t, E, G, i, W);
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
        for (var Ye in a) ((G = a[Ye]), a.hasOwnProperty(Ye) && G != null && !i.hasOwnProperty(Ye) && Tt(e, t, Ye, null, i, G));
        for (q in i)
          if (((G = i[q]), (W = a[q]), i.hasOwnProperty(q) && G !== W && (G != null || W != null)))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (G != null) throw Error(c(137, t));
                break;
              default:
                Tt(e, t, q, G, i, W);
            }
        return;
      default:
        if (Sn(t)) {
          for (var kt in a) ((G = a[kt]), a.hasOwnProperty(kt) && G !== void 0 && !i.hasOwnProperty(kt) && Oo(e, t, kt, void 0, i, G));
          for (ae in i) ((G = i[ae]), (W = a[ae]), !i.hasOwnProperty(ae) || G === W || (G === void 0 && W === void 0) || Oo(e, t, ae, G, i, W));
          return;
        }
    }
    for (var B in a) ((G = a[B]), a.hasOwnProperty(B) && G != null && !i.hasOwnProperty(B) && Tt(e, t, B, null, i, G));
    for (re in i) ((G = i[re]), (W = a[re]), !i.hasOwnProperty(re) || G === W || (G == null && W == null) || Tt(e, t, re, G, i, W));
  }
  function Ah(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Wg() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), i = 0; i < a.length; i++) {
        var l = a[i],
          s = l.transferSize,
          f = l.initiatorType,
          b = l.duration;
        if (s && b && Ah(f)) {
          for (f = 0, b = l.responseEnd, i += 1; i < a.length; i++) {
            var E = a[i],
              q = E.startTime;
            if (q > b) break;
            var ae = E.transferSize,
              re = E.initiatorType;
            ae && Ah(re) && ((E = E.responseEnd), (f += ae * (E < b ? 1 : (b - q) / (E - q))));
          }
          if ((--i, (t += (8 * (s + f)) / (l.duration / 1e3)), e++, 10 < e)) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && ((e = navigator.connection.downlink), typeof e == "number") ? e : 5;
  }
  var _o = null,
    Uo = null;
  function Mr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Rh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Oh(e, t) {
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
  function Bo(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ho = null;
  function Fg() {
    var e = window.event;
    return e && e.type === "popstate" ? (e === Ho ? !1 : ((Ho = e), !0)) : ((Ho = null), !1);
  }
  var _h = typeof setTimeout == "function" ? setTimeout : void 0,
    Pg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Uh = typeof Promise == "function" ? Promise : void 0,
    ex =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Uh < "u"
          ? function (e) {
              return Uh.resolve(null).then(e).catch(tx);
            }
          : _h;
  function tx(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function pi(e) {
    return e === "head";
  }
  function Bh(e, t) {
    var a = t,
      i = 0;
    do {
      var l = a.nextSibling;
      if ((e.removeChild(a), l && l.nodeType === 8))
        if (((a = l.data), a === "/$" || a === "/&")) {
          if (i === 0) {
            (e.removeChild(l), Dl(t));
            return;
          }
          i--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") i++;
        else if (a === "html") bs(e.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = e.ownerDocument.head), bs(a));
          for (var s = a.firstChild; s;) {
            var f = s.nextSibling,
              b = s.nodeName;
            (s[Wt] || b === "SCRIPT" || b === "STYLE" || (b === "LINK" && s.rel.toLowerCase() === "stylesheet") || a.removeChild(s), (s = f));
          }
        } else a === "body" && bs(e.ownerDocument.body);
      a = l;
    } while (a);
    Dl(t);
  }
  function Hh(e, t) {
    var a = e;
    e = 0;
    do {
      var i = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display), (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""), a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 && (t ? ((a._stashedText = a.nodeValue), (a.nodeValue = "")) : (a.nodeValue = a._stashedText || "")),
        i && i.nodeType === 8)
      )
        if (((a = i.data), a === "/$")) {
          if (e === 0) break;
          e--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || e++;
      a = i;
    } while (a);
  }
  function Lo(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Lo(a), xn(a));
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
  function ax(e, t, a, i) {
    for (; e.nodeType === 1;) {
      var l = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (i) {
        if (!e[Wt])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (((s = e.getAttribute("rel")), s === "stylesheet" && e.hasAttribute("data-precedence"))) break;
              if (
                s !== l.rel ||
                e.getAttribute("href") !== (l.href == null || l.href === "" ? null : l.href) ||
                e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin) ||
                e.getAttribute("title") !== (l.title == null ? null : l.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((s = e.getAttribute("src")),
                (s !== (l.src == null ? null : l.src) || e.getAttribute("type") !== (l.type == null ? null : l.type) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin)) &&
                  s &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var s = l.name == null ? null : "" + l.name;
        if (l.type === "hidden" && e.getAttribute("name") === s) return e;
      } else return e;
      if (((e = sn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function nx(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3;) if (((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a) || ((e = sn(e.nextSibling)), e === null)) return null;
    return e;
  }
  function Lh(e, t) {
    for (; e.nodeType !== 8;) if (((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t) || ((e = sn(e.nextSibling)), e === null)) return null;
    return e;
  }
  function Yo(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function qo(e) {
    return e.data === "$!" || (e.data === "$?" && e.ownerDocument.readyState !== "loading");
  }
  function ix(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading") t();
    else {
      var i = function () {
        (t(), a.removeEventListener("DOMContentLoaded", i));
      };
      (a.addEventListener("DOMContentLoaded", i), (e._reactRetry = i));
    }
  }
  function sn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")) break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Xo = null;
  function Yh(e) {
    e = e.nextSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return sn(e.nextSibling);
          t--;
        } else (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function qh(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Xh(e, t, a) {
    switch (((t = Mr(a)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(c(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(c(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(c(454));
        return e;
      default:
        throw Error(c(451));
    }
  }
  function bs(e) {
    for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
    xn(e);
  }
  var rn = new Map(),
    Gh = new Set();
  function zr(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Zn = $.d;
  $.d = { f: lx, r: sx, D: rx, C: cx, L: ox, m: ux, X: fx, S: dx, M: hx };
  function lx() {
    var e = Zn.f(),
      t = yr();
    return e || t;
  }
  function sx(e) {
    var t = qa(e);
    t !== null && t.tag === 5 && t.type === "form" ? sf(t) : Zn.r(e);
  }
  var Ml = typeof document > "u" ? null : document;
  function Vh(e, t, a) {
    var i = Ml;
    if (i && typeof t == "string" && t) {
      var l = ua(t);
      ((l = 'link[rel="' + e + '"][href="' + l + '"]'),
        typeof a == "string" && (l += '[crossorigin="' + a + '"]'),
        Gh.has(l) || (Gh.add(l), (e = { rel: e, crossOrigin: a, href: t }), i.querySelector(l) === null && ((t = i.createElement("link")), Na(t, "link", e), Qt(t), i.head.appendChild(t))));
    }
  }
  function rx(e) {
    (Zn.D(e), Vh("dns-prefetch", e, null));
  }
  function cx(e, t) {
    (Zn.C(e, t), Vh("preconnect", e, t));
  }
  function ox(e, t, a) {
    Zn.L(e, t, a);
    var i = Ml;
    if (i && e && t) {
      var l = 'link[rel="preload"][as="' + ua(t) + '"]';
      t === "image" && a && a.imageSrcSet ? ((l += '[imagesrcset="' + ua(a.imageSrcSet) + '"]'), typeof a.imageSizes == "string" && (l += '[imagesizes="' + ua(a.imageSizes) + '"]')) : (l += '[href="' + ua(e) + '"]');
      var s = l;
      switch (t) {
        case "style":
          s = zl(e);
          break;
        case "script":
          s = El(e);
      }
      rn.has(s) ||
        ((e = S({ rel: "preload", href: t === "image" && a && a.imageSrcSet ? void 0 : e, as: t }, a)),
        rn.set(s, e),
        i.querySelector(l) !== null || (t === "style" && i.querySelector(ys(s))) || (t === "script" && i.querySelector(js(s))) || ((t = i.createElement("link")), Na(t, "link", e), Qt(t), i.head.appendChild(t)));
    }
  }
  function ux(e, t) {
    Zn.m(e, t);
    var a = Ml;
    if (a && e) {
      var i = t && typeof t.as == "string" ? t.as : "script",
        l = 'link[rel="modulepreload"][as="' + ua(i) + '"][href="' + ua(e) + '"]',
        s = l;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = El(e);
      }
      if (!rn.has(s) && ((e = S({ rel: "modulepreload", href: e }, t)), rn.set(s, e), a.querySelector(l) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(js(s))) return;
        }
        ((i = a.createElement("link")), Na(i, "link", e), Qt(i), a.head.appendChild(i));
      }
    }
  }
  function dx(e, t, a) {
    Zn.S(e, t, a);
    var i = Ml;
    if (i && e) {
      var l = vn(i).hoistableStyles,
        s = zl(e);
      t = t || "default";
      var f = l.get(s);
      if (!f) {
        var b = { loading: 0, preload: null };
        if ((f = i.querySelector(ys(s)))) b.loading = 5;
        else {
          ((e = S({ rel: "stylesheet", href: e, "data-precedence": t }, a)), (a = rn.get(s)) && Go(e, a));
          var E = (f = i.createElement("link"));
          (Qt(E),
            Na(E, "link", e),
            (E._p = new Promise(function (q, ae) {
              ((E.onload = q), (E.onerror = ae));
            })),
            E.addEventListener("load", function () {
              b.loading |= 1;
            }),
            E.addEventListener("error", function () {
              b.loading |= 2;
            }),
            (b.loading |= 4),
            Er(f, t, i));
        }
        ((f = { type: "stylesheet", instance: f, count: 1, state: b }), l.set(s, f));
      }
    }
  }
  function fx(e, t) {
    Zn.X(e, t);
    var a = Ml;
    if (a && e) {
      var i = vn(a).hoistableScripts,
        l = El(e),
        s = i.get(l);
      s ||
        ((s = a.querySelector(js(l))),
        s || ((e = S({ src: e, async: !0 }, t)), (t = rn.get(l)) && Vo(e, t), (s = a.createElement("script")), Qt(s), Na(s, "link", e), a.head.appendChild(s)),
        (s = { type: "script", instance: s, count: 1, state: null }),
        i.set(l, s));
    }
  }
  function hx(e, t) {
    Zn.M(e, t);
    var a = Ml;
    if (a && e) {
      var i = vn(a).hoistableScripts,
        l = El(e),
        s = i.get(l);
      s ||
        ((s = a.querySelector(js(l))),
        s || ((e = S({ src: e, async: !0, type: "module" }, t)), (t = rn.get(l)) && Vo(e, t), (s = a.createElement("script")), Qt(s), Na(s, "link", e), a.head.appendChild(s)),
        (s = { type: "script", instance: s, count: 1, state: null }),
        i.set(l, s));
    }
  }
  function $h(e, t, a, i) {
    var l = (l = he.current) ? zr(l) : null;
    if (!l) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = zl(a.href)), (a = vn(l).hoistableStyles), (i = a.get(t)), i || ((i = { type: "style", instance: null, count: 0, state: null }), a.set(t, i)), i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = zl(a.href);
          var s = vn(l).hoistableStyles,
            f = s.get(e);
          if (
            (f ||
              ((l = l.ownerDocument || l),
              (f = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }),
              s.set(e, f),
              (s = l.querySelector(ys(e))) && !s._p && ((f.instance = s), (f.state.loading = 5)),
              rn.has(e) || ((a = { rel: "preload", as: "style", href: a.href, crossOrigin: a.crossOrigin, integrity: a.integrity, media: a.media, hrefLang: a.hrefLang, referrerPolicy: a.referrerPolicy }), rn.set(e, a), s || mx(l, e, a, f.state))),
            t && i === null)
          )
            throw Error(c(528, ""));
          return f;
        }
        if (t && i !== null) throw Error(c(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" && t && typeof t != "function" && typeof t != "symbol"
            ? ((t = El(a)), (a = vn(l).hoistableScripts), (i = a.get(t)), i || ((i = { type: "script", instance: null, count: 0, state: null }), a.set(t, i)), i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(c(444, e));
    }
  }
  function zl(e) {
    return 'href="' + ua(e) + '"';
  }
  function ys(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Qh(e) {
    return S({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function mx(e, t, a, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (i.loading = 1)
      : ((t = e.createElement("link")),
        (i.preload = t),
        t.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        Na(t, "link", a),
        Qt(t),
        e.head.appendChild(t));
  }
  function El(e) {
    return '[src="' + ua(e) + '"]';
  }
  function js(e) {
    return "script[async]" + e;
  }
  function Ih(e, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var i = e.querySelector('style[data-href~="' + ua(a.href) + '"]');
          if (i) return ((t.instance = i), Qt(i), i);
          var l = S({}, a, { "data-href": a.href, "data-precedence": a.precedence, href: null, precedence: null });
          return ((i = (e.ownerDocument || e).createElement("style")), Qt(i), Na(i, "style", l), Er(i, a.precedence, e), (t.instance = i));
        case "stylesheet":
          l = zl(a.href);
          var s = e.querySelector(ys(l));
          if (s) return ((t.state.loading |= 4), (t.instance = s), Qt(s), s);
          ((i = Qh(a)), (l = rn.get(l)) && Go(i, l), (s = (e.ownerDocument || e).createElement("link")), Qt(s));
          var f = s;
          return (
            (f._p = new Promise(function (b, E) {
              ((f.onload = b), (f.onerror = E));
            })),
            Na(s, "link", i),
            (t.state.loading |= 4),
            Er(s, a.precedence, e),
            (t.instance = s)
          );
        case "script":
          return (
            (s = El(a.src)),
            (l = e.querySelector(js(s)))
              ? ((t.instance = l), Qt(l), l)
              : ((i = a), (l = rn.get(s)) && ((i = S({}, a)), Vo(i, l)), (e = e.ownerDocument || e), (l = e.createElement("script")), Qt(l), Na(l, "link", i), e.head.appendChild(l), (t.instance = l))
          );
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && ((i = t.instance), (t.state.loading |= 4), Er(i, a.precedence, e));
    return t.instance;
  }
  function Er(e, t, a) {
    for (var i = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), l = i.length ? i[i.length - 1] : null, s = l, f = 0; f < i.length; f++) {
      var b = i[f];
      if (b.dataset.precedence === t) s = b;
      else if (s !== l) break;
    }
    s ? s.parentNode.insertBefore(e, s.nextSibling) : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild));
  }
  function Go(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title));
  }
  function Vo(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity));
  }
  var Dr = null;
  function Zh(e, t, a) {
    if (Dr === null) {
      var i = new Map(),
        l = (Dr = new Map());
      l.set(a, i);
    } else ((l = Dr), (i = l.get(a)), i || ((i = new Map()), l.set(a, i)));
    if (i.has(e)) return i;
    for (i.set(e, null), a = a.getElementsByTagName(e), l = 0; l < a.length; l++) {
      var s = a[l];
      if (!(s[Wt] || s[ht] || (e === "link" && s.getAttribute("rel") === "stylesheet")) && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = s.getAttribute(t) || "";
        f = e + f;
        var b = i.get(f);
        b ? b.push(s) : i.set(f, [s]);
      }
    }
    return i;
  }
  function Kh(e, t, a) {
    ((e = e.ownerDocument || e), e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null));
  }
  function px(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
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
            return ((e = t.disabled), typeof t.precedence == "string" && e == null);
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
    }
    return !1;
  }
  function Jh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function gx(e, t, a, i) {
    if (a.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var l = zl(i.href),
          s = t.querySelector(ys(l));
        if (s) {
          ((t = s._p), t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, (e = Ar.bind(e)), t.then(e, e)), (a.state.loading |= 4), (a.instance = s), Qt(s));
          return;
        }
        ((s = t.ownerDocument || t), (i = Qh(i)), (l = rn.get(l)) && Go(i, l), (s = s.createElement("link")), Qt(s));
        var f = s;
        ((f._p = new Promise(function (b, E) {
          ((f.onload = b), (f.onerror = E));
        })),
          Na(s, "link", i),
          (a.instance = s));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, (a = Ar.bind(e)), t.addEventListener("load", a), t.addEventListener("error", a)));
    }
  }
  var $o = 0;
  function xx(e, t) {
    return (
      e.stylesheets && e.count === 0 && Or(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (a) {
            var i = setTimeout(function () {
              if ((e.stylesheets && Or(e, e.stylesheets), e.unsuspend)) {
                var s = e.unsuspend;
                ((e.unsuspend = null), s());
              }
            }, 6e4 + t);
            0 < e.imgBytes && $o === 0 && ($o = 62500 * Wg());
            var l = setTimeout(
              function () {
                if (((e.waitingForImages = !1), e.count === 0 && (e.stylesheets && Or(e, e.stylesheets), e.unsuspend))) {
                  var s = e.unsuspend;
                  ((e.unsuspend = null), s());
                }
              },
              (e.imgBytes > $o ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = a),
              function () {
                ((e.unsuspend = null), clearTimeout(i), clearTimeout(l));
              }
            );
          }
        : null
    );
  }
  function Ar() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) Or(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Rr = null;
  function Or(e, t) {
    ((e.stylesheets = null), e.unsuspend !== null && (e.count++, (Rr = new Map()), t.forEach(vx, e), (Rr = null), Ar.call(e)));
  }
  function vx(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Rr.get(e);
      if (a) var i = a.get(null);
      else {
        ((a = new Map()), Rr.set(e, a));
        for (var l = e.querySelectorAll("link[data-precedence],style[data-precedence]"), s = 0; s < l.length; s++) {
          var f = l[s];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (a.set(f.dataset.precedence, f), (i = f));
        }
        i && a.set(null, i);
      }
      ((l = t.instance),
        (f = l.getAttribute("data-precedence")),
        (s = a.get(f) || i),
        s === i && a.set(null, l),
        a.set(f, l),
        this.count++,
        (i = Ar.bind(this)),
        l.addEventListener("load", i),
        l.addEventListener("error", i),
        s ? s.parentNode.insertBefore(l, s.nextSibling) : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(l, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Ss = { $$typeof: V, Provider: null, Consumer: null, _currentValue: le, _currentValue2: le, _threadCount: 0 };
  function bx(e, t, a, i, l, s, f, b, E) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
      (this.callbackPriority = 0),
      (this.expirationTimes = va(-1)),
      (this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
      (this.entanglements = va(0)),
      (this.hiddenUpdates = va(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = l),
      (this.onCaughtError = s),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = E),
      (this.incompleteTransitions = new Map()));
  }
  function Wh(e, t, a, i, l, s, f, b, E, q, ae, re) {
    return (
      (e = new bx(e, t, a, f, E, q, ae, re, b)),
      (t = 1),
      s === !0 && (t |= 24),
      (s = $a(3, null, null, t)),
      (e.current = s),
      (s.stateNode = e),
      (t = Nc()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (s.memoizedState = { element: i, isDehydrated: a, cache: t }),
      kc(s),
      e
    );
  }
  function Fh(e) {
    return e ? ((e = rl), e) : rl;
  }
  function Ph(e, t, a, i, l, s) {
    ((l = Fh(l)), i.context === null ? (i.context = l) : (i.pendingContext = l), (i = ii(t)), (i.payload = { element: a }), (s = s === void 0 ? null : s), s !== null && (i.callback = s), (a = li(e, i, t)), a !== null && (Ba(a, e, t), es(a, e, t)));
  }
  function em(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Qo(e, t) {
    (em(e, t), (e = e.alternate) && em(e, t));
  }
  function tm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = _i(e, 67108864);
      (t !== null && Ba(t, e, 67108864), Qo(e, 67108864));
    }
  }
  function am(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ja();
      t = De(t);
      var a = _i(e, t);
      (a !== null && Ba(a, e, t), Qo(e, t));
    }
  }
  var _r = !0;
  function yx(e, t, a, i) {
    var l = R.T;
    R.T = null;
    var s = $.p;
    try {
      (($.p = 2), Io(e, t, a, i));
    } finally {
      (($.p = s), (R.T = l));
    }
  }
  function jx(e, t, a, i) {
    var l = R.T;
    R.T = null;
    var s = $.p;
    try {
      (($.p = 8), Io(e, t, a, i));
    } finally {
      (($.p = s), (R.T = l));
    }
  }
  function Io(e, t, a, i) {
    if (_r) {
      var l = Zo(i);
      if (l === null) (Ro(e, t, i, Ur, a), im(e, i));
      else if (Nx(l, e, t, a, i)) i.stopPropagation();
      else if ((im(e, i), t & 4 && -1 < Sx.indexOf(e))) {
        for (; l !== null;) {
          var s = qa(l);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (((s = s.stateNode), s.current.memoizedState.isDehydrated)) {
                  var f = xt(s.pendingLanes);
                  if (f !== 0) {
                    var b = s;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; f;) {
                      var E = 1 << (31 - ve(f));
                      ((b.entanglements[1] |= E), (f &= ~E));
                    }
                    (Mn(s), (mt & 6) === 0 && ((vr = We() + 500), gs(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((b = _i(s, 2)), b !== null && Ba(b, s, 2), yr(), Qo(s, 2));
            }
          if (((s = Zo(i)), s === null && Ro(e, t, i, Ur, a), s === l)) break;
          l = s;
        }
        l !== null && i.stopPropagation();
      } else Ro(e, t, i, null, a);
    }
  }
  function Zo(e) {
    return ((e = Xe(e)), Ko(e));
  }
  var Ur = null;
  function Ko(e) {
    if (((Ur = null), (e = Wa(e)), e !== null)) {
      var t = d(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((e = h(t)), e !== null)) return e;
          e = null;
        } else if (a === 31) {
          if (((e = v(t)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Ur = e), null);
  }
  function nm(e) {
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
        switch (It()) {
          case Xt:
            return 2;
          case Rt:
            return 8;
          case Gt:
          case Zt:
            return 32;
          case Dt:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Jo = !1,
    gi = null,
    xi = null,
    vi = null,
    Ns = new Map(),
    ws = new Map(),
    bi = [],
    Sx =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function im(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        gi = null;
        break;
      case "dragenter":
      case "dragleave":
        xi = null;
        break;
      case "mouseover":
      case "mouseout":
        vi = null;
        break;
      case "pointerover":
      case "pointerout":
        Ns.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ws.delete(t.pointerId);
    }
  }
  function Cs(e, t, a, i, l, s) {
    return e === null || e.nativeEvent !== s
      ? ((e = { blockedOn: t, domEventName: a, eventSystemFlags: i, nativeEvent: s, targetContainers: [l] }), t !== null && ((t = qa(t)), t !== null && tm(t)), e)
      : ((e.eventSystemFlags |= i), (t = e.targetContainers), l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Nx(e, t, a, i, l) {
    switch (t) {
      case "focusin":
        return ((gi = Cs(gi, e, t, a, i, l)), !0);
      case "dragenter":
        return ((xi = Cs(xi, e, t, a, i, l)), !0);
      case "mouseover":
        return ((vi = Cs(vi, e, t, a, i, l)), !0);
      case "pointerover":
        var s = l.pointerId;
        return (Ns.set(s, Cs(Ns.get(s) || null, e, t, a, i, l)), !0);
      case "gotpointercapture":
        return ((s = l.pointerId), ws.set(s, Cs(ws.get(s) || null, e, t, a, i, l)), !0);
    }
    return !1;
  }
  function lm(e) {
    var t = Wa(e.target);
    if (t !== null) {
      var a = d(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = h(a)), t !== null)) {
            ((e.blockedOn = t),
              Le(e.priority, function () {
                am(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = v(a)), t !== null)) {
            ((e.blockedOn = t),
              Le(e.priority, function () {
                am(a);
              }));
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
  function Br(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var a = Zo(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var i = new a.constructor(a.type, a);
        ((ce = i), a.target.dispatchEvent(i), (ce = null));
      } else return ((t = qa(a)), t !== null && tm(t), (e.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function sm(e, t, a) {
    Br(e) && a.delete(t);
  }
  function wx() {
    ((Jo = !1), gi !== null && Br(gi) && (gi = null), xi !== null && Br(xi) && (xi = null), vi !== null && Br(vi) && (vi = null), Ns.forEach(sm), ws.forEach(sm));
  }
  function Hr(e, t) {
    e.blockedOn === t && ((e.blockedOn = null), Jo || ((Jo = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, wx)));
  }
  var Lr = null;
  function rm(e) {
    Lr !== e &&
      ((Lr = e),
      r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
        Lr === e && (Lr = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t],
            i = e[t + 1],
            l = e[t + 2];
          if (typeof i != "function") {
            if (Ko(i || a) === null) continue;
            break;
          }
          var s = qa(a);
          s !== null && (e.splice(t, 3), (t -= 3), Ic(s, { pending: !0, data: l, method: a.method, action: i }, i, l));
        }
      }));
  }
  function Dl(e) {
    function t(E) {
      return Hr(E, e);
    }
    (gi !== null && Hr(gi, e), xi !== null && Hr(xi, e), vi !== null && Hr(vi, e), Ns.forEach(t), ws.forEach(t));
    for (var a = 0; a < bi.length; a++) {
      var i = bi[a];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < bi.length && ((a = bi[0]), a.blockedOn === null);) (lm(a), a.blockedOn === null && bi.shift());
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (i = 0; i < a.length; i += 3) {
        var l = a[i],
          s = a[i + 1],
          f = l[Nt] || null;
        if (typeof s == "function") f || rm(a);
        else if (f) {
          var b = null;
          if (s && s.hasAttribute("formAction")) {
            if (((l = s), (f = s[Nt] || null))) b = f.formAction;
            else if (Ko(l) !== null) continue;
          } else b = f.action;
          (typeof b == "function" ? (a[i + 1] = b) : (a.splice(i, 3), (i -= 3)), rm(a));
        }
      }
  }
  function cm() {
    function e(s) {
      s.canIntercept &&
        s.info === "react-transition" &&
        s.intercept({
          handler: function () {
            return new Promise(function (f) {
              return (l = f);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (l !== null && (l(), (l = null)), i || setTimeout(a, 20));
    }
    function a() {
      if (!i && !navigation.transition) {
        var s = navigation.currentEntry;
        s && s.url != null && navigation.navigate(s.url, { state: s.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var i = !1,
        l = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((i = !0), navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), l !== null && (l(), (l = null)));
        }
      );
    }
  }
  function Wo(e) {
    this._internalRoot = e;
  }
  ((Yr.prototype.render = Wo.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      var a = t.current,
        i = Ja();
      Ph(a, i, e, t, null, null);
    }),
    (Yr.prototype.unmount = Wo.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Ph(e.current, 2, null, e, null, null), yr(), (t[ba] = null));
        }
      }));
  function Yr(e) {
    this._internalRoot = e;
  }
  Yr.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = _e();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < bi.length && t !== 0 && t < bi[a].priority; a++);
      (bi.splice(a, 0, e), a === 0 && lm(e));
    }
  };
  var om = u.version;
  if (om !== "19.2.8") throw Error(c(527, om, "19.2.8"));
  $.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(c(188)) : ((e = Object.keys(e).join(",")), Error(c(268, e)));
    return ((e = y(t)), (e = e !== null ? C(e) : null), (e = e === null ? null : e.stateNode), e);
  };
  var Cx = { bundleType: 0, version: "19.2.8", rendererPackageName: "react-dom", currentDispatcherRef: R, reconcilerVersion: "19.2.8" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qr.isDisabled && qr.supportsFiber)
      try {
        ((St = qr.inject(Cx)), (U = qr));
      } catch {}
  }
  return (
    (ks.createRoot = function (e, t) {
      if (!m(e)) throw Error(c(299));
      var a = !1,
        i = "",
        l = gf,
        s = xf,
        f = vf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (l = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (f = t.onRecoverableError)),
        (t = Wh(e, 1, !1, null, null, a, i, null, l, s, f, cm)),
        (e[ba] = t.current),
        Ao(e),
        new Wo(t)
      );
    }),
    (ks.hydrateRoot = function (e, t, a) {
      if (!m(e)) throw Error(c(299));
      var i = !1,
        l = "",
        s = gf,
        f = xf,
        b = vf,
        E = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (i = !0),
          a.identifierPrefix !== void 0 && (l = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (s = a.onUncaughtError),
          a.onCaughtError !== void 0 && (f = a.onCaughtError),
          a.onRecoverableError !== void 0 && (b = a.onRecoverableError),
          a.formState !== void 0 && (E = a.formState)),
        (t = Wh(e, 1, !0, t, a ?? null, i, l, E, s, f, b, cm)),
        (t.context = Fh(null)),
        (a = t.current),
        (i = Ja()),
        (i = De(i)),
        (l = ii(i)),
        (l.callback = null),
        li(a, l, i),
        (a = i),
        (t.current.lanes = a),
        O(t, a),
        Mn(t),
        (e[ba] = t.current),
        Ao(e),
        new Yr(t)
      );
    }),
    (ks.version = "19.2.8"),
    ks
  );
}
var bm;
function Bx() {
  if (bm) return eu.exports;
  bm = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (u) {
        console.error(u);
      }
  }
  return (r(), (eu.exports = Ux()), eu.exports);
}
var Hx = Bx();
/*!
 * Cropper.js v1.6.2
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-04-21T07:43:05.335Z
 */ function ym(r, u) {
  var o = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(r);
    (u &&
      (c = c.filter(function (m) {
        return Object.getOwnPropertyDescriptor(r, m).enumerable;
      })),
      o.push.apply(o, c));
  }
  return o;
}
function Vm(r) {
  for (var u = 1; u < arguments.length; u++) {
    var o = arguments[u] != null ? arguments[u] : {};
    u % 2
      ? ym(Object(o), !0).forEach(function (c) {
          Xx(r, c, o[c]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
        : ym(Object(o)).forEach(function (c) {
            Object.defineProperty(r, c, Object.getOwnPropertyDescriptor(o, c));
          });
  }
  return r;
}
function Lx(r, u) {
  if (typeof r != "object" || !r) return r;
  var o = r[Symbol.toPrimitive];
  if (o !== void 0) {
    var c = o.call(r, u);
    if (typeof c != "object") return c;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
function $m(r) {
  var u = Lx(r, "string");
  return typeof u == "symbol" ? u : u + "";
}
function ou(r) {
  "@babel/helpers - typeof";
  return (
    (ou =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (u) {
            return typeof u;
          }
        : function (u) {
            return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
          }),
    ou(r)
  );
}
function Yx(r, u) {
  if (!(r instanceof u)) throw new TypeError("Cannot call a class as a function");
}
function jm(r, u) {
  for (var o = 0; o < u.length; o++) {
    var c = u[o];
    ((c.enumerable = c.enumerable || !1), (c.configurable = !0), "value" in c && (c.writable = !0), Object.defineProperty(r, $m(c.key), c));
  }
}
function qx(r, u, o) {
  return (u && jm(r.prototype, u), o && jm(r, o), Object.defineProperty(r, "prototype", { writable: !1 }), r);
}
function Xx(r, u, o) {
  return ((u = $m(u)), u in r ? Object.defineProperty(r, u, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (r[u] = o), r);
}
function Qm(r) {
  return Gx(r) || Vx(r) || $x(r) || Qx();
}
function Gx(r) {
  if (Array.isArray(r)) return uu(r);
}
function Vx(r) {
  if ((typeof Symbol < "u" && r[Symbol.iterator] != null) || r["@@iterator"] != null) return Array.from(r);
}
function $x(r, u) {
  if (r) {
    if (typeof r == "string") return uu(r, u);
    var o = Object.prototype.toString.call(r).slice(8, -1);
    if ((o === "Object" && r.constructor && (o = r.constructor.name), o === "Map" || o === "Set")) return Array.from(r);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return uu(r, u);
  }
}
function uu(r, u) {
  (u == null || u > r.length) && (u = r.length);
  for (var o = 0, c = new Array(u); o < u; o++) c[o] = r[o];
  return c;
}
function Qx() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Fr = typeof window < "u" && typeof window.document < "u",
  En = Fr ? window : {},
  Nu = Fr && En.document.documentElement ? "ontouchstart" in En.document.documentElement : !1,
  wu = Fr ? "PointerEvent" in En : !1,
  Lt = "cropper",
  Cu = "all",
  Im = "crop",
  Zm = "move",
  Km = "zoom",
  Zi = "e",
  Ki = "w",
  Al = "s",
  ji = "n",
  Ms = "ne",
  zs = "nw",
  Es = "se",
  Ds = "sw",
  du = "".concat(Lt, "-crop"),
  Sm = "".concat(Lt, "-disabled"),
  La = "".concat(Lt, "-hidden"),
  Nm = "".concat(Lt, "-hide"),
  Ix = "".concat(Lt, "-invisible"),
  Zr = "".concat(Lt, "-modal"),
  fu = "".concat(Lt, "-move"),
  Os = "".concat(Lt, "Action"),
  Xr = "".concat(Lt, "Preview"),
  Tu = "crop",
  Jm = "move",
  Wm = "none",
  hu = "crop",
  mu = "cropend",
  pu = "cropmove",
  gu = "cropstart",
  wm = "dblclick",
  Zx = Nu ? "touchstart" : "mousedown",
  Kx = Nu ? "touchmove" : "mousemove",
  Jx = Nu ? "touchend touchcancel" : "mouseup",
  Cm = wu ? "pointerdown" : Zx,
  Tm = wu ? "pointermove" : Kx,
  km = wu ? "pointerup pointercancel" : Jx,
  Mm = "ready",
  zm = "resize",
  Em = "wheel",
  xu = "zoom",
  Dm = "image/jpeg",
  Wx = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,
  Fx = /^data:/,
  Px = /^data:image\/jpeg;base64,/,
  ev = /^img|canvas$/i,
  Fm = 200,
  Pm = 100,
  Am = {
    viewMode: 0,
    dragMode: Tu,
    initialAspectRatio: NaN,
    aspectRatio: NaN,
    data: null,
    preview: "",
    responsive: !0,
    restore: !0,
    checkCrossOrigin: !0,
    checkOrientation: !0,
    modal: !0,
    guides: !0,
    center: !0,
    highlight: !0,
    background: !0,
    autoCrop: !0,
    autoCropArea: 0.8,
    movable: !0,
    rotatable: !0,
    scalable: !0,
    zoomable: !0,
    zoomOnTouch: !0,
    zoomOnWheel: !0,
    wheelZoomRatio: 0.1,
    cropBoxMovable: !0,
    cropBoxResizable: !0,
    toggleDragModeOnDblclick: !0,
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: Fm,
    minContainerHeight: Pm,
    ready: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null,
  },
  tv =
    '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',
  av = Number.isNaN || En.isNaN;
function it(r) {
  return typeof r == "number" && !av(r);
}
var Rm = function (u) {
  return u > 0 && u < 1 / 0;
};
function iu(r) {
  return typeof r > "u";
}
function Fi(r) {
  return ou(r) === "object" && r !== null;
}
var nv = Object.prototype.hasOwnProperty;
function Ol(r) {
  if (!Fi(r)) return !1;
  try {
    var u = r.constructor,
      o = u.prototype;
    return u && o && nv.call(o, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function Ha(r) {
  return typeof r == "function";
}
var iv = Array.prototype.slice;
function ep(r) {
  return Array.from ? Array.from(r) : iv.call(r);
}
function ra(r, u) {
  return (
    r &&
      Ha(u) &&
      (Array.isArray(r) || it(r.length)
        ? ep(r).forEach(function (o, c) {
            u.call(r, o, c, r);
          })
        : Fi(r) &&
          Object.keys(r).forEach(function (o) {
            u.call(r, r[o], o, r);
          })),
    r
  );
}
var Yt =
    Object.assign ||
    function (u) {
      for (var o = arguments.length, c = new Array(o > 1 ? o - 1 : 0), m = 1; m < o; m++) c[m - 1] = arguments[m];
      return (
        Fi(u) &&
          c.length > 0 &&
          c.forEach(function (d) {
            Fi(d) &&
              Object.keys(d).forEach(function (h) {
                u[h] = d[h];
              });
          }),
        u
      );
    },
  lv = /\.\d*(?:0|9){12}\d*$/;
function Ul(r) {
  var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return lv.test(r) ? Math.round(r * u) / u : r;
}
var sv = /^width|height|left|top|marginLeft|marginTop$/;
function Si(r, u) {
  var o = r.style;
  ra(u, function (c, m) {
    (sv.test(m) && it(c) && (c = "".concat(c, "px")), (o[m] = c));
  });
}
function rv(r, u) {
  return r.classList ? r.classList.contains(u) : r.className.indexOf(u) > -1;
}
function ga(r, u) {
  if (u) {
    if (it(r.length)) {
      ra(r, function (c) {
        ga(c, u);
      });
      return;
    }
    if (r.classList) {
      r.classList.add(u);
      return;
    }
    var o = r.className.trim();
    o ? o.indexOf(u) < 0 && (r.className = "".concat(o, " ").concat(u)) : (r.className = u);
  }
}
function zn(r, u) {
  if (u) {
    if (it(r.length)) {
      ra(r, function (o) {
        zn(o, u);
      });
      return;
    }
    if (r.classList) {
      r.classList.remove(u);
      return;
    }
    r.className.indexOf(u) >= 0 && (r.className = r.className.replace(u, ""));
  }
}
function _l(r, u, o) {
  if (u) {
    if (it(r.length)) {
      ra(r, function (c) {
        _l(c, u, o);
      });
      return;
    }
    o ? ga(r, u) : zn(r, u);
  }
}
var cv = /([a-z\d])([A-Z])/g;
function ku(r) {
  return r.replace(cv, "$1-$2").toLowerCase();
}
function vu(r, u) {
  return Fi(r[u]) ? r[u] : r.dataset ? r.dataset[u] : r.getAttribute("data-".concat(ku(u)));
}
function _s(r, u, o) {
  Fi(o) ? (r[u] = o) : r.dataset ? (r.dataset[u] = o) : r.setAttribute("data-".concat(ku(u)), o);
}
function ov(r, u) {
  if (Fi(r[u]))
    try {
      delete r[u];
    } catch {
      r[u] = void 0;
    }
  else if (r.dataset)
    try {
      delete r.dataset[u];
    } catch {
      r.dataset[u] = void 0;
    }
  else r.removeAttribute("data-".concat(ku(u)));
}
var tp = /\s\s*/,
  ap = (function () {
    var r = !1;
    if (Fr) {
      var u = !1,
        o = function () {},
        c = Object.defineProperty({}, "once", {
          get: function () {
            return ((r = !0), u);
          },
          set: function (d) {
            u = d;
          },
        });
      (En.addEventListener("test", o, c), En.removeEventListener("test", o, c));
    }
    return r;
  })();
function pn(r, u, o) {
  var c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    m = o;
  u.trim()
    .split(tp)
    .forEach(function (d) {
      if (!ap) {
        var h = r.listeners;
        h && h[d] && h[d][o] && ((m = h[d][o]), delete h[d][o], Object.keys(h[d]).length === 0 && delete h[d], Object.keys(h).length === 0 && delete r.listeners);
      }
      r.removeEventListener(d, m, c);
    });
}
function cn(r, u, o) {
  var c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    m = o;
  u.trim()
    .split(tp)
    .forEach(function (d) {
      if (c.once && !ap) {
        var h = r.listeners,
          v = h === void 0 ? {} : h;
        ((m = function () {
          (delete v[d][o], r.removeEventListener(d, m, c));
          for (var y = arguments.length, C = new Array(y), S = 0; S < y; S++) C[S] = arguments[S];
          o.apply(r, C);
        }),
          v[d] || (v[d] = {}),
          v[d][o] && r.removeEventListener(d, v[d][o], c),
          (v[d][o] = m),
          (r.listeners = v));
      }
      r.addEventListener(d, m, c);
    });
}
function Bl(r, u, o) {
  var c;
  return (Ha(Event) && Ha(CustomEvent) ? (c = new CustomEvent(u, { detail: o, bubbles: !0, cancelable: !0 })) : ((c = document.createEvent("CustomEvent")), c.initCustomEvent(u, !0, !0, o)), r.dispatchEvent(c));
}
function np(r) {
  var u = r.getBoundingClientRect();
  return { left: u.left + (window.pageXOffset - document.documentElement.clientLeft), top: u.top + (window.pageYOffset - document.documentElement.clientTop) };
}
var lu = En.location,
  uv = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function Om(r) {
  var u = r.match(uv);
  return u !== null && (u[1] !== lu.protocol || u[2] !== lu.hostname || u[3] !== lu.port);
}
function _m(r) {
  var u = "timestamp=".concat(new Date().getTime());
  return r + (r.indexOf("?") === -1 ? "?" : "&") + u;
}
function Rs(r) {
  var u = r.rotate,
    o = r.scaleX,
    c = r.scaleY,
    m = r.translateX,
    d = r.translateY,
    h = [];
  (it(m) && m !== 0 && h.push("translateX(".concat(m, "px)")),
    it(d) && d !== 0 && h.push("translateY(".concat(d, "px)")),
    it(u) && u !== 0 && h.push("rotate(".concat(u, "deg)")),
    it(o) && o !== 1 && h.push("scaleX(".concat(o, ")")),
    it(c) && c !== 1 && h.push("scaleY(".concat(c, ")")));
  var v = h.length ? h.join(" ") : "none";
  return { WebkitTransform: v, msTransform: v, transform: v };
}
function dv(r) {
  var u = Vm({}, r),
    o = 0;
  return (
    ra(r, function (c, m) {
      (delete u[m],
        ra(u, function (d) {
          var h = Math.abs(c.startX - d.startX),
            v = Math.abs(c.startY - d.startY),
            j = Math.abs(c.endX - d.endX),
            y = Math.abs(c.endY - d.endY),
            C = Math.sqrt(h * h + v * v),
            S = Math.sqrt(j * j + y * y),
            T = (S - C) / C;
          Math.abs(T) > Math.abs(o) && (o = T);
        }));
    }),
    o
  );
}
function Gr(r, u) {
  var o = r.pageX,
    c = r.pageY,
    m = { endX: o, endY: c };
  return u ? m : Vm({ startX: o, startY: c }, m);
}
function fv(r) {
  var u = 0,
    o = 0,
    c = 0;
  return (
    ra(r, function (m) {
      var d = m.startX,
        h = m.startY;
      ((u += d), (o += h), (c += 1));
    }),
    (u /= c),
    (o /= c),
    { pageX: u, pageY: o }
  );
}
function Ni(r) {
  var u = r.aspectRatio,
    o = r.height,
    c = r.width,
    m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain",
    d = Rm(c),
    h = Rm(o);
  if (d && h) {
    var v = o * u;
    (m === "contain" && v > c) || (m === "cover" && v < c) ? (o = c / u) : (c = o * u);
  } else d ? (o = c / u) : h && (c = o * u);
  return { width: c, height: o };
}
function hv(r) {
  var u = r.width,
    o = r.height,
    c = r.degree;
  if (((c = Math.abs(c) % 180), c === 90)) return { width: o, height: u };
  var m = ((c % 90) * Math.PI) / 180,
    d = Math.sin(m),
    h = Math.cos(m),
    v = u * h + o * d,
    j = u * d + o * h;
  return c > 90 ? { width: j, height: v } : { width: v, height: j };
}
function mv(r, u, o, c) {
  var m = u.aspectRatio,
    d = u.naturalWidth,
    h = u.naturalHeight,
    v = u.rotate,
    j = v === void 0 ? 0 : v,
    y = u.scaleX,
    C = y === void 0 ? 1 : y,
    S = u.scaleY,
    T = S === void 0 ? 1 : S,
    H = o.aspectRatio,
    k = o.naturalWidth,
    X = o.naturalHeight,
    J = c.fillColor,
    D = J === void 0 ? "transparent" : J,
    I = c.imageSmoothingEnabled,
    V = I === void 0 ? !0 : I,
    de = c.imageSmoothingQuality,
    P = de === void 0 ? "low" : de,
    Y = c.maxWidth,
    K = Y === void 0 ? 1 / 0 : Y,
    F = c.maxHeight,
    Z = F === void 0 ? 1 / 0 : F,
    ye = c.minWidth,
    Ce = ye === void 0 ? 0 : ye,
    Se = c.minHeight,
    ke = Se === void 0 ? 0 : Se,
    Oe = document.createElement("canvas"),
    ue = Oe.getContext("2d"),
    R = Ni({ aspectRatio: H, width: K, height: Z }),
    $ = Ni({ aspectRatio: H, width: Ce, height: ke }, "cover"),
    le = Math.min(R.width, Math.max($.width, k)),
    fe = Math.min(R.height, Math.max($.height, X)),
    be = Ni({ aspectRatio: m, width: K, height: Z }),
    w = Ni({ aspectRatio: m, width: Ce, height: ke }, "cover"),
    x = Math.min(be.width, Math.max(w.width, d)),
    N = Math.min(be.height, Math.max(w.height, h)),
    _ = [-x / 2, -N / 2, x, N];
  return (
    (Oe.width = Ul(le)),
    (Oe.height = Ul(fe)),
    (ue.fillStyle = D),
    ue.fillRect(0, 0, le, fe),
    ue.save(),
    ue.translate(le / 2, fe / 2),
    ue.rotate((j * Math.PI) / 180),
    ue.scale(C, T),
    (ue.imageSmoothingEnabled = V),
    (ue.imageSmoothingQuality = P),
    ue.drawImage.apply(
      ue,
      [r].concat(
        Qm(
          _.map(function (ee) {
            return Math.floor(Ul(ee));
          }),
        ),
      ),
    ),
    ue.restore(),
    Oe
  );
}
var ip = String.fromCharCode;
function pv(r, u, o) {
  var c = "";
  o += u;
  for (var m = u; m < o; m += 1) c += ip(r.getUint8(m));
  return c;
}
var gv = /^data:.*,/;
function xv(r) {
  var u = r.replace(gv, ""),
    o = atob(u),
    c = new ArrayBuffer(o.length),
    m = new Uint8Array(c);
  return (
    ra(m, function (d, h) {
      m[h] = o.charCodeAt(h);
    }),
    c
  );
}
function vv(r, u) {
  for (var o = [], c = 8192, m = new Uint8Array(r); m.length > 0;) (o.push(ip.apply(null, ep(m.subarray(0, c)))), (m = m.subarray(c)));
  return "data:".concat(u, ";base64,").concat(btoa(o.join("")));
}
function bv(r) {
  var u = new DataView(r),
    o;
  try {
    var c, m, d;
    if (u.getUint8(0) === 255 && u.getUint8(1) === 216)
      for (var h = u.byteLength, v = 2; v + 1 < h;) {
        if (u.getUint8(v) === 255 && u.getUint8(v + 1) === 225) {
          m = v;
          break;
        }
        v += 1;
      }
    if (m) {
      var j = m + 4,
        y = m + 10;
      if (pv(u, j, 4) === "Exif") {
        var C = u.getUint16(y);
        if (((c = C === 18761), (c || C === 19789) && u.getUint16(y + 2, c) === 42)) {
          var S = u.getUint32(y + 4, c);
          S >= 8 && (d = y + S);
        }
      }
    }
    if (d) {
      var T = u.getUint16(d, c),
        H,
        k;
      for (k = 0; k < T; k += 1)
        if (((H = d + k * 12 + 2), u.getUint16(H, c) === 274)) {
          ((H += 8), (o = u.getUint16(H, c)), u.setUint16(H, 1, c));
          break;
        }
    }
  } catch {
    o = 1;
  }
  return o;
}
function yv(r) {
  var u = 0,
    o = 1,
    c = 1;
  switch (r) {
    case 2:
      o = -1;
      break;
    case 3:
      u = -180;
      break;
    case 4:
      c = -1;
      break;
    case 5:
      ((u = 90), (c = -1));
      break;
    case 6:
      u = 90;
      break;
    case 7:
      ((u = 90), (o = -1));
      break;
    case 8:
      u = -90;
      break;
  }
  return { rotate: u, scaleX: o, scaleY: c };
}
var jv = {
    render: function () {
      (this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox());
    },
    initContainer: function () {
      var u = this.element,
        o = this.options,
        c = this.container,
        m = this.cropper,
        d = Number(o.minContainerWidth),
        h = Number(o.minContainerHeight);
      (ga(m, La), zn(u, La));
      var v = { width: Math.max(c.offsetWidth, d >= 0 ? d : Fm), height: Math.max(c.offsetHeight, h >= 0 ? h : Pm) };
      ((this.containerData = v), Si(m, { width: v.width, height: v.height }), ga(u, La), zn(m, La));
    },
    initCanvas: function () {
      var u = this.containerData,
        o = this.imageData,
        c = this.options.viewMode,
        m = Math.abs(o.rotate) % 180 === 90,
        d = m ? o.naturalHeight : o.naturalWidth,
        h = m ? o.naturalWidth : o.naturalHeight,
        v = d / h,
        j = u.width,
        y = u.height;
      u.height * v > u.width ? (c === 3 ? (j = u.height * v) : (y = u.width / v)) : c === 3 ? (y = u.width / v) : (j = u.height * v);
      var C = { aspectRatio: v, naturalWidth: d, naturalHeight: h, width: j, height: y };
      ((this.canvasData = C),
        (this.limited = c === 1 || c === 2),
        this.limitCanvas(!0, !0),
        (C.width = Math.min(Math.max(C.width, C.minWidth), C.maxWidth)),
        (C.height = Math.min(Math.max(C.height, C.minHeight), C.maxHeight)),
        (C.left = (u.width - C.width) / 2),
        (C.top = (u.height - C.height) / 2),
        (C.oldLeft = C.left),
        (C.oldTop = C.top),
        (this.initialCanvasData = Yt({}, C)));
    },
    limitCanvas: function (u, o) {
      var c = this.options,
        m = this.containerData,
        d = this.canvasData,
        h = this.cropBoxData,
        v = c.viewMode,
        j = d.aspectRatio,
        y = this.cropped && h;
      if (u) {
        var C = Number(c.minCanvasWidth) || 0,
          S = Number(c.minCanvasHeight) || 0;
        v > 1
          ? ((C = Math.max(C, m.width)), (S = Math.max(S, m.height)), v === 3 && (S * j > C ? (C = S * j) : (S = C / j)))
          : v > 0 && (C ? (C = Math.max(C, y ? h.width : 0)) : S ? (S = Math.max(S, y ? h.height : 0)) : y && ((C = h.width), (S = h.height), S * j > C ? (C = S * j) : (S = C / j)));
        var T = Ni({ aspectRatio: j, width: C, height: S });
        ((C = T.width), (S = T.height), (d.minWidth = C), (d.minHeight = S), (d.maxWidth = 1 / 0), (d.maxHeight = 1 / 0));
      }
      if (o)
        if (v > (y ? 0 : 1)) {
          var H = m.width - d.width,
            k = m.height - d.height;
          ((d.minLeft = Math.min(0, H)),
            (d.minTop = Math.min(0, k)),
            (d.maxLeft = Math.max(0, H)),
            (d.maxTop = Math.max(0, k)),
            y &&
              this.limited &&
              ((d.minLeft = Math.min(h.left, h.left + (h.width - d.width))),
              (d.minTop = Math.min(h.top, h.top + (h.height - d.height))),
              (d.maxLeft = h.left),
              (d.maxTop = h.top),
              v === 2 && (d.width >= m.width && ((d.minLeft = Math.min(0, H)), (d.maxLeft = Math.max(0, H))), d.height >= m.height && ((d.minTop = Math.min(0, k)), (d.maxTop = Math.max(0, k))))));
        } else ((d.minLeft = -d.width), (d.minTop = -d.height), (d.maxLeft = m.width), (d.maxTop = m.height));
    },
    renderCanvas: function (u, o) {
      var c = this.canvasData,
        m = this.imageData;
      if (o) {
        var d = hv({ width: m.naturalWidth * Math.abs(m.scaleX || 1), height: m.naturalHeight * Math.abs(m.scaleY || 1), degree: m.rotate || 0 }),
          h = d.width,
          v = d.height,
          j = c.width * (h / c.naturalWidth),
          y = c.height * (v / c.naturalHeight);
        ((c.left -= (j - c.width) / 2), (c.top -= (y - c.height) / 2), (c.width = j), (c.height = y), (c.aspectRatio = h / v), (c.naturalWidth = h), (c.naturalHeight = v), this.limitCanvas(!0, !1));
      }
      ((c.width > c.maxWidth || c.width < c.minWidth) && (c.left = c.oldLeft),
        (c.height > c.maxHeight || c.height < c.minHeight) && (c.top = c.oldTop),
        (c.width = Math.min(Math.max(c.width, c.minWidth), c.maxWidth)),
        (c.height = Math.min(Math.max(c.height, c.minHeight), c.maxHeight)),
        this.limitCanvas(!1, !0),
        (c.left = Math.min(Math.max(c.left, c.minLeft), c.maxLeft)),
        (c.top = Math.min(Math.max(c.top, c.minTop), c.maxTop)),
        (c.oldLeft = c.left),
        (c.oldTop = c.top),
        Si(this.canvas, Yt({ width: c.width, height: c.height }, Rs({ translateX: c.left, translateY: c.top }))),
        this.renderImage(u),
        this.cropped && this.limited && this.limitCropBox(!0, !0));
    },
    renderImage: function (u) {
      var o = this.canvasData,
        c = this.imageData,
        m = c.naturalWidth * (o.width / o.naturalWidth),
        d = c.naturalHeight * (o.height / o.naturalHeight);
      (Yt(c, { width: m, height: d, left: (o.width - m) / 2, top: (o.height - d) / 2 }), Si(this.image, Yt({ width: c.width, height: c.height }, Rs(Yt({ translateX: c.left, translateY: c.top }, c)))), u && this.output());
    },
    initCropBox: function () {
      var u = this.options,
        o = this.canvasData,
        c = u.aspectRatio || u.initialAspectRatio,
        m = Number(u.autoCropArea) || 0.8,
        d = { width: o.width, height: o.height };
      (c && (o.height * c > o.width ? (d.height = d.width / c) : (d.width = d.height * c)),
        (this.cropBoxData = d),
        this.limitCropBox(!0, !0),
        (d.width = Math.min(Math.max(d.width, d.minWidth), d.maxWidth)),
        (d.height = Math.min(Math.max(d.height, d.minHeight), d.maxHeight)),
        (d.width = Math.max(d.minWidth, d.width * m)),
        (d.height = Math.max(d.minHeight, d.height * m)),
        (d.left = o.left + (o.width - d.width) / 2),
        (d.top = o.top + (o.height - d.height) / 2),
        (d.oldLeft = d.left),
        (d.oldTop = d.top),
        (this.initialCropBoxData = Yt({}, d)));
    },
    limitCropBox: function (u, o) {
      var c = this.options,
        m = this.containerData,
        d = this.canvasData,
        h = this.cropBoxData,
        v = this.limited,
        j = c.aspectRatio;
      if (u) {
        var y = Number(c.minCropBoxWidth) || 0,
          C = Number(c.minCropBoxHeight) || 0,
          S = v ? Math.min(m.width, d.width, d.width + d.left, m.width - d.left) : m.width,
          T = v ? Math.min(m.height, d.height, d.height + d.top, m.height - d.top) : m.height;
        ((y = Math.min(y, m.width)),
          (C = Math.min(C, m.height)),
          j && (y && C ? (C * j > y ? (C = y / j) : (y = C * j)) : y ? (C = y / j) : C && (y = C * j), T * j > S ? (T = S / j) : (S = T * j)),
          (h.minWidth = Math.min(y, S)),
          (h.minHeight = Math.min(C, T)),
          (h.maxWidth = S),
          (h.maxHeight = T));
      }
      o &&
        (v
          ? ((h.minLeft = Math.max(0, d.left)), (h.minTop = Math.max(0, d.top)), (h.maxLeft = Math.min(m.width, d.left + d.width) - h.width), (h.maxTop = Math.min(m.height, d.top + d.height) - h.height))
          : ((h.minLeft = 0), (h.minTop = 0), (h.maxLeft = m.width - h.width), (h.maxTop = m.height - h.height)));
    },
    renderCropBox: function () {
      var u = this.options,
        o = this.containerData,
        c = this.cropBoxData;
      ((c.width > c.maxWidth || c.width < c.minWidth) && (c.left = c.oldLeft),
        (c.height > c.maxHeight || c.height < c.minHeight) && (c.top = c.oldTop),
        (c.width = Math.min(Math.max(c.width, c.minWidth), c.maxWidth)),
        (c.height = Math.min(Math.max(c.height, c.minHeight), c.maxHeight)),
        this.limitCropBox(!1, !0),
        (c.left = Math.min(Math.max(c.left, c.minLeft), c.maxLeft)),
        (c.top = Math.min(Math.max(c.top, c.minTop), c.maxTop)),
        (c.oldLeft = c.left),
        (c.oldTop = c.top),
        u.movable && u.cropBoxMovable && _s(this.face, Os, c.width >= o.width && c.height >= o.height ? Zm : Cu),
        Si(this.cropBox, Yt({ width: c.width, height: c.height }, Rs({ translateX: c.left, translateY: c.top }))),
        this.cropped && this.limited && this.limitCanvas(!0, !0),
        this.disabled || this.output());
    },
    output: function () {
      (this.preview(), Bl(this.element, hu, this.getData()));
    },
  },
  Sv = {
    initPreview: function () {
      var u = this.element,
        o = this.crossOrigin,
        c = this.options.preview,
        m = o ? this.crossOriginUrl : this.url,
        d = u.alt || "The image to preview",
        h = document.createElement("img");
      if ((o && (h.crossOrigin = o), (h.src = m), (h.alt = d), this.viewBox.appendChild(h), (this.viewBoxImage = h), !!c)) {
        var v = c;
        (typeof c == "string" ? (v = u.ownerDocument.querySelectorAll(c)) : c.querySelector && (v = [c]),
          (this.previews = v),
          ra(v, function (j) {
            var y = document.createElement("img");
            (_s(j, Xr, { width: j.offsetWidth, height: j.offsetHeight, html: j.innerHTML }),
              o && (y.crossOrigin = o),
              (y.src = m),
              (y.alt = d),
              (y.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"'),
              (j.innerHTML = ""),
              j.appendChild(y));
          }));
      }
    },
    resetPreview: function () {
      ra(this.previews, function (u) {
        var o = vu(u, Xr);
        (Si(u, { width: o.width, height: o.height }), (u.innerHTML = o.html), ov(u, Xr));
      });
    },
    preview: function () {
      var u = this.imageData,
        o = this.canvasData,
        c = this.cropBoxData,
        m = c.width,
        d = c.height,
        h = u.width,
        v = u.height,
        j = c.left - o.left - u.left,
        y = c.top - o.top - u.top;
      !this.cropped ||
        this.disabled ||
        (Si(this.viewBoxImage, Yt({ width: h, height: v }, Rs(Yt({ translateX: -j, translateY: -y }, u)))),
        ra(this.previews, function (C) {
          var S = vu(C, Xr),
            T = S.width,
            H = S.height,
            k = T,
            X = H,
            J = 1;
          (m && ((J = T / m), (X = d * J)),
            d && X > H && ((J = H / d), (k = m * J), (X = H)),
            Si(C, { width: k, height: X }),
            Si(C.getElementsByTagName("img")[0], Yt({ width: h * J, height: v * J }, Rs(Yt({ translateX: -j * J, translateY: -y * J }, u)))));
        }));
    },
  },
  Nv = {
    bind: function () {
      var u = this.element,
        o = this.options,
        c = this.cropper;
      (Ha(o.cropstart) && cn(u, gu, o.cropstart),
        Ha(o.cropmove) && cn(u, pu, o.cropmove),
        Ha(o.cropend) && cn(u, mu, o.cropend),
        Ha(o.crop) && cn(u, hu, o.crop),
        Ha(o.zoom) && cn(u, xu, o.zoom),
        cn(c, Cm, (this.onCropStart = this.cropStart.bind(this))),
        o.zoomable && o.zoomOnWheel && cn(c, Em, (this.onWheel = this.wheel.bind(this)), { passive: !1, capture: !0 }),
        o.toggleDragModeOnDblclick && cn(c, wm, (this.onDblclick = this.dblclick.bind(this))),
        cn(u.ownerDocument, Tm, (this.onCropMove = this.cropMove.bind(this))),
        cn(u.ownerDocument, km, (this.onCropEnd = this.cropEnd.bind(this))),
        o.responsive && cn(window, zm, (this.onResize = this.resize.bind(this))));
    },
    unbind: function () {
      var u = this.element,
        o = this.options,
        c = this.cropper;
      (Ha(o.cropstart) && pn(u, gu, o.cropstart),
        Ha(o.cropmove) && pn(u, pu, o.cropmove),
        Ha(o.cropend) && pn(u, mu, o.cropend),
        Ha(o.crop) && pn(u, hu, o.crop),
        Ha(o.zoom) && pn(u, xu, o.zoom),
        pn(c, Cm, this.onCropStart),
        o.zoomable && o.zoomOnWheel && pn(c, Em, this.onWheel, { passive: !1, capture: !0 }),
        o.toggleDragModeOnDblclick && pn(c, wm, this.onDblclick),
        pn(u.ownerDocument, Tm, this.onCropMove),
        pn(u.ownerDocument, km, this.onCropEnd),
        o.responsive && pn(window, zm, this.onResize));
    },
  },
  wv = {
    resize: function () {
      if (!this.disabled) {
        var u = this.options,
          o = this.container,
          c = this.containerData,
          m = o.offsetWidth / c.width,
          d = o.offsetHeight / c.height,
          h = Math.abs(m - 1) > Math.abs(d - 1) ? m : d;
        if (h !== 1) {
          var v, j;
          (u.restore && ((v = this.getCanvasData()), (j = this.getCropBoxData())),
            this.render(),
            u.restore &&
              (this.setCanvasData(
                ra(v, function (y, C) {
                  v[C] = y * h;
                }),
              ),
              this.setCropBoxData(
                ra(j, function (y, C) {
                  j[C] = y * h;
                }),
              )));
        }
      }
    },
    dblclick: function () {
      this.disabled || this.options.dragMode === Wm || this.setDragMode(rv(this.dragBox, du) ? Jm : Tu);
    },
    wheel: function (u) {
      var o = this,
        c = Number(this.options.wheelZoomRatio) || 0.1,
        m = 1;
      this.disabled ||
        (u.preventDefault(),
        !this.wheeling &&
          ((this.wheeling = !0),
          setTimeout(function () {
            o.wheeling = !1;
          }, 50),
          u.deltaY ? (m = u.deltaY > 0 ? 1 : -1) : u.wheelDelta ? (m = -u.wheelDelta / 120) : u.detail && (m = u.detail > 0 ? 1 : -1),
          this.zoom(-m * c, u)));
    },
    cropStart: function (u) {
      var o = u.buttons,
        c = u.button;
      if (!(this.disabled || ((u.type === "mousedown" || (u.type === "pointerdown" && u.pointerType === "mouse")) && ((it(o) && o !== 1) || (it(c) && c !== 0) || u.ctrlKey)))) {
        var m = this.options,
          d = this.pointers,
          h;
        (u.changedTouches
          ? ra(u.changedTouches, function (v) {
              d[v.identifier] = Gr(v);
            })
          : (d[u.pointerId || 0] = Gr(u)),
          Object.keys(d).length > 1 && m.zoomable && m.zoomOnTouch ? (h = Km) : (h = vu(u.target, Os)),
          Wx.test(h) && Bl(this.element, gu, { originalEvent: u, action: h }) !== !1 && (u.preventDefault(), (this.action = h), (this.cropping = !1), h === Im && ((this.cropping = !0), ga(this.dragBox, Zr))));
      }
    },
    cropMove: function (u) {
      var o = this.action;
      if (!(this.disabled || !o)) {
        var c = this.pointers;
        (u.preventDefault(),
          Bl(this.element, pu, { originalEvent: u, action: o }) !== !1 &&
            (u.changedTouches
              ? ra(u.changedTouches, function (m) {
                  Yt(c[m.identifier] || {}, Gr(m, !0));
                })
              : Yt(c[u.pointerId || 0] || {}, Gr(u, !0)),
            this.change(u)));
      }
    },
    cropEnd: function (u) {
      if (!this.disabled) {
        var o = this.action,
          c = this.pointers;
        (u.changedTouches
          ? ra(u.changedTouches, function (m) {
              delete c[m.identifier];
            })
          : delete c[u.pointerId || 0],
          o && (u.preventDefault(), Object.keys(c).length || (this.action = ""), this.cropping && ((this.cropping = !1), _l(this.dragBox, Zr, this.cropped && this.options.modal)), Bl(this.element, mu, { originalEvent: u, action: o })));
      }
    },
  },
  Cv = {
    change: function (u) {
      var o = this.options,
        c = this.canvasData,
        m = this.containerData,
        d = this.cropBoxData,
        h = this.pointers,
        v = this.action,
        j = o.aspectRatio,
        y = d.left,
        C = d.top,
        S = d.width,
        T = d.height,
        H = y + S,
        k = C + T,
        X = 0,
        J = 0,
        D = m.width,
        I = m.height,
        V = !0,
        de;
      (!j && u.shiftKey && (j = S && T ? S / T : 1), this.limited && ((X = d.minLeft), (J = d.minTop), (D = X + Math.min(m.width, c.width, c.left + c.width)), (I = J + Math.min(m.height, c.height, c.top + c.height))));
      var P = h[Object.keys(h)[0]],
        Y = { x: P.endX - P.startX, y: P.endY - P.startY },
        K = function (Z) {
          switch (Z) {
            case Zi:
              H + Y.x > D && (Y.x = D - H);
              break;
            case Ki:
              y + Y.x < X && (Y.x = X - y);
              break;
            case ji:
              C + Y.y < J && (Y.y = J - C);
              break;
            case Al:
              k + Y.y > I && (Y.y = I - k);
              break;
          }
        };
      switch (v) {
        case Cu:
          ((y += Y.x), (C += Y.y));
          break;
        case Zi:
          if (Y.x >= 0 && (H >= D || (j && (C <= J || k >= I)))) {
            V = !1;
            break;
          }
          (K(Zi), (S += Y.x), S < 0 && ((v = Ki), (S = -S), (y -= S)), j && ((T = S / j), (C += (d.height - T) / 2)));
          break;
        case ji:
          if (Y.y <= 0 && (C <= J || (j && (y <= X || H >= D)))) {
            V = !1;
            break;
          }
          (K(ji), (T -= Y.y), (C += Y.y), T < 0 && ((v = Al), (T = -T), (C -= T)), j && ((S = T * j), (y += (d.width - S) / 2)));
          break;
        case Ki:
          if (Y.x <= 0 && (y <= X || (j && (C <= J || k >= I)))) {
            V = !1;
            break;
          }
          (K(Ki), (S -= Y.x), (y += Y.x), S < 0 && ((v = Zi), (S = -S), (y -= S)), j && ((T = S / j), (C += (d.height - T) / 2)));
          break;
        case Al:
          if (Y.y >= 0 && (k >= I || (j && (y <= X || H >= D)))) {
            V = !1;
            break;
          }
          (K(Al), (T += Y.y), T < 0 && ((v = ji), (T = -T), (C -= T)), j && ((S = T * j), (y += (d.width - S) / 2)));
          break;
        case Ms:
          if (j) {
            if (Y.y <= 0 && (C <= J || H >= D)) {
              V = !1;
              break;
            }
            (K(ji), (T -= Y.y), (C += Y.y), (S = T * j));
          } else (K(ji), K(Zi), Y.x >= 0 ? (H < D ? (S += Y.x) : Y.y <= 0 && C <= J && (V = !1)) : (S += Y.x), Y.y <= 0 ? C > J && ((T -= Y.y), (C += Y.y)) : ((T -= Y.y), (C += Y.y)));
          S < 0 && T < 0 ? ((v = Ds), (T = -T), (S = -S), (C -= T), (y -= S)) : S < 0 ? ((v = zs), (S = -S), (y -= S)) : T < 0 && ((v = Es), (T = -T), (C -= T));
          break;
        case zs:
          if (j) {
            if (Y.y <= 0 && (C <= J || y <= X)) {
              V = !1;
              break;
            }
            (K(ji), (T -= Y.y), (C += Y.y), (S = T * j), (y += d.width - S));
          } else (K(ji), K(Ki), Y.x <= 0 ? (y > X ? ((S -= Y.x), (y += Y.x)) : Y.y <= 0 && C <= J && (V = !1)) : ((S -= Y.x), (y += Y.x)), Y.y <= 0 ? C > J && ((T -= Y.y), (C += Y.y)) : ((T -= Y.y), (C += Y.y)));
          S < 0 && T < 0 ? ((v = Es), (T = -T), (S = -S), (C -= T), (y -= S)) : S < 0 ? ((v = Ms), (S = -S), (y -= S)) : T < 0 && ((v = Ds), (T = -T), (C -= T));
          break;
        case Ds:
          if (j) {
            if (Y.x <= 0 && (y <= X || k >= I)) {
              V = !1;
              break;
            }
            (K(Ki), (S -= Y.x), (y += Y.x), (T = S / j));
          } else (K(Al), K(Ki), Y.x <= 0 ? (y > X ? ((S -= Y.x), (y += Y.x)) : Y.y >= 0 && k >= I && (V = !1)) : ((S -= Y.x), (y += Y.x)), Y.y >= 0 ? k < I && (T += Y.y) : (T += Y.y));
          S < 0 && T < 0 ? ((v = Ms), (T = -T), (S = -S), (C -= T), (y -= S)) : S < 0 ? ((v = Es), (S = -S), (y -= S)) : T < 0 && ((v = zs), (T = -T), (C -= T));
          break;
        case Es:
          if (j) {
            if (Y.x >= 0 && (H >= D || k >= I)) {
              V = !1;
              break;
            }
            (K(Zi), (S += Y.x), (T = S / j));
          } else (K(Al), K(Zi), Y.x >= 0 ? (H < D ? (S += Y.x) : Y.y >= 0 && k >= I && (V = !1)) : (S += Y.x), Y.y >= 0 ? k < I && (T += Y.y) : (T += Y.y));
          S < 0 && T < 0 ? ((v = zs), (T = -T), (S = -S), (C -= T), (y -= S)) : S < 0 ? ((v = Ds), (S = -S), (y -= S)) : T < 0 && ((v = Ms), (T = -T), (C -= T));
          break;
        case Zm:
          (this.move(Y.x, Y.y), (V = !1));
          break;
        case Km:
          (this.zoom(dv(h), u), (V = !1));
          break;
        case Im:
          if (!Y.x || !Y.y) {
            V = !1;
            break;
          }
          ((de = np(this.cropper)),
            (y = P.startX - de.left),
            (C = P.startY - de.top),
            (S = d.minWidth),
            (T = d.minHeight),
            Y.x > 0 ? (v = Y.y > 0 ? Es : Ms) : Y.x < 0 && ((y -= S), (v = Y.y > 0 ? Ds : zs)),
            Y.y < 0 && (C -= T),
            this.cropped || (zn(this.cropBox, La), (this.cropped = !0), this.limited && this.limitCropBox(!0, !0)));
          break;
      }
      (V && ((d.width = S), (d.height = T), (d.left = y), (d.top = C), (this.action = v), this.renderCropBox()),
        ra(h, function (F) {
          ((F.startX = F.endX), (F.startY = F.endY));
        }));
    },
  },
  Tv = {
    crop: function () {
      return (this.ready && !this.cropped && !this.disabled && ((this.cropped = !0), this.limitCropBox(!0, !0), this.options.modal && ga(this.dragBox, Zr), zn(this.cropBox, La), this.setCropBoxData(this.initialCropBoxData)), this);
    },
    reset: function () {
      return (
        this.ready &&
          !this.disabled &&
          ((this.imageData = Yt({}, this.initialImageData)), (this.canvasData = Yt({}, this.initialCanvasData)), (this.cropBoxData = Yt({}, this.initialCropBoxData)), this.renderCanvas(), this.cropped && this.renderCropBox()),
        this
      );
    },
    clear: function () {
      return (
        this.cropped && !this.disabled && (Yt(this.cropBoxData, { left: 0, top: 0, width: 0, height: 0 }), (this.cropped = !1), this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), zn(this.dragBox, Zr), ga(this.cropBox, La)),
        this
      );
    },
    replace: function (u) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return (
        !this.disabled &&
          u &&
          (this.isImg && (this.element.src = u),
          o
            ? ((this.url = u),
              (this.image.src = u),
              this.ready &&
                ((this.viewBoxImage.src = u),
                ra(this.previews, function (c) {
                  c.getElementsByTagName("img")[0].src = u;
                })))
            : (this.isImg && (this.replaced = !0), (this.options.data = null), this.uncreate(), this.load(u))),
        this
      );
    },
    enable: function () {
      return (this.ready && this.disabled && ((this.disabled = !1), zn(this.cropper, Sm)), this);
    },
    disable: function () {
      return (this.ready && !this.disabled && ((this.disabled = !0), ga(this.cropper, Sm)), this);
    },
    destroy: function () {
      var u = this.element;
      return u[Lt] ? ((u[Lt] = void 0), this.isImg && this.replaced && (u.src = this.originalUrl), this.uncreate(), this) : this;
    },
    move: function (u) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : u,
        c = this.canvasData,
        m = c.left,
        d = c.top;
      return this.moveTo(iu(u) ? u : m + Number(u), iu(o) ? o : d + Number(o));
    },
    moveTo: function (u) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : u,
        c = this.canvasData,
        m = !1;
      return ((u = Number(u)), (o = Number(o)), this.ready && !this.disabled && this.options.movable && (it(u) && ((c.left = u), (m = !0)), it(o) && ((c.top = o), (m = !0)), m && this.renderCanvas(!0)), this);
    },
    zoom: function (u, o) {
      var c = this.canvasData;
      return ((u = Number(u)), u < 0 ? (u = 1 / (1 - u)) : (u = 1 + u), this.zoomTo((c.width * u) / c.naturalWidth, null, o));
    },
    zoomTo: function (u, o, c) {
      var m = this.options,
        d = this.canvasData,
        h = d.width,
        v = d.height,
        j = d.naturalWidth,
        y = d.naturalHeight;
      if (((u = Number(u)), u >= 0 && this.ready && !this.disabled && m.zoomable)) {
        var C = j * u,
          S = y * u;
        if (Bl(this.element, xu, { ratio: u, oldRatio: h / j, originalEvent: c }) === !1) return this;
        if (c) {
          var T = this.pointers,
            H = np(this.cropper),
            k = T && Object.keys(T).length ? fv(T) : { pageX: c.pageX, pageY: c.pageY };
          ((d.left -= (C - h) * ((k.pageX - H.left - d.left) / h)), (d.top -= (S - v) * ((k.pageY - H.top - d.top) / v)));
        } else Ol(o) && it(o.x) && it(o.y) ? ((d.left -= (C - h) * ((o.x - d.left) / h)), (d.top -= (S - v) * ((o.y - d.top) / v))) : ((d.left -= (C - h) / 2), (d.top -= (S - v) / 2));
        ((d.width = C), (d.height = S), this.renderCanvas(!0));
      }
      return this;
    },
    rotate: function (u) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(u));
    },
    rotateTo: function (u) {
      return ((u = Number(u)), it(u) && this.ready && !this.disabled && this.options.rotatable && ((this.imageData.rotate = u % 360), this.renderCanvas(!0, !0)), this);
    },
    scaleX: function (u) {
      var o = this.imageData.scaleY;
      return this.scale(u, it(o) ? o : 1);
    },
    scaleY: function (u) {
      var o = this.imageData.scaleX;
      return this.scale(it(o) ? o : 1, u);
    },
    scale: function (u) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : u,
        c = this.imageData,
        m = !1;
      return ((u = Number(u)), (o = Number(o)), this.ready && !this.disabled && this.options.scalable && (it(u) && ((c.scaleX = u), (m = !0)), it(o) && ((c.scaleY = o), (m = !0)), m && this.renderCanvas(!0, !0)), this);
    },
    getData: function () {
      var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
        o = this.options,
        c = this.imageData,
        m = this.canvasData,
        d = this.cropBoxData,
        h;
      if (this.ready && this.cropped) {
        h = { x: d.left - m.left, y: d.top - m.top, width: d.width, height: d.height };
        var v = c.width / c.naturalWidth;
        if (
          (ra(h, function (C, S) {
            h[S] = C / v;
          }),
          u)
        ) {
          var j = Math.round(h.y + h.height),
            y = Math.round(h.x + h.width);
          ((h.x = Math.round(h.x)), (h.y = Math.round(h.y)), (h.width = y - h.x), (h.height = j - h.y));
        }
      } else h = { x: 0, y: 0, width: 0, height: 0 };
      return (o.rotatable && (h.rotate = c.rotate || 0), o.scalable && ((h.scaleX = c.scaleX || 1), (h.scaleY = c.scaleY || 1)), h);
    },
    setData: function (u) {
      var o = this.options,
        c = this.imageData,
        m = this.canvasData,
        d = {};
      if (this.ready && !this.disabled && Ol(u)) {
        var h = !1;
        (o.rotatable && it(u.rotate) && u.rotate !== c.rotate && ((c.rotate = u.rotate), (h = !0)),
          o.scalable && (it(u.scaleX) && u.scaleX !== c.scaleX && ((c.scaleX = u.scaleX), (h = !0)), it(u.scaleY) && u.scaleY !== c.scaleY && ((c.scaleY = u.scaleY), (h = !0))),
          h && this.renderCanvas(!0, !0));
        var v = c.width / c.naturalWidth;
        (it(u.x) && (d.left = u.x * v + m.left), it(u.y) && (d.top = u.y * v + m.top), it(u.width) && (d.width = u.width * v), it(u.height) && (d.height = u.height * v), this.setCropBoxData(d));
      }
      return this;
    },
    getContainerData: function () {
      return this.ready ? Yt({}, this.containerData) : {};
    },
    getImageData: function () {
      return this.sized ? Yt({}, this.imageData) : {};
    },
    getCanvasData: function () {
      var u = this.canvasData,
        o = {};
      return (
        this.ready &&
          ra(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function (c) {
            o[c] = u[c];
          }),
        o
      );
    },
    setCanvasData: function (u) {
      var o = this.canvasData,
        c = o.aspectRatio;
      return (
        this.ready &&
          !this.disabled &&
          Ol(u) &&
          (it(u.left) && (o.left = u.left), it(u.top) && (o.top = u.top), it(u.width) ? ((o.width = u.width), (o.height = u.width / c)) : it(u.height) && ((o.height = u.height), (o.width = u.height * c)), this.renderCanvas(!0)),
        this
      );
    },
    getCropBoxData: function () {
      var u = this.cropBoxData,
        o;
      return (this.ready && this.cropped && (o = { left: u.left, top: u.top, width: u.width, height: u.height }), o || {});
    },
    setCropBoxData: function (u) {
      var o = this.cropBoxData,
        c = this.options.aspectRatio,
        m,
        d;
      return (
        this.ready &&
          this.cropped &&
          !this.disabled &&
          Ol(u) &&
          (it(u.left) && (o.left = u.left),
          it(u.top) && (o.top = u.top),
          it(u.width) && u.width !== o.width && ((m = !0), (o.width = u.width)),
          it(u.height) && u.height !== o.height && ((d = !0), (o.height = u.height)),
          c && (m ? (o.height = o.width / c) : d && (o.width = o.height * c)),
          this.renderCropBox()),
        this
      );
    },
    getCroppedCanvas: function () {
      var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!this.ready || !window.HTMLCanvasElement) return null;
      var o = this.canvasData,
        c = mv(this.image, this.imageData, o, u);
      if (!this.cropped) return c;
      var m = this.getData(u.rounded),
        d = m.x,
        h = m.y,
        v = m.width,
        j = m.height,
        y = c.width / Math.floor(o.naturalWidth);
      y !== 1 && ((d *= y), (h *= y), (v *= y), (j *= y));
      var C = v / j,
        S = Ni({ aspectRatio: C, width: u.maxWidth || 1 / 0, height: u.maxHeight || 1 / 0 }),
        T = Ni({ aspectRatio: C, width: u.minWidth || 0, height: u.minHeight || 0 }, "cover"),
        H = Ni({ aspectRatio: C, width: u.width || (y !== 1 ? c.width : v), height: u.height || (y !== 1 ? c.height : j) }),
        k = H.width,
        X = H.height;
      ((k = Math.min(S.width, Math.max(T.width, k))), (X = Math.min(S.height, Math.max(T.height, X))));
      var J = document.createElement("canvas"),
        D = J.getContext("2d");
      ((J.width = Ul(k)), (J.height = Ul(X)), (D.fillStyle = u.fillColor || "transparent"), D.fillRect(0, 0, k, X));
      var I = u.imageSmoothingEnabled,
        V = I === void 0 ? !0 : I,
        de = u.imageSmoothingQuality;
      ((D.imageSmoothingEnabled = V), de && (D.imageSmoothingQuality = de));
      var P = c.width,
        Y = c.height,
        K = d,
        F = h,
        Z,
        ye,
        Ce,
        Se,
        ke,
        Oe;
      (K <= -v || K > P ? ((K = 0), (Z = 0), (Ce = 0), (ke = 0)) : K <= 0 ? ((Ce = -K), (K = 0), (Z = Math.min(P, v + K)), (ke = Z)) : K <= P && ((Ce = 0), (Z = Math.min(v, P - K)), (ke = Z)),
        Z <= 0 || F <= -j || F > Y ? ((F = 0), (ye = 0), (Se = 0), (Oe = 0)) : F <= 0 ? ((Se = -F), (F = 0), (ye = Math.min(Y, j + F)), (Oe = ye)) : F <= Y && ((Se = 0), (ye = Math.min(j, Y - F)), (Oe = ye)));
      var ue = [K, F, Z, ye];
      if (ke > 0 && Oe > 0) {
        var R = k / v;
        ue.push(Ce * R, Se * R, ke * R, Oe * R);
      }
      return (
        D.drawImage.apply(
          D,
          [c].concat(
            Qm(
              ue.map(function ($) {
                return Math.floor(Ul($));
              }),
            ),
          ),
        ),
        J
      );
    },
    setAspectRatio: function (u) {
      var o = this.options;
      return (!this.disabled && !iu(u) && ((o.aspectRatio = Math.max(0, u) || NaN), this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this);
    },
    setDragMode: function (u) {
      var o = this.options,
        c = this.dragBox,
        m = this.face;
      if (this.ready && !this.disabled) {
        var d = u === Tu,
          h = o.movable && u === Jm;
        ((u = d || h ? u : Wm), (o.dragMode = u), _s(c, Os, u), _l(c, du, d), _l(c, fu, h), o.cropBoxMovable || (_s(m, Os, u), _l(m, du, d), _l(m, fu, h)));
      }
      return this;
    },
  },
  kv = En.Cropper,
  lp = (function () {
    function r(u) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if ((Yx(this, r), !u || !ev.test(u.tagName))) throw new Error("The first argument is required and must be an <img> or <canvas> element.");
      ((this.element = u), (this.options = Yt({}, Am, Ol(o) && o)), (this.cropped = !1), (this.disabled = !1), (this.pointers = {}), (this.ready = !1), (this.reloading = !1), (this.replaced = !1), (this.sized = !1), (this.sizing = !1), this.init());
    }
    return qx(
      r,
      [
        {
          key: "init",
          value: function () {
            var o = this.element,
              c = o.tagName.toLowerCase(),
              m;
            if (!o[Lt]) {
              if (((o[Lt] = this), c === "img")) {
                if (((this.isImg = !0), (m = o.getAttribute("src") || ""), (this.originalUrl = m), !m)) return;
                m = o.src;
              } else c === "canvas" && window.HTMLCanvasElement && (m = o.toDataURL());
              this.load(m);
            }
          },
        },
        {
          key: "load",
          value: function (o) {
            var c = this;
            if (o) {
              ((this.url = o), (this.imageData = {}));
              var m = this.element,
                d = this.options;
              if ((!d.rotatable && !d.scalable && (d.checkOrientation = !1), !d.checkOrientation || !window.ArrayBuffer)) {
                this.clone();
                return;
              }
              if (Fx.test(o)) {
                Px.test(o) ? this.read(xv(o)) : this.clone();
                return;
              }
              var h = new XMLHttpRequest(),
                v = this.clone.bind(this);
              ((this.reloading = !0),
                (this.xhr = h),
                (h.onabort = v),
                (h.onerror = v),
                (h.ontimeout = v),
                (h.onprogress = function () {
                  h.getResponseHeader("content-type") !== Dm && h.abort();
                }),
                (h.onload = function () {
                  c.read(h.response);
                }),
                (h.onloadend = function () {
                  ((c.reloading = !1), (c.xhr = null));
                }),
                d.checkCrossOrigin && Om(o) && m.crossOrigin && (o = _m(o)),
                h.open("GET", o, !0),
                (h.responseType = "arraybuffer"),
                (h.withCredentials = m.crossOrigin === "use-credentials"),
                h.send());
            }
          },
        },
        {
          key: "read",
          value: function (o) {
            var c = this.options,
              m = this.imageData,
              d = bv(o),
              h = 0,
              v = 1,
              j = 1;
            if (d > 1) {
              this.url = vv(o, Dm);
              var y = yv(d);
              ((h = y.rotate), (v = y.scaleX), (j = y.scaleY));
            }
            (c.rotatable && (m.rotate = h), c.scalable && ((m.scaleX = v), (m.scaleY = j)), this.clone());
          },
        },
        {
          key: "clone",
          value: function () {
            var o = this.element,
              c = this.url,
              m = o.crossOrigin,
              d = c;
            (this.options.checkCrossOrigin && Om(c) && (m || (m = "anonymous"), (d = _m(c))), (this.crossOrigin = m), (this.crossOriginUrl = d));
            var h = document.createElement("img");
            (m && (h.crossOrigin = m), (h.src = d || c), (h.alt = o.alt || "The image to crop"), (this.image = h), (h.onload = this.start.bind(this)), (h.onerror = this.stop.bind(this)), ga(h, Nm), o.parentNode.insertBefore(h, o.nextSibling));
          },
        },
        {
          key: "start",
          value: function () {
            var o = this,
              c = this.image;
            ((c.onload = null), (c.onerror = null), (this.sizing = !0));
            var m = En.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(En.navigator.userAgent),
              d = function (y, C) {
                (Yt(o.imageData, { naturalWidth: y, naturalHeight: C, aspectRatio: y / C }), (o.initialImageData = Yt({}, o.imageData)), (o.sizing = !1), (o.sized = !0), o.build());
              };
            if (c.naturalWidth && !m) {
              d(c.naturalWidth, c.naturalHeight);
              return;
            }
            var h = document.createElement("img"),
              v = document.body || document.documentElement;
            ((this.sizingImage = h),
              (h.onload = function () {
                (d(h.width, h.height), m || v.removeChild(h));
              }),
              (h.src = c.src),
              m || ((h.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;"), v.appendChild(h)));
          },
        },
        {
          key: "stop",
          value: function () {
            var o = this.image;
            ((o.onload = null), (o.onerror = null), o.parentNode.removeChild(o), (this.image = null));
          },
        },
        {
          key: "build",
          value: function () {
            if (!(!this.sized || this.ready)) {
              var o = this.element,
                c = this.options,
                m = this.image,
                d = o.parentNode,
                h = document.createElement("div");
              h.innerHTML = tv;
              var v = h.querySelector(".".concat(Lt, "-container")),
                j = v.querySelector(".".concat(Lt, "-canvas")),
                y = v.querySelector(".".concat(Lt, "-drag-box")),
                C = v.querySelector(".".concat(Lt, "-crop-box")),
                S = C.querySelector(".".concat(Lt, "-face"));
              ((this.container = d),
                (this.cropper = v),
                (this.canvas = j),
                (this.dragBox = y),
                (this.cropBox = C),
                (this.viewBox = v.querySelector(".".concat(Lt, "-view-box"))),
                (this.face = S),
                j.appendChild(m),
                ga(o, La),
                d.insertBefore(v, o.nextSibling),
                zn(m, Nm),
                this.initPreview(),
                this.bind(),
                (c.initialAspectRatio = Math.max(0, c.initialAspectRatio) || NaN),
                (c.aspectRatio = Math.max(0, c.aspectRatio) || NaN),
                (c.viewMode = Math.max(0, Math.min(3, Math.round(c.viewMode))) || 0),
                ga(C, La),
                c.guides || ga(C.getElementsByClassName("".concat(Lt, "-dashed")), La),
                c.center || ga(C.getElementsByClassName("".concat(Lt, "-center")), La),
                c.background && ga(v, "".concat(Lt, "-bg")),
                c.highlight || ga(S, Ix),
                c.cropBoxMovable && (ga(S, fu), _s(S, Os, Cu)),
                c.cropBoxResizable || (ga(C.getElementsByClassName("".concat(Lt, "-line")), La), ga(C.getElementsByClassName("".concat(Lt, "-point")), La)),
                this.render(),
                (this.ready = !0),
                this.setDragMode(c.dragMode),
                c.autoCrop && this.crop(),
                this.setData(c.data),
                Ha(c.ready) && cn(o, Mm, c.ready, { once: !0 }),
                Bl(o, Mm));
            }
          },
        },
        {
          key: "unbuild",
          value: function () {
            if (this.ready) {
              ((this.ready = !1), this.unbind(), this.resetPreview());
              var o = this.cropper.parentNode;
              (o && o.removeChild(this.cropper), zn(this.element, La));
            }
          },
        },
        {
          key: "uncreate",
          value: function () {
            this.ready
              ? (this.unbuild(), (this.ready = !1), (this.cropped = !1))
              : this.sizing
                ? ((this.sizingImage.onload = null), (this.sizing = !1), (this.sized = !1))
                : this.reloading
                  ? ((this.xhr.onabort = null), this.xhr.abort())
                  : this.image && this.stop();
          },
        },
      ],
      [
        {
          key: "noConflict",
          value: function () {
            return ((window.Cropper = kv), r);
          },
        },
        {
          key: "setDefaults",
          value: function (o) {
            Yt(Am, Ol(o) && o);
          },
        },
      ],
    );
  })();
Yt(lp.prototype, jv, Sv, Nv, wv, Cv, Tv);
const Mu = ["学业", "感情", "家庭", "工作", "生活", "其他"],
  Mv = { 全部: "✦", 学业: "书", 感情: "心", 家庭: "家", 工作: "包", 生活: "日", 其他: "✧" },
  Vr = ["我只想发泄", "我希望有人安慰", "我希望有人给建议", "我希望有人陪我聊天"],
  Um = ["#f1c9a5", "#a8cbb4", "#d6b5a6", "#b7c7dd", "#c9b6d7"],
  Kr = ["雾中的铃兰", "一颗青梅", "路过的晚风", "半糖月亮", "安静的鲸", "山间的鹿", "深海星尘", "林深见鹿", "半夏微凉", "拾光者", "晚来风急", "云上花开", "星河渡口", "雨后初晴", "晨雾微光", "秋水长天", "南风知意", "岛上书店", "五月天", "听雨眠"],
  Jr = ["芽", "叶", "风", "月", "鹿", "星", "光", "雨", "云", "海", "晨", "霜", "露", "絮", "舟"],
  sp = { 我只想发泄: "听你说就好", 我希望有人安慰: "给我一点温暖", 我希望有人给建议: "帮我想想办法", 我希望有人陪我聊天: "陪我待一会儿" },
  zv = [
    { value: "public", label: "公开", desc: "大家能看到并回应", icon: "🌍" },
    { value: "ai-only", label: "AI陪伴", desc: "只有AI回应你", icon: "🤖" },
    { value: "private", label: "仅自己", desc: "只有你能看到", icon: "🔒" },
  ],
  Ev = [
    { name: "森绿", color: "#6f917d" },
    { name: "海蓝", color: "#5b8ef" },
    { name: "暖橙", color: "#e8915c" },
    { name: "蔷薇", color: "#d67ba0" },
    { name: "藏蓝", color: "#6b7fd7" },
    { name: "紫薪", color: "#9b6ec4" },
    { name: "林海", color: "#4a9d8f" },
    { name: "暖黄", color: "#d4a84b" },
    { name: "红枫", color: "#c4543d" },
    { name: "墨黑", color: "#4a4a4a" },
  ];
class Dv extends p.Component {
  constructor(u) {
    (super(u), (this.state = { hasError: !1 }));
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(u, o) {
    try {
      console.error("[MoodTree] render error:", u, o);
    } catch {}
  }
  render() {
    return this.state.hasError
      ? n.jsxs("div", {
          style: { minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#faf7f0", padding: "24px", textAlign: "center", fontFamily: "system-ui, -apple-system, sans-serif" },
          children: [
            n.jsx("div", { style: { fontSize: "52px", marginBottom: "14px" }, children: "🌳" }),
            n.jsx("h2", { style: { margin: "0 0 8px", fontSize: "18px", color: "#5f7a6b", fontWeight: 600 }, children: "小树洞打了个盹" }),
            n.jsx("p", { style: { margin: "0 0 22px", fontSize: "13px", color: "#9ba19d" }, children: "页面出了点小状况，刷新一下就好" }),
            n.jsx("button", {
              onClick: () => location.reload(),
              style: { background: "#6f917d", color: "#fff", border: "none", borderRadius: "22px", padding: "11px 30px", fontSize: "14px", cursor: "pointer", boxShadow: "0 4px 14px rgba(111,145,125,.3)" },
              children: "点我刷新",
            }),
          ],
        })
      : this.props.children;
  }
}
const rp = (import.meta.env.VITE_API_BASE ?? "https://1458420446-758vamuceo.ap-shanghai.tencentscf.com").replace(/\/$/, "");
function bu() {
  try {
    return localStorage.getItem("moodtree-token") || sessionStorage.getItem("moodtree-token");
  } catch {
    return null;
  }
}
function su(r, u = !0) {
  try {
    (localStorage.removeItem("moodtree-token"), sessionStorage.removeItem("moodtree-token"), (u ? localStorage : sessionStorage).setItem("moodtree-token", r));
  } catch {}
}
function cp() {
  try {
    (localStorage.removeItem("moodtree-token"), sessionStorage.removeItem("moodtree-token"));
  } catch {}
}
let yu = null;
function Av(r) {
  yu = r;
}
function op() {
  cp();
  try {
    (localStorage.removeItem("moodtree-user"), sessionStorage.removeItem("moodtree-user"));
  } catch {}
  yu && yu();
}
function up() {
  const r = bu();
  return r ? { Authorization: `Bearer ${r}` } : {};
}
async function qe(r) {
  const u = await fetch(`${rp}${r}`, { headers: up() });
  return u.status === 401 ? (op(), { error: "登录已过期" }) : u.json();
}
async function pe(r, u) {
  const o = await fetch(`${rp}${r}`, { method: "POST", headers: { "Content-Type": "application/json", ...up() }, body: JSON.stringify(u) });
  return o.status === 401 ? (op(), { error: "登录已过期" }) : o.json();
}
const Te = {
    getItem(r) {
      try {
        return localStorage.getItem(r);
      } catch {
        return null;
      }
    },
    setItem(r, u) {
      try {
        localStorage.setItem(r, u);
      } catch {}
    },
    removeItem(r) {
      try {
        localStorage.removeItem(r);
      } catch {}
    },
  },
  Bm = {
    getItem(r) {
      try {
        return sessionStorage.getItem(r);
      } catch {
        return null;
      }
    },
    setItem(r, u) {
      try {
        sessionStorage.setItem(r, u);
      } catch {}
    },
    removeItem(r) {
      try {
        sessionStorage.removeItem(r);
      } catch {}
    },
  };
function ru() {
  let r = Te.getItem("moodtree-nickname");
  return (r || ((r = Kr[Math.floor(Math.random() * Kr.length)]), Te.setItem("moodtree-nickname", r)), r);
}
function cu() {
  let r = Te.getItem("moodtree-avatar");
  return (r || ((r = Jr[Math.floor(Math.random() * Jr.length)]), Te.setItem("moodtree-avatar", r)), r);
}
function dp() {
  try {
    return JSON.parse(Te.getItem("moodtree-custom-cats") || "[]");
  } catch {
    return [];
  }
}
function Hm(r) {
  const u = dp();
  !u.includes(r) && !Mu.includes(r) && (u.push(r), Te.setItem("moodtree-custom-cats", JSON.stringify(u)));
}
function fp() {
  return [...Mu, ...dp()];
}
const Lm = { enabled: !1, mode: "auto", manualMode: "day", starryBg: !0, energyCard: !0, nightRadio: !0, dailyChallenge: !0, breathing: !0, sleepReminder: !1, sleepReminderTime: "23:30", aiStyle: "auto" };
function Kn() {
  try {
    const r = JSON.parse(Te.getItem("moodtree-dn-settings") || "{}");
    return { ...Lm, ...r };
  } catch {
    return { ...Lm };
  }
}
function Ea(r) {
  Te.setItem("moodtree-dn-settings", JSON.stringify(r));
}
function Rv() {
  const r = new Date().getHours();
  return r >= 6 && r < 18 ? "day" : "night";
}
function gn(r) {
  return r.enabled ? (r.mode === "auto" ? Rv() : r.manualMode) : "day";
}
function hp(r) {
  return r.enabled ? (r.aiStyle === "auto" ? gn(r) : r.aiStyle) : "";
}
function Ji(r, u) {
  let o = document.getElementById("mt-night-mode");
  if ((o || ((o = document.createElement("style")), (o.id = "mt-night-mode"), document.head.appendChild(o)), !r)) {
    o.textContent = "";
    return;
  }
  const c = u
    ? `
    body::before { content:""; position:fixed; top:0; left:0; right:0; bottom:0; z-index:0; pointer-events:none;
      background: radial-gradient(2.5px 2.5px at 12% 18%, rgba(255,255,255,0.9), transparent),
                  radial-gradient(2px 2px at 25% 8%, rgba(255,255,255,0.8), transparent),
                  radial-gradient(3px 3px at 38% 28%, rgba(255,255,255,0.95), transparent),
                  radial-gradient(2px 2px at 55% 12%, rgba(255,255,255,0.7), transparent),
                  radial-gradient(2.5px 2.5px at 70% 22%, rgba(255,255,255,0.85), transparent),
                  radial-gradient(2px 2px at 88% 15%, rgba(255,255,255,0.75), transparent),
                  radial-gradient(3px 3px at 5% 55%, rgba(255,255,255,0.9), transparent),
                  radial-gradient(2px 2px at 48% 48%, rgba(255,255,255,0.8), transparent),
                  radial-gradient(2.5px 2.5px at 75% 58%, rgba(255,255,255,0.85), transparent),
                  radial-gradient(2px 2px at 92% 52%, rgba(255,255,255,0.7), transparent),
                  radial-gradient(2px 2px at 15% 78%, rgba(255,255,255,0.75), transparent),
                  radial-gradient(3px 3px at 35% 88%, rgba(255,255,255,0.9), transparent),
                  radial-gradient(2px 2px at 60% 75%, rgba(255,255,255,0.8), transparent),
                  radial-gradient(2.5px 2.5px at 82% 85%, rgba(255,255,255,0.85), transparent),
                  radial-gradient(2px 2px at 45% 35%, rgba(255,255,255,0.7), transparent);
      animation: mt-twinkle 3s ease-in-out infinite alternate;
    }
    @keyframes mt-twinkle { from{opacity:0.6} to{opacity:1} }
  `
    : "";
  o.textContent = `
    body, .app-shell { background: #1a1a2e !important; color: #d4d4e8 !important; }
    .hero { background: linear-gradient(135deg, #16213e 0%, #0f3460 50%, #1a1a2e 100%) !important; }
    .hero h1 { color: #e8e8f0 !important; } .hero h1 em { color: #a8b4e8 !important; }
    .hero p { color: #a0a0c0 !important; } .eyebrow { color: #8888bb !important; }
    .hero-note span:last-child { color: #8888aa !important; }
    .content-wrap, main { background: #1a1a2e !important; }
    .post-card { background: #252542 !important; border-color: #2a2a4a !important; color: #d4d4e8 !important; }
    .post-card .post-title { color: #e0e0f0 !important; } .post-card .post-excerpt { color: #b0b0d0 !important; }
    .post-card .post-meta { color: #8888aa !important; }
    .categories button { background: #252542 !important; color: #b0b0d0 !important; border-color: #2a2a4a !important; }
    .categories button.selected { background: #3a3a5c !important; color: #e0e0f0 !important; }
    .section-heading h2 { color: #d0d0e8 !important; } .section-heading p { color: #8888aa !important; }
    .feed-title h2 { color: #d0d0e8 !important; }
    .modal-overlay { background: rgba(10,10,30,0.7) !important; }
    .modal-overlay > div { background: #252542 !important; color: #d4d4e8 !important; }
    input, textarea { background: #1e1e38 !important; color: #d4d4e8 !important; border-color: #3a3a5c !important; }
    input::placeholder, textarea::placeholder { color: #666688 !important; }
    .settings-list label b, .settings-list .settings-item b { color: #e0e0f0 !important; }
    .settings-list label small, .settings-list .settings-item small { color: #8888aa !important; }
    .mine-layout aside { background: #1e1e38 !important; }
    .mine-layout aside button { color: #b0b0d0 !important; }
    .mine-layout aside button.active { background: #2a2a4a !important; color: #e0e0f0 !important; }
    .profile-card { background: linear-gradient(110deg, #1e1e38, #252542) !important; }
    .id-display { background: #1e1e38 !important; color: #a8b4e8 !important; }
    .empty span { filter: brightness(1.2); } .empty h3 { color: #b0b0d0 !important; } .empty p { color: #8888aa !important; }
    .toast { background: #2a2a4a !important; color: #e0e0f0 !important; }
    header { background: rgba(26,26,46,0.95) !important; } header .login-link { color: #b0b0d0 !important; }
    .mobile-nav { background: rgba(26,26,46,0.95) !important; } .mobile-nav button { color: #8888aa !important; }
    .mobile-nav button.active { color: #a8b4e8 !important; }
    .chat-list-item { background: #252542 !important; border-color: #2a2a4a !important; }
    .ai-page-messages { background: #1e1e38 !important; }
    .ai-page-msg-ai .ai-page-msg-text { background: #252542 !important; color: #d4d4e8 !important; }
    .ai-page-input { background: #252542 !important; }
    .tree-art .trunk { background: #2a2a4a !important; } .leaf { opacity: 0.3 !important; }
    /* Chat page night mode */
    .chat-page-wrap { background: #1a1a2e !important; }
    .chat-wrap { background: #1a1a2e !important; }
    .chat-messages { background: #1e1e38 !important; }
    .chat-bubble { color: #d4d4e8 !important; }
    .chat-msg.other .chat-bubble { background: #252542 !important; color: #d4d4e8 !important; }
    .chat-time { color: #8888aa !important; }
    .chat-input-bar { background: #252542 !important; border-top: 1px solid #3a3a5c !important; }
    .chat-input-bar input { background: #1e1e38 !important; color: #d4d4e8 !important; border-color: #3a3a5c !important; }
    .chat-input-bar input::placeholder { color: #666688 !important; }
    .chat-header { background: #252542 !important; border-bottom: 1px solid #3a3a5c !important; }
    .chat-header h2 { color: #e0e0f0 !important; }
    .chat-info-panel { background: #1a1a2e !important; }
    .chat-info-panel > div { background: #252542 !important; color: #d4d4e8 !important; }
    .chat-info-item { color: #b0b0d0 !important; }
    .chat-info-item span { color: #b0b0d0 !important; }
    .chat-info-value { color: #8888bb !important; }
    .chat-list-item { background: #252542 !important; border-color: #2a2a4a !important; }
    .chat-list-item h3 { color: #e0e0f0 !important; }
    .chat-list-item p { color: #b0b0d0 !important; }
    .chat-list-item small { color: #8888aa !important; }
    /* Rooms page night mode */
    .page-wrap { background: #1a1a2e !important; }
    .room-card { background: #252542 !important; border-color: #2a2a4a !important; color: #d4d4e8 !important; }
    .room-card h3 { color: #e0e0f0 !important; }
    .room-card p { color: #b0b0d0 !important; }
    .room-detail { background: #252542 !important; color: #d4d4e8 !important; }
    .room-detail h3 { color: #e0e0f0 !important; }
    .room-detail p { color: #b0b0d0 !important; }
    /* Settings page night mode */
    .settings-list { background: #1e1e38 !important; }
    .settings-list label { border-color: #3a3a5c !important; }
    .settings-list button { border-color: #3a3a5c !important; }
    .settings-list b { color: #e0e0f0 !important; }
    .settings-list small { color: #8888aa !important; }
    /* Post detail text readability */
    .detail-copy p { color: #c0c0d8 !important; }
    .detail-card { background: #252542 !important; color: #d4d4e8 !important; }
    .comments-card { background: #252542 !important; color: #d4d4e8 !important; }
    .comment { border-color: #3a3a5c !important; }
    .comment-main p { color: #c0c0d8 !important; }
    .comment-main span { color: #8888aa !important; }
    .comment-form { background: #1e1e38 !important; }
    .comment-form textarea { color: #d4d4e8 !important; }
    .comment-form textarea::placeholder { color: #666688 !important; }
    .comment-form .comment-form-bottom span { color: #8888aa !important; }
    .detail-actions { border-color: #3a3a5c !important; }
    .detail-actions button { background: #1e1e38 !important; color: #b0b0d0 !important; }
    .detail-actions button.liked { color: #e8555e !important; }
    /* Empty states */
    .empty { background: rgba(37,37,66,0.65) !important; border-color: #3a3a5c !important; }
    .empty h3 { color: #b0b0d0 !important; }
    .empty p { color: #8888aa !important; }
    /* Mine page */
    .mine-content { background: #1e1e38 !important; }
    .mine-title { border-color: #3a3a5c !important; }
    .mine-title h2 { color: #e0e0f0 !important; }
    .mine-title p { color: #8888aa !important; }
    .mine-list button { border-color: #3a3a5c !important; }
    .mine-list h3 { color: #e0e0f0 !important; }
    .mine-list p { color: #b0b0d0 !important; }
    .mine-list small { color: #8888aa !important; }
    .mine-list button b { color: #8888aa !important; }
    .reputation-card { color: #d4d4e8 !important; }
    .reputation-card b { color: #e0e0f0 !important; }
    .reputation-card p { color: #c0c0d8 !important; }
    .violation-item { border-color: #3a3a5c !important; }
    .violation-snippet { color: #b0b0d0 !important; }
    .violation-words { color: #8888aa !important; }
    .violation-appeal-tip { color: #8888bb !important; }
    .safety-note { color: #b0b0d0 !important; }
    .safety-note b { color: #e0e0f0 !important; }
    /* Tags */
    .tag { color: #b0b0d0 !important; }
    /* Page intro */
    .page-intro h1 { color: #e0e0f0 !important; }
    .page-intro p { color: #8888aa !important; }
    /* Back button */
    .back-button { color: #a8b4e8 !important; }
    /* Buttons */
    button:not(.primary):not(.write-btn):not(.mobile-nav button):not(.categories button):not(.dn-seg button):not(.settings-list button) { color: #b0b0d0 !important; }
    /* Inline text */
    p, span, div { border-color: #3a3a5c; }
    ${c}
  `;
}
function zu(r) {
  const u = r.created_at;
  if (u) {
    const o = typeof u == "string" ? parseInt(u) : u;
    if (!isNaN(o) && o > 0) {
      const c = Date.now() - o;
      if (c < 6e4) return "刚刚";
      if (c < 36e5) return Math.floor(c / 6e4) + "分钟前";
      if (c < 864e5) return Math.floor(c / 36e5) + "小时前";
      if (c < 1728e5) return "昨天";
      const m = new Date(o);
      return `${m.getMonth() + 1}/${m.getDate()}`;
    }
  }
  return r.time || "刚刚";
}
function As(r, u) {
  return {
    id: String(r.id || r._id || Date.now()),
    author: r.author || "匿名",
    avatar: r.avatar || "云",
    avatarType: r.avatarType || "char",
    authorId: r.authorId,
    title: r.title || "",
    content: r.content || "",
    category: r.category || "生活",
    need: r.need || "我只想发泄",
    time: r.time || "刚刚",
    likes: r.likes || 0,
    hugs: r.hugs || 0,
    same: r.same || 0,
    comments: (r.comments || []).map((o) => ({
      id: String(o.id || Date.now()),
      author: o.author || "匿名",
      avatar: o.avatar,
      avatarType: o.avatarType,
      authorId: o.authorId || "",
      text: o.text || "",
      time: o.time || "刚刚",
      created_at: o.created_at,
      likes: o.likes || 0,
      replies: o.replies || [],
      isAI: !!o.isAI,
      images: o.images || [],
    })),
    saved: !!r.saved,
    mine: u ? r.authorId === u : !!r.mine,
    pinned: !!r.pinned,
    liked: !!r.liked,
    anonymous: !!r.anonymous,
    visibility: r.visibility || "public",
    coverImage: r.coverImage,
    images: r.images,
    videos: r.videos || [],
    roomId: r.roomId,
    diaryId: r.diaryId,
    edited_at: r.edited_at,
    created_at: r.created_at,
  };
}
function mp(r) {
  var h;
  const [u, o] = r.split(","),
    c = ((h = u.match(/:(.*?);/)) == null ? void 0 : h[1]) || "image/jpeg",
    m = atob(o),
    d = new Uint8Array(m.length);
  for (let v = 0; v < m.length; v++) d[v] = m.charCodeAt(v);
  return new Blob([d], { type: c });
}
async function Eu(r, u, o) {
  const c = await pe("/api/upload/presign", { filename: r, contentType: o });
  if (c.error || !c.uploadUrl) throw new Error("presign failed");
  return (
    await new Promise((m, d) => {
      const h = new XMLHttpRequest();
      (h.open("PUT", c.uploadUrl),
        h.setRequestHeader("x-cos-acl", c.aclHeader || "public-read"),
        (h.onload = () => (h.status >= 200 && h.status < 300 ? m() : d(new Error("upload failed")))),
        (h.onerror = () => d(new Error("network error"))),
        h.send(u));
    }),
    c.publicUrl
  );
}
async function Us(r) {
  return new Promise((u, o) => {
    const c = new FileReader();
    ((c.onload = (m) => {
      var h;
      const d = new Image();
      ((d.onload = async () => {
        const v = document.createElement("canvas"),
          j = d.height >= d.width * 2,
          y = j ? 1280 : 2048,
          C = j ? 12e3 : 2048,
          S = Math.min(1, y / d.width, C / d.height);
        let T = Math.round(d.width * S),
          H = Math.round(d.height * S);
        const k = 15e6;
        if (T * H > k) {
          const J = Math.sqrt(k / (T * H));
          ((T = Math.floor(T * J)), (H = Math.floor(H * J)));
        }
        ((v.width = T),
          (v.height = H),
          v.getContext("2d").drawImage(d, 0, 0, v.width, v.height),
          v.toBlob(
            async (J) => {
              if (!J) {
                o(new Error("compress failed"));
                return;
              }
              try {
                const D = await Eu(`img_${Date.now()}`, J, "image/jpeg");
                u(D);
              } catch (D) {
                o(D);
              }
            },
            "image/jpeg",
            0.9,
          ));
      }),
        (d.onerror = o),
        (d.src = (h = m.target) == null ? void 0 : h.result));
    }),
      (c.onerror = o),
      c.readAsDataURL(r));
  });
}
function Wi(r) {
  return navigator.clipboard
    ? navigator.clipboard.writeText(r)
    : new Promise((u) => {
        const o = document.createElement("textarea");
        ((o.value = r), (o.style.position = "fixed"), (o.style.opacity = "0"), document.body.appendChild(o), o.select(), document.execCommand("copy"), document.body.removeChild(o), u());
      });
}
function Ym(r) {
  return Um[Number(String(r).replace(/\D/g, "").slice(-2)) % Um.length];
}
function ju(r) {
  try {
    let u = 0;
    const o = r == null ? void 0 : r.created_at;
    if (typeof o == "number" && isFinite(o) && o > 0) u = o;
    else if (typeof o == "string" && o) {
      const m = Number(o);
      if (isFinite(m) && m > 0) u = m;
      else {
        const d = Date.parse(o);
        isNaN(d) || (u = d);
      }
    }
    if (!u) {
      const m = Number(r == null ? void 0 : r.id);
      isFinite(m) && m > 1e11 && (u = m);
    }
    if (!u && r != null && r.time) {
      const m = Date.parse(String(r.time).replace(/-/g, "/"));
      isNaN(m) || (u = m);
    }
    if (!u) return 0;
    const c = 300 * 1e3 - (Date.now() - u);
    return c > 0 ? c : 0;
  } catch {
    return 0;
  }
}
function pp(r) {
  try {
    const u = Math.max(0, Math.ceil((r || 0) / 1e3)),
      o = Math.floor(u / 60),
      c = u % 60;
    return `${o}:${String(c).padStart(2, "0")}`;
  } catch {
    return "0:00";
  }
}
function gp(r) {
  let u = 0,
    o = 0,
    c = 0;
  (r.length === 4 ? ((u = parseInt(r[1] + r[1], 16)), (o = parseInt(r[2] + r[2], 16)), (c = parseInt(r[3] + r[3], 16))) : ((u = parseInt(r.slice(1, 3), 16)), (o = parseInt(r.slice(3, 5), 16)), (c = parseInt(r.slice(5, 7), 16))),
    (u /= 255),
    (o /= 255),
    (c /= 255));
  const m = Math.max(u, o, c),
    d = Math.min(u, o, c);
  let h = 0,
    v = 0,
    j = (m + d) / 2;
  if (m !== d) {
    const y = m - d;
    ((v = j > 0.5 ? y / (2 - m - d) : y / (m + d)), m === u ? (h = (o - c) / y + (o < c ? 6 : 0)) : m === o ? (h = (c - u) / y + 2) : (h = (u - o) / y + 4), (h /= 6));
  }
  return [h * 360, v * 100, j * 100];
}
function Ht(r, u, o) {
  ((r /= 360), (u /= 100), (o /= 100));
  let c, m, d;
  if (u === 0) c = m = d = o;
  else {
    const v = (C, S, T) => (T < 0 && (T += 1), T > 1 && (T -= 1), T < 0.16666666666666666 ? C + (S - C) * 6 * T : T < 0.5 ? S : T < 0.6666666666666666 ? C + (S - C) * (0.6666666666666666 - T) * 6 : C),
      j = o < 0.5 ? o * (1 + u) : o + u - o * u,
      y = 2 * o - j;
    ((c = v(y, j, r + 1 / 3)), (m = v(y, j, r)), (d = v(y, j, r - 1 / 3)));
  }
  const h = (v) =>
    Math.round(v * 255)
      .toString(16)
      .padStart(2, "0");
  return `#${h(c)}${h(m)}${h(d)}`;
}
function $r(r, u, o, c) {
  ((r /= 360), (u /= 100), (o /= 100));
  let m, d, h;
  if (u === 0) m = d = h = o;
  else {
    const v = (C, S, T) => (T < 0 && (T += 1), T > 1 && (T -= 1), T < 0.16666666666666666 ? C + (S - C) * 6 * T : T < 0.5 ? S : T < 0.6666666666666666 ? C + (S - C) * (0.6666666666666666 - T) * 6 : C),
      j = o < 0.5 ? o * (1 + u) : o + u - o * u,
      y = 2 * o - j;
    ((m = v(y, j, r + 1 / 3)), (d = v(y, j, r)), (h = v(y, j, r - 1 / 3)));
  }
  return `rgba(${Math.round(m * 255)},${Math.round(d * 255)},${Math.round(h * 255)},${c})`;
}
function Ir(r) {
  const u = document.documentElement,
    [o, c, m] = gp(r),
    d = Ht(o, Math.min(c + 5, 100), Math.max(m - 15, 5)),
    h = Ht(o, Math.min(c, 40), 93),
    v = Ht(o, Math.min(c, 15), 95);
  (u.style.setProperty("--sage", r), u.style.setProperty("--sage-dark", d), u.style.setProperty("--sage-soft", h), u.style.setProperty("--cream", v));
  let j = document.getElementById("mt-theme-overrides");
  j || ((j = document.createElement("style")), (j.id = "mt-theme-overrides"), document.head.appendChild(j));
  const y = $r(o, c, m, 0.2),
    C = $r(o, c, Math.max(m - 15, 5), 0.26);
  j.textContent = `
    .write-btn,.hero-button,.primary,.form-actions .primary { background:${d}!important; box-shadow:0 7px 20px ${y}!important; }
    .write-btn:hover,.hero-button:hover,.primary:hover { background:${Ht(o, c, Math.max(m - 20, 3))}!important; box-shadow:0 10px 25px ${C}!important; }
    .logo-mark { background:${d}!important; box-shadow:0 6px 18px ${$r(o, c, Math.max(m - 10, 5), 0.17)}!important; }
    .hero { background:linear-gradient(112deg,${Ht(o, Math.min(c, 15), 94)} 0%,${v} 58%,${h} 100%)!important; }
    .hero h1 em { color:${d}!important; } .hero h1 em:after { background:${Ht(o, Math.min(c, 30), 80)}!important; }
    .eyebrow { color:${d}!important; } .live-dot { background:${r}!important; box-shadow:0 0 0 5px ${h}!important; }
    .avatar { background:${Ht(o, Math.min(c, 30), 65)}; }
    .need-pill { background:${h}!important; color:${Ht(o, c, Math.max(m - 15, 10))}!important; }
    .anonymous-note { background:${h}!important; } .privacy { color:${Ht(o, c, Math.max(m - 10, 10))}!important; }
    .mobile-write .icon { background:${d}!important; box-shadow:0 7px 17px ${y}!important; }
    .mobile-nav button.active { color:${d}!important; } .desktop-nav button.active:after { background:${r}!important; }
    .profile-avatar { background:${Ht(o, Math.min(c, 30), 60)}!important; }
    .profile-card { background:linear-gradient(110deg,${v},${h})!important; }
    .profile-actions { display:flex; flex-direction:column; gap:10px; margin-top:8px; }
    .profile-actions button { padding:10px 24px; border:1px solid var(--sage-soft,#e8f0ea); border-radius:10px; background:transparent; font-size:14px; cursor:pointer; color:var(--sage-dark,#6f917d); white-space:nowrap; }
    .profile-actions button:first-child { background:var(--sage-dark,#6f917d); color:#fff; border-color:var(--sage-dark,#6f917d); }
    .mine-layout aside button.active { background:${h}!important; color:${d}!important; }
    .categories button.selected { background:${d}!important; border-color:${d}!important; box-shadow:0 8px 22px ${y}!important; }
    .comment-form button,.phone-form>button { background:${d}!important; }
    .social-login .wechat span { background:#20b967!important; }
    .leaf { background:${Ht(o, Math.min(c, 30), 70)}!important; } .l2 { background:${Ht(o, Math.min(c, 35), 60)}!important; }
    .l3 { background:${Ht(o, Math.min(c, 25), 72)}!important; } .l4 { background:${Ht(o, Math.min(c, 30), 62)}!important; }
    .l5 { background:${Ht(o, Math.min(c, 20), 75)}!important; }
    .glow-one { background:${$r(o, Math.min(c, 40), 70, 0.28)}!important; }
    .theme-fab { background:${d}!important; box-shadow:0 6px 20px ${y}!important; }
    .tag { background:${h}!important; color:${Ht(o, c, Math.max(m - 15, 10))}!important; }
    .empty>button { background:${d}!important; }
    .hero:before { background-image:radial-gradient(${Ht(o, Math.min(c, 30), 65)} .7px,transparent .7px)!important; }
    .room-card,.diary-card { border-color:${Ht(o, Math.min(c, 20), 88)}!important; }
    .room-card:hover,.diary-card:hover { border-color:${Ht(o, Math.min(c, 30), 75)}!important; }
    .id-badge { background:${h}!important; color:${d}!important; }
    .modal-overlay { backdrop-filter:blur(8px); }
    /* 屏蔽分享页平台注入的右下浮动推广按钮，遮挡底部导航"我的" */
    .button-container, .edgeone-button { display:none!important; }
  `;
}
function xp() {
  return n.jsxs("div", {
    className: "logo",
    "aria-label": "MoodTree 情绪树洞",
    children: [n.jsx("span", { className: "logo-mark", children: "M" }), n.jsxs("span", { children: [n.jsx("b", { children: "MoodTree" }), n.jsx("small", { children: "情绪树洞" })] })],
  });
}
function Rl({ children: r }) {
  return n.jsx("span", { "aria-hidden": "true", className: "icon", children: r });
}
function qt({ user: r, size: u }) {
  const o = u || 35,
    [c, m] = p.useState(!1);
  return r.avatarType === "image" && r.avatar && !c
    ? n.jsx("span", {
        className: "avatar",
        style: { width: o, height: o, background: Ym(r.id || r.avatar), flex: `0 0 ${o}px`, overflow: "hidden" },
        children: n.jsx("img", { src: r.avatar, alt: "", style: { width: "100%", height: "100%", objectFit: "cover", display: "block" }, onError: () => m(!0) }),
      })
    : n.jsx("span", { className: "avatar", style: { width: o, height: o, background: Ym(r.id || r.avatar), flex: `0 0 ${o}px` }, children: r.avatar });
}
function Ov({ color: r, onChange: u }) {
  const o = p.useRef(null),
    c = p.useRef(null),
    m = p.useRef(-1),
    d = p.useRef(!1),
    h = p.useRef(void 0),
    [v, j] = p.useState(() => {
      const [D, I, V] = gp(r);
      return { h: D, s: I, l: V };
    }),
    y = p.useRef(v);
  y.current = v;
  const C = 200,
    S = (D) => {
      c.current || ((c.current = document.createElement("canvas")), (c.current.width = C), (c.current.height = C));
      const V = c.current.getContext("2d"),
        de = C / 2,
        P = C / 2,
        Y = de - 2,
        K = V.createImageData(C, C),
        F = K.data,
        Z = D / 100;
      for (let ye = 0; ye < C; ye++)
        for (let Ce = 0; Ce < C; Ce++) {
          const Se = Ce - de,
            ke = ye - P,
            Oe = Math.sqrt(Se * Se + ke * ke);
          if (Oe > Y) continue;
          const ue = ((Math.atan2(ke, Se) * 180) / Math.PI + 360) % 360,
            $ = Math.min(1, Oe / Y) * Math.min(Z, 1 - Z),
            le = (be) => {
              const w = (be + ue / 30) % 12;
              return Math.round((Z - $ * Math.max(-1, Math.min(w - 3, 9 - w, 1))) * 255);
            },
            fe = (ye * C + Ce) * 4;
          ((F[fe] = le(0)), (F[fe + 1] = le(8)), (F[fe + 2] = le(4)), (F[fe + 3] = 255));
        }
      (V.putImageData(K, 0, 0), (m.current = D));
    },
    T = () => {
      const D = o.current;
      if (!D) return;
      const I = D.getContext("2d");
      (m.current !== y.current.l && S(y.current.l), I.clearRect(0, 0, C, C), I.drawImage(c.current, 0, 0));
      const V = C / 2,
        de = C / 2,
        P = V - 2,
        Y = (y.current.h * Math.PI) / 180,
        K = (y.current.s / 100) * P,
        F = V + Math.cos(Y) * K,
        Z = de + Math.sin(Y) * K;
      (I.beginPath(), I.arc(F, Z, 7, 0, Math.PI * 2), (I.strokeStyle = "#fff"), (I.lineWidth = 3), I.stroke(), I.beginPath(), I.arc(F, Z, 7, 0, Math.PI * 2), (I.strokeStyle = "rgba(0,0,0,.35)"), (I.lineWidth = 1), I.stroke());
    },
    H = () => {
      (h.current && cancelAnimationFrame(h.current), (h.current = requestAnimationFrame(T)));
    };
  (p.useEffect(() => {
    H();
  }),
    p.useEffect(
      () => () => {
        h.current && cancelAnimationFrame(h.current);
      },
      [],
    ),
    p.useEffect(() => {
      d.current || u(Ht(v.h, v.s, v.l));
    }, [v.h, v.s]));
  const k = p.useRef(void 0);
  p.useEffect(
    () => (
      k.current && clearTimeout(k.current),
      (k.current = window.setTimeout(() => {
        u(Ht(y.current.h, y.current.s, y.current.l));
      }, 250)),
      () => {
        k.current && clearTimeout(k.current);
      }
    ),
    [v.l],
  );
  const X = (D, I) => {
      const V = o.current;
      if (!V) return;
      const de = V.getBoundingClientRect(),
        P = D - de.left - de.width / 2,
        Y = I - de.top - de.height / 2,
        K = Math.sqrt(P * P + Y * Y),
        F = de.width / 2;
      j((Z) => ({ ...Z, h: ((Math.atan2(Y, P) * 180) / Math.PI + 360) % 360, s: Math.min(100, (K / F) * 100) }));
    },
    J = () => {
      ((d.current = !1), u(Ht(y.current.h, y.current.s, y.current.l)));
    };
  return n.jsxs("div", {
    className: "color-wheel-picker",
    children: [
      n.jsx("canvas", {
        ref: o,
        width: C,
        height: C,
        className: "color-wheel-canvas",
        onTouchStart: (D) => {
          (D.preventDefault(), (d.current = !0));
          const I = D.touches[0];
          X(I.clientX, I.clientY);
        },
        onTouchMove: (D) => {
          if ((D.preventDefault(), d.current)) {
            const I = D.touches[0];
            X(I.clientX, I.clientY);
          }
        },
        onTouchEnd: (D) => {
          (D.preventDefault(), J());
        },
        onMouseDown: (D) => {
          ((d.current = !0), X(D.clientX, D.clientY));
        },
        onMouseMove: (D) => {
          d.current && X(D.clientX, D.clientY);
        },
        onMouseUp: J,
        onMouseLeave: () => {
          d.current && J();
        },
      }),
      n.jsxs("div", {
        className: "color-wheel-bottom",
        children: [
          n.jsx("div", { className: "color-wheel-preview", style: { background: Ht(v.h, v.s, v.l) } }),
          n.jsx("input", {
            type: "range",
            min: 0,
            max: 100,
            value: v.l,
            className: "color-wheel-slider",
            onChange: (D) => j((I) => ({ ...I, l: parseInt(D.target.value) })),
            style: { background: `linear-gradient(to right, #000, hsl(${v.h}, ${v.s}%, 50%), #fff)` },
          }),
          n.jsx("span", { className: "color-wheel-hex", children: Ht(v.h, v.s, v.l) }),
        ],
      }),
    ],
  });
}
const _v = [
  { name: "暖阳", value: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)" },
  { name: "森绿", value: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" },
  { name: "海蓝", value: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)" },
  { name: "薰衣草", value: "linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)" },
  { name: "夜空", value: "linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)" },
  { name: "奶白", value: "linear-gradient(135deg, #fdfbf7 0%, #ebedee 100%)" },
  { name: "桃粉", value: "linear-gradient(135deg, #ffd3a5 0%, #fd6585 100%)" },
  { name: "薄荷", value: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)" },
];
function Uv() {
  const [r, u] = p.useState("home"),
    [o, c] = p.useState([]),
    [m, d] = p.useState("全部"),
    [h, v] = p.useState(() => {
      try {
        const M = Number(Bm.getItem("moodtree-feed-count"));
        return M >= 10 ? M : 10;
      } catch {
        return 10;
      }
    }),
    j = (M) => {
      v((Q) => {
        const oe = typeof M == "function" ? M(Q) : M;
        try {
          Bm.setItem("moodtree-feed-count", String(oe));
        } catch {}
        return oe;
      });
    },
    y = p.useRef(0),
    [C, S] = p.useState(""),
    [T, H] = p.useState(""),
    [k, X] = p.useState(null),
    [J, D] = p.useState(!1),
    [I, V] = p.useState("#6f917d"),
    [de, P] = p.useState(!0),
    [Y] = p.useState(Kn()),
    [K, F] = p.useState(!1),
    [Z, ye] = p.useState(null),
    [Ce, Se] = p.useState(!1),
    [ke, Oe] = p.useState(""),
    [ue, R] = p.useState([]),
    [$, le] = p.useState(null),
    [fe, be] = p.useState("list"),
    [w, x] = p.useState(!1),
    [N, _] = p.useState(!1),
    [ee, he] = p.useState(!1),
    [je, ze] = p.useState(!1),
    [Ee, Pe] = p.useState(null),
    [Ve, pt] = p.useState(null),
    [ot, gt] = p.useState(null),
    [yt, fa] = p.useState(!1),
    [we, st] = p.useState(null),
    [Mt, zt] = p.useState(0),
    [$e, jt] = p.useState(null),
    [xa, We] = p.useState(null),
    It = (M, Q, oe) => jt({ text: M, x: Q ?? window.innerWidth / 2, y: oe ?? 240, src: "hold" }),
    Xt = () => {
      var Q;
      return (((Q = window.getSelection()) == null ? void 0 : Q.toString().trim()) || ($e == null ? void 0 : $e.text) || "").slice(0, 2e3);
    },
    Rt = async () => {
      const M = Xt();
      if ((Ya(), !!M))
        try {
          (await Wi(M), me("已复制到剪贴板"));
        } catch {
          me("复制失败");
        }
    },
    Gt = async () => {
      const M = Xt();
      if ((Ya(), !!M)) {
        me("翻译中…");
        try {
          const Q = await Au(M);
          Q ? We(Q) : me("翻译失败");
        } catch {
          me("翻译失败，请重试");
        }
      }
    },
    Zt = p.useRef(""),
    Dt = p.useRef(null);
  p.useEffect(() => {
    Dt.current = $e;
  }, [$e]);
  const Ya = () => {
    var M, Q, oe;
    ((Zt.current = ((M = Dt.current) == null ? void 0 : M.text) || ((Q = window.getSelection()) == null ? void 0 : Q.toString().trim()) || ""), jt(null));
    try {
      (oe = window.getSelection()) == null || oe.removeAllRanges();
    } catch {}
  };
  (p.useEffect(() => {
    let M = null;
    const Q = () => {
      try {
        const Ue = window.getSelection(),
          _e = (Ue == null ? void 0 : Ue.toString().trim()) || "";
        if (_e.length >= 1 && Ue && Ue.rangeCount > 0) {
          const Le = Ue.getRangeAt(0).getBoundingClientRect();
          if (Le && (Le.width > 0 || Le.height > 0)) return { text: _e, x: Le.left + Le.width / 2, y: Le.top };
        }
      } catch {}
      return null;
    };
    let oe = "";
    const Ne = setInterval(() => {
        var _e;
        const Ue = Q();
        if (!Ue) {
          ((oe = ""), (Zt.current = ""), ((_e = Dt.current) == null ? void 0 : _e.src) === "sel" && jt(null));
          return;
        }
        Ue.text !== Zt.current &&
          (Dt.current ||
            (Ue.text !== oe &&
              ((oe = Ue.text),
              clearTimeout(M),
              (M = setTimeout(() => {
                const Le = Q();
                !Le || Le.text === Zt.current || Dt.current || jt({ text: Le.text, x: Le.x, y: Le.y, src: "sel" });
              }, 450)))));
      }, 400),
      De = () => {
        var _e;
        const Ue = ((_e = window.getSelection()) == null ? void 0 : _e.toString().trim()) || "";
        Dt.current && Ue && Ue !== Dt.current.text && jt(null);
      };
    return (
      document.addEventListener("selectionchange", De),
      () => {
        (clearTimeout(M), clearInterval(Ne), document.removeEventListener("selectionchange", De));
      }
    );
  }, []),
    p.useEffect(() => {
      Av(() => {
        (X(null), U("home"), me("登录已过期，请重新登录"), D(!0));
      });
    }, []),
    p.useEffect(() => {
      let M = "";
      try {
        M = JSON.parse(Te.getItem("moodtree-user") || "{}").id || "";
      } catch {}
      qe(`/api/posts?viewerId=${M}`)
        .then((_e) => {
          const Le = Array.isArray(_e) ? _e : _e.posts || _e.data || [];
          (c(Le.map((rt) => As(rt, M))), P(!1));
        })
        .catch(() => {
          P(!1);
        });
      const Q = setInterval(() => {
          const _e = (() => {
            try {
              return JSON.parse(Te.getItem("moodtree-user") || "{}").id || "";
            } catch {
              return "";
            }
          })();
          qe(`/api/posts?viewerId=${_e}`)
            .then((Le) => {
              const rt = Array.isArray(Le) ? Le : Le.posts || Le.data || [];
              c(rt.map((ht) => As(ht, _e)));
            })
            .catch(() => {});
        }, 15e3),
        oe = () => {
          if (document.visibilityState === "visible") {
            const _e = (() => {
              try {
                return JSON.parse(Te.getItem("moodtree-user") || "{}").id || "";
              } catch {
                return "";
              }
            })();
            qe(`/api/posts?viewerId=${_e}`)
              .then((Le) => {
                const rt = Array.isArray(Le) ? Le : Le.posts || Le.data || [];
                c(rt.map((ht) => As(ht, _e)));
              })
              .catch(() => {});
          }
        };
      document.addEventListener("visibilitychange", oe);
      const Ne = Te.getItem("moodtree-user") || Bm.getItem("moodtree-user");
      if ((Ne && !bu() && Te.removeItem("moodtree-user"), Ne && bu()))
        try {
          const _e = JSON.parse(Ne);
          (_e.id && _e.id.startsWith("MT") && _e.id.length === 8 && ((_e.id = "MT" + _e.id.slice(2).padStart(8, "0")), Te.setItem("moodtree-user", JSON.stringify(_e))),
            X(_e),
            qe(`/api/user/${_e.id}`)
              .then((Le) => {
                if (Le.user && Le.user.nickname) {
                  const rt = { ..._e, nickname: Le.user.nickname, avatar: Le.user.avatar || _e.avatar, avatarType: Le.user.avatarType || _e.avatarType };
                  (Te.setItem("moodtree-user", JSON.stringify(rt)), Te.setItem("moodtree-nickname", rt.nickname), Te.setItem("moodtree-avatar", rt.avatar), X(rt));
                }
                Le.user && Le.user.welcomeMsg !== void 0 && (Le.user.welcomeMsg ? Te.setItem("moodtree-welcome-msg", Le.user.welcomeMsg) : Te.removeItem("moodtree-welcome-msg"));
              })
              .catch(() => {}));
        } catch {}
      const De = Te.getItem("moodtree-theme-color");
      De && (V(De), Ir(De));
      const Ue = Kn();
      if ((Ue.enabled && Ji(gn(Ue) === "night", Ue.starryBg), Ue.enabled && Ue.energyCard && gn(Ue) === "day")) {
        const _e = new Date().toDateString();
        Te.getItem("moodtree-energy-card-date") !== _e &&
          (Te.setItem("moodtree-energy-card-date", _e),
          pe("/api/ai/energy-card", {})
            .then((rt) => {
              rt.quote && (ye(rt), F(!0));
            })
            .catch(() => {}));
      }
      if (Ue.enabled && Ue.sleepReminder) {
        const _e = () => {
          const rt = new Date(),
            [ht, Nt] = Ue.sleepReminderTime.split(":").map(Number),
            ba = new Date();
          if ((ba.setHours(ht, Nt, 0, 0), Math.abs(rt.getTime() - ba.getTime()) < 6e4)) {
            const ge = Te.getItem("moodtree-sleep-remind-date"),
              Ae = rt.toDateString();
            ge !== Ae && (Te.setItem("moodtree-sleep-remind-date", Ae), Se(!0));
          }
        };
        _e();
        const Le = setInterval(_e, 6e4);
        return () => {
          (clearInterval(Q), document.removeEventListener("visibilitychange", oe), clearInterval(Le));
        };
      }
      return () => {
        (clearInterval(Q), document.removeEventListener("visibilitychange", oe));
      };
    }, []),
    p.useEffect(() => {
      k &&
        qe(`/api/posts?viewerId=${k.id}`)
          .then((M) => {
            const Q = Array.isArray(M) ? M : M.posts || M.data || [];
            c(Q.map((oe) => As(oe, k.id)));
          })
          .catch(() => {});
    }, [k]),
    p.useEffect(() => {
      if (!(k != null && k.id)) return;
      const M = {
        themeColor: Te.getItem("moodtree-theme-color") || "#6f917d",
        welcomeMsg: Te.getItem("moodtree-welcome-msg") || "",
        nightSettings: Kn(),
        customCategories: (() => { try { return JSON.parse(Te.getItem("moodtree-custom-cats") || "[]"); } catch { return []; } })(),
        drafts: (() => { try { return JSON.parse(Te.getItem("moodtree-drafts") || "[]"); } catch { return []; } })(),
      };
      qe("/api/sync").then((Q) => {
        const oe = Q.data || {};
        if (Object.keys(oe).length === 0) {
          pe("/api/sync", { data: M }).catch(() => {});
          return;
        }
        oe.themeColor && (Te.setItem("moodtree-theme-color", oe.themeColor), V(oe.themeColor), Ir(oe.themeColor));
        oe.welcomeMsg !== void 0 && (oe.welcomeMsg ? Te.setItem("moodtree-welcome-msg", oe.welcomeMsg) : Te.removeItem("moodtree-welcome-msg"));
        oe.nightSettings && Te.setItem("moodtree-night-settings", JSON.stringify(oe.nightSettings));
        oe.customCategories && Te.setItem("moodtree-custom-cats", JSON.stringify(oe.customCategories));
        oe.drafts && Te.setItem("moodtree-drafts", JSON.stringify(oe.drafts));
      }).catch(() => {});
      const Q = window.setInterval(() => pe("/api/sync", { data: {
        themeColor: Te.getItem("moodtree-theme-color") || "#6f917d",
        welcomeMsg: Te.getItem("moodtree-welcome-msg") || "",
        nightSettings: Kn(),
        customCategories: (() => { try { return JSON.parse(Te.getItem("moodtree-custom-cats") || "[]"); } catch { return []; } })(),
        drafts: (() => { try { return JSON.parse(Te.getItem("moodtree-drafts") || "[]"); } catch { return []; } })(),
      } }).catch(() => {}), 30000);
      return () => window.clearInterval(Q);
    }, [k == null ? void 0 : k.id]),
    p.useEffect(() => {
      r === "rooms" && k && fe === "list" && Vt();
    }, [r, k, fe]),
    p.useEffect(() => {
      if (!k) {
        zt(0);
        return;
      }
      const M = () => {
        qe(`/api/chat/unread?userId=${k.id}`)
          .then((oe) => zt(oe.total || 0))
          .catch(() => {});
      };
      M();
      const Q = setInterval(M, 1e4);
      return () => clearInterval(Q);
    }, [k]));
  const Vt = async () => {
      if (k) {
        x(!0);
        try {
          const M = await qe(`/api/rooms/list/${k.id}`);
          R(M.rooms || []);
        } catch {}
        x(!1);
      }
    },
    St = async (M) => {
      try {
        const Q = await qe(`/api/rooms/${M}`);
        Q.room && (le({ room: Q.room, members: Q.members || [] }), be("detail"));
      } catch {
        me("加载房间失败");
      }
    };
  p.useEffect(() => {
    if (r !== "home") return;
    const M = () => {
      y.current = window.scrollY;
    };
    return (window.addEventListener("scroll", M, { passive: !0 }), () => window.removeEventListener("scroll", M));
  }, [r]);
  const U = (M) => {
      if ((r === "home" && M !== "home" && (y.current = window.scrollY), u(M), M === "home" && r !== "home")) {
        const Q = y.current;
        Q > 0 &&
          requestAnimationFrame(() => {
            requestAnimationFrame(() => window.scrollTo({ top: Q, behavior: "instant" }));
          });
      } else window.scrollTo({ top: 0, behavior: "instant" });
    },
    xe = (M) => {
      (M !== m && j(10), d(M));
    },
    ve = (M) => {
      if (!k) {
        D(!0);
        return;
      }
      U(M);
    },
    Qe = (M) => {
      (S(M), U("detail"));
    },
    Ge = (M, Q, oe) => {
      if (!k) {
        D(!0);
        return;
      }
      const Ne = prompt(`举报「${oe}」的内容，请输入原因（可留空）：`) ?? "";
      Ne !== null &&
        pe("/api/report", { reporterId: k.id, targetType: "post", targetId: M, postId: M, authorId: Q, reason: Ne || "内容不当" })
          .then((De) => {
            De && De.success ? me("举报已提交，我们会尽快处理") : me((De == null ? void 0 : De.error) || "举报失败");
          })
          .catch(() => me("举报失败，请重试"));
    },
    Ze = (M, Q) => {
      if (!k) {
        D(!0);
        return;
      }
      confirm(`确定要拉黑「${Q}」吗？拉黑后将不会看到对方的内容。`) &&
        pe("/api/user/block", { userId: k.id, targetUserId: M })
          .then((oe) => {
            oe && oe.success ? (me(`已拉黑 ${Q}`), c((Ne) => Ne.filter((De) => De.authorId !== M))) : me((oe == null ? void 0 : oe.error) || "拉黑失败");
          })
          .catch(() => me("拉黑失败，请重试"));
    },
    Fe = p.useRef(0),
    me = (M) => {
      (H(M), window.clearTimeout(Fe.current), (Fe.current = window.setTimeout(() => H(""), 2500)));
    },
    $t = (M, Q) => {
      if (!k) {
        D(!0);
        return;
      }
      if (Q === "saved") (c((oe) => oe.map((Ne) => (Ne.id === M ? { ...Ne, saved: !Ne.saved } : Ne))), pe(`/api/posts/${M}/save`, { userId: (k == null ? void 0 : k.id) || "" }).catch(() => {}), me("收藏状态已更新"));
      else if (Q === "likes") {
        (c((Ne) =>
          Ne.map((De) => {
            if (De.id !== M) return De;
            const Ue = !!De.liked;
            return { ...De, liked: !Ue, likes: Ue ? De.likes - 1 : De.likes + 1 };
          }),
        ),
          pe(`/api/posts/${M}/react`, { type: Q, userId: (k == null ? void 0 : k.id) || "" }).catch(() => {}));
        const oe = o.find((Ne) => Ne.id === M);
        oe && !oe.liked && me("已点亮一颗心");
      } else
        (c((oe) => oe.map((Ne) => (Ne.id === M ? { ...Ne, [Q]: Ne[Q] + 1 } : Ne))),
          pe(`/api/posts/${M}/react`, { type: Q, userId: (k == null ? void 0 : k.id) || "" }).catch(() => {}),
          me(Q === "hugs" ? "抱抱已送达 🤍" : Q === "same" ? "谢谢你让 TA 知道并不孤单" : "已点亮一颗心"));
    },
    xt = async (M) => {
      try {
        const Q = await pe(`/api/posts/${M}/delete`, { userId: (k == null ? void 0 : k.id) || "" });
        if (Q.error) {
          me(Q.error);
          return;
        }
        (c((oe) => oe.filter((Ne) => Ne.id !== M)), me("帖子已删除"));
      } catch {
        me("删除失败，请重试");
      }
    },
    Kt = async (M) => {
      (c((Q) => Q.map((oe) => (oe.id === M ? { ...oe, pinned: !oe.pinned } : oe))), pe(`/api/posts/${M}/pin`, { userId: (k == null ? void 0 : k.id) || "" }).catch(() => {}), me("置顶状态已更新"));
    },
    Jt = p.useMemo(() => ["全部", ...fp()], [o]),
    ca = p.useMemo(() => (m === "全部" ? o : o.filter((M) => (M.category || "").split(", ").filter(Boolean).includes(m))), [o, m]),
    ha = o.find((M) => M.id === C) || (C ? null : o[0]) || null,
    va = async (M) => {
      try {
        (await pe("/api/rooms/leave", { roomId: M, userId: k.id }), be("list"), le(null), Vt(), me("已退出房间"));
      } catch {
        me("退出失败");
      }
    },
    O = (M) => {
      st(M);
    };
  return n.jsxs("div", {
    className: "app-shell",
    children: [
      n.jsx("header", {
        className: "topbar",
        style: { display: yt ? "none" : void 0 },
        children: n.jsxs("div", {
          className: "topbar-inner",
          children: [
            n.jsx("button", { className: "plain logo-button", onClick: () => U("home"), children: n.jsx(xp, {}) }),
            n.jsxs("nav", {
              className: "desktop-nav",
              "aria-label": "主导航",
              children: [
                n.jsx("button", { className: r === "home" ? "active" : "", onClick: () => U("home"), children: "首页" }),
                n.jsx("button", { className: r === "chat" ? "active" : "", onClick: () => ve("chat"), children: "聊天" }),
                n.jsx("button", { className: r === "publish" ? "active" : "", onClick: () => ve("publish"), children: "写一写" }),
                n.jsx("button", { className: r === "rooms" ? "active" : "", onClick: () => ve("rooms"), children: "房间" }),
                n.jsx("button", { className: r === "mine" ? "active" : "", onClick: () => ve("mine"), children: "我的" }),
              ],
            }),
            n.jsxs("div", {
              className: "top-actions",
              children: [
                n.jsx("button", { className: "login-link", onClick: () => (k ? U("mine") : D(!0)), children: k ? k.nickname : "登录" }),
                n.jsxs("button", { className: "write-btn", onClick: () => ve("publish"), children: [n.jsx(Rl, { children: "＋" }), " 写下心情"] }),
              ],
            }),
          ],
        }),
      }),
      n.jsxs("main", {
        children: [
          r === "home" &&
            n.jsx(Yv, {
              posts: ca,
              category: m,
              onSelectCategory: xe,
              allCats: Jt,
              openPost: Qe,
              react: $t,
              onWrite: () => ve("publish"),
              user: k,
              loading: de,
              visibleCount: h,
              onLoadMore: () => j((M) => M + 10),
              onRequireLogin: () => D(!0),
              onAvatarClick: Pe,
              onShare: gt,
              onTextMenu: It,
              onReport: Ge,
              onBlock: Ze,
            }),
          r === "rooms" &&
            k &&
            n.jsx(a0, {
              user: k,
              rooms: ue,
              roomView: fe,
              roomDetail: $,
              loadingRooms: w,
              onOpenRoom: St,
              onBackToList: () => {
                (be("list"), le(null));
              },
              onCreateRoom: () => _(!0),
              onJoinRoom: () => he(!0),
              onCopyCode: (M) => {
                (Wi(M), me(`邀请码 ${M} 已复制`));
              },
              onLeaveRoom: va,
              flash: me,
              onAvatarClick: Pe,
            }),
          r === "publish" &&
            k &&
            n.jsx(Xv, {
              onCancel: () => {
                (Oe(""), U(ke ? "rooms" : "home"));
              },
              onPublish: async (M) => {
                try {
                  const Q = await pe("/api/posts", {
                    title: M.title,
                    content: M.content,
                    category: M.category,
                    need: M.need,
                    author: M.author,
                    avatar: M.avatar,
                    visibility: M.visibility,
                    authorId: M.authorId,
                    avatarType: M.avatarType,
                    images: M.images,
                    videos: M.videos,
                    coverImage: M.coverImage,
                    roomId: M.roomId,
                    diaryId: M.diaryId,
                  });
                  if (Q.error) return (me(Q.error), Q);
                  const oe = As(Q.post || Q.data || Q, k.id);
                  return (c((Ne) => [oe, ...Ne]), S(oe.id), Oe(""), j(10), me("你的心事已经被树洞接住了"), U("detail"), Q);
                } catch {
                  return (me("发布失败，请稍后重试"), null);
                }
              },
              user: k,
              publishRoomId: ke,
              flash: me,
            }),
          r === "detail" &&
            ha &&
            n.jsx(Gv, { post: ha, onBack: () => U("home"), react: $t, update: (M) => c((Q) => Q.map((oe) => (oe.id === M.id ? M : oe))), user: k, onStartDM: O, flash: me, onRequireLogin: () => D(!0), onAvatarClick: Pe, onShare: gt, onTextMenu: It }),
          r === "mine" &&
            k &&
            n.jsx(e0, {
              posts: o,
              openPost: Qe,
              user: k,
              onSignOut: () => {
                (Te.removeItem("moodtree-user"), cp(), X(null), U("home"), me("已安全退出"));
              },
              onEditProfile: () => ze(!0),
              onStartDM: O,
              flash: me,
              themeColor: I,
              setThemeColor: V,
              onDeletePost: xt,
              onTogglePin: Kt,
              onNavigate: U,
              onEditPost: (M) => pt(M),
              onAvatarClick: Pe,
            }),
          r === "chat" &&
            k &&
            n.jsx(Qv, {
              user: k,
              onStartDM: O,
              onOpenRoom: (M) => {
                (u("rooms"), St(M));
              },
              flash: me,
              onUnreadUpdate: zt,
              onFullscreenChange: fa,
              onTextMenu: It,
            }),
        ],
      }),
      n.jsxs("nav", {
        className: "mobile-nav",
        "aria-label": "底部导航",
        style: { display: yt ? "none" : void 0 },
        children: [
          n.jsxs("button", { className: r === "home" ? "active" : "", onClick: () => U("home"), children: [n.jsx(Rl, { children: "⌂" }), n.jsx("span", { children: "首页" })] }),
          n.jsxs("button", {
            className: r === "chat" ? "active" : "",
            onClick: () => ve("chat"),
            children: [n.jsx(Rl, { children: "⊡" }), n.jsx("span", { children: "聊天" }), Mt > 0 && n.jsx("span", { className: "nav-unread-badge", children: Mt > 99 ? "99+" : Mt })],
          }),
          n.jsxs("button", { className: "write-btn", onClick: () => ve("publish"), children: [n.jsx(Rl, { children: "＋" }), n.jsx("span", { children: "写" })] }),
          n.jsxs("button", { className: r === "rooms" ? "active" : "", onClick: () => ve("rooms"), children: [n.jsx(Rl, { children: "◇" }), n.jsx("span", { children: "房间" })] }),
          n.jsxs("button", { className: r === "mine" ? "active" : "", onClick: () => ve("mine"), children: [n.jsx(Rl, { children: "◎" }), n.jsx("span", { children: "我的" })] }),
        ],
      }),
      Ve &&
        k &&
        n.jsx(vp, {
          post: Ve,
          userId: k.id,
          onClose: () => pt(null),
          onSaved: (M) => {
            (c((Q) => Q.map((oe) => (oe.id === M.id ? M : oe))), pt(null));
          },
          flash: me,
        }),
      J &&
        n.jsx(Pv, {
          onClose: () => D(!1),
          onSuccess: (M, Q = !0) => {
            const oe = Q ? Te : Bm, Ne = Q ? Bm : Te;
            (Ne.removeItem("moodtree-user"), oe.setItem("moodtree-user", JSON.stringify(M)), X(M), D(!1), me("登录成功，欢迎回到树洞"));
          },
        }),
      Ee && n.jsx(Fv, { uid: Ee, viewerId: (k == null ? void 0 : k.id) || "", onClose: () => Pe(null) }),
      je &&
        k &&
        n.jsx(i0, {
          onClose: () => ze(!1),
          user: k,
          flash: me,
          onSuccess: (M) => {
            const Q = Bm.getItem("moodtree-user") ? Bm : Te;
            (Q.setItem("moodtree-user", JSON.stringify(M)), X(M), ze(!1), me("资料已更新"));
          },
        }),
      N &&
        k &&
        n.jsx(l0, {
          onClose: () => _(!1),
          userId: k.id,
          flash: me,
          onSuccess: () => {
            (_(!1), Vt(), me("房间创建成功"));
          },
        }),
      ee &&
        k &&
        n.jsx(s0, {
          onClose: () => he(!1),
          userId: k.id,
          flash: me,
          onSuccess: () => {
            (he(!1), Vt(), me("已加入房间"));
          },
        }),
      T && n.jsx("div", { className: "toast", role: "status", children: T }),
      K &&
        Z &&
        n.jsx("div", {
          className: "energy-card-overlay",
          onClick: (M) => {
            M.target === M.currentTarget && F(!1);
          },
          children: n.jsxs("div", {
            className: "energy-card-box",
            children: [
              n.jsx("div", { style: { fontSize: "36px" }, children: "🌅" }),
              n.jsx("h3", { children: Z.greeting || "早上好" }),
              n.jsx("div", { className: "energy-card-quote", children: Z.quote }),
              Z.challenge &&
                n.jsxs("div", {
                  className: "energy-card-challenge",
                  children: [n.jsx("div", { className: "energy-card-challenge-icon", children: Z.challenge.icon }), n.jsxs("div", { className: "energy-card-challenge-text", children: ["今日小挑战：", Z.challenge.text] })],
                }),
              n.jsx("button", { className: "energy-card-btn", onClick: () => F(!1), children: "开始美好的一天 →" }),
            ],
          }),
        }),
      Ce &&
        n.jsx("div", {
          className: "energy-card-overlay",
          onClick: (M) => {
            M.target === M.currentTarget && Se(!1);
          },
          children: n.jsxs("div", {
            className: "energy-card-box",
            style: { background: "linear-gradient(145deg, #1a1a3e, #2a2a5e)", color: "#e0e0f8" },
            children: [
              n.jsx("div", { style: { fontSize: "36px" }, children: "🌙" }),
              n.jsx("h3", { style: { color: "#c8c8f0" }, children: "该休息了" }),
              n.jsxs("div", { className: "energy-card-quote", style: { color: "#d0d0e8" }, children: ["夜深了，今天的你已经很努力了。", n.jsx("br", {}), "放下一切，好好休息吧。"] }),
              n.jsx("button", { className: "energy-card-btn", style: { background: "rgba(168,180,232,0.3)" }, onClick: () => Se(!1), children: "好的，晚安 🌙" }),
            ],
          }),
        }),
      k && ot && n.jsx(d0, { post: ot, user: k, onClose: () => gt(null), flash: me }),
      we &&
        k &&
        n.jsx("div", {
          className: "dm-overlay",
          children: n.jsx(Np, {
            user: k,
            chatType: "dm",
            target: [k.id, we.id].sort().join("_"),
            title: we.alias || we.nickname,
            onBack: () => st(null),
            flash: me,
            peer: we,
            onFriendDeleted: () => st(null),
            onAliasUpdated: (M, Q) => st((oe) => oe && { ...oe, alias: Q }),
            onAvatarClick: Pe,
          }),
        }),
      xa &&
        n.jsx("div", {
          className: "friend-action-overlay",
          style: { zIndex: 99999 },
          onMouseDown: (M) => {
            M.target === M.currentTarget && We(null);
          },
          children: n.jsxs("div", {
            className: "friend-action-sheet",
            children: [
              n.jsx("div", { className: "friend-action-header", children: n.jsxs("div", { children: [n.jsx("b", { children: "翻译结果" })] }) }),
              n.jsx("div", { style: { padding: "4px 20px 12px", fontSize: "15px", lineHeight: 1.7, maxHeight: "40vh", overflowY: "auto", whiteSpace: "pre-wrap", wordBreak: "break-word", userSelect: "text" }, children: xa }),
              n.jsx("div", {
                className: "friend-action-list",
                children: [              n.jsxs("button", {
                className: "msg-action-item",
                onClick: () => {
                  const el = document.querySelector(".friend-action-sheet");
                  if (el) {
                    try {
                      const range = document.createRange();
                      const sl = window.getSelection();
                      range.selectNodeContents(el);
                      sl.removeAllRanges(); sl.addRange(range);
                      setTimeout(() => {
                        const actual = window.getSelection();
                        const txt = actual ? actual.toString().trim() : "";
                        if (txt.length > 0) fe("已全选(" + txt.length + "字)");
                        else fe("全选失败，请重试");
                      }, 100);
                    } catch (e) { fe("全选:" + e.message); }
                  }
                },
                children: [
                  n.jsx("span", {
                    className: "msg-action-icon",
                    children: n.jsxs("svg", {
                      viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8",
                      children: [n.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }), n.jsx("path", { d: "M7 7h10M7 11h10M7 15h6" })]
                    }),
                  }),
                  n.jsx("span", { children: "全选" }),
                ],
              }),
n.jsxs("button", {
                  onClick: async () => {
                    try {
                      (await Wi(xa), me("已复制译文"));
                    } catch {
                      me("复制失败");
                    }
                  },
                  children: "复制译文",
                }),
              ]}),
              n.jsx("button", { className: "friend-action-cancel", onClick: () => We(null), children: "关闭" }),
            ],
          }),
        }),
      n.jsx("footer", { className: "site-footer", children: "© " + new Date().getFullYear() + " MoodTree · moodtreelife.com" }),
    ],
  });
}
function Bv() {
  const [r, u] = p.useState(() => (typeof window < "u" ? window.matchMedia("(max-width:780px)").matches : !1));
  return (
    p.useEffect(() => {
      const o = window.matchMedia("(max-width:780px)"),
        c = (m) => u(m.matches);
      return (o.addEventListener("change", c), () => o.removeEventListener("change", c));
    }, []),
    r
  );
}
function Hv(r) {
  let u = 210;
  const o = (r.content || "").length;
  return ((u += Math.min(Math.max(Math.ceil(o / 24), 1), 2) * 22), ((r.images && r.images.length) || r.coverImage) && (u += 200), (r.videos || []).length && (u += 190), r.need && (u += 38), u);
}
function Lv(r, u) {
  const o = Array.from({ length: u }, () => []),
    c = Array.from({ length: u }, () => 0);
  return (
    r.forEach((m) => {
      let d = 0;
      for (let h = 1; h < u; h++) c[h] < c[d] && (d = h);
      (o[d].push(m), (c[d] += Hv(m)));
    }),
    o
  );
}
function Yv({ posts: r, category: u, onSelectCategory: o, allCats: c, openPost: m, react: d, onWrite: h, user: v, loading: j, visibleCount: y, onLoadMore: C, onRequireLogin: S, onAvatarClick: T, onShare: H, onTextMenu: k, onReport: X, onBlock: J }) {
  const D = Te.getItem("moodtree-welcome-msg") || "",
    I = r.slice(0, y),
    V = Bv(),
    de = r.length > y;
  return n.jsxs(n.Fragment, {
    children: [
      n.jsxs("section", {
        className: "hero",
        children: [
          n.jsx("div", { className: "hero-glow glow-one" }),
          n.jsx("div", { className: "hero-glow glow-two" }),
          n.jsxs("div", {
            className: "hero-inner",
            children: [
              n.jsxs("div", {
                className: "eyebrow",
                children: [
                  n.jsx("span", { children: "✦" }),
                  " ",
                  v ? D || `${v.nickname}，${gn(Kn()) === "night" ? "夜深了，今天还好吗" : "今天还好吗"}` : "今天还好吗",
                  Kn().enabled && n.jsx("span", { className: `dn-phase-badge ${gn(Kn()) === "night" ? "dn-phase-night" : "dn-phase-day"}`, style: { marginLeft: "8px" }, children: gn(Kn()) === "night" ? "🌙 夜晚" : "☀️ 白天" }),
                ],
              }),
              n.jsxs("h1", { children: ["有些话，", n.jsx("em", { children: "说出来" }), "就会轻一点"] }),
              n.jsx("p", { children: "这里没有人认识你。把情绪留在树洞里，会有人认真听你说。" }),
              n.jsxs("button", { className: "hero-button", onClick: h, children: ["写下此刻的心情 ", n.jsx("span", { children: "→" })] }),
              n.jsxs("div", { className: "hero-note", children: [n.jsx("span", { className: "faces", children: "🌿  ☁️  🌙" }), n.jsx("span", { children: "登录后仍然匿名，真实身份不会展示给其他人" })] }),
            ],
          }),
          n.jsxs("div", {
            className: "tree-art",
            "aria-hidden": "true",
            children: [
              n.jsx("span", { className: "leaf l1" }),
              n.jsx("span", { className: "leaf l2" }),
              n.jsx("span", { className: "leaf l3" }),
              n.jsx("span", { className: "leaf l4" }),
              n.jsx("span", { className: "leaf l5" }),
              n.jsx("span", { className: "trunk" }),
              n.jsx("span", { className: "ground" }),
            ],
          }),
        ],
      }),
      n.jsxs("div", {
        className: "content-wrap",
        children: [
          n.jsxs("section", {
            className: "category-section",
            "aria-label": "分类",
            children: [
              n.jsxs("div", { className: "section-heading", children: [n.jsxs("div", { children: [n.jsx("p", { children: "EXPLORE" }), n.jsx("h2", { children: "最近的树洞" })] }), n.jsx("span", { children: "选一个话题，找到同频的人" })] }),
              n.jsx("div", { className: "categories", children: c.map((P) => n.jsxs("button", { className: u === P ? "selected" : "", onClick: () => o(P), children: [n.jsx("span", { children: Mv[P] || "✎" }), P] }, P)) }),
            ],
          }),
          n.jsxs("section", {
            className: "feed-section",
            children: [
              n.jsx("div", { className: "feed-title", children: n.jsxs("div", { children: [n.jsx("span", { className: "live-dot" }), n.jsx("h2", { children: u === "全部" ? "最新心事" : `${u} · 心事` })] }) }),
              j
                ? n.jsxs("div", {
                    className: "skeleton-feed",
                    children: [
                      n.jsxs("div", { className: "skeleton-card", children: [n.jsx("div", { className: "skeleton-line w-55" }), n.jsx("div", { className: "skeleton-line w-80" }), n.jsx("div", { className: "skeleton-line w-35" })] }),
                      n.jsxs("div", { className: "skeleton-card", children: [n.jsx("div", { className: "skeleton-line w-45" }), n.jsx("div", { className: "skeleton-line w-70" }), n.jsx("div", { className: "skeleton-line w-40" })] }),
                      n.jsxs("div", { className: "skeleton-card", children: [n.jsx("div", { className: "skeleton-line w-50" }), n.jsx("div", { className: "skeleton-line w-75" }), n.jsx("div", { className: "skeleton-line w-30" })] }),
                    ],
                  })
                : n.jsxs(n.Fragment, {
                    children: [
                      V
                        ? n.jsx("div", {
                            className: "post-grid",
                            children: I.map((P, Y) => n.jsx(qm, { post: P, featured: Y === 0, open: () => m(P.id), react: d, user: v, onRequireLogin: S, onAvatarClick: T, onTextMenu: k, onShare: H, onReport: X, onBlock: J }, P.id)),
                          })
                        : n.jsx("div", {
                            className: "post-grid masonry",
                            children: Lv(I, 2).map((P, Y) =>
                              n.jsx(
                                "div",
                                {
                                  className: "post-col",
                                  children: P.map((K) =>
                                    n.jsx(qm, { post: K, featured: I.length > 0 && K.id === I[0].id, open: () => m(K.id), react: d, user: v, onRequireLogin: S, onAvatarClick: T, onTextMenu: k, onShare: H, onReport: X, onBlock: J }, K.id),
                                  ),
                                },
                                Y,
                              ),
                            ),
                          }),
                      de &&
                        n.jsx("div", {
                          style: { textAlign: "center", marginTop: "20px" },
                          children: n.jsx("button", {
                            onClick: C,
                            style: { background: "none", border: "1px solid var(--sage-soft)", borderRadius: "20px", padding: "8px 24px", fontSize: "13px", color: "var(--sage-dark)", cursor: "pointer" },
                            children: "加载更多 ↓",
                          }),
                        }),
                      r.length === 0 &&
                        n.jsxs("div", {
                          className: "empty",
                          children: [n.jsx("span", { children: "🍃" }), n.jsx("h3", { children: "这里还很安静" }), n.jsx("p", { children: "要不要成为第一个分享心事的人？" }), n.jsx("button", { onClick: h, children: "写下心情" })],
                        }),
                    ],
                  }),
            ],
          }),
        ],
      }),
    ],
  });
}
function qm({ post: r, featured: u, open: o, react: c, user: m, onRequireLogin: d, onAvatarClick: h, onShare: v, onTextMenu: j, onReport: y, onBlock: C }) {
  const S = p.useRef(0),
    T = p.useRef(!1),
    H = p.useRef(null),
    [k, X] = p.useState(!1),
    J = !!(m && r.authorId === m.id);
  return n.jsxs("article", {
    className: `post-card ${u ? "featured" : ""}`,
    onClick: (D) => {
      if (T.current) {
        ((T.current = !1), D.preventDefault(), D.stopPropagation());
        return;
      }
      const I = window.getSelection();
      if (I && I.toString().trim().length > 0) {
        (D.preventDefault(), D.stopPropagation());
        return;
      }
      o();
    },
    style: { cursor: "pointer" },
    onContextMenu: (D) => {
      (D.preventDefault(), D.stopPropagation(), v == null || v(r));
    },
    onTouchStart: () => {
      S.current = window.setTimeout(() => {
        ((T.current = !0), v == null || v(r));
      }, 600);
    },
    onTouchEnd: () => {
      clearTimeout(S.current);
    },
    onTouchMove: () => {
      clearTimeout(S.current);
    },
    children: [
      (r.videos || []).length > 0 &&
        n.jsx("div", {
          className: "post-videos-row",
          onClick: (D) => {
            (D.stopPropagation(), (m ? o : d)());
          },
          children: (r.videos || [])
            .slice(0, 3)
            .map((D, I) => n.jsxs("div", { className: "post-video-item", children: [n.jsx("video", { src: D, muted: !0, playsInline: !0, preload: "metadata" }), n.jsx("span", { className: "play-badge", children: "▶" })] }, I)),
        }),
      (() => {
        var de;
        const D = (de = r.images) != null && de.length ? r.images : r.coverImage ? [r.coverImage] : [];
        if (!D.length) return null;
        const I = D.slice(0, 9),
          V = D.length - 9;
        return n.jsx("div", {
          className: "post-images-grid",
          onClick: (P) => {
            (P.stopPropagation(), (m ? o : d)());
          },
          children: I.map((P, Y) =>
            n.jsxs("div", { className: "post-image-item", style: { position: "relative" }, children: [n.jsx("img", { src: P, alt: "", loading: "lazy" }), Y === 8 && V > 0 && n.jsxs("div", { className: "post-image-more", children: ["+", V] })] }, Y),
          ),
        });
      })(),
      n.jsxs("div", {
        className: "post-top",
        children: [
          n.jsxs("div", {
            className: "author",
            onClick:
              r.authorId && !r.anonymous && h
                ? (D) => {
                    (D.stopPropagation(), h(r.authorId));
                  }
                : void 0,
            style: r.authorId && !r.anonymous && h ? { cursor: "pointer" } : void 0,
            children: [
              n.jsx(qt, { user: { avatar: r.avatar, avatarType: r.avatarType, id: r.authorId || r.author || r.id } }),
              n.jsxs("div", { children: [n.jsx("b", { children: r.author }), n.jsxs("span", { children: [r.time, r.edited_at ? " · 已编辑" : ""] })] }),
            ],
          }),
          n.jsx("div", {
            className: "tag-group",
            children: (r.category || "")
              .split(", ")
              .filter(Boolean)
              .map((D, I) => n.jsx("span", { className: `tag tag-${D}`, children: D }, I)),
          }),
        ],
      }),
      n.jsxs("div", {
        className: "post-body plain",
        role: "button",
        tabIndex: 0,
        style: { cursor: "pointer" },
        onTouchStart: (D) => {
          if (!j) return;
          D.stopPropagation();
          const I = D.touches[0];
          ((H.current = { x: I.clientX, y: I.clientY }),
            clearTimeout(S.current),
            (S.current = window.setTimeout(() => {
              var V, de, P;
              ((V = window.getSelection()) != null && V.toString().trim()) || ((T.current = !0), j(r.content, (de = H.current) == null ? void 0 : de.x, (P = H.current) == null ? void 0 : P.y));
            }, 500)));
        },
        onTouchEnd: () => {
          (clearTimeout(S.current), (H.current = null));
        },
        onTouchMove: (D) => {
          if (!H.current) return;
          const I = D.touches[0];
          (Math.abs(I.clientX - H.current.x) > 10 || Math.abs(I.clientY - H.current.y) > 10) && (clearTimeout(S.current), (H.current = null));
        },
        onContextMenu: (D) => {
          (D.preventDefault(), D.stopPropagation());
        },
        onClick: (D) => {
          const I = window.getSelection();
          if (I && I.toString().trim().length > 0) {
            (D.preventDefault(), D.stopPropagation());
            return;
          }
          o();
        },
        children: [n.jsx("h3", { children: r.title }), n.jsx("p", { children: r.content })],
      }),
      n.jsxs("div", { className: "need-pill", children: [n.jsx("span", { children: "◌" }), sp[r.need]] }),
      r.visibility !== "public" && n.jsx("div", { style: { fontSize: "9px", color: "#9ba19d", marginTop: "8px" }, children: r.visibility === "ai-only" ? "🤖 仅AI陪伴" : r.visibility === "room" ? "◈ 房间内可见" : "🔒 仅自己可见" }),
      n.jsxs("div", {
        className: "post-actions",
        onClick: (D) => D.stopPropagation(),
        children: [
          n.jsxs("button", { onClick: () => c(r.id, "likes"), "aria-label": "点赞", className: r.liked ? "liked" : "", children: [r.liked ? "♥" : "♡", " ", n.jsx("span", { children: r.likes })] }),
          n.jsxs("button", { onClick: () => c(r.id, "hugs"), "aria-label": "抱抱", children: ["抱 ", n.jsx("span", { children: r.hugs })] }),
          n.jsxs("button", { onClick: o, "aria-label": "评论", children: ["○ ", n.jsx("span", { children: r.comments.length })] }),
          n.jsx("button", { className: r.saved ? "saved" : "", onClick: () => c(r.id, "saved"), "aria-label": "收藏", children: r.saved ? "◆" : "◇" }),
          !J &&
            n.jsxs("div", {
              style: { position: "relative" },
              children: [
                n.jsx("button", {
                  onClick: (D) => {
                    (D.stopPropagation(), X((I) => !I));
                  },
                  "aria-label": "more",
                  style: { background: "none", border: "none", cursor: "pointer", padding: "4px", color: "var(--sage-dark)" },
                  children: "⋯",
                }),
                k &&
                  n.jsxs("div", {
                    style: { position: "absolute", right: 0, top: "100%", background: "#fff", border: "1px solid #e0e0e0", borderRadius: "10px", padding: "4px 0", zIndex: 99, minWidth: "120px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" },
                    onMouseLeave: () => X(!1),
                    children: [
                      n.jsx("button", {
                        onClick: (D) => {
                          (D.stopPropagation(), X(!1), y == null || y(r.id, r.authorId || "", r.author));
                        },
                        style: { display: "flex", alignItems: "center", gap: "8px", width: "100%", padding: "10px 14px", background: "none", border: "none", cursor: "pointer", fontSize: "13px", color: "#555", textAlign: "left" },
                        children: "🚩 举报",
                      }),
                      n.jsx("button", {
                        onClick: (D) => {
                          (D.stopPropagation(), X(!1), C == null || C(r.authorId || "", r.author));
                        },
                        style: { display: "flex", alignItems: "center", gap: "8px", width: "100%", padding: "10px 14px", background: "none", border: "none", cursor: "pointer", fontSize: "13px", color: "#c4543d", textAlign: "left" },
                        children: "🚫 拉黑该用户",
                      }),
                    ],
                  }),
              ],
            }),
          n.jsx("button", {
            onClick: (D) => {
              (D.stopPropagation(), v == null || v(r));
            },
            "aria-label": "分享",
            style: { background: "none", border: "none", cursor: "pointer", padding: "4px", color: "var(--sage-dark)" },
            children: n.jsx("svg", {
              viewBox: "0 0 24 24",
              fill: "currentColor",
              width: "15",
              height: "15",
              style: { verticalAlign: "middle", marginBottom: "1px" },
              children: n.jsx("path", { d: "M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z" }),
            }),
          }),
        ],
      }),
    ],
  });
}
function vp({ post: r, userId: u, onClose: o, onSaved: c, flash: m }) {
  const [d, h] = p.useState(r.content),
    [v, j] = p.useState(!1),
    y = async () => {
      var C, S;
      if (!(!d.trim() || v)) {
        j(!0);
        try {
          const T = await pe(`/api/posts/${r.id}/edit`, { userId: u, content: d.trim() });
          if (T.error) {
            (m(T.error), j(!1), /超过5分钟/.test(T.error) && o());
            return;
          }
          (c({ ...r, content: ((C = T.post) == null ? void 0 : C.content) ?? d.trim(), edited_at: ((S = T.post) == null ? void 0 : S.edited_at) || r.edited_at || "刚刚" }), m("已保存修改"), o());
        } catch {
          m("保存失败，请重试");
        }
        j(!1);
      }
    };
  return n.jsx("div", {
    className: "modal-overlay",
    onMouseDown: (C) => {
      C.target === C.currentTarget && o();
    },
    children: n.jsxs("div", {
      className: "modal-card edit-post-card",
      children: [
        n.jsx("button", { className: "login-close", onClick: o, children: "×" }),
        n.jsx("h2", { children: "编辑心事" }),
        n.jsxs("p", { className: "edit-post-hint", children: ["「", r.title || "无标题", "」· 发布后5分钟内可修改文字，标题与图片保持不变"] }),
        n.jsx("textarea", { className: "edit-post-textarea", value: d, onChange: (C) => h(C.target.value), maxLength: 1e4, autoFocus: !0 }),
        n.jsxs("small", { className: "edit-post-count", children: [d.length, "/10000"] }),
        n.jsxs("div", { className: "edit-post-actions", children: [n.jsx("button", { onClick: o, children: "取消" }), n.jsx("button", { className: "primary", onClick: y, disabled: !d.trim() || v, children: v ? "保存中…" : "保存" })] }),
      ],
    }),
  });
}
function bp({ images: r, startIndex: u, onClose: o, canDelete: c, onDelete: m, flash: d }) {
  const [h, v] = p.useState(Math.min(Math.max(u, 0), Math.max(r.length - 1, 0))),
    [j, y] = p.useState(!1);
  p.useEffect(() => {
    y(!1);
  }, [h]);
  const [C, S] = p.useState(!1),
    [T, H] = p.useState(!1),
    k = p.useRef(null),
    X = p.useRef(null),
    J = p.useRef(void 0),
    D = p.useRef(!1);
  (p.useEffect(() => {
    r.length === 0 ? o() : h > r.length - 1 && v(r.length - 1);
  }, [r.length]),
    p.useEffect(() => {
      const F = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const Z = (ye) => {
        (ye.key === "Escape" && o(), ye.key === "ArrowLeft" && v((Ce) => Math.max(0, Ce - 1)), ye.key === "ArrowRight" && v((Ce) => Math.min(r.length - 1, Ce + 1)));
      };
      return (
        window.addEventListener("keydown", Z),
        () => {
          ((document.body.style.overflow = F), window.removeEventListener("keydown", Z));
        }
      );
    }, [r.length, o]));
  const I = () => {
      J.current && (window.clearTimeout(J.current), (J.current = void 0));
    },
    V = (F) => {
      const Z = F.touches[0];
      ((k.current = Z.clientX),
        (X.current = Z.clientY),
        (D.current = !1),
        I(),
        (J.current = window.setTimeout(() => {
          ((D.current = !0), S(!0));
        }, 550)));
    },
    de = (F) => {
      const Z = F.touches[0];
      k.current === null || X.current === null || ((Math.abs(Z.clientX - k.current) > 12 || Math.abs(Z.clientY - X.current) > 12) && I());
    },
    P = (F) => {
      if ((I(), D.current)) {
        F.preventDefault();
        return;
      }
      if (k.current !== null && r.length > 1) {
        const Z = F.changedTouches[0].clientX - k.current;
        Z <= -45 && h < r.length - 1 ? v(h + 1) : Z >= 45 && h > 0 && v(h - 1);
      }
      ((k.current = null), (X.current = null));
    },
    Y = async () => {
      const F = r[h];
      if (!(!F || T)) {
        H(!0);
        try {
          const Z = await fetch(F);
          if (!Z.ok) throw new Error("fetch failed");
          const ye = await Z.blob(),
            Ce = URL.createObjectURL(ye),
            Se = document.createElement("a");
          ((Se.href = Ce), (Se.download = `moodtree_${Date.now()}.jpg`), document.body.appendChild(Se), Se.click(), Se.remove(), window.setTimeout(() => URL.revokeObjectURL(Ce), 8e3), d("已开始保存，请稍后在下载/相册中查看"), S(!1));
        } catch {
          d("保存被拦截，可直接长按图片使用系统保存");
        }
        H(!1);
      }
    },
    K = async () => {
      if (!m || T || !window.confirm("确定删除这张照片吗？删除后不可恢复。")) return;
      H(!0);
      const F = await m(h);
      (H(!1), F && S(!1));
    };
  return r.length
    ? n.jsxs("div", {
        className: "img-viewer-overlay",
        onClick: o,
        children: [
          n.jsxs("div", {
            className: "img-viewer-topbar",
            onClick: (F) => F.stopPropagation(),
            children: [n.jsxs("span", { className: "img-viewer-counter", children: [h + 1, "/", r.length] }), n.jsx("button", { className: "img-viewer-close", onClick: o, "aria-label": "关闭", children: "×" })],
          }),
          n.jsxs("div", {
            className: `img-viewer-stage${j ? " long" : ""}`,
            onClick: o,
            children: [
              r.length > 1 &&
                h > 0 &&
                n.jsx("button", {
                  className: "img-viewer-arrow prev",
                  onClick: (F) => {
                    (F.stopPropagation(), v(h - 1));
                  },
                  "aria-label": "上一张",
                  children: "‹",
                }),
              n.jsx("img", {
                src: r[h],
                alt: "",
                draggable: !1,
                onLoad: (F) => {
                  const Z = F.currentTarget;
                  y(Z.naturalHeight > Z.naturalWidth * 2);
                },
                onClick: (F) => F.stopPropagation(),
                onTouchStart: V,
                onTouchMove: de,
                onTouchEnd: P,
                onContextMenu: (F) => {
                  (F.preventDefault(), S(!0));
                },
              }),
              r.length > 1 &&
                h < r.length - 1 &&
                n.jsx("button", {
                  className: "img-viewer-arrow next",
                  onClick: (F) => {
                    (F.stopPropagation(), v(h + 1));
                  },
                  "aria-label": "下一张",
                  children: "›",
                }),
              n.jsxs("div", { className: "img-viewer-hint", children: ["长按图片可保存", c ? "或删除" : ""] }),
            ],
          }),
          C &&
            n.jsx("div", {
              className: "img-viewer-menu-overlay",
              onClick: () => !T && S(!1),
              children: n.jsxs("div", {
                className: "img-viewer-menu",
                onClick: (F) => F.stopPropagation(),
                children: [
                  n.jsx("button", { onClick: Y, disabled: T, children: "保存到相册" }),
                  c && m && n.jsx("button", { className: "danger", onClick: K, disabled: T, children: "删除照片" }),
                  n.jsx("button", { className: "cancel", onClick: () => S(!1), disabled: T, children: "取消" }),
                ],
              }),
            }),
        ],
      })
    : null;
}
function qv({ src: r, onCancel: u, onConfirm: o, flash: c }) {
  const m = p.useRef(null),
    d = p.useRef(null),
    [h, v] = p.useState(0),
    [j, y] = p.useState(!1),
    [C, S] = p.useState(!1),
    T = [
      { label: "自由", value: NaN },
      { label: "1:1", value: 1 },
      { label: "3:4", value: 3 / 4 },
      { label: "4:3", value: 4 / 3 },
    ];
  p.useEffect(() => {
    const X = m.current;
    if (!X) return;
    const J = new lp(X, {
      viewMode: 1,
      dragMode: "move",
      autoCropArea: 1,
      background: !1,
      responsive: !0,
      restore: !1,
      guides: !0,
      center: !0,
      highlight: !1,
      cropBoxMovable: !0,
      cropBoxResizable: !0,
      toggleDragModeOnDblclick: !1,
      zoomOnTouch: !0,
      zoomOnWheel: !0,
      wheelZoomRatio: 0.1,
      ready: () => y(!0),
    });
    return (
      (d.current = J),
      () => {
        (J.destroy(), (d.current = null));
      }
    );
  }, []);
  const H = (X) => {
      var J;
      (v(X), (J = d.current) == null || J.setAspectRatio(T[X].value));
    },
    k = () => {
      const X = d.current;
      if (X)
        try {
          const J = X.getCroppedCanvas({ maxWidth: 2048, maxHeight: 2048, imageSmoothingEnabled: !0, imageSmoothingQuality: "high" });
          if (!J) {
            c("裁剪失败，请重试");
            return;
          }
          o(J.toDataURL("image/jpeg", 0.9));
        } catch {
          c("该图片暂不支持编辑");
        }
    };
  return n.jsxs("div", {
    className: "img-crop-overlay",
    children: [
      n.jsxs("div", {
        className: "img-crop-topbar",
        children: [n.jsx("button", { onClick: u, children: "取消" }), n.jsx("span", { children: "编辑图片" }), n.jsx("button", { className: "confirm-btn", onClick: k, disabled: !j || C, children: "完成" })],
      }),
      n.jsxs("div", {
        className: "img-crop-stage",
        children: [n.jsx("img", { ref: m, src: r, alt: "", onError: () => S(!0) }), C && n.jsxs("div", { className: "img-crop-fail", children: [n.jsx("span", { children: "🍂" }), "图片加载失败，暂不支持编辑"] })],
      }),
      n.jsxs("div", {
        className: "img-crop-controls",
        children: [
          n.jsx("div", { className: "img-crop-ratios", children: T.map((X, J) => n.jsx("button", { className: h === J ? "active" : "", onClick: () => H(J), children: X.label }, X.label)) }),
          n.jsxs("div", {
            className: "img-crop-tools",
            children: [
              n.jsx("button", {
                onClick: () => {
                  var X;
                  return (X = d.current) == null ? void 0 : X.zoom(0.1);
                },
                title: "放大",
                children: "＋",
              }),
              n.jsx("button", {
                onClick: () => {
                  var X;
                  return (X = d.current) == null ? void 0 : X.zoom(-0.1);
                },
                title: "缩小",
                children: "－",
              }),
              n.jsx("button", {
                onClick: () => {
                  var X;
                  return (X = d.current) == null ? void 0 : X.rotate(90);
                },
                title: "旋转90°",
                children: "⟳ 旋转",
              }),
              n.jsx("button", {
                onClick: () => {
                  var X;
                  return (X = d.current) == null ? void 0 : X.reset();
                },
                title: "重置",
                children: "重置",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Xv({ onCancel: r, onPublish: u, user: o, publishRoomId: c, flash: m }) {
  const [d, h] = p.useState(""),
    [v, j] = p.useState(""),
    [y, C] = p.useState(["生活"]),
    [S, T] = p.useState(Vr[1]),
    [H, k] = p.useState(!0),
    [X, J] = p.useState("public"),
    [D, I] = p.useState(""),
    [V, de] = p.useState(!1),
    [P, Y] = p.useState([]),
    [K, F] = p.useState(!1),
    [Z, ye] = p.useState([]),
    [Ce, Se] = p.useState(null),
    [ke, Oe] = p.useState(""),
    [ue, R] = p.useState(null),
    $ = p.useRef(void 0),
    le = p.useRef(0),
    [fe, be] = p.useState([]),
    [w, x] = p.useState(""),
    [N, _] = p.useState([]),
    [ee, he] = p.useState(!1),
    [je, ze] = p.useState(0),
    [Ee, Pe] = p.useState(!1),
    [Ve, pt] = p.useState(null),
    [ot, gt] = p.useState(null),
    [yt, fa] = p.useState(0);
    [vioList, setVioList] = p.useState([]);
  p.useRef(new Map());
  const we = p.useRef(null);
  const checkLocal = (Gr) => {
    const Jn = Gr.toLowerCase(), Ei = [];
    const Vy = ['操你','操你妈','操你娘','操你祖宗','操你老妈','操你老母','操妳','操妳妈','操妳娘','操比','操逼','草你妈','草泥马','草你娘','草吗','草拟妈','肏你','肏死','操死','他妈的','他妈地','他马的','他妈','他娘','妈的','妈b','妈个b','妈比','妈逼','妈的b','妈个比','妈妈的','你妈','你妈的','你娘','你奶奶的','你她妈的','你它妈的','你他妈','你马的','去你妈的','傻逼','傻比','傻b','傻bi','煞笔','煞逼','脑残','脑瘫','废物','垃圾','辣鸡','腊鸡','沙雕','韭菜','白痴','笨蛋','蠢货','蠢猪','猪头','混蛋','王八蛋','鳖孙','贱人','贱货','贱b','贱逼','婊子','婊子养的','荡妇','浪女','骚货','骚比','骚逼','骚女','烂货','烂逼','绿茶婊','心机婊','撩骚','鸡巴','鸡吧','鸡叭','几把','几巴','几叭','鸡鸡','小鸡鸡','鸡奸','阳具','阴茎','阴道','阴户','阴唇','阴核','阴毛','龟头','屌丝','逼样','乳头','乳房','奶子','巨乳','做爱','性交','性器','性无能','强奸','轮奸','妓女','妓院','嫖娼','嫖客','卖淫','招妓','姘头','炮友','一夜情','援交','援助交际','自慰','手淫','打飞机','打炮','狗日的','狗娘养的','狗屁','狗屎','狗杂种','杂种','野种','孽种','畜生','畜牲','狗东西','去死','去死吧','你完蛋了','找死','作死','该死','找抽','找打','弄死你','弄死','打死你','干你','干你妈','干你娘','干你老母','干死你','干死','干妳妈','幹你娘','幹','靠北','靠爸','靠腰','靠母','靠背','屁眼','射精','精子','内射','颜射','口交','肛交','吹箫','叫床','潮吹','nmsl','wcnm','wocao','woc','tmd','nmb','wdnmd','cnm','wtf','stfu','kys','kmt','sb'];
    for (const Bu of Vy) {
      if (Bu === 'nc') {
        for (let Pu = 0; Pu <= Jn.length - 2; Pu++) {
          if (Jn[Pu] === 'n' && Jn[Pu + 1] === 'c') {
            const Iu = Pu > 0 ? Jn[Pu - 1] : ' ', Nu = Pu + 2 < Jn.length ? Jn[Pu + 2] : ' ';
            if (!/[a-z]/.test(Iu) && !/[a-z]/.test(Nu)) { Ei.push(Bu); break; }
          }
        }
      } else if (Jn.includes(Bu)) { Ei.push(Bu); }
    }
    setVioList(Ei);
  };
  p.useEffect(() => {
    if (ot) {
      fa(0);
      const O = setTimeout(() => {
        const M = we.current;
        if (M) {
          const Q = M.getBoundingClientRect();
          (window.scrollTo({ top: window.scrollY + Q.top - 80, behavior: "smooth" }), M.focus({ preventScroll: !0 }));
        }
      }, 300);
      return () => clearTimeout(O);
    }
  }, [ot]);
  const st = p.useMemo(() => fp(), []);
  (p.useEffect(() => {
    qe(`/api/diaries/${o.id}`)
      .then((O) => be(O.diaries || []))
      .catch(() => {});
  }, [o.id]),
    p.useEffect(() => {
      const O = Te.getItem("moodtree-restore-draft");
      if (O) {
        try {
          const Q = JSON.parse(O);
          (h(Q.title || ""),
            j(Q.content || ""),
            C(Q.categories || ["生活"]),
            T(Q.need || Vr[1]),
            J(Q.visibility || "public"),
            Y(Q.images || (Q.coverImage ? [Q.coverImage] : [])),
            ye((Q.images || (Q.coverImage ? [Q.coverImage] : [])).map(() => null)),
            _(Q.videos || []),
            Te.removeItem("moodtree-restore-draft"),
            ($e.current = Q.id || null),
            m("草稿已恢复"));
        } catch {}
        return;
      }
      const M = Mt();
      M.length > 0 && (pt(M[0]), Pe(!0));
    }, []));
  const Mt = () => {
      try {
        return JSON.parse(Te.getItem("moodtree-drafts") || "[]");
      } catch {
        return [];
      }
    },
    zt = (O) => Te.setItem("moodtree-drafts", JSON.stringify(O)),
    $e = p.useRef(null),
    jt = p.useRef(!1),
    xa = p.useRef({});
  xa.current = { title: d, content: v, categories: y, need: S, visibility: X, images: P, videos: N };
  const [We, It] = p.useState(!1),
    Xt = p.useRef(!1),
    Rt = () => {
      var Ne, De;
      if (jt.current || Xt.current) return;
      const O = xa.current;
      if (!((Ne = O.title) != null && Ne.trim()) && !((De = O.content) != null && De.trim())) return;
      const M = Mt(),
        Q = { title: O.title, content: O.content, categories: O.categories, need: O.need, visibility: O.visibility, images: O.images, videos: O.videos, timestamp: Date.now() };
      if ($e.current) {
        const Ue = M.findIndex((_e) => _e.id === $e.current);
        if (Ue >= 0) {
          ((M[Ue] = { ...M[Ue], ...Q }), zt(M));
          return;
        }
      }
      const oe = `draft_${Date.now()}`;
      (($e.current = oe), M.unshift({ id: oe, ...Q }), zt(M));
    },
    Gt = () => {
      d.trim() || v.trim() ? It(!0) : r();
    },
    Zt = () => {
      (Rt(), It(!1), r());
    },
    Dt = () => {
      ($e.current && (zt(Mt().filter((O) => O.id !== $e.current)), ($e.current = null)), (Xt.current = !0), It(!1), r());
    };
  (p.useEffect(() => {
    const O = window.setTimeout(Rt, 1e3);
    return () => window.clearTimeout(O);
  }, [d, v, P, N, y, S, X]),
    p.useEffect(
      () => (
        window.addEventListener("pagehide", Rt),
        () => {
          (window.removeEventListener("pagehide", Rt), Rt());
        }
      ),
      [],
    ));
  const Ya = () => {
      if (!d.trim() && !v.trim()) {
        m("写点什么再保存草稿吧");
        return;
      }
      if ($e.current) {
        (Rt(), m("草稿已保存"));
        return;
      }
      const O = Mt(),
        M = { id: `draft_${Date.now()}`, title: d, content: v, categories: y, need: S, visibility: X, images: P, videos: N, timestamp: Date.now() };
      (($e.current = M.id), O.unshift(M), zt(O), m("草稿已保存"));
    },
    Vt = (O) => {
      (h(O.title || ""),
        j(O.content || ""),
        C(O.categories || ["生活"]),
        T(O.need || Vr[1]),
        J(O.visibility || "public"),
        Y(O.images || (O.coverImage ? [O.coverImage] : [])),
        ye((O.images || (O.coverImage ? [O.coverImage] : [])).map(() => null)),
        _(O.videos || []),
        Pe(!1),
        pt(null),
        ($e.current = O.id || null),
        m("草稿已恢复"));
    },
    St = () => {
      if (Ve) {
        const O = Mt().filter((M) => M.id !== Ve.id);
        zt(O);
      }
      (Pe(!1), pt(null));
    },
    U = async (O) => {
      if (P.length >= 30) {
        m("最多上传30张图片");
        return;
      }
      F(!0);
      try {
        const M = await Us(O);
        (Y((Q) => [...Q, M]), ye((Q) => [...Q, O]));
      } catch {
        m("图片上传失败");
      }
      F(!1);
    },
    xe = async (O) => {
      if (N.length >= 3) {
        m("最多上传3个视频");
        return;
      }
      if (O.size > 512 * 1024 * 1024) {
        m("视频不能超过512MB哦");
        return;
      }
      (he(!0), ze(0));
      try {
        const M = await pe("/api/upload/presign", { filename: `video_${Date.now()}`, contentType: O.type || "video/mp4" });
        if (M.error || !M.uploadUrl) throw new Error("presign failed");
        (await new Promise((Q, oe) => {
          const Ne = new XMLHttpRequest();
          (Ne.open("PUT", M.uploadUrl),
            Ne.setRequestHeader("x-cos-acl", M.aclHeader || "public-read"),
            (Ne.upload.onprogress = (De) => {
              De.lengthComputable && ze(Math.round((De.loaded / De.total) * 100));
            }),
            (Ne.onload = () => (Ne.status >= 200 && Ne.status < 300 ? Q() : oe(new Error("upload failed")))),
            (Ne.onerror = () => oe(new Error("network error"))),
            Ne.send(O));
        }),
          _((Q) => [...Q, M.publicUrl]));
      } catch {
        m("视频上传失败，请检查网络后重试");
      }
      he(!1);
    },
    [ve, Qe] = p.useState(!1),
    Ge = p.useRef(0),
    Ze = async (O) => {
      const M = Array.from(O).filter((Q) => Q.type.startsWith("image/") || Q.type.startsWith("video/"));
      if (!M.length) {
        m("拖进来的不是图片或视频文件哦");
        return;
      }
      for (const Q of M) Q.type.startsWith("video/") ? await xe(Q) : await U(Q);
    };
  p.useEffect(() => {
    const O = (M) => {
      M.preventDefault();
    };
    return (
      window.addEventListener("dragover", O),
      window.addEventListener("drop", O),
      () => {
        (window.removeEventListener("dragover", O), window.removeEventListener("drop", O));
      }
    );
  }, []);
  const Fe = (O) => {
      (Y((M) => M.filter((Q, oe) => oe !== O)), ye((M) => M.filter((Q, oe) => oe !== O)));
    },
    me = () => {
      $.current && (window.clearTimeout($.current), ($.current = void 0));
    },
    $t = (O) => {
      (me(),
        ($.current = window.setTimeout(() => {
          ((le.current = Date.now()), R((M) => (M === O ? null : O)));
        }, 500)));
    },
    xt = () => me(),
    Kt = (O) => {
      if (Date.now() - le.current < 700 || ue === null) return;
      if (ue === O) {
        R(null);
        return;
      }
      const M = ue;
      (Y((Q) => {
        const oe = [...Q];
        return (([oe[M], oe[O]] = [oe[O], oe[M]]), oe);
      }),
        ye((Q) => {
          const oe = [...Q];
          return (([oe[M], oe[O]] = [oe[O], oe[M]]), oe);
        }),
        R(null),
        m("图片位置已交换"));
    },
    Jt = (O) => {
      const M = Z[O];
      if (M) {
        const Q = URL.createObjectURL(M);
        Oe(Q);
      } else Oe(P[O] || "");
      Se(O);
    },
    ca = () => {
      (ke.startsWith("blob:") && URL.revokeObjectURL(ke), Oe(""), Se(null));
    },
    ha = async (O) => {
      const M = Ce;
      if ((ca(), M !== null)) {
        F(!0);
        try {
          const Q = mp(O),
            oe = await Eu(`img_crop_${Date.now()}`, Q, Q.type || "image/jpeg");
          (Y((Ne) => Ne.map((De, Ue) => (Ue === M ? oe : De))), ye((Ne) => Ne.map((De, Ue) => (Ue === M ? null : De))), m("图片已更新"));
        } catch {
          m("图片上传失败");
        }
        F(!1);
      }
    },
    va = async (O) => {
      if ((O.preventDefault(), !d.trim() || !v.trim())) return;
      (gt(null),
        y.forEach((De) => {
          Mu.includes(De) || Hm(De);
        }));
      const M = H ? Kr[Math.floor(Math.random() * Kr.length)] : o.nickname,
        Q = H ? Jr[Math.floor(Math.random() * Jr.length)] : o.avatar,
        oe = H ? "char" : o.avatarType,
        Ne = await u({
          id: Date.now().toString(),
          author: M,
          avatar: Q,
          avatarType: oe,
          authorId: o.id,
          anonymous: H,
          title: d,
          content: v,
          category: y.join(", "),
          need: S,
          time: "刚刚",
          likes: 0,
          hugs: 0,
          same: 0,
          comments: [],
          mine: !0,
          visibility: c ? "room" : X,
          images: P.length ? P : void 0,
          videos: N.length ? N : void 0,
          roomId: c || void 0,
          diaryId: w || void 0,
        });
      if (Ne != null && Ne.error) {
        Ne.matched_words && gt({ t: d + " " + v, w: Ne.matched_words });
        return;
      }
      ((jt.current = !0), $e.current && (zt(Mt().filter((De) => De.id !== $e.current)), ($e.current = null)));
    };
  return n.jsxs("div", {
    className: "page-wrap narrow",
    children: [
      n.jsx("button", { className: "back-button", onClick: Gt, children: "← 返回" }),
      n.jsxs("div", { className: "page-intro", children: [n.jsx("span", { children: "WRITE IT DOWN" }), n.jsx("h1", { children: "写下你想说的话" }), n.jsx("p", { children: "这里是安全的。你可以诚实地做自己。" })] }),
      Ee &&
        Ve &&
        n.jsx("div", {
          className: "modal-overlay",
          onMouseDown: (O) => {
            O.target === O.currentTarget && Pe(!1);
          },
          children: n.jsxs("div", {
            className: "modal-card",
            style: { maxWidth: "360px" },
            children: [
              n.jsx("h2", { style: { fontSize: "18px" }, children: "检测到未完成的草稿" }),
              n.jsxs("p", { style: { fontSize: "13px", color: "var(--muted)", margin: "8px 0" }, children: ["标题：", Ve.title || "（无标题）"] }),
              n.jsxs("p", { style: { fontSize: "12px", color: "var(--muted)" }, children: ["保存时间：", new Date(Ve.timestamp).toLocaleString("zh-CN")] }),
              n.jsx("p", { style: { fontSize: "13px", margin: "12px 0" }, children: "是否继续编辑？" }),
              n.jsxs("div", {
                style: { display: "flex", gap: "10px" },
                children: [
                  n.jsx("button", { className: "primary", style: { flex: 1 }, onClick: () => Vt(Ve), children: "继续编辑" }),
                  n.jsx("button", { style: { flex: 1, background: "none", border: "1px solid #ddd", borderRadius: "12px", cursor: "pointer", fontSize: "14px" }, onClick: St, children: "重新开始" }),
                ],
              }),
            ],
          }),
        }),
      We &&
        n.jsx("div", {
          className: "modal-overlay",
          onMouseDown: (O) => {
            O.target === O.currentTarget && It(!1);
          },
          children: n.jsxs("div", {
            className: "modal-card",
            style: { maxWidth: "360px" },
            children: [
              n.jsx("h2", { style: { fontSize: "18px" }, children: "要先存进草稿箱吗？" }),
              n.jsx("p", { style: { fontSize: "13px", color: "var(--muted)", margin: "8px 0" }, children: "保存的话，下次可以从「我的 → 草稿箱」接着写；不保存的话，这些内容就放下了。" }),
              n.jsxs("div", {
                style: { display: "flex", gap: "10px" },
                children: [
                  n.jsx("button", { className: "primary", style: { flex: 1 }, onClick: Zt, children: "存进草稿箱" }),
                  n.jsx("button", { style: { flex: 1, background: "none", border: "1px solid #ddd", borderRadius: "12px", cursor: "pointer", fontSize: "14px" }, onClick: Dt, children: "不保存" }),
                ],
              }),
            ],
          }),
        }),
      n.jsxs("form", {
        className: `publish-card${ve ? " drag-over" : ""}`,
        onSubmit: va,
        onDragEnter: (O) => {
          (O.preventDefault(), Ge.current++, Qe(!0));
        },
        onDragOver: (O) => O.preventDefault(),
        onDragLeave: (O) => {
          (O.preventDefault(), (Ge.current = Math.max(0, Ge.current - 1)), Ge.current === 0 && Qe(!1));
        },
        onDrop: (O) => {
          var M, Q;
          (O.preventDefault(), (Ge.current = 0), Qe(!1), (Q = (M = O.dataTransfer) == null ? void 0 : M.files) != null && Q.length && Ze(O.dataTransfer.files));
        },
        children: [
          ve && n.jsx("div", { className: "drop-hint", children: "🌿 松开，把照片放进树洞" }),
          n.jsxs("div", {
            className: "publish-mode-toggle",
            children: [
              n.jsxs("button", {
                type: "button",
                className: H ? "mode-btn chosen" : "mode-btn",
                onClick: () => k(!0),
                children: [n.jsx("span", { className: "mode-icon", children: "🎭" }), n.jsxs("div", { children: [n.jsx("b", { children: "匿名发布" }), n.jsx("small", { children: "随机昵称，无人知道是你" })] })],
              }),
              n.jsxs("button", {
                type: "button",
                className: H ? "mode-btn" : "mode-btn chosen",
                onClick: () => k(!1),
                children: [n.jsx(qt, { user: o }), n.jsxs("div", { children: [n.jsx("b", { children: o.nickname }), n.jsx("small", { children: "显示你的注册昵称" })] })],
              }),
            ],
          }),
          c && n.jsx("div", { className: "room-publish-hint", children: "◈ 你正在房间内发帖，只有房间成员可以看到" }),
          n.jsxs("div", {
            className: "cover-upload-section",
            children: [
              "添加图片（可选，最多30张）",
              P.length > 0 &&
                n.jsxs("div", {
                  className: "publish-image-grid",
                  onClick: (O) => {
                    O.target === O.currentTarget && R(null);
                  },
                  children: [
                    ue !== null && n.jsx("div", { className: "publish-swap-hint", children: "再点一张图片交换位置（长按可取消）" }),
                    P.map((O, M) =>
                      n.jsxs(
                        "div",
                        {
                          className: `publish-image-item${ue === M ? " swap-source" : ""}`,
                          onTouchStart: () => $t(M),
                          onTouchEnd: xt,
                          onTouchMove: xt,
                          onMouseDown: () => $t(M),
                          onMouseUp: xt,
                          onMouseLeave: xt,
                          onClick: () => Kt(M),
                          onContextMenu: (Q) => Q.preventDefault(),
                          children: [
                            n.jsx("img", { src: O, alt: "", draggable: !1 }),
                            n.jsx("button", {
                              type: "button",
                              onClick: (Q) => {
                                (Q.stopPropagation(), Fe(M));
                              },
                              children: "×",
                            }),
                            n.jsx("button", {
                              type: "button",
                              className: "thumb-edit-btn",
                              onClick: (Q) => {
                                (Q.stopPropagation(), R(null), Jt(M));
                              },
                              children: "✎ 裁剪",
                            }),
                          ],
                        },
                        M,
                      ),
                    ),
                    P.length < 30 &&
                      !K &&
                      n.jsxs("label", {
                        className: "publish-image-add",
                        children: [
                          K ? "…" : "＋",
                          n.jsx("input", {
                            type: "file",
                            accept: "image/*",
                            style: { display: "none" },
                            onChange: (O) => {
                              var Q;
                              const M = (Q = O.target.files) == null ? void 0 : Q[0];
                              (M && U(M), (O.target.value = ""));
                            },
                          }),
                        ],
                      }),
                  ],
                }),
              P.length === 0 &&
                n.jsxs("label", {
                  className: "cover-upload-btn",
                  children: [
                    K ? "上传中…" : "＋ 上传你喜欢的照片",
                    n.jsx("input", {
                      type: "file",
                      accept: "image/*",
                      style: { display: "none" },
                      onChange: (O) => {
                        var Q;
                        const M = (Q = O.target.files) == null ? void 0 : Q[0];
                        (M && U(M), (O.target.value = ""));
                      },
                    }),
                  ],
                }),
              K && P.length > 0 && n.jsx("div", { style: { fontSize: "11px", color: "#8a948e", marginTop: "6px" }, children: "上传中…" }),
              N.length > 0 &&
                n.jsx("div", {
                  className: "publish-video-list",
                  children: N.map((O, M) =>
                    n.jsxs(
                      "div",
                      {
                        className: "publish-video-item",
                        children: [n.jsx("video", { src: O, muted: !0, playsInline: !0, preload: "metadata" }), n.jsx("button", { type: "button", onClick: () => _((Q) => Q.filter((oe, Ne) => Ne !== M)), children: "×" })],
                      },
                      M,
                    ),
                  ),
                }),
              N.length < 3 &&
                n.jsxs("label", {
                  className: "cover-upload-btn video-btn",
                  children: [
                    ee ? `视频上传中 ${je}%` : "🎬 上传视频（≤512MB）",
                    !ee &&
                      n.jsx("input", {
                        type: "file",
                        accept: "video/*",
                        style: { display: "none" },
                        onChange: (O) => {
                          var Q;
                          const M = (Q = O.target.files) == null ? void 0 : Q[0];
                          (M && xe(M), (O.target.value = ""));
                        },
                      }),
                  ],
                }),
            ],
          }),
          n.jsxs("label", {
            children: ["给这份心情一个标题", n.jsx("input", { value: d, onChange: (O) => h(O.target.value), maxLength: 50, placeholder: "比如：今天发生了一件让我很难过的事…", required: !0 }), n.jsxs("small", { children: [d.length, "/50"] })],
          }),
          n.jsxs("label", {
            children: [
              "想说的话",
              ot &&
                (() => {
                  const O = (M, Q) => {
                    fa(Q);
                    const oe = Ru(ot.t, M);
                    if (we.current) {
                      (we.current.focus({ preventScroll: !0 }), we.current.setSelectionRange(oe, oe + M.length));
                      const Ne = 20,
                        De = Math.floor(oe / 50);
                      we.current.scrollTop = Math.max(0, De * Ne - 60);
                    }
                  };
                  return n.jsxs("div", {
                    style: { marginBottom: "8px", background: "#fff8f0", border: "1px solid #ffcc80", borderRadius: "8px", padding: "10px 12px" },
                    children: [
                      n.jsxs("div", {
                        style: { display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" },
                        children: [
                          n.jsx("span", { style: { fontSize: "12px", color: "#e65100", fontWeight: 500 }, children: "⚠️ 内容包含敏感词，请修改后重试：" }),
                          ot.w.length > 1 &&
                            n.jsxs(n.Fragment, {
                              children: [
                                n.jsx("button", {
                                  type: "button",
                                  onClick: () => {
                                    const M = (yt - 1 + ot.w.length) % ot.w.length;
                                    O(ot.w[M], M);
                                  },
                                  style: { background: "none", border: "1px solid #ffb3b3", color: "#d32f2f", padding: "0 6px", borderRadius: "10px", fontSize: "12px", cursor: "pointer", lineHeight: "1.8" },
                                  children: "↑",
                                }),
                                n.jsxs("span", { style: { fontSize: "11px", color: "#d32f2f" }, children: [yt + 1, "/", ot.w.length] }),
                                n.jsx("button", {
                                  type: "button",
                                  onClick: () => {
                                    const M = (yt + 1) % ot.w.length;
                                    O(ot.w[M], M);
                                  },
                                  style: { background: "none", border: "1px solid #ffb3b3", color: "#d32f2f", padding: "0 6px", borderRadius: "10px", fontSize: "12px", cursor: "pointer", lineHeight: "1.8" },
                                  children: "↓",
                                }),
                              ],
                            }),
                        ],
                      }),
                      n.jsx("div", {
                        style: { display: "flex", flexWrap: "wrap", gap: "6px" },
                        children: ot.w.map((M, Q) =>
                          n.jsx(
                            "span",
                            {
                              onClick: () => O(M, Q),
                              style: {
                                background: Q === yt ? "#ffcdd2" : "#ffe0e0",
                                color: "#d32f2f",
                                padding: "3px 10px",
                                borderRadius: "14px",
                                fontSize: "13px",
                                fontWeight: 500,
                                border: Q === yt ? "2px solid #d32f2f" : "1px solid #ffb3b3",
                                cursor: "pointer",
                              },
                              children: M,
                            },
                            Q,
                          ),
                        ),
                      }),
                      n.jsx(Ou, { text: ot.t, words: ot.w, currentIdx: yt }),
                    ],
                  });
                })(),
              n.jsx("div", {
                style: { position: "relative", width: "100%", marginTop: "9px" },
                children: [
                  n.jsx(VioHL, { text: v, words: vioList, currentIdx: -1 }),
                  n.jsx("textarea", {
                    ref: we,
                    value: v,
                    onChange: (O) => { j(O.target.value); gt(null); checkLocal(O.target.value); },
                    maxLength: 1e4,
                    placeholder: "不用组织语言，想到什么就写什么。我们会认真听你说…",
                    required: !0,
                    style: { position: "relative", zIndex: 1, background: "transparent", color: "transparent", caretColor: "#546158", border: "1px solid #e2dfd6", borderRadius: "14px", padding: "14px 16px", fontSize: "12px", width: "100%", resize: "none", height: "155px", lineHeight: "1.7" },
                  }),
                ],
              }),
              n.jsxs("small", { children: [v.length, "/10000"] }),
            ],
          }),
          n.jsxs("fieldset", {
            children: [
              n.jsxs("legend", { children: ["这件事关于 ", n.jsx("small", { style: { fontWeight: 400, color: "#9ba19d", fontSize: "9px" }, children: "可多选" })] }),
              n.jsxs("div", {
                className: "choice-row",
                children: [
                  st.map((O) => n.jsx("button", { type: "button", className: y.includes(O) ? "chosen" : "", onClick: () => C((M) => (M.includes(O) ? (M.length > 1 ? M.filter((Q) => Q !== O) : M) : [...M, O])), children: O }, O)),
                  !V && n.jsx("button", { type: "button", onClick: () => de(!0), children: "＋ 自定义" }),
                ],
              }),
              V &&
                n.jsxs("div", {
                  className: "custom-cat-row",
                  children: [
                    n.jsx("input", { value: D, onChange: (O) => I(O.target.value), placeholder: "输入自定义分类名", maxLength: 10, autoFocus: !0 }),
                    n.jsx("button", {
                      type: "button",
                      onClick: () => {
                        const O = D.trim();
                        O && (Hm(O), C((M) => (M.includes(O) ? M : [...M, O])), I(""), de(!1));
                      },
                      children: "添加",
                    }),
                  ],
                }),
            ],
          }),
          n.jsxs("fieldset", {
            children: [
              n.jsx("legend", { children: "此刻，你希望得到什么？" }),
              n.jsx("div", {
                className: "need-choices",
                children: Vr.map((O, M) =>
                  n.jsxs("button", { type: "button", className: S === O ? "chosen" : "", onClick: () => T(O), children: [n.jsx("span", { children: ["☁", "♡", "灯", "○"][M] }), n.jsx("b", { children: O }), n.jsx("small", { children: sp[O] })] }, O),
                ),
              }),
            ],
          }),
          !c &&
            n.jsxs("fieldset", {
              children: [
                n.jsx("legend", { children: "这条心事的可见性" }),
                n.jsx("div", {
                  className: "visibility-choices",
                  children: zv.map((O) =>
                    n.jsxs(
                      "button",
                      { type: "button", className: X === O.value ? "chosen" : "", onClick: () => J(O.value), children: [n.jsx("span", { children: O.icon }), n.jsx("b", { children: O.label }), n.jsx("small", { children: O.desc })] },
                      O.value,
                    ),
                  ),
                }),
              ],
            }),
          fe.length > 0 &&
            n.jsxs("fieldset", {
              children: [
                n.jsx("legend", { children: "添加到日记本（可选）" }),
                n.jsxs("div", {
                  className: "choice-row",
                  children: [
                    n.jsx("button", { type: "button", className: w === "" ? "chosen" : "", onClick: () => x(""), children: "不添加" }),
                    fe.map((O) => n.jsx("button", { type: "button", className: w === O.id ? "chosen" : "", onClick: () => x(O.id), children: O.name }, O.id)),
                  ],
                }),
              ],
            }),
          ot &&
            n.jsx("div", {
              style: { fontSize: "12px", color: "#e65100", background: "#fff3e0", border: "1px solid #ffcc80", borderRadius: "8px", padding: "8px 12px", marginBottom: "8px" },
              children: "请在上方修改内容后重新提交，敏感词会用红标标示在预览区",
            }),
          n.jsxs("div", {
            className: "form-actions",
            children: [
              n.jsx("button", { type: "button", onClick: Gt, children: "先不写了" }),
              n.jsx("button", {
                type: "button",
                onClick: Ya,
                style: { background: "none", border: "1px solid var(--sage-soft)", color: "var(--sage-dark)", borderRadius: "12px", cursor: "pointer", fontSize: "14px", padding: "0 20px" },
                children: "存草稿",
              }),
              n.jsxs("button", { className: "primary", type: "submit", disabled: !d.trim() || !v.trim(), children: [H ? "匿名发布" : "以真实昵称发布", " ", n.jsx("span", { children: "→" })] }),
            ],
          }),
        ],
      }),
      Ce !== null && ke && n.jsx(qv, { src: ke, onCancel: ca, onConfirm: ha, flash: m }),
    ],
  });
}
function Gv({ post: r, onBack: u, react: o, update: c, user: m, onStartDM: d, flash: h, onRequireLogin: v, onAvatarClick: j, onShare: y, onTextMenu: C }) {
  var ba;
  const [S, T] = p.useState(""),
    [H, k] = p.useState(null),
    [X, J] = p.useState(!1),
    [D, I] = p.useState([]),
    [V, de] = p.useState(!1),
    [P, Y] = p.useState(null),
    [K, F] = p.useState(0),
    Z = p.useRef(null);
  p.useEffect(() => {
    if (P) {
      F(0);
      const se = setTimeout(() => {
        const ge = Z.current;
        if (ge) {
          const Ae = ge.getBoundingClientRect();
          window.scrollTo({ top: window.scrollY + Ae.top - 80, behavior: "smooth" });
        }
      }, 300);
      return () => clearTimeout(se);
    }
  }, [P]);
  const [ye, Ce] = p.useState([{ role: "ai", text: "你好，我在这里。有什么想说的，都可以告诉我。" }]),
    [Se, ke] = p.useState(""),
    [Oe, ue] = p.useState(!1),
    [R, $] = p.useState(!1),
    [le, fe] = p.useState(!1),
    [be, w] = p.useState(""),
    [x, N] = p.useState(!1),
    [_, ee] = p.useState(!1),
    [he, je] = p.useState(""),
    [ze, Ee] = p.useState(null),
    Pe = p.useRef(null),
    [Ve, pt] = p.useState(null),
    [ot, gt] = p.useState("post"),
    [yt, fa] = p.useState(""),
    [we, st] = p.useState(""),
    [Mt, zt] = p.useState(""),
    [$e, jt] = p.useState(!1),
    [xa, We] = p.useState(!1),
    [It, Xt] = p.useState(""),
    [Rt, Gt] = p.useState(""),
    [Zt, Dt] = p.useState(!1),
    [Ya, Vt] = p.useState(!1),
    [St, U] = p.useState(!1),
    [xe, ve] = p.useState(null),
    [Qe, Ge] = p.useState(Date.now());
  p.useEffect(() => {
    const se = window.setInterval(() => Ge(Date.now()), 15e3);
    return () => window.clearInterval(se);
  }, []);
  const [Ze, Fe] = p.useState(!1);
  p.useEffect(() => {
    if (!(m != null && m.id)) {
      Fe(!1);
      return;
    }
    qe(`/api/admin/check?userId=${m.id}`)
      .then((se) => Fe(!!se.isAdmin))
      .catch(() => {});
  }, [m == null ? void 0 : m.id]);
  const dismissMenu = () => {
    try { window.getSelection()?.removeAllRanges(); } catch {}
    ee(!1);
  };
  const me = ["人身攻击", "辱骂谩骂", "色情低俗", "垃圾广告", "其他"],
    $t = () => {
      var se;
      if ((se = window.getSelection()) != null && se.toString().trim()) {
        const R = se.getRangeAt(0).getBoundingClientRect();
        if (R && (R.width > 0 || R.height > 0)) {
          Ee({ x: R.left + R.width / 2, y: R.top });
          ee(!0);
        }
      }
    },
    _checkSelAfterTouch = () => {
      setTimeout(() => {
        try {
          const sel = window.getSelection();
          const txt = sel?.toString().trim() || "";
          if (txt.length > 0 && sel && sel.rangeCount > 0) {
            const rect = sel.getRangeAt(0).getBoundingClientRect();
            if (rect && (rect.width > 0 || rect.height > 0)) {
              Ee({ x: rect.left + rect.width / 2, y: rect.top });
              ee(!0);
            }
          }
        } catch {}
      }, 400);
    },
    xt = (se) => {
      var ct;
      const Ae = !!(m && se.authorId && se.authorId === m.id) || De || Ze;
      (gt("comment"), fa(se.id), st(se.authorId || ""), zt(se.author), je(se.text || ""), jt(Ae), Ee(Pe.current), ee(!0));
      try {
        (ct = window.getSelection()) == null || ct.removeAllRanges();
      } catch {}
    },
    Kt = async () => {
      var Ae;
      const se = (Ae = window.getSelection()) == null ? void 0 : Ae.toString().trim(),
        ge = (se || he).slice(0, 2e3);
      if ((ee(!1), !!ge))
        try {
          (await Wi(ge), h(se ? "已复制选中内容" : "已复制全文"));
        } catch {
          h("复制失败");
        }
    },
    Jt = async () => {
      var Ae;
      const ge = ((Ae = window.getSelection()) == null ? void 0 : Ae.toString().trim()) || he;
      if ((ee(!1), !!ge)) {
        h("翻译中…");
        try {
          const ct = await Au(ge);
          ct ? pt(ct) : h("翻译失败");
        } catch {
          h("翻译失败，请重试");
        }
      }
    },
    ca = async () => {
      if ((ee(!1), !m)) return;
      const se = yt;
      try {
        const ge = await pe(`/api/posts/${r.id}/comments/delete`, { userId: m.id, commentId: se });
        if (ge.error) {
          h(ge.error);
          return;
        }
        (c({ ...r, comments: r.comments.filter((Ae) => Ae.id !== se).map((Ae) => (Ae.replies.some((ct) => ct.id === se) ? { ...Ae, replies: Ae.replies.filter((ct) => ct.id !== se) } : Ae)) }), h("评论已删除"));
      } catch {
        h("删除失败，请重试");
      }
    },
    ha = Du($t),
    va = async () => {
      if (!It) {
        h("请选择举报原因");
        return;
      }
      Dt(!0);
      try {
        const se = It + (Rt.trim() ? `：${Rt.trim()}` : ""),
          ge = await pe("/api/report", { reporterId: m.id, targetType: ot, targetId: yt, postId: r.id, authorId: we, reason: se });
        ge.success ? (h("举报已提交，我们会尽快处理"), We(!1), Xt(""), Gt("")) : h(ge.error || "举报失败");
      } catch {
        h("举报失败，请重试");
      }
      Dt(!1);
    },
    O = async () => {
      (Vt(!1), ee(!1));
      try {
        const se = await pe("/api/user/block", { userId: m.id, targetUserId: we });
        se.success ? h(`已拉黑 ${Mt}`) : h(se.error || "拉黑失败");
      } catch {
        h("拉黑失败");
      }
    },
    M = async () => {
      if (!Se.trim() || Oe) return;
      const se = Se.trim();
      (Ce((ge) => [...ge, { role: "user", text: se }]), ke(""), ue(!0));
      try {
        const ge = hp(Kn()),
          Ae = await pe("/api/ai/chat", { message: se, postTitle: r.title, postContent: r.content, ...(ge ? { aiStyle: ge } : {}) });
        Ce((ct) => [...ct, { role: "ai", text: Ae.reply || Ae.response || Ae.message || "我听到了。谢谢你愿意分享。" }]);
      } catch {
        Ce((ge) => [...ge, { role: "ai", text: "抱歉，我暂时无法回应，请稍后再试。" }]);
      }
      ue(!1);
    },
    Q = async (se) => {
      if ((se.preventDefault(), !m)) {
        v();
        return;
      }
      if (!X) {
        if (!S.trim()) {
          h("先写一句温柔的话吧");
          return;
        }
        J(!0);
        try {
          const ge = await pe(`/api/posts/${r.id}/comments`, { author: m.nickname, avatar: m.avatar, avatarType: m.avatarType, authorId: m.id, text: S.trim(), images: D });
          if (ge.error) {
            if (ge.moderationLabel) {
              (h(ge.error), J(!1));
              return;
            }
            (h(ge.error), ge.matched_words && (Y({ t: S.trim(), w: ge.matched_words }), F(0)), J(!1));
            return;
          }
          const Ae = ge.comment || ge.data || { id: Date.now().toString(), author: m.nickname, authorId: m.id, text: S.trim(), time: "刚刚", likes: 0, replies: [] };
          (c(H ? { ...r, comments: r.comments.map((ct) => (ct.id === H ? { ...ct, replies: [...ct.replies, Ae] } : ct)) } : { ...r, comments: [...r.comments, Ae] }), T(""), I([]), k(null));
        } catch {
          const ge = { id: Date.now().toString(), author: m.nickname, text: S, time: "刚刚", likes: 0, replies: [] };
          (c(H ? { ...r, comments: r.comments.map((Ae) => (Ae.id === H ? { ...Ae, replies: [...Ae.replies, ge] } : Ae)) } : { ...r, comments: [...r.comments, ge] }), T(""), I([]), k(null));
        }
        J(!1);
      }
    },
    oe = r.authorId || "",
    Ne = !!(m && oe && oe !== m.id),
    De = !!(m && oe && oe === m.id),
    Ue = De && Qe ? ju(r) : 0,
    _e = (ba = r.images) != null && ba.length ? r.images : r.coverImage ? [r.coverImage] : [],
    Le = async (se) => {
      if (!m || !De) return !1;
      const ge = _e.filter((Ae, ct) => ct !== se);
      try {
        const Ae = await pe(`/api/posts/${r.id}/edit`, { userId: m.id, images: ge });
        return Ae.error ? (h(Ae.error), !1) : (c({ ...r, images: ge, coverImage: ge.length ? r.coverImage : void 0 }), h("照片已删除"), !0);
      } catch {
        return (h("删除失败，请重试"), !1);
      }
    };
  (p.useEffect(() => {
    !Ne ||
      !m ||
      qe(`/api/friends/${m.id}`)
        .then((se) => {
          const ge = (se.friends || []).map((Ae) => Ae.id);
          N(ge.includes(oe));
        })
        .catch(() => {});
  }, [oe, m == null ? void 0 : m.id, Ne]),
    p.useEffect(() => {
      !m || !r.id || !Ne || pe(`/api/posts/${r.id}/view`, { userId: m.id, nickname: m.nickname, avatar: m.avatar, avatarType: m.avatarType }).catch(() => {});
    }, [r.id, m == null ? void 0 : m.id, Ne]));
  const rt = () => {
      oe && (w(""), fe(!0));
    },
    ht = async () => {
      if (oe)
        try {
          const se = be.trim() || `从帖子「${r.title}」加你`;
          (await pe("/api/friends/request", { from: m.id, to: oe, message: se }), $(!0), fe(!1), w(""), h("好友申请已发送"));
        } catch {
          h("发送失败，请重试");
        }
    },
    Nt = () => {
      if (!m) {
        v();
        return;
      }
      d({ id: oe, nickname: r.author, avatar: r.avatar, avatarType: r.avatarType });
    };
  return n.jsxs("div", {
    className: "page-wrap detail-wrap",
    onTouchStart: (se) => {
      const ge = se.touches[0];
      Pe.current = { x: ge.clientX, y: ge.clientY };
    },
    children: [
      n.jsx("button", { className: "back-button", onClick: u, children: "← 回到心事广场" }),
      n.jsxs("article", {
        className: "detail-card",
        children: [
          _e.length > 0 &&
            n.jsx("div", {
              className: "detail-images-grid",
              children: _e.map((se, ge) =>
                n.jsx(
                  "div",
                  {
                    className: "detail-image-item",
                    children: n.jsx("img", {
                      src: se,
                      alt: "",
                      loading: "lazy",
                      onClick: () => {
                        if (!m) {
                          v();
                          return;
                        }
                        ve(ge);
                      },
                    }),
                  },
                  ge,
                ),
              ),
            }),
          (r.videos || []).length > 0 && n.jsx("div", { className: "detail-videos-list", children: (r.videos || []).map((se, ge) => n.jsx("video", { src: se, controls: !0, playsInline: !0, preload: "metadata", className: "detail-video" }, ge)) }),
          n.jsxs("div", {
            className: "post-top",
            children: [
              n.jsxs("div", {
                className: "author",
                onClick:
                  r.authorId && !r.anonymous && j
                    ? (se) => {
                        (se.stopPropagation(), j(r.authorId));
                      }
                    : void 0,
                style: r.authorId && !r.anonymous && j ? { cursor: "pointer" } : void 0,
                children: [
                  n.jsx(qt, { user: { avatar: r.avatar, avatarType: r.avatarType, id: r.authorId || r.author || r.id } }),
                  n.jsxs("div", { children: [n.jsx("b", { children: r.author }), n.jsxs("span", { children: [r.time, r.edited_at ? " · 已编辑" : ""] })] }),
                ],
              }),
              n.jsx("div", {
                className: "tag-group",
                children: (r.category || "")
                  .split(", ")
                  .filter(Boolean)
                  .map((se, ge) => n.jsx("span", { className: `tag tag-${se}`, children: se }, ge)),
              }),
            ],
          }),
          n.jsxs("div", { className: "detail-copy", ...ha, onTouchEnd: () => { ha.onTouchEnd?.(); _checkSelAfterTouch(); }, onContextMenu: (se) => se.preventDefault(), onMouseUp: $t, children: [n.jsx("h1", { children: r.title }), n.jsx("p", { children: r.content })] }),
          n.jsxs("div", { className: "need-pill", children: [n.jsx("span", { children: "◌" }), r.need] }),
          De && Ue > 0 && n.jsx("div", { className: "edit-entry-row", children: n.jsxs("button", { className: "edit-post-btn", onClick: () => U(!0), children: ["✎ 编辑 ", n.jsxs("small", { children: ["剩余 ", pp(Ue)] })] }) }),
          n.jsxs("div", {
            className: "detail-actions",
            children: [
              n.jsxs("button", { onClick: () => o(r.id, "likes"), className: r.liked ? "liked" : "", children: [r.liked ? "♥" : "♡", " 点赞 ", n.jsx("b", { children: r.likes })] }),
              n.jsxs("button", { onClick: () => o(r.id, "hugs"), children: ["抱 抱抱一下 ", n.jsx("b", { children: r.hugs })] }),
              n.jsxs("button", { onClick: () => o(r.id, "same"), children: ["♧ 我也经历过 ", n.jsx("b", { children: r.same })] }),
              n.jsx("button", { className: r.saved ? "saved" : "", onClick: () => o(r.id, "saved"), children: r.saved ? "◆ 已收藏" : "◇ 收藏" }),
              Ne &&
                n.jsx("button", {
                  onClick: () => {
                    (gt("post"), fa(r.id), st(r.authorId || ""), zt(r.author), We(!0));
                  },
                  style: { background: "none", border: "none", cursor: "pointer", color: "var(--sage-dark)", fontSize: "13px", padding: "6px 2px" },
                  children: "🚩 举报",
                }),
              Ne &&
                n.jsx("button", {
                  onClick: () => {
                    (gt("post"), fa(r.id), st(r.authorId || ""), zt(r.author), Vt(!0));
                  },
                  style: { background: "none", border: "none", cursor: "pointer", color: "#c4543d", fontSize: "13px", padding: "6px 2px" },
                  children: "🚫 拉黑",
                }),
              n.jsxs("button", {
                onClick: () => (y == null ? void 0 : y(r)),
                style: { background: "none", border: "none", cursor: "pointer", color: "var(--sage-dark)", fontSize: "13px", padding: "6px 2px" },
                children: [
                  n.jsx("svg", {
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    width: "15",
                    height: "15",
                    style: { verticalAlign: "middle", marginBottom: "1px" },
                    children: n.jsx("path", { d: "M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z" }),
                  }),
                  " 分享",
                ],
              }),
            ],
          }),
          Ne &&
            r.visibility === "public" &&
            n.jsxs("div", {
              className: "post-contact-actions",
              children: [
                x
                  ? n.jsx("button", { className: "contact-btn primary", onClick: Nt, children: "💬 发消息" })
                  : R
                    ? n.jsx("button", { className: "contact-btn disabled", disabled: !0, children: "✓ 好友申请已发送" })
                    : n.jsx("button", { className: "contact-btn primary", onClick: rt, children: "➕ 加好友" }),
                !x && !R && n.jsx("button", { className: "contact-btn outline", onClick: Nt, children: "💬 发起聊天" }),
              ],
            }),
        ],
      }),
      r.visibility === "ai-only"
        ? n.jsxs("div", {
            className: "ai-chat-box",
            children: [
              n.jsx("style", {
                children:
                  ".ai-chat-messages{max-height:400px;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:10px}.ai-msg{display:flex;align-items:flex-start;gap:8px;max-width:85%}.ai-msg-user{align-self:flex-end;flex-direction:row-reverse}.ai-msg-avatar{font-size:20px;flex-shrink:0}.ai-msg-text{padding:8px 14px;border-radius:14px;font-size:14px;line-height:1.6;word-break:break-word}.ai-msg-user .ai-msg-text{background:var(--sage-dark,#6f917d);color:#fff;border-bottom-right-radius:4px}.ai-msg-ai .ai-msg-text{background:var(--sage-soft,#e8f0ea);color:#333;border-bottom-left-radius:4px}.ai-typing{color:#999;font-style:italic}",
              }),
              n.jsxs("div", { className: "ai-chat-head", children: [n.jsx("div", { className: "ai-avatar", children: "🤖" }), n.jsxs("div", { children: [n.jsx("h2", { children: "AI 陪伴" }), n.jsx("small", { children: "你的专属AI倾听者" })] })] }),
              n.jsxs("div", {
                className: "ai-chat-messages",
                children: [
                  ye.map((se, ge) =>
                    n.jsxs(
                      "div",
                      {
                        className: `ai-msg ${se.role === "user" ? "ai-msg-user" : "ai-msg-ai"}`,
                        children: [se.role === "ai" && n.jsx("span", { className: "ai-msg-avatar", children: "🤖" }), n.jsx("span", { className: "ai-msg-text", children: se.text })],
                      },
                      ge,
                    ),
                  ),
                  Oe && n.jsxs("div", { className: "ai-msg ai-msg-ai", children: [n.jsx("span", { className: "ai-msg-avatar", children: "🤖" }), n.jsx("span", { className: "ai-msg-text ai-typing", children: "正在思考…" })] }),
                ],
              }),
              n.jsxs("div", {
                className: "ai-input-row",
                children: [
                  n.jsx("input", {
                    value: Se,
                    onChange: (se) => ke(se.target.value),
                    placeholder: "对AI说点什么…",
                    onKeyDown: (se) => {
                      se.key === "Enter" && !se.shiftKey && (se.preventDefault(), M());
                    },
                    disabled: Oe,
                  }),
                  n.jsx("button", { onClick: M, disabled: !Se.trim() || Oe, children: Oe ? "…" : "发送" }),
                ],
              }),
            ],
          })
        : r.visibility === "private"
          ? n.jsx("div", { className: "ai-chat-box", children: n.jsxs("div", { className: "ai-coming", children: [n.jsx("span", { children: "🔒" }), n.jsx("p", { children: "这条心事仅你自己可见" })] }) })
          : r.visibility === "room"
            ? n.jsx("div", { className: "ai-chat-box", children: n.jsxs("div", { className: "ai-coming", children: [n.jsx("span", { children: "◈" }), n.jsx("p", { children: "这条心事在房间内可见，请在房间中查看回应" })] }) })
            : n.jsxs("section", {
                className: "comments-card",
                children: [
                  n.jsxs("div", { className: "comments-head", children: [n.jsxs("h2", { children: ["温暖回应 ", n.jsx("span", { children: r.comments.length })] }), n.jsx("p", { children: "友善一点，你的每句话都很重要" })] }),
                  m
                    ? n.jsxs("form", {
                        className: "comment-form",
                        onSubmit: Q,
                        children: [
                          n.jsx(qt, { user: m }),
                          n.jsxs("div", {
                            children: [
                              H && n.jsxs("div", { className: "replying", children: ["正在回复评论 ", n.jsx("button", { type: "button", onClick: () => k(null), children: "取消" })] }),
                              P &&
                                (() => {
                                  const se = (ge, Ae) => {
                                    F(Ae);
                                    const ct = Ru(P.t, ge);
                                    if (Z.current) {
                                      (Z.current.focus({ preventScroll: !0 }), Z.current.setSelectionRange(ct, ct + ge.length));
                                      const Wt = 20;
                                      Z.current.scrollTop = Math.max(0, Math.floor(ct / 50) * Wt - 60);
                                    }
                                  };
                                  return n.jsxs("div", {
                                    style: { marginBottom: "6px", background: "#fff8f0", border: "1px solid #ffcc80", borderRadius: "8px", padding: "8px 12px" },
                                    children: [
                                      n.jsxs("div", {
                                        style: { display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" },
                                        children: [
                                          n.jsx("span", { style: { fontSize: "12px", color: "#e65100", fontWeight: 500 }, children: "⚠️ 内容包含敏感词，请修改后重试：" }),
                                          P.w.length > 1 &&
                                            n.jsxs(n.Fragment, {
                                              children: [
                                                n.jsx("button", {
                                                  type: "button",
                                                  onClick: () => {
                                                    const ge = (K - 1 + P.w.length) % P.w.length;
                                                    se(P.w[ge], ge);
                                                  },
                                                  style: { background: "none", border: "1px solid #ffb3b3", color: "#d32f2f", padding: "0 6px", borderRadius: "10px", fontSize: "12px", cursor: "pointer", lineHeight: "1.8" },
                                                  children: "↑",
                                                }),
                                                n.jsxs("span", { style: { fontSize: "11px", color: "#d32f2f" }, children: [K + 1, "/", P.w.length] }),
                                                n.jsx("button", {
                                                  type: "button",
                                                  onClick: () => {
                                                    const ge = (K + 1) % P.w.length;
                                                    se(P.w[ge], ge);
                                                  },
                                                  style: { background: "none", border: "1px solid #ffb3b3", color: "#d32f2f", padding: "0 6px", borderRadius: "10px", fontSize: "12px", cursor: "pointer", lineHeight: "1.8" },
                                                  children: "↓",
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                      n.jsx("div", {
                                        style: { display: "flex", flexWrap: "wrap", gap: "6px" },
                                        children: P.w.map((ge, Ae) =>
                                          n.jsx(
                                            "span",
                                            {
                                              onClick: () => se(ge, Ae),
                                              style: {
                                                background: Ae === K ? "#ffcdd2" : "#ffe0e0",
                                                color: "#d32f2f",
                                                padding: "3px 10px",
                                                borderRadius: "14px",
                                                fontSize: "13px",
                                                fontWeight: 500,
                                                border: Ae === K ? "2px solid #d32f2f" : "1px solid #ffb3b3",
                                                cursor: "pointer",
                                              },
                                              children: ge,
                                            },
                                            Ae,
                                          ),
                                        ),
                                      }),
                                      n.jsx(Ou, { text: P.t, words: P.w, currentIdx: K }),
                                    ],
                                  });
                                })(),
                              n.jsx("div", {
                                style: { position: "relative", width: "100%" },
                                children: [
                                  n.jsx(VioHL, { text: S, words: _commentVioWords, currentIdx: -1 }),
                                  n.jsx("textarea", {
                                    ref: Z,
                                    value: S,
                                    onChange: (se) => { T(se.target.value); Y(null); _checkCommentVio(se.target.value); },
                                    placeholder: "写下一句温柔的话…",
                                    style: { position: "relative", zIndex: 1, background: "transparent", color: "transparent", caretColor: "#546158", border: 0, resize: "none", fontSize: "11px", padding: "3px", width: "100%", height: "48px" },
                                  }),
                                ],
                              }),
                              D.length > 0 &&
                                n.jsx("div", {
                                  className: "comment-images-row",
                                  children: D.map((se, ge) =>
                                    n.jsxs(
                                      "div",
                                      { className: "comment-image-preview", children: [n.jsx("img", { src: se, alt: "" }), n.jsx("button", { type: "button", onClick: () => I((Ae) => Ae.filter((ct, Wt) => Wt !== ge)), children: "×" })] },
                                      ge,
                                    ),
                                  ),
                                }),
                              n.jsxs("div", {
                                className: "comment-form-bottom",
                                children: [
                                  n.jsxs("div", {
                                    className: "comment-form-actions",
                                    children: [
                                      n.jsxs("label", {
                                        className: "comment-img-btn",
                                        children: [
                                          n.jsx("span", {
                                            children: n.jsxs("svg", {
                                              viewBox: "0 0 24 24",
                                              width: "18",
                                              height: "18",
                                              fill: "none",
                                              stroke: "currentColor",
                                              strokeWidth: "1.8",
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              style: { verticalAlign: "middle", display: "block" },
                                              children: [
                                                n.jsx("rect", { x: "2", y: "3", width: "20", height: "18", rx: "2", ry: "2" }),
                                                n.jsx("circle", { cx: "17", cy: "8", r: "2", fill: "currentColor", stroke: "none" }),
                                                n.jsx("path", { d: "M2 18 Q12 10 22 18" }),
                                              ],
                                            }),
                                          }),
                                          n.jsx("input", {
                                            type: "file",
                                            accept: "image/*",
                                            style: { display: "none" },
                                            onChange: async (se) => {
                                              var Ae;
                                              const ge = (Ae = se.target.files) == null ? void 0 : Ae[0];
                                              if (ge) {
                                                ((se.target.value = ""), de(!0));
                                                try {
                                                  const ct = await Us(ge);
                                                  I((Wt) => [...Wt, ct]);
                                                } catch {
                                                  h("图片上传失败");
                                                }
                                                de(!1);
                                              }
                                            },
                                          }),
                                        ],
                                      }),
                                      n.jsx("span", { children: "匿名回复 · 请保持善意" }),
                                    ],
                                  }),
                                  n.jsx("button", { disabled: X || V, children: X ? "发送中…" : V ? "上传中…" : "发送回应" }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    : n.jsxs("div", { className: "comment-form login-prompt", onClick: v, style: { cursor: "pointer" }, children: [n.jsx("p", { children: "登录后即可回应 TA 🤍" }), n.jsx("button", { children: "点我登录，马上回应" })] }),
                  n.jsxs("div", {
                    className: "comment-list",
                    children: [
                      r.comments.map((se) =>
                        n.jsx(
                          Vv,
                          {
                            comment: se,
                            onReply: () => {
                              if (!m) {
                                v();
                                return;
                              }
                              k(se.id);
                            },
                            onLongPress: () => xt(se),
                            onReplyLongPress: (ge) => xt(ge),
                            onAvatarClick: j,
                          },
                          se.id,
                        ),
                      ),
                      r.comments.length === 0 && n.jsxs("div", { className: "empty compact", children: [n.jsx("span", { children: "🌱" }), n.jsx("h3", { children: "还没有回应" }), n.jsx("p", { children: "成为第一个送上温暖的人吧。" })] }),
                    ],
                  }),
                ],
              }),
      St && m && n.jsx(vp, { post: r, userId: m.id, onClose: () => U(!1), onSaved: (se) => c(se), flash: h }),
      xe !== null && _e.length > 0 && n.jsx(bp, { images: _e, startIndex: xe, onClose: () => ve(null), canDelete: De, onDelete: Le, flash: h }),
      _ &&
        (() => {
          const se = ze || { x: window.innerWidth / 2, y: 240 },
            ge = (3 + (ot === "comment" && $e ? 1 : 0)) * 64 + 12;
          return n.jsxs(n.Fragment, {
            children: [
              n.jsx("div", { style: { position: "fixed", inset: 0, zIndex: 99998 }, onMouseDown: dismissMenu, onTouchStart: dismissMenu }),
              n.jsx("div", {
                className: "msg-action-menu",
                style: { position: "fixed", zIndex: 99999, padding: "8px 6px", left: Math.max(8, Math.min(se.x - ge / 2, window.innerWidth - ge - 8)), top: se.y < 100 ? se.y + 24 : se.y - 84 },
                onClick: (Ae) => Ae.stopPropagation(),
                children: n.jsxs("div", {
                  className: "msg-action-row",
                  children: [
                    n.jsxs("button", {
                      className: "msg-action-item",
                      onClick: Kt,
                      children: [
                        n.jsx("span", {
                          className: "msg-action-icon",
                          children: n.jsxs("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.8",
                            children: [n.jsx("rect", { x: "9", y: "9", width: "11", height: "11", rx: "2" }), n.jsx("path", { d: "M5 15V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10" })],
                          }),
                        }),
                        n.jsx("span", { children: "复制" }),
                      ],
                    }),
                    n.jsxs("button", {
                      className: "msg-action-item",
                      onClick: Jt,
                      children: [
                        n.jsx("span", {
                          className: "msg-action-icon",
                          children: n.jsxs("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.8",
                            children: [n.jsx("circle", { cx: "12", cy: "12", r: "9" }), n.jsx("path", { d: "M3 12h18M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" })],
                          }),
                        }),
                        n.jsx("span", { children: "翻译" }),
                      ],
                    }),
                    n.jsxs("button", {
                      className: "msg-action-item",
                      onClick: () => {
                        try {
                          const container = document.querySelector(".detail-copy");
                          if (container) {
                            const range = document.createRange();
                            range.selectNodeContents(container);
                            const sl = window.getSelection();
                            sl?.removeAllRanges();
                            sl?.addRange(range);
                            const rect = range.getBoundingClientRect();
                            if (rect) {
                              Ee({ x: rect.left + rect.width / 2, y: rect.top });
                            }
                          }
                        } catch {}
                      },
                      children: [
                        n.jsx("span", {
                          className: "msg-action-icon",
                          children: n.jsxs("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.8",
                            children: [n.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }), n.jsx("path", { d: "M7 7h10M7 11h10M7 15h6" })],
                          }),
                        }),
                        n.jsx("span", { children: "全选" }),
                      ],
                    }),
                    ot === "comment" &&
                      $e &&
                      n.jsxs("button", {
                        className: "msg-action-item",
                        onClick: ca,
                        children: [
                          n.jsx("span", {
                            className: "msg-action-icon",
                            children: n.jsxs("svg", {
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "1.8",
                              children: [n.jsx("path", { d: "M3 6h18" }), n.jsx("path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }), n.jsx("path", { d: "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" })],
                            }),
                          }),
                          n.jsx("span", { children: "删除" }),
                        ],
                      }),
                  ],
                }),
              }),
            ],
          });
        })(),
      Ve &&
        n.jsx("div", {
          className: "friend-action-overlay",
          style: { zIndex: 99999 },
          onMouseDown: (se) => {
            se.target === se.currentTarget && pt(null);
          },
          children: n.jsxs("div", {
            className: "friend-action-sheet",
            children: [
              n.jsx("div", { className: "friend-action-header", children: n.jsxs("div", { children: [n.jsx("b", { children: "翻译结果" })] }) }),
              n.jsx("div", { style: { padding: "4px 20px 12px", fontSize: "15px", lineHeight: 1.7, maxHeight: "40vh", overflowY: "auto", whiteSpace: "pre-wrap", wordBreak: "break-word", userSelect: "text" }, children: Ve }),
              n.jsx("div", {
                className: "friend-action-list",
                children: [              n.jsxs("button", {
                className: "msg-action-item",
                onClick: () => {
                  const el = document.querySelector(".friend-action-sheet");
                  if (el) {
                    try {
                      const range = document.createRange();
                      const sl = window.getSelection();
                      range.selectNodeContents(el);
                      sl.removeAllRanges(); sl.addRange(range);
                      setTimeout(() => {
                        const actual = window.getSelection();
                        const txt = actual ? actual.toString().trim() : "";
                        if (txt.length > 0) h("已全选(" + txt.length + "字)");
                        else h("全选失败，请重试");
                      }, 100);
                    } catch (e) { h("全选:" + e.message); }
                  }
                },
                children: [
                  n.jsx("span", {
                    className: "msg-action-icon",
                    children: n.jsxs("svg", {
                      viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8",
                      children: [n.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }), n.jsx("path", { d: "M7 7h10M7 11h10M7 15h6" })]
                    }),
                  }),
                  n.jsx("span", { children: "全选" }),
                ],
              }),
n.jsxs("button", {
                  onClick: async () => {
                    try {
                      (await Wi(Ve), h("已复制译文"));
                    } catch {
                      h("复制失败");
                    }
                  },
                  children: "复制译文",
                }),
              ]}),
              n.jsx("button", { className: "friend-action-cancel", onClick: () => pt(null), children: "关闭" }),
            ],
          }),
        }),
      xa &&
        n.jsx("div", {
          className: "report-overlay",
          onMouseDown: (se) => {
            se.target === se.currentTarget && (We(!1), Xt(""), Gt(""));
          },
          children: n.jsxs("div", {
            className: "report-dialog",
            children: [
              n.jsx("button", {
                className: "login-close",
                onClick: () => {
                  (We(!1), Xt(""), Gt(""));
                },
                children: "×",
              }),
              n.jsx("h2", { children: "举报内容" }),
              n.jsx("p", { className: "report-subtitle", children: "请选择举报原因，我们会认真处理" }),
              n.jsx("div", { className: "report-reasons", children: me.map((se) => n.jsx("button", { className: `report-reason-item ${It === se ? "selected" : ""}`, onClick: () => Xt(se), children: se }, se)) }),
              n.jsx("textarea", { className: "report-detail-input", value: Rt, onChange: (se) => Gt(se.target.value), placeholder: "补充说明（选填）", maxLength: 200 }),
              n.jsx("button", { className: "report-submit-btn", onClick: va, disabled: !It || Zt, children: Zt ? "提交中…" : "提交举报" }),
            ],
          }),
        }),
      Ya &&
        n.jsx("div", {
          className: "report-overlay",
          onMouseDown: (se) => {
            se.target === se.currentTarget && Vt(!1);
          },
          children: n.jsxs("div", {
            className: "report-dialog",
            style: { maxWidth: "340px" },
            children: [
              n.jsx("h2", { children: "拉黑用户" }),
              n.jsxs("p", { className: "report-subtitle", children: ["确定拉黑「", Mt, "」？"] }),
              n.jsx("p", { style: { fontSize: "11px", color: "var(--muted)", lineHeight: 1.6, margin: "8px 0 16px" }, children: "拉黑后你将看不到对方发布的内容，对方也无法看到你的内容（除非对方也拉黑了你）。" }),
              n.jsxs("div", {
                style: { display: "flex", gap: "10px" },
                children: [n.jsx("button", { className: "report-cancel-btn", onClick: () => Vt(!1), children: "取消" }), n.jsx("button", { className: "report-submit-btn", style: { background: "#c4543d" }, onClick: O, children: "确定拉黑" })],
              }),
            ],
          }),
        }),
      le &&
        n.jsx("div", {
          className: "report-overlay",
          onMouseDown: (se) => {
            se.target === se.currentTarget && (fe(!1), w(""));
          },
          children: n.jsxs("div", {
            className: "report-dialog",
            style: { maxWidth: "360px" },
            children: [
              n.jsx("button", {
                className: "login-close",
                onClick: () => {
                  (fe(!1), w(""));
                },
                children: "×",
              }),
              n.jsx("h2", { children: "添加好友" }),
              n.jsxs("p", { className: "report-subtitle", children: ["向「", r.author, "」发送好友申请"] }),
              n.jsxs("div", {
                style: { position: "relative", marginBottom: "16px" },
                children: [
                  n.jsx("textarea", { className: "report-detail-input", value: be, onChange: (se) => w(se.target.value.slice(0, 50)), placeholder: "写一句备注让对方认识你（选填）", maxLength: 50, style: { height: "80px" } }),
                  n.jsxs("span", { style: { position: "absolute", right: "12px", bottom: "8px", fontSize: "10px", color: "var(--muted)" }, children: [be.length, "/50"] }),
                ],
              }),
              n.jsxs("div", {
                style: { display: "flex", gap: "10px" },
                children: [
                  n.jsx("button", {
                    className: "report-cancel-btn",
                    onClick: () => {
                      (fe(!1), w(""));
                    },
                    children: "取消",
                  }),
                  n.jsx("button", { className: "report-submit-btn", onClick: ht, children: "确认发送" }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
function Du(r) {
  const u = p.useRef(void 0),
    o = p.useRef(null),
    c = () => {
      (u.current !== void 0 && (window.clearTimeout(u.current), (u.current = void 0)), (o.current = null));
    };
  return {
    onTouchStart: (m) => {
      if (!r) return;
      const d = m.touches[0];
      ((o.current = { x: d.clientX, y: d.clientY }),
        (u.current = window.setTimeout(() => {
          ((u.current = void 0), r());
        }, 650)));
    },
    onTouchMove: (m) => {
      if (u.current === void 0 || !o.current) return;
      const d = m.touches[0];
      (Math.abs(d.clientX - o.current.x) > 10 || Math.abs(d.clientY - o.current.y) > 10) && c();
    },
    onTouchEnd: () => c(),
    onContextMenu: void 0,
  };
}
function Vv({ comment: r, onReply: u, onLongPress: o, onReplyLongPress: c, onAvatarClick: m }) {
  const [d, h] = p.useState(!1),
    v = Du(o);
  return n.jsxs("div", {
    className: "comment",
    ...v,
    children: [
      n.jsx("span", {
        onClick:
          r.authorId && m
            ? (j) => {
                (j.stopPropagation(), m(r.authorId));
              }
            : void 0,
        style: r.authorId && m ? { cursor: "pointer", flexShrink: 0 } : { flexShrink: 0 },
        children: n.jsx(qt, { user: { avatar: r.avatar || "云", avatarType: r.avatarType, id: r.authorId || r.author || r.id }, size: 35 }),
      }),
      n.jsxs("div", {
        className: "comment-main",
        children: [
          n.jsxs("div", { children: [n.jsx("b", { children: r.author }), r.isAI ? null : n.jsx("span", { children: zu(r) })] }),
          n.jsx("p", { children: r.text }),
          n.jsxs("div", { className: "comment-buttons", children: [n.jsxs("button", { onClick: () => h(!d), className: d ? "saved" : "", children: ["♡ ", r.likes + (d ? 1 : 0)] }), n.jsx("button", { onClick: u, children: "回复" })] }),
          r.images && r.images.length > 0 && n.jsx("div", { className: "comment-images-row", children: r.images.map((j, y) => n.jsx("img", { src: j, alt: "", className: "comment-image-thumb", loading: "lazy" }, y)) }),
          r.replies.map((j) => n.jsx($v, { reply: j, onLongPress: c ? () => c(j) : void 0 }, j.id)),
        ],
      }),
    ],
  });
}
function $v({ reply: r, onLongPress: u }) {
  const o = Du(u);
  return n.jsxs("div", {
    className: "reply",
    ...o,
    children: [
      n.jsx("b", { children: r.author }),
      n.jsx("p", { children: r.text }),
      r.images && r.images.length > 0 && n.jsx("div", { className: "comment-images-row", children: r.images.map((c, m) => n.jsx("img", { src: c, alt: "", className: "comment-image-thumb", loading: "lazy" }, m)) }),
      n.jsx("span", { children: zu(r) }),
    ],
  });
}
function Xm(r) {
  if (r.startsWith("[audio]") && r.endsWith("[/audio]")) return "[语音]";
  if (r.startsWith("[img]") && r.endsWith("[/img]")) return "[图片]";
  if (r.startsWith("[video]") && r.endsWith("[/video]")) return "[视频]";
  if (r.startsWith("[file]") && r.endsWith("[/file]")) return `[文件] ${r.slice(6, -7).split("|")[0]}`;
  const u = r.match(/^\[quote\].*?\[\/quote\]([\s\S]*)$/);
  return u ? u[1].trim() : r;
}
function Qv({ user: r, onStartDM: u, onOpenRoom: o, flash: c, onUnreadUpdate: m, onFullscreenChange: d, onTextMenu: h }) {
  const [v, j] = p.useState([]),
    [y, C] = p.useState({}),
    [S, T] = p.useState([]),
    [H, k] = p.useState({}),
    [X, J] = p.useState({ dm: {}, rooms: {} }),
    [D, I] = p.useState(null),
    V = p.useRef(void 0),
    [de, P] = p.useState(null),
    [Y, K] = p.useState(""),
    F = () => {
      try {
        return JSON.parse(Te.getItem("moodtree-pinned-friends") || "[]");
      } catch {
        return [];
      }
    },
    [Z, ye] = p.useState(F()),
    [Ce, Se] = p.useState(!1),
    [ke, Oe] = p.useState(!1);
  p.useEffect(() => {
    d == null || d(Ce || ke);
  }, [Ce, ke, d]);
  const ue = (x) => {
      const N = Z.includes(x) ? Z.filter((_) => _ !== x) : [...Z, x];
      (ye(N), Te.setItem("moodtree-pinned-friends", JSON.stringify(N)), c(N.includes(x) ? "已置顶好友" : "已取消置顶"));
    },
    R = (x) => {
      V.current = window.setTimeout(() => I(x), 500);
    },
    $ = () => {
      V.current && clearTimeout(V.current);
    },
    le = async () => {
      if (
        D &&
        confirm(`确定删除好友「${D.alias || D.nickname}」吗？
将同时清空你们的聊天记录。`)
      )
        try {
          (await pe("/api/friends/delete", { userId: r.id, friendId: D.id }), j((N) => N.filter((_) => _.id !== D.id)));
          const x = Z.filter((N) => N !== D.id);
          (ye(x), Te.setItem("moodtree-pinned-friends", JSON.stringify(x)), I(null), c("好友已删除"));
        } catch {
          c("删除失败");
        }
    },
    fe = async () => {
      if (de)
        try {
          (await pe("/api/friends/alias", { userId: r.id, friendId: de.id, alias: Y }), j((x) => x.map((N) => (N.id === de.id ? { ...N, alias: Y.trim() } : N))), c(Y.trim() ? "备注已更新" : "备注已清除"), P(null), K(""));
        } catch {
          c("设置备注失败");
        }
    };
  (p.useEffect(() => {
    (qe(`/api/friends/${r.id}`)
      .then((x) => j(x.friends || []))
      .catch(() => {}),
      qe(`/api/rooms/list/${r.id}`)
        .then((x) => T(x.rooms || []))
        .catch(() => {}));
  }, [r.id]),
    p.useEffect(() => {
      const x = () => {
        (v.forEach((_) => {
          const ee = [r.id, _.id].sort().join("_");
          qe(`/api/chat/messages?type=dm&target=${encodeURIComponent(ee)}&since=0&userId=${r.id}`)
            .then((he) => {
              const je = he.messages || [];
              if (je.length > 0) {
                const ze = je[je.length - 1];
                C((Ee) => ({ ...Ee, [_.id]: { content: ze.content, time: ze.time } }));
              }
            })
            .catch(() => {});
        }),
          S.forEach((_) => {
            qe(`/api/chat/messages?type=room&target=${encodeURIComponent(_.id)}&since=0&userId=${r.id}`)
              .then((ee) => {
                const he = ee.messages || [];
                if (he.length > 0) {
                  const je = he[he.length - 1];
                  k((ze) => ({ ...ze, [_.id]: { content: je.content, time: je.time } }));
                }
              })
              .catch(() => {});
          }),
          qe(`/api/chat/unread?userId=${r.id}`)
            .then((_) => {
              const ee = { dm: _.dm || {}, rooms: _.rooms || {} };
              (J(ee), m && m(_.total || 0));
            })
            .catch(() => {}));
      };
      x();
      const N = setInterval(x, 5e3);
      return () => clearInterval(N);
    }, [v, S, r.id]));
  const be = (x) => {
      if (!x) return "";
      const N = new Date(x),
        _ = new Date();
      return N.toDateString() === _.toDateString() ? N.toTimeString().slice(0, 5) : `${N.getMonth() + 1}/${N.getDate()}`;
    },
    w = [...v].sort((x, N) => {
      const _ = Z.includes(x.id) ? 1 : 0;
      return (Z.includes(N.id) ? 1 : 0) - _;
    });
  return n.jsxs("div", {
    className: "page-wrap chat-page-wrap",
    children: [
      !Ce && !ke && n.jsxs("div", { className: "page-intro", children: [n.jsx("span", { children: "MESSAGES" }), n.jsx("h1", { children: "聊天" }), n.jsx("p", { children: "和好友私聊，或进入房间群聊" })] }),
      Ce && n.jsx(Iv, { user: r, onBack: () => Se(!1), flash: c }),
      ke && n.jsx(Jv, { user: r, onBack: () => Oe(!1), flash: c, onTextMenu: h }),
      !Ce &&
        !ke &&
        n.jsxs(n.Fragment, {
          children: [
            n.jsxs("div", {
              className: "chat-list-section",
              style: { marginBottom: "16px" },
              children: [
                n.jsx("h3", { className: "chat-list-title", children: "发现" }),
                n.jsxs("div", {
                  className: "chat-list-item",
                  onClick: () => Se(!0),
                  style: { cursor: "pointer" },
                  children: [
                    n.jsx("div", { className: "chat-list-avatar", style: { background: "linear-gradient(135deg, #a8cbb4, #6f917d)", fontSize: "22px" }, children: "🤖" }),
                    n.jsxs("div", { className: "chat-list-info", children: [n.jsx("b", { children: "AI 陪伴聊天" }), n.jsx("small", { children: "和AI聊聊心事，随时倾听你" })] }),
                    n.jsx("span", { style: { fontSize: "14px", color: "var(--muted)" }, children: "›" }),
                  ],
                }),
                n.jsxs("div", {
                  className: "chat-list-item",
                  onClick: () => Oe(!0),
                  style: { cursor: "pointer" },
                  children: [
                    n.jsx("div", { className: "chat-list-avatar", style: { background: "linear-gradient(135deg, #b7c7dd, #5b8ef)", fontSize: "22px" }, children: "🍾" }),
                    n.jsxs("div", { className: "chat-list-info", children: [n.jsx("b", { children: "漂流瓶" }), n.jsx("small", { children: "投出一句心事，捡起一份温暖" })] }),
                    n.jsx("span", { style: { fontSize: "14px", color: "var(--muted)" }, children: "›" }),
                  ],
                }),
              ],
            }),
            S.length > 0 &&
              n.jsxs("div", {
                className: "chat-list-section",
                children: [
                  n.jsx("h3", { className: "chat-list-title", children: "群聊" }),
                  S.map((x) =>
                    n.jsxs(
                      "div",
                      {
                        className: "chat-list-item",
                        onClick: () => o(x.id),
                        children: [
                          n.jsxs("div", {
                            className: "chat-list-avatar room-avatar",
                            style: { position: "relative" },
                            children: ["◈", X.rooms[x.id] && n.jsx("span", { className: "unread-badge", children: X.rooms[x.id] > 99 ? "99+" : X.rooms[x.id] })],
                          }),
                          n.jsxs("div", { className: "chat-list-info", children: [n.jsx("b", { children: x.name }), n.jsx("small", { children: H[x.id] ? Xm(H[x.id].content) : "点击进入群聊" })] }),
                          H[x.id] && n.jsx("span", { className: "chat-list-time", children: be(H[x.id].time) }),
                        ],
                      },
                      x.id,
                    ),
                  ),
                ],
              }),
            n.jsxs("div", {
              className: "chat-list-section",
              children: [
                n.jsxs("h3", { className: "chat-list-title", children: ["好友 (", v.length, ")"] }),
                v.length
                  ? w.map((x) =>
                      n.jsxs(
                        "div",
                        {
                          className: `chat-list-item ${Z.includes(x.id) ? "pinned" : ""}`,
                          onClick: () => u(x),
                          onTouchStart: () => R(x),
                          onTouchEnd: $,
                          onTouchMove: $,
                          onContextMenu: (N) => {
                            (N.preventDefault(), I(x));
                          },
                          children: [
                            n.jsxs("div", {
                              style: { position: "relative" },
                              children: [
                                n.jsx(qt, { user: x, size: 48 }),
                                Z.includes(x.id) && n.jsx("span", { className: "pin-indicator-mini", children: "📌" }),
                                X.dm[x.id] && n.jsx("span", { className: "unread-badge", children: X.dm[x.id] > 99 ? "99+" : X.dm[x.id] }),
                              ],
                            }),
                            n.jsxs("div", { className: "chat-list-info", children: [n.jsx("b", { children: x.alias || x.nickname }), n.jsx("small", { children: y[x.id] ? Xm(y[x.id].content) : "点击开始聊天" })] }),
                            y[x.id] && n.jsx("span", { className: "chat-list-time", children: be(y[x.id].time) }),
                          ],
                        },
                        x.id,
                      ),
                    )
                  : n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "💬" }), n.jsx("h3", { children: "还没有好友" }), n.jsx("p", { children: "去「我的」-「好友」通过ID添加好友" })] }),
              ],
            }),
            D &&
              n.jsx("div", {
                className: "friend-action-overlay",
                onMouseDown: (x) => {
                  x.target === x.currentTarget && I(null);
                },
                children: n.jsxs("div", {
                  className: "friend-action-sheet",
                  children: [
                    n.jsxs("div", {
                      className: "friend-action-header",
                      children: [
                        n.jsx(qt, { user: D, size: 50 }),
                        n.jsxs("div", { children: [n.jsx("b", { children: D.alias || D.nickname }), D.alias && n.jsxs("small", { children: ["原昵称: ", D.nickname] }), n.jsx("small", { children: D.id })] }),
                      ],
                    }),
                    n.jsxs("div", {
                      className: "friend-action-list",
                      children: [
                        n.jsxs("button", {
                          onClick: () => {
                            (u(D), I(null));
                          },
                          children: [n.jsx("span", { children: "💬" }), "发消息"],
                        }),
                        n.jsxs("button", {
                          onClick: () => {
                            (P(D), K(D.alias || ""), I(null));
                          },
                          children: [n.jsx("span", { children: "🏷️" }), "设置备注"],
                        }),
                        n.jsxs("button", {
                          onClick: () => {
                            ue(D.id);
                          },
                          children: Z.includes(D.id) ? "取消置顶" : "置顶好友",
                        }),
                        n.jsxs("button", { className: "danger", onClick: le, children: ["删除好友"] }),
                      ],
                    }),
                    n.jsx("button", { className: "friend-action-cancel", onClick: () => I(null), children: "取消" }),
                  ],
                }),
              }),
            de &&
              n.jsx("div", {
                className: "modal-overlay",
                onMouseDown: (x) => {
                  x.target === x.currentTarget && (P(null), K(""));
                },
                children: n.jsxs("div", {
                  className: "modal-card alias-modal",
                  children: [
                    n.jsx("button", {
                      className: "login-close",
                      onClick: () => {
                        (P(null), K(""));
                      },
                      children: "×",
                    }),
                    n.jsx("h2", { children: "设置备注" }),
                    n.jsxs("div", { className: "alias-friend-preview", children: [n.jsx(qt, { user: de, size: 48 }), n.jsxs("div", { children: [n.jsx("b", { children: de.nickname }), n.jsx("small", { children: de.id })] })] }),
                    n.jsx("input", {
                      className: "alias-input",
                      value: Y,
                      onChange: (x) => K(x.target.value),
                      placeholder: "输入备注名（留空清除备注）",
                      maxLength: 20,
                      autoFocus: !0,
                      onKeyDown: (x) => {
                        x.key === "Enter" && fe();
                      },
                    }),
                    n.jsxs("div", {
                      className: "alias-actions",
                      children: [
                        n.jsx("button", {
                          className: "alias-cancel",
                          onClick: () => {
                            (P(null), K(""));
                          },
                          children: "取消",
                        }),
                        n.jsx("button", { className: "alias-save", onClick: fe, children: "保存" }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        }),
    ],
  });
}
function Iv({ user: r, onBack: u, flash: o }) {
  const [c, m] = p.useState([{ role: "ai", text: "你好，我在这里。有什么想说的，都可以告诉我。不管是什么心情，我都会认真听。" }]),
    [d, h] = p.useState(""),
    [v, j] = p.useState(!1),
    y = p.useRef(null),
    C = p.useRef(!0);
  p.useEffect(() => {
    var T;
    if (C.current) {
      C.current = !1;
      return;
    }
    (T = y.current) == null || T.scrollIntoView({ behavior: "smooth" });
  }, [c]);
  const S = async () => {
    if (!d.trim() || v) return;
    const T = d.trim();
    (m((H) => [...H, { role: "user", text: T }]), h(""), j(!0));
    try {
      const H = c.map((J) => ({ role: J.role === "user" ? "user" : "assistant", content: J.text })),
        k = hp(Kn()),
        X = await pe("/api/ai/chat", { history: [...H, { role: "user", content: T }], ...(k ? { aiStyle: k } : {}) });
      X.error ? m((J) => [...J, { role: "ai", text: "AI暂时无法回应，请稍后再试。" }]) : m((J) => [...J, { role: "ai", text: X.reply || X.response || X.message || "我听到了。谢谢你愿意分享。" }]);
    } catch {
      m((H) => [...H, { role: "ai", text: "AI暂时无法回应，请稍后再试。" }]);
    }
    j(!1);
  };
  return n.jsxs("div", {
    className: "page-wrap",
    style: { maxWidth: "700px", margin: "0 auto", display: "flex", flexDirection: "column", height: "calc(100vh - 20px)" },
    children: [
      n.jsx("style", {
        children: `
      .ai-page-messages{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;background:var(--cream,#faf8f5);border-radius:16px;margin-bottom:12px}
      .ai-page-msg{display:flex;align-items:flex-start;gap:10px;max-width:85%}
      .ai-page-msg-user{align-self:flex-end;flex-direction:row-reverse}
      .ai-page-msg-avatar{font-size:24px;flex-shrink:0;width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:var(--sage-soft,#e8f0ea)}
      .ai-page-msg-user .ai-page-msg-avatar{background:var(--sage-dark,#6f917d);color:#fff}
      .ai-page-msg-text{padding:10px 16px;border-radius:16px;font-size:14px;line-height:1.7;word-break:break-word}
      .ai-page-msg-user .ai-page-msg-text{background:var(--sage-dark,#6f917d);color:#fff;border-bottom-right-radius:4px}
      .ai-page-msg-ai .ai-page-msg-text{background:#fff;color:#333;border-bottom-left-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,0.06)}
      .ai-page-typing{color:#999;font-style:italic;font-size:13px}
      .ai-page-input{display:flex;gap:8px;padding:12px;background:#fff;border-radius:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06)}
      .ai-page-input input{flex:1;border:1px solid #e0e0e0;border-radius:12px;padding:10px 14px;font-size:14px;outline:none}
      .ai-page-input input:focus{border-color:var(--sage,#6f917d)}
      .ai-page-input button{background:var(--sage-dark,#6f917d);color:#fff;border:none;border-radius:12px;padding:0 20px;font-size:14px;cursor:pointer;white-space:nowrap}
      .ai-page-input button:disabled{opacity:0.5;cursor:not-allowed}
      .ai-page-header{display:flex;align-items:center;gap:12px;margin-bottom:12px}
      .ai-page-header h2{font-size:18px;margin:0}
      .ai-page-header small{font-size:12px;color:var(--muted)}
      .ai-page-top-back{padding:4px 0 0;margin-bottom:2px}
      .ai-page-top-back .back-button{font-size:20px;color:var(--sage-dark,#6f917d);background:none;border:none;cursor:pointer;padding:6px 2px;display:flex;align-items:center}
      .ai-page-header-divider{height:1px;background:linear-gradient(90deg,transparent,rgba(180,140,80,0.25),transparent);margin:12px 0 16px}
    `,
      }),
      n.jsx("div", { className: "ai-page-top-back", children: n.jsx("button", { className: "back-button", onClick: u, children: "←" }) }),
      n.jsxs("div", {
        className: "ai-page-header",
        children: [n.jsx("div", { style: { fontSize: "28px" }, children: "🤖" }), n.jsxs("div", { children: [n.jsx("h2", { children: "AI 陪伴" }), n.jsx("small", { children: "温暖倾听 · 永远在你身边" })] })],
      }),
      n.jsx("div", { className: "ai-page-header-divider" }),
      n.jsxs("div", {
        className: "ai-page-messages",
        children: [
          c.map((T, H) =>
            n.jsxs(
              "div",
              {
                className: `ai-page-msg ${T.role === "user" ? "ai-page-msg-user" : "ai-page-msg-ai"}`,
                children: [n.jsx("div", { className: "ai-page-msg-avatar", children: T.role === "ai" ? "🤖" : "🌿" }), n.jsx("div", { className: "ai-page-msg-text", children: T.text })],
              },
              H,
            ),
          ),
          v && n.jsxs("div", { className: "ai-page-msg ai-page-msg-ai", children: [n.jsx("div", { className: "ai-page-msg-avatar", children: "🤖" }), n.jsx("div", { className: "ai-page-msg-text ai-page-typing", children: "正在思考…" })] }),
          n.jsx("div", { ref: y }),
        ],
      }),
      n.jsxs("div", {
        className: "ai-page-input",
        children: [
          n.jsx("input", {
            value: d,
            onChange: (T) => h(T.target.value),
            onKeyDown: (T) => {
              T.key === "Enter" && !T.shiftKey && (T.preventDefault(), S());
            },
            placeholder: "对AI说点什么…",
            disabled: v,
          }),
          n.jsx("button", { onClick: S, disabled: !d.trim() || v, children: v ? "…" : "发送" }),
        ],
      }),
    ],
  });
}
const Qr = [
    { name: "海洋蓝", value: "ocean", color: "#4a90d9", light: "#e8f0fe" },
    { name: "日落橙", value: "sunset", color: "#e8845a", light: "#fef0e8" },
    { name: "森林绿", value: "forest", color: "#5a8f6a", light: "#e8f5ec" },
    { name: "薰衣草", value: "lavender", color: "#9b7db8", light: "#f2ecf8" },
    { name: "玫瑰粉", value: "rose", color: "#d9697a", light: "#fcecf0" },
    { name: "金色", value: "gold", color: "#c9a84c", light: "#faf5e8" },
    { name: "天空蓝", value: "sky", color: "#7ec8e3", light: "#e8f6fa" },
    { name: "薄荷", value: "mint", color: "#7ec8a3", light: "#e8faf2" },
    { name: "浆果紫", value: "berry", color: "#a05d8a", light: "#f5ecf2" },
    { name: "珊瑚", value: "coral", color: "#e87a7a", light: "#fcecec" },
  ],
  Zv = [
    "❤️",
    "💙",
    "💚",
    "💛",
    "💜",
    "🧡",
    "🩷",
    "💗",
    "💖",
    "✨",
    "🌟",
    "🔥",
    "💫",
    "🌈",
    "🌊",
    "🍀",
    "🌺",
    "🎵",
    "🕊️",
    "⭐",
    "🥰",
    "😊",
    "🌸",
    "🌻",
    "🍭",
    "🍬",
    "🎀",
    "🎈",
    "🦋",
    "🐚",
    "🌙",
    "☀️",
    "🍃",
    "💐",
    "🌹",
    "🌼",
    "🪷",
    "💝",
    "💘",
    "🗝️",
    "🔮",
    "🎠",
    "🎡",
    "🎪",
    "🎭",
    "🎨",
    "🧩",
    "🎯",
    "🪄",
  ];
function Kv({ emoji: r, x: u, y: o, onDone: c }) {
  const [m, d] = p.useState(0);
  p.useEffect(() => {
    const j = setTimeout(() => d(1), 50),
      y = setTimeout(() => {
        (d(2), c());
      }, 800);
    return () => {
      (clearTimeout(j), clearTimeout(y));
    };
  }, []);
  const h = (Math.random() - 0.5) * 60,
    v = (Math.random() - 0.5) * 40;
  return n.jsx("span", {
    style: {
      position: "fixed",
      left: u - 14,
      top: o - 14,
      zIndex: 9999,
      pointerEvents: "none",
      fontSize: m === 0 ? "0px" : m === 1 ? "28px" : "36px",
      opacity: m === 2 ? 0 : 1,
      transform: `translate(${v}px, ${m === 2 ? -80 : 0}px) rotate(${m === 2 ? h : 0}deg)`,
      transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
    },
    children: r,
  });
}
function Jv({ user: r, onBack: u, flash: o, onTextMenu: c }) {
  const m = p.useRef(null),
    d = p.useRef(!1),
    h = p.useRef(null),
    v = (U) =>
      c
        ? {
            onTouchStart: (xe) => {
              const ve = xe.touches[0];
              ((h.current = { x: ve.clientX, y: ve.clientY }),
                clearTimeout(m.current),
                (m.current = setTimeout(() => {
                  var Qe, Ge, Ze;
                  ((Qe = window.getSelection()) != null && Qe.toString().trim()) || ((d.current = !0), c(U, ((Ge = h.current) == null ? void 0 : Ge.x) ?? void 0, ((Ze = h.current) == null ? void 0 : Ze.y) ?? void 0));
                }, 500)));
            },
            onTouchEnd: () => {
              (clearTimeout(m.current), (h.current = null));
            },
            onTouchMove: (xe) => {
              if (!h.current) return;
              const ve = xe.touches[0];
              (Math.abs(ve.clientX - h.current.x) > 10 || Math.abs(ve.clientY - h.current.y) > 10) && (clearTimeout(m.current), (h.current = null));
            },
            onContextMenu: (xe) => xe.preventDefault(),
          }
        : {},
    [j, y] = p.useState("bottle"),
    [C, S] = p.useState([]),
    [T, H] = p.useState([]),
    [k, X] = p.useState(""),
    [J, D] = p.useState(!1),
    [I, V] = p.useState(!1),
    [de, P] = p.useState(new Set()),
    [Y, K] = p.useState(new Set()),
    [F, Z] = p.useState("#4a90d9"),
    [ye, Ce] = p.useState(!1),
    [Se, ke] = p.useState(210),
    [Oe, ue] = p.useState(65),
    [R, $] = p.useState(() => {
      try {
        return JSON.parse(localStorage.getItem("moodtree-picked") || "[]");
      } catch {
        return [];
      }
    }),
    [le, fe] = p.useState("sent"),
    [be, w] = p.useState("ocean"),
    [x, N] = p.useState("❤️"),
    [_, ee] = p.useState(!1),
    [he, je] = p.useState(!1),
    [ze, Ee] = p.useState(null),
    [Pe, Ve] = p.useState(""),
    [pt, ot] = p.useState(!1),
    [gt, yt] = p.useState([]),
    fa = p.useRef(0),
    [we, st] = p.useState(null),
    Mt = (U, xe, ve) => {
      ((xe /= 100), (ve /= 100));
      const Qe = xe * Math.min(ve, 1 - ve),
        Ge = (Ze) => {
          const Fe = (Ze + U / 30) % 12,
            me = ve - Qe * Math.max(Math.min(Fe - 3, 9 - Fe, 1), -1);
          return Math.round(255 * me)
            .toString(16)
            .padStart(2, "0");
        };
      return `#${Ge(0)}${Ge(8)}${Ge(4)}`;
    },
    [zt, $e] = p.useState(!1),
    jt = (U, xe, ve) => {
      const Qe = ++fa.current;
      yt((Ge) => [...Ge, { id: Qe, emoji: U, x: xe, y: ve }]);
    },
    xa = (U) => {
      yt((xe) => xe.filter((ve) => ve.id !== U));
    },
    We = async () => {
      V(!0);
      try {
        const U = await qe(`/api/bottles/random?count=5&userId=${r.id}`);
        S(U.bottles || []);
      } catch {
        o("加载漂流瓶失败");
      }
      V(!1);
    },
    It = async () => {
      try {
        const U = await qe(`/api/bottles/mine?userId=${r.id}`);
        H(U.bottles || []);
      } catch {}
    };
  (p.useEffect(() => {
    We();
  }, []),
    p.useEffect(() => {
      j === "mine" && It();
    }, [j]));
  const Xt = async () => {
      if (!(!k.trim() || J)) {
        D(!0);
        try {
          const U = await pe("/api/bottles/throw", { content: k.trim(), authorId: r.id, color: be, authorEmoji: x });
          if (U.error) {
            (o(U.error), D(!1));
            return;
          }
          (X(""), o("漂流瓶已投入大海 🌊"), We(), j === "mine" && It());
        } catch {
          o("投出失败，请重试");
        }
        D(!1);
      }
    },
    Rt = async (U, xe) => {
      if (de.has(U)) {
        (P((ve) => {
          const Qe = new Set(ve);
          return (Qe.delete(U), Qe);
        }),
          $((ve) => {
            const Qe = ve.filter((Ge) => Ge.id !== U);
            try {
              localStorage.setItem("moodtree-picked", JSON.stringify(Qe));
            } catch {}
            return Qe;
          }),
          o("已取消收藏 💭"));
        return;
      }
      try {
        const ve = await pe(`/api/bottles/${U}/pick`, { userId: r.id });
        if (ve.success) {
          (P((Ge) => new Set([...Ge, U])), S((Ge) => Ge.map((Ze) => (Ze.id === U ? { ...Ze, picks: ve.picks } : Ze))));
          const Qe = { ...xe, pickedAt: new Date().toLocaleString() };
          ($((Ge) => {
            const Ze = [Qe, ...Ge.filter((Fe) => Fe.id !== U)];
            try {
              localStorage.setItem("moodtree-picked", JSON.stringify(Ze));
            } catch {}
            return Ze;
          }),
            o("已收藏到漂流瓶集 💌"));
        }
      } catch {
        o("操作失败");
      }
    },
    Gt = async (U, xe) => {
      U.stopPropagation();
      const ve = U.target.getBoundingClientRect(),
        Qe = ve.left + ve.width / 2,
        Ge = ve.top + ve.height / 2;
      try {
        const Ze = await pe(`/api/bottles/${xe.id}/reaction`, { userId: r.id, emoji: xe.authorEmoji || "❤️" });
        Ze.success &&
          (Ze.toggled
            ? (K((Fe) => {
                const me = new Set(Fe);
                return (me.delete(xe.id), me);
              }),
              S((Fe) => Fe.map((me) => (me.id === xe.id ? { ...me, reactionCount: Ze.count } : me))))
            : (jt(Ze.emoji || xe.authorEmoji || "❤️", Qe, Ge),
              K((Fe) => {
                const me = new Set(Fe);
                return (me.add(xe.id), me);
              }),
              S((Fe) => Fe.map((me) => (me.id === xe.id ? { ...me, reactionCount: Ze.count } : me)))));
      } catch {}
    },
    Zt = async () => {
      if (!(!Pe.trim() || pt || !ze)) {
        ot(!0);
        try {
          const U = await pe(`/api/bottles/${ze.id}/reply`, { userId: r.id, content: Pe.trim() });
          U.success ? (o("回复已发送 ✨"), Ve(""), Ee(null)) : o(U.error || "回复失败");
        } catch {
          o("回复失败，请重试");
        }
        ot(!1);
      }
    },
    Dt = async (U) => {
      try {
        const xe = await qe(`/api/bottles/${U.id}/replies?userId=${r.id}`);
        if (xe.error) {
          o(xe.error);
          return;
        }
        (st({ ...U, ...xe }), $e(!0));
      } catch {
        o("加载失败");
      }
    },
    Ya = async (U) => {
      if (confirm("确定要删除这个漂流瓶吗？"))
        try {
          const xe = await pe(`/api/bottles/${U}/delete`, { userId: r.id });
          if (xe.error) {
            o(xe.error);
            return;
          }
          (H((ve) => ve.filter((Qe) => Qe.id !== U)), o("漂流瓶已删除"));
        } catch {
          o("删除失败");
        }
    },
    Vt = (U) => {
      if (U && U.startsWith("custom_")) {
        const xe = U.replace("custom_", "");
        return { name: "自定义", value: U, color: xe, light: xe + "22" };
      }
      return Qr.find((xe) => xe.value === U) || Qr[0];
    },
    St = (U) => ({ background: "linear-gradient(135deg, #faf3e0, #f5e6c8)", borderLeft: `4px solid ${Vt(U).color}`, boxShadow: "0 2px 8px rgba(180,140,80,0.1), inset 0 0 30px rgba(180,140,80,0.04)" });
  return n.jsxs("div", {
    className: "page-wrap",
    style: { maxWidth: "700px", margin: "0 auto", minHeight: "100vh" },
    children: [
      n.jsx("style", {
        children: `
      .bottle-header{display:flex;align-items:center;gap:12px;margin-bottom:12px}
      .bottle-header h2{font-size:18px;margin:0}
      .bottle-top-back{padding:4px 0 0;margin-bottom:2px}
      .bottle-top-back .back-button{font-size:20px;color:var(--sage-dark,#6f917d);background:none;border:none;cursor:pointer;padding:6px 2px;display:flex;align-items:center}
      .bottle-header-divider{height:1px;background:linear-gradient(90deg,transparent,rgba(180,140,80,0.25),transparent);margin:12px 0 16px}
      .bottle-tabs{display:flex;gap:0;margin-bottom:18px;background:var(--sage-soft,#e8f0ea);border-radius:12px;padding:3px;overflow:hidden}
      .bottle-tab{flex:1;text-align:center;padding:8px 0;border:none;background:none;font-size:13px;color:var(--muted);cursor:pointer;border-radius:10px;transition:all 0.25s}
      .bottle-tab.active{background:#fff;color:var(--sage-dark,#6f917d);font-weight:600;box-shadow:0 1px 4px rgba(0,0,0,0.08)}
      /* Parchment writing area */
      .bottle-parchment{background:linear-gradient(135deg,#faf3e0,#f5e6c8);border-radius:16px;padding:24px;margin-bottom:20px;box-shadow:0 2px 12px rgba(180,140,80,0.12),inset 0 0 40px rgba(180,140,80,0.06);position:relative;border:1px solid #e8d5a8}
      .bottle-parchment:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.22'/%3E%3C/svg%3E");pointer-events:none;border-radius:16px;opacity:1}
      .bottle-parchment-title{font-family:Georgia,serif;font-size:15px;color:#8b7355;margin:0 0 12px;position:relative;z-index:1}
      .bottle-parchment textarea{width:100%;border:none;border-radius:10px;padding:14px;font-size:14px;resize:none;outline:none;background:rgba(255,255,255,0.7);font-family:Georgia,serif;color:#5a4a3a;line-height:1.7;margin-bottom:10px;position:relative;z-index:1;min-height:80px}
      .bottle-parchment textarea:focus{background:rgba(255,255,255,0.85);box-shadow:0 0 0 2px rgba(180,140,80,0.2)}
      .bottle-parchment textarea::placeholder{color:#b8a88a;font-style:italic}
      .bottle-parchment-bar{display:flex;justify-content:space-between;align-items:center;position:relative;z-index:1}
      .bottle-parchment-bar .left{display:flex;align-items:center;gap:8px}
      .bottle-parchment-bar .left span{font-size:11px;color:#b8a88a;font-family:Georgia,serif}
      .bottle-parchment-bar button{background:var(--sage-dark,#6f917d);color:#fff;border:none;border-radius:12px;padding:8px 20px;font-size:14px;cursor:pointer;font-family:inherit}
      .bottle-parchment-bar button:disabled{opacity:0.5;cursor:not-allowed}
      /* Color & Emoji selectors */
      .bottle-style-row{display:flex;gap:8px;align-items:center;margin-bottom:10px;position:relative;z-index:1;flex-wrap:wrap}
      .bottle-style-label{font-size:11px;color:#8b7355;font-family:Georgia,serif;margin-right:4px}
      .bottle-color-swatch{width:24px;height:24px;border-radius:50%;border:2px solid transparent;cursor:pointer;transition:all 0.2s;position:relative}
      .bottle-color-swatch.selected{border-color:var(--sage-dark,#6f917d);transform:scale(1.15);box-shadow:0 0 0 3px rgba(111,145,125,0.2)}
      .bottle-color-swatch:hover{transform:scale(1.1)}
      .bottle-emoji-btn{width:28px;height:28px;border-radius:50%;border:1px solid #ddd;background:rgba(255,255,255,0.7);cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;transition:all 0.2s}
      .bottle-emoji-btn:hover{background:#fff;border-color:var(--sage-dark,#6f917d)}
      .bottle-emoji-picker-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:200;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.3)}
      .bottle-emoji-picker{background:#fff;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,0.2);padding:16px;display:grid;grid-template-columns:repeat(6,1fr);gap:4px;width:260px;max-height:260px;overflow-y:auto;animation:bottleSlideUp 0.25s ease}
      .bottle-emoji-picker button{width:32px;height:32px;border:none;background:none;font-size:18px;cursor:pointer;border-radius:6px;transition:all 0.15s}
      .bottle-emoji-picker button:hover{background:var(--sage-soft,#e8f0ea);transform:scale(1.2)}
      .bottle-color-picker-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:200;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.3)}
      .bottle-color-picker-wheel{background:#fff;border-radius:20px;box-shadow:0 8px 40px rgba(0,0,0,0.2);padding:20px;width:280px;animation:bottleSlideUp 0.25s ease}
      .cpw-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}
      .cpw-title{font-size:14px;font-weight:600;color:#333}
      .cpw-close{background:none;border:none;font-size:16px;color:#999;cursor:pointer;padding:2px 6px;border-radius:6px}
      .cpw-close:hover{background:#f0f0f0}
      .cpw-presets{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:14px}
      .cpw-swatch{width:36px;height:36px;border-radius:50%;border:2px solid transparent;cursor:pointer;transition:all 0.15s;margin:0 auto}
      .cpw-swatch:hover{transform:scale(1.15)}
      .cpw-swatch.active{border-color:#333;transform:scale(1.1);box-shadow:0 0 0 3px rgba(0,0,0,0.1)}
      .cpw-divider{height:1px;background:#f0f0f0;margin-bottom:14px}
      .cpw-label{font-size:12px;color:#888;margin-bottom:10px;text-align:center}
      .cpw-wheel-wrap{display:flex;justify-content:center;margin-bottom:14px}
      .cpw-wheel{width:150px;height:150px;border-radius:50%;background:conic-gradient(from 0deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000);position:relative;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,0.1)}
      .cpw-wheel-thumb{position:absolute;top:50%;left:50%;width:16px;height:16px;border-radius:50%;background:#fff;border:2px solid #333;box-shadow:0 1px 4px rgba(0,0,0,0.3);pointer-events:none;margin-left:-75px;margin-top:-8px}
      .cpw-slider-wrap{margin-bottom:14px}
      .cpw-slider-label{font-size:11px;color:#999;margin-bottom:6px}
      .cpw-slider-track{padding:0 6px;cursor:pointer;height:24px;display:flex;align-items:center}
      .cpw-slider-fill{height:8px;border-radius:4px;width:100%;position:relative;flex-shrink:0}
      .cpw-slider-thumb{position:absolute;top:50%;width:16px;height:16px;border-radius:50%;background:#fff;border:2px solid #333;transform:translate(-50%,-50%);box-shadow:0 1px 4px rgba(0,0,0,0.3);pointer-events:none}
      .cpw-preview{display:flex;align-items:center;gap:10px;margin-top:14px;padding-top:14px;border-top:1px solid #f0f0f0}
      .cpw-preview-swatch{width:32px;height:32px;border-radius:8px;border:1px solid #eee;flex-shrink:0}
      .cpw-preview-hex{font-size:13px;color:#666;font-family:monospace;flex:1}
      .cpw-confirm{background:var(--sage-dark,#6f917d);color:#fff;border:none;border-radius:10px;padding:7px 18px;font-size:13px;cursor:pointer;font-family:inherit}
      .cpw-confirm:hover{opacity:0.9}
      .bottle-palette-btn{background:conic-gradient(#4a90d9,#e8845a,#5a8f6a,#9b7db8,#d9697a,#c9a84c,#4a90d9);display:flex;align-items:center;justify-content:center;color:#fff}
      .bottle-palette-btn:hover{transform:scale(1.1)}
      .bottle-mytabs{display:flex;gap:0;margin-bottom:14px;background:var(--sage-soft,#e8f0ea);border-radius:12px;padding:3px;overflow:hidden}
      .bottle-mytab{flex:1;text-align:center;padding:8px 0;border:none;background:none;font-size:13px;color:var(--muted);cursor:pointer;border-radius:10px;transition:all 0.25s}
      .bottle-mytab.active{background:#fff;color:var(--sage-dark,#6f917d);font-weight:600;box-shadow:0 1px 4px rgba(0,0,0,0.08)}
      /* Bottle list */
      .bottle-list{display:flex;flex-direction:column;gap:12px}
      .bottle-card{border-radius:16px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.06);position:relative;overflow:hidden;cursor:pointer;transition:all 0.2s}
      .bottle-card{background:linear-gradient(135deg,#faf3e0,#f5e6c8);border:1px solid #e8d5a8}
      .bottle-card:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.28'/%3E%3C/svg%3E");pointer-events:none;border-radius:16px;opacity:1}
      .bottle-card:hover{box-shadow:0 4px 16px rgba(180,140,80,0.15);transform:translateY(-1px)}
      .bottle-card-content{font-size:14px;line-height:1.7;color:#5a4a3a;margin-bottom:8px;white-space:pre-wrap;font-family:Georgia,serif}
      .bottle-card-footer{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px}
      .bottle-card-time{font-size:10px;color:var(--muted)}
      .bottle-card-actions{display:flex;gap:6px;align-items:center}
      .bottle-react-btn{background:var(--sage-soft,#e8f0ea);color:var(--sage-dark,#6f917d);border:none;border-radius:16px;padding:4px 12px;font-size:11px;cursor:pointer;transition:all 0.2s;display:flex;align-items:center;gap:3px}
      .bottle-react-btn:hover{background:var(--sage-dark,#6f917d);color:#fff}
      .bottle-pick-btn{background:var(--sage-soft,#e8f0ea);color:var(--sage-dark,#6f917d);border:none;border-radius:16px;padding:5px 14px;font-size:11px;cursor:pointer;transition:all 0.2s}
      .bottle-pick-btn:hover{background:var(--sage-dark,#6f917d);color:#fff}
      .bottle-pick-btn.picked{background:var(--sage-dark,#6f917d);color:#fff}
      .bottle-refresh{text-align:center;margin-top:16px}
      .bottle-refresh button{background:none;border:1px solid var(--sage-soft,#e8f0ea);border-radius:20px;padding:8px 24px;font-size:13px;color:var(--sage-dark,#6f917d);cursor:pointer}
      /* Reply Modal */
      .bottle-reply-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.4);z-index:200;display:flex;align-items:center;justify-content:center;padding:20px}
      .bottle-reply-modal{background:#fff;border-radius:20px;padding:24px;width:100%;max-width:400px;max-height:70vh;overflow-y:auto;animation:bottleSlideUp 0.3s ease}
      @keyframes bottleSlideUp{from{transform:translateY(30px);opacity:0}to{transform:translateY(0);opacity:1}}
      .bottle-reply-modal h3{margin:0 0 6px;font-size:16px;color:var(--sage-dark,#6f917d)}
      .bottle-reply-modal .original{font-size:13px;color:#666;line-height:1.6;padding:12px;background:#f9f6f0;border-radius:10px;margin-bottom:12px;font-family:Georgia,serif}
      .bottle-reply-modal textarea{width:100%;border:1px solid #e0e0e0;border-radius:10px;padding:10px;font-size:13px;resize:none;outline:none;font-family:inherit;min-height:60px;margin-bottom:10px}
      .bottle-reply-modal textarea:focus{border-color:var(--sage,#6f917d)}
      .bottle-reply-bar{display:flex;justify-content:flex-end;gap:8px}
      .bottle-reply-bar button{padding:7px 18px;border-radius:10px;font-size:13px;border:none;cursor:pointer}
      .bottle-reply-cancel{background:#f0f0f0;color:#666}
      .bottle-reply-send{background:var(--sage-dark,#6f917d);color:#fff}
      .bottle-reply-send:disabled{opacity:0.5}
      /* My bottles replies list */
      .bottle-replies-view{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.4);z-index:200;display:flex;align-items:center;justify-content:center;padding:20px}
      .bottle-replies-panel{background:#fff;border-radius:20px;padding:24px;width:100%;max-width:400px;max-height:75vh;overflow-y:auto}
      .bottle-replies-panel h3{margin:0 0 4px;font-size:16px;color:var(--sage-dark,#6f917d)}
      .bottle-replies-panel .bottle-original{font-size:13px;color:#666;padding:12px;background:#f9f6f0;border-radius:10px;margin-bottom:14px;font-family:Georgia,serif}
      .bottle-reply-item{padding:10px 0;border-bottom:1px solid #f0f0f0}
      .bottle-reply-item:last-child{border:none}
      .bottle-reply-item p{font-size:13px;color:#333;margin:0 0 4px;line-height:1.5}
      .bottle-reply-item small{font-size:10px;color:var(--muted)}
      .bottle-replies-empty{text-align:center;padding:20px 0;color:var(--muted);font-size:13px}
      /* My bottles list */
      .bottle-mine-card{background:#fff;border-radius:14px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.05);margin-bottom:10px;cursor:pointer;transition:all 0.2s;position:relative;overflow:hidden}
      .bottle-mine-card:hover{box-shadow:0 3px 12px rgba(0,0,0,0.08)}
      .bottle-mine-card .top-bar{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px}
      .bottle-mine-card .bottle-tag{font-size:10px;padding:2px 8px;border-radius:8px;color:#fff}
      .bottle-mine-card .bottle-mine-content{font-size:13px;color:#333;line-height:1.6;font-family:Georgia,serif;white-space:pre-wrap}
      .bottle-mine-card .bottle-mine-footer{display:flex;gap:12px;margin-top:8px;font-size:10px;color:var(--muted)}
      /* Mobile responsive */
      @media (max-width: 480px) {
        .bottle-parchment{padding:16px;border-radius:12px}
        .bottle-parchment textarea{font-size:14px;padding:10px;min-height:60px}
        .bottle-card{padding:12px 14px;border-radius:12px}
        .bottle-card:before{border-radius:12px}
        .bottle-card-content{font-size:13px;line-height:1.6}
        .bottle-style-row{gap:5px;flex-wrap:wrap}
        .bottle-color-swatch{width:22px;height:22px}
        .bottle-react-btn{font-size:11px;padding:4px 10px}
        .bottle-pick-btn{font-size:11px;padding:4px 11px}
        .bottle-mine-card{padding:12px 14px;border-radius:12px}
        .bottle-reply-modal{padding:18px;max-width:95%}
        .bottle-replies-panel{padding:18px;max-width:95%}
        .bottle-header h2{font-size:16px}
        .bottle-top-back{padding:2px 0 0}
        .bottle-header-divider{margin:8px 0 12px}
        .bottle-parchment-title{font-size:14px}
        .bottle-tabs{margin-bottom:12px}
        .bottle-tab{font-size:12px;padding:7px 0}
      }
      .bottle-react-btn.active{background:var(--sage-dark,#6f917d);color:#fff;box-shadow:0 0 0 2px rgba(111,145,125,0.3)}
    `,
      }),
      gt.map((U) => n.jsx(Kv, { emoji: U.emoji, x: U.x, y: U.y, onDone: () => xa(U.id) }, U.id)),
      n.jsx("div", { className: "bottle-top-back", children: n.jsx("button", { className: "back-button", onClick: u, children: "←" }) }),
      n.jsxs("div", {
        className: "bottle-header",
        children: [n.jsx("div", { style: { fontSize: "28px" }, children: "🍾" }), n.jsxs("div", { children: [n.jsx("h2", { children: "漂流瓶" }), n.jsx("small", { children: "匿名投出心事 · 随机捡起温暖" })] })],
      }),
      n.jsx("div", { className: "bottle-header-divider" }),
      n.jsxs("div", {
        className: "bottle-tabs",
        children: [
          n.jsx("button", { className: `bottle-tab ${j === "bottle" ? "active" : ""}`, onClick: () => y("bottle"), children: "🍾 漂流瓶" }),
          n.jsx("button", { className: `bottle-tab ${j === "mine" ? "active" : ""}`, onClick: () => y("mine"), children: "📋 我的记录" }),
        ],
      }),
      j === "bottle"
        ? n.jsxs(n.Fragment, {
            children: [
              n.jsxs("div", {
                className: "bottle-parchment",
                children: [
                  n.jsx("div", { className: "bottle-parchment-title", children: "✍️ 写一封瓶中信" }),
                  n.jsx("textarea", { value: k, onChange: (U) => X(U.target.value.slice(0, 200)), placeholder: "写一句悄悄话，装进瓶子里，让海浪带走…", rows: 3, maxLength: 200 }),
                  n.jsxs("div", {
                    className: "bottle-style-row",
                    children: [
                      n.jsx("span", { className: "bottle-style-label", children: "瓶子颜色" }),
                      Qr.slice(0, 5).map((U) =>
                        n.jsx(
                          "div",
                          {
                            className: `bottle-color-swatch ${be === U.value ? "selected" : ""}`,
                            style: { background: U.color },
                            onClick: () => {
                              (w(U.value), je(!1));
                            },
                            title: U.name,
                          },
                          U.value,
                        ),
                      ),
                      n.jsx("div", {
                        className: "bottle-color-swatch bottle-palette-btn",
                        onClick: () => je(!he),
                        children: n.jsxs("svg", {
                          viewBox: "0 0 24 24",
                          width: "14",
                          height: "14",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.5",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          children: [
                            n.jsx("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", opacity: "0.35" }),
                            n.jsx("circle", { cx: "12", cy: "12", r: "5", fill: "currentColor", opacity: "0.2", stroke: "none" }),
                            n.jsx("circle", { cx: "12", cy: "12", r: "2.5", fill: "currentColor", stroke: "none" }),
                          ],
                        }),
                      }),
                      he &&
                        n.jsx("div", {
                          className: "bottle-color-picker-overlay",
                          onClick: (U) => {
                            U.target === U.currentTarget && je(!1);
                          },
                          children: n.jsxs("div", {
                            className: "bottle-color-picker-wheel",
                            onClick: (U) => U.stopPropagation(),
                            children: [
                              n.jsxs("div", { className: "cpw-head", children: [n.jsx("span", { className: "cpw-title", children: "🎨 选择瓶子颜色" }), n.jsx("button", { className: "cpw-close", onClick: () => je(!1), children: "✕" })] }),
                              n.jsx("div", {
                                className: "cpw-presets",
                                children: Qr.map((U) =>
                                  n.jsx(
                                    "div",
                                    {
                                      className: `cpw-swatch ${be === U.value ? "active" : ""}`,
                                      style: { background: U.color },
                                      onClick: () => {
                                        (w(U.value), je(!1));
                                      },
                                      title: U.name,
                                    },
                                    U.value,
                                  ),
                                ),
                              }),
                              n.jsx("div", { className: "cpw-divider" }),
                              n.jsx("div", { className: "cpw-label", children: "自定义颜色" }),
                              n.jsx("div", {
                                className: "cpw-wheel-wrap",
                                children: n.jsx("div", {
                                  className: "cpw-wheel",
                                  onMouseDown: (U) => {
                                    const xe = U.currentTarget.getBoundingClientRect(),
                                      ve = xe.left + xe.width / 2,
                                      Qe = xe.top + xe.height / 2,
                                      Ge = (me) => {
                                        var Jt, ca, ha, va;
                                        const $t = (me.clientX || ((ca = (Jt = me.touches) == null ? void 0 : Jt[0]) == null ? void 0 : ca.clientX) || 0) - ve,
                                          xt = (me.clientY || ((va = (ha = me.touches) == null ? void 0 : ha[0]) == null ? void 0 : va.clientY) || 0) - Qe;
                                        let Kt = (Math.atan2(xt, $t) * 180) / Math.PI + 90;
                                        (Kt < 0 && (Kt += 360), ke(Math.round(Kt)));
                                      };
                                    Ge(U);
                                    const Ze = (me) => {
                                        (me.preventDefault(), Ge(me));
                                      },
                                      Fe = () => {
                                        (document.removeEventListener("mousemove", Ze), document.removeEventListener("mouseup", Fe), document.removeEventListener("touchmove", Ze), document.removeEventListener("touchend", Fe));
                                      };
                                    (document.addEventListener("mousemove", Ze), document.addEventListener("mouseup", Fe), document.addEventListener("touchmove", Ze, { passive: !1 }), document.addEventListener("touchend", Fe));
                                  },
                                  onTouchStart: (U) => {
                                    const xe = U.currentTarget.getBoundingClientRect(),
                                      ve = xe.left + xe.width / 2,
                                      Qe = xe.top + xe.height / 2,
                                      Ge = U.touches[0],
                                      Ze = Ge.clientX - ve,
                                      Fe = Ge.clientY - Qe;
                                    let me = (Math.atan2(Fe, Ze) * 180) / Math.PI + 90;
                                    (me < 0 && (me += 360), ke(Math.round(me)));
                                  },
                                  children: n.jsx("div", { className: "cpw-wheel-thumb", style: { transform: `rotate(${Se}deg) translateX(-50%)`, transformOrigin: "50% 50%" } }),
                                }),
                              }),
                              n.jsxs("div", {
                                className: "cpw-slider-wrap",
                                children: [
                                  n.jsx("div", { className: "cpw-slider-label", children: "亮度" }),
                                  n.jsx("div", {
                                    className: "cpw-slider-track",
                                    onMouseDown: (U) => {
                                      const xe = U.currentTarget.getBoundingClientRect(),
                                        ve = (Ze) => {
                                          var $t, xt;
                                          const Fe = (Ze.clientX || ((xt = ($t = Ze.touches) == null ? void 0 : $t[0]) == null ? void 0 : xt.clientX) || 0) - xe.left,
                                            me = Math.max(20, Math.min(90, Math.round((Fe / xe.width) * 100)));
                                          ue(me);
                                        };
                                      ve(U);
                                      const Qe = (Ze) => {
                                          (Ze.preventDefault(), ve(Ze));
                                        },
                                        Ge = () => {
                                          (document.removeEventListener("mousemove", Qe), document.removeEventListener("mouseup", Ge), document.removeEventListener("touchmove", Qe), document.removeEventListener("touchend", Ge));
                                        };
                                      (document.addEventListener("mousemove", Qe), document.addEventListener("mouseup", Ge), document.addEventListener("touchmove", Qe, { passive: !1 }), document.addEventListener("touchend", Ge));
                                    },
                                    children: n.jsx("div", {
                                      className: "cpw-slider-fill",
                                      style: { background: `linear-gradient(to right, #000, hsl(${Se}, 70%, 50%))` },
                                      children: n.jsx("div", { className: "cpw-slider-thumb", style: { left: `${Oe}%` } }),
                                    }),
                                  }),
                                ],
                              }),
                              n.jsxs("div", {
                                className: "cpw-preview",
                                children: [
                                  n.jsx("div", { className: "cpw-preview-swatch", style: { background: `hsl(${Se}, 70%, ${Oe}%)` } }),
                                  n.jsx("div", { className: "cpw-preview-hex", children: Mt(Se, 70, Oe) }),
                                  n.jsx("button", {
                                    className: "cpw-confirm",
                                    onClick: () => {
                                      const U = Mt(Se, 70, Oe);
                                      (w("custom_" + U), je(!1));
                                    },
                                    children: "✓ 应用",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      n.jsx("span", { className: "bottle-style-label", style: { marginLeft: "8px" }, children: "互动表情" }),
                      n.jsx("div", { className: "bottle-emoji-btn", onClick: () => ee(!_), children: x }),
                      _ &&
                        n.jsx("div", {
                          className: "bottle-emoji-picker-overlay",
                          onClick: (U) => {
                            U.target === U.currentTarget && ee(!1);
                          },
                          children: n.jsx("div", {
                            className: "bottle-emoji-picker",
                            children: Zv.map((U) =>
                              n.jsx(
                                "button",
                                {
                                  onClick: () => {
                                    (N(U), ee(!1));
                                  },
                                  style: { background: x === U ? "var(--sage-soft,#e8f0ea)" : "none" },
                                  children: U,
                                },
                                U,
                              ),
                            ),
                          }),
                        }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "bottle-parchment-bar",
                    style: { display: he || _ ? "none" : "flex" },
                    children: [n.jsx("div", { className: "left", children: n.jsxs("span", { children: ["📜 ", k.length, "/200 · 匿名投出"] }) }), n.jsx("button", { onClick: Xt, disabled: !k.trim() || J, children: J ? "投出中…" : "🌊 投入大海" })],
                  }),
                ],
              }),
              n.jsxs("div", {
                style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" },
                children: [
                  n.jsx("h3", { style: { fontSize: "15px", margin: 0 }, children: "海边的漂流瓶" }),
                  n.jsx("button", {
                    className: "bottle-refresh",
                    style: { border: "1px solid var(--sage-soft,#e8f0ea)", borderRadius: "20px", padding: "6px 16px", background: "none", fontSize: "12px", color: "var(--sage-dark,#6f917d)", cursor: "pointer" },
                    onClick: We,
                    children: "🔄 换一批",
                  }),
                ],
              }),
              I
                ? n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "🌊" }), n.jsx("h3", { children: "正在捞瓶子…" })] })
                : n.jsxs(n.Fragment, {
                    children: [
                      n.jsx("div", {
                        className: "bottle-list",
                        children: C.map((U) => {
                          const xe = Vt(U.color);
                          return n.jsxs(
                            "div",
                            {
                              className: "bottle-card",
                              style: St(U.color),
                              ...v(U.content),
                              onClick: () => {
                                if (d.current) {
                                  d.current = !1;
                                  return;
                                }
                                const ve = window.getSelection();
                                (ve && ve.toString().trim().length > 0) || Ee(U);
                              },
                              children: [
                                n.jsxs("div", {
                                  style: { display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" },
                                  children: [
                                    n.jsx("span", { style: { fontSize: "16px" }, children: "🍾" }),
                                    n.jsx("span", { style: { width: "8px", height: "8px", borderRadius: "50%", background: xe.color, display: "inline-block" } }),
                                    n.jsx("span", { style: { fontSize: "10px", color: xe.color }, children: xe.name }),
                                  ],
                                }),
                                n.jsx("div", { className: "bottle-card-content", children: U.content }),
                                n.jsxs("div", {
                                  className: "bottle-card-footer",
                                  children: [
                                    n.jsx("span", { className: "bottle-card-time", children: U.createdAt || "未知时间" }),
                                    n.jsxs("div", {
                                      className: "bottle-card-actions",
                                      children: [
                                        n.jsxs("button", { className: `bottle-react-btn${Y.has(U.id) ? " active" : ""}`, onClick: (ve) => Gt(ve, U), children: ["❤️", " ", U.reactionCount || 0] }),
                                        n.jsx("button", {
                                          className: `bottle-pick-btn ${de.has(U.id) ? "picked" : ""}`,
                                          onClick: (ve) => {
                                            (ve.stopPropagation(), Rt(U.id, U));
                                          },
                                          children: de.has(U.id) ? `💌 已收藏 ${U.picks}` : `🤍 捡起 ${U.picks || 0}`,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            U.id,
                          );
                        }),
                      }),
                      C.length === 0 && n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "🌊" }), n.jsx("h3", { children: "海面上还没有漂流瓶" }), n.jsx("p", { children: "投入第一个漂流瓶吧" })] }),
                    ],
                  }),
            ],
          })
        : n.jsxs(n.Fragment, {
            children: [
              n.jsxs("div", {
                className: "bottle-mytabs",
                children: [
                  n.jsx("button", { className: `bottle-mytab ${le === "sent" ? "active" : ""}`, onClick: () => fe("sent"), children: "📤 已投出" }),
                  n.jsx("button", { className: `bottle-mytab ${le === "saved" ? "active" : ""}`, onClick: () => fe("saved"), children: "💌 已收藏" }),
                ],
              }),
              le === "sent"
                ? n.jsxs(n.Fragment, {
                    children: [
                      n.jsxs("div", {
                        style: { marginBottom: "12px" },
                        children: [n.jsx("h3", { style: { fontSize: "15px", margin: 0 }, children: "📋 我的漂流瓶记录" }), n.jsx("small", { style: { color: "var(--muted)", fontSize: "11px" }, children: "查看你投出的所有瓶子和收到的回应" })],
                      }),
                      T.length === 0
                        ? n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "📭" }), n.jsx("h3", { children: "还没有投出过瓶子" }), n.jsx("p", { children: "去写一封瓶中信吧" })] })
                        : n.jsx("div", {
                            children: T.map((U) => {
                              const xe = Vt(U.color);
                              return n.jsxs(
                                "div",
                                {
                                  className: "bottle-mine-card",
                                  style: { borderLeft: `3px solid ${xe.color}` },
                                  ...v(U.content),
                                  onClick: () => {
                                    if (d.current) {
                                      d.current = !1;
                                      return;
                                    }
                                    Dt(U);
                                  },
                                  children: [
                                    n.jsxs("div", {
                                      className: "top-bar",
                                      children: [
                                        n.jsxs("span", {
                                          style: { display: "flex", alignItems: "center", gap: "4px" },
                                          children: [
                                            n.jsx("span", { style: { width: "10px", height: "10px", borderRadius: "50%", background: xe.color, display: "inline-block" } }),
                                            n.jsx("span", { style: { fontSize: "11px", color: xe.color }, children: xe.name }),
                                            n.jsxs("span", { className: "bottle-tag", style: { background: xe.color }, children: [U.authorEmoji || "❤️", " ", U.reactionCount || 0] }),
                                          ],
                                        }),
                                        n.jsxs("span", {
                                          style: { display: "flex", alignItems: "center", gap: "8px" },
                                          children: [
                                            n.jsx("span", { style: { fontSize: "10px", color: "var(--muted)" }, children: U.createdAt }),
                                            n.jsx("button", {
                                              onClick: (ve) => {
                                                (ve.stopPropagation(), Ya(U.id));
                                              },
                                              style: { background: "none", border: "none", cursor: "pointer", fontSize: "14px", color: "#c0392b", padding: "2px", lineHeight: 1 },
                                              title: "删除此漂流瓶",
                                              children: "🗑️",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    n.jsxs("div", { className: "bottle-mine-content", children: ['"', U.content, '"'] }),
                                    n.jsxs("div", {
                                      className: "bottle-mine-footer",
                                      children: [
                                        n.jsxs("span", { children: ["🤍 被捡起 ", U.picks, " 次"] }),
                                        n.jsxs("span", { children: ["💬 ", U.replyCount || 0, " 条回复"] }),
                                        n.jsx("span", { style: { color: "var(--sage-dark)", marginLeft: "auto" }, children: "点击查看回复 →" }),
                                      ],
                                    }),
                                  ],
                                },
                                U.id,
                              );
                            }),
                          }),
                    ],
                  })
                : n.jsxs(n.Fragment, {
                    children: [
                      n.jsxs("div", {
                        style: { marginBottom: "12px" },
                        children: [n.jsx("h3", { style: { fontSize: "15px", margin: 0 }, children: "💌 收藏的漂流瓶" }), n.jsx("small", { style: { color: "var(--muted)", fontSize: "11px" }, children: "你捡起并收藏的瓶子，随时可以回复" })],
                      }),
                      R.length === 0
                        ? n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "🏖️" }), n.jsx("h3", { children: "还没有收藏的瓶子" }), n.jsx("p", { children: "去海边捡起你喜欢的瓶子吧" })] })
                        : n.jsx("div", {
                            children: R.map((U) => {
                              const xe = Vt(U.color);
                              return n.jsxs(
                                "div",
                                {
                                  className: "bottle-mine-card",
                                  style: { borderLeft: `3px solid ${xe.color}` },
                                  ...v(U.content),
                                  onClick: () => {
                                    if (d.current) {
                                      d.current = !1;
                                      return;
                                    }
                                    const ve = window.getSelection();
                                    (ve && ve.toString().trim().length > 0) || Ee(U);
                                  },
                                  children: [
                                    n.jsxs("div", {
                                      className: "top-bar",
                                      children: [
                                        n.jsxs("span", {
                                          style: { display: "flex", alignItems: "center", gap: "4px" },
                                          children: [
                                            n.jsx("span", { style: { width: "10px", height: "10px", borderRadius: "50%", background: xe.color, display: "inline-block" } }),
                                            n.jsx("span", { style: { fontSize: "11px", color: xe.color }, children: xe.name }),
                                          ],
                                        }),
                                        n.jsx("span", { style: { fontSize: "10px", color: "var(--muted)" }, children: U.pickedAt || U.createdAt }),
                                      ],
                                    }),
                                    n.jsxs("div", { className: "bottle-mine-content", children: ['"', U.content, '"'] }),
                                    n.jsxs("div", {
                                      className: "bottle-mine-footer",
                                      children: [n.jsxs("span", { children: ["❤️ ", U.reactionCount || 0] }), n.jsx("span", { style: { color: "var(--sage-dark)", marginLeft: "auto" }, children: "✉️ 回复这个瓶子" })],
                                    }),
                                  ],
                                },
                                U.id,
                              );
                            }),
                          }),
                    ],
                  }),
            ],
          }),
      ze &&
        n.jsx("div", {
          className: "bottle-reply-overlay",
          onClick: (U) => {
            U.target === U.currentTarget && Ee(null);
          },
          children: n.jsxs("div", {
            className: "bottle-reply-modal",
            children: [
              n.jsx("h3", { children: "💬 回复这个瓶子" }),
              n.jsx("div", { className: "original", children: ze.content }),
              n.jsx("textarea", { value: Pe, onChange: (U) => Ve(U.target.value.slice(0, 200)), placeholder: "写一段温柔的话回应TA…", maxLength: 200 }),
              n.jsxs("div", {
                className: "bottle-reply-bar",
                children: [
                  n.jsx("button", { className: "bottle-reply-cancel", onClick: () => Ee(null), children: "取消" }),
                  n.jsx("button", { className: "bottle-reply-send", onClick: Zt, disabled: !Pe.trim() || pt, children: pt ? "发送中…" : "✉️ 发送回复" }),
                ],
              }),
            ],
          }),
        }),
      zt &&
        we &&
        n.jsx("div", {
          className: "bottle-replies-view",
          onClick: (U) => {
            U.target === U.currentTarget && $e(!1);
          },
          children: n.jsxs("div", {
            className: "bottle-replies-panel",
            children: [
              n.jsxs("div", {
                style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" },
                children: [n.jsx("h3", { children: "💬 收到的回应" }), n.jsx("button", { onClick: () => $e(!1), style: { background: "none", border: "none", fontSize: "18px", cursor: "pointer", color: "#999" }, children: "×" })],
              }),
              n.jsxs("div", { className: "bottle-original", children: ['"', we.content, '"'] }),
              we.totalReactions > 0 && n.jsxs("div", { style: { fontSize: "12px", color: "var(--muted)", marginBottom: "10px" }, children: ["收到 ", we.totalReactions, " 个 ", we.authorEmoji || "❤️"] }),
              !we.replies || we.replies.length === 0
                ? n.jsx("div", { className: "bottle-replies-empty", children: "🌊 还没有人回复这个瓶子" })
                : we.replies.map((U) => n.jsxs("div", { className: "bottle-reply-item", children: [n.jsx("p", { children: U.content }), n.jsx("small", { children: U.createdAt })] }, U.id)),
            ],
          }),
        }),
    ],
  });
}
const yp = ["", "INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "ENFJ", "ENFP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "ISTP", "ISFP", "ESTP", "ESFP"],
  jp = ["", "学生", "互联网/IT", "金融", "教育", "医疗", "设计/艺术", "运营/市场", "工程/制造", "公务员", "自由职业", "其他"],
  Sp = ["", "18岁以下", "18-25", "26-30", "31-35", "36-40", "40以上"],
  Wv = [
    "😀",
    "😂",
    "🤣",
    "😊",
    "🥰",
    "😍",
    "🤩",
    "😎",
    "🥳",
    "😏",
    "😌",
    "😅",
    "🙃",
    "😜",
    "🤪",
    "😝",
    "🫠",
    "🥺",
    "😢",
    "😭",
    "😤",
    "😡",
    "🤬",
    "😈",
    "💀",
    "☺️",
    "😇",
    "🤗",
    "🤭",
    "🫢",
    "🫣",
    "🤫",
    "🫡",
    "🤔",
    "🫤",
    "😐",
    "😑",
    "😶",
    "🫥",
    "😶‍🌫️",
    "😏",
    "😒",
    "🙄",
    "😬",
    "😮‍💨",
    "🤥",
    "😌",
    "😔",
    "😪",
    "🤤",
    "😴",
    "😵",
    "😵‍💫",
    "🤐",
    "🥴",
    "🤢",
    "🤮",
    "🤧",
    "😷",
    "🤒",
    "🤕",
    "🤑",
    "🤠",
    "😈",
    "👿",
    "👹",
    "👺",
    "🤡",
    "💩",
    "👻",
    "💀",
    "☠️",
    "👽",
    "👾",
    "🤖",
    "👍",
    "👎",
    "👊",
    "✊",
    "🤛",
    "🤜",
    "👏",
    "🙌",
    "👐",
    "🤲",
    "🤝",
    "🙏",
    "✌️",
    "🤞",
    "🫰",
    "🫵",
    "🫶",
    "🤟",
    "🤘",
    "🤙",
    "👋",
    "🤚",
    "🖐️",
    "✋",
    "🖖",
    "💪",
    "🦵",
    "🦶",
    "👂",
    "🦻",
    "👃",
    "🧠",
    "🫀",
    "🫁",
    "👀",
    "👁️",
    "👅",
    "👄",
    "❤️",
    "🧡",
    "💛",
    "💚",
    "💙",
    "💜",
    "🩷",
    "🤎",
    "🖤",
    "🩶",
    "🤍",
    "🩵",
    "💔",
    "❤️‍🔥",
    "❤️‍🩹",
    "💕",
    "💗",
    "💖",
    "💘",
    "💝",
    "💟",
    "❣️",
    "💞",
    "💓",
    "🫶",
    "✨",
    "🌟",
    "⭐",
    "🔥",
    "💫",
    "🌈",
    "🌊",
    "🌸",
    "🌻",
    "🌺",
    "🍀",
    "🎉",
    "🎊",
    "🎈",
    "🎀",
    "🎁",
    "💝",
    "🦋",
    "🐚",
    "🌙",
    "☀️",
    "🍃",
    "💐",
    "🌹",
    "🌼",
    "🍭",
    "🍬",
    "🧸",
    "🎵",
    "🎶",
    "💡",
    "🔮",
    "🗝️",
    "🎯",
    "🧩",
    "🪄",
    "💌",
    "🕊️",
    "🐶",
    "🐱",
    "🐭",
    "🐹",
    "🐰",
    "🦊",
    "🐻",
    "🐼",
    "🐨",
    "🐸",
    "🦁",
    "🐯",
    "🐮",
    "🐷",
    "🐵",
    "🐔",
    "🐧",
    "🐦",
    "🐤",
    "🦆",
    "🦅",
    "🦉",
    "🦇",
    "🐺",
    "🐗",
    "🐴",
    "🦄",
    "🐝",
    "🐛",
    "🦋",
    "🐌",
    "🐞",
    "🐜",
    "🪰",
    "🪲",
    "🪳",
    "🦟",
    "🦗",
    "🕷️",
    "🦂",
    "🐢",
    "🐍",
    "🦎",
    "🦖",
    "🦕",
    "🐙",
    "🦑",
    "🦐",
    "🦞",
    "🦀",
    "🐡",
    "🐠",
    "🐟",
    "🐬",
    "🐳",
    "🐋",
    "🦈",
    "🌱",
    "🌿",
    "☘️",
    "🍀",
    "🍃",
    "🍂",
    "🍁",
    "🪴",
    "🌵",
    "🌲",
    "🌳",
    "🌴",
    "🌾",
    "🌸",
    "🌹",
    "🌺",
    "🌻",
    "🌼",
    "🌷",
    "🪻",
    "🌻",
    "🌞",
    "🌝",
    "🌛",
    "🌜",
    "🌚",
    "🌕",
    "🌖",
    "🌗",
    "🌘",
    "🌑",
    "🌒",
    "🌓",
    "🌔",
    "🌙",
    "🌎",
    "🌍",
    "🌏",
    "🪐",
    "💫",
    "⭐",
    "🌟",
    "✨",
    "⚡",
    "☄️",
    "💥",
    "🔥",
    "🌪️",
    "🌈",
    "☀️",
    "🌤️",
    "⛅",
    "🌥️",
    "☁️",
    "🌦️",
    "🌧️",
    "⛈️",
    "🌩️",
    "🌨️",
    "❄️",
    "☃️",
    "⛄",
    "🌬️",
    "💨",
    "💧",
    "💦",
    "🫧",
    "☔",
    "🌊",
    "🍎",
    "🍐",
    "🍊",
    "🍋",
    "🍌",
    "🍉",
    "🍇",
    "🍓",
    "🫐",
    "🍈",
    "🍒",
    "🍑",
    "🥭",
    "🍍",
    "🥝",
    "🍅",
    "🥑",
    "🥦",
    "🥬",
    "🥒",
    "🌽",
    "🥕",
    "🧄",
    "🧅",
    "🥔",
    "🍠",
    "🥐",
    "🍞",
    "🥖",
    "🥨",
    "🧀",
    "🥚",
    "🍳",
    "🧈",
    "🥞",
    "🧇",
    "🥓",
    "🥩",
    "🍗",
    "🍖",
    "🌭",
    "🍔",
    "🍟",
    "🍕",
    "🫓",
    "🥪",
    "🥙",
    "🧆",
    "🌮",
    "🌯",
    "🥗",
    "🥘",
    "🫕",
    "🥫",
    "🍝",
    "🍜",
    "🍲",
    "🍛",
    "🍣",
    "🍱",
    "🥟",
    "🦪",
    "🍤",
    "🍙",
    "🍚",
    "🍘",
    "🍥",
    "🥠",
    "🥮",
    "🍢",
    "🍡",
    "🍧",
    "🍨",
    "🍦",
    "🥧",
    "🧁",
    "🍰",
    "🎂",
    "🍮",
    "🍭",
    "🍬",
    "🍫",
    "🍿",
    "🍩",
    "🍪",
    "🌰",
    "🥜",
    "🍯",
    "🥛",
    "🍼",
    "🫖",
    "☕",
    "🍵",
    "🧃",
    "🥤",
    "🧋",
    "🍶",
    "🍺",
    "🍻",
    "🥂",
    "🍷",
    "🫗",
    "🥃",
    "🍸",
    "🍹",
    "🧉",
    "🍾",
    "🧊",
    "🥄",
    "🍴",
    "🥄",
    "🔪",
    "🏺",
    "🎉",
    "🎊",
    "🎈",
    "🎀",
    "🎁",
    "🎗️",
    "🎞️",
    "🎟️",
    "🎫",
    "🎪",
    "🎭",
    "🎨",
    "🎬",
    "🎤",
    "🎧",
    "🎼",
    "🎹",
    "🥁",
    "🎷",
    "🎺",
    "🎸",
    "🪕",
    "🎻",
    "🎲",
    "♟️",
    "🎯",
    "🎳",
    "🎮",
    "🕹️",
    "⚽",
    "🏀",
    "🏈",
    "⚾",
    "🥎",
    "🎾",
    "🏐",
    "🏉",
    "🥏",
    "🎱",
    "🪀",
    "🏓",
    "🏸",
    "🏒",
    "🏑",
    "🥍",
    "🏏",
    "🪃",
    "🥅",
    "⛳",
    "🪁",
    "🏹",
    "🎣",
    "🤿",
    "🥊",
    "🥋",
    "🎽",
    "🛹",
    "🛼",
    "🛷",
    "⛸️",
    "🥌",
    "🚗",
    "🚕",
    "🚙",
    "🚌",
    "🚎",
    "🏎️",
    "🚓",
    "🚑",
    "🚒",
    "🚐",
    "🛻",
    "🚚",
    "🚛",
    "🚜",
    "🏍️",
    "🛵",
    "🛺",
    "🚲",
    "🛴",
    "🛹",
    "🚏",
    "🛣️",
    "🛤️",
    "⛽",
    "🚨",
    "🚥",
    "🚦",
    "🛑",
    "🚧",
    "⚓",
    "🛟",
    "⛵",
    "🛶",
    "🚤",
    "🛳️",
    "⛴️",
    "🛥️",
    "🚢",
    "✈️",
    "🛩️",
    "🛫",
    "🛬",
    "🪂",
    "💺",
    "🚁",
    "🚟",
    "🚠",
    "🚡",
    "🛰️",
    "🚀",
    "🛸",
    "💎",
    "🔮",
    "🪄",
    "🧿",
    "🪬",
    "🗿",
    "🎠",
    "🎡",
    "🎢",
    "💈",
    "🎪",
    "🎭",
    "🖼️",
    "🎨",
    "🧵",
    "🧶",
    "🪡",
    "🪢",
    "🪣",
    "🪤",
    "🪚",
    "🪛",
    "🔧",
    "🔨",
    "⚒️",
    "🛠️",
    "⛏️",
    "🪓",
    "🔫",
    "💣",
    "🧨",
    "🪜",
    "🧰",
    "🗂️",
    "📁",
    "📂",
    "📚",
    "📖",
    "📕",
    "📗",
    "📘",
    "📙",
    "📔",
    "📓",
    "📒",
    "📃",
    "📜",
    "📄",
    "📰",
    "🗞️",
    "📑",
    "🔖",
    "🏷️",
    "💰",
    "💴",
    "💵",
    "💶",
    "💷",
    "💸",
    "💳",
    "🧾",
    "✉️",
    "📧",
    "📨",
    "📩",
    "📤",
    "📥",
    "📦",
    "📪",
    "📫",
    "📬",
    "📭",
    "📮",
    "🗳️",
    "✏️",
    "✒️",
    "🖊️",
    "🖋️",
    "🖌️",
    "🖍️",
    "📝",
    "📌",
    "📍",
    "📎",
    "🖇️",
    "📏",
    "📐",
    "🧮",
    "🔬",
    "🔭",
    "📡",
    "🕯️",
    "💡",
    "🔦",
    "🏮",
    "🪔",
    "💻",
    "🖥️",
    "🖨️",
    "⌨️",
    "🖱️",
    "🖲️",
    "💽",
    "💾",
    "💿",
    "📀",
    "🧭",
    "⏱️",
    "⏲️",
    "🕰️",
    "⌚",
    "📱",
    "📲",
    "📞",
    "☎️",
    "📟",
    "📠",
    "🔋",
    "🪫",
    "🔌",
  ];
function Fv({ uid: r, viewerId: u, onClose: o }) {
  const [c, m] = p.useState(null),
    [d, h] = p.useState("");
  return (
    p.useEffect(() => {
      qe(`/api/user/posts?userid=${r}&viewer=${u}`)
        .then((v) => {
          v.error ? h("主页不可见") : m(v);
        })
        .catch(() => h("加载失败"));
    }, [r, u]),
    n.jsx("div", {
      className: "chat-info-overlay",
      style: { zIndex: 120 },
      onMouseDown: (v) => {
        v.target === v.currentTarget && o();
      },
      children: n.jsxs("div", {
        className: "chat-info-panel",
        children: [
          n.jsxs("div", { className: "chat-info-header", children: [n.jsx("button", { className: "back-button", onClick: o, children: "←" }), n.jsx("h2", { children: "TA 的主页" })] }),
          n.jsxs("div", {
            className: "chat-info-body",
            children: [
              !c && n.jsx("div", { className: "chat-loading", children: d || "加载中…" }),
              c &&
                n.jsxs(n.Fragment, {
                  children: [
                    n.jsxs("div", { className: "chat-info-profile", children: [n.jsx(qt, { user: { avatar: c.user.avatar, avatarType: c.user.avatarType, id: c.user.id }, size: 56 }), n.jsx("b", { children: c.user.nickname })] }),
                    c.posts.length === 0 && n.jsxs("div", { className: "empty compact", children: [n.jsx("span", { children: "🌱" }), n.jsx("p", { children: "还没有公开帖子" })] }),
                    c.posts.map((v) =>
                      n.jsxs(
                        "div",
                        {
                          className: "profile-view-post",
                          children: [v.title && n.jsx("b", { children: v.title }), n.jsx("p", { children: v.content.slice(0, 80) }), n.jsxs("span", { children: [v.time, " · ♡", v.likes, " 🤗", v.hugs, " 💬", v.commentCount] })],
                        },
                        v.id,
                      ),
                    ),
                  ],
                }),
            ],
          }),
        ],
      }),
    })
  );
}
function Np({ user: r, chatType: u, target: o, title: c, onBack: m, flash: d, peer: h, onFriendDeleted: v, onAliasUpdated: j, onAvatarClick: y }) {
  const [C, S] = p.useState([]),
    [T, H] = p.useState(""),
    [k, X] = p.useState(!0),
    [J, D] = p.useState(!1),
    [I, V] = p.useState(null),
    [de, P] = p.useState(0);
  (p.useRef(new Map()),
    p.useEffect(() => {
      if (I) {
        P(0);
        const z = setTimeout(() => {
          var te;
          (te = Kt.current) == null || te.scrollIntoView({ behavior: "smooth", block: "end" });
        }, 300);
        return () => clearTimeout(z);
      }
    }, [I]));
  const [Y, K] = p.useState(!1),
    [F, Z] = p.useState(!1),
    [ye, Ce] = p.useState(!1),
    [Se, ke] = p.useState(!1),
    [Oe, ue] = p.useState(""),
    [R, $] = p.useState(!1),
    [le, fe] = p.useState(null),
    [be, w] = p.useState(null),
    [x, N] = p.useState({}),
    [_, ee] = p.useState(null),
    [he, je] = p.useState(!1),
    [ze, Ee] = p.useState(new Set()),
    [Pe, Ve] = p.useState(null),
    [pt, ot] = p.useState({}),
    [gt, yt] = p.useState(!1),
    [fa, we] = p.useState(!1),
    [st, Mt] = p.useState(!1),
    zt = p.useRef(void 0),
    $e = p.useRef(null),
    jt = p.useRef([]),
    xa = p.useRef(0),
    We = p.useRef(null),
    It = p.useRef(null),
    Xt = p.useRef(null),
    Rt = p.useRef(null),
    Gt = p.useRef(null),
    Zt = p.useRef(null),
    Dt = p.useRef(new Set()),
    [Ya, Vt] = p.useState(!1),
    [St, U] = p.useState(!1),
    [xe, ve] = p.useState(!1),
    [Qe, Ge] = p.useState((h == null ? void 0 : h.alias) || ""),
    [Ze, Fe] = p.useState(!1),
    [me, $t] = p.useState(0),
    xt = p.useRef(0),
    Kt = p.useRef(null),
    Jt = p.useRef(void 0),
    ca = p.useRef(null),
    ha = p.useRef(null),
    va = `moodtree-pin-${u}-${o}`,
    O = `moodtree-mute-${u}-${o}`,
    M = `moodtree-chat-bg-${u}-${o}`,
    [Q, oe] = p.useState(Te.getItem(va) === "1"),
    [Ne, De] = p.useState(Te.getItem(O) === "1"),
    [Ue, _e] = p.useState(Te.getItem(M) || ""),
    Le = p.useRef(null),
    rt = () => {
      const z = !Q;
      (oe(z), Te.setItem(va, z ? "1" : "0"), d(z ? "已置顶" : "已取消置顶"));
    },
    ht = () => {
      const z = !Ne;
      (De(z), Te.setItem(O, z ? "1" : "0"), d(z ? "已开启免打扰" : "已关闭免打扰"));
    },
    Nt = (z) => {
      if (!z.type.startsWith("image/")) {
        d("请选择图片文件");
        return;
      }
      if (z.size > 5 * 1024 * 1024) {
        d("图片不能超过5MB");
        return;
      }
      const te = new FileReader();
      ((te.onload = () => {
        const ce = te.result;
        (Te.setItem(M, ce), _e(ce), d("聊天背景已设置"));
      }),
        (te.onerror = () => d("图片读取失败")),
        te.readAsDataURL(z));
    },
    ba = () => {
      (Te.removeItem(M), _e(""), d("聊天背景已恢复默认"));
    },
    se = async () => {
      if (confirm("确定清空所有聊天记录吗？此操作不可恢复。"))
        try {
          (await pe("/api/chat/clear", { type: u, target: o }), S([]), U(!1), d("聊天记录已清空"));
        } catch {
          d("清空失败");
        }
    },
    ge = async () => {
      if (
        !(!h || !v) &&
        confirm(`确定删除好友「${h.alias || h.nickname}」吗？
将同时清空你们的聊天记录。`)
      )
        try {
          (await pe("/api/friends/delete", { userId: r.id, friendId: h.id }), U(!1), d("好友已删除"), v());
        } catch {
          d("删除失败");
        }
    },
    Ae = async () => {
      if (h)
        try {
          (await pe("/api/friends/alias", { userId: r.id, friendId: h.id, alias: Qe.trim() }), d(Qe.trim() ? "备注已更新" : "备注已清除"), j && j(h.id, Qe.trim()), Fe(!1), U(!1), m());
        } catch {
          d("设置备注失败");
        }
    },
    ct = p.useRef(!1),
    Wt = async () => {
      var z;
      if (!ct.current) {
        ct.current = !0;
        try {
          const ce = ((await qe(`/api/chat/messages?type=${u}&target=${encodeURIComponent(o)}&since=${xt.current}&userId=${r.id}`)).messages || []).filter((Xe) => !Dt.current.has(Xe.id));
          if (
            ce.length > 0 &&
            (S((aa) => {
              const wa = new Set(aa.map((Rn) => Rn.id)),
                Nn = ce.filter((Rn) => !wa.has(Rn.id));
              return (Nn.length > 0 && (xt.current = Nn[Nn.length - 1].timestamp), [...aa, ...Nn]);
            }),
            Te.getItem("moodtree-read-receipts") !== "off" && pe("/api/chat/read", { userId: r.id, type: u, target: o }).catch(() => {}),
            ce.some((aa) => aa.from !== r.id))
          )
            try {
              (z = navigator.vibrate) == null || z.call(navigator, 50);
            } catch {}
          X(!1);
        } catch {
          X(!1);
        } finally {
          ct.current = !1;
        }
      }
    };
  (p.useEffect(() => {
    if (u !== "dm") return;
    const z = () => {
      qe(`/api/chat/read-status?userId=${r.id}&type=dm&target=${encodeURIComponent(o)}`)
        .then((ce) => {
          ce.lastRead && $t(ce.lastRead);
        })
        .catch(() => {});
    };
    z();
    const te = window.setInterval(z, 3e3);
    return () => clearInterval(te);
  }, [o, u, r.id]),
    p.useEffect(
      () => (
        Wt(),
        Te.getItem("moodtree-read-receipts") !== "off" && pe("/api/chat/read", { userId: r.id, type: u, target: o }).catch(() => {}),
        St || (Jt.current = window.setInterval(Wt, 3e3)),
        () => {
          Jt.current && clearInterval(Jt.current);
        }
      ),
      [o, u, St],
    ),
    p.useEffect(
      () => () => {
        ca.current && ca.current.stop();
      },
      [],
    ));
  const xn = p.useRef(0);
  (p.useEffect(() => {
    xn.current = 0;
  }, [o]),
    p.useEffect(() => {
      var te;
      if (C.length === xn.current) return;
      const z = xn.current ? "smooth" : "auto";
      ((xn.current = C.length), (te = Kt.current) == null || te.scrollIntoView({ behavior: z }));
    }, [C]));
  const Wa = async () => {
      if (!T.trim()) return;
      let z = T.trim();
      (_ && ((z = `[quote]${_.fromNickname}: ${_.content.slice(0, 50)}[/quote]${z}`), ee(null)), H(""), D(!1), K(!1), V(null));
      try {
        const te = await pe("/api/chat/send", { type: u, target: o, from: r.id, content: z });
        if (te.error) {
          (d(te.error), H(z), te.matched_words && (V({ t: z, w: te.matched_words }), P(0)));
          return;
        }
        setTimeout(Wt, 200);
      } catch {
        (d("发送失败"), H(z));
      }
    },
    qa = async (z) => {
      (Vt(!0), K(!1));
      try {
        const te = await Us(z);
        te && (await pe("/api/chat/send", { type: u, target: o, from: r.id, content: `[img]${te}[/img]` }), setTimeout(Wt, 200));
      } catch {
        d("图片发送失败");
      }
      Vt(!1);
    },
    Dn = () => {
      const z = ["audio/mp4", "audio/m4a", "audio/aac", "audio/webm;codecs=opus", "audio/webm", "audio/ogg"];
      for (const te of z)
        try {
          if (window.MediaRecorder && MediaRecorder.isTypeSupported(te)) return te;
        } catch {}
      return "";
    },
    vn = () => {
      if (!!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder)) {
        d("当前浏览器不支持语音功能");
        return;
      }
      if (Se) {
        if ($e.current && $e.current.state !== "inactive")
          try {
            $e.current.stop();
          } catch {}
        setTimeout(() => {
          (ke(!1), $(!0));
        }, 600);
        return;
      }
      if ((ue(""), (jt.current = []), (xa.current = Date.now()), navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
        const te = Dn();
        navigator.mediaDevices
          .getUserMedia({ audio: !0 })
          .then((ce) => {
            const Xe = te ? new MediaRecorder(ce, { mimeType: te }) : new MediaRecorder(ce);
            ((Xe.ondataavailable = (ut) => {
              ut.data.size > 0 && jt.current.push(ut.data);
            }),
              (Xe.onstop = () => {
                ce.getTracks().forEach((ut) => ut.stop());
              }),
              Xe.start(1e3),
              ($e.current = Xe));
          })
          .catch(() => {
            d("无法获取麦克风权限");
          });
      }
      ke(!0);
    },
    Qt = async () => {
      var Xe;
      if (($(!1), ue(""), jt.current.length === 0)) {
        d("没有录制到音频");
        return;
      }
      const z = ((Xe = $e.current) == null ? void 0 : Xe.mimeType) || "audio/webm",
        te = new Blob(jt.current, { type: z });
      if (((jt.current = []), ($e.current = null), te.size < 100)) {
        d("录音太短，请重试");
        return;
      }
      const ce = Math.max(1, Math.round((Date.now() - xa.current) / 1e3));
      try {
        const ut = new FileReader();
        ((ut.onload = async () => {
          try {
            const aa = ut.result,
              wa = await pe("/api/upload", { filename: `voice_${Date.now()}`, image: aa });
            wa.url ? (await pe("/api/chat/send", { type: u, target: o, from: r.id, content: `[audio]${wa.url}|${ce}[/audio]` }), setTimeout(Wt, 200)) : d("语音上传失败");
          } catch {
            d("语音发送失败");
          }
        }),
          (ut.onerror = () => d("语音读取失败")),
          ut.readAsDataURL(te));
      } catch {
        d("语音发送失败");
      }
    },
    Pi = async () => {
      var z;
      if (jt.current.length === 0) {
        d("没有录制到音频");
        return;
      }
      yt(!0);
      try {
        const te = ((z = $e.current) == null ? void 0 : z.mimeType) || "audio/webm",
          ce = new Blob(jt.current, { type: te }),
          Xe = new FileReader();
        ((Xe.onload = async () => {
          try {
            const ut = Xe.result,
              aa = await pe("/api/upload", { filename: `voice_${Date.now()}`, image: ut });
            if (aa.url) {
              const wa = await pe("/api/asr", { audioUrl: aa.url });
              wa.text ? (H(wa.text), $(!1), (jt.current = []), ($e.current = null)) : d(wa.error || "转文字失败");
            } else d("音频上传失败");
          } catch {
            d("转文字失败");
          }
          yt(!1);
        }),
          (Xe.onerror = () => {
            (d("音频读取失败"), yt(!1));
          }),
          Xe.readAsDataURL(ce));
      } catch {
        (d("转文字失败"), yt(!1));
      }
    },
    el = async (z) => {
      if ((fe(null), pt[z.id])) return;
      const te = bn(z.content);
      d("转文字中…");
      try {
        const ce = await pe("/api/asr", { audioUrl: te });
        ce.text ? ot((Xe) => ({ ...Xe, [z.id]: ce.text })) : d(ce.error || "转文字失败");
      } catch {
        d("转文字失败，请重试");
      }
    },
    Xa = async (z) => {
      if (z.size > 10 * 1024 * 1024) {
        d("视频不能超过10MB");
        return;
      }
      (we(!0), K(!1));
      try {
        const te = new FileReader();
        ((te.onload = async () => {
          try {
            const ce = te.result,
              Xe = await pe("/api/upload", { filename: `video_${Date.now()}`, image: ce });
            Xe.url ? (await pe("/api/chat/send", { type: u, target: o, from: r.id, content: `[video]${Xe.url}[/video]` }), setTimeout(Wt, 200)) : d("视频上传失败");
          } catch {
            d("视频发送失败");
          }
          we(!1);
        }),
          (te.onerror = () => {
            (d("视频读取失败"), we(!1));
          }),
          te.readAsDataURL(z));
      } catch {
        (d("视频发送失败"), we(!1));
      }
    },
    on = async (z) => {
      if (z.size > 10 * 1024 * 1024) {
        d("文件不能超过10MB");
        return;
      }
      (Mt(!0), K(!1));
      try {
        const te = new FileReader();
        ((te.onload = async () => {
          try {
            const ce = te.result,
              Xe = await pe("/api/upload", { filename: `file_${Date.now()}`, image: ce });
            if (Xe.url) {
              const ut = z.size < 1024 ? `${z.size}B` : z.size < 1048576 ? `${(z.size / 1024).toFixed(1)}KB` : `${(z.size / 1024 / 1024).toFixed(1)}MB`;
              (await pe("/api/chat/send", { type: u, target: o, from: r.id, content: `[file]${z.name}|${Xe.url}|${ut}[/file]` }), setTimeout(Wt, 200));
            } else d("文件上传失败");
          } catch {
            d("文件发送失败");
          }
          Mt(!1);
        }),
          (te.onerror = () => {
            (d("文件读取失败"), Mt(!1));
          }),
          te.readAsDataURL(z));
      } catch {
        (d("文件发送失败"), Mt(!1));
      }
    },
    Hl = () => {
      if ((Ce(!0), !navigator.geolocation)) {
        (d("当前浏览器不支持定位"), Ce(!1));
        return;
      }
      navigator.geolocation.getCurrentPosition(
        async (z) => {
          try {
            const { latitude: te, longitude: ce } = z.coords,
              Xe = `https://uri.amap.com/marker?position=${ce},${te}&name=我的位置`;
            (await pe("/api/chat/send", { type: u, target: o, from: r.id, content: `[location]${te},${ce}|${Xe}[/location]` }), K(!1), setTimeout(Wt, 200));
          } catch {
            d("位置发送失败");
          }
          Ce(!1);
        },
        () => {
          (d("获取位置失败，请检查定位权限"), Ce(!1));
        },
        { timeout: 1e4, enableHighAccuracy: !0 },
      );
    },
    wi = (z) => z.startsWith("[img]") && z.endsWith("[/img]"),
    Ci = (z) => z.slice(5, -6),
    oa = (z) => z.startsWith("[audio]") && z.endsWith("[/audio]"),
    bn = (z) => {
      const te = z.slice(7, -7),
        ce = te.indexOf("|");
      return ce >= 0 ? te.slice(0, ce) : te;
    },
    An = (z) => {
      const te = z.slice(7, -7),
        ce = te.indexOf("|");
      return (ce >= 0 && parseInt(te.slice(ce + 1))) || 0;
    },
    Ma = (z) => z.startsWith("[video]") && z.endsWith("[/video]"),
    ma = (z) => z.slice(7, -7),
    Ti = (z) => z.startsWith("[file]") && z.endsWith("[/file]"),
    Ll = (z) => {
      const ce = z.slice(6, -7).split("|");
      return { name: ce[0] || "文件", url: ce[1] || "", size: ce[2] || "" };
    },
    Jn = (z) => {
      const te = z.match(/^\[quote\](.*?)\[\/quote\]([\s\S]*)$/);
      return te ? { quote: te[1], text: te[2] } : null;
    },
    ki = (z) => !wi(z) && !oa(z) && !Ma(z) && !Ti(z),
    un = (z) => z.startsWith("[location]") && z.endsWith("[/location]"),
    tl = (z) => {
      const ce = z.slice(10, -11).split("|");
      return { coord: ce[0] || "", url: ce[1] || "" };
    },
    ua = (z) => {
      zt.current = window.setTimeout(() => {
        fe(z);
      }, 500);
    },
    Ot = () => {
      zt.current && clearTimeout(zt.current);
    },
    yn = (z, te) => {
      (z.preventDefault(), fe(te));
    },
    jn = (z) => {
      (fe(null), ki(z.content) && (Wi(z.content), d("已复制")));
    },
    Da = async (z) => {
      if ((fe(null), Math.floor(Date.now() / 1e3) - (z.timestamp || 0) > 300)) {
        d("超过5分钟的消息不可撤回");
        return;
      }
      try {
        (await pe("/api/chat/delete", { msgId: z.id, userId: r.id }), S((ce) => ce.filter((Xe) => Xe.id !== z.id)), d("已撤回"));
      } catch {
        d("撤回失败");
      }
    },
    Mi = (z) => {
      (fe(null), Dt.current.add(z.id), S((te) => te.filter((ce) => ce.id !== z.id)), d("已删除"));
    },
    wt = (z) => {
      (fe(null), je(!0), Ee(new Set([z.id])));
    },
    dn = (z) => {
      Ee((te) => {
        const ce = new Set(te);
        return (ce.has(z) ? ce.delete(z) : ce.add(z), ce);
      });
    },
    Fa = async () => {
      const z = Array.from(ze);
      if (z.length === 0 || !confirm(`确定删除选中的${z.length}条消息吗？`)) return;
      const te = C.filter((ce) => ze.has(ce.id) && ce.from === r.id);
      for (const ce of te)
        try {
          await pe("/api/chat/delete", { msgId: ce.id, userId: r.id });
        } catch {}
      (z.forEach((ce) => Dt.current.add(ce)), S((ce) => ce.filter((Xe) => !ze.has(Xe.id))), je(!1), Ee(new Set()), d(`已删除${z.length}条消息`));
    },
    zi = () => {
      (je(!1), Ee(new Set()));
    },
    Aa = (z) => {
      var ce;
      if (Pe === z) {
        ((ce = We.current) == null || ce.pause(), Ve(null));
        return;
      }
      We.current && We.current.pause();
      const te = new Audio(z);
      ((te.onended = () => Ve(null)),
        (te.onerror = () => {
          (d("音频播放失败"), Ve(null));
        }),
        (We.current = te),
        te.play().catch(() => {
          (d("音频播放失败"), Ve(null));
        }),
        Ve(z));
    },
    Sn = async (z) => {
      if ((fe(null), !!ki(z.content))) {
        d("翻译中…");
        try {
          const te = z.content.replace(/\[img\].*?\[\/img\]|\[video\].*?\[\/video\]|\[audio\].*?\[\/audio\]|\[file\].*?\[\/file\]|\[location\].*?\[\/location\]|\[quote\].*?\[\/quote\]/g, "").trim();
          if (!te) {
            d("无可翻译内容");
            return;
          }
          const ce = await Au(te);
          ce ? N((Xe) => ({ ...Xe, [z.id]: ce })) : d("翻译失败");
        } catch {
          d("翻译失败，请重试");
        }
      }
    },
    Wn = (z) => {
      (fe(null), ee(z));
    },
    Fn = (z) => {
      if (wi(z)) return n.jsx("img", { src: Ci(z), alt: "图片", className: "chat-img", onClick: () => w(Ci(z)) });
      if (Ma(z)) return n.jsx("video", { src: ma(z), controls: !0, className: "chat-video", preload: "metadata" });
      if (Ti(z)) {
        const { name: ce, url: Xe, size: ut } = Ll(z);
        return n.jsxs("div", {
          className: "chat-file",
          onClick: () => window.open(Xe),
          children: [
            n.jsx("span", { className: "chat-file-icon", children: "📎" }),
            n.jsxs("div", { className: "chat-file-info", children: [n.jsx("span", { className: "chat-file-name", children: ce }), n.jsx("span", { className: "chat-file-size", children: ut })] }),
            n.jsx("span", { className: "chat-file-arrow", children: "↓" }),
          ],
        });
      }
      if (un(z)) {
        const { coord: ce, url: Xe } = tl(z);
        return n.jsxs("div", {
          className: "chat-location",
          onClick: () => window.open(Xe),
          children: [
            n.jsx("span", { className: "location-icon", children: "📍" }),
            n.jsxs("div", { className: "location-info", children: [n.jsx("span", { className: "location-title", children: "位置" }), n.jsx("span", { className: "location-coord", children: ce })] }),
            n.jsx("span", { className: "location-arrow", children: "→" }),
          ],
        });
      }
      if (oa(z)) {
        const ce = bn(z),
          Xe = An(z),
          ut = Pe === ce,
          aa = Xe > 0 ? `${Math.floor(Xe / 60)}:${String(Xe % 60).padStart(2, "0")}` : "0:00";
        return n.jsxs("div", {
          className: `chat-voice-msg ${ut ? "playing" : ""}`,
          onClick: (wa) => {
            (wa.stopPropagation(), Aa(ce));
          },
          children: [
            n.jsx("span", { className: "voice-play-icon", children: ut ? "⏸" : "▶" }),
            n.jsx("span", { className: "voice-duration", children: aa }),
            ut && n.jsxs("span", { className: "voice-bars", children: [n.jsx("i", {}), n.jsx("i", {}), n.jsx("i", {})] }),
          ],
        });
      }
      const te = Jn(z);
      return te ? n.jsxs(n.Fragment, { children: [n.jsx("div", { className: "chat-quote", children: te.quote }), n.jsx("p", { children: te.text })] }) : n.jsx("p", { children: z });
    };
  return n.jsxs("div", {
    className: "chat-view",
    children: [
      n.jsxs("div", {
        className: "chat-header",
        children: [
          n.jsx("button", { className: "back-button", onClick: m, children: "←" }),
          n.jsx("h2", { children: c }),
          n.jsx("button", {
            className: "chat-info-btn",
            onClick: () => U(!0),
            onTouchEnd: (z) => {
              (z.preventDefault(), U(!0));
            },
            children: "...",
          }),
        ],
      }),
      n.jsxs("div", {
        className: "chat-messages",
        style: Ue ? (Ue.startsWith("linear-gradient") ? { background: Ue } : { backgroundImage: `url(${Ue})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }) : void 0,
        onClick: () => {
          (D(!1), K(!1));
        },
        onMouseUp: (te) => {
          const sel = window.getSelection();
          const txt = sel ? sel.toString().trim() : "";
          if (txt.length > 0) {
            let node = sel.anchorNode;
            while (node && !(node instanceof HTMLElement)) node = node.parentNode;
            let el = node;
            while (el && !el.classList?.contains("chat-msg")) el = el.parentElement;
            if (el) {
              const msgId = el.getAttribute("data-msg-id");
              const msg = C.find((m) => String(m.id) === msgId);
              if (msg) fe(msg);
            }
          }
        },
        children: [
          k
            ? n.jsx("div", { className: "chat-loading", children: "加载中…" })
            : C.length === 0
              ? n.jsxs("div", { className: "chat-empty", children: [n.jsx("span", { children: "🌱" }), n.jsx("p", { children: "还没有消息，发一条吧～" })] })
              : C.map((z) =>
                  n.jsxs(
                    "div",
                    {
                      "data-msg-id": z.id,
                      className: `chat-msg ${z.from === r.id ? "mine" : "other"} ${he ? "multi-select" : ""} ${ze.has(z.id) ? "selected" : ""}`,
                      onTouchStart: () => !he && ua(z),
                      onTouchEnd: he ? void 0 : Ot,
                      onTouchMove: he ? void 0 : Ot,
                      onContextMenu: he ? void 0 : (te) => yn(te, z),
                      onClick: he ? () => dn(z.id) : void 0,
                      children: [
                        he && n.jsx("div", { className: `msg-checkbox ${ze.has(z.id) ? "checked" : ""}`, children: ze.has(z.id) ? "✓" : "" }),

                        z.from !== r.id &&
                          !he &&
                          n.jsx("span", {
                            onClick: y
                              ? (te) => {
                                  (te.stopPropagation(), y(z.from));
                                }
                              : void 0,
                            style: { cursor: "pointer", flexShrink: 0 },
                            children: n.jsx(qt, { user: { avatar: z.fromAvatar, avatarType: z.fromAvatarType, id: z.from }, size: 32 }),
                          }),
                        n.jsxs("div", {
                          className: "chat-bubble",
                          children: [
                            z.from !== r.id && n.jsx("span", { className: "chat-sender", children: z.fromNickname }),
                            Fn(z.content),
                            pt[z.id] && n.jsxs("div", { className: "chat-voice-text", children: ["📝 ", pt[z.id]] }),
                            x[z.id] && n.jsxs("div", { className: "chat-translated", children: [x[z.id]] }),
                            n.jsx("span", { className: "chat-time", children: z.time.slice(11) }),
                            u === "dm" && z.from === r.id && Te.getItem("moodtree-read-receipts") !== "off" && n.jsx("span", { className: "chat-read-status", children: me >= (z.timestamp || 0) ? "已读" : "未读" }),
                          ],
                        }),
                      ],
                    },
                    z.id,
                  ),
                ),
          n.jsx("div", { ref: Kt }),
        ],
      }),
      n.jsx("style", {
        children:
          ".emoji-picker{display:grid;grid-template-columns:repeat(10,1fr);gap:2px;padding:8px;background:#f8f6f2;border-top:1px solid #e8e4dc;max-height:200px;overflow-y:auto}.emoji-picker button{width:32px;height:32px;border:none;background:none;font-size:20px;cursor:pointer;border-radius:6px;display:flex;align-items:center;justify-content:center;transition:all 0.15s}.emoji-picker button:hover{background:var(--sage-soft,#e8f0ea);transform:scale(1.2)}",
      }),
      J && n.jsx("div", { className: "emoji-picker", children: Wv.map((z) => n.jsx("button", { onClick: () => H(T + z), type: "button", children: z }, z)) }),
      Y &&
        n.jsxs("div", {
          className: "chat-more-panel",
          children: [
            n.jsxs("button", {
              className: "more-action-btn",
              onClick: () => {
                var z;
                return (z = Rt.current) == null ? void 0 : z.click();
              },
              children: [
                n.jsx("span", {
                  className: "more-icon",
                  children: n.jsxs("svg", {
                    viewBox: "0 0 24 24",
                    width: "28",
                    height: "28",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.8",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [n.jsx("rect", { x: "2", y: "4", width: "20", height: "16", rx: "3" }), n.jsx("path", { d: "M2 16l5-6 4 4 4-5 7 8" }), n.jsx("circle", { cx: "8", cy: "9", r: "1.5", fill: "currentColor", stroke: "none" })],
                  }),
                }),
                n.jsx("span", { children: "相册" }),
              ],
            }),
            n.jsxs("button", {
              className: "more-action-btn",
              onClick: () => {
                var z;
                return (z = Gt.current) == null ? void 0 : z.click();
              },
              children: [
                n.jsx("span", {
                  className: "more-icon",
                  children: n.jsxs("svg", {
                    viewBox: "0 0 24 24",
                    width: "28",
                    height: "28",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.8",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      n.jsx("rect", { x: "3", y: "5", width: "18", height: "14", rx: "3" }),
                      n.jsx("circle", { cx: "12", cy: "12", r: "4" }),
                      n.jsx("rect", { x: "10", y: "2", width: "4", height: "3", rx: "1", fill: "currentColor", stroke: "none" }),
                    ],
                  }),
                }),
                n.jsx("span", { children: "拍照" }),
              ],
            }),
            n.jsxs("button", {
              className: "more-action-btn",
              onClick: () => {
                (Z(!0), K(!1));
              },
              children: [
                n.jsx("span", {
                  className: "more-icon",
                  children: n.jsx("svg", {
                    viewBox: "0 0 24 24",
                    width: "28",
                    height: "28",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.8",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: n.jsx("path", { d: "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.4 2.4-7.4L2 9.4h7.6z" }),
                  }),
                }),
                n.jsx("span", { children: "收藏" }),
              ],
            }),
            n.jsxs("button", {
              className: "more-action-btn",
              onClick: Hl,
              disabled: ye,
              children: [
                n.jsx("span", {
                  className: "more-icon",
                  children: n.jsxs("svg", {
                    viewBox: "0 0 24 24",
                    width: "28",
                    height: "28",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.8",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [n.jsx("circle", { cx: "12", cy: "12", r: "10" }), n.jsx("path", { d: "M12 2v4M12 18v4M2 12h4M18 12h4" }), n.jsx("path", { d: "M12 8l3 7-3-2-3 2z", fill: "currentColor", stroke: "none" })],
                  }),
                }),
                n.jsx("span", { children: ye ? "发送中…" : "位置" }),
              ],
            }),
            n.jsxs("button", {
              className: "more-action-btn",
              onClick: () => {
                var z;
                return (z = Xt.current) == null ? void 0 : z.click();
              },
              disabled: st,
              children: [
                n.jsx("span", {
                  className: "more-icon",
                  children: n.jsxs("svg", {
                    viewBox: "0 0 24 24",
                    width: "28",
                    height: "28",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.8",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [n.jsx("path", { d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" }), n.jsx("polyline", { points: "13 2 13 9 20 9" })],
                  }),
                }),
                n.jsx("span", { children: st ? "上传中…" : "文件" }),
              ],
            }),
          ],
        }),
      n.jsx("input", {
        ref: Rt,
        type: "file",
        accept: "image/*,video/*",
        style: { display: "none" },
        onChange: (z) => {
          const te = z.target.files;
          if (te && te.length > 0) {
            const ce = te[0];
            ce.type.startsWith("video/") ? Xa(ce) : qa(ce);
          }
          z.target.value = "";
        },
      }),
      n.jsx("input", {
        ref: Gt,
        type: "file",
        accept: "image/*",
        capture: "environment",
        style: { display: "none" },
        onChange: (z) => {
          var ce;
          const te = (ce = z.target.files) == null ? void 0 : ce[0];
          (te && qa(te), (z.target.value = ""));
        },
      }),
      F &&
        n.jsxs("div", {
          className: "favorites-panel",
          children: [
            n.jsxs("div", { className: "favorites-header", children: [n.jsx("span", { children: "我的收藏" }), n.jsx("button", { onClick: () => Z(!1), type: "button", children: "✕" })] }),
            n.jsx("div", { className: "favorites-list", children: n.jsx("div", { className: "favorites-empty", children: "暂无收藏内容" }) }),
          ],
        }),
      n.jsx("input", {
        ref: ha,
        type: "file",
        accept: "image/*",
        style: { display: "none" },
        onChange: (z) => {
          var ce;
          const te = (ce = z.target.files) == null ? void 0 : ce[0];
          (te && qa(te), (z.target.value = ""));
        },
      }),
      n.jsx("input", {
        ref: It,
        type: "file",
        accept: "video/*",
        style: { display: "none" },
        onChange: (z) => {
          var ce;
          const te = (ce = z.target.files) == null ? void 0 : ce[0];
          (te && Xa(te), (z.target.value = ""));
        },
      }),
      n.jsx("input", {
        ref: Xt,
        type: "file",
        style: { display: "none" },
        onChange: (z) => {
          var ce;
          const te = (ce = z.target.files) == null ? void 0 : ce[0];
          (te && on(te), (z.target.value = ""));
        },
      }),
      n.jsx("input", {
        ref: Le,
        type: "file",
        accept: "image/*",
        style: { display: "none" },
        onChange: (z) => {
          var ce;
          const te = (ce = z.target.files) == null ? void 0 : ce[0];
          (te && Nt(te), (z.target.value = ""));
        },
      }),
      !he &&
        (R
          ? n.jsxs("div", {
              className: "voice-options-panel",
              children: [
                n.jsx("button", { className: "voice-option-btn text", disabled: gt, onClick: Pi, children: gt ? "📝 正在转文字…" : "📝 转文字发送" }),
                n.jsx("button", { className: "voice-option-btn voice", onClick: Qt, children: "🎤 发送语音" }),
                n.jsx("button", {
                  className: "voice-option-btn cancel",
                  disabled: gt,
                  onClick: () => {
                    ($(!1), ue(""), (jt.current = []));
                  },
                  children: "✕",
                }),
              ],
            })
          : n.jsxs(n.Fragment, {
              children: [
                I &&
                  (() => {
                    const z = (te, ce) => {
                      var ut;
                      P(ce);
                      const Xe = Ru(I.t, te);
                      (Zt.current && (Zt.current.focus({ preventScroll: !0 }), Zt.current.setSelectionRange(Xe, Xe + te.length)), (ut = Kt.current) == null || ut.scrollIntoView({ behavior: "smooth", block: "end" }));
                    };
                    return n.jsxs("div", {
                      style: { marginBottom: "6px", background: "#fff8f0", border: "1px solid #ffcc80", borderRadius: "8px", padding: "8px 12px" },
                      children: [
                        n.jsxs("div", {
                          style: { display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" },
                          children: [
                            n.jsx("span", { style: { fontSize: "12px", color: "#e65100", fontWeight: 500 }, children: "⚠️ 内容包含敏感词，请修改后重试：" }),
                            I.w.length > 1 &&
                              n.jsxs(n.Fragment, {
                                children: [
                                  n.jsx("button", {
                                    type: "button",
                                    onClick: () => {
                                      const te = (de - 1 + I.w.length) % I.w.length;
                                      z(I.w[te], te);
                                    },
                                    style: { background: "none", border: "1px solid #ffb3b3", color: "#d32f2f", padding: "0 6px", borderRadius: "10px", fontSize: "12px", cursor: "pointer", lineHeight: "1.8" },
                                    children: "↑",
                                  }),
                                  n.jsxs("span", { style: { fontSize: "11px", color: "#d32f2f" }, children: [de + 1, "/", I.w.length] }),
                                  n.jsx("button", {
                                    type: "button",
                                    onClick: () => {
                                      const te = (de + 1) % I.w.length;
                                      z(I.w[te], te);
                                    },
                                    style: { background: "none", border: "1px solid #ffb3b3", color: "#d32f2f", padding: "0 6px", borderRadius: "10px", fontSize: "12px", cursor: "pointer", lineHeight: "1.8" },
                                    children: "↓",
                                  }),
                                ],
                              }),
                          ],
                        }),
                        n.jsx("div", {
                          style: { display: "flex", flexWrap: "wrap", gap: "6px" },
                          children: I.w.map((te, ce) =>
                            n.jsx(
                              "span",
                              {
                                onClick: () => z(te, ce),
                                style: {
                                  background: ce === de ? "#ffcdd2" : "#ffe0e0",
                                  color: "#d32f2f",
                                  padding: "3px 10px",
                                  borderRadius: "14px",
                                  fontSize: "13px",
                                  fontWeight: 500,
                                  border: ce === de ? "2px solid #d32f2f" : "1px solid #ffb3b3",
                                  cursor: "pointer",
                                },
                                children: te,
                              },
                              ce,
                            ),
                          ),
                        }),
                        n.jsx(Ou, { text: I.t, words: I.w, currentIdx: de }),
                      ],
                    });
                  })(),
                n.jsxs("div", {
                  className: "chat-input-bar",
                  children: [
                    n.jsx("button", { className: `voice-btn ${Se ? "recording" : ""}`, onClick: vn, type: "button", title: "语音输入", children: Se ? "⏹" : "🎙️" }),
                    n.jsx("input", {
                      ref: Zt,
                      value: T,
                      onChange: (z) => {
                        (H(z.target.value), V(null));
                      },
                      onKeyDown: (z) => {
                        z.key === "Enter" && !z.shiftKey && (z.preventDefault(), Wa());
                      },
                      placeholder: Se ? "正在听…" : "输入消息…",
                      maxLength: 500,
                      disabled: Se,
                    }),
                    n.jsx("button", {
                      className: "emoji-btn",
                      onClick: () => {
                        (D(!J), K(!1));
                      },
                      type: "button",
                      children: "😊",
                    }),
                    T.trim()
                      ? n.jsx("button", { className: "send-btn", onClick: Wa, children: "发送" })
                      : n.jsx("button", {
                          className: "more-btn",
                          onClick: () => {
                            (K(!Y), D(!1));
                          },
                          type: "button",
                          children: "+",
                        }),
                  ],
                }),
                Se && n.jsxs("div", { className: "voice-recording-indicator", children: [n.jsx("span", { className: "voice-dot" }), "正在录音，说完后点击⏹停止"] }),
              ],
            })),
      le &&
        n.jsx("div", {
          className: "msg-action-overlay",
          onClick: () => fe(null),
          children: n.jsx("div", {
            className: "msg-action-menu",
            onClick: (z) => z.stopPropagation(),
            children: n.jsxs("div", {
              className: "msg-action-row",
              children: [
                n.jsxs("button", {
                  className: "msg-action-item",
                  onClick: () => jn(le),
                  children: [
                    n.jsx("span", {
                      className: "msg-action-icon",
                      children: n.jsxs("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.8",
                        children: [n.jsx("rect", { x: "9", y: "9", width: "11", height: "11", rx: "2" }), n.jsx("path", { d: "M5 15V5a2 2 0 0 1 2-2h10" })],
                      }),
                    }),
                    n.jsx("span", { children: "复制" }),
                  ],
                }),
                n.jsxs("button", {
                  className: "msg-action-item",
                  onClick: () => {
                    const msgEl = document.querySelector(`[data-msg-id="${le.id}"]`);
                    if (msgEl) {
                      const ta = document.createRange();
                      let tel = null;
                      const ch = msgEl.querySelectorAll(".chat-bubble > *,.chat-msg > div > *");
                      let ml = 0;
                      ch.forEach(c => { const l = (c.textContent || "").length; if (l > ml) { ml = l; tel = c; } });
                      if (!tel) tel = msgEl.querySelector(".chat-bubble,.chat-msg") || msgEl;
                      ta.selectNodeContents(tel);
                      const sl = window.getSelection();
                      sl.removeAllRanges(); sl.addRange(ta);
                      fe("已全选");
                    } else { fe("已全选"); }
                  },
                  children: [
                    n.jsx("span", {
                      className: "msg-action-icon",
                      children: n.jsxs("svg", {
                        viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8",
                        children: [n.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }), n.jsx("path", { d: "M7 7h10M7 11h10M7 15h6" })]
                      }),
                    }),
                    n.jsx("span", { children: "全选" }),
                  ],
                }),
                oa(le.content) &&
                  n.jsxs("button", {
                    className: "msg-action-item",
                    onClick: () => el(le),
                    children: [
                      n.jsx("span", {
                        className: "msg-action-icon",
                        children: n.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", children: [n.jsx("path", { d: "M4 6h12M4 12h8M4 18h12" }), n.jsx("path", { d: "M18 8l3 3-3 3" })] }),
                      }),
                      n.jsx("span", { children: "转文字" }),
                    ],
                  }),
                le.from === r.id &&
                  n.jsxs("button", {
                    className: "msg-action-item",
                    onClick: () => Da(le),
                    children: [
                      n.jsx("span", {
                        className: "msg-action-icon",
                        children: n.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", children: [n.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }), n.jsx("path", { d: "M3 4v5h5" })] }),
                      }),
                      n.jsx("span", { children: "撤回" }),
                    ],
                  }),
                le.from === r.id &&
                  n.jsxs("button", {
                    className: "msg-action-item",
                    onClick: () => Mi(le),
                    children: [
                      n.jsx("span", {
                        className: "msg-action-icon",
                        children: n.jsx("svg", {
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          children: n.jsx("path", { d: "M4 7h16M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13" }),
                        }),
                      }),
                      n.jsx("span", { children: "删除" }),
                    ],
                  }),
                n.jsxs("button", {
                  className: "msg-action-item",
                  onClick: () => Sn(le),
                  children: [
                    n.jsx("span", {
                      className: "msg-action-icon",
                      children: n.jsxs("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.8",
                        children: [n.jsx("circle", { cx: "12", cy: "12", r: "9" }), n.jsx("path", { d: "M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" })],
                      }),
                    }),
                    n.jsx("span", { children: "翻译" }),
                  ],
                }),
                n.jsxs("button", {
                  className: "msg-action-item",
                  onClick: () => Wn(le),
                  children: [
                    n.jsx("span", {
                      className: "msg-action-icon",
                      children: n.jsxs("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.8",
                        children: [n.jsx("path", { d: "M7 7h4v6H7zM13 11h4v6h-4z" }), n.jsx("path", { d: "M7 13c0 2 1 3 3 3M13 17c0 2 1 3 3 3" })],
                      }),
                    }),
                    n.jsx("span", { children: "引用" }),
                  ],
                }),
                n.jsxs("button", {
                  className: "msg-action-item",
                  onClick: () => wt(le),
                  children: [
                    n.jsx("span", {
                      className: "msg-action-icon",
                      children: n.jsxs("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.8",
                        children: [
                          n.jsx("rect", { x: "4", y: "4", width: "6", height: "6", rx: "1" }),
                          n.jsx("rect", { x: "14", y: "4", width: "6", height: "6", rx: "1" }),
                          n.jsx("rect", { x: "4", y: "14", width: "6", height: "6", rx: "1" }),
                          n.jsx("path", { d: "M17 14v6M14 17h6" }),
                        ],
                      }),
                    }),
                    n.jsx("span", { children: "多选" }),
                  ],
                }),
              ],
            }),
          }),
        }),
      he &&
        n.jsxs("div", {
          className: "multi-select-bar",
          children: [
            n.jsxs("span", { className: "multi-select-count", children: ["已选", ze.size, "项"] }),
            n.jsxs("div", {
              className: "multi-select-actions",
              children: [n.jsx("button", { className: "multi-select-btn cancel", onClick: zi, children: "取消" }), n.jsx("button", { className: "multi-select-btn delete", onClick: Fa, disabled: ze.size === 0, children: "删除" })],
            }),
          ],
        }),
      _ &&
        n.jsxs("div", {
          className: "quote-preview",
          children: [n.jsxs("div", { className: "quote-preview-text", children: ["回复 ", _.fromNickname, ": ", _.content.slice(0, 40)] }), n.jsx("button", { className: "quote-preview-close", onClick: () => ee(null), children: "✕" })],
        }),
      be && n.jsx(bp, { images: [be], startIndex: 0, onClose: () => w(null), flash: d }),
      St &&
        n.jsx("div", {
          className: "chat-info-overlay",
          onMouseDown: (z) => {
            z.target === z.currentTarget && U(!1);
          },
          children: n.jsxs("div", {
            className: "chat-info-panel",
            children: [
              n.jsxs("div", { className: "chat-info-header", children: [n.jsx("button", { className: "back-button", onClick: () => U(!1), children: "←" }), n.jsx("h2", { children: "聊天信息" })] }),
              n.jsxs("div", {
                className: "chat-info-body",
                children: [
                  h &&
                    n.jsxs("div", {
                      className: "chat-info-profile",
                      children: [
                        n.jsx(qt, { user: h, size: 56 }),
                        n.jsxs("div", { children: [n.jsx("b", { children: h.alias || h.nickname }), h.alias && n.jsxs("small", { children: ["原昵称: ", h.nickname] }), n.jsx("small", { children: h.id })] }),
                      ],
                    }),
                  !h &&
                    u === "room" &&
                    n.jsxs("div", {
                      className: "chat-info-profile",
                      children: [n.jsx("div", { className: "chat-list-avatar room-avatar", style: { width: 56, height: 56, fontSize: 26 }, children: "◈" }), n.jsx("div", { children: n.jsx("b", { children: c }) })],
                    }),
                  Ze && h
                    ? n.jsxs("div", {
                        className: "chat-info-alias-edit",
                        children: [
                          n.jsx("input", {
                            value: Qe,
                            onChange: (z) => Ge(z.target.value),
                            placeholder: "输入备注名（留空清除）",
                            maxLength: 20,
                            autoFocus: !0,
                            onKeyDown: (z) => {
                              z.key === "Enter" && Ae();
                            },
                          }),
                          n.jsxs("div", { className: "alias-actions", children: [n.jsx("button", { className: "alias-cancel", onClick: () => Fe(!1), children: "取消" }), n.jsx("button", { className: "alias-save", onClick: Ae, children: "保存" })] }),
                        ],
                      })
                    : n.jsxs("div", {
                        className: "chat-info-list",
                        children: [
                          h &&
                            n.jsxs("div", {
                              className: "chat-info-item",
                              onClick: () => {
                                (Ge(h.alias || ""), Fe(!0));
                              },
                              children: [n.jsx("span", { children: "设置备注" }), n.jsx("span", { className: "chat-info-value", children: h.alias || "未设置" })],
                            }),
                          n.jsxs("div", {
                            className: "chat-info-item",
                            onClick: rt,
                            children: [n.jsx("span", { children: "置顶聊天" }), n.jsx("span", { className: `chat-info-toggle ${Q ? "on" : ""}`, children: n.jsx("span", { className: "toggle-knob" }) })],
                          }),
                          n.jsxs("div", {
                            className: "chat-info-item",
                            onClick: ht,
                            children: [n.jsx("span", { children: "消息免打扰" }), n.jsx("span", { className: `chat-info-toggle ${Ne ? "on" : ""}`, children: n.jsx("span", { className: "toggle-knob" }) })],
                          }),
                          n.jsxs("div", {
                            className: "chat-info-item",
                            onClick: () => ve(!xe),
                            children: [n.jsx("span", { children: "设置聊天背景" }), Ue && n.jsx("span", { className: "chat-info-value", children: "已设置" })],
                          }),
                          xe &&
                            n.jsxs("div", {
                              className: "bg-picker-section",
                              children: [
                                n.jsx("div", { className: "bg-picker-label", children: "从图库选择" }),
                                n.jsxs("div", {
                                  className: "bg-picker-grid",
                                  children: [
                                    _v.map((z) =>
                                      n.jsx(
                                        "div",
                                        {
                                          className: `bg-preset-item ${Ue === z.value ? "selected" : ""}`,
                                          style: { background: z.value },
                                          onClick: () => {
                                            (Te.setItem(M, z.value), _e(z.value), ve(!1), d(`背景已切换：${z.name}`));
                                          },
                                          children: n.jsx("span", { children: z.name }),
                                        },
                                        z.name,
                                      ),
                                    ),
                                    n.jsxs("div", {
                                      className: "bg-preset-item bg-custom",
                                      onClick: () => {
                                        var z;
                                        return (z = Le.current) == null ? void 0 : z.click();
                                      },
                                      children: [n.jsx("span", { children: "📷" }), n.jsx("span", { children: "自定义" })],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          Ue && n.jsxs("div", { className: "chat-info-item danger", onClick: ba, children: [n.jsx("span", { children: "恢复默认背景" })] }),
                          n.jsxs("div", { className: "chat-info-item danger", onClick: se, children: [n.jsx("span", { children: "清空聊天记录" })] }),
                          h && n.jsxs("div", { className: "chat-info-item danger", onClick: ge, children: [n.jsx("span", { children: "删除好友" })] }),
                        ],
                      }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
const Wr = {
  86: { len: 11, pattern: /^1[3-9]\d{9}$/, name: "中国大陆" },
  852: { len: 8, pattern: /^[5-9]\d{7}$/, name: "香港" },
  853: { len: 8, pattern: /^6\d{7}$/, name: "澳门" },
  886: { len: 9, pattern: /^[9]\d{8}$/, name: "台湾" },
  1: { len: 10, pattern: /^[2-9]\d{9}$/, name: "美国/加拿大" },
  81: { len: 10, pattern: /^[7-9]\d{9}$/, name: "日本" },
  82: { len: 9, pattern: /^1\d{8}$/, name: "韩国" },
  65: { len: 8, pattern: /^[89]\d{7}$/, name: "新加坡" },
  44: { len: 10, pattern: /^7\d{9}$/, name: "英国" },
  60: { len: 9, pattern: /^1\d{8}$/, name: "马来西亚" },
  61: { len: 9, pattern: /^4\d{8}$/, name: "澳大利亚" },
  66: { len: 9, pattern: /^[6-9]\d{8}$/, name: "泰国" },
  91: { len: 10, pattern: /^[6-9]\d{9}$/, name: "印度" },
  49: { len: 10, pattern: /^1[56]\d{8}$/, name: "德国" },
  33: { len: 9, pattern: /^[67]\d{8}$/, name: "法国" },
  39: { len: 10, pattern: /^3\d{9}$/, name: "意大利" },
  31: { len: 9, pattern: /^6\d{8}$/, name: "荷兰" },
  46: { len: 9, pattern: /^7\d{8}$/, name: "瑞典" },
  47: { len: 8, pattern: /^[4-9]\d{7}$/, name: "挪威" },
};
function wp(r) {
  for (const u of [3, 2, 1]) {
    const o = r.slice(0, u);
    if (Wr[o]) return o;
  }
  return null;
}
function Gm(r) {
  if (!r || r.length < 4) return { valid: !1, error: "请输入手机号（含国家代码）" };
  const u = wp(r);
  if (!u) return { valid: !1, error: "不支持的国家代码，请检查格式（如 86 13800138000）" };
  const o = Wr[u],
    c = r.slice(u.length);
  return c.length !== o.len ? { valid: !1, error: `${o.name}手机号应为${o.len}位（不含国家代码${u}），当前${c.length}位` } : o.pattern.test(c) ? { valid: !0 } : { valid: !1, error: `${o.name}手机号格式不正确` };
}
function Pv({ onClose: r, onSuccess: u }) {
  const [o, c] = p.useState("login"),
    [m, d] = p.useState("phone"),
    [h, v] = p.useState(""),
    [j, y] = p.useState(""),
    [C, S] = p.useState(""),
    [T, H] = p.useState(""),
    [k, X] = p.useState(!1),
    [J, D] = p.useState(!1),
    [I, V] = p.useState(""),
    [de, P] = p.useState(""),
    [Y, K] = p.useState(null),
    [rememberDevice, setRememberDevice] = p.useState(!0),
    F = (w) => {
      (c(w), d("phone"), y(""), S(""), H(""), V(""), P(""), K(null));
    },
    Z = wp(h),
    ye = Z ? Wr[Z].name : null,
    Ce = Z ? Wr[Z].len : null,
    Se = Z ? h.length - Z.length : 0,
    ke = async (w) => {
      w.preventDefault();
      const x = Gm(h);
      if (!x.valid) {
        V(x.error);
        return;
      }
      (D(!0), V(""), P(""));
      try {
        const N = await pe("/api/auth/check-phone", { phone: h });
        if (N.error) {
          (V(N.error), D(!1));
          return;
        }
        if ((K(N), o === "login")) {
          if (!N.exists) {
            (V("该手机号未注册，请先注册"), D(!1));
            return;
          }
          N.hasPassword ? d("password") : (d("setPassword"), P("首次设置密码，请为你的账号设置登录密码"));
        } else {
          if (N.exists) {
            (V("该手机号已注册，请直接登录"), D(!1));
            return;
          }
          (d("register"), P("设置登录密码，完成注册"));
        }
      } catch {
        V("网络错误，请稍后重试");
      }
      D(!1);
    },
    Oe = async (w) => {
      if ((w.preventDefault(), !j)) {
        V("请设置密码");
        return;
      }
      if (j !== C) {
        V("两次输入的密码不一致");
        return;
      }
      if (j.length < 8 || j.length > 16) {
        V("密码必须是8-16位");
        return;
      }
      if (/^\d+$/.test(j)) {
        V("密码不能是纯数字");
        return;
      }
      if (!/[a-zA-Z]/.test(j) || !/\d/.test(j)) {
        V("密码必须包含英文字母和数字");
        return;
      }
      (D(!0), V(""));
      try {
        const x = ru(),
          N = cu(),
          _ = await pe("/api/auth/login", { phone: h, password: j, nickname: x, avatar: N });
        if (_.error) {
          (V(_.error), D(!1));
          return;
        }
        const ee = _.user || _,
          he = h.startsWith("+") ? h : `+${h}`,
          je = ee.nickname || x,
          ze = ee.avatar || N;
        (Te.setItem("moodtree-nickname", je), Te.setItem("moodtree-avatar", ze));
        const Ee = { id: ee.id, phone: he, nickname: je, avatar: ze, avatarType: ee.avatarType || "char", createdAt: ee.createdAt, provider: "phone" };
        (_.token && su(_.token, rememberDevice), u(Ee, rememberDevice));
      } catch {
        V("注册失败，请稍后重试");
      }
      D(!1);
    },
    ue = async (w) => {
      if ((w.preventDefault(), !j)) {
        V("请输入密码");
        return;
      }
      (D(!0), V(""));
      try {
        const x = ru(),
          N = cu(),
          _ = await pe("/api/auth/login", { phone: h, password: j, nickname: x, avatar: N });
        if (_.error) {
          (V(_.error), D(!1));
          return;
        }
        const ee = _.user || _,
          he = h.startsWith("+") ? h : `+${h}`,
          je = ee.nickname || x,
          ze = ee.avatar || N;
        (Te.setItem("moodtree-nickname", je), Te.setItem("moodtree-avatar", ze));
        const Ee = { id: ee.id, phone: he, nickname: je, avatar: ze, avatarType: ee.avatarType || "char", createdAt: ee.createdAt, provider: "phone" };
        (_.token && su(_.token, rememberDevice), u(Ee, rememberDevice));
      } catch {
        V("登录失败，请稍后重试");
      }
      D(!1);
    },
    R = async (w) => {
      if ((w.preventDefault(), !j)) {
        V("请输入密码");
        return;
      }
      if (j !== C) {
        V("两次输入的密码不一致");
        return;
      }
      if (j.length < 8 || j.length > 16) {
        V("密码必须是8-16位");
        return;
      }
      if (/^\d+$/.test(j)) {
        V("密码不能是纯数字");
        return;
      }
      if (!/[a-zA-Z]/.test(j) || !/\d/.test(j)) {
        V("密码必须包含英文字母和数字");
        return;
      }
      (D(!0), V(""));
      try {
        const x = ru(),
          N = cu(),
          _ = await pe("/api/auth/login", { phone: h, password: j, nickname: x, avatar: N });
        if (_.error) {
          (V(_.error), D(!1));
          return;
        }
        const ee = _.user || _,
          he = h.startsWith("+") ? h : `+${h}`,
          je = ee.nickname || x,
          ze = ee.avatar || N;
        (Te.setItem("moodtree-nickname", je), Te.setItem("moodtree-avatar", ze));
        const Ee = { id: ee.id, phone: he, nickname: je, avatar: ze, avatarType: ee.avatarType || "char", createdAt: ee.createdAt, provider: "phone" };
        (_.token && su(_.token, rememberDevice), u(Ee, rememberDevice));
      } catch {
        V("设置失败，请稍后重试");
      }
      D(!1);
    },
    $ = async (targetStep = "forgotCode") => {
      const w = Gm(h);
      if (!w.valid) {
        V(w.error);
        return;
      }
      (D(!0), V(""));
      try {
        const x = await pe("/api/auth/send-code", { phone: h });
        if (x.error) {
          (V(x.error), D(!1));
          return;
        }
        (P("验证码已发送"), d(targetStep));
      } catch {
        V("发送失败，请稍后重试");
      }
      D(!1);
    },
    verifyLoginCode = async (w) => {
      if ((w.preventDefault(), !T || T.length !== 6)) {
        V("请输入6位验证码");
        return;
      }
      (D(!0), V(""));
      try {
        const x = await pe("/api/auth/verify-code", { phone: h, code: T });
        if (x.error) {
          (V(x.error), D(!1));
          return;
        }
        const N = x.user || x,
          _ = { id: N.id, phone: N.phone || (h.startsWith("+") ? h : `+${h}`), nickname: N.nickname, avatar: N.avatar || cu(), avatarType: N.avatarType || "char", createdAt: N.createdAt, provider: "phone" };
        (x.token && su(x.token, rememberDevice), u(_, rememberDevice));
      } catch {
        V("验证码登录失败，请稍后重试");
      }
      D(!1);
    },
    le = async (w) => {
      if ((w.preventDefault(), !T || T.length !== 6)) {
        V("请输入6位验证码");
        return;
      }
      if (!j) {
        V("请输入新密码");
        return;
      }
      if (j !== C) {
        V("两次输入的密码不一致");
        return;
      }
      if (j.length < 8 || j.length > 16) {
        V("密码必须是8-16位");
        return;
      }
      if (/^\d+$/.test(j)) {
        V("密码不能是纯数字");
        return;
      }
      if (!/[a-zA-Z]/.test(j) || !/\d/.test(j)) {
        V("密码必须包含英文字母和数字");
        return;
      }
      (D(!0), V(""));
      try {
        const x = await pe("/api/auth/reset-password", { phone: h, code: T, newPassword: j });
        if (x.error) {
          (V(x.error), D(!1));
          return;
        }
        (P("密码重置成功，请使用新密码登录"), y(""), S(""), H(""), d("password"));
      } catch {
        V("重置失败，请稍后重试");
      }
      D(!1);
    },
    fe = h.length > 4 ? `${h.slice(0, 2)}****${h.slice(-3)}` : h,
    be = "密码必须是8-16位的英文字母、数字组合（不能是纯数字）";
  return n.jsx("div", {
    className: "login-overlay",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "登录 MoodTree",
    onMouseDown: (w) => {
      w.target === w.currentTarget && r();
    },
    children: n.jsxs("section", {
      className: "login-modal",
      children: [
        n.jsx("button", { className: "login-close", onClick: r, "aria-label": "关闭", children: "×" }),
        n.jsx(xp, {}),
        n.jsxs("div", {
          className: "auth-tabs",
          children: [n.jsx("button", { className: o === "login" ? "active" : "", onClick: () => F("login"), children: "登录" }), n.jsx("button", { className: o === "register" ? "active" : "", onClick: () => F("register"), children: "注册" })],
        }),
        n.jsxs("div", {
          className: "login-copy",
          children: [n.jsx("h2", { children: o === "login" ? "欢迎回到树洞" : "加入 MoodTree" }), n.jsx("p", { children: o === "login" ? "登录信息只用于保护你的内容，社区里仍会显示匿名昵称。" : "注册后即可发布心事、回应他人、结识树洞好友。" })],
        }),
        m === "phone" &&
          n.jsxs("form", {
            className: "phone-form",
            onSubmit: ke,
            children: [
              n.jsx("label", { children: "手机号（含国家代码）" }),
              n.jsxs("div", {
                children: [
                  n.jsx("span", { children: "+" }),
                  n.jsx("input", {
                    inputMode: "tel",
                    maxLength: 15,
                    value: h,
                    onChange: (w) => {
                      (v(w.target.value.replace(/[^\d]/g, "")), V(""));
                    },
                    placeholder: "如 86 13800138000",
                    autoFocus: !0,
                  }),
                ],
              }),
              ye && n.jsxs("p", { style: { fontSize: "10px", color: "#6f917d", margin: "6px 2px 0", fontWeight: 500 }, children: [ye, " · 需", Ce, "位号码", Se > 0 ? `（已输${Se}位）` : ""] }),
              n.jsx("button", { disabled: J, children: J ? "请稍候…" : o === "login" ? "下一步" : "去设置密码" }),
            ],
          }),
        m === "password" &&
          n.jsxs("form", {
            className: "phone-form",
            onSubmit: ue,
            children: [
              n.jsxs("label", { children: ["手机号 +", fe] }),
              n.jsxs("div", {
                className: "code-input",
                style: { position: "relative" },
                children: [
                  n.jsx("input", { type: k ? "text" : "password", value: j, onChange: (w) => y(w.target.value), placeholder: "输入登录密码", autoFocus: !0, style: { paddingRight: "38px" } }),
                  n.jsx("button", {
                    type: "button",
                    onClick: () => X(!k),
                    style: { position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: "16px", padding: "0", lineHeight: 1 },
                    children: k ? "🙈" : "👁️",
                  }),
                ],
              }),
              n.jsx("button", { disabled: J, children: J ? "正在验证…" : "登录并进入树洞" }),
              n.jsx("button", {
                type: "button",
                className: "change-phone",
                style: { color: "#fff" },
                onClick: () => {
                  (d("phone"), y(""), V(""), P(""));
                },
                children: "更换手机号",
              }),
              n.jsx("button", {
                type: "button",
                className: "change-phone",
                style: { color: "#5b8def", background: "transparent", boxShadow: "none" },
                onClick: () => $("smsLoginCode"),
                children: "使用短信验证码登录",
              }),
              n.jsx("button", {
                type: "button",
                className: "change-phone",
                style: { color: "#5b8def", background: "transparent", boxShadow: "none" },
                onClick: () => {
                  (d("forgot"), V(""), P(""), y(""), S(""), H(""));
                },
                children: "忘记密码？",
              }),
            ],
          }),
        m === "smsLoginCode" &&
          n.jsxs("form", {
            className: "phone-form",
            onSubmit: verifyLoginCode,
            children: [
              n.jsxs("label", { children: ["验证码已发送至 +", fe] }),
              de && n.jsx("p", { style: { fontSize: "12px", color: "#5b8def", margin: "6px 0", fontWeight: 500 }, children: de }),
              n.jsx("div", { className: "code-input", children: n.jsx("input", { inputMode: "numeric", maxLength: 6, value: T, onChange: (w) => H(w.target.value.replace(/\D/g, "")), placeholder: "输入6位验证码", autoFocus: !0 }) }),
              n.jsx("button", { disabled: J, children: J ? "正在验证…" : "验证码登录" }),
              n.jsx("button", { type: "button", className: "change-phone", onClick: () => $("smsLoginCode"), children: "重新发送验证码" }),
              n.jsx("button", { type: "button", className: "change-phone", onClick: () => d("password"), children: "使用密码登录" }),
            ],
          }),
        m === "setPassword" &&
          n.jsxs("form", {
            className: "phone-form",
            onSubmit: R,
            children: [
              n.jsxs("label", { children: ["手机号 +", fe] }),
              n.jsx("p", { style: { fontSize: "12px", color: "#6f917d", margin: "6px 0" }, children: de }),
              n.jsx("div", { className: "code-input", children: n.jsx("input", { type: "password", value: j, onChange: (w) => y(w.target.value), placeholder: "设置登录密码", autoFocus: !0 }) }),
              n.jsx("div", { className: "code-input", style: { marginTop: "8px" }, children: n.jsx("input", { type: "password", value: C, onChange: (w) => S(w.target.value), placeholder: "再次输入确认" }) }),
              n.jsx("p", { style: { fontSize: "11px", color: "#8a938c", margin: "6px 0" }, children: be }),
              n.jsx("button", { disabled: J, children: J ? "请稍候…" : "设置并登录" }),
              n.jsx("button", {
                type: "button",
                className: "change-phone",
                onClick: () => {
                  (d("phone"), y(""), S(""), V(""), P(""));
                },
                children: "返回",
              }),
            ],
          }),
        m === "register" &&
          n.jsxs("form", {
            className: "phone-form",
            onSubmit: Oe,
            children: [
              n.jsxs("label", { children: ["手机号 +", fe] }),
              n.jsx("p", { style: { fontSize: "12px", color: "#6f917d", margin: "6px 0" }, children: de }),
              n.jsx("div", { className: "code-input", children: n.jsx("input", { type: "password", value: j, onChange: (w) => y(w.target.value), placeholder: "设置登录密码", autoFocus: !0 }) }),
              n.jsx("div", { className: "code-input", style: { marginTop: "8px" }, children: n.jsx("input", { type: "password", value: C, onChange: (w) => S(w.target.value), placeholder: "再次输入确认" }) }),
              n.jsx("p", { style: { fontSize: "11px", color: "#8a938c", margin: "6px 0" }, children: be }),
              n.jsx("button", { disabled: J, children: J ? "请稍候…" : "注册并进入树洞" }),
              n.jsx("button", {
                type: "button",
                className: "change-phone",
                onClick: () => {
                  (d("phone"), y(""), S(""), V(""), P(""));
                },
                children: "返回",
              }),
            ],
          }),
        m === "forgot" &&
          n.jsxs("form", {
            className: "phone-form",
            onSubmit: (w) => {
              (w.preventDefault(), $());
            },
            children: [
              n.jsx("label", { children: "忘记密码" }),
              n.jsx("p", { style: { fontSize: "12px", color: "#6f917d", margin: "6px 0" }, children: "通过绑定的手机号接收验证码来重置密码" }),
              n.jsxs("div", { children: [n.jsx("span", { children: "+" }), n.jsx("input", { inputMode: "tel", maxLength: 15, value: h, onChange: (w) => v(w.target.value.replace(/[^\d]/g, "")), placeholder: "如 86 13800138000", autoFocus: !0 })] }),
              ye && n.jsxs("p", { style: { fontSize: "10px", color: "#6f917d", margin: "6px 2px 0", fontWeight: 500 }, children: [ye, " · 需", Ce, "位号码"] }),
              n.jsx("button", { disabled: J, children: J ? "发送中…" : "发送验证码" }),
              n.jsx("button", {
                type: "button",
                className: "change-phone",
                onClick: () => {
                  (d("phone"), V(""), P(""));
                },
                children: "返回登录",
              }),
            ],
          }),
        m === "forgotCode" &&
          n.jsxs("form", {
            className: "phone-form",
            onSubmit: le,
            children: [
              n.jsx("label", { children: "重置密码" }),
              de && n.jsx("p", { style: { fontSize: "12px", color: "#5b8def", margin: "6px 0", fontWeight: 500 }, children: de }),
              n.jsx("div", { className: "code-input", children: n.jsx("input", { inputMode: "numeric", maxLength: 6, value: T, onChange: (w) => H(w.target.value.replace(/\D/g, "")), placeholder: "输入6位验证码", autoFocus: !0 }) }),
              n.jsx("div", { className: "code-input", style: { marginTop: "8px" }, children: n.jsx("input", { type: "password", value: j, onChange: (w) => y(w.target.value), placeholder: "设置新密码" }) }),
              n.jsx("div", { className: "code-input", style: { marginTop: "8px" }, children: n.jsx("input", { type: "password", value: C, onChange: (w) => S(w.target.value), placeholder: "再次输入确认" }) }),
              n.jsx("p", { style: { fontSize: "11px", color: "#8a938c", margin: "6px 0" }, children: be }),
              n.jsx("button", { disabled: J, children: J ? "请稍候…" : "重置密码" }),
              n.jsx("button", {
                type: "button",
                className: "change-phone",
                onClick: () => {
                  (d("forgot"), V(""), P(""), H(""), y(""), S(""));
                },
                children: "重新发送",
              }),
            ],
          }),
        o === "login" && n.jsxs("label", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", margin: "12px 0 2px", fontSize: "12px", color: "#6f756f", cursor: "pointer" }, children: [n.jsx("input", { type: "checkbox", checked: rememberDevice, onChange: (w) => setRememberDevice(w.target.checked) }), "记住这台设备（30天免登录）"] }),
        I && n.jsx("p", { className: "login-error", role: "alert", children: I }),
        n.jsxs("p", { className: "login-terms", children: [o === "login" ? "登录" : "注册", "即代表你同意《用户协议》和《隐私政策》"] }),
      ],
    }),
  });
}
function e0({ posts: r, openPost: u, user: o, onSignOut: c, onEditProfile: m, onStartDM: d, flash: h, themeColor: v, setThemeColor: j, onDeletePost: y, onTogglePin: C, onNavigate: S, onEditPost: T, onAvatarClick: H }) {
  var Rn;
  const [k, X] = p.useState("posts"),
    [J, D] = p.useState(Date.now());
  p.useEffect(() => {
    const g = window.setInterval(() => D(Date.now()), 15e3);
    return () => window.clearInterval(g);
  }, []);
  const [I, V] = p.useState(Te.getItem("moodtree-welcome-msg") || ""),
    de = p.useRef(null),
    [P, Y] = p.useState([]),
    [K, F] = p.useState([]),
    [Z, ye] = p.useState([]),
    [Ce, Se] = p.useState(""),
    [ke, Oe] = p.useState(null),
    [ue, R] = p.useState(""),
    [$, le] = p.useState(null),
    [fe, be] = p.useState(!1),
    [w, x] = p.useState(""),
    [N, _] = p.useState(""),
    [ee, he] = p.useState(!1),
    [je, ze] = p.useState(null),
    [Ee, Pe] = p.useState(""),
    [Ve, pt] = p.useState(null),
    [ot, gt] = p.useState(!1),
    [yt, fa] = p.useState(!1),
    [we, st] = p.useState(Kn()),
    [Mt, zt] = p.useState(!1),
    [$e, jt] = p.useState(!1),
    [xa, We] = p.useState(""),
    [It, Xt] = p.useState(!1),
    [Rt, Gt] = p.useState([]),
    Zt = p.useRef(void 0),
    Dt = p.useRef(!1),
    Ya = () => {
      try {
        Gt(JSON.parse(Te.getItem("moodtree-drafts") || "[]"));
      } catch {
        Gt([]);
      }
    };
  p.useEffect(() => {
    Ya();
  }, [k]);
  const Vt = () => {
      try {
        return JSON.parse(Te.getItem("moodtree-pinned-friends") || "[]");
      } catch {
        return [];
      }
    },
    [St, U] = p.useState(Vt()),
    xe = (g) => {
      const ne = St.includes(g) ? St.filter((Be) => Be !== g) : [...St, g];
      (U(ne), Te.setItem("moodtree-pinned-friends", JSON.stringify(ne)), h(ne.includes(g) ? "已置顶好友" : "已取消置顶"));
    },
    ve = (g) => {
      pt(g);
    },
    Qe = (g) => {
      ((Dt.current = !1),
        (Zt.current = window.setTimeout(() => {
          ((Dt.current = !0), ve(g));
        }, 500)));
    },
    Ge = () => {
      Zt.current && clearTimeout(Zt.current);
    },
    Ze = async () => {
      if (
        Ve &&
        confirm(`确定删除好友「${Ve.alias || Ve.nickname}」吗？
将同时清空你们的聊天记录。`)
      )
        try {
          (await pe("/api/friends/delete", { userId: o.id, friendId: Ve.id }), F((ne) => ne.filter((Be) => Be.id !== Ve.id)));
          const g = St.filter((ne) => ne !== Ve.id);
          (U(g), Te.setItem("moodtree-pinned-friends", JSON.stringify(g)), pt(null), h("好友已删除"));
        } catch {
          h("删除失败");
        }
    },
    Fe = [...K].sort((g, ne) => {
      const Be = St.includes(g.id) ? 1 : 0;
      return (St.includes(ne.id) ? 1 : 0) - Be;
    }),
    me = r
      .filter((g) => g.mine)
      .sort((g, ne) => {
        const Be = g.pinned ? 1 : 0,
          Ca = ne.pinned ? 1 : 0;
        return Be !== Ca ? Ca - Be : 0;
      }),
    $t = r.filter((g) => g.saved);
  p.useEffect(() => {
    (qe(`/api/diaries/${o.id}`)
      .then((g) => Y(g.diaries || []))
      .catch(() => {}),
      qe(`/api/friends/${o.id}`)
        .then((g) => F(g.friends || []))
        .catch(() => {}),
      qe(`/api/friends/requests/${o.id}`)
        .then((g) => ye(g.requests || []))
        .catch(() => {}));
  }, [o.id]);
  const [xt, Kt] = p.useState([]),
    [Jt, ca] = p.useState(!1),
    [ha, va] = p.useState([]),
    [O, M] = p.useState(null),
    [Q, oe] = p.useState(!1),
    [Ne, De] = p.useState(""),
    [Ue, _e] = p.useState(null),
    [Le, rt] = p.useState(null),
    ht = r.flatMap((g) => (g.comments || []).filter((ne) => ne.authorId && ne.authorId === o.id).map((ne) => ({ post: g, comment: ne }))),
    Nt = () => {
      qe(`/api/collections/${o.id}`)
        .then((g) => va(g.collections || []))
        .catch(() => {});
    };
  (p.useEffect(() => {
    k === "collections" && Nt();
  }, [k, o.id]),
    p.useEffect(() => {
      k === "visitors" &&
        (qe(`/api/user/visitors?userid=${o.id}`)
          .then((g) => {
            (Kt(g.visitors || []), ca(!!g.hidden));
          })
          .catch(() => {}),
        qe(`/api/user/footprint?userid=${o.id}`)
          .then((g) => ca(!!g.hideFootprint))
          .catch(() => {}));
    }, [k, o.id]));
  const ba = async () => {
      if (!Ne.trim()) {
        h("给合集起个名字吧");
        return;
      }
      try {
        const g = await pe("/api/collections", { userId: o.id, name: Ne.trim() });
        if (g.error) {
          h(g.error);
          return;
        }
        (oe(!1), De(""), Nt(), h("合集已创建"));
      } catch {
        h("创建失败，请重试");
      }
    },
    se = async () => {
      if (!(!Ue || !Ne.trim()))
        try {
          const g = await pe(`/api/collections/${Ue.id}/update`, { userId: o.id, name: Ne.trim() });
          if (g.error) {
            h(g.error);
            return;
          }
          (_e(null), De(""), Nt(), (O == null ? void 0 : O.id) === Ue.id && M((ne) => ne && { ...ne, name: Ne.trim() }), h("已重命名"));
        } catch {
          h("重命名失败");
        }
    },
    ge = async (g) => {
      if (confirm(`确定删除合集「${g.name}」吗？合集内的帖子不会被删除。`))
        try {
          const ne = await pe(`/api/collections/${g.id}/delete`, { userId: o.id });
          if (ne.error) {
            h(ne.error);
            return;
          }
          ((O == null ? void 0 : O.id) === g.id && M(null), Nt(), h("合集已删除"));
        } catch {
          h("删除失败");
        }
    },
    Ae = async (g, ne) => {
      try {
        const Be = await pe(`/api/collections/${g.id}/update`, { userId: o.id, addPostId: ne });
        return Be.error ? (h(Be.error), !1) : (Nt(), (O == null ? void 0 : O.id) === g.id && M(Be.collection), !0);
      } catch {
        return (h("操作失败"), !1);
      }
    },
    ct = async (g, ne) => {
      try {
        const Be = await pe(`/api/collections/${g.id}/update`, { userId: o.id, removePostId: ne });
        if (Be.error) {
          h(Be.error);
          return;
        }
        (Nt(), (O == null ? void 0 : O.id) === g.id && M(Be.collection), h("已移出合集"));
      } catch {
        h("操作失败");
      }
    },
    Wt = async (g) => {
      ca(g);
      try {
        (await pe("/api/user/footprint", { userId: o.id, hideFootprint: g }), h(g ? "足迹已关闭：你看别人不留痕，也看不到谁看过你" : "足迹已开启"), g && Kt([]));
      } catch {
        (ca(!g), h("设置失败"));
      }
    },
    xn = (g) => {
      (V(g),
        g.trim() ? Te.setItem("moodtree-welcome-msg", g.trim()) : Te.removeItem("moodtree-welcome-msg"),
        de.current && clearTimeout(de.current),
        (de.current = setTimeout(() => {
          pe("/api/user/profile", { userId: o.id, welcomeMsg: g.trim() }).catch(() => {});
        }, 800)));
    },
    Wa = async () => {
      if (Ce.trim())
        try {
          const g = await qe(`/api/user/search?query=${encodeURIComponent(Ce.trim())}`);
          Oe(g.user || null);
        } catch {
          h("搜索失败");
        }
    },
    qa = async (g) => {
      try {
        (await pe("/api/friends/request", { from: o.id, to: g, message: ue.trim() }), h("好友请求已发送"), Oe(null), Se(""), R(""));
      } catch {
        h("发送失败");
      }
    },
    Dn = async (g) => {
      try {
        (await pe("/api/friends/accept", { from: g, to: o.id }), ye((ne) => ne.filter((Be) => Be.from !== g)), F((ne) => [...ne, Z.find((Be) => Be.from === g)].filter(Boolean)), h("已添加好友"));
      } catch {
        h("操作失败");
      }
    },
    vn = async (g) => {
      try {
        (await pe("/api/friends/decline", { from: g, to: o.id }), ye((ne) => ne.filter((Be) => Be.from !== g)));
      } catch {
        h("操作失败");
      }
    },
    Qt = async () => {
      if (je)
        try {
          (await pe("/api/friends/alias", { userId: o.id, friendId: je.id, alias: Ee }), F((g) => g.map((ne) => (ne.id === je.id ? { ...ne, alias: Ee.trim() } : ne))), h(Ee.trim() ? "备注已更新" : "备注已清除"), ze(null), Pe(""));
        } catch {
          h("设置备注失败");
        }
    },
    Pi = async (g) => {
      he(!0);
      try {
        const ne = await Us(g);
        _(ne);
      } catch {
        h("封面上传失败");
      }
      he(!1);
    },
    el = async () => {
      if (w.trim())
        try {
          await pe("/api/diaries", { userId: o.id, name: w.trim(), cover: N });
          const g = await qe(`/api/diaries/${o.id}`);
          (Y(g.diaries || []), be(!1), x(""), _(""), h("日记本已创建"));
        } catch {
          h("创建失败");
        }
    },
    Xa = () => {
      (Wi(o.id), h("ID已复制"));
    },
    [on, Hl] = p.useState(!1),
    [wi, Ci] = p.useState(!1),
    [oa, bn] = p.useState(null),
    [An, Ma] = p.useState(null),
    [ma, Ti] = p.useState(() => Te.getItem("mt-hide-violations") === "true"),
    [Ll, Jn] = p.useState(""),
    [ki, un] = p.useState(!1),
    [tl, ua] = p.useState(""),
    [Ot, yn] = p.useState(""),
    [jn, Da] = p.useState(""),
    [Mi, wt] = p.useState(""),
    [dn, Fa] = p.useState(""),
    [zi, Aa] = p.useState(!1),
    [Sn, Wn] = p.useState(!1),
    [Fn, z] = p.useState(""),
    [te, ce] = p.useState(""),
    Xe = async () => {
      if ((wt(""), Fa(""), !Ot)) {
        wt("请输入新密码");
        return;
      }
      if (Ot !== jn) {
        wt("两次输入的密码不一致");
        return;
      }
      if (Ot.length < 8 || Ot.length > 16) {
        wt("密码必须是8-16位");
        return;
      }
      if (/^\d+$/.test(Ot)) {
        wt("密码不能是纯数字");
        return;
      }
      if (!/[a-zA-Z]/.test(Ot) || !/\d/.test(Ot)) {
        wt("密码必须包含英文字母和数字");
        return;
      }
      Aa(!0);
      try {
        const g = await pe("/api/auth/set-password", { userId: o.id, oldPassword: tl, newPassword: Ot });
        if (g.error) {
          (wt(g.error), Aa(!1));
          return;
        }
        (Fa("密码设置成功！"),
          ua(""),
          yn(""),
          Da(""),
          setTimeout(() => {
            (un(!1), Fa(""));
          }, 1500));
      } catch {
        wt("网络错误，请稍后重试");
      }
      Aa(!1);
    },
    ut = async () => {
      if ((wt(""), Fa(""), ce(""), !o.phone)) {
        wt("无法获取手机号");
        return;
      }
      Aa(!0);
      try {
        const g = o.phone.startsWith("+") ? o.phone.slice(1) : o.phone,
          ne = await pe("/api/auth/send-code", { phone: g });
        if (ne.error) {
          (wt(ne.error), Aa(!1));
          return;
        }
        (ce(ne.code ? `验证码：${ne.code}（开发模式直接显示）` : "验证码已发送"), Wn(!0));
      } catch {
        wt("发送失败，请稍后重试");
      }
      Aa(!1);
    },
    aa = async () => {
      if ((wt(""), Fa(""), !Fn || Fn.length !== 6)) {
        wt("请输入6位验证码");
        return;
      }
      if (!Ot) {
        wt("请输入新密码");
        return;
      }
      if (Ot !== jn) {
        wt("两次输入的密码不一致");
        return;
      }
      if (Ot.length < 8 || Ot.length > 16) {
        wt("密码必须是8-16位");
        return;
      }
      if (/^\d+$/.test(Ot)) {
        wt("密码不能是纯数字");
        return;
      }
      if (!/[a-zA-Z]/.test(Ot) || !/\d/.test(Ot)) {
        wt("密码必须包含英文字母和数字");
        return;
      }
      Aa(!0);
      try {
        const g = o.phone.startsWith("+") ? o.phone.slice(1) : o.phone,
          ne = await pe("/api/auth/reset-password", { phone: g, code: Fn, newPassword: Ot });
        if (ne.error) {
          (wt(ne.error), Aa(!1));
          return;
        }
        (Fa("密码重置成功！"),
          Wn(!1),
          ua(""),
          yn(""),
          Da(""),
          z(""),
          ce(""),
          setTimeout(() => {
            (un(!1), Fa(""));
          }, 1500));
      } catch {
        wt("网络错误，请稍后重试");
      }
      Aa(!1);
    },
    wa = () => {
      (un(!1), ua(""), yn(""), Da(""), wt(""), Fa(""), Wn(!1), z(""), ce(""));
    };
  (p.useEffect(() => {
    o != null &&
      o.id &&
      (qe(`/api/admin/check?userId=${o.id}`)
        .then((g) => {
          (Hl(!!g.isAdmin), Ci(!!g.isSuperAdmin));
        })
        .catch(() => {}),
      qe(`/api/user/${o.id}`)
        .then((g) => {
          var ne, Be;
          ((ne = g.user) != null && ne.birthday && Jn(g.user.birthday),
            ((Be = g.user) == null ? void 0 : Be.welcomeMsg) !== void 0 && (V(g.user.welcomeMsg || ""), g.user.welcomeMsg ? Te.setItem("moodtree-welcome-msg", g.user.welcomeMsg) : Te.removeItem("moodtree-welcome-msg")));
        })
        .catch(() => {}));
  }, [o == null ? void 0 : o.id]),
    p.useEffect(() => {
      !(o != null && o.id) ||
        k !== "settings" ||
        qe(`/api/user/violations?userid=${o.id}`)
          .then(bn)
          .catch(() => {});
    }, [o == null ? void 0 : o.id, k]));
  const Nn = [
    ["posts", "我的帖子", "✎"],
    ["drafts", "草稿箱", "○"],
    ["saved", "我的收藏", "☆"],
    ["collections", "合集", "□"],
    ["diaries", "日记本", "≡"],
    ["myComments", "我的评论", "◇"],
    ["visitors", "谁看过我", "⊙"],
    ["friends", "好友", "♡"],
    ["memory", "回忆", "◈"],
    ["settings", "设置", "⚙"],
    ["blacklist", "黑名单", "⊘"],
    ...(on ? [["admin", "管理面板", "◈"]] : []),
  ];
  return n.jsxs("div", {
    className: "page-wrap mine-wrap",
    children: [
      n.jsxs("section", {
        className: "profile-card",
        children: [
          n.jsx(qt, { user: o, size: 66 }),
          n.jsxs("div", {
            children: [
              n.jsx("span", { children: "MY MOODTREE" }),
              n.jsx("h1", { children: o.nickname }),
              n.jsx("div", {
                className: "id-row",
                children: n.jsxs("span", {
                  className: "id-badge",
                  onClick: Xa,
                  children: [
                    o.id,
                    " ",
                    n.jsxs("svg", {
                      viewBox: "0 0 24 24",
                      width: "14",
                      height: "14",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      style: { verticalAlign: "middle", marginLeft: 2 },
                      children: [n.jsx("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }), n.jsx("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })],
                    }),
                  ],
                }),
              }),
            ],
          }),
          n.jsxs("div", { className: "profile-actions", children: [n.jsx("button", { onClick: m, children: "编辑资料" }), n.jsx("button", { onClick: c, children: "退出" })] }),
        ],
      }),
      n.jsxs("div", {
        className: "mine-layout",
        children: [
          n.jsx("aside", {
            children: Nn.map(([g, ne, Be]) =>
              n.jsxs(
                "button",
                {
                  className: k === g ? "active" : "",
                  onClick: () => {
                    (X(g), le(null));
                  },
                  children: [n.jsx("span", { children: Be }), ne, g === "friends" && Z.length > 0 && n.jsx("span", { className: "friend-badge", children: Z.length })],
                },
                g,
              ),
            ),
          }),
          n.jsx("section", {
            className: "mine-content",
            children:
              k === "diaries" && $
                ? n.jsxs(n.Fragment, {
                    children: [
                      n.jsx("div", { className: "mine-title", children: n.jsx("button", { className: "back-button", onClick: () => le(null), children: "← 返回" }) }),
                      n.jsxs("div", {
                        className: "diary-header",
                        children: [
                          $.cover && n.jsx("img", { src: $.cover, alt: "", className: "diary-header-cover", loading: "lazy" }),
                          n.jsxs("div", { children: [n.jsx("h2", { children: $.name }), n.jsxs("p", { children: [((Rn = $.posts) == null ? void 0 : Rn.length) || 0, " 篇心事"] })] }),
                        ],
                      }),
                      n.jsx("div", {
                        className: "mine-list",
                        children: ($.posts || []).map((g) =>
                          n.jsxs(
                            "button",
                            {
                              onClick: () => u(g.id),
                              children: [
                                n.jsx("span", {
                                  className: "tag-group",
                                  children: (g.category || "")
                                    .split(", ")
                                    .filter(Boolean)
                                    .map((ne, Be) => n.jsx("span", { className: `tag tag-${ne}`, children: ne }, Be)),
                                }),
                                n.jsxs("div", { children: [n.jsx("h3", { children: g.title }), n.jsx("p", { children: g.content }), n.jsx("small", { children: g.time })] }),
                                n.jsx("b", { children: "›" }),
                              ],
                            },
                            g.id,
                          ),
                        ),
                      }),
                      ($.posts || []).length === 0 && n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "📖" }), n.jsx("h3", { children: "日记本还是空的" }), n.jsx("p", { children: "发帖时选择添加到这个日记本吧" })] }),
                    ],
                  })
                : n.jsxs(n.Fragment, {
                    children: [
                      n.jsxs("div", {
                        className: "mine-title",
                        children: [
                          n.jsxs("div", {
                            children: [
                              n.jsx("h2", {
                                children:
                                  k === "posts"
                                    ? "我的帖子"
                                    : k === "drafts"
                                      ? "草稿箱"
                                      : k === "saved"
                                        ? "我的收藏"
                                        : k === "collections"
                                          ? "我的合集"
                                          : k === "diaries"
                                            ? "日记本"
                                            : k === "myComments"
                                              ? "我的评论"
                                              : k === "visitors"
                                                ? "谁看过我"
                                                : k === "friends"
                                                  ? "好友"
                                                  : k === "blacklist"
                                                    ? "黑名单"
                                                    : k === "admin"
                                                      ? "管理面板"
                                                      : k === "memory"
                                                        ? "我的回忆"
                                                        : "设置",
                              }),
                              n.jsx("p", {
                                children:
                                  k === "posts"
                                    ? "记录那些被树洞接住的心事"
                                    : k === "drafts"
                                      ? "未完成的心事，随时继续"
                                      : k === "saved"
                                        ? "留住让你感到共鸣的片刻"
                                        : k === "collections"
                                          ? "把好作品整理成集，随时翻看"
                                          : k === "diaries"
                                            ? "把心事整理成册"
                                            : k === "myComments"
                                              ? "你送出的每一份温暖"
                                              : k === "visitors"
                                                ? "看看谁来过你的树洞"
                                                : k === "friends"
                                                  ? "通过ID找到同频的人"
                                                  : k === "blacklist"
                                                    ? "管理你拉黑的用户"
                                                    : k === "admin"
                                                      ? "管理社区举报与封禁"
                                                      : k === "memory"
                                                        ? "像翻看日记一样，回望你在树洞留下的足迹"
                                                        : "照顾好你的使用感受",
                              }),
                            ],
                          }),
                          n.jsx("span", {
                            children:
                              k === "posts"
                                ? me.length
                                : k === "drafts"
                                  ? Rt.length
                                  : k === "saved"
                                    ? $t.length
                                    : k === "collections"
                                      ? ha.length
                                      : k === "diaries"
                                        ? P.length
                                        : k === "myComments"
                                          ? ht.length
                                          : k === "visitors"
                                            ? xt.length
                                            : k === "friends"
                                              ? K.length
                                              : "",
                          }),
                        ],
                      }),
                      k === "drafts" &&
                        n.jsx(n.Fragment, {
                          children:
                            Rt.length > 0
                              ? n.jsx("div", {
                                  className: "mine-list",
                                  children: Rt.map((g) =>
                                    n.jsxs(
                                      "div",
                                      {
                                        className: "mine-post-item",
                                        children: [
                                          n.jsx("div", {
                                            className: "mine-post-main",
                                            style: { cursor: "default" },
                                            children: n.jsxs("div", {
                                              children: [n.jsx("h3", { children: g.title || "（无标题）" }), n.jsx("p", { children: (g.content || "").slice(0, 100) }), n.jsx("small", { children: new Date(g.timestamp).toLocaleString("zh-CN") })],
                                            }),
                                          }),
                                          n.jsxs("div", {
                                            className: "mine-post-actions",
                                            children: [
                                              n.jsx("button", {
                                                className: "mine-action-btn pin-btn",
                                                onClick: () => {
                                                  (Te.setItem("moodtree-restore-draft", JSON.stringify(g)), S("publish"));
                                                },
                                                children: "继续编辑",
                                              }),
                                              n.jsx("button", {
                                                className: "mine-action-btn delete-btn",
                                                onClick: () => {
                                                  if (confirm("确定删除这个草稿吗？")) {
                                                    const ne = Rt.filter((Be) => Be.id !== g.id);
                                                    (Te.setItem("moodtree-drafts", JSON.stringify(ne)), Gt(ne), h("草稿已删除"));
                                                  }
                                                },
                                                children: "删除",
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      g.id,
                                    ),
                                  ),
                                })
                              : n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "✎" }), n.jsx("h3", { children: "草稿箱是空的" }), n.jsx("p", { children: '在写心事时点击"存草稿"，未完成的内容会保存在这里' })] }),
                        }),
                      k === "myComments" &&
                        n.jsx(n.Fragment, {
                          children: ht.length
                            ? n.jsx("div", {
                                className: "mine-list",
                                children: ht.map(({ post: g, comment: ne }) =>
                                  n.jsx(
                                    "div",
                                    {
                                      className: "mine-post-item",
                                      children: n.jsxs("button", {
                                        className: "mine-post-main",
                                        onClick: () => u(g.id),
                                        children: [
                                          n.jsxs("div", { children: [n.jsxs("h3", { children: ["回复「", g.title || "无标题", "」"] }), n.jsx("p", { children: ne.text }), n.jsx("small", { children: zu(ne) })] }),
                                          n.jsx("b", { children: "›" }),
                                        ],
                                      }),
                                    },
                                    ne.id + g.id,
                                  ),
                                ),
                              })
                            : n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "💬" }), n.jsx("h3", { children: "还没有评论过" }), n.jsx("p", { children: "去别人的树洞里送上第一句温暖吧。" })] }),
                        }),
                      k === "visitors" &&
                        n.jsxs(n.Fragment, {
                          children: [
                            n.jsxs("div", {
                              className: "settings-item",
                              style: { cursor: "default" },
                              children: [
                                n.jsxs("span", { children: [n.jsx("b", { children: "👣 浏览足迹" }), n.jsx("small", { children: Jt ? "已关闭：你看别人不留痕，也看不到访客" : "开启中：你看过的帖子会留下足迹" })] }),
                                n.jsx("input", { type: "checkbox", checked: !Jt, onChange: (g) => Wt(!g.target.checked), style: { cursor: "pointer" } }),
                              ],
                            }),
                            Jt
                              ? n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "🫥" }), n.jsx("h3", { children: "足迹已关闭" }), n.jsx("p", { children: "开启后即可看到谁来过你的树洞。" })] })
                              : xt.length
                                ? n.jsx("div", {
                                    className: "mine-list",
                                    children: xt.map((g, ne) =>
                                      n.jsx(
                                        "div",
                                        {
                                          className: "mine-post-item",
                                          children: n.jsxs("button", {
                                            className: "mine-post-main",
                                            onClick: () => u(g.postId),
                                            children: [
                                              n.jsx("span", { className: "id-badge", style: { cursor: "default" }, children: g.avatar || "云" }),
                                              n.jsxs("div", { children: [n.jsx("h3", { children: g.nickname }), n.jsxs("p", { children: ["看了你的心事「", g.postTitle || "无标题", "」"] }), n.jsx("small", { children: g.time })] }),
                                              n.jsx("b", { children: "›" }),
                                            ],
                                          }),
                                        },
                                        g.userId + g.postId + ne,
                                      ),
                                    ),
                                  })
                                : n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "🌿" }), n.jsx("h3", { children: "还没有访客" }), n.jsx("p", { children: "有人看过你的心事后，会出现在这里。" })] }),
                          ],
                        }),
                      k === "collections" &&
                        (O
                          ? n.jsxs(n.Fragment, {
                              children: [
                                n.jsx("div", { className: "mine-title", style: { marginBottom: 8 }, children: n.jsx("button", { className: "back-button", onClick: () => M(null), children: "← 返回合集列表" }) }),
                                n.jsx("div", { className: "diary-header", children: n.jsxs("div", { children: [n.jsx("h2", { children: O.name }), n.jsxs("p", { children: [(O.posts || []).length, " 篇心事"] })] }) }),
                                n.jsxs("div", {
                                  className: "mine-post-actions",
                                  style: { marginBottom: 10 },
                                  children: [
                                    n.jsx("button", {
                                      className: "mine-action-btn pin-btn",
                                      onClick: () => {
                                        (_e(O), De(O.name));
                                      },
                                      children: "重命名",
                                    }),
                                    n.jsx("button", { className: "mine-action-btn edit-btn", onClick: () => rt(O), children: "＋ 收录帖子" }),
                                    n.jsx("button", { className: "mine-action-btn delete-btn", onClick: () => ge(O), children: "删除合集" }),
                                  ],
                                }),
                                (O.posts || []).length
                                  ? n.jsx("div", {
                                      className: "mine-list",
                                      children: (O.posts || []).map((g) => {
                                        var ne, Be;
                                        return n.jsxs(
                                          "div",
                                          {
                                            className: "mine-post-item",
                                            children: [
                                              n.jsxs("button", {
                                                className: "mine-post-main",
                                                onClick: () => u(g.id),
                                                children: [
                                                  ((ne = g.images) != null && ne.length) || g.coverImage
                                                    ? n.jsx("img", { src: (g.images && g.images[0]) || g.coverImage, alt: "", loading: "lazy", style: { width: 56, height: 56, objectFit: "cover", borderRadius: 12, flex: "0 0 56px" } })
                                                    : (Be = g.videos) != null && Be.length
                                                      ? n.jsx("span", { className: "video-thumb-fallback", children: "🎬" })
                                                      : null,
                                                  n.jsxs("div", { children: [n.jsx("h3", { children: g.title }), n.jsx("p", { children: g.content }), n.jsxs("small", { children: [g.time, " · ♡ ", g.likes || 0] })] }),
                                                  n.jsx("b", { children: "›" }),
                                                ],
                                              }),
                                              n.jsx("div", { className: "mine-post-actions", children: n.jsx("button", { className: "mine-action-btn delete-btn", onClick: () => ct(O, g.id), children: "移出合集" }) }),
                                            ],
                                          },
                                          g.id,
                                        );
                                      }),
                                    })
                                  : n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "🗂" }), n.jsx("h3", { children: "合集还是空的" }), n.jsx("p", { children: "点上方「收录帖子」，把你的好作品放进来。" })] }),
                              ],
                            })
                          : n.jsxs(n.Fragment, {
                              children: [
                                n.jsx("div", {
                                  className: "mine-post-actions",
                                  style: { marginBottom: 10 },
                                  children: n.jsx("button", {
                                    className: "mine-action-btn pin-btn",
                                    onClick: () => {
                                      (oe(!0), De(""));
                                    },
                                    children: "＋ 新建合集",
                                  }),
                                }),
                                ha.length
                                  ? n.jsx("div", {
                                      className: "mine-list",
                                      children: ha.map((g) =>
                                        n.jsx(
                                          "div",
                                          {
                                            className: "mine-post-item",
                                            children: n.jsxs("button", {
                                              className: "mine-post-main",
                                              onClick: () => M(g),
                                              children: [
                                                n.jsxs("div", { children: [n.jsxs("h3", { children: ["🗂 ", g.name] }), n.jsxs("p", { children: [(g.posts || []).length, " 篇心事"] }), n.jsx("small", { children: g.createdAt })] }),
                                                n.jsx("b", { children: "›" }),
                                              ],
                                            }),
                                          },
                                          g.id,
                                        ),
                                      ),
                                    })
                                  : n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "🗂" }), n.jsx("h3", { children: "还没有合集" }), n.jsx("p", { children: "新建一个合集，把好作品整理在一起。" })] }),
                              ],
                            })),
                      (k === "posts" || k === "saved") &&
                        ((k === "posts" ? me : $t).length
                          ? n.jsx("div", {
                              className: "mine-list",
                              children: (k === "posts" ? me : $t).map((g) => {
                                var ne, Be;
                                return n.jsxs(
                                  "div",
                                  {
                                    className: "mine-post-item",
                                    children: [
                                      n.jsxs("button", {
                                        className: "mine-post-main",
                                        onClick: () => u(g.id),
                                        children: [
                                          ((ne = g.images) != null && ne.length) || g.coverImage
                                            ? n.jsx("img", { src: (g.images && g.images[0]) || g.coverImage, alt: "", loading: "lazy", style: { width: 56, height: 56, objectFit: "cover", borderRadius: 12, flex: "0 0 56px" } })
                                            : (Be = g.videos) != null && Be.length
                                              ? n.jsx("span", { className: "video-thumb-fallback", children: "🎬" })
                                              : null,
                                          n.jsxs("span", {
                                            className: "tag-group",
                                            children: [
                                              (g.category || "")
                                                .split(", ")
                                                .filter(Boolean)
                                                .map((Ca, Ga) => n.jsx("span", { className: `tag tag-${Ca}`, children: Ca }, Ga)),
                                              g.pinned && k === "posts" && n.jsx("span", { className: "tag tag-pinned", children: "📌 置顶" }),
                                            ],
                                          }),
                                          n.jsxs("div", {
                                            children: [n.jsx("h3", { children: g.title }), n.jsx("p", { children: g.content }), n.jsxs("small", { children: [g.time, g.edited_at ? " · 已编辑" : "", " · ♡ ", g.likes, " · 抱 ", g.hugs] })],
                                          }),
                                          n.jsx("b", { children: "›" }),
                                        ],
                                      }),
                                      k === "posts" &&
                                        n.jsxs("div", {
                                          className: "mine-post-actions",
                                          children: [
                                            n.jsx("button", { className: "mine-action-btn pin-btn", onClick: () => C(g.id), children: g.pinned ? "取消置顶" : "置顶" }),
                                            J > 0 && ju(g) > 0 && T && n.jsxs("button", { className: "mine-action-btn edit-btn", onClick: () => T(g), children: ["编辑 ", n.jsx("small", { children: pp(ju(g)) })] }),
                                            n.jsx("button", {
                                              className: "mine-action-btn delete-btn",
                                              onClick: () => {
                                                confirm("确定删除这条帖子吗？删除后不可恢复。") && y(g.id);
                                              },
                                              children: "删除",
                                            }),
                                          ],
                                        }),
                                    ],
                                  },
                                  g.id,
                                );
                              }),
                            })
                          : n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "🌿" }), n.jsx("h3", { children: k === "saved" ? "还没有收藏" : "还没有写下心事" }), n.jsx("p", { children: "你想留住的温暖，会出现在这里。" })] })),
                      k === "diaries" &&
                        n.jsxs(n.Fragment, {
                          children: [
                            n.jsx("button", { className: "create-diary-btn", onClick: () => be(!fe), children: "＋ 创建新日记本" }),
                            fe &&
                              n.jsxs("div", {
                                className: "create-diary-form",
                                children: [
                                  n.jsx("input", { value: w, onChange: (g) => x(g.target.value), placeholder: "日记本名称", maxLength: 20 }),
                                  N
                                    ? n.jsxs("div", { className: "cover-preview small", children: [n.jsx("img", { src: N, alt: "" }), n.jsx("button", { onClick: () => _(""), children: "移除" })] })
                                    : n.jsxs("label", {
                                        className: "cover-upload-btn",
                                        children: [
                                          ee ? "上传中…" : "＋ 封面图（可选）",
                                          n.jsx("input", {
                                            type: "file",
                                            accept: "image/*",
                                            style: { display: "none" },
                                            onChange: (g) => {
                                              var Be;
                                              const ne = (Be = g.target.files) == null ? void 0 : Be[0];
                                              ne && Pi(ne);
                                            },
                                          }),
                                        ],
                                      }),
                                  n.jsx("button", { className: "primary", onClick: el, disabled: !w.trim(), children: "创建" }),
                                ],
                              }),
                            n.jsx("div", {
                              className: "diary-grid",
                              children: P.map((g) => {
                                var ne;
                                return n.jsxs(
                                  "div",
                                  {
                                    className: "diary-card",
                                    onClick: () => {
                                      le(g);
                                    },
                                    children: [
                                      g.cover ? n.jsx("div", { className: "diary-cover", style: { backgroundImage: `url(${g.cover})` } }) : n.jsx("div", { className: "diary-cover diary-cover-placeholder", children: "📖" }),
                                      n.jsxs("div", { className: "diary-info", children: [n.jsx("h3", { children: g.name }), n.jsxs("span", { children: [((ne = g.posts) == null ? void 0 : ne.length) || 0, " 篇"] })] }),
                                    ],
                                  },
                                  g.id,
                                );
                              }),
                            }),
                            P.length === 0 && n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "📖" }), n.jsx("h3", { children: "还没有日记本" }), n.jsx("p", { children: "把心事整理成册，随时翻看" })] }),
                          ],
                        }),
                      k === "friends" &&
                        n.jsxs(n.Fragment, {
                          children: [
                            n.jsxs("div", {
                              className: "friend-search-bar",
                              children: [
                                n.jsx("input", {
                                  value: Ce,
                                  onChange: (g) => Se(g.target.value),
                                  placeholder: "输入MT ID搜索用户",
                                  onKeyDown: (g) => {
                                    g.key === "Enter" && Wa();
                                  },
                                }),
                                n.jsx("button", { onClick: Wa, children: "搜索" }),
                              ],
                            }),
                            ke && n.jsxs("div", { className: "friend-search-result", children: [n.jsx(qt, { user: ke, size: 42 }), n.jsxs("div", { children: [n.jsx("b", { children: ke.nickname }), n.jsx("small", { children: ke.id })] })] }),
                            ke &&
                              n.jsxs("div", {
                                className: "friend-req-msg-bar",
                                children: [
                                  n.jsx("input", {
                                    value: ue,
                                    onChange: (g) => R(g.target.value),
                                    placeholder: "写一句话让对方认识你（选填）",
                                    maxLength: 50,
                                    onKeyDown: (g) => {
                                      g.key === "Enter" && qa(ke.id);
                                    },
                                  }),
                                  n.jsx("button", { onClick: () => qa(ke.id), children: "发送申请" }),
                                ],
                              }),
                            Z.length > 0 &&
                              n.jsxs("div", {
                                className: "friend-section",
                                children: [
                                  n.jsx("h3", { children: "好友请求" }),
                                  Z.map((g) =>
                                    n.jsxs(
                                      "div",
                                      {
                                        className: "friend-item",
                                        children: [
                                          n.jsx(qt, { user: g, size: 42 }),
                                          n.jsxs("div", {
                                            className: "friend-req-info",
                                            children: [
                                              n.jsxs("div", { className: "friend-req-header", children: [n.jsx("b", { children: g.nickname }), n.jsx("small", { children: g.from })] }),
                                              g.message && n.jsx("p", { className: "friend-req-message", children: g.message }),
                                            ],
                                          }),
                                          n.jsxs("div", {
                                            className: "friend-actions",
                                            children: [n.jsx("button", { className: "accept", onClick: () => Dn(g.from), children: "接受" }), n.jsx("button", { className: "decline", onClick: () => vn(g.from), children: "拒绝" })],
                                          }),
                                        ],
                                      },
                                      g.from,
                                    ),
                                  ),
                                ],
                              }),
                            n.jsxs("div", {
                              className: "friend-section",
                              children: [
                                n.jsxs("h3", { children: ["我的好友 (", K.length, ")"] }),
                                K.length
                                  ? Fe.map((g) =>
                                      n.jsx(
                                        "div",
                                        {
                                          className: `friend-item ${St.includes(g.id) ? "pinned" : ""}`,
                                          style: { cursor: "pointer", display: "flex", alignItems: "center" },
                                          onClick: () => d(g),
                                          children: n.jsxs("div", {
                                            onClick: (ne) => {
                                              if ((ne.stopPropagation(), Dt.current)) {
                                                Dt.current = !1;
                                                return;
                                              }
                                              H && H(g.id);
                                            },
                                            onTouchStart: () => Qe(g),
                                            onTouchEnd: Ge,
                                            onTouchMove: Ge,
                                            onContextMenu: (ne) => {
                                              (ne.preventDefault(), ve(g));
                                            },
                                            style: { cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" },
                                            children: [
                                              n.jsx(qt, { user: g, size: 42 }),
                                              St.includes(g.id) && n.jsx("span", { className: "pin-indicator", children: "📌" }),
                                              n.jsxs("div", {
                                                className: "friend-info-text",
                                                children: [n.jsx("b", { children: g.alias || g.nickname }), g.alias && n.jsxs("small", { className: "friend-origin-name", children: ["原昵称: ", g.nickname] }), n.jsx("small", { children: g.id })],
                                              }),
                                            ],
                                          }),
                                        },
                                        g.id,
                                      ),
                                    )
                                  : n.jsxs("div", { className: "empty compact", children: [n.jsx("span", { children: "🌱" }), n.jsx("h3", { children: "还没有好友" }), n.jsx("p", { children: "通过ID搜索添加同频的人吧" })] }),
                              ],
                            }),
                          ],
                        }),
                      k === "memory" && n.jsx(u0, { userId: o.id, flash: h, openPost: u }),
                      k === "settings" &&
                        n.jsxs("div", {
                          className: "settings-list",
                          children: [
                            we.enabled &&
                              gn(we) === "night" &&
                              (we.nightRadio || we.breathing) &&
                              n.jsxs("div", {
                                className: "dn-quick-bar",
                                children: [
                                  we.nightRadio &&
                                    n.jsx("button", {
                                      className: "dn-quick-btn",
                                      onClick: async () => {
                                        (jt(!0), Xt(!0), We(""));
                                        try {
                                          const g = await pe("/api/ai/night-radio", { userId: o.id });
                                          We(g.quote || "夜深了，今天的你辛苦了。");
                                        } catch {
                                          We("夜深了，今天的你辛苦了。");
                                        }
                                        Xt(!1);
                                      },
                                      children: "📻 晚安电台",
                                    }),
                                  we.breathing && n.jsx("button", { className: "dn-quick-btn", onClick: () => zt(!0), children: "🫁 助眠呼吸" }),
                                ],
                              }),
                            n.jsxs("label", {
                              children: [
                                n.jsxs("span", { children: [n.jsx("b", { children: "我的ID" }), n.jsx("small", { children: "分享给朋友，让他们找到你" })] }),
                                n.jsxs("div", { className: "id-display", onClick: Xa, children: [o.id, " ", n.jsx("span", { children: "📋" })] }),
                              ],
                            }),
                            n.jsxs("div", {
                              className: "settings-item",
                              onClick: () => un(!0),
                              children: [
                                n.jsxs("span", { children: [n.jsx("b", { children: "🔒 账号密码" }), n.jsx("small", { children: "设置或修改登录密码" })] }),
                                n.jsx("span", { style: { fontSize: "14px", color: "var(--muted)" }, children: "›" }),
                              ],
                            }),
                            n.jsxs("div", {
                              className: "settings-item",
                              onClick: () => gt(!0),
                              children: [n.jsxs("span", { children: [n.jsx("b", { children: "🎨 主题色" }), n.jsx("small", { children: "选择你喜欢的配色" })] }), n.jsx("div", { className: "settings-theme-swatch", style: { background: v } })],
                            }),
                            n.jsxs("label", {
                              children: [
                                n.jsxs("span", { children: [n.jsx("b", { children: "自定义欢迎语" }), n.jsx("small", { children: "首页显示的专属问候（留空使用默认）" })] }),
                                n.jsx("input", { type: "text", value: I, onChange: (g) => xn(g.target.value), placeholder: "如：又见面了，最近怎么样", maxLength: 30 }),
                              ],
                            }),
                            n.jsxs("label", {
                              children: [
                                n.jsxs("span", { children: [n.jsx("b", { children: "🎂 我的生日" }), n.jsx("small", { children: "生日当天会收到专属祝福（格式：MM-DD 或 YYYY-MM-DD）" })] }),
                                n.jsx("input", {
                                  type: "date",
                                  value: Ll,
                                  onChange: (g) => {
                                    (Jn(g.target.value),
                                      pe("/api/user/profile", { userId: o.id, birthday: g.target.value })
                                        .then(() => h("生日已保存，届时会有惊喜 🎂"))
                                        .catch(() => h("保存失败")));
                                  },
                                }),
                              ],
                            }),
                            n.jsxs("label", {
                              children: [
                                n.jsxs("span", { children: [n.jsx("b", { children: "已读回执" }), n.jsx("small", { children: "私聊中显示消息已读/未读状态" })] }),
                                n.jsx("input", {
                                  type: "checkbox",
                                  defaultChecked: Te.getItem("moodtree-read-receipts") !== "off",
                                  onChange: (g) => {
                                    (Te.setItem("moodtree-read-receipts", g.target.checked ? "on" : "off"),
                                      pe("/api/user/profile", { userId: o.id, readReceipts: g.target.checked }).catch(() => {}),
                                      h(g.target.checked ? "已读回执已开启" : "已读回执已关闭"));
                                  },
                                }),
                              ],
                            }),
                            n.jsxs("label", { children: [n.jsxs("span", { children: [n.jsx("b", { children: "温柔提醒" }), n.jsx("small", { children: "收到回应时告诉我" })] }), n.jsx("input", { type: "checkbox", defaultChecked: !0 })] }),
                            n.jsxs("div", {
                              className: "dn-settings-block",
                              children: [
                                n.jsxs("div", {
                                  className: "dn-settings-header",
                                  onClick: () => {
                                    const g = { ...we, enabled: !we.enabled };
                                    (st(g), Ea(g), Ji(g.enabled && gn(g) === "night", g.starryBg));
                                  },
                                  style: { cursor: "pointer" },
                                  children: [
                                    n.jsxs("span", {
                                      children: [
                                        n.jsx("b", { children: "🌙 昼夜模式" }),
                                        n.jsx("small", { children: we.enabled ? (we.mode === "auto" ? "已开启 · 自动跟随时间" : `已开启 · 手动${we.manualMode === "day" ? "白天" : "夜晚"}模式`) : "白天积极阳光，夜晚温柔陪伴" }),
                                      ],
                                    }),
                                    n.jsx("div", { className: "dn-toggle-switch", "data-on": we.enabled, children: n.jsx("div", { className: "dn-toggle-knob" }) }),
                                  ],
                                }),
                                we.enabled &&
                                  n.jsxs("div", {
                                    className: "dn-settings-body",
                                    children: [
                                      n.jsxs("div", {
                                        className: "dn-row",
                                        children: [
                                          n.jsx("span", { className: "dn-label", children: "切换方式" }),
                                          n.jsxs("div", {
                                            className: "dn-seg",
                                            children: [
                                              n.jsx("button", {
                                                className: we.mode === "auto" ? "active" : "",
                                                onClick: () => {
                                                  const g = { ...we, mode: "auto" };
                                                  (st(g), Ea(g), Ji(gn(g) === "night", g.starryBg));
                                                },
                                                children: "自动跟随时间",
                                              }),
                                              n.jsx("button", {
                                                className: we.mode === "manual" ? "active" : "",
                                                onClick: () => {
                                                  const g = { ...we, mode: "manual" };
                                                  (st(g), Ea(g), Ji(gn(g) === "night", g.starryBg));
                                                },
                                                children: "手动切换",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      we.mode === "manual" &&
                                        n.jsxs("div", {
                                          className: "dn-row",
                                          children: [
                                            n.jsx("span", { className: "dn-label", children: "当前时段" }),
                                            n.jsxs("div", {
                                              className: "dn-seg",
                                              children: [
                                                n.jsx("button", {
                                                  className: we.manualMode === "day" ? "active" : "",
                                                  onClick: () => {
                                                    const g = { ...we, manualMode: "day" };
                                                    (st(g), Ea(g), Ji(!1, g.starryBg));
                                                  },
                                                  children: "☀️ 白天",
                                                }),
                                                n.jsx("button", {
                                                  className: we.manualMode === "night" ? "active" : "",
                                                  onClick: () => {
                                                    const g = { ...we, manualMode: "night" };
                                                    (st(g), Ea(g), Ji(!0, g.starryBg));
                                                  },
                                                  children: "🌙 夜晚",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      n.jsx("div", { className: "dn-divider" }),
                                      n.jsxs("label", {
                                        className: "dn-toggle-row",
                                        children: [
                                          n.jsxs("span", { children: [n.jsx("b", { children: "✨ 夜晚星空背景" }), n.jsx("small", { children: "夜晚模式下显示星空动画" })] }),
                                          n.jsx("input", {
                                            type: "checkbox",
                                            checked: we.starryBg,
                                            onChange: (g) => {
                                              const ne = { ...we, starryBg: g.target.checked };
                                              (st(ne), Ea(ne), Ji(gn(ne) === "night", ne.starryBg));
                                            },
                                          }),
                                        ],
                                      }),
                                      n.jsxs("label", {
                                        className: "dn-toggle-row",
                                        children: [
                                          n.jsxs("span", { children: [n.jsx("b", { children: "🌅 晨间能量卡" }), n.jsx("small", { children: "每天首次打开时弹一张积极能量卡" })] }),
                                          n.jsx("input", {
                                            type: "checkbox",
                                            checked: we.energyCard,
                                            onChange: (g) => {
                                              const ne = { ...we, energyCard: g.target.checked };
                                              (st(ne), Ea(ne));
                                            },
                                          }),
                                        ],
                                      }),
                                      n.jsxs("label", {
                                        className: "dn-toggle-row",
                                        children: [
                                          n.jsxs("span", { children: [n.jsx("b", { children: "📻 晚安电台" }), n.jsx("small", { children: "夜晚专属入口，AI生成睡前陪伴文字" })] }),
                                          n.jsx("input", {
                                            type: "checkbox",
                                            checked: we.nightRadio,
                                            onChange: (g) => {
                                              const ne = { ...we, nightRadio: g.target.checked };
                                              (st(ne), Ea(ne));
                                            },
                                          }),
                                        ],
                                      }),
                                      n.jsxs("label", {
                                        className: "dn-toggle-row",
                                        children: [
                                          n.jsxs("span", { children: [n.jsx("b", { children: "🎯 每日小挑战" }), n.jsx("small", { children: "每天一个小任务，给生活加点料" })] }),
                                          n.jsx("input", {
                                            type: "checkbox",
                                            checked: we.dailyChallenge,
                                            onChange: (g) => {
                                              const ne = { ...we, dailyChallenge: g.target.checked };
                                              (st(ne), Ea(ne));
                                            },
                                          }),
                                        ],
                                      }),
                                      n.jsxs("label", {
                                        className: "dn-toggle-row",
                                        children: [
                                          n.jsxs("span", { children: [n.jsx("b", { children: "🫁 助眠呼吸引导" }), n.jsx("small", { children: "4-7-8呼吸法，帮助放松入睡" })] }),
                                          n.jsx("input", {
                                            type: "checkbox",
                                            checked: we.breathing,
                                            onChange: (g) => {
                                              const ne = { ...we, breathing: g.target.checked };
                                              (st(ne), Ea(ne));
                                            },
                                          }),
                                        ],
                                      }),
                                      n.jsx("div", { className: "dn-divider" }),
                                      n.jsxs("label", {
                                        className: "dn-toggle-row",
                                        children: [
                                          n.jsxs("span", { children: [n.jsx("b", { children: "😴 睡眠提醒" }), n.jsx("small", { children: "到点提醒你该休息了" })] }),
                                          n.jsx("input", {
                                            type: "checkbox",
                                            checked: we.sleepReminder,
                                            onChange: (g) => {
                                              const ne = { ...we, sleepReminder: g.target.checked };
                                              (st(ne), Ea(ne), h(g.target.checked ? "睡眠提醒已开启" : "睡眠提醒已关闭"));
                                            },
                                          }),
                                        ],
                                      }),
                                      we.sleepReminder &&
                                        n.jsxs("div", {
                                          className: "dn-row",
                                          children: [
                                            n.jsx("span", { className: "dn-label", children: "提醒时间" }),
                                            n.jsx("input", {
                                              type: "time",
                                              value: we.sleepReminderTime,
                                              onChange: (g) => {
                                                const ne = { ...we, sleepReminderTime: g.target.value };
                                                (st(ne), Ea(ne));
                                              },
                                              style: { width: "100px" },
                                            }),
                                          ],
                                        }),
                                      n.jsx("div", { className: "dn-divider" }),
                                      n.jsxs("div", {
                                        className: "dn-row",
                                        children: [
                                          n.jsx("span", { className: "dn-label", children: "AI 风格" }),
                                          n.jsxs("div", {
                                            className: "dn-seg",
                                            children: [
                                              n.jsx("button", {
                                                className: we.aiStyle === "auto" ? "active" : "",
                                                onClick: () => {
                                                  const g = { ...we, aiStyle: "auto" };
                                                  (st(g), Ea(g));
                                                },
                                                children: "跟随昼夜",
                                              }),
                                              n.jsx("button", {
                                                className: we.aiStyle === "day" ? "active" : "",
                                                onClick: () => {
                                                  const g = { ...we, aiStyle: "day" };
                                                  (st(g), Ea(g));
                                                },
                                                children: "☀️ 元气",
                                              }),
                                              n.jsx("button", {
                                                className: we.aiStyle === "night" ? "active" : "",
                                                onClick: () => {
                                                  const g = { ...we, aiStyle: "night" };
                                                  (st(g), Ea(g));
                                                },
                                                children: "🌙 温柔",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            oa &&
                              (() => {
                                var Ei, Di;
                                const g = oa.count || 0,
                                  ne = oa.banned,
                                  Be = oa.remaining,
                                  Ca = Be ? Math.ceil(Be / 3600) : 0,
                                  Ga = Ca > 0 ? Math.floor(Ca / 24) : 0,
                                  Yl = Be === null ? "永久" : Ga > 0 ? `${Ga}天` : `${Ca}小时`,
                                  al = (At) => (At === "chat" ? "聊天" : At === "post" ? "帖子" : At === "comment" ? "评论" : At),
                                  Bs = (At) =>
                                    At === "cleared"
                                      ? { t: "🌱 已消除", c: "#8a938c" }
                                      : At === "appealing"
                                        ? { t: "申诉审核中", c: "#5b8def" }
                                        : At === "overturned"
                                          ? { t: "已撤销", c: "#57a773" }
                                          : At === "upheld"
                                            ? { t: "申诉未通过", c: "#c4543d" }
                                            : { t: "违规", c: "#f57c00" };
                                return n.jsxs("div", {
                                  className: "reputation-card",
                                  style: {
                                    margin: "12px 0",
                                    padding: "14px 16px",
                                    borderRadius: "12px",
                                    background: ne ? "rgba(244,67,54,0.08)" : g > 0 ? "rgba(255,152,0,0.08)" : "rgba(76,175,80,0.06)",
                                    border: `1px solid ${ne ? "rgba(244,67,54,0.2)" : g > 0 ? "rgba(255,152,0,0.2)" : "rgba(76,175,80,0.15)"}`,
                                  },
                                  children: [
                                    n.jsxs("div", {
                                      style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" },
                                      children: [
                                        n.jsx("span", { style: { fontSize: "18px" }, children: ne ? "🚫" : g > 0 ? "⚠️" : "✅" }),
                                        n.jsx("b", { style: { fontSize: "14px" }, children: ne ? "账号已封禁" : "社区信誉" }),
                                        ((Ei = oa == null ? void 0 : oa.history) == null ? void 0 : Ei.length) > 0 &&
                                          n.jsx("button", {
                                            type: "button",
                                            onClick: () => {
                                              const At = !ma;
                                              (Ti(At), Te.setItem("mt-hide-violations", At ? "true" : "false"));
                                            },
                                            style: { marginLeft: "auto", background: "none", border: "1px solid #d5d3cb", borderRadius: "8px", padding: "2px 10px", fontSize: "11px", color: "#79847d", cursor: "pointer", lineHeight: 1.6 },
                                            children: ma ? "展开" : "隐藏",
                                          }),
                                      ],
                                    }),
                                    ne
                                      ? n.jsxs("p", {
                                          style: { fontSize: "12px", color: "var(--muted)", lineHeight: 1.6 },
                                          children: [
                                            "封禁原因：",
                                            oa.banReason || "系统检测违规用语",
                                            n.jsx("br", {}),
                                            "封禁时间：",
                                            oa.banTime,
                                            n.jsx("br", {}),
                                            Be !== null ? `剩余封禁时间：约 ${Yl}` : "封禁类型：永久封禁",
                                            n.jsx("br", {}),
                                            n.jsx("span", { style: { color: "#5b8def" }, children: "如认为误判，可对下方违规记录逐条申诉；申诉成功记录撤销后，封禁可能提前解除。" }),
                                          ],
                                        })
                                      : g === 0
                                        ? n.jsx("p", { style: { fontSize: "12px", color: "var(--muted)" }, children: "信誉良好，暂无违规记录。累计3次违规将被系统自动封禁。" })
                                        : n.jsxs("p", {
                                            style: { fontSize: "12px", color: "var(--muted)", lineHeight: 1.6 },
                                            children: ["当前违规次数：", n.jsxs("b", { style: { color: "#f57c00" }, children: [g, " / 3"] }), n.jsx("br", {}), g < 3 ? `再违规 ${3 - g} 次将被封禁1天，后续逐级加重。` : ""],
                                          }),
                                    g > 0 &&
                                      oa.rewardDaysLeft != null &&
                                      n.jsxs("p", {
                                        style: { fontSize: "12px", color: "#57a773", lineHeight: 1.6, margin: "6px 0 0" },
                                        children: ["🌱 信誉恢复中：保持不再违规，约 ", n.jsx("b", { children: oa.rewardDaysLeft }), " 天后自动消除 1 条记录；持续良好表现可逐步清零", !ne && "，违规记录消除后封禁等级也会随之降低", "。"],
                                      }),
                                    !ma &&
                                      ((Di = oa.history) == null ? void 0 : Di.length) > 0 &&
                                      n.jsx("div", {
                                        className: "violation-list",
                                        children: [...oa.history].reverse().map((At, Ta) => {
                                          var Ai;
                                          const wn = Bs(At.status);
                                          return n.jsxs(
                                            "div",
                                            {
                                              className: "violation-item",
                                              children: [
                                                n.jsxs("div", { className: "violation-item-top", children: [n.jsxs("span", { children: [At.time, " · ", al(At.type)] }), n.jsx("span", { style: { color: wn.c, fontWeight: 600 }, children: wn.t })] }),
                                                At.snippet && n.jsxs("div", { className: "violation-snippet", children: ["“", At.snippet, "”"] }),
                                                ((Ai = At.words) == null ? void 0 : Ai.length) > 0 && n.jsxs("div", { className: "violation-words", children: ["命中词：", At.words.join("、")] }),
                                                At.status === "confirmed" &&
                                                  n.jsxs("div", {
                                                    className: "violation-appeal-row",
                                                    children: [n.jsx("span", { className: "violation-appeal-tip", children: "认为误判？系统会结合语境复核" }), n.jsx("button", { className: "appeal-btn", onClick: () => Ma(At), children: "申诉" })],
                                                  }),
                                              ],
                                            },
                                            At.id || Ta,
                                          );
                                        }),
                                      }),
                                  ],
                                });
                              })(),
                            An &&
                              n.jsx(c0, {
                                violation: An,
                                userId: o.id,
                                onClose: () => Ma(null),
                                onDone: () =>
                                  qe(`/api/user/violations?userid=${o.id}`)
                                    .then(bn)
                                    .catch(() => {}),
                                flash: h,
                              }),
                            n.jsxs("div", { className: "safety-note", children: [n.jsx("b", { children: "如果你正在经历难以承受的时刻" }), n.jsx("p", { children: "请优先联系信任的人或专业心理援助。你不需要独自面对。" })] }),
                          ],
                        }),
                      k === "blacklist" && n.jsx(r0, { userId: o.id, flash: h }),
                      k === "admin" && on && n.jsx(o0, { userId: o.id, flash: h, isSuperAdmin: wi }),
                    ],
                  }),
          }),
        ],
      }),
      ki &&
        n.jsx("div", {
          className: "modal-overlay",
          onMouseDown: (g) => {
            g.target === g.currentTarget && wa();
          },
          children: n.jsxs("div", {
            className: "pwd-settings-modal",
            children: [
              n.jsxs("div", {
                className: "pwd-settings-header",
                children: [
                  n.jsx("button", { className: "pwd-back-btn", onClick: wa, children: "‹" }),
                  n.jsx("h2", { children: "设置密码" }),
                  n.jsx("button", { className: "pwd-save-btn", onClick: Sn ? aa : Xe, disabled: zi, children: zi ? "…" : "完成" }),
                ],
              }),
              n.jsx("p", { className: "pwd-settings-desc", children: Sn ? "通过手机验证码重置你的登录密码" : "为了你下次能够顺利登录，请为你的账号先设置一个登录密码。" }),
              n.jsxs("div", {
                className: "pwd-settings-form",
                children: [
                  n.jsxs("div", { className: "pwd-field", children: [n.jsx("label", { children: "账号" }), n.jsx("div", { className: "pwd-field-value", children: o.phone || o.id })] }),
                  Sn
                    ? n.jsxs(n.Fragment, {
                        children: [
                          n.jsxs("div", {
                            className: "pwd-field",
                            children: [n.jsx("label", { children: "验证码" }), n.jsx("input", { type: "text", inputMode: "numeric", maxLength: 6, value: Fn, onChange: (g) => z(g.target.value.replace(/\D/g, "")), placeholder: "输入6位验证码" })],
                          }),
                          n.jsxs("div", { className: "pwd-field", children: [n.jsx("label", { children: "新密码" }), n.jsx("input", { type: "password", value: Ot, onChange: (g) => yn(g.target.value), placeholder: "填写新密码" })] }),
                          n.jsxs("div", { className: "pwd-field", children: [n.jsx("label", { children: "确认密码" }), n.jsx("input", { type: "password", value: jn, onChange: (g) => Da(g.target.value), placeholder: "再次填写确认" })] }),
                        ],
                      })
                    : n.jsxs(n.Fragment, {
                        children: [
                          n.jsxs("div", { className: "pwd-field", children: [n.jsx("label", { children: "原密码" }), n.jsx("input", { type: "password", value: tl, onChange: (g) => ua(g.target.value), placeholder: "填写原密码" })] }),
                          n.jsxs("div", { className: "pwd-field", children: [n.jsx("label", { children: "新密码" }), n.jsx("input", { type: "password", value: Ot, onChange: (g) => yn(g.target.value), placeholder: "填写新密码" })] }),
                          n.jsxs("div", { className: "pwd-field", children: [n.jsx("label", { children: "确认密码" }), n.jsx("input", { type: "password", value: jn, onChange: (g) => Da(g.target.value), placeholder: "再次填写确认" })] }),
                        ],
                      }),
                ],
              }),
              n.jsx("p", { className: "pwd-rule-text", children: "密码必须是8-16位的英文字母、数字、字符组合（不能是纯数字）" }),
              Sn
                ? n.jsx("button", {
                    className: "pwd-forgot-link",
                    onClick: () => {
                      (Wn(!1), z(""), ce(""), wt(""));
                    },
                    children: "返回原密码验证",
                  })
                : n.jsx("button", { className: "pwd-forgot-link", onClick: ut, children: "忘记原密码？" }),
              te && n.jsx("p", { className: "pwd-info-text", children: te }),
              Mi && n.jsx("p", { className: "pwd-error-text", children: Mi }),
              dn && n.jsx("p", { className: "pwd-success-text", children: dn }),
            ],
          }),
        }),
      fe && k === "diaries" && null,
      Q &&
        n.jsx("div", {
          className: "modal-overlay",
          onMouseDown: (g) => {
            g.target === g.currentTarget && oe(!1);
          },
          children: n.jsxs("div", {
            className: "modal-card alias-modal",
            children: [
              n.jsx("button", { className: "login-close", onClick: () => oe(!1), children: "×" }),
              n.jsx("h2", { children: "新建合集" }),
              n.jsx("input", {
                className: "alias-input",
                value: Ne,
                onChange: (g) => De(g.target.value),
                placeholder: "给合集起个名字（20字内）",
                maxLength: 20,
                autoFocus: !0,
                onKeyDown: (g) => {
                  g.key === "Enter" && ba();
                },
              }),
              n.jsxs("div", { className: "alias-actions", children: [n.jsx("button", { className: "alias-cancel", onClick: () => oe(!1), children: "取消" }), n.jsx("button", { className: "alias-save", onClick: ba, children: "创建" })] }),
            ],
          }),
        }),
      Ue &&
        n.jsx("div", {
          className: "modal-overlay",
          onMouseDown: (g) => {
            g.target === g.currentTarget && (_e(null), De(""));
          },
          children: n.jsxs("div", {
            className: "modal-card alias-modal",
            children: [
              n.jsx("button", {
                className: "login-close",
                onClick: () => {
                  (_e(null), De(""));
                },
                children: "×",
              }),
              n.jsx("h2", { children: "重命名合集" }),
              n.jsx("input", {
                className: "alias-input",
                value: Ne,
                onChange: (g) => De(g.target.value),
                placeholder: "输入新名字",
                maxLength: 20,
                autoFocus: !0,
                onKeyDown: (g) => {
                  g.key === "Enter" && se();
                },
              }),
              n.jsxs("div", {
                className: "alias-actions",
                children: [
                  n.jsx("button", {
                    className: "alias-cancel",
                    onClick: () => {
                      (_e(null), De(""));
                    },
                    children: "取消",
                  }),
                  n.jsx("button", { className: "alias-save", onClick: se, children: "保存" }),
                ],
              }),
            ],
          }),
        }),
      Le &&
        n.jsx("div", {
          className: "modal-overlay",
          onMouseDown: (g) => {
            g.target === g.currentTarget && rt(null);
          },
          children: n.jsxs("div", {
            className: "modal-card alias-modal",
            style: { maxHeight: "70vh", overflowY: "auto" },
            children: [
              n.jsx("button", { className: "login-close", onClick: () => rt(null), children: "×" }),
              n.jsxs("h2", { children: ["收录到「", Le.name, "」"] }),
              me.filter((g) => !(Le.postIds || []).includes(g.id)).length
                ? n.jsx("div", {
                    className: "mine-list",
                    children: me
                      .filter((g) => !(Le.postIds || []).includes(g.id))
                      .map((g) =>
                        n.jsxs(
                          "div",
                          {
                            className: "mine-post-item",
                            children: [
                              n.jsx("div", {
                                className: "mine-post-main",
                                style: { cursor: "default" },
                                children: n.jsxs("div", { children: [n.jsx("h3", { children: g.title || "（无标题）" }), n.jsx("p", { children: (g.content || "").slice(0, 60) }), n.jsx("small", { children: g.time })] }),
                              }),
                              n.jsx("div", {
                                className: "mine-post-actions",
                                children: n.jsx("button", {
                                  className: "mine-action-btn pin-btn",
                                  onClick: async () => {
                                    (await Ae(Le, g.id)) && (rt((Be) => Be && { ...Be, postIds: [...(Be.postIds || []), g.id], posts: [...(Be.posts || []), g] }), h("已收录"));
                                  },
                                  children: "收录",
                                }),
                              }),
                            ],
                          },
                          g.id,
                        ),
                      ),
                  })
                : n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "🌿" }), n.jsx("h3", { children: "没有可收录的帖子" }), n.jsx("p", { children: "你的帖子都已在这个合集里，或还没有发布过帖子。" })] }),
            ],
          }),
        }),
      je &&
        n.jsx("div", {
          className: "modal-overlay",
          onMouseDown: (g) => {
            g.target === g.currentTarget && (ze(null), Pe(""));
          },
          children: n.jsxs("div", {
            className: "modal-card alias-modal",
            children: [
              n.jsx("button", {
                className: "login-close",
                onClick: () => {
                  (ze(null), Pe(""));
                },
                children: "×",
              }),
              n.jsx("h2", { children: "设置备注" }),
              n.jsxs("div", { className: "alias-friend-preview", children: [n.jsx(qt, { user: je, size: 48 }), n.jsxs("div", { children: [n.jsx("b", { children: je.nickname }), n.jsx("small", { children: je.id })] })] }),
              n.jsx("input", {
                className: "alias-input",
                value: Ee,
                onChange: (g) => Pe(g.target.value),
                placeholder: "输入备注名（留空清除备注）",
                maxLength: 20,
                autoFocus: !0,
                onKeyDown: (g) => {
                  g.key === "Enter" && Qt();
                },
              }),
              n.jsxs("div", {
                className: "alias-actions",
                children: [
                  n.jsx("button", {
                    className: "alias-cancel",
                    onClick: () => {
                      (ze(null), Pe(""));
                    },
                    children: "取消",
                  }),
                  n.jsx("button", { className: "alias-save", onClick: Qt, children: "保存" }),
                ],
              }),
            ],
          }),
        }),
      Ve &&
        n.jsx("div", {
          className: "friend-action-overlay",
          onMouseDown: (g) => {
            g.target === g.currentTarget && pt(null);
          },
          children: n.jsxs("div", {
            className: "friend-action-sheet",
            children: [
              n.jsxs("div", {
                className: "friend-action-header",
                children: [
                  n.jsx(qt, { user: Ve, size: 50 }),
                  n.jsxs("div", { children: [n.jsx("b", { children: Ve.alias || Ve.nickname }), Ve.alias && n.jsxs("small", { children: ["原昵称: ", Ve.nickname] }), n.jsx("small", { children: Ve.id })] }),
                ],
              }),
              n.jsxs("div", {
                className: "friend-action-list",
                children: [
                  n.jsxs("button", {
                    onClick: () => {
                      (d(Ve), pt(null));
                    },
                    children: [n.jsx("span", { children: "💬" }), "发消息"],
                  }),
                  n.jsxs("button", {
                    onClick: () => {
                      (ze(Ve), Pe(Ve.alias || ""), pt(null));
                    },
                    children: [n.jsx("span", { children: "🏷️" }), "设置备注"],
                  }),
                  n.jsxs("button", {
                    onClick: () => {
                      xe(Ve.id);
                    },
                    children: St.includes(Ve.id) ? "取消置顶" : "置顶好友",
                  }),
                  n.jsxs("button", { className: "danger", onClick: Ze, children: ["删除好友"] }),
                ],
              }),
              n.jsx("button", { className: "friend-action-cancel", onClick: () => pt(null), children: "取消" }),
            ],
          }),
        }),
      ot &&
        n.jsx("div", {
          className: "modal-overlay",
          onMouseDown: (g) => {
            g.target === g.currentTarget && gt(!1);
          },
          children: n.jsxs("div", {
            className: "theme-panel-modal",
            children: [
              n.jsx("button", { className: "login-close", onClick: () => gt(!1), children: "×" }),
              n.jsx("h3", { children: "选择主题色" }),
              n.jsx("div", {
                className: "theme-presets",
                children: Ev.map((g) =>
                  n.jsx(
                    "button",
                    {
                      className: v === g.color ? "selected" : "",
                      style: { background: g.color },
                      onClick: () => {
                        (j(g.color), Te.setItem("moodtree-theme-color", g.color), Ir(g.color));
                      },
                      title: g.name,
                    },
                    g.color,
                  ),
                ),
              }),
              n.jsxs("div", {
                className: "theme-custom-toggle",
                onClick: () => fa(!yt),
                children: [
                  n.jsx("span", { style: { fontSize: "11px", fontWeight: 500 }, children: "🎨 自定义颜色" }),
                  n.jsx("div", { className: "theme-custom-swatch", style: { background: v } }),
                  n.jsx("span", { style: { fontSize: "10px", color: "var(--muted)" }, children: v }),
                  n.jsx("span", { className: "theme-custom-arrow", children: yt ? "▾" : "▸" }),
                ],
              }),
              yt &&
                n.jsx("div", {
                  className: "theme-color-wheel-area",
                  children: n.jsx(Ov, {
                    color: v,
                    onChange: (g) => {
                      (j(g), Te.setItem("moodtree-theme-color", g), Ir(g));
                    },
                  }),
                }),
              n.jsx("button", {
                className: "theme-reset",
                onClick: () => {
                  (j("#6f917d"), Te.setItem("moodtree-theme-color", "#6f917d"), Ir("#6f917d"), fa(!1));
                },
                children: "恢复默认森绿",
              }),
            ],
          }),
        }),
      Mt && n.jsx(t0, { onClose: () => zt(!1) }),
      $e &&
        n.jsx("div", {
          className: "modal-overlay",
          onClick: (g) => {
            g.target === g.currentTarget && jt(!1);
          },
          children: n.jsxs("div", {
            className: "night-radio-modal",
            style: { maxWidth: "420px", margin: "auto", marginTop: "10vh", background: "linear-gradient(160deg, #1a1a3e, #2a2a5e)", borderRadius: "24px", padding: "32px 24px", color: "#e0e0f8", textAlign: "center", position: "relative" },
            children: [
              n.jsx("button", { className: "login-close", onClick: () => jt(!1), style: { color: "#a0a0c8" }, children: "×" }),
              n.jsx("div", { style: { fontSize: "40px", marginBottom: "12px" }, children: "🌙" }),
              n.jsx("h3", { style: { fontSize: "18px", margin: "0 0 16px", color: "#c8c8f0" }, children: "晚安电台" }),
              It
                ? n.jsx("div", { style: { padding: "24px", color: "#8888bb", fontSize: "14px" }, children: "正在为你准备今晚的陪伴…" })
                : n.jsx("div", { style: { fontSize: "15px", lineHeight: "1.9", color: "#d0d0e8", padding: "0 8px" }, children: xa }),
              n.jsx("button", {
                onClick: async () => {
                  (Xt(!0), We(""));
                  try {
                    const g = await pe("/api/ai/night-radio", { userId: o.id });
                    We(g.quote || "夜深了，今天的你辛苦了。");
                  } catch {
                    We("夜深了，今天的你辛苦了。");
                  }
                  Xt(!1);
                },
                style: { marginTop: "20px", background: "rgba(168,180,232,0.2)", border: "1px solid rgba(168,180,232,0.3)", color: "#c8c8f0", borderRadius: "20px", padding: "10px 28px", fontSize: "13px", cursor: "pointer" },
                children: "换一段 🔄",
              }),
            ],
          }),
        }),
      n.jsx("style", {
        children: `
        .dn-settings-block { border: 1px solid var(--sage-soft, #e8f0ea); border-radius: 14px; overflow: hidden; margin-bottom: 8px; }
        .dn-settings-header { display: flex; align-items: center; justify-content: space-between; padding: 14px 16px; }
        .dn-settings-header b { font-size: 14px; } .dn-settings-header small { display: block; font-size: 11px; color: var(--muted); margin-top: 2px; }
        .dn-toggle-switch { width: 44px; height: 24px; border-radius: 12px; background: #ccc; position: relative; transition: background 0.3s; flex-shrink: 0; }
        .dn-toggle-switch[data-on="true"] { background: var(--sage, #6f917d); }
        .dn-toggle-knob { position: absolute; top: 3px; left: 3px; width: 18px; height: 18px; border-radius: 50%; background: #fff; transition: transform 0.3s; }
        .dn-toggle-switch[data-on="true"] .dn-toggle-knob { transform: translateX(20px); }
        .dn-settings-body { padding: 0 16px 16px; }
        .dn-row { display: flex; align-items: center; justify-content: space-between; padding: 10px 0; gap: 12px; }
        .dn-label { font-size: 13px; font-weight: 500; color: var(--sage-dark); white-space: nowrap; }
        .dn-seg { display: flex; gap: 4px; background: var(--sage-soft, #e8f0ea); border-radius: 10px; padding: 3px; }
        .dn-seg button { border: none; background: transparent; padding: 6px 12px; border-radius: 8px; font-size: 12px; color: var(--muted); cursor: pointer; white-space: nowrap; transition: all 0.2s; }
        .dn-seg button.active { background: #fff; color: var(--sage-dark); font-weight: 600; box-shadow: 0 1px 4px rgba(0,0,0,0.08); }
        .dn-divider { height: 1px; background: var(--sage-soft, #e8f0ea); margin: 4px 0; }
        .dn-toggle-row { display: flex; align-items: center; justify-content: space-between; padding: 10px 0; cursor: pointer; }
        .dn-toggle-row b { font-size: 13px; } .dn-toggle-row small { display: block; font-size: 11px; color: var(--muted); margin-top: 2px; }
        .dn-toggle-row input[type="checkbox"] { width: 18px; height: 18px; accent-color: var(--sage, #6f917d); flex-shrink: 0; }
        .night-radio-modal { box-shadow: 0 8px 40px rgba(20,20,60,0.4); }
        .breathing-overlay { position: fixed; inset: 0; z-index: 9999; background: rgba(10,10,30,0.85); display: flex; flex-direction: column; align-items: center; justify-content: center; backdrop-filter: blur(8px); }
        .breathing-circle { width: 160px; height: 160px; border-radius: 50%; background: radial-gradient(circle, rgba(168,180,232,0.3), rgba(168,180,232,0.08)); border: 2px solid rgba(168,180,232,0.3); display: flex; align-items: center; justify-content: center; transition: transform 4s ease-in-out, opacity 4s ease-in-out; }
        .breathing-text { color: #c8c8f0; font-size: 18px; margin-top: 32px; font-weight: 300; }
        .breathing-hint { color: #8888bb; font-size: 13px; margin-top: 8px; }
        .breathing-close { position: fixed; top: 20px; right: 20px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #c8c8f0; border-radius: 50%; width: 36px; height: 36px; font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center; }
        .breathing-phases { display: flex; gap: 24px; margin-top: 24px; }
        .breathing-phase { color: #666688; font-size: 12px; text-align: center; }
        .breathing-phase.active { color: #a8b4e8; }
        .energy-card-overlay { position: fixed; inset: 0; z-index: 9999; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; padding: 24px; }
        .energy-card-box { background: linear-gradient(145deg, #fffef5, #fff8e8); border-radius: 24px; padding: 32px 24px; max-width: 380px; width: 100%; text-align: center; box-shadow: 0 12px 40px rgba(0,0,0,0.15); position: relative; }
        .energy-card-box h3 { font-size: 16px; color: #8a7a4a; margin: 0 0 16px; }
        .energy-card-quote { font-size: 17px; line-height: 1.8; color: #5a5a3a; margin: 16px 0; font-weight: 500; }
        .energy-card-challenge { background: #f5f0e0; border-radius: 14px; padding: 14px; margin: 16px 0; }
        .energy-card-challenge-icon { font-size: 24px; }
        .energy-card-challenge-text { font-size: 14px; color: #6a6a4a; margin-top: 6px; }
        .energy-card-btn { background: var(--sage-dark, #6f917d); color: #fff; border: none; border-radius: 22px; padding: 11px 32px; font-size: 14px; cursor: pointer; margin-top: 8px; }
        .dn-quick-bar { display: flex; gap: 10px; margin: 0 0 16px; flex-wrap: wrap; }
        .dn-quick-btn { display: flex; align-items: center; gap: 6px; background: rgba(168,180,232,0.15); border: 1px solid rgba(168,180,232,0.25); border-radius: 20px; padding: 8px 16px; font-size: 13px; color: #b0b0d8; cursor: pointer; transition: all 0.2s; }
        .dn-quick-btn:hover { background: rgba(168,180,232,0.25); }
        .dn-phase-badge { display: inline-flex; align-items: center; gap: 4px; padding: 3px 10px; border-radius: 12px; font-size: 11px; font-weight: 500; }
        .dn-phase-day { background: #fff3cd; color: #8a6a00; }
        .dn-phase-night { background: #e0e0f5; color: #4a4a8a; }
      `,
      }),
    ],
  });
}
function t0({ onClose: r }) {
  const [u, o] = p.useState("idle"),
    [c, m] = p.useState(0),
    [d, h] = p.useState(1),
    v = p.useRef(u);
  ((v.current = u),
    p.useEffect(() => {
      if (u === "idle") return;
      let S;
      return (
        u === "in"
          ? (h(1.35),
            (S = setTimeout(() => {
              o("hold");
            }, 4e3)))
          : u === "hold"
            ? (S = setTimeout(() => {
                o("out");
              }, 7e3))
            : u === "out" &&
              (h(1),
              (S = setTimeout(() => {
                (o("in"), m((T) => T + 1));
              }, 8e3))),
        () => {
          S && clearTimeout(S);
        }
      );
    }, [u]));
  const j = u === "in" ? "吸气…" : u === "hold" ? "屏住…" : u === "out" ? "呼气…" : "准备好了吗？",
    y = [{ label: "吸气 4秒" }, { label: "屏息 7秒" }, { label: "呼气 8秒" }],
    C = u === "in" ? 0 : u === "hold" ? 1 : u === "out" ? 2 : -1;
  return n.jsxs("div", {
    className: "breathing-overlay",
    children: [
      n.jsx("button", { className: "breathing-close", onClick: r, children: "×" }),
      n.jsx("div", {
        className: "breathing-circle",
        style: { transform: `scale(${d})`, opacity: u === "idle" ? 0.5 : 1 },
        children: n.jsx("span", { style: { fontSize: "32px" }, children: u === "in" ? "🌿" : u === "hold" ? "✨" : u === "out" ? "🌙" : "🫁" }),
      }),
      n.jsx("div", { className: "breathing-text", children: j }),
      u !== "idle" && n.jsxs("div", { className: "breathing-hint", children: ["第 ", c + 1, " 轮 · 建议做 4 轮"] }),
      u === "idle" &&
        n.jsx("button", {
          onClick: () => o("in"),
          style: { marginTop: "24px", background: "rgba(168,180,232,0.2)", border: "1px solid rgba(168,180,232,0.3)", color: "#c8c8f0", borderRadius: "22px", padding: "12px 32px", fontSize: "15px", cursor: "pointer" },
          children: "开始呼吸 🫁",
        }),
      u !== "idle" &&
        n.jsx("button", {
          onClick: () => {
            (o("idle"), m(0), h(1));
          },
          style: { marginTop: "20px", background: "transparent", border: "1px solid rgba(168,180,232,0.2)", color: "#8888bb", borderRadius: "16px", padding: "8px 20px", fontSize: "12px", cursor: "pointer" },
          children: "结束",
        }),
      n.jsx("div", { className: "breathing-phases", children: y.map((S, T) => n.jsx("div", { className: `breathing-phase ${C === T ? "active" : ""}`, children: S.label }, T)) }),
    ],
  });
}
function a0({ user: r, rooms: u, roomView: o, roomDetail: c, loadingRooms: m, onOpenRoom: d, onBackToList: h, onCreateRoom: v, onJoinRoom: j, onCopyCode: y, onLeaveRoom: C, flash: S, onAvatarClick: T }) {
  const [H, k] = p.useState(!1),
    [X, J] = p.useState([]),
    [D, I] = p.useState(!1),
    [V, de] = p.useState(!1),
    [P, Y] = p.useState([]),
    [K, F] = p.useState(!1),
    [Z, ye] = p.useState(""),
    [Ce, Se] = p.useState(""),
    [ke, Oe] = p.useState(""),
    ue = yp,
    R = jp,
    $ = Sp,
    le = async () => {
      F(!0);
      try {
        const N = await qe("/api/rooms/public");
        Y(N.rooms || []);
      } catch {
        S("加载公开房间失败");
      }
      F(!1);
    },
    fe = async (N) => {
      try {
        const _ = await pe("/api/rooms/join", { code: N, userId: r.id });
        _.success === !0 ? (S("已加入房间"), de(!1)) : S(_.error || _.message || "加入失败");
      } catch {
        S("加入失败");
      }
    },
    be = P.filter((N) => {
      const _ = N.tags || {};
      return !((Z && _.mbti !== Z) || (Ce && _.occupation !== Ce) || (ke && _.ageGroup !== ke));
    }),
    w = async () => {
      var N;
      try {
        const ee = (await qe(`/api/friends/${r.id}`)).friends || [],
          he = ((N = c == null ? void 0 : c.members) == null ? void 0 : N.map((je) => je.id)) || [];
        (J(ee.filter((je) => !he.includes(je.id))), k(!0));
      } catch {
        S("加载好友列表失败");
      }
    },
    x = async (N) => {
      if (c) {
        I(!0);
        try {
          const _ = await pe("/api/rooms/invite", { roomId: c.room.id, userId: N });
          _.success ? (S("已邀请好友加入房间"), J((ee) => ee.filter((he) => he.id !== N)), d(c.room.id)) : S(_.error || "邀请失败");
        } catch {
          S("邀请失败");
        }
        I(!1);
      }
    };
  if (o === "detail" && c) {
    const { room: N, members: _ } = c;
    return n.jsxs("div", {
      className: "room-chat-overlay",
      children: [
        n.jsx(Np, { user: r, chatType: "room", target: N.id, title: N.name, onBack: h, flash: S, onAvatarClick: T }),
        n.jsxs("div", {
          className: "room-info-bar",
          children: [
            n.jsxs("div", {
              className: "room-info-left",
              children: [
                n.jsxs("div", { className: "room-invite-code", onClick: () => y(N.inviteCode), children: ["邀请码: ", n.jsx("b", { children: N.inviteCode }), " 📋"] }),
                n.jsxs("span", { className: "room-member-count", children: [_.length, "/10 人"] }),
              ],
            }),
            n.jsxs("div", {
              className: "room-info-right",
              children: [
                n.jsxs("div", { className: "room-members-mini", children: [_.slice(0, 5).map((ee) => n.jsx(qt, { user: ee, size: 28 }, ee.id)), _.length > 5 && n.jsxs("span", { className: "more-members", children: ["+", _.length - 5] })] }),
                n.jsx("button", { className: "invite-friend-btn", onClick: w, children: "邀请好友" }),
                n.jsx("button", { className: "leave-room-btn", onClick: () => C(N.id), children: "退出房间" }),
              ],
            }),
          ],
        }),
        H &&
          n.jsx("div", {
            className: "modal-overlay",
            onMouseDown: (ee) => {
              ee.target === ee.currentTarget && k(!1);
            },
            children: n.jsxs("div", {
              className: "modal-card invite-modal",
              children: [
                n.jsx("button", { className: "login-close", onClick: () => k(!1), children: "×" }),
                n.jsx("h2", { children: "邀请好友加入房间" }),
                n.jsxs("p", { className: "invite-subtitle", children: ["「", N.name, "」· 邀请码 ", N.inviteCode] }),
                X.length > 0
                  ? n.jsx("div", {
                      className: "invite-friend-list",
                      children: X.map((ee) =>
                        n.jsxs(
                          "div",
                          {
                            className: "invite-friend-item",
                            children: [
                              n.jsx(qt, { user: ee, size: 38 }),
                              n.jsxs("div", { children: [n.jsx("b", { children: ee.nickname }), n.jsx("small", { children: ee.id })] }),
                              n.jsx("button", { className: "accept", onClick: () => x(ee.id), disabled: D, children: "邀请加入" }),
                            ],
                          },
                          ee.id,
                        ),
                      ),
                    })
                  : n.jsxs("div", { className: "empty compact", children: [n.jsx("span", { children: "🌱" }), n.jsx("h3", { children: "没有可邀请的好友" }), n.jsx("p", { children: "你的好友都已在房间内，或还没有添加好友" })] }),
              ],
            }),
          }),
      ],
    });
  }
  return n.jsx("div", {
    className: "page-wrap",
    children: V
      ? n.jsxs(n.Fragment, {
          children: [
            n.jsxs("div", { className: "page-intro", children: [n.jsx("span", { children: "EXPLORE" }), n.jsx("h1", { children: "浏览公开房间" }), n.jsx("p", { children: "发现同频的人，加入他们的房间" })] }),
            n.jsx("button", { className: "back-button", onClick: () => de(!1), style: { marginBottom: "16px" }, children: "← 返回我的房间" }),
            n.jsxs("div", {
              style: { background: "var(--sage-soft,#e8f0ea)", borderRadius: "12px", padding: "14px", marginBottom: "16px", display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" },
              children: [
                n.jsx("span", { style: { fontSize: "12px", color: "var(--muted)", fontWeight: 500 }, children: "筛选：" }),
                n.jsx("select", {
                  value: Z,
                  onChange: (N) => ye(N.target.value),
                  style: { padding: "6px 10px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "12px" },
                  children: ue.map((N) => n.jsx("option", { value: N, children: N || "全部MBTI" }, N)),
                }),
                n.jsx("select", {
                  value: Ce,
                  onChange: (N) => Se(N.target.value),
                  style: { padding: "6px 10px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "12px" },
                  children: R.map((N) => n.jsx("option", { value: N, children: N || "全部职业" }, N)),
                }),
                n.jsx("select", {
                  value: ke,
                  onChange: (N) => Oe(N.target.value),
                  style: { padding: "6px 10px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "12px" },
                  children: $.map((N) => n.jsx("option", { value: N, children: N || "全部年龄" }, N)),
                }),
                (Z || Ce || ke) &&
                  n.jsx("button", {
                    onClick: () => {
                      (ye(""), Se(""), Oe(""));
                    },
                    style: { background: "none", border: "none", color: "var(--sage-dark)", fontSize: "12px", cursor: "pointer" },
                    children: "清除",
                  }),
              ],
            }),
            K
              ? n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "🍃" }), n.jsx("h3", { children: "正在加载…" })] })
              : n.jsxs(n.Fragment, {
                  children: [
                    n.jsx("div", {
                      className: "room-grid",
                      children: be.map((N) =>
                        n.jsxs(
                          "div",
                          {
                            className: "room-card",
                            style: { cursor: "default" },
                            children: [
                              N.cover ? n.jsx("div", { className: "room-card-cover", style: { backgroundImage: `url(${N.cover})` } }) : n.jsx("div", { className: "room-card-cover room-cover-placeholder", children: "◈" }),
                              n.jsxs("div", {
                                className: "room-card-info",
                                children: [
                                  n.jsx("h3", { children: N.name }),
                                  n.jsxs("span", { children: [N.memberCount || 0, "/10 位成员"] }),
                                  N.tags &&
                                    Object.keys(N.tags).length > 0 &&
                                    n.jsxs("div", {
                                      style: { display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "6px" },
                                      children: [
                                        N.tags.mbti && n.jsx("span", { className: "tag", style: { fontSize: "10px", padding: "2px 8px" }, children: N.tags.mbti }),
                                        N.tags.occupation && n.jsx("span", { className: "tag", style: { fontSize: "10px", padding: "2px 8px" }, children: N.tags.occupation }),
                                        N.tags.ageGroup && n.jsx("span", { className: "tag", style: { fontSize: "10px", padding: "2px 8px" }, children: N.tags.ageGroup }),
                                      ],
                                    }),
                                  n.jsx("button", { className: "primary", style: { marginTop: "8px", width: "100%", fontSize: "12px", padding: "6px" }, onClick: () => fe(N.inviteCode), children: "加入房间" }),
                                ],
                              }),
                            ],
                          },
                          N.id,
                        ),
                      ),
                    }),
                    be.length === 0 && n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "◈" }), n.jsx("h3", { children: "没有找到匹配的房间" }), n.jsx("p", { children: "试试调整筛选条件，或创建一个公开房间" })] }),
                  ],
                }),
          ],
        })
      : n.jsxs(n.Fragment, {
          children: [
            n.jsxs("div", { className: "page-intro", children: [n.jsx("span", { children: "PRIVATE SPACE" }), n.jsx("h1", { children: "我的房间" }), n.jsx("p", { children: "创建私密空间，邀请同频的人进来聊" })] }),
            n.jsxs("div", {
              className: "room-actions",
              children: [
                n.jsx("button", { className: "primary", onClick: v, children: "＋ 创建房间" }),
                n.jsx("button", { className: "primary", onClick: j, children: "输入邀请码加入" }),
                n.jsx("button", {
                  className: "primary",
                  onClick: () => {
                    (de(!0), le());
                  },
                  children: "浏览公开房间",
                }),
              ],
            }),
            m
              ? n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "🍃" }), n.jsx("h3", { children: "正在加载…" })] })
              : n.jsxs(n.Fragment, {
                  children: [
                    n.jsx("div", {
                      className: "room-grid",
                      children: u.map((N) => {
                        var _;
                        return n.jsxs(
                          "div",
                          {
                            className: "room-card",
                            onClick: () => d(N.id),
                            children: [
                              N.cover ? n.jsx("div", { className: "room-card-cover", style: { backgroundImage: `url(${N.cover})` } }) : n.jsx("div", { className: "room-card-cover room-cover-placeholder", children: "◈" }),
                              n.jsxs("div", {
                                className: "room-card-info",
                                children: [
                                  n.jsx("h3", { children: N.name }),
                                  n.jsxs("span", { children: [((_ = N.members) == null ? void 0 : _.length) || 0, "/10 位成员 · 邀请码 ", N.inviteCode] }),
                                  N.tags &&
                                    Object.keys(N.tags || {}).length > 0 &&
                                    n.jsxs("div", {
                                      style: { display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "4px" },
                                      children: [
                                        N.tags.mbti && n.jsx("span", { className: "tag", style: { fontSize: "10px", padding: "2px 8px" }, children: N.tags.mbti }),
                                        N.tags.occupation && n.jsx("span", { className: "tag", style: { fontSize: "10px", padding: "2px 8px" }, children: N.tags.occupation }),
                                        N.tags.ageGroup && n.jsx("span", { className: "tag", style: { fontSize: "10px", padding: "2px 8px" }, children: N.tags.ageGroup }),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          },
                          N.id,
                        );
                      }),
                    }),
                    u.length === 0 && n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "◈" }), n.jsx("h3", { children: "还没有加入任何房间" }), n.jsx("p", { children: "创建一个房间，或用邀请码加入朋友的房间" })] }),
                  ],
                }),
          ],
        }),
  });
}
function n0({ file: r, onCancel: u, onConfirm: o }) {
  const c = p.useRef(null),
    m = p.useRef(null),
    d = p.useRef(null),
    h = p.useRef(null),
    [v, j] = p.useState(1),
    [y, C] = p.useState({ x: 0, y: 0 }),
    [S, T] = p.useState(!1),
    H = p.useRef(240),
    k = p.useRef(1),
    X = p.useRef({ x: 0, y: 0 }),
    J = p.useRef(1),
    D = p.useRef(null),
    I = p.useRef(null);
  (p.useEffect(() => {
    const ue = new FileReader();
    ((ue.onload = (R) => {
      var le;
      const $ = new Image();
      (($.onload = () => {
        d.current = $;
        const fe = h.current;
        if (!fe) return;
        const be = fe.clientWidth,
          w = fe.clientHeight,
          x = Math.min(be, w) * 0.72;
        H.current = x;
        const N = Math.max(x / $.width, x / $.height);
        ((k.current = N), (J.current = N), j(N), T(!0), P());
      }),
        ($.src = (le = R.target) == null ? void 0 : le.result));
    }),
      ue.readAsDataURL(r));
  }, [r]),
    p.useEffect(() => {
      X.current = y;
    }, [y]),
    p.useEffect(() => {
      J.current = v;
    }, [v]));
  const V = (ue, R, $) => {
      const le = d.current;
      if (!le) return { x: 0, y: 0 };
      const fe = H.current,
        be = le.width * $,
        w = le.height * $,
        x = Math.max(0, (be - fe) / 2),
        N = Math.max(0, (w - fe) / 2);
      return { x: Math.max(-x, Math.min(x, ue)), y: Math.max(-N, Math.min(N, R)) };
    },
    de = () => {
      const ue = c.current,
        R = d.current;
      if (!ue || !R) return;
      const $ = ue.getContext("2d");
      if (!$) return;
      const le = J.current,
        fe = X.current;
      ((ue.width = R.width),
        (ue.height = R.height),
        $.clearRect(0, 0, ue.width, ue.height),
        $.drawImage(R, 0, 0),
        (ue.style.width = `${R.width * le}px`),
        (ue.style.height = `${R.height * le}px`),
        (ue.style.transform = `translate(calc(-50% + ${fe.x}px), calc(-50% + ${fe.y}px))`));
    },
    P = () => {
      const ue = d.current;
      if (!ue) return;
      const R = m.current;
      if (!R) return;
      const $ = R.getContext("2d");
      if (!$) return;
      const le = 56;
      ((R.width = le), (R.height = le));
      const fe = H.current,
        be = J.current,
        w = X.current,
        x = ue.width / 2 - fe / be / 2 - w.x / be,
        N = ue.height / 2 - fe / be / 2 - w.y / be,
        _ = fe / be;
      $.drawImage(ue, x, N, _, _, 0, 0, le, le);
    };
  p.useEffect(() => {
    S && (de(), P());
  });
  const Y = (ue) => {
      (ue.target.setPointerCapture(ue.pointerId), (D.current = { x: ue.clientX, y: ue.clientY, ox: X.current.x, oy: X.current.y }));
    },
    K = (ue) => {
      if (!D.current) return;
      const R = ue.clientX - D.current.x,
        $ = ue.clientY - D.current.y,
        le = V(D.current.ox + R, D.current.oy + $, J.current);
      C(le);
    },
    F = () => {
      D.current = null;
    },
    Z = (ue) => {
      if (ue.touches.length === 2) {
        const R = ue.touches[0].clientX - ue.touches[1].clientX,
          $ = ue.touches[0].clientY - ue.touches[1].clientY;
        I.current = { dist: Math.hypot(R, $), scale: J.current };
      }
    },
    ye = (ue) => {
      if (ue.touches.length === 2 && I.current) {
        ue.preventDefault();
        const R = ue.touches[0].clientX - ue.touches[1].clientX,
          $ = ue.touches[0].clientY - ue.touches[1].clientY,
          fe = Math.hypot(R, $) / I.current.dist,
          be = Math.max(k.current, Math.min(k.current * 5, I.current.scale * fe)),
          w = V(X.current.x, X.current.y, be);
        (j(be), C(w));
      }
    },
    Ce = () => {
      I.current = null;
    },
    Se = (ue) => {
      const R = parseFloat(ue.target.value),
        $ = k.current * R,
        le = V(X.current.x, X.current.y, $);
      (j($), C(le));
    },
    ke = () => {
      const ue = d.current;
      if (!ue) return;
      const R = H.current,
        $ = J.current,
        le = X.current,
        fe = ue.width / 2 - R / $ / 2 - le.x / $,
        be = ue.height / 2 - R / $ / 2 - le.y / $,
        w = R / $,
        x = document.createElement("canvas"),
        N = 256;
      ((x.width = N), (x.height = N), x.getContext("2d").drawImage(ue, Math.max(0, fe), Math.max(0, be), w, w, 0, 0, N, N), o(x.toDataURL("image/jpeg", 0.85)));
    },
    Oe = v / k.current;
  return n.jsxs("div", {
    className: "avatar-cropper-overlay",
    children: [
      n.jsxs("div", {
        className: "avatar-cropper-topbar",
        children: [n.jsx("button", { onClick: u, children: "取消" }), n.jsx("span", { style: { color: "#fff", fontSize: 15, fontWeight: 600 }, children: "裁剪头像" }), n.jsx("button", { className: "confirm-btn", onClick: ke, children: "选取" })],
      }),
      n.jsxs("div", {
        className: "avatar-cropper-stage",
        ref: h,
        onPointerDown: Y,
        onPointerMove: K,
        onPointerUp: F,
        onPointerCancel: F,
        onTouchStart: Z,
        onTouchMove: ye,
        onTouchEnd: Ce,
        children: [S && n.jsx("canvas", { ref: c }), n.jsx("div", { className: "avatar-cropper-frame", style: { width: H.current, height: H.current } })],
      }),
      n.jsxs("div", {
        className: "avatar-cropper-controls",
        children: [
          n.jsxs("div", {
            className: "avatar-cropper-preview-row",
            children: [n.jsx("div", { className: "avatar-cropper-preview", children: n.jsx("canvas", { ref: m }) }), n.jsx("span", { className: "avatar-cropper-preview-label", children: "预览效果" })],
          }),
          n.jsx("input", { type: "range", className: "avatar-cropper-slider", min: 1, max: 5, step: 0.01, value: Oe, onChange: Se }),
        ],
      }),
    ],
  });
}
function i0({ onClose: r, user: u, flash: o, onSuccess: c }) {
  const [m, d] = p.useState(u.nickname),
    [h, v] = p.useState(u.avatar),
    [j, y] = p.useState(u.avatarType),
    [C, S] = p.useState(!1),
    [T, H] = p.useState(!1),
    [k, X] = p.useState(null),
    [J, D] = p.useState(!1),
    [I, V] = p.useState(""),
    de = async (F) => {
      (X(null), S(!0));
      try {
        const Z = mp(F),
          ye = await Eu(`avatar_${Date.now()}`, Z, Z.type || "image/jpeg");
        (v(ye), y("image"));
      } catch {
        o("头像上传失败");
      }
      S(!1);
    },
    P = () => {
      (V(h && h.length <= 4 ? h : m[0] || "？"), D(!0));
    },
    Y = () => {
      const F = I.trim();
      (F && (v(F), y("char")), D(!1));
    },
    K = async () => {
      if (m.trim()) {
        H(!0);
        try {
          (await pe("/api/user/profile", { userId: u.id, nickname: m.trim(), avatar: h, avatarType: j }), c({ ...u, nickname: m.trim(), avatar: h, avatarType: j }));
        } catch {
          o("更新失败，请重试");
        }
        H(!1);
      }
    };
  return n.jsxs(n.Fragment, {
    children: [
      n.jsx("div", {
        className: "modal-overlay",
        onMouseDown: (F) => {
          F.target === F.currentTarget && r();
        },
        children: n.jsxs("div", {
          className: "modal-card",
          children: [
            n.jsx("button", { className: "login-close", onClick: r, children: "×" }),
            n.jsx("h2", { children: "编辑资料" }),
            n.jsxs("div", {
              className: "profile-edit-avatar",
              children: [
                n.jsx("div", {
                  className: "avatar-preview",
                  children:
                    j === "image" && h
                      ? n.jsx("span", { className: "profile-avatar profile-avatar-img", style: { backgroundImage: `url(${h})`, backgroundSize: "cover", backgroundPosition: "center" } })
                      : n.jsx("span", { className: "profile-avatar char-avatar-clickable", onClick: P, children: h }),
                }),
                n.jsxs("div", {
                  className: "avatar-actions",
                  children: [
                    n.jsxs("label", {
                      className: "avatar-upload-btn",
                      children: [
                        C ? "上传中…" : "上传图片",
                        n.jsx("input", {
                          type: "file",
                          accept: "image/*",
                          style: { display: "none" },
                          onChange: (F) => {
                            var ye;
                            const Z = (ye = F.target.files) == null ? void 0 : ye[0];
                            (Z && X(Z), (F.target.value = ""));
                          },
                        }),
                      ],
                    }),
                    n.jsx("button", { onClick: P, children: "文字头像" }),
                  ],
                }),
              ],
            }),
            n.jsxs("label", { className: "edit-nickname", children: ["昵称", n.jsx("input", { value: m, onChange: (F) => d(F.target.value), maxLength: 20, placeholder: "输入昵称" })] }),
            n.jsx("button", { className: "primary", onClick: K, disabled: !m.trim() || T, children: T ? "保存中…" : "保存" }),
          ],
        }),
      }),
      J &&
        n.jsx("div", {
          className: "char-avatar-overlay",
          onMouseDown: (F) => {
            F.target === F.currentTarget && D(!1);
          },
          children: n.jsxs("div", {
            className: "char-avatar-dialog",
            children: [
              n.jsx("h3", { children: "自定义文字头像" }),
              n.jsx("p", { className: "char-avatar-hint", children: "输入1-4个字符，点击确认即可" }),
              n.jsx("input", {
                className: "char-avatar-input",
                value: I,
                onChange: (F) => V(F.target.value),
                maxLength: 4,
                placeholder: "如：雨、🌙、AB",
                autoFocus: !0,
                onKeyDown: (F) => {
                  F.key === "Enter" && I.trim() && Y();
                },
              }),
              n.jsxs("div", { className: "char-avatar-preview-row", children: [n.jsx("span", { className: "profile-avatar", children: I || "?" }), n.jsx("small", { children: "预览效果" })] }),
              n.jsxs("div", { className: "char-avatar-actions", children: [n.jsx("button", { onClick: () => D(!1), children: "取消" }), n.jsx("button", { className: "primary", onClick: Y, disabled: !I.trim(), children: "确认" })] }),
            ],
          }),
        }),
      k && n.jsx(n0, { file: k, onCancel: () => X(null), onConfirm: de }),
    ],
  });
}
function l0({ onClose: r, userId: u, flash: o, onSuccess: c }) {
  const [m, d] = p.useState(""),
    [h, v] = p.useState(""),
    [j, y] = p.useState(!1),
    [C, S] = p.useState(!1),
    [T, H] = p.useState(""),
    [k, X] = p.useState(""),
    [J, D] = p.useState(""),
    [I, V] = p.useState(!1),
    de = yp,
    P = jp,
    Y = Sp,
    K = async (Z) => {
      y(!0);
      try {
        const ye = await Us(Z);
        v(ye);
      } catch {
        o("封面图上传失败");
      }
      y(!1);
    },
    F = async () => {
      if (m.trim()) {
        S(!0);
        try {
          const Z = {};
          (T && (Z.mbti = T), k && (Z.occupation = k), J && (Z.ageGroup = J));
          const ye = await pe("/api/rooms", { name: m.trim(), owner: u, cover: h, tags: Z, isPublic: I });
          ye.success === !0 ? c(ye.room || ye) : o(ye.error || ye.message || "创建失败");
        } catch {
          o("创建失败，请重试");
        }
        S(!1);
      }
    };
  return n.jsx("div", {
    className: "modal-overlay",
    onMouseDown: (Z) => {
      Z.target === Z.currentTarget && r();
    },
    children: n.jsxs("div", {
      className: "modal-card",
      style: { maxHeight: "85vh", overflowY: "auto" },
      children: [
        n.jsx("button", { className: "login-close", onClick: r, children: "×" }),
        n.jsx("h2", { children: "创建房间" }),
        n.jsxs("label", { children: ["房间名称", n.jsx("input", { value: m, onChange: (Z) => d(Z.target.value), placeholder: "给房间起个名字", maxLength: 20 })] }),
        h
          ? n.jsxs("div", { className: "cover-preview", children: [n.jsx("img", { src: h, alt: "" }), n.jsx("button", { onClick: () => v(""), children: "移除封面" })] })
          : n.jsxs("label", {
              className: "cover-upload-btn",
              children: [
                j ? "上传中…" : "＋ 上传封面图（可选）",
                n.jsx("input", {
                  type: "file",
                  accept: "image/*",
                  style: { display: "none" },
                  onChange: (Z) => {
                    var Ce;
                    const ye = (Ce = Z.target.files) == null ? void 0 : Ce[0];
                    ye && K(ye);
                  },
                }),
              ],
            }),
        n.jsxs("fieldset", {
          style: { marginTop: "12px" },
          children: [
            n.jsx("legend", { children: "房间标签（可选）" }),
            n.jsxs("div", {
              style: { display: "flex", flexDirection: "column", gap: "10px" },
              children: [
                n.jsxs("label", {
                  style: { fontSize: "12px", color: "var(--muted)" },
                  children: [
                    "MBTI类型",
                    n.jsx("select", {
                      value: T,
                      onChange: (Z) => H(Z.target.value),
                      style: { width: "100%", padding: "8px", borderRadius: "10px", border: "1px solid #e0e0e0", fontSize: "13px", marginTop: "4px" },
                      children: de.map((Z) => n.jsx("option", { value: Z, children: Z || "不设置" }, Z)),
                    }),
                  ],
                }),
                n.jsxs("label", {
                  style: { fontSize: "12px", color: "var(--muted)" },
                  children: [
                    "主要职业方向",
                    n.jsx("select", {
                      value: k,
                      onChange: (Z) => X(Z.target.value),
                      style: { width: "100%", padding: "8px", borderRadius: "10px", border: "1px solid #e0e0e0", fontSize: "13px", marginTop: "4px" },
                      children: P.map((Z) => n.jsx("option", { value: Z, children: Z || "不设置" }, Z)),
                    }),
                  ],
                }),
                n.jsxs("label", {
                  style: { fontSize: "12px", color: "var(--muted)" },
                  children: [
                    "年龄段",
                    n.jsx("select", {
                      value: J,
                      onChange: (Z) => D(Z.target.value),
                      style: { width: "100%", padding: "8px", borderRadius: "10px", border: "1px solid #e0e0e0", fontSize: "13px", marginTop: "4px" },
                      children: Y.map((Z) => n.jsx("option", { value: Z, children: Z || "不设置" }, Z)),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        n.jsxs("label", {
          style: { display: "flex", alignItems: "center", gap: "8px", marginTop: "12px", fontSize: "13px", cursor: "pointer" },
          children: [n.jsx("input", { type: "checkbox", checked: I, onChange: (Z) => V(Z.target.checked), style: { width: "16px", height: "16px" } }), n.jsx("span", { children: '公开房间（其他人可在"浏览房间"中看到并申请加入）' })],
        }),
        n.jsx("button", { className: "primary", onClick: F, disabled: !m.trim() || C, children: C ? "创建中…" : "创建房间" }),
      ],
    }),
  });
}
function s0({ onClose: r, userId: u, flash: o, onSuccess: c }) {
  const [m, d] = p.useState(""),
    [h, v] = p.useState(!1),
    j = async () => {
      if (!/^\d{4}$/.test(m)) {
        o("请输入4位邀请码");
        return;
      }
      v(!0);
      try {
        const y = await pe("/api/rooms/join", { code: m, userId: u });
        y.success === !0 ? c() : o(y.error || y.message || "加入失败");
      } catch {
        o("加入失败，请重试");
      }
      v(!1);
    };
  return n.jsx("div", {
    className: "modal-overlay",
    onMouseDown: (y) => {
      y.target === y.currentTarget && r();
    },
    children: n.jsxs("div", {
      className: "modal-card",
      children: [
        n.jsx("button", { className: "login-close", onClick: r, children: "×" }),
        n.jsx("h2", { children: "加入房间" }),
        n.jsxs("label", { children: ["邀请码", n.jsx("input", { value: m, onChange: (y) => d(y.target.value.replace(/\D/g, "")), placeholder: "输入4位邀请码", maxLength: 4, className: "code-input-field" })] }),
        n.jsx("button", { className: "primary", onClick: j, disabled: !m || h, children: h ? "加入中…" : "加入房间" }),
      ],
    }),
  });
}
function r0({ userId: r, flash: u }) {
  const [o, c] = p.useState([]),
    [m, d] = p.useState(!0),
    h = async () => {
      try {
        const j = await qe(`/api/user/blocks/${r}`);
        c(j.blocks || []);
      } catch {
        u("加载黑名单失败");
      }
      d(!1);
    };
  p.useEffect(() => {
    h();
  }, [r]);
  const v = async (j) => {
    try {
      (await pe("/api/user/unblock", { userId: r, targetUserId: j }), c((y) => y.filter((C) => C.id !== j)), u("已解除拉黑"));
    } catch {
      u("操作失败");
    }
  };
  return m
    ? n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "🍃" }), n.jsx("h3", { children: "正在加载…" })] })
    : n.jsx("div", {
        children:
          o.length > 0
            ? o.map((j) =>
                n.jsxs(
                  "div",
                  {
                    className: "block-list-item",
                    children: [
                      n.jsx(qt, { user: j, size: 42 }),
                      n.jsxs("div", { className: "block-item-info", children: [n.jsx("b", { children: j.nickname }), n.jsx("small", { children: j.id })] }),
                      n.jsx("button", { className: "unblock-btn", onClick: () => v(j.id), children: "解除拉黑" }),
                    ],
                  },
                  j.id,
                ),
              )
            : n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "🚫" }), n.jsx("h3", { children: "黑名单是空的" }), n.jsx("p", { children: "你还没有拉黑任何用户" })] }),
      });
}
function c0({ violation: r, userId: u, onClose: o, onDone: c, flash: m }) {
  const [d, h] = p.useState(""),
    [v, j] = p.useState(!1),
    y = r.type === "chat" ? "聊天" : r.type === "post" ? "帖子" : r.type === "comment" ? "评论" : r.type,
    C = async () => {
      if (!v) {
        j(!0);
        try {
          const S = await pe("/api/appeal", { userId: u, violationId: r.id, reason: d });
          S.success ? (m(S.message || "申诉已提交"), c(), o()) : m(S.error || "申诉提交失败");
        } catch {
          m("申诉提交失败，请稍后再试");
        }
        j(!1);
      }
    };
  return n.jsx("div", {
    className: "modal-overlay",
    onMouseDown: (S) => {
      S.target === S.currentTarget && o();
    },
    children: n.jsxs("div", {
      className: "modal-card appeal-card",
      children: [
        n.jsx("button", { className: "login-close", onClick: o, children: "×" }),
        n.jsx("h3", { style: { margin: "0 0 4px", fontSize: "17px" }, children: "违规申诉" }),
        n.jsxs("p", { style: { fontSize: "12px", color: "var(--muted)", margin: "0 0 12px" }, children: [r.time, " · ", y, "违规"] }),
        n.jsx("div", { className: "appeal-section-label", children: "被判定违规的内容" }),
        n.jsx("div", { className: "appeal-snippet", children: r.snippet || "（该记录无内容快照，可能来自旧版本记录）" }),
        n.jsx("div", { className: "appeal-section-label", children: "命中的敏感词" }),
        n.jsx("div", { className: "appeal-word-chips", children: (r.words || []).map((S, T) => n.jsx("span", { className: "appeal-word-chip", children: S }, T)) }),
        n.jsx("p", { className: "appeal-hint", children: "💡 提交后系统会结合完整语境自动复核该词是否真的违规；若系统无法确定，将转交管理员人工复核，结果会同步到你的违规记录中。" }),
        n.jsx("textarea", { className: "appeal-reason-input", value: d, onChange: (S) => h(S.target.value), maxLength: 300, placeholder: "补充说明当时语境（选填），例如：这是歌词引用 / 自嘲 / 正常讨论…" }),
        n.jsx("button", { className: "appeal-submit-btn", onClick: C, disabled: v, children: v ? "复核中…" : "提交申诉" }),
      ],
    }),
  });
}
function o0({ userId: r, flash: u, isSuperAdmin: o }) {
  const [c, m] = p.useState("reports"),
    [d, h] = p.useState({ pending: [], done: [] }),
    [v, j] = p.useState([]),
    [y, C] = p.useState([]),
    [S, T] = p.useState([]),
    [H, k] = p.useState(!0),
    [X, J] = p.useState(null),
    [D, I] = p.useState(""),
    [V, de] = p.useState(null),
    [P, Y] = p.useState(!1),
    [K, F] = p.useState(null),
    Z = async () => {
      try {
        const x = await qe(`/api/admin/reports?userId=${r}`);
        j(x.reports || []);
      } catch {
        u("加载举报列表失败");
      }
      k(!1);
    },
    ye = async () => {
      try {
        const x = await qe(`/api/admin/appeals?userId=${r}`);
        h({ pending: x.pending || [], done: x.done || [] });
      } catch {
        u("加载申诉列表失败");
      }
    },
    Ce = async (x, N) => {
      try {
        const _ = await pe("/api/admin/appeal-action", { userId: r, appealId: x, action: N });
        _.success ? (u(_.message || "已处理"), ye()) : u(_.error || "操作失败");
      } catch {
        u("操作失败");
      }
    },
    Se = async () => {
      try {
        const x = await qe(`/api/admin/banned?userId=${r}`);
        C(x.bannedUsers || []);
      } catch {
        u("加载封禁列表失败");
      }
    },
    ke = async () => {
      try {
        const x = await qe(`/api/admin/list?userId=${r}`);
        T(x.admins || []);
      } catch {
        u("加载管理员列表失败");
      }
    },
    Oe = async () => {
      const x = D.trim().toUpperCase();
      if (x)
        try {
          const N = await qe(`/api/user/search?id=${x}`);
          N.user ? de(N.user) : (de(null), u("用户不存在"));
        } catch {
          (de(null), u("搜索失败"));
        }
    },
    ue = async () => {
      if (V) {
        Y(!0);
        try {
          const x = await pe("/api/admin/add", { userId: r, targetUserId: V.id });
          x.success ? (u("已添加管理员"), I(""), de(null), ke()) : u(x.error || "添加失败");
        } catch {
          u("添加失败");
        }
        Y(!1);
      }
    },
    R = async (x) => {
      try {
        const N = await pe("/api/admin/remove", { userId: r, targetUserId: x });
        N.success ? (T((_) => _.filter((ee) => ee.userId !== x)), u("已移除管理员")) : u(N.error || "移除失败");
      } catch {
        u("移除失败");
      }
      F(null);
    };
  (p.useEffect(() => {
    (Z(), Se(), ye());
  }, [r]),
    p.useEffect(() => {
      c === "admins" && o && ke();
    }, [c, o]));
  const $ = async (x) => {
      try {
        const N = await pe("/api/admin/report-action", { userId: r, reportId: x.id, action: "ban" });
        if (N.success) {
          const _ = N.banLevel === 1 ? "1个月" : N.banLevel === 2 ? "1年" : "永久";
          (u(`已封禁用户，封禁时长：${_}`), j((ee) => ee.filter((he) => he.id !== x.id)), Se());
        } else u(N.error || "封禁失败");
      } catch {
        u("封禁失败");
      }
      J(null);
    },
    le = async (x) => {
      try {
        const N = await pe("/api/admin/report-action", { userId: r, reportId: x, action: "dismiss" });
        N.success ? (j((_) => _.filter((ee) => ee.id !== x)), u("已驳回举报")) : u(N.error || "操作失败");
      } catch {
        u("操作失败");
      }
    },
    fe = async (x) => {
      if (confirm("确定解封该用户？"))
        try {
          const N = await pe("/api/admin/unban", { userId: r, targetUserId: x });
          N.success ? (C((_) => _.filter((ee) => ee.userId !== x)), u("已解封")) : u(N.error || "解封失败");
        } catch {
          u("解封失败");
        }
    },
    be = (x) => (x === 1 ? "1个月" : x === 2 ? "1年" : "永久"),
    w = (x) => {
      if (x === null) return "永久封禁";
      const N = new Date(x * 1e3);
      return `${N.getFullYear()}-${String(N.getMonth() + 1).padStart(2, "0")}-${String(N.getDate()).padStart(2, "0")}`;
    };
  return n.jsxs("div", {
    className: "admin-panel",
    children: [
      n.jsxs("div", {
        className: "admin-tabs",
        children: [
          n.jsxs("button", { className: c === "reports" ? "active" : "", onClick: () => m("reports"), children: ["举报列表", v.length > 0 && n.jsx("span", { className: "admin-badge", children: v.length })] }),
          n.jsxs("button", { className: c === "banned" ? "active" : "", onClick: () => m("banned"), children: ["封禁列表", y.length > 0 && n.jsx("span", { className: "admin-badge", children: y.length })] }),
          n.jsxs("button", { className: c === "appeals" ? "active" : "", onClick: () => m("appeals"), children: ["申诉复核", d.pending.length > 0 && n.jsx("span", { className: "admin-badge", children: d.pending.length })] }),
          o && n.jsx("button", { className: c === "admins" ? "active" : "", onClick: () => m("admins"), children: "管理员管理" }),
        ],
      }),
      c === "reports" &&
        n.jsx(n.Fragment, {
          children: H
            ? n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "🍃" }), n.jsx("h3", { children: "正在加载…" })] })
            : v.length > 0
              ? v.map((x) =>
                  n.jsxs(
                    "div",
                    {
                      className: "report-card",
                      children: [
                        n.jsxs("div", {
                          className: "report-card-top",
                          children: [
                            n.jsx("span", { className: "report-type-tag", children: x.targetType === "post" ? "帖子" : "评论" }),
                            x.contentDeleted && n.jsx("span", { className: "report-deleted-tag", children: "原内容已删除" }),
                            n.jsx("span", { className: "report-time", children: x.time }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "report-content-box",
                          children: [
                            x.targetType === "comment" && x.contentPostTitle && n.jsxs("div", { className: "report-content-post-ref", children: ["所属帖子：「", x.contentPostTitle, "」"] }),
                            x.contentTitle && n.jsx("div", { className: "report-content-title", children: x.contentTitle }),
                            x.contentBody && n.jsx("div", { className: "report-content-body", children: x.contentBody }),
                            x.contentImage && n.jsx("div", { className: "report-content-image", children: n.jsx("img", { src: x.contentImage, alt: "举报内容附图", loading: "lazy" }) }),
                            !x.contentTitle && !x.contentBody && !x.contentImage && n.jsx("div", { className: "report-content-empty", children: "（无内容快照）" }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "report-user-info",
                          children: [n.jsxs("span", { children: ["被举报人：", n.jsx("b", { children: x.authorNickname }), " (", x.authorId, ")"] }), n.jsxs("span", { children: ["举报人：", x.reporterNickname] })],
                        }),
                        n.jsxs("div", { className: "report-reason", children: ["原因：", x.reason] }),
                        n.jsxs("div", {
                          className: "report-actions",
                          children: [n.jsx("button", { className: "admin-ban-btn", onClick: () => J(x), children: "封禁用户" }), n.jsx("button", { className: "admin-dismiss-btn", onClick: () => le(x.id), children: "驳回" })],
                        }),
                      ],
                    },
                    x.id,
                  ),
                )
              : n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "✅" }), n.jsx("h3", { children: "暂无待处理举报" })] }),
        }),
      c === "banned" &&
        n.jsx(n.Fragment, {
          children:
            y.length > 0
              ? y.map((x) =>
                  n.jsxs(
                    "div",
                    {
                      className: "banned-card",
                      children: [
                        n.jsxs("div", {
                          className: "banned-user-info",
                          children: [n.jsx(qt, { user: { avatar: x.avatar, avatarType: x.avatarType, id: x.userId }, size: 38 }), n.jsxs("div", { children: [n.jsx("b", { children: x.nickname }), n.jsx("small", { children: x.userId })] })],
                        }),
                        n.jsxs("div", {
                          className: "banned-details",
                          children: [
                            n.jsxs("span", { className: `ban-level-tag level-${x.level}`, children: [x.source === "auto" ? "🤖系统" : "👤人工", "封禁", be(x.level)] }),
                            n.jsxs("span", { children: ["第 ", x.banCount, " 次封禁"] }),
                            n.jsxs("span", { children: ["封禁时间：", x.bannedTime] }),
                            n.jsxs("span", { children: ["解封时间：", w(x.until)] }),
                            x.reason && n.jsxs("span", { children: ["原因：", x.reason] }),
                            x.isExpired && n.jsx("span", { style: { color: "#e8915c" }, children: "已过期（可解封）" }),
                          ],
                        }),
                        n.jsx("button", { className: "admin-unban-btn", onClick: () => fe(x.userId), children: "解封" }),
                      ],
                    },
                    x.userId,
                  ),
                )
              : n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "✅" }), n.jsx("h3", { children: "暂无封禁用户" })] }),
        }),
      c === "appeals" &&
        n.jsxs(n.Fragment, {
          children: [
            d.pending.length > 0
              ? d.pending.map((x) =>
                  n.jsxs(
                    "div",
                    {
                      className: "report-card",
                      children: [
                        n.jsxs("div", {
                          className: "report-card-top",
                          children: [
                            n.jsxs("span", { className: "report-type-tag", children: [x.type === "chat" ? "聊天" : x.type === "post" ? "帖子" : x.type === "comment" ? "评论" : "内容", "违规申诉"] }),
                            n.jsx("span", { className: "report-time", children: x.time }),
                          ],
                        }),
                        n.jsx("div", { className: "report-content-box", children: n.jsx("div", { className: "report-content-body", children: x.snippet || "（无内容快照）" }) }),
                        n.jsxs("div", {
                          className: "report-user-info",
                          children: [n.jsxs("span", { children: ["申诉人：", n.jsx("b", { children: x.uid })] }), n.jsxs("span", { children: ["命中词：", n.jsx("b", { style: { color: "#c4543d" }, children: (x.words || []).join("、") })] })],
                        }),
                        x.reason && n.jsxs("div", { className: "report-reason", children: ["申诉理由:", x.reason] }),
                        n.jsxs("div", { className: "report-reason", children: ["🤖 系统复核：", x.aiVerdict === "uncertain" ? `无法确定${x.aiReason ? `（${x.aiReason}）` : ""}` : "AI 服务暂不可用", "，需人工裁定"] }),
                        n.jsxs("div", {
                          className: "report-actions",
                          children: [
                            n.jsx("button", { className: "admin-dismiss-btn", onClick: () => Ce(x.id, "approve"), children: "批准申诉（撤销违规）" }),
                            n.jsx("button", { className: "admin-ban-btn", onClick: () => Ce(x.id, "reject"), children: "维持原判" }),
                          ],
                        }),
                      ],
                    },
                    x.id,
                  ),
                )
              : n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "✅" }), n.jsx("h3", { children: "暂无待复核申诉" })] }),
            d.done.length > 0 &&
              n.jsxs(n.Fragment, {
                children: [
                  n.jsx("h3", { style: { fontSize: "13px", color: "var(--muted)", margin: "18px 0 8px" }, children: "最近已处理" }),
                  d.done.map((x) =>
                    n.jsxs(
                      "div",
                      {
                        className: "report-card",
                        style: { opacity: 0.7 },
                        children: [
                          n.jsxs("div", {
                            className: "report-card-top",
                            children: [n.jsx("span", { className: "report-type-tag", children: x.status === "approved" ? "✅ 已撤销违规" : "❌ 已驳回" }), n.jsx("span", { className: "report-time", children: x.handledAt || x.time })],
                          }),
                          n.jsxs("div", { className: "report-user-info", children: [n.jsxs("span", { children: ["申诉人：", x.uid] }), n.jsxs("span", { children: ["命中词：", (x.words || []).join("、")] })] }),
                        ],
                      },
                      x.id,
                    ),
                  ),
                ],
              }),
          ],
        }),
      c === "admins" &&
        o &&
        n.jsxs(n.Fragment, {
          children: [
            n.jsxs("div", {
              style: { background: "rgba(111,145,125,0.06)", borderRadius: "12px", padding: "14px", marginBottom: "16px" },
              children: [
                n.jsx("h3", { style: { fontSize: "14px", fontWeight: 600, margin: "0 0 10px", color: "var(--sage-dark)" }, children: "添加管理员" }),
                n.jsxs("div", {
                  className: "friend-search-bar",
                  style: { marginBottom: "8px" },
                  children: [
                    n.jsx("input", {
                      value: D,
                      onChange: (x) => {
                        (I(x.target.value), de(null));
                      },
                      placeholder: "输入用户MT ID",
                      onKeyDown: (x) => {
                        x.key === "Enter" && Oe();
                      },
                    }),
                    n.jsx("button", { onClick: Oe, children: "搜索" }),
                  ],
                }),
                V &&
                  n.jsxs("div", {
                    className: "friend-search-result",
                    style: { marginBottom: "8px" },
                    children: [
                      n.jsx(qt, { user: V, size: 38 }),
                      n.jsxs("div", { children: [n.jsx("b", { children: V.nickname }), n.jsx("small", { children: V.id })] }),
                      n.jsx("button", { className: "accept", onClick: ue, disabled: P, children: P ? "添加中…" : "添加为管理员" }),
                    ],
                  }),
              ],
            }),
            n.jsx("div", { className: "mine-title", style: { marginBottom: "12px" }, children: n.jsx("div", { children: n.jsxs("h2", { style: { fontSize: "16px" }, children: ["当前管理员 (", S.length, ")"] }) }) }),
            S.length > 0
              ? S.map((x) =>
                  n.jsxs(
                    "div",
                    {
                      className: "banned-card",
                      children: [
                        n.jsxs("div", {
                          className: "banned-user-info",
                          children: [
                            n.jsx(qt, { user: { avatar: x.avatar, avatarType: x.avatarType, id: x.userId }, size: 38 }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("b", { children: x.nickname }),
                                n.jsx("small", { children: x.userId }),
                                x.isSuperAdmin &&
                                  n.jsx("span", { style: { display: "inline-block", marginLeft: "6px", fontSize: "10px", background: "var(--sage-soft)", color: "var(--sage-dark)", padding: "1px 6px", borderRadius: "4px" }, children: "超级管理员" }),
                              ],
                            }),
                          ],
                        }),
                        !x.isSuperAdmin && n.jsx("button", { className: "admin-unban-btn", onClick: () => F(x), children: "移除" }),
                      ],
                    },
                    x.userId,
                  ),
                )
              : n.jsxs("div", { className: "empty", children: [n.jsx("span", { children: "🛡️" }), n.jsx("h3", { children: "暂无管理员" })] }),
          ],
        }),
      K &&
        n.jsx("div", {
          className: "report-overlay",
          onMouseDown: (x) => {
            x.target === x.currentTarget && F(null);
          },
          children: n.jsxs("div", {
            className: "report-dialog",
            style: { maxWidth: "360px" },
            children: [
              n.jsx("h2", { children: "确认移除管理员" }),
              n.jsxs("p", { className: "report-subtitle", children: ["即将移除「", K.nickname, "」的管理员权限"] }),
              n.jsx("p", { style: { fontSize: "11px", color: "var(--muted)", lineHeight: 1.6, margin: "4px 0 14px" }, children: "移除后该用户将无法查看管理面板，不再拥有举报审核和封禁权限。" }),
              n.jsxs("div", {
                style: { display: "flex", gap: "10px" },
                children: [
                  n.jsx("button", { className: "report-cancel-btn", onClick: () => F(null), children: "取消" }),
                  n.jsx("button", { className: "report-submit-btn", style: { background: "#c4543d" }, onClick: () => R(K.userId), children: "确认移除" }),
                ],
              }),
            ],
          }),
        }),
      X &&
        n.jsx("div", {
          className: "report-overlay",
          onMouseDown: (x) => {
            x.target === x.currentTarget && J(null);
          },
          children: n.jsxs("div", {
            className: "report-dialog",
            style: { maxWidth: "360px" },
            children: [
              n.jsx("h2", { children: "确认封禁" }),
              n.jsxs("p", { className: "report-subtitle", children: ["即将封禁用户「", X.authorNickname, "」"] }),
              n.jsx("div", {
                style: { background: "#f5f5f0", borderRadius: "12px", padding: "14px", margin: "10px 0", fontSize: "12px", color: "var(--muted)", lineHeight: 1.7 },
                children:
                  !X.banCount || X.banCount === 0
                    ? '该用户为首次违规，将封禁 <b style="color:#c4543d">1个月</b>'
                    : X.banCount === 1
                      ? '该用户为第二次违规，将封禁 <b style="color:#c4543d">1年</b>'
                      : '该用户为多次违规，将 <b style="color:#c4543d">永久封禁</b>',
              }),
              n.jsx("p", { style: { fontSize: "11px", color: "var(--muted)", lineHeight: 1.6, margin: "4px 0 14px" }, children: "封禁后该用户的内容对其他人不可见（影子封禁），用户本人不会收到通知。" }),
              n.jsxs("div", {
                style: { display: "flex", gap: "10px" },
                children: [
                  n.jsx("button", { className: "report-cancel-btn", onClick: () => J(null), children: "取消" }),
                  n.jsx("button", { className: "report-submit-btn", style: { background: "#c4543d" }, onClick: () => $(X), children: "确认封禁" }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
function u0({ userId: r, flash: u, openPost: o }) {
  var x;
  const [c, m] = p.useState(new Date().getFullYear()),
    [d, h] = p.useState(new Date().getMonth() + 1),
    [v, j] = p.useState(null),
    [y, C] = p.useState(null),
    [S, T] = p.useState([]),
    [H, k] = p.useState(null),
    [X, J] = p.useState(!1),
    [D, I] = p.useState([]),
    [V, de] = p.useState(!1),
    [P, Y] = p.useState("calendar"),
    K = new Date(),
    F = c === K.getFullYear() && d === K.getMonth() + 1,
    Z = new Date(c, d, 0).getDate(),
    ye = new Date(c, d - 1, 1).getDay(),
    Ce = async (N, _) => {
      de(!0);
      try {
        const ee = await qe(`/api/memory/calendar?year=${N}&month=${_}&userid=${r}`);
        (j(ee), C(null), T([]));
      } catch {
        u("加载日历失败");
      }
      de(!1);
    },
    Se = async () => {
      de(!0);
      try {
        const N = String(K.getMonth() + 1).padStart(2, "0"),
          _ = String(K.getDate()).padStart(2, "0"),
          ee = await qe(`/api/memory/on-this-day?month=${N}&day=${_}&userid=${r}`);
        I(ee.posts || []);
      } catch {
        u("加载那年今日失败");
      }
      de(!1);
    },
    ke = async (N) => {
      de(!0);
      try {
        const _ = await qe(`/api/memory/year-review?year=${N}&userid=${r}`);
        (k(_), J(!0));
      } catch {
        u("加载年度回忆失败");
      }
      de(!1);
    };
  p.useEffect(() => {
    Ce(c, d);
  }, [c, d]);
  const Oe = async (N) => {
      var _, ee;
      (C(N), de(!0));
      try {
        let he = (_ = v == null ? void 0 : v.days) == null ? void 0 : _[N];
        if (!he) {
          const Ee = await qe(`/api/memory/calendar?year=${c}&month=${d}&userid=${r}`);
          he = (ee = Ee == null ? void 0 : Ee.days) == null ? void 0 : ee[N];
        }
        if (!he) {
          (T([]), de(!1));
          return;
        }
        const ze = ((await qe(`/api/user/posts?userid=${r}`)).posts || []).filter((Ee) => (Ee.time || "").startsWith(`${c}-${String(d).padStart(2, "0")}-${N}`));
        T(ze);
      } catch {
        T([]);
      }
      de(!1);
    },
    ue = () => {
      d === 1 ? (m((N) => N - 1), h(12)) : h((N) => N - 1);
    },
    R = () => {
      d === 12 ? (m((N) => N + 1), h(1)) : h((N) => N + 1);
    },
    $ = () => {
      m((N) => N - 1);
    },
    le = () => {
      m((N) => N + 1);
    },
    fe = ["日", "一", "二", "三", "四", "五", "六"],
    be = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    w = [];
  for (let N = 0; N < ye; N++) w.push(n.jsx("div", { className: "cal-cell cal-empty" }, `empty-${N}`));
  for (let N = 1; N <= Z; N++) {
    const _ = String(N).padStart(2, "0"),
      ee = (x = v == null ? void 0 : v.days) == null ? void 0 : x[_],
      he = F && N === K.getDate();
    w.push(
      n.jsxs(
        "div",
        { className: `cal-cell${ee ? " has-post" : ""}${he ? " is-today" : ""}${y === _ ? " selected" : ""}`, onClick: () => Oe(_), children: [n.jsx("span", { className: "cal-day-num", children: N }), ee && n.jsx("span", { className: "cal-dot" })] },
        N,
      ),
    );
  }
  return n.jsxs("div", {
    className: "memories-wrap",
    children: [
      n.jsx("style", {
        children: `
      .memories-wrap{--cal-size:36px;padding:0 4px}
      .memories-tabs{display:flex;gap:8px;margin-bottom:16px}
      .memories-tabs button{flex:1;padding:8px 0;border:1.5px solid var(--sage-soft,#e8f0ea);border-radius:10px;background:transparent;font-size:13px;cursor:pointer;color:var(--text,#333);transition:all 0.2s;font-weight:500}
      .memories-tabs button.active{background:var(--sage-dark,#6f917d);color:#fff;border-color:var(--sage-dark,#6f917d)}
      .cal-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;padding:0 2px}.cal-header .cal-nav-group{display:flex;align-items:center;gap:2px}.cal-header .cal-nav-group button{font-size:26px;padding:10px 14px}
      .cal-header button{background:none;border:none;font-size:16px;cursor:pointer;padding:4px 10px;color:var(--sage-dark,#6f917d);border-radius:6px}
      .cal-header button:hover{background:var(--sage-soft,#e8f0ea)}
      .cal-header h3{margin:0;font-size:15px;font-weight:600}
      .cal-weekdays{display:grid;grid-template-columns:repeat(7,1fr);gap:2px;margin-bottom:6px;text-align:center}
      .cal-weekday{font-size:11px;color:var(--muted,#999);padding:4px 0}
      .cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px}
      .cal-cell{display:flex;flex-direction:column;align-items:center;justify-content:center;height:var(--cal-size);border-radius:8px;cursor:default;position:relative;font-size:13px;transition:all 0.15s}
      .cal-cell.has-post{cursor:pointer}
      .cal-cell.has-post:hover{background:var(--sage-soft,#e8f0ea)}
      .cal-cell.is-today .cal-day-num{background:var(--sage-dark,#6f917d);color:#fff;width:26px;height:26px;display:flex;align-items:center;justify-content:center;border-radius:50%;font-weight:600}
      .cal-cell.selected .cal-day-num{background:var(--sage,#8faf9a);color:#fff;width:26px;height:26px;display:flex;align-items:center;justify-content:center;border-radius:50%;font-weight:600}
      .cal-day-num{line-height:1}
      .cal-dot{width:4px;height:4px;border-radius:50%;background:var(--sage-dark,#6f917d);position:absolute;bottom:3px}
      .cal-cell.has-post .cal-day-num{font-weight:500}
      .cal-empty{visibility:hidden}
      .cal-summary{text-align:center;font-size:12px;color:var(--muted,#999);margin-top:10px;padding:6px 0;border-top:1px solid var(--sage-soft,#e8f0ea)}
      .cal-day-posts{margin-top:12px}
      .cal-day-posts h4{font-size:13px;margin:0 0 8px;color:var(--sage-dark,#6f917d)}
      .cal-day-post{background:var(--sage-soft,#e8f0ea);border-radius:10px;padding:10px 12px;margin-bottom:8px;cursor:pointer;transition:all 0.15s}
      .cal-day-post:hover{background:#dde8e0}
      .cal-day-post h5{margin:0 0 4px;font-size:13px;font-weight:600}
      .cal-day-post p{margin:0;font-size:12px;color:#666;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
      .cal-day-post small{font-size:10px;color:var(--muted,#999)}
      .onthistday-section{margin-top:6px}
      .onthistday-section h3{font-size:14px;margin:0 0 10px;display:flex;align-items:center;gap:6px}
      .onthistday-post{display:flex;align-items:flex-start;gap:10px;padding:10px 12px;background:var(--sage-soft,#e8f0ea);border-radius:10px;margin-bottom:8px;cursor:pointer;transition:all 0.15s}
      .onthistday-post:hover{background:#dde8e0}
      .onthistday-post .otd-year{font-size:11px;color:var(--sage-dark,#6f917d);font-weight:600;white-space:nowrap;min-width:36px;padding-top:2px}
      .onthistday-post .otd-content{flex:1}
      .onthistday-post .otd-content h5{margin:0 0 2px;font-size:13px;font-weight:600}
      .onthistday-post .otd-content p{margin:0;font-size:12px;color:#666;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
      .year-review-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:300;background:rgba(0,0,0,0.4);display:flex;align-items:center;justify-content:center;padding:20px;animation:fadeIn 0.2s}
      .year-review-modal{background:linear-gradient(145deg,#faf8f3,#f5f0e8);border-radius:20px;padding:24px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto;box-shadow:0 10px 40px rgba(0,0,0,0.15);animation:bottleSlideUp 0.3s}
      .year-review-modal h2{text-align:center;font-size:20px;margin:0 0 4px}
      .year-review-modal .yr-sub{text-align:center;font-size:12px;color:var(--muted,#999);margin-bottom:16px}
      .yr-stat{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed rgba(0,0,0,0.06);font-size:13px}
      .yr-stat:last-child{border-bottom:none}
      .yr-stat .yr-label{color:#666}
      .yr-stat .yr-value{font-weight:600;color:var(--sage-dark,#6f917d)}
      .yr-monthly{display:flex;gap:3px;justify-content:center;margin:12px 0;padding:8px 0}
      .yr-month-bar{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px}
      .yr-month-bar .bar{width:100%;border-radius:3px 3px 0 0;background:var(--sage-soft,#e8f0ea);min-height:4px;transition:height 0.3s}
      .yr-month-bar .bar.has{background:var(--sage-dark,#6f917d)}
      .yr-month-bar .mlabel{font-size:8px;color:var(--muted,#999)}
      .yr-empty{text-align:center;padding:40px 10px;color:var(--muted,#999)}
      .yr-empty span{font-size:40px;display:block;margin-bottom:12px}
      .yr-close-btn{display:block;width:100%;padding:10px;border:none;border-radius:10px;background:var(--sage-dark,#6f917d);color:#fff;font-size:14px;cursor:pointer;margin-top:16px;font-weight:500}
      .yr-close-btn:hover{opacity:0.9}
      @keyframes fadeIn{from{opacity:0}to{opacity:1}}
    `,
      }),
      n.jsxs("div", {
        className: "memories-tabs",
        children: [
          n.jsx("button", { className: P === "calendar" ? "active" : "", onClick: () => Y("calendar"), children: "📅 足迹日历" }),
          n.jsx("button", {
            className: P === "onthistday" ? "active" : "",
            onClick: () => {
              (Y("onthistday"), Se());
            },
            children: "🕰️ 那年今日",
          }),
        ],
      }),
      P === "calendar"
        ? n.jsxs(n.Fragment, {
            children: [
              n.jsxs("div", {
                className: "cal-header",
                children: [
                  n.jsxs("div", { className: "cal-nav-group", children: [n.jsx("button", { onClick: $, children: "«" }), n.jsx("button", { onClick: ue, children: "‹" })] }),
                  n.jsxs("h3", { children: [c, "年 ", be[d - 1]] }),
                  n.jsxs("div", { className: "cal-nav-group", children: [n.jsx("button", { onClick: R, children: "›" }), n.jsx("button", { onClick: le, children: "»" })] }),
                ],
              }),
              n.jsx("div", { className: "cal-weekdays", children: fe.map((N) => n.jsx("div", { className: "cal-weekday", children: N }, N)) }),
              n.jsx("div", { className: "cal-grid", children: w }),
              v && n.jsxs("div", { className: "cal-summary", children: ["本月共记录了 ", v.total || 0, " 条心事"] }),
              v &&
                v.total > 0 &&
                n.jsx("div", {
                  style: { textAlign: "center", marginTop: "10px" },
                  children: n.jsxs("button", {
                    onClick: () => ke(c),
                    style: { background: "var(--sage-soft,#e8f0ea)", border: "none", borderRadius: "10px", padding: "8px 18px", fontSize: "12px", cursor: "pointer", color: "var(--sage-dark,#6f917d)", fontWeight: 500 },
                    children: ["📖 查看 ", c, " 年度回忆录"],
                  }),
                }),
              y &&
                n.jsxs("div", {
                  className: "cal-day-posts",
                  children: [
                    n.jsxs("h4", { children: ["📝 ", c, "年", d, "月", y, "日"] }),
                    S.length === 0
                      ? n.jsx("div", { style: { textAlign: "center", padding: "20px 0", fontSize: "13px", color: "var(--muted)" }, children: "当天没有更多记录" })
                      : S.map((N) =>
                          n.jsxs(
                            "div",
                            {
                              className: "cal-day-post",
                              onClick: () => (o == null ? void 0 : o(N.id)),
                              children: [n.jsx("h5", { children: N.title || "无标题" }), n.jsx("p", { children: N.content }), n.jsxs("small", { children: ["❤️ ", N.likes || 0, " · 💛 ", N.hugs || 0] })],
                            },
                            N.id,
                          ),
                        ),
                  ],
                }),
            ],
          })
        : n.jsx(n.Fragment, {
            children: n.jsxs("div", {
              className: "onthistday-section",
              children: [
                n.jsxs("h3", { children: ["🕰️ ", K.getMonth() + 1, "月", K.getDate(), "日的回忆"] }),
                D.length === 0
                  ? n.jsxs("div", {
                      className: "yr-empty",
                      children: [n.jsx("span", { children: "📭" }), n.jsx("p", { children: "还没有往年的今日记录" }), n.jsx("p", { style: { fontSize: "11px" }, children: "继续在树洞记录生活，明年今日就会看到回忆" })],
                    })
                  : D.map((N) =>
                      n.jsxs(
                        "div",
                        {
                          className: "onthistday-post",
                          onClick: () => (o == null ? void 0 : o(N.id)),
                          children: [n.jsx("div", { className: "otd-year", children: N.year }), n.jsxs("div", { className: "otd-content", children: [n.jsx("h5", { children: N.title || "无标题" }), n.jsx("p", { children: N.content })] })],
                        },
                        N.id,
                      ),
                    ),
              ],
            }),
          }),
      V && n.jsx("div", { style: { textAlign: "center", padding: "20px", color: "var(--muted)" }, children: "加载中..." }),
      X &&
        H &&
        n.jsx("div", {
          className: "year-review-overlay",
          onClick: (N) => {
            N.target === N.currentTarget && J(!1);
          },
          children: n.jsxs("div", {
            className: "year-review-modal",
            children: [
              n.jsxs("h2", { children: ["📖 ", H.year, " 年度回忆录"] }),
              n.jsx("div", { className: "yr-sub", children: "你在树洞留下的每一个足迹" }),
              H.totalPosts === 0
                ? n.jsxs("div", { className: "yr-empty", children: [n.jsx("span", { children: "📭" }), n.jsx("p", { children: "这一年还没有留下记录" }), n.jsx("p", { style: { fontSize: "11px" }, children: "开始在树洞记录你的生活吧" })] })
                : n.jsxs(n.Fragment, {
                    children: [
                      n.jsxs("div", { className: "yr-stat", children: [n.jsx("span", { className: "yr-label", children: "📝 发布帖子" }), n.jsxs("span", { className: "yr-value", children: [H.totalPosts, " 篇"] })] }),
                      n.jsxs("div", { className: "yr-stat", children: [n.jsx("span", { className: "yr-label", children: "❤️ 收到点赞" }), n.jsxs("span", { className: "yr-value", children: [H.totalLikes, " 次"] })] }),
                      n.jsxs("div", { className: "yr-stat", children: [n.jsx("span", { className: "yr-label", children: "💛 收到拥抱" }), n.jsxs("span", { className: "yr-value", children: [H.totalHugs, " 次"] })] }),
                      H.mostActiveMonth &&
                        n.jsxs("div", { className: "yr-stat", children: [n.jsx("span", { className: "yr-label", children: "📅 最活跃月份" }), n.jsxs("span", { className: "yr-value", children: [parseInt(H.mostActiveMonth), "月"] })] }),
                      H.longestPost &&
                        n.jsxs("div", {
                          className: "yr-stat",
                          children: [n.jsx("span", { className: "yr-label", children: "✍️ 最长心事" }), n.jsxs("span", { className: "yr-value", style: { fontSize: "11px" }, children: ['"', H.longestPost, '..."'] })],
                        }),
                      H.firstPost &&
                        n.jsxs("div", { className: "yr-stat", children: [n.jsx("span", { className: "yr-label", children: "🎬 第一条记录" }), n.jsx("span", { className: "yr-value", style: { fontSize: "11px" }, children: H.firstPost.time })] }),
                      n.jsx("div", {
                        className: "yr-monthly",
                        children: Array.from({ length: 12 }, (N, _) => {
                          var Ee;
                          const ee = String(_ + 1).padStart(2, "0"),
                            he = ((Ee = H.monthlyDistribution) == null ? void 0 : Ee[ee]) || 0,
                            je = Math.max(...Object.values(H.monthlyDistribution || {}).map(Number), 1),
                            ze = he > 0 ? Math.max(8, (he / je) * 50) : 4;
                          return n.jsxs("div", { className: "yr-month-bar", children: [n.jsx("div", { className: `bar${he > 0 ? " has" : ""}`, style: { height: `${ze}px` } }), n.jsxs("span", { className: "mlabel", children: [_ + 1, "月"] })] }, ee);
                        }),
                      }),
                    ],
                  }),
              n.jsx("button", { className: "yr-close-btn", onClick: () => J(!1), children: "关闭" }),
            ],
          }),
        }),
    ],
  });
}
function d0({ post: r, user: u, onClose: o, flash: c }) {
  const [m, d] = p.useState("friends"),
    [h, v] = p.useState([]),
    [j, y] = p.useState([]),
    [C, S] = p.useState(!1);
  p.useEffect(() => {
    (qe(`/api/friends/${u.id}`)
      .then((H) => v(H.friends || []))
      .catch(() => {}),
      qe(`/api/rooms/list/${u.id}`)
        .then((H) => y(H.rooms || []))
        .catch(() => {}));
  }, [u.id]);
  const T = async (H, k) => {
    if (C) return;
    S(!0);
    const X = window.location.origin + window.location.pathname + "?post=" + r.id,
      J = `✨ 分享了一个心事
《${r.title}》
—— ${r.author}
${X}`;
    try {
      const D = await pe("/api/chat/send", { type: k, target: H, from: u.id, content: J });
      D && D.error ? c(D.error) : (c("已分享 ✅"), o());
    } catch {
      c("分享失败，请重试");
    }
    S(!1);
  };
  return n.jsx("div", {
    className: "modal-overlay",
    onMouseDown: (H) => {
      H.target === H.currentTarget && o();
    },
    children: n.jsxs("div", {
      className: "share-modal",
      children: [
        n.jsx("button", { className: "login-close", onClick: o, children: "×" }),
        n.jsx("h3", { style: { margin: "0 0 12px", fontSize: "17px" }, children: "分享到" }),
        n.jsxs("div", {
          className: "share-tabs",
          style: { display: "flex", gap: "0", marginBottom: "14px", background: "var(--sage-soft)", borderRadius: "10px", overflow: "hidden" },
          children: [
            n.jsxs("button", {
              className: m === "friends" ? "active" : "",
              onClick: () => d("friends"),
              style: {
                flex: 1,
                border: "none",
                padding: "9px 0",
                fontSize: "13px",
                cursor: "pointer",
                background: m === "friends" ? "var(--sage-dark)" : "transparent",
                color: m === "friends" ? "#fff" : "var(--sage-dark)",
                fontWeight: m === "friends" ? 600 : 400,
              },
              children: ["好友 (", h.length, ")"],
            }),
            n.jsxs("button", {
              className: m === "rooms" ? "active" : "",
              onClick: () => d("rooms"),
              style: {
                flex: 1,
                border: "none",
                padding: "9px 0",
                fontSize: "13px",
                cursor: "pointer",
                background: m === "rooms" ? "var(--sage-dark)" : "transparent",
                color: m === "rooms" ? "#fff" : "var(--sage-dark)",
                fontWeight: m === "rooms" ? 600 : 400,
              },
              children: ["房间 (", j.length, ")"],
            }),
          ],
        }),
        n.jsx("div", {
          className: "share-list",
          style: { maxHeight: "280px", overflowY: "auto" },
          children:
            m === "friends"
              ? h.length
                ? h.map((H) =>
                    n.jsxs(
                      "button",
                      {
                        className: "share-item",
                        onClick: () => T(u.id + "_" + H.id, "dm"),
                        disabled: C,
                        style: { display: "flex", alignItems: "center", gap: "10px", width: "100%", border: "none", background: "none", padding: "9px 4px", cursor: "pointer", borderRadius: "8px", fontSize: "14px", textAlign: "left" },
                        children: [n.jsx(qt, { user: { avatar: H.avatar, avatarType: H.avatarType, id: H.id }, size: 34 }), n.jsx("span", { children: H.alias || H.nickname })],
                      },
                      H.id,
                    ),
                  )
                : n.jsx("p", { style: { color: "var(--muted)", fontSize: "13px", textAlign: "center", padding: "20px 0" }, children: "暂无好友" })
              : j.length
                ? j.map((H) => {
                    var k;
                    return n.jsxs(
                      "button",
                      {
                        className: "share-item",
                        onClick: () => T(H.id, "room"),
                        disabled: C,
                        style: { display: "flex", alignItems: "center", gap: "10px", width: "100%", border: "none", background: "none", padding: "9px 4px", cursor: "pointer", borderRadius: "8px", fontSize: "14px", textAlign: "left" },
                        children: [
                          n.jsx("span", { style: { fontSize: "18px", width: "34px", textAlign: "center" }, children: "◇" }),
                          n.jsx("span", { children: H.name }),
                          n.jsxs("small", { style: { marginLeft: "auto", color: "var(--muted)" }, children: [((k = H.members) == null ? void 0 : k.length) || 0, " 人"] }),
                        ],
                      },
                      H.id,
                    );
                  })
                : n.jsx("p", { style: { color: "var(--muted)", fontSize: "13px", textAlign: "center", padding: "20px 0" }, children: "未加入任何房间" }),
        }),
      ],
    }),
  });
}
async function Au(r, u = 500) {
  var d;
  const c = /[\u4e00-\u9fff]/.test(r) ? "zh|en" : "en|zh",
    m = [];
  for (let h = 0; h < r.length; h += u) {
    const v = r.slice(h, h + u);
    h > 0 && (await new Promise((j) => setTimeout(j, 300)));
    try {
      const y = await (await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(v)}&langpair=${c}`)).json();
      m.push(((d = y.responseData) == null ? void 0 : d.translatedText) || v);
    } catch {
      m.push(v);
    }
  }
  return m.join(" ");
}
function Ru(r, u) {
  const o = r.toLowerCase().indexOf(u.toLowerCase());
  return o >= 0 ? o : 0;
}
function Ou({ text: r, words: u, currentIdx: o }) {
  const c = [],
    m = r.toLowerCase(),
    d = [];
  (u.forEach((v, j) => {
    const y = v.toLowerCase();
    let C = 0;
    for (; C < r.length;) {
      const S = m.indexOf(y, C);
      if (S === -1) break;
      (d.push({ start: S, end: S + v.length, wordIdx: j }), (C = S + 1));
    }
  }),
    d.sort((v, j) => v.start - j.start));
  let h = 0;
  for (const v of d) v.start < h || (v.start > h && c.push({ text: r.slice(h, v.start), isVio: !1 }), c.push({ text: r.slice(v.start, v.end), isVio: !0, wordIdx: v.wordIdx }), (h = v.end));
  return (
    h < r.length && c.push({ text: r.slice(h), isVio: !1 }),
    n.jsx("div", {
      style: {
        background: "#fff",
        border: "1px solid #ffcdd2",
        borderRadius: "8px",
        padding: "10px 12px",
        fontSize: "13px",
        lineHeight: "1.7",
        maxHeight: "100px",
        overflowY: "auto",
        marginBottom: "8px",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        fontFamily: "inherit",
      },
      children:
        c.length === 0
          ? n.jsx("span", { style: { color: "#999" }, children: "（原文为空）" })
          : c.map((v, j) =>
              v.isVio
                ? n.jsx("span", { style: { color: "#d32f2f", fontWeight: 600, background: v.wordIdx === o ? "#ffcdd2" : "#fff0f0", borderRadius: "2px", padding: "0 2px" }, children: v.text }, j)
                : n.jsx("span", { style: { color: "#333" }, children: v.text }, j),
            ),
    })
  );
}

function VioHL({ text: r, words: u, currentIdx: o }) {
  if (!r || !u || u.length === 0) return null;
  const c = [], m = r.toLowerCase(), d = [];
  u.forEach((v, j) => {
    const y = v.toLowerCase();
    let C = 0;
    for (; C < r.length;) {
      const S = m.indexOf(y, C);
      if (S === -1) break;
      d.push({ start: S, end: S + v.length, wordIdx: j }), C = S + 1;
    }
  });
  d.sort((v, j) => v.start - j.start);
  let h = 0;
  for (const v of d) v.start < h || (v.start > h && c.push({ text: r.slice(h, v.start), isVio: !1 }), c.push({ text: r.slice(v.start, v.end), isVio: !0, wordIdx: v.wordIdx }), h = v.end);
  h < r.length && c.push({ text: r.slice(h), isVio: !1 });
  return n.jsx("div", {
    style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, padding: "14px 16px", fontSize: "12px", lineHeight: "1.7", whiteSpace: "pre-wrap", wordBreak: "break-word", overflow: "hidden", color: "#546158", pointerEvents: "none", zIndex: 0, fontFamily: "inherit" },
    children: c.length === 0 ? null : c.map((v, j) => v.isVio ? n.jsx("span", { style: { color: "#c4543d", fontWeight: 600, background: "rgba(196,84,61,0.15)", borderRadius: 2, padding: "0 1px" }, children: v.text }, j) : n.jsx("span", { children: v.text }, j)),
  });
}
function VioPV({ text: r, words: u }) {
  if (!r || !u || u.length === 0) return null;
  return n.jsx("div", { style: { fontSize: 11, color: "#c4543d", marginTop: 3 }, children: ["违规词: ", VioHL({ text: r, words: u, currentIdx: -1 })] });
}

var _commentVioWords = [];
function _checkCommentVio(r) {
  const Jn = r.toLowerCase(), Ei = [];
  const Vy = ['操你','操你妈','操你娘','操你祖宗','操你老妈','操你老母','操妳','操妳妈','操妳娘','操比','操逼','草你妈','草泥马','草你娘','草吗','草拟妈','肏你','肏死','操死','他妈的','他妈地','他马的','他妈','他娘','妈的','妈b','妈个b','妈比','妈逼','妈的b','妈个比','妈妈的','你妈','你妈的','你娘','你奶奶的','你她妈的','你它妈的','你他妈','你马的','去你妈的','傻逼','傻比','傻b','傻bi','煞笔','煞逼','脑残','脑瘫','废物','垃圾','辣鸡','腊鸡','沙雕','韭菜','白痴','笨蛋','蠢货','蠢猪','猪头','混蛋','王八蛋','鳖孙','贱人','贱货','贱b','贱逼','婊子','婊子养的','荡妇','浪女','骚货','骚比','骚逼','骚女','烂货','烂逼','绿茶婊','心机婊','撩骚','鸡巴','鸡吧','鸡叭','几把','几巴','几叭','鸡鸡','小鸡鸡','鸡奸','阳具','阴茎','阴道','阴户','阴唇','阴核','阴毛','龟头','屌丝','逼样','乳头','乳房','奶子','巨乳','做爱','性交','性器','性无能','强奸','轮奸','妓女','妓院','嫖娼','嫖客','卖淫','招妓','姘头','炮友','一夜情','援交','援助交际','自慰','手淫','打飞机','打炮','狗日的','狗娘养的','狗屁','狗屎','狗杂种','杂种','野种','孽种','畜生','畜牲','狗东西','去死','去死吧','你完蛋了','找死','作死','该死','找抽','找打','弄死你','弄死','打死你','干你','干你妈','干你娘','干你老母','干死你','干死','干妳妈','幹你娘','幹','靠北','靠爸','靠腰','靠母','靠背','屁眼','射精','精子','内射','颜射','口交','肛交','吹箫','叫床','潮吹','nmsl','wcnm','wocao','woc','tmd','nmb','wdnmd','cnm','wtf','stfu','kys','kmt','sb'];
  for (const Bu of Vy) {
    if (Bu === 'nc') {
      for (let Pu = 0; Pu <= Jn.length - 2; Pu++) {
        if (Jn[Pu] === 'n' && Jn[Pu + 1] === 'c') {
          const Iu = Pu > 0 ? Jn[Pu - 1] : ' ', Nu = Pu + 2 < Jn.length ? Jn[Pu + 2] : ' ';
          if (!/[a-z]/.test(Iu) && !/[a-z]/.test(Nu)) { Ei.push(Bu); break; }
        }
      }
    } else if (Jn.includes(Bu)) { Ei.push(Bu); }
  }
  _commentVioWords = Ei;
}
Hx.createRoot(document.getElementById("root")).render(n.jsx(Dx.StrictMode, { children: n.jsx(Dv, { children: n.jsx(Uv, {}) }) }));
