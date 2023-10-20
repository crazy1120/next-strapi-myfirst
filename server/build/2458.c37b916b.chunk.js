(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[2458],{

/***/ 3414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Tokens_FormHead)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(27875);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48102);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(59082);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.mjs
var ArrowLeft = __webpack_require__(76827);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70627);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Refresh.mjs
var Refresh = __webpack_require__(84352);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(53532);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/hooks/useRegenerate.ts



const useRegenerate = (url, id, onRegenerate, onError) => {
  const [isLoadingConfirmation, setIsLoadingConfirmation] = (0,react.useState)(false);
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { post } = (0,dist/* useFetchClient */.kY)();
  const { formatAPIError } = (0,dist/* useAPIErrorHandler */.So)();
  const regenerateData = async () => {
    try {
      const {
        data: {
          data: { accessKey }
        }
      } = await post(`${url}${id}/regenerate`);
      setIsLoadingConfirmation(false);
      onRegenerate(accessKey);
    } catch (error) {
      setIsLoadingConfirmation(false);
      if (onError) {
        onError(error);
      } else {
        if (error instanceof axios/* AxiosError */.d7) {
          toggleNotification({
            type: "warning",
            message: formatAPIError(error)
          });
        }
      }
    }
  };
  return {
    regenerateData,
    isLoadingConfirmation
  };
};

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/Regenerate/index.js







const Regenerate = ({ onRegenerate, idToRegenerate, backUrl, onError }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [showConfirmDialog, setShowConfirmDialog] = (0,react.useState)(false);
  const { regenerateData, isLoadingConfirmation } = useRegenerate(
    backUrl,
    idToRegenerate,
    onRegenerate,
    onError
  );
  const handleConfirmRegeneration = async () => {
    regenerateData();
    setShowConfirmDialog(false);
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Button/* Button */.z,
    {
      startIcon: /* @__PURE__ */ react.createElement(Refresh/* default */.Z, null),
      type: "button",
      size: "S",
      variant: "tertiary",
      onClick: () => setShowConfirmDialog(true),
      name: "regenerate"
    },
    formatMessage({
      id: "Settings.tokens.regenerate",
      defaultMessage: "Regenerate"
    })
  ), /* @__PURE__ */ react.createElement(
    dist/* ConfirmDialog */.QH,
    {
      bodyText: {
        id: "Settings.tokens.popUpWarning.message",
        defaultMessage: "Are you sure you want to regenerate this token?"
      },
      iconRightButton: /* @__PURE__ */ react.createElement(Refresh/* default */.Z, null),
      isConfirmButtonLoading: isLoadingConfirmation,
      isOpen: showConfirmDialog,
      onToggleDialog: () => setShowConfirmDialog(false),
      onConfirm: handleConfirmRegeneration,
      leftButtonText: {
        id: "Settings.tokens.Button.cancel",
        defaultMessage: "Cancel"
      },
      rightButtonText: {
        id: "Settings.tokens.Button.regenerate",
        defaultMessage: "Regenerate"
      },
      title: {
        id: "Settings.tokens.RegenerateDialog.title",
        defaultMessage: "Regenerate token"
      }
    }
  ));
};
Regenerate.defaultProps = { onRegenerate() {
}, onError: void 0 };
Regenerate.propTypes = {
  onRegenerate: (prop_types_default()).func,
  idToRegenerate: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]).isRequired,
  backUrl: (prop_types_default()).string.isRequired,
  onError: (prop_types_default()).func
};
/* harmony default export */ const Tokens_Regenerate = (Regenerate);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/FormHead/index.js







const FormHead = ({
  title,
  token,
  setToken,
  canEditInputs,
  canRegenerate,
  isSubmitting,
  backUrl,
  regenerateUrl,
  onErrorRegenerate
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const handleRegenerate = (newKey) => {
    setToken({
      ...token,
      accessKey: newKey
    });
  };
  return /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: token?.name || formatMessage(title),
      primaryAction: canEditInputs ? /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2 }, canRegenerate && token?.id && /* @__PURE__ */ react.createElement(
        Tokens_Regenerate,
        {
          backUrl: regenerateUrl,
          onRegenerate: handleRegenerate,
          idToRegenerate: token?.id,
          onError: onErrorRegenerate
        }
      ), /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          disabled: isSubmitting,
          loading: isSubmitting,
          startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
          type: "submit",
          size: "S"
        },
        formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        })
      )) : canRegenerate && token?.id && /* @__PURE__ */ react.createElement(
        Tokens_Regenerate,
        {
          onRegenerate: handleRegenerate,
          idToRegenerate: token?.id,
          backUrl: regenerateUrl
        }
      ),
      navigationAction: /* @__PURE__ */ react.createElement(dist/* Link */.rU, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null), to: backUrl }, formatMessage({
        id: "global.back",
        defaultMessage: "Back"
      })),
      ellipsis: true
    }
  );
};
FormHead.propTypes = {
  token: prop_types_default().shape({
    id: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    type: (prop_types_default()).string,
    lifespan: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    name: (prop_types_default()).string,
    accessKey: (prop_types_default()).string,
    permissions: (prop_types_default()).array,
    description: (prop_types_default()).string,
    createdAt: (prop_types_default()).string
  }),
  canEditInputs: (prop_types_default()).bool.isRequired,
  canRegenerate: (prop_types_default()).bool.isRequired,
  setToken: (prop_types_default()).func.isRequired,
  isSubmitting: (prop_types_default()).bool.isRequired,
  backUrl: (prop_types_default()).string.isRequired,
  title: prop_types_default().shape({
    id: (prop_types_default()).string,
    label: (prop_types_default()).string
  }).isRequired,
  regenerateUrl: (prop_types_default()).string.isRequired,
  onErrorRegenerate: (prop_types_default()).func
};
FormHead.defaultProps = {
  token: void 0,
  onErrorRegenerate: void 0
};
/* harmony default export */ const Tokens_FormHead = (FormHead);


