(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[6597],{

/***/ 64060:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var get = __webpack_require__(98934);
function baseAt(object, paths) {
  var index = -1, length = paths.length, result = Array(length), skip = object == null;
  while (++index < length) {
    result[index] = skip ? void 0 : get(object, paths[index]);
  }
  return result;
}
module.exports = baseAt;


/***/ }),

/***/ 33812:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAt = __webpack_require__(64060), flatRest = __webpack_require__(16065);
var at = flatRest(baseAt);
module.exports = at;


/***/ }),

/***/ 36294:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isSafari = exports.isFirefox = void 0;
var _jsUtilsJs = __webpack_require__(64799);
const isFirefox = (0, _jsUtilsJs).memoize(
  () => /firefox/i.test(navigator.userAgent)
);
exports.isFirefox = isFirefox;
const isSafari = (0, _jsUtilsJs).memoize(
  () => Boolean(window.safari)
);
exports.isSafari = isSafari;


/***/ }),

/***/ 81564:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _jsUtilsJs = __webpack_require__(64799);
class EnterLeaveCounter {
  enter(enteringNode) {
    const previousLength = this.entered.length;
    const isNodeEntered = (node) => this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
    this.entered = (0, _jsUtilsJs).union(this.entered.filter(isNodeEntered), [
      enteringNode
    ]);
    return previousLength === 0 && this.entered.length > 0;
  }
  leave(leavingNode) {
    const previousLength = this.entered.length;
    this.entered = (0, _jsUtilsJs).without(this.entered.filter(this.isNodeInDocument), leavingNode);
    return previousLength > 0 && this.entered.length === 0;
  }
  reset() {
    this.entered = [];
  }
  constructor(isNodeInDocument) {
    this.entered = [];
    this.isNodeInDocument = isNodeInDocument;
  }
}
exports.EnterLeaveCounter = EnterLeaveCounter;


/***/ }),

