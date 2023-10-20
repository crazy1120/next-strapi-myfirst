"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[2812],{

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

/***/ 71359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93415);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48102);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57121);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70627);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61020);






const Filters = ({ displayedFilters }) => {
  const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, { paddingTop: 1, paddingBottom: 1 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z,
    {
      variant: "tertiary",
      ref: buttonRef,
      startIcon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, null),
      onClick: handleToggle,
      size: "S"
    },
    formatMessage({ id: "app.utils.filters", defaultMessage: "Filters" })
  ), isVisible && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .FilterPopoverURLQuery */ .J5,
    {
      displayedFilters,
      isVisible,
      onToggle: handleToggle,
      source: buttonRef
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .FilterListURLQuery */ .W$, { filtersSchema: displayedFilters }));
};
Filters.propTypes = {
  displayedFilters: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf(
    prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
      name: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string).isRequired,
      metadatas: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({ label: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string) }),
      fieldSchema: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({ type: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string) })
    })
  ).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filters);


/***/ }),

/***/ 67220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AuditLogs_ProtectedListPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(49402);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/selectors.js
var selectors = __webpack_require__(36364);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.mjs
var Layout = __webpack_require__(27997);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(74758);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(93415);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(73354);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(27875);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ActionLayout.mjs
var ActionLayout = __webpack_require__(37472);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Filters/index.js
var Filters = __webpack_require__(71359);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var react_query_es = __webpack_require__(40464);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(51447);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useAdminUsers/index.js + 1 modules
var useAdminUsers = __webpack_require__(54920);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/hooks/useAuditLogsData.js




const useAuditLogsData = ({ canReadAuditLogs, canReadUsers }) => {
  const { get } = (0,dist/* useFetchClient */.kY)();
  const { search } = (0,react_router/* useLocation */.TH)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const [{ query }] = (0,dist/* useQueryParams */.Kx)();
  const queryOptions = {
    keepPreviousData: true,
    retry: false,
    staleTime: 1e3 * 20,
    // 20 seconds
    onError: (error) => toggleNotification({ type: "warning", message: error.message })
  };
  const {
    users,
    isError: isUsersError,
    isLoading: isLoadingUsers
  } = (0,useAdminUsers/* useAdminUsers */.R)(
    {},
    {
      ...queryOptions,
      enabled: canReadUsers,
      staleTime: 2 * (1e3 * 60)
      // 2 minutes
    }
  );
  const {
    data: auditLogs,
    isLoading: isLoadingAuditLogs,
    isError: isAuditLogsError
  } = (0,react_query_es.useQuery)(
    ["auditLogs", search],
    async () => {
      const { data } = await get(`/admin/audit-logs`, {
        params: query
      });
      return data;
    },
    {
      ...queryOptions,
      enabled: canReadAuditLogs
    }
  );
  return {
    auditLogs,
    users,
    isLoading: isLoadingUsers || isLoadingAuditLogs,
    hasError: isAuditLogsError || isUsersError
  };
};
/* harmony default export */ const hooks_useAuditLogsData = (useAuditLogsData);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.mjs
var ModalLayout = __webpack_require__(5938);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.mjs
var ModalHeader = __webpack_require__(6918);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.mjs
var ModalBody = __webpack_require__(15244);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Breadcrumbs/Breadcrumbs.mjs + 1 modules
var Breadcrumbs = __webpack_require__(89486);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Breadcrumbs/Crumb.mjs
var Crumb = __webpack_require__(82298);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70627);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/parseISO/index.js
var parseISO = __webpack_require__(33866);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/hooks/useFormatTimeStamp.js


