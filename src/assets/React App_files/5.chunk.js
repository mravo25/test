(this["webpackJsonpclient"] = this["webpackJsonpclient"] || []).push([[5],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/Handover-edit.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/styles/Handover-edit.css ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".handover-record {\n    display: grid;\n    grid-gap: 5px;\n    grid-template-columns: 50% 50%;\n}\n\n.attachments-content {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n}\n.attachment {\n    margin: 5px;\n}\n\n.subject {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 1;\n    grid-row-end: 2;\n}\n\n.type {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 3;\n}\n\n.status {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n}\n\n.severity {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 3;\n    grid-row-end: 4;\n}\n\n.imt {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 3;\n    grid-row-end: 4;\n}\n\n.customer {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 4;\n    grid-row-end: 5;\n}\n\n.system {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 4;\n    grid-row-end: 5;\n}\n\n.responsible {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 5;\n    grid-row-end: 6;\n}\n\n.co-responsibles {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 5;\n    grid-row-end: 6;\n}\n\n.master_ticket {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 6;\n    grid-row-end: 7;\n}\n\n.slave_tickets {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 7;\n    grid-row-end: 8;\n}\n\n.description {\n    margin-bottom: 10px;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 8;\n    grid-row-end: 9;\n    height: 400px;\n}\n\n.resolution {\n    margin: 10px 0;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 9;\n    grid-row-end: 10;\n    height: 400px;\n}\n\n.attachments {\n    margin-top: 10px;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 10;\n    grid-row-end: 11;\n}\n\n.activities {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 11;\n    grid-row-end: 12;\n    display: grid !important;\n    grid-template-columns: 49.5% 49.5%;\n    grid-gap: 5px;\n}\n\n.activity_1 {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 2;\n}\n\n.activity_2 {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 1;\n    grid-row-end: 2;\n}\n\n.activity_3 {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 3;\n}\n\n.activity_4 {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n}\n\n.scheduled_start {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 12;\n    grid-row-end: 13;\n    display: grid !important;\n    grid-gap: 5px;\n    grid-template-columns: 95%;\n}\n\n.scheduled_end {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 12;\n    grid-row-end: 13;\n    display: grid !important;\n    grid-gap: 5px;\n    grid-template-columns: 95%;\n}\n\n.real_start {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 13;\n    grid-row-end: 14;\n    display: grid !important;\n    grid-gap: 5px;\n    grid-template-columns: 95%;\n}\n\n.real_end {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 13;\n    grid-row-end: 14;\n    display: grid !important;\n    grid-gap: 5px;\n    grid-template-columns: 95%;\n}\n\n.durations {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 14;\n    grid-row-end: 15;\n}\n\n.additionals {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 15;\n    grid-row-end: 16;\n}\n\n.bx--list-box, .bx--select-input, .bx--select, .bx--select-input__wrapper,\n.bx--list-input, .bx--date-picker-container {\n    width: 100% !important;\n    max-width: 100% !important;\n}\n\n.date-time-label {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 2;\n}\n\n.date {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    max-width: 100% !important;\n}\n\n.time {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 3;\n    grid-row-end: 4;\n}\n\n.duration-add-tile {\n    display: grid !important;\n    grid-gap: 5px;\n    width: 100%;\n    grid-template-columns: 49% 49%;\n}\n\n.person-div {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 3;\n}\n\n.value-div {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 2;\n}\n\n.unit-div {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 1;\n    grid-row-end: 2;\n}\n\n.add-button-div {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    text-align: right;\n    padding-top: 15px;\n}\n\n.duration-list {\n    display: flex;\n    justify-content: left;\n}\n.duration-tile {\n    max-width: 50%;\n    font-size: 15px;\n}\n\n.bool-fields, .text-and-select-fields {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.bool-field {\n    min-width: 100px !important;\n    margin-bottom: 10px;\n}\n\n.text-field, .select-field {\n    width: 50% !important;\n    padding: 0 5px !important;\n    margin-bottom: 10px;\n}\n\n.file-uploader {\n    height: 45px;\n}\n\n@media only screen and (min-width: 640px) {\n    .handover-record {\n        grid-template-columns: 33% 33% 33%;\n    }\n\n    .subject {\n        grid-column-start: 1;\n        grid-column-end: 4;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .type {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 2;\n        grid-row-end: 3;\n    }\n\n    .status {\n        grid-column-start: 2;\n        grid-column-end: 3;\n        grid-row-start: 2;\n        grid-row-end: 3;\n    }\n\n    .severity {\n        grid-column-start: 3;\n        grid-column-end: 4;\n        grid-row-start: 2;\n        grid-row-end: 3;\n    }\n\n    .imt {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 3;\n        grid-row-end: 4;\n    }\n\n    .customer {\n        grid-column-start: 2;\n        grid-column-end: 3;\n        grid-row-start: 3;\n        grid-row-end: 4;\n    }\n\n    .system {\n        grid-column-start: 3;\n        grid-column-end: 4;\n        grid-row-start: 3;\n        grid-row-end: 4;\n    }\n\n    .responsible {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 4;\n        grid-row-end: 5;\n    }\n\n    .co-responsibles {\n        grid-column-start: 2;\n        grid-column-end: 3;\n        grid-row-start: 4;\n        grid-row-end: 5;\n    }\n\n    .master_ticket {\n        grid-column-start: 3;\n        grid-column-end: 4;\n        grid-row-start: 4;\n        grid-row-end: 5;\n    }\n\n    .slave_tickets {\n        grid-column-start: 1;\n        grid-column-end: 4;\n        grid-row-start: 5;\n        grid-row-end: 6;\n    }\n\n    .description {\n        margin-bottom: 10px;\n        grid-column-start: 1;\n        grid-column-end: 4;\n        grid-row-start: 6;\n        grid-row-end: 7;\n        height: 400px;\n    }\n\n    .resolution {\n        margin: 10px 0;\n        grid-column-start: 1;\n        grid-column-end: 4;\n        grid-row-start: 7;\n        grid-row-end: 8;\n        height: 400px;\n    }\n\n    .attachments {\n        margin-top: 10px;\n        grid-column-start: 1;\n        grid-column-end: 4;\n        grid-row-start: 8;\n        grid-row-end: 9;\n    }\n\n    .activities {\n        grid-column-start: 1;\n        grid-column-end: 4;\n        grid-row-start: 9;\n        grid-row-end: 10;\n        display: grid !important;\n        grid-template-columns: 33% 33% 33%;\n        grid-gap: 5px;\n    }\n\n    .activity_1 {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .activity_2 {\n        grid-column-start: 2;\n        grid-column-end: 3;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .activity_3 {\n        grid-column-start: 3;\n        grid-column-end: 4;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .activity_4 {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 2;\n        grid-row-end: 3;\n    }\n\n    .scheduled_start {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 10;\n        grid-row-end: 11;\n        display: grid !important;\n        grid-gap: 5px;\n        grid-template-columns: 60% 30%;\n    }\n\n    .scheduled_end {\n        grid-column-start: 2;\n        grid-column-end: 3;\n        grid-row-start: 10;\n        grid-row-end: 11;\n        display: grid !important;\n        grid-gap: 5px;\n        grid-template-columns: 60% 30%;\n    }\n\n    .real_start {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 11;\n        grid-row-end: 12;\n        display: grid !important;\n        grid-gap: 5px;\n        grid-template-columns: 60% 30%;\n    }\n\n    .real_end {\n        grid-column-start: 2;\n        grid-column-end: 3;\n        grid-row-start: 11;\n        grid-row-end: 12;\n        display: grid !important;\n        grid-gap: 5px;\n        grid-template-columns: 60% 30%;\n    }\n\n    .durations {\n        grid-column-start: 1;\n        grid-column-end: 4;\n        grid-row-start: 12;\n        grid-row-end: 13;\n    }\n\n    .additionals {\n        grid-column-start: 1;\n        grid-column-end: 4;\n        grid-row-start: 13;\n        grid-row-end: 14;\n    }\n\n    .date-time-label {\n        grid-column-start: 1;\n        grid-column-end: 3;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .date {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 2;\n        grid-row-end: 3;\n        max-width: 100% !important;\n    }\n\n    .time {\n        grid-column-start: 2;\n        grid-column-end: 3;\n        grid-row-start: 2;\n        grid-row-end: 3;\n    }\n}\n\n@media only screen and (min-width: 1024px) {\n    .handover-record {\n        grid-template-columns: 24.75% 24.75% 24.75% 24.75%;\n    }\n\n    .subject {\n        grid-column-start: 1;\n        grid-column-end: 3;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .type {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 2;\n        grid-row-end: 3;\n    }\n\n    .status {\n        grid-column-start: 2;\n        grid-column-end: 3;\n        grid-row-start: 2;\n        grid-row-end: 3;\n    }\n\n    .severity {\n        grid-column-start: 3;\n        grid-column-end: 4;\n        grid-row-start: 2;\n        grid-row-end: 3;\n    }\n\n    .imt {\n        grid-column-start: 4;\n        grid-column-end: 5;\n        grid-row-start: 2;\n        grid-row-end: 3;\n    }\n\n    .customer {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 3;\n        grid-row-end: 4;\n    }\n\n    .system {\n        grid-column-start: 2;\n        grid-column-end: 3;\n        grid-row-start: 3;\n        grid-row-end: 4;\n    }\n\n    .responsible {\n        grid-column-start: 3;\n        grid-column-end: 4;\n        grid-row-start: 3;\n        grid-row-end: 4;\n    }\n\n    .co-responsibles {\n        grid-column-start: 4;\n        grid-column-end: 5;\n        grid-row-start: 3;\n        grid-row-end: 4;\n    }\n\n    .master_ticket {\n        grid-column-start: 3;\n        grid-column-end: 4;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .slave_tickets {\n        grid-column-start: 4;\n        grid-column-end: 5;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .description {\n        margin-bottom: 10px;\n        grid-column-start: 1;\n        grid-column-end: 3;\n        grid-row-start: 4;\n        grid-row-end: 5;\n        height: 400px;\n    }\n\n    .resolution {\n        margin-top: unset;\n        margin-bottom: 10px;\n        grid-column-start: 3;\n        grid-column-end: 5;\n        grid-row-start: 4;\n        grid-row-end: 5;\n        height: 400px;\n    }\n\n    .attachments {\n        margin-top: 10px;\n        grid-column-start: 1;\n        grid-column-end: 5;\n        grid-row-start: 5;\n        grid-row-end: 6;\n    }\n\n    .activities {\n        grid-column-start: 1;\n        grid-column-end: 5;\n        grid-row-start: 6;\n        grid-row-end: 7;\n        display: grid !important;\n        grid-template-columns: 24.75% 24.75% 24.75% 24.5%;\n        grid-gap: 5px;\n    }\n\n    .activity_1 {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .activity_2 {\n        grid-column-start: 2;\n        grid-column-end: 3;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .activity_3 {\n        grid-column-start: 3;\n        grid-column-end: 4;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .activity_4 {\n        grid-column-start: 4;\n        grid-column-end: 5;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .scheduled_start {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 7;\n        grid-row-end: 8;\n    }\n\n    .scheduled_end {\n        grid-column-start: 2;\n        grid-column-end: 3;\n        grid-row-start: 7;\n        grid-row-end: 8;\n    }\n\n    .real_start {\n        grid-column-start: 3;\n        grid-column-end: 4;\n        grid-row-start: 7;\n        grid-row-end: 8;\n    }\n\n    .real_end {\n        grid-column-start: 4;\n        grid-column-end: 5;\n        grid-row-start: 7;\n        grid-row-end: 8;\n    }\n\n    .durations {\n        grid-column-start: 1;\n        grid-column-end: 3;\n        grid-row-start: 8;\n        grid-row-end: 9;\n    }\n\n    .additionals {\n        grid-column-start: 3;\n        grid-column-end: 5;\n        grid-row-start: 8;\n        grid-row-end: 9;\n    }\n\n    .select-field {\n        width: 25% !important;\n    }\n}", "",{"version":3,"sources":["webpack://src/styles/Handover-edit.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,eAAe;AACnB;AACA;IACI,WAAW;AACf;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,wBAAwB;IACxB,kCAAkC;IAClC,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,wBAAwB;IACxB,aAAa;IACb,0BAA0B;AAC9B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,wBAAwB;IACxB,aAAa;IACb,0BAA0B;AAC9B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,wBAAwB;IACxB,aAAa;IACb,0BAA0B;AAC9B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,wBAAwB;IACxB,aAAa;IACb,0BAA0B;AAC9B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;;IAEI,sBAAsB;IACtB,0BAA0B;AAC9B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,WAAW;IACX,8BAA8B;AAClC;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;AACA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI;QACI,kCAAkC;IACtC;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,mBAAmB;QACnB,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;QACf,aAAa;IACjB;;IAEA;QACI,cAAc;QACd,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;QACf,aAAa;IACjB;;IAEA;QACI,gBAAgB;QAChB,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,gBAAgB;QAChB,wBAAwB;QACxB,kCAAkC;QAClC,aAAa;IACjB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,kBAAkB;QAClB,gBAAgB;QAChB,wBAAwB;QACxB,aAAa;QACb,8BAA8B;IAClC;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,kBAAkB;QAClB,gBAAgB;QAChB,wBAAwB;QACxB,aAAa;QACb,8BAA8B;IAClC;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,kBAAkB;QAClB,gBAAgB;QAChB,wBAAwB;QACxB,aAAa;QACb,8BAA8B;IAClC;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,kBAAkB;QAClB,gBAAgB;QAChB,wBAAwB;QACxB,aAAa;QACb,8BAA8B;IAClC;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,kBAAkB;QAClB,gBAAgB;IACpB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,kBAAkB;QAClB,gBAAgB;IACpB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;QACf,0BAA0B;IAC9B;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,kDAAkD;IACtD;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,mBAAmB;QACnB,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;QACf,aAAa;IACjB;;IAEA;QACI,iBAAiB;QACjB,mBAAmB;QACnB,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;QACf,aAAa;IACjB;;IAEA;QACI,gBAAgB;QAChB,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;QACf,wBAAwB;QACxB,iDAAiD;QACjD,aAAa;IACjB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,qBAAqB;IACzB;AACJ","sourcesContent":[".handover-record {\n    display: grid;\n    grid-gap: 5px;\n    grid-template-columns: 50% 50%;\n}\n\n.attachments-content {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n}\n.attachment {\n    margin: 5px;\n}\n\n.subject {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 1;\n    grid-row-end: 2;\n}\n\n.type {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 3;\n}\n\n.status {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n}\n\n.severity {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 3;\n    grid-row-end: 4;\n}\n\n.imt {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 3;\n    grid-row-end: 4;\n}\n\n.customer {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 4;\n    grid-row-end: 5;\n}\n\n.system {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 4;\n    grid-row-end: 5;\n}\n\n.responsible {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 5;\n    grid-row-end: 6;\n}\n\n.co-responsibles {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 5;\n    grid-row-end: 6;\n}\n\n.master_ticket {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 6;\n    grid-row-end: 7;\n}\n\n.slave_tickets {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 7;\n    grid-row-end: 8;\n}\n\n.description {\n    margin-bottom: 10px;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 8;\n    grid-row-end: 9;\n    height: 400px;\n}\n\n.resolution {\n    margin: 10px 0;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 9;\n    grid-row-end: 10;\n    height: 400px;\n}\n\n.attachments {\n    margin-top: 10px;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 10;\n    grid-row-end: 11;\n}\n\n.activities {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 11;\n    grid-row-end: 12;\n    display: grid !important;\n    grid-template-columns: 49.5% 49.5%;\n    grid-gap: 5px;\n}\n\n.activity_1 {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 2;\n}\n\n.activity_2 {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 1;\n    grid-row-end: 2;\n}\n\n.activity_3 {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 3;\n}\n\n.activity_4 {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n}\n\n.scheduled_start {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 12;\n    grid-row-end: 13;\n    display: grid !important;\n    grid-gap: 5px;\n    grid-template-columns: 95%;\n}\n\n.scheduled_end {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 12;\n    grid-row-end: 13;\n    display: grid !important;\n    grid-gap: 5px;\n    grid-template-columns: 95%;\n}\n\n.real_start {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 13;\n    grid-row-end: 14;\n    display: grid !important;\n    grid-gap: 5px;\n    grid-template-columns: 95%;\n}\n\n.real_end {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 13;\n    grid-row-end: 14;\n    display: grid !important;\n    grid-gap: 5px;\n    grid-template-columns: 95%;\n}\n\n.durations {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 14;\n    grid-row-end: 15;\n}\n\n.additionals {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 15;\n    grid-row-end: 16;\n}\n\n.bx--list-box, .bx--select-input, .bx--select, .bx--select-input__wrapper,\n.bx--list-input, .bx--date-picker-container {\n    width: 100% !important;\n    max-width: 100% !important;\n}\n\n.date-time-label {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 2;\n}\n\n.date {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    max-width: 100% !important;\n}\n\n.time {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 3;\n    grid-row-end: 4;\n}\n\n.duration-add-tile {\n    display: grid !important;\n    grid-gap: 5px;\n    width: 100%;\n    grid-template-columns: 49% 49%;\n}\n\n.person-div {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 3;\n}\n\n.value-div {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 2;\n}\n\n.unit-div {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 1;\n    grid-row-end: 2;\n}\n\n.add-button-div {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    text-align: right;\n    padding-top: 15px;\n}\n\n.duration-list {\n    display: flex;\n    justify-content: left;\n}\n.duration-tile {\n    max-width: 50%;\n    font-size: 15px;\n}\n\n.bool-fields, .text-and-select-fields {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.bool-field {\n    min-width: 100px !important;\n    margin-bottom: 10px;\n}\n\n.text-field, .select-field {\n    width: 50% !important;\n    padding: 0 5px !important;\n    margin-bottom: 10px;\n}\n\n.file-uploader {\n    height: 45px;\n}\n\n@media only screen and (min-width: 640px) {\n    .handover-record {\n        grid-template-columns: 33% 33% 33%;\n    }\n\n    .subject {\n        grid-column-start: 1;\n        grid-column-end: 4;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .type {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 2;\n        grid-row-end: 3;\n    }\n\n    .status {\n        grid-column-start: 2;\n        grid-column-end: 3;\n        grid-row-start: 2;\n        grid-row-end: 3;\n    }\n\n    .severity {\n        grid-column-start: 3;\n        grid-column-end: 4;\n        grid-row-start: 2;\n        grid-row-end: 3;\n    }\n\n    .imt {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 3;\n        grid-row-end: 4;\n    }\n\n    .customer {\n        grid-column-start: 2;\n        grid-column-end: 3;\n        grid-row-start: 3;\n        grid-row-end: 4;\n    }\n\n    .system {\n        grid-column-start: 3;\n        grid-column-end: 4;\n        grid-row-start: 3;\n        grid-row-end: 4;\n    }\n\n    .responsible {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 4;\n        grid-row-end: 5;\n    }\n\n    .co-responsibles {\n        grid-column-start: 2;\n        grid-column-end: 3;\n        grid-row-start: 4;\n        grid-row-end: 5;\n    }\n\n    .master_ticket {\n        grid-column-start: 3;\n        grid-column-end: 4;\n        grid-row-start: 4;\n        grid-row-end: 5;\n    }\n\n    .slave_tickets {\n        grid-column-start: 1;\n        grid-column-end: 4;\n        grid-row-start: 5;\n        grid-row-end: 6;\n    }\n\n    .description {\n        margin-bottom: 10px;\n        grid-column-start: 1;\n        grid-column-end: 4;\n        grid-row-start: 6;\n        grid-row-end: 7;\n        height: 400px;\n    }\n\n    .resolution {\n        margin: 10px 0;\n        grid-column-start: 1;\n        grid-column-end: 4;\n        grid-row-start: 7;\n        grid-row-end: 8;\n        height: 400px;\n    }\n\n    .attachments {\n        margin-top: 10px;\n        grid-column-start: 1;\n        grid-column-end: 4;\n        grid-row-start: 8;\n        grid-row-end: 9;\n    }\n\n    .activities {\n        grid-column-start: 1;\n        grid-column-end: 4;\n        grid-row-start: 9;\n        grid-row-end: 10;\n        display: grid !important;\n        grid-template-columns: 33% 33% 33%;\n        grid-gap: 5px;\n    }\n\n    .activity_1 {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .activity_2 {\n        grid-column-start: 2;\n        grid-column-end: 3;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .activity_3 {\n        grid-column-start: 3;\n        grid-column-end: 4;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .activity_4 {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 2;\n        grid-row-end: 3;\n    }\n\n    .scheduled_start {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 10;\n        grid-row-end: 11;\n        display: grid !important;\n        grid-gap: 5px;\n        grid-template-columns: 60% 30%;\n    }\n\n    .scheduled_end {\n        grid-column-start: 2;\n        grid-column-end: 3;\n        grid-row-start: 10;\n        grid-row-end: 11;\n        display: grid !important;\n        grid-gap: 5px;\n        grid-template-columns: 60% 30%;\n    }\n\n    .real_start {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 11;\n        grid-row-end: 12;\n        display: grid !important;\n        grid-gap: 5px;\n        grid-template-columns: 60% 30%;\n    }\n\n    .real_end {\n        grid-column-start: 2;\n        grid-column-end: 3;\n        grid-row-start: 11;\n        grid-row-end: 12;\n        display: grid !important;\n        grid-gap: 5px;\n        grid-template-columns: 60% 30%;\n    }\n\n    .durations {\n        grid-column-start: 1;\n        grid-column-end: 4;\n        grid-row-start: 12;\n        grid-row-end: 13;\n    }\n\n    .additionals {\n        grid-column-start: 1;\n        grid-column-end: 4;\n        grid-row-start: 13;\n        grid-row-end: 14;\n    }\n\n    .date-time-label {\n        grid-column-start: 1;\n        grid-column-end: 3;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .date {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 2;\n        grid-row-end: 3;\n        max-width: 100% !important;\n    }\n\n    .time {\n        grid-column-start: 2;\n        grid-column-end: 3;\n        grid-row-start: 2;\n        grid-row-end: 3;\n    }\n}\n\n@media only screen and (min-width: 1024px) {\n    .handover-record {\n        grid-template-columns: 24.75% 24.75% 24.75% 24.75%;\n    }\n\n    .subject {\n        grid-column-start: 1;\n        grid-column-end: 3;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .type {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 2;\n        grid-row-end: 3;\n    }\n\n    .status {\n        grid-column-start: 2;\n        grid-column-end: 3;\n        grid-row-start: 2;\n        grid-row-end: 3;\n    }\n\n    .severity {\n        grid-column-start: 3;\n        grid-column-end: 4;\n        grid-row-start: 2;\n        grid-row-end: 3;\n    }\n\n    .imt {\n        grid-column-start: 4;\n        grid-column-end: 5;\n        grid-row-start: 2;\n        grid-row-end: 3;\n    }\n\n    .customer {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 3;\n        grid-row-end: 4;\n    }\n\n    .system {\n        grid-column-start: 2;\n        grid-column-end: 3;\n        grid-row-start: 3;\n        grid-row-end: 4;\n    }\n\n    .responsible {\n        grid-column-start: 3;\n        grid-column-end: 4;\n        grid-row-start: 3;\n        grid-row-end: 4;\n    }\n\n    .co-responsibles {\n        grid-column-start: 4;\n        grid-column-end: 5;\n        grid-row-start: 3;\n        grid-row-end: 4;\n    }\n\n    .master_ticket {\n        grid-column-start: 3;\n        grid-column-end: 4;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .slave_tickets {\n        grid-column-start: 4;\n        grid-column-end: 5;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .description {\n        margin-bottom: 10px;\n        grid-column-start: 1;\n        grid-column-end: 3;\n        grid-row-start: 4;\n        grid-row-end: 5;\n        height: 400px;\n    }\n\n    .resolution {\n        margin-top: unset;\n        margin-bottom: 10px;\n        grid-column-start: 3;\n        grid-column-end: 5;\n        grid-row-start: 4;\n        grid-row-end: 5;\n        height: 400px;\n    }\n\n    .attachments {\n        margin-top: 10px;\n        grid-column-start: 1;\n        grid-column-end: 5;\n        grid-row-start: 5;\n        grid-row-end: 6;\n    }\n\n    .activities {\n        grid-column-start: 1;\n        grid-column-end: 5;\n        grid-row-start: 6;\n        grid-row-end: 7;\n        display: grid !important;\n        grid-template-columns: 24.75% 24.75% 24.75% 24.5%;\n        grid-gap: 5px;\n    }\n\n    .activity_1 {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .activity_2 {\n        grid-column-start: 2;\n        grid-column-end: 3;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .activity_3 {\n        grid-column-start: 3;\n        grid-column-end: 4;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .activity_4 {\n        grid-column-start: 4;\n        grid-column-end: 5;\n        grid-row-start: 1;\n        grid-row-end: 2;\n    }\n\n    .scheduled_start {\n        grid-column-start: 1;\n        grid-column-end: 2;\n        grid-row-start: 7;\n        grid-row-end: 8;\n    }\n\n    .scheduled_end {\n        grid-column-start: 2;\n        grid-column-end: 3;\n        grid-row-start: 7;\n        grid-row-end: 8;\n    }\n\n    .real_start {\n        grid-column-start: 3;\n        grid-column-end: 4;\n        grid-row-start: 7;\n        grid-row-end: 8;\n    }\n\n    .real_end {\n        grid-column-start: 4;\n        grid-column-end: 5;\n        grid-row-start: 7;\n        grid-row-end: 8;\n    }\n\n    .durations {\n        grid-column-start: 1;\n        grid-column-end: 3;\n        grid-row-start: 8;\n        grid-row-end: 9;\n    }\n\n    .additionals {\n        grid-column-start: 3;\n        grid-column-end: 5;\n        grid-row-start: 8;\n        grid-row-end: 9;\n    }\n\n    .select-field {\n        width: 25% !important;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/HandoverEdit/Durations/DurationAdd/View.tsx":
/*!***************************************************************!*\
  !*** ./src/pages/HandoverEdit/Durations/DurationAdd/View.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var carbon_components_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! carbon-components-react */ "./node_modules/carbon-components-react/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mravo/Projects/Handover2.0/client/src/pages/HandoverEdit/Durations/DurationAdd/View.tsx";




const View = ({
  users,
  selectedPersonId,
  durationUnit,
  durationValue,
  onValueChange,
  onSelectChange,
  onAddDuration
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_0__["Tile"], {
    className: "duration-add-tile",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "person-div",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_0__["Select"], {
        id: "person",
        name: "person",
        labelText: "Person:",
        value: selectedPersonId,
        onChange: onSelectChange,
        disabled: users.length == 0,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_0__["SelectItem"], {
          text: 'Select person',
          value: 0
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, undefined), users.map(user => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_0__["SelectItem"], {
          text: `${user.Name} ${user.Surname}`,
          value: user.Id
        }, user.Id, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "number-div",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_0__["NumberInput"], {
        id: "value",
        name: "value",
        invalidText: "Number is not valid",
        label: "Value:",
        max: 1000,
        min: 0,
        step: 5,
        value: durationValue,
        onChange: onValueChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "unit-div",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_0__["Select"], {
        id: "unit",
        name: "unit",
        labelText: "Unit:",
        value: durationUnit,
        onChange: onSelectChange,
        disabled: users.length == 0,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_0__["SelectItem"], {
          text: 'Minute(s)',
          value: 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_0__["SelectItem"], {
          text: 'Hour(s)',
          value: 60
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_0__["SelectItem"], {
          text: 'Day(s)',
          value: 60 * 24
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "add-button-div",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        onClick: onAddDuration,
        disabled: selectedPersonId == 0 || durationValue == 0,
        children: "Add"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, undefined);
};

_c = View;
/* harmony default export */ __webpack_exports__["default"] = (View);

var _c;

__webpack_require__.$Refresh$.register(_c, "View");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/HandoverEdit/Durations/DurationAdd/index.tsx":
/*!****************************************************************!*\
  !*** ./src/pages/HandoverEdit/Durations/DurationAdd/index.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View */ "./src/pages/HandoverEdit/Durations/DurationAdd/View.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mravo/Projects/Handover2.0/client/src/pages/HandoverEdit/Durations/DurationAdd/index.tsx",
    _s = __webpack_require__.$Refresh$.signature();





function DurationAdd({
  users,
  addDuration
}) {
  _s();

  const [selectedPersonId, setSelectedPersonId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [durationUnit, setDurationUnit] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const [durationValue, setDurationValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(5);

  const onSelectChange = e => {
    switch (e.target.name) {
      case 'person':
        setSelectedPersonId(parseInt(e.target.value));
        break;

      case 'unit':
        setDurationUnit(parseInt(e.target.value));
        break;

      default:
        break;
    }
  };

  const onAddDuration = () => {
    const duration = {
      User_id: selectedPersonId,
      Minutes: durationUnit * durationValue
    };
    addDuration(duration);
  };

  const onValueChange = e => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const newValue = parseInt(e.imaginaryTarget.valueAsNumber);
    setDurationValue(newValue);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_View__WEBPACK_IMPORTED_MODULE_1__["default"], {
    users: users,
    selectedPersonId: selectedPersonId,
    onSelectChange: onSelectChange,
    durationUnit: durationUnit,
    durationValue: durationValue,
    onAddDuration: onAddDuration,
    onValueChange: onValueChange
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, this);
}

_s(DurationAdd, "IznZJ6rygEIT82zBQpTb4Y+Y+co=");

_c = DurationAdd;
/* harmony default export */ __webpack_exports__["default"] = (DurationAdd);

var _c;

__webpack_require__.$Refresh$.register(_c, "DurationAdd");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/HandoverEdit/Durations/View.tsx":
/*!***************************************************!*\
  !*** ./src/pages/HandoverEdit/Durations/View.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DurationAdd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DurationAdd */ "./src/pages/HandoverEdit/Durations/DurationAdd/index.tsx");
/* harmony import */ var carbon_components_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! carbon-components-react */ "./node_modules/carbon-components-react/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mravo/Projects/Handover2.0/client/src/pages/HandoverEdit/Durations/View.tsx";





const View = ({
  users,
  durations,
  addDuration
}) => {
  const durationsProcessed = [];
  durations.forEach(duration => {
    let time = '';
    let minutesLeft = duration.Minutes;

    if (minutesLeft >= 60 * 24) {
      time += Math.floor(minutesLeft / (60 * 24)) + ' day(s) ';
      minutesLeft = minutesLeft % (60 * 24);
    }

    if (minutesLeft >= 60) {
      time += Math.floor(minutesLeft / 60) + ' hour(s) ';
      minutesLeft = minutesLeft % 60;
    }

    if (minutesLeft > 0) {
      time += minutesLeft + ' minute(s)';
    }

    const user = users.find(user => user.Id === duration.User_id);
    durationsProcessed.push({
      name: `${user === null || user === void 0 ? void 0 : user.Name} ${user === null || user === void 0 ? void 0 : user.Surname}`,
      time: time
    });
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_DurationAdd__WEBPACK_IMPORTED_MODULE_1__["default"], {
      users: users,
      addDuration: addDuration
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "duration-list",
      children: durationsProcessed.map(duration => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_2__["Tile"], {
        className: "duration-tile",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h5", {
          children: duration.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 25
        }, undefined), duration.time]
      }, duration.name, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, undefined);
};

_c = View;
/* harmony default export */ __webpack_exports__["default"] = (View);

var _c;

__webpack_require__.$Refresh$.register(_c, "View");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/HandoverEdit/Durations/index.tsx":
/*!****************************************************!*\
  !*** ./src/pages/HandoverEdit/Durations/index.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View */ "./src/pages/HandoverEdit/Durations/View.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mravo/Projects/Handover2.0/client/src/pages/HandoverEdit/Durations/index.tsx";




function Durations({
  users,
  durations,
  addDuration
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_View__WEBPACK_IMPORTED_MODULE_1__["default"], {
    users: users,
    durations: durations,
    addDuration: addDuration
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 12
  }, this);
}

_c = Durations;
/* harmony default export */ __webpack_exports__["default"] = (Durations);

var _c;

__webpack_require__.$Refresh$.register(_c, "Durations");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/HandoverEdit/Fields/BoolField/index.tsx":
/*!***********************************************************!*\
  !*** ./src/pages/HandoverEdit/Fields/BoolField/index.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var carbon_components_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! carbon-components-react */ "./node_modules/carbon-components-react/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mravo/Projects/Handover2.0/client/src/pages/HandoverEdit/Fields/BoolField/index.tsx";




const BoolField = ({
  field,
  value,
  onFieldValueChange
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_0__["Toggle"], {
    id: `field_${field.Id}`,
    labelText: `${field.Name}:`,
    labelA: "No",
    labelB: "Yes",
    toggled: parseInt(value) == 1,
    className: "bool-field",
    onToggle: checked => onFieldValueChange(field.Id, checked ? '1' : '0')
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined);
};

_c = BoolField;
/* harmony default export */ __webpack_exports__["default"] = (BoolField);

var _c;

__webpack_require__.$Refresh$.register(_c, "BoolField");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/HandoverEdit/Fields/SelectField/index.tsx":
/*!*************************************************************!*\
  !*** ./src/pages/HandoverEdit/Fields/SelectField/index.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var carbon_components_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! carbon-components-react */ "./node_modules/carbon-components-react/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mravo/Projects/Handover2.0/client/src/pages/HandoverEdit/Fields/SelectField/index.tsx";




const SelectField = ({
  field,
  value,
  onFieldValueChange,
  invalid
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "select-field",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_0__["Select"], {
      id: `field_${field.Id}`,
      labelText: `${field.Name}:`,
      name: field.Name,
      value: value,
      onChange: e => onFieldValueChange(field.Id, e.target.value),
      invalid: invalid,
      invalidText: 'This field is mandatory',
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_0__["SelectItem"], {
        text: `Choose ${field.Name}`,
        value: '0'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, undefined), field.Options.map(option => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_0__["SelectItem"], {
        text: option.Value,
        value: option.Id.toString()
      }, option.Id, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined);
};

_c = SelectField;
/* harmony default export */ __webpack_exports__["default"] = (SelectField);

var _c;

__webpack_require__.$Refresh$.register(_c, "SelectField");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/HandoverEdit/Fields/TextField/index.tsx":
/*!***********************************************************!*\
  !*** ./src/pages/HandoverEdit/Fields/TextField/index.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var carbon_components_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! carbon-components-react */ "./node_modules/carbon-components-react/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mravo/Projects/Handover2.0/client/src/pages/HandoverEdit/Fields/TextField/index.tsx";




const TextField = ({
  field,
  value,
  onFieldValueChange,
  invalid
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "text-field",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_0__["TextInput"], {
      id: `field_${field.Id}`,
      labelText: `${field.Name}:`,
      name: field.Name,
      value: value,
      placeholder: field.Name,
      onChange: e => onFieldValueChange(field.Id, e.target.value),
      invalid: invalid,
      invalidText: 'This field is mandatory'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined);
};

_c = TextField;
/* harmony default export */ __webpack_exports__["default"] = (TextField);

var _c;

__webpack_require__.$Refresh$.register(_c, "TextField");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/HandoverEdit/Fields/index.tsx":
/*!*************************************************!*\
  !*** ./src/pages/HandoverEdit/Fields/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../types/Field */ "./src/types/Field.ts");
/* harmony import */ var _BoolField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoolField */ "./src/pages/HandoverEdit/Fields/BoolField/index.tsx");
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextField */ "./src/pages/HandoverEdit/Fields/TextField/index.tsx");
/* harmony import */ var _SelectField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectField */ "./src/pages/HandoverEdit/Fields/SelectField/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mravo/Projects/Handover2.0/client/src/pages/HandoverEdit/Fields/index.tsx";







const Fields = ({
  fields,
  values,
  onFieldValueChange,
  invalidFields
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "bool-fields",
      children: fields.filter(f => f.Type == _types_Field__WEBPACK_IMPORTED_MODULE_1__["FieldType"].BOOL).map(f => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_BoolField__WEBPACK_IMPORTED_MODULE_2__["default"], {
        field: f,
        value: values.find(value => value.Additional_field_id === f.Id) ? values.find(value => value.Additional_field_id === f.Id).Value : '0',
        onFieldValueChange: onFieldValueChange
      }, f.Id, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 25
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "text-and-select-fields",
      children: [fields.filter(f => f.Type === _types_Field__WEBPACK_IMPORTED_MODULE_1__["FieldType"].TEXT).map(f => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        field: f,
        value: values.find(value => value.Additional_field_id === f.Id) ? values.find(value => value.Additional_field_id === f.Id).Value : '',
        onFieldValueChange: onFieldValueChange,
        invalid: invalidFields.has(f.Name)
      }, f.Id, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 25
      }, undefined)), fields.filter(f => f.Type === _types_Field__WEBPACK_IMPORTED_MODULE_1__["FieldType"].SELECT).map(f => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_SelectField__WEBPACK_IMPORTED_MODULE_4__["default"], {
        field: f,
        value: values.find(value => value.Additional_field_id === f.Id) ? values.find(value => value.Additional_field_id === f.Id).Value : '0',
        onFieldValueChange: onFieldValueChange,
        invalid: invalidFields.has(f.Name)
      }, f.Id, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 25
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, undefined);
};

_c = Fields;
/* harmony default export */ __webpack_exports__["default"] = (Fields);

var _c;

__webpack_require__.$Refresh$.register(_c, "Fields");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/HandoverEdit/View.tsx":
/*!*****************************************!*\
  !*** ./src/pages/HandoverEdit/View.tsx ***!
  \*****************************************/
/*! exports provided: TINYMCE_OPTIONS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TINYMCE_OPTIONS", function() { return TINYMCE_OPTIONS; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var carbon_components_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! carbon-components-react */ "./node_modules/carbon-components-react/es/index.js");
/* harmony import */ var _styles_Handover_edit_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Handover-edit.css */ "./src/styles/Handover-edit.css");
/* harmony import */ var _styles_Handover_edit_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Handover_edit_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Durations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Durations */ "./src/pages/HandoverEdit/Durations/index.tsx");
/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Fields */ "./src/pages/HandoverEdit/Fields/index.tsx");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.ts");
/* harmony import */ var _service_Https__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/Https */ "./src/service/Https.ts");
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tinymce/tinymce-react */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js");
/* harmony import */ var _Worklogs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Worklogs */ "./src/pages/HandoverEdit/Worklogs/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mravo/Projects/Handover2.0/client/src/pages/HandoverEdit/View.tsx";










const TINYMCE_OPTIONS = {
  height: '100%',
  menubar: false,
  resize: false,
  plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen searchreplace', 'insertdatetime media table paste code help wordcount'],
  toolbar: 'undo redo searchreplace | styleselect |  bold underline italic forecolor backcolor | alignleft aligncenter ' + 'alignright alignjustify | bullist numlist outdent indent | ' + 'table tabledelete | tableprops tablerowprops tablecellprops ' + '| tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore ' + 'tableinsertcolafter tabledeletecol | link fullscreen preview | removeformat help',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
  table_toolbar: 'tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol',
  fullscreen_native: true,
  paste_data_images: true
};

const View = ({
  handover,
  types,
  statuses,
  severities,
  activities,
  imts,
  customers,
  systems,
  systems_forced_render,
  users,
  fields,
  invalidFields,
  onStringChange,
  onSelectChange,
  onSystemsChange,
  onCoresponsiblesChange,
  onFieldValueChange,
  onAddDuration,
  onAddWorklog,
  onSave,
  handleDateChange,
  handleTimeChange,
  addAttachments,
  pendingAttachments,
  errorAttachments,
  deleteAttachment,
  setDescription,
  setResolution
}) => {
  var _types$find;

  const activities_2 = handover.Activity_1_id == 0 ? [] : activities.filter(activity => activity.Parent_id == handover.Activity_1_id);
  const activities_3 = handover.Activity_2_id == null || handover.Activity_2_id == 0 ? [] : activities.filter(activity => activity.Parent_id == handover.Activity_2_id);
  const activities_4 = handover.Activity_3_id == null || handover.Activity_3_id == 0 ? [] : activities.filter(activity => activity.Parent_id == handover.Activity_3_id);

  const drawText = (name, label, invalidText, value, helperText = '') => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_1__["TextInput"], {
    id: name,
    name: name,
    labelText: label,
    invalidText: invalidText,
    value: value,
    helperText: helperText,
    onChange: onStringChange,
    invalid: invalidFields.has(name)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 9
  }, undefined);

  const drawSelect = (name, label, invalidText, value, items, disabled = false) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    id: name,
    name: name,
    invalidText: invalidText,
    labelText: label + ':',
    value: value,
    onChange: onSelectChange,
    disabled: disabled,
    invalid: invalidFields.has(name),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_1__["SelectItem"], {
      text: 'Select ' + label,
      value: 0
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }, undefined), items.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_1__["SelectItem"], {
      text: item.Name + (item.Surname ? ` ${item.Surname}` : ''),
      value: item.Id
    }, item.Id, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 151,
    columnNumber: 9
  }, undefined);

  const drawDateTimePicker = (name, label, date_value, time_value) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
      className: "date-time-label",
      children: label + ':'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
      dateFormat: "m/d/Y",
      datePickerType: "single",
      className: "date",
      onChange: d => handleDateChange(name, d[0]),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_1__["DatePickerInput"], {
        id: name + '_date',
        name: name + '_date',
        placeholder: "mm/dd/yyyy",
        type: "text",
        labelText: "",
        invalidText: "Invalid value",
        value: date_value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_1__["TimePicker"], {
      id: name + '_time',
      name: name + '_time',
      className: "time",
      invalid: invalidFields.has(name + '_time'),
      invalidText: "Invalid value",
      pattern: ".*",
      value: time_value,
      onChange: handleTimeChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 169,
    columnNumber: 9
  }, undefined);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    id: "handover-form",
    onSubmit: e => {
      e.preventDefault();
      onSave();
    },
    className: "handover-record",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "subject",
      children: drawText('Subject', 'Subject:', 'Must be between 3 and 128 characters long', handover.Subject)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "responsible",
      children: drawSelect('Responsible_id', 'Responsible', 'Must be selected', handover.Responsible_id, users)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "co-responsibles",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_1__["MultiSelect"].Filterable, {
        id: "handover-coresponsibles",
        items: users.filter(user => user.Id != handover.Responsible_id),
        label: "Co-responsibles:",
        titleText: "Co-responsibles:",
        itemToString: user => `${user.Name} ${user.Surname}`,
        placeholder: "Select co-responsibles",
        onChange: onCoresponsiblesChange,
        disabled: handover.Responsible_id == 0,
        selectionFeedback: "top-after-reopen",
        invalid: invalidFields.has('Coresponsibles_ids'),
        invalidText: "Must be selected"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "type",
      children: drawSelect('Type_id', 'Type', 'Must be selected', handover.Type_id, types)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "status",
      children: drawSelect('Status_id', 'Status', 'Must be selected', handover.Status_id, statuses, handover.Type_id == 0)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "severity",
      children: drawSelect('Severity_id', 'Severity', 'Must be selected', handover.Severity_id, severities, handover.Type_id == 0)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "imt",
      children: drawSelect('Imt_id', 'Imt', 'Must be selected', handover.Imt_id, imts)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "customer",
      children: drawSelect('Customer_id', 'Customer', 'Must be selected', handover.Customer_id, customers)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "systems",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_1__["MultiSelect"].Filterable, {
        id: "handover-systems",
        items: systems,
        initialSelectedItems: systems.filter(system => handover.System_ids.includes(system.Id)),
        label: "Systems:",
        titleText: "Systems:",
        itemToString: system => system.Name,
        placeholder: "Select systems",
        onChange: onSystemsChange,
        invalid: invalidFields.has('System_ids'),
        invalidText: "Must be selected"
      }, 'systems_' + systems_forced_render, false, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "master_ticket",
      children: drawText('Master_ticket', 'Main ticket', 'Must be 4-32 characters long and must not contain special characters', handover.Master_ticket)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "slave_tickets",
      children: drawText('Slave_tickets', 'Other tickets', 'Must contain 0-7 tickets (4-32 characters long) separated by space and must not contain special characters', handover.Slave_tickets, 'Other related tickets separated with space')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "description",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
        children: "Description:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_7__["Editor"], {
        value: handover.Description,
        apiKey: 'swcb1pgb8t37s1htsv5g7g2r5obi4ytsqw3on65tsipkc7hq',
        init: TINYMCE_OPTIONS,
        onChange: content => {
          setDescription(content.target.getContent());
        },
        onKeyUp: (_, editor) => {
          setDescription(editor.getContent());
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "resolution",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
        children: "Resolution:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_7__["Editor"], {
        value: handover.Resolution,
        apiKey: 'swcb1pgb8t37s1htsv5g7g2r5obi4ytsqw3on65tsipkc7hq',
        init: TINYMCE_OPTIONS,
        onChange: content => {
          setResolution(content.target.getContent());
        },
        onKeyUp: (_, editor) => {
          setResolution(editor.getContent());
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "attachments",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
        children: "Attachments:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "attachments-content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "attachment",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_1__["FileUploaderDropContainer"], {
            labelText: "Drag and drop or click to upload (< 30 MB)",
            tabIndex: 0,
            className: "file-uploader",
            multiple: true,
            onAddFiles: (_event, content) => {
              addAttachments(content.addedFiles);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 319,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 21
        }, undefined), pendingAttachments.map(a => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_1__["FileUploaderItem"], {
          name: a.Name,
          status: "uploading"
        }, a.Name, false, {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 25
        }, undefined)), errorAttachments.map(a => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_1__["FileUploaderItem"], {
          name: a.Name,
          status: "uploading",
          invalid: true
        }, a.Name, false, {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 25
        }, undefined)), handover.Attachments.map(a => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "attachment clickable",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_1__["FileUploaderItem"], {
            name: a.Name,
            status: "edit",
            onDelete: () => {
              deleteAttachment(a.Name);
            },
            onClick: () => {
              window.open(`${_service_Https__WEBPACK_IMPORTED_MODULE_6__["default"].api_url()}File?path=${encodeURIComponent(a.Path)}&name=${encodeURIComponent(a.Name)}`, '_blank');
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 29
          }, undefined)
        }, a.Name, false, {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 25
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "activities",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "activity_1",
        children: drawSelect('Activity_1_id', 'Activity 1', 'Must be selected', handover.Activity_1_id, activities.filter(activity => activity.Level == 1))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "activity_2",
        children: drawSelect('Activity_2_id', 'Activity 2', 'Must be selected', handover.Activity_2_id ? handover.Activity_2_id : 0, activities_2, activities_2.length == 0)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "activity_3",
        children: drawSelect('Activity_3_id', 'Activity 3', 'Must be selected', handover.Activity_3_id ? handover.Activity_3_id : 0, activities_3, activities_3.length == 0)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "activity_4",
        children: drawSelect('Activity_4_id', 'Activity 4', 'Must be selected', handover.Activity_4_id ? handover.Activity_4_id : 0, activities_4, activities_4.length == 0)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "scheduled_start",
      children: drawDateTimePicker('Scheduled_start', 'Scheduled start', Object(_utils_common__WEBPACK_IMPORTED_MODULE_5__["getDatePortion"])(handover.Scheduled_start), Object(_utils_common__WEBPACK_IMPORTED_MODULE_5__["getTimePortion"])(handover.Scheduled_start))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "scheduled_end",
      children: drawDateTimePicker('Scheduled_end', 'Scheduled end', Object(_utils_common__WEBPACK_IMPORTED_MODULE_5__["getDatePortion"])(handover.Scheduled_end), Object(_utils_common__WEBPACK_IMPORTED_MODULE_5__["getTimePortion"])(handover.Scheduled_end))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "real_start",
      children: drawDateTimePicker('Real_start', 'Real start', Object(_utils_common__WEBPACK_IMPORTED_MODULE_5__["getDatePortion"])(handover.Real_start), Object(_utils_common__WEBPACK_IMPORTED_MODULE_5__["getTimePortion"])(handover.Real_start))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "real_end",
      children: drawDateTimePicker('Real_end', 'Real end', Object(_utils_common__WEBPACK_IMPORTED_MODULE_5__["getDatePortion"])(handover.Real_end), Object(_utils_common__WEBPACK_IMPORTED_MODULE_5__["getTimePortion"])(handover.Real_end))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "durations",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
        children: "Durations:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Durations__WEBPACK_IMPORTED_MODULE_3__["default"], {
        users: users,
        durations: handover.Durations,
        addDuration: onAddDuration
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 17
      }, undefined), ((_types$find = types.find(type => type.Id === handover.Type_id)) === null || _types$find === void 0 ? void 0 : _types$find.Worklog) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
          children: "Worklogs:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 435,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Worklogs__WEBPACK_IMPORTED_MODULE_8__["default"], {
          worklogs: handover.Worklogs,
          addWorklog: onAddWorklog
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 436,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 434,
        columnNumber: 21
      }, undefined) : '']
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "additionals",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
        children: "Additional fields:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 443,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Fields__WEBPACK_IMPORTED_MODULE_4__["default"], {
        fields: fields,
        values: handover.Additional_field_values,
        onFieldValueChange: onFieldValueChange,
        invalidFields: invalidFields
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 444,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 201,
    columnNumber: 9
  }, undefined);
};

_c = View;
/* harmony default export */ __webpack_exports__["default"] = (View);

var _c;

__webpack_require__.$Refresh$.register(_c, "View");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/HandoverEdit/Worklogs/View.tsx":
/*!**************************************************!*\
  !*** ./src/pages/HandoverEdit/Worklogs/View.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WorklogAdd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorklogAdd */ "./src/pages/HandoverEdit/Worklogs/WorklogAdd/index.tsx");
