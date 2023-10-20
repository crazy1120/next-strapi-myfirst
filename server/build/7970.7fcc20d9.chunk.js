(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[7970],{

/***/ 51754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 79194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* reexport */ useInjectReducer)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(49402);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useInjectReducer/useInjectReducer.js


function useInjectReducer(namespace, reducer) {
  const store = (0,es/* useStore */.oR)();
  (0,react.useEffect)(() => {
    store.injectReducer(namespace, reducer);
  }, [store, namespace, reducer]);
}

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useInjectReducer/index.js



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

/***/ 11984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CI: () => (/* binding */ addStage),
/* harmony export */   ES: () => (/* binding */ cloneStage),
/* harmony export */   FP: () => (/* binding */ updateStagePosition),
/* harmony export */   Js: () => (/* binding */ resetWorkflow),
/* harmony export */   Lk: () => (/* binding */ setRoles),
/* harmony export */   Mu: () => (/* binding */ updateStages),
/* harmony export */   PP: () => (/* binding */ setWorkflows),
/* harmony export */   Pz: () => (/* binding */ setContentTypes),
/* harmony export */   _V: () => (/* binding */ deleteStage),
/* harmony export */   fC: () => (/* binding */ setWorkflow),
/* harmony export */   rI: () => (/* binding */ updateWorkflow),
/* harmony export */   wt: () => (/* binding */ setIsLoading),
/* harmony export */   xn: () => (/* binding */ updateStage)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86978);

function cloneStage(id) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_CLONE_STAGE */ .bc,
    payload: { id }
  };
}
function setWorkflow({ workflow }) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_SET_WORKFLOW */ .qZ,
    payload: workflow
  };
}
function setWorkflows({ workflows }) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_SET_WORKFLOWS */ .QM,
    payload: workflows
  };
}
function deleteStage(stageId) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_DELETE_STAGE */ .x4,
    payload: {
      stageId
    }
  };
}
function addStage(stage = {}) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_ADD_STAGE */ .Ot,
    payload: stage
  };
}
function updateStage(stageId, payload) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_UPDATE_STAGE */ .Nj,
    payload: {
      stageId,
      ...payload
    }
  };
}
function updateStages(payload) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_UPDATE_STAGES */ .k_,
    payload
  };
}
function updateStagePosition(oldIndex, newIndex) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_UPDATE_STAGE_POSITION */ .$k,
    payload: {
      newIndex,
      oldIndex
    }
  };
}
function updateWorkflow(payload) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_UPDATE_WORKFLOW */ .VS,
    payload
  };
}
function resetWorkflow() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_RESET_WORKFLOW */ .gu
  };
}
function setContentTypes(payload) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_SET_CONTENT_TYPES */ .yq,
    payload
  };
}
function setRoles(payload) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_SET_ROLES */ .zn,
    payload
  };
}
function setIsLoading(isLoading) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_SET_IS_LOADING */ .rg,
    payload: isLoading
  };
}


/***/ }),

/***/ 43390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  eJ: () => (/* reexport */ Back),
  lx: () => (/* reexport */ DragLayerRendered),
  h4: () => (/* reexport */ Header),
  fC: () => (/* reexport */ Root)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.mjs
var Layout = __webpack_require__(27997);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(73354);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(74758);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(27875);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.mjs
var ArrowLeft = __webpack_require__(76827);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./.cache/admin/src/components/DragLayer.tsx
var DragLayer = __webpack_require__(40784);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/constants.js
var constants = __webpack_require__(86978);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.mjs
var CarretDown = __webpack_require__(10411);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70627);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(37652);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/StageDragPreview/StageDragPreview.js






const Toggle = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  svg path {
    fill: ${({ theme }) => theme.colors.neutral600};
  }
`;
function StageDragPreview({ name }) {
  return /* @__PURE__ */ react.createElement(
    Flex/* Flex */.k,
    {
      background: "primary100",
      borderStyle: "dashed",
      borderColor: "primary600",
      borderWidth: "1px",
      gap: 3,
      hasRadius: true,
      padding: 3,
      shadow: "tableShadow",
      width: (0,dist/* pxToRem */.Q1)(300)
    },
    /* @__PURE__ */ react.createElement(
      Toggle,
      {
        alignItems: "center",
        background: "neutral200",
        borderRadius: "50%",
        height: 6,
        justifyContent: "center",
        width: 6
      },
      /* @__PURE__ */ react.createElement(CarretDown/* default */.Z, { width: `${8 / 16}rem` })
    ),
    /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold" }, name)
  );
}
StageDragPreview.propTypes = {
  name: (prop_types_default()).string.isRequired
};

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/StageDragPreview/index.js


;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Layout/Layout.js








function renderDragLayerItem({ type, item }) {
  switch (type) {
    case constants/* DRAG_DROP_TYPES */.uL.STAGE:
      return /* @__PURE__ */ react.createElement(StageDragPreview, { ...item });
    default:
      return null;
  }
}
function DragLayerRendered() {
  return /* @__PURE__ */ react.createElement(DragLayer/* DragLayer */.r, { renderItem: renderDragLayerItem });
}
function Root({ children }) {
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(Main/* Main */.o, { tabIndex: -1 }, /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, children)));
}
function Back({ href }) {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(dist/* Link */.rU, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null), to: href }, formatMessage({
    id: "global.back",
    defaultMessage: "Back"
  }));
}
function Header({ title, subtitle, navigationAction, primaryAction }) {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(dist/* SettingsPageTitle */.SL, { name: title }), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      navigationAction,
      primaryAction,
      title,
      subtitle
    }
  ));
}


;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Layout/index.js



/***/ }),

/***/ 38705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  uT: () => (/* reexport */ Body),
  fC: () => (/* reexport */ LimitsModal),
  Dx: () => (/* reexport */ Title)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.mjs
var ModalLayout = __webpack_require__(5938);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.mjs
var ModalBody = __webpack_require__(15244);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(93415);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(4987);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/LinkButton/LinkButton.mjs
var LinkButton = __webpack_require__(37370);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cross.mjs
var Cross = __webpack_require__(95066);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70627);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(37652);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/LimitsModal/assets/balloon.png
const balloon_namespaceObject = __webpack_require__.p + "0cd5f8915b265d5b1856.png";
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/LimitsModal/LimitsModal.js








const TITLE_ID = "limits-title";
const CTA_LEARN_MORE_HREF = "https://strapi.io/pricing-cloud";
const CTA_SALES_HREF = "https://strapi.io/contact-sales";
function Title({ children }) {
  return /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "alpha", id: TITLE_ID }, children);
}
Title.propTypes = {
  children: (prop_types_default()).node.isRequired
};
function Body({ children }) {
  return /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "omega" }, children);
}
Body.propTypes = {
  children: (prop_types_default()).node.isRequired
};
function CallToActions() {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2, paddingTop: 4 }, /* @__PURE__ */ react.createElement(LinkButton/* LinkButton */.Q, { variant: "default", isExternal: true, href: CTA_LEARN_MORE_HREF }, formatMessage({
    id: "Settings.review-workflows.limit.cta.learn",
    defaultMessage: "Learn more"
  })), /* @__PURE__ */ react.createElement(LinkButton/* LinkButton */.Q, { variant: "tertiary", isExternal: true, href: CTA_SALES_HREF }, formatMessage({
    id: "Settings.review-workflows.limit.cta.sales",
    defaultMessage: "Contact Sales"
  })));
}
const BalloonImage = styled_components_browser_esm/* default */.ZP.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({ theme }) => `-${theme.spaces[7]}`};
  margin-top: ${({ theme }) => `-${theme.spaces[7]}`};
  width: 360px;
`;
function LimitsModal({ children, isOpen, onClose }) {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { labelledBy: TITLE_ID }, /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2, paddingLeft: 7, position: "relative" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "start", direction: "column", gap: 2, width: "60%" }, children, /* @__PURE__ */ react.createElement(CallToActions, null)), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "end", height: "100%", width: "40%" }, /* @__PURE__ */ react.createElement(BalloonImage, { src: balloon_namespaceObject, "aria-hidden": true, alt: "", loading: "lazy" }), /* @__PURE__ */ react.createElement(Box/* Box */.x, { display: "flex", position: "absolute", right: 0, top: 0 }, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      icon: /* @__PURE__ */ react.createElement(Cross/* default */.Z, null),
      "aria-label": formatMessage({
        id: "global.close",
        defaultMessage: "Close"
      }),
      onClick: onClose
    }
  ))))));
}
LimitsModal.defaultProps = {
  isOpen: false
};
LimitsModal.propTypes = {
  children: (prop_types_default()).node.isRequired,
  isOpen: (prop_types_default()).bool,
  onClose: (prop_types_default()).func.isRequired
};

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/LimitsModal/index.js




