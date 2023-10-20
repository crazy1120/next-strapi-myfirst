"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[4263],{

/***/ 54920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  R: () => (/* reexport */ useAdminUsers)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(40464);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useAdminUsers/useAdminUsers.js



function useAdminUsers(params = {}, queryOptions = {}) {
  const { id = "", ...queryParams } = params;
  const { get } = (0,dist/* useFetchClient */.kY)();
  const { data, isError, isLoading, refetch } = (0,es.useQuery)(
    ["users", id, queryParams],
    async () => {
      const {
        data: { data: data2 }
      } = await get(`/admin/users/${id}`, {
        params: queryParams
      });
      return data2;
    },
    queryOptions
  );
  const users = react.useMemo(() => {
    if (id && data) {
      return [data];
    }
    if (Array.isArray(data?.results)) {
      return data.results;
    }
    return [];
  }, [data, id]);
  return {
    users,
    pagination: react.useMemo(() => data?.pagination ?? null, [data?.pagination]),
    isLoading,
    isError,
    refetch
  };
}

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useAdminUsers/index.js



/***/ }),

/***/ 93552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Users_ProtectedEditPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(49402);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(51447);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/selectors.js
var selectors = __webpack_require__(36364);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(73354);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(27875);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48102);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(74758);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(93415);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(23298);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(74577);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(59082);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.mjs
var ArrowLeft = __webpack_require__(76827);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(71563);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(98934);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(74919);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(47184);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70627);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useAdminUsers/index.js + 1 modules
var useAdminUsers = __webpack_require__(54920);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useEnterprise/index.js + 1 modules
var useEnterprise = __webpack_require__(80902);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 4 modules
var utils = __webpack_require__(96854);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/components/MagicLink/index.js
var components_MagicLink = __webpack_require__(30164);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/components/SelectRoles/index.js
var SelectRoles = __webpack_require__(85243);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/index.js + 3 modules
var users = __webpack_require__(39394);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/EditPage/utils/api.js

const putUser = async (id, body) => {
  const { put } = (0,dist/* getFetchClient */.tg)();
  const { data } = await put(`/admin/users/${id}`, body);
  return data.data;
};


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/EditPage/utils/layout.js
const layout = [
  [
    {
      intlLabel: {
        id: "Auth.form.firstname.label",
        defaultMessage: "First name"
      },
      name: "firstname",
      placeholder: {
        id: "Auth.form.firstname.placeholder",
        defaultMessage: "e.g. Kai"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      },
      required: true
    },
    {
      intlLabel: {
        id: "Auth.form.lastname.label",
        defaultMessage: "Last name"
      },
      name: "lastname",
      placeholder: {
        id: "Auth.form.lastname.placeholder",
        defaultMessage: "e.g. Doe"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      }
    }
  ],
  [
    {
      intlLabel: {
        id: "Auth.form.email.label",
        defaultMessage: "Email"
      },
      name: "email",
      placeholder: {
        id: "Auth.form.email.placeholder",
        defaultMessage: "e.g. kai.doe@strapi.io"
      },
      type: "email",
      size: {
        col: 6,
        xs: 12
      },
      required: true
    },
    {
      intlLabel: {
        id: "Auth.form.username.label",
        defaultMessage: "Username"
      },
      name: "username",
      placeholder: {
        id: "Auth.form.username.placeholder",
        defaultMessage: "e.g. Kai_Doe"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      }
    }
  ],
  [
    {
      intlLabel: {
        id: "global.password",
        defaultMessage: "Password"
      },
      name: "password",
      type: "password",
      size: {
        col: 6,
        xs: 12
      },
      autoComplete: "new-password"
    },
    {
      intlLabel: {
        id: "Auth.form.confirmPassword.label",
        defaultMessage: "Password confirmation"
      },
      name: "confirmPassword",
      type: "password",
      size: {
        col: 6,
        xs: 12
      },
      autoComplete: "new-password"
    }
  ],
  [
    {
      intlLabel: {
        id: "Auth.form.active.label",
        defaultMessage: "Active"
      },
      name: "isActive",
      type: "bool",
      size: {
        col: 6,
        xs: 12
      }
    }
  ]
];
/* harmony default export */ const utils_layout = (layout);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/EditPage/index.js



















