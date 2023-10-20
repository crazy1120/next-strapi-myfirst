(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[4972],{

/***/ 14972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ROUTES_EE: () => (/* binding */ ROUTES_EE)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/js-cookie/src/js.cookie.js
var js_cookie = __webpack_require__(77228);
var js_cookie_default = /*#__PURE__*/__webpack_require__.n(js_cookie);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(51447);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/AuthResponse/index.js





const AuthResponse = () => {
  const {
    params: { authResponse }
  } = (0,react_router/* useRouteMatch */.$B)("/auth/login/:authResponse");
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { push } = (0,react_router/* useHistory */.k6)();
  const formatMessageRef = (0,react.useRef)(formatMessage);
  let redirectToOops = (0,react.useCallback)(() => {
    push(
      `/auth/oops?info=${encodeURIComponent(
        formatMessageRef.current({
          id: "Auth.form.button.login.providers.error",
          defaultMessage: "We cannot connect you through the selected provider."
        })
      )}`
    );
  }, [push]);
  const { get } = (0,dist/* useFetchClient */.kY)();
  const fetchUserInfo = (0,react.useCallback)(async () => {
    try {
      const jwtToken = js_cookie_default().get("jwtToken");
      dist/* auth */.I8.clearAppStorage();
      if (jwtToken) {
        dist/* auth */.I8.setToken(jwtToken, true);
        const requestUrl = "/admin/users/me";
        const {
          data: { data }
        } = await get(requestUrl);
        dist/* auth */.I8.setUserInfo(data, true);
        js_cookie_default().remove("jwtToken");
        push("/auth/login");
      }
    } catch (e) {
      redirectToOops();
    }
  }, [get, push, redirectToOops]);
  (0,react.useEffect)(() => {
    if (authResponse === "error") {
      redirectToOops();
    }
    if (authResponse === "success") {
      fetchUserInfo();
    }
  }, [authResponse, fetchUserInfo, redirectToOops]);
  return /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null);
};
/* harmony default export */ const pages_AuthResponse = ((/* unused pure expression or super */ null && (AuthResponse)));

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/App/constants.js

const ROUTES_EE = [
  {
    Component: () => ({ default: AuthResponse }),
    to: "/auth/login/:authResponse",
    exact: true
  }
];


/***/ }),

/***/ 77228:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;
(function(factory) {
  var registeredInModuleLoader;
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    registeredInModuleLoader = true;
  }
  if (true) {
    module.exports = factory();
    registeredInModuleLoader = true;
  }
  if (!registeredInModuleLoader) {
    var OldCookies = window.Cookies;
    var api = window.Cookies = factory();
    api.noConflict = function() {
      window.Cookies = OldCookies;
      return api;
    };
  }
})(function() {
  function extend() {
    var i = 0;
    var result = {};
    for (; i < arguments.length; i++) {
      var attributes = arguments[i];
      for (var key in attributes) {
        result[key] = attributes[key];
      }
    }
    return result;
  }
  function decode(s) {
    return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  }
  function init(converter) {
    function api() {
    }
    function set(key, value, attributes) {
      if (typeof document === "undefined") {
        return;
      }
      attributes = extend({
        path: "/"
      }, api.defaults, attributes);
      if (typeof attributes.expires === "number") {
        attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e5);
      }
      attributes.expires = attributes.expires ? attributes.expires.toUTCString() : "";
      try {
        var result = JSON.stringify(value);
        if (/^[\{\[]/.test(result)) {
          value = result;
        }
      } catch (e) {
      }
      value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
      key = encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
      var stringifiedAttributes = "";
      for (var attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue;
        }
        stringifiedAttributes += "; " + attributeName;
        if (attributes[attributeName] === true) {
          continue;
        }
        stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
      }
      return document.cookie = key + "=" + value + stringifiedAttributes;
    }
    function get(key, json) {
      if (typeof document === "undefined") {
        return;
      }
      var jar = {};
      var cookies = document.cookie ? document.cookie.split("; ") : [];
      var i = 0;
      for (; i < cookies.length; i++) {
        var parts = cookies[i].split("=");
        var cookie = parts.slice(1).join("=");
        if (!json && cookie.charAt(0) === '"') {
          cookie = cookie.slice(1, -1);
        }
        try {
          var name = decode(parts[0]);
          cookie = (converter.read || converter)(cookie, name) || decode(cookie);
          if (json) {
            try {
              cookie = JSON.parse(cookie);
            } catch (e) {
            }
          }
          jar[name] = cookie;
          if (key === name) {
            break;
          }
        } catch (e) {
        }
      }
      return key ? jar[key] : jar;
    }
    api.set = set;
    api.get = function(key) {
      return get(
        key,
        false
        /* read as raw */
      );
    };
    api.getJSON = function(key) {
      return get(
        key,
        true
        /* read as json */
      );
    };
    api.remove = function(key, attributes) {
      set(key, "", extend(attributes, {
        expires: -1
      }));
    };
    api.defaults = {};
    api.withConverter = init;
    return api;
  }
  return init(function() {
  });
});


/***/ })

}]);