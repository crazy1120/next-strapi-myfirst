"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[7649],{

/***/ 40784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ DragLayer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93415);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67621);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_1__);



function getStyle(initialOffset, currentOffset, mouseOffset) {
  if (!initialOffset || !currentOffset || !mouseOffset) {
    return { display: "none" };
  }
  const { x, y } = mouseOffset;
  return {
    transform: `translate(${x}px, ${y}px)`
  };
}
const DragLayer = ({ renderItem }) => {
  const { itemType, isDragging, item, initialOffset, currentOffset, mouseOffset } = (0,react_dnd__WEBPACK_IMPORTED_MODULE_1__.useDragLayer)(
    (monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
      mouseOffset: monitor.getClientOffset()
    })
  );
  if (!isDragging) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x,
    {
      height: "100%",
      left: 0,
      position: "fixed",
      pointerEvents: "none",
      top: 0,
      zIndex: 100,
      width: "100%",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, { style: getStyle(initialOffset, currentOffset, mouseOffset), children: renderItem({ type: itemType, item }) })
    }
  );
};



/***/ }),

/***/ 27661:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);

const WysiwygContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (WysiwygContext)));


/***/ }),

/***/ 21440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  PL: () => (/* reexport */ hooks_useContentTypeLayout),
  Y9: () => (/* reexport */ useDragAndDrop/* useDragAndDrop */.Y),
  zE: () => (/* reexport */ hooks_useFetchContentTypeLayout),
  Ky: () => (/* reexport */ hooks_useFindRedirectionLink),
  fi: () => (/* reexport */ hooks_usePluginsQueryParams),
  zH: () => (/* reexport */ usePrev),
  r5: () => (/* reexport */ hooks_useSyncRbac)
});

// UNUSED EXPORTS: useKeyboardDragAndDrop, useWysiwyg

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(49402);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/pages/EditViewLayoutManager/selectors.js
var selectors = __webpack_require__(25398);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useContentTypeLayout/index.js



const useContentTypeLayout = () => {
  const currentLayout = (0,es/* useSelector */.v9)(selectors/* default */.Z);
  const getComponentLayout = (0,react.useCallback)(
    (componentUid) => {
      return currentLayout?.components?.[componentUid] ?? {};
    },
    [currentLayout]
  );
  return { ...currentLayout, getComponentLayout };
};
/* harmony default export */ const hooks_useContentTypeLayout = (useContentTypeLayout);

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/hooks/useDragAndDrop.js
var useDragAndDrop = __webpack_require__(79116);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 40 modules
var axios = __webpack_require__(5466);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/pages/App/selectors.js
var App_selectors = __webpack_require__(42225);
// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(61815);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useFetchContentTypeLayout/reducer.js

