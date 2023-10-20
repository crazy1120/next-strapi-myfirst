(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[8853],{

/***/ 26302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Roles)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(51447);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/constants.js
var constants = __webpack_require__(84419);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(73354);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(27875);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48102);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(74758);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(23298);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(74577);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.mjs
var TextInput = __webpack_require__(12881);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Textarea/Textarea.mjs
var Textarea = __webpack_require__(39708);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(59082);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(71563);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(40464);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70627);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/contexts/UsersPermissionsContext/index.js


const UsersPermissions = (0,react.createContext)({});
const UsersPermissionsProvider = ({ children, value }) => {
  return /* @__PURE__ */ react.createElement(UsersPermissions.Provider, { value }, children);
};
const useUsersPermissions = () => (0,react.useContext)(UsersPermissions);
UsersPermissionsProvider.propTypes = {
  children: (prop_types_default()).node.isRequired,
  value: (prop_types_default()).object.isRequired
};


// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/getTrad.js + 1 modules
var getTrad = __webpack_require__(58655);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/Accordion.mjs
var Accordion = __webpack_require__(45322);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionToggle.mjs + 1 modules
var AccordionToggle = __webpack_require__(24920);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionContent.mjs
var AccordionContent = __webpack_require__(34642);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(51943);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/formatPluginName.js

function formatPluginName(pluginSlug) {
  switch (pluginSlug) {
    case "application":
      return "Application";
    case "plugin::content-manager":
      return "Content manager";
    case "plugin::content-type-builder":
      return "Content types builder";
    case "plugin::documentation":
      return "Documentation";
    case "plugin::email":
      return "Email";
    case "plugin::i18n":
      return "i18n";
    case "plugin::upload":
      return "Upload";
    case "plugin::users-permissions":
      return "Users-permissions";
    default:
      return upperFirst_default()(pluginSlug.replace("api::", "").replace("plugin::", ""));
  }
}
/* harmony default export */ const utils_formatPluginName = (formatPluginName);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/init.js
const init = (initialState, permissions) => {
  const collapses = Object.keys(permissions).sort().map((name) => ({ name, isOpen: false }));
  return { ...initialState, collapses };
};
/* harmony default export */ const Permissions_init = (init);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(93415);
// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(8243);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Checkbox/Checkbox.mjs
var Checkbox = __webpack_require__(22572);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(10989);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cog.mjs
var Cog = __webpack_require__(35318);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(98934);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(37652);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/PermissionRow/CheckboxWrapper.js


const activeCheckboxWrapperStyles = (0,styled_components_browser_esm/* css */.iv)`
  background: ${(props) => props.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`;
const CheckboxWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${(props) => props.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${(props) => props.isActive && activeCheckboxWrapperStyles}
  &:hover {
    ${activeCheckboxWrapperStyles}
  }
`;
/* harmony default export */ const PermissionRow_CheckboxWrapper = (CheckboxWrapper);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/PermissionRow/SubCategory.js









const Border = styled_components_browser_esm/* default */.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral150};
`;
const SubCategory = ({ subCategory }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { onChange, onChangeSelectAll, onSelectedAction, selectedAction, modifiedData } = useUsersPermissions();
  const currentScopedModifiedData = (0,react.useMemo)(() => {
    return get_default()(modifiedData, subCategory.name, {});
  }, [modifiedData, subCategory]);
  const hasAllActionsSelected = (0,react.useMemo)(() => {
    return Object.values(currentScopedModifiedData).every((action) => action.enabled === true);
  }, [currentScopedModifiedData]);
  const hasSomeActionsSelected = (0,react.useMemo)(() => {
    return Object.values(currentScopedModifiedData).some((action) => action.enabled === true) && !hasAllActionsSelected;
  }, [currentScopedModifiedData, hasAllActionsSelected]);
  const handleChangeSelectAll = (0,react.useCallback)(
    ({ target: { name } }) => {
      onChangeSelectAll({ target: { name, value: !hasAllActionsSelected } });
    },
    [hasAllActionsSelected, onChangeSelectAll]
  );
  const isActionSelected = (0,react.useCallback)(
    (actionName) => {
      return selectedAction === actionName;
    },
    [selectedAction]
  );
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between", alignItems: "center" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, subCategory.label)), /* @__PURE__ */ react.createElement(Border, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 4 }, /* @__PURE__ */ react.createElement(
    Checkbox/* Checkbox */.X,
    {
      name: subCategory.name,
      value: hasAllActionsSelected,
      onValueChange: (value) => handleChangeSelectAll({ target: { name: subCategory.name, value } }),
      indeterminate: hasSomeActionsSelected
    },
    formatMessage({ id: "app.utils.select-all", defaultMessage: "Select all" })
  ))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { paddingTop: 6, paddingBottom: 6 }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 2, style: { flex: 1 } }, subCategory.actions.map((action) => {
    const name = `${action.name}.enabled`;
    return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, key: action.name }, /* @__PURE__ */ react.createElement(PermissionRow_CheckboxWrapper, { isActive: isActionSelected(action.name), padding: 2, hasRadius: true }, /* @__PURE__ */ react.createElement(
      Checkbox/* Checkbox */.X,
      {
        value: get_default()(modifiedData, name, false),
        name,
        onValueChange: (value) => onChange({ target: { name, value } })
      },
      action.label
    ), /* @__PURE__ */ react.createElement(
      "button",
      {
        type: "button",
        onClick: () => onSelectedAction(action.name),
        style: { display: "inline-flex", alignItems: "center" }
      },
      /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, { as: "span" }, formatMessage(
        {
          id: "app.utils.show-bound-route",
          defaultMessage: "Show bound route for {route}"
        },
        {
          route: action.name
        }
      )),
      /* @__PURE__ */ react.createElement(Cog/* default */.Z, null)
    )));
  }))));
};
SubCategory.propTypes = {
  subCategory: (prop_types_default()).object.isRequired
};
/* harmony default export */ const PermissionRow_SubCategory = (SubCategory);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/PermissionRow/index.js





