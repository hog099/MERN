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
                children: item.completed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["CheckOutlined"], {
                  style: {
                    color: 'green'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 23
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["FileDoneOutlined"], {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC50c3giXSwibmFtZXMiOlsiSG9tZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJpc21vdW50ZWQiLCJzZXRpc21vdW50ZWQiLCJkYXRhbGlzdCIsInNldGRhdGFsaXN0IiwidXNlRWZmZWN0IiwibG9hZGRhdGEiLCJhcGkiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJidXR0b25saW5rIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaXRlbWxpc3QiLCJpdGVtbGlzdGNvbnRlbnRsZWZ0IiwiaXRlbWxpc3Rjb250ZW50cmlnaHQiLCJfaWQiLCJjb21wbGV0ZWQiLCJjb2xvciIsImNvbG9ycmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBOztBQUVBLElBQU1BLElBQWMsR0FBRyxTQUFqQkEsSUFBaUIsR0FBTTtBQUFBOztBQUFBLHdCQUVPQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUZQO0FBQUE7QUFBQSxNQUVwQkMsU0FGb0I7QUFBQSxNQUVUQyxZQUZTOztBQUFBLHlCQUdLSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQUhMO0FBQUE7QUFBQSxNQUdwQkcsUUFIb0I7QUFBQSxNQUdWQyxXQUhVOztBQU0zQkwsOENBQUssQ0FBQ00sU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQUksQ0FBQ0osU0FBTCxFQUFnQjtBQUNkSyxjQUFRO0FBQ1JKLGtCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Q7QUFDRixHQUxELEVBS0csQ0FBQ0QsU0FBRCxDQUxIOztBQVFBLE1BQU1LLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJDLDJEQUFHLENBQUND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QUFvQkQsU0FyQlk7QUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4Q0QsQ0F0RkQ7O0dBQU0xQixJOztLQUFBQSxJO0FBd0ZTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZDZkNjViMTg1N2ZlMTYwODNkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vc2VydmljZXMvYXhpb3MnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgeyBDaGVja091dGxpbmVkLCBEZWxldGVPdXRsaW5lZCwgRmlsZURvbmVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xyXG5cclxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtpc21vdW50ZWQsIHNldGlzbW91bnRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2RhdGFsaXN0LCBzZXRkYXRhbGlzdF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzbW91bnRlZCkge1xyXG4gICAgICBsb2FkZGF0YSgpO1xyXG4gICAgICBzZXRpc21vdW50ZWQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW2lzbW91bnRlZF0pXHJcblxyXG5cclxuICBjb25zdCBsb2FkZGF0YSA9ICgpID0+IHtcclxuICAgIGFwaS5nZXQoJy9hcGkvdjEvdGFza3MnKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzcG9uc2UgZ2V0IGVtcHJlc2FzJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgc2V0ZGF0YWxpc3QocmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciEnLCBlcnJvcilcclxuICAgICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkKSA9PiB7XHJcbiAgICBhcGkuZGVsZXRlKGAvYXBpL3YxL3Rhc2tzLyR7aWR9YClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc3BvbnNlIGdldCBlbXByZXNhcycsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIGxvYWRkYXRhKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IhJywgZXJyb3IpXHJcbiAgICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk1FUk4gfCBOZXh0SlM8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Ib21lIENsaWVudDwvaDU+XHJcblxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcGFnZTAyXCI+XHJcbiAgICAgICAgICA8YSByZWw9XCJub3JlZmVycmVyXCIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ubGlua30+XHJcbiAgICAgICAgICAgIDxwPlDDoWdpbmEgMDI8L3A+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgIHtkYXRhbGlzdCAmJiBkYXRhbGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5pdGVtbGlzdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW1saXN0Y29udGVudGxlZnR9PlxyXG4gICAgICAgICAgICAgICAgICA8cD57aXRlbS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbWxpc3Rjb250ZW50cmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShpdGVtLl9pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvbXBsZXRlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiAnZ3JlZW4nfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgIDxGaWxlRG9uZU91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoaXRlbS5faWQpfSBjbGFzc05hbWU9e3N0eWxlcy5jb2xvcnJlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERlbGV0ZU91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9