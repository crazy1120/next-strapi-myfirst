(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[5481],{

/***/ 1350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useLicenseLimitNotification)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24201);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69439);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61020);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51447);
/* harmony import */ var _useLicenseLimits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75021);






const STORAGE_KEY_PREFIX = "strapi-notification-seat-limit";
const BILLING_STRAPI_CLOUD_URL = "https://cloud.strapi.io/profile/billing";
const BILLING_SELF_HOSTED_URL = "https://strapi.io/billing/request-seats";
const useLicenseLimitNotification = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
  const { license, isError, isLoading } = (0,_useLicenseLimits__WEBPACK_IMPORTED_MODULE_3__/* .useLicenseLimits */ .q)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useNotification */ .lm)();
  const { pathname } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__/* .useLocation */ .TH)();
  const { enforcementUserCount, permittedSeats, licenseLimitStatus, isHostedOnStrapiCloud } = license;
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (isError || isLoading) {
      return;
    }
    const shouldDisplayNotification = !lodash_isNil__WEBPACK_IMPORTED_MODULE_2___default()(permittedSeats) && !window.sessionStorage.getItem(`${STORAGE_KEY_PREFIX}-${pathname}`) && (licenseLimitStatus === "AT_LIMIT" || licenseLimitStatus === "OVER_LIMIT");
    let notificationType;
    if (licenseLimitStatus === "OVER_LIMIT") {
      notificationType = "warning";
    } else if (licenseLimitStatus === "AT_LIMIT") {
      notificationType = "softWarning";
    }
    if (shouldDisplayNotification) {
      toggleNotification({
        type: notificationType,
        message: formatMessage(
          {
            id: "notification.ee.warning.over-.message",
            defaultMessage: "Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."
          },
          { licenseLimitStatus }
        ),
        title: formatMessage(
          {
            id: "notification.ee.warning.at-seat-limit.title",
            defaultMessage: "{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"
          },
          {
            licenseLimitStatus,
            enforcementUserCount,
            permittedSeats
          }
        ),
        link: {
          url: isHostedOnStrapiCloud ? BILLING_STRAPI_CLOUD_URL : BILLING_SELF_HOSTED_URL,
          label: formatMessage(
            {
              id: "notification.ee.warning.seat-limit.link",
              defaultMessage: "{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"
            },
            { isHostedOnStrapiCloud }
          )
        },
        blockTransition: true,
        onClose() {
          window.sessionStorage.setItem(`${STORAGE_KEY_PREFIX}-${pathname}`, "true");
        }
      });
    }
  }, [
    toggleNotification,
    license,
    pathname,
    formatMessage,
    isLoading,
    permittedSeats,
    licenseLimitStatus,
    enforcementUserCount,
    isHostedOnStrapiCloud,
    isError
  ]);
};


/***/ }),

/***/ 75021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ useLicenseLimits)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24201);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40464);



function useLicenseLimits({ enabled } = { enabled: true }) {
  const { get } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useFetchClient */ .kY)();
  const { data, isError, isLoading } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(
    ["ee", "license-limit-info"],
    async () => {
      const {
        data: { data: data2 }
      } = await get("/admin/license-limit-information");
      return data2;
    },
    {
      enabled
    }
  );
  const license = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => data ?? {}, [data]);
  const getFeature = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (name) => {
      const feature = (license?.features ?? []).find((feature2) => feature2.name === name);
      return feature?.options ?? {};
    },
    [license?.features]
  );
  return { license, getFeature, isError, isLoading };
}


/***/ }),

/***/ 17403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserListPageEE: () => (/* binding */ UserListPageEE)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);
/* harmony import */ var _admin_src_pages_SettingsPage_pages_Users_ListPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61611);
/* harmony import */ var _hooks_useLicenseLimitNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1350);



function UserListPageEE() {
  (0,_hooks_useLicenseLimitNotification__WEBPACK_IMPORTED_MODULE_2__/* .useLicenseLimitNotification */ .a)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_admin_src_pages_SettingsPage_pages_Users_ListPage__WEBPACK_IMPORTED_MODULE_1__/* .UserListPageCE */ .W, null);
}


/***/ }),

/***/ 69439:
/***/ ((module) => {

function isNil(value) {
  return value == null;
}
module.exports = isNil;


/***/ })

}]);