"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[1495],{

/***/ 91043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Settings)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(73354);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(27875);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(74758);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(93415);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(23298);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(74577);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.mjs
var TextInput = __webpack_require__(12881);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.mjs
var Select = __webpack_require__(5627);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.mjs
var Option = __webpack_require__(78955);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48102);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Envelop.mjs
var Envelop = __webpack_require__(16543);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(40464);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(37652);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-email/admin/src/constants.js
var constants = __webpack_require__(31350);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(47853);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-email/admin/src/utils/schema.js


const schema = yup_es/* object */.Ry().shape({
  email: yup_es/* string */.Z_().email(dist/* translatedErrors */.I0.email).required(dist/* translatedErrors */.I0.required)
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-email/admin/src/pages/Settings/index.js









const DocumentationLink = styled_components_browser_esm/* default */.ZP.a`
  color: ${({ theme }) => theme.colors.primary600};
`;
const ProtectedSettingsPage = () => /* @__PURE__ */ react.createElement(dist/* CheckPagePermissions */.O4, { permissions: constants/* PERMISSIONS */._.settings }, /* @__PURE__ */ react.createElement(SettingsPage, null));
const SettingsPage = () => {
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { lockApp, unlockApp } = (0,dist/* useOverlayBlocker */.o1)();
  const { get, post } = (0,dist/* useFetchClient */.kY)();
  const { data, isLoading } = (0,es.useQuery)(["email", "settings"], async () => {
    const {
      data: { config }
    } = await get("/email/settings");
    return config;
  });
  const mutation = (0,es.useMutation)(
    (body) => post("/email/test", body),
    {
      onError() {
        toggleNotification({
          type: "warning",
          message: formatMessage(
            {
              id: "email.Settings.email.plugin.notification.test.error",
              defaultMessage: "Failed to send a test mail to {to}"
            },
            { to: testAddress }
          )
        });
      },
      onSuccess() {
        toggleNotification({
          type: "success",
          message: formatMessage(
            {
              id: "email.Settings.email.plugin.notification.test.success",
              defaultMessage: "Email test succeeded, check the {to} mailbox"
            },
            { to: testAddress }
          )
        });
      }
    },
    {
      retry: false
    }
  );
  (0,dist/* useFocusWhenNavigate */.go)();
  const [formErrors, setFormErrors] = react.useState({});
  const [testAddress, setTestAddress] = react.useState("");
  const [isTestAddressValid, setIsTestAddressValid] = react.useState(false);
  react.useEffect(() => {
    utils_schema.validate({ email: testAddress }, { abortEarly: false }).then(() => setIsTestAddressValid(true)).catch(() => setIsTestAddressValid(false));
  }, [testAddress]);
  const handleChange = (e) => {
    setTestAddress(() => e.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await utils_schema.validate({ email: testAddress }, { abortEarly: false });
    } catch (error) {
      setFormErrors((0,dist/* getYupInnerErrors */.CJ)(error));
    }
    lockApp();
    mutation.mutate({ to: testAddress });
    unlockApp();
  };
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { labelledBy: "title", "aria-busy": isLoading || mutation.isLoading }, /* @__PURE__ */ react.createElement(
    dist/* SettingsPageTitle */.SL,
    {
      name: formatMessage({
        id: "email.Settings.email.plugin.title",
        defaultMessage: "Configuration"
      })
    }
  ), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      id: "title",
      title: formatMessage({
        id: "email.Settings.email.plugin.title",
        defaultMessage: "Configuration"
      }),
      subtitle: formatMessage({
        id: "email.Settings.email.plugin.subTitle",
        defaultMessage: "Test the settings for the Email plugin"
      })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, isLoading ? /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null) : /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 7 }, /* @__PURE__ */ react.createElement(
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
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
      id: "email.Settings.email.plugin.title.config",
      defaultMessage: "Configuration"
    })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage(
      {
        id: "email.Settings.email.plugin.text.configuration",
        defaultMessage: "The plugin is configured through the {file} file, checkout this {link} for the documentation."
      },
      {
        file: "./config/plugins.js",
        link: /* @__PURE__ */ react.createElement(
          DocumentationLink,
          {
            href: "https://docs.strapi.io/developer-docs/latest/plugins/email.html",
            target: "_blank",
            rel: "noopener noreferrer"
          },
          formatMessage({
            id: "email.link",
            defaultMessage: "Link"
          })
        )
      }
    ))), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 5 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        name: "shipper-email",
        label: formatMessage({
          id: "email.Settings.email.plugin.label.defaultFrom",
          defaultMessage: "Default sender email"
        }),
        placeholder: formatMessage({
          id: "email.Settings.email.plugin.placeholder.defaultFrom",
          defaultMessage: "ex: Strapi No-Reply '<'no-reply@strapi.io'>'"
        }),
        disabled: true,
        onChange: () => {
        },
        value: data.settings.defaultFrom
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        name: "response-email",
        label: formatMessage({
          id: "email.Settings.email.plugin.label.defaultReplyTo",
          defaultMessage: "Default response email"
        }),
        placeholder: formatMessage({
          id: "email.Settings.email.plugin.placeholder.defaultReplyTo",
          defaultMessage: `ex: Strapi '<'example@strapi.io'>'`
        }),
        disabled: true,
        onChange: () => {
        },
        value: data.settings.defaultReplyTo
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
      Select/* Select */.P,
      {
        name: "email-provider",
        label: formatMessage({
          id: "email.Settings.email.plugin.label.provider",
          defaultMessage: "Email provider"
        }),
        disabled: true,
        onChange: () => {
        },
        value: data.provider
      },
      /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: data.provider }, data.provider)
    ))))
  ), /* @__PURE__ */ react.createElement(
    Flex/* Flex */.k,
    {
      alignItems: "stretch",
      background: "neutral0",
      direction: "column",
      gap: 4,
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7
    },
    /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
      id: "email.Settings.email.plugin.title.test",
      defaultMessage: "Test email delivery"
    })),
    /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 5, alignItems: "end" }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        id: "test-address-input",
        name: "test-address",
        onChange: handleChange,
        label: formatMessage({
          id: "email.Settings.email.plugin.label.testAddress",
          defaultMessage: "Recipient email"
        }),
        value: testAddress,
        error: formErrors.email?.id && formatMessage({
          id: `email.${formErrors.email?.id}`,
          defaultMessage: "This is an invalid email"
        }),
        placeholder: formatMessage({
          id: "email.Settings.email.plugin.placeholder.testAddress",
          defaultMessage: "ex: developer@example.com"
        })
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 7, s: 12 }, /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        loading: mutation.isLoading,
        disabled: !isTestAddressValid,
        type: "submit",
        startIcon: /* @__PURE__ */ react.createElement(Envelop/* default */.Z, null)
      },
      formatMessage({
        id: "email.Settings.email.plugin.button.test-email",
        defaultMessage: "Send test email"
      })
    )))
  )))));
};
/* harmony default export */ const Settings = (ProtectedSettingsPage);


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