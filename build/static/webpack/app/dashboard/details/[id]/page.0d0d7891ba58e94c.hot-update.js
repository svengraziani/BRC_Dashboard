"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/details/[id]/page",{

/***/ "(app-pages-browser)/./src/app/dashboard/details/[id]/page.tsx":
/*!*************************************************!*\
  !*** ./src/app/dashboard/details/[id]/page.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _details_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details.scss */ \"(app-pages-browser)/./src/app/dashboard/details/[id]/details.scss\");\n/* harmony import */ var _shared_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/Header */ \"(app-pages-browser)/./src/shared/Header/index.tsx\");\n/* harmony import */ var _shared_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/Sidebar */ \"(app-pages-browser)/./src/shared/Sidebar/index.tsx\");\n/* harmony import */ var _barrel_optimize_names_Button_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Col,Row!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Col,Row!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Col,Row!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _Assets_images_icon_anlagen_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../Assets/images/icon-anlagen.svg */ \"(app-pages-browser)/./src/Assets/images/icon-anlagen.svg\");\n/* harmony import */ var _Assets_images_chevron_back_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../Assets/images/chevron-back.svg */ \"(app-pages-browser)/./src/Assets/images/chevron-back.svg\");\n/* harmony import */ var _Assets_images_icon_informationen_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../Assets/images/icon_informationen.svg */ \"(app-pages-browser)/./src/Assets/images/icon_informationen.svg\");\n/* harmony import */ var _Assets_images_icon_componenten_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../Assets/images/icon_componenten.svg */ \"(app-pages-browser)/./src/Assets/images/icon_componenten.svg\");\n/* harmony import */ var _Assets_images_icon_livedaten_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../Assets/images/icon_livedaten.svg */ \"(app-pages-browser)/./src/Assets/images/icon_livedaten.svg\");\n/* harmony import */ var _Assets_images_icon_verwaltung_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../Assets/images/icon_verwaltung.svg */ \"(app-pages-browser)/./src/Assets/images/icon_verwaltung.svg\");\n/* harmony import */ var _Assets_images_icon_logbuch_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../Assets/images/icon-logbuch.svg */ \"(app-pages-browser)/./src/Assets/images/icon-logbuch.svg\");\n/* harmony import */ var _Components_Informationen__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Components/Informationen */ \"(app-pages-browser)/./src/app/dashboard/Components/Informationen/index.tsx\");\n/* harmony import */ var _Components_Komponenten__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Components/Komponenten */ \"(app-pages-browser)/./src/app/dashboard/Components/Komponenten/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _Components_Livedaten__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../Components/Livedaten */ \"(app-pages-browser)/./src/app/dashboard/Components/Livedaten/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction DashboardDetails() {\n    _s();\n    const [activeStatus, setActiveStatus] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(\"Informationen\");\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const activateStatus = (statusName)=>{\n        setActiveStatus(statusName);\n        searchParams.set(\"name\", \"value\");\n    };\n    const list = [\n        {\n            name: \"Informationen\",\n            imgSrc: _Assets_images_icon_informationen_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n        },\n        {\n            name: \"Livedaten\",\n            imgSrc: _Assets_images_icon_livedaten_svg__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n        },\n        {\n            name: \"Logbuch\",\n            imgSrc: _Assets_images_icon_logbuch_svg__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n        },\n        {\n            name: \"Komponenten\",\n            imgSrc: _Assets_images_icon_componenten_svg__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n        },\n        {\n            name: \"Verwaltung\",\n            imgSrc: _Assets_images_icon_verwaltung_svg__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"user-details\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"details-wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_Sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"details-block\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"details-primary\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n                                        className: \"heading-wrap align-items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {\n                                                md: \"6\",\n                                                className: \"d-flex align-items-center\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {\n                                                        md: \"1\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_19__[\"default\"], {\n                                                            variant: \"prev\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                                className: \"icon-back\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                                    src: _Assets_images_chevron_back_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                                                    alt: \"Icon\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                                                    lineNumber: 65,\n                                                                    columnNumber: 25\n                                                                }, this)\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                                                lineNumber: 64,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                                            lineNumber: 63,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                                        lineNumber: 62,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {\n                                                        md: \"5\",\n                                                        className: \"heading\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                                    className: \"icon-head\",\n                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                                        src: _Assets_images_icon_anlagen_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                                                        alt: \"Icon\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                                                        lineNumber: 72,\n                                                                        columnNumber: 25\n                                                                    }, this)\n                                                                }, void 0, false, {\n                                                                    fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                                                    lineNumber: 71,\n                                                                    columnNumber: 23\n                                                                }, this),\n                                                                \"Anlage A - Anlagendetails\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                                            lineNumber: 70,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {\n                                                md: \"6\",\n                                                className: \"d-flex justify-content-end gap-4\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_19__[\"default\"], {\n                                                        children: \"\\xc4nderungen Speichern\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                                        lineNumber: 79,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_19__[\"default\"], {\n                                                        children: \"Anlage l\\xf6schen\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                                        lineNumber: 80,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"d-md-flex\",\n                                        children: list.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_19__[\"default\"], {\n                                                    variant: \"tab\",\n                                                    onClick: ()=>activateStatus(item.name),\n                                                    className: \"\".concat(item.name === activeStatus ? \"active\" : \"\"),\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                                src: item.imgSrc,\n                                                                alt: \"Icon\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                                                lineNumber: 89,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                                            lineNumber: 88,\n                                                            columnNumber: 21\n                                                        }, this),\n                                                        item.name\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 17\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"details-secondary\",\n                                children: [\n                                    activeStatus === \"Komponenten\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Komponenten__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 15\n                                    }, this),\n                                    activeStatus === \"Livedaten\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Livedaten__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 15\n                                    }, this),\n                                    activeStatus === \"Informationen\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Informationen__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.tsx\",\n        lineNumber: 54,\n        columnNumber: 7\n    }, this);\n}\n_s(DashboardDetails, \"UNHtn1lMWCjhq/lArQgrNNKOZBg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n_c = DashboardDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardDetails);\nvar _c;\n$RefreshReg$(_c, \"DashboardDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL2RldGFpbHMvW2lkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNkQ7QUFDckM7QUFDdUI7QUFDRTtBQUNFO0FBQ3BCO0FBQ3FDO0FBQ0g7QUFDTTtBQUNHO0FBQ1A7QUFDRztBQUNGO0FBQ1Q7QUFDSjtBQUN0QjtBQUNrQjtBQUVuRCxTQUFTa0I7O0lBQ1AsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0osZ0RBQVFBLENBQVM7SUFDekQsTUFBTUssZUFBZXJCLGdFQUFlQTtJQUVwQyxNQUFNc0IsaUJBQWlCLENBQUNDO1FBQ3RCSCxnQkFBZ0JHO1FBQ2hCRixhQUFhRyxHQUFHLENBQUMsUUFBTztJQUMxQjtJQUVBLE1BQU1DLE9BQU87UUFDWDtZQUNFQyxNQUFNO1lBQ05DLFFBQVFsQiw2RUFBT0E7UUFDakI7UUFDQTtZQUNFaUIsTUFBTTtZQUNOQyxRQUFRaEIsMEVBQU9BO1FBQ2pCO1FBQ0E7WUFDRWUsTUFBTTtZQUNOQyxRQUFRZCx3RUFBVUE7UUFDcEI7UUFDQTtZQUNFYSxNQUFNO1lBQ05DLFFBQVFqQiwyRUFBWUE7UUFDdEI7UUFDQTtZQUNFZ0IsTUFBTTtZQUNOQyxRQUFRZiwyRUFBU0E7UUFDbkI7S0FDRDtJQUVDLHFCQUNFLDhEQUFDZ0I7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDNUIsc0RBQU1BOzs7OzswQkFDUCw4REFBQzZCO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQzNCLHVEQUFPQTs7Ozs7a0NBQ1IsOERBQUM0Qjt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ3hCLDhGQUFHQTt3Q0FBQ3dCLFdBQVU7OzBEQUNiLDhEQUFDekIsOEZBQUdBO2dEQUFDMkIsSUFBRztnREFBSUYsV0FBVTs7a0VBQ3BCLDhEQUFDekIsOEZBQUdBO3dEQUFDMkIsSUFBRztrRUFDTiw0RUFBQzVCLDhGQUFNQTs0REFBQzZCLFNBQVE7c0VBQ2QsNEVBQUNDO2dFQUFFSixXQUFVOzBFQUNYLDRFQUFDdkIsa0RBQUtBO29FQUFDNEIsS0FBSzFCLHVFQUFPQTtvRUFBRTJCLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrRUFJL0IsOERBQUMvQiw4RkFBR0E7d0RBQUMyQixJQUFHO3dEQUFJRixXQUFVO2tFQUNwQiw0RUFBQ087OzhFQUNDLDhEQUFDSDtvRUFBRUosV0FBVTs4RUFDWCw0RUFBQ3ZCLGtEQUFLQTt3RUFBQzRCLEtBQUszQix1RUFBVUE7d0VBQUU0QixLQUFJOzs7Ozs7Ozs7OztnRUFDMUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzswREFLViw4REFBQy9CLDhGQUFHQTtnREFBQzJCLElBQUc7Z0RBQUlGLFdBQVU7O2tFQUNwQiw4REFBQzFCLDhGQUFNQTtrRUFBQzs7Ozs7O2tFQUNSLDhEQUFDQSw4RkFBTUE7a0VBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFHWiw4REFBQ2tDO3dDQUFHUixXQUFVO2tEQUVWSixLQUFLYSxHQUFHLENBQUNDLENBQUFBLHFCQUNYLDhEQUFDQzswREFDQyw0RUFBQ3JDLDhGQUFNQTtvREFBQzZCLFNBQVE7b0RBQU1TLFNBQVMsSUFBS25CLGVBQWVpQixLQUFLYixJQUFJO29EQUFHRyxXQUFXLEdBQThDLE9BQTNDVSxLQUFLYixJQUFJLEtBQUtQLGVBQWUsV0FBVzs7c0VBQ25ILDhEQUFDYztzRUFDQyw0RUFBQzNCLGtEQUFLQTtnRUFBQzRCLEtBQUtLLEtBQUtaLE1BQU07Z0VBQUVRLEtBQUk7Ozs7Ozs7Ozs7O3dEQUc3QkksS0FBS2IsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBUW5CLDhEQUFDSTtnQ0FBSUQsV0FBVTs7b0NBQ2RWLGlCQUFpQiwrQkFDaEIsOERBQUNKLGdFQUFXQTs7Ozs7b0NBR2JJLGlCQUFpQiw2QkFDaEIsOERBQUNGLDhEQUFTQTs7Ozs7b0NBR1hFLGlCQUFpQixpQ0FDbEIsOERBQUNMLGtFQUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPMUI7R0FoR1NJOztRQUVjbEIsNERBQWVBOzs7S0FGN0JrQjtBQWtHVCwrREFBZUEsZ0JBQWdCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZGFzaGJvYXJkL2RldGFpbHMvW2lkXS9wYWdlLnRzeD84YzllIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VQYXJhbXMsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgJy4vZGV0YWlscy5zY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL0hlYWRlcic7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvU2lkZWJhcic7XG5pbXBvcnQgeyBCdXR0b24sIENvbCwgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBpbWdBbmxhZ2VuIGZyb20gJy4uLy4uLy4uLy4uL0Fzc2V0cy9pbWFnZXMvaWNvbi1hbmxhZ2VuLnN2Zyc7XG5pbXBvcnQgaW1nUHJldiBmcm9tICcuLi8uLi8uLi8uLi9Bc3NldHMvaW1hZ2VzL2NoZXZyb24tYmFjay5zdmcnO1xuaW1wb3J0IGltZ0luZm8gZnJvbSAnLi4vLi4vLi4vLi4vQXNzZXRzL2ltYWdlcy9pY29uX2luZm9ybWF0aW9uZW4uc3ZnJztcbmltcG9ydCBpbWdDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vQXNzZXRzL2ltYWdlcy9pY29uX2NvbXBvbmVudGVuLnN2Zyc7XG5pbXBvcnQgaW1nTGl2ZSBmcm9tICcuLi8uLi8uLi8uLi9Bc3NldHMvaW1hZ2VzL2ljb25fbGl2ZWRhdGVuLnN2Zyc7XG5pbXBvcnQgaW1nVmVyd2FsIGZyb20gJy4uLy4uLy4uLy4uL0Fzc2V0cy9pbWFnZXMvaWNvbl92ZXJ3YWx0dW5nLnN2Zyc7XG5pbXBvcnQgaW1nTG9nYnVjaCBmcm9tICcuLi8uLi8uLi8uLi9Bc3NldHMvaW1hZ2VzL2ljb24tbG9nYnVjaC5zdmcnO1xuaW1wb3J0IEluZm9ybWF0aW9uZW4gZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9JbmZvcm1hdGlvbmVuJztcbmltcG9ydCBLb21wb25lbnRlbiBmcm9tICcuLi8uLi9Db21wb25lbnRzL0tvbXBvbmVudGVuJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpdmVkYXRlbiBmcm9tICcuLi8uLi9Db21wb25lbnRzL0xpdmVkYXRlbic7XG5cbmZ1bmN0aW9uIERhc2hib2FyZERldGFpbHMoKXtcbiAgY29uc3QgW2FjdGl2ZVN0YXR1cywgc2V0QWN0aXZlU3RhdHVzXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJJbmZvcm1hdGlvbmVuXCIpXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpXG5cbiAgY29uc3QgYWN0aXZhdGVTdGF0dXMgPSAoc3RhdHVzTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0QWN0aXZlU3RhdHVzKHN0YXR1c05hbWUpXG4gICAgc2VhcmNoUGFyYW1zLnNldCgnbmFtZScsJ3ZhbHVlJylcbiAgfVxuXG4gIGNvbnN0IGxpc3QgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJJbmZvcm1hdGlvbmVuXCIsXG4gICAgICBpbWdTcmM6IGltZ0luZm9cbiAgICB9LCBcbiAgICB7XG4gICAgICBuYW1lOiBcIkxpdmVkYXRlblwiLFxuICAgICAgaW1nU3JjOiBpbWdMaXZlXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkxvZ2J1Y2hcIixcbiAgICAgIGltZ1NyYzogaW1nTG9nYnVjaFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJLb21wb25lbnRlblwiLFxuICAgICAgaW1nU3JjOiBpbWdDb21wb25lbnRcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiVmVyd2FsdHVuZ1wiLFxuICAgICAgaW1nU3JjOiBpbWdWZXJ3YWxcbiAgICB9XG4gIF1cblxuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ1c2VyLWRldGFpbHNcIj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtd3JhcFwiPlxuICAgICAgICAgIDxTaWRlYmFyIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWJsb2NrXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtcHJpbWFyeVwiPlxuICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImhlYWRpbmctd3JhcCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8Q29sIG1kPVwiNlwiIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9XCIxXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByZXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltZ1ByZXZ9IGFsdD1cIkljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9XCI1XCIgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1oZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWdBbmxhZ2VufSBhbHQ9XCJJY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgQW5sYWdlIEEgLSBBbmxhZ2VuZGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbCBtZD1cIjZcIiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7DhG5kZXJ1bmdlbiBTcGVpY2hlcm48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24+QW5sYWdlIGzDtnNjaGVuPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1tZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbGlzdC5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwidGFiXCIgb25DbGljaz17KCk9PiBhY3RpdmF0ZVN0YXR1cyhpdGVtLm5hbWUpfSBjbGFzc05hbWU9e2Ake2l0ZW0ubmFtZSA9PT0gYWN0aXZlU3RhdHVzID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uaW1nU3JjfSBhbHQ9XCJJY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5uYW1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RldGFpbHMtc2Vjb25kYXJ5Jz5cbiAgICAgICAgICAgIHthY3RpdmVTdGF0dXMgPT09IFwiS29tcG9uZW50ZW5cIiAmJiAoXG4gICAgICAgICAgICAgIDxLb21wb25lbnRlbiAvPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge2FjdGl2ZVN0YXR1cyA9PT0gXCJMaXZlZGF0ZW5cIiAmJiAoXG4gICAgICAgICAgICAgIDxMaXZlZGF0ZW4gLz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHthY3RpdmVTdGF0dXMgPT09IFwiSW5mb3JtYXRpb25lblwiICYmIChcbiAgICAgICAgICAgIDxJbmZvcm1hdGlvbmVuIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZERldGFpbHMiXSwibmFtZXMiOlsidXNlU2VhcmNoUGFyYW1zIiwiSGVhZGVyIiwiU2lkZWJhciIsIkJ1dHRvbiIsIkNvbCIsIlJvdyIsIkltYWdlIiwiaW1nQW5sYWdlbiIsImltZ1ByZXYiLCJpbWdJbmZvIiwiaW1nQ29tcG9uZW50IiwiaW1nTGl2ZSIsImltZ1ZlcndhbCIsImltZ0xvZ2J1Y2giLCJJbmZvcm1hdGlvbmVuIiwiS29tcG9uZW50ZW4iLCJ1c2VTdGF0ZSIsIkxpdmVkYXRlbiIsIkRhc2hib2FyZERldGFpbHMiLCJhY3RpdmVTdGF0dXMiLCJzZXRBY3RpdmVTdGF0dXMiLCJzZWFyY2hQYXJhbXMiLCJhY3RpdmF0ZVN0YXR1cyIsInN0YXR1c05hbWUiLCJzZXQiLCJsaXN0IiwibmFtZSIsImltZ1NyYyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJtZCIsInZhcmlhbnQiLCJpIiwic3JjIiwiYWx0IiwiaDIiLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/details/[id]/page.tsx\n"));

/***/ })

});