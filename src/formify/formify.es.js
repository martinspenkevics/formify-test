const Tn =
  ':host,:root{--color-primary: #1976d2;--color-secondary: #f57c00;--color-danger: #d32f2f;--color-border: #e0e0e0;--color-surface: #ffffff;--color-surface-variant: #f9f9f9;--color-text: #212121;--color-muted: #757575;--font-family: "Roboto", sans-serif;--spacing-xs: 4px;--spacing-sm: 8px;--spacing-md: 16px;--spacing-lg: 24px;--radius-sm: 4px;--radius-md: 8px;--elevation-1: 0 1px 3px rgba(0, 0, 0, .12);--elevation-2: 0 4px 6px rgba(0, 0, 0, .16);--transition: .2s ease-in-out}input,textarea,select{font-size:1rem;padding:var(--spacing-sm);border:1px solid var(--color-border);border-radius:var(--radius-sm);background-color:var(--color-surface);color:var(--color-text);transition:box-shadow var(--transition),border-color var(--transition)}input:focus,textarea:focus,select:focus{outline:none;border-color:var(--color-primary);box-shadow:0 0 0 2px #1976d233}button{font-size:.9rem;cursor:pointer;border:none;border-radius:var(--radius-sm);padding:var(--spacing-xs) var(--spacing-sm);transition:background-color var(--transition),color var(--transition),box-shadow var(--transition)}.form-builder{display:flex;flex-direction:column;gap:var(--spacing-lg);font-family:var(--font-family);padding:var(--spacing-lg);background-color:var(--color-surface);color:var(--color-text)}.form-title-input{font-size:1.75rem;font-weight:500;border:none;border-bottom:2px solid var(--color-primary);padding:var(--spacing-sm);background:transparent;color:var(--color-text);transition:border-color var(--transition)}.form-title-input:focus{outline:none;border-color:var(--color-secondary)}.section-card,.question-card{background:var(--color-surface-variant);border-radius:var(--radius-md);padding:var(--spacing-md);display:flex;flex-direction:column;gap:var(--spacing-sm);box-shadow:var(--elevation-1);transition:box-shadow var(--transition);margin-bottom:10px}.section-card:hover,.question-card:hover{box-shadow:var(--elevation-2)}.section-header,.rule-row,.option-row{display:flex;align-items:center;gap:var(--spacing-sm)}.text-button{color:var(--color-primary);background:transparent;font-weight:500}.text-button:hover{text-decoration:underline}.delete-button{color:var(--color-danger);font-weight:500}.delete-button:hover{text-decoration:underline}.action-button{background-color:var(--color-primary);color:#fff;font-weight:500;padding:var(--spacing-sm) var(--spacing-md);box-shadow:var(--elevation-1)}.action-button:hover{background-color:#1565c0;box-shadow:var(--elevation-2)}.download-button{background-color:var(--color-secondary);color:#fff;font-weight:500;padding:var(--spacing-sm) var(--spacing-md);box-shadow:var(--elevation-1)}.download-button:hover{background-color:#ef6c00;box-shadow:var(--elevation-2)}.submit-button{background-color:var(--color-primary);color:#fff;font-weight:500;padding:var(--spacing-sm) var(--spacing-md);box-shadow:var(--elevation-1)}.submit-button:hover{background-color:var(--color-primary);box-shadow:var(--elevation-2)}.form-actions{display:flex;gap:var(--spacing-md);margin-top:var(--spacing-md)}.form-viewer{font-family:var(--font-family);display:flex;flex-direction:column;gap:var(--spacing-lg);padding:var(--spacing-lg);background-color:var(--color-surface);color:var(--color-text)}.form-title{font-size:1.5rem;font-weight:600}.section{display:flex;flex-direction:column;gap:var(--spacing-md)}.section-title{font-size:1.25rem;font-weight:500}.radio-group,.checkbox-group,.scoring-group{display:flex;flex-direction:column;gap:var(--spacing-xs)}.radio-option,.checkbox-option,.scoring-option{display:flex;align-items:center;gap:var(--spacing-sm)}.question-label{font-weight:500;margin-bottom:var(--spacing-xs)}.answer-text{font-style:italic;color:var(--color-muted)}.answer-list{list-style:disc inside;padding-left:var(--spacing-sm);color:var(--color-text)}.answer-list li{margin-bottom:var(--spacing-xs)}.answer-list .answer-text{color:var(--color-muted);font-style:italic}';
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function qe(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) t[o] = 1;
  return (o) => o in t;
}
const Y = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {},
  Ct = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [],
  le = () => {},
  ri = () => !1,
  oo = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 && // uppercase letter
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  wo = (e) => e.startsWith("onUpdate:"),
  ne = Object.assign,
  $n = (e, t) => {
    const o = e.indexOf(t);
    o > -1 && e.splice(o, 1);
  },
  ii = Object.prototype.hasOwnProperty,
  W = (e, t) => ii.call(e, t),
  P = Array.isArray,
  gt = (e) => no(e) === "[object Map]",
  Uo = (e) => no(e) === "[object Set]",
  ss = (e) => no(e) === "[object Date]",
  F = (e) => typeof e == "function",
  oe = (e) => typeof e == "string",
  Be = (e) => typeof e == "symbol",
  z = (e) => e !== null && typeof e == "object",
  An = (e) => (z(e) || F(e)) && F(e.then) && F(e.catch),
  Js = Object.prototype.toString,
  no = (e) => Js.call(e),
  Pn = (e) => no(e).slice(8, -1),
  Ho = (e) => no(e) === "[object Object]",
  Rn = (e) =>
    oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Wt = /* @__PURE__ */ qe(
    // the leading comma is intentional so empty string "" is also included
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  li = /* @__PURE__ */ qe(
    "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
  ),
  Lo = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return (o) => t[o] || (t[o] = e(o));
  },
  ci = /-(\w)/g,
  ye = Lo((e) => e.replace(ci, (t, o) => (o ? o.toUpperCase() : ""))),
  ui = /\B([A-Z])/g,
  we = Lo((e) => e.replace(ui, "-$1").toLowerCase()),
  Bo = Lo((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  _t = Lo((e) => (e ? `on${Bo(e)}` : "")),
  ft = (e, t) => !Object.is(e, t),
  Dt = (e, ...t) => {
    for (let o = 0; o < e.length; o++) e[o](...t);
  },
  xo = (e, t, o, n = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: n,
      value: o,
    });
  },
  Vo = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  rs = (e) => {
    const t = oe(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let is;
const so = () =>
  is ||
  (is =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Mn(e) {
  if (P(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o],
        s = oe(n) ? pi(n) : Mn(n);
      if (s) for (const r in s) t[r] = s[r];
    }
    return t;
  } else if (oe(e) || z(e)) return e;
}
const ai = /;(?![^(]*\))/g,
  fi = /:([^]+)/,
  di = /\/\*[^]*?\*\//g;
function pi(e) {
  const t = {};
  return (
    e
      .replace(di, "")
      .split(ai)
      .forEach((o) => {
        if (o) {
          const n = o.split(fi);
          n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      }),
    t
  );
}
function In(e) {
  let t = "";
  if (oe(e)) t = e;
  else if (P(e))
    for (let o = 0; o < e.length; o++) {
      const n = In(e[o]);
      n && (t += n + " ");
    }
  else if (z(e)) for (const o in e) e[o] && (t += o + " ");
  return t.trim();
}
const hi =
    "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",
  _i =
    "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",
  mi =
    "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",
  gi = /* @__PURE__ */ qe(hi),
  vi = /* @__PURE__ */ qe(_i),
  bi = /* @__PURE__ */ qe(mi),
  yi =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Ei = /* @__PURE__ */ qe(yi);
function Gs(e) {
  return !!e || e === "";
}
function Ni(e, t) {
  if (e.length !== t.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++) o = At(e[n], t[n]);
  return o;
}
function At(e, t) {
  if (e === t) return !0;
  let o = ss(e),
    n = ss(t);
  if (o || n) return o && n ? e.getTime() === t.getTime() : !1;
  if (((o = Be(e)), (n = Be(t)), o || n)) return e === t;
  if (((o = P(e)), (n = P(t)), o || n)) return o && n ? Ni(e, t) : !1;
  if (((o = z(e)), (n = z(t)), o || n)) {
    if (!o || !n) return !1;
    const s = Object.keys(e).length,
      r = Object.keys(t).length;
    if (s !== r) return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i),
        u = t.hasOwnProperty(i);
      if ((l && !u) || (!l && u) || !At(e[i], t[i])) return !1;
    }
  }
  return String(e) === String(t);
}
function Oi(e, t) {
  return e.findIndex((o) => At(o, t));
}
const Ys = (e) => !!(e && e.__v_isRef === !0),
  U = (e) =>
    oe(e)
      ? e
      : e == null
      ? ""
      : P(e) || (z(e) && (e.toString === Js || !F(e.toString)))
      ? Ys(e)
        ? U(e.value)
        : JSON.stringify(e, zs, 2)
      : String(e),
  zs = (e, t) =>
    Ys(t)
      ? zs(e, t.value)
      : gt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (o, [n, s], r) => ((o[nn(n, r) + " =>"] = s), o),
            {}
          ),
        }
      : Uo(t)
      ? {
          [`Set(${t.size})`]: [...t.values()].map((o) => nn(o)),
        }
      : Be(t)
      ? nn(t)
      : z(t) && !P(t) && !Ho(t)
      ? String(t)
      : t,
  nn = (e, t = "") => {
    var o;
    return (
      // Symbol.description in es2019+ so we need to cast here to pass
      // the lib: es2016 check
      Be(e) ? `Symbol(${(o = e.description) != null ? o : t})` : e
    );
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function Ke(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Oe;
class wi {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Oe),
      !t && Oe && (this.index = (Oe.scopes || (Oe.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, o;
      if (this.scopes)
        for (t = 0, o = this.scopes.length; t < o; t++) this.scopes[t].pause();
      for (t = 0, o = this.effects.length; t < o; t++) this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, o;
      if (this.scopes)
        for (t = 0, o = this.scopes.length; t < o; t++) this.scopes[t].resume();
      for (t = 0, o = this.effects.length; t < o; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const o = Oe;
      try {
        return (Oe = this), t();
      } finally {
        Oe = o;
      }
    } else
      process.env.NODE_ENV !== "production" &&
        Ke("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Oe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Oe = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let o, n;
      for (o = 0, n = this.effects.length; o < n; o++) this.effects[o].stop();
      for (this.effects.length = 0, o = 0, n = this.cleanups.length; o < n; o++)
        this.cleanups[o]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (o = 0, n = this.scopes.length; o < n; o++) this.scopes[o].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function xi() {
  return Oe;
}
let G;
const sn = /* @__PURE__ */ new WeakSet();
class Qs {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Oe && Oe.active && Oe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), sn.has(this) && (sn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Zs(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), ls(this), qs(this);
    const t = G,
      o = $e;
    (G = this), ($e = !0);
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" &&
        G !== this &&
        Ke(
          "Active effect was not restored correctly - this is likely a Vue internal bug."
        ),
        er(this),
        (G = t),
        ($e = o),
        (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) jn(t);
      (this.deps = this.depsTail = void 0),
        ls(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? sn.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    _n(this) && this.run();
  }
  get dirty() {
    return _n(this);
  }
}
let Xs = 0,
  Jt,
  Gt;
function Zs(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = Gt), (Gt = e);
    return;
  }
  (e.next = Jt), (Jt = e);
}
function kn() {
  Xs++;
}
function Fn() {
  if (--Xs > 0) return;
  if (Gt) {
    let t = Gt;
    for (Gt = void 0; t; ) {
      const o = t.next;
      (t.next = void 0), (t.flags &= -9), (t = o);
    }
  }
  let e;
  for (; Jt; ) {
    let t = Jt;
    for (Jt = void 0; t; ) {
      const o = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = o;
    }
  }
  if (e) throw e;
}
function qs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function er(e) {
  let t,
    o = e.depsTail,
    n = o;
  for (; n; ) {
    const s = n.prevDep;
    n.version === -1 ? (n === o && (o = s), jn(n), Vi(n)) : (t = n),
      (n.dep.activeLink = n.prevActiveLink),
      (n.prevActiveLink = void 0),
      (n = s);
  }
  (e.deps = t), (e.depsTail = o);
}
function _n(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (tr(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function tr(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === Qt)
  )
    return;
  e.globalVersion = Qt;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !_n(e))) {
    e.flags &= -3;
    return;
  }
  const o = G,
    n = $e;
  (G = e), ($e = !0);
  try {
    qs(e);
    const s = e.fn(e._value);
    (t.version === 0 || ft(s, e._value)) && ((e._value = s), t.version++);
  } catch (s) {
    throw (t.version++, s);
  } finally {
    (G = o), ($e = n), er(e), (e.flags &= -3);
  }
}
function jn(e, t = !1) {
  const { dep: o, prevSub: n, nextSub: s } = e;
  if (
    (n && ((n.nextSub = s), (e.prevSub = void 0)),
    s && ((s.prevSub = n), (e.nextSub = void 0)),
    process.env.NODE_ENV !== "production" &&
      o.subsHead === e &&
      (o.subsHead = s),
    o.subs === e && ((o.subs = n), !n && o.computed))
  ) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep) jn(r, !0);
  }
  !t && !--o.sc && o.map && o.map.delete(o.key);
}
function Vi(e) {
  const { prevDep: t, nextDep: o } = e;
  t && ((t.nextDep = o), (e.prevDep = void 0)),
    o && ((o.prevDep = t), (e.nextDep = void 0));
}
let $e = !0;
const or = [];
function et() {
  or.push($e), ($e = !1);
}
function tt() {
  const e = or.pop();
  $e = e === void 0 ? !0 : e;
}
function ls(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const o = G;
    G = void 0;
    try {
      t();
    } finally {
      G = o;
    }
  }
}
let Qt = 0;
class Di {
  constructor(t, o) {
    (this.sub = t),
      (this.dep = o),
      (this.version = o.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class Un {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!G || !$e || G === this.computed) return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== G)
      (o = this.activeLink = new Di(G, this)),
        G.deps
          ? ((o.prevDep = G.depsTail),
            (G.depsTail.nextDep = o),
            (G.depsTail = o))
          : (G.deps = G.depsTail = o),
        nr(o);
    else if (o.version === -1 && ((o.version = this.version), o.nextDep)) {
      const n = o.nextDep;
      (n.prevDep = o.prevDep),
        o.prevDep && (o.prevDep.nextDep = n),
        (o.prevDep = G.depsTail),
        (o.nextDep = void 0),
        (G.depsTail.nextDep = o),
        (G.depsTail = o),
        G.deps === o && (G.deps = n);
    }
    return (
      process.env.NODE_ENV !== "production" &&
        G.onTrack &&
        G.onTrack(
          ne(
            {
              effect: G,
            },
            t
          )
        ),
      o
    );
  }
  trigger(t) {
    this.version++, Qt++, this.notify(t);
  }
  notify(t) {
    kn();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let o = this.subsHead; o; o = o.nextSub)
          o.sub.onTrigger &&
            !(o.sub.flags & 8) &&
            o.sub.onTrigger(
              ne(
                {
                  effect: o.sub,
                },
                t
              )
            );
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      Fn();
    }
  }
}
function nr(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep) nr(n);
    }
    const o = e.dep.subs;
    o !== e && ((e.prevSub = o), o && (o.nextSub = e)),
      process.env.NODE_ENV !== "production" &&
        e.dep.subsHead === void 0 &&
        (e.dep.subsHead = e),
      (e.dep.subs = e);
  }
}
const mn = /* @__PURE__ */ new WeakMap(),
  vt = Symbol(process.env.NODE_ENV !== "production" ? "Object iterate" : ""),
  gn = Symbol(process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""),
  Xt = Symbol(process.env.NODE_ENV !== "production" ? "Array iterate" : "");
