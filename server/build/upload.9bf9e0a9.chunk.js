"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[3650],{

/***/ 60648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(73354);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(364);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(61020);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(51447);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useConfig.js
var useConfig = __webpack_require__(4396);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pluginId.js
var pluginId = __webpack_require__(18206);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/index.js + 9 modules
var utils = __webpack_require__(63955);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(93415);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(32370);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.mjs
var Layout = __webpack_require__(27997);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ActionLayout.mjs
var ActionLayout = __webpack_require__(37472);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseCheckbox/BaseCheckbox.mjs + 2 modules
var BaseCheckbox = __webpack_require__(73411);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(4987);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(74758);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(74577);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(10701);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(10989);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.mjs
var Divider = __webpack_require__(84366);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cog.mjs
var Cog = __webpack_require__(35318);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/List.mjs
var List = __webpack_require__(86485);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Grid.mjs
var Grid = __webpack_require__(66351);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.mjs
var Pencil = __webpack_require__(26784);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(29206);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(47533);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(37652);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/AssetGridList/index.js + 1 modules
var AssetGridList = __webpack_require__(70572);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/EditAssetDialog/index.js + 13 modules
var EditAssetDialog = __webpack_require__(21050);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/EditFolderDialog/index.js + 5 modules
var EditFolderDialog = __webpack_require__(4114);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/FolderCard/index.js + 9 modules
var FolderCard = __webpack_require__(28742);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/FolderGridList/index.js + 1 modules
var FolderGridList = __webpack_require__(52805);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(70627);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/PaginationFooter/index.js




const PaginationFooter = ({ pagination }) => {
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 6 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "flex-end", justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(dist/* PageSizeURLQuery */.v4, null), /* @__PURE__ */ react.createElement(dist/* PaginationURLQuery */.tU, { pagination })));
};
PaginationFooter.defaultProps = {
  pagination: {
    pageCount: 0,
    pageSize: 10,
    total: 0
  }
};
PaginationFooter.propTypes = {
  pagination: prop_types_default().shape({
    page: (prop_types_default()).number,
    pageCount: (prop_types_default()).number,
    pageSize: (prop_types_default()).number,
    total: (prop_types_default()).number
  })
};

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/SortPicker/index.js
var SortPicker = __webpack_require__(45687);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/TableList/index.js + 4 modules
var TableList = __webpack_require__(22682);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/UploadAssetDialog/UploadAssetDialog.js + 7 modules
var UploadAssetDialog = __webpack_require__(19839);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/constants.js
var constants = __webpack_require__(11727);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useAssets.js
var useAssets = __webpack_require__(54314);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useFolder.js
var useFolder = __webpack_require__(40426);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useFolders.js
var useFolders = __webpack_require__(41801);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useMediaLibraryPermissions.js
var useMediaLibraryPermissions = __webpack_require__(60269);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(93593);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48102);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.mjs
var Trash = __webpack_require__(78665);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useBulkRemove.js
var useBulkRemove = __webpack_require__(29731);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary/components/BulkDeleteButton.js








