"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[4409],{

/***/ 28104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EditView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(49402);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/selectors.js
var selectors = __webpack_require__(36364);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48102);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.mjs + 1 modules
var Loader = __webpack_require__(77970);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(59082);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(71563);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(43433);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var react_query_es = __webpack_require__(40464);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(51447);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useAdminRoles/index.js
var useAdminRoles = __webpack_require__(51754);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useContentTypes/index.js + 1 modules
var useContentTypes = __webpack_require__(92686);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useInjectReducer/index.js + 1 modules
var useInjectReducer = __webpack_require__(79194);
// EXTERNAL MODULE: ./.cache/ee/admin/hooks/useLicenseLimits.js
var useLicenseLimits = __webpack_require__(75021);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/actions/index.js
var actions = __webpack_require__(11984);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Layout/index.js + 3 modules
var Layout = __webpack_require__(43390);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/LimitsModal/index.js + 2 modules
var LimitsModal = __webpack_require__(38705);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Stages/index.js + 5 modules
var Stages = __webpack_require__(68997);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/WorkflowAttributes/index.js + 1 modules
var WorkflowAttributes = __webpack_require__(85230);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/constants.js
var constants = __webpack_require__(86978);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/hooks/useReviewWorkflows.js
var useReviewWorkflows = __webpack_require__(52258);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/reducer/index.js
var reducer = __webpack_require__(3848);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/selectors.js
var ReviewWorkflows_selectors = __webpack_require__(65649);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/utils/validateWorkflow.js
var validateWorkflow = __webpack_require__(66578);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/pages/EditView/EditView.js

























