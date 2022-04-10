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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/supabaseClient */ \"./utils/supabaseClient.js\");\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children  })=>{\n    const { 0: session1 , 1: setSession  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: sessionLoading , 1: setSessionLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: userData , 1: setUserData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: nameModleLoading , 1: setNameModleLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: events , 1: setEvents  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: facilities , 1: setFacilities  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: studentNames , 1: setStudentNames  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: showMessaging , 1: setShowMessaging  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: uuidName , 1: setUuidName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setSession(_utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.session());\n        _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.onAuthStateChange((_event, session)=>{\n            setSession(session);\n        });\n        setSessionLoading(false);\n    }, []);\n    const selectUserData = async ()=>{\n        let { data , error  } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"profiles\").select().eq(\"id\", session1.user.id);\n        setUserData(data);\n    };\n    const selectUser = async ()=>{\n        let { data , error  } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"profiles\").select(\"name\").eq(\"id\", session1.user.id);\n        setName(data[0].name);\n    };\n    const selectEvents = async ()=>{\n        let { data , error  } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"events\").select();\n        setEvents(data);\n    };\n    const selectLocation = async ()=>{\n        let { data , error  } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"facilities\").select();\n        setFacilities(data);\n    };\n    const selectStudents = async ()=>{\n        let { data , error  } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"profiles\").select(\"name\");\n        setStudentNames(data);\n    };\n    const selectUuidName = async ()=>{\n        let { data , error  } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"profiles\").select(\"id,name\");\n        setUuidName(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (session1 != null && sessionLoading == false) {\n            selectUserData();\n            selectUser();\n            selectEvents();\n            selectLocation();\n            selectStudents();\n            selectUuidName();\n            setLoading(false);\n        }\n    }, [\n        session1\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (nameModleLoading == false) {\n            newUser();\n        }\n    }, [\n        nameModleLoading\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            session: session1,\n            setSession,\n            loading,\n            setLoading,\n            sessionLoading,\n            setSessionLoading,\n            userData,\n            setUserData,\n            name,\n            setName,\n            nameModleLoading,\n            setNameModleLoading,\n            events,\n            setEvents,\n            facilities,\n            setFacilities,\n            studentNames,\n            setStudentNames,\n            showMessaging,\n            setShowMessaging,\n            uuidName,\n            setUuidName\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/stevenpassynkov/Desktop/coach-organizer/components/UserContext.js\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7WUFDVkMsYUFBYTtZQUNiQyxZQUFZO1lBQ1pDLGVBQWU7WUFDZkMsYUFBYTtZQUNiQyxnQkFBZ0I7WUFDaEJDLFFBQVE7WUFDUkMsV0FBVztRQUNiLENBQUM7a0JBRUF0QixRQUFROzs7Ozs7QUFHZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29hY2gtb3JnYW5pemVyLy4vY29tcG9uZW50cy9Vc2VyQ29udGV4dC5qcz9jNzNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCIuLi91dGlscy9zdXBhYmFzZUNsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBVc2VyUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzZXNzaW9uLCBzZXRTZXNzaW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3Nlc3Npb25Mb2FkaW5nLCBzZXRTZXNzaW9uTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtuYW1lTW9kbGVMb2FkaW5nLCBzZXROYW1lTW9kbGVMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbZXZlbnRzLCBzZXRFdmVudHNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2ZhY2lsaXRpZXMsIHNldEZhY2lsaXRpZXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3N0dWRlbnROYW1lcywgc2V0U3R1ZGVudE5hbWVzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzaG93TWVzc2FnaW5nLCBzZXRTaG93TWVzc2FnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3V1aWROYW1lLCBzZXRVdWlkTmFtZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2Vzc2lvbihzdXBhYmFzZS5hdXRoLnNlc3Npb24oKSk7XG5cbiAgICBzdXBhYmFzZS5hdXRoLm9uQXV0aFN0YXRlQ2hhbmdlKChfZXZlbnQsIHNlc3Npb24pID0+IHtcbiAgICAgIHNldFNlc3Npb24oc2Vzc2lvbik7XG4gICAgfSk7XG4gICAgc2V0U2Vzc2lvbkxvYWRpbmcoZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2VsZWN0VXNlckRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAuZnJvbShcInByb2ZpbGVzXCIpXG4gICAgICAuc2VsZWN0KClcbiAgICAgIC5lcShcImlkXCIsIHNlc3Npb24udXNlci5pZCk7XG4gICAgc2V0VXNlckRhdGEoZGF0YSk7XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0VXNlciA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKFwicHJvZmlsZXNcIilcbiAgICAgIC5zZWxlY3QoXCJuYW1lXCIpXG4gICAgICAuZXEoXCJpZFwiLCBzZXNzaW9uLnVzZXIuaWQpO1xuICAgIHNldE5hbWUoZGF0YVswXS5uYW1lKTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RFdmVudHMgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJldmVudHNcIikuc2VsZWN0KCk7XG4gICAgc2V0RXZlbnRzKGRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdExvY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwiZmFjaWxpdGllc1wiKS5zZWxlY3QoKTtcbiAgICBzZXRGYWNpbGl0aWVzKGRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdFN0dWRlbnRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwicHJvZmlsZXNcIikuc2VsZWN0KFwibmFtZVwiKTtcbiAgICBzZXRTdHVkZW50TmFtZXMoZGF0YSk7XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0VXVpZE5hbWUgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJwcm9maWxlc1wiKS5zZWxlY3QoXCJpZCxuYW1lXCIpO1xuICAgIHNldFV1aWROYW1lKGRhdGEpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlc3Npb24gIT0gbnVsbCAmJiBzZXNzaW9uTG9hZGluZyA9PSBmYWxzZSkge1xuICAgICAgc2VsZWN0VXNlckRhdGEoKTtcbiAgICAgIHNlbGVjdFVzZXIoKTtcbiAgICAgIHNlbGVjdEV2ZW50cygpO1xuICAgICAgc2VsZWN0TG9jYXRpb24oKTtcbiAgICAgIHNlbGVjdFN0dWRlbnRzKCk7XG4gICAgICBzZWxlY3RVdWlkTmFtZSgpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9LCBbc2Vzc2lvbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG5hbWVNb2RsZUxvYWRpbmcgPT0gZmFsc2UpIHtcbiAgICAgIG5ld1VzZXIoKTtcbiAgICB9XG4gIH0sIFtuYW1lTW9kbGVMb2FkaW5nXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHNlc3Npb24sXG4gICAgICAgIHNldFNlc3Npb24sXG4gICAgICAgIGxvYWRpbmcsXG4gICAgICAgIHNldExvYWRpbmcsXG4gICAgICAgIHNlc3Npb25Mb2FkaW5nLFxuICAgICAgICBzZXRTZXNzaW9uTG9hZGluZyxcbiAgICAgICAgdXNlckRhdGEsXG4gICAgICAgIHNldFVzZXJEYXRhLFxuICAgICAgICBuYW1lLFxuICAgICAgICBzZXROYW1lLFxuICAgICAgICBuYW1lTW9kbGVMb2FkaW5nLFxuICAgICAgICBzZXROYW1lTW9kbGVMb2FkaW5nLFxuICAgICAgICBldmVudHMsXG4gICAgICAgIHNldEV2ZW50cyxcbiAgICAgICAgZmFjaWxpdGllcyxcbiAgICAgICAgc2V0RmFjaWxpdGllcyxcbiAgICAgICAgc3R1ZGVudE5hbWVzLFxuICAgICAgICBzZXRTdHVkZW50TmFtZXMsXG4gICAgICAgIHNob3dNZXNzYWdpbmcsXG4gICAgICAgIHNldFNob3dNZXNzYWdpbmcsXG4gICAgICAgIHV1aWROYW1lLFxuICAgICAgICBzZXRVdWlkTmFtZSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwic3VwYWJhc2UiLCJVc2VyQ29udGV4dCIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwic2Vzc2lvbiIsInNldFNlc3Npb24iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlc3Npb25Mb2FkaW5nIiwic2V0U2Vzc2lvbkxvYWRpbmciLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwibmFtZSIsInNldE5hbWUiLCJuYW1lTW9kbGVMb2FkaW5nIiwic2V0TmFtZU1vZGxlTG9hZGluZyIsImV2ZW50cyIsInNldEV2ZW50cyIsImZhY2lsaXRpZXMiLCJzZXRGYWNpbGl0aWVzIiwic3R1ZGVudE5hbWVzIiwic2V0U3R1ZGVudE5hbWVzIiwic2hvd01lc3NhZ2luZyIsInNldFNob3dNZXNzYWdpbmciLCJ1dWlkTmFtZSIsInNldFV1aWROYW1lIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlIiwiX2V2ZW50Iiwic2VsZWN0VXNlckRhdGEiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJ1c2VyIiwiaWQiLCJzZWxlY3RVc2VyIiwic2VsZWN0RXZlbnRzIiwic2VsZWN0TG9jYXRpb24iLCJzZWxlY3RTdHVkZW50cyIsInNlbGVjdFV1aWROYW1lIiwibmV3VXNlciIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UserContext.js\n");

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