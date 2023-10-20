(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[8880],{

/***/ 12395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_AttributeIcon)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(93415);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Number.mjs
var dist_Number = __webpack_require__(60330);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74081);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/Blocks.mjs

const c = (l) => /* @__PURE__ */ (0,jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 34 25", ...l, children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)("rect", { width: 33, height: 23, x: 0.5, y: 1, fill: "#EAF5FF", stroke: "#B8E1FF", rx: 2.5 }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)("path", { fill: "#0C75AF", d: "M18.901 9.828a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z" }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      fill: "#0C75AF",
      d: "M19.703 8.785a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.814.814 0 0 1 .669.792c.005.311.487.311.483 0a1.308 1.308 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.697 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.314-.477-.314-.482-.002ZM18.901 13.488a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"
    }
  ),
  /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      fill: "#0C75AF",
      d: "M19.703 12.445a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.812.812 0 0 1 .669.792c.005.311.487.311.483 0a1.307 1.307 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.697 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.314-.477-.314-.482-.002ZM18.901 17.247a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"
    }
  ),
  /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      fill: "#0C75AF",
      d: "M19.703 16.204a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.812.812 0 0 1 .669.792c.005.311.487.311.483 0a1.308 1.308 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.698 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.313-.477-.313-.482-.002ZM15.075 9.842a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"
    }
  ),
  /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      fill: "#0C75AF",
      d: "M15.876 8.8a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.81.81 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.296 1.296 0 0 0-.119 1.49c.283.468.831.697 1.365.596.596-.114 1.011-.664 1.02-1.258.006-.314-.477-.314-.482-.003ZM15.075 13.503a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"
    }
  ),
  /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      fill: "#0C75AF",
      d: "M15.876 12.46a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.81.81 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.296 1.296 0 0 0-.119 1.49c.283.468.831.697 1.365.596.596-.114 1.011-.664 1.02-1.258.006-.314-.477-.314-.482-.003ZM15.075 17.261a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"
    }
  ),
  /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      fill: "#0C75AF",
      d: "M15.876 16.218a.81.81 0 0 1-.512.749.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.808.808 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.293 1.293 0 0 0-.119 1.487c.283.468.831.698 1.365.596.596-.113 1.011-.664 1.02-1.258.006-.311-.477-.311-.482 0Z"
    }
  )
] }), h = c;


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Boolean.mjs
var Boolean = __webpack_require__(67929);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/CollectionType.mjs

const CollectionType_h = (t) => /* @__PURE__ */ (0,jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 32 24", ...t, children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)("rect", { width: 31, height: 23, x: 0.5, y: 0.5, fill: "#4945FF", stroke: "#4945FF", rx: 2.5 }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      fill: "#fff",
      d: "M15.328 10.54h1.723c.012-.089.012-.165.012-.253 0-1.676-1.471-2.959-3.41-2.959-2.696 0-4.647 2.22-4.647 5.344 0 2.15 1.383 3.545 3.504 3.545 2.045 0 3.597-1.154 3.967-2.936h-1.752c-.276.826-1.102 1.371-2.063 1.371-1.137 0-1.846-.802-1.846-2.103 0-2.08 1.19-3.65 2.725-3.65 1.037 0 1.746.62 1.787 1.558v.082ZM21.053 16l1.488-6.943h2.531l.31-1.512H18.54l-.31 1.512h2.53L19.272 16h1.782Z"
    }
  )
] }), i = CollectionType_h;


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Component.mjs
var Component = __webpack_require__(60069);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Date.mjs
var dist_Date = __webpack_require__(52374);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/DynamicZone.mjs
var DynamicZone = __webpack_require__(24001);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Email.mjs
var Email = __webpack_require__(16719);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Enumeration.mjs
var Enumeration = __webpack_require__(14858);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Media.mjs
var Media = __webpack_require__(48809);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Json.mjs
var Json = __webpack_require__(6913);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/Password.mjs

const o = (t) => /* @__PURE__ */ (0,jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 32 24", ...t, children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      fill: "#FDF4DC",
      stroke: "#FAE7B9",
      d: "M.5 3A2.5 2.5 0 0 1 3 .5h26A2.5 2.5 0 0 1 31.5 3v18a2.5 2.5 0 0 1-2.5 2.5H3A2.5 2.5 0 0 1 .5 21V3Z"
    }
  ),
  /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      fill: "#D9822F",
      d: "M20.158 11.995c0-.591-.463-1.073-1.045-1.11H13.53V9.245a2.05 2.05 0 0 1 2.046-2.049c1.13 0 2.048.784 2.049 1.913 0 .24.194.433.433.433h.33a.433.433 0 0 0 .433-.433C18.82 7.32 17.365 5.999 15.577 6a3.246 3.246 0 0 0-3.241 3.244v1.642h-.223c-.615 0-1.113.499-1.113 1.114v4.887c.001.615.5 1.113 1.115 1.113l6.93-.003c.616 0 1.114-.5 1.114-1.115l-.001-4.887Z"
    }
  )
] }), Password_h = o;


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Relation.mjs
var Relation = __webpack_require__(967);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/RichText.mjs

const a = (h) => /* @__PURE__ */ (0,jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 32 24", ...h, children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)("rect", { width: 31, height: 23, x: 0.5, y: 0.5, fill: "#EAF5FF", stroke: "#B8E1FF", rx: 2.5 }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      fill: "#0C75AF",
      fillRule: "evenodd",
      d: "M19.286 9.286v-.857a.397.397 0 0 0-.138-.302A.465.465 0 0 0 18.82 8h-8.357a.465.465 0 0 0-.326.127.397.397 0 0 0-.138.302v.857c0 .116.046.216.138.301.092.085.2.127.326.127h8.357a.465.465 0 0 0 .327-.127.397.397 0 0 0 .138-.301Zm2.785 2.713v.857a.397.397 0 0 1-.137.301.465.465 0 0 1-.327.128H10.464a.465.465 0 0 1-.326-.128.397.397 0 0 1-.138-.301v-.857c0-.116.046-.217.138-.302a.465.465 0 0 1 .326-.127h11.143c.126 0 .235.043.327.127a.397.397 0 0 1 .137.302Zm-1.857 3.574v.857a.397.397 0 0 1-.137.302.465.465 0 0 1-.327.127h-9.286a.465.465 0 0 1-.326-.127.397.397 0 0 1-.138-.302v-.857c0-.116.046-.216.138-.301a.465.465 0 0 1 .326-.127h9.286c.126 0 .235.042.326.127a.397.397 0 0 1 .138.301Z",
      clipRule: "evenodd"
    }
  )
] }), l = a;


;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/SingleType.mjs

const t = (e) => /* @__PURE__ */ (0,jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 32 24", ...e, children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)("rect", { width: 31, height: 23, x: 0.5, y: 0.5, fill: "#0C75AF", stroke: "#0C75AF", rx: 2.5 }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      fill: "#fff",
      d: "M8.523 13.586c.106 1.64 1.418 2.63 3.34 2.63 2.098 0 3.516-1.113 3.516-2.788 0-1.143-.65-1.846-2.086-2.297l-.867-.27c-.797-.252-1.137-.597-1.137-1.066 0-.598.633-1.031 1.459-1.031.873 0 1.512.474 1.617 1.183h1.67c-.053-1.54-1.36-2.619-3.217-2.619-1.91 0-3.328 1.131-3.328 2.678 0 1.09.715 1.922 1.963 2.309l.879.275c.914.287 1.266.592 1.266 1.084 0 .662-.657 1.107-1.606 1.107-.914 0-1.635-.469-1.758-1.195h-1.71ZM20.107 16l1.489-6.943h2.531l.31-1.512h-6.843l-.31 1.512h2.53L18.326 16h1.781Z"
    }
  )
] }), r = t;


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Text.mjs
var Text = __webpack_require__(63161);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Uid.mjs
var Uid = __webpack_require__(81907);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70627);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(37652);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeIcon/index.js






const iconByTypes = {
  biginteger: dist_Number/* default */.Z,
  blocks: h,
  boolean: Boolean/* default */.Z,
  collectionType: i,
  component: Component/* default */.Z,
  contentType: i,
  date: dist_Date/* default */.Z,
  datetime: dist_Date/* default */.Z,
  decimal: dist_Number/* default */.Z,
  dynamiczone: DynamicZone/* default */.Z,
  email: Email/* default */.Z,
  enum: Enumeration/* default */.Z,
  enumeration: Enumeration/* default */.Z,
  file: Media/* default */.Z,
  files: Media/* default */.Z,
  float: dist_Number/* default */.Z,
  integer: dist_Number/* default */.Z,
  json: Json/* default */.Z,
  JSON: Json/* default */.Z,
  media: Media/* default */.Z,
  number: dist_Number/* default */.Z,
  password: Password_h,
  relation: Relation/* default */.Z,
  richtext: l,
  singleType: r,
  string: Text/* default */.Z,
  text: Text/* default */.Z,
  time: dist_Date/* default */.Z,
  timestamp: dist_Date/* default */.Z,
  uid: Uid/* default */.Z
};
const IconBox = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  svg {
    height: 100%;
    width: 100%;
  }
`;
const AttributeIcon = ({ type, customField, ...rest }) => {
  const customFieldsRegistry = (0,dist/* useCustomFields */.mZ)();
  let Compo = iconByTypes[type];
  if (customField) {
    const { icon } = customFieldsRegistry.get(customField);
    if (icon) {
      Compo = icon;
    }
  }
  if (!iconByTypes[type]) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(IconBox, { height: (0,dist/* pxToRem */.Q1)(24), width: (0,dist/* pxToRem */.Q1)(32), shrink: 0, ...rest, "aria-hidden": true }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { as: Compo }));
};
AttributeIcon.defaultProps = {
  customField: null
};
AttributeIcon.propTypes = {
  type: (prop_types_default()).string.isRequired,
  customField: (prop_types_default()).string
};
/* harmony default export */ const components_AttributeIcon = (AttributeIcon);


/***/ }),

/***/ 25237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ COMPONENT_ICONS)
/* harmony export */ });
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56692);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79131);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53264);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93454);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76827);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53274);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45684);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7559);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31654);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18334);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42108);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(32721);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67224);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20316);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(36974);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8419);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(42190);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3232);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4896);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(64386);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(59082);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(73192);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(98430);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(74002);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(35318);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(70743);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(38724);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(94187);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(70415);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(86463);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(71267);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(61646);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(92518);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(67890);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(95957);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(20184);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(54285);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(7995);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(47241);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(87532);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(16543);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(68285);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(271);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(98264);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(89824);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(89906);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(47278);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(66390);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(57121);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(61287);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(84670);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(56074);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(20302);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(66351);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(59453);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(99001);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(11618);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(36952);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(53723);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(42679);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(64059);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(5368);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(52827);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(31440);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(43582);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(58113);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(47243);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(91561);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(13389);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(43286);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(27645);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(36730);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(42821);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(50862);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(68077);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(88678);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(1628);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(74334);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(64510);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(1267);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(91682);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(30770);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(95096);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(13789);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(26784);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(71387);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(23109);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(38447);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(83761);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(26244);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(64820);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(36938);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(29426);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(72535);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(13317);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(63302);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(50186);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(76715);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(48098);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(70901);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(54763);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(10382);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(60674);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(55353);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(94842);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(27733);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(86874);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(66721);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(10438);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(39142);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(80103);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(89975);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(48577);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(2426);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(68501);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(34389);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(8152);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(1072);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(23333);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(36558);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(19395);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(4452);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(52245);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(27866);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(804);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(30984);

const COMPONENT_ICONS = {
  alien: _strapi_icons__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
  apps: _strapi_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  archive: _strapi_icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
  arrowDown: _strapi_icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
  arrowLeft: _strapi_icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
  arrowRight: _strapi_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
  arrowUp: _strapi_icons__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
  attachment: _strapi_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
  bell: _strapi_icons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
  bold: _strapi_icons__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
  book: _strapi_icons__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
  briefcase: _strapi_icons__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
  brush: _strapi_icons__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
  bulletList: _strapi_icons__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
  calendar: _strapi_icons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
  car: _strapi_icons__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
  cast: _strapi_icons__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
  chartBubble: _strapi_icons__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,
  chartCircle: _strapi_icons__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
  chartPie: _strapi_icons__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,
  check: _strapi_icons__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z,
  clock: _strapi_icons__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z,
  cloud: _strapi_icons__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z,
  code: _strapi_icons__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z,
  cog: _strapi_icons__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z,
  collapse: _strapi_icons__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z,
  command: _strapi_icons__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z,
  connector: _strapi_icons__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z,
  crop: _strapi_icons__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z,
  crown: _strapi_icons__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z,
  cube: _strapi_icons__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z,
  cup: _strapi_icons__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z,
  cursor: _strapi_icons__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z,
  dashboard: _strapi_icons__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z,
  database: _strapi_icons__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z,
  discuss: _strapi_icons__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z,
  doctor: _strapi_icons__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z,
  earth: _strapi_icons__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z,
  emotionHappy: _strapi_icons__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z,
  emotionUnhappy: _strapi_icons__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z,
  envelop: _strapi_icons__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .Z,
  exit: _strapi_icons__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .Z,
  expand: _strapi_icons__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .Z,
  eye: _strapi_icons__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z,
  feather: _strapi_icons__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z,
  file: _strapi_icons__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z,
  fileError: _strapi_icons__WEBPACK_IMPORTED_MODULE_46__/* ["default"] */ .Z,
  filePdf: _strapi_icons__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .Z,
  filter: _strapi_icons__WEBPACK_IMPORTED_MODULE_48__/* ["default"] */ .Z,
  folder: _strapi_icons__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .Z,
  gate: _strapi_icons__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .Z,
  gift: _strapi_icons__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .Z,
  globe: _strapi_icons__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .Z,
  grid: _strapi_icons__WEBPACK_IMPORTED_MODULE_53__/* ["default"] */ .Z,
  handHeart: _strapi_icons__WEBPACK_IMPORTED_MODULE_54__/* ["default"] */ .Z,
  hashtag: _strapi_icons__WEBPACK_IMPORTED_MODULE_55__/* ["default"] */ .Z,
  headphone: _strapi_icons__WEBPACK_IMPORTED_MODULE_56__/* ["default"] */ .Z,
  heart: _strapi_icons__WEBPACK_IMPORTED_MODULE_57__/* ["default"] */ .Z,
  house: _strapi_icons__WEBPACK_IMPORTED_MODULE_58__/* ["default"] */ .Z,
  information: _strapi_icons__WEBPACK_IMPORTED_MODULE_59__/* ["default"] */ .Z,
  italic: _strapi_icons__WEBPACK_IMPORTED_MODULE_60__/* ["default"] */ .Z,
  key: _strapi_icons__WEBPACK_IMPORTED_MODULE_61__/* ["default"] */ .Z,
  landscape: _strapi_icons__WEBPACK_IMPORTED_MODULE_62__/* ["default"] */ .Z,
  layer: _strapi_icons__WEBPACK_IMPORTED_MODULE_63__/* ["default"] */ .Z,
  layout: _strapi_icons__WEBPACK_IMPORTED_MODULE_64__/* ["default"] */ .Z,
  lightbulb: _strapi_icons__WEBPACK_IMPORTED_MODULE_65__/* ["default"] */ .Z,
  link: _strapi_icons__WEBPACK_IMPORTED_MODULE_66__/* ["default"] */ .Z,
  lock: _strapi_icons__WEBPACK_IMPORTED_MODULE_67__/* ["default"] */ .Z,
  magic: _strapi_icons__WEBPACK_IMPORTED_MODULE_68__/* ["default"] */ .Z,
  manyToMany: _strapi_icons__WEBPACK_IMPORTED_MODULE_69__/* ["default"] */ .Z,
  manyToOne: _strapi_icons__WEBPACK_IMPORTED_MODULE_70__/* ["default"] */ .Z,
  manyWays: _strapi_icons__WEBPACK_IMPORTED_MODULE_71__/* ["default"] */ .Z,
  medium: _strapi_icons__WEBPACK_IMPORTED_MODULE_72__/* ["default"] */ .Z,
  message: _strapi_icons__WEBPACK_IMPORTED_MODULE_73__/* ["default"] */ .Z,
  microphone: _strapi_icons__WEBPACK_IMPORTED_MODULE_74__/* ["default"] */ .Z,
  monitor: _strapi_icons__WEBPACK_IMPORTED_MODULE_75__/* ["default"] */ .Z,
  moon: _strapi_icons__WEBPACK_IMPORTED_MODULE_76__/* ["default"] */ .Z,
  music: _strapi_icons__WEBPACK_IMPORTED_MODULE_77__/* ["default"] */ .Z,
  oneToMany: _strapi_icons__WEBPACK_IMPORTED_MODULE_78__/* ["default"] */ .Z,
  oneToOne: _strapi_icons__WEBPACK_IMPORTED_MODULE_79__/* ["default"] */ .Z,
  oneWay: _strapi_icons__WEBPACK_IMPORTED_MODULE_80__/* ["default"] */ .Z,
  paint: _strapi_icons__WEBPACK_IMPORTED_MODULE_81__/* ["default"] */ .Z,
  paintBrush: _strapi_icons__WEBPACK_IMPORTED_MODULE_82__/* ["default"] */ .Z,
  paperPlane: _strapi_icons__WEBPACK_IMPORTED_MODULE_83__/* ["default"] */ .Z,
  pencil: _strapi_icons__WEBPACK_IMPORTED_MODULE_84__/* ["default"] */ .Z,
  phone: _strapi_icons__WEBPACK_IMPORTED_MODULE_85__/* ["default"] */ .Z,
  picture: _strapi_icons__WEBPACK_IMPORTED_MODULE_86__/* ["default"] */ .Z,
  pin: _strapi_icons__WEBPACK_IMPORTED_MODULE_87__/* ["default"] */ .Z,
  pinMap: _strapi_icons__WEBPACK_IMPORTED_MODULE_88__/* ["default"] */ .Z,
  plane: _strapi_icons__WEBPACK_IMPORTED_MODULE_89__/* ["default"] */ .Z,
  play: _strapi_icons__WEBPACK_IMPORTED_MODULE_90__/* ["default"] */ .Z,
  plus: _strapi_icons__WEBPACK_IMPORTED_MODULE_91__/* ["default"] */ .Z,
  priceTag: _strapi_icons__WEBPACK_IMPORTED_MODULE_92__/* ["default"] */ .Z,
  puzzle: _strapi_icons__WEBPACK_IMPORTED_MODULE_93__/* ["default"] */ .Z,
  question: _strapi_icons__WEBPACK_IMPORTED_MODULE_94__/* ["default"] */ .Z,
  quote: _strapi_icons__WEBPACK_IMPORTED_MODULE_95__/* ["default"] */ .Z,
  repeat: _strapi_icons__WEBPACK_IMPORTED_MODULE_96__/* ["default"] */ .Z,
  restaurant: _strapi_icons__WEBPACK_IMPORTED_MODULE_97__/* ["default"] */ .Z,
  rocket: _strapi_icons__WEBPACK_IMPORTED_MODULE_98__/* ["default"] */ .Z,
  rotate: _strapi_icons__WEBPACK_IMPORTED_MODULE_99__/* ["default"] */ .Z,
  scissors: _strapi_icons__WEBPACK_IMPORTED_MODULE_100__/* ["default"] */ .Z,
  search: _strapi_icons__WEBPACK_IMPORTED_MODULE_101__/* ["default"] */ .Z,
  seed: _strapi_icons__WEBPACK_IMPORTED_MODULE_102__/* ["default"] */ .Z,
  server: _strapi_icons__WEBPACK_IMPORTED_MODULE_103__/* ["default"] */ .Z,
  shield: _strapi_icons__WEBPACK_IMPORTED_MODULE_104__/* ["default"] */ .Z,
  shirt: _strapi_icons__WEBPACK_IMPORTED_MODULE_105__/* ["default"] */ .Z,
  shoppingCart: _strapi_icons__WEBPACK_IMPORTED_MODULE_106__/* ["default"] */ .Z,
  slideshow: _strapi_icons__WEBPACK_IMPORTED_MODULE_107__/* ["default"] */ .Z,
  stack: _strapi_icons__WEBPACK_IMPORTED_MODULE_108__/* ["default"] */ .Z,
  star: _strapi_icons__WEBPACK_IMPORTED_MODULE_109__/* ["default"] */ .Z,
  store: _strapi_icons__WEBPACK_IMPORTED_MODULE_110__/* ["default"] */ .Z,
  strikeThrough: _strapi_icons__WEBPACK_IMPORTED_MODULE_111__/* ["default"] */ .Z,
  sun: _strapi_icons__WEBPACK_IMPORTED_MODULE_112__/* ["default"] */ .Z,
  television: _strapi_icons__WEBPACK_IMPORTED_MODULE_113__/* ["default"] */ .Z,
  thumbDown: _strapi_icons__WEBPACK_IMPORTED_MODULE_114__/* ["default"] */ .Z,
  thumbUp: _strapi_icons__WEBPACK_IMPORTED_MODULE_115__/* ["default"] */ .Z,
  train: _strapi_icons__WEBPACK_IMPORTED_MODULE_116__/* ["default"] */ .Z,
  twitter: _strapi_icons__WEBPACK_IMPORTED_MODULE_117__/* ["default"] */ .Z,
  typhoon: _strapi_icons__WEBPACK_IMPORTED_MODULE_118__/* ["default"] */ .Z,
  underline: _strapi_icons__WEBPACK_IMPORTED_MODULE_119__/* ["default"] */ .Z,
  user: _strapi_icons__WEBPACK_IMPORTED_MODULE_120__/* ["default"] */ .Z,
  volumeMute: _strapi_icons__WEBPACK_IMPORTED_MODULE_121__/* ["default"] */ .Z,
  volumeUp: _strapi_icons__WEBPACK_IMPORTED_MODULE_122__/* ["default"] */ .Z,
  walk: _strapi_icons__WEBPACK_IMPORTED_MODULE_123__/* ["default"] */ .Z,
  wheelchair: _strapi_icons__WEBPACK_IMPORTED_MODULE_124__/* ["default"] */ .Z,
  write: _strapi_icons__WEBPACK_IMPORTED_MODULE_125__/* ["default"] */ .Z
};



/***/ }),

/***/ 30248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);

const DataManagerContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataManagerContext);


/***/ }),

/***/ 6356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);

const FormModalNavigationContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormModalNavigationContext);


/***/ }),

/***/ 27523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);
/* harmony import */ var _contexts_DataManagerContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30248);


const useDataManager = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_DataManagerContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDataManager);


/***/ }),

/***/ 47558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);
/* harmony import */ var _contexts_FormModalNavigationContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6356);


const useFormModalNavigation = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_FormModalNavigationContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFormModalNavigation);


/***/ }),

/***/ 37557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.mjs
var Layout = __webpack_require__(27997);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(364);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(51447);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(93415);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextButton/TextButton.mjs
var TextButton = __webpack_require__(1782);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.mjs
var Icon = __webpack_require__(50703);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNav.mjs
var SubNav = __webpack_require__(71877);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavHeader.mjs + 1 modules
var SubNavHeader = __webpack_require__(17912);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSections.mjs
var SubNavSections = __webpack_require__(96220);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSection.mjs + 1 modules
var SubNavSection = __webpack_require__(20534);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74081);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.mjs
var CarretDown = __webpack_require__(10411);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(37652);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/hooks/useId.mjs
var useId = __webpack_require__(74513);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavLinkSection.mjs








const SubNavLinkSectionWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  svg {
    height: ${4 / 16}rem;
    path {
      fill: ${({ theme }) => theme.colors.neutral700};
    }
  }
`;
const SubNavLinkSectionButton = styled_components_browser_esm/* default */.ZP.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`;
const DropDownIconWrapper = styled_components_browser_esm/* default */.ZP.div`
  display: flex;
  align-items: center;
  width: ${12 / 16}rem;
  transform: rotateX(${({ rotated }) => rotated ? "0deg" : "180deg"});