/***/ }),

/***/ 68997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* reexport */ Stages)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(93415);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70627);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(49402);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(37652);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/actions/index.js
var actions = __webpack_require__(11984);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/PlusCircle.mjs
var PlusCircle = __webpack_require__(77225);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/AddStage/AddStage.js





const StyledAddIcon = (0,styled_components_browser_esm/* default */.ZP)((0,PlusCircle/* default */.Z))`
  > circle {
    fill: ${({ theme }) => theme.colors.neutral150};
  }
  > path {
    fill: ${({ theme }) => theme.colors.neutral600};
  }
`;
const StyledButton = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  border-radius: 26px;

  svg {
    height: ${({ theme }) => theme.spaces[6]};
    width: ${({ theme }) => theme.spaces[6]};

    > path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary600} !important;
    ${Typography/* Typography */.Z} {
      color: ${({ theme }) => theme.colors.primary600} !important;
    }

    ${StyledAddIcon} {
      > circle {
        fill: ${({ theme }) => theme.colors.primary600};
      }
      > path {
        fill: ${({ theme }) => theme.colors.neutral100};
      }
    }
  }

  &:active {
    ${Typography/* Typography */.Z} {
      color: ${({ theme }) => theme.colors.primary600};
    }

    ${StyledAddIcon} {
      > circle {
        fill: ${({ theme }) => theme.colors.primary600};
      }
      > path {
        fill: ${({ theme }) => theme.colors.neutral100};
      }
    }
  }
`;
function AddStage({ children, ...props }) {
  return /* @__PURE__ */ react.createElement(
    StyledButton,
    {
      as: "button",
      background: "neutral0",
      border: "neutral150",
      paddingBottom: 3,
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop: 3,
      shadow: "filterShadow",
      ...props
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2 }, /* @__PURE__ */ react.createElement(StyledAddIcon, { "aria-hidden": true }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold", textColor: "neutral500" }, children))
  );
}
AddStage.propTypes = {
  children: (prop_types_default()).node.isRequired
};

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/AddStage/index.js


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/MultiSelect.mjs
var MultiSelect = __webpack_require__(97232);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(4987);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(10989);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/Accordion.mjs
var Accordion = __webpack_require__(45322);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionToggle.mjs + 1 modules
var AccordionToggle = __webpack_require__(24920);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionContent.mjs
var AccordionContent = __webpack_require__(34642);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(23298);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(74577);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.mjs
var TextInput = __webpack_require__(12881);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/SingleSelect.mjs
var SingleSelect = __webpack_require__(63738);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SimpleMenu/SimpleMenu.mjs
var SimpleMenu = __webpack_require__(69933);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SimpleMenu/Menu.mjs + 10 modules
var Menu = __webpack_require__(81740);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/More.mjs
var More = __webpack_require__(75438);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Drag.mjs
var Drag = __webpack_require__(33039);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Duplicate.mjs
var Duplicate = __webpack_require__(78031);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(71563);
// EXTERNAL MODULE: ./node_modules/react-dnd-html5-backend/dist/cjs/index.js
var cjs = __webpack_require__(92241);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/hooks/index.js + 13 modules
var hooks = __webpack_require__(21440);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/utils/index.js + 11 modules
var utils = __webpack_require__(21892);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/constants.js
var constants = __webpack_require__(86978);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/selectors.js
var selectors = __webpack_require__(65649);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/utils/colors.js
var colors = __webpack_require__(5318);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Stages/Stage/Stage.js

















const NestedOption = (0,styled_components_browser_esm/* default */.ZP)((0,MultiSelect/* MultiSelectOption */.ML))`
  padding-left: ${({ theme }) => theme.spaces[7]};
