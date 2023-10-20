"use strict";
(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([[6033],{

/***/ 21289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ STAGE_ATTRIBUTE_NAME),
/* harmony export */   U: () => (/* binding */ ASSIGNEE_ATTRIBUTE_NAME)
/* harmony export */ });
const STAGE_ATTRIBUTE_NAME = "strapi_stage";
const ASSIGNEE_ATTRIBUTE_NAME = "strapi_assignee";


/***/ }),

/***/ 16033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   REVIEW_WORKFLOW_COLUMNS_EE: () => (/* binding */ REVIEW_WORKFLOW_COLUMNS_EE)
/* harmony export */ });
/* harmony import */ var _admin_src_content_manager_utils_getTrad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45283);
/* harmony import */ var _EditView_InformationBox_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21289);


const REVIEW_WORKFLOW_COLUMNS_EE = [
  {
    key: `__${_EditView_InformationBox_constants__WEBPACK_IMPORTED_MODULE_0__/* .STAGE_ATTRIBUTE_NAME */ .I}_temp_key__`,
    name: _EditView_InformationBox_constants__WEBPACK_IMPORTED_MODULE_0__/* .STAGE_ATTRIBUTE_NAME */ .I,
    fieldSchema: {
      type: "relation"
    },
    metadatas: {
      // formatMessage() will be applied when the column is rendered
      label: {
        id: (0,_admin_src_content_manager_utils_getTrad__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(`containers.ListPage.table-headers.reviewWorkflows.stage`),
        defaultMessage: "Review stage"
      },
      searchable: false,
      sortable: true,
      mainField: {
        name: "name",
        schema: {
          type: "string"
        }
      }
    }
  },
  {
    key: `__${_EditView_InformationBox_constants__WEBPACK_IMPORTED_MODULE_0__/* .ASSIGNEE_ATTRIBUTE_NAME */ .U}_temp_key__`,
    name: _EditView_InformationBox_constants__WEBPACK_IMPORTED_MODULE_0__/* .ASSIGNEE_ATTRIBUTE_NAME */ .U,
    fieldSchema: {
      type: "relation"
    },
    metadatas: {
      label: {
        id: (0,_admin_src_content_manager_utils_getTrad__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(`containers.ListPage.table-headers.reviewWorkflows.assignee`),
        defaultMessage: "Assignee"
      },
      searchable: false,
      sortable: true,
      mainField: {
        name: "firstname",
        schema: {
          type: "string"
        }
      }
    }
  }
];


/***/ })

}]);