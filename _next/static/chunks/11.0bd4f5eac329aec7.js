"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [11], {
        3011: function(e) {
            e.exports = function() {
                let e = {
                        find: function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement;
                            return [].concat(...Element.prototype.querySelectorAll.call(t, e))
                        },
                        findOne: function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement;
                            return Element.prototype.querySelector.call(t, e)
                        },
                        children: (e, t) => [].concat(...e.children).filter(e => e.matches(t)),
                        parents(e, t) {
                            let i = [],
                                s = e.parentNode;
                            for (; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType;) s.matches(t) && i.push(s), s = s.parentNode;
                            return i
                        },
                        prev(e, t) {
                            let i = e.previousElementSibling;
                            for (; i;) {
                                if (i.matches(t)) return [i];
                                i = i.previousElementSibling
                            }
                            return []
                        },
                        next(e, t) {
                            let i = e.nextElementSibling;
                            for (; i;) {
                                if (i.matches(t)) return [i];
                                i = i.nextElementSibling
                            }
                            return []
                        }
                    },
                    t = e => {
                        do e += Math.floor(1e6 * Math.random()); while (document.getElementById(e));
                        return e
                    },
                    i = e => {
                        let t = e.getAttribute("data-bs-target");
                        if (!t || "#" === t) {
                            let i = e.getAttribute("href");
                            if (!i || !i.includes("#") && !i.startsWith(".")) return null;
                            i.includes("#") && !i.startsWith("#") && (i = "#" + i.split("#")[1]), t = i && "#" !== i ? i.trim() : null
                        }
                        return t
                    },
                    s = e => {
                        let t = i(e);
                        return t && document.querySelector(t) ? t : null
                    },
                    n = e => {
                        let t = i(e);
                        return t ? document.querySelector(t) : null
                    },
                    o = e => {
                        e.dispatchEvent(new Event("transitionend"))
                    },
                    r = e => !(!e || "object" != typeof e) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
                    a = t => r(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? e.findOne(t) : null,
                    l = (e, t, i) => {
                        Object.keys(i).forEach(s => {
                            let n = i[s],
                                o = t[s],
                                a = o && r(o) ? "element" : null == o ? "" + o : ({}).toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();
                            if (!RegExp(n).test(a)) throw TypeError("".concat(e.toUpperCase(), ': Option "').concat(s, '" provided type "').concat(a, '" but expected type "').concat(n, '".'))
                        })
                    },
                    c = e => !(!r(e) || 0 === e.getClientRects().length) && "visible" === getComputedStyle(e).getPropertyValue("visibility"),
                    h = e => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
                    d = e => {
                        if (!document.documentElement.attachShadow) return null;
                        if ("function" == typeof e.getRootNode) {
                            let t = e.getRootNode();
                            return t instanceof ShadowRoot ? t : null
                        }
                        return e instanceof ShadowRoot ? e : e.parentNode ? d(e.parentNode) : null
                    },
                    u = () => {},
                    f = e => e.offsetHeight,
                    p = () => {
                        let {
                            jQuery: e
                        } = window;
                        return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null
                    },
                    m = [],
                    g = () => "rtl" === document.documentElement.dir,
                    _ = e => {
                        var t;
                        t = () => {
                            let t = p();
                            if (t) {
                                let i = e.NAME,
                                    s = t.fn[i];
                                t.fn[i] = e.jQueryInterface, t.fn[i].Constructor = e, t.fn[i].noConflict = () => (t.fn[i] = s, e.jQueryInterface)
                            }
                        }, "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", () => {
                            m.forEach(e => e())
                        }), m.push(t)) : t()
                    },
                    b = e => {
                        "function" == typeof e && e()
                    },
                    v = function(e, t) {
                        let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        if (!i) return void b(e);
                        let s = (e => {
                                if (!e) return 0;
                                let {
                                    transitionDuration: t,
                                    transitionDelay: i
                                } = window.getComputedStyle(e), s = Number.parseFloat(t), n = Number.parseFloat(i);
                                return s || n ? (t = t.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(t) + Number.parseFloat(i))) : 0
                            })(t) + 5,
                            n = !1,
                            r = i => {
                                let {
                                    target: s
                                } = i;
                                s === t && (n = !0, t.removeEventListener("transitionend", r), b(e))
                            };
                        t.addEventListener("transitionend", r), setTimeout(() => {
                            n || o(t)
                        }, s)
                    },
                    y = (e, t, i, s) => {
                        let n = e.indexOf(t);
                        if (-1 === n) return e[!i && s ? e.length - 1 : 0];
                        let o = e.length;
                        return n += i ? 1 : -1, s && (n = (n + o) % o), e[Math.max(0, Math.min(n, o - 1))]
                    },
                    w = /[^.]*(?=\..*)\.|.*/,
                    E = /\..*/,
                    A = /::\d+$/,
                    T = {},
                    O = 1,
                    k = {
                        mouseenter: "mouseover",
                        mouseleave: "mouseout"
                    },
                    C = /^(mouseenter|mouseleave)/i,
                    L = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

                function x(e, t) {
                    return t && "".concat(t, "::").concat(O++) || e.uidEvent || O++
                }

                function D(e) {
                    let t = x(e);
                    return e.uidEvent = t, T[t] = T[t] || {}, T[t]
                }

                function S(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        s = Object.keys(e);
                    for (let n = 0, o = s.length; n < o; n++) {
                        let r = e[s[n]];
                        if (r.originalHandler === t && r.delegationSelector === i) return r
                    }
                    return null
                }

                function N(e, t, i) {
                    let s = "string" == typeof t,
                        n = M(e);
                    return L.has(n) || (n = e), [s, s ? i : t, n]
                }

                function I(e, t, i, s, n) {
                    var o, r, a;
                    if ("string" != typeof t || !e) return;
                    if (i || (i = s, s = null), C.test(t)) {
                        let l = e => function(t) {
                            if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t)
                        };
                        s ? s = l(s) : i = l(i)
                    }
                    let [c, h, d] = N(t, i, s), u = D(e), f = u[d] || (u[d] = {}), p = S(f, h, c ? i : null);
                    if (p) return void(p.oneOff = p.oneOff && n);
                    let m = x(h, t.replace(w, "")),
                        g = c ? (o = i, r = s, function t(i) {
                            let s = e.querySelectorAll(o);
                            for (let {
                                    target: n
                                } = i; n && n !== this; n = n.parentNode)
                                for (let a = s.length; a--;)
                                    if (s[a] === n) return i.delegateTarget = n, t.oneOff && P.off(e, i.type, o, r), r.apply(n, [i]);
                            return null
                        }) : (a = i, function t(i) {
                            return i.delegateTarget = e, t.oneOff && P.off(e, i.type, a), a.apply(e, [i])
                        });
                    g.delegationSelector = c ? i : null, g.originalHandler = h, g.oneOff = n, g.uidEvent = m, f[m] = g, e.addEventListener(d, g, c)
                }

                function j(e, t, i, s, n) {
                    let o = S(t[i], s, n);
                    o && (e.removeEventListener(i, o, Boolean(n)), delete t[i][o.uidEvent])
                }

                function M(e) {
                    return k[e = e.replace(E, "")] || e
                }
                let P = {
                        on(e, t, i, s) {
                            I(e, t, i, s, !1)
                        },
                        one(e, t, i, s) {
                            I(e, t, i, s, !0)
                        },
                        off(e, t, i, s) {
                            if ("string" != typeof t || !e) return;
                            let [n, o, r] = N(t, i, s), a = r !== t, l = D(e), c = t.startsWith(".");
                            if (void 0 !== o) {
                                if (!l || !l[r]) return;
                                return void j(e, l, r, o, n ? i : null)
                            }
                            c && Object.keys(l).forEach(i => {
                                ! function(e, t, i, s) {
                                    let n = t[i] || {};
                                    Object.keys(n).forEach(o => {
                                        if (o.includes(s)) {
                                            let r = n[o];
                                            j(e, t, i, r.originalHandler, r.delegationSelector)
                                        }
                                    })
                                }(e, l, i, t.slice(1))
                            });
                            let h = l[r] || {};
                            Object.keys(h).forEach(i => {
                                let s = i.replace(A, "");
                                if (!a || t.includes(s)) {
                                    let n = h[i];
                                    j(e, l, r, n.originalHandler, n.delegationSelector)
                                }
                            })
                        },
                        trigger(e, t, i) {
                            if ("string" != typeof t || !e) return null;
                            let s = p(),
                                n = M(t),
                                o = L.has(n),
                                r, a = !0,
                                l = !0,
                                c = !1,
                                h = null;
                            return t !== n && s && (r = s.Event(t, i), s(e).trigger(r), a = !r.isPropagationStopped(), l = !r.isImmediatePropagationStopped(), c = r.isDefaultPrevented()), o ? (h = document.createEvent("HTMLEvents")).initEvent(n, a, !0) : h = new CustomEvent(t, {
                                bubbles: a,
                                cancelable: !0
                            }), void 0 !== i && Object.keys(i).forEach(e => {
                                Object.defineProperty(h, e, {
                                    get: () => i[e]
                                })
                            }), c && h.preventDefault(), l && e.dispatchEvent(h), h.defaultPrevented && void 0 !== r && r.preventDefault(), h
                        }
                    },
                    H = new Map;
                var R = {
                    set(e, t, i) {
                        H.has(e) || H.set(e, new Map);
                        let s = H.get(e);
                        s.has(t) || 0 === s.size ? s.set(t, i) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(s.keys())[0], "."))
                    },
                    get: (e, t) => H.has(e) && H.get(e).get(t) || null,
                    remove(e, t) {
                        if (!H.has(e)) return;
                        let i = H.get(e);
                        i.delete(t), 0 === i.size && H.delete(e)
                    }
                };
                class B {
                    dispose() {
                        R.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(e => {
                            this[e] = null
                        })
                    }
                    _queueCallback(e, t) {
                        let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        v(e, t, i)
                    }
                    static getInstance(e) {
                        return R.get(e, this.DATA_KEY)
                    }
                    static getOrCreateInstance(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
                    }
                    static get VERSION() {
                        return "5.0.2"
                    }
                    static get NAME() {
                        throw Error('You have to implement the static method "NAME", for each component!')
                    }
                    static get DATA_KEY() {
                        return "bs." + this.NAME
                    }
                    static get EVENT_KEY() {
                        return "." + this.DATA_KEY
                    }
                    constructor(e) {
                        (e = a(e)) && (this._element = e, R.set(this._element, this.constructor.DATA_KEY, this))
                    }
                }
                class W extends B {
                    static get NAME() {
                        return "alert"
                    }
                    close(e) {
                        let t = e ? this._getRootElement(e) : this._element,
                            i = this._triggerCloseEvent(t);
                        null === i || i.defaultPrevented || this._removeElement(t)
                    }
                    _getRootElement(e) {
                        return n(e) || e.closest(".alert")
                    }
                    _triggerCloseEvent(e) {
                        return P.trigger(e, "close.bs.alert")
                    }
                    _removeElement(e) {
                        e.classList.remove("show");
                        let t = e.classList.contains("fade");
                        this._queueCallback(() => this._destroyElement(e), e, t)
                    }
                    _destroyElement(e) {
                        e.remove(), P.trigger(e, "closed.bs.alert")
                    }
                    static jQueryInterface(e) {
                        return this.each(function() {
                            let t = W.getOrCreateInstance(this);
                            "close" === e && t[e](this)
                        })
                    }
                    static handleDismiss(e) {
                        return function(t) {
                            t && t.preventDefault(), e.close(this)
                        }
                    }
                }
                P.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', W.handleDismiss(new W)), _(W);
                class q extends B {
                    static get NAME() {
                        return "button"
                    }
                    toggle() {
                        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
                    }
                    static jQueryInterface(e) {
                        return this.each(function() {
                            let t = q.getOrCreateInstance(this);
                            "toggle" === e && t[e]()
                        })
                    }
                }

                function z(e) {
                    return "true" === e || "false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e)
                }

                function U(e) {
                    return e.replace(/[A-Z]/g, e => "-" + e.toLowerCase())
                }
                P.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', e => {
                    e.preventDefault();
                    let t = e.target.closest('[data-bs-toggle="button"]');
                    q.getOrCreateInstance(t).toggle()
                }), _(q);
                let F = {
                        setDataAttribute(e, t, i) {
                            e.setAttribute("data-bs-" + U(t), i)
                        },
                        removeDataAttribute(e, t) {
                            e.removeAttribute("data-bs-" + U(t))
                        },
                        getDataAttributes(e) {
                            if (!e) return {};
                            let t = {};
                            return Object.keys(e.dataset).filter(e => e.startsWith("bs")).forEach(i => {
                                let s = i.replace(/^bs/, "");
                                t[s = s.charAt(0).toLowerCase() + s.slice(1, s.length)] = z(e.dataset[i])
                            }), t
                        },
                        getDataAttribute: (e, t) => z(e.getAttribute("data-bs-" + U(t))),
                        offset(e) {
                            let t = e.getBoundingClientRect();
                            return {
                                top: t.top + document.body.scrollTop,
                                left: t.left + document.body.scrollLeft
                            }
                        },
                        position: e => ({
                            top: e.offsetTop,
                            left: e.offsetLeft
                        })
                    },
                    V = {
                        interval: 5e3,
                        keyboard: !0,
                        slide: !1,
                        pause: "hover",
                        wrap: !0,
                        touch: !0
                    },
                    K = {
                        interval: "(number|boolean)",
                        keyboard: "boolean",
                        slide: "(boolean|string)",
                        pause: "(string|boolean)",
                        wrap: "boolean",
                        touch: "boolean"
                    },
                    X = "next",
                    Y = "prev",
                    Q = "left",
                    $ = "right",
                    G = {
                        ArrowLeft: $,
                        ArrowRight: Q
                    };
                class Z extends B {
                    static get Default() {
                        return V
                    }
                    static get NAME() {
                        return "carousel"
                    }
                    next() {
                        this._slide(X)
                    }
                    nextWhenVisible() {
                        !document.hidden && c(this._element) && this.next()
                    }
                    prev() {
                        this._slide(Y)
                    }
                    pause(t) {
                        t || (this._isPaused = !0), e.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (o(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }
                    cycle(e) {
                        e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }
                    to(t) {
                        this._activeElement = e.findOne(".active.carousel-item", this._element);
                        let i = this._getItemindex(this._activeElement);
                        return t > this._items.length - 1 || t < 0 ? void 0 : this._isSliding ? void P.one(this._element, "slid.bs.carousel", () => this.to(t)) : i === t ? (this.pause(), void this.cycle()) : void this._slide(t > i ? X : Y, this._items[t])
                    }
                    _getConfig(e) {
                        return l("carousel", e = { ...V,
                            ...F.getDataAttributes(this._element),
                            ..."object" == typeof e ? e : {}
                        }, K), e
                    }
                    _handleSwipe() {
                        let e = Math.abs(this.touchDeltaX);
                        if (e <= 40) return;
                        let t = e / this.touchDeltaX;
                        this.touchDeltaX = 0, t && this._slide(t > 0 ? $ : Q)
                    }
                    _addEventListeners() {
                        this._config.keyboard && P.on(this._element, "keydown.bs.carousel", e => this._keydown(e)), "hover" === this._config.pause && (P.on(this._element, "mouseenter.bs.carousel", e => this.pause(e)), P.on(this._element, "mouseleave.bs.carousel", e => this.cycle(e))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
                    }
                    _addTouchEventListeners() {
                        let t = e => {
                                this._pointerEvent && ("pen" === e.pointerType || "touch" === e.pointerType) ? this.touchStartX = e.clientX : this._pointerEvent || (this.touchStartX = e.touches[0].clientX)
                            },
                            i = e => {
                                this.touchDeltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this.touchStartX
                            },
                            s = e => {
                                this._pointerEvent && ("pen" === e.pointerType || "touch" === e.pointerType) && (this.touchDeltaX = e.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(e => this.cycle(e), 500 + this._config.interval))
                            };
                        e.find(".carousel-item img", this._element).forEach(e => {
                            P.on(e, "dragstart.bs.carousel", e => e.preventDefault())
                        }), this._pointerEvent ? (P.on(this._element, "pointerdown.bs.carousel", e => t(e)), P.on(this._element, "pointerup.bs.carousel", e => s(e)), this._element.classList.add("pointer-event")) : (P.on(this._element, "touchstart.bs.carousel", e => t(e)), P.on(this._element, "touchmove.bs.carousel", e => i(e)), P.on(this._element, "touchend.bs.carousel", e => s(e)))
                    }
                    _keydown(e) {
                        if (/input|textarea/i.test(e.target.tagName)) return;
                        let t = G[e.key];
                        t && (e.preventDefault(), this._slide(t))
                    }
                    _getItemindex(t) {
                        return this._items = t && t.parentNode ? e.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
                    }
                    _getItemByOrder(e, t) {
                        return y(this._items, t, e === X, this._config.wrap)
                    }
                    _triggerSlideEvent(t, i) {
                        let s = this._getItemindex(t),
                            n = this._getItemindex(e.findOne(".active.carousel-item", this._element));
                        return P.trigger(this._element, "slide.bs.carousel", {
                            relatedTarget: t,
                            direction: i,
                            from: n,
                            to: s
                        })
                    }
                    _setActiveIndicatorElement(t) {
                        if (this._indicatorsElement) {
                            let i = e.findOne(".active", this._indicatorsElement);
                            i.classList.remove("active"), i.removeAttribute("aria-current");
                            let s = e.find("[data-bs-target]", this._indicatorsElement);
                            for (let n = 0; n < s.length; n++)
                                if (Number.parseInt(s[n].getAttribute("data-bs-slide-to"), 10) === this._getItemindex(t)) {
                                    s[n].classList.add("active"), s[n].setAttribute("aria-current", "true");
                                    break
                                }
                        }
                    }
                    _updateInterval() {
                        let t = this._activeElement || e.findOne(".active.carousel-item", this._element);
                        if (!t) return;
                        let i = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
                        i ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = i) : this._config.interval = this._config.defaultInterval || this._config.interval
                    }
                    _slide(t, i) {
                        let s = this._directionToOrder(t),
                            n = e.findOne(".active.carousel-item", this._element),
                            o = this._getItemindex(n),
                            r = i || this._getItemByOrder(s, n),
                            a = this._getItemindex(r),
                            l = Boolean(this._interval),
                            c = s === X,
                            h = c ? "carousel-item-start" : "carousel-item-end",
                            d = c ? "carousel-item-next" : "carousel-item-prev",
                            u = this._orderToDirection(s);
                        if (r && r.classList.contains("active")) return void(this._isSliding = !1);
                        if (this._isSliding || this._triggerSlideEvent(r, u).defaultPrevented || !n || !r) return;
                        this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;
                        let p = () => {
                            P.trigger(this._element, "slid.bs.carousel", {
                                relatedTarget: r,
                                direction: u,
                                from: o,
                                to: a
                            })
                        };
                        if (this._element.classList.contains("slide")) {
                            r.classList.add(d), f(r), n.classList.add(h), r.classList.add(h);
                            let m = () => {
                                r.classList.remove(h, d), r.classList.add("active"), n.classList.remove("active", d, h), this._isSliding = !1, setTimeout(p, 0)
                            };
                            this._queueCallback(m, n, !0)
                        } else n.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, p();
                        l && this.cycle()
                    }
                    _directionToOrder(e) {
                        return [$, Q].includes(e) ? g() ? e === Q ? Y : X : e === Q ? X : Y : e
                    }
                    _orderToDirection(e) {
                        return [X, Y].includes(e) ? g() ? e === Y ? Q : $ : e === Y ? $ : Q : e
                    }
                    static carouselInterface(e, t) {
                        let i = Z.getOrCreateInstance(e, t),
                            {
                                _config: s
                            } = i;
                        "object" == typeof t && (s = { ...s,
                            ...t
                        });
                        let n = "string" == typeof t ? t : s.slide;
                        if ("number" == typeof t) i.to(t);
                        else if ("string" == typeof n) {
                            if (void 0 === i[n]) throw TypeError('No method named "'.concat(n, '"'));
                            i[n]()
                        } else s.interval && s.ride && (i.pause(), i.cycle())
                    }
                    static jQueryInterface(e) {
                        return this.each(function() {
                            Z.carouselInterface(this, e)
                        })
                    }
                    static dataApiClickHandler(e) {
                        let t = n(this);
                        if (!t || !t.classList.contains("carousel")) return;
                        let i = { ...F.getDataAttributes(t),
                                ...F.getDataAttributes(this)
                            },
                            s = this.getAttribute("data-bs-slide-to");
                        s && (i.interval = !1), Z.carouselInterface(t, i), s && Z.getInstance(t).to(s), e.preventDefault()
                    }
                    constructor(t, i) {
                        super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(i), this._indicatorsElement = e.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
                    }
                }
                P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Z.dataApiClickHandler), P.on(window, "load.bs.carousel.data-api", () => {
                    let t = e.find('[data-bs-ride="carousel"]');
                    for (let i = 0, s = t.length; i < s; i++) Z.carouselInterface(t[i], Z.getInstance(t[i]))
                }), _(Z);
                let J = {
                        toggle: !0,
                        parent: ""
                    },
                    ee = {
                        toggle: "boolean",
                        parent: "(string|element)"
                    };
                class et extends B {
                    static get Default() {
                        return J
                    }
                    static get NAME() {
                        return "collapse"
                    }
                    toggle() {
                        this._element.classList.contains("show") ? this.hide() : this.show()
                    }
                    show() {
                        let t, i;
                        if (this._isTransitioning || this._element.classList.contains("show")) return;
                        this._parent && 0 === (t = e.find(".show, .collapsing", this._parent).filter(e => "string" == typeof this._config.parent ? e.getAttribute("data-bs-parent") === this._config.parent : e.classList.contains("collapse"))).length && (t = null);
                        let s = e.findOne(this._selector);
                        if (t) {
                            let n = t.find(e => s !== e);
                            if ((i = n ? et.getInstance(n) : null) && i._isTransitioning) return
                        }
                        if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
                        t && t.forEach(e => {
                            s !== e && et.collapseInterface(e, "hide"), i || R.set(e, "bs.collapse", null)
                        });
                        let o = this._getDimension();
                        this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[o] = 0, this._triggerArray.length && this._triggerArray.forEach(e => {
                            e.classList.remove("collapsed"), e.setAttribute("aria-expanded", !0)
                        }), this.setTransitioning(!0);
                        let r = "scroll" + (o[0].toUpperCase() + o.slice(1));
                        this._queueCallback(() => {
                            this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[o] = "", this.setTransitioning(!1), P.trigger(this._element, "shown.bs.collapse")
                        }, this._element, !0), this._element.style[o] = this._element[r] + "px"
                    }
                    hide() {
                        if (this._isTransitioning || !this._element.classList.contains("show") || P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
                        let e = this._getDimension();
                        this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", f(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
                        let t = this._triggerArray.length;
                        if (t > 0)
                            for (let i = 0; i < t; i++) {
                                let s = this._triggerArray[i],
                                    o = n(s);
                                o && !o.classList.contains("show") && (s.classList.add("collapsed"), s.setAttribute("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[e] = "", this._queueCallback(() => {
                            this.setTransitioning(!1), this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), P.trigger(this._element, "hidden.bs.collapse")
                        }, this._element, !0)
                    }
                    setTransitioning(e) {
                        this._isTransitioning = e
                    }
                    _getConfig(e) {
                        return (e = { ...J,
                            ...e
                        }).toggle = Boolean(e.toggle), l("collapse", e, ee), e
                    }
                    _getDimension() {
                        return this._element.classList.contains("width") ? "width" : "height"
                    }
                    _getParent() {
                        let {
                            parent: t
                        } = this._config;
                        t = a(t);
                        let i = '[data-bs-toggle="collapse"][data-bs-parent="'.concat(t, '"]');
                        return e.find(i, t).forEach(e => {
                            let t = n(e);
                            this._addAriaAndCollapsedClass(t, [e])
                        }), t
                    }
                    _addAriaAndCollapsedClass(e, t) {
                        if (!e || !t.length) return;
                        let i = e.classList.contains("show");
                        t.forEach(e => {
                            i ? e.classList.remove("collapsed") : e.classList.add("collapsed"), e.setAttribute("aria-expanded", i)
                        })
                    }
                    static collapseInterface(e, t) {
                        let i = et.getInstance(e),
                            s = { ...J,
                                ...F.getDataAttributes(e),
                                ..."object" == typeof t && t ? t : {}
                            };
                        if (!i && s.toggle && "string" == typeof t && /show|hide/.test(t) && (s.toggle = !1), i || (i = new et(e, s)), "string" == typeof t) {
                            if (void 0 === i[t]) throw TypeError('No method named "'.concat(t, '"'));
                            i[t]()
                        }
                    }
                    static jQueryInterface(e) {
                        return this.each(function() {
                            et.collapseInterface(this, e)
                        })
                    }
                    constructor(t, i) {
                        super(t), this._isTransitioning = !1, this._config = this._getConfig(i), this._triggerArray = e.find('[data-bs-toggle="collapse"][href="#'.concat(this._element.id, '"],[data-bs-toggle="collapse"][data-bs-target="#').concat(this._element.id, '"]'));
                        let n = e.find('[data-bs-toggle="collapse"]');
                        for (let o = 0, r = n.length; o < r; o++) {
                            let a = n[o],
                                l = s(a),
                                c = e.find(l).filter(e => e === this._element);
                            null !== l && c.length && (this._selector = l, this._triggerArray.push(a))
                        }
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                }
                P.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function(t) {
                    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
                    let i = F.getDataAttributes(this),
                        n = s(this);
                    e.find(n).forEach(e => {
                        let t;
                        let s = et.getInstance(e);
                        s ? (null === s._parent && "string" == typeof i.parent && (s._config.parent = i.parent, s._parent = s._getParent()), t = "toggle") : t = i, et.collapseInterface(e, t)
                    })
                }), _(et);
                var ei = "bottom",
                    es = "right",
                    en = "left",
                    eo = ["top", ei, es, en],
                    er = eo.reduce(function(e, t) {
                        return e.concat([t + "-start", t + "-end"])
                    }, []),
                    ea = [].concat(eo, ["auto"]).reduce(function(e, t) {
                        return e.concat([t, t + "-start", t + "-end"])
                    }, []),
                    el = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

                function ec(e) {
                    return e ? (e.nodeName || "").toLowerCase() : null
                }

                function eh(e) {
                    if (null == e) return window;
                    if ("[object Window]" !== e.toString()) {
                        var t = e.ownerDocument;
                        return t && t.defaultView || window
                    }
                    return e
                }

                function ed(e) {
                    return e instanceof eh(e).Element || e instanceof Element
                }

                function eu(e) {
                    return e instanceof eh(e).HTMLElement || e instanceof HTMLElement
                }

                function ef(e) {
                    return "undefined" != typeof ShadowRoot && (e instanceof eh(e).ShadowRoot || e instanceof ShadowRoot)
                }
                var ep = {
                    name: "applyStyles",
                    enabled: !0,
                    phase: "write",
                    fn: function(e) {
                        var t = e.state;
                        Object.keys(t.elements).forEach(function(e) {
                            var i = t.styles[e] || {},
                                s = t.attributes[e] || {},
                                n = t.elements[e];
                            eu(n) && ec(n) && (Object.assign(n.style, i), Object.keys(s).forEach(function(e) {
                                var t = s[e];
                                !1 === t ? n.removeAttribute(e) : n.setAttribute(e, !0 === t ? "" : t)
                            }))
                        })
                    },
                    effect: function(e) {
                        var t = e.state,
                            i = {
                                popper: {
                                    position: t.options.strategy,
                                    left: "0",
                                    top: "0",
                                    margin: "0"
                                },
                                arrow: {
                                    position: "absolute"
                                },
                                reference: {}
                            };
                        return Object.assign(t.elements.popper.style, i.popper), t.styles = i, t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow),
                            function() {
                                Object.keys(t.elements).forEach(function(e) {
                                    var s = t.elements[e],
                                        n = t.attributes[e] || {},
                                        o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : i[e]).reduce(function(e, t) {
                                            return e[t] = "", e
                                        }, {});
                                    eu(s) && ec(s) && (Object.assign(s.style, o), Object.keys(n).forEach(function(e) {
                                        s.removeAttribute(e)
                                    }))
                                })
                            }
                    },
                    requires: ["computeStyles"]
                };

                function em(e) {
                    return e.split("-")[0]
                }

                function eg(e) {
                    var t = e.getBoundingClientRect();
                    return {
                        width: t.width,
                        height: t.height,
                        top: t.top,
                        right: t.right,
                        bottom: t.bottom,
                        left: t.left,
                        x: t.left,
                        y: t.top
                    }
                }

                function e_(e) {
                    var t = eg(e),
                        i = e.offsetWidth,
                        s = e.offsetHeight;
                    return 1 >= Math.abs(t.width - i) && (i = t.width), 1 >= Math.abs(t.height - s) && (s = t.height), {
                        x: e.offsetLeft,
                        y: e.offsetTop,
                        width: i,
                        height: s
                    }
                }

                function eb(e, t) {
                    var i = t.getRootNode && t.getRootNode();
                    if (e.contains(t)) return !0;
                    if (i && ef(i)) {
                        var s = t;
                        do {
                            if (s && e.isSameNode(s)) return !0;
                            s = s.parentNode || s.host
                        } while (s)
                    }
                    return !1
                }

                function ev(e) {
                    return eh(e).getComputedStyle(e)
                }

                function ey(e) {
                    return ((ed(e) ? e.ownerDocument : e.document) || window.document).documentElement
                }

                function ew(e) {
                    return "html" === ec(e) ? e : e.assignedSlot || e.parentNode || (ef(e) ? e.host : null) || ey(e)
                }

                function eE(e) {
                    return eu(e) && "fixed" !== ev(e).position ? e.offsetParent : null
                }

                function eA(e) {
                    for (var t = eh(e), i = eE(e); i && ["table", "td", "th"].indexOf(ec(i)) >= 0 && "static" === ev(i).position;) i = eE(i);
                    return i && ("html" === ec(i) || "body" === ec(i) && "static" === ev(i).position) ? t : i || function(e) {
                        var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                        if (-1 !== navigator.userAgent.indexOf("Trident") && eu(e) && "fixed" === ev(e).position) return null;
                        for (var i = ew(e); eu(i) && 0 > ["html", "body"].indexOf(ec(i));) {
                            var s = ev(i);
                            if ("none" !== s.transform || "none" !== s.perspective || "paint" === s.contain || -1 !== ["transform", "perspective"].indexOf(s.willChange) || t && "filter" === s.willChange || t && s.filter && "none" !== s.filter) return i;
                            i = i.parentNode
                        }
                        return null
                    }(e) || t
                }

                function eT(e) {
                    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
                }
                var eO = Math.max,
                    ek = Math.min,
                    eC = Math.round;

                function eL(e) {
                    return Object.assign({}, {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, e)
                }

                function ex(e, t) {
                    return t.reduce(function(t, i) {
                        return t[i] = e, t
                    }, {})
                }
                var eD = {
                        name: "arrow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t, i = e.state,
                                s = e.name,
                                n = e.options,
                                o = i.elements.arrow,
                                r = i.modifiersData.popperOffsets,
                                a = em(i.placement),
                                l = eT(a),
                                c = [en, es].indexOf(a) >= 0 ? "height" : "width";
                            if (o && r) {
                                var h, d = eL("number" != typeof(h = "function" == typeof(h = n.padding) ? h(Object.assign({}, i.rects, {
                                        placement: i.placement
                                    })) : h) ? h : ex(h, eo)),
                                    u = e_(o),
                                    f = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
                                    p = r[l] - i.rects.reference[l],
                                    m = eA(o),
                                    g = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
                                    _ = d["y" === l ? "top" : en],
                                    b = g - u[c] - d["y" === l ? ei : es],
                                    v = g / 2 - u[c] / 2 + (f / 2 - p / 2),
                                    y = eO(_, ek(v, b));
                                i.modifiersData[s] = ((t = {})[l] = y, t.centerOffset = y - v, t)
                            }
                        },
                        effect: function(e) {
                            var t = e.state,
                                i = e.options.element,
                                s = void 0 === i ? "[data-popper-arrow]" : i;
                            null != s && ("string" != typeof s || (s = t.elements.popper.querySelector(s))) && eb(t.elements.popper, s) && (t.elements.arrow = s)
                        },
                        requires: ["popperOffsets"],
                        requiresIfExists: ["preventOverflow"]
                    },
                    eS = {
                        top: "auto",
                        right: "auto",
                        bottom: "auto",
                        left: "auto"
                    };

                function eN(e) {
                    var t, i, s, n, o = e.popper,
                        r = e.popperRect,
                        a = e.placement,
                        l = e.offsets,
                        c = e.position,
                        h = e.gpuAcceleration,
                        d = e.adaptive,
                        u = e.roundOffsets,
                        f = !0 === u ? (t = l.x, i = l.y, {
                            x: eC(eC(t * (s = window.devicePixelRatio || 1)) / s) || 0,
                            y: eC(eC(i * s) / s) || 0
                        }) : "function" == typeof u ? u(l) : l,
                        p = f.x,
                        m = void 0 === p ? 0 : p,
                        g = f.y,
                        _ = void 0 === g ? 0 : g,
                        b = l.hasOwnProperty("x"),
                        v = l.hasOwnProperty("y"),
                        y = en,
                        w = "top",
                        E = window;
                    if (d) {
                        var A = eA(o),
                            T = "clientHeight",
                            O = "clientWidth";
                        A === eh(o) && "static" !== ev(A = ey(o)).position && (T = "scrollHeight", O = "scrollWidth"), "top" === a && (w = ei, _ -= A[T] - r.height, _ *= h ? 1 : -1), a === en && (y = es, m -= A[O] - r.width, m *= h ? 1 : -1)
                    }
                    var k, C = Object.assign({
                        position: c
                    }, d && eS);
                    return h ? Object.assign({}, C, ((k = {})[w] = v ? "0" : "", k[y] = b ? "0" : "", k.transform = 2 > (E.devicePixelRatio || 1) ? "translate(" + m + "px, " + _ + "px)" : "translate3d(" + m + "px, " + _ + "px, 0)", k)) : Object.assign({}, C, ((n = {})[w] = v ? _ + "px" : "", n[y] = b ? m + "px" : "", n.transform = "", n))
                }
                var eI = {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function(e) {
                            var t = e.state,
                                i = e.options,
                                s = i.gpuAcceleration,
                                n = i.adaptive,
                                o = i.roundOffsets,
                                r = void 0 === o || o,
                                a = {
                                    placement: em(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: void 0 === s || s
                                };
                            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, eN(Object.assign({}, a, {
                                offsets: t.modifiersData.popperOffsets,
                                position: t.options.strategy,
                                adaptive: void 0 === n || n,
                                roundOffsets: r
                            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, eN(Object.assign({}, a, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: r
                            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-placement": t.placement
                            })
                        },
                        data: {}
                    },
                    ej = {
                        passive: !0
                    },
                    eM = {
                        name: "eventListeners",
                        enabled: !0,
                        phase: "write",
                        fn: function() {},
                        effect: function(e) {
                            var t = e.state,
                                i = e.instance,
                                s = e.options,
                                n = s.scroll,
                                o = void 0 === n || n,
                                r = s.resize,
                                a = void 0 === r || r,
                                l = eh(t.elements.popper),
                                c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                            return o && c.forEach(function(e) {
                                    e.addEventListener("scroll", i.update, ej)
                                }), a && l.addEventListener("resize", i.update, ej),
                                function() {
                                    o && c.forEach(function(e) {
                                        e.removeEventListener("scroll", i.update, ej)
                                    }), a && l.removeEventListener("resize", i.update, ej)
                                }
                        },
                        data: {}
                    },
                    eP = {
                        left: "right",
                        right: "left",
                        bottom: "top",
                        top: "bottom"
                    };

                function eH(e) {
                    return e.replace(/left|right|bottom|top/g, function(e) {
                        return eP[e]
                    })
                }
                var eR = {
                    start: "end",
                    end: "start"
                };

                function eB(e) {
                    return e.replace(/start|end/g, function(e) {
                        return eR[e]
                    })
                }

                function eW(e) {
                    var t = eh(e);
                    return {
                        scrollLeft: t.pageXOffset,
                        scrollTop: t.pageYOffset
                    }
                }

                function eq(e) {
                    return eg(ey(e)).left + eW(e).scrollLeft
                }

                function ez(e) {
                    var t = ev(e),
                        i = t.overflow,
                        s = t.overflowX,
                        n = t.overflowY;
                    return /auto|scroll|overlay|hidden/.test(i + n + s)
                }

                function eU(e, t) {
                    void 0 === t && (t = []);
                    var i, s = function e(t) {
                            return ["html", "body", "#document"].indexOf(ec(t)) >= 0 ? t.ownerDocument.body : eu(t) && ez(t) ? t : e(ew(t))
                        }(e),
                        n = s === (null == (i = e.ownerDocument) ? void 0 : i.body),
                        o = eh(s),
                        r = n ? [o].concat(o.visualViewport || [], ez(s) ? s : []) : s,
                        a = t.concat(r);
                    return n ? a : a.concat(eU(ew(r)))
                }

                function eF(e) {
                    return Object.assign({}, e, {
                        left: e.x,
                        top: e.y,
                        right: e.x + e.width,
                        bottom: e.y + e.height
                    })
                }

                function eV(e, t) {
                    var i, s, n, o, r, a, l, c, h, d, u, f, p, m, g, _, b;
                    return "viewport" === t ? eF((i = eh(e), s = ey(e), n = i.visualViewport, o = s.clientWidth, r = s.clientHeight, a = 0, l = 0, n && (o = n.width, r = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = n.offsetLeft, l = n.offsetTop)), {
                        width: o,
                        height: r,
                        x: a + eq(e),
                        y: l
                    })) : eu(t) ? ((c = eg(t)).top = c.top + t.clientTop, c.left = c.left + t.clientLeft, c.bottom = c.top + t.clientHeight, c.right = c.left + t.clientWidth, c.width = t.clientWidth, c.height = t.clientHeight, c.x = c.left, c.y = c.top, c) : eF((h = ey(e), u = ey(h), f = eW(h), p = null == (d = h.ownerDocument) ? void 0 : d.body, m = eO(u.scrollWidth, u.clientWidth, p ? p.scrollWidth : 0, p ? p.clientWidth : 0), g = eO(u.scrollHeight, u.clientHeight, p ? p.scrollHeight : 0, p ? p.clientHeight : 0), _ = -f.scrollLeft + eq(h), b = -f.scrollTop, "rtl" === ev(p || u).direction && (_ += eO(u.clientWidth, p ? p.clientWidth : 0) - m), {
                        width: m,
                        height: g,
                        x: _,
                        y: b
                    }))
                }

                function eK(e) {
                    return e.split("-")[1]
                }

                function eX(e) {
                    var t, i = e.reference,
                        s = e.element,
                        n = e.placement,
                        o = n ? em(n) : null,
                        r = n ? eK(n) : null,
                        a = i.x + i.width / 2 - s.width / 2,
                        l = i.y + i.height / 2 - s.height / 2;
                    switch (o) {
                        case "top":
                            t = {
                                x: a,
                                y: i.y - s.height
                            };
                            break;
                        case ei:
                            t = {
                                x: a,
                                y: i.y + i.height
                            };
                            break;
                        case es:
                            t = {
                                x: i.x + i.width,
                                y: l
                            };
                            break;
                        case en:
                            t = {
                                x: i.x - s.width,
                                y: l
                            };
                            break;
                        default:
                            t = {
                                x: i.x,
                                y: i.y
                            }
                    }
                    var c = o ? eT(o) : null;
                    if (null != c) {
                        var h = "y" === c ? "height" : "width";
                        switch (r) {
                            case "start":
                                t[c] = t[c] - (i[h] / 2 - s[h] / 2);
                                break;
                            case "end":
                                t[c] = t[c] + (i[h] / 2 - s[h] / 2)
                        }
                    }
                    return t
                }

                function eY(e, t) {
                    void 0 === t && (t = {});
                    var i, s, n, o, r, a, l, c = t,
                        h = c.placement,
                        d = void 0 === h ? e.placement : h,
                        u = c.boundary,
                        f = c.rootBoundary,
                        p = c.elementContext,
                        m = void 0 === p ? "popper" : p,
                        g = c.altBoundary,
                        _ = c.padding,
                        b = void 0 === _ ? 0 : _,
                        v = eL("number" != typeof b ? b : ex(b, eo)),
                        y = e.elements.reference,
                        w = e.rects.popper,
                        E = e.elements[void 0 !== g && g ? "popper" === m ? "reference" : "popper" : m],
                        A = (i = ed(E) ? E : E.contextElement || ey(e.elements.popper), a = (r = [].concat("clippingParents" === (s = void 0 === u ? "clippingParents" : u) ? (n = eU(ew(i)), ed(o = ["absolute", "fixed"].indexOf(ev(i).position) >= 0 && eu(i) ? eA(i) : i) ? n.filter(function(e) {
                            return ed(e) && eb(e, o) && "body" !== ec(e)
                        }) : []) : [].concat(s), [void 0 === f ? "viewport" : f]))[0], (l = r.reduce(function(e, t) {
                            var s = eV(i, t);
                            return e.top = eO(s.top, e.top), e.right = ek(s.right, e.right), e.bottom = ek(s.bottom, e.bottom), e.left = eO(s.left, e.left), e
                        }, eV(i, a))).width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l),
                        T = eg(y),
                        O = eX({
                            reference: T,
                            element: w,
                            strategy: "absolute",
                            placement: d
                        }),
                        k = eF(Object.assign({}, w, O)),
                        C = "popper" === m ? k : T,
                        L = {
                            top: A.top - C.top + v.top,
                            bottom: C.bottom - A.bottom + v.bottom,
                            left: A.left - C.left + v.left,
                            right: C.right - A.right + v.right
                        },
                        x = e.modifiersData.offset;
                    if ("popper" === m && x) {
                        var D = x[d];
                        Object.keys(L).forEach(function(e) {
                            var t = [es, ei].indexOf(e) >= 0 ? 1 : -1,
                                i = ["top", ei].indexOf(e) >= 0 ? "y" : "x";
                            L[e] += D[i] * t
                        })
                    }
                    return L
                }
                var eQ = {
                    name: "flip",
                    enabled: !0,
                    phase: "main",
                    fn: function(e) {
                        var t = e.state,
                            i = e.options,
                            s = e.name;
                        if (!t.modifiersData[s]._skip) {
                            for (var n = i.mainAxis, o = void 0 === n || n, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = t.options.placement, _ = em(g), b = l || (_ !== g && p ? function(e) {
                                    if ("auto" === em(e)) return [];
                                    var t = eH(e);
                                    return [eB(e), t, eB(t)]
                                }(g) : [eH(g)]), v = [g].concat(b).reduce(function(e, i) {
                                    var s, n, o, r, a, l, u, f, g, _, b, v;
                                    return e.concat("auto" === em(i) ? (n = (s = {
                                        placement: i,
                                        boundary: h,
                                        rootBoundary: d,
                                        padding: c,
                                        flipVariations: p,
                                        allowedAutoPlacements: m
                                    }).placement, o = s.boundary, r = s.rootBoundary, a = s.padding, l = s.flipVariations, f = void 0 === (u = s.allowedAutoPlacements) ? ea : u, 0 === (b = (_ = (g = eK(n)) ? l ? er : er.filter(function(e) {
                                        return eK(e) === g
                                    }) : eo).filter(function(e) {
                                        return f.indexOf(e) >= 0
                                    })).length && (b = _), Object.keys(v = b.reduce(function(e, i) {
                                        return e[i] = eY(t, {
                                            placement: i,
                                            boundary: o,
                                            rootBoundary: r,
                                            padding: a
                                        })[em(i)], e
                                    }, {})).sort(function(e, t) {
                                        return v[e] - v[t]
                                    })) : i)
                                }, []), y = t.rects.reference, w = t.rects.popper, E = new Map, A = !0, T = v[0], O = 0; O < v.length; O++) {
                                var k = v[O],
                                    C = em(k),
                                    L = "start" === eK(k),
                                    x = ["top", ei].indexOf(C) >= 0,
                                    D = x ? "width" : "height",
                                    S = eY(t, {
                                        placement: k,
                                        boundary: h,
                                        rootBoundary: d,
                                        altBoundary: u,
                                        padding: c
                                    }),
                                    N = x ? L ? es : en : L ? ei : "top";
                                y[D] > w[D] && (N = eH(N));
                                var I = eH(N),
                                    j = [];
                                if (o && j.push(S[C] <= 0), a && j.push(S[N] <= 0, S[I] <= 0), j.every(function(e) {
                                        return e
                                    })) {
                                    T = k, A = !1;
                                    break
                                }
                                E.set(k, j)
                            }
                            if (A)
                                for (var M = function(e) {
                                        var t = v.find(function(t) {
                                            var i = E.get(t);
                                            if (i) return i.slice(0, e).every(function(e) {
                                                return e
                                            })
                                        });
                                        if (t) return T = t, "break"
                                    }, P = p ? 3 : 1; P > 0 && "break" !== M(P); P--);
                            t.placement !== T && (t.modifiersData[s]._skip = !0, t.placement = T, t.reset = !0)
                        }
                    },
                    requiresIfExists: ["offset"],
                    data: {
                        _skip: !1
                    }
                };

                function e$(e, t, i) {
                    return void 0 === i && (i = {
                        x: 0,
                        y: 0
                    }), {
                        top: e.top - t.height - i.y,
                        right: e.right - t.width + i.x,
                        bottom: e.bottom - t.height + i.y,
                        left: e.left - t.width - i.x
                    }
                }

                function eG(e) {
                    return ["top", es, ei, en].some(function(t) {
                        return e[t] >= 0
                    })
                }
                var eZ = {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(e) {
                            var t = e.state,
                                i = e.name,
                                s = t.rects.reference,
                                n = t.rects.popper,
                                o = t.modifiersData.preventOverflow,
                                r = eY(t, {
                                    elementContext: "reference"
                                }),
                                a = eY(t, {
                                    altBoundary: !0
                                }),
                                l = e$(r, s),
                                c = e$(a, n, o),
                                h = eG(l),
                                d = eG(c);
                            t.modifiersData[i] = {
                                referenceClippingOffsets: l,
                                popperEscapeOffsets: c,
                                isReferenceHidden: h,
                                hasPopperEscaped: d
                            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-reference-hidden": h,
                                "data-popper-escaped": d
                            })
                        }
                    },
                    eJ = {
                        name: "offset",
                        enabled: !0,
                        phase: "main",
                        requires: ["popperOffsets"],
                        fn: function(e) {
                            var t = e.state,
                                i = e.options,
                                s = e.name,
                                n = i.offset,
                                o = void 0 === n ? [0, 0] : n,
                                r = ea.reduce(function(e, i) {
                                    var s, n, r, a, l, c;
                                    return e[i] = (s = t.rects, r = [en, "top"].indexOf(n = em(i)) >= 0 ? -1 : 1, l = (a = "function" == typeof o ? o(Object.assign({}, s, {
                                        placement: i
                                    })) : o)[0], c = a[1], l = l || 0, c = (c || 0) * r, [en, es].indexOf(n) >= 0 ? {
                                        x: c,
                                        y: l
                                    } : {
                                        x: l,
                                        y: c
                                    }), e
                                }, {}),
                                a = r[t.placement],
                                l = a.x,
                                c = a.y;
                            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[s] = r
                        }
                    },
                    e0 = {
                        name: "popperOffsets",
                        enabled: !0,
                        phase: "read",
                        fn: function(e) {
                            var t = e.state,
                                i = e.name;
                            t.modifiersData[i] = eX({
                                reference: t.rects.reference,
                                element: t.rects.popper,
                                strategy: "absolute",
                                placement: t.placement
                            })
                        },
                        data: {}
                    },
                    e1 = {
                        name: "preventOverflow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                i = e.options,
                                s = e.name,
                                n = i.mainAxis,
                                o = void 0 === n || n,
                                r = i.altAxis,
                                a = void 0 !== r && r,
                                l = i.boundary,
                                c = i.rootBoundary,
                                h = i.altBoundary,
                                d = i.padding,
                                u = i.tether,
                                f = void 0 === u || u,
                                p = i.tetherOffset,
                                m = void 0 === p ? 0 : p,
                                g = eY(t, {
                                    boundary: l,
                                    rootBoundary: c,
                                    padding: d,
                                    altBoundary: h
                                }),
                                _ = em(t.placement),
                                b = eK(t.placement),
                                v = !b,
                                y = eT(_),
                                w = "x" === y ? "y" : "x",
                                E = t.modifiersData.popperOffsets,
                                A = t.rects.reference,
                                T = t.rects.popper,
                                O = "function" == typeof m ? m(Object.assign({}, t.rects, {
                                    placement: t.placement
                                })) : m,
                                k = {
                                    x: 0,
                                    y: 0
                                };
                            if (E) {
                                if (o || a) {
                                    var C = "y" === y ? "top" : en,
                                        L = "y" === y ? ei : es,
                                        x = "y" === y ? "height" : "width",
                                        D = E[y],
                                        S = E[y] + g[C],
                                        N = E[y] - g[L],
                                        I = f ? -T[x] / 2 : 0,
                                        j = "start" === b ? A[x] : T[x],
                                        M = "start" === b ? -T[x] : -A[x],
                                        P = t.elements.arrow,
                                        H = f && P ? e_(P) : {
                                            width: 0,
                                            height: 0
                                        },
                                        R = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            left: 0
                                        },
                                        B = R[C],
                                        W = R[L],
                                        q = eO(0, ek(A[x], H[x])),
                                        z = v ? A[x] / 2 - I - q - B - O : j - q - B - O,
                                        U = v ? -A[x] / 2 + I + q + W + O : M + q + W + O,
                                        F = t.elements.arrow && eA(t.elements.arrow),
                                        V = F ? "y" === y ? F.clientTop || 0 : F.clientLeft || 0 : 0,
                                        K = t.modifiersData.offset ? t.modifiersData.offset[t.placement][y] : 0,
                                        X = E[y] + z - K - V,
                                        Y = E[y] + U - K;
                                    if (o) {
                                        var Q, $, G = (Q = f ? ek(S, X) : S, $ = f ? eO(N, Y) : N, eO(Q, ek(D, $)));
                                        E[y] = G, k[y] = G - D
                                    }
                                    if (a) {
                                        var Z, J, ee = E[w],
                                            et = ee + g["x" === y ? "top" : en],
                                            eo = ee - g["x" === y ? ei : es],
                                            er = (Z = f ? ek(et, X) : et, J = f ? eO(eo, Y) : eo, eO(Z, ek(ee, J)));
                                        E[w] = er, k[w] = er - ee
                                    }
                                }
                                t.modifiersData[s] = k
                            }
                        },
                        requiresIfExists: ["offset"]
                    },
                    e2 = {
                        placement: "bottom",
                        modifiers: [],
                        strategy: "absolute"
                    };

                function e3() {
                    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    return !t.some(function(e) {
                        return !(e && "function" == typeof e.getBoundingClientRect)
                    })
                }

                function e5(e) {
                    void 0 === e && (e = {});
                    var t = e,
                        i = t.defaultModifiers,
                        s = void 0 === i ? [] : i,
                        n = t.defaultOptions,
                        o = void 0 === n ? e2 : n;
                    return function(e, t, i) {
                        void 0 === i && (i = o);
                        var n, r = {
                                placement: "bottom",
                                orderedModifiers: [],
                                options: Object.assign({}, e2, o),
                                modifiersData: {},
                                elements: {
                                    reference: e,
                                    popper: t
                                },
                                attributes: {},
                                styles: {}
                            },
                            a = [],
                            l = !1,
                            c = {
                                state: r,
                                setOptions: function(i) {
                                    h(), r.options = Object.assign({}, o, r.options, i), r.scrollParents = {
                                        reference: ed(e) ? eU(e) : e.contextElement ? eU(e.contextElement) : [],
                                        popper: eU(t)
                                    };
                                    var n, l, d, u, f, p = (n = Object.keys(f = [].concat(s, r.options.modifiers).reduce(function(e, t) {
                                        var i = e[t.name];
                                        return e[t.name] = i ? Object.assign({}, i, t, {
                                            options: Object.assign({}, i.options, t.options),
                                            data: Object.assign({}, i.data, t.data)
                                        }) : t, e
                                    }, {})).map(function(e) {
                                        return f[e]
                                    }), l = new Map, d = new Set, u = [], n.forEach(function(e) {
                                        l.set(e.name, e)
                                    }), n.forEach(function(e) {
                                        d.has(e.name) || function e(t) {
                                            d.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                                                if (!d.has(t)) {
                                                    var i = l.get(t);
                                                    i && e(i)
                                                }
                                            }), u.push(t)
                                        }(e)
                                    }), el.reduce(function(e, t) {
                                        return e.concat(u.filter(function(e) {
                                            return e.phase === t
                                        }))
                                    }, []));
                                    return r.orderedModifiers = p.filter(function(e) {
                                        return e.enabled
                                    }), r.orderedModifiers.forEach(function(e) {
                                        var t = e.name,
                                            i = e.options,
                                            s = e.effect;
                                        if ("function" == typeof s) {
                                            var n = s({
                                                state: r,
                                                name: t,
                                                instance: c,
                                                options: void 0 === i ? {} : i
                                            });
                                            a.push(n || function() {})
                                        }
                                    }), c.update()
                                },
                                forceUpdate: function() {
                                    if (!l) {
                                        var e = r.elements,
                                            t = e.reference,
                                            i = e.popper;
                                        if (e3(t, i)) {
                                            r.rects = {
                                                reference: (s = eA(i), n = "fixed" === r.options.strategy, o = ey(s), a = eg(t), h = eu(s), d = {
                                                    scrollLeft: 0,
                                                    scrollTop: 0
                                                }, u = {
                                                    x: 0,
                                                    y: 0
                                                }, (h || !h && !n) && (("body" !== ec(s) || ez(o)) && (d = s !== eh(s) && eu(s) ? {
                                                    scrollLeft: s.scrollLeft,
                                                    scrollTop: s.scrollTop
                                                } : eW(s)), eu(s) ? ((u = eg(s)).x += s.clientLeft, u.y += s.clientTop) : o && (u.x = eq(o))), {
                                                    x: a.left + d.scrollLeft - u.x,
                                                    y: a.top + d.scrollTop - u.y,
                                                    width: a.width,
                                                    height: a.height
                                                }),
                                                popper: e_(i)
                                            }, r.reset = !1, r.placement = r.options.placement, r.orderedModifiers.forEach(function(e) {
                                                return r.modifiersData[e.name] = Object.assign({}, e.data)
                                            });
                                            for (var s, n, o, a, h, d, u, f = 0; f < r.orderedModifiers.length; f++)
                                                if (!0 !== r.reset) {
                                                    var p = r.orderedModifiers[f],
                                                        m = p.fn,
                                                        g = p.options,
                                                        _ = void 0 === g ? {} : g,
                                                        b = p.name;
                                                    "function" == typeof m && (r = m({
                                                        state: r,
                                                        options: _,
                                                        name: b,
                                                        instance: c
                                                    }) || r)
                                                } else r.reset = !1, f = -1
                                        }
                                    }
                                },
                                update: function() {
                                    return n || (n = new Promise(function(e) {
                                        Promise.resolve().then(function() {
                                            n = void 0, e(new Promise(function(e) {
                                                c.forceUpdate(), e(r)
                                            }))
                                        })
                                    })), n
                                },
                                destroy: function() {
                                    h(), l = !0
                                }
                            };
                        if (!e3(e, t)) return c;

                        function h() {
                            a.forEach(function(e) {
                                return e()
                            }), a = []
                        }
                        return c.setOptions(i).then(function(e) {
                            !l && i.onFirstUpdate && i.onFirstUpdate(e)
                        }), c
                    }
                }
                var e4 = e5(),
                    e6 = e5({
                        defaultModifiers: [eM, e0, eI, ep]
                    }),
                    e8 = e5({
                        defaultModifiers: [eM, e0, eI, ep, eJ, eQ, e1, eD, eZ]
                    }),
                    e7 = Object.freeze({
                        __proto__: null,
                        popperGenerator: e5,
                        detectOverflow: eY,
                        createPopperBase: e4,
                        createPopper: e8,
                        createPopperLite: e6,
                        top: "top",
                        bottom: ei,
                        right: es,
                        left: en,
                        auto: "auto",
                        basePlacements: eo,
                        start: "start",
                        end: "end",
                        clippingParents: "clippingParents",
                        viewport: "viewport",
                        popper: "popper",
                        reference: "reference",
                        variationPlacements: er,
                        placements: ea,
                        beforeRead: "beforeRead",
                        read: "read",
                        afterRead: "afterRead",
                        beforeMain: "beforeMain",
                        main: "main",
                        afterMain: "afterMain",
                        beforeWrite: "beforeWrite",
                        write: "write",
                        afterWrite: "afterWrite",
                        modifierPhases: el,
                        applyStyles: ep,
                        arrow: eD,
                        computeStyles: eI,
                        eventListeners: eM,
                        flip: eQ,
                        hide: eZ,
                        offset: eJ,
                        popperOffsets: e0,
                        preventOverflow: e1
                    });
                let e9 = RegExp("ArrowUp|ArrowDown|Escape"),
                    te = g() ? "top-end" : "top-start",
                    tt = g() ? "top-start" : "top-end",
                    ti = g() ? "bottom-end" : "bottom-start",
                    ts = g() ? "bottom-start" : "bottom-end",
                    tn = g() ? "left-start" : "right-start",
                    to = g() ? "right-start" : "left-start",
                    tr = {
                        offset: [0, 2],
                        boundary: "clippingParents",
                        reference: "toggle",
                        display: "dynamic",
                        popperConfig: null,
                        autoClose: !0
                    },
                    ta = {
                        offset: "(array|string|function)",
                        boundary: "(string|element)",
                        reference: "(string|element|object)",
                        display: "string",
                        popperConfig: "(null|object|function)",
                        autoClose: "(boolean|string)"
                    };
                class tl extends B {
                    static get Default() {
                        return tr
                    }
                    static get DefaultType() {
                        return ta
                    }
                    static get NAME() {
                        return "dropdown"
                    }
                    toggle() {
                        h(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show())
                    }
                    show() {
                        if (h(this._element) || this._menu.classList.contains("show")) return;
                        let e = tl.getParentFromElement(this._element),
                            t = {
                                relatedTarget: this._element
                            };
                        if (!P.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
                            if (this._inNavbar) F.setDataAttribute(this._menu, "popper", "none");
                            else {
                                if (void 0 === e7) throw TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                                let i = this._element;
                                "parent" === this._config.reference ? i = e : r(this._config.reference) ? i = a(this._config.reference) : "object" == typeof this._config.reference && (i = this._config.reference);
                                let s = this._getPopperConfig(),
                                    n = s.modifiers.find(e => "applyStyles" === e.name && !1 === e.enabled);
                                this._popper = e8(i, this._menu, s), n && F.setDataAttribute(this._menu, "popper", "static")
                            }
                            "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach(e => P.on(e, "mouseover", u)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), P.trigger(this._element, "shown.bs.dropdown", t)
                        }
                    }
                    hide() {
                        if (h(this._element) || !this._menu.classList.contains("show")) return;
                        let e = {
                            relatedTarget: this._element
                        };
                        this._completeHide(e)
                    }
                    dispose() {
                        this._popper && this._popper.destroy(), super.dispose()
                    }
                    update() {
                        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
                    }
                    _addEventListeners() {
                        P.on(this._element, "click.bs.dropdown", e => {
                            e.preventDefault(), this.toggle()
                        })
                    }
                    _completeHide(e) {
                        P.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(e => P.off(e, "mouseover", u)), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, "hidden.bs.dropdown", e))
                    }
                    _getConfig(e) {
                        if (l("dropdown", e = { ...this.constructor.Default,
                                ...F.getDataAttributes(this._element),
                                ...e
                            }, this.constructor.DefaultType), "object" == typeof e.reference && !r(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw TypeError('DROPDOWN: Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
                        return e
                    }
                    _getMenuElement() {
                        return e.next(this._element, ".dropdown-menu")[0]
                    }
                    _getPlacement() {
                        let e = this._element.parentNode;
                        if (e.classList.contains("dropend")) return tn;
                        if (e.classList.contains("dropstart")) return to;
                        let t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                        return e.classList.contains("dropup") ? t ? tt : te : t ? ts : ti
                    }
                    _detectNavbar() {
                        return null !== this._element.closest(".navbar")
                    }
                    _getOffset() {
                        let {
                            offset: e
                        } = this._config;
                        return "string" == typeof e ? e.split(",").map(e => Number.parseInt(e, 10)) : "function" == typeof e ? t => e(t, this._element) : e
                    }
                    _getPopperConfig() {
                        let e = {
                            placement: this._getPlacement(),
                            modifiers: [{
                                name: "preventOverflow",
                                options: {
                                    boundary: this._config.boundary
                                }
                            }, {
                                name: "offset",
                                options: {
                                    offset: this._getOffset()
                                }
                            }]
                        };
                        return "static" === this._config.display && (e.modifiers = [{
                            name: "applyStyles",
                            enabled: !1
                        }]), { ...e,
                            ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
                        }
                    }
                    _selectMenuItem(t) {
                        let {
                            key: i,
                            target: s
                        } = t, n = e.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(c);
                        n.length && y(n, s, "ArrowDown" === i, !n.includes(s)).focus()
                    }
                    static dropdownInterface(e, t) {
                        let i = tl.getOrCreateInstance(e, t);
                        if ("string" == typeof t) {
                            if (void 0 === i[t]) throw TypeError('No method named "'.concat(t, '"'));
                            i[t]()
                        }
                    }
                    static jQueryInterface(e) {
                        return this.each(function() {
                            tl.dropdownInterface(this, e)
                        })
                    }
                    static clearMenus(t) {
                        if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
                        let i = e.find('[data-bs-toggle="dropdown"]');
                        for (let s = 0, n = i.length; s < n; s++) {
                            let o = tl.getInstance(i[s]);
                            if (!o || !1 === o._config.autoClose || !o._element.classList.contains("show")) continue;
                            let r = {
                                relatedTarget: o._element
                            };
                            if (t) {
                                let a = t.composedPath(),
                                    l = a.includes(o._menu);
                                if (a.includes(o._element) || "inside" === o._config.autoClose && !l || "outside" === o._config.autoClose && l || o._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                                "click" === t.type && (r.clickEvent = t)
                            }
                            o._completeHide(r)
                        }
                    }
                    static getParentFromElement(e) {
                        return n(e) || e.parentNode
                    }
                    static dataApiKeydownHandler(t) {
                        if (/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !e9.test(t.key)) return;
                        let i = this.classList.contains("show");
                        if (!i && "Escape" === t.key || (t.preventDefault(), t.stopPropagation(), h(this))) return;
                        let s = () => this.matches('[data-bs-toggle="dropdown"]') ? this : e.prev(this, '[data-bs-toggle="dropdown"]')[0];
                        return "Escape" === t.key ? (s().focus(), void tl.clearMenus()) : "ArrowUp" === t.key || "ArrowDown" === t.key ? (i || s().click(), void tl.getInstance(s())._selectMenuItem(t)) : void(i && "Space" !== t.key || tl.clearMenus())
                    }
                    constructor(e, t) {
                        super(e), this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                    }
                }
                P.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', tl.dataApiKeydownHandler), P.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", tl.dataApiKeydownHandler), P.on(document, "click.bs.dropdown.data-api", tl.clearMenus), P.on(document, "keyup.bs.dropdown.data-api", tl.clearMenus), P.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function(e) {
                    e.preventDefault(), tl.dropdownInterface(this)
                }), _(tl);
                class tc {
                    getWidth() {
                        let e = document.documentElement.clientWidth;
                        return Math.abs(window.innerWidth - e)
                    }
                    hide() {
                        let e = this.getWidth();
                        this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", t => t + e), this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", t => t + e), this._setElementAttributes(".sticky-top", "marginRight", t => t - e)
                    }
                    _disableOverFlow() {
                        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
                    }
                    _setElementAttributes(e, t, i) {
                        let s = this.getWidth();
                        this._applyManipulationCallback(e, e => {
                            if (e !== this._element && window.innerWidth > e.clientWidth + s) return;
                            this._saveInitialAttribute(e, t);
                            let n = window.getComputedStyle(e)[t];
                            e.style[t] = i(Number.parseFloat(n)) + "px"
                        })
                    }
                    reset() {
                        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight")
                    }
                    _saveInitialAttribute(e, t) {
                        let i = e.style[t];
                        i && F.setDataAttribute(e, t, i)
                    }
                    _resetElementAttributes(e, t) {
                        this._applyManipulationCallback(e, e => {
                            let i = F.getDataAttribute(e, t);
                            void 0 === i ? e.style.removeProperty(t) : (F.removeDataAttribute(e, t), e.style[t] = i)
                        })
                    }
                    _applyManipulationCallback(t, i) {
                        r(t) ? i(t) : e.find(t, this._element).forEach(i)
                    }
                    isOverflowing() {
                        return this.getWidth() > 0
                    }
                    constructor() {
                        this._element = document.body
                    }
                }
                let th = {
                        isVisible: !0,
                        isAnimated: !1,
                        rootElement: "body",
                        clickCallback: null
                    },
                    td = {
                        isVisible: "boolean",
                        isAnimated: "boolean",
                        rootElement: "(element|string)",
                        clickCallback: "(function|null)"
                    };
                class tu {
                    show(e) {
                        this._config.isVisible ? (this._append(), this._config.isAnimated && f(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(() => {
                            b(e)
                        })) : b(e)
                    }
                    hide(e) {
                        this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => {
                            this.dispose(), b(e)
                        })) : b(e)
                    }
                    _getElement() {
                        if (!this._element) {
                            let e = document.createElement("div");
                            e.className = "modal-backdrop", this._config.isAnimated && e.classList.add("fade"), this._element = e
                        }
                        return this._element
                    }
                    _getConfig(e) {
                        return (e = { ...th,
                            ..."object" == typeof e ? e : {}
                        }).rootElement = a(e.rootElement), l("backdrop", e, td), e
                    }
                    _append() {
                        this._isAppended || (this._config.rootElement.appendChild(this._getElement()), P.on(this._getElement(), "mousedown.bs.backdrop", () => {
                            b(this._config.clickCallback)
                        }), this._isAppended = !0)
                    }
                    dispose() {
                        this._isAppended && (P.off(this._element, "mousedown.bs.backdrop"), this._element.remove(), this._isAppended = !1)
                    }
                    _emulateAnimation(e) {
                        v(e, this._getElement(), this._config.isAnimated)
                    }
                    constructor(e) {
                        this._config = this._getConfig(e), this._isAppended = !1, this._element = null
                    }
                }
                let tf = {
                        backdrop: !0,
                        keyboard: !0,
                        focus: !0
                    },
                    tp = {
                        backdrop: "(boolean|string)",
                        keyboard: "boolean",
                        focus: "boolean"
                    };
                class tm extends B {
                    static get Default() {
                        return tf
                    }
                    static get NAME() {
                        return "modal"
                    }
                    toggle(e) {
                        return this._isShown ? this.hide() : this.show(e)
                    }
                    show(e) {
                        this._isShown || this._isTransitioning || P.trigger(this._element, "show.bs.modal", {
                            relatedTarget: e
                        }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), P.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', e => this.hide(e)), P.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
                            P.one(this._element, "mouseup.dismiss.bs.modal", e => {
                                e.target === this._element && (this._ignoreBackdropClick = !0)
                            })
                        }), this._showBackdrop(() => this._showElement(e)))
                    }
                    hide(e) {
                        if (e && ["A", "AREA"].includes(e.target.tagName) && e.preventDefault(), !this._isShown || this._isTransitioning || P.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
                        this._isShown = !1;
                        let t = this._isAnimated();
                        t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), P.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), P.off(this._element, "click.dismiss.bs.modal"), P.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback(() => this._hideModal(), this._element, t)
                    }
                    dispose() {
                        [window, this._dialog].forEach(e => P.off(e, ".bs.modal")), this._backdrop.dispose(), super.dispose(), P.off(document, "focusin.bs.modal")
                    }
                    handleUpdate() {
                        this._adjustDialog()
                    }
                    _initializeBackDrop() {
                        return new tu({
                            isVisible: Boolean(this._config.backdrop),
                            isAnimated: this._isAnimated()
                        })
                    }
                    _getConfig(e) {
                        return l("modal", e = { ...tf,
                            ...F.getDataAttributes(this._element),
                            ..."object" == typeof e ? e : {}
                        }, tp), e
                    }
                    _showElement(t) {
                        let i = this._isAnimated(),
                            s = e.findOne(".modal-body", this._dialog);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, s && (s.scrollTop = 0), i && f(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus(), this._queueCallback(() => {
                            this._config.focus && this._element.focus(), this._isTransitioning = !1, P.trigger(this._element, "shown.bs.modal", {
                                relatedTarget: t
                            })
                        }, this._dialog, i)
                    }
                    _enforceFocus() {
                        P.off(document, "focusin.bs.modal"), P.on(document, "focusin.bs.modal", e => {
                            document === e.target || this._element === e.target || this._element.contains(e.target) || this._element.focus()
                        })
                    }
                    _setEscapeEvent() {
                        this._isShown ? P.on(this._element, "keydown.dismiss.bs.modal", e => {
                            this._config.keyboard && "Escape" === e.key ? (e.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== e.key || this._triggerBackdropTransition()
                        }) : P.off(this._element, "keydown.dismiss.bs.modal")
                    }
                    _setResizeEvent() {
                        this._isShown ? P.on(window, "resize.bs.modal", () => this._adjustDialog()) : P.off(window, "resize.bs.modal")
                    }
                    _hideModal() {
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
                            document.body.classList.remove("modal-open"), this._resetAdjustments(), this._scrollBar.reset(), P.trigger(this._element, "hidden.bs.modal")
                        })
                    }
                    _showBackdrop(e) {
                        P.on(this._element, "click.dismiss.bs.modal", e => {
                            this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : e.target === e.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
                        }), this._backdrop.show(e)
                    }
                    _isAnimated() {
                        return this._element.classList.contains("fade")
                    }
                    _triggerBackdropTransition() {
                        if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
                        let {
                            classList: e,
                            scrollHeight: t,
                            style: i
                        } = this._element, s = t > document.documentElement.clientHeight;
                        !s && "hidden" === i.overflowY || e.contains("modal-static") || (s || (i.overflowY = "hidden"), e.add("modal-static"), this._queueCallback(() => {
                            e.remove("modal-static"), s || this._queueCallback(() => {
                                i.overflowY = ""
                            }, this._dialog)
                        }, this._dialog), this._element.focus())
                    }
                    _adjustDialog() {
                        let e = this._element.scrollHeight > document.documentElement.clientHeight,
                            t = this._scrollBar.getWidth(),
                            i = t > 0;
                        (!i && e && !g() || i && !e && g()) && (this._element.style.paddingLeft = t + "px"), (i && !e && !g() || !i && e && g()) && (this._element.style.paddingRight = t + "px")
                    }
                    _resetAdjustments() {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }
                    static jQueryInterface(e, t) {
                        return this.each(function() {
                            let i = tm.getOrCreateInstance(this, e);
                            if ("string" == typeof e) {
                                if (void 0 === i[e]) throw TypeError('No method named "'.concat(e, '"'));
                                i[e](t)
                            }
                        })
                    }
                    constructor(t, i) {
                        super(t), this._config = this._getConfig(i), this._dialog = e.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new tc
                    }
                }
                P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(e) {
                    let t = n(this);
                    ["A", "AREA"].includes(this.tagName) && e.preventDefault(), P.one(t, "show.bs.modal", e => {
                        e.defaultPrevented || P.one(t, "hidden.bs.modal", () => {
                            c(this) && this.focus()
                        })
                    }), tm.getOrCreateInstance(t).toggle(this)
                }), _(tm);
                let tg = {
                        backdrop: !0,
                        keyboard: !0,
                        scroll: !1
                    },
                    t_ = {
                        backdrop: "boolean",
                        keyboard: "boolean",
                        scroll: "boolean"
                    };
                class tb extends B {
                    static get NAME() {
                        return "offcanvas"
                    }
                    static get Default() {
                        return tg
                    }
                    toggle(e) {
                        return this._isShown ? this.hide() : this.show(e)
                    }
                    show(e) {
                        this._isShown || P.trigger(this._element, "show.bs.offcanvas", {
                            relatedTarget: e
                        }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || ((new tc).hide(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(() => {
                            P.trigger(this._element, "shown.bs.offcanvas", {
                                relatedTarget: e
                            })
                        }, this._element, !0))
                    }
                    hide() {
                        this._isShown && (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (P.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(() => {
                            this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new tc).reset(), P.trigger(this._element, "hidden.bs.offcanvas")
                        }, this._element, !0)))
                    }
                    dispose() {
                        this._backdrop.dispose(), super.dispose(), P.off(document, "focusin.bs.offcanvas")
                    }
                    _getConfig(e) {
                        return l("offcanvas", e = { ...tg,
                            ...F.getDataAttributes(this._element),
                            ..."object" == typeof e ? e : {}
                        }, t_), e
                    }
                    _initializeBackDrop() {
                        return new tu({
                            isVisible: this._config.backdrop,
                            isAnimated: !0,
                            rootElement: this._element.parentNode,
                            clickCallback: () => this.hide()
                        })
                    }
                    _enforceFocusOnElement(e) {
                        P.off(document, "focusin.bs.offcanvas"), P.on(document, "focusin.bs.offcanvas", t => {
                            document === t.target || e === t.target || e.contains(t.target) || e.focus()
                        }), e.focus()
                    }
                    _addEventListeners() {
                        P.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', () => this.hide()), P.on(this._element, "keydown.dismiss.bs.offcanvas", e => {
                            this._config.keyboard && "Escape" === e.key && this.hide()
                        })
                    }
                    static jQueryInterface(e) {
                        return this.each(function() {
                            let t = tb.getOrCreateInstance(this, e);
                            if ("string" == typeof e) {
                                if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError('No method named "'.concat(e, '"'));
                                t[e](this)
                            }
                        })
                    }
                    constructor(e, t) {
                        super(e), this._config = this._getConfig(t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._addEventListeners()
                    }
                }
                P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(t) {
                    let i = n(this);
                    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), h(this)) return;
                    P.one(i, "hidden.bs.offcanvas", () => {
                        c(this) && this.focus()
                    });
                    let s = e.findOne(".offcanvas.show");
                    s && s !== i && tb.getInstance(s).hide(), tb.getOrCreateInstance(i).toggle(this)
                }), P.on(window, "load.bs.offcanvas.data-api", () => e.find(".offcanvas.show").forEach(e => tb.getOrCreateInstance(e).show())), _(tb);
                let tv = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
                    ty = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
                    tw = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
                    tE = (e, t) => {
                        let i = e.nodeName.toLowerCase();
                        if (t.includes(i)) return !tv.has(i) || Boolean(ty.test(e.nodeValue) || tw.test(e.nodeValue));
                        let s = t.filter(e => e instanceof RegExp);
                        for (let n = 0, o = s.length; n < o; n++)
                            if (s[n].test(i)) return !0;
                        return !1
                    };

                function tA(e, t, i) {
                    if (!e.length) return e;
                    if (i && "function" == typeof i) return i(e);
                    let s = (new window.DOMParser).parseFromString(e, "text/html"),
                        n = Object.keys(t),
                        o = [].concat(...s.body.querySelectorAll("*"));
                    for (let r = 0, a = o.length; r < a; r++) {
                        let l = o[r],
                            c = l.nodeName.toLowerCase();
                        if (!n.includes(c)) {
                            l.remove();
                            continue
                        }
                        let h = [].concat(...l.attributes),
                            d = [].concat(t["*"] || [], t[c] || []);
                        h.forEach(e => {
                            tE(e, d) || l.removeAttribute(e.nodeName)
                        })
                    }
                    return s.body.innerHTML
                }
                let tT = RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                    tO = new Set(["sanitize", "allowList", "sanitizeFn"]),
                    tk = {
                        animation: "boolean",
                        template: "string",
                        title: "(string|element|function)",
                        trigger: "string",
                        delay: "(number|object)",
                        html: "boolean",
                        selector: "(string|boolean)",
                        placement: "(string|function)",
                        offset: "(array|string|function)",
                        container: "(string|element|boolean)",
                        fallbackPlacements: "array",
                        boundary: "(string|element)",
                        customClass: "(string|function)",
                        sanitize: "boolean",
                        sanitizeFn: "(null|function)",
                        allowList: "object",
                        popperConfig: "(null|object|function)"
                    },
                    tC = {
                        AUTO: "auto",
                        TOP: "top",
                        RIGHT: g() ? "left" : "right",
                        BOTTOM: "bottom",
                        LEFT: g() ? "right" : "left"
                    },
                    tL = {
                        animation: !0,
                        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                        trigger: "hover focus",
                        title: "",
                        delay: 0,
                        html: !1,
                        selector: !1,
                        placement: "top",
                        offset: [0, 0],
                        container: !1,
                        fallbackPlacements: ["top", "right", "bottom", "left"],
                        boundary: "clippingParents",
                        customClass: "",
                        sanitize: !0,
                        sanitizeFn: null,
                        allowList: {
                            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                            a: ["target", "href", "title", "rel"],
                            area: [],
                            b: [],
                            br: [],
                            col: [],
                            code: [],
                            div: [],
                            em: [],
                            hr: [],
                            h1: [],
                            h2: [],
                            h3: [],
                            h4: [],
                            h5: [],
                            h6: [],
                            i: [],
                            img: ["src", "srcset", "alt", "title", "width", "height"],
                            li: [],
                            ol: [],
                            p: [],
                            pre: [],
                            s: [],
                            small: [],
                            span: [],
                            sub: [],
                            sup: [],
                            strong: [],
                            u: [],
                            ul: []
                        },
                        popperConfig: null
                    },
                    tx = {
                        HIDE: "hide.bs.tooltip",
                        HIDDEN: "hidden.bs.tooltip",
                        SHOW: "show.bs.tooltip",
                        SHOWN: "shown.bs.tooltip",
                        INSERTED: "inserted.bs.tooltip",
                        CLICK: "click.bs.tooltip",
                        FOCUSIN: "focusin.bs.tooltip",
                        FOCUSOUT: "focusout.bs.tooltip",
                        MOUSEENTER: "mouseenter.bs.tooltip",
                        MOUSELEAVE: "mouseleave.bs.tooltip"
                    };
                class tD extends B {
                    static get Default() {
                        return tL
                    }
                    static get NAME() {
                        return "tooltip"
                    }
                    static get Event() {
                        return tx
                    }
                    static get DefaultType() {
                        return tk
                    }
                    enable() {
                        this._isEnabled = !0
                    }
                    disable() {
                        this._isEnabled = !1
                    }
                    toggleEnabled() {
                        this._isEnabled = !this._isEnabled
                    }
                    toggle(e) {
                        if (this._isEnabled) {
                            if (e) {
                                let t = this._initializeOnDelegatedTarget(e);
                                t._activeTrigger.click = !t._activeTrigger.click, t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t)
                            } else {
                                if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                        }
                    }
                    dispose() {
                        clearTimeout(this._timeout), P.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._popper && this._popper.destroy(), super.dispose()
                    }
                    show() {
                        if ("none" === this._element.style.display) throw Error("Please use show on visible elements");
                        if (!this.isWithContent() || !this._isEnabled) return;
                        let e = P.trigger(this._element, this.constructor.Event.SHOW),
                            i = d(this._element),
                            s = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);
                        if (e.defaultPrevented || !s) return;
                        let n = this.getTipElement(),
                            o = t(this.constructor.NAME);
                        n.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this.setContent(), this._config.animation && n.classList.add("fade");
                        let r = "function" == typeof this._config.placement ? this._config.placement.call(this, n, this._element) : this._config.placement,
                            a = this._getAttachment(r);
                        this._addAttachmentClass(a);
                        let {
                            container: l
                        } = this._config;
                        R.set(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.appendChild(n), P.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = e8(this._element, n, this._getPopperConfig(a)), n.classList.add("show");
                        let c = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
                        c && n.classList.add(...c.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(e => {
                            P.on(e, "mouseover", u)
                        });
                        let h = this.tip.classList.contains("fade");
                        this._queueCallback(() => {
                            let e = this._hoverState;
                            this._hoverState = null, P.trigger(this._element, this.constructor.Event.SHOWN), "out" === e && this._leave(null, this)
                        }, this.tip, h)
                    }
                    hide() {
                        if (!this._popper) return;
                        let e = this.getTipElement();
                        if (P.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
                        e.classList.remove("show"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(e => P.off(e, "mouseover", u)), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
                        let t = this.tip.classList.contains("fade");
                        this._queueCallback(() => {
                            this._isWithActiveTrigger() || ("show" !== this._hoverState && e.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), P.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null))
                        }, this.tip, t), this._hoverState = ""
                    }
                    update() {
                        null !== this._popper && this._popper.update()
                    }
                    isWithContent() {
                        return Boolean(this.getTitle())
                    }
                    getTipElement() {
                        if (this.tip) return this.tip;
                        let e = document.createElement("div");
                        return e.innerHTML = this._config.template, this.tip = e.children[0], this.tip
                    }
                    setContent() {
                        let t = this.getTipElement();
                        this.setElementContent(e.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show")
                    }
                    setElementContent(e, t) {
                        if (null !== e) return r(t) ? (t = a(t), void(this._config.html ? t.parentNode !== e && (e.innerHTML = "", e.appendChild(t)) : e.textContent = t.textContent)) : void(this._config.html ? (this._config.sanitize && (t = tA(t, this._config.allowList, this._config.sanitizeFn)), e.innerHTML = t) : e.textContent = t)
                    }
                    getTitle() {
                        let e = this._element.getAttribute("data-bs-original-title");
                        return e || (e = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), e
                    }
                    updateAttachment(e) {
                        return "right" === e ? "end" : "left" === e ? "start" : e
                    }
                    _initializeOnDelegatedTarget(e, t) {
                        let i = this.constructor.DATA_KEY;
                        return (t = t || R.get(e.delegateTarget, i)) || (t = new this.constructor(e.delegateTarget, this._getDelegateConfig()), R.set(e.delegateTarget, i, t)), t
                    }
                    _getOffset() {
                        let {
                            offset: e
                        } = this._config;
                        return "string" == typeof e ? e.split(",").map(e => Number.parseInt(e, 10)) : "function" == typeof e ? t => e(t, this._element) : e
                    }
                    _getPopperConfig(e) {
                        let t = {
                            placement: e,
                            modifiers: [{
                                name: "flip",
                                options: {
                                    fallbackPlacements: this._config.fallbackPlacements
                                }
                            }, {
                                name: "offset",
                                options: {
                                    offset: this._getOffset()
                                }
                            }, {
                                name: "preventOverflow",
                                options: {
                                    boundary: this._config.boundary
                                }
                            }, {
                                name: "arrow",
                                options: {
                                    element: ".".concat(this.constructor.NAME, "-arrow")
                                }
                            }, {
                                name: "onChange",
                                enabled: !0,
                                phase: "afterWrite",
                                fn: e => this._handlePopperPlacementChange(e)
                            }],
                            onFirstUpdate: e => {
                                e.options.placement !== e.placement && this._handlePopperPlacementChange(e)
                            }
                        };
                        return { ...t,
                            ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
                        }
                    }
                    _addAttachmentClass(e) {
                        this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(e))
                    }
                    _getAttachment(e) {
                        return tC[e.toUpperCase()]
                    }
                    _setListeners() {
                        this._config.trigger.split(" ").forEach(e => {
                            if ("click" === e) P.on(this._element, this.constructor.Event.CLICK, this._config.selector, e => this.toggle(e));
                            else if ("manual" !== e) {
                                let t = "hover" === e ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                                    i = "hover" === e ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                                P.on(this._element, t, this._config.selector, e => this._enter(e)), P.on(this._element, i, this._config.selector, e => this._leave(e))
                            }
                        }), this._hideModalHandler = () => {
                            this._element && this.hide()
                        }, P.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = { ...this._config,
                            trigger: "manual",
                            selector: ""
                        } : this._fixTitle()
                    }
                    _fixTitle() {
                        let e = this._element.getAttribute("title"),
                            t = typeof this._element.getAttribute("data-bs-original-title");
                        (e || "string" !== t) && (this._element.setAttribute("data-bs-original-title", e || ""), !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e), this._element.setAttribute("title", ""))
                    }
                    _enter(e, t) {
                        t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), t.getTipElement().classList.contains("show") || "show" === t._hoverState ? t._hoverState = "show" : (clearTimeout(t._timeout), t._hoverState = "show", t._config.delay && t._config.delay.show ? t._timeout = setTimeout(() => {
                            "show" === t._hoverState && t.show()
                        }, t._config.delay.show) : t.show())
                    }
                    _leave(e, t) {
                        t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = t._element.contains(e.relatedTarget)), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t._config.delay && t._config.delay.hide ? t._timeout = setTimeout(() => {
                            "out" === t._hoverState && t.hide()
                        }, t._config.delay.hide) : t.hide())
                    }
                    _isWithActiveTrigger() {
                        for (let e in this._activeTrigger)
                            if (this._activeTrigger[e]) return !0;
                        return !1
                    }
                    _getConfig(e) {
                        let t = F.getDataAttributes(this._element);
                        return Object.keys(t).forEach(e => {
                            tO.has(e) && delete t[e]
                        }), (e = { ...this.constructor.Default,
                            ...t,
                            ..."object" == typeof e && e ? e : {}
                        }).container = !1 === e.container ? document.body : a(e.container), "number" == typeof e.delay && (e.delay = {
                            show: e.delay,
                            hide: e.delay
                        }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), l("tooltip", e, this.constructor.DefaultType), e.sanitize && (e.template = tA(e.template, e.allowList, e.sanitizeFn)), e
                    }
                    _getDelegateConfig() {
                        let e = {};
                        if (this._config)
                            for (let t in this._config) this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
                        return e
                    }
                    _cleanTipClass() {
                        let e = this.getTipElement(),
                            t = e.getAttribute("class").match(tT);
                        null !== t && t.length > 0 && t.map(e => e.trim()).forEach(t => e.classList.remove(t))
                    }
                    _handlePopperPlacementChange(e) {
                        let {
                            state: t
                        } = e;
                        t && (this.tip = t.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)))
                    }
                    static jQueryInterface(e) {
                        return this.each(function() {
                            let t = tD.getOrCreateInstance(this, e);
                            if ("string" == typeof e) {
                                if (void 0 === t[e]) throw TypeError('No method named "'.concat(e, '"'));
                                t[e]()
                            }
                        })
                    }
                    constructor(e, t) {
                        if (void 0 === e7) throw TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                        super(e), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(t), this.tip = null, this._setListeners()
                    }
                }
                _(tD);
                let tS = RegExp("(^|\\s)bs-popover\\S+", "g"),
                    tN = { ...tD.Default,
                        placement: "right",
                        offset: [0, 8],
                        trigger: "click",
                        content: "",
                        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                    },
                    tI = { ...tD.DefaultType,
                        content: "(string|element|function)"
                    },
                    tj = {
                        HIDE: "hide.bs.popover",
                        HIDDEN: "hidden.bs.popover",
                        SHOW: "show.bs.popover",
                        SHOWN: "shown.bs.popover",
                        INSERTED: "inserted.bs.popover",
                        CLICK: "click.bs.popover",
                        FOCUSIN: "focusin.bs.popover",
                        FOCUSOUT: "focusout.bs.popover",
                        MOUSEENTER: "mouseenter.bs.popover",
                        MOUSELEAVE: "mouseleave.bs.popover"
                    };
                class tM extends tD {
                    static get Default() {
                        return tN
                    }
                    static get NAME() {
                        return "popover"
                    }
                    static get Event() {
                        return tj
                    }
                    static get DefaultType() {
                        return tI
                    }
                    isWithContent() {
                        return this.getTitle() || this._getContent()
                    }
                    getTipElement() {
                        return this.tip || (this.tip = super.getTipElement(), this.getTitle() || e.findOne(".popover-header", this.tip).remove(), this._getContent() || e.findOne(".popover-body", this.tip).remove()), this.tip
                    }
                    setContent() {
                        let t = this.getTipElement();
                        this.setElementContent(e.findOne(".popover-header", t), this.getTitle());
                        let i = this._getContent();
                        "function" == typeof i && (i = i.call(this._element)), this.setElementContent(e.findOne(".popover-body", t), i), t.classList.remove("fade", "show")
                    }
                    _addAttachmentClass(e) {
                        this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(e))
                    }
                    _getContent() {
                        return this._element.getAttribute("data-bs-content") || this._config.content
                    }
                    _cleanTipClass() {
                        let e = this.getTipElement(),
                            t = e.getAttribute("class").match(tS);
                        null !== t && t.length > 0 && t.map(e => e.trim()).forEach(t => e.classList.remove(t))
                    }
                    static jQueryInterface(e) {
                        return this.each(function() {
                            let t = tM.getOrCreateInstance(this, e);
                            if ("string" == typeof e) {
                                if (void 0 === t[e]) throw TypeError('No method named "'.concat(e, '"'));
                                t[e]()
                            }
                        })
                    }
                }
                _(tM);
                let tP = {
                        offset: 10,
                        method: "auto",
                        target: ""
                    },
                    tH = {
                        offset: "number",
                        method: "string",
                        target: "(string|element)"
                    };
                class tR extends B {
                    static get Default() {
                        return tP
                    }
                    static get NAME() {
                        return "scrollspy"
                    }
                    refresh() {
                        let t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                            i = "auto" === this._config.method ? t : this._config.method,
                            n = "position" === i ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.find(this._selector).map(t => {
                            let o = s(t),
                                r = o ? e.findOne(o) : null;
                            if (r) {
                                let a = r.getBoundingClientRect();
                                if (a.width || a.height) return [F[i](r).top + n, o]
                            }
                            return null
                        }).filter(e => e).sort((e, t) => e[0] - t[0]).forEach(e => {
                            this._offsets.push(e[0]), this._targets.push(e[1])
                        })
                    }
                    dispose() {
                        P.off(this._scrollElement, ".bs.scrollspy"), super.dispose()
                    }
                    _getConfig(e) {
                        if ("string" != typeof(e = { ...tP,
                                ...F.getDataAttributes(this._element),
                                ..."object" == typeof e && e ? e : {}
                            }).target && r(e.target)) {
                            let {
                                id: i
                            } = e.target;
                            i || (i = t("scrollspy"), e.target.id = i), e.target = "#" + i
                        }
                        return l("scrollspy", e, tH), e
                    }
                    _getScrollTop() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }
                    _getScrollHeight() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }
                    _getOffsetHeight() {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    }
                    _process() {
                        let e = this._getScrollTop() + this._config.offset,
                            t = this._getScrollHeight(),
                            i = this._config.offset + t - this._getOffsetHeight();
                        if (this._scrollHeight !== t && this.refresh(), e >= i) {
                            let s = this._targets[this._targets.length - 1];
                            this._activeTarget !== s && this._activate(s)
                        } else {
                            if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                            for (let n = this._offsets.length; n--;) this._activeTarget !== this._targets[n] && e >= this._offsets[n] && (void 0 === this._offsets[n + 1] || e < this._offsets[n + 1]) && this._activate(this._targets[n])
                        }
                    }
                    _activate(t) {
                        this._activeTarget = t, this._clear();
                        let i = this._selector.split(",").map(e => "".concat(e, '[data-bs-target="').concat(t, '"],').concat(e, '[href="').concat(t, '"]')),
                            s = e.findOne(i.join(","));
                        s.classList.contains("dropdown-item") ? (e.findOne(".dropdown-toggle", s.closest(".dropdown")).classList.add("active"), s.classList.add("active")) : (s.classList.add("active"), e.parents(s, ".nav, .list-group").forEach(t => {
                            e.prev(t, ".nav-link, .list-group-item").forEach(e => e.classList.add("active")), e.prev(t, ".nav-item").forEach(t => {
                                e.children(t, ".nav-link").forEach(e => e.classList.add("active"))
                            })
                        })), P.trigger(this._scrollElement, "activate.bs.scrollspy", {
                            relatedTarget: t
                        })
                    }
                    _clear() {
                        e.find(this._selector).filter(e => e.classList.contains("active")).forEach(e => e.classList.remove("active"))
                    }
                    static jQueryInterface(e) {
                        return this.each(function() {
                            let t = tR.getOrCreateInstance(this, e);
                            if ("string" == typeof e) {
                                if (void 0 === t[e]) throw TypeError('No method named "'.concat(e, '"'));
                                t[e]()
                            }
                        })
                    }
                    constructor(e, t) {
                        super(e), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(t), this._selector = "".concat(this._config.target, " .nav-link, ").concat(this._config.target, " .list-group-item, ").concat(this._config.target, " .dropdown-item"), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, P.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process()
                    }
                }
                P.on(window, "load.bs.scrollspy.data-api", () => {
                    e.find('[data-bs-spy="scroll"]').forEach(e => new tR(e))
                }), _(tR);
                class tB extends B {
                    static get NAME() {
                        return "tab"
                    }
                    show() {
                        let t;
                        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
                        let i = n(this._element),
                            s = this._element.closest(".nav, .list-group");
                        if (s) {
                            let o = "UL" === s.nodeName || "OL" === s.nodeName ? ":scope > li > .active" : ".active";
                            t = (t = e.find(o, s))[t.length - 1]
                        }
                        let r = t ? P.trigger(t, "hide.bs.tab", {
                            relatedTarget: this._element
                        }) : null;
                        if (P.trigger(this._element, "show.bs.tab", {
                                relatedTarget: t
                            }).defaultPrevented || null !== r && r.defaultPrevented) return;
                        this._activate(this._element, s);
                        let a = () => {
                            P.trigger(t, "hidden.bs.tab", {
                                relatedTarget: this._element
                            }), P.trigger(this._element, "shown.bs.tab", {
                                relatedTarget: t
                            })
                        };
                        i ? this._activate(i, i.parentNode, a) : a()
                    }
                    _activate(t, i, s) {
                        let n = (i && ("UL" === i.nodeName || "OL" === i.nodeName) ? e.find(":scope > li > .active", i) : e.children(i, ".active"))[0],
                            o = s && n && n.classList.contains("fade"),
                            r = () => this._transitionComplete(t, n, s);
                        n && o ? (n.classList.remove("show"), this._queueCallback(r, t, !0)) : r()
                    }
                    _transitionComplete(t, i, s) {
                        if (i) {
                            i.classList.remove("active");
                            let n = e.findOne(":scope > .dropdown-menu .active", i.parentNode);
                            n && n.classList.remove("active"), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1)
                        }
                        t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), f(t), t.classList.contains("fade") && t.classList.add("show");
                        let o = t.parentNode;
                        if (o && "LI" === o.nodeName && (o = o.parentNode), o && o.classList.contains("dropdown-menu")) {
                            let r = t.closest(".dropdown");
                            r && e.find(".dropdown-toggle", r).forEach(e => e.classList.add("active")), t.setAttribute("aria-expanded", !0)
                        }
                        s && s()
                    }
                    static jQueryInterface(e) {
                        return this.each(function() {
                            let t = tB.getOrCreateInstance(this);
                            if ("string" == typeof e) {
                                if (void 0 === t[e]) throw TypeError('No method named "'.concat(e, '"'));
                                t[e]()
                            }
                        })
                    }
                }
                P.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function(e) {
                    ["A", "AREA"].includes(this.tagName) && e.preventDefault(), h(this) || tB.getOrCreateInstance(this).show()
                }), _(tB);
                let tW = {
                        animation: "boolean",
                        autohide: "boolean",
                        delay: "number"
                    },
                    tq = {
                        animation: !0,
                        autohide: !0,
                        delay: 5e3
                    };
                class tz extends B {
                    static get DefaultType() {
                        return tW
                    }
                    static get Default() {
                        return tq
                    }
                    static get NAME() {
                        return "toast"
                    }
                    show() {
                        P.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), f(this._element), this._element.classList.add("showing"), this._queueCallback(() => {
                            this._element.classList.remove("showing"), this._element.classList.add("show"), P.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
                        }, this._element, this._config.animation))
                    }
                    hide() {
                        this._element.classList.contains("show") && (P.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.remove("show"), this._queueCallback(() => {
                            this._element.classList.add("hide"), P.trigger(this._element, "hidden.bs.toast")
                        }, this._element, this._config.animation)))
                    }
                    dispose() {
                        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), super.dispose()
                    }
                    _getConfig(e) {
                        return l("toast", e = { ...tq,
                            ...F.getDataAttributes(this._element),
                            ..."object" == typeof e && e ? e : {}
                        }, this.constructor.DefaultType), e
                    }
                    _maybeScheduleHide() {
                        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
                            this.hide()
                        }, this._config.delay)))
                    }
                    _onInteraction(e, t) {
                        switch (e.type) {
                            case "mouseover":
                            case "mouseout":
                                this._hasMouseInteraction = t;
                                break;
                            case "focusin":
                            case "focusout":
                                this._hasKeyboardInteraction = t
                        }
                        if (t) return void this._clearTimeout();
                        let i = e.relatedTarget;
                        this._element === i || this._element.contains(i) || this._maybeScheduleHide()
                    }
                    _setListeners() {
                        P.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', () => this.hide()), P.on(this._element, "mouseover.bs.toast", e => this._onInteraction(e, !0)), P.on(this._element, "mouseout.bs.toast", e => this._onInteraction(e, !1)), P.on(this._element, "focusin.bs.toast", e => this._onInteraction(e, !0)), P.on(this._element, "focusout.bs.toast", e => this._onInteraction(e, !1))
                    }
                    _clearTimeout() {
                        clearTimeout(this._timeout), this._timeout = null
                    }
                    static jQueryInterface(e) {
                        return this.each(function() {
                            let t = tz.getOrCreateInstance(this, e);
                            if ("string" == typeof e) {
                                if (void 0 === t[e]) throw TypeError('No method named "'.concat(e, '"'));
                                t[e](this)
                            }
                        })
                    }
                    constructor(e, t) {
                        super(e), this._config = this._getConfig(t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
                    }
                }
                return _(tz), {
                    Alert: W,
                    Button: q,
                    Carousel: Z,
                    Collapse: et,
                    Dropdown: tl,
                    Modal: tm,
                    Offcanvas: tb,
                    Popover: tM,
                    ScrollSpy: tR,
                    Tab: tB,
                    Toast: tz,
                    Tooltip: tD
                }
            }()
        }
    }
]);