`;
const SubNavLinkSection = ({ label, children, id }) => {
  const [isOpen, setOpenLinks] = (0,react.useState)(true);
  const listId = (0,useId/* useId */.M)(id);
  const handleClick = () => {
    setOpenLinks((prev) => !prev);
  };
  return (0,jsx_runtime.jsxs)(Box/* Box */.x, { children: [(0,jsx_runtime.jsx)(SubNavLinkSectionWrapper, { paddingLeft: 7, paddingTop: 2, paddingBottom: 2, paddingRight: 4, children: (0,jsx_runtime.jsx)(Flex/* Flex */.k, { justifyContent: "space-between", children: (0,jsx_runtime.jsxs)(SubNavLinkSectionButton, { onClick: handleClick, "aria-expanded": isOpen, "aria-controls": listId, children: [(0,jsx_runtime.jsx)(DropDownIconWrapper, { rotated: isOpen, children: (0,jsx_runtime.jsx)(CarretDown/* default */.Z, { "aria-hidden": true }) }), (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 2, children: (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { as: "span", fontWeight: "semiBold", textColor: "neutral800", children: label }) })] }) }) }), isOpen && (0,jsx_runtime.jsx)("ul", { id: listId, children: react.Children.map(children, (child, index) => {
    return (0,jsx_runtime.jsx)("li", { children: child }, index);
  }) })] });
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavLink.mjs
var SubNavLink = __webpack_require__(49370);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.mjs
var Plus = __webpack_require__(36938);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(51943);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(47533);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(90635);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(6078);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/hooks/useDataManager.js
var useDataManager = __webpack_require__(27523);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/hooks/useFormModalNavigation.js
var useFormModalNavigation = __webpack_require__(47558);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/pluginId.js
var pluginId = __webpack_require__(72966);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ContentTypeBuilderNav/useContentTypeBuilderMenu.js








const useContentTypeBuilderMenu = () => {
  const {
    components,
    componentsGroupedByCategory,
    contentTypes,
    isInDevelopmentMode,
    sortedContentTypesList,
    modifiedData,
    initialData
  } = (0,useDataManager/* default */.Z)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const [search, setSearch] = (0,react.useState)("");
  const { onOpenModalCreateSchema, onOpenModalEditCategory } = (0,useFormModalNavigation/* default */.Z)();
  const { locale } = (0,useIntl/* default */.Z)();
  const { startsWith } = (0,dist/* useFilter */.L0)(locale, {
    sensitivity: "base"
  });
  const formatter = (0,dist/* useCollator */.Xe)(locale, {
    sensitivity: "base"
  });
  const canOpenModalCreateCTorComponent = !Object.keys(contentTypes).some((ct) => contentTypes[ct].isTemporary === true) && !Object.keys(components).some((component) => components[component].isTemporary === true) && isEqual_default()(modifiedData, initialData);
  const handleClickOpenModalCreateCollectionType = () => {
    if (canOpenModalCreateCTorComponent) {
      trackUsage(`willCreateContentType`);
      const nextState = {
        modalType: "contentType",
        kind: "collectionType",
        actionType: "create",
        forTarget: "contentType"
      };
      onOpenModalCreateSchema(nextState);
    } else {
      toggleNotificationCannotCreateSchema();
    }
  };
  const handleClickOpenModalCreateSingleType = () => {
    if (canOpenModalCreateCTorComponent) {
      trackUsage(`willCreateSingleType`);
      const nextState = {
        modalType: "contentType",
        kind: "singleType",
        actionType: "create",
        forTarget: "contentType"
      };
      onOpenModalCreateSchema(nextState);
    } else {
      toggleNotificationCannotCreateSchema();
    }
  };
  const handleClickOpenModalCreateComponent = () => {
    if (canOpenModalCreateCTorComponent) {
      trackUsage("willCreateComponent");
      const nextState = {
        modalType: "component",
        kind: null,
        actionType: "create",
        forTarget: "component"
      };
      onOpenModalCreateSchema(nextState);
    } else {
      toggleNotificationCannotCreateSchema();
    }
  };
  const toggleNotificationCannotCreateSchema = () => {
    toggleNotification({
      type: "info",
      message: {
        id: (0,getTrad/* default */.Z)("notification.info.creating.notSaved"),
        defaultMessage: "Please save your work before creating a new collection type or component"
      }
    });
  };
  const componentsData = Object.entries(componentsGroupedByCategory).map(([category, components2]) => ({
    name: category,
    title: category,
    isEditable: isInDevelopmentMode,
    onClickEdit(e, data2) {
      e.stopPropagation();
      if (canOpenModalCreateCTorComponent) {
        onOpenModalEditCategory(data2.name);
      } else {
        toggleNotificationCannotCreateSchema();
      }
    },
    links: components2.map((component) => ({
      name: component.uid,
      to: `/plugins/${pluginId/* default */.Z}/component-categories/${category}/${component.uid}`,
      title: component.schema.displayName
    })).sort((a, b) => formatter.compare(a.title, b.title))
  })).sort((a, b) => formatter.compare(a.title, b.title));
  const displayedContentTypes = sortedContentTypesList.filter((obj) => obj.visible);
  const data = [
    {
      name: "models",
      title: {
        id: `${(0,getTrad/* default */.Z)("menu.section.models.name")}`,
        defaultMessage: "Collection Types"
      },
      customLink: isInDevelopmentMode && {
        id: `${(0,getTrad/* default */.Z)("button.model.create")}`,
        defaultMessage: "Create new collection type",
        onClick: handleClickOpenModalCreateCollectionType
      },
      links: displayedContentTypes.filter((contentType) => contentType.kind === "collectionType")
    },
    {
      name: "singleTypes",
      title: {
        id: `${(0,getTrad/* default */.Z)("menu.section.single-types.name")}`,
        defaultMessage: "Single Types"
      },
      customLink: isInDevelopmentMode && {
        id: `${(0,getTrad/* default */.Z)("button.single-types.create")}`,
        defaultMessage: "Create new single type",
        onClick: handleClickOpenModalCreateSingleType
      },
      links: displayedContentTypes.filter((singleType) => singleType.kind === "singleType")
    },
    {
      name: "components",
      title: {
        id: `${(0,getTrad/* default */.Z)("menu.section.components.name")}`,
        defaultMessage: "Components"
      },
      customLink: isInDevelopmentMode && {
        id: `${(0,getTrad/* default */.Z)("button.component.create")}`,
        defaultMessage: "Create a new component",
        onClick: handleClickOpenModalCreateComponent
      },
      links: componentsData
    }
  ].map((section) => {
    const hasChild = section.links.some((l) => Array.isArray(l.links));
    if (hasChild) {
      return {
        ...section,
        links: section.links.map((link) => {
          const filteredLinks = link.links.filter((link2) => startsWith(link2.title, search));
          if (filteredLinks.length === 0) {
            return null;
          }
          return {
            ...link,
            links: filteredLinks.sort((a, b) => formatter.compare(a.title, b.title))
          };
        }).filter(Boolean)
      };
    }
    return {
      ...section,
      links: section.links.filter((link) => startsWith(link.title, search)).sort((a, b) => formatter.compare(a.title, b.title))
    };
  });
  return {
    menu: data,
    searchValue: search,
    onSearchChange: setSearch
  };
};
/* harmony default export */ const ContentTypeBuilderNav_useContentTypeBuilderMenu = (useContentTypeBuilderMenu);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ContentTypeBuilderNav/index.js










const ContentTypeBuilderNav = () => {
  const { menu, searchValue, onSearchChange } = ContentTypeBuilderNav_useContentTypeBuilderMenu();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(
    SubNav/* SubNav */.m,
    {
      ariaLabel: formatMessage({
        id: `${(0,getTrad/* default */.Z)("plugin.name")}`,
        defaultMessage: "Content-Types Builder"
      })
    },
    /* @__PURE__ */ react.createElement(
      SubNavHeader/* SubNavHeader */.p,
      {
        searchable: true,
        value: searchValue,
        onClear: () => onSearchChange(""),
        onChange: (e) => onSearchChange(e.target.value),
        label: formatMessage({
          id: `${(0,getTrad/* default */.Z)("plugin.name")}`,
          defaultMessage: "Content-Types Builder"
        }),
        searchLabel: formatMessage({
          id: "global.search",
          defaultMessage: "Search"
        })
      }
    ),
    /* @__PURE__ */ react.createElement(SubNavSections/* SubNavSections */.Z, null, menu.map((section) => /* @__PURE__ */ react.createElement(react.Fragment, { key: section.name }, /* @__PURE__ */ react.createElement(
      SubNavSection/* SubNavSection */.D,
      {
        label: formatMessage({
          id: section.title.id,
          defaultMessage: section.title.defaultMessage
        }),
        collapsable: true,
        badgeLabel: section.links.length.toString()
      },
      section.links.map((link) => {
        if (link.links) {
          return /* @__PURE__ */ react.createElement(SubNavLinkSection, { key: link.name, label: upperFirst_default()(link.title) }, link.links.map((subLink) => /* @__PURE__ */ react.createElement(
            SubNavLink/* SubNavLink */.E,
            {
              as: react_router_dom/* NavLink */.OL,
              to: subLink.to,
              active: subLink.active,
              key: subLink.name,
              isSubSectionChild: true
            },
            upperFirst_default()(
              formatMessage({ id: subLink.name, defaultMessage: subLink.title })
            )
          )));
        }
        return /* @__PURE__ */ react.createElement(SubNavLink/* SubNavLink */.E, { as: react_router_dom/* NavLink */.OL, to: link.to, active: link.active, key: link.name }, upperFirst_default()(formatMessage({ id: link.name, defaultMessage: link.title })));
      })
    ), section.customLink && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 7 }, /* @__PURE__ */ react.createElement(
      TextButton/* TextButton */.A,
      {
        onClick: section.customLink.onClick,
        startIcon: /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { as: Plus/* default */.Z, width: (0,dist/* pxToRem */.Q1)(8), height: (0,dist/* pxToRem */.Q1)(8) }),
        marginTop: 2
      },
      formatMessage({
        id: section.customLink.id,
        defaultMessage: section.customLink.defaultMessage
      })
    )))))
  );
};
/* harmony default export */ const components_ContentTypeBuilderNav = (ContentTypeBuilderNav);

// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(98934);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/groupBy.js
var groupBy = __webpack_require__(63799);
var groupBy_default = /*#__PURE__*/__webpack_require__.n(groupBy);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(43433);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
// EXTERNAL MODULE: ./node_modules/lodash/size.js
var size = __webpack_require__(84921);
var size_default = /*#__PURE__*/__webpack_require__.n(size);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70627);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(49402);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(91787);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/contexts/DataManagerContext.js
var DataManagerContext = __webpack_require__(30248);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/makeUnique.js
var makeUnique = __webpack_require__(12670);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Alert/Alert.mjs + 1 modules
var Alert = __webpack_require__(95857);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.mjs
var ModalLayout = __webpack_require__(5938);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.mjs
var ModalBody = __webpack_require__(15244);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabGroup.mjs
var TabGroup = __webpack_require__(69878);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/Tabs.mjs + 1 modules
var Tabs = __webpack_require__(94098);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.mjs
var Divider = __webpack_require__(84366);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabPanels.mjs
var TabPanels = __webpack_require__(61908);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.mjs
var ModalFooter = __webpack_require__(35250);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48102);
// EXTERNAL MODULE: ./node_modules/lodash/has.js
var has = __webpack_require__(10131);
var has_default = /*#__PURE__*/__webpack_require__.n(has);
// EXTERNAL MODULE: ./node_modules/lodash/toLower.js
var toLower = __webpack_require__(79146);
var toLower_default = /*#__PURE__*/__webpack_require__.n(toLower);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/isAllowedContentTypesForRelations.js
const isAllowedContentTypesForRelations = (contentType) => {
  return contentType.kind === "collectionType" && (contentType.restrictRelationsTo === null || Array.isArray(contentType.restrictRelationsTo) && contentType.restrictRelationsTo.length > 0);
};
/* harmony default export */ const utils_isAllowedContentTypesForRelations = (isAllowedContentTypesForRelations);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/index.js



;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/findAttribute.js
const findAttribute = (attributes, attributeToFind) => {
  return attributes.find(({ name }) => name === attributeToFind);
};
/* harmony default export */ const utils_findAttribute = (findAttribute);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/MultiSelectNested.mjs
var MultiSelectNested = __webpack_require__(61181);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AllowedTypesSelect/index.js





const options = [
  {
    label: "All",
    children: [
      { label: "images (JPEG, PNG, GIF, SVG, TIFF, ICO, DVU)", value: "images" },
      { label: "videos (MPEG, MP4, Quicktime, WMV, AVI, FLV)", value: "videos" },
      { label: "audios (MP3, WAV, OGG)", value: "audios" },
      { label: "files (CSV, ZIP, PDF, Excel, JSON, ...)", value: "files" }
    ]
  }
];
const AllowedTypesSelect = ({ intlLabel, name, onChange, value }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const displayedValue = value === null || value.length === 0 ? formatMessage({ id: "global.none", defaultMessage: "None" }) : [...value].sort().map((v) => upperFirst_default()(v)).join(", ");
  const label = intlLabel.id ? formatMessage({ id: intlLabel.id, defaultMessage: intlLabel.defaultMessage }) : name;
  return /* @__PURE__ */ react.createElement(
    MultiSelectNested/* MultiSelectNested */.Q,
    {
      id: "select1",
      label,
      customizeContent: () => displayedValue,
      onChange: (values) => {
        if (values.length > 0) {
          onChange({ target: { name, value: values, type: "allowed-types-select" } });
        } else {
          onChange({ target: { name, value: null, type: "allowed-types-select" } });
        }
      },
      options,
      value: value || []
    }
  );
};
AllowedTypesSelect.defaultProps = {
  value: null
};
AllowedTypesSelect.propTypes = {
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).array])
};
/* harmony default export */ const components_AllowedTypesSelect = (AllowedTypesSelect);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/KeyboardNavigable/KeyboardNavigable.mjs
var KeyboardNavigable = __webpack_require__(1099);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(23298);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(74577);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeIcon/index.js + 5 modules
var AttributeIcon = __webpack_require__(12395);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/OptionBoxWrapper/index.js


const BoxWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  text-align: left;
  &:hover {
    background: ${({ theme }) => theme.colors.primary100};
    border: 1px solid ${({ theme }) => theme.colors.primary200};
  }
`;
/* harmony default export */ const OptionBoxWrapper = (BoxWrapper);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/AttributeOption/index.js









const BetaTag = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  background-color: ${({ theme }) => theme.colors.secondary100};
  border: ${({ theme }) => `1px solid ${theme.colors.secondary200}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  padding: ${({ theme }) => `${2 / 16}rem ${theme.spaces[1]}`};
`;
const AttributeOption = ({ type }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { onClickSelectField } = (0,useFormModalNavigation/* default */.Z)();
  const handleClick = () => {
    const step = type === "component" ? "1" : null;
    onClickSelectField({
      attributeType: type,
      step
    });
  };
  return /* @__PURE__ */ react.createElement(OptionBoxWrapper, { padding: 4, as: "button", hasRadius: true, type: "button", onClick: handleClick }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(AttributeIcon/* default */.Z, { type }), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 4, width: "100%" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold" }, formatMessage({ id: (0,getTrad/* default */.Z)(`attribute.${type}`), defaultMessage: type })), type === "blocks" && /* @__PURE__ */ react.createElement(BetaTag, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "secondary600", variant: "sigma" }, "BETA"))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600" }, formatMessage({
    id: (0,getTrad/* default */.Z)(`attribute.${type}.description`),
    defaultMessage: "A type for modeling data"
  }))))));
};
AttributeOption.defaultProps = {
  type: "text"
};
AttributeOption.propTypes = {
  type: (prop_types_default()).string
};
/* harmony default export */ const AttributeOptions_AttributeOption = (AttributeOption);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/utils/getPadding.js
const getPadding = (index) => {
  const isOdd = index % 2 === 1;
  const paddingLeft = isOdd ? 2 : 0;
  const paddingRight = isOdd ? 0 : 2;
  return { paddingLeft, paddingRight };
};
/* harmony default export */ const utils_getPadding = (getPadding);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/AttributeList/index.js





const AttributeList = ({ attributes }) => /* @__PURE__ */ react.createElement(KeyboardNavigable/* KeyboardNavigable */.k, { tagName: "button" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 8 }, attributes.map((attributeRow, index) => {
  return (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { key: index, gap: 0 }, attributeRow.map((attribute, index2) => {
      const { paddingLeft, paddingRight } = utils_getPadding(index2);
      return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { key: attribute, col: 6 }, /* @__PURE__ */ react.createElement(
        Box/* Box */.x,
        {
          paddingLeft,
          paddingRight,
          paddingBottom: 1,
          style: { height: "100%" }
        },
        /* @__PURE__ */ react.createElement(AttributeOptions_AttributeOption, { type: attribute })
      ));
    }))
  );
})));
AttributeList.propTypes = {
  attributes: (prop_types_default()).array.isRequired
};
/* harmony default export */ const AttributeOptions_AttributeList = (AttributeList);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Link/Link.mjs
var Link = __webpack_require__(68412);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/CustomFieldOption/index.js







const CustomFieldOption = ({ customFieldUid, customField }) => {
  const { type, intlLabel, intlDescription } = customField;
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { onClickSelectCustomField } = (0,useFormModalNavigation/* default */.Z)();
  const handleClick = () => {
    onClickSelectCustomField({
      attributeType: type,
      customFieldUid
    });
  };
  return /* @__PURE__ */ react.createElement(OptionBoxWrapper, { padding: 4, as: "button", hasRadius: true, type: "button", onClick: handleClick }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(AttributeIcon/* default */.Z, { type, customField: customFieldUid }), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold" }, formatMessage(intlLabel))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600" }, formatMessage(intlDescription))))));
};
CustomFieldOption.propTypes = {
  customFieldUid: (prop_types_default()).string.isRequired,
  customField: prop_types_default().shape({
    type: (prop_types_default()).string.isRequired,
    icon: (prop_types_default()).func,
    intlLabel: prop_types_default().shape({
      id: (prop_types_default()).string.isRequired,
      defaultMessage: (prop_types_default()).string.isRequired
    }).isRequired,
    intlDescription: prop_types_default().shape({
      id: (prop_types_default()).string.isRequired,
      defaultMessage: (prop_types_default()).string.isRequired
    }).isRequired
  }).isRequired
};
/* harmony default export */ const AttributeOptions_CustomFieldOption = (CustomFieldOption);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/utils.mjs
var utils = __webpack_require__(62629);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseButton/BaseButton.mjs
var BaseButton = __webpack_require__(8976);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/LinkButton/LinkButton.mjs








const LinkWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,BaseButton/* BaseButtonWrapper */.G))`
  &[aria-disabled='true'] {
    ${utils/* getDisabledStyle */.sg}
    &:active {
      ${utils/* getDisabledStyle */.sg}
    }
  }
  &:hover {
    ${utils/* getHoverStyle */.yP}
  }
  &:active {
    ${utils/* getActiveStyle */.tB}
  }
  ${utils/* getVariantStyle */.PD}
`;
const LinkButton = react.forwardRef(({ variant = "default", startIcon, endIcon, disabled = false, children, size = "S", href, to, ...props }, ref) => {
  const target = href ? "_blank" : void 0;
  const rel = href ? "noreferrer noopener" : void 0;
  const paddingX = size === "S" ? 2 : "10px";
  const paddingY = 4;
  return (0,jsx_runtime.jsxs)(LinkWrapper, { ref, "aria-disabled": disabled, size, variant, target, rel, to: disabled ? void 0 : to, href: disabled ? "#" : href, background: "buttonPrimary600", borderColor: "buttonPrimary600", hasRadius: true, gap: 2, inline: true, paddingBottom: paddingX, paddingLeft: paddingY, paddingRight: paddingY, paddingTop: paddingX, pointerEvents: disabled ? "none" : void 0, ...props, as: to && !disabled ? react_router_dom/* NavLink */.OL : "a", children: [startIcon && (0,jsx_runtime.jsx)(Flex/* Flex */.k, { "aria-hidden": true, children: startIcon }), (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: size === "S" ? "pi" : void 0, fontWeight: "bold", textColor: "buttonNeutral0", children }), endIcon && (0,jsx_runtime.jsx)(Flex/* Flex */.k, { "aria-hidden": true, children: endIcon })] });
});


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyDocuments.mjs
var EmptyDocuments = __webpack_require__(52448);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(29206);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/EmptyAttributes/index.js







const EmptyCard = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  background: ${({ theme }) => `linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${theme.colors.neutral150} 100%)`};
  opacity: 0.33;
`;
const EmptyCardGrid = () => {
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { wrap: "wrap", gap: 4 }, [...Array(4)].map((_, idx) => {
    return /* @__PURE__ */ react.createElement(
      EmptyCard,
      {
        key: `empty-card-${idx}`,
        height: "138px",
        width: "375px",
        hasRadius: true
      }
    );
  }));
};
const EmptyAttributes = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { position: "relative" }, /* @__PURE__ */ react.createElement(EmptyCardGrid, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, { position: "absolute", top: 6, width: "100%" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "center", justifyContent: "center", direction: "column" }, /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { as: EmptyDocuments/* default */.Z, color: "", width: "160px", height: "88px" }), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 6, paddingBottom: 4 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { textAlign: "center" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "p", textColor: "neutral600" }, formatMessage({
    id: (0,getTrad/* default */.Z)("modalForm.empty.heading"),
    defaultMessage: "Nothing in here yet."
  })), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "p", textColor: "neutral600" }, formatMessage({
    id: (0,getTrad/* default */.Z)("modalForm.empty.sub-heading"),
    defaultMessage: "Find what you are looking for through a wide range of extensions."
  }))))), /* @__PURE__ */ react.createElement(
    LinkButton,
    {
      to: `/marketplace?${lib_default().stringify({ categories: ["Custom fields"] })}`,
      variant: "secondary",
      startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null)
    },
    formatMessage({
      id: (0,getTrad/* default */.Z)("modalForm.empty.button"),
      defaultMessage: "Add custom fields"
    })
  ))));
};
/* harmony default export */ const AttributeOptions_EmptyAttributes = (EmptyAttributes);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/CustomFieldsList/index.js








const CustomFieldsList = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const customFields = (0,dist/* useCustomFields */.mZ)();
  const registeredCustomFields = Object.entries(customFields.getAll());
  if (!registeredCustomFields.length) {
    return /* @__PURE__ */ react.createElement(AttributeOptions_EmptyAttributes, null);
  }
  const sortedCustomFields = registeredCustomFields.sort(
    (a, b) => a[1].name > b[1].name ? 1 : -1
  );
  return /* @__PURE__ */ react.createElement(KeyboardNavigable/* KeyboardNavigable */.k, { tagName: "button" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 3 }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 0 }, sortedCustomFields.map(([uid, customField], index) => {
    const { paddingLeft, paddingRight } = utils_getPadding(index);
    return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { key: uid, col: 6, style: { height: "100%" } }, /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        paddingLeft,
        paddingRight,
        paddingBottom: 1,
        style: { height: "100%" }
      },
      /* @__PURE__ */ react.createElement(AttributeOptions_CustomFieldOption, { key: uid, customFieldUid: uid, customField })
    ));
  })), /* @__PURE__ */ react.createElement(
    Link/* Link */.r,
    {
      href: "https://docs.strapi.io/developer-docs/latest/development/custom-fields.html",
      isExternal: true
    },
    formatMessage({
      id: (0,getTrad/* default */.Z)("modalForm.tabs.custom.howToLink"),
      defaultMessage: "How to add custom fields"
    })
  )));
};
/* harmony default export */ const AttributeOptions_CustomFieldsList = (CustomFieldsList);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/index.js







const AttributeOptions = ({ attributes, forTarget, kind }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const defaultTabId = (0,getTrad/* default */.Z)("modalForm.tabs.default");
  const customTabId = (0,getTrad/* default */.Z)("modalForm.tabs.custom");
  const titleIdSuffix = forTarget.includes("component") ? "component" : kind;
  const titleId = (0,getTrad/* default */.Z)(`modalForm.sub-header.chooseAttribute.${titleIdSuffix}`);
  return /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, { padding: 6 }, /* @__PURE__ */ react.createElement(
    TabGroup/* TabGroup */.v,
    {
      label: formatMessage({
        id: (0,getTrad/* default */.Z)("modalForm.tabs.label"),
        defaultMessage: "Default and Custom types tabs"
      }),
      id: "attribute-type-tabs",
      variant: "simple"
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "beta", as: "h2" }, formatMessage({ id: titleId, defaultMessage: "Select a field" })), /* @__PURE__ */ react.createElement(Tabs/* Tabs */.m, null, /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, formatMessage({ id: defaultTabId, defaultMessage: "Default" })), /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, formatMessage({ id: customTabId, defaultMessage: "Custom" })))),
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 6 }, /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null)),
    /* @__PURE__ */ react.createElement(TabPanels/* TabPanels */.n, null, /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(AttributeOptions_AttributeList, { attributes })), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(AttributeOptions_CustomFieldsList, null)))
  ));
};
AttributeOptions.propTypes = {
  attributes: (prop_types_default()).array.isRequired,
  forTarget: (prop_types_default()).string.isRequired,
  kind: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_AttributeOptions = (AttributeOptions);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.mjs
var Select = __webpack_require__(5627);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.mjs
var Option = __webpack_require__(78955);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/BooleanDefaultValueSelect/index.js




const BooleanDefaultValueSelect = ({ intlLabel, name, options, onChange, value }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const label = intlLabel.id ? formatMessage(
    { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
    { ...intlLabel.values }
  ) : name;
  const handleChange = (value2) => {
    let nextValue = "";
    if (value2 === "true") {
      nextValue = true;
    }
    if (value2 === "false") {
      nextValue = false;
    }
    onChange({ target: { name, value: nextValue, type: "select-default-boolean" } });
  };
  return /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      label,
      id: name,
      name,
      onChange: handleChange,
      value: (value === null ? "" : value).toString()
    },
    options.map(({ metadatas: { intlLabel: intlLabel2, disabled, hidden }, key, value: value2 }) => {
      return /* @__PURE__ */ react.createElement(Option/* Option */.W, { key, value: value2, disabled, hidden }, intlLabel2.defaultMessage);
    })
  );
};
BooleanDefaultValueSelect.defaultProps = {
  value: null
};
BooleanDefaultValueSelect.propTypes = {
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  options: prop_types_default().arrayOf(
    prop_types_default().shape({
      metadatas: prop_types_default().shape({
        intlLabel: prop_types_default().shape({
          id: (prop_types_default()).string.isRequired,
          defaultMessage: (prop_types_default()).string.isRequired
        }).isRequired,
        disabled: (prop_types_default()).bool,
        hidden: (prop_types_default()).bool
      }).isRequired,
      key: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
      value: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
    }).isRequired
  ).isRequired,
  value: (prop_types_default()).any
};
/* harmony default export */ const components_BooleanDefaultValueSelect = (BooleanDefaultValueSelect);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/themes/utils.mjs
var themes_utils = __webpack_require__(61657);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/CustomRadioGroup/components.js


const Wrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  position: relative;
  align-items: stretch;

  label {
    border-radius: 4px;
    max-width: 50%;
    cursor: pointer;
    user-select: none;
    flex: 1;
    ${(0,themes_utils/* inputFocusStyle */.k3)()}
  }

  input {
    position: absolute;
    opacity: 0;
  }

  .option {
    height: 100%;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.neutral200};
    will-change: transform, opacity;
    background: ${({ theme }) => theme.colors.neutral0};

    .checkmark {
      position: relative;
      display: block;
      will-change: transform;
      background: ${({ theme }) => theme.colors.neutral0};
      width: ${({ theme }) => theme.spaces[5]};
      height: ${({ theme }) => theme.spaces[5]};
      border: solid 1px ${({ theme }) => theme.colors.neutral300};
      border-radius: 50%;

      &:before,
      &:after {
        content: '';
        display: block;
        border-radius: 50%;
        width: ${({ theme }) => theme.spaces[3]};
        height: ${({ theme }) => theme.spaces[3]};
        position: absolute;
        top: 3px;
        left: 3px;
      }

      &:after {
        transform: scale(0);
        transition: inherit;
        will-change: transform;
      }
    }
  }

  .container input:checked ~ div {
    background: ${({ theme }) => theme.colors.primary100};
    ${Typography/* Typography */.Z} {
      color: ${({ theme }) => theme.colors.primary600};
    }
    border: 1px solid ${({ theme }) => theme.colors.primary200};
    .checkmark {
      border: solid 1px ${({ theme }) => theme.colors.primary600};
      &::after {
        background: ${({ theme }) => theme.colors.primary600};
        transform: scale(1);
      }
    }
  }
`;


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/CustomRadioGroup/index.js





const CustomRadioGroup = ({ intlLabel, name, onChange, radios, value }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold", textColor: "neutral800", htmlFor: name, as: "label" }, formatMessage(intlLabel)), /* @__PURE__ */ react.createElement(Wrapper, { gap: 4, alignItems: "stretch" }, radios.map((radio) => {
    return /* @__PURE__ */ react.createElement("label", { htmlFor: radio.value.toString(), key: radio.value, className: "container" }, /* @__PURE__ */ react.createElement(
      "input",
      {
        id: radio.value.toString(),
        name,
        className: "option-input",
        checked: radio.value === value,
        value: radio.value,
        key: radio.value,
        onChange,
        type: "radio"
      }
    ), /* @__PURE__ */ react.createElement(Box/* Box */.x, { className: "option", padding: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 4 }, /* @__PURE__ */ react.createElement("span", { className: "checkmark" })), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold" }, formatMessage(radio.title)), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600" }, formatMessage(radio.description))))));
  })));
};
CustomRadioGroup.defaultProps = {
  radios: []
};
CustomRadioGroup.propTypes = {
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  radios: prop_types_default().arrayOf(
    prop_types_default().shape({
      title: prop_types_default().shape({
        id: (prop_types_default()).string.isRequired,
        defaultMessage: (prop_types_default()).string.isRequired
      }),
      description: prop_types_default().shape({
        id: (prop_types_default()).string.isRequired,
        defaultMessage: (prop_types_default()).string.isRequired
      }),
      value: (prop_types_default()).any.isRequired
    })
  ),
  value: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).bool]).isRequired
};
/* harmony default export */ const components_CustomRadioGroup = (CustomRadioGroup);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/BooleanRadioGroup/index.js



const BooleanRadioGroup = ({ onChange, name, ...rest }) => {
  const handleChange = (e) => {
    const checked = e.target.value !== "false";
    onChange({ target: { name, value: checked, type: "boolean-radio-group" } });
  };
  return /* @__PURE__ */ react.createElement(components_CustomRadioGroup, { ...rest, name, onChange: handleChange });
};
BooleanRadioGroup.propTypes = {
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_BooleanRadioGroup = (BooleanRadioGroup);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Checkbox/Checkbox.mjs
var Checkbox = __webpack_require__(22572);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.mjs
var TextInput = __webpack_require__(12881);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/NumberInput/NumberInput.mjs + 1 modules
var NumberInput = __webpack_require__(98903);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/CheckboxWithNumberField/index.js




const CheckboxWithNumberField = ({ error, intlLabel, modifiedData, name, onChange, value }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [showInput, setShowInput] = (0,react.useState)(!!value || value === 0);
  const label = intlLabel.id ? formatMessage(
    { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
    { ...intlLabel.values }
  ) : name;
  const type = modifiedData.type === "biginteger" ? "text" : "number";
  const disabled = !modifiedData.type;
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(
    Checkbox/* Checkbox */.X,
    {
      id: name,
      name,
      onValueChange: (value2) => {
        const initValue = type === "text" ? "0" : 0;
        const nextValue = value2 ? initValue : null;
        onChange({ target: { name, value: nextValue } });
        setShowInput((prev) => !prev);
      },
      value: showInput
    },
    label
  ), showInput && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 6, style: { maxWidth: "200px" } }, type === "text" ? /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      "aria-label": label,
      disabled,
      error: errorMessage,
      id: name,
      name,
      onChange,
      value: value === null ? "" : value
    }
  ) : /* @__PURE__ */ react.createElement(
    NumberInput/* NumberInput */.Y,
    {
      "aria-label": label,
      disabled,
      error: errorMessage,
      id: name,
      name,
      onValueChange: (value2) => {
        onChange({ target: { name, value: value2, type } });
      },
      value: value || 0
    }
  )));
};
CheckboxWithNumberField.defaultProps = {
  error: null,
  value: null
};
CheckboxWithNumberField.propTypes = {
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: prop_types_default().oneOfType([
    (prop_types_default()).string,
    (prop_types_default()).object,
    (prop_types_default()).bool,
    (prop_types_default()).number
  ])
};
/* harmony default export */ const components_CheckboxWithNumberField = (CheckboxWithNumberField);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ContentTypeRadioGroup/index.js





