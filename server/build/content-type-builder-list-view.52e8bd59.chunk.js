"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[5905],{

/***/ 3500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_ListView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(27875);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48102);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(74758);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(93415);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.mjs
var Plus = __webpack_require__(36938);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(59082);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.mjs
var Pencil = __webpack_require__(26784);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.mjs
var ArrowLeft = __webpack_require__(76827);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(98934);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/has.js
var has = __webpack_require__(10131);
var has_default = /*#__PURE__*/__webpack_require__.n(has);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(6078);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(51943);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(51447);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.mjs
var Table = __webpack_require__(70774);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.mjs
var Thead = __webpack_require__(38101);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.mjs
var Tr = __webpack_require__(93153);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.mjs
var Cell = __webpack_require__(50086);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/TFooter.mjs
var TFooter = __webpack_require__(38566);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70627);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/hooks/useDataManager.js
var useDataManager = __webpack_require__(27523);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/hooks/useFormModalNavigation.js
var useFormModalNavigation = __webpack_require__(47558);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(90635);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(37652);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/Tr/index.js


const Tr_Tr = styled_components_browser_esm/* default */.ZP.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,dist/* pxToRem */.Q1)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,dist/* pxToRem */.Q1)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({ isFromDynamicZone, isChildOfDynamicZone, theme }) => {
  if (isChildOfDynamicZone) {
    return `background-color: ${theme.colors.primary200};`;
  }
  if (isFromDynamicZone) {
    return `background-color: ${theme.colors.primary200};`;
  }
  return `background: ${theme.colors.neutral150};`;
}}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;
/* harmony default export */ const components_Tr = (Tr_Tr);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ComponentList/index.js






