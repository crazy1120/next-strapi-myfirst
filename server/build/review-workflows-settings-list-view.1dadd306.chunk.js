"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[349],{

/***/ 40784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ DragLayer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93415);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67621);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_1__);



function getStyle(initialOffset, currentOffset, mouseOffset) {
  if (!initialOffset || !currentOffset || !mouseOffset) {
    return { display: "none" };
  }
  const { x, y } = mouseOffset;
  return {
    transform: `translate(${x}px, ${y}px)`
  };
}
const DragLayer = ({ renderItem }) => {
  const { itemType, isDragging, item, initialOffset, currentOffset, mouseOffset } = (0,react_dnd__WEBPACK_IMPORTED_MODULE_1__.useDragLayer)(
    (monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
      mouseOffset: monitor.getClientOffset()
    })
  );
  if (!isDragging) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x,
    {
      height: "100%",
      left: 0,
      position: "fixed",
      pointerEvents: "none",
      top: 0,
      zIndex: 100,
      width: "100%",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, { style: getStyle(initialOffset, currentOffset, mouseOffset), children: renderItem({ type: itemType, item }) })
    }
  );
};



/***/ }),

/***/ 75021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 43390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 86978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 26259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ListView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(49402);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/selectors.js
var selectors = __webpack_require__(36364);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.mjs + 1 modules
var Loader = __webpack_require__(77970);
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
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(4987);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.mjs
var Plus = __webpack_require__(36938);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.mjs
var Pencil = __webpack_require__(26784);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.mjs
var Trash = __webpack_require__(78665);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var react_query_es = __webpack_require__(40464);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(51447);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(37652);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useContentTypes/index.js + 1 modules
var useContentTypes = __webpack_require__(92686);
// EXTERNAL MODULE: ./.cache/ee/admin/hooks/useLicenseLimits.js
var useLicenseLimits = __webpack_require__(75021);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Layout/index.js + 3 modules
var Layout = __webpack_require__(43390);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/LimitsModal/index.js + 2 modules
var LimitsModal = __webpack_require__(38705);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/constants.js
var constants = __webpack_require__(86978);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/hooks/useReviewWorkflows.js
var useReviewWorkflows = __webpack_require__(52258);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/pages/ListView/ListView.js
















const ActionLink = (0,styled_components_browser_esm/* default */.ZP)((0,dist/* Link */.rU))`
  align-items: center;
  height: ${(0,dist/* pxToRem */.Q1)(32)};
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spaces[2]}}`};
  width: ${(0,dist/* pxToRem */.Q1)(32)};

  svg {
    height: ${(0,dist/* pxToRem */.Q1)(12)};
    width: ${(0,dist/* pxToRem */.Q1)(12)};

    path {
      fill: ${({ theme }) => theme.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({ theme }) => theme.colors.neutral800};
      }
    }
  }
