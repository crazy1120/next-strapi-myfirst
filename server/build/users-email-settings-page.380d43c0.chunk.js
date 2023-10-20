"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[8418],{

/***/ 38977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EmailTemplates)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.mjs
var useNotifyAT = __webpack_require__(51926);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(73354);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(27875);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(74758);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(40464);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/constants.js
var constants = __webpack_require__(84419);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js + 1 modules
var utils = __webpack_require__(99688);
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
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Textarea/Textarea.mjs
var Textarea = __webpack_require__(39708);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.mjs
var ModalFooter = __webpack_require__(35250);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48102);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Breadcrumbs/Breadcrumbs.mjs + 1 modules
var Breadcrumbs = __webpack_require__(89486);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Breadcrumbs/Crumb.mjs
var Crumb = __webpack_require__(82298);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(71563);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70627);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(47853);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/utils/schema.js


const schema = yup_es/* object */.Ry().shape({
  options: yup_es/* object */.Ry().shape({
    from: yup_es/* object */.Ry().shape({
      name: yup_es/* string */.Z_().required(dist/* translatedErrors */.I0.required),
      email: yup_es/* string */.Z_().email(dist/* translatedErrors */.I0.email).required(dist/* translatedErrors */.I0.required)
    }).required(),
    response_email: yup_es/* string */.Z_().email(dist/* translatedErrors */.I0.email),
    object: yup_es/* string */.Z_().required(dist/* translatedErrors */.I0.required),
    message: yup_es/* string */.Z_().required(dist/* translatedErrors */.I0.required)
  }).required(dist/* translatedErrors */.I0.required)
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/components/EmailForm.js









const EmailForm = ({ template, onToggle, onSubmit }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(
    ModalLayout/* ModalLayout */.P,
    {
      onClose: onToggle,
      labelledBy: `${formatMessage({
        id: (0,utils/* getTrad */.OB)("PopUpForm.header.edit.email-templates"),
        defaultMessage: "Edit email template"
      })}, ${formatMessage({ id: (0,utils/* getTrad */.OB)(template.display), defaultMessage: template.display })}`
    },
    /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(
      Breadcrumbs/* Breadcrumbs */.O,
      {
        label: `${formatMessage({
          id: (0,utils/* getTrad */.OB)("PopUpForm.header.edit.email-templates"),
          defaultMessage: "Edit email template"
        })}, ${formatMessage({
          id: (0,utils/* getTrad */.OB)(template.display),
          defaultMessage: template.display
        })}`
      },
      /* @__PURE__ */ react.createElement(Crumb/* Crumb */.$, null, formatMessage({
        id: (0,utils/* getTrad */.OB)("PopUpForm.header.edit.email-templates"),
        defaultMessage: "Edit email template"
      })),
      /* @__PURE__ */ react.createElement(Crumb/* Crumb */.$, { isCurrent: true }, formatMessage({ id: (0,utils/* getTrad */.OB)(template.display), defaultMessage: template.display }))
    )),
    /* @__PURE__ */ react.createElement(
      formik_esm/* Formik */.J9,
      {
        onSubmit,
        initialValues: template,
        validateOnChange: false,
        validationSchema: utils_schema,
        enableReinitialize: true
      },
      ({ errors, values, handleChange, isSubmitting }) => {
        return /* @__PURE__ */ react.createElement(dist/* Form */.l0, null, /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 5 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
          dist/* GenericInput */.jm,
          {
            intlLabel: {
              id: (0,utils/* getTrad */.OB)("PopUpForm.Email.options.from.name.label"),
              defaultMessage: "Shipper name"
            },
            name: "options.from.name",
            onChange: handleChange,
            value: values.options.from.name,
            error: errors?.options?.from?.name,
            type: "text"
          }
        )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
          dist/* GenericInput */.jm,
          {
            intlLabel: {
              id: (0,utils/* getTrad */.OB)("PopUpForm.Email.options.from.email.label"),
              defaultMessage: "Shipper email"
            },
            name: "options.from.email",
            onChange: handleChange,
            value: values.options.from.email,
            error: errors?.options?.from?.email,
            type: "text"
          }
        )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
          dist/* GenericInput */.jm,
          {
            intlLabel: {
              id: (0,utils/* getTrad */.OB)("PopUpForm.Email.options.response_email.label"),
              defaultMessage: "Response email"
            },
            name: "options.response_email",
            onChange: handleChange,
            value: values.options.response_email,
            error: errors?.options?.response_email,
            type: "text"
          }
        )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
          dist/* GenericInput */.jm,
          {
            intlLabel: {
              id: (0,utils/* getTrad */.OB)("PopUpForm.Email.options.object.label"),
              defaultMessage: "Subject"
            },
            name: "options.object",
            onChange: handleChange,
            value: values.options.object,
            error: errors?.options?.object,
            type: "text"
          }
        )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 12, s: 12 }, /* @__PURE__ */ react.createElement(
          Textarea/* Textarea */.g,
          {
            label: formatMessage({
              id: (0,utils/* getTrad */.OB)("PopUpForm.Email.options.message.label"),
              defaultMessage: "Message"
            }),
            id: "options.message",
            onChange: handleChange,
            value: values.options.message,
            error: errors?.options?.message && formatMessage({
              id: errors.options.message,
              defaultMessage: errors.options.message
            })
          }
        )))), /* @__PURE__ */ react.createElement(
          ModalFooter/* ModalFooter */.m,
          {
            startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: onToggle, variant: "tertiary" }, "Cancel"),
            endActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { loading: isSubmitting, type: "submit" }, "Finish")
          }
        ));
      }
    )
  );
};
EmailForm.propTypes = {
  template: prop_types_default().shape({
    display: (prop_types_default()).string,
    icon: (prop_types_default()).string,
    options: prop_types_default().shape({
      from: prop_types_default().shape({
        name: (prop_types_default()).string,
        email: (prop_types_default()).string
      }),
      message: (prop_types_default()).string,
      object: (prop_types_default()).string,
      response_email: (prop_types_default()).string
    })
  }).isRequired,
  onSubmit: (prop_types_default()).func.isRequired,
  onToggle: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_EmailForm = (EmailForm);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.mjs
var Table = __webpack_require__(70774);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.mjs
var Thead = __webpack_require__(38101);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.mjs
var Tr = __webpack_require__(93153);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.mjs
var Cell = __webpack_require__(50086);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(10989);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.mjs
var Tbody = __webpack_require__(86967);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.mjs
var Icon = __webpack_require__(50703);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(4987);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Refresh.mjs
var Refresh = __webpack_require__(84352);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.mjs
var Pencil = __webpack_require__(26784);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(59082);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/components/EmailTable.js







const EmailTable = ({ canUpdate, onEditClick }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount: 3, rowCount: 3 }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, { width: "1%" }, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, formatMessage({
    id: (0,utils/* getTrad */.OB)("Email.template.table.icon.label"),
    defaultMessage: "icon"
  }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: (0,utils/* getTrad */.OB)("Email.template.table.name.label"),
    defaultMessage: "name"
  }))), /* @__PURE__ */ react.createElement(Cell.Th, { width: "1%" }, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, formatMessage({
    id: (0,utils/* getTrad */.OB)("Email.template.table.action.label"),
    defaultMessage: "action"
  }))))), /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, /* @__PURE__ */ react.createElement(Tr.Tr, { ...(0,dist/* onRowClick */.X7)({ fn: () => onEditClick("reset_password") }) }, /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Icon/* Icon */.J, null, /* @__PURE__ */ react.createElement(
    Refresh/* default */.Z,
    {
      "aria-label": formatMessage({
        id: "global.reset-password",
        defaultMessage: "Reset password"
      })
    }
  ))), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
    id: "global.reset-password",
    defaultMessage: "Reset password"
  }))), /* @__PURE__ */ react.createElement(Cell.Td, { ...dist/* stopPropagation */.UW }, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      onClick: () => onEditClick("reset_password"),
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("Email.template.form.edit.label"),
        defaultMessage: "Edit a template"
      }),
      noBorder: true,
      icon: canUpdate && /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null)
    }
  ))), /* @__PURE__ */ react.createElement(Tr.Tr, { ...(0,dist/* onRowClick */.X7)({ fn: () => onEditClick("email_confirmation") }) }, /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Icon/* Icon */.J, null, /* @__PURE__ */ react.createElement(
    Check/* default */.Z,
    {
      "aria-label": formatMessage({
        id: (0,utils/* getTrad */.OB)("Email.template.email_confirmation"),
        defaultMessage: "Email address confirmation"
      })
    }
  ))), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
    id: (0,utils/* getTrad */.OB)("Email.template.email_confirmation"),
    defaultMessage: "Email address confirmation"
  }))), /* @__PURE__ */ react.createElement(Cell.Td, { ...dist/* stopPropagation */.UW }, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      onClick: () => onEditClick("email_confirmation"),
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("Email.template.form.edit.label"),
        defaultMessage: "Edit a template"
      }),
      noBorder: true,
      icon: canUpdate && /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null)
    }
  )))));
};
EmailTable.propTypes = {
  canUpdate: (prop_types_default()).bool.isRequired,
  onEditClick: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_EmailTable = (EmailTable);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/index.js









const ProtectedEmailTemplatesPage = () => /* @__PURE__ */ react.createElement(dist/* CheckPagePermissions */.O4, { permissions: constants/* PERMISSIONS */._.readEmailTemplates }, /* @__PURE__ */ react.createElement(EmailTemplatesPage, null));
const EmailTemplatesPage = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.G)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { lockApp, unlockApp } = (0,dist/* useOverlayBlocker */.o1)();
  const queryClient = (0,es.useQueryClient)();
  const { get, put } = (0,dist/* useFetchClient */.kY)();
  const { formatAPIError } = (0,dist/* useAPIErrorHandler */.So)();
  (0,dist/* useFocusWhenNavigate */.go)();
  const [isModalOpen, setIsModalOpen] = react.useState(false);
  const [templateToEdit, setTemplateToEdit] = react.useState(null);
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canUpdate }
  } = (0,dist/* useRBAC */.ss)({ update: constants/* PERMISSIONS */._.updateEmailTemplates });
  const { isLoading: isLoadingData, data } = (0,es.useQuery)(
    ["users-permissions", "email-templates"],
    async () => {
      const { data: data2 } = await get("/users-permissions/email-templates");
      return data2;
    },
    {
      onSuccess() {
        notifyStatus(
          formatMessage({
            id: (0,utils/* getTrad */.OB)("Email.template.data.loaded"),
            defaultMessage: "Email templates has been loaded"
          })
        );
      },
      onError(error) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(error)
        });
      }
    }
  );
  const isLoading = isLoadingForPermissions || isLoadingData;
  const handleToggle = () => {
    setIsModalOpen((prev) => !prev);
  };
  const handleEditClick = (template) => {
    setTemplateToEdit(template);
    handleToggle();
  };
  const submitMutation = (0,es.useMutation)(
    (body) => put("/users-permissions/email-templates", { "email-templates": body }),
    {
      async onSuccess() {
        await queryClient.invalidateQueries(["users-permissions", "email-templates"]);
        toggleNotification({
          type: "success",
          message: { id: "notification.success.saved", defaultMessage: "Saved" }
        });
        trackUsage("didEditEmailTemplates");
        unlockApp();
        handleToggle();
      },
      onError(error) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(error)
        });
        unlockApp();
      },
      refetchActive: true
    }
  );
  const handleSubmit = (body) => {
    lockApp();
    trackUsage("willEditEmailTemplates");
    const editedTemplates = { ...data, [templateToEdit]: body };
    submitMutation.mutate(editedTemplates);
  };
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": "true" }, /* @__PURE__ */ react.createElement(
      dist/* SettingsPageTitle */.SL,
      {
        name: formatMessage({
          id: (0,utils/* getTrad */.OB)("HeaderNav.link.emailTemplates"),
          defaultMessage: "Email templates"
        })
      }
    ), /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.T,
      {
        title: formatMessage({
          id: (0,utils/* getTrad */.OB)("HeaderNav.link.emailTemplates"),
          defaultMessage: "Email templates"
        })
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null)));
  }
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": submitMutation.isLoading }, /* @__PURE__ */ react.createElement(
    dist/* SettingsPageTitle */.SL,
    {
      name: formatMessage({
        id: (0,utils/* getTrad */.OB)("HeaderNav.link.emailTemplates"),
        defaultMessage: "Email templates"
      })
    }
  ), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("HeaderNav.link.emailTemplates"),
        defaultMessage: "Email templates"
      })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(components_EmailTable, { onEditClick: handleEditClick, canUpdate }), isModalOpen && /* @__PURE__ */ react.createElement(
    components_EmailForm,
    {
      template: data[templateToEdit],
      onToggle: handleToggle,
      onSubmit: handleSubmit
    }
  )));
};
/* harmony default export */ const EmailTemplates = (ProtectedEmailTemplatesPage);