function ComponentList({
  customRowComponent,
  component,
  isFromDynamicZone,
  isNestedInDZComponent,
  firstLoopComponentUid
}) {
  const { modifiedData } = (0,useDataManager/* default */.Z)();
  const {
    schema: { attributes }
  } = get_default()(modifiedData, ["components", component], {
    schema: { attributes: [] }
  });
  return /* @__PURE__ */ react.createElement(components_Tr, { isChildOfDynamicZone: isFromDynamicZone, className: "component-row" }, /* @__PURE__ */ react.createElement("td", { colSpan: 12 }, /* @__PURE__ */ react.createElement(
    components_List,
    {
      customRowComponent,
      items: attributes,
      targetUid: component,
      firstLoopComponentUid: firstLoopComponentUid || component,
      editTarget: "components",
      isFromDynamicZone,
      isNestedInDZComponent,
      isSub: true,
      secondLoopComponentUid: firstLoopComponentUid ? component : null
    }
  )));
}
ComponentList.defaultProps = {
  component: null,
  customRowComponent: null,
  firstLoopComponentUid: null,
  isFromDynamicZone: false,
  isNestedInDZComponent: false
};
ComponentList.propTypes = {
  component: (prop_types_default()).string,
  customRowComponent: (prop_types_default()).func,
  firstLoopComponentUid: (prop_types_default()).string,
  isFromDynamicZone: (prop_types_default()).bool,
  isNestedInDZComponent: (prop_types_default()).bool
};
/* harmony default export */ const components_ComponentList = (ComponentList);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cross.mjs
var Cross = __webpack_require__(95066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.mjs
var Icon = __webpack_require__(50703);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/IconPicker/constants.js
var constants = __webpack_require__(25237);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ComponentCard/ComponentIcon/ComponentIcon.js




function ComponentIcon({ isActive, icon }) {
  return /* @__PURE__ */ react.createElement(
    Flex/* Flex */.k,
    {
      alignItems: "center",
      background: isActive ? "primary200" : "neutral200",
      justifyContent: "center",
      height: 8,
      width: 8,
      borderRadius: "50%"
    },
    /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { as: constants/* COMPONENT_ICONS */.c[icon] || constants/* COMPONENT_ICONS */.c.cube, height: 5, width: 5 })
  );
}
ComponentIcon.defaultProps = {
  isActive: false,
  icon: "Cube"
};
ComponentIcon.propTypes = {
  isActive: (prop_types_default()).bool,
  icon: (prop_types_default()).string
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ComponentCard/ComponentIcon/index.js


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ComponentCard/index.js









const CloseButton = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,dist/* pxToRem */.Q1)(8)};

  svg {
    width: ${(0,dist/* pxToRem */.Q1)(10)};
    height: ${(0,dist/* pxToRem */.Q1)(10)};

    path {
      fill: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const ComponentBox = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  width: ${(0,dist/* pxToRem */.Q1)(140)};
  height: ${(0,dist/* pxToRem */.Q1)(80)};
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background: ${({ theme }) => theme.colors.neutral100};
  border-radius: ${({ theme }) => theme.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary200};
    background: ${({ theme }) => theme.colors.primary100};

    ${CloseButton} {
      display: block;
    }

    ${Typography/* Typography */.Z} {
      color: ${({ theme }) => theme.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({ theme }) => theme.colors.primary200};
      color: ${({ theme }) => theme.colors.primary600};

      svg {
        path {
          fill: ${({ theme }) => theme.colors.primary600};
        }
      }
    }
  }
`;
function ComponentCard({ component, dzName, index, isActive, isInDevelopmentMode, onClick }) {
  const { modifiedData, removeComponentFromDynamicZone } = (0,useDataManager/* default */.Z)();
  const {
    schema: { icon, displayName }
  } = get_default()(modifiedData, ["components", component], { schema: {} });
  const onClose = (e) => {
    e.stopPropagation();
    removeComponentFromDynamicZone(dzName, index);
  };
  return /* @__PURE__ */ react.createElement(
    ComponentBox,
    {
      alignItems: "center",
      direction: "column",
      className: isActive ? "active" : "",
      borderRadius: "borderRadius",
      justifyContent: "center",
      paddingLeft: 4,
      paddingRight: 4,
      shrink: 0,
      onClick,
      role: "tab",
      tabIndex: isActive ? 0 : -1,
      cursor: "pointer",
      "aria-selected": isActive,
      "aria-controls": `dz-${dzName}-panel-${index}`,
      id: `dz-${dzName}-tab-${index}`
    },
    /* @__PURE__ */ react.createElement(ComponentIcon, { icon, isActive }),
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginTop: 1, maxWidth: "100%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold", ellipsis: true }, displayName)),
    isInDevelopmentMode && /* @__PURE__ */ react.createElement(CloseButton, { as: "button", onClick: onClose }, /* @__PURE__ */ react.createElement(Cross/* default */.Z, null))
  );
}
ComponentCard.defaultProps = {
  component: null,
  isActive: false,
  isInDevelopmentMode: false,
  onClick() {
  }
};
ComponentCard.propTypes = {
  component: (prop_types_default()).string,
  dzName: (prop_types_default()).string.isRequired,
  index: (prop_types_default()).number.isRequired,
  isActive: (prop_types_default()).bool,
  isInDevelopmentMode: (prop_types_default()).bool,
  onClick: (prop_types_default()).func
};
/* harmony default export */ const components_ComponentCard = (ComponentCard);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DynamicZoneList/index.js












const StyledAddIcon = (0,styled_components_browser_esm/* default */.ZP)((0,Plus/* default */.Z))`
  width: ${(0,dist/* pxToRem */.Q1)(32)};
  height: ${(0,dist/* pxToRem */.Q1)(32)};
  padding: ${(0,dist/* pxToRem */.Q1)(9)};
  border-radius: ${(0,dist/* pxToRem */.Q1)(64)};
  background: ${({ theme }) => theme.colors.primary100};
  path {
    fill: ${({ theme }) => theme.colors.primary600};
  }
`;
const FixedBox = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  height: ${(0,dist/* pxToRem */.Q1)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;
const ScrollableStack = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  width: 100%;
  overflow-x: auto;
`;
const ComponentContentBox = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  padding-top: ${(0,dist/* pxToRem */.Q1)(90)};
`;
const ComponentStack = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  flex-shrink: 0;
  width: ${(0,dist/* pxToRem */.Q1)(140)};
  height: ${(0,dist/* pxToRem */.Q1)(80)};
  justify-content: center;
  align-items: center;
`;
function DynamicZoneList({ customRowComponent, components, addComponent, name, targetUid }) {
  const { isInDevelopmentMode } = (0,useDataManager/* default */.Z)();
  const [activeTab, setActiveTab] = (0,react.useState)(0);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  const handleClickAdd = () => {
    addComponent(name);
  };
  return /* @__PURE__ */ react.createElement(components_Tr, { className: "dynamiczone-row", isFromDynamicZone: true }, /* @__PURE__ */ react.createElement("td", { colSpan: 12 }, /* @__PURE__ */ react.createElement(FixedBox, { paddingLeft: 8 }, /* @__PURE__ */ react.createElement(ScrollableStack, { gap: 2 }, isInDevelopmentMode && /* @__PURE__ */ react.createElement("button", { type: "button", onClick: handleClickAdd }, /* @__PURE__ */ react.createElement(ComponentStack, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react.createElement(StyledAddIcon, null), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold", textColor: "primary600" }, formatMessage({
    id: (0,getTrad/* default */.Z)("button.component.add"),
    formatMessage: "Add a component"
  })))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { role: "tablist", gap: 2 }, components.map((component, index) => {
    return /* @__PURE__ */ react.createElement(
      components_ComponentCard,
      {
        key: component,
        dzName: name,
        index,
        component,
        isActive: activeTab === index,
        isInDevelopmentMode,
        onClick: () => toggle(index)
      }
    );
  })))), /* @__PURE__ */ react.createElement(ComponentContentBox, null, components.map((component, index) => {
    const props = {
      customRowComponent,
      component
    };
    return /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        id: `dz-${name}-panel-${index}`,
        role: "tabpanel",
        tabindex: 0,
        "aria-labelledby": `dz-${name}-tab-${index}`,
        key: component,
        style: { display: activeTab === index ? "block" : "none" }
      },
      /* @__PURE__ */ react.createElement("table", null, /* @__PURE__ */ react.createElement("tbody", null, /* @__PURE__ */ react.createElement(
        components_ComponentList,
        {
          ...props,
          isFromDynamicZone: true,
          targetUid,
          key: component
        }
      )))
    );
  }))));
}
DynamicZoneList.defaultProps = {
  addComponent() {
  },
  components: [],
  customRowComponent: null,
  name: null
};
DynamicZoneList.propTypes = {
  addComponent: (prop_types_default()).func,
  components: prop_types_default().instanceOf(Array),
  customRowComponent: (prop_types_default()).func,
  name: (prop_types_default()).string,
  targetUid: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_DynamicZoneList = (DynamicZoneList);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/NestedTFooter/index.js




const IconBox = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
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
    fill: ${({ theme, color }) => theme.colors[`${color}600`]};
  }