const initialState = {
  error: null,
  isLoading: true,
  layout: {},
  layouts: {}
};
const reducer = (state, action) => (0,immer_esm/* default */.ZP)(state, (draftState) => {
  switch (action.type) {
    case "GET_DATA": {
      draftState.isLoading = true;
      draftState.error = null;
      draftState.layout = {};
      break;
    }
    case "GET_DATA_SUCCEEDED": {
      const contentTypeUid = action.data.contentType.uid;
      draftState.layout = action.data;
      draftState.layouts[contentTypeUid] = action.data;
      draftState.isLoading = false;
      break;
    }
    case "GET_DATA_ERROR": {
      draftState.isLoading = false;
      draftState.error = action.error;
      break;
    }
    case "SET_LAYOUT_FROM_STATE": {
      draftState.error = null;
      draftState.layout = state.layouts[action.uid];
      break;
    }
    case "UPDATE_LAYOUT": {
      const oldLayout = state.layout;
      draftState.layout = {
        ...oldLayout,
        contentType: { uid: oldLayout.contentType.uid, ...action.newLayout.contentType }
      };
      draftState.layouts[oldLayout.contentType.uid] = {
        ...oldLayout,
        contentType: { uid: oldLayout.contentType.uid, ...action.newLayout.contentType }
      };
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const useFetchContentTypeLayout_reducer = (reducer);

// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(8175);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(98934);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(43433);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/utils/index.js + 11 modules
var utils = __webpack_require__(21892);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useFetchContentTypeLayout/utils/formatLayouts.js




const getRelationModel = (targetModel, models) => models.find((model) => model.uid === targetModel);
const formatLayouts = (initialData, models) => {
  const data = createMetasSchema(initialData, models);
  const formattedCTEditLayout = formatLayoutWithMetas(data.contentType, models);
  const formattedListLayout = formatListLayoutWithMetas(data.contentType, data.components);
  set_default()(data, ["contentType", "layouts", "edit"], formattedCTEditLayout);
  set_default()(data, ["contentType", "layouts", "list"], formattedListLayout);
  Object.keys(data.components).forEach((componentUid) => {
    const formattedComponentEditLayout = formatLayoutWithMetas(
      data.components[componentUid],
      models
    );
    set_default()(data, ["components", componentUid, "layouts", "edit"], formattedComponentEditLayout);
  });
  return data;
};
const createMetasSchema = (initialData, models) => {
  const data = (0,utils/* mergeMetasWithSchema */.w8)(cloneDeep_default()(initialData), models, "contentType");
  const { components, contentType } = data;
  const formatMetadatas = (targetSchema) => {
    return Object.keys(targetSchema.metadatas).reduce((acc, current) => {
      const schema = get_default()(targetSchema, ["attributes", current], {});
      let metadatas = targetSchema.metadatas[current];
      if (schema.type === "relation") {
        const relationModel = getRelationModel(schema.targetModel, models);
        const mainFieldName = metadatas.edit.mainField;
        const mainField = {
          name: mainFieldName,
          schema: get_default()(relationModel, ["attributes", mainFieldName])
        };
        metadatas = {
          list: {
            ...metadatas.list,
            mainField
          },
          edit: {
            ...metadatas.edit,
            mainField
          }
        };
      }
      acc[current] = metadatas;
      return acc;
    }, {});
  };
  set_default()(data, ["contentType", "metadatas"], formatMetadatas(contentType));
  Object.keys(components).forEach((compoUID) => {
    const currentCompo = components[compoUID];
    const updatedMetas = formatMetadatas(currentCompo);
    set_default()(data, ["components", compoUID, "metadatas"], updatedMetas);
  });
  return data;
};
const formatLayoutWithMetas = (contentTypeConfiguration, models) => contentTypeConfiguration.layouts.edit.reduce((acc, current) => {
  const row = current.map((attribute) => {
    const fieldSchema = get_default()(contentTypeConfiguration, ["attributes", attribute.name], {});
    const data = {
      ...attribute,
      fieldSchema,
      metadatas: get_default()(contentTypeConfiguration, ["metadatas", attribute.name, "edit"], {})
    };
    if (fieldSchema.type === "relation") {
      const targetModelSchema = getRelationModel(fieldSchema.targetModel, models);
      const targetModelPluginOptions = targetModelSchema.pluginOptions || {};
      set_default()(data, "targetModelPluginOptions", targetModelPluginOptions);
      set_default()(data, "queryInfos", {
        shouldDisplayRelationLink: shouldDisplayRelationLink(
          contentTypeConfiguration,
          attribute.name,
          models
        )
      });
    }
    return data;
  });
  acc.push(row);
  return acc;
}, []);
const formatListLayoutWithMetas = (contentTypeConfiguration, components) => {
  const formatted = contentTypeConfiguration.layouts.list.reduce((acc, current) => {
    const fieldSchema = get_default()(contentTypeConfiguration, ["attributes", current], {});
    const metadatas = get_default()(contentTypeConfiguration, ["metadatas", current, "list"], {});
    const type = fieldSchema.type;
    if (type === "relation") {
      acc.push({ key: `__${current}_key__`, name: current, fieldSchema, metadatas });
      return acc;
    }
    if (type === "component") {
      const component = components[fieldSchema.component];
      const mainFieldName = component.settings.mainField;
      const mainFieldAttribute = component.attributes[mainFieldName];
      acc.push({
        key: `__${current}_key__`,
        name: current,
        fieldSchema,
        metadatas: {
          ...metadatas,
          mainField: {
            ...mainFieldAttribute,
            name: mainFieldName
          }
        }
      });
      return acc;
    }
    acc.push({ key: `__${current}_key__`, name: current, fieldSchema, metadatas });
    return acc;
  }, []);
  return formatted;
};
const shouldDisplayRelationLink = (contentTypeConfiguration, fieldName, models) => {
  const targetModel = get_default()(contentTypeConfiguration, ["attributes", fieldName, "targetModel"], "");
  return getDisplayedModels(models).includes(targetModel);
};
const getDisplayedModels = (models) => models.filter((model) => model.isDisplayed).map(({ uid }) => uid);
/* harmony default export */ const utils_formatLayouts = (formatLayouts);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useFetchContentTypeLayout/index.js







const useFetchContentTypeLayout = (contentTypeUID) => {
  const [{ error, isLoading, layout, layouts }, dispatch] = (0,react.useReducer)(useFetchContentTypeLayout_reducer, initialState);
  const schemasSelector = (0,react.useMemo)(App_selectors/* makeSelectModelAndComponentSchemas */.Vo, []);
  const { schemas } = (0,es/* useSelector */.v9)((state) => schemasSelector(state), es/* shallowEqual */.wU);
  const isMounted = (0,react.useRef)(true);
  const { get } = (0,dist/* useFetchClient */.kY)();
  const getData = (0,react.useCallback)(
    async (uid, source) => {
      if (layouts[uid]) {
        dispatch({ type: "SET_LAYOUT_FROM_STATE", uid });
        return;
      }
      dispatch({ type: "GET_DATA" });
      try {
        const {
          data: { data }
        } = await get(`/content-manager/content-types/${uid}/configuration`, {
          cancelToken: source.token
        });
        dispatch({
          type: "GET_DATA_SUCCEEDED",
          data: utils_formatLayouts(data, schemas)
        });
      } catch (error2) {
        if (axios["default"].isCancel(error2)) {
          return;
        }
        if (isMounted.current) {
          console.error(error2);
        }
        if (isMounted.current) {
          dispatch({ type: "GET_DATA_ERROR", error: error2 });
        }
      }
    },
    [layouts, schemas, get]
  );
  (0,react.useEffect)(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  (0,react.useEffect)(() => {
    const CancelToken = axios["default"].CancelToken;
    const source = CancelToken.source();
    getData(contentTypeUID, source);
    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, [contentTypeUID, getData]);
  const updateLayout = (0,react.useCallback)(
    (data) => {
      dispatch({
        type: "UPDATE_LAYOUT",
        newLayout: utils_formatLayouts(data, schemas)
      });
    },
    [schemas]
  );
  return {
    error,
    isLoading,
    layout,
    updateLayout
  };
};
/* harmony default export */ const hooks_useFetchContentTypeLayout = (useFetchContentTypeLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useFindRedirectionLink/selectors.js
const selectMenuLinks = (state) => {
  const cmState = state["content-manager_app"];
  return cmState.collectionTypeLinks;
};
/* harmony default export */ const useFindRedirectionLink_selectors = (selectMenuLinks);

// EXTERNAL MODULE: ./node_modules/lodash/isObject.js
var isObject = __webpack_require__(3243);
var isObject_default = /*#__PURE__*/__webpack_require__.n(isObject);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(29206);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useFindRedirectionLink/utils/getRedirectionLink.js



const mergeParams = (initialParams, params) => {
  return Object.keys(initialParams).reduce((acc, current) => {
    const intialValue = initialParams[current];
    const nextValue = get_default()(params, [current], intialValue);
    if (isObject_default()(intialValue)) {
      return { ...acc, [current]: mergeParams(intialValue, nextValue) };
    }
    acc[current] = nextValue;
    return acc;
  }, {});
};
const getRedirectionLink = (links, slug, rawQuery) => {
  const matchingLink = links.find(({ to: to2 }) => to2.includes(slug));
  if (!matchingLink) {
    return "/";
  }
  const { to, search } = matchingLink;
  const searchQueryParams = (0,lib.parse)(search);
  const currentQueryParams = (0,lib.parse)(rawQuery.substring(1));
  const mergedParams = mergeParams(searchQueryParams, currentQueryParams);
  const link = `${to}?${(0,lib.stringify)(mergedParams, { encode: false })}`;
  return link;
};
/* harmony default export */ const utils_getRedirectionLink = (getRedirectionLink);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useFindRedirectionLink/index.js




const useFindRedirectionLink = (slug) => {
  const [{ rawQuery }] = (0,dist/* useQueryParams */.Kx)();
  const collectionTypesMenuLinks = (0,es/* useSelector */.v9)(useFindRedirectionLink_selectors);
  const redirectionLink = utils_getRedirectionLink(collectionTypesMenuLinks, slug, rawQuery);
  return redirectionLink;
};
/* harmony default export */ const hooks_useFindRedirectionLink = (useFindRedirectionLink);

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/hooks/useKeyboardDragAndDrop.js
var useKeyboardDragAndDrop = __webpack_require__(25950);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(51447);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/usePluginsQueryParams/index.js


const usePluginsQueryParams = () => {
  const { search } = (0,react_router/* useLocation */.TH)();
  const query = search ? (0,lib.parse)(search.substring(1)) : {};
  return query.plugins ? (0,lib.stringify)({ plugins: query.plugins }, { encode: false }) : "";
};
/* harmony default export */ const hooks_usePluginsQueryParams = (usePluginsQueryParams);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/usePrev.js

const usePrev = (value) => {
  const ref = (0,react.useRef)();
  (0,react.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/hooks/useSyncRbac/constants.js
var constants = __webpack_require__(14996);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useSyncRbac/actions.js

const setPermissions = (permissions, plugins, containerName) => {
  return {
    type: constants/* SET_PERMISSIONS */.m,
    permissions,
    __meta__: {
      plugins,
      containerName
    }
  };
};
const resetPermissions = () => ({ type: constants/* RESET_PERMISSIONS */.Q });

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useSyncRbac/selectors.js
const selectPermissions = (state) => state["content-manager_rbacManager"].permissions;
const selectCollectionTypePermissions = (state) => state.rbacProvider.collectionTypesRelatedPermissions;

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useSyncRbac/index.js




const useSyncRbac = (query, collectionTypeUID, containerName = "listView") => {
  const dispatch = (0,es/* useDispatch */.I0)();
  const collectionTypesRelatedPermissions = (0,es/* useSelector */.v9)(selectCollectionTypePermissions);
  const permissions = (0,es/* useSelector */.v9)(selectPermissions);
  const relatedPermissions = collectionTypesRelatedPermissions[collectionTypeUID];
  (0,react.useEffect)(() => {
    if (relatedPermissions) {
      dispatch(setPermissions(relatedPermissions, query ? query.plugins : null, containerName));
      return () => {
        dispatch(resetPermissions());
      };
    }
    return () => {
    };
  }, [relatedPermissions, dispatch, query, containerName]);
  const isPermissionMismatch = permissions?.some((permission) => permission.subject !== collectionTypeUID) ?? true;
  return {
    isValid: permissions && !isPermissionMismatch,
    permissions
  };
};
/* harmony default export */ const hooks_useSyncRbac = (useSyncRbac);

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/contexts/Wysiwyg.js
var Wysiwyg = __webpack_require__(27661);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useWysiwyg.js


const useWysiwyg = () => useContext(WysiwygContext);
/* harmony default export */ const hooks_useWysiwyg = ((/* unused pure expression or super */ null && (useWysiwyg)));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/index.js











/***/ }),

/***/ 79116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ useDragAndDrop)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67621);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useKeyboardDragAndDrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25950);



const useDragAndDrop = (active, {
  type = "STRAPI_DND",
  index,
  item = {},
  onStart,
  onEnd,
  onGrabItem,
  onDropItem,
  onCancel,
  onMoveItem,
  dropSensitivity = "regular"
}) => {
  const objectRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [{ handlerId }, dropRef] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_2__.useDrop)({
    accept: type,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      };
    },
    hover(item2, monitor) {
      if (!objectRef.current) {
        return;
      }
      const dragIndex = item2.index;
      const newInd = index;
      if (dragIndex === newInd) {
        return;
      }
      if (dropSensitivity === "regular") {
        const hoverBoundingRect = objectRef.current.getBoundingClientRect();
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        if (dragIndex < newInd && hoverClientY < hoverMiddleY) {
          return;
        }
        if (dragIndex > newInd && hoverClientY > hoverMiddleY) {
          return;
        }
      }
      onMoveItem(newInd, dragIndex);
      item2.index = newInd;
    }
  });
  const [{ isDragging }, dragRef, dragPreviewRef] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_2__.useDrag)({
    type,
    item() {
      if (onStart) {
        onStart();
      }
      const { width } = objectRef.current?.getBoundingClientRect() ?? {};
      return { index, width, ...item };
    },
    end() {
      if (onEnd) {
        onEnd();
      }
    },
    canDrag: active,
    /**
     * This is for useful when the item is in a virtualized list.
     * However, if we don't have an ID then we want the libraries
     * defaults to take care of this.
     */
    isDragging: item.id ? (monitor) => {
      return item.id === monitor.getItem().id;
    } : void 0,
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });
  const handleKeyDown = (0,_useKeyboardDragAndDrop__WEBPACK_IMPORTED_MODULE_1__/* .useKeyboardDragAndDrop */ .A)(active, index, {
    onGrabItem,
    onDropItem,
    onCancel,
    onMoveItem
  });
  return [{ handlerId, isDragging, handleKeyDown }, objectRef, dropRef, dragRef, dragPreviewRef];
};