const PermissionRow = ({ name, permissions }) => {
  const subCategories = (0,react.useMemo)(() => {
    return sortBy_default()(
      Object.values(permissions.controllers).reduce((acc, curr, index) => {
        const currentName = `${name}.controllers.${Object.keys(permissions.controllers)[index]}`;
        const actions = sortBy_default()(
          Object.keys(curr).reduce((acc2, current) => {
            return [
              ...acc2,
              {
                ...curr[current],
                label: current,
                name: `${currentName}.${current}`
              }
            ];
          }, []),
          "label"
        );
        return [
          ...acc,
          {
            actions,
            label: Object.keys(permissions.controllers)[index],
            name: currentName
          }
        ];
      }, []),
      "label"
    );
  }, [name, permissions]);
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 6 }, subCategories.map((subCategory) => /* @__PURE__ */ react.createElement(PermissionRow_SubCategory, { key: subCategory.name, subCategory })));
};
PermissionRow.propTypes = {
  name: (prop_types_default()).string.isRequired,
  permissions: (prop_types_default()).object.isRequired
};
/* harmony default export */ const Permissions_PermissionRow = (PermissionRow);

// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(61815);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/reducer.js

const initialState = {
  collapses: []
};
const reducer = (state, action) => (
  // eslint-disable-next-line consistent-return
  (0,immer_esm/* default */.ZP)(state, (draftState) => {
    switch (action.type) {
      case "TOGGLE_COLLAPSE": {
        draftState.collapses = state.collapses.map((collapse, index) => {
          if (index === action.index) {
            return { ...collapse, isOpen: !collapse.isOpen };
          }
          return { ...collapse, isOpen: false };
        });
        break;
      }
      default:
        return draftState;
    }
  })
);


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/index.js








const Permissions = () => {
  const { modifiedData } = useUsersPermissions();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [{ collapses }, dispatch] = (0,react.useReducer)(
    reducer,
    initialState,
    (state) => Permissions_init(state, modifiedData)
  );
  const handleToggle = (index) => dispatch({
    type: "TOGGLE_COLLAPSE",
    index
  });
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 1 }, collapses.map((collapse, index) => /* @__PURE__ */ react.createElement(
    Accordion/* Accordion */.U,
    {
      expanded: collapse.isOpen,
      onToggle: () => handleToggle(index),
      key: collapse.name,
      variant: index % 2 === 0 ? "secondary" : void 0
    },
    /* @__PURE__ */ react.createElement(
      AccordionToggle/* AccordionToggle */.B,
      {
        title: utils_formatPluginName(collapse.name),
        description: formatMessage(
          {
            id: "users-permissions.Plugin.permissions.plugins.description",
            defaultMessage: "Define all allowed actions for the {name} plugin."
          },
          { name: collapse.name }
        ),
        variant: index % 2 ? "primary" : "secondary"
      }
    ),
    /* @__PURE__ */ react.createElement(AccordionContent/* AccordionContent */.v, null, /* @__PURE__ */ react.createElement(Permissions_PermissionRow, { permissions: modifiedData[collapse.name], name: collapse.name }))
  )));
};
/* harmony default export */ const components_Permissions = (Permissions);

// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(10124);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/lodash/without.js
var without = __webpack_require__(87366);
var without_default = /*#__PURE__*/__webpack_require__.n(without);
// EXTERNAL MODULE: ./node_modules/lodash/map.js
var map = __webpack_require__(58422);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ./node_modules/lodash/tail.js
var tail = __webpack_require__(34049);
var tail_default = /*#__PURE__*/__webpack_require__.n(tail);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/BoundRoute/getMethodColor.js
const getMethodColor = (verb) => {
  switch (verb) {
    case "POST": {
      return {
        text: "success600",
        border: "success200",
        background: "success100"
      };
    }
    case "GET": {
      return {
        text: "secondary600",
        border: "secondary200",
        background: "secondary100"
      };
    }
    case "PUT": {
      return {
        text: "warning600",
        border: "warning200",
        background: "warning100"
      };
    }
    case "DELETE": {
      return {
        text: "danger600",
        border: "danger200",
        background: "danger100"
      };
    }
    default: {
      return {
        text: "neutral600",
        border: "neutral200",
        background: "neutral100"
      };
    }
  }
};
/* harmony default export */ const BoundRoute_getMethodColor = (getMethodColor);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/BoundRoute/index.js








const MethodBox = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  margin: -1px;
  border-radius: ${({ theme }) => theme.spaces[1]} 0 0 ${({ theme }) => theme.spaces[1]};
