"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[5895],{

/***/ 39223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SettingsPage: () => (/* binding */ SettingsPage)
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
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 12 modules
var hooks = __webpack_require__(20838);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useEnterprise/index.js + 1 modules
var useEnterprise = __webpack_require__(80902);
// EXTERNAL MODULE: ./.cache/admin/src/utils/createRoute.js
var createRoute = __webpack_require__(95187);
// EXTERNAL MODULE: ./.cache/admin/src/utils/makeUniqueRoutes.js
var makeUniqueRoutes = __webpack_require__(14155);
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
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70627);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(47533);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/components/SettingsNav/index.js






const SettingsNav = ({ menu }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const { pathname } = (0,react_router/* useLocation */.TH)();
  const filteredMenu = menu.filter(
    (section) => !section.links.every((link) => link.isDisplayed === false)
  );
  const sections = filteredMenu.map((section) => {
    return {
      ...section,
      title: section.intlLabel,
      links: section.links.map((link) => {
        return {
          ...link,
          title: link.intlLabel,
          name: link.id
        };
      })
    };
  });
  const label = formatMessage({
    id: "global.settings",
    defaultMessage: "Settings"
  });
  const handleClickOnLink = (destination = null) => {
    trackUsage("willNavigate", { from: pathname, to: destination });
  };
  return /* @__PURE__ */ react.createElement(SubNav/* SubNav */.m, { ariaLabel: label }, /* @__PURE__ */ react.createElement(SubNavHeader/* SubNavHeader */.p, { label }), /* @__PURE__ */ react.createElement(SubNavSections/* SubNavSections */.Z, null, sections.map((section) => /* @__PURE__ */ react.createElement(SubNavSection/* SubNavSection */.D, { key: section.id, label: formatMessage(section.intlLabel) }, section.links.map((link) => {
    return /* @__PURE__ */ react.createElement(
      SubNavLink/* SubNavLink */.E,
      {
        as: react_router_dom/* NavLink */.OL,
        withBullet: link.hasNotification,
        to: link.to,
        onClick: () => handleClickOnLink(link.to),
        key: link.id
      },
      formatMessage(link.intlLabel)
    );
  })))));
};
SettingsNav.propTypes = {
  menu: (prop_types_default()).array.isRequired
};
/* harmony default export */ const components_SettingsNav = (SettingsNav);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/constants.js
const ROUTES_CE = [
  {
    async Component() {
      const component = await __webpack_require__.e(/* import() | admin-roles-list */ 3455).then(__webpack_require__.bind(__webpack_require__, 7513));
      return component;
    },
    to: "/settings/roles",
    exact: true
  },
  {
    async Component() {
      const component = await Promise.all(/* import() | admin-edit-roles-page */[__webpack_require__.e(8404), __webpack_require__.e(2544)]).then(__webpack_require__.bind(__webpack_require__, 25545));
      return component;
    },
    to: "/settings/roles/duplicate/:id",
    exact: true
  },
  {
    async Component() {
      const component = await Promise.all(/* import() | admin-edit-roles-page */[__webpack_require__.e(8404), __webpack_require__.e(2544)]).then(__webpack_require__.bind(__webpack_require__, 25545));
      return component;
    },
    to: "/settings/roles/new",
    exact: true
  },
  {
    async Component() {
      const component = await Promise.all(/* import() | admin-edit-roles-page */[__webpack_require__.e(8404), __webpack_require__.e(2544)]).then(__webpack_require__.bind(__webpack_require__, 63727));
      return component;
    },
    to: "/settings/roles/:id",
    exact: true
  },
  {
    async Component() {
      const component = await __webpack_require__.e(/* import() | admin-users */ 5199).then(__webpack_require__.bind(__webpack_require__, 87901));
      return component;
    },
    to: "/settings/users",
    exact: true
  },
  {
    async Component() {
      const component = await __webpack_require__.e(/* import() | admin-edit-users */ 4263).then(__webpack_require__.bind(__webpack_require__, 93552));
      return component;
    },
    to: "/settings/users/:id",
    exact: true
  },
  {
    async Component() {
      const component = await __webpack_require__.e(/* import() | webhook-edit-page */ 5162).then(__webpack_require__.bind(__webpack_require__, 71589));
      return component;
    },
    to: "/settings/webhooks/create",
    exact: true
  },
  {
    async Component() {
      const component = await __webpack_require__.e(/* import() | webhook-edit-page */ 5162).then(__webpack_require__.bind(__webpack_require__, 10372));
      return component;
    },
    to: "/settings/webhooks/:id",
    exact: true
  },
  {
    async Component() {
      const component = await __webpack_require__.e(/* import() | webhook-list-page */ 4121).then(__webpack_require__.bind(__webpack_require__, 19298));
      return component;
    },
    to: "/settings/webhooks",
    exact: true
  },
  {
    async Component() {
      const component = await __webpack_require__.e(/* import() | api-tokens-list-page */ 8056).then(__webpack_require__.bind(__webpack_require__, 71362));
      return component;
    },
    to: "/settings/api-tokens",
    exact: true
  },
  {
    async Component() {
      const component = await Promise.all(/* import() | api-tokens-create-page */[__webpack_require__.e(8404), __webpack_require__.e(8794), __webpack_require__.e(2458), __webpack_require__.e(4299)]).then(__webpack_require__.bind(__webpack_require__, 1880));
      return component;
    },
    to: "/settings/api-tokens/create",
    exact: true
  },
  {
    async Component() {
      const component = await Promise.all(/* import() | api-tokens-edit-page */[__webpack_require__.e(8404), __webpack_require__.e(8794), __webpack_require__.e(2458), __webpack_require__.e(92)]).then(__webpack_require__.bind(__webpack_require__, 50955));
      return component;
    },
    to: "/settings/api-tokens/:id",
    exact: true
  },
  {
    async Component() {
      const component = await Promise.all(/* import() | transfer-tokens-create-page */[__webpack_require__.e(8404), __webpack_require__.e(8794), __webpack_require__.e(3467), __webpack_require__.e(4816)]).then(__webpack_require__.bind(__webpack_require__, 81524));
      return component;
    },
    to: "/settings/transfer-tokens/create",
    exact: true
  },
  {
    async Component() {
      const component = await __webpack_require__.e(/* import() | transfer-tokens-list-page */ 9600).then(__webpack_require__.bind(__webpack_require__, 68446));
      return component;
    },
    to: "/settings/transfer-tokens",
    exact: true
  },
  {
    async Component() {
      const component = await Promise.all(/* import() | transfer-tokens-edit-page */[__webpack_require__.e(8404), __webpack_require__.e(8794), __webpack_require__.e(3467), __webpack_require__.e(2492)]).then(__webpack_require__.bind(__webpack_require__, 63252));
      return component;
    },
    to: "/settings/transfer-tokens/:id",
    exact: true
  }
];

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(73354);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.mjs + 1 modules
var Loader = __webpack_require__(77970);
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
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Link/Link.mjs
var Link = __webpack_require__(68412);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(59082);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ExternalLink.mjs
var ExternalLink = __webpack_require__(48157);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(40464);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var react_redux_es = __webpack_require__(49402);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/selectors.js
var selectors = __webpack_require__(36364);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(93415);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/utils/constants.js
const DIMENSION = 750;
const SIZE = 100;
const ACCEPTED_FORMAT = ["image/jpeg", "image/png", "image/svg+xml"];

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/CarouselInput/CarouselInput.mjs + 1 modules
var CarouselInput = __webpack_require__(78406);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/CarouselInput/CarouselActions.mjs
var CarouselActions = __webpack_require__(97767);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(4987);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/CarouselInput/CarouselSlide.mjs
var CarouselSlide = __webpack_require__(93841);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.mjs
var Plus = __webpack_require__(36938);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Refresh.mjs
var Refresh = __webpack_require__(84352);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.mjs
var ModalLayout = __webpack_require__(5938);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.mjs
var ModalHeader = __webpack_require__(6918);
// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(61815);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/LogoModalStepper/reducer.js