const ContentTypeRadioGroup = ({ onChange, ...rest }) => {
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const handleChange = (e) => {
    toggleNotification({
      type: "info",
      message: {
        id: (0,getTrad/* default */.Z)("contentType.kind.change.warning"),
        defaultMessage: "You just changed the kind of a content type: API will be reset (routes, controllers, and services will be overwritten)."
      }
    });
    onChange(e);
  };
  return /* @__PURE__ */ react.createElement(components_CustomRadioGroup, { ...rest, onChange: handleChange });
};
ContentTypeRadioGroup.propTypes = {
  onChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ContentTypeRadioGroup = (ContentTypeRadioGroup);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DraftAndPublishToggle/index.js






const DraftAndPublishToggle = ({
  description,
  disabled,
  intlLabel,
  isCreating,
  name,
  onChange,
  value
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [showWarning, setShowWarning] = (0,react.useState)(false);
  const label = intlLabel.id ? formatMessage(
    { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
    { ...intlLabel.values }
  ) : name;
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    { ...description.values }
  ) : "";
  const handleToggle = () => setShowWarning((prev) => !prev);
  const handleConfirm = () => {
    onChange({ target: { name, value: false } });
    handleToggle();
  };
  const handleChange = ({ target: { checked } }) => {
    if (!checked && !isCreating) {
      handleToggle();
      return;
    }
    onChange({ target: { name, value: checked } });
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Checkbox/* Checkbox */.X, { checked: value, disabled, hint, name, onChange: handleChange }, label), /* @__PURE__ */ react.createElement(
    dist/* ConfirmDialog */.QH,
    {
      isOpen: showWarning,
      onToggleDialog: handleToggle,
      onConfirm: handleConfirm,
      bodyText: {
        id: (0,getTrad/* default */.Z)("popUpWarning.draft-publish.message"),
        defaultMessage: "If you disable the draft & publish, your drafts will be deleted."
      },
      leftButtonText: {
        id: "components.popUpWarning.button.cancel",
        defaultMessage: "No, cancel"
      },
      rightButtonText: {
        id: (0,getTrad/* default */.Z)("popUpWarning.draft-publish.button.confirm"),
        defaultMessage: "Yes, disable"
      }
    }
  ));
};
DraftAndPublishToggle.defaultProps = {
  description: null,
  disabled: false,
  value: false
};
DraftAndPublishToggle.propTypes = {
  description: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  disabled: (prop_types_default()).bool,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  isCreating: (prop_types_default()).bool.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).bool
};
/* harmony default export */ const components_DraftAndPublishToggle = (DraftAndPublishToggle);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModalEndActions/index.js






const FormModalEndActions = ({
  categoryName,
  deleteCategory,
  deleteComponent,
  deleteContentType,
  isAttributeModal,
  isCustomFieldModal,
  isComponentAttribute,
  isComponentToDzModal,
  isContentTypeModal,
  isCreatingComponent,
  isCreatingComponentAttribute,
  isCreatingComponentInDz,
  isCreatingComponentWhileAddingAField,
  isCreatingContentType,
  isCreatingDz,
  isComponentModal,
  isDzAttribute,
  isEditingAttribute,
  isEditingCategory,
  isInFirstComponentStep,
  onSubmitAddComponentAttribute,
  onSubmitAddComponentToDz,
  onSubmitCreateContentType,
  onSubmitCreateComponent,
  onSubmitCreateDz,
  onSubmitEditAttribute,
  onSubmitEditCategory,
  onSubmitEditComponent,
  onSubmitEditContentType,
  onSubmitEditCustomFieldAttribute,
  onSubmitEditDz,
  onClickFinish
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  if (isComponentToDzModal) {
    if (isCreatingComponentInDz) {
      return /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          variant: "secondary",
          type: "submit",
          onClick: (e) => {
            e.preventDefault();
            onSubmitAddComponentToDz(e, true);
          },
          startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null)
        },
        formatMessage({
          id: (0,getTrad/* default */.Z)("form.button.add-first-field-to-created-component"),
          defaultMessage: "Add first field to the component"
        })
      );
    }
    return /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        variant: "default",
        type: "submit",
        onClick: (e) => {
          e.preventDefault();
          onSubmitAddComponentToDz(e, false);
        }
      },
      formatMessage({
        id: "global.finish",
        defaultMessage: "Finish"
      })
    );
  }
  if (isAttributeModal && isDzAttribute && !isCreatingDz) {
    return /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        variant: "default",
        type: "submit",
        onClick: (e) => {
          e.preventDefault();
          onClickFinish();
          onSubmitEditDz(e, false);
        }
      },
      formatMessage({
        id: "global.finish",
        defaultMessage: "Finish"
      })
    );
  }
  if (isAttributeModal && isDzAttribute && isCreatingDz) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        variant: "secondary",
        type: "submit",
        onClick: (e) => {
          e.preventDefault();
          onSubmitCreateDz(e, true);
        },
        startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null)
      },
      formatMessage({
        id: (0,getTrad/* default */.Z)("form.button.add-components-to-dynamiczone"),
        defaultMessage: "Add components to the zone"
      })
    ));
  }
  if (isAttributeModal && isComponentAttribute) {
    if (isInFirstComponentStep) {
      return /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          variant: "secondary",
          type: "submit",
          onClick: (e) => {
            e.preventDefault();
            onSubmitAddComponentAttribute(e, true);
          }
        },
        isCreatingComponentAttribute ? formatMessage({
          id: (0,getTrad/* default */.Z)("form.button.configure-component"),
          defaultMessage: "Configure the component"
        }) : formatMessage({
          id: (0,getTrad/* default */.Z)("form.button.select-component"),
          defaultMessage: "Configure the component"
        })
      );
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        variant: "secondary",
        type: "submit",
        onClick: (e) => {
          e.preventDefault();
          onSubmitAddComponentAttribute(e, true);
        },
        startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null)
      },
      isCreatingComponentWhileAddingAField ? formatMessage({
        id: (0,getTrad/* default */.Z)("form.button.add-first-field-to-created-component"),
        defaultMessage: "Add first field to the component"
      }) : formatMessage({
        id: (0,getTrad/* default */.Z)("form.button.add-field"),
        defaultMessage: "Add another field"
      })
    ), /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        variant: "default",
        type: "button",
        onClick: (e) => {
          e.preventDefault();
          onClickFinish();
          onSubmitAddComponentAttribute(e, false);
        }
      },
      formatMessage({
        id: "global.finish",
        defaultMessage: "Finish"
      })
    ));
  }
  if (isAttributeModal && !isComponentAttribute && !isDzAttribute) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: isEditingAttribute ? "button" : "submit",
        variant: "secondary",
        onClick: (e) => {
          e.preventDefault();
          onSubmitEditAttribute(e, true);
        },
        startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null)
      },
      formatMessage({
        id: (0,getTrad/* default */.Z)("form.button.add-field"),
        defaultMessage: "Add another field"
      })
    ), /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: isEditingAttribute ? "submit" : "button",
        variant: "default",
        onClick: (e) => {
          e.preventDefault();
          onClickFinish();
          onSubmitEditAttribute(e, false);
        }
      },
      formatMessage({
        id: "global.finish",
        defaultMessage: "Finish"
      })
    ));
  }
  if (isContentTypeModal) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, !isCreatingContentType && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: "button",
        variant: "danger",
        onClick: (e) => {
          e.preventDefault();
          deleteContentType();
        }
      },
      formatMessage({
        id: "global.delete",
        defaultMessage: "Delete"
      })
    ), /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: "submit",
        variant: "default",
        onClick: (e) => {
          e.preventDefault();
          onSubmitEditContentType(e, false);
        }
      },
      formatMessage({
        id: "global.finish",
        defaultMessage: "Finish"
      })
    )), isCreatingContentType && /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: "submit",
        variant: "secondary",
        onClick: (e) => {
          e.preventDefault();
          onSubmitCreateContentType(e, true);
        }
      },
      formatMessage({
        id: "global.continue",
        defaultMessage: "Continue"
      })
    ));
  }
  if (isComponentModal) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, !isCreatingComponent && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: "button",
        variant: "danger",
        onClick: (e) => {
          e.preventDefault();
          deleteComponent();
        }
      },
      formatMessage({
        id: "global.delete",
        defaultMessage: "Delete"
      })
    ), /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: "submit",
        variant: "default",
        onClick: (e) => {
          e.preventDefault();
          onSubmitEditComponent(e, false);
        }
      },
      formatMessage({
        id: "global.finish",
        defaultMessage: "Finish"
      })
    )), isCreatingComponent && /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: "submit",
        variant: "secondary",
        onClick: (e) => {
          e.preventDefault();
          onSubmitCreateComponent(e, true);
        }
      },
      formatMessage({
        id: "global.continue",
        defaultMessage: "Continue"
      })
    ));
  }
  if (isEditingCategory) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: "button",
        variant: "danger",
        onClick: (e) => {
          e.preventDefault();
          deleteCategory(categoryName);
        }
      },
      formatMessage({
        id: "global.delete",
        defaultMessage: "Delete"
      })
    ), /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: "submit",
        variant: "default",
        onClick: (e) => {
          e.preventDefault();
          onSubmitEditCategory(e);
        }
      },
      formatMessage({
        id: "global.finish",
        defaultMessage: "finish"
      })
    ));
  }
  if (isCustomFieldModal) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: isEditingAttribute ? "button" : "submit",
        variant: "secondary",
        onClick: (e) => {
          e.preventDefault();
          onSubmitEditCustomFieldAttribute(e, true);
        },
        startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null)
      },
      formatMessage({
        id: (0,getTrad/* default */.Z)("form.button.add-field"),
        defaultMessage: "Add another field"
      })
    ), /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        type: isEditingAttribute ? "submit" : "button",
        variant: "default",
        onClick: (e) => {
          e.preventDefault();
          onClickFinish();
          onSubmitEditCustomFieldAttribute(e, false);
        }
      },
      formatMessage({
        id: "global.finish",
        defaultMessage: "Finish"
      })
    ));
  }
  return null;
};
FormModalEndActions.defaultProps = {
  categoryName: null,
  onClickFinish() {
  }
};
FormModalEndActions.propTypes = {
  categoryName: (prop_types_default()).string,
  deleteCategory: (prop_types_default()).func.isRequired,
  deleteComponent: (prop_types_default()).func.isRequired,
  deleteContentType: (prop_types_default()).func.isRequired,
  isAttributeModal: (prop_types_default()).bool.isRequired,
  isCustomFieldModal: (prop_types_default()).bool.isRequired,
  isComponentAttribute: (prop_types_default()).bool.isRequired,
  isComponentModal: (prop_types_default()).bool.isRequired,
  isComponentToDzModal: (prop_types_default()).bool.isRequired,
  isContentTypeModal: (prop_types_default()).bool.isRequired,
  isCreatingComponent: (prop_types_default()).bool.isRequired,
  isCreatingComponentAttribute: (prop_types_default()).bool.isRequired,
  isCreatingComponentInDz: (prop_types_default()).bool.isRequired,
  isCreatingComponentWhileAddingAField: (prop_types_default()).bool.isRequired,
  isCreatingContentType: (prop_types_default()).bool.isRequired,
  isCreatingDz: (prop_types_default()).bool.isRequired,
  isDzAttribute: (prop_types_default()).bool.isRequired,
  isEditingAttribute: (prop_types_default()).bool.isRequired,
  isEditingCategory: (prop_types_default()).bool.isRequired,
  isInFirstComponentStep: (prop_types_default()).bool.isRequired,
  onSubmitAddComponentAttribute: (prop_types_default()).func.isRequired,
  onSubmitAddComponentToDz: (prop_types_default()).func.isRequired,
  onSubmitCreateContentType: (prop_types_default()).func.isRequired,
  onSubmitCreateComponent: (prop_types_default()).func.isRequired,
  onSubmitCreateDz: (prop_types_default()).func.isRequired,
  onSubmitEditAttribute: (prop_types_default()).func.isRequired,
  onSubmitEditCategory: (prop_types_default()).func.isRequired,
  onSubmitEditComponent: (prop_types_default()).func.isRequired,
  onSubmitEditContentType: (prop_types_default()).func.isRequired,
  onSubmitEditCustomFieldAttribute: (prop_types_default()).func.isRequired,
  onSubmitEditDz: (prop_types_default()).func.isRequired,
  onClickFinish: (prop_types_default()).func
};
/* harmony default export */ const components_FormModalEndActions = (FormModalEndActions);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.mjs
var ModalHeader = __webpack_require__(6918);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Breadcrumbs/Breadcrumbs.mjs + 1 modules
var Breadcrumbs = __webpack_require__(89486);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Breadcrumbs/Crumb.mjs
var Crumb = __webpack_require__(82298);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.mjs
var ArrowLeft = __webpack_require__(76827);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModalHeader/index.js












const FormModalHeader = ({
  actionType,
  attributeName,
  attributeType,
  categoryName,
  contentTypeKind,
  dynamicZoneTarget,
  forTarget,
  modalType,
  targetUid,
  customFieldUid,
  showBackLink
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { modifiedData } = (0,useDataManager/* default */.Z)();
  const { onOpenModalAddField } = (0,useFormModalNavigation/* default */.Z)();
  let icon;
  let headers = [];
  const schema = modifiedData?.[forTarget]?.[targetUid] || modifiedData?.[forTarget] || null;
  let displayName = schema?.schema.displayName;
  if (modalType === "contentType") {
    icon = contentTypeKind;
  }
  if (["component", "editCategory"].includes(modalType)) {
    icon = "component";
  }
  const isCreatingMainSchema = ["component", "contentType"].includes(modalType);
  if (isCreatingMainSchema) {
    let headerId = (0,getTrad/* default */.Z)(`modalForm.component.header-${actionType}`);
    if (modalType === "contentType") {
      headerId = (0,getTrad/* default */.Z)(`modalForm.${contentTypeKind}.header-create`);
    }
    if (actionType === "edit") {
      headerId = (0,getTrad/* default */.Z)(`modalForm.header-edit`);
    }
    return /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(AttributeIcon/* default */.Z, { type: icon })), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 3 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "title" }, formatMessage({ id: headerId }, { name: displayName })))));
  }
  headers = [
    {
      label: displayName,
      info: { category: schema?.category || null, name: schema?.schema.displayName }
    }
  ];
  if (modalType === "chooseAttribute") {
    icon = ["component", "components"].includes(forTarget) ? "component" : schema.schema.kind;
  }
  if (modalType === "addComponentToDynamicZone") {
    icon = "dynamiczone";
    headers.push({ label: dynamicZoneTarget });
  }
  if (modalType === "attribute" || modalType === "customField") {
    icon = attributeType;
    headers.push({ label: attributeName });
  }
  if (modalType === "editCategory") {
    const label = formatMessage({
      id: (0,getTrad/* default */.Z)("modalForm.header.categories"),
      defaultMessage: "Categories"
    });
    headers = [{ label }, { label: categoryName }];
  }
  return /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 3 }, showBackLink && /* @__PURE__ */ react.createElement(
    dist/* Link */.rU,
    {
      "aria-label": formatMessage({
        id: (0,getTrad/* default */.Z)("modalForm.header.back"),
        defaultMessage: "Back"
      }),
      startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null),
      onClick: () => onOpenModalAddField({ forTarget, targetUid }),
      to: "#back"
    }
  ), /* @__PURE__ */ react.createElement(AttributeIcon/* default */.Z, { type: icon, customField: customFieldUid }), /* @__PURE__ */ react.createElement(Breadcrumbs/* Breadcrumbs */.O, { label: headers.map(({ label }) => label).join(",") }, headers.map(({ label, info }, index, arr) => {
    label = upperFirst_default()(label);
    if (!label) {
      return null;
    }
    const key = `${label}.${index}`;
    if (info?.category) {
      label = `${label} (${upperFirst_default()(info.category)} - ${upperFirst_default()(info.name)})`;
    }
    return /* @__PURE__ */ react.createElement(Crumb/* Crumb */.$, { isCurrent: index === arr.length - 1, key }, label);
  }))));
};
FormModalHeader.defaultProps = {
  actionType: null,
  attributeName: null,
  attributeType: null,
  categoryName: null,
  dynamicZoneTarget: null,
  forTarget: null,
  contentTypeKind: null,
  targetUid: null,
  customFieldUid: null,
  showBackLink: false
};
FormModalHeader.propTypes = {
  actionType: (prop_types_default()).string,
  attributeName: (prop_types_default()).string,
  attributeType: (prop_types_default()).string,
  categoryName: (prop_types_default()).string,
  contentTypeKind: (prop_types_default()).string,
  dynamicZoneTarget: (prop_types_default()).string,
  forTarget: prop_types_default().oneOf(["contentType", "component", "components"]),
  modalType: (prop_types_default()).string.isRequired,
  targetUid: (prop_types_default()).string,
  customFieldUid: (prop_types_default()).string,
  showBackLink: (prop_types_default()).bool
};
/* harmony default export */ const components_FormModalHeader = (FormModalHeader);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModalSubHeader/getModalTitleSubHeader.js

const getModalTitleSubHeader = ({ modalType, forTarget, kind, actionType, step }) => {
  switch (modalType) {
    case "chooseAttribute":
      return (0,getTrad/* default */.Z)(
        `modalForm.sub-header.chooseAttribute.${forTarget.includes("component") ? "component" : kind || "collectionType"}`
      );
    case "attribute": {
      return (0,getTrad/* default */.Z)(
        `modalForm.sub-header.attribute.${actionType}${step !== "null" && step !== null && actionType !== "edit" ? ".step" : ""}`
      );
    }
    case "customField": {
      return (0,getTrad/* default */.Z)(`modalForm.sub-header.attribute.${actionType}`);
    }
    case "addComponentToDynamicZone":
      return (0,getTrad/* default */.Z)("modalForm.sub-header.addComponentToDynamicZone");
    default:
      return (0,getTrad/* default */.Z)("configurations");
  }
};
/* harmony default export */ const FormModalSubHeader_getModalTitleSubHeader = (getModalTitleSubHeader);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModalSubHeader/index.js







const FormModalSubHeader = ({
  actionType,
  modalType,
  forTarget,
  kind,
  step,
  attributeType,
  attributeName,
  customField
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const intlLabel = modalType === "customField" ? customField.intlLabel : { id: (0,getTrad/* default */.Z)(`attribute.${attributeType}`) };
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "flex-start", paddingBottom: 2, gap: 1 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "h2", variant: "beta" }, formatMessage(
    {
      id: FormModalSubHeader_getModalTitleSubHeader({
        actionType,
        forTarget,
        kind,
        step,
        modalType
      }),
      defaultMessage: "Add new field"
    },
    {
      type: upperFirst_default()(formatMessage(intlLabel)),
      name: upperFirst_default()(attributeName),
      step
    }
  )), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600" }, formatMessage({
    id: (0,getTrad/* default */.Z)(`attribute.${attributeType}.description`),
    defaultMessage: "A type for modeling data"
  })));
};
FormModalSubHeader.defaultProps = {
  actionType: null,
  modalType: null,
  forTarget: null,
  kind: null,
  step: null,
  attributeType: null,
  attributeName: null,
  customField: null
};
FormModalSubHeader.propTypes = {
  actionType: (prop_types_default()).string,
  modalType: (prop_types_default()).string,
  forTarget: (prop_types_default()).string,
  kind: (prop_types_default()).string,
  step: (prop_types_default()).string,
  attributeType: (prop_types_default()).string,
  attributeName: (prop_types_default()).string,
  customField: (prop_types_default()).object
};
/* harmony default export */ const components_FormModalSubHeader = (FormModalSubHeader);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/Field.mjs
var Field = __webpack_require__(1821);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.mjs
var FieldLabel = __webpack_require__(2878);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(10989);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldInput.mjs
var FieldInput = __webpack_require__(77804);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Searchbar/Searchbar.mjs
var Searchbar = __webpack_require__(31624);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(4987);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tooltip/Tooltip.mjs + 3 modules
var Tooltip = __webpack_require__(2981);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Search.mjs
var Search = __webpack_require__(10382);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.mjs
var Trash = __webpack_require__(78665);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/IconPicker/constants.js
var constants = __webpack_require__(25237);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/IconPicker/index.js








const IconPickerWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  label {
    ${themes_utils/* inputFocusStyle */.k3}
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid ${({ theme }) => theme.colors.neutral100};
  }
`;
const IconPick = ({ iconKey, name, onChange, isSelected, ariaLabel }) => {
  return /* @__PURE__ */ react.createElement(Field/* Field */.g, { name, required: false }, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, { htmlFor: iconKey, id: `${iconKey}-label` }, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, /* @__PURE__ */ react.createElement(
    FieldInput/* FieldInput */._,
    {
      type: "radio",
      id: iconKey,
      name,
      checked: isSelected,
      onChange,
      value: iconKey,
      "aria-checked": isSelected,
      "aria-labelledby": `${iconKey}-label`
    }
  ), ariaLabel), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { padding: 2, cursor: "pointer", hasRadius: true, background: isSelected && "primary200" }, /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { as: constants/* COMPONENT_ICONS */.c[iconKey], color: isSelected ? "primary600" : "neutral300" }))));
};
IconPick.propTypes = {
  iconKey: (prop_types_default()).string.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  isSelected: (prop_types_default()).bool.isRequired,
  ariaLabel: (prop_types_default()).string.isRequired
};
const IconPicker = ({ intlLabel, name, onChange, value }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [showSearch, setShowSearch] = (0,react.useState)(false);
  const [search, setSearch] = (0,react.useState)("");
  const allIcons = Object.keys(constants/* COMPONENT_ICONS */.c);
  const [icons, setIcons] = (0,react.useState)(allIcons);
  const searchIconRef = (0,react.useRef)(null);
  const searchBarRef = (0,react.useRef)(null);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  const onChangeSearch = ({ target: { value: value2 } }) => {
    setSearch(value2);
    setIcons(() => allIcons.filter((icon) => icon.toLowerCase().includes(value2.toLowerCase())));
  };
  const onClearSearch = () => {
    toggleSearch();
    setSearch("");
    setIcons(allIcons);
  };
  const removeIconSelected = () => {
    onChange({ target: { name, value: "" } });
  };
  (0,react.useEffect)(() => {
    if (showSearch) {
      searchBarRef.current.focus();
    }
  }, [showSearch]);
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between", paddingBottom: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold", textColor: "neutral800", as: "label" }, formatMessage(intlLabel)), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 1 }, showSearch ? /* @__PURE__ */ react.createElement(
    Searchbar/* Searchbar */.w,
    {
      ref: searchBarRef,
      name: "searchbar",
      size: "S",
      placeholder: formatMessage({
        id: (0,getTrad/* default */.Z)("ComponentIconPicker.search.placeholder"),
        defaultMessage: "Search for an icon"
      }),
      onBlur: () => {
        if (!search) {
          toggleSearch();
        }
      },
      onChange: onChangeSearch,
      value: search,
      onClear: onClearSearch,
      clearLabel: formatMessage({
        id: (0,getTrad/* default */.Z)("IconPicker.search.clear.label"),
        defaultMessage: "Clear the icon search"
      })
    },
    formatMessage({
      id: (0,getTrad/* default */.Z)("IconPicker.search.placeholder.label"),
      defaultMessage: "Search for an icon"
    })
  ) : /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      ref: searchIconRef,
      onClick: toggleSearch,
      "aria-label": formatMessage({
        id: (0,getTrad/* default */.Z)("IconPicker.search.button.label"),
        defaultMessage: "Search icon button"
      }),
      icon: /* @__PURE__ */ react.createElement(Search/* default */.Z, null),
      noBorder: true
    }
  ), value && /* @__PURE__ */ react.createElement(
    Tooltip/* Tooltip */.u,
    {
      description: formatMessage({
        id: (0,getTrad/* default */.Z)("IconPicker.remove.tooltip"),
        defaultMessage: "Remove the selected icon"
      })
    },
    /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.h,
      {
        onClick: removeIconSelected,
        "aria-label": formatMessage({
          id: (0,getTrad/* default */.Z)("IconPicker.remove.button"),
          defaultMessage: "Remove the selected icon button"
        }),
        icon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null),
        noBorder: true
      }
    )
  ))), /* @__PURE__ */ react.createElement(
    IconPickerWrapper,
    {
      position: "relative",
      padding: 1,
      background: "neutral100",
      hasRadius: true,
      wrap: "wrap",
      gap: 2,
      maxHeight: "126px",
      overflow: "auto",
      textAlign: "center"
    },
    icons.length > 0 ? icons.map((iconKey) => /* @__PURE__ */ react.createElement(
      IconPick,
      {
        key: iconKey,
        iconKey,
        name,
        onChange,
        isSelected: iconKey === value,
        ariaLabel: formatMessage(
          {
            id: (0,getTrad/* default */.Z)("IconPicker.icon.label"),
            defaultMessage: "Select {icon} icon"
          },
          { icon: iconKey }
        )
      }
    )) : /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 4, grow: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", textColor: "neutral600", textAlign: "center" }, formatMessage({
      id: (0,getTrad/* default */.Z)("IconPicker.emptyState.label"),
      defaultMessage: "No icon found"
    })))
  ));
};
IconPicker.defaultProps = {
  value: ""
};
IconPicker.propTypes = {
  intlLabel: (prop_types_default()).object.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_IconPicker = (IconPicker);

// EXTERNAL MODULE: ./node_modules/pluralize/pluralize.js
var pluralize = __webpack_require__(6699);
var pluralize_default = /*#__PURE__*/__webpack_require__.n(pluralize);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/nameToSlug.js
var nameToSlug = __webpack_require__(50478);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/PluralName/index.js






const PluralName = ({ description, error, intlLabel, modifiedData, name, onChange, value }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const onChangeRef = (0,react.useRef)(onChange);
  const displayName = modifiedData?.displayName || "";
  (0,react.useEffect)(() => {
    if (displayName) {
      const value2 = (0,nameToSlug/* default */.Z)(displayName);
      try {
        const plural = pluralize_default()(value2, 2);
        onChangeRef.current({ target: { name, value: plural } });
      } catch (err) {
        onChangeRef.current({ target: { name, value: value2 } });
      }
    } else {
      onChangeRef.current({ target: { name, value: "" } });
    }
  }, [displayName, name]);
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    { ...description.values }
  ) : "";
  const label = formatMessage(intlLabel);
  return /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      error: errorMessage,
      label,
      id: name,
      hint,
      name,
      onChange,
      value: value || ""
    }
  );
};
PluralName.defaultProps = {
  description: null,
  error: null,
  value: null
};
PluralName.propTypes = {
  description: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_PluralName = (PluralName);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/getRelationType.js
var getRelationType = __webpack_require__(82534);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SimpleMenu/Menu.mjs + 10 modules
var Menu = __webpack_require__(81740);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/constants.js
var FormModal_constants = __webpack_require__(28861);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/Relation/RelationField/RelationTargetPicker/index.js








const RelationTargetPicker = ({ oneThatIsCreatingARelationWithAnother, target }) => {
  const { contentTypes, sortedContentTypesList } = (0,useDataManager/* default */.Z)();
  const dispatch = (0,es/* useDispatch */.I0)();
  const allowedContentTypesForRelation = sortedContentTypesList.filter(
    utils_isAllowedContentTypesForRelations
  );
  const { plugin = null, schema: { displayName } = { displayName: "error" } } = contentTypes?.[target] ?? {};
  const handleSelect = ({ uid, plugin: plugin2, title, restrictRelationsTo }) => () => {
    const selectedContentTypeFriendlyName = plugin2 ? `${plugin2}_${title}` : title;
    dispatch({
      type: FormModal_constants/* ON_CHANGE_RELATION_TARGET */.aG,
      target: {
        value: uid,
        oneThatIsCreatingARelationWithAnother,
        selectedContentTypeFriendlyName,
        targetContentTypeAllowedRelations: restrictRelationsTo
      }
    });
  };
  return /* @__PURE__ */ react.createElement(Menu/* Root */.fC, null, /* @__PURE__ */ react.createElement(MenuTrigger, null, `${displayName} ${plugin ? `(from: ${plugin})` : ""}`), /* @__PURE__ */ react.createElement(Menu/* Content */.VY, { zIndex: 5 }, allowedContentTypesForRelation.map(({ uid, title, restrictRelationsTo, plugin: plugin2 }) => /* @__PURE__ */ react.createElement(Menu/* Item */.ck, { key: uid, onSelect: handleSelect({ uid, plugin: plugin2, title, restrictRelationsTo }) }, title, "\xA0", plugin2 && /* @__PURE__ */ react.createElement(react.Fragment, null, "(from: ", plugin2, ")")))));
};
RelationTargetPicker.defaultProps = {
  target: null
};
RelationTargetPicker.propTypes = {
  oneThatIsCreatingARelationWithAnother: (prop_types_default()).string.isRequired,
  target: (prop_types_default()).string
};
const MenuTrigger = (0,styled_components_browser_esm/* default */.ZP)(Menu/* Trigger */.xz)`
  svg {
    width: ${6 / 16}rem;
    height: ${4 / 16}rem;
  }