`;
function BoundRoute({ route }) {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { method, handler: title, path } = route;
  const formattedRoute = path ? tail_default()(path.split("/")) : [];
  const [controller = "", action = ""] = title ? title.split(".") : [];
  const colors = BoundRoute_getMethodColor(route.method);
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h3" }, formatMessage({
    id: "users-permissions.BoundRoute.title",
    defaultMessage: "Bound route to"
  }), "\xA0", /* @__PURE__ */ react.createElement("span", null, controller), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", textColor: "primary600" }, ".", action)), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { hasRadius: true, background: "neutral0", borderColor: "neutral200", gap: 0 }, /* @__PURE__ */ react.createElement(MethodBox, { background: colors.background, borderColor: colors.border, padding: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: colors.text }, method)), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 2, paddingRight: 2 }, map_default()(formattedRoute, (value) => /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { key: value, textColor: value.includes(":") ? "neutral600" : "neutral900" }, "/", value)))));
}
BoundRoute.defaultProps = {
  route: {
    handler: "Nocontroller.error",
    method: "GET",
    path: "/there-is-no-path"
  }
};
BoundRoute.propTypes = {
  route: prop_types_default().shape({
    handler: (prop_types_default()).string,
    method: (prop_types_default()).string,
    path: (prop_types_default()).string
  })
};
/* harmony default export */ const components_BoundRoute = (BoundRoute);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Policies/index.js








const Policies = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { selectedAction, routes } = useUsersPermissions();
  const path = without_default()(selectedAction.split("."), "controllers");
  const controllerRoutes = get_default()(routes, path[0]);
  const pathResolved = path.slice(1).join(".");
  const displayedRoutes = isEmpty_default()(controllerRoutes) ? [] : controllerRoutes.filter((o) => o.handler.endsWith(pathResolved));
  return /* @__PURE__ */ react.createElement(
    GridItem/* GridItem */.P,
    {
      col: 5,
      background: "neutral150",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7,
      style: { minHeight: "100%" }
    },
    selectedAction ? /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, displayedRoutes.map((route, key) => (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ react.createElement(components_BoundRoute, { key, route })
    ))) : /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h3" }, formatMessage({
      id: "users-permissions.Policies.header.title",
      defaultMessage: "Advanced settings"
    })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "p", textColor: "neutral600" }, formatMessage({
      id: "users-permissions.Policies.header.hint",
      defaultMessage: "Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"
    })))
  );
};
/* harmony default export */ const components_Policies = (Policies);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/UsersPermissions/init.js
const init_init = (state, permissions, routes) => {
  return {
    ...state,
    initialData: permissions,
    modifiedData: permissions,
    routes
  };
};
/* harmony default export */ const UsersPermissions_init = (init_init);

// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(43433);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
// EXTERNAL MODULE: ./node_modules/lodash/take.js
var take = __webpack_require__(41942);
var take_default = /*#__PURE__*/__webpack_require__.n(take);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/UsersPermissions/reducer.js




const reducer_initialState = {
  initialData: {},
  modifiedData: {},
  routes: {},
  selectedAction: "",
  policies: []
};
const reducer_reducer = (state, action) => (0,immer_esm/* default */.ZP)(state, (draftState) => {
  switch (action.type) {
    case "ON_CHANGE": {
      const keysLength = action.keys.length;
      const isChangingCheckbox = action.keys[keysLength - 1] === "enabled";
      if (action.value && isChangingCheckbox) {
        const selectedAction = take_default()(action.keys, keysLength - 1).join(".");
        draftState.selectedAction = selectedAction;
      }
      set_default()(draftState, ["modifiedData", ...action.keys], action.value);
      break;
    }
    case "ON_CHANGE_SELECT_ALL": {
      const pathToValue = ["modifiedData", ...action.keys];
      const oldValues = get_default()(state, pathToValue, {});
      const updatedValues = Object.keys(oldValues).reduce((acc, current) => {
        acc[current] = { ...oldValues[current], enabled: action.value };
        return acc;
      }, {});
      set_default()(draftState, pathToValue, updatedValues);
      break;
    }
    case "ON_RESET": {
      draftState.modifiedData = state.initialData;
      break;
    }
    case "ON_SUBMIT_SUCCEEDED": {
      draftState.initialData = state.modifiedData;
      break;
    }
    case "SELECT_ACTION": {
      const { actionToSelect } = action;
      draftState.selectedAction = actionToSelect === state.selectedAction ? "" : actionToSelect;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const UsersPermissions_reducer = (reducer_reducer);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/UsersPermissions/index.js










const UsersPermissions_UsersPermissions = (0,react.forwardRef)(({ permissions, routes }, ref) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [state, dispatch] = (0,react.useReducer)(
    UsersPermissions_reducer,
    reducer_initialState,
    (state2) => UsersPermissions_init(state2, permissions, routes)
  );
  (0,react.useImperativeHandle)(ref, () => ({
    getPermissions() {
      return {
        permissions: state.modifiedData
      };
    },
    resetForm() {
      dispatch({ type: "ON_RESET" });
    },
    setFormAfterSubmit() {
      dispatch({ type: "ON_SUBMIT_SUCCEEDED" });
    }
  }));
  const handleChange = ({ target: { name, value } }) => dispatch({
    type: "ON_CHANGE",
    keys: name.split("."),
    value: value === "empty__string_value" ? "" : value
  });
  const handleChangeSelectAll = ({ target: { name, value } }) => dispatch({
    type: "ON_CHANGE_SELECT_ALL",
    keys: name.split("."),
    value
  });
  const handleSelectedAction = (actionToSelect) => dispatch({
    type: "SELECT_ACTION",
    actionToSelect
  });
  const providerValue = {
    ...state,
    onChange: handleChange,
    onChangeSelectAll: handleChangeSelectAll,
    onSelectedAction: handleSelectedAction
  };
  return /* @__PURE__ */ react.createElement(UsersPermissionsProvider, { value: providerValue }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 0, shadow: "filterShadow", hasRadius: true, background: "neutral0" }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 7, paddingTop: 6, paddingBottom: 6, paddingLeft: 7, paddingRight: 7 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 6 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
    id: (0,getTrad/* default */.Z)("Plugins.header.title"),
    defaultMessage: "Permissions"
  })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "p", textColor: "neutral600" }, formatMessage({
    id: (0,getTrad/* default */.Z)("Plugins.header.description"),
    defaultMessage: "Only actions bound by a route are listed below."
  }))), /* @__PURE__ */ react.createElement(components_Permissions, null))), /* @__PURE__ */ react.createElement(components_Policies, null)));
});
UsersPermissions_UsersPermissions.propTypes = {
  permissions: (prop_types_default()).object.isRequired,
  routes: (prop_types_default()).object.isRequired
};
/* harmony default export */ const components_UsersPermissions = ((0,react.memo)(UsersPermissions_UsersPermissions));

// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(47853);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/constants.js


const createRoleSchema = yup_es/* object */.Ry().shape({
  name: yup_es/* string */.Z_().required(dist/* translatedErrors */.I0.required),
  description: yup_es/* string */.Z_().required(dist/* translatedErrors */.I0.required)
});

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js + 1 modules
var utils = __webpack_require__(99688);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/hooks/usePlugins.js




const usePlugins = () => {
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { get } = (0,dist/* useFetchClient */.kY)();
  const { formatAPIError } = (0,dist/* useAPIErrorHandler */.So)(utils/* getTrad */.OB);
  const [
    {
      data: permissions,
      isLoading: isLoadingPermissions,
      error: permissionsError,
      refetch: refetchPermissions
    },
    { data: routes, isLoading: isLoadingRoutes, error: routesError, refetch: refetchRoutes }
  ] = (0,es.useQueries)([
    {
      queryKey: ["users-permissions", "permissions"],
      async queryFn() {
        const {
          data: { permissions: permissions2 }
        } = await get(`/users-permissions/permissions`);
        return permissions2;
      }
    },
    {
      queryKey: ["users-permissions", "routes"],
      async queryFn() {
        const {
          data: { routes: routes2 }
        } = await get(`/users-permissions/routes`);
        return routes2;
      }
    }
  ]);
  const refetchQueries = async () => {
    await Promise.all([refetchPermissions(), refetchRoutes()]);
  };
  (0,react.useEffect)(() => {
    if (permissionsError) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(permissionsError)
      });
    }
  }, [toggleNotification, permissionsError, formatAPIError]);
  (0,react.useEffect)(() => {
    if (routesError) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(routesError)
      });
    }
  }, [toggleNotification, routesError, formatAPIError]);
  const isLoading = isLoadingPermissions || isLoadingRoutes;
  return {
    // TODO: these return values need to be memoized, otherwise
    // they will create infinite rendering loops when used as
    // effect dependencies
    permissions: permissions ? (0,utils/* cleanPermissions */.YX)(permissions) : {},
    routes: routes ?? {},
    getData: refetchQueries,
    isLoading
  };
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/pages/CreatePage.js













const CreatePage = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { goBack } = (0,react_router/* useHistory */.k6)();
  const { lockApp, unlockApp } = (0,dist/* useOverlayBlocker */.o1)();
  const { isLoading: isLoadingPlugins, permissions, routes } = usePlugins();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const permissionsRef = react.useRef();
  const { post } = (0,dist/* useFetchClient */.kY)();
  const mutation = (0,es.useMutation)((body) => post(`/users-permissions/roles`, body), {
    onError() {
      toggleNotification({
        type: "warning",
        message: {
          id: "notification.error",
          defaultMessage: "An error occurred"
        }
      });
    },
    onSuccess() {
      trackUsage("didCreateRole");
      toggleNotification({
        type: "success",
        message: {
          id: (0,getTrad/* default */.Z)("Settings.roles.created"),
          defaultMessage: "Role created"
        }
      });
      goBack();
    }
  });
  const handleCreateRoleSubmit = async (data) => {
    lockApp();
    const permissions2 = permissionsRef.current.getPermissions();
    await mutation.mutate({ ...data, ...permissions2, users: [] });
    unlockApp();
  };
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(dist/* SettingsPageTitle */.SL, { name: "Roles" }), /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.J9,
    {
      enableReinitialize: true,
      initialValues: { name: "", description: "" },
      onSubmit: handleCreateRoleSubmit,
      validationSchema: createRoleSchema
    },
    ({ handleSubmit, values, handleChange, errors }) => /* @__PURE__ */ react.createElement(dist/* Form */.l0, { noValidate: true, onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.T,
      {
        primaryAction: !isLoadingPlugins && /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit", loading: mutation.isLoading, startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null) }, formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        })),
        title: formatMessage({
          id: "Settings.roles.create.title",
          defaultMessage: "Create a role"
        }),
        subtitle: formatMessage({
          id: "Settings.roles.create.description",
          defaultMessage: "Define the rights given to the role"
        })
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(
      Flex/* Flex */.k,
      {
        background: "neutral0",
        direction: "column",
        alignItems: "stretch",
        gap: 7,
        hasRadius: true,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 7,
        paddingRight: 7,
        shadow: "filterShadow"
      },
      /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
        id: (0,getTrad/* default */.Z)("EditPage.form.roles"),
        defaultMessage: "Role details"
      })), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
        TextInput/* TextInput */.o,
        {
          name: "name",
          value: values.name || "",
          onChange: handleChange,
          label: formatMessage({
            id: "global.name",
            defaultMessage: "Name"
          }),
          error: errors?.name ? formatMessage({ id: errors.name, defaultMessage: "Name is required" }) : false,
          required: true
        }
      )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
        Textarea/* Textarea */.g,
        {
          id: "description",
          value: values.description || "",
          onChange: handleChange,
          label: formatMessage({
            id: "global.description",
            defaultMessage: "Description"
          }),
          error: errors?.description ? formatMessage({
            id: errors.description,
            defaultMessage: "Description is required"
          }) : false,
          required: true
        }
      )))),
      !isLoadingPlugins && /* @__PURE__ */ react.createElement(
        components_UsersPermissions,
        {
          ref: permissionsRef,
          permissions,
          routes
        }
      )
    )))
  ));
};
const ProtectedRolesCreatePage = () => /* @__PURE__ */ react.createElement(dist/* CheckPagePermissions */.O4, { permissions: constants/* PERMISSIONS */._.createRole }, /* @__PURE__ */ react.createElement(CreatePage, null));

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.mjs
var ArrowLeft = __webpack_require__(76827);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/pages/EditPage.js













const EditPage = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { lockApp, unlockApp } = (0,dist/* useOverlayBlocker */.o1)();
  const {
    params: { id }
  } = (0,react_router/* useRouteMatch */.$B)(`/settings/users-permissions/roles/:id`);
  const { get } = (0,dist/* useFetchClient */.kY)();
  const { isLoading: isLoadingPlugins, routes } = usePlugins();
  const {
    data: role,
    isLoading: isLoadingRole,
    refetch: refetchRole
  } = (0,es.useQuery)(["users-permissions", "role", id], async () => {
    const {
      data: { role: role2 }
    } = await get(`/users-permissions/roles/${id}`);
    return role2;
  });
  const permissionsRef = react.useRef();
  const { put } = (0,dist/* useFetchClient */.kY)();
  const { formatAPIError } = (0,dist/* useAPIErrorHandler */.So)();
  const mutation = (0,es.useMutation)((body) => put(`/users-permissions/roles/${id}`, body), {
    onError(error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
    },
    async onSuccess() {
      toggleNotification({
        type: "success",
        message: {
          id: (0,getTrad/* default */.Z)("Settings.roles.created"),
          defaultMessage: "Role edited"
        }
      });
      await refetchRole();
    }
  });
  const handleEditRoleSubmit = async (data) => {
    lockApp();
    const permissions = permissionsRef.current.getPermissions();
    await mutation.mutate({ ...data, ...permissions, users: [] });
    unlockApp();
  };
  if (isLoadingRole) {
    return /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null);
  }
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(dist/* SettingsPageTitle */.SL, { name: "Roles" }), /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.J9,
    {
      enableReinitialize: true,
      initialValues: { name: role.name, description: role.description },
      onSubmit: handleEditRoleSubmit,
      validationSchema: createRoleSchema
    },
    ({ handleSubmit, values, handleChange, errors }) => /* @__PURE__ */ react.createElement(dist/* Form */.l0, { noValidate: true, onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.T,
      {
        primaryAction: !isLoadingPlugins && /* @__PURE__ */ react.createElement(
          Button/* Button */.z,
          {
            disabled: role.code === "strapi-super-admin",
            type: "submit",
            loading: mutation.isLoading,
            startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null)
          },
          formatMessage({
            id: "global.save",
            defaultMessage: "Save"
          })
        ),
        title: role.name,
        subtitle: role.description,
        navigationAction: /* @__PURE__ */ react.createElement(dist/* Link */.rU, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null), to: "/settings/users-permissions/roles" }, formatMessage({
          id: "global.back",
          defaultMessage: "Back"
        }))
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(
      Flex/* Flex */.k,
      {
        background: "neutral0",
        direction: "column",
        alignItems: "stretch",
        gap: 7,
        hasRadius: true,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 7,
        paddingRight: 7,
        shadow: "filterShadow"
      },
      /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
        id: (0,getTrad/* default */.Z)("EditPage.form.roles"),
        defaultMessage: "Role details"
      })), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
        TextInput/* TextInput */.o,
        {
          name: "name",
          value: values.name || "",
          onChange: handleChange,
          label: formatMessage({
            id: "global.name",
            defaultMessage: "Name"
          }),
          error: errors?.name ? formatMessage({ id: errors.name, defaultMessage: "Name is required" }) : false,
          required: true
        }
      )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
        Textarea/* Textarea */.g,
        {
          id: "description",
          value: values.description || "",
          onChange: handleChange,
          label: formatMessage({
            id: "global.description",
            defaultMessage: "Description"
          }),
          error: errors?.description ? formatMessage({
            id: errors.description,
            defaultMessage: "Description is required"
          }) : false,
          required: true
        }
      )))),
      !isLoadingPlugins && /* @__PURE__ */ react.createElement(
        components_UsersPermissions,
        {
          ref: permissionsRef,
          permissions: role.permissions,
          routes
        }
      )
    )))
  ));
};
const ProtectedRolesEditPage = () => /* @__PURE__ */ react.createElement(dist/* CheckPagePermissions */.O4, { permissions: constants/* PERMISSIONS */._.updateRole }, /* @__PURE__ */ react.createElement(EditPage, null));

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.mjs
var useNotifyAT = __webpack_require__(51926);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.mjs
var Layout = __webpack_require__(27997);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ActionLayout.mjs
var ActionLayout = __webpack_require__(37472);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.mjs
var Table = __webpack_require__(70774);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.mjs
var Thead = __webpack_require__(38101);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.mjs
var Tr = __webpack_require__(93153);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.mjs
var Cell = __webpack_require__(50086);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.mjs
var Plus = __webpack_require__(36938);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Link/Link.mjs
var Link = __webpack_require__(68412);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.mjs
var Tbody = __webpack_require__(86967);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(4987);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.mjs
var Pencil = __webpack_require__(26784);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.mjs
var Trash = __webpack_require__(78665);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/pages/ListPage/components/TableBody.js








const EditLink = (0,styled_components_browser_esm/* default */.ZP)((0,Link/* Link */.r))`
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
const TableBody = ({ sortedRoles, canDelete, permissions, setRoleToDelete, onDelete }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { push } = (0,react_router/* useHistory */.k6)();
  const [showConfirmDelete, setShowConfirmDelete] = onDelete;
  const checkCanDeleteRole = (role) => canDelete && !["public", "authenticated"].includes(role.type);
  const handleClickDelete = (id) => {
    setRoleToDelete(id);
    setShowConfirmDelete(!showConfirmDelete);
  };
  const handleClickEdit = (id) => {
    push(`/settings/users-permissions/roles/${id}`);
  };
  return /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, sortedRoles?.map((role) => /* @__PURE__ */ react.createElement(Tr.Tr, { key: role.name, ...(0,dist/* onRowClick */.X7)({ fn: () => handleClickEdit(role.id) }) }, /* @__PURE__ */ react.createElement(Cell.Td, { width: "20%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, role.name)), /* @__PURE__ */ react.createElement(Cell.Td, { width: "50%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, role.description)), /* @__PURE__ */ react.createElement(Cell.Td, { width: "30%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage(
    {
      id: "Roles.RoleRow.user-count",
      defaultMessage: "{number, plural, =0 {# user} one {# user} other {# users}}"
    },
    { number: role.nb_users }
  ))), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "end", ...dist/* stopPropagation */.UW }, /* @__PURE__ */ react.createElement(dist/* CheckPermissions */.jW, { permissions: permissions.updateRole }, /* @__PURE__ */ react.createElement(
    EditLink,
    {
      to: `/settings/users-permissions/roles/${role.id}`,
      "aria-label": formatMessage(
        { id: "app.component.table.edit", defaultMessage: "Edit {target}" },
        { target: `${role.name}` }
      )
    },
    /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null)
  )), checkCanDeleteRole(role) && /* @__PURE__ */ react.createElement(dist/* CheckPermissions */.jW, { permissions: permissions.deleteRole }, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      onClick: () => handleClickDelete(role.id),
      noBorder: true,
      icon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null),
      label: formatMessage(
        { id: "global.delete-target", defaultMessage: "Delete {target}" },
        { target: `${role.name}` }
      )
    }
  )))))));
};
/* harmony default export */ const components_TableBody = (TableBody);
TableBody.defaultProps = {
  canDelete: false
};
TableBody.propTypes = {
  onDelete: (prop_types_default()).array.isRequired,
  permissions: (prop_types_default()).object.isRequired,
  setRoleToDelete: (prop_types_default()).func.isRequired,
  sortedRoles: (prop_types_default()).array.isRequired,
  canDelete: (prop_types_default()).bool
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/pages/ListPage/utils/api.js

const fetchData = async (toggleNotification, notifyStatus) => {
  try {
    const { get } = (0,dist/* getFetchClient */.tg)();
    const { data } = await get("/users-permissions/roles");
    notifyStatus("The roles have loaded successfully");
    return data;
  } catch (err) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    throw new Error(err);
  }
};
const deleteData = async (id, toggleNotification) => {
  try {
    const { del } = (0,dist/* getFetchClient */.tg)();
    await del(`/users-permissions/roles/${id}`);
  } catch (error) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error", defaultMessage: "An error occured" }
    });
  }
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/pages/ListPage/index.js