const BulkDeleteButton = ({ selected, onSuccess }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [showConfirmDialog, setShowConfirmDialog] = (0,react.useState)(false);
  const { isLoading, remove } = (0,useBulkRemove/* useBulkRemove */.K)();
  const handleConfirmRemove = async () => {
    await remove(selected);
    onSuccess();
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Button/* Button */.z,
    {
      variant: "danger-light",
      size: "S",
      startIcon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null),
      onClick: () => setShowConfirmDialog(true)
    },
    formatMessage({ id: "global.delete", defaultMessage: "Delete" })
  ), /* @__PURE__ */ react.createElement(
    dist/* ConfirmDialog */.QH,
    {
      isConfirmButtonLoading: isLoading,
      isOpen: showConfirmDialog,
      onToggleDialog: () => setShowConfirmDialog(false),
      onConfirm: handleConfirmRemove
    }
  ));
};
BulkDeleteButton.propTypes = {
  selected: prop_types_default().arrayOf(constants/* AssetDefinition */.pw, constants/* FolderDefinition */.nx).isRequired,
  onSuccess: (prop_types_default()).func.isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Folder.mjs
var Folder = __webpack_require__(61287);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.mjs
var ModalLayout = __webpack_require__(5938);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.mjs
var ModalBody = __webpack_require__(15244);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.mjs + 1 modules
var Loader = __webpack_require__(77970);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.mjs
var ModalHeader = __webpack_require__(6918);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid_Grid = __webpack_require__(23298);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.mjs
var FieldLabel = __webpack_require__(2878);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.mjs
var ModalFooter = __webpack_require__(35250);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(71563);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(10124);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(40464);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useBulkMove.js




const useBulkMove = () => {
  const toggleNotification = (0,dist/* useNotification */.lm)();
  const queryClient = (0,es.useQueryClient)();
  const { post } = (0,dist/* useFetchClient */.kY)();
  const bulkMoveQuery = ({ destinationFolderId, filesAndFolders }) => {
    const payload = filesAndFolders.reduce((acc, selected) => {
      const { id, type } = selected;
      const key = type === "asset" ? "fileIds" : "folderIds";
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(id);
      return acc;
    }, {});
    return post("/upload/actions/bulk-move", { ...payload, destinationFolderId });
  };
  const mutation = (0,es.useMutation)(bulkMoveQuery, {
    onSuccess(res) {
      const {
        data: { data }
      } = res;
      if (data?.files?.length > 0) {
        queryClient.refetchQueries([pluginId/* default */.Z, "assets"], { active: true });
        queryClient.refetchQueries([pluginId/* default */.Z, "asset-count"], { active: true });
      }
      queryClient.refetchQueries([pluginId/* default */.Z, "folders"], { active: true });
      toggleNotification({
        type: "success",
        message: {
          id: (0,utils/* getTrad */.OB)("modal.move.success-label"),
          defaultMessage: "Elements have been moved successfully."
        }
      });
    }
  });
  const move = (destinationFolderId, filesAndFolders) => mutation.mutateAsync({ destinationFolderId, filesAndFolders });
  return { ...mutation, move };
};

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useFolderStructure.js + 1 modules
var useFolderStructure = __webpack_require__(81138);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/SelectTree/index.js + 4 modules
var SelectTree = __webpack_require__(71381);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/BulkMoveDialog/BulkMoveDialog.js












const BulkMoveDialog = ({ onClose, selected, currentFolder }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { data: folderStructure, isLoading } = (0,useFolderStructure/* useFolderStructure */.v)();
  const { move } = useBulkMove();
  if (!folderStructure) {
    return null;
  }
  const handleSubmit = async (values, { setErrors }) => {
    try {
      await move(values.destination.value, selected);
      onClose();
    } catch (error) {
      const normalizedError = (0,dist/* normalizeAPIError */.OT)(error);
      const formikErrors = normalizedError.errors.reduce((acc, error2) => {
        acc[error2.values?.path?.length || "destination"] = error2.defaultMessage;
        return acc;
      }, {});
      if (!isEmpty_default()(formikErrors)) {
        setErrors(formikErrors);
      }
    }
  };
  const handleClose = () => {
    onClose();
  };
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose: handleClose, labelledBy: "title" }, /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center", paddingTop: 4, paddingBottom: 4 }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, null, formatMessage({
      id: (0,utils/* getTrad */.OB)("content.isLoading"),
      defaultMessage: "Content is loading."
    })))));
  }
  const initialFormData = {
    destination: {
      value: currentFolder?.id || "",
      label: currentFolder?.name || folderStructure[0].label
    }
  };
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose: handleClose, labelledBy: "title" }, /* @__PURE__ */ react.createElement(formik_esm/* Formik */.J9, { validateOnChange: false, onSubmit: handleSubmit, initialValues: initialFormData }, ({ values, errors, setFieldValue }) => /* @__PURE__ */ react.createElement(dist/* Form */.l0, { noValidate: true }, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "title" }, formatMessage({
    id: (0,utils/* getTrad */.OB)("modal.folder.move.title"),
    defaultMessage: "Move elements to"
  }))), /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(Grid_Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { xs: 12, col: 12 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, { htmlFor: "folder-destination" }, formatMessage({
    id: (0,utils/* getTrad */.OB)("form.input.label.folder-location"),
    defaultMessage: "Location"
  })), /* @__PURE__ */ react.createElement(
    SelectTree/* default */.Z,
    {
      options: folderStructure,
      onChange: (value) => {
        setFieldValue("destination", value);
      },
      defaultValue: values.destination,
      name: "destination",
      menuPortalTarget: document.querySelector("body"),
      inputId: "folder-destination",
      error: errors?.destination,
      ariaErrorMessage: "destination-error"
    }
  ), errors.destination && /* @__PURE__ */ react.createElement(
    Typography/* Typography */.Z,
    {
      variant: "pi",
      as: "p",
      id: "folder-destination-error",
      textColor: "danger600"
    },
    errors.destination
  ))))), /* @__PURE__ */ react.createElement(
    ModalFooter/* ModalFooter */.m,
    {
      startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: handleClose, variant: "tertiary", name: "cancel" }, formatMessage({ id: "cancel", defaultMessage: "Cancel" })),
      endActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit", loading: isLoading }, formatMessage({ id: "modal.folder.move.submit", defaultMessage: "Move" }))
    }
  ))));
};
BulkMoveDialog.defaultProps = {
  currentFolder: void 0
};
BulkMoveDialog.propTypes = {
  onClose: (prop_types_default()).func.isRequired,
  currentFolder: constants/* FolderDefinition */.nx,
  selected: prop_types_default().arrayOf(constants/* FolderDefinition */.nx, constants/* AssetDefinition */.pw).isRequired
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/BulkMoveDialog/index.js


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary/components/BulkMoveButton.js







const BulkMoveButton = ({ selected, onSuccess, currentFolder }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const [showConfirmDialog, setShowConfirmDialog] = (0,react.useState)(false);
  const handleConfirmMove = () => {
    setShowConfirmDialog(false);
    onSuccess();
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Button/* Button */.z,
    {
      variant: "secondary",
      size: "S",
      startIcon: /* @__PURE__ */ react.createElement(Folder/* default */.Z, null),
      onClick: () => setShowConfirmDialog(true)
    },
    formatMessage({ id: "global.move", defaultMessage: "Move" })
  ), showConfirmDialog && /* @__PURE__ */ react.createElement(
    BulkMoveDialog,
    {
      currentFolder,
      onClose: handleConfirmMove,
      selected
    }
  ));
};
BulkMoveButton.defaultProps = {
  currentFolder: void 0
};
BulkMoveButton.propTypes = {
  onSuccess: (prop_types_default()).func.isRequired,
  currentFolder: constants/* FolderDefinition */.nx,
  selected: prop_types_default().arrayOf(constants/* AssetDefinition */.pw, constants/* FolderDefinition */.nx).isRequired
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary/components/BulkActions.js








const BulkActions = ({ selected, onSuccess, currentFolder }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2, paddingBottom: 5 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "epsilon", textColor: "neutral600" }, formatMessage(
    {
      id: (0,getTrad/* default */.Z)("list.assets.selected"),
      defaultMessage: "{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"
    },
    {
      numberFolders: selected.filter(({ type }) => type === "folder").length,
      numberAssets: selected.filter(({ type }) => type === "asset").length
    }
  )), /* @__PURE__ */ react.createElement(BulkDeleteButton, { selected, onSuccess }), /* @__PURE__ */ react.createElement(BulkMoveButton, { currentFolder, selected, onSuccess }));
};
BulkActions.defaultProps = {
  currentFolder: void 0
};
BulkActions.propTypes = {
  onSuccess: (prop_types_default()).func.isRequired,
  currentFolder: constants/* FolderDefinition */.nx,
  selected: prop_types_default().arrayOf(constants/* AssetDefinition */.pw, constants/* FolderDefinition */.nx).isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyPermissions.mjs
var EmptyPermissions = __webpack_require__(6162);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.mjs
var Plus = __webpack_require__(36938);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/EmptyAssets/index.js + 1 modules
var EmptyAssets = __webpack_require__(54053);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary/components/EmptyOrNoPermissions.js







const getContentIntlMessage = ({ isFiltering, canCreate, canRead }) => {
  if (isFiltering) {
    return {
      id: "list.assets-empty.title-withSearch",
      defaultMessage: "There are no elements with the applied filters"
    };
  }
  if (canRead) {
    if (canCreate) {
      return {
        id: "list.assets.empty-upload",
        defaultMessage: "Upload your first assets..."
      };
    }
    return {
      id: "list.assets.empty",
      defaultMessage: "Media Library is empty"
    };
  }
  return {
    id: "header.actions.no-permissions",
    defaultMessage: "No permissions to view"
  };
};
const EmptyOrNoPermissions = ({ canCreate, isFiltering, canRead, onActionClick }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const content = getContentIntlMessage({ isFiltering, canCreate, canRead });
  return /* @__PURE__ */ react.createElement(
    EmptyAssets/* EmptyAssets */.i,
    {
      icon: !canRead ? EmptyPermissions/* default */.Z : null,
      action: canCreate && !isFiltering && /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "secondary", startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null), onClick: onActionClick }, formatMessage({
        id: (0,utils/* getTrad */.OB)("header.actions.add-assets"),
        defaultMessage: "Add new assets"
      })),
      content: formatMessage({
        ...content,
        id: (0,utils/* getTrad */.OB)(content.id)
      })
    }
  );
};
EmptyOrNoPermissions.propTypes = {
  canCreate: (prop_types_default()).bool.isRequired,
  canRead: (prop_types_default()).bool.isRequired,
  isFiltering: (prop_types_default()).bool.isRequired,
  onActionClick: (prop_types_default()).func.isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Filter.mjs
var Filter = __webpack_require__(57121);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/FilterList/index.js + 1 modules
var FilterList = __webpack_require__(99398);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/FilterPopover/index.js + 2 modules
var FilterPopover = __webpack_require__(32269);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/displayedFilters.js
var displayedFilters = __webpack_require__(62082);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary/components/Filters.js








const Filters = () => {
  const buttonRef = (0,react.useRef)(null);
  const [isVisible, setVisible] = (0,react.useState)(false);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const [{ query }, setQuery] = (0,dist/* useQueryParams */.Kx)();
  const filters = query?.filters?.$and || [];
  const toggleFilter = () => setVisible((prev) => !prev);
  const handleRemoveFilter = (nextFilters) => {
    setQuery({ filters: { $and: nextFilters }, page: 1 });
  };
  const handleSubmit = (filters2) => {
    trackUsage("didFilterMediaLibraryElements", {
      location: "content-manager",
      filter: Object.keys(filters2[filters2.length - 1])[0]
    });
    setQuery({ filters: { $and: filters2 }, page: 1 });
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Button/* Button */.z,
    {
      variant: "tertiary",
      ref: buttonRef,
      startIcon: /* @__PURE__ */ react.createElement(Filter/* default */.Z, null),
      onClick: toggleFilter,
      size: "S"
    },
    formatMessage({ id: "app.utils.filters", defaultMessage: "Filters" })
  ), isVisible && /* @__PURE__ */ react.createElement(
    FilterPopover/* default */.Z,
    {
      displayedFilters: displayedFilters/* default */.Z,
      filters,
      onSubmit: handleSubmit,
      onToggle: toggleFilter,
      source: buttonRef
    }
  ), /* @__PURE__ */ react.createElement(
    FilterList/* default */.Z,
    {
      appliedFilters: filters,
      filtersSchema: displayedFilters/* default */.Z,
      onRemoveFilter: handleRemoveFilter
    }
  ));
};

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(27875);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Link/Link.mjs
var Link = __webpack_require__(68412);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.mjs
var ArrowLeft = __webpack_require__(76827);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/Breadcrumbs/index.js + 4 modules
var Breadcrumbs = __webpack_require__(94092);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary/components/Header.js











