"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[9329],{

/***/ 99329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FORM_INITIAL_VALUES: () => (/* binding */ FORM_INITIAL_VALUES),
/* harmony export */   ROLE_LAYOUT: () => (/* binding */ ROLE_LAYOUT)
/* harmony export */ });
const FORM_INITIAL_VALUES = {
  ...window.strapi.features.isEnabled(window.strapi.features.SSO) ? {
    useSSORegistration: true
  } : {}
};
const ROLE_LAYOUT = [
  ...window.strapi.features.isEnabled(window.strapi.features.SSO) ? [
    {
      intlLabel: {
        id: "Settings.permissions.users.form.sso",
        defaultMessage: "Connect with SSO"
      },
      hint: {
        id: "Settings.permissions.users.form.sso.description",
        defaultMessage: "When enabled (ON), users can login via SSO"
      },
      name: "useSSORegistration",
      type: "bool",
      size: {
        col: 6,
        xs: 12
      }
    }
  ] : []
];


/***/ })

}]);