const RolesListPage = () => {
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const { formatMessage, locale } = (0,useIntl/* default */.Z)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.G)();
  const [{ query }] = (0,dist/* useQueryParams */.Kx)();
  const _q = query?._q || "";
  const [showConfirmDelete, setShowConfirmDelete] = (0,react.useState)(false);
  const [isConfirmButtonLoading, setIsConfirmButtonLoading] = (0,react.useState)(false);
  const [roleToDelete, setRoleToDelete] = (0,react.useState)();
  (0,dist/* useFocusWhenNavigate */.go)();
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canRead, canDelete }
  } = (0,dist/* useRBAC */.ss)({
    create: constants/* PERMISSIONS */._.createRole,
    read: constants/* PERMISSIONS */._.readRoles,
    update: constants/* PERMISSIONS */._.updateRole,
    delete: constants/* PERMISSIONS */._.deleteRole
  });
  const {
    isLoading: isLoadingForData,
    data: { roles },
    isFetching,
    refetch
  } = (0,es.useQuery)("get-roles", () => fetchData(toggleNotification, notifyStatus), {
    initialData: {},
    enabled: canRead
  });
  const { includes } = (0,dist/* useFilter */.L0)(locale, {
    sensitivity: "base"
  });
  const formatter = (0,dist/* useCollator */.Xe)(locale, {
    sensitivity: "base"
  });
  const isLoading = isLoadingForData || isFetching;
  const handleShowConfirmDelete = () => {
    setShowConfirmDelete(!showConfirmDelete);
  };
  const emptyLayout = {
    roles: {
      id: (0,utils/* getTrad */.OB)("Roles.empty"),
      defaultMessage: "You don't have any roles yet."
    },
    search: {
      id: (0,utils/* getTrad */.OB)("Roles.empty.search"),
      defaultMessage: "No roles match the search."
    }
  };
  const pageTitle = formatMessage({
    id: "global.roles",
    defaultMessage: "Roles"
  });
  const deleteMutation = (0,es.useMutation)((id) => deleteData(id, toggleNotification), {
    async onSuccess() {
      await refetch();
    }
  });
  const handleConfirmDelete = async () => {
    setIsConfirmButtonLoading(true);
    await deleteMutation.mutateAsync(roleToDelete);
    setShowConfirmDelete(!showConfirmDelete);
    setIsConfirmButtonLoading(false);
  };
  const sortedRoles = (roles || []).filter((role) => includes(role.name, _q) || includes(role.description, _q)).sort(
    (a, b) => formatter.compare(a.name, b.name) || formatter.compare(a.description, b.description)
  );
  const emptyContent = _q && !sortedRoles.length ? "search" : "roles";
  const colCount = 4;
  const rowCount = (roles?.length || 0) + 1;
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(dist/* SettingsPageTitle */.SL, { name: pageTitle }), /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({
        id: "global.roles",
        defaultMessage: "Roles"
      }),
      subtitle: formatMessage({
        id: "Settings.roles.list.description",
        defaultMessage: "List of roles"
      }),
      primaryAction: /* @__PURE__ */ react.createElement(dist/* CheckPermissions */.jW, { permissions: constants/* PERMISSIONS */._.createRole }, /* @__PURE__ */ react.createElement(
        dist/* LinkButton */.Qj,
        {
          to: "/settings/users-permissions/roles/new",
          onClick: () => trackUsage("willCreateRole"),
          startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null),
          size: "S"
        },
        formatMessage({
          id: (0,utils/* getTrad */.OB)("List.button.roles"),
          defaultMessage: "Add new role"
        })
      ))
    }
  ), /* @__PURE__ */ react.createElement(
    ActionLayout/* ActionLayout */.Z,
    {
      startActions: /* @__PURE__ */ react.createElement(
        dist/* SearchURLQuery */.m,
        {
          label: formatMessage({
            id: "app.component.search.label",
            defaultMessage: "Search"
          })
        }
      )
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, !canRead && /* @__PURE__ */ react.createElement(dist/* NoPermissions */.ZF, null), (isLoading || isLoadingForPermissions) && /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null), canRead && sortedRoles && sortedRoles?.length ? /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount, rowCount }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: "global.description",
    defaultMessage: "Description"
  }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: "global.users",
    defaultMessage: "Users"
  }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, formatMessage({
    id: "global.actions",
    defaultMessage: "Actions"
  }))))), /* @__PURE__ */ react.createElement(
    components_TableBody,
    {
      sortedRoles,
      canDelete,
      permissions: constants/* PERMISSIONS */._,
      setRoleToDelete,
      onDelete: [showConfirmDelete, setShowConfirmDelete]
    }
  )) : /* @__PURE__ */ react.createElement(dist/* EmptyStateLayout */.x7, { content: emptyLayout[emptyContent] })), /* @__PURE__ */ react.createElement(
    dist/* ConfirmDialog */.QH,
    {
      isConfirmButtonLoading,
      onConfirm: handleConfirmDelete,
      onToggleDialog: handleShowConfirmDelete,
      isOpen: showConfirmDelete
    }
  )));
};
const ProtectedRolesListPage = () => {
  return /* @__PURE__ */ react.createElement(dist/* CheckPagePermissions */.O4, { permissions: constants/* PERMISSIONS */._.accessRoles }, /* @__PURE__ */ react.createElement(RolesListPage, null));
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/index.js







const Roles = () => {
  return /* @__PURE__ */ react.createElement(dist/* CheckPagePermissions */.O4, { permissions: constants/* PERMISSIONS */._.accessRoles }, /* @__PURE__ */ react.createElement(react_router/* Switch */.rs, null, /* @__PURE__ */ react.createElement(
    react_router/* Route */.AW,
    {
      path: "/settings/users-permissions/roles/new",
      component: ProtectedRolesCreatePage,
      exact: true
    }
  ), /* @__PURE__ */ react.createElement(
    react_router/* Route */.AW,
    {
      path: "/settings/users-permissions/roles/:id",
      component: ProtectedRolesEditPage,
      exact: true
    }
  ), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/settings/users-permissions/roles", component: ProtectedRolesListPage, exact: true }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "", component: dist/* AnErrorOccurred */.Hn })));
};
/* harmony default export */ const pages_Roles = (Roles);


/***/ }),

/***/ 99688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 67083:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(62878);
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}
module.exports = arrayIncludes;


