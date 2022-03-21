/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/UserContext.js":
/*!***********************************!*\
  !*** ./components/UserContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/supabaseClient */ \"./utils/supabaseClient.js\");\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children  })=>{\n    const { 0: session1 , 1: setSession  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: sessionLoading , 1: setSessionLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: userData , 1: setUserData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: nameLoading , 1: setNameLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: nameModleLoading , 1: setNameModleLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: events , 1: setEvents  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: eventsLoading , 1: setEventsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: facilities , 1: setFacilities  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: facilitiesLoading , 1: setFacilitiesLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: studentNames , 1: setStudentNames  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: showMessaging , 1: setShowMessaging  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setSession(_utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.session());\n        _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.onAuthStateChange((_event, session)=>{\n            setSession(session);\n        });\n        setSessionLoading(false);\n    }, []);\n    const selectUserData = async ()=>{\n        let { data , error  } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"profiles\").select().eq(\"id\", session1.user.id);\n        setUserData(data);\n    };\n    const selectUser = async ()=>{\n        let { data , error  } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"profiles\").select(\"name\").eq(\"id\", session1.user.id);\n        setNameLoading(false);\n        setName(data[0].name);\n    };\n    const selectEvents = async ()=>{\n        let { data , error  } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"events\").select();\n        setEvents(data);\n        setEventsLoading(false);\n    };\n    const selectLocation = async ()=>{\n        let { data , error  } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"facilities\").select();\n        setFacilities(data);\n        setFacilitiesLoading(false);\n    };\n    const selectStudents = async ()=>{\n        let { data , error  } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"profiles\").select(\"name\");\n        setStudentNames(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (session1 != null) {\n            selectUserData();\n            selectUser();\n            selectEvents();\n            selectLocation();\n            selectStudents();\n            setLoading(false);\n        }\n    }, [\n        session1\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (nameModleLoading == false) {\n            newUser();\n        }\n    }, [\n        nameModleLoading\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            session: session1,\n            loading,\n            setLoading,\n            setSession,\n            sessionLoading,\n            setSessionLoading,\n            userData,\n            setUserData,\n            name,\n            setName,\n            nameLoading,\n            setNameLoading,\n            nameModleLoading,\n            setNameModleLoading,\n            events,\n            setEvents,\n            eventsLoading,\n            setEventsLoading,\n            facilities,\n            setFacilities,\n            facilitiesLoading,\n            setFacilitiesLoading,\n            studentNames,\n            setStudentNames,\n            showMessaging,\n            setShowMessaging\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/stevenpassynkov/Desktop/coach-organizer/components/UserContext.js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, undefined));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNOQyxTQUFTO1lBQ1RDLGFBQWE7WUFDYkMsZ0JBQWdCO1lBQ2hCQyxVQUFVO1lBQ1ZDLGFBQWE7WUFDYkMsaUJBQWlCO1lBQ2pCQyxvQkFBb0I7WUFDcEJDLFlBQVk7WUFDWkMsZUFBZTtZQUNmQyxhQUFhO1lBQ2JDLGdCQUFnQjtRQUNsQixDQUFDO2tCQUVBMUIsUUFBUTs7Ozs7O0FBR2YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvYWNoLW9yZ2FuaXplci8uL2NvbXBvbmVudHMvVXNlckNvbnRleHQuanM/YzczZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwiLi4vdXRpbHMvc3VwYWJhc2VDbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgVXNlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc2Vzc2lvbiwgc2V0U2Vzc2lvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW3Nlc3Npb25Mb2FkaW5nLCBzZXRTZXNzaW9uTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW25hbWVMb2FkaW5nLCBzZXROYW1lTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW25hbWVNb2RsZUxvYWRpbmcsIHNldE5hbWVNb2RsZUxvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtldmVudHMsIHNldEV2ZW50c10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZXZlbnRzTG9hZGluZywgc2V0RXZlbnRzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2ZhY2lsaXRpZXMsIHNldEZhY2lsaXRpZXNdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbZmFjaWxpdGllc0xvYWRpbmcsIHNldEZhY2lsaXRpZXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtzdHVkZW50TmFtZXMsIHNldFN0dWRlbnROYW1lc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc2hvd01lc3NhZ2luZywgc2V0U2hvd01lc3NhZ2luZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNlc3Npb24oc3VwYWJhc2UuYXV0aC5zZXNzaW9uKCkpO1xuXG4gICAgc3VwYWJhc2UuYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZSgoX2V2ZW50LCBzZXNzaW9uKSA9PiB7XG4gICAgICBzZXRTZXNzaW9uKHNlc3Npb24pO1xuICAgIH0pO1xuICAgIHNldFNlc3Npb25Mb2FkaW5nKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNlbGVjdFVzZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwicHJvZmlsZXNcIilcbiAgICAuc2VsZWN0KClcbiAgICAuZXEoXCJpZFwiLCBzZXNzaW9uLnVzZXIuaWQpO1xuICBzZXRVc2VyRGF0YShkYXRhKTtcbiAgfVxuXG4gIGNvbnN0IHNlbGVjdFVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAuZnJvbShcInByb2ZpbGVzXCIpXG4gICAgICAuc2VsZWN0KFwibmFtZVwiKVxuICAgICAgLmVxKFwiaWRcIiwgc2Vzc2lvbi51c2VyLmlkKTtcbiAgICBzZXROYW1lTG9hZGluZyhmYWxzZSk7XG4gICAgc2V0TmFtZShkYXRhWzBdLm5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdEV2ZW50cyA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcImV2ZW50c1wiKS5zZWxlY3QoKTtcbiAgICBzZXRFdmVudHMoZGF0YSlcbiAgICBzZXRFdmVudHNMb2FkaW5nKGZhbHNlKVxuICB9O1xuXG4gIGNvbnN0IHNlbGVjdExvY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwiZmFjaWxpdGllc1wiKS5zZWxlY3QoKTtcbiAgICBzZXRGYWNpbGl0aWVzKGRhdGEpXG4gICAgc2V0RmFjaWxpdGllc0xvYWRpbmcoZmFsc2UpXG4gIH1cblxuICBjb25zdCBzZWxlY3RTdHVkZW50cyA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcInByb2ZpbGVzXCIpLnNlbGVjdChcIm5hbWVcIik7XG4gICAgc2V0U3R1ZGVudE5hbWVzKGRhdGEpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlc3Npb24gIT0gbnVsbCkge1xuICAgICAgc2VsZWN0VXNlckRhdGEoKTtcbiAgICAgIHNlbGVjdFVzZXIoKTtcbiAgICAgIHNlbGVjdEV2ZW50cygpO1xuICAgICAgc2VsZWN0TG9jYXRpb24oKTtcbiAgICAgIHNlbGVjdFN0dWRlbnRzKCk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH1cbiAgfSwgW3Nlc3Npb25dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChuYW1lTW9kbGVMb2FkaW5nID09IGZhbHNlKSB7XG4gICAgICBuZXdVc2VyKCk7XG4gICAgfVxuICB9LCBbbmFtZU1vZGxlTG9hZGluZ10pO1xuXG4gIHJldHVybiAoXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBzZXNzaW9uLFxuICAgICAgICBsb2FkaW5nLFxuICAgICAgICBzZXRMb2FkaW5nLFxuICAgICAgICBzZXRTZXNzaW9uLFxuICAgICAgICBzZXNzaW9uTG9hZGluZyxcbiAgICAgICAgc2V0U2Vzc2lvbkxvYWRpbmcsXG4gICAgICAgIHVzZXJEYXRhLFxuICAgICAgICBzZXRVc2VyRGF0YSxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc2V0TmFtZSxcbiAgICAgICAgbmFtZUxvYWRpbmcsXG4gICAgICAgIHNldE5hbWVMb2FkaW5nLFxuICAgICAgICBuYW1lTW9kbGVMb2FkaW5nLFxuICAgICAgICBzZXROYW1lTW9kbGVMb2FkaW5nLFxuICAgICAgICBldmVudHMsXG4gICAgICAgIHNldEV2ZW50cyxcbiAgICAgICAgZXZlbnRzTG9hZGluZyxcbiAgICAgICAgc2V0RXZlbnRzTG9hZGluZyxcbiAgICAgICAgZmFjaWxpdGllcyxcbiAgICAgICAgc2V0RmFjaWxpdGllcyxcbiAgICAgICAgZmFjaWxpdGllc0xvYWRpbmcsXG4gICAgICAgIHNldEZhY2lsaXRpZXNMb2FkaW5nLFxuICAgICAgICBzdHVkZW50TmFtZXMsXG4gICAgICAgIHNldFN0dWRlbnROYW1lcyxcbiAgICAgICAgc2hvd01lc3NhZ2luZyxcbiAgICAgICAgc2V0U2hvd01lc3NhZ2luZyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwic3VwYWJhc2UiLCJVc2VyQ29udGV4dCIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwic2Vzc2lvbiIsInNldFNlc3Npb24iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlc3Npb25Mb2FkaW5nIiwic2V0U2Vzc2lvbkxvYWRpbmciLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwibmFtZSIsInNldE5hbWUiLCJuYW1lTG9hZGluZyIsInNldE5hbWVMb2FkaW5nIiwibmFtZU1vZGxlTG9hZGluZyIsInNldE5hbWVNb2RsZUxvYWRpbmciLCJldmVudHMiLCJzZXRFdmVudHMiLCJldmVudHNMb2FkaW5nIiwic2V0RXZlbnRzTG9hZGluZyIsImZhY2lsaXRpZXMiLCJzZXRGYWNpbGl0aWVzIiwiZmFjaWxpdGllc0xvYWRpbmciLCJzZXRGYWNpbGl0aWVzTG9hZGluZyIsInN0dWRlbnROYW1lcyIsInNldFN0dWRlbnROYW1lcyIsInNob3dNZXNzYWdpbmciLCJzZXRTaG93TWVzc2FnaW5nIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlIiwiX2V2ZW50Iiwic2VsZWN0VXNlckRhdGEiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJ1c2VyIiwiaWQiLCJzZWxlY3RVc2VyIiwic2VsZWN0RXZlbnRzIiwic2VsZWN0TG9jYXRpb24iLCJzZWxlY3RTdHVkZW50cyIsIm5ld1VzZXIiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UserContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fullcalendar_common_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/common/main.css */ \"./node_modules/@fullcalendar/common/main.css\");\n/* harmony import */ var _fullcalendar_common_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_common_main_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/daygrid/main.css */ \"./node_modules/@fullcalendar/daygrid/main.css\");\n/* harmony import */ var _fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fullcalendar_timegrid_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/timegrid/main.css */ \"./node_modules/@fullcalendar/timegrid/main.css\");\n/* harmony import */ var _fullcalendar_timegrid_main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid_main_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserContext */ \"./components/UserContext.js\");\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserContext__WEBPACK_IMPORTED_MODULE_6__.UserProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/stevenpassynkov/Desktop/coach-organizer/pages/_app.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/stevenpassynkov/Desktop/coach-organizer/pages/_app.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNlO0FBQ1A7QUFDQztBQUNDO0FBQ2dCO1NBRS9DQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxNQUFNLDZFQUNISCxpRUFBWTs4RkFDVkUsU0FBUztlQUFLQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QixDQUFDO0FBQ0QsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvYWNoLW9yZ2FuaXplci8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IFwiQGZ1bGxjYWxlbmRhci9jb21tb24vbWFpbi5jc3NcIjtcbmltcG9ydCBcIkBmdWxsY2FsZW5kYXIvZGF5Z3JpZC9tYWluLmNzc1wiO1xuaW1wb3J0IFwiQGZ1bGxjYWxlbmRhci90aW1lZ3JpZC9tYWluLmNzc1wiO1xuaW1wb3J0IHsgVXNlclByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckNvbnRleHRcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFVzZXJQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1VzZXJQcm92aWRlcj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlVzZXJQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./utils/supabaseClient.js":