const Header = ({
  breadcrumbs,
  canCreate,
  folder,
  onToggleEditFolderDialog,
  onToggleUploadAssetDialog
}) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { pathname } = (0,react_router/* useLocation */.TH)();
  const [{ query }] = (0,dist/* useQueryParams */.Kx)();
  const backQuery = {
    ...query,
    folder: folder?.parent?.id ?? void 0,
    folderPath: folder?.parent?.path ?? void 0
  };
  return /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("plugin.name"),
        defaultMessage: `Media Library`
      }),
      subtitle: breadcrumbs && folder && /* @__PURE__ */ react.createElement(
        Breadcrumbs/* Breadcrumbs */.O,
        {
          as: "nav",
          label: formatMessage({
            id: (0,utils/* getTrad */.OB)("header.breadcrumbs.nav.label"),
            defaultMessage: "Folders navigation"
          }),
          breadcrumbs,
          currentFolderId: folder?.id
        }
      ),
      navigationAction: folder && /* @__PURE__ */ react.createElement(
        Link/* Link */.r,
        {
          startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null),
          to: `${pathname}?${(0,lib.stringify)(backQuery, { encode: false })}`
        },
        formatMessage({
          id: (0,utils/* getTrad */.OB)("header.actions.folder-level-up"),
          defaultMessage: "Back"
        })
      ),
      primaryAction: canCreate && /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2 }, /* @__PURE__ */ react.createElement(Button/* Button */.z, { startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null), variant: "secondary", onClick: onToggleEditFolderDialog }, formatMessage({
        id: (0,utils/* getTrad */.OB)("header.actions.add-folder"),
        defaultMessage: "Add new folder"
      })), /* @__PURE__ */ react.createElement(Button/* Button */.z, { startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null), onClick: onToggleUploadAssetDialog }, formatMessage({
        id: (0,utils/* getTrad */.OB)("header.actions.add-assets"),
        defaultMessage: "Add new assets"
      })))
    }
  );
};
Header.defaultProps = {
  breadcrumbs: false,
  folder: null
};
Header.propTypes = {
  breadcrumbs: prop_types_default().oneOfType([constants/* BreadcrumbsDefinition */.Fv, (prop_types_default()).bool]),
  canCreate: (prop_types_default()).bool.isRequired,
  folder: constants/* FolderDefinition */.nx,
  onToggleEditFolderDialog: (prop_types_default()).func.isRequired,
  onToggleUploadAssetDialog: (prop_types_default()).func.isRequired
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary/index.js



























const BoxWithHeight = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  height: ${32 / 16}rem;
  display: flex;
  align-items: center;
`;
const TypographyMaxWidth = (0,styled_components_browser_esm/* default */.ZP)((0,Typography/* Typography */.Z))`
  max-width: 100%;
`;
const ActionContainer = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  svg {
    path {
      fill: ${({ theme }) => theme.colors.neutral500};
    }
  }
`;
const MediaLibrary = () => {
  const { push } = (0,react_router/* useHistory */.k6)();
  const {
    canRead,
    canCreate,
    canUpdate,
    canCopyLink,
    canDownload,
    isLoading: permissionsLoading
  } = (0,useMediaLibraryPermissions/* useMediaLibraryPermissions */.y)();
  const currentFolderToEditRef = (0,react.useRef)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { pathname } = (0,react_router/* useLocation */.TH)();
  const { trackUsage } = (0,dist/* useTracking */.rS)();
  const [{ query }, setQuery] = (0,dist/* useQueryParams */.Kx)();
  const isFiltering = Boolean(query._q || query.filters);
  const [view, setView] = (0,dist/* usePersistentState */.Yw)(constants/* localStorageKeys */.uf.view, constants/* viewOptions */.Uk.GRID);
  const isGridView = view === constants/* viewOptions */.Uk.GRID;
  const {
    data: assetsData,
    isLoading: assetsLoading,
    errors: assetsError
  } = (0,useAssets/* useAssets */.L)({
    skipWhen: !canRead,
    query
  });
  const {
    data: foldersData,
    isLoading: foldersLoading,
    errors: foldersError
  } = (0,useFolders/* useFolders */.j)({
    enabled: canRead && assetsData?.pagination?.page === 1 && !(0,utils/* containsAssetFilter */.rV)(query),
    query
  });
  const {
    data: currentFolder,
    isLoading: isCurrentFolderLoading,
    error: currentFolderError
  } = (0,useFolder/* useFolder */.W)(query?.folder, {
    enabled: canRead && !!query?.folder
  });
  if (currentFolderError?.response?.status === 404) {
    push(pathname);
  }
  const folders = foldersData?.map((folder) => ({
    ...folder,
    type: "folder",
    folderURL: (0,utils/* getFolderURL */.Km)(pathname, query, folder.id),
    isSelectable: canUpdate
  })) ?? [];
  const folderCount = folders?.length || 0;
  const assets = assetsData?.results?.map((asset) => ({ ...asset, type: "asset", isSelectable: canUpdate })) || [];
  const assetCount = assets?.length ?? 0;
  const totalAssetCount = assetsData?.pagination?.total;
  const isLoading = isCurrentFolderLoading || foldersLoading || permissionsLoading || assetsLoading;
  const [showUploadAssetDialog, setShowUploadAssetDialog] = (0,react.useState)(false);
  const [showEditFolderDialog, setShowEditFolderDialog] = (0,react.useState)(false);
  const [assetToEdit, setAssetToEdit] = (0,react.useState)(void 0);
  const [folderToEdit, setFolderToEdit] = (0,react.useState)(void 0);
  const [selected, { selectOne, selectAll }] = (0,dist/* useSelectionState */.Uq)(["type", "id"], []);
  const indeterminateBulkSelect = selected?.length > 0 && selected?.length !== assetCount + folderCount;
  const toggleUploadAssetDialog = () => setShowUploadAssetDialog((prev) => !prev);
  const toggleEditFolderDialog = ({ created = false } = {}) => {
    if (created && query?.page !== "1") {
      setQuery({
        ...query,
        page: 1
      });
    }
    setShowEditFolderDialog((prev) => !prev);
  };
  const handleBulkSelect = (event, elements) => {
    if (event.target.checked) {
      trackUsage("didSelectAllMediaLibraryElements");
    }
    selectAll(elements);
  };
  const handleChangeSort = (value) => {
    trackUsage("didSortMediaLibraryElements", {
      location: "upload",
      sort: value
    });
    setQuery({ sort: value });
  };
  const handleEditFolder = (folder) => {
    setFolderToEdit(folder);
    setShowEditFolderDialog(true);
  };
  const handleEditFolderClose = (payload) => {
    setFolderToEdit(null);
    toggleEditFolderDialog(payload);
    if (currentFolderToEditRef.current) {
      currentFolderToEditRef.current.focus();
    }
  };
  const handleAssetDeleted = (numberOfAssets) => {
    if (numberOfAssets === assetCount && assetsData.pagination.page === assetsData.pagination.pageCount && assetsData.pagination.page > 1) {
      setQuery({
        ...query,
        page: assetsData.pagination.page - 1
      });
    }
  };
  const handleBulkActionSuccess = () => {
    selectAll();
    handleAssetDeleted(selected.length);
  };
  (0,dist/* useFocusWhenNavigate */.go)();
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(
    Header,
    {
      breadcrumbs: !isCurrentFolderLoading && (0,utils/* getBreadcrumbDataML */.M4)(currentFolder, { pathname, query }),
      canCreate,
      onToggleEditFolderDialog: toggleEditFolderDialog,
      onToggleUploadAssetDialog: toggleUploadAssetDialog,
      folder: currentFolder
    }
  ), /* @__PURE__ */ react.createElement(
    ActionLayout/* ActionLayout */.Z,
    {
      startActions: /* @__PURE__ */ react.createElement(react.Fragment, null, canUpdate && isGridView && (assetCount > 0 || folderCount > 0) && /* @__PURE__ */ react.createElement(
        BoxWithHeight,
        {
          paddingLeft: 2,
          paddingRight: 2,
          background: "neutral0",
          hasRadius: true,
          borderColor: "neutral200"
        },
        /* @__PURE__ */ react.createElement(
          BaseCheckbox/* BaseCheckbox */.C,
          {
            "aria-label": formatMessage({
              id: (0,utils/* getTrad */.OB)("bulk.select.label"),
              defaultMessage: "Select all folders & assets"
            }),
            indeterminate: indeterminateBulkSelect,
            value: (assetCount > 0 || folderCount > 0) && selected.length === assetCount + folderCount,
            onChange: (e) => handleBulkSelect(e, [...assets, ...folders])
          }
        )
      ), canRead && isGridView && /* @__PURE__ */ react.createElement(SortPicker/* default */.Z, { value: query?.sort, onChangeSort: handleChangeSort }), canRead && /* @__PURE__ */ react.createElement(Filters, null)),
      endActions: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(dist/* CheckPermissions */.jW, { permissions: constants/* PERMISSIONS */._I.configureView }, /* @__PURE__ */ react.createElement(ActionContainer, { paddingTop: 1, paddingBottom: 1 }, /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          forwardedAs: react_router_dom/* Link */.rU,
          to: {
            pathname: `${pathname}/configuration`,
            search: (0,lib.stringify)(query, { encode: false })
          },
          icon: /* @__PURE__ */ react.createElement(Cog/* default */.Z, null),
          label: formatMessage({
            id: "app.links.configure-view",
            defaultMessage: "Configure the view"
          })
        }
      ))), /* @__PURE__ */ react.createElement(ActionContainer, { paddingTop: 1, paddingBottom: 1 }, /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          icon: isGridView ? /* @__PURE__ */ react.createElement(List/* default */.Z, null) : /* @__PURE__ */ react.createElement(Grid/* default */.Z, null),
          label: isGridView ? formatMessage({
            id: (0,utils/* getTrad */.OB)("view-switch.list"),
            defaultMessage: "List View"
          }) : formatMessage({
            id: (0,utils/* getTrad */.OB)("view-switch.grid"),
            defaultMessage: "Grid View"
          }),
          onClick: () => setView(isGridView ? constants/* viewOptions */.Uk.LIST : constants/* viewOptions */.Uk.GRID)
        }
      )), /* @__PURE__ */ react.createElement(
        dist/* SearchURLQuery */.m,
        {
          label: formatMessage({
            id: (0,utils/* getTrad */.OB)("search.label"),
            defaultMessage: "Search for an asset"
          }),
          trackedEvent: "didSearchMediaLibraryElements",
          trackedEventDetails: { location: "upload" }
        }
      ))
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, selected.length > 0 && /* @__PURE__ */ react.createElement(
    BulkActions,
    {
      currentFolder,
      selected,
      onSuccess: handleBulkActionSuccess
    }
  ), isLoading && /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null), (assetsError || foldersError) && /* @__PURE__ */ react.createElement(dist/* AnErrorOccurred */.Hn, null), folderCount === 0 && assetCount === 0 && /* @__PURE__ */ react.createElement(
    EmptyOrNoPermissions,
    {
      canCreate,
      canRead,
      isFiltering,
      onActionClick: toggleUploadAssetDialog
    }
  ), canRead && !isGridView && (assetCount > 0 || folderCount > 0) && /* @__PURE__ */ react.createElement(
    TableList/* TableList */.b,
    {
      assetCount,
      folderCount,
      indeterminate: indeterminateBulkSelect,
      onChangeSort: handleChangeSort,
      onChangeFolder: (folderID, folderPath) => push((0,utils/* getFolderURL */.Km)(pathname, query, { folder: folderID, folderPath })),
      onEditAsset: setAssetToEdit,
      onEditFolder: handleEditFolder,
      onSelectOne: selectOne,
      onSelectAll: handleBulkSelect,
      rows: [...folders, ...assets],
      selected,
      shouldDisableBulkSelect: !canUpdate,
      sortQuery: query?.sort ?? ""
    }
  ), canRead && isGridView && /* @__PURE__ */ react.createElement(react.Fragment, null, folderCount > 0 && /* @__PURE__ */ react.createElement(
    FolderGridList/* FolderGridList */.a,
    {
      title: (
        // Folders title should only appear if:
        // user is filtering and there are assets to display, to divide both type of elements
        // user is not filtering
        (isFiltering && assetCount > 0 || !isFiltering) && formatMessage(
          {
            id: (0,utils/* getTrad */.OB)("list.folders.title"),
            defaultMessage: "Folders ({count})"
          },
          { count: folderCount }
        ) || ""
      )
    },
    folders.map((folder) => {
      const selectedFolders = selected.filter(({ type }) => type === "folder");
      const isSelected = !!selectedFolders.find(
        (currentFolder2) => currentFolder2.id === folder.id
      );
      const url = (0,utils/* getFolderURL */.Km)(pathname, query, {
        folder: folder?.id,
        folderPath: folder?.path
      });
      return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 3, key: `folder-${folder.id}` }, /* @__PURE__ */ react.createElement(
        FolderCard/* FolderCard */.Ac,
        {
          ref: folderToEdit && folder.id === folderToEdit.id ? currentFolderToEditRef : void 0,
          ariaLabel: folder.name,
          id: `folder-${folder.id}`,
          to: url,
          startAction: selectOne && folder.isSelectable ? /* @__PURE__ */ react.createElement(
            FolderCard/* FolderCardCheckbox */.MM,
            {
              "data-testid": `folder-checkbox-${folder.id}`,
              value: isSelected,
              onChange: () => selectOne(folder)
            }
          ) : null,
          cardActions: /* @__PURE__ */ react.createElement(
            IconButton/* IconButton */.h,
            {
              icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null),
              "aria-label": formatMessage({
                id: (0,utils/* getTrad */.OB)("list.folder.edit"),
                defaultMessage: "Edit folder"
              }),
              onClick: () => handleEditFolder(folder)
            }
          )
        },
        /* @__PURE__ */ react.createElement(FolderCard/* FolderCardBody */.Bu, null, /* @__PURE__ */ react.createElement(FolderCard/* FolderCardBodyAction */.u6, { to: url }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { as: "h2", direction: "column", alignItems: "start", maxWidth: "100%" }, /* @__PURE__ */ react.createElement(TypographyMaxWidth, { fontWeight: "semiBold", ellipsis: true }, folder.name, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, ":")), /* @__PURE__ */ react.createElement(
          TypographyMaxWidth,
          {
            as: "span",
            textColor: "neutral600",
            variant: "pi",
            ellipsis: true
          },
          formatMessage(
            {
              id: (0,utils/* getTrad */.OB)("list.folder.subtitle"),
              defaultMessage: "{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"
            },
            {
              folderCount: folder.children.count,
              filesCount: folder.files.count
            }
          )
        ))))
      ));
    })
  ), assetCount > 0 && folderCount > 0 && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 6, paddingBottom: 4 }, /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null)), assetCount > 0 && /* @__PURE__ */ react.createElement(
    AssetGridList/* AssetGridList */.r,
    {
      assets,
      onEditAsset: setAssetToEdit,
      onSelectAsset: selectOne,
      selectedAssets: selected.filter(({ type }) => type === "asset"),
      title: (
        // Assets title should only appear if:
        // - user is not filtering
        // - user is filtering and there are folders to display, to separate them
        // - user is on page 1 since folders won't appear on any other page than the first one (no need to visually separate them)
        (!isFiltering || isFiltering && folderCount > 0) && assetsData?.pagination?.page === 1 && formatMessage(
          {
            id: (0,utils/* getTrad */.OB)("list.assets.title"),
            defaultMessage: "Assets ({count})"
          },
          { count: totalAssetCount }
        ) || ""
      )
    }
  )), assetsData?.pagination && /* @__PURE__ */ react.createElement(PaginationFooter, { pagination: assetsData.pagination }))), showUploadAssetDialog && /* @__PURE__ */ react.createElement(
    UploadAssetDialog/* UploadAssetDialog */.x,
    {
      onClose: toggleUploadAssetDialog,
      trackedLocation: "upload",
      folderId: query?.folder
    }
  ), showEditFolderDialog && /* @__PURE__ */ react.createElement(
    EditFolderDialog/* EditFolderDialog */.f,
    {
      onClose: handleEditFolderClose,
      folder: folderToEdit,
      parentFolderId: query?.folder,
      location: "upload"
    }
  ), assetToEdit && /* @__PURE__ */ react.createElement(
    EditAssetDialog/* EditAssetDialog */.s,
    {
      onClose: (editedAsset) => {
        if (editedAsset === null) {
          handleAssetDeleted(1);
        }
        setAssetToEdit(void 0);
      },
      asset: assetToEdit,
      canUpdate,
      canCopyLink,
      canDownload,
      trackedLocation: "upload"
    }
  ));
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/index.js