/***/ 69456:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _enterLeaveCounterJs = __webpack_require__(81564);
var _offsetUtilsJs = __webpack_require__(36975);
var _indexJs = __webpack_require__(56635);
var NativeTypes = _interopRequireWildcard(__webpack_require__(20911));
var _optionsReaderJs = __webpack_require__(71169);
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
class HTML5BackendImpl {
  /**
  * Generate profiling statistics for the HTML5Backend.
  */
  profile() {
    var ref, ref1;
    return {
      sourcePreviewNodes: this.sourcePreviewNodes.size,
      sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
      sourceNodeOptions: this.sourceNodeOptions.size,
      sourceNodes: this.sourceNodes.size,
      dragStartSourceIds: ((ref = this.dragStartSourceIds) === null || ref === void 0 ? void 0 : ref.length) || 0,
      dropTargetIds: this.dropTargetIds.length,
      dragEnterTargetIds: this.dragEnterTargetIds.length,
      dragOverTargetIds: ((ref1 = this.dragOverTargetIds) === null || ref1 === void 0 ? void 0 : ref1.length) || 0
    };
  }
  // public for test
  get window() {
    return this.options.window;
  }
  get document() {
    return this.options.document;
  }
  /**
  * Get the root element to use for event subscriptions
  */
  get rootElement() {
    return this.options.rootElement;
  }
  setup() {
    const root = this.rootElement;
    if (root === void 0) {
      return;
    }
    if (root.__isReactDndBackendSetUp) {
      throw new Error("Cannot have two HTML5 backends at the same time.");
    }
    root.__isReactDndBackendSetUp = true;
    this.addEventListeners(root);
  }
  teardown() {
    const root = this.rootElement;
    if (root === void 0) {
      return;
    }
    root.__isReactDndBackendSetUp = false;
    this.removeEventListeners(this.rootElement);
    this.clearCurrentDragSourceNode();
    if (this.asyncEndDragFrameId) {
      var ref;
      (ref = this.window) === null || ref === void 0 ? void 0 : ref.cancelAnimationFrame(this.asyncEndDragFrameId);
    }
  }
  connectDragPreview(sourceId, node, options) {
    this.sourcePreviewNodeOptions.set(sourceId, options);
    this.sourcePreviewNodes.set(sourceId, node);
    return () => {
      this.sourcePreviewNodes.delete(sourceId);
      this.sourcePreviewNodeOptions.delete(sourceId);
    };
  }
  connectDragSource(sourceId, node, options) {
    this.sourceNodes.set(sourceId, node);
    this.sourceNodeOptions.set(sourceId, options);
    const handleDragStart = (e) => this.handleDragStart(e, sourceId);
    const handleSelectStart = (e) => this.handleSelectStart(e);
    node.setAttribute("draggable", "true");
    node.addEventListener("dragstart", handleDragStart);
    node.addEventListener("selectstart", handleSelectStart);
    return () => {
      this.sourceNodes.delete(sourceId);
      this.sourceNodeOptions.delete(sourceId);
      node.removeEventListener("dragstart", handleDragStart);
      node.removeEventListener("selectstart", handleSelectStart);
      node.setAttribute("draggable", "false");
    };
  }
  connectDropTarget(targetId, node) {
    const handleDragEnter = (e) => this.handleDragEnter(e, targetId);
    const handleDragOver = (e) => this.handleDragOver(e, targetId);
    const handleDrop = (e) => this.handleDrop(e, targetId);
    node.addEventListener("dragenter", handleDragEnter);
    node.addEventListener("dragover", handleDragOver);
    node.addEventListener("drop", handleDrop);
    return () => {
      node.removeEventListener("dragenter", handleDragEnter);
      node.removeEventListener("dragover", handleDragOver);
      node.removeEventListener("drop", handleDrop);
    };
  }
  addEventListeners(target) {
    if (!target.addEventListener) {
      return;
    }
    target.addEventListener("dragstart", this.handleTopDragStart);
    target.addEventListener("dragstart", this.handleTopDragStartCapture, true);
    target.addEventListener("dragend", this.handleTopDragEndCapture, true);
    target.addEventListener("dragenter", this.handleTopDragEnter);
    target.addEventListener("dragenter", this.handleTopDragEnterCapture, true);
    target.addEventListener("dragleave", this.handleTopDragLeaveCapture, true);
    target.addEventListener("dragover", this.handleTopDragOver);
    target.addEventListener("dragover", this.handleTopDragOverCapture, true);
    target.addEventListener("drop", this.handleTopDrop);
    target.addEventListener("drop", this.handleTopDropCapture, true);
  }
  removeEventListeners(target) {
    if (!target.removeEventListener) {
      return;
    }
    target.removeEventListener("dragstart", this.handleTopDragStart);
    target.removeEventListener("dragstart", this.handleTopDragStartCapture, true);
    target.removeEventListener("dragend", this.handleTopDragEndCapture, true);
    target.removeEventListener("dragenter", this.handleTopDragEnter);
    target.removeEventListener("dragenter", this.handleTopDragEnterCapture, true);
    target.removeEventListener("dragleave", this.handleTopDragLeaveCapture, true);
    target.removeEventListener("dragover", this.handleTopDragOver);
    target.removeEventListener("dragover", this.handleTopDragOverCapture, true);
    target.removeEventListener("drop", this.handleTopDrop);
    target.removeEventListener("drop", this.handleTopDropCapture, true);
  }
  getCurrentSourceNodeOptions() {
    const sourceId = this.monitor.getSourceId();
    const sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
    return _objectSpread({
      dropEffect: this.altKeyPressed ? "copy" : "move"
    }, sourceNodeOptions || {});
  }
  getCurrentDropEffect() {
    if (this.isDraggingNativeItem()) {
      return "copy";
    }
    return this.getCurrentSourceNodeOptions().dropEffect;
  }
  getCurrentSourcePreviewNodeOptions() {
    const sourceId = this.monitor.getSourceId();
    const sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
    return _objectSpread({
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: false
    }, sourcePreviewNodeOptions || {});
  }
  isDraggingNativeItem() {
    const itemType = this.monitor.getItemType();
    return Object.keys(NativeTypes).some(
      (key) => NativeTypes[key] === itemType
    );
  }
  beginDragNativeItem(type, dataTransfer) {
    this.clearCurrentDragSourceNode();
    this.currentNativeSource = (0, _indexJs).createNativeDragSource(type, dataTransfer);
    this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
    this.actions.beginDrag([
      this.currentNativeHandle
    ]);
  }
  setCurrentDragSourceNode(node) {
    this.clearCurrentDragSourceNode();
    this.currentDragSourceNode = node;
    const MOUSE_MOVE_TIMEOUT = 1e3;
    this.mouseMoveTimeoutTimer = setTimeout(() => {
      var ref;
      return (ref = this.rootElement) === null || ref === void 0 ? void 0 : ref.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, true);
    }, MOUSE_MOVE_TIMEOUT);
  }
  clearCurrentDragSourceNode() {
    if (this.currentDragSourceNode) {
      this.currentDragSourceNode = null;
      if (this.rootElement) {
        var ref;
        (ref = this.window) === null || ref === void 0 ? void 0 : ref.clearTimeout(this.mouseMoveTimeoutTimer || void 0);
        this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, true);
      }
      this.mouseMoveTimeoutTimer = null;
      return true;
    }
    return false;
  }
  handleDragStart(e, sourceId) {
    if (e.defaultPrevented) {
      return;
    }
    if (!this.dragStartSourceIds) {
      this.dragStartSourceIds = [];
    }
    this.dragStartSourceIds.unshift(sourceId);
  }
  handleDragEnter(_e, targetId) {
    this.dragEnterTargetIds.unshift(targetId);
  }
  handleDragOver(_e, targetId) {
    if (this.dragOverTargetIds === null) {
      this.dragOverTargetIds = [];
    }
    this.dragOverTargetIds.unshift(targetId);
  }
  handleDrop(_e, targetId) {
    this.dropTargetIds.unshift(targetId);
  }
  constructor(manager, globalContext, options) {
    this.sourcePreviewNodes = /* @__PURE__ */ new Map();
    this.sourcePreviewNodeOptions = /* @__PURE__ */ new Map();
    this.sourceNodes = /* @__PURE__ */ new Map();
    this.sourceNodeOptions = /* @__PURE__ */ new Map();
    this.dragStartSourceIds = null;
    this.dropTargetIds = [];
    this.dragEnterTargetIds = [];
    this.currentNativeSource = null;
    this.currentNativeHandle = null;
    this.currentDragSourceNode = null;
    this.altKeyPressed = false;
    this.mouseMoveTimeoutTimer = null;
    this.asyncEndDragFrameId = null;
    this.dragOverTargetIds = null;
    this.lastClientOffset = null;
    this.hoverRafId = null;
    this.getSourceClientOffset = (sourceId) => {
      const source = this.sourceNodes.get(sourceId);
      return source && (0, _offsetUtilsJs).getNodeClientOffset(source) || null;
    };
    this.endDragNativeItem = () => {
      if (!this.isDraggingNativeItem()) {
        return;
      }
      this.actions.endDrag();
      if (this.currentNativeHandle) {
        this.registry.removeSource(this.currentNativeHandle);
      }
      this.currentNativeHandle = null;
      this.currentNativeSource = null;
    };
    this.isNodeInDocument = (node) => {
      return Boolean(node && this.document && this.document.body && this.document.body.contains(node));
    };
    this.endDragIfSourceWasRemovedFromDOM = () => {
      const node = this.currentDragSourceNode;
      if (node == null || this.isNodeInDocument(node)) {
        return;
      }
      if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.scheduleHover = (dragOverTargetIds) => {
      if (this.hoverRafId === null && typeof requestAnimationFrame !== "undefined") {
        this.hoverRafId = requestAnimationFrame(() => {
          if (this.monitor.isDragging()) {
            this.actions.hover(dragOverTargetIds || [], {
              clientOffset: this.lastClientOffset
            });
          }
          this.hoverRafId = null;
        });
      }
    };
    this.cancelHover = () => {
      if (this.hoverRafId !== null && typeof cancelAnimationFrame !== "undefined") {
        cancelAnimationFrame(this.hoverRafId);
        this.hoverRafId = null;
      }
    };
    this.handleTopDragStartCapture = () => {
      this.clearCurrentDragSourceNode();
      this.dragStartSourceIds = [];
    };
    this.handleTopDragStart = (e) => {
      if (e.defaultPrevented) {
        return;
      }
      const { dragStartSourceIds } = this;
      this.dragStartSourceIds = null;
      const clientOffset = (0, _offsetUtilsJs).getEventClientOffset(e);
      if (this.monitor.isDragging()) {
        this.actions.endDrag();
        this.cancelHover();
      }
      this.actions.beginDrag(dragStartSourceIds || [], {
        publishSource: false,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset
      });
      const { dataTransfer } = e;
      const nativeType = (0, _indexJs).matchNativeItemType(dataTransfer);
      if (this.monitor.isDragging()) {
        if (dataTransfer && typeof dataTransfer.setDragImage === "function") {
          const sourceId = this.monitor.getSourceId();
          const sourceNode = this.sourceNodes.get(sourceId);
          const dragPreview = this.sourcePreviewNodes.get(sourceId) || sourceNode;
          if (dragPreview) {
            const { anchorX, anchorY, offsetX, offsetY } = this.getCurrentSourcePreviewNodeOptions();
            const anchorPoint = {
              anchorX,
              anchorY
            };
            const offsetPoint = {
              offsetX,
              offsetY
            };
            const dragPreviewOffset = (0, _offsetUtilsJs).getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
            dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
          }
        }
        try {
          dataTransfer === null || dataTransfer === void 0 ? void 0 : dataTransfer.setData("application/json", {});
        } catch (err) {
        }
        this.setCurrentDragSourceNode(e.target);
        const { captureDraggingState } = this.getCurrentSourcePreviewNodeOptions();
        if (!captureDraggingState) {
          setTimeout(
            () => this.actions.publishDragSource(),
            0
          );
        } else {
          this.actions.publishDragSource();
        }
      } else if (nativeType) {
        this.beginDragNativeItem(nativeType);
      } else if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable"))) {
        return;
      } else {
        e.preventDefault();
      }
    };
    this.handleTopDragEndCapture = () => {
      if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.handleTopDragEnterCapture = (e) => {
      this.dragEnterTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
      }
      const isFirstEnter = this.enterLeaveCounter.enter(e.target);
      if (!isFirstEnter || this.monitor.isDragging()) {
        return;
      }
      const { dataTransfer } = e;
      const nativeType = (0, _indexJs).matchNativeItemType(dataTransfer);
      if (nativeType) {
        this.beginDragNativeItem(nativeType, dataTransfer);
      }
    };
    this.handleTopDragEnter = (e) => {
      const { dragEnterTargetIds } = this;
      this.dragEnterTargetIds = [];
      if (!this.monitor.isDragging()) {
        return;
      }
      this.altKeyPressed = e.altKey;
      if (dragEnterTargetIds.length > 0) {
        this.actions.hover(dragEnterTargetIds, {
          clientOffset: (0, _offsetUtilsJs).getEventClientOffset(e)
        });
      }
      const canDrop = dragEnterTargetIds.some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      );
      if (canDrop) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = this.getCurrentDropEffect();
        }
      }
    };
    this.handleTopDragOverCapture = (e) => {
      this.dragOverTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
      }
    };
    this.handleTopDragOver = (e) => {
      const { dragOverTargetIds } = this;
      this.dragOverTargetIds = [];
      if (!this.monitor.isDragging()) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = "none";
        }
        return;
      }
      this.altKeyPressed = e.altKey;
      this.lastClientOffset = (0, _offsetUtilsJs).getEventClientOffset(e);
      this.scheduleHover(dragOverTargetIds);
      const canDrop = (dragOverTargetIds || []).some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      );
      if (canDrop) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = this.getCurrentDropEffect();
        }
      } else if (this.isDraggingNativeItem()) {
        e.preventDefault();
      } else {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = "none";
        }
      }
    };
    this.handleTopDragLeaveCapture = (e) => {
      if (this.isDraggingNativeItem()) {
        e.preventDefault();
      }
      const isLastLeave = this.enterLeaveCounter.leave(e.target);
      if (!isLastLeave) {
        return;
      }
      if (this.isDraggingNativeItem()) {
        setTimeout(
          () => this.endDragNativeItem(),
          0
        );
      }
      this.cancelHover();
    };
    this.handleTopDropCapture = (e) => {
      this.dropTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        e.preventDefault();
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
      } else if ((0, _indexJs).matchNativeItemType(e.dataTransfer)) {
        e.preventDefault();
      }
      this.enterLeaveCounter.reset();
    };
    this.handleTopDrop = (e) => {
      const { dropTargetIds } = this;
      this.dropTargetIds = [];
      this.actions.hover(dropTargetIds, {
        clientOffset: (0, _offsetUtilsJs).getEventClientOffset(e)
      });
      this.actions.drop({
        dropEffect: this.getCurrentDropEffect()
      });
      if (this.isDraggingNativeItem()) {
        this.endDragNativeItem();
      } else if (this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.handleSelectStart = (e) => {
      const target = e.target;
      if (typeof target.dragDrop !== "function") {
        return;
      }
      if (target.tagName === "INPUT" || target.tagName === "SELECT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
        return;
      }
      e.preventDefault();
      target.dragDrop();
    };
    this.options = new _optionsReaderJs.OptionsReader(globalContext, options);
    this.actions = manager.getActions();
    this.monitor = manager.getMonitor();
    this.registry = manager.getRegistry();
    this.enterLeaveCounter = new _enterLeaveCounterJs.EnterLeaveCounter(this.isNodeInDocument);
  }
}
exports.HTML5BackendImpl = HTML5BackendImpl;