/*!*********************************!*\
  !*** ./utils/supabaseClient.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabaseUrl = \"https://aryclmylujlzljkkepzj.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTY3MjkxNywiZXhwIjoxOTU1MjQ4OTE3fQ.Dxa_xb90puP0RfmgTRgYu6hs_XEWe33aCyMpo0rTegI\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zdXBhYmFzZUNsaWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0Q7QUFFcEQsS0FBSyxDQUFDQyxXQUFXLEdBQUdDLDBDQUFvQztBQUN4RCxLQUFLLENBQUNHLGVBQWUsR0FBR0gscUpBQXlDO0FBRTFELEtBQUssQ0FBQ0ssUUFBUSxHQUFHUCxtRUFBWSxDQUFDQyxXQUFXLEVBQUVJLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2FjaC1vcmdhbml6ZXIvLi91dGlscy9zdXBhYmFzZUNsaWVudC5qcz81YWQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcydcblxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkxcbmNvbnN0IHN1cGFiYXNlQW5vbktleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZXG5cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VBbm9uS2V5KSJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJzdXBhYmFzZUFub25LZXkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsInN1cGFiYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/supabaseClient.js\n");

/***/ }),

/***/ "./node_modules/@fullcalendar/common/main.css":
/*!****************************************************!*\
  !*** ./node_modules/@fullcalendar/common/main.css ***!
  \****************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fullcalendar/daygrid/main.css":
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/main.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fullcalendar/timegrid/main.css":
/*!******************************************************!*\
  !*** ./node_modules/@fullcalendar/timegrid/main.css ***!
  \******************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();