`;
const ButtonBox = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  border-radius: 0 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`;
const NestedTFooter = ({ children, icon, color, ...props }) => {
  return /* @__PURE__ */ react.createElement(ButtonBox, { paddingBottom: 4, paddingTop: 4, as: "button", type: "button", ...props }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(IconBox, { color, "aria-hidden": true, background: `${color}200` }, icon), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 3 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold", textColor: `${color}600` }, children))));
};
NestedTFooter.propTypes = {
  color: (prop_types_default()).string.isRequired,
  children: (prop_types_default()).string.isRequired,
  icon: (prop_types_default()).node.isRequired
};
/* harmony default export */ const components_NestedTFooter = (NestedTFooter);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/List/BoxWrapper.js


const BoxWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({ theme }) => theme.colors.neutral150};

    & td,
    & th {
      padding: ${({ theme }) => theme.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({ theme }) => theme.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({ theme }) => theme.colors.neutral600};
    outline-offset: -4px;
  }
`;
/* harmony default export */ const List_BoxWrapper = (BoxWrapper);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/List/index.js













function List({
  addComponentToDZ,
  customRowComponent,
  editTarget,
  firstLoopComponentUid,
  isFromDynamicZone,
  isMain,
  isNestedInDZComponent,
  isSub,
  items,
  secondLoopComponentUid,
  targetUid
}) {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const { isInDevelopmentMode, modifiedData, isInContentTypeView } = (0,useDataManager/* default */.Z)();
  const { onOpenModalAddField } = (0,useFormModalNavigation/* default */.Z)();
  const onClickAddField = () => {
    trackUsage("hasClickedCTBAddFieldBanner");
    onOpenModalAddField({ forTarget: editTarget, targetUid });
  };
  if (!targetUid) {
    return /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount: 2, rowCount: 2 }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.type", defaultMessage: "Type" }))))), /* @__PURE__ */ react.createElement(
      dist/* EmptyBodyTable */.c4,
      {
        colSpan: 2,
        content: {
          id: (0,getTrad/* default */.Z)("table.content.create-first-content-type"),
          defaultMessage: "Create your first Collection-Type"
        }
      }
    ));
  }
  if (items.length === 0 && isMain) {
    return /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount: 2, rowCount: 2 }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.type", defaultMessage: "Type" }))))), /* @__PURE__ */ react.createElement(
      dist/* EmptyBodyTable */.c4,
      {
        action: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: onClickAddField, size: "L", startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null), variant: "secondary" }, formatMessage({
          id: (0,getTrad/* default */.Z)("table.button.no-fields"),
          defaultMessage: "Add new field"
        })),
        colSpan: 2,
        content: isInContentTypeView ? {
          id: (0,getTrad/* default */.Z)("table.content.no-fields.collection-type"),
          defaultMessage: "Add your first field to this Collection-Type"
        } : {
          id: (0,getTrad/* default */.Z)("table.content.no-fields.component"),
          defaultMessage: "Add your first field to this component"
        }
      }
    ));
  }
  return /* @__PURE__ */ react.createElement(List_BoxWrapper, null, /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      paddingLeft: 6,
      paddingRight: isMain ? 6 : 0,
      ...isMain && { style: { overflowX: "auto" } }
    },
    /* @__PURE__ */ react.createElement("table", null, isMain && /* @__PURE__ */ react.createElement("thead", null, /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("th", null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement("th", { colSpan: "2" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.type", defaultMessage: "Type" }))))), /* @__PURE__ */ react.createElement("tbody", null, items.map((item) => {
      const { type } = item;
      const CustomRow = customRowComponent;
      return /* @__PURE__ */ react.createElement(react.Fragment, { key: item.name }, /* @__PURE__ */ react.createElement(
        CustomRow,
        {
          ...item,
          isNestedInDZComponent,
          targetUid,
          editTarget,
          firstLoopComponentUid,
          isFromDynamicZone,
          secondLoopComponentUid
        }
      ), type === "component" && /* @__PURE__ */ react.createElement(
        components_ComponentList,
        {
          ...item,
          customRowComponent,
          targetUid,
          isNestedInDZComponent: isFromDynamicZone,
          editTarget,
          firstLoopComponentUid
        }
      ), type === "dynamiczone" && /* @__PURE__ */ react.createElement(
        components_DynamicZoneList,
        {
          ...item,
          customRowComponent,
          addComponent: addComponentToDZ,
          targetUid
        }
      ));
    })))
  ), isMain && isInDevelopmentMode && /* @__PURE__ */ react.createElement(TFooter/* TFooter */.c, { icon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null), onClick: onClickAddField }, formatMessage({
    id: (0,getTrad/* default */.Z)(
      `form.button.add.field.to.${modifiedData.contentType ? modifiedData.contentType.schema.kind : editTarget || "collectionType"}`
    ),
    defaultMessage: "Add another field"
  })), isSub && isInDevelopmentMode && /* @__PURE__ */ react.createElement(
    components_NestedTFooter,
    {
      icon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null),
      onClick: onClickAddField,
      color: isFromDynamicZone ? "primary" : "neutral"
    },
    formatMessage({
      id: (0,getTrad/* default */.Z)(`form.button.add.field.to.component`),
      defaultMessage: "Add another field"
    })
  ));
}
List.defaultProps = {
  addComponentToDZ() {
  },
  customRowComponent: null,
  firstLoopComponentUid: null,
  isFromDynamicZone: false,
  isNestedInDZComponent: false,
  isMain: false,
  isSub: false,
  items: [],
  secondLoopComponentUid: null,
  targetUid: null
};
List.propTypes = {
  addComponentToDZ: (prop_types_default()).func,
  customRowComponent: (prop_types_default()).func,
  editTarget: (prop_types_default()).string.isRequired,
  firstLoopComponentUid: (prop_types_default()).string,
  isFromDynamicZone: (prop_types_default()).bool,
  isNestedInDZComponent: (prop_types_default()).bool,
  isMain: (prop_types_default()).bool,
  items: prop_types_default().instanceOf(Array),
  secondLoopComponentUid: (prop_types_default()).string,
  targetUid: (prop_types_default()).string,
  isSub: (prop_types_default()).bool
};
/* harmony default export */ const components_List = (List);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(4987);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.mjs
var Trash = __webpack_require__(78665);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Lock.mjs
var Lock = __webpack_require__(91561);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/icons/Curve.js




const StyledBox = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4 / 16}rem;
    height: ${12 / 16}rem;
    background: ${({ theme, color }) => theme.colors[color]};
    display: block;
  }
`;
const Svg = styled_components_browser_esm/* default */.ZP.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({ theme, color }) => theme.colors[color]};
  }
