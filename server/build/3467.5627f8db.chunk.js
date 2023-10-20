"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[3467],{

/***/ 3414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ API_TOKEN_TYPE),
/* harmony export */   f: () => (/* binding */ TRANSFER_TOKEN_TYPE)
/* harmony export */ });
const API_TOKEN_TYPE = "api-token";
const TRANSFER_TOKEN_TYPE = "transfer-token";


/***/ }),

/***/ 51352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 43467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70627);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/LifeSpanInput/index.js
var LifeSpanInput = __webpack_require__(89982);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/TokenDescription/index.js
var TokenDescription = __webpack_require__(37651);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/TokenName/index.js
var TokenName = __webpack_require__(72028);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/TokenTypeSelect/index.js
var TokenTypeSelect = __webpack_require__(32381);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/TransferTokens/EditView/components/FormTransferTokenContainer/index.js








const FormTransferTokenContainer = ({
  errors,
  onChange,
  canEditInputs,
  isCreating,
  values,
  transferToken
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const typeOptions = [
    {
      value: "push",
      label: {
        id: "Settings.transferTokens.types.push",
        defaultMessage: "Push"
      }
    },
    {
      value: "pull",
      label: {
        id: "Settings.transferTokens.types.pull",
        defaultMessage: "Pull"
      }
    },
    {
      value: "push-pull",
      label: {
        id: "Settings.transferTokens.types.push-pull",
        defaultMessage: "Full Access"
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
        token: transferToken
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { key: "permissions", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      TokenTypeSelect/* default */.Z,
      {
        name: "permissions",
        values,
        errors,
        label: {
          id: "Settings.tokens.form.type",
          defaultMessage: "Token type"
        },
        onChange: (value) => {
          onChange({ target: { name: "permissions", value } });
        },
        options: typeOptions,
        canEditInputs
      }
    ))))
  );
};
FormTransferTokenContainer.propTypes = {
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
  transferToken: prop_types_default().shape({
    id: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    type: (prop_types_default()).string,
    lifespan: (prop_types_default()).string,
    name: (prop_types_default()).string,
    accessKey: (prop_types_default()).string,
    permissions: (prop_types_default()).array,
    description: (prop_types_default()).string,
    createdAt: (prop_types_default()).string
  })
};
FormTransferTokenContainer.defaultProps = {
  errors: {},
  transferToken: {}
};
/* harmony default export */ const components_FormTransferTokenContainer = (FormTransferTokenContainer);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(27875);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48102);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(59082);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/TransferTokens/EditView/components/LoadingView/index.js






const LoadingView = ({ transferTokenName }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  (0,dist/* useFocusWhenNavigate */.go)();
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": "true" }, /* @__PURE__ */ react.createElement(dist/* SettingsPageTitle */.SL, { name: "Transfer Tokens" }), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      primaryAction: /* @__PURE__ */ react.createElement(Button/* Button */.z, { disabled: true, startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null), type: "button", size: "L" }, formatMessage({ id: "global.save", defaultMessage: "Save" })),
      title: transferTokenName || formatMessage({
        id: "Settings.transferTokens.createPage.title",
        defaultMessage: "Create Transfer Token"
      })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null)));
};
LoadingView.defaultProps = {
  transferTokenName: null
};
LoadingView.propTypes = {
  transferTokenName: (prop_types_default()).string
};
/* harmony default export */ const components_LoadingView = (LoadingView);

// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(47853);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/TransferTokens/EditView/utils/schema.js