const fieldsToPick = ["email", "firstname", "lastname", "username", "isActive", "roles"];
const EditPage = ({ canUpdate }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const {
    params: { id }
  } = (0,react_router/* useRouteMatch */.$B)("/settings/users/:id");
  const { push } = (0,react_router/* useHistory */.k6)();
  const { setUserDisplayName } = (0,dist/* useAppInfo */.L7)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { lockApp, unlockApp } = (0,dist/* useOverlayBlocker */.o1)();
  const MagicLink = (0,useEnterprise/* useEnterprise */.c)(
    components_MagicLink/* MagicLinkCE */.A,
    async () => (await __webpack_require__.e(/* import() */ 566).then(__webpack_require__.bind(__webpack_require__, 20566))).MagicLinkEE
  );
  (0,dist/* useFocusWhenNavigate */.go)();
  const {
    users: [user],
    isLoading: isLoadingAdminUsers
  } = (0,useAdminUsers/* useAdminUsers */.R)(
    { id },
    {
      cacheTime: 0,
      onError(error) {
        const { status } = error.response;
        if (status === 403) {
          toggleNotification({
            type: "info",
            message: {
              id: "notification.permission.not-allowed-read",
              defaultMessage: "You are not allowed to see this document"
            }
          });
          push("/");
        } else {
          toggleNotification({
            type: "warning",
            message: { id: "notification.error", defaultMessage: "An error occured" }
          });
        }
      }
    }
  );
  const handleSubmit = async (body, actions) => {
    lockApp();
    try {
      const data = await putUser(id, omit_default()(body, "confirmPassword"));
      toggleNotification({
        type: "success",
        message: formatMessage({ id: "notification.success.saved", defaultMessage: "Saved" })
      });
      const userInfos = dist/* auth */.I8.getUserInfo();
      if (id.toString() === userInfos.id.toString()) {
        dist/* auth */.I8.setUserInfo(data);
        const userDisplayName = get_default()(body, "username") || (0,utils/* getFullName */.Pp)(body.firstname, body.lastname);
        setUserDisplayName(userDisplayName);
      }
      actions.setValues(pick_default()(body, fieldsToPick));
    } catch (err) {
      const errors = (0,utils/* formatAPIErrors */.Iz)(err.response.data);
      const fieldsErrors = Object.keys(errors).reduce((acc, current) => {
        acc[current] = errors[current].id;
        return acc;
      }, {});
      actions.setErrors(fieldsErrors);
      toggleNotification({
        type: "warning",
        message: get_default()(err, "response.data.error.message", "notification.error")
      });
    }
    unlockApp();
  };
  const isLoading = isLoadingAdminUsers || !MagicLink;
  const headerLabel = isLoading ? { id: "app.containers.Users.EditPage.header.label-loading", defaultMessage: "Edit user" } : { id: "app.containers.Users.EditPage.header.label", defaultMessage: "Edit {name}" };
  const initialData = Object.keys(pick_default()(user, fieldsToPick)).reduce((acc, current) => {
    if (current === "roles") {
      acc[current] = (user?.roles || []).map(({ id: id2 }) => id2);
      return acc;
    }
    acc[current] = user?.[current];
    return acc;
  }, {});
  const headerLabelName = initialData.username || (0,utils/* getFullName */.Pp)(initialData.firstname, initialData.lastname);
  const title = formatMessage(headerLabel, { name: headerLabelName });
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": "true" }, /* @__PURE__ */ react.createElement(dist/* SettingsPageTitle */.SL, { name: "Users" }), /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.T,
      {
        primaryAction: /* @__PURE__ */ react.createElement(Button/* Button */.z, { disabled: true, startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null), type: "button", size: "L" }, formatMessage({ id: "global.save", defaultMessage: "Save" })),
        title,
        navigationAction: /* @__PURE__ */ react.createElement(dist/* Link */.rU, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null), to: "/settings/users?pageSize=10&page=1&sort=firstname" }, formatMessage({
          id: "global.back",
          defaultMessage: "Back"
        }))
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null)));
  }
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(dist/* SettingsPageTitle */.SL, { name: "Users" }), /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.J9,
    {
      onSubmit: handleSubmit,
      initialValues: initialData,
      validateOnChange: false,
      validationSchema: users/* editValidation */.YM
    },
    ({ errors, values, handleChange, isSubmitting, dirty }) => {
      return /* @__PURE__ */ react.createElement(dist/* Form */.l0, null, /* @__PURE__ */ react.createElement(
        HeaderLayout/* HeaderLayout */.T,
        {
          primaryAction: /* @__PURE__ */ react.createElement(
            Button/* Button */.z,
            {
              disabled: isSubmitting || !canUpdate ? true : !dirty,
              startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
              loading: isSubmitting,
              type: "submit",
              size: "L"
            },
            formatMessage({ id: "global.save", defaultMessage: "Save" })
          ),
          title,
          navigationAction: /* @__PURE__ */ react.createElement(
            dist/* Link */.rU,
            {
              startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null),
              to: "/settings/users?pageSize=10&page=1&sort=firstname"
            },
            formatMessage({
              id: "global.back",
              defaultMessage: "Back"
            })
          )
        }
      ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, user?.registrationToken && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 6 }, /* @__PURE__ */ react.createElement(MagicLink, { registrationToken: user.registrationToken })), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 7 }, /* @__PURE__ */ react.createElement(
        Box/* Box */.x,
        {
          background: "neutral0",
          hasRadius: true,
          shadow: "filterShadow",
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 7,
          paddingRight: 7
        },
        /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
          id: "app.components.Users.ModalCreateBody.block-title.details",
          defaultMessage: "Details"
        })), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 5 }, utils_layout.map((row) => {
          return row.map((input) => {
            return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { key: input.name, ...input.size }, /* @__PURE__ */ react.createElement(
              dist/* GenericInput */.jm,
              {
                ...input,
                disabled: !canUpdate,
                error: errors[input.name],
                onChange: handleChange,
                value: values[input.name] || ""
              }
            ));
          });
        })))
      ), /* @__PURE__ */ react.createElement(
        Box/* Box */.x,
        {
          background: "neutral0",
          hasRadius: true,
          shadow: "filterShadow",
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 7,
          paddingRight: 7
        },
        /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
          id: "global.roles",
          defaultMessage: "User's role"
        })), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 5 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
          SelectRoles/* default */.Z,
          {
            disabled: !canUpdate,
            error: errors.roles,
            onChange: handleChange,
            value: values.roles
          }
        ))))
      ))));
    }
  ));
};
EditPage.propTypes = {
  canUpdate: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const Users_EditPage = (EditPage);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ProtectedEditPage/index.js






const ProtectedEditPage = () => {
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const permissions = (0,es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  const memoizedPermissions = react.useMemo(
    () => ({
      read: permissions.settings.users.read,
      update: permissions.settings.users.update
    }),
    [permissions.settings.users]
  );
  const {
    isLoading,
    allowedActions: { canRead, canUpdate }
  } = (0,dist/* useRBAC */.ss)(memoizedPermissions);
  const { state } = (0,react_router/* useLocation */.TH)();
  const from = state?.from ?? "/";
  (0,react.useEffect)(() => {
    if (!isLoading) {
      if (!canRead && !canUpdate) {
        toggleNotification({
          type: "info",
          message: {
            id: "notification.permission.not-allowed-read",
            defaultMessage: "You are not allowed to see this document"
          }
        });
      }
    }
  }, [isLoading, canRead, canUpdate, toggleNotification]);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null);
  }
  if (!canRead && !canUpdate) {
    return /* @__PURE__ */ react.createElement(react_router/* Redirect */.l_, { to: from });
  }
  return /* @__PURE__ */ react.createElement(Users_EditPage, { canUpdate });
};
/* harmony default export */ const Users_ProtectedEditPage = (ProtectedEditPage);