`;
const Curve = (props) => /* @__PURE__ */ react.createElement(StyledBox, null, /* @__PURE__ */ react.createElement(
  Svg,
  {
    width: "20",
    height: "23",
    viewBox: "0 0 20 23",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  },
  /* @__PURE__ */ react.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"
    }
  )
));
Curve.propTypes = {
  color: (prop_types_default()).string.isRequired
};
/* harmony default export */ const icons_Curve = (Curve);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeIcon/index.js + 5 modules
var AttributeIcon = __webpack_require__(12395);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/UpperFirst/index.js


const UpperFirst = ({ content }) => upperFirst_default()(content);
UpperFirst.defaultProps = {
  content: null
};
UpperFirst.propTypes = {
  content: (prop_types_default()).string
};
/* harmony default export */ const components_UpperFirst = (UpperFirst);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ListRow/BoxWrapper.js


const BoxWrapper_BoxWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  position: relative;
`;
/* harmony default export */ const ListRow_BoxWrapper = (BoxWrapper_BoxWrapper);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ListRow/DisplayedType.js





const DisplayedType = ({ type, customField, repeatable }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  let readableType = type;
  if (["integer", "biginteger", "float", "decimal"].includes(type)) {
    readableType = "number";
  } else if (["string"].includes(type)) {
    readableType = "text";
  }
  if (customField) {
    return /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
      id: (0,getTrad/* default */.Z)("attribute.customField"),
      defaultMessage: "Custom field"
    }));
  }
  return /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
    id: (0,getTrad/* default */.Z)(`attribute.${readableType}`),
    defaultMessage: type
  }), "\xA0", repeatable && formatMessage({
    id: (0,getTrad/* default */.Z)("component.repeatable"),
    defaultMessage: "(repeatable)"
  }));
};
DisplayedType.defaultProps = {
  customField: null,
  repeatable: false
};
DisplayedType.propTypes = {
  type: (prop_types_default()).string.isRequired,
  customField: (prop_types_default()).string,
  repeatable: (prop_types_default()).bool
};
/* harmony default export */ const ListRow_DisplayedType = (DisplayedType);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ListRow/index.js