`;
const PermissionWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  > * {
    flex-grow: 1;
  }
`;
const DeleteMenuItem = (0,styled_components_browser_esm/* default */.ZP)((0,SimpleMenu/* MenuItem */.sN))`
  color: ${({ theme }) => theme.colors.danger600};
`;
const ContextMenuTrigger = (0,styled_components_browser_esm/* default */.ZP)(Menu/* Trigger */.xz)`
  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.neutral100};
  }

  > span {
    font-size: 0;
  }
`;
const DragIconButton = (0,styled_components_browser_esm/* default */.ZP)((0,IconButton/* IconButton */.h))`
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  justify-content: center;

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.neutral100};
  }

  svg {
    height: auto;
    width: ${({ theme }) => theme.spaces[3]}};
  }
`;
const AVAILABLE_COLORS = (0,colors/* getAvailableStageColors */.s)();
function StageDropPreview() {
  return /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      background: "primary100",
      borderStyle: "dashed",
      borderColor: "primary600",
      borderWidth: "1px",
      display: "block",
      hasRadius: true,
      padding: 6,
      shadow: "tableShadow"
    }
  );
}
function Stage({
  id,
  index,
  canDelete,
  canReorder,
  canUpdate,
  isOpen: isOpenDefault = false,
  stagesCount
}) {
  const getItemPos = (index2) => `${index2 + 1} of ${stagesCount}`;
  const handleGrabStage = (index2) => {
    setLiveText(
      formatMessage(
        {
          id: "dnd.grab-item",
          defaultMessage: `{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel.`
        },
        {
          item: nameField.value,
          position: getItemPos(index2)
        }
      )
    );
  };
  const handleDropStage = (index2) => {
    setLiveText(
      formatMessage(
        {
          id: "dnd.drop-item",
          defaultMessage: `{item}, dropped. Final position in list: {position}.`
        },
        {
          item: nameField.value,
          position: getItemPos(index2)
        }
      )
    );
  };
  const handleCancelDragStage = () => {
    setLiveText(
      formatMessage(
        {
          id: "dnd.cancel-item",
          defaultMessage: "{item}, dropped. Re-order cancelled."
        },
        {
          item: nameField.value
        }
      )
    );
  };
  const handleMoveStage = (newIndex, oldIndex) => {
    setLiveText(
      formatMessage(
        {
          id: "dnd.reorder",
          defaultMessage: "{item}, moved. New position in list: {position}."
        },
        {
          item: nameField.value,
          position: getItemPos(newIndex)
        }
      )
    );
    dispatch((0,actions/* updateStagePosition */.FP)(oldIndex, newIndex));
  };
  const handleApplyPermissionsToAllStages = () => {
    setIsApplyAllConfirmationOpen(true);
  };
  const [liveText, setLiveText] = react.useState(null);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const dispatch = (0,es/* useDispatch */.I0)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const [isOpen, setIsOpen] = react.useState(isOpenDefault);
  const [isApplyAllConfirmationOpen, setIsApplyAllConfirmationOpen] = react.useState(false);
  const [nameField, nameMeta, nameHelper] = (0,formik_esm/* useField */.U$)(`stages.${index}.name`);
  const [colorField, colorMeta, colorHelper] = (0,formik_esm/* useField */.U$)(`stages.${index}.color`);
  const [permissionsField, permissionsMeta, permissionsHelper] = (0,formik_esm/* useField */.U$)(
    `stages.${index}.permissions`
  );
  const roles = (0,es/* useSelector */.v9)(selectors/* selectRoles */.g$);
  const [{ handlerId, isDragging, handleKeyDown }, stageRef, dropRef, dragRef, dragPreviewRef] = (0,hooks/* useDragAndDrop */.Y9)(canReorder, {
    index,
    item: {
      name: nameField.value
    },
    onGrabItem: handleGrabStage,
    onDropItem: handleDropStage,
    onMoveItem: handleMoveStage,
    onCancel: handleCancelDragStage,
    type: constants/* DRAG_DROP_TYPES */.uL.STAGE
  });
  const composedRef = (0,utils/* composeRefs */.FE)(stageRef, dropRef);
  const colorOptions = AVAILABLE_COLORS.map(({ hex, name }) => ({
    value: hex,
    label: formatMessage(
      {
        id: "Settings.review-workflows.stage.color.name",
        defaultMessage: "{name}"
      },
      { name }
    ),
    color: hex
  }));
  const { themeColorName } = (0,colors/* getStageColorByHex */.k)(colorField.value) ?? {};
  const filteredRoles = roles.filter((role) => role.code !== "strapi-super-admin");
  react.useEffect(() => {
    dragPreviewRef((0,cjs/* getEmptyImage */.rX)(), { captureDraggingState: false });
  }, [dragPreviewRef, index]);
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { ref: composedRef }, liveText && /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, { "aria-live": "assertive" }, liveText), isDragging ? /* @__PURE__ */ react.createElement(StageDropPreview, null) : /* @__PURE__ */ react.createElement(
    Accordion/* Accordion */.U,
    {
      size: "S",
      variant: "primary",
      onToggle: () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
          trackUsage("willEditStage");
        }
      },
      expanded: isOpen,
      shadow: "tableShadow",
      error: nameMeta.error ?? colorMeta?.error ?? permissionsMeta?.error ?? false,
      hasErrorMessage: false
    },
    /* @__PURE__ */ react.createElement(
      AccordionToggle/* AccordionToggle */.B,
      {
        title: nameField.value,
        togglePosition: "left",
        action: (canDelete || canUpdate) && /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Menu/* Root */.fC, null, /* @__PURE__ */ react.createElement(ContextMenuTrigger, { size: "S", endIcon: null, paddingLeft: 2, paddingRight: 2 }, /* @__PURE__ */ react.createElement(More/* default */.Z, { "aria-hidden": true, focusable: false }), /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, { as: "span" }, formatMessage({
          id: "[tbdb].components.DynamicZone.more-actions",
          defaultMessage: "More actions"
        }))), /* @__PURE__ */ react.createElement(Menu/* Content */.VY, { popoverPlacement: "bottom-end", zIndex: 2 }, /* @__PURE__ */ react.createElement(Menu/* SubRoot */.rl, null, canUpdate && /* @__PURE__ */ react.createElement(SimpleMenu/* MenuItem */.sN, { onClick: () => dispatch((0,actions/* cloneStage */.ES)(id)) }, formatMessage({
          id: "Settings.review-workflows.stage.delete",
          defaultMessage: "Duplicate stage"
        })), canDelete && /* @__PURE__ */ react.createElement(DeleteMenuItem, { onClick: () => dispatch((0,actions/* deleteStage */._V)(id)) }, formatMessage({
          id: "Settings.review-workflows.stage.delete",
          defaultMessage: "Delete"
        }))))), canUpdate && /* @__PURE__ */ react.createElement(
          DragIconButton,
          {
            background: "transparent",
            forwardedAs: "div",
            hasRadius: true,
            role: "button",
            noBorder: true,
            tabIndex: 0,
            "data-handler-id": handlerId,
            ref: dragRef,
            label: formatMessage({
              id: "Settings.review-workflows.stage.drag",
              defaultMessage: "Drag"
            }),
            onClick: (e) => e.stopPropagation(),
            onKeyDown: handleKeyDown
          },
          /* @__PURE__ */ react.createElement(Drag/* default */.Z, null)
        ))
      }
    ),
    /* @__PURE__ */ react.createElement(AccordionContent/* AccordionContent */.v, { padding: 6, background: "neutral0", hasRadius: true }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        ...nameField,
        id: nameField.name,
        disabled: !canUpdate,
        label: formatMessage({
          id: "Settings.review-workflows.stage.name.label",
          defaultMessage: "Stage name"
        }),
        error: nameMeta.error ?? false,
        onChange: (event) => {
          nameHelper.setValue(event.target.value);
          dispatch((0,actions/* updateStage */.xn)(id, { name: event.target.value }));
        },
        required: true
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
      SingleSelect/* SingleSelect */.q4,
      {
        disabled: !canUpdate,
        error: colorMeta?.error ?? false,
        id: colorField.name,
        required: true,
        label: formatMessage({
          id: "content-manager.reviewWorkflows.stage.color",
          defaultMessage: "Color"
        }),
        onChange: (value) => {
          colorHelper.setValue(value);
          dispatch((0,actions/* updateStage */.xn)(id, { color: value }));
        },
        value: colorField.value.toUpperCase(),
        startIcon: /* @__PURE__ */ react.createElement(
          Flex/* Flex */.k,
          {
            as: "span",
            height: 2,
            background: colorField.value,
            borderColor: themeColorName === "neutral0" ? "neutral150" : "transparent",
            hasRadius: true,
            shrink: 0,
            width: 2
          }
        )
      },
      colorOptions.map(({ value, label, color }) => {
        const { themeColorName: themeColorName2 } = (0,colors/* getStageColorByHex */.k)(color);
        return /* @__PURE__ */ react.createElement(
          SingleSelect/* SingleSelectOption */.ag,
          {
            value,
            key: value,
            startIcon: /* @__PURE__ */ react.createElement(
              Flex/* Flex */.k,
              {
                as: "span",
                height: 2,
                background: color,
                borderColor: themeColorName2 === "neutral0" ? "neutral150" : "transparent",
                hasRadius: true,
                shrink: 0,
                width: 2
              }
            )
          },
          label
        );
      })
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, filteredRoles.length === 0 ? /* @__PURE__ */ react.createElement(
      dist/* NotAllowedInput */.X0,
      {
        description: {
          id: "Settings.review-workflows.stage.permissions.noPermissions.description",
          defaultMessage: "You don\u2019t have the permission to see roles"
        },
        intlLabel: {
          id: "Settings.review-workflows.stage.permissions.label",
          defaultMessage: "Roles that can change this stage"
        },
        name: permissionsField.name
      }
    ) : /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "flex-end", gap: 3 }, /* @__PURE__ */ react.createElement(PermissionWrapper, { grow: 1 }, /* @__PURE__ */ react.createElement(
      MultiSelect/* MultiSelect */.NU,
      {
        ...permissionsField,
        disabled: !canUpdate,
        error: permissionsMeta.error ?? false,
        id: permissionsField.name,
        label: formatMessage({
          id: "Settings.review-workflows.stage.permissions.label",
          defaultMessage: "Roles that can change this stage"
        }),
        onChange: (values) => {
          const permissions = values.map((value) => ({
            role: parseInt(value, 10),
            action: "admin::review-workflows.stage.transition"
          }));
          permissionsHelper.setValue(permissions);
          dispatch((0,actions/* updateStage */.xn)(id, { permissions }));
        },
        placeholder: formatMessage({
          id: "Settings.review-workflows.stage.permissions.placeholder",
          defaultMessage: "Select a role"
        }),
        required: true,
        value: (permissionsField.value ?? []).map(
          (permission) => `${permission.role}`
        ),
        withTags: true
      },
      [
        {
          label: formatMessage({
            id: "Settings.review-workflows.stage.permissions.allRoles.label",
            defaultMessage: "All roles"
          }),
          children: filteredRoles.map((role) => ({
            value: `${role.id}`,
            label: role.name
          }))
        }
      ].map((role) => {
        if ("children" in role) {
          return /* @__PURE__ */ react.createElement(
            MultiSelect/* MultiSelectGroup */.Ab,
            {
              key: role.label,
              label: role.label,
              values: role.children.map((child) => child.value)
            },
            role.children.map((role2) => {
              return /* @__PURE__ */ react.createElement(NestedOption, { key: role2.value, value: role2.value }, role2.label);
            })
          );
        }
        return /* @__PURE__ */ react.createElement(MultiSelect/* MultiSelectOption */.ML, { key: role.value, value: role.value }, role.label);
      })
    )), /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.h,
      {
        disabled: !canUpdate,
        icon: /* @__PURE__ */ react.createElement(Duplicate/* default */.Z, null),
        label: formatMessage({
          id: "Settings.review-workflows.stage.permissions.apply.label",
          defaultMessage: "Apply to all stages"
        }),
        size: "L",
        variant: "secondary",
        onClick: () => handleApplyPermissionsToAllStages(permissionsField.value)
      }
    )))))
  ), /* @__PURE__ */ react.createElement(
    dist/* ConfirmDialog */.QH.Root,
    {
      iconRightButton: null,
      isOpen: isApplyAllConfirmationOpen,
      onToggleDialog: () => setIsApplyAllConfirmationOpen(false),
      onConfirm: () => {
        dispatch((0,actions/* updateStages */.Mu)({ permissions: permissionsField.value }));
        setIsApplyAllConfirmationOpen(false);
        toggleNotification({
          type: "success",
          message: formatMessage({
            id: "Settings.review-workflows.page.edit.confirm.stages.permissions.copy.success",
            defaultMessage: "Applied roles to all other stages of the workflow"
          })
        });
      },
      variantRightButton: "primary"
    },
    /* @__PURE__ */ react.createElement(dist/* ConfirmDialog */.QH.Body, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textAlign: "center", variant: "omega" }, formatMessage({
      id: "Settings.review-workflows.page.edit.confirm.stages.permissions.copy",
      defaultMessage: "Roles that can change that stage will be applied to all the other stages."
    })))
  ));
}
Stage.propTypes = prop_types_default().shape({
  id: (prop_types_default()).number.isRequired,
  color: (prop_types_default()).string.isRequired,
  canDelete: (prop_types_default()).bool.isRequired,
  canReorder: (prop_types_default()).bool.isRequired,
  canUpdate: (prop_types_default()).bool.isRequired,
  stagesCount: (prop_types_default()).number.isRequired
}).isRequired;

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Stages/Stage/index.js