const useFormatTimeStamp = () => {
  const { formatDate } = (0,useIntl/* default */.Z)();
  const formatTimeStamp = (value) => {
    const date = (0,parseISO/* default */.Z)(value);
    const formattedDate = formatDate(date, {
      dateStyle: "long"
    });
    const formattedTime = formatDate(date, {
      timeStyle: "medium",
      hourCycle: "h24"
    });
    return `${formattedDate}, ${formattedTime}`;
  };
  return formatTimeStamp;
};
/* harmony default export */ const hooks_useFormatTimeStamp = (useFormatTimeStamp);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.mjs + 1 modules
var Loader = __webpack_require__(77970);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(23298);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/JSONInput/JSONInput.mjs + 23 modules
var JSONInput = __webpack_require__(28502);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/utils/getActionTypesDefaultMessages.js
const actionTypes = {
  "entry.create": "Create entry{model, select, undefined {} other { ({model})}}",
  "entry.update": "Update entry{model, select, undefined {} other { ({model})}}",
  "entry.delete": "Delete entry{model, select, undefined {} other { ({model})}}",
  "entry.publish": "Publish entry{model, select, undefined {} other { ({model})}}",
  "entry.unpublish": "Unpublish entry{model, select, undefined {} other { ({model})}}",
  "media.create": "Create media",
  "media.update": "Update media",
  "media.delete": "Delete media",
  "media-folder.create": "Create media folder",
  "media-folder.update": "Update media folder",
  "media-folder.delete": "Delete media folder",
  "user.create": "Create user",
  "user.update": "Update user",
  "user.delete": "Delete user",
  "admin.auth.success": "Admin login",
  "admin.logout": "Admin logout",
  "content-type.create": "Create content type",
  "content-type.update": "Update content type",
  "content-type.delete": "Delete content type",
  "component.create": "Create component",
  "component.update": "Update component",
  "component.delete": "Delete component",
  "role.create": "Create role",
  "role.update": "Update role",
  "role.delete": "Delete role",
  "permission.create": "Create permission",
  "permission.update": "Update permission",
  "permission.delete": "Delete permission"
};
const getDefaultMessage = (value) => {
  return actionTypes[value] || value;
};

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/Modal/ActionItem.js



const ActionItem = ({ actionLabel, actionName }) => {
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "baseline", gap: 1 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral600", variant: "sigma" }, actionLabel), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral600" }, actionName));
};
ActionItem.propTypes = {
  actionLabel: (prop_types_default()).string.isRequired,
  actionName: (prop_types_default()).string.isRequired
};
/* harmony default export */ const Modal_ActionItem = (ActionItem);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/Modal/ActionBody.js






const ActionBody = ({ status, data, formattedDate }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  if (status === "loading") {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { padding: 7, justifyContent: "center", alignItems: "center" }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, null, "Loading content..."));
  }
  const { action, user, payload } = data;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginBottom: 3 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", id: "title" }, formatMessage({
    id: "Settings.permissions.auditLogs.details",
    defaultMessage: "Log Details"
  }))), /* @__PURE__ */ react.createElement(
    Grid/* Grid */.r,
    {
      gap: 4,
      gridCols: 2,
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: 6,
      paddingRight: 6,
      marginBottom: 4,
      background: "neutral100",
      hasRadius: true
    },
    /* @__PURE__ */ react.createElement(
      Modal_ActionItem,
      {
        actionLabel: formatMessage({
          id: "Settings.permissions.auditLogs.action",
          defaultMessage: "Action"
        }),
        actionName: formatMessage(
          {
            id: `Settings.permissions.auditLogs.${action}`,
            defaultMessage: getDefaultMessage(action)
          },
          { model: payload?.model }
        )
      }
    ),
    /* @__PURE__ */ react.createElement(
      Modal_ActionItem,
      {
        actionLabel: formatMessage({
          id: "Settings.permissions.auditLogs.date",
          defaultMessage: "Date"
        }),
        actionName: formattedDate
      }
    ),
    /* @__PURE__ */ react.createElement(
      Modal_ActionItem,
      {
        actionLabel: formatMessage({
          id: "Settings.permissions.auditLogs.user",
          defaultMessage: "User"
        }),
        actionName: user?.displayName || "-"
      }
    ),
    /* @__PURE__ */ react.createElement(
      Modal_ActionItem,
      {
        actionLabel: formatMessage({
          id: "Settings.permissions.auditLogs.userId",
          defaultMessage: "User ID"
        }),
        actionName: user?.id.toString() || "-"
      }
    )
  ), /* @__PURE__ */ react.createElement(
    JSONInput/* JSONInput */.V,
    {
      value: JSON.stringify(payload, null, 2),
      disabled: true,
      label: formatMessage({
        id: "Settings.permissions.auditLogs.payload",
        defaultMessage: "Payload"
      })
    }
  ));
};
ActionBody.defaultProps = {
  data: {}
};
ActionBody.propTypes = {
  status: prop_types_default().oneOf(["idle", "loading", "error", "success"]).isRequired,
  data: prop_types_default().shape({
    action: (prop_types_default()).string,
    date: (prop_types_default()).string,
    payload: (prop_types_default()).object,
    user: (prop_types_default()).object
  }),
  formattedDate: (prop_types_default()).string.isRequired
};
/* harmony default export */ const Modal_ActionBody = (ActionBody);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/Modal/index.js








