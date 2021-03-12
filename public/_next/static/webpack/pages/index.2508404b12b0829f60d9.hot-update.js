webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/home/index.tsx":
/*!******************************!*\
  !*** ./pages/home/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_code_hog_mern_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/axios */ "./services/axios.ts");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/pages/Home.module.css */ "./styles/pages/Home.module.css");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");



var _jsxFileName = "D:\\code\\hog\\mern\\client\\pages\\home\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var Home = function Home() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(D_code_hog_mern_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      ismounted = _React$useState2[0],
      setismounted = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState4 = Object(D_code_hog_mern_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      datalist = _React$useState4[0],
      setdatalist = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (!ismounted) {
      loaddata();
      setismounted(true);
    }
  }, [ismounted]);

  var loaddata = function loaddata() {
    _services_axios__WEBPACK_IMPORTED_MODULE_5__["default"].get('/api/v1/tasks').then(function (response) {
      // console.log('response get empresas', response.data);
      setdatalist(response.data.data);
    })["catch"](function (error) {
      console.log('Error!', error);
    });
  };

  var handleDelete = function handleDelete(id) {
    _services_axios__WEBPACK_IMPORTED_MODULE_5__["default"]["delete"]("/api/v1/tasks/".concat(id)).then(function (response) {
      // console.log('response get empresas', response.data);
      loaddata();
    })["catch"](function (error) {
      console.log('Error!', error);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "MERN | NextJS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
        className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.title,
        children: "Home Client"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/page02",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          rel: "noreferrer",
          className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.buttonlink,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "P\xE1gina 02"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: datalist && datalist.map(function (item, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.itemlist,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.itemlistcontentleft,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: item.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.itemlistcontentright,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: function onClick() {
                  return handleDelete(item._id);
                },
                children: item.completed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["CheckOutlined"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 23
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["CheckOutlined"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: function onClick() {
                  return handleDelete(item._id);
                },
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.colorred,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["DeleteOutlined"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 17
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, _this);
};

_s(Home, "CHwePYwNSPQApED5z+7UWn2jvOc=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC50c3giXSwibmFtZXMiOlsiSG9tZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJpc21vdW50ZWQiLCJzZXRpc21vdW50ZWQiLCJkYXRhbGlzdCIsInNldGRhdGFsaXN0IiwidXNlRWZmZWN0IiwibG9hZGRhdGEiLCJhcGkiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJidXR0b25saW5rIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaXRlbWxpc3QiLCJpdGVtbGlzdGNvbnRlbnRsZWZ0IiwiaXRlbWxpc3Rjb250ZW50cmlnaHQiLCJfaWQiLCJjb21wbGV0ZWQiLCJjb2xvcnJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxJQUFjLEdBQUcsU0FBakJBLElBQWlCLEdBQU07QUFBQTs7QUFBQSx3QkFFT0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FGUDtBQUFBO0FBQUEsTUFFcEJDLFNBRm9CO0FBQUEsTUFFVEMsWUFGUzs7QUFBQSx5QkFHS0gsNENBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FITDtBQUFBO0FBQUEsTUFHcEJHLFFBSG9CO0FBQUEsTUFHVkMsV0FIVTs7QUFNM0JMLDhDQUFLLENBQUNNLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQixRQUFJLENBQUNKLFNBQUwsRUFBZ0I7QUFDZEssY0FBUTtBQUNSSixrQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNEO0FBQ0YsR0FMRCxFQUtHLENBQUNELFNBQUQsQ0FMSDs7QUFRQSxNQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCQywyREFBRyxDQUFDQyxHQUFKLENB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QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThDRCxDQXRGRDs7R0FBTTFCLEk7O0tBQUFBLEk7QUF3RlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI1MDg0MDRiMTJiMDgyOWY2MGQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9heGlvcydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCB7IENoZWNrT3V0bGluZWQsIERlbGV0ZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcblxyXG5jb25zdCBIb21lOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW2lzbW91bnRlZCwgc2V0aXNtb3VudGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGF0YWxpc3QsIHNldGRhdGFsaXN0XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNtb3VudGVkKSB7XHJcbiAgICAgIGxvYWRkYXRhKCk7XHJcbiAgICAgIHNldGlzbW91bnRlZCh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbaXNtb3VudGVkXSlcclxuXHJcblxyXG4gIGNvbnN0IGxvYWRkYXRhID0gKCkgPT4ge1xyXG4gICAgYXBpLmdldCgnL2FwaS92MS90YXNrcycpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNwb25zZSBnZXQgZW1wcmVzYXMnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBzZXRkYXRhbGlzdChyZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIScsIGVycm9yKVxyXG4gICAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaWQpID0+IHtcclxuICAgIGFwaS5kZWxldGUoYC9hcGkvdjEvdGFza3MvJHtpZH1gKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzcG9uc2UgZ2V0IGVtcHJlc2FzJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgbG9hZGRhdGEoKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciEnLCBlcnJvcilcclxuICAgICAgfSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TUVSTiB8IE5leHRKUzwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8aDUgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkhvbWUgQ2xpZW50PC9oNT5cclxuXHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdlMDJcIj5cclxuICAgICAgICAgIDxhIHJlbD1cIm5vcmVmZXJyZXJcIiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25saW5rfT5cclxuICAgICAgICAgICAgPHA+UMOhZ2luYSAwMjwvcD5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAge2RhdGFsaXN0ICYmIGRhdGFsaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLml0ZW1saXN0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbWxpc3Rjb250ZW50bGVmdH0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntpdGVtLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtbGlzdGNvbnRlbnRyaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGl0ZW0uX2lkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uY29tcGxldGVkID9cclxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGl0ZW0uX2lkKX0gY2xhc3NOYW1lPXtzdHlsZXMuY29sb3JyZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEZWxldGVPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==