/***/ }),

/***/ 82272:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
class MonotonicInterpolant {
  interpolate(x) {
    const { xs, ys, c1s, c2s, c3s } = this;
    let i = xs.length - 1;
    if (x === xs[i]) {
      return ys[i];
    }
    let low = 0;
    let high = c3s.length - 1;
    let mid;
    while (low <= high) {
      mid = Math.floor(0.5 * (low + high));
      const xHere = xs[mid];
      if (xHere < x) {
        low = mid + 1;
      } else if (xHere > x) {
        high = mid - 1;
      } else {
        return ys[mid];
      }
    }
    i = Math.max(0, high);
    const diff = x - xs[i];
    const diffSq = diff * diff;
    return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
  }
  constructor(xs, ys) {
    const { length } = xs;
    const indexes = [];
    for (let i = 0; i < length; i++) {
      indexes.push(i);
    }
    indexes.sort(
      (a, b) => xs[a] < xs[b] ? -1 : 1
    );
    const dys = [];
    const dxs = [];
    const ms = [];
    let dx;
    let dy;
    for (let i1 = 0; i1 < length - 1; i1++) {
      dx = xs[i1 + 1] - xs[i1];
      dy = ys[i1 + 1] - ys[i1];
      dxs.push(dx);
      dys.push(dy);
      ms.push(dy / dx);
    }
    const c1s = [
      ms[0]
    ];
    for (let i2 = 0; i2 < dxs.length - 1; i2++) {
      const m2 = ms[i2];
      const mNext = ms[i2 + 1];
      if (m2 * mNext <= 0) {
        c1s.push(0);
      } else {
        dx = dxs[i2];
        const dxNext = dxs[i2 + 1];
        const common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
      }
    }
    c1s.push(ms[ms.length - 1]);
    const c2s = [];
    const c3s = [];
    let m;
    for (let i3 = 0; i3 < c1s.length - 1; i3++) {
      m = ms[i3];
      const c1 = c1s[i3];
      const invDx = 1 / dxs[i3];
      const common = c1 + c1s[i3 + 1] - m - m;
      c2s.push((m - c1 - common) * invDx);
      c3s.push(common * invDx * invDx);
    }
    this.xs = xs;
    this.ys = ys;
    this.c1s = c1s;
    this.c2s = c2s;
    this.c3s = c3s;
  }
}
exports.MonotonicInterpolant = MonotonicInterpolant;


