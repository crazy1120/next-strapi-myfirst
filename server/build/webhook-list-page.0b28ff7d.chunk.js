"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[4121],{

/***/ 19298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Webhooks_ProtectedListView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(49402);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/selectors.js
var selectors = __webpack_require__(36364);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.mjs
var useNotifyAT = __webpack_require__(51926);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.mjs
var Layout = __webpack_require__(27997);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(73354);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(27875);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ActionLayout.mjs
var ActionLayout = __webpack_require__(37472);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48102);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(74758);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(93415);
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
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseCheckbox/BaseCheckbox.mjs + 2 modules
var BaseCheckbox = __webpack_require__(73411);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(10989);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.mjs
var Tbody = __webpack_require__(86967);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74081);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(37652);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Switch/Switch.mjs





const SwitchContent = styled_components_browser_esm/* default */.ZP.div`
  background: ${({ theme }) => theme.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24 / 16}rem;
  width: ${40 / 16}rem;

  & span {
    font-size: ${({ visibleLabels }) => visibleLabels ? "1rem" : 0};
  }

  &:before {
    content: '';
    background: ${({ theme }) => theme.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({ theme }) => theme.spaces[1]};
    top: ${({ theme }) => theme.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`;
const SwitchButton = styled_components_browser_esm/* default */.ZP.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${SwitchContent} {
    background: ${({ theme }) => theme.colors.success500};
  }

  &[aria-checked='true'] ${SwitchContent}:before {
    transform: translateX(1rem);
  }
