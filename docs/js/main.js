"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameObject = (function () {
    function GameObject() {
    }
    GameObject.prototype.update = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    GameObject.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    return GameObject;
}());
var Astroid = (function (_super) {
    __extends(Astroid, _super);
    function Astroid(g) {
        var _this = _super.call(this) || this;
        _this.game = g;
        _this.div = document.createElement("astroid");
        document.body.appendChild(_this.div);
        _this.x = Math.random() * window.innerWidth;
        _this.y = -100;
        _this.speedX = (Math.random() * 0.5);
        _this.speedY = 1 + (Math.random() * 4);
        return _this;
    }
    Astroid.prototype.removeAstroid = function () {
        this.div.remove();
        this.game.currentscreen.removeFromArray(this);
    };
    Astroid.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        _super.prototype.update.call(this);
    };
    return Astroid;
}(GameObject));
!function () {
    "use strict";
    var e = function () { this.init(); };
    e.prototype = { init: function () { var e = this || n; return e._counter = 1e3, e._codecs = {}, e._howls = [], e._muted = !1, e._volume = 1, e._canPlayEvent = "canplaythrough", e._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, e.masterGain = null, e.noAudio = !1, e.usingWebAudio = !0, e.autoSuspend = !0, e.ctx = null, e.mobileAutoEnable = !0, e._setup(), e; }, volume: function (e) { var t = this || n; if (e = parseFloat(e), t.ctx || _(), void 0 !== e && e >= 0 && e <= 1) {
            if (t._volume = e, t._muted)
                return t;
            t.usingWebAudio && t.masterGain.gain.setValueAtTime(e, n.ctx.currentTime);
            for (var o = 0; o < t._howls.length; o++)
                if (!t._howls[o]._webAudio)
                    for (var r = t._howls[o]._getSoundIds(), a = 0; a < r.length; a++) {
                        var u = t._howls[o]._soundById(r[a]);
                        u && u._node && (u._node.volume = u._volume * e);
                    }
            return t;
        } return t._volume; }, mute: function (e) { var t = this || n; t.ctx || _(), t._muted = e, t.usingWebAudio && t.masterGain.gain.setValueAtTime(e ? 0 : t._volume, n.ctx.currentTime); for (var o = 0; o < t._howls.length; o++)
            if (!t._howls[o]._webAudio)
                for (var r = t._howls[o]._getSoundIds(), a = 0; a < r.length; a++) {
                    var u = t._howls[o]._soundById(r[a]);
                    u && u._node && (u._node.muted = !!e || u._muted);
                } return t; }, unload: function () { for (var e = this || n, t = e._howls.length - 1; t >= 0; t--)
            e._howls[t].unload(); return e.usingWebAudio && e.ctx && void 0 !== e.ctx.close && (e.ctx.close(), e.ctx = null, _()), e; }, codecs: function (e) { return (this || n)._codecs[e.replace(/^x-/, "")]; }, _setup: function () { var e = this || n; if (e.state = e.ctx ? e.ctx.state || "running" : "running", e._autoSuspend(), !e.usingWebAudio)
            if ("undefined" != typeof Audio)
                try {
                    var t = new Audio;
                    void 0 === t.oncanplaythrough && (e._canPlayEvent = "canplay");
                }
                catch (n) {
                    e.noAudio = !0;
                }
            else
                e.noAudio = !0; try {
            var t = new Audio;
            t.muted && (e.noAudio = !0);
        }
        catch (e) { } return e.noAudio || e._setupCodecs(), e; }, _setupCodecs: function () { var e = this || n, t = null; try {
            t = "undefined" != typeof Audio ? new Audio : null;
        }
        catch (n) {
            return e;
        } if (!t || "function" != typeof t.canPlayType)
            return e; var o = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), r = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g), a = r && parseInt(r[0].split("/")[1], 10) < 33; return e._codecs = { mp3: !(a || !o && !t.canPlayType("audio/mp3;").replace(/^no$/, "")), mpeg: !!o, opus: !!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""), ogg: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), oga: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), wav: !!t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""), caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""), m4a: !!(t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""), mp4: !!(t.canPlayType("audio/x-mp4;") || t.canPlayType("audio/mp4;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""), weba: !!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""), webm: !!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""), dolby: !!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""), flac: !!(t.canPlayType("audio/x-flac;") || t.canPlayType("audio/flac;")).replace(/^no$/, "") }, e; }, _enableMobileAudio: function () { var e = this || n, t = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(e._navigator && e._navigator.userAgent), o = !!("ontouchend" in window || e._navigator && e._navigator.maxTouchPoints > 0 || e._navigator && e._navigator.msMaxTouchPoints > 0); if (!e._mobileEnabled && e.ctx && (t || o)) {
            e._mobileEnabled = !1, e._mobileUnloaded || 44100 === e.ctx.sampleRate || (e._mobileUnloaded = !0, e.unload()), e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
            var r = function () { n._autoResume(); var t = e.ctx.createBufferSource(); t.buffer = e._scratchBuffer, t.connect(e.ctx.destination), void 0 === t.start ? t.noteOn(0) : t.start(0), "function" == typeof e.ctx.resume && e.ctx.resume(), t.onended = function () { t.disconnect(0), e._mobileEnabled = !0, e.mobileAutoEnable = !1, document.removeEventListener("touchstart", r, !0), document.removeEventListener("touchend", r, !0); }; };
            return document.addEventListener("touchstart", r, !0), document.addEventListener("touchend", r, !0), e;
        } }, _autoSuspend: function () { var e = this; if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && n.usingWebAudio) {
            for (var t = 0; t < e._howls.length; t++)
                if (e._howls[t]._webAudio)
                    for (var o = 0; o < e._howls[t]._sounds.length; o++)
                        if (!e._howls[t]._sounds[o]._paused)
                            return e;
            return e._suspendTimer && clearTimeout(e._suspendTimer), e._suspendTimer = setTimeout(function () { e.autoSuspend && (e._suspendTimer = null, e.state = "suspending", e.ctx.suspend().then(function () { e.state = "suspended", e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume()); })); }, 3e4), e;
        } }, _autoResume: function () { var e = this; if (e.ctx && void 0 !== e.ctx.resume && n.usingWebAudio)
            return "running" === e.state && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : "suspended" === e.state ? (e.ctx.resume().then(function () { e.state = "running"; for (var n = 0; n < e._howls.length; n++)
                e._howls[n]._emit("resume"); }), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : "suspending" === e.state && (e._resumeAfterSuspend = !0), e; } };
    var n = new e, t = function (e) { var n = this; if (!e.src || 0 === e.src.length)
        return void console.error("An array of source files must be passed with any new Howl."); n.init(e); };
    t.prototype = { init: function (e) { var t = this; return n.ctx || _(), t._autoplay = e.autoplay || !1, t._format = "string" != typeof e.format ? e.format : [e.format], t._html5 = e.html5 || !1, t._muted = e.mute || !1, t._loop = e.loop || !1, t._pool = e.pool || 5, t._preload = "boolean" != typeof e.preload || e.preload, t._rate = e.rate || 1, t._sprite = e.sprite || {}, t._src = "string" != typeof e.src ? e.src : [e.src], t._volume = void 0 !== e.volume ? e.volume : 1, t._xhrWithCredentials = e.xhrWithCredentials || !1, t._duration = 0, t._state = "unloaded", t._sounds = [], t._endTimers = {}, t._queue = [], t._playLock = !1, t._onend = e.onend ? [{ fn: e.onend }] : [], t._onfade = e.onfade ? [{ fn: e.onfade }] : [], t._onload = e.onload ? [{ fn: e.onload }] : [], t._onloaderror = e.onloaderror ? [{ fn: e.onloaderror }] : [], t._onplayerror = e.onplayerror ? [{ fn: e.onplayerror }] : [], t._onpause = e.onpause ? [{ fn: e.onpause }] : [], t._onplay = e.onplay ? [{ fn: e.onplay }] : [], t._onstop = e.onstop ? [{ fn: e.onstop }] : [], t._onmute = e.onmute ? [{ fn: e.onmute }] : [], t._onvolume = e.onvolume ? [{ fn: e.onvolume }] : [], t._onrate = e.onrate ? [{ fn: e.onrate }] : [], t._onseek = e.onseek ? [{ fn: e.onseek }] : [], t._onresume = [], t._webAudio = n.usingWebAudio && !t._html5, void 0 !== n.ctx && n.ctx && n.mobileAutoEnable && n._enableMobileAudio(), n._howls.push(t), t._autoplay && t._queue.push({ event: "play", action: function () { t.play(); } }), t._preload && t.load(), t; }, load: function () { var e = this, t = null; if (n.noAudio)
            return void e._emit("loaderror", null, "No audio support."); "string" == typeof e._src && (e._src = [e._src]); for (var r = 0; r < e._src.length; r++) {
            var u, i;
            if (e._format && e._format[r])
                u = e._format[r];
            else {
                if ("string" != typeof (i = e._src[r])) {
                    e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                    continue;
                }
                u = /^data:audio\/([^;,]+);/i.exec(i), u || (u = /\.([^.]+)$/.exec(i.split("?", 1)[0])), u && (u = u[1].toLowerCase());
            }
            if (u || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), u && n.codecs(u)) {
                t = e._src[r];
                break;
            }
        } return t ? (e._src = t, e._state = "loading", "https:" === window.location.protocol && "http:" === t.slice(0, 5) && (e._html5 = !0, e._webAudio = !1), new o(e), e._webAudio && a(e), e) : void e._emit("loaderror", null, "No codec support for selected audio sources."); }, play: function (e, t) { var o = this, r = null; if ("number" == typeof e)
            r = e, e = null;
        else {
            if ("string" == typeof e && "loaded" === o._state && !o._sprite[e])
                return null;
            if (void 0 === e) {
                e = "__default";
                for (var a = 0, u = 0; u < o._sounds.length; u++)
                    o._sounds[u]._paused && !o._sounds[u]._ended && (a++, r = o._sounds[u]._id);
                1 === a ? e = null : r = null;
            }
        } var i = r ? o._soundById(r) : o._inactiveSound(); if (!i)
            return null; if (r && !e && (e = i._sprite || "__default"), "loaded" !== o._state) {
            i._sprite = e, i._ended = !1;
            var d = i._id;
            return o._queue.push({ event: "play", action: function () { o.play(d); } }), d;
        } if (r && !i._paused)
            return t || o._loadQueue("play"), i._id; o._webAudio && n._autoResume(); var _ = Math.max(0, i._seek > 0 ? i._seek : o._sprite[e][0] / 1e3), s = Math.max(0, (o._sprite[e][0] + o._sprite[e][1]) / 1e3 - _), l = 1e3 * s / Math.abs(i._rate); i._paused = !1, i._ended = !1, i._sprite = e, i._seek = _, i._start = o._sprite[e][0] / 1e3, i._stop = (o._sprite[e][0] + o._sprite[e][1]) / 1e3, i._loop = !(!i._loop && !o._sprite[e][2]); var c = i._node; if (o._webAudio) {
            var f = function () { o._refreshBuffer(i); var e = i._muted || o._muted ? 0 : i._volume; c.gain.setValueAtTime(e, n.ctx.currentTime), i._playStart = n.ctx.currentTime, void 0 === c.bufferSource.start ? i._loop ? c.bufferSource.noteGrainOn(0, _, 86400) : c.bufferSource.noteGrainOn(0, _, s) : i._loop ? c.bufferSource.start(0, _, 86400) : c.bufferSource.start(0, _, s), l !== 1 / 0 && (o._endTimers[i._id] = setTimeout(o._ended.bind(o, i), l)), t || setTimeout(function () { o._emit("play", i._id); }, 0); };
            "running" === n.state ? f() : (o.once("resume", f), o._clearTimer(i._id));
        }
        else {
            var p = function () { c.currentTime = _, c.muted = i._muted || o._muted || n._muted || c.muted, c.volume = i._volume * n.volume(), c.playbackRate = i._rate; try {
                var r = c.play();
                if ("undefined" != typeof Promise && r instanceof Promise) {
                    o._playLock = !0;
                    var a = function () { o._playLock = !1, t || o._emit("play", i._id); };
                    r.then(a, a);
                }
                else
                    t || o._emit("play", i._id);
                if (c.playbackRate = i._rate, c.paused)
                    return void o._emit("playerror", i._id, "Playback was unable to start. This is most commonly an issue on mobile devices where playback was not within a user interaction.");
                "__default" !== e || i._loop ? o._endTimers[i._id] = setTimeout(o._ended.bind(o, i), l) : (o._endTimers[i._id] = function () { o._ended(i), c.removeEventListener("ended", o._endTimers[i._id], !1); }, c.addEventListener("ended", o._endTimers[i._id], !1));
            }
            catch (e) {
                o._emit("playerror", i._id, e);
            } }, m = window && window.ejecta || !c.readyState && n._navigator.isCocoonJS;
            if (c.readyState >= 3 || m)
                p();
            else {
                var v = function () { p(), c.removeEventListener(n._canPlayEvent, v, !1); };
                c.addEventListener(n._canPlayEvent, v, !1), o._clearTimer(i._id);
            }
        } return i._id; }, pause: function (e) { var n = this; if ("loaded" !== n._state || n._playLock)
            return n._queue.push({ event: "pause", action: function () { n.pause(e); } }), n; for (var t = n._getSoundIds(e), o = 0; o < t.length; o++) {
            n._clearTimer(t[o]);
            var r = n._soundById(t[o]);
            if (r && !r._paused && (r._seek = n.seek(t[o]), r._rateSeek = 0, r._paused = !0, n._stopFade(t[o]), r._node))
                if (n._webAudio) {
                    if (!r._node.bufferSource)
                        continue;
                    void 0 === r._node.bufferSource.stop ? r._node.bufferSource.noteOff(0) : r._node.bufferSource.stop(0), n._cleanBuffer(r._node);
                }
                else
                    isNaN(r._node.duration) && r._node.duration !== 1 / 0 || r._node.pause();
            arguments[1] || n._emit("pause", r ? r._id : null);
        } return n; }, stop: function (e, n) { var t = this; if ("loaded" !== t._state)
            return t._queue.push({ event: "stop", action: function () { t.stop(e); } }), t; for (var o = t._getSoundIds(e), r = 0; r < o.length; r++) {
            t._clearTimer(o[r]);
            var a = t._soundById(o[r]);
            a && (a._seek = a._start || 0, a._rateSeek = 0, a._paused = !0, a._ended = !0, t._stopFade(o[r]), a._node && (t._webAudio ? a._node.bufferSource && (void 0 === a._node.bufferSource.stop ? a._node.bufferSource.noteOff(0) : a._node.bufferSource.stop(0), t._cleanBuffer(a._node)) : isNaN(a._node.duration) && a._node.duration !== 1 / 0 || (a._node.currentTime = a._start || 0, a._node.pause())), n || t._emit("stop", a._id));
        } return t; }, mute: function (e, t) { var o = this; if ("loaded" !== o._state)
            return o._queue.push({ event: "mute", action: function () { o.mute(e, t); } }), o; if (void 0 === t) {
            if ("boolean" != typeof e)
                return o._muted;
            o._muted = e;
        } for (var r = o._getSoundIds(t), a = 0; a < r.length; a++) {
            var u = o._soundById(r[a]);
            u && (u._muted = e, u._interval && o._stopFade(u._id), o._webAudio && u._node ? u._node.gain.setValueAtTime(e ? 0 : u._volume, n.ctx.currentTime) : u._node && (u._node.muted = !!n._muted || e), o._emit("mute", u._id));
        } return o; }, volume: function () { var e, t, o = this, r = arguments; if (0 === r.length)
            return o._volume; if (1 === r.length || 2 === r.length && void 0 === r[1]) {
            o._getSoundIds().indexOf(r[0]) >= 0 ? t = parseInt(r[0], 10) : e = parseFloat(r[0]);
        }
        else
            r.length >= 2 && (e = parseFloat(r[0]), t = parseInt(r[1], 10)); var a; if (!(void 0 !== e && e >= 0 && e <= 1))
            return a = t ? o._soundById(t) : o._sounds[0], a ? a._volume : 0; if ("loaded" !== o._state)
            return o._queue.push({ event: "volume", action: function () { o.volume.apply(o, r); } }), o; void 0 === t && (o._volume = e), t = o._getSoundIds(t); for (var u = 0; u < t.length; u++)
            (a = o._soundById(t[u])) && (a._volume = e, r[2] || o._stopFade(t[u]), o._webAudio && a._node && !a._muted ? a._node.gain.setValueAtTime(e, n.ctx.currentTime) : a._node && !a._muted && (a._node.volume = e * n.volume()), o._emit("volume", a._id)); return o; }, fade: function (e, t, o, r) { var a = this; if ("loaded" !== a._state)
            return a._queue.push({ event: "fade", action: function () { a.fade(e, t, o, r); } }), a; a.volume(e, r); for (var u = a._getSoundIds(r), i = 0; i < u.length; i++) {
            var d = a._soundById(u[i]);
            if (d) {
                if (r || a._stopFade(u[i]), a._webAudio && !d._muted) {
                    var _ = n.ctx.currentTime, s = _ + o / 1e3;
                    d._volume = e, d._node.gain.setValueAtTime(e, _), d._node.gain.linearRampToValueAtTime(t, s);
                }
                a._startFadeInterval(d, e, t, o, u[i], void 0 === r);
            }
        } return a; }, _startFadeInterval: function (e, n, t, o, r, a) { var u = this, i = n, d = t - n, _ = Math.abs(d / .01), s = Math.max(4, _ > 0 ? o / _ : o), l = Date.now(); e._fadeTo = t, e._interval = setInterval(function () { var r = (Date.now() - l) / o; l = Date.now(), i += d * r, i = Math.max(0, i), i = Math.min(1, i), i = Math.round(100 * i) / 100, u._webAudio ? e._volume = i : u.volume(i, e._id, !0), a && (u._volume = i), (t < n && i <= t || t > n && i >= t) && (clearInterval(e._interval), e._interval = null, e._fadeTo = null, u.volume(t, e._id), u._emit("fade", e._id)); }, s); }, _stopFade: function (e) { var t = this, o = t._soundById(e); return o && o._interval && (t._webAudio && o._node.gain.cancelScheduledValues(n.ctx.currentTime), clearInterval(o._interval), o._interval = null, t.volume(o._fadeTo, e), o._fadeTo = null, t._emit("fade", e)), t; }, loop: function () { var e, n, t, o = this, r = arguments; if (0 === r.length)
            return o._loop; if (1 === r.length) {
            if ("boolean" != typeof r[0])
                return !!(t = o._soundById(parseInt(r[0], 10))) && t._loop;
            e = r[0], o._loop = e;
        }
        else
            2 === r.length && (e = r[0], n = parseInt(r[1], 10)); for (var a = o._getSoundIds(n), u = 0; u < a.length; u++)
            (t = o._soundById(a[u])) && (t._loop = e, o._webAudio && t._node && t._node.bufferSource && (t._node.bufferSource.loop = e, e && (t._node.bufferSource.loopStart = t._start || 0, t._node.bufferSource.loopEnd = t._stop))); return o; }, rate: function () { var e, t, o = this, r = arguments; if (0 === r.length)
            t = o._sounds[0]._id;
        else if (1 === r.length) {
            var a = o._getSoundIds(), u = a.indexOf(r[0]);
            u >= 0 ? t = parseInt(r[0], 10) : e = parseFloat(r[0]);
        }
        else
            2 === r.length && (e = parseFloat(r[0]), t = parseInt(r[1], 10)); var i; if ("number" != typeof e)
            return i = o._soundById(t), i ? i._rate : o._rate; if ("loaded" !== o._state)
            return o._queue.push({ event: "rate", action: function () { o.rate.apply(o, r); } }), o; void 0 === t && (o._rate = e), t = o._getSoundIds(t); for (var d = 0; d < t.length; d++)
            if (i = o._soundById(t[d])) {
                i._rateSeek = o.seek(t[d]), i._playStart = o._webAudio ? n.ctx.currentTime : i._playStart, i._rate = e, o._webAudio && i._node && i._node.bufferSource ? i._node.bufferSource.playbackRate.setValueAtTime(e, n.ctx.currentTime) : i._node && (i._node.playbackRate = e);
                var _ = o.seek(t[d]), s = (o._sprite[i._sprite][0] + o._sprite[i._sprite][1]) / 1e3 - _, l = 1e3 * s / Math.abs(i._rate);
                !o._endTimers[t[d]] && i._paused || (o._clearTimer(t[d]), o._endTimers[t[d]] = setTimeout(o._ended.bind(o, i), l)), o._emit("rate", i._id);
            } return o; }, seek: function () { var e, t, o = this, r = arguments; if (0 === r.length)
            t = o._sounds[0]._id;
        else if (1 === r.length) {
            var a = o._getSoundIds(), u = a.indexOf(r[0]);
            u >= 0 ? t = parseInt(r[0], 10) : o._sounds.length && (t = o._sounds[0]._id, e = parseFloat(r[0]));
        }
        else
            2 === r.length && (e = parseFloat(r[0]), t = parseInt(r[1], 10)); if (void 0 === t)
            return o; if ("loaded" !== o._state)
            return o._queue.push({ event: "seek", action: function () { o.seek.apply(o, r); } }), o; var i = o._soundById(t); if (i) {
            if (!("number" == typeof e && e >= 0)) {
                if (o._webAudio) {
                    var d = o.playing(t) ? n.ctx.currentTime - i._playStart : 0, _ = i._rateSeek ? i._rateSeek - i._seek : 0;
                    return i._seek + (_ + d * Math.abs(i._rate));
                }
                return i._node.currentTime;
            }
            var s = o.playing(t);
            if (s && o.pause(t, !0), i._seek = e, i._ended = !1, o._clearTimer(t), s && o.play(t, !0), !o._webAudio && i._node && (i._node.currentTime = e), s && !o._webAudio) {
                var l = function () { o._playLock ? setTimeout(l, 0) : o._emit("seek", t); };
                setTimeout(l, 0);
            }
            else
                o._emit("seek", t);
        } return o; }, playing: function (e) { var n = this; if ("number" == typeof e) {
            var t = n._soundById(e);
            return !!t && !t._paused;
        } for (var o = 0; o < n._sounds.length; o++)
            if (!n._sounds[o]._paused)
                return !0; return !1; }, duration: function (e) { var n = this, t = n._duration, o = n._soundById(e); return o && (t = n._sprite[o._sprite][1] / 1e3), t; }, state: function () { return this._state; }, unload: function () { for (var e = this, t = e._sounds, o = 0; o < t.length; o++) {
            if (t[o]._paused || e.stop(t[o]._id), !e._webAudio) {
                /MSIE |Trident\//.test(n._navigator && n._navigator.userAgent) || (t[o]._node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"), t[o]._node.removeEventListener("error", t[o]._errorFn, !1), t[o]._node.removeEventListener(n._canPlayEvent, t[o]._loadFn, !1);
            }
            delete t[o]._node, e._clearTimer(t[o]._id);
            var a = n._howls.indexOf(e);
            a >= 0 && n._howls.splice(a, 1);
        } var u = !0; for (o = 0; o < n._howls.length; o++)
            if (n._howls[o]._src === e._src) {
                u = !1;
                break;
            } return r && u && delete r[e._src], n.noAudio = !1, e._state = "unloaded", e._sounds = [], e = null, null; }, on: function (e, n, t, o) { var r = this, a = r["_on" + e]; return "function" == typeof n && a.push(o ? { id: t, fn: n, once: o } : { id: t, fn: n }), r; }, off: function (e, n, t) { var o = this, r = o["_on" + e], a = 0; if ("number" == typeof n && (t = n, n = null), n || t)
            for (a = 0; a < r.length; a++) {
                var u = t === r[a].id;
                if (n === r[a].fn && u || !n && u) {
                    r.splice(a, 1);
                    break;
                }
            }
        else if (e)
            o["_on" + e] = [];
        else {
            var i = Object.keys(o);
            for (a = 0; a < i.length; a++)
                0 === i[a].indexOf("_on") && Array.isArray(o[i[a]]) && (o[i[a]] = []);
        } return o; }, once: function (e, n, t) { var o = this; return o.on(e, n, t, 1), o; }, _emit: function (e, n, t) { for (var o = this, r = o["_on" + e], a = r.length - 1; a >= 0; a--)
            r[a].id && r[a].id !== n && "load" !== e || (setTimeout(function (e) { e.call(this, n, t); }.bind(o, r[a].fn), 0), r[a].once && o.off(e, r[a].fn, r[a].id)); return o._loadQueue(e), o; }, _loadQueue: function (e) { var n = this; if (n._queue.length > 0) {
            var t = n._queue[0];
            t.event === e && (n._queue.shift(), n._loadQueue()), e || t.action();
        } return n; }, _ended: function (e) { var t = this, o = e._sprite; if (!t._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop)
            return setTimeout(t._ended.bind(t, e), 100), t; var r = !(!e._loop && !t._sprite[o][2]); if (t._emit("end", e._id), !t._webAudio && r && t.stop(e._id, !0).play(e._id), t._webAudio && r) {
            t._emit("play", e._id), e._seek = e._start || 0, e._rateSeek = 0, e._playStart = n.ctx.currentTime;
            var a = 1e3 * (e._stop - e._start) / Math.abs(e._rate);
            t._endTimers[e._id] = setTimeout(t._ended.bind(t, e), a);
        } return t._webAudio && !r && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, t._clearTimer(e._id), t._cleanBuffer(e._node), n._autoSuspend()), t._webAudio || r || t.stop(e._id), t; }, _clearTimer: function (e) { var n = this; if (n._endTimers[e]) {
            if ("function" != typeof n._endTimers[e])
                clearTimeout(n._endTimers[e]);
            else {
                var t = n._soundById(e);
                t && t._node && t._node.removeEventListener("ended", n._endTimers[e], !1);
            }
            delete n._endTimers[e];
        } return n; }, _soundById: function (e) { for (var n = this, t = 0; t < n._sounds.length; t++)
            if (e === n._sounds[t]._id)
                return n._sounds[t]; return null; }, _inactiveSound: function () { var e = this; e._drain(); for (var n = 0; n < e._sounds.length; n++)
            if (e._sounds[n]._ended)
                return e._sounds[n].reset(); return new o(e); }, _drain: function () { var e = this, n = e._pool, t = 0, o = 0; if (!(e._sounds.length < n)) {
            for (o = 0; o < e._sounds.length; o++)
                e._sounds[o]._ended && t++;
            for (o = e._sounds.length - 1; o >= 0; o--) {
                if (t <= n)
                    return;
                e._sounds[o]._ended && (e._webAudio && e._sounds[o]._node && e._sounds[o]._node.disconnect(0), e._sounds.splice(o, 1), t--);
            }
        } }, _getSoundIds: function (e) { var n = this; if (void 0 === e) {
            for (var t = [], o = 0; o < n._sounds.length; o++)
                t.push(n._sounds[o]._id);
            return t;
        } return [e]; }, _refreshBuffer: function (e) { var t = this; return e._node.bufferSource = n.ctx.createBufferSource(), e._node.bufferSource.buffer = r[t._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), e._node.bufferSource.loop = e._loop, e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop), e._node.bufferSource.playbackRate.setValueAtTime(e._rate, n.ctx.currentTime), t; }, _cleanBuffer: function (e) { var t = this; if (n._scratchBuffer) {
            e.bufferSource.onended = null, e.bufferSource.disconnect(0);
            try {
                e.bufferSource.buffer = n._scratchBuffer;
            }
            catch (e) { }
        } return e.bufferSource = null, t; } };
    var o = function (e) { this._parent = e, this.init(); };
    o.prototype = { init: function () { var e = this, t = e._parent; return e._muted = t._muted, e._loop = t._loop, e._volume = t._volume, e._rate = t._rate, e._seek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++n._counter, t._sounds.push(e), e.create(), e; }, create: function () { var e = this, t = e._parent, o = n._muted || e._muted || e._parent._muted ? 0 : e._volume; return t._webAudio ? (e._node = void 0 === n.ctx.createGain ? n.ctx.createGainNode() : n.ctx.createGain(), e._node.gain.setValueAtTime(o, n.ctx.currentTime), e._node.paused = !0, e._node.connect(n.masterGain)) : (e._node = new Audio, e._errorFn = e._errorListener.bind(e), e._node.addEventListener("error", e._errorFn, !1), e._loadFn = e._loadListener.bind(e), e._node.addEventListener(n._canPlayEvent, e._loadFn, !1), e._node.src = t._src, e._node.preload = "auto", e._node.volume = o * n.volume(), e._node.load()), e; }, reset: function () { var e = this, t = e._parent; return e._muted = t._muted, e._loop = t._loop, e._volume = t._volume, e._rate = t._rate, e._seek = 0, e._rateSeek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++n._counter, e; }, _errorListener: function () { var e = this; e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0), e._node.removeEventListener("error", e._errorFn, !1); }, _loadListener: function () { var e = this, t = e._parent; t._duration = Math.ceil(10 * e._node.duration) / 10, 0 === Object.keys(t._sprite).length && (t._sprite = { __default: [0, 1e3 * t._duration] }), "loaded" !== t._state && (t._state = "loaded", t._emit("load"), t._loadQueue()), e._node.removeEventListener(n._canPlayEvent, e._loadFn, !1); } };
    var r = {}, a = function (e) { var n = e._src; if (r[n])
        return e._duration = r[n].duration, void d(e); if (/^data:[^;]+;base64,/.test(n)) {
        for (var t = atob(n.split(",")[1]), o = new Uint8Array(t.length), a = 0; a < t.length; ++a)
            o[a] = t.charCodeAt(a);
        i(o.buffer, e);
    }
    else {
        var _ = new XMLHttpRequest;
        _.open("GET", n, !0), _.withCredentials = e._xhrWithCredentials, _.responseType = "arraybuffer", _.onload = function () { var n = (_.status + "")[0]; if ("0" !== n && "2" !== n && "3" !== n)
            return void e._emit("loaderror", null, "Failed loading audio file with status: " + _.status + "."); i(_.response, e); }, _.onerror = function () { e._webAudio && (e._html5 = !0, e._webAudio = !1, e._sounds = [], delete r[n], e.load()); }, u(_);
    } }, u = function (e) { try {
        e.send();
    }
    catch (n) {
        e.onerror();
    } }, i = function (e, t) { n.ctx.decodeAudioData(e, function (e) { e && t._sounds.length > 0 && (r[t._src] = e, d(t, e)); }, function () { t._emit("loaderror", null, "Decoding audio data failed."); }); }, d = function (e, n) { n && !e._duration && (e._duration = n.duration), 0 === Object.keys(e._sprite).length && (e._sprite = { __default: [0, 1e3 * e._duration] }), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue()); }, _ = function () { try {
        "undefined" != typeof AudioContext ? n.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? n.ctx = new webkitAudioContext : n.usingWebAudio = !1;
    }
    catch (e) {
        n.usingWebAudio = !1;
    } var e = /iP(hone|od|ad)/.test(n._navigator && n._navigator.platform), t = n._navigator && n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/), o = t ? parseInt(t[1], 10) : null; if (e && o && o < 9) {
        var r = /safari/.test(n._navigator && n._navigator.userAgent.toLowerCase());
        (n._navigator && n._navigator.standalone && !r || n._navigator && !n._navigator.standalone && !r) && (n.usingWebAudio = !1);
    } n.usingWebAudio && (n.masterGain = void 0 === n.ctx.createGain ? n.ctx.createGainNode() : n.ctx.createGain(), n.masterGain.gain.setValueAtTime(n._muted ? 0 : 1, n.ctx.currentTime), n.masterGain.connect(n.ctx.destination)), n._setup(); };
    "function" == typeof define && define.amd && define([], function () { return { Howler: n, Howl: t }; }), "undefined" != typeof exports && (exports.Howler = n, exports.Howl = t), "undefined" != typeof window ? (window.HowlerGlobal = e, window.Howler = n, window.Howl = t, window.Sound = o) : "undefined" != typeof global && (global.HowlerGlobal = e, global.Howler = n, global.Howl = t, global.Sound = o);
}();
!function () {
    "use strict";
    HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function (e) { var n = this; if (!n.ctx || !n.ctx.listener)
        return n; for (var t = n._howls.length - 1; t >= 0; t--)
        n._howls[t].stereo(e); return n; }, HowlerGlobal.prototype.pos = function (e, n, t) { var r = this; return r.ctx && r.ctx.listener ? (n = "number" != typeof n ? r._pos[1] : n, t = "number" != typeof t ? r._pos[2] : t, "number" != typeof e ? r._pos : (r._pos = [e, n, t], void 0 !== r.ctx.listener.positionX ? (r.ctx.listener.positionX.setTargetAtTime(r._pos[0], Howler.ctx.currentTime, .1), r.ctx.listener.positionY.setTargetAtTime(r._pos[1], Howler.ctx.currentTime, .1), r.ctx.listener.positionZ.setTargetAtTime(r._pos[2], Howler.ctx.currentTime, .1)) : r.ctx.listener.setPosition(r._pos[0], r._pos[1], r._pos[2]), r)) : r; }, HowlerGlobal.prototype.orientation = function (e, n, t, r, o, i) { var a = this; if (!a.ctx || !a.ctx.listener)
        return a; var p = a._orientation; return n = "number" != typeof n ? p[1] : n, t = "number" != typeof t ? p[2] : t, r = "number" != typeof r ? p[3] : r, o = "number" != typeof o ? p[4] : o, i = "number" != typeof i ? p[5] : i, "number" != typeof e ? p : (a._orientation = [e, n, t, r, o, i], void 0 !== a.ctx.listener.forwardX ? (a.ctx.listener.forwardX.setTargetAtTime(e, Howler.ctx.currentTime, .1), a.ctx.listener.forwardY.setTargetAtTime(n, Howler.ctx.currentTime, .1), a.ctx.listener.forwardZ.setTargetAtTime(t, Howler.ctx.currentTime, .1), a.ctx.listener.upX.setTargetAtTime(e, Howler.ctx.currentTime, .1), a.ctx.listener.upY.setTargetAtTime(n, Howler.ctx.currentTime, .1), a.ctx.listener.upZ.setTargetAtTime(t, Howler.ctx.currentTime, .1)) : a.ctx.listener.setOrientation(e, n, t, r, o, i), a); }, Howl.prototype.init = function (e) { return function (n) { var t = this; return t._orientation = n.orientation || [1, 0, 0], t._stereo = n.stereo || null, t._pos = n.pos || null, t._pannerAttr = { coneInnerAngle: void 0 !== n.coneInnerAngle ? n.coneInnerAngle : 360, coneOuterAngle: void 0 !== n.coneOuterAngle ? n.coneOuterAngle : 360, coneOuterGain: void 0 !== n.coneOuterGain ? n.coneOuterGain : 0, distanceModel: void 0 !== n.distanceModel ? n.distanceModel : "inverse", maxDistance: void 0 !== n.maxDistance ? n.maxDistance : 1e4, panningModel: void 0 !== n.panningModel ? n.panningModel : "HRTF", refDistance: void 0 !== n.refDistance ? n.refDistance : 1, rolloffFactor: void 0 !== n.rolloffFactor ? n.rolloffFactor : 1 }, t._onstereo = n.onstereo ? [{ fn: n.onstereo }] : [], t._onpos = n.onpos ? [{ fn: n.onpos }] : [], t._onorientation = n.onorientation ? [{ fn: n.onorientation }] : [], e.call(this, n); }; }(Howl.prototype.init), Howl.prototype.stereo = function (n, t) { var r = this; if (!r._webAudio)
        return r; if ("loaded" !== r._state)
        return r._queue.push({ event: "stereo", action: function () { r.stereo(n, t); } }), r; var o = void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo"; if (void 0 === t) {
        if ("number" != typeof n)
            return r._stereo;
        r._stereo = n, r._pos = [n, 0, 0];
    } for (var i = r._getSoundIds(t), a = 0; a < i.length; a++) {
        var p = r._soundById(i[a]);
        if (p) {
            if ("number" != typeof n)
                return p._stereo;
            p._stereo = n, p._pos = [n, 0, 0], p._node && (p._pannerAttr.panningModel = "equalpower", p._panner && p._panner.pan || e(p, o), "spatial" === o ? void 0 !== p._panner.positionX ? (p._panner.positionX.setValueAtTime(n, Howler.ctx.currentTime), p._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), p._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : p._panner.setPosition(n, 0, 0) : p._panner.pan.setValueAtTime(n, Howler.ctx.currentTime)), r._emit("stereo", p._id);
        }
    } return r; }, Howl.prototype.pos = function (n, t, r, o) { var i = this; if (!i._webAudio)
        return i; if ("loaded" !== i._state)
        return i._queue.push({ event: "pos", action: function () { i.pos(n, t, r, o); } }), i; if (t = "number" != typeof t ? 0 : t, r = "number" != typeof r ? -.5 : r, void 0 === o) {
        if ("number" != typeof n)
            return i._pos;
        i._pos = [n, t, r];
    } for (var a = i._getSoundIds(o), p = 0; p < a.length; p++) {
        var s = i._soundById(a[p]);
        if (s) {
            if ("number" != typeof n)
                return s._pos;
            s._pos = [n, t, r], s._node && (s._panner && !s._panner.pan || e(s, "spatial"), void 0 !== s._panner.positionX ? (s._panner.positionX.setValueAtTime(n, Howler.ctx.currentTime), s._panner.positionY.setValueAtTime(t, Howler.ctx.currentTime), s._panner.positionZ.setValueAtTime(r, Howler.ctx.currentTime)) : s._panner.setOrientation(n, t, r)), i._emit("pos", s._id);
        }
    } return i; }, Howl.prototype.orientation = function (n, t, r, o) { var i = this; if (!i._webAudio)
        return i; if ("loaded" !== i._state)
        return i._queue.push({ event: "orientation", action: function () { i.orientation(n, t, r, o); } }), i; if (t = "number" != typeof t ? i._orientation[1] : t, r = "number" != typeof r ? i._orientation[2] : r, void 0 === o) {
        if ("number" != typeof n)
            return i._orientation;
        i._orientation = [n, t, r];
    } for (var a = i._getSoundIds(o), p = 0; p < a.length; p++) {
        var s = i._soundById(a[p]);
        if (s) {
            if ("number" != typeof n)
                return s._orientation;
            s._orientation = [n, t, r], s._node && (s._panner || (s._pos || (s._pos = i._pos || [0, 0, -.5]), e(s, "spatial")), s._panner.orientationX.setValueAtTime(n, Howler.ctx.currentTime), s._panner.orientationY.setValueAtTime(t, Howler.ctx.currentTime), s._panner.orientationZ.setValueAtTime(r, Howler.ctx.currentTime)), i._emit("orientation", s._id);
        }
    } return i; }, Howl.prototype.pannerAttr = function () { var n, t, r, o = this, i = arguments; if (!o._webAudio)
        return o; if (0 === i.length)
        return o._pannerAttr; if (1 === i.length) {
        if ("object" != typeof i[0])
            return r = o._soundById(parseInt(i[0], 10)), r ? r._pannerAttr : o._pannerAttr;
        n = i[0], void 0 === t && (n.pannerAttr || (n.pannerAttr = { coneInnerAngle: n.coneInnerAngle, coneOuterAngle: n.coneOuterAngle, coneOuterGain: n.coneOuterGain, distanceModel: n.distanceModel, maxDistance: n.maxDistance, refDistance: n.refDistance, rolloffFactor: n.rolloffFactor, panningModel: n.panningModel }), o._pannerAttr = { coneInnerAngle: void 0 !== n.pannerAttr.coneInnerAngle ? n.pannerAttr.coneInnerAngle : o._coneInnerAngle, coneOuterAngle: void 0 !== n.pannerAttr.coneOuterAngle ? n.pannerAttr.coneOuterAngle : o._coneOuterAngle, coneOuterGain: void 0 !== n.pannerAttr.coneOuterGain ? n.pannerAttr.coneOuterGain : o._coneOuterGain, distanceModel: void 0 !== n.pannerAttr.distanceModel ? n.pannerAttr.distanceModel : o._distanceModel, maxDistance: void 0 !== n.pannerAttr.maxDistance ? n.pannerAttr.maxDistance : o._maxDistance, refDistance: void 0 !== n.pannerAttr.refDistance ? n.pannerAttr.refDistance : o._refDistance, rolloffFactor: void 0 !== n.pannerAttr.rolloffFactor ? n.pannerAttr.rolloffFactor : o._rolloffFactor, panningModel: void 0 !== n.pannerAttr.panningModel ? n.pannerAttr.panningModel : o._panningModel });
    }
    else
        2 === i.length && (n = i[0], t = parseInt(i[1], 10)); for (var a = o._getSoundIds(t), p = 0; p < a.length; p++)
        if (r = o._soundById(a[p])) {
            var s = r._pannerAttr;
            s = { coneInnerAngle: void 0 !== n.coneInnerAngle ? n.coneInnerAngle : s.coneInnerAngle, coneOuterAngle: void 0 !== n.coneOuterAngle ? n.coneOuterAngle : s.coneOuterAngle, coneOuterGain: void 0 !== n.coneOuterGain ? n.coneOuterGain : s.coneOuterGain, distanceModel: void 0 !== n.distanceModel ? n.distanceModel : s.distanceModel, maxDistance: void 0 !== n.maxDistance ? n.maxDistance : s.maxDistance, refDistance: void 0 !== n.refDistance ? n.refDistance : s.refDistance, rolloffFactor: void 0 !== n.rolloffFactor ? n.rolloffFactor : s.rolloffFactor, panningModel: void 0 !== n.panningModel ? n.panningModel : s.panningModel };
            var c = r._panner;
            c ? (c.coneInnerAngle = s.coneInnerAngle, c.coneOuterAngle = s.coneOuterAngle, c.coneOuterGain = s.coneOuterGain, c.distanceModel = s.distanceModel, c.maxDistance = s.maxDistance, c.refDistance = s.refDistance, c.rolloffFactor = s.rolloffFactor, c.panningModel = s.panningModel) : (r._pos || (r._pos = o._pos || [0, 0, -.5]), e(r, "spatial"));
        } return o; }, Sound.prototype.init = function (e) { return function () { var n = this, t = n._parent; n._orientation = t._orientation, n._stereo = t._stereo, n._pos = t._pos, n._pannerAttr = t._pannerAttr, e.call(this), n._stereo ? t.stereo(n._stereo) : n._pos && t.pos(n._pos[0], n._pos[1], n._pos[2], n._id); }; }(Sound.prototype.init), Sound.prototype.reset = function (e) { return function () { var n = this, t = n._parent; return n._orientation = t._orientation, n._pos = t._pos, n._pannerAttr = t._pannerAttr, e.call(this); }; }(Sound.prototype.reset);
    var e = function (e, n) { n = n || "spatial", "spatial" === n ? (e._panner = Howler.ctx.createPanner(), e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle, e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle, e._panner.coneOuterGain = e._pannerAttr.coneOuterGain, e._panner.distanceModel = e._pannerAttr.distanceModel, e._panner.maxDistance = e._pannerAttr.maxDistance, e._panner.refDistance = e._pannerAttr.refDistance, e._panner.rolloffFactor = e._pannerAttr.rolloffFactor, e._panner.panningModel = e._pannerAttr.panningModel, void 0 !== e._panner.positionX ? (e._panner.positionX.setValueAtTime(e._pos[0], Howler.ctx.currentTime), e._panner.positionY.setValueAtTime(e._pos[1], Howler.ctx.currentTime), e._panner.positionZ.setValueAtTime(e._pos[2], Howler.ctx.currentTime)) : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]), void 0 !== e._panner.orientationX ? (e._panner.orientationX.setValueAtTime(e._orientation[0], Howler.ctx.currentTime), e._panner.orientationY.setValueAtTime(e._orientation[1], Howler.ctx.currentTime), e._panner.orientationZ.setValueAtTime(e._orientation[2], Howler.ctx.currentTime)) : e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2])) : (e._panner = Howler.ctx.createStereoPanner(), e._panner.pan.setValueAtTime(e._stereo, Howler.ctx.currentTime)), e._panner.connect(e._node), e._paused || e._parent.pause(e._id, !0).play(e._id, !0); };
}();
var music = new Howl({
    src: ['./audio/background_music.mp3'],
    loop: true
});
var winMusic = new Howl({
    src: ['./audio/win_music.mp3'],
    loop: false
});
var explosion = new Howl({
    src: ['./audio/explosion.mp3'],
    volume: 1,
    loop: false
});
var phaserFire = new Howl({
    src: ['./audio/phaser_fire.mp3'],
    volume: 0.2,
    loop: false
});
var allShesGot = new Howl({
    src: ['./audio/all_shes_got.mp3'],
    volume: 1,
    loop: false
});
var engage = new Howl({
    src: ['./audio/engage.wav'],
    volume: 0.3,
    loop: false
});
var Game = (function () {
    function Game() {
        this.currentscreen = new StartScreen(this);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.currentscreen.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.showPlayScreen = function () {
        document.body.innerHTML = "";
        this.currentscreen = new PlayScreen(this);
        winMusic.stop();
        music.play();
    };
    Game.prototype.showGameoverScreen = function () {
        document.body.innerHTML = "";
        this.currentscreen = new GameOverScreen(this);
        music.stop();
    };
    Game.prototype.showWinScreen = function () {
        document.body.innerHTML = "";
        this.currentscreen = new WinScreen(this);
        music.stop();
        winMusic.play();
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var GameOverScreen = (function () {
    function GameOverScreen(g) {
        var _this = this;
        this.game = g;
        this.div = document.createElement("splash");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () { return _this.splashClicked(); });
        this.div.innerHTML = "I'm giving her all she's got, captain!";
    }
    GameOverScreen.prototype.update = function () {
    };
    GameOverScreen.prototype.splashClicked = function () {
        this.game.showPlayScreen();
    };
    return GameOverScreen;
}());
var Phaserbeam = (function (_super) {
    __extends(Phaserbeam, _super);
    function Phaserbeam(g) {
        var _this = _super.call(this) || this;
        _this.game = g;
        _this.div = document.createElement("phaserbeam");
        document.body.appendChild(_this.div);
        _this.x = _this.game.currentscreen.spaceship.x + 42;
        _this.y = _this.game.currentscreen.spaceship.y - 120;
        return _this;
    }
    Phaserbeam.prototype.removePhaserbeam = function () {
        this.div.remove();
        this.game.currentscreen.spaceship.fired = false;
    };
    Phaserbeam.prototype.update = function () {
        this.y -= 10;
        if (this.getRectangle().bottom < -200) {
            this.removePhaserbeam();
        }
        _super.prototype.update.call(this);
    };
    return Phaserbeam;
}(GameObject));
var PlayScreen = (function () {
    function PlayScreen(g) {
        this.astroids = [];
        this.gamefix = 0;
        this.score = 0;
        this.game = g;
        this.spaceship = new Spaceship(87, 83, 65, 68, 32, this.game);
        for (var i = 0; i < 10; i++) {
            this.astroids.push(new Astroid(this.game));
        }
    }
    PlayScreen.prototype.update = function () {
        for (var a = this.astroids.length - 1; a >= 0; a--) {
            if (this.checkCollision(this.astroids[a].getRectangle(), this.spaceship.getRectangle())) {
                if (this.gamefix <= 10) {
                    this.gamefix++;
                }
                else {
                    allShesGot.play();
                    this.game.showGameoverScreen();
                }
                break;
            }
            if (this.spaceship.fired == true) {
                if (this.checkCollision(this.astroids[a].getRectangle(), this.phaserbeam.getRectangle())) {
                    explosion.play();
                    this.astroids[a].removeAstroid();
                    this.score++;
                    console.log(this.score);
                    break;
                }
            }
            if (this.astroids[a].getRectangle().left < 0 ||
                this.astroids[a].getRectangle().right > window.innerWidth ||
                this.astroids[a].getRectangle().bottom > (window.innerHeight + 50)) {
                this.astroids[a].removeAstroid();
                this.astroids.push(new Astroid(this.game));
                break;
            }
            this.astroids[a].update();
        }
        this.spaceship.update();
        if (this.spaceship.fired == true) {
            this.phaserbeam.update();
        }
        if (this.score == 10) {
            winMusic.play();
            this.game.showWinScreen();
        }
    };
    PlayScreen.prototype.firePhasers = function () {
        if (this.spaceship.fired == false) {
            this.spaceship.fired = true;
            phaserFire.play();
            this.phaserbeam = new Phaserbeam(this.game);
        }
    };
    PlayScreen.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    PlayScreen.prototype.removeFromArray = function (removedMe) {
        var i = this.astroids.indexOf(removedMe);
        this.astroids.splice(i, 1);
    };
    return PlayScreen;
}());
var Spaceship = (function (_super) {
    __extends(Spaceship, _super);
    function Spaceship(up, down, left, right, space, g) {
        var _this = _super.call(this) || this;
        _this.downSpeed = 0;
        _this.upSpeed = 0;
        _this.leftSpeed = 0;
        _this.rightSpeed = 0;
        _this.fired = false;
        _this.game = g;
        _this.div = document.createElement("spaceship");
        document.body.appendChild(_this.div);
        _this.upkey = up;
        _this.downkey = down;
        _this.leftkey = left;
        _this.rightkey = right;
        _this.spacekey = space;
        _this.x = (window.innerWidth / 2);
        _this.y = (window.innerHeight / 2);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        return _this;
    }
    Spaceship.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
            case this.leftkey:
                this.leftSpeed = 5;
                break;
            case this.rightkey:
                this.rightSpeed = 5;
                break;
            case this.spacekey:
                this.game.currentscreen.firePhasers();
                break;
        }
    };
    Spaceship.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
            case this.leftkey:
                this.leftSpeed = 0;
                break;
            case this.rightkey:
                this.rightSpeed = 0;
                break;
        }
    };
    Spaceship.prototype.update = function () {
        var newY = this.y - this.upSpeed + this.downSpeed;
        var newX = this.x - this.leftSpeed + this.rightSpeed;
        if (newY > 0 && newY + 100 < window.innerHeight) {
            this.y = newY;
        }
        if (newX > 0 && newX + 100 < window.innerWidth)
            this.x = newX;
        _super.prototype.update.call(this);
    };
    return Spaceship;
}(GameObject));
var StartScreen = (function () {
    function StartScreen(g) {
        var _this = this;
        this.game = g;
        this.div = document.createElement("splash");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () { return _this.splashClicked(); });
        this.div.innerHTML = "Shoot and evade all astroids" + "<br><br><br>" + "ENGAGE";
    }
    StartScreen.prototype.update = function () {
    };
    StartScreen.prototype.splashClicked = function () {
        engage.play();
        this.game.showPlayScreen();
    };
    return StartScreen;
}());
var WinScreen = (function () {
    function WinScreen(g) {
        var _this = this;
        this.game = g;
        this.div = document.createElement("splash");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () { return _this.splashClicked(); });
        this.div.innerHTML = "You won!, enjoy some music";
    }
    WinScreen.prototype.update = function () {
    };
    WinScreen.prototype.splashClicked = function () {
        this.game.showPlayScreen();
    };
    return WinScreen;
}());
//# sourceMappingURL=main.js.map