/***/ }),

/***/ 6324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4987);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78031);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70627);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61020);






const MagicLinkWrapper = ({ children, target }) => {
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useNotification */ .lm)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  const { copy } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useClipboard */ .VP)();
  const copyLabel = formatMessage({
    id: "app.component.CopyToClipboard.label",
    defaultMessage: "Copy to clipboard"
  });
  const handleClick = async () => {
    const didCopy = await copy(target);
    if (didCopy) {
      toggleNotification({ type: "info", message: { id: "notification.link-copied" } });
    }
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .ContentBox */ .Y_,
    {
      endAction: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .IconButton */ .h, { label: copyLabel, noBorder: true, icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, null), onClick: handleClick }),
      title: target,
      titleEllipsis: true,
      subtitle: children,
      icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { fontSize: 32 } }, "\u2709\uFE0F"),
      iconBackground: "neutral100"
    }
  );
};
MagicLinkWrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().element), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)]).isRequired,
  target: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicLinkWrapper);


/***/ }),

/***/ 30164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ MagicLinkCE)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70627);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61020);
/* harmony import */ var _core_utils_basename__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95651);
/* harmony import */ var _MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6324);





const MagicLinkCE = ({ registrationToken }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
  const target = `${window.location.origin}${_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z}auth/register?registrationToken=${registrationToken}`;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, { target }, formatMessage({
    id: "app.components.Users.MagicLink.connect",
    defaultMessage: "Copy and share this link to give access to this user"
  }));
};
MagicLinkCE.defaultProps = {
  registrationToken: ""
};
MagicLinkCE.propTypes = {
  registrationToken: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};


