(window.webpackJsonp = window.webpackJsonp || []).push([
	[40], {
		"/vXk": function(e, n, a) {
			"use strict";
			var l = {
				kind: "Fragment",
				name: "Header_userInfo",
				type: "User",
				metadata: null,
				argumentDefinitions: [],
				selections: [{
					kind: "LinkedField",
					alias: null,
					name: "discord",
					storageKey: null,
					args: null,
					concreteType: "UserInfoDiscord",
					plural: !1,
					selections: [{
						kind: "ScalarField",
						alias: null,
						name: "username",
						args: null,
						storageKey: null
					}, {
						kind: "ScalarField",
						alias: null,
						name: "discriminator",
						args: null,
						storageKey: null
					}, {
						kind: "LinkedField",
						alias: null,
						name: "avatar",
						storageKey: null,
						args: null,
						concreteType: "DiscordAvatar",
						plural: !1,
						selections: [{
							kind: "ScalarField",
							alias: null,
							name: "url",
							args: null,
							storageKey: null
						}]
					}]
				},],
				hash: "eizQCoZ-zF3-woGNXWyr6gL1CAoqeiLa"
			};
			e.exports = l
		},
		"3Mmi": function(e, n, a) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/poop", function() {
				return a("dmPs")
			}])
		},
		"4Us4": function(e, n, a) {
			"use strict";
			var l = a("wx14"),
				r = a("ODXe"),
				t = a("Ff2n"),
				s = a("q1tI"),
				i = a.n(s),
				o = a("qKvR"),
				c = a("EGzX"),
				u = a("S/po"),
				d = a("XPqx"),
				p = (i.a.createElement, {
					padding: "12px 24px",
					border: "1px solid",
					backgroundColor: "transparent",
					cursor: "pointer",
					outline: "none",
					"&:disabled": {
						opacity: .4,
						cursor: "default"
					}
				}),
				g = {
					rounded: {
						borderRadius: 6
					},
					circular: {
						borderRadius: 50,
						padding: "8px 16px"
					}
				};
			n.a = function(e) {
				var n = e.active,
					a = e.onClick,
					s = e.styles,
					i = void 0 === s ? {} : s,
					j = e.hoverStyles,
					m = void 0 === j ? {} : j,
					x = e.children,
					b = e.type,
					f = void 0 === b ? "rounded" : b,
					y = Object(t.a)(e, ["active", "onClick", "styles", "hoverStyles", "children", "type"]),
					v = Object(u.c)(),
					O = Object(r.a)(v, 2),
					k = O[0],
					h = O[1],
					S = Object(d.a)(k || n, i, m);
				return Object(o.jsx)(c.a.button, Object(l.a)({}, h, {
					css: [p, g[f]],
					style: S,
					onClick: a,
					type: "button"
				}, y), x)
			}
		},
		Br0y: function(e, n, a) {
			"use strict";
			var l, r = a("q1tI"),
				t = a.n(r),
				s = a("qKvR"),
				i = a("Ku+5"),
				o = a("IP2g"),
				c = a("8tEE");
			t.a.createElement;
			n.a = Object(i.createFragmentContainer)((function(e), {
				userInfo: void 0 !== l ? l : l = a("/vXk")
			})
		},
		OohV: function(e, n, a) {
			"use strict";
			var l = function() {
				var e = {
						kind: "ScalarField",
						alias: null,
						name: "originalID",
						args: null,
						storageKey: null
					},
					l = {
						kind: "ScalarField",
						alias: null,
						name: "id",
						args: null,
						storageKey: null
					};
				return {
					kind: "Request",
					operation: {
						kind: "Operation",
						name: "profileQuery",
						argumentDefinitions: [],
						selections: [{
							kind: "LinkedField",
							alias: null,
							name: "me",
							storageKey: null,
							args: null,
							concreteType: "User",
							plural: !1,
							selections: [e, {
								kind: "LinkedField",
								alias: null,
								name: "discord",
								storageKey: null,
								args: null,
								concreteType: "UserInfoDiscord",
								plural: !1,
								selections: [{
									kind: "ScalarField",
									alias: null,
									name: "username",
									args: null,
									storageKey: null
								}, {
									kind: "ScalarField",
									alias: null,
									name: "discriminator",
									args: null,
									storageKey: null
								}, {
									kind: "LinkedField",
									alias: null,
									name: "avatar",
									storageKey: null,
									args: null,
									concreteType: "DiscordAvatar",
									plural: !1,
									selections: [{
										kind: "ScalarField",
										alias: null,
										name: "url",
										args: null,
										storageKey: null
									}, l]
								}]
							}, l]
						}]
					},params: {
						operationKind: "query",
						name: "profileQuery",
						id: null,
						text: "query profileQuery {\n  me {\n    originalID\n    ...Header_userInfo\n      id\n  }\n}\n\nfragment Header_userInfo on User {\n  discord {\n    username\n    discriminator\n    avatar {\n      url\n      id\n    }\n  }\n  }\n}\n",
						metadata: {}
					}
				}
			}();
			l.hash = "eizQCoZ-zF3-woGNXWyr6gL1CAoqeiLa", e.exports = l
		},
		dmPs: function(e, n, a) {
			"use strict";
			a.r(n);
			var l, r = a("q1tI"),
				t = a.n(r),
				s = a("qKvR"),
				i = a("Ku+5"),
				o = a("IP2g"),
				c = a("wHSu"),
				u = a("P+EW"),
				d = a("Br0y"),
				p = a("3LF9"),
				g = a("nME3"),
				j = a("PcYu"),
				m = a("4Us4"),
				x = a("dOW+"),
				b = a("6Bx5"),
				f = a("MfDB"),
				y = a("0QHm"),
				v = a("N7W6"),
				O = a("o2qr"),
				k = a("x9ul"),
				h = (t.a.createElement, function() {
					return Object(s.jsx)(u.a, null, Object(s.jsx)(i.QueryRenderer, {
						environment: p.a,
						query: void 0 !== l ? l : l = a("OohV"),
						render: function(e) {
							var n, a = e.props;
							if (!a) return Object(s.jsx)(g.a, {
								page: !0
							});
							var l = a.me;
							return Object(s.jsx)(t.a.Fragment, null, Object(s.jsx)(d.a, {
								userInfo: l
							}), Object(s.jsx)(x.a, null, Object(s.jsx)(b.a, null, Object(s.jsx)("div", {
								css: {
									paddingLeft: 25,
									paddingBottom: 30,
									paddingRight: 10,
									"@media(max-width:600px)": {
										padding: "0px 24px"
									}
								}
							})
				});
			n.default = h
		}
	},
	[
		["3Mmi", 1, 2, 5, 12, 0, 3, 4, 7, 11, 31]
	]
]);