const initialState = {
  localImage: void 0
};
const reducer = (state = initialState, action) => (0,immer_esm/* default */.ZP)(state, (draftState) => {
  switch (action.type) {
    case "SET_LOCAL_IMAGE": {
      draftState.localImage = action.value;
      break;
    }
    default: {
      return draftState;
    }
  }
});
/* harmony default export */ const LogoModalStepper_reducer = (reducer);


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/LogoModalStepper/index.js





const LogoModalStepper = ({
  onChangeLogo,
  customLogo,
  goTo,
  Component,
  modalTitle,
  next,
  prev,
  currentStep
}) => {
  const [{ localImage }, dispatch] = (0,react.useReducer)(LogoModalStepper_reducer, initialState);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const setLocalImage = (asset) => {
    dispatch({
      type: "SET_LOCAL_IMAGE",
      value: asset
    });
  };
  const handleCloseModal = () => {
    goTo(null);
  };
  if (!currentStep) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { labelledBy: "modal", onClose: handleCloseModal }, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", as: "h2", id: "modal" }, formatMessage(modalTitle))), /* @__PURE__ */ react.createElement(
    Component,
    {
      setLocalImage,
      goTo,
      next,
      prev,
      onClose: handleCloseModal,
      asset: localImage || customLogo,
      onChangeLogo
    }
  ));
};
LogoModalStepper.defaultProps = {
  Component: void 0,
  currentStep: void 0,
  customLogo: void 0,
  modalTitle: void 0,
  next: null,
  prev: null
};
LogoModalStepper.propTypes = {
  Component: (prop_types_default()).elementType,
  currentStep: (prop_types_default()).string,
  customLogo: prop_types_default().shape({
    name: (prop_types_default()).string,
    url: (prop_types_default()).string,
    width: (prop_types_default()).number,
    height: (prop_types_default()).number,
    ext: (prop_types_default()).string
  }),
  goTo: (prop_types_default()).func.isRequired,
  modalTitle: prop_types_default().shape({
    id: (prop_types_default()).string,
    defaultMessage: (prop_types_default()).string
  }),
  next: (prop_types_default()).string,
  onChangeLogo: (prop_types_default()).func.isRequired,
  prev: (prop_types_default()).string
};
/* harmony default export */ const components_LogoModalStepper = (LogoModalStepper);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/LogoInput/reducer.js

const reducer_initialState = {
  currentStep: void 0
};
const reducer_reducer = (state = reducer_initialState, action) => (0,immer_esm/* default */.ZP)(state, (draftState) => {
  switch (action.type) {
    case "GO_TO": {
      draftState.currentStep = action.to;
      break;
    }
    default: {
      return draftState;
    }
  }
});
/* harmony default export */ const LogoInput_reducer = (reducer_reducer);


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabGroup.mjs
var TabGroup = __webpack_require__(69878);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/Tabs.mjs + 1 modules
var Tabs = __webpack_require__(94098);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.mjs
var Divider = __webpack_require__(84366);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabPanels.mjs
var TabPanels = __webpack_require__(61908);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldInput.mjs
var FieldInput = __webpack_require__(77804);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/Field.mjs
var Field = __webpack_require__(1821);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.mjs
var Icon = __webpack_require__(50703);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldError.mjs
var FieldError = __webpack_require__(55911);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.mjs
var ModalFooter = __webpack_require__(35250);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/PicturePlus.mjs
var PicturePlus = __webpack_require__(80153);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(37652);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/utils/parseFileMetadatas.js

const FILE_FORMAT_ERROR_MESSAGE = {
  id: "Settings.application.customization.modal.upload.error-format",
  defaultMessage: "Wrong format uploaded (accepted formats only: jpeg, jpg, png, svg)."
};
const FILE_SIZING_ERROR_MESSAGE = {
  id: "Settings.application.customization.modal.upload.error-size",
  defaultMessage: "The file uploaded is too large (max dimension: {dimension}x{dimension}, max file size: {size}KB)"
};
const getFileDimensions = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = function() {
        resolve({ width: img.width, height: img.height });
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
};
const rawFileToAsset = (rawFile, fileDimensions) => {
  return {
    ext: rawFile.name.split(".").pop(),
    size: rawFile.size / 1e3,
    name: rawFile.name,
    url: URL.createObjectURL(rawFile),
    rawFile,
    width: fileDimensions.width,
    height: fileDimensions.height
  };
};
const parseFileMetadatas = async (file) => {
  let error;
  const isFormatAuthorized = ACCEPTED_FORMAT.includes(file.type);
  if (!isFormatAuthorized) {
    error = new Error("File format");
    error.displayMessage = FILE_FORMAT_ERROR_MESSAGE;
    throw error;
  }
  const fileDimensions = await getFileDimensions(file);
  const areDimensionsAuthorized = fileDimensions.width <= DIMENSION && fileDimensions.height <= DIMENSION;
  if (!areDimensionsAuthorized) {
    error = new Error("File sizing");
    error.displayMessage = FILE_SIZING_ERROR_MESSAGE;
    throw error;
  }
  const asset = rawFileToAsset(file, fileDimensions);
  const isSizeAuthorized = asset.size <= SIZE;
  if (!isSizeAuthorized) {
    error = new Error("File sizing");
    error.displayMessage = FILE_SIZING_ERROR_MESSAGE;
    throw error;
  }
  return asset;
};

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/LogoModalStepper/FromComputerForm.js








