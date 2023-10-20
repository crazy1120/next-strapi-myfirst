"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[5199],{

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

/***/ 61611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W: () => (/* binding */ UserListPageCE),
  Z: () => (/* binding */ ListPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(73354);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(27875);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ActionLayout.mjs
var ActionLayout = __webpack_require__(37472);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(74758);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(29206);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(40464);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var react_redux_es = __webpack_require__(49402);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(51447);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useAdminUsers/index.js + 1 modules
var useAdminUsers = __webpack_require__(54920);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useEnterprise/index.js + 1 modules
var useEnterprise = __webpack_require__(80902);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/selectors.js
var selectors = __webpack_require__(36364);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Filters/index.js
var Filters = __webpack_require__(71359);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48102);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Envelop.mjs
var Envelop = __webpack_require__(16543);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70627);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/CreateAction/index.js





const CreateActionCE = ({ onClick }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick, startIcon: /* @__PURE__ */ react.createElement(Envelop/* default */.Z, null), size: "S" }, formatMessage({
    id: "Settings.permissions.users.create",
    defaultMessage: "Invite new user"
  }));
};
CreateActionCE.propTypes = {
  onClick: (prop_types_default()).func.isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.mjs
var Tbody = __webpack_require__(86967);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.mjs
var Tr = __webpack_require__(93153);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.mjs
var Cell = __webpack_require__(50086);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseCheckbox/BaseCheckbox.mjs + 2 modules
var BaseCheckbox = __webpack_require__(73411);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(4987);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(93415);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.mjs
var Pencil = __webpack_require__(26784);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.mjs
var Trash = __webpack_require__(78665);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 4 modules
var utils = __webpack_require__(96854);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/DynamicTable/TableRows/index.js








const TableRows = ({
  canDelete,
  headers,
  entriesToDelete,
  onClickDelete,
  onSelectRow,
  withMainAction,
  withBulkActions,
  rows
}) => {
  const {
    push,
    location: { pathname }
  } = (0,react_router/* useHistory */.k6)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, rows.map((data) => {
    const isChecked = entriesToDelete.findIndex((id) => id === data.id) !== -1;
    return /* @__PURE__ */ react.createElement(
      Tr.Tr,
      {
        key: data.id,
        ...(0,dist/* onRowClick */.X7)({
          fn: () => push(`${pathname}/${data.id}`),
          condition: withBulkActions
        })
      },
      withMainAction && /* @__PURE__ */ react.createElement(Cell.Td, { ...dist/* stopPropagation */.UW }, /* @__PURE__ */ react.createElement(
        BaseCheckbox/* BaseCheckbox */.C,
        {
          "aria-label": formatMessage(
            {
              id: "app.component.table.select.one-entry",
              defaultMessage: `Select {target}`
            },
            { target: (0,utils/* getFullName */.Pp)(data.firstname, data.lastname) }
          ),
          checked: isChecked,
          onChange: () => {
            onSelectRow({ name: data.id, value: !isChecked });
          }
        }
      )),
      headers.map(({ key, cellFormatter, name, ...rest }) => {
        return /* @__PURE__ */ react.createElement(Cell.Td, { key }, typeof cellFormatter === "function" ? cellFormatter(data, { key, name, formatMessage, ...rest }) : /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, data[name] || "-"));
      }),
      withBulkActions && /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "end" }, /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: () => push(`${pathname}/${data.id}`),
          label: formatMessage(
            { id: "app.component.table.edit", defaultMessage: "Edit {target}" },
            { target: (0,utils/* getFullName */.Pp)(data.firstname, data.lastname) }
          ),
          noBorder: true,
          icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null)
        }
      ), canDelete && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 1, ...dist/* stopPropagation */.UW }, /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: () => onClickDelete(data.id),
          label: formatMessage(
            { id: "global.delete-target", defaultMessage: "Delete {target}" },
            { target: (0,utils/* getFullName */.Pp)(data.firstname, data.lastname) }
          ),
          noBorder: true,
          icon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null)
        }
      ))))
    );
  }));
};
TableRows.defaultProps = {
  canDelete: false,
  entriesToDelete: [],
  onClickDelete() {
  },
  onSelectRow() {
  },
  rows: [],
  withBulkActions: false,
  withMainAction: false
};
TableRows.propTypes = {
  canDelete: (prop_types_default()).bool,
  entriesToDelete: (prop_types_default()).array,
  headers: (prop_types_default()).array.isRequired,
  onClickDelete: (prop_types_default()).func,
  onSelectRow: (prop_types_default()).func,
  rows: (prop_types_default()).array,
  withBulkActions: (prop_types_default()).bool,
  withMainAction: (prop_types_default()).bool
};
/* harmony default export */ const DynamicTable_TableRows = (TableRows);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.mjs
var ModalLayout = __webpack_require__(5938);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.mjs
var ModalHeader = __webpack_require__(6918);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.mjs
var ModalBody = __webpack_require__(15244);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(23298);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(74577);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.mjs
var ModalFooter = __webpack_require__(35250);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Breadcrumbs/Breadcrumbs.mjs + 1 modules
var Breadcrumbs = __webpack_require__(89486);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Breadcrumbs/Crumb.mjs
var Crumb = __webpack_require__(82298);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(71563);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/components/MagicLink/index.js
var components_MagicLink = __webpack_require__(30164);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/components/SelectRoles/index.js
var SelectRoles = __webpack_require__(85243);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(47853);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/ModalForm/constants.js