`;
/* harmony default export */ const RelationField_RelationTargetPicker = (RelationTargetPicker);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/Relation/RelationField/index.js






const RelationFormBox = ({
  disabled,
  error,
  header,
  isMain,
  name,
  onChange,
  oneThatIsCreatingARelationWithAnother,
  target,
  value
}) => {
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral100", hasRadius: true, borderColor: "neutral200" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { paddingTop: isMain ? 4 : 1, paddingBottom: isMain ? 3 : 1, justifyContent: "center" }, isMain ? /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold", textColor: "neutral800" }, header) : /* @__PURE__ */ react.createElement(
    RelationField_RelationTargetPicker,
    {
      target,
      oneThatIsCreatingARelationWithAnother
    }
  )), /* @__PURE__ */ react.createElement(Divider/* Divider */.i, { background: "neutral200" }), /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 4 }, /* @__PURE__ */ react.createElement(
    dist/* GenericInput */.jm,
    {
      disabled,
      error: error?.id || null,
      intlLabel: {
        id: (0,getTrad/* default */.Z)("form.attribute.item.defineRelation.fieldName"),
        defaultMessage: "Field name"
      },
      name,
      onChange,
      type: "text",
      value
    }
  )));
};
RelationFormBox.defaultProps = {
  disabled: false,
  error: null,
  header: null,
  isMain: false,
  onChange() {
  },
  oneThatIsCreatingARelationWithAnother: null,
  target: null,
  value: ""
};
RelationFormBox.propTypes = {
  disabled: (prop_types_default()).bool,
  error: (prop_types_default()).object,
  header: (prop_types_default()).string,
  isMain: (prop_types_default()).bool,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func,
  oneThatIsCreatingARelationWithAnother: (prop_types_default()).string,
  target: (prop_types_default()).string,
  value: (prop_types_default()).string
};
/* harmony default export */ const RelationField = (RelationFormBox);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/OneWay.mjs
var OneWay = __webpack_require__(91682);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/OneToOne.mjs
var OneToOne = __webpack_require__(1267);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/OneToMany.mjs
var OneToMany = __webpack_require__(64510);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ManyToOne.mjs
var ManyToOne = __webpack_require__(27645);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ManyToMany.mjs
var ManyToMany = __webpack_require__(43286);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ManyWays.mjs
var ManyWays = __webpack_require__(36730);
// EXTERNAL MODULE: ./node_modules/lodash/truncate.js
var truncate = __webpack_require__(88702);
var truncate_default = /*#__PURE__*/__webpack_require__.n(truncate);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/Relation/RelationNaturePicker/components.js


const components_Wrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  position: relative;
  width: 100%;
  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 0px);
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary600};
    z-index: 0;
  }
`;
const IconWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  background: ${({ theme, isSelected }) => theme.colors[isSelected ? "primary100" : "neutral0"]};
  border: 1px solid
    ${({ theme, isSelected }) => theme.colors[isSelected ? "primary700" : "neutral200"]};
  border-radius: ${({ theme }) => theme.borderRadius};
  z-index: 1;
  svg {
    width: 1.5rem;
    height: 100%;
    path {
      fill: ${({ theme, isSelected }) => theme.colors[isSelected ? "primary700" : "neutral500"]};
    }
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
const InfosWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/Relation/RelationNaturePicker/index.js













const relations = {
  oneWay: OneWay/* default */.Z,
  oneToOne: OneToOne/* default */.Z,
  oneToMany: OneToMany/* default */.Z,
  manyToOne: ManyToOne/* default */.Z,
  manyToMany: ManyToMany/* default */.Z,
  manyWay: ManyWays/* default */.Z
};
const RelationNaturePicker = ({
  naturePickerType,
  oneThatIsCreatingARelationWithAnother,
  relationType,
  target
}) => {
  const dispatch = (0,es/* useDispatch */.I0)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { contentTypes, modifiedData } = (0,useDataManager/* default */.Z)();
  const ctRelations = ["oneWay", "oneToOne", "oneToMany", "manyToOne", "manyToMany", "manyWay"];
  const componentRelations = ["oneWay", "manyWay"];
  const dataType = naturePickerType === "contentType" ? get_default()(modifiedData, [naturePickerType, "schema", "kind"], "") : naturePickerType;
  const relationsType = dataType === "collectionType" ? ctRelations : componentRelations;
  const areDisplayedNamesInverted = relationType === "manyToOne";
  const targetLabel = get_default()(contentTypes, [target, "schema", "displayName"], "unknown");
  const leftTarget = areDisplayedNamesInverted ? targetLabel : oneThatIsCreatingARelationWithAnother;
  const rightTarget = areDisplayedNamesInverted ? oneThatIsCreatingARelationWithAnother : targetLabel;
  const leftDisplayedValue = pluralize_default()(leftTarget, relationType === "manyToMany" ? 2 : 1);
  const restrictedRelations = get_default()(contentTypes, [target, "schema", "restrictRelationsTo"], null);
  const rightDisplayedValue = pluralize_default()(
    rightTarget,
    ["manyToMany", "oneToMany", "manyToOne", "manyWay"].includes(relationType) ? 2 : 1
  );
  if (!relationType) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { style: { flex: 1 } }, /* @__PURE__ */ react.createElement(components_Wrapper, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { paddingLeft: 9, paddingRight: 9, paddingTop: 1, justifyContent: "center" }, /* @__PURE__ */ react.createElement(KeyboardNavigable/* KeyboardNavigable */.k, { tagName: "button" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 3 }, relationsType.map((relation) => {
    const Asset = relations[relation];
    const isEnabled = restrictedRelations === null || restrictedRelations.includes(relation);
    return /* @__PURE__ */ react.createElement(
      IconWrapper,
      {
        as: "button",
        isSelected: relationType === relation,
        disabled: !isEnabled,
        key: relation,
        onClick: () => {
          if (isEnabled) {
            dispatch({
              type: FormModal_constants/* ON_CHANGE_RELATION_TYPE */.QQ,
              target: {
                oneThatIsCreatingARelationWithAnother,
                targetContentType: target,
                value: relation
              }
            });
          }
        },
        padding: 2,
        type: "button"
      },
      /* @__PURE__ */ react.createElement(Asset, { key: relation })
    );
  }))))), /* @__PURE__ */ react.createElement(InfosWrapper, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, truncate_default()(leftDisplayedValue, { length: 24 }), "\xA0"), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "primary600" }, formatMessage({ id: (0,getTrad/* default */.Z)(`relation.${relationType}`) }), "\xA0"), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, truncate_default()(rightDisplayedValue, { length: 24 }))));
};
RelationNaturePicker.defaultProps = {
  relationType: null,
  target: null
};
RelationNaturePicker.propTypes = {
  naturePickerType: (prop_types_default()).string.isRequired,
  oneThatIsCreatingARelationWithAnother: (prop_types_default()).string.isRequired,
  relationType: (prop_types_default()).string,
  target: (prop_types_default()).string
};
/* harmony default export */ const Relation_RelationNaturePicker = (RelationNaturePicker);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/Relation/index.js






const Relation = ({ formErrors, mainBoxHeader, modifiedData, naturePickerType, onChange }) => {
  const relationType = (0,getRelationType/* default */.Z)(modifiedData.relation, modifiedData.targetAttribute);
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { style: { position: "relative" } }, /* @__PURE__ */ react.createElement(
    RelationField,
    {
      isMain: true,
      header: mainBoxHeader,
      error: formErrors?.name || null,
      name: "name",
      onChange,
      value: modifiedData?.name || ""
    }
  ), /* @__PURE__ */ react.createElement(
    Relation_RelationNaturePicker,
    {
      naturePickerType,
      oneThatIsCreatingARelationWithAnother: mainBoxHeader,
      relationType,
      target: modifiedData.target
    }
  ), /* @__PURE__ */ react.createElement(
    RelationField,
    {
      disabled: ["oneWay", "manyWay"].includes(relationType),
      error: formErrors?.targetAttribute || null,
      name: "targetAttribute",
      onChange,
      oneThatIsCreatingARelationWithAnother: mainBoxHeader,
      target: modifiedData.target,
      value: modifiedData?.targetAttribute || ""
    }
  ));
};
Relation.propTypes = {
  formErrors: (prop_types_default()).object.isRequired,
  mainBoxHeader: (prop_types_default()).string.isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  naturePickerType: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_Relation = (Relation);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/Combobox.mjs
var Combobox = __webpack_require__(8295);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.mjs
var ComboboxOption = __webpack_require__(61121);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/SelectCategory/index.js





const SelectCategory = ({ error, intlLabel, name, onChange, value }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { allComponentsCategories } = (0,useDataManager/* default */.Z)();
  const [categories, setCategories] = (0,react.useState)(allComponentsCategories);
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const label = formatMessage(intlLabel);
  const handleChange = (value2) => {
    onChange({ target: { name, value: value2, type: "select-category" } });
  };
  const handleCreateOption = (value2) => {
    setCategories((prev) => [...prev, value2]);
    handleChange(value2);
  };
  return /* @__PURE__ */ react.createElement(
    Combobox/* CreatableCombobox */.XU,
    {
      error: errorMessage,
      id: name,
      label,
      name,
      onChange: handleChange,
      onCreateOption: handleCreateOption,
      value
    },
    categories.map((category) => /* @__PURE__ */ react.createElement(ComboboxOption/* ComboboxOption */.O, { key: category, value: category }, category))
  );
};
SelectCategory.defaultProps = {
  error: null,
  value: null
};
SelectCategory.propTypes = {
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_SelectCategory = (SelectCategory);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/SelectComponent/index.js





const SelectComponent = ({
  error,
  intlLabel,
  isAddingAComponentToAnotherComponent,
  isCreating,
  isCreatingComponentWhileAddingAField,
  componentToCreate,
  name,
  onChange,
  targetUid,
  forTarget,
  value
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const label = formatMessage(intlLabel);
  const { componentsGroupedByCategory, componentsThatHaveOtherComponentInTheirAttributes } = (0,useDataManager/* default */.Z)();
  const isTargetAComponent = ["component", "components"].includes(forTarget);
  let options = Object.entries(componentsGroupedByCategory).reduce((acc, current) => {
    const [categoryName, components] = current;
    const compos = components.map((component) => {
      return {
        uid: component.uid,
        label: component.schema.displayName,
        categoryName
      };
    });
    return [...acc, ...compos];
  }, []);
  if (isAddingAComponentToAnotherComponent) {
    options = options.filter((option) => {
      return !componentsThatHaveOtherComponentInTheirAttributes.includes(option.uid);
    });
  }
  if (isTargetAComponent) {
    options = options.filter((option) => {
      return option.uid !== targetUid;
    });
  }
  if (isCreatingComponentWhileAddingAField) {
    options = [
      {
        uid: value,
        label: componentToCreate.displayName,
        categoryName: componentToCreate.category
      }
    ];
  }
  return /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      disabled: isCreatingComponentWhileAddingAField || !isCreating,
      error: errorMessage,
      label,
      id: name,
      name,
      onChange: (value2) => {
        onChange({ target: { name, value: value2, type: "select-category" } });
      },
      value: value || ""
    },
    options.map((option) => {
      return /* @__PURE__ */ react.createElement(Option/* Option */.W, { key: option.uid, value: option.uid }, `${option.categoryName} - ${option.label}`);
    })
  );
};
SelectComponent.defaultProps = {
  componentToCreate: null,
  error: null
};
SelectComponent.propTypes = {
  componentToCreate: (prop_types_default()).object,
  forTarget: (prop_types_default()).string.isRequired,
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  isAddingAComponentToAnotherComponent: (prop_types_default()).bool.isRequired,
  isCreating: (prop_types_default()).bool.isRequired,
  isCreatingComponentWhileAddingAField: (prop_types_default()).bool.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  targetUid: (prop_types_default()).string.isRequired,
  value: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_SelectComponent = (SelectComponent);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/SelectComponents/index.js







const SelectComponents = ({ dynamicZoneTarget, intlLabel, name, onChange, value }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { componentsGroupedByCategory, modifiedData } = (0,useDataManager/* default */.Z)();
  const dzSchema = utils_findAttribute(modifiedData.contentType.schema.attributes, dynamicZoneTarget) || {};
  const alreadyUsedComponents = dzSchema.components || [];
  const filteredComponentsGroupedByCategory = Object.keys(componentsGroupedByCategory).reduce(
    (acc, current) => {
      const filteredComponents = componentsGroupedByCategory[current].filter(({ uid }) => {
        return !alreadyUsedComponents.includes(uid);
      });
      if (filteredComponents.length > 0) {
        acc[current] = filteredComponents;
      }
      return acc;
    },
    {}
  );
  const options = Object.entries(filteredComponentsGroupedByCategory).reduce((acc, current) => {
    const [categoryName, components] = current;
    const section = {
      label: categoryName,
      children: components.map(({ uid, schema: { displayName } }) => {
        return { label: displayName, value: uid };
      })
    };
    acc.push(section);
    return acc;
  }, []);
  const displayedValue = formatMessage(
    {
      id: (0,getTrad/* default */.Z)("components.SelectComponents.displayed-value"),
      defaultMessage: "{number, plural, =0 {# components} one {# component} other {# components}} selected"
    },
    { number: value.length }
  );
  return /* @__PURE__ */ react.createElement(
    MultiSelectNested/* MultiSelectNested */.Q,
    {
      id: "select1",
      label: formatMessage(intlLabel),
      customizeContent: () => displayedValue,
      name,
      onChange: (values) => {
        onChange({ target: { name, value: values, type: "select-components" } });
      },
      options,
      value: value || []
    }
  );
};
SelectComponents.propTypes = {
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  dynamicZoneTarget: (prop_types_default()).string.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).array.isRequired
};
/* harmony default export */ const components_SelectComponents = (SelectComponents);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/SelectDateType/index.js




const SelectDateType = ({ intlLabel, error, modifiedData, name, onChange, options, value }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const label = formatMessage(intlLabel);
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const handleChange = (nextValue) => {
    onChange({ target: { name, value: nextValue, type: "select" } });
    if (!value) {
      return;
    }
    if (modifiedData.default !== void 0 && modifiedData.default !== null) {
      onChange({ target: { name: "default", value: null } });
    }
  };
  return /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      error: errorMessage,
      label,
      id: name,
      name,
      onChange: handleChange,
      value: value || ""
    },
    options.map(({ metadatas: { intlLabel: intlLabel2, disabled, hidden }, key, value: value2 }) => {
      return /* @__PURE__ */ react.createElement(Option/* Option */.W, { key, value: value2, disabled, hidden }, formatMessage(
        { id: intlLabel2.id, defaultMessage: intlLabel2.defaultMessage },
        intlLabel2.values
      ));
    })
  );
};
SelectDateType.defaultProps = {
  error: void 0,
  value: ""
};
SelectDateType.propTypes = {
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  options: prop_types_default().arrayOf(
    prop_types_default().shape({
      metadatas: prop_types_default().shape({
        intlLabel: prop_types_default().shape({
          id: (prop_types_default()).string.isRequired,
          defaultMessage: (prop_types_default()).string.isRequired
        }).isRequired,
        disabled: (prop_types_default()).bool,
        hidden: (prop_types_default()).bool
      }).isRequired,
      key: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
      value: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
    }).isRequired
  ).isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_SelectDateType = (SelectDateType);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/SelectNumber/index.js




const SelectNumber = ({ intlLabel, error, modifiedData, name, onChange, options, value }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const label = formatMessage(intlLabel);
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const handleChange = (nextValue) => {
    onChange({ target: { name, value: nextValue, type: "select" } });
    if (!value) {
      return;
    }
    if (nextValue === "biginteger" && value !== "biginteger") {
      if (modifiedData.default !== void 0 && modifiedData.default !== null) {
        onChange({ target: { name: "default", value: null } });
      }
      if (modifiedData.max !== void 0 && modifiedData.max !== null) {
        onChange({ target: { name: "max", value: null } });
      }
      if (modifiedData.min !== void 0 && modifiedData.min !== null) {
        onChange({ target: { name: "min", value: null } });
      }
    }
    if (["decimal", "float", "integer"].includes(nextValue) && value === "biginteger") {
      if (modifiedData.default !== void 0 && modifiedData.default !== null) {
        onChange({ target: { name: "default", value: null } });
      }
      if (modifiedData.max !== void 0 && modifiedData.max !== null) {
        onChange({ target: { name: "max", value: null } });
      }
      if (modifiedData.min !== void 0 && modifiedData.min !== null) {
        onChange({ target: { name: "min", value: null } });
      }
    }
  };
  return /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      error: errorMessage,
      label,
      id: name,
      name,
      onChange: handleChange,
      value: value || ""
    },
    options.map(({ metadatas: { intlLabel: intlLabel2, disabled, hidden }, key, value: value2 }) => {
      return /* @__PURE__ */ react.createElement(Option/* Option */.W, { key, value: value2, disabled, hidden }, formatMessage(intlLabel2));
    })
  );
};
SelectNumber.defaultProps = {
  error: void 0,
  value: ""
};
SelectNumber.propTypes = {
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  options: prop_types_default().arrayOf(
    prop_types_default().shape({
      metadatas: prop_types_default().shape({
        intlLabel: prop_types_default().shape({
          id: (prop_types_default()).string.isRequired,
          defaultMessage: (prop_types_default()).string.isRequired
        }).isRequired,
        disabled: (prop_types_default()).bool,
        hidden: (prop_types_default()).bool
      }).isRequired,
      key: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
      value: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
    }).isRequired
  ).isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_SelectNumber = (SelectNumber);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/SingularName/index.js





const SingularName = ({ description, error, intlLabel, modifiedData, name, onChange, value }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const onChangeRef = (0,react.useRef)(onChange);
  const displayName = modifiedData?.displayName || "";
  (0,react.useEffect)(() => {
    if (displayName) {
      onChangeRef.current({ target: { name, value: (0,nameToSlug/* default */.Z)(displayName) } });
    } else {
      onChangeRef.current({ target: { name, value: "" } });
    }
  }, [displayName, name]);
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    { ...description.values }
  ) : "";
  const label = formatMessage(intlLabel);
  return /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      error: errorMessage,
      label,
      id: name,
      hint,
      name,
      onChange,
      value: value || ""
    }
  );
};
SingularName.defaultProps = {
  description: null,
  error: null,
  value: null
};
SingularName.propTypes = {
  description: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_SingularName = (SingularName);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/TabForm/index.js






const TabForm = ({ form, formErrors, genericInputProps, modifiedData, onChange }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return form.map((section, sectionIndex) => {
    if (section.items.length === 0) {
      return null;
    }
    return /* @__PURE__ */ react.createElement(Box/* Box */.x, { key: sectionIndex }, section.sectionTitle && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h3" }, formatMessage(section.sectionTitle))), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, section.items.map((input, i) => {
      const key = `${sectionIndex}.${i}`;
      const value = get_default()(modifiedData, input.name, "");
      const pluginOptionError = Object.keys(formErrors).find((key2) => key2 === input.name);
      const errorId = pluginOptionError ? formErrors[pluginOptionError].id : get_default()(
        formErrors,
        [
          ...input.name.split(".").filter((key2) => key2 !== "componentToCreate"),
          "id"
        ],
        null
      );
      if (input.type === "pushRight") {
        return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: input.size || 6, key: input.name || key }, /* @__PURE__ */ react.createElement("div", null));
      }
      return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: input.size || 6, key: input.name || key }, /* @__PURE__ */ react.createElement(
        dist/* GenericInput */.jm,
        {
          ...input,
          ...genericInputProps,
          error: errorId,
          onChange,
          value
        }
      ));
    })));
  });
};
TabForm.propTypes = {
  form: prop_types_default().arrayOf((prop_types_default()).object).isRequired,
  formErrors: (prop_types_default()).object.isRequired,
  genericInputProps: (prop_types_default()).object.isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  onChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_TabForm = (TabForm);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Textarea/Textarea.mjs
var Textarea = __webpack_require__(39708);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/TextareaEnum/index.js




const TextareaEnum = ({
  description,
  disabled,
  error,
  intlLabel,
  labelAction,
  name,
  onChange,
  placeholder,
  value
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    { ...description.values }
  ) : "";
  const label = formatMessage(intlLabel);
  const formattedPlaceholder = placeholder ? formatMessage(
    { id: placeholder.id, defaultMessage: placeholder.defaultMessage },
    { ...placeholder.values }
  ) : "";
  const inputValue = Array.isArray(value) ? value.join("\n") : "";
  const handleChange = (e) => {
    const arrayValue = e.target.value.split("\n");
    onChange({ target: { name, value: arrayValue } });
  };
  return /* @__PURE__ */ react.createElement(
    Textarea/* Textarea */.g,
    {
      disabled,
      error: errorMessage,
      label,
      labelAction,
      id: name,
      hint,
      name,
      onChange: handleChange,
      placeholder: formattedPlaceholder,
      value: inputValue
    },
    inputValue
  );
};
TextareaEnum.defaultProps = {
  description: null,
  disabled: false,
  error: "",
  labelAction: void 0,
  placeholder: null,
  value: ""
};
TextareaEnum.propTypes = {
  description: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  disabled: (prop_types_default()).bool,
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  labelAction: (prop_types_default()).element,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  placeholder: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  value: prop_types_default().oneOfType([(prop_types_default()).array, (prop_types_default()).string])
};
/* harmony default export */ const components_TextareaEnum = (TextareaEnum);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/nameField.js

const nameField = {
  name: "name",
  type: "text",
  intlLabel: {
    id: "global.name",
    defaultMessage: "Name"
  },
  description: {
    id: (0,getTrad/* default */.Z)("modalForm.attribute.form.base.name.description"),
    defaultMessage: "No space is allowed for the name of the attribute"
  }
  // validations: {
  //   required: true,
  // },
};


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/commonBaseForm.js

const commonBaseForm = {
  sections: [{ sectionTitle: null, items: [nameField] }]
};
/* harmony default export */ const attributes_commonBaseForm = (commonBaseForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/component/componentField.js

const componentField = {
  intlLabel: {
    id: "global.type",
    defaultMessage: "Type"
  },
  name: "createComponent",
  type: "boolean-radio-group",
  size: 12,
  radios: [
    {
      title: {
        id: (0,getTrad/* default */.Z)("form.attribute.component.option.create"),
        defaultMessage: "Create a new component"
      },
      description: {
        id: (0,getTrad/* default */.Z)("form.attribute.component.option.create.description"),
        defaultMessage: "A component is shared across types and components, it will be available and accessible everywhere."
      },
      value: true
    },
    {
      title: {
        id: (0,getTrad/* default */.Z)("form.attribute.component.option.reuse-existing"),
        defaultMessage: "Use an existing component"
      },
      description: {
        id: (0,getTrad/* default */.Z)("form.attribute.component.option.reuse-existing.description"),
        defaultMessage: "Reuse a component already created to keep your data consistent across content-types."
      },
      value: false
    }
  ]
};
/* harmony default export */ const component_componentField = (componentField);

// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(47853);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/category/regex.js
const CATEGORY_NAME_REGEX = /^[A-Za-z][-_0-9A-Za-z]*$/;
/* harmony default export */ const regex = (CATEGORY_NAME_REGEX);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/category/createCategorySchema.js



const createCategorySchema = (usedCategoryNames) => {
  const shape = {
    name: yup_es/* string */.Z_().matches(regex, dist/* translatedErrors */.I0.regex).test({
      name: "nameNotAllowed",
      message: dist/* translatedErrors */.I0.unique,
      test(value) {
        if (!value) {
          return false;
        }
        return !usedCategoryNames.includes(value?.toLowerCase());
      }
    }).required(dist/* translatedErrors */.I0.required)
  };
  return yup_es/* object */.Ry(shape);
};
/* harmony default export */ const category_createCategorySchema = (createCategorySchema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/category/form.js

const form_form = {
  base: {
    sections: [
      {
        sectionTitle: null,
        items: [
          {
            autoFocus: true,
            name: "name",
            type: "text",
            intlLabel: {
              id: "global.name",
              defaultMessage: "Name"
            },
            // validations: {
            //   required: true,
            // },
            description: {
              id: (0,getTrad/* default */.Z)("modalForm.editCategory.base.name.description"),
              defaultMessage: "No space is allowed for the name of the category"
            }
          }
        ]
      }
    ]
  }
};
/* harmony default export */ const category_form = (form_form);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/category/index.js




// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/utils/createUid.js
var createUid = __webpack_require__(9816);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/component/createComponentSchema.js





const createComponentSchema = (usedComponentNames, reservedNames, category) => {
  const shape = {
    displayName: yup_es/* string */.Z_().test({
      name: "nameAlreadyUsed",
      message: dist/* translatedErrors */.I0.unique,
      test(value) {
        if (!value) {
          return false;
        }
        const name = (0,createUid/* createComponentUid */.N)(value, category);
        return !usedComponentNames.includes(name);
      }
    }).test({
      name: "nameNotAllowed",
      message: (0,getTrad/* default */.Z)("error.contentTypeName.reserved-name"),
      test(value) {
        if (!value) {
          return false;
        }
        return !reservedNames.includes(value?.trim()?.toLowerCase());
      }
    }).required(dist/* translatedErrors */.I0.required),
    category: yup_es/* string */.Z_().matches(regex, dist/* translatedErrors */.I0.regex).required(dist/* translatedErrors */.I0.required),
    icon: yup_es/* string */.Z_()
  };
  return yup_es/* object */.Ry(shape);
};
/* harmony default export */ const component_createComponentSchema = (createComponentSchema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/component/form.js

const componentForm = {
  base(prefix = "") {
    const sections = [
      {
        sectionTitle: null,
        items: [
          {
            name: `${prefix}displayName`,
            type: "text",
            intlLabel: {
              id: (0,getTrad/* default */.Z)("contentType.displayName.label"),
              defaultMessage: "Display Name"
            }
          },
          {
            name: `${prefix}category`,
            type: "select-category",
            intlLabel: {
              id: (0,getTrad/* default */.Z)("modalForm.components.create-component.category.label"),
              defaultMessage: "Select a category or enter a name to create a new one"
            }
          }
        ]
      },
      {
        sectionTitle: null,
        items: [
          {
            name: `${prefix}icon`,
            type: "icon-picker",
            size: 12,
            intlLabel: {
              id: (0,getTrad/* default */.Z)("modalForm.components.icon.label"),
              defaultMessage: "Icon"
            }
          }
        ]
      }
    ];
    return sections;
  },
  advanced() {
    const sections = [];
    return sections;
  }
};
/* harmony default export */ const component_form = (componentForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/component/index.js




;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/attributeOptions.js

const attributeOptions = {
  default: {
    name: "default",
    type: "text",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.settings.default"),
      defaultMessage: "Default value"
    }
  },
  max: {
    name: "max",
    type: "checkbox-with-number-field",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.maximum"),
      defaultMessage: "Maximum value"
    }
  },
  maxLength: {
    name: "maxLength",
    type: "checkbox-with-number-field",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.maximumLength"),
      defaultMessage: "Maximum length"
    }
  },
  min: {
    name: "min",
    type: "checkbox-with-number-field",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.minimum"),
      defaultMessage: "Minimum value"
    }
  },
  minLength: {
    name: "minLength",
    type: "checkbox-with-number-field",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.minimumLength"),
      defaultMessage: "Minimum length"
    }
  },
  private: {
    name: "private",
    type: "checkbox",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.privateField"),
      defaultMessage: "Private field"
    },
    description: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.privateField.description"),
      defaultMessage: "This field will not show up in the API response"
    }
  },
  regex: {
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.text.regex"),
      defaultMessage: "RegExp pattern"
    },
    name: "regex",
    type: "text",
    description: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.text.regex.description"),
      defaultMessage: "The text of the regular expression"
    }
  },
  required: {
    name: "required",
    type: "checkbox",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.requiredField"),
      defaultMessage: "Required field"
    },
    description: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.requiredField.description"),
      defaultMessage: "You won't be able to create an entry if this field is empty"
    }
  },
  unique: {
    name: "unique",
    type: "checkbox",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.uniqueField"),
      defaultMessage: "Unique field"
    },
    description: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.uniqueField.description"),
      defaultMessage: "You won't be able to create an entry if there is an existing entry with identical content"
    }
  }
};
/* harmony default export */ const attributes_attributeOptions = (attributeOptions);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/advancedForm.js



