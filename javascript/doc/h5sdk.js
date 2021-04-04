! function(e, t, o) {
	"function" == typeof define && (define.amd || define.cmd) ? define(o.bind({}, e)) : t[e] = o(e)
}("h5sdk", window, function(e) {
	function t(e) {
		var t = [];
		for (var o in e) t.push(o + ":" + e[o]);
		return t.join(";")
	}

	function o(e) {
		if (window.mqq && mqq.tenpay && mqq.tenpay.pay) return void("undefined" != typeof e && e({
			ret: 0
		}));
		if (a.ua.QQ) {
			var t = document.createElement("script");
			t.onload = function() {
				document.body.removeChild(t), "undefined" != typeof e && e({
					ret: 0
				})
			}, t.onerror = function() {
				document.body.removeChild(t), "undefined" != typeof e && e({
					ret: -1
				})
			}, t.src = "//pub.idqqimg.com/qqmobile/qqapi.wk.js?_bid=152", document.body.appendChild(t)
		}
	}

	function n(e, t) {
		return JSON.stringify({
			action: e,
			data: t
		})
	}
	var i = function() {},
		a = {
			uuid: function(e, t) {
				var o, n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
					i = n,
					a = [];
				if (t = t || i.length, e)
					for (o = 0; o < e; o++) a[o] = i[0 | Math.random() * t];
				else {
					var r;
					for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", o = 0; o < 36; o++) a[o] || (r = 0 |
						16 * Math.random(), a[o] = i[19 == o ? 3 & r | 8 : r])
				}
				return a.join("")
			},
			max: function(e, t) {
				return e > t ? e : t >= e ? t : void 0
			},
			extend: function(e) {
				for (var t = 1; t <= arguments.length; t++)
					for (var o in arguments[t]) e[o] = arguments[t][o];
				return e
			},
			each: function() {},
			emptyFunc: function() {},
			serializeParam: function(e) {
				if (!e) return "";
				var t = [];
				for (var o in e) "undefined" == typeof e[o] && null == e[o] || t.push(encodeURIComponent(o) +
					"=" + encodeURIComponent(e[o]));
				return t.join("&")
			},
			report: function(e, t) {
				e = e || {};
				var o = e.resultInfo || {},
					n = "midas_h5sdk.api." + e.iformat;
				try {
					delete e.iformat, delete e.resultInfo
				} catch (i) {}
				var r = {
					6: 10,
					7: 0,
					8: a.serializeParam(o),
					31: "h5sdkapi",
					21: n,
					36: location.href,
					50: navigator.userAgent,
					38: (new Date).getTime()
				};
				a.extend(r, e), t = t || {};
				var s = [];
				for (var d in r) s.push(d + "=" + encodeURIComponent(r[d]));
				var c = [];
				for (var d in t) c.push("&" + d + "=" + encodeURIComponent(t[d]));
				var m = "https://szmg.qq.com/cgi-bin/log_data.fcg",
					l = new XMLHttpRequest;
				l.timeout = 1e4, l.onerror = function() {}, l.open("POST", m, !0), l.setRequestHeader(
					"Content-type", "application/x-www-form-urlencoded"), l.send(
					"offer_id=15499&num=1&record0=" + encodeURIComponent(s.join("|")) + c.join("") +
					"&rr=" + Math.random())
			},
			ua: function() {
				var e, t = {},
					o = navigator.userAgent;
				try {
					e = !/wxwork/.test(o) && / MicroMessenger\/([0-9\.]+)/i.exec(o), e && (t.weixin =
							parseFloat(e[1], 10), t.weixinVersion = e[1]), t.QQ = parseFloat((/ QQ\/([0-9\.]+)/i
							.exec(o) || [])[1]) || !1, t.wxwork = /wxwork/.test(o), o.indexOf("Android") > -1 &&
						(t.android = parseFloat(o.slice(o.indexOf("Android") + 8))), t.iPod = o.indexOf(
						"iPod") > -1, t.iPad = o.indexOf("iPad") > -1, t.iPhone = o.indexOf("iPhone") > -1, (t
							.iPad || t.iPhone || t.iPod) && (t.iOS = parseInt((/OS (\d+)[_|.]/.exec(o) || [])[
							1], 10) || !0);
					var n = !a && o.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
						i = n || o.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
					i && t.iOS && (t.safari = !0), n && (t.webview = !0);
					var a = o.match(/Chrome\/([\d.]+)/) || o.match(/CriOS\/([\d.]+)/) || [];
					t.chrome = parseFloat(a[1]) || !1, t.wp = o.indexOf("Windows Phone") > -1
				} catch (r) {}
				return t
			}()
		};
	o();
	var r = {
			mqqpay: function(e, t, o, n, i) {
				function r(e, t) {
					if (e && t) {
						for (var o = e.split("."), n = t.split("."), i = Math.min(o.length, n.length), a = 0,
								r = 0; a < i && 0 == (r = parseInt(o[a]) - parseInt(n[a]));) a++;
						return r = 0 != r ? r : o.length - n.length
					}
					return -1
				}

				function s(e) {
					a.report({
						iformat: "qqwallet.launch." + e
					})
				}
				if (a.report({
						iformat: "mqqpay.params",
						resultInfo: {
							isWapPay: e,
							schema: t
						}
					}), t = t || "", e) {
					if (a.ua.weixin && r(a.ua.weixinVersion, "6.5.6") >= 0) {
						var d = function() {
							setTimeout(function() {
								WeixinJSBridge.invoke("launchApplication", {
									schemeUrl: t
								}, function(e) {
									if (a.report({
											iformat: "mqqpay.native.callback",
											resultInfo: e
										}), e && "launchApplication:ok" !== e.err_msg)
										if (t && "string" == typeof t) {
											var o;
											if (a.ua.iOS) {
												o = "mqqapi";
												var n = {
													appID: o,
													parameter: t.split("://")[1]
												};
												WeixinJSBridge.invoke("launchApplication",
													n,
													function(e) {
														s(e && "launchApplication:ok" !==
															e.err_msg ? "success" :
															"fail")
													})
											} else s("success"), location.href = t
										} else s("fail");
									else s("success")
								})
							}, 500)
						};
						window.WeixinJSBridge ? d() : document.addEventListener("WeixinJSBridgeReady",
						function() {
							d()
						})
					} else a.ua.weixin ? setTimeout(function() {
						location.href = t
					}, 500) : location.href = t;
					"onPayEnd" === o && l && l.methods && l.methods.destroy && l.methods.destroy()
				} else {
					var c;
					try {
						top.document.domain;
						c = top != window && top.mqq ? top.mqq : window.mqq
					} catch (m) {
						c = window.mqq
					}
					if (c) {
						var h = o;
						c && c.tenpay && c.tenpay.pay && c.tenpay.pay({
							tokenId: t,
							pubAcc: "",
							pubAccHint: "",
							appInfo: ""
						}, function(e) {
							if ("onPayEnd" === h) {
								var t = 0 === e.resultCode;
								"function" == typeof i && i({
									iformat: "qqwallet.native." + (t ? "success" : "fail"),
									7: t ? 0 : e.resultCode
								});
								var o = l.methods[h];
								"function" == typeof o && (n.qqwalletNativePayEnd = (new Date)
									.getTime(), o(t ? 1 : -1, e.err_msg, n)), l && l.methods && l
									.methods.destroy && l.methods.destroy()
							} else l.remote.tenpayCallback && l.remote.tenpayCallback({
								resultCode: e.resultCode,
								resultMsg: e.retmsg
							})
						})
					} else a.report({
						7: -1,
						iformat: "qqwallet.mqq.not.load"
					}), l.remote.tenpayCallback && l.remote.tenpayCallback({
						resultCode: -1,
						resultMsg: "mqq api not load"
					})
				}
			},
			mqqsign: function(e, t) {
				if (a.report({
						iformat: "mqqsign.params",
						resultInfo: {
							isWapPay: e,
							schema: t
						}
					}), e) location.href = t;
				else {
					var o;
					try {
						top.document.domain;
						o = top != window && top.mqq ? top.mqq : window.mqq
					} catch (n) {
						o = window.mqq
					}
					o && o.ui && o.ui.openUrl({
						url: t,
						target: 1
					})
				}
				h5sdk.directPayOpened && l && l.methods && l.methods.destroy && l.methods.destroy()
			},
			weixinpay: function(e, t, o, n, i) {
				if (a.report({
						iformat: "weixinpay.params",
						resultInfo: {
							isWapPay: e,
							schema: t
						}
					}), e) location.href = t, "onPayEnd" === o && l && l.methods && l.methods.destroy && l
					.methods.destroy();
				else {
					void 0;
					var r = function(e) {
						WeixinJSBridge.invoke("getBrandWCPayRequest", {
							appId: t.wx_appid,
							timeStamp: t.wx_time,
							nonceStr: t.wx_noncenum,
							"package": t.wx_package,
							signType: t.wx_signtype || "SHA1",
							paySign: t.wx_sign
						}, function(t) {
							a.report({
								iformat: "weixinpay.native.callback",
								resultInfo: t
							});
							var o;
							switch (t.err_msg) {
								case "get_brand_wcpay_request:ok":
									o = 0;
									break;
								case "get_brand_wcpay_request:cancel":
									o = 1;
									break;
								default:
									o = -1
							}
							if ("function" == typeof i && i({
									iformat: 0 === o ? "wechat.native.success" :
										"wechat.native.fail"
								}), "onPayEnd" === e) {
								var r = 0 == o,
									s = l.methods[e];
								"function" == typeof s && (n.wxNativePayEnd = (new Date).getTime(),
										s(r ? 1 : -1, t.err_msg, n)), l && l.methods && l.methods
									.destroy && l.methods.destroy()
							} else l.remote.wechatCallback && l.remote.wechatCallback({
								resultCode: o,
								response: t
							})
						})
					};
					window.WeixinJSBridge ? r(o) : document.addEventListener("WeixinJSBridgeReady", function() {
						r(o)
					})
				}
			},
			weixinsign: function(e, t) {
				a.report({
						iformat: "weixinsign.params",
						resultInfo: {
							isWapPay: e,
							schema: t
						}
					}), e ? MidasJSBridge && params && MidasJSBridge.call("launchPaySign", params,
					function() {}) : location.href = t, h5sdk.directPayOpened && l && l.methods && l.methods
					.destroy && l.methods.destroy()
			},
			sendSms: function(e) {
				try {
					var t = document.createElement("a");
					t.href = e;
					var o = document.createEvent("UIEvents");
					o.initEvent("click"), t.dispatchEvent(o)
				} catch (n) {}
			},
			callNativePay: function(e, t) {
				function n(t, o) {
					var n;
					1 == t || 2 == t ? n = 0 : 0 == t ? n = 1 : t == -1 && (n = -1), e.methods.onPayEnd && e
						.methods.onPayEnd(n, o)
				}
				void 0;
				var i = {
					offerId: t.appid,
					openId: t.openid,
					openKey: t.openkey,
					sessionId: t.session_id,
					sessionType: t.session_type,
					zoneId: t.zoneid + "" || "1",
					pf: t.pf,
					pfKey: t.pfkey,
					provide_uin: t.provide_uin || ""
				};
				if (window.MidasJSBridge)
					if ("game" == t.type || "recharge" == t.type) {
						var r = a.extend({}, i, {
							saveValue: t.buy_quantity + ""
						});
						MidasJSBridge.call("payGame", r, function(e) {
							n(e.resultCode, e.resultMsg)
						})
					} else "goods" == t.type && (r = a.extend({}, i, {
						goodsTokenUrl: t.goodstokenurl,
						tokenType: "1"
					}), MidasJSBridge.call("payGoods", r, function(e) {
						n(e.resultCode, e.resultMsg)
					}));
				else {
					if (!a.ua.QQ) {
						var s = "can not call native pay";
						throw e.methods.onError && e.methods.onError(1001, s), new Error(s)
					}
					o(function(o) {
						if (!~~o.ret)
							if (window.mqq) {
								if (a.ua.iOS && a.ua.QQ < "6.5.0") return void(e.methods.onPayEnd && e
									.methods.onPayEnd(-1,
										"ios below 6.5.0 not support this api"));
								if ("goods" == t.type) {
									var r = a.extend({}, i, {
										userId: t.openid,
										tokenUrl: t.goodstokenurl
									});
									mqq.invoke("tenpay", "buyGoods", r, function(e) {
										n(e.resultCode, e.resultMsg)
									})
								}
							} else e.methods.onPayEnd && e.methods.onPayEnd(-1, "mqq api load fail")
					})
				}
			}
		},
		s = {
			resize: function() {
				var e = document.createEvent("UIEvents");
				e.initEvent("resize", !0, !0), window.dispatchEvent(e)
			},
			scrollTop: function() {
				a.ua.iOS && l && (l.container.style.top = 0), a.ua.iOS && window.scrollTo(0, 0)
			},
			addScroll: function() {
				window.onscroll = m.scroll.bind(l)
			},
			show: function() {
				l && l.show()
			},
			hide: function() {
				l && l.hide()
			},
			removeScroll: function() {
				window.onscroll = null
			}
		},
		d = function(t, o) {
			var n = (this.isNormalMode = h.MODE.NORMAL & t.mode, this.isNativeMode = h.MODE.NATIVE & t.mode),
				d = {
					https: 1,
					methods: {},
					params: {
						new_api: "1"
					}
				},
				c = this;
			o = o || {}, a.extend(d.params, o), a.extend(d, t), !n && a.extend(d.methods, {
				close: this.destory.bind(this),
				scroll: m.scroll.bind(this)
			}), a.extend(d.methods, r), a.extend(d.methods, s), this.opt = d;
			var u = [],
				p = this.opt.methods;
			for (var f in p) u.push(f);
			this.url = t.sandbox ? "https:" == location.protocol || ~~d.https || "1" == this.opt.params.wx_h5pay ?
				"https://pay.qq.com/h5sdk/index.shtml?debug=1" :
				"http://sandbox.pay.qq.com/h5sdk/index.shtml?debug=1" : (~~d.https,
					"https://pay.qq.com/h5sdk/index.shtml?"), this.url += "&sdkname=" + e, this.url += "&t=" + (
					new Date).getTime(), this.url += "&MidasJSBridge=" + (window.MidasJSBridge ? 1 : 0);
			var y = [];
			~~t.hide_ui && (this.opt.params.hide_ui = 1), this.opt.params.domain = document.domain;
			for (var g in this.opt.params) y.push(g + "=" + encodeURIComponent(this.opt.params[g]));
			y.push("methods=" + encodeURIComponent(u.join("|"))), this.url += "&" + y.join("&"), this.remote = {},
				n ? (this.remote.setBuyInfo = function(e) {
					delete this.setBuyInfo, r.callNativePay(c.opt, e), l = null
				}, setTimeout(function() {
					this.opt.methods.onready && this.opt.methods.onready(), this.opt.methods.onReady && this
						.opt.methods.onReady()
				}.bind(this), 0)) : (this.remote.setBuyInfo = function(e) {
					this.setBuyInfo = i, c.url += "&buy_info=" + encodeURIComponent(JSON.stringify(e)), c
						.createIframe(), c.bindEvent()
				}, setTimeout(function() {
					this.opt.methods.onready && this.opt.methods.onready(), this.opt.methods.onReady && this
						.opt.methods.onReady()
				}.bind(this), 0))
		},
		c = [].slice,
		m = {
			message: function(t) {
				if (l) {
					var o = t.data;
					if ("string" == typeof o && o.indexOf(e) != -1) {
						o = o.replace(new RegExp("^(" + e + ")"), "");
						try {
							o = JSON.parse(o), void 0
						} catch (n) {
							return
						}
						switch (o.action) {
							case "load":
								l && l.frame && l.frame._onPageLoad && l.frame._onPageLoad();
								break;
							case "call":
								o.data && o.data.method && "function" == typeof l.opt.methods[o.data.method] &&
									l.opt.methods[o.data.method].apply(null, o.data.args);
								break;
							case "methods":
								o.data.forEach(function(e) {
									l.remote[e] = function() {
										l.send(l.frame, "call", {
											method: e,
											args: c.call(arguments)
										})
									}
								}), a.report({
									iformat: "remotemethod.added"
								});
								break;
							case "addmethod":
								o.data.forEach(function(e) {
									l.remote[e] = function() {
										l.send(l.frame, "call", {
											method: e,
											args: c.call(arguments)
										})
									}
								});
								break;
							case "removemethod":
								o.data.forEach(function(e) {
									try {
										delete l.remote[e]
									} catch (t) {}
								})
						}
					}
				}
			},
			resize: function() {
				try {
					var t = document.querySelector("#" + e + "_container"),
						o = window.innerWidth,
						n = (document.body.clientWidth, window.innerHeight),
						i = (document.body.clientHeight, document.documentElement.clientHeight),
						r = document.documentElement.clientWidth,
						s = (a.max(document.documentElement.scrollWidth, document.body.scrollWidth), a.max(
							document.documentElement.scrollHeight, document.body.scrollHeight)),
						d = o > r ? o : r,
						c = n > i ? n : i;
					t.style.width = d + "px", t.style.height = c + "px";
					var m = t.querySelector("#" + e + "_mask");
					m.style.height = (s > n ? s : n) + "px", l && l.remote.onResize && l.remote.onResize({
						scrollY: scrollY,
						clientWidth: d,
						clientHeight: c,
						orientation: window.orientation,
						screenWidth: window.screen.width,
						screenHeight: window.screen.height
					})
				} catch (h) {}
			},
			scroll: function() {}
		};
	d.prototype = {
		constructor: d,
		send: function(t, o, i) {
			try {
				t.contentWindow.postMessage(e + n(o, i), "*")
			} catch (a) {
				void 0
			}
		},
		createIframe: function() {
			var o = this.frame = document.createElement("iframe");
			o.id = e + "_frame";
			var n = this,
				i = this.opt.timeout ? this.opt.timeout : 30,
				r = !1;
			this.iframeLoadTimeout = setTimeout(function() {
				n.iframeLoadTimeout = null, l && l.opt.ontimeout && l.opt.ontimeout(), a.report({
					iformat: "iframe.timeout"
				}), n.destory()
			}, 1e3 * i), setTimeout(function() {
				a.report({
					7: r ? "0" : 9999,
					iformat: "iframe.loadstatus"
				})
			}, 5e3), ~~this.opt.hide_ui || (this.slowTimeout = setTimeout(function() {
				r || (n.loading && n.loading.showSlowTips(), n.slowTimeout = setTimeout(
					function() {
						r || (n.loading && n.loading.showTooSlowTips(function() {
							n.destory()
						}), n.frame.style.display = "none")
					}, 1e4))
			}, 5e3)), o._onPageLoad = function() {
				r = !0, n.loading && (n.loading.hide(), n.loading = null), n.frame.style.display = "";
				clearTimeout(n.iframeLoadTimeout), clearTimeout(n.slowTimeout), n.iframeLoadTimeout =
					null, (l && l.opt.onload || a.emptyFunc)(), a.report({
						iformat: "iframe.load"
					})
			}, o.onerror = function() {
				l.destory(), (l && l.opt.onerror || a.emptyFunc)()
			}, o.onabort = function() {
				void 0
			};
			var s = (window.innerWidth, document.body.clientWidth, window.innerHeight),
				d = (document.body.clientHeight, document.documentElement.clientHeight),
				c = (document.documentElement.clientWidth, a.max(document.documentElement.scrollWidth,
					document.body.scrollWidth), a.max(document.documentElement.scrollHeight, document
					.body.scrollHeight)),
				m = s > d ? s : d,
				h = {
					width: "100%",
					height: m + "px",
					border: "none",
					display: "none",
					position: "absolute",
					top: "0",
					left: "0",
					"z-index": "10000"
				};
			o.style.cssText = t({
				width: "100%",
				height: "100%",
				border: "none",
				position: "absolute",
				"z-index": "10001"
			}), o.src = this.url;
			var p = this.container = document.createElement("div");
			p.id = e + "_container";
			var f = {};
			a.extend(f, h), p.style.cssText = t(a.extend(f, {
				top: 0,
				position: (a.ua.iOS, "fixed")
			})), a.extend(h, {
				background: "#000",
				opacity: "0.7"
			}), delete h.display;
			var y = this.mask = document.createElement("div"),
				g = {};
			a.extend(g, h), y.style.cssText = t(a.extend(g, {
					width: "100%",
					height: (c > s ? c : s) + "px"
				})), y.id = e + "_mask", p.appendChild(y), p.appendChild(o), document.querySelector("body")
				.appendChild(p), !~~this.opt.hide_ui && (p.style.display = "block"), ~~this.opt.hide_ui || (
					this.loading = new u(p))
		},
		show: function() {
			this.container.style.display = "block"
		},
		hide: function() {
			this.container.style.display = "none"
		},
		bindEvent: function() {
			window.addEventListener("message", m.message, !1), window.addEventListener("resize", m.resize, !
				1), window.addEventListener("orientationchange", m.resize, !1)
		},
		unbindEvent: function() {
			window.removeEventListener("message", m.message, !1), window.removeEventListener("resize", m
				.resize, !1), window.removeEventListener("orientationchange", m.resize, !1)
		},
		destory: function() {
			if (null === l) throw Error("you cannot destory again!");
			this.iframeLoadTimeout && (clearTimeout(this.iframeLoadTimeout), this.iframeLoadTimeout = null),
				this.slowTimeout && (clearTimeout(this.slowTimeout), this.slowTimeout = null);
			var e = this.opt;
			(e.onbeforedestroy || e.onBeforeDestroy || a.emptyFunc)(), this.unbindEvent(), this
				.destoryIframe(), document.body.removeChild(this.container), l = null, (e.ondestroyed || e
					.onDestroyed || a.emptyFunc)()
		},
		destoryIframe: function() {
			if (this.frame) {
				try {
					this.frame.src = "about:blank", this.frame.parentNode.removeChild(this.frame)
				} catch (e) {}
				this.frame = null
			}
		}
	};
	var l, h = {
		MODE: {
			NORMAL: 4,
			PROXY: 1,
			NATIVE: 2
		},
		PROXYNAME: "proxy",
		init: function(e, t) {
			return !l && (e.mode = e.mode || this.MODE.NORMAL, void(e.mode == this.MODE.NORMAL ? l = new d(
				e, t) : e.mode == this.MODE.PROXY || e.mode == (this.MODE.PROXY | this.MODE
				.NATIVE) ? this.setProxy(e) : e.mode == this.MODE.NATIVE && (l = new d(e, t))))
		},
		pay: function() {
			this.init.apply(this, arguments)
		},
		isInit: function() {
			return null != l
		},
		proxyHandler: null,
		removeProxy: function() {
			window.removeEventListener("message", this.proxyHandler, !0), this.proxyHandler = null
		},
		setProxy: function(t) {
			var o, n = this;
			n.proxyHandler = function(i) {
				function r(e) {
					if (t.hasOwnProperty("watchers")) {
						var o = [].slice.call(arguments, 1);
						t.watchers.hasOwnProperty(e) && t.watchers[e].apply({}, o)
					}
				}

				function s(t) {
					var i = [].slice.call(arguments, 1),
						a = {
							method: t,
							result: i
						};
					try {
						o && o.postMessage(e + n.PROXYNAME + JSON.stringify(a), "*")
					} catch (r) {}
				}
				if ("string" == typeof i.data && i.data.indexOf(e + n.PROXYNAME) != -1) {
					o = i.source;
					var d = i.data.replace(e + n.PROXYNAME, "");
					try {
						d = JSON.parse(d)
					} catch (c) {
						return
					}
					var m = {
						onload: function() {
							r("onload"), s("onload")
						},
						onbeforedestroy: function() {
							r("onbeforedestroy"), s("onbeforedestroy")
						},
						ondestroyed: function() {
							r("ondestroyed"), s("ondestroyed")
						},
						methods: {
							onCanPay: function() {
								r("oncanpay"), r("onCanPay"), s("oncanpay"), s("onCanPay")
							},
							onReady: function() {
								r("onbeforeready"), s("onbeforeready"), n.remote.setBuyInfo(d
									.params), r("onready"), s("onready")
							},
							onPayEnd: function(e, t) {
								r("onPayEnd", e, t), s("onPayEnd", e, t)
							},
							onError: function(e, t) {
								r("onError", e, t), s("onError", e, t)
							}
						}
					};
					d.opt = d.opt || {}, a.extend(m, d.opt), n.init(m, d.extend)
				}
			}, window.addEventListener("message", this.proxyHandler, !0)
		},
		childHandler: null,
		sendParams: function(t, o, n, i) {
			var a = {
				opt: t,
				params: o
			};
			a.extend = i;
			var r = e + this.PROXYNAME;
			try {
				parent.postMessage(r + JSON.stringify(a), "*")
			} catch (s) {
				return
			}
			var d = this;
			this.childHandler = function(t) {
				if ("string" == typeof t.data && t.data.indexOf(e + d.PROXYNAME) != -1) {
					var o = t.data.replace(e + d.PROXYNAME, "");
					try {
						o = JSON.parse(o)
					} catch (t) {
						return
					}
					var i = o.method;
					n[i] && n[i].apply(null, o.result)
				}
			}, window.addEventListener("message", this.childHandler, !0)
		},
		stopConnection: function() {
			window.removeEventListener("message", this.childHandler, !0), this.childHandler = null
		},
		isInIframe: function() {
			return top != window
		},
		show: function() {
			l && l.show()
		},
		hide: function() {
			l && l.hide()
		},
		close: function() {
			l && l.destory()
		},
		addMethod: function(e, t) {
			if (!l) return !1;
			l.opt.methods[e] = t;
			try {
				l.send(l.frame, "addmethod", [e])
			} catch (o) {
				return !1
			}
			return !0
		},
		removeMethod: function(e) {
			if (!l) return !1;
			try {
				"[object Array]" == Object.prototype.toString.call(e) ? (l.send(l.frame, "removemethod", e),
					e.forEach(function(e) {
						delete l.opt.methods[e]
					})) : (delete l.opt.methods[e], l.send(l.frame, "removemethod", [e]))
			} catch (t) {
				return !1
			}
			return !0
		},
		directPay: function(t, o) {
			if (!h.directPayOpened) {
				h.directPayOpened = !0;
				var i = a.uuid() + "-" + (new Date).getTime(),
					s = {
						directPayReport: function(e) {
							e = e || {}, a.extend(e, {
								3: o.openid,
								24: o.appid,
								29: i
							}), a.report(e)
						},
						load: function() {
							s.directPayReport({
								iformat: "iframe.load"
							})
						},
						loadStatus: function(e) {
							s.directPayReport({
								7: e ? "0" : 9999,
								iformat: "iframe.loadstatus"
							})
						},
						timeout: function() {
							s.directPayReport({
								iformat: "iframe.timeout"
							})
						}
					},
					d = {
						create: function(t, o) {
							this.opt = t || {}, this.params = o || {}, a.extend(this.params, {
								transactionid: i
							}), this.params.startTime = (new Date).getTime(), l = {
								destory: this.destroy.bind(this)
							}, l.methods = this.opt.methods, a.extend(l.methods, r, {
								destroy: this.destroy.bind(this)
							});
							var n = this.opt.timeout || 30;
							this.methods = this.opt.methods, this.$iframe = document.createElement(
									"iframe"), this.$iframe.src = "about:blank", this.$iframe.id = e +
								"_frame", this.$iframe.style.display = "none", this.isLoad = !1, this
								.iframeLoadTimeout = setTimeout(this.events.ontimeout.bind(this), 1e3 *
									n), this.$iframe.onload = this.events.onload.bind(this), this
								.$iframe.src = this.generateUrl(), document.body.appendChild(this
									.$iframe), this.bindEvent()
						},
						generateUrl: function() {
							var e;
							e = this.opt.sandbox ? "https:" == location.protocol || 1 == parseInt(this
									.params.wx_h5pay, 10) ?
								"https://pay.qq.com/h5sdk/direct_pay.shtml?debug=1&" :
								"http://sandbox.pay.qq.com/h5sdk/direct_pay.shtml?debug=1&" :
								"https://pay.qq.com/h5sdk/direct_pay.shtml?";
							var t = a.serializeParam(this.params);
							return e + t + "&isDirectPay=1" + (window.MidasJSBridge ?
								"&MidasJSBridge=1" : "")
						},
						events: {
							onload: function() {
								this.isLoad = !0, clearTimeout(this.iframeLoadTimeout), this
									.iframeLoadTimeout = null;
								var e = a.ua.android <= "2.3" ? 1e3 : 0;
								setTimeout(this.sendMessage.bind(this), e), s.load()
							},
							ontimeout: function() {
								this.iframeLoadTimeout = null, "function" == typeof this.opt
									.ontimeout && this.opt.ontimeout(), this.destroy(), s.timeout()
							}
						},
						sendMessage: function() {
							var t = [];
							for (var o in this.methods) t.push(o);
							try {
								this.$iframe.contentWindow.postMessage(e + n("methods", t), "*")
							} catch (i) {
								void 0
							}
						},
						onMessage: function(t) {
							var o = t.data;
							if ("string" == typeof o && o.indexOf(e) != -1) {
								o = o.replace(new RegExp("^(" + e + ")"), "");
								try {
									if (o = JSON.parse(o), void 0, "call" === o.action && "function" ==
										typeof l.methods[o.data.method]) {
										var n = o.data.args || [];
										try {
											s.directPayReport({
												iformat: "directpay.message",
												resultInfo: {
													methods: o.data.method || "",
													args: JSON.stringify(n)
												}
											})
										} catch (i) {} ["mqqpay", "weixinpay"].indexOf(o.data.method) >
											-1 && (n = n.concat([s.directPayReport])), l.methods[o.data
												.method].apply(null, (o.data.args || []).concat([s
												.directPayReport
											]))
									}
								} catch (i) {
									return
								}
							}
						},
						bindEvent: function() {
							window.addEventListener("message", this.onMessage, !1)
						},
						unbindEvent: function() {
							window.removeEventListener("message", this.onMessage, !1)
						},
						destroy: function() {
							l && (this.iframeLoadTimeout && (clearTimeout(this.iframeLoadTimeout), this
									.iframeLoadTimeout = null), l = void 0, this.unbindEvent(),
								setTimeout(this.destroyIframe.bind(this), 1e3))
						},
						destroyIframe: function() {
							if (h.directPayOpened = !1, this.$iframe) {
								try {
									this.$iframe.src = "about:blank", this.$iframe.parentNode
										.removeChild(this.$iframe)
								} catch (e) {}
								this.$iframe = null
							}
						}
					};
				d.create(t, a.extend(o, {
					r: Math.random()
				})), setTimeout(function() {
					s.loadStatus(d.isLoad)
				}, 5e3)
			}
		}
	};
	Object.defineProperty(h, "remote", {
			get: function() {
				return !!l && l.remote
			}
		}),
		function(e) {
			var t;
			document.createStyleSheet ? (t = document.createStyleSheet(), t.cssText = e) : (t = document
				.createElement("style"), t.type = "text/css", t.innerHTML = e, document.getElementsByTagName(
					"head")[0].appendChild(t))
		}([".fpm-loading {padding:0;margin:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-family:inherit;font-size:100%;vertical-align:baseline;width:100%;box-sizing:border-box;text-align:center;position:fixed;left:0;top:50%;transform:translateY(-50%);z-index:99999}",
			".fpm-loading-dot {background:#9e9e9e;display:inline-block;*display:inline;*zoom:1;width:12px;height:12px;border-radius:12px;margin-right:15px;-webkit-animation-name:fpm-loadingAnim;animation-name:fpm-loadingAnim;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-delay:0.3s;animation-delay:0.3s;}",
			".fpm-loading-dot:first-child {-webkit-animation-delay:0s;animation-delay:0s;}",
			".fpm-loading-dot:last-child {-webkit-animation-delay:0.6s;animation-delay:0.6s;margin-right:0;}",
			"@-webkit-keyframes fpm-loadingAnim {0% {opacity:0.5;}100% {opacity:1;}}",
			"@keyframes fpm-loadingAnim {0% {opacity:0.5;}100% {opacity:1;}}",
			".fpm-loading-text-area {margin-top:20px;text-align:center;}",
			".fpm-loading-txt-b,.fpm-loading-txt-w {display:inline-block;margin:0;text-align:left;font-size:15px;}",
			".fpm-loading-txt-b {color:#808080;}", ".fpm-loading-txt-w {color:#fff;}",
			".fpm-loading-btn {position:relative;display:block;margin:20px auto 0;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:#fff;padding:0;width:8em;height:2.5em;line-height:2.5em;font-size:14px;border:0;background-color:transparent;}",
			".fpm-loading-btn:after {position:absolute;content:'';left:0;top:0;width:200%;height:200%;border:1px solid #fff;border-radius:8px;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(0.5);transform:scale(0.5);}",
			".fpm-loading-btn:active {opacity:.8;}"
		].join("\r\n"));
	var u = function(e) {
		e = e || document.body, this.container = e;
		var t = this.section = document.createElement("div");
		t.className = "fpm-loading", t.innerHTML = u.loadingHtml, e.appendChild(t)
	};
	return u.loadingHtml =
		'<div class="fpm-loading-dots"><i class="fpm-loading-dot"></i><i class="fpm-loading-dot"></i><i class="fpm-loading-dot"></i></div>',
		u.slowTipsHtml = '<div class="fpm-loading-text-area"><p class="fpm-loading-txt-w">努力加载中，请稍候</p></div>', u
		.TooSlowTipsHtml =
		'<div class="fpm-loading-text-area"><p class="fpm-loading-txt-w">当前网络状态不佳，请您继续等待或取消重试</p><button class="fpm-loading-btn">取消</button></div>',
		u.prototype = {
			hide: function() {
				this.section && (this.container.removeChild(this.section), this.section = null)
			},
			showSlowTips: function() {
				this.section && (this.section.innerHTML = u.loadingHtml + u.slowTipsHtml)
			},
			showTooSlowTips: function(e) {
				this.section && !this.isSlowTipsShowed && (this.section.innerHTML = u.loadingHtml + u
					.TooSlowTipsHtml, this.section.addEventListener("click", function(t) {
						"BUTTON" === t.target.tagName && e()
					}), this.isTooSlowTipsShowed = !0)
			}
		}, h
}); //8590da4d494bbaa820d7104beaf4ad8d