/***/ }),

/***/ 65286:
/***/ ((module) => {

function arrayIncludesWith(array, value, comparator) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}
module.exports = arrayIncludesWith;


/***/ }),

/***/ 19975:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(44936), arrayIncludes = __webpack_require__(67083), arrayIncludesWith = __webpack_require__(65286), arrayMap = __webpack_require__(36393), baseUnary = __webpack_require__(20435), cacheHas = __webpack_require__(42435);
var LARGE_ARRAY_SIZE = 200;
function baseDifference(array, values, iteratee, comparator) {
  var index = -1, includes = arrayIncludes, isCommon = true, length = array.length, result = [], valuesLength = values.length;
  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  } else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
    while (++index < length) {
      var value = array[index], computed = iteratee == null ? value : iteratee(value);
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var valuesIndex = valuesLength;
        while (valuesIndex--) {
          if (values[valuesIndex] === computed) {
            continue outer;
          }
        }
        result.push(value);
      } else if (!includes(values, computed, comparator)) {
        result.push(value);
      }
    }
  return result;
}
module.exports = baseDifference;


/***/ }),

/***/ 1107:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(84856), createBaseEach = __webpack_require__(52593);
var baseEach = createBaseEach(baseForOwn);
module.exports = baseEach;


/***/ }),