/***/ }),

/***/ 89982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5627);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78955);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32370);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70627);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61020);
/* harmony import */ var _pages_ApiTokens_EditView_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51352);





const LifeSpanInput = ({ token, errors, values, onChange, isCreating }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Select */ .P,
    {
      name: "lifespan",
      label: formatMessage({
        id: "Settings.tokens.form.duration",
        defaultMessage: "Token duration"
      }),
      value: values.lifespan !== null ? values.lifespan : "0",
      error: errors.lifespan ? formatMessage(
        errors.lifespan?.id ? errors.lifespan : { id: errors.lifespan, defaultMessage: errors.lifespan }
      ) : null,
      onChange: (value) => {
        onChange({ target: { name: "lifespan", value } });
      },
      required: true,
      disabled: !isCreating,
      placeholder: "Select"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Option */ .W, { value: "604800000" }, formatMessage({
      id: "Settings.tokens.duration.7-days",
      defaultMessage: "7 days"
    })),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Option */ .W, { value: "2592000000" }, formatMessage({
      id: "Settings.tokens.duration.30-days",
      defaultMessage: "30 days"
    })),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Option */ .W, { value: "7776000000" }, formatMessage({
      id: "Settings.tokens.duration.90-days",
      defaultMessage: "90 days"
    })),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Option */ .W, { value: "0" }, formatMessage({
      id: "Settings.tokens.duration.unlimited",
      defaultMessage: "Unlimited"
    }))
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, { variant: "pi", textColor: "neutral600" }, !isCreating && `${formatMessage({
    id: "Settings.tokens.duration.expiration-date",
    defaultMessage: "Expiration date"
  })}: ${(0,_pages_ApiTokens_EditView_utils__WEBPACK_IMPORTED_MODULE_1__/* .getDateOfExpiration */ .IX)(token?.createdAt, parseInt(values.lifespan, 10))}`));
};
LifeSpanInput.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
    lifespan: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
  }),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func).isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
    lifespan: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)])
  }).isRequired,
  isCreating: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool).isRequired,
  token: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)]),
    type: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    lifespan: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    accessKey: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    permissions: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().array),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    createdAt: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
  })
};
LifeSpanInput.defaultProps = {
  errors: {},
  token: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LifeSpanInput);


/***/ }),

/***/ 81384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4987);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24201);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78031);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5368);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70627);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61020);






const TokenBox = ({ token, tokenType }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useNotification */ .lm)();
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useTracking */ .rS)();
  const { copy } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useClipboard */ .VP)();
  const handleClick = (token2) => async () => {
    const didCopy = await copy(token2);
    if (didCopy) {
      trackUsage("didCopyTokenKey", {
        tokenType
      });
      toggleNotification({
        type: "success",
        message: { id: "Settings.tokens.notification.copied" }
      });
    }
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .ContentBox */ .Y_,
    {
      endAction: token && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { alignSelf: "start" } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .IconButton */ .h,
        {
          label: formatMessage({
            id: "app.component.CopyToClipboard.label",
            defaultMessage: "Copy to clipboard"
          }),
          onClick: handleClick(token),
          noBorder: true,
          icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, null),
          style: { padding: 0, height: "1rem" }
        }
      )),
      title: token || formatMessage({
        id: "Settings.tokens.copy.editTitle",
        defaultMessage: "This token isn\u2019t accessible anymore."
      }),
      subtitle: token ? formatMessage({
        id: "Settings.tokens.copy.lastWarning",
        defaultMessage: "Make sure to copy this token, you won\u2019t be able to see it again!"
      }) : formatMessage({
        id: "Settings.tokens.copy.editMessage",
        defaultMessage: "For security reasons, you can only see your token once."
      }),
      icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, null),
      iconBackground: "neutral100"
    }
  );
};
TokenBox.defaultProps = {
  token: null
};
TokenBox.propTypes = {
  token: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  tokenType: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenBox);


/***/ }),

/***/ 37651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39708);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70627);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61020);




const TokenDescription = ({ errors, values, onChange, canEditInputs }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Textarea */ .g,
    {
      label: formatMessage({
        id: "Settings.tokens.form.description",
        defaultMessage: "Description"
      }),
      id: "description",
      error: errors.description ? formatMessage(
        errors.description?.id ? errors.description : {
          id: errors.description,
          defaultMessage: errors.description
        }
      ) : null,
      onChange,
      disabled: !canEditInputs
    },
    values.description
  );
};
TokenDescription.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    description: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
  }),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  canEditInputs: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool).isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    description: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
  }).isRequired
};
TokenDescription.defaultProps = {
  errors: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenDescription);