/***/ }),

/***/ 85243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5627);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78955);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34547);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70627);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61020);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40464);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37652);








const rotation = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__/* .keyframes */ .F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
const LoadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.div`
  animation: ${rotation} 2s infinite linear;
`;
const Loader = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadingWrapper, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, null));
const fetchData = async () => {
  const { get } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .getFetchClient */ .tg)();
  const { data } = await get("/admin/roles");
  return data.data;
};
const SelectRoles = ({ disabled, error, onChange, value }) => {
  const { status, data } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(["roles"], fetchData, {
    staleTime: 5e4
  });
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const label = formatMessage({
    id: "app.components.Users.ModalCreateBody.block-title.roles",
    defaultMessage: "User's roles"
  });
  const hint = formatMessage({
    id: "app.components.Users.ModalCreateBody.block-title.roles.description",
    defaultMessage: "A user can have one or several roles"
  });
  const placeholder = formatMessage({
    id: "app.components.Select.placeholder",
    defaultMessage: "Select"
  });
  const startIcon = status === "loading" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Loader, null) : void 0;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Select */ .P,
    {
      id: "roles",
      disabled,
      error: errorMessage,
      hint,
      label,
      name: "roles",
      onChange: (v) => {
        onChange({ target: { name: "roles", value: v } });
      },
      placeholder,
      multi: true,
      startIcon,
      value: value.map((v) => v.toString()),
      withTags: true,
      required: true
    },
    (data || []).map((role) => {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Option */ .W, { key: role.id, value: role.id.toString() }, formatMessage({
        id: `global.${role.code}`,
        defaultMessage: role.name
      }));
    })
  );
};
SelectRoles.defaultProps = {
  disabled: false,
  error: void 0
};
SelectRoles.propTypes = {
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  error: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func).isRequired,
  value: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().array).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectRoles);


/***/ }),

/***/ 39394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  YM: () => (/* reexport */ edit),
  Rw: () => (/* reexport */ profile)
});

// UNUSED EXPORTS: rolesValidation

// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var es = __webpack_require__(47853);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/profile.js


const commonUserSchema = {
  firstname: es/* string */.Z_().trim().required(dist/* translatedErrors */.I0.required),
  lastname: es/* string */.Z_(),
  email: es/* string */.Z_().email(dist/* translatedErrors */.I0.email).lowercase().required(dist/* translatedErrors */.I0.required),
  username: es/* string */.Z_().nullable(),
  password: es/* string */.Z_().min(8, dist/* translatedErrors */.I0.minLength).matches(/[a-z]/, "components.Input.error.contain.lowercase").matches(/[A-Z]/, "components.Input.error.contain.uppercase").matches(/\d/, "components.Input.error.contain.number"),
  confirmPassword: es/* string */.Z_().min(8, dist/* translatedErrors */.I0.minLength).oneOf([es/* ref */.iH("password"), null], "components.Input.error.password.noMatch").when("password", (password, passSchema) => {
    return password ? passSchema.required(dist/* translatedErrors */.I0.required) : passSchema;
  })
};
const schema = {
  ...commonUserSchema,
  currentPassword: es/* string */.Z_().when(["password", "confirmPassword"], (password, confirmPassword, passSchema) => {
    return password || confirmPassword ? passSchema.required(dist/* translatedErrors */.I0.required) : passSchema;
  }),
  preferedLanguage: es/* string */.Z_().nullable()
};
/* harmony default export */ const profile = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/roles.js


const roles_schema = {
  roles: es/* array */.IX().min(1, dist/* translatedErrors */.I0.required).required(dist/* translatedErrors */.I0.required)
};
/* harmony default export */ const roles = (roles_schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/edit.js



const edit_schema = es/* object */.Ry().shape({
  ...commonUserSchema,
  isActive: es/* bool */.Xg(),
  ...roles
});
/* harmony default export */ const edit = (edit_schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/index.js





/***/ }),

/***/ 76827:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);

const e = (r) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...r, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    d: "M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"
  }
) }), a = e;



/***/ })

}]);