const Modal = ({ handleClose, logId }) => {
  const { get } = (0,dist/* useFetchClient */.kY)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const fetchAuditLog = async (id) => {
    const { data: data2 } = await get(`/admin/audit-logs/${id}`);
    if (!data2) {
      throw new Error("Audit log not found");
    }
    return data2;
  };
  const { data, status } = (0,react_query_es.useQuery)(["audit-log", logId], () => fetchAuditLog(logId), {
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error", defaultMessage: "An error occured" }
      });
      handleClose();
    }
  });
  const formatTimeStamp = hooks_useFormatTimeStamp();
  const formattedDate = data ? formatTimeStamp(data.date) : "";
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose: handleClose, labelledBy: "title" }, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Breadcrumbs/* Breadcrumbs */.O, { label: formattedDate, id: "title" }, /* @__PURE__ */ react.createElement(Crumb/* Crumb */.$, { isCurrent: true }, formattedDate))), /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(Modal_ActionBody, { status, data, formattedDate })));
};
Modal.propTypes = {
  handleClose: (prop_types_default()).func.isRequired,
  logId: (prop_types_default()).string.isRequired
};
/* harmony default export */ const ListView_Modal = (Modal);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/PaginationFooter/index.js




const PaginationFooter = ({ pagination }) => {
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "flex-end", justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(dist/* PageSizeURLQuery */.v4, null), /* @__PURE__ */ react.createElement(dist/* PaginationURLQuery */.tU, { pagination })));
};
PaginationFooter.defaultProps = {
  pagination: {
    pageCount: 0,
    pageSize: 50,
    total: 0
  }
};
PaginationFooter.propTypes = {
  pagination: prop_types_default().shape({
    page: (prop_types_default()).number,
    pageCount: (prop_types_default()).number,
    pageSize: (prop_types_default()).number,
    total: (prop_types_default()).number
  })
};
/* harmony default export */ const ListView_PaginationFooter = (PaginationFooter);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.mjs
var Tbody = __webpack_require__(86967);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.mjs
var Tr = __webpack_require__(93153);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.mjs
var Cell = __webpack_require__(50086);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(4987);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Eye.mjs
var Eye = __webpack_require__(98264);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/TableRows/index.js








const TableRows = ({ headers, rows, onOpenModal }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const formatTimeStamp = hooks_useFormatTimeStamp();
  const getCellValue = ({ type, value, model }) => {
    if (type === "date") {
      return formatTimeStamp(value);
    }
    if (type === "action") {
      return formatMessage(
        {
          id: `Settings.permissions.auditLogs.${value}`,
          defaultMessage: getDefaultMessage(value)
        },
        { model }
      );
    }
    return value || "-";
  };
  return /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, rows.map((data) => {
    return /* @__PURE__ */ react.createElement(
      Tr.Tr,
      {
        key: data.id,
        ...(0,dist/* onRowClick */.X7)({
          fn: () => onOpenModal(data.id)
        })
      },
      headers.map(({ key, name, cellFormatter }) => {
        return /* @__PURE__ */ react.createElement(Cell.Td, { key }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, getCellValue({
          type: key,
          value: cellFormatter ? cellFormatter(data[name]) : data[name],
          model: data.payload?.model
        })));
      }),
      /* @__PURE__ */ react.createElement(Cell.Td, { ...dist/* stopPropagation */.UW }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "end" }, /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: () => onOpenModal(data.id),
          "aria-label": formatMessage(
            { id: "app.component.table.view", defaultMessage: "{target} details" },
            { target: `${data.action} action` }
          ),
          noBorder: true,
          icon: /* @__PURE__ */ react.createElement(Eye/* default */.Z, null)
        }
      )))
    );
  }));
};
TableRows.defaultProps = {
  rows: []
};
TableRows.propTypes = {
  headers: (prop_types_default()).array.isRequired,
  rows: (prop_types_default()).array,
  onOpenModal: (prop_types_default()).func.isRequired
};
/* harmony default export */ const ListView_TableRows = (TableRows);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/Combobox.mjs
var Combobox = __webpack_require__(8295);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.mjs
var ComboboxOption = __webpack_require__(61121);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/ComboboxFilter/index.js




