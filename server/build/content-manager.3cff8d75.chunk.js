(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[994],{

/***/ 75286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ useDebounce)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(value);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}


/***/ }),

/***/ 85602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  App: () => (/* binding */ App),
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(73354);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(27875);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.mjs
var Layout = __webpack_require__(27997);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(8243);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(364);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(49402);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(51447);
// EXTERNAL MODULE: ./.cache/admin/src/components/DragLayer.tsx
var DragLayer = __webpack_require__(40784);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/selectors.js
var selectors = __webpack_require__(36364);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/contexts/ModelsContext.js

const ModelsContext = (0,react.createContext)();
/* harmony default export */ const contexts_ModelsContext = (ModelsContext);

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/utils/getTrad.js
var getTrad = __webpack_require__(45283);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/utils/ItemTypes.js
var ItemTypes = __webpack_require__(56837);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70627);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-error-boundary/dist/react-error-boundary.umd.js
var react_error_boundary_umd = __webpack_require__(70211);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/contexts/ContentTypeLayout.js

const ContentTypeLayout = (0,react.createContext)();
/* harmony default export */ const contexts_ContentTypeLayout = (ContentTypeLayout);

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/contexts/Wysiwyg.js
var Wysiwyg = __webpack_require__(27661);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/contexts/index.js



// EXTERNAL MODULE: ./.cache/admin/src/content-manager/hooks/index.js + 13 modules
var hooks = __webpack_require__(21440);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/utils/index.js + 11 modules
var utils = __webpack_require__(21892);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48102);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(74758);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(93415);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(23298);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(74577);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.mjs
var Select = __webpack_require__(5627);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.mjs
var Option = __webpack_require__(78955);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.mjs
var Divider = __webpack_require__(84366);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.mjs
var ArrowLeft = __webpack_require__(76827);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(59082);
// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(8175);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(6078);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(51943);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var react_query_es = __webpack_require__(40464);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/pages/App/selectors.js
var App_selectors = __webpack_require__(42225);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SimpleMenu/Menu.mjs + 10 modules
var Menu = __webpack_require__(81740);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.mjs
var Plus = __webpack_require__(36938);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.mjs
var Pencil = __webpack_require__(26784);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(98934);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/LayoutDndProvider/index.js


const LayoutDndContext = react.createContext();
function LayoutDndProvider({
  attributes,
  buttonData,
  children,
  goTo,
  layout,
  metadatas,
  moveItem,
  moveRow,
  onAddData,
  relationsLayout,
  removeField,
  selectedItemName,
  setEditFieldToSelect,
  ...rest
}) {
  return /* @__PURE__ */ react.createElement(
    LayoutDndContext.Provider,
    {
      value: {
        attributes,
        buttonData,
        goTo,
        layout,
        metadatas,
        moveItem,
        moveRow,
        onAddData,
        relationsLayout,
        removeField,
        selectedItemName,
        setEditFieldToSelect,
        ...rest
      }
    },
    children
  );
}
LayoutDndProvider.defaultProps = {
  attributes: {},
  buttonData: [],
  goTo() {
  },
  layout: [],
  metadatas: {},
  moveItem() {
  },
  moveRow() {
  },
  onAddData() {
  },
  relationsLayout: [],
  removeField() {
  },
  selectedItemName: null,
  setEditFieldToSelect() {
  }
};
LayoutDndProvider.propTypes = {
  attributes: (prop_types_default()).object,
  buttonData: (prop_types_default()).array,
  children: (prop_types_default()).node.isRequired,
  goTo: (prop_types_default()).func,
  layout: (prop_types_default()).array,
  metadatas: (prop_types_default()).object,
  moveItem: (prop_types_default()).func,
  moveRow: (prop_types_default()).func,
  onAddData: (prop_types_default()).func,
  relationsLayout: (prop_types_default()).array,
  removeField: (prop_types_default()).func,
  selectedItemName: (prop_types_default()).string,
  setEditFieldToSelect: (prop_types_default()).func
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/hooks/useLayoutDnd.js


function useLayoutDnd() {
  return react.useContext(LayoutDndContext);
}

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/LinkToCTB.js







const permissions = [{ action: "plugin::content-type-builder.read", subject: null }];
const LinkToCTB = () => {
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { slug, modifiedData, isContentTypeView } = useLayoutDnd();
  const type = isContentTypeView ? "content-types" : "components";
  const baseUrl = `/plugins/content-type-builder/${type === "content-types" ? type : "component-categories"}`;
  const category = get_default()(modifiedData, "category", "");
  const suffixUrl = type === "content-types" ? slug : `${category}/${slug}`;
  const handleClick = () => {
    trackUsage("willEditEditLayout");
  };
  if (slug === "strapi::administrator") {
    return null;
  }
  return /* @__PURE__ */ react.createElement(dist/* CheckPermissions */.jW, { permissions }, /* @__PURE__ */ react.createElement(
    dist/* LinkButton */.Qj,
    {
      to: `${baseUrl}/${suffixUrl}`,
      onClick: handleClick,
      size: "S",
      startIcon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null),
      variant: "secondary"
    },
    formatMessage({
      id: (0,getTrad/* default */.Z)(`edit-settings-view.link-to-ctb.${type}`),
      defaultMessage: "Edit the content type"
    })
  ));
};
/* harmony default export */ const components_LinkToCTB = (LinkToCTB);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Drag.mjs
var Drag = __webpack_require__(33039);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/cjs/index.js
var cjs = __webpack_require__(67621);
// EXTERNAL MODULE: ./node_modules/react-dnd-html5-backend/dist/cjs/index.js
var dist_cjs = __webpack_require__(92241);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(37652);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(4987);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.mjs
var Trash = __webpack_require__(78665);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cog.mjs
var Cog = __webpack_require__(35318);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/ComponentFieldList.js









const ComponentFieldList = ({ componentUid }) => {
  const { componentLayouts } = useLayoutDnd();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const componentData = get_default()(componentLayouts, [componentUid], {});
  const componentLayout = get_default()(componentData, ["layouts", "edit"], []);
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 3 }, componentLayout.map((row, index) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4, key: index }, row.map((rowContent) => /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { key: rowContent.name, col: rowContent.size }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 2 }, /* @__PURE__ */ react.createElement(
      Flex/* Flex */.k,
      {
        alignItems: "center",
        background: "neutral0",
        paddingLeft: 3,
        paddingRight: 3,
        height: `${32 / 16}rem`,
        hasRadius: true,
        borderColor: "neutral200"
      },
      /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, rowContent.name)
    )))))
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 2 }, /* @__PURE__ */ react.createElement(
    dist/* Link */.rU,
    {
      startIcon: /* @__PURE__ */ react.createElement(Cog/* default */.Z, null),
      to: `/content-manager/components/${componentUid}/configurations/edit`
    },
    formatMessage({
      id: (0,getTrad/* default */.Z)("components.FieldItem.linkToComponentLayout"),
      defaultMessage: "Set the component's layout"
    })
  )));
};
ComponentFieldList.propTypes = {
  componentUid: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_ComponentFieldList = (ComponentFieldList);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(47533);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.mjs
var Icon = __webpack_require__(50703);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Alien.mjs
var Alien = __webpack_require__(56692);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Apps.mjs
var Apps = __webpack_require__(79131);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Archive.mjs
var Archive = __webpack_require__(53264);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowDown.mjs
var ArrowDown = __webpack_require__(93454);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowRight.mjs
var ArrowRight = __webpack_require__(53274);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowUp.mjs
var ArrowUp = __webpack_require__(45684);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Attachment.mjs
var Attachment = __webpack_require__(7559);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Bell.mjs
var Bell = __webpack_require__(31654);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Bold.mjs
var Bold = __webpack_require__(18334);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Book.mjs
var Book = __webpack_require__(42108);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Briefcase.mjs
var Briefcase = __webpack_require__(32721);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Brush.mjs
var Brush = __webpack_require__(67224);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/BulletList.mjs
var BulletList = __webpack_require__(20316);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Calendar.mjs
var Calendar = __webpack_require__(36974);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Car.mjs
var Car = __webpack_require__(8419);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cast.mjs
var Cast = __webpack_require__(42190);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ChartBubble.mjs
var ChartBubble = __webpack_require__(3232);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ChartCircle.mjs
var ChartCircle = __webpack_require__(4896);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ChartPie.mjs
var ChartPie = __webpack_require__(64386);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Clock.mjs
var Clock = __webpack_require__(73192);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cloud.mjs
var Cloud = __webpack_require__(98430);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Code.mjs
var Code = __webpack_require__(74002);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Collapse.mjs
var Collapse = __webpack_require__(70743);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Command.mjs
var Command = __webpack_require__(38724);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Connector.mjs
var Connector = __webpack_require__(94187);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Crop.mjs
var Crop = __webpack_require__(70415);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Crown.mjs
var Crown = __webpack_require__(86463);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cube.mjs
var Cube = __webpack_require__(71267);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cup.mjs
var Cup = __webpack_require__(61646);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cursor.mjs
var Cursor = __webpack_require__(92518);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Dashboard.mjs
var Dashboard = __webpack_require__(67890);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Database.mjs
var Database = __webpack_require__(95957);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Discuss.mjs
var Discuss = __webpack_require__(20184);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Doctor.mjs
var Doctor = __webpack_require__(54285);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Earth.mjs
var Earth = __webpack_require__(7995);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmotionHappy.mjs
var EmotionHappy = __webpack_require__(47241);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmotionUnhappy.mjs
var EmotionUnhappy = __webpack_require__(87532);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Envelop.mjs
var Envelop = __webpack_require__(16543);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Exit.mjs
var Exit = __webpack_require__(68285);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Expand.mjs
var Expand = __webpack_require__(271);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Eye.mjs
var Eye = __webpack_require__(98264);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Feather.mjs
var Feather = __webpack_require__(89824);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/File.mjs
var dist_File = __webpack_require__(89906);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/FileError.mjs
var FileError = __webpack_require__(47278);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/FilePdf.mjs
var FilePdf = __webpack_require__(66390);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Filter.mjs
var Filter = __webpack_require__(57121);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Folder.mjs
var Folder = __webpack_require__(61287);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Gate.mjs
var Gate = __webpack_require__(84670);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Gift.mjs
var Gift = __webpack_require__(56074);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Globe.mjs
var Globe = __webpack_require__(20302);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Grid.mjs
var dist_Grid = __webpack_require__(66351);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/HandHeart.mjs
var HandHeart = __webpack_require__(59453);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Hashtag.mjs
var Hashtag = __webpack_require__(99001);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Headphone.mjs
var Headphone = __webpack_require__(11618);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Heart.mjs
var Heart = __webpack_require__(36952);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/House.mjs
var House = __webpack_require__(53723);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Information.mjs
var Information = __webpack_require__(42679);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Italic.mjs
var Italic = __webpack_require__(64059);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Key.mjs
var Key = __webpack_require__(5368);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Landscape.mjs
var Landscape = __webpack_require__(52827);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Layer.mjs
var Layer = __webpack_require__(31440);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Layout.mjs
var dist_Layout = __webpack_require__(43582);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Lightbulb.mjs
var Lightbulb = __webpack_require__(58113);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Link.mjs
var Link = __webpack_require__(47243);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Lock.mjs
var Lock = __webpack_require__(91561);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Magic.mjs
var Magic = __webpack_require__(13389);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ManyToMany.mjs
var ManyToMany = __webpack_require__(43286);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ManyToOne.mjs
var ManyToOne = __webpack_require__(27645);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ManyWays.mjs
var ManyWays = __webpack_require__(36730);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Medium.mjs
var Medium = __webpack_require__(42821);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Message.mjs
var Message = __webpack_require__(50862);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Microphone.mjs
var Microphone = __webpack_require__(68077);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Monitor.mjs
var Monitor = __webpack_require__(88678);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Moon.mjs
var Moon = __webpack_require__(1628);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Music.mjs
var Music = __webpack_require__(74334);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/OneToMany.mjs
var OneToMany = __webpack_require__(64510);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/OneToOne.mjs
var OneToOne = __webpack_require__(1267);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/OneWay.mjs
var OneWay = __webpack_require__(91682);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Paint.mjs
var Paint = __webpack_require__(30770);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/PaintBrush.mjs
var PaintBrush = __webpack_require__(95096);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/PaperPlane.mjs
var PaperPlane = __webpack_require__(13789);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Phone.mjs
var Phone = __webpack_require__(71387);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Picture.mjs
var Picture = __webpack_require__(23109);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pin.mjs
var Pin = __webpack_require__(38447);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/PinMap.mjs
var PinMap = __webpack_require__(83761);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plane.mjs
var Plane = __webpack_require__(26244);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Play.mjs
var Play = __webpack_require__(64820);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/PriceTag.mjs
var PriceTag = __webpack_require__(29426);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Puzzle.mjs
var Puzzle = __webpack_require__(72535);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Question.mjs
var Question = __webpack_require__(13317);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Quote.mjs
var Quote = __webpack_require__(63302);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Refresh.mjs
var Refresh = __webpack_require__(84352);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Repeat.mjs
var Repeat = __webpack_require__(50186);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Restaurant.mjs
var Restaurant = __webpack_require__(76715);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Rocket.mjs
var Rocket = __webpack_require__(48098);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Rotate.mjs
var Rotate = __webpack_require__(70901);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Scissors.mjs
var Scissors = __webpack_require__(54763);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Search.mjs
var Search = __webpack_require__(10382);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Seed.mjs
var Seed = __webpack_require__(60674);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Server.mjs
var Server = __webpack_require__(55353);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Shield.mjs
var Shield = __webpack_require__(94842);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Shirt.mjs
var Shirt = __webpack_require__(27733);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ShoppingCart.mjs
var ShoppingCart = __webpack_require__(86874);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Slideshow.mjs
var Slideshow = __webpack_require__(66721);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Stack.mjs
var Stack = __webpack_require__(10438);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Star.mjs
var Star = __webpack_require__(39142);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Store.mjs
var Store = __webpack_require__(80103);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/StrikeThrough.mjs
var StrikeThrough = __webpack_require__(89975);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Sun.mjs
var Sun = __webpack_require__(48577);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Television.mjs
var Television = __webpack_require__(2426);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ThumbDown.mjs
var ThumbDown = __webpack_require__(68501);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ThumbUp.mjs
var ThumbUp = __webpack_require__(34389);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Train.mjs
var Train = __webpack_require__(8152);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Twitter.mjs
var Twitter = __webpack_require__(1072);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Typhoon.mjs
var Typhoon = __webpack_require__(23333);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Underline.mjs
var Underline = __webpack_require__(36558);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/User.mjs
var User = __webpack_require__(19395);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/VolumeMute.mjs
var VolumeMute = __webpack_require__(4452);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/VolumeUp.mjs
var VolumeUp = __webpack_require__(52245);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Walk.mjs
var Walk = __webpack_require__(27866);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Wheelchair.mjs
var Wheelchair = __webpack_require__(804);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Write.mjs
var Write = __webpack_require__(30984);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/ComponentIcon/constants.js

const COMPONENT_ICONS = {
  alien: Alien/* default */.Z,
  apps: Apps/* default */.Z,
  archive: Archive/* default */.Z,
  arrowDown: ArrowDown/* default */.Z,
  arrowLeft: ArrowLeft/* default */.Z,
  arrowRight: ArrowRight/* default */.Z,
  arrowUp: ArrowUp/* default */.Z,
  attachment: Attachment/* default */.Z,
  bell: Bell/* default */.Z,
  bold: Bold/* default */.Z,
  book: Book/* default */.Z,
  briefcase: Briefcase/* default */.Z,
  brush: Brush/* default */.Z,
  bulletList: BulletList/* default */.Z,
  calendar: Calendar/* default */.Z,
  car: Car/* default */.Z,
  cast: Cast/* default */.Z,
  chartBubble: ChartBubble/* default */.Z,
  chartCircle: ChartCircle/* default */.Z,
  chartPie: ChartPie/* default */.Z,
  check: Check/* default */.Z,
  clock: Clock/* default */.Z,
  cloud: Cloud/* default */.Z,
  code: Code/* default */.Z,
  cog: Cog/* default */.Z,
  collapse: Collapse/* default */.Z,
  command: Command/* default */.Z,
  connector: Connector/* default */.Z,
  crop: Crop/* default */.Z,
  crown: Crown/* default */.Z,
  cube: Cube/* default */.Z,
  cup: Cup/* default */.Z,
  cursor: Cursor/* default */.Z,
  dashboard: Dashboard/* default */.Z,
  database: Database/* default */.Z,
  discuss: Discuss/* default */.Z,
  doctor: Doctor/* default */.Z,
  earth: Earth/* default */.Z,
  emotionHappy: EmotionHappy/* default */.Z,
  emotionUnhappy: EmotionUnhappy/* default */.Z,
  envelop: Envelop/* default */.Z,
  exit: Exit/* default */.Z,
  expand: Expand/* default */.Z,
  eye: Eye/* default */.Z,
  feather: Feather/* default */.Z,
  file: dist_File/* default */.Z,
  fileError: FileError/* default */.Z,
  filePdf: FilePdf/* default */.Z,
  filter: Filter/* default */.Z,
  folder: Folder/* default */.Z,
  gate: Gate/* default */.Z,
  gift: Gift/* default */.Z,
  globe: Globe/* default */.Z,
  grid: dist_Grid/* default */.Z,
  handHeart: HandHeart/* default */.Z,
  hashtag: Hashtag/* default */.Z,
  headphone: Headphone/* default */.Z,
  heart: Heart/* default */.Z,
  house: House/* default */.Z,
  information: Information/* default */.Z,
  italic: Italic/* default */.Z,
  key: Key/* default */.Z,
  landscape: Landscape/* default */.Z,
  layer: Layer/* default */.Z,
  layout: dist_Layout/* default */.Z,
  lightbulb: Lightbulb/* default */.Z,
  link: Link/* default */.Z,
  lock: Lock/* default */.Z,
  magic: Magic/* default */.Z,
  manyToMany: ManyToMany/* default */.Z,
  manyToOne: ManyToOne/* default */.Z,
  manyWays: ManyWays/* default */.Z,
  medium: Medium/* default */.Z,
  message: Message/* default */.Z,
  microphone: Microphone/* default */.Z,
  monitor: Monitor/* default */.Z,
  moon: Moon/* default */.Z,
  music: Music/* default */.Z,
  oneToMany: OneToMany/* default */.Z,
  oneToOne: OneToOne/* default */.Z,
  oneWay: OneWay/* default */.Z,
  paint: Paint/* default */.Z,
  paintBrush: PaintBrush/* default */.Z,
  paperPlane: PaperPlane/* default */.Z,
  pencil: Pencil/* default */.Z,
  phone: Phone/* default */.Z,
  picture: Picture/* default */.Z,
  pin: Pin/* default */.Z,
  pinMap: PinMap/* default */.Z,
  plane: Plane/* default */.Z,
  play: Play/* default */.Z,
  plus: Plus/* default */.Z,
  priceTag: PriceTag/* default */.Z,
  puzzle: Puzzle/* default */.Z,
  question: Question/* default */.Z,
  quote: Quote/* default */.Z,
  refresh: Refresh/* default */.Z,
  repeat: Repeat/* default */.Z,
  restaurant: Restaurant/* default */.Z,
  rocket: Rocket/* default */.Z,
  rotate: Rotate/* default */.Z,
  scissors: Scissors/* default */.Z,
  search: Search/* default */.Z,
  seed: Seed/* default */.Z,
  server: Server/* default */.Z,
  shield: Shield/* default */.Z,
  shirt: Shirt/* default */.Z,
  shoppingCart: ShoppingCart/* default */.Z,
  slideshow: Slideshow/* default */.Z,
  stack: Stack/* default */.Z,
  star: Star/* default */.Z,
  store: Store/* default */.Z,
  strikeThrough: StrikeThrough/* default */.Z,
  sun: Sun/* default */.Z,
  television: Television/* default */.Z,
  thumbDown: ThumbDown/* default */.Z,
  thumbUp: ThumbUp/* default */.Z,
  train: Train/* default */.Z,
  twitter: Twitter/* default */.Z,
  typhoon: Typhoon/* default */.Z,
  underline: Underline/* default */.Z,
  user: User/* default */.Z,
  volumeMute: VolumeMute/* default */.Z,
  volumeUp: VolumeUp/* default */.Z,
  walk: Walk/* default */.Z,
  wheelchair: Wheelchair/* default */.Z,
  write: Write/* default */.Z
};


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/ComponentIcon/ComponentIcon.js




function ComponentIcon({ showBackground = true, size = "M", icon }) {
  return /* @__PURE__ */ react.createElement(
    Flex/* Flex */.k,
    {
      alignItems: "center",
      background: showBackground ? "neutral200" : null,
      justifyContent: "center",
      size,
      showBackground,
      height: size === "S" ? 5 : 8,
      width: size === "S" ? 5 : 8,
      color: "neutral600",
      borderRadius: showBackground ? "50%" : 0
    },
    /* @__PURE__ */ react.createElement(
      Icon/* Icon */.J,
      {
        as: COMPONENT_ICONS[icon] || COMPONENT_ICONS.cube,
        height: size === "S" ? 3 : 5,
        width: size === "S" ? 3 : 5
      }
    )
  );
}
ComponentIcon.defaultProps = {
  showBackground: true,
  size: "M",
  icon: "Cube"
};
ComponentIcon.propTypes = {
  showBackground: (prop_types_default()).bool,
  size: (prop_types_default()).string,
  icon: (prop_types_default()).string
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/ComponentIcon/index.js


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/DynamicZoneList.js







const CustomLink = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  text-decoration: none;

  &:focus,
  &:hover {
    ${({ theme }) => `
      background-color: ${theme.colors.primary100};
      border-color: ${theme.colors.primary200};

      ${Typography/* Typography */.Z} {
          color: ${theme.colors.primary600};
      }
    `}

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
const DynamicZoneList = ({ components }) => {
  const { componentLayouts } = useLayoutDnd();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2, overflow: "scroll hidden", padding: 3 }, components.map((componentUid) => /* @__PURE__ */ react.createElement(
    CustomLink,
    {
      hasRadius: true,
      background: "neutral0",
      justifyContent: "center",
      alignItems: "center",
      height: `${84 / 16}rem`,
      minWidth: `${140 / 16}rem`,
      key: componentUid,
      padding: 2,
      direction: "column",
      borderColor: "neutral200",
      as: react_router_dom/* Link */.rU,
      to: `/content-manager/components/${componentUid}/configurations/edit`
    },
    /* @__PURE__ */ react.createElement(ComponentIcon, { icon: componentLayouts?.[componentUid]?.info?.icon }),
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 1 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontSize: 1, textColor: "neutral600", fontWeight: "bold" }, componentLayouts?.[componentUid]?.info?.displayName ?? ""))
  )));
};
DynamicZoneList.propTypes = {
  components: prop_types_default().arrayOf((prop_types_default()).string).isRequired
};
/* harmony default export */ const components_DynamicZoneList = (DynamicZoneList);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/FieldButtonContent.js









const CustomIconButton = (0,styled_components_browser_esm/* default */.ZP)((0,IconButton/* IconButton */.h))`
  background-color: transparent;
  path {
    fill: ${({ theme }) => theme.colors.neutral600};
  }
`;
const FieldButtonContent = ({ attribute, onEditField, onDeleteField, children }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { overflow: "hidden", width: "100%" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { paddingLeft: 3, alignItems: "center", justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "semiBold", textColor: "neutral800", ellipsis: true }, children), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(
    CustomIconButton,
    {
      label: formatMessage(
        {
          id: (0,utils/* getTrad */.OB)("containers.ListSettingsView.modal-form.edit-label"),
          defaultMessage: `Edit {fieldName}`
        },
        { fieldName: children }
      ),
      onClick: onEditField,
      icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null),
      noBorder: true
    }
  ), /* @__PURE__ */ react.createElement(
    CustomIconButton,
    {
      label: formatMessage(
        {
          id: "global.delete-target",
          defaultMessage: `Delete {target}`
        },
        {
          target: children
        }
      ),
      "data-testid": "delete-field",
      onClick: onDeleteField,
      icon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null),
      noBorder: true
    }
  ))), attribute?.type === "component" && /* @__PURE__ */ react.createElement(components_ComponentFieldList, { componentUid: attribute.component }), attribute?.type === "dynamiczone" && /* @__PURE__ */ react.createElement(components_DynamicZoneList, { components: attribute.components }));
};
FieldButtonContent.defaultProps = {
  attribute: void 0
};
FieldButtonContent.propTypes = {
  attribute: prop_types_default().shape({
    components: (prop_types_default()).array,
    component: (prop_types_default()).string,
    type: (prop_types_default()).string
  }),
  onEditField: (prop_types_default()).func.isRequired,
  onDeleteField: (prop_types_default()).func.isRequired,
  children: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_FieldButtonContent = (FieldButtonContent);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/DisplayedFieldButton.js










const Wrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  position: relative;
  ${({ isFirst, isLast, hasHorizontalPadding }) => {
  if (isFirst) {
    return `
        padding-right: 4px;
      `;
  }
  if (isLast) {
    return `
        padding-left: 4px;
      `;
  }
  if (hasHorizontalPadding) {
    return `
        padding: 0 4px;
      `;
  }
  return "";
}}
  ${({ showRightCarret, showLeftCarret, theme }) => {
  if (showRightCarret) {
    return `
        &:after {
          content: '';
          position: absolute;
          right: -1px;
          background-color: ${theme.colors.primary600};
          width: 2px;
          height: 100%;
          align-self: stretch;
          z-index: 1;
        }
      `;
  }
  if (showLeftCarret) {
    return `
        &:before {
          content: '';
          position: absolute;
          left: -1px;
          background-color: ${theme.colors.primary600};
          width: 2px;
          height: 100%;
          align-self: stretch;
          z-index: 1;
        }
      `;
  }
  return "";
}};
`;
const CustomDragIcon = (0,styled_components_browser_esm/* default */.ZP)((0,Drag/* default */.Z))`
  height: ${12 / 16}rem;
  width: ${12 / 16}rem;
  path {
    fill: ${({ theme }) => theme.colors.neutral600};
  }
`;
const CustomFlex = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  display: ${({ dragStart }) => dragStart ? "none" : "flex"};
  opacity: ${({ isDragging, isFullSize, isHidden }) => {
  if (isDragging && !isFullSize) {
    return 0.2;
  }
  if (isDragging && isFullSize || isHidden) {
    return 0;
  }
  return 1;
}};
`;
const DragButton = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  cursor: all-scroll;
  border-right: 1px solid ${({ theme }) => theme.colors.neutral200};
`;
const DisplayedFieldButton = ({
  attribute,
  children,
  index,
  lastIndex,
  moveItem,
  moveRow,
  name,
  onDeleteField,
  onEditField,
  rowIndex,
  size
}) => {
  const [dragStart, setDragStart] = (0,react.useState)(false);
  const isHidden = name === "_TEMP_";
  const { setIsDraggingSibling } = useLayoutDnd();
  const isFullSize = size === 12;
  const dragRef = (0,react.useRef)(null);
  const dropRef = (0,react.useRef)(null);
  const [{ clientOffset, isOver }, drop] = (0,cjs.useDrop)({
    accept: utils/* ItemTypes */._Q.EDIT_FIELD,
    hover(item, monitor) {
      if (!dropRef.current) {
        return;
      }
      if (item.size !== 12) {
        return;
      }
      const dragIndex = monitor.getItem().index;
      const hoverIndex = index;
      const dragRow = monitor.getItem().rowIndex;
      const targetRow = rowIndex;
      if (dragIndex === hoverIndex && dragRow === targetRow) {
        return;
      }
      const hoverBoundingRect = dropRef.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset2 = monitor.getClientOffset();
      const hoverClientY = clientOffset2.y - hoverBoundingRect.top;
      if (dragRow < targetRow && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragRow > targetRow && hoverClientY > hoverMiddleY) {
        return;
      }
      moveRow(dragRow, targetRow);
      item.rowIndex = targetRow;
      item.itemIndex = hoverIndex;
    },
    drop(item, monitor) {
      if (!dropRef.current) {
        return;
      }
      const dragIndex = monitor.getItem().index;
      const hoverIndex = index;
      const dragRow = monitor.getItem().rowIndex;
      const targetRow = rowIndex;
      if (item.size === 12) {
        return;
      }
      if (dragIndex === hoverIndex && dragRow === targetRow) {
        return;
      }
      const hoverBoundingRect = dropRef.current.getBoundingClientRect();
      if (Math.abs(monitor.getClientOffset().x - hoverBoundingRect.left) > hoverBoundingRect.width / 1.8) {
        moveItem(dragIndex, hoverIndex + 1, dragRow, targetRow);
        item.itemIndex = hoverIndex + 1;
        item.rowIndex = targetRow;
        return;
      }
      moveItem(dragIndex, hoverIndex, dragRow, targetRow);
      item.itemIndex = hoverIndex;
      item.rowIndex = targetRow;
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      clientOffset: monitor.getClientOffset(),
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
      itemType: monitor.getItemType()
    })
  });
  const [{ isDragging, getItem }, drag, dragPreview] = (0,cjs.useDrag)({
    type: utils/* ItemTypes */._Q.EDIT_FIELD,
    item() {
      setIsDraggingSibling(true);
      return {
        index,
        labelField: children,
        rowIndex,
        name,
        size
      };
    },
    canDrag() {
      return name !== "_TEMP_";
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      getItem: monitor.getItem()
    }),
    end() {
      setIsDraggingSibling(false);
    }
  });
  (0,react.useEffect)(() => {
    dragPreview((0,dist_cjs/* getEmptyImage */.rX)(), { captureDraggingState: true });
  }, [dragPreview]);
  const refs = {
    dragRef: drag(dragRef),
    dropRef: drop(dropRef)
  };
  let showLeftCarret = false;
  let showRightCarret = false;
  if (dropRef.current && clientOffset) {
    const hoverBoundingRect = dropRef.current.getBoundingClientRect();
    showLeftCarret = isOver && getItem.size !== 12 && Math.abs(clientOffset.x - hoverBoundingRect.left) < hoverBoundingRect.width / 2;
    showRightCarret = isOver && getItem.size !== 12 && Math.abs(clientOffset.x - hoverBoundingRect.left) > hoverBoundingRect.width / 2;
    if (name === "_TEMP_") {
      showLeftCarret = isOver && getItem.size !== 12;
      showRightCarret = false;
    }
  }
  const getHeight = () => {
    if (attribute && isFullSize) {
      return `${74 / 16}rem`;
    }
    return `${32 / 16}rem`;
  };
  const isFirst = index === 0 && !isFullSize;
  const isLast = index === lastIndex && !isFullSize;
  const hasHorizontalPadding = index !== 0 && !isFullSize;
  return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: size }, /* @__PURE__ */ react.createElement(
    Wrapper,
    {
      ref: refs.dropRef,
      showLeftCarret,
      showRightCarret,
      isFirst,
      isLast,
      hasHorizontalPadding,
      onDrag: () => {
        if (isFullSize && !dragStart) {
          setDragStart(true);
        }
      },
      onDragEnd: () => {
        if (isFullSize) {
          setDragStart(false);
        }
      }
    },
    dragStart && isFullSize && /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        width: "100%",
        height: "2px",
        background: "primary600"
      }
    ),
    /* @__PURE__ */ react.createElement(
      CustomFlex,
      {
        width: isFullSize && dragStart ? 0 : "100%",
        borderColor: "neutral150",
        hasRadius: true,
        background: "neutral100",
        minHeight: getHeight(),
        alignItems: "stretch",
        isDragging,
        dragStart,
        isFullSize,
        isHidden
      },
      /* @__PURE__ */ react.createElement(
        DragButton,
        {
          as: "span",
          type: "button",
          ref: refs.dragRef,
          onClick: (e) => e.stopPropagation(),
          alignItems: "center",
          paddingLeft: 3,
          paddingRight: 3,
          tabIndex: -1
        },
        /* @__PURE__ */ react.createElement(CustomDragIcon, null)
      ),
      !isHidden && /* @__PURE__ */ react.createElement(
        components_FieldButtonContent,
        {
          attribute,
          onEditField,
          onDeleteField
        },
        children
      )
    )
  ));
};
DisplayedFieldButton.defaultProps = {
  attribute: void 0
};
DisplayedFieldButton.propTypes = {
  attribute: prop_types_default().shape({
    components: (prop_types_default()).array,
    component: (prop_types_default()).string,
    type: (prop_types_default()).string
  }),
  children: (prop_types_default()).string.isRequired,
  index: (prop_types_default()).number.isRequired,
  moveItem: (prop_types_default()).func.isRequired,
  moveRow: (prop_types_default()).func.isRequired,
  name: (prop_types_default()).string.isRequired,
  onDeleteField: (prop_types_default()).func.isRequired,
  onEditField: (prop_types_default()).func.isRequired,
  rowIndex: (prop_types_default()).number.isRequired,
  lastIndex: (prop_types_default()).number.isRequired,
  size: (prop_types_default()).number.isRequired
};
/* harmony default export */ const components_DisplayedFieldButton = (DisplayedFieldButton);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/RowItemsLayout.js





const RowItemsLayout = ({ rowItem, onRemoveField, rowId, rowIndex, index, lastIndex }) => {
  const { setEditFieldToSelect, attributes, modifiedData, moveRow, moveItem } = useLayoutDnd();
  const attribute = get_default()(attributes, [rowItem.name], {});
  const attributeLabel = get_default()(modifiedData, ["metadatas", rowItem.name, "edit", "label"], "");
  return /* @__PURE__ */ react.createElement(
    components_DisplayedFieldButton,
    {
      onEditField: () => setEditFieldToSelect(rowItem.name),
      onDeleteField: () => onRemoveField(rowId, index),
      attribute,
      index,
      lastIndex,
      rowIndex,
      name: rowItem.name,
      size: rowItem.size,
      moveRow,
      moveItem
    },
    attributeLabel || rowItem.name
  );
};
RowItemsLayout.propTypes = {
  index: (prop_types_default()).number.isRequired,
  lastIndex: (prop_types_default()).number.isRequired,
  onRemoveField: (prop_types_default()).func.isRequired,
  rowId: (prop_types_default()).number.isRequired,
  rowIndex: (prop_types_default()).number.isRequired,
  rowItem: (prop_types_default()).object.isRequired
};
/* harmony default export */ const components_RowItemsLayout = (RowItemsLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/RowsLayout.js




const RowsLayout = ({ row, onRemoveField, rowIndex }) => {
  return /* @__PURE__ */ react.createElement(Grid/* Grid */.r, null, row.rowContent.map((rowItem, index) => {
    return /* @__PURE__ */ react.createElement(
      components_RowItemsLayout,
      {
        key: rowItem.name,
        rowItem,
        index,
        rowId: row.rowId,
        onRemoveField,
        rowIndex,
        lastIndex: row.rowContent.length - 1
      }
    );
  }));
};
RowsLayout.propTypes = {
  onRemoveField: (prop_types_default()).func.isRequired,
  row: (prop_types_default()).object.isRequired,
  rowIndex: (prop_types_default()).number.isRequired
};
/* harmony default export */ const components_RowsLayout = (RowsLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/DisplayedFields.js









const DisplayedFields = ({ editLayout, fields, onRemoveField, onAddField }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold" }, formatMessage({
    id: (0,utils/* getTrad */.OB)("containers.ListPage.displayedFields"),
    defaultMessage: "Displayed fields"
  }))), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600" }, formatMessage({
    id: "containers.SettingPage.editSettings.description",
    defaultMessage: "Drag & drop the fields to build the layout"
  })))), /* @__PURE__ */ react.createElement(components_LinkToCTB, null)), /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 4, hasRadius: true, borderStyle: "dashed", borderWidth: "1px", borderColor: "neutral300" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, editLayout.map((row, index) => /* @__PURE__ */ react.createElement(components_RowsLayout, { key: row.rowId, row, rowIndex: index, onRemoveField })), /* @__PURE__ */ react.createElement(Menu/* Root */.fC, null, /* @__PURE__ */ react.createElement(
    Menu/* Trigger */.xz,
    {
      startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null),
      endIcon: null,
      disabled: fields.length === 0,
      fullWidth: true,
      variant: "secondary"
    },
    formatMessage({
      id: (0,utils/* getTrad */.OB)("containers.SettingPage.add.field"),
      defaultMessage: "Insert another field"
    })
  ), /* @__PURE__ */ react.createElement(Menu/* Content */.VY, null, fields.map((field) => /* @__PURE__ */ react.createElement(Menu/* Item */.ck, { key: field, onSelect: () => onAddField(field) }, field)))))));
};
DisplayedFields.propTypes = {
  editLayout: (prop_types_default()).array.isRequired,
  fields: (prop_types_default()).array.isRequired,
  onAddField: (prop_types_default()).func.isRequired,
  onRemoveField: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_DisplayedFields = (DisplayedFields);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.mjs
var ModalLayout = __webpack_require__(5938);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.mjs
var ModalHeader = __webpack_require__(6918);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.mjs
var ModalBody = __webpack_require__(15244);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.mjs
var ModalFooter = __webpack_require__(35250);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Number.mjs
var dist_Number = __webpack_require__(60330);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Boolean.mjs
var dist_Boolean = __webpack_require__(67929);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Date.mjs
var dist_Date = __webpack_require__(52374);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Email.mjs
var Email = __webpack_require__(16719);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Enumeration.mjs
var Enumeration = __webpack_require__(14858);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Media.mjs
var Media = __webpack_require__(48809);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Relation.mjs
var Relation = __webpack_require__(967);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Text.mjs
var Text = __webpack_require__(63161);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Json.mjs
var Json = __webpack_require__(6913);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Uid.mjs
var Uid = __webpack_require__(81907);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Component.mjs
var Component = __webpack_require__(60069);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/DynamicZone.mjs
var DynamicZone = __webpack_require__(24001);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/FieldTypeIcon/index.js





const iconByTypes = {
  biginteger: /* @__PURE__ */ react.createElement(dist_Number/* default */.Z, null),
  boolean: /* @__PURE__ */ react.createElement(dist_Boolean/* default */.Z, null),
  date: /* @__PURE__ */ react.createElement(dist_Date/* default */.Z, null),
  datetime: /* @__PURE__ */ react.createElement(dist_Date/* default */.Z, null),
  decimal: /* @__PURE__ */ react.createElement(dist_Number/* default */.Z, null),
  email: /* @__PURE__ */ react.createElement(Email/* default */.Z, null),
  enum: /* @__PURE__ */ react.createElement(Enumeration/* default */.Z, null),
  enumeration: /* @__PURE__ */ react.createElement(Enumeration/* default */.Z, null),
  file: /* @__PURE__ */ react.createElement(Media/* default */.Z, null),
  files: /* @__PURE__ */ react.createElement(Media/* default */.Z, null),
  float: /* @__PURE__ */ react.createElement(dist_Number/* default */.Z, null),
  integer: /* @__PURE__ */ react.createElement(dist_Number/* default */.Z, null),
  media: /* @__PURE__ */ react.createElement(Media/* default */.Z, null),
  number: /* @__PURE__ */ react.createElement(dist_Number/* default */.Z, null),
  relation: /* @__PURE__ */ react.createElement(Relation/* default */.Z, null),
  string: /* @__PURE__ */ react.createElement(Text/* default */.Z, null),
  text: /* @__PURE__ */ react.createElement(Text/* default */.Z, null),
  richtext: /* @__PURE__ */ react.createElement(Text/* default */.Z, null),
  time: /* @__PURE__ */ react.createElement(dist_Date/* default */.Z, null),
  timestamp: /* @__PURE__ */ react.createElement(dist_Date/* default */.Z, null),
  json: /* @__PURE__ */ react.createElement(Json/* default */.Z, null),
  uid: /* @__PURE__ */ react.createElement(Uid/* default */.Z, null),
  component: /* @__PURE__ */ react.createElement(Component/* default */.Z, null),
  dynamiczone: /* @__PURE__ */ react.createElement(DynamicZone/* default */.Z, null)
};
const FieldTypeIcon = ({ type, customFieldUid }) => {
  const customFieldsRegistry = (0,dist/* useCustomFields */.mZ)();
  let Compo = iconByTypes[type];
  if (customFieldUid) {
    const customField = customFieldsRegistry.get(customFieldUid);
    const CustomFieldIcon = customField.icon;
    if (CustomFieldIcon) {
      Compo = /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginRight: 3, width: 7, height: 6 }, /* @__PURE__ */ react.createElement(CustomFieldIcon, null));
    }
  }
  if (!iconByTypes[type]) {
    return null;
  }
  return Compo;
};
FieldTypeIcon.defaultProps = {
  customFieldUid: null
};
FieldTypeIcon.propTypes = {
  type: (prop_types_default()).string.isRequired,
  customFieldUid: (prop_types_default()).string
};
/* harmony default export */ const components_FieldTypeIcon = (FieldTypeIcon);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/utils/createPossibleMainFieldsForModelsAndComponents.js
const createPossibleMainFieldsForModelsAndComponents = (array) => {
  return array.reduce((acc, current) => {
    const attributes = current?.attributes ?? {};
    const possibleMainFields = Object.keys(attributes).filter((attr) => {
      return ![
        "boolean",
        "component",
        "dynamiczone",
        "json",
        "media",
        "password",
        "relation",
        "text",
        "richtext",
        "blocks"
      ].includes(attributes?.[attr]?.type ?? "");
    });
    acc[current.uid] = possibleMainFields;
    return acc;
  }, {});
};
/* harmony default export */ const utils_createPossibleMainFieldsForModelsAndComponents = (createPossibleMainFieldsForModelsAndComponents);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/utils/getInputProps.js

const getInputProps = (fieldName) => {
  let type;
  switch (fieldName) {
    case "description":
    case "label":
    case "placeholder":
      type = "text";
      break;
    case "mainField":
      type = "select";
      break;
    case "editable":
      type = "bool";
      break;
    default:
      type = "";
  }
  const labelId = fieldName === "mainField" ? (0,utils/* getTrad */.OB)("containers.SettingPage.editSettings.entry.title") : (0,utils/* getTrad */.OB)(`form.Input.${fieldName}`);
  return { type, label: { id: labelId } };
};
/* harmony default export */ const utils_getInputProps = (getInputProps);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/utils/index.js



// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.mjs
var TextInput = __webpack_require__(12881);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ToggleInput/ToggleInput.mjs
var ToggleInput = __webpack_require__(2548);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/GenericInput.js




const GenericInput = ({ type, options, onChange, value, name, ...inputProps }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  switch (type) {
    case "text": {
      return /* @__PURE__ */ react.createElement(TextInput/* TextInput */.o, { onChange, value, name, ...inputProps });
    }
    case "bool": {
      return /* @__PURE__ */ react.createElement(
        ToggleInput/* ToggleInput */.s,
        {
          onChange: (e) => {
            onChange({ target: { name, value: e.target.checked } });
          },
          checked: value,
          name,
          onLabel: formatMessage({
            id: "app.components.ToggleCheckbox.on-label",
            defaultMessage: "On"
          }),
          offLabel: formatMessage({
            id: "app.components.ToggleCheckbox.off-label",
            defaultMessage: "Off"
          }),
          ...inputProps
        }
      );
    }
    case "select": {
      return /* @__PURE__ */ react.createElement(
        Select/* Select */.P,
        {
          value,
          name,
          onChange: (value2) => onChange({ target: { name, value: value2 } }),
          ...inputProps
        },
        options.map((option) => /* @__PURE__ */ react.createElement(Option/* Option */.W, { key: option, value: option }, option))
      );
    }
    default:
      return null;
  }
};
GenericInput.defaultProps = {
  options: void 0
};
GenericInput.propTypes = {
  type: (prop_types_default()).string.isRequired,
  options: prop_types_default().arrayOf((prop_types_default()).string),
  onChange: (prop_types_default()).func.isRequired,
  value: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).bool]).isRequired,
  name: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_GenericInput = (GenericInput);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/ModalForm.js











const FIELD_SIZES = [
  [4, "33%"],
  [6, "50%"],
  [8, "66%"],
  [12, "100%"]
];
const ModalForm = ({ onMetaChange, onSizeChange }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { modifiedData, selectedField, attributes, fieldForm } = useLayoutDnd();
  const schemasSelector = (0,react.useMemo)(App_selectors/* makeSelectModelAndComponentSchemas */.Vo, []);
  const { schemas } = (0,es/* useSelector */.v9)((state) => schemasSelector(state), es/* shallowEqual */.wU);
  const fieldSizes = (0,es/* useSelector */.v9)(App_selectors/* selectFieldSizes */.Jg);
  const formToDisplay = (0,react.useMemo)(() => {
    if (!selectedField) {
      return [];
    }
    const associatedMetas = get_default()(modifiedData, ["metadatas", selectedField, "edit"], {});
    return Object.keys(associatedMetas).filter((meta) => meta !== "visible");
  }, [selectedField, modifiedData]);
  const componentsAndModelsPossibleMainFields = (0,react.useMemo)(() => {
    return utils_createPossibleMainFieldsForModelsAndComponents(schemas);
  }, [schemas]);
  const getSelectedItemSelectOptions = (0,react.useCallback)(
    (formType) => {
      if (formType !== "relation" && formType !== "component") {
        return [];
      }
      const targetKey = formType === "component" ? "component" : "targetModel";
      const key = get_default()(modifiedData, ["attributes", selectedField, targetKey], "");
      return get_default()(componentsAndModelsPossibleMainFields, [key], []);
    },
    [selectedField, componentsAndModelsPossibleMainFields, modifiedData]
  );
  const metaFields = formToDisplay.map((meta) => {
    const formType = get_default()(attributes, [selectedField, "type"]);
    if (["component", "dynamiczone"].includes(formType) && !["label", "description"].includes(meta)) {
      return null;
    }
    if (formType === "component" && meta !== "label") {
      return null;
    }
    if (["media", "json", "boolean"].includes(formType) && meta === "placeholder") {
      return null;
    }
    if (meta === "step") {
      return null;
    }
    return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, key: meta }, /* @__PURE__ */ react.createElement(
      components_GenericInput,
      {
        type: utils_getInputProps(meta).type,
        hint: meta === "mainField" ? formatMessage({
          id: (0,getTrad/* default */.Z)("containers.SettingPage.editSettings.relation-field.description")
        }) : "",
        label: formatMessage({
          id: get_default()(utils_getInputProps(meta), "label.id", "app.utils.defaultMessage")
        }),
        name: meta,
        onChange: onMetaChange,
        value: get_default()(fieldForm, ["metadata", meta], ""),
        options: getSelectedItemSelectOptions(formType)
      }
    ));
  });
  const { type, customField } = attributes[selectedField];
  const { isResizable } = fieldSizes[customField] ?? fieldSizes[type];
  return /* @__PURE__ */ react.createElement(react.Fragment, null, metaFields, isResizable && /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, key: "size" }, /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      value: fieldForm?.size,
      name: "size",
      onChange: (value) => {
        onSizeChange({ name: selectedField, value });
      },
      label: formatMessage({
        id: (0,getTrad/* default */.Z)("containers.SettingPage.editSettings.size.label"),
        defaultMessage: "Size"
      })
    },
    FIELD_SIZES.map(([value, label]) => /* @__PURE__ */ react.createElement(Option/* Option */.W, { key: value, value }, label))
  )));
};
ModalForm.propTypes = {
  onMetaChange: (prop_types_default()).func.isRequired,
  onSizeChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ModalForm = (ModalForm);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/FormModal.js










const HeaderContainer = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  svg {
    width: ${32 / 16}rem;
    height: ${24 / 16}rem;
    margin-right: ${({ theme }) => theme.spaces[3]};
  }
`;
const FormModal = ({ onToggle, onMetaChange, onSizeChange, onSubmit, type, customFieldUid }) => {
  const { selectedField } = useLayoutDnd();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const getAttrType = () => {
    if (type === "timestamp") {
      return "date";
    }
    if (["decimal", "float", "integer", "biginter"].includes(type)) {
      return "number";
    }
    return type;
  };
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose: onToggle, labelledBy: "title" }, /* @__PURE__ */ react.createElement("form", { onSubmit }, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(HeaderContainer, null, /* @__PURE__ */ react.createElement(components_FieldTypeIcon, { type: getAttrType(), customFieldUid }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "title" }, formatMessage(
    {
      id: (0,utils/* getTrad */.OB)("containers.ListSettingsView.modal-form.edit-label"),
      defaultMessage: "Edit {fieldName}"
    },
    { fieldName: upperFirst_default()(selectedField) }
  )))), /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(components_ModalForm, { onMetaChange, onSizeChange }))), /* @__PURE__ */ react.createElement(
    ModalFooter/* ModalFooter */.m,
    {
      startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: onToggle, variant: "tertiary" }, formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" })),
      endActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit" }, formatMessage({ id: "global.finish", defaultMessage: "Finish" }))
    }
  )));
};
FormModal.defaultProps = {
  customFieldUid: null
};
FormModal.propTypes = {
  customFieldUid: (prop_types_default()).string,
  onSubmit: (prop_types_default()).func.isRequired,
  onToggle: (prop_types_default()).func.isRequired,
  onMetaChange: (prop_types_default()).func.isRequired,
  onSizeChange: (prop_types_default()).func.isRequired,
  type: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_FormModal = (FormModal);

// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(43433);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/utils/layout.js
const getRowSize = (arr) => arr.reduce((sum, value) => sum + value.size, 0);
const createLayout = (arr) => {
  return arr.reduce((acc, current, index) => {
    const row = { rowId: index, rowContent: current };
    return acc.concat(row);
  }, []);
};
const formatLayout = (arr) => {
  return arr.reduce((acc, current) => {
    let toPush = [];
    const currentRow = current.rowContent.reduce((acc2, curr) => {
      const acc2Size = getRowSize(acc2);
      if (curr.name === "_TEMP_") {
        return acc2;
      }
      if (acc2Size + curr.size <= 12) {
        acc2.push(curr);
      } else {
        toPush.push(curr);
      }
      return acc2;
    }, []);
    const rowId = acc.length === 0 ? 0 : Math.max.apply(
      Math,
      acc.map((o) => o.rowId)
    ) + 1;
    const currentRowSize = getRowSize(currentRow);
    if (currentRowSize < 12) {
      currentRow.push({ name: "_TEMP_", size: 12 - currentRowSize });
    }
    acc.push({ rowId, rowContent: currentRow });
    if (toPush.length > 0) {
      const toPushSize = getRowSize(toPush);
      if (toPushSize < 12) {
        toPush.push({ name: "_TEMP_", size: 12 - toPushSize });
      }
      acc.push({ rowId: rowId + 1, rowContent: toPush });
      toPush = [];
    }
    return acc;
  }, []).filter((row) => row.rowContent.length > 0).filter((row) => {
    if (row.rowContent.length === 1) {
      return row.rowContent[0].name !== "_TEMP_";
    }
    return true;
  });
};
const unformatLayout = (arr) => {
  return arr.reduce((acc, current) => {
    const currentRow = current.rowContent.filter((content) => content.name !== "_TEMP_");
    return acc.concat([currentRow]);
  }, []);
};
const getFieldSize = (name, layouts = []) => {
  return layouts.reduce((acc, { rowContent }) => {
    const size = rowContent.find((row) => row.name === name)?.size ?? null;
    if (size) {
      acc = size;
    }
    return acc;
  }, null);
};
const setFieldSize = (name, size, layouts = []) => {
  return layouts.map((row) => {
    row.rowContent = row.rowContent.map((column) => {
      if (column.name === name) {
        return {
          ...column,
          size
        };
      }
      return column;
    });
    return row;
  });
};


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/init.js



const init = (initialState, mainLayout, components) => {
  let initialData = cloneDeep_default()(mainLayout);
  set_default()(initialData, ["layouts", "edit"], formatLayout(createLayout(mainLayout.layouts.edit)));
  return {
    ...initialState,
    initialData,
    modifiedData: initialData,
    componentLayouts: components
  };
};
/* harmony default export */ const EditSettingsView_init = (init);

// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(61815);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/reducer.js






const DEFAULT_FIELD_SIZE = 6;
const initialState = {
  fieldForm: {},
  componentLayouts: {},
  metaToEdit: "",
  initialData: {},
  metaForm: {},
  modifiedData: {}
};
const reducer = (state = initialState, action) => (
  // eslint-disable-next-line consistent-return
  (0,immer_esm/* default */.ZP)(state, (draftState) => {
    const layoutPathEdit = ["modifiedData", "layouts", "edit"];
    switch (action.type) {
      case "MOVE_ROW": {
        const editFieldLayoutValue = get_default()(state, layoutPathEdit, []);
        const { fromIndex, toIndex } = action;
        set_default()(draftState, layoutPathEdit, (0,utils/* arrayMoveItem */.W3)(editFieldLayoutValue, fromIndex, toIndex));
        break;
      }
      case "ON_ADD_FIELD": {
        const newState = cloneDeep_default()(state);
        const attribute = get_default()(newState, ["modifiedData", "attributes", action.name], {});
        const size = action.fieldSizes[attribute?.customField]?.default ?? action.fieldSizes[attribute?.type]?.default ?? DEFAULT_FIELD_SIZE;
        const listSize = get_default()(newState, layoutPathEdit, []).length;
        const actualRowContentPath = [...layoutPathEdit, listSize - 1, "rowContent"];
        const rowContentToSet = get_default()(newState, actualRowContentPath, []);
        let newList = get_default()(newState, layoutPathEdit, []);
        if (Array.isArray(rowContentToSet)) {
          set_default()(
            newList,
            [listSize > 0 ? listSize - 1 : 0, "rowContent"],
            [...rowContentToSet, { name: action.name, size }]
          );
        } else {
          set_default()(
            newList,
            [listSize > 0 ? listSize - 1 : 0, "rowContent"],
            [{ name: action.name, size }]
          );
        }
        const formattedList = formatLayout(newList);
        set_default()(draftState, layoutPathEdit, formattedList);
        break;
      }
      case "ON_CHANGE": {
        set_default()(draftState, ["modifiedData", ...action.keys], action.value);
        break;
      }
      case "ON_CHANGE_META": {
        set_default()(draftState, ["metaForm", "metadata", ...action.keys], action.value);
        break;
      }
      case "ON_CHANGE_SIZE": {
        set_default()(draftState, ["metaForm", "size"], action.value);
        break;
      }
      case "ON_RESET": {
        draftState.modifiedData = state.initialData;
        break;
      }
      case "REMOVE_FIELD": {
        const row = get_default()(state, [...layoutPathEdit, action.rowIndex, "rowContent"], []);
        let newState = cloneDeep_default()(state);
        if (row.length === 1 || row.length === 2 && get_default()(row, [1, "name"], "") === "_TEMP_") {
          const currentRowFieldList = get_default()(state, layoutPathEdit, []);
          set_default()(
            newState,
            layoutPathEdit,
            currentRowFieldList.filter((_, index) => action.rowIndex !== index)
          );
        } else {
          set_default()(
            newState,
            [...layoutPathEdit, action.rowIndex, "rowContent"],
            row.filter((_, index) => index !== action.fieldIndex)
          );
        }
        const updatedList = formatLayout(get_default()(newState, layoutPathEdit, []));
        set_default()(draftState, layoutPathEdit, updatedList);
        break;
      }
      case "REORDER_DIFF_ROW": {
        const actualRowContent = get_default()(
          state,
          [...layoutPathEdit, action.dragRowIndex, "rowContent"],
          []
        );
        const targetRowContent = get_default()(
          state,
          [...layoutPathEdit, action.hoverRowIndex, "rowContent"],
          []
        );
        const itemToInsert = get_default()(
          state,
          [...layoutPathEdit, action.dragRowIndex, "rowContent", action.dragIndex],
          {}
        );
        const rowContent = [...targetRowContent, itemToInsert];
        let newState = cloneDeep_default()(state);
        set_default()(
          newState,
          [...layoutPathEdit, action.dragRowIndex, "rowContent"],
          actualRowContent.filter((_, index) => action.dragIndex !== index)
        );
        set_default()(
          newState,
          [...layoutPathEdit, action.hoverRowIndex, "rowContent"],
          (0,utils/* arrayMoveItem */.W3)(rowContent, rowContent.length - 1, action.hoverIndex)
        );
        const updatedList = formatLayout(get_default()(newState, layoutPathEdit, []));
        set_default()(draftState, layoutPathEdit, updatedList);
        break;
      }
      case "REORDER_ROW": {
        const newState = cloneDeep_default()(state);
        const rowContent = get_default()(
          newState,
          [...layoutPathEdit, action.dragRowIndex, "rowContent"],
          []
        );
        set_default()(
          newState,
          [...layoutPathEdit, action.dragRowIndex, "rowContent"],
          (0,utils/* arrayMoveItem */.W3)(rowContent, action.dragIndex, action.hoverIndex)
        );
        const updatedList = formatLayout(get_default()(newState, layoutPathEdit, []));
        set_default()(draftState, layoutPathEdit, updatedList);
        break;
      }
      case "SET_FIELD_TO_EDIT": {
        draftState.metaToEdit = action.name;
        draftState.metaForm = {
          metadata: get_default()(state, ["modifiedData", "metadatas", action.name, "edit"], {}),
          size: getFieldSize(action.name, state.modifiedData?.layouts?.edit) ?? DEFAULT_FIELD_SIZE
        };
        break;
      }
      case "SUBMIT_META_FORM": {
        set_default()(
          draftState,
          ["modifiedData", "metadatas", state.metaToEdit, "edit"],
          state.metaForm.metadata
        );
        const layoutsCopy = cloneDeep_default()(get_default()(state, layoutPathEdit, []));
        const nextLayoutValue = setFieldSize(state.metaToEdit, state.metaForm.size, layoutsCopy);
        if (nextLayoutValue.length > 0) {
          set_default()(draftState, layoutPathEdit, formatLayout(nextLayoutValue));
        }
        break;
      }
      case "SUBMIT_SUCCEEDED": {
        draftState.initialData = state.modifiedData;
        break;
      }
      case "UNSET_FIELD_TO_EDIT": {
        draftState.metaToEdit = "";
        draftState.metaForm = {};
        break;
      }
      default:
        return draftState;
    }
  })
);
/* harmony default export */ const EditSettingsView_reducer = (reducer);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/index.js




















const EditSettingsView = ({ mainLayout, components, isContentTypeView, slug, updateLayout }) => {
  const [reducerState, dispatch] = (0,react.useReducer)(
    EditSettingsView_reducer,
    initialState,
    () => EditSettingsView_init(initialState, mainLayout, components)
  );
  const [isDraggingSibling, setIsDraggingSibling] = (0,react.useState)(false);
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { goBack } = (0,react_router/* useHistory */.k6)();
  const [isModalFormOpen, setIsModalFormOpen] = (0,react.useState)(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = (0,react.useState)(false);
  const { componentLayouts, initialData, modifiedData, metaToEdit, metaForm } = reducerState;
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const modelName = mainLayout.info.displayName;
  const attributes = modifiedData?.attributes ?? {};
  const fieldSizes = (0,es/* useSelector */.v9)(App_selectors/* selectFieldSizes */.Jg);
  const { put } = (0,dist/* useFetchClient */.kY)();
  const entryTitleOptions = Object.keys(attributes).filter((attr) => {
    const type = attributes?.[attr]?.type ?? "";
    return ![
      "dynamiczone",
      "json",
      "text",
      "relation",
      "component",
      "boolean",
      "media",
      "password",
      "richtext",
      "timestamp",
      "blocks"
    ].includes(type) && !!type;
  });
  const editLayout = modifiedData.layouts.edit;
  const displayedFields = editLayout.flatMap((layout) => layout.rowContent);
  const editLayoutFields = Object.keys(modifiedData.attributes).filter((attr) => (modifiedData?.metadatas?.[attr]?.edit?.visible ?? false) === true).filter((attr) => displayedFields.findIndex((el) => el.name === attr) === -1).sort();
  const handleChange = ({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE",
      keys: name.split("."),
      value
    });
  };
  const handleToggleModal = () => {
    setIsModalFormOpen((prev) => !prev);
  };
  const toggleConfirmDialog = () => {
    setIsConfirmDialogOpen((prev) => !prev);
  };
  const handleMetaChange = ({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE_META",
      keys: name.split("."),
      value
    });
  };
  const handleSizeChange = ({ name, value }) => {
    dispatch({
      type: "ON_CHANGE_SIZE",
      name,
      value
    });
  };
  const handleMetaSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SUBMIT_META_FORM"
    });
    handleToggleModal();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    toggleConfirmDialog();
  };
  const submitMutation = (0,react_query_es.useMutation)(
    (body) => {
      return put(
        isContentTypeView ? `/content-manager/content-types/${slug}/configuration` : `/content-manager/components/${slug}/configuration`,
        body
      );
    },
    {
      onSuccess({ data }) {
        if (updateLayout) {
          updateLayout(data.data);
        }
        dispatch({
          type: "SUBMIT_SUCCEEDED"
        });
        toggleConfirmDialog();
        trackUsage("didEditEditSettings");
      },
      onError() {
        toggleNotification({ type: "warning", message: { id: "notification.error" } });
      }
    }
  );
  const { isLoading: isSubmittingForm } = submitMutation;
  const handleConfirm = () => {
    const { layouts, metadatas, settings } = cloneDeep_default()(modifiedData);
    submitMutation.mutate({
      layouts: {
        ...layouts,
        edit: unformatLayout(layouts.edit)
      },
      metadatas,
      settings
    });
  };
  const handleMoveRelation = (fromIndex, toIndex) => {
    dispatch({
      type: "MOVE_RELATION",
      fromIndex,
      toIndex
    });
  };
  const handleMoveField = (fromIndex, toIndex) => {
    dispatch({
      type: "MOVE_FIELD",
      fromIndex,
      toIndex
    });
  };
  const moveItem = (dragIndex, hoverIndex, dragRowIndex, hoverRowIndex) => {
    if (dragRowIndex === hoverRowIndex) {
      dispatch({
        type: "REORDER_ROW",
        dragRowIndex,
        dragIndex,
        hoverIndex
      });
    } else {
      dispatch({
        type: "REORDER_DIFF_ROW",
        dragIndex,
        hoverIndex,
        dragRowIndex,
        hoverRowIndex
      });
    }
  };
  const moveRow = (fromIndex, toIndex) => {
    dispatch({
      type: "MOVE_ROW",
      fromIndex,
      toIndex
    });
  };
  return /* @__PURE__ */ react.createElement(
    LayoutDndProvider,
    {
      isContentTypeView,
      attributes,
      modifiedData,
      slug,
      componentLayouts,
      selectedField: metaToEdit,
      fieldForm: metaForm,
      onMoveRelation: handleMoveRelation,
      onMoveField: handleMoveField,
      moveRow,
      moveItem,
      setEditFieldToSelect: (name) => {
        dispatch({
          type: "SET_FIELD_TO_EDIT",
          name
        });
        handleToggleModal();
      },
      isDraggingSibling,
      setIsDraggingSibling
    },
    /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.T,
      {
        title: formatMessage(
          {
            id: (0,utils/* getTrad */.OB)("components.SettingsViewWrapper.pluginHeader.title"),
            defaultMessage: `Configure the view - ${upperFirst_default()(modelName)}`
          },
          { name: upperFirst_default()(modelName) }
        ),
        subtitle: formatMessage({
          id: (0,utils/* getTrad */.OB)("components.SettingsViewWrapper.pluginHeader.description.edit-settings"),
          defaultMessage: "Customize how the edit view will look like."
        }),
        navigationAction: /* @__PURE__ */ react.createElement(
          dist/* Link */.rU,
          {
            startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null),
            onClick: (e) => {
              e.preventDefault();
              goBack();
            },
            to: "/"
          },
          formatMessage({
            id: "global.back",
            defaultMessage: "Back"
          })
        ),
        primaryAction: /* @__PURE__ */ react.createElement(
          Button/* Button */.z,
          {
            disabled: isEqual_default()(initialData, modifiedData),
            startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
            type: "submit"
          },
          formatMessage({ id: "global.save", defaultMessage: "Save" })
        )
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(
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
      /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
        id: (0,utils/* getTrad */.OB)("containers.SettingPage.settings"),
        defaultMessage: "Settings"
      })), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, null, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
        Select/* Select */.P,
        {
          label: formatMessage({
            id: (0,utils/* getTrad */.OB)("containers.SettingPage.editSettings.entry.title"),
            defaultMessage: "Entry title"
          }),
          hint: formatMessage({
            id: (0,utils/* getTrad */.OB)("containers.SettingPage.editSettings.entry.title.description"),
            defaultMessage: "Set the display field of your entry"
          }),
          onChange: (value) => {
            handleChange({
              target: {
                name: "settings.mainField",
                value: value === "" ? null : value
              }
            });
          },
          value: modifiedData.settings.mainField
        },
        entryTitleOptions.map((attribute) => /* @__PURE__ */ react.createElement(Option/* Option */.W, { key: attribute, value: attribute }, attribute))
      ))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 2, paddingBottom: 2 }, /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null)), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h3" }, formatMessage({
        id: (0,utils/* getTrad */.OB)("containers.SettingPage.view"),
        defaultMessage: "View"
      })), /* @__PURE__ */ react.createElement(
        components_DisplayedFields,
        {
          attributes,
          editLayout,
          fields: editLayoutFields,
          onAddField: (field) => {
            dispatch({
              type: "ON_ADD_FIELD",
              name: field,
              fieldSizes
            });
          },
          onRemoveField: (rowId, index) => {
            dispatch({
              type: "REMOVE_FIELD",
              rowIndex: rowId,
              fieldIndex: index
            });
          }
        }
      ))
    )), /* @__PURE__ */ react.createElement(
      dist/* ConfirmDialog */.QH,
      {
        bodyText: {
          id: (0,utils/* getTrad */.OB)("popUpWarning.warning.updateAllSettings"),
          defaultMessage: "This will modify all your settings"
        },
        iconRightButton: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
        isConfirmButtonLoading: isSubmittingForm,
        isOpen: isConfirmDialogOpen,
        onToggleDialog: toggleConfirmDialog,
        onConfirm: handleConfirm,
        variantRightButton: "success-light"
      }
    )), isModalFormOpen && /* @__PURE__ */ react.createElement(
      components_FormModal,
      {
        onSubmit: handleMetaSubmit,
        onToggle: handleToggleModal,
        onMetaChange: handleMetaChange,
        onSizeChange: handleSizeChange,
        type: attributes?.[metaToEdit]?.type ?? "",
        customFieldUid: attributes?.[metaToEdit]?.customField ?? ""
      }
    ))
  );
};
EditSettingsView.defaultProps = {
  isContentTypeView: false,
  updateLayout: null
};
EditSettingsView.propTypes = {
  components: (prop_types_default()).object.isRequired,
  isContentTypeView: (prop_types_default()).bool,
  mainLayout: prop_types_default().shape({
    attributes: (prop_types_default()).object.isRequired,
    info: (prop_types_default()).object.isRequired,
    layouts: prop_types_default().shape({
      list: (prop_types_default()).array.isRequired,
      edit: (prop_types_default()).array.isRequired
    }).isRequired,
    metadatas: (prop_types_default()).object.isRequired,
    options: (prop_types_default()).object.isRequired
  }).isRequired,
  slug: (prop_types_default()).string.isRequired,
  updateLayout: (prop_types_default()).func
};
/* harmony default export */ const pages_EditSettingsView = (EditSettingsView);

// EXTERNAL MODULE: ./.cache/admin/src/exposedHooks.js
var exposedHooks = __webpack_require__(85338);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/pages/EditViewLayoutManager/constants.js
var constants = __webpack_require__(88848);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditViewLayoutManager/actions.js

const resetProps = () => ({ type: constants/* RESET_PROPS */.c });
const setLayout = (layout, query) => ({
  type: constants/* SET_LAYOUT */.O,
  layout,
  query
});

// EXTERNAL MODULE: ./.cache/admin/src/hooks/useEnterprise/index.js + 1 modules
var useEnterprise = __webpack_require__(80902);
// EXTERNAL MODULE: ./.cache/admin/src/contexts/index.js + 2 modules
var contexts = __webpack_require__(74481);
;// CONCATENATED MODULE: ./.cache/admin/src/shared/hooks/useAdminProvider/index.js


const useAdminProvider = () => {
  const context = (0,react.useContext)(contexts/* AdminContext */.ux);
  return context;
};
/* harmony default export */ const hooks_useAdminProvider = (useAdminProvider);

;// CONCATENATED MODULE: ./.cache/admin/src/shared/hooks/useInjectionZone/index.js

const useInjectionZone = (area) => {
  const { getAdminInjectedComponents } = hooks_useAdminProvider();
  const [moduleName, page, position] = area.split(".");
  return getAdminInjectedComponents(moduleName, page, position);
};
/* harmony default export */ const hooks_useInjectionZone = (useInjectionZone);

;// CONCATENATED MODULE: ./.cache/admin/src/shared/hooks/index.js



;// CONCATENATED MODULE: ./.cache/admin/src/shared/components/InjectionZone/index.js



const InjectionZone = ({ area, ...props }) => {
  const compos = hooks_useInjectionZone(area);
  return compos.map((compo) => /* @__PURE__ */ react.createElement(compo.Component, { key: compo.name, ...props }));
};
InjectionZone.propTypes = {
  area: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_InjectionZone = (InjectionZone);

;// CONCATENATED MODULE: ./.cache/admin/src/shared/components/index.js


// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 40 modules
var axios = __webpack_require__(5466);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/sharedReducers/crudReducer/constants.js
var crudReducer_constants = __webpack_require__(93192);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/sharedReducers/crudReducer/actions.js

const getData = () => {
  return {
    type: crudReducer_constants/* GET_DATA */.ZA
  };
};
const getDataSucceeded = (data) => ({
  type: crudReducer_constants/* GET_DATA_SUCCEEDED */.Id,
  data
});
const initForm = (rawQuery, isSingleType = false) => ({
  type: crudReducer_constants/* INIT_FORM */.TP,
  rawQuery,
  isSingleType
});
const actions_resetProps = () => ({ type: crudReducer_constants/* RESET_PROPS */.c2 });
const setDataStructures = (componentsDataStructure, contentTypeDataStructure) => ({
  type: crudReducer_constants/* SET_DATA_STRUCTURES */.w7,
  componentsDataStructure,
  contentTypeDataStructure
});
const setStatus = (status) => ({
  type: crudReducer_constants/* SET_STATUS */.d0,
  status
});
const submitSucceeded = (data) => ({
  type: crudReducer_constants/* SUBMIT_SUCCEEDED */.t9,
  data
});
const clearSetModifiedDataOnly = () => ({
  type: crudReducer_constants/* CLEAR_SET_MODIFIED_DATA_ONLY */.tE
});

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/sharedReducers/crudReducer/selectors.js
const selectCrudReducer = (state) => state["content-manager_editViewCrudReducer"];
/* harmony default export */ const crudReducer_selectors = (selectCrudReducer);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/CollectionTypeFormWrapper/index.js













const CollectionTypeFormWrapper = ({ allLayoutData, children, slug, id, origin }) => {
  const queryClient = (0,react_query_es.useQueryClient)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { setCurrentStep } = (0,dist/* useGuidedTour */.c1)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const { push, replace } = (0,react_router/* useHistory */.k6)();
  const [{ query, rawQuery }] = (0,dist/* useQueryParams */.Kx)();
  const dispatch = (0,es/* useDispatch */.I0)();
  const { componentsDataStructure, contentTypeDataStructure, data, isLoading, status } = (0,es/* useSelector */.v9)(crudReducer_selectors);
  const redirectionLink = (0,hooks/* useFindRedirectionLink */.Ky)(slug);
  const { formatAPIError } = (0,dist/* useAPIErrorHandler */.So)(utils/* getTrad */.OB);
  const isMounted = (0,react.useRef)(true);
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const allLayoutDataRef = (0,react.useRef)(allLayoutData);
  const fetchClient = (0,dist/* useFetchClient */.kY)();
  const { put, post, del } = fetchClient;
  const isCreatingEntry = id === null;
  const requestURL = isCreatingEntry && !origin ? null : `/content-manager/collection-types/${slug}/${origin || id}`;
  const cleanReceivedData = (0,react.useCallback)((data2) => {
    const cleaned = (0,utils/* removePasswordFieldsFromData */.kc)(
      data2,
      allLayoutDataRef.current.contentType,
      allLayoutDataRef.current.components
    );
    return (0,dist/* formatContentTypeData */.dU)(
      cleaned,
      allLayoutDataRef.current.contentType,
      allLayoutDataRef.current.components
    );
  }, []);
  (0,react.useEffect)(() => {
    const componentsDataStructure2 = Object.keys(allLayoutData.components).reduce((acc, current) => {
      const defaultComponentForm = (0,utils/* createDefaultForm */.Di)(
        get_default()(allLayoutData, ["components", current, "attributes"], {}),
        allLayoutData.components
      );
      acc[current] = (0,dist/* formatContentTypeData */.dU)(
        defaultComponentForm,
        allLayoutData.components[current],
        allLayoutData.components
      );
      return acc;
    }, {});
    const contentTypeDataStructure2 = (0,utils/* createDefaultForm */.Di)(
      allLayoutData.contentType.attributes,
      allLayoutData.components
    );
    const contentTypeDataStructureFormatted = (0,dist/* formatContentTypeData */.dU)(
      contentTypeDataStructure2,
      allLayoutData.contentType,
      allLayoutData.components
    );
    dispatch(setDataStructures(componentsDataStructure2, contentTypeDataStructureFormatted));
  }, [allLayoutData, dispatch]);
  (0,react.useEffect)(() => {
    return () => {
      dispatch(actions_resetProps());
    };
  }, [dispatch]);
  (0,react.useEffect)(() => {
    const CancelToken = axios["default"].CancelToken;
    const source = CancelToken.source();
    const fetchData = async (source2) => {
      dispatch(getData());
      try {
        const { data: data2 } = await fetchClient.get(requestURL, { cancelToken: source2.token });
        dispatch(getDataSucceeded(cleanReceivedData(data2)));
      } catch (err) {
        if (axios["default"].isCancel(err)) {
          return;
        }
        const resStatus = get_default()(err, "response.status", null);
        if (resStatus === 404) {
          push(redirectionLink);
          return;
        }
        if (resStatus === 403) {
          toggleNotification({
            type: "info",
            message: { id: (0,utils/* getTrad */.OB)("permissions.not-allowed.update") }
          });
          push(redirectionLink);
        }
      }
    };
    const init = async () => {
      dispatch(getData());
      dispatch(initForm(rawQuery));
    };
    if (!isMounted.current) {
      return () => {
      };
    }
    if (requestURL) {
      fetchData(source);
    } else {
      init();
    }
    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, [
    fetchClient,
    cleanReceivedData,
    push,
    requestURL,
    dispatch,
    rawQuery,
    redirectionLink,
    toggleNotification
  ]);
  const displayErrors = (0,react.useCallback)(
    (err) => {
      toggleNotification({ type: "warning", message: formatAPIError(err) });
    },
    [toggleNotification, formatAPIError]
  );
  const onDelete = (0,react.useCallback)(
    async (trackerProperty) => {
      try {
        trackUsageRef.current("willDeleteEntry", trackerProperty);
        const { data: data2 } = await del(`/content-manager/collection-types/${slug}/${id}`);
        toggleNotification({
          type: "success",
          message: { id: (0,utils/* getTrad */.OB)("success.record.delete") }
        });
        trackUsageRef.current("didDeleteEntry", trackerProperty);
        replace(redirectionLink);
        return Promise.resolve(data2);
      } catch (err) {
        trackUsageRef.current("didNotDeleteEntry", { error: err, ...trackerProperty });
        return Promise.reject(err);
      }
    },
    [id, slug, toggleNotification, del, redirectionLink, replace]
  );
  const onPost = (0,react.useCallback)(
    async (body, trackerProperty) => {
      const isCloning = typeof origin === "string";
      const endPoint = isCloning ? `/content-manager/collection-types/${slug}/clone/${origin}` : `/content-manager/collection-types/${slug}`;
      try {
        dispatch(setStatus("submit-pending"));
        const { id: id2, ...restBody } = body;
        const { data: data2 } = await post(endPoint, isCloning ? restBody : body, {
          params: query
        });
        trackUsageRef.current("didCreateEntry", trackerProperty);
        toggleNotification({
          type: "success",
          message: { id: (0,utils/* getTrad */.OB)("success.record.save") }
        });
        setCurrentStep("contentManager.success");
        queryClient.invalidateQueries(["relation"]);
        dispatch(submitSucceeded(cleanReceivedData(data2)));
        dispatch(setStatus("resolved"));
        replace(`/content-manager/collectionType/${slug}/${data2.id}${rawQuery}`);
        return Promise.resolve(data2);
      } catch (err) {
        displayErrors(err);
        trackUsageRef.current("didNotCreateEntry", { error: err, trackerProperty });
        dispatch(setStatus("resolved"));
        return Promise.reject(err);
      }
    },
    [
      origin,
      cleanReceivedData,
      displayErrors,
      replace,
      slug,
      dispatch,
      query,
      toggleNotification,
      setCurrentStep,
      queryClient,
      post,
      rawQuery
    ]
  );
  const onDraftRelationCheck = (0,react.useCallback)(async () => {
    try {
      trackUsageRef.current("willCheckDraftRelations");
      const endPoint = `/content-manager/collection-types/${slug}/${id}/actions/countDraftRelations`;
      dispatch(setStatus("draft-relation-check-pending"));
      const numberOfDraftRelations = await fetchClient.get(endPoint);
      trackUsageRef.current("didCheckDraftRelations");
      dispatch(setStatus("resolved"));
      return numberOfDraftRelations.data.data;
    } catch (err) {
      displayErrors(err);
      dispatch(setStatus("resolved"));
      return Promise.reject(err);
    }
  }, [displayErrors, id, slug, dispatch, fetchClient]);
  const onPublish = (0,react.useCallback)(async () => {
    try {
      trackUsageRef.current("willPublishEntry");
      const endPoint = `/content-manager/collection-types/${slug}/${id}/actions/publish`;
      dispatch(setStatus("publish-pending"));
      const { data: data2 } = await post(endPoint);
      trackUsageRef.current("didPublishEntry");
      dispatch(submitSucceeded(cleanReceivedData(data2)));
      dispatch(setStatus("resolved"));
      toggleNotification({
        type: "success",
        message: { id: (0,utils/* getTrad */.OB)("success.record.publish") }
      });
      return Promise.resolve(data2);
    } catch (err) {
      displayErrors(err);
      dispatch(setStatus("resolved"));
      return Promise.reject(err);
    }
  }, [cleanReceivedData, displayErrors, id, slug, dispatch, toggleNotification, post]);
  const onPut = (0,react.useCallback)(
    async (body, trackerProperty) => {
      const endPoint = `/content-manager/collection-types/${slug}/${id}`;
      try {
        trackUsageRef.current("willEditEntry", trackerProperty);
        dispatch(setStatus("submit-pending"));
        const { data: data2 } = await put(endPoint, body);
        trackUsageRef.current("didEditEntry", { trackerProperty });
        toggleNotification({
          type: "success",
          message: { id: (0,utils/* getTrad */.OB)("success.record.save") }
        });
        queryClient.invalidateQueries(["relation"]);
        dispatch(submitSucceeded(cleanReceivedData(data2)));
        dispatch(setStatus("resolved"));
        return Promise.resolve(data2);
      } catch (err) {
        trackUsageRef.current("didNotEditEntry", { error: err, trackerProperty });
        displayErrors(err);
        dispatch(setStatus("resolved"));
        return Promise.reject(err);
      }
    },
    [cleanReceivedData, displayErrors, slug, id, dispatch, toggleNotification, queryClient, put]
  );
  const onUnpublish = (0,react.useCallback)(async () => {
    const endPoint = `/content-manager/collection-types/${slug}/${id}/actions/unpublish`;
    dispatch(setStatus("unpublish-pending"));
    try {
      trackUsageRef.current("willUnpublishEntry");
      const { data: data2 } = await post(endPoint);
      trackUsageRef.current("didUnpublishEntry");
      toggleNotification({
        type: "success",
        message: { id: (0,utils/* getTrad */.OB)("success.record.unpublish") }
      });
      dispatch(submitSucceeded(cleanReceivedData(data2)));
      dispatch(setStatus("resolved"));
      return Promise.resolve(data2);
    } catch (err) {
      dispatch(setStatus("resolved"));
      displayErrors(err);
      return Promise.reject(err);
    }
  }, [cleanReceivedData, displayErrors, id, slug, dispatch, toggleNotification, post]);
  return children({
    componentsDataStructure,
    contentTypeDataStructure,
    data,
    isCreatingEntry,
    isLoadingForData: isLoading,
    onDelete,
    onPost,
    onPublish,
    onDraftRelationCheck,
    onPut,
    onUnpublish,
    status,
    redirectionLink
  });
};
CollectionTypeFormWrapper.defaultProps = {
  id: null,
  origin: null
};
CollectionTypeFormWrapper.propTypes = {
  allLayoutData: prop_types_default().exact({
    components: (prop_types_default()).object.isRequired,
    contentType: prop_types_default().shape({
      apiID: (prop_types_default()).string.isRequired,
      attributes: (prop_types_default()).object.isRequired,
      info: (prop_types_default()).object.isRequired,
      isDisplayed: (prop_types_default()).bool.isRequired,
      kind: (prop_types_default()).string.isRequired,
      layouts: (prop_types_default()).object.isRequired,
      metadatas: (prop_types_default()).object.isRequired,
      options: (prop_types_default()).object.isRequired,
      pluginOptions: (prop_types_default()).object,
      settings: (prop_types_default()).object.isRequired,
      uid: (prop_types_default()).string.isRequired
    }).isRequired
  }).isRequired,
  children: (prop_types_default()).func.isRequired,
  id: (prop_types_default()).string,
  origin: (prop_types_default()).string,
  slug: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_CollectionTypeFormWrapper = ((0,react.memo)(CollectionTypeFormWrapper, (isEqual_default())));

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(10989);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseButton/BaseButton.mjs
var BaseButton = __webpack_require__(8976);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/PlusCircle.mjs
var PlusCircle = __webpack_require__(77225);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/components/AddComponentButton.js





const AddComponentButton = ({ hasError, isDisabled, isOpen, children, onClick }) => {
  return /* @__PURE__ */ react.createElement(
    StyledButton,
    {
      type: "button",
      onClick,
      disabled: isDisabled,
      hasError,
      background: "neutral0",
      paddingTop: 3,
      paddingBottom: 3,
      paddingLeft: 4,
      paddingRight: 4,
      style: { cursor: isDisabled ? "not-allowed" : "pointer" }
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { as: "span", gap: 2 }, /* @__PURE__ */ react.createElement(StyledAddIcon, { "aria-hidden": true, $isOpen: isOpen, $hasError: hasError && !isOpen }), /* @__PURE__ */ react.createElement(
      Typography/* Typography */.Z,
      {
        variant: "pi",
        fontWeight: "bold",
        textColor: hasError && !isOpen ? "danger600" : "neutral500"
      },
      children
    ))
  );
};
const StyledAddIcon = (0,styled_components_browser_esm/* default */.ZP)((0,PlusCircle/* default */.Z))`
  height: ${({ theme }) => theme.spaces[6]};
  width: ${({ theme }) => theme.spaces[6]};
  transform: ${({ $isOpen }) => $isOpen ? "rotate(45deg)" : "rotate(0deg)"};
  > circle {
    fill: ${({ theme, $hasError }) => $hasError ? theme.colors.danger200 : theme.colors.neutral150};
  }
  > path {
    fill: ${({ theme, $hasError }) => $hasError ? theme.colors.danger600 : theme.colors.neutral600};
  }
`;
const StyledButton = (0,styled_components_browser_esm/* default */.ZP)((0,BaseButton/* BaseButton */.Y))`
  border-radius: 26px;
  border-color: ${({ theme }) => theme.colors.neutral150};
  box-shadow: ${({ theme }) => theme.shadows.filterShadow};

  &:hover {
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
AddComponentButton.defaultProps = {
  hasError: false,
  isDisabled: false,
  isOpen: false
};
AddComponentButton.propTypes = {
  children: (prop_types_default()).node.isRequired,
  hasError: (prop_types_default()).bool,
  isDisabled: (prop_types_default()).bool,
  isOpen: (prop_types_default()).bool,
  onClick: (prop_types_default()).func.isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/KeyboardNavigable/KeyboardNavigable.mjs
var KeyboardNavigable = __webpack_require__(1099);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/Accordion.mjs
var Accordion = __webpack_require__(45322);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionToggle.mjs + 1 modules
var AccordionToggle = __webpack_require__(24920);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionContent.mjs
var AccordionContent = __webpack_require__(34642);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/components/ComponentCategory.js







const ComponentCategory = ({
  category,
  components,
  variant,
  isOpen,
  onAddComponent,
  onToggle
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const handleToggle = () => {
    onToggle(category);
  };
  return /* @__PURE__ */ react.createElement(Accordion/* Accordion */.U, { expanded: isOpen, onToggle: handleToggle, size: "S" }, /* @__PURE__ */ react.createElement(
    AccordionToggle/* AccordionToggle */.B,
    {
      variant,
      title: formatMessage({ id: category, defaultMessage: category }),
      togglePosition: "left"
    }
  ), /* @__PURE__ */ react.createElement(AccordionContent/* AccordionContent */.v, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 4, paddingBottom: 4, paddingLeft: 3, paddingRight: 3 }, /* @__PURE__ */ react.createElement(ComponentCategory_Grid, null, components.map(({ componentUid, info: { displayName, icon } }) => /* @__PURE__ */ react.createElement(
    ComponentBox,
    {
      key: componentUid,
      as: "button",
      type: "button",
      background: "neutral100",
      justifyContent: "center",
      onClick: onAddComponent(componentUid),
      hasRadius: true,
      height: (0,dist/* pxToRem */.Q1)(84),
      shrink: 0,
      borderColor: "neutral200"
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", gap: 1, alignItems: "center", justifyContent: "center" }, /* @__PURE__ */ react.createElement(ComponentIcon, { icon }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold", textColor: "neutral600" }, formatMessage({ id: displayName, defaultMessage: displayName })))
  ))))));
};
const ComponentCategory_Grid = styled_components_browser_esm/* default */.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, ${140 / 16}rem);
  grid-gap: ${({ theme }) => theme.spaces[1]};
`;
const ComponentBox = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary200};
    background: ${({ theme }) => theme.colors.primary100};

    ${Typography/* Typography */.Z} {
      color: ${({ theme }) => theme.colors.primary600};
    }

    /* > Flex > ComponentIcon */
    > div > div:first-child {
      background: ${({ theme }) => theme.colors.primary200};
      color: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
ComponentCategory.defaultProps = {
  components: [],
  isOpen: false,
  variant: "primary"
};
ComponentCategory.propTypes = {
  category: (prop_types_default()).string.isRequired,
  components: (prop_types_default()).array,
  isOpen: (prop_types_default()).bool,
  onAddComponent: (prop_types_default()).func.isRequired,
  onToggle: (prop_types_default()).func.isRequired,
  variant: prop_types_default().oneOf(["primary", "secondary"])
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/components/ComponentPicker.js






const ComponentPicker = ({ dynamicComponentsByCategory, isOpen, onClickAddComponent }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [categoryToOpen, setCategoryToOpen] = (0,react.useState)("");
  (0,react.useEffect)(() => {
    const categoryKeys = Object.keys(dynamicComponentsByCategory);
    if (isOpen && categoryKeys.length > 0) {
      setCategoryToOpen(categoryKeys[0]);
    }
  }, [isOpen, dynamicComponentsByCategory]);
  const handleAddComponentToDz = (componentUid) => () => {
    onClickAddComponent(componentUid);
    setCategoryToOpen("");
  };
  const handleClickToggle = (categoryName) => {
    setCategoryToOpen((currentCat) => currentCat === categoryName ? "" : categoryName);
  };
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 5,
      paddingRight: 5,
      background: "neutral0",
      shadow: "tableShadow",
      borderColor: "neutral150",
      hasRadius: true
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: "neutral600" }, formatMessage({
      id: (0,utils/* getTrad */.OB)("components.DynamicZone.ComponentPicker-label"),
      defaultMessage: "Pick one component"
    }))),
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 2 }, /* @__PURE__ */ react.createElement(KeyboardNavigable/* KeyboardNavigable */.k, { attributeName: "data-strapi-accordion-toggle" }, Object.entries(dynamicComponentsByCategory).map(([category, components], index) => /* @__PURE__ */ react.createElement(
      ComponentCategory,
      {
        key: category,
        category,
        components,
        onAddComponent: handleAddComponentToDz,
        isOpen: category === categoryToOpen,
        onToggle: handleClickToggle,
        variant: index % 2 === 1 ? "primary" : "secondary"
      }
    ))))
  );
};
ComponentPicker.defaultProps = {
  dynamicComponentsByCategory: {},
  isOpen: false
};
ComponentPicker.propTypes = {
  dynamicComponentsByCategory: prop_types_default().shape({
    components: prop_types_default().arrayOf(
      prop_types_default().shape({
        componentUid: (prop_types_default()).string.isRequired,
        info: (prop_types_default()).object
      })
    )
  }),
  isOpen: (prop_types_default()).bool,
  onClickAddComponent: (prop_types_default()).func.isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SimpleMenu/SimpleMenu.mjs
var SimpleMenu = __webpack_require__(69933);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/More.mjs
var More = __webpack_require__(75438);
// EXTERNAL MODULE: ./node_modules/lodash/size.js
var size = __webpack_require__(84921);
var size_default = /*#__PURE__*/__webpack_require__.n(size);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/ComponentInitializer/index.js








const IconWrapper = styled_components_browser_esm/* default */.ZP.span`
  > svg {
    width: ${(0,dist/* pxToRem */.Q1)(24)};
    height: ${(0,dist/* pxToRem */.Q1)(24)};
    > circle {
      fill: ${({ theme }) => theme.colors.primary200};
    }
    > path {
      fill: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const ComponentInitializer = ({ error, isReadOnly, onClick }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      as: "button",
      background: "neutral100",
      borderColor: error ? "danger600" : "neutral200",
      disabled: isReadOnly,
      hasRadius: true,
      onClick,
      paddingTop: 9,
      paddingBottom: 9,
      type: "button"
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", gap: 2 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center", style: { cursor: isReadOnly ? "not-allowed" : "inherit" } }, /* @__PURE__ */ react.createElement(IconWrapper, null, /* @__PURE__ */ react.createElement(PlusCircle/* default */.Z, null))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "primary600", variant: "pi", fontWeight: "bold" }, formatMessage({
      id: (0,utils/* getTrad */.OB)("components.empty-repeatable"),
      defaultMessage: "No entry yet. Click on the button below to add one."
    }))))
  ), error?.id && /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "danger600", variant: "pi" }, formatMessage(error, { ...error.values })));
};
ComponentInitializer.defaultProps = {
  error: void 0,
  isReadOnly: false
};
ComponentInitializer.propTypes = {
  error: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  isReadOnly: (prop_types_default()).bool,
  onClick: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ComponentInitializer = (ComponentInitializer);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useLazyComponents/index.js


const componentStore = /* @__PURE__ */ new Map();
const useLazyComponents = (componentUids = []) => {
  const [lazyComponentStore, setLazyComponentStore] = (0,react.useState)(Object.fromEntries(componentStore));
  const newUids = componentUids.filter((uid) => !componentStore.get(uid));
  const [loading, setLoading] = (0,react.useState)(() => !!newUids.length);
  const customFieldsRegistry = (0,dist/* useCustomFields */.mZ)();
  (0,react.useEffect)(() => {
    const setStore = (store) => {
      setLazyComponentStore(store);
      setLoading(false);
    };
    const lazyLoadComponents = async (uids, components) => {
      const modules = await Promise.all(components);
      uids.forEach((uid, index) => {
        componentStore.set(uid, modules[index].default);
      });
      setStore(Object.fromEntries(componentStore));
    };
    if (newUids.length > 0) {
      setLoading(true);
      const componentPromises = newUids.reduce((arrayOfPromises, uid) => {
        const customField = customFieldsRegistry.get(uid);
        if (customField) {
          arrayOfPromises.push(customField.components.Input());
        }
        return arrayOfPromises;
      }, []);
      if (componentPromises.length > 0) {
        lazyLoadComponents(newUids, componentPromises);
      }
    }
  }, [newUids, customFieldsRegistry]);
  const cleanup = (0,react.useCallback)(() => {
    componentStore.clear();
    setLazyComponentStore({});
  }, []);
  return { isLazyLoading: loading, lazyComponentStore, cleanup };
};
/* harmony default export */ const hooks_useLazyComponents = (useLazyComponents);

// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(74919);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/lodash/take.js
var take = __webpack_require__(41942);
var take_default = /*#__PURE__*/__webpack_require__.n(take);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldInput.mjs
var FieldInput = __webpack_require__(77804);
// EXTERNAL MODULE: ./node_modules/slate/dist/index.es.js + 1 modules
var index_es = __webpack_require__(80489);
// EXTERNAL MODULE: ./node_modules/slate-history/dist/index.es.js + 1 modules
var dist_index_es = __webpack_require__(73091);
// EXTERNAL MODULE: ./node_modules/slate-react/dist/index.es.js + 26 modules
var slate_react_dist_index_es = __webpack_require__(74908);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Hint/index.js



const Hint = ({ id, error, name, hint }) => {
  if (hint.length === 0 || error) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "p", variant: "pi", id: `${id || name}-hint`, textColor: "neutral600" }, hint);
};
Hint.defaultProps = {
  id: void 0,
  error: void 0,
  hint: ""
};
Hint.propTypes = {
  hint: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).array]),
  error: (prop_types_default()).string,
  id: (prop_types_default()).string,
  name: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_Hint = (Hint);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseLink/BaseLink.mjs
var BaseLink = __webpack_require__(30413);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Popover/Popover.mjs
var Popover = __webpack_require__(8990);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/Field.mjs
var Field = __webpack_require__(1821);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.mjs
var FieldLabel = __webpack_require__(2878);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Paragraph.mjs
var Paragraph = __webpack_require__(82447);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/HeadingOne.mjs
var HeadingOne = __webpack_require__(30476);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/HeadingTwo.mjs
var HeadingTwo = __webpack_require__(18138);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/HeadingThree.mjs
var HeadingThree = __webpack_require__(19072);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/HeadingFour.mjs
var HeadingFour = __webpack_require__(73812);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/HeadingFive.mjs
var HeadingFive = __webpack_require__(64379);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/HeadingSix.mjs
var HeadingSix = __webpack_require__(42925);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/NumberList.mjs
var NumberList = __webpack_require__(84076);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/BlocksEditor/utils/links.js

const addProtocol = (url, protocol = "https://") => {
  const allowedProtocols = ["http://", "https://", "mailto:", "tel:"];
  if (allowedProtocols.some((allowedProtocol) => url.startsWith(allowedProtocol))) {
    return url;
  }
  return `${protocol}${url}`;
};
const removeLink = (editor) => {
  index_es/* Transforms */.YR.unwrapNodes(editor, {
    match: (node) => !index_es/* Editor */.ML.isEditor(node) && index_es/* Element */.W_.isElement(node) && node.type === "link"
  });
};
const insertLink = (editor, { url }) => {
  if (editor.selection) {
    const linkNodes = Array.from(
      index_es/* Editor */.ML.nodes(editor, {
        at: editor.selection,
        match: (node) => node.type === "link"
      })
    );
    linkNodes.forEach(([, path]) => {
      index_es/* Transforms */.YR.unwrapNodes(editor, { at: path });
    });
    if (index_es/* Range */.e6.isCollapsed(editor.selection)) {
      const link = { type: "link", url: url ? addProtocol(url) : "", children: [{ text: url }] };
      index_es/* Transforms */.YR.insertNodes(editor, link);
    } else {
      index_es/* Transforms */.YR.wrapNodes(
        editor,
        { type: "link", url: url ? addProtocol(url) : "" },
        { split: true }
      );
    }
  }
};
const editLink = (editor, { url, text }) => {
  if (editor.selection) {
    const [linkNode, linkPath] = index_es/* Editor */.ML.above(editor, { match: (node) => node.type === "link" });
    if (linkNode) {
      index_es/* Transforms */.YR.setNodes(editor, { url: addProtocol(url) }, { at: linkPath });
      if (text !== "" && text !== index_es/* Editor */.ML.string(editor, linkPath)) {
        const linkNodeChildrens = Array.from(index_es/* Node */.NB.children(editor, linkPath, { reverse: true }));
        linkNodeChildrens.forEach(([, childPath]) => {
          index_es/* Transforms */.YR.removeNodes(editor, { at: childPath });
        });
        index_es/* Transforms */.YR.insertNodes(editor, [{ text }], { at: linkPath.concat(0) });
      }
    }
  }
};


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/BlocksEditor/hooks/useBlocksStore.js










const H1 = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z)).attrs({ as: "h1" })`
  font-size: ${42 / 16}rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;
const H2 = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z)).attrs({ as: "h2" })`
  font-size: ${35 / 16}rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;
const H3 = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z)).attrs({ as: "h3" })`
  font-size: ${29 / 16}rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;
const H4 = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z)).attrs({ as: "h4" })`
  font-size: ${24 / 16}rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;
const H5 = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z)).attrs({ as: "h5" })`
  font-size: ${20 / 16}rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;
const H6 = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z)).attrs({ as: "h6" })`
  font-size: 1rem;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;
const Heading = ({ attributes, children, element }) => {
  switch (element.level) {
    case 1:
      return /* @__PURE__ */ react.createElement(H1, { ...attributes }, children);
    case 2:
      return /* @__PURE__ */ react.createElement(H2, { ...attributes }, children);
    case 3:
      return /* @__PURE__ */ react.createElement(H3, { ...attributes }, children);
    case 4:
      return /* @__PURE__ */ react.createElement(H4, { ...attributes }, children);
    case 5:
      return /* @__PURE__ */ react.createElement(H5, { ...attributes }, children);
    case 6:
      return /* @__PURE__ */ react.createElement(H6, { ...attributes }, children);
    default:
      return null;
  }
};
Heading.propTypes = {
  attributes: (prop_types_default()).object.isRequired,
  children: (prop_types_default()).node.isRequired,
  element: prop_types_default().shape({
    level: prop_types_default().oneOf([1, 2, 3, 4, 5, 6]).isRequired
  }).isRequired
};
const CodeBlock = styled_components_browser_esm/* default */.ZP.pre.attrs({ role: "code" })`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.neutral100};
  max-width: 100%;
  overflow: auto;
  padding: ${({ theme }) => `${theme.spaces[3]} ${theme.spaces[4]}`};
  flex-shrink: 0;
  & > code {
    font-family: 'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas,
      monospace;
    color: ${({ theme }) => theme.colors.neutral800};
    overflow: auto;
    max-width: 100%;
  }
`;
const Blockquote = styled_components_browser_esm/* default */.ZP.blockquote.attrs({ role: "blockquote" })`
  margin: ${({ theme }) => `${theme.spaces[4]} 0`};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  border-left: ${({ theme }) => `${theme.spaces[1]} solid ${theme.colors.neutral150}`};
  padding: ${({ theme }) => theme.spaces[2]} ${({ theme }) => theme.spaces[5]};
`;
const listStyle = (0,styled_components_browser_esm/* css */.iv)`
  margin-block-start: ${({ theme }) => theme.spaces[4]};
  margin-block-end: ${({ theme }) => theme.spaces[4]};
  margin-inline-start: ${({ theme }) => theme.spaces[0]};
  margin-inline-end: ${({ theme }) => theme.spaces[0]};
  padding-inline-start: ${({ theme }) => theme.spaces[4]};

  ol,
  ul {
    margin-block-start: ${({ theme }) => theme.spaces[0]};
    margin-block-end: ${({ theme }) => theme.spaces[0]};
  }
`;
const Orderedlist = styled_components_browser_esm/* default */.ZP.ol`
  list-style-type: decimal;
  ${listStyle}
`;
const Unorderedlist = styled_components_browser_esm/* default */.ZP.ul`
  list-style-type: disc;
  ${listStyle}
`;
const List = ({ attributes, children, element }) => {
  if (element.format === "ordered")
    return /* @__PURE__ */ react.createElement(Orderedlist, { ...attributes }, children);
  return /* @__PURE__ */ react.createElement(Unorderedlist, { ...attributes }, children);
};
List.propTypes = {
  attributes: (prop_types_default()).object.isRequired,
  children: (prop_types_default()).node.isRequired,
  element: prop_types_default().shape({
    format: (prop_types_default()).string.isRequired
  }).isRequired
};
const replaceListWithEmptyBlock = (editor, currentListPath) => {
  index_es/* Transforms */.YR.removeNodes(editor, { at: currentListPath });
  if (currentListPath[0] === 0) {
    index_es/* Transforms */.YR.insertNodes(
      editor,
      {
        type: "paragraph",
        children: [{ type: "text", text: "" }]
      },
      { at: currentListPath }
    );
    index_es/* Transforms */.YR.select(editor, currentListPath);
  }
};
const handleBackspaceKeyOnList = (editor, event) => {
  const [currentListItem, currentListItemPath] = index_es/* Editor */.ML.parent(editor, editor.selection.anchor);
  const [currentList, currentListPath] = index_es/* Editor */.ML.parent(editor, currentListItemPath);
  const isListEmpty = currentList.children.length === 1 && currentListItem.children[0].text === "";
  if (isListEmpty) {
    event.preventDefault();
    replaceListWithEmptyBlock(editor, currentListPath);
  }
};
const handleEnterKeyOnList = (editor) => {
  const [currentListItem, currentListItemPath] = index_es/* Editor */.ML.above(editor, {
    matchNode: (node) => node.type === "list-item"
  });
  const [currentList, currentListPath] = index_es/* Editor */.ML.parent(editor, currentListItemPath);
  const isListEmpty = currentList.children.length === 1 && currentListItem.children[0].text === "";
  const isListItemEmpty = currentListItem.children.length === 1 && currentListItem.children[0].text === "";
  if (isListEmpty) {
    replaceListWithEmptyBlock(editor, currentListPath);
  } else if (isListItemEmpty) {
    index_es/* Transforms */.YR.removeNodes(editor, { at: currentListItemPath });
    const listNodeEntry = index_es/* Editor */.ML.above(editor, { match: (n) => n.type === "list" });
    const createdParagraphPath = index_es/* Path */.y$.next(listNodeEntry[1]);
    index_es/* Transforms */.YR.insertNodes(
      editor,
      {
        type: "paragraph",
        children: [{ type: "text", text: "" }]
      },
      { at: createdParagraphPath }
    );
    index_es/* Transforms */.YR.select(editor, createdParagraphPath);
  } else {
    index_es/* Transforms */.YR.splitNodes(editor, { always: true });
  }
};
const Img = styled_components_browser_esm/* default */.ZP.img`
  max-height: calc(512px - 56px);
  max-width: 100%;
  object-fit: contain;
`;
const Image = ({ attributes, children, element }) => {
  if (!element.image)
    return null;
  const { url, alternativeText, width, height } = element.image;
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { ...attributes }, children, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { background: "neutral100", contentEditable: false, justifyContent: "center" }, /* @__PURE__ */ react.createElement(Img, { src: url, alt: alternativeText, width, height })));
};
Image.propTypes = {
  attributes: (prop_types_default()).object.isRequired,
  children: (prop_types_default()).node.isRequired,
  element: prop_types_default().shape({
    image: prop_types_default().shape({
      url: (prop_types_default()).string.isRequired,
      alternativeText: (prop_types_default()).string,
      width: (prop_types_default()).number,
      height: (prop_types_default()).number
    })
  }).isRequired
};
const useBlocksStore_Link = react.forwardRef(({ element, children, ...attributes }, forwardedRef) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const editor = (0,slate_react_dist_index_es/* useSlate */.ui)();
  const path = slate_react_dist_index_es/* ReactEditor */.F3.findPath(editor, element);
  const [popoverOpen, setPopoverOpen] = react.useState(
    editor.lastInsertedLinkPath ? index_es/* Path */.y$.equals(path, editor.lastInsertedLinkPath) : false
  );
  const [isEditing, setIsEditing] = react.useState(element.url === "");
  const linkRef = react.useRef(null);
  const elementText = element.children.map((child) => child.text).join("");
  const [linkText, setLinkText] = react.useState(elementText);
  const [linkUrl, setLinkUrl] = react.useState(element.url);
  const handleOpenEditPopover = (e) => {
    e.preventDefault();
    setPopoverOpen(true);
  };
  const handleSave = (e) => {
    e.stopPropagation();
    if (index_es/* Range */.e6.isCollapsed(editor.selection)) {
      const [, parentPath] = index_es/* Editor */.ML.parent(editor, editor.selection.focus?.path);
      index_es/* Transforms */.YR.select(editor, parentPath);
    }
    editLink(editor, { url: linkUrl, text: linkText });
    setIsEditing(false);
  };
  const handleCancel = () => {
    setIsEditing(false);
    if (element.url === "") {
      removeLink(editor);
    }
  };
  const handleDismiss = () => {
    setPopoverOpen(false);
    if (element.url === "") {
      removeLink(editor);
    }
    slate_react_dist_index_es/* ReactEditor */.F3.focus(editor);
  };
  const composedRefs = (0,utils/* composeRefs */.FE)(linkRef, forwardedRef);
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    BaseLink/* BaseLink */.f,
    {
      ...attributes,
      ref: composedRefs,
      href: element.url,
      onClick: handleOpenEditPopover,
      color: "primary600"
    },
    children
  ), popoverOpen && /* @__PURE__ */ react.createElement(Popover/* Popover */.J2, { source: linkRef, onDismiss: handleDismiss, padding: 4, contentEditable: false }, isEditing ? /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { as: "form", onSubmit: handleSave, direction: "column", gap: 4 }, /* @__PURE__ */ react.createElement(Field/* Field */.g, { width: "300px" }, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, null, formatMessage({
    id: "components.Blocks.popover.text",
    defaultMessage: "Text"
  })), /* @__PURE__ */ react.createElement(
    FieldInput/* FieldInput */._,
    {
      name: "text",
      placeholder: formatMessage({
        id: "components.Blocks.popover.text.placeholder",
        defaultMessage: "Enter link text"
      }),
      value: linkText,
      onChange: (e) => setLinkText(e.target.value)
    }
  )), /* @__PURE__ */ react.createElement(Field/* Field */.g, { width: "300px" }, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, null, formatMessage({
    id: "components.Blocks.popover.link",
    defaultMessage: "Link"
  })), /* @__PURE__ */ react.createElement(
    FieldInput/* FieldInput */._,
    {
      name: "url",
      placeholder: "https://strapi.io",
      value: linkUrl,
      onChange: (e) => setLinkUrl(e.target.value)
    }
  )), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "end", width: "100%", gap: 2 }, /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "tertiary", onClick: handleCancel }, formatMessage({
    id: "components.Blocks.popover.cancel",
    defaultMessage: "Cancel"
  })), /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit", disabled: !linkText || !linkUrl }, formatMessage({
    id: "components.Blocks.popover.save",
    defaultMessage: "Save"
  })))) : /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", gap: 4, alignItems: "start", width: "400px" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, elementText), /* @__PURE__ */ react.createElement(BaseLink/* BaseLink */.f, { href: element.url, target: "_blank", color: "primary600" }, element.url), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "end", width: "100%", gap: 2 }, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      icon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null),
      size: "L",
      variant: "danger",
      onClick: () => removeLink(editor),
      label: formatMessage({
        id: "components.Blocks.popover.delete",
        defaultMessage: "Delete"
      })
    }
  ), /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null),
      size: "L",
      onClick: () => setIsEditing(true),
      label: formatMessage({
        id: "components.Blocks.popover.edit",
        defaultMessage: "Edit"
      })
    }
  )))));
});
useBlocksStore_Link.propTypes = {
  element: (prop_types_default()).object.isRequired,
  children: (prop_types_default()).node.isRequired
};
function useBlocksStore() {
  return {
    paragraph: {
      renderElement: (props) => /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "p", variant: "omega", ...props.attributes }, props.children),
      icon: Paragraph/* default */.Z,
      label: {
        id: "components.Blocks.blocks.text",
        defaultMessage: "Text"
      },
      value: {
        type: "paragraph"
      },
      matchNode: (node) => node.type === "paragraph",
      isInBlocksSelector: true,
      handleEnterKey(editor) {
        const anchorPathInitialPosition = editor.selection.anchor.path;
        index_es/* Transforms */.YR.splitNodes(editor, {
          /**
           * Makes sure we always create a new node,
           * even if there's nothing to the right of the cursor in the node.
           */
          always: true
        });
        const [fragmentedNode] = index_es/* Editor */.ML.parent(editor, editor.selection.anchor.path);
        index_es/* Transforms */.YR.removeNodes(editor, editor.selection);
        const hasNextNode = editor.children.length - anchorPathInitialPosition[0] > 1;
        index_es/* Transforms */.YR.insertNodes(
          editor,
          {
            type: "paragraph",
            children: fragmentedNode.children
          },
          {
            at: hasNextNode ? [anchorPathInitialPosition[0] + 1] : [editor.children.length]
          }
        );
        index_es/* Transforms */.YR.select(editor, editor.start([anchorPathInitialPosition[0] + 1]));
      }
    },
    "heading-one": {
      renderElement: (props) => /* @__PURE__ */ react.createElement(Heading, { ...props }),
      icon: HeadingOne/* default */.Z,
      label: {
        id: "components.Blocks.blocks.heading1",
        defaultMessage: "Heading 1"
      },
      value: {
        type: "heading",
        level: 1
      },
      matchNode: (node) => node.type === "heading" && node.level === 1,
      isInBlocksSelector: true
    },
    "heading-two": {
      renderElement: (props) => /* @__PURE__ */ react.createElement(Heading, { ...props }),
      icon: HeadingTwo/* default */.Z,
      label: {
        id: "components.Blocks.blocks.heading2",
        defaultMessage: "Heading 2"
      },
      value: {
        type: "heading",
        level: 2
      },
      matchNode: (node) => node.type === "heading" && node.level === 2,
      isInBlocksSelector: true
    },
    "heading-three": {
      renderElement: (props) => /* @__PURE__ */ react.createElement(Heading, { ...props }),
      icon: HeadingThree/* default */.Z,
      label: {
        id: "components.Blocks.blocks.heading3",
        defaultMessage: "Heading 3"
      },
      value: {
        type: "heading",
        level: 3
      },
      matchNode: (node) => node.type === "heading" && node.level === 3,
      isInBlocksSelector: true
    },
    "heading-four": {
      renderElement: (props) => /* @__PURE__ */ react.createElement(Heading, { ...props }),
      icon: HeadingFour/* default */.Z,
      label: {
        id: "components.Blocks.blocks.heading4",
        defaultMessage: "Heading 4"
      },
      value: {
        type: "heading",
        level: 4
      },
      matchNode: (node) => node.type === "heading" && node.level === 4,
      isInBlocksSelector: true
    },
    "heading-five": {
      renderElement: (props) => /* @__PURE__ */ react.createElement(Heading, { ...props }),
      icon: HeadingFive/* default */.Z,
      label: {
        id: "components.Blocks.blocks.heading5",
        defaultMessage: "Heading 5"
      },
      value: {
        type: "heading",
        level: 5
      },
      matchNode: (node) => node.type === "heading" && node.level === 5,
      isInBlocksSelector: true
    },
    "heading-six": {
      renderElement: (props) => /* @__PURE__ */ react.createElement(Heading, { ...props }),
      icon: HeadingSix/* default */.Z,
      label: {
        id: "components.Blocks.blocks.heading6",
        defaultMessage: "Heading 6"
      },
      value: {
        type: "heading",
        level: 6
      },
      matchNode: (node) => node.type === "heading" && node.level === 6,
      isInBlocksSelector: true
    },
    "list-ordered": {
      renderElement: (props) => /* @__PURE__ */ react.createElement(List, { ...props }),
      label: {
        id: "components.Blocks.blocks.orderedList",
        defaultMessage: "Numbered list"
      },
      value: {
        type: "list",
        format: "ordered"
      },
      icon: NumberList/* default */.Z,
      matchNode: (node) => node.type === "list" && node.format === "ordered",
      isInBlocksSelector: true,
      handleEnterKey: handleEnterKeyOnList,
      handleBackspaceKey: handleBackspaceKeyOnList
    },
    "list-unordered": {
      renderElement: (props) => /* @__PURE__ */ react.createElement(List, { ...props }),
      label: {
        id: "components.Blocks.blocks.unorderedList",
        defaultMessage: "Bulleted list"
      },
      value: {
        type: "list",
        format: "unordered"
      },
      icon: BulletList/* default */.Z,
      matchNode: (node) => node.type === "list" && node.format === "unordered",
      isInBlocksSelector: true,
      handleEnterKey: handleEnterKeyOnList,
      handleBackspaceKey: handleBackspaceKeyOnList
    },
    "list-item": {
      renderElement: (props) => /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "li", ...props.attributes }, props.children),
      value: {
        type: "list-item"
      },
      matchNode: (node) => node.type === "list-item",
      isInBlocksSelector: false
    },
    link: {
      renderElement: (props) => /* @__PURE__ */ react.createElement(useBlocksStore_Link, { element: props.element, ...props.attributes }, props.children),
      value: {
        type: "link"
      },
      matchNode: (node) => node.type === "link",
      isInBlocksSelector: false
    },
    image: {
      renderElement: (props) => /* @__PURE__ */ react.createElement(Image, { ...props }),
      icon: Picture/* default */.Z,
      label: {
        id: "components.Blocks.blocks.image",
        defaultMessage: "Image"
      },
      value: {
        type: "image"
      },
      matchNode: (node) => node.type === "image",
      isInBlocksSelector: true
    },
    quote: {
      renderElement: (props) => /* @__PURE__ */ react.createElement(Blockquote, { ...props.attributes }, props.children),
      icon: Quote/* default */.Z,
      label: {
        id: "components.Blocks.blocks.quote",
        defaultMessage: "Quote"
      },
      value: {
        type: "quote"
      },
      matchNode: (node) => node.type === "quote",
      isInBlocksSelector: true,
      handleEnterKey(editor) {
        const [quoteNode, quoteNodePath] = index_es/* Editor */.ML.above(editor, {
          match: (n) => n.type === "quote"
        });
        const isNodeEnd = index_es/* Editor */.ML.isEnd(editor, editor.selection.anchor, quoteNodePath);
        const isEmptyLine = quoteNode.children.at(-1).text.endsWith("\n");
        if (isNodeEnd && isEmptyLine) {
          index_es/* Transforms */.YR.delete(editor, { distance: 1, unit: "character", reverse: true });
          index_es/* Transforms */.YR.insertNodes(editor, {
            type: "paragraph",
            children: [{ type: "text", text: "" }]
          });
        } else {
          index_es/* Transforms */.YR.insertText(editor, "\n");
        }
      }
    },
    code: {
      renderElement: (props) => /* @__PURE__ */ react.createElement(CodeBlock, { ...props.attributes }, /* @__PURE__ */ react.createElement("code", null, props.children)),
      icon: Code/* default */.Z,
      label: {
        id: "components.Blocks.blocks.code",
        defaultMessage: "Code"
      },
      value: {
        type: "code"
      },
      matchNode: (node) => node.type === "code",
      isInBlocksSelector: true,
      handleEnterKey(editor) {
        index_es/* Transforms */.YR.insertText(editor, "\n");
      }
    }
  };
}

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/BlocksEditor/hooks/useModifiersStore.js






const BoldText = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z)).attrs({ fontWeight: "bold" })`
  font-size: inherit;
  color: inherit;
`;
const ItalicText = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z))`
  font-style: italic;
  font-size: inherit;
  color: inherit;
`;
const UnderlineText = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z)).attrs({ textDecoration: "underline" })`
  font-size: inherit;
  color: inherit;
`;
const StrikeThroughText = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z)).attrs({ textDecoration: "line-through" })`
  font-size: inherit;
  color: inherit;
`;
const InlineCode = styled_components_browser_esm/* default */.ZP.code`
  background-color: ${({ theme }) => theme.colors.neutral150};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => `0 ${theme.spaces[2]}`};
  font-family: 'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas,
    monospace;
  color: inherit;
`;
function useModifiersStore() {
  const editor = (0,slate_react_dist_index_es/* useSlate */.ui)();
  const modifiers = index_es/* Editor */.ML.marks(editor);
  const baseCheckIsActive = (name) => {
    if (!modifiers)
      return false;
    return Boolean(modifiers[name]);
  };
  const baseHandleToggle = (name) => {
    if (modifiers[name]) {
      index_es/* Editor */.ML.removeMark(editor, name);
    } else {
      index_es/* Editor */.ML.addMark(editor, name, true);
    }
  };
  return {
    bold: {
      icon: Bold/* default */.Z,
      label: { id: "components.Blocks.modifiers.bold", defaultMessage: "Bold" },
      checkIsActive: () => baseCheckIsActive("bold"),
      handleToggle: () => baseHandleToggle("bold"),
      renderLeaf: (children) => /* @__PURE__ */ react.createElement(BoldText, null, children)
    },
    italic: {
      icon: Italic/* default */.Z,
      label: { id: "components.Blocks.modifiers.italic", defaultMessage: "Italic" },
      checkIsActive: () => baseCheckIsActive("italic"),
      handleToggle: () => baseHandleToggle("italic"),
      renderLeaf: (children) => /* @__PURE__ */ react.createElement(ItalicText, null, children)
    },
    underline: {
      icon: Underline/* default */.Z,
      label: { id: "components.Blocks.modifiers.underline", defaultMessage: "Underline" },
      checkIsActive: () => baseCheckIsActive("underline"),
      handleToggle: () => baseHandleToggle("underline"),
      renderLeaf: (children) => /* @__PURE__ */ react.createElement(UnderlineText, null, children)
    },
    strikethrough: {
      icon: StrikeThrough/* default */.Z,
      label: { id: "components.Blocks.modifiers.strikethrough", defaultMessage: "Strikethrough" },
      checkIsActive: () => baseCheckIsActive("strikethrough"),
      handleToggle: () => baseHandleToggle("strikethrough"),
      renderLeaf: (children) => /* @__PURE__ */ react.createElement(StrikeThroughText, null, children)
    },
    code: {
      icon: Code/* default */.Z,
      label: { id: "components.Blocks.modifiers.code", defaultMessage: "Code" },
      checkIsActive: () => baseCheckIsActive("code"),
      handleToggle: () => baseHandleToggle("code"),
      renderLeaf: (children) => /* @__PURE__ */ react.createElement(InlineCode, null, children)
    }
  };
}

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/BlocksEditor/BlocksInput/index.js






const getEditorStyle = (theme) => ({
  // The outline style is set on the wrapper with :focus-within
  outline: "none",
  display: "flex",
  flexDirection: "column",
  gap: theme.spaces[2],
  height: "100%"
});
const baseRenderLeaf = (props, modifiers) => {
  const wrappedChildren = Object.entries(modifiers).reduce((currentChildren, modifierEntry) => {
    const [name, modifier] = modifierEntry;
    if (props.leaf[name]) {
      return modifier.renderLeaf(currentChildren);
    }
    return currentChildren;
  }, props.children);
  return /* @__PURE__ */ react.createElement("span", { ...props.attributes }, wrappedChildren);
};
const baseRenderElement = (props, blocks) => {
  const blockMatch = Object.values(blocks).find((block2) => block2.matchNode(props.element));
  const block = blockMatch || blocks.paragraph;
  return block.renderElement(props);
};
const BlocksInput = ({ disabled, placeholder }) => {
  const theme = (0,styled_components_browser_esm/* useTheme */.Fg)();
  const editor = (0,slate_react_dist_index_es/* useSlate */.ui)();
  const modifiers = useModifiersStore();
  const renderLeaf = react.useCallback((props) => baseRenderLeaf(props, modifiers), [modifiers]);
  const blocks = useBlocksStore();
  const renderElement = react.useCallback((props) => baseRenderElement(props, blocks), [blocks]);
  const handleEnter = () => {
    const selectedNode = editor.children[editor.selection.anchor.path[0]];
    const selectedBlock = Object.values(blocks).find((block) => block.matchNode(selectedNode));
    if (selectedBlock.handleEnterKey) {
      selectedBlock.handleEnterKey(editor);
    } else {
      blocks.paragraph.handleEnterKey(editor);
    }
  };
  const handleBackspaceEvent = (event) => {
    const selectedNode = editor.children[editor.selection.anchor.path[0]];
    const selectedBlock = Object.values(blocks).find((block) => block.matchNode(selectedNode));
    if (selectedBlock.handleBackspaceKey) {
      selectedBlock.handleBackspaceKey(editor, event);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleEnter();
    }
    if (event.key === "Backspace") {
      handleBackspaceEvent(event);
    }
  };
  return /* @__PURE__ */ react.createElement(
    slate_react_dist_index_es/* Editable */.CX,
    {
      readOnly: disabled,
      placeholder,
      style: getEditorStyle(theme),
      renderElement,
      renderLeaf,
      onKeyDown: handleKeyDown
    }
  );
};
BlocksInput.defaultProps = {
  placeholder: null
};
BlocksInput.propTypes = {
  disabled: (prop_types_default()).bool.isRequired,
  placeholder: (prop_types_default()).string
};
/* harmony default export */ const BlocksEditor_BlocksInput = (BlocksInput);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/BlocksEditor/plugins/withStrapiSchema.js

const withStrapiSchema = (editor) => {
  const { normalizeNode } = editor;
  editor.normalizeNode = (entry) => {
    const [node, path] = entry;
    if (!index_es/* Element */.W_.isElement(node)) {
      if (node.type !== "text") {
        index_es/* Transforms */.YR.setNodes(editor, { type: "text" }, { at: path });
        return;
      }
    }
    normalizeNode(entry);
  };
  return editor;
};


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/BlocksEditor/plugins/withLinks.js

const withLinks = (editor) => {
  const { isInline, apply, insertText } = editor;
  editor.isInline = (element) => {
    return element.type === "link" ? true : isInline(element);
  };
  editor.lastInsertedLinkPath = null;
  editor.apply = (operation) => {
    if (operation.type === "insert_node") {
      if (operation.node.type === "link") {
        editor.lastInsertedLinkPath = operation.path;
      }
    } else if (operation.type === "move_node") {
      if (index_es/* Path */.y$.hasPrevious(operation.path)) {
        editor.lastInsertedLinkPath = index_es/* Path */.y$.transform(editor.lastInsertedLinkPath, operation);
      }
    }
    apply(operation);
  };
  editor.insertText = (text) => {
    if (index_es/* Range */.e6.isCollapsed(editor.selection) && text === " ") {
      const linksInSelection = Array.from(
        index_es/* Editor */.ML.nodes(editor, { at: editor.selection, match: (node) => node.type === "link" })
      );
      const selectionIsInLink = editor.selection && linksInSelection.length > 0;
      const selectionIsAtEndOfLink = selectionIsInLink && index_es/* Point */.E9.equals(editor.selection.anchor, index_es/* Editor */.ML.end(editor, linksInSelection[0][1]));
      if (selectionIsAtEndOfLink) {
        index_es/* Transforms */.YR.insertNodes(
          editor,
          { text: " ", type: "text" },
          { at: index_es/* Path */.y$.next(linksInSelection[0][1]), select: true }
        );
        return;
      }
    }
    insertText(text);
  };
  return editor;
};


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-toolbar/dist/index.mjs + 3 modules
var react_toolbar_dist = __webpack_require__(10527);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tooltip/Tooltip.mjs + 3 modules
var Tooltip = __webpack_require__(2981);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/BlocksEditor/Toolbar/index.js













const ToolbarWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`;
const Separator = (0,styled_components_browser_esm/* default */.ZP)(react_toolbar_dist/* Separator */.Z0)`
  background: ${({ theme }) => theme.colors.neutral150};
  width: 1px;
  height: ${(0,dist/* pxToRem */.Q1)(24)};
`;
const FlexButton = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k)).attrs({ as: "button" })`
  // Inherit the not-allowed cursor from ToolbarWrapper when disabled
  &[aria-disabled] {
    cursor: inherit;
  }

  &[aria-disabled='false'] {
    cursor: pointer;

    // Only apply hover styles if the button is enabled
    &:hover {
      background: ${({ theme }) => theme.colors.primary100};
    }
  }
`;
const ToolbarButton = ({ icon, name, label, isActive, disabled, handleClick }) => {
  const editor = (0,slate_react_dist_index_es/* useSlate */.ui)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const labelMessage = formatMessage(label);
  const enabledColor = isActive ? "primary600" : "neutral600";
  return /* @__PURE__ */ react.createElement(Tooltip/* Tooltip */.u, { description: labelMessage }, /* @__PURE__ */ react.createElement(
    react_toolbar_dist/* ToggleItem */.HP,
    {
      value: name,
      "data-state": isActive ? "on" : "off",
      onMouseDown: (e) => {
        e.preventDefault();
        handleClick();
      },
      "aria-disabled": disabled,
      disabled,
      "aria-label": labelMessage,
      asChild: true
    },
    /* @__PURE__ */ react.createElement(
      FlexButton,
      {
        disabled,
        background: isActive ? "primary100" : "",
        alignItems: "center",
        justifyContent: "center",
        width: 7,
        height: 7,
        hasRadius: true,
        onMouseDown: () => {
          handleClick();
          slate_react_dist_index_es/* ReactEditor */.F3.focus(editor);
        },
        "aria-label": labelMessage
      },
      /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { width: 3, height: 3, as: icon, color: disabled ? "neutral300" : enabledColor })
    )
  ));
};
ToolbarButton.propTypes = {
  icon: (prop_types_default()).elementType.isRequired,
  name: (prop_types_default()).string.isRequired,
  label: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired
  }).isRequired,
  isActive: (prop_types_default()).bool.isRequired,
  disabled: (prop_types_default()).bool.isRequired,
  handleClick: (prop_types_default()).func.isRequired
};
const ModifierButton = ({ icon, name, label, disabled }) => {
  const editor = (0,slate_react_dist_index_es/* useSlate */.ui)();
  const isModifierActive = () => {
    const modifiers = index_es/* Editor */.ML.marks(editor);
    if (!modifiers)
      return false;
    return Boolean(modifiers[name]);
  };
  const isActive = isModifierActive();
  const toggleModifier = () => {
    if (isActive) {
      index_es/* Editor */.ML.removeMark(editor, name);
    } else {
      index_es/* Editor */.ML.addMark(editor, name, true);
    }
  };
  return /* @__PURE__ */ react.createElement(
    ToolbarButton,
    {
      icon,
      name,
      label,
      isActive,
      disabled,
      handleClick: toggleModifier
    }
  );
};
ModifierButton.propTypes = {
  icon: (prop_types_default()).elementType.isRequired,
  name: (prop_types_default()).string.isRequired,
  label: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired
  }).isRequired,
  disabled: (prop_types_default()).bool.isRequired
};
const toggleBlock = (editor, value) => {
  const { type, level, format } = value;
  const blockProperties = {
    type,
    level: level || null,
    format: format || null
  };
  if (editor.selection) {
    index_es/* Transforms */.YR.setNodes(editor, blockProperties);
  } else {
    index_es/* Transforms */.YR.insertNodes(editor, { ...blockProperties, children: [{ type: "text", text: "" }] });
  }
  slate_react_dist_index_es/* ReactEditor */.F3.focus(editor);
};
const ALLOWED_MEDIA_TYPE = "images";
const IMAGE_SCHEMA_FIELDS = [
  "name",
  "alternativeText",
  "url",
  "caption",
  "width",
  "height",
  "formats",
  "hash",
  "ext",
  "mime",
  "size",
  "previewUrl",
  "provider",
  "provider_metadata",
  "createdAt",
  "updatedAt"
];
const pick = (object, imageSchemaFields) => {
  return Object.keys(object).reduce((acc, key) => {
    if (imageSchemaFields.includes(key)) {
      acc[key] = object[key];
    }
    return acc;
  }, {});
};
const ImageDialog = ({ handleClose }) => {
  const editor = (0,slate_react_dist_index_es/* useSlate */.ui)();
  const { components } = (0,dist/* useLibrary */.yX)();
  const MediaLibraryDialog = components["media-library"];
  const insertImages = (images) => {
    images.forEach((img) => {
      const image = { type: "image", image: img, children: [{ type: "text", text: "" }] };
      index_es/* Transforms */.YR.insertNodes(editor, image);
    });
  };
  const handleSelectAssets = (images) => {
    const formattedImages = images.map((image) => {
      const expectedImage = pick(image, IMAGE_SCHEMA_FIELDS);
      return {
        ...expectedImage,
        alternativeText: expectedImage.alternativeText || expectedImage.name,
        url: (0,dist/* prefixFileUrlWithBackendUrl */.CR)(image.url)
      };
    });
    insertImages(formattedImages);
    if (isLastBlockType(editor, "image")) {
      insertEmptyBlockAtLast(editor);
    }
    handleClose();
  };
  return /* @__PURE__ */ react.createElement(
    MediaLibraryDialog,
    {
      allowedTypes: [ALLOWED_MEDIA_TYPE],
      onClose: handleClose,
      onSelectAssets: handleSelectAssets
    }
  );
};
ImageDialog.propTypes = {
  handleClose: (prop_types_default()).func.isRequired
};
const isLastBlockType = (editor, type) => {
  const { selection } = editor;
  if (!selection)
    return false;
  const [currentBlock] = index_es/* Editor */.ML.nodes(editor, {
    at: selection,
    match: (n) => n.type === type
  });
  if (currentBlock) {
    const [, currentNodePath] = currentBlock;
    const isNodeAfter = Boolean(index_es/* Editor */.ML.after(editor, currentNodePath));
    return !isNodeAfter;
  }
  return false;
};
const insertEmptyBlockAtLast = (editor) => {
  index_es/* Transforms */.YR.insertNodes(
    editor,
    {
      type: "paragraph",
      children: [{ type: "text", text: "" }]
    },
    { at: [editor.children.length] }
  );
};
const BlocksDropdown = ({ disabled }) => {
  const editor = (0,slate_react_dist_index_es/* useSlate */.ui)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [isMediaLibraryVisible, setIsMediaLibraryVisible] = react.useState(false);
  const blocks = useBlocksStore();
  const blockKeysToInclude = Object.entries(blocks).reduce((currentKeys, entry) => {
    const [key, block] = entry;
    return block.isInBlocksSelector ? [...currentKeys, key] : currentKeys;
  }, []);
  const [blockSelected, setBlockSelected] = react.useState(Object.keys(blocks)[0]);
  const selectOption = (optionKey) => {
    if (optionKey === "image") {
      index_es/* Transforms */.YR.removeNodes(editor);
    } else if (["list-ordered", "list-unordered"].includes(optionKey)) {
      const listFormat = blocks[optionKey].value.format;
      const isActive = isListActive(editor, blocks[optionKey].matchNode);
      toggleList(editor, isActive, listFormat);
    } else {
      toggleBlock(editor, blocks[optionKey].value);
    }
    setBlockSelected(optionKey);
    if (optionKey === "code" && isLastBlockType(editor, "code")) {
      insertEmptyBlockAtLast(editor);
    }
    if (optionKey === "image") {
      setIsMediaLibraryVisible(true);
    }
  };
  const preventSelectFocus = (e) => e.preventDefault();
  react.useEffect(() => {
    if (editor.selection) {
      const [anchorNode] = index_es/* Editor */.ML.parent(editor, editor.selection.anchor, {
        edge: "start",
        depth: 2
      });
      const anchorBlockKey = Object.keys(blocks).find(
        (blockKey) => blocks[blockKey].matchNode(anchorNode)
      );
      if (anchorBlockKey && anchorBlockKey !== blockSelected) {
        setBlockSelected(anchorBlockKey);
      }
    }
  }, [editor.selection, editor, blocks, blockSelected]);
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      startIcon: /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { as: blocks[blockSelected].icon }),
      onChange: selectOption,
      placeholder: blocks[blockSelected].label,
      value: blockSelected,
      onCloseAutoFocus: preventSelectFocus,
      "aria-label": formatMessage({
        id: "components.Blocks.blocks.selectBlock",
        defaultMessage: "Select a block"
      }),
      disabled
    },
    blockKeysToInclude.map((key) => /* @__PURE__ */ react.createElement(
      BlockOption,
      {
        key,
        value: key,
        label: blocks[key].label,
        icon: blocks[key].icon,
        blockSelected
      }
    ))
  ), isMediaLibraryVisible && /* @__PURE__ */ react.createElement(ImageDialog, { handleClose: () => setIsMediaLibraryVisible(false) }));
};
BlocksDropdown.propTypes = {
  disabled: (prop_types_default()).bool.isRequired
};
const BlockOption = ({ value, icon, label, blockSelected }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const isSelected = value === blockSelected;
  return /* @__PURE__ */ react.createElement(
    Option/* Option */.W,
    {
      startIcon: /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { as: icon, color: isSelected ? "primary600" : "neutral600" }),
      value
    },
    formatMessage(label)
  );
};
BlockOption.propTypes = {
  icon: (prop_types_default()).elementType.isRequired,
  value: (prop_types_default()).string.isRequired,
  label: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired
  }).isRequired,
  blockSelected: (prop_types_default()).string.isRequired
};
const isListNode = (node) => {
  return !index_es/* Editor */.ML.isEditor(node) && index_es/* Element */.W_.isElement(node) && node.type === "list";
};
const isListActive = (editor, matchNode) => {
  const { selection } = editor;
  if (!selection)
    return false;
  const [match] = Array.from(
    index_es/* Editor */.ML.nodes(editor, {
      at: index_es/* Editor */.ML.unhangRange(editor, selection),
      match: matchNode
    })
  );
  return Boolean(match);
};
const toggleList = (editor, isActive, format) => {
  index_es/* Transforms */.YR.unwrapNodes(editor, {
    match: (node) => isListNode(node) && ["ordered", "unordered"].includes(node.format),
    split: true
  });
  index_es/* Transforms */.YR.setNodes(editor, {
    type: isActive ? "paragraph" : "list-item"
  });
  if (!isActive) {
    const block = { type: "list", format, children: [] };
    index_es/* Transforms */.YR.wrapNodes(editor, block);
  }
};
const ListButton = ({ block, disabled }) => {
  const editor = (0,slate_react_dist_index_es/* useSlate */.ui)();
  const {
    icon,
    matchNode,
    value: { format },
    label
  } = block;
  const isActive = isListActive(editor, matchNode);
  return /* @__PURE__ */ react.createElement(
    ToolbarButton,
    {
      icon,
      name: format,
      label,
      isActive,
      disabled,
      handleClick: () => toggleList(editor, isActive, format)
    }
  );
};
ListButton.propTypes = {
  block: prop_types_default().shape({
    icon: (prop_types_default()).elementType.isRequired,
    matchNode: (prop_types_default()).func.isRequired,
    value: prop_types_default().shape({
      format: (prop_types_default()).string.isRequired
    }).isRequired,
    label: prop_types_default().shape({
      id: (prop_types_default()).string.isRequired,
      defaultMessage: (prop_types_default()).string.isRequired
    }).isRequired
  }).isRequired,
  disabled: (prop_types_default()).bool.isRequired
};
const LinkButton = ({ disabled }) => {
  const editor = (0,slate_react_dist_index_es/* useSlate */.ui)();
  const isLinkActive = () => {
    const { selection } = editor;
    if (!selection)
      return false;
    const [match] = Array.from(
      index_es/* Editor */.ML.nodes(editor, {
        at: index_es/* Editor */.ML.unhangRange(editor, selection),
        match: (node) => index_es/* Element */.W_.isElement(node) && node.type === "link"
      })
    );
    return Boolean(match);
  };
  const addLink = () => {
    insertLink(editor, { url: "" });
  };
  return /* @__PURE__ */ react.createElement(
    ToolbarButton,
    {
      icon: Link/* default */.Z,
      name: "link",
      label: {
        id: "components.Blocks.link",
        defaultMessage: "Link"
      },
      isActive: isLinkActive(),
      handleClick: addLink,
      disabled
    }
  );
};
LinkButton.propTypes = {
  disabled: (prop_types_default()).bool.isRequired
};
const BetaTag = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  background-color: ${({ theme }) => theme.colors.secondary100};
  border: ${({ theme }) => `1px solid ${theme.colors.secondary200}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  padding: ${({ theme }) => `${2 / 16}rem ${theme.spaces[1]}`};
`;
const BlocksToolbar = ({ disabled }) => {
  const modifiers = useModifiersStore();
  const blocks = useBlocksStore();
  return /* @__PURE__ */ react.createElement(react_toolbar_dist/* Root */.fC, { "aria-disabled": disabled, asChild: true }, /* @__PURE__ */ react.createElement(ToolbarWrapper, { gap: 1, padding: 2, paddingRight: 4, width: "100%" }, /* @__PURE__ */ react.createElement(BlocksDropdown, { disabled }), /* @__PURE__ */ react.createElement(react_toolbar_dist/* ToggleGroup */.tX, { type: "multiple", asChild: true }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 1, marginLeft: 1 }, Object.entries(modifiers).map(([name, modifier]) => /* @__PURE__ */ react.createElement(
    ToolbarButton,
    {
      key: name,
      name,
      icon: modifier.icon,
      label: modifier.label,
      isActive: modifier.checkIsActive(),
      handleClick: modifier.handleToggle,
      disabled
    }
  )), /* @__PURE__ */ react.createElement(LinkButton, { disabled }))), /* @__PURE__ */ react.createElement(Separator, null), /* @__PURE__ */ react.createElement(react_toolbar_dist/* ToggleGroup */.tX, { type: "single", asChild: true }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 1 }, /* @__PURE__ */ react.createElement(ListButton, { block: blocks["list-unordered"], disabled }), /* @__PURE__ */ react.createElement(ListButton, { block: blocks["list-ordered"], disabled }))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { grow: 1, justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(BetaTag, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "secondary600", variant: "sigma" }, "BETA")))));
};
BlocksToolbar.propTypes = {
  disabled: (prop_types_default()).bool.isRequired
};


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/BlocksEditor/index.js












const TypographyAsterisk = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z))`
  line-height: 0;
`;
const LabelAction = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  svg path {
    fill: ${({ theme }) => theme.colors.neutral500};
  }
`;
const EditorDivider = (0,styled_components_browser_esm/* default */.ZP)((0,Divider/* Divider */.i))`
  background: ${({ theme }) => theme.colors.neutral200};
`;
const BlocksEditor_Wrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  width: 100%;
  overflow: auto;
  padding: ${({ theme }) => `${theme.spaces[3]} ${theme.spaces[4]}`};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  background-color: ${({ theme }) => theme.colors.neutral0};
  color: ${({ theme }) => theme.colors.neutral800};
  line-height: ${({ theme }) => theme.lineHeights[6]};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
const withImages = (editor) => {
  const { isVoid } = editor;
  editor.isVoid = (element) => {
    return element.type === "image" ? true : isVoid(element);
  };
  return editor;
};
function useResetKey(value) {
  const slateUpdatesCount = react.useRef(0);
  const valueUpdatesCount = react.useRef(0);
  const [key, setKey] = react.useState(0);
  react.useEffect(() => {
    valueUpdatesCount.current += 1;
    if (valueUpdatesCount.current !== slateUpdatesCount.current) {
      setKey((previousKey) => previousKey + 1);
      slateUpdatesCount.current = valueUpdatesCount.current;
    }
  }, [value]);
  return { key, incrementSlateUpdatesCount: () => slateUpdatesCount.current += 1 };
}
const BlocksEditor = react.forwardRef(
  ({ intlLabel, labelAction, name, disabled, required, error, value, onChange, placeholder, hint }, ref) => {
    const { formatMessage } = (0,useIntl/* default */.Z)();
    const [editor] = react.useState(
      () => (0,slate_react_dist_index_es/* withReact */.BU)(withStrapiSchema(withLinks(withImages((0,dist_index_es/* withHistory */.VC)((0,index_es/* createEditor */.Jh)())))))
    );
    const label = intlLabel.id ? formatMessage(
      { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
      { ...intlLabel.values }
    ) : name;
    const formattedPlaceholder = placeholder ? formatMessage({ id: placeholder.id, defaultMessage: placeholder.defaultMessage }) : null;
    react.useImperativeHandle(
      ref,
      () => ({
        focus() {
          slate_react_dist_index_es/* ReactEditor */.F3.focus(editor);
        }
      }),
      [editor]
    );
    const { key, incrementSlateUpdatesCount } = useResetKey(value);
    const handleSlateChange = (state) => {
      const isAstChange = editor.operations.some((op) => op.type !== "set_selection");
      if (isAstChange) {
        incrementSlateUpdatesCount();
        onChange({
          target: { name, value: state, type: "blocks" }
        });
      }
    };
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 1 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold", textColor: "neutral800" }, label, required && /* @__PURE__ */ react.createElement(TypographyAsterisk, { textColor: "danger600" }, "*")), labelAction && /* @__PURE__ */ react.createElement(LabelAction, { paddingLeft: 1 }, labelAction)), /* @__PURE__ */ react.createElement(
      slate_react_dist_index_es/* Slate */.mH,
      {
        editor,
        initialValue: value || [{ type: "paragraph", children: [{ type: "text", text: "" }] }],
        onChange: handleSlateChange,
        key
      },
      /* @__PURE__ */ react.createElement(FieldInput/* InputWrapper */.S, { direction: "column", alignItems: "flex-start", height: "512px" }, /* @__PURE__ */ react.createElement(BlocksToolbar, { disabled }), /* @__PURE__ */ react.createElement(EditorDivider, { width: "100%" }), /* @__PURE__ */ react.createElement(BlocksEditor_Wrapper, { grow: 1 }, /* @__PURE__ */ react.createElement(BlocksEditor_BlocksInput, { disabled, placeholder: formattedPlaceholder })))
    ), /* @__PURE__ */ react.createElement(components_Hint, { hint, name, error })), error && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 1 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "danger600", "data-strapi-field-error": true }, error)));
  }
);
BlocksEditor.defaultProps = {
  labelAction: null,
  disabled: false,
  required: false,
  error: "",
  value: null,
  placeholder: null,
  hint: null
};
BlocksEditor.propTypes = {
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  labelAction: (prop_types_default()).element,
  name: (prop_types_default()).string.isRequired,
  required: (prop_types_default()).bool,
  disabled: (prop_types_default()).bool,
  error: (prop_types_default()).string,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).array,
  placeholder: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired
  }),
  hint: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).array])
};
/* harmony default export */ const components_BlocksEditor = (BlocksEditor);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CheckCircle.mjs
var CheckCircle = __webpack_require__(15398);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ExclamationMarkCircle.mjs
var ExclamationMarkCircle = __webpack_require__(15206);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Loader.mjs
var Loader = __webpack_require__(34547);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useDebounce.ts
var useDebounce = __webpack_require__(75286);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldAction.mjs
var FieldAction = __webpack_require__(28040);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/InputUID/endActionStyle.js


const FieldActionWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,FieldAction/* FieldAction */.E))`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({ theme }) => theme.colors.neutral400};
    }
  }

  svg:hover {
    path {
      fill: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const TextValidation = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  svg {
    height: ${12 / 16}rem;
    width: ${12 / 16}rem;

    path {
      fill: ${({ theme, available }) => available ? theme.colors.success600 : theme.colors.danger600};
    }
  }
`;
const rotation = (0,styled_components_browser_esm/* keyframes */.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
const LoadingWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  animation: ${rotation} 2s infinite linear;
`;

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/InputUID/regex.js
const UID_REGEX = /^[A-Za-z0-9-_.~]*$/;
/* harmony default export */ const regex = (UID_REGEX);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/InputUID/index.js










const InputUID = react.forwardRef(
  ({
    contentTypeUID,
    hint,
    disabled,
    error,
    intlLabel,
    labelAction,
    name,
    onChange,
    value,
    placeholder,
    required
  }, forwardedRef) => {
    const [availability, setAvailability] = react.useState(null);
    const [showRegenerate, setShowRegenerate] = react.useState(false);
    const debouncedValue = (0,useDebounce/* useDebounce */.N)(value, 300);
    const { modifiedData, initialData } = (0,dist/* useCMEditViewDataManager */.Wq)();
    const toggleNotification = (0,dist/* useNotification */.lm)();
    const { formatAPIError } = (0,dist/* useAPIErrorHandler */.So)();
    const { formatMessage } = (0,useIntl/* default */.Z)();
    const { post } = (0,dist/* useFetchClient */.kY)();
    const label = intlLabel.id ? formatMessage(
      { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
      { ...intlLabel.values }
    ) : name;
    const formattedPlaceholder = placeholder ? formatMessage(
      { id: placeholder.id, defaultMessage: placeholder.defaultMessage },
      { ...placeholder.values }
    ) : "";
    const { data: defaultGeneratedUID, isLoading: isGeneratingDefaultUID } = (0,react_query_es.useQuery)({
      queryKey: ["uid", { contentTypeUID, field: name, data: modifiedData }],
      async queryFn({ queryKey }) {
        const [, body] = queryKey;
        const {
          data: { data }
        } = await post("/content-manager/uid/generate", body);
        return data;
      },
      onError(err) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(err)
        });
      },
      enabled: !value && required
    });
    react.useEffect(() => {
      if (defaultGeneratedUID) {
        onChange({ target: { name, value: defaultGeneratedUID, type: "text" } }, true);
      }
    }, [defaultGeneratedUID, name, onChange]);
    const { mutate: generateUID, isLoading: isGeneratingUID } = (0,react_query_es.useMutation)({
      async mutationFn(body) {
        const {
          data: { data }
        } = await post("/content-manager/uid/generate", body);
        return data;
      },
      onSuccess(data) {
        onChange({ target: { name, value: data, type: "text" } });
      },
      onError(err) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(err)
        });
      }
    });
    const { data: availabilityData, isLoading: isCheckingAvailability } = (0,react_query_es.useQuery)({
      queryKey: [
        "uid",
        { contentTypeUID, field: name, value: debouncedValue ? debouncedValue.trim() : "" }
      ],
      async queryFn({ queryKey }) {
        const [, body] = queryKey;
        const { data } = await post("/content-manager/uid/check-availability", body);
        return data;
      },
      enabled: Boolean(
        debouncedValue !== initialData[name] && debouncedValue && regex.test(debouncedValue.trim())
      ),
      onError(err) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(err)
        });
      }
    });
    react.useEffect(() => {
      setAvailability(availabilityData);
      let timer;
      if (availabilityData?.isAvailable) {
        timer = setTimeout(() => {
          setAvailability(null);
        }, 4e3);
      }
      return () => {
        if (timer) {
          clearTimeout(timer);
        }
      };
    }, [availabilityData]);
    const isLoading = isGeneratingDefaultUID || isGeneratingUID || isCheckingAvailability;
    return /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        ref: forwardedRef,
        disabled,
        error,
        endAction: /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { position: "relative", gap: 1 }, availability && !showRegenerate && /* @__PURE__ */ react.createElement(
          TextValidation,
          {
            alignItems: "center",
            gap: 1,
            justifyContent: "flex-end",
            available: !!availability?.isAvailable,
            "data-not-here-outer": true,
            position: "absolute",
            pointerEvents: "none",
            right: 6,
            width: "100px"
          },
          availability?.isAvailable ? /* @__PURE__ */ react.createElement(CheckCircle/* default */.Z, null) : /* @__PURE__ */ react.createElement(ExclamationMarkCircle/* default */.Z, null),
          /* @__PURE__ */ react.createElement(
            Typography/* Typography */.Z,
            {
              textColor: availability.isAvailable ? "success600" : "danger600",
              variant: "pi"
            },
            formatMessage(
              availability.isAvailable ? {
                id: "content-manager.components.uid.available",
                defaultMessage: "Available"
              } : {
                id: "content-manager.components.uid.unavailable",
                defaultMessage: "Unavailable"
              }
            )
          )
        ), !disabled && /* @__PURE__ */ react.createElement(react.Fragment, null, showRegenerate && /* @__PURE__ */ react.createElement(TextValidation, { alignItems: "center", justifyContent: "flex-end", gap: 1 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "primary600", variant: "pi" }, formatMessage({
          id: "content-manager.components.uid.regenerate",
          defaultMessage: "Regenerate"
        }))), /* @__PURE__ */ react.createElement(
          FieldActionWrapper,
          {
            onClick: () => generateUID({ contentTypeUID, field: name, data: modifiedData }),
            label: formatMessage({
              id: "content-manager.components.uid.regenerate",
              defaultMessage: "Regenerate"
            }),
            onMouseEnter: () => setShowRegenerate(true),
            onMouseLeave: () => setShowRegenerate(false)
          },
          isLoading ? /* @__PURE__ */ react.createElement(LoadingWrapper, { "data-testid": "loading-wrapper" }, /* @__PURE__ */ react.createElement(Loader/* default */.Z, null)) : /* @__PURE__ */ react.createElement(Refresh/* default */.Z, null)
        ))),
        hint,
        label,
        labelAction,
        name,
        onChange,
        placeholder: formattedPlaceholder,
        value: value || "",
        required
      }
    );
  }
);
InputUID.propTypes = {
  contentTypeUID: (prop_types_default()).string.isRequired,
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
  value: (prop_types_default()).string,
  placeholder: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  required: (prop_types_default()).bool,
  hint: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).array])
};
InputUID.defaultProps = {
  disabled: false,
  error: void 0,
  labelAction: void 0,
  placeholder: void 0,
  value: "",
  required: false,
  hint: ""
};


// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var lodash_pick = __webpack_require__(47184);
var pick_default = /*#__PURE__*/__webpack_require__.n(lodash_pick);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInputDataManager/utils/connect.js

function connect(WrappedComponent, select) {
  return (props) => {
    const selectors = select(props);
    return /* @__PURE__ */ react.createElement(WrappedComponent, { ...props, ...selectors });
  };
}
/* harmony default export */ const utils_connect = (connect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInputDataManager/utils/diffRelations.js
const diffRelations = (browserStateRelations = [], serverStateRelations = []) => {
  const connected = browserStateRelations.reduce((acc, relation) => {
    if (!serverStateRelations.find((oldRelation) => oldRelation.id === relation.id)) {
      return [...acc, relation.id];
    }
    return acc;
  }, []);
  const disconnected = serverStateRelations.reduce((acc, relation) => {
    if (!browserStateRelations.find((oldRelation) => oldRelation.id === relation.id)) {
      return [...acc, relation.id];
    }
    return acc;
  }, []);
  return [connected, disconnected];
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInputDataManager/constants.js
const PUBLICATION_STATES = {
  DRAFT: "draft",
  PUBLISHED: "published"
};
const RELATIONS_TO_DISPLAY = 5;
const SEARCH_RESULTS_TO_DISPLAY = 10;

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInputDataManager/utils/getRelationLink.js
function getRelationLink(targetModel, id) {
  return `/content-manager/collectionType/${targetModel}/${id ?? ""}`;
}

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInputDataManager/utils/normalizeRelations.js


const normalizeRelation = (relation, { shouldAddLink, mainFieldName, targetModel }) => {
  const nextRelation = { ...relation };
  if (shouldAddLink) {
    nextRelation.href = getRelationLink(targetModel, nextRelation.id);
  }
  nextRelation.publicationState = false;
  if (nextRelation?.publishedAt !== void 0) {
    nextRelation.publicationState = nextRelation.publishedAt ? PUBLICATION_STATES.PUBLISHED : PUBLICATION_STATES.DRAFT;
  }
  nextRelation.mainField = nextRelation[mainFieldName];
  return nextRelation;
};
const normalizeRelations = (relations, { shouldAddLink = false, mainFieldName, targetModel } = {}) => {
  return [...relations].map(
    (relation) => normalizeRelation(relation, {
      shouldAddLink,
      mainFieldName,
      targetModel
    })
  );
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInputDataManager/utils/normalizeSearchResults.js

const normalizeSearchResults = (relations, { mainFieldName }) => {
  const { data } = relations;
  const { pages = [] } = data ?? {};
  return {
    ...relations,
    data: pages.map(
      (page) => page?.results.map((relation) => normalizeRelation(relation, { mainFieldName }))
    ).filter(Boolean).flat()
  };
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInputDataManager/utils/select.js




function useSelect({
  componentUid,
  isUserAllowedToEditField,
  isUserAllowedToReadField,
  name,
  queryInfos
}) {
  const {
    isCreatingEntry,
    createActionAllowedFields,
    readActionAllowedFields,
    updateActionAllowedFields,
    slug,
    modifiedData
  } = (0,dist/* useCMEditViewDataManager */.Wq)();
  const { params } = (0,react_router/* useRouteMatch */.$B)("/content-manager/collectionType/:collectionType/create/clone/:origin") ?? {};
  const { origin } = params ?? {};
  const isFieldAllowed = (0,react.useMemo)(() => {
    if (isUserAllowedToEditField === true) {
      return true;
    }
    const allowedFields = isCreatingEntry ? createActionAllowedFields : updateActionAllowedFields;
    return allowedFields.includes(name);
  }, [
    isCreatingEntry,
    createActionAllowedFields,
    name,
    isUserAllowedToEditField,
    updateActionAllowedFields
  ]);
  const isFieldReadable = (0,react.useMemo)(() => {
    if (isUserAllowedToReadField) {
      return true;
    }
    const allowedFields = isCreatingEntry ? [] : readActionAllowedFields;
    return allowedFields.includes(name);
  }, [isCreatingEntry, isUserAllowedToReadField, name, readActionAllowedFields]);
  const fieldNameKeys = name.split(".");
  let componentId;
  if (componentUid) {
    componentId = get_default()(modifiedData, fieldNameKeys.slice(0, -1))?.id;
  }
  const entityId = origin || modifiedData.id;
  const relationFetchEndpoint = (0,react.useMemo)(() => {
    if (isCreatingEntry && !origin) {
      return null;
    }
    if (componentUid) {
      return componentId ? `/content-manager/relations/${componentUid}/${componentId}/${fieldNameKeys.at(-1)}` : null;
    }
    return `/content-manager/relations/${slug}/${entityId}/${name.split(".").at(-1)}`;
  }, [isCreatingEntry, origin, componentUid, slug, entityId, name, componentId, fieldNameKeys]);
  const relationSearchEndpoint = (0,react.useMemo)(() => {
    if (componentUid) {
      return `/content-manager/relations/${componentUid}/${name.split(".").at(-1)}`;
    }
    return `/content-manager/relations/${slug}/${name.split(".").at(-1)}`;
  }, [componentUid, slug, name]);
  return {
    entityId,
    componentId,
    isComponentRelation: Boolean(componentUid),
    queryInfos: {
      ...queryInfos,
      endpoints: {
        search: relationSearchEndpoint,
        relation: relationFetchEndpoint
      }
    },
    isCloningEntry: Boolean(origin),
    isCreatingEntry,
    isFieldAllowed,
    isFieldReadable
  };
}
/* harmony default export */ const utils_select = (useSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInputDataManager/utils/index.js






;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useRelation/useRelation.js




const useRelation = (cacheKey, { relation, search }) => {
  const [searchParams, setSearchParams] = (0,react.useState)({});
  const [currentPage, setCurrentPage] = (0,react.useState)(0);
  const { get } = (0,dist/* useFetchClient */.kY)();
  const { onLoad: onLoadRelations, normalizeArguments = {} } = relation;
  const relationsRes = (0,react_query_es.useInfiniteQuery)(
    ["relation", ...cacheKey],
    async ({ pageParam = 1 }) => {
      try {
        const { data: data2 } = await get(relation?.endpoint, {
          params: {
            ...relation.pageParams ?? {},
            page: pageParam
          }
        });
        setCurrentPage(pageParam);
        return data2;
      } catch (err) {
        return null;
      }
    },
    {
      cacheTime: 0,
      enabled: relation.enabled,
      /**
       * @type {(lastPage:
       * | { data: null }
       * | { results: any[],
       *     pagination: {
       *      page: number,
       *      pageCount: number,
       *      pageSize: number,
       *      total: number
       *     }
       *   }
       * ) => number}
       */
      getNextPageParam(lastPage) {
        const isXToOneRelation = !lastPage?.pagination;
        if (!lastPage || // the API may send an empty 204 response
        isXToOneRelation || // xToOne relations do not have a pagination
        lastPage?.pagination.page >= lastPage?.pagination.pageCount) {
          return void 0;
        }
        return lastPage.pagination.page + 1;
      },
      select: (data2) => ({
        ...data2,
        pages: data2.pages.map((page) => {
          if (!page) {
            return page;
          }
          const { data: data3, results, pagination } = page;
          const isXToOneRelation = !!data3;
          let normalizedResults = [];
          if (isXToOneRelation) {
            normalizedResults = [data3];
          } else if (results) {
            normalizedResults = [...results].reverse();
          }
          return {
            pagination,
            results: normalizedResults
          };
        })
      })
    }
  );
  const { pageGoal } = relation;
  const { status, data, fetchNextPage, hasNextPage } = relationsRes;
  (0,react.useEffect)(() => {
    if (pageGoal > currentPage && hasNextPage && status === "success") {
      fetchNextPage({
        pageParam: currentPage + 1
      });
    }
  }, [pageGoal, currentPage, fetchNextPage, hasNextPage, status]);
  const onLoadRelationsCallback = (0,dist/* useCallbackRef */.W6)(onLoadRelations);
  (0,react.useEffect)(() => {
    if (status === "success" && data && data.pages?.at(-1)?.results && onLoadRelationsCallback) {
      const normalizedResults = normalizeRelations(data.pages.at(-1).results, normalizeArguments);
      onLoadRelationsCallback(normalizedResults);
    }
  }, [status, onLoadRelationsCallback, data]);
  const searchRes = (0,react_query_es.useInfiniteQuery)(
    ["relation", ...cacheKey, "search", JSON.stringify(searchParams)],
    async ({ pageParam = 1 }) => {
      try {
        const { data: data2 } = await get(search.endpoint, {
          params: {
            ...search.pageParams ?? {},
            ...searchParams,
            page: pageParam
          }
        });
        return data2;
      } catch (err) {
        return null;
      }
    },
    {
      enabled: Object.keys(searchParams).length > 0,
      /**
       * @type {(lastPage:
       * | { data: null }
       * | { results: any[],
       *     pagination: {
       *      page: number,
       *      pageCount: number,
       *      pageSize: number,
       *      total: number
       *     }
       *   }
       * ) => number}
       */
      getNextPageParam(lastPage) {
        if (!lastPage?.pagination || lastPage.pagination.page >= lastPage.pagination.pageCount) {
          return void 0;
        }
        return lastPage.pagination.page + 1;
      }
    }
  );
  const searchFor = (term, options = {}) => {
    setSearchParams({
      ...options,
      _q: term,
      _filter: "$startsWithi"
    });
  };
  return { relations: relationsRes, search: searchRes, searchFor };
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useRelation/index.js


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/paths.js

const getInitialDataPathUsingTempKeys = (initialData, modifiedData) => (currentPath) => {
  const splitPath = currentPath.split(".");
  return splitPath.reduce((acc, currentValue, index) => {
    const initialDataParent = get_default()(initialData, acc);
    const modifiedDataTempKey = get_default()(modifiedData, [
      ...splitPath.slice(0, index),
      currentValue,
      "__temp_key__"
    ]);
    if (Array.isArray(initialDataParent) && typeof modifiedDataTempKey === "number") {
      const initialDataIndex = initialDataParent.findIndex(
        (entry) => entry.__temp_key__ === modifiedDataTempKey
      );
      acc.push(initialDataIndex.toString());
      return acc;
    }
    acc.push(currentValue);
    return acc;
  }, []);
};

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Link/Link.mjs
var Link_Link = __webpack_require__(68412);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/Combobox.mjs
var Combobox = __webpack_require__(8295);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextButton/TextButton.mjs
var TextButton = __webpack_require__(1782);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Status/Status.mjs
var Status = __webpack_require__(25245);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cross.mjs
var Cross = __webpack_require__(95066);
// EXTERNAL MODULE: ./node_modules/react-window/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(68853);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.mjs
var ComboboxOption = __webpack_require__(61121);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInput/components/Option.js







const StyledBullet = styled_components_browser_esm/* default */.ZP.div`
  flex-shrink: 0;
  width: ${(0,dist/* pxToRem */.Q1)(6)};
  height: ${(0,dist/* pxToRem */.Q1)(6)};
  margin-right: ${({ theme }) => theme.spaces[2]};
  background-color: ${({ theme, isDraft }) => theme.colors[isDraft ? "secondary600" : "success600"]};
  border-radius: 50%;
`;
const Option_Option = ({ publicationState, mainField, id }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const stringifiedDisplayValue = (mainField ?? id).toString();
  if (publicationState) {
    const isDraft = publicationState === "draft";
    const draftMessage = {
      id: (0,utils/* getTrad */.OB)("components.Select.draft-info-title"),
      defaultMessage: "State: Draft"
    };
    const publishedMessage = {
      id: (0,utils/* getTrad */.OB)("components.Select.publish-info-title"),
      defaultMessage: "State: Published"
    };
    const title = isDraft ? formatMessage(draftMessage) : formatMessage(publishedMessage);
    return /* @__PURE__ */ react.createElement(ComboboxOption/* ComboboxOption */.O, { value: id, textValue: stringifiedDisplayValue }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(StyledBullet, { title, isDraft }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { ellipsis: true }, stringifiedDisplayValue)));
  }
  return /* @__PURE__ */ react.createElement(ComboboxOption/* ComboboxOption */.O, { value: id, textValue: stringifiedDisplayValue }, stringifiedDisplayValue);
};
Option_Option.defaultProps = {
  mainField: void 0,
  publicationState: void 0
};
Option_Option.propTypes = {
  id: (prop_types_default()).number.isRequired,
  mainField: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  publicationState: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).bool])
};

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/hooks/useDragAndDrop.js
var useDragAndDrop = __webpack_require__(79116);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInput/constants.js
const RELATION_ITEM_HEIGHT = 50;
const RELATION_GUTTER = 4;

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInput/components/RelationItem.js









const FlexWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;

  & > div[role='button'] {
    cursor: all-scroll;
  }
`;
const ChildrenWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;
`;
const RelationItem = ({
  ariaDescribedBy,
  children,
  displayValue,
  canDrag,
  disabled,
  endAction,
  iconButtonAriaLabel,
  style,
  id,
  index,
  name,
  onCancel,
  onDropItem,
  onGrabItem,
  status,
  updatePositionOfRelation,
  ...props
}) => {
  const [{ handlerId, isDragging, handleKeyDown }, relationRef, dropRef, dragRef, dragPreviewRef] = (0,useDragAndDrop/* useDragAndDrop */.Y)(canDrag && !disabled, {
    type: `${utils/* ItemTypes */._Q.RELATION}_${name}`,
    index,
    item: {
      displayedValue: displayValue,
      status,
      id
    },
    onGrabItem,
    onDropItem,
    onCancel,
    onMoveItem: updatePositionOfRelation,
    dropSensitivity: "immediate"
  });
  const composedRefs = (0,utils/* composeRefs */.FE)(relationRef, dragRef);
  (0,react.useEffect)(() => {
    dragPreviewRef((0,dist_cjs/* getEmptyImage */.rX)());
  }, [dragPreviewRef]);
  return /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      style,
      as: "li",
      ref: dropRef,
      "aria-describedby": ariaDescribedBy,
      cursor: canDrag ? "all-scroll" : "default"
    },
    isDragging ? /* @__PURE__ */ react.createElement(RelationItemPlaceholder, null) : /* @__PURE__ */ react.createElement(
      Flex/* Flex */.k,
      {
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: canDrag ? 2 : 4,
        paddingRight: 4,
        hasRadius: true,
        borderSize: 1,
        borderColor: "neutral200",
        background: disabled ? "neutral150" : "neutral0",
        justifyContent: "space-between",
        ref: canDrag ? composedRefs : void 0,
        "data-handler-id": handlerId,
        ...props
      },
      /* @__PURE__ */ react.createElement(FlexWrapper, { gap: 1 }, canDrag ? /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          forwardedAs: "div",
          role: "button",
          tabIndex: 0,
          "aria-label": iconButtonAriaLabel,
          noBorder: true,
          onKeyDown: handleKeyDown,
          disabled
        },
        /* @__PURE__ */ react.createElement(Drag/* default */.Z, null)
      ) : null, /* @__PURE__ */ react.createElement(ChildrenWrapper, { justifyContent: "space-between" }, children)),
      endAction && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 4 }, endAction)
    )
  );
};
const RelationItemPlaceholder = () => /* @__PURE__ */ react.createElement(
  Box/* Box */.x,
  {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
    hasRadius: true,
    borderStyle: "dashed",
    borderColor: "primary600",
    borderWidth: "1px",
    background: "primary100",
    height: `calc(100% - ${RELATION_GUTTER}px)`
  }
);
RelationItem.defaultProps = {
  ariaDescribedBy: "",
  canDrag: false,
  displayValue: "",
  disabled: false,
  endAction: void 0,
  onCancel: void 0,
  onDropItem: void 0,
  onGrabItem: void 0,
  style: void 0,
  status: void 0,
  updatePositionOfRelation: void 0
};
RelationItem.propTypes = {
  ariaDescribedBy: (prop_types_default()).string,
  canDrag: (prop_types_default()).bool,
  children: (prop_types_default()).node.isRequired,
  displayValue: (prop_types_default()).string,
  disabled: (prop_types_default()).bool,
  endAction: (prop_types_default()).node,
  iconButtonAriaLabel: (prop_types_default()).string.isRequired,
  id: (prop_types_default()).number.isRequired,
  index: (prop_types_default()).number.isRequired,
  name: (prop_types_default()).string.isRequired,
  onCancel: (prop_types_default()).func,
  onDropItem: (prop_types_default()).func,
  onGrabItem: (prop_types_default()).func,
  status: (prop_types_default()).string,
  style: prop_types_default().shape({
    height: (prop_types_default()).number,
    left: (prop_types_default()).number,
    position: (prop_types_default()).string,
    right: (prop_types_default()).number,
    width: (prop_types_default()).string
  }),
  updatePositionOfRelation: (prop_types_default()).func
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInput/components/RelationList.js




const ShadowBox = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  position: relative;
  overflow: hidden;
  flex: 1;

  &:before,
  &:after {
    position: absolute;
    width: 100%;
    height: 4px;
    z-index: 1;
  }

  &:before {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    top: 0;
    opacity: ${({ overflowDirection }) => overflowDirection === "top-bottom" || overflowDirection === "top" ? 1 : 0};
    transition: opacity 0.2s ease-in-out;
  }

  &:after {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(0deg, rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    bottom: 0;
    opacity: ${({ overflowDirection }) => overflowDirection === "top-bottom" || overflowDirection === "bottom" ? 1 : 0};
    transition: opacity 0.2s ease-in-out;
  }
`;
const RelationList = ({ children, overflow, ...props }) => {
  return /* @__PURE__ */ react.createElement(ShadowBox, { overflowDirection: overflow, ...props }, children);
};
RelationList.defaultProps = {
  overflow: ""
};
RelationList.propTypes = {
  children: (prop_types_default()).node.isRequired,
  overflow: prop_types_default().oneOf(["top-bottom", "bottom", "top", ""])
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInput/RelationInput.js












const LinkEllipsis = (0,styled_components_browser_esm/* default */.ZP)((0,Link_Link/* Link */.r))`
  display: block;

  > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
`;
const DisconnectButton = styled_components_browser_esm/* default */.ZP.button`
  svg path {
    fill: ${({ theme, disabled }) => disabled ? theme.colors.neutral600 : theme.colors.neutral500};
  }

  &:hover svg path,
  &:focus svg path {
    fill: ${({ theme, disabled }) => !disabled && theme.colors.neutral600};
  }
`;
const ComboboxWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  align-self: flex-start;
`;
const RelationInput = ({
  canReorder,
  description,
  disabled,
  error,
  iconButtonAriaLabel,
  id,
  name,
  numberOfRelationsToDisplay,
  label,
  labelAction,
  labelLoadMore,
  labelDisconnectRelation,
  listAriaDescription,
  liveText,
  loadingMessage,
  onCancel,
  onDropItem,
  onGrabItem,
  noRelationsMessage,
  onRelationConnect,
  onRelationLoadMore,
  onRelationDisconnect,
  onRelationReorder,
  onSearchNextPage,
  onSearch,
  placeholder,
  publicationStateTranslations,
  required,
  relations: paginatedRelations,
  searchResults,
  size
}) => {
  const [textValue, setTextValue] = (0,react.useState)("");
  const [overflow, setOverflow] = (0,react.useState)("");
  const listRef = (0,react.useRef)();
  const outerListRef = (0,react.useRef)();
  const fieldRef = (0,dist/* useFocusInputField */.E2)(name);
  const { data } = searchResults;
  const relations = paginatedRelations.data;
  const totalNumberOfRelations = relations.length ?? 0;
  const dynamicListHeight = (0,react.useMemo)(
    () => totalNumberOfRelations > numberOfRelationsToDisplay ? Math.min(totalNumberOfRelations, numberOfRelationsToDisplay) * (RELATION_ITEM_HEIGHT + RELATION_GUTTER) + RELATION_ITEM_HEIGHT / 2 : Math.min(totalNumberOfRelations, numberOfRelationsToDisplay) * (RELATION_ITEM_HEIGHT + RELATION_GUTTER),
    [totalNumberOfRelations, numberOfRelationsToDisplay]
  );
  const shouldDisplayLoadMoreButton = !!labelLoadMore && paginatedRelations.hasNextPage;
  const options = (0,react.useMemo)(
    () => data.flat().filter(Boolean).map((result) => ({
      ...result,
      value: result.id,
      label: result.mainField
    })),
    [data]
  );
  (0,react.useEffect)(() => {
    if (totalNumberOfRelations <= numberOfRelationsToDisplay) {
      return setOverflow("");
    }
    const handleNativeScroll = (e) => {
      const parentScrollContainerHeight = e.target.parentNode.scrollHeight;
      const maxScrollBottom = e.target.scrollHeight - e.target.scrollTop;
      if (e.target.scrollTop === 0) {
        return setOverflow("bottom");
      }
      if (maxScrollBottom === parentScrollContainerHeight) {
        return setOverflow("top");
      }
      return setOverflow("top-bottom");
    };
    const outerListRefCurrent = outerListRef?.current;
    if (!paginatedRelations.isLoading && relations.length > 0 && outerListRefCurrent) {
      outerListRef.current.addEventListener("scroll", handleNativeScroll);
    }
    return () => {
      if (outerListRefCurrent) {
        outerListRefCurrent.removeEventListener("scroll", handleNativeScroll);
      }
    };
  }, [paginatedRelations, relations, numberOfRelationsToDisplay, totalNumberOfRelations]);
  const handleMenuOpen = (isOpen) => {
    if (isOpen) {
      onSearch();
    }
  };
  const handleUpdatePositionOfRelation = (newIndex, currentIndex) => {
    if (onRelationReorder && newIndex >= 0 && newIndex < relations.length) {
      onRelationReorder(currentIndex, newIndex);
    }
  };
  const previewRelationsLength = (0,hooks/* usePrev */.zH)(relations.length);
  const updatedRelationsWith = (0,react.useRef)();
  const handleLoadMore = () => {
    updatedRelationsWith.current = "loadMore";
    onRelationLoadMore();
  };
  (0,react.useEffect)(() => {
    if (updatedRelationsWith.current === "onChange") {
      setTextValue("");
    }
    if (updatedRelationsWith.current === "onChange" && relations.length !== previewRelationsLength) {
      listRef.current?.scrollToItem(relations.length, "end");
      updatedRelationsWith.current = void 0;
    } else if (updatedRelationsWith.current === "loadMore" && relations.length !== previewRelationsLength) {
      listRef.current?.scrollToItem(0, "start");
      updatedRelationsWith.current = void 0;
    }
  }, [previewRelationsLength, relations]);
  const ariaDescriptionId = `${name}-item-instructions`;
  return /* @__PURE__ */ react.createElement(
    Flex/* Flex */.k,
    {
      direction: "column",
      gap: 3,
      justifyContent: "space-between",
      alignItems: "stretch",
      wrap: "wrap"
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "row", alignItems: "end", justifyContent: "end", gap: 2, width: "100%" }, /* @__PURE__ */ react.createElement(ComboboxWrapper, { marginRight: "auto", maxWidth: size <= 6 ? "100%" : "70%", width: "100%" }, /* @__PURE__ */ react.createElement(
      Combobox/* Combobox */.hQ,
      {
        ref: fieldRef,
        autocomplete: "list",
        error,
        name,
        hint: description,
        id,
        required,
        label,
        labelAction,
        disabled,
        placeholder,
        hasMoreItems: searchResults.hasNextPage,
        loading: searchResults.isLoading,
        onOpenChange: handleMenuOpen,
        noOptionsMessage: () => noRelationsMessage,
        loadingMessage,
        onLoadMore: () => {
          onSearchNextPage();
        },
        textValue,
        onChange: (relationId) => {
          if (!relationId) {
            return;
          }
          onRelationConnect(options.find((opt) => opt.id === relationId));
          updatedRelationsWith.current = "onChange";
        },
        onTextValueChange: (text) => {
          setTextValue(text);
        },
        onInputChange: (event) => {
          onSearch(event.currentTarget.value);
        }
      },
      options.map((opt) => {
        return /* @__PURE__ */ react.createElement(Option_Option, { key: opt.id, ...opt });
      })
    )), shouldDisplayLoadMoreButton && /* @__PURE__ */ react.createElement(
      TextButton/* TextButton */.A,
      {
        disabled: paginatedRelations.isLoading || paginatedRelations.isFetchingNextPage,
        onClick: handleLoadMore,
        loading: paginatedRelations.isLoading || paginatedRelations.isFetchingNextPage,
        startIcon: /* @__PURE__ */ react.createElement(Refresh/* default */.Z, null),
        shrink: 0
      },
      labelLoadMore
    )),
    relations.length > 0 && /* @__PURE__ */ react.createElement(RelationList, { overflow }, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, { id: ariaDescriptionId }, listAriaDescription), /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, { "aria-live": "assertive" }, liveText), /* @__PURE__ */ react.createElement(
      index_esm/* FixedSizeList */.t7,
      {
        height: dynamicListHeight,
        ref: listRef,
        outerRef: outerListRef,
        itemCount: totalNumberOfRelations,
        itemSize: RELATION_ITEM_HEIGHT + RELATION_GUTTER,
        itemData: {
          name,
          ariaDescribedBy: ariaDescriptionId,
          canDrag: canReorder,
          disabled,
          handleCancel: onCancel,
          handleDropItem: onDropItem,
          handleGrabItem: onGrabItem,
          iconButtonAriaLabel,
          labelDisconnectRelation,
          onRelationDisconnect,
          publicationStateTranslations,
          relations,
          updatePositionOfRelation: handleUpdatePositionOfRelation
        },
        itemKey: (index) => `${relations[index].mainField}_${relations[index].id}`,
        innerElementType: "ol"
      },
      ListItem
    ))
  );
};
const RelationsResult = prop_types_default().shape({
  data: prop_types_default().arrayOf(
    prop_types_default().shape({
      href: (prop_types_default()).string,
      id: (prop_types_default()).number.isRequired,
      publicationState: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).bool]),
      mainField: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number])
    })
  ),
  hasNextPage: (prop_types_default()).bool,
  isFetchingNextPage: (prop_types_default()).bool.isRequired,
  isLoading: (prop_types_default()).bool.isRequired,
  isSuccess: (prop_types_default()).bool.isRequired
});
const SearchResults = prop_types_default().shape({
  data: prop_types_default().arrayOf(
    prop_types_default().shape({
      id: (prop_types_default()).number.isRequired,
      href: (prop_types_default()).string,
      mainField: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
      publicationState: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).bool])
    })
  ),
  hasNextPage: (prop_types_default()).bool,
  isLoading: (prop_types_default()).bool.isRequired,
  isSuccess: (prop_types_default()).bool.isRequired
});
RelationInput.defaultProps = {
  canReorder: false,
  description: void 0,
  disabled: false,
  error: void 0,
  labelAction: null,
  labelLoadMore: null,
  liveText: void 0,
  onCancel: void 0,
  onDropItem: void 0,
  onGrabItem: void 0,
  required: false,
  relations: { data: [] },
  searchResults: { data: [] }
};
RelationInput.propTypes = {
  error: (prop_types_default()).string,
  canReorder: (prop_types_default()).bool,
  description: (prop_types_default()).string,
  disabled: (prop_types_default()).bool,
  iconButtonAriaLabel: (prop_types_default()).string.isRequired,
  id: (prop_types_default()).string.isRequired,
  label: (prop_types_default()).string.isRequired,
  labelAction: (prop_types_default()).element,
  labelLoadMore: (prop_types_default()).string,
  labelDisconnectRelation: (prop_types_default()).string.isRequired,
  listAriaDescription: (prop_types_default()).string.isRequired,
  liveText: (prop_types_default()).string,
  loadingMessage: (prop_types_default()).string.isRequired,
  name: (prop_types_default()).string.isRequired,
  noRelationsMessage: (prop_types_default()).string.isRequired,
  numberOfRelationsToDisplay: (prop_types_default()).number.isRequired,
  onCancel: (prop_types_default()).func,
  onDropItem: (prop_types_default()).func,
  onGrabItem: (prop_types_default()).func,
  onRelationConnect: (prop_types_default()).func.isRequired,
  onRelationDisconnect: (prop_types_default()).func.isRequired,
  onRelationLoadMore: (prop_types_default()).func.isRequired,
  onRelationReorder: (prop_types_default()).func.isRequired,
  onSearch: (prop_types_default()).func.isRequired,
  onSearchNextPage: (prop_types_default()).func.isRequired,
  placeholder: (prop_types_default()).string.isRequired,
  publicationStateTranslations: prop_types_default().shape({
    draft: (prop_types_default()).string.isRequired,
    published: (prop_types_default()).string.isRequired
  }).isRequired,
  required: (prop_types_default()).bool,
  searchResults: SearchResults,
  size: (prop_types_default()).number.isRequired,
  relations: RelationsResult
};
const ListItem = ({ data, index, style }) => {
  const {
    ariaDescribedBy,
    canDrag,
    disabled,
    handleCancel,
    handleDropItem,
    handleGrabItem,
    iconButtonAriaLabel,
    name,
    labelDisconnectRelation,
    onRelationDisconnect,
    publicationStateTranslations,
    relations,
    updatePositionOfRelation
  } = data;
  const { publicationState, href, mainField, id } = relations[index];
  const statusColor = publicationState === "draft" ? "secondary" : "success";
  return /* @__PURE__ */ react.createElement(
    RelationItem,
    {
      ariaDescribedBy,
      canDrag,
      disabled,
      displayValue: String(mainField ?? id),
      iconButtonAriaLabel,
      id,
      index,
      name,
      endAction: /* @__PURE__ */ react.createElement(
        DisconnectButton,
        {
          "data-testid": `remove-relation-${id}`,
          disabled,
          type: "button",
          onClick: () => onRelationDisconnect(relations[index]),
          "aria-label": labelDisconnectRelation
        },
        /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { width: "12px", as: Cross/* default */.Z })
      ),
      onCancel: handleCancel,
      onDropItem: handleDropItem,
      onGrabItem: handleGrabItem,
      status: publicationState || void 0,
      style: {
        ...style,
        bottom: style.bottom ?? 0 + RELATION_GUTTER,
        height: style.height ?? 0 - RELATION_GUTTER
      },
      updatePositionOfRelation
    },
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { minWidth: 0, paddingTop: 1, paddingBottom: 1, paddingRight: 4 }, /* @__PURE__ */ react.createElement(Tooltip/* Tooltip */.u, { description: mainField ?? `${id}` }, href ? /* @__PURE__ */ react.createElement(LinkEllipsis, { to: href }, mainField ?? id) : /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: disabled ? "neutral600" : "primary600", ellipsis: true }, mainField ?? id))),
    publicationState && /* @__PURE__ */ react.createElement(Status/* Status */.q, { variant: statusColor, showBullet: false, size: "S" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: `${statusColor}700` }, publicationStateTranslations[publicationState]))
  );
};
ListItem.defaultProps = {
  data: {}
};
ListItem.propTypes = {
  data: prop_types_default().shape({
    ariaDescribedBy: (prop_types_default()).string.isRequired,
    canDrag: (prop_types_default()).bool.isRequired,
    disabled: (prop_types_default()).bool.isRequired,
    handleCancel: (prop_types_default()).func,
    handleDropItem: (prop_types_default()).func,
    handleGrabItem: (prop_types_default()).func,
    iconButtonAriaLabel: (prop_types_default()).string.isRequired,
    labelDisconnectRelation: (prop_types_default()).string.isRequired,
    name: (prop_types_default()).string.isRequired,
    onRelationDisconnect: (prop_types_default()).func.isRequired,
    publicationStateTranslations: prop_types_default().shape({
      draft: (prop_types_default()).string.isRequired,
      published: (prop_types_default()).string.isRequired
    }).isRequired,
    relations: prop_types_default().arrayOf(
      prop_types_default().shape({
        href: (prop_types_default()).string,
        id: (prop_types_default()).number.isRequired,
        publicationState: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).bool]),
        mainField: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number])
      })
    ),
    updatePositionOfRelation: (prop_types_default()).func.isRequired
  }),
  index: (prop_types_default()).number.isRequired,
  style: (prop_types_default()).object.isRequired
};
/* harmony default export */ const RelationInput_RelationInput = (RelationInput);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInput/index.js



;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInputDataManager/RelationInputDataManager.js












const RelationInputDataManager = ({
  error,
  entityId,
  componentId,
  isComponentRelation,
  editable,
  description,
  intlLabel,
  isCreatingEntry,
  isCloningEntry,
  isFieldAllowed,
  isFieldReadable,
  labelAction,
  mainField,
  name,
  queryInfos: { endpoints, defaultParams, shouldDisplayRelationLink },
  placeholder,
  required,
  relationType,
  size,
  targetModel
}) => {
  const [liveText, setLiveText] = (0,react.useState)("");
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const {
    slug,
    initialData,
    modifiedData,
    relationConnect,
    relationDisconnect,
    relationLoad,
    relationReorder
  } = (0,dist/* useCMEditViewDataManager */.Wq)();
  const nameSplit = name.split(".");
  const initialDataPath = getInitialDataPathUsingTempKeys(initialData, modifiedData)(name);
  const relationsFromModifiedData = get_default()(modifiedData, name, []);
  const currentLastPage = Math.ceil(get_default()(initialData, name, []).length / RELATIONS_TO_DISPLAY);
  const { relations, search, searchFor } = useRelation(
    [slug, initialDataPath.join("."), modifiedData.id, defaultParams],
    {
      relation: {
        enabled: !!endpoints.relation,
        endpoint: endpoints.relation,
        pageGoal: currentLastPage,
        pageParams: {
          ...defaultParams,
          pageSize: RELATIONS_TO_DISPLAY
        },
        onLoad(value) {
          relationLoad({
            target: {
              initialDataPath: ["initialData", ...initialDataPath],
              modifiedDataPath: ["modifiedData", ...nameSplit],
              value
            }
          });
        },
        normalizeArguments: {
          mainFieldName: mainField.name,
          shouldAddLink: shouldDisplayRelationLink,
          targetModel
        }
      },
      search: {
        endpoint: endpoints.search,
        pageParams: {
          ...defaultParams,
          // eslint-disable-next-line no-nested-ternary
          entityId: isCreatingEntry || isCloningEntry ? void 0 : isComponentRelation ? componentId : entityId,
          pageSize: SEARCH_RESULTS_TO_DISPLAY
        }
      }
    }
  );
  const isMorph = (0,react.useMemo)(() => relationType.toLowerCase().includes("morph"), [relationType]);
  const toOneRelation = [
    "oneWay",
    "oneToOne",
    "manyToOne",
    "oneToManyMorph",
    "oneToOneMorph"
  ].includes(relationType);
  const isDisabled = (0,react.useMemo)(() => {
    if (isMorph) {
      return true;
    }
    if (!isCreatingEntry) {
      return !isFieldAllowed && isFieldReadable || !editable;
    }
    return !editable;
  }, [isMorph, isCreatingEntry, editable, isFieldAllowed, isFieldReadable]);
  const handleRelationConnect = (relation) => {
    const normalizedRelation = normalizeRelation(relation, {
      mainFieldName: mainField.name,
      shouldAddLink: shouldDisplayRelationLink,
      targetModel
    });
    relationConnect({ name, value: normalizedRelation, toOneRelation });
  };
  const handleRelationDisconnect = (relation) => {
    relationDisconnect({ name, id: relation.id });
  };
  const handleRelationLoadMore = () => {
    relations.fetchNextPage();
  };
  const handleSearch = (term = "") => {
    const [connected, disconnected] = diffRelations(
      relationsFromModifiedData,
      get_default()(initialData, name)
    );
    searchFor(term, {
      idsToInclude: disconnected,
      idsToOmit: connected
    });
  };
  const handleSearchMore = () => {
    search.fetchNextPage();
  };
  const getItemPos = (index) => `${index + 1} of ${relationsFromModifiedData.length}`;
  const handleRelationReorder = (oldIndex, newIndex) => {
    const item = relationsFromModifiedData[oldIndex];
    setLiveText(
      formatMessage(
        {
          id: (0,utils/* getTrad */.OB)("dnd.reorder"),
          defaultMessage: "{item}, moved. New position in list: {position}."
        },
        {
          item: item.mainField ?? item.id,
          position: getItemPos(newIndex)
        }
      )
    );
    relationReorder({
      name,
      newIndex,
      oldIndex
    });
  };
  const handleGrabItem = (index) => {
    const item = relationsFromModifiedData[index];
    setLiveText(
      formatMessage(
        {
          id: (0,utils/* getTrad */.OB)("dnd.grab-item"),
          defaultMessage: `{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel.`
        },
        {
          item: item.mainField ?? item.id,
          position: getItemPos(index)
        }
      )
    );
  };
  const handleDropItem = (index) => {
    const item = relationsFromModifiedData[index];
    setLiveText(
      formatMessage(
        {
          id: (0,utils/* getTrad */.OB)("dnd.drop-item"),
          defaultMessage: `{item}, dropped. Final position in list: {position}.`
        },
        {
          item: item.mainField ?? item.id,
          position: getItemPos(index)
        }
      )
    );
  };
  const handleCancel = (index) => {
    const item = relationsFromModifiedData[index];
    setLiveText(
      formatMessage(
        {
          id: (0,utils/* getTrad */.OB)("dnd.cancel-item"),
          defaultMessage: "{item}, dropped. Re-order cancelled."
        },
        {
          item: item.mainField ?? item.id
        }
      )
    );
  };
  if (!isFieldAllowed && isCreatingEntry || !isCreatingEntry && !isFieldAllowed && !isFieldReadable) {
    return /* @__PURE__ */ react.createElement(dist/* NotAllowedInput */.X0, { name, intlLabel, labelAction });
  }
  const browserRelationsCount = relationsFromModifiedData.length;
  const serverRelationsCount = (get_default()(initialData, initialDataPath) ?? []).length;
  const realServerRelationsCount = relations.data?.pages[0]?.pagination?.total ?? 0;
  const totalRelations = !relations.data && browserRelationsCount === serverRelationsCount ? browserRelationsCount : browserRelationsCount - serverRelationsCount + realServerRelationsCount;
  return /* @__PURE__ */ react.createElement(
    RelationInput_RelationInput,
    {
      error,
      canReorder: !toOneRelation,
      description,
      disabled: isDisabled,
      iconButtonAriaLabel: formatMessage({
        id: (0,utils/* getTrad */.OB)("components.RelationInput.icon-button-aria-label"),
        defaultMessage: "Drag"
      }),
      id: name,
      label: `${formatMessage({
        id: intlLabel.id,
        defaultMessage: intlLabel.defaultMessage
      })} ${totalRelations > 0 ? `(${totalRelations})` : ""}`,
      labelAction,
      labelLoadMore: !isCreatingEntry || isCloningEntry ? formatMessage({
        id: (0,utils/* getTrad */.OB)("relation.loadMore"),
        defaultMessage: "Load More"
      }) : null,
      labelDisconnectRelation: formatMessage({
        id: (0,utils/* getTrad */.OB)("relation.disconnect"),
        defaultMessage: "Remove"
      }),
      listAriaDescription: formatMessage({
        id: (0,utils/* getTrad */.OB)("dnd.instructions"),
        defaultMessage: `Press spacebar to grab and re-order`
      }),
      listHeight: 320,
      liveText,
      loadingMessage: formatMessage({
        id: (0,utils/* getTrad */.OB)("relation.isLoading"),
        defaultMessage: "Relations are loading"
      }),
      name,
      noRelationsMessage: formatMessage({
        id: (0,utils/* getTrad */.OB)("relation.notAvailable"),
        defaultMessage: "No relations available"
      }),
      numberOfRelationsToDisplay: RELATIONS_TO_DISPLAY,
      onDropItem: handleDropItem,
      onGrabItem: handleGrabItem,
      onCancel: handleCancel,
      onRelationConnect: handleRelationConnect,
      onRelationDisconnect: handleRelationDisconnect,
      onRelationLoadMore: handleRelationLoadMore,
      onRelationReorder: handleRelationReorder,
      onSearch: (term) => handleSearch(term),
      onSearchNextPage: () => handleSearchMore(),
      placeholder: formatMessage(
        placeholder || {
          id: (0,utils/* getTrad */.OB)("relation.add"),
          defaultMessage: "Add relation"
        }
      ),
      publicationStateTranslations: {
        [PUBLICATION_STATES.DRAFT]: formatMessage({
          id: (0,utils/* getTrad */.OB)("relation.publicationState.draft"),
          defaultMessage: "Draft"
        }),
        [PUBLICATION_STATES.PUBLISHED]: formatMessage({
          id: (0,utils/* getTrad */.OB)("relation.publicationState.published"),
          defaultMessage: "Published"
        })
      },
      relations: pick_default()(
        { ...relations, data: relationsFromModifiedData },
        "data",
        "hasNextPage",
        "isFetchingNextPage",
        "isLoading",
        "isSuccess"
      ),
      required,
      searchResults: normalizeSearchResults(search, {
        mainFieldName: mainField.name
      }),
      size
    }
  );
};
RelationInputDataManager.defaultProps = {
  componentId: void 0,
  entityId: void 0,
  editable: true,
  error: void 0,
  description: "",
  labelAction: null,
  isComponentRelation: false,
  isFieldAllowed: true,
  placeholder: null,
  required: false
};
RelationInputDataManager.propTypes = {
  componentId: (prop_types_default()).number,
  entityId: (prop_types_default()).number,
  editable: (prop_types_default()).bool,
  error: (prop_types_default()).string,
  description: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  labelAction: (prop_types_default()).element,
  isCloningEntry: (prop_types_default()).bool.isRequired,
  isCreatingEntry: (prop_types_default()).bool.isRequired,
  isComponentRelation: (prop_types_default()).bool,
  isFieldAllowed: (prop_types_default()).bool,
  isFieldReadable: (prop_types_default()).bool.isRequired,
  mainField: prop_types_default().shape({
    name: (prop_types_default()).string.isRequired,
    schema: prop_types_default().shape({
      type: (prop_types_default()).string.isRequired
    }).isRequired
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  placeholder: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  required: (prop_types_default()).bool,
  relationType: (prop_types_default()).string.isRequired,
  size: (prop_types_default()).number.isRequired,
  targetModel: (prop_types_default()).string.isRequired,
  queryInfos: prop_types_default().shape({
    defaultParams: prop_types_default().shape({
      locale: (prop_types_default()).string
    }),
    endpoints: prop_types_default().shape({
      relation: (prop_types_default()).string,
      search: (prop_types_default()).string.isRequired
    }).isRequired,
    shouldDisplayRelationLink: (prop_types_default()).bool.isRequired
  }).isRequired
};
const Memoized = (0,react.memo)(RelationInputDataManager);
/* harmony default export */ const RelationInputDataManager_RelationInputDataManager = (utils_connect(Memoized, utils_select));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInputDataManager/index.js


// EXTERNAL MODULE: ./node_modules/codemirror5/lib/codemirror.js
var codemirror = __webpack_require__(22919);
var codemirror_default = /*#__PURE__*/__webpack_require__.n(codemirror);
// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__(53915);
// EXTERNAL MODULE: ./node_modules/markdown-it/index.js
var markdown_it = __webpack_require__(75041);
var markdown_it_default = /*#__PURE__*/__webpack_require__.n(markdown_it);
// EXTERNAL MODULE: ./node_modules/markdown-it-abbr/index.js
var markdown_it_abbr = __webpack_require__(30200);
var markdown_it_abbr_default = /*#__PURE__*/__webpack_require__.n(markdown_it_abbr);
// EXTERNAL MODULE: ./node_modules/markdown-it-container/index.js
var markdown_it_container = __webpack_require__(91379);
var markdown_it_container_default = /*#__PURE__*/__webpack_require__.n(markdown_it_container);
// EXTERNAL MODULE: ./node_modules/markdown-it-deflist/index.js
var markdown_it_deflist = __webpack_require__(33299);
var markdown_it_deflist_default = /*#__PURE__*/__webpack_require__.n(markdown_it_deflist);
// EXTERNAL MODULE: ./node_modules/markdown-it-emoji/index.js
var markdown_it_emoji = __webpack_require__(33409);
var markdown_it_emoji_default = /*#__PURE__*/__webpack_require__.n(markdown_it_emoji);
// EXTERNAL MODULE: ./node_modules/markdown-it-footnote/index.js
var markdown_it_footnote = __webpack_require__(63645);
var markdown_it_footnote_default = /*#__PURE__*/__webpack_require__.n(markdown_it_footnote);
// EXTERNAL MODULE: ./node_modules/markdown-it-ins/index.js
var markdown_it_ins = __webpack_require__(7988);
var markdown_it_ins_default = /*#__PURE__*/__webpack_require__.n(markdown_it_ins);
// EXTERNAL MODULE: ./node_modules/markdown-it-mark/index.js
var markdown_it_mark = __webpack_require__(7055);
var markdown_it_mark_default = /*#__PURE__*/__webpack_require__.n(markdown_it_mark);
// EXTERNAL MODULE: ./node_modules/markdown-it-sub/index.js
var markdown_it_sub = __webpack_require__(26757);
var markdown_it_sub_default = /*#__PURE__*/__webpack_require__.n(markdown_it_sub);
// EXTERNAL MODULE: ./node_modules/markdown-it-sup/index.js
var markdown_it_sup = __webpack_require__(58311);
var markdown_it_sup_default = /*#__PURE__*/__webpack_require__.n(markdown_it_sup);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/PreviewWysiwyg/utils/mdRenderer.js











const loadCss = async () => {
  await __webpack_require__.e(/* import() | highlight.js */ 7347).then(__webpack_require__.bind(__webpack_require__, 24840));
};
loadCss();
const md = new (markdown_it_default())({
  html: true,
  // Enable HTML tags in source
  xhtmlOut: false,
  breaks: true,
  langPrefix: "language-",
  linkify: true,
  typographer: true,
  // Code from: https://github.com/markdown-it/markdown-it/blob/master/support/demo_template/index.js#L83
  highlight(str, lang) {
    if (lang && lang !== "auto" && (0,lib.getLanguage)(lang)) {
      return '<pre class="hljs language-' + md.utils.escapeHtml(lang.toLowerCase()) + '"><code>' + (0,lib.highlight)(lang, str, true).value + "</code></pre>";
    }
    if (lang === "auto") {
      const result = (0,lib.highlightAuto)(str);
      return '<pre class="hljs language-' + md.utils.escapeHtml(result.language) + '"><code>' + result.value + "</code></pre>";
    }
    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>";
  }
}).use((markdown_it_abbr_default())).use((markdown_it_container_default()), "warning").use((markdown_it_container_default()), "tip").use((markdown_it_deflist_default())).use((markdown_it_emoji_default())).use((markdown_it_footnote_default())).use((markdown_it_ins_default())).use((markdown_it_mark_default())).use((markdown_it_sub_default())).use((markdown_it_sup_default()));
md.renderer.rules.footnote_ref = (tokens, idx, options, env, slf) => {
  const caption = slf.rules.footnote_caption(tokens, idx, options, env, slf);
  return '<sup class="footnote-ref"><span>' + caption + "</span></sup>";
};
md.renderer.rules.footnote_anchor = () => {
  return ' <span class="footnote-backref">\u21A9\uFE0E</span>';
};
/* harmony default export */ const mdRenderer = (md);

// EXTERNAL MODULE: ./node_modules/sanitize-html/index.js
var sanitize_html = __webpack_require__(51689);
var sanitize_html_default = /*#__PURE__*/__webpack_require__.n(sanitize_html);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/PreviewWysiwyg/utils/satinizeHtml.js

const options = {
  ...(sanitize_html_default()).defaults,
  allowedTags: false,
  allowedAttributes: {
    "*": ["href", "align", "alt", "center", "width", "height", "type", "controls", "target"],
    img: ["src", "alt"],
    source: ["src", "type"]
  }
};
const clean = (dirty) => sanitize_html_default()(dirty, options);
/* harmony default export */ const satinizeHtml = (clean);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/PreviewWysiwyg/Wrapper.js

const Wrapper_Wrapper = styled_components_browser_esm/* default */.ZP.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: ${({ theme }) => `${theme.spaces[3]} ${theme.spaces[4]}`};
  font-size: ${14 / 16}rem;
  background-color: ${({ theme }) => theme.colors.neutral0};
  color: ${({ theme }) => theme.colors.neutral800};
  line-height: ${({ theme }) => theme.lineHeights[6]};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-block-start: ${({ theme }) => theme.spaces[2]};
    margin-block-end: ${({ theme }) => theme.spaces[2]};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spaces[2]};
  }

  h1 {
    font-size: ${36 / 16}rem;
    font-weight: 600;
  }

  h2 {
    font-size: ${30 / 16}rem;
    font-weight: 500;
  }

  h3 {
    font-size: ${24 / 16}rem;
    font-weight: 500;
  }

  h4 {
    font-size: ${20 / 16}rem;
    font-weight: 500;
  }

  strong {
    font-weight: 800;
  }

  em {
    font-style: italic;
  }

  blockquote {
    margin-top: ${({ theme }) => theme.spaces[8]};
    margin-bottom: ${({ theme }) => theme.spaces[7]};
    font-size: ${14 / 16}rem;
    font-weight: 400;
    border-left: 4px solid ${({ theme }) => theme.colors.neutral150};
    font-style: italic;
    padding: ${({ theme }) => theme.spaces[2]} ${({ theme }) => theme.spaces[5]};
  }

  img {
    max-width: 100%;
  }

  table {
    thead {
      background: ${({ theme }) => theme.colors.neutral150};

      th {
        padding: ${({ theme }) => theme.spaces[4]};
      }
    }
    tr {
      border: 1px solid ${({ theme }) => theme.colors.neutral200};
    }
    th,
    td {
      padding: ${({ theme }) => theme.spaces[4]};
      border: 1px solid ${({ theme }) => theme.colors.neutral200};
      border-bottom: 0;
      border-top: 0;
    }
  }

  pre,
  code {
    font-size: ${14 / 16}rem;
    border-radius: 4px;
    /* 
      Hard coded since the color is the same between themes,
      theme.colors.neutral800 changes between themes.

      Matches the color of the JSON Input component.
    */
    background-color: #32324d;
    max-width: 100%;
    overflow: auto;
    padding: ${({ theme }) => theme.spaces[2]};
  }

  /* Inline code */
  p,
  pre,
  td {
    > code {
      color: #839496;
    }
  }

  ol {
    list-style-type: decimal;
    margin-block-start: ${({ theme }) => theme.spaces[4]};
    margin-block-end: ${({ theme }) => theme.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({ theme }) => theme.spaces[4]};

    ol,
    ul {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }

  ul {
    list-style-type: disc;
    margin-block-start: ${({ theme }) => theme.spaces[4]};
    margin-block-end: ${({ theme }) => theme.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({ theme }) => theme.spaces[4]};

    ul,
    ol {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }
`;
/* harmony default export */ const PreviewWysiwyg_Wrapper = (Wrapper_Wrapper);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/PreviewWysiwyg/index.js





const PreviewWysiwyg = ({ data }) => {
  const html = (0,react.useMemo)(() => satinizeHtml(mdRenderer.render(data.replaceAll("\\n", "\n") || "")), [data]);
  return /* @__PURE__ */ react.createElement(PreviewWysiwyg_Wrapper, null, /* @__PURE__ */ react.createElement("div", { dangerouslySetInnerHTML: { __html: html } }));
};
PreviewWysiwyg.defaultProps = {
  data: ""
};
PreviewWysiwyg.propTypes = {
  data: (prop_types_default()).string
};
/* harmony default export */ const components_PreviewWysiwyg = ((0,react.memo)(PreviewWysiwyg));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/utils/continueList.js

var listRE = /^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/, emptyListRE = /^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/, unorderedListRE = /[*+-]\s/;
function newlineAndIndentContinueMarkdownList(cm) {
  if (cm.getOption("disableInput"))
    return (codemirror_default()).Pass;
  var ranges = cm.listSelections(), replacements = [];
  for (var i = 0; i < ranges.length; i++) {
    var pos = ranges[i].head;
    var eolState = cm.getStateAfter(pos.line);
    var inList = eolState.list !== false;
    var inQuote = eolState.quote !== 0;
    var line = cm.getLine(pos.line), match = listRE.exec(line);
    var cursorBeforeBullet = /^\s*$/.test(line.slice(0, pos.ch));
    if (!ranges[i].empty() || !inList && !inQuote || !match || cursorBeforeBullet) {
      cm.execCommand("newlineAndIndent");
      return;
    }
    if (emptyListRE.test(line)) {
      var endOfQuote = inQuote && />\s*$/.test(line);
      var endOfList = !/>\s*$/.test(line);
      if (endOfQuote || endOfList)
        cm.replaceRange(
          "",
          {
            line: pos.line,
            ch: 0
          },
          {
            line: pos.line,
            ch: pos.ch + 1
          }
        );
      replacements[i] = "\n";
    } else {
      var indent = match[1], after = match[5];
      var numbered = !(unorderedListRE.test(match[2]) || match[2].indexOf(">") >= 0);
      var bullet = numbered ? parseInt(match[3], 10) + 1 + match[4] : match[2].replace("x", " ");
      replacements[i] = "\n" + indent + bullet + after;
      if (numbered)
        incrementRemainingMarkdownListNumbers(cm, pos);
    }
  }
  cm.replaceSelections(replacements);
}
function incrementRemainingMarkdownListNumbers(cm, pos) {
  var startLine = pos.line, lookAhead = 0, skipCount = 0;
  var startItem = listRE.exec(cm.getLine(startLine)), startIndent = startItem[1];
  do {
    lookAhead += 1;
    var nextLineNumber = startLine + lookAhead;
    var nextLine = cm.getLine(nextLineNumber);
    var nextItem = listRE.exec(nextLine);
    if (nextItem) {
      var nextIndent = nextItem[1];
      var newNumber = parseInt(startItem[3], 10) + lookAhead - skipCount;
      var nextNumber = parseInt(nextItem[3], 10), itemNumber = nextNumber;
      if (startIndent === nextIndent && !isNaN(nextNumber)) {
        if (newNumber === nextNumber)
          itemNumber = nextNumber + 1;
        if (newNumber > nextNumber)
          itemNumber = newNumber + 1;
        cm.replaceRange(
          nextLine.replace(listRE, nextIndent + itemNumber + nextItem[4] + nextItem[5]),
          {
            line: nextLineNumber,
            ch: 0
          },
          {
            line: nextLineNumber,
            ch: nextLine.length
          }
        );
      } else {
        if (startIndent.length > nextIndent.length)
          return;
        if (startIndent.length < nextIndent.length && lookAhead === 1)
          return;
        skipCount += 1;
      }
    }
  } while (nextItem);
}
/* harmony default export */ const continueList = (newlineAndIndentContinueMarkdownList);

// EXTERNAL MODULE: ./node_modules/codemirror5/addon/display/placeholder.js
var placeholder = __webpack_require__(29510);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/Editor.js







const Editor = (0,react.forwardRef)(
  ({
    disabled,
    editorRef,
    error,
    isPreviewMode,
    isExpandMode,
    name,
    onChange,
    placeholder,
    textareaRef,
    value
  }, forwardedRef) => {
    const onChangeRef = (0,react.useRef)(onChange);
    (0,react.useEffect)(() => {
      editorRef.current = codemirror_default().fromTextArea(textareaRef.current, {
        lineWrapping: true,
        extraKeys: {
          Enter: "newlineAndIndentContinueMarkdownList",
          Tab: false,
          "Shift-Tab": false
        },
        readOnly: false,
        smartIndent: false,
        placeholder,
        spellcheck: true,
        inputStyle: "contenteditable"
      });
      (codemirror_default()).commands.newlineAndIndentContinueMarkdownList = continueList;
      editorRef.current.on("change", (doc) => {
        onChangeRef.current({ target: { name, value: doc.getValue(), type: "wysiwyg" } });
      });
    }, [editorRef, textareaRef, name, placeholder]);
    (0,react.useEffect)(() => {
      if (value && !editorRef.current.hasFocus()) {
        editorRef.current.setValue(value);
      }
    }, [editorRef, value]);
    (0,react.useEffect)(() => {
      if (isPreviewMode || disabled) {
        editorRef.current.setOption("readOnly", "nocursor");
      } else {
        editorRef.current.setOption("readOnly", false);
      }
    }, [disabled, isPreviewMode, editorRef]);
    (0,react.useEffect)(() => {
      if (error) {
        editorRef.current.setOption("screenReaderLabel", error);
      } else {
        editorRef.current.setOption("screenReaderLabel", "Editor");
      }
    }, [editorRef, error]);
    (0,react.useImperativeHandle)(
      forwardedRef,
      () => ({
        focus() {
          editorRef.current.getInputField().focus();
        },
        scrollIntoView(args) {
          editorRef.current.getInputField().scrollIntoView(args);
        }
      }),
      [editorRef]
    );
    return /* @__PURE__ */ react.createElement(EditorAndPreviewWrapper, null, /* @__PURE__ */ react.createElement(EditorStylesContainer, { isExpandMode, disabled: disabled || isPreviewMode }, /* @__PURE__ */ react.createElement("textarea", { ref: textareaRef })), isPreviewMode && /* @__PURE__ */ react.createElement(components_PreviewWysiwyg, { data: value }));
  }
);
Editor.defaultProps = {
  disabled: false,
  error: void 0,
  isPreviewMode: false,
  isExpandMode: false,
  placeholder: "",
  value: ""
};
Editor.propTypes = {
  disabled: (prop_types_default()).bool,
  editorRef: prop_types_default().shape({ current: (prop_types_default()).any }).isRequired,
  error: (prop_types_default()).string,
  isPreviewMode: (prop_types_default()).bool,
  isExpandMode: (prop_types_default()).bool,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  placeholder: (prop_types_default()).string,
  textareaRef: prop_types_default().shape({ current: (prop_types_default()).any }).isRequired,
  value: (prop_types_default()).string
};
const EditorAndPreviewWrapper = styled_components_browser_esm/* default */.ZP.div`
  position: relative;
  height: calc(100% - 48px);
`;
const EditorStylesContainer = styled_components_browser_esm/* default */.ZP.div`
  cursor: ${({ disabled }) => disabled ? "not-allowed !important" : "auto"};
  height: 100%;
  /* BASICS */
  .CodeMirror-placeholder {
    color: ${({ theme }) => theme.colors.neutral600} !important;
  }

  .CodeMirror {
    /* Set height, width, borders, and global font properties here */
    font-size: ${14 / 16}rem;
    height: ${({ isExpandMode }) => isExpandMode ? "100%" : "290px"};
    color: ${({ theme }) => theme.colors.neutral800};
    direction: ltr;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  /* PADDING */

  .CodeMirror-lines {
    padding: ${({ theme }) => `${theme.spaces[3]} ${theme.spaces[4]}`};
    /* Vertical padding around content */
  }

  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    /* The little square between H and V scrollbars */
    background-color: ${({ theme }) => `${theme.colors.neutral0}`};
  }

  /* GUTTER */

  .CodeMirror-gutters {
    border-right: 1px solid #ddd;
    background-color: #f7f7f7;
    white-space: nowrap;
  }
  .CodeMirror-linenumbers {
  }
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: #999;
    white-space: nowrap;
  }

  .CodeMirror-guttermarker {
    color: black;
  }
  .CodeMirror-guttermarker-subtle {
    color: #999;
  }

  /* CURSOR */

  .CodeMirror-cursor {
    border-left: 1px solid black;
    border-right: none;
    width: 0;
  }
  /* Shown when moving in bi-directional text */
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid silver;
  }
  .cm-fat-cursor .CodeMirror-cursor {
    width: auto;
    border: 0 !important;
    background: #7e7;
  }
  .cm-fat-cursor div.CodeMirror-cursors {
    /* z-index: 1; */
  }

  .cm-fat-cursor-mark {
    background-color: rgba(20, 255, 20, 0.5);
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
  }
  .cm-animate-fat-cursor {
    width: auto;
    border: 0;
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
    background-color: #7e7;
  }

  /* Can style cursor different in overwrite (non-insert) mode */
  .CodeMirror-overwrite .CodeMirror-cursor {
  }

  .cm-tab {
    display: inline-block;
    text-decoration: inherit;
  }

  .CodeMirror-rulers {
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    bottom: 0;
    overflow: hidden;
  }
  .CodeMirror-ruler {
    border-left: 1px solid #ccc;
    top: 0;
    bottom: 0;
    position: absolute;
  }

  /* DEFAULT THEME */

  .cm-header,
  .cm-strong {
    font-weight: bold;
  }
  .cm-em {
    font-style: italic;
  }
  .cm-link {
    text-decoration: underline;
  }
  .cm-strikethrough {
    text-decoration: line-through;
  }

  .CodeMirror-composing {
    border-bottom: 2px solid;
  }

  /* Default styles for common addons */

  div.CodeMirror span.CodeMirror-matchingbracket {
    color: #0b0;
  }
  div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #a22;
  }
  .CodeMirror-matchingtag {
    background: rgba(255, 150, 0, 0.3);
  }
  .CodeMirror-activeline-background {
    background: #e8f2ff;
  }

  /* STOP */

  /* The rest of this file contains styles related to the mechanics of
    the editor. You probably shouldn't touch them. */

  .CodeMirror {
    position: relative;
    overflow: hidden;
    background: ${({ theme }) => `${theme.colors.neutral0}`};
  }

  .CodeMirror-scroll {
    overflow: scroll !important; /* Things will break if this is overridden */
    /* 50px is the magic margin used to hide the element's real scrollbars */
    /* See overflow: hidden in .CodeMirror */
    margin-bottom: -50px;
    margin-right: -50px;
    padding-bottom: 50px;
    height: 100%;
    outline: none; /* Prevent dragging from highlighting the element */
    position: relative;
  }
  .CodeMirror-sizer {
    position: relative;
    border-right: 50px solid transparent;
  }

  /* The fake, visible scrollbars. Used to force redraw during scrolling
    before actual scrolling happens, thus preventing shaking and
    flickering artifacts. */
  .CodeMirror-vscrollbar,
  .CodeMirror-hscrollbar,
  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    position: absolute;
    z-index: 1;
    display: none;
    outline: none;
  }

  .CodeMirror-vscrollbar {
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar {
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-scrollbar-filler {
    right: 0;
    bottom: 0;
  }

  .CodeMirror-lines {
    cursor: text;
    min-height: 1px; /* prevents collapsing before first draw */
  }
  /* Reset some styles that the rest of the page might have set */
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border-width: 0;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: 1.5;
    color: inherit;
    /* z-index: 2; */
    position: relative;
    overflow: visible;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
  }

  .CodeMirror pre.CodeMirror-line-like {
    z-index: 2;
  }

  .CodeMirror-wrap pre.CodeMirror-line,
  .CodeMirror-wrap pre.CodeMirror-line-like {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }

  .CodeMirror-linebackground {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }

  .CodeMirror-linewidget {
    position: relative;
    /* z-index: 2; */
    padding: 0.1px; /* Force widget margins to stay inside of the container */
  }

  .CodeMirror-widget {
  }

  .CodeMirror-rtl pre {
    direction: rtl;
  }

  .CodeMirror-code {
    outline: none;
  }

  /* Force content-box sizing for the elements where we expect it */
  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .CodeMirror-cursor {
    position: absolute;
    pointer-events: none;
    border-color: ${({ theme }) => `${theme.colors.neutral800}`};
  }
  .CodeMirror-measure pre {
    position: static;
  }

  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    + div {
      z-index: 0 !important;
    }
  }

  div.CodeMirror-dragcursors {
    visibility: visible;
  }

  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }

  .CodeMirror-selected {
    background: ${({ theme }) => theme.colors.neutral200};
    /* z-index: -10; */
  }
  .CodeMirror-crosshair {
    cursor: crosshair;
  }

  /* Used to force a border model for a node */
  .cm-force-border {
    padding-right: 0.1px;
  }

  /* See issue #2901 */
  .cm-tab-wrap-hack:after {
    content: '';
  }

  /* Help users use markselection to safely style text background */
  span.CodeMirror-selectedtext {
    background: none;
  }

  span {
    color: ${({ theme }) => theme.colors.neutral800} !important;
  }
`;
/* harmony default export */ const Wysiwyg_Editor = (Editor);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Portal/Portal.mjs
var Portal = __webpack_require__(2637);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/FocusTrap/FocusTrap.mjs
var FocusTrap = __webpack_require__(45553);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/EditorLayout.js








const setOpacity = (hex, alpha) => `${hex}${Math.floor(alpha * 255).toString(16).padStart(2, 0)}`;
const ExpandWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  background: ${({ theme }) => setOpacity(theme.colors.neutral800, 0.2)};
`;
const BoxWithBorder = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  border-right: 1px solid ${({ theme }) => theme.colors.neutral200};
`;
const ExpandButton = (0,styled_components_browser_esm/* default */.ZP)((0,BaseButton/* BaseButton */.Y))`
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    margin-left: ${({ theme }) => `${theme.spaces[2]}`};

    path {
      fill: ${({ theme }) => theme.colors.neutral700};
      width: ${12 / 16}rem;
      height: ${12 / 16}rem;
    }
  }
`;
const EditorLayout = ({ children, isExpandMode, error, previewContent, onCollapse }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  (0,dist/* useLockScroll */.F5)(isExpandMode);
  if (isExpandMode) {
    return /* @__PURE__ */ react.createElement(Portal/* Portal */.h, { role: "dialog", "aria-modal": false }, /* @__PURE__ */ react.createElement(FocusTrap/* FocusTrap */.i, { onEscape: onCollapse }, /* @__PURE__ */ react.createElement(
      ExpandWrapper,
      {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 4,
        justifyContent: "center",
        onClick: onCollapse
      },
      /* @__PURE__ */ react.createElement(
        Box/* Box */.x,
        {
          background: "neutral0",
          hasRadius: true,
          shadow: "popupShadow",
          overflow: "hidden",
          width: "90%",
          height: "90%",
          onClick: (e) => e.stopPropagation()
        },
        /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { height: "100%", alignItems: "flex-start" }, /* @__PURE__ */ react.createElement(BoxWithBorder, { flex: "1", height: "100%" }, children), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "start", direction: "column", flex: 1, height: "100%", width: "100%" }, /* @__PURE__ */ react.createElement(
          Flex/* Flex */.k,
          {
            height: (0,dist/* pxToRem */.Q1)(48),
            background: "neutral100",
            justifyContent: "flex-end",
            shrink: 0,
            width: "100%"
          },
          /* @__PURE__ */ react.createElement(ExpandButton, { onClick: onCollapse }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
            id: "components.Wysiwyg.collapse",
            defaultMessage: "Collapse"
          })), /* @__PURE__ */ react.createElement(Collapse/* default */.Z, null))
        ), /* @__PURE__ */ react.createElement(Box/* Box */.x, { position: "relative", height: "100%", width: "100%" }, /* @__PURE__ */ react.createElement(components_PreviewWysiwyg, { data: previewContent }))))
      )
    )));
  }
  return /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      borderColor: error ? "danger600" : "neutral200",
      borderStyle: "solid",
      borderWidth: "1px",
      hasRadius: true
    },
    children
  );
};
EditorLayout.defaultProps = {
  error: void 0,
  previewContent: ""
};
EditorLayout.propTypes = {
  children: (prop_types_default()).node.isRequired,
  error: (prop_types_default()).string,
  isExpandMode: (prop_types_default()).bool.isRequired,
  previewContent: (prop_types_default()).string,
  onCollapse: (prop_types_default()).func.isRequired
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/utils/utils.js
const replaceText = (markdownName, textToChange) => {
  let editedText;
  switch (markdownName) {
    case "Strikethrough":
      editedText = `~~${textToChange}~~`;
      break;
    case "Bold":
      editedText = `**${textToChange}**`;
      break;
    case "Italic":
      editedText = `_${textToChange}_`;
      break;
    case "Underline":
      editedText = `<u>${textToChange}</u>`;
      break;
    case "Code":
      editedText = `\`\`\`
${textToChange}
\`\`\``;
      break;
    case "Link":
      editedText = `[${textToChange}](link)`;
      break;
    case "Quote":
      editedText = `>${textToChange}`;
      break;
    default:
      editedText = textToChange;
  }
  return editedText;
};
const insertText = (markdownName) => {
  let editedText;
  let selection = { start: markdownName.length, end: 0 };
  switch (markdownName) {
    case "Strikethrough":
      editedText = `~~${markdownName}~~`;
      selection.end = 2;
      break;
    case "Bold":
      editedText = `**${markdownName}**`;
      selection.end = 2;
      break;
    case "Italic":
      editedText = `_${markdownName}_`;
      selection.end = 1;
      break;
    case "alt":
      editedText = `[${markdownName}]()`;
      selection.end = 3;
      break;
    case "Underline":
      editedText = `<u>${markdownName}</u>`;
      selection.end = 4;
      break;
    case "Code":
      editedText = `\`\`\`
${markdownName}
\`\`\``;
      selection.end = 3;
      break;
    case "Link":
      editedText = `[${markdownName}](link)`;
      selection.end = 7;
      break;
    case "Quote":
      editedText = `>${markdownName}`;
      selection.end = 0;
      break;
    default:
      editedText = "";
  }
  return { editedText, selection };
};
const insertListOrTitle = (markdown) => {
  let textToInsert;
  switch (markdown) {
    case "BulletList":
      textToInsert = "- ";
      break;
    case "NumberList":
      textToInsert = "1. ";
      break;
    case "h1":
      textToInsert = "# ";
      break;
    case "h2":
      textToInsert = "## ";
      break;
    case "h3":
      textToInsert = "### ";
      break;
    case "h4":
      textToInsert = "#### ";
      break;
    case "h5":
      textToInsert = "##### ";
      break;
    case "h6":
      textToInsert = "###### ";
      break;
    default:
      return "";
  }
  return textToInsert;
};
const markdownHandler = (editor, markdownType) => {
  const textToEdit = editor.current.getSelection();
  let textToInsert;
  if (textToEdit) {
    const editedText = replaceText(markdownType, textToEdit);
    editor.current.replaceSelection(editedText);
    editor.current.focus();
  } else {
    textToInsert = insertText(markdownType);
    editor.current.replaceSelection(textToInsert.editedText);
    editor.current.focus();
    const { line, ch } = editor.current.getCursor();
    const endSelection = ch - textToInsert.selection.end;
    const startSelection = ch - textToInsert.selection.end - textToInsert.selection.start;
    editor.current.setSelection({ line, ch: startSelection }, { line, ch: endSelection });
  }
};
const listHandler = (editor, listType) => {
  const doc = editor.current.getDoc();
  const insertion = listType === "BulletList" ? "- " : "1. ";
  if (doc.somethingSelected()) {
    const selections = doc.listSelections();
    let remove = null;
    editor.current.operation(function() {
      selections.forEach(function(selection) {
        const pos = [selection.head.line, selection.anchor.line].sort();
        if (remove == null) {
          remove = doc.getLine(pos[0]).startsWith(insertion);
        }
        for (let i = pos[0]; i <= pos[1]; i++) {
          if (remove) {
            if (doc.getLine(i).startsWith(insertion)) {
              doc.replaceRange("", { line: i, ch: 0 }, { line: i, ch: insertion.length });
            }
          } else {
            const lineInsertion = listType === "BulletList" ? "- " : `${i + 1}. `;
            doc.replaceRange(lineInsertion, { line: i, ch: 0 });
          }
        }
      });
    });
  } else {
    let { line: currentLine } = doc.getCursor();
    const listToInsert = insertListOrTitle(listType);
    const lineContent = editor.current.getLine(currentLine);
    const textToInsert = listToInsert + lineContent;
    editor.current.setSelection(
      { line: currentLine, ch: 0 },
      { line: currentLine, ch: lineContent.length }
    );
    editor.current.replaceSelection(textToInsert);
  }
  editor.current.focus();
};
const titleHandler = (editor, titleType) => {
  let { line: currentLine } = editor.current.getCursor();
  const titleToInsert = insertListOrTitle(titleType);
  const lineContent = editor.current.getLine(currentLine);
  const lineWithNoTitle = lineContent.replace(/#{1,6}\s/g, "").trim();
  const textToInsert = titleToInsert + lineWithNoTitle;
  editor.current.setSelection(
    { line: currentLine, ch: 0 },
    { line: currentLine, ch: lineContent.length }
  );
  editor.current.replaceSelection(textToInsert);
  setTimeout(() => {
    const newLastLineLength = editor.current.getLine(currentLine).length;
    editor.current.focus();
    editor.current.setCursor({ line: currentLine, ch: newLastLineLength });
  }, 0);
};
const insertFile = (editor, files) => {
  let { line, ch } = editor.current.getCursor();
  files.forEach((file, i) => {
    let contentLength = editor.current.getLine(line).length;
    editor.current.setCursor({ line, ch: contentLength });
    if (i > 0 || i === 0 && ch !== 0) {
      contentLength = editor.current.getLine(line).length;
      editor.current.setCursor({ line, ch: contentLength });
      line++;
      editor.current.replaceSelection("\n");
    }
    if (file.mime.includes("image")) {
      editor.current.replaceSelection(`![${file.alt}](${file.url})`);
    } else {
      editor.current.replaceSelection(`[${file.alt}](${file.url})`);
    }
  });
  setTimeout(() => editor.current.focus(), 0);
};
const insertWithTextToEdit = (editor, markdownType, line, contentLength, textToEdit) => {
  const textToInsert = replaceText(markdownType, textToEdit);
  const contentToMove = editor.current.getRange(
    { line: line + 1, ch: 0 },
    { line: Infinity, ch: Infinity }
  );
  editor.current.replaceRange("", { line: line + 1, ch: 0 }, { line: Infinity, ch: Infinity });
  editor.current.replaceSelection("");
  editor.current.setCursor({ line, ch: contentLength });
  editor.current.replaceSelection("\n");
  editor.current.replaceSelection(textToInsert);
  if (markdownType === "Code") {
    let { line: newLine } = editor.current.getCursor();
    editor.current.setCursor({ line: newLine - 1, ch: textToEdit.length });
  }
  editor.current.replaceRange(
    contentToMove,
    { line: line + 4, ch: 0 },
    { line: Infinity, ch: Infinity }
  );
  editor.current.focus();
};
const insertWithoutTextToEdit = (editor, markdownType, line, contentLength) => {
  const textToInsert = insertText(markdownType);
  const contentToMove = editor.current.getRange(
    { line: line + 1, ch: 0 },
    { line: Infinity, ch: Infinity }
  );
  editor.current.replaceRange("", { line: line + 1, ch: 0 }, { line: Infinity, ch: Infinity });
  editor.current.setCursor({ line, ch: contentLength });
  editor.current.replaceSelection("\n");
  editor.current.replaceSelection(textToInsert.editedText);
  if (markdownType === "Code") {
    line += 2;
    editor.current.setSelection({ line, ch: 0 }, { line, ch: 4 });
  } else {
    line += 1;
    let { ch } = editor.current.getCursor();
    let endSelection = ch - textToInsert.selection.end;
    let startSelection = ch - textToInsert.selection.end - textToInsert.selection.start;
    editor.current.setSelection({ line, ch: startSelection }, { line, ch: endSelection });
  }
  editor.current.replaceRange(
    contentToMove,
    { line: line + 2, ch: 0 },
    { line: Infinity, ch: Infinity }
  );
  editor.current.focus();
};
const quoteAndCodeHandler = (editor, markdownType) => {
  const textToEdit = editor.current.getSelection();
  let { line } = editor.current.getCursor();
  let contentLength = editor.current.getLine(line).length;
  if (textToEdit) {
    insertWithTextToEdit(editor, markdownType, line, contentLength, textToEdit);
  } else {
    insertWithoutTextToEdit(editor, markdownType, line, contentLength);
  }
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/WysiwygStyles.js


const WysiwygStyles_CustomIconButton = (0,styled_components_browser_esm/* default */.ZP)((0,IconButton/* IconButton */.h))`
  padding: ${({ theme }) => theme.spaces[2]};
  /* Trick to prevent the outline from overflowing because of the general outline-offset */
  outline-offset: -2px !important;

  svg {
    width: ${18 / 16}rem;
    height: ${18 / 16}rem;
  }
`;
const CustomLinkIconButton = (0,styled_components_browser_esm/* default */.ZP)(WysiwygStyles_CustomIconButton)`
  svg {
    width: ${8 / 16}rem;
    height: ${8 / 16}rem;
  }
`;
const MainButtons = (0,styled_components_browser_esm/* default */.ZP)((0,IconButton/* IconButtonGroup */.o))`
  margin-left: ${({ theme }) => theme.spaces[4]};
`;
const MoreButton = (0,styled_components_browser_esm/* default */.ZP)((0,IconButton/* IconButton */.h))`
  margin: ${({ theme }) => `0 ${theme.spaces[2]}`};
  padding: ${({ theme }) => theme.spaces[2]};

  svg {
    width: ${18 / 16}rem;
    height: ${18 / 16}rem;
  }
`;
const IconButtonGroupMargin = (0,styled_components_browser_esm/* default */.ZP)((0,IconButton/* IconButtonGroup */.o))`
  margin-right: ${({ theme }) => `${theme.spaces[2]}`};
`;
const WysiwygStyles_ExpandButton = (0,styled_components_browser_esm/* default */.ZP)((0,BaseButton/* BaseButton */.Y))`
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    margin-left: ${({ theme }) => `${theme.spaces[2]}`};
    path {
      fill: ${({ theme }) => theme.colors.neutral700};
      width: ${12 / 16}rem;
      height: ${12 / 16}rem;
    }
  }
`;

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/WysiwygFooter.js






const WysiwygFooter = ({ onToggleExpand }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 2, background: "neutral100", hasRadius: true }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "flex-end", alignItems: "flex-end" }, /* @__PURE__ */ react.createElement(WysiwygStyles_ExpandButton, { id: "expand", onClick: onToggleExpand }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
    id: "components.WysiwygBottomControls.fullscreen",
    defaultMessage: "Expand"
  })), /* @__PURE__ */ react.createElement(Expand/* default */.Z, null))));
};
WysiwygFooter.defaultProps = {
  onToggleExpand() {
  }
};
WysiwygFooter.propTypes = {
  onToggleExpand: (prop_types_default()).func
};
/* harmony default export */ const Wysiwyg_WysiwygFooter = (WysiwygFooter);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/WysiwygNav.js







const WysiwygNav = ({
  disabled,
  editorRef,
  isExpandMode,
  isPreviewMode,
  onActionClick,
  onToggleMediaLib,
  onTogglePreviewMode
}) => {
  const [visiblePopover, setVisiblePopover] = (0,react.useState)(false);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const selectPlaceholder = formatMessage({
    id: "components.Wysiwyg.selectOptions.title",
    defaultMessage: "Add a title"
  });
  const buttonMoreRef = (0,react.useRef)();
  const handleTogglePopover = () => {
    setVisiblePopover((prev) => !prev);
  };
  if (disabled || isPreviewMode) {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { padding: 2, background: "neutral100", justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(StyledFlex, null, /* @__PURE__ */ react.createElement(Select/* Select */.P, { disabled: true, placeholder: selectPlaceholder, size: "S", label: selectPlaceholder }, /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "h1" }, "h1"), /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "h2" }, "h2"), /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "h3" }, "h3"), /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "h4" }, "h4"), /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "h5" }, "h5"), /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "h6" }, "h6")), /* @__PURE__ */ react.createElement(MainButtons, null, /* @__PURE__ */ react.createElement(WysiwygStyles_CustomIconButton, { disabled: true, label: "Bold", name: "Bold", icon: /* @__PURE__ */ react.createElement(Bold/* default */.Z, null) }), /* @__PURE__ */ react.createElement(WysiwygStyles_CustomIconButton, { disabled: true, label: "Italic", name: "Italic", icon: /* @__PURE__ */ react.createElement(Italic/* default */.Z, null) }), /* @__PURE__ */ react.createElement(WysiwygStyles_CustomIconButton, { disabled: true, label: "Underline", name: "Underline", icon: /* @__PURE__ */ react.createElement(Underline/* default */.Z, null) })), /* @__PURE__ */ react.createElement(MoreButton, { disabled: true, label: "More", icon: /* @__PURE__ */ react.createElement(More/* default */.Z, null) })), !isExpandMode && /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: onTogglePreviewMode, variant: "tertiary" }, formatMessage({
      id: "components.Wysiwyg.ToggleMode.markdown-mode",
      defaultMessage: "Markdown mode"
    })));
  }
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { padding: 2, background: "neutral100", justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(StyledFlex, null, /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      placeholder: selectPlaceholder,
      label: selectPlaceholder,
      size: "S",
      onChange: (value) => onActionClick(value, editorRef)
    },
    /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "h1" }, "h1"),
    /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "h2" }, "h2"),
    /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "h3" }, "h3"),
    /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "h4" }, "h4"),
    /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "h5" }, "h5"),
    /* @__PURE__ */ react.createElement(Option/* Option */.W, { value: "h6" }, "h6")
  ), /* @__PURE__ */ react.createElement(MainButtons, null, /* @__PURE__ */ react.createElement(
    WysiwygStyles_CustomIconButton,
    {
      onClick: () => onActionClick("Bold", editorRef),
      label: "Bold",
      name: "Bold",
      icon: /* @__PURE__ */ react.createElement(Bold/* default */.Z, null)
    }
  ), /* @__PURE__ */ react.createElement(
    WysiwygStyles_CustomIconButton,
    {
      onClick: () => onActionClick("Italic", editorRef),
      label: "Italic",
      name: "Italic",
      icon: /* @__PURE__ */ react.createElement(Italic/* default */.Z, null)
    }
  ), /* @__PURE__ */ react.createElement(
    WysiwygStyles_CustomIconButton,
    {
      onClick: () => onActionClick("Underline", editorRef),
      label: "Underline",
      name: "Underline",
      icon: /* @__PURE__ */ react.createElement(Underline/* default */.Z, null)
    }
  )), /* @__PURE__ */ react.createElement(
    MoreButton,
    {
      ref: buttonMoreRef,
      onClick: handleTogglePopover,
      label: "More",
      icon: /* @__PURE__ */ react.createElement(More/* default */.Z, null)
    }
  ), visiblePopover && /* @__PURE__ */ react.createElement(Popover/* Popover */.J2, { onDismiss: handleTogglePopover, centered: true, source: buttonMoreRef, spacing: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(IconButtonGroupMargin, null, /* @__PURE__ */ react.createElement(
    WysiwygStyles_CustomIconButton,
    {
      onClick: () => onActionClick("Strikethrough", editorRef, handleTogglePopover),
      label: "Strikethrough",
      name: "Strikethrough",
      icon: /* @__PURE__ */ react.createElement(StrikeThrough/* default */.Z, null)
    }
  ), /* @__PURE__ */ react.createElement(
    WysiwygStyles_CustomIconButton,
    {
      onClick: () => onActionClick("BulletList", editorRef, handleTogglePopover),
      label: "BulletList",
      name: "BulletList",
      icon: /* @__PURE__ */ react.createElement(BulletList/* default */.Z, null)
    }
  ), /* @__PURE__ */ react.createElement(
    WysiwygStyles_CustomIconButton,
    {
      onClick: () => onActionClick("NumberList", editorRef, handleTogglePopover),
      label: "NumberList",
      name: "NumberList",
      icon: /* @__PURE__ */ react.createElement(NumberList/* default */.Z, null)
    }
  )), /* @__PURE__ */ react.createElement(IconButton/* IconButtonGroup */.o, null, /* @__PURE__ */ react.createElement(
    WysiwygStyles_CustomIconButton,
    {
      onClick: () => onActionClick("Code", editorRef, handleTogglePopover),
      label: "Code",
      name: "Code",
      icon: /* @__PURE__ */ react.createElement(Code/* default */.Z, null)
    }
  ), /* @__PURE__ */ react.createElement(
    WysiwygStyles_CustomIconButton,
    {
      onClick: () => {
        handleTogglePopover();
        onToggleMediaLib();
      },
      label: "Image",
      name: "Image",
      icon: /* @__PURE__ */ react.createElement(Picture/* default */.Z, null)
    }
  ), /* @__PURE__ */ react.createElement(
    CustomLinkIconButton,
    {
      onClick: () => onActionClick("Link", editorRef, handleTogglePopover),
      label: "Link",
      name: "Link",
      icon: /* @__PURE__ */ react.createElement(Link/* default */.Z, null)
    }
  ), /* @__PURE__ */ react.createElement(
    WysiwygStyles_CustomIconButton,
    {
      onClick: () => onActionClick("Quote", editorRef, handleTogglePopover),
      label: "Quote",
      name: "Quote",
      icon: /* @__PURE__ */ react.createElement(Quote/* default */.Z, null)
    }
  ))))), onTogglePreviewMode && /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: onTogglePreviewMode, variant: "tertiary" }, formatMessage({
    id: "components.Wysiwyg.ToggleMode.preview-mode",
    defaultMessage: "Preview mode"
  })));
};
WysiwygNav.defaultProps = {
  isPreviewMode: false,
  onActionClick() {
  },
  onToggleMediaLib() {
  },
  onTogglePreviewMode: void 0
};
WysiwygNav.propTypes = {
  disabled: (prop_types_default()).bool.isRequired,
  editorRef: prop_types_default().shape({ current: (prop_types_default()).any }).isRequired,
  isExpandMode: (prop_types_default()).bool.isRequired,
  isPreviewMode: (prop_types_default()).bool,
  onActionClick: (prop_types_default()).func,
  onToggleMediaLib: (prop_types_default()).func,
  onTogglePreviewMode: (prop_types_default()).func
};
/* harmony default export */ const Wysiwyg_WysiwygNav = (WysiwygNav);
const StyledFlex = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/index.js












const Wysiwyg_LabelAction = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  svg path {
    fill: ${({ theme }) => theme.colors.neutral500};
  }
`;
const Wysiwyg_TypographyAsterisk = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z))`
  line-height: 0;
`;
const Wysiwyg_Wysiwyg = (0,react.forwardRef)(
  ({ hint, disabled, error, intlLabel, labelAction, name, onChange, placeholder, value, required }, forwardedRef) => {
    const { formatMessage } = (0,useIntl/* default */.Z)();
    const textareaRef = (0,react.useRef)(null);
    const editorRef = (0,react.useRef)(null);
    const [isPreviewMode, setIsPreviewMode] = (0,react.useState)(false);
    const [mediaLibVisible, setMediaLibVisible] = (0,react.useState)(false);
    const [isExpandMode, setIsExpandMode] = (0,react.useState)(false);
    const { components } = (0,dist/* useLibrary */.yX)();
    const MediaLibraryDialog = components["media-library"];
    const handleToggleMediaLib = () => setMediaLibVisible((prev) => !prev);
    const handleTogglePreviewMode = () => setIsPreviewMode((prev) => !prev);
    const handleToggleExpand = () => {
      setIsPreviewMode(false);
      setIsExpandMode((prev) => !prev);
    };
    const handleActionClick = (value2, currentEditorRef, togglePopover) => {
      switch (value2) {
        case "Link":
        case "Strikethrough": {
          markdownHandler(currentEditorRef, value2);
          togglePopover();
          break;
        }
        case "Code":
        case "Quote": {
          quoteAndCodeHandler(currentEditorRef, value2);
          togglePopover();
          break;
        }
        case "Bold":
        case "Italic":
        case "Underline": {
          markdownHandler(currentEditorRef, value2);
          break;
        }
        case "BulletList":
        case "NumberList": {
          listHandler(currentEditorRef, value2);
          togglePopover();
          break;
        }
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6": {
          titleHandler(currentEditorRef, value2);
          break;
        }
        default: {
        }
      }
    };
    const handleSelectAssets = (files) => {
      const formattedFiles = files.map((f) => ({
        alt: f.alternativeText || f.name,
        url: (0,dist/* prefixFileUrlWithBackendUrl */.CR)(f.url),
        mime: f.mime
      }));
      insertFile(editorRef, formattedFiles);
      setMediaLibVisible(false);
    };
    const formattedPlaceholder = placeholder ? formatMessage(
      { id: placeholder.id, defaultMessage: placeholder.defaultMessage },
      { ...placeholder.values }
    ) : "";
    const label = intlLabel.id ? formatMessage(
      { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
      { ...intlLabel.values }
    ) : name;
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 1 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold", textColor: "neutral800" }, label, required && /* @__PURE__ */ react.createElement(Wysiwyg_TypographyAsterisk, { textColor: "danger600" }, "*")), labelAction && /* @__PURE__ */ react.createElement(Wysiwyg_LabelAction, { paddingLeft: 1 }, labelAction)), /* @__PURE__ */ react.createElement(
      EditorLayout,
      {
        isExpandMode,
        error,
        previewContent: value,
        onCollapse: handleToggleExpand
      },
      /* @__PURE__ */ react.createElement(
        Wysiwyg_WysiwygNav,
        {
          isExpandMode,
          editorRef,
          isPreviewMode,
          onActionClick: handleActionClick,
          onToggleMediaLib: handleToggleMediaLib,
          onTogglePreviewMode: isExpandMode ? void 0 : handleTogglePreviewMode,
          disabled
        }
      ),
      /* @__PURE__ */ react.createElement(
        Wysiwyg_Editor,
        {
          disabled,
          isExpandMode,
          editorRef,
          error,
          isPreviewMode,
          name,
          onChange,
          placeholder: formattedPlaceholder,
          textareaRef,
          value,
          ref: forwardedRef
        }
      ),
      !isExpandMode && /* @__PURE__ */ react.createElement(Wysiwyg_WysiwygFooter, { onToggleExpand: handleToggleExpand })
    ), /* @__PURE__ */ react.createElement(components_Hint, { hint, name, error })), error && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 1 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "danger600", "data-strapi-field-error": true }, error)), mediaLibVisible && /* @__PURE__ */ react.createElement(MediaLibraryDialog, { onClose: handleToggleMediaLib, onSelectAssets: handleSelectAssets }));
  }
);
Wysiwyg_Wysiwyg.defaultProps = {
  disabled: false,
  error: "",
  labelAction: void 0,
  placeholder: null,
  required: false,
  value: "",
  hint: ""
};
Wysiwyg_Wysiwyg.propTypes = {
  hint: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).array]),
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
  required: (prop_types_default()).bool,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_Wysiwyg = (Wysiwyg_Wysiwyg);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/utils/connect.js

function connect_connect(WrappedComponent, select) {
  return (props) => {
    const selectors = select(props.keys);
    return /* @__PURE__ */ react.createElement(WrappedComponent, { ...props, ...selectors });
  };
}
/* harmony default export */ const Inputs_utils_connect = (connect_connect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/utils/generateOptions.js
const generateOptions = (options, isRequired = false) => {
  return [
    {
      metadatas: {
        intlLabel: {
          id: "components.InputSelect.option.placeholder",
          defaultMessage: "Choose here"
        },
        disabled: isRequired,
        hidden: isRequired
      },
      key: "__enum_option_null",
      value: ""
    },
    ...options.map((option) => {
      return {
        metadatas: {
          intlLabel: {
            id: option,
            defaultMessage: option
          },
          hidden: false,
          disabled: false
        },
        key: option,
        value: option
      };
    })
  ];
};
/* harmony default export */ const utils_generateOptions = (generateOptions);

// EXTERNAL MODULE: ./node_modules/lodash/toLower.js
var toLower = __webpack_require__(79146);
var toLower_default = /*#__PURE__*/__webpack_require__.n(toLower);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/utils/getInputType.js

const getInputType = (type = "") => {
  switch (toLower_default()(type)) {
    case "blocks":
      return "blocks";
    case "boolean":
      return "bool";
    case "biginteger":
      return "text";
    case "decimal":
    case "float":
    case "integer":
      return "number";
    case "date":
    case "datetime":
    case "time":
      return type;
    case "email":
      return "email";
    case "enumeration":
      return "select";
    case "password":
      return "password";
    case "string":
      return "text";
    case "text":
      return "textarea";
    case "media":
    case "file":
    case "files":
      return "media";
    case "json":
      return "json";
    case "wysiwyg":
    case "WYSIWYG":
    case "richtext":
      return "wysiwyg";
    case "uid":
      return "uid";
    default:
      return type || "text";
  }
};
/* harmony default export */ const utils_getInputType = (getInputType);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/utils/select.js



function select_useSelect(keys) {
  const {
    createActionAllowedFields,
    formErrors,
    isCreatingEntry,
    modifiedData,
    onChange,
    readActionAllowedFields,
    shouldNotRunValidations,
    updateActionAllowedFields
  } = (0,dist/* useCMEditViewDataManager */.Wq)();
  const allowedFields = (0,react.useMemo)(() => {
    return isCreatingEntry ? createActionAllowedFields : updateActionAllowedFields;
  }, [isCreatingEntry, createActionAllowedFields, updateActionAllowedFields]);
  const readableFields = (0,react.useMemo)(() => {
    return isCreatingEntry ? [] : readActionAllowedFields;
  }, [isCreatingEntry, readActionAllowedFields]);
  const value = get_default()(modifiedData, keys, null);
  return {
    allowedFields,
    formErrors,
    isCreatingEntry,
    onChange,
    readableFields,
    shouldNotRunValidations,
    value
  };
}
/* harmony default export */ const Inputs_utils_select = (select_useSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/utils/VALIDATIONS_TO_OMIT.js
const validationsToOmit = [
  "type",
  "model",
  "via",
  "collection",
  "default",
  "plugin",
  "enum",
  "regex",
  "pluginOptions"
];
/* harmony default export */ const VALIDATIONS_TO_OMIT = (validationsToOmit);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/utils/index.js






;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/index.js















function Inputs({
  allowedFields,
  componentUid,
  fieldSchema,
  formErrors,
  isCreatingEntry,
  keys,
  labelAction,
  metadatas,
  onChange,
  readableFields,
  shouldNotRunValidations,
  queryInfos,
  value,
  size,
  customFieldInputs
}) {
  const { fields } = (0,dist/* useLibrary */.yX)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { contentType: currentContentTypeLayout } = (0,hooks/* useContentTypeLayout */.PL)();
  const disabled = (0,react.useMemo)(() => !get_default()(metadatas, "editable", true), [metadatas]);
  const { type, customField: customFieldUid } = fieldSchema;
  const error = get_default()(formErrors, [keys], null);
  const fieldName = (0,react.useMemo)(() => {
    return (0,utils/* getFieldName */.Ts)(keys);
  }, [keys]);
  const validations = (0,react.useMemo)(() => {
    const inputValidations = omit_default()(
      fieldSchema,
      shouldNotRunValidations ? [...VALIDATIONS_TO_OMIT, "required", "minLength"] : VALIDATIONS_TO_OMIT
    );
    const regexpString = fieldSchema.regex || null;
    if (regexpString) {
      const regexp = new RegExp(regexpString);
      if (regexp) {
        inputValidations.regex = regexp;
      }
    }
    return inputValidations;
  }, [fieldSchema, shouldNotRunValidations]);
  const isRequired = (0,react.useMemo)(() => get_default()(validations, ["required"], false), [validations]);
  const isChildOfDynamicZone = (0,react.useMemo)(() => {
    const attributes = get_default()(currentContentTypeLayout, ["attributes"], {});
    const foundAttributeType = get_default()(attributes, [fieldName[0], "type"], null);
    return foundAttributeType === "dynamiczone";
  }, [currentContentTypeLayout, fieldName]);
  const inputType = utils_getInputType(type);
  const inputValue = type === "media" && !value ? [] : value;
  const isUserAllowedToEditField = (0,react.useMemo)(() => {
    const joinedName = fieldName.join(".");
    if (allowedFields.includes(joinedName)) {
      return true;
    }
    if (isChildOfDynamicZone) {
      return allowedFields.includes(fieldName[0]);
    }
    const isChildOfComponent = fieldName.length > 1;
    if (isChildOfComponent) {
      const parentFieldName = take_default()(fieldName, fieldName.length - 1).join(".");
      return allowedFields.includes(parentFieldName);
    }
    return false;
  }, [allowedFields, fieldName, isChildOfDynamicZone]);
  const isUserAllowedToReadField = (0,react.useMemo)(() => {
    const joinedName = fieldName.join(".");
    if (readableFields.includes(joinedName)) {
      return true;
    }
    if (isChildOfDynamicZone) {
      return readableFields.includes(fieldName[0]);
    }
    const isChildOfComponent = fieldName.length > 1;
    if (isChildOfComponent) {
      const parentFieldName = take_default()(fieldName, fieldName.length - 1).join(".");
      return readableFields.includes(parentFieldName);
    }
    return false;
  }, [readableFields, fieldName, isChildOfDynamicZone]);
  const shouldDisplayNotAllowedInput = (0,react.useMemo)(() => {
    return isUserAllowedToReadField || isUserAllowedToEditField;
  }, [isUserAllowedToEditField, isUserAllowedToReadField]);
  const shouldDisableField = (0,react.useMemo)(() => {
    if (!isCreatingEntry) {
      const doesNotHaveRight = isUserAllowedToReadField && !isUserAllowedToEditField;
      if (doesNotHaveRight) {
        return true;
      }
      return disabled;
    }
    return disabled;
  }, [disabled, isCreatingEntry, isUserAllowedToEditField, isUserAllowedToReadField]);
  const options = (0,react.useMemo)(
    () => utils_generateOptions(fieldSchema.enum || [], isRequired),
    [fieldSchema, isRequired]
  );
  const { label, description, placeholder, visible } = metadatas;
  if (visible === false) {
    return null;
  }
  if (!shouldDisplayNotAllowedInput) {
    return /* @__PURE__ */ react.createElement(
      dist/* NotAllowedInput */.X0,
      {
        description: description ? { id: description, defaultMessage: description } : null,
        intlLabel: { id: label, defaultMessage: label },
        labelAction,
        error: error && formatMessage(error),
        name: keys,
        required: isRequired
      }
    );
  }
  if (type === "relation") {
    return /* @__PURE__ */ react.createElement(
      RelationInputDataManager_RelationInputDataManager,
      {
        ...metadatas,
        ...fieldSchema,
        componentUid,
        description: metadatas.description ? formatMessage({
          id: metadatas.description,
          defaultMessage: metadatas.description
        }) : void 0,
        intlLabel: {
          id: metadatas.label,
          defaultMessage: metadatas.label
        },
        labelAction,
        isUserAllowedToEditField,
        isUserAllowedToReadField,
        name: keys,
        placeholder: metadatas.placeholder ? {
          id: metadatas.placeholder,
          defaultMessage: metadatas.placeholder
        } : null,
        queryInfos,
        size,
        value,
        error: error && formatMessage(error)
      }
    );
  }
  const customInputs = {
    uid: InputUID,
    media: fields.media,
    wysiwyg: components_Wysiwyg,
    blocks: components_BlocksEditor,
    ...fields,
    ...customFieldInputs
  };
  return /* @__PURE__ */ react.createElement(
    dist/* GenericInput */.jm,
    {
      attribute: fieldSchema,
      autoComplete: "new-password",
      intlLabel: { id: label, defaultMessage: label },
      isNullable: inputType === "bool" && [null, void 0].includes(fieldSchema.default),
      description: description ? { id: description, defaultMessage: description } : null,
      disabled: shouldDisableField,
      error,
      labelAction,
      contentTypeUID: currentContentTypeLayout.uid,
      customInputs,
      multiple: fieldSchema.multiple || false,
      name: keys,
      onChange,
      options,
      placeholder: placeholder ? { id: placeholder, defaultMessage: placeholder } : null,
      required: fieldSchema.required || false,
      step: getStep(type),
      type: customFieldUid || inputType,
      value: inputValue,
      withDefaultValue: false
    }
  );
}
Inputs.defaultProps = {
  componentUid: void 0,
  formErrors: {},
  labelAction: void 0,
  size: void 0,
  value: null,
  queryInfos: {},
  customFieldInputs: {}
};
Inputs.propTypes = {
  allowedFields: (prop_types_default()).array.isRequired,
  componentUid: (prop_types_default()).string,
  fieldSchema: (prop_types_default()).object.isRequired,
  formErrors: (prop_types_default()).object,
  keys: (prop_types_default()).string.isRequired,
  isCreatingEntry: (prop_types_default()).bool.isRequired,
  labelAction: (prop_types_default()).element,
  metadatas: (prop_types_default()).object.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  readableFields: (prop_types_default()).array.isRequired,
  size: (prop_types_default()).number,
  shouldNotRunValidations: (prop_types_default()).bool.isRequired,
  value: (prop_types_default()).any,
  queryInfos: prop_types_default().shape({
    containsKey: (prop_types_default()).string,
    defaultParams: (prop_types_default()).object,
    endPoint: (prop_types_default()).string
  }),
  customFieldInputs: (prop_types_default()).object
};
const getStep = (type) => {
  switch (type) {
    case "float":
    case "decimal":
      return 0.01;
    default:
      return 1;
  }
};
const Inputs_Memoized = (0,react.memo)(Inputs, (isEqual_default()));
/* harmony default export */ const components_Inputs = (Inputs_utils_connect(Inputs_Memoized, Inputs_utils_select));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/NonRepeatableComponent/index.js







const NonRepeatableComponent = ({ componentUid, isFromDynamicZone, isNested, name }) => {
  const { getComponentLayout } = (0,hooks/* useContentTypeLayout */.PL)();
  const componentLayoutData = (0,react.useMemo)(
    () => getComponentLayout(componentUid),
    [componentUid, getComponentLayout]
  );
  const fields = componentLayoutData.layouts.edit;
  const { lazyComponentStore } = hooks_useLazyComponents();
  return /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      background: isFromDynamicZone ? "" : "neutral100",
      paddingLeft: 6,
      paddingRight: 6,
      paddingTop: 6,
      paddingBottom: 6,
      hasRadius: isNested,
      borderColor: isNested ? "neutral200" : ""
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 6 }, fields.map((fieldRow, key) => {
      return /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4, key }, fieldRow.map(({ name: fieldName, size, metadatas, fieldSchema, queryInfos }) => {
        const isComponent = fieldSchema.type === "component";
        const keys = `${name}.${fieldName}`;
        if (isComponent) {
          const compoUid = fieldSchema.component;
          return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: size, s: 12, xs: 12, key: fieldName }, /* @__PURE__ */ react.createElement(
            components_FieldComponent,
            {
              componentUid: compoUid,
              intlLabel: {
                id: metadatas.label,
                defaultMessage: metadatas.label
              },
              isNested: true,
              isRepeatable: fieldSchema.repeatable,
              max: fieldSchema.max,
              min: fieldSchema.min,
              name: keys,
              required: fieldSchema.required || false
            }
          ));
        }
        return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: size, key: fieldName, s: 12, xs: 12 }, /* @__PURE__ */ react.createElement(
          components_Inputs,
          {
            componentUid,
            keys,
            fieldSchema,
            metadatas,
            queryInfos,
            size,
            customFieldInputs: lazyComponentStore
          }
        ));
      }));
    }))
  );
};
NonRepeatableComponent.defaultProps = {
  isFromDynamicZone: false,
  isNested: false
};
NonRepeatableComponent.propTypes = {
  componentUid: (prop_types_default()).string.isRequired,
  isFromDynamicZone: (prop_types_default()).bool,
  isNested: (prop_types_default()).bool,
  name: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_NonRepeatableComponent = (NonRepeatableComponent);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/components/Accordion.js





const Footer = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-right: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-left: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: 0 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius};
`;
const Content = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  border-bottom: none;

  /* add the borders and make sure the top is transparent to avoid jumping with the hover effect  */
  & > div > div {
    border: 1px solid ${({ theme }) => theme.colors.neutral200};
    border-top-color: transparent;
  }

  /* the top accordion _does_ need a border though */
  & > div:first-child > div {
    border-top: 1px solid ${({ theme }) => theme.colors.neutral200};
  }

  /* Reset all the border-radius' */
  & > div > div,
  & > div > div > div {
    border-radius: unset;
  }

  /* Give the border radius back to the first accordion */
  & > div:first-child > div,
  & > div:first-child > div > div {
    border-radius: ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius} 0 0;
  }

  & > div > div[data-strapi-expanded='true'] {
    border: 1px solid ${({ theme }) => theme.colors.primary600};
  }
`;
const Group = ({ children, error }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(KeyboardNavigable/* KeyboardNavigable */.k, { attributeName: "data-strapi-accordion-toggle" }, children, error && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 1 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "danger600" }, formatMessage(
    { id: error.id, defaultMessage: error.defaultMessage },
    { ...error.values }
  ))));
};
Group.defaultProps = {
  error: void 0
};
Group.propTypes = {
  children: (prop_types_default()).node.isRequired,
  error: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  })
};

// EXTERNAL MODULE: ./node_modules/lodash/toString.js
var lodash_toString = __webpack_require__(16946);
var toString_default = /*#__PURE__*/__webpack_require__.n(lodash_toString);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/components/Preview.js


const StyledSpan = styled_components_browser_esm/* default */.ZP.span`
  display: block;
  background-color: ${({ theme }) => theme.colors.primary100};
  outline: 1px dashed ${({ theme }) => theme.colors.primary500};
  outline-offset: -1px;
  padding: ${({ theme }) => theme.spaces[6]};
`;
const Preview = () => {
  return /* @__PURE__ */ react.createElement(StyledSpan, { padding: 6, background: "primary100" });
};
/* harmony default export */ const components_Preview = (Preview);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/components/Component.js
















const Component_CustomIconButton = (0,styled_components_browser_esm/* default */.ZP)((0,IconButton/* IconButton */.h))`
  background-color: transparent;

  svg {
    path {
      fill: ${({ theme, expanded }) => expanded ? theme.colors.primary600 : theme.colors.neutral600};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${({ theme }) => theme.colors.primary600};
      }
    }
  }
`;
const ActionsFlex = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  & .drag-handle {
    background: unset;

    svg {
      path {
        fill: ${({ theme, expanded }) => expanded ? theme.colors.primary600 : void 0};
      }
    }

    &:hover {
      svg {
        path {
          /* keeps the hover style of the accordion */
          fill: ${({ theme }) => theme.colors.primary600};
        }
      }
    }
  }
`;
const DraggedItem = ({
  componentFieldName,
  componentUid,
  fields,
  index,
  isOpen,
  isReadOnly,
  mainField,
  moveComponentField,
  onClickToggle,
  toggleCollapses,
  onGrabItem,
  onDropItem,
  onCancel
}) => {
  const { modifiedData, removeRepeatableField, triggerFormValidation } = (0,dist/* useCMEditViewDataManager */.Wq)();
  const displayedValue = toString_default()(
    get_default()(modifiedData, [...componentFieldName.split("."), mainField], "")
  );
  const accordionRef = (0,react.useRef)(null);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const componentKey = componentFieldName.split(".").slice(0, -1).join(".");
  const [{ handlerId, isDragging, handleKeyDown }, boxRef, dropRef, dragRef, dragPreviewRef] = (0,useDragAndDrop/* useDragAndDrop */.Y)(!isReadOnly, {
    type: `${utils/* ItemTypes */._Q.COMPONENT}_${componentKey}`,
    index,
    item: {
      displayedValue
    },
    onMoveItem: moveComponentField,
    onStart() {
      toggleCollapses();
    },
    onEnd() {
      triggerFormValidation();
    },
    onGrabItem,
    onDropItem,
    onCancel
  });
  (0,react.useEffect)(() => {
    dragPreviewRef((0,dist_cjs/* getEmptyImage */.rX)(), { captureDraggingState: false });
  }, [dragPreviewRef, index]);
  const composedAccordionRefs = (0,utils/* composeRefs */.FE)(accordionRef, dragRef);
  const composedBoxRefs = (0,utils/* composeRefs */.FE)(boxRef, dropRef);
  const { lazyComponentStore } = hooks_useLazyComponents();
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { ref: composedBoxRefs }, isDragging ? /* @__PURE__ */ react.createElement(components_Preview, null) : /* @__PURE__ */ react.createElement(Accordion/* Accordion */.U, { expanded: isOpen, onToggle: onClickToggle, id: componentFieldName, size: "S" }, /* @__PURE__ */ react.createElement(
    AccordionToggle/* AccordionToggle */.B,
    {
      action: isReadOnly ? null : /* @__PURE__ */ react.createElement(ActionsFlex, { gap: 0, expanded: isOpen }, /* @__PURE__ */ react.createElement(
        Component_CustomIconButton,
        {
          expanded: isOpen,
          noBorder: true,
          onClick: () => {
            removeRepeatableField(componentFieldName);
            toggleCollapses();
          },
          label: formatMessage({
            id: (0,utils/* getTrad */.OB)("containers.Edit.delete"),
            defaultMessage: "Delete"
          }),
          icon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null)
        }
      ), /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          className: "drag-handle",
          ref: composedAccordionRefs,
          forwardedAs: "div",
          role: "button",
          noBorder: true,
          tabIndex: 0,
          onClick: (e) => e.stopPropagation(),
          "data-handler-id": handlerId,
          label: formatMessage({
            id: (0,utils/* getTrad */.OB)("components.DragHandle-label"),
            defaultMessage: "Drag"
          }),
          onKeyDown: handleKeyDown
        },
        /* @__PURE__ */ react.createElement(Drag/* default */.Z, null)
      )),
      title: displayedValue,
      togglePosition: "left"
    }
  ), /* @__PURE__ */ react.createElement(AccordionContent/* AccordionContent */.v, null, /* @__PURE__ */ react.createElement(
    Flex/* Flex */.k,
    {
      direction: "column",
      alignItems: "stretch",
      background: "neutral100",
      padding: 6,
      gap: 6
    },
    fields.map((fieldRow, key) => {
      return (
        // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4, key }, fieldRow.map(({ name, fieldSchema, metadatas, queryInfos, size }) => {
          const isComponent = fieldSchema.type === "component";
          const keys = `${componentFieldName}.${name}`;
          if (isComponent) {
            const componentUid2 = fieldSchema.component;
            return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: size, s: 12, xs: 12, key: name }, /* @__PURE__ */ react.createElement(
              components_FieldComponent,
              {
                componentUid: componentUid2,
                intlLabel: {
                  id: metadatas.label,
                  defaultMessage: metadatas.label
                },
                isRepeatable: fieldSchema.repeatable,
                isNested: true,
                name: keys,
                max: fieldSchema.max,
                min: fieldSchema.min,
                required: fieldSchema.required
              }
            ));
          }
          return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { key: keys, col: size, s: 12, xs: 12 }, /* @__PURE__ */ react.createElement(
            components_Inputs,
            {
              componentUid,
              fieldSchema,
              keys,
              metadatas,
              queryInfos,
              size,
              customFieldInputs: lazyComponentStore
            }
          ));
        }))
      );
    })
  ))));
};
DraggedItem.defaultProps = {
  componentUid: void 0,
  fields: [],
  isReadOnly: false,
  isOpen: false,
  onGrabItem: void 0,
  onDropItem: void 0,
  onCancel: void 0,
  toggleCollapses() {
  }
};
DraggedItem.propTypes = {
  componentFieldName: (prop_types_default()).string.isRequired,
  componentUid: (prop_types_default()).string,
  fields: (prop_types_default()).array,
  index: (prop_types_default()).number.isRequired,
  isOpen: (prop_types_default()).bool,
  isReadOnly: (prop_types_default()).bool,
  mainField: (prop_types_default()).string.isRequired,
  moveComponentField: (prop_types_default()).func.isRequired,
  onGrabItem: (prop_types_default()).func,
  onDropItem: (prop_types_default()).func,
  onCancel: (prop_types_default()).func,
  onClickToggle: (prop_types_default()).func.isRequired,
  toggleCollapses: (prop_types_default()).func
};
/* harmony default export */ const components_Component = ((0,react.memo)(DraggedItem));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/utils/getComponentErrorKeys.js
function getComponentErrorKeys(name, formErrors = {}) {
  return Object.keys(formErrors).filter((errorKey) => errorKey.startsWith(name)).map(
    (errorKey) => errorKey.split(".").slice(0, name.split(".").length + 1).join(".")
  );
}

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/index.js














const TextButtonCustom = (0,styled_components_browser_esm/* default */.ZP)((0,TextButton/* TextButton */.A))`
  height: 100%;
  width: 100%;
  border-radius: 0 0 4px 4px;
  display: flex;
  justify-content: center;
  span {
    font-weight: 600;
    font-size: 14px;
  }
`;
const RepeatableComponent = ({
  componentUid,
  componentValue,
  componentValueLength,
  isReadOnly,
  max,
  min,
  name
}) => {
  const { addRepeatableComponentToField, formErrors, moveComponentField } = (0,dist/* useCMEditViewDataManager */.Wq)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [collapseToOpen, setCollapseToOpen] = (0,react.useState)("");
  const [liveText, setLiveText] = (0,react.useState)("");
  const { getComponentLayout, components } = (0,hooks/* useContentTypeLayout */.PL)();
  const componentLayoutData = (0,react.useMemo)(
    () => getComponentLayout(componentUid),
    [componentUid, getComponentLayout]
  );
  const search = (0,dist/* useQuery */.aM)();
  const componentTmpKeyWithFocussedField = (0,react.useMemo)(() => {
    if (search.has("field")) {
      const field = search.get("field");
      const [, path] = field.split(`${name}.`);
      if (get_default()(componentValue, path, void 0) !== void 0) {
        const subpaths = path.split(".");
        return get_default()(componentValue, subpaths[0], void 0)?.__temp_key__;
      }
    }
    return void 0;
  }, [componentValue, search, name]);
  (0,react.useEffect)(() => {
    if (typeof componentTmpKeyWithFocussedField === "number") {
      setCollapseToOpen(componentTmpKeyWithFocussedField);
    }
  }, [componentTmpKeyWithFocussedField]);
  const nextTempKey = (0,react.useMemo)(() => (0,utils/* getMaxTempKey */.Uo)(componentValue || []) + 1, [componentValue]);
  const componentErrorKeys = getComponentErrorKeys(name, formErrors);
  const missingComponentsValue = min - componentValueLength;
  const hasMinError = get_default()(formErrors, name, { id: "" }).id.includes("min");
  const toggleCollapses = () => {
    setCollapseToOpen("");
  };
  const handleClick = () => {
    if (!isReadOnly) {
      if (componentValueLength < max) {
        const shouldCheckErrors = hasMinError;
        addRepeatableComponentToField(name, componentLayoutData, components, shouldCheckErrors);
        setCollapseToOpen(nextTempKey);
      } else if (componentValueLength >= max) {
        toggleNotification({
          type: "info",
          message: { id: (0,utils/* getTrad */.OB)("components.notification.info.maximum-requirement") }
        });
      }
    }
  };
  const handleMoveComponentField = (newIndex, currentIndex) => {
    setLiveText(
      formatMessage(
        {
          id: (0,utils/* getTrad */.OB)("dnd.reorder"),
          defaultMessage: "{item}, moved. New position in list: {position}."
        },
        {
          item: `${name}.${currentIndex}`,
          position: getItemPos(newIndex)
        }
      )
    );
    moveComponentField({
      name,
      newIndex,
      currentIndex
    });
  };
  const mainField = get_default()(componentLayoutData, ["settings", "mainField"], "id");
  const handleToggle = (key) => () => {
    if (collapseToOpen === key) {
      setCollapseToOpen("");
    } else {
      setCollapseToOpen(key);
    }
  };
  const getItemPos = (index) => `${index + 1} of ${componentValueLength}`;
  const handleCancel = (index) => {
    setLiveText(
      formatMessage(
        {
          id: (0,utils/* getTrad */.OB)("dnd.cancel-item"),
          defaultMessage: "{item}, dropped. Re-order cancelled."
        },
        {
          item: `${name}.${index}`
        }
      )
    );
  };
  const handleGrabItem = (index) => {
    setLiveText(
      formatMessage(
        {
          id: (0,utils/* getTrad */.OB)("dnd.grab-item"),
          defaultMessage: `{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel.`
        },
        {
          item: `${name}.${index}`,
          position: getItemPos(index)
        }
      )
    );
  };
  const handleDropItem = (index) => {
    setLiveText(
      formatMessage(
        {
          id: (0,utils/* getTrad */.OB)("dnd.drop-item"),
          defaultMessage: `{item}, dropped. Final position in list: {position}.`
        },
        {
          item: `${name}.${index}`,
          position: getItemPos(index)
        }
      )
    );
  };
  let errorMessage = formErrors[name];
  if (hasMinError) {
    errorMessage = {
      id: (0,utils/* getTrad */.OB)("components.DynamicZone.missing-components"),
      defaultMessage: "There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}",
      values: { number: missingComponentsValue }
    };
  } else if (componentErrorKeys.some((error) => error.split(".").length > 1) && !hasMinError) {
    errorMessage = {
      id: (0,utils/* getTrad */.OB)("components.RepeatableComponent.error-message"),
      defaultMessage: "The component(s) contain error(s)"
    };
  }
  if (componentValueLength === 0) {
    return /* @__PURE__ */ react.createElement(components_ComponentInitializer, { error: errorMessage, isReadOnly, onClick: handleClick });
  }
  const ariaDescriptionId = `${name}-item-instructions`;
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { hasRadius: true }, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, { id: ariaDescriptionId }, formatMessage({
    id: (0,utils/* getTrad */.OB)("dnd.instructions"),
    defaultMessage: `Press spacebar to grab and re-order`
  })), /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, { "aria-live": "assertive" }, liveText), /* @__PURE__ */ react.createElement(Group, { error: errorMessage, ariaDescribedBy: ariaDescriptionId }, /* @__PURE__ */ react.createElement(Content, { "aria-describedby": ariaDescriptionId }, componentValue.map(({ __temp_key__: key }, index) => /* @__PURE__ */ react.createElement(
    components_Component,
    {
      componentFieldName: `${name}.${index}`,
      componentUid,
      fields: componentLayoutData.layouts.edit,
      key,
      index,
      isOpen: collapseToOpen === key,
      isReadOnly,
      mainField,
      moveComponentField: handleMoveComponentField,
      onClickToggle: handleToggle(key),
      toggleCollapses,
      onCancel: handleCancel,
      onDropItem: handleDropItem,
      onGrabItem: handleGrabItem
    }
  ))), /* @__PURE__ */ react.createElement(Footer, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center", height: "48px", background: "neutral0" }, /* @__PURE__ */ react.createElement(TextButtonCustom, { disabled: isReadOnly, onClick: handleClick, startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null) }, formatMessage({
    id: (0,utils/* getTrad */.OB)("containers.EditView.add.new-entry"),
    defaultMessage: "Add an entry"
  }))))));
};
RepeatableComponent.defaultProps = {
  componentValue: null,
  componentValueLength: 0,
  isReadOnly: false,
  max: Infinity,
  min: 0
};
RepeatableComponent.propTypes = {
  componentUid: (prop_types_default()).string.isRequired,
  componentValue: prop_types_default().oneOfType([(prop_types_default()).array, (prop_types_default()).object]),
  componentValueLength: (prop_types_default()).number,
  isReadOnly: (prop_types_default()).bool,
  max: (prop_types_default()).number,
  min: (prop_types_default()).number,
  name: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_RepeatableComponent = ((0,react.memo)(RepeatableComponent));


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/FieldComponent/Label.js





const Label_LabelAction = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  svg path {
    fill: ${({ theme }) => theme.colors.neutral500};
  }
`;
const Label = ({
  intlLabel,
  id,
  labelAction,
  name,
  numberOfEntries,
  showNumberOfEntries,
  required
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const label = intlLabel?.id ? formatMessage(intlLabel) : name;
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 1 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(
    Typography/* Typography */.Z,
    {
      textColor: "neutral800",
      htmlFor: id || name,
      variant: "pi",
      fontWeight: "bold",
      as: "label"
    },
    label,
    showNumberOfEntries && /* @__PURE__ */ react.createElement(react.Fragment, null, "\xA0(", numberOfEntries, ")"),
    required && /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "danger600" }, "*")
  ), labelAction && /* @__PURE__ */ react.createElement(Label_LabelAction, { paddingLeft: 1 }, labelAction)));
};
Label.defaultProps = {
  id: void 0,
  labelAction: void 0,
  numberOfEntries: 0,
  required: false,
  showNumberOfEntries: false
};
Label.propTypes = {
  id: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  labelAction: (prop_types_default()).element,
  name: (prop_types_default()).string.isRequired,
  numberOfEntries: (prop_types_default()).number,
  required: (prop_types_default()).bool,
  showNumberOfEntries: (prop_types_default()).bool
};
/* harmony default export */ const FieldComponent_Label = (Label);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/FieldComponent/utils/connect.js

function utils_connect_connect(WrappedComponent, select) {
  return (props) => {
    const selectors = select(props);
    return /* @__PURE__ */ react.createElement(WrappedComponent, { ...props, ...selectors });
  };
}
/* harmony default export */ const FieldComponent_utils_connect = (utils_connect_connect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/FieldComponent/utils/select.js






function utils_select_useSelect({ isFromDynamicZone, name }) {
  const {
    addNonRepeatableComponentToField,
    createActionAllowedFields,
    isCreatingEntry,
    modifiedData,
    removeComponentFromField,
    readActionAllowedFields,
    updateActionAllowedFields,
    formErrors
  } = (0,dist/* useCMEditViewDataManager */.Wq)();
  const { contentType } = (0,hooks/* useContentTypeLayout */.PL)();
  const allDynamicZoneFields = (0,react.useMemo)(() => {
    const attributes = get_default()(contentType, ["attributes"], {});
    const dynamicZoneFields = Object.keys(attributes).filter((attrName) => {
      return get_default()(attributes, [attrName, "type"], "") === "dynamiczone";
    });
    return dynamicZoneFields;
  }, [contentType]);
  const allowedFields = (0,react.useMemo)(() => {
    return isCreatingEntry ? createActionAllowedFields : updateActionAllowedFields;
  }, [isCreatingEntry, createActionAllowedFields, updateActionAllowedFields]);
  const componentValue = get_default()(modifiedData, name, null);
  const compoName = (0,react.useMemo)(() => {
    return (0,utils/* getFieldName */.Ts)(name);
  }, [name]);
  const hasChildrenAllowedFields = (0,react.useMemo)(() => {
    if (isFromDynamicZone && isCreatingEntry) {
      return true;
    }
    const includedDynamicZoneFields = allowedFields.filter((name2) => name2 === compoName[0]);
    if (includedDynamicZoneFields.length > 0) {
      return true;
    }
    const relatedChildrenAllowedFields = allowedFields.map((fieldName) => {
      return fieldName.split(".");
    }).filter((fieldName) => {
      if (fieldName.length < compoName.length) {
        return false;
      }
      const joined = take_default()(fieldName, compoName.length).join(".");
      return joined === compoName.join(".");
    });
    return relatedChildrenAllowedFields.length > 0;
  }, [isFromDynamicZone, isCreatingEntry, allowedFields, compoName]);
  const hasChildrenReadableFields = (0,react.useMemo)(() => {
    if (isFromDynamicZone) {
      return true;
    }
    if (allDynamicZoneFields.includes(compoName[0])) {
      return true;
    }
    const allowedFields2 = isCreatingEntry ? [] : readActionAllowedFields;
    const relatedChildrenAllowedFields = allowedFields2.map((fieldName) => {
      return fieldName.split(".");
    }).filter((fieldName) => {
      if (fieldName.length < compoName.length) {
        return false;
      }
      const joined = take_default()(fieldName, compoName.length).join(".");
      return joined === compoName.join(".");
    });
    return relatedChildrenAllowedFields.length > 0;
  }, [
    isFromDynamicZone,
    allDynamicZoneFields,
    compoName,
    isCreatingEntry,
    readActionAllowedFields
  ]);
  const isReadOnly = (0,react.useMemo)(() => {
    if (isCreatingEntry) {
      return false;
    }
    if (hasChildrenAllowedFields) {
      return false;
    }
    return hasChildrenReadableFields;
  }, [hasChildrenAllowedFields, hasChildrenReadableFields, isCreatingEntry]);
  return {
    addNonRepeatableComponentToField,
    formErrors,
    hasChildrenAllowedFields,
    hasChildrenReadableFields,
    isCreatingEntry,
    isReadOnly,
    removeComponentFromField,
    componentValue
  };
}
/* harmony default export */ const FieldComponent_utils_select = (utils_select_useSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/FieldComponent/index.js
















const FieldComponent = ({
  addNonRepeatableComponentToField,
  componentUid,
  // TODO add error state
  // formErrors,
  intlLabel,
  isCreatingEntry,
  isFromDynamicZone,
  isRepeatable,
  isNested,
  labelAction,
  max,
  min,
  name,
  // Passed thanks to the connect function
  hasChildrenAllowedFields,
  hasChildrenReadableFields,
  isReadOnly,
  componentValue,
  removeComponentFromField,
  required
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const componentValueLength = size_default()(componentValue);
  const isInitialized = componentValue !== null || isFromDynamicZone;
  const showResetComponent = !isRepeatable && isInitialized && !isFromDynamicZone && hasChildrenAllowedFields;
  const { getComponentLayout, components } = (0,hooks/* useContentTypeLayout */.PL)();
  const componentLayoutData = (0,react.useMemo)(
    () => getComponentLayout(componentUid),
    [componentUid, getComponentLayout]
  );
  if (!hasChildrenAllowedFields && isCreatingEntry) {
    return /* @__PURE__ */ react.createElement(dist/* NotAllowedInput */.X0, { labelAction, intlLabel, name });
  }
  if (!hasChildrenAllowedFields && !isCreatingEntry && !hasChildrenReadableFields) {
    return /* @__PURE__ */ react.createElement(dist/* NotAllowedInput */.X0, { labelAction, intlLabel, name });
  }
  const handleClickAddNonRepeatableComponentToField = () => {
    addNonRepeatableComponentToField(name, componentLayoutData, components);
  };
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, intlLabel && /* @__PURE__ */ react.createElement(
    FieldComponent_Label,
    {
      intlLabel,
      labelAction,
      name,
      numberOfEntries: componentValueLength,
      showNumberOfEntries: isRepeatable,
      required
    }
  ), showResetComponent && /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("components.reset-entry"),
        defaultMessage: "Reset Entry"
      }),
      icon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null),
      noBorder: true,
      onClick: () => {
        removeComponentFromField(name, componentUid);
      }
    }
  )), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 1 }, !isRepeatable && !isInitialized && /* @__PURE__ */ react.createElement(
    components_ComponentInitializer,
    {
      isReadOnly,
      onClick: handleClickAddNonRepeatableComponentToField
    }
  ), !isRepeatable && isInitialized && /* @__PURE__ */ react.createElement(
    components_NonRepeatableComponent,
    {
      componentUid,
      isFromDynamicZone,
      isNested,
      name
    }
  ), isRepeatable && /* @__PURE__ */ react.createElement(
    components_RepeatableComponent,
    {
      componentValue,
      componentValueLength,
      componentUid,
      isReadOnly,
      max,
      min,
      name
    }
  )));
};
FieldComponent.defaultProps = {
  componentValue: null,
  hasChildrenAllowedFields: false,
  hasChildrenReadableFields: false,
  intlLabel: void 0,
  isFromDynamicZone: false,
  isReadOnly: false,
  isRepeatable: false,
  isNested: false,
  labelAction: void 0,
  max: Infinity,
  min: -Infinity,
  required: false
};
FieldComponent.propTypes = {
  addNonRepeatableComponentToField: (prop_types_default()).func.isRequired,
  componentUid: (prop_types_default()).string.isRequired,
  componentValue: prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).array]),
  hasChildrenAllowedFields: (prop_types_default()).bool,
  hasChildrenReadableFields: (prop_types_default()).bool,
  isCreatingEntry: (prop_types_default()).bool.isRequired,
  isFromDynamicZone: (prop_types_default()).bool,
  isReadOnly: (prop_types_default()).bool,
  isRepeatable: (prop_types_default()).bool,
  isNested: (prop_types_default()).bool,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  labelAction: (prop_types_default()).element,
  max: (prop_types_default()).number,
  min: (prop_types_default()).number,
  name: (prop_types_default()).string.isRequired,
  removeComponentFromField: (prop_types_default()).func.isRequired,
  required: (prop_types_default()).bool
};
const FieldComponent_Memoized = (0,react.memo)(FieldComponent, (isEqual_default()));
/* harmony default export */ const components_FieldComponent = (FieldComponent_utils_connect(FieldComponent_Memoized, FieldComponent_utils_select));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/components/DynamicComponent.js














const DynamicComponent = ({
  componentUid,
  formErrors,
  index,
  isFieldAllowed,
  name,
  onRemoveComponentClick,
  onMoveComponent,
  onGrabItem,
  onDropItem,
  onCancel,
  dynamicComponentsByCategory,
  onAddComponent
}) => {
  const [isOpen, setIsOpen] = (0,react.useState)(true);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { getComponentLayout } = (0,hooks/* useContentTypeLayout */.PL)();
  const { modifiedData } = (0,dist/* useCMEditViewDataManager */.Wq)();
  const { icon, friendlyName, mainValue } = (0,react.useMemo)(() => {
    const componentLayoutData = getComponentLayout(componentUid);
    const {
      info: { icon: icon2, displayName }
    } = componentLayoutData;
    const mainFieldKey = get_default()(componentLayoutData, ["settings", "mainField"], "id");
    const mainField = get_default()(modifiedData, [name, index, mainFieldKey]) ?? "";
    const displayedValue = mainFieldKey === "id" ? "" : String(mainField).trim();
    const mainValue2 = displayedValue.length > 0 ? ` - ${displayedValue}` : displayedValue;
    return { friendlyName: displayName, icon: icon2, mainValue: mainValue2 };
  }, [componentUid, getComponentLayout, modifiedData, name, index]);
  const fieldsErrors = Object.keys(formErrors).filter((errorKey) => {
    const errorKeysArray = errorKey.split(".");
    if (`${errorKeysArray[0]}.${errorKeysArray[1]}` === `${name}.${index}`) {
      return true;
    }
    return false;
  });
  let errorMessage;
  if (fieldsErrors.length > 0) {
    errorMessage = formatMessage({
      id: (0,utils/* getTrad */.OB)("components.DynamicZone.error-message"),
      defaultMessage: "The component contains error(s)"
    });
  }
  const handleToggle = () => {
    setIsOpen((s) => !s);
  };
  const [{ handlerId, isDragging, handleKeyDown }, boxRef, dropRef, dragRef, dragPreviewRef] = (0,hooks/* useDragAndDrop */.Y9)(isFieldAllowed, {
    type: `${utils/* ItemTypes */._Q.DYNAMIC_ZONE}_${name}`,
    index,
    item: {
      displayedValue: `${friendlyName}${mainValue}`,
      icon
    },
    onMoveItem: onMoveComponent,
    onGrabItem,
    onDropItem,
    onCancel
  });
  (0,react.useEffect)(() => {
    dragPreviewRef((0,dist_cjs/* getEmptyImage */.rX)(), { captureDraggingState: false });
  }, [dragPreviewRef, index]);
  const composedBoxRefs = (0,utils/* composeRefs */.FE)(boxRef, dropRef);
  const accordionActions = !isFieldAllowed ? null : /* @__PURE__ */ react.createElement(DynamicComponent_ActionsFlex, { gap: 0, expanded: isOpen }, /* @__PURE__ */ react.createElement(
    IconButtonCustom,
    {
      noBorder: true,
      label: formatMessage(
        {
          id: (0,utils/* getTrad */.OB)("components.DynamicZone.delete-label"),
          defaultMessage: "Delete {name}"
        },
        { name: friendlyName }
      ),
      onClick: onRemoveComponentClick
    },
    /* @__PURE__ */ react.createElement(Trash/* default */.Z, null)
  ), /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      forwardedAs: "div",
      role: "button",
      noBorder: true,
      tabIndex: 0,
      onClick: (e) => e.stopPropagation(),
      "data-handler-id": handlerId,
      ref: dragRef,
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("components.DragHandle-label"),
        defaultMessage: "Drag"
      }),
      onKeyDown: handleKeyDown
    },
    /* @__PURE__ */ react.createElement(Drag/* default */.Z, null)
  ), /* @__PURE__ */ react.createElement(Menu/* Root */.fC, null, /* @__PURE__ */ react.createElement(Menu/* Trigger */.xz, { size: "S", endIcon: null, paddingLeft: 2, paddingRight: 2 }, /* @__PURE__ */ react.createElement(More/* default */.Z, { "aria-hidden": true, focusable: false }), /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, { as: "span" }, formatMessage({
    id: (0,utils/* getTrad */.OB)("components.DynamicZone.more-actions"),
    defaultMessage: "More actions"
  }))), /* @__PURE__ */ react.createElement(Menu/* Content */.VY, null, /* @__PURE__ */ react.createElement(Menu/* SubRoot */.rl, null, /* @__PURE__ */ react.createElement(Menu/* SubTrigger */.fF, null, formatMessage({
    id: (0,utils/* getTrad */.OB)("components.DynamicZone.add-item-above"),
    defaultMessage: "Add component above"
  })), /* @__PURE__ */ react.createElement(Menu/* SubContent */.tu, null, Object.entries(dynamicComponentsByCategory).map(([category, components]) => /* @__PURE__ */ react.createElement(react.Fragment, { key: category }, /* @__PURE__ */ react.createElement(Menu/* Label */.__, null, category), components.map(({ componentUid: componentUid2, info: { displayName } }) => /* @__PURE__ */ react.createElement(
    SimpleMenu/* MenuItem */.sN,
    {
      key: componentUid2,
      onSelect: () => onAddComponent(componentUid2, index)
    },
    displayName
  )))))), /* @__PURE__ */ react.createElement(Menu/* SubRoot */.rl, null, /* @__PURE__ */ react.createElement(Menu/* SubTrigger */.fF, null, formatMessage({
    id: (0,utils/* getTrad */.OB)("components.DynamicZone.add-item-below"),
    defaultMessage: "Add component below"
  })), /* @__PURE__ */ react.createElement(Menu/* SubContent */.tu, null, Object.entries(dynamicComponentsByCategory).map(([category, components]) => /* @__PURE__ */ react.createElement(react.Fragment, { key: category }, /* @__PURE__ */ react.createElement(Menu/* Label */.__, null, category), components.map(({ componentUid: componentUid2, info: { displayName } }) => /* @__PURE__ */ react.createElement(
    SimpleMenu/* MenuItem */.sN,
    {
      key: componentUid2,
      onSelect: () => onAddComponent(componentUid2, index + 1)
    },
    displayName
  )))))))));
  return /* @__PURE__ */ react.createElement(ComponentContainer, { as: "li", width: "100%" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Rectangle, { background: "neutral200" })), /* @__PURE__ */ react.createElement(StyledBox, { ref: composedBoxRefs, hasRadius: true }, isDragging ? /* @__PURE__ */ react.createElement(DynamicComponent_Preview, { padding: 6, background: "primary100" }) : /* @__PURE__ */ react.createElement(Accordion/* Accordion */.U, { expanded: isOpen, onToggle: handleToggle, size: "S", error: errorMessage }, /* @__PURE__ */ react.createElement(
    AccordionToggle/* AccordionToggle */.B,
    {
      startIcon: /* @__PURE__ */ react.createElement(ComponentIcon, { icon, showBackground: false, size: "S" }),
      action: accordionActions,
      title: `${friendlyName}${mainValue}`,
      togglePosition: "left"
    }
  ), /* @__PURE__ */ react.createElement(AccordionContent/* AccordionContent */.v, null, /* @__PURE__ */ react.createElement(AccordionContentRadius, { background: "neutral0" }, /* @__PURE__ */ react.createElement(
    components_FieldComponent,
    {
      componentUid,
      icon,
      name: `${name}.${index}`,
      isFromDynamicZone: true
    }
  ))))));
};
const DynamicComponent_ActionsFlex = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  /* 
    we need to remove the background from the button but we can't 
    wrap the element in styled because it breaks the forwardedAs which
    we need for drag handler to work on firefox
  */
  div[role='button'] {
    background: transparent;
  }
`;
const IconButtonCustom = (0,styled_components_browser_esm/* default */.ZP)((0,IconButton/* IconButton */.h))`
  background-color: transparent;

  svg path {
    fill: ${({ theme, expanded }) => expanded ? theme.colors.primary600 : theme.colors.neutral600};
  }
`;
const StyledBox = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  > div:first-child {
    box-shadow: ${({ theme }) => theme.shadows.tableShadow};
  }
`;
const AccordionContentRadius = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  border-radius: 0 0 ${({ theme }) => theme.spaces[1]} ${({ theme }) => theme.spaces[1]};
`;
const Rectangle = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  width: ${({ theme }) => theme.spaces[2]};
  height: ${({ theme }) => theme.spaces[4]};
`;
const DynamicComponent_Preview = styled_components_browser_esm/* default */.ZP.span`
  display: block;
  background-color: ${({ theme }) => theme.colors.primary100};
  outline: 1px dashed ${({ theme }) => theme.colors.primary500};
  outline-offset: -1px;
  padding: ${({ theme }) => theme.spaces[6]};
`;
const ComponentContainer = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  list-style: none;
  padding: 0;
  margin: 0;
`;
DynamicComponent.defaultProps = {
  dynamicComponentsByCategory: {},
  formErrors: {},
  index: 0,
  isFieldAllowed: true,
  onAddComponent: void 0,
  onGrabItem: void 0,
  onDropItem: void 0,
  onCancel: void 0
};
DynamicComponent.propTypes = {
  componentUid: (prop_types_default()).string.isRequired,
  dynamicComponentsByCategory: prop_types_default().shape({
    components: prop_types_default().arrayOf(
      prop_types_default().shape({
        componentUid: (prop_types_default()).string.isRequired,
        info: (prop_types_default()).object
      })
    )
  }),
  formErrors: (prop_types_default()).object,
  index: (prop_types_default()).number,
  isFieldAllowed: (prop_types_default()).bool,
  name: (prop_types_default()).string.isRequired,
  onAddComponent: (prop_types_default()).func,
  onGrabItem: (prop_types_default()).func,
  onDropItem: (prop_types_default()).func,
  onCancel: (prop_types_default()).func,
  onMoveComponent: (prop_types_default()).func.isRequired,
  onRemoveComponentClick: (prop_types_default()).func.isRequired
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/components/DynamicZoneLabel.js





const DynamicZoneLabel = ({
  label,
  labelAction,
  name,
  numberOfComponents,
  required,
  intlDescription
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const intlLabel = formatMessage({ id: label || name, defaultMessage: label || name });
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      paddingTop: 3,
      paddingBottom: 3,
      paddingRight: 4,
      paddingLeft: 4,
      borderRadius: "26px",
      background: "neutral0",
      shadow: "filterShadow",
      color: "neutral500"
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", justifyContent: "center" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { maxWidth: (0,dist/* pxToRem */.Q1)(356) }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600", fontWeight: "bold", ellipsis: true }, intlLabel, "\xA0"), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600", fontWeight: "bold" }, "(", numberOfComponents, ")"), required && /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "danger600" }, "*"), labelAction && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 1 }, labelAction)), intlDescription && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 1, maxWidth: (0,dist/* pxToRem */.Q1)(356) }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600", ellipsis: true }, formatMessage(intlDescription))))
  ));
};
DynamicZoneLabel.defaultProps = {
  intlDescription: void 0,
  label: "",
  labelAction: void 0,
  numberOfComponents: 0,
  required: false
};
DynamicZoneLabel.propTypes = {
  intlDescription: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired
  }),
  label: (prop_types_default()).string,
  labelAction: (prop_types_default()).element,
  name: (prop_types_default()).string.isRequired,
  numberOfComponents: (prop_types_default()).number,
  required: (prop_types_default()).bool
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/index.js











const DynamicZone_DynamicZone = ({ name, labelAction, fieldSchema, metadatas }) => {
  const { max = Infinity, min = -Infinity, components = [], required = false } = fieldSchema;
  const [addComponentIsOpen, setAddComponentIsOpen] = (0,react.useState)(false);
  const [liveText, setLiveText] = (0,react.useState)("");
  const {
    addComponentToDynamicZone,
    createActionAllowedFields,
    isCreatingEntry,
    formErrors,
    modifiedData,
    moveComponentField,
    removeComponentFromDynamicZone,
    readActionAllowedFields,
    updateActionAllowedFields
  } = (0,dist/* useCMEditViewDataManager */.Wq)();
  const dynamicDisplayedComponents = (0,react.useMemo)(
    () => (modifiedData?.[name] ?? []).map((data) => {
      return {
        componentUid: data.__component,
        id: data.id ?? data.__temp_key__
      };
    }),
    [modifiedData, name]
  );
  const { getComponentLayout, components: allComponents } = (0,hooks/* useContentTypeLayout */.PL)();
  const dynamicComponentsByCategory = (0,react.useMemo)(() => {
    return components.reduce((acc, componentUid) => {
      const { category, info, attributes } = getComponentLayout(componentUid);
      const component = { componentUid, info, attributes };
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category] = [...acc[category], component];
      return acc;
    }, {});
  }, [components, getComponentLayout]);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const isFieldAllowed = (0,react.useMemo)(() => {
    const allowedFields = isCreatingEntry ? createActionAllowedFields : updateActionAllowedFields;
    return allowedFields.includes(name);
  }, [name, isCreatingEntry, createActionAllowedFields, updateActionAllowedFields]);
  const isFieldReadable = (0,react.useMemo)(() => {
    const allowedFields = isCreatingEntry ? [] : readActionAllowedFields;
    return allowedFields.includes(name);
  }, [name, isCreatingEntry, readActionAllowedFields]);
  const dynamicDisplayedComponentsLength = dynamicDisplayedComponents.length;
  const intlDescription = metadatas.description ? { id: metadatas.description, defaultMessage: metadatas.description } : null;
  const dynamicZoneError = formErrors[name];
  const missingComponentNumber = min - dynamicDisplayedComponentsLength;
  const hasError = !!dynamicZoneError;
  const handleAddComponent = (componentUid, position) => {
    setAddComponentIsOpen(false);
    const componentLayoutData = getComponentLayout(componentUid);
    addComponentToDynamicZone(name, componentLayoutData, allComponents, hasError, position);
  };
  const handleClickOpenPicker = () => {
    if (dynamicDisplayedComponentsLength < max) {
      setAddComponentIsOpen((prev) => !prev);
    } else {
      toggleNotification({
        type: "info",
        message: { id: (0,utils/* getTrad */.OB)("components.notification.info.maximum-requirement") }
      });
    }
  };
  const handleMoveComponent = (newIndex, currentIndex) => {
    setLiveText(
      formatMessage(
        {
          id: (0,utils/* getTrad */.OB)("dnd.reorder"),
          defaultMessage: "{item}, moved. New position in list: {position}."
        },
        {
          item: `${name}.${currentIndex}`,
          position: getItemPos(newIndex)
        }
      )
    );
    moveComponentField({
      name,
      newIndex,
      currentIndex
    });
  };
  const getItemPos = (index) => `${index + 1} of ${dynamicDisplayedComponents.length}`;
  const handleCancel = (index) => {
    setLiveText(
      formatMessage(
        {
          id: (0,utils/* getTrad */.OB)("dnd.cancel-item"),
          defaultMessage: "{item}, dropped. Re-order cancelled."
        },
        {
          item: `${name}.${index}`
        }
      )
    );
  };
  const handleGrabItem = (index) => {
    setLiveText(
      formatMessage(
        {
          id: (0,utils/* getTrad */.OB)("dnd.grab-item"),
          defaultMessage: `{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel.`
        },
        {
          item: `${name}.${index}`,
          position: getItemPos(index)
        }
      )
    );
  };
  const handleDropItem = (index) => {
    setLiveText(
      formatMessage(
        {
          id: (0,utils/* getTrad */.OB)("dnd.drop-item"),
          defaultMessage: `{item}, dropped. Final position in list: {position}.`
        },
        {
          item: `${name}.${index}`,
          position: getItemPos(index)
        }
      )
    );
  };
  const handleRemoveComponent = (name2, currentIndex) => () => {
    removeComponentFromDynamicZone(name2, currentIndex);
  };
  const renderButtonLabel = () => {
    if (addComponentIsOpen) {
      return formatMessage({ id: "app.utils.close-label", defaultMessage: "Close" });
    }
    if (hasError && dynamicZoneError.id.includes("max")) {
      return formatMessage({
        id: "components.Input.error.validation.max",
        defaultMessage: "The value is too high."
      });
    }
    if (hasError && dynamicZoneError.id.includes("min")) {
      return formatMessage(
        {
          id: (0,utils/* getTrad */.OB)(`components.DynamicZone.missing-components`),
          defaultMessage: "There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}"
        },
        { number: missingComponentNumber }
      );
    }
    return formatMessage(
      {
        id: (0,utils/* getTrad */.OB)("components.DynamicZone.add-component"),
        defaultMessage: "Add a component to {componentName}"
      },
      { componentName: metadatas.label || name }
    );
  };
  if (!isFieldAllowed && (isCreatingEntry || !isFieldReadable && !isCreatingEntry)) {
    return /* @__PURE__ */ react.createElement(
      dist/* NotAllowedInput */.X0,
      {
        description: intlDescription,
        intlLabel: { id: metadatas.label, defaultMessage: metadatas.label },
        labelAction,
        name
      }
    );
  }
  const ariaDescriptionId = `${name}-item-instructions`;
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 6 }, dynamicDisplayedComponentsLength > 0 && /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    DynamicZoneLabel,
    {
      intlDescription,
      label: metadatas.label,
      labelAction,
      name,
      numberOfComponents: dynamicDisplayedComponentsLength,
      required
    }
  ), /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, { id: ariaDescriptionId }, formatMessage({
    id: (0,utils/* getTrad */.OB)("dnd.instructions"),
    defaultMessage: `Press spacebar to grab and re-order`
  })), /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, { "aria-live": "assertive" }, liveText), /* @__PURE__ */ react.createElement("ol", { "aria-describedby": ariaDescriptionId }, dynamicDisplayedComponents.map(({ componentUid, id }, index) => /* @__PURE__ */ react.createElement(
    DynamicComponent,
    {
      componentUid,
      formErrors,
      key: `${componentUid}-${id}`,
      index,
      isFieldAllowed,
      name,
      onMoveComponent: handleMoveComponent,
      onRemoveComponentClick: handleRemoveComponent(name, index),
      onCancel: handleCancel,
      onDropItem: handleDropItem,
      onGrabItem: handleGrabItem,
      onAddComponent: handleAddComponent,
      dynamicComponentsByCategory
    }
  )))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(
    AddComponentButton,
    {
      hasError,
      isDisabled: !isFieldAllowed,
      isOpen: addComponentIsOpen,
      onClick: handleClickOpenPicker
    },
    renderButtonLabel()
  )), /* @__PURE__ */ react.createElement(
    ComponentPicker,
    {
      dynamicComponentsByCategory,
      isOpen: addComponentIsOpen,
      onClickAddComponent: handleAddComponent
    }
  ));
};
DynamicZone_DynamicZone.defaultProps = {
  fieldSchema: {},
  labelAction: null
};
DynamicZone_DynamicZone.propTypes = {
  fieldSchema: prop_types_default().shape({
    components: (prop_types_default()).array,
    max: (prop_types_default()).number,
    min: (prop_types_default()).number,
    required: (prop_types_default()).bool
  }),
  labelAction: (prop_types_default()).element,
  metadatas: prop_types_default().shape({
    description: (prop_types_default()).string,
    label: (prop_types_default()).string
  }).isRequired,
  name: (prop_types_default()).string.isRequired
};


// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(10124);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(69530);
// EXTERNAL MODULE: ./node_modules/fractional-indexing/src/index.js
var src = __webpack_require__(94690);
// EXTERNAL MODULE: ./node_modules/lodash/uniqBy.js
var uniqBy = __webpack_require__(19764);
var uniqBy_default = /*#__PURE__*/__webpack_require__.n(uniqBy);
// EXTERNAL MODULE: ./node_modules/lodash/unset.js
var unset = __webpack_require__(42982);
var unset_default = /*#__PURE__*/__webpack_require__.n(unset);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/constants/attributes.js
const CREATOR_FIELDS = ["createdBy", "updatedBy"];


// EXTERNAL MODULE: ./node_modules/lodash/isArray.js
var isArray = __webpack_require__(26126);
var isArray_default = /*#__PURE__*/__webpack_require__.n(isArray);
// EXTERNAL MODULE: ./node_modules/lodash/isObject.js
var isObject = __webpack_require__(3243);
var isObject_default = /*#__PURE__*/__webpack_require__.n(isObject);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/EditViewDataManagerProvider/utils/cleanData.js





const cleanData = ({ browserState, serverState }, currentSchema, componentsSchema) => {
  const rootServerState = serverState;
  const rootBrowserState = browserState;
  const getType = (schema, attrName) => get_default()(schema, ["attributes", attrName, "type"], "");
  const getOtherInfos = (schema, arr) => get_default()(schema, ["attributes", ...arr], "");
  const recursiveCleanData = (browserState2, serverState2, schema, pathToParent) => {
    return Object.keys(browserState2).reduce((acc, current) => {
      if (CREATOR_FIELDS.includes(current)) {
        return acc;
      }
      const path = pathToParent ? `${pathToParent}.${current}` : current;
      const attrType = getType(schema, current);
      const value = get_default()(browserState2, current);
      const oldValue = get_default()(serverState2, current);
      const component = getOtherInfos(schema, [current, "component"]);
      const isRepeatable = getOtherInfos(schema, [current, "repeatable"]);
      let cleanedData;
      switch (attrType) {
        case "json":
          cleanedData = JSON.parse(value);
          break;
        case "time": {
          cleanedData = value;
          if (value && value.split(":").length < 3) {
            cleanedData = `${value}:00`;
          }
          break;
        }
        case "media":
          if (getOtherInfos(schema, [current, "multiple"]) === true) {
            cleanedData = value ? value.filter((file) => !(file instanceof File)) : null;
          } else {
            cleanedData = get_default()(value, 0) instanceof File ? null : get_default()(value, "id", null);
          }
          break;
        case "component":
          if (isRepeatable) {
            cleanedData = value ? value.map((data, index) => {
              const subCleanedData = recursiveCleanData(
                data,
                (oldValue ?? [])[index],
                componentsSchema[component],
                `${path}.${index}`
              );
              return subCleanedData;
            }) : value;
          } else {
            cleanedData = value ? recursiveCleanData(value, oldValue, componentsSchema[component], path) : value;
          }
          break;
        case "relation": {
          const trueInitialDataPath = getInitialDataPathUsingTempKeys(
            rootServerState,
            rootBrowserState
          )(path).join(".");
          let actualOldValue = get_default()(rootServerState, trueInitialDataPath, []);
          const connectedRelations = value.reduce((acc2, relation, currentIndex, array) => {
            const relationOnServer = actualOldValue.find(
              (oldRelation) => oldRelation.id === relation.id
            );
            const relationInFront = array[currentIndex + 1];
            if (!relationOnServer || relationOnServer.__temp_key__ !== relation.__temp_key__) {
              const position = relationInFront ? { before: relationInFront.id } : { end: true };
              return [...acc2, { id: relation.id, position }];
            }
            return acc2;
          }, []);
          const disconnectedRelations = actualOldValue.reduce((acc2, relation) => {
            if (!value.find((newRelation) => newRelation.id === relation.id)) {
              return [...acc2, { id: relation.id }];
            }
            return acc2;
          }, []);
          cleanedData = {
            disconnect: disconnectedRelations,
            /**
             * Reverse the array because the API sequentially goes through the list
             * so in an instance where you add two to the end it would fail because index0
             * would want to attach itself to index1 which doesn't exist yet.
             */
            connect: connectedRelations.reverse()
          };
          break;
        }
        case "dynamiczone":
          cleanedData = value.map((componentData, index) => {
            const subCleanedData = recursiveCleanData(
              componentData,
              (oldValue ?? [])[index],
              componentsSchema[componentData.__component],
              `${path}.${index}`
            );
            return subCleanedData;
          });
          break;
        default:
          cleanedData = helperCleanData(value, "id");
      }
      acc[current] = cleanedData;
      return acc;
    }, {});
  };
  return recursiveCleanData(browserState, serverState, currentSchema, "");
};
const helperCleanData = (value, key) => {
  if (isArray_default()(value)) {
    return value.map((obj) => obj[key] ? obj[key] : obj);
  }
  if (isObject_default()(value)) {
    return value[key];
  }
  return value;
};
/* harmony default export */ const utils_cleanData = (cleanData);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/EditViewDataManagerProvider/utils/findAllAndReplace.js
const findAllAndReplaceSetup = (components, predicate = () => false, replacement = void 0) => {
  const findAllAndReplace = (data, attributes, { ignoreFalseyValues = false, path = [], parent = attributes } = {}) => {
    return Object.entries(attributes).reduce(
      (acc, [key, value]) => {
        if (ignoreFalseyValues && (acc === null || acc === void 0 || acc[key] === void 0 || acc[key] === null)) {
          return acc;
        }
        if (predicate(value, { path: [...path, key], parent })) {
          acc[key] = typeof replacement === "function" ? replacement(acc[key], { path: [...path, key], parent: acc }) : replacement;
        }
        if (value.type === "component") {
          const componentAttributes = components[value.component].attributes;
          if (!value.repeatable && acc[key] && typeof acc[key] === "object") {
            acc[key] = findAllAndReplace(acc[key], componentAttributes, {
              ignoreFalseyValues,
              path: [...path, key],
              parent: attributes[key]
            });
          } else if (value.repeatable && Array.isArray(acc[key])) {
            acc[key] = acc[key].map((datum, index) => {
              const data2 = findAllAndReplace(datum, componentAttributes, {
                ignoreFalseyValues,
                path: [...path, key, index],
                parent: attributes[key]
              });
              return data2;
            });
          }
        } else if (value.type === "dynamiczone" && Array.isArray(acc[key])) {
          acc[key] = acc[key].map((datum, index) => {
            const componentAttributes = components[datum.__component].attributes;
            const data2 = findAllAndReplace(datum, componentAttributes, {
              ignoreFalseyValues,
              path: [...path, key, index],
              parent: attributes[key]
            });
            return data2;
          });
        }
        return acc;
      },
      { ...data }
    );
  };
  return findAllAndReplace;
};


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/EditViewDataManagerProvider/utils/moveFields.js
const moveFields = (initialValue, from, to, value) => {
  const returnedValue = initialValue.slice();
  returnedValue.splice(from, 1);
  returnedValue.splice(to, 0, value);
  return returnedValue;
};
/* harmony default export */ const utils_moveFields = (moveFields);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/EditViewDataManagerProvider/utils/index.js




;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/EditViewDataManagerProvider/reducer.js











const reducer_initialState = {
  componentsDataStructure: {},
  contentTypeDataStructure: {},
  formErrors: {},
  initialData: {},
  modifiedData: null,
  shouldCheckErrors: false,
  modifiedDZName: null,
  publishConfirmation: {
    show: false,
    draftCount: 0
  }
};
const reducer_reducer = (state, action) => (
  // eslint-disable-next-line consistent-return
  (0,immer_esm/* default */.ZP)(state, (draftState) => {
    switch (action.type) {
      case "ADD_NON_REPEATABLE_COMPONENT_TO_FIELD": {
        const { componentLayoutData, allComponents } = action;
        const defaultDataStructure = {
          ...state.componentsDataStructure[componentLayoutData.uid]
        };
        const findAllRelationsAndReplaceWithEmptyArray = findAllAndReplaceSetup(
          allComponents,
          (value) => value.type === "relation",
          []
        );
        const componentDataStructure = findAllRelationsAndReplaceWithEmptyArray(
          defaultDataStructure,
          componentLayoutData.attributes
        );
        set_default()(draftState, ["modifiedData", ...action.keys], componentDataStructure);
        break;
      }
      case "ADD_COMPONENT_TO_DYNAMIC_ZONE":
      case "ADD_REPEATABLE_COMPONENT_TO_FIELD": {
        const {
          keys,
          allComponents,
          componentLayoutData,
          shouldCheckErrors,
          position = void 0
        } = action;
        if (shouldCheckErrors) {
          draftState.shouldCheckErrors = !state.shouldCheckErrors;
        }
        if (action.type === "ADD_COMPONENT_TO_DYNAMIC_ZONE") {
          draftState.modifiedDZName = keys[0];
        }
        const currentValue = [...get_default()(state, ["modifiedData", ...keys], [])];
        let actualPosition = position;
        if (actualPosition === void 0) {
          actualPosition = currentValue.length;
        } else if (actualPosition < 0) {
          actualPosition = 0;
        }
        const defaultDataStructure = action.type === "ADD_COMPONENT_TO_DYNAMIC_ZONE" ? {
          ...state.componentsDataStructure[componentLayoutData.uid],
          __component: componentLayoutData.uid,
          __temp_key__: (0,utils/* getMaxTempKey */.Uo)(currentValue) + 1
        } : {
          ...state.componentsDataStructure[componentLayoutData.uid],
          __temp_key__: (0,utils/* getMaxTempKey */.Uo)(currentValue) + 1
        };
        const findAllRelationsAndReplaceWithEmptyArray = findAllAndReplaceSetup(
          allComponents,
          (value) => value.type === "relation",
          []
        );
        const componentDataStructure = findAllRelationsAndReplaceWithEmptyArray(
          defaultDataStructure,
          componentLayoutData.attributes
        );
        currentValue.splice(actualPosition, 0, componentDataStructure);
        set_default()(draftState, ["modifiedData", ...keys], currentValue);
        break;
      }
      case "LOAD_RELATION": {
        const { initialDataPath, modifiedDataPath, value } = action;
        const initialDataRelations = get_default()(state, initialDataPath);
        const modifiedDataRelations = get_default()(state, modifiedDataPath);
        const valuesToLoad = !initialDataRelations ? value : value.filter((relation) => {
          return !initialDataRelations.some((initialDataRelation) => {
            return initialDataRelation.id === relation.id;
          });
        });
        const keys = (0,src/* generateNKeysBetween */.zJ)(
          null,
          modifiedDataRelations[0]?.__temp_key__,
          valuesToLoad.length
        );
        const valuesWithKeys = valuesToLoad.map((relation, index) => ({
          ...relation,
          __temp_key__: keys[index]
        }));
        set_default()(
          draftState,
          initialDataPath,
          uniqBy_default()([...valuesWithKeys, ...initialDataRelations], "id")
        );
        set_default()(
          draftState,
          modifiedDataPath,
          uniqBy_default()([...valuesWithKeys, ...modifiedDataRelations], "id")
        );
        break;
      }
      case "CONNECT_RELATION": {
        const path = ["modifiedData", ...action.keys];
        const { value, toOneRelation } = action;
        if (toOneRelation) {
          set_default()(draftState, path, [value]);
        } else {
          const modifiedDataRelations = get_default()(state, path);
          const [key] = (0,src/* generateNKeysBetween */.zJ)(modifiedDataRelations.at(-1)?.__temp_key__, null, 1);
          const newRelations = [...modifiedDataRelations, { ...value, __temp_key__: key }];
          set_default()(draftState, path, newRelations);
        }
        break;
      }
      case "DISCONNECT_RELATION": {
        const path = ["modifiedData", ...action.keys];
        const { id } = action;
        const modifiedDataRelation = get_default()(state, [...path]);
        const newRelations = modifiedDataRelation.filter((rel) => rel.id !== id);
        set_default()(draftState, path, newRelations);
        break;
      }
      case "MOVE_COMPONENT_FIELD":
      case "REORDER_RELATION": {
        const { oldIndex, newIndex, keys } = action;
        const path = ["modifiedData", ...keys];
        const modifiedDataRelations = get_default()(state, [...path]);
        const currentItem = modifiedDataRelations[oldIndex];
        const newRelations = [...modifiedDataRelations];
        if (action.type === "REORDER_RELATION") {
          const startKey = oldIndex > newIndex ? modifiedDataRelations[newIndex - 1]?.__temp_key__ : modifiedDataRelations[newIndex]?.__temp_key__;
          const endKey = oldIndex > newIndex ? modifiedDataRelations[newIndex]?.__temp_key__ : modifiedDataRelations[newIndex + 1]?.__temp_key__;
          const [newKey] = (0,src/* generateNKeysBetween */.zJ)(startKey, endKey, 1);
          newRelations.splice(oldIndex, 1);
          newRelations.splice(newIndex, 0, { ...currentItem, __temp_key__: newKey });
        } else {
          newRelations.splice(oldIndex, 1);
          newRelations.splice(newIndex, 0, currentItem);
        }
        set_default()(draftState, path, newRelations);
        break;
      }
      case "INIT_FORM": {
        const { initialValues, components = {}, attributes = {}, setModifiedDataOnly } = action;
        const data = cloneDeep_default()(initialValues);
        const findAllRelationsAndReplaceWithEmptyArray = findAllAndReplaceSetup(
          components,
          (value, { path }) => {
            const fieldName = path[path.length - 1];
            const isCreatorField = CREATOR_FIELDS.includes(fieldName);
            return value.type === "relation" && !isCreatorField;
          },
          (_, { path }) => {
            if (state.modifiedData?.id === data.id && get_default()(state.modifiedData, path)) {
              return get_default()(state.modifiedData, path);
            }
            return [];
          }
        );
        const mergedDataWithPreparedRelations = findAllRelationsAndReplaceWithEmptyArray(
          data,
          attributes
        );
        const findComponentsAndReplaceWithTempKey = findAllAndReplaceSetup(
          components,
          (value) => value.type === "dynamiczone" || value.type === "component" && !value.repeatable,
          (data2) => {
            return Array.isArray(data2) ? data2.map((datum, index) => ({
              ...datum,
              __temp_key__: index
            })) : {
              ...data2,
              __temp_key__: 0
            };
          }
        );
        const mergedDataWithTmpKeys = findComponentsAndReplaceWithTempKey(
          mergedDataWithPreparedRelations,
          attributes,
          { ignoreFalseyValues: true }
        );
        if (!setModifiedDataOnly) {
          draftState.initialData = mergedDataWithTmpKeys;
        }
        draftState.modifiedData = mergedDataWithTmpKeys;
        draftState.formErrors = {};
        draftState.modifiedDZName = null;
        draftState.shouldCheckErrors = false;
        break;
      }
      case "MOVE_COMPONENT_UP":
      case "MOVE_COMPONENT_DOWN": {
        const { currentIndex, dynamicZoneName, shouldCheckErrors } = action;
        if (shouldCheckErrors) {
          draftState.shouldCheckErrors = !state.shouldCheckErrors;
        }
        const currentValue = state.modifiedData[dynamicZoneName];
        const nextIndex = action.type === "MOVE_COMPONENT_UP" ? currentIndex - 1 : currentIndex + 1;
        const valueToInsert = state.modifiedData[dynamicZoneName][currentIndex];
        const updatedValue = utils_moveFields(currentValue, currentIndex, nextIndex, valueToInsert);
        set_default()(draftState, ["modifiedData", action.dynamicZoneName], updatedValue);
        break;
      }
      case "MOVE_FIELD": {
        const currentValue = get_default()(state, ["modifiedData", ...action.keys], []).slice();
        const valueToInsert = get_default()(state, ["modifiedData", ...action.keys, action.dragIndex]);
        const updatedValue = utils_moveFields(
          currentValue,
          action.dragIndex,
          action.overIndex,
          valueToInsert
        );
        set_default()(draftState, ["modifiedData", ...action.keys], updatedValue);
        break;
      }
      case "ON_CHANGE": {
        const [nonRepeatableComponentKey] = action.keys;
        if (action.shouldSetInitialValue) {
          set_default()(draftState, ["initialData", ...action.keys], action.value);
        }
        if (action.keys.length === 2 && get_default()(state, ["modifiedData", nonRepeatableComponentKey]) === null) {
          set_default()(draftState, ["modifiedData", nonRepeatableComponentKey], {
            [action.keys[1]]: action.value
          });
          break;
        }
        set_default()(draftState, ["modifiedData", ...action.keys], action.value);
        break;
      }
      case "REMOVE_COMPONENT_FROM_DYNAMIC_ZONE": {
        if (action.shouldCheckErrors) {
          draftState.shouldCheckErrors = !state.shouldCheckErrors;
        }
        draftState.modifiedData[action.dynamicZoneName].splice(action.index, 1);
        break;
      }
      case "REMOVE_COMPONENT_FROM_FIELD": {
        const componentPathToRemove = ["modifiedData", ...action.keys];
        set_default()(draftState, componentPathToRemove, null);
        break;
      }
      case "REMOVE_PASSWORD_FIELD": {
        unset_default()(draftState, ["modifiedData", ...action.keys]);
        break;
      }
      case "REMOVE_REPEATABLE_FIELD": {
        const keysLength = action.keys.length - 1;
        const pathToComponentData = ["modifiedData", ...take_default()(action.keys, keysLength)];
        const hasErrors = Object.keys(state.formErrors).length > 0;
        if (hasErrors) {
          draftState.shouldCheckErrors = !state.shouldCheckErrors;
        }
        const currentValue = get_default()(state, pathToComponentData).slice();
        currentValue.splice(parseInt(action.keys[keysLength], 10), 1);
        set_default()(draftState, pathToComponentData, currentValue);
        break;
      }
      case "SET_DEFAULT_DATA_STRUCTURES": {
        draftState.componentsDataStructure = action.componentsDataStructure;
        draftState.contentTypeDataStructure = action.contentTypeDataStructure;
        break;
      }
      case "SET_FORM_ERRORS": {
        draftState.modifiedDZName = null;
        draftState.formErrors = action.errors;
        break;
      }
      case "TRIGGER_FORM_VALIDATION": {
        const hasErrors = Object.keys(state.formErrors).length > 0;
        if (hasErrors) {
          draftState.shouldCheckErrors = !state.shouldCheckErrors;
        }
        break;
      }
      case "SET_PUBLISH_CONFIRMATION": {
        draftState.publishConfirmation = { ...action.publishConfirmation };
        break;
      }
      case "RESET_PUBLISH_CONFIRMATION": {
        draftState.publishConfirmation = { ...state.publishConfirmation, show: false };
        break;
      }
      default:
        return draftState;
    }
  })
);
/* harmony default export */ const EditViewDataManagerProvider_reducer = (reducer_reducer);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/EditViewDataManagerProvider/index.js



















const EditViewDataManagerProvider = ({
  allLayoutData,
  allowedActions: { canRead, canUpdate },
  children,
  componentsDataStructure,
  contentTypeDataStructure,
  createActionAllowedFields,
  from,
  initialValues,
  isCreatingEntry,
  isLoadingForData,
  isSingleType,
  onPost,
  onPublish,
  onDraftRelationCheck,
  onPut,
  onUnpublish,
  readActionAllowedFields,
  // Not sure this is needed anymore
  redirectToPreviousPage,
  slug,
  status,
  updateActionAllowedFields
}) => {
  const [isSaving, setIsSaving] = react.useState(false);
  const [reducerState, dispatch] = (0,react.useReducer)(EditViewDataManagerProvider_reducer, reducer_initialState);
  const {
    formErrors,
    initialData,
    modifiedData,
    modifiedDZName,
    shouldCheckErrors,
    publishConfirmation
  } = reducerState;
  const { setModifiedDataOnly } = (0,es/* useSelector */.v9)(crudReducer_selectors);
  const reduxDispatch = (0,es/* useDispatch */.I0)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { lockApp, unlockApp } = (0,dist/* useOverlayBlocker */.o1)();
  const currentContentTypeLayout = get_default()(allLayoutData, ["contentType"], {});
  const hasDraftAndPublish = (0,react.useMemo)(() => {
    return get_default()(currentContentTypeLayout, ["options", "draftAndPublish"], false);
  }, [currentContentTypeLayout]);
  const shouldNotRunValidations = (0,react.useMemo)(() => {
    return hasDraftAndPublish && !initialData.publishedAt;
  }, [hasDraftAndPublish, initialData.publishedAt]);
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const shouldRedirectToHomepageWhenEditingEntry = (0,react.useMemo)(() => {
    if (isLoadingForData) {
      return false;
    }
    if (isCreatingEntry) {
      return false;
    }
    if (canRead === false && canUpdate === false) {
      return true;
    }
    return false;
  }, [isLoadingForData, isCreatingEntry, canRead, canUpdate]);
  (0,react.useEffect)(() => {
    if (status === "resolved") {
      unlockApp();
    } else {
      lockApp();
    }
  }, [lockApp, unlockApp, status]);
  (0,react.useEffect)(() => {
    if (!isLoadingForData) {
      checkFormErrors();
    }
  }, [shouldCheckErrors]);
  (0,react.useEffect)(() => {
    const errorsInForm = Object.keys(formErrors);
    if (errorsInForm.length > 0) {
      const firstError = errorsInForm[0];
      const el = document.getElementById(firstError);
      if (el) {
        el.focus();
      }
    }
  }, [formErrors]);
  (0,react.useEffect)(() => {
    if (shouldRedirectToHomepageWhenEditingEntry) {
      toggleNotification({
        type: "info",
        message: { id: (0,utils/* getTrad */.OB)("permissions.not-allowed.update") }
      });
    }
  }, [shouldRedirectToHomepageWhenEditingEntry, toggleNotification]);
  (0,react.useEffect)(() => {
    dispatch({
      type: "SET_DEFAULT_DATA_STRUCTURES",
      componentsDataStructure,
      contentTypeDataStructure
    });
  }, [componentsDataStructure, contentTypeDataStructure]);
  const { components } = allLayoutData;
  const previousInitialValues = (0,hooks/* usePrev */.zH)(initialValues);
  (0,react.useEffect)(() => {
    if (initialValues && currentContentTypeLayout?.attributes && !isEqual_default()(previousInitialValues, initialValues)) {
      dispatch({
        type: "INIT_FORM",
        initialValues,
        components,
        attributes: currentContentTypeLayout.attributes,
        setModifiedDataOnly
      });
      if (setModifiedDataOnly) {
        reduxDispatch(clearSetModifiedDataOnly());
      }
    }
  }, [
    initialValues,
    currentContentTypeLayout,
    components,
    setModifiedDataOnly,
    reduxDispatch,
    previousInitialValues
  ]);
  const dispatchAddComponent = (0,react.useCallback)(
    (type) => (keys, componentLayoutData, allComponents, shouldCheckErrors2 = false, position = void 0) => {
      trackUsageRef.current("didAddComponentToDynamicZone");
      dispatch({
        type,
        keys: keys.split("."),
        position,
        componentLayoutData,
        allComponents,
        shouldCheckErrors: shouldCheckErrors2
      });
    },
    []
  );
  const addComponentToDynamicZone = dispatchAddComponent("ADD_COMPONENT_TO_DYNAMIC_ZONE");
  const addNonRepeatableComponentToField = (0,react.useCallback)(
    (keys, componentLayoutData, allComponents) => {
      dispatch({
        type: "ADD_NON_REPEATABLE_COMPONENT_TO_FIELD",
        keys: keys.split("."),
        componentLayoutData,
        allComponents
      });
    },
    []
  );
  const relationConnect = (0,react.useCallback)(({ name, value, toOneRelation }) => {
    dispatch({
      type: "CONNECT_RELATION",
      keys: name.split("."),
      value,
      toOneRelation
    });
  }, []);
  const relationLoad = (0,react.useCallback)(
    ({ target: { initialDataPath, modifiedDataPath, value, modifiedDataOnly } }) => {
      dispatch({
        type: "LOAD_RELATION",
        modifiedDataPath,
        initialDataPath,
        value,
        modifiedDataOnly
      });
    },
    []
  );
  const addRepeatableComponentToField = dispatchAddComponent("ADD_REPEATABLE_COMPONENT_TO_FIELD");
  const yupSchema = (0,react.useMemo)(() => {
    const options = { isCreatingEntry, isDraft: shouldNotRunValidations, isFromComponent: false };
    return (0,utils/* createYupSchema */.Ex)(
      currentContentTypeLayout,
      {
        components: allLayoutData.components || {}
      },
      options
    );
  }, [
    allLayoutData.components,
    currentContentTypeLayout,
    isCreatingEntry,
    shouldNotRunValidations
  ]);
  const checkFormErrors = (0,react.useCallback)(
    async (dataToSet = {}) => {
      let errors = {};
      const updatedData = cloneDeep_default()(modifiedData);
      if (!isEmpty_default()(updatedData)) {
        set_default()(updatedData, dataToSet.path, dataToSet.value);
      }
      try {
        await yupSchema.validate(updatedData, { abortEarly: false });
      } catch (err) {
        errors = (0,dist/* getYupInnerErrors */.CJ)(err);
        if (modifiedDZName) {
          errors = Object.keys(errors).reduce((acc, current) => {
            const dzName = current.split(".")[0];
            if (dzName !== modifiedDZName) {
              acc[current] = errors[current];
            }
            return acc;
          }, {});
        }
      }
      dispatch({
        type: "SET_FORM_ERRORS",
        errors
      });
    },
    [modifiedDZName, modifiedData, yupSchema]
  );
  const handleChange = (0,react.useCallback)(
    ({ target: { name, value, type } }, shouldSetInitialValue = false) => {
      let inputValue = value;
      if (["text", "textarea", "string", "email", "uid", "select", "select-one", "number"].includes(
        type
      ) && !value && value !== 0) {
        inputValue = null;
      }
      if (type === "password" && !value) {
        dispatch({
          type: "REMOVE_PASSWORD_FIELD",
          keys: name.split(".")
        });
        return;
      }
      dispatch({
        type: "ON_CHANGE",
        keys: name.split("."),
        value: inputValue,
        shouldSetInitialValue
      });
    },
    []
  );
  const createFormData = (0,react.useCallback)(
    (modifiedData2, initialData2) => {
      const cleanedData = utils_cleanData(
        { browserState: modifiedData2, serverState: initialData2 },
        currentContentTypeLayout,
        allLayoutData.components
      );
      return cleanedData;
    },
    [allLayoutData.components, currentContentTypeLayout]
  );
  const trackerProperty = (0,react.useMemo)(() => {
    if (!hasDraftAndPublish) {
      return {};
    }
    return shouldNotRunValidations ? { status: "draft" } : {};
  }, [hasDraftAndPublish, shouldNotRunValidations]);
  const handlePublishPromptDismissal = (0,react.useCallback)(async (e) => {
    e.preventDefault();
    return dispatch({
      type: "RESET_PUBLISH_CONFIRMATION"
    });
  }, []);
  const handleSubmit = (0,react.useCallback)(
    async (e) => {
      e.preventDefault();
      let errors = {};
      try {
        await yupSchema.validate(modifiedData, { abortEarly: false });
      } catch (err) {
        errors = (0,dist/* getYupInnerErrors */.CJ)(err);
      }
      try {
        if (isEmpty_default()(errors)) {
          const formData = createFormData(modifiedData, initialData);
          (0,react_dom.flushSync)(() => {
            setIsSaving(true);
          });
          if (isCreatingEntry) {
            await onPost(formData, trackerProperty);
          } else {
            await onPut(formData, trackerProperty);
          }
          setIsSaving(false);
        }
      } catch (err) {
        setIsSaving(false);
        errors = {
          ...errors,
          ...(0,dist/* getAPIInnerErrors */.nn)(err, { getTrad: utils/* getTrad */.OB })
        };
      }
      dispatch({
        type: "SET_FORM_ERRORS",
        errors
      });
    },
    [
      createFormData,
      isCreatingEntry,
      modifiedData,
      initialData,
      onPost,
      onPut,
      trackerProperty,
      yupSchema
    ]
  );
  const handlePublish = (0,react.useCallback)(async () => {
    const schema = (0,utils/* createYupSchema */.Ex)(
      currentContentTypeLayout,
      {
        components: get_default()(allLayoutData, "components", {})
      },
      { isCreatingEntry, isDraft: false, isFromComponent: false }
    );
    const draftCount = await onDraftRelationCheck();
    if (!publishConfirmation.show && draftCount > 0) {
      dispatch({
        type: "SET_PUBLISH_CONFIRMATION",
        publishConfirmation: {
          show: true,
          draftCount
        }
      });
      return;
    }
    dispatch({
      type: "RESET_PUBLISH_CONFIRMATION"
    });
    let errors = {};
    try {
      await schema.validate(modifiedData, { abortEarly: false });
    } catch (err) {
      errors = (0,dist/* getYupInnerErrors */.CJ)(err);
    }
    try {
      if (isEmpty_default()(errors)) {
        (0,react_dom.flushSync)(() => {
          setIsSaving(true);
        });
        await onPublish();
        setIsSaving(false);
      }
    } catch (err) {
      setIsSaving(false);
      errors = {
        ...errors,
        ...(0,dist/* getAPIInnerErrors */.nn)(err, { getTrad: utils/* getTrad */.OB })
      };
    }
    dispatch({
      type: "SET_FORM_ERRORS",
      errors
    });
  }, [
    allLayoutData,
    currentContentTypeLayout,
    isCreatingEntry,
    modifiedData,
    publishConfirmation.show,
    onPublish,
    onDraftRelationCheck
  ]);
  const shouldCheckDZErrors = (0,react.useCallback)(
    (dzName) => {
      const doesDZHaveError = Object.keys(formErrors).some((key) => key.split(".")[0] === dzName);
      const shouldCheckErrors2 = !isEmpty_default()(formErrors) && doesDZHaveError;
      return shouldCheckErrors2;
    },
    [formErrors]
  );
  const moveComponentDown = (0,react.useCallback)(
    (dynamicZoneName, currentIndex) => {
      trackUsageRef.current("changeComponentsOrder");
      dispatch({
        type: "MOVE_COMPONENT_DOWN",
        dynamicZoneName,
        currentIndex,
        shouldCheckErrors: shouldCheckDZErrors(dynamicZoneName)
      });
    },
    [shouldCheckDZErrors]
  );
  const moveComponentUp = (0,react.useCallback)(
    (dynamicZoneName, currentIndex) => {
      trackUsageRef.current("changeComponentsOrder");
      dispatch({
        type: "MOVE_COMPONENT_UP",
        dynamicZoneName,
        currentIndex,
        shouldCheckErrors: shouldCheckDZErrors(dynamicZoneName)
      });
    },
    [shouldCheckDZErrors]
  );
  const moveComponentField = (0,react.useCallback)(({ name, newIndex, currentIndex }) => {
    dispatch({
      type: "MOVE_COMPONENT_FIELD",
      keys: name.split("."),
      newIndex,
      oldIndex: currentIndex
    });
  }, []);
  const relationDisconnect = (0,react.useCallback)(({ name, id }) => {
    dispatch({
      type: "DISCONNECT_RELATION",
      keys: name.split("."),
      id
    });
  }, []);
  const relationReorder = (0,react.useCallback)(({ name, oldIndex, newIndex }) => {
    dispatch({
      type: "REORDER_RELATION",
      keys: name.split("."),
      oldIndex,
      newIndex
    });
  }, []);
  const removeComponentFromDynamicZone = (0,react.useCallback)(
    (dynamicZoneName, index) => {
      trackUsageRef.current("removeComponentFromDynamicZone");
      dispatch({
        type: "REMOVE_COMPONENT_FROM_DYNAMIC_ZONE",
        dynamicZoneName,
        index,
        shouldCheckErrors: shouldCheckDZErrors(dynamicZoneName)
      });
    },
    [shouldCheckDZErrors]
  );
  const removeComponentFromField = (0,react.useCallback)((keys, componentUid) => {
    dispatch({
      type: "REMOVE_COMPONENT_FROM_FIELD",
      keys: keys.split("."),
      componentUid
    });
  }, []);
  const removeRepeatableField = (0,react.useCallback)((keys, componentUid) => {
    dispatch({
      type: "REMOVE_REPEATABLE_FIELD",
      keys: keys.split("."),
      componentUid
    });
  }, []);
  const triggerFormValidation = (0,react.useCallback)(() => {
    dispatch({
      type: "TRIGGER_FORM_VALIDATION"
    });
  }, []);
  if (shouldRedirectToHomepageWhenEditingEntry) {
    return /* @__PURE__ */ react.createElement(react_router/* Redirect */.l_, { to: from });
  }
  if (!modifiedData) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(
    dist/* ContentManagerEditViewDataManagerContext */.W1.Provider,
    {
      value: {
        addComponentToDynamicZone,
        addNonRepeatableComponentToField,
        addRepeatableComponentToField,
        allLayoutData,
        checkFormErrors,
        createActionAllowedFields,
        formErrors,
        hasDraftAndPublish,
        initialData,
        isCreatingEntry,
        isSingleType,
        shouldNotRunValidations,
        status,
        layout: currentContentTypeLayout,
        modifiedData,
        moveComponentField,
        /**
         * @deprecated use `moveComponentField` instead. This will be removed in v5.
         */
        moveComponentDown,
        /**
         * @deprecated use `moveComponentField` instead. This will be removed in v5.
         */
        moveComponentUp,
        onChange: handleChange,
        onPublish: handlePublish,
        onUnpublish,
        readActionAllowedFields,
        redirectToPreviousPage,
        removeComponentFromDynamicZone,
        removeComponentFromField,
        removeRepeatableField,
        relationConnect,
        relationDisconnect,
        relationLoad,
        relationReorder,
        slug,
        triggerFormValidation,
        updateActionAllowedFields,
        onPublishPromptDismissal: handlePublishPromptDismissal,
        publishConfirmation
      }
    },
    isLoadingForData || !isCreatingEntry && !initialData.id ? /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": "true" }, /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null)) : /* @__PURE__ */ react.createElement(react.Fragment, null, !isSaving ? /* @__PURE__ */ react.createElement(
      react_router/* Prompt */.NL,
      {
        when: !isEqual_default()(modifiedData, initialData),
        message: formatMessage({ id: "global.prompt.unsaved" })
      }
    ) : null, /* @__PURE__ */ react.createElement("form", { noValidate: true, onSubmit: handleSubmit }, children))
  );
};
EditViewDataManagerProvider.defaultProps = {
  from: "/",
  initialValues: null,
  redirectToPreviousPage() {
  }
};
EditViewDataManagerProvider.propTypes = {
  allLayoutData: (prop_types_default()).object.isRequired,
  allowedActions: (prop_types_default()).object.isRequired,
  children: (prop_types_default()).node.isRequired,
  componentsDataStructure: (prop_types_default()).object.isRequired,
  contentTypeDataStructure: (prop_types_default()).object.isRequired,
  createActionAllowedFields: (prop_types_default()).array.isRequired,
  from: (prop_types_default()).string,
  initialValues: (prop_types_default()).object,
  isCreatingEntry: (prop_types_default()).bool.isRequired,
  isLoadingForData: (prop_types_default()).bool.isRequired,
  isSingleType: (prop_types_default()).bool.isRequired,
  onPost: (prop_types_default()).func.isRequired,
  onPublish: (prop_types_default()).func.isRequired,
  onDraftRelationCheck: (prop_types_default()).func.isRequired,
  onPut: (prop_types_default()).func.isRequired,
  onUnpublish: (prop_types_default()).func.isRequired,
  readActionAllowedFields: (prop_types_default()).array.isRequired,
  redirectToPreviousPage: (prop_types_default()).func,
  slug: (prop_types_default()).string.isRequired,
  status: (prop_types_default()).string.isRequired,
  updateActionAllowedFields: (prop_types_default()).array.isRequired
};
/* harmony default export */ const components_EditViewDataManagerProvider = (EditViewDataManagerProvider);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/utils/buildValidGetParams.js
const createPluginsFilter = (obj = {}) => Object.values(obj).reduce((acc, current) => Object.assign(acc, current), {});
const buildValidGetParams = (query = {}) => {
  const {
    plugins: _,
    _q: searchQuery,
    ...validQueryParams
  } = {
    ...query,
    ...createPluginsFilter(query.plugins)
  };
  if (searchQuery) {
    validQueryParams._q = encodeURIComponent(searchQuery);
  }
  return validQueryParams;
};
/* harmony default export */ const utils_buildValidGetParams = (buildValidGetParams);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/SingleTypeFormWrapper/index.js












const SingleTypeFormWrapper = ({ allLayoutData, children, slug }) => {
  const queryClient = (0,react_query_es.useQueryClient)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const { push } = (0,react_router/* useHistory */.k6)();
  const { setCurrentStep } = (0,dist/* useGuidedTour */.c1)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const [isCreatingEntry, setIsCreatingEntry] = (0,react.useState)(true);
  const [{ query, rawQuery }] = (0,dist/* useQueryParams */.Kx)();
  const params = (0,react.useMemo)(() => utils_buildValidGetParams(query), [query]);
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const dispatch = (0,es/* useDispatch */.I0)();
  const { formatAPIError } = (0,dist/* useAPIErrorHandler */.So)(utils/* getTrad */.OB);
  const fetchClient = (0,dist/* useFetchClient */.kY)();
  const { post, put, del } = fetchClient;
  const { componentsDataStructure, contentTypeDataStructure, data, isLoading, status } = (0,es/* useSelector */.v9)(crudReducer_selectors);
  const cleanReceivedData = (0,react.useCallback)(
    (data2) => {
      const cleaned = (0,utils/* removePasswordFieldsFromData */.kc)(
        data2,
        allLayoutData.contentType,
        allLayoutData.components
      );
      return (0,dist/* formatContentTypeData */.dU)(cleaned, allLayoutData.contentType, allLayoutData.components);
    },
    [allLayoutData]
  );
  (0,react.useEffect)(() => {
    return () => {
      dispatch(actions_resetProps());
    };
  }, [dispatch]);
  (0,react.useEffect)(() => {
    const componentsDataStructure2 = Object.keys(allLayoutData.components).reduce((acc, current) => {
      const defaultComponentForm = (0,utils/* createDefaultForm */.Di)(
        get_default()(allLayoutData, ["components", current, "attributes"], {}),
        allLayoutData.components
      );
      acc[current] = (0,dist/* formatContentTypeData */.dU)(
        defaultComponentForm,
        allLayoutData.components[current],
        allLayoutData.components
      );
      return acc;
    }, {});
    const contentTypeDataStructure2 = (0,utils/* createDefaultForm */.Di)(
      allLayoutData.contentType.attributes,
      allLayoutData.components
    );
    const contentTypeDataStructureFormatted = (0,dist/* formatContentTypeData */.dU)(
      contentTypeDataStructure2,
      allLayoutData.contentType,
      allLayoutData.components
    );
    dispatch(setDataStructures(componentsDataStructure2, contentTypeDataStructureFormatted));
  }, [allLayoutData, dispatch]);
  (0,react.useEffect)(() => {
    const CancelToken = axios["default"].CancelToken;
    const source = CancelToken.source();
    const fetchData = async (source2) => {
      dispatch(getData());
      setIsCreatingEntry(true);
      try {
        const { data: data2 } = await fetchClient.get(`/content-manager/single-types/${slug}`, {
          cancelToken: source2.token,
          params
        });
        dispatch(getDataSucceeded(cleanReceivedData(data2)));
        setIsCreatingEntry(false);
      } catch (err) {
        if (axios["default"].isCancel(err)) {
          return;
        }
        const responseStatus = get_default()(err, "response.status", null);
        if (responseStatus === 404) {
          dispatch(initForm(rawQuery, true));
        }
        if (responseStatus === 403) {
          toggleNotification({
            type: "info",
            message: { id: (0,utils/* getTrad */.OB)("permissions.not-allowed.update") }
          });
          push("/");
        }
      }
    };
    fetchData(source);
    return () => source.cancel("Operation canceled by the user.");
  }, [fetchClient, cleanReceivedData, push, slug, dispatch, params, rawQuery, toggleNotification]);
  const displayErrors = (0,react.useCallback)(
    (err) => {
      toggleNotification({ type: "warning", message: formatAPIError(err) });
    },
    [toggleNotification, formatAPIError]
  );
  const onDelete = (0,react.useCallback)(
    async (trackerProperty) => {
      try {
        trackUsageRef.current("willDeleteEntry", trackerProperty);
        const { data: data2 } = await del(`/content-manager/single-types/${slug}`, {
          params
        });
        toggleNotification({
          type: "success",
          message: { id: (0,utils/* getTrad */.OB)("success.record.delete") }
        });
        trackUsageRef.current("didDeleteEntry", trackerProperty);
        setIsCreatingEntry(true);
        dispatch(initForm(rawQuery, true));
        return Promise.resolve(data2);
      } catch (err) {
        trackUsageRef.current("didNotDeleteEntry", { error: err, ...trackerProperty });
        displayErrors(err);
        return Promise.reject(err);
      }
    },
    [del, slug, params, toggleNotification, dispatch, rawQuery, displayErrors]
  );
  const onPost = (0,react.useCallback)(
    async (body, trackerProperty) => {
      const endPoint = `/content-manager/single-types/${slug}`;
      try {
        dispatch(setStatus("submit-pending"));
        const { data: data2 } = await put(endPoint, body, { params: query });
        trackUsageRef.current("didCreateEntry", trackerProperty);
        toggleNotification({
          type: "success",
          message: { id: (0,utils/* getTrad */.OB)("success.record.save") }
        });
        setCurrentStep("contentManager.success");
        queryClient.invalidateQueries(["relation"]);
        dispatch(submitSucceeded(cleanReceivedData(data2)));
        setIsCreatingEntry(false);
        dispatch(setStatus("resolved"));
        return Promise.resolve(data2);
      } catch (err) {
        trackUsageRef.current("didNotCreateEntry", { error: err, trackerProperty });
        displayErrors(err);
        dispatch(setStatus("resolved"));
        return Promise.reject(err);
      }
    },
    [
      put,
      cleanReceivedData,
      displayErrors,
      slug,
      dispatch,
      query,
      toggleNotification,
      setCurrentStep,
      queryClient
    ]
  );
  const onDraftRelationCheck = (0,react.useCallback)(async () => {
    try {
      trackUsageRef.current("willCheckDraftRelations");
      const endPoint = `/content-manager/single-types/${slug}/actions/countDraftRelations`;
      dispatch(setStatus("draft-relation-check-pending"));
      const numberOfDraftRelations = await fetchClient.get(endPoint);
      trackUsageRef.current("didCheckDraftRelations");
      dispatch(setStatus("resolved"));
      return numberOfDraftRelations.data.data;
    } catch (err) {
      displayErrors(err);
      dispatch(setStatus("resolved"));
      return Promise.reject(err);
    }
  }, [fetchClient, displayErrors, slug, dispatch]);
  const onPublish = (0,react.useCallback)(async () => {
    try {
      trackUsageRef.current("willPublishEntry");
      const endPoint = `/content-manager/single-types/${slug}/actions/publish`;
      dispatch(setStatus("publish-pending"));
      const { data: data2 } = await post(
        endPoint,
        {},
        {
          params
        }
      );
      trackUsageRef.current("didPublishEntry");
      toggleNotification({
        type: "success",
        message: { id: (0,utils/* getTrad */.OB)("success.record.publish") }
      });
      dispatch(submitSucceeded(cleanReceivedData(data2)));
      dispatch(setStatus("resolved"));
      return Promise.resolve(data2);
    } catch (err) {
      displayErrors(err);
      dispatch(setStatus("resolved"));
      return Promise.reject(err);
    }
  }, [slug, dispatch, post, params, toggleNotification, cleanReceivedData, displayErrors]);
  const onPut = (0,react.useCallback)(
    async (body, trackerProperty) => {
      const endPoint = `/content-manager/single-types/${slug}`;
      try {
        trackUsageRef.current("willEditEntry", trackerProperty);
        dispatch(setStatus("submit-pending"));
        const { data: data2 } = await put(endPoint, body, { params: query });
        toggleNotification({
          type: "success",
          message: { id: (0,utils/* getTrad */.OB)("success.record.save") }
        });
        trackUsageRef.current("didEditEntry", { trackerProperty });
        queryClient.invalidateQueries(["relation"]);
        dispatch(submitSucceeded(cleanReceivedData(data2)));
        dispatch(setStatus("resolved"));
        return Promise.resolve(data2);
      } catch (err) {
        displayErrors(err);
        trackUsageRef.current("didNotEditEntry", { error: err, trackerProperty });
        dispatch(setStatus("resolved"));
        return Promise.reject(err);
      }
    },
    [put, cleanReceivedData, displayErrors, slug, dispatch, query, toggleNotification, queryClient]
  );
  const onUnpublish = (0,react.useCallback)(async () => {
    const endPoint = `/content-manager/single-types/${slug}/actions/unpublish`;
    dispatch(setStatus("unpublish-pending"));
    try {
      trackUsageRef.current("willUnpublishEntry");
      const { data: data2 } = await post(
        endPoint,
        {},
        {
          params
        }
      );
      trackUsageRef.current("didUnpublishEntry");
      toggleNotification({
        type: "success",
        message: { id: (0,utils/* getTrad */.OB)("success.record.unpublish") }
      });
      dispatch(submitSucceeded(cleanReceivedData(data2)));
      dispatch(setStatus("resolved"));
    } catch (err) {
      dispatch(setStatus("resolved"));
      displayErrors(err);
    }
  }, [slug, dispatch, post, params, toggleNotification, cleanReceivedData, displayErrors]);
  return children({
    componentsDataStructure,
    contentTypeDataStructure,
    data,
    isCreatingEntry,
    isLoadingForData: isLoading,
    onDelete,
    onPost,
    onDraftRelationCheck,
    onPublish,
    onPut,
    onUnpublish,
    redirectionLink: "/",
    status
  });
};
SingleTypeFormWrapper.propTypes = {
  allLayoutData: prop_types_default().shape({
    components: (prop_types_default()).object.isRequired,
    contentType: (prop_types_default()).object.isRequired
  }).isRequired,
  children: (prop_types_default()).func.isRequired,
  slug: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_SingleTypeFormWrapper = ((0,react.memo)(SingleTypeFormWrapper));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DeleteLink/utils/connect.js

function DeleteLink_utils_connect_connect(WrappedComponent, select) {
  return (props) => {
    const selectors = select();
    return /* @__PURE__ */ react.createElement(WrappedComponent, { ...props, ...selectors });
  };
}
/* harmony default export */ const DeleteLink_utils_connect = (DeleteLink_utils_connect_connect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DeleteLink/utils/select.js


function DeleteLink_utils_select_useSelect() {
  const { hasDraftAndPublish, modifiedData } = (0,dist/* useCMEditViewDataManager */.Wq)();
  let trackerProperty = {};
  if (hasDraftAndPublish) {
    const isDraft = isEmpty_default()(modifiedData.publishedAt);
    trackerProperty = isDraft ? { status: "draft" } : { status: "published" };
  }
  return {
    hasDraftAndPublish,
    trackerProperty
  };
}
/* harmony default export */ const DeleteLink_utils_select = (DeleteLink_utils_select_useSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DeleteLink/utils/index.js



;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DeleteLink/index.js









const DeleteLink = ({ onDelete, trackerProperty }) => {
  const [displayDeleteConfirmation, setDisplayDeleteConfirmation] = (0,react.useState)(false);
  const [isModalConfirmButtonLoading, setIsModalConfirmButtonLoading] = (0,react.useState)(false);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { formatAPIError } = (0,dist/* useAPIErrorHandler */.So)(utils/* getTrad */.OB);
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const toggleWarningDelete = () => setDisplayDeleteConfirmation((prevState) => !prevState);
  const handleConfirmDelete = async () => {
    try {
      setIsModalConfirmButtonLoading(true);
      await onDelete(trackerProperty);
      setIsModalConfirmButtonLoading(false);
      toggleWarningDelete();
    } catch (err) {
      setIsModalConfirmButtonLoading(false);
      toggleWarningDelete();
      toggleNotification({
        type: "warning",
        message: formatAPIError(err)
      });
    }
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: toggleWarningDelete, size: "S", startIcon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null), variant: "danger-light" }, formatMessage({
    id: (0,utils/* getTrad */.OB)("containers.Edit.delete-entry"),
    defaultMessage: "Delete this entry"
  })), /* @__PURE__ */ react.createElement(
    dist/* ConfirmDialog */.QH,
    {
      isConfirmButtonLoading: isModalConfirmButtonLoading,
      isOpen: displayDeleteConfirmation,
      onConfirm: handleConfirmDelete,
      onToggleDialog: toggleWarningDelete
    }
  ));
};
DeleteLink.propTypes = {
  onDelete: (prop_types_default()).func.isRequired,
  trackerProperty: (prop_types_default()).object.isRequired
};
const DeleteLink_Memoized = (0,react.memo)(DeleteLink, (isEqual_default()));
/* harmony default export */ const EditView_DeleteLink = (DeleteLink_utils_connect(DeleteLink_Memoized, DeleteLink_utils_select));

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Dot.mjs
var Dot = __webpack_require__(79830);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DraftAndPublishBadge/utils/connect.js

function DraftAndPublishBadge_utils_connect_connect(WrappedComponent, select) {
  return (props) => {
    const selectors = select();
    return /* @__PURE__ */ react.createElement(WrappedComponent, { ...props, ...selectors });
  };
}
/* harmony default export */ const DraftAndPublishBadge_utils_connect = (DraftAndPublishBadge_utils_connect_connect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DraftAndPublishBadge/utils/select.js

function DraftAndPublishBadge_utils_select_useSelect() {
  const { initialData, hasDraftAndPublish } = (0,dist/* useCMEditViewDataManager */.Wq)();
  const isPublished = initialData.publishedAt !== void 0 && initialData.publishedAt !== null;
  return {
    hasDraftAndPublish,
    isPublished
  };
}
/* harmony default export */ const DraftAndPublishBadge_utils_select = (DraftAndPublishBadge_utils_select_useSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DraftAndPublishBadge/utils/index.js



;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DraftAndPublishBadge/index.js









const CustomBullet = (0,styled_components_browser_esm/* default */.ZP)((0,Dot/* default */.Z))`
  width: ${(0,dist/* pxToRem */.Q1)(6)};
  height: ${(0,dist/* pxToRem */.Q1)(6)};
  * {
    fill: ${({ theme, $bulletColor }) => theme.colors[$bulletColor]};
  }
`;
const DraftAndPublishBadge = ({ hasDraftAndPublish, isPublished }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  if (!hasDraftAndPublish) {
    return null;
  }
  const colors = {
    draft: {
      textColor: "secondary700",
      bulletColor: "secondary600",
      box: {
        background: "secondary100",
        borderColor: "secondary200"
      }
    },
    published: {
      textColor: "success700",
      bulletColor: "success600",
      box: {
        background: "success100",
        borderColor: "success200"
      }
    }
  };
  const colorProps = isPublished ? colors.published : colors.draft;
  return /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      hasRadius: true,
      as: "aside",
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: 5,
      paddingRight: 5,
      ...colorProps.box
    },
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { as: Flex/* Flex */.k }, /* @__PURE__ */ react.createElement(CustomBullet, { $bulletColor: colorProps.bulletColor }), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 3 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: colorProps.textColor }, formatMessage({
      id: (0,utils/* getTrad */.OB)("containers.Edit.information.editing"),
      defaultMessage: "Editing"
    }), "\xA0"), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: colorProps.textColor }, isPublished && formatMessage({
      id: (0,utils/* getTrad */.OB)("containers.Edit.information.publishedVersion"),
      defaultMessage: "published version"
    }), !isPublished && formatMessage({
      id: (0,utils/* getTrad */.OB)("containers.Edit.information.draftVersion"),
      defaultMessage: "draft version"
    }))))
  );
};
DraftAndPublishBadge.propTypes = {
  hasDraftAndPublish: (prop_types_default()).bool.isRequired,
  isPublished: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const EditView_DraftAndPublishBadge = (DraftAndPublishBadge_utils_connect(DraftAndPublishBadge, DraftAndPublishBadge_utils_select));


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/GridRow/index.js





const GridRow = ({ columns, customFieldInputs }) => {
  return /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, columns.map(({ fieldSchema, labelAction, metadatas, name, size, queryInfos }) => {
    const isComponent = fieldSchema.type === "component";
    if (isComponent) {
      const { component, max, min, repeatable = false, required = false } = fieldSchema;
      return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: size, s: 12, xs: 12, key: component }, /* @__PURE__ */ react.createElement(
        components_FieldComponent,
        {
          componentUid: component,
          labelAction,
          isRepeatable: repeatable,
          intlLabel: {
            id: metadatas.label,
            defaultMessage: metadatas.label
          },
          max,
          min,
          name,
          required
        }
      ));
    }
    return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: size, key: name, s: 12, xs: 12 }, /* @__PURE__ */ react.createElement(
      components_Inputs,
      {
        size,
        fieldSchema,
        keys: name,
        labelAction,
        metadatas,
        queryInfos,
        customFieldInputs
      }
    ));
  }));
};
GridRow.defaultProps = {
  customFieldInputs: {}
};
GridRow.propTypes = {
  columns: (prop_types_default()).array.isRequired,
  customFieldInputs: (prop_types_default()).object
};
/* harmony default export */ const EditView_GridRow = (GridRow);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Dialog/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(73124);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Dialog/DialogBody.mjs
var DialogBody = __webpack_require__(46104);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Dialog/DialogFooter.mjs
var DialogFooter = __webpack_require__(8331);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/Header/utils/connect.js

function Header_utils_connect_connect(WrappedComponent, select) {
  return (props) => {
    const selectors = select();
    return /* @__PURE__ */ react.createElement(WrappedComponent, { ...props, ...selectors });
  };
}
/* harmony default export */ const Header_utils_connect = (Header_utils_connect_connect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/Header/utils/select.js

function Header_utils_select_useSelect() {
  const {
    initialData,
    isCreatingEntry,
    isSingleType,
    status,
    layout,
    hasDraftAndPublish,
    modifiedData,
    onPublish,
    onUnpublish,
    publishConfirmation,
    onPublishPromptDismissal
  } = (0,dist/* useCMEditViewDataManager */.Wq)();
  return {
    initialData,
    isCreatingEntry,
    isSingleType,
    status,
    layout,
    hasDraftAndPublish,
    modifiedData,
    onPublish,
    onUnpublish,
    publishConfirmation,
    onPublishPromptDismissal
  };
}
/* harmony default export */ const Header_utils_select = (Header_utils_select_useSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/Header/utils/index.js



;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/Header/index.js














const FlexTextAlign = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  text-align: center;
`;
const Header = ({
  allowedActions: { canUpdate, canCreate, canPublish },
  initialData,
  isCreatingEntry,
  isSingleType,
  hasDraftAndPublish,
  layout,
  modifiedData,
  onPublish,
  onUnpublish,
  status,
  publishConfirmation: { show: showPublishConfirmation, draftCount },
  onPublishPromptDismissal
}) => {
  const { goBack } = (0,react_router/* useHistory */.k6)();
  const [showWarningUnpublish, setWarningUnpublish] = (0,react.useState)(false);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const currentContentTypeMainField = get_default()(layout, ["settings", "mainField"], "id");
  const currentContentTypeName = get_default()(layout, ["info", "displayName"], "NOT FOUND");
  const didChangeData = !isEqual_default()(initialData, modifiedData) || isCreatingEntry && !isEmpty_default()(modifiedData);
  const createEntryIntlTitle = formatMessage({
    id: (0,utils/* getTrad */.OB)("containers.Edit.pluginHeader.title.new"),
    defaultMessage: "Create an entry"
  });
  let title = createEntryIntlTitle;
  if (!isCreatingEntry && !isSingleType) {
    title = initialData[currentContentTypeMainField] || currentContentTypeName;
  }
  if (isSingleType) {
    title = currentContentTypeName;
  }
  let primaryAction = null;
  if (isCreatingEntry && canCreate) {
    primaryAction = /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2 }, hasDraftAndPublish && /* @__PURE__ */ react.createElement(Button/* Button */.z, { disabled: true, startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null), variant: "secondary" }, formatMessage({ id: "app.utils.publish", defaultMessage: "Publish" })), /* @__PURE__ */ react.createElement(Button/* Button */.z, { disabled: !didChangeData, loading: status === "submit-pending", type: "submit" }, formatMessage({
      id: (0,utils/* getTrad */.OB)("containers.Edit.submit"),
      defaultMessage: "Save"
    })));
  }
  if (!isCreatingEntry && canUpdate) {
    const shouldShowPublishButton = hasDraftAndPublish && canPublish;
    const isPublished = !isEmpty_default()(initialData.publishedAt);
    const isPublishButtonLoading = isPublished ? status === "unpublish-pending" : status === "publish-pending";
    const pubishButtonLabel = isPublished ? { id: "app.utils.unpublish", defaultMessage: "Unpublish" } : { id: "app.utils.publish", defaultMessage: "Publish" };
    const onClick = isPublished ? () => setWarningUnpublish(true) : () => onPublish();
    primaryAction = /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, shouldShowPublishButton && /* @__PURE__ */ react.createElement(
      Button/* Button */.z,
      {
        disabled: didChangeData,
        loading: isPublishButtonLoading,
        onClick,
        startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
        variant: "secondary"
      },
      formatMessage(pubishButtonLabel)
    ), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: shouldShowPublishButton ? 2 : 0 }, /* @__PURE__ */ react.createElement(Button/* Button */.z, { disabled: !didChangeData, loading: status === "submit-pending", type: "submit" }, formatMessage({
      id: (0,utils/* getTrad */.OB)("containers.Edit.submit"),
      defaultMessage: "Save"
    }))));
  }
  const toggleWarningUnpublish = () => setWarningUnpublish((prevState) => !prevState);
  const handleUnpublish = () => {
    toggleWarningUnpublish();
    onUnpublish();
  };
  const subtitle = `${formatMessage({
    id: (0,utils/* getTrad */.OB)("api.id"),
    defaultMessage: "API ID "
  })} : ${layout.apiID}`;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: title.toString(),
      primaryAction,
      subtitle,
      navigationAction: /* @__PURE__ */ react.createElement(
        dist/* Link */.rU,
        {
          startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null),
          onClick: (e) => {
            e.preventDefault();
            goBack();
          },
          to: "/"
        },
        formatMessage({
          id: "global.back",
          defaultMessage: "Back"
        })
      )
    }
  ), /* @__PURE__ */ react.createElement(
    Dialog/* Dialog */.V,
    {
      onClose: toggleWarningUnpublish,
      title: "Confirmation",
      labelledBy: "confirmation",
      describedBy: "confirm-description",
      isOpen: showWarningUnpublish
    },
    /* @__PURE__ */ react.createElement(DialogBody/* DialogBody */.a, { icon: /* @__PURE__ */ react.createElement(ExclamationMarkCircle/* default */.Z, null) }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center", style: { textAlign: "center" } }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { id: "confirm-description" }, formatMessage(
      {
        id: (0,utils/* getTrad */.OB)("popUpWarning.warning.unpublish"),
        defaultMessage: "Unpublish this content will automatically change it to a draft."
      },
      {
        br: () => /* @__PURE__ */ react.createElement("br", null)
      }
    ))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center", style: { textAlign: "center" } }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { id: "confirm-description" }, formatMessage({
      id: (0,utils/* getTrad */.OB)("popUpWarning.warning.unpublish-question"),
      defaultMessage: "Are you sure you want to unpublish it?"
    }))))),
    /* @__PURE__ */ react.createElement(
      DialogFooter/* DialogFooter */.c,
      {
        startAction: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: toggleWarningUnpublish, variant: "tertiary" }, formatMessage({
          id: "components.popUpWarning.button.cancel",
          defaultMessage: "Cancel"
        })),
        endAction: /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "danger-light", onClick: handleUnpublish }, formatMessage({
          id: "components.popUpWarning.button.confirm",
          defaultMessage: "Confirm"
        }))
      }
    )
  ), /* @__PURE__ */ react.createElement(
    Dialog/* Dialog */.V,
    {
      onClose: onPublishPromptDismissal,
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)(`popUpWarning.warning.has-draft-relations.title`),
        defaultMessage: "Confirmation"
      }),
      labelledBy: "confirmation",
      describedBy: "confirm-description",
      isOpen: showPublishConfirmation
    },
    /* @__PURE__ */ react.createElement(DialogBody/* DialogBody */.a, { icon: /* @__PURE__ */ react.createElement(ExclamationMarkCircle/* default */.Z, null) }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(FlexTextAlign, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { id: "confirm-description" }, draftCount, formatMessage(
      {
        id: (0,utils/* getTrad */.OB)(`popUpwarning.warning.has-draft-relations.message`),
        defaultMessage: "<b>{count, plural, one { relation is} other { relations are}}</b> not published yet and might lead to unexpected behavior."
      },
      {
        b: (chunks) => /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold" }, chunks),
        count: draftCount
      }
    ))), /* @__PURE__ */ react.createElement(FlexTextAlign, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { id: "confirm-description" }, formatMessage({
      id: (0,utils/* getTrad */.OB)("popUpWarning.warning.publish-question"),
      defaultMessage: "Do you still want to publish?"
    }))))),
    /* @__PURE__ */ react.createElement(
      DialogFooter/* DialogFooter */.c,
      {
        startAction: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: onPublishPromptDismissal, variant: "tertiary" }, formatMessage({
          id: "components.popUpWarning.button.cancel",
          defaultMessage: "Cancel"
        })),
        endAction: /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "success", onClick: onPublish }, formatMessage({
          id: (0,utils/* getTrad */.OB)("popUpwarning.warning.has-draft-relations.button-confirm"),
          defaultMessage: "Publish"
        }))
      }
    )
  ));
};
Header.propTypes = {
  allowedActions: prop_types_default().shape({
    canUpdate: (prop_types_default()).bool.isRequired,
    canCreate: (prop_types_default()).bool.isRequired,
    canPublish: (prop_types_default()).bool.isRequired
  }).isRequired,
  initialData: (prop_types_default()).object.isRequired,
  isCreatingEntry: (prop_types_default()).bool.isRequired,
  isSingleType: (prop_types_default()).bool.isRequired,
  status: (prop_types_default()).string.isRequired,
  layout: (prop_types_default()).object.isRequired,
  hasDraftAndPublish: (prop_types_default()).bool.isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  onPublish: (prop_types_default()).func.isRequired,
  onUnpublish: (prop_types_default()).func.isRequired,
  publishConfirmation: prop_types_default().shape({
    show: (prop_types_default()).bool.isRequired,
    draftCount: (prop_types_default()).number.isRequired
  }).isRequired,
  onPublishPromptDismissal: (prop_types_default()).func.isRequired
};
const Header_Memoized = (0,react.memo)(Header, (isEqual_default()));
/* harmony default export */ const EditView_Header = (Header_utils_connect(Header_Memoized, Header_utils_select));


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/hooks/useOnce.js

const useOnce = (effect) => (0,react.useEffect)(effect, emptyDeps);
const emptyDeps = [];

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/pages/EditView/Information/index.js + 1 modules
var EditView_Information = __webpack_require__(50236);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/InformationBox/InformationBoxCE.js


function InformationBoxCE() {
  return /* @__PURE__ */ react.createElement(EditView_Information/* Information */.d.Root, null, /* @__PURE__ */ react.createElement(EditView_Information/* Information */.d.Title, null), /* @__PURE__ */ react.createElement(EditView_Information/* Information */.d.Body, null));
}

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/InformationBox/index.js


// EXTERNAL MODULE: ./node_modules/reselect/es/index.js + 1 modules
var reselect_es = __webpack_require__(57150);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/utils/createAttributesLayout.js


const createAttributesLayout = (currentContentTypeLayoutData) => {
  if (!currentContentTypeLayoutData.layouts) {
    return [];
  }
  const currentLayout = currentContentTypeLayoutData.layouts.edit;
  const attributes = currentContentTypeLayoutData.attributes;
  const getType = (name) => get_default()(attributes, [name, "type"], "");
  let currentRowIndex = 0;
  const newLayout = [];
  currentLayout.forEach((row) => {
    const hasDynamicZone = row.some(({ name }) => getType(name) === "dynamiczone");
    if (!newLayout[currentRowIndex]) {
      newLayout[currentRowIndex] = [];
    }
    if (hasDynamicZone) {
      currentRowIndex = currentRowIndex === 0 && isEmpty_default()(newLayout[0]) ? 0 : currentRowIndex + 1;
      if (!newLayout[currentRowIndex]) {
        newLayout[currentRowIndex] = [];
      }
      newLayout[currentRowIndex].push(row);
      currentRowIndex += 1;
    } else {
      newLayout[currentRowIndex].push(row);
    }
  });
  return newLayout.filter((arr) => arr.length > 0);
};
/* harmony default export */ const utils_createAttributesLayout = (createAttributesLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/utils/getCustomFieldUidsFromLayout.js
const getCustomFieldUidsFromLayout = (layout) => {
  if (!layout)
    return [];
  const allFields = [
    ...layout.contentType.layouts.edit,
    ...Object.values(layout.components).flatMap((component) => component.layouts.edit)
  ].flat();
  const customFieldUids = allFields.filter((field) => field.fieldSchema.customField).map((customField) => customField.fieldSchema.customField);
  const uniqueCustomFieldUids = [...new Set(customFieldUids)];
  return uniqueCustomFieldUids;
};
/* harmony default export */ const utils_getCustomFieldUidsFromLayout = (getCustomFieldUidsFromLayout);

// EXTERNAL MODULE: ./node_modules/lodash/flatMap.js
var flatMap = __webpack_require__(80481);
var flatMap_default = /*#__PURE__*/__webpack_require__.n(flatMap);
// EXTERNAL MODULE: ./node_modules/lodash/uniq.js
var uniq = __webpack_require__(81465);
var uniq_default = /*#__PURE__*/__webpack_require__.n(uniq);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/utils/getFieldsActionMatchingPermissions.js



const getFieldsActionMatchingPermissions = (userPermissions, slug) => {
  const getMatchingPermissions = (action) => {
    const matched = (0,dist/* findMatchingPermissions */.ZT)(userPermissions, [
      {
        action: `plugin::content-manager.explorer.${action}`,
        subject: slug
      }
    ]);
    return uniq_default()(flatMap_default()(matched, "properties.fields"));
  };
  return {
    createActionAllowedFields: getMatchingPermissions("create"),
    readActionAllowedFields: getMatchingPermissions("read"),
    updateActionAllowedFields: getMatchingPermissions("update")
  };
};
/* harmony default export */ const utils_getFieldsActionMatchingPermissions = (getFieldsActionMatchingPermissions);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/utils/index.js




;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/selectors.js


const selectCurrentLayout = (state) => state["content-manager_editViewLayoutManager"].currentLayout;
const selectAttributesLayout = (0,reselect_es/* createSelector */.P1)(
  selectCurrentLayout,
  (layout) => utils_createAttributesLayout(layout?.contentType ?? {})
);
const selectCustomFieldUids = (0,reselect_es/* createSelector */.P1)(
  selectCurrentLayout,
  (layout) => utils_getCustomFieldUidsFromLayout(layout)
);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/index.js

























const CTB_PERMISSIONS = [{ action: "plugin::content-type-builder.read", subject: null }];
const EditView = ({ allowedActions, isSingleType, goBack, slug, id, origin, userPermissions }) => {
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const permissions = (0,es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  const location = (0,react_router/* useLocation */.TH)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const Information = (0,useEnterprise/* useEnterprise */.c)(
    InformationBoxCE,
    async () => (await __webpack_require__.e(/* import() */ 7974).then(__webpack_require__.bind(__webpack_require__, 72026))).InformationBoxEE
  );
  useOnce(() => {
    if (location?.state && "error" in location.state) {
      toggleNotification({
        type: "warning",
        message: location.state.error,
        timeout: 5e3
      });
    }
  });
  const { layout, formattedContentTypeLayout, customFieldUids } = (0,es/* useSelector */.v9)((state) => ({
    layout: selectCurrentLayout(state),
    formattedContentTypeLayout: selectAttributesLayout(state),
    customFieldUids: selectCustomFieldUids(state)
  }));
  const { isLazyLoading, lazyComponentStore } = hooks_useLazyComponents(customFieldUids);
  const { createActionAllowedFields, readActionAllowedFields, updateActionAllowedFields } = utils_getFieldsActionMatchingPermissions(userPermissions, slug);
  const configurationPermissions = isSingleType ? permissions.contentManager.singleTypesConfigurations : permissions.contentManager.collectionTypesConfigurations;
  const configurationsURL = `/content-manager/${isSingleType ? "singleType" : "collectionType"}/${slug}/configurations/edit`;
  const DataManagementWrapper = isSingleType ? components_SingleTypeFormWrapper : components_CollectionTypeFormWrapper;
  const isDynamicZone = (block) => {
    return block.every((subBlock) => {
      return subBlock.every((obj) => obj.fieldSchema.type === "dynamiczone");
    });
  };
  if (isLazyLoading) {
    return /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null);
  }
  if (!Information) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(DataManagementWrapper, { allLayoutData: layout, slug, id, origin }, ({
    componentsDataStructure,
    contentTypeDataStructure,
    data,
    isCreatingEntry,
    isLoadingForData,
    onDelete,
    onPost,
    onPublish,
    onDraftRelationCheck,
    onPut,
    onUnpublish,
    redirectionLink,
    status
  }) => {
    return /* @__PURE__ */ react.createElement(
      components_EditViewDataManagerProvider,
      {
        allowedActions,
        allLayoutData: layout,
        createActionAllowedFields,
        componentsDataStructure,
        contentTypeDataStructure,
        from: redirectionLink,
        initialValues: data,
        isCreatingEntry,
        isLoadingForData,
        isSingleType,
        onPost,
        onPublish,
        onDraftRelationCheck,
        onPut,
        onUnpublish,
        readActionAllowedFields,
        redirectToPreviousPage: goBack,
        slug,
        status,
        updateActionAllowedFields
      },
      /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": status !== "resolved" }, /* @__PURE__ */ react.createElement(EditView_Header, { allowedActions }), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 9, s: 12 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 6 }, formattedContentTypeLayout.map((row, index) => {
        if (isDynamicZone(row)) {
          const {
            0: {
              0: { name, fieldSchema, metadatas, labelAction }
            }
          } = row;
          return /* @__PURE__ */ react.createElement(Box/* Box */.x, { key: index }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 12, s: 12, xs: 12 }, /* @__PURE__ */ react.createElement(
            DynamicZone_DynamicZone,
            {
              name,
              fieldSchema,
              labelAction,
              metadatas
            }
          ))));
        }
        return /* @__PURE__ */ react.createElement(
          Box/* Box */.x,
          {
            key: index,
            hasRadius: true,
            background: "neutral0",
            shadow: "tableShadow",
            paddingLeft: 6,
            paddingRight: 6,
            paddingTop: 6,
            paddingBottom: 6,
            borderColor: "neutral150"
          },
          /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 6 }, row.map((grid, gridRowIndex) => /* @__PURE__ */ react.createElement(
            EditView_GridRow,
            {
              columns: grid,
              customFieldInputs: lazyComponentStore,
              key: gridRowIndex
            }
          )))
        );
      }))), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 3, s: 12 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(EditView_DraftAndPublishBadge, null), /* @__PURE__ */ react.createElement(
        Box/* Box */.x,
        {
          as: "aside",
          "aria-labelledby": "additional-information",
          background: "neutral0",
          borderColor: "neutral150",
          hasRadius: true,
          paddingBottom: 4,
          paddingLeft: 4,
          paddingRight: 4,
          paddingTop: 6,
          shadow: "tableShadow"
        },
        /* @__PURE__ */ react.createElement(Information, null),
        /* @__PURE__ */ react.createElement(components_InjectionZone, { area: "contentManager.editView.informations" })
      ), /* @__PURE__ */ react.createElement(Box/* Box */.x, { as: "aside", "aria-labelledby": "links" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(components_InjectionZone, { area: "contentManager.editView.right-links", slug }), slug !== "strapi::administrator" && /* @__PURE__ */ react.createElement(dist/* CheckPermissions */.jW, { permissions: CTB_PERMISSIONS }, /* @__PURE__ */ react.createElement(
        dist/* LinkButton */.Qj,
        {
          onClick: () => {
            trackUsage("willEditEditLayout");
          },
          size: "S",
          startIcon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null),
          style: { width: "100%" },
          to: `/plugins/content-type-builder/content-types/${slug}`,
          variant: "secondary"
        },
        formatMessage({
          id: (0,utils/* getTrad */.OB)("link-to-ctb"),
          defaultMessage: "Edit the model"
        })
      )), /* @__PURE__ */ react.createElement(dist/* CheckPermissions */.jW, { permissions: configurationPermissions }, /* @__PURE__ */ react.createElement(
        dist/* LinkButton */.Qj,
        {
          size: "S",
          startIcon: /* @__PURE__ */ react.createElement(Layer/* default */.Z, null),
          style: { width: "100%" },
          to: configurationsURL,
          variant: "secondary"
        },
        formatMessage({
          id: "app.links.configure-view",
          defaultMessage: "Configure the view"
        })
      )), allowedActions.canDelete && !isCreatingEntry && /* @__PURE__ */ react.createElement(EditView_DeleteLink, { onDelete }))))))))
    );
  });
};
EditView.defaultProps = {
  id: null,
  isSingleType: false,
  origin: null,
  userPermissions: []
};
EditView.propTypes = {
  allowedActions: prop_types_default().shape({
    canRead: (prop_types_default()).bool.isRequired,
    canUpdate: (prop_types_default()).bool.isRequired,
    canCreate: (prop_types_default()).bool.isRequired,
    canDelete: (prop_types_default()).bool.isRequired
  }).isRequired,
  id: (prop_types_default()).string,
  isSingleType: (prop_types_default()).bool,
  goBack: (prop_types_default()).func.isRequired,
  origin: (prop_types_default()).string,
  slug: (prop_types_default()).string.isRequired,
  userPermissions: (prop_types_default()).array
};
/* harmony default export */ const pages_EditView = (EditView);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditViewLayoutManager/Permissions.js






const Permissions = (props) => {
  const viewPermissions = (0,react.useMemo)(() => (0,utils/* generatePermissionsObject */.TA)(props.slug), [props.slug]);
  const { isLoading, allowedActions } = (0,dist/* useRBAC */.ss)(viewPermissions, props.userPermissions);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null);
  }
  return /* @__PURE__ */ react.createElement(pages_EditView, { ...props, allowedActions });
};
Permissions.defaultProps = {
  permissions: []
};
Permissions.propTypes = {
  permissions: (prop_types_default()).array,
  slug: (prop_types_default()).string.isRequired,
  userPermissions: (prop_types_default()).array.isRequired
};
/* harmony default export */ const EditViewLayoutManager_Permissions = ((0,react.memo)(Permissions, (isEqual_default())));

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/pages/EditViewLayoutManager/selectors.js
var EditViewLayoutManager_selectors = __webpack_require__(25398);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditViewLayoutManager/index.js









const EditViewLayoutManager = ({ layout, ...rest }) => {
  const currentLayout = (0,es/* useSelector */.v9)(EditViewLayoutManager_selectors/* default */.Z);
  const dispatch = (0,es/* useDispatch */.I0)();
  const [{ query }] = (0,dist/* useQueryParams */.Kx)();
  const { runHookWaterfall } = (0,dist/* useStrapiApp */.j1)();
  const { permissions, isValid: isValidPermissions } = (0,hooks/* useSyncRbac */.r5)(query, rest.slug, "editView");
  (0,react.useEffect)(() => {
    const mutatedLayout = runHookWaterfall(exposedHooks/* MUTATE_EDIT_VIEW_LAYOUT */.Eo, { layout, query });
    dispatch(setLayout(mutatedLayout.layout, query));
    return () => {
      dispatch(resetProps());
    };
  }, [layout, dispatch, query, runHookWaterfall]);
  if (!currentLayout || !isValidPermissions) {
    return /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null);
  }
  return /* @__PURE__ */ react.createElement(EditViewLayoutManager_Permissions, { ...rest, userPermissions: permissions });
};
EditViewLayoutManager.propTypes = {
  layout: prop_types_default().shape({
    components: (prop_types_default()).object.isRequired,
    contentType: prop_types_default().shape({
      uid: (prop_types_default()).string.isRequired,
      settings: (prop_types_default()).object.isRequired,
      metadatas: (prop_types_default()).object.isRequired,
      options: (prop_types_default()).object.isRequired,
      attributes: (prop_types_default()).object.isRequired
    }).isRequired
  }).isRequired
};
/* harmony default export */ const pages_EditViewLayoutManager = (EditViewLayoutManager);

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var qs_lib = __webpack_require__(29206);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/components/EditFieldForm.js








const EditFieldForm_HeaderContainer = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  svg {
    width: ${32 / 16}rem;
    height: ${24 / 16}rem;
    margin-right: ${({ theme }) => theme.spaces[3]};
  }
`;
const EditFieldForm = ({
  attributes,
  fieldForm,
  fieldToEdit,
  onCloseModal,
  onChangeEditLabel,
  onSubmit,
  type
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const relationType = attributes[fieldToEdit].relationType;
  let shouldDisplaySortToggle = !["media", "relation"].includes(type);
  if (["oneWay", "oneToOne", "manyToOne"].includes(relationType)) {
    shouldDisplaySortToggle = true;
  }
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose: onCloseModal, labelledBy: "title" }, /* @__PURE__ */ react.createElement("form", { onSubmit }, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(EditFieldForm_HeaderContainer, null, /* @__PURE__ */ react.createElement(components_FieldTypeIcon, { type }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "title" }, formatMessage(
    {
      id: (0,utils/* getTrad */.OB)("containers.ListSettingsView.modal-form.edit-label"),
      defaultMessage: "Edit {fieldName}"
    },
    { fieldName: upperFirst_default()(fieldToEdit) }
  )))), /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { s: 12, col: 6 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      id: "label-input",
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("form.Input.label"),
        defaultMessage: "Label"
      }),
      name: "label",
      onChange: (e) => onChangeEditLabel(e),
      value: fieldForm.label,
      hint: formatMessage({
        id: (0,utils/* getTrad */.OB)("form.Input.label.inputDescription"),
        defaultMessage: "This value overrides the label displayed in the table's head"
      })
    }
  )), shouldDisplaySortToggle && /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { s: 12, col: 6 }, /* @__PURE__ */ react.createElement(
    ToggleInput/* ToggleInput */.s,
    {
      "data-testid": "Enable sort on this field",
      checked: fieldForm.sortable,
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("form.Input.sort.field"),
        defaultMessage: "Enable sort on this field"
      }),
      name: "sortable",
      onChange: (e) => onChangeEditLabel({ target: { name: "sortable", value: e.target.checked } }),
      onLabel: formatMessage({
        id: "app.components.ToggleCheckbox.on-label",
        defaultMessage: "on"
      }),
      offLabel: formatMessage({
        id: "app.components.ToggleCheckbox.off-label",
        defaultMessage: "off"
      })
    }
  )))), /* @__PURE__ */ react.createElement(
    ModalFooter/* ModalFooter */.m,
    {
      startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: onCloseModal, variant: "tertiary" }, formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" })),
      endActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit" }, formatMessage({ id: "global.finish", defaultMessage: "Finish" }))
    }
  )));
};
EditFieldForm.propTypes = {
  attributes: prop_types_default().objectOf(
    prop_types_default().shape({
      relationType: (prop_types_default()).string
    })
  ).isRequired,
  fieldForm: prop_types_default().shape({
    label: (prop_types_default()).string,
    sortable: (prop_types_default()).bool
  }).isRequired,
  fieldToEdit: (prop_types_default()).string.isRequired,
  onChangeEditLabel: (prop_types_default()).func.isRequired,
  onCloseModal: (prop_types_default()).func.isRequired,
  onSubmit: (prop_types_default()).func.isRequired,
  type: (prop_types_default()).string.isRequired
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/components/Settings.js







const Settings = ({
  contentTypeOptions,
  modifiedData,
  onChange,
  sortOptions: sortOptionsCE
}) => {
  const { formatMessage, locale } = (0,useIntl/* default */.Z)();
  const formatter = (0,dist/* useCollator */.Xe)(locale, {
    sensitivity: "base"
  });
  const sortOptions = (0,useEnterprise/* useEnterprise */.c)(
    sortOptionsCE,
    async () => (await __webpack_require__.e(/* import() */ 1588).then(__webpack_require__.bind(__webpack_require__, 51588))).REVIEW_WORKFLOW_STAGE_SORT_OPTION_NAME,
    {
      combine(ceOptions, eeOption) {
        return [...ceOptions, { ...eeOption, label: formatMessage(eeOption.label) }];
      },
      defaultValue: sortOptionsCE,
      enabled: !!contentTypeOptions?.reviewWorkflows
    }
  );
  const sortOptionsSorted = sortOptions.sort((a, b) => formatter.compare(a.label, b.label));
  const { settings } = modifiedData;
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
    id: (0,utils/* getTrad */.OB)("containers.SettingPage.settings"),
    defaultMessage: "Settings"
  })), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between", gap: 4 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { width: "100%" }, /* @__PURE__ */ react.createElement(
    ToggleInput/* ToggleInput */.s,
    {
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("form.Input.search"),
        defaultMessage: "Enable search"
      }),
      onChange: (e) => {
        onChange({ target: { name: "settings.searchable", value: e.target.checked } });
      },
      onLabel: formatMessage({
        id: "app.components.ToggleCheckbox.on-label",
        defaultMessage: "on"
      }),
      offLabel: formatMessage({
        id: "app.components.ToggleCheckbox.off-label",
        defaultMessage: "off"
      }),
      name: "settings.searchable",
      checked: settings.searchable
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, { width: "100%" }, /* @__PURE__ */ react.createElement(
    ToggleInput/* ToggleInput */.s,
    {
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("form.Input.filters"),
        defaultMessage: "Enable filters"
      }),
      onChange: (e) => {
        onChange({ target: { name: "settings.filterable", value: e.target.checked } });
      },
      onLabel: formatMessage({
        id: "app.components.ToggleCheckbox.on-label",
        defaultMessage: "on"
      }),
      offLabel: formatMessage({
        id: "app.components.ToggleCheckbox.off-label",
        defaultMessage: "off"
      }),
      name: "settings.filterable",
      checked: settings.filterable
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, { width: "100%" }, /* @__PURE__ */ react.createElement(
    ToggleInput/* ToggleInput */.s,
    {
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("form.Input.bulkActions"),
        defaultMessage: "Enable bulk actions"
      }),
      onChange: (e) => {
        onChange({ target: { name: "settings.bulkable", value: e.target.checked } });
      },
      onLabel: formatMessage({
        id: "app.components.ToggleCheckbox.on-label",
        defaultMessage: "on"
      }),
      offLabel: formatMessage({
        id: "app.components.ToggleCheckbox.off-label",
        defaultMessage: "off"
      }),
      name: "settings.bulkable",
      checked: settings.bulkable
    }
  ))), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { s: 12, col: 6 }, /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("form.Input.pageEntries"),
        defaultMessage: "Entries per page"
      }),
      hint: formatMessage({
        id: (0,utils/* getTrad */.OB)("form.Input.pageEntries.inputDescription"),
        defaultMessage: "Note: You can override this value in the Collection Type settings page."
      }),
      onChange: (value) => onChange({ target: { name: "settings.pageSize", value } }),
      name: "settings.pageSize",
      value: modifiedData.settings.pageSize || ""
    },
    [10, 20, 50, 100].map((pageSize) => /* @__PURE__ */ react.createElement(Option/* Option */.W, { key: pageSize, value: pageSize }, pageSize))
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { s: 12, col: 3 }, /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("form.Input.defaultSort"),
        defaultMessage: "Default sort attribute"
      }),
      onChange: (value) => onChange({ target: { name: "settings.defaultSortBy", value } }),
      name: "settings.defaultSortBy",
      value: modifiedData.settings.defaultSortBy || ""
    },
    sortOptionsSorted.map(({ value, label }) => /* @__PURE__ */ react.createElement(Option/* Option */.W, { key: value, value }, label))
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { s: 12, col: 3 }, /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("form.Input.sort.order"),
        defaultMessage: "Default sort order"
      }),
      onChange: (value) => onChange({ target: { name: "settings.defaultSortOrder", value } }),
      name: "settings.defaultSortOrder",
      value: modifiedData.settings.defaultSortOrder || ""
    },
    ["ASC", "DESC"].map((order) => /* @__PURE__ */ react.createElement(Option/* Option */.W, { key: order, value: order }, order))
  ))));
};
Settings.defaultProps = {
  modifiedData: {},
  sortOptions: []
};
Settings.propTypes = {
  contentTypeOptions: (prop_types_default()).object.isRequired,
  modifiedData: (prop_types_default()).object,
  onChange: (prop_types_default()).func.isRequired,
  sortOptions: prop_types_default().arrayOf(
    prop_types_default().shape({
      value: (prop_types_default()).string,
      label: (prop_types_default()).string
    }).isRequired
  )
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/components/CardDragPreview.js






const ActionBox = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  height: ${({ theme }) => theme.spaces[7]};

  &:last-child {
    padding: 0 ${({ theme }) => theme.spaces[3]};
  }
`;
const CardDragPreview_DragButton = (0,styled_components_browser_esm/* default */.ZP)(ActionBox)`
  border-right: 1px solid
    ${({ theme, isSibling }) => isSibling ? theme.colors.neutral150 : theme.colors.primary200};

  svg {
    width: ${12 / 16}rem;
    height: ${12 / 16}rem;
  }
`;
const FieldContainer = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  border: 1px solid
    ${({ theme, isSibling }) => isSibling ? theme.colors.neutral150 : theme.colors.primary200};

  svg {
    width: ${10 / 16}rem;
    height: ${10 / 16}rem;

    path {
      fill: ${({ theme, isSibling }) => isSibling ? void 0 : theme.colors.primary600};
    }
  }
`;
const TypographyMaxWidth = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z))`
  max-width: ${72 / 16}rem;
`;
function CardDragPreview({ labelField, transparent, isSibling }) {
  return /* @__PURE__ */ react.createElement(
    FieldContainer,
    {
      background: isSibling ? "neutral100" : "primary100",
      display: "inline-flex",
      gap: 3,
      hasRadius: true,
      justifyContent: "space-between",
      transparent,
      isSibling,
      "max-height": (0,dist/* pxToRem */.Q1)(32),
      maxWidth: "min-content",
      opacity: transparent ? 0 : 1
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 3 }, /* @__PURE__ */ react.createElement(CardDragPreview_DragButton, { alignItems: "center", cursor: "all-scroll", padding: 3 }, /* @__PURE__ */ react.createElement(Drag/* default */.Z, null)), /* @__PURE__ */ react.createElement(
      TypographyMaxWidth,
      {
        textColor: isSibling ? void 0 : "primary600",
        fontWeight: "bold",
        ellipsis: true
      },
      labelField
    )),
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(ActionBox, { alignItems: "center" }, /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null)), /* @__PURE__ */ react.createElement(ActionBox, { alignItems: "center" }, /* @__PURE__ */ react.createElement(Cross/* default */.Z, null)))
  );
}
CardDragPreview.defaultProps = {
  isSibling: false,
  transparent: false
};
CardDragPreview.propTypes = {
  isSibling: (prop_types_default()).bool,
  labelField: (prop_types_default()).string.isRequired,
  transparent: (prop_types_default()).bool
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/components/DraggableCard.js










const ActionButton = styled_components_browser_esm/* default */.ZP.button`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.spaces[7]};

  &:last-child {
    padding: 0 ${({ theme }) => theme.spaces[3]};
  }
`;
const DraggableCard_DragButton = (0,styled_components_browser_esm/* default */.ZP)(ActionButton)`
  padding: 0 ${({ theme }) => theme.spaces[3]};
  border-right: 1px solid ${({ theme }) => theme.colors.neutral150};
  cursor: all-scroll;

  svg {
    width: ${12 / 16}rem;
    height: ${12 / 16}rem;
  }
`;
const DraggableCard_FieldContainer = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  max-height: ${32 / 16}rem;
  cursor: pointer;

  svg {
    width: ${10 / 16}rem;
    height: ${10 / 16}rem;

    path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary100};
    border-color: ${({ theme }) => theme.colors.primary200};

    svg {
      path {
        fill: ${({ theme }) => theme.colors.primary600};
      }
    }

    ${Typography/* Typography */.Z} {
      color: ${({ theme }) => theme.colors.primary600};
    }

    ${DraggableCard_DragButton} {
      border-right: 1px solid ${({ theme }) => theme.colors.primary200};
    }
  }
`;
const FieldWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  &:last-child {
    padding-right: ${({ theme }) => theme.spaces[3]};
  }
`;
const DraggableCard = ({
  index,
  isDraggingSibling,
  labelField,
  onClickEditField,
  onMoveField,
  onRemoveField,
  name,
  setIsDraggingSibling
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const dragRef = (0,react.useRef)(null);
  const dropRef = (0,react.useRef)(null);
  const [, forceRerenderAfterDnd] = (0,react.useState)(false);
  const editButtonRef = (0,react.useRef)();
  const handleClickEditRow = () => {
    if (editButtonRef.current) {
      editButtonRef.current.click();
    }
  };
  const [, drop] = (0,cjs.useDrop)({
    accept: utils/* ItemTypes */._Q.FIELD,
    hover(item, monitor) {
      if (!dropRef.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = dropRef.current.getBoundingClientRect();
      const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientX = clientOffset.x - hoverBoundingRect.left;
      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
        return;
      }
      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
        return;
      }
      onMoveField(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });
  const [{ isDragging }, drag, preview] = (0,cjs.useDrag)({
    type: utils/* ItemTypes */._Q.FIELD,
    item() {
      return { index, labelField, name };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
    end() {
      setIsDraggingSibling(false);
    }
  });
  (0,react.useEffect)(() => {
    preview((0,dist_cjs/* getEmptyImage */.rX)(), { captureDraggingState: false });
  }, [preview]);
  (0,react.useEffect)(() => {
    if (isDragging) {
      setIsDraggingSibling(true);
    }
  }, [isDragging, setIsDraggingSibling]);
  (0,react.useEffect)(() => {
    if (!isDraggingSibling) {
      forceRerenderAfterDnd((prev) => !prev);
    }
  }, [isDraggingSibling]);
  const refs = {
    dragRef: drag(dragRef),
    dropRef: drop(dropRef)
  };
  return /* @__PURE__ */ react.createElement(FieldWrapper, { ref: refs ? refs.dropRef : null }, isDragging && /* @__PURE__ */ react.createElement(CardDragPreview, { transparent: true, labelField }), !isDragging && isDraggingSibling && /* @__PURE__ */ react.createElement(CardDragPreview, { isSibling: true, labelField }), !isDragging && !isDraggingSibling && /* @__PURE__ */ react.createElement(
    DraggableCard_FieldContainer,
    {
      borderColor: "neutral150",
      background: "neutral100",
      hasRadius: true,
      justifyContent: "space-between",
      onClick: handleClickEditRow,
      isDragging
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 3 }, /* @__PURE__ */ react.createElement(
      DraggableCard_DragButton,
      {
        as: "span",
        "aria-label": formatMessage(
          {
            id: (0,utils/* getTrad */.OB)("components.DraggableCard.move.field"),
            defaultMessage: "Move {item}"
          },
          { item: labelField }
        ),
        onClick: (e) => e.stopPropagation(),
        ref: refs.dragRef,
        type: "button"
      },
      /* @__PURE__ */ react.createElement(Drag/* default */.Z, null)
    ), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold" }, labelField)),
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { paddingLeft: 3 }, /* @__PURE__ */ react.createElement(
      ActionButton,
      {
        ref: editButtonRef,
        onClick: (e) => {
          e.stopPropagation();
          onClickEditField(name);
        },
        "aria-label": formatMessage(
          {
            id: (0,utils/* getTrad */.OB)("components.DraggableCard.edit.field"),
            defaultMessage: "Edit {item}"
          },
          { item: labelField }
        ),
        type: "button"
      },
      /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null)
    ), /* @__PURE__ */ react.createElement(
      ActionButton,
      {
        onClick: onRemoveField,
        "data-testid": `delete-${name}`,
        "aria-label": formatMessage(
          {
            id: (0,utils/* getTrad */.OB)("components.DraggableCard.delete.field"),
            defaultMessage: "Delete {item}"
          },
          { item: labelField }
        ),
        type: "button"
      },
      /* @__PURE__ */ react.createElement(Cross/* default */.Z, null)
    ))
  ));
};
DraggableCard.propTypes = {
  index: (prop_types_default()).number.isRequired,
  isDraggingSibling: (prop_types_default()).bool.isRequired,
  labelField: (prop_types_default()).string.isRequired,
  name: (prop_types_default()).string.isRequired,
  onClickEditField: (prop_types_default()).func.isRequired,
  onMoveField: (prop_types_default()).func.isRequired,
  onRemoveField: (prop_types_default()).func.isRequired,
  setIsDraggingSibling: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_DraggableCard = (DraggableCard);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/components/SortDisplayedFields.js








const SortDisplayedFields = ({
  displayedFields,
  listRemainingFields,
  metadatas,
  onAddField,
  onClickEditField,
  onMoveField,
  onRemoveField
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [isDraggingSibling, setIsDraggingSibling] = (0,react.useState)(false);
  const [lastAction, setLastAction] = (0,react.useState)(null);
  const scrollableContainerRef = (0,react.useRef)();
  function handleAddField(...args) {
    setLastAction("add");
    onAddField(...args);
  }
  function handleRemoveField(...args) {
    setLastAction("remove");
    onRemoveField(...args);
  }
  (0,react.useEffect)(() => {
    if (lastAction === "add" && scrollableContainerRef?.current) {
      scrollableContainerRef.current.scrollLeft = scrollableContainerRef.current.scrollWidth;
    }
  }, [displayedFields, lastAction]);
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "stretch", direction: "column", gap: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
    id: (0,utils/* getTrad */.OB)("containers.SettingPage.view"),
    defaultMessage: "View"
  })), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { padding: 4, borderColor: "neutral300", borderStyle: "dashed", borderWidth: "1px", hasRadius: true }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { flex: "1", overflow: "scroll hidden", ref: scrollableContainerRef }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 3 }, displayedFields.map((field, index) => /* @__PURE__ */ react.createElement(
    components_DraggableCard,
    {
      key: field,
      index,
      isDraggingSibling,
      onMoveField,
      onClickEditField,
      onRemoveField: (e) => handleRemoveField(e, index),
      name: field,
      labelField: metadatas[field].list.label || field,
      setIsDraggingSibling
    }
  )))), /* @__PURE__ */ react.createElement(Menu/* Root */.fC, null, /* @__PURE__ */ react.createElement(
    Menu/* Trigger */.xz,
    {
      paddingLeft: 2,
      paddingRight: 2,
      justifyContent: "center",
      endIcon: null,
      disabled: listRemainingFields.length <= 0,
      variant: "tertiary"
    },
    /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, { as: "span" }, formatMessage({
      id: (0,utils/* getTrad */.OB)("components.FieldSelect.label"),
      defaultMessage: "Add a field"
    })),
    /* @__PURE__ */ react.createElement(Plus/* default */.Z, { "aria-hidden": true, focusable: false, style: { position: "relative", top: 2 } })
  ), /* @__PURE__ */ react.createElement(Menu/* Content */.VY, null, listRemainingFields.map((field) => /* @__PURE__ */ react.createElement(Menu/* Item */.ck, { key: field, onSelect: () => handleAddField(field) }, metadatas[field].list.label || field))))));
};
SortDisplayedFields.propTypes = {
  displayedFields: prop_types.PropTypes.array.isRequired,
  listRemainingFields: prop_types.PropTypes.array.isRequired,
  metadatas: prop_types.PropTypes.objectOf(
    prop_types.PropTypes.shape({
      list: prop_types.PropTypes.shape({
        label: prop_types.PropTypes.string
      })
    })
  ).isRequired,
  onAddField: prop_types.PropTypes.func.isRequired,
  onClickEditField: prop_types.PropTypes.func.isRequired,
  onMoveField: prop_types.PropTypes.func.isRequired,
  onRemoveField: prop_types.PropTypes.func.isRequired
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/constants.js
const EXCLUDED_SORT_ATTRIBUTE_TYPES = [
  "media",
  "richtext",
  "dynamiczone",
  "relation",
  "component",
  "json",
  "blocks"
];

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/reducer.js




const ListSettingsView_reducer_initialState = {
  fieldForm: {},
  fieldToEdit: "",
  initialData: {},
  modifiedData: {}
};
const ListSettingsView_reducer_reducer = (state = ListSettingsView_reducer_initialState, action) => (
  // eslint-disable-next-line consistent-return
  (0,immer_esm/* default */.ZP)(state, (draftState) => {
    const layoutFieldListPath = ["modifiedData", "layouts", "list"];
    switch (action.type) {
      case "ADD_FIELD": {
        const layoutFieldList = get_default()(state, layoutFieldListPath, []);
        set_default()(draftState, layoutFieldListPath, [...layoutFieldList, action.item]);
        break;
      }
      case "MOVE_FIELD": {
        const layoutFieldList = get_default()(state, layoutFieldListPath, []);
        const { originalIndex, atIndex } = action;
        set_default()(
          draftState,
          layoutFieldListPath,
          (0,utils/* arrayMoveItem */.W3)(layoutFieldList, originalIndex, atIndex)
        );
        break;
      }
      case "ON_CHANGE": {
        set_default()(draftState, ["modifiedData", ...action.keys.split(".")], action.value);
        break;
      }
      case "ON_CHANGE_FIELD_METAS": {
        set_default()(draftState, ["fieldForm", action.name], action.value);
        break;
      }
      case "REMOVE_FIELD": {
        const layoutFieldList = get_default()(state, layoutFieldListPath, []);
        set_default()(
          draftState,
          layoutFieldListPath,
          layoutFieldList.filter((_, index) => action.index !== index)
        );
        break;
      }
      case "SET_FIELD_TO_EDIT": {
        const { fieldToEdit } = action;
        draftState.fieldToEdit = fieldToEdit;
        draftState.fieldForm.label = get_default()(
          draftState,
          ["modifiedData", "metadatas", fieldToEdit, "list", "label"],
          ""
        );
        draftState.fieldForm.sortable = get_default()(
          draftState,
          ["modifiedData", "metadatas", fieldToEdit, "list", "sortable"],
          ""
        );
        break;
      }
      case "UNSET_FIELD_TO_EDIT": {
        draftState.fieldForm = {};
        draftState.fieldToEdit = "";
        break;
      }
      case "SUBMIT_FIELD_FORM": {
        const fieldMetadataPath = ["modifiedData", "metadatas", state.fieldToEdit, "list"];
        set_default()(draftState, [...fieldMetadataPath, "label"], state.fieldForm.label);
        set_default()(draftState, [...fieldMetadataPath, "sortable"], state.fieldForm.sortable);
        break;
      }
      default:
        return draftState;
    }
  })
);
/* harmony default export */ const ListSettingsView_reducer = (ListSettingsView_reducer_reducer);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/index.js


















const ListSettingsView = ({ layout, slug }) => {
  const { put } = (0,dist/* useFetchClient */.kY)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const pluginsQueryParams = (0,hooks/* usePluginsQueryParams */.fi)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { refetchData } = react.useContext(contexts_ModelsContext);
  const [{ fieldToEdit, fieldForm, initialData, modifiedData }, dispatch] = react.useReducer(
    ListSettingsView_reducer,
    ListSettingsView_reducer_initialState,
    () => ({
      ...ListSettingsView_reducer_initialState,
      initialData: layout,
      modifiedData: layout
    })
  );
  const isModalFormOpen = Object.keys(fieldForm).length !== 0;
  const { attributes, options } = layout;
  const displayedFields = modifiedData.layouts.list;
  const goBackUrl = () => {
    const {
      settings: { pageSize, defaultSortBy, defaultSortOrder },
      kind,
      uid
    } = initialData;
    const sort = `${defaultSortBy}:${defaultSortOrder}`;
    const goBackSearch = `${(0,qs_lib.stringify)(
      {
        page: 1,
        pageSize,
        sort
      },
      { encode: false }
    )}${pluginsQueryParams ? `&${pluginsQueryParams}` : ""}`;
    return `/content-manager/${kind}/${uid}?${goBackSearch}`;
  };
  const handleChange = ({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE",
      keys: name,
      value: name === "settings.pageSize" ? parseInt(value, 10) : value
    });
  };
  const { isLoading: isSubmittingForm, mutate } = (0,react_query_es.useMutation)(
    (body) => put(`/content-manager/content-types/${slug}/configuration`, body),
    {
      onSuccess() {
        trackUsage("didEditListSettings");
        refetchData();
      },
      onError() {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
      }
    }
  );
  const handleAddField = (item) => {
    dispatch({
      type: "ADD_FIELD",
      item
    });
  };
  const handleRemoveField = (e, index) => {
    e.stopPropagation();
    if (displayedFields.length === 1) {
      toggleNotification({
        type: "info",
        message: { id: (0,utils/* getTrad */.OB)("notification.info.minimumFields") }
      });
    } else {
      dispatch({
        type: "REMOVE_FIELD",
        index
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { layouts, settings, metadatas } = modifiedData;
    mutate({
      layouts,
      settings,
      metadatas
    });
    trackUsage("willSaveContentTypeLayout");
  };
  const handleClickEditField = (fieldToEdit2) => {
    dispatch({
      type: "SET_FIELD_TO_EDIT",
      fieldToEdit: fieldToEdit2
    });
  };
  const handleCloseModal = () => {
    dispatch({
      type: "UNSET_FIELD_TO_EDIT"
    });
  };
  const handleSubmitFieldEdit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SUBMIT_FIELD_FORM"
    });
    handleCloseModal();
  };
  const handleChangeEditLabel = ({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE_FIELD_METAS",
      name,
      value
    });
  };
  const listRemainingFields = Object.entries(attributes).filter(
    ([name, attribute]) => (0,utils/* checkIfAttributeIsDisplayable */.ko)(attribute) && !displayedFields.includes(name)
  ).map(([name]) => name).sort();
  const sortOptions = Object.entries(attributes).filter(([, attribute]) => !EXCLUDED_SORT_ATTRIBUTE_TYPES.includes(attribute.type)).map(([name]) => ({
    value: name,
    label: layout.metadatas[name].list.label
  }));
  const move = (originalIndex, atIndex) => {
    dispatch({
      type: "MOVE_FIELD",
      originalIndex,
      atIndex
    });
  };
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": isSubmittingForm }, /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      navigationAction: /* @__PURE__ */ react.createElement(dist/* Link */.rU, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null), to: goBackUrl, id: "go-back" }, formatMessage({ id: "global.back", defaultMessage: "Back" })),
      primaryAction: /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          size: "S",
          startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
          disabled: isEqual_default()(modifiedData, initialData),
          type: "submit"
        },
        formatMessage({ id: "global.save", defaultMessage: "Save" })
      ),
      subtitle: formatMessage({
        id: (0,utils/* getTrad */.OB)("components.SettingsViewWrapper.pluginHeader.description.list-settings"),
        defaultMessage: "Define the settings of the list view."
      }),
      title: formatMessage(
        {
          id: (0,utils/* getTrad */.OB)("components.SettingsViewWrapper.pluginHeader.title"),
          defaultMessage: "Configure the view - {name}"
        },
        { name: upperFirst_default()(modifiedData.info.displayName) }
      )
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(
    Flex/* Flex */.k,
    {
      alignItems: "stretch",
      background: "neutral0",
      direction: "column",
      gap: 6,
      hasRadius: true,
      shadow: "tableShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7
    },
    /* @__PURE__ */ react.createElement(
      Settings,
      {
        contentTypeOptions: options,
        modifiedData,
        onChange: handleChange,
        sortOptions
      }
    ),
    /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null),
    /* @__PURE__ */ react.createElement(
      SortDisplayedFields,
      {
        listRemainingFields,
        displayedFields,
        onAddField: handleAddField,
        onClickEditField: handleClickEditField,
        onMoveField: move,
        onRemoveField: handleRemoveField,
        metadatas: modifiedData.metadatas
      }
    )
  ))), isModalFormOpen && /* @__PURE__ */ react.createElement(
    EditFieldForm,
    {
      attributes,
      fieldForm,
      fieldToEdit,
      onChangeEditLabel: handleChangeEditLabel,
      onCloseModal: handleCloseModal,
      onSubmit: handleSubmitFieldEdit,
      type: attributes?.[fieldToEdit]?.type ?? "text"
    }
  )));
};
ListSettingsView.propTypes = {
  layout: prop_types_default().shape({
    uid: (prop_types_default()).string.isRequired,
    settings: prop_types_default().shape({
      bulkable: (prop_types_default()).bool,
      defaultSortBy: (prop_types_default()).string,
      defaultSortOrder: (prop_types_default()).string,
      filterable: (prop_types_default()).bool,
      pageSize: (prop_types_default()).number,
      searchable: (prop_types_default()).bool
    }).isRequired,
    metadatas: (prop_types_default()).object.isRequired,
    options: (prop_types_default()).object.isRequired,
    attributes: prop_types_default().objectOf(
      prop_types_default().shape({
        type: (prop_types_default()).string
      })
    ).isRequired
  }).isRequired,
  slug: (prop_types_default()).string.isRequired
};

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/pages/ListView/constants.js
var ListView_constants = __webpack_require__(9144);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/actions.js

const actions_getData = () => ({ type: ListView_constants/* GET_DATA */.ZA });
const actions_getDataSucceeded = (pagination, data) => ({
  type: ListView_constants/* GET_DATA_SUCCEEDED */.Id,
  pagination,
  data
});
const onResetListHeaders = () => ({ type: ListView_constants/* ON_RESET_LIST_HEADERS */.MP });
function ListView_actions_resetProps() {
  return { type: ListView_constants/* RESET_PROPS */.c2 };
}
const actions_setLayout = ({ components, contentType }) => {
  const { layouts } = contentType;
  return {
    contentType,
    components,
    displayedHeaders: layouts.list,
    type: ListView_constants/* SET_LIST_LAYOUT */.Zz
  };
};
const onChangeListHeaders = (target) => ({ type: ListView_constants/* ON_CHANGE_LIST_HEADERS */.Rp, target });

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.mjs
var useNotifyAT = __webpack_require__(51926);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ActionLayout.mjs
var ActionLayout = __webpack_require__(37472);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.mjs
var Tr = __webpack_require__(93153);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.mjs
var Cell = __webpack_require__(50086);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/themes/lightTheme/index.mjs + 2 modules
var lightTheme = __webpack_require__(97003);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var node_modules_axios = __webpack_require__(53532);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(91787);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useAdminUsers/index.js + 1 modules
var useAdminUsers = __webpack_require__(54920);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Filter/Filter.js






const Filter_Filter = ({ displayedFilters }) => {
  const [isVisible, setIsVisible] = react.useState(false);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const buttonRef = react.useRef();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const handleToggle = () => {
    if (!isVisible) {
      trackUsage("willFilterEntries");
    }
    setIsVisible((prev) => !prev);
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Button/* Button */.z,
    {
      variant: "tertiary",
      ref: buttonRef,
      startIcon: /* @__PURE__ */ react.createElement(Filter/* default */.Z, null),
      onClick: handleToggle,
      size: "S"
    },
    formatMessage({ id: "app.utils.filters", defaultMessage: "Filters" })
  ), isVisible && /* @__PURE__ */ react.createElement(
    dist/* FilterPopoverURLQuery */.J5,
    {
      displayedFilters,
      isVisible,
      onToggle: handleToggle,
      source: buttonRef
    }
  ), /* @__PURE__ */ react.createElement(dist/* FilterListURLQuery */.W$, { filtersSchema: displayedFilters }));
};
Filter_Filter.propTypes = {
  displayedFilters: prop_types_default().arrayOf(
    prop_types_default().shape({
      name: (prop_types_default()).string.isRequired,
      metadatas: prop_types_default().shape({ label: (prop_types_default()).string }),
      fieldSchema: prop_types_default().shape({ type: (prop_types_default()).string })
    })
  ).isRequired
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Filter/index.js


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Filter/CustomInputs/AdminUsersFilter.js






const AdminUsersFilter = ({ value, onChange }) => {
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
      return /* @__PURE__ */ react.createElement(ComboboxOption/* ComboboxOption */.O, { key: user.id, value: user.id.toString() }, (0,utils/* getDisplayName */.Gf)(user, formatMessage));
    })
  );
};
AdminUsersFilter.propTypes = {
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string
};
AdminUsersFilter.defaultProps = {
  value: ""
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useAllowedAttributes.js


const NOT_ALLOWED_FILTERS = [
  "json",
  "component",
  "media",
  "richtext",
  "dynamiczone",
  "password",
  "blocks"
];
const TIMESTAMPS = ["createdAt", "updatedAt"];
const useAllowedAttributes = (contentType, slug) => {
  const { allPermissions } = (0,dist/* useRBACProvider */.vn)();
  const readPermissionsForSlug = (0,dist/* findMatchingPermissions */.ZT)(allPermissions, [
    {
      action: "plugin::content-manager.explorer.read",
      subject: slug
    }
  ]);
  const canReadAdminUsers = (0,dist/* findMatchingPermissions */.ZT)(allPermissions, [
    {
      action: "admin::users.read",
      subject: null
    }
  ]).length > 0;
  const attributesWithReadPermissions = readPermissionsForSlug?.[0]?.properties?.fields ?? [];
  const allowedAttributes = attributesWithReadPermissions.filter((attr) => {
    const current = contentType?.attributes?.[attr] ?? {};
    if (!current.type) {
      return false;
    }
    if (NOT_ALLOWED_FILTERS.includes(current.type)) {
      return false;
    }
    return true;
  });
  return ["id", ...allowedAttributes, ...TIMESTAMPS, ...canReadAdminUsers ? CREATOR_FIELDS : []];
};

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseCheckbox/BaseCheckbox.mjs + 2 modules
var BaseCheckbox = __webpack_require__(73411);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Duplicate.mjs
var Duplicate = __webpack_require__(78031);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/InjectionZoneList/index.js




const InjectionZoneList = ({ area, ...props }) => {
  const compos = hooks_useInjectionZone(area);
  if (!compos) {
    return null;
  }
  return /* @__PURE__ */ react.createElement("ul", null, compos.map((compo) => {
    const component = compo.Component(props);
    if (component) {
      return /* @__PURE__ */ react.createElement(Box/* Box */.x, { key: compo.name, padding: 3, style: { textAlign: "center" } }, /* @__PURE__ */ react.createElement(compo.Component, { ...props }));
    }
    return null;
  }));
};
InjectionZoneList.propTypes = {
  area: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_InjectionZoneList = (InjectionZoneList);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/components/ConfirmDialogDelete/index.js






const ConfirmDialogDelete = ({
  isConfirmButtonLoading,
  isOpen,
  onToggleDialog,
  onConfirm
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(
    Dialog/* Dialog */.V,
    {
      onClose: onToggleDialog,
      title: formatMessage({
        id: "app.components.ConfirmDialog.title",
        defaultMessage: "Confirmation"
      }),
      labelledBy: "confirmation",
      describedBy: "confirm-description",
      isOpen
    },
    /* @__PURE__ */ react.createElement(DialogBody/* DialogBody */.a, { icon: /* @__PURE__ */ react.createElement(ExclamationMarkCircle/* default */.Z, null) }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { id: "confirm-description" }, formatMessage({
      id: "components.popUpWarning.message",
      defaultMessage: "Are you sure you want to delete this?"
    }))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(components_InjectionZoneList, { area: "contentManager.listView.deleteModalAdditionalInfos" })))),
    /* @__PURE__ */ react.createElement(
      DialogFooter/* DialogFooter */.c,
      {
        startAction: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: onToggleDialog, variant: "tertiary" }, formatMessage({
          id: "app.components.Button.cancel",
          defaultMessage: "Cancel"
        })),
        endAction: /* @__PURE__ */ react.createElement(
          Button/* Button */.z,
          {
            onClick: onConfirm,
            variant: "danger-light",
            startIcon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null),
            id: "confirm-delete",
            loading: isConfirmButtonLoading
          },
          formatMessage({
            id: "app.components.Button.confirm",
            defaultMessage: "Confirm"
          })
        )
      }
    )
  );
};
ConfirmDialogDelete.propTypes = {
  isConfirmButtonLoading: (prop_types_default()).bool.isRequired,
  isOpen: (prop_types_default()).bool.isRequired,
  onConfirm: (prop_types_default()).func.isRequired,
  onToggleDialog: (prop_types_default()).func.isRequired
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/components/Body/index.js









const stopPropagation = (e) => e.stopPropagation();
const CheckboxDataCell = ({ rowId, index }) => {
  const { selectedEntries, onSelectRow } = (0,dist/* useTableContext */.Sh)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const isChecked = selectedEntries.findIndex((id) => id === rowId) !== -1;
  const ariaLabel = formatMessage(
    {
      id: "app.component.table.select.one-entry",
      defaultMessage: `Select {target}`
    },
    { target: index + 1 }
  );
  return /* @__PURE__ */ react.createElement(Cell.Td, { onClick: stopPropagation }, /* @__PURE__ */ react.createElement(
    BaseCheckbox/* BaseCheckbox */.C,
    {
      "aria-label": ariaLabel,
      checked: isChecked,
      onChange: () => {
        onSelectRow({ name: rowId, value: !isChecked });
      }
    }
  ));
};
CheckboxDataCell.propTypes = {
  rowId: (prop_types_default()).number.isRequired,
  index: (prop_types_default()).number.isRequired
};
const EntityActionsDataCell = ({
  rowId,
  index,
  canCreate,
  canDelete,
  setIsConfirmDeleteRowOpen,
  handleCloneClick
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const { setSelectedEntries } = (0,dist/* useTableContext */.Sh)();
  const pluginsQueryParams = (0,hooks/* usePluginsQueryParams */.fi)();
  const {
    location: { pathname }
  } = (0,react_router/* useHistory */.k6)();
  const itemLineText = formatMessage(
    {
      id: "content-manager.components.ListViewTable.row-line",
      defaultMessage: "item line {number}"
    },
    { number: index + 1 }
  );
  return /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 1, justifyContent: "end", onClick: stopPropagation }, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      forwardedAs: react_router_dom/* Link */.rU,
      onClick: () => {
        trackUsage("willEditEntryFromButton");
      },
      to: {
        pathname: `${pathname}/${rowId}`,
        state: { from: pathname },
        search: pluginsQueryParams
      },
      label: formatMessage(
        { id: "app.component.table.edit", defaultMessage: "Edit {target}" },
        { target: itemLineText }
      ),
      noBorder: true
    },
    /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null)
  ), canCreate && /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      onClick: handleCloneClick(rowId),
      label: formatMessage(
        {
          id: "app.component.table.duplicate",
          defaultMessage: "Duplicate {target}"
        },
        { target: itemLineText }
      ),
      noBorder: true
    },
    /* @__PURE__ */ react.createElement(Duplicate/* default */.Z, null)
  ), canDelete && /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      onClick: () => {
        trackUsage("willDeleteEntryFromList");
        setSelectedEntries([rowId]);
        setIsConfirmDeleteRowOpen(true);
      },
      label: formatMessage(
        { id: "global.delete-target", defaultMessage: "Delete {target}" },
        { target: itemLineText }
      ),
      noBorder: true
    },
    /* @__PURE__ */ react.createElement(Trash/* default */.Z, null)
  )));
};
EntityActionsDataCell.defaultProps = {
  canCreate: false,
  canDelete: false
};
EntityActionsDataCell.propTypes = {
  rowId: (prop_types_default()).number.isRequired,
  index: (prop_types_default()).number.isRequired,
  setIsConfirmDeleteRowOpen: (prop_types_default()).func.isRequired,
  handleCloneClick: (prop_types_default()).func.isRequired,
  canCreate: (prop_types_default()).bool,
  canDelete: (prop_types_default()).bool
};
const Root = ({ children, onConfirmDelete, isConfirmDeleteRowOpen, setIsConfirmDeleteRowOpen }) => {
  const [isLoading, setIsLoading] = react.useState(false);
  const { selectedEntries, setSelectedEntries } = (0,dist/* useTableContext */.Sh)();
  const handleConfirmDelete = async () => {
    try {
      setIsLoading(true);
      await onConfirmDelete(selectedEntries[0]);
      setIsConfirmDeleteRowOpen(false);
      setIsLoading(false);
      setSelectedEntries([]);
    } catch (error) {
      setIsLoading(false);
      setIsConfirmDeleteRowOpen(false);
    }
  };
  return /* @__PURE__ */ react.createElement(dist/* Table */.iA.Body, null, children, /* @__PURE__ */ react.createElement(
    ConfirmDialogDelete,
    {
      isConfirmButtonLoading: isLoading,
      onConfirm: handleConfirmDelete,
      onToggleDialog: () => setIsConfirmDeleteRowOpen(!isConfirmDeleteRowOpen),
      isOpen: isConfirmDeleteRowOpen
    }
  ));
};
Root.propTypes = {
  children: (prop_types_default()).node.isRequired,
  onConfirmDelete: (prop_types_default()).func.isRequired,
  isConfirmDeleteRowOpen: (prop_types_default()).bool.isRequired,
  setIsConfirmDeleteRowOpen: (prop_types_default()).func.isRequired
};
const Body = { CheckboxDataCell, EntityActionsDataCell, Root };

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/pages/ListView/reducer.js
var ListView_reducer = __webpack_require__(52212);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/selectors.js


const listViewDomain = () => (state) => state["content-manager_listView"] || ListView_reducer/* initialState */.E;
const makeSelectListView = () => (0,reselect_es/* createSelector */.P1)(listViewDomain(), (substate) => {
  return substate;
});
const selectDisplayedHeaders = (state) => {
  const { displayedHeaders } = state["content-manager_listView"];
  return displayedHeaders;
};
/* harmony default export */ const ListView_selectors = (makeSelectListView);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/components/BulkActionButtons/ConfirmBulkActionDialog/index.js











const ConfirmBulkActionDialog = ({ onToggleDialog, isOpen, dialogBody, endAction }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(
    Dialog/* Dialog */.V,
    {
      onClose: onToggleDialog,
      title: formatMessage({
        id: "app.components.ConfirmDialog.title",
        defaultMessage: "Confirmation"
      }),
      isOpen
    },
    /* @__PURE__ */ react.createElement(DialogBody/* DialogBody */.a, { icon: /* @__PURE__ */ react.createElement(ExclamationMarkCircle/* default */.Z, null) }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, dialogBody)),
    /* @__PURE__ */ react.createElement(
      DialogFooter/* DialogFooter */.c,
      {
        startAction: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: onToggleDialog, variant: "tertiary" }, formatMessage({
          id: "app.components.Button.cancel",
          defaultMessage: "Cancel"
        })),
        endAction
      }
    )
  );
};
ConfirmBulkActionDialog.propTypes = {
  isOpen: (prop_types_default()).bool.isRequired,
  onToggleDialog: (prop_types_default()).func.isRequired,
  dialogBody: (prop_types_default()).node.isRequired,
  endAction: (prop_types_default()).node.isRequired
};
const confirmDialogsPropTypes = {
  isConfirmButtonLoading: (prop_types_default()).bool.isRequired,
  isOpen: (prop_types_default()).bool.isRequired,
  onConfirm: (prop_types_default()).func.isRequired,
  onToggleDialog: (prop_types_default()).func.isRequired
};
const BoldChunk = (chunks) => /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold" }, chunks);
const ConfirmDialogPublishAll = ({ isOpen, onToggleDialog, isConfirmButtonLoading, onConfirm }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { get } = (0,dist/* useFetchClient */.kY)();
  const { selectedEntries } = (0,dist/* useTableContext */.Sh)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { formatAPIError } = (0,dist/* useAPIErrorHandler */.So)(utils/* getTrad */.OB);
  const {
    contentType: { uid: slug }
  } = (0,es/* useSelector */.v9)(listViewDomain());
  const [{ query }] = (0,dist/* useQueryParams */.Kx)();
  const {
    data: countDraftRelations,
    isLoading,
    isError
  } = (0,react_query_es.useQuery)(
    ["content-manager", "draft-relations", slug, selectedEntries],
    async () => {
      const {
        data: { data }
      } = await get(
        `/content-manager/collection-types/${slug}/actions/countManyEntriesDraftRelations`,
        {
          params: {
            ids: selectedEntries,
            locale: query?.plugins?.i18n?.locale
          }
        }
      );
      return data;
    },
    {
      // The API is called everytime you select/deselect an entry, this check avoids us sending a query with bad data
      enabled: selectedEntries.length > 0,
      onError(error) {
        toggleNotification({ type: "warning", message: formatAPIError(error) });
      }
    }
  );
  if (isError) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(
    ConfirmBulkActionDialog,
    {
      isOpen: isOpen && !isLoading,
      onToggleDialog,
      dialogBody: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { id: "confirm-description", textAlign: "center" }, countDraftRelations > 0 && formatMessage(
        {
          id: (0,utils/* getTrad */.OB)(`popUpwarning.warning.bulk-has-draft-relations.message`),
          defaultMessage: "<b>{count} {count, plural, one { relation } other { relations } } out of {entities} { entities, plural, one { entry } other { entries } } {count, plural, one { is } other { are } }</b> not published yet and might lead to unexpected behavior. "
        },
        {
          b: BoldChunk,
          count: countDraftRelations,
          entities: selectedEntries.length
        }
      ), formatMessage({
        id: (0,utils/* getTrad */.OB)("popUpWarning.bodyMessage.contentType.publish.all"),
        defaultMessage: "Are you sure you want to publish these entries?"
      })), /* @__PURE__ */ react.createElement(components_InjectionZoneList, { area: "contentManager.listView.publishModalAdditionalInfos" })),
      endAction: /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          onClick: onConfirm,
          variant: "secondary",
          startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
          loading: isConfirmButtonLoading
        },
        formatMessage({
          id: "app.utils.publish",
          defaultMessage: "Publish"
        })
      )
    }
  );
};
ConfirmDialogPublishAll.propTypes = confirmDialogsPropTypes;


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.mjs + 1 modules
var Loader_Loader = __webpack_require__(77970);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CrossCircle.mjs
var CrossCircle = __webpack_require__(8305);
// EXTERNAL MODULE: ./.cache/admin/src/utils/formatAPIErrors.js
var formatAPIErrors = __webpack_require__(26779);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/components/BulkActionButtons/SelectedEntriesModal/index.js















const SelectedEntriesModal_TypographyMaxWidth = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z))`
  max-width: 300px;
`;
const EntryValidationText = ({ validationErrors, isPublished }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  if (validationErrors) {
    const validationErrorsMessages = Object.entries(validationErrors).map(
      ([key, value]) => formatMessage(
        { id: `${value.id}.withField`, defaultMessage: value.defaultMessage },
        { field: key }
      )
    ).join(" ");
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2 }, /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { color: "danger600", as: CrossCircle/* default */.Z }), /* @__PURE__ */ react.createElement(Tooltip/* Tooltip */.u, { description: validationErrorsMessages }, /* @__PURE__ */ react.createElement(SelectedEntriesModal_TypographyMaxWidth, { textColor: "danger600", variant: "omega", fontWeight: "semiBold", ellipsis: true }, validationErrorsMessages)));
  }
  if (isPublished) {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2 }, /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { color: "success600", as: CheckCircle/* default */.Z }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "success600", fontWeight: "bold" }, formatMessage({
      id: "content-manager.bulk-publish.already-published",
      defaultMessage: "Already Published"
    })));
  }
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2 }, /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { color: "success600", as: CheckCircle/* default */.Z }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
    id: "app.utils.ready-to-publish",
    defaultMessage: "Ready to publish"
  })));
};
EntryValidationText.defaultProps = {
  validationErrors: void 0,
  isPublished: false
};
EntryValidationText.propTypes = {
  validationErrors: prop_types_default().shape({
    [(prop_types_default()).string]: prop_types_default().shape({
      id: (prop_types_default()).string,
      defaultMessage: (prop_types_default()).string
    })
  }),
  isPublished: (prop_types_default()).bool
};
const SelectedEntriesTableContent = ({
  isPublishing,
  rowsToDisplay,
  entriesToPublish,
  validationErrors
}) => {
  const {
    location: { pathname }
  } = (0,react_router/* useHistory */.k6)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const listViewStore = (0,es/* useSelector */.v9)(listViewDomain());
  const { mainField } = listViewStore.contentType.settings;
  const shouldDisplayMainField = mainField != null && mainField !== "id";
  const getItemLineText = (count) => formatMessage(
    {
      id: "content-manager.components.ListViewTable.row-line",
      defaultMessage: "item line {number}"
    },
    { number: count + 1 }
  );
  return /* @__PURE__ */ react.createElement(dist/* Table */.iA.Content, null, /* @__PURE__ */ react.createElement(dist/* Table */.iA.Head, null, /* @__PURE__ */ react.createElement(dist/* Table */.iA.HeaderCheckboxCell, null), /* @__PURE__ */ react.createElement(dist/* Table */.iA.HeaderCell, { fieldSchemaType: "number", label: "id", name: "id" }), shouldDisplayMainField && /* @__PURE__ */ react.createElement(dist/* Table */.iA.HeaderCell, { fieldSchemaType: "string", label: "name", name: "name" }), /* @__PURE__ */ react.createElement(dist/* Table */.iA.HeaderCell, { fieldSchemaType: "string", label: "status", name: "status" })), /* @__PURE__ */ react.createElement(dist/* Table */.iA.LoadingBody, null), /* @__PURE__ */ react.createElement(dist/* Table */.iA.Body, null, rowsToDisplay.map((row, index) => /* @__PURE__ */ react.createElement(Tr.Tr, { key: row.id }, /* @__PURE__ */ react.createElement(Body.CheckboxDataCell, { rowId: row.id, index }), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, row.id)), shouldDisplayMainField && /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, row[mainField])), /* @__PURE__ */ react.createElement(Cell.Td, null, isPublishing && entriesToPublish.includes(row.id) ? /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
    id: "content-manager.success.record.publishing",
    defaultMessage: "Publishing..."
  })), /* @__PURE__ */ react.createElement(Loader_Loader/* Loader */.a, { small: true })) : /* @__PURE__ */ react.createElement(
    EntryValidationText,
    {
      validationErrors: validationErrors[row.id],
      isPublished: row.publishedAt !== null
    }
  )), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      forwardedAs: react_router_dom/* Link */.rU,
      to: {
        pathname: `${pathname}/${row.id}`,
        state: { from: pathname }
      },
      label: formatMessage(
        { id: "app.component.table.edit", defaultMessage: "Edit {target}" },
        { target: getItemLineText(index) }
      ),
      noBorder: true,
      target: "_blank",
      marginLeft: "auto"
    },
    /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null)
  ))))));
};
SelectedEntriesTableContent.defaultProps = {
  isPublishing: false,
  rowsToDisplay: [],
  entriesToPublish: [],
  validationErrors: {}
};
SelectedEntriesTableContent.propTypes = {
  isPublishing: (prop_types_default()).bool,
  rowsToDisplay: prop_types_default().arrayOf((prop_types_default()).object),
  entriesToPublish: prop_types_default().arrayOf((prop_types_default()).number),
  validationErrors: prop_types_default().shape({
    [(prop_types_default()).string]: prop_types_default().shape({
      id: (prop_types_default()).string,
      defaultMessage: (prop_types_default()).string
    })
  })
};
const SelectedEntriesModal_BoldChunk = (chunks) => /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold" }, chunks);
const SelectedEntriesModalContent = ({
  toggleModal,
  refetchModalData,
  setEntriesToFetch,
  setSelectedListViewEntries,
  validationErrors
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { selectedEntries, rows, onSelectRow, isLoading, isFetching } = (0,dist/* useTableContext */.Sh)();
  const [isDialogOpen, setIsDialogOpen] = react.useState(false);
  const [rowsToDisplay, setRowsToDisplay] = react.useState([]);
  const [publishedCount, setPublishedCount] = react.useState(0);
  const entriesToPublish = rows.filter(({ id }) => selectedEntries.includes(id) && !validationErrors[id]).map(({ id }) => id);
  const { post } = (0,dist/* useFetchClient */.kY)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { contentType } = (0,es/* useSelector */.v9)(listViewDomain());
  const selectedEntriesWithErrorsCount = rowsToDisplay.filter(
    ({ id }) => selectedEntries.includes(id) && validationErrors[id]
  ).length;
  const selectedEntriesPublished = rowsToDisplay.filter(
    ({ id, publishedAt }) => selectedEntries.includes(id) && publishedAt
  ).length;
  const selectedEntriesWithNoErrorsCount = selectedEntries.length - selectedEntriesWithErrorsCount - selectedEntriesPublished;
  const bulkPublishMutation = (0,react_query_es.useMutation)(
    (data) => post(`/content-manager/collection-types/${contentType.uid}/actions/bulkPublish`, data),
    {
      onSuccess() {
        const update = rowsToDisplay.filter((row) => {
          if (entriesToPublish.includes(row.id)) {
            onSelectRow({ name: row.id, value: false });
          }
          return !entriesToPublish.includes(row.id);
        });
        setRowsToDisplay(update);
        const publishedIds = update.map(({ id }) => id);
        setEntriesToFetch(publishedIds);
        setSelectedListViewEntries(publishedIds);
        if (update.length === 0) {
          toggleModal();
        }
        toggleNotification({
          type: "success",
          message: { id: "content-manager.success.record.publish", defaultMessage: "Published" }
        });
      },
      onError(error) {
        toggleNotification({
          type: "warning",
          message: (0,formatAPIErrors/* default */.Z)(error)
        });
      }
    }
  );
  const toggleDialog = () => setIsDialogOpen((prev) => !prev);
  const handleConfirmBulkPublish = async () => {
    toggleDialog();
    const { data } = await bulkPublishMutation.mutateAsync({ ids: entriesToPublish });
    setPublishedCount(data.count);
  };
  const getFormattedCountMessage = () => {
    if (publishedCount) {
      return formatMessage(
        {
          id: (0,utils/* getTrad */.OB)("containers.ListPage.selectedEntriesModal.publishedCount"),
          defaultMessage: "<b>{publishedCount}</b> {publishedCount, plural, =0 {entries} one {entry} other {entries}} published. <b>{withErrorsCount}</b> {withErrorsCount, plural, =0 {entries} one {entry} other {entries}} waiting for action."
        },
        {
          publishedCount,
          withErrorsCount: selectedEntriesWithErrorsCount,
          b: SelectedEntriesModal_BoldChunk
        }
      );
    }
    return formatMessage(
      {
        id: (0,utils/* getTrad */.OB)("containers.ListPage.selectedEntriesModal.selectedCount"),
        defaultMessage: "<b>{alreadyPublishedCount}</b> {alreadyPublishedCount, plural, =0 {entries} one {entry} other {entries}} already published. <b>{readyToPublishCount}</b> {readyToPublishCount, plural, =0 {entries} one {entry} other {entries}} ready to publish. <b>{withErrorsCount}</b> {withErrorsCount, plural, =0 {entries} one {entry} other {entries}} waiting for action."
      },
      {
        readyToPublishCount: selectedEntriesWithNoErrorsCount,
        withErrorsCount: selectedEntriesWithErrorsCount,
        alreadyPublishedCount: selectedEntriesPublished,
        b: SelectedEntriesModal_BoldChunk
      }
    );
  };
  react.useEffect(() => {
    if (rows.length > 0) {
      setRowsToDisplay(rows);
    }
  }, [rows]);
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose: toggleModal, labelledBy: "title" }, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "title" }, formatMessage({
    id: (0,utils/* getTrad */.OB)("containers.ListPage.selectedEntriesModal.title"),
    defaultMessage: "Publish entries"
  }))), /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, getFormattedCountMessage()), /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginTop: 5 }, /* @__PURE__ */ react.createElement(
    SelectedEntriesTableContent,
    {
      isPublishing: bulkPublishMutation.isLoading,
      rowsToDisplay,
      entriesToPublish,
      validationErrors
    }
  ))), /* @__PURE__ */ react.createElement(
    ModalFooter/* ModalFooter */.m,
    {
      startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: toggleModal, variant: "tertiary" }, formatMessage({
        id: "app.components.Button.cancel",
        defaultMessage: "Cancel"
      })),
      endActions: /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2 }, /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: refetchModalData, variant: "tertiary", loading: isFetching }, formatMessage({ id: "app.utils.refresh", defaultMessage: "Refresh" })), /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          onClick: toggleDialog,
          disabled: selectedEntries.length === 0 || selectedEntries.length === selectedEntriesWithErrorsCount || isLoading,
          loading: bulkPublishMutation.isLoading
        },
        formatMessage({ id: "app.utils.publish", defaultMessage: "Publish" })
      ))
    }
  ), /* @__PURE__ */ react.createElement(
    ConfirmDialogPublishAll,
    {
      isOpen: isDialogOpen,
      onToggleDialog: toggleDialog,
      isConfirmButtonLoading: bulkPublishMutation.isLoading,
      onConfirm: handleConfirmBulkPublish
    }
  ));
};
SelectedEntriesModalContent.defaultProps = {
  validationErrors: {}
};
SelectedEntriesModalContent.propTypes = {
  toggleModal: (prop_types_default()).func.isRequired,
  refetchModalData: (prop_types_default()).func.isRequired,
  setEntriesToFetch: (prop_types_default()).func.isRequired,
  setSelectedListViewEntries: (prop_types_default()).func.isRequired,
  validationErrors: prop_types_default().shape({
    [(prop_types_default()).string]: prop_types_default().shape({
      id: (prop_types_default()).string,
      defaultMessage: (prop_types_default()).string
    })
  })
};
const SelectedEntriesModal = ({ onToggle }) => {
  const {
    selectedEntries: selectedListViewEntries,
    setSelectedEntries: setSelectedListViewEntries
  } = (0,dist/* useTableContext */.Sh)();
  const { contentType, components } = (0,es/* useSelector */.v9)(listViewDomain());
  const [entriesToFetch, setEntriesToFetch] = react.useState(selectedListViewEntries);
  const [
    {
      query: { sort, plugins }
    }
  ] = (0,dist/* useQueryParams */.Kx)();
  const queryParams = {
    page: 1,
    pageSize: entriesToFetch.length,
    sort,
    filters: {
      id: {
        $in: entriesToFetch
      }
    },
    locale: plugins?.i18n?.locale
  };
  const { get } = (0,dist/* useFetchClient */.kY)();
  const { data, isLoading, isFetching, refetch } = (0,react_query_es.useQuery)(
    ["entries", contentType.uid, queryParams],
    async () => {
      const { data: data2 } = await get(`content-manager/collection-types/${contentType.uid}`, {
        params: queryParams
      });
      if (data2.results) {
        const schema = (0,utils/* createYupSchema */.Ex)(
          contentType,
          { components },
          { isDraft: false, isJSONTestDisabled: true }
        );
        const validationErrors = {};
        const rows = data2.results.map((entry) => {
          try {
            schema.validateSync(entry, { abortEarly: false });
            return entry;
          } catch (e) {
            validationErrors[entry.id] = (0,dist/* getYupInnerErrors */.CJ)(e);
            return entry;
          }
        });
        return { rows, validationErrors };
      }
      return {
        rows: [],
        validationErrors: {}
      };
    }
  );
  return /* @__PURE__ */ react.createElement(
    dist/* Table */.iA.Root,
    {
      rows: data?.rows,
      defaultSelectedEntries: selectedListViewEntries,
      colCount: 4,
      isLoading,
      isFetching
    },
    /* @__PURE__ */ react.createElement(
      SelectedEntriesModalContent,
      {
        setSelectedListViewEntries,
        setEntriesToFetch,
        toggleModal: onToggle,
        refetchModalData: refetch,
        validationErrors: data?.validationErrors
      }
    )
  );
};
SelectedEntriesModal.propTypes = {
  onToggle: (prop_types_default()).func.isRequired
};
/* harmony default export */ const BulkActionButtons_SelectedEntriesModal = (SelectedEntriesModal);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/components/BulkActionButtons/index.js












const ConfirmDialogUnpublishAll = ({
  isOpen,
  onToggleDialog,
  isConfirmButtonLoading,
  onConfirm
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(
    ConfirmBulkActionDialog,
    {
      isOpen,
      onToggleDialog,
      dialogBody: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { id: "confirm-description", textAlign: "center" }, formatMessage({
        id: (0,utils/* getTrad */.OB)("popUpWarning.bodyMessage.contentType.unpublish.all"),
        defaultMessage: "Are you sure you want to unpublish these entries?"
      })), /* @__PURE__ */ react.createElement(components_InjectionZoneList, { area: "contentManager.listView.unpublishModalAdditionalInfos" })),
      endAction: /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          onClick: onConfirm,
          variant: "secondary",
          startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
          loading: isConfirmButtonLoading
        },
        formatMessage({
          id: "app.utils.unpublish",
          defaultMessage: "Unpublish"
        })
      )
    }
  );
};
ConfirmDialogUnpublishAll.propTypes = confirmDialogsPropTypes;
const ConfirmDialogDeleteAll = ({ isOpen, onToggleDialog, isConfirmButtonLoading, onConfirm }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(
    ConfirmBulkActionDialog,
    {
      isOpen,
      onToggleDialog,
      dialogBody: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { id: "confirm-description", textAlign: "center" }, formatMessage({
        id: (0,utils/* getTrad */.OB)("popUpWarning.bodyMessage.contentType.delete.all"),
        defaultMessage: "Are you sure you want to delete these entries?"
      })), /* @__PURE__ */ react.createElement(components_InjectionZoneList, { area: "contentManager.listView.deleteModalAdditionalInfos" })),
      endAction: /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          onClick: onConfirm,
          variant: "danger-light",
          startIcon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null),
          id: "confirm-delete",
          loading: isConfirmButtonLoading
        },
        formatMessage({
          id: "app.components.Button.confirm",
          defaultMessage: "Confirm"
        })
      )
    }
  );
};
ConfirmDialogDeleteAll.propTypes = confirmDialogsPropTypes;
const BulkActionButtons = ({
  showPublish,
  showDelete,
  onConfirmDeleteAll,
  onConfirmUnpublishAll,
  refetchData
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const { data } = (0,es/* useSelector */.v9)(listViewDomain());
  const { selectedEntries, setSelectedEntries } = (0,dist/* useTableContext */.Sh)();
  const [isConfirmButtonLoading, setIsConfirmButtonLoading] = react.useState(false);
  const [isSelectedEntriesModalOpen, setIsSelectedEntriesModalOpen] = react.useState(false);
  const [dialogToOpen, setDialogToOpen] = react.useState(null);
  const selectedEntriesObjects = data.filter((entry) => selectedEntries.includes(entry.id));
  const publishButtonIsShown = showPublish && selectedEntriesObjects.some((entry) => !entry.publishedAt);
  const unpublishButtonIsShown = showPublish && selectedEntriesObjects.some((entry) => entry.publishedAt);
  const toggleDeleteDialog = () => {
    if (dialogToOpen === "delete") {
      setDialogToOpen(null);
    } else {
      setDialogToOpen("delete");
      trackUsage("willBulkDeleteEntries");
    }
  };
  const toggleUnpublishDialog = () => {
    if (dialogToOpen === "unpublish") {
      setDialogToOpen(null);
    } else {
      setDialogToOpen("unpublish");
      trackUsage("willBulkUnpublishEntries");
    }
  };
  const handleBulkAction = async (confirmAction, toggleDialog) => {
    try {
      setIsConfirmButtonLoading(true);
      await confirmAction(selectedEntries);
      setIsConfirmButtonLoading(false);
      toggleDialog();
      setSelectedEntries([]);
    } catch (error) {
      setIsConfirmButtonLoading(false);
      toggleDialog();
    }
  };
  const handleBulkDelete = () => handleBulkAction(onConfirmDeleteAll, toggleDeleteDialog);
  const handleBulkUnpublish = () => handleBulkAction(onConfirmUnpublishAll, toggleUnpublishDialog);
  const handleToggleSelectedEntriesModal = () => {
    setIsSelectedEntriesModalOpen((prev) => {
      if (prev) {
        refetchData();
      }
      return !prev;
    });
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, publishButtonIsShown && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "tertiary", onClick: handleToggleSelectedEntriesModal }, formatMessage({ id: "app.utils.publish", defaultMessage: "Publish" })), isSelectedEntriesModalOpen && /* @__PURE__ */ react.createElement(BulkActionButtons_SelectedEntriesModal, { onToggle: handleToggleSelectedEntriesModal })), unpublishButtonIsShown && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "tertiary", onClick: toggleUnpublishDialog }, formatMessage({ id: "app.utils.unpublish", defaultMessage: "Unpublish" })), /* @__PURE__ */ react.createElement(
    ConfirmDialogUnpublishAll,
    {
      isOpen: dialogToOpen === "unpublish",
      onToggleDialog: toggleUnpublishDialog,
      isConfirmButtonLoading,
      onConfirm: handleBulkUnpublish
    }
  )), showDelete && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "danger-light", onClick: toggleDeleteDialog }, formatMessage({ id: "global.delete", defaultMessage: "Delete" })), /* @__PURE__ */ react.createElement(
    ConfirmDialogDeleteAll,
    {
      isOpen: dialogToOpen === "delete",
      onToggleDialog: toggleDeleteDialog,
      isConfirmButtonLoading,
      onConfirm: handleBulkDelete
    }
  )));
};
BulkActionButtons.defaultProps = {
  showPublish: false,
  showDelete: false,
  onConfirmDeleteAll() {
  },
  onConfirmUnpublishAll() {
  },
  refetchData() {
  }
};
BulkActionButtons.propTypes = {
  showPublish: (prop_types_default()).bool,
  showDelete: (prop_types_default()).bool,
  onConfirmDeleteAll: (prop_types_default()).func,
  onConfirmUnpublishAll: (prop_types_default()).func,
  refetchData: (prop_types_default()).func
};
/* harmony default export */ const components_BulkActionButtons = (BulkActionButtons);

// EXTERNAL MODULE: ./node_modules/date-fns/esm/parseISO/index.js
var parseISO = __webpack_require__(33866);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/components/CellContent/CellValue.js




const CellValue = ({ type, value }) => {
  const { formatDate, formatTime, formatNumber } = (0,useIntl/* default */.Z)();
  let formattedValue = value;
  if (type === "date") {
    formattedValue = formatDate((0,parseISO/* default */.Z)(value), { dateStyle: "full" });
  }
  if (type === "datetime") {
    formattedValue = formatDate(value, { dateStyle: "full", timeStyle: "short" });
  }
  if (type === "time") {
    const [hour, minute, second] = value.split(":");
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(second);
    formattedValue = formatTime(date, {
      numeric: "auto",
      style: "short"
    });
  }
  if (["float", "decimal"].includes(type)) {
    formattedValue = formatNumber(value, {
      // Should be kept in sync with the corresponding value
      // in the design-system/NumberInput: https://github.com/strapi/design-system/blob/main/packages/strapi-design-system/src/NumberInput/NumberInput.js#L53
      maximumFractionDigits: 20
    });
  }
  if (["integer", "biginteger"].includes(type)) {
    formattedValue = formatNumber(value, { maximumFractionDigits: 0 });
  }
  return toString_default()(formattedValue);
};
CellValue.propTypes = {
  type: (prop_types_default()).string.isRequired,
  value: (prop_types_default()).any.isRequired
};
/* harmony default export */ const CellContent_CellValue = (CellValue);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Avatar/Avatar.mjs
var Avatar = __webpack_require__(12391);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/components/CellContent/Media/FileWrapper.js




const FileWrapper_Wrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  position: relative;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background: ${({ theme }) => theme.colors.neutral150};
  padding-left: 1px;

  span {
    line-height: 0.6rem;
    font-size: 0.6rem;
  }
`;
const FileWrapper = ({ children, ...props }) => {
  return /* @__PURE__ */ react.createElement(FileWrapper_Wrapper, { justifyContent: "center", alignItems: "center", as: "span", ...props }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, children));
};
FileWrapper.propTypes = {
  children: (prop_types_default()).string.isRequired
};
/* harmony default export */ const Media_FileWrapper = (FileWrapper);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/components/CellContent/Media/index.js





const Media_Media = ({ url, mime, alternativeText, name, ext, formats }) => {
  const fileURL = (0,dist/* prefixFileUrlWithBackendUrl */.CR)(url);
  if (mime.includes("image")) {
    const thumbnail = formats?.thumbnail?.url || null;
    const mediaURL = (0,dist/* prefixFileUrlWithBackendUrl */.CR)(thumbnail) || fileURL;
    return /* @__PURE__ */ react.createElement(Avatar/* Avatar */.q, { src: mediaURL, alt: alternativeText || name, preview: true });
  }
  const fileExtension = (0,dist/* getFileExtension */.mD)(ext);
  const fileName = name.length > 100 ? `${name.substring(0, 100)}...` : name;
  return /* @__PURE__ */ react.createElement(Tooltip/* Tooltip */.u, { description: fileName }, /* @__PURE__ */ react.createElement(Media_FileWrapper, null, fileExtension));
};
Media_Media.defaultProps = {
  alternativeText: null,
  formats: null
};
Media_Media.propTypes = {
  alternativeText: (prop_types_default()).string,
  ext: (prop_types_default()).string.isRequired,
  formats: (prop_types_default()).object,
  mime: (prop_types_default()).string.isRequired,
  name: (prop_types_default()).string.isRequired,
  url: (prop_types_default()).string.isRequired
};
/* harmony default export */ const CellContent_Media = (Media_Media);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Avatar/AvatarGroup.mjs
var AvatarGroup = __webpack_require__(64617);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/components/CellContent/MultipleMedias.js





const MultipleMedia = ({ value }) => {
  return /* @__PURE__ */ react.createElement(AvatarGroup/* AvatarGroup */.H, null, value.map((file, index) => {
    const key = `${file.id}${index}`;
    if (index === 3) {
      const remainingFiles = `+${value.length - 3}`;
      return /* @__PURE__ */ react.createElement(Media_FileWrapper, { key, preview: false }, remainingFiles);
    }
    if (index > 3) {
      return null;
    }
    return /* @__PURE__ */ react.createElement(CellContent_Media, { key, ...file });
  }));
};
MultipleMedia.propTypes = {
  value: prop_types_default().arrayOf(
    prop_types_default().shape({
      alternativeText: (prop_types_default()).string,
      ext: (prop_types_default()).string.isRequired,
      formats: (prop_types_default()).object,
      mime: (prop_types_default()).string.isRequired,
      name: (prop_types_default()).string.isRequired,
      url: (prop_types_default()).string.isRequired
    })
  ).isRequired
};
/* harmony default export */ const MultipleMedias = (MultipleMedia);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Badge/Badge.mjs
var Badge = __webpack_require__(4963);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/components/CellContent/RelationMultiple/index.js










const RelationMultiple = ({ fieldSchema, metadatas, name, entityId, value, contentType }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.G)();
  const [isOpen, setIsOpen] = (0,react.useState)(false);
  const { get } = (0,dist/* useFetchClient */.kY)();
  const { data, status } = (0,react_query_es.useQuery)(
    [fieldSchema.targetModel, entityId],
    async () => {
      const {
        data: { results, pagination }
      } = await get(
        `/content-manager/relations/${contentType.uid}/${entityId}/${name.split(".")[0]}`
      );
      return { results, pagination };
    },
    {
      enabled: isOpen,
      staleTime: 0,
      select: (data2) => ({
        ...data2,
        results: [...data2.results].reverse()
      })
    }
  );
  (0,react.useEffect)(() => {
    if (data) {
      notifyStatus(
        formatMessage({
          id: (0,utils/* getTrad */.OB)("DynamicTable.relation-loaded"),
          defaultMessage: "Relations have been loaded"
        })
      );
    }
  }, [data, formatMessage, notifyStatus]);
  return /* @__PURE__ */ react.createElement(Menu/* Root */.fC, { onOpenChange: (isOpen2) => setIsOpen(isOpen2) }, /* @__PURE__ */ react.createElement(MenuTrigger, { onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 1, wrap: "nowrap" }, /* @__PURE__ */ react.createElement(Badge/* Badge */.C, null, value.count), formatMessage(
    {
      id: "content-manager.containers.ListPage.items",
      defaultMessage: "{number, plural, =0 {items} one {item} other {items}}"
    },
    { number: value.count }
  ))), /* @__PURE__ */ react.createElement(Menu/* Content */.VY, null, status !== "success" && /* @__PURE__ */ react.createElement(Menu/* Item */.ck, { disabled: true }, /* @__PURE__ */ react.createElement(Loader_Loader/* Loader */.a, { small: true }, formatMessage({
    id: (0,utils/* getTrad */.OB)("ListViewTable.relation-loading"),
    defaultMessage: "Relations are loading"
  }))), status === "success" && /* @__PURE__ */ react.createElement(react.Fragment, null, data?.results.map((entry) => /* @__PURE__ */ react.createElement(Menu/* Item */.ck, { key: entry.id, disabled: true }, /* @__PURE__ */ react.createElement(RelationMultiple_TypographyMaxWidth, { ellipsis: true }, /* @__PURE__ */ react.createElement(
    CellContent_CellValue,
    {
      type: metadatas.mainField.schema.type,
      value: entry[metadatas.mainField.name] || entry.id
    }
  )))), data?.pagination.total > 10 && /* @__PURE__ */ react.createElement(
    Menu/* Item */.ck,
    {
      "aria-disabled": true,
      "aria-label": formatMessage({
        id: (0,utils/* getTrad */.OB)("ListViewTable.relation-more"),
        defaultMessage: "This relation contains more entities than displayed"
      })
    },
    /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, "\u2026")
  ))));
};
RelationMultiple.propTypes = {
  contentType: prop_types_default().shape({
    uid: (prop_types_default()).string.isRequired
  }).isRequired,
  fieldSchema: prop_types_default().shape({
    relation: (prop_types_default()).string,
    targetModel: (prop_types_default()).string,
    type: (prop_types_default()).string.isRequired
  }).isRequired,
  metadatas: prop_types_default().shape({
    mainField: prop_types_default().shape({
      name: (prop_types_default()).string.isRequired,
      schema: prop_types_default().shape({ type: (prop_types_default()).string.isRequired }).isRequired
    })
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  entityId: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
  value: (prop_types_default()).object.isRequired
};
const RelationMultiple_TypographyMaxWidth = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z))`
  max-width: 500px;
`;
const MenuTrigger = (0,styled_components_browser_esm/* default */.ZP)(Menu/* Trigger */.xz)`
  svg {
    width: ${6 / 16}rem;
    height: ${4 / 16}rem;
  }
`;
/* harmony default export */ const CellContent_RelationMultiple = (RelationMultiple);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/components/CellContent/RelationSingle/index.js





const RelationSingle_TypographyMaxWidth = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z))`
  max-width: 500px;
`;
const RelationSingle = ({ metadatas, value }) => {
  return /* @__PURE__ */ react.createElement(RelationSingle_TypographyMaxWidth, { textColor: "neutral800", ellipsis: true }, /* @__PURE__ */ react.createElement(
    CellContent_CellValue,
    {
      type: metadatas.mainField.schema.type,
      value: value[metadatas.mainField.name] ?? value.id
    }
  ));
};
RelationSingle.propTypes = {
  metadatas: prop_types_default().shape({
    mainField: prop_types_default().shape({
      name: (prop_types_default()).string.isRequired,
      schema: prop_types_default().shape({ type: (prop_types_default()).string.isRequired }).isRequired
    })
  }).isRequired,
  value: (prop_types_default()).object.isRequired
};
/* harmony default export */ const CellContent_RelationSingle = (RelationSingle);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/components/CellContent/RepeatableComponent/index.js







const RepeatableComponent_TypographyMaxWidth = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z))`
  max-width: 500px;
`;
const RepeatableComponentCell = ({ value, metadatas }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const {
    mainField: { type: mainFieldType, name: mainFieldName }
  } = metadatas;
  return /* @__PURE__ */ react.createElement(Menu/* Root */.fC, null, /* @__PURE__ */ react.createElement(RepeatableComponent_MenuTrigger, { onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ react.createElement(Badge/* Badge */.C, null, value.length), " ", formatMessage(
    {
      id: "content-manager.containers.ListPage.items",
      defaultMessage: "{number, plural, =0 {items} one {item} other {items}}"
    },
    { number: value.length }
  )), /* @__PURE__ */ react.createElement(Menu/* Content */.VY, null, value.map((item) => /* @__PURE__ */ react.createElement(Menu/* Item */.ck, { key: item.id, disabled: true }, /* @__PURE__ */ react.createElement(RepeatableComponent_TypographyMaxWidth, { ellipsis: true }, /* @__PURE__ */ react.createElement(CellContent_CellValue, { type: mainFieldType, value: item[mainFieldName] || item.id }))))));
};
RepeatableComponentCell.propTypes = {
  metadatas: prop_types_default().shape({
    mainField: prop_types_default().shape({
      name: (prop_types_default()).string,
      type: (prop_types_default()).string,
      value: (prop_types_default()).string
    })
  }).isRequired,
  value: (prop_types_default()).array.isRequired
};
const RepeatableComponent_MenuTrigger = (0,styled_components_browser_esm/* default */.ZP)(Menu/* Trigger */.xz)`
  svg {
    width: ${6 / 16}rem;
    height: ${4 / 16}rem;
  }
`;
/* harmony default export */ const CellContent_RepeatableComponent = (RepeatableComponentCell);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/components/CellContent/SingleComponent/index.js





const SingleComponent_TypographyMaxWidth = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z))`
  max-width: 250px;
`;
const SingleComponentCell = ({ value, metadatas }) => {
  const { mainField } = metadatas;
  const content = value[mainField.name];
  return /* @__PURE__ */ react.createElement(Tooltip/* Tooltip */.u, { label: content }, /* @__PURE__ */ react.createElement(SingleComponent_TypographyMaxWidth, { textColor: "neutral800", ellipsis: true }, /* @__PURE__ */ react.createElement(CellContent_CellValue, { type: mainField.type, value: content })));
};
SingleComponentCell.propTypes = {
  metadatas: prop_types_default().shape({
    mainField: prop_types_default().shape({
      name: (prop_types_default()).string,
      type: (prop_types_default()).string,
      value: (prop_types_default()).string
    })
  }).isRequired,
  value: (prop_types_default()).object.isRequired
};
/* harmony default export */ const SingleComponent = (SingleComponentCell);

// EXTERNAL MODULE: ./node_modules/lodash/isNumber.js
var isNumber = __webpack_require__(37997);
var isNumber_default = /*#__PURE__*/__webpack_require__.n(isNumber);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/utils/isFieldTypeNumber.js
var isFieldTypeNumber = __webpack_require__(72262);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/components/CellContent/utils/isSingleRelation.js
function isSingleRelation(type) {
  return ["oneToOne", "manyToOne", "oneToOneMorph"].includes(type);
}

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/components/CellContent/utils/hasContent.js




function hasContent(type, content, metadatas, fieldSchema) {
  if (type === "component") {
    const {
      mainField: { name: mainFieldName, type: mainFieldType }
    } = metadatas;
    if (fieldSchema?.repeatable) {
      return content.length > 0;
    }
    const value = content?.[mainFieldName];
    if (mainFieldName === "id" && ![void 0, null].includes(value)) {
      return true;
    }
    if ((0,isFieldTypeNumber/* default */.Z)(mainFieldType) && mainFieldType !== "biginteger" && mainFieldName !== "id") {
      return isNumber_default()(value);
    }
    return !isEmpty_default()(value);
  }
  if (type === "relation") {
    if (isSingleRelation(fieldSchema.relation)) {
      return !isEmpty_default()(content);
    }
    return content?.count > 0;
  }
  if ((0,isFieldTypeNumber/* default */.Z)(type) && type !== "biginteger") {
    return isNumber_default()(content);
  }
  if (type === "boolean") {
    return content !== null;
  }
  return !isEmpty_default()(content);
}

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/components/CellContent/index.js













const CellContent_TypographyMaxWidth = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z))`
  max-width: 300px;
`;
const CellContent = ({ content, fieldSchema, metadatas, name, rowId, contentType }) => {
  const { type } = fieldSchema;
  if (!hasContent(type, content, metadatas, fieldSchema)) {
    return /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, "-");
  }
  switch (type) {
    case "media":
      if (!fieldSchema.multiple) {
        return /* @__PURE__ */ react.createElement(CellContent_Media, { ...content });
      }
      return /* @__PURE__ */ react.createElement(MultipleMedias, { value: content });
    case "relation": {
      if (isSingleRelation(fieldSchema.relation)) {
        return /* @__PURE__ */ react.createElement(CellContent_RelationSingle, { metadatas, value: content });
      }
      return /* @__PURE__ */ react.createElement(
        CellContent_RelationMultiple,
        {
          fieldSchema,
          metadatas,
          value: content,
          name,
          entityId: rowId,
          contentType
        }
      );
    }
    case "component":
      if (fieldSchema.repeatable === true) {
        return /* @__PURE__ */ react.createElement(CellContent_RepeatableComponent, { value: content, metadatas });
      }
      return /* @__PURE__ */ react.createElement(SingleComponent, { value: content, metadatas });
    case "string":
      return /* @__PURE__ */ react.createElement(Tooltip/* Tooltip */.u, { description: content }, /* @__PURE__ */ react.createElement(CellContent_TypographyMaxWidth, { ellipsis: true, textColor: "neutral800" }, /* @__PURE__ */ react.createElement(CellContent_CellValue, { type, value: content })));
    default:
      return /* @__PURE__ */ react.createElement(CellContent_TypographyMaxWidth, { ellipsis: true, textColor: "neutral800" }, /* @__PURE__ */ react.createElement(CellContent_CellValue, { type, value: content }));
  }
};
CellContent.defaultProps = {
  content: void 0
};
CellContent.propTypes = {
  content: (prop_types_default()).any,
  contentType: prop_types_default().shape({
    uid: (prop_types_default()).string.isRequired
  }).isRequired,
  fieldSchema: prop_types_default().shape({
    component: (prop_types_default()).string,
    multiple: (prop_types_default()).bool,
    type: (prop_types_default()).string.isRequired,
    repeatable: (prop_types_default()).bool,
    relation: (prop_types_default()).string
  }).isRequired,
  metadatas: (prop_types_default()).object.isRequired,
  name: (prop_types_default()).string.isRequired,
  rowId: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
};
/* harmony default export */ const components_CellContent = (CellContent);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/components/FieldPicker/index.js










const ChackboxWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  :hover {
    background-color: ${(props) => props.theme.colors.primary100};
  }
`;
const FieldPicker = ({ layout }) => {
  const dispatch = (0,es/* useDispatch */.I0)();
  const displayedHeaders = (0,es/* useSelector */.v9)(selectDisplayedHeaders);
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const { formatMessage, locale } = (0,useIntl/* default */.Z)();
  const formatter = (0,dist/* useCollator */.Xe)(locale, {
    sensitivity: "base"
  });
  const columns = Object.keys(layout.contentType.attributes).filter((name) => (0,utils/* checkIfAttributeIsDisplayable */.ko)(layout.contentType.attributes[name])).map((name) => ({
    name,
    label: layout.contentType.metadatas[name].list.label
  })).sort((a, b) => formatter.compare(a.label, b.label));
  const displayedHeaderKeys = displayedHeaders.map(({ name }) => name);
  const handleChange = (name) => {
    trackUsage("didChangeDisplayedFields");
    dispatch(onChangeListHeaders({ name, value: displayedHeaderKeys.includes(name) }));
  };
  const handleReset = () => {
    dispatch(onResetListHeaders());
  };
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { as: "fieldset", direction: "column", alignItems: "stretch", gap: 3 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "legend", variant: "pi", fontWeight: "bold" }, formatMessage({
    id: "containers.ListPage.displayedFields",
    defaultMessage: "Displayed fields"
  })), /* @__PURE__ */ react.createElement(TextButton/* TextButton */.A, { onClick: handleReset }, formatMessage({
    id: "app.components.Button.reset",
    defaultMessage: "Reset"
  }))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch" }, columns.map((header) => {
    const isActive = displayedHeaderKeys.includes(header.name);
    return /* @__PURE__ */ react.createElement(
      ChackboxWrapper,
      {
        wrap: "wrap",
        gap: 2,
        as: "label",
        background: isActive ? "primary100" : "transparent",
        hasRadius: true,
        padding: 2,
        key: header.name
      },
      /* @__PURE__ */ react.createElement(
        BaseCheckbox/* BaseCheckbox */.C,
        {
          onChange: () => handleChange(header.name),
          value: isActive,
          name: header.name
        }
      ),
      /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontSize: 1 }, header.label)
    );
  })));
};
FieldPicker.propTypes = {
  layout: prop_types_default().shape({
    contentType: prop_types_default().shape({
      attributes: (prop_types_default()).object.isRequired,
      metadatas: (prop_types_default()).object.isRequired,
      layouts: prop_types_default().shape({
        list: (prop_types_default()).array.isRequired
      }).isRequired,
      options: (prop_types_default()).object.isRequired,
      settings: (prop_types_default()).object.isRequired
    }).isRequired
  }).isRequired
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/components/ViewSettingsMenu/index.js









const ViewSettingsMenu = ({ slug, layout }) => {
  const [isVisible, setIsVisible] = react.useState(false);
  const cogButtonRef = react.useRef();
  const permissions = (0,es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      icon: /* @__PURE__ */ react.createElement(Cog/* default */.Z, null),
      label: formatMessage({
        id: "components.ViewSettings.tooltip",
        defaultMessage: "View Settings"
      }),
      ref: cogButtonRef,
      onClick: handleToggle
    }
  ), isVisible && /* @__PURE__ */ react.createElement(
    Popover/* Popover */.J2,
    {
      placement: "bottom-end",
      source: cogButtonRef,
      onDismiss: handleToggle,
      spacing: 4,
      padding: 3
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "stretch", direction: "column", gap: 3 }, /* @__PURE__ */ react.createElement(
      dist/* CheckPermissions */.jW,
      {
        permissions: permissions.contentManager.collectionTypesConfigurations
      },
      /* @__PURE__ */ react.createElement(
        dist/* LinkButton */.Qj,
        {
          size: "S",
          startIcon: /* @__PURE__ */ react.createElement(Layer/* default */.Z, null),
          to: `${slug}/configurations/list`,
          variant: "secondary"
        },
        formatMessage({
          id: "app.links.configure-view",
          defaultMessage: "Configure the view"
        })
      )
    ), /* @__PURE__ */ react.createElement(FieldPicker, { layout }))
  ));
};
ViewSettingsMenu.propTypes = {
  slug: (prop_types_default()).string.isRequired,
  layout: prop_types_default().shape({
    contentType: prop_types_default().shape({
      attributes: (prop_types_default()).object.isRequired,
      metadatas: (prop_types_default()).object.isRequired,
      layouts: prop_types_default().shape({
        list: (prop_types_default()).array.isRequired
      }).isRequired,
      options: (prop_types_default()).object.isRequired,
      settings: (prop_types_default()).object.isRequired
    }).isRequired
  }).isRequired
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/index.js





























const REVIEW_WORKFLOW_COLUMNS_CE = null;
const REVIEW_WORKFLOW_COLUMNS_CELL_CE = () => null;
const REVIEW_WORKFLOW_FILTER_CE = [];
const USER_FILTER_ATTRIBUTES = [...CREATOR_FIELDS, "strapi_assignee"];
function ListView({
  canCreate,
  canDelete,
  canRead,
  canPublish,
  data,
  getData: getData2,
  getDataSucceeded: getDataSucceeded2,
  isLoading,
  layout,
  pagination,
  slug
}) {
  const { total } = pagination;
  const { contentType } = layout;
  const {
    info,
    options,
    metadatas,
    settings: { bulkable: isBulkable, filterable: isFilterable, searchable: isSearchable }
  } = contentType;
  const [isConfirmDeleteRowOpen, setIsConfirmDeleteRowOpen] = react.useState(false);
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const { allPermissions, refetchPermissions } = (0,dist/* useRBACProvider */.vn)();
  const trackUsageRef = react.useRef(trackUsage);
  const fetchPermissionsRef = react.useRef(refetchPermissions);
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.G)();
  const { formatAPIError } = (0,dist/* useAPIErrorHandler */.So)(utils/* getTrad */.OB);
  const allowedAttributes = useAllowedAttributes(contentType, slug);
  const [{ query }] = (0,dist/* useQueryParams */.Kx)();
  const { pathname } = (0,react_router/* useLocation */.TH)();
  const { push } = (0,react_router/* useHistory */.k6)();
  const { formatMessage, locale } = (0,useIntl/* default */.Z)();
  const fetchClient = (0,dist/* useFetchClient */.kY)();
  const formatter = (0,dist/* useCollator */.Xe)(locale, {
    sensitivity: "base"
  });
  const selectedUserIds = query?.filters?.$and?.reduce((acc, filter) => {
    const [key, value] = Object.entries(filter)[0];
    const id = value.id?.$eq || value.id?.$ne;
    if (USER_FILTER_ATTRIBUTES.includes(key) && !acc.includes(id)) {
      acc.push(id);
    }
    return acc;
  }, []) ?? [];
  const { users, isLoading: isLoadingAdminUsers } = (0,useAdminUsers/* useAdminUsers */.R)(
    { filter: { id: { in: selectedUserIds } } },
    {
      // fetch the list of admin users only if the filter contains users and the
      // current user has permissions to display users
      enabled: selectedUserIds.length > 0 && (0,dist/* findMatchingPermissions */.ZT)(allPermissions, [
        {
          action: "admin::users.read",
          subject: null
        }
      ]).length > 0
    }
  );
  (0,dist/* useFocusWhenNavigate */.go)();
  const params = react.useMemo(() => utils_buildValidGetParams(query), [query]);
  const pluginsQueryParams = (0,qs_lib.stringify)({ plugins: query.plugins }, { encode: false });
  const displayedAttributeFilters = allowedAttributes.map((name) => {
    const attribute = contentType.attributes[name];
    const { type, enum: options2 } = attribute;
    const trackedEvent = {
      name: "didFilterEntries",
      properties: { useRelation: type === "relation" }
    };
    const { mainField, label } = metadatas[name].list;
    const filter = {
      name,
      metadatas: { label: formatMessage({ id: label, defaultMessage: label }) },
      fieldSchema: { type, options: options2, mainField },
      trackedEvent
    };
    if (attribute.type === "relation" && attribute.target === "admin::user") {
      filter.metadatas = {
        ...filter.metadatas,
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
        customInput: AdminUsersFilter,
        options: users.map((user) => ({
          label: (0,utils/* getDisplayName */.Gf)(user, formatMessage),
          customValue: user.id.toString()
        }))
      };
      filter.fieldSchema.mainField = {
        ...mainField,
        name: "id"
      };
    }
    return filter;
  });
  const hasDraftAndPublish = options?.draftAndPublish ?? false;
  const hasReviewWorkflows = options?.reviewWorkflows ?? false;
  const reviewWorkflowColumns = (0,useEnterprise/* useEnterprise */.c)(
    REVIEW_WORKFLOW_COLUMNS_CE,
    async () => (await __webpack_require__.e(/* import() */ 6033).then(__webpack_require__.bind(__webpack_require__, 16033))).REVIEW_WORKFLOW_COLUMNS_EE,
    {
      enabled: !!options?.reviewWorkflows
    }
  );
  const ReviewWorkflowsColumns = (0,useEnterprise/* useEnterprise */.c)(
    REVIEW_WORKFLOW_COLUMNS_CELL_CE,
    async () => {
      const { ReviewWorkflowsStageEE, ReviewWorkflowsAssigneeEE } = await __webpack_require__.e(/* import() */ 4565).then(__webpack_require__.bind(__webpack_require__, 24565));
      return { ReviewWorkflowsStageEE, ReviewWorkflowsAssigneeEE };
    },
    {
      enabled: hasReviewWorkflows
    }
  );
  const reviewWorkflowFilter = (0,useEnterprise/* useEnterprise */.c)(
    REVIEW_WORKFLOW_FILTER_CE,
    async () => (await __webpack_require__.e(/* import() */ 169).then(__webpack_require__.bind(__webpack_require__, 70169))).REVIEW_WORKFLOW_FILTERS,
    {
      combine(ceFilters, eeFilters) {
        return [
          ...ceFilters,
          ...eeFilters.filter((eeFilter) => {
            if (eeFilter.name === "strapi_assignee") {
              return (0,dist/* findMatchingPermissions */.ZT)(allPermissions, [
                {
                  action: "admin::users.read",
                  subject: null
                }
              ]).length > 0;
            }
            return true;
          }).map((eeFilter) => ({
            ...eeFilter,
            metadatas: {
              ...eeFilter.metadatas,
              // the stage filter needs the current content-type uid to fetch
              // the list of stages that can be assigned to this content-type
              ...eeFilter.name === "strapi_stage" ? { uid: contentType.uid } : {},
              // translate the filter label
              label: formatMessage(eeFilter.metadatas.label),
              // `options` allows the filter-tag to render the displayname
              // of a user over a plain id
              options: eeFilter.name === "strapi_assignee" && users.map((user) => ({
                label: (0,utils/* getDisplayName */.Gf)(user, formatMessage),
                customValue: user.id.toString()
              }))
            }
          }))
        ];
      },
      defaultValue: [],
      // we have to wait for admin users to be fully loaded, because otherwise
      // combine is called to early and does not contain the latest state of
      // the users array
      enabled: hasReviewWorkflows && !isLoadingAdminUsers
    }
  );
  const { post, del } = fetchClient;
  const bulkUnpublishMutation = (0,react_query_es.useMutation)(
    (data2) => post(`/content-manager/collection-types/${contentType.uid}/actions/bulkUnpublish`, data2),
    {
      onSuccess() {
        toggleNotification({
          type: "success",
          message: {
            id: "content-manager.success.record.unpublish",
            defaultMessage: "Unpublished"
          }
        });
        fetchData(`/content-manager/collection-types/${slug}`, { params });
      },
      onError(error) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(error)
        });
      }
    }
  );
  const requestUrlRef = react.useRef("");
  const fetchData = react.useCallback(
    async (endPoint, options2) => {
      getData2();
      try {
        const {
          data: { results, pagination: paginationResult }
        } = await fetchClient.get(endPoint, options2);
        if (paginationResult.page > paginationResult.pageCount && paginationResult.pageCount > 0) {
          const query2 = {
            ...params,
            page: paginationResult.pageCount
          };
          push({
            pathname,
            state: { from: pathname },
            search: (0,qs_lib.stringify)(query2)
          });
          return;
        }
        notifyStatus(
          formatMessage(
            {
              id: (0,utils/* getTrad */.OB)("utils.data-loaded"),
              defaultMessage: "{number, plural, =1 {# entry has} other {# entries have}} successfully been loaded"
            },
            // Using the plural form
            { number: paginationResult.count }
          )
        );
        getDataSucceeded2(paginationResult, results);
      } catch (err) {
        if (axios["default"].isCancel(err)) {
          return;
        }
        const resStatus = err?.response?.status ?? null;
        if (resStatus === 403) {
          await fetchPermissionsRef.current();
          toggleNotification({
            type: "info",
            message: { id: (0,utils/* getTrad */.OB)("permissions.not-allowed.update") }
          });
          push("/");
          return;
        }
        toggleNotification({
          type: "warning",
          message: { id: (0,utils/* getTrad */.OB)("error.model.fetch") }
        });
      }
    },
    [
      formatMessage,
      getData2,
      getDataSucceeded2,
      notifyStatus,
      push,
      toggleNotification,
      fetchClient,
      params,
      pathname
    ]
  );
  const handleConfirmDeleteAllData = react.useCallback(
    async (ids) => {
      try {
        await post(`/content-manager/collection-types/${slug}/actions/bulkDelete`, {
          ids
        });
        fetchData(`/content-manager/collection-types/${slug}`, { params });
        trackUsageRef.current("didBulkDeleteEntries");
      } catch (err) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(err)
        });
      }
    },
    [slug, toggleNotification, formatAPIError, post, fetchData, params]
  );
  const handleConfirmDeleteData = react.useCallback(
    async (idToDelete) => {
      try {
        await del(`/content-manager/collection-types/${slug}/${idToDelete}`);
        const requestUrl = `/content-manager/collection-types/${slug}`;
        fetchData(requestUrl, { params });
        toggleNotification({
          type: "success",
          message: { id: (0,utils/* getTrad */.OB)("success.record.delete") }
        });
      } catch (err) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(err)
        });
      }
    },
    [slug, toggleNotification, formatAPIError, del, fetchData, params]
  );
  const handleConfirmUnpublishAllData = (selectedEntries) => {
    return bulkUnpublishMutation.mutateAsync({ ids: selectedEntries });
  };
  react.useEffect(() => {
    const CancelToken = axios["default"].CancelToken;
    const source = CancelToken.source();
    const shouldSendRequest = canRead;
    const requestUrl = `/content-manager/collection-types/${slug}`;
    if (shouldSendRequest && requestUrl.includes(requestUrlRef.current)) {
      fetchData(requestUrl, { cancelToken: source.token, params });
    }
    return () => {
      requestUrlRef.current = slug;
      source.cancel("Operation canceled by the user.");
    };
  }, [canRead, getData2, slug, params, getDataSucceeded2, fetchData]);
  const defaultHeaderLayoutTitle = formatMessage({
    id: (0,utils/* getTrad */.OB)("header.name"),
    defaultMessage: "Content"
  });
  const headerLayoutTitle = formatMessage({
    id: info.displayName,
    defaultMessage: info.displayName || defaultHeaderLayoutTitle
  });
  const { runHookWaterfall } = (0,dist/* useStrapiApp */.j1)();
  const displayedHeaders = (0,es/* useSelector */.v9)(selectDisplayedHeaders);
  const tableHeaders = react.useMemo(() => {
    const headers = runHookWaterfall(exposedHooks/* INJECT_COLUMN_IN_TABLE */.No, {
      displayedHeaders,
      layout
    });
    const formattedHeaders = headers.displayedHeaders.map((header) => {
      const { metadatas: metadatas2 } = header;
      if (header.fieldSchema.type === "relation") {
        const sortFieldValue = `${header.name}.${header.metadatas.mainField.name}`;
        return {
          ...header,
          metadatas: {
            ...metadatas2,
            label: formatMessage({
              id: (0,utils/* getTrad */.OB)(`containers.ListPage.table-headers.${header.name}`),
              defaultMessage: metadatas2.label
            })
          },
          name: sortFieldValue
        };
      }
      return {
        ...header,
        metadatas: {
          ...metadatas2,
          label: formatMessage({
            id: (0,utils/* getTrad */.OB)(`containers.ListPage.table-headers.${header.name}`),
            defaultMessage: metadatas2.label
          })
        }
      };
    });
    if (hasDraftAndPublish) {
      formattedHeaders.push({
        key: "__published_at_temp_key__",
        name: "publishedAt",
        fieldSchema: {
          type: "custom"
        },
        metadatas: {
          label: formatMessage({
            id: (0,utils/* getTrad */.OB)(`containers.ListPage.table-headers.publishedAt`),
            defaultMessage: "publishedAt"
          }),
          searchable: false,
          sortable: true
        }
      });
    }
    if (reviewWorkflowColumns) {
      reviewWorkflowColumns.map((column) => {
        if (typeof column.metadatas.label !== "string") {
          column.metadatas.label = formatMessage(column.metadatas.label);
        }
        return column;
      });
      formattedHeaders.push(...reviewWorkflowColumns);
    }
    return formattedHeaders;
  }, [
    runHookWaterfall,
    displayedHeaders,
    layout,
    reviewWorkflowColumns,
    hasDraftAndPublish,
    formatMessage
  ]);
  const subtitle = canRead ? formatMessage(
    {
      id: (0,utils/* getTrad */.OB)("pages.ListView.header-subtitle"),
      defaultMessage: "{number, plural, =0 {# entries} one {# entry} other {# entries}} found"
    },
    { number: total }
  ) : null;
  const getCreateAction = (props) => canCreate ? /* @__PURE__ */ react.createElement(
    Button/* Button */.z,
    {
      ...props,
      forwardedAs: react_router_dom/* Link */.rU,
      onClick: () => {
        const trackerProperty = hasDraftAndPublish ? { status: "draft" } : {};
        trackUsageRef.current("willCreateEntry", trackerProperty);
      },
      to: {
        pathname: `${pathname}/create`,
        search: query.plugins ? pluginsQueryParams : ""
      },
      startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null),
      style: { textDecoration: "none" }
    },
    formatMessage({
      id: (0,utils/* getTrad */.OB)("HeaderLayout.button.label-add-entry"),
      defaultMessage: "Create new entry"
    })
  ) : null;
  const handleRowClick = (id) => () => {
    trackUsage("willEditEntryFromList");
    push({
      pathname: `${pathname}/${id}`,
      state: { from: pathname },
      search: pluginsQueryParams
    });
  };
  const handleCloneClick = (id) => async () => {
    try {
      const { data: data2 } = await post(
        `/content-manager/collection-types/${contentType.uid}/auto-clone/${id}?${pluginsQueryParams}`
      );
      if ("id" in data2) {
        push({
          pathname: `${pathname}/${data2.id}`,
          state: { from: pathname },
          search: pluginsQueryParams
        });
      }
    } catch (err) {
      if (err instanceof node_modules_axios/* AxiosError */.d7) {
        push({
          pathname: `${pathname}/create/clone/${id}`,
          state: { from: pathname, error: formatAPIError(err) },
          search: pluginsQueryParams
        });
      }
    }
  };
  const colCount = tableHeaders.length + 2;
  const refetchData = () => {
    fetchData(`/content-manager/collection-types/${slug}`, { params });
  };
  if (!ReviewWorkflowsColumns) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      primaryAction: getCreateAction(),
      subtitle,
      title: headerLayoutTitle,
      navigationAction: /* @__PURE__ */ react.createElement(dist/* Link */.rU, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null), to: "/content-manager/" }, formatMessage({
        id: "global.back",
        defaultMessage: "Back"
      }))
    }
  ), !canRead && /* @__PURE__ */ react.createElement(ActionLayout/* ActionLayout */.Z, { endActions: /* @__PURE__ */ react.createElement(components_InjectionZone, { area: "contentManager.listView.actions" }) }), canRead && /* @__PURE__ */ react.createElement(
    ActionLayout/* ActionLayout */.Z,
    {
      endActions: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(components_InjectionZone, { area: "contentManager.listView.actions" }), /* @__PURE__ */ react.createElement(ViewSettingsMenu, { slug, layout })),
      startActions: /* @__PURE__ */ react.createElement(react.Fragment, null, isSearchable && /* @__PURE__ */ react.createElement(
        dist/* SearchURLQuery */.m,
        {
          label: formatMessage(
            { id: "app.component.search.label", defaultMessage: "Search for {target}" },
            { target: headerLayoutTitle }
          ),
          placeholder: formatMessage({
            id: "global.search",
            defaultMessage: "Search"
          }),
          trackedEvent: "didSearch"
        }
      ), isFilterable && !isLoadingAdminUsers && /* @__PURE__ */ react.createElement(
        Filter_Filter,
        {
          displayedFilters: [...displayedAttributeFilters, ...reviewWorkflowFilter].sort(
            (a, b) => formatter.compare(a.metadatas.label, b.metadatas.label)
          )
        }
      ))
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, canRead ? /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 4, direction: "column", alignItems: "stretch" }, /* @__PURE__ */ react.createElement(dist/* Table */.iA.Root, { rows: data, isLoading, colCount }, /* @__PURE__ */ react.createElement(dist/* Table */.iA.ActionBar, null, /* @__PURE__ */ react.createElement(
    components_BulkActionButtons,
    {
      showPublish: canPublish && hasDraftAndPublish,
      showDelete: canDelete,
      onConfirmDeleteAll: handleConfirmDeleteAllData,
      onConfirmUnpublishAll: handleConfirmUnpublishAllData,
      refetchData
    }
  )), /* @__PURE__ */ react.createElement(dist/* Table */.iA.Content, null, /* @__PURE__ */ react.createElement(dist/* Table */.iA.Head, null, /* @__PURE__ */ react.createElement(dist/* Table */.iA.HeaderCheckboxCell, null), tableHeaders.map(({ fieldSchema, key, name, metadatas: metadatas2 }) => /* @__PURE__ */ react.createElement(
    dist/* Table */.iA.HeaderCell,
    {
      key,
      name,
      fieldSchemaType: fieldSchema.type,
      relationFieldName: metadatas2.mainField?.name,
      isSortable: metadatas2.sortable,
      label: metadatas2.label
    }
  )), /* @__PURE__ */ react.createElement(dist/* Table */.iA.HeaderHiddenActionsCell, null)), /* @__PURE__ */ react.createElement(dist/* Table */.iA.LoadingBody, null), /* @__PURE__ */ react.createElement(
    dist/* Table */.iA.EmptyBody,
    {
      contentType: headerLayoutTitle,
      action: getCreateAction({ variant: "secondary" })
    }
  ), /* @__PURE__ */ react.createElement(
    Body.Root,
    {
      onConfirmDelete: handleConfirmDeleteData,
      isConfirmDeleteRowOpen,
      setIsConfirmDeleteRowOpen
    },
    data.map((rowData, index) => {
      return /* @__PURE__ */ react.createElement(Tr.Tr, { cursor: "pointer", key: data.id, onClick: handleRowClick(rowData.id) }, /* @__PURE__ */ react.createElement(Body.CheckboxDataCell, { rowId: rowData.id, index }), tableHeaders.map(({ key, name, cellFormatter, ...rest }) => {
        if (hasDraftAndPublish && name === "publishedAt") {
          return /* @__PURE__ */ react.createElement(Cell.Td, { key }, /* @__PURE__ */ react.createElement(
            Status/* Status */.q,
            {
              width: "min-content",
              showBullet: false,
              variant: rowData.publishedAt ? "success" : "secondary",
              size: "S"
            },
            /* @__PURE__ */ react.createElement(
              Typography/* Typography */.Z,
              {
                fontWeight: "bold",
                textColor: `${rowData.publishedAt ? "success" : "secondary"}700`
              },
              formatMessage({
                id: (0,utils/* getTrad */.OB)(
                  `containers.List.${rowData.publishedAt ? "published" : "draft"}`
                ),
                defaultMessage: rowData.publishedAt ? "Published" : "Draft"
              })
            )
          ));
        }
        if (hasReviewWorkflows) {
          if (name === "strapi_stage") {
            return /* @__PURE__ */ react.createElement(Cell.Td, { key }, rowData.strapi_stage ? /* @__PURE__ */ react.createElement(
              ReviewWorkflowsColumns.ReviewWorkflowsStageEE,
              {
                color: rowData.strapi_stage.color ?? lightTheme/* lightTheme */.W.colors.primary600,
                name: rowData.strapi_stage.name
              }
            ) : /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, "-"));
          }
          if (name === "strapi_assignee") {
            return /* @__PURE__ */ react.createElement(Cell.Td, { key }, rowData.strapi_assignee ? /* @__PURE__ */ react.createElement(
              ReviewWorkflowsColumns.ReviewWorkflowsAssigneeEE,
              {
                user: rowData.strapi_assignee
              }
            ) : /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, "-"));
          }
        }
        if (["createdBy", "updatedBy"].includes(name.split(".")[0])) {
          return /* @__PURE__ */ react.createElement(Cell.Td, { key }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, rowData[name.split(".")[0]] ? (0,utils/* getDisplayName */.Gf)(rowData[name.split(".")[0]], formatMessage) : "-"));
        }
        if (typeof cellFormatter === "function") {
          return /* @__PURE__ */ react.createElement(Cell.Td, { key }, cellFormatter(rowData, { key, name, ...rest }));
        }
        return /* @__PURE__ */ react.createElement(Cell.Td, { key }, /* @__PURE__ */ react.createElement(
          components_CellContent,
          {
            content: rowData[name.split(".")[0]],
            name,
            contentType: layout.contentType,
            ...rest,
            rowId: rowData.id
          }
        ));
      }), (canDelete || canPublish) && isBulkable && /* @__PURE__ */ react.createElement(
        Body.EntityActionsDataCell,
        {
          rowId: rowData.id,
          index,
          setIsConfirmDeleteRowOpen,
          canCreate,
          canDelete,
          handleCloneClick
        }
      ));
    })
  ))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "flex-end", justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(dist/* PageSizeURLQuery */.v4, { trackedEvent: "willChangeNumberOfEntriesPerPage" }), /* @__PURE__ */ react.createElement(dist/* PaginationURLQuery */.tU, { pagination: { pageCount: pagination?.pageCount || 1 } }))) : /* @__PURE__ */ react.createElement(dist/* NoPermissions */.ZF, null)));
}
ListView.propTypes = {
  canCreate: (prop_types_default()).bool.isRequired,
  canDelete: (prop_types_default()).bool.isRequired,
  canRead: (prop_types_default()).bool.isRequired,
  canPublish: (prop_types_default()).bool.isRequired,
  data: (prop_types_default()).array.isRequired,
  layout: prop_types_default().exact({
    components: (prop_types_default()).object.isRequired,
    contentType: prop_types_default().shape({
      uid: (prop_types_default()).string.isRequired,
      attributes: (prop_types_default()).object.isRequired,
      metadatas: (prop_types_default()).object.isRequired,
      info: prop_types_default().shape({ displayName: (prop_types_default()).string.isRequired }).isRequired,
      layouts: prop_types_default().shape({
        list: (prop_types_default()).array.isRequired
      }).isRequired,
      options: (prop_types_default()).object.isRequired,
      settings: (prop_types_default()).object.isRequired
    }).isRequired
  }).isRequired,
  isLoading: (prop_types_default()).bool.isRequired,
  getData: (prop_types_default()).func.isRequired,
  getDataSucceeded: (prop_types_default()).func.isRequired,
  pagination: prop_types_default().shape({ total: (prop_types_default()).number.isRequired, pageCount: (prop_types_default()).number }).isRequired,
  slug: (prop_types_default()).string.isRequired
};
const mapStateToProps = ListView_selectors();
function mapDispatchToProps(dispatch) {
  return (0,redux.bindActionCreators)(
    {
      getData: actions_getData,
      getDataSucceeded: actions_getDataSucceeded,
      onChangeListHeaders: onChangeListHeaders,
      onResetListHeaders: onResetListHeaders
    },
    dispatch
  );
}
const withConnect = (0,es/* connect */.$j)(mapStateToProps, mapDispatchToProps);
/* harmony default export */ const pages_ListView = ((0,redux.compose)(withConnect)(react.memo(ListView, (isEqual_default()))));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListViewLayoutManager/Permissions.js





const Permissions_Permissions = (props) => {
  const viewPermissions = (0,react.useMemo)(() => (0,utils/* generatePermissionsObject */.TA)(props.slug), [props.slug]);
  const { isLoading, allowedActions } = (0,dist/* useRBAC */.ss)(viewPermissions, props.permissions);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null);
  }
  return /* @__PURE__ */ react.createElement(pages_ListView, { ...props, ...allowedActions });
};
Permissions_Permissions.defaultProps = {
  permissions: []
};
Permissions_Permissions.propTypes = {
  permissions: (prop_types_default()).array,
  slug: (prop_types_default()).string.isRequired
};
/* harmony default export */ const ListViewLayoutManager_Permissions = ((0,react.memo)(Permissions_Permissions, (prev, next) => {
  const differenceBetweenRerenders = (0,dist/* difference */.e5)(prev, next);
  const propNamesThatHaveChanged = Object.keys(differenceBetweenRerenders).filter(
    (propName) => propName !== "state"
  );
  return propNamesThatHaveChanged.length > 0;
}));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListViewLayoutManager/index.js








const ListViewLayout = ({ layout, ...props }) => {
  const dispatch = (0,es/* useDispatch */.I0)();
  const { replace } = (0,react_router/* useHistory */.k6)();
  const [{ query, rawQuery }] = (0,dist/* useQueryParams */.Kx)();
  const { permissions, isValid: isValidPermissions } = (0,hooks/* useSyncRbac */.r5)(query, props.slug, "listView");
  const redirectionLink = (0,hooks/* useFindRedirectionLink */.Ky)(props.slug);
  (0,react.useEffect)(() => {
    if (!rawQuery) {
      replace(redirectionLink);
    }
  }, [rawQuery, replace, redirectionLink]);
  (0,react.useEffect)(() => {
    dispatch(actions_setLayout(layout));
  }, [dispatch, layout]);
  (0,react.useEffect)(() => {
    return () => {
      dispatch(ListView_actions_resetProps());
    };
  }, [dispatch]);
  if (!isValidPermissions) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(ListViewLayoutManager_Permissions, { ...props, layout, permissions });
};
ListViewLayout.propTypes = {
  layout: prop_types_default().exact({
    components: (prop_types_default()).object.isRequired,
    contentType: prop_types_default().shape({
      attributes: (prop_types_default()).object.isRequired,
      metadatas: (prop_types_default()).object.isRequired,
      layouts: prop_types_default().shape({
        list: (prop_types_default()).array.isRequired
      }).isRequired,
      options: (prop_types_default()).object.isRequired,
      settings: (prop_types_default()).object.isRequired,
      pluginOptions: (prop_types_default()).object
    }).isRequired
  }).isRequired,
  slug: (prop_types_default()).string.isRequired
};
/* harmony default export */ const ListViewLayoutManager = (ListViewLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/CollectionTypeRecursivePath/components/ErrorFallback.js



const ErrorFallback = () => {
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 8 }, /* @__PURE__ */ react.createElement(dist/* AnErrorOccurred */.Hn, null));
};
/* harmony default export */ const components_ErrorFallback = (ErrorFallback);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/CollectionTypeRecursivePath/index.js















const CollectionTypeRecursivePath = ({
  match: {
    params: { slug },
    url
  }
}) => {
  const permissions = (0,es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  const { isLoading, layout, updateLayout } = (0,hooks/* useFetchContentTypeLayout */.zE)(slug);
  const { rawContentTypeLayout, rawComponentsLayouts } = (0,react.useMemo)(() => {
    let rawContentTypeLayout2 = {};
    let rawComponentsLayouts2 = {};
    if (layout.contentType) {
      rawContentTypeLayout2 = (0,utils/* formatLayoutToApi */.du)(layout.contentType);
    }
    if (layout.components) {
      rawComponentsLayouts2 = Object.keys(layout.components).reduce((acc, current) => {
        acc[current] = (0,utils/* formatLayoutToApi */.du)(layout.components[current]);
        return acc;
      }, {});
    }
    return { rawContentTypeLayout: rawContentTypeLayout2, rawComponentsLayouts: rawComponentsLayouts2 };
  }, [layout]);
  const uid = layout?.contentType?.uid ?? null;
  if (uid !== slug || isLoading) {
    return /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null);
  }
  const renderRoute = ({
    location: { state },
    history: { goBack },
    match: {
      params: { id, origin }
    }
  }, Component) => {
    return /* @__PURE__ */ react.createElement(
      Component,
      {
        slug,
        layout,
        state,
        goBack,
        id,
        origin
      }
    );
  };
  const routes = [
    { path: "create/clone/:origin", comp: pages_EditViewLayoutManager },
    { path: "create", comp: pages_EditViewLayoutManager },
    { path: ":id", comp: pages_EditViewLayoutManager },
    { path: "", comp: ListViewLayoutManager }
  ].map(({ path, comp }) => /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { key: path, path: `${url}/${path}`, render: (props) => renderRoute(props, comp) }));
  return /* @__PURE__ */ react.createElement(react_error_boundary_umd.ErrorBoundary, { FallbackComponent: components_ErrorFallback }, /* @__PURE__ */ react.createElement(contexts_ContentTypeLayout.Provider, { value: layout }, /* @__PURE__ */ react.createElement(react_router/* Switch */.rs, null, /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: `${url}/configurations/list` }, /* @__PURE__ */ react.createElement(
    dist/* CheckPagePermissions */.O4,
    {
      permissions: permissions.contentManager.collectionTypesConfigurations
    },
    /* @__PURE__ */ react.createElement(
      ListSettingsView,
      {
        layout: rawContentTypeLayout,
        slug,
        updateLayout
      }
    )
  )), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: `${url}/configurations/edit` }, /* @__PURE__ */ react.createElement(
    dist/* CheckPagePermissions */.O4,
    {
      permissions: permissions.contentManager.collectionTypesConfigurations
    },
    /* @__PURE__ */ react.createElement(
      pages_EditSettingsView,
      {
        components: rawComponentsLayouts,
        isContentTypeView: true,
        mainLayout: rawContentTypeLayout,
        slug,
        updateLayout
      }
    )
  )), routes)));
};
CollectionTypeRecursivePath.propTypes = {
  match: prop_types_default().shape({
    url: (prop_types_default()).string.isRequired,
    params: prop_types_default().shape({
      slug: (prop_types_default()).string.isRequired
    }).isRequired
  }).isRequired
};
/* harmony default export */ const pages_CollectionTypeRecursivePath = ((0,react.memo)(CollectionTypeRecursivePath));

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/sharedReducers/crudReducer/reducer.js
var crudReducer_reducer = __webpack_require__(91543);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ComponentSetttingsView/index.js











const ComponentSettingsView = () => {
  const [{ isLoading, data: layout }, dispatch] = (0,react.useReducer)(crudReducer_reducer/* default */.Z, crudReducer_reducer/* crudInitialState */.q);
  const schemasSelector = (0,react.useMemo)(App_selectors/* makeSelectModelAndComponentSchemas */.Vo, []);
  const { schemas } = (0,es/* useSelector */.v9)((state) => schemasSelector(state), es/* shallowEqual */.wU);
  const permissions = (0,es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  const { uid } = (0,react_router/* useParams */.UO)();
  const { get } = (0,dist/* useFetchClient */.kY)();
  (0,react.useEffect)(() => {
    const CancelToken = axios["default"].CancelToken;
    const source = CancelToken.source();
    const fetchData = async (source2) => {
      try {
        dispatch(getData());
        const {
          data: { data }
        } = await get(`/content-manager/components/${uid}/configuration`, {
          cancelToken: source2.token
        });
        dispatch(getDataSucceeded((0,utils/* mergeMetasWithSchema */.w8)(data, schemas, "component")));
      } catch (err) {
        if (axios["default"].isCancel(err)) {
          return;
        }
        console.error(err);
      }
    };
    fetchData(source);
    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, [uid, schemas, get]);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null);
  }
  return /* @__PURE__ */ react.createElement(dist/* CheckPagePermissions */.O4, { permissions: permissions.contentManager.componentsConfigurations }, /* @__PURE__ */ react.createElement(pages_EditSettingsView, { components: layout.components, mainLayout: layout.component, slug: uid }));
};
/* harmony default export */ const ComponentSetttingsView = ((0,react.memo)(ComponentSettingsView));

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/EmptyStateLayout/EmptyStateLayout.mjs
var EmptyStateLayout = __webpack_require__(6191);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyDocuments.mjs
var EmptyDocuments = __webpack_require__(52448);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/NoContentType/index.js






const NoContentType = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  (0,dist/* useFocusWhenNavigate */.go)();
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("header.name"),
        defaultMessage: "Content"
      })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(
    EmptyStateLayout/* EmptyStateLayout */.x,
    {
      action: /* @__PURE__ */ react.createElement(
        dist/* LinkButton */.Qj,
        {
          variant: "secondary",
          startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null),
          to: "/plugins/content-type-builder/content-types/create-content-type"
        },
        formatMessage({
          id: "app.components.HomePage.create",
          defaultMessage: "Create your first Content-type"
        })
      ),
      content: formatMessage({
        id: "content-manager.pages.NoContentType.text",
        defaultMessage: "You don't have any content yet, we recommend you to create your first Content-Type."
      }),
      hasRadius: true,
      icon: /* @__PURE__ */ react.createElement(EmptyDocuments/* default */.Z, { width: "10rem" }),
      shadow: "tableShadow"
    }
  )));
};
/* harmony default export */ const pages_NoContentType = (NoContentType);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/NoPermissions/index.js





const NoPermissions = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  (0,dist/* useFocusWhenNavigate */.go)();
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("header.name"),
        defaultMessage: "Content"
      })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(dist/* NoPermissions */.ZF, null)));
};
/* harmony default export */ const pages_NoPermissions = (NoPermissions);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/SingleTypeRecursivePath/index.js











const SingleTypeRecursivePath = ({
  match: {
    params: { slug },
    url
  }
}) => {
  const permissions = (0,es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  const { isLoading, layout, updateLayout } = (0,hooks/* useFetchContentTypeLayout */.zE)(slug);
  const { rawContentTypeLayout, rawComponentsLayouts } = (0,react.useMemo)(() => {
    let rawComponentsLayouts2 = {};
    let rawContentTypeLayout2 = {};
    if (layout.contentType) {
      rawContentTypeLayout2 = (0,utils/* formatLayoutToApi */.du)(layout.contentType);
    }
    if (layout.components) {
      rawComponentsLayouts2 = Object.keys(layout.components).reduce((acc, current) => {
        acc[current] = (0,utils/* formatLayoutToApi */.du)(layout.components[current]);
        return acc;
      }, {});
    }
    return { rawContentTypeLayout: rawContentTypeLayout2, rawComponentsLayouts: rawComponentsLayouts2 };
  }, [layout]);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null);
  }
  return /* @__PURE__ */ react.createElement(contexts_ContentTypeLayout.Provider, { value: layout }, /* @__PURE__ */ react.createElement(react_router/* Switch */.rs, null, /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: `${url}/configurations/edit` }, /* @__PURE__ */ react.createElement(dist/* CheckPagePermissions */.O4, { permissions: permissions.contentManager.singleTypesConfigurations }, /* @__PURE__ */ react.createElement(
    pages_EditSettingsView,
    {
      components: rawComponentsLayouts,
      isContentTypeView: true,
      mainLayout: rawContentTypeLayout,
      slug,
      updateLayout
    }
  ))), /* @__PURE__ */ react.createElement(
    react_router/* Route */.AW,
    {
      path: url,
      render: ({ location: { state }, history: { goBack } }) => {
        return /* @__PURE__ */ react.createElement(
          pages_EditViewLayoutManager,
          {
            layout,
            slug,
            isSingleType: true,
            state,
            goBack
          }
        );
      }
    }
  )));
};
SingleTypeRecursivePath.propTypes = {
  match: prop_types_default().shape({
    url: (prop_types_default()).string.isRequired,
    params: prop_types_default().shape({
      slug: (prop_types_default()).string.isRequired
    }).isRequired
  }).isRequired
};
/* harmony default export */ const pages_SingleTypeRecursivePath = ((0,react.memo)(SingleTypeRecursivePath));

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.mjs
var CarretDown = __webpack_require__(10411);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/components/ComponentDragPreview.js






const DropdownIconWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  border-radius: 50%;

  svg {
    height: ${6 / 16}rem;
    width: ${11 / 16}rem;
    > path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }
`;
const ToggleButton = styled_components_browser_esm/* default */.ZP.button`
  border: none;
  background: transparent;
  display: block;
  width: 100%;
  text-align: unset;
  padding: 0;
`;
function ComponentDragPreview({ displayedValue }) {
  return /* @__PURE__ */ react.createElement(
    Flex/* Flex */.k,
    {
      background: "neutral0",
      borderColor: "neutral200",
      justifyContent: "space-between",
      gap: 3,
      padding: 3,
      width: (0,dist/* pxToRem */.Q1)(300)
    },
    /* @__PURE__ */ react.createElement(ToggleButton, { type: "button" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 6 }, /* @__PURE__ */ react.createElement(
      DropdownIconWrapper,
      {
        alignItems: "center",
        justifyContent: "center",
        background: "neutral200",
        height: (0,dist/* pxToRem */.Q1)(32),
        width: (0,dist/* pxToRem */.Q1)(32)
      },
      /* @__PURE__ */ react.createElement(CarretDown/* default */.Z, null)
    ), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { maxWidth: (0,dist/* pxToRem */.Q1)(150) }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral700", ellipsis: true }, displayedValue)))),
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2 }, /* @__PURE__ */ react.createElement(IconButton/* IconButton */.h, { noBorder: true }, /* @__PURE__ */ react.createElement(Trash/* default */.Z, null)), /* @__PURE__ */ react.createElement(IconButton/* IconButton */.h, { noBorder: true }, /* @__PURE__ */ react.createElement(Drag/* default */.Z, null)))
  );
}
ComponentDragPreview.propTypes = {
  displayedValue: (prop_types_default()).string.isRequired
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/components/RelationDragPreview.js









const RelationDragPreview = ({ status, displayedValue, width }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const stateMessage = {
    [PUBLICATION_STATES.DRAFT]: formatMessage({
      id: (0,utils/* getTrad */.OB)("relation.publicationState.draft"),
      defaultMessage: "Draft"
    }),
    [PUBLICATION_STATES.PUBLISHED]: formatMessage({
      id: (0,utils/* getTrad */.OB)("relation.publicationState.published"),
      defaultMessage: "Published"
    })
  };
  const statusColor = status === PUBLICATION_STATES.DRAFT ? "secondary" : "success";
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { style: { width } }, /* @__PURE__ */ react.createElement(
    Flex/* Flex */.k,
    {
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 2,
      paddingRight: 4,
      hasRadius: true,
      borderSize: 1,
      background: "neutral0",
      borderColor: "neutral200",
      justifyContent: "space-between"
    },
    /* @__PURE__ */ react.createElement(FlexWrapper, { gap: 1 }, /* @__PURE__ */ react.createElement(IconButton/* IconButton */.h, { noBorder: true }, /* @__PURE__ */ react.createElement(Drag/* default */.Z, null)), /* @__PURE__ */ react.createElement(ChildrenWrapper, { maxWidth: "100%", justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { minWidth: 0, paddingTop: 1, paddingBottom: 1, paddingRight: 4 }, /* @__PURE__ */ react.createElement(LinkEllipsis, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "primary600", ellipsis: true }, displayedValue))), status && /* @__PURE__ */ react.createElement(Status/* Status */.q, { variant: statusColor, showBullet: false, size: "S" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: `${statusColor}700` }, stateMessage[status])))),
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 4 }, /* @__PURE__ */ react.createElement(DisconnectButton, { type: "button" }, /* @__PURE__ */ react.createElement(Icon/* Icon */.J, { width: "12px", as: Cross/* default */.Z })))
  ));
};
RelationDragPreview.propTypes = {
  status: (prop_types_default()).string.isRequired,
  displayedValue: (prop_types_default()).string.isRequired,
  width: (prop_types_default()).number.isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNav.mjs
var SubNav = __webpack_require__(71877);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavHeader.mjs + 1 modules
var SubNavHeader = __webpack_require__(17912);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSections.mjs
var SubNavSections = __webpack_require__(96220);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSection.mjs + 1 modules
var SubNavSection = __webpack_require__(20534);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavLink.mjs
var SubNavLink = __webpack_require__(49370);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/LeftMenu/index.js








const LeftMenu = () => {
  const [search, setSearch] = (0,react.useState)("");
  const { formatMessage, locale } = (0,useIntl/* default */.Z)();
  const modelLinksSelector = (0,react.useMemo)(App_selectors/* makeSelectModelLinks */.KQ, []);
  const { collectionTypeLinks, singleTypeLinks } = (0,es/* useSelector */.v9)(modelLinksSelector, es/* shallowEqual */.wU);
  const { startsWith } = (0,dist/* useFilter */.L0)(locale, {
    sensitivity: "base"
  });
  const formatter = (0,dist/* useCollator */.Xe)(locale, {
    sensitivity: "base"
  });
  const menu = (0,react.useMemo)(
    () => [
      {
        id: "collectionTypes",
        title: {
          id: (0,getTrad/* default */.Z)("components.LeftMenu.collection-types"),
          defaultMessage: "Collection Types"
        },
        searchable: true,
        links: collectionTypeLinks
      },
      {
        id: "singleTypes",
        title: {
          id: (0,getTrad/* default */.Z)("components.LeftMenu.single-types"),
          defaultMessage: "Single Types"
        },
        searchable: true,
        links: singleTypeLinks
      }
    ].map((section) => ({
      ...section,
      links: section.links.filter((link) => startsWith(link.title, search)).sort((a, b) => formatter.compare(a.title, b.title)).map((link) => {
        return {
          ...link,
          title: formatMessage({ id: link.title, defaultMessage: link.title })
        };
      })
    })),
    [collectionTypeLinks, search, singleTypeLinks, startsWith, formatMessage, formatter]
  );
  const handleClear = () => {
    setSearch("");
  };
  const handleChangeSearch = ({ target: { value } }) => {
    setSearch(value);
  };
  const label = formatMessage({
    id: (0,getTrad/* default */.Z)("header.name"),
    defaultMessage: "Content"
  });
  return /* @__PURE__ */ react.createElement(SubNav/* SubNav */.m, { ariaLabel: label }, /* @__PURE__ */ react.createElement(
    SubNavHeader/* SubNavHeader */.p,
    {
      label,
      searchable: true,
      value: search,
      onChange: handleChangeSearch,
      onClear: handleClear,
      searchLabel: formatMessage({
        id: "content-manager.components.LeftMenu.Search.label",
        defaultMessage: "Search for a content type"
      })
    }
  ), /* @__PURE__ */ react.createElement(SubNavSections/* SubNavSections */.Z, null, menu.map((section) => {
    const label2 = formatMessage(
      { id: section.title.id, defaultMessage: section.title.defaultMessage },
      section.title.values
    );
    return /* @__PURE__ */ react.createElement(
      SubNavSection/* SubNavSection */.D,
      {
        key: section.id,
        label: label2,
        badgeLabel: section.links.length.toString()
      },
      section.links.map((link) => {
        const search2 = link.search ? `?${link.search}` : "";
        return /* @__PURE__ */ react.createElement(SubNavLink/* SubNavLink */.E, { as: react_router_dom/* NavLink */.OL, key: link.uid, to: `${link.to}${search2}` }, link.title);
      })
    );
  })));
};
/* harmony default export */ const App_LeftMenu = (LeftMenu);

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/pages/App/constants.js
var App_constants = __webpack_require__(86041);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/actions.js

const getInitData = () => ({
  type: App_constants/* GET_INIT_DATA */.fn
});
const resetInitData = () => ({ type: App_constants/* RESET_INIT_DATA */.sZ });
const setInitData = ({
  authorizedCollectionTypeLinks,
  authorizedSingleTypeLinks,
  contentTypeSchemas,
  components,
  fieldSizes
}) => ({
  type: App_constants/* SET_INIT_DATA */.IX,
  data: {
    authorizedCollectionTypeLinks,
    authorizedSingleTypeLinks,
    components,
    contentTypeSchemas,
    fieldSizes
  }
});

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/utils/checkPermissions.js

const checkPermissions = (userPermissions, permissionsToCheck) => permissionsToCheck.map(({ permissions }) => (0,dist/* hasPermissions */.qX)(userPermissions, permissions));
/* harmony default export */ const utils_checkPermissions = (checkPermissions);

// EXTERNAL MODULE: ./node_modules/lodash/groupBy.js
var groupBy = __webpack_require__(63799);
var groupBy_default = /*#__PURE__*/__webpack_require__.n(groupBy);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/utils/generateModelsLinks.js



const generateLinks = (links, type, configurations = []) => {
  return links.filter((link) => link.isDisplayed).map((link) => {
    const collectionTypesPermissions = [
      { action: "plugin::content-manager.explorer.create", subject: link.uid },
      { action: "plugin::content-manager.explorer.read", subject: link.uid }
    ];
    const singleTypesPermissions = [
      { action: "plugin::content-manager.explorer.read", subject: link.uid }
    ];
    const permissions = type === "collectionTypes" ? collectionTypesPermissions : singleTypesPermissions;
    const currentContentTypeConfig = configurations.find(({ uid }) => uid === link.uid);
    let search = null;
    if (currentContentTypeConfig) {
      const searchParams = {
        page: 1,
        pageSize: currentContentTypeConfig.settings.pageSize,
        sort: `${currentContentTypeConfig.settings.defaultSortBy}:${currentContentTypeConfig.settings.defaultSortOrder}`
      };
      search = (0,qs_lib.stringify)(searchParams, { encode: false });
    }
    return {
      permissions,
      search,
      kind: link.kind,
      title: link.info.displayName,
      to: `/content-manager/${link.kind}/${link.uid}`,
      uid: link.uid,
      // Used for the list item key in the helper plugin
      name: link.uid,
      isDisplayed: link.isDisplayed
    };
  });
};
const generateModelsLinks = (models, modelsConfigurations) => {
  const groupedModels = Object.entries(groupBy_default()(models, "kind")).map(([key, value]) => ({
    name: key,
    links: value
  }));
  const [collectionTypes, singleTypes] = sortBy_default()(groupedModels, "name");
  return {
    collectionTypeSectionLinks: generateLinks(
      collectionTypes?.links || [],
      "collectionTypes",
      modelsConfigurations
    ),
    singleTypeSectionLinks: generateLinks(singleTypes?.links ?? [], "singleTypes")
  };
};
/* harmony default export */ const utils_generateModelsLinks = (generateModelsLinks);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/utils/getContentTypeLinks.js



const getContentTypeLinks = async ({ models, userPermissions, toggleNotification }) => {
  const { get } = (0,dist/* getFetchClient */.tg)();
  try {
    const {
      data: { data: contentTypeConfigurations }
    } = await get("/content-manager/content-types-settings");
    const { collectionTypeSectionLinks, singleTypeSectionLinks } = utils_generateModelsLinks(
      models,
      contentTypeConfigurations
    );
    const collectionTypeLinksPermissions = await Promise.all(
      utils_checkPermissions(userPermissions, collectionTypeSectionLinks)
    );
    const authorizedCollectionTypeLinks = collectionTypeSectionLinks.filter(
      (_, index) => collectionTypeLinksPermissions[index]
    );
    const singleTypeLinksPermissions = await Promise.all(
      utils_checkPermissions(userPermissions, singleTypeSectionLinks)
    );
    const authorizedSingleTypeLinks = singleTypeSectionLinks.filter(
      (_, index) => singleTypeLinksPermissions[index]
    );
    return {
      authorizedCollectionTypeLinks,
      authorizedSingleTypeLinks
    };
  } catch (err) {
    console.error(err);
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    return { authorizedCollectionTypeLinks: [], authorizedSingleTypeLinks: [] };
  }
};
/* harmony default export */ const utils_getContentTypeLinks = (getContentTypeLinks);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/useContentManagerInitData.js











const useContentManagerInitData = () => {
  const dispatch = (0,es/* useDispatch */.I0)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const state = (0,es/* useSelector */.v9)((0,App_selectors/* selectAppDomain */.Yg)());
  const fetchDataRef = (0,react.useRef)();
  const { allPermissions } = (0,dist/* useRBACProvider */.vn)();
  const { runHookWaterfall } = (0,dist/* useStrapiApp */.j1)();
  const CancelToken = axios["default"].CancelToken;
  const source = CancelToken.source();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.G)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { get } = (0,dist/* useFetchClient */.kY)();
  const fetchData = async () => {
    dispatch(getInitData());
    try {
      const {
        data: {
          data: { components, contentTypes: models, fieldSizes }
        }
      } = await get("/content-manager/init", { cancelToken: source.token });
      notifyStatus(
        formatMessage({
          id: (0,utils/* getTrad */.OB)("App.schemas.data-loaded"),
          defaultMessage: "The schemas have been successfully loaded."
        })
      );
      const unmutatedContentTypeLinks = await utils_getContentTypeLinks({
        models,
        userPermissions: allPermissions,
        toggleNotification
      });
      const { ctLinks: authorizedCollectionTypeLinks } = runHookWaterfall(
        exposedHooks/* MUTATE_COLLECTION_TYPES_LINKS */.LK,
        {
          ctLinks: unmutatedContentTypeLinks.authorizedCollectionTypeLinks,
          models
        }
      );
      const { stLinks: authorizedSingleTypeLinks } = runHookWaterfall(exposedHooks/* MUTATE_SINGLE_TYPES_LINKS */.dV, {
        stLinks: unmutatedContentTypeLinks.authorizedSingleTypeLinks,
        models
      });
      const actionToDispatch = setInitData({
        authorizedCollectionTypeLinks,
        authorizedSingleTypeLinks,
        contentTypeSchemas: models,
        components,
        fieldSizes
      });
      dispatch(actionToDispatch);
    } catch (err) {
      if (axios["default"].isCancel(err)) {
        return;
      }
      console.error(err);
      toggleNotification({ type: "warning", message: { id: "notification.error" } });
    }
  };
  fetchDataRef.current = fetchData;
  (0,react.useEffect)(() => {
    fetchDataRef.current();
    return () => {
      source.cancel("Operation canceled by the user.");
      dispatch(resetInitData());
    };
  }, [dispatch, toggleNotification]);
  return { ...state, refetchData: fetchDataRef.current };
};
/* harmony default export */ const App_useContentManagerInitData = (useContentManagerInitData);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/index.js























function renderDraglayerItem({ type, item }) {
  if ([ItemTypes/* default */.Z.EDIT_FIELD, ItemTypes/* default */.Z.FIELD].includes(type)) {
    return /* @__PURE__ */ react.createElement(CardDragPreview, { labelField: item.labelField });
  }
  const [actualType] = type.split("_");
  switch (actualType) {
    case ItemTypes/* default */.Z.COMPONENT:
    case ItemTypes/* default */.Z.DYNAMIC_ZONE:
      return /* @__PURE__ */ react.createElement(ComponentDragPreview, { displayedValue: item.displayedValue });
    case ItemTypes/* default */.Z.RELATION:
      return /* @__PURE__ */ react.createElement(
        RelationDragPreview,
        {
          displayedValue: item.displayedValue,
          status: item.status,
          width: item.width
        }
      );
    default:
      return null;
  }
}
const App = () => {
  const contentTypeMatch = (0,react_router/* useRouteMatch */.$B)(`/content-manager/:kind/:uid`);
  const { status, collectionTypeLinks, singleTypeLinks, models, refetchData } = App_useContentManagerInitData();
  const authorisedModels = sortBy_default()(
    [...collectionTypeLinks, ...singleTypeLinks],
    (model) => model.title.toLowerCase()
  );
  const { pathname } = (0,react_router/* useLocation */.TH)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { startSection } = (0,dist/* useGuidedTour */.c1)();
  const startSectionRef = (0,react.useRef)(startSection);
  const permissions = (0,es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  (0,react.useEffect)(() => {
    if (startSectionRef.current) {
      startSectionRef.current("contentManager");
    }
  }, []);
  if (status === "loading") {
    return /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": "true" }, /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.T,
      {
        title: formatMessage({
          id: (0,getTrad/* default */.Z)("header.name"),
          defaultMessage: "Content"
        })
      }
    ), /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null));
  }
  const supportedModelsToDisplay = models.filter(({ isDisplayed }) => isDisplayed);
  if (authorisedModels.length === 0 && supportedModelsToDisplay.length > 0 && pathname !== "/content-manager/403") {
    return /* @__PURE__ */ react.createElement(react_router/* Redirect */.l_, { to: "/content-manager/403" });
  }
  if (supportedModelsToDisplay.length === 0 && pathname !== "/content-manager/no-content-types") {
    return /* @__PURE__ */ react.createElement(react_router/* Redirect */.l_, { to: "/content-manager/no-content-types" });
  }
  if (!contentTypeMatch && authorisedModels.length > 0) {
    return /* @__PURE__ */ react.createElement(
      react_router/* Redirect */.l_,
      {
        to: `${authorisedModels[0].to}${authorisedModels[0].search ? `?${authorisedModels[0].search}` : ""}`
      }
    );
  }
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, { sideNav: /* @__PURE__ */ react.createElement(App_LeftMenu, null) }, /* @__PURE__ */ react.createElement(DragLayer/* DragLayer */.r, { renderItem: renderDraglayerItem }), /* @__PURE__ */ react.createElement(contexts_ModelsContext.Provider, { value: { refetchData } }, /* @__PURE__ */ react.createElement(react_router/* Switch */.rs, null, /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/content-manager/components/:uid/configurations/edit" }, /* @__PURE__ */ react.createElement(dist/* CheckPagePermissions */.O4, { permissions: permissions.contentManager.componentsConfigurations }, /* @__PURE__ */ react.createElement(ComponentSetttingsView, null))), /* @__PURE__ */ react.createElement(
    react_router/* Route */.AW,
    {
      path: "/content-manager/collectionType/:slug",
      component: pages_CollectionTypeRecursivePath
    }
  ), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/content-manager/singleType/:slug", component: pages_SingleTypeRecursivePath }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/content-manager/403" }, /* @__PURE__ */ react.createElement(pages_NoPermissions, null)), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/content-manager/no-content-types" }, /* @__PURE__ */ react.createElement(pages_NoContentType, null)), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "", component: dist/* AnErrorOccurred */.Hn }))));
};

/* harmony default export */ function pages_App() {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Helmet/* Helmet */.q,
    {
      title: formatMessage({ id: (0,getTrad/* default */.Z)("plugin.name"), defaultMessage: "Content Manager" })
    }
  ), /* @__PURE__ */ react.createElement(App, null));
}


/***/ }),

/***/ 50236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* binding */ Information)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(93415);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.mjs
var Divider = __webpack_require__(84366);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70627);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/utils/index.js + 11 modules
var utils = __webpack_require__(21892);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/Information/utils/getUnits.js
const msPerMinute = 60 * 1e3;
const msPerHour = msPerMinute * 60;
const msPerDay = msPerHour * 24;
const msPerMonth = msPerDay * 30;
const msPerYear = msPerDay * 365;
const getUnits = (value) => {
  if (value < msPerMinute) {
    return { unit: "second", value: -Math.round(value / 1e3) };
  }
  if (value < msPerHour) {
    return { unit: "minute", value: -Math.round(value / msPerMinute) };
  }
  if (value < msPerDay) {
    return { unit: "hour", value: -Math.round(value / msPerHour) };
  }
  if (value < msPerMonth) {
    return { unit: "day", value: -Math.round(value / msPerDay) };
  }
  if (value < msPerYear) {
    return { unit: "month", value: -Math.round(value / msPerMonth) };
  }
  return { unit: "year", value: -Math.round(value / msPerYear) };
};
/* harmony default export */ const utils_getUnits = (getUnits);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/Information/index.js







const Title = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600", id: "additional-information" }, formatMessage({
    id: (0,utils/* getTrad */.OB)("containers.Edit.information"),
    defaultMessage: "Information"
  })), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null)));
};
const KeyValuePair = ({ label, value }) => {
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "dt", fontWeight: "bold", textColor: "neutral800", variant: "pi" }, label), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "dd", variant: "pi", textColor: "neutral600" }, value));
};
KeyValuePair.defaultProps = {
  value: "-"
};
KeyValuePair.propTypes = {
  label: (prop_types_default()).string.isRequired,
  value: (prop_types_default()).string
};
const Body = () => {
  const { formatMessage, formatRelativeTime } = (0,useIntl/* default */.Z)();
  const { initialData, isCreatingEntry } = (0,dist/* useCMEditViewDataManager */.Wq)();
  const currentTime = (0,react.useRef)(Date.now());
  const getFieldInfo = (atField, byField) => {
    const displayName = initialData[byField] ? (0,utils/* getDisplayName */.Gf)(initialData[byField], formatMessage) : "-";
    const timestamp = initialData[atField] ? new Date(initialData[atField]).getTime() : Date.now();
    const elapsed = timestamp - currentTime.current;
    const { unit, value } = utils_getUnits(-elapsed);
    return {
      at: formatRelativeTime(value, unit, { numeric: "auto" }),
      by: isCreatingEntry ? "-" : displayName
    };
  };
  const updated = getFieldInfo("updatedAt", "updatedBy");
  const created = getFieldInfo("createdAt", "createdBy");
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2, as: "dl" }, /* @__PURE__ */ react.createElement(
    KeyValuePair,
    {
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("containers.Edit.information.created"),
        defaultMessage: "Created"
      }),
      value: created.at
    }
  ), /* @__PURE__ */ react.createElement(
    KeyValuePair,
    {
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("containers.Edit.information.by"),
        defaultMessage: "By"
      }),
      value: created.by
    }
  )), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2, as: "dl" }, /* @__PURE__ */ react.createElement(
    KeyValuePair,
    {
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("containers.Edit.information.lastUpdate"),
        defaultMessage: "Last update"
      }),
      value: updated.at
    }
  ), /* @__PURE__ */ react.createElement(
    KeyValuePair,
    {
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("containers.Edit.information.by"),
        defaultMessage: "By"
      }),
      value: updated.by
    }
  )));
};
const Root = ({ children }) => {
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 4 }, children);
};
Root.propTypes = {
  children: prop_types_default().oneOfType([prop_types_default().arrayOf((prop_types_default()).node), (prop_types_default()).node]).isRequired
};
const Information = {
  Root,
  Title,
  Body
};


/***/ }),

/***/ 54920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 22868:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 14777:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 99830:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 70209:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 87414:
/***/ (() => {

/* (ignored) */

/***/ })

}]);