/***/ }),

/***/ 25950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useKeyboardDragAndDrop)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);

const useKeyboardDragAndDrop = (active, index, { onCancel, onDropItem, onGrabItem, onMoveItem }) => {
  const [isSelected, setIsSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleMove = (movement) => {
    if (!isSelected) {
      return;
    }
    if (movement === "UP") {
      onMoveItem(index - 1, index);
    } else if (movement === "DOWN") {
      onMoveItem(index + 1, index);
    }
  };
  const handleDragClick = () => {
    if (isSelected) {
      if (onDropItem) {
        onDropItem(index);
      }
      setIsSelected(false);
    } else {
      if (onGrabItem) {
        onGrabItem(index);
      }
      setIsSelected(true);
    }
  };
  const handleCancel = () => {
    if (isSelected) {
      setIsSelected(false);
      if (onCancel) {
        onCancel(index);
      }
    }
  };
  const handleKeyDown = (e) => {
    if (!active) {
      return;
    }
    if (e.key === "Tab" && !isSelected) {
      return;
    }
    e.preventDefault();
    switch (e.key) {
      case " ":
      case "Enter":
        handleDragClick();
        break;
      case "Escape":
        handleCancel();
        break;
      case "ArrowDown":
      case "ArrowRight":
        handleMove("DOWN");
        break;
      case "ArrowUp":
      case "ArrowLeft":
        handleMove("UP");
        break;
      default:
    }
  };
  return handleKeyDown;
};


/***/ }),

