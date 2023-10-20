"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[4816],{

/***/ 81524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24201);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49402);
/* harmony import */ var _App_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36364);
/* harmony import */ var _EditView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43467);





const ProtectedTransferTokenCreateView = () => {
  const permissions = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__/* .useSelector */ .v9)(_App_selectors__WEBPACK_IMPORTED_MODULE_3__/* .selectAdminPermissions */ ._);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .CheckPagePermissions */ .O4, { permissions: permissions.settings["transfer-tokens"].create }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditView__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedTransferTokenCreateView);


/***/ })

}]);