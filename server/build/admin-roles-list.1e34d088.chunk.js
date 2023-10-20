"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[3455],{

/***/ 51754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ useAdminRoles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24201);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61020);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40464);




const useAdminRoles = (params = {}, queryOptions = {}) => {
  const { id = "", ...queryParams } = params;
  const { get } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useFetchClient */ .kY)();
  const { locale } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
  const formatter = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useCollator */ .Xe)(locale, {
    sensitivity: "base"
  });
  const { data, error, isError, isLoading, refetch } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(
    ["roles", id, queryParams],
    async () => {
      const { data: data2 } = await get(`/admin/roles/${id ?? ""}`, {
        params: queryParams
      });
      return data2;
    },
    queryOptions
  );
  const roles = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    let roles2 = [];
    if (id && data) {
      roles2 = [data.data];
    } else if (Array.isArray(data?.data)) {
      roles2 = data.data;
    }
    return [...roles2].sort((a, b) => formatter.compare(a.name, b.name));
  }, [data, id, formatter]);
  return {
    roles,
    error,
    isError,
    isLoading,
    refetch
  };
};


/***/ }),

/***/ 7513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Roles_ProtectedListPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(49402);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/selectors.js
var selectors = __webpack_require__(36364);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(73354);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(27875);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48102);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ActionLayout.mjs
var ActionLayout = __webpack_require__(37472);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(74758);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.mjs
var Table = __webpack_require__(70774);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/TFooter.mjs
var TFooter = __webpack_require__(38566);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.mjs
var Thead = __webpack_require__(38101);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.mjs
var Tr = __webpack_require__(93153);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.mjs
var Cell = __webpack_require__(50086);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(10989);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.mjs
var Tbody = __webpack_require__(86967);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Duplicate.mjs
var Duplicate = __webpack_require__(78031);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.mjs
var Pencil = __webpack_require__(26784);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.mjs
var Trash = __webpack_require__(78665);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.mjs
var Plus = __webpack_require__(36938);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(51447);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useAdminRoles/index.js
var useAdminRoles = __webpack_require__(51754);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/ListPage/components/EmptyRole/index.js
/* harmony default export */ const EmptyRole = (() => "todo empty role");

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(93415);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(4987);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70627);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/ListPage/components/RoleRow/index.js





const RoleRow = ({ id, name, description, usersCount, icons, rowIndex, canUpdate }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [, editObject] = icons;
  const usersCountText = formatMessage(
    {
      id: `Roles.RoleRow.user-count`,
      defaultMessage: "{number, plural, =0 {#  user} one {#  user} other {# users}}"
    },
    { number: usersCount }
  );
  return /* @__PURE__ */ react.createElement(
    Tr.Tr,
    {
      "aria-rowindex": rowIndex,
      key: id,
      ...canUpdate ? (0,dist/* onRowClick */.X7)({
        fn: editObject.onClick
      }) : {}
    },
    /* @__PURE__ */ react.createElement(Cell.Td, { maxWidth: (0,dist/* pxToRem */.Q1)(130) }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { ellipsis: true, textColor: "neutral800" }, name)),
    /* @__PURE__ */ react.createElement(Cell.Td, { maxWidth: (0,dist/* pxToRem */.Q1)(250) }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { ellipsis: true, textColor: "neutral800" }, description)),
    /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, usersCountText)),
    /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "flex-end", ...dist/* stopPropagation */.UW }, icons.map(
      (icon, i) => icon ? /* @__PURE__ */ react.createElement(Box/* Box */.x, { key: icon.label, paddingLeft: i === 0 ? 0 : 1 }, /* @__PURE__ */ react.createElement(IconButton/* IconButton */.h, { onClick: icon.onClick, label: icon.label, noBorder: true, icon: icon.icon })) : null
    )))
  );
};
RoleRow.propTypes = {
  id: (prop_types_default()).number.isRequired,
  name: (prop_types_default()).string.isRequired,
  description: (prop_types_default()).string.isRequired,
  usersCount: (prop_types_default()).number.isRequired,
  icons: (prop_types_default()).array.isRequired,
  rowIndex: (prop_types_default()).number.isRequired,
  canUpdate: (prop_types_default()).bool
};
RoleRow.defaultProps = {
  canUpdate: false
};
/* harmony default export */ const components_RoleRow = (RoleRow);

// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(61815);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/ListPage/reducer.js