function ListRow({
  configurable,
  customField,
  editTarget,
  firstLoopComponentUid,
  isFromDynamicZone,
  name,
  onClick,
  relation,
  repeatable,
  secondLoopComponentUid,
  target,
  targetUid,
  type
}) {
  const { contentTypes, isInDevelopmentMode, removeAttribute } = (0,useDataManager/* default */.Z)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const isMorph = type === "relation" && relation.includes("morph");
  const ico = ["integer", "biginteger", "float", "decimal"].includes(type) ? "number" : type;
  const contentType = get_default()(contentTypes, [target], {});
  const contentTypeFriendlyName = get_default()(contentType, ["schema", "displayName"], "");
  const isPluginContentType = get_default()(contentType, "plugin");
  const src = target ? "relation" : ico;
  const handleClick = () => {
    if (isMorph) {
      return;
    }
    if (configurable !== false) {
      const attrType = type;
      onClick(
        // Tells where the attribute is located in the main modifiedData object : contentType, component or components
        editTarget,
        // main data type uid
        secondLoopComponentUid || firstLoopComponentUid || targetUid,
        // Name of the attribute
        name,
        // Type of the attribute
        attrType,
        customField
      );
    }
  };
  let loopNumber;
  if (secondLoopComponentUid && firstLoopComponentUid) {
    loopNumber = 2;
  } else if (firstLoopComponentUid) {
    loopNumber = 1;
  } else {
    loopNumber = 0;
  }
  return /* @__PURE__ */ react.createElement(
    ListRow_BoxWrapper,
    {
      as: "tr",
      ...(0,dist/* onRowClick */.X7)({
        fn: handleClick,
        condition: isInDevelopmentMode && configurable && !isMorph
      })
    },
    /* @__PURE__ */ react.createElement("td", { style: { position: "relative" } }, loopNumber !== 0 && /* @__PURE__ */ react.createElement(icons_Curve, { color: isFromDynamicZone ? "primary200" : "neutral150" }), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { paddingLeft: 2, gap: 4 }, /* @__PURE__ */ react.createElement(AttributeIcon/* default */.Z, { type: src, customField }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold" }, name))),
    /* @__PURE__ */ react.createElement("td", null, target ? /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
      id: (0,getTrad/* default */.Z)(
        `modelPage.attribute.${isMorph ? "relation-polymorphic" : "relationWith"}`
      ),
      defaultMessage: "Relation with"
    }), "\xA0", /* @__PURE__ */ react.createElement("span", { style: { fontStyle: "italic" } }, /* @__PURE__ */ react.createElement(components_UpperFirst, { content: contentTypeFriendlyName }), "\xA0", isPluginContentType && `(${formatMessage({
      id: (0,getTrad/* default */.Z)(`from`),
      defaultMessage: "from"
    })}: ${isPluginContentType})`)) : /* @__PURE__ */ react.createElement(ListRow_DisplayedType, { type, customField, repeatable })),
    /* @__PURE__ */ react.createElement("td", null, isInDevelopmentMode ? /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "flex-end", ...dist/* stopPropagation */.UW }, configurable ? /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 1 }, !isMorph && /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.h,
      {
        onClick: handleClick,
        label: `${formatMessage({
          id: "app.utils.edit",
          defaultMessage: "Edit"
        })} ${name}`,
        noBorder: true,
        icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null)
      }
    ), /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.h,
      {
        onClick: (e) => {
          e.stopPropagation();
          removeAttribute(
            editTarget,
            name,
            secondLoopComponentUid || firstLoopComponentUid || ""
          );
        },
        label: `${formatMessage({
          id: "global.delete",
          defaultMessage: "Delete"
        })} ${name}`,
        noBorder: true,
        icon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null)
      }
    )) : /* @__PURE__ */ react.createElement(Lock/* default */.Z, null)) : (
      /*
        In production mode the edit icons aren't visible, therefore
        we need to reserve the same space, otherwise the height of the
        row might collapse, leading to bad positioned curve icons
      */
      /* @__PURE__ */ react.createElement(Box/* Box */.x, { height: (0,dist/* pxToRem */.Q1)(32) })
    ))
  );
}
ListRow.defaultProps = {
  configurable: true,
  customField: null,
  firstLoopComponentUid: null,
  isFromDynamicZone: false,
  onClick() {
  },
  relation: "",
  repeatable: false,
  secondLoopComponentUid: null,
  target: null,
  targetUid: null,
  type: null
};
ListRow.propTypes = {
  configurable: (prop_types_default()).bool,
  customField: (prop_types_default()).string,
  editTarget: (prop_types_default()).string.isRequired,
  firstLoopComponentUid: (prop_types_default()).string,
  isFromDynamicZone: (prop_types_default()).bool,
  name: (prop_types_default()).string.isRequired,
  onClick: (prop_types_default()).func,
  relation: (prop_types_default()).string,
  repeatable: (prop_types_default()).bool,
  secondLoopComponentUid: (prop_types_default()).string,
  target: (prop_types_default()).string,
  targetUid: (prop_types_default()).string,
  type: (prop_types_default()).string
};
/* harmony default export */ const components_ListRow = ((0,react.memo)(ListRow));


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/getAttributeDisplayedType.js
const getAttributeDisplayedType = (type) => {
  let displayedType;
  switch (type) {
    case "date":
    case "datetime":
    case "time":
    case "timestamp":
      displayedType = "date";
      break;
    case "integer":
    case "biginteger":
    case "decimal":
    case "float":
      displayedType = "number";
      break;
    case "string":
    case "text":
      displayedType = "text";
      break;
    case "":
      displayedType = "relation";
      break;
    default:
      displayedType = type;
  }
  return displayedType;
};
/* harmony default export */ const utils_getAttributeDisplayedType = (getAttributeDisplayedType);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Layer.mjs
var Layer = __webpack_require__(31440);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/pages/ListView/LinkToCMSettingsView/index.js