/***/ }),

/***/ 72028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12881);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70627);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61020);




const TokenName = ({ errors, values, onChange, canEditInputs }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .TextInput */ .o,
    {
      name: "name",
      error: errors.name ? formatMessage(
        errors.name?.id ? errors.name : { id: errors.name, defaultMessage: errors.name }
      ) : null,
      label: formatMessage({
        id: "Settings.tokens.form.name",
        defaultMessage: "Name"
      }),
      onChange,
      value: values.name,
      disabled: !canEditInputs,
      required: true
    }
  );
};
TokenName.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
  }),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  canEditInputs: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool).isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
  }).isRequired
};
TokenName.defaultProps = {
  errors: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenName);


/***/ }),

/***/ 32381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5627);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78955);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70627);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61020);




const TokenTypeSelect = ({ name, errors, values, onChange, canEditInputs, options, label }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Select */ .P,
    {
      name,
      label: formatMessage({
        id: label.id,
        defaultMessage: label.defaultMessage
      }),
      value: values && values[name],
      error: errors[name] ? formatMessage(
        errors[name]?.id ? errors[name] : { id: errors[name], defaultMessage: errors[name] }
      ) : null,
      onChange,
      placeholder: "Select",
      required: true,
      disabled: !canEditInputs
    },
    options && options.map(({ value, label: label2 }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Option */ .W, { key: value, value }, formatMessage(label2)))
  );
};
TokenTypeSelect.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  options: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(
    prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
      label: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
        id: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
        defaultMessage: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
      }),
      value: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
    })
  ),
  errors: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    type: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
  }),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired,
  canEditInputs: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool).isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    type: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
  }).isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    defaultMessage: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
  }).isRequired
};
TokenTypeSelect.defaultProps = {
  name: "type",
  errors: {},
  options: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenTypeSelect);


/***/ }),

/***/ 81966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ API_TOKEN_TYPE),
/* harmony export */   f: () => (/* binding */ TRANSFER_TOKEN_TYPE)
/* harmony export */ });
const API_TOKEN_TYPE = "api-token";
const TRANSFER_TOKEN_TYPE = "transfer-token";


/***/ }),

/***/ 92458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ EditView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(73354);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(74758);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(71563);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(40464);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var react_redux_es = __webpack_require__(49402);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(51447);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70627);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./.cache/admin/src/contexts/ApiTokenPermissions/index.js


const ApiTokenPermissionsContext = (0,react.createContext)({});
const ApiTokenPermissionsContextProvider = ({ children, ...rest }) => {
  return /* @__PURE__ */ react.createElement(ApiTokenPermissionsContext.Provider, { value: rest }, children);
};
const useApiTokenPermissionsContext = () => (0,react.useContext)(ApiTokenPermissionsContext);
ApiTokenPermissionsContextProvider.propTypes = {
  children: (prop_types_default()).node.isRequired
};


// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 4 modules
var utils = __webpack_require__(96854);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/selectors.js
var selectors = __webpack_require__(36364);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/constants.js
var constants = __webpack_require__(81966);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/FormHead/index.js + 2 modules
var FormHead = __webpack_require__(3414);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/TokenBox/index.js
var TokenBox = __webpack_require__(81384);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(93415);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(23298);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(74577);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/LifeSpanInput/index.js
var LifeSpanInput = __webpack_require__(89982);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/TokenDescription/index.js
var TokenDescription = __webpack_require__(37651);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/TokenName/index.js
var TokenName = __webpack_require__(72028);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/TokenTypeSelect/index.js
var TokenTypeSelect = __webpack_require__(32381);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/FormApiTokenContainer/index.js








