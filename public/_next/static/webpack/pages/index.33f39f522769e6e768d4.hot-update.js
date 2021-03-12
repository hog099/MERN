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
      var datares = response.data.data;
      setdatalist(datares.sort(function (i) {
        return !i.completed;
      }));
    })["catch"](function (error) {
      console.log('Error!', error);
    });
  };

  var handleFinish = function handleFinish(item) {
    _services_axios__WEBPACK_IMPORTED_MODULE_5__["default"].put("/api/v1/tasks/".concat(item._id), {
      completed: !item.completed
    }).then(function (response) {
      // console.log('response get empresas', response.data);
      loaddata();
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
        lineNumber: 67,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
        className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.title,
        children: "Home Client"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
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
            lineNumber: 76,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
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
                lineNumber: 86,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.itemlistcontentright,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: function onClick() {
                  return handleFinish(item);
                },
                children: item.completed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["CheckOutlined"], {
                  style: {
                    color: '#73d573'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 23
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["FileDoneOutlined"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: function onClick() {
                  return handleDelete(item._id);
                },
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.colorred,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["DeleteOutlined"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 17
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC50c3giXSwibmFtZXMiOlsiSG9tZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJpc21vdW50ZWQiLCJzZXRpc21vdW50ZWQiLCJkYXRhbGlzdCIsInNldGRhdGFsaXN0IiwidXNlRWZmZWN0IiwibG9hZGRhdGEiLCJhcGkiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhcmVzIiwiZGF0YSIsInNvcnQiLCJpIiwiY29tcGxldGVkIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRmluaXNoIiwiaXRlbSIsInB1dCIsIl9pZCIsImhhbmRsZURlbGV0ZSIsImlkIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwiYnV0dG9ubGluayIsIm1hcCIsImluZGV4IiwiaXRlbWxpc3QiLCJpdGVtbGlzdGNvbnRlbnRsZWZ0IiwiaXRlbWxpc3Rjb250ZW50cmlnaHQiLCJjb2xvciIsImNvbG9ycmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBOztBQUdBLElBQU1BLElBQWMsR0FBRyxTQUFqQkEsSUFBaUIsR0FBTTtBQUFBOztBQUFBLHdCQUVPQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUZQO0FBQUE7QUFBQSxNQUVwQkMsU0FGb0I7QUFBQSxNQUVUQyxZQUZTOztBQUFBLHlCQUdLSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQUhMO0FBQUE7QUFBQSxNQUdwQkcsUUFIb0I7QUFBQSxNQUdWQyxXQUhVOztBQU0zQkwsOENBQUssQ0FBQ00sU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQUksQ0FBQ0osU0FBTCxFQUFnQjtBQUNkSyxjQUFRO0FBQ1JKLGtCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Q7QUFDRixHQUxELEVBS0csQ0FBQ0QsU0FBRCxDQUxIOztBQVFBLE1BQU1LLFFB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LENBQUNMLFNBQUwsZ0JBQ0MscUVBQUMsK0RBQUQ7QUFBZSx1QkFBSyxFQUFFO0FBQUNvQix5QkFBSyxFQUFFO0FBQVI7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERCxnQkFHQyxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQVFFO0FBQVEsdUJBQU8sRUFBRTtBQUFBLHlCQUFNWixZQUFZLENBQUNILElBQUksQ0FBQ0UsR0FBTixDQUFsQjtBQUFBLGlCQUFqQjtBQUErQyx5QkFBUyxFQUFFRyxvRUFBTSxDQUFDVyxRQUFqRTtBQUFBLHVDQUNFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBLGFBQVVMLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQW9CRCxTQXJCWTtBQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThDRCxDQWxHRDs7R0FBTWpDLEk7O0tBQUFBLEk7QUFvR1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMzZjM5ZjUyMjc2OWU2ZTc2OGQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9heGlvcydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCB7IENoZWNrT3V0bGluZWQsIERlbGV0ZU91dGxpbmVkLCBGaWxlRG9uZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcbmltcG9ydCBJdGVtIGZyb20gJ2FudGQvbGliL2xpc3QvSXRlbSc7XHJcblxyXG5jb25zdCBIb21lOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW2lzbW91bnRlZCwgc2V0aXNtb3VudGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGF0YWxpc3QsIHNldGRhdGFsaXN0XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNtb3VudGVkKSB7XHJcbiAgICAgIGxvYWRkYXRhKCk7XHJcbiAgICAgIHNldGlzbW91bnRlZCh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbaXNtb3VudGVkXSlcclxuXHJcblxyXG4gIGNvbnN0IGxvYWRkYXRhID0gKCkgPT4ge1xyXG4gICAgYXBpLmdldCgnL2FwaS92MS90YXNrcycpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNwb25zZSBnZXQgZW1wcmVzYXMnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBsZXQgZGF0YXJlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YVxyXG4gICAgICAgIHNldGRhdGFsaXN0KGRhdGFyZXMuc29ydChpPT4haS5jb21wbGV0ZWQpKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciEnLCBlcnJvcilcclxuICAgICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRmluaXNoID0gKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgYXBpLnB1dChgL2FwaS92MS90YXNrcy8ke2l0ZW0uX2lkfWAsIHtjb21wbGV0ZWQ6ICFpdGVtLmNvbXBsZXRlZH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNwb25zZSBnZXQgZW1wcmVzYXMnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBsb2FkZGF0YSgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIScsIGVycm9yKVxyXG4gICAgICB9KTtcclxuXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpZCkgPT4ge1xyXG4gICAgYXBpLmRlbGV0ZShgL2FwaS92MS90YXNrcy8ke2lkfWApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNwb25zZSBnZXQgZW1wcmVzYXMnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBsb2FkZGF0YSgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIScsIGVycm9yKVxyXG4gICAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5NRVJOIHwgTmV4dEpTPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+SG9tZSBDbGllbnQ8L2g1PlxyXG5cclxuICAgICAgICA8TGluayBocmVmPVwiL3BhZ2UwMlwiPlxyXG4gICAgICAgICAgPGEgcmVsPVwibm9yZWZlcnJlclwiIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbmxpbmt9PlxyXG4gICAgICAgICAgICA8cD5Qw6FnaW5hIDAyPC9wPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICB7ZGF0YWxpc3QgJiYgZGF0YWxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbWxpc3R9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtbGlzdGNvbnRlbnRsZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW1saXN0Y29udGVudHJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaW5pc2goaXRlbSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvbXBsZXRlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiAnIzczZDU3Myd9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpbGVEb25lT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShpdGVtLl9pZCl9IGNsYXNzTmFtZT17c3R5bGVzLmNvbG9ycmVkfT5cclxuICAgICAgICAgICAgICAgICAgICA8RGVsZXRlT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=