/***/ 32652:
/***/ ((module) => {

function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
module.exports = baseFindIndex;


/***/ }),

/***/ 62878:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(32652), baseIsNaN = __webpack_require__(2784), strictIndexOf = __webpack_require__(51425);
function baseIndexOf(array, value, fromIndex) {
  return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}
module.exports = baseIndexOf;


/***/ }),

/***/ 2784:
/***/ ((module) => {

function baseIsNaN(value) {
  return value !== value;
}
module.exports = baseIsNaN;


/***/ }),

/***/ 92403:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(1107), isArrayLike = __webpack_require__(47727);
function baseMap(collection, iteratee) {
  var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
  baseEach(collection, function(value, key, collection2) {
    result[++index] = iteratee(value, key, collection2);
  });
  return result;
}
module.exports = baseMap;


/***/ }),

/***/ 16429:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(36393), baseGet = __webpack_require__(82393), baseIteratee = __webpack_require__(90040), baseMap = __webpack_require__(92403), baseSortBy = __webpack_require__(63135), baseUnary = __webpack_require__(20435), compareMultiple = __webpack_require__(9998), identity = __webpack_require__(51339), isArray = __webpack_require__(26126);
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        };
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }
  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
  var result = baseMap(collection, function(value, key, collection2) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { "criteria": criteria, "index": ++index, "value": value };
  });
  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}