const FormApiTokenContainer = ({
  errors,
  onChange,
  canEditInputs,
  isCreating,
  values,
  apiToken,
  onDispatch,
  setHasChangedPermissions
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const handleChangeSelectApiTokenType = ({ target: { value } }) => {
    setHasChangedPermissions(false);
    if (value === "full-access") {
      onDispatch({
        type: "SELECT_ALL_ACTIONS"
      });
    }
    if (value === "read-only") {
      onDispatch({
        type: "ON_CHANGE_READ_ONLY"
      });
    }
  };
  const typeOptions = [
    {
      value: "read-only",
      label: {
        id: "Settings.tokens.types.read-only",
        defaultMessage: "Read-only"
      }
    },
    {
      value: "full-access",
      label: {
        id: "Settings.tokens.types.full-access",
        defaultMessage: "Full access"
      }
    },
    {
      value: "custom",
      label: {
        id: "Settings.tokens.types.custom",
        defaultMessage: "Custom"
      }
    }
  ];
  return /* @__PURE__ */ react.createElement(
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
      id: "global.details",
      defaultMessage: "Details"
    })), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 5 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { key: "name", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      TokenName/* default */.Z,
      {
        errors,
        values,
        canEditInputs,
        onChange
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { key: "description", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      TokenDescription/* default */.Z,
      {
        errors,
        values,
        canEditInputs,
        onChange
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { key: "lifespan", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      LifeSpanInput/* default */.Z,
      {
        isCreating,
        errors,
        values,
        onChange,
        token: apiToken
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { key: "type", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      TokenTypeSelect/* default */.Z,
      {
        values,
        errors,
        label: {
          id: "Settings.tokens.form.type",
          defaultMessage: "Token type"
        },
        onChange: (value) => {
          handleChangeSelectApiTokenType({ target: { value } });
          onChange({ target: { name: "type", value } });
        },
        options: typeOptions,
        canEditInputs
      }
    ))))
  );
};
FormApiTokenContainer.propTypes = {
  errors: prop_types_default().shape({
    name: (prop_types_default()).string,
    description: (prop_types_default()).string,
    lifespan: (prop_types_default()).string,
    type: (prop_types_default()).string
  }),
  onChange: (prop_types_default()).func.isRequired,
  canEditInputs: (prop_types_default()).bool.isRequired,
  values: prop_types_default().shape({
    name: (prop_types_default()).string,
    description: (prop_types_default()).string,
    lifespan: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    type: (prop_types_default()).string
  }).isRequired,
  isCreating: (prop_types_default()).bool.isRequired,
  apiToken: prop_types_default().shape({
    id: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    type: (prop_types_default()).string,
    lifespan: (prop_types_default()).string,
    name: (prop_types_default()).string,
    accessKey: (prop_types_default()).string,
    permissions: (prop_types_default()).array,
    description: (prop_types_default()).string,
    createdAt: (prop_types_default()).string
  }),
  onDispatch: (prop_types_default()).func.isRequired,
  setHasChangedPermissions: (prop_types_default()).func.isRequired
};
FormApiTokenContainer.defaultProps = {
  errors: {},
  apiToken: {}
};
/* harmony default export */ const components_FormApiTokenContainer = (FormApiTokenContainer);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(27875);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48102);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(59082);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/LoadingView/index.js






const LoadingView = ({ apiTokenName }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  (0,dist/* useFocusWhenNavigate */.go)();
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": "true" }, /* @__PURE__ */ react.createElement(dist/* SettingsPageTitle */.SL, { name: "API Tokens" }), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      primaryAction: /* @__PURE__ */ react.createElement(Button/* Button */.z, { disabled: true, startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null), type: "button", size: "L" }, formatMessage({ id: "global.save", defaultMessage: "Save" })),
      title: apiTokenName || formatMessage({
        id: "Settings.apiTokens.createPage.title",
        defaultMessage: "Create API Token"
      })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null)));
};
LoadingView.defaultProps = {
  apiTokenName: null
};
LoadingView.propTypes = {
  apiTokenName: (prop_types_default()).string
};
/* harmony default export */ const components_LoadingView = (LoadingView);

// EXTERNAL MODULE: ./node_modules/lodash/map.js
var map = __webpack_require__(58422);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ./node_modules/lodash/tail.js
var tail = __webpack_require__(34049);
var tail_default = /*#__PURE__*/__webpack_require__.n(tail);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(37652);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/BoundRoute/getMethodColor.js
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

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/BoundRoute/index.js








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
    id: "Settings.apiTokens.createPage.BoundRoute.title",
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

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/ActionBoundRoutes/index.js





const ActionBoundRoutes = () => {
  const {
    value: { selectedAction, routes }
  } = useApiTokenPermissionsContext();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const actionSection = selectedAction?.split(".")[0];
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
    selectedAction ? /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, routes[actionSection]?.map((route) => {
      return route.config.auth?.scope?.includes(selectedAction) || route.handler === selectedAction ? /* @__PURE__ */ react.createElement(components_BoundRoute, { key: route.handler, route }) : null;
    })) : /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h3" }, formatMessage({
      id: "Settings.apiTokens.createPage.permissions.header.title",
      defaultMessage: "Advanced settings"
    })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "p", textColor: "neutral600" }, formatMessage({
      id: "Settings.apiTokens.createPage.permissions.header.hint",
      defaultMessage: "Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"
    })))
  );
};
/* harmony default export */ const components_ActionBoundRoutes = (ActionBoundRoutes);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/Accordion.mjs
var Accordion = __webpack_require__(45322);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionToggle.mjs + 1 modules
var AccordionToggle = __webpack_require__(24920);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionContent.mjs
var AccordionContent = __webpack_require__(34642);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Checkbox/Checkbox.mjs
var Checkbox = __webpack_require__(22572);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cog.mjs
var Cog = __webpack_require__(35318);
// EXTERNAL MODULE: ./node_modules/lodash/capitalize.js
var capitalize = __webpack_require__(98344);
var capitalize_default = /*#__PURE__*/__webpack_require__.n(capitalize);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/CollapsableContentType/CheckBoxWrapper.js


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
/* harmony default export */ const CheckBoxWrapper = (CheckboxWrapper);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/CollapsableContentType/index.js