const ComboboxFilter = ({ value, options, onChange }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const ariaLabel = formatMessage({
    id: "Settings.permissions.auditLogs.filter.aria-label",
    defaultMessage: "Search and select an option to filter"
  });
  return /* @__PURE__ */ react.createElement(Combobox/* Combobox */.hQ, { "aria-label": ariaLabel, value, onChange }, options.map(({ label, customValue }) => {
    return /* @__PURE__ */ react.createElement(ComboboxOption/* ComboboxOption */.O, { key: customValue, value: customValue }, label);
  }));
};
ComboboxFilter.defaultProps = {
  value: null
};
ComboboxFilter.propTypes = {
  value: (prop_types_default()).string,
  options: prop_types_default().arrayOf(
    prop_types_default().shape({
      label: (prop_types_default()).string.isRequired,
      customValue: (prop_types_default()).string.isRequired
    }).isRequired
  ).isRequired,
  onChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const ListView_ComboboxFilter = (ComboboxFilter);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/utils/getDisplayedFilters.js


const customOperators = [
  {
    intlLabel: { id: "components.FilterOptions.FILTER_TYPES.$eq", defaultMessage: "is" },
    value: "$eq"
  },
  {
    intlLabel: { id: "components.FilterOptions.FILTER_TYPES.$ne", defaultMessage: "is not" },
    value: "$ne"
  }
];
const getDisplayedFilters = ({ formatMessage, users, canReadUsers }) => {
  const actionOptions = Object.keys(actionTypes).map((action) => {
    return {
      label: formatMessage(
        {
          id: `Settings.permissions.auditLogs.${action}`,
          defaultMessage: getDefaultMessage(action)
        },
        { model: void 0 }
      ),
      customValue: action
    };
  });
  const filters = [
    {
      name: "action",
      metadatas: {
        customOperators,
        label: formatMessage({
          id: "Settings.permissions.auditLogs.action",
          defaultMessage: "Action"
        }),
        customInput: ListView_ComboboxFilter,
        options: actionOptions
      },
      fieldSchema: { type: "enumeration" }
    },
    {
      name: "date",
      metadatas: {
        label: formatMessage({
          id: "Settings.permissions.auditLogs.date",
          defaultMessage: "Date"
        })
      },
      fieldSchema: { type: "datetime" }
    }
  ];
  if (canReadUsers && users) {
    const getDisplayNameFromUser = (user) => {
      if (user.username) {
        return user.username;
      }
      if (user.firstname && user.lastname) {
        return formatMessage(
          {
            id: "Settings.permissions.auditLogs.user.fullname",
            defaultMessage: "{firstname} {lastname}"
          },
          {
            firstname: user.firstname,
            lastname: user.lastname
          }
        );
      }
      return user.email;
    };
    const userOptions = users.map((user) => {
      return {
        label: getDisplayNameFromUser(user),
        // Combobox expects a string value
        customValue: user.id.toString()
      };
    });
    return [
      ...filters,
      {
        name: "user",
        metadatas: {
          customOperators,
          label: formatMessage({
            id: "Settings.permissions.auditLogs.user",
            defaultMessage: "User"
          }),
          options: userOptions,
          customInput: ListView_ComboboxFilter
        },
        fieldSchema: { type: "relation", mainField: { name: "id" } }
      }
    ];
  }
  return filters;
};
/* harmony default export */ const utils_getDisplayedFilters = (getDisplayedFilters);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/utils/tableHeaders.js
const tableHeaders = [
  {
    name: "action",
    key: "action",
    metadatas: {
      label: {
        id: "Settings.permissions.auditLogs.action",
        defaultMessage: "Action"
      },
      sortable: true
    }
  },
  {
    name: "date",
    key: "date",
    metadatas: {
      label: {
        id: "Settings.permissions.auditLogs.date",
        defaultMessage: "Date"
      },
      sortable: true
    }
  },
  {
    key: "user",
    name: "user",
    metadatas: {
      label: {
        id: "Settings.permissions.auditLogs.user",
        defaultMessage: "User"
      },
      sortable: false
    },
    cellFormatter: (user) => user ? user.displayName : ""
  }
];
/* harmony default export */ const utils_tableHeaders = (tableHeaders);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/index.js













const ListView = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const permissions = (0,es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  const {
    allowedActions: { canRead: canReadAuditLogs, canReadUsers }
  } = (0,dist/* useRBAC */.ss)({
    ...permissions.settings.auditLogs,
    readUsers: permissions.settings.users.read
  });
  const [{ query }, setQuery] = (0,dist/* useQueryParams */.Kx)();
  const { auditLogs, users, isLoading, hasError } = hooks_useAuditLogsData({
    canReadAuditLogs,
    canReadUsers
  });
  (0,dist/* useFocusWhenNavigate */.go)();
  const displayedFilters = utils_getDisplayedFilters({ formatMessage, users, canReadUsers });
  const title = formatMessage({
    id: "global.auditLogs",
    defaultMessage: "Audit Logs"
  });
  const headers = utils_tableHeaders.map((header) => ({
    ...header,
    metadatas: {
      ...header.metadatas,
      label: formatMessage(header.metadatas.label)
    }
  }));
  if (hasError) {
    return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 8 }, /* @__PURE__ */ react.createElement(dist/* AnErrorOccurred */.Hn, null))));
  }
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(dist/* SettingsPageTitle */.SL, { name: title }), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title,
      subtitle: formatMessage({
        id: "Settings.permissions.auditLogs.listview.header.subtitle",
        defaultMessage: "Logs of all the activities that happened in your environment"
      })
    }
  ), /* @__PURE__ */ react.createElement(ActionLayout/* ActionLayout */.Z, { startActions: /* @__PURE__ */ react.createElement(Filters/* default */.Z, { displayedFilters }) }), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, { canRead: canReadAuditLogs }, /* @__PURE__ */ react.createElement(
    dist/* DynamicTable */.tM,
    {
      contentType: "Audit logs",
      headers,
      rows: auditLogs?.results || [],
      withBulkActions: true,
      isLoading
    },
    /* @__PURE__ */ react.createElement(
      ListView_TableRows,
      {
        headers,
        rows: auditLogs?.results || [],
        onOpenModal: (id) => setQuery({ id })
      }
    )
  ), /* @__PURE__ */ react.createElement(ListView_PaginationFooter, { pagination: auditLogs?.pagination })), query?.id && /* @__PURE__ */ react.createElement(ListView_Modal, { handleClose: () => setQuery({ id: null }, "remove"), logId: query.id }));
};
/* harmony default export */ const AuditLogs_ListView = (ListView);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ProtectedListPage/index.js





const ProtectedListPage = () => {
  const permissions = (0,es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  return /* @__PURE__ */ react.createElement(dist/* CheckPagePermissions */.O4, { permissions: permissions.settings.auditLogs.main }, /* @__PURE__ */ react.createElement(AuditLogs_ListView, null));
};
/* harmony default export */ const AuditLogs_ProtectedListPage = (ProtectedListPage);


/***/ }),

/***/ 61121:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ ComboboxOption)
/* harmony export */ });
/* harmony import */ var _Combobox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8295);

const ComboboxOption = _Combobox_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Option */ .Wx;



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



/***/ })

}]);