const initialState = {
  roleToDelete: null,
  showModalConfirmButtonLoading: false,
  shouldRefetchData: false
};
const reducer = (state, action) => (0,immer_esm/* default */.ZP)(state, (draftState) => {
  switch (action.type) {
    case "ON_REMOVE_ROLES": {
      draftState.showModalConfirmButtonLoading = true;
      break;
    }
    case "ON_REMOVE_ROLES_SUCCEEDED": {
      draftState.shouldRefetchData = true;
      draftState.roleToDelete = null;
      break;
    }
    case "RESET_DATA_TO_DELETE": {
      draftState.shouldRefetchData = false;
      draftState.roleToDelete = null;
      draftState.showModalConfirmButtonLoading = false;
      break;
    }
    case "SET_ROLE_TO_DELETE": {
      draftState.roleToDelete = action.id;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const ListPage_reducer = (reducer);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/ListPage/index.js












const useRoleActions = ({ canCreate, canDelete, canUpdate, refetchRoles }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { formatAPIError } = (0,dist/* useAPIErrorHandler */.So)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const [isWarningDeleteAllOpened, setIsWarningDeleteAllOpenend] = (0,react.useState)(false);
  const { push } = (0,react_router/* useHistory */.k6)();
  const [{ selectedRoles, showModalConfirmButtonLoading, roleToDelete }, dispatch] = (0,react.useReducer)(
    ListPage_reducer,
    initialState
  );
  const { post } = (0,dist/* getFetchClient */.tg)();
  const handleDeleteData = async () => {
    try {
      dispatch({
        type: "ON_REMOVE_ROLES"
      });
      await post("/admin/roles/batch-delete", {
        ids: [roleToDelete]
      });
      await refetchRoles();
      dispatch({
        type: "RESET_DATA_TO_DELETE"
      });
    } catch (error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
    }
    handleToggleModal();
  };
  const onRoleDuplicate = (0,react.useCallback)(
    (id) => {
      push(`/settings/roles/duplicate/${id}`);
    },
    [push]
  );
  const handleNewRoleClick = () => push("/settings/roles/new");
  const onRoleRemove = (0,react.useCallback)((roleId) => {
    dispatch({
      type: "SET_ROLE_TO_DELETE",
      id: roleId
    });
    handleToggleModal();
  }, []);
  const handleToggleModal = () => setIsWarningDeleteAllOpenend((prev) => !prev);
  const handleGoTo = (0,react.useCallback)(
    (id) => {
      push(`/settings/roles/${id}`);
    },
    [push]
  );
  const handleClickDelete = (0,react.useCallback)(
    (e, role) => {
      e.preventDefault();
      e.stopPropagation();
      if (role.usersCount) {
        toggleNotification({
          type: "info",
          message: { id: "Roles.ListPage.notification.delete-not-allowed" }
        });
      } else {
        onRoleRemove(role.id);
      }
    },
    [toggleNotification, onRoleRemove]
  );
  const handleClickDuplicate = (0,react.useCallback)(
    (e, role) => {
      e.preventDefault();
      e.stopPropagation();
      onRoleDuplicate(role.id);
    },
    [onRoleDuplicate]
  );
  const getIcons = (0,react.useCallback)(
    (role) => [
      ...canCreate ? [
        {
          onClick: (e) => handleClickDuplicate(e, role),
          label: formatMessage({ id: "app.utils.duplicate", defaultMessage: "Duplicate" }),
          icon: /* @__PURE__ */ react.createElement(Duplicate/* default */.Z, null)
        }
      ] : [],
      ...canUpdate ? [
        {
          onClick: () => handleGoTo(role.id),
          label: formatMessage({ id: "app.utils.edit", defaultMessage: "Edit" }),
          icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null)
        }
      ] : [],
      ...canDelete ? [
        {
          onClick: (e) => handleClickDelete(e, role),
          label: formatMessage({ id: "global.delete", defaultMessage: "Delete" }),
          icon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null)
        }
      ] : []
    ],
    [
      formatMessage,
      handleClickDelete,
      handleClickDuplicate,
      handleGoTo,
      canCreate,
      canUpdate,
      canDelete
    ]
  );
  return {
    handleNewRoleClick,
    getIcons,
    selectedRoles,
    isWarningDeleteAllOpened,
    showModalConfirmButtonLoading,
    handleToggleModal,
    handleDeleteData
  };
};
const RoleListPage = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  (0,dist/* useFocusWhenNavigate */.go)();
  const permissions = (0,es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  const [{ query }] = (0,dist/* useQueryParams */.Kx)();
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canCreate, canDelete, canRead, canUpdate }
  } = (0,dist/* useRBAC */.ss)(permissions.settings.roles);
  const {
    roles,
    isLoading,
    refetch: refetchRoles
  } = (0,useAdminRoles/* useAdminRoles */.F)(
    { filters: query?._q ? { name: { $containsi: query._q } } : void 0 },
    {
      cacheTime: 0,
      enabled: !isLoadingForPermissions && canRead
    }
  );
  const {
    handleNewRoleClick,
    getIcons,
    isWarningDeleteAllOpened,
    showModalConfirmButtonLoading,
    handleToggleModal,
    handleDeleteData
  } = useRoleActions({ refetchRoles, canCreate, canDelete, canUpdate });
  const rowCount = roles.length + 1;
  const colCount = 6;
  if (isLoadingForPermissions) {
    return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null));
  }
  const title = formatMessage({
    id: "global.roles",
    defaultMessage: "roles"
  });
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(dist/* SettingsPageTitle */.SL, { name: "Roles" }), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      primaryAction: canCreate ? /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: handleNewRoleClick, startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null), size: "S" }, formatMessage({
        id: "Settings.roles.list.button.add",
        defaultMessage: "Add new role"
      })) : null,
      title,
      subtitle: formatMessage({
        id: "Settings.roles.list.description",
        defaultMessage: "List of roles"
      }),
      as: "h2"
    }
  ), canRead && /* @__PURE__ */ react.createElement(
    ActionLayout/* ActionLayout */.Z,
    {
      startActions: /* @__PURE__ */ react.createElement(
        dist/* SearchURLQuery */.m,
        {
          label: formatMessage(
            { id: "app.component.search.label", defaultMessage: "Search for {target}" },
            { target: title }
          )
        }
      )
    }
  ), canRead && /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(
    Table/* Table */.i,
    {
      colCount,
      rowCount,
      footer: canCreate ? /* @__PURE__ */ react.createElement(TFooter/* TFooter */.c, { onClick: handleNewRoleClick, icon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null) }, formatMessage({
        id: "Settings.roles.list.button.add",
        defaultMessage: "Add new role"
      })) : null
    },
    /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, { "aria-rowindex": 1 }, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "global.name",
      defaultMessage: "Name"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "global.description",
      defaultMessage: "Description"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "global.users",
      defaultMessage: "Users"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, formatMessage({
      id: "global.actions",
      defaultMessage: "Actions"
    }))))),
    /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, roles?.map((role, index) => /* @__PURE__ */ react.createElement(
      components_RoleRow,
      {
        key: role.id,
        id: role.id,
        name: role.name,
        description: role.description,
        usersCount: role.usersCount,
        icons: getIcons(role),
        rowIndex: index + 2,
        canUpdate
      }
    )))
  ), !rowCount && !isLoading && /* @__PURE__ */ react.createElement(EmptyRole, null)), /* @__PURE__ */ react.createElement(
    dist/* ConfirmDialog */.QH,
    {
      isOpen: isWarningDeleteAllOpened,
      onConfirm: handleDeleteData,
      isConfirmButtonLoading: showModalConfirmButtonLoading,
      onToggleDialog: handleToggleModal
    }
  ));
};
/* harmony default export */ const ListPage = (RoleListPage);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Roles/ProtectedListPage/index.js