const advancedForm = {
  blocks() {
    return {
      sections: [
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.private]
        }
      ]
    };
  },
  boolean() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              autoFocus: true,
              type: "select-default-boolean",
              intlLabel: {
                id: (0,getTrad/* default */.Z)("form.attribute.settings.default"),
                defaultMessage: "Default value"
              },
              name: "default",
              options: [
                {
                  value: "true",
                  key: "true",
                  metadatas: { intlLabel: { id: "true", defaultMessage: "true" } }
                },
                {
                  value: "",
                  key: "null",
                  metadatas: { intlLabel: { id: "null", defaultMessage: "null" } }
                },
                {
                  value: "false",
                  key: "false",
                  metadatas: { intlLabel: { id: "false", defaultMessage: "false" } }
                }
              ]
            }
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.private]
        }
      ]
    };
  },
  component({ repeatable }, step) {
    if (step === "1") {
      return { sections: component_form.advanced("componentToCreate") };
    }
    if (repeatable) {
      return {
        sections: [
          {
            sectionTitle: {
              id: "global.settings",
              defaultMessage: "Settings"
            },
            items: [attributes_attributeOptions.required, attributes_attributeOptions.private, attributes_attributeOptions.max, attributes_attributeOptions.min]
          }
        ]
      };
    }
    return {
      sections: [
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.private]
        }
      ]
    };
  },
  date({ type }) {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              ...attributes_attributeOptions["default"],
              type: type || "date",
              value: null,
              withDefaultValue: false,
              disabled: !type,
              autoFocus: false
            }
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.unique, attributes_attributeOptions.private]
        }
      ]
    };
  },
  dynamiczone() {
    return {
      sections: [
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.max, attributes_attributeOptions.min]
        }
      ]
    };
  },
  email() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              ...attributes_attributeOptions["default"],
              type: "email"
            }
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [
            attributes_attributeOptions.required,
            attributes_attributeOptions.unique,
            attributes_attributeOptions.maxLength,
            attributes_attributeOptions.minLength,
            attributes_attributeOptions.private
          ]
        }
      ]
    };
  },
  enumeration(data) {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              name: "default",
              type: "select",
              intlLabel: {
                id: (0,getTrad/* default */.Z)("form.attribute.settings.default"),
                defaultMessage: "Default value"
              },
              validations: {},
              options: [
                {
                  key: "__null_reset_value__",
                  value: "",
                  metadatas: {
                    intlLabel: {
                      id: "components.InputSelect.option.placeholder",
                      defaultMessage: "Choose here"
                    }
                  }
                },
                ...(data.enum || []).filter((value, index) => data.enum.indexOf(value) === index && value).map((value) => {
                  return {
                    key: value,
                    value,
                    metadatas: {
                      intlLabel: { id: `${value}.no-override`, defaultMessage: value }
                    }
                  };
                })
              ]
            },
            {
              intlLabel: {
                id: (0,getTrad/* default */.Z)("form.attribute.item.enumeration.graphql"),
                defaultMessage: "Name override for GraphQL"
              },
              name: "enumName",
              type: "text",
              validations: {},
              description: {
                id: (0,getTrad/* default */.Z)("form.attribute.item.enumeration.graphql.description"),
                defaultMessage: "Allows you to override the default generated name for GraphQL"
              }
            }
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.private]
        }
      ]
    };
  },
  json() {
    return {
      sections: [
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.private]
        }
      ]
    };
  },
  media() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: {
                id: (0,getTrad/* default */.Z)("form.attribute.media.allowed-types"),
                defaultMessage: "Select allowed types of media"
              },
              name: "allowedTypes",
              type: "allowed-types-select",
              size: 7,
              value: "",
              validations: {}
            }
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.private]
        }
      ]
    };
  },
  number(data) {
    const inputStep = data.type === "decimal" || data.type === "float" ? "any" : 1;
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              autoFocus: true,
              name: "default",
              type: data.type === "biginteger" ? "text" : "number",
              step: inputStep,
              intlLabel: {
                id: (0,getTrad/* default */.Z)("form.attribute.settings.default"),
                defaultMessage: "Default value"
              },
              validations: {}
            }
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.unique, attributes_attributeOptions.max, attributes_attributeOptions.min, attributes_attributeOptions.private]
        }
      ]
    };
  },
  password() {
    return {
      sections: [
        { sectionTitle: null, items: [attributes_attributeOptions["default"]] },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.maxLength, attributes_attributeOptions.minLength, attributes_attributeOptions.private]
        }
      ]
    };
  },
  relation() {
    return {
      sections: [
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.private]
        }
      ]
    };
  },
  richtext() {
    return {
      sections: [
        { sectionTitle: null, items: [attributes_attributeOptions["default"]] },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.maxLength, attributes_attributeOptions.minLength, attributes_attributeOptions.private]
        }
      ]
    };
  },
  text() {
    return {
      sections: [
        { sectionTitle: null, items: [attributes_attributeOptions["default"], attributes_attributeOptions.regex] },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [
            attributes_attributeOptions.required,
            attributes_attributeOptions.unique,
            attributes_attributeOptions.maxLength,
            attributes_attributeOptions.minLength,
            attributes_attributeOptions.private
          ]
        }
      ]
    };
  },
  uid(data) {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [{ ...attributes_attributeOptions["default"], disabled: Boolean(data.targetField), type: "text" }]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.maxLength, attributes_attributeOptions.minLength, attributes_attributeOptions.private]
        }
      ]
    };
  }
};
/* harmony default export */ const attributes_advancedForm = (advancedForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/baseForm.js



const baseForm = {
  component(data, step) {
    if (step === "1") {
      const itemsToConcat = data.createComponent === true ? component_form.base("componentToCreate.") : [];
      return {
        sections: [{ sectionTitle: null, items: [component_componentField] }, ...itemsToConcat]
      };
    }
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            nameField,
            {
              name: "component",
              type: "select-component",
              intlLabel: {
                id: (0,getTrad/* default */.Z)("modalForm.attributes.select-component"),
                defaultMessage: "Select a component"
              },
              isMultiple: false
            }
          ]
        },
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: {
                id: "global.type",
                defaultMessage: "Type"
              },
              name: "repeatable",
              type: "boolean-radio-group",
              size: 12,
              radios: [
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.component.option.repeatable"),
                    defaultMessage: "Repeatable component"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.component.option.repeatable.description"),
                    defaultMessage: "Best for multiple instances (array) of ingredients, meta tags, etc.."
                  },
                  value: true
                },
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.component.option.single"),
                    defaultMessage: "Single component"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.component.option.single.description"),
                    defaultMessage: "Best for grouping fields like full address, main information, etc..."
                  },
                  value: false
                }
              ]
            }
          ]
        }
      ]
    };
  },
  date() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            nameField,
            {
              intlLabel: {
                id: "global.type",
                defaultMessage: "Type"
              },
              name: "type",
              type: "select-date",
              options: [
                {
                  key: "__null_reset_value__",
                  value: "",
                  metadatas: {
                    intlLabel: {
                      id: "components.InputSelect.option.placeholder",
                      defaultMessage: "Choose here"
                    },
                    hidden: true
                  }
                },
                {
                  key: "date",
                  value: "date",
                  metadatas: {
                    intlLabel: {
                      id: (0,getTrad/* default */.Z)("form.attribute.item.date.type.date"),
                      defaultMessage: "date (ex: 01/01/{currentYear})",
                      values: { currentYear: new Date().getFullYear() }
                    }
                  }
                },
                {
                  key: "datetime",
                  value: "datetime",
                  metadatas: {
                    intlLabel: {
                      id: (0,getTrad/* default */.Z)("form.attribute.item.date.type.datetime"),
                      defaultMessage: "datetime (ex: 01/01/{currentYear} 00:00 AM)",
                      values: { currentYear: new Date().getFullYear() }
                    }
                  }
                },
                {
                  key: "time",
                  value: "time",
                  metadatas: {
                    intlLabel: {
                      id: (0,getTrad/* default */.Z)("form.attribute.item.date.type.time"),
                      defaultMessage: "time (ex: 00:00 AM)"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    };
  },
  enumeration() {
    return {
      sections: [
        { sectionTitle: null, items: [nameField] },
        {
          sectionTitle: null,
          items: [
            {
              name: "enum",
              type: "textarea-enum",
              size: 6,
              intlLabel: {
                id: (0,getTrad/* default */.Z)("form.attribute.item.enumeration.rules"),
                defaultMessage: "Values (one line per value)"
              },
              placeholder: {
                id: (0,getTrad/* default */.Z)("form.attribute.item.enumeration.placeholder"),
                defaultMessage: "Ex:\nmorning\nnoon\nevening"
              },
              validations: {
                required: true
              }
            }
          ]
        }
      ]
    };
  },
  media() {
    return {
      sections: [
        { sectionTitle: null, items: [nameField] },
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: {
                id: "global.type",
                defaultMessage: "Type"
              },
              name: "multiple",
              size: 12,
              type: "boolean-radio-group",
              radios: [
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.media.option.multiple"),
                    defaultMessage: "Multiple media"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.media.option.multiple.description"),
                    defaultMessage: "Best for sliders, carousels or multiple files download"
                  },
                  value: true
                },
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.media.option.single"),
                    defaultMessage: "Single media"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.media.option.single.description"),
                    defaultMessage: "Best for avatar, profile picture or cover"
                  },
                  value: false
                }
              ]
            }
          ]
        }
      ]
    };
  },
  number() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            nameField,
            {
              intlLabel: {
                id: (0,getTrad/* default */.Z)("form.attribute.item.number.type"),
                defaultMessage: "Number format"
              },
              name: "type",
              type: "select-number",
              options: [
                {
                  key: "__null_reset_value__",
                  value: "",
                  metadatas: {
                    intlLabel: {
                      id: "components.InputSelect.option.placeholder",
                      defaultMessage: "Choose here"
                    },
                    hidden: true
                  }
                },
                {
                  key: "integer",
                  value: "integer",
                  metadatas: {
                    intlLabel: {
                      id: (0,getTrad/* default */.Z)("form.attribute.item.number.type.integer"),
                      defaultMessage: "integer (ex: 10)"
                    }
                  }
                },
                {
                  key: "biginteger",
                  value: "biginteger",
                  metadatas: {
                    intlLabel: {
                      id: (0,getTrad/* default */.Z)("form.attribute.item.number.type.biginteger"),
                      defaultMessage: "biginteger (ex: 123456789)"
                    }
                  }
                },
                {
                  key: "decimal",
                  value: "decimal",
                  metadatas: {
                    intlLabel: {
                      id: (0,getTrad/* default */.Z)("form.attribute.item.number.type.decimal"),
                      defaultMessage: "decimal (ex: 2.22)"
                    }
                  }
                },
                {
                  key: "float",
                  value: "float",
                  metadatas: {
                    intlLabel: {
                      id: (0,getTrad/* default */.Z)("form.attribute.item.number.type.float"),
                      defaultMessage: "decimal (ex: 3.3333333)"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    };
  },
  relation() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: { id: "FIXME", defaultMessage: "FIXME" },
              name: "relation",
              size: 12,
              type: "relation"
            }
          ]
        }
      ]
    };
  },
  string() {
    return {
      sections: [
        { sectionTitle: null, items: [nameField] },
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: {
                id: "global.type",
                defaultMessage: "Type"
              },
              name: "type",
              size: 12,
              type: "radio-group",
              radios: [
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.short-text"),
                    defaultMessage: "Sort text"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.short-text.description"),
                    defaultMessage: "Best for titles, names, links (URL). It also enables exact search on the field."
                  },
                  value: "string"
                },
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.long-text"),
                    defaultMessage: "Long text"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.long-text.description"),
                    defaultMessage: "Best for descriptions, biography. Exact search is disabled."
                  },
                  value: "text"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  text() {
    return {
      sections: [
        { sectionTitle: null, items: [nameField] },
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: {
                id: "global.type",
                defaultMessage: "Type"
              },
              name: "type",
              size: 12,
              type: "radio-group",
              radios: [
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.short-text"),
                    defaultMessage: "Sort text"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.short-text.description"),
                    defaultMessage: "Best for titles, names, links (URL). It also enables exact search on the field."
                  },
                  value: "string"
                },
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.long-text"),
                    defaultMessage: "Long text"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.long-text.description"),
                    defaultMessage: "Best for descriptions, biography. Exact search is disabled."
                  },
                  value: "text"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  uid(data, step, attributes) {
    const options = attributes.filter(({ type }) => ["string", "text"].includes(type)).map(({ name }) => ({
      key: name,
      value: name,
      metadatas: {
        intlLabel: { id: `${name}.no-override`, defaultMessage: name }
      }
    }));
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              ...nameField,
              placeholder: {
                id: (0,getTrad/* default */.Z)("modalForm.attribute.form.base.name.placeholder"),
                defaultMessage: "e.g. slug, seoUrl, canonicalUrl"
              }
            },
            {
              intlLabel: {
                id: (0,getTrad/* default */.Z)("modalForm.attribute.target-field"),
                defaultMessage: "Attached field"
              },
              name: "targetField",
              type: "select",
              options: [
                {
                  key: "__null_reset_value__",
                  value: "",
                  metadatas: { intlLabel: { id: "global.none", defaultMessage: "None" } }
                },
                ...options
              ]
            }
          ]
        }
      ]
    };
  }
};
/* harmony default export */ const attributes_baseForm = (baseForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/form.js


const attributes_form_form = {
  advanced: attributes_advancedForm,
  base: attributes_baseForm
};
/* harmony default export */ const attributes_form = (attributes_form_form);

// EXTERNAL MODULE: ./node_modules/lodash/uniq.js
var uniq = __webpack_require__(81465);
var uniq_default = /*#__PURE__*/__webpack_require__.n(uniq);
// EXTERNAL MODULE: ./node_modules/@sindresorhus/slugify/index.js
var slugify = __webpack_require__(12665);
var slugify_default = /*#__PURE__*/__webpack_require__.n(slugify);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/toRegressedEnumValue.js

const toRegressedEnumValue = (value) => slugify_default()(value, {
  decamelize: false,
  lowercase: false,
  separator: "_"
});
/* harmony default export */ const utils_toRegressedEnumValue = (toRegressedEnumValue);

// EXTERNAL MODULE: ./node_modules/lodash/toNumber.js
var toNumber = __webpack_require__(51527);
var toNumber_default = /*#__PURE__*/__webpack_require__.n(toNumber);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/validation/common.js




const NAME_REGEX = /^[A-Za-z][_0-9A-Za-z]*$/;
const alreadyUsedAttributeNames = (usedNames) => {
  return {
    name: "attributeNameAlreadyUsed",
    message: dist/* translatedErrors */.I0.unique,
    test(value) {
      if (!value) {
        return false;
      }
      return !usedNames.includes(value);
    }
  };
};
const getUsedContentTypeAttributeNames = (ctShema, isEdition, attributeNameToEdit) => {
  const attributes = ctShema?.schema?.attributes ?? {};
  return Object.keys(attributes).filter((attr) => {
    if (isEdition) {
      return attr !== attributeNameToEdit;
    }
    return true;
  });
};
const isNameAllowed = (reservedNames) => {
  return {
    name: "forbiddenAttributeName",
    message: (0,getTrad/* default */.Z)("error.attributeName.reserved-name"),
    test(value) {
      if (!value) {
        return false;
      }
      return !reservedNames.includes(value);
    }
  };
};
const validators = {
  default: () => yup_es/* string */.Z_().nullable(),
  max: () => yup_es/* number */.Rx().integer().nullable(),
  min: () => yup_es/* number */.Rx().integer().when("max", (max, schema) => {
    if (max) {
      return schema.max(max, (0,getTrad/* default */.Z)("error.validation.minSupMax"));
    }
    return schema;
  }).nullable(),
  maxLength: () => yup_es/* number */.Rx().integer().positive((0,getTrad/* default */.Z)("error.validation.positive")).nullable(),
  minLength: () => yup_es/* number */.Rx().integer().min(0).when("maxLength", (maxLength, schema) => {
    if (maxLength) {
      return schema.max(maxLength, (0,getTrad/* default */.Z)("error.validation.minSupMax"));
    }
    return schema;
  }).nullable(),
  name(usedNames, reservedNames) {
    return yup_es/* string */.Z_().test(alreadyUsedAttributeNames(usedNames)).test(isNameAllowed(reservedNames)).matches(NAME_REGEX, dist/* translatedErrors */.I0.regex).required(dist/* translatedErrors */.I0.required);
  },
  required: () => yup_es/* boolean */.O7(),
  type: () => yup_es/* string */.Z_().required(dist/* translatedErrors */.I0.required),
  unique: () => yup_es/* boolean */.O7().nullable()
};
const createTextShape = (usedAttributeNames, reservedNames) => {
  const shape = {
    name: validators.name(usedAttributeNames, reservedNames),
    type: validators.type(),
    default: validators.default(),
    unique: validators.unique(),
    required: validators.required(),
    maxLength: validators.maxLength(),
    minLength: validators.minLength(),
    regex: yup_es/* string */.Z_().test({
      name: "isValidRegExpPattern",
      message: (0,getTrad/* default */.Z)("error.validation.regex"),
      test(value) {
        return new RegExp(value) !== null;
      }
    }).nullable()
  };
  return shape;
};
const isMinSuperiorThanMax = {
  name: "isMinSuperiorThanMax",
  message: (0,getTrad/* default */.Z)("error.validation.minSupMax"),
  test(min) {
    if (!min) {
      return true;
    }
    const { max } = this.parent;
    if (!max) {
      return true;
    }
    if (Number.isNaN(toNumber_default()(min))) {
      return true;
    }
    return toNumber_default()(max) >= toNumber_default()(min);
  }
};


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/types.js







const types = {
  date(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type()
    };
    return yup_es/* object */.Ry(shape);
  },
  datetime(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type()
    };
    return yup_es/* object */.Ry(shape);
  },
  time(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type()
    };
    return yup_es/* object */.Ry(shape);
  },
  default(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type()
    };
    return yup_es/* object */.Ry(shape);
  },
  biginteger(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: yup_es/* string */.Z_().nullable().matches(/^-?\d*$/),
      unique: validators.unique(),
      required: validators.required(),
      max: yup_es/* string */.Z_().nullable().matches(/^-?\d*$/, dist/* translatedErrors */.I0.regex),
      min: yup_es/* string */.Z_().nullable().test(isMinSuperiorThanMax).matches(/^-?\d*$/, dist/* translatedErrors */.I0.regex)
    };
    return yup_es/* object */.Ry(shape);
  },
  boolean(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      default: yup_es/* boolean */.O7().nullable(),
      required: validators.required(),
      unique: validators.unique()
    };
    return yup_es/* object */.Ry(shape);
  },
  component(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      required: validators.required(),
      max: validators.max(),
      min: validators.min(),
      component: yup_es/* string */.Z_().required(dist/* translatedErrors */.I0.required)
    };
    return yup_es/* object */.Ry(shape);
  },
  decimal(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: yup_es/* number */.Rx(),
      required: validators.required(),
      max: yup_es/* number */.Rx(),
      min: yup_es/* number */.Rx().test(isMinSuperiorThanMax)
    };
    return yup_es/* object */.Ry(shape);
  },
  dynamiczone(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      required: validators.required(),
      max: validators.max(),
      min: validators.min()
    };
    return yup_es/* object */.Ry(shape);
  },
  email(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: yup_es/* string */.Z_().email().nullable(),
      unique: validators.unique(),
      required: validators.required(),
      maxLength: validators.maxLength(),
      minLength: validators.minLength()
    };
    return yup_es/* object */.Ry(shape);
  },
  enumeration(usedAttributeNames, reservedNames) {
    const GRAPHQL_ENUM_REGEX = /^[_A-Za-z][_0-9A-Za-z]*$/;
    const shape = {
      name: yup_es/* string */.Z_().test(alreadyUsedAttributeNames(usedAttributeNames)).test(isNameAllowed(reservedNames)).matches(GRAPHQL_ENUM_REGEX, dist/* translatedErrors */.I0.regex).required(dist/* translatedErrors */.I0.required),
      type: validators.type(),
      default: validators.default(),
      unique: validators.unique(),
      required: validators.required(),
      enum: yup_es/* array */.IX().of(yup_es/* string */.Z_()).min(1, dist/* translatedErrors */.I0.min).test({
        name: "areEnumValuesUnique",
        message: (0,getTrad/* default */.Z)("error.validation.enum-duplicate"),
        test(values) {
          const duplicates = uniq_default()(
            values.map(utils_toRegressedEnumValue).filter((value, index, values2) => values2.indexOf(value) !== index)
          );
          return !duplicates.length;
        }
      }).test({
        name: "doesNotHaveEmptyValues",
        message: (0,getTrad/* default */.Z)("error.validation.enum-empty-string"),
        test: (values) => !values.map(utils_toRegressedEnumValue).some((val) => val === "")
      }).test({
        name: "doesMatchRegex",
        message: (0,getTrad/* default */.Z)("error.validation.enum-regex"),
        test: (values) => values.map(utils_toRegressedEnumValue).every((value) => GRAPHQL_ENUM_REGEX.test(value))
      }),
      enumName: yup_es/* string */.Z_().nullable()
    };
    return yup_es/* object */.Ry(shape);
  },
  float(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      required: validators.required(),
      default: yup_es/* number */.Rx(),
      max: yup_es/* number */.Rx(),
      min: yup_es/* number */.Rx().test(isMinSuperiorThanMax)
    };
    return yup_es/* object */.Ry(shape);
  },
  integer(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: yup_es/* number */.Rx().integer(),
      unique: validators.unique(),
      required: validators.required(),
      max: validators.max(),
      min: validators.min()
    };
    return yup_es/* object */.Ry(shape);
  },
  json(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      required: validators.required(),
      unique: validators.unique()
    };
    return yup_es/* object */.Ry(shape);
  },
  media(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      multiple: yup_es/* boolean */.O7(),
      required: validators.required(),
      allowedTypes: yup_es/* array */.IX().of(yup_es/* string */.Z_().oneOf(["images", "videos", "files", "audios"])).min(1).nullable()
    };
    return yup_es/* object */.Ry(shape);
  },
  password(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: validators.default(),
      unique: validators.unique(),
      required: validators.required(),
      maxLength: validators.maxLength(),
      minLength: validators.minLength()
    };
    return yup_es/* object */.Ry(shape);
  },
  relation(usedAttributeNames, reservedNames, alreadyTakenTargetAttributes, { initialData, modifiedData }) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      target: yup_es/* string */.Z_().required(dist/* translatedErrors */.I0.required),
      relation: yup_es/* string */.Z_().required(),
      type: yup_es/* string */.Z_().required(),
      targetAttribute: yup_es/* lazy */.Vo(() => {
        const relationType = (0,getRelationType/* default */.Z)(modifiedData.relation, modifiedData.targetAttribute);
        if (relationType === "oneWay" || relationType === "manyWay") {
          return yup_es/* string */.Z_().nullable();
        }
        let schema = yup_es/* string */.Z_().test(isNameAllowed(reservedNames));
        const initialForbiddenName = [
          ...alreadyTakenTargetAttributes.map(({ name }) => name),
          modifiedData.name
        ];
        let forbiddenTargetAttributeName = initialForbiddenName.filter(
          (val) => val !== initialData.targetAttribute
        );
        return schema.matches(NAME_REGEX, dist/* translatedErrors */.I0.regex).test({
          name: "forbiddenTargetAttributeName",
          message: (0,getTrad/* default */.Z)("error.validation.relation.targetAttribute-taken"),
          test(value) {
            if (!value) {
              return false;
            }
            return !forbiddenTargetAttributeName.includes(value);
          }
        }).required(dist/* translatedErrors */.I0.required);
      })
    };
    return yup_es/* object */.Ry(shape);
  },
  richtext(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: validators.default(),
      unique: validators.unique(),
      required: validators.required(),
      maxLength: validators.maxLength(),
      minLength: validators.minLength()
    };
    return yup_es/* object */.Ry(shape);
  },
  blocks(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: validators.default(),
      unique: validators.unique(),
      required: validators.required(),
      maxLength: validators.maxLength(),
      minLength: validators.minLength()
    };
    return yup_es/* object */.Ry(shape);
  },
  string(usedAttributeNames, reservedNames) {
    const shape = createTextShape(usedAttributeNames, reservedNames);
    return yup_es/* object */.Ry(shape);
  },
  text(usedAttributeNames, reservedNames) {
    const shape = createTextShape(usedAttributeNames, reservedNames);
    return yup_es/* object */.Ry(shape);
  },
  uid(usedAttributeNames, reservedNames) {
    const shape = createTextShape(usedAttributeNames, reservedNames);
    return yup_es/* object */.Ry(shape);
  }
};
/* harmony default export */ const attributes_types = (types);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/index.js




;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/contentType/createContentTypeSchema.js




const createContentTypeSchema = ({
  usedContentTypeNames = [],
  reservedModels = [],
  singularNames = [],
  pluralNames = [],
  collectionNames = []
}) => {
  const shape = {
    displayName: yup_es/* string */.Z_().test({
      name: "nameAlreadyUsed",
      message: dist/* translatedErrors */.I0.unique,
      test(value) {
        if (!value) {
          return false;
        }
        const name = (0,createUid/* createUid */.E)(value);
        return !usedContentTypeNames.includes(name);
      }
    }).test({
      name: "nameNotAllowed",
      message: (0,getTrad/* default */.Z)("error.contentTypeName.reserved-name"),
      test(value) {
        if (!value) {
          return false;
        }
        return !reservedModels.includes(value?.trim()?.toLowerCase());
      }
    }).required(dist/* translatedErrors */.I0.required),
    pluralName: yup_es/* string */.Z_().test({
      name: "pluralNameAlreadyUsed",
      message: dist/* translatedErrors */.I0.unique,
      test(value) {
        if (!value) {
          return false;
        }
        return !pluralNames.includes(value);
      }
    }).test({
      name: "pluralNameAlreadyUsedAsSingular",
      message: (0,getTrad/* default */.Z)("error.contentType.pluralName-equals-singularName"),
      test(value) {
        if (!value) {
          return false;
        }
        return !singularNames.includes(value);
      }
    }).test({
      name: "pluralAndSingularAreUnique",
      message: (0,getTrad/* default */.Z)("error.contentType.pluralName-used"),
      test(value, context) {
        if (!value) {
          return false;
        }
        return context.parent.singularName !== value;
      }
    }).test({
      name: "pluralNameNotAllowed",
      message: (0,getTrad/* default */.Z)("error.contentTypeName.reserved-name"),
      test(value) {
        if (!value) {
          return false;
        }
        return !reservedModels.includes(value?.trim()?.toLowerCase());
      }
    }).test({
      name: "pluralNameNotAlreadyUsedInCollectionName",
      message: (0,getTrad/* default */.Z)("error.contentType.pluralName-equals-collectionName"),
      test(value) {
        if (!value) {
          return false;
        }
        return !collectionNames.includes(value?.trim()?.toLowerCase());
      }
    }).required(dist/* translatedErrors */.I0.required),
    singularName: yup_es/* string */.Z_().test({
      name: "singularNameAlreadyUsed",
      message: dist/* translatedErrors */.I0.unique,
      test(value) {
        if (!value) {
          return false;
        }
        return !singularNames.includes(value);
      }
    }).test({
      name: "singularNameAlreadyUsedAsPlural",
      message: (0,getTrad/* default */.Z)("error.contentType.singularName-equals-pluralName"),
      test(value) {
        if (!value) {
          return false;
        }
        return !pluralNames.includes(value);
      }
    }).test({
      name: "pluralAndSingularAreUnique",
      message: (0,getTrad/* default */.Z)("error.contentType.singularName-used"),
      test(value, context) {
        if (!value) {
          return false;
        }
        return context.parent.pluralName !== value;
      }
    }).test({
      name: "singularNameNotAllowed",
      message: (0,getTrad/* default */.Z)("error.contentTypeName.reserved-name"),
      test(value) {
        if (!value) {
          return false;
        }
        return !reservedModels.includes(value?.trim()?.toLowerCase());
      }
    }).required(dist/* translatedErrors */.I0.required),
    draftAndPublish: yup_es/* boolean */.O7(),
    kind: yup_es/* string */.Z_().oneOf(["singleType", "collectionType"]),
    reviewWorkflows: yup_es/* boolean */.O7()
  };
  return yup_es/* object */.Ry(shape);
};
/* harmony default export */ const contentType_createContentTypeSchema = (createContentTypeSchema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/contentType/form.js

const form_nameField = {
  name: "displayName",
  type: "text",
  intlLabel: {
    id: (0,getTrad/* default */.Z)("contentType.displayName.label"),
    defaultMessage: "Display name"
  }
};
const form_forms = {
  advanced: {
    default() {
      return {
        sections: [
          {
            items: [
              {
                intlLabel: {
                  id: (0,getTrad/* default */.Z)("contentType.draftAndPublish.label"),
                  defaultMessage: "Draft & publish"
                },
                description: {
                  id: (0,getTrad/* default */.Z)("contentType.draftAndPublish.description"),
                  defaultMessage: "Allows writing a draft version of an entry, before it is published"
                },
                name: "draftAndPublish",
                type: "toggle-draft-publish",
                validations: {}
              }
            ]
          }
        ]
      };
    }
  },
  base: {
    create() {
      return {
        sections: [
          {
            sectionTitle: null,
            items: [
              form_nameField,
              {
                description: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-singular.description"),
                  defaultMessage: "Used to generate the API routes and databases tables/collections"
                },
                intlLabel: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-singular.label"),
                  defaultMessage: "API ID (Singular)"
                },
                name: "singularName",
                type: "text-singular"
              },
              {
                type: "pushRight",
                size: 6,
                intlLabel: { id: "", defaultMessage: "" },
                name: "pushRight"
              },
              {
                description: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-plural.description"),
                  defaultMessage: "Pluralized API ID"
                },
                intlLabel: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-plural.label"),
                  defaultMessage: "API ID (Plural)"
                },
                name: "pluralName",
                type: "text-plural"
              }
            ]
          }
        ]
      };
    },
    edit() {
      return {
        sections: [
          {
            sectionTitle: null,
            items: [
              form_nameField,
              {
                disabled: true,
                description: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-singular.description"),
                  defaultMessage: "Used to generate the API routes and databases tables/collections"
                },
                intlLabel: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-singular.label"),
                  defaultMessage: "API ID (Singular)"
                },
                name: "singularName",
                type: "text"
              },
              {
                type: "pushRight",
                size: 6,
                intlLabel: { id: "", defaultMessage: "" },
                name: "pushRight"
              },
              {
                disabled: true,
                description: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-plural.description"),
                  defaultMessage: "Pluralized API ID"
                },
                intlLabel: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-plural.label"),
                  defaultMessage: "API ID (Plural)"
                },
                name: "pluralName",
                type: "text"
              },
              {
                intlLabel: {
                  id: "global.type",
                  defaultMessage: "Type"
                },
                name: "kind",
                type: "content-type-radio-group",
                size: 12,
                radios: [
                  {
                    title: {
                      id: (0,getTrad/* default */.Z)("form.button.collection-type.name"),
                      defaultMessage: "Collection Type"
                    },
                    description: {
                      id: (0,getTrad/* default */.Z)("form.button.collection-type.description"),
                      defaultMessage: "Best for multiple instances like articles, products, comments, etc."
                    },
                    value: "collectionType"
                  },
                  {
                    title: {
                      id: (0,getTrad/* default */.Z)("form.button.single-type.name"),
                      defaultMessage: "Single Type"
                    },
                    description: {
                      id: (0,getTrad/* default */.Z)("form.button.single-type.description"),
                      defaultMessage: "Best for single instance like about us, homepage, etc."
                    },
                    value: "singleType"
                  }
                ]
              }
            ]
          }
        ]
      };
    }
  }
};
/* harmony default export */ const contentType_form = (form_forms);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/contentType/index.js