module.exports = baseOrderBy;


/***/ }),

/***/ 63135:
/***/ ((module) => {

function baseSortBy(array, comparer) {
  var length = array.length;
  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}
module.exports = baseSortBy;


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

/***/ 17654:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(85194);
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
    var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
    if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
      return 1;
    }
    if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}
module.exports = compareAscending;


/***/ }),

/***/ 9998:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compareAscending = __webpack_require__(17654);
function compareMultiple(object, other, orders) {
  var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == "desc" ? -1 : 1);
    }
  }
  return object.index - other.index;
}
module.exports = compareMultiple;


/***/ }),

/***/ 52593:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(47727);
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
module.exports = createBaseEach;


/***/ }),

/***/ 51425:
/***/ ((module) => {

function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1, length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
module.exports = strictIndexOf;


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

/***/ 58422:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(36393), baseIteratee = __webpack_require__(90040), baseMap = __webpack_require__(92403), isArray = __webpack_require__(26126);
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}
module.exports = map;


/***/ }),

/***/ 8243:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(93367), baseOrderBy = __webpack_require__(16429), baseRest = __webpack_require__(52431), isIterateeCall = __webpack_require__(65145);
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});
module.exports = sortBy;


/***/ }),

/***/ 34049:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSlice = __webpack_require__(20454);
function tail(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseSlice(array, 1, length) : [];
}
module.exports = tail;