const FileInput = (0,styled_components_browser_esm/* default */.ZP)((0,FieldInput/* FieldInput */._))`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const FromComputerForm = ({ setLocalImage, goTo, next, onClose }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [dragOver, setDragOver] = (0,react.useState)(false);
  const [fileError, setFileError] = (0,react.useState)(void 0);
  const inputRef = (0,react.useRef)(null);
  const handleDragEnter = () => setDragOver(true);
  const handleDragLeave = () => setDragOver(false);
  const handleClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  const handleChange = async () => {
    handleDragLeave();
    const file = inputRef.current.files[0];
    if (!file) {
      return;
    }
    try {
      const asset = await parseFileMetadatas(file);
      setLocalImage(asset);
      goTo(next);
    } catch (err) {
      if (err.displayMessage) {
        setFileError(formatMessage(err.displayMessage, { size: SIZE, dimension: DIMENSION }));
        inputRef.current.focus();
      } else {
        throw err;
      }
    }
  };
  const getBorderColor = () => {
    if (dragOver) {
      return "primary500";
    }
    if (fileError) {
      return "danger600";
    }
    return "neutral300";
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("form", null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 8, paddingRight: 8, paddingTop: 6, paddingBottom: 6 }, /* @__PURE__ */ react.createElement(Field/* Field */.g, { name: "logo-upload", error: fileError }, /* @__PURE__ */ react.createElement("label", { htmlFor: "logo-upload" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(
    Flex/* Flex */.k,
    {
      paddingTop: 9,
      paddingBottom: 7,
      hasRadius: true,
      justifyContent: "center",
      direction: "column",
      background: dragOver ? "primary100" : "neutral100",
      borderColor: getBorderColor(),
      borderStyle: "dashed",
      borderWidth: "1px",
      position: "relative",
      onDragEnter: handleDragEnter,
      onDragLeave: handleDragLeave
    },
    /* @__PURE__ */ react.createElement(
      Icon/* Icon */.J,
      {
        color: "primary600",
        width: `${60 / 16}rem`,
        height: `${60 / 16}rem`,
        as: PicturePlus/* default */.Z,
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 3, paddingBottom: 5 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "span" }, formatMessage({
      id: "Settings.application.customization.modal.upload.drag-drop",
      defaultMessage: "Drag and Drop here or"
    }))),
    /* @__PURE__ */ react.createElement(
      FileInput,
      {
        accept: ACCEPTED_FORMAT,
        cursor: "pointer",
        as: "input",
        type: "file",
        name: "files",
        tabIndex: -1,
        zIndex: 1,
        onChange: handleChange,
        ref: inputRef,
        id: "logo-upload"
      }
    ),
    /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "button", onClick: handleClick }, formatMessage({
      id: "Settings.application.customization.modal.upload.cta.browse",
      defaultMessage: "Browse files"
    })),
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 6 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600" }, formatMessage(
      {
        id: "Settings.application.customization.modal.upload.file-validation",
        defaultMessage: "Max dimension: {dimension}x{dimension}, Max size: {size}KB"
      },
      { size: SIZE, dimension: DIMENSION }
    )))
  ), /* @__PURE__ */ react.createElement(FieldError/* FieldError */.c, null)))))), /* @__PURE__ */ react.createElement(
    ModalFooter/* ModalFooter */.m,
    {
      startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: onClose, variant: "tertiary" }, formatMessage({
        id: "Settings.application.customization.modal.cancel",
        defaultMessage: "Cancel"
      }))
    }
  ));
};
FromComputerForm.defaultProps = {
  next: null
};
FromComputerForm.propTypes = {
  goTo: (prop_types_default()).func.isRequired,
  next: (prop_types_default()).string,
  onClose: (prop_types_default()).func.isRequired,
  setLocalImage: (prop_types_default()).func.isRequired
};
/* harmony default export */ const LogoModalStepper_FromComputerForm = (FromComputerForm);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.mjs
var TextInput = __webpack_require__(12881);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/utils/urlToFile.js

const urlToFile = async (url) => {
  try {
    const { get } = (0,dist/* getFetchClient */.tg)();
    const res = await get(url, { responseType: "blob", timeout: 8e3 });
    const loadedFile = new File([res.data], res.config.url, {
      type: res.headers["content-type"]
    });
    return loadedFile;
  } catch (err) {
    err.displayMessage = {
      id: "Settings.application.customization.modal.upload.error-network",
      defaultMessage: "Network error"
    };
    throw err;
  }
};
/* harmony default export */ const utils_urlToFile = (urlToFile);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/LogoModalStepper/FromUrlForm.js







const FromUrlForm = ({ goTo, next, onClose, setLocalImage }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [logoUrl, setLogoUrl] = (0,react.useState)("");
  const [error, setError] = (0,react.useState)(null);
  const handleChange = (e) => {
    setLogoUrl(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      const file = await utils_urlToFile(logoUrl);
      const asset = await parseFileMetadatas(file);
      setLocalImage(asset);
      goTo(next);
    } catch (err) {
      if (err.displayMessage) {
        setError(formatMessage(err.displayMessage, { size: SIZE, dimension: DIMENSION }));
      } else {
        throw err;
      }
    }
  };
  return /* @__PURE__ */ react.createElement(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        handleSubmit();
      }
    },
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 8, paddingRight: 8, paddingTop: 6, paddingBottom: 6 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        label: formatMessage({
          id: "Settings.application.customization.modal.upload.from-url.input-label",
          defaultMessage: "URL"
        }),
        error,
        onChange: handleChange,
        value: logoUrl,
        name: "logo-url"
      }
    )),
    /* @__PURE__ */ react.createElement(
      ModalFooter/* ModalFooter */.m,
      {
        startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: onClose, variant: "tertiary" }, formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" })),
        endActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit" }, formatMessage({
          id: "Settings.application.customization.modal.upload.next",
          defaultMessage: "Next"
        }))
      }
    )
  );
};
FromUrlForm.defaultProps = {
  next: null
};
FromUrlForm.propTypes = {
  goTo: (prop_types_default()).func.isRequired,
  next: (prop_types_default()).string,
  onClose: (prop_types_default()).func.isRequired,
  setLocalImage: (prop_types_default()).func.isRequired
};
/* harmony default export */ const LogoModalStepper_FromUrlForm = (FromUrlForm);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/LogoModalStepper/AddLogoDialog.js






const AddLogoDialog = ({ setLocalImage, goTo, next, onClose }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(
    TabGroup/* TabGroup */.v,
    {
      label: formatMessage({
        id: "Settings.application.customization.modal.tab.label",
        defaultMessage: "How do you want to upload your assets?"
      }),
      variant: "simple"
    },
    /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 8, paddingRight: 8 }, /* @__PURE__ */ react.createElement(Tabs/* Tabs */.m, null, /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, formatMessage({
      id: "Settings.application.customization.modal.upload.from-computer",
      defaultMessage: "From computer"
    })), /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, formatMessage({
      id: "Settings.application.customization.modal.upload.from-url",
      defaultMessage: "From url"
    }))), /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null)),
    /* @__PURE__ */ react.createElement(TabPanels/* TabPanels */.n, null, /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(
      LogoModalStepper_FromComputerForm,
      {
        onClose,
        setLocalImage,
        goTo,
        next
      }
    )), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(LogoModalStepper_FromUrlForm, { onClose, setLocalImage, goTo, next })))
  );
};
AddLogoDialog.defaultProps = {
  next: null
};
AddLogoDialog.propTypes = {
  goTo: (prop_types_default()).func.isRequired,
  next: (prop_types_default()).string,
  onClose: (prop_types_default()).func.isRequired,
  setLocalImage: (prop_types_default()).func.isRequired
};
/* harmony default export */ const LogoModalStepper_AddLogoDialog = (AddLogoDialog);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Card/Card.mjs
var Card = __webpack_require__(98410);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Card/CardHeader.mjs
var CardHeader = __webpack_require__(1597);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Card/CardAsset.mjs
var CardAsset = __webpack_require__(77011);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Card/CardBody.mjs
var CardBody = __webpack_require__(67909);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Card/CardContent.mjs
var CardContent = __webpack_require__(9902);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Card/CardTitle.mjs
var CardTitle = __webpack_require__(83375);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Card/CardBadge.mjs
var CardBadge = __webpack_require__(94485);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/LogoModalStepper/ImageCardAsset.js




const ImageCardAsset = ({ asset }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Card/* Card */.Z, null, /* @__PURE__ */ react.createElement(CardHeader/* CardHeader */.O, null, /* @__PURE__ */ react.createElement(CardAsset/* CardAsset */.H, { size: "S", src: asset.url })), /* @__PURE__ */ react.createElement(CardBody/* CardBody */.e, null, /* @__PURE__ */ react.createElement(CardContent/* CardContent */.a, null, /* @__PURE__ */ react.createElement(CardTitle/* CardTitle */.l, null, asset.name), /* @__PURE__ */ react.createElement(CardTitle/* CardSubtitle */._, null, `${asset.ext.toUpperCase()} - ${asset.width}\u2715${asset.height}`)), /* @__PURE__ */ react.createElement(CardBadge/* CardBadge */.E, null, formatMessage({
    id: "Settings.application.customization.modal.pending.card-badge",
    defaultMessage: "image"
  }))));
};
ImageCardAsset.propTypes = {
  asset: prop_types_default().shape({
    name: (prop_types_default()).string,
    url: (prop_types_default()).string,
    width: (prop_types_default()).number,
    height: (prop_types_default()).number,
    ext: (prop_types_default()).string
  }).isRequired
};
/* harmony default export */ const LogoModalStepper_ImageCardAsset = (ImageCardAsset);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/LogoModalStepper/PendingLogoDialog.js






const PendingLogoDialog = ({ onClose, asset, prev, next, goTo, setLocalImage, onChangeLogo }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const handleGoBack = () => {
    setLocalImage(void 0);
    goTo(prev);
  };
  const handleUpload = () => {
    onChangeLogo(asset);
    goTo(next);
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 8, paddingRight: 8, paddingTop: 6, paddingBottom: 6 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between", paddingBottom: 6 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "flex-start" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold" }, formatMessage({
    id: "Settings.application.customization.modal.pending.title",
    defaultMessage: "Logo ready to upload"
  })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral500" }, formatMessage({
    id: "Settings.application.customization.modal.pending.subtitle",
    defaultMessage: "Manage the chosen logo before uploading it"
  }))), /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: handleGoBack, variant: "secondary" }, formatMessage({
    id: "Settings.application.customization.modal.pending.choose-another",
    defaultMessage: "Choose another logo"
  }))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { maxWidth: (0,dist/* pxToRem */.Q1)(180) }, asset.url ? /* @__PURE__ */ react.createElement(LogoModalStepper_ImageCardAsset, { asset }) : null)), /* @__PURE__ */ react.createElement(
    ModalFooter/* ModalFooter */.m,
    {
      startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: onClose, variant: "tertiary" }, formatMessage({
        id: "Settings.application.customization.modal.cancel",
        defaultMessage: "Cancel"
      })),
      endActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: handleUpload }, formatMessage({
        id: "Settings.application.customization.modal.pending.upload",
        defaultMessage: "Upload logo"
      }))
    }
  ));
};
PendingLogoDialog.defaultProps = {
  next: null,
  prev: null
};
PendingLogoDialog.propTypes = {
  goTo: (prop_types_default()).func.isRequired,
  asset: prop_types_default().shape({
    name: (prop_types_default()).string,
    url: (prop_types_default()).string,
    width: (prop_types_default()).number,
    height: (prop_types_default()).number,
    ext: (prop_types_default()).string
  }).isRequired,
  next: (prop_types_default()).string,
  onClose: (prop_types_default()).func.isRequired,
  onChangeLogo: (prop_types_default()).func.isRequired,
  prev: (prop_types_default()).string,
  setLocalImage: (prop_types_default()).func.isRequired
};
/* harmony default export */ const LogoModalStepper_PendingLogoDialog = (PendingLogoDialog);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/LogoInput/stepper.js


const stepper = {
  upload: {
    Component: LogoModalStepper_AddLogoDialog,
    modalTitle: {
      id: "Settings.application.customization.modal.upload",
      defaultMessage: "Upload logo"
    },
    next: "pending",
    prev: null
  },
  pending: {
    Component: LogoModalStepper_PendingLogoDialog,
    modalTitle: {
      id: "Settings.application.customization.modal.pending",
      defaultMessage: "Pending logo"
    },
    next: null,
    prev: "upload"
  }
};
/* harmony default export */ const LogoInput_stepper = (stepper);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/LogoInput/index.js








const LogoInput = ({
  canUpdate,
  customLogo,
  defaultLogo,
  hint,
  label,
  onChangeLogo,
  onResetLogo
}) => {
  const [{ currentStep }, dispatch] = (0,react.useReducer)(LogoInput_reducer, reducer_initialState);
  const { Component, next, prev, modalTitle } = LogoInput_stepper[currentStep] || {};
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const goTo = (to) => {
    dispatch({
      type: "GO_TO",
      to
    });
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    CarouselInput/* CarouselInput */.F,
    {
      label,
      selectedSlide: 0,
      hint,
      previousLabel: "",
      nextLabel: "",
      onNext: () => {
      },
      onPrevious: () => {
      },
      secondaryLabel: customLogo?.name || "logo.png",
      actions: /* @__PURE__ */ react.createElement(CarouselActions/* CarouselActions */.b, null, /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          disabled: !canUpdate,
          onClick: () => goTo(customLogo ? "pending" : "upload"),
          label: formatMessage({
            id: "Settings.application.customization.carousel.change-action",
            defaultMessage: "Change logo"
          }),
          icon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null)
        }
      ), customLogo && /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          disabled: !canUpdate,
          onClick: onResetLogo,
          label: formatMessage({
            id: "Settings.application.customization.carousel.reset-action",
            defaultMessage: "Reset logo"
          }),
          icon: /* @__PURE__ */ react.createElement(Refresh/* default */.Z, null)
        }
      ))
    },
    /* @__PURE__ */ react.createElement(
      CarouselSlide/* CarouselSlide */.q,
      {
        label: formatMessage({
          id: "Settings.application.customization.carousel-slide.label",
          defaultMessage: "Logo slide"
        })
      },
      /* @__PURE__ */ react.createElement(
        Box/* Box */.x,
        {
          maxHeight: "40%",
          maxWidth: "40%",
          as: "img",
          src: customLogo?.url || defaultLogo,
          alt: formatMessage({
            id: "Settings.application.customization.carousel.title",
            defaultMessage: "Logo"
          })
        }
      )
    )
  ), /* @__PURE__ */ react.createElement(
    components_LogoModalStepper,
    {
      Component,
      currentStep,
      onChangeLogo,
      customLogo,
      goTo,
      next,
      prev,
      modalTitle
    }
  ));
};
LogoInput.defaultProps = {
  canUpdate: false,
  customLogo: null,
  hint: null
};
LogoInput.propTypes = {
  canUpdate: (prop_types_default()).bool,
  customLogo: prop_types_default().shape({
    url: (prop_types_default()).string,
    name: (prop_types_default()).string
  }),
  label: (prop_types_default()).string.isRequired,
  hint: (prop_types_default()).string,
  defaultLogo: (prop_types_default()).string.isRequired,
  onChangeLogo: (prop_types_default()).func.isRequired,
  onResetLogo: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_LogoInput = (LogoInput);

// EXTERNAL MODULE: ./node_modules/lodash/merge.js
var merge = __webpack_require__(87830);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/CustomizationInfos/init.js

const init = (initialState, projectSettingsStored) => {
  const copyInitialState = merge_default()(initialState, {
    menuLogo: {
      display: projectSettingsStored.menuLogo
    },
    authLogo: {
      display: projectSettingsStored.authLogo
    }
  });
  return copyInitialState;
};
/* harmony default export */ const CustomizationInfos_init = (init);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/CustomizationInfos/reducer.js

const CustomizationInfos_reducer_initialState = {
  menuLogo: {
    display: null,
    submit: {
      rawFile: null,
      isReset: false
    }
  },
  authLogo: {
    display: null,
    submit: {
      rawFile: null,
      isReset: false
    }
  }
};
const CustomizationInfos_reducer_reducer = (state = CustomizationInfos_reducer_initialState, action) => (0,immer_esm/* default */.ZP)(state, (draftState) => {
  switch (action.type) {
    case "SET_CUSTOM_MENU_LOGO": {
      draftState.menuLogo.display = action.value;
      draftState.menuLogo.submit.rawFile = action.value.rawFile;
      break;
    }
    case "SET_CUSTOM_AUTH_LOGO": {
      draftState.authLogo.display = action.value;
      draftState.authLogo.submit.rawFile = action.value.rawFile;
      break;
    }
    case "RESET_CUSTOM_MENU_LOGO": {
      draftState.menuLogo.display = null;
      draftState.menuLogo.submit = {
        rawFile: null,
        isReset: true
      };
      break;
    }
    case "RESET_CUSTOM_AUTH_LOGO": {
      draftState.authLogo.display = null;
      draftState.authLogo.submit = {
        rawFile: null,
        isReset: true
      };
      break;
    }
    default: {
      return draftState;
    }
  }
});
/* harmony default export */ const CustomizationInfos_reducer = (CustomizationInfos_reducer_reducer);


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/components/CustomizationInfos/index.js










const CustomizationInfos = (0,react.forwardRef)(({ canUpdate, projectSettingsStored }, ref) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const {
    logos: { menu, auth }
  } = (0,hooks/* useConfigurations */.um)();
  const [{ menuLogo, authLogo }, dispatch] = (0,react.useReducer)(
    CustomizationInfos_reducer,
    CustomizationInfos_reducer_initialState,
    () => CustomizationInfos_init(CustomizationInfos_reducer_initialState, projectSettingsStored)
  );
  const handleChangeMenuLogo = (asset) => {
    dispatch({
      type: "SET_CUSTOM_MENU_LOGO",
      value: asset
    });
  };
  const handleResetMenuLogo = () => {
    trackUsage("didClickResetLogo", {
      logo: "menu"
    });
    dispatch({
      type: "RESET_CUSTOM_MENU_LOGO"
    });
  };
  const handleChangeAuthLogo = (asset) => {
    dispatch({
      type: "SET_CUSTOM_AUTH_LOGO",
      value: asset
    });
  };
  const handleResetAuthLogo = () => {
    trackUsage("didClickResetLogo", {
      logo: "auth"
    });
    dispatch({
      type: "RESET_CUSTOM_AUTH_LOGO"
    });
  };
  (0,react.useImperativeHandle)(ref, () => ({
    getValues: () => ({ menuLogo: menuLogo.submit, authLogo: authLogo.submit })
  }));
  return /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      hasRadius: true,
      background: "neutral0",
      shadow: "tableShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingRight: 7,
      paddingLeft: 7
    },
    /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h3" }, formatMessage({
      id: "Settings.application.customization",
      defaultMessage: "Customization"
    })),
    /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600" }, formatMessage(
      {
        id: "Settings.application.customization.size-details",
        defaultMessage: "Max dimension: {dimension}\xD7{dimension}, Max file size: {size}KB"
      },
      { dimension: DIMENSION, size: SIZE }
    )),
    /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { paddingTop: 4, gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
      components_LogoInput,
      {
        canUpdate,
        customLogo: menuLogo.display,
        defaultLogo: menu.default,
        hint: formatMessage({
          id: "Settings.application.customization.menu-logo.carousel-hint",
          defaultMessage: "Replace the logo in the main navigation"
        }),
        label: formatMessage({
          id: "Settings.application.customization.carousel.menu-logo.title",
          defaultMessage: "Menu logo"
        }),
        onChangeLogo: handleChangeMenuLogo,
        onResetLogo: handleResetMenuLogo
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
      components_LogoInput,
      {
        canUpdate,
        customLogo: authLogo.display,
        defaultLogo: auth.default,
        hint: formatMessage({
          id: "Settings.application.customization.auth-logo.carousel-hint",
          defaultMessage: "Replace the logo in the authentication pages"
        }),
        label: formatMessage({
          id: "Settings.application.customization.carousel.auth-logo.title",
          defaultMessage: "Auth logo"
        }),
        onChangeLogo: handleChangeAuthLogo,
        onResetLogo: handleResetAuthLogo
      }
    )))
  );
});
CustomizationInfos.defaultProps = {
  canUpdate: false,
  projectSettingsStored: null
};
CustomizationInfos.propTypes = {
  canUpdate: (prop_types_default()).bool,
  projectSettingsStored: prop_types_default().shape({
    menuLogo: prop_types_default().shape({
      url: (prop_types_default()).string,
      name: (prop_types_default()).string
    })
  })
};
/* harmony default export */ const components_CustomizationInfos = (CustomizationInfos);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/utils/getFormData.js
const getFormData = (data) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (value && value.rawFile instanceof File) {
      formData.append(key, value.rawFile);
    }
    if (value && value.isReset) {
      formData.append(key, null);
    }
  });
  return formData;
};
/* harmony default export */ const utils_getFormData = (getFormData);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/index.js












const AdminSeatInfoCE = () => null;
const ApplicationInfosPage = () => {
  const inputsRef = react.useRef();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { get, post } = (0,dist/* useFetchClient */.kY)();
  const { updateProjectSettings } = (0,hooks/* useConfigurations */.um)();
  const permissions = (0,react_redux_es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  const { formatAPIError } = (0,dist/* useAPIErrorHandler */.So)();
  const {
    communityEdition,
    latestStrapiReleaseTag,
    nodeVersion,
    shouldUpdateStrapi,
    strapiVersion
  } = (0,dist/* useAppInfo */.L7)();
  const AdminSeatInfo = (0,useEnterprise/* useEnterprise */.c)(
    AdminSeatInfoCE,
    async () => (await __webpack_require__.e(/* import() */ 5013).then(__webpack_require__.bind(__webpack_require__, 65013))).AdminSeatInfoEE
  );
  const {
    allowedActions: { canRead, canUpdate }
  } = (0,dist/* useRBAC */.ss)(permissions.settings["project-settings"]);
  (0,dist/* useFocusWhenNavigate */.go)();
  const { data, isLoading } = (0,es.useQuery)(
    ["project-settings"],
    async () => {
      const { data: data2 } = await get("/admin/project-settings");
      return data2;
    },
    {
      cacheTime: 0,
      enabled: canRead,
      select(data2) {
        return {
          ...data2,
          authLogo: data2.authLogo ? {
            ...data2.authLogo,
            url: (0,dist/* prefixFileUrlWithBackendUrl */.CR)(data2.authLogo.url)
          } : data2.authLogo,
          menuLogo: data2.menuLogo ? {
            ...data2.menuLogo,
            url: (0,dist/* prefixFileUrlWithBackendUrl */.CR)(data2.menuLogo.url)
          } : data2.menuLogo
        };
      }
    }
  );
  const submitMutation = (0,es.useMutation)(
    (body) => post("/admin/project-settings", body, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }),
    {
      onError(error) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(error)
        });
      },
      async onSuccess(data2) {
        const { menuLogo, authLogo } = data2;
        updateProjectSettings({ menuLogo: menuLogo?.url, authLogo: authLogo?.url });
        if (menuLogo?.rawFile) {
          trackUsage("didChangeLogo", {
            logo: "menu"
          });
        }
        if (authLogo?.rawFile) {
          trackUsage("didChangeLogo", {
            logo: "auth"
          });
        }
        toggleNotification({
          type: "success",
          message: formatMessage({ id: "app", defaultMessage: "Saved" })
        });
      }
    }
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    submitMutation.mutate(utils_getFormData(inputsRef.current.getValues()));
  };
  if (!AdminSeatInfo) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(dist/* SettingsPageTitle */.SL, { name: "Application" }), /* @__PURE__ */ react.createElement(Main/* Main */.o, null, isLoading ? /* @__PURE__ */ react.createElement(Loader/* Loader */.a, null, formatMessage({
    id: "Settings.application.isLoading",
    defaultMessage: "Loading"
  })) : /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({
        id: "Settings.application.title",
        defaultMessage: "Overview"
      }),
      subtitle: formatMessage({
        id: "Settings.application.description",
        defaultMessage: "Administration panel\u2019s global information"
      }),
      primaryAction: canUpdate && /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit", startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null) }, formatMessage({ id: "global.save", defaultMessage: "Save" }))
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 6 }, /* @__PURE__ */ react.createElement(
    Flex/* Flex */.k,
    {
      direction: "column",
      alignItems: "stretch",
      gap: 4,
      hasRadius: true,
      background: "neutral0",
      shadow: "tableShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingRight: 7,
      paddingLeft: 7
    },
    /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h3" }, formatMessage({
      id: "global.details",
      defaultMessage: "Details"
    })),
    /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 5, as: "dl" }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600", as: "dt" }, formatMessage({
      id: "Settings.application.strapiVersion",
      defaultMessage: "strapi version"
    })), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 3, direction: "column", alignItems: "start", as: "dd" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, "v", strapiVersion), shouldUpdateStrapi && /* @__PURE__ */ react.createElement(
      Link/* Link */.r,
      {
        href: `https://github.com/strapi/strapi/releases/tag/${latestStrapiReleaseTag}`,
        isExternal: true,
        endIcon: /* @__PURE__ */ react.createElement(ExternalLink/* default */.Z, null)
      },
      formatMessage({
        id: "Settings.application.link-upgrade",
        defaultMessage: "Upgrade your admin panel"
      })
    ))), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600", as: "dt" }, formatMessage({
      id: "Settings.application.edition-title",
      defaultMessage: "current plan"
    })), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 3, direction: "column", alignItems: "start", as: "dd" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage(
      {
        id: "Settings.application.ee-or-ce",
        defaultMessage: "{communityEdition, select, true {Community Edition} other {Enterprise Edition}}"
      },
      { communityEdition }
    )), /* @__PURE__ */ react.createElement(
      Link/* Link */.r,
      {
        href: "https://strapi.io/pricing-self-hosted",
        isExternal: true,
        endIcon: /* @__PURE__ */ react.createElement(ExternalLink/* default */.Z, null)
      },
      formatMessage({
        id: "Settings.application.link-pricing",
        defaultMessage: "See all pricing plans"
      })
    ))), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600", as: "dt" }, formatMessage({
      id: "Settings.application.node-version",
      defaultMessage: "node version"
    })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "dd" }, nodeVersion)), /* @__PURE__ */ react.createElement(AdminSeatInfo, null))
  ), canRead && data && /* @__PURE__ */ react.createElement(
    components_CustomizationInfos,
    {
      canUpdate,
      ref: inputsRef,
      projectSettingsStored: data
    }
  ))))));
};
/* harmony default export */ const pages_ApplicationInfosPage = (ApplicationInfosPage);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/index.js