`;
const Switch = react.forwardRef(({ label, onChange, onLabel = "On", offLabel = "Off", selected, visibleLabels = false, ...props }, ref) => {
  return (0,jsx_runtime.jsx)(SwitchButton, { ref, role: "switch", "aria-checked": selected, "aria-label": label, onClick: onChange, visibleLabels, type: "button", ...props, children: (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { children: [(0,jsx_runtime.jsxs)(SwitchContent, { children: [(0,jsx_runtime.jsx)("span", { children: onLabel }), (0,jsx_runtime.jsx)("span", { children: offLabel })] }), visibleLabels && (0,jsx_runtime.jsx)(Box/* Box */.x, { as: "span", "aria-hidden": true, paddingLeft: 2, color: selected ? "success600" : "danger600", children: selected ? onLabel : offLabel })] }) });
});


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(4987);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/EmptyStateLayout/EmptyStateLayout.mjs
var EmptyStateLayout = __webpack_require__(6191);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.mjs
var Plus = __webpack_require__(36938);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.mjs
var Trash = __webpack_require__(78665);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.mjs
var Pencil = __webpack_require__(26784);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyDocuments.mjs
var EmptyDocuments = __webpack_require__(52448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var react_query_es = __webpack_require__(40464);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(51447);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/ListView/index.js









const ListView = () => {
  const [showModal, setShowModal] = (0,react.useState)(false);
  const [webhooksToDelete, setWebhooksToDelete] = (0,react.useState)([]);
  const permissions = (0,es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { formatAPIError } = (0,dist/* useAPIErrorHandler */.So)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  (0,dist/* useFocusWhenNavigate */.go)();
  const { push } = (0,react_router/* useHistory */.k6)();
  const { pathname } = (0,react_router/* useLocation */.TH)();
  const {
    isLoading: isRBACLoading,
    allowedActions: { canCreate, canUpdate, canDelete }
  } = (0,dist/* useRBAC */.ss)(permissions.settings.webhooks);
  const { get, post, put } = (0,dist/* useFetchClient */.kY)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.G)();
  const QUERY_KEY = "webhooks";
  const {
    isLoading: isWebhooksLoading,
    data: webhooks,
    error: webhooksError,
    refetch: refetchWebhooks
  } = (0,react_query_es.useQuery)(QUERY_KEY, async () => {
    const {
      data: { data }
    } = await get("/admin/webhooks");
    return data;
  });
  (0,react.useEffect)(() => {
    if (webhooksError) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(webhooksError)
      });
      return;
    }
    if (webhooks) {
      notifyStatus(
        formatMessage({
          id: "Settings.webhooks.list.loading.success",
          defaultMessage: "Webhooks have been loaded"
        })
      );
    }
  }, [webhooks, webhooksError, toggleNotification, formatMessage, notifyStatus, formatAPIError]);
  const deleteMutation = (0,react_query_es.useMutation)(
    async () => {
      await post("/admin/webhooks/batch-delete", {
        ids: webhooksToDelete
      });
    },
    {
      onError(error) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(error)
        });
        setShowModal(false);
      },
      onSuccess() {
        setWebhooksToDelete([]);
        setShowModal(false);
        refetchWebhooks();
      }
    }
  );
  const enabledMutation = (0,react_query_es.useMutation)(
    async ({ isEnabled, id }) => {
      const { id: _, ...webhook } = webhooks.find((webhook2) => webhook2.id === id) ?? {};
      const body = {
        ...webhook,
        isEnabled
      };
      await put(`/admin/webhooks/${id}`, body);
    },
    {
      onError(error) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(error)
        });
      },
      onSuccess() {
        refetchWebhooks();
      }
    }
  );
  const confirmDelete = () => deleteMutation.mutate();
  const selectAllCheckbox = (selected) => selected ? setWebhooksToDelete(webhooks.map((webhook) => webhook.id)) : setWebhooksToDelete([]);
  const selectOneCheckbox = (selected, id) => selected ? setWebhooksToDelete((prev) => [...prev, id]) : setWebhooksToDelete((prev) => prev.filter((webhookId) => webhookId !== id));
  const goTo = (to) => push(`${pathname}/${to}`);
  const isLoading = isRBACLoading || isWebhooksLoading;
  const numberOfWebhooks = webhooks?.length ?? 0;
  const webhooksToDeleteLength = webhooksToDelete.length;
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(dist/* SettingsPageTitle */.SL, { name: "Webhooks" }), /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({ id: "Settings.webhooks.title", defaultMessage: "Webhooks" }),
      subtitle: formatMessage({
        id: "Settings.webhooks.list.description",
        defaultMessage: "Get POST changes notifications"
      }),
      primaryAction: canCreate && !isLoading && /* @__PURE__ */ react.createElement(dist/* LinkButton */.Qj, { startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null), variant: "default", to: `${pathname}/create`, size: "S" }, formatMessage({
        id: "Settings.webhooks.list.button.add",
        defaultMessage: "Create new webhook"
      }))
    }
  ), webhooksToDeleteLength > 0 && canDelete && /* @__PURE__ */ react.createElement(
    ActionLayout/* ActionLayout */.Z,
    {
      startActions: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "epsilon", textColor: "neutral600" }, formatMessage(
        {
          id: "Settings.webhooks.to.delete",
          defaultMessage: "{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"
        },
        { webhooksToDeleteLength }
      )), /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          onClick: () => setShowModal(true),
          startIcon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null),
          size: "L",
          variant: "danger-light"
        },
        formatMessage({
          id: "global.delete",
          defaultMessage: "Delete"
        })
      ))
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, isLoading ? /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null)) : numberOfWebhooks > 0 ? /* @__PURE__ */ react.createElement(
    Table/* Table */.i,
    {
      colCount: 5,
      rowCount: numberOfWebhooks + 1,
      footer: /* @__PURE__ */ react.createElement(TFooter/* TFooter */.c, { onClick: () => canCreate ? goTo("create") : {}, icon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null) }, formatMessage({
        id: "Settings.webhooks.list.button.add",
        defaultMessage: "Create new webhook"
      }))
    },
    /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(
      BaseCheckbox/* BaseCheckbox */.C,
      {
        "aria-label": formatMessage({
          id: "global.select-all-entries",
          defaultMessage: "Select all entries"
        }),
        indeterminate: webhooksToDeleteLength > 0 && webhooksToDeleteLength < numberOfWebhooks,
        value: webhooksToDeleteLength === numberOfWebhooks,
        onValueChange: selectAllCheckbox
      }
    )), /* @__PURE__ */ react.createElement(Cell.Th, { width: "20%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "global.name",
      defaultMessage: "Name"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, { width: "60%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "Settings.webhooks.form.url",
      defaultMessage: "URL"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, { width: "20%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "Settings.webhooks.list.th.status",
      defaultMessage: "Status"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, formatMessage({
      id: "Settings.webhooks.list.th.actions",
      defaultMessage: "Actions"
    }))))),
    /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, webhooks.map((webhook) => /* @__PURE__ */ react.createElement(
      Tr.Tr,
      {
        key: webhook.id,
        ...(0,dist/* onRowClick */.X7)({
          fn: () => goTo(webhook.id),
          condition: canUpdate
        })
      },
      /* @__PURE__ */ react.createElement(Cell.Td, { ...dist/* stopPropagation */.UW }, /* @__PURE__ */ react.createElement(
        BaseCheckbox/* BaseCheckbox */.C,
        {
          "aria-label": `${formatMessage({
            id: "global.select",
            defaultMessage: "Select"
          })} ${webhook.name}`,
          value: webhooksToDelete?.includes(webhook.id),
          onValueChange: (selected) => selectOneCheckbox(selected, webhook.id),
          name: "select"
        }
      )),
      /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "semiBold", textColor: "neutral800" }, webhook.name)),
      /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, webhook.url)),
      /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(
        Switch,
        {
          onLabel: formatMessage({
            id: "global.enabled",
            defaultMessage: "Enabled"
          }),
          offLabel: formatMessage({
            id: "global.disabled",
            defaultMessage: "Disabled"
          }),
          label: `${webhook.name} ${formatMessage({
            id: "Settings.webhooks.list.th.status",
            defaultMessage: "Status"
          })}`,
          selected: webhook.isEnabled,
          onChange: (e) => {
            e.stopPropagation();
            enabledMutation.mutate({
              isEnabled: !webhook.isEnabled,
              id: webhook.id
            });
          },
          visibleLabels: true
        }
      ))),
      /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 1 }, canUpdate && /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          label: formatMessage({
            id: "Settings.webhooks.events.update",
            defaultMessage: "Update"
          }),
          icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null),
          noBorder: true
        }
      ), canDelete && /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          onClick: (e) => {
            e.stopPropagation();
            setWebhooksToDelete([webhook.id]);
            setShowModal(true);
          },
          label: formatMessage({
            id: "Settings.webhooks.events.delete",
            defaultMessage: "Delete webhook"
          }),
          icon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null),
          noBorder: true
        }
      )))
    )))
  ) : /* @__PURE__ */ react.createElement(
    EmptyStateLayout/* EmptyStateLayout */.x,
    {
      icon: /* @__PURE__ */ react.createElement(EmptyDocuments/* default */.Z, { width: "160px" }),
      content: formatMessage({
        id: "Settings.webhooks.list.empty.description",
        defaultMessage: "No webhooks found"
      }),
      action: /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          variant: "secondary",
          startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null),
          onClick: () => canCreate ? goTo("create") : {}
        },
        formatMessage({
          id: "Settings.webhooks.list.button.add",
          defaultMessage: "Create new webhook"
        })
      )
    }
  ))), /* @__PURE__ */ react.createElement(
    dist/* ConfirmDialog */.QH,
    {
      isOpen: showModal,
      onToggleDialog: () => setShowModal((prev) => !prev),
      onConfirm: confirmDelete,
      isConfirmButtonLoading: deleteMutation.isLoading
    }
  ));
};
/* harmony default export */ const Webhooks_ListView = (ListView);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/ProtectedListView/index.js





const ProtectedListView = () => {
  const permissions = (0,es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  return /* @__PURE__ */ react.createElement(dist/* CheckPagePermissions */.O4, { permissions: permissions.settings.webhooks.main }, /* @__PURE__ */ react.createElement(Webhooks_ListView, null));
};
/* harmony default export */ const Webhooks_ProtectedListView = (ProtectedListView);


/***/ }),

/***/ 37472:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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