"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[1470],{

/***/ 51470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES_EE: () => (/* binding */ ROUTES_EE)
/* harmony export */ });
const ROUTES_EE = [
  ...window.strapi.features.isEnabled(window.strapi.features.AUDIT_LOGS) ? [
    {
      async Component() {
        const component = await __webpack_require__.e(/* import() | audit-logs-settings-page */ 2812).then(__webpack_require__.bind(__webpack_require__, 67220));
        return component;
      },
      to: "/settings/audit-logs",
      exact: true
    }
  ] : [],
  ...window.strapi.features.isEnabled(window.strapi.features.REVIEW_WORKFLOWS) ? [
    {
      async Component() {
        const component = await __webpack_require__.e(/* import() | review-workflows-settings-list-view */ 349).then(__webpack_require__.bind(__webpack_require__, 26259));
        return component;
      },
      to: "/settings/review-workflows",
      exact: true
    },
    {
      async Component() {
        const component = await Promise.all(/* import() | review-workflows-settings-create-view */[__webpack_require__.e(7649), __webpack_require__.e(7970), __webpack_require__.e(8936)]).then(__webpack_require__.bind(__webpack_require__, 36318));
        return component;
      },
      to: "/settings/review-workflows/create",
      exact: true
    },
    {
      async Component() {
        const component = await Promise.all(/* import() | review-workflows-settings-edit-view */[__webpack_require__.e(7649), __webpack_require__.e(7970), __webpack_require__.e(4409)]).then(__webpack_require__.bind(__webpack_require__, 28104));
        return component;
      },
      to: "/settings/review-workflows/:workflowId",
      exact: true
    }
  ] : [],
  ...window.strapi.features.isEnabled(window.strapi.features.SSO) ? [
    {
      async Component() {
        const component = await __webpack_require__.e(/* import() | sso-settings-page */ 302).then(__webpack_require__.bind(__webpack_require__, 29388));
        return component;
      },
      to: "/settings/single-sign-on",
      exact: true
    }
  ] : []
];


/***/ })

}]);