/***/ }),

/***/ 75679:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
class NativeDragSource {
  initializeExposedProperties() {
    Object.keys(this.config.exposeProperties).forEach((property) => {
      Object.defineProperty(this.item, property, {
        configurable: true,
        enumerable: true,
        get() {
          console.warn(`Browser doesn't allow reading "${property}" until the drop event.`);
          return null;
        }
      });
    });
  }
  loadDataTransfer(dataTransfer) {
    if (dataTransfer) {
      const newProperties = {};
      Object.keys(this.config.exposeProperties).forEach((property) => {
        const propertyFn = this.config.exposeProperties[property];
        if (propertyFn != null) {
          newProperties[property] = {
            value: propertyFn(dataTransfer, this.config.matchesTypes),
            configurable: true,
            enumerable: true
          };
        }
      });
      Object.defineProperties(this.item, newProperties);
    }
  }
  canDrag() {
    return true;
  }
  beginDrag() {
    return this.item;
  }
  isDragging(monitor, handle) {
    return handle === monitor.getSourceId();
  }
  endDrag() {
  }
  constructor(config) {
    this.config = config;
    this.item = {};
    this.initializeExposedProperties();
  }
}
exports.NativeDragSource = NativeDragSource;


/***/ }),

/***/ 28779:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDataFromDataTransfer = getDataFromDataTransfer;
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
  const result = typesToTry.reduce(
    (resultSoFar, typeToTry) => resultSoFar || dataTransfer.getData(typeToTry),
    ""
  );
  return result != null ? result : defaultValue;
}


/***/ }),

/***/ 56635:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createNativeDragSource = createNativeDragSource;
exports.matchNativeItemType = matchNativeItemType;
var _nativeTypesConfigJs = __webpack_require__(66420);
var _nativeDragSourceJs = __webpack_require__(75679);
function createNativeDragSource(type, dataTransfer) {
  const config = _nativeTypesConfigJs.nativeTypesConfig[type];
  if (!config) {
    throw new Error(`native type ${type} has no configuration`);
  }
  const result = new _nativeDragSourceJs.NativeDragSource(config);
  result.loadDataTransfer(dataTransfer);
  return result;
}
function matchNativeItemType(dataTransfer) {
  if (!dataTransfer) {
    return null;
  }
  const dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
  return Object.keys(_nativeTypesConfigJs.nativeTypesConfig).filter((nativeItemType) => {
    const typeConfig = _nativeTypesConfigJs.nativeTypesConfig[nativeItemType];
    if (!(typeConfig === null || typeConfig === void 0 ? void 0 : typeConfig.matchesTypes)) {
      return false;
    }
    return typeConfig.matchesTypes.some(
      (t) => dataTransferTypes.indexOf(t) > -1
    );
  })[0] || null;
}


/***/ }),

/***/ 66420:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.nativeTypesConfig = void 0;
var NativeTypes = _interopRequireWildcard(__webpack_require__(20911));
var _getDataFromDataTransferJs = __webpack_require__(28779);
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
}
const nativeTypesConfig = {
  [NativeTypes.FILE]: {
    exposeProperties: {
      files: (dataTransfer) => Array.prototype.slice.call(dataTransfer.files),
      items: (dataTransfer) => dataTransfer.items,
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Files"
    ]
  },
  [NativeTypes.HTML]: {
    exposeProperties: {
      html: (dataTransfer, matchesTypes) => (0, _getDataFromDataTransferJs).getDataFromDataTransfer(dataTransfer, matchesTypes, ""),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Html",
      "text/html"
    ]
  },
  [NativeTypes.URL]: {
    exposeProperties: {
      urls: (dataTransfer, matchesTypes) => (0, _getDataFromDataTransferJs).getDataFromDataTransfer(dataTransfer, matchesTypes, "").split("\n"),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Url",
      "text/uri-list"
    ]
  },
  [NativeTypes.TEXT]: {
    exposeProperties: {
      text: (dataTransfer, matchesTypes) => (0, _getDataFromDataTransferJs).getDataFromDataTransfer(dataTransfer, matchesTypes, ""),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Text",
      "text/plain"
    ]
  }
};
exports.nativeTypesConfig = nativeTypesConfig;


/***/ }),

/***/ 20911:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HTML = exports.TEXT = exports.URL = exports.FILE = void 0;
const FILE = "__NATIVE_FILE__";
exports.FILE = FILE;
const URL = "__NATIVE_URL__";
exports.URL = URL;
const TEXT = "__NATIVE_TEXT__";
exports.TEXT = TEXT;
const HTML = "__NATIVE_HTML__";
exports.HTML = HTML;


/***/ }),