const Border = styled_components_browser_esm/* default */.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral150};
`;
const CollapsableContentType = ({
  controllers,
  label,
  orderNumber,
  disabled,
  onExpanded,
  indexExpandendCollapsedContent
}) => {
  const {
    value: { onChangeSelectAll, onChange, selectedActions, setSelectedAction, selectedAction }
  } = useApiTokenPermissionsContext();
  const [expanded, setExpanded] = (0,react.useState)(false);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const handleExpandedAccordion = () => {
    setExpanded((s) => !s);
    onExpanded(orderNumber);
  };
  (0,react.useEffect)(() => {
    if (indexExpandendCollapsedContent !== null && indexExpandendCollapsedContent !== orderNumber && expanded) {
      setExpanded(false);
    }
  }, [indexExpandendCollapsedContent, orderNumber, expanded]);
  const isActionSelected = (actionId) => actionId === selectedAction;
  return /* @__PURE__ */ react.createElement(
    Accordion/* Accordion */.U,
    {
      expanded,
      onToggle: handleExpandedAccordion,
      variant: orderNumber % 2 ? "primary" : "secondary"
    },
    /* @__PURE__ */ react.createElement(AccordionToggle/* AccordionToggle */.B, { title: capitalize_default()(label) }),
    /* @__PURE__ */ react.createElement(AccordionContent/* AccordionContent */.v, null, controllers?.map((controller) => {
      const allActionsSelected = controller.actions.every(
        (action) => selectedActions.includes(action.actionId)
      );
      const someActionsSelected = controller.actions.some(
        (action) => selectedActions.includes(action.actionId)
      );
      return /* @__PURE__ */ react.createElement(Box/* Box */.x, { key: `${label}.${controller?.controller}` }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between", alignItems: "center", padding: 4 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, controller?.controller)), /* @__PURE__ */ react.createElement(Border, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 4 }, /* @__PURE__ */ react.createElement(
        Checkbox/* Checkbox */.X,
        {
          value: allActionsSelected,
          indeterminate: !allActionsSelected && someActionsSelected,
          onValueChange: () => {
            onChangeSelectAll({ target: { value: [...controller.actions] } });
          },
          disabled
        },
        formatMessage({ id: "app.utils.select-all", defaultMessage: "Select all" })
      ))), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4, padding: 4 }, controller?.actions && controller?.actions.map((action) => {
        return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, key: action.actionId }, /* @__PURE__ */ react.createElement(
          CheckBoxWrapper,
          {
            isActive: isActionSelected(action.actionId),
            padding: 2,
            hasRadius: true
          },
          /* @__PURE__ */ react.createElement(
            Checkbox/* Checkbox */.X,
            {
              value: selectedActions.includes(action.actionId),
              name: action.actionId,
              onValueChange: () => {
                onChange({ target: { value: action.actionId } });
              },
              disabled
            },
            action.action
          ),
          /* @__PURE__ */ react.createElement(
            "button",
            {
              type: "button",
              "data-testid": "action-cog",
              onClick: () => setSelectedAction({ target: { value: action.actionId } }),
              style: { display: "inline-flex", alignItems: "center" }
            },
            /* @__PURE__ */ react.createElement(Cog/* default */.Z, null)
          )
        ));
      })));
    }))
  );
};
CollapsableContentType.defaultProps = {
  controllers: [],
  orderNumber: 0,
  disabled: false,
  onExpanded: () => null,
  indexExpandendCollapsedContent: null
};
CollapsableContentType.propTypes = {
  controllers: (prop_types_default()).array,
  orderNumber: (prop_types_default()).number,
  label: (prop_types_default()).string.isRequired,
  disabled: (prop_types_default()).bool,
  onExpanded: (prop_types_default()).func,
  indexExpandendCollapsedContent: (prop_types_default()).number
};
/* harmony default export */ const components_CollapsableContentType = (CollapsableContentType);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/ContenTypesSection/index.js




const ContentTypesSection = ({ section, ...props }) => {
  const [indexExpandedCollpsedContent, setIndexExpandedCollpsedContent] = (0,react.useState)(null);
  const handleExpandedCollpsedContentIndex = (index) => setIndexExpandedCollpsedContent(index);
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 4, background: "neutral0" }, section && section.map((api, index) => /* @__PURE__ */ react.createElement(
    components_CollapsableContentType,
    {
      key: api.apiId,
      label: api.label,
      controllers: api.controllers,
      orderNumber: index,
      indexExpandendCollapsedContent: indexExpandedCollpsedContent,
      onExpanded: handleExpandedCollpsedContentIndex,
      name: api.apiId,
      ...props
    }
  )));
};
ContentTypesSection.defaultProps = {
  section: null
};
ContentTypesSection.propTypes = {
  section: prop_types_default().arrayOf((prop_types_default()).object)
};
/* harmony default export */ const ContenTypesSection = (ContentTypesSection);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/Permissions/index.js






const Permissions = ({ ...props }) => {
  const {
    value: { data }
  } = useApiTokenPermissionsContext();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 0, shadow: "filterShadow", hasRadius: true, background: "neutral0" }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 7, paddingTop: 6, paddingBottom: 6, paddingLeft: 7, paddingRight: 7 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
    id: "Settings.apiTokens.createPage.permissions.title",
    defaultMessage: "Permissions"
  })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "p", textColor: "neutral600" }, formatMessage({
    id: "Settings.apiTokens.createPage.permissions.description",
    defaultMessage: "Only actions bound by a route are listed below."
  }))), data?.permissions && /* @__PURE__ */ react.createElement(ContenTypesSection, { section: data?.permissions, ...props })), /* @__PURE__ */ react.createElement(components_ActionBoundRoutes, null));
};
/* harmony default export */ const components_Permissions = ((0,react.memo)(Permissions));

// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/index.js + 3 modules
var EditView_utils = __webpack_require__(51352);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/init.js

const init = (state, permissions = []) => {
  return {
    ...state,
    selectedAction: null,
    routes: [],
    selectedActions: [],
    data: (0,EditView_utils/* transformPermissionsData */.mk)(permissions)
  };
};
/* harmony default export */ const EditView_init = (init);

// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(61815);
// EXTERNAL MODULE: ./node_modules/lodash/pull.js
var pull = __webpack_require__(22009);
var pull_default = /*#__PURE__*/__webpack_require__.n(pull);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/reducer.js



const initialState = {
  data: {},
  selectedActions: []
};
const reducer = (state, action) => (0,immer_esm/* default */.ZP)(state, (draftState) => {
  switch (action.type) {
    case "ON_CHANGE": {
      if (draftState.selectedActions.includes(action.value)) {
        pull_default()(draftState.selectedActions, action.value);
      } else {
        draftState.selectedActions.push(action.value);
      }
      break;
    }
    case "SELECT_ALL_IN_PERMISSION": {
      const areAllSelected = action.value.every(
        (item) => draftState.selectedActions.includes(item.actionId)
      );
      if (areAllSelected) {
        action.value.forEach((item) => {
          pull_default()(draftState.selectedActions, item.actionId);
        });
      } else {
        action.value.forEach((item) => {
          draftState.selectedActions.push(item.actionId);
        });
      }
      break;
    }
    case "SELECT_ALL_ACTIONS": {
      draftState.selectedActions = [...draftState.data.allActionsIds];
      break;
    }
    case "ON_CHANGE_READ_ONLY": {
      const onlyReadOnlyActions = draftState.data.allActionsIds.filter(
        (actionId) => actionId.includes("find") || actionId.includes("findOne")
      );
      draftState.selectedActions = [...onlyReadOnlyActions];
      break;
    }
    case "UPDATE_PERMISSIONS_LAYOUT": {
      draftState.data = (0,EditView_utils/* transformPermissionsData */.mk)(action.value);
      break;
    }
    case "UPDATE_ROUTES": {
      draftState.routes = { ...action.value };
      break;
    }
    case "UPDATE_PERMISSIONS": {
      draftState.selectedActions = [...action.value];
      break;
    }
    case "SET_SELECTED_ACTION": {
      draftState.selectedAction = action.value;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const EditView_reducer = (reducer);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/index.js




















const MSG_ERROR_NAME_TAKEN = "Name already taken";
const ApiTokenCreateView = () => {
  (0,dist/* useFocusWhenNavigate */.go)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { lockApp, unlockApp } = (0,dist/* useOverlayBlocker */.o1)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const history = (0,react_router/* useHistory */.k6)();
  const permissions = (0,react_redux_es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  const [apiToken, setApiToken] = (0,react.useState)(
    history.location.state?.apiToken.accessKey ? {
      ...history.location.state.apiToken
    } : null
  );
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const { setCurrentStep } = (0,dist/* useGuidedTour */.c1)();
  const {
    allowedActions: { canCreate, canUpdate, canRegenerate }
  } = (0,dist/* useRBAC */.ss)(permissions.settings["api-tokens"]);
  const [state, dispatch] = (0,react.useReducer)(EditView_reducer, initialState, (state2) => EditView_init(state2, {}));
  const {
    params: { id }
  } = (0,react_router/* useRouteMatch */.$B)("/settings/api-tokens/:id");
  const { get, post, put } = (0,dist/* useFetchClient */.kY)();
  const isCreating = id === "create";
  (0,es.useQuery)(
    "content-api-permissions",
    async () => {
      const [permissions2, routes] = await Promise.all(
        ["/admin/content-api/permissions", "/admin/content-api/routes"].map(async (url) => {
          const { data } = await get(url);
          return data.data;
        })
      );
      dispatch({
        type: "UPDATE_PERMISSIONS_LAYOUT",
        value: permissions2
      });
      dispatch({
        type: "UPDATE_ROUTES",
        value: routes
      });
      if (apiToken) {
        if (apiToken?.type === "read-only") {
          dispatch({
            type: "ON_CHANGE_READ_ONLY"
          });
        }
        if (apiToken?.type === "full-access") {
          dispatch({
            type: "SELECT_ALL_ACTIONS"
          });
        }
        if (apiToken?.type === "custom") {
          dispatch({
            type: "UPDATE_PERMISSIONS",
            value: apiToken?.permissions
          });
        }
      }
    },
    {
      onError() {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
      }
    }
  );
  (0,react.useEffect)(() => {
    trackUsageRef.current(isCreating ? "didAddTokenFromList" : "didEditTokenFromList", {
      tokenType: constants/* API_TOKEN_TYPE */.Z
    });
  }, [isCreating]);
  const { status } = (0,es.useQuery)(
    ["api-token", id],
    async () => {
      const {
        data: { data }
      } = await get(`/admin/api-tokens/${id}`);
      setApiToken({
        ...data
      });
      if (data?.type === "read-only") {
        dispatch({
          type: "ON_CHANGE_READ_ONLY"
        });
      }
      if (data?.type === "full-access") {
        dispatch({
          type: "SELECT_ALL_ACTIONS"
        });
      }
      if (data?.type === "custom") {
        dispatch({
          type: "UPDATE_PERMISSIONS",
          value: data?.permissions
        });
      }
      return data;
    },
    {
      enabled: !isCreating && !apiToken,
      onError() {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
      }
    }
  );
  const handleSubmit = async (body, actions) => {
    trackUsageRef.current(isCreating ? "willCreateToken" : "willEditToken", {
      tokenType: constants/* API_TOKEN_TYPE */.Z
    });
    lockApp();
    const lifespanVal = body.lifespan && parseInt(body.lifespan, 10) && body.lifespan !== "0" ? parseInt(body.lifespan, 10) : null;
    try {
      const {
        data: { data: response }
      } = isCreating ? await post(`/admin/api-tokens`, {
        ...body,
        lifespan: lifespanVal,
        permissions: body.type === "custom" ? state.selectedActions : null
      }) : await put(`/admin/api-tokens/${id}`, {
        name: body.name,
        description: body.description,
        type: body.type,
        permissions: body.type === "custom" ? state.selectedActions : null
      });
      if (isCreating) {
        history.replace(`/settings/api-tokens/${response.id}`, { apiToken: response });
        setCurrentStep("apiTokens.success");
      }
      unlockApp();
      setApiToken({
        ...response
      });
      toggleNotification({
        type: "success",
        message: isCreating ? formatMessage({
          id: "notification.success.apitokencreated",
          defaultMessage: "API Token successfully created"
        }) : formatMessage({
          id: "notification.success.apitokenedited",
          defaultMessage: "API Token successfully edited"
        })
      });
      trackUsageRef.current(isCreating ? "didCreateToken" : "didEditToken", {
        type: apiToken.type,
        tokenType: constants/* API_TOKEN_TYPE */.Z
      });
    } catch (err) {
      const errors = (0,utils/* formatAPIErrors */.Iz)(err.response.data);
      actions.setErrors(errors);
      if (err?.response?.data?.error?.message === MSG_ERROR_NAME_TAKEN) {
        toggleNotification({
          type: "warning",
          message: err.response.data.message || "notification.error.tokennamenotunique"
        });
      } else {
        toggleNotification({
          type: "warning",
          message: err?.response?.data?.message || "notification.error"
        });
      }
      unlockApp();
    }
  };
  const [hasChangedPermissions, setHasChangedPermissions] = (0,react.useState)(false);
  const handleChangeCheckbox = ({ target: { value } }) => {
    setHasChangedPermissions(true);
    dispatch({
      type: "ON_CHANGE",
      value
    });
  };
  const handleChangeSelectAllCheckbox = ({ target: { value } }) => {
    setHasChangedPermissions(true);
    dispatch({
      type: "SELECT_ALL_IN_PERMISSION",
      value
    });
  };
  const setSelectedAction = ({ target: { value } }) => {
    dispatch({
      type: "SET_SELECTED_ACTION",
      value
    });
  };
  const providerValue = {
    ...state,
    onChange: handleChangeCheckbox,
    onChangeSelectAll: handleChangeSelectAllCheckbox,
    setSelectedAction
  };
  const canEditInputs = canUpdate && !isCreating || canCreate && isCreating;
  const isLoading = !isCreating && !apiToken && status !== "success";
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(components_LoadingView, { apiTokenName: apiToken?.name });
  }
  return /* @__PURE__ */ react.createElement(ApiTokenPermissionsContextProvider, { value: providerValue }, /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(dist/* SettingsPageTitle */.SL, { name: "API Tokens" }), /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.J9,
    {
      validationSchema: EditView_utils/* schema */.fK,
      validateOnChange: false,
      initialValues: {
        name: apiToken?.name || "",
        description: apiToken?.description || "",
        type: apiToken?.type,
        lifespan: apiToken?.lifespan ? apiToken.lifespan.toString() : apiToken?.lifespan
      },
      enableReinitialize: true,
      onSubmit: (body, actions) => handleSubmit(body, actions)
    },
    ({ errors, handleChange, isSubmitting, values, setFieldValue }) => {
      if (hasChangedPermissions && values?.type !== "custom") {
        setFieldValue("type", "custom");
      }
      return /* @__PURE__ */ react.createElement(dist/* Form */.l0, null, /* @__PURE__ */ react.createElement(
        FormHead/* default */.Z,
        {
          backUrl: "/settings/api-tokens",
          title: {
            id: "Settings.apiTokens.createPage.title",
            defaultMessage: "Create API Token"
          },
          token: apiToken,
          setToken: setApiToken,
          canEditInputs,
          canRegenerate,
          isSubmitting,
          regenerateUrl: "/admin/api-tokens/"
        }
      ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 6 }, Boolean(apiToken?.name) && /* @__PURE__ */ react.createElement(TokenBox/* default */.Z, { token: apiToken?.accessKey, tokenType: constants/* API_TOKEN_TYPE */.Z }), /* @__PURE__ */ react.createElement(
        components_FormApiTokenContainer,
        {
          errors,
          onChange: handleChange,
          canEditInputs,
          isCreating,
          values,
          apiToken,
          onDispatch: dispatch,
          setHasChangedPermissions
        }
      ), /* @__PURE__ */ react.createElement(
        components_Permissions,
        {
          disabled: !canEditInputs || values?.type === "read-only" || values?.type === "full-access"
        }
      ))));
    }
  )));
};
/* harmony default export */ const EditView = (ApiTokenCreateView);


/***/ }),

/***/ 51352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  IX: () => (/* reexport */ utils_getDateOfExpiration),
  fK: () => (/* reexport */ utils_schema),
  mk: () => (/* reexport */ utils_transformPermissionsData)
});

// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js + 18 modules
var format = __webpack_require__(86492);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/addDays/index.js
var addDays = __webpack_require__(1851);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/index.js + 510 modules
var locale = __webpack_require__(90765);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/getDateOfExpiration.js


const getDateOfExpiration = (createdAt, duration, language = "en") => {
  if (duration && typeof duration === "number") {
    const durationInDays = duration / 24 / 60 / 60 / 1e3;
    return (0,format/* default */.Z)((0,addDays/* default */.Z)(new Date(createdAt), durationInDays), "PPP", {
      locale: locale[language]
    });
  }
  return "Unlimited";
};
/* harmony default export */ const utils_getDateOfExpiration = (getDateOfExpiration);

// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var es = __webpack_require__(47853);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/schema.js


const schema = es/* object */.Ry().shape({
  name: es/* string */.Z_(dist/* translatedErrors */.I0.string).max(100).required(dist/* translatedErrors */.I0.required),
  type: es/* string */.Z_(dist/* translatedErrors */.I0.string).oneOf(["read-only", "full-access", "custom"]).required(dist/* translatedErrors */.I0.required),
  description: es/* string */.Z_().nullable(),
  lifespan: es/* number */.Rx().integer().min(0).nullable().defined(dist/* translatedErrors */.I0.required)
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/transformPermissionsData.js
const transformPermissionsData = (data) => {
  const layout = {
    allActionsIds: [],
    permissions: []
  };
  layout.permissions = Object.keys(data).map((apiId) => ({
    apiId,
    label: apiId.split("::")[1],
    controllers: Object.keys(data[apiId].controllers).map((controller) => ({
      controller,
      actions: data[apiId].controllers[controller].map((action) => {
        const actionId = `${apiId}.${controller}.${action}`;
        if (apiId.includes("api::")) {
          layout.allActionsIds.push(actionId);
        }
        return {
          action,
          actionId
        };
      }).flat()
    })).flat()
  }));
  return layout;
};
/* harmony default export */ const utils_transformPermissionsData = (transformPermissionsData);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/index.js






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

/***/ 1786:
/***/ ((module) => {

function baseIndexOfWith(array, value, fromIndex, comparator) {
  var index = fromIndex - 1, length = array.length;
  while (++index < length) {
    if (comparator(array[index], value)) {
      return index;
    }
  }
  return -1;
}
module.exports = baseIndexOfWith;


/***/ }),

/***/ 2784:
/***/ ((module) => {

function baseIsNaN(value) {
  return value !== value;
}
module.exports = baseIsNaN;


/***/ }),

/***/ 12186:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(36393), baseIndexOf = __webpack_require__(62878), baseIndexOfWith = __webpack_require__(1786), baseUnary = __webpack_require__(20435), copyArray = __webpack_require__(22033);
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function basePullAll(array, values, iteratee, comparator) {
  var indexOf = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values.length, seen = array;
  if (array === values) {
    values = copyArray(values);
  }
  if (iteratee) {
    seen = arrayMap(array, baseUnary(iteratee));
  }
  while (++index < length) {
    var fromIndex = 0, value = values[index], computed = iteratee ? iteratee(value) : value;
    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
      if (seen !== array) {
        splice.call(seen, fromIndex, 1);
      }
      splice.call(array, fromIndex, 1);
    }
  }
  return array;
}
module.exports = basePullAll;


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

/***/ 58422:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(36393), baseIteratee = __webpack_require__(90040), baseMap = __webpack_require__(92403), isArray = __webpack_require__(26126);
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}
module.exports = map;


/***/ }),

/***/ 22009:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(52431), pullAll = __webpack_require__(45906);
var pull = baseRest(pullAll);
module.exports = pull;


/***/ }),

/***/ 45906:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePullAll = __webpack_require__(12186);
function pullAll(array, values) {
  return array && array.length && values && values.length ? basePullAll(array, values) : array;
}
module.exports = pullAll;


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



/***/ })

}]);