const schema = yup_es/* object */.Ry().shape({
  name: yup_es/* string */.Z_(dist/* translatedErrors */.I0.string).max(100).required(dist/* translatedErrors */.I0.required),
  description: yup_es/* string */.Z_().nullable(),
  lifespan: yup_es/* number */.Rx().integer().min(0).nullable().defined(dist/* translatedErrors */.I0.required),
  permissions: yup_es/* string */.Z_(dist/* translatedErrors */.I0.string).required(dist/* translatedErrors */.I0.required)
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/TransferTokens/EditView/utils/index.js




;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/TransferTokens/EditView/index.js
















const MSG_ERROR_NAME_TAKEN = "Name already taken";
const TransferTokenCreateView = () => {
  (0,dist/* useFocusWhenNavigate */.go)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { lockApp, unlockApp } = (0,dist/* useOverlayBlocker */.o1)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const history = (0,react_router/* useHistory */.k6)();
  const [transferToken, setTransferToken] = (0,react.useState)(
    history.location.state?.transferToken.accessKey ? {
      ...history.location.state.transferToken
    } : null
  );
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const { setCurrentStep } = (0,dist/* useGuidedTour */.c1)();
  const permissions = (0,react_redux_es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  const {
    allowedActions: { canCreate, canUpdate, canRegenerate }
  } = (0,dist/* useRBAC */.ss)(permissions.settings["transfer-tokens"]);
  const {
    params: { id }
  } = (0,react_router/* useRouteMatch */.$B)("/settings/transfer-tokens/:id");
  const { get, post, put } = (0,dist/* useFetchClient */.kY)();
  const isCreating = id === "create";
  const { formatAPIError } = (0,dist/* useAPIErrorHandler */.So)();
  (0,react.useEffect)(() => {
    trackUsageRef.current(isCreating ? "didAddTokenFromList" : "didEditTokenFromList", {
      tokenType: constants/* TRANSFER_TOKEN_TYPE */.f
    });
  }, [isCreating]);
  const { status } = (0,es.useQuery)(
    ["transfer-token", id],
    async () => {
      const {
        data: { data }
      } = await get(`/admin/transfer/tokens/${id}`);
      setTransferToken({
        ...data
      });
      return data;
    },
    {
      enabled: !isCreating && !transferToken,
      onError(err) {
        if (err.response.data.error.details?.code === "INVALID_TOKEN_SALT") {
          toggleNotification({
            type: "warning",
            message: {
              id: "notification.error.invalid.configuration",
              defaultMessage: "You have an invalid configuration, check your server log for more information."
            }
          });
        } else {
          toggleNotification({
            type: "warning",
            message: formatAPIError(err)
          });
        }
      }
    }
  );
  const handleSubmit = async (body, actions) => {
    trackUsageRef.current(isCreating ? "willCreateToken" : "willEditToken", {
      tokenType: constants/* TRANSFER_TOKEN_TYPE */.f
    });
    lockApp();
    const lifespanVal = body.lifespan && parseInt(body.lifespan, 10) && body.lifespan !== "0" ? parseInt(body.lifespan, 10) : null;
    const permissions2 = body.permissions.split("-");
    try {
      const {
        data: { data: response }
      } = isCreating ? await post(`/admin/transfer/tokens`, {
        ...body,
        lifespan: lifespanVal,
        permissions: permissions2
      }) : await put(`/admin/transfer/tokens/${id}`, {
        name: body.name,
        description: body.description,
        permissions: permissions2
      });
      unlockApp();
      if (isCreating) {
        history.replace(`/settings/transfer-tokens/${response.id}`, { transferToken: response });
        setCurrentStep("transferTokens.success");
      }
      setTransferToken({
        ...response
      });
      toggleNotification({
        type: "success",
        message: isCreating ? formatMessage({
          id: "notification.success.transfertokencreated",
          defaultMessage: "Transfer Token successfully created"
        }) : formatMessage({
          id: "notification.success.transfertokenedited",
          defaultMessage: "Transfer Token successfully edited"
        })
      });
      trackUsageRef.current(isCreating ? "didCreateToken" : "didEditToken", {
        type: transferToken?.permissions,
        tokenType: constants/* TRANSFER_TOKEN_TYPE */.f
      });
    } catch (err) {
      const errors = (0,utils/* formatAPIErrors */.Iz)(err.response.data);
      actions.setErrors(errors);
      if (err?.response?.data?.error?.message === MSG_ERROR_NAME_TAKEN) {
        toggleNotification({
          type: "warning",
          message: err.response.data.message || "notification.error.tokennamenotunique"
        });
      } else if (err?.response?.data?.error?.details?.code === "INVALID_TOKEN_SALT") {
        toggleNotification({
          type: "warning",
          message: {
            id: "notification.error.invalid.configuration",
            defaultMessage: "You have an invalid configuration, check your server log for more information."
          }
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
  const canEditInputs = canUpdate && !isCreating || canCreate && isCreating;
  const isLoading = !isCreating && !transferToken && status !== "success";
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(components_LoadingView, { transferTokenName: transferToken?.name });
  }
  const handleErrorRegenerate = (err) => {
    if (err?.response?.data?.error?.details?.code === "INVALID_TOKEN_SALT") {
      toggleNotification({
        type: "warning",
        message: {
          id: "notification.error.invalid.configuration",
          defaultMessage: "You have an invalid configuration, check your server log for more information."
        }
      });
    } else {
      toggleNotification({
        type: "warning",
        message: formatAPIError(err)
      });
    }
  };
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(dist/* SettingsPageTitle */.SL, { name: "Transfer Tokens" }), /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.J9,
    {
      validationSchema: utils_schema,
      validateOnChange: false,
      initialValues: {
        name: transferToken?.name || "",
        description: transferToken?.description || "",
        lifespan: transferToken?.lifespan ? transferToken.lifespan.toString() : transferToken?.lifespan,
        permissions: transferToken?.permissions.join("-")
      },
      enableReinitialize: true,
      onSubmit: (body, actions) => handleSubmit(body, actions)
    },
    ({ errors, handleChange, isSubmitting, values }) => {
      return /* @__PURE__ */ react.createElement(dist/* Form */.l0, null, /* @__PURE__ */ react.createElement(
        FormHead/* default */.Z,
        {
          backUrl: "/settings/transfer-tokens",
          title: {
            id: "Settings.transferTokens.createPage.title",
            defaultMessage: "Create Transfer Token"
          },
          token: transferToken,
          setToken: setTransferToken,
          canEditInputs,
          canRegenerate,
          isSubmitting,
          regenerateUrl: "/admin/transfer/tokens/",
          onErrorRegenerate: handleErrorRegenerate
        }
      ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 6 }, Boolean(transferToken?.name) && /* @__PURE__ */ react.createElement(TokenBox/* default */.Z, { token: transferToken?.accessKey, tokenType: constants/* TRANSFER_TOKEN_TYPE */.f }), /* @__PURE__ */ react.createElement(
        components_FormTransferTokenContainer,
        {
          errors,
          onChange: handleChange,
          canEditInputs,
          isCreating,
          values,
          transferToken
        }
      ))));
    }
  ));
};
/* harmony default export */ const EditView = (TransferTokenCreateView);


/***/ })

}]);