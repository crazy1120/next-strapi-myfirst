"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[169],{

/***/ 70169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  REVIEW_WORKFLOW_FILTERS: () => (/* binding */ REVIEW_WORKFLOW_FILTERS)
});

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/utils/index.js + 11 modules
var utils = __webpack_require__(21892);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/Combobox.mjs
var Combobox = __webpack_require__(8295);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.mjs
var ComboboxOption = __webpack_require__(61121);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70627);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/utils/getDisplayName.js
var getDisplayName = __webpack_require__(78186);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useAdminUsers/index.js + 1 modules
var useAdminUsers = __webpack_require__(54920);
;// CONCATENATED MODULE: ./.cache/ee/admin/content-manager/components/Filter/CustomInputs/ReviewWorkflows/AssigneeFilter.js






const AssigneeFilter = ({ value, onChange }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { users, isLoading } = (0,useAdminUsers/* useAdminUsers */.R)();
  return /* @__PURE__ */ react.createElement(
    Combobox/* Combobox */.hQ,
    {
      value,
      "aria-label": formatMessage({
        id: "content-manager.components.Filters.usersSelect.label",
        defaultMessage: "Search and select an user to filter"
      }),
      onChange,
      loading: isLoading
    },
    users.map((user) => {
      return /* @__PURE__ */ react.createElement(ComboboxOption/* ComboboxOption */.O, { key: user.id, value: user.id.toString() }, (0,getDisplayName/* getDisplayName */.G)(user, formatMessage));
    })
  );
};
AssigneeFilter.propTypes = {
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string
};
AssigneeFilter.defaultProps = {
  value: ""
};

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/SingleSelect.mjs
var SingleSelect = __webpack_require__(63738);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.mjs + 1 modules
var Loader = __webpack_require__(77970);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/hooks/useReviewWorkflows.js
var useReviewWorkflows = __webpack_require__(52258);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/utils/colors.js
var colors = __webpack_require__(5318);
;// CONCATENATED MODULE: ./.cache/ee/admin/content-manager/components/Filter/CustomInputs/ReviewWorkflows/StageFilter.js






const StageFilter = ({ value, onChange, uid }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const {
    workflows: [workflow],
    isLoading
  } = (0,useReviewWorkflows/* useReviewWorkflows */.n)({ filters: { contentTypes: uid } });
  return /* @__PURE__ */ react.createElement(
    SingleSelect/* SingleSelect */.q4,
    {
      "aria-label": formatMessage({
        id: "content-manager.components.Filters.reviewWorkflows.label",
        defaultMessage: "Search and select an workflow stage to filter"
      }),
      value,
      onChange,
      loading: isLoading,
      customizeContent: () => /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { as: "span", justifyContent: "space-between", alignItems: "center", width: "100%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800", ellipsis: true }, value), isLoading ? /* @__PURE__ */ react.createElement(Loader/* Loader */.a, { small: true, style: { display: "flex" } }) : null)
    },
    (workflow?.stages ?? []).map(({ id, color, name }) => {
      const { themeColorName } = (0,colors/* getStageColorByHex */.k)(color);
      return /* @__PURE__ */ react.createElement(
        SingleSelect/* SingleSelectOption */.ag,
        {
          key: id,
          startIcon: /* @__PURE__ */ react.createElement(
            Flex/* Flex */.k,
            {
              height: 2,
              background: color,
              borderColor: themeColorName === "neutral0" ? "neutral150" : "transparent",
              hasRadius: true,
              shrink: 0,
              width: 2
            }
          ),
          value: name
        },
        name
      );
    })
  );
};
StageFilter.defaultProps = {
  value: ""
};
StageFilter.propTypes = {
  onChange: (prop_types_default()).func.isRequired,
  uid: (prop_types_default()).string.isRequired,
  value: (prop_types_default()).string
};

;// CONCATENATED MODULE: ./.cache/ee/admin/content-manager/components/Filter/CustomInputs/ReviewWorkflows/constants.js



const REVIEW_WORKFLOW_FILTERS = [
  {
    fieldSchema: {
      type: "relation",
      mainField: {
        name: "name",
        schema: {
          type: "string"
        }
      }
    },
    metadatas: {
      customInput: StageFilter,
      label: {
        id: (0,utils/* getTrad */.OB)(`containers.ListPage.table-headers.reviewWorkflows.stage`),
        defaultMessage: "Review stage"
      }
    },
    name: "strapi_stage"
  },
  {
    fieldSchema: {
      type: "relation",
      mainField: {
        name: "id",
        schema: {
          type: "int"
        }
      }
    },
    metadatas: {
      customInput: AssigneeFilter,
      customOperators: [
        {
          intlLabel: {
            id: "components.FilterOptions.FILTER_TYPES.$eq",
            defaultMessage: "is"
          },
          value: "$eq"
        },
        {
          intlLabel: {
            id: "components.FilterOptions.FILTER_TYPES.$ne",
            defaultMessage: "is not"
          },
          value: "$ne"
        }
      ],
      label: {
        id: (0,utils/* getTrad */.OB)(`containers.ListPage.table-headers.reviewWorkflows.assignee.label`),
        defaultMessage: "Assignee"
      }
    },
    name: "strapi_assignee"
  }
];


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

/***/ 5318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);