function ReviewWorkflowsEditView() {
  const { workflowId } = (0,react_router/* useParams */.UO)();
  const permissions = (0,es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const dispatch = (0,es/* useDispatch */.I0)();
  const { put } = (0,dist/* useFetchClient */.kY)();
  const { formatAPIError } = (0,dist/* useAPIErrorHandler */.So)();
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const { isLoading: isLoadingWorkflow, meta, workflows, refetch } = (0,useReviewWorkflows/* useReviewWorkflows */.n)();
  const { collectionTypes, singleTypes, isLoading: isLoadingContentTypes } = (0,useContentTypes/* useContentTypes */.G)();
  const serverState = (0,es/* useSelector */.v9)(ReviewWorkflows_selectors/* selectServerState */.RR);
  const currentWorkflowIsDirty = (0,es/* useSelector */.v9)(ReviewWorkflows_selectors/* selectIsWorkflowDirty */.bH);
  const currentWorkflow = (0,es/* useSelector */.v9)(ReviewWorkflows_selectors/* selectCurrentWorkflow */.DV);
  const hasDeletedServerStages = (0,es/* useSelector */.v9)(ReviewWorkflows_selectors/* selectHasDeletedServerStages */.CA);
  const roles = (0,es/* useSelector */.v9)(ReviewWorkflows_selectors/* selectRoles */.g$);
  const isLoading = (0,es/* useSelector */.v9)(ReviewWorkflows_selectors/* selectIsLoading */.xU);
  const {
    allowedActions: { canDelete, canUpdate }
  } = (0,dist/* useRBAC */.ss)(permissions.settings["review-workflows"]);
  const [savePrompts, setSavePrompts] = react.useState({});
  const { getFeature, isLoading: isLicenseLoading } = (0,useLicenseLimits/* useLicenseLimits */.q)();
  const { isLoading: isLoadingRoles, roles: serverRoles } = (0,useAdminRoles/* useAdminRoles */.F)(void 0, {
    retry: false
  });
  const [showLimitModal, setShowLimitModal] = react.useState(false);
  const [initialErrors, setInitialErrors] = react.useState(null);
  const workflow = workflows.find((workflow2) => workflow2.id === parseInt(workflowId, 10));
  const contentTypesFromOtherWorkflows = workflows.filter((workflow2) => workflow2.id !== parseInt(workflowId, 10)).flatMap((workflow2) => workflow2.contentTypes);
  const { mutateAsync, isLoading: isLoadingMutation } = (0,react_query_es.useMutation)(
    async ({ workflow: workflow2 }) => {
      const {
        data: { data }
      } = await put(`/admin/review-workflows/workflows/${workflow2.id}`, {
        data: workflow2
      });
      return data;
    },
    {
      onSuccess() {
        toggleNotification({
          type: "success",
          message: { id: "notification.success.saved", defaultMessage: "Saved" }
        });
      }
    }
  );
  const updateWorkflow = async (workflow2) => {
    setInitialErrors(null);
    try {
      const res = await mutateAsync({
        workflow: {
          ...workflow2,
          // compare permissions of stages and only submit them if at least one has
          // changed; this enables partial updates e.g. for users who don't have
          // permissions to see roles
          stages: workflow2.stages.map((stage) => {
            let hasUpdatedPermissions = true;
            const serverStage = serverState.workflow.stages.find(
              (serverStage2) => serverStage2.id === stage?.id
            );
            if (serverStage) {
              hasUpdatedPermissions = serverStage.permissions?.length !== stage.permission?.length || !serverStage.permissions.every(
                (serverPermission) => !!stage.permissions.find(
                  (permission) => permission.role === serverPermission.role
                )
              );
            }
            return {
              ...stage,
              permissions: hasUpdatedPermissions ? stage.permissions : void 0
            };
          })
        }
      });
      return res;
    } catch (error) {
      if (error.response.data?.error?.name === "ValidationError" && error.response.data?.error?.details?.errors?.length > 0) {
        setInitialErrors(
          error.response.data?.error?.details?.errors.reduce((acc, error2) => {
            set_default()(acc, error2.path, error2.message);
            return acc;
          }, {})
        );
      }
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
      return null;
    }
  };
  const submitForm = async () => {
    await updateWorkflow(currentWorkflow);
    await refetch();
    setSavePrompts({});
  };
  const handleConfirmDeleteDialog = async () => {
    await submitForm();
  };
  const handleConfirmClose = () => {
    setSavePrompts({});
  };
  const formik = (0,formik_esm/* useFormik */.TA)({
    enableReinitialize: true,
    initialErrors,
    initialValues: currentWorkflow,
    async onSubmit() {
      const isContentTypeReassignment = currentWorkflow.contentTypes.some(
        (contentType) => contentTypesFromOtherWorkflows.includes(contentType)
      );
      if (limits?.[constants/* CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME */.Ef] && meta?.workflowCount > parseInt(limits[constants/* CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME */.Ef], 10)) {
        setShowLimitModal("workflow");
      } else if (limits?.[constants/* CHARGEBEE_STAGES_PER_WORKFLOW_ENTITLEMENT_NAME */._X] && currentWorkflow.stages.length > parseInt(limits[constants/* CHARGEBEE_STAGES_PER_WORKFLOW_ENTITLEMENT_NAME */._X], 10)) {
        setShowLimitModal("stage");
      } else if (hasDeletedServerStages || isContentTypeReassignment) {
        if (hasDeletedServerStages) {
          setSavePrompts((prev) => ({ ...prev, hasDeletedServerStages: true }));
        }
        if (isContentTypeReassignment) {
          setSavePrompts((prev) => ({ ...prev, hasReassignedContentTypes: true }));
        }
      } else {
        submitForm();
      }
    },
    validate(values) {
      return (0,validateWorkflow/* validateWorkflow */.V)({ values, formatMessage });
    }
  });
  (0,useInjectReducer/* useInjectReducer */.v)(constants/* REDUX_NAMESPACE */.sN, reducer/* reducer */.I);
  const limits = getFeature("review-workflows");
  react.useEffect(() => {
    if (!isLoadingWorkflow) {
      dispatch((0,actions/* setWorkflow */.fC)({ workflow }));
      dispatch((0,actions/* setWorkflows */.PP)({ workflows }));
    }
    if (!isLoadingContentTypes) {
      dispatch((0,actions/* setContentTypes */.Pz)({ collectionTypes, singleTypes }));
    }
    if (!isLoadingRoles) {
      dispatch((0,actions/* setRoles */.Lk)(serverRoles));
    }
    dispatch((0,actions/* setIsLoading */.wt)(isLoadingWorkflow || isLoadingContentTypes || isLoadingRoles));
    return () => {
      dispatch((0,actions/* resetWorkflow */.Js)());
    };
  }, [
    collectionTypes,
    dispatch,
    isLoadingContentTypes,
    isLoadingWorkflow,
    isLoadingRoles,
    serverRoles,
    singleTypes,
    workflow,
    workflows
  ]);
  react.useEffect(() => {
    if (!isLoadingWorkflow && !isLicenseLoading) {
      if (limits?.[constants/* CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME */.Ef] && meta?.workflowCount > parseInt(limits[constants/* CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME */.Ef], 10)) {
        setShowLimitModal("workflow");
      } else if (limits?.[constants/* CHARGEBEE_STAGES_PER_WORKFLOW_ENTITLEMENT_NAME */._X] && currentWorkflow.stages.length > parseInt(limits[constants/* CHARGEBEE_STAGES_PER_WORKFLOW_ENTITLEMENT_NAME */._X], 10)) {
        setShowLimitModal("stage");
      }
    }
  }, [
    currentWorkflow.stages.length,
    isLicenseLoading,
    isLoadingWorkflow,
    limits,
    meta?.workflowCount,
    meta.workflowsTotal
  ]);
  react.useEffect(() => {
    if (!isLoading && roles.length === 0) {
      toggleNotification({
        blockTransition: true,
        type: "warning",
        message: formatMessage({
          id: "Settings.review-workflows.stage.permissions.noPermissions.description",
          defaultMessage: "You don\u2019t have the permission to see roles"
        })
      });
    }
  }, [formatMessage, isLoading, roles, toggleNotification]);
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Layout/* DragLayerRendered */.lx, null), /* @__PURE__ */ react.createElement(formik_esm/* FormikProvider */.Hy, { value: formik }, /* @__PURE__ */ react.createElement(formik_esm/* Form */.l0, { onSubmit: formik.handleSubmit }, /* @__PURE__ */ react.createElement(
    Layout/* Header */.h4,
    {
      navigationAction: /* @__PURE__ */ react.createElement(Layout/* Back */.eJ, { href: "/settings/review-workflows" }),
      primaryAction: canUpdate && /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
          type: "submit",
          size: "M",
          disabled: !currentWorkflowIsDirty,
          loading: !Object.keys(savePrompts).length > 0 && isLoadingMutation
        },
        formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        })
      ),
      subtitle: !isLoading && formatMessage(
        {
          id: "Settings.review-workflows.page.subtitle",
          defaultMessage: "{count, plural, one {# stage} other {# stages}}"
        },
        { count: currentWorkflow.stages.length }
      ),
      title: currentWorkflow.name
    }
  ), /* @__PURE__ */ react.createElement(Layout/* Root */.fC, null, isLoading ? /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, null, formatMessage({
    id: "Settings.review-workflows.page.isLoading",
    defaultMessage: "Workflow is loading"
  }))) : /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "stretch", direction: "column", gap: 7 }, /* @__PURE__ */ react.createElement(WorkflowAttributes/* WorkflowAttributes */.Y, { canUpdate }), /* @__PURE__ */ react.createElement(
    Stages/* Stages */.U,
    {
      canDelete,
      canUpdate,
      stages: formik.values?.stages
    }
  ))))), /* @__PURE__ */ react.createElement(
    dist/* ConfirmDialog */.QH.Root,
    {
      isConfirmButtonLoading: isLoading,
      isOpen: Object.keys(savePrompts).length > 0,
      onToggleDialog: handleConfirmClose,
      onConfirm: handleConfirmDeleteDialog
    },
    /* @__PURE__ */ react.createElement(dist/* ConfirmDialog */.QH.Body, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", gap: 5 }, savePrompts.hasDeletedServerStages && /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textAlign: "center", variant: "omega" }, formatMessage({
      id: "Settings.review-workflows.page.delete.confirm.stages.body",
      defaultMessage: "All entries assigned to deleted stages will be moved to the previous stage."
    })), savePrompts.hasReassignedContentTypes && /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textAlign: "center", variant: "omega" }, formatMessage(
      {
        id: "Settings.review-workflows.page.delete.confirm.contentType.body",
        defaultMessage: "{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."
      },
      {
        count: contentTypesFromOtherWorkflows.filter(
          (contentType) => currentWorkflow.contentTypes.includes(contentType)
        ).length
      }
    )), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textAlign: "center", variant: "omega" }, formatMessage({
      id: "Settings.review-workflows.page.delete.confirm.confirm",
      defaultMessage: "Are you sure you want to save?"
    }))))
  ), /* @__PURE__ */ react.createElement(
    LimitsModal/* Root */.fC,
    {
      isOpen: showLimitModal === "workflow",
      onClose: () => setShowLimitModal(false)
    },
    /* @__PURE__ */ react.createElement(LimitsModal/* Title */.Dx, null, formatMessage({
      id: "Settings.review-workflows.edit.page.workflows.limit.title",
      defaultMessage: "You\u2019ve reached the limit of workflows in your plan"
    })),
    /* @__PURE__ */ react.createElement(LimitsModal/* Body */.uT, null, formatMessage({
      id: "Settings.review-workflows.edit.page.workflows.limit.body",
      defaultMessage: "Delete a workflow or contact Sales to enable more workflows."
    }))
  ), /* @__PURE__ */ react.createElement(
    LimitsModal/* Root */.fC,
    {
      isOpen: showLimitModal === "stage",
      onClose: () => setShowLimitModal(false)
    },
    /* @__PURE__ */ react.createElement(LimitsModal/* Title */.Dx, null, formatMessage({
      id: "Settings.review-workflows.edit.page.stages.limit.title",
      defaultMessage: "You have reached the limit of stages for this workflow in your plan"
    })),
    /* @__PURE__ */ react.createElement(LimitsModal/* Body */.uT, null, formatMessage({
      id: "Settings.review-workflows.edit.page.stages.limit.body",
      defaultMessage: "Try deleting some stages or contact Sales to enable more stages."
    }))
  ));
}

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/pages/EditView/index.js





/* harmony default export */ function EditView() {
  const permissions = (0,es/* useSelector */.v9)(selectors/* selectAdminPermissions */._);
  return /* @__PURE__ */ react.createElement(dist/* CheckPagePermissions */.O4, { permissions: permissions.settings["review-workflows"].main }, /* @__PURE__ */ react.createElement(ReviewWorkflowsEditView, null));
}


/***/ })

}]);