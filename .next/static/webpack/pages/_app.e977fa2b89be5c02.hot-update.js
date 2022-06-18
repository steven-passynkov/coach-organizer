"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/UserContext.js":
/*!***********************************!*\
  !*** ./components/UserContext.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": function() { return /* binding */ UserContext; },\n/* harmony export */   \"UserProvider\": function() { return /* binding */ UserProvider; }\n/* harmony export */ });\n/* harmony import */ var _Users_stevenpassynkov_Desktop_coach_organizer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_stevenpassynkov_Desktop_coach_organizer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_stevenpassynkov_Desktop_coach_organizer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/supabaseClient */ \"./utils/supabaseClient.js\");\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nvar UserProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), session1 = ref13[0], setSession = ref13[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), sessionLoading = ref1[0], setSessionLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), loading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), userData = ref3[0], setUserData = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), name = ref4[0], setName = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), nameModleLoading = ref5[0], setNameModleLoading = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), events = ref6[0], setEvents = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), facilities = ref7[0], setFacilities = ref7[1];\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), studentNames = ref8[0], setStudentNames = ref8[1];\n    var ref9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), uuidName = ref9[0], setUuidName = ref9[1];\n    var ref10 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), lessons = ref10[0], setLessons = ref10[1];\n    var ref11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), facilitiesLessons = ref11[0], setFacilitiesLessons = ref11[1];\n    var ref12 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), openLessons = ref12[0], setOpenLessons = ref12[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setSession(_utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.session());\n        _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.onAuthStateChange(function(_event, session) {\n            setSession(session);\n        });\n        setSessionLoading(false);\n    }, []);\n    var selectUserData = function() {\n        var _ref = _asyncToGenerator(_Users_stevenpassynkov_Desktop_coach_organizer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, data, error;\n            return _Users_stevenpassynkov_Desktop_coach_organizer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"profiles\").select().eq(\"id\", session1.user.id);\n                    case 2:\n                        ref = _ctx.sent;\n                        data = ref.data;\n                        error = ref.error;\n                        setUserData(data);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function selectUserData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var selectUser = function() {\n        var _ref = _asyncToGenerator(_Users_stevenpassynkov_Desktop_coach_organizer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, data, error;\n            return _Users_stevenpassynkov_Desktop_coach_organizer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"profiles\").select(\"name\").eq(\"id\", session1.user.id);\n                    case 2:\n                        ref = _ctx.sent;\n                        data = ref.data;\n                        error = ref.error;\n                        setName(data[0].name);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function selectUser() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var selectEvents = function() {\n        var _ref = _asyncToGenerator(_Users_stevenpassynkov_Desktop_coach_organizer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, data, error;\n            return _Users_stevenpassynkov_Desktop_coach_organizer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"events\").select();\n                    case 2:\n                        ref = _ctx.sent;\n                        data = ref.data;\n                        error = ref.error;\n                        setEvents(data);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function selectEvents() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var selectLocation = function() {\n        var _ref = _asyncToGenerator(_Users_stevenpassynkov_Desktop_coach_organizer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, data, error;\n            return _Users_stevenpassynkov_Desktop_coach_organizer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"facilities\").select();\n                    case 2:\n                        ref = _ctx.sent;\n                        data = ref.data;\n                        error = ref.error;\n                        setFacilities(data);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function selectLocation() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var selectStudents = function() {\n        var _ref = _asyncToGenerator(_Users_stevenpassynkov_Desktop_coach_organizer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, data, error;\n            return _Users_stevenpassynkov_Desktop_coach_organizer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"profiles\").select(\"name\");\n                    case 2:\n                        ref = _ctx.sent;\n                        data = ref.data;\n                        error = ref.error;\n                        setStudentNames(data);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function selectStudents() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var selectUuidName = function() {\n        var _ref = _asyncToGenerator(_Users_stevenpassynkov_Desktop_coach_organizer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, data, error;\n            return _Users_stevenpassynkov_Desktop_coach_organizer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"profiles\").select(\"id,name\");\n                    case 2:\n                        ref = _ctx.sent;\n                        data = ref.data;\n                        error = ref.error;\n                        setUuidName(data);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function selectUuidName() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var selectLessons = function() {\n        var _ref = _asyncToGenerator(_Users_stevenpassynkov_Desktop_coach_organizer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, data, error;\n            return _Users_stevenpassynkov_Desktop_coach_organizer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"lessons\").select();\n                    case 2:\n                        ref = _ctx.sent;\n                        data = ref.data;\n                        error = ref.error;\n                        setLessons(data);\n                        console.log(data);\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function selectLessons() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var subscribeLessons = _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"lessons\").on(\"*\", function() {\n        selectLessons();\n    }).subscribe();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (session1 !== null && sessionLoading == false) {\n            selectUserData();\n            selectUser();\n            selectEvents();\n            selectLocation();\n            selectStudents();\n            selectUuidName();\n            selectLessons();\n            setLoading(false);\n        }\n    }, [\n        session1\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (nameModleLoading == false) {\n            newUser();\n        }\n    }, [\n        nameModleLoading\n    ]);\n    /*\n  useEffect(() => {\n    if (lessons !== null && facilities !== null && events !== null) {\n      const openFacilities = facilities.filter((facilitie) => {\n        return events.some((event) => event.location === facilitie.id);\n      });\n      setFacilitiesLessons(openFacilities);\n    }\n  }, [lessons, facilities, events]);\n\n  useEffect(() => {\n    if (lessons !== null && events !== null && facilitiesLessons !== null) {\n      const openLessons = events.filter((event) => {\n        return lessons.some((lesson) => lesson.event === event.id);\n      });\n      const newOpenLessons = openLessons.map((lesson) => {\n        const facility = facilitiesLessons.find(\n          (fac) => fac.id === lesson.location\n        );\n        return { ...lesson, facility };\n      });\n      setOpenLessons(newOpenLessons);\n    }\n  }, [lessons, events, facilitiesLessons]);\n*/ return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserContext.Provider, {\n        value: {\n            session: session1,\n            setSession: setSession,\n            loading: loading,\n            setLoading: setLoading,\n            sessionLoading: sessionLoading,\n            setSessionLoading: setSessionLoading,\n            userData: userData,\n            setUserData: setUserData,\n            name: name,\n            setName: setName,\n            nameModleLoading: nameModleLoading,\n            setNameModleLoading: setNameModleLoading,\n            events: events,\n            setEvents: setEvents,\n            facilities: facilities,\n            setFacilities: setFacilities,\n            studentNames: studentNames,\n            setStudentNames: setStudentNames,\n            uuidName: uuidName,\n            setUuidName: setUuidName,\n            messages: messages,\n            setMessages: setMessages,\n            lessons: lessons,\n            setLessons: setLessons,\n            facilitiesLessons: facilitiesLessons,\n            setFacilitiesLessons: setFacilitiesLessons,\n            openLessons: openLessons,\n            setOpenLessons: setOpenLessons\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/stevenpassynkov/Desktop/coach-organizer/components/UserContext.js\",\n        lineNumber: 123,\n        columnNumber: 5\n    }, _this));\n};\n_s(UserProvider, \"xMWnR6yy4rfCLSzkkqflFL1jk0A=\");\n_c = UserProvider;\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDUEMsZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7WUFDaEJDLG1CQUFtQixFQUFuQkEsbUJBQW1CO1lBQ25CQyxNQUFNLEVBQU5BLE1BQU07WUFDTkMsU0FBUyxFQUFUQSxTQUFTO1lBQ1RDLFVBQVUsRUFBVkEsVUFBVTtZQUNWQyxhQUFhLEVBQWJBLGFBQWE7WUFDYkMsWUFBWSxFQUFaQSxZQUFZO1lBQ1pDLGVBQWUsRUFBZkEsZUFBZTtZQUNmQyxRQUFRLEVBQVJBLFFBQVE7WUFDUkMsV0FBVyxFQUFYQSxXQUFXO1lBQ1hnQyxRQUFRLEVBQVJBLFFBQVE7WUFDUkMsV0FBVyxFQUFYQSxXQUFXO1lBQ1hoQyxPQUFPLEVBQVBBLE9BQU87WUFDUEMsVUFBVSxFQUFWQSxVQUFVO1lBQ1ZDLGlCQUFpQixFQUFqQkEsaUJBQWlCO1lBQ2pCQyxvQkFBb0IsRUFBcEJBLG9CQUFvQjtZQUNwQkMsV0FBVyxFQUFYQSxXQUFXO1lBQ1hDLGNBQWMsRUFBZEEsY0FBYztRQUNoQixDQUFDO2tCQUVBMUIsUUFBUTs7Ozs7O0FBR2YsQ0FBQztHQXhKWUQsWUFBWTtLQUFaQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlckNvbnRleHQuanM/YzczZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwiLi4vdXRpbHMvc3VwYWJhc2VDbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgVXNlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc2Vzc2lvbiwgc2V0U2Vzc2lvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Nlc3Npb25Mb2FkaW5nLCBzZXRTZXNzaW9uTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbmFtZU1vZGxlTG9hZGluZywgc2V0TmFtZU1vZGxlTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2V2ZW50cywgc2V0RXZlbnRzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZmFjaWxpdGllcywgc2V0RmFjaWxpdGllc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3N0dWRlbnROYW1lcywgc2V0U3R1ZGVudE5hbWVzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdXVpZE5hbWUsIHNldFV1aWROYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbGVzc29ucywgc2V0TGVzc29uc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2ZhY2lsaXRpZXNMZXNzb25zLCBzZXRGYWNpbGl0aWVzTGVzc29uc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW29wZW5MZXNzb25zLCBzZXRPcGVuTGVzc29uc10gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNlc3Npb24oc3VwYWJhc2UuYXV0aC5zZXNzaW9uKCkpO1xuXG4gICAgc3VwYWJhc2UuYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZSgoX2V2ZW50LCBzZXNzaW9uKSA9PiB7XG4gICAgICBzZXRTZXNzaW9uKHNlc3Npb24pO1xuICAgIH0pO1xuICAgIHNldFNlc3Npb25Mb2FkaW5nKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNlbGVjdFVzZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgLmZyb20oXCJwcm9maWxlc1wiKVxuICAgICAgLnNlbGVjdCgpXG4gICAgICAuZXEoXCJpZFwiLCBzZXNzaW9uLnVzZXIuaWQpO1xuICAgIHNldFVzZXJEYXRhKGRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdFVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAuZnJvbShcInByb2ZpbGVzXCIpXG4gICAgICAuc2VsZWN0KFwibmFtZVwiKVxuICAgICAgLmVxKFwiaWRcIiwgc2Vzc2lvbi51c2VyLmlkKTtcbiAgICBzZXROYW1lKGRhdGFbMF0ubmFtZSk7XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0RXZlbnRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwiZXZlbnRzXCIpLnNlbGVjdCgpO1xuICAgIHNldEV2ZW50cyhkYXRhKTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RMb2NhdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcImZhY2lsaXRpZXNcIikuc2VsZWN0KCk7XG4gICAgc2V0RmFjaWxpdGllcyhkYXRhKTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RTdHVkZW50cyA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcInByb2ZpbGVzXCIpLnNlbGVjdChcIm5hbWVcIik7XG4gICAgc2V0U3R1ZGVudE5hbWVzKGRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdFV1aWROYW1lID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwicHJvZmlsZXNcIikuc2VsZWN0KFwiaWQsbmFtZVwiKTtcbiAgICBzZXRVdWlkTmFtZShkYXRhKTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RMZXNzb25zID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwibGVzc29uc1wiKS5zZWxlY3QoKTtcbiAgICBzZXRMZXNzb25zKGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IHN1YnNjcmliZUxlc3NvbnMgPSBzdXBhYmFzZVxuICAgIC5mcm9tKFwibGVzc29uc1wiKVxuICAgIC5vbihcIipcIiwgKCkgPT4ge1xuICAgICAgc2VsZWN0TGVzc29ucygpO1xuICAgIH0pXG4gICAgLnN1YnNjcmliZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlc3Npb24gIT09IG51bGwgJiYgc2Vzc2lvbkxvYWRpbmcgPT0gZmFsc2UpIHtcbiAgICAgIHNlbGVjdFVzZXJEYXRhKCk7XG4gICAgICBzZWxlY3RVc2VyKCk7XG4gICAgICBzZWxlY3RFdmVudHMoKTtcbiAgICAgIHNlbGVjdExvY2F0aW9uKCk7XG4gICAgICBzZWxlY3RTdHVkZW50cygpO1xuICAgICAgc2VsZWN0VXVpZE5hbWUoKTtcbiAgICAgIHNlbGVjdExlc3NvbnMoKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfSwgW3Nlc3Npb25dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChuYW1lTW9kbGVMb2FkaW5nID09IGZhbHNlKSB7XG4gICAgICBuZXdVc2VyKCk7XG4gICAgfVxuICB9LCBbbmFtZU1vZGxlTG9hZGluZ10pO1xuLypcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobGVzc29ucyAhPT0gbnVsbCAmJiBmYWNpbGl0aWVzICE9PSBudWxsICYmIGV2ZW50cyAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgb3BlbkZhY2lsaXRpZXMgPSBmYWNpbGl0aWVzLmZpbHRlcigoZmFjaWxpdGllKSA9PiB7XG4gICAgICAgIHJldHVybiBldmVudHMuc29tZSgoZXZlbnQpID0+IGV2ZW50LmxvY2F0aW9uID09PSBmYWNpbGl0aWUuaWQpO1xuICAgICAgfSk7XG4gICAgICBzZXRGYWNpbGl0aWVzTGVzc29ucyhvcGVuRmFjaWxpdGllcyk7XG4gICAgfVxuICB9LCBbbGVzc29ucywgZmFjaWxpdGllcywgZXZlbnRzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobGVzc29ucyAhPT0gbnVsbCAmJiBldmVudHMgIT09IG51bGwgJiYgZmFjaWxpdGllc0xlc3NvbnMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG9wZW5MZXNzb25zID0gZXZlbnRzLmZpbHRlcigoZXZlbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGxlc3NvbnMuc29tZSgobGVzc29uKSA9PiBsZXNzb24uZXZlbnQgPT09IGV2ZW50LmlkKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgbmV3T3Blbkxlc3NvbnMgPSBvcGVuTGVzc29ucy5tYXAoKGxlc3NvbikgPT4ge1xuICAgICAgICBjb25zdCBmYWNpbGl0eSA9IGZhY2lsaXRpZXNMZXNzb25zLmZpbmQoXG4gICAgICAgICAgKGZhYykgPT4gZmFjLmlkID09PSBsZXNzb24ubG9jYXRpb25cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHsgLi4ubGVzc29uLCBmYWNpbGl0eSB9O1xuICAgICAgfSk7XG4gICAgICBzZXRPcGVuTGVzc29ucyhuZXdPcGVuTGVzc29ucyk7XG4gICAgfVxuICB9LCBbbGVzc29ucywgZXZlbnRzLCBmYWNpbGl0aWVzTGVzc29uc10pO1xuKi9cbiAgcmV0dXJuIChcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHNlc3Npb24sXG4gICAgICAgIHNldFNlc3Npb24sXG4gICAgICAgIGxvYWRpbmcsXG4gICAgICAgIHNldExvYWRpbmcsXG4gICAgICAgIHNlc3Npb25Mb2FkaW5nLFxuICAgICAgICBzZXRTZXNzaW9uTG9hZGluZyxcbiAgICAgICAgdXNlckRhdGEsXG4gICAgICAgIHNldFVzZXJEYXRhLFxuICAgICAgICBuYW1lLFxuICAgICAgICBzZXROYW1lLFxuICAgICAgICBuYW1lTW9kbGVMb2FkaW5nLFxuICAgICAgICBzZXROYW1lTW9kbGVMb2FkaW5nLFxuICAgICAgICBldmVudHMsXG4gICAgICAgIHNldEV2ZW50cyxcbiAgICAgICAgZmFjaWxpdGllcyxcbiAgICAgICAgc2V0RmFjaWxpdGllcyxcbiAgICAgICAgc3R1ZGVudE5hbWVzLFxuICAgICAgICBzZXRTdHVkZW50TmFtZXMsXG4gICAgICAgIHV1aWROYW1lLFxuICAgICAgICBzZXRVdWlkTmFtZSxcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICAgIHNldE1lc3NhZ2VzLFxuICAgICAgICBsZXNzb25zLFxuICAgICAgICBzZXRMZXNzb25zLFxuICAgICAgICBmYWNpbGl0aWVzTGVzc29ucyxcbiAgICAgICAgc2V0RmFjaWxpdGllc0xlc3NvbnMsXG4gICAgICAgIG9wZW5MZXNzb25zLFxuICAgICAgICBzZXRPcGVuTGVzc29uc1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJzdXBhYmFzZSIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXNzaW9uIiwic2V0U2Vzc2lvbiIsInNlc3Npb25Mb2FkaW5nIiwic2V0U2Vzc2lvbkxvYWRpbmciLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJuYW1lIiwic2V0TmFtZSIsIm5hbWVNb2RsZUxvYWRpbmciLCJzZXROYW1lTW9kbGVMb2FkaW5nIiwiZXZlbnRzIiwic2V0RXZlbnRzIiwiZmFjaWxpdGllcyIsInNldEZhY2lsaXRpZXMiLCJzdHVkZW50TmFtZXMiLCJzZXRTdHVkZW50TmFtZXMiLCJ1dWlkTmFtZSIsInNldFV1aWROYW1lIiwibGVzc29ucyIsInNldExlc3NvbnMiLCJmYWNpbGl0aWVzTGVzc29ucyIsInNldEZhY2lsaXRpZXNMZXNzb25zIiwib3Blbkxlc3NvbnMiLCJzZXRPcGVuTGVzc29ucyIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZSIsIl9ldmVudCIsInNlbGVjdFVzZXJEYXRhIiwiZGF0YSIsImVycm9yIiwiZnJvbSIsInNlbGVjdCIsImVxIiwidXNlciIsImlkIiwic2VsZWN0VXNlciIsInNlbGVjdEV2ZW50cyIsInNlbGVjdExvY2F0aW9uIiwic2VsZWN0U3R1ZGVudHMiLCJzZWxlY3RVdWlkTmFtZSIsInNlbGVjdExlc3NvbnMiLCJjb25zb2xlIiwibG9nIiwic3Vic2NyaWJlTGVzc29ucyIsIm9uIiwic3Vic2NyaWJlIiwibmV3VXNlciIsIlByb3ZpZGVyIiwidmFsdWUiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UserContext.js\n");

/***/ })

});