const FORM_INITIAL_VALUES = {
  firstname: "",
  lastname: "",
  email: "",
  roles: []
};
const ROLE_LAYOUT = [];
const FORM_LAYOUT = [
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
    }
  ]
];
const FORM_SCHEMA = yup_es/* object */.Ry().shape({
  firstname: yup_es/* string */.Z_().trim().required(dist/* translatedErrors */.I0.required),
  lastname: yup_es/* string */.Z_(),
  email: yup_es/* string */.Z_().email(dist/* translatedErrors */.I0.email).required(dist/* translatedErrors */.I0.required),
  roles: yup_es/* array */.IX().min(1, dist/* translatedErrors */.I0.required).required(dist/* translatedErrors */.I0.required)
});
const STEPPER = {
  create: {
    buttonSubmitLabel: {
      id: "app.containers.Users.ModalForm.footer.button-success",
      defaultMessage: "Invite user"
    },
    isDisabled: false,
    next: "magic-link"
  },
  "magic-link": {
    buttonSubmitLabel: { id: "global.finish", defaultMessage: "Finish" },
    isDisabled: true,
    next: null
  }
};

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/ModalForm/index.js












const ModalForm = ({ onSuccess, onToggle }) => {
  const [currentStep, setStep] = (0,react.useState)("create");
  const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
  const [registrationToken, setRegistrationToken] = (0,react.useState)(null);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { lockApp, unlockApp } = (0,dist/* useOverlayBlocker */.o1)();
  const { post } = (0,dist/* useFetchClient */.kY)();
  const roleLayout = (0,useEnterprise/* useEnterprise */.c)(
    ROLE_LAYOUT,
    async () => (await __webpack_require__.e(/* import() */ 9329).then(__webpack_require__.bind(__webpack_require__, 99329))).ROLE_LAYOUT,
    {
      combine(ceRoles, eeRoles) {
        return [...ceRoles, eeRoles];
      },
      defaultValue: []
    }
  );
  const initialValues = (0,useEnterprise/* useEnterprise */.c)(
    FORM_INITIAL_VALUES,
    async () => (await __webpack_require__.e(/* import() */ 9329).then(__webpack_require__.bind(__webpack_require__, 99329))).FORM_INITIAL_VALUES,
    {
      combine(ceValues, eeValues) {
        return {
          ...ceValues,
          ...eeValues
        };
      },
      defaultValue: FORM_INITIAL_VALUES
    }
  );
  const MagicLink = (0,useEnterprise/* useEnterprise */.c)(
    components_MagicLink/* MagicLinkCE */.A,
    async () => (await __webpack_require__.e(/* import() */ 566).then(__webpack_require__.bind(__webpack_require__, 20566))).MagicLinkEE
  );
  const postMutation = (0,es.useMutation)(
    (body) => {
      return post("/admin/users", body);
    },
    {
      async onSuccess({ data }) {
        setRegistrationToken(data.data.registrationToken);
        await onSuccess();
        goNext();
        setIsSubmitting(false);
      },
      onError(err) {
        setIsSubmitting(false);
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
        throw err;
      },
      onSettled() {
        unlockApp();
      }
    }
  );
  const headerTitle = formatMessage({
    id: "Settings.permissions.users.create",
    defaultMessage: "Invite new user"
  });
  const handleSubmit = async (body, { setErrors }) => {
    lockApp();
    setIsSubmitting(true);
    try {
      await postMutation.mutateAsync(body);
    } catch (err) {
      unlockApp();
      if (err?.response?.data?.error.message === "Email already taken") {
        setErrors({ email: err.response.data.error.message });
      }
    }
  };
  const goNext = () => {
    if (next) {
      setStep(next);
    } else {
      onToggle();
    }
  };
  const { buttonSubmitLabel, isDisabled, next } = STEPPER[currentStep];
  const endActions = currentStep === "create" ? /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit", loading: isSubmitting }, formatMessage(buttonSubmitLabel)) : /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "button", loading: isSubmitting, onClick: onToggle }, formatMessage(buttonSubmitLabel));
  if (!MagicLink) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose: onToggle, labelledBy: "title" }, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Breadcrumbs/* Breadcrumbs */.O, { label: headerTitle }, /* @__PURE__ */ react.createElement(Crumb/* Crumb */.$, { isCurrent: true }, headerTitle))), /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.J9,
    {
      enableReinitialize: true,
      initialValues,
      onSubmit: handleSubmit,
      validationSchema: FORM_SCHEMA,
      validateOnChange: false
    },
    ({ errors, handleChange, values }) => {
      return /* @__PURE__ */ react.createElement(dist/* Form */.l0, null, /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 6 }, currentStep !== "create" && /* @__PURE__ */ react.createElement(MagicLink, { registrationToken }), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "beta", as: "h2" }, formatMessage({
        id: "app.components.Users.ModalCreateBody.block-title.details",
        defaultMessage: "User details"
      })), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 5 }, FORM_LAYOUT.map((row) => {
        return row.map((input) => {
          return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { key: input.name, ...input.size }, /* @__PURE__ */ react.createElement(
            dist/* GenericInput */.jm,
            {
              ...input,
              disabled: isDisabled,
              error: errors[input.name],
              onChange: handleChange,
              value: values[input.name]
            }
          ));
        });
      }))))), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "beta", as: "h2" }, formatMessage({
        id: "global.roles",
        defaultMessage: "User's role"
      })), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 5 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
        SelectRoles/* default */.Z,
        {
          disabled: isDisabled,
          error: errors.roles,
          onChange: handleChange,
          value: values.roles
        }
      )), roleLayout.map((row) => {
        return row.map((input) => {
          return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { key: input.name, ...input.size }, /* @__PURE__ */ react.createElement(
            dist/* GenericInput */.jm,
            {
              ...input,
              disabled: isDisabled,
              onChange: handleChange,
              value: values[input.name]
            }
          ));
        });
      })))))), /* @__PURE__ */ react.createElement(
        ModalFooter/* ModalFooter */.m,
        {
          startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "tertiary", onClick: onToggle, type: "button" }, formatMessage({
            id: "app.components.Button.cancel",
            defaultMessage: "Cancel"
          })),
          endActions
        }
      ));
    }
  ));
};
ModalForm.propTypes = {
  onToggle: (prop_types_default()).func.isRequired,
  onSuccess: (prop_types_default()).func.isRequired
};
/* harmony default export */ const ListPage_ModalForm = (ModalForm);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/PaginationFooter/index.js