function SettingsPage() {
  const { settingId } = (0,react_router/* useParams */.UO)();
  const { settings } = (0,dist/* useStrapiApp */.j1)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { isLoading, menu } = (0,hooks/* useSettingsMenu */.Te)();
  const routes = (0,useEnterprise/* useEnterprise */.c)(
    ROUTES_CE,
    async () => (await __webpack_require__.e(/* import() */ 1470).then(__webpack_require__.bind(__webpack_require__, 51470))).ROUTES_EE,
    {
      combine(ceRoutes, eeRoutes) {
        return [...ceRoutes, ...eeRoutes];
      },
      defaultValue: []
    }
  );
  const adminRoutes = react.useMemo(() => {
    return (0,makeUniqueRoutes/* default */.Z)(
      routes.map(({ to, Component, exact }) => (0,createRoute/* default */.Z)(Component, to, exact))
    );
  }, [routes]);
  const pluginsRoutes = Object.values(settings).flatMap((section) => {
    const { links } = section;
    return links.map((link) => (0,createRoute/* default */.Z)(link.Component, link.to, link.exact || false));
  });
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null);
  }
  if (!settingId) {
    return /* @__PURE__ */ react.createElement(react_router/* Redirect */.l_, { to: "/settings/application-infos" });
  }
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, { sideNav: /* @__PURE__ */ react.createElement(components_SettingsNav, { menu }) }, /* @__PURE__ */ react.createElement(
    Helmet/* Helmet */.q,
    {
      title: formatMessage({
        id: "global.settings",
        defaultMessage: "Settings"
      })
    }
  ), /* @__PURE__ */ react.createElement(react_router/* Switch */.rs, null, /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: "/settings/application-infos", component: pages_ApplicationInfosPage, exact: true }), adminRoutes, pluginsRoutes));
}


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