/***/ 42225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jg: () => (/* binding */ selectFieldSizes),
/* harmony export */   KQ: () => (/* binding */ makeSelectModelLinks),
/* harmony export */   Vo: () => (/* binding */ makeSelectModelAndComponentSchemas),
/* harmony export */   Yg: () => (/* binding */ selectAppDomain)
/* harmony export */ });
/* unused harmony export makeSelectModels */
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57150);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23301);


const selectAppDomain = () => (state) => {
  return state["content-manager_app"] || _reducer__WEBPACK_IMPORTED_MODULE_0__/* .initialState */ .E;
};
const makeSelectApp = () => createSelector(selectAppDomain(), (substate) => {
  return substate;
});
const makeSelectModels = () => createSelector(selectAppDomain(), (state) => state.models);
const makeSelectModelLinks = () => (0,reselect__WEBPACK_IMPORTED_MODULE_1__/* .createSelector */ .P1)(selectAppDomain(), (state) => ({
  collectionTypeLinks: state.collectionTypeLinks,
  singleTypeLinks: state.singleTypeLinks
}));
const makeSelectModelAndComponentSchemas = () => (0,reselect__WEBPACK_IMPORTED_MODULE_1__/* .createSelector */ .P1)(selectAppDomain(), ({ components, models }) => ({
  schemas: [...components, ...models]
}));
const selectFieldSizes = (0,reselect__WEBPACK_IMPORTED_MODULE_1__/* .createSelector */ .P1)(selectAppDomain(), (state) => state.fieldSizes);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (makeSelectApp)));



