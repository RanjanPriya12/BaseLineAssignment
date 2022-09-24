(function (t) {
  function a(a) {
    for (
      var i, p, r = a[0], l = a[1], u = a[2], c = 0, d = [];
      c < r.length;
      c++
    )
      (p = r[c]),
        Object.prototype.hasOwnProperty.call(n, p) && n[p] && d.push(n[p][0]),
        (n[p] = 0);
    for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
    s && s(a);
    while (d.length) d.shift()();
    return e.push.apply(e, u || []), o();
  }
  function o() {
    for (var t, a = 0; a < e.length; a++) {
      for (var o = e[a], i = !0, r = 1; r < o.length; r++) {
        var l = o[r];
        0 !== n[l] && (i = !1);
      }
      i && (e.splice(a--, 1), (t = p((p.s = o[0]))));
    }
    return t;
  }
  var i = {},
    n = { app: 0 },
    e = [];
  function p(a) {
    if (i[a]) return i[a].exports;
    var o = (i[a] = { i: a, l: !1, exports: {} });
    return t[a].call(o.exports, o, o.exports, p), (o.l = !0), o.exports;
  }
  (p.m = t),
    (p.c = i),
    (p.d = function (t, a, o) {
      p.o(t, a) || Object.defineProperty(t, a, { enumerable: !0, get: o });
    }),
    (p.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (p.t = function (t, a) {
      if ((1 & a && (t = p(t)), 8 & a)) return t;
      if (4 & a && "object" === typeof t && t && t.__esModule) return t;
      var o = Object.create(null);
      if (
        (p.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: t }),
        2 & a && "string" != typeof t)
      )
        for (var i in t)
          p.d(
            o,
            i,
            function (a) {
              return t[a];
            }.bind(null, i)
          );
      return o;
    }),
    (p.n = function (t) {
      var a =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return p.d(a, "a", a), a;
    }),
    (p.o = function (t, a) {
      return Object.prototype.hasOwnProperty.call(t, a);
    }),
    (p.p = "/");
  var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = r.push.bind(r);
  (r.push = a), (r = r.slice());
  for (var u = 0; u < r.length; u++) a(r[u]);
  var s = l;
  e.push([0, "chunk-vendors"]), o();
})({
  0: function (t, a, o) {
    t.exports = o("56d7");
  },
  "01d7": function (t, a, o) {
    t.exports = o.p + "img/sunny.ef428e2d.svg";
  },
  "034f": function (t, a, o) {
    "use strict";
    o("85ec");
  },
  "16cd": function (t, a, o) {},
  "1d8c": function (t, a, o) {
    "use strict";
    o("f900");
  },
  2512: function (t, a, o) {
    "use strict";
    o("16cd");
  },
  "2f4c": function (t, a, o) {},
  "56d7": function (t, a, o) {
    "use strict";
    o.r(a);
    o("e260"), o("e6cf"), o("cca6"), o("a79d");
    var i,
      n = o("2b0e"),
      e = function () {
        var t = this,
          a = t.$createElement,
          o = t._self._c || a;
        return o("div", { attrs: { id: "app" } }, [o("Home")], 1);
      },
      p = [],
      r = function () {
        var t = this,
          a = t.$createElement,
          o = t._self._c || a;
        return o(
          "div",
          [
            o("loading", {
              attrs: {
                active: t.isLoading,
                "can-cancel": !0,
                "on-cancel": t.onCancel,
                "is-full-page": t.fullPage,
                loader: "bars",
                height: "200",
                width: "200",
                color: "#00a6fa",
              },
              on: {
                "update:active": function (a) {
                  t.isLoading = a;
                },
              },
            }),
            this.show
              ? o(
                  "div",
                  [
                    o("SearchBar"),
                    this.mount ? o("daily-forecast") : t._e(),
                    this.mount ? o("detailed-forecast") : t._e(),
                  ],
                  1
                )
              : t._e(),
          ],
          1
        );
      },
      l = [],
      u = (o("4160"), o("159b"), o("ade3")),
      s = o("9062"),
      c = o.n(s),
      d =
        (o("e40d"),
        function () {
          var t = this,
            a = t.$createElement,
            i = t._self._c || a;
          return i("div", [
            i("div", { staticClass: "SearchContainer" }, [
              i(
                "svg",
                {
                  staticClass: "SearchIcon IconPosition",
                  attrs: { viewBox: "0 0 512 512" },
                },
                [
                  i("path", {
                    attrs: {
                      d: "M256 0C153.755 0 70.573 83.182 70.573 185.426c0 126.888 165.939 313.167 173.004 321.035 6.636 7.391 18.222 7.378 24.846 0 7.065-7.868 173.004-194.147 173.004-321.035C441.425 83.182 358.244 0 256 0zm0 278.719c-51.442 0-93.292-41.851-93.292-93.293S204.559 92.134 256 92.134s93.291 41.851 93.291 93.293-41.85 93.292-93.291 93.292z",
                    },
                  }),
                ]
              ),
              i("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: t.CurrentCity,
                    expression: "CurrentCity",
                  },
                ],
                staticClass: "Searchinput",
                attrs: { type: "text", placeholder: "Search" },
                domProps: { value: t.CurrentCity },
                on: {
                  input: function (a) {
                    a.target.composing || (t.CurrentCity = a.target.value);
                  },
                },
              }),
              i("button", { staticClass: "SearchButton" }, [
                i(
                  "svg",
                  {
                    staticClass: "SearchIcon",
                    attrs: { viewBox: "0 0 511.999 511.999" },
                  },
                  [
                    i("path", {
                      attrs: {
                        d: "M508.874 478.708L360.142 329.976c28.21-34.827 45.191-79.103 45.191-127.309C405.333 90.917 314.416 0 202.666 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c48.206 0 92.482-16.982 127.309-45.191l148.732 148.732c4.167 4.165 10.919 4.165 15.086 0l15.081-15.082c4.165-4.166 4.165-10.92-.001-15.085zM202.667 362.667c-88.229 0-160-71.771-160-160s71.771-160 160-160 160 71.771 160 160-71.771 160-160 160z",
                      },
                    }),
                  ]
                ),
              ]),
              this.showDropdown
                ? i(
                    "section",
                    { staticClass: "DropdownContainer" },
                    t._l(this.FilteredCityList, function (a, n) {
                      return i(
                        "div",
                        {
                          key: a,
                          staticClass: "SearchList",
                          on: {
                            click: function (o) {
                              return t.SelectLocation(a, n);
                            },
                          },
                        },
                        [
                          i("span", [
                            i("span", [i("b", [t._v(t._s(a.city))])]),
                            t._v(", "),
                            i("span", [t._v(" " + t._s(a.state))]),
                          ]),
                          i("div", { staticClass: "flex gap" }, [
                            i("div", { staticClass: "flex column" }, [
                              i("span", [t._v(t._s(a.temp) + " °C ")]),
                              i("span", [t._v(t._s(a.condition))]),
                            ]),
                            "Smoke" == a.condition ||
                            "Clear" == a.condition ||
                            "Haze" == a.condition
                              ? i("img", {
                                  staticClass: "WeatherIcon",
                                  attrs: { src: o("01d7"), alt: "Smoke" },
                                })
                              : t._e(),
                            "Clouds" == a.condition ||
                            "Rain" == a.condition ||
                            "Mist" == a.condition ||
                            "Fog" == a.condition ||
                            "Drizzle" == a.condition
                              ? i("img", {
                                  staticClass: "WeatherIcon",
                                  attrs: { src: o("c192"), alt: "Cloudy" },
                                })
                              : t._e(),
                          ]),
                        ]
                      );
                    }),
                    0
                  )
                : t._e(),
            ]),
          ]);
        }),
      y = [],
      h = (o("4de4"), o("caad"), o("fb6a"), o("2532"), o("bc3a")),
      m = o.n(h),
      g = [
        {
          city: "Delhi",
          lat: "28.6600",
          lng: "77.2300",
          country: "India",
          temp: "IN",
          state: "Delhi",
          condition: "Clear",
          population: "29617000",
          population_proper: "16753235",
        },
        {
          city: "Mumbai",
          lat: "18.9667",
          lng: "72.8333",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "Clear",
          population: "23355000",
          population_proper: "12478447",
        },
        {
          city: "Kolkata",
          lat: "22.5411",
          lng: "88.3378",
          country: "India",
          temp: "IN",
          state: "West Bengal",
          condition: "Clear",
          population: "17560000",
          population_proper: "4496694",
        },
        {
          city: "Bangalore",
          lat: "12.9699",
          lng: "77.5980",
          country: "India",
          temp: "IN",
          state: "Karnataka",
          condition: "Clear",
          population: "13707000",
          population_proper: "8443675",
        },
        {
          city: "Chennai",
          lat: "13.0825",
          lng: "80.2750",
          country: "India",
          temp: "IN",
          state: "Tamil Nadu",
          condition: "Clear",
          population: "11324000",
          population_proper: "6727000",
        },
        {
          city: "Hyderabad",
          lat: "17.3667",
          lng: "78.4667",
          country: "India",
          temp: "IN",
          state: "Telangana",
          condition: "Clear",
          population: "9746000",
          population_proper: "6993262",
        },
        {
          city: "Pune",
          lat: "18.5196",
          lng: "73.8553",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "7764000",
          population_proper: "3124458",
        },
        {
          city: "Ahmadabad",
          lat: "23.0300",
          lng: "72.5800",
          country: "India",
          temp: "IN",
          state: "Gujarat",
          condition: "minor",
          population: "7410000",
          population_proper: "5570585",
        },
        {
          city: "Surat",
          lat: "21.1700",
          lng: "72.8300",
          country: "India",
          temp: "IN",
          state: "Gujarat",
          condition: "",
          population: "5807000",
          population_proper: "4466826",
        },
        {
          city: "Lucknow",
          lat: "26.8470",
          lng: "80.9470",
          country: "India",
          temp: "IN",
          state: "Uttar Pradesh",
          condition: "Clear",
          population: "3382000",
          population_proper: "3382000",
        },
        {
          city: "Jaipur",
          lat: "26.9167",
          lng: "75.8667",
          country: "India",
          temp: "IN",
          state: "Rajasthan",
          condition: "Clear",
          population: "3073350",
          population_proper: "3073350",
        },
        {
          city: "Mirzapur",
          lat: "25.1500",
          lng: "82.5800",
          country: "India",
          temp: "IN",
          state: "Uttar Pradesh",
          condition: "",
          population: "2496970",
          population_proper: "2496970",
        },
        {
          city: "Nagpur",
          lat: "21.1539",
          lng: "79.0831",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "2405665",
          population_proper: "2405665",
        },
        {
          city: "Ghaziabad",
          lat: "28.6667",
          lng: "77.4167",
          country: "India",
          temp: "IN",
          state: "Uttar Pradesh",
          condition: "",
          population: "2381452",
          population_proper: "2381452",
        },
        {
          city: "Indore",
          lat: "22.7206",
          lng: "75.8472",
          country: "India",
          temp: "IN",
          state: "Madhya Pradesh",
          condition: "",
          population: "2201927",
          population_proper: "2201927",
        },
        {
          city: "Vadodara",
          lat: "22.3000",
          lng: "73.2000",
          country: "India",
          temp: "IN",
          state: "Gujarat",
          condition: "",
          population: "2065771",
          population_proper: "2065771",
        },
        {
          city: "Vishakhapatnam",
          lat: "17.7333",
          lng: "83.3167",
          country: "India",
          temp: "IN",
          state: "Andhra Pradesh",
          condition: "",
          population: "2035922",
          population_proper: "2035922",
        },
        {
          city: "Bhopal",
          lat: "23.2500",
          lng: "77.4167",
          country: "India",
          temp: "IN",
          state: "Madhya Pradesh",
          condition: "Clear",
          population: "1883381",
          population_proper: "1883381",
        },
        {
          city: "Chinchvad",
          lat: "18.6278",
          lng: "73.8131",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "1729320",
          population_proper: "1729320",
        },
        {
          city: "Patna",
          lat: "25.6100",
          lng: "85.1414",
          country: "India",
          temp: "IN",
          state: "Bihar",
          condition: "Clear",
          population: "1684222",
          population_proper: "1684222",
        },
        {
          city: "Ludhiana",
          lat: "30.9083",
          lng: "75.8486",
          country: "India",
          temp: "IN",
          state: "Punjab",
          condition: "",
          population: "1649000",
          population_proper: "1545368",
        },
        {
          city: "Āgra",
          lat: "27.1800",
          lng: "78.0200",
          country: "India",
          temp: "IN",
          state: "Uttar Pradesh",
          condition: "",
          population: "1585705",
          population_proper: "1585705",
        },
        {
          city: "Kalyan",
          lat: "19.2502",
          lng: "73.1602",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "1576614",
          population_proper: "1576614",
        },
        {
          city: "Madurai",
          lat: "9.9197",
          lng: "78.1194",
          country: "India",
          temp: "IN",
          state: "Tamil Nadu",
          condition: "minor",
          population: "1561129",
          population_proper: "1561129",
        },
        {
          city: "Jamshedpur",
          lat: "22.8000",
          lng: "86.1833",
          country: "India",
          temp: "IN",
          state: "Jharkhand",
          condition: "",
          population: "1558000",
          population_proper: "1558000",
        },
        {
          city: "Nasik",
          lat: "20.0000",
          lng: "73.7833",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "1486053",
          population_proper: "1486053",
        },
        {
          city: "Faridabad",
          lat: "28.4333",
          lng: "77.3167",
          country: "India",
          temp: "IN",
          state: "Haryana",
          condition: "",
          population: "1394000",
          population_proper: "1394000",
        },
        {
          city: "Aurangabad",
          lat: "19.8800",
          lng: "75.3200",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "1371330",
          population_proper: "1371330",
        },
        {
          city: "Rajkot",
          lat: "22.2969",
          lng: "70.7984",
          country: "India",
          temp: "IN",
          state: "Gujarat",
          condition: "",
          population: "1335397",
          population_proper: "1335397",
        },
        {
          city: "Meerut",
          lat: "28.9900",
          lng: "77.7000",
          country: "India",
          temp: "IN",
          state: "Uttar Pradesh",
          condition: "",
          population: "1305429",
          population_proper: "1305429",
        },
        {
          city: "Jabalpur",
          lat: "23.1667",
          lng: "79.9333",
          country: "India",
          temp: "IN",
          state: "Madhya Pradesh",
          condition: "",
          population: "1267564",
          population_proper: "1267564",
        },
        {
          city: "Thane",
          lat: "19.1800",
          lng: "72.9633",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "1261517",
          population_proper: "1261517",
        },
        {
          city: "Dhanbad",
          lat: "23.7928",
          lng: "86.4350",
          country: "India",
          temp: "IN",
          state: "Jharkhand",
          condition: "",
          population: "1246000",
          population_proper: "219636",
        },
        {
          city: "Allahabad",
          lat: "25.4550",
          lng: "81.8400",
          country: "India",
          temp: "IN",
          state: "Uttar Pradesh",
          condition: "",
          population: "1201000",
          population_proper: "1073438",
        },
        {
          city: "Varanasi",
          lat: "25.3189",
          lng: "83.0128",
          country: "India",
          temp: "IN",
          state: "Uttar Pradesh",
          condition: "",
          population: "1198491",
          population_proper: "1198491",
        },
        {
          city: "Srinagar",
          lat: "34.0911",
          lng: "74.8061",
          country: "India",
          temp: "IN",
          state: "Jammu and Kashmir",
          condition: "Clear",
          population: "1180570",
          population_proper: "1180570",
        },
        {
          city: "Amritsar",
          lat: "31.6167",
          lng: "74.8500",
          country: "India",
          temp: "IN",
          state: "Punjab",
          condition: "",
          population: "1132383",
          population_proper: "1132383",
        },
        {
          city: "Aligarh",
          lat: "27.8800",
          lng: "78.0800",
          country: "India",
          temp: "IN",
          state: "Uttar Pradesh",
          condition: "",
          population: "1131160",
          population_proper: "1131160",
        },
        {
          city: "Bhiwandi",
          lat: "19.3000",
          lng: "73.0667",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "1125898",
          population_proper: "1125898",
        },
        {
          city: "Gwalior",
          lat: "26.2150",
          lng: "78.1931",
          country: "India",
          temp: "IN",
          state: "Madhya Pradesh",
          condition: "",
          population: "1101981",
          population_proper: "1101981",
        },
        {
          city: "Bhilai",
          lat: "21.2167",
          lng: "81.4333",
          country: "India",
          temp: "IN",
          state: "Chhattisgarh",
          condition: "",
          population: "1097000",
          population_proper: "1097000",
        },
        {
          city: "Haora",
          lat: "22.5900",
          lng: "88.3100",
          country: "India",
          temp: "IN",
          state: "West Bengal",
          condition: "",
          population: "1077075",
          population_proper: "1077075",
        },
        {
          city: "Ranchi",
          lat: "23.3556",
          lng: "85.3347",
          country: "India",
          temp: "IN",
          state: "Jharkhand",
          condition: "Clear",
          population: "1073440",
          population_proper: "1073440",
        },
        {
          city: "Chandigarh",
          lat: "30.7353",
          lng: "76.7911",
          country: "India",
          temp: "IN",
          state: "Chandigarh",
          condition: "Clear",
          population: "1026459",
          population_proper: "1026459",
        },
        {
          city: "Mysore",
          lat: "12.3086",
          lng: "76.6531",
          country: "India",
          temp: "IN",
          state: "Karnataka",
          condition: "",
          population: "1014227",
          population_proper: "1014227",
        },
        {
          city: "Raipur",
          lat: "21.2379",
          lng: "81.6337",
          country: "India",
          temp: "IN",
          state: "Chhattisgarh",
          condition: "Clear",
          population: "1010087",
          population_proper: "1010087",
        },
        {
          city: "Kota",
          lat: "25.1800",
          lng: "75.8300",
          country: "India",
          temp: "IN",
          state: "Rajasthan",
          condition: "",
          population: "1001694",
          population_proper: "1001694",
        },
        {
          city: "Bareilly",
          lat: "28.3640",
          lng: "79.4150",
          country: "India",
          temp: "IN",
          state: "Uttar Pradesh",
          condition: "",
          population: "1000000",
          population_proper: "1000000",
        },
        {
          city: "Jodhpur",
          lat: "26.2918",
          lng: "73.0168",
          country: "India",
          temp: "IN",
          state: "Rajasthan",
          condition: "",
          population: "995000",
          population_proper: "921476",
        },
        {
          city: "Coimbatore",
          lat: "11.0000",
          lng: "76.9667",
          country: "India",
          temp: "IN",
          state: "Tamil Nadu",
          condition: "",
          population: "959823",
          population_proper: "959823",
        },
        {
          city: "Dispur",
          lat: "26.1500",
          lng: "91.7700",
          country: "India",
          temp: "IN",
          state: "Assam",
          condition: "Clear",
          population: "957352",
          population_proper: "957352",
        },
        {
          city: "Guwahati",
          lat: "26.1667",
          lng: "91.7667",
          country: "India",
          temp: "IN",
          state: "Assam",
          condition: "",
          population: "957352",
          population_proper: "957352",
        },
        {
          city: "Solapur",
          lat: "17.6833",
          lng: "75.9167",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "951558",
          population_proper: "951558",
        },
        {
          city: "Trichinopoly",
          lat: "10.8269",
          lng: "78.6928",
          country: "India",
          temp: "IN",
          state: "Tamil Nadu",
          condition: "",
          population: "916857",
          population_proper: "916857",
        },
        {
          city: "Hubli",
          lat: "15.3600",
          lng: "75.1250",
          country: "India",
          temp: "IN",
          state: "Karnataka",
          condition: "",
          population: "890000",
          population_proper: "792804",
        },
        {
          city: "Jalandhar",
          lat: "31.3256",
          lng: "75.5792",
          country: "India",
          temp: "IN",
          state: "Punjab",
          condition: "",
          population: "873725",
          population_proper: "873725",
        },
        {
          city: "Bhubaneshwar",
          lat: "20.2644",
          lng: "85.8281",
          country: "India",
          temp: "IN",
          state: "Odisha",
          condition: "Clear",
          population: "837737",
          population_proper: "837737",
        },
        {
          city: "Bhayandar",
          lat: "19.3000",
          lng: "72.8500",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "814655",
          population_proper: "814655",
        },
        {
          city: "Moradabad",
          lat: "28.8418",
          lng: "78.7568",
          country: "India",
          temp: "IN",
          state: "Uttar Pradesh",
          condition: "",
          population: "787000",
          population_proper: "721139",
        },
        {
          city: "Kolhapur",
          lat: "16.7000",
          lng: "74.2333",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "750000",
          population_proper: "561841",
        },
        {
          city: "Thiruvananthapuram",
          lat: "8.5000",
          lng: "76.8997",
          country: "India",
          temp: "IN",
          state: "Kerala",
          condition: "Clear",
          population: "743691",
          population_proper: "743691",
        },
        {
          city: "Saharanpur",
          lat: "29.9640",
          lng: "77.5460",
          country: "India",
          temp: "IN",
          state: "Uttar Pradesh",
          condition: "",
          population: "705478",
          population_proper: "705478",
        },
        {
          city: "Warangal",
          lat: "17.9756",
          lng: "79.6011",
          country: "India",
          temp: "IN",
          state: "Telangana",
          condition: "",
          population: "704570",
          population_proper: "704570",
        },
        {
          city: "Salem",
          lat: "11.6500",
          lng: "78.1667",
          country: "India",
          temp: "IN",
          state: "Tamil Nadu",
          condition: "",
          population: "693236",
          population_proper: "693236",
        },
        {
          city: "Malegaon",
          lat: "20.5500",
          lng: "74.5500",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "690844",
          population_proper: "435362",
        },
        {
          city: "Kochi",
          lat: "9.9667",
          lng: "76.2833",
          country: "India",
          temp: "IN",
          state: "Kerala",
          condition: "",
          population: "677381",
          population_proper: "677381",
        },
        {
          city: "Gorakhpur",
          lat: "26.7611",
          lng: "83.3667",
          country: "India",
          temp: "IN",
          state: "Uttar Pradesh",
          condition: "",
          population: "673446",
          population_proper: "673446",
        },
        {
          city: "Shimoga",
          lat: "13.9304",
          lng: "75.5600",
          country: "India",
          temp: "IN",
          state: "Karnataka",
          condition: "",
          population: "654055",
          population_proper: "319550",
        },
        {
          city: "Tiruppur",
          lat: "11.1075",
          lng: "77.3398",
          country: "India",
          temp: "IN",
          state: "Tamil Nadu",
          condition: "",
          population: "650000",
          population_proper: "444543",
        },
        {
          city: "Guntur",
          lat: "16.3000",
          lng: "80.4500",
          country: "India",
          temp: "IN",
          state: "Andhra Pradesh",
          condition: "",
          population: "647508",
          population_proper: "647508",
        },
        {
          city: "Raurkela",
          lat: "22.2492",
          lng: "84.8828",
          country: "India",
          temp: "IN",
          state: "Odisha",
          condition: "",
          population: "625831",
          population_proper: "483629",
        },
        {
          city: "Mangalore",
          lat: "12.8703",
          lng: "74.8806",
          country: "India",
          temp: "IN",
          state: "Karnataka",
          condition: "",
          population: "623841",
          population_proper: "623841",
        },
        {
          city: "Nanded",
          lat: "19.1500",
          lng: "77.3333",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "623708",
          population_proper: "550564",
        },
        {
          city: "Cuttack",
          lat: "20.4500",
          lng: "85.8667",
          country: "India",
          temp: "IN",
          state: "Odisha",
          condition: "",
          population: "606007",
          population_proper: "606007",
        },
        {
          city: "Chanda",
          lat: "19.9500",
          lng: "79.3000",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "595118",
          population_proper: "328351",
        },
        {
          city: "Dehra Dun",
          lat: "30.3180",
          lng: "78.0290",
          country: "India",
          temp: "IN",
          state: "Uttarakhand",
          condition: "Clear",
          population: "578420",
          population_proper: "578420",
        },
        {
          city: "Durgapur",
          lat: "23.5500",
          lng: "87.3200",
          country: "India",
          temp: "IN",
          state: "West Bengal",
          condition: "",
          population: "566517",
          population_proper: "566517",
        },
        {
          city: "Āsansol",
          lat: "23.6833",
          lng: "86.9667",
          country: "India",
          temp: "IN",
          state: "West Bengal",
          condition: "",
          population: "563917",
          population_proper: "563917",
        },
        {
          city: "Bhavnagar",
          lat: "21.7650",
          lng: "72.1369",
          country: "India",
          temp: "IN",
          state: "Gujarat",
          condition: "",
          population: "554978",
          population_proper: "464602",
        },
        {
          city: "Amravati",
          lat: "20.9333",
          lng: "77.7500",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "549370",
          population_proper: "549370",
        },
        {
          city: "Nellore",
          lat: "14.4333",
          lng: "79.9667",
          country: "India",
          temp: "IN",
          state: "Andhra Pradesh",
          condition: "",
          population: "547621",
          population_proper: "547621",
        },
        {
          city: "Ajmer",
          lat: "26.4680",
          lng: "74.6390",
          country: "India",
          temp: "IN",
          state: "Rajasthan",
          condition: "",
          population: "542321",
          population_proper: "542321",
        },
        {
          city: "Tinnevelly",
          lat: "8.7289",
          lng: "77.7081",
          country: "India",
          temp: "IN",
          state: "Tamil Nadu",
          condition: "",
          population: "542200",
          population_proper: "435844",
        },
        {
          city: "Bikaner",
          lat: "28.0181",
          lng: "73.3169",
          country: "India",
          temp: "IN",
          state: "Rajasthan",
          condition: "",
          population: "529007",
          population_proper: "529007",
        },
        {
          city: "Agartala",
          lat: "23.8333",
          lng: "91.2667",
          country: "India",
          temp: "IN",
          state: "Tripura",
          condition: "Clear",
          population: "522613",
          population_proper: "522613",
        },
        {
          city: "Ujjain",
          lat: "23.1828",
          lng: "75.7772",
          country: "India",
          temp: "IN",
          state: "Madhya Pradesh",
          condition: "",
          population: "515215",
          population_proper: "515215",
        },
        {
          city: "Jhansi",
          lat: "25.4486",
          lng: "78.5696",
          country: "India",
          temp: "IN",
          state: "Uttar Pradesh",
          condition: "",
          population: "507000",
          population_proper: "507000",
        },
        {
          city: "Ulhasnagar",
          lat: "19.2167",
          lng: "73.1500",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "506098",
          population_proper: "506098",
        },
        {
          city: "Davangere",
          lat: "14.4667",
          lng: "75.9167",
          country: "India",
          temp: "IN",
          state: "Karnataka",
          condition: "",
          population: "503564",
          population_proper: "435125",
        },
        {
          city: "Jammu",
          lat: "32.7333",
          lng: "74.8500",
          country: "India",
          temp: "IN",
          state: "Jammu and Kashmir",
          condition: "",
          population: "502197",
          population_proper: "502197",
        },
        {
          city: "Belgaum",
          lat: "15.8667",
          lng: "74.5000",
          country: "India",
          temp: "IN",
          state: "Karnataka",
          condition: "",
          population: "488157",
          population_proper: "488157",
        },
        {
          city: "Gulbarga",
          lat: "17.3333",
          lng: "76.8333",
          country: "India",
          temp: "IN",
          state: "Karnataka",
          condition: "",
          population: "483615",
          population_proper: "481478",
        },
        {
          city: "Jamnagar",
          lat: "22.4700",
          lng: "70.0700",
          country: "India",
          temp: "IN",
          state: "Gujarat",
          condition: "",
          population: "479920",
          population_proper: "479920",
        },
        {
          city: "Dhulia",
          lat: "20.9000",
          lng: "74.7833",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "479073",
          population_proper: "366980",
        },
        {
          city: "Gaya",
          lat: "24.7500",
          lng: "85.0167",
          country: "India",
          temp: "IN",
          state: "Bihar",
          condition: "",
          population: "474093",
          population_proper: "474093",
        },
        {
          city: "Jalgaon",
          lat: "21.0167",
          lng: "75.5667",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "460468",
          population_proper: "460468",
        },
        {
          city: "Kurnool",
          lat: "15.8222",
          lng: "78.0350",
          country: "India",
          temp: "IN",
          state: "Andhra Pradesh",
          condition: "",
          population: "457633",
          population_proper: "457633",
        },
        {
          city: "Udaipur",
          lat: "24.5833",
          lng: "73.6833",
          country: "India",
          temp: "IN",
          state: "Rajasthan",
          condition: "",
          population: "451100",
          population_proper: "451100",
        },
        {
          city: "Bellary",
          lat: "15.1500",
          lng: "76.9150",
          country: "India",
          temp: "IN",
          state: "Karnataka",
          condition: "",
          population: "445388",
          population_proper: "336681",
        },
        {
          city: "Sangli",
          lat: "16.8667",
          lng: "74.5667",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "436639",
          population_proper: "436639",
        },
        {
          city: "Tuticorin",
          lat: "8.7833",
          lng: "78.1333",
          country: "India",
          temp: "IN",
          state: "Tamil Nadu",
          condition: "",
          population: "436094",
          population_proper: "436094",
        },
        {
          city: "Calicut",
          lat: "11.2500",
          lng: "75.7667",
          country: "India",
          temp: "IN",
          state: "Kerala",
          condition: "minor",
          population: "431560",
          population_proper: "431560",
        },
        {
          city: "Akola",
          lat: "20.7333",
          lng: "77.0000",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "425817",
          population_proper: "425817",
        },
        {
          city: "Bhagalpur",
          lat: "25.2500",
          lng: "87.0167",
          country: "India",
          temp: "IN",
          state: "Bihar",
          condition: "",
          population: "410210",
          population_proper: "410210",
        },
        {
          city: "Sikar",
          lat: "27.6119",
          lng: "75.1397",
          country: "India",
          temp: "IN",
          state: "Rajasthan",
          condition: "",
          population: "400000",
          population_proper: "237579",
        },
        {
          city: "Tumkur",
          lat: "13.3300",
          lng: "77.1000",
          country: "India",
          temp: "IN",
          state: "Karnataka",
          condition: "",
          population: "399606",
          population_proper: "307359",
        },
        {
          city: "Quilon",
          lat: "8.8853",
          lng: "76.5864",
          country: "India",
          temp: "IN",
          state: "Kerala",
          condition: "",
          population: "397419",
          population_proper: "397419",
        },
        {
          city: "Muzaffarnagar",
          lat: "29.4708",
          lng: "77.7033",
          country: "India",
          temp: "IN",
          state: "Uttar Pradesh",
          condition: "",
          population: "392451",
          population_proper: "392451",
        },
        {
          city: "Bhilwara",
          lat: "25.3500",
          lng: "74.6333",
          country: "India",
          temp: "IN",
          state: "Rajasthan",
          condition: "",
          population: "389911",
          population_proper: "326431",
        },
        {
          city: "Nizamabad",
          lat: "18.6704",
          lng: "78.1000",
          country: "India",
          temp: "IN",
          state: "Telangana",
          condition: "",
          population: "388505",
          population_proper: "305438",
        },
        {
          city: "Bhatpara",
          lat: "22.8667",
          lng: "88.4167",
          country: "India",
          temp: "IN",
          state: "West Bengal",
          condition: "",
          population: "386019",
          population_proper: "386019",
        },
        {
          city: "Kakinada",
          lat: "16.9333",
          lng: "82.2167",
          country: "India",
          temp: "IN",
          state: "Andhra Pradesh",
          condition: "",
          population: "384182",
          population_proper: "384182",
        },
        {
          city: "Parbhani",
          lat: "19.2704",
          lng: "76.7600",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "378326",
          population_proper: "289629",
        },
        {
          city: "Panihati",
          lat: "22.6900",
          lng: "88.3700",
          country: "India",
          temp: "IN",
          state: "West Bengal",
          condition: "",
          population: "377347",
          population_proper: "377347",
        },
        {
          city: "Latur",
          lat: "18.4004",
          lng: "76.5700",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "374394",
          population_proper: "348967",
        },
        {
          city: "Rohtak",
          lat: "28.9000",
          lng: "76.5667",
          country: "India",
          temp: "IN",
          state: "Haryana",
          condition: "",
          population: "374292",
          population_proper: "374292",
        },
        {
          city: "Rajapalaiyam",
          lat: "9.4204",
          lng: "77.5800",
          country: "India",
          temp: "IN",
          state: "Tamil Nadu",
          condition: "",
          population: "369991",
          population_proper: "307959",
        },
        {
          city: "Ahmadnagar",
          lat: "19.0833",
          lng: "74.7333",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "350859",
          population_proper: "350859",
        },
        {
          city: "Cuddapah",
          lat: "14.4667",
          lng: "78.8167",
          country: "India",
          temp: "IN",
          state: "Andhra Pradesh",
          condition: "",
          population: "344893",
          population_proper: "344893",
        },
        {
          city: "Rajahmundry",
          lat: "16.9833",
          lng: "81.7833",
          country: "India",
          temp: "IN",
          state: "Andhra Pradesh",
          condition: "",
          population: "341831",
          population_proper: "341831",
        },
        {
          city: "Alwar",
          lat: "27.5667",
          lng: "76.6167",
          country: "India",
          temp: "IN",
          state: "Rajasthan",
          condition: "",
          population: "341422",
          population_proper: "341422",
        },
        {
          city: "Muzaffarpur",
          lat: "26.1200",
          lng: "85.3833",
          country: "India",
          temp: "IN",
          state: "Bihar",
          condition: "",
          population: "333200",
          population_proper: "333200",
        },
        {
          city: "Bilaspur",
          lat: "22.1500",
          lng: "82.0167",
          country: "India",
          temp: "IN",
          state: "Chhattisgarh",
          condition: "",
          population: "331030",
          population_proper: "331030",
        },
        {
          city: "Mathura",
          lat: "27.4833",
          lng: "77.6833",
          country: "India",
          temp: "IN",
          state: "Uttar Pradesh",
          condition: "",
          population: "330511",
          population_proper: "330511",
        },
        {
          city: "Kamarhati",
          lat: "22.6700",
          lng: "88.3700",
          country: "India",
          temp: "IN",
          state: "West Bengal",
          condition: "",
          population: "330211",
          population_proper: "330211",
        },
        {
          city: "Patiala",
          lat: "30.3204",
          lng: "76.3850",
          country: "India",
          temp: "IN",
          state: "Punjab",
          condition: "",
          population: "329224",
          population_proper: "329224",
        },
        {
          city: "Saugor",
          lat: "23.8504",
          lng: "78.7500",
          country: "India",
          temp: "IN",
          state: "Madhya Pradesh",
          condition: "",
          population: "328240",
          population_proper: "247333",
        },
        {
          city: "Bijapur",
          lat: "16.8244",
          lng: "75.7154",
          country: "India",
          temp: "IN",
          state: "Karnataka",
          condition: "",
          population: "327427",
          population_proper: "327427",
        },
        {
          city: "Brahmapur",
          lat: "19.3200",
          lng: "84.8000",
          country: "India",
          temp: "IN",
          state: "Odisha",
          condition: "",
          population: "324726",
          population_proper: "324726",
        },
        {
          city: "Shahjanpur",
          lat: "27.8804",
          lng: "79.9050",
          country: "India",
          temp: "IN",
          state: "Uttar Pradesh",
          condition: "",
          population: "320434",
          population_proper: "320434",
        },
        {
          city: "Trichur",
          lat: "10.5200",
          lng: "76.2100",
          country: "India",
          temp: "IN",
          state: "Kerala",
          condition: "",
          population: "315596",
          population_proper: "315596",
        },
        {
          city: "Barddhaman",
          lat: "23.2500",
          lng: "87.8500",
          country: "India",
          temp: "IN",
          state: "West Bengal",
          condition: "",
          population: "314265",
          population_proper: "314265",
        },
        {
          city: "Kulti",
          lat: "23.7300",
          lng: "86.8500",
          country: "India",
          temp: "IN",
          state: "West Bengal",
          condition: "",
          population: "313809",
          population_proper: "313809",
        },
        {
          city: "Sambalpur",
          lat: "21.4704",
          lng: "83.9701",
          country: "India",
          temp: "IN",
          state: "Odisha",
          condition: "",
          population: "310852",
          population_proper: "162887",
        },
        {
          city: "Hisar",
          lat: "29.1489",
          lng: "75.7367",
          country: "India",
          temp: "IN",
          state: "Haryana",
          condition: "",
          population: "307024",
          population_proper: "307024",
        },
        {
          city: "Firozabad",
          lat: "27.1500",
          lng: "78.3949",
          country: "India",
          temp: "IN",
          state: "Uttar Pradesh",
          condition: "",
          population: "306409",
          population_proper: "306409",
        },
        {
          city: "Bidar",
          lat: "17.9229",
          lng: "77.5175",
          country: "India",
          temp: "IN",
          state: "Karnataka",
          condition: "",
          population: "300136",
          population_proper: "204071",
        },
        {
          city: "Rampur",
          lat: "28.8154",
          lng: "79.0250",
          country: "India",
          temp: "IN",
          state: "Uttar Pradesh",
          condition: "",
          population: "296418",
          population_proper: "296418",
        },
        {
          city: "Shiliguri",
          lat: "26.7200",
          lng: "88.4200",
          country: "India",
          temp: "IN",
          state: "West Bengal",
          condition: "",
          population: "294546",
          population_proper: "294546",
        },
        {
          city: "Bali",
          lat: "22.6500",
          lng: "88.3400",
          country: "India",
          temp: "IN",
          state: "West Bengal",
          condition: "",
          population: "293373",
          population_proper: "293373",
        },
        {
          city: "Panipat",
          lat: "29.4004",
          lng: "76.9700",
          country: "India",
          temp: "IN",
          state: "Haryana",
          condition: "",
          population: "292808",
          population_proper: "292808",
        },
        {
          city: "Karimnagar",
          lat: "18.4333",
          lng: "79.1500",
          country: "India",
          temp: "IN",
          state: "Telangana",
          condition: "",
          population: "289821",
          population_proper: "289821",
        },
        {
          city: "Bhuj",
          lat: "23.2504",
          lng: "69.8100",
          country: "India",
          temp: "IN",
          state: "Gujarat",
          condition: "",
          population: "289429",
          population_proper: "289429",
        },
        {
          city: "Ichalkaranji",
          lat: "16.7000",
          lng: "74.4700",
          country: "India",
          temp: "IN",
          state: "Maharashtra",
          condition: "",
          population: "287570",
          population_proper: "287570",
        },
        {
          city: "Tirupati",
          lat: "13.6500",
          lng: "79.4200",
          country: "India",
          temp: "IN",
          state: "Andhra Pradesh",
          condition: "",
          population: "287482",
          population_proper: "287482",
        },
        {
          city: "Hospet",
          lat: "15.2667",
          lng: "76.4000",
          country: "India",
          temp: "IN",
          state: "Karnataka",
          condition: "",
          population: "286007",
          population_proper: "197846",
        },
        {
          city: "Āizawl",
          lat: "23.7104",
          lng: "92.7200",
          country: "India",
          temp: "IN",
          state: "Mizoram",
          condition: "Clear",
          population: "283021",
          population_proper: "265331",
        },
        {
          city: "Sannai",
          lat: "24.1600",
          lng: "80.8300",
          country: "India",
          temp: "IN",
          state: "Madhya Pradesh",
          condition: "",
          population: "283004",
          population_proper: "283004",
        },
        {
          city: "Barasat",
          lat: "22.2333",
          lng: "88.4500",
          country: "India",
          temp: "IN",
          state: "West Bengal",
          condition: "",
          population: "278435",
          population_proper: "278435",
        },
        {
          city: "Ratlam",
          lat: "23.3167",
          lng: "75.0667",
          country: "India",
          temp: "IN",
          state: "Madhya Pradesh",
          condition: "",
          population: "273892",
          population_proper: "273892",
        },
        {
          city: "Handwara",
          lat: "34.4000",
          lng: "74.2800",
          country: "India",
          temp: "IN",
          state: "Jammu and Kashmir",
          condition: "",
          population: "269311",
          population_proper: "269311",
        },
        {
          city: "Drug",
          lat: "21.1900",
          lng: "81.2800",
          country: "India",
          temp: "IN",
          state: "Chhattisgarh",
          condition: "",
          population: "268806",
          population_proper: "268806",
        },
        {
          city: "Imphal",
          lat: "24.8200",
          lng: "93.9500",
          country: "India",
          temp: "IN",
          state: "Manipur",
          condition: "Clear",
          population: "268243",
          population_proper: "268243",
        },
        {
          city: "Anantapur",
          lat: "14.6833",
          lng: "77.6000",
          country: "India",
          temp: "IN",
          state: "Andhra Pradesh",
          condition: "",
          population: "267161",
          population_proper: "267161",
        },
        {
          city: "Etawah",
          lat: "26.7855",
          lng: "79.0150",
          country: "India",
          temp: "IN",
          state: "Uttar Pradesh",
          condition: "",
          population: "257448",
          population_proper: "257448",
        },
        {
          city: "Raichur",
          lat: "16.2104",
          lng: "77.3550",
          country: "India",
          temp: "IN",
          state: "Karnataka",
          condition: "",
          population: "255240",
          population_proper: "225962",
        },
        {
          city: "Ongole",
          lat: "15.5000",
          lng: "80.0500",
          country: "India",
          temp: "IN",
          state: "Andhra Pradesh",
          condition: "",
          population: "252739",
          population_proper: "252739",
        },
        {
          city: "Bharatpur",
          lat: "27.2172",
          lng: "77.4900",
          country: "India",
          temp: "IN",
          state: "Rajasthan",
          condition: "",
          population: "252342",
          population_proper: "252342",
        },
        {
          city: "Begusarai",
          lat: "25.4200",
          lng: "86.1300",
          country: "India",
          temp: "IN",
          state: "Bihar",
          condition: "",
          population: "252008",
          population_proper: "252008",
        },
        {
          city: "Sonipat",
          lat: "28.9958",
          lng: "77.0114",
          country: "India",
          temp: "IN",
          state: "Haryana",
          condition: "",
          population: "250521",
          population_proper: "250521",
        },
        {
          city: "Ramgundam",
          lat: "18.8000",
          lng: "79.4500",
          country: "India",
          temp: "IN",
          state: "Telangana",
          condition: "",
          population: "242979",
          population_proper: "242979",
        },
        {
          city: "Hapur",
          lat: "28.7437",
          lng: "77.7628",
          country: "India",
          temp: "IN",
          state: "Uttar Pradesh",
          condition: "",
          population: "242920",
          population_proper: "242920",
        },
        {
          city: "Uluberiya",
          lat: "22.4700",
          lng: "88.1100",
          country: "India",
          temp: "IN",
          state: "West Bengal",
          condition: "",
          population: "235345",
          population_proper: "235345",
        },
        {
          city: "Porbandar",
          lat: "21.6425",
          lng: "69.6047",
          country: "India",
          temp: "IN",
          state: "Gujarat",
          condition: "",
          population: "234684",
          population_proper: "138872",
        },
        {
          city: "Pali",
          lat: "25.7725",
          lng: "73.3233",
          country: "India",
          temp: "IN",
          state: "Rajasthan",
          condition: "",
          population: "229956",
          population_proper: "229956",
        },
        {
          city: "Vizianagaram",
          lat: "18.1167",
          lng: "83.4167",
          country: "India",
          temp: "IN",
          state: "Andhra Pradesh",
          condition: "",
          population: "228720",
          population_proper: "228720",
        },
        {
          city: "Puducherry",
          lat: "11.9300",
          lng: "79.8300",
          country: "India",
          temp: "IN",
          state: "Puducherry",
          condition: "Clear",
          population: "227411",
          population_proper: "227411",
        },
        {
          city: "Karnal",
          lat: "29.6804",
          lng: "76.9700",
          country: "India",
          temp: "IN",
          state: "Haryana",
          condition: "",
          population: "225049",
          population_proper: "225049",
        },
        {
          city: "Nagercoil",
          lat: "8.1700",
          lng: "77.4300",
          country: "India",
          temp: "IN",
          state: "Tamil Nadu",
          condition: "",
          population: "224329",
          population_proper: "213858",
        },
        {
          city: "Tanjore",
          lat: "10.8000",
          lng: "79.1500",
          country: "India",
          temp: "IN",
          state: "Tamil Nadu",
          condition: "",
          population: "222943",
          population_proper: "222943",
        },
        {
          city: "Sambhal",
          lat: "28.5800",
          lng: "78.5500",
          country: "India",
          temp: "IN",
          state: "Uttar Pradesh",
          condition: "",
          population: "220813",
          population_proper: "220813",
        },
        {
          city: "Shimla",
          lat: "31.1033",
          lng: "77.1722",
          country: "India",
          temp: "IN",
          state: "Himachal Pradesh",
          condition: "Clear",
          population: "206575",
          population_proper: "206575",
        },
        {
          city: "Ghandinagar",
          lat: "23.2200",
          lng: "72.6800",
          country: "India",
          temp: "IN",
          state: "Gujarat",
          condition: "Clear",
          population: "195891",
          population_proper: "195891",
        },
        {
          city: "Shillong",
          lat: "25.5744",
          lng: "91.8789",
          country: "India",
          temp: "IN",
          state: "Meghalaya",
          condition: "Clear",
          population: "143229",
          population_proper: "143229",
        },
        {
          city: "New Delhi",
          lat: "28.7000",
          lng: "77.2000",
          country: "India",
          temp: "IN",
          state: "Delhi",
          condition: "",
          population: "142004",
          population_proper: "142004",
        },
        {
          city: "Port Blair",
          lat: "11.6667",
          lng: "92.7500",
          country: "India",
          temp: "IN",
          state: "Andaman and Nicobar Islands",
          condition: "Clear",
          population: "127562",
          population_proper: "112050",
        },
        {
          city: "Gangtok",
          lat: "27.3300",
          lng: "88.6200",
          country: "India",
          temp: "IN",
          state: "Sikkim",
          condition: "Clear",
          population: "100286",
          population_proper: "100286",
        },
        {
          city: "Kohima",
          lat: "25.6667",
          lng: "94.1194",
          country: "India",
          temp: "IN",
          state: "Nagaland",
          condition: "Clear",
          population: "99039",
          population_proper: "99039",
        },
        {
          city: "Itanagar",
          lat: "27.1000",
          lng: "93.6200",
          country: "India",
          temp: "IN",
          state: "Arunachal Pradesh",
          condition: "Clear",
          population: "59490",
          population_proper: "59490",
        },
        {
          city: "Panaji",
          lat: "15.4800",
          lng: "73.8300",
          country: "India",
          temp: "IN",
          state: "Goa",
          condition: "Clear",
          population: "40017",
          population_proper: "40017",
        },
        {
          city: "Daman",
          lat: "20.4170",
          lng: "72.8500",
          country: "India",
          temp: "IN",
          state: "Gujarat",
          condition: "Clear",
          population: "39737",
          population_proper: "39737",
        },
        {
          city: "Kavaratti",
          lat: "10.5626",
          lng: "72.6369",
          country: "India",
          temp: "IN",
          state: "Lakshadweep",
          condition: "Clear",
          population: "10688",
          population_proper: "10688",
        },
        {
          city: "Panchkula",
          lat: "30.6915",
          lng: "76.8537",
          country: "India",
          temp: "IN",
          state: "Haryana",
          condition: "minor",
          population: "",
          population_proper: "",
        },
        {
          city: "Kagaznagar",
          lat: "19.3316",
          lng: "79.4661",
          country: "India",
          temp: "IN",
          state: "Telangana",
          condition: "minor",
          population: "",
          population_proper: "",
        },
      ],
      I = { Cities: g },
      _ = {
        SET_DAILY_DATA: "SetDailyData",
        SET_HOURLY_DATA: "SetHourlyData",
        SET_LOCATION: "SetLocation",
        SET_WEATHER_DATA: "SetWeatherData",
        STORE: "this.$store",
      },
      f = [
        {
          dt: 1607194800,
          temp: 19.25,
          feels_like: 16.86,
          pressure: 1013,
          humidity: 39,
          dew_point: 5.1,
          uvi: 0,
          clouds: 0,
          visibility: 1e4,
          wind_speed: 1.8,
          wind_deg: 119,
          weather: [
            { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
          ],
          pop: 0,
          hour: "12 ",
        },
        {
          dt: 1607198400,
          temp: 18.72,
          feels_like: 16.45,
          pressure: 1013,
          humidity: 40,
          dew_point: 5.1,
          uvi: 0,
          clouds: 0,
          visibility: 1e4,
          wind_speed: 1.59,
          wind_deg: 123,
          weather: [
            { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
          ],
          pop: 0,
          hour: "1  ",
        },
        {
          dt: 1607202e3,
          temp: 18.25,
          feels_like: 16.07,
          pressure: 1012,
          humidity: 41,
          dew_point: 5.08,
          uvi: 0,
          clouds: 18,
          visibility: 1e4,
          wind_speed: 1.44,
          wind_deg: 109,
          weather: [
            { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
          ],
          pop: 0,
          hour: "2  ",
        },
        {
          dt: 1607205600,
          temp: 17.81,
          feels_like: 15.61,
          pressure: 1012,
          humidity: 42,
          dew_point: 4.96,
          uvi: 0,
          clouds: 38,
          visibility: 1e4,
          wind_speed: 1.46,
          wind_deg: 95,
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "scattered clouds",
              icon: "03n",
            },
          ],
          pop: 0,
          hour: "3  ",
        },
        {
          dt: 1607209200,
          temp: 17.56,
          feels_like: 15.08,
          pressure: 1012,
          humidity: 42,
          dew_point: 4.79,
          uvi: 0,
          clouds: 48,
          visibility: 1e4,
          wind_speed: 1.79,
          wind_deg: 88,
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "scattered clouds",
              icon: "03n",
            },
          ],
          pop: 0,
          hour: "4  ",
        },
        {
          dt: 1607212800,
          temp: 17.34,
          feels_like: 14.59,
          pressure: 1013,
          humidity: 43,
          dew_point: 4.75,
          uvi: 0,
          clouds: 49,
          visibility: 1e4,
          wind_speed: 2.22,
          wind_deg: 98,
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "scattered clouds",
              icon: "03n",
            },
          ],
          pop: 0,
          hour: "5  ",
        },
        {
          dt: 1607216400,
          temp: 16.87,
          feels_like: 14.24,
          pressure: 1013,
          humidity: 45,
          dew_point: 4.92,
          uvi: 0,
          clouds: 88,
          visibility: 1e4,
          wind_speed: 2.11,
          wind_deg: 98,
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          pop: 0,
          hour: "6  ",
        },
        {
          dt: 160722e4,
          temp: 17.23,
          feels_like: 14.78,
          pressure: 1014,
          humidity: 48,
          dew_point: 6.35,
          uvi: 0,
          clouds: 88,
          visibility: 1e4,
          wind_speed: 2.23,
          wind_deg: 106,
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          pop: 0,
          hour: "7  ",
        },
        {
          dt: 1607223600,
          temp: 19.9,
          feels_like: 17.36,
          pressure: 1015,
          humidity: 44,
          dew_point: 7.48,
          uvi: 0.83,
          clouds: 92,
          visibility: 1e4,
          wind_speed: 2.72,
          wind_deg: 106,
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          pop: 0,
          hour: "8  ",
        },
        {
          dt: 1607227200,
          temp: 22.19,
          feels_like: 19.34,
          pressure: 1016,
          humidity: 43,
          dew_point: 9.24,
          uvi: 2.4,
          clouds: 93,
          visibility: 1e4,
          wind_speed: 3.76,
          wind_deg: 111,
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          pop: 0,
          hour: "9  ",
        },
        {
          dt: 1607230800,
          temp: 24.25,
          feels_like: 21.27,
          pressure: 1016,
          humidity: 43,
          dew_point: 10.95,
          uvi: 4.53,
          clouds: 94,
          visibility: 1e4,
          wind_speed: 4.67,
          wind_deg: 113,
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          pop: 0,
          hour: "10 ",
        },
        {
          dt: 1607234400,
          temp: 25.83,
          feels_like: 22.08,
          pressure: 1015,
          humidity: 38,
          dew_point: 10.49,
          uvi: 6.41,
          clouds: 95,
          visibility: 1e4,
          wind_speed: 5.59,
          wind_deg: 110,
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          pop: 0,
          hour: "11 ",
        },
        {
          dt: 1607238e3,
          temp: 27,
          feels_like: 22.89,
          pressure: 1013,
          humidity: 33,
          dew_point: 9.5,
          uvi: 7.37,
          clouds: 86,
          visibility: 1e4,
          wind_speed: 5.69,
          wind_deg: 101,
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          pop: 0,
          hour: "12 ",
        },
        {
          dt: 1607241600,
          temp: 27.76,
          feels_like: 23.83,
          pressure: 1012,
          humidity: 30,
          dew_point: 8.64,
          uvi: 6.79,
          clouds: 93,
          visibility: 1e4,
          wind_speed: 5.16,
          wind_deg: 97,
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          pop: 0,
          hour: "1  ",
        },
        {
          dt: 1607245200,
          temp: 28.19,
          feels_like: 24.41,
          pressure: 1011,
          humidity: 28,
          dew_point: 7.99,
          uvi: 5.02,
          clouds: 95,
          visibility: 1e4,
          wind_speed: 4.71,
          wind_deg: 98,
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          pop: 0,
          hour: "2  ",
        },
        {
          dt: 1607248800,
          temp: 28.28,
          feels_like: 24.58,
          pressure: 1011,
          humidity: 27,
          dew_point: 7.58,
          uvi: 2.84,
          clouds: 83,
          visibility: 1e4,
          wind_speed: 4.45,
          wind_deg: 98,
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04d",
            },
          ],
          pop: 0,
          hour: "3  ",
        },
        {
          dt: 1607252400,
          temp: 27.71,
          feels_like: 24.49,
          pressure: 1011,
          humidity: 28,
          dew_point: 8.01,
          uvi: 1.07,
          clouds: 80,
          visibility: 1e4,
          wind_speed: 3.77,
          wind_deg: 98,
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04d",
            },
          ],
          pop: 0,
          hour: "4  ",
        },
        {
          dt: 1607256e3,
          temp: 25.06,
          feels_like: 22.74,
          pressure: 1011,
          humidity: 34,
          dew_point: 8.35,
          uvi: 0.2,
          clouds: 84,
          visibility: 1e4,
          wind_speed: 2.68,
          wind_deg: 96,
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04d",
            },
          ],
          pop: 0,
          hour: "5  ",
        },
        {
          dt: 1607259600,
          temp: 22.82,
          feels_like: 20.35,
          pressure: 1012,
          humidity: 34,
          dew_point: 6.34,
          uvi: 0,
          clouds: 100,
          visibility: 1e4,
          wind_speed: 2.26,
          wind_deg: 102,
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          pop: 0,
          hour: "6  ",
        },
        {
          dt: 1607263200,
          temp: 22.07,
          feels_like: 19.65,
          pressure: 1013,
          humidity: 34,
          dew_point: 5.88,
          uvi: 0,
          clouds: 100,
          visibility: 1e4,
          wind_speed: 1.99,
          wind_deg: 114,
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          pop: 0,
          hour: "7  ",
        },
        {
          dt: 1607266800,
          temp: 21.35,
          feels_like: 19,
          pressure: 1014,
          humidity: 36,
          dew_point: 5.81,
          uvi: 0,
          clouds: 100,
          visibility: 1e4,
          wind_speed: 1.94,
          wind_deg: 90,
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          pop: 0,
          hour: "8  ",
        },
        {
          dt: 1607270400,
          temp: 20.73,
          feels_like: 18,
          pressure: 1015,
          humidity: 37,
          dew_point: 5.58,
          uvi: 0,
          clouds: 98,
          visibility: 1e4,
          wind_speed: 2.44,
          wind_deg: 66,
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          pop: 0,
          hour: "9  ",
        },
        {
          dt: 1607274e3,
          temp: 20.02,
          feels_like: 17.34,
          pressure: 1015,
          humidity: 39,
          dew_point: 5.68,
          uvi: 0,
          clouds: 97,
          visibility: 1e4,
          wind_speed: 2.41,
          wind_deg: 79,
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          pop: 0,
          hour: "10 ",
        },
        {
          dt: 1607277600,
          temp: 19.39,
          feels_like: 16.65,
          pressure: 1014,
          humidity: 41,
          dew_point: 5.85,
          uvi: 0,
          clouds: 96,
          visibility: 1e4,
          wind_speed: 2.54,
          wind_deg: 90,
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          pop: 0,
          hour: "11 ",
        },
        {
          dt: 1607281200,
          temp: 18.95,
          feels_like: 16.11,
          pressure: 1014,
          humidity: 42,
          dew_point: 5.98,
          uvi: 0,
          clouds: 41,
          visibility: 1e4,
          wind_speed: 2.67,
          wind_deg: 97,
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "scattered clouds",
              icon: "03n",
            },
          ],
          pop: 0,
          hour: "12 ",
        },
      ],
      N = {
        data: function () {
          return {
            Citylist: [],
            CurrentCity: "Pune, Maharashtra",
            FilteredCityList: [],
            showDropdown: !0,
            City: "",
            DailyForecast: {},
            HourlyForecast: {},
          };
        },
        watch: {
          CurrentCity: function () {
            function t(t) {
              return t.charAt(0).toUpperCase() + t.slice(1);
            }
            var a = t(this.CurrentCity);
            (this.FilteredCityList = this.Citylist.filter(function (t) {
              return t.city.includes(a);
            })),
              this.FilteredCityList.forEach(function (t) {
                var a =
                  "https://api.openweathermap.org/data/2.5/weather?q=" +
                  t.city +
                  "&units=metric&appid=e4c70ce6a6821649a416cb9521d5f4f8";
                m.a.get(a).then(function (a) {
                  (t.temp = a.data.main.temp.toPrecision(2)),
                    (t.condition = a.data.weather[0].main);
                });
              });
          },
        },
        created: function () {
          this.Citylist = I.Cities;
        },
        methods: {
          SelectLocation: function (t, a) {
            var o = this,
              i = { Latitude: t.lat, Longitude: t.lng };
            (this.CurrentCity = t.city + ", " + t.state),
              this.$store.commit(_.SET_LOCATION, i),
              (this.showDropdown = !0),
              (this.City = t.city + ", " + t.state);
            var n =
              "https://api.openweathermap.org/data/2.5/onecall?lat=" +
              t.lat +
              "&lon=" +
              t.lng +
              "&exclude=minutely,alerts&units=metric&appid=e4c70ce6a6821649a416cb9521d5f4f8";
            m.a.get(n).then(function (t) {
              (o.DailyForecast = t.data.daily),
                (o.HourlyForecast = t.data.hourly),
                o.DailyForecast.forEach(function (t, a) {
                  var i = new Date(1e3 * t.dt).toDateString();
                  (o.DailyForecast[a].day = i.substring(0, 3)),
                    (o.DailyForecast[a].temp.max = t.temp.max.toPrecision(2)),
                    (o.DailyForecast[a].temp.min = t.temp.min.toPrecision(2));
                  var n = new Date(
                      1e3 * o.DailyForecast[a].sunrise
                    ).toLocaleTimeString(),
                    e = new Date(
                      1e3 * o.DailyForecast[a].sunset
                    ).toLocaleTimeString();
                  (o.DailyForecast[a].sunrise = n.substring(0, 4)),
                    (o.DailyForecast[a].sunset = e.substring(0, 4));
                }),
                o.$store.commit(_.SET_DAILY_DATA, o.DailyForecast),
                o.$store.commit(_.SET_HOURLY_DATA, o.HourlyForecast);
            });
          },
        },
      },
      v = N,
      C = (o("63f0"), o("2877")),
      w = Object(C["a"])(v, d, y, !1, null, "da0eae2c", null),
      D = w.exports,
      b = function () {
        var t = this,
          a = t.$createElement,
          i = t._self._c || a;
        return i("div", [
          i("section", { staticClass: "DetailedForecastSection" }, [
            i("div", { staticClass: "CurrentTempDiv" }, [
              i("h1", { staticClass: "CurrentTemp" }, [
                t._v(t._s(t.CurrentData.temp.max) + "°C"),
              ]),
              i("img", {
                staticClass: "CurrentTempImg",
                attrs: { src: o("c192"), alt: "Clouds" },
              }),
            ]),
            i(
              "div",
              { staticClass: "ApexGraph" },
              [
                this.showGraph
                  ? i("apexchart", {
                      attrs: {
                        type: "area",
                        height: "350",
                        options: t.chartOptions,
                        series: t.series,
                      },
                    })
                  : t._e(),
              ],
              1
            ),
            i("div", { staticClass: "OtherForecastData" }, [
              i("div", { staticClass: "OtherData" }, [
                i("span", { staticClass: "bold" }, [t._v("Pressure")]),
                i("span", [t._v(t._s(t.CurrentData.pressure) + " hpa")]),
              ]),
              i("div", { staticClass: "OtherData" }, [
                i("span", { staticClass: "bold" }, [t._v("Humidity")]),
                i("span", [t._v(t._s(t.CurrentData.humidity) + " %")]),
              ]),
            ]),
            i("div", [
              i("div", { staticClass: "flex justify" }, [
                i("div", { staticClass: "SunriseData" }, [
                  i("span", { staticClass: "bold" }, [t._v("Sunrise")]),
                  i("span", [t._v(t._s(t.CurrentData.sunrise) + "am")]),
                ]),
                i("div", { staticClass: "SunriseData" }, [
                  i("span", { staticClass: "bold" }, [t._v("Sunset")]),
                  i("span", [t._v(t._s(t.CurrentData.sunset) + "pm")]),
                ]),
              ]),
              i("div", { staticStyle: { height: "200px" } }, [
                i("div", { staticStyle: { width: "100%", height: "100%" } }, [
                  i(
                    "div",
                    {
                      staticStyle: {
                        position: "relative",
                        cursor: "default",
                        width: "100%",
                        height: "200px",
                      },
                    },
                    [
                      i(
                        "svg",
                        {
                          staticStyle: { width: "100%" },
                          attrs: {
                            height: "200",
                            viewBox: "0 0 704 200",
                            version: "1.1",
                          },
                        },
                        [
                          i("defs", [
                            i("clipPath", [
                              i("rect", {
                                attrs: {
                                  x: "18",
                                  y: "0",
                                  height: "170",
                                  width: "676",
                                },
                              }),
                            ]),
                          ]),
                          i(
                            "defs",
                            [
                              i(
                                "linearGradient",
                                {
                                  attrs: {
                                    id: "time",
                                    x1: "0",
                                    y1: "0",
                                    x2: "0",
                                    y2: "1",
                                  },
                                },
                                [
                                  i("stop", {
                                    attrs: {
                                      offset: "5%",
                                      "stop-color": "#F7E0AF",
                                      "stop-opacity": "0.6",
                                    },
                                  }),
                                  i("stop", {
                                    attrs: {
                                      offset: "90%",
                                      "stop-color": "#F7E0AF",
                                      "stop-opacity": "0.1",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          i("g", { staticStyle: { width: "100%" } }, [
                            i("line", {
                              staticStyle: { width: "100%" },
                              attrs: {
                                height: "30",
                                x: "18",
                                y: "170",
                                stroke: "#666",
                                fill: "none",
                                x1: "18",
                                y1: "170",
                                x2: "694",
                                y2: "170",
                              },
                            }),
                            i("g", { staticStyle: { width: "100%" } }, [
                              i("g", [
                                i(
                                  "text",
                                  {
                                    staticStyle: { width: "100%" },
                                    attrs: {
                                      height: "30",
                                      x: "18",
                                      y: "178",
                                      stroke: "none",
                                      fill: "#666",
                                      "text-anchor": "middle",
                                    },
                                  },
                                  [
                                    i(
                                      "tspan",
                                      { attrs: { x: "18", dy: "0.71em" } },
                                      [t._v("5am")]
                                    ),
                                  ]
                                ),
                              ]),
                              i("g", [
                                i(
                                  "text",
                                  {
                                    attrs: {
                                      width: "676",
                                      height: "30",
                                      x: "187",
                                      y: "178",
                                      stroke: "none",
                                      fill: "#666",
                                      "text-anchor": "middle",
                                    },
                                  },
                                  [
                                    i("tspan", {
                                      attrs: { x: "187", dy: "0.71em" },
                                    }),
                                  ]
                                ),
                              ]),
                              i("g", [
                                i(
                                  "text",
                                  {
                                    attrs: {
                                      width: "676",
                                      height: "30",
                                      x: "356",
                                      y: "178",
                                      stroke: "none",
                                      fill: "#666",
                                      "text-anchor": "middle",
                                    },
                                  },
                                  [
                                    i(
                                      "tspan",
                                      { attrs: { x: "356", dy: "0.71em" } },
                                      [t._v("2am")]
                                    ),
                                  ]
                                ),
                              ]),
                              i("g", [
                                i(
                                  "text",
                                  {
                                    attrs: {
                                      width: "676",
                                      height: "30",
                                      x: "525",
                                      y: "178",
                                      stroke: "none",
                                      fill: "#666",
                                      "text-anchor": "middle",
                                    },
                                  },
                                  [
                                    i("tspan", {
                                      attrs: { x: "525", dy: "0.71em" },
                                    }),
                                  ]
                                ),
                              ]),
                              i("g", [
                                i(
                                  "text",
                                  {
                                    attrs: {
                                      width: "676",
                                      height: "30",
                                      x: "688.0062494277954",
                                      y: "178",
                                      stroke: "none",
                                      fill: "#666",
                                      "text-anchor": "middle",
                                    },
                                  },
                                  [
                                    i(
                                      "tspan",
                                      {
                                        attrs: {
                                          x: "688.0062494277954",
                                          dy: "0.71em",
                                        },
                                      },
                                      [t._v("6pm")]
                                    ),
                                  ]
                                ),
                              ]),
                            ]),
                          ]),
                          i("g", [
                            i("g", [
                              i("path", {
                                attrs: {
                                  stroke: "none",
                                  fill: "url(#time)",
                                  "fill-opacity": "0.6",
                                  width: "676",
                                  height: "170",
                                  d: "M187,141.66666666666666C243.33333333333334,113.33333333333333,299.6666666666667,56.666666666666664,356,56.666666666666664C412.3333333333333,56.666666666666664,468.6666666666667,113.33333333333333,525,141.66666666666666C581.3333333333334,170,637.6666666666666,170,553.1666666666666,170C468.6666666666667,170,243.33333333333334,170,158.83333333333334,170C74.33333333333333,170,130.66666666666666,170,187,141.66666666666666M525,170C468.6666666666667,170,412.3333333333333,170,356,170C299.6666666666667,170,243.33333333333334,170,187,170C130.66666666666666,170,74.33333333333333,170,158.83333333333334,170C243.33333333333334,170,468.6666666666667,170,553.1666666666666,170C637.6666666666666,170,581.3333333333334,170,525,170",
                                },
                              }),
                              i("path", {
                                attrs: {
                                  stroke: "#FEDB41",
                                  fill: "none",
                                  "fill-opacity": "0.6",
                                  width: "676",
                                  height: "170",
                                  d: "M187,141.66666666666666C243.33333333333334,113.33333333333333,299.6666666666667,56.666666666666664,356,56.666666666666664C412.3333333333333,56.666666666666664,468.6666666666667,113.33333333333333,525,141.66666666666666C581.3333333333334,170,637.6666666666666,170,553.1666666666666,170C468.6666666666667,170,243.33333333333334,170,158.83333333333334,170C74.33333333333333,170,130.66666666666666,170,187,141.66666666666666",
                                },
                              }),
                            ]),
                          ]),
                        ]
                      ),
                    ]
                  ),
                  i("div", {
                    staticStyle: {
                      position: "absolute",
                      width: "0px",
                      height: "0px",
                      visibility: "hidden",
                      display: "none",
                    },
                  }),
                ]),
              ]),
            ]),
          ]),
        ]);
      },
      k = [],
      S = (o("ac1f"), o("5319"), o("1321")),
      P = o.n(S),
      T = {
        components: { apexchart: P.a },
        data: function () {
          return {
            series: [{ name: "Temprature", data: [] }],
            chartOptions: {
              chart: {
                animations: {
                  enabled: !0,
                  easing: "easeinout",
                  speed: 1,
                  animateGradually: { enabled: !0, delay: 150 },
                  dynamicAnimation: { enabled: !0, speed: 350 },
                },
                type: "area",
                height: 350,
                zoom: { enabled: !1 },
              },
              dataLabels: { enabled: !1 },
              stroke: { curve: "smooth" },
              labels: [],
              yaxis: { type: "datetime", labels: { show: !1 } },
              legend: { horizontalAlign: "left" },
              tooltip: {
                enabled: !0,
                enabledOnSeries: void 0,
                shared: !0,
                followCursor: !1,
                intersect: !1,
                inverseOrder: !1,
                custom: void 0,
                fillSeriesColor: !1,
                y: {
                  formatter: function (t) {
                    return t + "°C";
                  },
                },
              },
            },
            showGraph: !1,
            DeatiledData: {},
            CurrentData: {
              temp: "",
              pressure: "",
              humidity: "",
              sunrise: "",
              sunset: "",
            },
            Location: {},
            Data: {},
            HourlyData: {},
            Day0Hours: 0,
            Day1Hours: 0,
            Day2Hours: 0,
          };
        },
        computed: {
          GetData: function () {
            return this.$store.getters.GetWeatherData;
          },
          GetLocation: function () {
            return this.$store.getters.GetLocation;
          },
          GetDailyData: function () {
            return this.$store.getters.GetDailyData;
          },
          GetHourlyData: function () {
            return this.$store.getters.GetHourlyData;
          },
          GetCurrentDay: function () {
            return this.$store.getters.GetCurrentDay;
          },
        },
        watch: {
          GetLocation: function (t) {
            this.GetForecast();
          },
          GetData: function (t) {
            var a = this.GetCurrentDay,
              o = [],
              i = [];
            if (0 == a) {
              this.Day0Hours = 24 - new Date().getHours();
              var n = this.GetHourlyData,
                e = n.slice(0, this.Day0Hours);
            } else if (1 == a) {
              var p = this.GetHourlyData;
              this.Day2Hours = this.Day0Hours + 25;
              e = p.slice(this.Day0Hours, this.Day2Hours);
            } else if (2 == a) {
              var r = this.GetHourlyData;
              e = r.slice(30, 47);
            } else e = f;
            e.forEach(function (t, a) {
              var n = new Date(1e3 * t.dt).toLocaleTimeString();
              (n = n.replace(":", "  ")),
                (n = n.slice(0, 3)),
                (e[a].hour = n),
                o.push(n),
                i.push(e[a].temp.toPrecision(2));
            }),
              (this.series = [{ data: i }]),
              (this.chartOptions = { labels: o }),
              this.UpdateDetailedForecastData(t);
          },
          GetDailyData: function (t) {
            (t = t[0]), this.UpdateDetailedForecastData(t);
          },
        },
        methods: {
          UpdateDetailedForecastData: function (t) {
            (this.CurrentData.temp = t.temp),
              (this.CurrentData.pressure = t.pressure),
              (this.CurrentData.humidity = t.humidity),
              (this.CurrentData.sunrise = t.sunrise),
              (this.CurrentData.sunset = t.sunset);
          },
        },
        mounted: function () {
          var t = this,
            a = this.GetDailyData[0];
          this.UpdateDetailedForecastData(a),
            (this.Day0Hours = 24 - new Date().getHours()),
            (this.HourlyData = this.GetHourlyData.slice(0, this.Day0Hours)),
            this.HourlyData.forEach(function (a, o) {
              var i = new Date(1e3 * a.dt).toLocaleTimeString();
              (i = i.slice(0, 2)),
                (i = i.replace(":", "")),
                (t.HourlyData[o].hour = i),
                t.chartOptions.labels.push(i),
                t.series[0].data.push(t.HourlyData[o].temp.toPrecision(2));
            }),
            (this.showGraph = !0);
        },
      },
      x = T,
      G = (o("d2c5"), Object(C["a"])(x, b, k, !1, null, "7dc748f4", null)),
      A = G.exports,
      F = function () {
        var t = this,
          a = t.$createElement,
          i = t._self._c || a;
        return i("div", [
          i(
            "section",
            { staticClass: "DailyForecastSection" },
            t._l(t.GetDailyData, function (a, n) {
              return i(
                "div",
                {
                  key: a,
                  staticClass: "DailyForecastDiv",
                  on: {
                    click: function (o) {
                      return t.ShowDetailedForecast(a, n);
                    },
                  },
                },
                [
                  i("input", {
                    staticClass: "DailyForecastInput",
                    attrs: {
                      type: "radio",
                      name: "active_day",
                      value: "0",
                      checked: "",
                    },
                  }),
                  i("div", { staticClass: "ForecastData" }, [
                    i("p", [t._v(t._s(a.day))]),
                    i("p", [
                      i("span", [t._v(t._s(a.temp.max) + " °")]),
                      i("span", [t._v(t._s(a.temp.min) + " °")]),
                    ]),
                    a.clouds >= 50
                      ? i("img", {
                          staticClass: "ForecastIcon",
                          attrs: { src: o("c192"), alt: "Clouds" },
                        })
                      : t._e(),
                    a.clouds >= 50 ? i("p", [t._v("Clouds")]) : t._e(),
                    a.clouds < 50
                      ? i("img", {
                          staticClass: "ForecastIcon",
                          attrs: { src: o("01d7"), alt: "Clear" },
                        })
                      : t._e(),
                    a.clouds < 50 ? i("p", [t._v("Clear")]) : t._e(),
                  ]),
                ]
              );
            }),
            0
          ),
        ]);
      },
      H = [],
      M = {
        data: function () {
          return { DailyForecast: {}, WeatherData: {}, Location: {} };
        },
        computed: {
          GetData: function () {
            return this.$store.getters.GetWeatherData;
          },
          GetDailyData: function () {
            return this.$store.getters.GetDailyData;
          },
          GetLocation: function () {
            return this.$store.getters.GetLocation;
          },
        },
        methods: {
          ShowDetailedForecast: function (t, a) {
            (this.$store.state.WeatherData = t),
              (this.$store.state.CurrentDay = a);
          },
        },
      },
      j = M,
      L = (o("1d8c"), Object(C["a"])(j, F, H, !1, null, "7543ea34", null)),
      B = L.exports,
      O = {
        name: "Home",
        components:
          ((i = { SearchBar: D, DailyForecast: B, DetailedForecast: A }),
          Object(u["a"])(i, "DailyForecast", B),
          Object(u["a"])(i, "Loading", c.a),
          i),
        data: function () {
          return {
            isLoading: !0,
            lat: "",
            lon: "",
            error: "",
            mount: !1,
            DailyForecast: {},
            HourlyForecast: {},
            show: !1,
            location: {},
            locfound: !1,
          };
        },
        mounted: function () {
          var t = this;
          setTimeout(function () {
            (t.isLoading = !1), (t.show = !0);
          }, 1500),
            navigator.geolocation
              ? navigator.geolocation.getCurrentPosition(function (a) {
                  (t.location = a.coords),
                    (t.locfound = !0),
                    t.$store.commit(_.SET_LOCATION, t.location),
                    t.GetLocationData(t.location),
                    t.GetWeatherData(t.location);
                })
              : (this.error = "Geolocation is not supported.");
        },
        methods: {
          GetWeatherData: function (t) {
            var a = this,
              o =
                "https://api.openweathermap.org/data/2.5/onecall?lat=" +
                t.latitude +
                "&lon=" +
                t.longitude +
                "&exclude=current,minutelyalerts&units=metric&appid=e4c70ce6a6821649a416cb9521d5f4f8";
            m.a.get(o).then(function (t) {
              (a.DailyForecast = t.data.daily),
                (a.HourlyForecast = t.data.hourly),
                a.DailyForecast.forEach(function (t, o) {
                  var i = new Date(1e3 * t.dt).toDateString();
                  (a.DailyForecast[o].day = i.substring(0, 3)),
                    (a.DailyForecast[o].temp.max = t.temp.max.toPrecision(2)),
                    (a.DailyForecast[o].temp.min = t.temp.min.toPrecision(2));
                  var n = new Date(
                      1e3 * a.DailyForecast[o].sunrise
                    ).toLocaleTimeString(),
                    e = new Date(
                      1e3 * a.DailyForecast[o].sunset
                    ).toLocaleTimeString();
                  (a.DailyForecast[o].sunrise = n.substring(0, 4)),
                    (a.DailyForecast[o].sunset = e.substring(0, 4));
                }),
                a.$store.commit(_.SET_DAILY_DATA, a.DailyForecast),
                a.$store.commit(_.SET_HOURLY_DATA, a.HourlyForecast),
                (a.mount = !0);
            });
          },
          GetLocationData: function (t) {
            var a = this,
              o =
                "https://api.openweathermap.org/data/2.5/weather?lat=" +
                t.latitude +
                "&lon=" +
                t.longitude +
                "&units=metric&appid=e4c70ce6a6821649a416cb9521d5f4f8";
            m.a.get(o).then(function (t) {
              var o = t.data,
                i = new Date(1e3 * o.sys.sunrise).toLocaleTimeString(),
                n = new Date(1e3 * o.sys.sunset).toLocaleTimeString();
              (o.sunrise = i),
                (o.sunset = n),
                a.$store.commit(_.SET_WEATHER_DATA, o);
            });
          },
        },
      },
      K = O,
      U = (o("2512"), Object(C["a"])(K, r, l, !1, null, "508fdaf6", null)),
      E = U.exports,
      W = { name: "App", components: { Home: E } },
      R = W,
      $ = (o("034f"), Object(C["a"])(R, e, p, !1, null, null, null)),
      z = $.exports,
      J = o("9483");
    Object(J["a"])("".concat("/", "service-worker.js"), {
      ready: function () {
        console.log(
          "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
        );
      },
      registered: function () {
        console.log("Service worker has been registered.");
      },
      cached: function () {
        console.log("Content has been cached for offline use.");
      },
      updatefound: function () {
        console.log("New content is downloading.");
      },
      updated: function () {
        console.log("New content is available; please refresh.");
      },
      offline: function () {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error: function (t) {
        console.error("Error during service worker registration:", t);
      },
    });
    var Y = o("2f62");
    n["a"].use(Y["a"]);
    var V = new Y["a"].Store({
      state: {
        CurrentLocation: { Latitude: "18.516726", Longitude: "73.856255" },
        WeatherData: {},
        DailyData: {},
        HourlyData: {},
        CurrentDay: 0,
      },
      mutations: {
        SetLocation: function (t, a) {
          t.CurrentLocation = a;
        },
        SetDailyData: function (t, a) {
          t.DailyData = a;
        },
        SetHourlyData: function (t, a) {
          t.HourlyData = a;
        },
        SetWeatherData: function (t, a) {
          t.WeatherData = a;
        },
      },
      actions: {},
      modules: {},
      getters: {
        GetWeatherData: function (t) {
          return t.WeatherData;
        },
        GetLocation: function (t) {
          return t.CurrentLocation;
        },
        GetDailyData: function (t) {
          return t.DailyData;
        },
        GetHourlyData: function (t) {
          return t.HourlyData;
        },
        GetCurrentDay: function (t) {
          return t.CurrentDay;
        },
      },
    });
    n["a"].use(P.a),
      n["a"].component("apexchart", P.a),
      (n["a"].config.productionTip = !1),
      new n["a"]({
        store: V,
        render: function (t) {
          return t(z);
        },
      }).$mount("#app");
  },
  "63f0": function (t, a, o) {
    "use strict";
    o("b27c");
  },
  "85ec": function (t, a, o) {},
  b27c: function (t, a, o) {},
  c192: function (t, a, o) {
    t.exports = o.p + "img/cloudy.ac49ed24.svg";
  },
  d2c5: function (t, a, o) {
    "use strict";
    o("2f4c");
  },
  f900: function (t, a, o) {},
});
//# sourceMappingURL=app.5367ef4f.js.map
