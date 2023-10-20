"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[695],{

/***/ 56752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SettingsPage: () => (/* binding */ SettingsPage),
  "default": () => (/* binding */ pages_SettingsPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(73354);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(27875);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48102);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(74758);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.mjs
var Layout = __webpack_require__(27997);
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
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ToggleInput/ToggleInput.mjs
var ToggleInput = __webpack_require__(2548);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(59082);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(6078);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(364);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(40464);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/constants.js
var constants = __webpack_require__(11727);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/index.js + 9 modules
var utils = __webpack_require__(63955);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/init.js
const init = (initialState) => {
  return initialState;
};
/* harmony default export */ const SettingsPage_init = (init);

// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(61815);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(43433);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/reducer.js


const initialState = {
  initialData: {
    responsiveDimensions: true,
    sizeOptimization: true,
    autoOrientation: false,
    videoPreview: false
  },
  modifiedData: {
    responsiveDimensions: true,
    sizeOptimization: true,
    autoOrientation: false,
    videoPreview: false
  }
};
const reducer = (state, action) => (
  // eslint-disable-next-line consistent-return
  (0,immer_esm/* default */.ZP)(state, (drafState) => {
    switch (action.type) {
      case "GET_DATA_SUCCEEDED": {
        drafState.initialData = action.data;
        drafState.modifiedData = action.data;
        break;
      }
      case "ON_CHANGE": {
        set_default()(drafState, ["modifiedData", ...action.keys.split(".")], action.value);
        break;
      }
      default:
        return state;
    }
  })
);
/* harmony default export */ const SettingsPage_reducer = (reducer);


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/index.js












const SettingsPage = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { lockApp, unlockApp } = (0,dist/* useOverlayBlocker */.o1)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { get, put } = (0,dist/* useFetchClient */.kY)();
  (0,dist/* useFocusWhenNavigate */.go)();
  const [{ initialData, modifiedData }, dispatch] = (0,react.useReducer)(SettingsPage_reducer, initialState, SettingsPage_init);
  const { data, isLoading, refetch } = (0,es.useQuery)({
    queryKey: ["upload", "settings"],
    async queryFn() {
      const {
        data: { data: data2 }
      } = await get("/upload/settings");
      return data2;
    }
  });
  react.useEffect(() => {
    if (data) {
      dispatch({
        type: "GET_DATA_SUCCEEDED",
        data
      });
    }
  }, [data]);
  const isSaveButtonDisabled = isEqual_default()(initialData, modifiedData);
  const { mutateAsync, isLoading: isSubmiting } = (0,es.useMutation)({
    async mutationFn(body) {
      return put("/upload/settings", body);
    },
    onSuccess() {
      refetch();
      toggleNotification({
        type: "success",
        message: { id: "notification.form.success.fields" }
      });
    },
    onError(err) {
      console.error(err);
    }
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSaveButtonDisabled) {
      return;
    }
    lockApp();
    await mutateAsync(modifiedData);
    unlockApp();
  };
  const handleChange = ({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE",
      keys: name,
      value
    });
  };
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { tabIndex: -1 }, /* @__PURE__ */ react.createElement(
    Helmet/* Helmet */.q,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("page.title"),
        defaultMessage: "Settings - Media Libray"
      })
    }
  ), /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.header.label"),
        defaultMessage: "Media Library"
      }),
      primaryAction: /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          disabled: isSaveButtonDisabled,
          loading: isSubmiting,
          type: "submit",
          startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
          size: "S"
        },
        formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        })
      ),
      subtitle: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.sub-header.label"),
        defaultMessage: "Configure the settings for the Media Library"
      })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, isLoading ? /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null) : /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 12 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
    id: (0,utils/* getTrad */.OB)("settings.blockTitle"),
    defaultMessage: "Asset management"
  }))), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 6 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
    ToggleInput/* ToggleInput */.s,
    {
      "aria-label": "responsiveDimensions",
      checked: modifiedData.responsiveDimensions,
      hint: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.responsiveDimensions.description"),
        defaultMessage: "Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."
      }),
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.responsiveDimensions.label"),
        defaultMessage: "Responsive friendly upload"
      }),
      name: "responsiveDimensions",
      offLabel: formatMessage({
        id: "app.components.ToggleCheckbox.off-label",
        defaultMessage: "Off"
      }),
      onLabel: formatMessage({
        id: "app.components.ToggleCheckbox.on-label",
        defaultMessage: "On"
      }),
      onChange: (e) => {
        handleChange({
          target: { name: "responsiveDimensions", value: e.target.checked }
        });
      }
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
    ToggleInput/* ToggleInput */.s,
    {
      "aria-label": "sizeOptimization",
      checked: modifiedData.sizeOptimization,
      hint: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.sizeOptimization.description"),
        defaultMessage: "Enabling this option will reduce the image size and slightly reduce its quality."
      }),
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.sizeOptimization.label"),
        defaultMessage: "Size optimization"
      }),
      name: "sizeOptimization",
      offLabel: formatMessage({
        id: "app.components.ToggleCheckbox.off-label",
        defaultMessage: "Off"
      }),
      onLabel: formatMessage({
        id: "app.components.ToggleCheckbox.on-label",
        defaultMessage: "On"
      }),
      onChange: (e) => {
        handleChange({
          target: { name: "sizeOptimization", value: e.target.checked }
        });
      }
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
    ToggleInput/* ToggleInput */.s,
    {
      "aria-label": "autoOrientation",
      checked: modifiedData.autoOrientation,
      hint: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.autoOrientation.description"),
        defaultMessage: "Enabling this option will automatically rotate the image according to EXIF orientation tag."
      }),
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.autoOrientation.label"),
        defaultMessage: "Auto orientation"
      }),
      name: "autoOrientation",
      offLabel: formatMessage({
        id: "app.components.ToggleCheckbox.off-label",
        defaultMessage: "Off"
      }),
      onLabel: formatMessage({
        id: "app.components.ToggleCheckbox.on-label",
        defaultMessage: "On"
      }),
      onChange: (e) => {
        handleChange({
          target: { name: "autoOrientation", value: e.target.checked }
        });
      }
    }
  ))))))))));
};
const ProtectedSettingsPage = () => /* @__PURE__ */ react.createElement(dist/* CheckPagePermissions */.O4, { permissions: constants/* PERMISSIONS */._I.settings }, /* @__PURE__ */ react.createElement(SettingsPage, null));
/* harmony default export */ const pages_SettingsPage = (ProtectedSettingsPage);


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

/***/ 27997:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37652);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93415);



const GridContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x))`
  display: grid;
  grid-template-columns: ${({ hasSideNav }) => hasSideNav ? `auto 1fr` : "1fr"};
`;
const OverflowingItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x))`
  overflow-x: hidden;
`;
const Layout = ({ sideNav, children }) => {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(GridContainer, { hasSideNav: Boolean(sideNav), children: [sideNav, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OverflowingItem, { paddingBottom: 10, children })] });
};



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