const ConfigureTheView = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | Upload_ConfigureTheView */ 9514).then(__webpack_require__.bind(__webpack_require__, 47670))
);
const Upload = () => {
  const {
    config: { isLoading, isError, data: config }
  } = (0,useConfig/* useConfig */.Z)();
  const [{ rawQuery }, setQuery] = (0,dist/* useQueryParams */.Kx)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const title = formatMessage({ id: (0,utils/* getTrad */.OB)("plugin.name"), defaultMessage: "Media Library" });
  (0,react.useEffect)(() => {
    if (isLoading || isError || rawQuery) {
      return;
    }
    setQuery({ sort: config.sort, page: 1, pageSize: config.pageSize });
  }, [isLoading, isError, config, rawQuery, setQuery]);
  (0,dist/* useFocusWhenNavigate */.go)();
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(Helmet/* Helmet */.q, { title }), isLoading && /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null), rawQuery ? /* @__PURE__ */ react.createElement(react.Suspense, { fallback: /* @__PURE__ */ react.createElement(dist/* LoadingIndicatorPage */.dO, null) }, /* @__PURE__ */ react.createElement(react_router/* Switch */.rs, null, /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { exact: true, path: `/plugins/${pluginId/* default */.Z}`, component: MediaLibrary }), /* @__PURE__ */ react.createElement(
    react_router/* Route */.AW,
    {
      exact: true,
      path: `/plugins/${pluginId/* default */.Z}/configuration`,
      render: () => /* @__PURE__ */ react.createElement(ConfigureTheView, { config })
    }
  ))) : null);
};
/* harmony default export */ const App = (Upload);


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

/***/ 73354:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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