const PaginationFooter = ({ pagination }) => {
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "flex-end", justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(dist/* PageSizeURLQuery */.v4, null), /* @__PURE__ */ react.createElement(dist/* PaginationURLQuery */.tU, { pagination })));
};
PaginationFooter.defaultProps = {
  pagination: {
    pageCount: 0,
    pageSize: 10,
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
/* harmony default export */ const ListPage_PaginationFooter = (PaginationFooter);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/utils/displayedFilters.js
const displayedFilters = [
  {
    name: "firstname",
    metadatas: { label: "Firstname" },
    fieldSchema: { type: "string" }
  },
  {
    name: "lastname",
    metadatas: { label: "Lastname" },
    fieldSchema: { type: "string" }
  },
  {
    name: "email",
    metadatas: { label: "Email" },
    fieldSchema: { type: "email" }
  },
  {
    name: "username",
    metadatas: { label: "Username" },
    fieldSchema: { type: "string" }
  },
  {
    name: "isActive",
    metadatas: { label: "Active user" },
    fieldSchema: { type: "boolean" }
  }
];
/* harmony default export */ const utils_displayedFilters = (displayedFilters);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/utils/tableHeaders.js



const tableHeaders = [
  {
    name: "firstname",
    key: "firstname",
    metadatas: {
      label: {
        id: "Settings.permissions.users.firstname",
        defaultMessage: "Firstname"
      },
      sortable: true
    }
  },
  {
    name: "lastname",
    key: "lastname",
    metadatas: {
      label: {
        id: "Settings.permissions.users.lastname",
        defaultMessage: "Lastname"
      },
      sortable: true
    }
  },
  {
    key: "email",
    name: "email",
    metadatas: {
      label: { id: "Settings.permissions.users.email", defaultMessage: "Email" },
      sortable: true
    }
  },
  {
    key: "roles",
    name: "roles",
    metadatas: {
      label: {
        id: "Settings.permissions.users.roles",
        defaultMessage: "Roles"
      },
      sortable: false
    },
    cellFormatter({ roles }, { formatMessage }) {
      return /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, roles.map(
        (role) => formatMessage({
          id: `Settings.permissions.users.${role.code}`,
          defaultMessage: role.name
        })
      ).join(",\n"));
    }
  },
  {
    key: "username",
    name: "username",
    metadatas: {
      label: {
        id: "Settings.permissions.users.username",
        defaultMessage: "Username"
      },
      sortable: true
    }
  },
  {
    key: "isActive",
    name: "isActive",
    metadatas: {
      label: {
        id: "Settings.permissions.users.user-status",
        defaultMessage: "User status"
      },
      sortable: false
    },
    cellFormatter({ isActive }, { formatMessage }) {
      return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(dist/* Status */.qb, { isActive, variant: isActive ? "success" : "danger" }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, formatMessage({
        id: isActive ? "Settings.permissions.users.active" : "Settings.permissions.users.inactive",
        defaultMessage: isActive ? "Active" : "Inactive"
      })));
    }
  }
];
/* harmony default export */ const utils_tableHeaders = (tableHeaders);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/index.js


