;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/dynamicZone/form.js


const dynamicZone_form_form = {
  advanced: {
    default() {
      return {
        sections: component_form.advanced("componentToCreate.")
      };
    }
  },
  base: {
    createComponent() {
      return {
        sections: [
          { sectionTitle: null, items: [component_componentField] },
          ...component_form.base("componentToCreate.")
        ]
      };
    },
    default() {
      return {
        sections: [
          { sectionTitle: null, items: [component_componentField] },
          {
            sectionTitle: null,
            items: [
              {
                type: "pushRight",
                size: 6,
                intlLabel: { id: "", defaultMessage: "" },
                name: "pushRight"
              },
              {
                name: "components",
                type: "select-components",
                intlLabel: {
                  id: (0,getTrad/* default */.Z)("modalForm.attributes.select-components"),
                  defaultMessage: "Select the components"
                },
                isMultiple: true
              }
            ]
          }
        ]
      };
    }
  }
};
/* harmony default export */ const dynamicZone_form = (dynamicZone_form_form);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/dynamicZone/index.js


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/forms/utils/addItemsToFormSection.js
const addItemsToFormSection = (formTypeOptions, sections) => {
  formTypeOptions.forEach((item) => {
    if (!("sectionTitle" in item)) {
      sections[0].items.push(item);
      return;
    }
    sections.push(item);
  });
};
/* harmony default export */ const utils_addItemsToFormSection = (addItemsToFormSection);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/forms/utils/getUsedAttributeNames.js
const getUsedAttributeNames = (attributes, schemaData) => {
  return attributes.filter(({ name }) => {
    return name !== schemaData.initialData.name;
  }).map(({ name }) => name);
};
/* harmony default export */ const utils_getUsedAttributeNames = (getUsedAttributeNames);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/forms/index.js









const forms_forms = {
  customField: {
    schema({
      schemaAttributes,
      attributeType,
      customFieldValidator,
      reservedNames,
      schemaData,
      ctbFormsAPI
    }) {
      const usedAttributeNames = utils_getUsedAttributeNames(schemaAttributes, schemaData);
      const attributeShape = attributes_types[attributeType](
        usedAttributeNames,
        reservedNames.attributes
      );
      return ctbFormsAPI.makeCustomFieldValidator(
        attributeShape,
        customFieldValidator,
        usedAttributeNames,
        reservedNames.attributes,
        schemaData
      );
    },
    form: {
      base({ customField }) {
        const sections = [{ sectionTitle: null, items: [nameField] }];
        if (customField.options?.base) {
          utils_addItemsToFormSection(customField.options.base, sections);
        }
        return { sections };
      },
      advanced({ customField, data, step, extensions, ...rest }) {
        const sections = [{ sectionTitle: null, items: [] }];
        const injectedInputs = extensions.getAdvancedForm(["attribute", customField.type], {
          data,
          type: customField.type,
          step,
          ...rest
        });
        if (customField.options?.advanced) {
          utils_addItemsToFormSection(customField.options.advanced, sections);
        }
        if (injectedInputs) {
          const extendedSettings = {
            sectionTitle: {
              id: (0,getTrad/* default */.Z)("modalForm.custom-fields.advanced.settings.extended"),
              defaultMessage: "Extended settings"
            },
            items: injectedInputs
          };
          sections.push(extendedSettings);
        }
        return { sections };
      }
    }
  },
  attribute: {
    schema(currentSchema, attributeType, reservedNames, alreadyTakenTargetContentTypeAttributes, options, extensions) {
      const attributes = currentSchema?.schema?.attributes ?? [];
      const usedAttributeNames = utils_getUsedAttributeNames(attributes, options);
      try {
        let attributeShape = attributes_types[attributeType](
          usedAttributeNames,
          reservedNames.attributes,
          alreadyTakenTargetContentTypeAttributes,
          options
        );
        return extensions.makeValidator(
          ["attribute", attributeType],
          attributeShape,
          usedAttributeNames,
          reservedNames.attributes,
          alreadyTakenTargetContentTypeAttributes,
          options
        );
      } catch (err) {
        console.error("Error yup build schema", err);
        return attributes_types.default(usedAttributeNames, reservedNames.attributes);
      }
    },
    form: {
      advanced({ data, type, step, extensions, ...rest }) {
        try {
          const baseForm = attributes_form.advanced[type](data, step).sections;
          const itemsToAdd = extensions.getAdvancedForm(["attribute", type], {
            data,
            type,
            step,
            ...rest
          });
          const sections = baseForm.reduce((acc, current) => {
            if (current.sectionTitle === null) {
              acc.push(current);
            } else {
              acc.push({ ...current, items: [...current.items, ...itemsToAdd] });
            }
            return acc;
          }, []);
          return { sections };
        } catch (err) {
          console.error(err);
          return { sections: [] };
        }
      },
      base({ data, type, step, attributes }) {
        try {
          return attributes_form.base[type](data, step, attributes);
        } catch (err) {
          return attributes_commonBaseForm;
        }
      }
    }
  },
  contentType: {
    schema(alreadyTakenNames, isEditing, ctUid, reservedNames, extensions, contentTypes) {
      const singularNames = Object.values(contentTypes).map((contentType) => {
        return contentType.schema.singularName;
      });
      const pluralNames = Object.values(contentTypes).map((contentType) => {
        return contentType?.schema?.pluralName ?? "";
      });
      const takenNames = isEditing ? alreadyTakenNames.filter((uid) => uid !== ctUid) : alreadyTakenNames;
      const takenSingularNames = isEditing ? singularNames.filter((singName) => {
        const { schema } = contentTypes[ctUid];
        return schema.singularName !== singName;
      }) : singularNames;
      const takenPluralNames = isEditing ? pluralNames.filter((pluralName) => {
        const { schema } = contentTypes[ctUid];
        return schema.pluralName !== pluralName;
      }) : pluralNames;
      const collectionNames = Object.values(contentTypes).map((contentType) => {
        return contentType?.schema?.collectionName ?? "";
      });
      const takenCollectionNames = isEditing ? collectionNames.filter((collectionName) => {
        const { schema } = contentTypes[ctUid];
        const currentPluralName = schema.pluralName;
        const currentCollectionName = schema.collectionName;
        return collectionName !== currentPluralName || collectionName !== currentCollectionName;
      }) : collectionNames;
      const contentTypeShape = contentType_createContentTypeSchema({
        usedContentTypeNames: takenNames,
        reservedModels: reservedNames.models,
        singularNames: takenSingularNames,
        pluralNames: takenPluralNames,
        collectionNames: takenCollectionNames
      });
      return extensions.makeValidator(
        ["contentType"],
        contentTypeShape,
        takenNames,
        reservedNames.models,
        takenSingularNames,
        takenPluralNames
      );
    },
    form: {
      base({ actionType }) {
        if (actionType === "create") {
          return contentType_form.base.create();
        }
        return contentType_form.base.edit();
      },
      advanced({ extensions }) {
        const baseForm = contentType_form.advanced.default().sections.map((section) => section.items).flat();
        const itemsToAdd = extensions.getAdvancedForm(["contentType"]);
        return {
          sections: [
            {
              items: [...baseForm, ...itemsToAdd]
            }
          ]
        };
      }
    }
  },
  component: {
    schema(alreadyTakenAttributes, componentCategory, reservedNames, isEditing = false, compoUid = null) {
      const takenNames = isEditing ? alreadyTakenAttributes.filter((uid) => uid !== compoUid) : alreadyTakenAttributes;
      return component_createComponentSchema(takenNames, reservedNames.models, componentCategory);
    },
    form: {
      advanced() {
        return {
          sections: component_form.advanced()
        };
      },
      base() {
        return {
          sections: component_form.base()
        };
      }
    }
  },
  addComponentToDynamicZone: {
    form: {
      advanced() {
        return dynamicZone_form.advanced.default();
      },
      base({ data }) {
        const isCreatingComponent = data?.createComponent ?? false;
        if (isCreatingComponent) {
          return dynamicZone_form.base.createComponent();
        }
        return dynamicZone_form.base.default();
      }
    }
  },
  editCategory: {
    schema(allCategories, initialData) {
      const allowedCategories = allCategories.filter((cat) => cat !== initialData.name).map((cat) => cat.toLowerCase());
      return category_createCategorySchema(allowedCategories);
    },
    form: {
      advanced: () => ({ sections: [] }),
      base() {
        return category_form.base;
      }
    }
  }
};
/* harmony default export */ const FormModal_forms = (forms_forms);

// EXTERNAL MODULE: ./node_modules/reselect/es/index.js + 1 modules
var reselect_es = __webpack_require__(57150);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/reducer.js + 2 modules
var reducer = __webpack_require__(87777);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/selectors.js



const formModalDomain = () => (state) => state[`${pluginId/* default */.Z}_formModal`] || reducer/* initialState */.E;
const makeSelectFormModal = () => (0,reselect_es/* createSelector */.P1)(formModalDomain(), (substate) => {
  return substate;
});
/* harmony default export */ const selectors = (makeSelectFormModal);


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/utils/canEditContentType.js


const canEditContentType = (data, modifiedData) => {
  const kind = get_default()(data, ["contentType", "schema", "kind"], "");
  if (kind === "singleType" || kind === modifiedData.kind) {
    return true;
  }
  const contentTypeAttributes = get_default()(data, ["contentType", "schema", "attributes"], []);
  const relationAttributes = contentTypeAttributes.filter(({ relation, type, targetAttribute }) => {
    const relationType = (0,getRelationType/* default */.Z)(relation, targetAttribute);
    return type === "relation" && !["oneWay", "manyWay"].includes(relationType);
  });
  return relationAttributes.length === 0;
};
/* harmony default export */ const utils_canEditContentType = (canEditContentType);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/utils/getAttributesToDisplay.js
const getAttributes = (dataTarget = "", targetUid, nestedComponents) => {
  const defaultAttributes = [
    "text",
    "email",
    "richtext",
    "password",
    "blocks",
    "number",
    "enumeration",
    "date",
    "media",
    "boolean",
    "json",
    "relation"
  ];
  const isPickingAttributeForAContentType = dataTarget === "contentType";
  const isNestedInAnotherComponent = nestedComponents.includes(targetUid);
  const canAddComponentInAnotherComponent = !isPickingAttributeForAContentType && !isNestedInAnotherComponent;
  if (isPickingAttributeForAContentType) {
    return [
      [...defaultAttributes, "uid"],
      ["component", "dynamiczone"]
    ];
  }
  if (canAddComponentInAnotherComponent) {
    return [defaultAttributes, ["component"]];
  }
  return [defaultAttributes];
};
/* harmony default export */ const getAttributesToDisplay = (getAttributes);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/utils/getFormInputNames.js
const getFormInputNames = (form) => form.reduce((acc, current) => {
  const names = current.items.reduce((acc2, current2) => {
    if (current2.name) {
      acc2.push(current2.name);
    }
    return acc2;
  }, []);
  return [...acc, ...names];
}, []);
/* harmony default export */ const utils_getFormInputNames = (getFormInputNames);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/utils/index.js




;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/index.js












































const BetaFeatureAlert = (0,styled_components_browser_esm/* default */.ZP)((0,Alert/* Alert */.b))`
  button {
    display: none;
  }
`;
const FormModal = () => {
  const {
    onCloseModal,
    onNavigateToChooseAttributeModal,
    onNavigateToAddCompoToDZModal,
    onNavigateToCreateComponentStep2,
    actionType,
    attributeName,
    attributeType,
    customFieldUid,
    categoryName,
    dynamicZoneTarget,
    forTarget,
    modalType,
    isOpen,
    showBackLink,
    kind,
    step,
    targetUid
  } = (0,useFormModalNavigation/* default */.Z)();
  const customField = (0,dist/* useCustomFields */.mZ)().get(customFieldUid);
  const tabGroupRef = (0,react.useRef)();
  const formModalSelector = (0,react.useMemo)(selectors, []);
  const dispatch = (0,es/* useDispatch */.I0)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const reducerState = (0,es/* useSelector */.v9)((state) => formModalSelector(state), es/* shallowEqual */.wU);
  const { push } = (0,react_router/* useHistory */.k6)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { getPlugin } = (0,dist/* useStrapiApp */.j1)();
  const ctbPlugin = getPlugin(pluginId/* default */.Z);
  const ctbFormsAPI = ctbPlugin.apis.forms;
  const inputsFromPlugins = ctbFormsAPI.components.inputs;
  const {
    addAttribute,
    addCustomFieldAttribute,
    addCreatedComponentToDynamicZone,
    allComponentsCategories,
    changeDynamicZoneComponents,
    contentTypes,
    components,
    createSchema,
    deleteCategory,
    deleteData,
    editCategory,
    editCustomFieldAttribute,
    submitData,
    modifiedData: allDataSchema,
    nestedComponents,
    setModifiedData,
    sortedContentTypesList,
    updateSchema,
    reservedNames
  } = (0,useDataManager/* default */.Z)();
  const {
    componentToCreate,
    formErrors,
    initialData,
    isCreatingComponentWhileAddingAField,
    modifiedData
  } = reducerState;
  const pathToSchema = forTarget === "contentType" || forTarget === "component" ? [forTarget] : [forTarget, targetUid];
  (0,react.useEffect)(() => {
    if (isOpen) {
      const collectionTypesForRelation = sortedContentTypesList.filter(
        utils_isAllowedContentTypesForRelations
      );
      if (modalType === "editCategory") {
        setModifiedData();
      }
      if (actionType === "edit" && modalType === "attribute" && forTarget === "contentType") {
        trackUsage("willEditFieldOfContentType");
      }
      const pathToAttributes = [...pathToSchema, "schema", "attributes"];
      const foundDynamicZoneTarget = utils_findAttribute(get_default()(allDataSchema, pathToAttributes, []), dynamicZoneTarget) || null;
      if (modalType === "editCategory" && actionType === "edit") {
        dispatch({
          type: FormModal_constants/* SET_DATA_TO_EDIT */._H,
          modalType,
          actionType,
          data: {
            name: categoryName
          }
        });
      }
      if (modalType === "contentType" && actionType === "create") {
        dispatch({
          type: FormModal_constants/* SET_DATA_TO_EDIT */._H,
          modalType,
          actionType,
          data: {
            draftAndPublish: true
          },
          pluginOptions: {}
        });
      }
      if (modalType === "contentType" && actionType === "edit") {
        const {
          displayName,
          draftAndPublish,
          kind: kind2,
          pluginOptions,
          pluralName,
          reviewWorkflows,
          singularName
        } = get_default()(allDataSchema, [...pathToSchema, "schema"], {
          displayName: null,
          pluginOptions: {},
          singularName: null,
          pluralName: null
        });
        dispatch({
          type: FormModal_constants/* SET_DATA_TO_EDIT */._H,
          actionType,
          modalType,
          data: {
            displayName,
            draftAndPublish,
            kind: kind2,
            pluginOptions,
            pluralName,
            // because review-workflows is an EE feature the attribute does
            // not always exist, but the component prop-types expect a boolean,
            // so we have to ensure undefined is casted to false
            reviewWorkflows: reviewWorkflows ?? false,
            singularName
          }
        });
      }
      if (modalType === "component" && actionType === "edit") {
        const data = get_default()(allDataSchema, pathToSchema, {});
        dispatch({
          type: FormModal_constants/* SET_DATA_TO_EDIT */._H,
          actionType,
          modalType,
          data: {
            displayName: data.schema.displayName,
            category: data.category,
            icon: data.schema.icon
          }
        });
      }
      if (modalType === "addComponentToDynamicZone" && actionType === "edit") {
        const attributeToEdit = {
          ...foundDynamicZoneTarget,
          // We filter the available components
          // Because this modal is only used for adding components
          components: [],
          name: dynamicZoneTarget,
          createComponent: false,
          componentToCreate: { type: "component" }
        };
        dispatch({
          type: FormModal_constants/* SET_DYNAMIC_ZONE_DATA_SCHEMA */.VZ,
          attributeToEdit
        });
      }
      if (attributeType) {
        const attributeToEditNotFormatted = utils_findAttribute(
          get_default()(allDataSchema, pathToAttributes, []),
          attributeName
        );
        const attributeToEdit = {
          ...attributeToEditNotFormatted,
          name: attributeName
        };
        if (attributeType === "component" && actionType === "edit") {
          if (!attributeToEdit.repeatable) {
            set_default()(attributeToEdit, "repeatable", false);
          }
        }
        if (modalType === "customField") {
          dispatch({
            type: FormModal_constants/* SET_CUSTOM_FIELD_DATA_SCHEMA */.OY,
            customField,
            isEditing: actionType === "edit",
            modifiedDataToSetForEditing: attributeToEdit,
            // NOTE: forTarget is used in the i18n middleware
            forTarget
          });
        } else {
          dispatch({
            type: FormModal_constants/* SET_ATTRIBUTE_DATA_SCHEMA */.S0,
            attributeType,
            nameToSetForRelation: get_default()(collectionTypesForRelation, ["0", "title"], "error"),
            targetUid: get_default()(collectionTypesForRelation, ["0", "uid"], "error"),
            isEditing: actionType === "edit",
            modifiedDataToSetForEditing: attributeToEdit,
            step,
            forTarget
          });
        }
      }
    } else {
      dispatch({ type: FormModal_constants/* RESET_PROPS */.c2 });
    }
  }, [
    actionType,
    attributeName,
    attributeType,
    categoryName,
    dynamicZoneTarget,
    forTarget,
    isOpen,
    modalType
  ]);
  const isCreatingContentType = modalType === "contentType";
  const isCreatingComponent = modalType === "component";
  const isCreatingAttribute = modalType === "attribute";
  const isCreatingCustomFieldAttribute = modalType === "customField";
  const isComponentAttribute = attributeType === "component" && isCreatingAttribute;
  const isCreating = actionType === "create";
  const isCreatingComponentFromAView = get_default()(modifiedData, "createComponent", false) || isCreatingComponentWhileAddingAField;
  const isInFirstComponentStep = step === "1";
  const isEditingCategory = modalType === "editCategory";
  const isPickingAttribute = modalType === "chooseAttribute";
  const uid = (0,createUid/* createUid */.E)(modifiedData.displayName || "");
  const attributes = get_default()(allDataSchema, [...pathToSchema, "schema", "attributes"], null);
  const checkFormValidity = async () => {
    let schema;
    const dataToValidate = isCreatingComponentFromAView && step === "1" ? get_default()(modifiedData, "componentToCreate", {}) : modifiedData;
    if (isCreatingContentType) {
      schema = FormModal_forms.contentType.schema(
        Object.keys(contentTypes),
        actionType === "edit",
        // currentUID
        get_default()(allDataSchema, [...pathToSchema, "uid"], null),
        reservedNames,
        ctbFormsAPI,
        contentTypes
      );
    } else if (isCreatingComponent) {
      schema = FormModal_forms.component.schema(
        Object.keys(components),
        modifiedData.category || "",
        reservedNames,
        actionType === "edit",
        get_default()(allDataSchema, [...pathToSchema, "uid"], null),
        ctbFormsAPI
      );
    } else if (isCreatingCustomFieldAttribute) {
      schema = FormModal_forms.customField.schema({
        schemaAttributes: get_default()(allDataSchema, [...pathToSchema, "schema", "attributes"], []),
        attributeType: customField.type,
        reservedNames,
        schemaData: { modifiedData, initialData },
        ctbFormsAPI,
        customFieldValidator: customField.options?.validator
      });
    } else if (isComponentAttribute && isCreatingComponentFromAView && isInFirstComponentStep) {
      schema = FormModal_forms.component.schema(
        Object.keys(components),
        get_default()(modifiedData, "componentToCreate.category", ""),
        reservedNames,
        ctbFormsAPI
      );
    } else if (isCreatingAttribute && !isInFirstComponentStep) {
      const type = attributeType === "relation" ? "relation" : modifiedData.type;
      let alreadyTakenTargetContentTypeAttributes = [];
      if (type === "relation") {
        const targetContentTypeUID = get_default()(modifiedData, ["target"], null);
        const targetContentTypeAttributes = get_default()(
          contentTypes,
          [targetContentTypeUID, "schema", "attributes"],
          []
        );
        alreadyTakenTargetContentTypeAttributes = targetContentTypeAttributes.filter(
          ({ name: attrName }) => {
            if (actionType !== "edit") {
              return true;
            }
            return attrName !== initialData.targetAttribute;
          }
        );
      }
      schema = FormModal_forms.attribute.schema(
        get_default()(allDataSchema, pathToSchema, {}),
        type,
        reservedNames,
        alreadyTakenTargetContentTypeAttributes,
        { modifiedData, initialData },
        ctbFormsAPI
      );
    } else if (isEditingCategory) {
      schema = FormModal_forms.editCategory.schema(allComponentsCategories, initialData, ctbFormsAPI);
    } else {
      if (isInFirstComponentStep && isCreatingComponentFromAView) {
        schema = FormModal_forms.component.schema(
          Object.keys(components),
          get_default()(modifiedData, "componentToCreate.category", ""),
          reservedNames,
          ctbFormsAPI
        );
      } else {
        return;
      }
    }
    await schema.validate(dataToValidate, { abortEarly: false });
  };
  const handleChange = (0,react.useCallback)(
    ({ target: { name, value, type, ...rest } }) => {
      const namesThatCanResetToNullValue = [
        "enumName",
        "max",
        "min",
        "maxLength",
        "minLength",
        "regex",
        "default"
      ];
      let val;
      if (namesThatCanResetToNullValue.includes(name) && value === "") {
        val = null;
      } else {
        val = value;
      }
      const clonedErrors = Object.assign({}, formErrors);
      if (name === "max") {
        delete clonedErrors.min;
      }
      if (name === "maxLength") {
        delete clonedErrors.minLength;
      }
      delete clonedErrors[name];
      dispatch({
        type: FormModal_constants/* SET_ERRORS */.Ey,
        errors: clonedErrors
      });
      dispatch({
        type: FormModal_constants/* ON_CHANGE */.P0,
        keys: name.split("."),
        value: val,
        ...rest
      });
    },
    [dispatch, formErrors]
  );
  const handleSubmit = async (e, shouldContinue = isCreating) => {
    e.preventDefault();
    try {
      await checkFormValidity();
      sendButtonAddMoreFieldEvent(shouldContinue);
      const ctTargetUid = forTarget === "components" ? targetUid : uid;
      if (isCreatingContentType) {
        if (isCreating) {
          createSchema({ ...modifiedData, kind }, modalType, uid);
          push({ pathname: `/plugins/${pluginId/* default */.Z}/content-types/${uid}` });
          onNavigateToChooseAttributeModal({
            forTarget,
            targetUid: ctTargetUid
          });
        } else {
          if (utils_canEditContentType(allDataSchema, modifiedData)) {
            onCloseModal();
            submitData(modifiedData);
          } else {
            toggleNotification({
              type: "warning",
              message: { id: "notification.contentType.relations.conflict" }
            });
          }
          return;
        }
      } else if (modalType === "component") {
        if (isCreating) {
          const componentUid = (0,createUid/* createComponentUid */.N)(modifiedData.displayName, modifiedData.category);
          const { category, ...rest } = modifiedData;
          createSchema(rest, "component", componentUid, category);
          push({
            pathname: `/plugins/${pluginId/* default */.Z}/component-categories/${category}/${componentUid}`
          });
          onNavigateToChooseAttributeModal({
            forTarget,
            targetUid: componentUid
          });
        } else {
          updateSchema(modifiedData, modalType, targetUid);
          onCloseModal();
          return;
        }
      } else if (isEditingCategory) {
        if (toLower_default()(initialData.name) === toLower_default()(modifiedData.name)) {
          onCloseModal();
          return;
        }
        editCategory(initialData.name, modifiedData);
        return;
      } else if (isCreatingCustomFieldAttribute) {
        const customFieldAttributeUpdate = {
          attributeToSet: { ...modifiedData, customField: customFieldUid },
          forTarget,
          targetUid,
          initialAttribute: initialData
        };
        if (actionType === "edit") {
          editCustomFieldAttribute(customFieldAttributeUpdate);
        } else {
          addCustomFieldAttribute(customFieldAttributeUpdate);
        }
        if (shouldContinue) {
          onNavigateToChooseAttributeModal({
            forTarget,
            targetUid: ctTargetUid
          });
        } else {
          onCloseModal();
        }
        return;
      } else if (isCreatingAttribute && !isCreatingComponentFromAView) {
        const isDynamicZoneAttribute = attributeType === "dynamiczone";
        if (isDynamicZoneAttribute) {
          addAttribute(modifiedData, forTarget, targetUid, actionType === "edit", initialData);
          if (isCreating) {
            dispatch({
              type: FormModal_constants/* RESET_PROPS_AND_SET_THE_FORM_FOR_ADDING_A_COMPO_TO_A_DZ */.I
            });
            tabGroupRef.current._handlers.setSelectedTabIndex(0);
            onNavigateToAddCompoToDZModal({ dynamicZoneTarget: modifiedData.name });
          } else {
            onCloseModal();
          }
          return;
        }
        if (!isComponentAttribute) {
          addAttribute(modifiedData, forTarget, targetUid, actionType === "edit", initialData);
          if (shouldContinue) {
            onNavigateToChooseAttributeModal({
              forTarget,
              targetUid: ctTargetUid
            });
          } else {
            onCloseModal();
          }
          return;
        }
        if (isInFirstComponentStep) {
          onNavigateToCreateComponentStep2();
          dispatch({
            type: FormModal_constants/* RESET_PROPS_AND_SET_FORM_FOR_ADDING_AN_EXISTING_COMPO */.yC,
            forTarget
          });
          return;
        }
        addAttribute(
          modifiedData,
          forTarget,
          targetUid,
          // This change the dispatched type
          // either 'EDIT_ATTRIBUTE' or 'ADD_ATTRIBUTE' in the DataManagerProvider
          actionType === "edit",
          // This is for the edit part
          initialData,
          // Passing true will add the component to the components object
          // This way we can add fields to the added component (if it wasn't there already)
          true
        );
        if (shouldContinue) {
          onNavigateToChooseAttributeModal({
            forTarget,
            targetUid
          });
        } else {
          onCloseModal();
        }
      } else if (isCreatingAttribute && isCreatingComponentFromAView) {
        if (isInFirstComponentStep) {
          trackUsage("willCreateComponentFromAttributesModal");
          dispatch({
            type: FormModal_constants/* RESET_PROPS_AND_SAVE_CURRENT_DATA */.oF,
            forTarget
          });
          onNavigateToCreateComponentStep2();
          return;
        }
        const { category, type, ...rest } = componentToCreate;
        const componentUid = (0,createUid/* createComponentUid */.N)(componentToCreate.displayName, category);
        createSchema(
          // Component data
          rest,
          // Type will always be component
          // It will dispatch the CREATE_COMPONENT_SCHEMA action
          // So the component will be added in the main components object
          // This might not be needed if we don't allow navigation between entries while editing
          type,
          componentUid,
          category,
          // This will add the created component in the datamanager modifiedData components key
          // Like explained above we will be able to modify the created component structure
          isCreatingComponentFromAView
        );
        addAttribute(modifiedData, forTarget, targetUid, false);
        dispatch({ type: FormModal_constants/* RESET_PROPS */.c2 });
        if (shouldContinue) {
          onNavigateToChooseAttributeModal({ forTarget: "components", targetUid: componentUid });
        } else {
          onCloseModal();
        }
        return;
      } else {
        if (isInFirstComponentStep) {
          if (isCreatingComponentFromAView) {
            const { category, type, ...rest } = modifiedData.componentToCreate;
            const componentUid = (0,createUid/* createComponentUid */.N)(
              modifiedData.componentToCreate.displayName,
              category
            );
            createSchema(
              // Component data
              rest,
              // Type will always be component
              // It will dispatch the CREATE_COMPONENT_SCHEMA action
              // So the component will be added in the main components object
              // This might not be needed if we don't allow navigation between entries while editing
              type,
              componentUid,
              category,
              // This will add the created component in the datamanager modifiedData components key
              // Like explained above we will be able to modify the created component structure
              isCreatingComponentFromAView
            );
            addCreatedComponentToDynamicZone(dynamicZoneTarget, [componentUid]);
            onNavigateToChooseAttributeModal({ forTarget: "components", targetUid: componentUid });
          } else {
            changeDynamicZoneComponents(dynamicZoneTarget, modifiedData.components);
            onCloseModal();
          }
        } else {
          console.error("This case is not handled");
        }
        return;
      }
      dispatch({
        type: FormModal_constants/* RESET_PROPS */.c2
      });
    } catch (err) {
      const errors = (0,dist/* getYupInnerErrors */.CJ)(err);
      console.log({ err, errors });
      dispatch({
        type: FormModal_constants/* SET_ERRORS */.Ey,
        errors
      });
    }
  };
  const handleConfirmClose = () => {
    const confirm = window.confirm(
      formatMessage({
        id: "window.confirm.close-modal.file",
        defaultMessage: "Are you sure? Your changes will be lost."
      })
    );
    if (confirm) {
      onCloseModal();
      dispatch({
        type: FormModal_constants/* RESET_PROPS */.c2
      });
    }
  };
  const handleClosed = () => {
    if (!isEqual_default()(modifiedData, initialData)) {
      handleConfirmClose();
    } else {
      onCloseModal();
      dispatch({
        type: FormModal_constants/* RESET_PROPS */.c2
      });
    }
  };
  const sendAdvancedTabEvent = (tab) => {
    if (tab !== "advanced") {
      return;
    }
    if (isCreatingContentType) {
      trackUsage("didSelectContentTypeSettings");
      return;
    }
    if (forTarget === "contentType") {
      trackUsage("didSelectContentTypeFieldSettings");
    }
  };
  const sendButtonAddMoreFieldEvent = (shouldContinue) => {
    if (modalType === "attribute" && forTarget === "contentType" && attributeType !== "dynamiczone" && shouldContinue) {
      trackUsage("willAddMoreFieldToContentType");
    }
  };
  const shouldDisableAdvancedTab = () => {
    if (modalType === "editCategory") {
      return true;
    }
    if (modalType === "component") {
      return true;
    }
    if (has_default()(modifiedData, "createComponent")) {
      return true;
    }
    return false;
  };
  const displayedAttributes = getAttributesToDisplay(
    forTarget,
    targetUid,
    // We need the nested components so we know when to remove the component option
    nestedComponents
  );
  if (!isOpen) {
    return null;
  }
  if (!modalType) {
    return null;
  }
  const formToDisplay = get_default()(FormModal_forms, [modalType, "form"], {
    advanced: () => ({
      sections: []
    }),
    base: () => ({
      sections: []
    })
  });
  const isAddingAComponentToAnotherComponent = forTarget === "components" || forTarget === "component";
  const genericInputProps = {
    customInputs: {
      "allowed-types-select": components_AllowedTypesSelect,
      "boolean-radio-group": components_BooleanRadioGroup,
      "checkbox-with-number-field": components_CheckboxWithNumberField,
      "icon-picker": components_IconPicker,
      "content-type-radio-group": components_ContentTypeRadioGroup,
      "radio-group": components_CustomRadioGroup,
      relation: components_Relation,
      "select-category": components_SelectCategory,
      "select-component": components_SelectComponent,
      "select-components": components_SelectComponents,
      "select-default-boolean": components_BooleanDefaultValueSelect,
      "select-number": components_SelectNumber,
      "select-date": components_SelectDateType,
      "toggle-draft-publish": components_DraftAndPublishToggle,
      "text-plural": components_PluralName,
      "text-singular": components_SingularName,
      "textarea-enum": components_TextareaEnum,
      ...inputsFromPlugins
    },
    componentToCreate,
    dynamicZoneTarget,
    formErrors,
    isAddingAComponentToAnotherComponent,
    isCreatingComponentWhileAddingAField,
    mainBoxHeader: get_default()(allDataSchema, [...pathToSchema, "schema", "displayName"], ""),
    modifiedData,
    naturePickerType: forTarget,
    isCreating,
    targetUid,
    forTarget
  };
  const advancedForm = formToDisplay.advanced({
    data: modifiedData,
    type: attributeType,
    step,
    actionType,
    attributes,
    extensions: ctbFormsAPI,
    forTarget,
    contentTypeSchema: allDataSchema.contentType || {},
    customField
  }).sections;
  const baseForm = formToDisplay.base({
    data: modifiedData,
    type: attributeType,
    step,
    actionType,
    attributes,
    extensions: ctbFormsAPI,
    forTarget,
    contentTypeSchema: allDataSchema.contentType || {},
    customField
  }).sections;
  const baseFormInputNames = utils_getFormInputNames(baseForm);
  const advancedFormInputNames = utils_getFormInputNames(advancedForm);
  const doesBaseFormHasError = Object.keys(formErrors).some(
    (key) => baseFormInputNames.includes(key)
  );
  const doesAdvancedFormHasError = Object.keys(formErrors).some(
    (key) => advancedFormInputNames.includes(key)
  );
  const schemaKind = get_default()(contentTypes, [targetUid, "schema", "kind"]);
  const checkIsEditingFieldName = () => actionType === "edit" && attributes.every(({ name }) => name !== modifiedData?.name);
  const handleClickFinish = () => {
    if (checkIsEditingFieldName()) {
      trackUsage("didEditFieldNameOnContentType");
    }
  };
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose: handleClosed, labelledBy: "title" }, /* @__PURE__ */ react.createElement(
    components_FormModalHeader,
    {
      actionType,
      attributeName,
      categoryName,
      contentTypeKind: kind,
      dynamicZoneTarget,
      modalType,
      forTarget,
      targetUid,
      attributeType,
      customFieldUid,
      showBackLink
    }
  ), isPickingAttribute && /* @__PURE__ */ react.createElement(
    components_AttributeOptions,
    {
      attributes: displayedAttributes,
      forTarget,
      kind: schemaKind || "collectionType"
    }
  ), !isPickingAttribute && /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(
    TabGroup/* TabGroup */.v,
    {
      label: "todo",
      id: "tabs",
      variant: "simple",
      ref: tabGroupRef,
      onTabChange: (selectedTab) => {
        if (selectedTab === 1) {
          sendAdvancedTabEvent("advanced");
        }
      }
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(
      components_FormModalSubHeader,
      {
        actionType,
        forTarget,
        kind,
        step,
        modalType,
        attributeType,
        attributeName,
        customField
      }
    ), /* @__PURE__ */ react.createElement(Tabs/* Tabs */.m, null, /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, { hasError: doesBaseFormHasError }, formatMessage({
      id: (0,getTrad/* default */.Z)("popUpForm.navContainer.base"),
      defaultMessage: "Basic settings"
    })), /* @__PURE__ */ react.createElement(
      Tabs/* Tab */.O,
      {
        hasError: doesAdvancedFormHasError,
        disabled: shouldDisableAdvancedTab()
      },
      formatMessage({
        id: (0,getTrad/* default */.Z)("popUpForm.navContainer.advanced"),
        defaultMessage: "Advanced settings"
      })
    ))),
    /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null),
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 6 }, /* @__PURE__ */ react.createElement(TabPanels/* TabPanels */.n, null, /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 6 }, attributeType === "blocks" && /* @__PURE__ */ react.createElement(BetaFeatureAlert, null, formatMessage({
      id: (0,getTrad/* default */.Z)("form.feature.beta"),
      defaultMessage: "This feature is in Beta."
    })), /* @__PURE__ */ react.createElement(
      components_TabForm,
      {
        form: baseForm,
        formErrors,
        genericInputProps,
        modifiedData,
        onChange: handleChange
      }
    ))), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 6 }, attributeType === "blocks" && /* @__PURE__ */ react.createElement(BetaFeatureAlert, null, formatMessage({
      id: (0,getTrad/* default */.Z)("form.feature.beta"),
      defaultMessage: "This feature is in Beta."
    })), /* @__PURE__ */ react.createElement(
      components_TabForm,
      {
        form: advancedForm,
        formErrors,
        genericInputProps,
        modifiedData,
        onChange: handleChange
      }
    )))))
  )), /* @__PURE__ */ react.createElement(
    ModalFooter/* ModalFooter */.m,
    {
      endActions: /* @__PURE__ */ react.createElement(
        components_FormModalEndActions,
        {
          deleteCategory,
          deleteContentType: deleteData,
          deleteComponent: deleteData,
          categoryName: initialData.name,
          isAttributeModal: modalType === "attribute",
          isCustomFieldModal: modalType === "customField",
          isComponentToDzModal: modalType === "addComponentToDynamicZone",
          isComponentAttribute: attributeType === "component",
          isComponentModal: modalType === "component",
          isContentTypeModal: modalType === "contentType",
          isCreatingComponent: actionType === "create",
          isCreatingDz: actionType === "create",
          isCreatingComponentAttribute: modifiedData.createComponent || false,
          isCreatingComponentInDz: modifiedData.createComponent || false,
          isCreatingComponentWhileAddingAField,
          isCreatingContentType: actionType === "create",
          isEditingAttribute: actionType === "edit",
          isDzAttribute: attributeType === "dynamiczone",
          isEditingCategory: modalType === "editCategory",
          isInFirstComponentStep: step === "1",
          onSubmitAddComponentAttribute: handleSubmit,
          onSubmitAddComponentToDz: handleSubmit,
          onSubmitCreateComponent: handleSubmit,
          onSubmitCreateContentType: handleSubmit,
          onSubmitCreateDz: handleSubmit,
          onSubmitEditAttribute: handleSubmit,
          onSubmitEditCategory: handleSubmit,
          onSubmitEditComponent: handleSubmit,
          onSubmitEditContentType: handleSubmit,
          onSubmitEditCustomFieldAttribute: handleSubmit,
          onSubmitEditDz: handleSubmit,
          onClickFinish: handleClickFinish
        }
      ),
      startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "tertiary", onClick: handleClosed }, formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" }))
    }
  )));
};
/* harmony default export */ const components_FormModal = (FormModal);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/constants.js
var DataManagerProvider_constants = __webpack_require__(97699);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/reducer.js
var DataManagerProvider_reducer = __webpack_require__(21957);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/selectors.js