/***/ }),

/***/ 99688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  YX: () => (/* reexport */ utils_cleanPermissions),
  OB: () => (/* reexport */ getTrad/* default */.Z)
});

// UNUSED EXPORTS: formatPolicies

// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(10124);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/cleanPermissions.js

const cleanPermissions = (permissions) => Object.keys(permissions).reduce((acc, current) => {
  const currentPermission = permissions[current].controllers;
  const cleanedControllers = Object.keys(currentPermission).reduce((acc2, curr) => {
    if (isEmpty_default()(currentPermission[curr])) {
      return acc2;
    }
    acc2[curr] = currentPermission[curr];
    return acc2;
  }, {});
  if (isEmpty_default()(cleanedControllers)) {
    return acc;
  }
  acc[current] = { controllers: cleanedControllers };
  return acc;
}, {});
/* harmony default export */ const utils_cleanPermissions = (cleanPermissions);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/getTrad.js + 1 modules
var getTrad = __webpack_require__(58655);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js





/***/ }),

/***/ 74758:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ ContentLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93415);


const ContentLayout = ({ children }) => {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .x, { paddingLeft: 10, paddingRight: 10, children });
};



/***/ }),

/***/ 27875:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ HeaderLayout)
});

// UNUSED EXPORTS: BaseHeaderLayout

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74081);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(37652);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useElementOnScreen.mjs