/* harmony import */ var carbon_components_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! carbon-components-react */ "./node_modules/carbon-components-react/es/index.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/common */ "./src/utils/common.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mravo/Projects/Handover2.0/client/src/pages/HandoverEdit/Worklogs/View.tsx";






const View = ({
  worklogs,
  addWorklog,
  users
}) => {
  const worklogsProcessed = [];
  worklogs.forEach(worklog => {
    const user = users.find(user => user.Id === worklog.User_id);
    worklogsProcessed.push({
      name: `${user === null || user === void 0 ? void 0 : user.Name} ${user === null || user === void 0 ? void 0 : user.Surname}`,
      time: Object(_utils_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(worklog.Time),
      value: worklog.Text
    });
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_WorklogAdd__WEBPACK_IMPORTED_MODULE_1__["default"], {
      addWorklog: addWorklog
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "worklog-list",
      children: worklogsProcessed.map(worklog => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_2__["Tile"], {
        className: "worklog-tile",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h5", {
          children: [worklog.time, " - ", worklog.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 25
        }, undefined), worklog.value]
      }, worklog.name, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, undefined);
};

_c = View;
/* harmony default export */ __webpack_exports__["default"] = (View);

var _c;

__webpack_require__.$Refresh$.register(_c, "View");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/HandoverEdit/Worklogs/WorklogAdd/View.tsx":
/*!*************************************************************!*\
  !*** ./src/pages/HandoverEdit/Worklogs/WorklogAdd/View.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var carbon_components_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! carbon-components-react */ "./node_modules/carbon-components-react/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mravo/Projects/Handover2.0/client/src/pages/HandoverEdit/Worklogs/WorklogAdd/View.tsx";




const View = ({
  worklogValue,
  onValueChange,
  onAddWorklog
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_0__["Tile"], {
    className: "worklog-add-tile",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "worklog-value",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_0__["TextInput"], {
        id: 'worklog-value',
        labelText: 'New worklog:',
        value: worklogValue,
        onChange: onValueChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "add-button-div",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(carbon_components_react__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        onClick: onAddWorklog,
        disabled: worklogValue.length < 1,
        children: "Add"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

_c = View;
/* harmony default export */ __webpack_exports__["default"] = (View);

var _c;

__webpack_require__.$Refresh$.register(_c, "View");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/HandoverEdit/Worklogs/WorklogAdd/index.tsx":
/*!**************************************************************!*\
  !*** ./src/pages/HandoverEdit/Worklogs/WorklogAdd/index.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View */ "./src/pages/HandoverEdit/Worklogs/WorklogAdd/View.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mravo/Projects/Handover2.0/client/src/pages/HandoverEdit/Worklogs/WorklogAdd/index.tsx",
    _s = __webpack_require__.$Refresh$.signature();





function WorklogAdd({
  addWorklog
}) {
  _s();

  const [worklogValue, setWorklogValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_View__WEBPACK_IMPORTED_MODULE_1__["default"], {
    worklogValue: worklogValue,
    onAddWorklog: () => addWorklog(worklogValue),
    onValueChange: e => setWorklogValue(e.target.value)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

_s(WorklogAdd, "1DHbnXxsdVw0OK7NlbTtSMRwd/Q=");

_c = WorklogAdd;
/* harmony default export */ __webpack_exports__["default"] = (WorklogAdd);

var _c;

__webpack_require__.$Refresh$.register(_c, "WorklogAdd");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/HandoverEdit/Worklogs/index.tsx":
/*!***************************************************!*\
  !*** ./src/pages/HandoverEdit/Worklogs/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View */ "./src/pages/HandoverEdit/Worklogs/View.tsx");
/* harmony import */ var _hooks_UseCommonData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/UseCommonData */ "./src/hooks/UseCommonData/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mravo/Projects/Handover2.0/client/src/pages/HandoverEdit/Worklogs/index.tsx",
    _s = __webpack_require__.$Refresh$.signature();






function Worklogs({
  worklogs,
  addWorklog
}) {
  _s();

  const {
    users
  } = Object(_hooks_UseCommonData__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_View__WEBPACK_IMPORTED_MODULE_1__["default"], {
    worklogs: worklogs,
    addWorklog: addWorklog,
    users: users
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 12
  }, this);
}

_s(Worklogs, "+tcQHy/YjxrEMB2U9TsV9oeTIVY=", false, function () {
  return [_hooks_UseCommonData__WEBPACK_IMPORTED_MODULE_2__["default"]];
});

_c = Worklogs;
/* harmony default export */ __webpack_exports__["default"] = (Worklogs);

var _c;

__webpack_require__.$Refresh$.register(_c, "Worklogs");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/HandoverEdit/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/HandoverEdit/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View */ "./src/pages/HandoverEdit/View.tsx");
/* harmony import */ var _types_Handover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types/Handover */ "./src/types/Handover.ts");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/validation */ "./src/utils/validation.ts");
/* harmony import */ var _hooks_UseCommonData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/UseCommonData */ "./src/hooks/UseCommonData/index.tsx");
/* harmony import */ var _types_errors_APIError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types/errors/APIError */ "./src/types/errors/APIError.ts");
/* harmony import */ var _hooks_UseAPIError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/UseAPIError */ "./src/hooks/UseAPIError/index.tsx");
/* harmony import */ var _hooks_UseInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/UseInfo */ "./src/hooks/UseInfo/index.tsx");
/* harmony import */ var _api_handoverCalls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api/handoverCalls */ "./src/api/handoverCalls.ts");
/* harmony import */ var _types_Status__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../types/Status */ "./src/types/Status.ts");
/* harmony import */ var _service_Https__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/Https */ "./src/service/Https.ts");
/* harmony import */ var _hooks_UseUser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/UseUser */ "./src/hooks/UseUser/index.tsx");
/* harmony import */ var _api_fieldCalls__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../api/fieldCalls */ "./src/api/fieldCalls.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mravo/Projects/Handover2.0/client/src/pages/HandoverEdit/index.tsx",
    _s = __webpack_require__.$Refresh$.signature();