/***/ }),

/***/ 25398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const selectLayout = (state) => state["content-manager_editViewLayoutManager"].currentLayout;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectLayout);


/***/ }),

/***/ 56837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  COMPONENT: "component",
  EDIT_FIELD: "editField",
  FIELD: "field",
  DYNAMIC_ZONE: "dynamicZone",
  RELATION: "relation"
});


/***/ }),

/***/ 78186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ getDisplayName)
/* harmony export */ });
const getDisplayName = ({ firstname, lastname, username, email }, formatMessage) => {
  if (username) {
    return username;
  }
  if (firstname) {
    return formatMessage(
      {
        id: "global.fullname",
        defaultMessage: "{firstname} {lastname}"
      },
      {
        firstname,
        lastname
      }
    ).trim();
  }
  return email;
};



/***/ }),

/***/ 45283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getTrad = (id) => `content-manager.${id}`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTrad);


/***/ }),

/***/ 21892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _Q: () => (/* reexport */ ItemTypes/* default */.Z),
  W3: () => (/* reexport */ utils_arrayMoveItem),
  ko: () => (/* reexport */ utils_checkIfAttributeIsDisplayable),
  FE: () => (/* reexport */ composeRefs),
  Di: () => (/* reexport */ utils_createDefaultForm),
  Ex: () => (/* reexport */ schema),
  du: () => (/* reexport */ utils_formatLayoutToApi),
  TA: () => (/* reexport */ utils_generatePermissionsObject),
  Gf: () => (/* reexport */ getDisplayName/* getDisplayName */.G),
  Ts: () => (/* reexport */ utils_getFieldName),
  Uo: () => (/* reexport */ utils_getMaxTempKey),
  OB: () => (/* reexport */ getTrad/* default */.Z),
  w8: () => (/* reexport */ utils_mergeMetasWithSchema),
  kc: () => (/* reexport */ utils_removePasswordFieldsFromData)
});

// UNUSED EXPORTS: removeKeyInObject

// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(8175);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/arrayMoveItem.js

const arrayMoveItem = (arr, from, to) => {
  if (Array.isArray(arr) && from >= 0 && to >= 0 && from <= arr.length - 1 && to <= arr.length - 1) {
    const newArray = cloneDeep_default()(arr);
    const item = newArray.splice(from, 1);
    newArray.splice(to, 0, item[0]);
    return newArray;
  }
  return arr;
};
/* harmony default export */ const utils_arrayMoveItem = (arrayMoveItem);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/checkIfAttributeIsDisplayable.js
const checkIfAttributeIsDisplayable = (attribute) => {
  const { type } = attribute;
  if (type === "relation") {
    return !(attribute?.relationType ?? "").toLowerCase().includes("morph");
  }
  return !["json", "dynamiczone", "richtext", "password", "blocks"].includes(type) && !!type;
};
/* harmony default export */ const utils_checkIfAttributeIsDisplayable = (checkIfAttributeIsDisplayable);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/composeRefs.js
const setRef = (ref, value) => {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
};
const composeRefs = (...refs) => {
  return (node) => refs.forEach((ref) => setRef(ref, node));
};

// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(98934);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/createDefaultForm.js

const createDefaultForm = (attributes, allComponentsSchema) => {
  return Object.keys(attributes).reduce((acc, current) => {
    const attribute = get_default()(attributes, [current], {});
    const { default: defaultValue, component, type, required, min, repeatable } = attribute;
    if (defaultValue !== void 0) {
      acc[current] = defaultValue;
    }
    if (type === "component") {
      const currentComponentSchema = allComponentsSchema?.[component]?.attributes ?? {};
      const currentComponentDefaultForm = createDefaultForm(
        currentComponentSchema,
        allComponentsSchema
      );
      if (required === true) {
        acc[current] = repeatable === true ? [] : currentComponentDefaultForm;
      }
      if (min && repeatable === true && required) {
        acc[current] = [];
        for (let i = 0; i < min; i += 1) {
          acc[current].push(currentComponentDefaultForm);
        }
      }
    }
    if (type === "dynamiczone") {
      if (required === true) {
        acc[current] = [];
      }
    }
    return acc;
  }, {});
};
/* harmony default export */ const utils_createDefaultForm = (createDefaultForm);

// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(74919);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/formatLayoutToApi.js


