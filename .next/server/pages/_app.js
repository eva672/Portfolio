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

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction Layout({ children }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-white\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/eva/Portfolio/components/Layout.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRWUsU0FBU0EsT0FBTyxFQUFFQyxRQUFRLEVBQUU7SUFDekMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1pGOzs7Ozs7QUFHUCIsInNvdXJjZXMiOlsid2VicGFjazovL2V2YS1tYW51c2thLXBvcnRmb2xpby8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzUxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctd2hpdGVcIj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./context/SectionContext.js":
/*!***********************************!*\
  !*** ./context/SectionContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SectionProvider: () => (/* binding */ SectionProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   useSection: () => (/* binding */ useSection)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ SectionProvider,useSection,default auto */ \n\nconst SectionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst SectionProvider = ({ children })=>{\n    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"home\");\n    const observerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) return;\n        const handleIntersection = (entries)=>{\n            entries.forEach((entry)=>{\n                if (entry.isIntersecting) {\n                    setActiveSection(entry.target.id);\n                }\n            });\n        };\n        // Initialize observer with updated options\n        observerRef.current = new IntersectionObserver(handleIntersection, {\n            root: null,\n            rootMargin: \"0px\",\n            threshold: 0.5\n        });\n        // Observe all sections with IDs\n        const sections = document.querySelectorAll(\"section[id]\");\n        sections.forEach((section)=>{\n            if (section.id) {\n                observerRef.current?.observe(section);\n            }\n        });\n        // Cleanup function\n        return ()=>{\n            if (observerRef.current) {\n                observerRef.current.disconnect();\n            }\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SectionContext.Provider, {\n        value: {\n            activeSection\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/eva/Portfolio/context/SectionContext.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\nconst useSection = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SectionContext);\n    if (!context) {\n        throw new Error(\"useSection must be used within a SectionProvider\");\n    }\n    return context;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1NlY3Rpb25Db250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQytFO0FBRS9FLE1BQU1LLCtCQUFpQkwsb0RBQWFBO0FBRTdCLE1BQU1NLGtCQUFrQixDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUMxQyxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNUSxjQUFjTiw2Q0FBTUEsQ0FBQztJQUUzQkQsZ0RBQVNBLENBQUM7UUFDUixJQUFJLElBQWtCLEVBQWE7UUFFbkMsTUFBTVEscUJBQXFCLENBQUNDO1lBQzFCQSxRQUFRQyxPQUFPLENBQUNDLENBQUFBO2dCQUNkLElBQUlBLE1BQU1DLGNBQWMsRUFBRTtvQkFDeEJOLGlCQUFpQkssTUFBTUUsTUFBTSxDQUFDQyxFQUFFO2dCQUNsQztZQUNGO1FBQ0Y7UUFFQSwyQ0FBMkM7UUFDM0NQLFlBQVlRLE9BQU8sR0FBRyxJQUFJQyxxQkFBcUJSLG9CQUFvQjtZQUNqRVMsTUFBTTtZQUNOQyxZQUFZO1lBQ1pDLFdBQVc7UUFDYjtRQUVBLGdDQUFnQztRQUNoQyxNQUFNQyxXQUFXQyxTQUFTQyxnQkFBZ0IsQ0FBQztRQUMzQ0YsU0FBU1YsT0FBTyxDQUFDYSxDQUFBQTtZQUNmLElBQUlBLFFBQVFULEVBQUUsRUFBRTtnQkFDZFAsWUFBWVEsT0FBTyxFQUFFUyxRQUFRRDtZQUMvQjtRQUNGO1FBRUEsbUJBQW1CO1FBQ25CLE9BQU87WUFDTCxJQUFJaEIsWUFBWVEsT0FBTyxFQUFFO2dCQUN2QlIsWUFBWVEsT0FBTyxDQUFDVSxVQUFVO1lBQ2hDO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ3ZCLGVBQWV3QixRQUFRO1FBQUNDLE9BQU87WUFBRXRCO1FBQWM7a0JBQzdDRDs7Ozs7O0FBR1AsRUFBRTtBQUVLLE1BQU13QixhQUFhO0lBQ3hCLE1BQU1DLFVBQVUvQixpREFBVUEsQ0FBQ0k7SUFDM0IsSUFBSSxDQUFDMkIsU0FBUztRQUNaLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE9BQU9EO0FBQ1QsRUFBRTtBQUVGLGlFQUFlM0IsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V2YS1tYW51c2thLXBvcnRmb2xpby8uL2NvbnRleHQvU2VjdGlvbkNvbnRleHQuanM/ZjI3OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNlY3Rpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvblByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbYWN0aXZlU2VjdGlvbiwgc2V0QWN0aXZlU2VjdGlvbl0gPSB1c2VTdGF0ZSgnaG9tZScpO1xuICBjb25zdCBvYnNlcnZlclJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuXG4gICAgY29uc3QgaGFuZGxlSW50ZXJzZWN0aW9uID0gKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIHNldEFjdGl2ZVNlY3Rpb24oZW50cnkudGFyZ2V0LmlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIEluaXRpYWxpemUgb2JzZXJ2ZXIgd2l0aCB1cGRhdGVkIG9wdGlvbnNcbiAgICBvYnNlcnZlclJlZi5jdXJyZW50ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZUludGVyc2VjdGlvbiwge1xuICAgICAgcm9vdDogbnVsbCxcbiAgICAgIHJvb3RNYXJnaW46ICcwcHgnLFxuICAgICAgdGhyZXNob2xkOiAwLjVcbiAgICB9KTtcblxuICAgIC8vIE9ic2VydmUgYWxsIHNlY3Rpb25zIHdpdGggSURzXG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uW2lkXScpO1xuICAgIHNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgICBpZiAoc2VjdGlvbi5pZCkge1xuICAgICAgICBvYnNlcnZlclJlZi5jdXJyZW50Py5vYnNlcnZlKHNlY3Rpb24pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ2xlYW51cCBmdW5jdGlvblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAob2JzZXJ2ZXJSZWYuY3VycmVudCkge1xuICAgICAgICBvYnNlcnZlclJlZi5jdXJyZW50LmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgYWN0aXZlU2VjdGlvbiB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1NlY3Rpb25Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFNlY3Rpb25Db250ZXh0KTtcbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VTZWN0aW9uIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBTZWN0aW9uUHJvdmlkZXInKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25Db250ZXh0O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJTZWN0aW9uQ29udGV4dCIsIlNlY3Rpb25Qcm92aWRlciIsImNoaWxkcmVuIiwiYWN0aXZlU2VjdGlvbiIsInNldEFjdGl2ZVNlY3Rpb24iLCJvYnNlcnZlclJlZiIsImhhbmRsZUludGVyc2VjdGlvbiIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInRhcmdldCIsImlkIiwiY3VycmVudCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJzZWN0aW9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNlY3Rpb24iLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VTZWN0aW9uIiwiY29udGV4dCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/SectionContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_SectionContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/SectionContext */ \"./context/SectionContext.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_SectionContext__WEBPACK_IMPORTED_MODULE_1__.SectionProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/eva/Portfolio/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/eva/Portfolio/pages/_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/eva/Portfolio/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTREO0FBQ2xCO0FBQ1g7QUFFL0IsU0FBU0UsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ0osb0VBQWVBO2tCQUNkLDRFQUFDQywwREFBTUE7c0JBQ0wsNEVBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V2YS1tYW51c2thLXBvcnRmb2xpby8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWN0aW9uUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L1NlY3Rpb25Db250ZXh0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvblByb3ZpZGVyPlxuICAgICAgPExheW91dD5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9TZWN0aW9uUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJTZWN0aW9uUHJvdmlkZXIiLCJMYXlvdXQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



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