`;
function ReviewWorkflowsListView() {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { push } = (0,react_router/* useHistory */.k6)();
  const { collectionTypes, singleTypes, isLoading: isLoadingModels } = (0,useContentTypes/* useContentTypes */.G)();
  const { meta, workflows, isLoading, refetch } = (0,useReviewWorkflows/* useReviewWorkflows */.n)();
  const [workflowToDelete, setWorkflowToDelete] = react.useState(null);
  const [showLimitModal, setShowLimitModal] = react.useState(false);
  const { del } = (0,dist/* useFetchClient */.kY)();
  const { formatAPIError } = (0,dist/* useAPIErrorHandler */.So)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { getFeature, isLoading: isLicenseLoading } = (0,useLicenseLimits/* useLicenseLimits */.q)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const permissions = (0,es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  const {
    allowedActions: { canCreate, canDelete }
  } = (0,dist/* useRBAC */.ss)(permissions.settings["review-workflows"]);
  const limits = getFeature("review-workflows");
  const { mutateAsync, isLoading: isLoadingMutation } = (0,react_query_es.useMutation)(
    async ({ workflowId, stages }) => {
      const {
        data: { data }
      } = await del(`/admin/review-workflows/workflows/${workflowId}`, {
        data: stages
      });
      return data;
    },
    {
      onSuccess() {
        toggleNotification({
          type: "success",
          message: { id: "notification.success.deleted", defaultMessage: "Deleted" }
        });
      }
    }
  );
  const getContentTypeDisplayName = (uid) => {
    const contentType = [...collectionTypes, ...singleTypes].find(
      (contentType2) => contentType2.uid === uid
    );
    return contentType.info.displayName;
  };
  const handleDeleteWorkflow = (workflowId) => {
    setWorkflowToDelete(workflowId);
  };
  const toggleConfirmDeleteDialog = () => {
    setWorkflowToDelete(null);
  };
  const handleConfirmDeleteDialog = async () => {
    try {
      const res = await mutateAsync({ workflowId: workflowToDelete });
      await refetch();
      setWorkflowToDelete(null);
      return res;
    } catch (error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
      return null;
    }
  };
  react.useEffect(() => {
    if (!isLoading && !isLicenseLoading) {
      if (limits?.[constants/* CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME */.Ef] && meta?.workflowCount > parseInt(limits[constants/* CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME */.Ef], 10)) {
        setShowLimitModal(true);
      }
    }
  }, [isLicenseLoading, isLoading, limits, meta?.workflowCount, meta.workflowsTotal]);
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Layout/* Header */.h4,
    {
      primaryAction: canCreate && /* @__PURE__ */ react.createElement(
        dist/* LinkButton */.Qj,
        {
          startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null),
          size: "S",
          to: "/settings/review-workflows/create",
          onClick: (event) => {
            if (limits?.[constants/* CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME */.Ef] && meta?.workflowCount >= parseInt(limits[constants/* CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME */.Ef], 10)) {
              event.preventDefault();
              setShowLimitModal(true);
            } else {
              trackUsage("willCreateWorkflow");
            }
          }
        },
        formatMessage({
          id: "Settings.review-workflows.list.page.create",
          defaultMessage: "Create new workflow"
        })
      ),
      subtitle: formatMessage({
        id: "Settings.review-workflows.list.page.subtitle",
        defaultMessage: "Manage your content review process"
      }),
      title: formatMessage({
        id: "Settings.review-workflows.list.page.title",
        defaultMessage: "Review Workflows"
      })
    }
  ), /* @__PURE__ */ react.createElement(Layout/* Root */.fC, null, isLoading || isLoadingModels ? /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, null, formatMessage({
    id: "Settings.review-workflows.page.list.isLoading",
    defaultMessage: "Workflows are loading"
  }))) : /* @__PURE__ */ react.createElement(
    Table/* Table */.i,
    {
      colCount: 3,
      footer: (
        // TODO: we should be able to use a link here instead of an (inaccessible onClick) handler
        canCreate && /* @__PURE__ */ react.createElement(
          TFooter/* TFooter */.c,
          {
            icon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null),
            onClick: () => {
              if (limits?.[constants/* CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME */.Ef] && meta?.workflowCount >= parseInt(limits[constants/* CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME */.Ef], 10)) {
                setShowLimitModal(true);
              } else {
                push("/settings/review-workflows/create");
                trackUsage("willCreateWorkflow");
              }
            }
          },
          formatMessage({
            id: "Settings.review-workflows.list.page.create",
            defaultMessage: "Create new workflow"
          })
        )
      ),
      rowCount: 1
    },
    /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, formatMessage({
      id: "Settings.review-workflows.list.page.list.column.name.title",
      defaultMessage: "Name"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, formatMessage({
      id: "Settings.review-workflows.list.page.list.column.stages.title",
      defaultMessage: "Stages"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, formatMessage({
      id: "Settings.review-workflows.list.page.list.column.contentTypes.title",
      defaultMessage: "Content Types"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, formatMessage({
      id: "Settings.review-workflows.list.page.list.column.actions.title",
      defaultMessage: "Actions"
    }))))),
    /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, workflows.map((workflow) => /* @__PURE__ */ react.createElement(
      Tr.Tr,
      {
        ...(0,dist/* onRowClick */.X7)({
          fn(event) {
            if (event.target.nodeName === "BUTTON") {
              return;
            }
            push(`/settings/review-workflows/${workflow.id}`);
          }
        }),
        key: `workflow-${workflow.id}`
      },
      /* @__PURE__ */ react.createElement(Cell.Td, { width: (0,dist/* pxToRem */.Q1)(250) }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800", fontWeight: "bold", ellipsis: true }, workflow.name)),
      /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, workflow.stages.length)),
      /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, (workflow?.contentTypes ?? []).map(getContentTypeDisplayName).join(", "))),
      /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "center", justifyContent: "end" }, /* @__PURE__ */ react.createElement(
        ActionLink,
        {
          to: `/settings/review-workflows/${workflow.id}`,
          "aria-label": formatMessage(
            {
              id: "Settings.review-workflows.list.page.list.column.actions.edit.label",
              defaultMessage: "Edit {name}"
            },
            { name: workflow.name }
          )
        },
        /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null)
      ), workflows.length > 1 && canDelete && /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          "aria-label": formatMessage(
            {
              id: "Settings.review-workflows.list.page.list.column.actions.delete.label",
              defaultMessage: "Delete {name}"
            },
            { name: "Default workflow" }
          ),
          icon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null),
          noBorder: true,
          onClick: () => {
            handleDeleteWorkflow(workflow.id);
          }
        }
      )))
    )))
  ), /* @__PURE__ */ react.createElement(
    dist/* ConfirmDialog */.QH,
    {
      bodyText: {
        id: "Settings.review-workflows.list.page.delete.confirm.body",
        defaultMessage: "If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"
      },
      isConfirmButtonLoading: isLoadingMutation,
      isOpen: !!workflowToDelete,
      onToggleDialog: toggleConfirmDeleteDialog,
      onConfirm: handleConfirmDeleteDialog
    }
  ), /* @__PURE__ */ react.createElement(LimitsModal/* Root */.fC, { isOpen: showLimitModal, onClose: () => setShowLimitModal(false) }, /* @__PURE__ */ react.createElement(LimitsModal/* Title */.Dx, null, formatMessage({
    id: "Settings.review-workflows.list.page.workflows.limit.title",
    defaultMessage: "You\u2019ve reached the limit of workflows in your plan"
  })), /* @__PURE__ */ react.createElement(LimitsModal/* Body */.uT, null, formatMessage({
    id: "Settings.review-workflows.list.page.workflows.limit.body",
    defaultMessage: "Delete a workflow or contact Sales to enable more workflows."
  })))));
}

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/pages/ListView/index.js





/* harmony default export */ function ListView() {
  const permissions = (0,es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  return /* @__PURE__ */ react.createElement(dist/* CheckPagePermissions */.O4, { permissions: permissions.settings["review-workflows"].main }, /* @__PURE__ */ react.createElement(ReviewWorkflowsListView, null));
}


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



/***/ }),

/***/ 37370:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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