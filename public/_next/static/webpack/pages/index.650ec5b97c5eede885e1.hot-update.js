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
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
        className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.title,
        children: "Home Client"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
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
            lineNumber: 60,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
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
                lineNumber: 70,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.itemlistcontentright,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: function onClick() {
                  return handleDelete(item.id);
                },
                children: "excluir"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 17
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC50c3giXSwibmFtZXMiOlsiSG9tZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJpc21vdW50ZWQiLCJzZXRpc21vdW50ZWQiLCJkYXRhbGlzdCIsInNldGRhdGFsaXN0IiwidXNlRWZmZWN0IiwibG9hZGRhdGEiLCJhcGkiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJidXR0b25saW5rIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaXRlbWxpc3QiLCJpdGVtbGlzdGNvbnRlbnRsZWZ0IiwiaXRlbWxpc3Rjb250ZW50cmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixHQUFNO0FBQUE7O0FBQUEsd0JBRU9DLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRlA7QUFBQTtBQUFBLE1BRXBCQyxTQUZvQjtBQUFBLE1BRVRDLFlBRlM7O0FBQUEseUJBR0tILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBSEw7QUFBQTtBQUFBLE1BR3BCRyxRQUhvQjtBQUFBLE1BR1ZDLFdBSFU7O0FBTTNCTCw4Q0FBSyxDQUFDTSxTQUFOLENBQWdCLFlBQU07QUFDcEIsUUFBSSxDQUFDSixTQUFMLEVBQWdCO0FBQ2RLLGNBQVE7QUFDUkosa0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRDtBQUNGLEdBTEQsRUFLRyxDQUFDRCxTQUFELENBTEg7O0FBUUEsTUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQkMsMkRBQUcsQ0FBQ0MsR0FBSixDQUFRLGVBQVIsRUFDR0MsSUFESCxDQUNRLFVBQUNDLFFBQUQsRUFBYztBQUNsQjtBQUNBTixpQkFBVyxDQUFDTSxRQUFRLENBQUNDLElBQVYsQ0FBWDtBQUNELEtBSkgsV0FLUyxVQUFDQyxLQUFELEVBQVc7QUFDaEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JGLEtBQXRCO0FBQ0QsS0FQSDtBQVNELEdBVkQ7O0FBWUEsTUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsRUFBRCxFQUFRO0FBQzNCVCwyREFBRyxVQUFILHlCQUE0QlMsRUFBNUIsR0FDR1AsSUFESCxDQUNRLFVBQUNDLFFBQUQsRUFBYztBQUNsQjtBQUNBSixjQUFRO0FBQ1QsS0FKSCxXQUtTLFVBQUNNLEtBQUQsRUFBVztBQUNoQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkYsS0FBdEI7QUFDRCxLQVBIO0FBU0QsR0FWRDs7QUFjQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUssb0VBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFNRTtBQUFNLGVBQVMsRUFBRUQsb0VBQU0sQ0FBQ0UsSUFBeEI7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUVGLG9FQUFNLENBQUNHLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFHRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxTQUFYO0FBQUEsK0JBQ0U7QUFBRyxhQUFHLEVBQUMsWUFBUDtBQUFvQixtQkFBUyxFQUFFSCxvRUFBTSxDQUFDSSxVQUF0QztBQUFBLGlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQVNFO0FBQUEsa0JBRUdsQixRQUFRLElBQUlBLFFBQVEsQ0FBQ21CLEdBQVQsQ0FBYSxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDekMsOEJBQ0U7QUFBaUIscUJBQVMsRUFBRVAsb0VBQU0sQ0FBQ1EsUUFBbkM7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUVSLG9FQUFNLENBQUNTLG1CQUF2QjtBQUFBLHFDQUNFO0FBQUEsMEJBQUlILElBQUksQ0FBQ0g7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFO0FBQUssdUJBQVMsRUFBRUgsb0VBQU0sQ0FBQ1Usb0JBQXZCO0FBQUEscUNBQ0U7QUFBUSx1QkFBTyxFQUFFO0FBQUEseUJBQU1aLFlBQVksQ0FBQ1EsSUFBSSxDQUFDUCxFQUFOLENBQWxCO0FBQUEsaUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBLGFBQVVRLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQVdELFNBWlk7QUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQ0QsQ0E3RUQ7O0dBQU0xQixJOztLQUFBQSxJO0FBK0VTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NTBlYzViOTdjNWVlZGU4ODVlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vc2VydmljZXMvYXhpb3MnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBIb21lOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW2lzbW91bnRlZCwgc2V0aXNtb3VudGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGF0YWxpc3QsIHNldGRhdGFsaXN0XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNtb3VudGVkKSB7XHJcbiAgICAgIGxvYWRkYXRhKCk7XHJcbiAgICAgIHNldGlzbW91bnRlZCh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbaXNtb3VudGVkXSlcclxuXHJcblxyXG4gIGNvbnN0IGxvYWRkYXRhID0gKCkgPT4ge1xyXG4gICAgYXBpLmdldCgnL2FwaS92MS90YXNrcycpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNwb25zZSBnZXQgZW1wcmVzYXMnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBzZXRkYXRhbGlzdChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciEnLCBlcnJvcilcclxuICAgICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkKSA9PiB7XHJcbiAgICBhcGkuZGVsZXRlKGAvYXBpL3YxL3Rhc2tzLyR7aWR9YClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc3BvbnNlIGdldCBlbXByZXNhcycsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIGxvYWRkYXRhKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IhJywgZXJyb3IpXHJcbiAgICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk1FUk4gfCBOZXh0SlM8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Ib21lIENsaWVudDwvaDU+XHJcblxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcGFnZTAyXCI+XHJcbiAgICAgICAgICA8YSByZWw9XCJub3JlZmVycmVyXCIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ubGlua30+XHJcbiAgICAgICAgICAgIDxwPlDDoWdpbmEgMDI8L3A+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgIHtkYXRhbGlzdCAmJiBkYXRhbGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5pdGVtbGlzdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW1saXN0Y29udGVudGxlZnR9PlxyXG4gICAgICAgICAgICAgICAgICA8cD57aXRlbS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbWxpc3Rjb250ZW50cmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShpdGVtLmlkKX0+ZXhjbHVpcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9