const patterns = {
  Subject: '^.{3,128}$',
  Master_ticket: '^[A-Za-z0-9]{4,32}$',
  Slave_tickets: '^([A-Za-z0-9]{4,32})?( [A-Za-z0-9]{4,32}){0,7}$',
  Description: '^(?!s*$).+'
};

function HandoverEdit(props) {
  _s();

  const { ...data
  } = Object(_hooks_UseCommonData__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    user
  } = Object(_hooks_UseUser__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const [systemsForcedRender, setSystemsForcedRender] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [handover, setHandover] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object(_types_Handover__WEBPACK_IMPORTED_MODULE_2__["EmptyHandover"])(user.Default_team_id, user.Id));
  const [fields, setFields] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [invalidFields, setInvalidFields] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Set());
  const [pendingAttachments, setPendingAttachments] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [errorAttachments, setErrorAttachments] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    addError
  } = Object(_hooks_UseAPIError__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    addMessage
  } = Object(_hooks_UseInfo__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (props.match.params.id) {
      Object(_api_handoverCalls__WEBPACK_IMPORTED_MODULE_8__["getHandoverById"])(props.match.params.id).then(h => setHandover(h)).catch(err => console.log(err));
    }
  }, []);
  const team_customers = data.customers.filter(customer => !customer.Removed && customer.Team_ids.includes(user.Default_team_id));
  const team_imts = data.imts.filter(imt => !imt.Removed && team_customers.some(customer => customer.Imt_id === imt.Id));
  const team_systems = data.systems.filter(system => !system.Removed && team_customers.some(customer => customer.Id === system.Customer_id));

  const loadFields = (type_id, customer_id) => {
    Object(_api_fieldCalls__WEBPACK_IMPORTED_MODULE_12__["loadFilteredFields"])(type_id, customer_id, user.Default_team_id).then(fields => setFields(fields)).catch(err => console.log(err));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let changed = false;

    if (handover.Type_id !== 0) {
      if (handover.Severity_id === 0) {
        const availableSeverities = data.severities.filter(severity => !severity.Removed && severity.Type_ids.includes(handover.Type_id));

        if (availableSeverities.length === 1) {
          handover.Severity_id = availableSeverities[0].Id;
          changed = true;
        }
      }

      if (handover.Status_id === 0) {
        const availableStatuses = data.statuses.filter(status => !status.Removed && status.Type_ids.includes(handover.Type_id));

        if (availableStatuses.length === 1) {
          handover.Status_id = availableStatuses[0].Id;
          changed = true;
        }
      }
    }

    if (changed) {
      setHandover({ ...handover
      });
    }
  }, [handover]);

  const onStringChange = e => {
    const a = { ...handover
    };
    a[e.target.name] = e.target.value;
    setHandover(a);
    const isValid = Object(_utils_validation__WEBPACK_IMPORTED_MODULE_3__["validateString"])(e.target.value, patterns[e.target.name]);
    const newFields = new Set(invalidFields);

    if (isValid) {
      newFields.delete(e.target.name);
    } else {
      newFields.add(e.target.name);
    }

    if (e.target.name == 'Resolution') {
      newFields.delete('Resolution');
    }

    setInvalidFields(newFields);
  };

  const onSelectChange = e => {
    const name = e.target.name;
    const value = parseInt(e.target.value);
    handover[name] = value;

    if (name === 'Type_id') {
      if (handover.Severity_id !== 0 && !data.severities.find(severity => severity.Id === handover.Severity_id).Type_ids.includes(handover.Type_id)) {
        handover.Severity_id = 0;
      }

      if (handover.Status_id !== 0 && !data.statuses.find(status => status.Id === handover.Status_id).Type_ids.includes(handover.Type_id)) {
        handover.Status_id = 0;
      }
    }

    let rerenderSystems = false;

    if (name.indexOf('Customer_id') !== -1 && value !== 0) {
      handover.Imt_id = data.customers.find(customer => customer.Id === value).Imt_id;
      invalidFields.delete('Imt_id');
      const newSystem_ids = handover.System_ids.filter(system_id => data.systems.find(system => system.Id === system_id).Customer_id === value);

      if (handover.System_ids !== newSystem_ids) {
        rerenderSystems = true;
        handover.System_ids = newSystem_ids;
      }
    }

    if (name.indexOf('Imt_id') !== -1 && value !== 0) {
      if (handover.Customer_id !== 0 && data.customers.find(customer => customer.Id === handover.Customer_id).Imt_id !== value) {
        handover.Customer_id = 0;
      }

      const newSystem_ids = handover.System_ids.filter(system_id => data.customers.find(customer => customer.Id === data.systems.find(system => system.Id === system_id).Customer_id).Imt_id === value);

      if (handover.System_ids !== newSystem_ids) {
        rerenderSystems = true;
        handover.System_ids = newSystem_ids;
      }
    }

    if (name.indexOf('Activity') !== -1) {
      let level = parseInt(name.split('_')[1]) + 1;

      while (level <= 4) {
        delete handover['Activity_' + level + '_id'];
        level++;
      }
    }
    /*if (e.target.name.indexOf('Customer') != -1 || e.target.name.indexOf('Type') != -1) {
        const newFilteredFields = fields.filter(
            (field) => field.Customer_ids.includes(a.Customer_id) && field.Type_ids.includes(a.Type_id),
        );
        a.Additional_field_values.filter((fieldValue) =>
            newFilteredFields.find((field) => field.Id == fieldValue.Additional_field),
        );
        setFilteredFields(newFilteredFields);
    } else {
        setFilteredFields([]);
    }*/


    if (['Type_id', 'Customer_id'].includes(name)) {
      if (handover.Type_id !== 0 && handover.Customer_id !== 0) {
        loadFields(handover.Type_id, handover.Customer_id);
      }
    }

    if (value === 0 && !['Activity_2_id', 'Activity_3_id', 'Activity_4_id'].includes(name)) {
      invalidFields.add(name);
    }

    if (value !== 0) {
      invalidFields.delete(name);
    }

    setHandover({ ...handover
    });
    setInvalidFields(new Set(invalidFields));

    if (rerenderSystems) {
      setSystemsForcedRender(!systemsForcedRender);
    }
  };

  const onSystemsChange = ({
    selectedItems
  }) => {
    handover.System_ids = selectedItems.map(system => system.Id);

    if (selectedItems.length > 0) {
      handover.Customer_id = selectedItems[0].Customer_id;
      handover.Imt_id = data.customers.find(customer => customer.Id == handover.Customer_id).Imt_id;
      invalidFields.delete('System_ids');
    } else {
      invalidFields.add('System_ids');
    }

    setHandover({ ...handover
    });
    setInvalidFields(new Set(invalidFields));
  };

  const onCoresponsiblesChange = ({
    selectedItems
  }) => {
    const a = { ...handover
    };
    a.Coresponsibles_ids = selectedItems.map(user => user.Id);
    setHandover(a);
  };

  const onAddDuration = duration => {
    const a = { ...handover
    };
    const oldDuration = a.Durations.find(d => d.User_id === duration.User_id);

    if (oldDuration) {
      oldDuration.Minutes += duration.Minutes;
    } else {
      a.Durations.push(duration);
    }

    setHandover(a);
  };

  const onAddWorklog = worklog => {
    setHandover({ ...handover,
      Worklogs: [{
        User_id: user.Id,
        Text: worklog,
        Time: new Date()
      }, ...handover.Worklogs]
    });
  };

  const onFieldValueChange = (fieldId, value) => {
    const a = { ...handover
    };
    const oldFieldValue = a.Additional_field_ids_values.find(fieldValue => fieldValue.Additional_field_id == fieldId);

    if (oldFieldValue) {
      oldFieldValue.Value = value;
    } else {
      a.Additional_field_values.push({
        Additional_field: fieldId,
        Additional_field_name: '',
        Value: value
      });
    }

    setHandover(a);
    /*const field = filteredFields.find((field) => field.Id == fieldId)!;
    if (
        invalidFields.has(field.Name) &&
        ((field.Type == FieldType.SELECT && value != '0') || (field.Type == FieldType.TEXT && value != ''))
    ) {
        const newFields = new Set(invalidFields);
        newFields.delete(field.Name);
        setInvalidFields(newFields);
    }*/
  };

  const checkInputs = invalidFields => {
    let invalidCount = 0;
    Object.keys(patterns).forEach(name => {
      const isValid = Object(_utils_validation__WEBPACK_IMPORTED_MODULE_3__["validateString"])(handover[name], patterns[name]);

      if (!isValid) {
        invalidFields.add(name);
        invalidCount++;
      }
    });
    return invalidCount;
  };

  const checkSelects = invalidFields => {
    let invalidCount = 0;
    _types_Handover__WEBPACK_IMPORTED_MODULE_2__["HandoverRequiredSelects"].forEach(name => {
      if (handover[name] == '0') {
        invalidFields.add(name);
        invalidCount++;
      }
    });
    return invalidCount;
  };

  const checkFields = _invalidFields => {
    const invalidCount = 0;
    /*filteredFields.forEach((field) => {
        if (field.Mandatory) {
            const fieldValue = handover.Additional_field_values.find(
                (fieldValue) => fieldValue.Additional_field == field.Id,
            );
            if (
                !fieldValue ||
                (field.Type == FieldType.SELECT && fieldValue.Value == '0') ||
                (field.Type == FieldType.TEXT && fieldValue.Value == '')
            ) {
                invalidFields.add(field.Name);
                invalidCount++;
            }
        }
    });*/

    return invalidCount;
  };

  const onSave = () => {
    const newFields = new Set(invalidFields);
    let invalidFieldsSize = invalidFields.size;
    invalidFieldsSize += checkSelects(newFields);
    invalidFieldsSize += checkInputs(newFields);
    invalidFieldsSize += checkFields(newFields);

    if (handover.System_ids.length == 0) {
      invalidFieldsSize++;
      newFields.add('System_ids');
    }

    setInvalidFields(newFields);

    if (handover.Status_id != 0 && data.statuses.find(status => status.Id == handover.Status_id).Category != _types_Status__WEBPACK_IMPORTED_MODULE_9__["StatusCategory"].PENDING && handover.Resolution == '') {
      invalidFieldsSize++;
      newFields.add('Resolution');
    }

    if (invalidFieldsSize > 0) {
      addMessage('This handover cannot be saved. Please check if you filled the from properly.');
    } else {
      if (handover.Global_id) {
        Object(_api_handoverCalls__WEBPACK_IMPORTED_MODULE_8__["updateHandover"])(handover).then(h => {
          setHandover(h);
          addMessage('Handover successfully saved.');
        }).catch(err => {
          if (err instanceof _types_errors_APIError__WEBPACK_IMPORTED_MODULE_5__["APIError"]) {
            addError(err.error);
          } else {
            alert(err);
          }
        });
      } else {
        Object(_api_handoverCalls__WEBPACK_IMPORTED_MODULE_8__["createHandover"])(handover).then(h => {
          setHandover(h);
          addMessage('Handover successfully created.');
        }).catch(err => {
          if (err instanceof _types_errors_APIError__WEBPACK_IMPORTED_MODULE_5__["APIError"]) {
            addError(err.error);
          } else {
            alert(err);
          }
        });
      }
    }
  };

  const handleDateChange = (label, d) => {
    const h = { ...handover
    };
    const date = h[label];
    date.setDate(d.getDate());
    date.setMonth(d.getMonth());
    date.setFullYear(d.getFullYear());
    setHandover(h);
  };

  const handleTimeChange = e => {
    const h = { ...handover
    };
    const newFields = new Set(invalidFields);
    const date = h[e.target.name.slice(0, -5)];

    if (Object(_utils_validation__WEBPACK_IMPORTED_MODULE_3__["validateString"])(e.target.value, '(1[012]|[1-9]):[0-5][0-9](s)?')) {
      date.setHours(Number(e.target.value.split(':')[0]));
      date.setMinutes(Number(e.target.value.split(':')[1]));
      setHandover(h);
      newFields.delete(e.target.name);
    } else {
      newFields.add(e.target.name);
    }

    setInvalidFields(newFields);
  };

  const addAttachments = files => {
    files.map(file => {
      setPendingAttachments([...pendingAttachments, {
        Name: file.name,
        Path: ''
      }]);
    });
    files.map(file => {
      _service_Https__WEBPACK_IMPORTED_MODULE_10__["default"].uploadFile(file).then(path => {
        setPendingAttachments(pendingAttachments.filter(a => a.Name != file.name));
        const h = { ...handover
        };
        h.Attachments.push({
          Name: file.name,
          Path: path
        });
        setHandover(h);
      }).catch(err => {
        setPendingAttachments(pendingAttachments.filter(a => a.Name != file.name));
        setErrorAttachments([...errorAttachments, {
          Name: file.name,
          Path: ''
        }]);

        if (err instanceof _types_errors_APIError__WEBPACK_IMPORTED_MODULE_5__["APIError"]) {
          addError(err.error);
        } else {
          alert(err);
        }
      });
    });
  };

  const deleteAttachment = name => {
    setHandover({ ...handover,
      Attachments: handover.Attachments.filter(a => a.Name != name)
    });
  };

  const setDescription = value => {
    setHandover({ ...handover,
      Description: value
    });
  };

  const setResolution = value => {
    setHandover({ ...handover,
      Resolution: value
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_View__WEBPACK_IMPORTED_MODULE_1__["default"], {
    handover: handover,
    types: data.types.filter(type => !type.Removed),
    statuses: handover.Type_id == 0 ? [] : data.statuses.filter(status => !status.Removed && status.Type_ids.includes(handover.Type_id)),
    severities: handover.Type_id == 0 ? [] : data.severities.filter(severity => !severity.Removed && severity.Type_ids.includes(handover.Type_id)),
    activities: data.activities.filter(i => !i.Removed),
    imts: team_imts,
    customers: handover.Imt_id !== 0 ? team_customers.filter(customer => customer.Imt_id === handover.Imt_id) : team_customers,
    systems: handover.Customer_id !== 0 ? team_systems.filter(system => system.Customer_id === handover.Customer_id) : team_systems,
    systems_forced_render: systemsForcedRender,
    users: data.users,
    fields: fields,
    invalidFields: invalidFields,
    onStringChange: onStringChange,
    onSelectChange: onSelectChange,
    onSystemsChange: onSystemsChange,
    onCoresponsiblesChange: onCoresponsiblesChange,
    onFieldValueChange: onFieldValueChange,
    onAddDuration: onAddDuration,
    onAddWorklog: onAddWorklog,
    onSave: onSave,
    handleDateChange: handleDateChange,
    handleTimeChange: handleTimeChange,
    addAttachments: addAttachments,
    pendingAttachments: pendingAttachments,
    errorAttachments: errorAttachments,
    deleteAttachment: deleteAttachment,
    setDescription: setDescription,
    setResolution: setResolution
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 432,
    columnNumber: 9
  }, this);
}

_s(HandoverEdit, "69ljuhB68RoSROUtrH4G68ZDNV0=", false, function () {
  return [_hooks_UseCommonData__WEBPACK_IMPORTED_MODULE_4__["default"], _hooks_UseUser__WEBPACK_IMPORTED_MODULE_11__["default"], _hooks_UseAPIError__WEBPACK_IMPORTED_MODULE_6__["default"], _hooks_UseInfo__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c = HandoverEdit;
/* harmony default export */ __webpack_exports__["default"] = (HandoverEdit);

var _c;

__webpack_require__.$Refresh$.register(_c, "HandoverEdit");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/styles/Handover-edit.css":
/*!**************************************!*\
  !*** ./src/styles/Handover-edit.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./Handover-edit.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/Handover-edit.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./Handover-edit.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/Handover-edit.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./Handover-edit.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/Handover-edit.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

}]);
//# sourceMappingURL=5.chunk.js.map