function ie(e, t, o) {
  if ($e && G) {
    let n = mn.get(e);
    n || mn.set(e, (n = /* @__PURE__ */ new Map()));
    let s = n.get(o);
    s || (n.set(o, (s = new Un())), (s.map = n), (s.key = o)),
      process.env.NODE_ENV !== "production"
        ? s.track({
            target: e,
            type: t,
            key: o,
          })
        : s.track();
  }
}
function Fe(e, t, o, n, s, r) {
  const i = mn.get(e);
  if (!i) {
    Qt++;
    return;
  }
  const l = (u) => {
    u &&
      (process.env.NODE_ENV !== "production"
        ? u.trigger({
            target: e,
            type: t,
            key: o,
            newValue: n,
            oldValue: s,
            oldTarget: r,
          })
        : u.trigger());
  };
  if ((kn(), t === "clear")) i.forEach(l);
  else {
    const u = P(e),
      p = u && Rn(o);
    if (u && o === "length") {
      const d = Number(n);
      i.forEach((a, _) => {
        (_ === "length" || _ === Xt || (!Be(_) && _ >= d)) && l(a);
      });
    } else
      switch (
        ((o !== void 0 || i.has(void 0)) && l(i.get(o)), p && l(i.get(Xt)), t)
      ) {
        case "add":
          u ? p && l(i.get("length")) : (l(i.get(vt)), gt(e) && l(i.get(gn)));
          break;
        case "delete":
          u || (l(i.get(vt)), gt(e) && l(i.get(gn)));
          break;
        case "set":
          gt(e) && l(i.get(vt));
          break;
      }
  }
  Fn();
}
function wt(e) {
  const t = H(e);
  return t === e ? t : (ie(t, "iterate", Xt), me(e) ? t : t.map(fe));
}
function Ko(e) {
  return ie((e = H(e)), "iterate", Xt), e;
}
const Si = {
  __proto__: null,
  [Symbol.iterator]() {
    return rn(this, Symbol.iterator, fe);
  },
  concat(...e) {
    return wt(this).concat(...e.map((t) => (P(t) ? wt(t) : t)));
  },
  entries() {
    return rn(this, "entries", (e) => ((e[1] = fe(e[1])), e));
  },
  every(e, t) {
    return Ge(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ge(this, "filter", e, t, (o) => o.map(fe), arguments);
  },
  find(e, t) {
    return Ge(this, "find", e, t, fe, arguments);
  },
  findIndex(e, t) {
    return Ge(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ge(this, "findLast", e, t, fe, arguments);
  },
  findLastIndex(e, t) {
    return Ge(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ge(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ln(this, "includes", e);
  },
  indexOf(...e) {
    return ln(this, "indexOf", e);
  },
  join(e) {
    return wt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return ln(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ge(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ut(this, "pop");
  },
  push(...e) {
    return Ut(this, "push", e);
  },
  reduce(e, ...t) {
    return cs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return cs(this, "reduceRight", e, t);
  },
  shift() {
    return Ut(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ge(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ut(this, "splice", e);
  },
  toReversed() {
    return wt(this).toReversed();
  },
  toSorted(e) {
    return wt(this).toSorted(e);
  },
  toSpliced(...e) {
    return wt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ut(this, "unshift", e);
  },
  values() {
    return rn(this, "values", fe);
  },
};
function rn(e, t, o) {
  const n = Ko(e),
    s = n[t]();
  return (
    n !== e &&
      !me(e) &&
      ((s._next = s.next),
      (s.next = () => {
        const r = s._next();
        return r.value && (r.value = o(r.value)), r;
      })),
    s
  );
}
const Ci = Array.prototype;
function Ge(e, t, o, n, s, r) {
  const i = Ko(e),
    l = i !== e && !me(e),
    u = i[t];
  if (u !== Ci[t]) {
    const a = u.apply(e, r);
    return l ? fe(a) : a;
  }
  let p = o;
  i !== e &&
    (l
      ? (p = function (a, _) {
          return o.call(this, fe(a), _, e);
        })
      : o.length > 2 &&
        (p = function (a, _) {
          return o.call(this, a, _, e);
        }));
  const d = u.call(i, p, n);
  return l && s ? s(d) : d;
}
function cs(e, t, o, n) {
  const s = Ko(e);
  let r = o;
  return (
    s !== e &&
      (me(e)
        ? o.length > 3 &&
          (r = function (i, l, u) {
            return o.call(this, i, l, u, e);
          })
        : (r = function (i, l, u) {
            return o.call(this, i, fe(l), u, e);
          })),
    s[t](r, ...n)
  );
}
function ln(e, t, o) {
  const n = H(e);
  ie(n, "iterate", Xt);
  const s = n[t](...o);
  return (s === -1 || s === !1) && Do(o[0])
    ? ((o[0] = H(o[0])), n[t](...o))
    : s;
}
function Ut(e, t, o = []) {
  et(), kn();
  const n = H(e)[t].apply(e, o);
  return Fn(), tt(), n;
}
const Ti = /* @__PURE__ */ qe("__proto__,__v_isRef,__isVue"),
  sr = new Set(
    /* @__PURE__ */ Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Be)
  );
function $i(e) {
  Be(e) || (e = String(e));
  const t = H(this);
  return ie(t, "has", e), t.hasOwnProperty(e);
}
class rr {
  constructor(t = !1, o = !1) {
    (this._isReadonly = t), (this._isShallow = o);
  }
  get(t, o, n) {
    if (o === "__v_skip") return t.__v_skip;
    const s = this._isReadonly,
      r = this._isShallow;
    if (o === "__v_isReactive") return !s;
    if (o === "__v_isReadonly") return s;
    if (o === "__v_isShallow") return r;
    if (o === "__v_raw")
      return n === (s ? (r ? fr : ar) : r ? ur : cr).get(t) || // receiver is not the reactive proxy, but has the same prototype
        // this means the receiver is a user proxy of the reactive proxy
        Object.getPrototypeOf(t) === Object.getPrototypeOf(n)
        ? t
        : void 0;
    const i = P(t);
    if (!s) {
      let u;
      if (i && (u = Si[o])) return u;
      if (o === "hasOwnProperty") return $i;
    }
    const l = Reflect.get(
      t,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      se(t) ? t : n
    );
    return (Be(o) ? sr.has(o) : Ti(o)) || (s || ie(t, "get", o), r)
      ? l
      : se(l)
      ? i && Rn(o)
        ? l
        : l.value
      : z(l)
      ? s
        ? dr(l)
        : ro(l)
      : l;
  }
}
class ir extends rr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, n, s) {
    let r = t[o];
    if (!this._isShallow) {
      const u = Ze(r);
      if (
        (!me(n) && !Ze(n) && ((r = H(r)), (n = H(n))), !P(t) && se(r) && !se(n))
      )
        return u ? !1 : ((r.value = n), !0);
    }
    const i = P(t) && Rn(o) ? Number(o) < t.length : W(t, o),
      l = Reflect.set(t, o, n, se(t) ? t : s);
    return (
      t === H(s) &&
        (i ? ft(n, r) && Fe(t, "set", o, n, r) : Fe(t, "add", o, n)),
      l
    );
  }
  deleteProperty(t, o) {
    const n = W(t, o),
      s = t[o],
      r = Reflect.deleteProperty(t, o);
    return r && n && Fe(t, "delete", o, void 0, s), r;
  }
  has(t, o) {
    const n = Reflect.has(t, o);
    return (!Be(o) || !sr.has(o)) && ie(t, "has", o), n;
  }
  ownKeys(t) {
    return ie(t, "iterate", P(t) ? "length" : vt), Reflect.ownKeys(t);
  }
}
class lr extends rr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, o) {
    return (
      process.env.NODE_ENV !== "production" &&
        Ke(
          `Set operation on key "${String(o)}" failed: target is readonly.`,
          t
        ),
      !0
    );
  }
  deleteProperty(t, o) {
    return (
      process.env.NODE_ENV !== "production" &&
        Ke(
          `Delete operation on key "${String(o)}" failed: target is readonly.`,
          t
        ),
      !0
    );
  }
}
const Ai = /* @__PURE__ */ new ir(),
  Pi = /* @__PURE__ */ new lr(),
  Ri = /* @__PURE__ */ new ir(!0),
  Mi = /* @__PURE__ */ new lr(!0),
  vn = (e) => e,
  po = (e) => Reflect.getPrototypeOf(e);
function Ii(e, t, o) {
  return function (...n) {
    const s = this.__v_raw,
      r = H(s),
      i = gt(r),
      l = e === "entries" || (e === Symbol.iterator && i),
      u = e === "keys" && i,
      p = s[e](...n),
      d = o ? vn : t ? bn : fe;
    return (
      !t && ie(r, "iterate", u ? gn : vt),
      {
        // iterator protocol
        next() {
          const { value: a, done: _ } = p.next();
          return _
            ? { value: a, done: _ }
            : {
                value: l ? [d(a[0]), d(a[1])] : d(a),
                done: _,
              };
        },
        // iterable protocol
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function ho(e) {
  return function (...t) {
    if (process.env.NODE_ENV !== "production") {
      const o = t[0] ? `on key "${t[0]}" ` : "";
      Ke(`${Bo(e)} operation ${o}failed: target is readonly.`, H(this));
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ki(e, t) {
  const o = {
    get(s) {
      const r = this.__v_raw,
        i = H(r),
        l = H(s);
      e || (ft(s, l) && ie(i, "get", s), ie(i, "get", l));
      const { has: u } = po(i),
        p = t ? vn : e ? bn : fe;
      if (u.call(i, s)) return p(r.get(s));
      if (u.call(i, l)) return p(r.get(l));
      r !== i && r.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && ie(H(s), "iterate", vt), Reflect.get(s, "size", s);
    },
    has(s) {
      const r = this.__v_raw,
        i = H(r),
        l = H(s);
      return (
        e || (ft(s, l) && ie(i, "has", s), ie(i, "has", l)),
        s === l ? r.has(s) : r.has(s) || r.has(l)
      );
    },
    forEach(s, r) {
      const i = this,
        l = i.__v_raw,
        u = H(l),
        p = t ? vn : e ? bn : fe;
      return (
        !e && ie(u, "iterate", vt),
        l.forEach((d, a) => s.call(r, p(d), p(a), i))
      );
    },
  };
  return (
    ne(
      o,
      e
        ? {
            add: ho("add"),
            set: ho("set"),
            delete: ho("delete"),
            clear: ho("clear"),
          }
        : {
            add(s) {
              !t && !me(s) && !Ze(s) && (s = H(s));
              const r = H(this);
              return (
                po(r).has.call(r, s) || (r.add(s), Fe(r, "add", s, s)), this
              );
            },
            set(s, r) {
              !t && !me(r) && !Ze(r) && (r = H(r));
              const i = H(this),
                { has: l, get: u } = po(i);
              let p = l.call(i, s);
              p
                ? process.env.NODE_ENV !== "production" && us(i, l, s)
                : ((s = H(s)), (p = l.call(i, s)));
              const d = u.call(i, s);
              return (
                i.set(s, r),
                p ? ft(r, d) && Fe(i, "set", s, r, d) : Fe(i, "add", s, r),
                this
              );
            },
            delete(s) {
              const r = H(this),
                { has: i, get: l } = po(r);
              let u = i.call(r, s);
              u
                ? process.env.NODE_ENV !== "production" && us(r, i, s)
                : ((s = H(s)), (u = i.call(r, s)));
              const p = l ? l.call(r, s) : void 0,
                d = r.delete(s);
              return u && Fe(r, "delete", s, void 0, p), d;
            },
            clear() {
              const s = H(this),
                r = s.size !== 0,
                i =
                  process.env.NODE_ENV !== "production"
                    ? gt(s)
                      ? new Map(s)
                      : new Set(s)
                    : void 0,
                l = s.clear();
              return r && Fe(s, "clear", void 0, void 0, i), l;
            },
          }
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      o[s] = Ii(s, e, t);
    }),
    o
  );
}
function Wo(e, t) {
  const o = ki(e, t);
  return (n, s, r) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? n
      : Reflect.get(W(o, s) && s in n ? o : n, s, r);
}
const Fi = {
    get: /* @__PURE__ */ Wo(!1, !1),
  },
  ji = {
    get: /* @__PURE__ */ Wo(!1, !0),
  },
  Ui = {
    get: /* @__PURE__ */ Wo(!0, !1),
  },
  Hi = {
    get: /* @__PURE__ */ Wo(!0, !0),
  };
function us(e, t, o) {
  const n = H(o);
  if (n !== o && t.call(e, n)) {
    const s = Pn(e);
    Ke(
      `Reactive ${s} contains both the raw and reactive versions of the same object${
        s === "Map" ? " as keys" : ""
      }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const cr = /* @__PURE__ */ new WeakMap(),
  ur = /* @__PURE__ */ new WeakMap(),
  ar = /* @__PURE__ */ new WeakMap(),
  fr = /* @__PURE__ */ new WeakMap();
function Li(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Bi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Li(Pn(e));
}
function ro(e) {
  return Ze(e) ? e : Jo(e, !1, Ai, Fi, cr);
}
function Ki(e) {
  return Jo(e, !1, Ri, ji, ur);
}
function dr(e) {
  return Jo(e, !0, Pi, Ui, ar);
}
function je(e) {
  return Jo(e, !0, Mi, Hi, fr);
}
function Jo(e, t, o, n, s) {
  if (!z(e))
    return (
      process.env.NODE_ENV !== "production" &&
        Ke(`value cannot be made ${t ? "readonly" : "reactive"}: ${String(e)}`),
      e
    );
  if (e.__v_raw && !(t && e.__v_isReactive)) return e;
  const r = s.get(e);
  if (r) return r;
  const i = Bi(e);
  if (i === 0) return e;
  const l = new Proxy(e, i === 2 ? n : o);
  return s.set(e, l), l;
}
function bt(e) {
  return Ze(e) ? bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ze(e) {
  return !!(e && e.__v_isReadonly);
}
function me(e) {
  return !!(e && e.__v_isShallow);
}
function Do(e) {
  return e ? !!e.__v_raw : !1;
}
function H(e) {
  const t = e && e.__v_raw;
  return t ? H(t) : e;
}
function Wi(e) {
  return (
    !W(e, "__v_skip") && Object.isExtensible(e) && xo(e, "__v_skip", !0), e
  );
}
const fe = (e) => (z(e) ? ro(e) : e),
  bn = (e) => (z(e) ? dr(e) : e);
function se(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function So(e) {
  return Ji(e, !1);
}
function Ji(e, t) {
  return se(e) ? e : new Gi(e, t);
}
class Gi {
  constructor(t, o) {
    (this.dep = new Un()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = o ? t : H(t)),
      (this._value = o ? t : fe(t)),
      (this.__v_isShallow = o);
  }
  get value() {
    return (
      process.env.NODE_ENV !== "production"
        ? this.dep.track({
            target: this,
            type: "get",
            key: "value",
          })
        : this.dep.track(),
      this._value
    );
  }
  set value(t) {
    const o = this._rawValue,
      n = this.__v_isShallow || me(t) || Ze(t);
    (t = n ? t : H(t)),
      ft(t, o) &&
        ((this._rawValue = t),
        (this._value = n ? t : fe(t)),
        process.env.NODE_ENV !== "production"
          ? this.dep.trigger({
              target: this,
              type: "set",
              key: "value",
              newValue: t,
              oldValue: o,
            })
          : this.dep.trigger());
  }
}
function Pt(e) {
  return se(e) ? e.value : e;
}
const Yi = {
  get: (e, t, o) => (t === "__v_raw" ? e : Pt(Reflect.get(e, t, o))),
  set: (e, t, o, n) => {
    const s = e[t];
    return se(s) && !se(o) ? ((s.value = o), !0) : Reflect.set(e, t, o, n);
  },
};
function pr(e) {
  return bt(e) ? e : new Proxy(e, Yi);
}
class zi {
  constructor(t, o, n) {
    (this.fn = t),
      (this.setter = o),
      (this._value = void 0),
      (this.dep = new Un(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Qt - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !o),
      (this.isSSR = n);
  }
  /**
   * @internal
   */
  notify() {
    if (
      ((this.flags |= 16),
      !(this.flags & 8) && // avoid infinite self recursion
        G !== this)
    )
      return Zs(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t =
      process.env.NODE_ENV !== "production"
        ? this.dep.track({
            target: this,
            type: "get",
            key: "value",
          })
        : this.dep.track();
    return tr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter
      ? this.setter(t)
      : process.env.NODE_ENV !== "production" &&
        Ke("Write operation failed: computed value is readonly");
  }
}
function Qi(e, t, o = !1) {
  let n, s;
  F(e) ? (n = e) : ((n = e.get), (s = e.set));
  const r = new zi(n, s, o);
  return process.env.NODE_ENV, r;
}
const _o = {},
  Co = /* @__PURE__ */ new WeakMap();
let mt;
function Xi(e, t = !1, o = mt) {
  if (o) {
    let n = Co.get(o);
    n || Co.set(o, (n = [])), n.push(e);
  } else
    process.env.NODE_ENV !== "production" &&
      !t &&
      Ke(
        "onWatcherCleanup() was called when there was no active watcher to associate with."
      );
}
function Zi(e, t, o = Y) {
  const {
      immediate: n,
      deep: s,
      once: r,
      scheduler: i,
      augmentJob: l,
      call: u,
    } = o,
    p = (D) => {
      (o.onWarn || Ke)(
        "Invalid watch source: ",
        D,
        "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
      );
    },
    d = (D) => (s ? D : me(D) || s === !1 || s === 0 ? Qe(D, 1) : Qe(D));
  let a,
    _,
    m,
    V,
    w = !1,
    $ = !1;
  if (
    (se(e)
      ? ((_ = () => e.value), (w = me(e)))
      : bt(e)
      ? ((_ = () => d(e)), (w = !0))
      : P(e)
      ? (($ = !0),
        (w = e.some((D) => bt(D) || me(D))),
        (_ = () =>
          e.map((D) => {
            if (se(D)) return D.value;
            if (bt(D)) return d(D);
            if (F(D)) return u ? u(D, 2) : D();
            process.env.NODE_ENV !== "production" && p(D);
          })))
      : F(e)
      ? t
        ? (_ = u ? () => u(e, 2) : e)
        : (_ = () => {
            if (m) {
              et();
              try {
                m();
              } finally {
                tt();
              }
            }
            const D = mt;
            mt = a;
            try {
              return u ? u(e, 3, [V]) : e(V);
            } finally {
              mt = D;
            }
          })
      : ((_ = le), process.env.NODE_ENV !== "production" && p(e)),
    t && s)
  ) {
    const D = _,
      ee = s === !0 ? 1 / 0 : s;
    _ = () => Qe(D(), ee);
  }
  const A = xi(),
    J = () => {
      a.stop(), A && A.active && $n(A.effects, a);
    };
  if (r && t) {
    const D = t;
    t = (...ee) => {
      D(...ee), J();
    };
  }
  let T = $ ? new Array(e.length).fill(_o) : _o;
  const X = (D) => {
    if (!(!(a.flags & 1) || (!a.dirty && !D)))
      if (t) {
        const ee = a.run();
        if (s || w || ($ ? ee.some((te, ue) => ft(te, T[ue])) : ft(ee, T))) {
          m && m();
          const te = mt;
          mt = a;
          try {
            const ue = [
              ee,
              // pass undefined as the old value when it's changed for the first time
              T === _o ? void 0 : $ && T[0] === _o ? [] : T,
              V,
            ];
            u
              ? u(t, 3, ue)
              : // @ts-expect-error
                t(...ue),
              (T = ee);
          } finally {
            mt = te;
          }
        }
      } else a.run();
  };
  return (
    l && l(X),
    (a = new Qs(_)),
    (a.scheduler = i ? () => i(X, !1) : X),
    (V = (D) => Xi(D, !1, a)),
    (m = a.onStop =
      () => {
        const D = Co.get(a);
        if (D) {
          if (u) u(D, 4);
          else for (const ee of D) ee();
          Co.delete(a);
        }
      }),
    process.env.NODE_ENV !== "production" &&
      ((a.onTrack = o.onTrack), (a.onTrigger = o.onTrigger)),
    t ? (n ? X(!0) : (T = a.run())) : i ? i(X.bind(null, !0), !0) : a.run(),
    (J.pause = a.pause.bind(a)),
    (J.resume = a.resume.bind(a)),
    (J.stop = J),
    J
  );
}
function Qe(e, t = 1 / 0, o) {
  if (
    t <= 0 ||
    !z(e) ||
    e.__v_skip ||
    ((o = o || /* @__PURE__ */ new Set()), o.has(e))
  )
    return e;
  if ((o.add(e), t--, se(e))) Qe(e.value, t, o);
  else if (P(e)) for (let n = 0; n < e.length; n++) Qe(e[n], t, o);
  else if (Uo(e) || gt(e))
    e.forEach((n) => {
      Qe(n, t, o);
    });
  else if (Ho(e)) {
    for (const n in e) Qe(e[n], t, o);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Qe(e[n], t, o);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
const yt = [];
function mo(e) {
  yt.push(e);
}
function go() {
  yt.pop();
}
let cn = !1;
function O(e, ...t) {
  if (cn) return;
  (cn = !0), et();
  const o = yt.length ? yt[yt.length - 1].component : null,
    n = o && o.appContext.config.warnHandler,
    s = qi();
  if (n)
    Mt(n, o, 11, [
      // eslint-disable-next-line no-restricted-syntax
      e +
        t
          .map((r) => {
            var i, l;
            return (l = (i = r.toString) == null ? void 0 : i.call(r)) != null
              ? l
              : JSON.stringify(r);
          })
          .join(""),
      o && o.proxy,
      s.map(({ vnode: r }) => `at <${qo(o, r.type)}>`).join(`
`),
      s,
    ]);
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length &&
      r.push(
        `
`,
        ...el(s)
      ),
      console.warn(...r);
  }
  tt(), (cn = !1);
}
function qi() {
  let e = yt[yt.length - 1];
  if (!e) return [];
  const t = [];
  for (; e; ) {
    const o = t[0];
    o && o.vnode === e
      ? o.recurseCount++
      : t.push({
          vnode: e,
          recurseCount: 0,
        });
    const n = e.component && e.component.parent;
    e = n && n.vnode;
  }
  return t;
}
function el(e) {
  const t = [];
  return (
    e.forEach((o, n) => {
      t.push(
        ...(n === 0
          ? []
          : [
              `
`,
            ]),
        ...tl(o)
      );
    }),
    t
  );
}
function tl({ vnode: e, recurseCount: t }) {
  const o = t > 0 ? `... (${t} recursive calls)` : "",
    n = e.component ? e.component.parent == null : !1,
    s = ` at <${qo(e.component, e.type, n)}`,
    r = ">" + o;
  return e.props ? [s, ...ol(e.props), r] : [s + r];
}
function ol(e) {
  const t = [],
    o = Object.keys(e);
  return (
    o.slice(0, 3).forEach((n) => {
      t.push(...hr(n, e[n]));
    }),
    o.length > 3 && t.push(" ..."),
    t
  );
}
function hr(e, t, o) {
  return oe(t)
    ? ((t = JSON.stringify(t)), o ? t : [`${e}=${t}`])
    : typeof t == "number" || typeof t == "boolean" || t == null
    ? o
      ? t
      : [`${e}=${t}`]
    : se(t)
    ? ((t = hr(e, H(t.value), !0)), o ? t : [`${e}=Ref<`, t, ">"])
    : F(t)
    ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`]
    : ((t = H(t)), o ? t : [`${e}=`, t]);
}
const Hn = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function",
};
function Mt(e, t, o, n) {
  try {
    return n ? e(...n) : e();
  } catch (s) {
    io(s, t, o);
  }
}
function We(e, t, o, n) {
  if (F(e)) {
    const s = Mt(e, t, o, n);
    return (
      s &&
        An(s) &&
        s.catch((r) => {
          io(r, t, o);
        }),
      s
    );
  }
  if (P(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++) s.push(We(e[r], t, o, n));
    return s;
  } else
    process.env.NODE_ENV !== "production" &&
      O(
        `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
      );
}
function io(e, t, o, n = !0) {
  const s = t ? t.vnode : null,
    { errorHandler: r, throwUnhandledErrorInProduction: i } =
      (t && t.appContext.config) || Y;
  if (t) {
    let l = t.parent;
    const u = t.proxy,
      p =
        process.env.NODE_ENV !== "production"
          ? Hn[o]
          : `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let a = 0; a < d.length; a++) if (d[a](e, u, p) === !1) return;
      }
      l = l.parent;
    }
    if (r) {
      et(), Mt(r, null, 10, [e, u, p]), tt();
      return;
    }
  }
  nl(e, o, s, n, i);
}
function nl(e, t, o, n = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = Hn[t];
    if (
      (o && mo(o),
      O(`Unhandled error${r ? ` during execution of ${r}` : ""}`),
      o && go(),
      n)
    )
      throw e;
    console.error(e);
  } else {
    if (s) throw e;
    console.error(e);
  }
}
const he = [];
let ke = -1;
const Tt = [];
let lt = null,
  St = 0;
const _r = /* @__PURE__ */ Promise.resolve();
let To = null;
const sl = 100;
function Ln(e) {
  const t = To || _r;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function rl(e) {
  let t = ke + 1,
    o = he.length;
  for (; t < o; ) {
    const n = (t + o) >>> 1,
      s = he[n],
      r = Zt(s);
    r < e || (r === e && s.flags & 2) ? (t = n + 1) : (o = n);
  }
  return t;
}
function Go(e) {
  if (!(e.flags & 1)) {
    const t = Zt(e),
      o = he[he.length - 1];
    !o || // fast path when the job id is larger than the tail
    (!(e.flags & 2) && t >= Zt(o))
      ? he.push(e)
      : he.splice(rl(t), 0, e),
      (e.flags |= 1),
      mr();
  }
}
function mr() {
  To || (To = _r.then(br));
}
function gr(e) {
  P(e)
    ? Tt.push(...e)
    : lt && e.id === -1
    ? lt.splice(St + 1, 0, e)
    : e.flags & 1 || (Tt.push(e), (e.flags |= 1)),
    mr();
}
function as(e, t, o = ke + 1) {
  for (
    process.env.NODE_ENV !== "production" &&
    (t = t || /* @__PURE__ */ new Map());
    o < he.length;
    o++
  ) {
    const n = he[o];
    if (n && n.flags & 2) {
      if (
        (e && n.id !== e.uid) ||
        (process.env.NODE_ENV !== "production" && Bn(t, n))
      )
        continue;
      he.splice(o, 1),
        o--,
        n.flags & 4 && (n.flags &= -2),
        n(),
        n.flags & 4 || (n.flags &= -2);
    }
  }
}
function vr(e) {
  if (Tt.length) {
    const t = [...new Set(Tt)].sort((o, n) => Zt(o) - Zt(n));
    if (((Tt.length = 0), lt)) {
      lt.push(...t);
      return;
    }
    for (
      lt = t,
        process.env.NODE_ENV !== "production" &&
          (e = e || /* @__PURE__ */ new Map()),
        St = 0;
      St < lt.length;
      St++
    ) {
      const o = lt[St];
      (process.env.NODE_ENV !== "production" && Bn(e, o)) ||
        (o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), (o.flags &= -2));
    }
    (lt = null), (St = 0);
  }
}
const Zt = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function br(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (o) => Bn(e, o) : le;
  try {
    for (ke = 0; ke < he.length; ke++) {
      const o = he[ke];
      if (o && !(o.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(o)) continue;
        o.flags & 4 && (o.flags &= -2),
          Mt(o, o.i, o.i ? 15 : 14),
          o.flags & 4 || (o.flags &= -2);
      }
    }
  } finally {
    for (; ke < he.length; ke++) {
      const o = he[ke];
      o && (o.flags &= -2);
    }
    (ke = -1),
      (he.length = 0),
      vr(e),
      (To = null),
      (he.length || Tt.length) && br(e);
  }
}
function Bn(e, t) {
  const o = e.get(t) || 0;
  if (o > sl) {
    const n = t.i,
      s = n && qr(n.type);
    return (
      io(
        `Maximum recursive updates exceeded${
          s ? ` in component <${s}>` : ""
        }. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ),
      !0
    );
  }
  return e.set(t, o + 1), !1;
}
let Ue = !1;
const vo = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" &&
  (so().__VUE_HMR_RUNTIME__ = {
    createRecord: un(yr),
    rerender: un(cl),
    reload: un(ul),
  });
const Nt = /* @__PURE__ */ new Map();
function il(e) {
  const t = e.type.__hmrId;
  let o = Nt.get(t);
  o || (yr(t, e.type), (o = Nt.get(t))), o.instances.add(e);
}
function ll(e) {
  Nt.get(e.type.__hmrId).instances.delete(e);
}
function yr(e, t) {
  return Nt.has(e)
    ? !1
    : (Nt.set(e, {
        initialDef: $o(t),
        instances: /* @__PURE__ */ new Set(),
      }),
      !0);
}
function $o(e) {
  return ei(e) ? e.__vccOpts : e;
}
function cl(e, t) {
  const o = Nt.get(e);
  o &&
    ((o.initialDef.render = t),
    [...o.instances].forEach((n) => {
      t && ((n.render = t), ($o(n.type).render = t)),
        (n.renderCache = []),
        (Ue = !0),
        n.update(),
        (Ue = !1);
    }));
}
function ul(e, t) {
  const o = Nt.get(e);
  if (!o) return;
  (t = $o(t)), fs(o.initialDef, t);
  const n = [...o.instances];
  for (let s = 0; s < n.length; s++) {
    const r = n[s],
      i = $o(r.type);
    let l = vo.get(i);
    l ||
      (i !== o.initialDef && fs(i, t),
      vo.set(i, (l = /* @__PURE__ */ new Set()))),
      l.add(r),
      r.appContext.propsCache.delete(r.type),
      r.appContext.emitsCache.delete(r.type),
      r.appContext.optionsCache.delete(r.type),
      r.ceReload
        ? (l.add(r), r.ceReload(t.styles), l.delete(r))
        : r.parent
        ? Go(() => {
            (Ue = !0), r.parent.update(), (Ue = !1), l.delete(r);
          })
        : r.appContext.reload
        ? r.appContext.reload()
        : typeof window < "u"
        ? window.location.reload()
        : console.warn(
            "[HMR] Root or manually mounted instance modified. Full reload required."
          ),
      r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  gr(() => {
    vo.clear();
  });
}
function fs(e, t) {
  ne(e, t);
  for (const o in e) o !== "__file" && !(o in t) && delete e[o];
}
function un(e) {
  return (t, o) => {
    try {
      return e(t, o);
    } catch (n) {
      console.error(n),
        console.warn(
          "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
        );
    }
  };
}
let Te,
  Bt = [],
  yn = !1;
function lo(e, ...t) {
  Te ? Te.emit(e, ...t) : yn || Bt.push({ event: e, args: t });
}
function Kn(e, t) {
  var o, n;
  (Te = e),
    Te
      ? ((Te.enabled = !0),
        Bt.forEach(({ event: s, args: r }) => Te.emit(s, ...r)),
        (Bt = []))
      : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window <
          "u" && // some envs mock window but not fully
        window.HTMLElement && // also exclude jsdom
        // eslint-disable-next-line no-restricted-syntax
        !(
          (n = (o = window.navigator) == null ? void 0 : o.userAgent) != null &&
          n.includes("jsdom")
        )
      ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ =
          t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
          Kn(r, t);
        }),
        setTimeout(() => {
          Te || ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null), (yn = !0), (Bt = []));
        }, 3e3))
      : ((yn = !0), (Bt = []));
}
function al(e, t) {
  lo("app:init", e, t, {
    Fragment: q,
    Text: co,
    Comment: Ve,
    Static: Eo,
  });
}
function fl(e) {
  lo("app:unmount", e);
}
const dl = /* @__PURE__ */ Wn(
    "component:added"
    /* COMPONENT_ADDED */
  ),
  Er = /* @__PURE__ */ Wn(
    "component:updated"
    /* COMPONENT_UPDATED */
  ),
  pl = /* @__PURE__ */ Wn(
    "component:removed"
    /* COMPONENT_REMOVED */
  ),
  hl = (e) => {
    Te &&
      typeof Te.cleanupBuffer == "function" && // remove the component if it wasn't buffered
      !Te.cleanupBuffer(e) &&
      pl(e);
  };
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Wn(e) {
  return (t) => {
    lo(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const _l = /* @__PURE__ */ Nr(
    "perf:start"
    /* PERFORMANCE_START */
  ),
  ml = /* @__PURE__ */ Nr(
    "perf:end"
    /* PERFORMANCE_END */
  );
function Nr(e) {
  return (t, o, n) => {
    lo(e, t.appContext.app, t.uid, t, o, n);
  };
}
function gl(e, t, o) {
  lo("component:emit", e.appContext.app, e, t, o);
}
let _e = null,
  Or = null;
function Ao(e) {
  const t = _e;
  return (_e = e), (Or = (e && e.type.__scopeId) || null), t;
}
function vl(e, t = _e, o) {
  if (!t || e._n) return e;
  const n = (...s) => {
    n._d && Os(-1);
    const r = Ao(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Ao(r), n._d && Os(1);
    }
    return process.env.NODE_ENV !== "production" && Er(t), i;
  };
  return (n._n = !0), (n._c = !0), (n._d = !0), n;
}
function wr(e) {
  li(e) && O("Do not use built-in directive ids as custom directive id: " + e);
}
function re(e, t) {
  if (_e === null)
    return (
      process.env.NODE_ENV !== "production" &&
        O("withDirectives can only be used inside render functions."),
      e
    );
  const o = Zo(_e),
    n = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [r, i, l, u = Y] = t[s];
    r &&
      (F(r) &&
        (r = {
          mounted: r,
          updated: r,
        }),
      r.deep && Qe(i),
      n.push({
        dir: r,
        instance: o,
        value: i,
        oldValue: void 0,
        arg: l,
        modifiers: u,
      }));
  }
  return e;
}
function pt(e, t, o, n) {
  const s = e.dirs,
    r = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    r && (l.oldValue = r[i].value);
    let u = l.dir[n];
    u && (et(), We(u, o, 8, [e.el, l, e, t]), tt());
  }
}
const bl = Symbol("_vte"),
  yl = (e) => e.__isTeleport;
function Jn(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Jn(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function El(e, t) {
  return F(e)
    ? // #8236: extend call and options.name access are considered side-effects
      // by Rollup, so we have to wrap it in a pure-annotated IIFE.
      ne({ name: e.name }, t, { setup: e })
    : e;
}
function xr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Nl = /* @__PURE__ */ new WeakSet();
function Po(e, t, o, n, s = !1) {
  if (P(e)) {
    e.forEach((V, w) => Po(V, t && (P(t) ? t[w] : t), o, n, s));
    return;
  }
  if (Yt(n) && !s) {
    n.shapeFlag & 512 &&
      n.type.__asyncResolved &&
      n.component.subTree.component &&
      Po(e, t, o, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? Zo(n.component) : n.el,
    i = s ? null : r,
    { i: l, r: u } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    O(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const p = t && t.r,
    d = l.refs === Y ? (l.refs = {}) : l.refs,
    a = l.setupState,
    _ = H(a),
    m =
      a === Y
        ? () => !1
        : (V) =>
            process.env.NODE_ENV !== "production" &&
            (W(_, V) &&
              !se(_[V]) &&
              O(
                `Template ref "${V}" used on a non-ref value. It will not work in the production build.`
              ),
            Nl.has(_[V]))
              ? !1
              : W(_, V);
  if (
    (p != null &&
      p !== u &&
      (oe(p)
        ? ((d[p] = null), m(p) && (a[p] = null))
        : se(p) && (p.value = null)),
    F(u))
  )
    Mt(u, l, 12, [i, d]);
  else {
    const V = oe(u),
      w = se(u);
    if (V || w) {
      const $ = () => {
        if (e.f) {
          const A = V ? (m(u) ? a[u] : d[u]) : u.value;
          s
            ? P(A) && $n(A, r)
            : P(A)
            ? A.includes(r) || A.push(r)
            : V
            ? ((d[u] = [r]), m(u) && (a[u] = d[u]))
            : ((u.value = [r]), e.k && (d[e.k] = u.value));
        } else
          V
            ? ((d[u] = i), m(u) && (a[u] = i))
            : w
            ? ((u.value = i), e.k && (d[e.k] = i))
            : process.env.NODE_ENV !== "production" &&
              O("Invalid template ref type:", u, `(${typeof u})`);
      };
      i ? (($.id = -1), Ne($, o)) : $();
    } else
      process.env.NODE_ENV !== "production" &&
        O("Invalid template ref type:", u, `(${typeof u})`);
  }
}
so().requestIdleCallback;
so().cancelIdleCallback;
const Yt = (e) => !!e.type.__asyncLoader,
  Gn = (e) => e.type.__isKeepAlive;
function Ol(e, t) {
  Vr(e, "a", t);
}
function wl(e, t) {
  Vr(e, "da", t);
}
function Vr(e, t, o = ce) {
  const n =
    e.__wdc ||
    (e.__wdc = () => {
      let s = o;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((Yo(t, n, o), o)) {
    let s = o.parent;
    for (; s && s.parent; )
      Gn(s.parent.vnode) && xl(n, t, o, s), (s = s.parent);
  }
}
function xl(e, t, o, n) {
  const s = Yo(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Dr(() => {
    $n(n[t], s);
  }, o);
}
function Yo(e, t, o = ce, n = !1) {
  if (o) {
    const s = o[e] || (o[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...i) => {
          et();
          const l = uo(o),
            u = We(t, o, e, i);
          return l(), tt(), u;
        });
    return n ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = _t(Hn[e].replace(/ hook$/, ""));
    O(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ot =
    (e) =>
    (t, o = ce) => {
      (!eo || e === "sp") && Yo(e, (...n) => t(...n), o);
    },
  Vl = ot("bm"),
  zo = ot("m"),
  Dl = ot("bu"),
  Sl = ot("u"),
  Cl = ot("bum"),
  Dr = ot("um"),
  Tl = ot("sp"),
  $l = ot("rtg"),
  Al = ot("rtc");
function Pl(e, t = ce) {
  Yo("ec", e, t);
}
const Rl = Symbol.for("v-ndc");
function ae(e, t, o, n) {
  let s;
  const r = o,
    i = P(e);
  if (i || oe(e)) {
    const l = i && bt(e);
    let u = !1;
    l && ((u = !me(e)), (e = Ko(e))), (s = new Array(e.length));
    for (let p = 0, d = e.length; p < d; p++)
      s[p] = t(u ? fe(e[p]) : e[p], p, void 0, r);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" &&
      !Number.isInteger(e) &&
      O(`The v-for range expect an integer value but got ${e}.`),
      (s = new Array(e));
    for (let l = 0; l < e; l++) s[l] = t(l + 1, l, void 0, r);
  } else if (z(e))
    if (e[Symbol.iterator]) s = Array.from(e, (l, u) => t(l, u, void 0, r));
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let u = 0, p = l.length; u < p; u++) {
        const d = l[u];
        s[u] = t(e[d], d, u, r);
      }
    }
  else s = [];
  return s;
}
const En = (e) => (e ? (Xr(e) ? Zo(e) : En(e.parent)) : null),
  Et =
    // Move PURE marker to new line to workaround compiler discarding it
    // due to type annotation
    /* @__PURE__ */ ne(/* @__PURE__ */ Object.create(null), {
      $: (e) => e,
      $el: (e) => e.vnode.el,
      $data: (e) => e.data,
      $props: (e) =>
        process.env.NODE_ENV !== "production" ? je(e.props) : e.props,
      $attrs: (e) =>
        process.env.NODE_ENV !== "production" ? je(e.attrs) : e.attrs,
      $slots: (e) =>
        process.env.NODE_ENV !== "production" ? je(e.slots) : e.slots,
      $refs: (e) =>
        process.env.NODE_ENV !== "production" ? je(e.refs) : e.refs,
      $parent: (e) => En(e.parent),
      $root: (e) => En(e.root),
      $host: (e) => e.ce,
      $emit: (e) => e.emit,
      $options: (e) => Tr(e),
      $forceUpdate: (e) =>
        e.f ||
        (e.f = () => {
          Go(e.update);
        }),
      $nextTick: (e) => e.n || (e.n = Ln.bind(e.proxy)),
      $watch: (e) => pc.bind(e),
    }),
  Yn = (e) => e === "_" || e === "$",
  an = (e, t) => e !== Y && !e.__isScriptSetup && W(e, t),
  Sr = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: o,
        setupState: n,
        data: s,
        props: r,
        accessCache: i,
        type: l,
        appContext: u,
      } = e;
      if (process.env.NODE_ENV !== "production" && t === "__isVue") return !0;
      let p;
      if (t[0] !== "$") {
        const m = i[t];
        if (m !== void 0)
          switch (m) {
            case 1:
              return n[t];
            case 2:
              return s[t];
            case 4:
              return o[t];
            case 3:
              return r[t];
          }
        else {
          if (an(n, t)) return (i[t] = 1), n[t];
          if (s !== Y && W(s, t)) return (i[t] = 2), s[t];
          if (
            // only cache other properties when instance has declared (thus stable)
            // props
            (p = e.propsOptions[0]) &&
            W(p, t)
          )
            return (i[t] = 3), r[t];
          if (o !== Y && W(o, t)) return (i[t] = 4), o[t];
          Nn && (i[t] = 0);
        }
      }
      const d = Et[t];
      let a, _;
      if (d)
        return (
          t === "$attrs"
            ? (ie(e.attrs, "get", ""),
              process.env.NODE_ENV !== "production" && Io())
            : process.env.NODE_ENV !== "production" &&
              t === "$slots" &&
              ie(e, "get", t),
          d(e)
        );
      if (
        // css module (injected by vue-loader)
        (a = l.__cssModules) &&
        (a = a[t])
      )
        return a;
      if (o !== Y && W(o, t)) return (i[t] = 4), o[t];
      if (
        // global properties
        ((_ = u.config.globalProperties), W(_, t))
      )
        return _[t];
      process.env.NODE_ENV !== "production" &&
        _e &&
        (!oe(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
          // to infinite warning loop
          t.indexOf("__v") !== 0) &&
        (s !== Y && Yn(t[0]) && W(s, t)
          ? O(
              `Property ${JSON.stringify(
                t
              )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
            )
          : e === _e &&
            O(
              `Property ${JSON.stringify(
                t
              )} was accessed during render but is not defined on instance.`
            ));
    },
    set({ _: e }, t, o) {
      const { data: n, setupState: s, ctx: r } = e;
      return an(s, t)
        ? ((s[t] = o), !0)
        : process.env.NODE_ENV !== "production" && s.__isScriptSetup && W(s, t)
        ? (O(`Cannot mutate <script setup> binding "${t}" from Options API.`),
          !1)
        : n !== Y && W(n, t)
        ? ((n[t] = o), !0)
        : W(e.props, t)
        ? (process.env.NODE_ENV !== "production" &&
            O(`Attempting to mutate prop "${t}". Props are readonly.`),
          !1)
        : t[0] === "$" && t.slice(1) in e
        ? (process.env.NODE_ENV !== "production" &&
            O(
              `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
            ),
          !1)
        : (process.env.NODE_ENV !== "production" &&
          t in e.appContext.config.globalProperties
            ? Object.defineProperty(r, t, {
                enumerable: !0,
                configurable: !0,
                value: o,
              })
            : (r[t] = o),
          !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: o,
          ctx: n,
          appContext: s,
          propsOptions: r,
        },
      },
      i
    ) {
      let l;
      return (
        !!o[i] ||
        (e !== Y && W(e, i)) ||
        an(t, i) ||
        ((l = r[0]) && W(l, i)) ||
        W(n, i) ||
        W(Et, i) ||
        W(s.config.globalProperties, i)
      );
    },
    defineProperty(e, t, o) {
      return (
        o.get != null
          ? (e._.accessCache[t] = 0)
          : W(o, "value") && this.set(e, t, o.value, null),
        Reflect.defineProperty(e, t, o)
      );
    },
  };
process.env.NODE_ENV !== "production" &&
  (Sr.ownKeys = (e) => (
    O(
      "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
    ),
    Reflect.ownKeys(e)
  ));
function Ml(e) {
  const t = {};
  return (
    Object.defineProperty(t, "_", {
      configurable: !0,
      enumerable: !1,
      get: () => e,
    }),
    Object.keys(Et).forEach((o) => {
      Object.defineProperty(t, o, {
        configurable: !0,
        enumerable: !1,
        get: () => Et[o](e),
        // intercepted by the proxy so no need for implementation,
        // but needed to prevent set errors
        set: le,
      });
    }),
    t
  );
}
function Il(e) {
  const {
    ctx: t,
    propsOptions: [o],
  } = e;
  o &&
    Object.keys(o).forEach((n) => {
      Object.defineProperty(t, n, {
        enumerable: !0,
        configurable: !0,
        get: () => e.props[n],
        set: le,
      });
    });
}
function kl(e) {
  const { ctx: t, setupState: o } = e;
  Object.keys(H(o)).forEach((n) => {
    if (!o.__isScriptSetup) {
      if (Yn(n[0])) {
        O(
          `setup() return property ${JSON.stringify(
            n
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, n, {
        enumerable: !0,
        configurable: !0,
        get: () => o[n],
        set: le,
      });
    }
  });
}
function ds(e) {
  return P(e) ? e.reduce((t, o) => ((t[o] = null), t), {}) : e;
}
function Fl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, o) => {
    e[o]
      ? O(`${t} property "${o}" is already defined in ${e[o]}.`)
      : (e[o] = t);
  };
}
let Nn = !0;
function jl(e) {
  const t = Tr(e),
    o = e.proxy,
    n = e.ctx;
  (Nn = !1), t.beforeCreate && ps(t.beforeCreate, e, "bc");
  const {
      // state
      data: s,
      computed: r,
      methods: i,
      watch: l,
      provide: u,
      inject: p,
      // lifecycle
      created: d,
      beforeMount: a,
      mounted: _,
      beforeUpdate: m,
      updated: V,
      activated: w,
      deactivated: $,
      beforeDestroy: A,
      beforeUnmount: J,
      destroyed: T,
      unmounted: X,
      render: D,
      renderTracked: ee,
      renderTriggered: te,
      errorCaptured: ue,
      serverPrefetch: ge,
      // public API
      expose: Je,
      inheritAttrs: nt,
      // assets
      components: Se,
      directives: ao,
      filters: es,
    } = t,
    st = process.env.NODE_ENV !== "production" ? Fl() : null;
  if (process.env.NODE_ENV !== "production") {
    const [B] = e.propsOptions;
    if (B) for (const L in B) st("Props", L);
  }
  if ((p && Ul(p, n, st), i))
    for (const B in i) {
      const L = i[B];
      F(L)
        ? (process.env.NODE_ENV !== "production"
            ? Object.defineProperty(n, B, {
                value: L.bind(o),
                configurable: !0,
                enumerable: !0,
                writable: !0,
              })
            : (n[B] = L.bind(o)),
          process.env.NODE_ENV !== "production" && st("Methods", B))
        : process.env.NODE_ENV !== "production" &&
          O(
            `Method "${B}" has type "${typeof L}" in the component definition. Did you reference the function correctly?`
          );
    }
  if (s) {
    process.env.NODE_ENV !== "production" &&
      !F(s) &&
      O(
        "The data option must be a function. Plain object usage is no longer supported."
      );
    const B = s.call(o, o);
    if (
      (process.env.NODE_ENV !== "production" &&
        An(B) &&
        O(
          "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
        ),
      !z(B))
    )
      process.env.NODE_ENV !== "production" &&
        O("data() should return an object.");
    else if (((e.data = ro(B)), process.env.NODE_ENV !== "production"))
      for (const L in B)
        st("Data", L),
          Yn(L[0]) ||
            Object.defineProperty(n, L, {
              configurable: !0,
              enumerable: !0,
              get: () => B[L],
              set: le,
            });
  }
  if (((Nn = !0), r))
    for (const B in r) {
      const L = r[B],
        Ae = F(L) ? L.bind(o, o) : F(L.get) ? L.get.bind(o, o) : le;
      process.env.NODE_ENV !== "production" &&
        Ae === le &&
        O(`Computed property "${B}" has no getter.`);
      const en =
          !F(L) && F(L.set)
            ? L.set.bind(o)
            : process.env.NODE_ENV !== "production"
            ? () => {
                O(
                  `Write operation failed: computed property "${B}" is readonly.`
                );
              }
            : le,
        It = Fo({
          get: Ae,
          set: en,
        });
      Object.defineProperty(n, B, {
        enumerable: !0,
        configurable: !0,
        get: () => It.value,
        set: (Ot) => (It.value = Ot),
      }),
        process.env.NODE_ENV !== "production" && st("Computed", B);
    }
  if (l) for (const B in l) Cr(l[B], n, o, B);
  if (u) {
    const B = F(u) ? u.call(o) : u;
    Reflect.ownKeys(B).forEach((L) => {
      Jl(L, B[L]);
    });
  }
  d && ps(d, e, "c");
  function ve(B, L) {
    P(L) ? L.forEach((Ae) => B(Ae.bind(o))) : L && B(L.bind(o));
  }
  if (
    (ve(Vl, a),
    ve(zo, _),
    ve(Dl, m),
    ve(Sl, V),
    ve(Ol, w),
    ve(wl, $),
    ve(Pl, ue),
    ve(Al, ee),
    ve($l, te),
    ve(Cl, J),
    ve(Dr, X),
    ve(Tl, ge),
    P(Je))
  )
    if (Je.length) {
      const B = e.exposed || (e.exposed = {});
      Je.forEach((L) => {
        Object.defineProperty(B, L, {
          get: () => o[L],
          set: (Ae) => (o[L] = Ae),
        });
      });
    } else e.exposed || (e.exposed = {});
  D && e.render === le && (e.render = D),
    nt != null && (e.inheritAttrs = nt),
    Se && (e.components = Se),
    ao && (e.directives = ao),
    ge && xr(e);
}
function Ul(e, t, o = le) {
  P(e) && (e = On(e));
  for (const n in e) {
    const s = e[n];
    let r;
    z(s)
      ? "default" in s
        ? (r = bo(s.from || n, s.default, !0))
        : (r = bo(s.from || n))
      : (r = bo(s)),
      se(r)
        ? Object.defineProperty(t, n, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (i) => (r.value = i),
          })
        : (t[n] = r),
      process.env.NODE_ENV !== "production" && o("Inject", n);
  }
}
function ps(e, t, o) {
  We(P(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, o);
}
function Cr(e, t, o, n) {
  let s = n.includes(".") ? Br(o, n) : () => o[n];
  if (oe(e)) {
    const r = t[e];
    F(r)
      ? dn(s, r)
      : process.env.NODE_ENV !== "production" &&
        O(`Invalid watch handler specified by key "${e}"`, r);
  } else if (F(e)) dn(s, e.bind(o));
  else if (z(e))
    if (P(e)) e.forEach((r) => Cr(r, t, o, n));
    else {
      const r = F(e.handler) ? e.handler.bind(o) : t[e.handler];
      F(r)
        ? dn(s, r, e)
        : process.env.NODE_ENV !== "production" &&
          O(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else
    process.env.NODE_ENV !== "production" &&
      O(`Invalid watch option: "${n}"`, e);
}
function Tr(e) {
  const t = e.type,
    { mixins: o, extends: n } = t,
    {
      mixins: s,
      optionsCache: r,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = r.get(t);
  let u;
  return (
    l
      ? (u = l)
      : !s.length && !o && !n
      ? (u = t)
      : ((u = {}), s.length && s.forEach((p) => Ro(u, p, i, !0)), Ro(u, t, i)),
    z(t) && r.set(t, u),
    u
  );
}
function Ro(e, t, o, n = !1) {
  const { mixins: s, extends: r } = t;
  r && Ro(e, r, o, !0), s && s.forEach((i) => Ro(e, i, o, !0));
  for (const i in t)
    if (n && i === "expose")
      process.env.NODE_ENV !== "production" &&
        O(
          '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
        );
    else {
      const l = Hl[i] || (o && o[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Hl = {
  data: hs,
  props: _s,
  emits: _s,
  // objects
  methods: Kt,
  computed: Kt,
  // lifecycle
  beforeCreate: pe,
  created: pe,
  beforeMount: pe,
  mounted: pe,
  beforeUpdate: pe,
  updated: pe,
  beforeDestroy: pe,
  beforeUnmount: pe,
  destroyed: pe,
  unmounted: pe,
  activated: pe,
  deactivated: pe,
  errorCaptured: pe,
  serverPrefetch: pe,
  // assets
  components: Kt,
  directives: Kt,
  // watch
  watch: Bl,
  // provide / inject
  provide: hs,
  inject: Ll,
};
function hs(e, t) {
  return t
    ? e
      ? function () {
          return ne(
            F(e) ? e.call(this, this) : e,
            F(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Ll(e, t) {
  return Kt(On(e), On(t));
}
function On(e) {
  if (P(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) t[e[o]] = e[o];
    return t;
  }
  return e;
}
function pe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Kt(e, t) {
  return e ? ne(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function _s(e, t) {
  return e
    ? P(e) && P(t)
      ? [.../* @__PURE__ */ new Set([...e, ...t])]
      : ne(/* @__PURE__ */ Object.create(null), ds(e), ds(t ?? {}))
    : t;
}
function Bl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = ne(/* @__PURE__ */ Object.create(null), e);
  for (const n in t) o[n] = pe(e[n], t[n]);
  return o;
}
function $r() {
  return {
    app: null,
    config: {
      isNativeTag: ri,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap(),
  };
}
let Kl = 0;
function Wl(e, t) {
  return function (n, s = null) {
    F(n) || (n = ne({}, n)),
      s != null &&
        !z(s) &&
        (process.env.NODE_ENV !== "production" &&
          O("root props passed to app.mount() must be an object."),
        (s = null));
    const r = $r(),
      i = /* @__PURE__ */ new WeakSet(),
      l = [];
    let u = !1;
    const p = (r.app = {
      _uid: Kl++,
      _component: n,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: Ds,
      get config() {
        return r.config;
      },
      set config(d) {
        process.env.NODE_ENV !== "production" &&
          O(
            "app.config cannot be replaced. Modify individual options instead."
          );
      },
      use(d, ...a) {
        return (
          i.has(d)
            ? process.env.NODE_ENV !== "production" &&
              O("Plugin has already been applied to target app.")
            : d && F(d.install)
            ? (i.add(d), d.install(p, ...a))
            : F(d)
            ? (i.add(d), d(p, ...a))
            : process.env.NODE_ENV !== "production" &&
              O(
                'A plugin must either be a function or an object with an "install" function.'
              ),
          p
        );
      },
      mixin(d) {
        return (
          r.mixins.includes(d)
            ? process.env.NODE_ENV !== "production" &&
              O(
                "Mixin has already been applied to target app" +
                  (d.name ? `: ${d.name}` : "")
              )
            : r.mixins.push(d),
          p
        );
      },
      component(d, a) {
        return (
          process.env.NODE_ENV !== "production" && Sn(d, r.config),
          a
            ? (process.env.NODE_ENV !== "production" &&
                r.components[d] &&
                O(
                  `Component "${d}" has already been registered in target app.`
                ),
              (r.components[d] = a),
              p)
            : r.components[d]
        );
      },
      directive(d, a) {
        return (
          process.env.NODE_ENV !== "production" && wr(d),
          a
            ? (process.env.NODE_ENV !== "production" &&
                r.directives[d] &&
                O(
                  `Directive "${d}" has already been registered in target app.`
                ),
              (r.directives[d] = a),
              p)
            : r.directives[d]
        );
      },
      mount(d, a, _) {
        if (u)
          process.env.NODE_ENV !== "production" &&
            O(
              "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
            );
        else {
          process.env.NODE_ENV !== "production" &&
            d.__vue_app__ &&
            O(
              "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
            );
          const m = p._ceVNode || Le(n, s);
          return (
            (m.appContext = r),
            _ === !0 ? (_ = "svg") : _ === !1 && (_ = void 0),
            process.env.NODE_ENV !== "production" &&
              (r.reload = () => {
                e(dt(m), d, _);
              }),
            e(m, d, _),
            (u = !0),
            (p._container = d),
            (d.__vue_app__ = p),
            process.env.NODE_ENV !== "production" &&
              ((p._instance = m.component), al(p, Ds)),
            Zo(m.component)
          );
        }
      },
      onUnmount(d) {
        process.env.NODE_ENV !== "production" &&
          typeof d != "function" &&
          O(
            `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
          ),
          l.push(d);
      },
      unmount() {
        u
          ? (We(l, p._instance, 16),
            e(null, p._container),
            process.env.NODE_ENV !== "production" &&
              ((p._instance = null), fl(p)),
            delete p._container.__vue_app__)
          : process.env.NODE_ENV !== "production" &&
            O("Cannot unmount an app that is not mounted.");
      },
      provide(d, a) {
        return (
          process.env.NODE_ENV !== "production" &&
            d in r.provides &&
            O(
              `App already provides property with key "${String(
                d
              )}". It will be overwritten with the new value.`
            ),
          (r.provides[d] = a),
          p
        );
      },
      runWithContext(d) {
        const a = $t;
        $t = p;
        try {
          return d();
        } finally {
          $t = a;
        }
      },
    });
    return p;
  };
}
let $t = null;
function Jl(e, t) {
  if (!ce)
    process.env.NODE_ENV !== "production" &&
      O("provide() can only be used inside setup().");
  else {
    let o = ce.provides;
    const n = ce.parent && ce.parent.provides;
    n === o && (o = ce.provides = Object.create(n)), (o[e] = t);
  }
}
function bo(e, t, o = !1) {
  const n = ce || _e;
  if (n || $t) {
    const s = $t
      ? $t._context.provides
      : n
      ? n.parent == null
        ? n.vnode.appContext && n.vnode.appContext.provides
        : n.parent.provides
      : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return o && F(t) ? t.call(n && n.proxy) : t;
    process.env.NODE_ENV !== "production" &&
      O(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" &&
      O("inject() can only be used inside setup() or functional components.");
}
const Ar = {},
  Pr = () => Object.create(Ar),
  Rr = (e) => Object.getPrototypeOf(e) === Ar;
function Gl(e, t, o, n = !1) {
  const s = {},
    r = Pr();
  (e.propsDefaults = /* @__PURE__ */ Object.create(null)), Mr(e, t, s, r);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  process.env.NODE_ENV !== "production" && kr(t || {}, s, e),
    o
      ? (e.props = n ? s : Ki(s))
      : e.type.props
      ? (e.props = s)
      : (e.props = r),
    (e.attrs = r);
}
function Yl(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function zl(e, t, o, n) {
  const {
      props: s,
      attrs: r,
      vnode: { patchFlag: i },
    } = e,
    l = H(s),
    [u] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Yl(e)) &&
    (n || i > 0) &&
    !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let a = 0; a < d.length; a++) {
        let _ = d[a];
        if (Qo(e.emitsOptions, _)) continue;
        const m = t[_];
        if (u)
          if (W(r, _)) m !== r[_] && ((r[_] = m), (p = !0));
          else {
            const V = ye(_);
            s[V] = wn(u, l, V, m, e, !1);
          }
        else m !== r[_] && ((r[_] = m), (p = !0));
      }
    }
  } else {
    Mr(e, t, s, r) && (p = !0);
    let d;
    for (const a in l)
      (!t || // for camelCase
        (!W(t, a) && // it's possible the original props was passed in as kebab-case
          // and converted to camelCase (#955)
          ((d = we(a)) === a || !W(t, d)))) &&
        (u
          ? o && // for camelCase
            (o[a] !== void 0 || // for kebab-case
              o[d] !== void 0) &&
            (s[a] = wn(u, l, a, void 0, e, !0))
          : delete s[a]);
    if (r !== l) for (const a in r) (!t || !W(t, a)) && (delete r[a], (p = !0));
  }
  p && Fe(e.attrs, "set", ""),
    process.env.NODE_ENV !== "production" && kr(t || {}, s, e);
}
function Mr(e, t, o, n) {
  const [s, r] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let u in t) {
      if (Wt(u)) continue;
      const p = t[u];
      let d;
      s && W(s, (d = ye(u)))
        ? !r || !r.includes(d)
          ? (o[d] = p)
          : ((l || (l = {}))[d] = p)
        : Qo(e.emitsOptions, u) ||
          ((!(u in n) || p !== n[u]) && ((n[u] = p), (i = !0)));
    }
  if (r) {
    const u = H(o),
      p = l || Y;
    for (let d = 0; d < r.length; d++) {
      const a = r[d];
      o[a] = wn(s, u, a, p[a], e, !W(p, a));
    }
  }
  return i;
}
function wn(e, t, o, n, s, r) {
  const i = e[o];
  if (i != null) {
    const l = W(i, "default");
    if (l && n === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && F(u)) {
        const { propsDefaults: p } = s;
        if (o in p) n = p[o];
        else {
          const d = uo(s);
          (n = p[o] = u.call(null, t)), d();
        }
      } else n = u;
      s.ce && s.ce._setProp(o, n);
    }
    i[0] &&
    /* shouldCast */
      (r && !l
        ? (n = !1)
        : i[1] &&
          /* shouldCastTrue */
          (n === "" || n === we(o)) &&
          (n = !0));
  }
  return n;
}
const Ql = /* @__PURE__ */ new WeakMap();
function Ir(e, t, o = !1) {
  const n = o ? Ql : t.propsCache,
    s = n.get(e);
  if (s) return s;
  const r = e.props,
    i = {},
    l = [];
  let u = !1;
  if (!F(e)) {
    const d = (a) => {
      u = !0;
      const [_, m] = Ir(a, t, !0);
      ne(i, _), m && l.push(...m);
    };
    !o && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d);
  }
  if (!r && !u) return z(e) && n.set(e, Ct), Ct;
  if (P(r))
    for (let d = 0; d < r.length; d++) {
      process.env.NODE_ENV !== "production" &&
        !oe(r[d]) &&
        O("props must be strings when using array syntax.", r[d]);
      const a = ye(r[d]);
      ms(a) && (i[a] = Y);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" &&
      !z(r) &&
      O("invalid props options", r);
    for (const d in r) {
      const a = ye(d);
      if (ms(a)) {
        const _ = r[d],
          m = (i[a] = P(_) || F(_) ? { type: _ } : ne({}, _)),
          V = m.type;
        let w = !1,
          $ = !0;
        if (P(V))
          for (let A = 0; A < V.length; ++A) {
            const J = V[A],
              T = F(J) && J.name;
            if (T === "Boolean") {
              w = !0;
              break;
            } else T === "String" && ($ = !1);
          }
        else w = F(V) && V.name === "Boolean";
        (m[0] =
        /* shouldCast */
          w),
          (m[1] =
          /* shouldCastTrue */
            $),
          (w || W(m, "default")) && l.push(a);
      }
    }
  }
  const p = [i, l];
  return z(e) && n.set(e, p), p;
}
function ms(e) {
  return e[0] !== "$" && !Wt(e)
    ? !0
    : (process.env.NODE_ENV !== "production" &&
        O(`Invalid prop name: "${e}" is a reserved property.`),
      !1);
}
function Xl(e) {
  return e === null
    ? "null"
    : typeof e == "function"
    ? e.name || ""
    : (typeof e == "object" && e.constructor && e.constructor.name) || "";
}
function kr(e, t, o) {
  const n = H(t),
    s = o.propsOptions[0],
    r = Object.keys(e).map((i) => ye(i));
  for (const i in s) {
    let l = s[i];
    l != null &&
      Zl(
        i,
        n[i],
        l,
        process.env.NODE_ENV !== "production" ? je(n) : n,
        !r.includes(i)
      );
  }
}
function Zl(e, t, o, n, s) {
  const { type: r, required: i, validator: l, skipCheck: u } = o;
  if (i && s) {
    O('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !u) {
      let p = !1;
      const d = P(r) ? r : [r],
        a = [];
      for (let _ = 0; _ < d.length && !p; _++) {
        const { valid: m, expectedType: V } = ec(t, d[_]);
        a.push(V || ""), (p = m);
      }
      if (!p) {
        O(tc(e, t, a));
        return;
      }
    }
    l &&
      !l(t, n) &&
      O('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const ql = /* @__PURE__ */ qe("String,Number,Boolean,Function,Symbol,BigInt");
function ec(e, t) {
  let o;
  const n = Xl(t);
  if (n === "null") o = e === null;
  else if (ql(n)) {
    const s = typeof e;
    (o = s === n.toLowerCase()), !o && s === "object" && (o = e instanceof t);
  } else
    n === "Object"
      ? (o = z(e))
      : n === "Array"
      ? (o = P(e))
      : (o = e instanceof t);
  return {
    valid: o,
    expectedType: n,
  };
}
function tc(e, t, o) {
  if (o.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let n = `Invalid prop: type check failed for prop "${e}". Expected ${o
    .map(Bo)
    .join(" | ")}`;
  const s = o[0],
    r = Pn(t),
    i = gs(t, s),
    l = gs(t, r);
  return (
    o.length === 1 && vs(s) && !oc(s, r) && (n += ` with value ${i}`),
    (n += `, got ${r} `),
    vs(r) && (n += `with value ${l}.`),
    n
  );
}
function gs(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function vs(e) {
  return ["string", "number", "boolean"].some((o) => e.toLowerCase() === o);
}
function oc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Fr = (e) => e[0] === "_" || e === "$stable",
  zn = (e) => (P(e) ? e.map(Ce) : [Ce(e)]),
  nc = (e, t, o) => {
    if (t._n) return t;
    const n = vl(
      (...s) => (
        process.env.NODE_ENV !== "production" &&
          ce &&
          (!o || o.root === ce.root) &&
          O(
            `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
          ),
        zn(t(...s))
      ),
      o
    );
    return (n._c = !1), n;
  },
  jr = (e, t, o) => {
    const n = e._ctx;
    for (const s in e) {
      if (Fr(s)) continue;
      const r = e[s];
      if (F(r)) t[s] = nc(s, r, n);
      else if (r != null) {
        process.env.NODE_ENV !== "production" &&
          O(
            `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
          );
        const i = zn(r);
        t[s] = () => i;
      }
    }
  },
  Ur = (e, t) => {
    process.env.NODE_ENV !== "production" &&
      !Gn(e.vnode) &&
      O(
        "Non-function value encountered for default slot. Prefer function slots for better performance."
      );
    const o = zn(t);
    e.slots.default = () => o;
  },
  xn = (e, t, o) => {
    for (const n in t) (o || n !== "_") && (e[n] = t[n]);
  },
  sc = (e, t, o) => {
    const n = (e.slots = Pr());
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (xn(n, t, o), o && xo(n, "_", s, !0)) : jr(t, n);
    } else t && Ur(e, t);
  },
  rc = (e, t, o) => {
    const { vnode: n, slots: s } = e;
    let r = !0,
      i = Y;
    if (n.shapeFlag & 32) {
      const l = t._;
      l
        ? process.env.NODE_ENV !== "production" && Ue
          ? (xn(s, t, o), Fe(e, "set", "$slots"))
          : o && l === 1
          ? (r = !1)
          : xn(s, t, o)
        : ((r = !t.$stable), jr(t, s)),
        (i = t);
    } else t && (Ur(e, t), (i = { default: 1 }));
    if (r) for (const l in s) !Fr(l) && i[l] == null && delete s[l];
  };
let Ht, ut;
function xt(e, t) {
  e.appContext.config.performance && Mo() && ut.mark(`vue-${t}-${e.uid}`),
    process.env.NODE_ENV !== "production" &&
      _l(e, t, Mo() ? ut.now() : Date.now());
}
function Vt(e, t) {
  if (e.appContext.config.performance && Mo()) {
    const o = `vue-${t}-${e.uid}`,
      n = o + ":end";
    ut.mark(n),
      ut.measure(`<${qo(e, e.type)}> ${t}`, o, n),
      ut.clearMarks(o),
      ut.clearMarks(n);
  }
  process.env.NODE_ENV !== "production" &&
    ml(e, t, Mo() ? ut.now() : Date.now());
}
function Mo() {
  return (
    Ht !== void 0 ||
      (typeof window < "u" && window.performance
        ? ((Ht = !0), (ut = window.performance))
        : (Ht = !1)),
    Ht
  );
}
function ic() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${
        t ? "are" : "is"
      } not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ne = yc;
function lc(e) {
  return cc(e);
}
function cc(e, t) {
  ic();
  const o = so();
  (o.__VUE__ = !0),
    process.env.NODE_ENV !== "production" &&
      Kn(o.__VUE_DEVTOOLS_GLOBAL_HOOK__, o);
  const {
      insert: n,
      remove: s,
      patchProp: r,
      createElement: i,
      createText: l,
      createComment: u,
      setText: p,
      setElementText: d,
      parentNode: a,
      nextSibling: _,
      setScopeId: m = le,
      insertStaticContent: V,
    } = e,
    w = (
      c,
      f,
      h,
      b = null,
      g = null,
      v = null,
      x = void 0,
      N = null,
      E = process.env.NODE_ENV !== "production" && Ue ? !1 : !!f.dynamicChildren
    ) => {
      if (c === f) return;
      c && !Lt(c, f) && ((b = fo(c)), rt(c, g, v, !0), (c = null)),
        f.patchFlag === -2 && ((E = !1), (f.dynamicChildren = null));
      const { type: y, ref: k, shapeFlag: S } = f;
      switch (y) {
        case co:
          $(c, f, h, b);
          break;
        case Ve:
          A(c, f, h, b);
          break;
        case Eo:
          c == null
            ? J(f, h, b, x)
            : process.env.NODE_ENV !== "production" && T(c, f, h, x);
          break;
        case q:
          ao(c, f, h, b, g, v, x, N, E);
          break;
        default:
          S & 1
            ? ee(c, f, h, b, g, v, x, N, E)
            : S & 6
            ? es(c, f, h, b, g, v, x, N, E)
            : S & 64 || S & 128
            ? y.process(c, f, h, b, g, v, x, N, E, Ft)
            : process.env.NODE_ENV !== "production" &&
              O("Invalid VNode type:", y, `(${typeof y})`);
      }
      k != null && g && Po(k, c && c.ref, v, f || c, !f);
    },
    $ = (c, f, h, b) => {
      if (c == null) n((f.el = l(f.children)), h, b);
      else {
        const g = (f.el = c.el);
        f.children !== c.children && p(g, f.children);
      }
    },
    A = (c, f, h, b) => {
      c == null ? n((f.el = u(f.children || "")), h, b) : (f.el = c.el);
    },
    J = (c, f, h, b) => {
      [c.el, c.anchor] = V(c.children, f, h, b, c.el, c.anchor);
    },
    T = (c, f, h, b) => {
      if (f.children !== c.children) {
        const g = _(c.anchor);
        D(c), ([f.el, f.anchor] = V(f.children, h, g, b));
      } else (f.el = c.el), (f.anchor = c.anchor);
    },
    X = ({ el: c, anchor: f }, h, b) => {
      let g;
      for (; c && c !== f; ) (g = _(c)), n(c, h, b), (c = g);
      n(f, h, b);
    },
    D = ({ el: c, anchor: f }) => {
      let h;
      for (; c && c !== f; ) (h = _(c)), s(c), (c = h);
      s(f);
    },
    ee = (c, f, h, b, g, v, x, N, E) => {
      f.type === "svg" ? (x = "svg") : f.type === "math" && (x = "mathml"),
        c == null ? te(f, h, b, g, v, x, N, E) : Je(c, f, g, v, x, N, E);
    },
    te = (c, f, h, b, g, v, x, N) => {
      let E, y;
      const { props: k, shapeFlag: S, transition: I, dirs: j } = c;
      if (
        ((E = c.el = i(c.type, v, k && k.is, k)),
        S & 8
          ? d(E, c.children)
          : S & 16 && ge(c.children, E, null, b, g, fn(c, v), x, N),
        j && pt(c, null, b, "created"),
        ue(E, c, c.scopeId, x, b),
        k)
      ) {
        for (const Z in k) Z !== "value" && !Wt(Z) && r(E, Z, null, k[Z], v, b);
        "value" in k && r(E, "value", null, k.value, v),
          (y = k.onVnodeBeforeMount) && Ie(y, b, c);
      }
      process.env.NODE_ENV !== "production" &&
        (xo(E, "__vnode", c, !0), xo(E, "__vueParentComponent", b, !0)),
        j && pt(c, null, b, "beforeMount");
      const K = uc(g, I);
      K && I.beforeEnter(E),
        n(E, f, h),
        ((y = k && k.onVnodeMounted) || K || j) &&
          Ne(() => {
            y && Ie(y, b, c), K && I.enter(E), j && pt(c, null, b, "mounted");
          }, g);
    },
    ue = (c, f, h, b, g) => {
      if ((h && m(c, h), b)) for (let v = 0; v < b.length; v++) m(c, b[v]);
      if (g) {
        let v = g.subTree;
        if (
          (process.env.NODE_ENV !== "production" &&
            v.patchFlag > 0 &&
            v.patchFlag & 2048 &&
            (v = Qn(v.children) || v),
          f === v || (Jr(v.type) && (v.ssContent === f || v.ssFallback === f)))
        ) {
          const x = g.vnode;
          ue(c, x, x.scopeId, x.slotScopeIds, g.parent);
        }
      }
    },
    ge = (c, f, h, b, g, v, x, N, E = 0) => {
      for (let y = E; y < c.length; y++) {
        const k = (c[y] = N ? ct(c[y]) : Ce(c[y]));
        w(null, k, f, h, b, g, v, x, N);
      }
    },
    Je = (c, f, h, b, g, v, x) => {
      const N = (f.el = c.el);
      process.env.NODE_ENV !== "production" && (N.__vnode = f);
      let { patchFlag: E, dynamicChildren: y, dirs: k } = f;
      E |= c.patchFlag & 16;
      const S = c.props || Y,
        I = f.props || Y;
      let j;
      if (
        (h && ht(h, !1),
        (j = I.onVnodeBeforeUpdate) && Ie(j, h, f, c),
        k && pt(f, c, h, "beforeUpdate"),
        h && ht(h, !0),
        process.env.NODE_ENV !== "production" &&
          Ue &&
          ((E = 0), (x = !1), (y = null)),
        ((S.innerHTML && I.innerHTML == null) ||
          (S.textContent && I.textContent == null)) &&
          d(N, ""),
        y
          ? (nt(c.dynamicChildren, y, N, h, b, fn(f, g), v),
            process.env.NODE_ENV !== "production" && yo(c, f))
          : x || Ae(c, f, N, null, h, b, fn(f, g), v, !1),
        E > 0)
      ) {
        if (E & 16) Se(N, S, I, h, g);
        else if (
          (E & 2 && S.class !== I.class && r(N, "class", null, I.class, g),
          E & 4 && r(N, "style", S.style, I.style, g),
          E & 8)
        ) {
          const K = f.dynamicProps;
          for (let Z = 0; Z < K.length; Z++) {
            const Q = K[Z],
              Ee = S[Q],
              be = I[Q];
            (be !== Ee || Q === "value") && r(N, Q, Ee, be, g, h);
          }
        }
        E & 1 && c.children !== f.children && d(N, f.children);
      } else !x && y == null && Se(N, S, I, h, g);
      ((j = I.onVnodeUpdated) || k) &&
        Ne(() => {
          j && Ie(j, h, f, c), k && pt(f, c, h, "updated");
        }, b);
    },
    nt = (c, f, h, b, g, v, x) => {
      for (let N = 0; N < f.length; N++) {
        const E = c[N],
          y = f[N],
          k =
            // oldVNode may be an errored async setup() component inside Suspense
            // which will not have a mounted element
            E.el && // - In the case of a Fragment, we need to provide the actual parent
            // of the Fragment itself so it can move its children.
            (E.type === q || // - In the case of different nodes, there is going to be a replacement
              // which also requires the correct parent container
              !Lt(E, y) || // - In the case of a component, it could contain anything.
              E.shapeFlag & 70)
              ? a(E.el)
              : // In other cases, the parent container is not actually used so we
                // just pass the block element here to avoid a DOM parentNode call.
                h;
        w(E, y, k, null, b, g, v, x, !0);
      }
    },
    Se = (c, f, h, b, g) => {
      if (f !== h) {
        if (f !== Y)
          for (const v in f) !Wt(v) && !(v in h) && r(c, v, f[v], null, g, b);
        for (const v in h) {
          if (Wt(v)) continue;
          const x = h[v],
            N = f[v];
          x !== N && v !== "value" && r(c, v, N, x, g, b);
        }
        "value" in h && r(c, "value", f.value, h.value, g);
      }
    },
    ao = (c, f, h, b, g, v, x, N, E) => {
      const y = (f.el = c ? c.el : l("")),
        k = (f.anchor = c ? c.anchor : l(""));
      let { patchFlag: S, dynamicChildren: I, slotScopeIds: j } = f;
      process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
        (Ue || S & 2048) &&
        ((S = 0), (E = !1), (I = null)),
        j && (N = N ? N.concat(j) : j),
        c == null
          ? (n(y, h, b),
            n(k, h, b),
            ge(
              // #10007
              // such fragment like `<></>` will be compiled into
              // a fragment which doesn't have a children.
              // In this case fallback to an empty array
              f.children || [],
              h,
              k,
              g,
              v,
              x,
              N,
              E
            ))
          : S > 0 &&
            S & 64 &&
            I && // #2715 the previous fragment could've been a BAILed one as a result
            // of renderSlot() with no valid children
            c.dynamicChildren
          ? (nt(c.dynamicChildren, I, h, g, v, x, N),
            process.env.NODE_ENV !== "production"
              ? yo(c, f)
              : // #2080 if the stable fragment has a key, it's a <template v-for> that may
                //  get moved around. Make sure all root level vnodes inherit el.
                // #2134 or if it's a component root, it may also get moved around
                // as the component is being moved.
                (f.key != null || (g && f === g.subTree)) &&
                yo(
                  c,
                  f,
                  !0
                  /* shallow */
                ))
          : Ae(c, f, h, k, g, v, x, N, E);
    },
    es = (c, f, h, b, g, v, x, N, E) => {
      (f.slotScopeIds = N),
        c == null
          ? f.shapeFlag & 512
            ? g.ctx.activate(f, h, b, x, E)
            : st(f, h, b, g, v, x, E)
          : ve(c, f, E);
    },
    st = (c, f, h, b, g, v, x) => {
      const N = (c.component = Cc(c, b, g));
      if (
        (process.env.NODE_ENV !== "production" && N.type.__hmrId && il(N),
        process.env.NODE_ENV !== "production" && (mo(c), xt(N, "mount")),
        Gn(c) && (N.ctx.renderer = Ft),
        process.env.NODE_ENV !== "production" && xt(N, "init"),
        Ac(N, !1, x),
        process.env.NODE_ENV !== "production" && Vt(N, "init"),
        N.asyncDep)
      ) {
        if (
          (process.env.NODE_ENV !== "production" && Ue && (c.el = null),
          g && g.registerDep(N, B, x),
          !c.el)
        ) {
          const E = (N.subTree = Le(Ve));
          A(null, E, f, h);
        }
      } else B(N, c, f, h, g, v, x);
      process.env.NODE_ENV !== "production" && (go(), Vt(N, "mount"));
    },
    ve = (c, f, h) => {
      const b = (f.component = c.component);
      if (vc(c, f, h))
        if (b.asyncDep && !b.asyncResolved) {
          process.env.NODE_ENV !== "production" && mo(f),
            L(b, f, h),
            process.env.NODE_ENV !== "production" && go();
          return;
        } else (b.next = f), b.update();
      else (f.el = c.el), (b.vnode = f);
    },
    B = (c, f, h, b, g, v, x) => {
      const N = () => {
        if (c.isMounted) {
          let { next: S, bu: I, u: j, parent: K, vnode: Z } = c;
          {
            const Re = Hr(c);
            if (Re) {
              S && ((S.el = Z.el), L(c, S, x)),
                Re.asyncDep.then(() => {
                  c.isUnmounted || N();
                });
              return;
            }
          }
          let Q = S,
            Ee;
          process.env.NODE_ENV !== "production" && mo(S || c.vnode),
            ht(c, !1),
            S ? ((S.el = Z.el), L(c, S, x)) : (S = Z),
            I && Dt(I),
            (Ee = S.props && S.props.onVnodeBeforeUpdate) && Ie(Ee, K, S, Z),
            ht(c, !0),
            process.env.NODE_ENV !== "production" && xt(c, "render");
          const be = ys(c);
          process.env.NODE_ENV !== "production" && Vt(c, "render");
          const Pe = c.subTree;
          (c.subTree = be),
            process.env.NODE_ENV !== "production" && xt(c, "patch"),
            w(
              Pe,
              be,
              // parent may have changed if it's in a teleport
              a(Pe.el),
              // anchor may have changed if it's in a fragment
              fo(Pe),
              c,
              g,
              v
            ),
            process.env.NODE_ENV !== "production" && Vt(c, "patch"),
            (S.el = be.el),
            Q === null && bc(c, be.el),
            j && Ne(j, g),
            (Ee = S.props && S.props.onVnodeUpdated) &&
              Ne(() => Ie(Ee, K, S, Z), g),
            process.env.NODE_ENV !== "production" && Er(c),
            process.env.NODE_ENV !== "production" && go();
        } else {
          let S;
          const { el: I, props: j } = f,
            { bm: K, m: Z, parent: Q, root: Ee, type: be } = c,
            Pe = Yt(f);
          ht(c, !1),
            K && Dt(K),
            !Pe && (S = j && j.onVnodeBeforeMount) && Ie(S, Q, f),
            ht(c, !0);
          {
            Ee.ce && Ee.ce._injectChildStyle(be),
              process.env.NODE_ENV !== "production" && xt(c, "render");
            const Re = (c.subTree = ys(c));
            process.env.NODE_ENV !== "production" && Vt(c, "render"),
              process.env.NODE_ENV !== "production" && xt(c, "patch"),
              w(null, Re, h, b, c, g, v),
              process.env.NODE_ENV !== "production" && Vt(c, "patch"),
              (f.el = Re.el);
          }
          if ((Z && Ne(Z, g), !Pe && (S = j && j.onVnodeMounted))) {
            const Re = f;
            Ne(() => Ie(S, Q, Re), g);
          }
          (f.shapeFlag & 256 ||
            (Q && Yt(Q.vnode) && Q.vnode.shapeFlag & 256)) &&
            c.a &&
            Ne(c.a, g),
            (c.isMounted = !0),
            process.env.NODE_ENV !== "production" && dl(c),
            (f = h = b = null);
        }
      };
      c.scope.on();
      const E = (c.effect = new Qs(N));
      c.scope.off();
      const y = (c.update = E.run.bind(E)),
        k = (c.job = E.runIfDirty.bind(E));
      (k.i = c),
        (k.id = c.uid),
        (E.scheduler = () => Go(k)),
        ht(c, !0),
        process.env.NODE_ENV !== "production" &&
          ((E.onTrack = c.rtc ? (S) => Dt(c.rtc, S) : void 0),
          (E.onTrigger = c.rtg ? (S) => Dt(c.rtg, S) : void 0)),
        y();
    },
    L = (c, f, h) => {
      f.component = c;
      const b = c.vnode.props;
      (c.vnode = f),
        (c.next = null),
        zl(c, f.props, b, h),
        rc(c, f.children, h),
        et(),
        as(c),
        tt();
    },
    Ae = (c, f, h, b, g, v, x, N, E = !1) => {
      const y = c && c.children,
        k = c ? c.shapeFlag : 0,
        S = f.children,
        { patchFlag: I, shapeFlag: j } = f;
      if (I > 0) {
        if (I & 128) {
          It(y, S, h, b, g, v, x, N, E);
          return;
        } else if (I & 256) {
          en(y, S, h, b, g, v, x, N, E);
          return;
        }
      }
      j & 8
        ? (k & 16 && kt(y, g, v), S !== y && d(h, S))
        : k & 16
        ? j & 16
          ? It(y, S, h, b, g, v, x, N, E)
          : kt(y, g, v, !0)
        : (k & 8 && d(h, ""), j & 16 && ge(S, h, b, g, v, x, N, E));
    },
    en = (c, f, h, b, g, v, x, N, E) => {
      (c = c || Ct), (f = f || Ct);
      const y = c.length,
        k = f.length,
        S = Math.min(y, k);
      let I;
      for (I = 0; I < S; I++) {
        const j = (f[I] = E ? ct(f[I]) : Ce(f[I]));
        w(c[I], j, h, null, g, v, x, N, E);
      }
      y > k ? kt(c, g, v, !0, !1, S) : ge(f, h, b, g, v, x, N, E, S);
    },
    It = (c, f, h, b, g, v, x, N, E) => {
      let y = 0;
      const k = f.length;
      let S = c.length - 1,
        I = k - 1;
      for (; y <= S && y <= I; ) {
        const j = c[y],
          K = (f[y] = E ? ct(f[y]) : Ce(f[y]));
        if (Lt(j, K)) w(j, K, h, null, g, v, x, N, E);
        else break;
        y++;
      }
      for (; y <= S && y <= I; ) {
        const j = c[S],
          K = (f[I] = E ? ct(f[I]) : Ce(f[I]));
        if (Lt(j, K)) w(j, K, h, null, g, v, x, N, E);
        else break;
        S--, I--;
      }
      if (y > S) {
        if (y <= I) {
          const j = I + 1,
            K = j < k ? f[j].el : b;
          for (; y <= I; )
            w(null, (f[y] = E ? ct(f[y]) : Ce(f[y])), h, K, g, v, x, N, E), y++;
        }
      } else if (y > I) for (; y <= S; ) rt(c[y], g, v, !0), y++;
      else {
        const j = y,
          K = y,
          Z = /* @__PURE__ */ new Map();
        for (y = K; y <= I; y++) {
          const de = (f[y] = E ? ct(f[y]) : Ce(f[y]));
          de.key != null &&
            (process.env.NODE_ENV !== "production" &&
              Z.has(de.key) &&
              O(
                "Duplicate keys found during update:",
                JSON.stringify(de.key),
                "Make sure keys are unique."
              ),
            Z.set(de.key, y));
        }
        let Q,
          Ee = 0;
        const be = I - K + 1;
        let Pe = !1,
          Re = 0;
        const jt = new Array(be);
        for (y = 0; y < be; y++) jt[y] = 0;
        for (y = j; y <= S; y++) {
          const de = c[y];
          if (Ee >= be) {
            rt(de, g, v, !0);
            continue;
          }
          let Me;
          if (de.key != null) Me = Z.get(de.key);
          else
            for (Q = K; Q <= I; Q++)
              if (jt[Q - K] === 0 && Lt(de, f[Q])) {
                Me = Q;
                break;
              }
          Me === void 0
            ? rt(de, g, v, !0)
            : ((jt[Me - K] = y + 1),
              Me >= Re ? (Re = Me) : (Pe = !0),
              w(de, f[Me], h, null, g, v, x, N, E),
              Ee++);
        }
        const os = Pe ? ac(jt) : Ct;
        for (Q = os.length - 1, y = be - 1; y >= 0; y--) {
          const de = K + y,
            Me = f[de],
            ns = de + 1 < k ? f[de + 1].el : b;
          jt[y] === 0
            ? w(null, Me, h, ns, g, v, x, N, E)
            : Pe && (Q < 0 || y !== os[Q] ? Ot(Me, h, ns, 2) : Q--);
        }
      }
    },
    Ot = (c, f, h, b, g = null) => {
      const { el: v, type: x, transition: N, children: E, shapeFlag: y } = c;
      if (y & 6) {
        Ot(c.component.subTree, f, h, b);
        return;
      }
      if (y & 128) {
        c.suspense.move(f, h, b);
        return;
      }
      if (y & 64) {
        x.move(c, f, h, Ft);
        return;
      }
      if (x === q) {
        n(v, f, h);
        for (let S = 0; S < E.length; S++) Ot(E[S], f, h, b);
        n(c.anchor, f, h);
        return;
      }
      if (x === Eo) {
        X(c, f, h);
        return;
      }
      if (b !== 2 && y & 1 && N)
        if (b === 0) N.beforeEnter(v), n(v, f, h), Ne(() => N.enter(v), g);
        else {
          const { leave: S, delayLeave: I, afterLeave: j } = N,
            K = () => n(v, f, h),
            Z = () => {
              S(v, () => {
                K(), j && j();
              });
            };
          I ? I(v, K, Z) : Z();
        }
      else n(v, f, h);
    },
    rt = (c, f, h, b = !1, g = !1) => {
      const {
        type: v,
        props: x,
        ref: N,
        children: E,
        dynamicChildren: y,
        shapeFlag: k,
        patchFlag: S,
        dirs: I,
        cacheIndex: j,
      } = c;
      if (
        (S === -2 && (g = !1),
        N != null && Po(N, null, h, c, !0),
        j != null && (f.renderCache[j] = void 0),
        k & 256)
      ) {
        f.ctx.deactivate(c);
        return;
      }
      const K = k & 1 && I,
        Z = !Yt(c);
      let Q;
      if ((Z && (Q = x && x.onVnodeBeforeUnmount) && Ie(Q, f, c), k & 6))
        si(c.component, h, b);
      else {
        if (k & 128) {
          c.suspense.unmount(h, b);
          return;
        }
        K && pt(c, null, f, "beforeUnmount"),
          k & 64
            ? c.type.remove(c, f, h, Ft, b)
            : y && // #5154
              // when v-once is used inside a block, setBlockTracking(-1) marks the
              // parent block with hasOnce: true
              // so that it doesn't take the fast path during unmount - otherwise
              // components nested in v-once are never unmounted.
              !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
              (v !== q || (S > 0 && S & 64))
            ? kt(y, f, h, !1, !0)
            : ((v === q && S & 384) || (!g && k & 16)) && kt(E, f, h),
          b && tn(c);
      }
      ((Z && (Q = x && x.onVnodeUnmounted)) || K) &&
        Ne(() => {
          Q && Ie(Q, f, c), K && pt(c, null, f, "unmounted");
        }, h);
    },
    tn = (c) => {
      const { type: f, el: h, anchor: b, transition: g } = c;
      if (f === q) {
        process.env.NODE_ENV !== "production" &&
        c.patchFlag > 0 &&
        c.patchFlag & 2048 &&
        g &&
        !g.persisted
          ? c.children.forEach((x) => {
              x.type === Ve ? s(x.el) : tn(x);
            })
          : ni(h, b);
        return;
      }
      if (f === Eo) {
        D(c);
        return;
      }
      const v = () => {
        s(h), g && !g.persisted && g.afterLeave && g.afterLeave();
      };
      if (c.shapeFlag & 1 && g && !g.persisted) {
        const { leave: x, delayLeave: N } = g,
          E = () => x(h, v);
        N ? N(c.el, v, E) : E();
      } else v();
    },
    ni = (c, f) => {
      let h;
      for (; c !== f; ) (h = _(c)), s(c), (c = h);
      s(f);
    },
    si = (c, f, h) => {
      process.env.NODE_ENV !== "production" && c.type.__hmrId && ll(c);
      const { bum: b, scope: g, job: v, subTree: x, um: N, m: E, a: y } = c;
      bs(E),
        bs(y),
        b && Dt(b),
        g.stop(),
        v && ((v.flags |= 8), rt(x, c, f, h)),
        N && Ne(N, f),
        Ne(() => {
          c.isUnmounted = !0;
        }, f),
        f &&
          f.pendingBranch &&
          !f.isUnmounted &&
          c.asyncDep &&
          !c.asyncResolved &&
          c.suspenseId === f.pendingId &&
          (f.deps--, f.deps === 0 && f.resolve()),
        process.env.NODE_ENV !== "production" && hl(c);
    },
    kt = (c, f, h, b = !1, g = !1, v = 0) => {
      for (let x = v; x < c.length; x++) rt(c[x], f, h, b, g);
    },
    fo = (c) => {
      if (c.shapeFlag & 6) return fo(c.component.subTree);
      if (c.shapeFlag & 128) return c.suspense.next();
      const f = _(c.anchor || c.el),
        h = f && f[bl];
      return h ? _(h) : f;
    };
  let on = !1;
  const ts = (c, f, h) => {
      c == null
        ? f._vnode && rt(f._vnode, null, null, !0)
        : w(f._vnode || null, c, f, null, null, null, h),
        (f._vnode = c),
        on || ((on = !0), as(), vr(), (on = !1));
    },
    Ft = {
      p: w,
      um: rt,
      m: Ot,
      r: tn,
      mt: st,
      mc: ge,
      pc: Ae,
      pbc: nt,
      n: fo,
      o: e,
    };
  return {
    render: ts,
    hydrate: void 0,
    createApp: Wl(ts),
  };
}
function fn({ type: e, props: t }, o) {
  return (o === "svg" && e === "foreignObject") ||
    (o === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : o;
}
function ht({ effect: e, job: t }, o) {
  o ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function uc(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function yo(e, t, o = !1) {
  const n = e.children,
    s = t.children;
  if (P(n) && P(s))
    for (let r = 0; r < n.length; r++) {
      const i = n[r];
      let l = s[r];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = s[r] = ct(s[r])), (l.el = i.el)),
        !o && l.patchFlag !== -2 && yo(i, l)),
        l.type === co && (l.el = i.el),
        process.env.NODE_ENV !== "production" &&
          l.type === Ve &&
          !l.el &&
          (l.el = i.el);
    }
}
function ac(e) {
  const t = e.slice(),
    o = [0];
  let n, s, r, i, l;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const p = e[n];
    if (p !== 0) {
      if (((s = o[o.length - 1]), e[s] < p)) {
        (t[n] = s), o.push(n);
        continue;
      }
      for (r = 0, i = o.length - 1; r < i; )
        (l = (r + i) >> 1), e[o[l]] < p ? (r = l + 1) : (i = l);
      p < e[o[r]] && (r > 0 && (t[n] = o[r - 1]), (o[r] = n));
    }
  }
  for (r = o.length, i = o[r - 1]; r-- > 0; ) (o[r] = i), (i = t[i]);
  return o;
}
function Hr(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Hr(t);
}
function bs(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const fc = Symbol.for("v-scx"),
  dc = () => {
    {
      const e = bo(fc);
      return (
        e ||
          (process.env.NODE_ENV !== "production" &&
            O(
              "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
            )),
        e
      );
    }
  };
function dn(e, t, o) {
  return (
    process.env.NODE_ENV !== "production" &&
      !F(t) &&
      O(
        "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
      ),
    Lr(e, t, o)
  );
}
function Lr(e, t, o = Y) {
  const { immediate: n, deep: s, flush: r, once: i } = o;
  process.env.NODE_ENV !== "production" &&
    !t &&
    (n !== void 0 &&
      O(
        'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
      ),
    s !== void 0 &&
      O(
        'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
      ),
    i !== void 0 &&
      O(
        'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
      ));
  const l = ne({}, o);
  process.env.NODE_ENV !== "production" && (l.onWarn = O);
  const u = (t && n) || (!t && r !== "post");
  let p;
  if (eo) {
    if (r === "sync") {
      const m = dc();
      p = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!u) {
      const m = () => {};
      return (m.stop = le), (m.resume = le), (m.pause = le), m;
    }
  }
  const d = ce;
  l.call = (m, V, w) => We(m, d, V, w);
  let a = !1;
  r === "post"
    ? (l.scheduler = (m) => {
        Ne(m, d && d.suspense);
      })
    : r !== "sync" &&
      ((a = !0),
      (l.scheduler = (m, V) => {
        V ? m() : Go(m);
      })),
    (l.augmentJob = (m) => {
      t && (m.flags |= 4),
        a && ((m.flags |= 2), d && ((m.id = d.uid), (m.i = d)));
    });
  const _ = Zi(e, t, l);
  return eo && (p ? p.push(_) : u && _()), _;
}
function pc(e, t, o) {
  const n = this.proxy,
    s = oe(e) ? (e.includes(".") ? Br(n, e) : () => n[e]) : e.bind(n, n);
  let r;
  F(t) ? (r = t) : ((r = t.handler), (o = t));
  const i = uo(this),
    l = Lr(s, r.bind(n), o);
  return i(), l;
}
function Br(e, t) {
  const o = t.split(".");
  return () => {
    let n = e;
    for (let s = 0; s < o.length && n; s++) n = n[o[s]];
    return n;
  };
}
const hc = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${ye(t)}Modifiers`] || e[`${we(t)}Modifiers`];
function _c(e, t, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Y;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [a],
    } = e;
    if (d)
      if (!(t in d))
        (!a || !(_t(ye(t)) in a)) &&
          O(
            `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${_t(
              ye(t)
            )}" prop.`
          );
      else {
        const _ = d[t];
        F(_) &&
          (_(...o) ||
            O(
              `Invalid event arguments: event validation failed for event "${t}".`
            ));
      }
  }
  let s = o;
  const r = t.startsWith("update:"),
    i = r && hc(n, t.slice(7));
  if (
    (i &&
      (i.trim && (s = o.map((d) => (oe(d) ? d.trim() : d))),
      i.number && (s = o.map(Vo))),
    process.env.NODE_ENV !== "production" && gl(e, t, s),
    process.env.NODE_ENV !== "production")
  ) {
    const d = t.toLowerCase();
    d !== t &&
      n[_t(d)] &&
      O(
        `Event "${d}" is emitted in component ${qo(
          e,
          e.type
        )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${we(
          t
        )}" instead of "${t}".`
      );
  }
  let l,
    u =
      n[(l = _t(t))] || // also try camelCase event handler (#2249)
      n[(l = _t(ye(t)))];
  !u && r && (u = n[(l = _t(we(t)))]), u && We(u, e, 6, s);
  const p = n[l + "Once"];
  if (p) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), We(p, e, 6, s);
  }
}
function Kr(e, t, o = !1) {
  const n = t.emitsCache,
    s = n.get(e);
  if (s !== void 0) return s;
  const r = e.emits;
  let i = {},
    l = !1;
  if (!F(e)) {
    const u = (p) => {
      const d = Kr(p, t, !0);
      d && ((l = !0), ne(i, d));
    };
    !o && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  return !r && !l
    ? (z(e) && n.set(e, null), null)
    : (P(r) ? r.forEach((u) => (i[u] = null)) : ne(i, r),
      z(e) && n.set(e, i),
      i);
}
function Qo(e, t) {
  return !e || !oo(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      W(e, t[0].toLowerCase() + t.slice(1)) || W(e, we(t)) || W(e, t));
}
let Vn = !1;
function Io() {
  Vn = !0;
}
function ys(e) {
  const {
      type: t,
      vnode: o,
      proxy: n,
      withProxy: s,
      propsOptions: [r],
      slots: i,
      attrs: l,
      emit: u,
      render: p,
      renderCache: d,
      props: a,
      data: _,
      setupState: m,
      ctx: V,
      inheritAttrs: w,
    } = e,
    $ = Ao(e);
  let A, J;
  process.env.NODE_ENV !== "production" && (Vn = !1);
  try {
    if (o.shapeFlag & 4) {
      const D = s || n,
        ee =
          process.env.NODE_ENV !== "production" && m.__isScriptSetup
            ? new Proxy(D, {
                get(te, ue, ge) {
                  return (
                    O(
                      `Property '${String(
                        ue
                      )}' was accessed via 'this'. Avoid using 'this' in templates.`
                    ),
                    Reflect.get(te, ue, ge)
                  );
                },
              })
            : D;
      (A = Ce(
        p.call(
          ee,
          D,
          d,
          process.env.NODE_ENV !== "production" ? je(a) : a,
          m,
          _,
          V
        )
      )),
        (J = l);
    } else {
      const D = t;
      process.env.NODE_ENV !== "production" && l === a && Io(),
        (A = Ce(
          D.length > 1
            ? D(
                process.env.NODE_ENV !== "production" ? je(a) : a,
                process.env.NODE_ENV !== "production"
                  ? {
                      get attrs() {
                        return Io(), je(l);
                      },
                      slots: i,
                      emit: u,
                    }
                  : { attrs: l, slots: i, emit: u }
              )
            : D(process.env.NODE_ENV !== "production" ? je(a) : a, null)
        )),
        (J = t.props ? l : mc(l));
    }
  } catch (D) {
    (zt.length = 0), io(D, e, 1), (A = Le(Ve));
  }
  let T = A,
    X;
  if (
    (process.env.NODE_ENV !== "production" &&
      A.patchFlag > 0 &&
      A.patchFlag & 2048 &&
      ([T, X] = Wr(A)),
    J && w !== !1)
  ) {
    const D = Object.keys(J),
      { shapeFlag: ee } = T;
    if (D.length) {
      if (ee & 7) r && D.some(wo) && (J = gc(J, r)), (T = dt(T, J, !1, !0));
      else if (process.env.NODE_ENV !== "production" && !Vn && T.type !== Ve) {
        const te = Object.keys(l),
          ue = [],
          ge = [];
        for (let Je = 0, nt = te.length; Je < nt; Je++) {
          const Se = te[Je];
          oo(Se)
            ? wo(Se) || ue.push(Se[2].toLowerCase() + Se.slice(3))
            : ge.push(Se);
        }
        ge.length &&
          O(
            `Extraneous non-props attributes (${ge.join(
              ", "
            )}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
          ),
          ue.length &&
            O(
              `Extraneous non-emits event listeners (${ue.join(
                ", "
              )}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
            );
      }
    }
  }
  return (
    o.dirs &&
      (process.env.NODE_ENV !== "production" &&
        !Es(T) &&
        O(
          "Runtime directive used on component with non-element root node. The directives will not function as intended."
        ),
      (T = dt(T, null, !1, !0)),
      (T.dirs = T.dirs ? T.dirs.concat(o.dirs) : o.dirs)),
    o.transition &&
      (process.env.NODE_ENV !== "production" &&
        !Es(T) &&
        O(
          "Component inside <Transition> renders non-element root node that cannot be animated."
        ),
      Jn(T, o.transition)),
    process.env.NODE_ENV !== "production" && X ? X(T) : (A = T),
    Ao($),
    A
  );
}
const Wr = (e) => {
  const t = e.children,
    o = e.dynamicChildren,
    n = Qn(t, !1);
  if (n) {
    if (
      process.env.NODE_ENV !== "production" &&
      n.patchFlag > 0 &&
      n.patchFlag & 2048
    )
      return Wr(n);
  } else return [e, void 0];
  const s = t.indexOf(n),
    r = o ? o.indexOf(n) : -1,
    i = (l) => {
      (t[s] = l),
        o &&
          (r > -1
            ? (o[r] = l)
            : l.patchFlag > 0 && (e.dynamicChildren = [...o, l]));
    };
  return [Ce(n), i];
};
function Qn(e, t = !0) {
  let o;
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    if (Xo(s)) {
      if (s.type !== Ve || s.children === "v-if") {
        if (o) return;
        if (
          ((o = s),
          process.env.NODE_ENV !== "production" &&
            t &&
            o.patchFlag > 0 &&
            o.patchFlag & 2048)
        )
          return Qn(o.children);
      }
    } else return;
  }
  return o;
}
const mc = (e) => {
    let t;
    for (const o in e)
      (o === "class" || o === "style" || oo(o)) && ((t || (t = {}))[o] = e[o]);
    return t;
  },
  gc = (e, t) => {
    const o = {};
    for (const n in e) (!wo(n) || !(n.slice(9) in t)) && (o[n] = e[n]);
    return o;
  },
  Es = (e) => e.shapeFlag & 7 || e.type === Ve;
function vc(e, t, o) {
  const { props: n, children: s, component: r } = e,
    { props: i, children: l, patchFlag: u } = t,
    p = r.emitsOptions;
  if (
    (process.env.NODE_ENV !== "production" && (s || l) && Ue) ||
    t.dirs ||
    t.transition
  )
    return !0;
  if (o && u >= 0) {
    if (u & 1024) return !0;
    if (u & 16) return n ? Ns(n, i, p) : !!i;
    if (u & 8) {
      const d = t.dynamicProps;
      for (let a = 0; a < d.length; a++) {
        const _ = d[a];
        if (i[_] !== n[_] && !Qo(p, _)) return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable)
      ? !0
      : n === i
      ? !1
      : n
      ? i
        ? Ns(n, i, p)
        : !0
      : !!i;
  return !1;
}
function Ns(e, t, o) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < n.length; s++) {
    const r = n[s];
    if (t[r] !== e[r] && !Qo(o, r)) return !0;
  }
  return !1;
}
function bc({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const n = t.subTree;
    if ((n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e))
      ((e = t.vnode).el = o), (t = t.parent);
    else break;
  }
}
const Jr = (e) => e.__isSuspense;
function yc(e, t) {
  t && t.pendingBranch
    ? P(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : gr(e);
}
const q = Symbol.for("v-fgt"),
  co = Symbol.for("v-txt"),
  Ve = Symbol.for("v-cmt"),
  Eo = Symbol.for("v-stc"),
  zt = [];
let xe = null;
function R(e = !1) {
  zt.push((xe = e ? null : []));
}
function Ec() {
  zt.pop(), (xe = zt[zt.length - 1] || null);
}
let qt = 1;
function Os(e, t = !1) {
  (qt += e), e < 0 && xe && t && (xe.hasOnce = !0);
}
function Gr(e) {
  return (
    (e.dynamicChildren = qt > 0 ? xe || Ct : null),
    Ec(),
    qt > 0 && xe && xe.push(e),
    e
  );
}
function M(e, t, o, n, s, r) {
  return Gr(C(e, t, o, n, s, r, !0));
}
function Nc(e, t, o, n, s) {
  return Gr(Le(e, t, o, n, s, !0));
}
function Xo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Lt(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const o = vo.get(t.type);
    if (o && o.has(e.component))
      return (e.shapeFlag &= -257), (t.shapeFlag &= -513), !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Oc = (...e) => zr(...e),
  Yr = ({ key: e }) => e ?? null,
  No = ({ ref: e, ref_key: t, ref_for: o }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? oe(e) || se(e) || F(e)
        ? { i: _e, r: e, k: t, f: !!o }
        : e
      : null
  );
function C(
  e,
  t = null,
  o = null,
  n = 0,
  s = null,
  r = e === q ? 0 : 1,
  i = !1,
  l = !1
) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Yr(t),
    ref: t && No(t),
    scopeId: Or,
    slotScopeIds: null,
    children: o,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: n,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: _e,
  };
  return (
    l
      ? (Xn(u, o), r & 128 && e.normalize(u))
      : o && (u.shapeFlag |= oe(o) ? 8 : 16),
    process.env.NODE_ENV !== "production" &&
      u.key !== u.key &&
      O("VNode created with invalid key (NaN). VNode type:", u.type),
    qt > 0 && // avoid a block node from tracking itself
      !i && // has current parent block
      xe && // presence of a patch flag indicates this node needs patching on updates.
      // component nodes also should always be patched, because even if the
      // component doesn't need to update, it needs to persist the instance on to
      // the next vnode so that it can be properly unmounted later.
      (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
      // vnode should not be considered dynamic due to handler caching.
      u.patchFlag !== 32 &&
      xe.push(u),
    u
  );
}
const Le = process.env.NODE_ENV !== "production" ? Oc : zr;
function zr(e, t = null, o = null, n = 0, s = null, r = !1) {
  if (
    ((!e || e === Rl) &&
      (process.env.NODE_ENV !== "production" &&
        !e &&
        O(`Invalid vnode type when creating vnode: ${e}.`),
      (e = Ve)),
    Xo(e))
  ) {
    const l = dt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return (
      o && Xn(l, o),
      qt > 0 &&
        !r &&
        xe &&
        (l.shapeFlag & 6 ? (xe[xe.indexOf(e)] = l) : xe.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((ei(e) && (e = e.__vccOpts), t)) {
    t = wc(t);
    let { class: l, style: u } = t;
    l && !oe(l) && (t.class = In(l)),
      z(u) && (Do(u) && !P(u) && (u = ne({}, u)), (t.style = Mn(u)));
  }
  const i = oe(e) ? 1 : Jr(e) ? 128 : yl(e) ? 64 : z(e) ? 4 : F(e) ? 2 : 0;
  return (
    process.env.NODE_ENV !== "production" &&
      i & 4 &&
      Do(e) &&
      ((e = H(e)),
      O(
        "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
        `
Component that was made reactive: `,
        e
      )),
    C(e, t, o, n, s, i, r, !0)
  );
}
function wc(e) {
  return e ? (Do(e) || Rr(e) ? ne({}, e) : e) : null;
}
function dt(e, t, o = !1, n = !1) {
  const { props: s, ref: r, patchFlag: i, children: l, transition: u } = e,
    p = t ? Vc(s || {}, t) : s,
    d = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: p,
      key: p && Yr(p),
      ref:
        t && t.ref
          ? // #2078 in the case of <component :is="vnode" ref="extra"/>
            // if the vnode itself already has a ref, cloneVNode will need to merge
            // the refs so the single vnode can be set on multiple refs
            o && r
            ? P(r)
              ? r.concat(No(t))
              : [r, No(t)]
            : No(t)
          : r,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children:
        process.env.NODE_ENV !== "production" && i === -1 && P(l)
          ? l.map(Qr)
          : l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      // if the vnode is cloned with extra props, we can no longer assume its
      // existing patch flag to be reliable and need to add the FULL_PROPS flag.
      // note: preserve flag for fragments since they use the flag for children
      // fast paths only.
      patchFlag: t && e.type !== q ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: u,
      // These should technically only be non-null on mounted VNodes. However,
      // they *should* be copied for kept-alive vnodes. So we just always copy
      // them since them being non-null during a mount doesn't affect the logic as
      // they will simply be overwritten.
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && dt(e.ssContent),
      ssFallback: e.ssFallback && dt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return u && n && Jn(d, u.clone(d)), d;
}
function Qr(e) {
  const t = dt(e);
  return P(e.children) && (t.children = e.children.map(Qr)), t;
}
function xc(e = " ", t = 0) {
  return Le(co, null, e, t);
}
function He(e = "", t = !1) {
  return t ? (R(), Nc(Ve, null, e)) : Le(Ve, null, e);
}
function Ce(e) {
  return e == null || typeof e == "boolean"
    ? Le(Ve)
    : P(e)
    ? Le(
        q,
        null,
        // #3666, avoid reference pollution when reusing vnode
        e.slice()
      )
    : Xo(e)
    ? ct(e)
    : Le(co, null, String(e));
}
function ct(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : dt(e);
}
function Xn(e, t) {
  let o = 0;
  const { shapeFlag: n } = e;
  if (t == null) t = null;
  else if (P(t)) o = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Xn(e, s()), s._c && (s._d = !0));
      return;
    } else {
      o = 32;
      const s = t._;
      !s && !Rr(t)
        ? (t._ctx = _e)
        : s === 3 &&
          _e &&
          (_e.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    F(t)
      ? ((t = { default: t, _ctx: _e }), (o = 32))
      : ((t = String(t)), n & 64 ? ((o = 16), (t = [xc(t)])) : (o = 8));
  (e.children = t), (e.shapeFlag |= o);
}
function Vc(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const s in n)
      if (s === "class")
        t.class !== n.class && (t.class = In([t.class, n.class]));
      else if (s === "style") t.style = Mn([t.style, n.style]);
      else if (oo(s)) {
        const r = t[s],
          i = n[s];
        i &&
          r !== i &&
          !(P(r) && r.includes(i)) &&
          (t[s] = r ? [].concat(r, i) : i);
      } else s !== "" && (t[s] = n[s]);
  }
  return t;
}
function Ie(e, t, o, n = null) {
  We(e, t, 7, [o, n]);
}
const Dc = $r();
let Sc = 0;
function Cc(e, t, o) {
  const n = e.type,
    s = (t ? t.appContext : e.appContext) || Dc,
    r = {
      uid: Sc++,
      vnode: e,
      type: n,
      parent: t,
      appContext: s,
      root: null,
      // to be immediately set
      next: null,
      subTree: null,
      // will be set synchronously right after creation
      effect: null,
      update: null,
      // will be set synchronously right after creation
      job: null,
      scope: new wi(
        !0
        /* detached */
      ),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      // local resolved assets
      components: null,
      directives: null,
      // resolved props and emits options
      propsOptions: Ir(n, s),
      emitsOptions: Kr(n, s),
      // emit
      emit: null,
      // to be set immediately
      emitted: null,
      // props default value
      propsDefaults: Y,
      // inheritAttrs
      inheritAttrs: n.inheritAttrs,
      // state
      ctx: Y,
      data: Y,
      props: Y,
      attrs: Y,
      slots: Y,
      refs: Y,
      setupState: Y,
      setupContext: null,
      // suspense related
      suspense: o,
      suspenseId: o ? o.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      // lifecycle hooks
      // not using enums here because it results in computed properties
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    process.env.NODE_ENV !== "production"
      ? (r.ctx = Ml(r))
      : (r.ctx = { _: r }),
    (r.root = t ? t.root : r),
    (r.emit = _c.bind(null, r)),
    e.ce && e.ce(r),
    r
  );
}
let ce = null;
const Tc = () => ce || _e;
let ko, Dn;
{
  const e = so(),
    t = (o, n) => {
      let s;
      return (
        (s = e[o]) || (s = e[o] = []),
        s.push(n),
        (r) => {
          s.length > 1 ? s.forEach((i) => i(r)) : s[0](r);
        }
      );
    };
  (ko = t("__VUE_INSTANCE_SETTERS__", (o) => (ce = o))),
    (Dn = t("__VUE_SSR_SETTERS__", (o) => (eo = o)));
}
const uo = (e) => {
    const t = ce;
    return (
      ko(e),
      e.scope.on(),
      () => {
        e.scope.off(), ko(t);
      }
    );
  },
  ws = () => {
    ce && ce.scope.off(), ko(null);
  },
  $c = /* @__PURE__ */ qe("slot,component");
function Sn(e, { isNativeTag: t }) {
  ($c(e) || t(e)) &&
    O("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Xr(e) {
  return e.vnode.shapeFlag & 4;
}
let eo = !1;
function Ac(e, t = !1, o = !1) {
  t && Dn(t);
  const { props: n, children: s } = e.vnode,
    r = Xr(e);
  Gl(e, n, r, t), sc(e, s, o);
  const i = r ? Pc(e, t) : void 0;
  return t && Dn(!1), i;
}
function Pc(e, t) {
  var o;
  const n = e.type;
  if (process.env.NODE_ENV !== "production") {
    if ((n.name && Sn(n.name, e.appContext.config), n.components)) {
      const r = Object.keys(n.components);
      for (let i = 0; i < r.length; i++) Sn(r[i], e.appContext.config);
    }
    if (n.directives) {
      const r = Object.keys(n.directives);
      for (let i = 0; i < r.length; i++) wr(r[i]);
    }
    n.compilerOptions &&
      Rc() &&
      O(
        '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
      );
  }
  (e.accessCache = /* @__PURE__ */ Object.create(null)),
    (e.proxy = new Proxy(e.ctx, Sr)),
    process.env.NODE_ENV !== "production" && Il(e);
  const { setup: s } = n;
  if (s) {
    et();
    const r = (e.setupContext = s.length > 1 ? Ic(e) : null),
      i = uo(e),
      l = Mt(s, e, 0, [
        process.env.NODE_ENV !== "production" ? je(e.props) : e.props,
        r,
      ]),
      u = An(l);
    if ((tt(), i(), (u || e.sp) && !Yt(e) && xr(e), u)) {
      if ((l.then(ws, ws), t))
        return l
          .then((p) => {
            xs(e, p, t);
          })
          .catch((p) => {
            io(p, e, 0);
          });
      if (
        ((e.asyncDep = l), process.env.NODE_ENV !== "production" && !e.suspense)
      ) {
        const p = (o = n.name) != null ? o : "Anonymous";
        O(
          `Component <${p}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else xs(e, l, t);
  } else Zr(e, t);
}
function xs(e, t, o) {
  F(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : z(t)
    ? (process.env.NODE_ENV !== "production" &&
        Xo(t) &&
        O(
          "setup() should not return VNodes directly - return a render function instead."
        ),
      process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t),
      (e.setupState = pr(t)),
      process.env.NODE_ENV !== "production" && kl(e))
    : process.env.NODE_ENV !== "production" &&
      t !== void 0 &&
      O(
        `setup() should return an object. Received: ${
          t === null ? "null" : typeof t
        }`
      ),
    Zr(e, o);
}
const Rc = () => !0;
function Zr(e, t, o) {
  const n = e.type;
  e.render || (e.render = n.render || le);
  {
    const s = uo(e);
    et();
    try {
      jl(e);
    } finally {
      tt(), s();
    }
  }
  process.env.NODE_ENV !== "production" &&
    !n.render &&
    e.render === le &&
    !t &&
    (n.template
      ? O(
          'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
        )
      : O("Component is missing template or render function: ", n));
}
const Vs =
  process.env.NODE_ENV !== "production"
    ? {
        get(e, t) {
          return Io(), ie(e, "get", ""), e[t];
        },
        set() {
          return O("setupContext.attrs is readonly."), !1;
        },
        deleteProperty() {
          return O("setupContext.attrs is readonly."), !1;
        },
      }
    : {
        get(e, t) {
          return ie(e, "get", ""), e[t];
        },
      };
function Mc(e) {
  return new Proxy(e.slots, {
    get(t, o) {
      return ie(e, "get", "$slots"), t[o];
    },
  });
}
function Ic(e) {
  const t = (o) => {
    if (
      process.env.NODE_ENV !== "production" &&
      (e.exposed && O("expose() should be called only once per setup()."),
      o != null)
    ) {
      let n = typeof o;
      n === "object" && (P(o) ? (n = "array") : se(o) && (n = "ref")),
        n !== "object" &&
          O(`expose() should be passed a plain object, received ${n}.`);
    }
    e.exposed = o || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let o, n;
    return Object.freeze({
      get attrs() {
        return o || (o = new Proxy(e.attrs, Vs));
      },
      get slots() {
        return n || (n = Mc(e));
      },
      get emit() {
        return (s, ...r) => e.emit(s, ...r);
      },
      expose: t,
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Vs),
      slots: e.slots,
      emit: e.emit,
      expose: t,
    };
}
function Zo(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(pr(Wi(e.exposed)), {
          get(t, o) {
            if (o in t) return t[o];
            if (o in Et) return Et[o](e);
          },
          has(t, o) {
            return o in t || o in Et;
          },
        }))
    : e.proxy;
}
const kc = /(?:^|[-_])(\w)/g,
  Fc = (e) => e.replace(kc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function qr(e, t = !0) {
  return F(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function qo(e, t, o = !1) {
  let n = qr(t);
  if (!n && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (n = s[1]);
  }
  if (!n && e && e.parent) {
    const s = (r) => {
      for (const i in r) if (r[i] === t) return i;
    };
    n =
      s(e.components || e.parent.type.components) || s(e.appContext.components);
  }
  return n ? Fc(n) : o ? "App" : "Anonymous";
}
function ei(e) {
  return F(e) && "__vccOpts" in e;
}
const Fo = (e, t) => {
  const o = Qi(e, t, eo);
  if (process.env.NODE_ENV !== "production") {
    const n = Tc();
    n && n.appContext.config.warnRecursiveComputed && (o._warnRecursive = !0);
  }
  return o;
};
function jc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u") return;
  const e = { style: "color:#3ba776" },
    t = { style: "color:#1677ff" },
    o = { style: "color:#f5222d" },
    n = { style: "color:#eb2f96" },
    s = {
      __vue_custom_formatter: !0,
      header(a) {
        return z(a)
          ? a.__isVue
            ? ["div", e, "VueInstance"]
            : se(a)
            ? [
                "div",
                {},
                ["span", e, d(a)],
                "<",
                // avoid debugger accessing value affecting behavior
                l("_value" in a ? a._value : a),
                ">",
              ]
            : bt(a)
            ? [
                "div",
                {},
                ["span", e, me(a) ? "ShallowReactive" : "Reactive"],
                "<",
                l(a),
                `>${Ze(a) ? " (readonly)" : ""}`,
              ]
            : Ze(a)
            ? [
                "div",
                {},
                ["span", e, me(a) ? "ShallowReadonly" : "Readonly"],
                "<",
                l(a),
                ">",
              ]
            : null
          : null;
      },
      hasBody(a) {
        return a && a.__isVue;
      },
      body(a) {
        if (a && a.__isVue) return ["div", {}, ...r(a.$)];
      },
    };
  function r(a) {
    const _ = [];
    a.type.props && a.props && _.push(i("props", H(a.props))),
      a.setupState !== Y && _.push(i("setup", a.setupState)),
      a.data !== Y && _.push(i("data", H(a.data)));
    const m = u(a, "computed");
    m && _.push(i("computed", m));
    const V = u(a, "inject");
    return (
      V && _.push(i("injected", V)),
      _.push([
        "div",
        {},
        [
          "span",
          {
            style: n.style + ";opacity:0.66",
          },
          "$ (internal): ",
        ],
        ["object", { object: a }],
      ]),
      _
    );
  }
  function i(a, _) {
    return (
      (_ = ne({}, _)),
      Object.keys(_).length
        ? [
            "div",
            { style: "line-height:1.25em;margin-bottom:0.6em" },
            [
              "div",
              {
                style: "color:#476582",
              },
              a,
            ],
            [
              "div",
              {
                style: "padding-left:1.25em",
              },
              ...Object.keys(_).map((m) => [
                "div",
                {},
                ["span", n, m + ": "],
                l(_[m], !1),
              ]),
            ],
          ]
        : ["span", {}]
    );
  }
  function l(a, _ = !0) {
    return typeof a == "number"
      ? ["span", t, a]
      : typeof a == "string"
      ? ["span", o, JSON.stringify(a)]
      : typeof a == "boolean"
      ? ["span", n, a]
      : z(a)
      ? ["object", { object: _ ? H(a) : a }]
      : ["span", o, String(a)];
  }
  function u(a, _) {
    const m = a.type;
    if (F(m)) return;
    const V = {};
    for (const w in a.ctx) p(m, w, _) && (V[w] = a.ctx[w]);
    return V;
  }
  function p(a, _, m) {
    const V = a[m];
    if (
      (P(V) && V.includes(_)) ||
      (z(V) && _ in V) ||
      (a.extends && p(a.extends, _, m)) ||
      (a.mixins && a.mixins.some((w) => p(w, _, m)))
    )
      return !0;
  }
  function d(a) {
    return me(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters
    ? window.devtoolsFormatters.push(s)
    : (window.devtoolsFormatters = [s]);
}
const Ds = "3.5.13",
  De = process.env.NODE_ENV !== "production" ? O : le;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Cn;
const Ss = typeof window < "u" && window.trustedTypes;
if (Ss)
  try {
    Cn = /* @__PURE__ */ Ss.createPolicy("vue", {
      createHTML: (e) => e,
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" &&
      De(`Error creating trusted types policy: ${e}`);
  }
const ti = Cn ? (e) => Cn.createHTML(e) : (e) => e,
  Uc = "http://www.w3.org/2000/svg",
  Hc = "http://www.w3.org/1998/Math/MathML",
  Ye = typeof document < "u" ? document : null,
  Cs = Ye && /* @__PURE__ */ Ye.createElement("template"),
  Lc = {
    insert: (e, t, o) => {
      t.insertBefore(e, o || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, o, n) => {
      const s =
        t === "svg"
          ? Ye.createElementNS(Uc, e)
          : t === "mathml"
          ? Ye.createElementNS(Hc, e)
          : o
          ? Ye.createElement(e, { is: o })
          : Ye.createElement(e);
      return (
        e === "select" &&
          n &&
          n.multiple != null &&
          s.setAttribute("multiple", n.multiple),
        s
      );
    },
    createText: (e) => Ye.createTextNode(e),
    createComment: (e) => Ye.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ye.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(e, t, o, n, s, r) {
      const i = o ? o.previousSibling : t.lastChild;
      if (s && (s === r || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), o),
            !(s === r || !(s = s.nextSibling));

        );
      else {
        Cs.innerHTML = ti(
          n === "svg"
            ? `<svg>${e}</svg>`
            : n === "mathml"
            ? `<math>${e}</math>`
            : e
        );
        const l = Cs.content;
        if (n === "svg" || n === "mathml") {
          const u = l.firstChild;
          for (; u.firstChild; ) l.appendChild(u.firstChild);
          l.removeChild(u);
        }
        t.insertBefore(l, o);
      }
      return [
        // first
        i ? i.nextSibling : t.firstChild,
        // last
        o ? o.previousSibling : t.lastChild,
      ];
    },
  },
  Bc = Symbol("_vtc");
function Kc(e, t, o) {
  const n = e[Bc];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : o
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const Ts = Symbol("_vod"),
  Wc = Symbol("_vsh");
process.env.NODE_ENV;
const Jc = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""),
  Gc = /(^|;)\s*display\s*:/;
function Yc(e, t, o) {
  const n = e.style,
    s = oe(o);
  let r = !1;
  if (o && !s) {
    if (t)
      if (oe(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          o[l] == null && Oo(n, l, "");
        }
      else for (const i in t) o[i] == null && Oo(n, i, "");
    for (const i in o) i === "display" && (r = !0), Oo(n, i, o[i]);
  } else if (s) {
    if (t !== o) {
      const i = n[Jc];
      i && (o += ";" + i), (n.cssText = o), (r = Gc.test(o));
    }
  } else t && e.removeAttribute("style");
  Ts in e && ((e[Ts] = r ? n.display : ""), e[Wc] && (n.display = "none"));
}
const zc = /[^\\];\s*$/,
  $s = /\s*!important$/;
function Oo(e, t, o) {
  if (P(o)) o.forEach((n) => Oo(e, t, n));
  else if (
    (o == null && (o = ""),
    process.env.NODE_ENV !== "production" &&
      zc.test(o) &&
      De(`Unexpected semicolon at the end of '${t}' style value: '${o}'`),
    t.startsWith("--"))
  )
    e.setProperty(t, o);
  else {
    const n = Qc(e, t);
    $s.test(o)
      ? e.setProperty(we(n), o.replace($s, ""), "important")
      : (e[n] = o);
  }
}
const As = ["Webkit", "Moz", "ms"],
  pn = {};
function Qc(e, t) {
  const o = pn[t];
  if (o) return o;
  let n = ye(t);
  if (n !== "filter" && n in e) return (pn[t] = n);
  n = Bo(n);
  for (let s = 0; s < As.length; s++) {
    const r = As[s] + n;
    if (r in e) return (pn[t] = r);
  }
  return t;
}
const Ps = "http://www.w3.org/1999/xlink";
function Rs(e, t, o, n, s, r = Ei(t)) {
  n && t.startsWith("xlink:")
    ? o == null
      ? e.removeAttributeNS(Ps, t.slice(6, t.length))
      : e.setAttributeNS(Ps, t, o)
    : o == null || (r && !Gs(o))
    ? e.removeAttribute(t)
    : e.setAttribute(t, r ? "" : Be(o) ? String(o) : o);
}
function Ms(e, t, o, n, s) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? ti(o) : o);
    return;
  }
  const r = e.tagName;
  if (
    t === "value" &&
    r !== "PROGRESS" && // custom elements may use _value internally
    !r.includes("-")
  ) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value,
      u =
        o == null
          ? // #11647: value should be set as empty string for null and undefined,
            // but <input type="checkbox"> should be set as 'on'.
            e.type === "checkbox"
            ? "on"
            : ""
          : String(o);
    (l !== u || !("_value" in e)) && (e.value = u),
      o == null && e.removeAttribute(t),
      (e._value = o);
    return;
  }
  let i = !1;
  if (o === "" || o == null) {
    const l = typeof e[t];
    l === "boolean"
      ? (o = Gs(o))
      : o == null && l === "string"
      ? ((o = ""), (i = !0))
      : l === "number" && ((o = 0), (i = !0));
  }
  try {
    e[t] = o;
  } catch (l) {
    process.env.NODE_ENV !== "production" &&
      !i &&
      De(
        `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${o} is invalid.`,
        l
      );
  }
  i && e.removeAttribute(s || t);
}
function at(e, t, o, n) {
  e.addEventListener(t, o, n);
}
function Xc(e, t, o, n) {
  e.removeEventListener(t, o, n);
}
const Is = Symbol("_vei");
function Zc(e, t, o, n, s = null) {
  const r = e[Is] || (e[Is] = {}),
    i = r[t];
  if (n && i) i.value = process.env.NODE_ENV !== "production" ? Fs(n, t) : n;
  else {
    const [l, u] = qc(t);
    if (n) {
      const p = (r[t] = ou(
        process.env.NODE_ENV !== "production" ? Fs(n, t) : n,
        s
      ));
      at(e, l, p, u);
    } else i && (Xc(e, l, i, u), (r[t] = void 0));
  }
}
const ks = /(?:Once|Passive|Capture)$/;
function qc(e) {
  let t;
  if (ks.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(ks)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : we(e.slice(2)), t];
}
let hn = 0;
const eu = /* @__PURE__ */ Promise.resolve(),
  tu = () => hn || (eu.then(() => (hn = 0)), (hn = Date.now()));
function ou(e, t) {
  const o = (n) => {
    if (!n._vts) n._vts = Date.now();
    else if (n._vts <= o.attached) return;
    We(nu(n, o.value), t, 5, [n]);
  };
  return (o.value = e), (o.attached = tu()), o;
}
function Fs(e, t) {
  return F(e) || P(e)
    ? e
    : (De(
        `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
      ),
      le);
}
function nu(e, t) {
  if (P(t)) {
    const o = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        o.call(e), (e._stopped = !0);
      }),
      t.map((n) => (s) => !s._stopped && n && n(s))
    );
  } else return t;
}
const js = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 && // lowercase letter
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  su = (e, t, o, n, s, r) => {
    const i = s === "svg";
    t === "class"
      ? Kc(e, n, i)
      : t === "style"
      ? Yc(e, o, n)
      : oo(t)
      ? wo(t) || Zc(e, t, o, n, r)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : ru(e, t, n, i)
        )
      ? (Ms(e, t, n),
        !e.tagName.includes("-") &&
          (t === "value" || t === "checked" || t === "selected") &&
          Rs(e, t, n, i, r, t !== "value"))
      : /* #11081 force set props for possible async custom element */ e._isVueCE &&
        (/[A-Z]/.test(t) || !oe(n))
      ? Ms(e, ye(t), n, r, t)
      : (t === "true-value"
          ? (e._trueValue = n)
          : t === "false-value" && (e._falseValue = n),
        Rs(e, t, n, i));
  };
function ru(e, t, o, n) {
  if (n)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && js(t) && F(o))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return js(t) && oe(o) ? !1 : t in e;
}
const Us = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Zn(e, t, o) {
  const n = /* @__PURE__ */ El(e, t);
  Ho(n) && ne(n, t);
  class s extends qn {
    constructor(i) {
      super(n, i, o);
    }
  }
  return (s.def = n), s;
}
const iu = typeof HTMLElement < "u" ? HTMLElement : class {};
class qn extends iu {
  constructor(t, o = {}, n = Ws) {
    super(),
      (this._def = t),
      (this._props = o),
      (this._createApp = n),
      (this._isVueCE = !0),
      (this._instance = null),
      (this._app = null),
      (this._nonce = this._def.nonce),
      (this._connected = !1),
      (this._resolved = !1),
      (this._numberProps = null),
      (this._styleChildren = /* @__PURE__ */ new WeakSet()),
      (this._ob = null),
      this.shadowRoot && n !== Ws
        ? (this._root = this.shadowRoot)
        : (process.env.NODE_ENV !== "production" &&
            this.shadowRoot &&
            De(
              "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
            ),
          t.shadowRoot !== !1
            ? (this.attachShadow({ mode: "open" }),
              (this._root = this.shadowRoot))
            : (this._root = this)),
      this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), (this._connected = !0);
    let t = this;
    for (; (t = t && (t.parentNode || t.host)); )
      if (t instanceof qn) {
        this._parent = t;
        break;
      }
    this._instance ||
      (this._resolved
        ? (this._setParent(), this._update())
        : t && t._pendingResolve
        ? (this._pendingResolve = t._pendingResolve.then(() => {
            (this._pendingResolve = void 0), this._resolveDef();
          }))
        : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t &&
      ((this._instance.parent = t._instance),
      (this._instance.provides = t._instance.provides));
  }
  disconnectedCallback() {
    (this._connected = !1),
      Ln(() => {
        this._connected ||
          (this._ob && (this._ob.disconnect(), (this._ob = null)),
          this._app && this._app.unmount(),
          this._instance && (this._instance.ce = void 0),
          (this._app = this._instance = null));
      });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve) return;
    for (let n = 0; n < this.attributes.length; n++)
      this._setAttr(this.attributes[n].name);
    (this._ob = new MutationObserver((n) => {
      for (const s of n) this._setAttr(s.attributeName);
    })),
      this._ob.observe(this, { attributes: !0 });
    const t = (n, s = !1) => {
        (this._resolved = !0), (this._pendingResolve = void 0);
        const { props: r, styles: i } = n;
        let l;
        if (r && !P(r))
          for (const u in r) {
            const p = r[u];
            (p === Number || (p && p.type === Number)) &&
              (u in this._props && (this._props[u] = rs(this._props[u])),
              ((l || (l = /* @__PURE__ */ Object.create(null)))[ye(u)] = !0));
          }
        (this._numberProps = l),
          s && this._resolveProps(n),
          this.shadowRoot
            ? this._applyStyles(i)
            : process.env.NODE_ENV !== "production" &&
              i &&
              De(
                "Custom element style injection is not supported when using shadowRoot: false"
              ),
          this._mount(n);
      },
      o = this._def.__asyncLoader;
    o
      ? (this._pendingResolve = o().then((n) => t((this._def = n), !0)))
      : t(this._def);
  }
  _mount(t) {
    process.env.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"),
      (this._app = this._createApp(t)),
      t.configureApp && t.configureApp(this._app),
      (this._app._ceVNode = this._createVNode()),
      this._app.mount(this._root);
    const o = this._instance && this._instance.exposed;
    if (o)
      for (const n in o)
        W(this, n)
          ? process.env.NODE_ENV !== "production" &&
            De(`Exposed property "${n}" already exists on custom element.`)
          : Object.defineProperty(this, n, {
              // unwrap ref to be consistent with public instance behavior
              get: () => Pt(o[n]),
            });
  }
  _resolveProps(t) {
    const { props: o } = t,
      n = P(o) ? o : Object.keys(o || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && n.includes(s) && this._setProp(s, this[s]);
    for (const s of n.map(ye))
      Object.defineProperty(this, s, {
        get() {
          return this._getProp(s);
        },
        set(r) {
          this._setProp(s, r, !0, !0);
        },
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const o = this.hasAttribute(t);
    let n = o ? this.getAttribute(t) : Us;
    const s = ye(t);
    o && this._numberProps && this._numberProps[s] && (n = rs(n)),
      this._setProp(s, n, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, o, n = !0, s = !1) {
    if (
      o !== this._props[t] &&
      (o === Us
        ? delete this._props[t]
        : ((this._props[t] = o),
          t === "key" && this._app && (this._app._ceVNode.key = o)),
      s && this._instance && this._update(),
      n)
    ) {
      const r = this._ob;
      r && r.disconnect(),
        o === !0
          ? this.setAttribute(we(t), "")
          : typeof o == "string" || typeof o == "number"
          ? this.setAttribute(we(t), o + "")
          : o || this.removeAttribute(we(t)),
        r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    uu(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot ||
      (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const o = Le(this._def, ne(t, this._props));
    return (
      this._instance ||
        (o.ce = (n) => {
          (this._instance = n),
            (n.ce = this),
            (n.isCE = !0),
            process.env.NODE_ENV !== "production" &&
              (n.ceReload = (r) => {
                this._styles &&
                  (this._styles.forEach((i) => this._root.removeChild(i)),
                  (this._styles.length = 0)),
                  this._applyStyles(r),
                  (this._instance = null),
                  this._update();
              });
          const s = (r, i) => {
            this.dispatchEvent(
              new CustomEvent(
                r,
                Ho(i[0]) ? ne({ detail: i }, i[0]) : { detail: i }
              )
            );
          };
          (n.emit = (r, ...i) => {
            s(r, i), we(r) !== r && s(we(r), i);
          }),
            this._setParent();
        }),
      o
    );
  }
  _applyStyles(t, o) {
    if (!t) return;
    if (o) {
      if (o === this._def || this._styleChildren.has(o)) return;
      this._styleChildren.add(o);
    }
    const n = this._nonce;
    for (let s = t.length - 1; s >= 0; s--) {
      const r = document.createElement("style");
      if (
        (n && r.setAttribute("nonce", n),
        (r.textContent = t[s]),
        this.shadowRoot.prepend(r),
        process.env.NODE_ENV !== "production")
      )
        if (o) {
          if (o.__hmrId) {
            this._childStyles ||
              (this._childStyles = /* @__PURE__ */ new Map());
            let i = this._childStyles.get(o.__hmrId);
            i || this._childStyles.set(o.__hmrId, (i = [])), i.push(r);
          }
        } else (this._styles || (this._styles = [])).push(r);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = (this._slots = {});
    let o;
    for (; (o = this.firstChild); ) {
      const n = (o.nodeType === 1 && o.getAttribute("slot")) || "default";
      (t[n] || (t[n] = [])).push(o), this.removeChild(o);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"),
      o = this._instance.type.__scopeId;
    for (let n = 0; n < t.length; n++) {
      const s = t[n],
        r = s.getAttribute("name") || "default",
        i = this._slots[r],
        l = s.parentNode;
      if (i)
        for (const u of i) {
          if (o && u.nodeType === 1) {
            const p = o + "-s",
              d = document.createTreeWalker(u, 1);
            u.setAttribute(p, "");
            let a;
            for (; (a = d.nextNode()); ) a.setAttribute(p, "");
          }
          l.insertBefore(u, s);
        }
      else for (; s.firstChild; ) l.insertBefore(s.firstChild, s);
      l.removeChild(s);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
    if (
      process.env.NODE_ENV !== "production" &&
      (this._styleChildren.delete(t), this._childStyles && t.__hmrId)
    ) {
      const o = this._childStyles.get(t.__hmrId);
      o && (o.forEach((n) => this._root.removeChild(n)), (o.length = 0));
    }
  }
}
const Rt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return P(t) ? (o) => Dt(t, o) : t;
};
function lu(e) {
  e.target.composing = !0;
}
function Hs(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const Xe = Symbol("_assign"),
  ze = {
    created(e, { modifiers: { lazy: t, trim: o, number: n } }, s) {
      e[Xe] = Rt(s);
      const r = n || (s.props && s.props.type === "number");
      at(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let l = e.value;
        o && (l = l.trim()), r && (l = Vo(l)), e[Xe](l);
      }),
        o &&
          at(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (at(e, "compositionstart", lu),
          at(e, "compositionend", Hs),
          at(e, "change", Hs));
    },
    // set value on mounted so it's after min/max for type="range"
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, oldValue: o, modifiers: { lazy: n, trim: s, number: r } },
      i
    ) {
      if (((e[Xe] = Rt(i)), e.composing)) return;
      const l =
          (r || e.type === "number") && !/^0\d/.test(e.value)
            ? Vo(e.value)
            : e.value,
        u = t ?? "";
      l !== u &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          ((n && t === o) || (s && e.value.trim() === u))) ||
          (e.value = u));
    },
  },
  Ls = {
    created(e, { value: t }, o) {
      (e.checked = At(t, o.props.value)),
        (e[Xe] = Rt(o)),
        at(e, "change", () => {
          e[Xe](to(e));
        });
    },
    beforeUpdate(e, { value: t, oldValue: o }, n) {
      (e[Xe] = Rt(n)), t !== o && (e.checked = At(t, n.props.value));
    },
  },
  it = {
    // <select multiple> value need to be deep traversed
    deep: !0,
    created(e, { value: t, modifiers: { number: o } }, n) {
      const s = Uo(t);
      at(e, "change", () => {
        const r = Array.prototype.filter
          .call(e.options, (i) => i.selected)
          .map((i) => (o ? Vo(to(i)) : to(i)));
        e[Xe](e.multiple ? (s ? new Set(r) : r) : r[0]),
          (e._assigning = !0),
          Ln(() => {
            e._assigning = !1;
          });
      }),
        (e[Xe] = Rt(n));
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted(e, { value: t }) {
      Bs(e, t);
    },
    beforeUpdate(e, t, o) {
      e[Xe] = Rt(o);
    },
    updated(e, { value: t }) {
      e._assigning || Bs(e, t);
    },
  };
function Bs(e, t) {
  const o = e.multiple,
    n = P(t);
  if (o && !n && !Uo(t)) {
    process.env.NODE_ENV !== "production" &&
      De(
        `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString
          .call(t)
          .slice(8, -1)}.`
      );
    return;
  }
  for (let s = 0, r = e.options.length; s < r; s++) {
    const i = e.options[s],
      l = to(i);
    if (o)
      if (n) {
        const u = typeof l;
        u === "string" || u === "number"
          ? (i.selected = t.some((p) => String(p) === String(l)))
          : (i.selected = Oi(t, l) > -1);
      } else i.selected = t.has(l);
    else if (At(to(i), t)) {
      e.selectedIndex !== s && (e.selectedIndex = s);
      return;
    }
  }
  !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function to(e) {
  return "_value" in e ? e._value : e.value;
}
const cu = /* @__PURE__ */ ne({ patchProp: su }, Lc);
let Ks;
function oi() {
  return Ks || (Ks = lc(cu));
}
const uu = (...e) => {
    oi().render(...e);
  },
  Ws = (...e) => {
    const t = oi().createApp(...e);
    process.env.NODE_ENV !== "production" && (fu(t), du(t));
    const { mount: o } = t;
    return (
      (t.mount = (n) => {
        const s = pu(n);
        if (!s) return;
        const r = t._component;
        !F(r) && !r.render && !r.template && (r.template = s.innerHTML),
          s.nodeType === 1 && (s.textContent = "");
        const i = o(s, !1, au(s));
        return (
          s instanceof Element &&
            (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
          i
        );
      }),
      t
    );
  };
function au(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function fu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => gi(t) || vi(t) || bi(t),
    writable: !1,
  });
}
function du(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        De(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      },
    });
    const o = e.config.compilerOptions,
      n =
        'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return De(n), o;
      },
      set() {
        De(n);
      },
    });
  }
}
function pu(e) {
  if (oe(e)) {
    const t = document.querySelector(e);
    return (
      process.env.NODE_ENV !== "production" &&
        !t &&
        De(`Failed to mount app: mount target selector "${e}" returned null.`),
      t
    );
  }
  return (
    process.env.NODE_ENV !== "production" &&
      window.ShadowRoot &&
      e instanceof window.ShadowRoot &&
      e.mode === "closed" &&
      De(
        'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
      ),
    e
  );
}
/**
 * vue v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function hu() {
  jc();
}
process.env.NODE_ENV !== "production" && hu();
const _u = { class: "form-builder" },
  mu = ["placeholder"],
  gu = { class: "section-header" },
  vu = ["onUpdate:modelValue", "placeholder"],
  bu = ["onClick"],
  yu = { class: "rules-group" },
  Eu = ["onUpdate:modelValue"],
  Nu = ["value"],
  Ou = ["onUpdate:modelValue"],
  wu = ["onUpdate:modelValue", "placeholder"],
  xu = ["onUpdate:modelValue"],
  Vu = { value: "show" },
  Du = { value: "hide" },
  Su = ["onClick"],
  Cu = ["onClick"],
  Tu = ["onUpdate:modelValue", "placeholder"],
  $u = ["onUpdate:modelValue"],
  Au = { value: "text" },
  Pu = { value: "textarea" },
  Ru = { value: "radio" },
  Mu = { value: "checkbox" },
  Iu = { value: "date" },
  ku = { value: "scoring" },
  Fu = { value: "dropdown" },
  ju = ["onUpdate:modelValue", "placeholder"],
  Uu = ["onClick"],
  Hu = ["onClick"],
  Lu = { class: "rules-group" },
  Bu = ["onUpdate:modelValue"],
  Ku = ["value"],
  Wu = ["onUpdate:modelValue"],
  Ju = ["onUpdate:modelValue", "placeholder"],
  Gu = ["onUpdate:modelValue"],
  Yu = { value: "show" },
  zu = { value: "hide" },
  Qu = ["onClick"],
  Xu = ["onClick"],
  Zu = ["onClick"],
  qu = ["onClick"],
  ea = { class: "form-actions" },
  ta = {
    __name: "Builder",
    props: {
      data: [Object, String],
      translations: [Object, String],
      buildHandler: [Function],
    },
    setup(e) {
      const t = e,
        o = {
          formTitlePlaceholder: "Form title",
          sectionTitlePlaceholder: (w) => `Section ${w + 1} title`,
          deleteSection: "Delete section",
          addRuleToSection: "+ Add Rule to Section",
          deleteRule: "Delete",
          valuePlaceholder: "Value",
          show: "Show",
          hide: "Hide",
          questionPlaceholder: (w) => `Question ${w + 1}`,
          shortAnswer: "Short answer",
          paragraph: "Paragraph",
          singleChoice: "Single choice",
          multipleChoice: "Multiple choice",
          date: "Date",
          scoring: "Scoring",
          dropdown: "Dropdown",
          optionPlaceholder: "Option",
          addOption: "Add option",
          addRuleToQuestion: "+ Add Rule to Question",
          deleteQuestion: "Delete question",
          addQuestion: "Add question",
          addSection: "Add section",
          downloadForm: "Download current form",
          buildForm: "Build Form",
        },
        n = Fo(() => {
          let w = {};
          try {
            w =
              typeof t.translations == "string"
                ? JSON.parse(t.translations)
                : t.translations;
          } catch (A) {
            console.error(
              "Invalid JSON string passed to `translations` prop",
              A
            );
          }
          const $ = { ...o, ...w };
          return (
            typeof $.sectionTitlePlaceholder != "function" &&
              ($.sectionTitlePlaceholder = o.sectionTitlePlaceholder),
            typeof $.questionPlaceholder != "function" &&
              ($.questionPlaceholder = o.questionPlaceholder),
            $
          );
        }),
        s = So(""),
        r = So([]),
        i = () => crypto.randomUUID(),
        l = () => {
          r.value.push({ id: i(), title: "", questions: [], rules: [] });
        },
        u = (w) => {
          const $ = r.value.find((A) => A.id === w);
          $ &&
            $.questions.push({
              id: i(),
              text: "",
              type: "text",
              options: [],
              rules: [],
            });
        },
        p = (w) => {
          r.value[w].rules.push({
            if: { questionId: "", operator: "===", value: "" },
            then: { action: "show" },
          });
        },
        d = (w, $) => {
          (r.value[w].questions[$].rules = r.value[w].questions[$].rules || []),
            r.value[w].questions[$].rules.push({
              if: { questionId: "", operator: "===", value: "" },
              then: { action: "show" },
            });
        },
        a = Fo(() => r.value.flatMap((w) => w.questions)),
        _ = () => typeof t.buildHandler == "function",
        m = () => {
          try {
            const w = {
              title: s.value,
              sections: r.value.map(($) => ({
                id: $.id,
                title: $.title,
                rules: $.rules || [],
                questions: $.questions.map((A) => ({
                  id: A.id,
                  text: A.text,
                  type: A.type,
                  options: A.options,
                  rules: A.rules || [],
                  answer: A.answer ?? null,
                })),
              })),
            };
            t.buildHandler(JSON.parse(JSON.stringify(w)));
          } catch (w) {
            console.warn("Issue in buildForm: " + w);
          }
        },
        V = () => {
          const w = {
              title: s.value,
              sections: r.value.map((T) => ({
                id: T.id,
                title: T.title,
                rules: T.rules || [],
                questions: T.questions.map((X) => ({
                  id: X.id,
                  text: X.text,
                  type: X.type,
                  options: X.options,
                  rules: X.rules || [],
                  answer: X.answer ?? null,
                })),
              })),
            },
            $ = new Blob([JSON.stringify(w, null, 2)], {
              type: "application/json",
            }),
            A = URL.createObjectURL($),
            J = document.createElement("a");
          (J.href = A),
            (J.download = "form-schema.json"),
            J.click(),
            URL.revokeObjectURL(A);
        };
      return (
        zo(() => {
          let w = null;
          try {
            w = typeof t.data == "string" ? JSON.parse(t.data) : t.data;
          } catch ($) {
            console.error("Invalid JSON string passed to `data` prop", $);
          }
          w &&
            ((s.value = w.title || ""),
            (r.value = (w.sections || []).map(
              ($) => (
                $.id || ($.id = i()),
                ($.questions = ($.questions || []).map(
                  (A) => (A.id || (A.id = i()), A)
                )),
                $
              )
            )));
        }),
        (w, $) => (
          R(),
          M("div", _u, [
            re(
              C(
                "input",
                {
                  "onUpdate:modelValue": $[0] || ($[0] = (A) => (s.value = A)),
                  placeholder: n.value.formTitlePlaceholder,
                  class: "form-title-input",
                },
                null,
                8,
                mu
              ),
              [[ze, s.value]]
            ),
            (R(!0),
            M(
              q,
              null,
              ae(
                r.value,
                (A, J) => (
                  R(),
                  M(
                    "div",
                    {
                      key: A.id,
                      class: "section-card",
                    },
                    [
                      C("div", gu, [
                        re(
                          C(
                            "input",
                            {
                              "onUpdate:modelValue": (T) => (A.title = T),
                              placeholder: n.value.sectionTitlePlaceholder(J),
                              class: "section-title-input",
                            },
                            null,
                            8,
                            vu
                          ),
                          [[ze, A.title]]
                        ),
                        C(
                          "button",
                          {
                            onClick: () => r.value.splice(J, 1),
                            class: "delete-button",
                          },
                          U(n.value.deleteSection),
                          9,
                          bu
                        ),
                      ]),
                      C("div", yu, [
                        (R(!0),
                        M(
                          q,
                          null,
                          ae(
                            A.rules,
                            (T, X) => (
                              R(),
                              M(
                                "div",
                                {
                                  key: X,
                                  class: "rule-row",
                                },
                                [
                                  re(
                                    C(
                                      "select",
                                      {
                                        "onUpdate:modelValue": (D) =>
                                          (T.if.questionId = D),
                                        class: "rule-input",
                                      },
                                      [
                                        (R(!0),
                                        M(
                                          q,
                                          null,
                                          ae(
                                            a.value,
                                            (D) => (
                                              R(),
                                              M(
                                                "option",
                                                {
                                                  value: D.id,
                                                },
                                                U(D.text),
                                                9,
                                                Nu
                                              )
                                            )
                                          ),
                                          256
                                        )),
                                      ],
                                      8,
                                      Eu
                                    ),
                                    [[it, T.if.questionId]]
                                  ),
                                  re(
                                    C(
                                      "select",
                                      {
                                        "onUpdate:modelValue": (D) =>
                                          (T.if.operator = D),
                                        class: "rule-input",
                                      },
                                      $[1] ||
                                        ($[1] = [
                                          C(
                                            "option",
                                            { value: "===" },
                                            "===",
                                            -1
                                          ),
                                          C("option", { value: ">" }, ">", -1),
                                          C(
                                            "option",
                                            { value: ">=" },
                                            ">=",
                                            -1
                                          ),
                                        ]),
                                      8,
                                      Ou
                                    ),
                                    [[it, T.if.operator]]
                                  ),
                                  re(
                                    C(
                                      "input",
                                      {
                                        "onUpdate:modelValue": (D) =>
                                          (T.if.value = D),
                                        placeholder: n.value.valuePlaceholder,
                                        class: "rule-input",
                                      },
                                      null,
                                      8,
                                      wu
                                    ),
                                    [[ze, T.if.value]]
                                  ),
                                  re(
                                    C(
                                      "select",
                                      {
                                        "onUpdate:modelValue": (D) =>
                                          (T.then.action = D),
                                        class: "rule-input",
                                      },
                                      [
                                        C("option", Vu, U(n.value.show), 1),
                                        C("option", Du, U(n.value.hide), 1),
                                      ],
                                      8,
                                      xu
                                    ),
                                    [[it, T.then.action]]
                                  ),
                                  C(
                                    "button",
                                    {
                                      onClick: () =>
                                        r.value[J].rules.splice(X, 1),
                                      class: "delete-button",
                                    },
                                    U(n.value.deleteRule),
                                    9,
                                    Su
                                  ),
                                ]
                              )
                            )
                          ),
                          128
                        )),
                        C(
                          "button",
                          {
                            onClick: () => p(J),
                            class: "text-button",
                          },
                          U(n.value.addRuleToSection),
                          9,
                          Cu
                        ),
                      ]),
                      (R(!0),
                      M(
                        q,
                        null,
                        ae(
                          A.questions,
                          (T, X) => (
                            R(),
                            M(
                              "div",
                              {
                                key: T.id,
                                class: "question-card",
                              },
                              [
                                re(
                                  C(
                                    "input",
                                    {
                                      "onUpdate:modelValue": (D) =>
                                        (T.text = D),
                                      placeholder:
                                        n.value.questionPlaceholder(X),
                                      class: "question-input",
                                    },
                                    null,
                                    8,
                                    Tu
                                  ),
                                  [[ze, T.text]]
                                ),
                                re(
                                  C(
                                    "select",
                                    {
                                      "onUpdate:modelValue": (D) =>
                                        (T.type = D),
                                      class: "question-type-select",
                                    },
                                    [
                                      C(
                                        "option",
                                        Au,
                                        U(n.value.shortAnswer),
                                        1
                                      ),
                                      C("option", Pu, U(n.value.paragraph), 1),
                                      C(
                                        "option",
                                        Ru,
                                        U(n.value.singleChoice),
                                        1
                                      ),
                                      C(
                                        "option",
                                        Mu,
                                        U(n.value.multipleChoice),
                                        1
                                      ),
                                      C("option", Iu, U(n.value.date), 1),
                                      C("option", ku, U(n.value.scoring), 1),
                                      C("option", Fu, U(n.value.dropdown), 1),
                                    ],
                                    8,
                                    $u
                                  ),
                                  [[it, T.type]]
                                ),
                                [
                                  "radio",
                                  "checkbox",
                                  "scoring",
                                  "dropdown",
                                ].includes(T.type)
                                  ? (R(),
                                    M(
                                      q,
                                      { key: 0 },
                                      [
                                        (R(!0),
                                        M(
                                          q,
                                          null,
                                          ae(
                                            T.options,
                                            (D, ee) => (
                                              R(),
                                              M(
                                                "div",
                                                {
                                                  key: ee,
                                                  class: "option-row",
                                                },
                                                [
                                                  re(
                                                    C(
                                                      "input",
                                                      {
                                                        "onUpdate:modelValue": (
                                                          te
                                                        ) =>
                                                          (T.options[ee] = te),
                                                        class: "option-input",
                                                        placeholder:
                                                          n.value
                                                            .optionPlaceholder,
                                                      },
                                                      null,
                                                      8,
                                                      ju
                                                    ),
                                                    [[ze, T.options[ee]]]
                                                  ),
                                                  C(
                                                    "button",
                                                    {
                                                      onClick: () =>
                                                        T.options.splice(ee, 1),
                                                      class: "delete-button",
                                                    },
                                                    U(n.value.deleteRule),
                                                    9,
                                                    Uu
                                                  ),
                                                ]
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                        C(
                                          "button",
                                          {
                                            onClick: () => T.options.push(""),
                                            class: "text-button",
                                          },
                                          U(n.value.addOption),
                                          9,
                                          Hu
                                        ),
                                      ],
                                      64
                                    ))
                                  : He("", !0),
                                C("div", Lu, [
                                  (R(!0),
                                  M(
                                    q,
                                    null,
                                    ae(
                                      T.rules,
                                      (D, ee) => (
                                        R(),
                                        M(
                                          "div",
                                          {
                                            key: ee,
                                            class: "rule-row",
                                          },
                                          [
                                            re(
                                              C(
                                                "select",
                                                {
                                                  "onUpdate:modelValue": (te) =>
                                                    (D.if.questionId = te),
                                                  class: "rule-input",
                                                },
                                                [
                                                  (R(!0),
                                                  M(
                                                    q,
                                                    null,
                                                    ae(
                                                      a.value,
                                                      (te) => (
                                                        R(),
                                                        M(
                                                          "option",
                                                          {
                                                            value: te.id,
                                                          },
                                                          U(te.text),
                                                          9,
                                                          Ku
                                                        )
                                                      )
                                                    ),
                                                    256
                                                  )),
                                                ],
                                                8,
                                                Bu
                                              ),
                                              [[it, D.if.questionId]]
                                            ),
                                            re(
                                              C(
                                                "select",
                                                {
                                                  "onUpdate:modelValue": (te) =>
                                                    (D.if.operator = te),
                                                  class: "rule-input",
                                                },
                                                $[2] ||
                                                  ($[2] = [
                                                    C(
                                                      "option",
                                                      { value: "===" },
                                                      "===",
                                                      -1
                                                    ),
                                                    C(
                                                      "option",
                                                      { value: ">" },
                                                      ">",
                                                      -1
                                                    ),
                                                    C(
                                                      "option",
                                                      { value: ">=" },
                                                      ">=",
                                                      -1
                                                    ),
                                                  ]),
                                                8,
                                                Wu
                                              ),
                                              [[it, D.if.operator]]
                                            ),
                                            re(
                                              C(
                                                "input",
                                                {
                                                  "onUpdate:modelValue": (te) =>
                                                    (D.if.value = te),
                                                  placeholder:
                                                    n.value.valuePlaceholder,
                                                  class: "rule-input",
                                                },
                                                null,
                                                8,
                                                Ju
                                              ),
                                              [[ze, D.if.value]]
                                            ),
                                            re(
                                              C(
                                                "select",
                                                {
                                                  "onUpdate:modelValue": (te) =>
                                                    (D.then.action = te),
                                                  class: "rule-input",
                                                },
                                                [
                                                  C(
                                                    "option",
                                                    Yu,
                                                    U(n.value.show),
                                                    1
                                                  ),
                                                  C(
                                                    "option",
                                                    zu,
                                                    U(n.value.hide),
                                                    1
                                                  ),
                                                ],
                                                8,
                                                Gu
                                              ),
                                              [[it, D.then.action]]
                                            ),
                                            C(
                                              "button",
                                              {
                                                onClick: () =>
                                                  A.questions[X].rules.splice(
                                                    ee,
                                                    1
                                                  ),
                                                class: "delete-button",
                                              },
                                              U(n.value.deleteRule),
                                              9,
                                              Qu
                                            ),
                                          ]
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                  C(
                                    "button",
                                    {
                                      onClick: () => d(J, X),
                                      class: "text-button",
                                    },
                                    U(n.value.addRuleToQuestion),
                                    9,
                                    Xu
                                  ),
                                ]),
                                C(
                                  "button",
                                  {
                                    onClick: () => A.questions.splice(X, 1),
                                    class: "delete-button",
                                  },
                                  U(n.value.deleteQuestion),
                                  9,
                                  Zu
                                ),
                              ]
                            )
                          )
                        ),
                        128
                      )),
                      C(
                        "button",
                        {
                          onClick: () => u(A.id),
                          class: "action-button",
                        },
                        U(n.value.addQuestion),
                        9,
                        qu
                      ),
                    ]
                  )
                )
              ),
              128
            )),
            C("div", ea, [
              C(
                "button",
                {
                  onClick: l,
                  class: "action-button",
                },
                U(n.value.addSection),
                1
              ),
              _()
                ? (R(),
                  M(
                    "button",
                    {
                      key: 0,
                      onClick: m,
                      class: "submit-button",
                    },
                    U(n.value.buildForm),
                    1
                  ))
                : He("", !0),
              C(
                "button",
                {
                  onClick: V,
                  class: "download-button",
                },
                U(n.value.downloadForm),
                1
              ),
            ]),
          ])
        )
      );
    },
  };
function oa(e, t) {
  const o = t[e.if.questionId],
    n = e.if.value;
  switch (e.if.operator) {
    case "===":
      return o === n;
    case "!==":
      return o !== n;
    case ">":
      return o > n;
    case "<":
      return o < n;
    case ">=":
      return o >= n;
    case "<=":
      return o <= n;
    case "includes":
      return Array.isArray(o) && o.includes(n);
    default:
      return !1;
  }
}
function jo(e = [], t) {
  if (e.length === 0) return !0;
  for (const o of e) {
    const n = oa(o, t);
    if ((o.then.action === "hide" && n) || (o.then.action === "show" && !n))
      return !1;
  }
  return !0;
}
const na = { class: "form-viewer" },
  sa = { class: "form-title" },
  ra = { key: 0 },
  ia = { class: "section-title" },
  la = { key: 0 },
  ca = { class: "question-label" },
  ua = { key: 0 },
  aa = { class: "answer-text" },
  fa = { key: 1 },
  da = { class: "answer-text" },
  pa = {
    key: 2,
    class: "answer-list",
  },
  ha = {
    key: 0,
    class: "answer-text",
  },
  _a = { key: 3 },
  ma = { class: "answer-text" },
  ga = {
    __name: "Viewer",
    props: {
      data: {
        type: [Object, String],
        required: !0,
      },
    },
    setup(e) {
      const t = e,
        o = So({
          title: "",
          sections: [],
        }),
        n = ro({});
      return (
        zo(() => {
          let s = null;
          try {
            s = typeof t.data == "string" ? JSON.parse(t.data) : t.data;
          } catch (r) {
            console.error("Invalid JSON string passed to `data` prop:", r);
          }
          if (s) {
            o.value = s;
            for (const r of o.value.sections)
              for (const i of r.questions) n[i.id] = i.answer;
          }
        }),
        (s, r) => (
          R(),
          M("div", na, [
            C("h2", sa, U(o.value.title), 1),
            (R(!0),
            M(
              q,
              null,
              ae(
                o.value.sections,
                (i) => (
                  R(),
                  M(
                    "div",
                    {
                      key: i.id,
                      class: "section",
                    },
                    [
                      Pt(jo)(i.rules, n)
                        ? (R(),
                          M("div", ra, [
                            C("h3", ia, U(i.title), 1),
                            (R(!0),
                            M(
                              q,
                              null,
                              ae(
                                i.questions,
                                (l) => (
                                  R(),
                                  M(
                                    "div",
                                    {
                                      key: l.id,
                                      class: "question-card",
                                    },
                                    [
                                      Pt(jo)(l.rules, n)
                                        ? (R(),
                                          M("div", la, [
                                            C("p", ca, U(l.text), 1),
                                            l.type === "text" ||
                                            l.type === "textarea" ||
                                            l.type === "date"
                                              ? (R(),
                                                M("p", ua, [
                                                  C(
                                                    "span",
                                                    aa,
                                                    U(l.answer || "—"),
                                                    1
                                                  ),
                                                ]))
                                              : l.type === "radio" ||
                                                l.type === "scoring"
                                              ? (R(),
                                                M("p", fa, [
                                                  C(
                                                    "span",
                                                    da,
                                                    U(l.answer || "—"),
                                                    1
                                                  ),
                                                ]))
                                              : l.type === "checkbox"
                                              ? (R(),
                                                M("ul", pa, [
                                                  (R(!0),
                                                  M(
                                                    q,
                                                    null,
                                                    ae(
                                                      l.answer,
                                                      (u, p) => (
                                                        R(),
                                                        M(
                                                          "li",
                                                          { key: p },
                                                          U(u),
                                                          1
                                                        )
                                                      )
                                                    ),
                                                    128
                                                  )),
                                                  !l.answer ||
                                                  l.answer.length === 0
                                                    ? (R(), M("li", ha, "—"))
                                                    : He("", !0),
                                                ]))
                                              : l.type === "dropdown"
                                              ? (R(),
                                                M("p", _a, [
                                                  C(
                                                    "span",
                                                    ma,
                                                    U(l.answer || "—"),
                                                    1
                                                  ),
                                                ]))
                                              : He("", !0),
                                          ]))
                                        : He("", !0),
                                    ]
                                  )
                                )
                              ),
                              128
                            )),
                          ]))
                        : He("", !0),
                    ]
                  )
                )
              ),
              128
            )),
          ])
        )
      );
    },
  },
  va = { class: "form-viewer" },
  ba = { class: "form-title" },
  ya = { key: 0 },
  Ea = { class: "section-title" },
  Na = { key: 0 },
  Oa = { class: "question-label" },
  wa = ["onUpdate:modelValue", "placeholder"],
  xa = ["onUpdate:modelValue", "placeholder"],
  Va = ["onUpdate:modelValue"],
  Da = {
    key: 3,
    class: "radio-group",
  },
  Sa = ["name", "value", "onUpdate:modelValue"],
  Ca = {
    key: 4,
    class: "checkbox-group",
  },
  Ta = ["value", "checked", "onChange"],
  $a = {
    key: 5,
    class: "scoring-group",
  },
  Aa = ["value", "onUpdate:modelValue", "name"],
  Pa = ["onUpdate:modelValue"],
  Ra = {
    disabled: "",
    value: "",
  },
  Ma = ["value"],
  Ia = {
    __name: "Filler",
    props: {
      data: {
        type: [Object, String],
        required: !0,
      },
      translations: {
        type: [Object, String],
        default: () => ({}),
      },
      submitHandler: [Function],
    },
    setup(e) {
      const t = e,
        o = {
          yourAnswer: "Your answer",
          selectAnOption: "Select an option",
          downloadAnswers: "Download answers",
          submitForm: "Submit Form",
        },
        n = Fo(() => {
          let d = {};
          try {
            d =
              typeof t.translations == "string"
                ? JSON.parse(t.translations)
                : t.translations;
          } catch (a) {
            console.error(
              "Invalid JSON string passed to `translations` prop:",
              a
            );
          }
          return { ...o, ...d };
        }),
        s = So({ title: "", sections: [] }),
        r = ro({}),
        i = (d, a) => {
          Array.isArray(r[d]) || (r[d] = []);
          const _ = r[d].indexOf(a);
          _ === -1 ? r[d].push(a) : r[d].splice(_, 1);
        },
        l = () => typeof t.submitHandler == "function",
        u = () => {
          try {
            const d = JSON.parse(JSON.stringify(s.value));
            for (const a of d.sections)
              for (const _ of a.questions) _.answer = r[_.id];
            t.submitHandler(d);
          } catch (d) {
            console.warn("Issue in submitForm: " + d);
          }
        },
        p = () => {
          const d = JSON.parse(JSON.stringify(s.value));
          for (const V of d.sections)
            for (const w of V.questions) w.answer = r[w.id];
          const a = new Blob([JSON.stringify(d, null, 2)], {
              type: "application/json",
            }),
            _ = URL.createObjectURL(a),
            m = document.createElement("a");
          (m.href = _),
            (m.download = "form-answers.json"),
            m.click(),
            URL.revokeObjectURL(_);
        };
      return (
        zo(() => {
          let d = null;
          try {
            d = typeof t.data == "string" ? JSON.parse(t.data) : t.data;
          } catch (a) {
            console.error("Invalid JSON string passed to `data` prop:", a);
          }
          if (d) {
            s.value = d;
            for (const a of s.value.sections)
              for (const _ of a.questions)
                _.id in r || (r[_.id] = _.type === "checkbox" ? [] : "");
          }
        }),
        (d, a) => (
          R(),
          M("div", va, [
            C("h2", ba, U(s.value.title), 1),
            (R(!0),
            M(
              q,
              null,
              ae(
                s.value.sections,
                (_) => (
                  R(),
                  M(
                    "div",
                    {
                      key: _.id,
                      class: "section",
                    },
                    [
                      Pt(jo)(_.rules, r)
                        ? (R(),
                          M("div", ya, [
                            C("h3", Ea, U(_.title), 1),
                            (R(!0),
                            M(
                              q,
                              null,
                              ae(
                                _.questions,
                                (m) => (
                                  R(),
                                  M(
                                    "div",
                                    {
                                      key: m.id,
                                      class: "question-card",
                                    },
                                    [
                                      Pt(jo)(m.rules, r)
                                        ? (R(),
                                          M("div", Na, [
                                            C("p", Oa, U(m.text), 1),
                                            m.type === "text"
                                              ? re(
                                                  (R(),
                                                  M(
                                                    "input",
                                                    {
                                                      key: 0,
                                                      "onUpdate:modelValue": (
                                                        V
                                                      ) => (r[m.id] = V),
                                                      placeholder:
                                                        n.value.yourAnswer,
                                                    },
                                                    null,
                                                    8,
                                                    wa
                                                  )),
                                                  [[ze, r[m.id]]]
                                                )
                                              : m.type === "textarea"
                                              ? re(
                                                  (R(),
                                                  M(
                                                    "textarea",
                                                    {
                                                      key: 1,
                                                      "onUpdate:modelValue": (
                                                        V
                                                      ) => (r[m.id] = V),
                                                      placeholder:
                                                        n.value.yourAnswer,
                                                    },
                                                    null,
                                                    8,
                                                    xa
                                                  )),
                                                  [[ze, r[m.id]]]
                                                )
                                              : m.type === "date"
                                              ? re(
                                                  (R(),
                                                  M(
                                                    "input",
                                                    {
                                                      key: 2,
                                                      type: "date",
                                                      "onUpdate:modelValue": (
                                                        V
                                                      ) => (r[m.id] = V),
                                                    },
                                                    null,
                                                    8,
                                                    Va
                                                  )),
                                                  [[ze, r[m.id]]]
                                                )
                                              : m.type === "radio"
                                              ? (R(),
                                                M("div", Da, [
                                                  (R(!0),
                                                  M(
                                                    q,
                                                    null,
                                                    ae(
                                                      m.options,
                                                      (V, w) => (
                                                        R(),
                                                        M(
                                                          "div",
                                                          {
                                                            key: w,
                                                            class:
                                                              "radio-option",
                                                          },
                                                          [
                                                            re(
                                                              C(
                                                                "input",
                                                                {
                                                                  type: "radio",
                                                                  name: m.id,
                                                                  value: V,
                                                                  "onUpdate:modelValue":
                                                                    ($) =>
                                                                      (r[m.id] =
                                                                        $),
                                                                },
                                                                null,
                                                                8,
                                                                Sa
                                                              ),
                                                              [[Ls, r[m.id]]]
                                                            ),
                                                            C(
                                                              "label",
                                                              null,
                                                              U(V),
                                                              1
                                                            ),
                                                          ]
                                                        )
                                                      )
                                                    ),
                                                    128
                                                  )),
                                                ]))
                                              : m.type === "checkbox"
                                              ? (R(),
                                                M("div", Ca, [
                                                  (R(!0),
                                                  M(
                                                    q,
                                                    null,
                                                    ae(
                                                      m.options,
                                                      (V, w) => (
                                                        R(),
                                                        M(
                                                          "div",
                                                          {
                                                            key: w,
                                                            class:
                                                              "checkbox-option",
                                                          },
                                                          [
                                                            C(
                                                              "input",
                                                              {
                                                                type: "checkbox",
                                                                value: V,
                                                                checked:
                                                                  Array.isArray(
                                                                    r[m.id]
                                                                  ) &&
                                                                  r[
                                                                    m.id
                                                                  ].includes(V),
                                                                onChange: ($) =>
                                                                  i(m.id, V),
                                                              },
                                                              null,
                                                              40,
                                                              Ta
                                                            ),
                                                            C(
                                                              "label",
                                                              null,
                                                              U(V),
                                                              1
                                                            ),
                                                          ]
                                                        )
                                                      )
                                                    ),
                                                    128
                                                  )),
                                                ]))
                                              : m.type === "scoring"
                                              ? (R(),
                                                M("div", $a, [
                                                  (R(!0),
                                                  M(
                                                    q,
                                                    null,
                                                    ae(
                                                      m.options,
                                                      (V, w) => (
                                                        R(),
                                                        M(
                                                          "div",
                                                          {
                                                            key: w,
                                                            class:
                                                              "scoring-option",
                                                          },
                                                          [
                                                            re(
                                                              C(
                                                                "input",
                                                                {
                                                                  type: "radio",
                                                                  value: V,
                                                                  "onUpdate:modelValue":
                                                                    ($) =>
                                                                      (r[m.id] =
                                                                        $),
                                                                  name: m.id,
                                                                },
                                                                null,
                                                                8,
                                                                Aa
                                                              ),
                                                              [[Ls, r[m.id]]]
                                                            ),
                                                            C(
                                                              "label",
                                                              null,
                                                              U(V),
                                                              1
                                                            ),
                                                          ]
                                                        )
                                                      )
                                                    ),
                                                    128
                                                  )),
                                                ]))
                                              : m.type === "dropdown"
                                              ? re(
                                                  (R(),
                                                  M(
                                                    "select",
                                                    {
                                                      key: 6,
                                                      "onUpdate:modelValue": (
                                                        V
                                                      ) => (r[m.id] = V),
                                                    },
                                                    [
                                                      C(
                                                        "option",
                                                        Ra,
                                                        U(
                                                          n.value.selectAnOption
                                                        ),
                                                        1
                                                      ),
                                                      (R(!0),
                                                      M(
                                                        q,
                                                        null,
                                                        ae(
                                                          m.options,
                                                          (V, w) => (
                                                            R(),
                                                            M(
                                                              "option",
                                                              {
                                                                key: w,
                                                                value: V,
                                                              },
                                                              U(V),
                                                              9,
                                                              Ma
                                                            )
                                                          )
                                                        ),
                                                        128
                                                      )),
                                                    ],
                                                    8,
                                                    Pa
                                                  )),
                                                  [[it, r[m.id]]]
                                                )
                                              : He("", !0),
                                          ]))
                                        : He("", !0),
                                    ]
                                  )
                                )
                              ),
                              128
                            )),
                          ]))
                        : He("", !0),
                    ]
                  )
                )
              ),
              128
            )),
            l()
              ? (R(),
                M(
                  "button",
                  {
                    key: 0,
                    onClick: u,
                    class: "submit-button",
                  },
                  U(n.value.submitForm),
                  1
                ))
              : He("", !0),
            C(
              "button",
              {
                onClick: p,
                class: "download-button",
              },
              U(n.value.downloadAnswers),
              1
            ),
          ])
        )
      );
    },
  },
  ka = /* @__PURE__ */ Zn(ta, { shadowRoot: !0, styles: [Tn] });
customElements.define("formify-builder", ka);
const Fa = /* @__PURE__ */ Zn(ga, { shadowRoot: !0, styles: [Tn] });
customElements.define("formify-viewer", Fa);
const ja = /* @__PURE__ */ Zn(Ia, { shadowRoot: !0, styles: [Tn] });
customElements.define("formify-filler", ja);