/***/ }),

/***/ 41942:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSlice = __webpack_require__(20454), toInteger = __webpack_require__(69740);
function take(array, n, guard) {
  if (!(array && array.length)) {
    return [];
  }
  n = guard || n === void 0 ? 1 : toInteger(n);
  return baseSlice(array, 0, n < 0 ? 0 : n);
}
module.exports = take;


/***/ }),

/***/ 89794:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toNumber = __webpack_require__(51527);
var INFINITY = 1 / 0, MAX_INTEGER = 17976931348623157e292;
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
module.exports = toFinite;


/***/ }),

/***/ 69740:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toFinite = __webpack_require__(89794);
function toInteger(value) {
  var result = toFinite(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
module.exports = toInteger;


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

/***/ 87366:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseDifference = __webpack_require__(19975), baseRest = __webpack_require__(52431), isArrayLikeObject = __webpack_require__(99662);
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array) ? baseDifference(array, values) : [];
});
module.exports = without;


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

/***/ 37472:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 74758:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";

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

"use strict";
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

/***/ 68412:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27279);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48157);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47533);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37652);
/* harmony import */ var _themes_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61657);
/* harmony import */ var _Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32370);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93415);








const LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({ disabled }) => disabled ? "none" : void 0};
  color: ${({ disabled, theme }) => disabled ? theme.colors.neutral600 : theme.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10 / 16}rem;
  }

  ${_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary500};
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary700};
  }

  ${_themes_utils_mjs__WEBPACK_IMPORTED_MODULE_4__/* .buttonFocusStyle */ .BF};
`;
const IconWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .x))`
  display: flex;
`;
const Link = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ children, href, to, disabled = false, startIcon, endIcon, ...restProps }, ref) => {
  const target = href ? "_blank" : void 0;
  const rel = href ? "noreferrer noopener" : void 0;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LinkWrapper, { as: to && !disabled ? react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .NavLink */ .OL : "a", target, rel, to: disabled ? void 0 : to, href: disabled ? "#" : href, disabled, ref, ...restProps, children: [startIcon && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconWrapper, { as: "span", "aria-hidden": true, paddingRight: 2, children: startIcon }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, { children }), endIcon && !href && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconWrapper, { as: "span", "aria-hidden": true, paddingLeft: 2, children: endIcon }), href && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconWrapper, { as: "span", "aria-hidden": true, paddingLeft: 2, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}) })] });
});



/***/ }),

/***/ 73354:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 35318:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);

const c = (a) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...a, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    fillRule: "evenodd",
    d: "M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",
    clipRule: "evenodd"
  }
) }), o = c;



/***/ })

}]);