const cmPermissions = {
  collectionTypesConfigurations: [
    {
      action: "plugin::content-manager.collection-types.configure-view",
      subject: null
    }
  ],
  componentsConfigurations: [
    {
      action: "plugin::content-manager.components.configure-layout",
      subject: null
    }
  ],
  singleTypesConfigurations: [
    {
      action: "plugin::content-manager.single-types.configure-view",
      subject: null
    }
  ]
};
const LinkToCMSettingsView = ({
  disabled,
  isTemporary,
  isInContentTypeView,
  contentTypeKind,
  targetUid
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { push } = (0,react_router/* useHistory */.k6)();
  const { collectionTypesConfigurations, componentsConfigurations, singleTypesConfigurations } = cmPermissions;
  const label = formatMessage({ id: "content-type-builder.form.button.configure-view" });
  let permissionsToApply = collectionTypesConfigurations;
  const handleClick = () => {
    if (isTemporary) {
      return false;
    }
    if (isInContentTypeView) {
      push(`/content-manager/collectionType/${targetUid}/configurations/edit`);
    } else {
      push(`/content-manager/components/${targetUid}/configurations/edit`);
    }
    return false;
  };
  if (isInContentTypeView && contentTypeKind === "singleType") {
    permissionsToApply = singleTypesConfigurations;
  }
  if (!isInContentTypeView) {
    permissionsToApply = componentsConfigurations;
  }
  return /* @__PURE__ */ react.createElement(dist/* CheckPermissions */.jW, { permissions: permissionsToApply }, /* @__PURE__ */ react.createElement(
    Button/* Button */.z,
    {
      startIcon: /* @__PURE__ */ react.createElement(Layer/* default */.Z, null),
      variant: "tertiary",
      onClick: handleClick,
      disabled: isTemporary || disabled
    },
    label
  ));
};
LinkToCMSettingsView.defaultProps = {
  contentTypeKind: "collectionType",
  isInContentTypeView: true,
  isTemporary: false,
  targetUid: ""
};
LinkToCMSettingsView.propTypes = {
  disabled: (prop_types_default()).bool.isRequired,
  contentTypeKind: (prop_types_default()).string,
  isInContentTypeView: (prop_types_default()).bool,
  isTemporary: (prop_types_default()).bool,
  targetUid: (prop_types_default()).string
};
/* harmony default export */ const ListView_LinkToCMSettingsView = ((0,react.memo)(LinkToCMSettingsView));

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/pages/ListView/index.js

















const ListView = () => {
  const { initialData, modifiedData, isInDevelopmentMode, isInContentTypeView, submitData } = (0,useDataManager/* default */.Z)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const match = (0,react_router/* useRouteMatch */.$B)("/plugins/content-type-builder/:kind/:currentUID");
  const {
    onOpenModalAddComponentsToDZ,
    onOpenModalAddField,
    onOpenModalEditField,
    onOpenModalEditSchema,
    onOpenModalEditCustomField
  } = (0,useFormModalNavigation/* default */.Z)();
  const firstMainDataPath = isInContentTypeView ? "contentType" : "component";
  const mainDataTypeAttributesPath = [firstMainDataPath, "schema", "attributes"];
  const targetUid = get_default()(modifiedData, [firstMainDataPath, "uid"]);
  const isTemporary = get_default()(modifiedData, [firstMainDataPath, "isTemporary"], false);
  const contentTypeKind = get_default()(modifiedData, [firstMainDataPath, "schema", "kind"], null);
  const attributes = get_default()(modifiedData, mainDataTypeAttributesPath, []);
  const isFromPlugin = has_default()(initialData, [firstMainDataPath, "plugin"]);
  const hasModelBeenModified = !isEqual_default()(modifiedData, initialData);
  const forTarget = isInContentTypeView ? "contentType" : "component";
  const handleClickAddComponentToDZ = (dynamicZoneTarget) => {
    onOpenModalAddComponentsToDZ({ dynamicZoneTarget, targetUid });
  };
  const handleClickEditField = async (forTarget2, targetUid2, attributeName, type, customField) => {
    const attributeType = utils_getAttributeDisplayedType(type);
    const step = type === "component" ? "2" : null;
    if (customField) {
      onOpenModalEditCustomField({
        forTarget: forTarget2,
        targetUid: targetUid2,
        attributeName,
        attributeType,
        customFieldUid: customField
      });
    } else {
      onOpenModalEditField({
        forTarget: forTarget2,
        targetUid: targetUid2,
        attributeName,
        attributeType,
        step
      });
    }
  };
  let label = get_default()(modifiedData, [firstMainDataPath, "schema", "displayName"], "");
  const kind = get_default()(modifiedData, [firstMainDataPath, "schema", "kind"], "");
  const isCreatingFirstContentType = match?.params.currentUID === "create-content-type";
  if (!label && isCreatingFirstContentType) {
    label = formatMessage({
      id: (0,getTrad/* default */.Z)("button.model.create"),
      defaultMessage: "Create new collection type"
    });
  }
  const onEdit = () => {
    const contentType = kind || firstMainDataPath;
    if (contentType === "collectionType") {
      trackUsage("willEditNameOfContentType");
    }
    if (contentType === "singleType") {
      trackUsage("willEditNameOfSingleType");
    }
    onOpenModalEditSchema({
      modalType: firstMainDataPath,
      forTarget: firstMainDataPath,
      targetUid,
      kind: contentType
    });
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    react_router/* Prompt */.NL,
    {
      message: (location) => location.hash === "#back" ? false : formatMessage({ id: (0,getTrad/* default */.Z)("prompt.unsaved") }),
      when: hasModelBeenModified
    }
  ), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      id: "title",
      primaryAction: isInDevelopmentMode && /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2 }, !isCreatingFirstContentType && /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null),
          variant: "secondary",
          onClick: () => {
            onOpenModalAddField({ forTarget, targetUid });
          }
        },
        formatMessage({ id: (0,getTrad/* default */.Z)("button.attributes.add.another") })
      ), /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
          onClick: () => submitData(),
          type: "submit",
          disabled: isEqual_default()(modifiedData, initialData)
        },
        formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        })
      )),
      secondaryAction: isInDevelopmentMode && !isFromPlugin && !isCreatingFirstContentType && /* @__PURE__ */ react.createElement(Button/* Button */.z, { startIcon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null), variant: "tertiary", onClick: onEdit }, formatMessage({
        id: "app.utils.edit",
        defaultMessage: "Edit"
      })),
      title: upperFirst_default()(label),
      subtitle: formatMessage({
        id: (0,getTrad/* default */.Z)("listView.headerLayout.description"),
        defaultMessage: "Build the data architecture of your content"
      }),
      navigationAction: /* @__PURE__ */ react.createElement(dist/* Link */.rU, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null), to: "/plugins/content-type-builder/" }, formatMessage({
        id: "global.back",
        defaultMessage: "Back"
      }))
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2 }, /* @__PURE__ */ react.createElement(
    ListView_LinkToCMSettingsView,
    {
      key: "link-to-cm-settings-view",
      targetUid,
      isTemporary,
      isInContentTypeView,
      contentTypeKind,
      disabled: isCreatingFirstContentType
    }
  ))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(
    components_List,
    {
      items: attributes,
      customRowComponent: (props) => /* @__PURE__ */ react.createElement(components_ListRow, { ...props, onClick: handleClickEditField }),
      addComponentToDZ: handleClickAddComponentToDZ,
      targetUid,
      editTarget: forTarget,
      isMain: true
    }
  )))));
};
/* harmony default export */ const pages_ListView = (ListView);


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