/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkantd_admin"] = self["webpackChunkantd_admin"] || []).push([[890],{

/***/ 40790:
/***/ (function(module) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"text-overflow\":\"text-overflow___RR7B3\",\"text-gradient\":\"text-gradient___2_PNb\",\"background-hover\":\"background-hover___8j7ug\",\"result\":\"result___3JpRX\",\"requestList\":\"requestList___37aLe\",\"listItem\":\"listItem___1N3XM\",\"lstItemActive\":\"lstItemActive___3a5vT\",\"paramsBlock\":\"paramsBlock___38_H4\",\"hideParams\":\"hideParams___2iQDY\"};\n\n//# sourceURL=webpack://antd-admin/./src/pages/request/index.less?");

/***/ }),

/***/ 37146:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": function() { return /* binding */ request; }\n});\n\n// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\nvar objectSpread2 = __webpack_require__(28991);\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(67294);\n// EXTERNAL MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CloseOutlined.js\nvar asn_CloseOutlined = __webpack_require__(89503);\n// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules\nvar AntdIcon = __webpack_require__(39461);\n;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js\n\n// GENERATE BY ./scripts/generate.ts\n// DON NOT EDIT IT MANUALLY\n\n\n\nvar CloseOutlined = function CloseOutlined(props, ref) {\n  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {\n    ref: ref,\n    icon: asn_CloseOutlined/* default */.Z\n  }));\n};\nCloseOutlined.displayName = 'CloseOutlined';\n/* harmony default export */ var icons_CloseOutlined = (/*#__PURE__*/react.forwardRef(CloseOutlined));\n// EXTERNAL MODULE: ./node_modules/@lingui/react/build/esm/index.js\nvar esm = __webpack_require__(21693);\n// EXTERNAL MODULE: ./src/utils/index.js\nvar utils = __webpack_require__(99871);\n// EXTERNAL MODULE: ./src/utils/config.js\nvar config = __webpack_require__(73082);\n// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js\nvar es_select = __webpack_require__(34041);\n// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 9 modules\nvar input = __webpack_require__(94476);\n// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js\nvar row = __webpack_require__(71230);\n// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js\nvar col = __webpack_require__(15746);\n// EXTERNAL MODULE: ./node_modules/antd/es/list/index.js + 2 modules\nvar list = __webpack_require__(58900);\n// EXTERNAL MODULE: ./node_modules/antd/es/tag/index.js + 3 modules\nvar tag = __webpack_require__(6308);\n// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js\nvar es_button = __webpack_require__(71577);\n// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 17 modules\nvar es_form = __webpack_require__(76704);\n// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 2 modules\nvar es_checkbox = __webpack_require__(9676);\n// EXTERNAL MODULE: ./node_modules/classnames/index.js\nvar classnames = __webpack_require__(94184);\nvar classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);\n// EXTERNAL MODULE: ./src/services/api.js\nvar api = __webpack_require__(64172);\n// EXTERNAL MODULE: ./src/components/index.js + 23 modules\nvar components = __webpack_require__(81676);\n// EXTERNAL MODULE: ./src/pages/request/index.less?modules\nvar requestmodules = __webpack_require__(40790);\nvar requestmodules_default = /*#__PURE__*/__webpack_require__.n(requestmodules);\n;// CONCATENATED MODULE: ./src/pages/request/index.js\n\n\n\n\n\n\n\n\n\n\nvar Option = es_select/* default.Option */.Z.Option;\nvar InputGroup = input/* default.Group */.Z.Group;\nvar methods = ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'];\nvar methodTagColor = {\n  GET: 'green',\n  POST: 'orange',\n  DELETE: 'red',\n  PUT: 'geekblue'\n};\nvar requests = Object.values(api/* default */.Z).map(item => {\n  var url = config.apiPrefix + item;\n  var method = 'GET';\n  var paramsArray = item.split(' ');\n\n  if (paramsArray.length === 2) {\n    method = paramsArray[0];\n    url = config.apiPrefix + paramsArray[1];\n  }\n\n  return {\n    method,\n    url\n  };\n});\nvar uuid = 2;\n\nclass RequestPage extends react.Component {\n  constructor(props) {\n    super(props);\n    this.formRef = /*#__PURE__*/react.createRef();\n\n    this.handleRequest = () => {\n      var _this$state = this.state,\n          method = _this$state.method,\n          url = _this$state.url;\n      this.formRef.current.validateFields().then(values => {\n        // values: { check[1]: true, key[1]: 'username', value[1]: 'admin' }\n        var params = {};\n\n        for (var i in values) {\n          if (i.startsWith('check')) {\n            var index = i.match(/check\\[(\\d+)\\]/)[1];\n            var key = values[\"key[\".concat(index, \"]\")];\n            params[key] = values[\"value[\".concat(index, \"]\")];\n          }\n        }\n\n        (0,utils/* request */.WY)({\n          method,\n          url,\n          data: params\n        }).then(data => {\n          this.setState({\n            result: JSON.stringify(data)\n          });\n        });\n      }).catch(errorInfo => {\n        console.log(errorInfo);\n        /*\n        errorInfo:\n          {\n            values: {\n              username: 'username',\n              password: 'password',\n            },\n            errorFields: [\n              { password: ['username'], errors: ['Please input your Password!'] },\n            ],\n            outOfDate: false,\n          }\n        */\n      });\n    };\n\n    this.handleClickListItem = _ref => {\n      var method = _ref.method,\n          url = _ref.url;\n      this.setState({\n        method,\n        url,\n        keys: [uuid++],\n        result: null\n      });\n    };\n\n    this.handleInputChange = e => {\n      this.setState({\n        url: e.target.value\n      });\n    };\n\n    this.handleSelectChange = method => {\n      this.setState({\n        method\n      });\n    };\n\n    this.handleAddField = () => {\n      var keys = this.state.keys;\n      var nextKeys = keys.concat(uuid);\n      uuid++;\n      this.setState({\n        keys: nextKeys\n      });\n    };\n\n    this.handleRemoveField = key => {\n      var keys = this.state.keys;\n      this.setState({\n        keys: keys.filter(item => item !== key)\n      });\n    };\n\n    this.handleVisible = () => {\n      this.setState({\n        visible: !this.state.visible\n      });\n    };\n\n    this.state = {\n      method: 'GET',\n      url: '/api/v1/routes',\n      keys: [1],\n      result: null,\n      visible: true\n    };\n  }\n\n  render() {\n    var _this$state2 = this.state,\n        result = _this$state2.result,\n        url = _this$state2.url,\n        method = _this$state2.method,\n        keys = _this$state2.keys,\n        visible = _this$state2.visible;\n    return /*#__PURE__*/react.createElement(components/* Page */.T3, {\n      inner: true\n    }, /*#__PURE__*/react.createElement(row/* default */.Z, null, /*#__PURE__*/react.createElement(col/* default */.Z, {\n      lg: 8,\n      md: 24\n    }, /*#__PURE__*/react.createElement(list/* default */.ZP, {\n      className: (requestmodules_default()).requestList,\n      dataSource: requests,\n      renderItem: item => /*#__PURE__*/react.createElement(list/* default.Item */.ZP.Item, {\n        className: classnames_default()((requestmodules_default()).listItem, {\n          [(requestmodules_default()).lstItemActive]: item.method === method && item.url === url\n        }),\n        onClick: this.handleClickListItem.bind(this, item)\n      }, /*#__PURE__*/react.createElement(\"span\", {\n        style: {\n          width: 72\n        }\n      }, /*#__PURE__*/react.createElement(tag/* default */.Z, {\n        style: {\n          marginRight: 8\n        },\n        color: methodTagColor[item.method]\n      }, item.method)), item.url)\n    })), /*#__PURE__*/react.createElement(col/* default */.Z, {\n      lg: 16,\n      md: 24\n    }, /*#__PURE__*/react.createElement(row/* default */.Z, {\n      type: \"flex\",\n      justify: \"space-between\"\n    }, /*#__PURE__*/react.createElement(InputGroup, {\n      compact: true,\n      size: \"large\",\n      style: {\n        flex: 1\n      }\n    }, /*#__PURE__*/react.createElement(es_select/* default */.Z, {\n      size: \"large\",\n      value: method,\n      style: {\n        width: 100\n      },\n      onChange: this.handleSelectChange\n    }, methods.map(item => /*#__PURE__*/react.createElement(Option, {\n      value: item,\n      key: item\n    }, item))), /*#__PURE__*/react.createElement(input/* default */.Z, {\n      value: url,\n      onChange: this.handleInputChange,\n      style: {\n        width: 'calc(100% - 200px)'\n      }\n    }), /*#__PURE__*/react.createElement(es_button/* default */.ZP, {\n      ghost: visible,\n      type: visible ? 'primary' : '',\n      onClick: this.handleVisible,\n      size: \"large\"\n    }, /*#__PURE__*/react.createElement(esm/* Trans */.cC, {\n      id: \"Params\"\n    }))), /*#__PURE__*/react.createElement(es_button/* default */.ZP, {\n      size: \"large\",\n      type: \"primary\",\n      style: {\n        width: 100\n      },\n      onClick: this.handleRequest\n    }, /*#__PURE__*/react.createElement(esm/* Trans */.cC, {\n      id: \"Send\"\n    }))), /*#__PURE__*/react.createElement(es_form/* default */.Z, {\n      ref: this.formRef,\n      name: \"control-ref\"\n    }, /*#__PURE__*/react.createElement(\"div\", {\n      className: classnames_default()((requestmodules_default()).paramsBlock, {\n        [(requestmodules_default()).hideParams]: !visible\n      })\n    }, keys.map((key, index) => /*#__PURE__*/react.createElement(row/* default */.Z, {\n      gutter: 8,\n      type: \"flex\",\n      justify: \"start\",\n      align: \"middle\",\n      key: key\n    }, /*#__PURE__*/react.createElement(col/* default */.Z, {\n      style: {\n        marginTop: 8\n      }\n    }, /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, {\n      name: \"check[\".concat(key, \"]\"),\n      valuePropName: \"checked\"\n    }, /*#__PURE__*/react.createElement(es_checkbox/* default */.Z, {\n      defaultChecked: true\n    }))), /*#__PURE__*/react.createElement(col/* default */.Z, {\n      style: {\n        marginTop: 8\n      }\n    }, /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, {\n      name: \"key[\".concat(key, \"]\")\n    }, /*#__PURE__*/react.createElement(input/* default */.Z, {\n      placeholder: \"Key\"\n    }))), /*#__PURE__*/react.createElement(col/* default */.Z, {\n      style: {\n        marginTop: 8\n      }\n    }, /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, {\n      name: \"value[\".concat(key, \"]\")\n    }, /*#__PURE__*/react.createElement(input/* default */.Z, {\n      placeholder: \"Value\"\n    }))), /*#__PURE__*/react.createElement(col/* default */.Z, {\n      style: {\n        marginTop: 8\n      }\n    }, /*#__PURE__*/react.createElement(icons_CloseOutlined, {\n      onClick: this.handleRemoveField.bind(this, key),\n      style: {\n        cursor: 'pointer'\n      }\n    })))), /*#__PURE__*/react.createElement(row/* default */.Z, {\n      style: {\n        marginTop: 8\n      }\n    }, /*#__PURE__*/react.createElement(es_button/* default */.ZP, {\n      onClick: this.handleAddField\n    }, /*#__PURE__*/react.createElement(esm/* Trans */.cC, {\n      id: \"Add Param\"\n    }))))), /*#__PURE__*/react.createElement(\"div\", {\n      className: (requestmodules_default()).result\n    }, result))));\n  }\n\n}\n\n/* harmony default export */ var request = (RequestPage);\n\n//# sourceURL=webpack://antd-admin/./src/pages/request/index.js_+_1_modules?");

/***/ })

}]);