;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Stages/Stages.js










const Background = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  transform: translateX(-50%);
`;
function Stages({ canDelete, canUpdate, stages }) {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const dispatch = (0,es/* useDispatch */.I0)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", gap: 6, width: "100%" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { position: "relative", spacing: 4, width: "100%" }, /* @__PURE__ */ react.createElement(
    Background,
    {
      background: "neutral200",
      height: "100%",
      left: "50%",
      position: "absolute",
      top: "0",
      width: 2,
      zIndex: 1
    }
  ), /* @__PURE__ */ react.createElement(
    Flex/* Flex */.k,
    {
      direction: "column",
      alignItems: "stretch",
      gap: 6,
      zIndex: 2,
      position: "relative",
      as: "ol"
    },
    stages.map((stage, index) => {
      const id = stage?.id ?? stage.__temp_key__;
      return /* @__PURE__ */ react.createElement(Box/* Box */.x, { key: `stage-${id}`, as: "li" }, /* @__PURE__ */ react.createElement(
        Stage,
        {
          id,
          index,
          isOpen: !stage.id,
          canDelete: stages.length > 1 && canDelete,
          canReorder: stages.length > 1,
          canUpdate,
          stagesCount: stages.length
        }
      ));
    })
  )), canUpdate && /* @__PURE__ */ react.createElement(
    AddStage,
    {
      type: "button",
      onClick: () => {
        dispatch((0,actions/* addStage */.CI)({ name: "" }));
        trackUsage("willCreateStage");
      }
    },
    formatMessage({
      id: "Settings.review-workflows.stage.add",
      defaultMessage: "Add new stage"
    })
  ));
}
Stages.defaultProps = {
  canDelete: true,
  canUpdate: true,
  stages: []
};
Stages.propTypes = {
  canDelete: (prop_types_default()).bool,
  canUpdate: (prop_types_default()).bool,
  stages: prop_types_default().arrayOf(
    prop_types_default().shape({
      id: (prop_types_default()).number,
      __temp_key__: (prop_types_default()).number,
      name: (prop_types_default()).string.isRequired
    })
  )
};

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Stages/index.js



/***/ }),

/***/ 85230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: () => (/* reexport */ WorkflowAttributes)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/MultiSelect.mjs
var MultiSelect = __webpack_require__(97232);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(23298);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(74577);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.mjs
var TextInput = __webpack_require__(12881);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(71563);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70627);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(49402);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(37652);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/actions/index.js
var actions = __webpack_require__(11984);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/selectors.js
var selectors = __webpack_require__(65649);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/WorkflowAttributes/WorkflowAttributes.js










const NestedOption = (0,styled_components_browser_esm/* default */.ZP)((0,MultiSelect/* MultiSelectOption */.ML))`
  padding-left: ${({ theme }) => theme.spaces[7]};
`;
const ContentTypeTakeNotice = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z))`
  font-style: italic;