const formatLayoutToApi = ({ layouts, metadatas, ...rest }) => {
  const list = layouts.list.map((obj) => {
    if (obj.name) {
      return obj.name;
    }
    return obj;
  });
  const formattedMetadatas = Object.keys(metadatas).reduce((acc, current) => {
    const currentMetadatas = get_default()(metadatas, [current], {});
    let editMetadatas = currentMetadatas.edit;
    if (editMetadatas.mainField) {
      editMetadatas = { ...editMetadatas, mainField: currentMetadatas.edit.mainField.name };
    }
    return {
      ...acc,
      [current]: {
        edit: editMetadatas,
        list: omit_default()(currentMetadatas.list, ["mainField"])
      }
    };
  }, {});
  const edit = layouts.edit.map(
    (row) => row.map(({ name, size }) => ({
      name,
      size
    }))
  );
  return {
    ...rest,
    layouts: { edit, list },
    metadatas: formattedMetadatas
  };
};
/* harmony default export */ const utils_formatLayoutToApi = (formatLayoutToApi);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/generatePermissionsObject.js
const addSubjectToPermissionsArray = (array, uid) => array.map((data) => ({ ...data, subject: uid }));
const generatePermissionsObject = (uid) => {
  const permissions = {
    create: [{ action: "plugin::content-manager.explorer.create", subject: null }],
    delete: [{ action: "plugin::content-manager.explorer.delete", subject: null }],
    publish: [{ action: "plugin::content-manager.explorer.publish", subject: null }],
    read: [{ action: "plugin::content-manager.explorer.read", subject: null }],
    update: [{ action: "plugin::content-manager.explorer.update", subject: null }]
  };
  return Object.keys(permissions).reduce((acc, current) => {
    acc[current] = addSubjectToPermissionsArray(permissions[current], uid);
    return acc;
  }, {});
};
/* harmony default export */ const utils_generatePermissionsObject = (generatePermissionsObject);


// EXTERNAL MODULE: ./node_modules/lodash/isNaN.js
var lodash_isNaN = __webpack_require__(92249);
var isNaN_default = /*#__PURE__*/__webpack_require__.n(lodash_isNaN);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/getFieldName.js

const getFieldName = (stringName) => stringName.split(".").filter((string) => isNaN_default()(parseInt(string, 10)));
/* harmony default export */ const utils_getFieldName = (getFieldName);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/getMaxTempKey.js
const getMaxTempKey = (arr) => {
  if (arr.length === 0) {
    return -1;
  }
  const maxTempKey = Math.max.apply(
    Math,
    arr.map((o) => o.__temp_key__ ?? 0)
  );
  return Number.isNaN(maxTempKey) ? -1 : maxTempKey;
};
/* harmony default export */ const utils_getMaxTempKey = (getMaxTempKey);

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/utils/getTrad.js
var getTrad = __webpack_require__(45283);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/utils/ItemTypes.js
var ItemTypes = __webpack_require__(56837);
// EXTERNAL MODULE: ./node_modules/lodash/merge.js
var merge = __webpack_require__(87830);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(43433);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/mergeMetasWithSchema.js


const mergeMetasWithSchema = (data, schemas, mainSchemaKey) => {
  const findSchema = (refUid) => schemas.find((obj) => obj.uid === refUid);
  const merged = Object.assign({}, data);
  const mainUID = data[mainSchemaKey].uid;
  const mainSchema = findSchema(mainUID);
  set_default()(merged, [mainSchemaKey], merge_default()({}, mainSchema, data[mainSchemaKey]));
  Object.keys(data.components).forEach((compoUID) => {
    const compoSchema = findSchema(compoUID);
    set_default()(merged, ["components", compoUID], { ...data.components[compoUID], ...compoSchema });
  });
  return merged;
};
/* harmony default export */ const utils_mergeMetasWithSchema = (mergeMetasWithSchema);

// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/dist/index.mjs + 20 modules
var dist = __webpack_require__(24201);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/removePasswordFieldsFromData.js


const removePasswordFieldsFromData = (data, contentTypeSchema, componentSchema) => {
  const recursiveCleanData = (data2, schema) => {
    return Object.keys(data2).reduce((acc, current) => {
      const attrType = (0,dist/* getType */.UN)(schema, current);
      const value = get_default()(data2, current);
      const component = (0,dist/* getOtherInfos */.k2)(schema, [current, "component"]);
      const isRepeatable = (0,dist/* getOtherInfos */.k2)(schema, [current, "repeatable"]);
      if (attrType === "dynamiczone") {
        acc[current] = value.map((componentValue) => {
          const subCleanedData = recursiveCleanData(
            componentValue,
            componentSchema[componentValue.__component]
          );
          return subCleanedData;
        });
        return acc;
      }
      if (attrType === "component") {
        if (isRepeatable) {
          acc[current] = value ? value.map((compoData) => {
            const subCleanedData = recursiveCleanData(compoData, componentSchema[component]);
            return subCleanedData;
          }) : value;
        } else {
          acc[current] = value ? recursiveCleanData(value, componentSchema[component]) : value;
        }
        return acc;
      }
      if (attrType !== "password") {
        acc[current] = value;
      }
      return acc;
    }, {});
  };
  return recursiveCleanData(data, contentTypeSchema);
};
/* harmony default export */ const utils_removePasswordFieldsFromData = (removePasswordFieldsFromData);

// EXTERNAL MODULE: ./node_modules/lodash/isBoolean.js
var isBoolean = __webpack_require__(86961);
var isBoolean_default = /*#__PURE__*/__webpack_require__.n(isBoolean);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(10124);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/lodash/toNumber.js
var toNumber = __webpack_require__(51527);
var toNumber_default = /*#__PURE__*/__webpack_require__.n(toNumber);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var es = __webpack_require__(47853);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/utils/isFieldTypeNumber.js
var isFieldTypeNumber = __webpack_require__(72262);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/schema.js