/***/ 36975:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getNodeClientOffset = getNodeClientOffset;
exports.getEventClientOffset = getEventClientOffset;
exports.getDragPreviewOffset = getDragPreviewOffset;
var _browserDetectorJs = __webpack_require__(36294);
var _monotonicInterpolantJs = __webpack_require__(82272);
const ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
  const el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
  if (!el) {
    return null;
  }
  const { top, left } = el.getBoundingClientRect();
  return {
    x: left,
    y: top
  };
}
function getEventClientOffset(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function isImageNode(node) {
  var ref;
  return node.nodeName === "IMG" && ((0, _browserDetectorJs).isFirefox() || !((ref = document.documentElement) === null || ref === void 0 ? void 0 : ref.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
  let dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
  let dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
  if ((0, _browserDetectorJs).isSafari() && isImage) {
    dragPreviewHeight /= window.devicePixelRatio;
    dragPreviewWidth /= window.devicePixelRatio;
  }
  return {
    dragPreviewWidth,
    dragPreviewHeight
  };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
  const isImage = isImageNode(dragPreview);
  const dragPreviewNode = isImage ? sourceNode : dragPreview;
  const dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
  const offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  };
  const { offsetWidth: sourceWidth, offsetHeight: sourceHeight } = sourceNode;
  const { anchorX, anchorY } = anchorPoint;
  const { dragPreviewWidth, dragPreviewHeight } = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight);
  const calculateYOffset = () => {
    const interpolantY = new _monotonicInterpolantJs.MonotonicInterpolant([
      0,
      0.5,
      1
    ], [
      // Dock to the top
      offsetFromDragPreview.y,
      // Align at the center
      offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
      // Dock to the bottom
      offsetFromDragPreview.y + dragPreviewHeight - sourceHeight
    ]);
    let y = interpolantY.interpolate(anchorY);
    if ((0, _browserDetectorJs).isSafari() && isImage) {
      y += (window.devicePixelRatio - 1) * dragPreviewHeight;
    }
    return y;
  };
  const calculateXOffset = () => {
    const interpolantX = new _monotonicInterpolantJs.MonotonicInterpolant([
      0,
      0.5,
      1
    ], [
      // Dock to the left
      offsetFromDragPreview.x,
      // Align at the center
      offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
      // Dock to the right
      offsetFromDragPreview.x + dragPreviewWidth - sourceWidth
    ]);
    return interpolantX.interpolate(anchorX);
  };
  const { offsetX, offsetY } = offsetPoint;
  const isManualOffsetX = offsetX === 0 || offsetX;
  const isManualOffsetY = offsetY === 0 || offsetY;
  return {
    x: isManualOffsetX ? offsetX : calculateXOffset(),
    y: isManualOffsetY ? offsetY : calculateYOffset()
  };
}


/***/ }),

/***/ 71169:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
class OptionsReader {
  get window() {
    if (this.globalContext) {
      return this.globalContext;
    } else if (typeof window !== "undefined") {
      return window;
    }
    return void 0;
  }
  get document() {
    var ref;
    if ((ref = this.globalContext) === null || ref === void 0 ? void 0 : ref.document) {
      return this.globalContext.document;
    } else if (this.window) {
      return this.window.document;
    } else {
      return void 0;
    }
  }
  get rootElement() {
    var ref;
    return ((ref = this.optionsArgs) === null || ref === void 0 ? void 0 : ref.rootElement) || this.window;
  }
  constructor(globalContext, options) {
    this.ownerDocument = null;
    this.globalContext = globalContext;
    this.optionsArgs = options;
  }
}
exports.OptionsReader = OptionsReader;


/***/ }),

/***/ 64657:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getEmptyImage = getEmptyImage;
let emptyImage;
function getEmptyImage() {
  if (!emptyImage) {
    emptyImage = new Image();
    emptyImage.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
  }
  return emptyImage;
}


/***/ }),

/***/ 92241:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
  value: true
});
Object.defineProperty(exports, "rX", ({
  enumerable: true,
  get: function() {
    return _getEmptyImageJs.getEmptyImage;
  }
}));
exports.PD = __webpack_unused_export__ = void 0;
var _html5BackendImplJs = __webpack_require__(69456);
var _NativeTypes = _interopRequireWildcard(__webpack_require__(20911));
var _getEmptyImageJs = __webpack_require__(64657);
__webpack_unused_export__ = _NativeTypes;
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
}
const HTML5Backend = function createBackend(manager, context, options) {
  return new _html5BackendImplJs.HTML5BackendImpl(manager, context, options);
};
exports.PD = HTML5Backend;


/***/ }),

/***/ 64799:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.memoize = memoize;
exports.without = without;
exports.union = union;
function memoize(fn) {
  let result = null;
  const memoized = () => {
    if (result == null) {
      result = fn();
    }
    return result;
  };
  return memoized;
}
function without(items, item) {
  return items.filter(
    (i) => i !== item
  );
}
function union(itemsA, itemsB) {
  const set = /* @__PURE__ */ new Set();
  const insertItem = (item) => set.add(item);
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  const result = [];
  set.forEach(
    (key) => result.push(key)
  );
  return result;
}


/***/ }),