`;
function WorkflowAttributes({ canUpdate }) {
  const { formatMessage, locale } = (0,useIntl/* default */.Z)();
  const dispatch = (0,es/* useDispatch */.I0)();
  const { collectionTypes, singleTypes } = (0,es/* useSelector */.v9)(selectors/* selectContentTypes */.HK);
  const currentWorkflow = (0,es/* useSelector */.v9)(selectors/* selectCurrentWorkflow */.DV);
  const workflows = (0,es/* useSelector */.v9)(selectors/* selectWorkflows */.D6);
  const [nameField, nameMeta, nameHelper] = (0,formik_esm/* useField */.U$)("name");
  const [contentTypesField, contentTypesMeta, contentTypesHelper] = (0,formik_esm/* useField */.U$)("contentTypes");
  const formatter = (0,dist/* useCollator */.Xe)(locale, {
    sensitivity: "base"
  });
  return /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { background: "neutral0", hasRadius: true, gap: 4, padding: 6, shadow: "tableShadow" }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      ...nameField,
      id: nameField.name,
      disabled: !canUpdate,
      label: formatMessage({
        id: "Settings.review-workflows.workflow.name.label",
        defaultMessage: "Workflow Name"
      }),
      error: nameMeta.error ?? false,
      onChange: (event) => {
        dispatch((0,actions/* updateWorkflow */.rI)({ name: event.target.value }));
        nameHelper.setValue(event.target.value);
      },
      required: true
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
    MultiSelect/* MultiSelect */.NU,
    {
      ...contentTypesField,
      customizeContent: (value) => formatMessage(
        {
          id: "Settings.review-workflows.workflow.contentTypes.displayValue",
          defaultMessage: "{count} {count, plural, one {content type} other {content types}} selected"
        },
        { count: value.length }
      ),
      disabled: !canUpdate,
      error: contentTypesMeta.error ?? false,
      id: contentTypesField.name,
      label: formatMessage({
        id: "Settings.review-workflows.workflow.contentTypes.label",
        defaultMessage: "Associated to"
      }),
      onChange: (values) => {
        dispatch((0,actions/* updateWorkflow */.rI)({ contentTypes: values }));
        contentTypesHelper.setValue(values);
      },
      placeholder: formatMessage({
        id: "Settings.review-workflows.workflow.contentTypes.placeholder",
        defaultMessage: "Select"
      })
    },
    [
      ...collectionTypes.length > 0 ? [
        {
          label: formatMessage({
            id: "Settings.review-workflows.workflow.contentTypes.collectionTypes.label",
            defaultMessage: "Collection Types"
          }),
          children: [...collectionTypes].sort((a, b) => formatter.compare(a.info.displayName, b.info.displayName)).map((contentType) => ({
            label: contentType.info.displayName,
            value: contentType.uid
          }))
        }
      ] : [],
      ...singleTypes.length > 0 ? [
        {
          label: formatMessage({
            id: "Settings.review-workflows.workflow.contentTypes.singleTypes.label",
            defaultMessage: "Single Types"
          }),
          children: [...singleTypes].map((contentType) => ({
            label: contentType.info.displayName,
            value: contentType.uid
          }))
        }
      ] : []
    ].map((opt) => {
      if ("children" in opt) {
        return /* @__PURE__ */ react.createElement(
          MultiSelect/* MultiSelectGroup */.Ab,
          {
            key: opt.label,
            label: opt.label,
            values: opt.children.map((child) => child.value.toString())
          },
          opt.children.map((child) => {
            const { name: assignedWorkflowName } = workflows.find(
              (workflow) => (currentWorkflow && workflow.id !== currentWorkflow.id || !currentWorkflow) && workflow.contentTypes.includes(child.value)
            ) ?? {};
            return /* @__PURE__ */ react.createElement(NestedOption, { key: child.value, value: child.value }, formatMessage(
              {
                id: "Settings.review-workflows.workflow.contentTypes.assigned.notice",
                defaultMessage: "{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"
              },
              {
                label: child.label,
                name: assignedWorkflowName,
                em: (...children) => /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "em", fontWeight: "bold" }, children),
                i: (...children) => /* @__PURE__ */ react.createElement(ContentTypeTakeNotice, null, children)
              }
            ));
          })
        );
      }
      return /* @__PURE__ */ react.createElement(MultiSelect/* MultiSelectOption */.ML, { key: opt.value, value: opt.value }, opt.label);
    })
  )));
}
WorkflowAttributes.defaultProps = {
  canUpdate: true
};
WorkflowAttributes.propTypes = {
  canUpdate: (prop_types_default()).bool
};

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/WorkflowAttributes/index.js



/***/ }),

/***/ 86978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $k: () => (/* binding */ ACTION_UPDATE_STAGE_POSITION),
/* harmony export */   Ef: () => (/* binding */ CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME),
/* harmony export */   FT: () => (/* binding */ STAGE_COLOR_DEFAULT),
/* harmony export */   Nj: () => (/* binding */ ACTION_UPDATE_STAGE),
/* harmony export */   Ot: () => (/* binding */ ACTION_ADD_STAGE),
/* harmony export */   QM: () => (/* binding */ ACTION_SET_WORKFLOWS),
/* harmony export */   VS: () => (/* binding */ ACTION_UPDATE_WORKFLOW),
/* harmony export */   _X: () => (/* binding */ CHARGEBEE_STAGES_PER_WORKFLOW_ENTITLEMENT_NAME),
/* harmony export */   bc: () => (/* binding */ ACTION_CLONE_STAGE),
/* harmony export */   gu: () => (/* binding */ ACTION_RESET_WORKFLOW),
/* harmony export */   k_: () => (/* binding */ ACTION_UPDATE_STAGES),
/* harmony export */   lv: () => (/* binding */ STAGE_COLORS),
/* harmony export */   qZ: () => (/* binding */ ACTION_SET_WORKFLOW),
/* harmony export */   rg: () => (/* binding */ ACTION_SET_IS_LOADING),
/* harmony export */   sN: () => (/* binding */ REDUX_NAMESPACE),
/* harmony export */   uL: () => (/* binding */ DRAG_DROP_TYPES),
/* harmony export */   x4: () => (/* binding */ ACTION_DELETE_STAGE),
/* harmony export */   yq: () => (/* binding */ ACTION_SET_CONTENT_TYPES),
/* harmony export */   zn: () => (/* binding */ ACTION_SET_ROLES)
/* harmony export */ });
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97003);

const REDUX_NAMESPACE = "settings_review-workflows";
const ACTION_RESET_WORKFLOW = `Settings/Review_Workflows/RESET_WORKFLOW`;
const ACTION_SET_CONTENT_TYPES = `Settings/Review_Workflows/SET_CONTENT_TYPES`;
const ACTION_SET_IS_LOADING = `Settings/Review_Workflows/SET_IS_LOADING`;
const ACTION_SET_ROLES = `Settings/Review_Workflows/SET_ROLES`;
const ACTION_SET_WORKFLOW = `Settings/Review_Workflows/SET_WORKFLOW`;
const ACTION_SET_WORKFLOWS = `Settings/Review_Workflows/SET_WORKFLOWS`;
const ACTION_DELETE_STAGE = `Settings/Review_Workflows/WORKFLOW_DELETE_STAGE`;
const ACTION_ADD_STAGE = `Settings/Review_Workflows/WORKFLOW_ADD_STAGE`;
const ACTION_CLONE_STAGE = `Settings/Review_Workflows/WORKFLOW_CLONE_STAGE`;
const ACTION_UPDATE_STAGE = `Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE`;
const ACTION_UPDATE_STAGES = `Settings/Review_Workflows/WORKFLOW_UPDATE_STAGES`;
const ACTION_UPDATE_STAGE_POSITION = `Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION`;
const ACTION_UPDATE_WORKFLOW = `Settings/Review_Workflows/WORKFLOW_UPDATE`;
const STAGE_COLORS = {
  primary600: "Blue",
  primary200: "Lilac",
  alternative600: "Violet",
  alternative200: "Lavender",
  success600: "Green",
  success200: "Pale Green",
  danger500: "Cherry",
  danger200: "Pink",
  warning600: "Orange",
  warning200: "Yellow",
  secondary600: "Teal",
  secondary200: "Baby Blue",
  neutral400: "Gray",
  neutral0: "White"
};
const STAGE_COLOR_DEFAULT = _strapi_design_system__WEBPACK_IMPORTED_MODULE_0__/* .lightTheme */ .W.colors.primary600;
const DRAG_DROP_TYPES = {
  STAGE: "stage"
};
const CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME = "numberOfWorkflows";
const CHARGEBEE_STAGES_PER_WORKFLOW_ENTITLEMENT_NAME = "stagesPerWorkflow";


/***/ }),

/***/ 52258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ useReviewWorkflows)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24201);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40464);



function useReviewWorkflows(params = {}) {
  const { get } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useFetchClient */ .kY)();
  const { id = "", ...queryParams } = params;
  const defaultQueryParams = {
    populate: "stages"
  };
  const { data, isLoading, status, refetch } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(
    ["review-workflows", "workflows", id],
    async () => {
      const res = await get(`/admin/review-workflows/workflows/${id}`, {
        params: { ...defaultQueryParams, ...queryParams }
      });
      return res.data;
    }
  );
  const workflows = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (id && data?.data) {
      return [data.data];
    }
    if (Array.isArray(data?.data)) {
      return data.data;
    }
    return [];
  }, [data?.data, id]);
  return {
    // meta contains e.g. the total of all workflows. we can not use
    // the pagination object here, because the list is not paginated.
    meta: react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => data?.meta ?? {}, [data?.meta]),
    workflows,
    isLoading,
    status,
    refetch
  };
}


/***/ }),

/***/ 3848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ initialState),
/* harmony export */   I: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61815);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86978);


const initialState = {
  serverState: {
    contentTypes: {
      collectionTypes: [],
      singleTypes: []
    },
    roles: [],
    workflow: null,
    workflows: []
  },
  clientState: {
    currentWorkflow: {
      data: {
        name: "",
        contentTypes: [],
        stages: [],
        permissions: void 0
      }
    },
    isLoading: true
  }
};
function reducer(state = initialState, action) {
  return (0,immer__WEBPACK_IMPORTED_MODULE_1__/* .produce */ .Uy)(state, (draft) => {
    const { payload } = action;
    switch (action.type) {
      case _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_SET_CONTENT_TYPES */ .yq: {
        draft.serverState.contentTypes = payload;
        break;
      }
      case _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_SET_IS_LOADING */ .rg: {
        draft.clientState.isLoading = payload;
        break;
      }
      case _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_SET_ROLES */ .zn: {
        draft.serverState.roles = payload;
        break;
      }
      case _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_SET_WORKFLOW */ .qZ: {
        const workflow = payload;
        if (workflow) {
          draft.serverState.workflow = workflow;
          draft.clientState.currentWorkflow.data = {
            ...workflow,
            stages: workflow.stages.map((stage) => ({
              ...stage,
              // A safety net in case a stage does not have a color assigned;
              // this should not happen
              color: stage?.color ?? _constants__WEBPACK_IMPORTED_MODULE_0__/* .STAGE_COLOR_DEFAULT */ .FT
            }))
          };
        }
        break;
      }
      case _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_SET_WORKFLOWS */ .QM: {
        draft.serverState.workflows = payload;
        break;
      }
      case _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_RESET_WORKFLOW */ .gu: {
        draft.clientState = initialState.clientState;
        draft.serverState = initialState.serverState;
        break;
      }
      case _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_DELETE_STAGE */ .x4: {
        const { stageId } = payload;
        const { currentWorkflow } = state.clientState;
        draft.clientState.currentWorkflow.data.stages = currentWorkflow.data.stages.filter(
          (stage) => (stage?.id ?? stage.__temp_key__) !== stageId
        );
        break;
      }
      case _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_ADD_STAGE */ .Ot: {
        const { currentWorkflow } = state.clientState;
        if (!currentWorkflow.data) {
          draft.clientState.currentWorkflow.data = {
            stages: []
          };
        }
        const newTempKey = getMaxTempKey(draft.clientState.currentWorkflow.data.stages);
        draft.clientState.currentWorkflow.data.stages.push({
          ...payload,
          color: payload?.color ?? _constants__WEBPACK_IMPORTED_MODULE_0__/* .STAGE_COLOR_DEFAULT */ .FT,
          __temp_key__: newTempKey
        });
        break;
      }
      case _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_CLONE_STAGE */ .bc: {
        const { currentWorkflow } = state.clientState;
        const { id } = payload;
        const sourceStageIndex = currentWorkflow.data.stages.findIndex(
          (stage) => (stage?.id ?? stage?.__temp_key__) === id
        );
        const sourceStage = currentWorkflow.data.stages[sourceStageIndex];
        draft.clientState.currentWorkflow.data.stages.splice(sourceStageIndex + 1, 0, {
          ...sourceStage,
          id: void 0,
          __temp_key__: getMaxTempKey(draft.clientState.currentWorkflow.data.stages)
        });
        break;
      }
      case _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_UPDATE_STAGE */ .Nj: {
        const { currentWorkflow } = state.clientState;
        const { stageId, ...modified } = payload;
        draft.clientState.currentWorkflow.data.stages = currentWorkflow.data.stages.map(
          (stage) => (stage.id ?? stage.__temp_key__) === stageId ? {
            ...stage,
            ...modified
          } : stage
        );
        break;
      }
      case _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_UPDATE_STAGES */ .k_: {
        const { currentWorkflow } = state.clientState;
        draft.clientState.currentWorkflow.data.stages = currentWorkflow.data.stages.map(
          (stage) => ({
            ...stage,
            ...payload
          })
        );
        break;
      }
      case _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_UPDATE_STAGE_POSITION */ .$k: {
        const {
          currentWorkflow: {
            data: { stages }
          }
        } = state.clientState;
        const { newIndex, oldIndex } = payload;
        if (newIndex >= 0 && newIndex < stages.length) {
          const stage = stages[oldIndex];
          let newStages = [...stages];
          newStages.splice(oldIndex, 1);
          newStages.splice(newIndex, 0, stage);
          draft.clientState.currentWorkflow.data.stages = newStages;
        }
        break;
      }
      case _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_UPDATE_WORKFLOW */ .VS: {
        draft.clientState.currentWorkflow.data = {
          ...draft.clientState.currentWorkflow.data,
          ...payload
        };
        break;
      }
      default:
        break;
    }
  });
}
const getMaxTempKey = (stages = []) => {
  const ids = stages.map((stage) => stage.id ?? stage.__temp_key__);
  return Math.max(...ids, -1) + 1;
};


/***/ }),

/***/ 65649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CA: () => (/* binding */ selectHasDeletedServerStages),
/* harmony export */   D6: () => (/* binding */ selectWorkflows),
/* harmony export */   DV: () => (/* binding */ selectCurrentWorkflow),
/* harmony export */   HK: () => (/* binding */ selectContentTypes),
/* harmony export */   RR: () => (/* binding */ selectServerState),
/* harmony export */   bH: () => (/* binding */ selectIsWorkflowDirty),
/* harmony export */   g$: () => (/* binding */ selectRoles),
/* harmony export */   xU: () => (/* binding */ selectIsLoading)
/* harmony export */ });
/* unused harmony export selectNamespace */
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6078);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57150);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86978);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3848);




const selectNamespace = (state) => state[_constants__WEBPACK_IMPORTED_MODULE_1__/* .REDUX_NAMESPACE */ .sN] ?? _reducer__WEBPACK_IMPORTED_MODULE_2__/* .initialState */ .E;
const selectContentTypes = (0,reselect__WEBPACK_IMPORTED_MODULE_3__/* .createSelector */ .P1)(
  selectNamespace,
  ({ serverState: { contentTypes } }) => contentTypes
);
const selectRoles = (0,reselect__WEBPACK_IMPORTED_MODULE_3__/* .createSelector */ .P1)(selectNamespace, ({ serverState: { roles } }) => roles);
const selectCurrentWorkflow = (0,reselect__WEBPACK_IMPORTED_MODULE_3__/* .createSelector */ .P1)(
  selectNamespace,
  ({ clientState: { currentWorkflow } }) => currentWorkflow.data
);
const selectWorkflows = (0,reselect__WEBPACK_IMPORTED_MODULE_3__/* .createSelector */ .P1)(
  selectNamespace,
  ({ serverState: { workflows } }) => workflows
);
const selectIsWorkflowDirty = (0,reselect__WEBPACK_IMPORTED_MODULE_3__/* .createSelector */ .P1)(
  selectNamespace,
  ({ serverState, clientState: { currentWorkflow } }) => !lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default()(serverState.workflow, currentWorkflow.data)
);
const selectHasDeletedServerStages = (0,reselect__WEBPACK_IMPORTED_MODULE_3__/* .createSelector */ .P1)(
  selectNamespace,
  ({ serverState, clientState: { currentWorkflow } }) => !(serverState.workflow?.stages ?? []).every(
    (stage) => !!currentWorkflow.data.stages.find(({ id }) => id === stage.id)
  )
);
const selectIsLoading = (0,reselect__WEBPACK_IMPORTED_MODULE_3__/* .createSelector */ .P1)(
  selectNamespace,
  ({ clientState: { isLoading } }) => isLoading
);
const selectServerState = (0,reselect__WEBPACK_IMPORTED_MODULE_3__/* .createSelector */ .P1)(selectNamespace, ({ serverState }) => serverState);


/***/ }),

/***/ 5318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ getStageColorByHex),
/* harmony export */   s: () => (/* binding */ getAvailableStageColors)
/* harmony export */ });
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97003);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86978);


function getStageColorByHex(hex) {
  if (!hex) {
    return null;
  }
  const themeColors = Object.entries(_strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .lightTheme */ .W.colors).filter(
    ([, value]) => value.toUpperCase() === hex.toUpperCase()
  );
  const themeColorName = themeColors.reduce((acc, [name]) => {
    if (_constants__WEBPACK_IMPORTED_MODULE_0__/* .STAGE_COLORS */ .lv?.[name]) {
      acc = name;
    }
    return acc;
  }, null);
  if (!themeColorName) {
    return null;
  }
  return {
    themeColorName,
    name: _constants__WEBPACK_IMPORTED_MODULE_0__/* .STAGE_COLORS */ .lv[themeColorName]
  };
}
function getAvailableStageColors() {
  return Object.entries(_constants__WEBPACK_IMPORTED_MODULE_0__/* .STAGE_COLORS */ .lv).map(([themeColorName, name]) => ({
    hex: _strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .lightTheme */ .W.colors[themeColorName].toUpperCase(),
    name
  }));
}


/***/ }),

/***/ 66578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ validateWorkflow)
/* harmony export */ });
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43433);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47853);


async function validateWorkflow({ values, formatMessage }) {
  const schema = yup__WEBPACK_IMPORTED_MODULE_1__/* .object */ .Ry({
    contentTypes: yup__WEBPACK_IMPORTED_MODULE_1__/* .array */ .IX().of(yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_()),
    name: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().max(
      255,
      formatMessage({
        id: "Settings.review-workflows.validation.name.max-length",
        defaultMessage: "Name can not be longer than 255 characters"
      })
    ).required(),
    stages: yup__WEBPACK_IMPORTED_MODULE_1__/* .array */ .IX().of(
      yup__WEBPACK_IMPORTED_MODULE_1__/* .object */ .Ry().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().required(
          formatMessage({
            id: "Settings.review-workflows.validation.stage.name",
            defaultMessage: "Name is required"
          })
        ).max(
          255,
          formatMessage({
            id: "Settings.review-workflows.validation.stage.max-length",
            defaultMessage: "Name can not be longer than 255 characters"
          })
        ).test(
          "unique-name",
          formatMessage({
            id: "Settings.review-workflows.validation.stage.duplicate",
            defaultMessage: "Stage name must be unique"
          }),
          function(stageName) {
            const {
              options: { context }
            } = this;
            return context.stages.filter((stage) => stage.name === stageName).length === 1;
          }
        ),
        color: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().required(
          formatMessage({
            id: "Settings.review-workflows.validation.stage.color",
            defaultMessage: "Color is required"
          })
        ).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i),
        permissions: yup__WEBPACK_IMPORTED_MODULE_1__/* .array */ .IX(
          yup__WEBPACK_IMPORTED_MODULE_1__/* .object */ .Ry({
            role: yup__WEBPACK_IMPORTED_MODULE_1__/* .number */ .Rx().strict().typeError(
              formatMessage({
                id: "Settings.review-workflows.validation.stage.permissions.role.number",
                defaultMessage: "Role must be of type number"
              })
            ).required,
            action: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().required({
              id: "Settings.review-workflows.validation.stage.permissions.action.required",
              defaultMessage: "Action is a required argument"
            })
          })
        ).strict()
      })
    ).min(1)
  });
  try {
    await schema.validate(values, { abortEarly: false, context: values });
    return true;
  } catch (error) {
    let errors = {};
    if (error instanceof yup__WEBPACK_IMPORTED_MODULE_1__/* .ValidationError */ .p8) {
      error.inner.forEach((error2) => {
        lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(errors, error2.path, error2.message);
      });
    }
    return errors;
  }
}


/***/ }),

/***/ 71728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(86040);
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
module.exports = baseTrim;


/***/ }),

/***/ 86040:
/***/ ((module) => {

var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
module.exports = trimmedEndIndex;


/***/ }),

/***/ 86961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(13578), isObjectLike = __webpack_require__(27138);
var boolTag = "[object Boolean]";
function isBoolean(value) {
  return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
}
module.exports = isBoolean;


/***/ }),

/***/ 92249:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isNumber = __webpack_require__(37997);
function isNaN(value) {
  return isNumber(value) && value != +value;
}
module.exports = isNaN;


/***/ }),

/***/ 37997:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(13578), isObjectLike = __webpack_require__(27138);
var numberTag = "[object Number]";
function isNumber(value) {
  return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
}
module.exports = isNumber;


/***/ }),

/***/ 51527:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(71728), isObject = __webpack_require__(3243), isSymbol = __webpack_require__(85194);
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = toNumber;


/***/ }),

/***/ 45322:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ Accordion),
/* harmony export */   y: () => (/* binding */ AccordionTypography)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27279);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37652);
/* harmony import */ var _AccordionContext_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39267);
/* harmony import */ var _hooks_useId_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74513);
/* harmony import */ var _Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32370);
/* harmony import */ var _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10701);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93415);








const getBorder = ({ theme, expanded, variant, disabled, error }) => {
  if (error) {
    return `1px solid ${theme.colors.danger600} !important`;
  }
  if (disabled) {
    return `1px solid ${theme.colors.neutral150}`;
  }
  if (expanded) {
    return `1px solid ${theme.colors.primary600}`;
  }
  if (variant === "primary") {
    return `1px solid ${theme.colors.neutral0}`;
  }
  return `1px solid ${theme.colors.neutral100}`;
};
const AccordionTypography = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z))``;
const AccordionWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .x))`
  border: ${getBorder};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({ theme }) => theme.colors.primary600};

    ${AccordionTypography} {
      color: ${({ theme, expanded }) => expanded ? void 0 : theme.colors.primary700};
    }

    ${_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z} {
      color: ${({ theme, expanded }) => expanded ? void 0 : theme.colors.primary600};
    }

    & > ${_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .k} {
      background: ${({ theme }) => theme.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({ theme }) => theme.colors.primary200};
    }
  }