es/* addMethod */.kM(es/* mixed */.nK, "defined", function() {
  return this.test("defined", dist/* translatedErrors */.I0.required, (value) => value !== void 0);
});
es/* addMethod */.kM(es/* array */.IX, "notEmptyMin", function(min) {
  return this.test("notEmptyMin", dist/* translatedErrors */.I0.min, (value) => {
    if (isEmpty_default()(value)) {
      return true;
    }
    return value.length >= min;
  });
});
es/* addMethod */.kM(es/* string */.Z_, "isInferior", function(message, max) {
  return this.test("isInferior", message, function(value) {
    if (!value) {
      return true;
    }
    if (Number.isNaN(toNumber_default()(value))) {
      return true;
    }
    return toNumber_default()(max) >= toNumber_default()(value);
  });
});
es/* addMethod */.kM(es/* string */.Z_, "isSuperior", function(message, min) {
  return this.test("isSuperior", message, function(value) {
    if (!value) {
      return true;
    }
    if (Number.isNaN(toNumber_default()(value))) {
      return true;
    }
    return toNumber_default()(value) >= toNumber_default()(min);
  });
});
const getAttributes = (data) => get_default()(data, ["attributes"], {});
const createYupSchema = (model, { components }, options = {
  isCreatingEntry: true,
  isDraft: true,
  isFromComponent: false,
  isJSONTestDisabled: false
}) => {
  const attributes = getAttributes(model);
  return es/* object */.Ry().shape(
    Object.keys(attributes).reduce((acc, current) => {
      const attribute = attributes[current];
      if (attribute.type !== "relation" && attribute.type !== "component" && attribute.type !== "dynamiczone") {
        const formatted = createYupSchemaAttribute(attribute.type, attribute, options);
        acc[current] = formatted;
      }
      if (attribute.type === "relation") {
        acc[current] = [
          "oneWay",
          "oneToOne",
          "manyToOne",
          "oneToManyMorph",
          "oneToOneMorph"
        ].includes(attribute.relationType) ? es/* object */.Ry().nullable() : es/* array */.IX().nullable();
      }
      if (attribute.type === "component") {
        const componentFieldSchema = createYupSchema(
          components[attribute.component],
          {
            components
          },
          { ...options, isFromComponent: true }
        );
        if (attribute.repeatable === true) {
          const { min, max, required } = attribute;
          let componentSchema2 = es/* lazy */.Vo((value) => {
            let baseSchema = es/* array */.IX().of(componentFieldSchema);
            if (min) {
              if (required) {
                baseSchema = baseSchema.min(min, dist/* translatedErrors */.I0.min);
              } else if (required !== true && isEmpty_default()(value)) {
                baseSchema = baseSchema.nullable();
              } else {
                baseSchema = baseSchema.min(min, dist/* translatedErrors */.I0.min);
              }
            } else if (required && !options.isDraft) {
              baseSchema = baseSchema.min(1, dist/* translatedErrors */.I0.required);
            }
            if (max) {
              baseSchema = baseSchema.max(max, dist/* translatedErrors */.I0.max);
            }
            return baseSchema;
          });
          acc[current] = componentSchema2;
          return acc;
        }
        const componentSchema = es/* lazy */.Vo((obj) => {
          if (obj !== void 0) {
            return attribute.required === true && !options.isDraft ? componentFieldSchema.defined() : componentFieldSchema.nullable();
          }
          return attribute.required === true ? es/* object */.Ry().defined() : es/* object */.Ry().nullable();
        });
        acc[current] = componentSchema;
        return acc;
      }
      if (attribute.type === "dynamiczone") {
        let dynamicZoneSchema = es/* array */.IX().of(
          es/* lazy */.Vo(({ __component }) => {
            return createYupSchema(
              components[__component],
              { components },
              { ...options, isFromComponent: true }
            );
          })
        );
        const { max, min } = attribute;
        if (min) {
          if (attribute.required) {
            dynamicZoneSchema = dynamicZoneSchema.test("min", dist/* translatedErrors */.I0.min, (value) => {
              if (options.isCreatingEntry) {
                return value && value.length >= min;
              }
              if (value === void 0) {
                return true;
              }
              return value !== null && value.length >= min;
            }).test("required", dist/* translatedErrors */.I0.required, (value) => {
              if (options.isCreatingEntry) {
                return value !== null || value !== void 0;
              }
              if (value === void 0) {
                return true;
              }
              return value !== null;
            });
          } else {
            dynamicZoneSchema = dynamicZoneSchema.notEmptyMin(min);
          }
        } else if (attribute.required && !options.isDraft) {
          dynamicZoneSchema = dynamicZoneSchema.test("required", dist/* translatedErrors */.I0.required, (value) => {
            if (options.isCreatingEntry) {
              return value !== null || value !== void 0;
            }
            if (value === void 0) {
              return true;
            }
            return value !== null;
          });
        }
        if (max) {
          dynamicZoneSchema = dynamicZoneSchema.max(max, dist/* translatedErrors */.I0.max);
        }
        acc[current] = dynamicZoneSchema;
      }
      return acc;
    }, {})
  );
};
const createYupSchemaAttribute = (type, validations, options) => {
  let schema = es/* mixed */.nK();
  if (["string", "uid", "text", "richtext", "email", "password", "enumeration"].includes(type)) {
    schema = es/* string */.Z_();
  }
  if (type === "blocks") {
    schema = es/* mixed */.nK().test("isJSON", dist/* translatedErrors */.I0.json, (value) => {
      if (options.isJSONTestDisabled) {
        return true;
      }
      if (options.isDraft) {
        return true;
      }
      if (value && !Array.isArray(value)) {
        return false;
      }
      return true;
    });
  }
  if (type === "json") {
    schema = es/* mixed */.nK(dist/* translatedErrors */.I0.json).test("isJSON", dist/* translatedErrors */.I0.json, (value) => {
      if (options.isJSONTestDisabled) {
        return true;
      }
      if (!value || !value.length) {
        return true;
      }
      try {
        JSON.parse(value);
        return true;
      } catch (err) {
        return false;
      }
    }).nullable().test("required", dist/* translatedErrors */.I0.required, (value) => {
      if (validations.required && (!value || !value.length)) {
        return false;
      }
      return true;
    });
  }
  if (type === "email") {
    schema = schema.email(dist/* translatedErrors */.I0.email);
  }
  if (["number", "integer", "float", "decimal"].includes(type)) {
    schema = es/* number */.Rx().transform((cv) => isNaN_default()(cv) ? void 0 : cv).typeError();
  }
  if (type === "biginteger") {
    schema = es/* string */.Z_().matches(/^-?\d*$/);
  }
  if (["date", "datetime"].includes(type)) {
    schema = es/* date */.hT();
  }
  Object.keys(validations).forEach((validation) => {
    const validationValue = validations[validation];
    if (!!validationValue || !isBoolean_default()(validationValue) && Number.isInteger(Math.floor(validationValue)) || validationValue === 0) {
      switch (validation) {
        case "required": {
          if (!options.isDraft) {
            if (type === "password" && options.isCreatingEntry) {
              schema = schema.required(dist/* translatedErrors */.I0.required);
            }
            if (type !== "password") {
              if (options.isCreatingEntry) {
                schema = schema.required(dist/* translatedErrors */.I0.required);
              } else {
                schema = schema.test("required", dist/* translatedErrors */.I0.required, (value) => {
                  if (value === void 0 && !options.isFromComponent) {
                    return true;
                  }
                  if ((0,isFieldTypeNumber/* default */.Z)(type)) {
                    if (value === 0) {
                      return true;
                    }
                    return !!value;
                  }
                  if (type === "boolean") {
                    return value !== null && value !== void 0;
                  }
                  if (type === "date" || type === "datetime") {
                    if (typeof value === "string") {
                      return !isEmpty_default()(value);
                    }
                    return !isEmpty_default()(value?.toString());
                  }
                  return !isEmpty_default()(value);
                });
              }
            }
          }
          break;
        }
        case "max": {
          if (type === "biginteger") {
            schema = schema.isInferior(dist/* translatedErrors */.I0.max, validationValue);
          } else {
            schema = schema.max(validationValue, dist/* translatedErrors */.I0.max);
          }
          break;
        }
        case "maxLength":
          schema = schema.max(validationValue, dist/* translatedErrors */.I0.maxLength);
          break;
        case "min": {
          if (type === "biginteger") {
            schema = schema.isSuperior(dist/* translatedErrors */.I0.min, validationValue);
          } else {
            schema = schema.min(validationValue, dist/* translatedErrors */.I0.min);
          }
          break;
        }
        case "minLength": {
          if (!options.isDraft) {
            schema = schema.min(validationValue, dist/* translatedErrors */.I0.minLength);
          }
          break;
        }
        case "regex":
          schema = schema.matches(new RegExp(validationValue), {
            message: dist/* translatedErrors */.I0.regex,
            excludeEmptyString: !validations.required
          });
          break;
        case "lowercase":
          if (["text", "textarea", "email", "string"].includes(type)) {
            schema = schema.strict().lowercase();
          }
          break;
        case "uppercase":
          if (["text", "textarea", "email", "string"].includes(type)) {
            schema = schema.strict().uppercase();
          }
          break;
        case "positive":
          if ((0,isFieldTypeNumber/* default */.Z)(type)) {
            schema = schema.positive();
          }
          break;
        case "negative":
          if ((0,isFieldTypeNumber/* default */.Z)(type)) {
            schema = schema.negative();
          }
          break;
        default:
          schema = schema.nullable();
      }
    }
  });
  return schema;
};
/* harmony default export */ const schema = (createYupSchema);

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/utils/getDisplayName.js
var getDisplayName = __webpack_require__(78186);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/index.js

















/***/ }),

/***/ 72262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ isFieldTypeNumber)
/* harmony export */ });
function isFieldTypeNumber(type) {
  return ["integer", "biginteger", "decimal", "float", "number"].includes(type);
}


/***/ })

}]);