const EE_LICENSE_LIMIT_QUERY_KEY = ["ee", "license-limit-info"];
const UserListPageCE = () => {
  const { post } = (0,dist/* useFetchClient */.kY)();
  const { formatAPIError } = (0,dist/* useAPIErrorHandler */.So)();
  const [isModalOpened, setIsModalOpen] = (0,react.useState)(false);
  const permissions = (0,react_redux_es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  const {
    allowedActions: { canCreate, canDelete, canRead }
  } = (0,dist/* useRBAC */.ss)(permissions.settings.users);
  const queryClient = (0,es.useQueryClient)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { search } = (0,react_router/* useLocation */.TH)();
  (0,dist/* useFocusWhenNavigate */.go)();
  const {
    users,
    pagination,
    isError,
    isLoading,
    refetch: refetchAdminUsers
  } = (0,useAdminUsers/* useAdminUsers */.R)(lib_default().parse(search, { ignoreQueryPrefix: true }), {
    cacheTime: 0,
    enabled: canRead
  });
  const CreateAction = (0,useEnterprise/* useEnterprise */.c)(
    CreateActionCE,
    async () => (await __webpack_require__.e(/* import() */ 5833).then(__webpack_require__.bind(__webpack_require__, 85833))).CreateActionEE
  );
  const headers = utils_tableHeaders.map((header) => ({
    ...header,
    metadatas: {
      ...header.metadatas,
      label: formatMessage(header.metadatas.label)
    }
  }));
  const title = formatMessage({
    id: "global.users",
    defaultMessage: "Users"
  });
  const handleToggle = () => {
    setIsModalOpen((prev) => !prev);
  };
  const deleteAllMutation = (0,es.useMutation)(
    async (ids) => {
      await post("/admin/users/batch-delete", { ids });
    },
    {
      async onSuccess() {
        await refetchAdminUsers();
        await queryClient.refetchQueries(EE_LICENSE_LIMIT_QUERY_KEY);
      },
      onError(error) {
        toggleNotification({
          type: "warning",
          message: {
            id: "notification.error",
            message: formatAPIError(error),
            defaultMessage: "An error occured"
          }
        });
      }
    }
  );
  if (!CreateAction) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(dist/* SettingsPageTitle */.SL, { name: "Users" }), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      primaryAction: canCreate && /* @__PURE__ */ react.createElement(CreateAction, { onClick: handleToggle }),
      title,
      subtitle: formatMessage({
        id: "Settings.permissions.users.listview.header.subtitle",
        defaultMessage: "All the users who have access to the Strapi admin panel"
      })
    }
  ), canRead && /* @__PURE__ */ react.createElement(
    ActionLayout/* ActionLayout */.Z,
    {
      startActions: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
        dist/* SearchURLQuery */.m,
        {
          label: formatMessage(
            { id: "app.component.search.label", defaultMessage: "Search for {target}" },
            { target: title }
          )
        }
      ), /* @__PURE__ */ react.createElement(Filters/* default */.Z, { displayedFilters: utils_displayedFilters }))
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, { canRead }, !canRead && /* @__PURE__ */ react.createElement(dist/* NoPermissions */.ZF, null), isError && /* @__PURE__ */ react.createElement("div", null, "TODO: An error occurred"), canRead && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    dist/* DynamicTable */.tM,
    {
      contentType: "Users",
      isLoading,
      onConfirmDeleteAll: deleteAllMutation.mutateAsync,
      onConfirmDelete: (id) => deleteAllMutation.mutateAsync([id]),
      headers,
      rows: users,
      withBulkActions: true,
      withMainAction: canDelete
    },
    /* @__PURE__ */ react.createElement(
      DynamicTable_TableRows,
      {
        canDelete,
        headers,
        rows: users,
        withBulkActions: true,
        withMainAction: canDelete
      }
    )
  ), pagination && /* @__PURE__ */ react.createElement(ListPage_PaginationFooter, { pagination }))), isModalOpened && /* @__PURE__ */ react.createElement(
    ListPage_ModalForm,
    {
      onSuccess: async () => {
        await refetchAdminUsers();
        await queryClient.refetchQueries(EE_LICENSE_LIMIT_QUERY_KEY);
      },
      onToggle: handleToggle
    }
  ));
};
const UsersListPageSwitch = () => {
  const UsersListPage = (0,useEnterprise/* useEnterprise */.c)(
    UserListPageCE,
    async () => (
      // eslint-disable-next-line import/no-cycle
      (await __webpack_require__.e(/* import() */ 5481).then(__webpack_require__.bind(__webpack_require__, 17403))).UserListPageEE
    )
  );
  if (!UsersListPage) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(UsersListPage, null);
};
/* harmony default export */ const ListPage = (UsersListPageSwitch);


/***/ }),

/***/ 87901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24201);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49402);
/* harmony import */ var _App_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36364);
/* harmony import */ var _ListPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61611);





const ProtectedListPage = () => {
  const permissions = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__/* .useSelector */ .v9)(_App_selectors__WEBPACK_IMPORTED_MODULE_3__/* .selectAdminPermissions */ ._);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .CheckPagePermissions */ .O4, { permissions: permissions.settings.users.main }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ListPage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedListPage);


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

/***/ 16543:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);

const v = (h) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...h, children: [
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { fill: "#32324D", d: "M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z" }),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      fill: "#32324D",
      d: "M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"
    }
  ),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      fill: "#32324D",
      d: "M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z"
    }
  )
] }), o = v;



/***/ })

}]);