`;
const Accordion = ({ children, disabled = false, error, expanded = false, hasErrorMessage = true, id, onToggle, toggle, size = "M", variant = "primary", shadow }) => {
  const generatedId = (0,_hooks_useId_mjs__WEBPACK_IMPORTED_MODULE_6__/* .useId */ .M)(id);
  const context = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({ expanded, onToggle, toggle, id: generatedId, size, variant, disabled }), [disabled, expanded, generatedId, onToggle, size, toggle, variant]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_AccordionContext_mjs__WEBPACK_IMPORTED_MODULE_7__/* .AccordionContext */ .S.Provider, { value: context, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AccordionWrapper, { "data-strapi-expanded": expanded, disabled, "aria-disabled": disabled, expanded, hasRadius: true, variant, error, shadow, children }), error && hasErrorMessage && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .x, { paddingTop: 1, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, { variant: "pi", textColor: "danger600", children: error }) })] });
};



/***/ }),

/***/ 34642:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ AccordionContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var _AccordionContext_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39267);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93415);



const AccordionContent = ({ children, ...props }) => {
  const { expanded, id } = (0,_AccordionContext_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useAccordion */ .A)();
  if (!expanded) {
    return null;
  }
  const idContent = `accordion-content-${id}`;
  const ariaLabelId = `accordion-label-${id}`;
  const ariaDescriptionId = `accordion-desc-${id}`;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, { role: "region", id: idContent, "aria-labelledby": ariaLabelId, "aria-describedby": ariaDescriptionId, ...props, children });
};



/***/ }),

/***/ 39267:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useAccordion),
/* harmony export */   S: () => (/* binding */ AccordionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);

const AccordionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  disabled: false,
  expanded: false,
  id: "",
  size: "M",
  variant: "primary"
});
const useAccordion = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AccordionContext);



/***/ }),

/***/ 24920:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ AccordionToggle)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74081);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.mjs
var CarretDown = __webpack_require__(10411);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(37652);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/Accordion.mjs
var Accordion = __webpack_require__(45322);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionContext.mjs
var AccordionContext = __webpack_require__(39267);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Accordion/utils.mjs
const getBackground = ({ expanded, disabled, variant }) => {
  let boxBackground = "neutral100";
  if (expanded) {
    boxBackground = "primary100";
  } else if (disabled) {
    boxBackground = "neutral150";
  } else if (variant === "primary") {
    boxBackground = "neutral0";
  }
  return boxBackground;
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextButton/TextButton.mjs
var TextButton = __webpack_require__(1782);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.mjs
var Icon = __webpack_require__(50703);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionToggle.mjs










const ToggleButton = (0,styled_components_browser_esm/* default */.ZP)((0,TextButton/* TextButton */.A))`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14 / 16}rem;
    height: ${14 / 16}rem;

    path {
      fill: ${({ theme, expanded }) => expanded ? theme.colors.primary600 : theme.colors.neutral500};
    }
  }
