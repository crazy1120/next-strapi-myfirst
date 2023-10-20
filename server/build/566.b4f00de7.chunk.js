"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[566],{

/***/ 20566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MagicLinkEE: () => (/* binding */ MagicLinkEE)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70627);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61020);
/* harmony import */ var _admin_src_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95651);
/* harmony import */ var _admin_src_pages_SettingsPage_pages_Users_components_MagicLink_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6324);





const MagicLinkEE = ({ registrationToken }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
  if (registrationToken) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _admin_src_pages_SettingsPage_pages_Users_components_MagicLink_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
      {
        target: `${window.location.origin}${_admin_src_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z}auth/register?registrationToken=${registrationToken}`
      },
      formatMessage({
        id: "app.components.Users.MagicLink.connect",
        defaultMessage: "Copy and share this link to give access to this user"
      })
    );
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_admin_src_pages_SettingsPage_pages_Users_components_MagicLink_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, { target: `${window.location.origin}${_admin_src_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z}auth/login` }, formatMessage({
    id: "app.components.Users.MagicLink.connect.sso",
    defaultMessage: "Send this link to the user, the first login can be made via a SSO provider."
  }));
};
MagicLinkEE.defaultProps = {
  registrationToken: ""
};
MagicLinkEE.propTypes = {
  registrationToken: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};


/***/ })

}]);