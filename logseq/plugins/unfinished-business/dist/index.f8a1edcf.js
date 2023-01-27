var t =
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof self
    ? self
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : {};
function e(t) {
  return t && t.__esModule ? t.default : t;
}
var n = {},
  r = {},
  o = t.parcelRequire52d3;
null == o &&
  (((o = function (t) {
    if (t in n) return n[t].exports;
    if (t in r) {
      var e = r[t];
      delete r[t];
      var o = { id: t, exports: {} };
      return (n[t] = o), e.call(o.exports, o, o.exports), o.exports;
    }
    var i = new Error("Cannot find module '" + t + "'");
    throw ((i.code = "MODULE_NOT_FOUND"), i);
  }).register = function (t, e) {
    r[t] = e;
  }),
  (t.parcelRequire52d3 = o)),
  o.register("cVm5l", function (e, n) {
    /*! For license information please see lsplugin.user.js.LICENSE.txt */ self,
      (e.exports = (() => {
        var r = {
            227: (t, e, n) => {
              var r = n(155);
              (e.formatArgs = function (e) {
                if (
                  ((e[0] =
                    (this.useColors ? "%c" : "") +
                    this.namespace +
                    (this.useColors ? " %c" : " ") +
                    e[0] +
                    (this.useColors ? "%c " : " ") +
                    "+" +
                    t.exports.humanize(this.diff)),
                  !this.useColors)
                )
                  return;
                const n = "color: " + this.color;
                e.splice(1, 0, n, "color: inherit");
                let r = 0,
                  o = 0;
                e[0].replace(/%[a-zA-Z%]/g, (t) => {
                  "%%" !== t && (r++, "%c" === t && (o = r));
                }),
                  e.splice(o, 0, n);
              }),
                (e.save = function (t) {
                  try {
                    t
                      ? e.storage.setItem("debug", t)
                      : e.storage.removeItem("debug");
                  } catch (t) {}
                }),
                (e.load = function () {
                  let t;
                  try {
                    t = e.storage.getItem("debug");
                  } catch (t) {}
                  return (
                    !t && void 0 !== r && "env" in r && (t = r.env.DEBUG), t
                  );
                }),
                (e.useColors = function () {
                  return (
                    !(
                      "undefined" == typeof window ||
                      !window.process ||
                      ("renderer" !== window.process.type &&
                        !window.process.__nwjs)
                    ) ||
                    (("undefined" == typeof navigator ||
                      !navigator.userAgent ||
                      !navigator.userAgent
                        .toLowerCase()
                        .match(/(edge|trident)\/(\d+)/)) &&
                      (("undefined" != typeof document &&
                        document.documentElement &&
                        document.documentElement.style &&
                        document.documentElement.style.WebkitAppearance) ||
                        ("undefined" != typeof window &&
                          window.console &&
                          (window.console.firebug ||
                            (window.console.exception &&
                              window.console.table))) ||
                        ("undefined" != typeof navigator &&
                          navigator.userAgent &&
                          navigator.userAgent
                            .toLowerCase()
                            .match(/firefox\/(\d+)/) &&
                          parseInt(RegExp.$1, 10) >= 31) ||
                        ("undefined" != typeof navigator &&
                          navigator.userAgent &&
                          navigator.userAgent
                            .toLowerCase()
                            .match(/applewebkit\/(\d+)/))))
                  );
                }),
                (e.storage = (function () {
                  try {
                    return localStorage;
                  } catch (t) {}
                })()),
                (e.destroy = (() => {
                  let t = !1;
                  return () => {
                    t ||
                      ((t = !0),
                      console.warn(
                        "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
                      ));
                  };
                })()),
                (e.colors = [
                  "#0000CC",
                  "#0000FF",
                  "#0033CC",
                  "#0033FF",
                  "#0066CC",
                  "#0066FF",
                  "#0099CC",
                  "#0099FF",
                  "#00CC00",
                  "#00CC33",
                  "#00CC66",
                  "#00CC99",
                  "#00CCCC",
                  "#00CCFF",
                  "#3300CC",
                  "#3300FF",
                  "#3333CC",
                  "#3333FF",
                  "#3366CC",
                  "#3366FF",
                  "#3399CC",
                  "#3399FF",
                  "#33CC00",
                  "#33CC33",
                  "#33CC66",
                  "#33CC99",
                  "#33CCCC",
                  "#33CCFF",
                  "#6600CC",
                  "#6600FF",
                  "#6633CC",
                  "#6633FF",
                  "#66CC00",
                  "#66CC33",
                  "#9900CC",
                  "#9900FF",
                  "#9933CC",
                  "#9933FF",
                  "#99CC00",
                  "#99CC33",
                  "#CC0000",
                  "#CC0033",
                  "#CC0066",
                  "#CC0099",
                  "#CC00CC",
                  "#CC00FF",
                  "#CC3300",
                  "#CC3333",
                  "#CC3366",
                  "#CC3399",
                  "#CC33CC",
                  "#CC33FF",
                  "#CC6600",
                  "#CC6633",
                  "#CC9900",
                  "#CC9933",
                  "#CCCC00",
                  "#CCCC33",
                  "#FF0000",
                  "#FF0033",
                  "#FF0066",
                  "#FF0099",
                  "#FF00CC",
                  "#FF00FF",
                  "#FF3300",
                  "#FF3333",
                  "#FF3366",
                  "#FF3399",
                  "#FF33CC",
                  "#FF33FF",
                  "#FF6600",
                  "#FF6633",
                  "#FF9900",
                  "#FF9933",
                  "#FFCC00",
                  "#FFCC33",
                ]),
                (e.log = console.debug || console.log || (() => {})),
                (t.exports = n(447)(e));
              const { formatters: o } = t.exports;
              o.j = function (t) {
                try {
                  return JSON.stringify(t);
                } catch (t) {
                  return "[UnexpectedJSONParseError]: " + t.message;
                }
              };
            },
            447: (t, e, n) => {
              t.exports = function (t) {
                function e(t) {
                  let n,
                    o = null;
                  function i(...t) {
                    if (!i.enabled) return;
                    const r = i,
                      o = Number(new Date()),
                      a = o - (n || o);
                    (r.diff = a),
                      (r.prev = n),
                      (r.curr = o),
                      (n = o),
                      (t[0] = e.coerce(t[0])),
                      "string" != typeof t[0] && t.unshift("%O");
                    let u = 0;
                    (t[0] = t[0].replace(/%([a-zA-Z%])/g, (n, o) => {
                      if ("%%" === n) return "%";
                      u++;
                      const i = e.formatters[o];
                      if ("function" == typeof i) {
                        const e = t[u];
                        (n = i.call(r, e)), t.splice(u, 1), u--;
                      }
                      return n;
                    })),
                      e.formatArgs.call(r, t),
                      (r.log || e.log).apply(r, t);
                  }
                  return (
                    (i.namespace = t),
                    (i.useColors = e.useColors()),
                    (i.color = e.selectColor(t)),
                    (i.extend = r),
                    (i.destroy = e.destroy),
                    Object.defineProperty(i, "enabled", {
                      enumerable: !0,
                      configurable: !1,
                      get: () => (null === o ? e.enabled(t) : o),
                      set: (t) => {
                        o = t;
                      },
                    }),
                    "function" == typeof e.init && e.init(i),
                    i
                  );
                }
                function r(t, n) {
                  const r = e(this.namespace + (void 0 === n ? ":" : n) + t);
                  return (r.log = this.log), r;
                }
                function o(t) {
                  return t
                    .toString()
                    .substring(2, t.toString().length - 2)
                    .replace(/\.\*\?$/, "*");
                }
                return (
                  (e.debug = e),
                  (e.default = e),
                  (e.coerce = function (t) {
                    return t instanceof Error ? t.stack || t.message : t;
                  }),
                  (e.disable = function () {
                    const t = [
                      ...e.names.map(o),
                      ...e.skips.map(o).map((t) => "-" + t),
                    ].join(",");
                    return e.enable(""), t;
                  }),
                  (e.enable = function (t) {
                    let n;
                    e.save(t), (e.names = []), (e.skips = []);
                    const r = ("string" == typeof t ? t : "").split(/[\s,]+/),
                      o = r.length;
                    for (n = 0; n < o; n++)
                      r[n] &&
                        ("-" === (t = r[n].replace(/\*/g, ".*?"))[0]
                          ? e.skips.push(new RegExp("^" + t.substr(1) + "$"))
                          : e.names.push(new RegExp("^" + t + "$")));
                  }),
                  (e.enabled = function (t) {
                    if ("*" === t[t.length - 1]) return !0;
                    let n, r;
                    for (n = 0, r = e.skips.length; n < r; n++)
                      if (e.skips[n].test(t)) return !1;
                    for (n = 0, r = e.names.length; n < r; n++)
                      if (e.names[n].test(t)) return !0;
                    return !1;
                  }),
                  (e.humanize = n(824)),
                  (e.destroy = function () {
                    console.warn(
                      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
                    );
                  }),
                  Object.keys(t).forEach((n) => {
                    e[n] = t[n];
                  }),
                  (e.names = []),
                  (e.skips = []),
                  (e.formatters = {}),
                  (e.selectColor = function (t) {
                    let n = 0;
                    for (let e = 0; e < t.length; e++)
                      (n = (n << 5) - n + t.charCodeAt(e)), (n |= 0);
                    return e.colors[Math.abs(n) % e.colors.length];
                  }),
                  e.enable(e.load()),
                  e
                );
              };
            },
            856: function (t) {
              t.exports = (function () {
                var t = Object.hasOwnProperty,
                  e = Object.setPrototypeOf,
                  n = Object.isFrozen,
                  r = Object.getPrototypeOf,
                  o = Object.getOwnPropertyDescriptor,
                  i = Object.freeze,
                  a = Object.seal,
                  u = Object.create,
                  c = "undefined" != typeof Reflect && Reflect,
                  s = c.apply,
                  l = c.construct;
                s ||
                  (s = function (t, e, n) {
                    return t.apply(e, n);
                  }),
                  i ||
                    (i = function (t) {
                      return t;
                    }),
                  a ||
                    (a = function (t) {
                      return t;
                    }),
                  l ||
                    (l = function (t, e) {
                      return new (Function.prototype.bind.apply(
                        t,
                        [null].concat(
                          (function (t) {
                            if (Array.isArray(t)) {
                              for (
                                var e = 0, n = Array(t.length);
                                e < t.length;
                                e++
                              )
                                n[e] = t[e];
                              return n;
                            }
                            return Array.from(t);
                          })(e),
                        ),
                      ))();
                    });
                var f,
                  p = x(Array.prototype.forEach),
                  h = x(Array.prototype.pop),
                  d = x(Array.prototype.push),
                  g = x(String.prototype.toLowerCase),
                  v = x(String.prototype.match),
                  y = x(String.prototype.replace),
                  m = x(String.prototype.indexOf),
                  _ = x(String.prototype.trim),
                  b = x(RegExp.prototype.test),
                  w =
                    ((f = TypeError),
                    function () {
                      for (
                        var t = arguments.length, e = Array(t), n = 0;
                        n < t;
                        n++
                      )
                        e[n] = arguments[n];
                      return l(f, e);
                    });
                function x(t) {
                  return function (e) {
                    for (
                      var n = arguments.length,
                        r = Array(n > 1 ? n - 1 : 0),
                        o = 1;
                      o < n;
                      o++
                    )
                      r[o - 1] = arguments[o];
                    return s(t, e, r);
                  };
                }
                function O(t, r) {
                  e && e(t, null);
                  for (var o = r.length; o--; ) {
                    var i = r[o];
                    if ("string" == typeof i) {
                      var a = g(i);
                      a !== i && (n(r) || (r[o] = a), (i = a));
                    }
                    t[i] = !0;
                  }
                  return t;
                }
                function A(e) {
                  var n = u(null),
                    r = void 0;
                  for (r in e) s(t, e, [r]) && (n[r] = e[r]);
                  return n;
                }
                function C(t, e) {
                  for (; null !== t; ) {
                    var n = o(t, e);
                    if (n) {
                      if (n.get) return x(n.get);
                      if ("function" == typeof n.value) return x(n.value);
                    }
                    t = r(t);
                  }
                  return function (t) {
                    return console.warn("fallback value for", t), null;
                  };
                }
                var S = i([
                    "a",
                    "abbr",
                    "acronym",
                    "address",
                    "area",
                    "article",
                    "aside",
                    "audio",
                    "b",
                    "bdi",
                    "bdo",
                    "big",
                    "blink",
                    "blockquote",
                    "body",
                    "br",
                    "button",
                    "canvas",
                    "caption",
                    "center",
                    "cite",
                    "code",
                    "col",
                    "colgroup",
                    "content",
                    "data",
                    "datalist",
                    "dd",
                    "decorator",
                    "del",
                    "details",
                    "dfn",
                    "dialog",
                    "dir",
                    "div",
                    "dl",
                    "dt",
                    "element",
                    "em",
                    "fieldset",
                    "figcaption",
                    "figure",
                    "font",
                    "footer",
                    "form",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "head",
                    "header",
                    "hgroup",
                    "hr",
                    "html",
                    "i",
                    "img",
                    "input",
                    "ins",
                    "kbd",
                    "label",
                    "legend",
                    "li",
                    "main",
                    "map",
                    "mark",
                    "marquee",
                    "menu",
                    "menuitem",
                    "meter",
                    "nav",
                    "nobr",
                    "ol",
                    "optgroup",
                    "option",
                    "output",
                    "p",
                    "picture",
                    "pre",
                    "progress",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "samp",
                    "section",
                    "select",
                    "shadow",
                    "small",
                    "source",
                    "spacer",
                    "span",
                    "strike",
                    "strong",
                    "style",
                    "sub",
                    "summary",
                    "sup",
                    "table",
                    "tbody",
                    "td",
                    "template",
                    "textarea",
                    "tfoot",
                    "th",
                    "thead",
                    "time",
                    "tr",
                    "track",
                    "tt",
                    "u",
                    "ul",
                    "var",
                    "video",
                    "wbr",
                  ]),
                  j = i([
                    "svg",
                    "a",
                    "altglyph",
                    "altglyphdef",
                    "altglyphitem",
                    "animatecolor",
                    "animatemotion",
                    "animatetransform",
                    "circle",
                    "clippath",
                    "defs",
                    "desc",
                    "ellipse",
                    "filter",
                    "font",
                    "g",
                    "glyph",
                    "glyphref",
                    "hkern",
                    "image",
                    "line",
                    "lineargradient",
                    "marker",
                    "mask",
                    "metadata",
                    "mpath",
                    "path",
                    "pattern",
                    "polygon",
                    "polyline",
                    "radialgradient",
                    "rect",
                    "stop",
                    "style",
                    "switch",
                    "symbol",
                    "text",
                    "textpath",
                    "title",
                    "tref",
                    "tspan",
                    "view",
                    "vkern",
                  ]),
                  k = i([
                    "feBlend",
                    "feColorMatrix",
                    "feComponentTransfer",
                    "feComposite",
                    "feConvolveMatrix",
                    "feDiffuseLighting",
                    "feDisplacementMap",
                    "feDistantLight",
                    "feFlood",
                    "feFuncA",
                    "feFuncB",
                    "feFuncG",
                    "feFuncR",
                    "feGaussianBlur",
                    "feMerge",
                    "feMergeNode",
                    "feMorphology",
                    "feOffset",
                    "fePointLight",
                    "feSpecularLighting",
                    "feSpotLight",
                    "feTile",
                    "feTurbulence",
                  ]),
                  T = i([
                    "animate",
                    "color-profile",
                    "cursor",
                    "discard",
                    "fedropshadow",
                    "feimage",
                    "font-face",
                    "font-face-format",
                    "font-face-name",
                    "font-face-src",
                    "font-face-uri",
                    "foreignobject",
                    "hatch",
                    "hatchpath",
                    "mesh",
                    "meshgradient",
                    "meshpatch",
                    "meshrow",
                    "missing-glyph",
                    "script",
                    "set",
                    "solidcolor",
                    "unknown",
                    "use",
                  ]),
                  E = i([
                    "math",
                    "menclose",
                    "merror",
                    "mfenced",
                    "mfrac",
                    "mglyph",
                    "mi",
                    "mlabeledtr",
                    "mmultiscripts",
                    "mn",
                    "mo",
                    "mover",
                    "mpadded",
                    "mphantom",
                    "mroot",
                    "mrow",
                    "ms",
                    "mspace",
                    "msqrt",
                    "mstyle",
                    "msub",
                    "msup",
                    "msubsup",
                    "mtable",
                    "mtd",
                    "mtext",
                    "mtr",
                    "munder",
                    "munderover",
                  ]),
                  I = i([
                    "maction",
                    "maligngroup",
                    "malignmark",
                    "mlongdiv",
                    "mscarries",
                    "mscarry",
                    "msgroup",
                    "mstack",
                    "msline",
                    "msrow",
                    "semantics",
                    "annotation",
                    "annotation-xml",
                    "mprescripts",
                    "none",
                  ]),
                  L = i(["#text"]),
                  F = i([
                    "accept",
                    "action",
                    "align",
                    "alt",
                    "autocapitalize",
                    "autocomplete",
                    "autopictureinpicture",
                    "autoplay",
                    "background",
                    "bgcolor",
                    "border",
                    "capture",
                    "cellpadding",
                    "cellspacing",
                    "checked",
                    "cite",
                    "class",
                    "clear",
                    "color",
                    "cols",
                    "colspan",
                    "controls",
                    "controlslist",
                    "coords",
                    "crossorigin",
                    "datetime",
                    "decoding",
                    "default",
                    "dir",
                    "disabled",
                    "disablepictureinpicture",
                    "disableremoteplayback",
                    "download",
                    "draggable",
                    "enctype",
                    "enterkeyhint",
                    "face",
                    "for",
                    "headers",
                    "height",
                    "hidden",
                    "high",
                    "href",
                    "hreflang",
                    "id",
                    "inputmode",
                    "integrity",
                    "ismap",
                    "kind",
                    "label",
                    "lang",
                    "list",
                    "loading",
                    "loop",
                    "low",
                    "max",
                    "maxlength",
                    "media",
                    "method",
                    "min",
                    "minlength",
                    "multiple",
                    "muted",
                    "name",
                    "noshade",
                    "novalidate",
                    "nowrap",
                    "open",
                    "optimum",
                    "pattern",
                    "placeholder",
                    "playsinline",
                    "poster",
                    "preload",
                    "pubdate",
                    "radiogroup",
                    "readonly",
                    "rel",
                    "required",
                    "rev",
                    "reversed",
                    "role",
                    "rows",
                    "rowspan",
                    "spellcheck",
                    "scope",
                    "selected",
                    "shape",
                    "size",
                    "sizes",
                    "span",
                    "srclang",
                    "start",
                    "src",
                    "srcset",
                    "step",
                    "style",
                    "summary",
                    "tabindex",
                    "title",
                    "translate",
                    "type",
                    "usemap",
                    "valign",
                    "value",
                    "width",
                    "xmlns",
                    "slot",
                  ]),
                  R = i([
                    "accent-height",
                    "accumulate",
                    "additive",
                    "alignment-baseline",
                    "ascent",
                    "attributename",
                    "attributetype",
                    "azimuth",
                    "basefrequency",
                    "baseline-shift",
                    "begin",
                    "bias",
                    "by",
                    "class",
                    "clip",
                    "clippathunits",
                    "clip-path",
                    "clip-rule",
                    "color",
                    "color-interpolation",
                    "color-interpolation-filters",
                    "color-profile",
                    "color-rendering",
                    "cx",
                    "cy",
                    "d",
                    "dx",
                    "dy",
                    "diffuseconstant",
                    "direction",
                    "display",
                    "divisor",
                    "dur",
                    "edgemode",
                    "elevation",
                    "end",
                    "fill",
                    "fill-opacity",
                    "fill-rule",
                    "filter",
                    "filterunits",
                    "flood-color",
                    "flood-opacity",
                    "font-family",
                    "font-size",
                    "font-size-adjust",
                    "font-stretch",
                    "font-style",
                    "font-variant",
                    "font-weight",
                    "fx",
                    "fy",
                    "g1",
                    "g2",
                    "glyph-name",
                    "glyphref",
                    "gradientunits",
                    "gradienttransform",
                    "height",
                    "href",
                    "id",
                    "image-rendering",
                    "in",
                    "in2",
                    "k",
                    "k1",
                    "k2",
                    "k3",
                    "k4",
                    "kerning",
                    "keypoints",
                    "keysplines",
                    "keytimes",
                    "lang",
                    "lengthadjust",
                    "letter-spacing",
                    "kernelmatrix",
                    "kernelunitlength",
                    "lighting-color",
                    "local",
                    "marker-end",
                    "marker-mid",
                    "marker-start",
                    "markerheight",
                    "markerunits",
                    "markerwidth",
                    "maskcontentunits",
                    "maskunits",
                    "max",
                    "mask",
                    "media",
                    "method",
                    "mode",
                    "min",
                    "name",
                    "numoctaves",
                    "offset",
                    "operator",
                    "opacity",
                    "order",
                    "orient",
                    "orientation",
                    "origin",
                    "overflow",
                    "paint-order",
                    "path",
                    "pathlength",
                    "patterncontentunits",
                    "patterntransform",
                    "patternunits",
                    "points",
                    "preservealpha",
                    "preserveaspectratio",
                    "primitiveunits",
                    "r",
                    "rx",
                    "ry",
                    "radius",
                    "refx",
                    "refy",
                    "repeatcount",
                    "repeatdur",
                    "restart",
                    "result",
                    "rotate",
                    "scale",
                    "seed",
                    "shape-rendering",
                    "specularconstant",
                    "specularexponent",
                    "spreadmethod",
                    "startoffset",
                    "stddeviation",
                    "stitchtiles",
                    "stop-color",
                    "stop-opacity",
                    "stroke-dasharray",
                    "stroke-dashoffset",
                    "stroke-linecap",
                    "stroke-linejoin",
                    "stroke-miterlimit",
                    "stroke-opacity",
                    "stroke",
                    "stroke-width",
                    "style",
                    "surfacescale",
                    "systemlanguage",
                    "tabindex",
                    "targetx",
                    "targety",
                    "transform",
                    "text-anchor",
                    "text-decoration",
                    "text-rendering",
                    "textlength",
                    "type",
                    "u1",
                    "u2",
                    "unicode",
                    "values",
                    "viewbox",
                    "visibility",
                    "version",
                    "vert-adv-y",
                    "vert-origin-x",
                    "vert-origin-y",
                    "width",
                    "word-spacing",
                    "wrap",
                    "writing-mode",
                    "xchannelselector",
                    "ychannelselector",
                    "x",
                    "x1",
                    "x2",
                    "xmlns",
                    "y",
                    "y1",
                    "y2",
                    "z",
                    "zoomandpan",
                  ]),
                  M = i([
                    "accent",
                    "accentunder",
                    "align",
                    "bevelled",
                    "close",
                    "columnsalign",
                    "columnlines",
                    "columnspan",
                    "denomalign",
                    "depth",
                    "dir",
                    "display",
                    "displaystyle",
                    "encoding",
                    "fence",
                    "frame",
                    "height",
                    "href",
                    "id",
                    "largeop",
                    "length",
                    "linethickness",
                    "lspace",
                    "lquote",
                    "mathbackground",
                    "mathcolor",
                    "mathsize",
                    "mathvariant",
                    "maxsize",
                    "minsize",
                    "movablelimits",
                    "notation",
                    "numalign",
                    "open",
                    "rowalign",
                    "rowlines",
                    "rowspacing",
                    "rowspan",
                    "rspace",
                    "rquote",
                    "scriptlevel",
                    "scriptminsize",
                    "scriptsizemultiplier",
                    "selection",
                    "separator",
                    "separators",
                    "stretchy",
                    "subscriptshift",
                    "supscriptshift",
                    "symmetric",
                    "voffset",
                    "width",
                    "xmlns",
                  ]),
                  z = i([
                    "xlink:href",
                    "xml:id",
                    "xlink:title",
                    "xml:space",
                    "xmlns:xlink",
                  ]),
                  N = a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
                  D = a(/<%[\s\S]*|[\s\S]*%>/gm),
                  U = a(/^data-[\-\w.\u00B7-\uFFFF]/),
                  P = a(/^aria-[\-\w]+$/),
                  $ = a(
                    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
                  ),
                  B = a(/^(?:\w+script|data):/i),
                  W = a(
                    /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g,
                  ),
                  q =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        };
                function H(t) {
                  if (Array.isArray(t)) {
                    for (var e = 0, n = Array(t.length); e < t.length; e++)
                      n[e] = t[e];
                    return n;
                  }
                  return Array.from(t);
                }
                var G = function () {
                    return "undefined" == typeof window ? null : window;
                  },
                  Z = function (t, e) {
                    if (
                      "object" !== (void 0 === t ? "undefined" : q(t)) ||
                      "function" != typeof t.createPolicy
                    )
                      return null;
                    var n = null,
                      r = "data-tt-policy-suffix";
                    e.currentScript &&
                      e.currentScript.hasAttribute(r) &&
                      (n = e.currentScript.getAttribute(r));
                    var o = "dompurify" + (n ? "#" + n : "");
                    try {
                      return t.createPolicy(o, {
                        createHTML: function (t) {
                          return t;
                        },
                      });
                    } catch (t) {
                      return (
                        console.warn(
                          "TrustedTypes policy " + o + " could not be created.",
                        ),
                        null
                      );
                    }
                  };
                return (function t() {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : G(),
                    n = function (e) {
                      return t(e);
                    };
                  if (
                    ((n.version = "2.3.1"),
                    (n.removed = []),
                    !e || !e.document || 9 !== e.document.nodeType)
                  )
                    return (n.isSupported = !1), n;
                  var r = e.document,
                    o = e.document,
                    a = e.DocumentFragment,
                    u = e.HTMLTemplateElement,
                    c = e.Node,
                    s = e.Element,
                    l = e.NodeFilter,
                    f = e.NamedNodeMap,
                    x = void 0 === f ? e.NamedNodeMap || e.MozNamedAttrMap : f,
                    J = e.Text,
                    V = e.Comment,
                    K = e.DOMParser,
                    Y = e.trustedTypes,
                    Q = s.prototype,
                    X = C(Q, "cloneNode"),
                    tt = C(Q, "nextSibling"),
                    et = C(Q, "childNodes"),
                    nt = C(Q, "parentNode");
                  if ("function" == typeof u) {
                    var rt = o.createElement("template");
                    rt.content &&
                      rt.content.ownerDocument &&
                      (o = rt.content.ownerDocument);
                  }
                  var ot = Z(Y, r),
                    it = ot && Nt ? ot.createHTML("") : "",
                    at = o,
                    ut = at.implementation,
                    ct = at.createNodeIterator,
                    st = at.createDocumentFragment,
                    lt = at.getElementsByTagName,
                    ft = r.importNode,
                    pt = {};
                  try {
                    pt = A(o).documentMode ? o.documentMode : {};
                  } catch (t) {}
                  var ht = {};
                  n.isSupported =
                    "function" == typeof nt &&
                    ut &&
                    void 0 !== ut.createHTMLDocument &&
                    9 !== pt;
                  var dt = N,
                    gt = D,
                    vt = U,
                    yt = P,
                    mt = B,
                    _t = W,
                    bt = $,
                    wt = null,
                    xt = O({}, [].concat(H(S), H(j), H(k), H(E), H(L))),
                    Ot = null,
                    At = O({}, [].concat(H(F), H(R), H(M), H(z))),
                    Ct = null,
                    St = null,
                    jt = !0,
                    kt = !0,
                    Tt = !1,
                    Et = !1,
                    It = !1,
                    Lt = !1,
                    Ft = !1,
                    Rt = !1,
                    Mt = !1,
                    zt = !0,
                    Nt = !1,
                    Dt = !0,
                    Ut = !0,
                    Pt = !1,
                    $t = {},
                    Bt = null,
                    Wt = O({}, [
                      "annotation-xml",
                      "audio",
                      "colgroup",
                      "desc",
                      "foreignobject",
                      "head",
                      "iframe",
                      "math",
                      "mi",
                      "mn",
                      "mo",
                      "ms",
                      "mtext",
                      "noembed",
                      "noframes",
                      "noscript",
                      "plaintext",
                      "script",
                      "style",
                      "svg",
                      "template",
                      "thead",
                      "title",
                      "video",
                      "xmp",
                    ]),
                    qt = null,
                    Ht = O({}, [
                      "audio",
                      "video",
                      "img",
                      "source",
                      "image",
                      "track",
                    ]),
                    Gt = null,
                    Zt = O({}, [
                      "alt",
                      "class",
                      "for",
                      "id",
                      "label",
                      "name",
                      "pattern",
                      "placeholder",
                      "role",
                      "summary",
                      "title",
                      "value",
                      "style",
                      "xmlns",
                    ]),
                    Jt = "http://www.w3.org/1998/Math/MathML",
                    Vt = "http://www.w3.org/2000/svg",
                    Kt = "http://www.w3.org/1999/xhtml",
                    Yt = Kt,
                    Qt = !1,
                    Xt = null,
                    te = o.createElement("form"),
                    ee = function (t) {
                      (Xt && Xt === t) ||
                        ((t &&
                          "object" === (void 0 === t ? "undefined" : q(t))) ||
                          (t = {}),
                        (t = A(t)),
                        (wt = "ALLOWED_TAGS" in t ? O({}, t.ALLOWED_TAGS) : xt),
                        (Ot = "ALLOWED_ATTR" in t ? O({}, t.ALLOWED_ATTR) : At),
                        (Gt =
                          "ADD_URI_SAFE_ATTR" in t
                            ? O(A(Zt), t.ADD_URI_SAFE_ATTR)
                            : Zt),
                        (qt =
                          "ADD_DATA_URI_TAGS" in t
                            ? O(A(Ht), t.ADD_DATA_URI_TAGS)
                            : Ht),
                        (Bt =
                          "FORBID_CONTENTS" in t
                            ? O({}, t.FORBID_CONTENTS)
                            : Wt),
                        (Ct = "FORBID_TAGS" in t ? O({}, t.FORBID_TAGS) : {}),
                        (St = "FORBID_ATTR" in t ? O({}, t.FORBID_ATTR) : {}),
                        ($t = "USE_PROFILES" in t && t.USE_PROFILES),
                        (jt = !1 !== t.ALLOW_ARIA_ATTR),
                        (kt = !1 !== t.ALLOW_DATA_ATTR),
                        (Tt = t.ALLOW_UNKNOWN_PROTOCOLS || !1),
                        (Et = t.SAFE_FOR_TEMPLATES || !1),
                        (It = t.WHOLE_DOCUMENT || !1),
                        (Rt = t.RETURN_DOM || !1),
                        (Mt = t.RETURN_DOM_FRAGMENT || !1),
                        (zt = !1 !== t.RETURN_DOM_IMPORT),
                        (Nt = t.RETURN_TRUSTED_TYPE || !1),
                        (Ft = t.FORCE_BODY || !1),
                        (Dt = !1 !== t.SANITIZE_DOM),
                        (Ut = !1 !== t.KEEP_CONTENT),
                        (Pt = t.IN_PLACE || !1),
                        (bt = t.ALLOWED_URI_REGEXP || bt),
                        (Yt = t.NAMESPACE || Kt),
                        Et && (kt = !1),
                        Mt && (Rt = !0),
                        $t &&
                          ((wt = O({}, [].concat(H(L)))),
                          (Ot = []),
                          !0 === $t.html && (O(wt, S), O(Ot, F)),
                          !0 === $t.svg && (O(wt, j), O(Ot, R), O(Ot, z)),
                          !0 === $t.svgFilters &&
                            (O(wt, k), O(Ot, R), O(Ot, z)),
                          !0 === $t.mathMl && (O(wt, E), O(Ot, M), O(Ot, z))),
                        t.ADD_TAGS &&
                          (wt === xt && (wt = A(wt)), O(wt, t.ADD_TAGS)),
                        t.ADD_ATTR &&
                          (Ot === At && (Ot = A(Ot)), O(Ot, t.ADD_ATTR)),
                        t.ADD_URI_SAFE_ATTR && O(Gt, t.ADD_URI_SAFE_ATTR),
                        t.FORBID_CONTENTS &&
                          (Bt === Wt && (Bt = A(Bt)), O(Bt, t.FORBID_CONTENTS)),
                        Ut && (wt["#text"] = !0),
                        It && O(wt, ["html", "head", "body"]),
                        wt.table && (O(wt, ["tbody"]), delete Ct.tbody),
                        i && i(t),
                        (Xt = t));
                    },
                    ne = O({}, ["mi", "mo", "mn", "ms", "mtext"]),
                    re = O({}, [
                      "foreignobject",
                      "desc",
                      "title",
                      "annotation-xml",
                    ]),
                    oe = O({}, j);
                  O(oe, k), O(oe, T);
                  var ie = O({}, E);
                  O(ie, I);
                  var ae = function (t) {
                      var e = nt(t);
                      (e && e.tagName) ||
                        (e = { namespaceURI: Kt, tagName: "template" });
                      var n = g(t.tagName),
                        r = g(e.tagName);
                      if (t.namespaceURI === Vt)
                        return e.namespaceURI === Kt
                          ? "svg" === n
                          : e.namespaceURI === Jt
                          ? "svg" === n && ("annotation-xml" === r || ne[r])
                          : Boolean(oe[n]);
                      if (t.namespaceURI === Jt)
                        return e.namespaceURI === Kt
                          ? "math" === n
                          : e.namespaceURI === Vt
                          ? "math" === n && re[r]
                          : Boolean(ie[n]);
                      if (t.namespaceURI === Kt) {
                        if (e.namespaceURI === Vt && !re[r]) return !1;
                        if (e.namespaceURI === Jt && !ne[r]) return !1;
                        var o = O({}, [
                          "title",
                          "style",
                          "font",
                          "a",
                          "script",
                        ]);
                        return !ie[n] && (o[n] || !oe[n]);
                      }
                      return !1;
                    },
                    ue = function (t) {
                      d(n.removed, { element: t });
                      try {
                        t.parentNode.removeChild(t);
                      } catch (e) {
                        try {
                          t.outerHTML = it;
                        } catch (e) {
                          t.remove();
                        }
                      }
                    },
                    ce = function (t, e) {
                      try {
                        d(n.removed, {
                          attribute: e.getAttributeNode(t),
                          from: e,
                        });
                      } catch (t) {
                        d(n.removed, { attribute: null, from: e });
                      }
                      if ((e.removeAttribute(t), "is" === t && !Ot[t]))
                        if (Rt || Mt)
                          try {
                            ue(e);
                          } catch (t) {}
                        else
                          try {
                            e.setAttribute(t, "");
                          } catch (t) {}
                    },
                    se = function (t) {
                      var e = void 0,
                        n = void 0;
                      if (Ft) t = "<remove></remove>" + t;
                      else {
                        var r = v(t, /^[\r\n\t ]+/);
                        n = r && r[0];
                      }
                      var i = ot ? ot.createHTML(t) : t;
                      if (Yt === Kt)
                        try {
                          e = new K().parseFromString(i, "text/html");
                        } catch (t) {}
                      if (!e || !e.documentElement) {
                        e = ut.createDocument(Yt, "template", null);
                        try {
                          e.documentElement.innerHTML = Qt ? "" : i;
                        } catch (t) {}
                      }
                      var a = e.body || e.documentElement;
                      return (
                        t &&
                          n &&
                          a.insertBefore(
                            o.createTextNode(n),
                            a.childNodes[0] || null,
                          ),
                        Yt === Kt
                          ? lt.call(e, It ? "html" : "body")[0]
                          : It
                          ? e.documentElement
                          : a
                      );
                    },
                    le = function (t) {
                      return ct.call(
                        t.ownerDocument || t,
                        t,
                        l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT,
                        null,
                        !1,
                      );
                    },
                    fe = function (t) {
                      return !(
                        t instanceof J ||
                        t instanceof V ||
                        ("string" == typeof t.nodeName &&
                          "string" == typeof t.textContent &&
                          "function" == typeof t.removeChild &&
                          t.attributes instanceof x &&
                          "function" == typeof t.removeAttribute &&
                          "function" == typeof t.setAttribute &&
                          "string" == typeof t.namespaceURI &&
                          "function" == typeof t.insertBefore)
                      );
                    },
                    pe = function (t) {
                      return "object" === (void 0 === c ? "undefined" : q(c))
                        ? t instanceof c
                        : t &&
                            "object" === (void 0 === t ? "undefined" : q(t)) &&
                            "number" == typeof t.nodeType &&
                            "string" == typeof t.nodeName;
                    },
                    he = function (t, e, r) {
                      ht[t] &&
                        p(ht[t], function (t) {
                          t.call(n, e, r, Xt);
                        });
                    },
                    de = function (t) {
                      var e = void 0;
                      if ((he("beforeSanitizeElements", t, null), fe(t)))
                        return ue(t), !0;
                      if (v(t.nodeName, /[\u0080-\uFFFF]/)) return ue(t), !0;
                      var r = g(t.nodeName);
                      if (
                        (he("uponSanitizeElement", t, {
                          tagName: r,
                          allowedTags: wt,
                        }),
                        !pe(t.firstElementChild) &&
                          (!pe(t.content) ||
                            !pe(t.content.firstElementChild)) &&
                          b(/<[/\w]/g, t.innerHTML) &&
                          b(/<[/\w]/g, t.textContent))
                      )
                        return ue(t), !0;
                      if ("select" === r && b(/<template/i, t.innerHTML))
                        return ue(t), !0;
                      if (!wt[r] || Ct[r]) {
                        if (Ut && !Bt[r]) {
                          var o = nt(t) || t.parentNode,
                            i = et(t) || t.childNodes;
                          if (i && o)
                            for (var a = i.length - 1; a >= 0; --a)
                              o.insertBefore(X(i[a], !0), tt(t));
                        }
                        return ue(t), !0;
                      }
                      return t instanceof s && !ae(t)
                        ? (ue(t), !0)
                        : ("noscript" !== r && "noembed" !== r) ||
                          !b(/<\/no(script|embed)/i, t.innerHTML)
                        ? (Et &&
                            3 === t.nodeType &&
                            ((e = t.textContent),
                            (e = y(e, dt, " ")),
                            (e = y(e, gt, " ")),
                            t.textContent !== e &&
                              (d(n.removed, { element: t.cloneNode() }),
                              (t.textContent = e))),
                          he("afterSanitizeElements", t, null),
                          !1)
                        : (ue(t), !0);
                    },
                    ge = function (t, e, n) {
                      if (
                        Dt &&
                        ("id" === e || "name" === e) &&
                        (n in o || n in te)
                      )
                        return !1;
                      if (kt && !St[e] && b(vt, e));
                      else if (jt && b(yt, e));
                      else {
                        if (!Ot[e] || St[e]) return !1;
                        if (Gt[e]);
                        else if (b(bt, y(n, _t, "")));
                        else if (
                          ("src" !== e && "xlink:href" !== e && "href" !== e) ||
                          "script" === t ||
                          0 !== m(n, "data:") ||
                          !qt[t]
                        )
                          if (Tt && !b(mt, y(n, _t, "")));
                          else if (n) return !1;
                      }
                      return !0;
                    },
                    ve = function (t) {
                      var e = void 0,
                        r = void 0,
                        o = void 0,
                        i = void 0;
                      he("beforeSanitizeAttributes", t, null);
                      var a = t.attributes;
                      if (a) {
                        var u = {
                          attrName: "",
                          attrValue: "",
                          keepAttr: !0,
                          allowedAttributes: Ot,
                        };
                        for (i = a.length; i--; ) {
                          var c = (e = a[i]),
                            s = c.name,
                            l = c.namespaceURI;
                          if (
                            ((r = _(e.value)),
                            (o = g(s)),
                            (u.attrName = o),
                            (u.attrValue = r),
                            (u.keepAttr = !0),
                            (u.forceKeepAttr = void 0),
                            he("uponSanitizeAttribute", t, u),
                            (r = u.attrValue),
                            !u.forceKeepAttr && (ce(s, t), u.keepAttr))
                          )
                            if (b(/\/>/i, r)) ce(s, t);
                            else {
                              Et && ((r = y(r, dt, " ")), (r = y(r, gt, " ")));
                              var f = t.nodeName.toLowerCase();
                              if (ge(f, o, r))
                                try {
                                  l
                                    ? t.setAttributeNS(l, s, r)
                                    : t.setAttribute(s, r),
                                    h(n.removed);
                                } catch (t) {}
                            }
                        }
                        he("afterSanitizeAttributes", t, null);
                      }
                    },
                    ye = function t(e) {
                      var n = void 0,
                        r = le(e);
                      for (
                        he("beforeSanitizeShadowDOM", e, null);
                        (n = r.nextNode());

                      )
                        he("uponSanitizeShadowNode", n, null),
                          de(n) ||
                            (n.content instanceof a && t(n.content), ve(n));
                      he("afterSanitizeShadowDOM", e, null);
                    };
                  return (
                    (n.sanitize = function (t, o) {
                      var i = void 0,
                        u = void 0,
                        s = void 0,
                        l = void 0,
                        f = void 0;
                      if (
                        ((Qt = !t) && (t = "\x3c!--\x3e"),
                        "string" != typeof t && !pe(t))
                      ) {
                        if ("function" != typeof t.toString)
                          throw w("toString is not a function");
                        if ("string" != typeof (t = t.toString()))
                          throw w("dirty is not a string, aborting");
                      }
                      if (!n.isSupported) {
                        if (
                          "object" === q(e.toStaticHTML) ||
                          "function" == typeof e.toStaticHTML
                        ) {
                          if ("string" == typeof t) return e.toStaticHTML(t);
                          if (pe(t)) return e.toStaticHTML(t.outerHTML);
                        }
                        return t;
                      }
                      if (
                        (Lt || ee(o),
                        (n.removed = []),
                        "string" == typeof t && (Pt = !1),
                        Pt)
                      );
                      else if (t instanceof c)
                        (1 ===
                          (u = (i =
                            se("\x3c!----\x3e")).ownerDocument.importNode(
                            t,
                            !0,
                          )).nodeType &&
                          "BODY" === u.nodeName) ||
                        "HTML" === u.nodeName
                          ? (i = u)
                          : i.appendChild(u);
                      else {
                        if (!Rt && !Et && !It && -1 === t.indexOf("<"))
                          return ot && Nt ? ot.createHTML(t) : t;
                        if (!(i = se(t))) return Rt ? null : it;
                      }
                      i && Ft && ue(i.firstChild);
                      for (var p = le(Pt ? t : i); (s = p.nextNode()); )
                        (3 === s.nodeType && s === l) ||
                          de(s) ||
                          (s.content instanceof a && ye(s.content),
                          ve(s),
                          (l = s));
                      if (((l = null), Pt)) return t;
                      if (Rt) {
                        if (Mt)
                          for (f = st.call(i.ownerDocument); i.firstChild; )
                            f.appendChild(i.firstChild);
                        else f = i;
                        return zt && (f = ft.call(r, f, !0)), f;
                      }
                      var h = It ? i.outerHTML : i.innerHTML;
                      return (
                        Et && ((h = y(h, dt, " ")), (h = y(h, gt, " "))),
                        ot && Nt ? ot.createHTML(h) : h
                      );
                    }),
                    (n.setConfig = function (t) {
                      ee(t), (Lt = !0);
                    }),
                    (n.clearConfig = function () {
                      (Xt = null), (Lt = !1);
                    }),
                    (n.isValidAttribute = function (t, e, n) {
                      Xt || ee({});
                      var r = g(t),
                        o = g(e);
                      return ge(r, o, n);
                    }),
                    (n.addHook = function (t, e) {
                      "function" == typeof e &&
                        ((ht[t] = ht[t] || []), d(ht[t], e));
                    }),
                    (n.removeHook = function (t) {
                      ht[t] && h(ht[t]);
                    }),
                    (n.removeHooks = function (t) {
                      ht[t] && (ht[t] = []);
                    }),
                    (n.removeAllHooks = function () {
                      ht = {};
                    }),
                    n
                  );
                })();
              })();
            },
            729: (t) => {
              var e = Object.prototype.hasOwnProperty,
                n = "~";
              function r() {}
              function o(t, e, n) {
                (this.fn = t), (this.context = e), (this.once = n || !1);
              }
              function i(t, e, r, i, a) {
                if ("function" != typeof r)
                  throw new TypeError("The listener must be a function");
                var u = new o(r, i || t, a),
                  c = n ? n + e : e;
                return (
                  t._events[c]
                    ? t._events[c].fn
                      ? (t._events[c] = [t._events[c], u])
                      : t._events[c].push(u)
                    : ((t._events[c] = u), t._eventsCount++),
                  t
                );
              }
              function a(t, e) {
                0 == --t._eventsCount
                  ? (t._events = new r())
                  : delete t._events[e];
              }
              function u() {
                (this._events = new r()), (this._eventsCount = 0);
              }
              Object.create &&
                ((r.prototype = Object.create(null)),
                new r().__proto__ || (n = !1)),
                (u.prototype.eventNames = function () {
                  var t,
                    r,
                    o = [];
                  if (0 === this._eventsCount) return o;
                  for (r in (t = this._events))
                    e.call(t, r) && o.push(n ? r.slice(1) : r);
                  return Object.getOwnPropertySymbols
                    ? o.concat(Object.getOwnPropertySymbols(t))
                    : o;
                }),
                (u.prototype.listeners = function (t) {
                  var e = n ? n + t : t,
                    r = this._events[e];
                  if (!r) return [];
                  if (r.fn) return [r.fn];
                  for (var o = 0, i = r.length, a = new Array(i); o < i; o++)
                    a[o] = r[o].fn;
                  return a;
                }),
                (u.prototype.listenerCount = function (t) {
                  var e = n ? n + t : t,
                    r = this._events[e];
                  return r ? (r.fn ? 1 : r.length) : 0;
                }),
                (u.prototype.emit = function (t, e, r, o, i, a) {
                  var u = n ? n + t : t;
                  if (!this._events[u]) return !1;
                  var c,
                    s,
                    l = this._events[u],
                    f = arguments.length;
                  if (l.fn) {
                    switch (
                      (l.once && this.removeListener(t, l.fn, void 0, !0), f)
                    ) {
                      case 1:
                        return l.fn.call(l.context), !0;
                      case 2:
                        return l.fn.call(l.context, e), !0;
                      case 3:
                        return l.fn.call(l.context, e, r), !0;
                      case 4:
                        return l.fn.call(l.context, e, r, o), !0;
                      case 5:
                        return l.fn.call(l.context, e, r, o, i), !0;
                      case 6:
                        return l.fn.call(l.context, e, r, o, i, a), !0;
                    }
                    for (s = 1, c = new Array(f - 1); s < f; s++)
                      c[s - 1] = arguments[s];
                    l.fn.apply(l.context, c);
                  } else {
                    var p,
                      h = l.length;
                    for (s = 0; s < h; s++)
                      switch (
                        (l[s].once &&
                          this.removeListener(t, l[s].fn, void 0, !0),
                        f)
                      ) {
                        case 1:
                          l[s].fn.call(l[s].context);
                          break;
                        case 2:
                          l[s].fn.call(l[s].context, e);
                          break;
                        case 3:
                          l[s].fn.call(l[s].context, e, r);
                          break;
                        case 4:
                          l[s].fn.call(l[s].context, e, r, o);
                          break;
                        default:
                          if (!c)
                            for (p = 1, c = new Array(f - 1); p < f; p++)
                              c[p - 1] = arguments[p];
                          l[s].fn.apply(l[s].context, c);
                      }
                  }
                  return !0;
                }),
                (u.prototype.on = function (t, e, n) {
                  return i(this, t, e, n, !1);
                }),
                (u.prototype.once = function (t, e, n) {
                  return i(this, t, e, n, !0);
                }),
                (u.prototype.removeListener = function (t, e, r, o) {
                  var i = n ? n + t : t;
                  if (!this._events[i]) return this;
                  if (!e) return a(this, i), this;
                  var u = this._events[i];
                  if (u.fn)
                    u.fn !== e ||
                      (o && !u.once) ||
                      (r && u.context !== r) ||
                      a(this, i);
                  else {
                    for (var c = 0, s = [], l = u.length; c < l; c++)
                      (u[c].fn !== e ||
                        (o && !u[c].once) ||
                        (r && u[c].context !== r)) &&
                        s.push(u[c]);
                    s.length
                      ? (this._events[i] = 1 === s.length ? s[0] : s)
                      : a(this, i);
                  }
                  return this;
                }),
                (u.prototype.removeAllListeners = function (t) {
                  var e;
                  return (
                    t
                      ? ((e = n ? n + t : t), this._events[e] && a(this, e))
                      : ((this._events = new r()), (this._eventsCount = 0)),
                    this
                  );
                }),
                (u.prototype.off = u.prototype.removeListener),
                (u.prototype.addListener = u.prototype.on),
                (u.prefixed = n),
                (u.EventEmitter = u),
                (t.exports = u);
            },
            717: (t) => {
              "function" == typeof Object.create
                ? (t.exports = function (t, e) {
                    (t.super_ = e),
                      (t.prototype = Object.create(e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      }));
                  })
                : (t.exports = function (t, e) {
                    t.super_ = e;
                    var n = function () {};
                    (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.prototype.constructor = t);
                  });
            },
            824: (t) => {
              var e = 1e3,
                n = 60 * e,
                r = 60 * n,
                o = 24 * r;
              function i(t, e, n, r) {
                var o = e >= 1.5 * n;
                return Math.round(t / n) + " " + r + (o ? "s" : "");
              }
              t.exports = function (t, a) {
                a = a || {};
                var u,
                  c,
                  s = typeof t;
                if ("string" === s && t.length > 0)
                  return (function (t) {
                    if (!((t = String(t)).length > 100)) {
                      var i =
                        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                          t,
                        );
                      if (i) {
                        var a = parseFloat(i[1]);
                        switch ((i[2] || "ms").toLowerCase()) {
                          case "years":
                          case "year":
                          case "yrs":
                          case "yr":
                          case "y":
                            return 315576e5 * a;
                          case "weeks":
                          case "week":
                          case "w":
                            return 6048e5 * a;
                          case "days":
                          case "day":
                          case "d":
                            return a * o;
                          case "hours":
                          case "hour":
                          case "hrs":
                          case "hr":
                          case "h":
                            return a * r;
                          case "minutes":
                          case "minute":
                          case "mins":
                          case "min":
                          case "m":
                            return a * n;
                          case "seconds":
                          case "second":
                          case "secs":
                          case "sec":
                          case "s":
                            return a * e;
                          case "milliseconds":
                          case "millisecond":
                          case "msecs":
                          case "msec":
                          case "ms":
                            return a;
                          default:
                            return;
                        }
                      }
                    }
                  })(t);
                if ("number" === s && isFinite(t))
                  return a.long
                    ? ((u = t),
                      (c = Math.abs(u)) >= o
                        ? i(u, c, o, "day")
                        : c >= r
                        ? i(u, c, r, "hour")
                        : c >= n
                        ? i(u, c, n, "minute")
                        : c >= e
                        ? i(u, c, e, "second")
                        : u + " ms")
                    : (function (t) {
                        var i = Math.abs(t);
                        return i >= o
                          ? Math.round(t / o) + "d"
                          : i >= r
                          ? Math.round(t / r) + "h"
                          : i >= n
                          ? Math.round(t / n) + "m"
                          : i >= e
                          ? Math.round(t / e) + "s"
                          : t + "ms";
                      })(t);
                throw new Error(
                  "val is not a non-empty string or a valid number. val=" +
                    JSON.stringify(t),
                );
              };
            },
            520: (t, e, n) => {
              var r = n(155),
                o = "win32" === r.platform,
                i = n(539);
              function a(t, e) {
                for (var n = [], r = 0; r < t.length; r++) {
                  var o = t[r];
                  o &&
                    "." !== o &&
                    (".." === o
                      ? n.length && ".." !== n[n.length - 1]
                        ? n.pop()
                        : e && n.push("..")
                      : n.push(o));
                }
                return n;
              }
              function u(t) {
                for (var e = t.length - 1, n = 0; n <= e && !t[n]; n++);
                for (var r = e; r >= 0 && !t[r]; r--);
                return 0 === n && r === e ? t : n > r ? [] : t.slice(n, r + 1);
              }
              var c =
                  /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,
                s =
                  /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,
                l = {};
              function f(t) {
                var e = c.exec(t),
                  n = (e[1] || "") + (e[2] || ""),
                  r = e[3] || "",
                  o = s.exec(r);
                return [n, o[1], o[2], o[3]];
              }
              function p(t) {
                var e = c.exec(t),
                  n = e[1] || "",
                  r = !!n && ":" !== n[1];
                return {
                  device: n,
                  isUnc: r,
                  isAbsolute: r || !!e[2],
                  tail: e[3],
                };
              }
              function h(t) {
                return (
                  "\\\\" + t.replace(/^[\\\/]+/, "").replace(/[\\\/]+/g, "\\")
                );
              }
              (l.resolve = function () {
                for (
                  var t = "", e = "", n = !1, o = arguments.length - 1;
                  o >= -1;
                  o--
                ) {
                  var u;
                  if (
                    (o >= 0
                      ? (u = arguments[o])
                      : t
                      ? ((u = r.env["=" + t]) &&
                          u.substr(0, 3).toLowerCase() ===
                            t.toLowerCase() + "\\") ||
                        (u = t + "\\")
                      : (u = r.cwd()),
                    !i.isString(u))
                  )
                    throw new TypeError(
                      "Arguments to path.resolve must be strings",
                    );
                  if (u) {
                    var c = p(u),
                      s = c.device,
                      l = c.isUnc,
                      f = c.isAbsolute,
                      d = c.tail;
                    if (
                      (!s || !t || s.toLowerCase() === t.toLowerCase()) &&
                      (t || (t = s), n || ((e = d + "\\" + e), (n = f)), t && n)
                    )
                      break;
                  }
                }
                return (
                  l && (t = h(t)),
                  t +
                    (n ? "\\" : "") +
                    (e = a(e.split(/[\\\/]+/), !n).join("\\")) || "."
                );
              }),
                (l.normalize = function (t) {
                  var e = p(t),
                    n = e.device,
                    r = e.isUnc,
                    o = e.isAbsolute,
                    i = e.tail,
                    u = /[\\\/]$/.test(i);
                  return (
                    (i = a(i.split(/[\\\/]+/), !o).join("\\")) ||
                      o ||
                      (i = "."),
                    i && u && (i += "\\"),
                    r && (n = h(n)),
                    n + (o ? "\\" : "") + i
                  );
                }),
                (l.isAbsolute = function (t) {
                  return p(t).isAbsolute;
                }),
                (l.join = function () {
                  for (var t = [], e = 0; e < arguments.length; e++) {
                    var n = arguments[e];
                    if (!i.isString(n))
                      throw new TypeError(
                        "Arguments to path.join must be strings",
                      );
                    n && t.push(n);
                  }
                  var r = t.join("\\");
                  return (
                    /^[\\\/]{2}[^\\\/]/.test(t[0]) ||
                      (r = r.replace(/^[\\\/]{2,}/, "\\")),
                    l.normalize(r)
                  );
                }),
                (l.relative = function (t, e) {
                  (t = l.resolve(t)), (e = l.resolve(e));
                  for (
                    var n = t.toLowerCase(),
                      r = e.toLowerCase(),
                      o = u(e.split("\\")),
                      i = u(n.split("\\")),
                      a = u(r.split("\\")),
                      c = Math.min(i.length, a.length),
                      s = c,
                      f = 0;
                    f < c;
                    f++
                  )
                    if (i[f] !== a[f]) {
                      s = f;
                      break;
                    }
                  if (0 == s) return e;
                  var p = [];
                  for (f = s; f < i.length; f++) p.push("..");
                  return (p = p.concat(o.slice(s))).join("\\");
                }),
                (l._makeLong = function (t) {
                  if (!i.isString(t)) return t;
                  if (!t) return "";
                  var e = l.resolve(t);
                  return /^[a-zA-Z]\:\\/.test(e)
                    ? "\\\\?\\" + e
                    : /^\\\\[^?.]/.test(e)
                    ? "\\\\?\\UNC\\" + e.substring(2)
                    : t;
                }),
                (l.dirname = function (t) {
                  var e = f(t),
                    n = e[0],
                    r = e[1];
                  return n || r
                    ? (r && (r = r.substr(0, r.length - 1)), n + r)
                    : ".";
                }),
                (l.basename = function (t, e) {
                  var n = f(t)[2];
                  return (
                    e &&
                      n.substr(-1 * e.length) === e &&
                      (n = n.substr(0, n.length - e.length)),
                    n
                  );
                }),
                (l.extname = function (t) {
                  return f(t)[3];
                }),
                (l.format = function (t) {
                  if (!i.isObject(t))
                    throw new TypeError(
                      "Parameter 'pathObject' must be an object, not " +
                        typeof t,
                    );
                  var e = t.root || "";
                  if (!i.isString(e))
                    throw new TypeError(
                      "'pathObject.root' must be a string or undefined, not " +
                        typeof t.root,
                    );
                  var n = t.dir,
                    r = t.base || "";
                  return n
                    ? n[n.length - 1] === l.sep
                      ? n + r
                      : n + l.sep + r
                    : r;
                }),
                (l.parse = function (t) {
                  if (!i.isString(t))
                    throw new TypeError(
                      "Parameter 'pathString' must be a string, not " +
                        typeof t,
                    );
                  var e = f(t);
                  if (!e || 4 !== e.length)
                    throw new TypeError("Invalid path '" + t + "'");
                  return {
                    root: e[0],
                    dir: e[0] + e[1].slice(0, -1),
                    base: e[2],
                    ext: e[3],
                    name: e[2].slice(0, e[2].length - e[3].length),
                  };
                }),
                (l.sep = "\\"),
                (l.delimiter = ";");
              var d =
                  /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                g = {};
              function v(t) {
                return d.exec(t).slice(1);
              }
              (g.resolve = function () {
                for (
                  var t = "", e = !1, n = arguments.length - 1;
                  n >= -1 && !e;
                  n--
                ) {
                  var o = n >= 0 ? arguments[n] : r.cwd();
                  if (!i.isString(o))
                    throw new TypeError(
                      "Arguments to path.resolve must be strings",
                    );
                  o && ((t = o + "/" + t), (e = "/" === o[0]));
                }
                return (
                  (e ? "/" : "") + (t = a(t.split("/"), !e).join("/")) || "."
                );
              }),
                (g.normalize = function (t) {
                  var e = g.isAbsolute(t),
                    n = t && "/" === t[t.length - 1];
                  return (
                    (t = a(t.split("/"), !e).join("/")) || e || (t = "."),
                    t && n && (t += "/"),
                    (e ? "/" : "") + t
                  );
                }),
                (g.isAbsolute = function (t) {
                  return "/" === t.charAt(0);
                }),
                (g.join = function () {
                  for (var t = "", e = 0; e < arguments.length; e++) {
                    var n = arguments[e];
                    if (!i.isString(n))
                      throw new TypeError(
                        "Arguments to path.join must be strings",
                      );
                    n && (t += t ? "/" + n : n);
                  }
                  return g.normalize(t);
                }),
                (g.relative = function (t, e) {
                  (t = g.resolve(t).substr(1)), (e = g.resolve(e).substr(1));
                  for (
                    var n = u(t.split("/")),
                      r = u(e.split("/")),
                      o = Math.min(n.length, r.length),
                      i = o,
                      a = 0;
                    a < o;
                    a++
                  )
                    if (n[a] !== r[a]) {
                      i = a;
                      break;
                    }
                  var c = [];
                  for (a = i; a < n.length; a++) c.push("..");
                  return (c = c.concat(r.slice(i))).join("/");
                }),
                (g._makeLong = function (t) {
                  return t;
                }),
                (g.dirname = function (t) {
                  var e = v(t),
                    n = e[0],
                    r = e[1];
                  return n || r
                    ? (r && (r = r.substr(0, r.length - 1)), n + r)
                    : ".";
                }),
                (g.basename = function (t, e) {
                  var n = v(t)[2];
                  return (
                    e &&
                      n.substr(-1 * e.length) === e &&
                      (n = n.substr(0, n.length - e.length)),
                    n
                  );
                }),
                (g.extname = function (t) {
                  return v(t)[3];
                }),
                (g.format = function (t) {
                  if (!i.isObject(t))
                    throw new TypeError(
                      "Parameter 'pathObject' must be an object, not " +
                        typeof t,
                    );
                  var e = t.root || "";
                  if (!i.isString(e))
                    throw new TypeError(
                      "'pathObject.root' must be a string or undefined, not " +
                        typeof t.root,
                    );
                  return (t.dir ? t.dir + g.sep : "") + (t.base || "");
                }),
                (g.parse = function (t) {
                  if (!i.isString(t))
                    throw new TypeError(
                      "Parameter 'pathString' must be a string, not " +
                        typeof t,
                    );
                  var e = v(t);
                  if (!e || 4 !== e.length)
                    throw new TypeError("Invalid path '" + t + "'");
                  return (
                    (e[1] = e[1] || ""),
                    (e[2] = e[2] || ""),
                    (e[3] = e[3] || ""),
                    {
                      root: e[0],
                      dir: e[0] + e[1].slice(0, -1),
                      base: e[2],
                      ext: e[3],
                      name: e[2].slice(0, e[2].length - e[3].length),
                    }
                  );
                }),
                (g.sep = "/"),
                (g.delimiter = ":"),
                (t.exports = o ? l : g),
                (t.exports.posix = g),
                (t.exports.win32 = l);
            },
            155: (t) => {
              var e,
                n,
                r = (t.exports = {});
              function o() {
                throw new Error("setTimeout has not been defined");
              }
              function i() {
                throw new Error("clearTimeout has not been defined");
              }
              function a(t) {
                if (e === setTimeout) return setTimeout(t, 0);
                if ((e === o || !e) && setTimeout)
                  return (e = setTimeout), setTimeout(t, 0);
                try {
                  return e(t, 0);
                } catch (n) {
                  try {
                    return e.call(null, t, 0);
                  } catch (n) {
                    return e.call(this, t, 0);
                  }
                }
              }
              !(function () {
                try {
                  e = "function" == typeof setTimeout ? setTimeout : o;
                } catch (t) {
                  e = o;
                }
                try {
                  n = "function" == typeof clearTimeout ? clearTimeout : i;
                } catch (t) {
                  n = i;
                }
              })();
              var u,
                c = [],
                s = !1,
                l = -1;
              function f() {
                s &&
                  u &&
                  ((s = !1),
                  u.length ? (c = u.concat(c)) : (l = -1),
                  c.length && p());
              }
              function p() {
                if (!s) {
                  var t = a(f);
                  s = !0;
                  for (var e = c.length; e; ) {
                    for (u = c, c = []; ++l < e; ) u && u[l].run();
                    (l = -1), (e = c.length);
                  }
                  (u = null),
                    (s = !1),
                    (function (t) {
                      if (n === clearTimeout) return clearTimeout(t);
                      if ((n === i || !n) && clearTimeout)
                        return (n = clearTimeout), clearTimeout(t);
                      try {
                        n(t);
                      } catch (e) {
                        try {
                          return n.call(null, t);
                        } catch (e) {
                          return n.call(this, t);
                        }
                      }
                    })(t);
                }
              }
              function h(t, e) {
                (this.fun = t), (this.array = e);
              }
              function d() {}
              (r.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
                c.push(new h(t, e)), 1 !== c.length || s || a(p);
              }),
                (h.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (r.title = "browser"),
                (r.browser = !0),
                (r.env = {}),
                (r.argv = []),
                (r.version = ""),
                (r.versions = {}),
                (r.on = d),
                (r.addListener = d),
                (r.once = d),
                (r.off = d),
                (r.removeListener = d),
                (r.removeAllListeners = d),
                (r.emit = d),
                (r.prependListener = d),
                (r.prependOnceListener = d),
                (r.listeners = function (t) {
                  return [];
                }),
                (r.binding = function (t) {
                  throw new Error("process.binding is not supported");
                }),
                (r.cwd = function () {
                  return "/";
                }),
                (r.chdir = function (t) {
                  throw new Error("process.chdir is not supported");
                }),
                (r.umask = function () {
                  return 0;
                });
            },
            384: (t) => {
              t.exports = function (t) {
                return (
                  t &&
                  "object" == typeof t &&
                  "function" == typeof t.copy &&
                  "function" == typeof t.fill &&
                  "function" == typeof t.readUInt8
                );
              };
            },
            539: (t, e, n) => {
              var r = n(155),
                o = /%[sdj%]/g;
              (e.format = function (t) {
                if (!y(t)) {
                  for (var e = [], n = 0; n < arguments.length; n++)
                    e.push(u(arguments[n]));
                  return e.join(" ");
                }
                n = 1;
                for (
                  var r = arguments,
                    i = r.length,
                    a = String(t).replace(o, function (t) {
                      if ("%%" === t) return "%";
                      if (n >= i) return t;
                      switch (t) {
                        case "%s":
                          return String(r[n++]);
                        case "%d":
                          return Number(r[n++]);
                        case "%j":
                          try {
                            return JSON.stringify(r[n++]);
                          } catch (t) {
                            return "[Circular]";
                          }
                        default:
                          return t;
                      }
                    }),
                    c = r[n];
                  n < i;
                  c = r[++n]
                )
                  g(c) || !b(c) ? (a += " " + c) : (a += " " + u(c));
                return a;
              }),
                (e.deprecate = function (t, o) {
                  if (m(n.g.process))
                    return function () {
                      return e.deprecate(t, o).apply(this, arguments);
                    };
                  if (!0 === r.noDeprecation) return t;
                  var i = !1;
                  return function () {
                    if (!i) {
                      if (r.throwDeprecation) throw new Error(o);
                      r.traceDeprecation ? console.trace(o) : console.error(o),
                        (i = !0);
                    }
                    return t.apply(this, arguments);
                  };
                });
              var i,
                a = {};
              function u(t, n) {
                var r = { seen: [], stylize: s };
                return (
                  arguments.length >= 3 && (r.depth = arguments[2]),
                  arguments.length >= 4 && (r.colors = arguments[3]),
                  d(n) ? (r.showHidden = n) : n && e._extend(r, n),
                  m(r.showHidden) && (r.showHidden = !1),
                  m(r.depth) && (r.depth = 2),
                  m(r.colors) && (r.colors = !1),
                  m(r.customInspect) && (r.customInspect = !0),
                  r.colors && (r.stylize = c),
                  l(r, t, r.depth)
                );
              }
              function c(t, e) {
                var n = u.styles[e];
                return n
                  ? "[" + u.colors[n][0] + "m" + t + "[" + u.colors[n][1] + "m"
                  : t;
              }
              function s(t, e) {
                return t;
              }
              function l(t, n, r) {
                if (
                  t.customInspect &&
                  n &&
                  O(n.inspect) &&
                  n.inspect !== e.inspect &&
                  (!n.constructor || n.constructor.prototype !== n)
                ) {
                  var o = n.inspect(r, t);
                  return y(o) || (o = l(t, o, r)), o;
                }
                var i = (function (t, e) {
                  if (m(e)) return t.stylize("undefined", "undefined");
                  if (y(e)) {
                    var n =
                      "'" +
                      JSON.stringify(e)
                        .replace(/^"|"$/g, "")
                        .replace(/'/g, "\\'")
                        .replace(/\\"/g, '"') +
                      "'";
                    return t.stylize(n, "string");
                  }
                  return v(e)
                    ? t.stylize("" + e, "number")
                    : d(e)
                    ? t.stylize("" + e, "boolean")
                    : g(e)
                    ? t.stylize("null", "null")
                    : void 0;
                })(t, n);
                if (i) return i;
                var a = Object.keys(n),
                  u = (function (t) {
                    var e = {};
                    return (
                      t.forEach(function (t, n) {
                        e[t] = !0;
                      }),
                      e
                    );
                  })(a);
                if (
                  (t.showHidden && (a = Object.getOwnPropertyNames(n)),
                  x(n) &&
                    (a.indexOf("message") >= 0 ||
                      a.indexOf("description") >= 0))
                )
                  return f(n);
                if (0 === a.length) {
                  if (O(n)) {
                    var c = n.name ? ": " + n.name : "";
                    return t.stylize("[Function" + c + "]", "special");
                  }
                  if (_(n))
                    return t.stylize(
                      RegExp.prototype.toString.call(n),
                      "regexp",
                    );
                  if (w(n))
                    return t.stylize(Date.prototype.toString.call(n), "date");
                  if (x(n)) return f(n);
                }
                var s,
                  b,
                  A,
                  C,
                  S = "",
                  j = !1,
                  T = ["{", "}"];
                return (
                  h(n) && ((j = !0), (T = ["[", "]"])),
                  O(n) &&
                    (S = " [Function" + (n.name ? ": " + n.name : "") + "]"),
                  _(n) && (S = " " + RegExp.prototype.toString.call(n)),
                  w(n) && (S = " " + Date.prototype.toUTCString.call(n)),
                  x(n) && (S = " " + f(n)),
                  0 !== a.length || (j && 0 != n.length)
                    ? r < 0
                      ? _(n)
                        ? t.stylize(RegExp.prototype.toString.call(n), "regexp")
                        : t.stylize("[Object]", "special")
                      : (t.seen.push(n),
                        (s = j
                          ? (function (t, e, n, r, o) {
                              for (var i = [], a = 0, u = e.length; a < u; ++a)
                                k(e, String(a))
                                  ? i.push(p(t, e, n, r, String(a), !0))
                                  : i.push("");
                              return (
                                o.forEach(function (o) {
                                  o.match(/^\d+$/) ||
                                    i.push(p(t, e, n, r, o, !0));
                                }),
                                i
                              );
                            })(t, n, r, u, a)
                          : a.map(function (e) {
                              return p(t, n, r, u, e, j);
                            })),
                        t.seen.pop(),
                        (A = S),
                        (C = T),
                        (b = s).reduce(function (t, e) {
                          return (
                            e.indexOf("\n"),
                            t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                          );
                        }, 0) > 60
                          ? C[0] +
                            ("" === A ? "" : A + "\n ") +
                            " " +
                            b.join(",\n  ") +
                            " " +
                            C[1]
                          : C[0] + A + " " + b.join(", ") + " " + C[1])
                    : T[0] + S + T[1]
                );
              }
              function f(t) {
                return "[" + Error.prototype.toString.call(t) + "]";
              }
              function p(t, e, n, r, o, i) {
                var a, u, c;
                if (
                  ((c = Object.getOwnPropertyDescriptor(e, o) || {
                    value: e[o],
                  }).get
                    ? (u = c.set
                        ? t.stylize("[Getter/Setter]", "special")
                        : t.stylize("[Getter]", "special"))
                    : c.set && (u = t.stylize("[Setter]", "special")),
                  k(r, o) || (a = "[" + o + "]"),
                  u ||
                    (t.seen.indexOf(c.value) < 0
                      ? (u = g(n)
                          ? l(t, c.value, null)
                          : l(t, c.value, n - 1)).indexOf("\n") > -1 &&
                        (u = i
                          ? u
                              .split("\n")
                              .map(function (t) {
                                return "  " + t;
                              })
                              .join("\n")
                              .substr(2)
                          : "\n" +
                            u
                              .split("\n")
                              .map(function (t) {
                                return "   " + t;
                              })
                              .join("\n"))
                      : (u = t.stylize("[Circular]", "special"))),
                  m(a))
                ) {
                  if (i && o.match(/^\d+$/)) return u;
                  (a = JSON.stringify("" + o)).match(
                    /^"([a-zA-Z_][a-zA-Z_0-9]*)"$/,
                  )
                    ? ((a = a.substr(1, a.length - 2)),
                      (a = t.stylize(a, "name")))
                    : ((a = a
                        .replace(/'/g, "\\'")
                        .replace(/\\"/g, '"')
                        .replace(/(^"|"$)/g, "'")),
                      (a = t.stylize(a, "string")));
                }
                return a + ": " + u;
              }
              function h(t) {
                return Array.isArray(t);
              }
              function d(t) {
                return "boolean" == typeof t;
              }
              function g(t) {
                return null === t;
              }
              function v(t) {
                return "number" == typeof t;
              }
              function y(t) {
                return "string" == typeof t;
              }
              function m(t) {
                return void 0 === t;
              }
              function _(t) {
                return b(t) && "[object RegExp]" === A(t);
              }
              function b(t) {
                return "object" == typeof t && null !== t;
              }
              function w(t) {
                return b(t) && "[object Date]" === A(t);
              }
              function x(t) {
                return (
                  b(t) && ("[object Error]" === A(t) || t instanceof Error)
                );
              }
              function O(t) {
                return "function" == typeof t;
              }
              function A(t) {
                return Object.prototype.toString.call(t);
              }
              function C(t) {
                return t < 10 ? "0" + t.toString(10) : t.toString(10);
              }
              (e.debuglog = function (t) {
                if (
                  (m(i) && (i = r.env.NODE_DEBUG || ""),
                  (t = t.toUpperCase()),
                  !a[t])
                )
                  if (new RegExp("\\b" + t + "\\b", "i").test(i)) {
                    var n = r.pid;
                    a[t] = function () {
                      var r = e.format.apply(e, arguments);
                      console.error("%s %d: %s", t, n, r);
                    };
                  } else a[t] = function () {};
                return a[t];
              }),
                (e.inspect = u),
                (u.colors = {
                  bold: [1, 22],
                  italic: [3, 23],
                  underline: [4, 24],
                  inverse: [7, 27],
                  white: [37, 39],
                  grey: [90, 39],
                  black: [30, 39],
                  blue: [34, 39],
                  cyan: [36, 39],
                  green: [32, 39],
                  magenta: [35, 39],
                  red: [31, 39],
                  yellow: [33, 39],
                }),
                (u.styles = {
                  special: "cyan",
                  number: "yellow",
                  boolean: "yellow",
                  undefined: "grey",
                  null: "bold",
                  string: "green",
                  date: "magenta",
                  regexp: "red",
                }),
                (e.isArray = h),
                (e.isBoolean = d),
                (e.isNull = g),
                (e.isNullOrUndefined = function (t) {
                  return null == t;
                }),
                (e.isNumber = v),
                (e.isString = y),
                (e.isSymbol = function (t) {
                  return "symbol" == typeof t;
                }),
                (e.isUndefined = m),
                (e.isRegExp = _),
                (e.isObject = b),
                (e.isDate = w),
                (e.isError = x),
                (e.isFunction = O),
                (e.isPrimitive = function (t) {
                  return (
                    null === t ||
                    "boolean" == typeof t ||
                    "number" == typeof t ||
                    "string" == typeof t ||
                    "symbol" == typeof t ||
                    void 0 === t
                  );
                }),
                (e.isBuffer = n(384));
              var S = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ];
              function j() {
                var t = new Date(),
                  e = [
                    C(t.getHours()),
                    C(t.getMinutes()),
                    C(t.getSeconds()),
                  ].join(":");
                return [t.getDate(), S[t.getMonth()], e].join(" ");
              }
              function k(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }
              (e.log = function () {
                console.log("%s - %s", j(), e.format.apply(e, arguments));
              }),
                (e.inherits = n(717)),
                (e._extend = function (t, e) {
                  if (!e || !b(e)) return t;
                  for (var n = Object.keys(e), r = n.length; r--; )
                    t[n[r]] = e[n[r]];
                  return t;
                });
            },
          },
          o = {};
        function i(t) {
          var e = o[t];
          if (void 0 !== e) return e.exports;
          var n = (o[t] = { exports: {} });
          return r[t].call(n.exports, n, n.exports, i), n.exports;
        }
        (i.n = (t) => {
          var e = t && t.__esModule ? () => t.default : () => t;
          return i.d(e, { a: e }), e;
        }),
          (i.d = (t, e) => {
            for (var n in e)
              i.o(e, n) &&
                !i.o(t, n) &&
                Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
          }),
          (i.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
              return this || new Function("return this")();
            } catch (t) {
              if ("object" == typeof window) return window;
            }
          })()),
          (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
          (i.r = (t) => {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(t, "__esModule", { value: !0 });
          });
        var a = {};
        return (
          (() => {
            i.r(a),
              i.d(a, {
                LSPluginUser: () => Ue,
                setupPluginUserInstance: () => Pe,
              });
            var r = i(520);
            i(856);
            const o = function (t, e) {
                return t === e || (t != t && e != e);
              },
              u = function (t, e) {
                for (var n = t.length; n--; ) if (o(t[n][0], e)) return n;
                return -1;
              };
            var c = Array.prototype.splice;
            function s(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
              }
            }
            (s.prototype.clear = function () {
              (this.__data__ = []), (this.size = 0);
            }),
              (s.prototype.delete = function (t) {
                var e = this.__data__,
                  n = u(e, t);
                return !(
                  n < 0 ||
                  (n == e.length - 1 ? e.pop() : c.call(e, n, 1),
                  --this.size,
                  0)
                );
              }),
              (s.prototype.get = function (t) {
                var e = this.__data__,
                  n = u(e, t);
                return n < 0 ? void 0 : e[n][1];
              }),
              (s.prototype.has = function (t) {
                return u(this.__data__, t) > -1;
              }),
              (s.prototype.set = function (t, e) {
                var n = this.__data__,
                  r = u(n, t);
                return (
                  r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this
                );
              });
            const l = s,
              f = "object" == typeof t && t && t.Object === Object && t;
            var p =
              "object" == typeof self && self && self.Object === Object && self;
            const h = f || p || Function("return this")(),
              d = h.Symbol;
            var g = Object.prototype,
              v = g.hasOwnProperty,
              y = g.toString,
              m = d ? d.toStringTag : void 0,
              _ = Object.prototype.toString,
              b = d ? d.toStringTag : void 0;
            const w = function (t) {
                return null == t
                  ? void 0 === t
                    ? "[object Undefined]"
                    : "[object Null]"
                  : b && b in Object(t)
                  ? (function (t) {
                      var e = v.call(t, m),
                        n = t[m];
                      try {
                        t[m] = void 0;
                        var r = !0;
                      } catch (t) {}
                      var o = y.call(t);
                      return r && (e ? (t[m] = n) : delete t[m]), o;
                    })(t)
                  : (function (t) {
                      return _.call(t);
                    })(t);
              },
              x = function (t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e);
              },
              O = function (t) {
                if (!x(t)) return !1;
                var e = w(t);
                return (
                  "[object Function]" == e ||
                  "[object GeneratorFunction]" == e ||
                  "[object AsyncFunction]" == e ||
                  "[object Proxy]" == e
                );
              },
              A = h["__core-js_shared__"];
            var C,
              S = (C = /[^.]+$/.exec((A && A.keys && A.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + C
                : "",
              j = Function.prototype.toString,
              k = /^\[object .+?Constructor\]$/,
              T = Function.prototype,
              E = Object.prototype,
              I = T.toString,
              L = E.hasOwnProperty,
              F = RegExp(
                "^" +
                  I.call(L)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?",
                    ) +
                  "$",
              );
            const R = function (t) {
                var e;
                return (
                  !(!x(t) || ((e = t), S && S in e)) &&
                  (O(t) ? F : k).test(
                    (function (t) {
                      if (null != t) {
                        try {
                          return j.call(t);
                        } catch (t) {}
                        try {
                          return t + "";
                        } catch (t) {}
                      }
                      return "";
                    })(t),
                  )
                );
              },
              M = function (t, e) {
                var n = (function (t, e) {
                  return null == t ? void 0 : t[e];
                })(t, e);
                return R(n) ? n : void 0;
              },
              z = M(h, "Map"),
              N = M(Object, "create");
            var D = Object.prototype.hasOwnProperty,
              U = Object.prototype.hasOwnProperty;
            function P(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
              }
            }
            (P.prototype.clear = function () {
              (this.__data__ = N ? N(null) : {}), (this.size = 0);
            }),
              (P.prototype.delete = function (t) {
                var e = this.has(t) && delete this.__data__[t];
                return (this.size -= e ? 1 : 0), e;
              }),
              (P.prototype.get = function (t) {
                var e = this.__data__;
                if (N) {
                  var n = e[t];
                  return "__lodash_hash_undefined__" === n ? void 0 : n;
                }
                return D.call(e, t) ? e[t] : void 0;
              }),
              (P.prototype.has = function (t) {
                var e = this.__data__;
                return N ? void 0 !== e[t] : U.call(e, t);
              }),
              (P.prototype.set = function (t, e) {
                var n = this.__data__;
                return (
                  (this.size += this.has(t) ? 0 : 1),
                  (n[t] = N && void 0 === e ? "__lodash_hash_undefined__" : e),
                  this
                );
              });
            const $ = P,
              B = function (t, e) {
                var n,
                  r,
                  o = t.__data__;
                return (
                  "string" == (r = typeof (n = e)) ||
                  "number" == r ||
                  "symbol" == r ||
                  "boolean" == r
                    ? "__proto__" !== n
                    : null === n
                )
                  ? o["string" == typeof e ? "string" : "hash"]
                  : o.map;
              };
            function W(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
              }
            }
            (W.prototype.clear = function () {
              (this.size = 0),
                (this.__data__ = {
                  hash: new $(),
                  map: new (z || l)(),
                  string: new $(),
                });
            }),
              (W.prototype.delete = function (t) {
                var e = B(this, t).delete(t);
                return (this.size -= e ? 1 : 0), e;
              }),
              (W.prototype.get = function (t) {
                return B(this, t).get(t);
              }),
              (W.prototype.has = function (t) {
                return B(this, t).has(t);
              }),
              (W.prototype.set = function (t, e) {
                var n = B(this, t),
                  r = n.size;
                return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
              });
            const q = W;
            function H(t) {
              var e = (this.__data__ = new l(t));
              this.size = e.size;
            }
            (H.prototype.clear = function () {
              (this.__data__ = new l()), (this.size = 0);
            }),
              (H.prototype.delete = function (t) {
                var e = this.__data__,
                  n = e.delete(t);
                return (this.size = e.size), n;
              }),
              (H.prototype.get = function (t) {
                return this.__data__.get(t);
              }),
              (H.prototype.has = function (t) {
                return this.__data__.has(t);
              }),
              (H.prototype.set = function (t, e) {
                var n = this.__data__;
                if (n instanceof l) {
                  var r = n.__data__;
                  if (!z || r.length < 199)
                    return r.push([t, e]), (this.size = ++n.size), this;
                  n = this.__data__ = new q(r);
                }
                return n.set(t, e), (this.size = n.size), this;
              });
            const G = H,
              Z = (function () {
                try {
                  var t = M(Object, "defineProperty");
                  return t({}, "", {}), t;
                } catch (t) {}
              })(),
              J = function (t, e, n) {
                "__proto__" == e && Z
                  ? Z(t, e, {
                      configurable: !0,
                      enumerable: !0,
                      value: n,
                      writable: !0,
                    })
                  : (t[e] = n);
              },
              V = function (t, e, n) {
                ((void 0 !== n && !o(t[e], n)) ||
                  (void 0 === n && !(e in t))) &&
                  J(t, e, n);
              },
              K = function (t, e, n) {
                for (var r = -1, o = Object(t), i = n(t), a = i.length; a--; ) {
                  var u = i[++r];
                  if (!1 === e(o[u], u, o)) break;
                }
                return t;
              };
            var Y = n && !n.nodeType && n,
              Q = Y && e && !e.nodeType && e,
              X = Q && Q.exports === Y ? h.Buffer : void 0;
            X && X.allocUnsafe;
            const tt = h.Uint8Array,
              et = function (t, e) {
                var n,
                  r,
                  o = e
                    ? ((r = new (n = t.buffer).constructor(n.byteLength)),
                      new tt(r).set(new tt(n)),
                      r)
                    : t.buffer;
                return new t.constructor(o, t.byteOffset, t.length);
              };
            var nt = Object.create;
            const rt = (function () {
                function t() {}
                return function (e) {
                  if (!x(e)) return {};
                  if (nt) return nt(e);
                  t.prototype = e;
                  var n = new t();
                  return (t.prototype = void 0), n;
                };
              })(),
              ot =
                ((it = Object.getPrototypeOf),
                (at = Object),
                function (t) {
                  return it(at(t));
                });
            var it,
              at,
              ut = Object.prototype;
            const ct = function (t) {
                var e = t && t.constructor;
                return t === (("function" == typeof e && e.prototype) || ut);
              },
              st = function (t) {
                return null != t && "object" == typeof t;
              },
              lt = function (t) {
                return st(t) && "[object Arguments]" == w(t);
              };
            var ft = Object.prototype,
              pt = ft.hasOwnProperty,
              ht = ft.propertyIsEnumerable;
            const dt = lt(
                (function () {
                  return arguments;
                })(),
              )
                ? lt
                : function (t) {
                    return (
                      st(t) && pt.call(t, "callee") && !ht.call(t, "callee")
                    );
                  },
              gt = Array.isArray,
              vt = function (t) {
                return (
                  "number" == typeof t &&
                  t > -1 &&
                  t % 1 == 0 &&
                  t <= 9007199254740991
                );
              },
              yt = function (t) {
                return null != t && vt(t.length) && !O(t);
              };
            var mt = n && !n.nodeType && n,
              _t = mt && e && !e.nodeType && e,
              bt = _t && _t.exports === mt ? h.Buffer : void 0;
            const wt =
              (bt ? bt.isBuffer : void 0) ||
              function () {
                return !1;
              };
            var xt = Function.prototype,
              Ot = Object.prototype,
              At = xt.toString,
              Ct = Ot.hasOwnProperty,
              St = At.call(Object),
              jt = {};
            (jt["[object Float32Array]"] =
              jt["[object Float64Array]"] =
              jt["[object Int8Array]"] =
              jt["[object Int16Array]"] =
              jt["[object Int32Array]"] =
              jt["[object Uint8Array]"] =
              jt["[object Uint8ClampedArray]"] =
              jt["[object Uint16Array]"] =
              jt["[object Uint32Array]"] =
                !0),
              (jt["[object Arguments]"] =
                jt["[object Array]"] =
                jt["[object ArrayBuffer]"] =
                jt["[object Boolean]"] =
                jt["[object DataView]"] =
                jt["[object Date]"] =
                jt["[object Error]"] =
                jt["[object Function]"] =
                jt["[object Map]"] =
                jt["[object Number]"] =
                jt["[object Object]"] =
                jt["[object RegExp]"] =
                jt["[object Set]"] =
                jt["[object String]"] =
                jt["[object WeakMap]"] =
                  !1);
            var kt = n && !n.nodeType && n,
              Tt = kt && e && !e.nodeType && e,
              Et = Tt && Tt.exports === kt && f.process,
              It = (function () {
                try {
                  return (
                    (Tt && Tt.require && Tt.require("util").types) ||
                    (Et && Et.binding && Et.binding("util"))
                  );
                } catch (t) {}
              })(),
              Lt = It && It.isTypedArray;
            const Ft = Lt
                ? (function (t) {
                    return function (e) {
                      return t(e);
                    };
                  })(Lt)
                : function (t) {
                    return st(t) && vt(t.length) && !!jt[w(t)];
                  },
              Rt = function (t, e) {
                if (
                  ("constructor" !== e || "function" != typeof t[e]) &&
                  "__proto__" != e
                )
                  return t[e];
              };
            var Mt = Object.prototype.hasOwnProperty;
            const zt = function (t, e, n) {
              var r = t[e];
              (Mt.call(t, e) && o(r, n) && (void 0 !== n || e in t)) ||
                J(t, e, n);
            };
            var Nt = /^(?:0|[1-9]\d*)$/;
            const Dt = function (t, e) {
              var n = typeof t;
              return (
                !!(e = null == e ? 9007199254740991 : e) &&
                ("number" == n || ("symbol" != n && Nt.test(t))) &&
                t > -1 &&
                t % 1 == 0 &&
                t < e
              );
            };
            var Ut = Object.prototype.hasOwnProperty;
            const Pt = function (t, e) {
              var n = gt(t),
                r = !n && dt(t),
                o = !n && !r && wt(t),
                i = !n && !r && !o && Ft(t),
                a = n || r || o || i,
                u = a
                  ? (function (t, e) {
                      for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
                      return r;
                    })(t.length, String)
                  : [],
                c = u.length;
              for (var s in t)
                (!e && !Ut.call(t, s)) ||
                  (a &&
                    ("length" == s ||
                      (o && ("offset" == s || "parent" == s)) ||
                      (i &&
                        ("buffer" == s ||
                          "byteLength" == s ||
                          "byteOffset" == s)) ||
                      Dt(s, c))) ||
                  u.push(s);
              return u;
            };
            var $t = Object.prototype.hasOwnProperty;
            const Bt = function (t) {
                if (!x(t))
                  return (function (t) {
                    var e = [];
                    if (null != t) for (var n in Object(t)) e.push(n);
                    return e;
                  })(t);
                var e = ct(t),
                  n = [];
                for (var r in t)
                  ("constructor" != r || (!e && $t.call(t, r))) && n.push(r);
                return n;
              },
              Wt = function (t) {
                return yt(t) ? Pt(t, !0) : Bt(t);
              },
              qt = function (t) {
                return (function (t, e, n, r) {
                  var o = !n;
                  n || (n = {});
                  for (var i = -1, a = e.length; ++i < a; ) {
                    var u = e[i],
                      c = r ? r(n[u], t[u], u, n, t) : void 0;
                    void 0 === c && (c = t[u]), o ? J(n, u, c) : zt(n, u, c);
                  }
                  return n;
                })(t, Wt(t));
              },
              Ht = function (t, e, n, r, o, i, a) {
                var u,
                  c = Rt(t, n),
                  s = Rt(e, n),
                  l = a.get(s);
                if (l) V(t, n, l);
                else {
                  var f = i ? i(c, s, n + "", t, e, a) : void 0,
                    p = void 0 === f;
                  if (p) {
                    var h = gt(s),
                      d = !h && wt(s),
                      g = !h && !d && Ft(s);
                    (f = s),
                      h || d || g
                        ? gt(c)
                          ? (f = c)
                          : st((u = c)) && yt(u)
                          ? (f = (function (t, e) {
                              var n = -1,
                                r = t.length;
                              for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
                              return e;
                            })(c))
                          : d
                          ? ((p = !1),
                            (f = (function (t, e) {
                              return t.slice();
                            })(s)))
                          : g
                          ? ((p = !1), (f = et(s, !0)))
                          : (f = [])
                        : (function (t) {
                            if (!st(t) || "[object Object]" != w(t)) return !1;
                            var e = ot(t);
                            if (null === e) return !0;
                            var n = Ct.call(e, "constructor") && e.constructor;
                            return (
                              "function" == typeof n &&
                              n instanceof n &&
                              At.call(n) == St
                            );
                          })(s) || dt(s)
                        ? ((f = c),
                          dt(c)
                            ? (f = qt(c))
                            : (x(c) && !O(c)) ||
                              (f = (function (t) {
                                return "function" != typeof t.constructor ||
                                  ct(t)
                                  ? {}
                                  : rt(ot(t));
                              })(s)))
                        : (p = !1);
                  }
                  p && (a.set(s, f), o(f, s, r, i, a), a.delete(s)), V(t, n, f);
                }
              },
              Gt = function t(e, n, r, o, i) {
                e !== n &&
                  K(
                    n,
                    function (a, u) {
                      if ((i || (i = new G()), x(a))) Ht(e, n, u, r, t, o, i);
                      else {
                        var c = o ? o(Rt(e, u), a, u + "", e, n, i) : void 0;
                        void 0 === c && (c = a), V(e, u, c);
                      }
                    },
                    Wt,
                  );
              },
              Zt = function (t) {
                return t;
              },
              Jt = function (t, e, n) {
                switch (n.length) {
                  case 0:
                    return t.call(e);
                  case 1:
                    return t.call(e, n[0]);
                  case 2:
                    return t.call(e, n[0], n[1]);
                  case 3:
                    return t.call(e, n[0], n[1], n[2]);
                }
                return t.apply(e, n);
              };
            var Vt = Math.max;
            const Kt = Z
              ? function (t, e) {
                  var n;
                  return Z(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value:
                      ((n = e),
                      function () {
                        return n;
                      }),
                    writable: !0,
                  });
                }
              : Zt;
            var Yt = Date.now;
            const Qt = (function (t) {
                var e = 0,
                  n = 0;
                return function () {
                  var r = Yt(),
                    o = 16 - (r - n);
                  if (((n = r), o > 0)) {
                    if (++e >= 800) return arguments[0];
                  } else e = 0;
                  return t.apply(void 0, arguments);
                };
              })(Kt),
              Xt =
                ((ne = function (t, e, n) {
                  Gt(t, e, n);
                }),
                (ee = function (t, e) {
                  var n = -1,
                    r = e.length,
                    i = r > 1 ? e[r - 1] : void 0,
                    a = r > 2 ? e[2] : void 0;
                  for (
                    i =
                      ne.length > 3 && "function" == typeof i
                        ? (r--, i)
                        : void 0,
                      a &&
                        (function (t, e, n) {
                          if (!x(n)) return !1;
                          var r = typeof e;
                          return (
                            !!("number" == r
                              ? yt(n) && Dt(e, n.length)
                              : "string" == r && (e in n)) && o(n[e], t)
                          );
                        })(e[0], e[1], a) &&
                        ((i = r < 3 ? void 0 : i), (r = 1)),
                      t = Object(t);
                    ++n < r;

                  ) {
                    var u = e[n];
                    u && ne(t, u, n);
                  }
                  return t;
                }),
                Qt(
                  (function (t, e, n) {
                    return (
                      (e = Vt(void 0 === e ? t.length - 1 : e, 0)),
                      function () {
                        for (
                          var r = arguments,
                            o = -1,
                            i = Vt(r.length - e, 0),
                            a = Array(i);
                          ++o < i;

                        )
                          a[o] = r[e + o];
                        o = -1;
                        for (var u = Array(e + 1); ++o < e; ) u[o] = r[o];
                        return (u[e] = n(a)), Jt(t, this, u);
                      }
                    );
                  })(ee, void 0, Zt),
                  ee + "",
                )),
              te =
                "win32" === navigator.platform.toLowerCase()
                  ? r.win32
                  : r.posix;
            var ee, ne;
            const re = Xt;
            function oe(t, e) {
              let n,
                r,
                o = !1;
              const i = (e) => (n) => {
                  t && clearTimeout(t), e(n), (o = !0);
                },
                a = new Promise((o, a) => {
                  (n = i(o)),
                    (r = i(a)),
                    t &&
                      (t = setTimeout(
                        () => r(new Error(`[deferred timeout] ${e}`)),
                        t,
                      ));
                });
              return {
                created: Date.now(),
                setTag: (t) => (e = t),
                resolve: n,
                reject: r,
                promise: a,
                get settled() {
                  return o;
                },
              };
            }
            new Map();
            var ie = i(227),
              ae = i.n(ie);
            const ue = "application/x-postmate-v1+json";
            let ce = 0;
            const se = {
                handshake: 1,
                "handshake-reply": 1,
                call: 1,
                emit: 1,
                reply: 1,
                request: 1,
              },
              le = (t, e) =>
                !(
                  ("string" == typeof e && t.origin !== e) ||
                  !t.data ||
                  ("object" == typeof t.data && !("postmate" in t.data)) ||
                  t.data.type !== ue ||
                  !se[t.data.postmate]
                );
            class fe {
              parent;
              frame;
              child;
              events = {};
              childOrigin;
              listener;
              constructor(t) {
                (this.parent = t.parent),
                  (this.frame = t.frame),
                  (this.child = t.child),
                  (this.childOrigin = t.childOrigin),
                  (this.listener = (t) => {
                    if (!le(t, this.childOrigin)) return !1;
                    const { data: e, name: n } =
                      ((t || {}).data || {}).value || {};
                    "emit" === t.data.postmate &&
                      n in this.events &&
                      this.events[n].forEach((t) => {
                        t.call(this, e);
                      });
                  }),
                  this.parent.addEventListener("message", this.listener, !1);
              }
              get(t) {
                return new Promise((e) => {
                  const n = ++ce,
                    r = (t) => {
                      t.data.uid === n &&
                        "reply" === t.data.postmate &&
                        (this.parent.removeEventListener("message", r, !1),
                        e(t.data.value));
                    };
                  this.parent.addEventListener("message", r, !1),
                    this.child.postMessage(
                      { postmate: "request", type: ue, property: t, uid: n },
                      this.childOrigin,
                    );
                });
              }
              call(t, e) {
                this.child.postMessage(
                  { postmate: "call", type: ue, property: t, data: e },
                  this.childOrigin,
                );
              }
              on(t, e) {
                this.events[t] || (this.events[t] = []), this.events[t].push(e);
              }
              destroy() {
                window.removeEventListener("message", this.listener, !1),
                  this.frame.parentNode.removeChild(this.frame);
              }
            }
            class pe {
              model;
              parent;
              parentOrigin;
              child;
              constructor(t) {
                (this.model = t.model),
                  (this.parent = t.parent),
                  (this.parentOrigin = t.parentOrigin),
                  (this.child = t.child),
                  this.child.addEventListener("message", (t) => {
                    if (!le(t, this.parentOrigin)) return;
                    const { property: e, uid: n, data: r } = t.data;
                    "call" !== t.data.postmate
                      ? ((t, e) => {
                          const n = "function" == typeof t[e] ? t[e]() : t[e];
                          return Promise.resolve(n);
                        })(this.model, e).then((r) => {
                          t.source.postMessage(
                            {
                              property: e,
                              postmate: "reply",
                              type: ue,
                              uid: n,
                              value: r,
                            },
                            t.origin,
                          );
                        })
                      : e in this.model &&
                        "function" == typeof this.model[e] &&
                        this.model[e](r);
                  });
              }
              emit(t, e) {
                this.parent.postMessage(
                  { postmate: "emit", type: ue, value: { name: t, data: e } },
                  this.parentOrigin,
                );
              }
            }
            class he {
              static debug = !1;
              container;
              parent;
              frame;
              child;
              childOrigin;
              url;
              model;
              static Model;
              constructor(t) {
                (this.container = t.container),
                  (this.url = t.url),
                  (this.parent = window),
                  (this.frame = document.createElement("iframe")),
                  t.id && (this.frame.id = t.id),
                  t.name && (this.frame.name = t.name),
                  this.frame.classList.add.apply(
                    this.frame.classList,
                    t.classListArray || [],
                  ),
                  this.container.appendChild(this.frame),
                  (this.child = this.frame.contentWindow),
                  (this.model = t.model || {});
              }
              sendHandshake(t) {
                const e = ((t) => {
                  const e = document.createElement("a");
                  e.href = t;
                  const n =
                      e.protocol.length > 4
                        ? e.protocol
                        : window.location.protocol,
                    r = e.host.length
                      ? "80" === e.port || "443" === e.port
                        ? e.hostname
                        : e.host
                      : window.location.host;
                  return e.origin || `${n}//${r}`;
                })((t = t || this.url));
                let n,
                  r = 0;
                return new Promise((o, i) => {
                  const a = (t) =>
                    !!le(t, e) &&
                    ("handshake-reply" === t.data.postmate
                      ? (clearInterval(n),
                        this.parent.removeEventListener("message", a, !1),
                        (this.childOrigin = t.origin),
                        o(new fe(this)))
                      : i("Failed handshake"));
                  this.parent.addEventListener("message", a, !1);
                  const u = () => {
                    r++,
                      this.child.postMessage(
                        { postmate: "handshake", type: ue, model: this.model },
                        e,
                      ),
                      5 === r && clearInterval(n);
                  };
                  this.frame.addEventListener("load", () => {
                    u(), (n = setInterval(u, 500));
                  }),
                    (this.frame.src = t);
                });
              }
            }
            class de {
              child;
              model;
              parent;
              parentOrigin;
              constructor(t) {
                (this.child = window),
                  (this.model = t),
                  (this.parent = this.child.parent);
              }
              sendHandshakeReply() {
                return new Promise((t, e) => {
                  const n = (r) => {
                    if (r.data.postmate) {
                      if ("handshake" === r.data.postmate) {
                        this.child.removeEventListener("message", n, !1),
                          r.source.postMessage(
                            { postmate: "handshake-reply", type: ue },
                            r.origin,
                          ),
                          (this.parentOrigin = r.origin);
                        const e = r.data.model;
                        return (
                          e &&
                            Object.keys(e).forEach((t) => {
                              this.model[t] = e[t];
                            }),
                          t(new pe(this))
                        );
                      }
                      return e("Handshake Reply Failed");
                    }
                  };
                  this.child.addEventListener("message", n, !1);
                });
              }
            }
            var ge = i(729),
              ve = i.n(ge);
            const { importHTML: ye, createSandboxContainer: me } =
              window.QSandbox || {};
            function _e(t, e) {
              return t.startsWith("http")
                ? fetch(t, e)
                : ((t = t.replace("file://", "")),
                  new Promise(async (e, n) => {
                    try {
                      const n = await window.apis.doAction(["readFile", t]);
                      e({ text: () => n });
                    } catch (t) {
                      console.error(t), n(t);
                    }
                  }));
            }
            class be extends ve() {
              _pluginLocal;
              _frame;
              _root;
              _loaded = !1;
              _unmountFns = [];
              constructor(t) {
                super(),
                  (this._pluginLocal = t),
                  t._dispose(() => {
                    this._unmount();
                  });
              }
              async load() {
                const { name: t, entry: e } = this._pluginLocal.options;
                if (this.loaded || !e) return;
                const { template: n, execScripts: r } = await ye(e, {
                  fetch: _e,
                });
                this._mount(n, document.body);
                const o = me(t, { elementGetter: () => this._root?.firstChild })
                  .instance.proxy;
                (o.__shadow_mode__ = !0),
                  (o.LSPluginLocal = this._pluginLocal),
                  (o.LSPluginShadow = this),
                  (o.LSPluginUser = o.logseq =
                    new Ue(
                      this._pluginLocal.toJSON(),
                      this._pluginLocal.caller,
                    ));
                const i = await r(o, !0);
                this._unmountFns.push(i.unmount), (this._loaded = !0);
              }
              _mount(t, e) {
                const n = (this._frame = document.createElement("div"));
                n.classList.add("lsp-shadow-sandbox"),
                  (n.id = this._pluginLocal.id),
                  (this._root = n.attachShadow({ mode: "open" })),
                  (this._root.innerHTML = `<div>${t}</div>`),
                  e.appendChild(n),
                  this.emit("mounted");
              }
              _unmount() {
                for (const t of this._unmountFns) t && t.call(null);
              }
              destroy() {
                this.frame?.parentNode?.removeChild(this.frame);
              }
              get loaded() {
                return this._loaded;
              }
              get document() {
                return this._root?.firstChild;
              }
              get frame() {
                return this._frame;
              }
            }
            const we = ae()("LSPlugin:caller"),
              xe = "#await#response#",
              Oe = "#lspmsg#error#",
              Ae = (t) => `#lspmsg#${t}`;
            class Ce extends ve() {
              _pluginLocal;
              _connected = !1;
              _parent;
              _child;
              _shadow;
              _status;
              _userModel = {};
              _call;
              _callUserModel;
              _debugTag = "";
              constructor(t) {
                super(),
                  (this._pluginLocal = t),
                  t && (this._debugTag = t.debugTag);
              }
              async connectToChild() {
                if (this._connected) return;
                const { shadow: t } = this._pluginLocal;
                t
                  ? await this._setupShadowSandbox()
                  : await this._setupIframeSandbox();
              }
              async connectToParent(t = {}) {
                if (this._connected) return;
                const e = this,
                  n = null != this._pluginLocal;
                let r = 0,
                  o = 0;
                const i = new Map(),
                  a = oe(5e3),
                  u = this._extendUserModel({
                    "#lspmsg#ready#": async (t) => {
                      (u[Ae(t?.pid)] = ({ type: t, payload: n }) => {
                        we(`[call from host (_call)] ${this._debugTag}`, t, n),
                          e.emit(t, n);
                      }),
                        await a.resolve();
                    },
                    "#lspmsg#beforeunload#": async (t) => {
                      const n = oe(1e4);
                      e.emit("beforeunload", Object.assign({ actor: n }, t)),
                        await n.promise;
                    },
                    "#lspmsg#settings#": async ({ type: t, payload: n }) => {
                      e.emit("settings:changed", n);
                    },
                    "#lspmsg#": async ({ ns: t, type: n, payload: r }) => {
                      we(`[call from host (async)] ${this._debugTag}`, t, n, r),
                        t && t.startsWith("hook")
                          ? e.emit(`${t}:${n}`, r)
                          : e.emit(n, r);
                    },
                    "#lspmsg#reply#": ({ _sync: t, result: e }) => {
                      if ((we(`[sync reply] #${t}`, e), i.has(t))) {
                        const n = i.get(t);
                        n &&
                          (e?.hasOwnProperty(Oe)
                            ? n.reject(e[Oe])
                            : n.resolve(e),
                          i.delete(t));
                      }
                    },
                    ...t,
                  });
                if (n)
                  return (
                    await a.promise,
                    JSON.parse(JSON.stringify(this._pluginLocal?.toJSON()))
                  );
                const c = new de(u).sendHandshakeReply();
                return (
                  (this._status = "pending"),
                  await c
                    .then((t) => {
                      (this._child = t),
                        (this._connected = !0),
                        (this._call = async (e, n = {}, r) => {
                          if (r) {
                            const t = ++o;
                            i.set(t, r),
                              (n._sync = t),
                              r.setTag(`async call #${t}`),
                              we("async call #", t);
                          }
                          return (
                            t.emit(Ae(u.baseInfo.id), { type: e, payload: n }),
                            r?.promise
                          );
                        }),
                        (this._callUserModel = async (t, e) => {
                          try {
                            u[t](e);
                          } catch (e) {
                            we(`[model method] #${t} not existed`);
                          }
                        }),
                        (r = setInterval(() => {
                          if (i.size > 100)
                            for (const [t, e] of i) e.settled && i.delete(t);
                        }, 18e5));
                    })
                    .finally(() => {
                      this._status = void 0;
                    }),
                  await a.promise,
                  u.baseInfo
                );
              }
              async call(t, e = {}) {
                return this._call?.call(this, t, e);
              }
              async callAsync(t, e = {}) {
                const n = oe(1e4);
                return this._call?.call(this, t, e, n);
              }
              async callUserModel(t, e = {}) {
                return this._callUserModel?.call(this, t, e);
              }
              async _setupIframeSandbox() {
                const t = this._pluginLocal,
                  e = t.id,
                  n = new URL(t.options.entry);
                n.searchParams.set("__v__", t.options.version);
                const r = document.querySelector(`#${e}`);
                r && r.parentElement.removeChild(r);
                const o = document.createElement("div");
                o.classList.add("lsp-iframe-sandbox-container"), (o.id = e);
                try {
                  const t = (await this._pluginLocal._loadLayoutsData())?.$$0;
                  if (t) {
                    o.dataset.inited_layout = "true";
                    const { width: e, height: n, left: r, top: i } = t;
                    Object.assign(o.style, {
                      width: e + "px",
                      height: n + "px",
                      left: r + "px",
                      top: i + "px",
                    });
                  }
                } catch (t) {
                  console.error("[Restore Layout Error]", t);
                }
                document.body.appendChild(o);
                let i,
                  a = new he({
                    id: e + "_iframe",
                    container: o,
                    url: n.href,
                    classListArray: ["lsp-iframe-sandbox"],
                    model: { baseInfo: JSON.parse(JSON.stringify(t.toJSON())) },
                  }).sendHandshake();
                return (
                  (this._status = "pending"),
                  new Promise((e, n) => {
                    (i = setTimeout(() => {
                      n(new Error("handshake Timeout"));
                    }, 3e3)),
                      a
                        .then((n) => {
                          (this._parent = n),
                            (this._connected = !0),
                            this.emit("connected"),
                            n.on(Ae(t.id), ({ type: t, payload: e }) => {
                              we("[call from plugin] ", t, e),
                                this._pluginLocal?.emit(t, e || {});
                            }),
                            (this._call = async (...e) => {
                              await n.call(Ae(t.id), {
                                type: e[0],
                                payload: Object.assign(e[1] || {}, {
                                  $$pid: t.id,
                                }),
                              });
                            }),
                            (this._callUserModel = async (t, e) => {
                              if (t.startsWith(xe))
                                return await n.get(t.replace(xe, ""));
                              n.call(t, e);
                            }),
                            e(null);
                        })
                        .catch((t) => {
                          n(t);
                        })
                        .finally(() => {
                          clearTimeout(i);
                        });
                  })
                    .catch((t) => {
                      throw (we("[iframe sandbox] error", t), t);
                    })
                    .finally(() => {
                      this._status = void 0;
                    })
                );
              }
              async _setupShadowSandbox() {
                const t = this._pluginLocal,
                  e = (this._shadow = new be(t));
                try {
                  (this._status = "pending"),
                    await e.load(),
                    (this._connected = !0),
                    this.emit("connected"),
                    (this._call = async (e, n = {}, r) => (
                      r && (n.actor = r),
                      this._pluginLocal?.emit(
                        e,
                        Object.assign(n, { $$pid: t.id }),
                      ),
                      r?.promise
                    )),
                    (this._callUserModel = async (...t) => {
                      let e = t[0];
                      e?.startsWith(xe) && (e = e.replace(xe, ""));
                      const n = t[1] || {},
                        r = this._userModel[e];
                      "function" == typeof r && (await r.call(null, n));
                    });
                } catch (t) {
                  throw (we("[shadow sandbox] error", t), t);
                } finally {
                  this._status = void 0;
                }
              }
              _extendUserModel(t) {
                return Object.assign(this._userModel, t);
              }
              _getSandboxIframeContainer() {
                return this._parent?.frame.parentNode;
              }
              _getSandboxShadowContainer() {
                return this._shadow?.frame.parentNode;
              }
              _getSandboxIframeRoot() {
                return this._parent?.frame;
              }
              _getSandboxShadowRoot() {
                return this._shadow?.frame;
              }
              set debugTag(t) {
                this._debugTag = t;
              }
              async destroy() {
                let t = null;
                this._parent &&
                  ((t = this._getSandboxIframeContainer()),
                  await this._parent.destroy()),
                  this._shadow &&
                    ((t = this._getSandboxShadowContainer()),
                    this._shadow.destroy()),
                  t?.parentNode.removeChild(t);
              }
            }
            var Se = function () {
              return (Se =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, o) &&
                        (t[o] = e[o]);
                  return t;
                }).apply(this, arguments);
            };
            function je(t) {
              return t.toLowerCase();
            }
            Object.create, Object.create;
            var ke = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
              Te = /[^A-Z0-9]+/gi;
            function Ee(t, e, n) {
              return e instanceof RegExp
                ? t.replace(e, n)
                : e.reduce(function (t, e) {
                    return t.replace(e, n);
                  }, t);
            }
            class Ie {
              ctx;
              constructor(t) {
                this.ctx = t;
              }
              get ctxId() {
                return this.ctx.baseInfo.id;
              }
              setItem(t, e) {
                return this.ctx.caller.callAsync("api:call", {
                  method: "write-plugin-storage-file",
                  args: [this.ctxId, t, e],
                });
              }
              getItem(t) {
                return this.ctx.caller.callAsync("api:call", {
                  method: "read-plugin-storage-file",
                  args: [this.ctxId, t],
                });
              }
              removeItem(t) {
                return this.ctx.caller.call("api:call", {
                  method: "unlink-plugin-storage-file",
                  args: [this.ctxId, t],
                });
              }
              clear() {
                return this.ctx.caller.call("api:call", {
                  method: "clear-plugin-storage-files",
                  args: [this.ctxId],
                });
              }
              hasItem(t) {
                return this.ctx.caller.callAsync("api:call", {
                  method: "exist-plugin-storage-file",
                  args: [this.ctxId, t],
                });
              }
            }
            const Le = Symbol.for("proxy-continue"),
              Fe = ae()("LSPlugin:user");
            function Re(t, e, n) {
              if ("function" != typeof n) return !1;
              const {
                  key: r,
                  label: o,
                  desc: i,
                  palette: a,
                  keybinding: u,
                } = e,
                c = `SimpleCommandHook${r}${++ze}`;
              this.Editor["on" + c](n),
                this.caller?.call("api:call", {
                  method: "register-plugin-simple-command",
                  args: [
                    this.baseInfo.id,
                    [
                      { key: r, label: o, type: t, desc: i, keybinding: u },
                      ["editor/hook", c],
                    ],
                    a,
                  ],
                });
            }
            const Me = {
              registerCommand: Re,
              registerCommandPalette(t, e) {
                const { key: n, label: r, keybinding: o } = t;
                return Re.call(
                  this,
                  "global-palette-command",
                  { key: n, label: r, palette: !0, keybinding: o },
                  e,
                );
              },
              registerUIItem(t, e) {
                const n = this.baseInfo.id;
                this.caller?.call("api:call", {
                  method: "register-plugin-ui-item",
                  args: [n, t, e],
                });
              },
              registerPageMenuItem(t, e) {
                if ("function" != typeof e) return !1;
                const n = t + "_" + this.baseInfo.id,
                  r = t;
                Re.call(this, "page-menu-item", { key: n, label: r }, e);
              },
              setFullScreen(t) {
                const e = (...t) => this._callWin("setFullScreen", ...t);
                "toggle" === t
                  ? this._callWin("isFullScreen").then((t) => {
                      t ? e() : e(!0);
                    })
                  : t
                  ? e(!0)
                  : e();
              },
            };
            let ze = 0;
            const Ne = {
                registerSlashCommand(t, e) {
                  Fe("Register slash command #", this.baseInfo.id, t, e),
                    "function" == typeof e &&
                      (e = [
                        ["editor/clear-current-slash", !1],
                        ["editor/restore-saved-cursor"],
                        ["editor/hook", e],
                      ]),
                    (e = e.map((t) => {
                      const [e, ...n] = t;
                      if ("editor/hook" === e) {
                        let r = n[0],
                          o = () => {
                            this.caller?.callUserModel(r);
                          };
                        "function" == typeof r && (o = r);
                        const i = `SlashCommandHook${e}${++ze}`;
                        (t[1] = i), this.Editor["on" + i](o);
                      }
                      return t;
                    })),
                    this.caller?.call("api:call", {
                      method: "register-plugin-slash-command",
                      args: [this.baseInfo.id, [t, e]],
                    });
                },
                registerBlockContextMenuItem(t, e) {
                  if ("function" != typeof e) return !1;
                  const n = t + "_" + this.baseInfo.id,
                    r = t;
                  Re.call(
                    this,
                    "block-context-menu-item",
                    { key: n, label: r },
                    e,
                  );
                },
                scrollToBlockInPage(t, e) {
                  const n = "block-content-" + e;
                  this.App.pushState("page", { name: t }, { anchor: n });
                },
              },
              De = {};
            class Ue extends ve() {
              _baseInfo;
              _caller;
              _settingsSchema;
              _connected = !1;
              _ui = new Map();
              _fileStorage;
              _beforeunloadCallback;
              constructor(t, e) {
                super(),
                  (this._baseInfo = t),
                  (this._caller = e),
                  e.on("sys:ui:visible", (t) => {
                    t?.toggle && this.toggleMainUI();
                  }),
                  e.on("settings:changed", (t) => {
                    const e = Object.assign({}, this.settings),
                      n = Object.assign(this._baseInfo.settings, t);
                    this.emit("settings:changed", { ...n }, e);
                  }),
                  e.on("beforeunload", async (t) => {
                    const { actor: n, ...r } = t,
                      o = this._beforeunloadCallback;
                    try {
                      o && (await o(r)), n?.resolve(null);
                    } catch (t) {
                      console.debug(`${e.debugTag} [beforeunload] `, t),
                        n?.reject(t);
                    }
                  }),
                  (this._fileStorage = new Ie(this));
              }
              async ready(t, e) {
                if (!this._connected)
                  try {
                    "function" == typeof t && ((e = t), (t = {}));
                    let n = await this._caller.connectToParent(t);
                    (this._connected = !0),
                      (n = re(this._baseInfo, n)),
                      this._settingsSchema &&
                        ((n.settings = (function (t, e) {
                          const n = (e || []).reduce(
                            (t, e) => (
                              "default" in e && (t[e.key] = e.default), t
                            ),
                            {},
                          );
                          return Object.assign(n, t);
                        })(n.settings, this._settingsSchema)),
                        await this.useSettingsSchema(this._settingsSchema)),
                      n?.id && (this._caller.debugTag = `#${n.id} [${n.name}]`),
                      e && e.call(this, n);
                  } catch (t) {
                    console.error("[LSPlugin Ready Error]", t);
                  }
              }
              ensureConnected() {
                if (!this._connected) throw new Error("not connected");
              }
              beforeunload(t) {
                "function" == typeof t && (this._beforeunloadCallback = t);
              }
              provideModel(t) {
                return this.caller._extendUserModel(t), this;
              }
              provideTheme(t) {
                return this.caller.call("provider:theme", t), this;
              }
              provideStyle(t) {
                return this.caller.call("provider:style", t), this;
              }
              provideUI(t) {
                return this.caller.call("provider:ui", t), this;
              }
              useSettingsSchema(t) {
                return (
                  this.connected &&
                    this.caller.call("settings:schema", {
                      schema: t,
                      isSync: !0,
                    }),
                  (this._settingsSchema = t),
                  this
                );
              }
              updateSettings(t) {
                this.caller.call("settings:update", t);
              }
              onSettingsChanged(t) {
                const e = "settings:changed";
                return this.on(e, t), () => this.off(e, t);
              }
              showSettingsUI() {
                this.caller.call("settings:visible:changed", { visible: !0 });
              }
              hideSettingsUI() {
                this.caller.call("settings:visible:changed", { visible: !1 });
              }
              setMainUIAttrs(t) {
                this.caller.call("main-ui:attrs", t);
              }
              setMainUIInlineStyle(t) {
                this.caller.call("main-ui:style", t);
              }
              hideMainUI(t) {
                const e = {
                  key: 0,
                  visible: !1,
                  cursor: t?.restoreEditingCursor,
                };
                this.caller.call("main-ui:visible", e),
                  this.emit("ui:visible:changed", e),
                  this._ui.set(e.key, e);
              }
              showMainUI(t) {
                const e = { key: 0, visible: !0, autoFocus: t?.autoFocus };
                this.caller.call("main-ui:visible", e),
                  this.emit("ui:visible:changed", e),
                  this._ui.set(e.key, e);
              }
              toggleMainUI() {
                const t = this._ui.get(0);
                t && t.visible ? this.hideMainUI() : this.showMainUI();
              }
              get isMainUIVisible() {
                const t = this._ui.get(0);
                return Boolean(t && t.visible);
              }
              get connected() {
                return this._connected;
              }
              get baseInfo() {
                return this._baseInfo;
              }
              get settings() {
                return this.baseInfo?.settings;
              }
              get caller() {
                return this._caller;
              }
              resolveResourceFullUrl(t) {
                if ((this.ensureConnected(), t))
                  return (
                    (t = t.replace(/^[.\\/]+/, "")),
                    (function (t, ...e) {
                      try {
                        const n = new URL(t);
                        if (!n.origin) throw new Error(null);
                        const r = te.join(t.substr(n.origin.length), ...e);
                        return n.origin + r;
                      } catch (n) {
                        return te.join(t, ...e);
                      }
                    })(this._baseInfo.lsr, t)
                  );
              }
              _makeUserProxy(t, e) {
                const n = this,
                  r = this.caller;
                return new Proxy(t, {
                  get(t, o, i) {
                    const a = t[o];
                    return function (...t) {
                      if (!a || a.apply(n, t) === Le) {
                        if (e) {
                          const n = o.toString().match(/^(once|off|on)/i);
                          if (null != n) {
                            const o = n[0].toLowerCase(),
                              a = n.input.slice(o.length),
                              l = `hook:${e}:${
                                ((i = a),
                                void 0 === u && (u = {}),
                                (c = i),
                                (s = Se({ delimiter: "_" }, u)),
                                void 0 === s && (s = {}),
                                (function (t, e) {
                                  void 0 === e && (e = {});
                                  for (
                                    var n = e.splitRegexp,
                                      r = void 0 === n ? ke : n,
                                      o = e.stripRegexp,
                                      i = void 0 === o ? Te : o,
                                      a = e.transform,
                                      u = void 0 === a ? je : a,
                                      c = e.delimiter,
                                      s = void 0 === c ? " " : c,
                                      l = Ee(Ee(t, r, "$1\0$2"), i, "\0"),
                                      f = 0,
                                      p = l.length;
                                    "\0" === l.charAt(f);

                                  )
                                    f++;
                                  for (; "\0" === l.charAt(p - 1); ) p--;
                                  return l
                                    .slice(f, p)
                                    .split("\0")
                                    .map(u)
                                    .join(s);
                                })(c, Se({ delimiter: "." }, s)))
                              }`,
                              f = t[0];
                            return (
                              r[o](l, f),
                              "off" !== o ? () => r.off(l, f) : void 0
                            );
                          }
                        }
                        var i, u;
                        return r.callAsync("api:call", {
                          tag: e,
                          method: o,
                          args: t,
                        });
                      }
                      var c, s;
                    };
                  },
                });
              }
              _callWin(...t) {
                return this._caller.callAsync("api:call", {
                  method: "_callMainWin",
                  args: t,
                });
              }
              get App() {
                return this._makeUserProxy(Me, "app");
              }
              get Editor() {
                return this._makeUserProxy(Ne, "editor");
              }
              get DB() {
                return this._makeUserProxy(De);
              }
              get FileStorage() {
                return this._fileStorage;
              }
            }
            function Pe(t, e) {
              return new Ue(t, e);
            }
            if (null == window.__LSP__HOST__) {
              const t = new Ce(null);
              window.logseq = Pe({}, t);
            }
          })(),
          a
        );
      })());
  }),
  o.register("7U5sq", function (e, n) {
    (function () {
      var r,
        o = "Expected a function",
        i = "__lodash_hash_undefined__",
        a = "__lodash_placeholder__",
        u = 16,
        c = 32,
        s = 64,
        l = 128,
        f = 256,
        p = 1 / 0,
        h = 9007199254740991,
        d = NaN,
        g = 4294967295,
        v = [
          ["ary", l],
          ["bind", 1],
          ["bindKey", 2],
          ["curry", 8],
          ["curryRight", u],
          ["flip", 512],
          ["partial", c],
          ["partialRight", s],
          ["rearg", f],
        ],
        y = "[object Arguments]",
        m = "[object Array]",
        _ = "[object Boolean]",
        b = "[object Date]",
        w = "[object Error]",
        x = "[object Function]",
        O = "[object GeneratorFunction]",
        A = "[object Map]",
        C = "[object Number]",
        S = "[object Object]",
        j = "[object Promise]",
        k = "[object RegExp]",
        T = "[object Set]",
        E = "[object String]",
        I = "[object Symbol]",
        L = "[object WeakMap]",
        F = "[object ArrayBuffer]",
        R = "[object DataView]",
        M = "[object Float32Array]",
        z = "[object Float64Array]",
        N = "[object Int8Array]",
        D = "[object Int16Array]",
        U = "[object Int32Array]",
        P = "[object Uint8Array]",
        $ = "[object Uint8ClampedArray]",
        B = "[object Uint16Array]",
        W = "[object Uint32Array]",
        q = /\b__p \+= '';/g,
        H = /\b(__p \+=) '' \+/g,
        G = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        Z = /&(?:amp|lt|gt|quot|#39);/g,
        J = /[&<>"']/g,
        V = RegExp(Z.source),
        K = RegExp(J.source),
        Y = /<%-([\s\S]+?)%>/g,
        Q = /<%([\s\S]+?)%>/g,
        X = /<%=([\s\S]+?)%>/g,
        tt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        et = /^\w*$/,
        nt =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        rt = /[\\^$.*+?()[\]{}|]/g,
        ot = RegExp(rt.source),
        it = /^\s+/,
        at = /\s/,
        ut = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
        ct = /\{\n\/\* \[wrapped with (.+)\] \*/,
        st = /,? & /,
        lt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
        ft = /[()=,{}\[\]\/\s]/,
        pt = /\\(\\)?/g,
        ht = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        dt = /\w*$/,
        gt = /^[-+]0x[0-9a-f]+$/i,
        vt = /^0b[01]+$/i,
        yt = /^\[object .+?Constructor\]$/,
        mt = /^0o[0-7]+$/i,
        _t = /^(?:0|[1-9]\d*)$/,
        bt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        wt = /($^)/,
        xt = /['\n\r\u2028\u2029\\]/g,
        Ot = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
        At = "\\u2700-\\u27bf",
        Ct = "a-z\\xdf-\\xf6\\xf8-\\xff",
        St = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        jt = "\\ufe0e\\ufe0f",
        kt =
          "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        Tt = "['’]",
        Et = "[\\ud800-\\udfff]",
        It = "[" + kt + "]",
        Lt = "[" + Ot + "]",
        Ft = "\\d+",
        Rt = "[\\u2700-\\u27bf]",
        Mt = "[" + Ct + "]",
        zt = "[^\\ud800-\\udfff" + kt + Ft + At + Ct + St + "]",
        Nt = "\\ud83c[\\udffb-\\udfff]",
        Dt = "[^\\ud800-\\udfff]",
        Ut = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        Pt = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        $t = "[" + St + "]",
        Bt = "(?:" + Mt + "|" + zt + ")",
        Wt = "(?:" + $t + "|" + zt + ")",
        qt = "(?:['’](?:d|ll|m|re|s|t|ve))?",
        Ht = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
        Gt = "(?:" + Lt + "|" + Nt + ")" + "?",
        Zt = "[\\ufe0e\\ufe0f]?",
        Jt =
          Zt +
          Gt +
          ("(?:\\u200d(?:" + [Dt, Ut, Pt].join("|") + ")" + Zt + Gt + ")*"),
        Vt = "(?:" + [Rt, Ut, Pt].join("|") + ")" + Jt,
        Kt = "(?:" + [Dt + Lt + "?", Lt, Ut, Pt, Et].join("|") + ")",
        Yt = RegExp(Tt, "g"),
        Qt = RegExp(Lt, "g"),
        Xt = RegExp(Nt + "(?=" + Nt + ")|" + Kt + Jt, "g"),
        te = RegExp(
          [
            $t + "?" + Mt + "+" + qt + "(?=" + [It, $t, "$"].join("|") + ")",
            Wt + "+" + Ht + "(?=" + [It, $t + Bt, "$"].join("|") + ")",
            $t + "?" + Bt + "+" + qt,
            $t + "+" + Ht,
            "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            Ft,
            Vt,
          ].join("|"),
          "g",
        ),
        ee = RegExp("[\\u200d\\ud800-\\udfff" + Ot + jt + "]"),
        ne =
          /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        re = [
          "Array",
          "Buffer",
          "DataView",
          "Date",
          "Error",
          "Float32Array",
          "Float64Array",
          "Function",
          "Int8Array",
          "Int16Array",
          "Int32Array",
          "Map",
          "Math",
          "Object",
          "Promise",
          "RegExp",
          "Set",
          "String",
          "Symbol",
          "TypeError",
          "Uint8Array",
          "Uint8ClampedArray",
          "Uint16Array",
          "Uint32Array",
          "WeakMap",
          "_",
          "clearTimeout",
          "isFinite",
          "parseInt",
          "setTimeout",
        ],
        oe = -1,
        ie = {};
      (ie[M] =
        ie[z] =
        ie[N] =
        ie[D] =
        ie[U] =
        ie[P] =
        ie[$] =
        ie[B] =
        ie[W] =
          !0),
        (ie[y] =
          ie[m] =
          ie[F] =
          ie[_] =
          ie[R] =
          ie[b] =
          ie[w] =
          ie[x] =
          ie[A] =
          ie[C] =
          ie[S] =
          ie[k] =
          ie[T] =
          ie[E] =
          ie[L] =
            !1);
      var ae = {};
      (ae[y] =
        ae[m] =
        ae[F] =
        ae[R] =
        ae[_] =
        ae[b] =
        ae[M] =
        ae[z] =
        ae[N] =
        ae[D] =
        ae[U] =
        ae[A] =
        ae[C] =
        ae[S] =
        ae[k] =
        ae[T] =
        ae[E] =
        ae[I] =
        ae[P] =
        ae[$] =
        ae[B] =
        ae[W] =
          !0),
        (ae[w] = ae[x] = ae[L] = !1);
      var ue = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        ce = parseFloat,
        se = parseInt,
        le = "object" == typeof t && t && t.Object === Object && t,
        fe = "object" == typeof self && self && self.Object === Object && self,
        pe = le || fe || Function("return this")(),
        he = n && !n.nodeType && n,
        de = he && e && !e.nodeType && e,
        ge = de && de.exports === he,
        ve = ge && le.process,
        ye = (function () {
          try {
            var t = de && de.require && de.require("util").types;
            return t || (ve && ve.binding && ve.binding("util"));
          } catch (t) {}
        })(),
        me = ye && ye.isArrayBuffer,
        _e = ye && ye.isDate,
        be = ye && ye.isMap,
        we = ye && ye.isRegExp,
        xe = ye && ye.isSet,
        Oe = ye && ye.isTypedArray;
      function Ae(t, e, n) {
        switch (n.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, n[0]);
          case 2:
            return t.call(e, n[0], n[1]);
          case 3:
            return t.call(e, n[0], n[1], n[2]);
        }
        return t.apply(e, n);
      }
      function Ce(t, e, n, r) {
        for (var o = -1, i = null == t ? 0 : t.length; ++o < i; ) {
          var a = t[o];
          e(r, a, n(a), t);
        }
        return r;
      }
      function Se(t, e) {
        for (
          var n = -1, r = null == t ? 0 : t.length;
          ++n < r && !1 !== e(t[n], n, t);

        );
        return t;
      }
      function je(t, e) {
        for (var n = null == t ? 0 : t.length; n-- && !1 !== e(t[n], n, t); );
        return t;
      }
      function ke(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
          if (!e(t[n], n, t)) return !1;
        return !0;
      }
      function Te(t, e) {
        for (
          var n = -1, r = null == t ? 0 : t.length, o = 0, i = [];
          ++n < r;

        ) {
          var a = t[n];
          e(a, n, t) && (i[o++] = a);
        }
        return i;
      }
      function Ee(t, e) {
        return !!(null == t ? 0 : t.length) && Pe(t, e, 0) > -1;
      }
      function Ie(t, e, n) {
        for (var r = -1, o = null == t ? 0 : t.length; ++r < o; )
          if (n(e, t[r])) return !0;
        return !1;
      }
      function Le(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r; )
          o[n] = e(t[n], n, t);
        return o;
      }
      function Fe(t, e) {
        for (var n = -1, r = e.length, o = t.length; ++n < r; ) t[o + n] = e[n];
        return t;
      }
      function Re(t, e, n, r) {
        var o = -1,
          i = null == t ? 0 : t.length;
        for (r && i && (n = t[++o]); ++o < i; ) n = e(n, t[o], o, t);
        return n;
      }
      function Me(t, e, n, r) {
        var o = null == t ? 0 : t.length;
        for (r && o && (n = t[--o]); o--; ) n = e(n, t[o], o, t);
        return n;
      }
      function ze(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
          if (e(t[n], n, t)) return !0;
        return !1;
      }
      var Ne = qe("length");
      function De(t, e, n) {
        var r;
        return (
          n(t, function (t, n, o) {
            if (e(t, n, o)) return (r = n), !1;
          }),
          r
        );
      }
      function Ue(t, e, n, r) {
        for (var o = t.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
          if (e(t[i], i, t)) return i;
        return -1;
      }
      function Pe(t, e, n) {
        return e == e
          ? (function (t, e, n) {
              var r = n - 1,
                o = t.length;
              for (; ++r < o; ) if (t[r] === e) return r;
              return -1;
            })(t, e, n)
          : Ue(t, Be, n);
      }
      function $e(t, e, n, r) {
        for (var o = n - 1, i = t.length; ++o < i; ) if (r(t[o], e)) return o;
        return -1;
      }
      function Be(t) {
        return t != t;
      }
      function We(t, e) {
        var n = null == t ? 0 : t.length;
        return n ? Ze(t, e) / n : d;
      }
      function qe(t) {
        return function (e) {
          return null == e ? r : e[t];
        };
      }
      function He(t) {
        return function (e) {
          return null == t ? r : t[e];
        };
      }
      function Ge(t, e, n, r, o) {
        return (
          o(t, function (t, o, i) {
            n = r ? ((r = !1), t) : e(n, t, o, i);
          }),
          n
        );
      }
      function Ze(t, e) {
        for (var n, o = -1, i = t.length; ++o < i; ) {
          var a = e(t[o]);
          a !== r && (n = n === r ? a : n + a);
        }
        return n;
      }
      function Je(t, e) {
        for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
        return r;
      }
      function Ve(t) {
        return t ? t.slice(0, dn(t) + 1).replace(it, "") : t;
      }
      function Ke(t) {
        return function (e) {
          return t(e);
        };
      }
      function Ye(t, e) {
        return Le(e, function (e) {
          return t[e];
        });
      }
      function Qe(t, e) {
        return t.has(e);
      }
      function Xe(t, e) {
        for (var n = -1, r = t.length; ++n < r && Pe(e, t[n], 0) > -1; );
        return n;
      }
      function tn(t, e) {
        for (var n = t.length; n-- && Pe(e, t[n], 0) > -1; );
        return n;
      }
      function en(t, e) {
        for (var n = t.length, r = 0; n--; ) t[n] === e && ++r;
        return r;
      }
      var nn = He({
          À: "A",
          Á: "A",
          Â: "A",
          Ã: "A",
          Ä: "A",
          Å: "A",
          à: "a",
          á: "a",
          â: "a",
          ã: "a",
          ä: "a",
          å: "a",
          Ç: "C",
          ç: "c",
          Ð: "D",
          ð: "d",
          È: "E",
          É: "E",
          Ê: "E",
          Ë: "E",
          è: "e",
          é: "e",
          ê: "e",
          ë: "e",
          Ì: "I",
          Í: "I",
          Î: "I",
          Ï: "I",
          ì: "i",
          í: "i",
          î: "i",
          ï: "i",
          Ñ: "N",
          ñ: "n",
          Ò: "O",
          Ó: "O",
          Ô: "O",
          Õ: "O",
          Ö: "O",
          Ø: "O",
          ò: "o",
          ó: "o",
          ô: "o",
          õ: "o",
          ö: "o",
          ø: "o",
          Ù: "U",
          Ú: "U",
          Û: "U",
          Ü: "U",
          ù: "u",
          ú: "u",
          û: "u",
          ü: "u",
          Ý: "Y",
          ý: "y",
          ÿ: "y",
          Æ: "Ae",
          æ: "ae",
          Þ: "Th",
          þ: "th",
          ß: "ss",
          Ā: "A",
          Ă: "A",
          Ą: "A",
          ā: "a",
          ă: "a",
          ą: "a",
          Ć: "C",
          Ĉ: "C",
          Ċ: "C",
          Č: "C",
          ć: "c",
          ĉ: "c",
          ċ: "c",
          č: "c",
          Ď: "D",
          Đ: "D",
          ď: "d",
          đ: "d",
          Ē: "E",
          Ĕ: "E",
          Ė: "E",
          Ę: "E",
          Ě: "E",
          ē: "e",
          ĕ: "e",
          ė: "e",
          ę: "e",
          ě: "e",
          Ĝ: "G",
          Ğ: "G",
          Ġ: "G",
          Ģ: "G",
          ĝ: "g",
          ğ: "g",
          ġ: "g",
          ģ: "g",
          Ĥ: "H",
          Ħ: "H",
          ĥ: "h",
          ħ: "h",
          Ĩ: "I",
          Ī: "I",
          Ĭ: "I",
          Į: "I",
          İ: "I",
          ĩ: "i",
          ī: "i",
          ĭ: "i",
          į: "i",
          ı: "i",
          Ĵ: "J",
          ĵ: "j",
          Ķ: "K",
          ķ: "k",
          ĸ: "k",
          Ĺ: "L",
          Ļ: "L",
          Ľ: "L",
          Ŀ: "L",
          Ł: "L",
          ĺ: "l",
          ļ: "l",
          ľ: "l",
          ŀ: "l",
          ł: "l",
          Ń: "N",
          Ņ: "N",
          Ň: "N",
          Ŋ: "N",
          ń: "n",
          ņ: "n",
          ň: "n",
          ŋ: "n",
          Ō: "O",
          Ŏ: "O",
          Ő: "O",
          ō: "o",
          ŏ: "o",
          ő: "o",
          Ŕ: "R",
          Ŗ: "R",
          Ř: "R",
          ŕ: "r",
          ŗ: "r",
          ř: "r",
          Ś: "S",
          Ŝ: "S",
          Ş: "S",
          Š: "S",
          ś: "s",
          ŝ: "s",
          ş: "s",
          š: "s",
          Ţ: "T",
          Ť: "T",
          Ŧ: "T",
          ţ: "t",
          ť: "t",
          ŧ: "t",
          Ũ: "U",
          Ū: "U",
          Ŭ: "U",
          Ů: "U",
          Ű: "U",
          Ų: "U",
          ũ: "u",
          ū: "u",
          ŭ: "u",
          ů: "u",
          ű: "u",
          ų: "u",
          Ŵ: "W",
          ŵ: "w",
          Ŷ: "Y",
          ŷ: "y",
          Ÿ: "Y",
          Ź: "Z",
          Ż: "Z",
          Ž: "Z",
          ź: "z",
          ż: "z",
          ž: "z",
          Ĳ: "IJ",
          ĳ: "ij",
          Œ: "Oe",
          œ: "oe",
          ŉ: "'n",
          ſ: "s",
        }),
        rn = He({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        });
      function on(t) {
        return "\\" + ue[t];
      }
      function an(t) {
        return ee.test(t);
      }
      function un(t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function (t, r) {
            n[++e] = [r, t];
          }),
          n
        );
      }
      function cn(t, e) {
        return function (n) {
          return t(e(n));
        };
      }
      function sn(t, e) {
        for (var n = -1, r = t.length, o = 0, i = []; ++n < r; ) {
          var u = t[n];
          (u !== e && u !== a) || ((t[n] = a), (i[o++] = n));
        }
        return i;
      }
      function ln(t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function (t) {
            n[++e] = t;
          }),
          n
        );
      }
      function fn(t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function (t) {
            n[++e] = [t, t];
          }),
          n
        );
      }
      function pn(t) {
        return an(t)
          ? (function (t) {
              var e = (Xt.lastIndex = 0);
              for (; Xt.test(t); ) ++e;
              return e;
            })(t)
          : Ne(t);
      }
      function hn(t) {
        return an(t)
          ? (function (t) {
              return t.match(Xt) || [];
            })(t)
          : (function (t) {
              return t.split("");
            })(t);
      }
      function dn(t) {
        for (var e = t.length; e-- && at.test(t.charAt(e)); );
        return e;
      }
      var gn = He({
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
      });
      var vn = (function t(e) {
        var n,
          at = (e =
            null == e ? pe : vn.defaults(pe.Object(), e, vn.pick(pe, re)))
            .Array,
          Ot = e.Date,
          At = e.Error,
          Ct = e.Function,
          St = e.Math,
          jt = e.Object,
          kt = e.RegExp,
          Tt = e.String,
          Et = e.TypeError,
          It = at.prototype,
          Lt = Ct.prototype,
          Ft = jt.prototype,
          Rt = e["__core-js_shared__"],
          Mt = Lt.toString,
          zt = Ft.hasOwnProperty,
          Nt = 0,
          Dt = (n = /[^.]+$/.exec((Rt && Rt.keys && Rt.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + n
            : "",
          Ut = Ft.toString,
          Pt = Mt.call(jt),
          $t = pe._,
          Bt = kt(
            "^" +
              Mt.call(zt)
                .replace(rt, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?",
                ) +
              "$",
          ),
          Wt = ge ? e.Buffer : r,
          qt = e.Symbol,
          Ht = e.Uint8Array,
          Gt = Wt ? Wt.allocUnsafe : r,
          Zt = cn(jt.getPrototypeOf, jt),
          Jt = jt.create,
          Vt = Ft.propertyIsEnumerable,
          Kt = It.splice,
          Xt = qt ? qt.isConcatSpreadable : r,
          ee = qt ? qt.iterator : r,
          ue = qt ? qt.toStringTag : r,
          le = (function () {
            try {
              var t = di(jt, "defineProperty");
              return t({}, "", {}), t;
            } catch (t) {}
          })(),
          fe = e.clearTimeout !== pe.clearTimeout && e.clearTimeout,
          he = Ot && Ot.now !== pe.Date.now && Ot.now,
          de = e.setTimeout !== pe.setTimeout && e.setTimeout,
          ve = St.ceil,
          ye = St.floor,
          Ne = jt.getOwnPropertySymbols,
          He = Wt ? Wt.isBuffer : r,
          yn = e.isFinite,
          mn = It.join,
          _n = cn(jt.keys, jt),
          bn = St.max,
          wn = St.min,
          xn = Ot.now,
          On = e.parseInt,
          An = St.random,
          Cn = It.reverse,
          Sn = di(e, "DataView"),
          jn = di(e, "Map"),
          kn = di(e, "Promise"),
          Tn = di(e, "Set"),
          En = di(e, "WeakMap"),
          In = di(jt, "create"),
          Ln = En && new En(),
          Fn = {},
          Rn = qi(Sn),
          Mn = qi(jn),
          zn = qi(kn),
          Nn = qi(Tn),
          Dn = qi(En),
          Un = qt ? qt.prototype : r,
          Pn = Un ? Un.valueOf : r,
          $n = Un ? Un.toString : r;
        function Bn(t) {
          if (uu(t) && !Ka(t) && !(t instanceof Gn)) {
            if (t instanceof Hn) return t;
            if (zt.call(t, "__wrapped__")) return Hi(t);
          }
          return new Hn(t);
        }
        var Wn = (function () {
          function t() {}
          return function (e) {
            if (!au(e)) return {};
            if (Jt) return Jt(e);
            t.prototype = e;
            var n = new t();
            return (t.prototype = r), n;
          };
        })();
        function qn() {}
        function Hn(t, e) {
          (this.__wrapped__ = t),
            (this.__actions__ = []),
            (this.__chain__ = !!e),
            (this.__index__ = 0),
            (this.__values__ = r);
        }
        function Gn(t) {
          (this.__wrapped__ = t),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = g),
            (this.__views__ = []);
        }
        function Zn(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function Jn(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function Vn(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function Kn(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.__data__ = new Vn(); ++e < n; ) this.add(t[e]);
        }
        function Yn(t) {
          var e = (this.__data__ = new Jn(t));
          this.size = e.size;
        }
        function Qn(t, e) {
          var n = Ka(t),
            r = !n && Va(t),
            o = !n && !r && tu(t),
            i = !n && !r && !o && gu(t),
            a = n || r || o || i,
            u = a ? Je(t.length, Tt) : [],
            c = u.length;
          for (var s in t)
            (!e && !zt.call(t, s)) ||
              (a &&
                ("length" == s ||
                  (o && ("offset" == s || "parent" == s)) ||
                  (i &&
                    ("buffer" == s ||
                      "byteLength" == s ||
                      "byteOffset" == s)) ||
                  wi(s, c))) ||
              u.push(s);
          return u;
        }
        function Xn(t) {
          var e = t.length;
          return e ? t[Kr(0, e - 1)] : r;
        }
        function tr(t, e) {
          return Di(Lo(t), sr(e, 0, t.length));
        }
        function er(t) {
          return Di(Lo(t));
        }
        function nr(t, e, n) {
          ((n !== r && !Ga(t[e], n)) || (n === r && !(e in t))) && ur(t, e, n);
        }
        function rr(t, e, n) {
          var o = t[e];
          (zt.call(t, e) && Ga(o, n) && (n !== r || e in t)) || ur(t, e, n);
        }
        function or(t, e) {
          for (var n = t.length; n--; ) if (Ga(t[n][0], e)) return n;
          return -1;
        }
        function ir(t, e, n, r) {
          return (
            dr(t, function (t, o, i) {
              e(r, t, n(t), i);
            }),
            r
          );
        }
        function ar(t, e) {
          return t && Fo(e, Nu(e), t);
        }
        function ur(t, e, n) {
          "__proto__" == e && le
            ? le(t, e, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0,
              })
            : (t[e] = n);
        }
        function cr(t, e) {
          for (var n = -1, o = e.length, i = at(o), a = null == t; ++n < o; )
            i[n] = a ? r : Lu(t, e[n]);
          return i;
        }
        function sr(t, e, n) {
          return (
            t == t &&
              (n !== r && (t = t <= n ? t : n),
              e !== r && (t = t >= e ? t : e)),
            t
          );
        }
        function lr(t, e, n, o, i, a) {
          var u,
            c = 1 & e,
            s = 2 & e,
            l = 4 & e;
          if ((n && (u = i ? n(t, o, i, a) : n(t)), u !== r)) return u;
          if (!au(t)) return t;
          var f = Ka(t);
          if (f) {
            if (
              ((u = (function (t) {
                var e = t.length,
                  n = new t.constructor(e);
                e &&
                  "string" == typeof t[0] &&
                  zt.call(t, "index") &&
                  ((n.index = t.index), (n.input = t.input));
                return n;
              })(t)),
              !c)
            )
              return Lo(t, u);
          } else {
            var p = yi(t),
              h = p == x || p == O;
            if (tu(t)) return So(t, c);
            if (p == S || p == y || (h && !i)) {
              if (((u = s || h ? {} : _i(t)), !c))
                return s
                  ? (function (t, e) {
                      return Fo(t, vi(t), e);
                    })(
                      t,
                      (function (t, e) {
                        return t && Fo(e, Du(e), t);
                      })(u, t),
                    )
                  : (function (t, e) {
                      return Fo(t, gi(t), e);
                    })(t, ar(u, t));
            } else {
              if (!ae[p]) return i ? t : {};
              u = (function (t, e, n) {
                var r = t.constructor;
                switch (e) {
                  case F:
                    return jo(t);
                  case _:
                  case b:
                    return new r(+t);
                  case R:
                    return (function (t, e) {
                      var n = e ? jo(t.buffer) : t.buffer;
                      return new t.constructor(n, t.byteOffset, t.byteLength);
                    })(t, n);
                  case M:
                  case z:
                  case N:
                  case D:
                  case U:
                  case P:
                  case $:
                  case B:
                  case W:
                    return ko(t, n);
                  case A:
                    return new r();
                  case C:
                  case E:
                    return new r(t);
                  case k:
                    return (function (t) {
                      var e = new t.constructor(t.source, dt.exec(t));
                      return (e.lastIndex = t.lastIndex), e;
                    })(t);
                  case T:
                    return new r();
                  case I:
                    return (o = t), Pn ? jt(Pn.call(o)) : {};
                }
                var o;
              })(t, p, c);
            }
          }
          a || (a = new Yn());
          var d = a.get(t);
          if (d) return d;
          a.set(t, u),
            pu(t)
              ? t.forEach(function (r) {
                  u.add(lr(r, e, n, r, t, a));
                })
              : cu(t) &&
                t.forEach(function (r, o) {
                  u.set(o, lr(r, e, n, o, t, a));
                });
          var g = f ? r : (l ? (s ? ui : ai) : s ? Du : Nu)(t);
          return (
            Se(g || t, function (r, o) {
              g && (r = t[(o = r)]), rr(u, o, lr(r, e, n, o, t, a));
            }),
            u
          );
        }
        function fr(t, e, n) {
          var o = n.length;
          if (null == t) return !o;
          for (t = jt(t); o--; ) {
            var i = n[o],
              a = e[i],
              u = t[i];
            if ((u === r && !(i in t)) || !a(u)) return !1;
          }
          return !0;
        }
        function pr(t, e, n) {
          if ("function" != typeof t) throw new Et(o);
          return Ri(function () {
            t.apply(r, n);
          }, e);
        }
        function hr(t, e, n, r) {
          var o = -1,
            i = Ee,
            a = !0,
            u = t.length,
            c = [],
            s = e.length;
          if (!u) return c;
          n && (e = Le(e, Ke(n))),
            r
              ? ((i = Ie), (a = !1))
              : e.length >= 200 && ((i = Qe), (a = !1), (e = new Kn(e)));
          t: for (; ++o < u; ) {
            var l = t[o],
              f = null == n ? l : n(l);
            if (((l = r || 0 !== l ? l : 0), a && f == f)) {
              for (var p = s; p--; ) if (e[p] === f) continue t;
              c.push(l);
            } else i(e, f, r) || c.push(l);
          }
          return c;
        }
        (Bn.templateSettings = {
          escape: Y,
          evaluate: Q,
          interpolate: X,
          variable: "",
          imports: { _: Bn },
        }),
          (Bn.prototype = qn.prototype),
          (Bn.prototype.constructor = Bn),
          (Hn.prototype = Wn(qn.prototype)),
          (Hn.prototype.constructor = Hn),
          (Gn.prototype = Wn(qn.prototype)),
          (Gn.prototype.constructor = Gn),
          (Zn.prototype.clear = function () {
            (this.__data__ = In ? In(null) : {}), (this.size = 0);
          }),
          (Zn.prototype.delete = function (t) {
            var e = this.has(t) && delete this.__data__[t];
            return (this.size -= e ? 1 : 0), e;
          }),
          (Zn.prototype.get = function (t) {
            var e = this.__data__;
            if (In) {
              var n = e[t];
              return n === i ? r : n;
            }
            return zt.call(e, t) ? e[t] : r;
          }),
          (Zn.prototype.has = function (t) {
            var e = this.__data__;
            return In ? e[t] !== r : zt.call(e, t);
          }),
          (Zn.prototype.set = function (t, e) {
            var n = this.__data__;
            return (
              (this.size += this.has(t) ? 0 : 1),
              (n[t] = In && e === r ? i : e),
              this
            );
          }),
          (Jn.prototype.clear = function () {
            (this.__data__ = []), (this.size = 0);
          }),
          (Jn.prototype.delete = function (t) {
            var e = this.__data__,
              n = or(e, t);
            return (
              !(n < 0) &&
              (n == e.length - 1 ? e.pop() : Kt.call(e, n, 1), --this.size, !0)
            );
          }),
          (Jn.prototype.get = function (t) {
            var e = this.__data__,
              n = or(e, t);
            return n < 0 ? r : e[n][1];
          }),
          (Jn.prototype.has = function (t) {
            return or(this.__data__, t) > -1;
          }),
          (Jn.prototype.set = function (t, e) {
            var n = this.__data__,
              r = or(n, t);
            return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
          }),
          (Vn.prototype.clear = function () {
            (this.size = 0),
              (this.__data__ = {
                hash: new Zn(),
                map: new (jn || Jn)(),
                string: new Zn(),
              });
          }),
          (Vn.prototype.delete = function (t) {
            var e = pi(this, t).delete(t);
            return (this.size -= e ? 1 : 0), e;
          }),
          (Vn.prototype.get = function (t) {
            return pi(this, t).get(t);
          }),
          (Vn.prototype.has = function (t) {
            return pi(this, t).has(t);
          }),
          (Vn.prototype.set = function (t, e) {
            var n = pi(this, t),
              r = n.size;
            return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
          }),
          (Kn.prototype.add = Kn.prototype.push =
            function (t) {
              return this.__data__.set(t, i), this;
            }),
          (Kn.prototype.has = function (t) {
            return this.__data__.has(t);
          }),
          (Yn.prototype.clear = function () {
            (this.__data__ = new Jn()), (this.size = 0);
          }),
          (Yn.prototype.delete = function (t) {
            var e = this.__data__,
              n = e.delete(t);
            return (this.size = e.size), n;
          }),
          (Yn.prototype.get = function (t) {
            return this.__data__.get(t);
          }),
          (Yn.prototype.has = function (t) {
            return this.__data__.has(t);
          }),
          (Yn.prototype.set = function (t, e) {
            var n = this.__data__;
            if (n instanceof Jn) {
              var r = n.__data__;
              if (!jn || r.length < 199)
                return r.push([t, e]), (this.size = ++n.size), this;
              n = this.__data__ = new Vn(r);
            }
            return n.set(t, e), (this.size = n.size), this;
          });
        var dr = zo(xr),
          gr = zo(Or, !0);
        function vr(t, e) {
          var n = !0;
          return (
            dr(t, function (t, r, o) {
              return (n = !!e(t, r, o));
            }),
            n
          );
        }
        function yr(t, e, n) {
          for (var o = -1, i = t.length; ++o < i; ) {
            var a = t[o],
              u = e(a);
            if (null != u && (c === r ? u == u && !du(u) : n(u, c)))
              var c = u,
                s = a;
          }
          return s;
        }
        function mr(t, e) {
          var n = [];
          return (
            dr(t, function (t, r, o) {
              e(t, r, o) && n.push(t);
            }),
            n
          );
        }
        function _r(t, e, n, r, o) {
          var i = -1,
            a = t.length;
          for (n || (n = bi), o || (o = []); ++i < a; ) {
            var u = t[i];
            e > 0 && n(u)
              ? e > 1
                ? _r(u, e - 1, n, r, o)
                : Fe(o, u)
              : r || (o[o.length] = u);
          }
          return o;
        }
        var br = No(),
          wr = No(!0);
        function xr(t, e) {
          return t && br(t, e, Nu);
        }
        function Or(t, e) {
          return t && wr(t, e, Nu);
        }
        function Ar(t, e) {
          return Te(e, function (e) {
            return ru(t[e]);
          });
        }
        function Cr(t, e) {
          for (var n = 0, o = (e = xo(e, t)).length; null != t && n < o; )
            t = t[Wi(e[n++])];
          return n && n == o ? t : r;
        }
        function Sr(t, e, n) {
          var r = e(t);
          return Ka(t) ? r : Fe(r, n(t));
        }
        function jr(t) {
          return null == t
            ? t === r
              ? "[object Undefined]"
              : "[object Null]"
            : ue && ue in jt(t)
            ? (function (t) {
                var e = zt.call(t, ue),
                  n = t[ue];
                try {
                  t[ue] = r;
                  var o = !0;
                } catch (t) {}
                var i = Ut.call(t);
                o && (e ? (t[ue] = n) : delete t[ue]);
                return i;
              })(t)
            : (function (t) {
                return Ut.call(t);
              })(t);
        }
        function kr(t, e) {
          return t > e;
        }
        function Tr(t, e) {
          return null != t && zt.call(t, e);
        }
        function Er(t, e) {
          return null != t && e in jt(t);
        }
        function Ir(t, e, n) {
          for (
            var o = n ? Ie : Ee,
              i = t[0].length,
              a = t.length,
              u = a,
              c = at(a),
              s = 1 / 0,
              l = [];
            u--;

          ) {
            var f = t[u];
            u && e && (f = Le(f, Ke(e))),
              (s = wn(f.length, s)),
              (c[u] =
                !n && (e || (i >= 120 && f.length >= 120))
                  ? new Kn(u && f)
                  : r);
          }
          f = t[0];
          var p = -1,
            h = c[0];
          t: for (; ++p < i && l.length < s; ) {
            var d = f[p],
              g = e ? e(d) : d;
            if (((d = n || 0 !== d ? d : 0), !(h ? Qe(h, g) : o(l, g, n)))) {
              for (u = a; --u; ) {
                var v = c[u];
                if (!(v ? Qe(v, g) : o(t[u], g, n))) continue t;
              }
              h && h.push(g), l.push(d);
            }
          }
          return l;
        }
        function Lr(t, e, n) {
          var o = null == (t = Ei(t, (e = xo(e, t)))) ? t : t[Wi(na(e))];
          return null == o ? r : Ae(o, t, n);
        }
        function Fr(t) {
          return uu(t) && jr(t) == y;
        }
        function Rr(t, e, n, o, i) {
          return (
            t === e ||
            (null == t || null == e || (!uu(t) && !uu(e))
              ? t != t && e != e
              : (function (t, e, n, o, i, a) {
                  var u = Ka(t),
                    c = Ka(e),
                    s = u ? m : yi(t),
                    l = c ? m : yi(e),
                    f = (s = s == y ? S : s) == S,
                    p = (l = l == y ? S : l) == S,
                    h = s == l;
                  if (h && tu(t)) {
                    if (!tu(e)) return !1;
                    (u = !0), (f = !1);
                  }
                  if (h && !f)
                    return (
                      a || (a = new Yn()),
                      u || gu(t)
                        ? oi(t, e, n, o, i, a)
                        : (function (t, e, n, r, o, i, a) {
                            switch (n) {
                              case R:
                                if (
                                  t.byteLength != e.byteLength ||
                                  t.byteOffset != e.byteOffset
                                )
                                  return !1;
                                (t = t.buffer), (e = e.buffer);
                              case F:
                                return !(
                                  t.byteLength != e.byteLength ||
                                  !i(new Ht(t), new Ht(e))
                                );
                              case _:
                              case b:
                              case C:
                                return Ga(+t, +e);
                              case w:
                                return (
                                  t.name == e.name && t.message == e.message
                                );
                              case k:
                              case E:
                                return t == e + "";
                              case A:
                                var u = un;
                              case T:
                                var c = 1 & r;
                                if ((u || (u = ln), t.size != e.size && !c))
                                  return !1;
                                var s = a.get(t);
                                if (s) return s == e;
                                (r |= 2), a.set(t, e);
                                var l = oi(u(t), u(e), r, o, i, a);
                                return a.delete(t), l;
                              case I:
                                if (Pn) return Pn.call(t) == Pn.call(e);
                            }
                            return !1;
                          })(t, e, s, n, o, i, a)
                    );
                  if (!(1 & n)) {
                    var d = f && zt.call(t, "__wrapped__"),
                      g = p && zt.call(e, "__wrapped__");
                    if (d || g) {
                      var v = d ? t.value() : t,
                        x = g ? e.value() : e;
                      return a || (a = new Yn()), i(v, x, n, o, a);
                    }
                  }
                  return (
                    !!h &&
                    (a || (a = new Yn()),
                    (function (t, e, n, o, i, a) {
                      var u = 1 & n,
                        c = ai(t),
                        s = c.length,
                        l = ai(e).length;
                      if (s != l && !u) return !1;
                      var f = s;
                      for (; f--; ) {
                        var p = c[f];
                        if (!(u ? p in e : zt.call(e, p))) return !1;
                      }
                      var h = a.get(t),
                        d = a.get(e);
                      if (h && d) return h == e && d == t;
                      var g = !0;
                      a.set(t, e), a.set(e, t);
                      var v = u;
                      for (; ++f < s; ) {
                        var y = t[(p = c[f])],
                          m = e[p];
                        if (o)
                          var _ = u ? o(m, y, p, e, t, a) : o(y, m, p, t, e, a);
                        if (!(_ === r ? y === m || i(y, m, n, o, a) : _)) {
                          g = !1;
                          break;
                        }
                        v || (v = "constructor" == p);
                      }
                      if (g && !v) {
                        var b = t.constructor,
                          w = e.constructor;
                        b == w ||
                          !("constructor" in t) ||
                          !("constructor" in e) ||
                          ("function" == typeof b &&
                            b instanceof b &&
                            "function" == typeof w &&
                            w instanceof w) ||
                          (g = !1);
                      }
                      return a.delete(t), a.delete(e), g;
                    })(t, e, n, o, i, a))
                  );
                })(t, e, n, o, Rr, i))
          );
        }
        function Mr(t, e, n, o) {
          var i = n.length,
            a = i,
            u = !o;
          if (null == t) return !a;
          for (t = jt(t); i--; ) {
            var c = n[i];
            if (u && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1;
          }
          for (; ++i < a; ) {
            var s = (c = n[i])[0],
              l = t[s],
              f = c[1];
            if (u && c[2]) {
              if (l === r && !(s in t)) return !1;
            } else {
              var p = new Yn();
              if (o) var h = o(l, f, s, t, e, p);
              if (!(h === r ? Rr(f, l, 3, o, p) : h)) return !1;
            }
          }
          return !0;
        }
        function zr(t) {
          return (
            !(!au(t) || ((e = t), Dt && Dt in e)) &&
            (ru(t) ? Bt : yt).test(qi(t))
          );
          var e;
        }
        function Nr(t) {
          return "function" == typeof t
            ? t
            : null == t
            ? sc
            : "object" == typeof t
            ? Ka(t)
              ? Wr(t[0], t[1])
              : Br(t)
            : mc(t);
        }
        function Dr(t) {
          if (!Si(t)) return _n(t);
          var e = [];
          for (var n in jt(t)) zt.call(t, n) && "constructor" != n && e.push(n);
          return e;
        }
        function Ur(t) {
          if (!au(t))
            return (function (t) {
              var e = [];
              if (null != t) for (var n in jt(t)) e.push(n);
              return e;
            })(t);
          var e = Si(t),
            n = [];
          for (var r in t)
            ("constructor" != r || (!e && zt.call(t, r))) && n.push(r);
          return n;
        }
        function Pr(t, e) {
          return t < e;
        }
        function $r(t, e) {
          var n = -1,
            r = Qa(t) ? at(t.length) : [];
          return (
            dr(t, function (t, o, i) {
              r[++n] = e(t, o, i);
            }),
            r
          );
        }
        function Br(t) {
          var e = hi(t);
          return 1 == e.length && e[0][2]
            ? ki(e[0][0], e[0][1])
            : function (n) {
                return n === t || Mr(n, t, e);
              };
        }
        function Wr(t, e) {
          return Oi(t) && ji(e)
            ? ki(Wi(t), e)
            : function (n) {
                var o = Lu(n, t);
                return o === r && o === e ? Fu(n, t) : Rr(e, o, 3);
              };
        }
        function qr(t, e, n, o, i) {
          t !== e &&
            br(
              e,
              function (a, u) {
                if ((i || (i = new Yn()), au(a)))
                  !(function (t, e, n, o, i, a, u) {
                    var c = Li(t, n),
                      s = Li(e, n),
                      l = u.get(s);
                    if (l) return void nr(t, n, l);
                    var f = a ? a(c, s, n + "", t, e, u) : r,
                      p = f === r;
                    if (p) {
                      var h = Ka(s),
                        d = !h && tu(s),
                        g = !h && !d && gu(s);
                      (f = s),
                        h || d || g
                          ? Ka(c)
                            ? (f = c)
                            : Xa(c)
                            ? (f = Lo(c))
                            : d
                            ? ((p = !1), (f = So(s, !0)))
                            : g
                            ? ((p = !1), (f = ko(s, !0)))
                            : (f = [])
                          : lu(s) || Va(s)
                          ? ((f = c),
                            Va(c)
                              ? (f = Ou(c))
                              : (au(c) && !ru(c)) || (f = _i(s)))
                          : (p = !1);
                    }
                    p && (u.set(s, f), i(f, s, o, a, u), u.delete(s));
                    nr(t, n, f);
                  })(t, e, u, n, qr, o, i);
                else {
                  var c = o ? o(Li(t, u), a, u + "", t, e, i) : r;
                  c === r && (c = a), nr(t, u, c);
                }
              },
              Du,
            );
        }
        function Hr(t, e) {
          var n = t.length;
          if (n) return wi((e += e < 0 ? n : 0), n) ? t[e] : r;
        }
        function Gr(t, e, n) {
          e = e.length
            ? Le(e, function (t) {
                return Ka(t)
                  ? function (e) {
                      return Cr(e, 1 === t.length ? t[0] : t);
                    }
                  : t;
              })
            : [sc];
          var r = -1;
          return (
            (e = Le(e, Ke(fi()))),
            (function (t, e) {
              var n = t.length;
              for (t.sort(e); n--; ) t[n] = t[n].value;
              return t;
            })(
              $r(t, function (t, n, o) {
                return {
                  criteria: Le(e, function (e) {
                    return e(t);
                  }),
                  index: ++r,
                  value: t,
                };
              }),
              function (t, e) {
                return (function (t, e, n) {
                  var r = -1,
                    o = t.criteria,
                    i = e.criteria,
                    a = o.length,
                    u = n.length;
                  for (; ++r < a; ) {
                    var c = To(o[r], i[r]);
                    if (c) return r >= u ? c : c * ("desc" == n[r] ? -1 : 1);
                  }
                  return t.index - e.index;
                })(t, e, n);
              },
            )
          );
        }
        function Zr(t, e, n) {
          for (var r = -1, o = e.length, i = {}; ++r < o; ) {
            var a = e[r],
              u = Cr(t, a);
            n(u, a) && eo(i, xo(a, t), u);
          }
          return i;
        }
        function Jr(t, e, n, r) {
          var o = r ? $e : Pe,
            i = -1,
            a = e.length,
            u = t;
          for (t === e && (e = Lo(e)), n && (u = Le(t, Ke(n))); ++i < a; )
            for (
              var c = 0, s = e[i], l = n ? n(s) : s;
              (c = o(u, l, c, r)) > -1;

            )
              u !== t && Kt.call(u, c, 1), Kt.call(t, c, 1);
          return t;
        }
        function Vr(t, e) {
          for (var n = t ? e.length : 0, r = n - 1; n--; ) {
            var o = e[n];
            if (n == r || o !== i) {
              var i = o;
              wi(o) ? Kt.call(t, o, 1) : ho(t, o);
            }
          }
          return t;
        }
        function Kr(t, e) {
          return t + ye(An() * (e - t + 1));
        }
        function Yr(t, e) {
          var n = "";
          if (!t || e < 1 || e > h) return n;
          do {
            e % 2 && (n += t), (e = ye(e / 2)) && (t += t);
          } while (e);
          return n;
        }
        function Qr(t, e) {
          return Mi(Ti(t, e, sc), t + "");
        }
        function Xr(t) {
          return Xn(Gu(t));
        }
        function to(t, e) {
          var n = Gu(t);
          return Di(n, sr(e, 0, n.length));
        }
        function eo(t, e, n, o) {
          if (!au(t)) return t;
          for (
            var i = -1, a = (e = xo(e, t)).length, u = a - 1, c = t;
            null != c && ++i < a;

          ) {
            var s = Wi(e[i]),
              l = n;
            if ("__proto__" === s || "constructor" === s || "prototype" === s)
              return t;
            if (i != u) {
              var f = c[s];
              (l = o ? o(f, s, c) : r) === r &&
                (l = au(f) ? f : wi(e[i + 1]) ? [] : {});
            }
            rr(c, s, l), (c = c[s]);
          }
          return t;
        }
        var no = Ln
            ? function (t, e) {
                return Ln.set(t, e), t;
              }
            : sc,
          ro = le
            ? function (t, e) {
                return le(t, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: ac(e),
                  writable: !0,
                });
              }
            : sc;
        function oo(t) {
          return Di(Gu(t));
        }
        function io(t, e, n) {
          var r = -1,
            o = t.length;
          e < 0 && (e = -e > o ? 0 : o + e),
            (n = n > o ? o : n) < 0 && (n += o),
            (o = e > n ? 0 : (n - e) >>> 0),
            (e >>>= 0);
          for (var i = at(o); ++r < o; ) i[r] = t[r + e];
          return i;
        }
        function ao(t, e) {
          var n;
          return (
            dr(t, function (t, r, o) {
              return !(n = e(t, r, o));
            }),
            !!n
          );
        }
        function uo(t, e, n) {
          var r = 0,
            o = null == t ? r : t.length;
          if ("number" == typeof e && e == e && o <= 2147483647) {
            for (; r < o; ) {
              var i = (r + o) >>> 1,
                a = t[i];
              null !== a && !du(a) && (n ? a <= e : a < e)
                ? (r = i + 1)
                : (o = i);
            }
            return o;
          }
          return co(t, e, sc, n);
        }
        function co(t, e, n, o) {
          var i = 0,
            a = null == t ? 0 : t.length;
          if (0 === a) return 0;
          for (
            var u = (e = n(e)) != e, c = null === e, s = du(e), l = e === r;
            i < a;

          ) {
            var f = ye((i + a) / 2),
              p = n(t[f]),
              h = p !== r,
              d = null === p,
              g = p == p,
              v = du(p);
            if (u) var y = o || g;
            else
              y = l
                ? g && (o || h)
                : c
                ? g && h && (o || !d)
                : s
                ? g && h && !d && (o || !v)
                : !d && !v && (o ? p <= e : p < e);
            y ? (i = f + 1) : (a = f);
          }
          return wn(a, 4294967294);
        }
        function so(t, e) {
          for (var n = -1, r = t.length, o = 0, i = []; ++n < r; ) {
            var a = t[n],
              u = e ? e(a) : a;
            if (!n || !Ga(u, c)) {
              var c = u;
              i[o++] = 0 === a ? 0 : a;
            }
          }
          return i;
        }
        function lo(t) {
          return "number" == typeof t ? t : du(t) ? d : +t;
        }
        function fo(t) {
          if ("string" == typeof t) return t;
          if (Ka(t)) return Le(t, fo) + "";
          if (du(t)) return $n ? $n.call(t) : "";
          var e = t + "";
          return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
        }
        function po(t, e, n) {
          var r = -1,
            o = Ee,
            i = t.length,
            a = !0,
            u = [],
            c = u;
          if (n) (a = !1), (o = Ie);
          else if (i >= 200) {
            var s = e ? null : Qo(t);
            if (s) return ln(s);
            (a = !1), (o = Qe), (c = new Kn());
          } else c = e ? [] : u;
          t: for (; ++r < i; ) {
            var l = t[r],
              f = e ? e(l) : l;
            if (((l = n || 0 !== l ? l : 0), a && f == f)) {
              for (var p = c.length; p--; ) if (c[p] === f) continue t;
              e && c.push(f), u.push(l);
            } else o(c, f, n) || (c !== u && c.push(f), u.push(l));
          }
          return u;
        }
        function ho(t, e) {
          return null == (t = Ei(t, (e = xo(e, t)))) || delete t[Wi(na(e))];
        }
        function go(t, e, n, r) {
          return eo(t, e, n(Cr(t, e)), r);
        }
        function vo(t, e, n, r) {
          for (
            var o = t.length, i = r ? o : -1;
            (r ? i-- : ++i < o) && e(t[i], i, t);

          );
          return n
            ? io(t, r ? 0 : i, r ? i + 1 : o)
            : io(t, r ? i + 1 : 0, r ? o : i);
        }
        function yo(t, e) {
          var n = t;
          return (
            n instanceof Gn && (n = n.value()),
            Re(
              e,
              function (t, e) {
                return e.func.apply(e.thisArg, Fe([t], e.args));
              },
              n,
            )
          );
        }
        function mo(t, e, n) {
          var r = t.length;
          if (r < 2) return r ? po(t[0]) : [];
          for (var o = -1, i = at(r); ++o < r; )
            for (var a = t[o], u = -1; ++u < r; )
              u != o && (i[o] = hr(i[o] || a, t[u], e, n));
          return po(_r(i, 1), e, n);
        }
        function _o(t, e, n) {
          for (var o = -1, i = t.length, a = e.length, u = {}; ++o < i; ) {
            var c = o < a ? e[o] : r;
            n(u, t[o], c);
          }
          return u;
        }
        function bo(t) {
          return Xa(t) ? t : [];
        }
        function wo(t) {
          return "function" == typeof t ? t : sc;
        }
        function xo(t, e) {
          return Ka(t) ? t : Oi(t, e) ? [t] : Bi(Au(t));
        }
        var Oo = Qr;
        function Ao(t, e, n) {
          var o = t.length;
          return (n = n === r ? o : n), !e && n >= o ? t : io(t, e, n);
        }
        var Co =
          fe ||
          function (t) {
            return pe.clearTimeout(t);
          };
        function So(t, e) {
          if (e) return t.slice();
          var n = t.length,
            r = Gt ? Gt(n) : new t.constructor(n);
          return t.copy(r), r;
        }
        function jo(t) {
          var e = new t.constructor(t.byteLength);
          return new Ht(e).set(new Ht(t)), e;
        }
        function ko(t, e) {
          var n = e ? jo(t.buffer) : t.buffer;
          return new t.constructor(n, t.byteOffset, t.length);
        }
        function To(t, e) {
          if (t !== e) {
            var n = t !== r,
              o = null === t,
              i = t == t,
              a = du(t),
              u = e !== r,
              c = null === e,
              s = e == e,
              l = du(e);
            if (
              (!c && !l && !a && t > e) ||
              (a && u && s && !c && !l) ||
              (o && u && s) ||
              (!n && s) ||
              !i
            )
              return 1;
            if (
              (!o && !a && !l && t < e) ||
              (l && n && i && !o && !a) ||
              (c && n && i) ||
              (!u && i) ||
              !s
            )
              return -1;
          }
          return 0;
        }
        function Eo(t, e, n, r) {
          for (
            var o = -1,
              i = t.length,
              a = n.length,
              u = -1,
              c = e.length,
              s = bn(i - a, 0),
              l = at(c + s),
              f = !r;
            ++u < c;

          )
            l[u] = e[u];
          for (; ++o < a; ) (f || o < i) && (l[n[o]] = t[o]);
          for (; s--; ) l[u++] = t[o++];
          return l;
        }
        function Io(t, e, n, r) {
          for (
            var o = -1,
              i = t.length,
              a = -1,
              u = n.length,
              c = -1,
              s = e.length,
              l = bn(i - u, 0),
              f = at(l + s),
              p = !r;
            ++o < l;

          )
            f[o] = t[o];
          for (var h = o; ++c < s; ) f[h + c] = e[c];
          for (; ++a < u; ) (p || o < i) && (f[h + n[a]] = t[o++]);
          return f;
        }
        function Lo(t, e) {
          var n = -1,
            r = t.length;
          for (e || (e = at(r)); ++n < r; ) e[n] = t[n];
          return e;
        }
        function Fo(t, e, n, o) {
          var i = !n;
          n || (n = {});
          for (var a = -1, u = e.length; ++a < u; ) {
            var c = e[a],
              s = o ? o(n[c], t[c], c, n, t) : r;
            s === r && (s = t[c]), i ? ur(n, c, s) : rr(n, c, s);
          }
          return n;
        }
        function Ro(t, e) {
          return function (n, r) {
            var o = Ka(n) ? Ce : ir,
              i = e ? e() : {};
            return o(n, t, fi(r, 2), i);
          };
        }
        function Mo(t) {
          return Qr(function (e, n) {
            var o = -1,
              i = n.length,
              a = i > 1 ? n[i - 1] : r,
              u = i > 2 ? n[2] : r;
            for (
              a = t.length > 3 && "function" == typeof a ? (i--, a) : r,
                u && xi(n[0], n[1], u) && ((a = i < 3 ? r : a), (i = 1)),
                e = jt(e);
              ++o < i;

            ) {
              var c = n[o];
              c && t(e, c, o, a);
            }
            return e;
          });
        }
        function zo(t, e) {
          return function (n, r) {
            if (null == n) return n;
            if (!Qa(n)) return t(n, r);
            for (
              var o = n.length, i = e ? o : -1, a = jt(n);
              (e ? i-- : ++i < o) && !1 !== r(a[i], i, a);

            );
            return n;
          };
        }
        function No(t) {
          return function (e, n, r) {
            for (var o = -1, i = jt(e), a = r(e), u = a.length; u--; ) {
              var c = a[t ? u : ++o];
              if (!1 === n(i[c], c, i)) break;
            }
            return e;
          };
        }
        function Do(t) {
          return function (e) {
            var n = an((e = Au(e))) ? hn(e) : r,
              o = n ? n[0] : e.charAt(0),
              i = n ? Ao(n, 1).join("") : e.slice(1);
            return o[t]() + i;
          };
        }
        function Uo(t) {
          return function (e) {
            return Re(rc(Vu(e).replace(Yt, "")), t, "");
          };
        }
        function Po(t) {
          return function () {
            var e = arguments;
            switch (e.length) {
              case 0:
                return new t();
              case 1:
                return new t(e[0]);
              case 2:
                return new t(e[0], e[1]);
              case 3:
                return new t(e[0], e[1], e[2]);
              case 4:
                return new t(e[0], e[1], e[2], e[3]);
              case 5:
                return new t(e[0], e[1], e[2], e[3], e[4]);
              case 6:
                return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
              case 7:
                return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
            }
            var n = Wn(t.prototype),
              r = t.apply(n, e);
            return au(r) ? r : n;
          };
        }
        function $o(t) {
          return function (e, n, o) {
            var i = jt(e);
            if (!Qa(e)) {
              var a = fi(n, 3);
              (e = Nu(e)),
                (n = function (t) {
                  return a(i[t], t, i);
                });
            }
            var u = t(e, n, o);
            return u > -1 ? i[a ? e[u] : u] : r;
          };
        }
        function Bo(t) {
          return ii(function (e) {
            var n = e.length,
              i = n,
              a = Hn.prototype.thru;
            for (t && e.reverse(); i--; ) {
              var u = e[i];
              if ("function" != typeof u) throw new Et(o);
              if (a && !c && "wrapper" == si(u)) var c = new Hn([], !0);
            }
            for (i = c ? i : n; ++i < n; ) {
              var s = si((u = e[i])),
                l = "wrapper" == s ? ci(u) : r;
              c =
                l && Ai(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9]
                  ? c[si(l[0])].apply(c, l[3])
                  : 1 == u.length && Ai(u)
                  ? c[s]()
                  : c.thru(u);
            }
            return function () {
              var t = arguments,
                r = t[0];
              if (c && 1 == t.length && Ka(r)) return c.plant(r).value();
              for (var o = 0, i = n ? e[o].apply(this, t) : r; ++o < n; )
                i = e[o].call(this, i);
              return i;
            };
          });
        }
        function Wo(t, e, n, o, i, a, u, c, s, f) {
          var p = e & l,
            h = 1 & e,
            d = 2 & e,
            g = 24 & e,
            v = 512 & e,
            y = d ? r : Po(t);
          return function r() {
            for (var l = arguments.length, m = at(l), _ = l; _--; )
              m[_] = arguments[_];
            if (g)
              var b = li(r),
                w = en(m, b);
            if (
              (o && (m = Eo(m, o, i, g)),
              a && (m = Io(m, a, u, g)),
              (l -= w),
              g && l < f)
            ) {
              var x = sn(m, b);
              return Ko(t, e, Wo, r.placeholder, n, m, x, c, s, f - l);
            }
            var O = h ? n : this,
              A = d ? O[t] : t;
            return (
              (l = m.length),
              c ? (m = Ii(m, c)) : v && l > 1 && m.reverse(),
              p && s < l && (m.length = s),
              this && this !== pe && this instanceof r && (A = y || Po(A)),
              A.apply(O, m)
            );
          };
        }
        function qo(t, e) {
          return function (n, r) {
            return (function (t, e, n, r) {
              return (
                xr(t, function (t, o, i) {
                  e(r, n(t), o, i);
                }),
                r
              );
            })(n, t, e(r), {});
          };
        }
        function Ho(t, e) {
          return function (n, o) {
            var i;
            if (n === r && o === r) return e;
            if ((n !== r && (i = n), o !== r)) {
              if (i === r) return o;
              "string" == typeof n || "string" == typeof o
                ? ((n = fo(n)), (o = fo(o)))
                : ((n = lo(n)), (o = lo(o))),
                (i = t(n, o));
            }
            return i;
          };
        }
        function Go(t) {
          return ii(function (e) {
            return (
              (e = Le(e, Ke(fi()))),
              Qr(function (n) {
                var r = this;
                return t(e, function (t) {
                  return Ae(t, r, n);
                });
              })
            );
          });
        }
        function Zo(t, e) {
          var n = (e = e === r ? " " : fo(e)).length;
          if (n < 2) return n ? Yr(e, t) : e;
          var o = Yr(e, ve(t / pn(e)));
          return an(e) ? Ao(hn(o), 0, t).join("") : o.slice(0, t);
        }
        function Jo(t) {
          return function (e, n, o) {
            return (
              o && "number" != typeof o && xi(e, n, o) && (n = o = r),
              (e = _u(e)),
              n === r ? ((n = e), (e = 0)) : (n = _u(n)),
              (function (t, e, n, r) {
                for (
                  var o = -1, i = bn(ve((e - t) / (n || 1)), 0), a = at(i);
                  i--;

                )
                  (a[r ? i : ++o] = t), (t += n);
                return a;
              })(e, n, (o = o === r ? (e < n ? 1 : -1) : _u(o)), t)
            );
          };
        }
        function Vo(t) {
          return function (e, n) {
            return (
              ("string" == typeof e && "string" == typeof n) ||
                ((e = xu(e)), (n = xu(n))),
              t(e, n)
            );
          };
        }
        function Ko(t, e, n, o, i, a, u, l, f, p) {
          var h = 8 & e;
          (e |= h ? c : s), 4 & (e &= ~(h ? s : c)) || (e &= -4);
          var d = [
              t,
              e,
              i,
              h ? a : r,
              h ? u : r,
              h ? r : a,
              h ? r : u,
              l,
              f,
              p,
            ],
            g = n.apply(r, d);
          return Ai(t) && Fi(g, d), (g.placeholder = o), zi(g, t, e);
        }
        function Yo(t) {
          var e = St[t];
          return function (t, n) {
            if (((t = xu(t)), (n = null == n ? 0 : wn(bu(n), 292)) && yn(t))) {
              var r = (Au(t) + "e").split("e");
              return +(
                (r = (Au(e(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] +
                "e" +
                (+r[1] - n)
              );
            }
            return e(t);
          };
        }
        var Qo =
          Tn && 1 / ln(new Tn([, -0]))[1] == p
            ? function (t) {
                return new Tn(t);
              }
            : dc;
        function Xo(t) {
          return function (e) {
            var n = yi(e);
            return n == A
              ? un(e)
              : n == T
              ? fn(e)
              : (function (t, e) {
                  return Le(e, function (e) {
                    return [e, t[e]];
                  });
                })(e, t(e));
          };
        }
        function ti(t, e, n, i, p, h, d, g) {
          var v = 2 & e;
          if (!v && "function" != typeof t) throw new Et(o);
          var y = i ? i.length : 0;
          if (
            (y || ((e &= -97), (i = p = r)),
            (d = d === r ? d : bn(bu(d), 0)),
            (g = g === r ? g : bu(g)),
            (y -= p ? p.length : 0),
            e & s)
          ) {
            var m = i,
              _ = p;
            i = p = r;
          }
          var b = v ? r : ci(t),
            w = [t, e, n, i, p, m, _, h, d, g];
          if (
            (b &&
              (function (t, e) {
                var n = t[1],
                  r = e[1],
                  o = n | r,
                  i = o < 131,
                  u =
                    (r == l && 8 == n) ||
                    (r == l && n == f && t[7].length <= e[8]) ||
                    (384 == r && e[7].length <= e[8] && 8 == n);
                if (!i && !u) return t;
                1 & r && ((t[2] = e[2]), (o |= 1 & n ? 0 : 4));
                var c = e[3];
                if (c) {
                  var s = t[3];
                  (t[3] = s ? Eo(s, c, e[4]) : c),
                    (t[4] = s ? sn(t[3], a) : e[4]);
                }
                (c = e[5]) &&
                  ((s = t[5]),
                  (t[5] = s ? Io(s, c, e[6]) : c),
                  (t[6] = s ? sn(t[5], a) : e[6]));
                (c = e[7]) && (t[7] = c);
                r & l && (t[8] = null == t[8] ? e[8] : wn(t[8], e[8]));
                null == t[9] && (t[9] = e[9]);
                (t[0] = e[0]), (t[1] = o);
              })(w, b),
            (t = w[0]),
            (e = w[1]),
            (n = w[2]),
            (i = w[3]),
            (p = w[4]),
            !(g = w[9] = w[9] === r ? (v ? 0 : t.length) : bn(w[9] - y, 0)) &&
              24 & e &&
              (e &= -25),
            e && 1 != e)
          )
            x =
              8 == e || e == u
                ? (function (t, e, n) {
                    var o = Po(t);
                    return function i() {
                      for (
                        var a = arguments.length, u = at(a), c = a, s = li(i);
                        c--;

                      )
                        u[c] = arguments[c];
                      var l =
                        a < 3 && u[0] !== s && u[a - 1] !== s ? [] : sn(u, s);
                      return (a -= l.length) < n
                        ? Ko(t, e, Wo, i.placeholder, r, u, l, r, r, n - a)
                        : Ae(
                            this && this !== pe && this instanceof i ? o : t,
                            this,
                            u,
                          );
                    };
                  })(t, e, g)
                : (e != c && 33 != e) || p.length
                ? Wo.apply(r, w)
                : (function (t, e, n, r) {
                    var o = 1 & e,
                      i = Po(t);
                    return function e() {
                      for (
                        var a = -1,
                          u = arguments.length,
                          c = -1,
                          s = r.length,
                          l = at(s + u),
                          f = this && this !== pe && this instanceof e ? i : t;
                        ++c < s;

                      )
                        l[c] = r[c];
                      for (; u--; ) l[c++] = arguments[++a];
                      return Ae(f, o ? n : this, l);
                    };
                  })(t, e, n, i);
          else
            var x = (function (t, e, n) {
              var r = 1 & e,
                o = Po(t);
              return function e() {
                return (this && this !== pe && this instanceof e ? o : t).apply(
                  r ? n : this,
                  arguments,
                );
              };
            })(t, e, n);
          return zi((b ? no : Fi)(x, w), t, e);
        }
        function ei(t, e, n, o) {
          return t === r || (Ga(t, Ft[n]) && !zt.call(o, n)) ? e : t;
        }
        function ni(t, e, n, o, i, a) {
          return (
            au(t) && au(e) && (a.set(e, t), qr(t, e, r, ni, a), a.delete(e)), t
          );
        }
        function ri(t) {
          return lu(t) ? r : t;
        }
        function oi(t, e, n, o, i, a) {
          var u = 1 & n,
            c = t.length,
            s = e.length;
          if (c != s && !(u && s > c)) return !1;
          var l = a.get(t),
            f = a.get(e);
          if (l && f) return l == e && f == t;
          var p = -1,
            h = !0,
            d = 2 & n ? new Kn() : r;
          for (a.set(t, e), a.set(e, t); ++p < c; ) {
            var g = t[p],
              v = e[p];
            if (o) var y = u ? o(v, g, p, e, t, a) : o(g, v, p, t, e, a);
            if (y !== r) {
              if (y) continue;
              h = !1;
              break;
            }
            if (d) {
              if (
                !ze(e, function (t, e) {
                  if (!Qe(d, e) && (g === t || i(g, t, n, o, a)))
                    return d.push(e);
                })
              ) {
                h = !1;
                break;
              }
            } else if (g !== v && !i(g, v, n, o, a)) {
              h = !1;
              break;
            }
          }
          return a.delete(t), a.delete(e), h;
        }
        function ii(t) {
          return Mi(Ti(t, r, Yi), t + "");
        }
        function ai(t) {
          return Sr(t, Nu, gi);
        }
        function ui(t) {
          return Sr(t, Du, vi);
        }
        var ci = Ln
          ? function (t) {
              return Ln.get(t);
            }
          : dc;
        function si(t) {
          for (
            var e = t.name + "", n = Fn[e], r = zt.call(Fn, e) ? n.length : 0;
            r--;

          ) {
            var o = n[r],
              i = o.func;
            if (null == i || i == t) return o.name;
          }
          return e;
        }
        function li(t) {
          return (zt.call(Bn, "placeholder") ? Bn : t).placeholder;
        }
        function fi() {
          var t = Bn.iteratee || lc;
          return (
            (t = t === lc ? Nr : t),
            arguments.length ? t(arguments[0], arguments[1]) : t
          );
        }
        function pi(t, e) {
          var n,
            r,
            o = t.__data__;
          return (
            "string" == (r = typeof (n = e)) ||
            "number" == r ||
            "symbol" == r ||
            "boolean" == r
              ? "__proto__" !== n
              : null === n
          )
            ? o["string" == typeof e ? "string" : "hash"]
            : o.map;
        }
        function hi(t) {
          for (var e = Nu(t), n = e.length; n--; ) {
            var r = e[n],
              o = t[r];
            e[n] = [r, o, ji(o)];
          }
          return e;
        }
        function di(t, e) {
          var n = (function (t, e) {
            return null == t ? r : t[e];
          })(t, e);
          return zr(n) ? n : r;
        }
        var gi = Ne
            ? function (t) {
                return null == t
                  ? []
                  : ((t = jt(t)),
                    Te(Ne(t), function (e) {
                      return Vt.call(t, e);
                    }));
              }
            : wc,
          vi = Ne
            ? function (t) {
                for (var e = []; t; ) Fe(e, gi(t)), (t = Zt(t));
                return e;
              }
            : wc,
          yi = jr;
        function mi(t, e, n) {
          for (var r = -1, o = (e = xo(e, t)).length, i = !1; ++r < o; ) {
            var a = Wi(e[r]);
            if (!(i = null != t && n(t, a))) break;
            t = t[a];
          }
          return i || ++r != o
            ? i
            : !!(o = null == t ? 0 : t.length) &&
                iu(o) &&
                wi(a, o) &&
                (Ka(t) || Va(t));
        }
        function _i(t) {
          return "function" != typeof t.constructor || Si(t) ? {} : Wn(Zt(t));
        }
        function bi(t) {
          return Ka(t) || Va(t) || !!(Xt && t && t[Xt]);
        }
        function wi(t, e) {
          var n = typeof t;
          return (
            !!(e = null == e ? h : e) &&
            ("number" == n || ("symbol" != n && _t.test(t))) &&
            t > -1 &&
            t % 1 == 0 &&
            t < e
          );
        }
        function xi(t, e, n) {
          if (!au(n)) return !1;
          var r = typeof e;
          return (
            !!("number" == r
              ? Qa(n) && wi(e, n.length)
              : "string" == r && e in n) && Ga(n[e], t)
          );
        }
        function Oi(t, e) {
          if (Ka(t)) return !1;
          var n = typeof t;
          return (
            !(
              "number" != n &&
              "symbol" != n &&
              "boolean" != n &&
              null != t &&
              !du(t)
            ) ||
            et.test(t) ||
            !tt.test(t) ||
            (null != e && t in jt(e))
          );
        }
        function Ai(t) {
          var e = si(t),
            n = Bn[e];
          if ("function" != typeof n || !(e in Gn.prototype)) return !1;
          if (t === n) return !0;
          var r = ci(n);
          return !!r && t === r[0];
        }
        ((Sn && yi(new Sn(new ArrayBuffer(1))) != R) ||
          (jn && yi(new jn()) != A) ||
          (kn && yi(kn.resolve()) != j) ||
          (Tn && yi(new Tn()) != T) ||
          (En && yi(new En()) != L)) &&
          (yi = function (t) {
            var e = jr(t),
              n = e == S ? t.constructor : r,
              o = n ? qi(n) : "";
            if (o)
              switch (o) {
                case Rn:
                  return R;
                case Mn:
                  return A;
                case zn:
                  return j;
                case Nn:
                  return T;
                case Dn:
                  return L;
              }
            return e;
          });
        var Ci = Rt ? ru : xc;
        function Si(t) {
          var e = t && t.constructor;
          return t === (("function" == typeof e && e.prototype) || Ft);
        }
        function ji(t) {
          return t == t && !au(t);
        }
        function ki(t, e) {
          return function (n) {
            return null != n && n[t] === e && (e !== r || t in jt(n));
          };
        }
        function Ti(t, e, n) {
          return (
            (e = bn(e === r ? t.length - 1 : e, 0)),
            function () {
              for (
                var r = arguments, o = -1, i = bn(r.length - e, 0), a = at(i);
                ++o < i;

              )
                a[o] = r[e + o];
              o = -1;
              for (var u = at(e + 1); ++o < e; ) u[o] = r[o];
              return (u[e] = n(a)), Ae(t, this, u);
            }
          );
        }
        function Ei(t, e) {
          return e.length < 2 ? t : Cr(t, io(e, 0, -1));
        }
        function Ii(t, e) {
          for (var n = t.length, o = wn(e.length, n), i = Lo(t); o--; ) {
            var a = e[o];
            t[o] = wi(a, n) ? i[a] : r;
          }
          return t;
        }
        function Li(t, e) {
          if (
            ("constructor" !== e || "function" != typeof t[e]) &&
            "__proto__" != e
          )
            return t[e];
        }
        var Fi = Ni(no),
          Ri =
            de ||
            function (t, e) {
              return pe.setTimeout(t, e);
            },
          Mi = Ni(ro);
        function zi(t, e, n) {
          var r = e + "";
          return Mi(
            t,
            (function (t, e) {
              var n = e.length;
              if (!n) return t;
              var r = n - 1;
              return (
                (e[r] = (n > 1 ? "& " : "") + e[r]),
                (e = e.join(n > 2 ? ", " : " ")),
                t.replace(ut, "{\n/* [wrapped with " + e + "] */\n")
              );
            })(
              r,
              (function (t, e) {
                return (
                  Se(v, function (n) {
                    var r = "_." + n[0];
                    e & n[1] && !Ee(t, r) && t.push(r);
                  }),
                  t.sort()
                );
              })(
                (function (t) {
                  var e = t.match(ct);
                  return e ? e[1].split(st) : [];
                })(r),
                n,
              ),
            ),
          );
        }
        function Ni(t) {
          var e = 0,
            n = 0;
          return function () {
            var o = xn(),
              i = 16 - (o - n);
            if (((n = o), i > 0)) {
              if (++e >= 800) return arguments[0];
            } else e = 0;
            return t.apply(r, arguments);
          };
        }
        function Di(t, e) {
          var n = -1,
            o = t.length,
            i = o - 1;
          for (e = e === r ? o : e; ++n < e; ) {
            var a = Kr(n, i),
              u = t[a];
            (t[a] = t[n]), (t[n] = u);
          }
          return (t.length = e), t;
        }
        var Ui,
          Pi,
          $i,
          Bi =
            ((Ui = function (t) {
              var e = [];
              return (
                46 === t.charCodeAt(0) && e.push(""),
                t.replace(nt, function (t, n, r, o) {
                  e.push(r ? o.replace(pt, "$1") : n || t);
                }),
                e
              );
            }),
            (Pi = Pa(Ui, function (t) {
              return 500 === $i.size && $i.clear(), t;
            })),
            ($i = Pi.cache),
            Pi);
        function Wi(t) {
          if ("string" == typeof t || du(t)) return t;
          var e = t + "";
          return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
        }
        function qi(t) {
          if (null != t) {
            try {
              return Mt.call(t);
            } catch (t) {}
            try {
              return t + "";
            } catch (t) {}
          }
          return "";
        }
        function Hi(t) {
          if (t instanceof Gn) return t.clone();
          var e = new Hn(t.__wrapped__, t.__chain__);
          return (
            (e.__actions__ = Lo(t.__actions__)),
            (e.__index__ = t.__index__),
            (e.__values__ = t.__values__),
            e
          );
        }
        var Gi = Qr(function (t, e) {
            return Xa(t) ? hr(t, _r(e, 1, Xa, !0)) : [];
          }),
          Zi = Qr(function (t, e) {
            var n = na(e);
            return (
              Xa(n) && (n = r), Xa(t) ? hr(t, _r(e, 1, Xa, !0), fi(n, 2)) : []
            );
          }),
          Ji = Qr(function (t, e) {
            var n = na(e);
            return Xa(n) && (n = r), Xa(t) ? hr(t, _r(e, 1, Xa, !0), r, n) : [];
          });
        function Vi(t, e, n) {
          var r = null == t ? 0 : t.length;
          if (!r) return -1;
          var o = null == n ? 0 : bu(n);
          return o < 0 && (o = bn(r + o, 0)), Ue(t, fi(e, 3), o);
        }
        function Ki(t, e, n) {
          var o = null == t ? 0 : t.length;
          if (!o) return -1;
          var i = o - 1;
          return (
            n !== r && ((i = bu(n)), (i = n < 0 ? bn(o + i, 0) : wn(i, o - 1))),
            Ue(t, fi(e, 3), i, !0)
          );
        }
        function Yi(t) {
          return (null == t ? 0 : t.length) ? _r(t, 1) : [];
        }
        function Qi(t) {
          return t && t.length ? t[0] : r;
        }
        var Xi = Qr(function (t) {
            var e = Le(t, bo);
            return e.length && e[0] === t[0] ? Ir(e) : [];
          }),
          ta = Qr(function (t) {
            var e = na(t),
              n = Le(t, bo);
            return (
              e === na(n) ? (e = r) : n.pop(),
              n.length && n[0] === t[0] ? Ir(n, fi(e, 2)) : []
            );
          }),
          ea = Qr(function (t) {
            var e = na(t),
              n = Le(t, bo);
            return (
              (e = "function" == typeof e ? e : r) && n.pop(),
              n.length && n[0] === t[0] ? Ir(n, r, e) : []
            );
          });
        function na(t) {
          var e = null == t ? 0 : t.length;
          return e ? t[e - 1] : r;
        }
        var ra = Qr(oa);
        function oa(t, e) {
          return t && t.length && e && e.length ? Jr(t, e) : t;
        }
        var ia = ii(function (t, e) {
          var n = null == t ? 0 : t.length,
            r = cr(t, e);
          return (
            Vr(
              t,
              Le(e, function (t) {
                return wi(t, n) ? +t : t;
              }).sort(To),
            ),
            r
          );
        });
        function aa(t) {
          return null == t ? t : Cn.call(t);
        }
        var ua = Qr(function (t) {
            return po(_r(t, 1, Xa, !0));
          }),
          ca = Qr(function (t) {
            var e = na(t);
            return Xa(e) && (e = r), po(_r(t, 1, Xa, !0), fi(e, 2));
          }),
          sa = Qr(function (t) {
            var e = na(t);
            return (
              (e = "function" == typeof e ? e : r), po(_r(t, 1, Xa, !0), r, e)
            );
          });
        function la(t) {
          if (!t || !t.length) return [];
          var e = 0;
          return (
            (t = Te(t, function (t) {
              if (Xa(t)) return (e = bn(t.length, e)), !0;
            })),
            Je(e, function (e) {
              return Le(t, qe(e));
            })
          );
        }
        function fa(t, e) {
          if (!t || !t.length) return [];
          var n = la(t);
          return null == e
            ? n
            : Le(n, function (t) {
                return Ae(e, r, t);
              });
        }
        var pa = Qr(function (t, e) {
            return Xa(t) ? hr(t, e) : [];
          }),
          ha = Qr(function (t) {
            return mo(Te(t, Xa));
          }),
          da = Qr(function (t) {
            var e = na(t);
            return Xa(e) && (e = r), mo(Te(t, Xa), fi(e, 2));
          }),
          ga = Qr(function (t) {
            var e = na(t);
            return (e = "function" == typeof e ? e : r), mo(Te(t, Xa), r, e);
          }),
          va = Qr(la);
        var ya = Qr(function (t) {
          var e = t.length,
            n = e > 1 ? t[e - 1] : r;
          return (n = "function" == typeof n ? (t.pop(), n) : r), fa(t, n);
        });
        function ma(t) {
          var e = Bn(t);
          return (e.__chain__ = !0), e;
        }
        function _a(t, e) {
          return e(t);
        }
        var ba = ii(function (t) {
          var e = t.length,
            n = e ? t[0] : 0,
            o = this.__wrapped__,
            i = function (e) {
              return cr(e, t);
            };
          return !(e > 1 || this.__actions__.length) && o instanceof Gn && wi(n)
            ? ((o = o.slice(n, +n + (e ? 1 : 0))).__actions__.push({
                func: _a,
                args: [i],
                thisArg: r,
              }),
              new Hn(o, this.__chain__).thru(function (t) {
                return e && !t.length && t.push(r), t;
              }))
            : this.thru(i);
        });
        var wa = Ro(function (t, e, n) {
          zt.call(t, n) ? ++t[n] : ur(t, n, 1);
        });
        var xa = $o(Vi),
          Oa = $o(Ki);
        function Aa(t, e) {
          return (Ka(t) ? Se : dr)(t, fi(e, 3));
        }
        function Ca(t, e) {
          return (Ka(t) ? je : gr)(t, fi(e, 3));
        }
        var Sa = Ro(function (t, e, n) {
          zt.call(t, n) ? t[n].push(e) : ur(t, n, [e]);
        });
        var ja = Qr(function (t, e, n) {
            var r = -1,
              o = "function" == typeof e,
              i = Qa(t) ? at(t.length) : [];
            return (
              dr(t, function (t) {
                i[++r] = o ? Ae(e, t, n) : Lr(t, e, n);
              }),
              i
            );
          }),
          ka = Ro(function (t, e, n) {
            ur(t, n, e);
          });
        function Ta(t, e) {
          return (Ka(t) ? Le : $r)(t, fi(e, 3));
        }
        var Ea = Ro(
          function (t, e, n) {
            t[n ? 0 : 1].push(e);
          },
          function () {
            return [[], []];
          },
        );
        var Ia = Qr(function (t, e) {
            if (null == t) return [];
            var n = e.length;
            return (
              n > 1 && xi(t, e[0], e[1])
                ? (e = [])
                : n > 2 && xi(e[0], e[1], e[2]) && (e = [e[0]]),
              Gr(t, _r(e, 1), [])
            );
          }),
          La =
            he ||
            function () {
              return pe.Date.now();
            };
        function Fa(t, e, n) {
          return (
            (e = n ? r : e),
            (e = t && null == e ? t.length : e),
            ti(t, l, r, r, r, r, e)
          );
        }
        function Ra(t, e) {
          var n;
          if ("function" != typeof e) throw new Et(o);
          return (
            (t = bu(t)),
            function () {
              return (
                --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = r), n
              );
            }
          );
        }
        var Ma = Qr(function (t, e, n) {
            var r = 1;
            if (n.length) {
              var o = sn(n, li(Ma));
              r |= c;
            }
            return ti(t, r, e, n, o);
          }),
          za = Qr(function (t, e, n) {
            var r = 3;
            if (n.length) {
              var o = sn(n, li(za));
              r |= c;
            }
            return ti(e, r, t, n, o);
          });
        function Na(t, e, n) {
          var i,
            a,
            u,
            c,
            s,
            l,
            f = 0,
            p = !1,
            h = !1,
            d = !0;
          if ("function" != typeof t) throw new Et(o);
          function g(e) {
            var n = i,
              o = a;
            return (i = a = r), (f = e), (c = t.apply(o, n));
          }
          function v(t) {
            return (f = t), (s = Ri(m, e)), p ? g(t) : c;
          }
          function y(t) {
            var n = t - l;
            return l === r || n >= e || n < 0 || (h && t - f >= u);
          }
          function m() {
            var t = La();
            if (y(t)) return _(t);
            s = Ri(
              m,
              (function (t) {
                var n = e - (t - l);
                return h ? wn(n, u - (t - f)) : n;
              })(t),
            );
          }
          function _(t) {
            return (s = r), d && i ? g(t) : ((i = a = r), c);
          }
          function b() {
            var t = La(),
              n = y(t);
            if (((i = arguments), (a = this), (l = t), n)) {
              if (s === r) return v(l);
              if (h) return Co(s), (s = Ri(m, e)), g(l);
            }
            return s === r && (s = Ri(m, e)), c;
          }
          return (
            (e = xu(e) || 0),
            au(n) &&
              ((p = !!n.leading),
              (u = (h = "maxWait" in n) ? bn(xu(n.maxWait) || 0, e) : u),
              (d = "trailing" in n ? !!n.trailing : d)),
            (b.cancel = function () {
              s !== r && Co(s), (f = 0), (i = l = a = s = r);
            }),
            (b.flush = function () {
              return s === r ? c : _(La());
            }),
            b
          );
        }
        var Da = Qr(function (t, e) {
            return pr(t, 1, e);
          }),
          Ua = Qr(function (t, e, n) {
            return pr(t, xu(e) || 0, n);
          });
        function Pa(t, e) {
          if ("function" != typeof t || (null != e && "function" != typeof e))
            throw new Et(o);
          var n = function () {
            var r = arguments,
              o = e ? e.apply(this, r) : r[0],
              i = n.cache;
            if (i.has(o)) return i.get(o);
            var a = t.apply(this, r);
            return (n.cache = i.set(o, a) || i), a;
          };
          return (n.cache = new (Pa.Cache || Vn)()), n;
        }
        function $a(t) {
          if ("function" != typeof t) throw new Et(o);
          return function () {
            var e = arguments;
            switch (e.length) {
              case 0:
                return !t.call(this);
              case 1:
                return !t.call(this, e[0]);
              case 2:
                return !t.call(this, e[0], e[1]);
              case 3:
                return !t.call(this, e[0], e[1], e[2]);
            }
            return !t.apply(this, e);
          };
        }
        Pa.Cache = Vn;
        var Ba = Oo(function (t, e) {
            var n = (e =
              1 == e.length && Ka(e[0])
                ? Le(e[0], Ke(fi()))
                : Le(_r(e, 1), Ke(fi()))).length;
            return Qr(function (r) {
              for (var o = -1, i = wn(r.length, n); ++o < i; )
                r[o] = e[o].call(this, r[o]);
              return Ae(t, this, r);
            });
          }),
          Wa = Qr(function (t, e) {
            var n = sn(e, li(Wa));
            return ti(t, c, r, e, n);
          }),
          qa = Qr(function (t, e) {
            var n = sn(e, li(qa));
            return ti(t, s, r, e, n);
          }),
          Ha = ii(function (t, e) {
            return ti(t, f, r, r, r, e);
          });
        function Ga(t, e) {
          return t === e || (t != t && e != e);
        }
        var Za = Vo(kr),
          Ja = Vo(function (t, e) {
            return t >= e;
          }),
          Va = Fr(
            (function () {
              return arguments;
            })(),
          )
            ? Fr
            : function (t) {
                return uu(t) && zt.call(t, "callee") && !Vt.call(t, "callee");
              },
          Ka = at.isArray,
          Ya = me
            ? Ke(me)
            : function (t) {
                return uu(t) && jr(t) == F;
              };
        function Qa(t) {
          return null != t && iu(t.length) && !ru(t);
        }
        function Xa(t) {
          return uu(t) && Qa(t);
        }
        var tu = He || xc,
          eu = _e
            ? Ke(_e)
            : function (t) {
                return uu(t) && jr(t) == b;
              };
        function nu(t) {
          if (!uu(t)) return !1;
          var e = jr(t);
          return (
            e == w ||
            "[object DOMException]" == e ||
            ("string" == typeof t.message &&
              "string" == typeof t.name &&
              !lu(t))
          );
        }
        function ru(t) {
          if (!au(t)) return !1;
          var e = jr(t);
          return (
            e == x ||
            e == O ||
            "[object AsyncFunction]" == e ||
            "[object Proxy]" == e
          );
        }
        function ou(t) {
          return "number" == typeof t && t == bu(t);
        }
        function iu(t) {
          return "number" == typeof t && t > -1 && t % 1 == 0 && t <= h;
        }
        function au(t) {
          var e = typeof t;
          return null != t && ("object" == e || "function" == e);
        }
        function uu(t) {
          return null != t && "object" == typeof t;
        }
        var cu = be
          ? Ke(be)
          : function (t) {
              return uu(t) && yi(t) == A;
            };
        function su(t) {
          return "number" == typeof t || (uu(t) && jr(t) == C);
        }
        function lu(t) {
          if (!uu(t) || jr(t) != S) return !1;
          var e = Zt(t);
          if (null === e) return !0;
          var n = zt.call(e, "constructor") && e.constructor;
          return "function" == typeof n && n instanceof n && Mt.call(n) == Pt;
        }
        var fu = we
          ? Ke(we)
          : function (t) {
              return uu(t) && jr(t) == k;
            };
        var pu = xe
          ? Ke(xe)
          : function (t) {
              return uu(t) && yi(t) == T;
            };
        function hu(t) {
          return "string" == typeof t || (!Ka(t) && uu(t) && jr(t) == E);
        }
        function du(t) {
          return "symbol" == typeof t || (uu(t) && jr(t) == I);
        }
        var gu = Oe
          ? Ke(Oe)
          : function (t) {
              return uu(t) && iu(t.length) && !!ie[jr(t)];
            };
        var vu = Vo(Pr),
          yu = Vo(function (t, e) {
            return t <= e;
          });
        function mu(t) {
          if (!t) return [];
          if (Qa(t)) return hu(t) ? hn(t) : Lo(t);
          if (ee && t[ee])
            return (function (t) {
              for (var e, n = []; !(e = t.next()).done; ) n.push(e.value);
              return n;
            })(t[ee]());
          var e = yi(t);
          return (e == A ? un : e == T ? ln : Gu)(t);
        }
        function _u(t) {
          return t
            ? (t = xu(t)) === p || t === -1 / 0
              ? 17976931348623157e292 * (t < 0 ? -1 : 1)
              : t == t
              ? t
              : 0
            : 0 === t
            ? t
            : 0;
        }
        function bu(t) {
          var e = _u(t),
            n = e % 1;
          return e == e ? (n ? e - n : e) : 0;
        }
        function wu(t) {
          return t ? sr(bu(t), 0, g) : 0;
        }
        function xu(t) {
          if ("number" == typeof t) return t;
          if (du(t)) return d;
          if (au(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = au(e) ? e + "" : e;
          }
          if ("string" != typeof t) return 0 === t ? t : +t;
          t = Ve(t);
          var n = vt.test(t);
          return n || mt.test(t)
            ? se(t.slice(2), n ? 2 : 8)
            : gt.test(t)
            ? d
            : +t;
        }
        function Ou(t) {
          return Fo(t, Du(t));
        }
        function Au(t) {
          return null == t ? "" : fo(t);
        }
        var Cu = Mo(function (t, e) {
            if (Si(e) || Qa(e)) Fo(e, Nu(e), t);
            else for (var n in e) zt.call(e, n) && rr(t, n, e[n]);
          }),
          Su = Mo(function (t, e) {
            Fo(e, Du(e), t);
          }),
          ju = Mo(function (t, e, n, r) {
            Fo(e, Du(e), t, r);
          }),
          ku = Mo(function (t, e, n, r) {
            Fo(e, Nu(e), t, r);
          }),
          Tu = ii(cr);
        var Eu = Qr(function (t, e) {
            t = jt(t);
            var n = -1,
              o = e.length,
              i = o > 2 ? e[2] : r;
            for (i && xi(e[0], e[1], i) && (o = 1); ++n < o; )
              for (var a = e[n], u = Du(a), c = -1, s = u.length; ++c < s; ) {
                var l = u[c],
                  f = t[l];
                (f === r || (Ga(f, Ft[l]) && !zt.call(t, l))) && (t[l] = a[l]);
              }
            return t;
          }),
          Iu = Qr(function (t) {
            return t.push(r, ni), Ae(Pu, r, t);
          });
        function Lu(t, e, n) {
          var o = null == t ? r : Cr(t, e);
          return o === r ? n : o;
        }
        function Fu(t, e) {
          return null != t && mi(t, e, Er);
        }
        var Ru = qo(function (t, e, n) {
            null != e && "function" != typeof e.toString && (e = Ut.call(e)),
              (t[e] = n);
          }, ac(sc)),
          Mu = qo(function (t, e, n) {
            null != e && "function" != typeof e.toString && (e = Ut.call(e)),
              zt.call(t, e) ? t[e].push(n) : (t[e] = [n]);
          }, fi),
          zu = Qr(Lr);
        function Nu(t) {
          return Qa(t) ? Qn(t) : Dr(t);
        }
        function Du(t) {
          return Qa(t) ? Qn(t, !0) : Ur(t);
        }
        var Uu = Mo(function (t, e, n) {
            qr(t, e, n);
          }),
          Pu = Mo(function (t, e, n, r) {
            qr(t, e, n, r);
          }),
          $u = ii(function (t, e) {
            var n = {};
            if (null == t) return n;
            var r = !1;
            (e = Le(e, function (e) {
              return (e = xo(e, t)), r || (r = e.length > 1), e;
            })),
              Fo(t, ui(t), n),
              r && (n = lr(n, 7, ri));
            for (var o = e.length; o--; ) ho(n, e[o]);
            return n;
          });
        var Bu = ii(function (t, e) {
          return null == t
            ? {}
            : (function (t, e) {
                return Zr(t, e, function (e, n) {
                  return Fu(t, n);
                });
              })(t, e);
        });
        function Wu(t, e) {
          if (null == t) return {};
          var n = Le(ui(t), function (t) {
            return [t];
          });
          return (
            (e = fi(e)),
            Zr(t, n, function (t, n) {
              return e(t, n[0]);
            })
          );
        }
        var qu = Xo(Nu),
          Hu = Xo(Du);
        function Gu(t) {
          return null == t ? [] : Ye(t, Nu(t));
        }
        var Zu = Uo(function (t, e, n) {
          return (e = e.toLowerCase()), t + (n ? Ju(e) : e);
        });
        function Ju(t) {
          return nc(Au(t).toLowerCase());
        }
        function Vu(t) {
          return (t = Au(t)) && t.replace(bt, nn).replace(Qt, "");
        }
        var Ku = Uo(function (t, e, n) {
            return t + (n ? "-" : "") + e.toLowerCase();
          }),
          Yu = Uo(function (t, e, n) {
            return t + (n ? " " : "") + e.toLowerCase();
          }),
          Qu = Do("toLowerCase");
        var Xu = Uo(function (t, e, n) {
          return t + (n ? "_" : "") + e.toLowerCase();
        });
        var tc = Uo(function (t, e, n) {
          return t + (n ? " " : "") + nc(e);
        });
        var ec = Uo(function (t, e, n) {
            return t + (n ? " " : "") + e.toUpperCase();
          }),
          nc = Do("toUpperCase");
        function rc(t, e, n) {
          return (
            (t = Au(t)),
            (e = n ? r : e) === r
              ? (function (t) {
                  return ne.test(t);
                })(t)
                ? (function (t) {
                    return t.match(te) || [];
                  })(t)
                : (function (t) {
                    return t.match(lt) || [];
                  })(t)
              : t.match(e) || []
          );
        }
        var oc = Qr(function (t, e) {
            try {
              return Ae(t, r, e);
            } catch (t) {
              return nu(t) ? t : new At(t);
            }
          }),
          ic = ii(function (t, e) {
            return (
              Se(e, function (e) {
                (e = Wi(e)), ur(t, e, Ma(t[e], t));
              }),
              t
            );
          });
        function ac(t) {
          return function () {
            return t;
          };
        }
        var uc = Bo(),
          cc = Bo(!0);
        function sc(t) {
          return t;
        }
        function lc(t) {
          return Nr("function" == typeof t ? t : lr(t, 1));
        }
        var fc = Qr(function (t, e) {
            return function (n) {
              return Lr(n, t, e);
            };
          }),
          pc = Qr(function (t, e) {
            return function (n) {
              return Lr(t, n, e);
            };
          });
        function hc(t, e, n) {
          var r = Nu(e),
            o = Ar(e, r);
          null != n ||
            (au(e) && (o.length || !r.length)) ||
            ((n = e), (e = t), (t = this), (o = Ar(e, Nu(e))));
          var i = !(au(n) && "chain" in n && !n.chain),
            a = ru(t);
          return (
            Se(o, function (n) {
              var r = e[n];
              (t[n] = r),
                a &&
                  (t.prototype[n] = function () {
                    var e = this.__chain__;
                    if (i || e) {
                      var n = t(this.__wrapped__),
                        o = (n.__actions__ = Lo(this.__actions__));
                      return (
                        o.push({ func: r, args: arguments, thisArg: t }),
                        (n.__chain__ = e),
                        n
                      );
                    }
                    return r.apply(t, Fe([this.value()], arguments));
                  });
            }),
            t
          );
        }
        function dc() {}
        var gc = Go(Le),
          vc = Go(ke),
          yc = Go(ze);
        function mc(t) {
          return Oi(t)
            ? qe(Wi(t))
            : (function (t) {
                return function (e) {
                  return Cr(e, t);
                };
              })(t);
        }
        var _c = Jo(),
          bc = Jo(!0);
        function wc() {
          return [];
        }
        function xc() {
          return !1;
        }
        var Oc = Ho(function (t, e) {
            return t + e;
          }, 0),
          Ac = Yo("ceil"),
          Cc = Ho(function (t, e) {
            return t / e;
          }, 1),
          Sc = Yo("floor");
        var jc,
          kc = Ho(function (t, e) {
            return t * e;
          }, 1),
          Tc = Yo("round"),
          Ec = Ho(function (t, e) {
            return t - e;
          }, 0);
        return (
          (Bn.after = function (t, e) {
            if ("function" != typeof e) throw new Et(o);
            return (
              (t = bu(t)),
              function () {
                if (--t < 1) return e.apply(this, arguments);
              }
            );
          }),
          (Bn.ary = Fa),
          (Bn.assign = Cu),
          (Bn.assignIn = Su),
          (Bn.assignInWith = ju),
          (Bn.assignWith = ku),
          (Bn.at = Tu),
          (Bn.before = Ra),
          (Bn.bind = Ma),
          (Bn.bindAll = ic),
          (Bn.bindKey = za),
          (Bn.castArray = function () {
            if (!arguments.length) return [];
            var t = arguments[0];
            return Ka(t) ? t : [t];
          }),
          (Bn.chain = ma),
          (Bn.chunk = function (t, e, n) {
            e = (n ? xi(t, e, n) : e === r) ? 1 : bn(bu(e), 0);
            var o = null == t ? 0 : t.length;
            if (!o || e < 1) return [];
            for (var i = 0, a = 0, u = at(ve(o / e)); i < o; )
              u[a++] = io(t, i, (i += e));
            return u;
          }),
          (Bn.compact = function (t) {
            for (
              var e = -1, n = null == t ? 0 : t.length, r = 0, o = [];
              ++e < n;

            ) {
              var i = t[e];
              i && (o[r++] = i);
            }
            return o;
          }),
          (Bn.concat = function () {
            var t = arguments.length;
            if (!t) return [];
            for (var e = at(t - 1), n = arguments[0], r = t; r--; )
              e[r - 1] = arguments[r];
            return Fe(Ka(n) ? Lo(n) : [n], _r(e, 1));
          }),
          (Bn.cond = function (t) {
            var e = null == t ? 0 : t.length,
              n = fi();
            return (
              (t = e
                ? Le(t, function (t) {
                    if ("function" != typeof t[1]) throw new Et(o);
                    return [n(t[0]), t[1]];
                  })
                : []),
              Qr(function (n) {
                for (var r = -1; ++r < e; ) {
                  var o = t[r];
                  if (Ae(o[0], this, n)) return Ae(o[1], this, n);
                }
              })
            );
          }),
          (Bn.conforms = function (t) {
            return (function (t) {
              var e = Nu(t);
              return function (n) {
                return fr(n, t, e);
              };
            })(lr(t, 1));
          }),
          (Bn.constant = ac),
          (Bn.countBy = wa),
          (Bn.create = function (t, e) {
            var n = Wn(t);
            return null == e ? n : ar(n, e);
          }),
          (Bn.curry = function t(e, n, o) {
            var i = ti(e, 8, r, r, r, r, r, (n = o ? r : n));
            return (i.placeholder = t.placeholder), i;
          }),
          (Bn.curryRight = function t(e, n, o) {
            var i = ti(e, u, r, r, r, r, r, (n = o ? r : n));
            return (i.placeholder = t.placeholder), i;
          }),
          (Bn.debounce = Na),
          (Bn.defaults = Eu),
          (Bn.defaultsDeep = Iu),
          (Bn.defer = Da),
          (Bn.delay = Ua),
          (Bn.difference = Gi),
          (Bn.differenceBy = Zi),
          (Bn.differenceWith = Ji),
          (Bn.drop = function (t, e, n) {
            var o = null == t ? 0 : t.length;
            return o
              ? io(t, (e = n || e === r ? 1 : bu(e)) < 0 ? 0 : e, o)
              : [];
          }),
          (Bn.dropRight = function (t, e, n) {
            var o = null == t ? 0 : t.length;
            return o
              ? io(t, 0, (e = o - (e = n || e === r ? 1 : bu(e))) < 0 ? 0 : e)
              : [];
          }),
          (Bn.dropRightWhile = function (t, e) {
            return t && t.length ? vo(t, fi(e, 3), !0, !0) : [];
          }),
          (Bn.dropWhile = function (t, e) {
            return t && t.length ? vo(t, fi(e, 3), !0) : [];
          }),
          (Bn.fill = function (t, e, n, o) {
            var i = null == t ? 0 : t.length;
            return i
              ? (n && "number" != typeof n && xi(t, e, n) && ((n = 0), (o = i)),
                (function (t, e, n, o) {
                  var i = t.length;
                  for (
                    (n = bu(n)) < 0 && (n = -n > i ? 0 : i + n),
                      (o = o === r || o > i ? i : bu(o)) < 0 && (o += i),
                      o = n > o ? 0 : wu(o);
                    n < o;

                  )
                    t[n++] = e;
                  return t;
                })(t, e, n, o))
              : [];
          }),
          (Bn.filter = function (t, e) {
            return (Ka(t) ? Te : mr)(t, fi(e, 3));
          }),
          (Bn.flatMap = function (t, e) {
            return _r(Ta(t, e), 1);
          }),
          (Bn.flatMapDeep = function (t, e) {
            return _r(Ta(t, e), p);
          }),
          (Bn.flatMapDepth = function (t, e, n) {
            return (n = n === r ? 1 : bu(n)), _r(Ta(t, e), n);
          }),
          (Bn.flatten = Yi),
          (Bn.flattenDeep = function (t) {
            return (null == t ? 0 : t.length) ? _r(t, p) : [];
          }),
          (Bn.flattenDepth = function (t, e) {
            return (null == t ? 0 : t.length)
              ? _r(t, (e = e === r ? 1 : bu(e)))
              : [];
          }),
          (Bn.flip = function (t) {
            return ti(t, 512);
          }),
          (Bn.flow = uc),
          (Bn.flowRight = cc),
          (Bn.fromPairs = function (t) {
            for (var e = -1, n = null == t ? 0 : t.length, r = {}; ++e < n; ) {
              var o = t[e];
              r[o[0]] = o[1];
            }
            return r;
          }),
          (Bn.functions = function (t) {
            return null == t ? [] : Ar(t, Nu(t));
          }),
          (Bn.functionsIn = function (t) {
            return null == t ? [] : Ar(t, Du(t));
          }),
          (Bn.groupBy = Sa),
          (Bn.initial = function (t) {
            return (null == t ? 0 : t.length) ? io(t, 0, -1) : [];
          }),
          (Bn.intersection = Xi),
          (Bn.intersectionBy = ta),
          (Bn.intersectionWith = ea),
          (Bn.invert = Ru),
          (Bn.invertBy = Mu),
          (Bn.invokeMap = ja),
          (Bn.iteratee = lc),
          (Bn.keyBy = ka),
          (Bn.keys = Nu),
          (Bn.keysIn = Du),
          (Bn.map = Ta),
          (Bn.mapKeys = function (t, e) {
            var n = {};
            return (
              (e = fi(e, 3)),
              xr(t, function (t, r, o) {
                ur(n, e(t, r, o), t);
              }),
              n
            );
          }),
          (Bn.mapValues = function (t, e) {
            var n = {};
            return (
              (e = fi(e, 3)),
              xr(t, function (t, r, o) {
                ur(n, r, e(t, r, o));
              }),
              n
            );
          }),
          (Bn.matches = function (t) {
            return Br(lr(t, 1));
          }),
          (Bn.matchesProperty = function (t, e) {
            return Wr(t, lr(e, 1));
          }),
          (Bn.memoize = Pa),
          (Bn.merge = Uu),
          (Bn.mergeWith = Pu),
          (Bn.method = fc),
          (Bn.methodOf = pc),
          (Bn.mixin = hc),
          (Bn.negate = $a),
          (Bn.nthArg = function (t) {
            return (
              (t = bu(t)),
              Qr(function (e) {
                return Hr(e, t);
              })
            );
          }),
          (Bn.omit = $u),
          (Bn.omitBy = function (t, e) {
            return Wu(t, $a(fi(e)));
          }),
          (Bn.once = function (t) {
            return Ra(2, t);
          }),
          (Bn.orderBy = function (t, e, n, o) {
            return null == t
              ? []
              : (Ka(e) || (e = null == e ? [] : [e]),
                Ka((n = o ? r : n)) || (n = null == n ? [] : [n]),
                Gr(t, e, n));
          }),
          (Bn.over = gc),
          (Bn.overArgs = Ba),
          (Bn.overEvery = vc),
          (Bn.overSome = yc),
          (Bn.partial = Wa),
          (Bn.partialRight = qa),
          (Bn.partition = Ea),
          (Bn.pick = Bu),
          (Bn.pickBy = Wu),
          (Bn.property = mc),
          (Bn.propertyOf = function (t) {
            return function (e) {
              return null == t ? r : Cr(t, e);
            };
          }),
          (Bn.pull = ra),
          (Bn.pullAll = oa),
          (Bn.pullAllBy = function (t, e, n) {
            return t && t.length && e && e.length ? Jr(t, e, fi(n, 2)) : t;
          }),
          (Bn.pullAllWith = function (t, e, n) {
            return t && t.length && e && e.length ? Jr(t, e, r, n) : t;
          }),
          (Bn.pullAt = ia),
          (Bn.range = _c),
          (Bn.rangeRight = bc),
          (Bn.rearg = Ha),
          (Bn.reject = function (t, e) {
            return (Ka(t) ? Te : mr)(t, $a(fi(e, 3)));
          }),
          (Bn.remove = function (t, e) {
            var n = [];
            if (!t || !t.length) return n;
            var r = -1,
              o = [],
              i = t.length;
            for (e = fi(e, 3); ++r < i; ) {
              var a = t[r];
              e(a, r, t) && (n.push(a), o.push(r));
            }
            return Vr(t, o), n;
          }),
          (Bn.rest = function (t, e) {
            if ("function" != typeof t) throw new Et(o);
            return Qr(t, (e = e === r ? e : bu(e)));
          }),
          (Bn.reverse = aa),
          (Bn.sampleSize = function (t, e, n) {
            return (
              (e = (n ? xi(t, e, n) : e === r) ? 1 : bu(e)),
              (Ka(t) ? tr : to)(t, e)
            );
          }),
          (Bn.set = function (t, e, n) {
            return null == t ? t : eo(t, e, n);
          }),
          (Bn.setWith = function (t, e, n, o) {
            return (
              (o = "function" == typeof o ? o : r),
              null == t ? t : eo(t, e, n, o)
            );
          }),
          (Bn.shuffle = function (t) {
            return (Ka(t) ? er : oo)(t);
          }),
          (Bn.slice = function (t, e, n) {
            var o = null == t ? 0 : t.length;
            return o
              ? (n && "number" != typeof n && xi(t, e, n)
                  ? ((e = 0), (n = o))
                  : ((e = null == e ? 0 : bu(e)), (n = n === r ? o : bu(n))),
                io(t, e, n))
              : [];
          }),
          (Bn.sortBy = Ia),
          (Bn.sortedUniq = function (t) {
            return t && t.length ? so(t) : [];
          }),
          (Bn.sortedUniqBy = function (t, e) {
            return t && t.length ? so(t, fi(e, 2)) : [];
          }),
          (Bn.split = function (t, e, n) {
            return (
              n && "number" != typeof n && xi(t, e, n) && (e = n = r),
              (n = n === r ? g : n >>> 0)
                ? (t = Au(t)) &&
                  ("string" == typeof e || (null != e && !fu(e))) &&
                  !(e = fo(e)) &&
                  an(t)
                  ? Ao(hn(t), 0, n)
                  : t.split(e, n)
                : []
            );
          }),
          (Bn.spread = function (t, e) {
            if ("function" != typeof t) throw new Et(o);
            return (
              (e = null == e ? 0 : bn(bu(e), 0)),
              Qr(function (n) {
                var r = n[e],
                  o = Ao(n, 0, e);
                return r && Fe(o, r), Ae(t, this, o);
              })
            );
          }),
          (Bn.tail = function (t) {
            var e = null == t ? 0 : t.length;
            return e ? io(t, 1, e) : [];
          }),
          (Bn.take = function (t, e, n) {
            return t && t.length
              ? io(t, 0, (e = n || e === r ? 1 : bu(e)) < 0 ? 0 : e)
              : [];
          }),
          (Bn.takeRight = function (t, e, n) {
            var o = null == t ? 0 : t.length;
            return o
              ? io(t, (e = o - (e = n || e === r ? 1 : bu(e))) < 0 ? 0 : e, o)
              : [];
          }),
          (Bn.takeRightWhile = function (t, e) {
            return t && t.length ? vo(t, fi(e, 3), !1, !0) : [];
          }),
          (Bn.takeWhile = function (t, e) {
            return t && t.length ? vo(t, fi(e, 3)) : [];
          }),
          (Bn.tap = function (t, e) {
            return e(t), t;
          }),
          (Bn.throttle = function (t, e, n) {
            var r = !0,
              i = !0;
            if ("function" != typeof t) throw new Et(o);
            return (
              au(n) &&
                ((r = "leading" in n ? !!n.leading : r),
                (i = "trailing" in n ? !!n.trailing : i)),
              Na(t, e, { leading: r, maxWait: e, trailing: i })
            );
          }),
          (Bn.thru = _a),
          (Bn.toArray = mu),
          (Bn.toPairs = qu),
          (Bn.toPairsIn = Hu),
          (Bn.toPath = function (t) {
            return Ka(t) ? Le(t, Wi) : du(t) ? [t] : Lo(Bi(Au(t)));
          }),
          (Bn.toPlainObject = Ou),
          (Bn.transform = function (t, e, n) {
            var r = Ka(t),
              o = r || tu(t) || gu(t);
            if (((e = fi(e, 4)), null == n)) {
              var i = t && t.constructor;
              n = o ? (r ? new i() : []) : au(t) && ru(i) ? Wn(Zt(t)) : {};
            }
            return (
              (o ? Se : xr)(t, function (t, r, o) {
                return e(n, t, r, o);
              }),
              n
            );
          }),
          (Bn.unary = function (t) {
            return Fa(t, 1);
          }),
          (Bn.union = ua),
          (Bn.unionBy = ca),
          (Bn.unionWith = sa),
          (Bn.uniq = function (t) {
            return t && t.length ? po(t) : [];
          }),
          (Bn.uniqBy = function (t, e) {
            return t && t.length ? po(t, fi(e, 2)) : [];
          }),
          (Bn.uniqWith = function (t, e) {
            return (
              (e = "function" == typeof e ? e : r),
              t && t.length ? po(t, r, e) : []
            );
          }),
          (Bn.unset = function (t, e) {
            return null == t || ho(t, e);
          }),
          (Bn.unzip = la),
          (Bn.unzipWith = fa),
          (Bn.update = function (t, e, n) {
            return null == t ? t : go(t, e, wo(n));
          }),
          (Bn.updateWith = function (t, e, n, o) {
            return (
              (o = "function" == typeof o ? o : r),
              null == t ? t : go(t, e, wo(n), o)
            );
          }),
          (Bn.values = Gu),
          (Bn.valuesIn = function (t) {
            return null == t ? [] : Ye(t, Du(t));
          }),
          (Bn.without = pa),
          (Bn.words = rc),
          (Bn.wrap = function (t, e) {
            return Wa(wo(e), t);
          }),
          (Bn.xor = ha),
          (Bn.xorBy = da),
          (Bn.xorWith = ga),
          (Bn.zip = va),
          (Bn.zipObject = function (t, e) {
            return _o(t || [], e || [], rr);
          }),
          (Bn.zipObjectDeep = function (t, e) {
            return _o(t || [], e || [], eo);
          }),
          (Bn.zipWith = ya),
          (Bn.entries = qu),
          (Bn.entriesIn = Hu),
          (Bn.extend = Su),
          (Bn.extendWith = ju),
          hc(Bn, Bn),
          (Bn.add = Oc),
          (Bn.attempt = oc),
          (Bn.camelCase = Zu),
          (Bn.capitalize = Ju),
          (Bn.ceil = Ac),
          (Bn.clamp = function (t, e, n) {
            return (
              n === r && ((n = e), (e = r)),
              n !== r && (n = (n = xu(n)) == n ? n : 0),
              e !== r && (e = (e = xu(e)) == e ? e : 0),
              sr(xu(t), e, n)
            );
          }),
          (Bn.clone = function (t) {
            return lr(t, 4);
          }),
          (Bn.cloneDeep = function (t) {
            return lr(t, 5);
          }),
          (Bn.cloneDeepWith = function (t, e) {
            return lr(t, 5, (e = "function" == typeof e ? e : r));
          }),
          (Bn.cloneWith = function (t, e) {
            return lr(t, 4, (e = "function" == typeof e ? e : r));
          }),
          (Bn.conformsTo = function (t, e) {
            return null == e || fr(t, e, Nu(e));
          }),
          (Bn.deburr = Vu),
          (Bn.defaultTo = function (t, e) {
            return null == t || t != t ? e : t;
          }),
          (Bn.divide = Cc),
          (Bn.endsWith = function (t, e, n) {
            (t = Au(t)), (e = fo(e));
            var o = t.length,
              i = (n = n === r ? o : sr(bu(n), 0, o));
            return (n -= e.length) >= 0 && t.slice(n, i) == e;
          }),
          (Bn.eq = Ga),
          (Bn.escape = function (t) {
            return (t = Au(t)) && K.test(t) ? t.replace(J, rn) : t;
          }),
          (Bn.escapeRegExp = function (t) {
            return (t = Au(t)) && ot.test(t) ? t.replace(rt, "\\$&") : t;
          }),
          (Bn.every = function (t, e, n) {
            var o = Ka(t) ? ke : vr;
            return n && xi(t, e, n) && (e = r), o(t, fi(e, 3));
          }),
          (Bn.find = xa),
          (Bn.findIndex = Vi),
          (Bn.findKey = function (t, e) {
            return De(t, fi(e, 3), xr);
          }),
          (Bn.findLast = Oa),
          (Bn.findLastIndex = Ki),
          (Bn.findLastKey = function (t, e) {
            return De(t, fi(e, 3), Or);
          }),
          (Bn.floor = Sc),
          (Bn.forEach = Aa),
          (Bn.forEachRight = Ca),
          (Bn.forIn = function (t, e) {
            return null == t ? t : br(t, fi(e, 3), Du);
          }),
          (Bn.forInRight = function (t, e) {
            return null == t ? t : wr(t, fi(e, 3), Du);
          }),
          (Bn.forOwn = function (t, e) {
            return t && xr(t, fi(e, 3));
          }),
          (Bn.forOwnRight = function (t, e) {
            return t && Or(t, fi(e, 3));
          }),
          (Bn.get = Lu),
          (Bn.gt = Za),
          (Bn.gte = Ja),
          (Bn.has = function (t, e) {
            return null != t && mi(t, e, Tr);
          }),
          (Bn.hasIn = Fu),
          (Bn.head = Qi),
          (Bn.identity = sc),
          (Bn.includes = function (t, e, n, r) {
            (t = Qa(t) ? t : Gu(t)), (n = n && !r ? bu(n) : 0);
            var o = t.length;
            return (
              n < 0 && (n = bn(o + n, 0)),
              hu(t) ? n <= o && t.indexOf(e, n) > -1 : !!o && Pe(t, e, n) > -1
            );
          }),
          (Bn.indexOf = function (t, e, n) {
            var r = null == t ? 0 : t.length;
            if (!r) return -1;
            var o = null == n ? 0 : bu(n);
            return o < 0 && (o = bn(r + o, 0)), Pe(t, e, o);
          }),
          (Bn.inRange = function (t, e, n) {
            return (
              (e = _u(e)),
              n === r ? ((n = e), (e = 0)) : (n = _u(n)),
              (function (t, e, n) {
                return t >= wn(e, n) && t < bn(e, n);
              })((t = xu(t)), e, n)
            );
          }),
          (Bn.invoke = zu),
          (Bn.isArguments = Va),
          (Bn.isArray = Ka),
          (Bn.isArrayBuffer = Ya),
          (Bn.isArrayLike = Qa),
          (Bn.isArrayLikeObject = Xa),
          (Bn.isBoolean = function (t) {
            return !0 === t || !1 === t || (uu(t) && jr(t) == _);
          }),
          (Bn.isBuffer = tu),
          (Bn.isDate = eu),
          (Bn.isElement = function (t) {
            return uu(t) && 1 === t.nodeType && !lu(t);
          }),
          (Bn.isEmpty = function (t) {
            if (null == t) return !0;
            if (
              Qa(t) &&
              (Ka(t) ||
                "string" == typeof t ||
                "function" == typeof t.splice ||
                tu(t) ||
                gu(t) ||
                Va(t))
            )
              return !t.length;
            var e = yi(t);
            if (e == A || e == T) return !t.size;
            if (Si(t)) return !Dr(t).length;
            for (var n in t) if (zt.call(t, n)) return !1;
            return !0;
          }),
          (Bn.isEqual = function (t, e) {
            return Rr(t, e);
          }),
          (Bn.isEqualWith = function (t, e, n) {
            var o = (n = "function" == typeof n ? n : r) ? n(t, e) : r;
            return o === r ? Rr(t, e, r, n) : !!o;
          }),
          (Bn.isError = nu),
          (Bn.isFinite = function (t) {
            return "number" == typeof t && yn(t);
          }),
          (Bn.isFunction = ru),
          (Bn.isInteger = ou),
          (Bn.isLength = iu),
          (Bn.isMap = cu),
          (Bn.isMatch = function (t, e) {
            return t === e || Mr(t, e, hi(e));
          }),
          (Bn.isMatchWith = function (t, e, n) {
            return (n = "function" == typeof n ? n : r), Mr(t, e, hi(e), n);
          }),
          (Bn.isNaN = function (t) {
            return su(t) && t != +t;
          }),
          (Bn.isNative = function (t) {
            if (Ci(t))
              throw new At(
                "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
              );
            return zr(t);
          }),
          (Bn.isNil = function (t) {
            return null == t;
          }),
          (Bn.isNull = function (t) {
            return null === t;
          }),
          (Bn.isNumber = su),
          (Bn.isObject = au),
          (Bn.isObjectLike = uu),
          (Bn.isPlainObject = lu),
          (Bn.isRegExp = fu),
          (Bn.isSafeInteger = function (t) {
            return ou(t) && t >= -9007199254740991 && t <= h;
          }),
          (Bn.isSet = pu),
          (Bn.isString = hu),
          (Bn.isSymbol = du),
          (Bn.isTypedArray = gu),
          (Bn.isUndefined = function (t) {
            return t === r;
          }),
          (Bn.isWeakMap = function (t) {
            return uu(t) && yi(t) == L;
          }),
          (Bn.isWeakSet = function (t) {
            return uu(t) && "[object WeakSet]" == jr(t);
          }),
          (Bn.join = function (t, e) {
            return null == t ? "" : mn.call(t, e);
          }),
          (Bn.kebabCase = Ku),
          (Bn.last = na),
          (Bn.lastIndexOf = function (t, e, n) {
            var o = null == t ? 0 : t.length;
            if (!o) return -1;
            var i = o;
            return (
              n !== r && (i = (i = bu(n)) < 0 ? bn(o + i, 0) : wn(i, o - 1)),
              e == e
                ? (function (t, e, n) {
                    for (var r = n + 1; r--; ) if (t[r] === e) return r;
                    return r;
                  })(t, e, i)
                : Ue(t, Be, i, !0)
            );
          }),
          (Bn.lowerCase = Yu),
          (Bn.lowerFirst = Qu),
          (Bn.lt = vu),
          (Bn.lte = yu),
          (Bn.max = function (t) {
            return t && t.length ? yr(t, sc, kr) : r;
          }),
          (Bn.maxBy = function (t, e) {
            return t && t.length ? yr(t, fi(e, 2), kr) : r;
          }),
          (Bn.mean = function (t) {
            return We(t, sc);
          }),
          (Bn.meanBy = function (t, e) {
            return We(t, fi(e, 2));
          }),
          (Bn.min = function (t) {
            return t && t.length ? yr(t, sc, Pr) : r;
          }),
          (Bn.minBy = function (t, e) {
            return t && t.length ? yr(t, fi(e, 2), Pr) : r;
          }),
          (Bn.stubArray = wc),
          (Bn.stubFalse = xc),
          (Bn.stubObject = function () {
            return {};
          }),
          (Bn.stubString = function () {
            return "";
          }),
          (Bn.stubTrue = function () {
            return !0;
          }),
          (Bn.multiply = kc),
          (Bn.nth = function (t, e) {
            return t && t.length ? Hr(t, bu(e)) : r;
          }),
          (Bn.noConflict = function () {
            return pe._ === this && (pe._ = $t), this;
          }),
          (Bn.noop = dc),
          (Bn.now = La),
          (Bn.pad = function (t, e, n) {
            t = Au(t);
            var r = (e = bu(e)) ? pn(t) : 0;
            if (!e || r >= e) return t;
            var o = (e - r) / 2;
            return Zo(ye(o), n) + t + Zo(ve(o), n);
          }),
          (Bn.padEnd = function (t, e, n) {
            t = Au(t);
            var r = (e = bu(e)) ? pn(t) : 0;
            return e && r < e ? t + Zo(e - r, n) : t;
          }),
          (Bn.padStart = function (t, e, n) {
            t = Au(t);
            var r = (e = bu(e)) ? pn(t) : 0;
            return e && r < e ? Zo(e - r, n) + t : t;
          }),
          (Bn.parseInt = function (t, e, n) {
            return (
              n || null == e ? (e = 0) : e && (e = +e),
              On(Au(t).replace(it, ""), e || 0)
            );
          }),
          (Bn.random = function (t, e, n) {
            if (
              (n && "boolean" != typeof n && xi(t, e, n) && (e = n = r),
              n === r &&
                ("boolean" == typeof e
                  ? ((n = e), (e = r))
                  : "boolean" == typeof t && ((n = t), (t = r))),
              t === r && e === r
                ? ((t = 0), (e = 1))
                : ((t = _u(t)), e === r ? ((e = t), (t = 0)) : (e = _u(e))),
              t > e)
            ) {
              var o = t;
              (t = e), (e = o);
            }
            if (n || t % 1 || e % 1) {
              var i = An();
              return wn(t + i * (e - t + ce("1e-" + ((i + "").length - 1))), e);
            }
            return Kr(t, e);
          }),
          (Bn.reduce = function (t, e, n) {
            var r = Ka(t) ? Re : Ge,
              o = arguments.length < 3;
            return r(t, fi(e, 4), n, o, dr);
          }),
          (Bn.reduceRight = function (t, e, n) {
            var r = Ka(t) ? Me : Ge,
              o = arguments.length < 3;
            return r(t, fi(e, 4), n, o, gr);
          }),
          (Bn.repeat = function (t, e, n) {
            return (e = (n ? xi(t, e, n) : e === r) ? 1 : bu(e)), Yr(Au(t), e);
          }),
          (Bn.replace = function () {
            var t = arguments,
              e = Au(t[0]);
            return t.length < 3 ? e : e.replace(t[1], t[2]);
          }),
          (Bn.result = function (t, e, n) {
            var o = -1,
              i = (e = xo(e, t)).length;
            for (i || ((i = 1), (t = r)); ++o < i; ) {
              var a = null == t ? r : t[Wi(e[o])];
              a === r && ((o = i), (a = n)), (t = ru(a) ? a.call(t) : a);
            }
            return t;
          }),
          (Bn.round = Tc),
          (Bn.runInContext = t),
          (Bn.sample = function (t) {
            return (Ka(t) ? Xn : Xr)(t);
          }),
          (Bn.size = function (t) {
            if (null == t) return 0;
            if (Qa(t)) return hu(t) ? pn(t) : t.length;
            var e = yi(t);
            return e == A || e == T ? t.size : Dr(t).length;
          }),
          (Bn.snakeCase = Xu),
          (Bn.some = function (t, e, n) {
            var o = Ka(t) ? ze : ao;
            return n && xi(t, e, n) && (e = r), o(t, fi(e, 3));
          }),
          (Bn.sortedIndex = function (t, e) {
            return uo(t, e);
          }),
          (Bn.sortedIndexBy = function (t, e, n) {
            return co(t, e, fi(n, 2));
          }),
          (Bn.sortedIndexOf = function (t, e) {
            var n = null == t ? 0 : t.length;
            if (n) {
              var r = uo(t, e);
              if (r < n && Ga(t[r], e)) return r;
            }
            return -1;
          }),
          (Bn.sortedLastIndex = function (t, e) {
            return uo(t, e, !0);
          }),
          (Bn.sortedLastIndexBy = function (t, e, n) {
            return co(t, e, fi(n, 2), !0);
          }),
          (Bn.sortedLastIndexOf = function (t, e) {
            if (null == t ? 0 : t.length) {
              var n = uo(t, e, !0) - 1;
              if (Ga(t[n], e)) return n;
            }
            return -1;
          }),
          (Bn.startCase = tc),
          (Bn.startsWith = function (t, e, n) {
            return (
              (t = Au(t)),
              (n = null == n ? 0 : sr(bu(n), 0, t.length)),
              (e = fo(e)),
              t.slice(n, n + e.length) == e
            );
          }),
          (Bn.subtract = Ec),
          (Bn.sum = function (t) {
            return t && t.length ? Ze(t, sc) : 0;
          }),
          (Bn.sumBy = function (t, e) {
            return t && t.length ? Ze(t, fi(e, 2)) : 0;
          }),
          (Bn.template = function (t, e, n) {
            var o = Bn.templateSettings;
            n && xi(t, e, n) && (e = r), (t = Au(t)), (e = ju({}, e, o, ei));
            var i,
              a,
              u = ju({}, e.imports, o.imports, ei),
              c = Nu(u),
              s = Ye(u, c),
              l = 0,
              f = e.interpolate || wt,
              p = "__p += '",
              h = kt(
                (e.escape || wt).source +
                  "|" +
                  f.source +
                  "|" +
                  (f === X ? ht : wt).source +
                  "|" +
                  (e.evaluate || wt).source +
                  "|$",
                "g",
              ),
              d =
                "//# sourceURL=" +
                (zt.call(e, "sourceURL")
                  ? (e.sourceURL + "").replace(/\s/g, " ")
                  : "lodash.templateSources[" + ++oe + "]") +
                "\n";
            t.replace(h, function (e, n, r, o, u, c) {
              return (
                r || (r = o),
                (p += t.slice(l, c).replace(xt, on)),
                n && ((i = !0), (p += "' +\n__e(" + n + ") +\n'")),
                u && ((a = !0), (p += "';\n" + u + ";\n__p += '")),
                r &&
                  (p += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                (l = c + e.length),
                e
              );
            }),
              (p += "';\n");
            var g = zt.call(e, "variable") && e.variable;
            if (g) {
              if (ft.test(g))
                throw new At(
                  "Invalid `variable` option passed into `_.template`",
                );
            } else p = "with (obj) {\n" + p + "\n}\n";
            (p = (a ? p.replace(q, "") : p).replace(H, "$1").replace(G, "$1;")),
              (p =
                "function(" +
                (g || "obj") +
                ") {\n" +
                (g ? "" : "obj || (obj = {});\n") +
                "var __t, __p = ''" +
                (i ? ", __e = _.escape" : "") +
                (a
                  ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                  : ";\n") +
                p +
                "return __p\n}");
            var v = oc(function () {
              return Ct(c, d + "return " + p).apply(r, s);
            });
            if (((v.source = p), nu(v))) throw v;
            return v;
          }),
          (Bn.times = function (t, e) {
            if ((t = bu(t)) < 1 || t > h) return [];
            var n = g,
              r = wn(t, g);
            (e = fi(e)), (t -= g);
            for (var o = Je(r, e); ++n < t; ) e(n);
            return o;
          }),
          (Bn.toFinite = _u),
          (Bn.toInteger = bu),
          (Bn.toLength = wu),
          (Bn.toLower = function (t) {
            return Au(t).toLowerCase();
          }),
          (Bn.toNumber = xu),
          (Bn.toSafeInteger = function (t) {
            return t ? sr(bu(t), -9007199254740991, h) : 0 === t ? t : 0;
          }),
          (Bn.toString = Au),
          (Bn.toUpper = function (t) {
            return Au(t).toUpperCase();
          }),
          (Bn.trim = function (t, e, n) {
            if ((t = Au(t)) && (n || e === r)) return Ve(t);
            if (!t || !(e = fo(e))) return t;
            var o = hn(t),
              i = hn(e);
            return Ao(o, Xe(o, i), tn(o, i) + 1).join("");
          }),
          (Bn.trimEnd = function (t, e, n) {
            if ((t = Au(t)) && (n || e === r)) return t.slice(0, dn(t) + 1);
            if (!t || !(e = fo(e))) return t;
            var o = hn(t);
            return Ao(o, 0, tn(o, hn(e)) + 1).join("");
          }),
          (Bn.trimStart = function (t, e, n) {
            if ((t = Au(t)) && (n || e === r)) return t.replace(it, "");
            if (!t || !(e = fo(e))) return t;
            var o = hn(t);
            return Ao(o, Xe(o, hn(e))).join("");
          }),
          (Bn.truncate = function (t, e) {
            var n = 30,
              o = "...";
            if (au(e)) {
              var i = "separator" in e ? e.separator : i;
              (n = "length" in e ? bu(e.length) : n),
                (o = "omission" in e ? fo(e.omission) : o);
            }
            var a = (t = Au(t)).length;
            if (an(t)) {
              var u = hn(t);
              a = u.length;
            }
            if (n >= a) return t;
            var c = n - pn(o);
            if (c < 1) return o;
            var s = u ? Ao(u, 0, c).join("") : t.slice(0, c);
            if (i === r) return s + o;
            if ((u && (c += s.length - c), fu(i))) {
              if (t.slice(c).search(i)) {
                var l,
                  f = s;
                for (
                  i.global || (i = kt(i.source, Au(dt.exec(i)) + "g")),
                    i.lastIndex = 0;
                  (l = i.exec(f));

                )
                  var p = l.index;
                s = s.slice(0, p === r ? c : p);
              }
            } else if (t.indexOf(fo(i), c) != c) {
              var h = s.lastIndexOf(i);
              h > -1 && (s = s.slice(0, h));
            }
            return s + o;
          }),
          (Bn.unescape = function (t) {
            return (t = Au(t)) && V.test(t) ? t.replace(Z, gn) : t;
          }),
          (Bn.uniqueId = function (t) {
            var e = ++Nt;
            return Au(t) + e;
          }),
          (Bn.upperCase = ec),
          (Bn.upperFirst = nc),
          (Bn.each = Aa),
          (Bn.eachRight = Ca),
          (Bn.first = Qi),
          hc(
            Bn,
            ((jc = {}),
            xr(Bn, function (t, e) {
              zt.call(Bn.prototype, e) || (jc[e] = t);
            }),
            jc),
            { chain: !1 },
          ),
          (Bn.VERSION = "4.17.21"),
          Se(
            [
              "bind",
              "bindKey",
              "curry",
              "curryRight",
              "partial",
              "partialRight",
            ],
            function (t) {
              Bn[t].placeholder = Bn;
            },
          ),
          Se(["drop", "take"], function (t, e) {
            (Gn.prototype[t] = function (n) {
              n = n === r ? 1 : bn(bu(n), 0);
              var o = this.__filtered__ && !e ? new Gn(this) : this.clone();
              return (
                o.__filtered__
                  ? (o.__takeCount__ = wn(n, o.__takeCount__))
                  : o.__views__.push({
                      size: wn(n, g),
                      type: t + (o.__dir__ < 0 ? "Right" : ""),
                    }),
                o
              );
            }),
              (Gn.prototype[t + "Right"] = function (e) {
                return this.reverse()[t](e).reverse();
              });
          }),
          Se(["filter", "map", "takeWhile"], function (t, e) {
            var n = e + 1,
              r = 1 == n || 3 == n;
            Gn.prototype[t] = function (t) {
              var e = this.clone();
              return (
                e.__iteratees__.push({ iteratee: fi(t, 3), type: n }),
                (e.__filtered__ = e.__filtered__ || r),
                e
              );
            };
          }),
          Se(["head", "last"], function (t, e) {
            var n = "take" + (e ? "Right" : "");
            Gn.prototype[t] = function () {
              return this[n](1).value()[0];
            };
          }),
          Se(["initial", "tail"], function (t, e) {
            var n = "drop" + (e ? "" : "Right");
            Gn.prototype[t] = function () {
              return this.__filtered__ ? new Gn(this) : this[n](1);
            };
          }),
          (Gn.prototype.compact = function () {
            return this.filter(sc);
          }),
          (Gn.prototype.find = function (t) {
            return this.filter(t).head();
          }),
          (Gn.prototype.findLast = function (t) {
            return this.reverse().find(t);
          }),
          (Gn.prototype.invokeMap = Qr(function (t, e) {
            return "function" == typeof t
              ? new Gn(this)
              : this.map(function (n) {
                  return Lr(n, t, e);
                });
          })),
          (Gn.prototype.reject = function (t) {
            return this.filter($a(fi(t)));
          }),
          (Gn.prototype.slice = function (t, e) {
            t = bu(t);
            var n = this;
            return n.__filtered__ && (t > 0 || e < 0)
              ? new Gn(n)
              : (t < 0 ? (n = n.takeRight(-t)) : t && (n = n.drop(t)),
                e !== r &&
                  (n = (e = bu(e)) < 0 ? n.dropRight(-e) : n.take(e - t)),
                n);
          }),
          (Gn.prototype.takeRightWhile = function (t) {
            return this.reverse().takeWhile(t).reverse();
          }),
          (Gn.prototype.toArray = function () {
            return this.take(g);
          }),
          xr(Gn.prototype, function (t, e) {
            var n = /^(?:filter|find|map|reject)|While$/.test(e),
              o = /^(?:head|last)$/.test(e),
              i = Bn[o ? "take" + ("last" == e ? "Right" : "") : e],
              a = o || /^find/.test(e);
            i &&
              (Bn.prototype[e] = function () {
                var e = this.__wrapped__,
                  u = o ? [1] : arguments,
                  c = e instanceof Gn,
                  s = u[0],
                  l = c || Ka(e),
                  f = function (t) {
                    var e = i.apply(Bn, Fe([t], u));
                    return o && p ? e[0] : e;
                  };
                l &&
                  n &&
                  "function" == typeof s &&
                  1 != s.length &&
                  (c = l = !1);
                var p = this.__chain__,
                  h = !!this.__actions__.length,
                  d = a && !p,
                  g = c && !h;
                if (!a && l) {
                  e = g ? e : new Gn(this);
                  var v = t.apply(e, u);
                  return (
                    v.__actions__.push({ func: _a, args: [f], thisArg: r }),
                    new Hn(v, p)
                  );
                }
                return d && g
                  ? t.apply(this, u)
                  : ((v = this.thru(f)),
                    d ? (o ? v.value()[0] : v.value()) : v);
              });
          }),
          Se(
            ["pop", "push", "shift", "sort", "splice", "unshift"],
            function (t) {
              var e = It[t],
                n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                r = /^(?:pop|shift)$/.test(t);
              Bn.prototype[t] = function () {
                var t = arguments;
                if (r && !this.__chain__) {
                  var o = this.value();
                  return e.apply(Ka(o) ? o : [], t);
                }
                return this[n](function (n) {
                  return e.apply(Ka(n) ? n : [], t);
                });
              };
            },
          ),
          xr(Gn.prototype, function (t, e) {
            var n = Bn[e];
            if (n) {
              var r = n.name + "";
              zt.call(Fn, r) || (Fn[r] = []), Fn[r].push({ name: e, func: n });
            }
          }),
          (Fn[Wo(r, 2).name] = [{ name: "wrapper", func: r }]),
          (Gn.prototype.clone = function () {
            var t = new Gn(this.__wrapped__);
            return (
              (t.__actions__ = Lo(this.__actions__)),
              (t.__dir__ = this.__dir__),
              (t.__filtered__ = this.__filtered__),
              (t.__iteratees__ = Lo(this.__iteratees__)),
              (t.__takeCount__ = this.__takeCount__),
              (t.__views__ = Lo(this.__views__)),
              t
            );
          }),
          (Gn.prototype.reverse = function () {
            if (this.__filtered__) {
              var t = new Gn(this);
              (t.__dir__ = -1), (t.__filtered__ = !0);
            } else (t = this.clone()).__dir__ *= -1;
            return t;
          }),
          (Gn.prototype.value = function () {
            var t = this.__wrapped__.value(),
              e = this.__dir__,
              n = Ka(t),
              r = e < 0,
              o = n ? t.length : 0,
              i = (function (t, e, n) {
                var r = -1,
                  o = n.length;
                for (; ++r < o; ) {
                  var i = n[r],
                    a = i.size;
                  switch (i.type) {
                    case "drop":
                      t += a;
                      break;
                    case "dropRight":
                      e -= a;
                      break;
                    case "take":
                      e = wn(e, t + a);
                      break;
                    case "takeRight":
                      t = bn(t, e - a);
                  }
                }
                return { start: t, end: e };
              })(0, o, this.__views__),
              a = i.start,
              u = i.end,
              c = u - a,
              s = r ? u : a - 1,
              l = this.__iteratees__,
              f = l.length,
              p = 0,
              h = wn(c, this.__takeCount__);
            if (!n || (!r && o == c && h == c)) return yo(t, this.__actions__);
            var d = [];
            t: for (; c-- && p < h; ) {
              for (var g = -1, v = t[(s += e)]; ++g < f; ) {
                var y = l[g],
                  m = y.iteratee,
                  _ = y.type,
                  b = m(v);
                if (2 == _) v = b;
                else if (!b) {
                  if (1 == _) continue t;
                  break t;
                }
              }
              d[p++] = v;
            }
            return d;
          }),
          (Bn.prototype.at = ba),
          (Bn.prototype.chain = function () {
            return ma(this);
          }),
          (Bn.prototype.commit = function () {
            return new Hn(this.value(), this.__chain__);
          }),
          (Bn.prototype.next = function () {
            this.__values__ === r && (this.__values__ = mu(this.value()));
            var t = this.__index__ >= this.__values__.length;
            return {
              done: t,
              value: t ? r : this.__values__[this.__index__++],
            };
          }),
          (Bn.prototype.plant = function (t) {
            for (var e, n = this; n instanceof qn; ) {
              var o = Hi(n);
              (o.__index__ = 0),
                (o.__values__ = r),
                e ? (i.__wrapped__ = o) : (e = o);
              var i = o;
              n = n.__wrapped__;
            }
            return (i.__wrapped__ = t), e;
          }),
          (Bn.prototype.reverse = function () {
            var t = this.__wrapped__;
            if (t instanceof Gn) {
              var e = t;
              return (
                this.__actions__.length && (e = new Gn(this)),
                (e = e.reverse()).__actions__.push({
                  func: _a,
                  args: [aa],
                  thisArg: r,
                }),
                new Hn(e, this.__chain__)
              );
            }
            return this.thru(aa);
          }),
          (Bn.prototype.toJSON =
            Bn.prototype.valueOf =
            Bn.prototype.value =
              function () {
                return yo(this.__wrapped__, this.__actions__);
              }),
          (Bn.prototype.first = Bn.prototype.head),
          ee &&
            (Bn.prototype[ee] = function () {
              return this;
            }),
          Bn
        );
      })();
      "function" == typeof define && "object" == typeof define.amd && define.amd
        ? ((pe._ = vn),
          define(function () {
            return vn;
          }))
        : de
        ? (((de.exports = vn)._ = vn), (he._ = vn))
        : (pe._ = vn);
    }.call(this));
  }),
  o("cVm5l");
var i = o("7U5sq");
const a = ["unfinished-business", "Unfinished Business"],
  u = ['"TODO" "LATER" "DOING" "NOW"', '"LATER" "NOW"', '"TODO" "DOING"'],
  c = [
    "Alphabetical",
    "by Marker then Priority",
    "by Priority then Marker",
    "Unsorted",
  ],
  s = [
    {
      key: "defaultTag",
      type: "string",
      default: "testme",
      title: "default search tag?",
      description: "Use this for testing, or if you tag your tasks",
    },
    {
      key: "searchMarkers",
      type: "enum",
      enumChoices: u,
      enumPicker: "radio",
      default: u[1],
      title: "What markers to carry over to today?",
      description: "What markers should be moved, and which should stay?",
    },
    {
      key: "sortOrder",
      type: "enum",
      enumChoices: c,
      enumPicker: "radio",
      default: c[2],
      title: "How to sort movable tasks?",
      description:
        "Sort order: Alphabetical, by Marker then Priority, by Priority then Marker, or None",
    },
  ];
async function l(t, e) {
  let n = t
    ? `[?b :block/path-refs [:block/name "${t
        .toLowerCase()
        .trim()
        .replace(/^["'](.+(?=["']$))["']$/, "$1")}"]]\n`
    : "";
  const r = e
    ? ""
    : `[?p :block/journal? true] [?p :block/journal-day ${(function () {
        let t = ((e = new Date()).setDate(e.getDate() - 1), e);
        var e;
        return parseInt(
          `${t.getFullYear()}${("0" + (t.getMonth() + 1)).slice(-2)}${(
            "0" + t.getDate()
          ).slice(-2)}`,
          10,
        );
      })()}]`;
  "imsure" === t && e && (n = "");
  const o = `[:find (pull ?b [*])\n    :where\n    [?b :block/marker ?m]\n    [(contains? #{${logseq.settings.searchMarkers}} ?m)]\n    ${n}\n    [?b :block/page ?p]\n    ${r}\n    ]`;
  try {
    return await logseq.DB.datascriptQuery(o);
  } catch (t) {
    return !1;
  }
}
async function f(t) {
  try {
    const e = await logseq.Editor.getBlock(t, { includeChildren: !1 }),
      n = !(!e.properties || null == e.properties.template),
      r = null != e.parent && e.parent.id !== e.page.id;
    return (!1 !== n || !1 !== r) && (!0 === n || (await f(e.parent.id)));
  } catch (t) {
    console.log(t);
  }
}
function p(t, e) {
  const n = new RegExp("^(LATER|NOW|TODO|DOING) (\\[#.])? *"),
    r = n.test(t.content) ? t.content.replace(n, "") : t.content,
    o = n.test(e.content) ? e.content.replace(n, "") : e.content;
  return r < o ? -1 : r > o ? 1 : 0;
}
logseq.useSettingsSchema(s);
logseq
  .ready(async () => {
    logseq.provideModel({}),
      console.log(a[1], "has loaded"),
      logseq.Editor.registerSlashCommand(
        "Move unfinished business here",
        async () => {
          await logseq.Editor.insertAtEditingCursor(
            `{{renderer :unfinishedBusiness${
              logseq.settings.defaultTag
                ? ", " + logseq.settings.defaultTag
                : ""
            }}}`,
          );
        },
      ),
      logseq.App.onMacroRendererSlotted(async ({ slot: t, payload: n }) => {
        try {
          if (":unfinishedBusiness" !== n.arguments[0].trim()) return;
          console.log("DB", n);
          const r = n.arguments.length > 1 ? n.arguments[1] : "",
            o = "imsure" === n.arguments[2],
            u = await f(n.uuid);
          let s = await l(r, o);
          const h = !0 === u ? "green" : "red",
            d =
              !0 === u
                ? "will run with template"
                : "Cannot find any (tagged) tasks";
          if (u || 0 == s)
            return void (await logseq.provideUI({
              key: a[0],
              slot: t,
              template: `<span style="color: ${h}">{{renderer ${n.arguments} }}</span> (${d})`,
              reset: !0,
              style: { flex: 1 },
            }));
          {
            let t = `**🚀 Moved ${s ? s.length : "zero"} tasks`;
            (t += `(${logseq.settings.sortOrder})`),
              (t += "" + (o ? "" : " from yesterday")),
              (t += (r ? " (#" + r + ")" : "") + "**"),
              await logseq.Editor.updateBlock(n.uuid, t),
              (s = s.flat()),
              logseq.settings.sortOrder === c[0]
                ? s.sort(p)
                : logseq.settings.sortOrder === c[1]
                ? (s = e(i).orderBy(s, ["marker", "priority"], ["desc", "asc"]))
                : logseq.settings.sortOrder === c[2] &&
                  (s = e(i).orderBy(
                    s,
                    ["priority", "marker"],
                    ["asc", "desc"],
                  )),
              s.forEach(async (t) => {
                await logseq.Editor.moveBlock(t.uuid, n.uuid, { before: !0 });
              });
          }
        } catch (t) {
          console.log(t);
        }
      });
  })
  .catch(console.error);