`;
const FlexWithSize = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  min-height: ${({ theme, size }) => theme.sizes.accordions[size]};
  border-radius: ${({ theme, expanded }) => expanded ? `${theme.borderRadius} ${theme.borderRadius} 0 0` : theme.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({ theme }) => theme.colors.primary600};
      }
    }
  }
`;
const AccordionToggle = ({ title, description, as = "span", togglePosition = "right", action, ...props }) => {
  const { onToggle, toggle, expanded, id, size, variant, disabled } = (0,AccordionContext/* useAccordion */.A)();
  const ariaControls = `accordion-content-${id}`;
  const ariaLabelId = `accordion-label-${id}`;
  const ariaDescriptionId = `accordion-desc-${id}`;
  const boxPaddingX = size === "M" ? 6 : 4;
  const boxPaddingY = size === "M" ? boxPaddingX : boxPaddingX - 2;
  const boxBackground = getBackground({ expanded, disabled, variant });
  const titleColor = expanded ? "primary600" : "neutral700";
  const titleProps = {
    as,
    fontWeight: size === "S" ? "bold" : void 0,
    id: ariaLabelId,
    textColor: titleColor,
    ellipsis: true,
    variant: size === "M" ? "delta" : void 0
  };
  const descriptionColor = expanded ? "primary600" : "neutral600";
  const iconColor = expanded ? "primary200" : "neutral200";
  const iconSize = size === "M" ? `${32 / 16}rem` : `${24 / 16}rem`;
  const handleToggle = () => {
    if (!disabled) {
      if (toggle && !onToggle) {
        console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead');
        toggle();
      } else if (onToggle) {
        onToggle();
      }
    }
  };
  const dropdownIcon = (0,jsx_runtime.jsx)(Flex/* Flex */.k, { justifyContent: "center", borderRadius: "50%", height: iconSize, width: iconSize, transform: expanded ? `rotate(180deg)` : void 0, "data-strapi-dropdown": true, "aria-hidden": true, as: "span", background: iconColor, cursor: disabled ? "not-allowed" : "pointer", onClick: handleToggle, shrink: 0, children: (0,jsx_runtime.jsx)(Icon/* Icon */.J, { as: CarretDown/* default */.Z, width: size === "M" ? `${11 / 16}rem` : `${8 / 16}rem`, color: expanded ? "primary600" : "neutral600" }) });
  return (0,jsx_runtime.jsx)(FlexWithSize, { paddingBottom: boxPaddingY, paddingLeft: boxPaddingX, paddingRight: boxPaddingX, paddingTop: boxPaddingY, background: boxBackground, expanded, size, justifyContent: "space-between", cursor: disabled ? "not-allowed" : "", children: (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { gap: 3, flex: 1, maxWidth: "100%", children: [togglePosition === "left" && dropdownIcon, (0,jsx_runtime.jsx)(ToggleButton, { onClick: handleToggle, "aria-disabled": disabled, "aria-expanded": expanded, "aria-controls": ariaControls, "aria-labelledby": ariaLabelId, "data-strapi-accordion-toggle": true, expanded, type: "button", flex: 1, minWidth: 0, ...props, children: (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)(Accordion/* AccordionTypography */.y, { ...titleProps, children: title }), description && (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { as: "p", id: ariaDescriptionId, textColor: descriptionColor, children: description })] }) }), togglePosition === "right" && (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { gap: 3, children: [dropdownIcon, action] }), togglePosition === "left" && action] }) });
};