/***/ 45669:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const debug = __webpack_require__(18774);
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __webpack_require__(70983);
const { safeRe: re, t } = __webpack_require__(3094);
const parseOptions = __webpack_require__(43363);
const { compareIdentifiers } = __webpack_require__(33503);
class SemVer {
  constructor(version, options) {
    options = parseOptions(options);
    if (version instanceof SemVer) {
      if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
        return version;
      } else {
        version = version.version;
      }
    } else if (typeof version !== "string") {
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
    }
    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      );
    }
    debug("SemVer", version, options);
    this.options = options;
    this.loose = !!options.loose;
    this.includePrerelease = !!options.includePrerelease;
    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`);
    }
    this.raw = version;
    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];
    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError("Invalid major version");
    }
    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError("Invalid minor version");
    }
    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError("Invalid patch version");
    }
    if (!m[4]) {
      this.prerelease = [];
    } else {
      this.prerelease = m[4].split(".").map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id;
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num;
          }
        }
        return id;
      });
    }
    this.build = m[5] ? m[5].split(".") : [];
    this.format();
  }
  format() {
    this.version = `${this.major}.${this.minor}.${this.patch}`;
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join(".")}`;
    }
    return this.version;
  }
  toString() {
    return this.version;
  }
  compare(other) {
    debug("SemVer.compare", this.version, this.options, other);
    if (!(other instanceof SemVer)) {
      if (typeof other === "string" && other === this.version) {
        return 0;
      }
      other = new SemVer(other, this.options);
    }
    if (other.version === this.version) {
      return 0;
    }
    return this.compareMain(other) || this.comparePre(other);
  }
  compareMain(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
  }
  comparePre(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    if (this.prerelease.length && !other.prerelease.length) {
      return -1;
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1;
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0;
    }
    let i = 0;
    do {
      const a = this.prerelease[i];
      const b = other.prerelease[i];
      debug("prerelease compare", i, a, b);
      if (a === void 0 && b === void 0) {
        return 0;
      } else if (b === void 0) {
        return 1;
      } else if (a === void 0) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  }
  compareBuild(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    let i = 0;
    do {
      const a = this.build[i];
      const b = other.build[i];
      debug("prerelease compare", i, a, b);
      if (a === void 0 && b === void 0) {
        return 0;
      } else if (b === void 0) {
        return 1;
      } else if (a === void 0) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(release, identifier, identifierBase) {
    switch (release) {
      case "premajor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc("pre", identifier, identifierBase);
        break;
      case "preminor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc("pre", identifier, identifierBase);
        break;
      case "prepatch":
        this.prerelease.length = 0;
        this.inc("patch", identifier, identifierBase);
        this.inc("pre", identifier, identifierBase);
        break;
      case "prerelease":
        if (this.prerelease.length === 0) {
          this.inc("patch", identifier, identifierBase);
        }
        this.inc("pre", identifier, identifierBase);
        break;
      case "major":
        if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
          this.major++;
        }
        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break;
      case "minor":
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++;
        }
        this.patch = 0;
        this.prerelease = [];
        break;
      case "patch":
        if (this.prerelease.length === 0) {
          this.patch++;
        }
        this.prerelease = [];
        break;
      case "pre": {
        const base = Number(identifierBase) ? 1 : 0;
        if (!identifier && identifierBase === false) {
          throw new Error("invalid increment argument: identifier is empty");
        }
        if (this.prerelease.length === 0) {
          this.prerelease = [base];
        } else {
          let i = this.prerelease.length;
          while (--i >= 0) {
            if (typeof this.prerelease[i] === "number") {
              this.prerelease[i]++;
              i = -2;
            }
          }
          if (i === -1) {
            if (identifier === this.prerelease.join(".") && identifierBase === false) {
              throw new Error("invalid increment argument: identifier already exists");
            }
            this.prerelease.push(base);
          }
        }
        if (identifier) {
          let prerelease = [identifier, base];
          if (identifierBase === false) {
            prerelease = [identifier];
          }
          if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = prerelease;
            }
          } else {
            this.prerelease = prerelease;
          }
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${release}`);
    }
    this.raw = this.format();
    if (this.build.length) {
      this.raw += `+${this.build.join(".")}`;
    }
    return this;
  }
}
module.exports = SemVer;


/***/ }),

/***/ 58328:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(45669);
const compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
module.exports = compare;


/***/ }),

/***/ 64797:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(58328);
const lt = (a, b, loose) => compare(a, b, loose) < 0;
module.exports = lt;


/***/ }),

/***/ 53077:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(45669);
const parse = (version, options, throwErrors = false) => {
  if (version instanceof SemVer) {
    return version;
  }
  try {
    return new SemVer(version, options);
  } catch (er) {
    if (!throwErrors) {
      return null;
    }
    throw er;
  }
};
module.exports = parse;


/***/ }),

/***/ 85811:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const parse = __webpack_require__(53077);
const valid = (version, options) => {
  const v = parse(version, options);
  return v ? v.version : null;
};
module.exports = valid;


/***/ }),

/***/ 70983:
/***/ ((module) => {

const SEMVER_SPEC_VERSION = "2.0.0";
const MAX_LENGTH = 256;
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991;
const MAX_SAFE_COMPONENT_LENGTH = 16;
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
const RELEASE_TYPES = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
module.exports = {
  MAX_LENGTH,
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_BUILD_LENGTH,
  MAX_SAFE_INTEGER,
  RELEASE_TYPES,
  SEMVER_SPEC_VERSION,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};


/***/ }),

/***/ 18774:
/***/ ((module) => {

const debug = typeof process === "object" && ({"ADMIN_PATH":"/admin/","NODE_ENV":"production","STRAPI_ADMIN_BACKEND_URL":"","STRAPI_TELEMETRY_DISABLED":undefined}) && ({"ADMIN_PATH":"/admin/","NODE_ENV":"production","STRAPI_ADMIN_BACKEND_URL":"","STRAPI_TELEMETRY_DISABLED":undefined}).NODE_DEBUG && /\bsemver\b/i.test(({"ADMIN_PATH":"/admin/","NODE_ENV":"production","STRAPI_ADMIN_BACKEND_URL":"","STRAPI_TELEMETRY_DISABLED":undefined}).NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
};
module.exports = debug;


/***/ }),

/***/ 33503:
/***/ ((module) => {

const numeric = /^[0-9]+$/;
const compareIdentifiers = (a, b) => {
  const anum = numeric.test(a);
  const bnum = numeric.test(b);
  if (anum && bnum) {
    a = +a;
    b = +b;
  }
  return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
};
const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
module.exports = {
  compareIdentifiers,
  rcompareIdentifiers
};


/***/ }),

/***/ 43363:
/***/ ((module) => {

const looseOption = Object.freeze({ loose: true });
const emptyOpts = Object.freeze({});
const parseOptions = (options) => {
  if (!options) {
    return emptyOpts;
  }
  if (typeof options !== "object") {
    return looseOption;
  }
  return options;
};
module.exports = parseOptions;


/***/ }),

/***/ 3094:
/***/ ((module, exports, __webpack_require__) => {

const {
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_BUILD_LENGTH,
  MAX_LENGTH
} = __webpack_require__(70983);
const debug = __webpack_require__(18774);
exports = module.exports = {};
const re = exports.re = [];
const safeRe = exports.safeRe = [];
const src = exports.src = [];
const t = exports.t = {};
let R = 0;
const LETTERDASHNUMBER = "[a-zA-Z0-9-]";
const safeRegexReplacements = [
  ["\\s", 1],
  ["\\d", MAX_LENGTH],
  [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
];
const makeSafeRegex = (value) => {
  for (const [token, max] of safeRegexReplacements) {
    value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
  }
  return value;
};
const createToken = (name, value, isGlobal) => {
  const safe = makeSafeRegex(value);
  const index = R++;
  debug(name, index, value);
  t[name] = index;
  src[index] = value;
  re[index] = new RegExp(value, isGlobal ? "g" : void 0);
  safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
};
createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
createToken("FULL", `^${src[t.FULLPLAIN]}$`);
createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
createToken("GTLT", "((?:<|>)?=?)");
createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
createToken("COERCE", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:$|[^\\d])`);
createToken("COERCERTL", src[t.COERCE], true);
createToken("LONETILDE", "(?:~>?)");
createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
exports.tildeTrimReplace = "$1~";
createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
createToken("LONECARET", "(?:\\^)");
createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
exports.caretTrimReplace = "$1^";
createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
exports.comparatorTrimReplace = "$1$2$3";
createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
createToken("STAR", "(<|>)?=?\\s*\\*");
createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");


/***/ }),