const dataManagerProviderDomain = () => (state) => state[`${pluginId/* default */.Z}_dataManagerProvider`] || DataManagerProvider_reducer/* initialState */.E;
const makeSelectDataManagerProvider = () => (0,reselect_es/* createSelector */.P1)(dataManagerProviderDomain(), (substate) => {
  return substate;
});
/* harmony default export */ const DataManagerProvider_selectors = (makeSelectDataManagerProvider);


// EXTERNAL MODULE: ./node_modules/lodash/camelCase.js
var camelCase = __webpack_require__(49204);
var camelCase_default = /*#__PURE__*/__webpack_require__.n(camelCase);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(74919);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(8243);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/cleanData.js







const getCreatedAndModifiedComponents = (allComponents, initialComponents) => {
  const componentUIDsToReturn = Object.keys(allComponents).filter((compoUid) => {
    const currentCompo = get_default()(allComponents, compoUid, {});
    const initialCompo = get_default()(initialComponents, compoUid, {});
    const hasComponentBeenCreated = get_default()(currentCompo, ["isTemporary"], false);
    const hasComponentBeenModified = !isEqual_default()(currentCompo, initialCompo);
    return hasComponentBeenCreated || hasComponentBeenModified;
  });
  return (0,makeUnique/* default */.Z)(componentUIDsToReturn);
};
const formatComponent = (component, mainDataUID) => {
  const formattedAttributes = formatAttributes(
    get_default()(component, "schema.attributes", []),
    mainDataUID
  );
  const compoUID = get_default()(component, "isTemporary", false) ? { tmpUID: component.uid } : { uid: component.uid };
  const formattedComponent = Object.assign(
    {},
    compoUID,
    { category: component.category },
    // Omit the attributes since we want to format them
    omit_default()(component.schema, "attributes"),
    // Add the formatted attributes
    { attributes: formattedAttributes }
  );
  return formattedComponent;
};
const formatMainDataType = (data, isComponent = false) => {
  const mainDataUID = get_default()(data, "uid", null);
  const formattedAttributes = formatAttributes(get_default()(data, "schema.attributes", []), mainDataUID);
  const initObj = isComponent ? { category: get_default()(data, "category", "") } : {};
  const formattedContentType = Object.assign(initObj, omit_default()(data.schema, "attributes"), {
    attributes: formattedAttributes
  });
  delete formattedContentType.uid;
  delete formattedContentType.isTemporary;
  delete formattedContentType.visible;
  delete formattedContentType.restrictRelationsTo;
  return formattedContentType;
};
const formatAttributes = (attributes, mainDataUID) => {
  return attributes.reduce((acc, { name, ...rest }) => {
    const currentAttribute = rest;
    const hasARelationWithMainDataUID = currentAttribute.target === mainDataUID;
    const isRelationType = currentAttribute.type === "relation";
    const currentTargetAttribute = get_default()(currentAttribute, "targetAttribute", null);
    if (!hasARelationWithMainDataUID) {
      if (isRelationType) {
        const relationAttr = Object.assign({}, currentAttribute, {
          targetAttribute: formatRelationTargetAttribute(currentTargetAttribute)
        });
        acc[name] = removeNullKeys(relationAttr);
      } else {
        acc[name] = removeNullKeys(currentAttribute);
      }
    }
    if (hasARelationWithMainDataUID) {
      const target = currentAttribute.target;
      const formattedRelationAttribute = Object.assign({}, currentAttribute, {
        target,
        targetAttribute: formatRelationTargetAttribute(currentTargetAttribute)
      });
      acc[name] = removeNullKeys(formattedRelationAttribute);
    }
    if (currentAttribute.customField) {
      const customFieldAttribute = { ...currentAttribute, type: "customField" };
      acc[name] = removeNullKeys(customFieldAttribute);
    }
    return acc;
  }, {});
};
const formatRelationTargetAttribute = (targetAttribute) => targetAttribute === "-" ? null : targetAttribute;
const removeNullKeys = (obj) => Object.keys(obj).reduce((acc, current) => {
  if (obj[current] !== null && current !== "plugin") {
    acc[current] = obj[current];
  }
  return acc;
}, {});
const getComponentsToPost = (allComponents, initialComponents, mainDataUID, isCreatingData = false) => {
  const componentsToFormat = getCreatedAndModifiedComponents(allComponents, initialComponents);
  const formattedComponents = componentsToFormat.map((compoUID) => {
    const currentCompo = get_default()(allComponents, compoUID, {});
    const formattedComponent = formatComponent(currentCompo, mainDataUID, isCreatingData);
    return formattedComponent;
  });
  return formattedComponents;
};
const sortContentType = (types) => sortBy_default()(
  Object.keys(types).map((uid) => ({
    visible: types[uid].schema.visible,
    name: uid,
    title: types[uid].schema.displayName,
    plugin: types[uid].plugin || null,
    uid,
    to: `/plugins/${pluginId/* default */.Z}/content-types/${uid}`,
    kind: types[uid].schema.kind,
    restrictRelationsTo: types[uid].schema.restrictRelationsTo
  })).filter((obj) => obj !== null),
  (obj) => camelCase_default()(obj.title)
);


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/createDataObject.js
const createDataObject = (arr) => arr.reduce((acc, current) => {
  acc[current.uid] = current;
  return acc;
}, {});
/* harmony default export */ const utils_createDataObject = (createDataObject);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/createModifiedDataSchema.js

const createModifiedDataSchema = (contentTypeSchema, retrievedComponents, allComponentsSchema, isInContentTypeView) => {
  const componentsAssociatedToContentType = retrievedComponents.reduce((acc, current) => {
    const componentSchema = get_default()(allComponentsSchema, current, {});
    acc[current] = componentSchema;
    return acc;
  }, {});
  const keyName = isInContentTypeView ? "contentType" : "component";
  const schema = {
    [keyName]: contentTypeSchema,
    components: componentsAssociatedToContentType
  };
  return schema;
};
/* harmony default export */ const utils_createModifiedDataSchema = (createModifiedDataSchema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/formatSchemas.js
const formatSchemas = (schemas) => {
  return Object.keys(schemas).reduce((acc, current) => {
    const schema = schemas[current].schema;
    acc[current] = {
      ...schemas[current],
      schema: { ...schema, attributes: toAttributesArray(schema.attributes) }
    };
    return acc;
  }, {});
};
const toAttributesArray = (attributes) => {
  return Object.keys(attributes).reduce((acc, current) => {
    acc.push({ ...attributes[current], name: current });
    return acc;
  }, []);
};
/* harmony default export */ const utils_formatSchemas = (formatSchemas);


// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/retrieveComponentsFromSchema.js
var retrieveComponentsFromSchema = __webpack_require__(26223);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/retrieveComponentsThatHaveComponents.js


const retrieveComponentsThatHaveComponents = (allComponents) => {
  const componentsThatHaveNestedComponents = Object.keys(allComponents).reduce((acc, current) => {
    const currentComponent = get_default()(allComponents, [current], {});
    const uid = currentComponent.uid;
    if (doesComponentHaveAComponentField(currentComponent)) {
      acc.push(uid);
    }
    return acc;
  }, []);
  return (0,makeUnique/* default */.Z)(componentsThatHaveNestedComponents);
};
const doesComponentHaveAComponentField = (component) => {
  const attributes = get_default()(component, ["schema", "attributes"], []);
  return attributes.some((attribute) => {
    const { type } = attribute;
    return type === "component";
  });
};


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/retrieveNestedComponents.js

const retrieveNestedComponents = (appComponents) => {
  const nestedComponents = Object.keys(appComponents).reduce((acc, current) => {
    const componentAttributes = appComponents?.[current]?.schema?.attributes ?? [];
    const currentComponentNestedCompos = getComponentsFromComponent(componentAttributes);
    return [...acc, ...currentComponentNestedCompos];
  }, []);
  return (0,makeUnique/* default */.Z)(nestedComponents);
};
const getComponentsFromComponent = (componentAttributes) => {
  return componentAttributes.reduce((acc, current) => {
    const { type, component } = current;
    if (type === "component") {
      acc.push(component);
    }
    return acc;
  }, []);
};
/* harmony default export */ const utils_retrieveNestedComponents = (retrieveNestedComponents);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/retrieveSpecificInfoFromComponents.js


const retrieveSpecificInfoFromComponents = (allComponents, keysToRetrieve) => {
  const allData = Object.keys(allComponents).map((compo) => {
    return get_default()(allComponents, [compo, ...keysToRetrieve], "");
  });
  return (0,makeUnique/* default */.Z)(allData);
};
/* harmony default export */ const utils_retrieveSpecificInfoFromComponents = (retrieveSpecificInfoFromComponents);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/serverRestartWatcher.js
const SERVER_HAS_NOT_BEEN_KILLED_MESSAGE = "did-not-kill-server";
const SERVER_HAS_BEEN_KILLED_MESSAGE = "server is down";
function serverRestartWatcher(response, didShutDownServer) {
  return new Promise((resolve) => {
    fetch(`${window.strapi.backendURL}/_health`, {
      method: "HEAD",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Keep-Alive": false
      }
    }).then((res) => {
      if (res.status >= 400) {
        throw new Error(SERVER_HAS_BEEN_KILLED_MESSAGE);
      }
      if (!didShutDownServer) {
        throw new Error(SERVER_HAS_NOT_BEEN_KILLED_MESSAGE);
      }
      resolve(response);
    }).catch((err) => {
      setTimeout(() => {
        return serverRestartWatcher(
          response,
          err.message !== SERVER_HAS_NOT_BEEN_KILLED_MESSAGE
        ).then(resolve);
      }, 100);
    });
  });
}

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/validateSchema.js
const validateSchema = (schema) => {
  const dynamicZoneAttributes = Object.values(schema.attributes).filter(
    ({ type }) => type === "dynamiczone"
  );
  return dynamicZoneAttributes.every(
    ({ components }) => Array.isArray(components) && components.length > 0
  );
};
/* harmony default export */ const utils_validateSchema = (validateSchema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/index.js





























const DataManagerProvider = ({
  children,
  components,
  contentTypes,
  isLoading,
  isLoadingForDataToBeSet,
  initialData,
  modifiedData,
  reservedNames
}) => {
  const dispatch = (0,es/* useDispatch */.I0)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { lockAppWithAutoreload, unlockAppWithAutoreload } = (0,dist/* useAutoReloadOverlayBlocker */.Vu)();
  const { setCurrentStep } = (0,dist/* useGuidedTour */.c1)();
  const { getPlugin } = (0,dist/* useStrapiApp */.j1)();
  const { apis } = getPlugin(pluginId/* default */.Z);
  const { autoReload } = (0,dist/* useAppInfo */.L7)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const { refetchPermissions } = (0,dist/* useRBACProvider */.vn)();
  const { pathname } = (0,react_router/* useLocation */.TH)();
  const { onCloseModal } = (0,useFormModalNavigation/* default */.Z)();
  const contentTypeMatch = (0,react_router/* useRouteMatch */.$B)(`/plugins/${pluginId/* default */.Z}/content-types/:uid`);
  const componentMatch = (0,react_router/* useRouteMatch */.$B)(
    `/plugins/${pluginId/* default */.Z}/component-categories/:categoryUid/:componentUid`
  );
  const fetchClient = (0,dist/* useFetchClient */.kY)();
  const { put, post, del } = fetchClient;
  const formatMessageRef = (0,react.useRef)();
  formatMessageRef.current = formatMessage;
  const isInDevelopmentMode = autoReload;
  const isInContentTypeView = contentTypeMatch !== null;
  const firstKeyToMainSchema = isInContentTypeView ? "contentType" : "component";
  const currentUid = isInContentTypeView ? get_default()(contentTypeMatch, "params.uid", null) : get_default()(componentMatch, "params.componentUid", null);
  const getDataRef = (0,react.useRef)();
  const endPoint = isInContentTypeView ? "content-types" : "components";
  getDataRef.current = async () => {
    try {
      const [
        {
          data: { data: componentsArray }
        },
        {
          data: { data: contentTypesArray }
        },
        { data: reservedNames2 }
      ] = await Promise.all(
        ["components", "content-types", "reserved-names"].map((endPoint2) => {
          return fetchClient.get(`/${pluginId/* default */.Z}/${endPoint2}`);
        })
      );
      const components2 = utils_createDataObject(componentsArray);
      const formattedComponents = utils_formatSchemas(components2);
      const contentTypes2 = utils_createDataObject(contentTypesArray);
      const formattedContentTypes = utils_formatSchemas(contentTypes2);
      dispatch({
        type: DataManagerProvider_constants/* GET_DATA_SUCCEEDED */.Id,
        components: formattedComponents,
        contentTypes: formattedContentTypes,
        reservedNames: reservedNames2
      });
    } catch (err) {
      console.error({ err });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    }
  };
  (0,react.useEffect)(() => {
    getDataRef.current();
    return () => {
      dispatch({ type: DataManagerProvider_constants/* RELOAD_PLUGIN */.Zl });
    };
  }, []);
  (0,react.useEffect)(() => {
    if (!isLoading && currentUid) {
      setModifiedData();
    }
  }, [isLoading, pathname, currentUid]);
  (0,react.useEffect)(() => {
    if (!autoReload) {
      toggleNotification({
        type: "info",
        message: { id: (0,getTrad/* default */.Z)("notification.info.autoreaload-disable") }
      });
    }
  }, [autoReload, toggleNotification]);
  const addAttribute = (attributeToSet, forTarget, targetUid, isEditing = false, initialAttribute, shouldAddComponentToData = false) => {
    const actionType = isEditing ? DataManagerProvider_constants/* EDIT_ATTRIBUTE */.JO : DataManagerProvider_constants/* ADD_ATTRIBUTE */.gz;
    dispatch({
      type: actionType,
      attributeToSet,
      forTarget,
      targetUid,
      initialAttribute,
      shouldAddComponentToData
    });
  };
  const addCustomFieldAttribute = ({ attributeToSet, forTarget, targetUid, initialAttribute }) => {
    dispatch({
      type: DataManagerProvider_constants/* ADD_CUSTOM_FIELD_ATTRIBUTE */.Ir,
      attributeToSet,
      forTarget,
      targetUid,
      initialAttribute
    });
  };
  const editCustomFieldAttribute = ({ attributeToSet, forTarget, targetUid, initialAttribute }) => {
    dispatch({
      type: DataManagerProvider_constants/* EDIT_CUSTOM_FIELD_ATTRIBUTE */.Ly,
      attributeToSet,
      forTarget,
      targetUid,
      initialAttribute
    });
  };
  const addCreatedComponentToDynamicZone = (dynamicZoneTarget, componentsToAdd) => {
    dispatch({
      type: DataManagerProvider_constants/* ADD_CREATED_COMPONENT_TO_DYNAMIC_ZONE */.Uu,
      dynamicZoneTarget,
      componentsToAdd
    });
  };
  const createSchema = (data, schemaType, uid, componentCategory, shouldAddComponentToData = false) => {
    const type = schemaType === "contentType" ? DataManagerProvider_constants/* CREATE_SCHEMA */.Sh : DataManagerProvider_constants/* CREATE_COMPONENT_SCHEMA */.VR;
    dispatch({
      type,
      data,
      componentCategory,
      schemaType,
      uid,
      shouldAddComponentToData
    });
  };
  const changeDynamicZoneComponents = (dynamicZoneTarget, newComponents) => {
    dispatch({
      type: DataManagerProvider_constants/* CHANGE_DYNAMIC_ZONE_COMPONENTS */.o_,
      dynamicZoneTarget,
      newComponents
    });
  };
  const removeAttribute = (mainDataKey, attributeToRemoveName, componentUid = "") => {
    const type = mainDataKey === "components" ? DataManagerProvider_constants/* REMOVE_FIELD_FROM_DISPLAYED_COMPONENT */.lw : DataManagerProvider_constants/* REMOVE_FIELD */.ai;
    if (mainDataKey === "contentType") {
      trackUsage("willDeleteFieldOfContentType");
    }
    dispatch({
      type,
      mainDataKey,
      attributeToRemoveName,
      componentUid
    });
  };
  const deleteCategory = async (categoryUid) => {
    try {
      const requestURL = `/${pluginId/* default */.Z}/component-categories/${categoryUid}`;
      const userConfirm = window.confirm(
        formatMessage({
          id: (0,getTrad/* default */.Z)("popUpWarning.bodyMessage.category.delete")
        })
      );
      onCloseModal();
      if (userConfirm) {
        lockAppWithAutoreload();
        await del(requestURL);
        await serverRestartWatcher(true);
        await unlockAppWithAutoreload();
        await updatePermissions();
      }
    } catch (err) {
      console.error({ err });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      unlockAppWithAutoreload();
    }
  };
  const deleteData = async () => {
    try {
      const requestURL = `/${pluginId/* default */.Z}/${endPoint}/${currentUid}`;
      const isTemporary = get_default()(modifiedData, [firstKeyToMainSchema, "isTemporary"], false);
      const userConfirm = window.confirm(
        formatMessage({
          id: (0,getTrad/* default */.Z)(
            `popUpWarning.bodyMessage.${isInContentTypeView ? "contentType" : "component"}.delete`
          )
        })
      );
      onCloseModal();
      if (userConfirm) {
        if (isTemporary) {
          dispatch({ type: DataManagerProvider_constants/* DELETE_NOT_SAVED_TYPE */.Ap });
          return;
        }
        lockAppWithAutoreload();
        await del(requestURL);
        await serverRestartWatcher(true);
        await unlockAppWithAutoreload();
        await updatePermissions();
      }
    } catch (err) {
      console.error({ err });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      unlockAppWithAutoreload();
    }
  };
  const editCategory = async (categoryUid, body) => {
    try {
      const requestURL = `/${pluginId/* default */.Z}/component-categories/${categoryUid}`;
      onCloseModal();
      lockAppWithAutoreload();
      await put(requestURL, body);
      await serverRestartWatcher(true);
      await unlockAppWithAutoreload();
      await updatePermissions();
    } catch (err) {
      console.error({ err });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      unlockAppWithAutoreload();
    }
  };
  const getAllComponentsThatHaveAComponentInTheirAttributes = () => {
    const allCompos = Object.assign({}, components, modifiedData.components);
    if (!isInContentTypeView) {
      const currentEditedCompo = get_default()(modifiedData, "component", {});
      set_default()(allCompos, get_default()(currentEditedCompo, ["uid"], ""), currentEditedCompo);
    }
    const composWithCompos = retrieveComponentsThatHaveComponents(allCompos);
    return (0,makeUnique/* default */.Z)(composWithCompos);
  };
  const getAllNestedComponents = () => {
    const appNestedCompo = utils_retrieveNestedComponents(components);
    const editingDataNestedCompos = utils_retrieveNestedComponents(modifiedData.components || {});
    return (0,makeUnique/* default */.Z)([...editingDataNestedCompos, ...appNestedCompo]);
  };
  const removeComponentFromDynamicZone = (dzName, componentToRemoveIndex) => {
    dispatch({
      type: DataManagerProvider_constants/* REMOVE_COMPONENT_FROM_DYNAMIC_ZONE */.NG,
      dzName,
      componentToRemoveIndex
    });
  };
  const setModifiedData = () => {
    const currentSchemas = isInContentTypeView ? contentTypes : components;
    const schemaToSet = get_default()(currentSchemas, currentUid, {
      schema: { attributes: [] }
    });
    const retrievedComponents = (0,retrieveComponentsFromSchema/* default */.Z)(
      schemaToSet.schema.attributes,
      components
    );
    const newSchemaToSet = utils_createModifiedDataSchema(
      schemaToSet,
      retrievedComponents,
      components,
      isInContentTypeView
    );
    const hasJustCreatedSchema = get_default()(schemaToSet, "isTemporary", false) && size_default()(get_default()(schemaToSet, "schema.attributes", [])) === 0;
    dispatch({
      type: DataManagerProvider_constants/* SET_MODIFIED_DATA */.xx,
      schemaToSet: newSchemaToSet,
      hasJustCreatedSchema
    });
  };
  const shouldRedirect = (0,react.useMemo)(() => {
    const dataSet = isInContentTypeView ? contentTypes : components;
    if (currentUid === "create-content-type") {
      return false;
    }
    return !Object.keys(dataSet).includes(currentUid) && !isLoading;
  }, [components, contentTypes, currentUid, isInContentTypeView, isLoading]);
  const redirectEndpoint = (0,react.useMemo)(() => {
    const allowedEndpoints = Object.keys(contentTypes).filter((uid) => get_default()(contentTypes, [uid, "schema", "visible"], true)).sort();
    return get_default()(allowedEndpoints, "0", "create-content-type");
  }, [contentTypes]);
  if (shouldRedirect) {
    return /* @__PURE__ */ react.createElement(react_router/* Redirect */.l_, { to: `/plugins/${pluginId/* default */.Z}/content-types/${redirectEndpoint}` });
  }
  const submitData = async (additionalContentTypeData) => {
    try {
      const isCreating = get_default()(modifiedData, [firstKeyToMainSchema, "isTemporary"], false);
      const body = {
        components: getComponentsToPost(
          modifiedData.components,
          components,
          currentUid,
          isCreating
        )
      };
      if (isInContentTypeView) {
        const contentType = apis.forms.mutateContentTypeSchema(
          {
            ...formatMainDataType(modifiedData.contentType),
            ...additionalContentTypeData
          },
          initialData.contentType
        );
        const isValidSchema = utils_validateSchema(contentType);
        if (!isValidSchema) {
          toggleNotification({
            type: "warning",
            message: {
              id: (0,getTrad/* default */.Z)("notification.error.dynamiczone-min.validation"),
              defaultMessage: "At least one component is required in a dynamic zone to be able to save a content type"
            }
          });
          return;
        }
        body.contentType = contentType;
        trackUsage("willSaveContentType");
      } else {
        body.component = formatMainDataType(modifiedData.component, true);
        trackUsage("willSaveComponent");
      }
      lockAppWithAutoreload();
      const baseURL = `/${pluginId/* default */.Z}/${endPoint}`;
      const requestURL = isCreating ? baseURL : `${baseURL}/${currentUid}`;
      if (isCreating) {
        await post(requestURL, body);
      } else {
        await put(requestURL, body);
      }
      await serverRestartWatcher(true);
      await unlockAppWithAutoreload();
      if (isCreating && (initialData.contentType?.schema.kind === "collectionType" || initialData.contentType?.schema.kind === "singleType")) {
        setCurrentStep("contentTypeBuilder.success");
      }
      if (isInContentTypeView) {
        trackUsage("didSaveContentType");
        const oldName = get_default()(body, ["contentType", "schema", "name"], "");
        const newName = get_default()(initialData, ["contentType", "schema", "name"], "");
        if (!isCreating && oldName !== newName) {
          trackUsage("didEditNameOfContentType");
        }
      } else {
        trackUsage("didSaveComponent");
      }
      await updatePermissions();
    } catch (err) {
      if (!isInContentTypeView) {
        trackUsage("didNotSaveComponent");
      }
      console.error({ err: err.response });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      unlockAppWithAutoreload();
    }
  };
  const updatePermissions = async () => {
    await refetchPermissions();
  };
  const updateSchema = (data, schemaType, componentUID) => {
    dispatch({
      type: DataManagerProvider_constants/* UPDATE_SCHEMA */.bi,
      data,
      schemaType,
      uid: componentUID
    });
  };
  return /* @__PURE__ */ react.createElement(
    DataManagerContext/* default */.Z.Provider,
    {
      value: {
        addAttribute,
        addCustomFieldAttribute,
        addCreatedComponentToDynamicZone,
        allComponentsCategories: utils_retrieveSpecificInfoFromComponents(components, ["category"]),
        changeDynamicZoneComponents,
        components,
        componentsGroupedByCategory: groupBy_default()(components, "category"),
        componentsThatHaveOtherComponentInTheirAttributes: getAllComponentsThatHaveAComponentInTheirAttributes(),
        contentTypes,
        createSchema,
        deleteCategory,
        deleteData,
        editCategory,
        editCustomFieldAttribute,
        isInDevelopmentMode,
        initialData,
        isInContentTypeView,
        modifiedData,
        nestedComponents: getAllNestedComponents(),
        removeAttribute,
        removeComponentFromDynamicZone,
        reservedNames,
        setModifiedData,
        sortedContentTypesList: sortContentType(contentTypes),
        submitData,
        updateSchema
      }
    },
    isLoadingForDataToBeSet ? /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null) : /* @__PURE__ */ react.createElement(react.Fragment, null, children, isInDevelopmentMode && /* @__PURE__ */ react.createElement(components_FormModal, null))
  );
};
DataManagerProvider.defaultProps = {
  components: {}
};
DataManagerProvider.propTypes = {
  children: (prop_types_default()).node.isRequired,
  components: (prop_types_default()).object,
  contentTypes: (prop_types_default()).object.isRequired,
  isLoading: (prop_types_default()).bool.isRequired,
  isLoadingForDataToBeSet: (prop_types_default()).bool.isRequired,
  initialData: (prop_types_default()).object.isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  reservedNames: (prop_types_default()).object.isRequired
};
const mapStateToProps = DataManagerProvider_selectors();
const withConnect = (0,es/* connect */.$j)(mapStateToProps, null);
/* harmony default export */ const components_DataManagerProvider = ((0,redux.compose)(withConnect)((0,react.memo)(DataManagerProvider)));

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/contexts/FormModalNavigationContext.js
var FormModalNavigationContext = __webpack_require__(6356);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModalNavigationProvider/constants.js
const INITIAL_STATE_DATA = {
  actionType: null,
  attributeName: null,
  attributeType: null,
  categoryName: null,
  dynamicZoneTarget: null,
  forTarget: null,
  modalType: null,
  isOpen: false,
  showBackLink: false,
  kind: null,
  step: null,
  targetUid: null,
  customFieldUid: null
};


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModalNavigationProvider/index.js