/***/ }),

/***/ 37370:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ LinkButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27279);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37652);
/* harmony import */ var _Button_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62629);
/* harmony import */ var _BaseButton_BaseButton_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8976);
/* harmony import */ var _BaseLink_BaseLink_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30413);
/* harmony import */ var _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10701);
/* harmony import */ var _Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32370);








const LinkWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_BaseButton_BaseButton_mjs__WEBPACK_IMPORTED_MODULE_3__/* .BaseButtonWrapper */ .G))`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${_Button_utils_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getDisabledStyle */ .sg}
    &:active {
      ${_Button_utils_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getDisabledStyle */ .sg}
    }
  }

  &:hover {
    ${_Button_utils_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getHoverStyle */ .yP}
  }

  &:active {
    ${_Button_utils_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getActiveStyle */ .tB}
  }

  ${_Button_utils_mjs__WEBPACK_IMPORTED_MODULE_4__/* .getVariantStyle */ .PD}
`;
const LinkButton = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ variant = "default", startIcon, endIcon, disabled = false, children, size = "S", as = _BaseLink_BaseLink_mjs__WEBPACK_IMPORTED_MODULE_5__/* .BaseLink */ .f, ...props }, ref) => {
  const paddingX = size === "S" ? 2 : "10px";
  const paddingY = 4;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LinkWrapper, { ref, "aria-disabled": disabled, size, variant, background: "buttonPrimary600", borderColor: "buttonPrimary600", hasRadius: true, gap: 2, inline: true, paddingBottom: paddingX, paddingLeft: paddingY, paddingRight: paddingY, paddingTop: paddingX, pointerEvents: disabled ? "none" : void 0, ...props, as: as || _BaseLink_BaseLink_mjs__WEBPACK_IMPORTED_MODULE_5__/* .BaseLink */ .f, children: [startIcon && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .k, { "aria-hidden": true, children: startIcon }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_7__/* .Typography */ .Z, { variant: size === "S" ? "pi" : void 0, fontWeight: "bold", textColor: "buttonNeutral0", children }), endIcon && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .k, { "aria-hidden": true, children: endIcon })] });
});
LinkButton.displayName = "LinkButton";



/***/ }),

/***/ 76827:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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



/***/ }),

/***/ 33039:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);

const t = (c) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...c, children: [
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { fill: "#212134", d: "M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z" }),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      fill: "#212134",
      d: "M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"
    }
  ),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      fill: "#212134",
      d: "M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"
    }
  ),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      fill: "#212134",
      d: "M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"
    }
  ),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      fill: "#212134",
      d: "M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"
    }
  ),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      fill: "#212134",
      d: "M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"
    }
  ),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      fill: "#212134",
      d: "M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z"
    }
  )
] }), h = t;



/***/ }),

/***/ 75438:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);

const t = (o) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...o, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#32324D",
    d: "M3.5 14.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.5 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.5 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z"
  }
) }), i = t;



/***/ }),

/***/ 77225:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);

const h = (l) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...l, children: [
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: 12, cy: 12, r: 12, fill: "#212134" }),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      fill: "#F6F6F9",
      d: "M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"
    }
  )
] }), r = h;



/***/ })

}]);