/***/ 27074:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ MainNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37652);
/* harmony import */ var _MainNavContext_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4188);
/* harmony import */ var _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10701);




const MainNavWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)((0,_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .k))`
  width: ${({ condensed }) => condensed ? "max-content" : `${224 / 16}rem`};
  border-right: 1px solid ${({ theme }) => theme.colors.neutral150};
`;
const MainNav = ({ condensed = false, ...props }) => {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MainNavContext_mjs__WEBPACK_IMPORTED_MODULE_3__/* .MainNavContext */ .f.Provider, { value: condensed, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MainNavWrapper, { alignItems: "normal", as: "nav", background: "neutral0", condensed, direction: "column", height: "100vh", position: "sticky", top: 0, zIndex: 2, ...props }) });
};



/***/ }),

/***/ 4188:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useMainNav),
/* harmony export */   f: () => (/* binding */ MainNavContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27279);

const MainNavContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(false);
const useMainNav = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MainNavContext);



/***/ }),

/***/ 44240:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ NavBrand)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27279);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37652);
/* harmony import */ var _MainNavContext_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4188);
/* harmony import */ var _BaseLink_BaseLink_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30413);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93415);
/* harmony import */ var _VisuallyHidden_VisuallyHidden_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10989);
/* harmony import */ var _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10701);
/* harmony import */ var _Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32370);









const BrandIconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.div`
  border-radius: ${({ theme }) => theme.borderRadius};

  svg,
  img {
    height: ${({ condensed }) => condensed ? `${40 / 16}rem` : `${32 / 16}rem`};
    width: ${({ condensed }) => condensed ? `${40 / 16}rem` : `${32 / 16}rem`};
  }
`;
const NavLinkWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_BaseLink_BaseLink_mjs__WEBPACK_IMPORTED_MODULE_3__/* .BaseLink */ .f))`
  text-decoration: unset;
  color: inherit;
`;
const NavBrand = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ workplace, title, icon, ...props }, ref) => {
  const condensed = (0,_MainNavContext_mjs__WEBPACK_IMPORTED_MODULE_4__/* .useMainNav */ .S)();
  props.to = props?.to ?? "/";
  if (condensed) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_BaseLink_BaseLink_mjs__WEBPACK_IMPORTED_MODULE_3__/* .BaseLink */ .f, { ref, ...props, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .x, { paddingLeft: 3, paddingRight: 3, paddingTop: 4, paddingBottom: 4, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BrandIconWrapper, { condensed: true, children: [icon, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_VisuallyHidden_VisuallyHidden_mjs__WEBPACK_IMPORTED_MODULE_6__/* .VisuallyHidden */ .T, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: title }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: workplace })] })] }) }) });
  }
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NavLinkWrapper, { ref, ...props, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .x, { paddingLeft: 3, paddingRight: 3, paddingTop: 4, paddingBottom: 4, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .k, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BrandIconWrapper, { "aria-hidden": true, tabIndex: -1, children: icon }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .x, { paddingLeft: 2, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_8__/* .Typography */ .Z, { fontWeight: "bold", textColor: "neutral800", as: "span", children: [title, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VisuallyHidden_VisuallyHidden_mjs__WEBPACK_IMPORTED_MODULE_6__/* .VisuallyHidden */ .T, { as: "span", children: workplace })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_8__/* .Typography */ .Z, { variant: "pi", as: "p", textColor: "neutral600", "aria-hidden": true, children: workplace })] })] }) }) });
});



/***/ }),

/***/ 25711:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ NavCondense)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89242);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64449);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37652);
/* harmony import */ var _MainNavContext_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4188);
/* harmony import */ var _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10701);
/* harmony import */ var _Icon_Icon_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50703);
/* harmony import */ var _VisuallyHidden_VisuallyHidden_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10989);







const NavCondenseWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)((0,_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .k)).attrs((props) => ({
  justifyContent: "center",
  ...props
}))`
  background: ${({ theme }) => theme.colors.neutral0};
  border: 1px solid ${({ theme }) => theme.colors.neutral150};
  border-radius: ${({ theme }) => theme.borderRadius};
  position: absolute;
  bottom: ${(9 + 4) / 16}rem; // 9 is the height of the svg and 4 is the padding below
  right: ${({ theme, condensed }) => condensed ? 0 : theme.spaces[5]};
  transform: ${({ condensed }) => condensed ? `translateX(50%)` : void 0};
  z-index: 2;
  width: ${18 / 16}rem;
  height: ${25 / 16}rem;

  svg {
    width: ${6 / 16}rem;
    height: ${9 / 16}rem;
  }
`;
const NavCondense = ({ children, ...props }) => {
  const condensed = (0,_MainNavContext_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useMainNav */ .S)();
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(NavCondenseWrapper, { as: "button", condensed, ...props, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_Icon_mjs__WEBPACK_IMPORTED_MODULE_4__/* .Icon */ .J, { as: condensed ? _strapi_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z : _strapi_icons__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, "aria-hidden": true, color: "neutral600" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VisuallyHidden_VisuallyHidden_mjs__WEBPACK_IMPORTED_MODULE_7__/* .VisuallyHidden */ .T, { children })] });
};



/***/ }),

/***/ 49296:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ NavFooter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93415);


const NavFooter = ({ children }) => {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .x, { position: "relative", children });
};



/***/ }),

/***/ 5267:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ NavLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27279);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37652);
/* harmony import */ var _MainNavContext_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4188);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93415);
/* harmony import */ var _BaseLink_BaseLink_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30413);
/* harmony import */ var _Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32370);
/* harmony import */ var _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10701);
/* harmony import */ var _Badge_Badge_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4963);
/* harmony import */ var _Tooltip_Tooltip_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2981);










const IconBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x))`
  svg {
    width: 1rem;
    height: 1rem;
  }
`;
const MainNavLinkWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_BaseLink_BaseLink_mjs__WEBPACK_IMPORTED_MODULE_4__/* .BaseLink */ .f))`
  position: relative;
  text-decoration: none;
  display: block;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.neutral0};

  ${_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z} {
    color: ${({ theme }) => theme.colors.neutral600};
  }

  svg path {
    fill: ${({ theme }) => theme.colors.neutral500};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.neutral100};

    ${_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z} {
      color: ${({ theme }) => theme.colors.neutral700};
    }

    svg path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }

  &.active {
    background: ${({ theme }) => theme.colors.primary100};

    svg path {
      fill: ${({ theme }) => theme.colors.primary600};
    }

    ${_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z} {
      color: ${({ theme }) => theme.colors.primary600};
      font-weight: 500;
    }
  }
`;
const MainNavRow = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .k))`
  padding: ${({ theme }) => `${theme.spaces[2]} ${theme.spaces[3]}`};
`;
const CustomBadge = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_Badge_Badge_mjs__WEBPACK_IMPORTED_MODULE_7__/* .Badge */ .C))`
  ${({ theme, condensed }) => condensed && `
	  position: absolute;
    // Values based on visual aspect 
    top: -${theme.spaces[3]};
    right:  -${theme.spaces[1]};
  `}

  ${_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z} {
    //find a solution to remove !important
    color: ${({ theme }) => theme.colors.neutral0} !important;
    line-height: 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({ theme }) => theme.spaces[6]};
  height: ${({ theme }) => theme.spaces[5]};
  padding: ${({ theme }) => `0 ${theme.spaces[2]}`};
  border-radius: ${({ theme }) => theme.spaces[10]};
  background: ${({ theme }) => theme.colors.primary600};
`;
const NavLink = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ children, icon, badgeContent, badgeAriaLabel, ...props }, ref) => {
  const condensed = (0,_MainNavContext_mjs__WEBPACK_IMPORTED_MODULE_8__/* .useMainNav */ .S)();
  if (condensed) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MainNavLinkWrapper, { ref, ...props, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tooltip_Tooltip_mjs__WEBPACK_IMPORTED_MODULE_9__/* .Tooltip */ .u, { position: "right", label: children, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MainNavRow, { as: "span", justifyContent: "center", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconBox, { "aria-hidden": true, paddingRight: 0, as: "span", children: icon }), badgeContent && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomBadge, { condensed: true, "aria-label": badgeAriaLabel, children: badgeContent })] }) }) });
  }
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MainNavLinkWrapper, { ref, ...props, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MainNavRow, { as: "span", justifyContent: "space-between", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .k, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconBox, { "aria-hidden": true, paddingRight: 3, as: "span", children: icon }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, { children })] }), badgeContent && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomBadge, { justifyContent: "center", "aria-label": badgeAriaLabel, children: badgeContent })] }) });
});



/***/ }),

/***/ 36395:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ NavSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27279);
/* harmony import */ var _MainNavContext_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4188);
/* harmony import */ var _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10701);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93415);
/* harmony import */ var _Divider_Divider_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84366);
/* harmony import */ var _VisuallyHidden_VisuallyHidden_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10989);
/* harmony import */ var _Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32370);








const NavSection = ({ label, children, horizontal = false, spacing = 2, ...props }) => {
  const condensed = (0,_MainNavContext_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMainNav */ .S)();
  if (condensed) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .k, { direction: "column", alignItems: "stretch", gap: 2, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .x, { paddingTop: 1, paddingBottom: 1, background: "neutral0", hasRadius: true, as: "span", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Divider_Divider_mjs__WEBPACK_IMPORTED_MODULE_5__/* .Divider */ .i, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VisuallyHidden_VisuallyHidden_mjs__WEBPACK_IMPORTED_MODULE_6__/* .VisuallyHidden */ .T, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: label }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .k, { as: "ul", gap: spacing, direction: horizontal ? "row" : "column", alignItems: horizontal ? "center" : "stretch", ...props, children: react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child, index) => {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: child }, index);
    }) })] });
  }
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .k, { direction: "column", alignItems: "stretch", gap: 2, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .x, { paddingTop: 1, paddingBottom: 1, background: "neutral0", paddingRight: 3, paddingLeft: 3, hasRadius: true, as: "span", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_7__/* .Typography */ .Z, { variant: "sigma", textColor: "neutral600", children: label }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .k, { as: "ul", gap: spacing, direction: horizontal ? "row" : "column", alignItems: horizontal ? "center" : "stretch", ...props, children: react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child, index) => {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: child }, index);
  }) })] });
};



/***/ }),

/***/ 71335:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ NavSections)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27279);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37652);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93415);
/* harmony import */ var _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10701);





const BoxGrow = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x))`
  flex-grow: 1;
  overflow-y: auto;
`;
const NavSections = ({ children, spacing = 4, horizontal = false, ...props }) => {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BoxGrow, { paddingLeft: 3, paddingRight: 2, paddingTop: 3, paddingBottom: 8, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .k, { as: "ul", gap: spacing, direction: horizontal ? "row" : "column", alignItems: horizontal ? "center" : "stretch", ...props, children: react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child, index) => {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: child }, index);
  }) }) });
};



/***/ }),

/***/ 65216:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ NavUser)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74081);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27279);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37652);
/* harmony import */ var _MainNavContext_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4188);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93415);
/* harmony import */ var _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10701);
/* harmony import */ var _Avatar_Avatar_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12391);
/* harmony import */ var _VisuallyHidden_VisuallyHidden_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10989);
/* harmony import */ var _Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32370);









const NavUserBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x))`
  border-top: 1px solid ${({ theme }) => theme.colors.neutral150};
`;
const NavUser = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ src, children, initials, ...props }, ref) => {
  const condensed = (0,_MainNavContext_mjs__WEBPACK_IMPORTED_MODULE_4__/* .useMainNav */ .S)();
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NavUserBox, { paddingTop: 3, paddingBottom: 3, paddingLeft: 5, paddingRight: 5, ...props, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .k, { as: "button", justifyContent: condensed ? "center" : void 0, ref, children: [src ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Avatar_Avatar_mjs__WEBPACK_IMPORTED_MODULE_6__/* .Avatar */ .q, { src, alt: "", "aria-hidden": true }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Avatar_Avatar_mjs__WEBPACK_IMPORTED_MODULE_6__/* .Initials */ .L, { children: initials }), condensed ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VisuallyHidden_VisuallyHidden_mjs__WEBPACK_IMPORTED_MODULE_7__/* .VisuallyHidden */ .T, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children }) }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, { width: `${130 / 16}rem`, paddingLeft: 2, as: "span", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_8__/* .Typography */ .Z, { ellipsis: true, textColor: "neutral600", children }) })] }) });
});



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