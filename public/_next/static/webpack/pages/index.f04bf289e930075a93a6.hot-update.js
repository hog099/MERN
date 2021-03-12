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
/* harmony import */ var D_code_hog_mern_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/axios */ "./services/axios.ts");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/pages/Home.module.css */ "./styles/pages/Home.module.css");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "D:\\code\\hog\\mern\\client\\pages\\home\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var Home = function Home() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(D_code_hog_mern_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      ismounted = _React$useState2[0],
      setismounted = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState4 = Object(D_code_hog_mern_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
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
      setdatalist(response.data);
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
        lineNumber: 39,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
        className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.title,
        children: "Home Client"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
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
            lineNumber: 48,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.itemlist,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.itemlistcontentleft,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "SADASDSA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.itemlistcontentright,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              children: "bbb"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this), datalist && datalist.map(function (item, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: item.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 17
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 15
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC50c3giXSwibmFtZXMiOlsiSG9tZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJpc21vdW50ZWQiLCJzZXRpc21vdW50ZWQiLCJkYXRhbGlzdCIsInNldGRhdGFsaXN0IiwidXNlRWZmZWN0IiwibG9hZGRhdGEiLCJhcGkiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwiYnV0dG9ubGluayIsIml0ZW1saXN0IiwiaXRlbWxpc3Rjb250ZW50bGVmdCIsIml0ZW1saXN0Y29udGVudHJpZ2h0IiwibWFwIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLElBQWMsR0FBRyxTQUFqQkEsSUFBaUIsR0FBTTtBQUFBOztBQUFBLHdCQUVPQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUZQO0FBQUE7QUFBQSxNQUVwQkMsU0FGb0I7QUFBQSxNQUVUQyxZQUZTOztBQUFBLHlCQUdLSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQUhMO0FBQUE7QUFBQSxNQUdwQkcsUUFIb0I7QUFBQSxNQUdWQyxXQUhVOztBQU0zQkwsOENBQUssQ0FBQ00sU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQUksQ0FBQ0osU0FBTCxFQUFnQjtBQUNkSyxjQUFRO0FBQ1JKLGtCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Q7QUFDRixHQUxELEVBS0csQ0FBQ0QsU0FBRCxDQUxIOztBQVFBLE1BQU1LLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJDLDJEQUFHLENBQUNDLEdBQUosQ0FBUSxlQUFSLEVBQ0dDLElBREgsQ0FDUSxVQUFDQyxRQUFELEVBQWM7QUFDbEI7QUFDQU4saUJBQVcsQ0FBQ00sUUFBUSxDQUFDQyxJQUFWLENBQVg7QUFDRCxLQUpILFdBS1MsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCRixLQUF0QjtBQUNELEtBUEg7QUFTRCxHQVZEOztBQWNBLHNCQUNFO0FBQUssYUFBUyxFQUFFRyxvRUFBTSxDQUFDQyxTQUF2QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU1FO0FBQU0sZUFBUyxFQUFFRCxvRUFBTSxDQUFDRSxJQUF4QjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBRUYsb0VBQU0sQ0FBQ0csS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUdFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFNBQVg7QUFBQSwrQkFDRTtBQUFHLGFBQUcsRUFBQyxZQUFQO0FBQW9CLG1CQUFTLEVBQUVILG9FQUFNLENBQUNJLFVBQXRDO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBU0U7QUFBQSxnQ0FFRTtBQUFLLG1CQUFTLEVBQUVKLG9FQUFNLENBQUNLLFFBQXZCO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFFTCxvRUFBTSxDQUFDTSxtQkFBdkI7QUFBQSxtQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFLLHFCQUFTLEVBQUVOLG9FQUFNLENBQUNPLG9CQUF2QjtBQUFBLG1DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsRUFhR25CLFFBQVEsSUFBSUEsUUFBUSxDQUFDb0IsR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN6Qyw4QkFDRTtBQUFBLG1DQUNFO0FBQUEsd0JBQUlELElBQUksQ0FBQ047QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBVU8sS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBTUQsU0FQWSxDQWJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkNELENBdkVEOztHQUFNM0IsSTs7S0FBQUEsSTtBQXlFU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjA0YmYyODllOTMwMDc1YTkzYTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL3NlcnZpY2VzL2F4aW9zJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvcGFnZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtpc21vdW50ZWQsIHNldGlzbW91bnRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2RhdGFsaXN0LCBzZXRkYXRhbGlzdF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzbW91bnRlZCkge1xyXG4gICAgICBsb2FkZGF0YSgpO1xyXG4gICAgICBzZXRpc21vdW50ZWQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW2lzbW91bnRlZF0pXHJcblxyXG5cclxuICBjb25zdCBsb2FkZGF0YSA9ICgpID0+IHtcclxuICAgIGFwaS5nZXQoJy9hcGkvdjEvdGFza3MnKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzcG9uc2UgZ2V0IGVtcHJlc2FzJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgc2V0ZGF0YWxpc3QocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IhJywgZXJyb3IpXHJcbiAgICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk1FUk4gfCBOZXh0SlM8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Ib21lIENsaWVudDwvaDU+XHJcblxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcGFnZTAyXCI+XHJcbiAgICAgICAgICA8YSByZWw9XCJub3JlZmVycmVyXCIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ubGlua30+XHJcbiAgICAgICAgICAgIDxwPlDDoWdpbmEgMDI8L3A+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbWxpc3R9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW1saXN0Y29udGVudGxlZnR9PlxyXG4gICAgICAgICAgICAgIDxwPlNBREFTRFNBPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtbGlzdGNvbnRlbnRyaWdodH0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbj5iYmI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgIHtkYXRhbGlzdCAmJiBkYXRhbGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxwPntpdGVtLnRpdGxlfTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=