const useElementOnScreen = (options) => {
  const containerRef = (0,react.useRef)(null);
  const [isVisible, setIsVisible] = (0,react.useState)(true);
  const callback = ([entry]) => {
    setIsVisible(entry.isIntersecting);
  };
  (0,react.useEffect)(() => {
    const containerEl = containerRef.current;
    const observer = new IntersectionObserver(callback, options);
    if (containerEl) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerEl) {
        observer.disconnect();
      }
    };
  }, [containerRef, options]);
  return [containerRef, isVisible];
};


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var dist = __webpack_require__(66705);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useResizeObserver.mjs


const useResizeObserver = (sources, onResize) => {
  const handleResize = (0,dist/* useCallbackRef */.W)(onResize);
  (0,react.useLayoutEffect)(() => {
    const resizeObs = new ResizeObserver(handleResize);
    if (Array.isArray(sources)) {
      sources.forEach((source) => {
        if (source.current) {
          resizeObs.observe(source.current);
        }
      });
    } else if (sources.current) {
      resizeObs.observe(sources.current);
    }
    return () => {
      resizeObs.disconnect();
    };
  }, [sources, handleResize]);
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(93415);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs








const HeaderLayout = (props) => {
  const baseHeaderLayoutRef = (0,react.useRef)(null);
  const [headerSize, setHeaderSize] = (0,react.useState)(null);
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });
  useResizeObserver(containerRef, () => {
    if (containerRef.current) {
      setHeaderSize(containerRef.current.getBoundingClientRect());
    }
  });
  (0,react.useEffect)(() => {
    if (baseHeaderLayoutRef.current) {
      setHeaderSize(baseHeaderLayoutRef.current.getBoundingClientRect());
    }
  }, [baseHeaderLayoutRef]);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)("div", { style: { height: headerSize?.height }, ref: containerRef, children: isVisible && (0,jsx_runtime.jsx)(BaseHeaderLayout, { ref: baseHeaderLayoutRef, ...props }) }), !isVisible && (0,jsx_runtime.jsx)(BaseHeaderLayout, { ...props, sticky: true, width: headerSize?.width })] });
};
HeaderLayout.displayName = "HeaderLayout";
const StickyBox = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  width: ${({ width }) => width ? `${width / 16}rem` : void 0};
  z-index: ${({ theme }) => theme.zIndices[1]};