/***/ 68412:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ 71877:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ SubNav)
/* harmony export */ });
/* unused harmony export subNavWidth */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37652);
/* harmony import */ var _Grid_Grid_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23298);



const subNavWidth = `${232 / 16}rem`;
const SubNavWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)((0,_Grid_Grid_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Grid */ .r))`
  width: ${subNavWidth};
  background: ${({ theme }) => theme.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({ theme }) => theme.colors.neutral200};
  z-index: 1;
`;
const SubNav = ({ ariaLabel, ...props }) => {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SubNavWrapper, { "aria-label": ariaLabel, as: "nav", ...props });
};



/***/ }),

/***/ 17912:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  p: () => (/* binding */ SubNavHeader)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74081);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Search.mjs
var Search = __webpack_require__(10382);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(37652);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/keyboardKeys.mjs
var keyboardKeys = __webpack_require__(89166);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/hooks/useId.mjs
var useId = __webpack_require__(74513);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/usePrevious.mjs

const usePrevious = (value) => {
  const ref = (0,react.useRef)();
  (0,react.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.mjs
var Divider = __webpack_require__(84366);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(93415);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Searchbar/SearchForm.mjs
var SearchForm = __webpack_require__(28479);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Searchbar/Searchbar.mjs
var Searchbar = __webpack_require__(31624);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(4987);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavHeader.mjs














const CustomDivider = (0,styled_components_browser_esm/* default */.ZP)((0,Divider/* Divider */.i))`
  width: ${24 / 16}rem;
  background-color: ${({ theme }) => theme.colors.neutral200};
`;
const SubNavHeader = ({ as = "h2", label, searchLabel = "", searchable = false, onChange = () => {
}, value = "", onClear = () => {
}, onSubmit = () => {
}, id }) => {
  const [isSearchOpen, setSearchOpen] = (0,react.useState)(false);
  const previousSearchOpenValue = usePrevious(isSearchOpen);
  const clearButtonId = (0,useId/* useId */.M)(id);
  const searchRef = (0,react.useRef)(void 0);
  const searchButtonRef = (0,react.useRef)(void 0);
  (0,react.useEffect)(() => {
    if (isSearchOpen && searchRef.current) {
      searchRef.current.focus();
    }
    if (previousSearchOpenValue && !isSearchOpen && searchButtonRef.current) {
      searchButtonRef.current.focus();
    }
  }, [isSearchOpen, previousSearchOpenValue]);
  const toggleSearch = () => {
    setSearchOpen((isOpen) => !isOpen);
  };
  const handleClear = (e) => {
    onClear(e);
    searchRef.current.focus();
  };
  const handleBlur = (e) => {
    if (e.relatedTarget?.id !== clearButtonId) {
      setSearchOpen(false);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === keyboardKeys/* KeyboardKeys */.y.ESCAPE) {
      setSearchOpen(false);
    }
  };
  if (isSearchOpen) {
    return (0,jsx_runtime.jsxs)(Box/* Box */.x, { paddingLeft: 4, paddingTop: 5, paddingBottom: 2, paddingRight: 4, children: [(0,jsx_runtime.jsx)(SearchForm/* SearchForm */.U, { children: (0,jsx_runtime.jsx)(Searchbar/* Searchbar */.w, { name: "searchbar", value, onChange, placeholder: "e.g: strapi-plugin-abcd", onKeyDown: handleKeyDown, ref: searchRef, onBlur: handleBlur, onClear: handleClear, onSubmit, clearLabel: "Clear", size: "S", children: searchLabel }) }), (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 2, paddingTop: 4, children: (0,jsx_runtime.jsx)(CustomDivider, {}) })] });
  }
  return (0,jsx_runtime.jsxs)(Box/* Box */.x, { paddingLeft: 6, paddingTop: 6, paddingBottom: 2, paddingRight: 4, children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", alignItems: "flex-start", children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "beta", as, children: label }), searchable && (0,jsx_runtime.jsx)(IconButton/* IconButton */.h, { ref: searchButtonRef, onClick: toggleSearch, label: searchLabel, icon: (0,jsx_runtime.jsx)(Search/* default */.Z, {}) })] }), (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingTop: 4, children: (0,jsx_runtime.jsx)(CustomDivider, {}) })] });
};



/***/ }),

/***/ 49370:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ SubNavLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27279);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79830);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37652);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93415);
/* harmony import */ var _Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32370);
/* harmony import */ var _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10701);
/* harmony import */ var _BaseLink_BaseLink_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30413);








const SubNavLinkWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.neutral800};
  svg > * {
    fill: ${({ theme }) => theme.colors.neutral600};
  }

  &.active {
    ${({ theme }) => {
  return `
      background-color: ${theme.colors.primary100};
      border-right: 2px solid ${theme.colors.primary600};
      svg > * {
        fill: ${theme.colors.primary700};
      }
      ${_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z} {
        color: ${theme.colors.primary700};
        font-weight: 500;
      }
      `;
}}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`;
const CustomBullet = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_strapi_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z))`
  width: ${12 / 16}rem;
  height: ${4 / 16}rem;
  * {
    fill: ${({ theme, $active }) => $active ? theme.colors.primary600 : theme.colors.neutral600};
  }
`;
const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.div`
  svg {
    height: ${12 / 16}rem;
    width: ${12 / 16}rem;
  }
`;
const SubNavLink = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ children, icon = null, withBullet = false, as = _BaseLink_BaseLink_mjs__WEBPACK_IMPORTED_MODULE_6__/* .BaseLink */ .f, isSubSectionChild = false, ...props }, ref) => {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SubNavLinkWrapper, { as, icon, background: "neutral100", paddingLeft: isSubSectionChild ? 9 : 7, paddingBottom: 2, paddingTop: 2, ref, ...props, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .k, { children: [icon ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconWrapper, { children: icon }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomBullet, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, { paddingLeft: 2, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, { as: "span", children }) })] }), withBullet && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, { as: _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .k, paddingRight: 4, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomBullet, { "$active": true }) })] });
});



/***/ }),

/***/ 20534:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ SubNavSection)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74081);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(37652);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.mjs
var CarretDown = __webpack_require__(10411);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(93415);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSectionLabel.mjs






const SubNavSectionLabelWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Flex/* Flex */.k))`
  border: none;
  padding: 0;
  background: transparent;
`;
const DropDownIconWrapper = styled_components_browser_esm/* default */.ZP.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({ rotated }) => rotated ? "0deg" : "180deg"});
`;
const SubNavSectionLabel = ({ collapsable = false, label, onClick = () => {
}, ariaExpanded, ariaControls }) => {
  if (collapsable) {
    return (0,jsx_runtime.jsxs)(SubNavSectionLabelWrapper, { as: "button", onClick, "aria-expanded": ariaExpanded, "aria-controls": ariaControls, textAlign: "left", children: [(0,jsx_runtime.jsx)(Box/* Box */.x, { paddingRight: 1, children: (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600", children: label }) }), collapsable && (0,jsx_runtime.jsx)(DropDownIconWrapper, { rotated: ariaExpanded, children: (0,jsx_runtime.jsx)(CarretDown/* default */.Z, { "aria-hidden": true }) })] });
  }
  return (0,jsx_runtime.jsx)(SubNavSectionLabelWrapper, { children: (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingRight: 1, children: (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600", children: label }) }) });
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/hooks/useId.mjs
var useId = __webpack_require__(74513);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Badge/Badge.mjs
var Badge = __webpack_require__(4963);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSection.mjs








const SubNavSectionWrapper = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  svg {
    height: ${4 / 16}rem;
    path {
      fill: ${({ theme }) => theme.colors.neutral500};
    }
  }
`;
const SubNavSection = ({ collapsable = false, label, badgeLabel, children, id }) => {
  const [isOpen, setOpenLinks] = (0,react.useState)(true);
  const listId = (0,useId/* useId */.M)(id);
  const handleClick = () => {
    setOpenLinks((prev) => !prev);
  };
  return (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 1, children: [(0,jsx_runtime.jsx)(SubNavSectionWrapper, { paddingLeft: 6, paddingTop: 2, paddingBottom: 2, paddingRight: 4, children: (0,jsx_runtime.jsxs)(Box/* Box */.x, { position: "relative", paddingRight: badgeLabel ? 6 : 0, children: [(0,jsx_runtime.jsx)(SubNavSectionLabel, { onClick: handleClick, ariaExpanded: isOpen, ariaControls: listId, collapsable, label }), badgeLabel && (0,jsx_runtime.jsx)(Badge/* Badge */.C, { backgroundColor: "neutral150", textColor: "neutral600", position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", children: badgeLabel })] }) }), (!collapsable || isOpen) && (0,jsx_runtime.jsx)("ol", { id: listId, children: react.Children.map(children, (child, index) => {
    return (0,jsx_runtime.jsx)("li", { children: child }, index);
  }) })] });
};



/***/ }),

/***/ 96220:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SubNavSections)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27279);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93415);
/* harmony import */ var _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10701);




const SubNavSections = ({ children, spacing = 2, horizontal = false, ...props }) => {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, { paddingTop: 2, paddingBottom: 4, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .k, { as: "ol", gap: spacing, direction: horizontal ? "row" : "column", alignItems: horizontal ? "center" : "stretch", ...props, children: react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child, index) => {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: child }, index);
  }) }) });
};



/***/ }),

/***/ 79830:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);

const o = (e) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 4 4", ...e, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", { width: 4, height: 4, fill: "#A5A5BA", rx: 2 }) }), r = o;



/***/ })

}]);