const FormModalNavigationProvider = ({ children }) => {
  const [state, setFormModalNavigationState] = (0,react.useState)(INITIAL_STATE_DATA);
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const onClickSelectCustomField = ({ attributeType, customFieldUid }) => {
    setFormModalNavigationState((prevState) => {
      return {
        ...prevState,
        actionType: "create",
        modalType: "customField",
        attributeType,
        customFieldUid
      };
    });
  };
  const onClickSelectField = ({ attributeType, step }) => {
    if (state.forTarget === "contentType") {
      trackUsage("didSelectContentTypeFieldType", { type: attributeType });
    }
    setFormModalNavigationState((prevState) => {
      return {
        ...prevState,
        actionType: "create",
        modalType: "attribute",
        step,
        attributeType,
        showBackLink: true
      };
    });
  };
  const onOpenModalAddComponentsToDZ = ({ dynamicZoneTarget, targetUid }) => {
    setFormModalNavigationState((prevState) => {
      return {
        ...prevState,
        dynamicZoneTarget,
        targetUid,
        modalType: "addComponentToDynamicZone",
        forTarget: "contentType",
        step: "1",
        actionType: "edit",
        isOpen: true
      };
    });
  };
  const onOpenModalAddField = ({ forTarget, targetUid }) => {
    setFormModalNavigationState((prevState) => {
      return {
        ...prevState,
        actionType: "create",
        forTarget,
        targetUid,
        modalType: "chooseAttribute",
        isOpen: true,
        showBackLink: false
      };
    });
  };
  const onOpenModalCreateSchema = (nextState) => {
    setFormModalNavigationState((prevState) => {
      return { ...prevState, ...nextState, isOpen: true };
    });
  };
  const onOpenModalEditCategory = (categoryName) => {
    setFormModalNavigationState((prevState) => {
      return {
        ...prevState,
        categoryName,
        actionType: "edit",
        modalType: "editCategory",
        isOpen: true
      };
    });
  };
  const onOpenModalEditCustomField = ({
    forTarget,
    targetUid,
    attributeName,
    attributeType,
    customFieldUid
  }) => {
    setFormModalNavigationState((prevState) => {
      return {
        ...prevState,
        modalType: "customField",
        customFieldUid,
        actionType: "edit",
        forTarget,
        targetUid,
        attributeName,
        attributeType,
        isOpen: true
      };
    });
  };
  const onOpenModalEditField = ({ forTarget, targetUid, attributeName, attributeType, step }) => {
    setFormModalNavigationState((prevState) => {
      return {
        ...prevState,
        modalType: "attribute",
        actionType: "edit",
        forTarget,
        targetUid,
        attributeName,
        attributeType,
        step,
        isOpen: true
      };
    });
  };
  const onOpenModalEditSchema = ({ modalType, forTarget, targetUid, kind }) => {
    setFormModalNavigationState((prevState) => {
      return {
        ...prevState,
        modalType,
        actionType: "edit",
        forTarget,
        targetUid,
        kind,
        isOpen: true
      };
    });
  };
  const onCloseModal = () => {
    setFormModalNavigationState(INITIAL_STATE_DATA);
  };
  const onNavigateToChooseAttributeModal = ({ forTarget, targetUid }) => {
    setFormModalNavigationState((prev) => {
      return {
        ...prev,
        forTarget,
        targetUid,
        modalType: "chooseAttribute"
      };
    });
  };
  const onNavigateToCreateComponentStep2 = () => {
    setFormModalNavigationState((prev) => {
      return {
        ...prev,
        attributeType: "component",
        modalType: "attribute",
        step: "2"
      };
    });
  };
  const onNavigateToAddCompoToDZModal = ({ dynamicZoneTarget }) => {
    setFormModalNavigationState((prev) => {
      return {
        ...prev,
        dynamicZoneTarget,
        modalType: "addComponentToDynamicZone",
        actionType: "create",
        step: "1",
        attributeType: null,
        attributeName: null
      };
    });
  };
  return /* @__PURE__ */ react.createElement(
    FormModalNavigationContext/* default */.Z.Provider,
    {
      value: {
        ...state,
        onClickSelectField,
        onClickSelectCustomField,
        onCloseModal,
        onNavigateToChooseAttributeModal,
        onNavigateToAddCompoToDZModal,
        onOpenModalAddComponentsToDZ,
        onNavigateToCreateComponentStep2,
        onOpenModalAddField,
        onOpenModalCreateSchema,
        onOpenModalEditCategory,
        onOpenModalEditField,
        onOpenModalEditCustomField,
        onOpenModalEditSchema,
        setFormModalNavigationState
      }
    },
    children
  );
};
FormModalNavigationProvider.propTypes = {
  children: (prop_types_default()).node.isRequired
};
/* harmony default export */ const components_FormModalNavigationProvider = (FormModalNavigationProvider);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/constants.js
var src_constants = __webpack_require__(5391);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/pages/RecursivePath/index.js



const ListView = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | content-type-builder-recursive-path */ 5905).then(__webpack_require__.bind(__webpack_require__, 3500))
);
const RecursivePath = () => {
  const { url } = (0,react_router/* useRouteMatch */.$B)();
  const { categoryUid } = (0,react_router/* useParams */.UO)();
  return /* @__PURE__ */ react.createElement(react.Suspense, { fallback: /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null) }, /* @__PURE__ */ react.createElement(react_router/* Switch */.rs, null, /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: `${url}/:componentUid` }, /* @__PURE__ */ react.createElement(ListView, { categoryId: categoryUid }))));
};
/* harmony default export */ const pages_RecursivePath = (RecursivePath);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/pages/App/index.js












const App_ListView = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | content-type-builder-list-view */ 5905).then(__webpack_require__.bind(__webpack_require__, 3500))
);
const App = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const title = formatMessage({
    id: `${pluginId/* default */.Z}.plugin.name`,
    defaultMessage: "Content Types Builder"
  });
  const { startSection } = (0,dist/* useGuidedTour */.c1)();
  const startSectionRef = (0,react.useRef)(startSection);
  (0,react.useEffect)(() => {
    if (startSectionRef.current) {
      startSectionRef.current("contentTypeBuilder");
    }
  }, []);
  return /* @__PURE__ */ react.createElement(dist/* CheckPagePermissions */.O4, { permissions: src_constants/* PERMISSIONS */._.main }, /* @__PURE__ */ react.createElement(Helmet/* Helmet */.q, { title }), /* @__PURE__ */ react.createElement(components_FormModalNavigationProvider, null, /* @__PURE__ */ react.createElement(components_DataManagerProvider, null, /* @__PURE__ */ react.createElement(Layout/* Layout */.A, { sideNav: /* @__PURE__ */ react.createElement(components_ContentTypeBuilderNav, null) }, /* @__PURE__ */ react.createElement(react.Suspense, { fallback: /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null) }, /* @__PURE__ */ react.createElement(react_router/* Switch */.rs, null, /* @__PURE__ */ react.createElement(
    react_router/* Route */.AW,
    {
      path: `/plugins/${pluginId/* default */.Z}/content-types/create-content-type`,
      component: App_ListView
    }
  ), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: `/plugins/${pluginId/* default */.Z}/content-types/:uid`, component: App_ListView }), /* @__PURE__ */ react.createElement(
    react_router/* Route */.AW,
    {
      path: `/plugins/${pluginId/* default */.Z}/component-categories/:categoryUid`,
      component: pages_RecursivePath
    }
  )))))));
};
/* harmony default export */ const pages_App = (App);


/***/ }),

/***/ 90635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pluginId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72966);

const getTrad = (id) => `${_pluginId__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z}.${id}`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTrad);


/***/ }),

/***/ 1107:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(84856), createBaseEach = __webpack_require__(52593);
var baseEach = createBaseEach(baseForOwn);
module.exports = baseEach;


/***/ }),

/***/ 22107:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(13578), isObjectLike = __webpack_require__(27138);
var regexpTag = "[object RegExp]";
function baseIsRegExp(value) {
  return isObjectLike(value) && baseGetTag(value) == regexpTag;
}
module.exports = baseIsRegExp;


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

/***/ 50156:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsRegExp = __webpack_require__(22107), baseUnary = __webpack_require__(20435), nodeUtil = __webpack_require__(25336);
var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;
var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
module.exports = isRegExp;


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

/***/ 88702:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(63546), castSlice = __webpack_require__(82311), hasUnicode = __webpack_require__(11993), isObject = __webpack_require__(3243), isRegExp = __webpack_require__(50156), stringSize = __webpack_require__(30930), stringToArray = __webpack_require__(66734), toInteger = __webpack_require__(69740), toString = __webpack_require__(16946);
var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
var reFlags = /\w*$/;
function truncate(string, options) {
  var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
  if (isObject(options)) {
    var separator = "separator" in options ? options.separator : separator;
    length = "length" in options ? toInteger(options.length) : length;
    omission = "omission" in options ? baseToString(options.omission) : omission;
  }
  string = toString(string);
  var strLength = string.length;
  if (hasUnicode(string)) {
    var strSymbols = stringToArray(string);
    strLength = strSymbols.length;
  }
  if (length >= strLength) {
    return string;
  }
  var end = length - stringSize(omission);
  if (end < 1) {
    return omission;
  }
  var result = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
  if (separator === void 0) {
    return result + omission;
  }
  if (strSymbols) {
    end += result.length - end;
  }
  if (isRegExp(separator)) {
    if (string.slice(end).search(separator)) {
      var match, substring = result;
      if (!separator.global) {
        separator = RegExp(separator.source, toString(reFlags.exec(separator)) + "g");
      }
      separator.lastIndex = 0;
      while (match = separator.exec(substring)) {
        var newEnd = match.index;
      }
      result = result.slice(0, newEnd === void 0 ? end : newEnd);
    }
  } else if (string.indexOf(baseToString(separator), end) != end) {
    var index = result.lastIndexOf(separator);
    if (index > -1) {
      result = result.slice(0, index);
    }
  }
  return result + omission;
}
module.exports = truncate;


/***/ }),

/***/ 57150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P1: () => (/* binding */ createSelector)
});

// UNUSED EXPORTS: createSelectorCreator, createStructuredSelector, defaultEqualityCheck, defaultMemoize

;// CONCATENATED MODULE: ./node_modules/reselect/es/defaultMemoize.js
var NOT_FOUND = "NOT_FOUND";
function createSingletonCache(equals) {
  var entry;
  return {
    get: function get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }
      return NOT_FOUND;
    },
    put: function put(key, value) {
      entry = {
        key,
        value
      };
    },
    getEntries: function getEntries() {
      return entry ? [entry] : [];
    },
    clear: function clear() {
      entry = void 0;
    }
  };
}
function createLruCache(maxSize, equals) {
  var entries = [];
  function get(key) {
    var cacheIndex = entries.findIndex(function(entry2) {
      return equals(key, entry2.key);
    });
    if (cacheIndex > -1) {
      var entry = entries[cacheIndex];
      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }
      return entry.value;
    }
    return NOT_FOUND;
  }
  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      entries.unshift({
        key,
        value
      });
      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }
  function getEntries() {
    return entries;
  }
  function clear() {
    entries = [];
  }
  return {
    get,
    put,
    getEntries,
    clear
  };
}
var defaultEqualityCheck = function defaultEqualityCheck2(a, b) {
  return a === b;
};
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    }
    var length = prev.length;
    for (var i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }
    return true;
  };
}
function defaultMemoize(func, equalityCheckOrOptions) {
  var providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : {
    equalityCheck: equalityCheckOrOptions
  };
  var _providedOptions$equa = providedOptions.equalityCheck, equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa, _providedOptions$maxS = providedOptions.maxSize, maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS, resultEqualityCheck = providedOptions.resultEqualityCheck;
  var comparator = createCacheKeyComparator(equalityCheck);
  var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
  function memoized() {
    var value = cache.get(arguments);
    if (value === NOT_FOUND) {
      value = func.apply(null, arguments);
      if (resultEqualityCheck) {
        var entries = cache.getEntries();
        var matchingEntry = entries.find(function(entry) {
          return resultEqualityCheck(entry.value, value);
        });
        if (matchingEntry) {
          value = matchingEntry.value;
        }
      }
      cache.put(arguments, value);
    }
    return value;
  }
  memoized.clearCache = function() {
    return cache.clear();
  };
  return memoized;
}

;// CONCATENATED MODULE: ./node_modules/reselect/es/index.js


function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
  if (!dependencies.every(function(dep) {
    return typeof dep === "function";
  })) {
    var dependencyTypes = dependencies.map(function(dep) {
      return typeof dep === "function" ? "function " + (dep.name || "unnamed") + "()" : typeof dep;
    }).join(", ");
    throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
  }
  return dependencies;
}
function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptionsFromArgs[_key - 1] = arguments[_key];
  }
  var createSelector2 = function createSelector3() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }
    var _recomputations = 0;
    var _lastResult;
    var directlyPassedOptions = {
      memoizeOptions: void 0
    };
    var resultFunc = funcs.pop();
    if (typeof resultFunc === "object") {
      directlyPassedOptions = resultFunc;
      resultFunc = funcs.pop();
    }
    if (typeof resultFunc !== "function") {
      throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
    }
    var _directlyPassedOption = directlyPassedOptions, _directlyPassedOption2 = _directlyPassedOption.memoizeOptions, memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2;
    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
    var dependencies = getDependencies(funcs);
    var memoizedResultFunc = memoize.apply(void 0, [function recomputationWrapper() {
      _recomputations++;
      return resultFunc.apply(null, arguments);
    }].concat(finalMemoizeOptions));
    var selector = memoize(function dependenciesChecker() {
      var params = [];
      var length = dependencies.length;
      for (var i = 0; i < length; i++) {
        params.push(dependencies[i].apply(null, arguments));
      }
      _lastResult = memoizedResultFunc.apply(null, params);
      return _lastResult;
    });
    Object.assign(selector, {
      resultFunc,
      memoizedResultFunc,
      dependencies,
      lastResult: function lastResult() {
        return _lastResult;
      },
      recomputations: function recomputations() {
        return _recomputations;
      },
      resetRecomputations: function resetRecomputations() {
        return _recomputations = 0;
      }
    });
    return selector;
  };
  return createSelector2;
}
var createSelector = /* @__PURE__ */ createSelectorCreator(defaultMemoize);
var createStructuredSelector = function createStructuredSelector2(selectors, selectorCreator) {
  if (selectorCreator === void 0) {
    selectorCreator = createSelector;
  }
  if (typeof selectors !== "object") {
    throw new Error("createStructuredSelector expects first argument to be an object " + ("where each property is a selector, instead received a " + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  var resultSelector = selectorCreator(
    // @ts-ignore
    objectKeys.map(function(key) {
      return selectors[key];
    }),
    function() {
      for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        values[_key3] = arguments[_key3];
      }
      return values.reduce(function(composition, value, index) {
        composition[objectKeys[index]] = value;
        return composition;
      }, {});
    }
  );
  return resultSelector;
};


/***/ }),

/***/ 61181:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ MultiSelectNested)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37652);
/* harmony import */ var _MultiSelect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97232);



const MultiSelectNested = ({ options, ...props }) => {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MultiSelect_mjs__WEBPACK_IMPORTED_MODULE_1__/* .MultiSelect */ .NU, { ...props, children: options.map((opt) => {
    if ("children" in opt) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MultiSelect_mjs__WEBPACK_IMPORTED_MODULE_1__/* .MultiSelectGroup */ .Ab, { label: opt.label, values: opt.children.map((child) => child.value.toString()), children: opt.children.map((child) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NestedOption, { value: child.value, children: child.label }, child.value)) }, opt.label);
    }
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MultiSelect_mjs__WEBPACK_IMPORTED_MODULE_1__/* .MultiSelectOption */ .ML, { value: opt.value, children: opt.label }, opt.value);
  }) });
};
const NestedOption = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_MultiSelect_mjs__WEBPACK_IMPORTED_MODULE_1__/* .MultiSelectOption */ .ML))`
  padding-left: ${({ theme }) => theme.spaces[7]};
`;



/***/ }),

/***/ 53274:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);

const o = (r) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...r, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    d: "M0 10.7c0-.11.09-.2.2-.2h18.06l-8.239-8.239a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L23.86 11.86a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L10.02 22.02a.2.2 0 0 1 0-.282L18.26 13.5H.2a.2.2 0 0 1-.2-.2v-2.6Z"
  }
) }), h = o;



/***/ }),

/***/ 42108:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);

const o = (v) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...v, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    d: "M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7Zm-6-2v-2h6v2h6v-3H6.5a1.5 1.5 0 1 0 0 3H7ZM7 5v2h2V5H7Zm0 3v2h2V8H7Zm0 3v2h2v-2H7Z"
  }
) }), e = o;



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



/***/ }),

/***/ 68285:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);

const h = (t) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...t, children: [
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { fill: "#212134", d: "M11.987 23.036v-.964H1.876V1.876h10.111V0H0v24h11.987v-.964Z" }),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      fill: "#212134",
      d: "M8 11.2c0-.11.09-.2.2-.2h11.973l-5.445-5.445a.2.2 0 0 1 0-.283l1.13-1.13a.2.2 0 0 1 .283 0l7.718 7.717a.2.2 0 0 1 0 .282L16.14 19.86a.2.2 0 0 1-.282 0l-1.13-1.13a.2.2 0 0 1 0-.284L20.172 13H8.2a.2.2 0 0 1-.2-.2v-1.6Z"
    }
  )
] }), s = h;



/***/ }),

/***/ 50862:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);

const v = (h) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...h, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    d: "M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455ZM7 10v2h2v-2H7Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2Z"
  }
) }), t = v;



/***/ }),

/***/ 13789:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);

const t = (l) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...l, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    d: "M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.53-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685Z"
  }
) }), n = t;



/***/ }),

/***/ 64820:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);

const e = (t) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 8 8", ...t, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { fill: "#212134", d: "M2 .93c0-.4.45-.63.78-.41l4.6 3.06c.3.2.3.64 0 .84l-4.6 3.06A.5.5 0 0 1 2 7.07V.93Z" }) }), i = e;



/***/ }),

/***/ 72535:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);

const a = (e) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 25 25", ...e, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    fillRule: "evenodd",
    d: "m13.58.448 3.177 3.176L18.66 1.72a3.267 3.267 0 1 1 4.62 4.62l-1.904 1.904 3.175 3.175a1.528 1.528 0 0 1 0 2.162l-3.175 3.175L20.2 15.58a3.267 3.267 0 1 0-4.62 4.62l1.177 1.177-3.176 3.176a1.528 1.528 0 0 1-2.162 0l-3.175-3.175-1.902 1.902a3.267 3.267 0 1 1-4.62-4.62l1.902-1.902-3.176-3.176a1.528 1.528 0 0 1 0-2.162l3.176-3.176L4.8 9.42a3.267 3.267 0 0 0 4.62-4.62L8.244 3.623 11.419.448a1.528 1.528 0 0 1 2.162 0Z",
    clipRule: "evenodd"
  }
) }), t = a;



/***/ }),

/***/ 13317:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);

const o = (e) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 15 14", ...e, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    d: "M5.08 4.1c0-1.19 1.18-2.17 2.42-2.17s2.43.98 2.43 2.17c0 1.1-.56 1.61-1.31 2.28l-.03.03c-.75.65-1.66 1.47-1.66 3.09a.57.57 0 1 0 1.15 0c0-1.08.55-1.6 1.3-2.26l.02-.02c.75-.66 1.67-1.48 1.67-3.12C11.07 2.13 9.22.78 7.5.78 5.78.78 3.93 2.13 3.93 4.1a.57.57 0 1 0 1.15 0Zm2.42 9.26a.88.88 0 1 0 0-1.75.88.88 0 0 0 0 1.75Z"
  }
) }), i = o;



/***/ }),

/***/ 86874:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);

const o = (l) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...l, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    fillRule: "evenodd",
    d: "M23.12 3.907c-.025 0-.055-.005-.087-.011a.72.72 0 0 0-.13-.016H5.929l-.27-1.805A2.413 2.413 0 0 0 3.26 0H1.078C.485 0 0 .485 0 1.078c0 .593.485 1.078 1.078 1.078H3.26c.135 0 .243.107.27.242L5.2 13.77a2.954 2.954 0 0 0 2.91 2.506h11.21c1.401 0 2.614-.997 2.91-2.371l1.752-8.757a1.065 1.065 0 0 0-.863-1.24Zm-4.932 13.927a2.8 2.8 0 0 0-2.802 2.802 2.8 2.8 0 0 0 2.802 2.802 2.8 2.8 0 0 0 2.803-2.802c-.027-1.536-1.267-2.802-2.803-2.802Zm-9.646 0a2.786 2.786 0 0 1 2.775 2.667c.081 1.536-1.132 2.83-2.667 2.91h-.054a2.762 2.762 0 0 1-2.749-2.667 2.819 2.819 0 0 1 2.695-2.91Z",
    clipRule: "evenodd"
  }
) }), a = o;



/***/ }),

/***/ 30984:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ v)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);

const l = (e) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    fillRule: "evenodd",
    d: "M23.707.297A1 1 0 0 0 23 .004h-2a13.907 13.907 0 0 0-5.38 1.077 1 1 0 0 0-.615.923V4.92a.035.035 0 0 1-.022.038l-2-1.47a1 1 0 0 0-1.265.052A14 14 0 0 0 7 14.004v1.585l-2.707 2.707a1 1 0 1 0 1.415 1.415l2.707-2.708H10a14.014 14.014 0 0 0 14-14v-2a1 1 0 0 0-.293-.706ZM18 23.999H3a3 3 0 0 1-3-3V6A3 3 0 0 1 3 3h3a1 1 0 1 1 0 2H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3Z",
    clipRule: "evenodd"
  }
) }), v = l;



/***/ })

}]);