`;
const BaseHeaderLayout = react.forwardRef(({ navigationAction, primaryAction, secondaryAction, subtitle, title, sticky, width, ...props }, ref) => {
  const isSubtitleString = typeof subtitle === "string";
  if (sticky) {
    return (0,jsx_runtime.jsx)(StickyBox, { paddingLeft: 6, paddingRight: 6, paddingTop: 3, paddingBottom: 3, position: "fixed", top: 0, right: 0, background: "neutral0", shadow: "tableShadow", width, "data-strapi-header-sticky": true, children: (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { children: [navigationAction && (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingRight: 3, children: navigationAction }), (0,jsx_runtime.jsxs)(Box/* Box */.x, { children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "beta", as: "h1", ...props, children: title }), isSubtitleString ? (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600", children: subtitle }) : subtitle] }), secondaryAction ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 4, children: secondaryAction }) : null] }), (0,jsx_runtime.jsx)(Flex/* Flex */.k, { children: primaryAction ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 2, children: primaryAction }) : void 0 })] }) });
  }
  return (0,jsx_runtime.jsxs)(Box/* Box */.x, { ref, paddingLeft: 10, paddingRight: 10, paddingBottom: 8, paddingTop: navigationAction ? 6 : 8, background: "neutral100", "data-strapi-header": true, children: [navigationAction ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingBottom: 2, children: navigationAction }) : null, (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { minWidth: 0, children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, { as: "h1", variant: "alpha", ...props, children: title }), secondaryAction ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 4, children: secondaryAction }) : null] }), primaryAction] }), isSubtitleString ? (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "epsilon", textColor: "neutral600", as: "p", children: subtitle }) : subtitle] });
});



/***/ }),

/***/ 73354:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37652);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93415);



const MainWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x))`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`;
const Main = ({ labelledBy = "main-content-title", ...props }) => {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MainWrapper, { "aria-labelledby": labelledBy, as: "main", id: "main-content", tabIndex: -1, ...props });
};



/***/ })

}]);