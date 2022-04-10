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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/supabaseClient */ \"./utils/supabaseClient.js\");\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children  })=>{\n    const { 0: session1 , 1: setSession  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: sessionLoading , 1: setSessionLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: userData , 1: setUserData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: nameLoading , 1: setNameLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: nameModleLoading , 1: setNameModleLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: events , 1: setEvents  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: eventsLoading , 1: setEventsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: facilities , 1: setFacilities  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: facilitiesLoading , 1: setFacilitiesLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: studentNames , 1: setStudentNames  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: showMessaging , 1: setShowMessaging  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: uuidName , 1: setUuidName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setSession(_utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.session());\n        _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.onAuthStateChange((_event, session)=>{\n            setSession(session);\n        });\n        setSessionLoading(false);\n    }, []);\n    const selectUserData = async ()=>{\n        let { data , error  } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"profiles\").select().eq(\"id\", session1.user.id);\n        setUserData(data);\n    };\n    const selectUser = async ()=>{\n        let { data , error  } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"profiles\").select(\"name\").eq(\"id\", session1.user.id);\n        setNameLoading(false);\n        setName(data[0].name);\n    };\n    const selectEvents = async ()=>{\n        let { data , error  } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"events\").select();\n        setEvents(data);\n        setEventsLoading(false);\n    };\n    const selectLocation = async ()=>{\n        let { data , error  } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"facilities\").select();\n        setFacilities(data);\n        setFacilitiesLoading(false);\n    };\n    const selectStudents = async ()=>{\n        let { data , error  } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"profiles\").select(\"name\");\n        setStudentNames(data);\n    };\n    const selectUuidName = async ()=>{\n        let { data , error  } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"profiles\").select(\"id,name\");\n        setUuidName(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (session1 != null) {\n            selectUserData();\n            selectUser();\n            selectEvents();\n            selectLocation();\n            selectStudents();\n            selectUuidName();\n            setLoading(false);\n        }\n    }, [\n        session1\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (nameModleLoading == false) {\n            newUser();\n        }\n    }, [\n        nameModleLoading\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            session: session1,\n            loading,\n            setLoading,\n            setSession,\n            sessionLoading,\n            setSessionLoading,\n            userData,\n            setUserData,\n            name,\n            setName,\n            nameLoading,\n            setNameLoading,\n            nameModleLoading,\n            setNameModleLoading,\n            events,\n            setEvents,\n            eventsLoading,\n            setEventsLoading,\n            facilities,\n            setFacilities,\n            facilitiesLoading,\n            setFacilitiesLoading,\n            studentNames,\n            setStudentNames,\n            showMessaging,\n            setShowMessaging,\n            uuidName,\n            setUuidName\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/stevenpassynkov/Desktop/coach-organizer/components/UserContext.js\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, undefined));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlFO0FBQ2Y7QUFFM0MsS0FBSyxDQUFDSyxXQUFXLGlCQUFHSCxvREFBYTtBQUVqQyxLQUFLLENBQUNJLFlBQVksSUFBSSxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUM3QyxLQUFLLE1BQUVDLFFBQU8sTUFBRUMsVUFBVSxNQUFJTiwrQ0FBUSxDQUFDLElBQUk7SUFDM0MsS0FBSyxNQUFFTyxPQUFPLE1BQUVDLFVBQVUsTUFBSVIsK0NBQVEsQ0FBQyxJQUFJO0lBQzNDLEtBQUssTUFBRVMsY0FBYyxNQUFFQyxpQkFBaUIsTUFBSVYsK0NBQVEsQ0FBQyxJQUFJO0lBQ3pELEtBQUssTUFBRVcsUUFBUSxNQUFFQyxXQUFXLE1BQUlaLCtDQUFRLENBQUMsSUFBSTtJQUM3QyxLQUFLLE1BQUVhLElBQUksTUFBRUMsT0FBTyxNQUFJZCwrQ0FBUSxDQUFDLENBQUU7SUFDbkMsS0FBSyxNQUFFZSxXQUFXLE1BQUVDLGNBQWMsTUFBSWhCLCtDQUFRLENBQUMsSUFBSTtJQUNuRCxLQUFLLE1BQUVpQixnQkFBZ0IsTUFBRUMsbUJBQW1CLE1BQUlsQiwrQ0FBUSxDQUFDLElBQUk7SUFDN0QsS0FBSyxNQUFFbUIsTUFBTSxNQUFFQyxTQUFTLE1BQUlwQiwrQ0FBUTtJQUNwQyxLQUFLLE1BQUVxQixhQUFhLE1BQUVDLGdCQUFnQixNQUFJdEIsK0NBQVEsQ0FBQyxJQUFJO0lBQ3ZELEtBQUssTUFBRXVCLFVBQVUsTUFBRUMsYUFBYSxNQUFJeEIsK0NBQVE7SUFDNUMsS0FBSyxNQUFFeUIsaUJBQWlCLE1BQUVDLG9CQUFvQixNQUFJMUIsK0NBQVEsQ0FBQyxJQUFJO0lBQy9ELEtBQUssTUFBRTJCLFlBQVksTUFBRUMsZUFBZSxNQUFJNUIsK0NBQVE7SUFDaEQsS0FBSyxNQUFFNkIsYUFBYSxNQUFFQyxnQkFBZ0IsTUFBSTlCLCtDQUFRLENBQUMsS0FBSztJQUN4RCxLQUFLLE1BQUUrQixRQUFRLE1BQUVDLFdBQVcsTUFBSWhDLCtDQUFRO0lBRXhDRixnREFBUyxLQUFPLENBQUM7UUFDZlEsVUFBVSxDQUFDTCx3RUFBcUI7UUFFaENBLGtGQUErQixFQUFFa0MsTUFBTSxFQUFFOUIsT0FBTyxHQUFLLENBQUM7WUFDcERDLFVBQVUsQ0FBQ0QsT0FBTztRQUNwQixDQUFDO1FBQ0RLLGlCQUFpQixDQUFDLEtBQUs7SUFDekIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLEtBQUssQ0FBQzBCLGNBQWMsYUFBZSxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxDQUFDLENBQUNDLElBQUksR0FBRUMsS0FBSyxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUNyQyxnRUFDckIsQ0FBQyxDQUFVLFdBQ2Z1QyxNQUFNLEdBQ05DLEVBQUUsQ0FBQyxDQUFJLEtBQUVwQyxRQUFPLENBQUNxQyxJQUFJLENBQUNDLEVBQUU7UUFDM0IvQixXQUFXLENBQUN5QixJQUFJO0lBQ2xCLENBQUM7SUFFRCxLQUFLLENBQUNPLFVBQVUsYUFBZSxDQUFDO1FBQzlCLEdBQUcsQ0FBQyxDQUFDLENBQUNQLElBQUksR0FBRUMsS0FBSyxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUNyQyxnRUFDckIsQ0FBQyxDQUFVLFdBQ2Z1QyxNQUFNLENBQUMsQ0FBTSxPQUNiQyxFQUFFLENBQUMsQ0FBSSxLQUFFcEMsUUFBTyxDQUFDcUMsSUFBSSxDQUFDQyxFQUFFO1FBQzNCM0IsY0FBYyxDQUFDLEtBQUs7UUFDcEJGLE9BQU8sQ0FBQ3VCLElBQUksQ0FBQyxDQUFDLEVBQUV4QixJQUFJO0lBQ3RCLENBQUM7SUFFRCxLQUFLLENBQUNnQyxZQUFZLGFBQWUsQ0FBQztRQUNoQyxHQUFHLENBQUMsQ0FBQyxDQUFDUixJQUFJLEdBQUVDLEtBQUssRUFBQyxDQUFDLEdBQUcsS0FBSyxDQUFDckMsZ0VBQWEsQ0FBQyxDQUFRLFNBQUV1QyxNQUFNO1FBQzFEcEIsU0FBUyxDQUFDaUIsSUFBSTtRQUNkZixnQkFBZ0IsQ0FBQyxLQUFLO0lBQ3hCLENBQUM7SUFFRCxLQUFLLENBQUN3QixjQUFjLGFBQWUsQ0FBQztRQUNsQyxHQUFHLENBQUMsQ0FBQyxDQUFDVCxJQUFJLEdBQUVDLEtBQUssRUFBQyxDQUFDLEdBQUcsS0FBSyxDQUFDckMsZ0VBQWEsQ0FBQyxDQUFZLGFBQUV1QyxNQUFNO1FBQzlEaEIsYUFBYSxDQUFDYSxJQUFJO1FBQ2xCWCxvQkFBb0IsQ0FBQyxLQUFLO0lBQzVCLENBQUM7SUFFRCxLQUFLLENBQUNxQixjQUFjLGFBQWUsQ0FBQztRQUNsQyxHQUFHLENBQUMsQ0FBQyxDQUFDVixJQUFJLEdBQUVDLEtBQUssRUFBQyxDQUFDLEdBQUcsS0FBSyxDQUFDckMsZ0VBQWEsQ0FBQyxDQUFVLFdBQUV1QyxNQUFNLENBQUMsQ0FBTTtRQUNuRVosZUFBZSxDQUFDUyxJQUFJO0lBQ3RCLENBQUM7SUFFRCxLQUFLLENBQUNXLGNBQWMsYUFBZSxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxDQUFDLENBQUNYLElBQUksR0FBRUMsS0FBSyxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUNyQyxnRUFBYSxDQUFDLENBQVUsV0FBRXVDLE1BQU0sQ0FBQyxDQUFTO1FBQ3RFUixXQUFXLENBQUNLLElBQUk7SUFDbEIsQ0FBQztJQUVEdkMsZ0RBQVMsS0FBTyxDQUFDO1FBQ2YsRUFBRSxFQUFFTyxRQUFPLElBQUksSUFBSSxFQUFFLENBQUM7WUFDcEIrQixjQUFjO1lBQ2RRLFVBQVU7WUFDVkMsWUFBWTtZQUNaQyxjQUFjO1lBQ2RDLGNBQWM7WUFDZEMsY0FBYztZQUNkeEMsVUFBVSxDQUFDLEtBQUs7UUFDbEIsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDSDtRQUFBQSxRQUFPO0lBQUEsQ0FBQztJQUVaUCxnREFBUyxLQUFPLENBQUM7UUFDZixFQUFFLEVBQUVtQixnQkFBZ0IsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUM5QmdDLE9BQU87UUFDVCxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUNoQztRQUFBQSxnQkFBZ0I7SUFBQSxDQUFDO0lBRXJCLE1BQU0sNkVBQ0hmLFdBQVcsQ0FBQ2dELFFBQVE7UUFDbkJDLEtBQUssRUFBRSxDQUFDO1lBQ045QyxPQUFPLEVBQVBBLFFBQU87WUFDUEUsT0FBTztZQUNQQyxVQUFVO1lBQ1ZGLFVBQVU7WUFDVkcsY0FBYztZQUNkQyxpQkFBaUI7WUFDakJDLFFBQVE7WUFDUkMsV0FBVztZQUNYQyxJQUFJO1lBQ0pDLE9BQU87WUFDUEMsV0FBVztZQUNYQyxjQUFjO1lBQ2RDLGdCQUFnQjtZQUNoQkMsbUJBQW1CO1lBQ25CQyxNQUFNO1lBQ05DLFNBQVM7WUFDVEMsYUFBYTtZQUNiQyxnQkFBZ0I7WUFDaEJDLFVBQVU7WUFDVkMsYUFBYTtZQUNiQyxpQkFBaUI7WUFDakJDLG9CQUFvQjtZQUNwQkMsWUFBWTtZQUNaQyxlQUFlO1lBQ2ZDLGFBQWE7WUFDYkMsZ0JBQWdCO1lBQ2hCQyxRQUFRO1lBQ1JDLFdBQVc7UUFDYixDQUFDO2tCQUVBNUIsUUFBUTs7Ozs7O0FBR2YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvYWNoLW9yZ2FuaXplci8uL2NvbXBvbmVudHMvVXNlckNvbnRleHQuanM/YzczZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwiLi4vdXRpbHMvc3VwYWJhc2VDbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgVXNlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc2Vzc2lvbiwgc2V0U2Vzc2lvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzZXNzaW9uTG9hZGluZywgc2V0U2Vzc2lvbkxvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbmFtZUxvYWRpbmcsIHNldE5hbWVMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbmFtZU1vZGxlTG9hZGluZywgc2V0TmFtZU1vZGxlTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2V2ZW50cywgc2V0RXZlbnRzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtldmVudHNMb2FkaW5nLCBzZXRFdmVudHNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbZmFjaWxpdGllcywgc2V0RmFjaWxpdGllc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZmFjaWxpdGllc0xvYWRpbmcsIHNldEZhY2lsaXRpZXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc3R1ZGVudE5hbWVzLCBzZXRTdHVkZW50TmFtZXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3Nob3dNZXNzYWdpbmcsIHNldFNob3dNZXNzYWdpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXVpZE5hbWUsIHNldFV1aWROYW1lXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTZXNzaW9uKHN1cGFiYXNlLmF1dGguc2Vzc2lvbigpKTtcblxuICAgIHN1cGFiYXNlLmF1dGgub25BdXRoU3RhdGVDaGFuZ2UoKF9ldmVudCwgc2Vzc2lvbikgPT4ge1xuICAgICAgc2V0U2Vzc2lvbihzZXNzaW9uKTtcbiAgICB9KTtcbiAgICBzZXRTZXNzaW9uTG9hZGluZyhmYWxzZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzZWxlY3RVc2VyRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKFwicHJvZmlsZXNcIilcbiAgICAgIC5zZWxlY3QoKVxuICAgICAgLmVxKFwiaWRcIiwgc2Vzc2lvbi51c2VyLmlkKTtcbiAgICBzZXRVc2VyRGF0YShkYXRhKTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgLmZyb20oXCJwcm9maWxlc1wiKVxuICAgICAgLnNlbGVjdChcIm5hbWVcIilcbiAgICAgIC5lcShcImlkXCIsIHNlc3Npb24udXNlci5pZCk7XG4gICAgc2V0TmFtZUxvYWRpbmcoZmFsc2UpO1xuICAgIHNldE5hbWUoZGF0YVswXS5uYW1lKTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RFdmVudHMgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJldmVudHNcIikuc2VsZWN0KCk7XG4gICAgc2V0RXZlbnRzKGRhdGEpO1xuICAgIHNldEV2ZW50c0xvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdExvY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwiZmFjaWxpdGllc1wiKS5zZWxlY3QoKTtcbiAgICBzZXRGYWNpbGl0aWVzKGRhdGEpO1xuICAgIHNldEZhY2lsaXRpZXNMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RTdHVkZW50cyA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcInByb2ZpbGVzXCIpLnNlbGVjdChcIm5hbWVcIik7XG4gICAgc2V0U3R1ZGVudE5hbWVzKGRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdFV1aWROYW1lID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwicHJvZmlsZXNcIikuc2VsZWN0KFwiaWQsbmFtZVwiKTtcbiAgICBzZXRVdWlkTmFtZShkYXRhKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZXNzaW9uICE9IG51bGwpIHtcbiAgICAgIHNlbGVjdFVzZXJEYXRhKCk7XG4gICAgICBzZWxlY3RVc2VyKCk7XG4gICAgICBzZWxlY3RFdmVudHMoKTtcbiAgICAgIHNlbGVjdExvY2F0aW9uKCk7XG4gICAgICBzZWxlY3RTdHVkZW50cygpO1xuICAgICAgc2VsZWN0VXVpZE5hbWUoKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfSwgW3Nlc3Npb25dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChuYW1lTW9kbGVMb2FkaW5nID09IGZhbHNlKSB7XG4gICAgICBuZXdVc2VyKCk7XG4gICAgfVxuICB9LCBbbmFtZU1vZGxlTG9hZGluZ10pO1xuXG4gIHJldHVybiAoXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBzZXNzaW9uLFxuICAgICAgICBsb2FkaW5nLFxuICAgICAgICBzZXRMb2FkaW5nLFxuICAgICAgICBzZXRTZXNzaW9uLFxuICAgICAgICBzZXNzaW9uTG9hZGluZyxcbiAgICAgICAgc2V0U2Vzc2lvbkxvYWRpbmcsXG4gICAgICAgIHVzZXJEYXRhLFxuICAgICAgICBzZXRVc2VyRGF0YSxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc2V0TmFtZSxcbiAgICAgICAgbmFtZUxvYWRpbmcsXG4gICAgICAgIHNldE5hbWVMb2FkaW5nLFxuICAgICAgICBuYW1lTW9kbGVMb2FkaW5nLFxuICAgICAgICBzZXROYW1lTW9kbGVMb2FkaW5nLFxuICAgICAgICBldmVudHMsXG4gICAgICAgIHNldEV2ZW50cyxcbiAgICAgICAgZXZlbnRzTG9hZGluZyxcbiAgICAgICAgc2V0RXZlbnRzTG9hZGluZyxcbiAgICAgICAgZmFjaWxpdGllcyxcbiAgICAgICAgc2V0RmFjaWxpdGllcyxcbiAgICAgICAgZmFjaWxpdGllc0xvYWRpbmcsXG4gICAgICAgIHNldEZhY2lsaXRpZXNMb2FkaW5nLFxuICAgICAgICBzdHVkZW50TmFtZXMsXG4gICAgICAgIHNldFN0dWRlbnROYW1lcyxcbiAgICAgICAgc2hvd01lc3NhZ2luZyxcbiAgICAgICAgc2V0U2hvd01lc3NhZ2luZyxcbiAgICAgICAgdXVpZE5hbWUsXG4gICAgICAgIHNldFV1aWROYW1lLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJzdXBhYmFzZSIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXNzaW9uIiwic2V0U2Vzc2lvbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2Vzc2lvbkxvYWRpbmciLCJzZXRTZXNzaW9uTG9hZGluZyIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJuYW1lIiwic2V0TmFtZSIsIm5hbWVMb2FkaW5nIiwic2V0TmFtZUxvYWRpbmciLCJuYW1lTW9kbGVMb2FkaW5nIiwic2V0TmFtZU1vZGxlTG9hZGluZyIsImV2ZW50cyIsInNldEV2ZW50cyIsImV2ZW50c0xvYWRpbmciLCJzZXRFdmVudHNMb2FkaW5nIiwiZmFjaWxpdGllcyIsInNldEZhY2lsaXRpZXMiLCJmYWNpbGl0aWVzTG9hZGluZyIsInNldEZhY2lsaXRpZXNMb2FkaW5nIiwic3R1ZGVudE5hbWVzIiwic2V0U3R1ZGVudE5hbWVzIiwic2hvd01lc3NhZ2luZyIsInNldFNob3dNZXNzYWdpbmciLCJ1dWlkTmFtZSIsInNldFV1aWROYW1lIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlIiwiX2V2ZW50Iiwic2VsZWN0VXNlckRhdGEiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJ1c2VyIiwiaWQiLCJzZWxlY3RVc2VyIiwic2VsZWN0RXZlbnRzIiwic2VsZWN0TG9jYXRpb24iLCJzZWxlY3RTdHVkZW50cyIsInNlbGVjdFV1aWROYW1lIiwibmV3VXNlciIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UserContext.js\n");

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