const ProtectedListPage = () => {
  const permissions = (0,es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  return /* @__PURE__ */ react.createElement(dist/* CheckPagePermissions */.O4, { permissions: permissions.settings.roles.main }, /* @__PURE__ */ react.createElement(ListPage, null));
};
/* harmony default export */ const Roles_ProtectedListPage = (ProtectedListPage);


/***/ }),

/***/ 37472:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ActionLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10701);


const ActionLayout = ({ startActions, endActions }) => {
  if (!startActions && !endActions) {
    return null;
  }
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .k, { justifyContent: "space-between", alignItems: "flex-start", paddingBottom: 4, paddingLeft: 10, paddingRight: 10, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .k, { gap: 2, wrap: "wrap", children: startActions }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .k, { gap: 2, shrink: 0, wrap: "wrap", children: endActions })] });
};



/***/ }),

/***/ 38566:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ TFooter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37652);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93415);
/* harmony import */ var _Divider_Divider_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84366);
/* harmony import */ var _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10701);
/* harmony import */ var _Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32370);






const IconBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x))`
  height: ${24 / 16}rem;
  width: ${24 / 16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10 / 16}rem;
    width: ${10 / 16}rem;
  }

  svg path {
    fill: ${({ theme }) => theme.colors.primary600};
  }
`;
const ButtonBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x))`
  border-radius: 0 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius};
  display: block;
  width: 100%;
  border: none;
`;
const TFooter = ({ children, icon, ...props }) => {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Divider_Divider_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Divider */ .i, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ButtonBox, { as: "button", background: "primary100", padding: 5, ...props, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .k, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconBox, { "aria-hidden": true, background: "primary200", children: icon }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, { paddingLeft: 3, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, { variant: "pi", fontWeight: "bold", textColor: "primary600", children }) })] }) })] });
};



/***/ })

}]);